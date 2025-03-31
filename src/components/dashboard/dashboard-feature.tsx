/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3awhffwHL8u23MM733hEXErkpvoLEc8QEeYhE1kbtXCBexMbzkoazFiqazmtzJj3h62PRRmDbbEq7HdLLxXrioA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G6Qu7Tcqi4fZjnoyN3K7hbMTE4oeCWVujTKfa2Z854UYLLXHutTiDzwym9vG8R5VXk9TkTnvfPn9mqLSCrTrQFS",
  "key1": "4upuCXbT49BcnVN25JXDmPv7Wid67Z1DfFN1BAM18hGWMtVpTDMHpGWfDxfg75ZtSQTzcFPQM7JVWtLC73HFXniN",
  "key2": "3mM84nrLHoZXydR8va4gdMBTLiz6i2HbvKoZB5gFP8TZYm8jceUpqegey7y9dseUVjZCeHNoEmGAGPbqfD2jnUzK",
  "key3": "c7QDQX87NaHpgjjvs32LyZYMfgLcvNQzBoQkm1FwXbU9UXhWEVVf24fsCHKV4X6pFzM5hU5zkWasKeShUSiPnfu",
  "key4": "3qP7M8h3GTb5ZHQTxesHCHv4nA8iJpjv5DDgjorZZ53UwfkyMAfigK1QF38byPWXP2kytXGxa8KfDAQEHCEm9gWb",
  "key5": "4K9Nwky6MPbc7JPXanQGHnmTVWFqbTTtQbf3y2NtxqJwzwxJGYfzufwA4FmG5fusyFTScc46FyuTPn1rnB7XHqpv",
  "key6": "5b4uFYzg8VbSDvQGAGAJ9tPs2WVkUjH28gQKLpSGjSse6deSWa9qHU6CiapKhiAuF4D6eXoUYdXxtjX39BkUh6rZ",
  "key7": "21iYDiCxzcSphvDdmpCSmcDxVnKw8bAKoS9JABQ2apsQUz6seu3AnwsP9hGUhEamVoayHcTRx74BjDkCGwmguTeV",
  "key8": "62BUVDBgqhTH1aLGPM5y4oTaEHVgeJn4XMc831oZDdvoXXBcead4Uq16fMsLiKJNepcEmkumgqsURAgJBcXLPq7h",
  "key9": "4g3uX4pTxqZBRniKN1mUgDneyornKdf39ctYGxeJYSMj7BQEckqnnwqgEWuNHESqk3dpWhygv2g4YBH4Lek6u4sx",
  "key10": "3JZuWeYSPdXbwFtaizQNLaYSL2GhtnKUqVoa4mFwNPs6diu8JSMybLqfH1nD31FeQUyowKch7XaSjhXxPxe1g4sZ",
  "key11": "51iSTzQjsukzEfZKAoBfrryXNanYMZeC1dK7v2Gq9MwWc1mgjYnkaAJTLZ3RQAsKUhoMtvC9BxAf9XviLbwxZpiJ",
  "key12": "4ro6qMicbunsyNt1GEWJYs6nbm6HgqKdXtirTMGhn7nS2BPpvWUTLhaNzCvFKRrWoHKSemV39BS7qz7tGA68Hhjo",
  "key13": "2RkaB1uoYM8Ra5cDx6zxLheQoRvD6P7q53LnKqnUgPUVYwq1NWy28sFzQSgUP6ga7Tf4dR1eWhZoQQ1mk3xX8AsX",
  "key14": "QAJwMBPFrBicDprbejbj9rLNvBdezJSeWbbMeECFLqdqbU6oNkHKmsh335XYbJAXoQFDYN57mPYMphvrEgoJT6d",
  "key15": "4B8aQHjjEa7X4FZm8oJKL4KaN3pDVTJnKMNb2kHBjbbDevtEJ41kr3uefatwDJkGgegiYuWGJQYsENETPzkDsa6Y",
  "key16": "5DXnSoyrdxcS7s59orsMz4y8paLxBzjb1rt17XF3iA2VLjmknnLGNUpGRGQYyH69WWreNagM9WGu424qkFD314p4",
  "key17": "3ZpqcDea8EP9v4JgKVxY37LD88Lg7kV8gzqnpKstCdyamm7iqFoZ7oGgHwV1Kf371AcNxjQN5vWA5QzGygtGXHp3",
  "key18": "5ZuXMpS9o3UALk4CeqeFgRWXSovuwiNdm1ZQs7HdpEx9ajzrxeRhp55Y8ZL8TmovtffRLmsqQJRKdodiPLq7cgzJ",
  "key19": "3uqfeipKWmjvHi8md9BPHu6PbKp2b9fAzwyv9q1RFAmYZxjySLpeJby6CxBRS7mtpcke3MzQ4EDcewkcfdqHsu6s",
  "key20": "fNhkfwimXNJQfqMFnXTxR9gttC3roJR22tYsW9duBtdLgFKEdZomxUZWFBwAjf4rpoVfD7PnwcHtwEe1GSfnboC",
  "key21": "4hvUMyvmP1bkzQmDuvf2v59wgiTFqgChCYYo1TQbi2Ab8A82JNHZ72eVtomZ1A9C18jE51oWxrupUU5iw2V6Nngd",
  "key22": "FPqHCXkADHCVhigjpWy8abFrHWkxDysSgxqCZgMQE1bMm5bshni8MkpnQeMjhq6Mkjq9wS1Ed2Pp8Ns6JQ7dk1A",
  "key23": "KpRxiRXQW4aaC9aC5GHdqbmbcx5tLgWhU7zHUx5SJa27fGW5nPwpBzcHzpv2nyheL81Mt6Gv7XrurXBtYwta8GV",
  "key24": "29JBckthd2JdbCwdvxAHjihzDYNAx4PS57PLdBeR4JR9RJvbkbfi4EYjWx61yCt8JSL39h5RTdBjqWx5TqBiPgZG",
  "key25": "5CXKD2KKXjFEnJ2evF39sTxYMVb3c1jiFhkiJZx41Upx7yWio8WCbGbebeVbTF2giW5jajeSdtagm86JFbmHsxPi",
  "key26": "126WsZWcjE16hoAzjbmrKpTWVwHkrTDr83QxvvCDYXhaV8hJeqfi3VYSnKQs8UBAKWCSDdrzKAjRQJPURrBqnmtf",
  "key27": "p3wYwK6sGi7S9vCA45Gc3yptfseFJcMcJvWb2necqBn2CVo195xuyhmzRGKer5UQTdvpeBgPthpUvvrmDuW9rnQ",
  "key28": "4RfNNeo9svRseyexJBLUifUVk76GRapXMNrx1cjhw2YhVZQpjnBkK5jd4RuPeYcnY3GBGo8bTkKwgg1WnHVeCdy8",
  "key29": "2JxU4CSSyDLgcixysai84ScExKrSqEuimiyPVjaHgtb567MhVDoAVAAdiu3cyzgC5mTf8dFpFuV2nBCvfHQp7grt",
  "key30": "3XtW6bNsCZQ6uGSnRKCduBbeBcKZNcKjhEZTMWkezCsuAYKkHZewYsqru3vhDDxhqeSb5yC8oZA8kJHWn8PDrAg",
  "key31": "4E77in6Rwxc1gVBbTUrV4UDpDSBWrezGHqXebMHPaQYjHycPJGNhPQkkLWMiuQgAeRSxD2bPnx11MabAjCFtXDQS",
  "key32": "3dWVr7FZ1HAHBrFoQVStBANKFiCxycugLRN9QSMrW9X8pb5QqJCbL2nZiqo3xuB9J1x6y26w9ARAYkR4vFALH8VJ",
  "key33": "4bQPorctKUMJnycFrqwfCp63FYFKj1QnkC3AtgHdqfDh87zbcttvSBaL4oR71mKcf76V1PPSCBxGJ5esLPdEPSFV",
  "key34": "DoV37HtQwsrw8b8WiFQitARHVBMU7p5EMmaqWY3dwaYPgnveshvC2pQjd8FxpFzzYiYTiZPUjsQx4JR7JMxVEJ5",
  "key35": "4PmNxwbRuggwBKgKFXJ6xnyNSx5okuoSUcA4V5eSiNZvG1VQPwUJTA213bwWTwB7aCTRxVkdypa3CKz5sQpqSQGA",
  "key36": "3XZMFr1i1dvWmCYHihUKRXWQMrBGgrMtZqzkJhGdEgXKnF444fLMVWDrj5Kzin2dZZ9H41K9feJkLVEi5HpW69AU",
  "key37": "5LcGtXPNgacKJPiuqHgNxqFnJ3p9cpseHPkL6zP53okkZ7TvYpncW8K8865o22fZUTdWzioXWHZAG8BMjAzGiR75",
  "key38": "sQQVo6prViBzRsNyjD2HRPbQmuMmcu2TcQCy7HWi1GSaWeHwj9cfgHkHGCEP3vVfybXSuCxtXiRiqRQ7CqPw9CH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
