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
    "4H4NuWJc6ku6pUHPwgJt5uoceydfioxnmj2c9RR4atzH7y2p5ZRZcfFE4YvdRsa7WZbkFxML5rcecZgdKBPtcBMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23suMZh4wkgQdwqMRhUSUydubcLc4xwyow9LvoPWyyVqjp8ppSPuKv1PSj22QJKsv1onRxyB1nmzkwJqUsab8D8u",
  "key1": "4x5dnbmvyReevwyZ8cKZXgxVCJdEF8KdQF9KE4q1LaSH8SAYU5GN64rbBYH9V4PLaU6VM4hGVwxYPefQFaWSHbDX",
  "key2": "4E9YHbBci5hsjDeVRNaeY4fuws5L7vBNHD2wqa1o6uWZwGiqSQ2qrYCUB3jYdGk69sbaERoL3F8v74EtmEcNqrUV",
  "key3": "2jdtafoTjBQJZhCPEAMXDB9TKGeDALxJahrNYiuGfLG9pp2pjjB3nx3WxDnZ3eDGpLXqYwX8LgCzuy4hT1WNbQ2i",
  "key4": "5Sr66nzvRnzg2LKDcwHq1RnTYTur4YSfkcTMuvANszjWBSiTUkpbmD7ZowVAcxVZm9k26ect7yuKH4sCaeiaij8Y",
  "key5": "5iWNzmyonQiFeeKXRSVuvswXGmHxEDW5Sdxk1Y33CYvRkinB6LA9UzbTmVeFigyNMMdnUTtCbFdiyoznVTDTdvAP",
  "key6": "5xT2qxAcQoQhbicEar5DE8vPPhH969hhtVusYL8GaZQzitb5cFkqoRnH6SzibHCqAGXA2AmSATXtSMJFw36ATHPP",
  "key7": "3WBziP7EMR9VQNRV47DS7PZt8FgHJHs8jsZ7YKcr4CSfaSrBxLZqybmiZnYf4FSZWcXAiWmP9y1PjtnUtM9aBbu3",
  "key8": "4BLSCjXvxhb5V33rReALzDfEaqBKpxznXNn5tZ3sETdkwLxzCoyoUsutUbhS4JxiwNsCXbSE7RWaZx32t4TM5dHk",
  "key9": "3MNStwiEjGwUXP9NAQAeVpqNotu6MX4fFTmtDxHwrZXNX4a6wycJjmrDUuVTXufEcrSsqqobq7qcGbRd7KWvFwts",
  "key10": "3a9RjiB8n6TCM8KWobazBFNVTTt1UrSabway5CL38mN2GdDHur8CFvGFMDnBiJaJUXMuYxA5928zqKuojpzpR6SE",
  "key11": "2eyAkMWamB6qS1BpcqLX2QvrKq4KQC93FVFdfSQCo2BAFerXQfEJPTXBGzuYFj1AoJEBrkzEC2bSPhZ4j3u9QyLy",
  "key12": "219AXFEoAjKKhWNxpTvNZ2ptUBxZcRqi3WcsbovrbgjPtJ5FgGZhYSM4oHiCbL9Ay2yiuV7Lgk8727j1BjN1CCNz",
  "key13": "33QbHftAL5KufzxNL42hzLBt2fEHQKRSAdjDYLQG1p6bUGb3iXgxRbk4iLLELamCR5ReH9QPvPjzY7ecBtBdXj1",
  "key14": "HFizsuTg9amDMiWDVYQeMbDn1u86MH1uRgmxhFpf5achbWm3rhNgeYiA5NXuskuqXncLUtkhNfCqBx3BWDpmscG",
  "key15": "2YhMibcLCxYCEVjpQUaiyyEQSsf7XCczHgu2eRPhWHCfJrTGXkAfc31iwNkasbyT4u7aF4cFQFHcUXrSZUALuqTm",
  "key16": "4HMo2yz2tkGoTdvpKJQd9qLpL4a93i9VLLpy3o5Zeg1sx9mAyMBfkZkLYs7JSThZmEVgm4uuKjRLgC912JGMrowe",
  "key17": "3f1N5yuv8BVA2twm9PD6rwAVsPfn3239n3HmbBF1XDRg33mYvZzLSV23bvzHD45qs6R8hMXRNx37kE4g6Qi3bSmy",
  "key18": "3Pcr87pDYMzk65JJbMdUeqTTJgYm1N5SKJzxpfDq63pfDAXqnJ6Tq2Pcc38aXM5fchQMVGb3PozBzZ1wr4cxxFUK",
  "key19": "2DxrEL7tzyhvP8qYkiDLbB6ztrddgBzVdDc82TxEDzyJh1u3mSfoYvGADhu8MsvEq6HddBpjZ2DGjjgkfUTv1QaY",
  "key20": "3m4pZKW5H5KJZHCvBQsSeodYUFCtEZUJxzs9vxpUdyd24jv1CMJaj41bPnLsubSEsny53FuRGrxmxhN23hD7cv8q",
  "key21": "2YknvxoseLWL4i6zQiKGoWJfCsWJ6KzQY3vDniaZyK8tLvwFRk5a1GaSeeenM84HjzkgWqwQ4zeHb1sfaw9uFiTf",
  "key22": "4Fk9fbfsUB6JAo21wUpmVrJfgF3TqkPRTKkEY1dgChpFuj8wAKNDFvyJ7Kjptx82RR42Nntn49pJK6ChXxvYGsyB",
  "key23": "66wyHWpXo8N2wQGq8uCDGXM3hg9QZfnUYKTxqpZyvZYRnR6UUeZR2B4uoxCfZmHANz6xpZNoRy96PdzdwThhXHA6",
  "key24": "4ZWSYAyLk99zSeBmzKEnQSUmHNSb4gQJae24o43qhcZfviktGqSiX5WQfWJPmectgw1JdMsDCW2xvfTnurToW55o",
  "key25": "34N2bKBU6UZLAXfoowtvTeJfjUrEH9RHHckNuu7KWddAG3NVyD7jsKPTQGjY7ZifuEMFHw1qgSAVr7wQCr9Q341s",
  "key26": "3uMAVuAEugJPRdxSBYGGpJFxeoxRSCnvv15MDEeWAeNDyStrPv88xZcLmvp2fjuc41eV3k6TtR4yMyewnKmhZLx9",
  "key27": "3KhExzKmnvZ5iZzZbceJWBfE9QyLvhU6Nk539nahhJXut1Mew5UHVDu6iupSpp9Z7Y5DnrJ68jR7xfUKuY4H7bie",
  "key28": "9zTfBDYF8RDidHFtMePPWCuzcQLNREziADPpJRCiv8KkLZTVdHxYw4StCtwkvdH5vv7AHxEu8ERFnPzUvcXYfGG",
  "key29": "4UWz6yh6fYkfk7MxiT9sNf2wfQudJPWusjpn67UUtP3P9DrCnJE24spXuQ8jcJB2qcABB6u4nqnvxuuSC9UUau3o",
  "key30": "3JMqqYBVEMbRsktLQmMoYbg4BZhSgicPx6aNrMRrnY1KFxwshi43cD8Hjjxh3WKZMVtWMuWkeJ49NaXZiN4whiz",
  "key31": "2BKDFgijyRkVy3EkxhzpxS6QDJbqsCEKc8FDFUxkSMvJHGeVymtP63CVDCvqLAeeqvybHnK8wVDz6dCY7vUpvmsA",
  "key32": "2kG1w1ZibKinBKiy2hWVsajA9B5v4V4XvQXnhKpRTt6eYBmgCwS5n7gTq8rvcj2tnSxFcJ8rx6qErHD9FwJjBE9Y",
  "key33": "3HPozK9ro51v6mJ6H2v7y2ErTRtbQrTF23UfR7ZKDeftYaWSp3TH9S3DaSFqyEW9j8zG1fXbYQh9ZYdZpFw3caoX",
  "key34": "4Z6gwCsSvNe3GXvLv9Ket5GmKDMXTNHNP9Fb2NbY49b4x6tTLQfQ66oE3KVb1YNrDPfpaiuqL1EwRFfrAKW4BfSE",
  "key35": "5r9yfovftsDUepXz4j18utRovcgwiut46S51ntuYpnztjiV8YzbxL2hicuWigzTVVRyLJdwLru1ow6V1h3G9mPva",
  "key36": "46XYNvCaNbMVGbiXEkrvenXHb7SRUZPrCp7LQsAXopv2rcjEBPy1MPZRgfUBXZcb8JJeaPoE89Cz1MTFBeBrF53c"
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
