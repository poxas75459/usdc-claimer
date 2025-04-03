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
    "4JCyrsj5PiL7u3SeaMwRKH8JGSrZZro6UMxMtfgJAvmiPNCE7ohqaauRAud9Pp8Hu1u4zfxHNCMqht91Mexb2qCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aq7vrq7nmrD4uoxS1b9EfG9efXECdaqFJwseme469yWyk9Lp6zUoH3j9HzmEhnsLFjYGwDzHGT8R8Gh8Skf2rkd",
  "key1": "3u6THqMSpWanr2oYMARn8MvH6wbz9pPzcHTrgKUir9WMuLwdZ1VV5uaQFPjTzRWyJDfE5xRt5dXbkUYQh2akTBPF",
  "key2": "5eRRFjKcvT2ma8e4dArmpyCq7z7AX5ErzTtWEiSS5GyEApsdd7iFSH1abftsxVFd1Db6oXpk42XbsUgzBk5MWK4z",
  "key3": "X8mDpBfx2b6zR1iriwodmSwTLnH63VokKdCVzT2DJqiHNwFBGChLHb76jF5QQMuJ9pXuFVy3pcGvPhFsB3m6htx",
  "key4": "3uyoXN8kaSJpKW67B2RCz8xXaWd6kz2TXCTTpQ3LVqRBqm5pXCguZ3ogRy2h6xkmNkUeeQViQJjMa2nF9zh7mMu7",
  "key5": "44cMFREJMt6A9Vs8zPRhpLGrqsZrSYKaxeCr9MRh4gJnZEc9hGNhWvsTSFfpH6xQ2RiRx1bHZ8fzXcrPWeSJHGKc",
  "key6": "42M7dLw4RpcUfL1rF9BqV8MGJZakRCM4X6TLN5jZazg7uZQcGq3GXQuVdGoq7huZRxv4Gjpq7eyDoBxH1iRgmXyX",
  "key7": "5Bt3k8GyjyUZM5zFtbdnVDPnYuiSJaJdVSCbKy5EVbiufJA4aJSnT88ina2HReUhtGTGMMFH6SUc96k6CuUR289n",
  "key8": "4sLNtq88g8wQJ4n6jHLcoFSVqZ1jT8LrpDGTZdhMe6ZvFtUsTzELXV8F9GFxYVrCpzktTeSL495MGkSvgM9mkqeZ",
  "key9": "2bjngwGDSiYo2nk4seXnmxHqQKi4gMKAFaFB5XHfRYa2ZHfysQbTPYEmgdSimFh6RoW8UDCsotPt5XY26h3v6uyi",
  "key10": "3HLCY3CHYjH5LCLYHsCusY6AhgBw8QAHYe2QtYiqcz53vCnHRWdyqbRdMY3GR4nZ9QJH44KF6gSU8NTWSDYXTvTt",
  "key11": "52M9ZbVTqZtJ8V3CBc12onFDRFMEAaNjxMYGq3GChnnUrQ3LRKAneGTQU5tX5gugjbHcB9EVTfnT414VHWyJfYXK",
  "key12": "3bAi81KpzVisyxvAEsDQVQ6WrKTmVHogLX2gFRPmKbD5Wyo7CWLrZwTTdcZeBdJ2nSPqJnLRtie5vH2itiVvq2aJ",
  "key13": "3jZ6vVya7MrrQE2oZnxHsNScHhaXFmyyw3FtnMMSTAZ7TuvKsr19LREA1oYs3MJpmgpv4t8Ua6yzfca5LXTHY97n",
  "key14": "NpjFpVxJczC9rLm169yp1HxuKcF8mqg5GKYoHvVujSX8eZAVaWsyVHPKKXRnSJ15Ub59UxTu7afLLNDwo75np7X",
  "key15": "462K818vCLTQZtEap7kjY6qwR6CM8KGJVVDLFE64aH6vdvx9zMDW6NkAmNthbxG96YC7zknu8NsvxXsEHatrwKjr",
  "key16": "5jqZdC5kRbeXE5ZJE826LcBHvtoCNwGHCqfy4RmEzoDfw2ANnjpoHdJXN6bnDuEoc4ccVE2ZxCASLfmmYRmBrnbb",
  "key17": "ktabvZg3NfPyZ4qCxH7r3t6p1svjGoYeFfmzbQXSQ7zFcReWUNTLAmGoBP2gaqMn9JGFD8ZBn4orzPpthpHz4Jf",
  "key18": "4fyFmV3Ab3mbx1LvSp4Sekrmm42TYcrCQnGNmf5shiiCCFgEHtJ5xDaaHC6KmAanrEDXHMVmy9VknEYP9gaJHbox",
  "key19": "2huEYChDDaGY5Pquu4THqbrNRRqXBQZXahVU91vSwq2pZDRRbAPbzgyVW7PZxy7p2ETcyNxFiuuTNCXmMUvzFKcs",
  "key20": "ybVM1QoZmKNUF59BfRpzjGH5mPGVrFR6jLnPB4E3bjMGUNWEyFcr3MovTVq8x2tVzUTtxzxhdbybyLcUAPtkrBU",
  "key21": "2AAexYY8R6H5GEx4DnowfL2Yth4DV7dr3Rs5shz6cuQ5sLBWGRp6ER7w2VVeXGSh8AkyJKjuHYaim1F9NcrE6dUA",
  "key22": "5VYNWybgfHiDaUUCKL9P4iMHp6QA2gBMZW861o5H7iBiz6GvrkDWH48Sy9XB6e7pBhL77Zfduf2kZx3m9nNFrSUh",
  "key23": "5X4QCjMGqiQKWb4aLHPpk3keMYD2c22RmgER3K7Nyd6L5rYt8jihDnCyHNVquprKtTrqpmMsvwAh731tMGjav773",
  "key24": "4uPmjk9k9wWDZyuvtC8ngvFaJp93L2T4mMuNuzMYinsbUvkgdBrYEWaUT6obxn9wQ1tonhCVmURggQ4aMuQ4bjyA",
  "key25": "stf2vePbN8qzvXSAqQHLytxH6z43V7gniwGAaiHtH1U6h9jvCewuxrtxhyxMZatTME4sMQAKVSJ8QxdN2i9yPsQ",
  "key26": "4YfRYovdc1A8LVG15rhBct4xfujRzXQ2vnZdt3gnK1C9qmYhGhSkEp2uXLwZnGd8KVNBUJ93ief6Qg3muPPEMaZx",
  "key27": "omSvpkVtQdZgxpGu5T9WbzJhBRBwpBEBv7LRGdA9NBEVzeYJm6X5wEnty6szVrrwbi43STT8XW1DoSq44FgUudf"
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
