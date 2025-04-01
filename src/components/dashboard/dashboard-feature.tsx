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
    "ho9zu3jEfkHDBegQmeAjG79fARoToFt4pEhPXWV3PVLwyju7NrUoiZW4dWonVXHxq5Y5PUYALBvo2XxFqcPdX2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3En9SLdkWfruEEecnTD7TaacUL77V3Y4UGMjS4bgvLKg6d92U2WuTeki5Gutxfjncj97A53L36KZqTtMY9zDamCr",
  "key1": "4MSxpVYG8xaDxz6u1G3vmtonJmBQLSuYJQZRQNkpvt9WSZA9ox7QY4x1f4RjquoofLqG4yjwPFBU1UktmknFpccH",
  "key2": "2xp3vH5fZ29C2LfRENPkF7E26iXqEanEobjrQs9fLuRuYGeuWPAzPR5bidvCRzwjZJTHYQKfLYp6zJZ8sWyMxrD2",
  "key3": "2GYCZDggj5j114S81biM16NVaiAGsVnsT5G6K8rBFwQw2F9X8XAUZf2uq8B4XvM8P4fNwV72v8Gf4hWAof2fhetu",
  "key4": "2y53Yh2rpgKiwY2yzTHLVhuitQhWXF47Kt2bzRPvVGaufUdS998mAu9gALUo2ygZLmEFDnoK4PV96ZG9ZpDUhuTT",
  "key5": "5iBYLZd1tfq42sAAqi6ULysRmfSL4mUKhsyhEwggt9g6Qen8JRuy1LzxSzLp9n4zmhH1pPwLxrj9WkhR79ucnWA8",
  "key6": "5Kr2dsUAxszfq1YHLAjHALFXDCUyUZqa6vLz6cTGNBFCzoBvR2xKwrvJxBjgn95qSxkX1PpqeyaQxJCDELaE6Q6B",
  "key7": "5zJQc5NwJPARSw1H84oheLND39eRd4fpsDQ1LeP7DZBbsdTGDpdT764qgH8u1TzeoHtfS5ATHLMSw1otkdbree8t",
  "key8": "2r2FwLR9TZFLDe6hE5Lgi3HjDH2zLjLxb9sHy84aF35DmbK87277Jvmuoc6QRd9pLeNmGEPsB3vmN6NVG8o9smHS",
  "key9": "5taHVLTxGvDvNj6aNqU4SoTJrfPG2Gh5NwZzjdXYyvzYR1i5bivjkDNMe3fsJaHBthcHdhuwjo8RYE7uyRDmspbS",
  "key10": "5WycGW3xLR2E57MQ8ensJnAWt35UawqGEGjTpKEQRDH9hGXLjyVs3ER45uFN5Cmdf7hTnGPVLYjMWJzUBFRa2V3N",
  "key11": "4K3BVQRWM3f82twoe8eKmR7jQwcNhwUpPVBSav5fQvv6dcwsqeFoDuRpBYf8UZmR9VpAE8Yy9Aw65JytByRh7LB2",
  "key12": "aYUmCYptUu8ihzvXd9HGitC2J2GQUbWvKw2vXmdmGcZcpUi2FFmVQzCVsqum8HpzqPZS6QJt7TWn5xEK9Y6dceU",
  "key13": "5RYks8UbHv9vYUdJetE9D5czBSSJ1YZVmzBQcY4Zs2WRpQHNyPKxaRnDF8dRSYguJS5nzDMRQqiXyvjSgB9tJTFz",
  "key14": "3FdnsbiM4SWbdMGN4eXmg1a6nDBKM6jTNxjkHY32g8Vxgq2PHCZfksEVXorQzVxaFtXwoVdS6wLvUzJTb9vsWeSb",
  "key15": "iiiuBaWKHQTMjGfvjtBxxBg37umuLQBWZ7CfMzBJ2K3huvLerymD1fXbp66tkG1SmpakUEZgNG8SAdom5tEaFHW",
  "key16": "9Y1yjKHRSaMb6bQ79yMzmyc2hACeDnoUypXPvsiY9KPrVCEC5VcAoqeGZWzWfcX5ZcRaNowd21MzNDQz7Mdyht3",
  "key17": "3hUG1cD3J6F1cxQPSLnXK22mUFFoK9KmuqJ9naPAiHU5gYAg2fT4Z7ZpXioVxTaqdcgNt25AGfJxwC8k1DPtoajW",
  "key18": "4gp55ESnXdfp1qW3Bo5v8XWFtkEVn38ZAqAxfbCjbsCBVsLexcA6HU1LGwPTo3KkU4SeQesudPXUKvHEVpNknMy7",
  "key19": "5DW2gMwSaZAFE2Kyrzyzo9f5Wwyt9bUM7W6qGoRm2F2uguTKsggD57r2vnPjHDLaM1A6PmXsTdgau5oHcMCQWvb2",
  "key20": "2BTg4AHbqjm4WhihbTTB4xFfM18R4i6YkHSYCw5g12s7ZiSeWh6pU3U6pnyh1BAppZzXBscom1WnMhFkZYXf7ScR",
  "key21": "b2ioKJBdMZRRwpjX2h4ZhBz5c6xCMgTde27se3wxnV74jZnfS5dX2zwLJZKQJVFQZqkKGsXosy11a7hvb9wTdcX",
  "key22": "32pFX6EAJsk8xXuYBq5v6nfCS7cP6U2kEsJihctMeHs7cMcYWQKKPP11zQkf6M1svTZy43EJYKq6RBhaw5VvU43o",
  "key23": "5M5Z5xNiYgxqbMPzRwVxp13NCbx5KNJsqY8xCiW6Q1fmKtgrEbx3w5q5teMiCh1qLwiZo64eHdyWEBTXtMiQqjUJ",
  "key24": "pL6udLFype5Jg2JCg9Yubbni2trFAnKSY2SQm1bfVDq5fENWfV9nrsVx2TdhAUdAACo8XuZkSYBQgA3CBeGm3tD",
  "key25": "2ppm39MyfdsFYy1eciCZCqVyktu3ACTjpFQtuRGMGxJ8cbUFEuLDtUXUqmEz3ZEazj6TfXyeomKhExBCz4dKiJAP",
  "key26": "262D7tcAxb3r2yddE5H5Em8ySnGDZcsfpL6hVt2hjBFBHMzu5W1FAZ7DdUVGK8wLY8cBhMas5B3YgmJJvmbRcfjk",
  "key27": "nY14QpKTvSENw4xVax9iB7oDGJJS8unC6ooBGsAX4HqRJpZyqAfawcmdTidkCKvx3qBTjDBCCERfrFqY3jNKXM1",
  "key28": "588CVuNTso1kAMRhoHPZ5XXgy8GuMGGUpy1dnngBmfUsvfuSu3NtteduvJ4pmD5nceT4xVAFCBwZY27Ub3kvt1PB",
  "key29": "226jRcQyLr1unNckEfKbLVzN6tKq7xoyMd98pyBFe6ciT4ZiSyMKt4m4sdJBruTWvT2L2iDtkcvroikYkm3PrdMH",
  "key30": "3jJx4fGEgbYpKiakZ24HWFqzGxB5SGZ9kK5ibB58d2doT2ErYYoLvfvtcA6b6K3Xq5aECEhVjDdx8tEz25JqH7DM",
  "key31": "FRD3Bo6LzTRBvqqoiU2ESuHJnEq1jMj93XeERdBSdsn2rpzAqoLtWbYQrRTAYicgXfJPyXMZ7obzfivAPzEUyDY",
  "key32": "4GMvkEqqVM83iBuxtujz5vR2brHotCZjcHHeFmtKwrSq3xq2qoiaWzm3NiTh7Gik7KZeByk8uhbYSUFXBzMfukrC",
  "key33": "4JYue645bXP1PR9mQqS4ynCampha8B3EHNdrguSuxXTV6BPeLVveCurgXCE3zqFa1out2iVMgLjKygVfq8AfnhCi",
  "key34": "35GtBKdAhfMdRts91M8jbFKXgoL85F3oKxhfD1DeBUJk3yuHFY8qMnBwUPAHUrVFHxZ8EdpTFpC5MX4Yygwo8Gms",
  "key35": "TpXPy5D4HXwxJEXeWNWjDXQ1oLbxWimGfXfing6Ux6k5CBgDzSfYrSq6QiXUQjChokyGJdVykygWNx14HMnnWom",
  "key36": "2uXqufSWgXRNvFmbQ4c51hbteFRxteUwhdt29kFN9z6BQn82FenKtdy9ib9fHCMg5mEACSxwDaGnnCk92G2HVMzS",
  "key37": "3ibLSFMXzzd1Bpz2ve8RHvuSv4Vk2Wyp2hJGBK1i9DSYvitQUA2XzgjkSasNubiG3TV7oM6NxQncfsCjNA94fU2F",
  "key38": "2ecKy3cedaJ1qfRRYStkrRENwRGgPL7K1sdHGaFKydsjmX9JWfe3SE9Qm87isNVHLiKoZzsRQS6H5pH47hfgH2x4",
  "key39": "PphRTBiFtryd3asVFzpFEBshXRuEUvx22ZoqXvedpyMuSsaH6dmgaxBcFSjn9Z2aqbe2H6yLJk1VVetVVUtkp4g",
  "key40": "KtHyVtMkwCN45kZ7FxdTkGHXozmCUt5w9xi1KWwp8mmzVhzsP45c1fLcDj8kZrvLbwP24JgEnDZ1xsaDtS7zY3e",
  "key41": "3uk4EPv5EGcX4GftxF9WtKkeV2JXmsBkxqjGEA2BpHzYcXeoH869NAcCJYZg287zNqTY4snF5mANdwHFWkBV3JAF",
  "key42": "5KWGMQgZ9kYgJzTerXwxQNoH2ykC1seKyr76Vw4MZJPuMWa3GzXqaX1GoeCNbxkxnFbaeSQv2j8mBbx4XkEBiy6A",
  "key43": "56nu53k9MdnZXbGWHj1S1CeZYPQYAaHzT34YUXQekHSzmJs5XfGHsAmcGa1Qd6kj3c4QeCQAKrTjGef6DPShF4ce"
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
