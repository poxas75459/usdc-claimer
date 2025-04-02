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
    "5hkgFgLiLNHtW3H1t2RNGZe99KGv1Rxv3VWnSiWtSsWj2CvghuLuNnHkGt8z1nBdHSzd1B7qpRgHrvhkL3QD5mkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xUNVLzCzUF3e9BgEjoEyCptTkhUEoQ6H9XeCL8xQXuSUQ1X97dCVkfupw5EtReJmUmNmwH7PK5vr9WrmUc7FUU",
  "key1": "A3BhJq9rq8YS6TfnixJTrNPny1MpQ5ZSyRpX17ec5ra9n9jgGW1hQBTPpVxVsyTX97wa1yGhdUc5oNBSWnMpdKA",
  "key2": "5zdT1gv1LnTJM1JfoCYfCrDYxdHW9kFfMo4rgp6RGTFrfZ5ufGnNopGsU6nvrp6rXbetqhZM2fazx7wrgmsv4HF1",
  "key3": "4iTR7LzqUoJo2FUHetFgT7LggMijiYmBHUZn6hPoKKv3nCxaQLhwtAcyj9WEdZEga88J8Zihjumm58ykrnTkK8kC",
  "key4": "3omc37xDRBSKMTntU3SwoN2UBkQK7DJGqazkkiL9Ve1AYYigMMiALCH98v4LyiJbsBU96FxKWN4KTGuL12h51ffK",
  "key5": "4JXB8fkVABjFNDBo2Bw76DdwBcCCFUqQYjqSmvUrepEwowDD26SdTeWESssyp6vQJ1zCTEibFoXw8iqHJ1JdLZ2y",
  "key6": "2SATmsryZGNrPv7YRSi3BDhc1BhKem2KJyca6g7eu4c5ujehYc1hwqQbvLeh5imgM8VaKGrsQzzyrhs48ZA4iMcg",
  "key7": "448B3ZuMJ27k5SxRGDEfKyzSUnAmnMPxtF94tmS9FKNCksub8FC8E2DKC9sFrMxSawqaA67jgewVHQoQ71pHyZw",
  "key8": "2iQnxVBEPBKwFbaPx2AxVJXKKpSRa8ePvLdvaaXyLuazUBSs567L6jVhYDSmsJemFxUtcWEL4gBQqH9Y6RNKjrnP",
  "key9": "5kQ4WCy1mwwxHzck6N3WX9VK1yxZwpLVPqRPdPUVzjKBqHJfXuAFeRKRUKABgf5Czeb2TTNYejLTKUZrYeuYLD4H",
  "key10": "4QqYWVBGXee4w2ktErJVsbZeuZmcqhsSCn5umLzhLN5ZYpBAdcKf2CNcprGguSqCg7V5v1fTpVqaunU7PeyRLc2k",
  "key11": "5chax5pw3i82fx4C1rNoaa5gRAvNy8bZM9UZfKrTpSk7dqZyYXF8nMuffmMJ5q8iCXaJDvfbVJBGaj5VCiQr9bXR",
  "key12": "4yyxsUSAFCgUpG7iMuovZLXiiDuqnqGTQnVbA3X3St4tH817PTZzJamG3sxZkHS7pNpyKZGWmzPiQ2xBZEFiWCwC",
  "key13": "4sVy4TeN9ivpZfZRw5HNGaejX7RRwX2EhheiPfqgHxgTr2q1d9Q3z4812CxtiLNSUhZ75P9VSDfP9fepaUbeLDFd",
  "key14": "5GxFdYBo1bekxQJmH6HAU5AtUvjcVqT4CNvHBB3k7fTPH7RrL4sFVCGd88U9R6NYczvj1msm11hsvguRfME2HfA2",
  "key15": "37cWuBrbq3Cjbq9Saby2P67Phoetr4izZjokgiHR1dLZkVxEaAzitxyW2VtZvH4mqhtvgYykqXEFcj4P6T6tc7DT",
  "key16": "5TGMQKDNVBgVJJ9UK9gzGhdZm6Whqe5jGMoCrMf15HpbBwqCP6rB43sKE8tcqgVPAG1K1yntTGSL8fGEU2uASb7q",
  "key17": "4hkbtcb1xDsCduk1UQqdNqd7bcRfWATC9N5XFx5sJqs1S9GYrwNEqNBNJRRLvTigK6YCdqvaNDoQEzUK5XpM5Yg4",
  "key18": "34T1F9cax3ATqht3SocjWtBEB4QC7pJFy9UjXv5Y6czXeVB7SVwThGYzuY8G9pS2XK7G9oCj54Vrpus69wuqT7wL",
  "key19": "3jgjW6vpRZC2r18wFxaaHgW7vrpJUFWXCehXJ1tRv8YCx5gg68hsMJAwNPqE5WCggRZhvwx2HDAg3JX3Ba4AyBb1",
  "key20": "tyUq4GTzLF1QttSaNSsmaLs3n4Z9QHSomHyVRdPtyKjoEov369yvuwYWvkFf6EwqgbNCdUfjvJ1CrNJrc9vgWy9",
  "key21": "3XPwbHoREZp1kt44C3ttTwYh5uJ8HxBgx1b2PK5xkAxYCDVNVyfEYV6NbdNMutQEUpHw4RosFJ5maBu32VYx5rUV",
  "key22": "5es7eHNyLb6MUKL2eaYbggk2XAberVueYwCcSJH26ni1vHEc3Sx2fG24Rocb1NhBDJ742ugNFZPBcr7oJZwixSTU",
  "key23": "3NGhrhu6zxg2EtdRYYuLTg8hpPqasHGyTr9NJUUqCDLi5twsomegZ6AUEanPT8kD5m92K1NqEFDZgSuvAEFtxC4a",
  "key24": "4DdiFdBcR7mb7kWowQTStQBBmyffpEeJQopqcrjwjkm17rTPuGVRn3NSrbghhuUMQ2KMVP4gyh48tZMTezwsxm9W",
  "key25": "2SZVw617yzd2KdGXed2EmkA52pAY8EmQTyb5EStQCKtx9e3oCq9EedWGqwfrTt9mDbZ1MDEzkvsTC4Cv7iGDPGxk",
  "key26": "8pekgbAm9fzZs3nyQB1FQA3nD5TH3gUegFQsQZ729Pq2HbjG7iE6MkbCRh9euZ9xC6Rt63oDhk4S1eKkQRapJPp",
  "key27": "2EDVARPmkktfzxue3SwoNWoaNLEZEYocswU4c1dWEgYVjbnMSTUH3gv6P5oqoHtsysBScPwNYcyqM5F1FwZFTuGY",
  "key28": "31t8Vchc3kuEsFBXSAZ77e2poD286D86Z9p8YP7R6tpsRoKEVpbQpFizuqPvG9LiDRNZQvJm5DohXuZtuajzvTYu",
  "key29": "3CrbEyEdJt9xkYvmddMLUUxR7usYWE3VHNEWYzax7hqLfLLUYukfyGZh18yiKh3Fiqp2n33CV9m9QDRFzYvSQcbL",
  "key30": "aXhKsNGSUe6P3aTANU61SUESePcVeFD1imd6dfcU68KLdNKqvYyeneVnEDW28aK3Dbqy8cQbbqcNf9yyuQ6vh3T",
  "key31": "4r9JcLtPcZAinad6BqAk1RDq2sLBYnXTxtPdCcPYJgjfKpCAakUuEtjbwRrLLCrVFvAyRaxmeDWxJXewPJ2ssHKm",
  "key32": "253BpHsAt9A2ok6VMZpk62dWG2w7vp4xqFcP3HrnGtkVX1NHUygqQC5epxSXyWBRS1rHTHBEz2WXtwBHW7fWs8or",
  "key33": "2pqrazpNPGFyZV96HW9GktKCMghZARDLzifdoEpYCH7hdTCwfYJpfTcrW32S2Fi58Zht8NMsVz1uZswMgWrYvBcm",
  "key34": "5FYp8C832KarWY1kJS41wF7ikDW9goWRsdHHsQasrCsxkQSjwgUrv1JR5EK5eS5aGQfkWyGcY6m5uKsWzToJTZaG",
  "key35": "cGrE8YN6YYrp9TQwbagJgwor72vW5SW8MLXp6dqKBQKpamKTtdmSa8KEHTTMsiD6nvf421JpwWsRTNt6FWhUPX3",
  "key36": "39QbCwhu91AVJ4jsdiv2eauJzUycmnkf8FgKF8DS5A34P7tmhGvz53rCjLDe2gCcex9esM43NsHLy7HAgoPjSAro",
  "key37": "ujw8bgWraomAmyfpS5S8qyrBgKEXwRKyjdsw5AiWM7vxnzDhd1dVXj3y6anHCsv4inRHY5WopB2ZQWZv49huqbn",
  "key38": "2DvkA3ZoxcHD6By3nVwowEyxo3KZyadM8K9HCc6KhMEvauwb212HPjqi1XffwVvHHGG8AcjjbRncS2ynpTGSor4M",
  "key39": "4irvg6xxSCmAzYYB4ty6uoAmRmbau7uVqefPapbjWKjZwCp6m3Eg1Akh27EnhMjW9GUeww3TfHEnYJrGnrniBFfa",
  "key40": "2sDUBJQUqsyNy1Ys3L1GbJMQggkMqx1R8R48moXctnUc7pJetrf41qcEDKSLuNimFmd2awRKynbnVZGg4RZjmi5G",
  "key41": "5MMzZoS14sQtZQ9rxCPukq2TZA2eXp9owbBSbtmavbQd1JCwG47uBhZcPjzJj1cMkZVYtR6ySUt2mSgpnfCbyrN6",
  "key42": "1KLEw6UbA6vBU4Mm1aLoF1LAS2Xx7UBK4sGrj7SB3b2y8Wn3Sj3WpRnF6UhtEXHdY4EvHs9dBdcVjpep3WZaXSY",
  "key43": "TKLfXU3zFd3XxnHpCHia6V72ndShG1Mbii4cK4Si7AtMoyv9pTmLEBMKgV8MDDaWBXTWbE6tGVPiHBDfkssfa5N",
  "key44": "5z8YCetomuDgNJmwcfXJpypRgo4tDCsPoFmuBSnar8LF2VEZVaRUwz5VnZcfK9drWj64BRPMK8onZmTkmi6rpjX5",
  "key45": "3AuFc62PRcy8RmNgXrBtwngXf6QHZTaY9cJur1tbGF4TYZkMaswHokbeNStsowACaMxYWSrEVh2fhRjTHHWpUXtJ"
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
