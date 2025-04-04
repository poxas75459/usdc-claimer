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
    "4LRGLQYhwcBv89qqHSb9a6cTuMH7E11EHeNwQ5TySEsZMfd75ZqXv5ufe3iEgbDfU31GzxxHuGjiwsneD1tLSrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qev4nAWcqA6o8QdxpC8sYt3kzWmB63wPdw26atDCiPLygU3XZy8PwSqzvPcgFshwtKdT6WN2pEuvmxafmEzfxr",
  "key1": "dzkwdVQSUL9ZcVF3TPSVsdki9Q9Wr2TZcMVZxnqfuJus9CSiXHisoBcaRRmexw76PevM88ReiEAX8b88fESspnK",
  "key2": "5ZNPJbZukTahRA1Q8Z4vwksABD4uN2U49bezMy5ZUW8b6WWv2JDaDTjmXpxksmL9UttGCKfCqXsijuHbFFqtE2xU",
  "key3": "4BrA7WsQXGSr3vgZjA4y4NMXxL4xSsypZY9TaVbVsybjvM6f3TJS4VzvjeffK8SJqJZw5QVQyKpgpCJD52Nj2XRj",
  "key4": "ei2G4PebiRNDacH6U2QMsV4wsnysRZj1B8CtzTPLDdwjfcRgwVtYvFRgeMM1VUtmwRpFEUyGo5vxmL8Zu1BJ7Qx",
  "key5": "Qv5wHrSu13zPzxVRKpWiJnJm2E8JEsRPw2DhCfVEVUMtozVSzuvaeCFzSpekW7XPpps1v1TsfbkdWYs4ftN75Wo",
  "key6": "5ukzWjdGyB5mGuvPrNebbvTvsvuDLvBJP5E1sdmNX2mqxxxVfQ7LLisok7sW8ggFrEqoW4FxNNk9UzLvePecUrxJ",
  "key7": "2rqnwcwBdEvrYpDS8BUM4zkJRPHQptGg2fPWENjn713cwevnMevopPXuraeMdTK8oY3McgMMzPg11q3MYQUbnrcQ",
  "key8": "48JeGvoUbbwVSKLHHPWK6S84Nuts7GKkr2yVXSbjSm3QrPBk6s2TWyBCdjqujSZMyN9enFChSMqUNU5xY58wbjAE",
  "key9": "5pb1dWxT1XsJiubUiLv6jWUkKBWLKRTFLZFYerSxzsxVmLfHEvSrYWrmeTbj92eidxWMPEm4jnTZzujrvr9ZsqtV",
  "key10": "65Ru2vD9YPWFMm1SUf8zWwXWQHk2TiQWrKGxMhjE9zZKB4vjom9XMgX4pD4KNmZFt4eGPEjP4n6hpd8dc2ui726n",
  "key11": "4qdF9qwytU5ddnp7oA9yAUEG3zHw5RqGtyhbaXQ6a3EuMXFgMJHGXeGpMe4uFc9PVGJ18M5kpqzfGtYoLTyXYumD",
  "key12": "PErmh8H4vdSFwBJZz7tcN7QwWTmLCgaSZJwLny9P3awDGsYDdURmVjtBfzEqe2q4snDpcQNWzThva6A4daw8znQ",
  "key13": "5XFztky6E5NxUUTrAhPKWASzgAFyq59ggtCPAXd33jzQfg7aQUDjeEpFjFAHkpfkFDf1j72teXhDpuf31U33WBar",
  "key14": "3Mu2wLewsCr1jq2P6okQusiSGNC45cszHv29SE5zPmMRWE2r4phXqqeXbsj5RPwL3Z4dGQ1dQ2oC9w4kCQQvaYJZ",
  "key15": "2E2FrtXLCddiYdUYb23NKnipSghTuaCiEifKNCM7NDrs1CvGug1jk3ueqdvgDSi7xmZ8UAPmc4EQJPjUt7HRushh",
  "key16": "pbWSLqNaEvp2NpJJr9YGqVAkHBUHr7d5bkRL4xrNDgJGxmcjcj6nTHLWdQJTqgVTKN59yC3qVyAnQ3ajeKzsxZ8",
  "key17": "HCXFU62ffDn9hYu5unHaVCL45UYkiWQme8BfyuMaf3hhfZr1qWdkiUS6NpBY6d2D4a2UExupMKawNiN2FABuBe1",
  "key18": "2Xz1fzPfr1rNjgMmvAVD1cdtHwyydsmhDsW7F2E6SmU4d9BjazoAavgFe11CrtuufRQx8nGJKyHCiLB7US5jfqmz",
  "key19": "uVSMXYdE3RWRsojteiNCTz1JscNKgHybmNEhPpffSbSPrvcnVvMztXobFif1fY9AARFkqpWxaZEMkVwoxPXQ93Z",
  "key20": "2u6WguQG2v55Qvj91FBfS8FQN7QHbBzmGpXNaNBadLQomLjU7dxA2j2kYzGmhuAJ2GU91vCXwQrmGhV4vpDGk4Jg",
  "key21": "vipAXq9YMnSPQVuFpAkVd2HS5WyQbjJ1jUxqgmK8NA4KHcHU2NNUeS6VvUphhnbULZFCpt27m7Kh1q2uz3mLYkp",
  "key22": "5d257hUGLZTaPedquuzBzdgsGs1eYnR6y5Gqoik7v5i2sb2wBea9Zja6teDhGcJRcLd3ycPafRgR4uRYNRsZ2T6b",
  "key23": "5My9YGztyqGCnYUsqvxXd5sFMTsvQVbxtv2scq93Nx5FHzSMrp2yxSZrj3nf3EirN5a187rMDhTUTQ2wpN7nhMDR",
  "key24": "61EZ2d9MMCrEc5NpfEvjfxWokaoG3wf739i12efM6Zrou23gNt1VHSA6qepqDNMkk3DuerSH4WmxeLUGcTAKnVSL",
  "key25": "gJG6AwDVgixcZ47dxGzAFPRAqZURd5qiAogF1dmzj4dAKBVZTCiiFLtfbAbaP8YTqoyNAUKtFpuggiDYAewSoyW",
  "key26": "3dzzErBGxrKciTtHFwZzGG3dQ9B7rZUttAxyCmJoFinMQ3ZKNeUsUyzan81JbfWBhkywKC5qfN2QsTDQwbTmEsAX",
  "key27": "7qTa4Zw5uqCCDj6rXpTSoyboPQxdWi91vA55DUJ4HGCH1XgGXUeoE2W1bM6i5JMwJeJcg9jeFWSEsP54baznenz",
  "key28": "2pottuYBupx5rudA2p6QfeF3MifdfYkAHENMD1pbxRQR49NfyiYaZZY3Vp9yFav14u2okRHzPrSQcwSzGzkXRrjE",
  "key29": "4u3KFWeQMbBVhJkawysfnfq52mD42Vfha8DXMDUgqYpRU5Aaa9x9bKtxztYGgT8uDY5tdpJEB4HiThEJSNmynkyT",
  "key30": "4kD3BtFSpR3iJot8FqLgsDf5afQ2YbZ7XwBYnENXzMKbHpNTWuiszLJPSzkjxTZxbXToXLDtBKcQYLvS8RRKiJ1y",
  "key31": "2s4wq4pLAi3i1daPogPD38KjMJZXm2E9k26shcchsMDDF2bpA3nq3BWqBghYM3LehV4o9NxvNztxGSC67kntB6p1",
  "key32": "3ZXntsFzbLem1noX1rz77UQYPAR7yqcJM7HUpbC6mmBgHZhe1p3UfHMznQr3AKq4GeTccrqxkNdic6JmM8FhXzuJ",
  "key33": "4wEaNQVFcsWMMcXQ95K2QmGMtASa1ZBDSWkAD17tgrAZPTJC4UXq2B4mRCM5JJFbJJu3W7BLMXG8vhE4xJEset3e",
  "key34": "5LeKTfCftEqJmhTpwWtUk63Ltz3y92XaeFJFXaap7STEhGzYKsjeVkGkkDYzV1vUmQLGQh54fz3twMonjZX3pwLt",
  "key35": "29u9gCZcZ6Pf5rxR4pdBC2Npf53cWaD5A83oxUg6r8GYGdPuKh2VLoLgPjgxsDRQ7y2eWCEb8vVqR3XrGaqNqaJG",
  "key36": "4o5LMMMrW8aW513weYcSfirZLrDsDEzJ1vYeKU86FnqQKjBmBDFxuqcFkndgn8xZAo9HVXJasCFZ51Bifa8kSmkr",
  "key37": "4RqTUq45Rf77bYSq77W34R42u4D1w1jJTUhHNHhc2TSzzwosgkMDpwmW5tMmYLGMXZT7rrkQkKPnGjGcfWTwihod",
  "key38": "n75nDN8CEYSeP6YgTeh1DVjEFWHAK5oJaExgyDS5MKcE3SrH34VKwRGpfARne516vupXTETPTwNXuCA7ZHkCwds",
  "key39": "4xZ4z2G29Qu9NtsQFzyUrg3PrMWC2MSNFYy5GhtYMPCWhyT2QrQtohURPGBEke7sNq6qsJnbtsVYsQStMTi7PTsW",
  "key40": "36zFjb3dkCi7yRGTDiRBrt2Vk226pH6swP24ioaZCpb8Renqj9eVWvwFaVnWjfU3uQZYZpqf6oqKmVyNjdiCAdvt"
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
