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
    "hWEzqQ7GYrmiCq6SHieJi7SWJVaiKPnU6AYLyg6UPaeXBXhBve7KvnTUafyyrwcCh4wkoW7tnuuDfRgtE2n4aaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9AMgEmJXGywiNLKXBQWY55PcY3GbegtvEqo6yA24SMu7B2cjrJfo6k7afSZSr5FpQZxEAseYTTM3Y6Teqx23bc",
  "key1": "34S1jJD4mkxpEpTyTneyeLWkjLPw2QvzSxNkM1XFMv9CdJJhs5MQSB2KWdbw2pYt3uCAeruNB1pjMqvfcmc8Lrft",
  "key2": "WCQX6EmJwBe1ysus5kpNysfCaxev8E1Sp7GLQwvGHX5ENMjgS7zaMmsiKXSNyvx3ivWWpryoK4S1dfTuy2i47MV",
  "key3": "4XY5zxiFnRVwkbm11Nq71WLBthahbq92KERbWZ6GQzNZ7AdeoxsssH11ZEcjapPp5oaXZsF5DzdHUC8njrP8dBsr",
  "key4": "4HiqEgX2TunaZfBRKt2zJ9VBxUJXqozMiJgKQTYkPCCfvzgvCr5ox4xvb9YNQzrZBhZG3V3fHdkAUj4BDRpFNDN6",
  "key5": "313sLBVRdwZArHdaDF9w5rZKHEBNJpg2VJcgHFGGSFDPFwXkGu1iXge8ztVTL7JSnqh4ruzyjvfykNSQK4J75bFS",
  "key6": "56sWmt7nRD3aZkRTS1ikCXk4AQmxUSKsHr8PbrXZPTdwdJbDFUuept1D7JN6vm5SyVGPsoFDxHmFXtE5MY7x7L9m",
  "key7": "VUAk5k4tBwxzYtScTDPgwSXtNi7SUkCcuwYBCnDVonEYKwPkXy7tgKgsRXeCp6MpGXchCe8EB9DcjGohzHENiXp",
  "key8": "2vwKaLab5sqSXvfnKFkdTHvKJD2Xs7ApdR3YrFVnx3zGKt4yy3zsDJffY9YvrYkVkZ6Euv6gG9vK6rEMtj63EtdG",
  "key9": "65aG1a6BajzrXpSPQhEXFkTj5jaXi2ZnddibNaxHytRAw9NVuv4s8jBzQeEmcxmowFY33jbNunu2vyiRcz6MKH8b",
  "key10": "UQciFmCVbhjKyj42MnfjWfAF51gTw22m75aSKMZMc9ZsJo51gUGHNfNihBFjSY1rX9i3WAnDw1FxgLSdarSDuBE",
  "key11": "4bHG2yNfyKrSSNsYeHhUpECTSx8NLGpFgtJedvnVLckagubYGjeCvSWnsxt4aR8nP6Aypop3iLskXYd5GyGAUPu7",
  "key12": "KhxJWq2Tbd2dFKLMLBJaeiH5yw7p2eCKfV9gybT9W8XJCSJemZJbDs8AGetsqBs2d2g6kAQHbYnvUcRaF9KtQTT",
  "key13": "xH5HK2EMUKFc26bKHk4oKXhNEjgqFgzYEifgK9DufxQ425RSY1RTgC9CfpBrifPueuqRk56XdtiUymEyVwsheRT",
  "key14": "62waVPF5jm9ngcoLpS4s5WzxyMCAtCgS9YbLZdrM7wCggrX7bRYYZ3iqLEsKC27XhCQFfimcYtEVNioRdBb6T5Mh",
  "key15": "23gZfXaEx4vrYwSuzHpkujUrT38xZM2XZyjJY8hGn7unLV1b8QfueASJfUcxAaRBJrLfMgWqAQgnA7nJDERAHgJt",
  "key16": "4nuGcvYyDZaUjztbZTc7HMVzvkhGQKzBhuGmD8kWfVFPQDqW9HNFPBgfuyPKpkhHuiuo9SkLJXBmMrjVeys8UfDD",
  "key17": "3cHZQeskBd7eyi7c2vjXrypszRNV2v98c5taQFcLE336TU7yng1cyrhgFCxbAJ4aL4nDNLDUkgW8xQKAFTE29kEG",
  "key18": "3k6BCLYn94dGrMKPCqFEV9NgCM4muJGHPR8Pcx2AfzPdCrMVe1wyaHE1baGYA4k92LpXAcnArW3kwXS5acWPRTu8",
  "key19": "JmSPzCKVBrgLJYTwAWzsCFbDdJaezeMdr9kkZ44M3xbcUBQS86SJmSjAZsgVy5xRS8rGsH2HvLA9H5QKMD3rro9",
  "key20": "3RTBtuRJ7FvJtHosA3xM5z8c9JK4dADiftnDfTi594SreenFveWpLS1jSmhNWHgLtGZdLPxLHFCuUAXdnoCEey19",
  "key21": "336iHhs6Pcs9r1gmTZLSzbYFQ3UoVLXVJTrZ89oFwUyNy3Ypo18CyCJHFqFFU6bHtiW4TS6nF9fihygKeTs13Fv5",
  "key22": "DBgHc2ywCjwv2nvAS3HKCdm7DdqQneUENV1vTLqTNJsPiwBuoFFbWNxeU5TbZDmAPXhwLJKEtrN268ketEGZ7A8",
  "key23": "26ctb8XFSxg9cNNvgP9SMtw5Sg7dEjKppDHSWVvyuQWGfop6Bd3c2dfgYL6QZ1anP3Zi7CfphekndTRQkUxN2Z8b",
  "key24": "2nijDstFAQeEtBqmJPJgGhqb5dsSsvj3DM7uxBptnzCnm4kKhrMuQzcKNTt4Sz6KM5me35wTVaHLtVJ4QEUt78o",
  "key25": "5nv8hwM9avnaCVt6giRh7BkzWf4fx6vFmg9BGX9Vs9g9gpxJXsXNH8smfc9TGJvgg6jo1cq9NRNJ1KBQgMgnk2wz",
  "key26": "eAYSqT491jcM3CaRFMDXfiFykBwNJFpsY3UWZKT9s7HCcWn1miumGupZu9PT5ZyUHs3NYCxiq2Db9pPv5BQ9tuH",
  "key27": "g5gPDSJ8TkAMNQ6pYZsDmwhXodteQ93nWvJqGNfBa25weWf4tBBCybLXZkXB3PuLTyPqoWqeweJYJYzfcdkaqkY",
  "key28": "5K8qgrN2ZgSzrmEEQ2JdzJr9x3MXcZ6iw9nRmfkyLEnVFbFerpfYhsdjiFo5nStM9KWZ8g17pW3ST6anhsubBrQe",
  "key29": "2UA96DfztzynHAHMQ4BrNVPDUAHKuowzu2nQCVryrGv3ku41hLPpG3uAFQ448jGcf6KPePtgb7qgncFZcEi6c7qS",
  "key30": "2b91fUEBgUm5kWwQy5o6unS1dDntuNTJhoLsjuycwzGyDPPyoTWChgUz9dmQ51Bok4ZkHGtK9dsSVC2gDrxgusA3",
  "key31": "4C1mTRifD8t3wuiEWhy9u1rSNztZ5rxeEiJcx7YV6SZwzEhyccMs6EKdAjzobc489cntYLeogT6TwkBkKUnGYPnn",
  "key32": "2d99vp3dVMGXRXjwcmq1v5iBisobv8NPPEnARrGxRGZEnoX6Wda4yXD4kS1UA9tGmgZksiQCmbSPi6Y3KAbLZajs",
  "key33": "316zhDaUFh2tb4yxZgaGiLkmXxgXEFVoQCC7EZAQ4GTFALMbwKt1p6gDk6SJ3sPhPmf6HVEaWYpbL2Y3wc8TF3pX",
  "key34": "2W7DTSbz8Kna1W4VvTrkjJyHcNKfoCA9qPLJ3A1xKHRqyMQUFynmRHy8s2gMDSth9Aoc2eJh8m94tu18m8qLiQXS",
  "key35": "pGjvoR1hqJLjiEQ8s4DyNzq4fHrLknficAASmE7PxPKJLNV2oUVG1kS4RHrDHGKAXFuPHd3xSXbj1hFyeh3Gogb",
  "key36": "4pjj7uxA9iFXXdygiAJpsoUmy34sNBhavc4fP3FSFzhnV3vyJrR9UtskFxAn36bQqSXFXywgzVmNc9XzEYCuH6Zk",
  "key37": "4EHAoKKbdqQRs2xV8txayTgwT9UXPfhghGhTQ6yLibkWjdg4rYeMXXZxcxJzRr16YDzswStoYKumtQTruF2e8Gqk",
  "key38": "49uZ1FqUYFTKhAPs1PqGdEUgUzL5pNvuJdapevQg4b9aG7kXcZSAXFik5v8LdZn7M7HyPmAA9BL9zYWr9iqVX2Hw",
  "key39": "2r9A5nJgXUDmwLDUVHbtk72BH9pkTNZBvQJ8Dfx4uSQ7Tj8Ewbkf2X6Fj66HcLnvUsNv5pkyBWcqeEfcx2vCFzsC",
  "key40": "5PWoKwEKbaGVNqnYr1GZCvbC4S6PH53H7k71XF4HZt4mzrjg5FyKi5txkAUBsB4LCRAoGZwMyNrQQaXQQjM4PZXs",
  "key41": "5AXE3Kj2gniyTNMYCs4U9VEpwGqFu4AD4Nc4dJ5dfDtK64vWUyKmuLD3hS7N67UxWvrGzz7GGbJd88rCAmqY2qSx",
  "key42": "4qZcSwbLLgTeCMBZUaVJq45YF7vfB5TQoj4KBsAinmnkpapiZFpgy6zcPuag7eJmQBudLciTdZhbkmmcjQzoJ9m4",
  "key43": "2G8Q2AeNA7s2CpNKeQGiaRLXoHePYCsB4ZaS7Z8kfKiXW7v7rTqCF9iWQjRUecqN73UNeHDCY7rum2gohmn9b2MW"
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
