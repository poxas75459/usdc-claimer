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
    "5LdEjYPxBE8qTqLR8KEYs83ubgR3deJSGLkQR5b313MtXXgyohMQbf6Ln4v2WgeJUecqrhevJaXY9G4wDna8uHwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z53zWMQ9NMbyueLQXeecPTodSw8n5tFu8HiZquMWudM2WARJXd8vQharYjdAAd4SNhT1kyCTMbFbi34Uu8dzNPo",
  "key1": "5zBoAxUDHWGVeu74pzAdtQ8omtmynCVndHx9rL3MTcHUn2sQx8hQGnnRzSxHk5naPz4yHtNpJfG55FDtp88wFkK4",
  "key2": "62TbKGjqzxrCNsV3GwApgrGaVT9kx4LbeWjVtVAaHm3HVGKL7pBoC6D2Ev7Jp7mvS6i939KNTc9rGSnQyMumfwyb",
  "key3": "3s9F6U3hXqqwbierVzsVzGZjY8nWxDMh97CRJnRS325hs4odae2iqeNDfYBz9ACYWPHbmPWHvPQ2r9UZjcE7id25",
  "key4": "22KP5NTYJsntxzV3QDo9bJC7WT4PqY8N2iTPN8MzpiDjX78ihbM3gbfiQf44KJab113849jB6Rp4xyzhDH9BAxNy",
  "key5": "2ubuLVf2M56GjJDgwJGGR3yHx7ebjHxHgY7cAhULzzHPppKVMqp5UXCff524BWrX1RexcPW5jPHHdciU2okFJAFb",
  "key6": "5d4dsFUSm7ifitc6Fry3ghVqpx7y2wmG7pKuwWwiwBWNd8QMvP6RZD8Es7pQWi51AcHsSEZPCSzKFXKjzvapiYmm",
  "key7": "nRLFF2nbn1w3W3yY9W9KtrKQcKEYQQoYur6Boa81Dnyyn2fDar6RqwEY4hWTMcSbWS5GLE5fb1MQqUPkh12br4T",
  "key8": "5bLdf38tnNqCo45Q5uPzVYKYqJhQ2qN6Bex1X7TaPgM5YnbmcsYtCPk5Loi98ZdMzBjA4NcyMocNRsH72qMVG4gX",
  "key9": "2wzWkyp7qbhkLRamYasMaiKogphewMZ1uBUXhcb1WcmiFbY7DMMWyHVXnRcAtPGGva1S9BiZcHbL2Vt9yuTbz6du",
  "key10": "4AxNEn9qXktcaDZ1Q4rDHtgiesHD1diXRhM7L9g23NV6rUEsGhZZ6tSDRSmkwg7Ytv4jeHBB4CUYCiFcLD6wr2k9",
  "key11": "4gV8xrGViBSnVU6w1aKgdmLytqPDMAk2tUy1yd96k3sLT5jLouySiTWPbFNwmzERseGjpZSgDmUt6tSqAQoHGzM1",
  "key12": "4FvvG1HgVNZ6DKaQx8pFdFoDdLQhwYai7dexfvgSG8cR35roMWnW8QDhG5ExPe4GdDmnzFDvD7TVgGNqCD2yerDU",
  "key13": "56Y6MHdc2zNZuR2fwaL1mDCJSSbENc4qUktm7nHu5QnRhhzYTGca6cQvhkz3wLKLpNHvViE42JnoAdDm3g5wa9Nu",
  "key14": "2m3DCHdtKkqkYZaFgekA5miaMjwRM76rWmfa1xNvR8E3ZKyv65vvBBj1qcmY4YtoDJA1umCQGwGFPVtnM4uYQ6ki",
  "key15": "3mhCUuPANkVNsrQJqMY3UkZGdue61GPESmeeK8xMjSRhS8Xc1vmFsiEoKmteBFqPkTc5VDuqD2NNduDALi1sZkGZ",
  "key16": "3DZTqAafCvNGR8Hza6jAuDu1dTxQkHTacepupKme3hqDXYMWkx5czpmw91sZCYVLgQmFk6WLeoRXueditw2LZyHj",
  "key17": "NoZyvjjarfMHA355FvNjpgv26qtQEhzgpCbsir6gmEdwjYpAdPDtjiTe6BB9tPmZYuUwnsyv2DyQxc4pRh1s6YA",
  "key18": "3UB1ZhsEgvghfzDuUCXYef818wu8KdRQXAyrxJ442ccVTZ4PiEKMDV1QHEfMe33JPngUFFx5UvGiKytJooAqd68X",
  "key19": "3PztmdNEEEKEePca8nqorh3UewvXMhkK46bLw2M8ZjsJ3HXwxR2gN36G1txCAZdkFJtoK3dyS83bZGrhKMjAJcQY",
  "key20": "2JUhyVLZFCdpXvdu5p5M8h2HeFz5pGraYq3XjvXAwDvDtRTtgK6MwQLs5boA2iux6dwHdmMDGuoqPewcQbpynvHN",
  "key21": "2qz4fvZjgYZKmtuUbxF6dSvGdAGifx6KEsWwMGvWZMk6bM3CeWHZTvCb6MjRtx2Z5BxZLSCw8uc9HjS77XJiia2K",
  "key22": "rGpRkG6z7xgUgBibbmfNd8GbaA4dMvzzJKaMXTX1d5MNAZCQbQkd6KPE7dBj77gvjAaJqm5PEb3mHJeyDX45smA",
  "key23": "5e5eomVHQxqXTspqUTDjSJZzcrJg71QwkyeSo4xZ3nVj1gkkAZVanai92UzkoMSdKKpZRgCX72Uat7PoWTFCmSQs",
  "key24": "4MoibJjymJTHkg5mTQbWSkALNAA1VB45ofXvkSgJ6yc5GybvjE1WwACcebLF1FUSp9poS6DgaTyxUxeLQkZkN22f",
  "key25": "2bQ9YzTTiWf5zjHZy33Yy4DpfTfMw41oRtPvacT3QRyP4opUAWDw3hmrVuUHe3nS7Z7ATXyMSqmxGyiJ8ckWQFaS",
  "key26": "4FCzE3w71rGMLXCwrtmmzgnQwqPFPfaK4DxbS8AoS4SbE7BqGc9ggc9yHL6fwUsvZMXfoFtpnmdrj3AnwEh8cTfR",
  "key27": "5tcJRq2p86oYKfajwqbRKNSyAsDPPAWKjSQ9SbH5EMNRwc1cHnmN5BBftrg9B9RfPi7xXPYCyBxDjjhrM5LZPcr",
  "key28": "4mboutAhMYQc9hApDRm2WNCWi4rT3Pg5M79RjMBZeTroGSHdGDDKwsS33P3rLU9aptbQ4mdRoGH422pbHJJpcZCD",
  "key29": "8icTFnqYAezHgMSas3kGt4aBpU9RdVfL7zPSUYSNgoPNVGiL1J5Sz8o8woVRwz7xLtesHDiqGZMTjoF8kvoR6zK",
  "key30": "362uCs47J9BF4KWiimyfMAeqDhHDgyU73kmyx3cR2gS5eNv5Tqsm9TVxiZwk6fP1fTJgLkcudoSaHhXbqedXcFqf",
  "key31": "38t6EtiZkvPXDwEKUWRDTbu1twzxcyk1sYpa1vVMdSPRSotDqwnwpHk7M39XdHReeknhCRUJq7RYZaMjksD72sQb",
  "key32": "4rmazagGNPrLfJSpGwFszp5JnPoB5JvMQGyqTLPnA6a1zMW6Nt5CrwrSLXUSGmZBx5CuAHbYZqYC1NbGbG6jtaGo",
  "key33": "2yKXoNCdPo8vAnUXAWrK6xqZfsQECKCjLY4mv1JhsrJMZEKXfLheSWf8H9pj5oqxSqyWErzSva3dizigyzHn4M3i",
  "key34": "4yQcF5PkLicHj8zT7NxkL4MExBTu3Pk6BJPfr3CkmdpFLwAgH8td8wurYnthEvNaUa6KsmLs1h7DVm4d6ZDgEF2h",
  "key35": "657VrMxRZscTamGwiD4pPU6QwcAiMhCobsb5EgJYKk2Ubcu9iFSKrnFjZ38L2HnYvYzMKjukbgwShbbA5g1J4qhH",
  "key36": "FzNcRctMsqZmwfsMvkVh9assVDfPH4ymx4JHAzebcFnELKrcBA9jFtjZDWrS5MG5U4UngMTQ3kMx4SumSP8KgVr",
  "key37": "pd5DKskefNMTziwyQmm9YG532moeBw6TibQZTw4eBr2BXdhrjTSKpwJVciumTt5mivJjs53rzrDMiha5es3ouYZ"
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
