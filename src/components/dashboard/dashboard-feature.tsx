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
    "3tBCkfYKx6WjGRmqWNYZPnPxphyEa3zctEDafMTCad5T7J3vePrY5iPd3hQW8PmtqwCttZF7HdT7HF5QK92P6xK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXm1wekMzS9Eckm6MwHGtQPYBh8df7ogp46otWram8fEg2fcuHHvzQtGZdunSySpq2YP9jg78eyd848J7jaDNxs",
  "key1": "wTMgVVZMATDL9C66rCXdHftHsq3rC9zqQeyPLrhNvZjQ2RyasUtych9NTrkAT1zmNcEtAka2fUkLhGbibqdeECm",
  "key2": "4Rzr3rxUf5ziicbmtHcnwN7Hp67VvnvHnvqxbcsyjPFDBY8HkgvZd2uRyMuWBkDwCsDY3oJfmp3yJC7L8YKMdz7z",
  "key3": "JjuNe5t1wuyDHeqNy3DpUJero2rHWYAsxQ3xeAXDUZifUcGvb3Y7aF59gbrPeK541YEpxc6E3FECuUib6VtjAem",
  "key4": "Faui3jcDrparKQAoFmesyY1f6Prcz2h5qXG1PqTJMjxP2BYwGmNKnmLneH62AfBXMRydKtaSVzcdvGG34opWqZq",
  "key5": "38QvAFVHsv9v7mTwp5ncGnCqB2PXRzGmT7v8zU1Kjrb5hR21pWje59ZSnjRb3kuinwmTYQXNiwmGzjsggHqgWA7Q",
  "key6": "5opFG4uQofiNfVcujtiKc277tB1bbaG59gzK9Q99tsDMCssnhtD5depwDmE6kS9Q7VWqbASaZsLWGKyJHzVVYurh",
  "key7": "3eK487JUiYzhnwadQQh4rpaRcy11SegjFLCdqGmUZPFJbbmgYMVn4R7o9S3R7a46Bt69jbfYxFKUy2HwW17bJH2u",
  "key8": "3dm6rv8SsSuSMmY6vEWkKnu1fsFJc9ndQ2DRgoVyM3SQ2TLdWLpWm2JSrVPrQH7aJnmmVSEUxivUrjCe4FBqSrMX",
  "key9": "3kieHM6Yr5GzkAdoVHjccjf1rU2Wzkns9qCsC3vxaLjjKXq35ajtWxKXdKSTUSS11tuMrQyxtNc9bUEs5Y1S7iYD",
  "key10": "2XkmAeJCD8foMa9LVctGXeuhSkqYdJfwG2ntfbwrCXw2xvGGrjJxLyMtNmJvwKt9LRZPA4idMhwr1e7CSaH81944",
  "key11": "2dq3pHa7po7G7gG6CPSqT52YHxc6aVyMZdcVmmpB38HY4M5XVw3wpBAoaABj3zevQTesAMhTjMWVXnxXe1GtLaZu",
  "key12": "AbWNynWBuMGwW2GATei8Dh7Th5JJaV2MvqakRNBoxhnJidg3LQAjYz5TVyQ97K6M7hsiKyPDZMuQPDuoeSRpCNt",
  "key13": "4qaCVRNFUQTcGJzdQiK85un3EzC44uoPxLNrpcZVBVqntK8wrgesZ9f1LLh1kmhakmteoNnUUGvGZgGHy3ecSNTN",
  "key14": "4gMDNahoh1AjPZuHCFkJKjkS9hBa5sj5EpGe2mMA7ZvCYgC8Et6fRLds8WF45vHAQibS1ThrTGp17k8LZtLDoaEU",
  "key15": "3B91gCyFTS7DvDRip25SCGeALuzSZBz7sLKucoBzBQECbsC2uwdjwqSfAnC5zygpfDxpotchzjC53H2MXStNYprb",
  "key16": "nbKmPwaPGJw9RBn7sPZNpKC2EJ4wTP6xtMZZ83RBAjCozhmfkgp6BhiFRck45yHJQ3j2BDq5mcXjArLsX4NfDqx",
  "key17": "3t7krbTzgSmMqooKe7XD9gAzqMkvNX1MmbNzgpx9TR6Q4aJdcZoEZyRHK5Dpx9Lf5APzfBynXnT4gT97WbKXqGjX",
  "key18": "2PVR1FZ8f3qTUkPRYFFSLmR24Je8sH5WVB83oeM8eGV5p5Jwkxb9KwJoYu5jbZudU59CUjWwatkUErNHje9kneTh",
  "key19": "29PNqnDVCnm88j7zADhaEyzzh2cX5kGfq2HutVLQXSmA3QPVun3hfNHacoz5SbLnm8pLcT974Nd2p6s7ay8FPWqN",
  "key20": "geZYxYQY2S2R8aW8JspmdgNR71JKrLzsrrM5zsizwFiuU85zKR2wj45gLPiCfsT2W3N5feYiEm8xsLGufY8SPgf",
  "key21": "2wvBhwkmttvnEoUuUBmKuwbfxzX62Z7P3XKcFzgg3tkt19rPKv5gsUsxis43xticThJdBEJ6c7o3AYmjiWmE6rve",
  "key22": "2kSFw8Mcf1nDv3ELovri7FsyTwUsKJpFUbmkEi53CBLi1DEPqgPQ1N7EtoAs4PAqrB1NKeMsZiZNDFAd5vJ2ZCdM",
  "key23": "HGGKbAmm8daQPjL6LrCc5G2o5NAPJNWCe3hC3Z34MdBTxR1dmRyiHnCePaSMbVCquMNHrHymoGmkDHGzp2Ep1pz",
  "key24": "24rcBcUR7opr9N2CuVnFFiLLeLBn8XStCzjUBhLscBTQFajPshRDmZt7s8Ae1aYzCeqCFoAQ3fZfrLNMTovjmnwG",
  "key25": "4Bz5gMwXpFXsdKTBqhaYmbB3q2w7oVcE3qv3AnmWQFYxPqUq1UVxsBN3EvL9yvTD9A1LqS1TL8FPJGNt4hcR84mS",
  "key26": "7hrtBqFDhD3AreKeJs7wuR2niJgQaz4LiyuyGP9seEvpCiNXFq8FGhGa6yauCvFET1Rp8tU27bJgQEpxUiBH52P",
  "key27": "3YVComJfiCG5NFQtaPvyZwPwv3qN1inLBaufujghzkSqRmCJKCAzTg1HsFGKytUpvLAvPNfLW9mbeUufGBJaEKVa",
  "key28": "2g78N1pkv5Hk2swNdu88FRwiyaFfZgrvcq2uYCwWXfoctg8gUSzx9XGvFJ5RhHuHVZEcWCkvMxAezyyrQRRDCk4k",
  "key29": "9MGwmaH9xSLtpZXE6UG1YNLRfbF8apVK2z7Kc4ppt2CpUE6hWkg97yHt3wPM8gK5umiiDQGZbSfuVhZRuGLSmMK",
  "key30": "d117XDh5MMdYA5ujpJADXxBVZRDa4EEquDQguR13ZnXvoA8HFw2EuVDx2d7VPeLQmEEzmPxpCrqPB57f5mPM2Lw",
  "key31": "4vZcgn9mM3pTBabEJH1WWWsru7jvZPRJGv7XMwthkmZNadMhWNspjKCtkCrsEE8yiWVGab89YQHjc4fQbfdebkmH",
  "key32": "34trhR4CkXVqDyg4QwmH3DGUgUS3KDXNcbfDVBJgjBXZVGemjM71p39cVhnoY3p41dnwbsMVtqKBUeiWagWGpLiB",
  "key33": "2BD96CF7LZkXqeoFTukBHWHP6bkpU3awRkFxNSzqUXrBRKwW8TfsGUnmtemh4QeZ5ivKHXGLVRgiRcq3P3xoT32r",
  "key34": "2xGazxB6mvxXgSuE3pDM67JhC9N7KvyY4UdrGbSisRuh2Yjs6g4v5n7N2z4E5tQb2betrgQ7hhnVeD6pNoSX3LLp",
  "key35": "2K8ijt44p5HjbpVJNWJqF9MCoWTSGicW6MFV5enT2Ej75CPUUASpNecd3iPXR6bYGaNGYaqZyWVEbfZc8N1MNGDq"
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
