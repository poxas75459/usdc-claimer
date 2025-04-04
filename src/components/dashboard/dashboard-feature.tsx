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
    "NEo5uthuukF84TfctrQVWrez5KWc2ve4Disy9MandL28qUr39XhFpGTausRHD5Zgf69DvPXsSzVNqAc3SuRuzYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BMEhsqHPDtwCTkn6GtTzmDp2igDSWTnNRpfp8r1A8JbrRmsdU1mWDbo7VPBr2jc5KBNJSPyPaA589oyt8JtUo95",
  "key1": "DzK2h1GbsB16SLdbqNVtZxjqGHqEhqSZf6x7b1gsZLmLrnTkTyubWLvdPVaACzXbqF3nizJURbk9qm2L6ZBR8jD",
  "key2": "27YUTZCjLsNLLUGjmD5jRDwG2bvUZFvWuDBNhnEGPETsMWMLR5ni9N3puBZ6ZFbFeTwwmkRYB33CVYnnB8Lic8kA",
  "key3": "3SBnegRJzzQhFzyUkQzTsu7TFP3rsgEddZmzzaMFEeHFzdFhm5otsZiSBgvdniBeJY9jqUTpdkrbcWk9fm2R3YhU",
  "key4": "5hdp6L3iLXKiTEn1tCvBG1cwxwrbNz3soxas5XcUZUL2myUZhzc2T1jzwsCMUHq2BD9beP8nJcPFM1GbPpY67rCU",
  "key5": "4cWgvk4j9H8rH4HGf9oEa6RtaQKa7pkonp7LvJJ5tzQa4DDgbPufwdTTBkt3pZCbswoFK4WMuaQvaX3uS2kD4Nga",
  "key6": "4WM1xBNCJLJ74mNBJHa64dzKyYv6bSqiYjGndZ4Utu3MXk1Vvt9qk7ayEnTj3v6JA9EeCNPs58QTiSphAoq6xcmd",
  "key7": "5JZGbYkBUnuaj82Qd3r9FLTrRPKigHrf56iTEozEWzvS1ND2NAf9PsqxYz73TR3GU7s4TvQ8Dh5VJVEu4324Yxqz",
  "key8": "5DQD9oyATQp7RmJmZCSVSwSyivmM3tDi1Nex7JRYRhdjZK25rrQG9o7LREsPT9enYkXRw9uYLoBgfb9GRBGKevbf",
  "key9": "5GjE9zZhF7j82CoX7CmMXgVrfcnW3QLFim3qHEXSXxjcr7cDbbGDiKG3328bMuJv6Fm8XvUMR2qXjvv4yW5cSarH",
  "key10": "2popfe9hwkocNZDvsStZ3Xsa7jtWUTnCW1z6nEV7ChULsPV8PfD62Zuf6k2M3wVXiamMae5JS2dSp8B2cpJwem9h",
  "key11": "4jxxxXFviq9DT1gZHX45sUhBW6ANM3b5vtgsQgnLTzEN4XkYBG6H86b1GEZsMvTUDWxXz9DJMb1SXaK5BiLeCV4J",
  "key12": "61XBPcFe7PumD2Pogir14rbUx142r3u4qtPrgsC3VDd3EAH1NRr53bgd773kRY2cC6ZN8Wcx4FDdXFxAfZZrzKET",
  "key13": "4fx9Gr8LvR5td4bkjsuiMAhYHq3FhNNRPXRtJKzmUQPyx5WcZNNujHRncSmcZ18s542WXXkMt7yUXqthP13ybcJv",
  "key14": "4j3atHgFobBKWQ29ZWNnkupVUkhv7T1jjjgi9QeYkYmyXg2e83WjqJvWWjnpJRAiViGRAjFbwFXjw4832HM6XgFu",
  "key15": "3Yeka2Ei9WwmiPZtf6x1BMsj6ZSQWcSW4JyxiFeE6W1ybeN24Bf4VsekDbZ9C5UG1qF7wJUr4r4J8rz23LhTPEBq",
  "key16": "4qoSH1MHqFaHHHgKWRPdEV7cuLPGEs7eGHSKsZEtYvyHKUCh9jPqrbi5kwFVTQkitgUK7kzXyjLVSDbtg7m2HuaU",
  "key17": "5NNwf8QecN83dE2tJmbQdvGWAJxCBtUwkvVKogPw364SAmk1KXNvRDUgJVDYsJpe6VQftnZt9FsCgkce1VXVtE4o",
  "key18": "3nPj7SrmENJsQ5uG8sKKAHFnvvFaHDqaxSiogyEyCBAKi2f29HiPcGHn2pJwkhSbQvhgjranp8fNR2mztPRH51L9",
  "key19": "3bBiyrQRusvRoCLhbRVYsq2od32ZSUrtDipWW3uL6NgmFjoGMiyAiUntrk1o1xkN8zmsjb9d9HnHSxSv51GMbyu4",
  "key20": "23h18DfqN5RzBqk5tRVPyTzGG4ZpvsGeLobCg2xudhz9JDKhgFbQ3Qa3s8nbFdGh3qqzqHvGUMvAZgFkvdSy5ZoE",
  "key21": "oLNdBv16KxpkLutHRPw4vqfBZrBj8vQG4KA2SWHN3bGpnXbeWJQ5wqLsxpkgqtNYwLbpYFRPCNJShW9sfN8nbhJ",
  "key22": "2NhBTV9aLyiCcMYwMCoJdv3irzMKNU3gWEWPyFgUYe8UW2UFUfZHxudqkktSDvRZdGYeDZ9nywYJX5TxfnHXFKXC",
  "key23": "3yGTJteMzvBB5yphME4kYRndyH7CKgXgsgNj4RzAbXDw5aGyoUf4hPBHnXLQCUxiajkU8J3Z4N8VFBHt16FGqHgq",
  "key24": "4aKynsL9YRBzog5NWJZ3AswsSfxyZ19kqWjPyA3ZcBz2nkhEWQWH5wQ1L3W4u1CwDgXw7dJ5i5YzVNmodTxnirsL",
  "key25": "4SohA9MyTRN3Ef2m6rpJBhkux9ZVnA7eJzg9pWD7xhDtVofNWEYzFVUbXt8x8yvdoa9NQQsZEi17tVAx9NpWGd87",
  "key26": "5o43YzCpa4d3q6kRowizmYewpQobbwQsHKasvN5fwNjpvpiuVmwjgoWHENXwjwibN4c6pdVzHCBKdAKJsiaDj52r",
  "key27": "3fJ8y7JcoBPWxH9u7PDHpbmjYUcLkYegfpuj1DwnSUnNd777zhzsWGVcek1JaK7e6zg5NCu3Sm81Nnqw8nhyh2ng",
  "key28": "2y8nLdV1PWprGXPqiWZtiPCEeuAA3ReKDp4omVV3NB5gr6zV8TKkyJfpi8JsGb9PDACYedamAKw3iFMDojnmtXmi",
  "key29": "5idET6JjWgchBm3jpYkWiDHLAumi2aTU1181BqbK5j4NoqST2UhhTpq7Lg2KEZEVW45Vtdzh1R8JFJWAUX7fuezS",
  "key30": "3MqEu1fFrgiKz2wcTeZAiJs8JcQzWY5m5UvFnRTZ8rxVkodvhZrq4QAirykLJRwgW2Ze3Z43xbwEXcCAH4nhwA5u",
  "key31": "5f2S4ChTGhLMpbWEVj2PykJP5aNRWFLBxf7UBpghLe21wNP8hgS6LTZ1vwss7gAeWh4Cu8x3d1ApUUE93hdTb9XG",
  "key32": "YRc7SAhWXPT7rvZ4LvQtDHmmfMkhaykYcr46U5QKZb3du8M2pPN36sjQQqc3vutLuypcRAiTqnz17m3d7WMxRed",
  "key33": "5BhpHvBYhQcYRurem6mUJZ59KcCjmdpnxHUknuFq21aguhsVmqDV3wArtTfZVtXjTDY8zgooXKnbNAnzFVzYyCvF",
  "key34": "4r6daXmXRW6LJAoJmyTefdrewUDwHm2aMGbVWDm1akPyxoVfT2DrrLzJdP5XekCsCeV3vSMchMNjLmowhDCDBvwu"
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
