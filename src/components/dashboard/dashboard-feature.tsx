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
    "3swsAnncJzFxWD18SxEJW2e8jdEbP9oXb5fYvFiwhbwtF3RYoUMFwtkUzShgZxsc95ZdvHPSRawosF3AmAAHAxzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5trKFW1tTq1q1JURvh4jdXsS8V9KY49JgqETbaxEk2qwKJxcVBjvA8sSZ8PaLAEUKAMUh4qJyKbxiPjG6ybkJSSN",
  "key1": "3a746q2Yw9zo8TU8VwrVGVNiM3At68HxuYPdh2tD8nTguqijfPYdZh3czpvKWJbU6tEAAbCwYri6rwALQMo9Dc79",
  "key2": "5PtgkonkmhrXAJubZASefCR34vm5U39fqDAXyeSmMCq7XgkZpNgaQzxSR29wZck6GsvS6EbBcBq5Avatqc71tnZE",
  "key3": "3ahQf6TK4NqcnYz15mXHSxtbCKeuyy2rgj5UeJsoVTjqqkZXLAZ1qTt3KYKR3rqcvW3fZuN56mwLd4ekMXZuZ9Ne",
  "key4": "46ikqCmH1LPygHy834xFB6ciraopnEZtVYEMKVqhecMcUNJbjwLdiQQnCjcTMw6XjddqgS7RAQRsxr6KEwUL86vC",
  "key5": "2oBUpRTBx53kyJYmwvBvGVqD2kn2JVxHVUmtFQauMZ6uh9pmKWuwkmeMAVDg4PUqWyg9Q3Pbnv38zpijRMsmkov9",
  "key6": "2mSCiLhnVth9aKsKE7R8VmSLs3w9izfb744isJPREXqnsKz4mnRU4L8bMHUugbfyN79RQhufpitToMaCg1KdD7Sj",
  "key7": "441NCicELezPZnY9BrgTeMHZT26e95PBwVkvieZkkh5UVLTWK9aeMWnghYPyFKRPP8Hh6xSjwEGRbsEVUxSh1bTS",
  "key8": "64CrxMMseTu5EVUhAx5yz9BX69xubWxow4HVBGgZoFdw8snJHbF6FUv715UF2bP7FwbdXzmVRSABz1ADNKmxC4cn",
  "key9": "3urqp1omZbMnurHvtFr3ZcEVexJqatFp38mrVuaKxUSQGrX9NGoAqX1jMrhF4FcK1tieQYGCnxvJqe54cus1YsBM",
  "key10": "41cCsMrGaxkTmZQda5WW1i2dJCm4ZEJ1cubQVrYi4XfjoEUwZraUrXZowsnqrLk4SiREqkjPEve1T2R9x6qv2FYe",
  "key11": "rByB3Y66PHDsuR8yDStEAqoV9qxXBuc7JL1RZo5gYKiZkHEjj7wzm6fvcuKUhyjcB9UhBvEaofQdjjd7gaFwh8J",
  "key12": "JmTnb7gJUxaGG4PVtcGjLPLEnH4jqayMAG4N61iiVQTgZA7e3onmmsGRZjsTCVwV6uB6rrkhkREjwUGqaB8Nm6g",
  "key13": "3riBDvTZHHwUG3NVr4AKTTNvdgFn7iuiCJTDyizQ1CHKSNob7nmPyJiipMSU7MX7sAQnhPL6vEPvPVYu6aoTUHqF",
  "key14": "4ZPiRHx1d3TQnaRXJMbQ2jVBb16R3GuGNHdnFes5MeD8TVBUiFtLDZ5YHFvWTiU9FevB7ZafdTxjDgbYbUBqK4jZ",
  "key15": "Sb64NA8hBYTLCe8vDDETTVoEKzB1cm5SynTUZADrqZnbmU2LKFM74timMR1fjGrsDiFmCBvaFAaemekdsfpLZ6S",
  "key16": "3pRUYs9W8TAPwHSBmfVSyP3Z6FnDQKMmtKFuR76R1fSnyPGxSn8nJXRUsBeCQ6c9CQqoHV6iDArWGAfT7BU7MG2F",
  "key17": "39y9Jf5ktj7C1Ev5Lz95NSj6JzqvnQhanaR8x2Povm1YRSPVunhNntCt34fcYZ2KYB4XbMoTJrN2Bt1YcJZK6Nyg",
  "key18": "4doRTzpYwFHjw3fRZ9J58ZDkX7uqiKfLkbZQUVMsGTBwkgbBkAxLFn9aUFTSifTqkaJjUKMhRc5PUWHrHaF7CHzi",
  "key19": "xdDc89EaxvuUYmocPwSV76eheaWebuk6oTSYjgm84QZyeUcxqvjrUnoQ6XJccY7tJ3E7QVN9uzjs3RDSCYgBVGE",
  "key20": "vFo5RUaowyAKMA25Bw8x2DpEHZZuS6gzCKc4zebqN3BhyVEpGCF3eveQdXi9NQMHMi6s5SsYcXbkgFctm3if6UT",
  "key21": "4ziRV87GnM8tZHF7Nrw7LvvoPHXwevE2BjEeir7oy9phpebsfGxLh6BB9ZF3WGmKJxHzonBkpRMLCKY6sMQWkVTC",
  "key22": "475NgE7wXTzMeHQD1uBktSw1kGcFRufzjppXAs4XAmU7chRrETsfbYvtobyLp64YqxgMBzQpKyHrUz2dpRGuw7Na",
  "key23": "3Ty2fdYAWsnY21TWkJcUSwaEDTVnjaMabwS1NfbdhtJqVsG2Gi6kAHZmc8vMGzER25Zptb7tfvYraov6F2xnLVLf",
  "key24": "3eMJbZfoqWVtbSshWH19ac3v8XsmmFjXHp3X1QNuSEi6gZCwbBsjrV9jNs8ymwDZvrChDv3Ye4iRNYQCEavojS8i",
  "key25": "3VGAEoa1BqsZTj4fKfP4FhAnGthCXkVSGReNxP14oPHzEu6VK7bfkNCy1EmXyVNrpwHeoLWCz17pmM37b57Lfw9A",
  "key26": "5L411LkZS3ThpQrfLxH6q9j8ogQXfXPaWu5TcALqiYCtG8WKtr3pmv2JgR6Rcd8k54yKMBWwUMGLKoEft9F3xjov",
  "key27": "3exnBmf7WUvRi4qQTJmkgLjPaTdW2QodtHYYkXpE87Ht3qYBLXMwfjRWE79stJnVMRVgUZMdKsW5NBuV6vHdSHXS",
  "key28": "5Tr4FfewSh4zpRDWQEUkpZh3v2N7pRHi3ytmyH5ZNsekYJSkQX9DtEGHvV1a6JWnpzSbBFWQVJvA1vAk289CMfAz"
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
