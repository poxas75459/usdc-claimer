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
    "59c5UXHLCJ8bAeZtx7objHbTT8637asZwD3fjuM46RUMeNWexfLPZoGxzkSS9K5LSXu1RQydC4WcXL9rggf8ofk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ahovKTGSLfmxQBNsDbMMM5r4nj7DnZpcvZ8FqyhpwBrkUGRs3mFfSvdfkfE6R5iwC3vU3f1PSUpJf4kBHzJGeSP",
  "key1": "2N1f92pVp4bHiknMsGYJUmN8Kk7MtBn3ohCmMRKBrFu3zxve6sZx6NVu7LnY8njJY9WtabFofB1o2W8XFnvjZFtc",
  "key2": "5XekMEPEqv4WRQrP4HUjnAdCncidMNVKdvMecAwEGLigkzZXqf4y24kkP3pstVhbdAxRGDQerasAoWQhDWpTvSiD",
  "key3": "64Q2x1XsY1fQMCFePb7b52pe6QKWDgwVLgqxWoWKZCGWpWmQnsxWswH7nG1nnZMKfuVcy7FdbXD4sGiXcxiKPo87",
  "key4": "538qEbAzu4k9aXSv6pGPfWJmcWCh3dboLLsJ83bTn8gyMC5xdYYz8uFsgELNUPuFvJPkBB4Cr2m9uYrXrZnrLXJJ",
  "key5": "52b32vwQLb4PxiGnApqiA8d49aXX85VdRtjuxoou4Fu32mvXFN2nwtyLY9umCxPs5aWE181PWB9NbqS5mwDdMgz",
  "key6": "5qze1TDk4ZPQjdFgNvz9vXyhvhq2iHW6tE9fG6sJfhXu5rtjLn6UZkNPjABSGYmuxgPpAYjbMDPhfuPXdub45h9n",
  "key7": "2i3upZ5BAw3iUrmZCH5tFVRZogRKXMj1dqhEjeyr54ZcRe3a1nLmjahEVzCL6adgPNYndQkQrxWXc2U6K77r2Miu",
  "key8": "bEvmVDBAFL4T3eUmgvnDtbaMYgyPRXkNKHSmgbRpUVSQtVd1eYtUP4cdjSaVK2u9b7vkRVxnyDHb5XnFwhkWbRZ",
  "key9": "5BynADgEAURGipxNRnMiZkgC9wyENfrbBrCMvBJ6cQvVZ3eyeAUXUNw9zH7YcwhXzaoEUo8Bp68ZzF6mj2MAx8tY",
  "key10": "2d1W5FFE8o4KwKJuUBj5fAz1z5afKRkZMKJDpUhng5DrsZFpAfik8b28mVyipZGueitGm1hubviTAgEGdzjK1XvS",
  "key11": "cbh86adRsHgyXzLjzrCZ4oQoSytDw8zaYZJWBeGqr8nxjVhPRnHjQ2PnvPdZXyctUtxhdoy7ja7bGyJ96H7Z6ZQ",
  "key12": "3X29Geh4mDGfBJakuAmiX7X64esC93JDSe8wuHNvaFASEe9JkzCK1dhwgDda1f3geyraMwFt4faMdPFH7ttoq9zU",
  "key13": "2id4tNW1aBEDGcsZyD6yLHsiRv3o9d9LRZbbHs3uLLpsMhXzYQBturjJ6196cvwC6YnBbnrbZRoLGogKoDGfsT8e",
  "key14": "fKm6BQcwpdksyVqgY7DB4VreL42SGbF4Ja2YsGpnZqnwRfM4CrSXxQJJyBD6jnvf6UZfMoCYS6v3znTxocgGRU7",
  "key15": "21jVtmXN28dQTEVzy6eBuproFwdB861zQqWULNVrJC2vtqx4gwiWheVpZXTmojSA4LxRBK1ePxyZvgX2b6cH8atz",
  "key16": "5WcXoeSr8pQRCM6FgFALUirhgTLq43u4xrDaeu4XCuWxUjxJbNCy5TaUQqiQxnTQf8n2Ra4Fxk3wZNTvNdcHmzmD",
  "key17": "61aFontdzZFX256knmXVdZdKAt8t3ZLdoFLQHdLX4PGMqCRj94E78PeUP2hmj2jc9a4CT2t6t9EmoeM1UTdm7ETu",
  "key18": "4yrBswnNx3HA5JwFYEUPKk4ikiHDtXr8DcQKS5QzWJoazhQQ3TzU7a3XNYnRa7M57ieBLhbJr5vromxAxwc4Ujfr",
  "key19": "2U6wF8nAprywHrf2KMXMs39ytijAt3Mk7ZM7zTuG8jyMs6PtXZZAc7rFUd2nSmSLm9chGnM27mVb2SKKUZN4W5Np",
  "key20": "bU3W4cDuVE1Tht3bmnYYiWjAyxq7iiMvMbvidvb6eoxE7XL5w3y1n5jUm63naREq3LgPNYKtAFYfqn7WqVRtGUw",
  "key21": "2ZRbF1j2BxMjcgwGiLMxrEdtXXjy1hWnVJxRuVYCBNuTdRyYjCZLJQBvBa8k7HFmNE7ouzSTGMzCTKZgLY5ksomE",
  "key22": "5s69t85CuwvggYhFGUKK1twbEJqfqNswUcLEtVaDtsH6Z4W2ZWw8zEx4c1xtbY5rbPXsecQoyV36yfs4A8NpY1DR",
  "key23": "3w632HdZUHC9JabHYF2prMSGbB6ayUy8SMCQjEoYuQTSmneCd8ep3454y8RbBqrMzEufccVrRZncXUAQ6WHkQ66D",
  "key24": "TDJECJNma2JfrPwCTAgbw9Bz87gg77ZiXfHuR3LvVrgoLdhN3JwLfU9k7GGRKry5JSxwzY1tiwHfYmTR2R9739W",
  "key25": "5xu7n97AZBJk4w2FwDPDrajaJErxgwz98izjVQogoBoiXHphY3AWB4666LCS2vzXgJ7we5m2rxFkTk3SneTdSAc6",
  "key26": "5gZarAyfmBoAA2rBHoo3gq5BRRsAN6BjYSxy2dCpXYPbk3giaANV8ZY6WJBJ7BWU6k3dEHRALvwtKTgwoBomXbWS",
  "key27": "22BRuhB277mMWvpMbnV6hyGQEtupajipUtm8Hjrji5H4XW93EMeKfkEivFDKsqZtaohaSqoUX3zGKno5saVGNwVA",
  "key28": "64tfcexMAcaQXMgwXSKiPBWgu11MRQ4Qarsu2kQMAgDi798rM92NWKuxXbipXMxJNzGs1Ez2513K6ptgzC1kQGJk",
  "key29": "yRZjfuWwxnYydjGVemUJsjvo5axU2XHuxbixjNwMdba9aTkyZJTnUDRXXaxUfbfsP6wLHZEU8bd3GLY2R5s6aRm",
  "key30": "26je8be322SKkGyG49pstYkyq9nm24Yd5ttt3VRYmvYyPbgKN8RXvnFxv556UJA4avZXvW3EWZw66ays8TGhaFHg",
  "key31": "uevaewRQotUQBQvNjKAN8gWBHFRiKZrCcJsLeSzhWA75iBJ1YuryZ8A58RGTkKvuPm3szKnJUK5h571kc3Bt659",
  "key32": "55hNkKfLnAFKgwzLgA1jR9vTzBsUSt1RUNnbYLnU2mw82eVKnGGVs5ZRkbUmuFLHJDuF1Bqp5Nrfg9GsKvKAK2E",
  "key33": "4YJf3KA5Vf8PHfSzqmvJnPcYCe8xC5FXHux2Mwaj886twfY8zU816MhrLm6YMSe78iMw2z8sgndfqor2tVjLqnZL",
  "key34": "5ZuZymFAb2bUo1xBsjSqaTcuc62QQ4o4u5P3VWCd1PLEhvMeEibgGaFVr4gNLXJaArJZxAFEKfCebo7hDZHnfgFn",
  "key35": "41JsKVMUr8mQFmdae34BQYZvYkNJoqYdi1Wsmb1KMgQdB6keS4qZCJWTWfezmXEUFkvEqN5Nd7JzNifiGCvuAXLr",
  "key36": "62UsnFGi1uVP3tpYbgSKvfVvY6srFAUjGyKojPoXxj9N4QJQ7RVF2sp28PD4e9wbHbPrCmrYcVNPwHxBZ9EsvLHa",
  "key37": "3QThi5AXmETWk7poHb1aBbt9V2mHWWnb9SNwpssSivRzQz58tupPNiHHSf23Yk2edFZ5K619KZqq7m1wMxCPCv4B",
  "key38": "25XLbDMEJigMQbwwdf91kaBxVWsamhYDm3zU1oSbk3fJa6R6MFBJcVG3VcJAkmmwkt2zinMvX97ShfesW6dWhZbt",
  "key39": "3wQW94zWXxbMjLxAMzX7j2rGneUwTtyfbPNs7PnPXcTbXPdq4ZhuRu81DTaiDm5V1XjCWqjSLoMc3s5yB4uL4PUs",
  "key40": "v7LriBjgughdZnYxvfbbw6QFw6CfghRCxaSMgFCmkTNXi3UbNEHkJVZt4Pgag2eGPPjwyF3dos9FB6qBKMPPKMy",
  "key41": "2Z7NUQ9qpbcgeMM4pfJxAn7WyXdTLds55Skm92oTL2eaMsct2kAcH4wuXyRtqrdRcYYSf3KjgX1gEJc6XnFjfCw4",
  "key42": "3NaQSFyj5VSBgqCRLCtQni64B2YdPx1SdP7Eci8VNLS318q5LxojWFxN4pw4mFC3Ar942jLLoyRtE27cZ3kZVExq",
  "key43": "2HqyjnywHkfCR4ZG84MLzybdg2q7doYSLJZM1hgYu8qJSTRithchriZjSiQedxWiaAaELEPfnZWtBmqLJ8vmoAXq",
  "key44": "2gn8kHUTMA5qnoNg7FnE9RNxBQcPmP6WQ8ppnC8T3WM8JRRgUaVB53BvmwHtLY7WnfmaRhub4oXMLHRXowWPcum2",
  "key45": "4J45S6CsjQWv3MDquPZZc6eRM1mrXXftFpkDHSc1YUucZRxQ17ZPaA5CmBBcaxhPH9xPRy9ZSuqP831SJatg15Sx",
  "key46": "N16Rxx1fSBWTLNuXWLDGV9P8UUmpLjHp7mNxKnwZhWwbsJM1E2xXsCmnfC3RELVSBHxAVQJXvDc584fxqZ3H2p5",
  "key47": "3t6B1kj3SEsfD9RhqHqnCWsApMon92fAbcnasxfcGuwTbbWYiThnmnfLB4NGYp4aTUKKCUmdS6iJcrBKQCwj1EoF",
  "key48": "8Rb7fJSv6VFuc9SqufTbhuuuPkFvSpbWLRX5MZxwy9i1ZqTjoTcakGQWTMW8fvWRKf9CiFDpPEFrQHigtyvuN9v",
  "key49": "3Q8tKU3iQdbkHRBYxaaFCVwQPx3JNPGZEGZY7oryAyFt961HeWQqFqYQzhWmXARqMTgW4soyC3WSCVjCp4ct2JpE"
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
