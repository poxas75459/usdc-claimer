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
    "CxKWVfQCRQiN7GjxtJHCS76DdwoESawpiKZJpURR3gtfdhB4PkHEGJAiUdoVwSYZ3xbW2DSgeCVPmyssid6m32k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hR32WzcGuhqT2DgwiRb32G53Vg37sN4u8CrLaZ158yGyxJFaYfcbUFDsBhwmqnSZmuLESTNHgwNtEZY8izdZCnc",
  "key1": "VRUynnEkNi7mrrWuRRzANuR4aM111E6j9wd3KsmFQd7q6WgN6actX8UjNbjuBrDnuTsMn1sTcmVXeGQzGYPqqLB",
  "key2": "4BZwsxxjCdUGN4Nu8T6SBBafgo2ysxKKfTyLMSomHo1rK5Ew3TCNjT2D5zkkf9XxAFCJzvTbhoCosFnu3xJa3YYd",
  "key3": "4H6Vh4RkuG82x11piER13rgYcLSSEZrg98aJJotmGSPosq61d3qNkBUg2k3eVk7hdJpFnbQ7mAY6MZ4rZdjmniEG",
  "key4": "5t96u146wSxjHUFcc8YEqnsECmtBE9WNRhxVVJYCy3UdxNsa3frc4qosSq22xrmHFzzNodxwj5sG8wfgx3Sg9VMQ",
  "key5": "5JPGXvN8ZVYMizenCWAqGub6qb3kXUwrtM47YbF3MywN8ydhiU2d6mUCApJhjqJFVWzHF27KRcRBzK1FwarBQLSL",
  "key6": "2K3MUMk2ted3xkbw4NNMjH5nDy8SCBcGTshFXBEmxNeSaDwgqT1vB65bo6gJbshyWnVxubvNW78PniJKPXkHuEZk",
  "key7": "3dxm8qzRq2z7BB62oaPgwdeNDE7G5TQ7dnwir7PBWcPrsLd6pXuiA7Evn69sSXtxMRDS5SpnAgNeCtM37ULQHaKm",
  "key8": "5FaVjC5uodXrza3mSLEtjchw8FHAz78RFptQuFcCebnvPzLYHusMMYj45eWouitv5M3jPY9Nh4xgTL3iDqabpBq9",
  "key9": "3kfyryE62PtXbeVtmKcEPDgXQtA58CBEKRQFMHTZJBNpcGWSmrq7biDKxGim7eonwWDnTtS1pGzzxYvbRkS7henY",
  "key10": "233cfugvD2mrTWdT6U1J76nWCkh4icJXJsuC7n7ocpFVqx3SdVYgKk4SXmRfAmTth6BBa1Es621T3WQcbxu4njGf",
  "key11": "66dgz7n3AMgwEzaSSyaeQjMgJhbhkhjesUDkqcFSUeKURD1wVfp4fcj1BYa7BUK6CDx4oQzkp5t38ZTzzv8YU9AY",
  "key12": "3hwm2ZEFL3ts7SS5jY3dgLQoLeAvz7Dgj1R9FvQ4SdTbaj7N7DVzFug8ENPKZabNSbRRdvv6hHxqAy6JirsLFRGP",
  "key13": "5UB487M6YYDkwtxdZSCyJKQRFuSZM5vb2wJsjfKmZVscXh7TWhLE7tUMrTPT2smsBriDnmfhXwsLUmFLnjds6Krp",
  "key14": "2LJDzJ36NzA58NXs4FhCtzau5BhGrHeNFzfRM3pQr3pbuHWA4PFMRzqfr1hzNxkPcy5Ay1arirT9pJZb4hu1FgFb",
  "key15": "2oUiVuSeLKcqHBdfcgkzj24nVjTjETLvCJTH6QryXMZyVtvKhFuqhkQMovEmEvbpLG6fW9o31P8GHufMuUbcbsyW",
  "key16": "5C4j4wsUQFdWUGUR88sQMMTsjiWnpWVsjpnX3YBu9ZTcH7vLE5xDtS6LL9KRVDS66z6CnPEU4xLoSuqx6H6EAQQr",
  "key17": "3Z51R54RR1wA3pNGzya73caCMMerFwJr14Ext1XuH4H73bPLgaudERqwmNcveLts9Ah813UmvwvuBnMPuZDx2L1p",
  "key18": "mnDFAi84q2dcCWtRFUWzJbz9NtBc3TxP9ppCRC7ub61UK6hV8LKhpqsFNfKEvmovekxBQvpPgbvigZ4zSQP5bGp",
  "key19": "27T7EyeoR9VqfPxCcchTSv2MsH7bQgMESH9LAsnjfixSpoW6YqqQxJg5aaVBMSnyV5RikVPdcnGdGzVjcPQvCj4V",
  "key20": "2bhRWS3m2XHXULE5joq2YNZLdD1H1ZxsqHZNW7t6Z5oc5QPDB5RuEr4uwaJptTHE7ectZ8BMgnLBzhDGuDBqMKj1",
  "key21": "42AnsgCexHJu5g23pJqwMfhoN8EHVpTkCLxFAcj373KwKzKiY8oFGLoxAhdZKhzV1YR4B7Wco9QLbCpzty4nJYoB",
  "key22": "EEH7tyWfUJCeJUYSYAsYaYZe9wZnpQ3aFzo734XDAWk45J3hiDgQKTyvtbTcc8WPuRjqwb1tEpEFBkPfWYA8n5A",
  "key23": "5N9J4ApDYuxGfGXP6gXxNhqouqvUC895sc4GemevtxXGTuchC5DhfJyUPFZheFE7UUSeC2FbrPcnFQ1sS1HVUntc",
  "key24": "2sYKtgVQ2ZKZq3JigCrrTDTMazbGroVNHGiv9687UDHsQALR7bUnSCQcmpSHCqjk5U3GpsVRa2DZaiFLdNRgM6B5",
  "key25": "2qJUgt5AUEKdXD9j8gZUHk4Zti4JTXWLWisiP6rrsmnFMErTpZrEyPzFtU6LA8HgafesWs1R7ibRt1mxSfRth8SZ",
  "key26": "HUpZ59J9rci6pQzpmoYVGRGiK9YFWoXw37qf4z2xbdN7P2ZeMBbe7uk4ySyUrkUbt7Lexr13PuFj7mcuQWEm4Uv",
  "key27": "2ACaj9aonrW9bSgTG1WXcfF5cAx6e3rarnwBSbEZDu4SGAsAdEcqCnxejsSN4FfnG6GBPpdmmfRcnCgjjhGFnZ5Q",
  "key28": "5wmk75SXYvEDjBicoHtQNr8HwoPdnUTaBxoA27NtGSPNcWC9cH6RRsx1boNwkaxpUTZsX2AA5TiPVTXvCRA1AWto",
  "key29": "3gejGNpcbnPMkYFoJ3nhdmgR1DouZMDQE9MTB3ayg3xrDSqmKuxr6kE55hZvUFRLwq8fmACk13jFZtwp2tuYRqAm",
  "key30": "4hnKA5QHjfFk6P9DuUiKHLA71eYLQSHKxAgtfcdSBkxiw8ThaNqaP9qLzqCjq6sGPrmiZrDucnDAzfQPshSWegGr",
  "key31": "2WQ339mcZmU1D521CBon5PaZbLpVonpLCv7Bg23NKWLChmntdB3ErojD2pVHPAo7vRoaGbN6cWoiAbtDfEk3UPwk",
  "key32": "pKLSeZQ6khRvPVyZhGjqFVJ7dRBzAq4Egsy9mncmuegAjnSLeGK66NoW8JLoLnR6dVEkwhGwz9PpsMf7gyuSowi",
  "key33": "3Zvkf7ufjReJNCQLmHqoJZYV9xAPM8p2a2fNrQRqsXkHoBPkuhpRvPAmspwcXXg4pvcfmkmLsz1iTNKrWLHi9aj4",
  "key34": "jryPdG9MsLYV47dmk9gBKX3oeevZbzYuozwau6BKvKoNaAbFWgarj1vA1EhuUWxukQ94Bcest7VXvUCzrJyi7rj",
  "key35": "427pt3qsZKzyELePvg59gfQsz8V2n5t79Li5aoarfKBhQusCa4vCbkE1zKh9ZvtXh8Hcx1WHHMsA4NDUuCWVoMp3",
  "key36": "34uJT2fy5RHrhsACGR1jBHciCPYJ7JArz8uUs6RGt9Q23QZQkxmPpqUEY1xZAgce5KVjN33KrmeZeVsMNdBMAuAa"
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
