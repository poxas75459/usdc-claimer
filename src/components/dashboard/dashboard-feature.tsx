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
    "3RgE356fK74k89CM5qzBmPTrHt61gk1d5xmjnrnBd4q4fUofY4tdk3xKqHswkR6ds6hMvKjsd2uA8gz8CqkNpKTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qngDBiPn7Y3U3wJUppJaDgQNJ7521brx28mahwRw56VXob6Pwp3gV1LtJx3gMDqW3yJQBNkWh6KVpuxrFgiwog9",
  "key1": "G4SFthPJRSgEuMqdGdVG1FU9rw2UGWxAFQ4KZtUqgnbnCaugfN6nYwoA7Jyc6NWAfjvEpU2XNbSoxtFgmvggYUC",
  "key2": "214XKTRKwznhYReJfUNGeUAYh42pYPyN5SB1GuTHvzcgTT3BssRicZ7DJ4u2u7fXQJiw6ApNZ282E6ZNyAyP5SLa",
  "key3": "4TkAdwvRGoXARjiVMma2HNdUn1yhnuuaWeEtA8Qa1fwX8dz69hgCeSPQ3Kq4XJ79uhpkdhpqsFeykTnoQrZazW1W",
  "key4": "2Dp7oaGDSwFNaWbuaeuFiz3mDSd8o5aaa4ZB8bqTQnDFb2yNTrxiUmbQRaQB3ehQP7JQ2nJXtyfPXLqP83VpdQ5H",
  "key5": "21vSK2mmvgsnzsJTmUChbiiX9ExHFR5Q95QiaSEYRj1WHXamD3o39ex8zTj9Awti53NEm5FrFpsNB9dbnDDvHdjb",
  "key6": "26DPLLCrFVzrMXWApMt1it3UiiRRpSrZWofsSXRckXBFe15Bq69H3jQjFEEUyvy83sn2EEAqD7e437YL8wPVoLaQ",
  "key7": "WQCKFknDC9Lb4uC2CBp4DUJAw8NyCS2uz6MjHSoSBJQp5MbUN1y9m174ia4TNVea5os1ib2gvpnkze4NpQ633UX",
  "key8": "2hni8aVdfkQFxFgkKaE8sqyrvi1mBeRBy9Den48i1khQzudAZQKaWFEX8L2pGCEVzciRMEWhinUW1FHuRiStFLru",
  "key9": "3u6H4McMHq7WEj4rbfHuJx6xhnoH9yUdRM1Nyg33HW2htoJMfw1zZJJMPwG1K1sPtr1MY1bVzzhWuHNGjbzcVtaM",
  "key10": "5dL6kkp5hmdBU2GkLsrJXWWm2Yg2KF8zAYzmwiJ2VgVLJ4DXJJ8R5JVqj2pYaCABeSvzPsj9YxWre7RRnWmQWyxD",
  "key11": "2LCX9RcqefSo6iSNQfxP3TpVK2H8ovE5GSru74eXt3vr9g3rPGwwNavNzEz3FZKUh2Caam11nqJSHvyni3GUSq4r",
  "key12": "arQdPN1u3TT6BAqMRdmxz14SAQCV4M4ct3CPrANPj694pegBLGSb8J13QHgBULvtp2xiqHgsMPekhMHgq68XJHZ",
  "key13": "2UnhYUutbSSQZr1hsn9j4M433fm2T8t7bWHTFBLyHrdrurTWyjQJkKFE4ZLgVTkU5t6kaVRDxc2zUZHT6sihb1Es",
  "key14": "4TzQgMe3HwbUE3MmKpRybWWKLDCNxQexDiJL5d1pykhN8McXP34sGwhRSRKJctYHiezS6F342q4pGMoSDXE7vc4q",
  "key15": "oBiwXNj1KELPWcezv2u8Xrbx2yhRVKNN5iVQ2R5tzvBt5NJUeKkifotvxokUVwbP6X7i4DtpGTQSALde77uWjiY",
  "key16": "3T4kyJzRDGijgfCCmEZ9aQXezsmf9zMmA8MKiYKcXAjSECEJvCPdarEzPQGPSQsbUfNUpYfEcnnynFG85UmERTCR",
  "key17": "4aQzQ4KA94AprUUsrFPFzux38SUUApqzRtaXCRyucVG2PsMdvcuMnD4t7JimNeaMdQakrBRzczXwZABVtBeffLUP",
  "key18": "4ka8JgHZG8CNw1eWdHsdmU3Ls4M4Nm8EnMdbet1Ay63Q9WvQmxXc1PqLwWuNcNKKxPp1V77yjnuvizCfvXyEVd9A",
  "key19": "496YTwG9oUNwvxZKo83KotbMPQqSz43P6a3JKbTZrihnJ11TePtVv2wc5SSC6kstmTpVPLjgF91GhVzkvFXxF4zx",
  "key20": "3pR6mgxQBVYcwAERdr6p8dAVXUQDDpWoV97WLmeVBdzTJViDrAbXEHfDfrbujU5LSo3KwUg6TtYbQPFZtxdemDBQ",
  "key21": "673haDfCYtPRsuFn2odYyS9Cx46ZFHz8xtv8KALcokJS8MG6v3hvvRQ8tUkNHXqCNgLm748ddcnUNkERVyjjTmm6",
  "key22": "3buC4mC2D1gWNwY6B8wSsYff14LkeP5UXszpMQg1agrcwv7X7uTfrYLk2mF8mXME1wAXHdHukEAEbndyjttusBtS",
  "key23": "4TNDMNS4Wm8sMzy6hKPf8bRcVDoUrMUJfH8RhG8uvrcDPme1G9QB5bxaYFYyyG1QH8LZum3yvMZWcz372uzPcmYS",
  "key24": "2k6Rob13tEHq97ZamoV4pxhuzedr4wr1mUXN5Yo139wNUyFRcsEV5RpoD6DDq9HkP2YR3QDAr6B1otU8gPc6ytD9",
  "key25": "3JaNVs3XoyT91nrLVJ3rnUWYQ5Tq5WKrK2LxQs6GgZ5AbRqAy8oVWumxQLZrk5FC1X7ZBFZgLvdyLBfcq9K2QEUh",
  "key26": "3uy9ag9yxHjPYq7a83912mbp2XdyEn5DNEcjZjhARR3Daun6zGjJSzTBDSBQYWJQwhsXNFbFjwWTkNZkvctuzkNR",
  "key27": "Nv6amy9K8njC3rNtDEACCCMpjgoPGaCBiWifGi7qjjVYrQ7ZtY3gmPJnMWF4ZH2c4qhhP6scerU5PsZo2RgJkAm",
  "key28": "2cRw3CDwn5zTM8gVgyWqefjvcaDHAgjzvMTysCrB3j79owmRSzKeoccMJdEZtDK2nbGGjQfEcDU4ad1TEoSJbSja"
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
