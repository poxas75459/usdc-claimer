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
    "SoNY6K8ikfeeWEDmGvAj81MwYHAbnKKVAXsJCTKMRNwLEuv6G3VGMaLGJfFUbkWcFWTqcJaBygdShaMiQAoNc5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37yCUb2MRuTEeirYS18yJCfhyTc8peYmnSTB2c6XLmpPw3sL3S7gAZeYP1ZXtPuQKx7Ds7mS8XMkxdtKRMcezCFy",
  "key1": "5cASrAY4B4KqbAnBHZyWbQiMT2ES3eUeBWpQoEKoBRQB4niQeVn8x3fHB5dzXLEKhpTR2p71kjcxsdDAvWg638UB",
  "key2": "G1CJQXmPhE5GEjmHdYcwG1n8ZsJeMvm5seQBiUuXCxc1J3EthrxvzeGjQzkpqJSSbuea3jL8eCdCppS8d3eSbN6",
  "key3": "5t7yKKADEwa2ycRBNmxcF6XyN9PVkjSByUS1hwLP3r4ytwpK9Bqgm4j6aPQrgvJgRS5yKiMGMAgYYwKRv3u6Eoes",
  "key4": "44K5J7R3fqVew93rLAFE3uPriiU7WEuts7LWtGkWa6tHM5CQRgyaFmG8vzf3Z8o8VxvCNDmgKMx3T9zHJqDBpY8z",
  "key5": "2MSjA3YzgkmnMNbUzaMxmeNW7T7bD5hCyxHGKdgSKPf7khHgWXpr6u9JLEjPg4frzH1UgtkuYzNiXmovUuGk1Sin",
  "key6": "WFbduUcJQ7XhcENBFGv7GpbdHa2gz2oQQ6gx5sKGUjdYes2TRdBHgrn1M2uz5tyN1ZgcTvPhypLauK9pZZvax17",
  "key7": "3xHX6qSPTpEbTQdi9xE9UUvKtaPVVeVqjZqcHEd8dqFZkAfMNwgAiJDwQANwXYxNwWtAuAMde6WJ8qVz2bYjLxJA",
  "key8": "4MabAg5uzLGxF2t4GAz64xdQjA3bJ45mCtmDJZAtdwzak6RCi8JT6TvQ4oFRLohFwJs3zjRSD8GieAiggenpKTjH",
  "key9": "4LDwUD31eJvMLxu1sDWungnQWebstJiRbe11BZmoCSVbe2FRq4Ei9MCpKbd2bwKrsDmJUMqD6X5jPFj4UxLbBr3n",
  "key10": "2383pYGhQksyzaLEaCtaNAb9Lr8BgBmBsbjE88PkmGr1qXyZgcGH8yJByF9FxFfxqwiN263BS2sTAtRq5vCb214n",
  "key11": "4ZUPVKAkrRpFUxNkMp7ssnLNq6GX8N3mn3tbVfF6K2t8hih9XWhsPUb5h9GKBDoZH7L74tuxHTuBfeGNmGhsuYMs",
  "key12": "5bkLTyNuo5qK8rq8XGFjcgvi8poyovkYWM6Xzd95Q2R1PxKqeavoP3dpnjKg9jbVUpidgYAwLvjkUfhtsEyZEb8",
  "key13": "2gqiSAYiUT79Ps5HUpiLjaY8sm7gok6vbsWGre3c1yp1RCjAjtXXuap58vcxDUYA11MNArjnZXKdXLB532N3uEEX",
  "key14": "i7ZFjEdqpnwr16wipZuqYG3GJF5gZA9AyEzWCuuxSwjcghbvzzZFNkWbHKMAAXjNQdFembMjMA1u9DPBLahBGn3",
  "key15": "5e5Cfrdmumhj16YsdW2CAVqBJ94HufqJGhNBHAMYGtvWHC1EVq9GBgMRJQAAgatrD8z177snsVBdcJndjVrUWpnu",
  "key16": "3MRaadEfkTndgUsfn3SioaN2DQGfz6v8hrWadzP4TF6ZH8T3NN4XgGbGFj8XR14nmRGupEhK6Da4iiCtZTED2giA",
  "key17": "2QYcR1UP9E3vgxEr3baHr5LhxtWweWJkTDtdWKR2F2kC7pXntDd2DjxWMFXqbLzcs2HA9MMxeAozuj3wF7CDJWZJ",
  "key18": "g1t2HyBvyBZBkFKzHuCDXN4YJz13JeLvzwa3h7VE5YFZP8E6Rb39Wq5aFMz8yt5PqMp4kz88AHi5Y3qUkVkmuz2",
  "key19": "231Vs8L79Wq5nBcNX2zobSwG9kGSAV87iVzfaJGjqyAZeLzHxv4chjRNeTC9vmBcQtPqqzTtbwxcceguj7KAbmod",
  "key20": "4xTXXdRD1QHU4ttiaGP5UAmnQtM2jNqYdaqLpaPx2YyRoiaiPPkYh5t1wiio4kthuyBqNs2JG2rxdzoA3ZezMqqh",
  "key21": "4iokChx6gwrs4XH6gFdKA4g6YKrMj9zyh7w3jpTVWzK9uA3eqbNZWBgHyHjT5CUB9mbAnDqjDvppoMfsN7274n8x",
  "key22": "5vT8dPCn7PnbAJ7o9xiVdtshURogtdenMLbqMa7QewUue7e8DCZEn2A1ReHS6y44mJGysDkzwqA7ZCmJvz7cebuS",
  "key23": "4L6XC5GKBchR1HnHdovcVjDf1kqVpbHo95wgDQE5w3nRStGvGgjM8qvysiBsfWjrSMiJWEJiHaiw7Uxzx2UbXCeU",
  "key24": "2J1T12hq9xCfd2mfWmf6UzsPNwhcKG33rufNd3vfCwXy76zKNv8QUteonosKBt7pDCWghENV3vURaxQN9tEBz69d",
  "key25": "NFknwWPLPvYJp1EtkaaC29uGjjfSRxojvZmmApw5HM47zdygQ73vc5CBWDTbLjvyiaNcsJ217UTAsP9NUoq15V6",
  "key26": "23MUCH6RFJfYT39JRmvDfDN6eadzm98pmVktQdFSwB6SanMSvcRZE1w8vxKLU6eRsWdaAWrX68no6mD4qNivBRaK",
  "key27": "2hA3AhaTRUvxe7EKZ17qKPsEigjY13N8LEAXuShKZbWuBtfCqBAnSpA588Ndx31oUzMmRBCgadEtxpvhPx6DEGd9",
  "key28": "65aq32a7KwjYoEzANX4bRo7BJTfvttJ2gUqoEyi6ZQbk1QRctBPDadS5U3WhWiT47JmaMhLATHcLzr83qMquE42J",
  "key29": "46zbuYPnWoq85NP7VgaTkcUUZbEPUSzQfxt7R6ENBqPmpQsHaSWcUSDPn1jGvN7EuAS7spgSfhhXWoN1jbmRxC6q",
  "key30": "4Lnr4A7hCvhGGPfkTTutz74yNKTHoQ1eJTio3r9s5hM4jBHxFQsCdrwHGsKRrwzV1bfygxZTbZN9ehhgqNKkEh3p",
  "key31": "3tp6VaUXBEuGJKLbkLiDy9Npx9DJpzoTeoinJ1a8vBQxKo2vZyrBH6YvF7fc51vcCJBz186zDTp7ZdYxQUDgSLXr"
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
