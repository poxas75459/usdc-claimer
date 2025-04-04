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
    "2ipfhGebphtVbKbi8J4oo3kW1SwV443gLrarkYB13nLzTuyy6w6PVaj96WJydkSDMZXdrxsEYWrFj4dtTqWRvopL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mQE8XubmKD3qC9fpecp8T4KyrqcwRFmyNubh8aueTs33R7j8SYGwjWmqv6HXtWv8xn53XsGrd27y2nLCoeVqRVm",
  "key1": "3RDAvnvv1XojmCFuCmrtyKycwmmx7DKtQANkXDbtzhnmQqYpZUdSPHnLACEhXw3oBRVAir2Kzxc8PnxeWMbJsnvy",
  "key2": "5JrYffT8JmippXVsDny2sUzxB43nEQkoJEkeWGaUZJ6Rg5pUyzuUbusVFFD9CnVVLNNvGh9DevdS8yrupXoTRikF",
  "key3": "35PsQ8Pf5NKbcGRgEkZLJETsemwAo2ojVUTMjNbPXUWRFeK6AwK63bcUmzHuYecRwSx7DxwTwkUDeKvG1RQzo6rY",
  "key4": "424o2FPrTUFMk5Na9PM53dFdDS9JNm46DgGmDMFa5ZLGvs4ktzePnwre8DmrzKBtTYWdkZVq1Y9i2A3PXPSA9bvK",
  "key5": "23fZMudsok1e54hXRLtnB9h4xPc5ha43u4AnX1xo1HqNhhoK8JY6ZVErSuyM8gWKsvoopc8QYLw9g9dTPxH1B137",
  "key6": "4osXiEyHX8CyWPPxoNxnxKnNHWCenwYdtb2yBSBteYhbkPWZxYrHGaDiw1cndTAL4TXKZsjhKJSPuFDejfquF77d",
  "key7": "4XGyCCS2aRCtUaEmDWb3dvdaF5feG9yioriYKAG15TLHe5HPQkbVmTHRPRggMpkbQ6Y6cWwZyygK3xJDu4UcKZqe",
  "key8": "5gPkPm9oHCQve4pEn5toUHi7dGSaRXpcsLvMpx4AyLdbEFVjr8LAb1DctfmdnimQAnoTSceu7dLPTKRq9F6wRmvo",
  "key9": "4J994Wsxzam7GTbCH2oTFaCsJz7ingBDCA95Eq51AbpYQfDCSrZdxUjwiHRgCEVvYWEVwK7mx1dCB96JKKo6Gadq",
  "key10": "3zGj2gWwnVmdDYoz5mGuD7ZNHoRv8grSh1syk2rVirZgLsxS47jvc2R6xqqFGDTFfJvrAb8wcaARNCCmm4pV4och",
  "key11": "5NphX6Ee45Hd25PyasGesKUHhGVYGRRhB6jLG8voqSiHXjfVWdv5kcVEWFuZh8JCXqfMwEGcH6wsUHLLbwdPg75t",
  "key12": "5foZ56dALDUAcAz9kNFspbRmmQ5XeVXca1Fas4UbiTHxdUphAkwhFx8EtA3MWD7qys5HuNzbwCMAKEtaTAJvm45D",
  "key13": "5La55LjxLrNjDJhceZcLHN8g26tPhvqc3vCfRch42t3CFX8RNtKjj3fTtBvhK5sFx4a7Zu89svxyvrb5FFkc2J2J",
  "key14": "5Xm5BVJ7YA8jxGiwhRaApCKTYjYA6zvtKLW8AQ7EUQLu8occL6a9Pf6upBKf412hD64M5ZT1GGdXdq4QCToQLadZ",
  "key15": "4XHzVenKAziagezbcESxshgkB8Lq5cXfNCT8T9BZzQaZEYtUD3YQycHZsykCQjsf49ceUzZLtsDL61GfBHzA9sCJ",
  "key16": "xmkAaQ64Mapw32XL5GUR8FZ29fPK9qVNCGjpfsNNDhSS4C6oLjKVgr9n7hd5aijueV8rj7FucLnVhXyXmtpppke",
  "key17": "5Js6aBirjsZHqwhSzQBxdsa8gzmq1hEZcGDyTSp9CjrNxtM8zn7cvDUu9kKCatRbbd2hoV2JPvWQZXbJDvMDKeau",
  "key18": "2DNTbtbvTWvy26yuHvuzSkZfdLEupUmA8xChJJraEb2Erg9wPu2T2CQrEh9eb1kLyNb74LPd4ZKYuTeVZCa6F8or",
  "key19": "665avTc9etC76B2JdagdCf8zRbQYv2ABY64soqhwiqfVQjWRJbkG1RyD4gVjdCVNnCYV37NAjPtDPM2vdtARrz2M",
  "key20": "3JGMrmrohSR2L29KrmUWeUDku8CJyds6te5z5KBBWw65YgoCh3pVhDmcy3dtBP9shZUBt2Z3cFsW58LriuSrQQ7i",
  "key21": "4cAJ7DNgZgEqdrcBbLT8NWewp8WRsM54wTEGjbVEZM8ayFMtUZekWFzM2HkABXpcVFiH7wZvuwt2Rdq7pMv9jNNv",
  "key22": "MNG7VxPKUEBPkcHZWCsX1vJyo31biiJh1dTixqwA5HxBg7W5Hmi6hes11uJ3YAEEfmLsGjJyrmY4HJoMBjAxnZC",
  "key23": "kr9BEfu4Phbf3JYnhVSxTgoa3v7tGiTQhSPtnZKYq6SB8WEwVQUfk6hpLe3GofyYqxudLzkzBPqf5y4oWZwwx7d",
  "key24": "3yFzmnCo9kRLtgmUDYm1o7YhGgYpV8QSGzbBuYNFhdipUogC5NimHTGyyNCrFauhbETGEpCXkybPR7EyECdWHXze",
  "key25": "5ChWLo5UeNz9rnoA6pkCyKvQSS9m8NZUTw69mUUDYi9ejSsg3yadT5bv8MpzpcHcRpnyAHUCcGmgcd9A7oa3bZHw",
  "key26": "4ZzU2AVpf1uGTm4K7z9jmoQHUftQqmZLAT2cRTHBjBJNF6tYfF9gsLQwdcxDJaikEgjNCeaj1nJTE5BLxmxHZc6b",
  "key27": "5eHKCKjak2dwLJLsn9CbN9YqdVtH6TRwRxBcvAJRboMDvFD9SPGkup8y38DHJZKBzA7w2BF7sxECAxLDgbQzFGci",
  "key28": "3RGToicgxa6BH3JX2ruwr4hQYe4NfTgqM4jrhvdtcb9nQihnDn14rEeXmCbDyNdeXzG1jx7t1bfmnbxJB2PoHBgU",
  "key29": "3yHnToeoJ1mgiw15dmraYcu6VvTzvTbwa2wuE7DBgW2Wn5iwTznk4eWeVhupc1E6deACwqfxh6Vm2TDgogrXfr31",
  "key30": "3pzQm8QUzMYUXUwTNrA6sZDAcSZ4UNyFZSw7ZqqbDjbx8Mh1aYH53YfwDgQu74LBavDoJgSnPMg3KRr7S4Ci1mPv",
  "key31": "2T2YeKT4mWXSvjUX1G66GHnb6qmzWj9g9gmSfDWuYKYDjJPJ1LSGjVRfoYNKgAd4hP1DCx5oHTdNxXTfrJ6zTFYY",
  "key32": "26TdCEy5Gq7SscUDN7fQfZgtL3po33yzWQ43SnKos6h1KGAeUHAWmNXPCvujDyCsoLP3B33hR2TwzJGhaXZtGWBp",
  "key33": "3A8wTeZ1q7D8bo44ryN7GcNvjqXpj4i1VVtvAcDKJ5YgmFBmqZhNwM2VvTt2i5qy3LJzphhMjz5osZAa7SMFT4ud",
  "key34": "hCYxo8DGKEBsNnC41rE3L8p5b34DG7NAbQtb1kPWBoUA4xLaD9MM2L3Ke3wo6j2qHhmmN5Tn4jVDDT9eHBEgRpK",
  "key35": "3s4SMdVUQVAnMPrWZd7pYQetWeScr1Tjq63adpez3S9M5GZWHmjkEgSRVbWwysNRnt11XFWTt5GC12pYBn8GrUj2",
  "key36": "4Qo7NX63pGmpDV3eZpM14aGreLrkbLJAZ3gJQPtAg4TEiLNUHAMDAB2iWmwvtYCGYVN61q1rnxPC4vwTh5Gj9uJm",
  "key37": "2JPyLrqJ7M6bDdHm86KVFBoGsbbX1wthydqHJYEFXHj5p1kSt95H1YCrmsqnbQ68FA8t9DWwUWDpsh78N87cWvS7",
  "key38": "5AB2uvNgYcGMtHr5VSZaXiw8BAiFHw9TZRo6jsigiCcvxLg2L7dqaHLwpVhtpEj9RNq5NwdUaZkpt36FhEbcyqB9",
  "key39": "5omaRjB8PXkZNzCS3PgtF3eqQeVg8i3awcqeD8ajcYSN2UiMhpHBcXXw7Hage4jbk5uhgTWgotp9CWXbXmJenbMv",
  "key40": "3p7gHTVdzC7tKNpQXAzxtHE6JyXNbZGciYviuFdEZg3eopp11LKEQarG43QZuCTqcUTWs9DtGVv2wffk7WuYaN56",
  "key41": "45MzMfouDmz2T1arPT1rLSazAUxArRq4L8DgaCx3uwW47cvxqgMxUFvehAkdgqpyHX54f6cAY8mTf8NHsAUNTZ7t"
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
