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
    "KQtdM7AehQ97qywSn48SVGADrudNz4M5mmL6tWowBxsY99kW6vcST87pPA1ANHtUUQUjAi6UYKotEg1JUo8GLrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHtf59k1WKZ24n2zcBCzASqZHe16MuSzPmL3Xmh5imjkQqfQZf8GE4txfGX1NMFmBhGn6wX8Ky1GQ49Kpn7wKZj",
  "key1": "2r2neN562JxFn46Dn5Qrm5azGjz1Cp5y6GSsVZVnAGyyVPUBqgWtYHY61vHEoCP4CybCMbuwA5rDF876hwajLB7G",
  "key2": "TF6hjkdGLiDZPW6yd8Ysm8ugkE3BXjKNeQkr7YT7Ju9GVGLwCtP1G6jHtkwAE9aZxD3V6eGFh2H5b966KXwMAdC",
  "key3": "22CxYiubYGgtTTPMygQX1NWYTfTTnNnWRbcpke6bfzoLebDNBbRAPd1EQw7WivdsvAbQPTNSowawAdSpp5vYtzv4",
  "key4": "3aRtymmXTj1qe8Boa3YEXqxP542L7Rkedx3u91vpZM8A4TEk9YxyD2GRxoj6h9xDef841eARZV9irRXFsXR6Vypf",
  "key5": "2WmgkgZ69uQ3pk4MEfizVnuPb2FoEKaDVsvXbsHodu6gG8P7xrqgpcxCYEosyN5prAXs9ULjSWjHV8g1XJ7coXmk",
  "key6": "3zMy2XaAQgUi6VLutT5zSwPch2k6zVrVMEgn3ef6skwx2UfxCwtFJ2toe7zEveMXyzadr6Tehhm3mKXqYmvaAY1B",
  "key7": "58YYKS5MM2QBTSuFQ33v5xQLfvxiwJcLapsTLsewrE572KYDU3aXqakdW22AVP9HCJo7zSQ45ZDpnH7jSYPMTram",
  "key8": "2aL6cVLaihbq1j1ggPzQG1yMLQo2WK9n3NEcEKdrLu17T2cXSPfY9kAi8AKBN8p8ZicR744izEzgiNbnn4aMcu88",
  "key9": "3p4JZNtZHFv6gt2xKTiSf9FYbqJUAAidMnjBGqhTtkALyhqfboYc16QQbt4ovdP2kAk1smHFKKK3hycwfZV6Gsnb",
  "key10": "27jSsRt1bfkxToJeURRtJ1RuyMSFjZqa3qSjeBHVQdGWd4WtYFAPW4TPYX98vNsFYKNFH54DgMUwvvk5g3Cy8zpY",
  "key11": "5aQbWdjuk3ED4KsbqEhHyKhBZUhoQeUigPsZCVcQXdzaZR6JzWtPasGfEAj1zR7Gh4XEHARPA6KpsdiJRBmNTcHm",
  "key12": "3C9tTB39d9QW2a5xNEHNYLhFnHq7yYBcaEv8sY21pPKj8ViQ4nvzFWTKSVccUQqkD6QA1ckyfH3JRbwmGLgHb4Dt",
  "key13": "3DxTaqkKkVc8deHywrC2bU3q1e9EuquCcZoWNjK4wh4mqsFHqmLir62Xb6qCnPL5dXrnenmmhzMGp8oTSv9sEbYi",
  "key14": "1H6kDCtsvWNANHPQzfrh5x2S7aomBZ4jVdPQxZMd4pivWvKNyccLTaWX5wnfZ4cdSN1qsMmJ1RytFG3UuZx1iJ4",
  "key15": "yJnAetnmBm8GwpbsBE4uPVknVTQTJ7qu7jBUBVupgWNh18ASyQJsGhDYSWZ5ySGoMi3MsH9ADzriUvTbReo2LYd",
  "key16": "4CzrhqoYTLuBRF4RcEorVM6VhASiqYtTARJMcYrNGUuCPxuU92HoHBo8nkLLE3uHv9oNC6LFWKGFGyd4oh5zGNUd",
  "key17": "4oc3S2E9G58htVcWyfF7U9V3sANN2nFmWQiEyMdWw9jhzk8jMf4uww2u295odr4Zi4aUmotb4SyjBGv3rgSEPahf",
  "key18": "5PyZkFGymWJaWfj6tZ9zRmko8QH6rVmPLfAPNM1uMEWyuS6tMrwxZy4JonqHkbQbWWVLXgtJchE3twX4KNXmN4iA",
  "key19": "3nykJtNi7yTn3AaprnrxSnoX2vBaFPgUMopd7E2tXR2kmtAmPgZw4zdZGtDbgTNeHuammNtYABmfRc88SUNvydED",
  "key20": "4cTJMD5ox9jKKPVzWv81XPHNmyhutfLaY6Ao3uHjbMmf7TrisBzTu4mxfaaj68wr55nutVYSP2TVJ5M6s8EQxBah",
  "key21": "2m2VJLK7FvH5E1pHrD6d8tDt34MZNiSR7WGF1tFEf6TMuLBWN5n5wpgj2epgSGQXsitw56r4qgE4zgeGcwZm6B5n",
  "key22": "38qhzh3kfDCfbSXbcuQ7u1e1DxBqHf1rL4si6QYWRG1Cf6HnGeZLdeutAViqC73EMXw8XN4FuWyZ5BL2WeAgMnhd",
  "key23": "5TF6XjVzZZnGQxAAiFbCet5tkzpSbdzKSV2CHD1bSs3rfLoxcqfGsojS6RcrpSWM37WWU8fWT5coebyes8MY3r5R",
  "key24": "5EVyYQa9MVR6XGLkVtmUDFumZKFLvGqFKSm3QdAPKi1477Jfh4YfqtMXrQ7Wn2LJCyEqtJLnzn2osNveMzQEncYE",
  "key25": "5B9ezbLmvRsDWXCEPJDjZWjQSL5xvCBAdPkqtBQoj2ChrHoSwQH3ERM7kFgUxjCMDUCVFkDPZrqgbBXiRYSHLKg7",
  "key26": "2seKQKufg8S71wa6jy1M7Joktr6ou9zK9LTbuHJaDH524L2j5RvA7LskLDUD85vXJWrP6kJ6NcrJfgFVBreVu96N",
  "key27": "2pmX5wXGpGs4Lw1Lz1bFseEJe95jrThKjCM6LMvk8PnJ7MMotcgy9YgmvXSa858Aw2RHn99C6x2ftbfDansKUij3",
  "key28": "3bwguBKEB5kU9niwHvcZDJ4j71npNBCyuBe5dxehq293rh6TMjVUz1heZ3R1v9HSgkLkWTdeKBtstP5xEKgQPEDd",
  "key29": "3ZCULPJWLmaeziyBZroono8yzCTM8QQNgnVPSwW72oEQz5DTrEE3X6TFRALqSF9bmG8t4YYr9GuLR4FvUqexUbnD",
  "key30": "256gudjrh1RF7UeZ9Z1PvT5S7qKytvGzsfhVkTVvofQuk51ck2Dy1GubKJw1Svw11TdExS7dpwpKD5FA64mk8axm",
  "key31": "49G1TCrB9DPFUxm4sVxmciSs1rfQbCzzU57vAsN68en5m91Sg4a7T2rrVpewkhLqeqxYkF23vQHAsbSdwnxpRKvD",
  "key32": "2BTBCEusU7Ruzw7TfaF9E699yPgWx68CndyLvdJd4VKADZHd3SHJDuHQ8qt94wPLvCgh7UoyKxHJp9x62sQ7hcj",
  "key33": "4FzoNa9xGW8tcmxtJj2sC8HzkAebPrpvjAGpixYtWaFoADaeiEDstMV7zYPDCX746g1dQqbKGqfjVgCgLVChppka",
  "key34": "3CwmtjMcWvExUuof299JgyD5r57R6cLLFmCrhgoZjGPDFGvrAinfksLt1dqEPLoibYHkUdTaEA4N5WrNW24wWwHd",
  "key35": "R6ZuQkfGPEP8o4Xyzj9wbPeLq7KLj16NKpX1xnoD9ih3vihPGmc2V9gu7HfZb2nBdugZDroU1f79pfKNgYGh6QH",
  "key36": "3YYdxgkHLLo46vSBu111mn6FBATAzZ6YeMxknuqwepi7oWiiKACQ7DSagYFvNsnPmHzvBR7tKJAmnSjneBoeT1Qi",
  "key37": "2yw3nc26FDuV852hQxM9vw49EkaALNiTV6dsvSoRuZwWo62b4QFCstDS9qBhwAdkkcJ7hMskV1Cth957WC46EEtD",
  "key38": "5CaN9BQm5DmXVKVeYBwQ7Wuhh5N3R9hQJjTL7p1zmynHHmBvjAXEDfHMFYqxj3VVeG6j879XneNr8XUKXdpuAwS2",
  "key39": "5r4P3P2y2seSBkc1gReUe3tk97i8oL4QuUvY1aag5YEYJxHE7m7qeF7kk4nfrgxjkowoQ3hSXxkNbTUWmneQnjrC",
  "key40": "5MJN8oC7pPSeKp2KXWPBwLwje3qiGzckHNhUsFEXv1JW2YLCJGVtyDcMC6d6B8DcKgGkpg7dMAA1RuAYwE19DUcY",
  "key41": "5jGeCrcJt5uhA4otAXCse9qE9WBueRam6LPar5EdZewG1gxD7QKAoA5d8Vy7ff4VBBDDuSFAGi4ndz71L9vmqy2H",
  "key42": "Sn3e3qjvLNUnaWyre7a5RUpLqbH9iDAUCfT3BgY1L4EXkYLTzQGaZwfJQcpixfJEMi4BtYTEceYsWdQG9AvYQuo",
  "key43": "2xi6oVbnQGqoaCgGmWCu8aywpQEnaMPrKnqpqNw7ydzCrgkncbDPKzEqQdSYM6rzbbZTDDuhFeTdAuarKRvPQbKw"
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
