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
    "64EWu1x7T3T7FA1LypKCduHf2N9HYcQXrW2eJuVNjGSRgsZWxSGL5baSgCMMxgckLbRcMvS9m71XVjTvk5mW2Ln7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67iNR8iu1kb8dPP9mvFkghucuqounQNE3syLTmcTUxXkSzqJ7AgDWNS6nvxeT6ewMKwm4YmXgPn1G3uS4BjPAjjJ",
  "key1": "CrnnrtoBTUaCoZ7iv64bL9nRjJAkPi4qzrNR5sdRRKLzkt7zksSWEahyi5s84JrGzzHursj3xbddHdGnF5MtxV1",
  "key2": "3EiVgMrcwPFVrMR7qB2b51BRM2o4Rz8KKBydasRkC6GydL5F8qXzBXZtbU5H3fbznDXTf6AKUgBHPeSYqJfjm5RN",
  "key3": "3E7zPJWnmCFbRTJ4naLELtdwFgaxFFAZFQ9W2cdQ17tV1ST8pgHk7PkiETpzMgLCNQmrPW1ynpQMtgr8kBXxqJaf",
  "key4": "5aRHzXauQF3maA9cAJELXxJeveQ5pekRYPzkYfLXn8JUXiNXgoGbqSbbGVjYz8AFBgnafFrVp64qUT9JSDTGeJEA",
  "key5": "4tVoeyu99EvCs4asTPqavULmeHtCp7jYMi5KggNaBztRgKbUjAHHUaz8dnLbik87uVr3vZBPg4GPp2gUWiAqpqrS",
  "key6": "33pyunDTQS53GwgEWX3ok99SJp9o5dvQvLih8kEELJwaBVz5qSax9mBFVWaA6M6cAdVEEDnK5pyepH8VgovF89p5",
  "key7": "4DixNaWJScTyVCkbHyA98VtsUFP6v8sHhMcFcq2sayLPfpifzKwv1p9969PMnfjTVGzg5dPUVFxMQeVkuhmPTp1z",
  "key8": "3d2VHQ94f9rcsNoR1TfjWZktRk8rS42ZA6GWJZASqpKUBBk9jJd5vh5ByazNSnLbS4LskFYhZjR5G2EhqjNfcDYC",
  "key9": "2q6hMYjVFw5ySDnsKq7Y56AEV1pYSwbcjCRDdwW5guwVxsjdVobyZAmaSNCbym7Jo19EbvT3XtTHhNxyMuNhhahK",
  "key10": "kihHoBtFGujqoNKdwDLFxdevNsqiDvpJ5zsNCXAsUXnGeDok3AWD298nPnr5KzX3ZdEdp1U3Ltdv9NxGZpKXjeE",
  "key11": "4bwiGsURFjXCJqmLT8HZfTtGjfWD3qrQxtmjduDhqsY4RQJuJ7zPbLdrHSRA4pdVnicbnXxBMjn1qXiu4QvawbJr",
  "key12": "NWEuAdFQmGeP9Uaid5MEbUifw43qE9xxqs1vuzDHGM6njWDb6T8NQdk4L7CikCdNEddd9Hjg7bqxfUPZ6nGDTXr",
  "key13": "UeKEhFiPMU193BsKYnGE2dafPzcPp974eTiZhsQ4yjAXgVKzmHTPLrxdi5YLu38YcHVAC7ifzgP5hrKAqwAiDi7",
  "key14": "EBU8p6Jfwk88mCe7EnsAn7fUDUjvt78JpmB6cx3ebsiTPnJMyQGHAKHfQGuWDeXywBdu9C5vR3hXAZvP5GnPX9U",
  "key15": "4ci35y3Y6n49dWPjRAPXmbe8Hz74EbfppbYcMPqknzAHaNCHyHhPBD1ey88hbyinqT9Fu899z8BDsqjnjvFBb71U",
  "key16": "YWFmh4zNaE2jQ3A1r1t9b9TvGiomYBf9YwbXhJzJcC9E9Q6m4JUHUM7sKJivtqp5FHDDvkm4W3cYFczMZrBb514",
  "key17": "2UMj7E7DrTd32xNa57zAMzRU3Rh4LFMByRqhrREJM3h2D5X4ZLWQTpgbsEFk9uMzbiAt831eBhnnE5NEYCMGyHKf",
  "key18": "fbVjPGWs6C13BtySHLjJ82Pw1GjXg468PZUMZCrpnohnYkqSFBB5mbnugyvUSRbyYdYq8Hee154byH7jNqVXo8K",
  "key19": "2emsuenjC6rjZc5K6L15hYXJszso9QFVMec3kBcL4XMDfvX7Lr1ZmTWibeJXEAeSWUwAmDqpH3UeJ7kpH1WvBaQL",
  "key20": "36iqGVLFew4TxL2VQx9FzsEr84bF4g1x54wtLDwMGom4HYhdavd2gmCcNxec8PSeUpq3Sx6f67yRQAHuhJEzJ9Fa",
  "key21": "3gnVKKxcq9GvkzmtpsZQqbsPPtPrPQbZmiZKwAWjSRovBUDEhYxXAm87DVh495a3yD6kWiGJQL1juja1LFiQyucC",
  "key22": "4n6c4sn1ktFfeuqHjE7wd3cmoFHGfMnxMHQSpfD9CfUyNpG3Mo9h4rU2FChwGvAAtbxDSjhKmzhT91ec4YE1esuX",
  "key23": "aVeyLDQgaz9tgsus7Mv778tmfSVGRhK5xvqGMvx8DXnKvJh3LS9dDFQCihBrzCCnf2Sm12RuiuYQfPfGVBkPSq5",
  "key24": "3Ksm83vGCwWYwJzGdjaQstCfpSwKNcSqX3m8xKFCxQ5NKyCvMfaBUfgKZ4k497qxTaXVZp7CrZxR14UFoptYnim3",
  "key25": "3AmciBcpMNYVd6aUri24gcNrGEep8QSdrUEzk48ZsZ74BoGkGszJ283Us9WXehTX7gPuJqpezVXPUzyCXi8EFfgn",
  "key26": "3nppwAQBZ7dQqaZQQBUbHc9crb7X782VKzmYrnQko9R3BwdBQfko9c1kyFczZgE5opoBXoKy4rntpUPM5C7yNUnY",
  "key27": "5Mm8aSufAsj825J9xYhLNymZH8ytYTafcfiEBsEnmbxAfnUbQWNxmMXhEgdzAutJsBptQqi3dDW362MFK2odxVCU",
  "key28": "3LwjUVxJHzFXqgyJmNQB8Bv1cYeGTpfV3iwCt5LjnjD3JaQYmhV1TJsEpzRjuEJg5HHKr9vtBUVvAqDVKUEncjCV",
  "key29": "bPJDyUeUuumjFpa9St5pkJGEyQQToDxMQSpzA5mRQnZstFLVATorihT6BJZAQn5ZSKkaMrGfwVJfhGZoKPgt7p9",
  "key30": "28BeYQ9CzsS4qWYAdXJGD2AgtXP8YEjSGa6TnZaNhxpyn5d8yNQNeTeMPY7DDLLPDPHJwcrM4Vg7cDgoccabx5qR"
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
