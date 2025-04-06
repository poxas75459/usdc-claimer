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
    "27KdPf16egDemhmzFcctdoXgoBtj33w2huLjzB1yZCVyaP5eBdRfGbXnDHdZinjV4BPoMdXN1qNPyeCXrfpVtPd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1wVtW5RoSMU3LKsLAd6NtbaS9emYbDzupQPpaHBgZtARmNfeatyu85VydKwQNTa5B56zk22u4PbP3wD7QkrZrXY",
  "key1": "2BpoPnERgNghwaiGxuAuYJsseR2aGfBvMh8b4ZX5w8PKvuQPJ7p3krPjeYCBGW39J85qEFFT6d2v7VFHxRHtTenJ",
  "key2": "3wLRS2WrMYh1bH3s1qPYP5YLxzRHHyspoHGw8fsBoZfugUv97c9YZ1s4spTV1LCKvEHarNaNp6SRMokcEmWgzyq3",
  "key3": "5b3XWbQGz2pza2odnMNLJGMptkjFk9DjoV3Xc5YtRiF9YNmartZHiJy9swmszvP8VRiE8FGuKJpgZ4pmE5iE6Pmh",
  "key4": "3fHHKNFXvRGtqH8igJtDgDLw7Tywecctka6379cfVt9XCN53fsib7jPmqgX2kFxNKXP9ksghRcgiorxuhyoDzWhr",
  "key5": "b6MpN2xXnq9XN3JSqpS1fFJ3ymPTb6UhVpHnAMWHNiyWrbjzTE4BwCcS4msYhVPUydEd8gKHnivabHc3t6Ros8y",
  "key6": "3GigQAukwV3wtiwbiC6GPFkR3m5AD3A44Hv3hpoG3h2CtwTiSQwe9DAMZk4oo92pYXDJAfmrfPYiCMZ3RmVSxQWy",
  "key7": "5yPRaYeTznrgosvKbrvXME1KMtQgNwvVfqAvWKiGJYMCz6SR3wW9fSU4oSDB9Y5HYno37M7n6qYRkPs7DguHdPHn",
  "key8": "5hqGnFFf96GZkbGNj6idFt9gjyBPZFx3HPVWVEc8yT2notXLE5Lw6ShhzJBPJv99QnZxs9kcdtri32g6hFyotHXo",
  "key9": "RgZJF2oHLRw3FXvxqzsxckjoDnPtNocBx6ppuBeafM8h9e4BFTTi9AE8aC8CJyZEiawvmHdBYtWj92vCNCaLT9u",
  "key10": "N6ys4tX1fL8MjEtv7LeZx55V6hmdm1ZBubqmuiMSB4EA8s2GpEzCbUFQEc8vwEKszFNG2Ww9ryioMqHXHZxQCFk",
  "key11": "5D8sfqp8UrNXgqJpiiY7ahasijaTi7PiWMQstb3F5eFjXnH5DHa1nfhXjh27PQTJQw8Li7awvckxAhu7F7HHEoqc",
  "key12": "282efKT3qdfVuEWtBNZk5FRpszhigHzuCjcecziRrHoyoebVqdDihzSpucdx4ssbtBeGKLqjhJLTKzp2GFkfdbFJ",
  "key13": "SYyZMETgJEYfeHHNqa9c77zYzh4CxWved6ua7QnkwNvGmHytFRcBSyhHXj6HbgMxvvDRj7fjgRxRP1WXZRGZ1Fa",
  "key14": "518zbETmqhLZ81vuU5yDsS8bSu2VDZuqvqspVBUpR5aGXvuA7p99bb1J3KSvRiEBWAboKi2c5knG5XojGuioEbMa",
  "key15": "5UtEyf8b36K8snc1V4XKbYtGrnEUnJ2QcahmX4oZbCegNfR5adqLA6N7JjtPPGWTUSq8uStBck3AtsUEwKCNKidc",
  "key16": "ypZVzm5ZwUHt7AriEXsXr2SLKemhYZKZ1cpbUU7yg1geAv4BAy1L6S4Akc7A9eFD9TtRuJgNe28qomrCrxgMMp1",
  "key17": "iVpWZsksAQhT49qRZipHLrv1BJni7MoXBVGf76Vc9rnJ7hrDURYU4KUM35jH4meprNLvinVVhKYH6k46RzCtFxQ",
  "key18": "ubS6zSy2AEsf17BRKSg1eZpc1exknRrpsUoQ9su56TWTaSMkQS8WFXhDHpP99S4Uk4b356pUSeqgkRpc1Rd72xZ",
  "key19": "UKUGDNjYUeBZHPQc9yJUNWrUKykADNayC8QQzpx8S3F1fW8Lkr8gB3zW3oqyin3zoVy3pUrUDmwaakLM41NUYvG",
  "key20": "4hbnQagpQPShVEWJaeUuNUsDiU8qwvKHwv7G5F7Xmst4QjSa9RnTAnc4xRHmja2XKJFCHUh66UM1Y9F9Uas6DMjs",
  "key21": "2AfRkKaajiYCUWzZZNJDZBWMJW5ssutdFvs7yibq1q379La8D7M4nvBSFeSSYALdQ6qnyeaHg4gSBsYxvHW5Pcsn",
  "key22": "5DwQqv63Dw9BgAnebmEZq91p68yD35v3rD4Cg8FL9D9N4XYU4YtFFygjqpsxHoVxo7R4Nn4dbkFaDNiY29qUM3oW",
  "key23": "5ENNtgT8UmCucnEpgQAuMQPQAuzb8Hunhmj6LxYbMCDK3XgzKTz1Ja5nLnhGPo4MJr7L9qQ6vVYcrJoCaMSEmdU5",
  "key24": "4TGuwy9e8kNaZEcc88dDEM9McjYytB3WZeMa4cRsvZeF4AJG9gWee1dTzuiokzbZ6cKi31PppzhysBqR5Q1MnWtK",
  "key25": "39oAQ82wy9dZUw8Fh8J8aJQ2zdDStDDaRK283KPKJdb8FreaQuQ8vBt9BGcqB6p7Hb6x8AC1TpHeKzvUvcqVwiNu",
  "key26": "3FKtiSFUDymxhSojydq9Y2aGWLBQ1nTcmaqvQmMKA62AMWiwutQqFxsGJ2jTnsZ1KkaSweWpVQDPC1vDLzMTfUbo",
  "key27": "2QVevfoG88CpGksf5FowJZBPBqYEzBHypV2XU1LYq7oXfijYSbCycjEPtknn9is1V32A7i6wMhw1cUqMZNWiwoSb",
  "key28": "56vVJrRbmLHknyrFXbFCHgiAW1LYfXscuzEkGGo26hD68nWvTNWZLT8BFzc3heiEFcsL6VcvKWELq5dyh7N5kMSa",
  "key29": "4NK5EDn6ZjXD4x9pJkyZ8XsnSF3FbjkiiKxo2Rvm4TWpwj3kgXsgHZHoGHcWS1FsEz48cY4pLUPiopN6UWFDRcz9",
  "key30": "4hnHmsSr4yjf6JhVN7kYT7p4eBy6XwzvysRd1CfhFfTBKnmPmbaJDvRtoKVMp2pegMyTQMao4kPg22S2Jhvw6ZAg",
  "key31": "ZtCFnYLLjxZCym2AENSQYmwAJS8xsMhZTokqEBvQVmPfuN6T1PN2FzEaRAYCyguzqLpHSYwdjawYHXaVKkEnpcL",
  "key32": "3gb7VeQJ67Kvw8zCfpQ3KDJv1FE8JtAatQTz54ov4Qc2TnsVbWjKd4xWdjMkc9UVmPxC1R7xfpNpw5mxk1a6zfBH",
  "key33": "5FGw3VdNumJPWXKJRyoS1aJ4nVQSj4hnirachowa9rnVuNgaAcdQNrPzj2vuncboXqkJfjymPWLoTFZneeAbN79g",
  "key34": "3cXqWrVsSSY5RrhArtMyzbDoyt5KwREqZCRjH42DzvYjZnwy23bwm8fNkRy9WmwZmvSk9nzXWh5fqThu6d4x1Lxq",
  "key35": "3cvnW9CXhSL2zU49UTKVQJ3EznTmsC9rbN9vXXBE4RCrz9emnP9B6NmashS7nUvBfeUk9mTrvF3znNXQDmDhm8XU",
  "key36": "2s7wEYJbgDLpJZ4f3UgtgpwSmp2Ri35KhXtEgaXv3e2B7UiC1m77DVW7QAHBL896jimy1CtGLnDzr9X4rJg2Fe4Y",
  "key37": "2ArWDYFoMrKHYHZjDbKUqo6HWL9fGT2gMsmpUJKrKiXpg6orSupodFCHbLTiyMdtqYkk27jvEAZChZzHqdmxxsWi",
  "key38": "2EcdR8eNzWMqcJp1WUcmygx5hg2ocBUq7Du2dBy6JEY8Z9aYxQyxs1nDdBLU6LqddRKM34fL3Xq2KSSko2pkKVkH",
  "key39": "5sTSTXWzkqHLwqqEfkTsDDQ31QNtSHP9uAhSpTXkRN8gXHC6sBbZHrK8ihj94PWFoLKFWevYsDE6Auya3qY5KnJ4",
  "key40": "JyWvHq6tdzTd4MfjpPGE4Y6Vq9Es5yzSxthEwMQVskdYBQN4p6qYGxoviQmjTELUgwxqWNYeR7wecjada31ia5R",
  "key41": "5s6qe9SeuKjMbReb28ZsfZJD5BaanPCLeSFA8GMvhyMGUbB6PMR3RgKStjNgWFKmbrTSj3z8fGGPAuTtoVc9wvSC",
  "key42": "67Fom48SoPS6vnf3E8fbXUdMJebSotvD8wHnL8J8MAgU6fcyFuLT2Rcvx8uNwk1AwYmbC7WQtbszZzHR7hmUErTL"
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
