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
    "64WFj3638EzVHLoReooNhRvWpK2EyxkE4Vbo77G3yqjtLxzcHXBQiPeD4b2GoUQwNhmwteWWhE8KinS4tNBSPxby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D6JKJrowP4LJZJnXR6v1h35gaeE8u5QgRxLNVj7X84qkcG5LfuomnDKgEKJJekuUyz9Zo69btbeE3x5Mky2nCsP",
  "key1": "5mZrRX85Z7bX9kNwgeKxbZbEZxzDfuRTnwpWMnKXn6jLh7bLvtXgoZsXimbEfkfb6Ssw7kBjvcHTCQn7KSsUuRrk",
  "key2": "ZNdi6kKaZLmCVhPZcWYt1CqajKR9zDzmHCdsfRkDVSdS9CB7xXR6SKgB3k4oxHrdm3wXmzUMtaoMyU1394Kz9j4",
  "key3": "5RvjrZxCHkMPtDLE63i48VyT2MHifvFoRCgV1NmdBC5XUKZk4s6MdaHjRgkofAx7qNpktJBdJkWeou5jCLRERaER",
  "key4": "2hqoARXMAd81N7mzwxMyJG9R2oLJqcBSfHmcrpvwMRNWQT86tufCg2CraeUU6mC3vGsMsNHNrTKjuAnaLWD2WYj8",
  "key5": "yWcA9pybMj2tWp8Y2tMpYRjzaamKE91TtfVBsSJf7GD2PWYvjBynESnim9eErRN46e7CrG8KzKSsL6JrRZhnnVp",
  "key6": "eBAdGvBBv8iCRkdn3XK3YfUUp3dCKrdDKgtS9K9arAX81JPxcPjnE8GFhULSpF2wKq7s4aEzqjADm6YzMQSMZPN",
  "key7": "4xKS7gHnzRAvsarK8B3eJngH7o1rWLQZR7gMVkSHeR8EfZziLjvdMxqH4EAH3VxK3WBvtMvqyej97UUa15gdjPc6",
  "key8": "4QTi3FTwm6VDcCoi4eYgvDE7rrUkRr1o7dvjBLC7MRv1YvSpdnS2frgTgNefu4xeVnzQQ6RmuwcPaKLEudo1TQZk",
  "key9": "5gymBtmj7Xkzco6Dfh1kULYNUMj5xjHTnJxp9ad4vo3dugRi7pWnyjhjaxqM74kA2NNY3739TrKhy2f1yuVc4mxM",
  "key10": "2huvdbry7qMF3Ki4Ciz3toBekoSDAGmL2zZLGLmEFfH5HaYzF8Tabaq8FrSebZheV9MacHn8CxyYoq2Q5LnP1T5Y",
  "key11": "3KFdKfA1UxG3RF3yC4DFDB2JDL8rde15ZWVWMXka5qWuQXXn5Ty2pLHRWqtp8oJHEBorNvyLAY5h76LYSw42xCL5",
  "key12": "3cXaQyEghqtxidEDch2SwYQNWKsUF1mB9AEf6jfTh8DXMjVav6Jo7EeA7K7dz48FrayWP7AwjedC34ybsjJPe8qR",
  "key13": "3gXriPHCuG3k2XdU2UDRHiX5saMQjguAVtg4mzCV3dBMtfjY3RBdsV5N1WJkH1zmibAQz8aaxPUwfAeFYG8FqfL6",
  "key14": "4GjkKFxQur8vM1MawiUH94f1mfSBxUM8H3cAN5R7F5RFZQiqYZ6bBZSB43rFPdYKw3qQzHRfhJEtX7mQJi6LSMYJ",
  "key15": "4WFok8oZR4wiBZDGbURuyUfR4xeuQN8JKpTY5y5VNpyGZhjH41XH8iGmeUuuRCnEFbZUPSgHwxh2f84LYWGyjnDt",
  "key16": "MEfotS3YHc9yddDTywAw1YLjert7yUKhh3JUSpHYprEbciN5uRYDt2dyv93V1oLsCYex1uM8MDzJUmuTyCThrMM",
  "key17": "xCRo4v698HuKjjDcPSru1MuJRheZ9Q3YVBivFheE7htfH43PnzQNxRQAVn43ABVTv5Q7V7WdmvCe6jzPFiHopEp",
  "key18": "3J7pD1WSbp7buCAVX8twx8tuzvFeFK9WzY4swP4DgsZLcApXQyMjB9ZLwCSyPc7NTe3UB5xJkcve2rAfbiuwqfWb",
  "key19": "XSC3797tWaukZ4tRnR4HsBt8v8sh7UawHT6mak1sN98LAZ4m7eDFrb3KehTsPRZTqC1313BbM8SgcPRnnG2Dk2Y",
  "key20": "5kV4UZjPTkRzAZUhWHDJBMyRQ2AeJRLvy9ovZgoSqtvyzHL52xm1WNVXaMEK941Mr2iQd6pWm2GTmBQFLAvfi3Ko",
  "key21": "2LzE2vtUFRoRRuFUfZBSwTVY6CVDNpRT9GTwBi21gq1Y9zbmAsyhp7eFVSk9GdF88JWeHMUKAyTeLpQXad1L5mxx",
  "key22": "5KBRvMuk5fBoqJw1nCuYibcm1uQG8UYHd1EBc2ZGbXQQ8L3ptmjw227AQ7SbVC9eezS9myyWCMKe7dT6kCXoBfo6",
  "key23": "Q9xt98wyn1wKwDuhJ8GnKiEW7gmrP5T7zStEvZw2f4XVXLnHfAtZVWSk8w1iNk5UhvTB1mYynxvNvUzKaHMF1No",
  "key24": "FF4WSKDz5fHyXPLfjURrxq5JUMe1ziMhDx5iG1gMFTbR9naoANkBFEXkfzNTB6jfyKXwqfLqGrmmPenWsvMa6Vi",
  "key25": "4GZ282HRRTCoXCuBi4c6rKDw2SnbK1S5BZeMtFzCGQo9szZ4Z9w6buz93FUSLQQk9msVn2k1uxL1GfJ8AKS41gLd",
  "key26": "4DVjcGMTb9TN2t7ukiAwzr7XHW6TiyjPF2qUDYFHx1y8hh5KLzWbMeeruxCixRk5b9QszUy6caQfJokafgJvHV41",
  "key27": "5tBbnRjM25GoEHUyMKWqthBJgSZhCRSZPBjznCfEgTufc96HKZ28B6X5zNSTDyYJ43tTT3tMfedmN9Cn9y3YSSeR",
  "key28": "qGbh6iCkzaxXJVjS3i4yGqPuopFHWCnBFZWMgFTw3rQobEpRbXDFgDZHDUK1gRq635JvpMy7K4dX6N2mTzdfQXD",
  "key29": "2t1AXY8XeNps3qMmvoEArDqMANZ2CiNp7ptMuTrSrgXZBVS7u5DsBcA56zfbjxb4BAfRdQFyLxtK29WtuLycc5Ev",
  "key30": "2ft75b8MbBKjLadEv4KaZyToALPnEqpa74Z9rfVpuyhCEEcRAVmftRE3xyhsg4XQZ6t1iX5Y6kfxMPCWGAu7kHZk",
  "key31": "4uzuWjNAn6y94rfh3ejqiC3qiFft1dDF5gsjB2TcczJE7B1ChPdAUYusH2DSLr6PZCAzznnQNkt3LMzCcdBSYP2u",
  "key32": "4f3h2sgqgbmXeT84JEEjgkJqQ2eJTb1xCnHwDAq6N9WKGzhskQ7tDrapBbDy38kni6UKebQX7v8D13iokzyJkhX7",
  "key33": "XYFyiT5xGbZFND9K7jfJwydhsyN1gGnrhJ8xnmx93FtAY24po4nJxSoUSrcUKjCFSFGBmwn2iVF9qxm2qQcRhha",
  "key34": "5FU3TteDdPs521R3NkU1Y9vzYfp1in2wkBFYXBzLSZ2qvy6zQtoztvV3bkNFKjQMVT7AeP86eRMojYy4hSZyv2Fq",
  "key35": "4PnR9bkSv7i2qD8UdZHa5nYxMv3Zj1LFC3pwVxomP6SZz8XTnjvLPt9jG8c9NpmYuCkp2h6trQG2TKaVMwwnUSzE"
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
