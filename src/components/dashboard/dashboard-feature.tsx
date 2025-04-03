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
    "53A3yzf3UH1onr3ZtZDPYtbFy6wZA8UnFx5YF8Yy1mvx3gbWQMMLXYC8yyABF1t2sbNm9eXQpLDfdzRnbHgiGEYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKYygjbnG1ei5FfGMPodD1cHqXsnEWEFMCkDkfzWr91JfPTs5BktWt95uXTGWVbCS2uiZbqT8vDtRK3BjnwsnSU",
  "key1": "gbLSPKbBB4UesJBg7kPBjZJm1sCU3LKm3aLbfM5JTtBLmFNNgM7Br6dFznQEghiDrWhb72pxZdMFRVFppbi6jM6",
  "key2": "4kuYE8Kv3Cy68YfYMW3ticf32fnPMcNY8D84YYHXYjzMqBv7akcqADVQfg7M2C1mnzUCv4v8hAFp1tEWd1MyRaMd",
  "key3": "5KJMHdSReKMBxUZADmXN2tdHc42HFX1n8c5aBeysRwxKxAkrnXCNaRXKesdeK38UmkzhubhBG6wZjWg1M6UdnX6L",
  "key4": "3pZj3oSSHFPGbwhtZyg7Hf5m9NYQHrLEe96emkLvDpRDhArGAr3DNmSocysh2n4KLrvNxG9ZGWqPL4CCsUgf9JSY",
  "key5": "5st3fzLZpqWbf4tdMakkAxJ4FGEncb1mC6GejnX5nuJi5c5jGKLjXB6Pyd4ChcBfyYeFU8cFYWH6tLn6zqY3a88S",
  "key6": "6kLwSkxHjK7NGmRXdoyjcxnz9oaY1eX93H3WLAHN23zwfUULadwdNCqaLQ7Tak763kUv4m7fNrF74Vo4Cju8wt6",
  "key7": "5WzNtvdtSESwKqfExTF5GjGf7nHhSNtD1nggvuBJ5JpNJDQTwEPjNn8vA3V2bxf9zTjk8SxYzM73UMnvgHemTgXU",
  "key8": "3kpugCjRUrPoyirrXR3hmNx5QBecBi8sGBUpUkANDQqjz8W8SsbdnWJbEnFzF3nPmopHm4wv4M8QEyu8q4MEGWZg",
  "key9": "4mRAAxMwisJjvp2DkjgUcKV62eHJakC9eUvHnmewkdBWiimE2Cnu2T9z5U26hZ2y6gEvWDKjdKVpKYf1dG6AcQUF",
  "key10": "5VnUVDeh42XHjk7gx6saKDrToCVGtTHU1oiTZU5bum2ifDSjQFevtdQcy7qmcxxyBC6QtnBvyLgBHWp3rHSvom1U",
  "key11": "2EnNAYNr5K6LFB9gH7j8zphnefMnPJ2f6GPyYDLnVXdFmFp9dFtgQHKQ2on5iV2eCtPHnb9NeDDb1bigeMQd9DTG",
  "key12": "HeyyJWKfjkHDynuzqWaZWptcEQNMAwAoUJ1zFovNzKV3y5zja5Dkh9mYBgYbUuf27yxHxGPT46RKXmsnv2x8h8u",
  "key13": "55Ei45EYE2F64YzcMmcBPsK7JTt2HAmVA1UPggS7pQa5skHMYRVbLY49dVXrhrHevytFVZQPUBHuCQAdicavkF1e",
  "key14": "5MqmkV4YDuTSCpJ9ZdHfUNsfvAymgGbv6CkSc3958SMWkoCgufVYJVPNvbLk86mareJohWvfxnuPJfaLXShkgec7",
  "key15": "j7VaSuhEh2BrvNV5LDb2SNX9mZX46LA1L3rmmUFBArqPh4oDzEaiQqAy84E3oMbqZJfLdoLRLLybujaShEvnCh7",
  "key16": "5wDpMvunen6kTc8U7PJedcW8KhXXRw2AM6WAcPNtA4pvc3PPjPEP1h6PjmqGdmVtqvTRXCXw7zsb3WAmrpFCrzF5",
  "key17": "4SzCm83d1DYBidPdQ6knDsKpRgjjiRvi5fkGYKn33oCFkTj4XF9vu2XE3MeM3DxXtWmSAm485TUjBZQDF9bT5ExV",
  "key18": "67mEb177DYdPyj8rHthYoDvLuf3bXRfMeNeCz79g6WgHGKrMvQyLVf6eTAPxvmPTsD6x3ndJPyu6yLbsKZii3pS1",
  "key19": "2sKJgasGFdryJrqBrztegeoc7wLAUQmJViGCJ965hjCk7q9RJCpJTnbwKFmyvGsjJNdvmWxHEqR8P5ZPgxnGG2Xa",
  "key20": "2JUdCDu75X3d9PJE7w1cuni9wHKLA8ooqpfLLQAttcNP4LdNupfigmXrzhK5RMYrS4ADNBcDF1Tna3sKeSvas3m2",
  "key21": "5oyeT6Jcbe8C7BGPZX2hzW5k5NSfTYhhfih9LpkK7RZzV2eSfDZScpZpyML5MtBFy9ELLDGd7YdN5fNPCU3M1ZiB",
  "key22": "4YnmGBBDR5ATUQRaRY2jXxqA8kt5PBEyCZd5oQr7vxnTHHx9wspFPAxhVySq7GPjK6GfzeqHk7FW5SeTKDF3tKkZ",
  "key23": "3TDroSNBYvabrhQXbnboG4d13VBDtXZ9Uq7XvsxFpsqma2U3PATDRUwubD5dea7fHT8iGz35bAsVCwu21AD73KaD",
  "key24": "fLvNc3JhU8TAkWg7txRRVStGAtAY5gmAnGdKRqaguvahWYD6PJPZYQPbNmfsKC1kTUr8ewNaV5vH7zyg65jQEKf",
  "key25": "26Sqs9JQdmEHPfafzNHGzXJm9Daft66MDbQQBZQxjXSeNtzGHMAtvDMcukEzD884ZeqMgxtpA8xaWbqw3CiZjvAA",
  "key26": "55A3bHXr1dso1NG6nz44ohCgSNEu8AkqZoJoNk6NLg3Vn5SEdQUgTjMnfbXoDJuSsPoDJxtdLKezP41JZqjTB3Y5",
  "key27": "43ETMMCdkNmsN8ZMZDPMLwHJCUjkwRknwQ33LD67u5gwX2x3zibYwUFiH6q8VnuTmXDwvDYKdCCUCn4LCwZD267J",
  "key28": "4ZNSpMJ9ihFH5xcM1fujC4SnecpBTvoKTLBdHtEV2rUbJwcvNWD8czcPfknXthSXNSo7WR7e13AxDrJe6UEGGHLa",
  "key29": "3gQtT21WfYABzdj9yNvga3PyUENhcD5LyoMvMwXypCXMsJ6SMHK5XiYmF3hWKqSj1jbafKTx8dXXSLVtEswn7HLw",
  "key30": "uKz6kguRfGTZghTf4EE2oUpDbSBqtSyKdgqsoGJaq2nR75PVb5CjtDEQXVpiCvsrTTaLFYPjn5vJXjURn6FsmDy",
  "key31": "41GooP8nPzmY5ht7HygbZy1dY5sP5TGVxdZeR8nqaxidixeGHY3BPKSXCSN7RAsShdeh41A3LNtQ7xeqXqtnxBiU",
  "key32": "3LG26hq7tiNJtXHvJWMx36BX4DCX2sxFYiQhEMXsyET5g1TkzoMHCfX6ueGtgqEbxNZjDdcAakDtAiLjxZ5HFqAE",
  "key33": "2YFq2zWRrHEKGdYRbBDYihFnHfFBkfBhDd9ziKVBoLLnhr3iPQ8NTgyJs4YW1hhoRwUiwS4ZNY9W3NJipUqqV2Qo",
  "key34": "4uXHd9UjeFqNh7bNsL7z4ukTXA2RCywHAwtfq9LqN6nNLT8TbRpta4aoMpS2apPbPvvCPJ33eSPDdj6vf3GLkWVi",
  "key35": "KZj8MmitGmarsTWJup5X1k9nS665MA7grvYfhZxay75fRFVBi9vg47eMUkMyeGGDfPipKC3oScrvjmzH8kgU9Ty",
  "key36": "3hqx2MLEh8nbnQeViFaCPRdgXFkudRFube5utc1y8P4yWnkFj516hzx1ho8P5qxTrG2YxJgJkKyWewGxX21JRqMZ",
  "key37": "4G4TqANamKgvwXXU1MxyioqFsoddQ1UbSFVYyhFYyGZwuRptMhR1ZdRisn731XnFNsTW8rNb4fC2RvT73n2us2gK",
  "key38": "cM5JATb5gNn8tkmC15DGiuXNGM9crNd4ZwtknCF6aAmdYiUupQaELsD8NsfZ7aErPt7wj1f4JWr9EYeEakXoQxQ",
  "key39": "2KJYGd5KJQdBxw43jji4F6MtTDCJd5rJWE4bVWa6rmKfCswNAhLczRm1Z5vrZMZUJtWVxvhjry1iBFcjKUaSLwA",
  "key40": "4vEpFJj9zs4hGeroXwYcYGrA7xis2iygxkC3iGNvMQ3ja5t6B85BNNLwofSRT49Q4k75hRic3Uhd4R3rUAcXCEXa",
  "key41": "2D779gNvX16eQCKrqNor2t1ZDuDt7czZA9XLu6ekU329N9j4Ad8Ek2BuSqo4QFbKzy2VVWVnTxGiEmEqP2NDUZrg",
  "key42": "3Ec2dwSCdPXHuhToGmeCrJozUXXEG6iFQiPmxV4WgiutLhbeYZSfuxHSUbXYLNpU85FLatakWp65hdeCR2p9Ej5P"
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
