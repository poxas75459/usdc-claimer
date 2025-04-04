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
    "5dKW57bGAWBGJaoJy8jm7c8j8ybSWdxxxzf2iwrXRFFyk6MSFFE52GHsCWBiExNtQ7MKgHA2CGXrE3jYyNZgy7zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FXqBWAYZCty2CLfy6aMzDgcfYaFzUPrjKTGbEHZ3SAsdT5t1ra62YCe5cy6viovTefwCNqM8hysx1rmzeRUP1zN",
  "key1": "5rfmuhTZhgFmXexrpeJWg5FjW84y9wWNRiTkXbEjhB5y9ruJ8UWMu5wPy9vqeJDZzZR3ph11EkSmiuSeXuE8C1Rt",
  "key2": "5preiyh18hw9RKDgDRaJq1d52pecKwmeuyX97WAdexa9hDGXxSk5BsjHsDii81weVcqDfzUob43wM7nt1WGHBTyN",
  "key3": "4RbnWqRgqu5bYVAB9x9Rb9SWTNtCavGXRJRPF2hLyEjTK2kQDQsLJx1ccxwgq5vnN98sJZep58fvoqJTWGpDEmwJ",
  "key4": "4WDLgQGXpmnD8yezo4op4ZAQEKC3n2wGmSTfRC576rBEQCX7TGhsb5bP7vLkZ19e2BNE5UPcnJAw37nsiK5tnHzE",
  "key5": "5xvtk7KW6rkLapa1fcqH2tTgfypXeorGuhDbz2gDbJ3wwFxzAZTvs9To5pDob6omYxBGyp9EYQjBVzo32ukvXS4s",
  "key6": "37RhXqNjZTXENhgLeGQGN5QXwYXPPRgapkua33ZCUt9E9aWEM7R1NN2aYbtAyNj4XFihRkwUr3DfevsXM63F3AAf",
  "key7": "624QxxGvQdeSW6NuiBh1L5MXpgmVQM9SaGFo4TMNUYSZCNH14d9UcRvpsA39WztoMZdrobKUxM8L1zihxsp8bcwc",
  "key8": "4xSNtdSwPyhiropqhnEA2LdzcFyjvqRvgMZbsCVJz9A9pD1zCsJtJhtQDDo2xfvxiYBviksc8G5YrwwspzpVPG2K",
  "key9": "dP3NUYyhu5gwxqxgEoHnwNdgviAf1dXPiHds5cTNdFk7gFZCRnZeYXxEep4ruPhTShGjuBw235q4xCyRwMWKnNi",
  "key10": "2S2X4z9asE6nNZ644aUknffCS6fQwX28xEdycxj1t9yXzqFGKv5bs51DhMuBcL2ATCifsdvAJ81D7sMVR1s93NY9",
  "key11": "42dz8p7e8JMYktpozgCNZsTh3sDKr3RR43xcDLMLnNoSFfqFfyieppaXwTFYPmxcQBR4psMBDsKyQDnCifYigia3",
  "key12": "BLVvms1NnD9ccEZ7cfUJjnJhiRvNzUKPy2VzT5het8EAbtXcjB1VCGsZPX8z4YsKNzxeZMUXNB692qrRbd9gc3w",
  "key13": "2ep8wX9CBmuPBPMueYoNuQoitLkLpDong89vA5RYSjtw6SQiBsoLz6E9tbWqVb3eHfAyeeZWkjPWKwiTrGUqSQtH",
  "key14": "4wDD4Xzt7MXXHJSW2YYYEtpGmxSot2DELwjWUAK98wAA3hxBo3VCVzNXozSYqt4FqLPqt4x6HAqUN1vtYiCQiuc6",
  "key15": "2RePagiC4x8WTYELoDYU8qDFySxbjw1srjkeEQCDMsT3Unzv75NvMszEnqN2mJENnsLBboJfBNX7qwyJFnBTSDgv",
  "key16": "jASf54femaBQCfi3ZGWrEAYYGyuZujTvhXUFamTeoHvAUuiDvZtXuUVhFnVQEnnmqERvqEfzBZhvuvoZsf7RZ11",
  "key17": "JZPR1Prw3NVYXp6nQar7DfMwtnKJDfJ4ZSKV4BiNZmp4J5MsW3rtK67p2i2sEE7eoUDipDqmMorY5dsBXctgUft",
  "key18": "2g4Gmddb678hc63Qiw7X7inA6stbuNm7sVkMvP71DVSRd3c2YXNH9GxF8rHnYWzEdJLmhoeDMWSRqJpa5BQEhSv4",
  "key19": "4LdBUMy1sBuV6d9LLmDUH2rPzSRAZ3XBLSKd119FXQw5C7y4BJVig3ShErFyyKhRTKYYtVxG5PpqJaRRfn95mv3m",
  "key20": "4h3WraBMww74xUzffNNczF7kryhgg5gzAUk5p5goQvXYBkUvKy8rnBGoVc1gzaNRVoAvdkcvmAzCYMrYWSuXmbfr",
  "key21": "5Ps6HSktR8ZzptNVHXSpbc1At8ur1d2omo5aiPyynER2dFtQAfBiBu7FRWA7idiRS2X6KBj68sbynhCbMP4V7dMU",
  "key22": "5w1iRww9G4KdnuGBF3s3pAmim3Np2C3gKbpncU2nJZQwCghnFuqRQV8RQQYz4Wosy1DhEGVPfQq1QuW96wL7gVqk",
  "key23": "2MKrDaP5hgjXVM63JCHA64pmoi9kRNdfPiQXVoBwkDEVdrceFytS3fWgePXJpmzxJW3jm79RTx6NyYKsjnpKujn5",
  "key24": "jEnYmKu6zvbp6vWeWkWf41VHAMULA6CrDrJPQicEcv89rUQya4usPJxCmtNZz32Zw7ts1LaDkEK4AUnPmiQGKiz",
  "key25": "2XWbc1S4C5CeHKd1ysEDJhMnrovukCncFrbyREs4tZNXZgQB9K13x8Wvr7oi3EhoFt1tJeg95MCGiC6PyHh9prWZ",
  "key26": "2oe3TobVz4R6MQucsvY82uydK8qzCbQzXjve9PUZfve3k3pGu5BEwwJEaSAEELH6waBPinXSbU3VZNas6yPehjpJ",
  "key27": "5K4jcxAPbDEan8WS9CEAxCK9SKBc2F2wnvddV3eRA9YAhjWM8Ef5a6QDiE8WoV2XGHzGr8Qk4WK7fsTDxkgLVHPD",
  "key28": "26azrF2c57TW9vNa3Maqzn6LJzzAtXyRg5VNbzUAggJmphzyHRSUFarFFrqz9azxeydMQsEjxoQK3qgAWFnZ1ig2",
  "key29": "3TdBmda62KKmMu21RpANs2RgXLuV7t7HfoVbDsLZvJ18gn2CMBTuywP57wraxbLaU8czVNsdWt2GzPgVD6cdEANg",
  "key30": "2JC15yZteGhqB3bFfmjHq7F3b6GCVCSZph8e4BtY2UWbQpnVoa28XVZ3Xo5NnLS33HAZSkSqFams92Qku7mUyVjX",
  "key31": "4B5XUDD7VLM7gHXzoZmqsL29ZX8BJMPJYa5NXpsjc8jwSyd4vUm1Vx5tKUCSaPxD8E1BF8rDtaRTpCBPK2qNY1Sd",
  "key32": "2BxN84v9Xepkb2iVANFzZf3VfXwmftoqyAp68FmMz9H6r7sXJfvguPdMX46wyuEmymWV6r4k8o2vFQBDhrr4HbTK",
  "key33": "4JckaRFduZ9CR4BeGL5fBSF2Ea1fGTZ6DeZBFuQaxA4wCnAbP4ixiWMoPtPwZrosBJ3pEDb1iPGByFdAL3x7rDC3",
  "key34": "5fYFNAtr3XtK6CP3co624SNtHNkGbAn4zSe8k6VjCpDEbnV1CF9zc35srcpeA3CWsS2QuoxpzNYoKpT5xme1yPZa"
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
