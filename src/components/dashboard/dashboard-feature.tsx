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
    "53z41FsBdL2QBKVCpT9LjoXrYSqHHst3digwttLRipHD75GLJRFv89phQcBmEkkMSa8uRGiG52kSMBaa4iwUu25K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dBhddXBASkzzqrXibcKaDEFp89kQdkMpMDn4DFrKPzpnAfFKjGZnhu7CcYDrZ9WBYwVSDnUFi7Gi1k6DMdTdd7a",
  "key1": "3vR6SvPNRV9HpqzZ4KFpfCqtzTmH9jCfUsvc2yy15t5TzQA6aj4CXyVvnEjv2B13RuSeUkPxyRCQibCFbYKrLFUY",
  "key2": "48gcEDnoSZKr9Q9X7KzKRiGSFjavr7WUsuY3tLgn85UbZikdREBc8oLvEDtcxod6zGZTpQYWeHX8K4nSS2bgTTC7",
  "key3": "5m1D3ounsTEFhaVRFDca1Cp6jLYWPfqjAV6deu6KwF1osWpFG9zrQ6nGp57B7boDpYaiW5xLQ2vMnTZi7v29hWfD",
  "key4": "4r3ivwxS9Zu8bQs3xcN9f1PM9CxqTRDHXfyKcX6RyLRYTknCNZHFXSk6cpg1bfzHFJYdKykAj1eedafuMJF4Dmr2",
  "key5": "8spFj89es5FFVecXib42JzpJSQfYGCBoqiupb8wq8MhLHMvUbMsTzCXg9QXMppD5KCY4u5kMc8thQqpAeSsYq2v",
  "key6": "d1zcNnNgAy9ZsYqYuG12UGcPney9iomErJa5Esxbr33vTWnJgZ27Ve4t5noK67xrr1KPjY7yjEiZxEzaoogxqqL",
  "key7": "5iVFEqU1Z5WuLPF6FNpcCsBSHRSSQCHc25QXaePK8GULrbtYVdnpipNo4K47a1MWQ9UziDiWmb8YdsrUScKrSD5w",
  "key8": "WFit7r31Ymvq6i9FWkhrhALRYy4FQYaqz4v9FLSsSTRh4vDnCTf2dfZVf958gzVdYDXn3aQK34rTZWWBygd7kSU",
  "key9": "38NTqMuYeXbfARb5GtjnkZXppKeTvMWCYn7QpnSrMVqmKiSVMqvYXdM1xF2WbBxqNL65bTAQmG99dy9KP8Gw2Bjx",
  "key10": "2X6E7t3XQZf4xpbxcnd8zrE1RaqpXmgWkyXL4bBgM3iXmYsHCWvrcRk8kX4Z5GB9f9VXwR2sfW5TiuWAZqbaLvAj",
  "key11": "4pTA5bnp5Yc4JkVJi4nf5vXhnBsFzqCr8AtPYrY6xR8CZJ3T3L9Bu9u1KdLLMNVaZVTY5tt6MgszjJwXgyMbkTzP",
  "key12": "3u57hVuUbbYvnTZTdGAaTxjXjdCuojZrVxcpDAjeXQYkshmQcgjEPKBQj18HkU51JZ7XjaVVgU96Y3ND23pKvGSs",
  "key13": "TEeyTRrVKp4HYfoztSa6DkefP8FMMuHbARoBxyDPkkKJbdF5w4UVQyXPvC5t5PUEtcaFNDca8AXjzy9a5KtoQeg",
  "key14": "5MymFMxJoMKnj7w4xLjy12tgUV2tB7nrhfp7QSzCTJXq54PYPbR3p3EUg4kkW2D6Ucmh8nnkwSrMahgRG6VRcRdv",
  "key15": "4XyhBs11H3ukmioWnqCcvYj2JNCPQxyaGqerxSwKqsrfF4CsykFi7hjn123184uw1yVe5AREkpia49N6KKpuuyeT",
  "key16": "39Zx1Bo4G9Jwkf8pvze3K3tzdHhLXydNsBA5GT5L1oyCpwPfAZgM28TBkneGLXNHR7UjzAU3MAhvEPCC7sAXeWup",
  "key17": "4vVP7Y91CPUuiegGivfjZ7WmebCD3SKg5ygejkisXjZLmW3wnniQhmZZjbKrRSuibHXuuxydW38aqoa5pJ9ht3fr",
  "key18": "PgzeghMHdSp9ti7F38wRtRQr89ZmsaBQjBuc1isaKooneaZCegHTpcYWVbo1gHBjisFwBDXTkwdi98UCKDUUrvo",
  "key19": "3YtAFwRKWhj8xsVJEshJAFHsnMWCtPcQSeVaVvFZZ6z2mJWtt5hDNJqLMfqxecV2gxBZXua9ENnLJZVudSRHHqGj",
  "key20": "2qSazcPe7aqQ8vAM2g5bgTh56QBwQGXfokz3PteR6Ua7TPgneTS6Nt4DUTxzx1ZwiAWX2oXrRn7h1VcTxsffx8mA",
  "key21": "3tk8fxcmjZPJVa9EADj8sRaPjwFRLADbeidBMTbRUP2L3h7Y9FkdgbtNgj6XzxNVrZ8H6vtRvh7W5sZ4Ws5YKGrR",
  "key22": "2pRbhU5aEJkVnaCCdWNgfcy9kQUfGytAL4zCywxeP7BRLFmmye3fUjCAQDEXvtFNw7sZQ6uXir6sCZRQNDLM4QKa",
  "key23": "VwDhkuLFuJ8KsACqX1s4vYdei3fhTwte6ssmhhuhebNveM9gt2M7SCSe9bTmAoDZ95sBeexshEuP7J4StHfo8YW",
  "key24": "2aqXK15dUuamfmz42AgVSXpx5sKZDjHbuZxPFnAgWWPS6nRX47W9ci15N19zs4qF7Yd7DuVJzYfQdZT5rP7hz8Gc"
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
