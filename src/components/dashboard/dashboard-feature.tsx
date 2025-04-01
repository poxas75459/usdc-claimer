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
    "5HSPbsQB44MrQeNXWr6cC4DqPuhMsNZBZMiC6Jk6XVNTq4Fag7bF6C5qJEsxCPAbnqTtrwqUG6RyKdDmJDEhdbeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bj7MZ41ar6FkYbQJg35eMZ8QLYMmc2ve7ECcrgeippxkYAqymqmw4fAUZqnPwpXkeJUVNeqBPkpnPe1UcaYMGuc",
  "key1": "3z5E5Nj8o8UpeuhwuHyKZhafRtpPQMt3YubMRHuf7oJCZRbRkYnYa3b4mWCFKbdf3ZMCY1nckbbvQCMJwjDZDBiw",
  "key2": "4NHMu6MrP5XN6q4QwiZtXjgjiimXThm47KMdaXK8jaKYCThGtGt3txtBEB6z4VtAzSPUY6iYcqqe5bWaTFQ9je5Q",
  "key3": "4Km1WLLqjjwRxxrNaZfF12yLuSeSqKFkZkAKCKGhrRwWUK4H7VWGzW4t8wopBFZUyVh5LKZzTZPQpFc5feSXnnee",
  "key4": "3LPYTxpykhMzuhDi2QQTyzenhjoir1DQwmS2tQ6dYF7zmeW2vdZnqkVXbhhbkATWTHKMa9KbzF9xy7tcdj7eN9gM",
  "key5": "2Eb49SPsa7QFgBtppAFzdiG2cR58T28YZfeVoQFNLAACW3vpQQwtPWwxCabL2NUerZvroPNJsWKmq6ZwMmHNhZkx",
  "key6": "2unDP9pVgpmoAqGXiVqPCW56Uoys3HCnowpqG1AdAutJt4VNi7uag1w88NWtpock17JRgYvB3Q5MncfkKCG9xZyH",
  "key7": "4ag14WCfXfgsXyAEGJvhomSr7gNbR5FjPHb4yrBfuotL2sWDrQxWRJb3sQtn5XgxcSoTMefwRLUxgs2QEFHMZTEw",
  "key8": "ovZMky5tkUBCAj56scEXnfZ7FcPFvV2PoSijSAX2tejFDLaE6JpmXpNxx8yKWwwJUWZMXEdr2L38nFdJTgKxQAk",
  "key9": "2Mha3UAXXjN785wH67izy2KhF6hgvNqpcHzDaCa5Y1syQesCy2YZymYkGte4KS4kccHpWhk98uoRCYstYvimPr3W",
  "key10": "jF94hbfbzZt9cUseKapRAyXpP8qEtq3kmNgJp2yQMKhPBTLYnYFxs6N6S6z7AUkAxskHkMyqjhFMGs8GsZsKxTP",
  "key11": "vQ9t88uTQqdHV7UMe4P3RMBCEKuLFSgT4zZq13cNNe3YuTVZkifRh5vn9EDwuGiLpbBurGEUscs2scFMoch5FaG",
  "key12": "3EFdKrkfuVJN7kaDvjpLXL9TYMbjXcacCgeWaBuPE9ZWaqJcmHcdPa2HEPrBAg25CQr1MoYTNnEwZ9hPYPW5nUVY",
  "key13": "dSHjAfkcWmmmQMoHFnevAmEkWgqX447c9oNuk95ZV2eGyHBhRaizvss3Sb1NjeWBph9AnL7b52Ntvww7sGUpo1h",
  "key14": "2zJ9jAGQm1VrNGCY8yFcNQ2zd9gxUhYwtpT5P7F7NVR4JukYWWWUfJnG2bbM9GhW5w68EVZnfDWCH7PE37e72G2i",
  "key15": "22MSrvzDX5Qxcixfu4XQqr8M9Gjif6aEYBwN7qgXuw9MJ1a54rDb2sF7ccNju6t6dpyZkpdtGK6z87GAYrZ51b8W",
  "key16": "2NNZbkMd4yUDPXkCBJ316oxGjobrEHADoC5WQwk2GEvGKyYAiUPMSFX1C4VRKrzFqnuZy9XGc7m3xi5URFtMxTv9",
  "key17": "2SDxW7HtoodH65df5Hk6qnySPfNqn87F1od3tzFyvkamdVA1yktHKRG6c8B5cJfh5EQPhqndeSS9gRtQXaCimiNr",
  "key18": "3RejsfYtdb8H2s1XjPYxMhAY5ddTsQ1RfnF1PdtxuBRbaLkZvVdoYCfXjEUUuWtVKGyELGqu2vHDCLevrQexLeVg",
  "key19": "4UJRdzgKKSNdyTTgAm1hevoQxfzsQtHvL1dBe9K28C2pRk7qvD8b86n162SYSqweQizuqJvku7eLKyxiCWXN5Mz",
  "key20": "466KxKanN22KeFdPVbRCrgKdKA5NTXYks99zufXQNTgnwS3Dpw4QmZAdz8sC4msV3VAEvYxhM9rYDXuAWpeFCakr",
  "key21": "4FrSD8ENoG66SL8QSB49kPJXJ3bRDqybuUCnftHyLtogSButJdKACV3JJwgXusNbUuoV7zHSkxfvhwCGdaGbJTD2",
  "key22": "3TiFqdbC5Z1NXQ1jcqqwGuimV4EJac8oh662rE5xcgj4MtPhvHfphB1yvWHSV1cp58DhL36mJws8cY2sNpEJMH8p",
  "key23": "4i1JiCiMNAYk3zrBnBXkvv7nGE6N1AJhDj7KqTC2X75EMRWdTTSweaEnDphwSn51tgpE85QS7PLpm8y3tkVBrdZD",
  "key24": "4G9hbQDNgVgetfuByG5HYtaASvzAt29XTpU8jiC5QHR6L3npxRtZRrTwXPF74t6mntbW7u94SnZxE4ME54jRiAqD",
  "key25": "4kHnXSGoB5YP22QpxTnjfcP7fKM3noN3QkhzDPTYwmBHbc6xKgUVSXv9FgfWnZ23sgt9PXzeMVF54QqCpm42aFxc",
  "key26": "4KKzFq7cpCCs872pbpcWYjg9VtCRjqhPj9F1kck3GNMvFGxZ9fYAhycM1SWDG56xog4mYfUCudypuH66WYGhbXrH",
  "key27": "2pSSVxC2D9Pkf5i23knYzVMmLh1KAMr5qGEVqSQBjKiFEgBgoiKW9JWrJ2SGgBVx9iitpbetnfEipUHQnunVubJk",
  "key28": "2qkfQbbmwrVgQRX9sNBoFbnR6HRkdLFLZjMF9z3GhMDN9Jf7o5BwdMy7Hr5SXkRG18BGqtF31EFadxXfXNDzTqUC",
  "key29": "5bzUQ6m3ttNa14CewQQpr55S57Mz8sPGuFsDaaEmgxc4vQbCQwfFynB82jbF3MpcgZRjg9K8UdFuMiHDsnfBCiXi",
  "key30": "38Ruwc9VYWHfDkMPYEvxgGhkWFbYZYtqg9o4pmLqPwPwKArKSFPdTVcgfbC3tPTP8DbKub5CAhzHhg8J1WuhZYjz",
  "key31": "3eTTsqzWAJai9mb4TBNHrfC9JK4qJEoHsP6EmYRasqrs123egVnVJLAaUAoMcYNGWbnbPqHZk4DvQBR12uKEhcpC",
  "key32": "4bqSYtz2sYjhGvn2xaVsukyPVtjAN2YNDmvcnS38s6yyHwEc8u5zS1DqmBMLoNztt35tEqCHiu9td5QCuTpfXLVo",
  "key33": "5E3x7nP6pRFknHWre2zVkiA2SejkRcga4gLr2WxQMb7st8paUjrB6xveQ3V8xwaC76DcUMSSJvGMDWytMCS9nwh2",
  "key34": "2qPqCogjE6YQx1uwwCLFNAxta5Zn8WhV8cjghGN6MhjWDyncpmJfBrQMQkHqVtPgP3XWAvV1d52tSExqg13Tddak",
  "key35": "2fqAH1Tgb3EAHQgwSDVeJBA3SdLAMCCF9CoDBxWoMbwWSMrpqqEFhDqCYsU1sADWBsxrSLU7PNb77LQYgP8oMZGb",
  "key36": "24MiuTKD8PH1qJg9TB5T6wmQH7hZAxh8a5DnCLTccb9SLBi6skCsQtgE9hhFNTeN7ggec8gjFGSAd9DCR5LM7wkh"
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
