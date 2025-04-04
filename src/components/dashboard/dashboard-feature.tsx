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
    "3pKZhShdR4gZhsWUhELNyMyvr2kb9o3MKmzovQhoYts75JUE6zyBLES5KK5uJvct9Z2ZTbqYEBj69q2BA1wQe6cB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JZwj2GvdYoKc3uhgxicKESPbK1ZDBxhDXMa9BK96jDbyVKr8PQXwXnZCquRjoPSYiW6XYDdAin74zmNTpYka3ke",
  "key1": "7sqcQ15Vgcxyfkkj5aGPbnGzCJQH1HfN2PFx6wTC3GZYhjWeoFNLmHfAid8gYycmWt2f4Sv3VUE8dWojaxFMkBd",
  "key2": "JpnuVurXNfvY7QUvjLieVSs61HC89ki5inJAywHYLFKe429QS2KehqYrbeFofWQTghWGayNzsNGejTydUeDf2F8",
  "key3": "zgz9EWDrBe33NyJ35YsqqCv9MkQMZXghhxUAmKJkB1WJtw3p7Da1d2cxRg859E3xjDuHXsMUwgH2DHo39hf1cmM",
  "key4": "4rugFp77X9E61JFkwci6gtHP8jWUswVLvGcynQbCrue3hxNmAJgutv1BL31bML4mxNM2xQhLFyHFBFjtZ4XBEdq1",
  "key5": "3Ez1nY1hNz2VWWWtHJHhvQSYk9vbNJU6K7ZsAbW9CqkNUBhQGWhpGvh8LxaS53xYxrnKbo8NxDHRbWKcAVJ8B8Jj",
  "key6": "49ChrFFpemDTntdw3dgqei394n7omExGXSLhZMY7KhKTG6JbN8iKc4ayL3tCyGXQs1YdmQgtR6QcrVyqWhVMZTqy",
  "key7": "AHGEJmS19A6P4HPvSMTm177fPoBQb3L8hbUyczXprmEpoR3VNgBLVXtuMv7g9BCPHZvMfFCJzRg2WhKJGdpe4wV",
  "key8": "2ZeywrnNBef5NDK3RBTXieniVf1yekKQnZPqRjCpSTYyBLoqsdWz3jEqBkib8bt9HvSDUxD2tCp2Y6dFq81UCqyM",
  "key9": "4cEKz9b3u6FKikABNNWEeoGVj7Xas1Rnic1X9hffkGkUUxq21rCGFfbLstN2d87UBFzZ61TmPFdKnL5zLjDSmTTZ",
  "key10": "ceoogRzaJzwNBpgMHFWRoWnqXbVuTEgKQDK87bTmfxc7nEjcV4VY7JBXcf4kHUCw6MJNFaAv35ui87S6pJ45bbj",
  "key11": "n1dFY3WA7emRJxyAmRbjWVkM3q35biow6jpistPNpmDkm8SrU1P1KUwvb6dvJujqKjEWkMzsJudTh9EyTfUqnEh",
  "key12": "2NuocdMA5N3H7CaYdYhu4S9bttKqaNGQu2kh2ZGbmmQWjSaZmfnFwBapyjja5zLaTkTm14MwRuW38QtbqU7PRmZH",
  "key13": "3ewVJMmpojYHJCTsABn6G8ytc5mKYQRTpcsVdqrPhHbAH1NvxLk5L6kJyAdywngFy8dNdbY3EEkbmHHsFbUF5czK",
  "key14": "3hs7e4s2EyE9hgMJmTP2DifEZLQaXCWU8fXBgAkpYaKQ7zFc4oPys6eDQ2bJspBBMLYp6kMspmG6Cd6TvjuTCiaX",
  "key15": "5dQHZz6gw9WyffaghercXrJ47QV3QvGMSzJhtypdUAen9s5kun9hks1MdwMBjFSATaPrWaNgcDwzee19HNCFj7nz",
  "key16": "bgUNr6ba5Ze62p2Ucp2RjwF7vRMSbLwi9oawaCttTix6oUuseGtfRQcRNEUmaVyZFo6ymJgx8EBeoxvucyUQHcq",
  "key17": "4Cv7xdAmdEyg8w5zZperhRHLWLFi3t7X1FdQS8aR25zr8Xh12miGUyAhbtTapYXZe8FMqn9zAxkWSgbzemfise5Y",
  "key18": "24Dez6oB27Mkk6Fr77SEGobCgvLqpqmgZKzbQLB6GoUWNMvhbWbKiwUyLQ512QogKaPPHg9j4PueCLv7cuDvJkEq",
  "key19": "2gP3YEzJmqTxHjejrCwL5mQ9D6cLm3L3XTUstoujsS1PHA4rhgV3xreKx6t5onR9jWkwdFJ7xcux3QBqqTNER2zM",
  "key20": "5TxLXhmkmudHrYTeqm1FeXE1idpmcP1i8Juy3zfBUD65YJUcXUWGK3adnSdqwUGrD7ejpUBbYZvkiesEUEN99vHt",
  "key21": "3Loi36vZrCHsE2iFhASzMJaG6K7QR7UkZKPn21h65jLy4tACeNe9jvfL2xHDwZ3vN2pfB8LQpQqEinvWtzPDggU1",
  "key22": "4WhAacPjTC6Ur4dJsN1Zrx16icgbmqMyohWoVAs3knL8JsN27avQcQN4XqNN1rFPS1XGZrxbzryD7W35yrZWPuSs",
  "key23": "3oJ44bkPNxmzBCPucfYNfQhU1SnmMdcjwXK2Bv1z3BEhFzpJm66fRjX4rCUa5w4ePwFvAz3NYafspouf7UEm51wh",
  "key24": "2BiQvXCB4WXxqrFXspFH6LK7iCezpZgzH33MvQE6Lui7s6vvQVQBSYuZEuudUBPUEpaTBYbx7f7SKV1yJhRHo3cE",
  "key25": "5bWTDANvEtFsmRYFNLUNmJ4WGCPK8oc7NL69ncoXyFzGLj6LbfuzYPyCeVGNRxfcm55e8xchfX97MkJyvMr4eUGG",
  "key26": "4q6USTj4v6H55bcuxAiYMZ6Cz585ztPShFGCLrdCCJMfZYsK34u1akRKcviASpLPHteg2DkSZDkcQNAgdKRHmS8J",
  "key27": "4ftanHQP7aFkps1QeDeq4BmLVzL4UamT1pyx2XR3E9RywtEpjbeaGJDEVcKkd15Yyz8zUdNMfLyp9sV6qe1J8Pvr",
  "key28": "5Jou3LQzNqfnpkoCYvyHBXrFHzVbtpJXHRjQScHtDvmT2iDCLvEtxAD7ymHNexjm9oKw9dUJSFL8kpeMwsrVNQP5",
  "key29": "5zK6JQSCfvpecTa85Nn93ykZbcdw3TXEKRNjdxZ2QV9TzL1KdGc1ZRmBAuwds9MkrsA4kvNxQJeNn6T9astK8EP1",
  "key30": "ifs8G99oCdfRWJLb2ZHUbScxpTxLtKsaKhWJgNCQLBcu3RrCDcjJb3A1Wh3DsM4Bxs8BuRbaEtE5MAjCMVKKyJ8",
  "key31": "2Lnw16dYT694bQAzgsdo6o99wo3zK6kSYNT6FBT4mQ1RPWfwJHJAYGprCu6QheC98PjFZYFB1mr4o1YaWcWe6KQW",
  "key32": "4D5y2PqMExmMUCKKmnYK5QhQiXU614RsFMaeWGyVH3BZ6FCQ3FJiAngeP3YHHiujMZYtiXW41h45pCvExkLhwCmv",
  "key33": "4jqbHgSz6LBRun5XzrLnAM4EW6y9hFiFFuKd53E1WqWg7cks9QF8ZeA15Z5z9q5SUcHvgJutQkkh2FD7pGf7yxcc",
  "key34": "w4vqYR2Mz1dgJvaCuhD5gRT1G2C5wRkDbHaBCkX9h3qsxSeepxMDxBcEwSEeM5HNbcx5tVrpo2csCuuQyvjQKDX",
  "key35": "2Y4tGW2Di3faS5FTBbD8Dn2qXF86RCv9xyXJubR2J12TXnQQXrTtxpfcPfGGoNyxzBR6tjyHpUEyDeFXbrTS2hgT",
  "key36": "4xyMbqKovnzKCtpzrDgXXp7k4aWhy1VocaayZTfNtBUzQGncxbeiVpxffLPtJfkhCXhb3NqUDqwEVdmtBXSSkQ2Q"
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
