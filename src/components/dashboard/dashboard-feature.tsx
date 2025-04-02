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
    "3qJhhKJRuwd892nMpLhGY4TnuCF5A3zx7rTFJs1SQrd44YpW9oAHWnsCASN6R5nZvi1DXZXp8CZbcoGMcJtuvVtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wz9AVKEQYDHbe3Vqfjp3FGRR7778msaTrExEPp5ZqBydwqkBfBmmdEMfeK9tx2MeoXRJTk6439xCi3cyDAfdQon",
  "key1": "2R5rk49JgoJETJt8msxFVCz3WPRoydfJ4NWzGjswJqVKZQpWwiRR7h4dD7h2dGJ6KwXZ8kcgDKaHuvYrwWDkS87n",
  "key2": "ZiAt8exar8JZbjZyA77BaedJ5m2RZUeX9KVm2Gjbcvu3bRupeHFjUJAp9u4yCJhKv3zq4pXSSpyiV4ygJsgQBUN",
  "key3": "5Y4HsLsvFGy7j5xUU863X3o8NRccuRmxTuRgP17to4F5a3SzHTNjTwH1vwSHLShg3ZFUbKHRpBiQRjYTgKuk47fj",
  "key4": "SVYrESrx3AtzyXRW3BEt6CTkh3fESPazUi5j8rMsdFxhXwDsVZv6AbacVNU4j58tf7eH7ETQFAg2TN2xn5caA51",
  "key5": "2YBCerNXnNuEk9U8vX6tUiFBoaLSnbW5gvNyBfdApUYNMR7uGAMyxXNESEWzPnrsgXRncoDPhcvx5fmNHADHLSsZ",
  "key6": "AFbiEriBZz2qQi8BsqfjgPmiyq94WJtmucggxeCWmdYKPbnxHPCBRen6nfpyDmekWF47QVicLZU5QvgAkJfqc88",
  "key7": "NR2ofmuGcZd2TDzTij6VqNpBERQ8sbraw8dK3SFdALUrq9Tpw8YLPQ4A2ZCChCTYRjUYTmSCznQ7x7acy4fUgic",
  "key8": "4oV6kBBzQ8xHPLuVdsph4ypcue7xiPMc7WV568Xzah4Ge6cfMkJQ83i75rEvb7K2haWcvZF2bjw1uaSkQFVSJMZ4",
  "key9": "5qkPS2FM2kNbwm3g479rYkyZqijeXjEDALvdiWcWxtGCJKtsfaMsGzvHFL7BPxxTqXBAZyGvtFgK7kVRvtq2NMPW",
  "key10": "4X2AjrKHmFY1HKXk8ukpcWfUtbJw2NakMrcSnfsHB7pSeGjvMUNBB5qi47cDajyU95B5v1oRKCp7QKvNa2R5B34",
  "key11": "5HbKArFf7TDPnvQVjRNudgxHRoDHLzzY3SfTHpZUpz1FTZEzQCwkhqWgw9ruNmSs72B13KnCsyfmC69Yx18B3kPf",
  "key12": "3Swvu6zjug1YTUCBNK1nQ1DPdJcEsX6hbFYpTuinEX1xYucDV1TvkWmfjXAAwNWmz9Xv9x1wNoz4VdmiYpjJHT75",
  "key13": "4uWMALYTJhHhinfsLooVsW5XukcjGtZ7WjScCqkhNnBEt5QRbYf6d3crZdxVjmgZKbpjsPthRMpsf2ego63Uiq88",
  "key14": "38fWmpByw5JTQLJghGjRaGWoHAeaX1HsAkATfFVJBCqNjTmwrjGRiKeErPiaawbXVtcXZKXzufVGjUHv24vNopXR",
  "key15": "3DWGahLSMoA4NH1D3sa1nM3Yn4AJYZTMTeMayG5jFHS4ZopnyRepVjEZvVyhQPXnH3E7nYHQKX3yaet1MAJsMand",
  "key16": "3w8ydzG1aB9itLTT3igx4XtFuBigmcaas5mnJZWqcPxBwDT8xth47iiz3Qf6ztrcW3fhnQNALpA5s5ykhkTnfEqn",
  "key17": "Wy1Hd2YtjE9Vt2sstKvTZUdf5CQ2dgRVANg1NhRJWT5rw4rXX8uads4ndR5RYEyBg7Ws36HSBNGoehwRwQrzYSU",
  "key18": "4QQNnu1paJV1kUscN3FvoU5Hn7XwarddMoWwhZB2VtopbqXUDdiGESnwTbuTNpVycxYC3fXU9891cgym9QoYCzJa",
  "key19": "2XSMKuY4GdrTxpfXvyTkfLgjA5ax74eh78jnC3VdeWMNc8M6Cz9J94gb1hnKDt4nhQSEvC6xfLE2zmCWxmURTE4u",
  "key20": "4WbZW7omsGRvZSzy92Krsrc9KkqXCCiBMPcEV88YqnxiD7XcXJHATF4ihFkv1e5Tb5f2ipV1gJo2bc9M251NuaU",
  "key21": "5HvqcaFmPF7nFnKLkGZhXihWzb8AuV3bkwyRgaSWXaPH9ifQHnbrNgeX3v3EWRXUrbPZKtxi98ADXJUBNhw5pUE2",
  "key22": "2qZDLDeNzo3LYSEmWnBQdScaDhM4NFcak8A6LzFfFCPgyqsq8jtFxYFbwA1U4FbxV5taRrf3SY2jHmWWLrrQyNLk",
  "key23": "3yHMggonjxuSqhbWLrhErodVu9Q3kqCcCe2t8DcNJYMBBnAxuNuLnM2RKkATNkDhT7tkqaL6m7WaMpkTEAEn2dFL",
  "key24": "2iQzy3ugQQsXXaaV5StzbiLihz8gCjoXbGxo8zcBhipR3ZQHctiFfHFfsfRvWWPSsXXamWYYTZhxqPHWpYatMEKn",
  "key25": "2NPGYtpn9NFhwkzc8Af83NhTHkeBqsiy6PunwkxXzdM9Vb3SUNtMy7K4p7Z8c3Ti81sPTeYmAiy62NizwTXMk2aw",
  "key26": "3Njpr1mqHTH8kGHPz8j53LEAQBC5RrC5DbEKP4WwgvVCtaNYtAGusQ4wrdq2y22wswEKYsNnTQhUVtdSQtRaJmxQ",
  "key27": "JRrCJZp3d8ejf4XDay8qjvccnxZwedd93vxUw6HQsJa7ie4X22Cc68x2XwnP8qcVNqLaLu9bwbed4RfnhUGCSXF",
  "key28": "3NacvrUyhfk3hE7xpfQPQgvK91xsP8UFwPnA8tKB3J1DcCSSqikD9RvsZbKguLgQ4QsLV6txS3ZYypMgwdfH7r4g",
  "key29": "58ZVsEsmk6kF8PPjxj8uwmaCfYGjQxwMVExgUeu171qcYsDSgs5nR1oFrBPAp4EL1UCYXQVZyQN3y2SqaQ3K5ApF",
  "key30": "2LzMXgfwaQ1Mve1PU694L8FL3yvDBgCu3QLHHHJbkgkkL7Kkrgk7oZ3coW2bw4Qnv9o9E6PfDqXFfD9j6m1b8y8Y",
  "key31": "syMBNrbYrTR1wiEaEWZYmrwH1FqANQmAZqootqGYC9oCTk5x8KQBih6MeKwRheJwGTq6axDktTVXntT4Yzm2BFZ",
  "key32": "5fd9FmVHbhjixtPdBJ1YHjFSSopVtpqHVXpPu59PfMGjBeqmsqxNSddsZ2YoWwndkuZ7xcciZ6WCpNLkHbWnVaqN"
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
