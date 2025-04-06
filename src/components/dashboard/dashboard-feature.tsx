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
    "5mBzYNfvrqybF7Qx4fujFr7wtuRK8C3L1Q7RmoPsDL53uTKYRqLdQhrTXHtJUbEukqYhrFCvpcrs5qyc5FVic4i6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L4jx84J1MVVGcouv4PK3GMmg1ktRhcy9bHwe8MmkUtxhjYyzrQ6FGzDJPYWHb7fif3LffdKFATZw3CAWEAB4zwu",
  "key1": "3uFAw5P4SpJQu1kGPLeMxWCrnjLcwYHxvSZ6QxbqoBd2tJvKU19bB5hvD95ioR2P3DfZ7y7bPdzW8PHWFfuZ3yf4",
  "key2": "4S11fMTdGBBJ2WbGuS1i7ykTNtMBfxv9wBdEQeVYqWtDoSmkNT19sSstKVmN6qw6LLA1kcL4g2L4Umj2qfskf8Tk",
  "key3": "5DoHTbyNzRNbfNnJjn1QH7YQLvPSyduGpr5hMUiSJZBYeALHf6eUY6QnWckPkBSdPFioKmcyDwYjARR32fWaAZ3j",
  "key4": "5RnTxanxgbPpH4o6cg5w6YPQtbTkjpKmwzAJvXHfkz3W68MC6ouZYx8YTqgZQ1ERS3MdahJVJqBjnnBEYGZLA7A3",
  "key5": "3B3GjTdvNakc5iai8NGPD9PRwF87UeY4vh5UrmWNarNUpX65fSqnZDC4Bnar5euACCntKTGzwaiLgBa4Mk99VWLX",
  "key6": "t4HkPnD1ENwn4KSPUeZgc7CCAccyrukj5vaQi1iU7v9MNo5wujRiLwMrcJ4cwnh3N2Sw6R5HQ7VYHvGHXrNhcGv",
  "key7": "2wSKYRyozGsz27QkbicTgkLfvZ78peyHGXe5f6vx5FKmHxFHJKCYvtQ9HSERkRHNyjSeXXqqTAqA4BW1xyrK75jQ",
  "key8": "3yCijZAsZgfHTMtsGsUR4XRnKSKdyZxAxzJL1wRipEKbtthQfyowBD3xLZbbdikn5EKGqoVrydadsTQpm5rBqShG",
  "key9": "ukzWpkzC6Fyx4hKpsRhBrLefyJANP1B4VJe8ZFRHFc843JaczZXbt6ZFgM7cHqhFvWEUkiHb3Tg7CFtL5tmRbvh",
  "key10": "3hzi9usuCDSigCopiSzNyfe9d86TD9LdaopKWYRdYRfN2u7U1boNvjH49P4W4HGrsubT1n3q3mFQciTj6xoUnUYb",
  "key11": "Qpxwatoaz2AKVQFqfwiPQATrvQkRkJdfzLi3ow3WqF9ckpVtJ12FqVbVBfcSDGM7iisMNvRsaSbS5ciGNXS4uYs",
  "key12": "5yGAGG5f9gMgpGzDA7kNh21BZrz6njA3HuRj5hk4GwfgZxQ94X7tcFQqfGduTXS313AGQdkxjBctzuBU3hPvu4sd",
  "key13": "4kRjyJFcyL9YusGSGSkHFUhiUwWHbP5JMzrYW1S1P5TiivVQaYCWFTRuXpQ7hnLU8D321wFCyfVKAYDkASikeZW6",
  "key14": "2vzkMFR5yrhTYnRAP855MLjS33adzrZk4W6uNfQyxSpBR8WrVnhsQo83EuDo4dohenNbNdFGBdfXkfmi1sodgnWz",
  "key15": "3i5wmakfqGa5obqJYQXafAB8ii6wfBw6HiUBWypFbnTuwDSpbYdBa9ydekQXLoPT76DmXW6bbvxRHfmh3GcGdSZK",
  "key16": "4gXcEzBdHGysgcCkfaUcMLf9fXFsqCiZkS78nPFzxGFB2BPdx6RF35nbaEcRDTBynN5mJTthcwfu37QYFqKE92GH",
  "key17": "3FYhywLzuUddXiuiCjsEBWm6R1SrWQ3jBpZU1Tk7i8P4acn4cLpom4tSGQhE92ftELE7GUaoSgFMXczGKF3Bpgkj",
  "key18": "4ocTVBBKeWi1C1nVXBF6QXe69U9ELCRbLtoMfwZP1L84jmDPEuhLM4KGbiBDWrn2LAjkEaqtbjEz3Zrnue2uvX8L",
  "key19": "4aa9TTi54RbtkoRG64gCpwBKivVYRq9qXALKT38AhNATuJfdQn4gCPPbnUsA85Sz6KPmTF68kEPxqXJw7rmriFr4",
  "key20": "2TwuYJTFwLxnm8hdgwC9zQLZZjhkLSTTMeX7UVHkdHDa3R9KZECgj7xg34CVMMMEAK1KjXxfzmZdKnLaMjzfjftH",
  "key21": "564RhMUMP7Hz7Do8m7mDGF6QtDnqW6zjDBGGKi7vTYmopGnLSKBuuM7ShqwtJAMNM83Zb4FJT2cxbgjmrnYANStq",
  "key22": "2geMHWx8Qwmk4vTboazXtYAF6bn8BkYD3qSHHjpeC53AxKNS99t2WPKbSJQaB2RVFR1UaHxWDnFQxVvDharoEYit",
  "key23": "2PbZBPSrWBaZz5B2PQ8Gw3TpdP33L3pV3CnsLkvP5vzHDXztqasBKQ8EbdXEqh7xApwZkUdrSXLsbJ9eXcFjkDWr",
  "key24": "SJR7EpeQ4R2wjQABpHbRa5qa7Z4cCA2qW9U8Y91E65UUErJdQHaNESU3vvYD52Q4AEH348exdJcFPW7emVxT655",
  "key25": "mSuX4ZhTZR4F1vDzvi3u1rqc8mGzLArDNooWjdCPF1Y26GNvdqSzEhKwB7ZBpNKHE34QiBBvzZE8V78xAag5RYF",
  "key26": "67hsoPJ5NdCTeV9HY9q82oeXe23nbHhMDmkji7K4EQEEparUwFo7wn2itwRAj6dxJmYcye4sGz8pQjnHDvV1r1g7",
  "key27": "2G1gPicwZBFj6vk1ZzoxWNrEGe9aeTdYis8yjivWZfTKs4u2fmivbXrcnGzw6oGAbWXF45jrrYPTHWAwrngBQNQ4",
  "key28": "pLhiXC4dKGnSjXJPX26Koe7SeR2gkMmZpuh3hPfUx1EKvF4TfdSH2EVmjhqqZ5X94yXEqRoCujhHzVy7hgea6Bq",
  "key29": "2bc1nsvZGpvYLPAE5wE9571vKuhZwpSzUHfUZq8KYGEcjqHH4Eeec1RzKR4NMLmqudMMJGdCCYWCJZCQ17sEg39G",
  "key30": "4q2AqcmGqAyRQYogeUdnG5orRP7GfrJbMwtfdQiitCbebsFrB7URsGLPQB7dN41nczdVH57qSQA74peT6Yky7TWU",
  "key31": "5fhfAFCSoKRBwJPSVppEsC2Z8uwb9gzd61Ca3ncAHpeQvURZYknE2GB81HQKBEuE9xWTuakJFmApWv5ZysmTzuht",
  "key32": "2HcEkYGpqrdKyn612Dr3iaaA7H8dQmHEDnR6M1f5fJd6A45wgxzL8hk4FeWGCEkbE6TrV7KBSNhur8dc7pNx9Dv7",
  "key33": "3EawridPeqnNNb1BM1yE7rPYtdCwBSS6s8Lo2fZwxm8DYpNC2QJr2VSQGKk6nP1bx8dqLMVxwQCyoJPcsG3q1Vh8",
  "key34": "3Phu9MLGifpK8ScTWgUd6MLsic3WK84bJbjdLGRooC2kMMGpRC8rwtp2CrPUWqruC1YKa5FQBgWNnN9tXtkJfbZf",
  "key35": "EuWrvms9p7H435nAFUBdUQw3umiNWfNYmAEDwNbWcAdysu9cb4TuviMvh6rQbqLQ3EDrtctDWMEPcT8wr65aiUB",
  "key36": "3CUt1JsJNMSoD7VGGwyygPpMTqszdrN2uUtxUjLiYbd4VvoHnXcvbCnZ5CiBdNBjzn2ePN2yFuCSEHVyiKchkEyd",
  "key37": "VLgXyh1tX8rG5hZM9bnRUaTeUCfviAXWKEWugGEFErTHsRMcHb6AHYVAZNHXBhoPEcdS5SbmmXmJLAYjBCj9cwm",
  "key38": "3dJNjeDKp8vW2PCfNSjFdTnYPccHkmL6SZiUbcQ6BjETJRn6LNJcPLEd7VFnNXoaTJSa4ZoHCTP42pZtoGHbXX8x",
  "key39": "3doPGZdWSsJRsixzTm8BjCCf75AedvuQd2du9CzCaSFmiW5KLfdN5n9wkm8nMJV5f2w7A5i53QdRpCBwy3RYhcWf",
  "key40": "STscc8icojbsNh6p1iZFTbDgU42mfqPtm3KBfDY9Z1qfbgmNnB8ddJQpizVu6XnWB9CjmsYWzw5SKMwm64qxx3Z",
  "key41": "31Fus8qAM5Q4GoUn1s46o6ZXMPY9eKaqoRFkCd1dQHKLeLBjFGDGVHpYQankv2MqYmh5wxQEbEZctbg2DghVs95Y",
  "key42": "4589dNzQD5s5qMJWkjD199ZqFqW8SdyMQoupsiw9Jp794x7KFSWK16uDp5KKUH8bTmsciw2NXzmjD8Nh3hZ9jv2v"
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
