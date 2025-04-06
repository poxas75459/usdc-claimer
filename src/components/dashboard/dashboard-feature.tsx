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
    "5ZFeM5HnVG5qwqzag2A8GxrCBtcAwobX84Qur15RecuYsgBGDawfunboWtsfZYTD5FX83xMnUVTaLVxTfjJfzjhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fShxP5yF2JjP7dNPpQvR1EqLdMCVRRmMRZS354PbDLDZALX67y8xLTPXwxUEvaDRw8f563M9VyTHJXrX6UKNzwe",
  "key1": "45VtX3JszsGtVn6sZi95b6SbceExNYmfuy2ocBvNPZzZXfrXZMcftfmia5xPrerdS9DDARtT2dB7KeLJiKiyt8kv",
  "key2": "3aSKLM7wCezoYayWUrQz29hW9RSpToVzJM4JWEqkCWAUnfVJbxJsTXCHcN51uJ4c4un82VptkZf9uKTi7QCa6M3y",
  "key3": "Rtrf8ZM1sBLo8Mk57dagqgQioP1KVA3BwTN1AJqomEDDAGuKqE7HwcLkVK6YS7KSTvhdDt2RFuKvdRVdAXw6UoX",
  "key4": "5Wejf5ZL48T3mFWKUY5nb3TWkRpvRmW8uB8w4h8jg5hAaYng2oV11zPn8TGrv2o3sd2K9f622ibGiiJiQ1HqNEXs",
  "key5": "4q5Ss3wgCMRx4UcsKpFt2HoBE8Zdg8no18c2KHg2AyyMhewGcNBhuE1RoRF4Pw4VptPtEdBMUETtki1TTkbTChpW",
  "key6": "4brP9GFag7jx4RHzJkPoDGs9RC24ybozx82Kz2mv3cfYvSymFgwASsRECUY2rLBiiEnwYgwhb3o4qoanG44DoW9a",
  "key7": "3riD2zvvUBoxeMUbvuMapKzirQ23GR4cteZScGJpi3KAEtkLeRDzHEdW5LgMo92G8HRBifpWX1Kz3KgU4b1umG37",
  "key8": "itdVUncmT5Krbzj5YFdAm38Tfi5q6VLsRYqDSFiwZFmMR5EbmJf9yggiyhV91mbDVKKbDrm32rUhE8qzMbC4Wdo",
  "key9": "5P3YEriaTirb37hVox5xxyDZonETZ6S3MiRnvTMtuxveF8hv7NrM5adcsBqNUmfk1KeMwEXQQ4xTd2SZEyxbTSP7",
  "key10": "2mbRJuQBK8BLWdsP8Kgx6ufpRzEkScfrM3wvNbhUQ2tiRykY7aHWcoBPsrGu8X3HeoBErRXzv4MsgLCeFzWU8Sbw",
  "key11": "4ixNEp7BnUds8NwncXjERwop1BRRS7pL8UhejEhb6cxYXthmTun31JiUtK7LyMwEH4jTxrtJGm3HmQguMktzJyxJ",
  "key12": "2rGCcAMV1WKpHtdriE7bYBhieUmBma4ug5rupXWWyHHdhxgVcpmHpPwCuNrAVzwvhpguWtG9vKgacFHRW5dyE3zE",
  "key13": "3uyUaRfe7FyqFzMANa1Me7kewcije5MtAMopJUH6Vnu5CnvKPe5eqLd6vorKNSy1VUyPSx1e5595HK6CMnJwchXo",
  "key14": "2vKZAcW85CMqRABm8GPuzZdU4wiCBrFYdcNiDzG7AbVX9LjKViCrSAoxkaC5EAXpyfmJg81BLkLNGaNBCFmP4LMK",
  "key15": "52RvR51DNV8Hxyx4poAtJGhNhegt9UcWR9BfbuXZj3XwnHetubWv9B8hsdaPTpzGRit6ekNsDDNUDXhFNKdt7F9d",
  "key16": "4UMAuVDg68T1qoeuy2jiCevNuE8QGw7dZUamveJBBMbXCkd2q6eUa5U4xNgEWfT9rQeRPFpiH2XtkB33gTcn5T4H",
  "key17": "2kmzyHzxFYFtCfb6DVpD9zfgHBmzCJfEaS68odTfDyxCx7wUmQdyrbBvjP8BBVqgDt1A1QZA31uaG4D5GD91ZXmt",
  "key18": "3ya2VuTJERYSg4mJCWwMbJQEhPh9Yo7uhMUK1hAVmvmyiPw4E26nrkDqdsnVkSdVcyt57JM4bbKrYpKxALiv9zer",
  "key19": "5PqwfmEufjiKvhgFrcPbZS6n2ZLGvVViSB9jPZ4CzkTZvSbuJ3FYprhwkw5k6GCUyAoj9SZs3E6XKmxb4bgEhr2C",
  "key20": "5DzzXxu8djPAnQ5m3NpveipktDrypPGWzDxAskBzD6KKo72nu7ENSocLPqNZYW6653x1D82PD7qiwHpHCXEVVqU9",
  "key21": "27HTZDXQmMesfEmT9RQZMGzhZRhjJoLYW4P6QYvdVyjUndwbE3HAq1yDmhAAXMhxsDvEAb5R7rFjfExbvQLxruPo",
  "key22": "2zyCUat81Lu1oRYnDtUezAvuyZr2hwBSwNJ92VWEdNYcU1fZDA8EhEF8kZFJLUgAruByRSeRXomsccyD9iLxMgfz",
  "key23": "4LPtZ14yMqCrJz9pztm5RxcpZ6CpBu8qsWAbxcAE1esdaqgsUykTJfAHAskminZnAXRzmdXoYQfDh1Wm6sq1yXLZ",
  "key24": "r4HdJbhFX3USZKzE9ecEkgh2QNvXhZos4mUR687TTtHf79g5wdnZimdjja5TzNq4GEkdZrBRuggtyTKH6iFxwHN",
  "key25": "3WKbWR41dQJP9wmesDfa3wLqZN3CFguU2FY4URsZX1LaXyp8P3SJHeQCNHDTanWn2C9Gdx9QHxYV9zVigrkd5Sq8",
  "key26": "4GurhJUrr2wPoVcHPfAK7rP8V5QYFxQmXD77XPWEtFjnrzzdNhXP1Li4eqebao9ahCNd1S7VYvMS7HnB2SJAuSHR",
  "key27": "5oDsAPvPGZG22okdmMUD5nKnbqb7jFbfYEUybZ5m1ouwMCpgwJcUEUQE17VVsHCCf79wZ3wRFfAgapW3vATYi8B1",
  "key28": "3bCnm51Cvbjfaq6dGi2wrWYrXgJacSMHoxjMevUJoXXbFxgips55ThsHu3pPxaiSFu67XdDqQYiJH8PvnCSbrHQS",
  "key29": "4rndCaXS1xQ1FXgasZpQscremzvQ5N3rXxhqCHRTuKovJFJ7NMK2G24KMTaeQuRbFpk3enyQg5eGBBQkHoiC3gLk",
  "key30": "4Hap2s6VE5Tc9tg76fxMXZAwJa4LHvzqmss5GDguQxQrD3ysEtpoA6F1ichdeLNL7BcimpUKBdVBiUZapachEVQu",
  "key31": "2qG5qXEN8zy6qS5hkD7bFDKBLz9TnqfetepJnuMC1JqzCr4Kf4Kd5dTpj6wTm4vNr3rDMuXuXuVkx5ZbXa9xQFrQ",
  "key32": "4JvBhXKZBkKfCHfnEJKoaVvmozxqtTXYtHF6ncbhsaCap3Vw53ppPWS5iHzpimRkUk5uXT76Y2wAWZAsvsWnHje8",
  "key33": "NWg9ZCuHkKUiTqT9NJ85mupm6X8hFFc7yj4cdNq3zj7N4uKZ1kuEnM9Vi68XjJLagCQswvbaTLLu1okfXKs6Mj4",
  "key34": "2faQVtiuuqQf8NL4HNUGDJRABuqiWP19EsgGmTnptUQS4ansSwmU92Cz32CsDDEur3ajpAHhFCtCL1H4rNFiBUYo",
  "key35": "2oEKE63RfykRptRxzsmJd1ZYNo72dmq6vKRSEAgGnXvYc6TqYvY6NTUYasC4WvZhoxqooV6FPT2Q7eCyCxwqTnox",
  "key36": "3FAk6cyERmVHuaFzoi9KjR1wMF1pD2namGVdWBu5DF2F2RCTx72oP7SGCU5uxxdUoQQXEnuf6wrW652PmdASNzb9",
  "key37": "2Y9jwWKH4P9u9W6vjuMfLVTBJchCD7cJwURqnE6FCoHbFnkBEPRsWrZeSpeP7bpmUiZPok6BdVAomaE26js3vBRz",
  "key38": "S5Yv5845aKFMhamjwLb4Fh2Cdt8vd6p5MoZetAJ9MnY8GZPTMT8GtQsHpBbpaiLrxEkjJqSGvMnFV8T6NE9yGGH",
  "key39": "4q5n9gVSbi2F3Rd9tM3zkRAUvtH1hwyqSr7TZhojyhUjKdKJAt8mtZCFgFoMuHXkUdoQcVJLHhHmkrUcPA1keeRx",
  "key40": "2wnVqSVCQVyxBKGiJg3qLeLpAgFudj1276kWkw9EUeaUA7xjCVkamxAEkpThqWjJ5Nhv6uiYPCKqnpUSDHsQf1ip",
  "key41": "3E1FmEhXSvx8nEpVrhsCfXRM8fykaM9YMjdZL2NT2AEToffbQ6w96XhZxh58kGZbkV4G4fEGmLhv2136XZiqnnQf",
  "key42": "2SKeyHpnC4RF7ddeD7xh3LAXHuTL6ikXt9ot2T3wMu197wfCN9PqZKSG4c7Vns2yp1kAj3fLHg7cvsaq3p8vY3x7",
  "key43": "575e7iwpcnfLjuBMccshvdd2Lyn7pHLpfDkMpgHSHe9K4zkUKWgNwpFHfs16QAP7eifvzw4HtrZ3tVaKUbmUKjiM",
  "key44": "3ThrrUzRJ74dCCC4MkS8eKXn7tCXUW4DNgUfwpZb4ikZWjpSdMCrxUFY2idSSLpX4aUdHHXbRxJr6PGvNgaeZwkh"
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
