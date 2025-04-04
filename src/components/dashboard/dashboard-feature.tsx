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
    "5Qu6yZFGHG5bjWT6fHweknedyauRM2QWZAuSBzQFD58hvj5wCrZY8UcuT8ToLcGmRV8aeYSnHAEZd6nSNmgBccHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFWBght5ib2j7gLCzzP4ksxV2kSWXTyNhw5VLkyeQKdzAuu9rx65UKXkmrTgdaHpye5fiXKvMnFpYA9GDcsTT85",
  "key1": "RHtjneFJxsXBFYspqhNF3RSvCd2o3zY8hrxXxcQNjBwFM1FY1TVww7i5JCDiqzSo7NTFnkWTZpQAQFyezBns1Dt",
  "key2": "4wmdHPvt2RpygmahNjwpoNE6yxbbVHiCQQRNZmDEExvNALBBaSxHpi7gjpHQXTgDyu8G9TWHJxckbqfepx8aP9fZ",
  "key3": "eKA44L3WG4h79oE28w2kTFkQvbYTD6vYgsSbr42kmMsdGY2ztuMDH8dbhSuzvsavnpaub5YADMmS9f5s335m1zv",
  "key4": "5CgucwDtR9AVCMvfecMYc7PWhgyKuMair8mH6YCP7yFmmn3yNqN4ZiibNvTzdRmwGBNF63PBqULP2wnV1nb5WDVC",
  "key5": "4AJYXRVoXGsx1a3HWv1TztiG5qc5rtPwhQnmN4pdMHUBPsdB9noBgSFacTciE4SHnoJHBVaDxdHxSj1agoffFTX",
  "key6": "2mGxrU5QYg52Z6JfcginA2fsSt4BYVeUxMcGimdtioC11wQDz7qostdB26R7zrLVvsQzfmBHRHXw58gcRYWDGZP8",
  "key7": "27vYVmHA43hCoKNTBrteE37x2qKe2PqeSojNgHP1mKNHQCPSJySyFzqRxmXRABjbh9gWAQDpXociqmxhxTsonTKK",
  "key8": "4eAGBG77HbQSLQFvFcaUWrHTnSvnWiUqyoPRoDsv9z5nKJK4dz4G6epvppof5sJemBCN4WxjKS9cdQMfEFvwfbzA",
  "key9": "ayjV7jMV9Av8NsVX7GnGZYibvmArWW2R3GJfgcB2ot3R2Wg1FxCSqsAheb1mfrk8qEDWvrZqvcCHAUyTye7JcGf",
  "key10": "9D4KoYD4RpFJzcVvaLxixDP1QCAsaC6FNth67caoKcZm6mzyLUj2B1sFVdy76ERR2p2tNernLcHBy68Zhn2oeFm",
  "key11": "3CHNarNmQiRPKuLM36xUqZ3w1yp4uZ1s3PATypgBihewg2AYpbCgrFsohmKnmjsktE9u9QuvRB9G8Cmhki7xCcYv",
  "key12": "5WUNyf6wt54AKtMmwu21jcum2SfYLrkppUtDEZ2PWEpatJuEKLcbeM8WrP3JMq3omPT7ywZGz6zjYq3VPX8QBrwE",
  "key13": "2RumdjhbZimLaeprzRcZ3w8ejWEb9EbcC19TksvLsTh78A7fATGhSSYNiUzCiwUkp4Vy8rD3bo41Paefx1L8nbxB",
  "key14": "3h725N26r4XGagAxnCDtwafR2GwqHvg4K4e6H3T9JkBTK4dDULgG9JWeahLMCYGxEhvhRx98upcs4borEgy5HWnR",
  "key15": "5N2jbxbfK4S26ZAM49wx7uUa4jQHNTopWAAQ9d5XRW9B4FTuAFsPXWgmwvxbeTkWexAFtsg6vXMB3PMbYm8WvyLv",
  "key16": "4u9h3qYiEZDmax36JmFGGz7JuAKki1yvH7f1zoq8rAazmobeHy9ZGDJxiRzF5xFPBYDH6Fzz6f8skXLhdYbSMz7z",
  "key17": "5wv1fpbwQbY1c1PAPJer652cgYBgMq2FWhEpBdbGWoTRan2LTecWyAucxAd62bU3j49rKAqM7EEoQWYtSkuQhM8K",
  "key18": "nEE81yRKsUn2EK9gbXsyWYW2vkC8cYpPSz8UofgKp6egsNTrBNzqY1ZonqJhmrFqu3Mjoqu7kkVYiivWPaMnY3W",
  "key19": "55unuEHg2PHiRgvijBhoeS7uSEfnTiZGh7tofp7RqCiyX7mCrAZrjYyDiQVpoRWZJZmKhzCQM2i5aKPSXYU4rBhT",
  "key20": "5bQGuk5Es25sazVe2JRHJG7byEYzEfGMk6h5Jv88Rbs342cJNjcLTu9jTN8cty2phxGYJrLTm7qwKFVaMYuHJiv",
  "key21": "3yW9PvpU2oAthN4UA7p1BMurs3StxripcybmrruVvW6kMpfQc3BHwBMr9v78GTvEuUy8LAwUATcsoGhjBXs3fgMA",
  "key22": "4vgh8G6ihas77fqhMHVcrrj9wEaFZXnPK7H6ZbBT5ahza3corE3y6zkZqEnLTHX4xuWJg4TtgLXZmcCknZmfGwXD",
  "key23": "2WQwHEfQzH7z4uWjLmPPGnb5iqCm28KDRWLTob69JGL9u8CwMD21oMBEA36oew7e46io6wbSyy1Eson15XFwGUpq",
  "key24": "5BXaWFn52hT1qDYym1gQ85hc1RjMVijgo8TaZyWnYkuScWPTuEDDM7qk49zaYfcnfqsAguo5cWK82Js13aunBmXo",
  "key25": "2Sb3bgWjHD9qxGeMF64Ga5yTmiAYXs98yxpmj63JgVrr6JM2G7yt6gr4ZbdVteAA7CKU6o3jwAuNXt9EGqZwfRw3",
  "key26": "eJ8DowMoELhBnNg7Fy41DEJtHWweEApuxH8z6dq1iGfdFZsbLf2XGDys1usJYqS3AHzgfVri9vp4z9zhpko1Hps",
  "key27": "3jM5j9wG3JpDLg4L5FBd35ouw1W7BTvLhE6Kv1HzyRQo2WYZNFZwPYLBVKqaEN8jHd3tv7oSJvgDmVbyf6vz9PRu",
  "key28": "5uuGZNVpdVKtAKVptuWskYc8fovDE6G9pbKTyjxoS2B89kR2PBYo8nEkELfEaQHKu9E3doD5jFWBFYWqfizSaRUE",
  "key29": "p9VhnwkDhFvaAmmqi9Ta6sxbLG6HSqvVgQxt2qKtmYsVquuKLje6254XJJ1Cs1vdiS56RjHoqgYTmDwenpcUYL3",
  "key30": "2fDMHkRtBtG5Vez64ii6nTsZWSk7tpsBXXcsqeknxrEzVG3JEXLvciNw6WTMJAMqeEuM5RiJU9XXRhxwsB2ZbYch",
  "key31": "2A2e9hhYdszxoToewyJ6VhYWiXAAW8tBHLsdyAXVQP5EV1gBfVbL62uovJ14dqFrDaXEn8w7jqN9ftPLyiFjBi9p",
  "key32": "GjcK6yn4NYqtmafD9xtZdcxVWJWiwH4cusHN9DnGFezV8i6L1Rg2naYQt79tPfCCcXhMJGJo4ukHu99wRQL4ur5",
  "key33": "5NNiBFeUqrbhJsvcdH7NQbhKCZBPxCYgAYZMhMdecQF34F6pesymGL96m5PWr57c8vUVzj7cs1z49m3QbqbKVFxC",
  "key34": "4hXocWrDACMD8H2N4u854pE4qzXhfK5bDKbr3g7KsGADfoPyRcojzihwh3Uw98EMKJRiaRoasGCw6artFJwwLRuz",
  "key35": "4P5c9ghWRXf5D9X2EYPEVoKuVpC7ECbF4kLMvuNjUn237GNeMqMaeqzUJPrC79Jxkf99jiLTP6Usf7t5AGRbu6u9",
  "key36": "bep85pTUdfAwwMD6PMzwD8caxHeEfTBHDHyjVGSgMCUjzquJmVRttQ1SJWgVQcdxnKWgcDU6Xgwz34n7Up7JjQU",
  "key37": "bTeVwqMX25r5s3qmmAZ74dk1cn5JrrtBYwcsW9WaJHy3qG12P36DskgVZRyJ33TinfZoSQ2dkX7sZv5mEkDkiof",
  "key38": "2uP3F27iLXa9gG3nCMcK1SejMHKq9ewNXXkEBRJkyzPi3VRfqc88WkZjCbe3yTRb8PmD8SRgnPtHoJXzNAksHUrV",
  "key39": "3RvP8rcMNAXXQrtNzRyr8zryvRN437b6LeU3Co1pkvQZxX4PU7gUFhDNSuf9xyQ38i5tiWMWVeDPGEBVKfPpq7tp",
  "key40": "2T1qyK5BHKUc48i1gmQMAwyz3UFkD5Gg7GVWFdDNrQY1CiB9Cr58tbApVvFGy1a9SAaP4M2anPy666aGc5P7Xf9J",
  "key41": "3zgmuARUqCD1u4Tr7vDdv8DdUER5inMUMsK1gBLgJbRpMrF8oKM1mffF7MZgAcjCLQNc5u6cLQrtjbokaNi2xcJj",
  "key42": "311eVHhLZCr6PhZ7NRxNPs93EjiArBaVfrKkQTRab3mNpB3qgmzGwmqUhEJCnzMR8QEHvnD3jrFB9H7pWaBxGUwV",
  "key43": "5MnRnNSdSy72ZtjDqw2XgMoDJiimFyDQcQVRryaXJzHHYM5kN63r3i1KhKHnUbY5p1ztLnR8wpFLTG2bE3TU4uQ5",
  "key44": "2ZpEkALuynNbZ52K8ikY46HN2am2SutFvEHxXWoypQYojkFV62BW2g7zHfYfARXknndjBdRFCXhzACGNTrHkGKer",
  "key45": "DXkshSx87qRT2nadqo5Z8B3U3aTwmBi9YYN6Sy8onMTTYvCNq5qWUA1AvfbxqzBoRY2xMoxCXvpAGVMreeC51Z4",
  "key46": "21dZPQLR3rm2uXNeroLrzzTcx1RZnzJVi7LDtRmC3BBeEA9eud7iUMG9EHRMdr1EGWzdf5qiszjCfo7jckL1TFuD",
  "key47": "1CoTuDiGyfBrB2wsbZqrhK11LoA3XQAxbwT3BuuNQZjGPKmWMFf8FsWy3pPj6jYmQwphHqEQDwWdG6aGKRwdXx3"
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
