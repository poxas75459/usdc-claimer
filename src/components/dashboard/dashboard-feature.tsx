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
    "2bWAhiYSifdosugyHpmm8xKQ2FXjRbGG3mp5V8zu7qm3AEu5QDs6BpBpgdAouL4Upu2q2P43ZjLR6Ja1z5uMpkHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EYXJmGYK4JK4HQghHUgRHxKvQmVjqEDAqVxmu1KNY4Mw3BvnwDMBzB8bASkxbmBvh1ArbX8vjEmP3UKZUw8LNqM",
  "key1": "43BELu728Q4sWj1ELMv45hhToz8G6qkZdLJPtHo6pMH7M5TiDXoGtD6PPUGHbHxB8xuFH9fYHzr1JbY5DyFSemdH",
  "key2": "3DBh4uyYprXwb1dhy4DAfctfCS2XphSEg82LoWiyTsKGDqnFRhmWK5GXGT2X5xphxMUfx6iQX5MYhXfPpFVWFVNG",
  "key3": "3emW4VTtTZgdWwJo5CBmdxhZ47rw1nfDT4kxrdsAU476TaJ65rvuXUtYM7tHBpYH3YAvKjEwrEni3rmgbovGn6fy",
  "key4": "4SU1nPgkGoakr3p3GBgCdCC6DKtcHMzdMF3FdktD2tN7y3KbmhaFmQEFFwBLbvoTexFT3xFBQbofH9mdGyuDEpeg",
  "key5": "3K9X13eaR9ar5Bpb9w8Xv5oaEkt8iXPjGd4NBvDh7DtanFAS3c8ATwGXaQRjCvK1gWTcTSNjUQ8PkCF5qVvMrG7X",
  "key6": "3SohmXrSZCP9MJB53Y1U6SKEGY4xMPQdk69WGkPRVPzTminjdjvQ7cnoSZfiZB9wDpqgQeYSdBywqXk9kvC6U4JF",
  "key7": "2GsokRrefcBVsXmxpdVSZooT2heDRPEMqyKo7YmAvWC5M9kW8Tf9YAcuPSPKaFh3xqem9moPdSea7eeQCAA67zHi",
  "key8": "4vGh4TNfHeuCHEVAHmiNXB6JHwUvxb9tM5adsbWWqf6nBVq64hHeopyUr16Xymzwj1ibjv149KzqBqfxi6C7PM1V",
  "key9": "36pyWQuRmKbuYLwnyrcrBcHtHV9GvFZ9dyrQWZi8Aova8DJ5UWeq3Wr7wTf9M1xSQDjQZWo46c1i2sb66LH777Ff",
  "key10": "2ztTapSPz1ZWvHnYKvTpopnoXX4Ty449S3QmqMM5odEWSTUwsDCJVVAb3zvLL7cC2P6h6K6V1zabufpW6WoU5o6P",
  "key11": "2n6KR5smpbFx2AJ1Dpe8RghNjXXkugXsNEqU5oznygzUc1nanNNQcmdEzyNUvHbyWyQTMWfv99mduvfCoibMJeiG",
  "key12": "22NYSENmzSPbDBSzwE4P2UidmoLxFdqSz9SqscJYFun18ExBLZLyrCpYhapJ8ppc43iX5THGhNP8GxYvX8hVbPd1",
  "key13": "4aNCM5aYzr5J8kgSpSJr5DdKjfBWUqDMCbmZzPszY67aXjXTRuFoFeHP4ZiyYDPZu2YzdTimMns628pgWWvqE7aa",
  "key14": "5HqxWBbYgR6r7gSWuui1HDyHQ9oHYq5HaGFkuvUVyv7U9d7T9Wf2C2sqRWUP9RzfK2Lw2e28AWZWurfeuXkeRZDW",
  "key15": "Rc3fgyojbiebcXCuS6mrK4cDjcPGnpxgxJXgq7gXfenzBMomMn36vwmiLEVjwzMZAH3QG9HPeumeEn4E32N1fpQ",
  "key16": "5LKZooW1aJ1U6Xu3V72kk6c92Qbk1RfBnkjJCchk6qDHV9YtkdmDJ9SfxDDw6kM2sfx9przNqpBdQzLvKskDEXhV",
  "key17": "3pb7xyucgth3LkpqYDmWdACi51pwcUiyLzpnNNicxU9cj5k5wYYXGdTRtx4Vs6993ppPtA3SgoGhjSaiWMgiQGbH",
  "key18": "4KjTAYdUEp7w1CymaWm5DBLzLGFgTLAXH3zdACjqKE9GC2dcFL7WnHMBm5KTUYZzCevQspQuWE9RvzirgGKzQnJq",
  "key19": "UP2o3fbBNGRLkZ58Cb4boDSDpodsD4iMAiGDFA6a33qt3WEcXYz8NLuGLrQ5XAiZLAz66TzhcNMwFUMMpFLeoPG",
  "key20": "21Jojyk9mUzNLcqtiMLvtNhQLWZXqHv2tSSpPcgi9T7FNrBKAxySLRyKseseQkS9t8JDbErCGzYpoMY68McR4Zyp",
  "key21": "3H1tCmafokkH7rZsqwcd6AUm7rD3cHiT9SGSweYPJxqgDMZVPCZoPQzqq4kSTKdr3rXDRvpoYoCthiqrwvzrhcDc",
  "key22": "Je3pibKpJhahZ3kfPA7cHZPSgqKoVDLzQV7yXmiF7CbtonHSiurb6Q5Ry1CfqHHgVZpwQQZDcvfbj8esyQqJCJ1",
  "key23": "2mSWp6tq7ZZJ9uzyWAcrhTUbRq332UBQngs4RnJEhN99mWc2jg49kQQa4jkQQPWB464ktVTeATov2JK9Kj7g2VAc",
  "key24": "2ee6nsPEi4NPkyEUKLBKXxtsSd8YTxMt9gsfjoAtcFrEQN51kXbWDNzqRiNuZg6S5NR4KguH24Q1XnJccndodTZ6",
  "key25": "42mzmDWZ8MRLzEa6E3oGpqXLPU4ZtH5MbdPnX5s4BEbHfwpuDsGDUDQbjNzfLEKxyHQHWCcrA6E28ydP5dk4RYAo",
  "key26": "4kTQNUz1StUTzSyYca4iXeexUa7Ti8zwJtZ2mo8pU7uk6eeo59bDexadf4PNjh9SVqgxFe8PXrUf7yUbSntNgwFj",
  "key27": "uzAiAmiDhyNse4Tyoe2VvZuxhfWk7vZETjfjSYm8cfYTwkG3UErp7Fh8fguphEeJJiUh34VWhcPVRdRjdETcKHz",
  "key28": "3RnjKv9C52PdNqjfNWL5EQqjKWSFQgHR328RU4tVyTc4nJGTYsYDKZump7XF5piBm4qFZmASFy6cD2ohShPH7uhv",
  "key29": "44Z6Sbis96ELkdGa5JPyHNwiwVK9xvxEE61o5stzZcpz6KViK1oVMz5wfgPWYf1MVeLAxhSRhDBBhtuzU2fgUSHC",
  "key30": "2QegA7VxSFixPvWdnzYt3TMG1dLbwR9PKHMNkVBdL2VPv2bDtWAzyEMWAqzZkBbn6dp8gdPb5vfxMyDRCUeJhJ7W",
  "key31": "5EFwhaFXsKEgZ6i24z584iYvk56YGfS5i7ZNfeYkFJCY46mqP159EduG6Zi2bKHvZeohYVbF3Bn4U8sCgrwzfeWU",
  "key32": "4KzQqecyMUvddxL3QCrFJU8f8nt9vfHWDcyZdRmFPfTt7sSennZt7fy1aEj1YLSB2DQh9FSfXaHtsG8k2L3jhvSM",
  "key33": "ftzRk2DvgGTdV8fsB8Sn5y1PmXpzha6ur8gv3uAnXVMtJ8b3pXXVa2fFDJahhHPPx7eNip5tFzrHKt7V97UZEW3",
  "key34": "46iJnrgPNfjAAbi1CvZ1v4id8oDxMfR4mxW9XZ6apZnDLVTiMYzmCcBCfcmWbPFMcFWJkzQpi3AUqXeDuzU8r9Ju",
  "key35": "3tuzKbebY5fAMvSigaFip5xmGRQkkTfXULC114r1xihjeMhoEat3CGE71VsstboU6LUaqwwDWt6knMTAgqLKb1qT",
  "key36": "2A4WUkBbAs9qbRHTr8MxYYWWqkQkTFvae64Y1XDQP92dMh2wgafJAtbqg135LLF6RJPvaZDDEMrRFSuz4eGzS2Rm",
  "key37": "MAc9bQz5bQnTWzkv8yKM57BV6hqfMQ7QtgiGjVLJDJntNwDzgEqhyUmPC2VXMWNNDUiKf5T6bhcFXbmq4Vx1U3J",
  "key38": "fFShZd3chRXuHgaB4W8MsG97uYdfsqhW2L3v67p3HstidxKoa4V7qrH7gbUpoF5Jv7eKBrskS1XTFPJEuZs14g1",
  "key39": "5c3oYewbvEAWtzPgUXoLMz7rX8AdjH3UhcymWHuHYgjbP91MsKGoNCRtY4bNsNE3eFe9ysaB5Msz5onv9vS1s9h1",
  "key40": "3wWBR54nugpkYv3NG3xrDhDWsqRymuaRuKPsJzEcUA9yJ5ngwJaVpP7UCweGGYfBH4zPo68LcjS9sVnpN3iThqzF",
  "key41": "5LY3ATvce9VFfEFJtEzr5ubpbf8tF53qUSbFTQ2obMPFpMtG7LmZkc1v1pMhsPasoeYiYQE6QHv6vvtwjyopuoiH",
  "key42": "2aZfC6XvmZr6Hi7AXQSpnTNPTN7DarSSzWZr3uvS9F8AC6VR2hXEaCUJekTVFwnvTNwZ8tgbHVDjebr3dhpYgjja",
  "key43": "66YVYCW97uDgXk1f88Vq4wdWjvB2saZjsw3ehFBoVwyGD129HLJeo2mFS5zUPEAXZ1y7N1NNMzib1YAJwMxGdFg",
  "key44": "3xziL5GMdGfoxR8HEL4vb42ugpZzZvjyzGbecU5p4KWDfyLW1tYexqHqFUkcpRKLYhxHk9tT5332JwHa76efCqVG",
  "key45": "2GYWdhGjMnKTj5JwjHy2j9fh77bRzJ7YZ2UBrMtMiUx2xaB1ccHdAyYrATm1eTpxUwXd4JCVSQZWexPikjuc1qiy",
  "key46": "24RaFLMZyQqyTTg8kHdUyXnMNu2oAuR7rNi7gRhdxKFhv1GzvLPhBq6ZJNjWDLaV1S4ShquiTDyrMuv1b7mkDrZy"
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
