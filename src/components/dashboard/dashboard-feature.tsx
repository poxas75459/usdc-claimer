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
    "21VuXxhvXcdVKCo2f4rMQrnta2yaxZy6TshaLM6uQAqxk9vb9NLAG5B3aKPz2xTbkPbcEGQ5EiYnpYcmRyvnDnsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cyWidyMp9tDzVaSK7YVzEeyAXw81F9CD3GqASLLTAMWD5Sv7HehgFfPKdtYjUAPwER2hgLusCembs8C4zVRz1qJ",
  "key1": "498wyPvqGGjaYbKEy7JbkCRbQy65hqu8K7Ww3BhetLvfjvmTCGbAK2XP99skE6SXB8MY53XjcFDXYM9V3YB4eZbd",
  "key2": "4VnH7784HofUFej3gFguwToi5cazcu69BGujvviHr5mnq1wA8inuDYnjeK7TY2y3VJysdbTroVjkoYxv4mefM9iR",
  "key3": "2UF7Nz35jpBuHFGrfwzYtvwBPcC6CVmFYxjkHQQimg7irrbPLbnDGuUVbifmkCmQ4QFihJuHmafd2Q2ccc3uBW1t",
  "key4": "FMwRUzinAwWJnKxBiKRsiASP1nt4UMo6K6k8jetovZWmKWf9r2AYz6tFerEDdt4tLkRmRY6gVCTixSRe4uxr46D",
  "key5": "34NVZzZgrDy162nZ7MPnVGyrjaYY1gAfivtBsmsDkBqt8fzMfkMTRpw51WMY3LqY1rXkiApqY28LjBmr18x6p9Sg",
  "key6": "4ZtR48p8Vvd2JuwQRFjwu7pG5havVsM4Mtju2Wfiwbk3VHAzfbSbQMFvy3pwW89Q1NedwLJSbityQ7GYfw6tBBhV",
  "key7": "5iryvKuYXtXdQLhn3QfVz7fYSbiGMz1JnsMbEau2ofrb9BBBbRetLGjjAFmbXKnq59u2PPCsFRhXGL2mXfswQQLP",
  "key8": "5bC6qW6HseEAq1wQMaQrCLW8n9Pz4WGaAdUyDohLwVdtoE7mU6JfXGcTdsBHEmJEhzzhV8piLU8Km2YpGD53uTba",
  "key9": "tHX842D4iEsw6UGCtWhaUaYECaZJmpc9RqHcu3bcBoTtMUiuuq9EqcYqzaty3a1K3r4WAVWJear6i3WMVp3t6G2",
  "key10": "1yM5eybnKff4kjfnKVuN9KcmR5vxBTdAjkUXPMGTnbNYoyPGAgmqfhbaRnPob3BXnpVMmrVAf3KYVRXsBYDC1Wq",
  "key11": "2FkbG4kWruK4a5xXh1e7m3KLHxq1FqiXEB5ryhqhKwb9K5w5H8gZoKmjxP9TU5m93sTreJ8CF1Hacz1rJbb61EyP",
  "key12": "4vbnsDCGG85MpgxhwWXhFcjWiPNX6K7xc7ppHzYsCuRB8k2Uce4cYJaoZcjuhg5nis2Z62bwj3YrnrXbjmvEMqXR",
  "key13": "bGrFSUQVsoRMH7HWut7ribg5wnmMZDQZnGBbHA37eb8joh5YzcXQgK3nYJJTqDoxwGwXVcoRRHP4faLwMis2kGk",
  "key14": "2BNVUvQbvskxnbtTQgiaHWYh2JUeFFprYLVBxQKGeB7Gcc5DRJcKzm7xQVBEy1a4ckktt37ADHHvYrWDXo2U2Bu9",
  "key15": "KtbWCNerzzPgmufkTwDJFRufXse1TNwAzKWmkAEeFQPre7XxojVVFcU8YRHmTdf5R5GhA5N8X6usAzUjcex5zRb",
  "key16": "21kpGECwzxqupPdHLJqKRK3fxBTErDdZntTk4j3b4rnTUzHm4hjrbHH4wYEB6daNEBFeG861zcXAHx4j9BRaQfcw",
  "key17": "36JcnVX2D2ozqYw8YUoBtymu4wiwKpyjUjxaTGyCxj3MHS4t9mHfnyaYDtygL56itrzpxztfBz4iUMWfvNcfZPN9",
  "key18": "5KSnf6aofmUay19WHGtDDbPMRRCcYDD9hUuf14b89eMph31gqCP6PeAoJAs4yuPCVUuKNmqiUmLtFFaiAasJJDRh",
  "key19": "GXo8yXXF7LyhUmdvoLr4caHbpqGArPerY57L3DyFGfxBKQTqXpTejXtXsKHUgtCGMei7VUkPEprNaRFG3N5Scfh",
  "key20": "58vYNwdpKbZu3cSTJ1PfLkm33iLKDaYjaFMw6YQZMmX13c7CAeDhYWLAF8ahBfunqEM4XSeMTV5Se127GBNDVN6P",
  "key21": "yUUwKYepgsRdZvmumvAEauLQ5kNZYwD4L9U1hWrEsCdUzKb2E2HtMeDtdg9cXcBE9uZVLK5hMsUfZtdornnDEYt",
  "key22": "2rgPYy98XQ7mp4211G8jkg8K9yzCiromTbLTcGatscxqku9wpS9tz8yfGDJEDRaM9TRsxgVGLpYPRMNmoDfd6iGm",
  "key23": "4BtvFPCivmuMaeFgYYP7jM6CsJMtkkoP2PMDWQ67F5q2g3JW4WghvnfYzMqC6gDMocZw9WGqcbSjL4bVkMwVSFoy",
  "key24": "3Pqfr5TG7eVPY3dV4ucdoysXA7rrSMRrRJVQeNZ8Dnuket8aV76tGumt9tHZayM1tpTeywznirUFTsH6SiXiVkLY",
  "key25": "ZzRbAwEuRtY7vYSARxtwY88AoxhuUFVVyVpvUY1DLr93RNMYeiRVyp7552GXWk3ba8HY928BMwRietkaiut5ccF",
  "key26": "5pnK8tSbD7AyYMm6mYaayacW6B9eNZTEdd36ywbCgsvnsFRAo7iGqamxSwekkeasfnZHYtR4BZPcaNZLNC9FQQr3",
  "key27": "2sksBmxyFZfPZ8a7mDdUmirDXXgkQ9m2Ttfhc2H4dXCVVoHc2rxsFP4utbArbu8AS1Xp9Zor3n6a87vKJHK8isKm",
  "key28": "42KAYW1axLgWemVH2FYGCWGVeBy9g7sz5aCXLJsa5ieeRoR9FdcQk1LeiA7wy3X31Adk5LCGSXtfguBhsSUU2PVa",
  "key29": "43PURCnkScuGiaot4tdwPwTvhuxzHneAjqyGMPVTHCeKGRc3Nr44iissThuZs5pVu5Eh5WK6rKKDeHXTkLTAydDs",
  "key30": "5zBmqhscFh9zeWcDiGZstrpy5Fv9SFo2VJo3Ub7ytfoXW28io8HoWnZ9FgB6J1iYgpRKVspcR6S9q9RyXm7RGRyq",
  "key31": "2Tc8CoaHVbbcK1dcBW9pNaWEvymywLPdbHfwFDsRCRQ3EgUweTGrcwAVo52KZEmzu8oNv2ut9CT9KJU7hy92tNPa",
  "key32": "5juoQkmqbvrx3EnVXCsFuxz651qo2cWBmpgqJ4rPWJZGJ8XK5qDmtc4vnu31Rra2YX2hmF2WKRiBA3HJdfkR4xMb",
  "key33": "WKU8jwpLDifJJh7EyWVAQ9wQvfyHewNRVHGk4NW1MUrGPMn9uS1Uqh1yLCwaLYWdXDudw213rzhjNW6bmHGLQBQ",
  "key34": "5DSLnz6UipT8yUJ6HAnhDzY4QBrV518qxpinMxjE4WyuDKvLU1q565F2bUe5SsqEDTdvf7G5cZeZEiX11rbk5AVp",
  "key35": "26dTHGGtwGT72Dk8Xo78Qz2fkUuWkFAYYkSss5o9xmCXwsTYFN4JnLoDo3PnhyJVpjjVP3NC2eWpHT8RpPPSnZJJ"
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
