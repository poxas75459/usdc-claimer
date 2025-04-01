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
    "28RUzwhbRhVmwSTBNAALYGHWks5fTnEjRedo8vjeh6MHYvW8evULmGML4rh1iH7rasbdBiVNQeCC1yf1j6FQH5Zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTah9mQd71Gy5kdXP9YrkzRs5Bzy8J84EzmUGG1dAKUSG55dehJeHyHREvZ1jzuqvBy2N86mYSJY4kmTbzqfs2t",
  "key1": "56ekKeFamGPu8HbcnkjXf9Miu9AcyBk3obM7qQ6DGCng1hotqFjWJ6GBEtXf6nnABiYprNeWW9Zih3SJtMhF5Xju",
  "key2": "2S7LB4Zm4S8C6PuKqZwHvDEoQhWaKxFwiMPXEtLZG4x244Jmr9FdGj5MeLK6kWVdrwXYYwaxm9ANx22TGJSSTJXd",
  "key3": "x5r8FTLsLSA9smMx1ktNv9T9HT9Y8s9zqr2oxcGecHu3udsHdjvdgUsp5q8bwAvicon72WicCL5qEg6ZBdFEXaF",
  "key4": "287keT2pYnd5V67oMrLRqW1GcPXGaTN63J9uHub1bNdyna7uH2RamQEsCda6Ac9kQkfHGKWnoJ1w86kP3yU2v1aC",
  "key5": "JuwBoMLvV18pmaXoGthMDoGEW7f4QVXJpxHMQQuRe1zyhvJEHJUit5Mzz5yimsjcWmUo6Ws5Jsb3u73xJq5NYsQ",
  "key6": "2w4S4ELYJQG5bsjbwyqVA7j5n19KDoVyJ5Jhhp7f39KfELLTeZsxkWtXVrLMZ1aocxryM22AxganUyuAu7WDW73K",
  "key7": "63m5xQ8Uwak9UqJiX8Q2a8LPh5FB6yCpGQam2qyjbfPtJMZNE5i9KjXmFWaZd6mn1gommzmatrSzA6DVrC4HPu9b",
  "key8": "PScNp7NPGwtcz56NFWrCkyVAD3n5AbBMKwjHLzDajz3Qh2n2u9gwuwTsPCL1DLX38hnyZoCUzaRzkdPrRAFAnGa",
  "key9": "5NMrHjQqMC8GPL9gwwaz7Ps5186qtwFg5PpKN1FgVNCvb6jbwKpcdwbXJYpwGZvDDhY27mNTLpyuB6Pbu5xpwmFH",
  "key10": "5QMpNXQGaNv6vXmwFUcpHMAdST5EDdKs7FYwnmFo7U67D1Buvw8mXd8dYCsqLxfHWLK5wPh4S4D6xBySk2xiJaGb",
  "key11": "4D1bHPsjeq7kNRaXswyaqXVGVt5wtJnwDyzqQgTYUvMZXQUzKsTgbg8yYuGFJSBw6JvkFVyQwCEmsnPiP4KARKrC",
  "key12": "379tv1bKJ8t6xhViaeB3cvDsAa5SfKKGRp6x8xkSQHhdPCZKqot9ti8xoSmLVwqcrQnNLocUVWao7gtjeyxovy1",
  "key13": "2fVSnbvCCRBsG69qkUqYoyd4LZ5ifbQ66kQBRP4XfaWj3taUypwM3i9CL9Me9avJH8sT3Y3AfFchheWKGY3B4oYg",
  "key14": "4iFStVaxcFV2hr1aEp5izeRcEFW1hLhPRF79MjTPRH5nLpXCnEeU6Zn4qxCWuswyT7V7sHLHdHDmxQKZszFin3eK",
  "key15": "5W3QnQoRShk5Kq711wzz42SPG9hRTdjXEkTpqLc9p8tnByu5MMfMweRe1EaBDWYHpo9J18248jMBdMiZfUETbHtx",
  "key16": "3P48jZKcrESKPZm4D34ZDcf1JMdc76zMqZXp2yvasTm9rff4HExDqbYnZGnQZ24DgV1MfdmW5ij3T9xmt3dPgryS",
  "key17": "2954haJ4Yy8P1fdQLw2vtrS7suJYcWeYdYf2vjHh7bHsaWmJvGvtouidC892asSp5T8n1o61mExnhvz3a7BRU622",
  "key18": "5fTiGwKneGogPc5K4e1WUYYEECnXqMxtsbyBc4Lduf2UZX14rFfQDLEM3rFFNehKuAa8GnFZaJBZcUiBPA7ynsQu",
  "key19": "5BFe55sgKk2XVwUcd1WXZmHyejWb7CX2jd46Cew7FawStF38nY31ZPEBQmiDtnd38QGfr3hCtiyovqEjYDPSoRuk",
  "key20": "3B2UmhnzPjyhdFgMYRSBP3HN3UVwgu7rUhkffNmrdE49nSp2a4gEWsftwdztCr5qd6gZEC27QENtRpYk3jcd4NDQ",
  "key21": "2UeTG7tiPo4ySHZrYxUyf3z5JvuxCMLPVszfKyL5gqinGmSiLThLF4t8guWgui4YqsKbEYx5Mktb8kDuy5mFNa3S",
  "key22": "4JJVudnZBNo8oFiqoEy34aFc8D7by87wTwej8k4gsXjAug74aKdy2ygWuYf1SGiNWP6vpy9GrgJSUUMH96yKD26a",
  "key23": "pQhQshRXEP53oZCBnPcJKttbamQATMwEKoCK3MrC2dBH1JBPYcsyzm2sLogWxDGLX2rUZHAZSik9DHerHY7HeGM",
  "key24": "4jR7h5dJs9vxYkSczddF4v2sUduGfCqGa6jeQw9sn8WN9ruHPcrsuteXZdoiah5UcrucpJpeWsUbe6oB5ozmFq35"
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
