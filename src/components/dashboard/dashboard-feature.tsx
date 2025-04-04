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
    "417fiLcV7onwqRm8X1swfLGVeRbVscbutPsgBXs8Pujeyw9Rhcx91ZNNaPau96nPNyaUKmHrFBohpboFvECg6eUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w7Lvm11TT1NVaXZCfqAidsnKPWXAAND72HaAuBwhUSd82CoWFdZj52nzEmn3XoYAFbehC9mier7N7jvRuDHjfaD",
  "key1": "3GLVgAUBzGzH97YJR64W1FHyCw6Mou2rb75soSRUzVkaQK2QZ2Fp5Uwjjv7CqMTPU4akRx2VGKopFdvThn14Wpqv",
  "key2": "5fnZ4Ste7LWouunjs7VA9bu7KD8d3fHQzsUSpEwVUpufVc1SWipb8xpoQSRpx5SS9J56wfSeMrfv9xpb18gYV2d4",
  "key3": "2dRwWn42HXPbWTouYZHLvGQGQeKWMSjbfQt7uRanHRrh9VSnvj6TTJiS7ja4VG7UXqmb2UA8iHk8MRs8VGe7StDv",
  "key4": "X2ThomiXQos9YV6syeMGCmxn5uZJtwBLyFQGYVV63vqT8LZsC6v75TAxJv1ErMcBB8XNKYW5z3DNkizvLpUNd2n",
  "key5": "36THsnG2EK7RQk63pWtTK2xBxLAUPX29NomTNUBUid6a7QUFzxn7ukrLiwZiSgdtNck14rrdnVs4m5p19dta8Fy",
  "key6": "3FvkDDRwZ2ifoWEaSfk69ekfpNnir2mCTDSkhwUWkwJouKyVL1PN2ZiLv3Q8Tb7Fktr7oA4S27J2BsSFZJ3FNURe",
  "key7": "4CDqqgoiw4WqWJ2WgtRY7ePU2okTTBrDjSLjuVJY3KBUs4qThRrwrbXvELBPmoPWx1q8HQwCRSJsgK5cQSUfhwrp",
  "key8": "gc6wu776LKjiV3SgYJAf1RDSRWnsfLEHPXJN7vNuR4Qfwv8utmL4tULB3xgE9vV4hisYGenQbq4bvo7k8LUr18h",
  "key9": "4dWKJxLAy4Xm5HeTJrhtBihApfWd5rCQJHaGRx3TqXBZT1CrXm6CR9Wyue7zcD2ycS3SLrLdKB7zs2xY8pR3Ajvf",
  "key10": "28uB5RrPKSdDsMPR8qifYCMVqE8dX5bVBWBSSyeQeUJagN3BKiTRBYDyqDn6acrKPqidrqMwgDP6UZdQASpBVjSW",
  "key11": "3Yr1FPnwYJcTeY3k1CQejGfFYZrNN5zs5nbZ1tTp5u371kNxrB4hxCZMaTKPP1XePMrgeeW4LDkrSvgNHuhQkRnQ",
  "key12": "5mTwSJYeyvcTWuqK4wSatKGrMsNGkHykrpXBqfqY3f4yr9KeD5M1Y9x2baVYGe5iaqqrohbn7PJA46TuShNp6Yz4",
  "key13": "5cRCCKW1a7j4EwMtnhpwwS38qZYTNhtDbBYNyKK1GC6wwgP8YywDhQ8choFESkakAHXpDqt9w8Vx41C97mXXHbts",
  "key14": "55qESAC3H71K45MRXRiEVvWDRYt9Q9m6MiHhkaS3LnmrzpaewTaFVbYunseMcjkcgErVxe9nHx6GeHghExwVowa5",
  "key15": "oxYA9s5DTZv8D8DVRQkpfXSL6pyR96bJwikYS7PbxUBFfp44BnYpQgMb9b5BYCJ25bdciw9j8aSVhYhX9qx5ozq",
  "key16": "2Aoh9J6mxRPUheNs7jYYwWYCoTAxkLP2ZEEdHyYXBodBQSmNFWVd3mLpZ5WrCURtzQeTYnQ2VbU8tUWe2aqGo7Lx",
  "key17": "536Uo8a5KKHRRku5Tpnao8kuKuykupHeHsLUaqGBi1KybvjDEj21ZueuL8DjTZPhrA8JwAAWHwfSVjtdefjQ915k",
  "key18": "4rSbcJjbE5mcp7ka8551zum3QpYhbpsvQLWpa7pjM9j8Fce11MF8JGjFW4rqNRfQLdMpBcpdrU831hwPikkrRWFq",
  "key19": "5hthpUzxqPTyV7asy3eVnsLKKXLtJN2RL8XJgwSkeqZuAJbMbAWkRNXDWogfyZh3eXS2xZ6c7tanrGhp3Tv5mNr6",
  "key20": "37cv7vG8iomVra9u4TXGkLo58kFkAMtXukWzgvZpFLrQMVHLDCZDfgSB3GBJVMpAZoBgpshnxkqYcCwUQAb16AuS",
  "key21": "rgfx4BmThhahWjincs8m4B3ttuyTvajc4m4KRMZgm5SJbv97aXbjpeN8xUwxn7UcYvkPZhTSYgwUjRHpXyKBRje",
  "key22": "3CYViRxeTbctsrxcujyA9ZN4wpQxzaNUnB1sDERm462mxXFLyqZUjMGbVYSWyPpRzw84fN9unCAaiQfpTEGTX5A4",
  "key23": "2VyN9Yy5uARjGMq97hP7eHR5VSApQkjR3NEfkzkotarTdgV5Hqr6ngCfX4EhqxnseqRZcUovg9AV1tLmFzBoyipF",
  "key24": "2Z2htTNt5cKjPnK3Sb7GVDHbJFG3Dqwj3YGVh9UwzJknggWBc36AtfJYmps7o66p7cVizV3PkN2NrZnYRURN6gkn",
  "key25": "48Jju4d1Ya7ubtKibRkhycTN8emqphwZ5X48j9rbRuyw74Zavj73cRBQXh8uPKDuqiGFF9EQYpP7hbLFipr7Vy98",
  "key26": "2yi1E7fVPzqRk68Gmp5BU9PmT93ZTwCEXiJvrE3Zjq8jP19RSkMD1RjJPCcn87hUBmVzJb3NsnLNoB1JjA4JJRWS",
  "key27": "2x7btNZqchQTjACBGdNLgUCKdqqLXREKBrRGcgYdWokhG1Vu94NUSwvxegwkbqMaDELUNE5kPMNmHvp7PZ3nRgf3",
  "key28": "4hxoFVpagnFwZrb1xemWQGU3pSmA9ritwiLUt69PyxgVmXpcNR5hYebU2tqN3ii81ViZWgj8RWzYEpvvSTzFw8V4",
  "key29": "3Yuv8aJuHonRBouWd4JMEuh6RavY7LyWY1igeLMhw7sad2jTQxiaGCvTSo2TMrCmZXgvPF5oUFwhRKjJDecEFnuE",
  "key30": "4k5yh8NtAs826m5MQ6HxKZvC75YE35xe5r6K7UB1QbMvc4f22mpSaMtdR5hTWJrErLfjoudsTs9F5cKEwenbjvu4",
  "key31": "4o7C3TAexGFiWSZydjvDikuvwxoXkSDEGpbhvJCgx6iBBB3EjPDMBDEBArM4XfTpcDWmeGPN9yQzyq8m3pmApr2J",
  "key32": "2RRihLb3y3eUBKRThnKoAzPoQX6ecZC1Qnn2QXrhYprPskhN7qJRGbC5U94kT6frmndYhBSwqyz4umvvBQUF1YbE",
  "key33": "y9LufafDvvFzQgD3TWrw8XexWAXpyuAqUE8E54aVzEoJ1QmDqz6FYAEoVXbkY1NCfp9EdMb9mPzCyy8zmQzrqCc",
  "key34": "3QMBgUgR5mxWMF3PR8EaW5dRUvQ14yxbVTKx7EXj2LVPFSxJ4j97oLXdV9C1X1hacGqnJh2XPB1JbC9gkQGtdjcV",
  "key35": "51QCyEfo1qf2NaK8ZtcAGrDDjuSAJ9xr2YzMZ8mNSR2w6H19xtygxzzZ6PdPtCcAdFDzmLvTrrVy73o5gK1TArP7",
  "key36": "5nQPNNGHLW1Jn6oYFC3zuC6omUEKM2tvPdXWuVff1797DuUJ7YFqmRft9SFpb9rpxJ8NAu42ffDJUipUSEBzTkkG",
  "key37": "5dDZekoQDzyrxdF6a58AV1MHsKAvDF5kPVAhWRQQc18H9CmbLPBteQCmhWTEmLx2BXYNicTfZd9fH8G7aNy51PXV",
  "key38": "5x1CWY6VGc1coD7eTpx5VpserP2LgpstfHgmXxZXbMuStGnDbzHgihXnR7yNVCGtAq6VTGUzM61g6NnAeb7G3RCr",
  "key39": "4rJXHcpwonc9as9Joo6s7XB3ASZi8PMktuZjvnGXYuUBrYWGW4pyWV117cseqKyp5Nupns3BcYxaW5x3A2TGGF2b",
  "key40": "51n3Z39Nyx6k8L346ATDfVw5KRhncjBwhLBsbYkUaJGYKZjuqMmXECEeaYo5cXimMR9iKQnMFhsqVVGP39vzNz7p",
  "key41": "4Dvz7ciToAhUQeA8wmozhWxFV9PmjHpMQvTaWRWCugJ866VBSHmhSmzFP5Ao84by1ayvtjjAwvNhsPc8ReqxHMiM",
  "key42": "JTQqe1FUL9n1HdJVH2B94Z97j6dwrC4QyDb4pbGxcRWj4gJfrArstjF2qVaa4VriVXu275qeTTxq1iE9wferEhE",
  "key43": "4BPZLsn8DCDoGoRr1RMD5mgGZveTrArkSFtJr18B2GPshUavrj4fKZ9nsX3T4T7kdnLWRqNaUyoJh2AGg4s8encG",
  "key44": "VkESqcyzpt2mz4BT82EkCn9xbUV4Em9s2GaDNbwzRZoMyrgYwpYnadSwEe8tvuqoWvDzYiVPFc5LKhRy3b9Po99",
  "key45": "NoFuhkDt15tj9KneHWu1ahVhCEeMQjryRhxpFuMxQtChk7WyT1H7TXtS9FXRRNQpYMXSLhC5XnPZ79kaHZVC6P2",
  "key46": "F8gtA3FbBJw7gKUebBzxgPosqhGsJd9s3aUk2d5FEpDpsNVcRao6Gg6KbsUdVdDdhQisbN6GNTvcguy2EPHL3P4"
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
