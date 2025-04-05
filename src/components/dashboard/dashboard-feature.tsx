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
    "qb7MN1q76rNTa7tmCVuCPUEVsKq8baYgPcVNguyV38RonpykwnGmUXUrXNszfpHzkdrbXAWM4jZzez9wfM7oxLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SrX9uc3Lq7yLBBKzwcfmfn8qUSmGWPz9c7FmXEjhdMC8gK1djgx3yMqSgDmiPNUeuUdS4EcKFn3r1ZxJHUukFji",
  "key1": "63Ce25BKzrCvrFUyFQGDxFQAd64ncTSAsNi913KCejYCU5p7fMLmJNjo3wd1eXmyk3aYkLbfC9Y87ZTc6qX7CRb3",
  "key2": "54bxeufkiNnTrMuF17BxPoePMpfERwzo2fXBTEzWL7kbkyv16kDwxRxtTNFuGfRkh54NtArjvjzufdKL97nP4ZF1",
  "key3": "4i1sYtFsfwyASkvkunACC89iCif1R1TJ8q6ppP8aoFQeiePTfHBaV5RJvWVm17w74dHcBpexKf5fiB3idyHppBQY",
  "key4": "29siMWro5sFHEbTahkpKK5632oodKu4Pd1BTKB8ejWqNKkdFsbD6jjm2baTRTEJpmW8bFqYU2SZv2XqvzHThmP67",
  "key5": "AtJJTjACoNfJjV1LCepjcQbe5RDTHCgX8MVah9YYDdsjZy7beidENqx4JVtWEjjs79aUaoU1qwNhJEtp2snzWyZ",
  "key6": "9HqEXAQUuMTvGq1KZMPZNfQHZs7AQhZ7chHc5KwCEqgVq2P2BdYGtNhwyF7xX5JSefbeToaicVEzHm7PVp8CqZH",
  "key7": "4sCEx3ML76oAuyv5ktHakhhMj9knhcyC6rX7VRvYmvsZ8RCjp8A87wceqti2AwLJPyUZtXqhmagVoP8ztZAokoDV",
  "key8": "4hv5S1PWYKBGz4H4upGmFBnWxeYeF2pKHweY9YMAM7RrkpedGbT1SJdYfivh1Pvbhg64NBYmGTB8tWmgsD3sbhWW",
  "key9": "4V3YjGj4yNGRNanYndxPicjp4bM9bnxAW69zPtXMw6q1CwmfCU9Ff6AvxnXe72iQZgTmT7uKRNd2SadwADpZ1iej",
  "key10": "45FG3MDjtgwDw7wdf1zd78VKhTu3WH8DvPMsFELf5AQd58znRnq2HbDLX3P4tm4knPySizLFoA6iT6k54vzSDzZU",
  "key11": "4ZuM5hkoW9hLvevD1jDt5bFmibm69XSGU6QYvVfE6K4c1HWtT3nPZ5it4bgPNGoLvwQkJxGe7DoEkmtwPPSBupuy",
  "key12": "zWSPeiP9F6o6oEP3tUYjMSFhWsp4mapwCkSM4oQPzbzmGEfty4maitukepyFcLkV5ySNF2z2ZjbauNZBhsUPgsT",
  "key13": "2mfQooihNK8LjFHoTt3HRKmyPdt2LppuzVbyB4xWLoRxFX6UM2UmU8mDFNezSZoNehTAAjZE1Jh48smubsSEm4d8",
  "key14": "3faKJVBuMwLqLS12YDbUbwkZbyGqbNgh5mtHzszpG83mkaZMQdTngDqa5k5nv4kAK2ZtzMgJeaxb4jCnzyX5uHi9",
  "key15": "XMhDtQLYNxUv7LCwHnA8HnPLAXi1hcNcmNo9za4WConwSTBVKnKFempbS6mLScxPHWw8EEAFUMWYjPK3SAbZ4Gd",
  "key16": "5Rgu5PW2qvrtMhVGjtsbTixaYHAnK43rqQYY6hJyMt3X1ZYAFD4Ld2MCChbwm5ADLdv8T1Pa2swKFdQXkxgR1coH",
  "key17": "2friHZa7JaZ7FwgpzwzpMfSNTsteDgypxJ6Ru3TVK9nURkQFF6SgTEoFxQQZa5ru5K9HdcQTLasKTpyKMTf2uGAS",
  "key18": "37U5jXZdLwKjJL8xiAUR89pmYSm95ev6zxX347uRGU4UKLC9PDJVtkK9h2Vmvk1BGCUY9r3KZ1dTVX3tAqRq8vJ2",
  "key19": "JETsw86qf2hbBS1q15rDsBdi8LoRX8hxPXhu78bvYVSsoLTuWNdt3qMXwrUkzKZPTV8U77LYWounseKcG8PHTcf",
  "key20": "3PZLngEatUQakdMVC6R1HziEgNgRddhiHpe9yYYqvHbc4ViqWS7w6kaW6RLRXKJXjdBPLnhvA4qCTHy3yeJEDX9",
  "key21": "3dX4aVWsg3pr7VSnTtCZ4myncczq6i1AtCiTimpwCjT1et9tbtaULeJix8cyajnXYBESJn8g7yPafvC7XHiAeVG7",
  "key22": "2xgwmKR2CfD8jJGEFc7m24e3W6c56zAwEZsYbz2jnWPeVgjVRVrjZjkZZiBfCVNmXZcWf4Mc4eys71XG7xBveuyD",
  "key23": "47J9gWUt5mLAwqCCLtqBf44UMcwJHATzxD7hGkdsbxkDYyUCoGs5ZUwV2N268X4AMGJkZjb9jAa9wsNmSb1j2uWG",
  "key24": "3iaXXCm5Pgaxi7uxsCNggbGnLeMgkGy7fQFxQoTVKt4PFfw6Eust9B7KFuiHDxjhJ8PCUXXuL8RUUiujLmbM99MM",
  "key25": "2vTzUT8A64veSTgQp3F9mvLUpvUB8Wx1GR52wUBoVBpFRMz2NhHnGQHfYuc53btEdP24NKSbHjurjuTERa5yAvye",
  "key26": "63V2JmnbuQgTvMEtdHyjP9rTRR8fsYtoQjLGN9tWveov11d3yP1KXu9GSb9QiPSgLqDsNVZYU45Pudqz89scEEb1",
  "key27": "4UdHTZWhYPr6cXiKkeaRdKx5bUUUJdDwz5G5rV1nJ6SJALuxUCKQJHBbfnvKMMYzmVxWeTXJ3SLi6Zo2DiNDFCEg",
  "key28": "5ByFmpK8pHKnsEzSEu32hmwYEwyKecjSWinKnM4eeKtrPap2msUNUZcCnQtogh7xrHbCjLvsbLMH9bNDRpkaoWnH",
  "key29": "5zc1kn4HB8BydXkex9gYWoJze8JSm2gBio7MXTucARGtxFcyuUWvSfjhgLBcatA6y4Yydm51jfy6WgS5KATgGgeU",
  "key30": "22wqc6vxKj68druwkMVUueEEerT9nXZEgAjGdD5iTrCTAU56s8GTrR9onFWSJNiiSMyx2MLT6wbk6MFP4oDj8g3C",
  "key31": "3vReDs157FbdaxhVhHDC2mRiFCirHi3X7d8r5CVkM4kkVV7EoBRPtwwRcTz4G5be4N5HSepjCXFgBkyQAdYPSLoi",
  "key32": "3TwvaWZcvnZybGR1m9ofDkbgb8sLegrZ7h2W8aPZq4Eppx1xCBBYHA74ubw8KcLwD2Hoj69uY62cAEC4ztZQ6Txx",
  "key33": "5Nqh9f2XnDRGxkXNpLZ725VCFJ3hZQJ31WF3SuQFDnPBioD2JH1VK5gBW7BBKF2aQ2VD97PPYuxzvjV1TLe4A9fU",
  "key34": "4MJ5YHaQiBvK8Xhm6bFxyw347ms5SNJgen4jK3VqW8F4wPgk8GSJMQDGdVE6rc5VMz3gmofoHTBcxD7osPQPT3qV",
  "key35": "2BDqssvc51brVPqLq3dT57ZxTFBFRoGCSNLDjo931ooh3bxGRkXEDciqDaYyUU8RmZYaVX9N385BH3zaNvN8HMPg",
  "key36": "2UGqHUx7z6Y3xSRmn6rBgQq4U6dZkV4Hrz3mFXh2q8Wi3jTThszsTbBdXsTbnCFWUkcsxxm576kKGmLqwu8vgPwQ",
  "key37": "usKWFW8yvaUE4c1uJcqciuytbF1fzQe4j91qhaWWpoccqPnBpEkB2SyJr8rRsas9fzdPk52wZQ5cV278aptXGad",
  "key38": "4cCAadWfYMmHCWhYu1nxqF2x3BtwBAULtVTWHE1qBW6Lk95GQbptrDGXfwutAwXdr39ChYgo5akdtVM95ft7P1xq",
  "key39": "5rk9RMY6oMWnc1n9eTBsSCZQuuBPQ1zenyfzmdygtJBsjHNQ5R8uQJr9o9wQvYxMLP7WCyDDxQNir4Dbm4gcVKjD",
  "key40": "49rJ9GnqckXwoGN1BrBYbdMG1h9dNdndPZ9RFiFXRhmQo6rVrm2pzUsFETy85YcEATmTY5GjnK91LWW3BhRCusJA",
  "key41": "4hnkNZP7jVRsHoKfT6SjQaokwwA3pNEnrNkcGMwVSmkAMBAVffHSWfRs5BrbcHFNrwVDatmCRi8ivs6eegfC2iX2",
  "key42": "rwKDAY9H5VWyrTCey5rzJ2BCxwNs2AHYE1osbAKvwW8qZzLbwqfw7cWNXV28FPqboFbEuQLpjHEafhThMoYrj8m",
  "key43": "3dvCqWKiNdZcDeu14ySnmhi6ZsB1bGtCqZw4HuWrEAkMWT5raZEXfg8caeKNMLhnicNYjpRCSGEkNS5iKwgJCps7",
  "key44": "39FWRyv9U3yGhFsCKvARk42HJVSqAR7525nKQdw74KWiVSX74vPmkHV5P5LhWskpShyd5vfFKmuHAD2zxVNCvnvp",
  "key45": "4uxcSyEuKBXcZykiGTNgznyk6fGBh3VhuS7q45r6mLSNDBo5VbzK45XcXuBinfVpcqgAuv9YRLJwqda2Kke7bsjb",
  "key46": "5K1WfWTihbH52hoKm69gCztbVg96UrVxDfebiZUEzJe22RegSkBjxGkQ2K2QqqaHyDhEryKtsCjpzU7AZyZkzNtD",
  "key47": "4QRdfdvaq53pMrUnc14bteNWQgykaKqSV9Bg1SYP7TiKB8JMHjYbDUk4a8Qog16o1Rm3YsrSKF11FSzENureXnpz",
  "key48": "5ggXsEPHXBhRhuQwo1kAYh1PV9HK7YuGTiYsDWewguN245Q6cwrXLAYsicRSU5wYJZxXY9Vspr5xZVqgTGnjM8WR"
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
