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
    "qdqGtoFUrRv9FZwocGp4B3T24TQgVU9wrfQbWT1BUcq9KjypMigLPA2jVH65mMKRpTZZoKnQ1icBimMQ649uxP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eGkumpmWTmwipJERAsaEqaD7w1bLM7xzeVqgf495XmDaFord7NXkW9LT5bvWeACYTb2MM7cmUMzWzvjV9mdkzgf",
  "key1": "42kYfmp6dVr4cdDxjrEgcv9fTE91u5Qa3rcChLMdz3yQ9qVANFKqmVcLjZXxxFjBKGRnJV64peVn4WxoyHxhjUbY",
  "key2": "4tiTtkUoAyn6GawJz8UvHxANwGrms4n4bMiQYFkQpYwLAa3kZVYkGuRPYdFfi38gUdEHdNLWWdUGmtQijZ3eKYmN",
  "key3": "275yH5Qas5jQBDDGEqj1zwEP8t3b4juW1FsB74a8wXkzanADWFKkX39FWSLjz26yKHFZRPSo56ijSWm5Aq4TAuPG",
  "key4": "5aJoVvNdjH5Efc6gNKUTTrdtWSkex7q9qtDAjv4fJoco6bbVo2r9rhK9nCUpjNDW8RCwRKtsGtJQV7QYKhjN2JXf",
  "key5": "YXYsrmVtrudpJCoBriTxTzZ3mxmRuKrKWjRCgdDeV8iRRVw3EBTeQ4L2MfkHuLp7By3eLU4b6o9WEY68ACRJiX2",
  "key6": "4V6fH1PoXv9EQk5DdiSK9ousCqoNU9ViNQgtpj2wGaxLV5sSixciunGtkn2e6eR9CTwvMWeyXb3hkP1prjCpzjEf",
  "key7": "62GUPetj1zqtitnUDm7pdMaDHDNcNrNhztXg1JpQGXro9yhdZZLPgd8Z8dtW6UETr6TS15wo3UpzRUcTemF7MTtr",
  "key8": "3F45ZjN3KsDiutmixh8ZwoKzK6Voz8AJgcmyzBxy2WeJSBhdnBDK747UNEQwJ4F7NtREtEdwZKtjfiHaqYqDCkh",
  "key9": "5Bbo7FNcStARdHQqKoToKmB4bjn4AMUYErKYVkAtX33PEZg4N4TgMnQFzP5nu3XsJd52s3y39fP3gK8zVzDHUrQe",
  "key10": "362b1APX5GuFxw1nhUQMERt5Toq8Jxpzsxf1cB1jHuRFKtnyGn9HRL1eg8UorVeyu1LEJZ8q9xxQEv6uHSD3i4PV",
  "key11": "4HFCaKvWh9i8iF5uAuf2rQkgWGPjFAj4DML8sUob2gY2bHLPnyqVw2HWSfvSWpSSxgCdMQzkzsk4eKoE1hYA8ceQ",
  "key12": "2aeHoCqa3Vy3v8PWSprLNkm149qWzMMZjfZTfqax8MUdXDf5GqqrANM4oyAoL7TpyececAhvmuFMyjvaNrR8V9RY",
  "key13": "3fLxogRPHz7AcdBjiY14Q9bczSitfEmafTSss9g5nAnR44T1fvBQJ3GBjPdJWqP3sJ6KSzzd3t68jDdFLGWtUJwo",
  "key14": "4jqgwzbaTi7NaRd2UcwfkEh9CEhy9w2xpZRdbdfcS3RwgXDbMaJcUgxQ7kSo5yoiW37aKov24Ch6avsBWSosETgS",
  "key15": "3Hc5e4nTyA4hup1cn292RhCZZ1Qk1MdzBRnehd4z2EFPLFdYJBMhL6bv8V8ZWAkDv4DGJMdHaU9DfBw4uhXjLExY",
  "key16": "3MXNkMoLn8AwDD664Ksq7rkTHqGMDns3gw91FiZuqoBWRogh6YJnnDVLooDL7gjdB4LCEZsELKTShGAqRq3YcnEB",
  "key17": "53u11mjYVnLs8AFVsdnAJtSbhUC5wcoW4voLfFRVUFpP8fK6hL8o4u4RK8cHXXAeka6uSRMhJDG4jCU2cj5G7EW3",
  "key18": "4KQidGAX7s29e2UX6hLrNv92iEQqkYhBV7B365VFHRNnvvxoJn57U51uZ8nL9UNmmR6H8aS1Z9kDMQhhM1PYRt59",
  "key19": "3yeBCjXeh1i5tUtjwvZfph6vGBcAT7iaqKB1hKiZFR25NyNxu4evPZcXcNQ2uyqe3WSnv17VuMgej3spukwJRmHj",
  "key20": "SCk6CJJNCKssTvfHJ4McmiUgoSRWgobfGisfwD2Z5FHzjvsbCEtR8oKnv7wkK1Avrnp3zjWKSFTUHkYy2FPR77R",
  "key21": "mtTjduk7Smnu7QZrcCH4784ex1EwfRhJeiHpKmM1DKLtPCdz2sZ5PF4P3Dk2hTHKjPFcMGZCd99iSkyvG1ErRx4",
  "key22": "5SwCSWxhyws1AFCqayqGJ7kD3cjBowWTJPSpxedLjfP8cGHEQWbB3dEoq3BAssuENzR2gsRGbA6WjBL3WHTUPmyn",
  "key23": "5DdBth8Hp1gYwNZF8jkS4PW1fffeXMd8WjTcxzu8eiRZckGNc8pZGdkE8BawHj96ccQZGAgSnP3bxruhbs3wr48o",
  "key24": "GZtg7GzKFQ1Uapx7wL1KgpCriGwvK5yT679GV3FHzqB6x5AztYnYDvhakF2hfdViHMxGEShTk2Yt7pBb7K1HXTw",
  "key25": "t6f33RYMQVWeXzB7yK4U5TkpN1M1TJTrYK7D5i4H536mLdnSSZr1RQTvEyWPZkwH21Mk5opPrGAx1wtAhQs1rDd",
  "key26": "5YLpjoK3sQESPsrgExA4GtiYsrhmB2em7fNALnaT4ub34ytcBMYdraMLraF2KitdE5tQ2eeX17e7tToEHHFPGcqZ",
  "key27": "2fA4YoVZaYtow3gj8gEkM1xgaYdUxwUHTtSDm6YLKGeFUVLs81uZpZf8DMjZAJ1121wfaqWqSAkMgNx2HKQBad3Y",
  "key28": "3oNanBoPnBsvPcoTxZTEtkFokXY9nutfEYLRrohEVwoSZvAfAceCTcJBAwoAdCmSH2TwonjKEUbLN3acbxGV8YqF",
  "key29": "2K4vMVemaoyBERetiU6ZVJiA2W2UuQaNkSHctXwC1WQKbED2KqViT99hjnVyXswLhvNk7DJApcSjB5pSgcGGg1Sm",
  "key30": "25caRfmSzSw8smizi3P2Nnhd8jcJEXheTaALvgg4vxBnwnsP6QoxuK12EuWmbTSbUpnMMPYAAVgFk4KrqT6Ftyxh",
  "key31": "oChJuQfRWuSpvxvnhUbU1NUc6HDTZjvFGnYQzZ3Fr9159RvPp8doKW8E31Np83eZSvjvUshwN3eVHzcBaQxUEck",
  "key32": "4AKtejBFVxotsjr32eKbuXCuPmY5569BW5QNwWpaBZoNuFtypCqFni6nmdRWtC41VUeVK4r7jEu2MTpdqrAEEkPu",
  "key33": "3GiYaqaGqnExVk2PWGhGg68vBxBEXzWMb2ocZQmb49ebZBv5JgvHbKCe8ZuPUUQMajg452BUCepES8mqmJRVh73b",
  "key34": "2ztnj5XSqDizARUcwZkq7zwmurH9xkkR5scW6gWWTUnpZf6AGDvpdArGKLeQiMKwegLy2qr4zxsiVJqFKTogErh",
  "key35": "4MFTdkhEtMVbGxgASbzEUhgY6veeLw6vXEE4rSmH8X6PCtUttwEBQYgNpuiNUastj1SUyt4a91PTYYQqLrUahkFH",
  "key36": "5QicMjFtDjRp3mddASG2ufcHWgBfLuAxG9GtDJqfDRDPBnVc4KkKw62E1sivtNMLqpD2fmsYSU9u8yG45nAQztn1",
  "key37": "5QaVSP9hnaExpv35gRVBeLhP5vPrqUdzQhmaceJUkqcJfjPKxGQZ4NLY4PQLKUpYgu6EUxGh1iY9dv9fedwUMYnx",
  "key38": "2AKWBJd1yER5wF7ofrLtDjEm37dsSyZTAo2ZiAEGcoABipWmKWec47YRoF9F3eFSZQjQJEnR6pREks2unxvVpjqK",
  "key39": "CTCQUTFEWHA6cs4jv4wyCiWzxbEUshiVbsvNfpaCttJ41NsUjsp15a9h3nqopeqpkVfrmj47yD7czgWwnMk5Djx"
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
