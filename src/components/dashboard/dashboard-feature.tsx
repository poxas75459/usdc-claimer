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
    "Hythu8VXNzH4iwY1aMshVrULohxzytSC9dpar8mCnDTMm4k1WZrCPitViAMpJR7v8nCarvXskoBMc4oyjndtW47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mgw6CgfQ9yCWfZNbujySooVSdPKamQ3CGVnAtV9vvkgd9KRZLaGvbnT3PHwwJsBa9zbrXAFrxrrp4rNypmhP7SQ",
  "key1": "4yQLTvfkBejtygZQjKLrzzHeqp47QfewqGrWbUh5jy829wQVpPgcHe1HB8TidvDeM4T9q2jCuy7Bhdt6aRdDcrYZ",
  "key2": "xCTzeMeBMjbQphoitkyswX92WRbvppJRZNsWPawn1umA3H73DtDQr5UfBXeNsid2jCXiMV3BSP9jLdJocGXqpWE",
  "key3": "4JbnjhAmVM55P2t8AggTQqszVP24oF69ELU5TBMEuJ3xKHwSFjkUWu1yiiXHGhEye8QzEG6x9zNCa5YeYBzYqpxv",
  "key4": "225834S29nXCAuDQQTdPRu615gTSXvfkmyxoxBdot3swXaTeyfq1wpivYHVJgkkWA7vDtudX6miyxe2w3gbsN9YV",
  "key5": "3So8CBEvwByJo2REMurdGMk26V9CZeHkDNrCGt8doz5fEyEezEPdJ5K2t548bGPnKDyRboxM9HJdWszSz5XHaSAW",
  "key6": "3LwArBnNT7rSvgzQS5wTVZgzJT5cPShSCEJyqCs2o3tqXVEsZeH8tnMP3A5bi6ETnbqxrA43Tn8HA6QpLMZsx5Yw",
  "key7": "2zjWpQ418UCPTH1q5TzMwgyQwLmXgdZaRaF733pmi9Y7ykNtycHVGSiWwWVTgP92hnkqSPVyRWq6EaUwrWvCgxGn",
  "key8": "6vxGrbURgcneKZbcMjFg7UguE4Q9JBPsAXbadrBZ4kddro9oxnuWALajGykGbpBih15YL9dAi6TWKdwAEdsRYmz",
  "key9": "5mMLL6CxMcLsDMcZctbrJCZEAzLuLjXKTsnUhZT4Qn8rp74P276Dy6X8wSMiteHcqukYasptunRQSrQt8GNVUK9w",
  "key10": "2HwyDshQEzkwLeJtt2Z65Jq7djevfZj8YjG1UahBY3Wpwfg1Mvy3DhavKZMMTagPGDFLzBwf2Q61GJDeNriCaMKJ",
  "key11": "A1X8pP3wzNTsnmCLzPoLiuWi6imUWBoqFpaAbgEusFKnGPSSvAWVfL9h9pfCbtiVxBdWYSVP7qQ9SpaZwna7LCe",
  "key12": "3cEjtTAeJ1WevwktSr5ag3eDJZdtwCsD72FGcUhCiJ1W6pfPDgHe9YyrpPjKGVxNib4Xs5ZjWKhYoA8GVe2PEWUQ",
  "key13": "61LEvSNivLKTATbJ3RFiYaXFgS36i2VRrQybNrgSBfVkFfdek6s7q1csazWc8fX1NHQYDwxmNQQSE4XarzGN2RVy",
  "key14": "5mntEe2P2L7GPHiD1YhPCJNgvKxkCTMtx9tbXdD6icqCGZYFrthU7BhG1cp1iXc2cXQRd6n6jCVFzstdK9nXxYz4",
  "key15": "32zXktTnPHrWXPQjFAtukznjKicM4mrfYC1yBvEJfmktCRY325tiwM8AFk1zkEfbFpn84YUgeaTLjmWgtCSUWUQp",
  "key16": "4Xyf8z2kYDBxFe3n6UAaaDarZda88YzQK2kpiADKjLxTxkT5JY1mkjLwtT3RwoZbZFCpJ2U2LnwprfKBQzR29ZwU",
  "key17": "2Usa1timmvX5dd8xzaUzmFF7YoRq8e5beXr7jykvSsLi5cPNvtwk2A8nR37VWN6ApgembP657BT9qufRHJCEgnRz",
  "key18": "Sfxire3h9sfDi5CX6ueZ3ZGp88MAxWt2FvGeyWfJKCdjxwXaazndnFwNWsZNc8WSbxtsSJe7raFE5V8qU1gJaEp",
  "key19": "2LpveouJQFiTUBZm4DSYLUpqyG1MX57ouNYMXJhgYY4ehKk2VJX64oao7apB1GtACQndUHSt4SBQXtPDN3V4jqxd",
  "key20": "1xouMBT3TMHave39We3UnwxhkkoQeRe3Hj5FTES3ch7KM4X7MLU2gutQLsckBatzTpoxG3hPkEBsQwQ4xqWhLWw",
  "key21": "4jeayX52LCYSsCYQ4x8wWDCiGJvqvQfV2scS8S3zS7e38cycrKWtWSVesMLX4nE5kpg1Fy1shpbz9G1xoBxYj39z",
  "key22": "2UACoUnLQYTVzk8Agt3w1P4Br6JVojkGxLZfgvzU5MWMsGUP1MoPday6eoiEFfL6fwKTnAJp7VbcwyajQfx65EAp",
  "key23": "4DyUaNHaoAYmtfvNMAatFVXWK6MrwV4v3PZAouj8CBMqujgvuN2foLMfxAtjEShGMHPwYXuicveRmCH97mfw46t4",
  "key24": "2fkVH11dNdtxJuvT44Amr9A9eksWm74Laa4WFLHWdudi9i6JqTEWrMWzbZUFbkfifnwRWzEeo7VE9smYvGB3XnZX",
  "key25": "4McNvq7YrdHMqdKhJWeHvkq7Egcsvd6Pj59jgzXVczcWYN57vNh28z2HVcJi2cutF5nwvmVqSZxXuAFqK8awhA52",
  "key26": "4cXvmdNvVMeohbNxN4d8nuCNrHbynaTkBAi9LiEJz4FFEDbRnwYp7cvjGmHUSrEvGj7TmXvocRsTksZ9pPv9s2VT",
  "key27": "abiL4ua694EMEisLJLmjiD5tnVVE734Ucw4su7oguoenDFVBB6hrtqg8MBRnmaWp8eRdUvtq9mLxnLqFD5yAfcj",
  "key28": "2qZyf52mCKYPtst75RosvkEG8Qx1XzeRMjHvxWhHcLuX96Tw459mfvtGn83KSKJWdxEvnzhWoZMKg8nK9BFEhWzZ",
  "key29": "6qSuY7ggseKYxm2rU9Mfg7HGQHCMyqpuVz46RmRdGGEZt3m4Y3gTZSc4dCFLqGTH8zP8aJgmzZB3bFQmAuPYm62",
  "key30": "5j5bvUjr2RsonTNVEzPWQQvWSPM7Aye48rGnMy9FKusUZf6kTgCuyWSkWeuTRhiPEY2Ew4qg73BXK2kiknTcYo8y",
  "key31": "3WmmPmBUVQo9EpC2fnTCu2u8BiZT9DxbSGB4A2v6vohqysW4rBo446cQooPV5Z7DuKSxpM8qc6itNP1Up8URguLZ",
  "key32": "5BtaR2WMQqBHRB3SxpitCGxJT3GTLhRTCR95Zt6qRSEbk42mQqKyx6EFRRbd15BYT4uCisthz1YcQgnStTe7vKwu",
  "key33": "5jsfvPveqmUgNgZHR7wA6LioiWe7bAVsCLJE3aLV4d5Ae8y2CPW6cU8QR6jJFUyyyWCAKwXgXohyV8RE2i24aYeJ",
  "key34": "4XEtE4AunzWDV3C9aiyfP12z1YG58bwhnC1tn1GjeygGRpunsWf9XJNzGT4mAgnYtcChAeYZnLamBbRaGhLQSzYC",
  "key35": "KHiVQYTvPDZnmTmwQ8FNqy3FFe7WEGNGiyCwd22WYsZQ3dDGfMsK5vKg1pN1s3jDdRSA8qwnGhyrVZE4GaePMNv",
  "key36": "4qZNijUgUcYciKpz9BcYYbggEPb5T1BqnGC5yPgLFWGmTX2J3BKc48gQBEKWmz8zC92aBi3rbGw32vKY7RhDSzEW",
  "key37": "ukBeXrK4jCcZuoDPhUd893GaUcGrut23sqqN8X2TBYbRdedb2erNUJEbGbPoX3BBzRx3fMK9116ECv8DHw2PTSr",
  "key38": "5ibPnDgxdnNJivjDyP3tSwM4Wk1k7ZPvJgE6tJyudJX2U3FKs3ejzxMAqqoNW6SNKnpfoQAxk2MqWrfFY4LB2Ggd",
  "key39": "4XdmEAc1xGJ5yukQqnPHjoNVey18mcbN1TijY5tjrbRa2S8KdKSGLBTCtvm3QShJFQyDhoFbp9UoohmTRRgPBqum"
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
