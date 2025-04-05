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
    "4btYXLUCwCt18gjBksavZ5ren4LrSPk56XCzohD89sJGquZTu5Mma2QD8xbZ3BYD8JkHu8N75fzCH73CZTCxFfUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQmJMY8SeMBEffcmkEAdFFfh1L7ihyyhtJZuzuznTJhUreceLuRf7CVuQV2RdNkAQPnemAwcSbs5gbhzssjtjYU",
  "key1": "DvUsEdPFhUTKGwxkGRiKNNtopLaaY8VPVHgrtExcp2Bjz8i3Ss92jVLkNBqVhArjHLmV3AnwSM8rbpLMy2B3auz",
  "key2": "2RwyeZScbPNXFw9LFkYxpha3RfH9xp6qVUFrufGCZG9g2gKykSNrqBPZeT8yU8JvUmrKPVtqJNWtaJq7S3r8HSn6",
  "key3": "4WJ4pEPWsZvTb8VFsBGeFXrJPnQyk7uHDFEUxQxXRJG3oPhiEPEdpZwxX7o3hL64QcYdxAwQm5emVFaTyjnihNag",
  "key4": "SLA4Yar3GqexMVVfMPvWF5pcjvqBgMhfiLn7rqd4wJUZ7bLmDfx1QNvVCQ1SWKTNdyHeXKtTRepWLtKsWcLKVht",
  "key5": "3yvXYVtGFuERNCEKnhNzZFYn53rHgCJn2tALfXfVHdFYEDNVxxir8bjJVZjbCa4ftfxdGTu7fE18eXRQaMjkfwXt",
  "key6": "2asBD4UyEh9ygMbZMhoSENLVdgsg9sCAd2Z1LgSfMmJSiTHFtYzeKE4JxHCGxkk3vUyHqb7kfMV4qx8hW4Pk9bmb",
  "key7": "5MyXvjnaSNmANJvESkJfeQmXyA7VhNyawBEnofUHLtdZm4EmpZjkZq9wcEVtTfP1hGCV3NwNd99VsdotYokcHoDQ",
  "key8": "4HF9KxjnmYKgkbLoP69s76kHz1zPNupchEL3mCHCnLqhJbcDWwvrmVvqesvxqt1VEN2bxxxagZqoizHgAyAqYMjd",
  "key9": "3GE2XpiB8HMxoiCwwmRN7VJr8zjLLPpnVDBFAWNvTwBbeD5bqRoDNnnACUtAPFMeG69GD13g9PPDXJMpVhxt9TVm",
  "key10": "QmEKBSvoQvsaNvDRRm1Y94hDEvq6gYzPx8MHa4JceLrDMCypMLSNNif4w6Prgp2bCSRWbnsNwV6hoiK8rYCQhkT",
  "key11": "AGjHsdPhycTaBiXRXLpNSWF7FtfH14ioXXvfZq8yqBRdwGNjFGaDoF1kGpfLYn9KjngG6caGMdVfQCx8x94963v",
  "key12": "3A9G1m8ZkjPSqxxxhaYnuZnxPdmStWVk8GizDEfag6vMA9ADsniz1qvsZRq1XrRLU8GKBhjxV8EXP4Zrsm79D3S",
  "key13": "WxoEcPPHpsdS5pVktYnnh5JWYTYybyPx7CWy7fBaid1WN86Ug2wPZyFzb4Yn1Ebn5TSQYoJhmJ6em6f95e3LcYR",
  "key14": "3G55WGdiRZk4B87YNcHT4XffYgGXJii3wvVH6XEWjKseKybEYYq1FcL9EdopZzUoR4vPTpnNFCXD9qzTCPEYPuqs",
  "key15": "4Qe3hpzACD9zkFMnENakP614uQgcr6hm55EuSXof4LhGmGF9UFcUXstEPC47dKkMK52pppUamHDsjAGBwa9BPxgr",
  "key16": "33Zbw2XTd54o3wYf7pAiSmr8PWDCsKaEmkE6B4vScRskWCKEe8NDJSu4CXUMYdWpfqMiCkL4NxDZWPYwm3M4ouxZ",
  "key17": "2KdDZ4EMcKHBmUhzmCvLYSzRJ7MdSD8c22wJUXGGwtydARAcU6Bzb8fkYjUyb2a2F8XboaFscY1wBnKXYDWajZLL",
  "key18": "2xPefSazrihPVeYo7J9V5Zq6yuWRX5WESSqWyVFdWBnFRGH4RUt88SQToZUDVjTAsYwtWvXmzr2F1kRKAcTZgQQ5",
  "key19": "3d5vQw577sTS9VGhos1SQZ3yFap54i9mE6vjo9j9wGJJQxZnftVvAYdqnPQy7EhyP7XUb71oCNnSreVTpNPctr4P",
  "key20": "5xr8Q6wzUrL3RdxMmFrqQLWvAroLv2vuvWveedMoWBxYPMEaPjdyr2FZmC3hMwxdA6e6Hpvg7mM6gj1MVtfkpMZP",
  "key21": "d9GDVqtjew5uRR3TNgUGU27Rjw5Hgqc5Uo8ndY1nisEKFYn8vdNAzfsfqrEQoLh79brGnZ7zYBy4hArfoCjc7Kq",
  "key22": "5DMTzr5PbTxxWddU1NGJ1161Dra25n9SsWpkaSmKY7wB27gAZ6Xph9YztueohB2dyHxzmW5BEqVnFz4G7h9s4ri4",
  "key23": "2aAb9R5tiMopf5JqGQbSzeHCJNto7UQigZr3RkLpQ7XVhRBYBir2Z9q1oW7mLpqrXmvEpva18JZnaxihLYvssemZ",
  "key24": "2jWVJCmQXjiMgQA59XxAA5p2vSCCk9PbjWmEe6aGjkZezH7CqcMtQh79aLAAkwZnRBx6UR9fXBHQXWNFCf2RPZqo",
  "key25": "5MM1wRCoDbSufZHrNiLhdxD5aJNa5QexarALUthJRQUj6iAmnMCa6Dhzf7t83CM4DVPzfXpppBb9xHrT6NASG2do",
  "key26": "5RqT9AMApVo4sz8M8sJqmbYm1AnqXy1xwNLt1pApEYXixWX2FHfhABJfYd6TNKRkDc1xmUwi5a2KnxQk6SNtrg2w",
  "key27": "2BdSPe2XDzmrXjPVS27HQr6EY3BT3ncPqEaUZ2tndYiqURx4VvaTupqWPkDvkEiq8B9m2ENJ2QryCbB5eok7DZJD",
  "key28": "3YuSNMuTRRGLPt4amSsHF3q3n2y5G39Vx9MJnRBE6eHnv1JK831YTbUrGLJMst3o1TV33EEp3xJqyAmS4o5pT6D9",
  "key29": "2ZVXw41wgRzvWxuYUecQturED2Sxwo5nuZERMKTJMgRsUKmf88QC2oo6D8T45AbXjdYLSYpKPdbcMaoUndXDTLyc",
  "key30": "8nL1uz13dfR5674K8NvFjjKgLCayziHnin9ABPZq8f51dcE6Gx8dFN8aaiWS1zCK95G67cdn1dMQB9M1TQmhg1P",
  "key31": "499xhQA7YSGnRf5CaSDYu3XrcJkq1GtjxC1NRzp4ksXMzZUBFnYcQGzmuQM2rcXraoyenVdcYB3yQVZk3dtykh5V",
  "key32": "5Y5goJa7aQAPBSjgkTrtd8qwPXxicPMukMzdUVtVCviuCRCoV4XDrzdYmY5fhHdzhe4Zb2icCgz8tK27buKwi5RE",
  "key33": "2KCLoevnYzqegkVS84AbpBLqBJf56guYRyDTrmZQjj9KrddF1MTF52WQr4LkcSq7AcownMMdJAU75tZaqN5gPzKN",
  "key34": "5YUB6DMwyy1NHG83D33JyKL1iyemmxa2CMdu5FLnAwY4cxBra4yiTSNrAgb3w22aMrrNMvyGzqtsiSZhXsYk6K9x",
  "key35": "WzZbX5LsFib57yXQMhDinGJQ7EmTdCgx1B1nr524yg2xL6h4HAiksoVkjejakZBXvcDR8oVRCWgEtPBcg2i3c9q",
  "key36": "87mgmFZku6D5JwHhvprTJt6jvyoHfennVQMGL6znLcBCQcHit5GEpzbs4GKHWKinwoybp7KNA5H2PkgWDxz2KsD",
  "key37": "xfTnDzsjAyPMqneA2pReue1jJkrQdkfnqH8LxYUzWNtCscRzuqRLb6xtM78VnVzxxw39HN2VwMkMfi2NsnhZMF8",
  "key38": "2HxnV8uZBVDniFX2NnJSioG8tGLyusUkwcbLHm1PUXypvBFws1TUsbU1f9kMmYU2XB2gBw6CQuCMG4WraZdeVSh4",
  "key39": "3TG8sotM3Pz5dBGDiHHyUFLVR9pHSwfqMCtVsfLt8TAbSHjtVnU71fZu47XJV3LRe5YLBZPsV1B5BHHSxD3zUe2o",
  "key40": "J6wndWL86THpqHoT9Q8oxT2ueLZuyGpHcP77ksP29LDawboG5DgKFfsjax8dtQ2zQMSQggiLT8FMzG4hX7FnMod",
  "key41": "59dGN5CrxvqkZuaLp325ZYiWzhRAovknxT8TXCHhdiQkMk6cuNY7qhsU28CtzgKMxwjuRJv5uVKvieqDd69uitni",
  "key42": "3xEKiafgzP8cqmXwCSKy24SKtpcSpbQ7gAgG2jDdfqo7KXDAXPBJbdTFE88rBBadB8pdz9AW6R8eY3MyyNfZwvAv",
  "key43": "4rW1uaibGeQtsnHWSYPvjjEruJB4WMcu2emfp8w793bucgwSmwnJG6MCxQ6MdqGYxkTKF5FJcMaLPthWho6SwNTc",
  "key44": "5wdhReMi6CFNdkwVb8vJDrQntaqA6xS8M8XVutibKgZ49uad6Q6kHyzV7kWgERkmHML5dfpRvnK7qc6hrA613Jzw"
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
