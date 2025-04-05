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
    "5uHgrAZ1vYYPUewcaKEAGuLnqFYAXAevbAy4sD3aUhmxpR6KkdN13A5wvacup2VLPJYdR9PJ3gd8f6BiZc5QYXAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3CWgysrz3Msv8zzkUNAbXQx8hzU3Vx2QVh5Xes2s6KJEWt1jRWnRSGW8q91wHZAEptBkSNEgJhcVEhcSFkxQWo",
  "key1": "28qVKyE5cxfLXiB5Cz8bJtgBJRo4vxMsmUuFQjexkvtfey4N3RHyE2mxdZ1FCBN6QM5fSwjvh2yu4Dz4fju8rPK7",
  "key2": "4jT8oSpFL2aW8dS6iqAcRhWsaLGihKF4GV18Qx9xr6hW7Qx7VVavMkbZEz8mQmWwwjfAYwusjef7hjubdVAGVjEz",
  "key3": "4ieBPdAL3NTr6d2V5Dj5ZUoFXyaEZ23wJdbx8NPgtgDwyCcNbDcq71t2hjd7J5EXcTHXaNPa2e4nCoJZ2ihJd5Ly",
  "key4": "2Uoe97MkybciKrSsA18WQdG6inQ7xnZBfCyhGpLzGeQVPQVJJLHCVsQBddTfvZ6eG651gRCyjcwS8ctyA63ToAeV",
  "key5": "2JpqnmKGFkhmeqDb4k3MWah1bLqh5jcXGeDW2kh7MCFi8PCyBA9mYTGRuYFWahSMBd8bq7DMrpXoNDEutSjW1ybW",
  "key6": "3W7ikLwiVSm6f9jr9GpEsbbrv6JMQ4rBEjxXLTUDiG3nTNQerDcpv4nvNqmHSueqNJWFVyhV6MiFPGgDoJtGWEiz",
  "key7": "5ZsJZJW2jNMqdTcE3HuhAanv1AXBPcEryB9ETAJSJRv3v5pDXBUaB3Rcrxgv7CQKhp5eG9mGGM4bt5fCAbp7JHfi",
  "key8": "4ghhFYgCgx2JQNtWcHAAdhsHBG6v63i1ZRzd45LWPLiYvGow6YZFLomTx6c7NKoNUV6yQ6BYpUt3Vy4iScovmAWA",
  "key9": "3bFNUsW1sTE1YjdPRqQvJaras9Bc5zZ1guHW8Fu6ur6UheW24EXNRzQVtVomvderzw3g63o5FFXRbjH5W2hvbA1r",
  "key10": "ohgCXP66RjgToCMYY4wS4MP6oPpfZVFF2j44GUDASgomfRvQdsneDENML2uvdK295vmEffkaxygmtdszJChaSem",
  "key11": "mj2BstRWdQ8tbdookhk8vDUasAENrcBAuuSaYHGSAswB5EnBkxGriQAmsoj9vYH2Q3vo15hgcuxm5gNyAmeY36V",
  "key12": "34hEeCkwCjhsTCEQ9oDYtNtNVcrWnB1k8TEHxEWFFhtj2ykgxotuzffdx1BXR9PTECUf4HkJzMFsXzDub2TXd9aU",
  "key13": "23ozGKuqagppFBF6RsZcM9HUmNjurLveistRVMspBeiMrXNGga9a9SuztpeQm8VSR1KHycWP4hBn8M1xbJvJr4Rk",
  "key14": "4WmFb5fYfmraiZCwZvkcc22Q8biT2PeQAUCRrKuxCDiaf6Wa2UzZeMqMExpRRZbC1FQcs3rZm9WCVqBH5F5yKhgq",
  "key15": "3eZosqvsc426y8mTVc9XSyd6tDxAV8MX2a47TV4LpFfwspTUHxyty8XzmYBf2ngP8vHoxydMPCDkiENzAHF7rbHS",
  "key16": "ScPL3wQMK1Z588CRwb7yhqZxJdfzpvPKwfkzM76yZieRqNV43Hae6zgNKJAat6DYVUHt1Ma7GBg3LCPiViHbZcK",
  "key17": "5GUUuULsu88RFL7eWGWGDNLWgJzHgNLx136CdYchUMq6kAxCqCDh8ka6YZNghqEU8mqdqnEiEAZucsEFSPTB6dT7",
  "key18": "5k6apw3SWBhjk5Y3Q1sSzQu7RvuqgLbzhrURy2rEERMYp8fJSB69e3gf95SDkWRfW7cm7383gf3YU97SwNHRoAcu",
  "key19": "585mTBkUn5MrJXPDMnZw4Zv9tMNFTj3PpK5FVDyazhR86iStyURYCPtZuFyXhgQHibHK8GkDa7wkw8FAzzeTZdxb",
  "key20": "3hM1V9bwQUbUhXCq6SsiP1b5sCi4bSnWmuAZDnySwSRmb9VgmNr3wwhxFuUkPYJfHJWWy64in8Y6cwQE7u1cUjfe",
  "key21": "46XLvYrzrF5QZMYicvLjKkAzrBUU1bauPBNXbSycDUU8Y1E3RUr7ZBz4rjUTFuHZJXzs64vrteg6voBrgaU93h8d",
  "key22": "5m62bBQWJ6MteW8JMdVzsH7uX5egDPwiQp3xZanSmdrCCdPjPDXvTAkfSAK5ryVRSvJQCZrh8QqbNuYN3GBwksfU",
  "key23": "5ZDFMBjyJf5X5HE1iSKMbcMFGVsqpCjQoagiPLEiBLkAKpn1sJPHXnnHQ3KMNAjEAqwTAp7UKbkCnZU2fevGBdA6",
  "key24": "4iL5tW44hwMaQ3qbs2b5p29XRpmeVJSaqMXZd6D1wT66kYQujDBmtvSEC3HssuaePrBHRvRdXA1AiMWZJLTqHM4Y",
  "key25": "4ac1RHqAWYEHgpN7uRfZLREud2xJbUBvUV252318gq96Zy8Uesc1at2vY8kQnaa8QDpx4pnszbvSvJQ8XWYAUM1R",
  "key26": "24msFe49xcqFg1D1aSxc6X6NhgQHsGi6gK9ycpyupJB7pqu8E8ouG7HnLBHtJScb2fyDtqriZYZS5sAHid8QybeJ",
  "key27": "4ZyNb1bqePVp2te2XAJx9fy3XHKYr3AzF3nJAhnyFVSiSVk3WBnUvFjhsHG8fBF3QHY7pS8PyzVS8J2pqoEXKCLE",
  "key28": "2W7KLfMv8CkTgpeG4u5Z2mE7oKcQvqGeeLFgiY96jJhFq8hNt2y1j9kib3UoG9J8qqpnBshjDVpUPwzdJaEcSg7h",
  "key29": "5AhgrGkRQ8RjFVXVvSqgbxqNdAJLxrci9BAEvk3vSVmtfa1niX1R7KUWDcu8zVcv1E4VeVJDEyu8w6HUQsBG7RCf",
  "key30": "4t3bXLJ42t1gEKifvepBzSLMRqFsLtmfktsmrVknP8WEWqZGy7h3VUUAWVUiFpEuePqz4N3KaF2VbBYB7DBuXcXc",
  "key31": "36rHm6EVn6AJF5BAyZuxj5Crou5VtSioVL3E3uTMsMVcM8VqDjfuzE33HsiN4CGnGNFU2UZ3Jr5ZWmL5rkYCZ9Gt",
  "key32": "PVEe9idaDmbs13FULBiQeuAsfnwzkHZ1VjyqDofsPod8kJ5gRsKZ94skU6SsRVF2o9vs2QhLUbz9MpXvkdBntYr",
  "key33": "4Yz9ty9w4FBgpKkNzpQCtLsYpzoNxRvKhsUDQzYMnz7Ss1w32kwDPCt4xKAJTRPqxMttDwtitWx3YPJkFYoQyqPN",
  "key34": "3un28H93cphPQY1EAaG76yp3Dfn7RVDhWrGNQnpGojozSAvdBf7LmPaKD1hFg29EWaZeXhCYgsEH7dpC8DxU4efg",
  "key35": "5o4956hqQHkq8T2ShUr35xTk2bhwzx8uiXg6bf4F268BepgD5vRutPU46JEyFJJGAU1q8MCttmUiHSBiS83fuhDe",
  "key36": "2uNisYXe3TXQpgGmLbguz7iQk5erHAJ9MzaLTHaJMZzycVzDWif4f7ENrxFeWn8esz84BUcVzpxBPFwkNDLdjMLV",
  "key37": "4GWDsoqWrwM4tyk3z3kgfZBtuiLGRuFMJUhwKizC7FNZYd2TfUa4gYpT9Fp1XYFQ95tFnzNZ7aq31guCgGm1QJpA",
  "key38": "5DfxsGrRo6dyasuk1AUbaRMTCesAkSLMU5hXe7DBLJJKQyGy8RGcLfS3THdBZ8ZSZCh568KyWJ7TeSfwV7PoASDz",
  "key39": "ggFtTyoTTTZxAdGnE7dzqYB4mDPPLS1gR9a6C3vFkiVmejng9hmwoceNPS4shb2GRfiK6Kr6PecnpWcJUJGVuFY"
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
