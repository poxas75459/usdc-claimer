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
    "4h6orUE6J7u39FpP98TxFXj5xScs6uMUkmv5QFwJ2QNkVzKB6bBNXTxXmbj8z92wAg5E8ueMLRGBqFe9CCPU9YLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5prftUcdVeP8435tAGcECSwJqBFPopBC9MYUxV3aJbQdcotsEsorGGxgQMQ3k4wMwDUNHTJ45o3EiJCCGZCM4xWo",
  "key1": "GcByvR177ZvHf7HvykZ7BTc9AyWfxMb1dUgs1oUxc7tWtXJpBFvM9NX55YipfP1XLiKkTGrdpbhnK3YJHmbqPHe",
  "key2": "3sADiRXPWcPbpevwNJG2APkjdK5jN3vGpJZ6sNo52k6qAYQbmGoGNqBU3AmoEkFezuu3hhQEXzXiNQNV3q63NQ6",
  "key3": "2uU7sDeZZ1xjp8A6mr85Dc5DBMxAixkxbLnQ6eRbhNbkXmCNsZkC44v7xxX2rUiBy7BvE9u1HAP32KAXGik4kkCm",
  "key4": "62nsjVM9xzWY2s7iS4A6MauAnRABPZ9e3hpMKaWqP6k3TQEBr5vTfKzyaTvYpJJ1RiSgWzCLUMrFrqsgeqUytUmX",
  "key5": "2LX9eYm7imrLpjv32aDSPtbKpbKdLryW6er69h8rTFt2zpuwFgmtGQMS8HrTtR2ranaZAaZy58McAGkW3yt1FKnn",
  "key6": "5EiWDsrsszbYHqqt3g8hgvXaXt5Sb5NS4SND7BuaiQhDkjxeXLJEKVh9aeMW2nzYRS2kooEmQ9j1RNfnb4nbUKEB",
  "key7": "3a2WU7whNXVDxzgBCZjJRJJjuTasQFpvMy3PhKVCJsxBqbafvvaF9jtdFkEZUNpf5ve9iUSCwn7GRWCaoWH2ud1F",
  "key8": "4Kk3J5XLjRZJ1EeoJeMnxWSenM1w9FvHdtvyMs6ZisSoQrkFECoC1Sk6GYcFpxTjKj3bqyd4PhAowiZTMYFrWVPY",
  "key9": "557enMvn1RAqSGYMETJvT4EvBhUgRdsmxfCiTbdjKNkPBTNeRZG9xtFXJdgr4UTPCS8fVb5NSJo33kYMMgTRN2ug",
  "key10": "21C9UPPAoxDTMZSN9DDxWPNnKb3h7GjsM6ba7yafeNJKgFfKEu9MTX26DdQuPbcDKiZGDSsBzyYae9MC3k4vQQkB",
  "key11": "4dN8mAj2oSFJmRQqeaxrkJRZNLFzuNdcZnnpnnDCeAGxnmobk8ZMfiLoBxks1mSvLQkbgxybLXifAEBC8CJgSwHs",
  "key12": "5n5Prx3CJ4FQvcnaFjZmgNRBnC87gQoVoho71AE6ZGPQKBiMXNsRLGBbeTNr7RPgf2xaN65N7uJvgpqubN5P7KZe",
  "key13": "ymRkFpcv49BNFQjPSEWfm4vVYZKUzfum6rFfAuKWiFnPKsV8vW8BwcxYtTtgPXwsqHkyYTqwhc2KKv9LXW9TZkq",
  "key14": "2pwJtZyT1HVyVjieio7ii8S6UCGTzjNti56qtAd1xY1A9EfMXxEm8Dn7GFGrXyfwDbzUPZpFYjWbtVxn2RgtUSAo",
  "key15": "41K658R3g9UzEtzomc5bBY22iNuKrNW2RiSVqPzyoTe9J4UQqzaBMDW7G2bqiDHzWNbCHUnaDLMcA5nSKoL73h1U",
  "key16": "3WKKeyENzdTa7W8rDSAskyMdsazQ3cBb9bfx8DmhWdXbrn16ChjA1ErS5srpk966skgX3qjJegj2JJtqytqrGG86",
  "key17": "Pazh8tvyeZyp79qA4nrq9GigrDneYvqWY4apR18gmZXoztmEi8covYPRhGbYC9R2RTKM9CoJCiB5SeYpgPh3vUz",
  "key18": "2UAf8B6fRnBujWWtXCqj8Z23HVorKxDj3r3kAhN9vatpdsFP92zpx7MQbmPpcgCHTnKR6EHKy4ZFwXjMjMRRxZNy",
  "key19": "4suNEtvXT64W5iaJCfTfMfFUB2azBfb2Bp1mvJ4qrnAJXPMvT6WLKNAX3xoj6vBwMt8khSHXsidnXiCRDfCiJTCg",
  "key20": "3i5qmWyNsfL6yWCudnWWqvBS2jYUq6DiQ5sRNX1HCxcbb8F78zXzo7iGVyuwhvKn8dAtv61LP2E14ALeyxEaxnwt",
  "key21": "4aag1bkC2QC4EERo4UocsQYpDSdDHF2Z9geQW8JWisrWE6Gb9wh5b3dCuTPh5HwupjB9AaC7DaafoS4atLDKP3gg",
  "key22": "4pRpXKLt26asdUvVVA3VVoFgBAnWozGAb4dyVnnTDqJ53HZ4UUF4bsZGMDKGEZDfTvtDXnrucRJGHyBVfRR3pkvh",
  "key23": "43v2CX1SPBgUc8cup3JNqXVuPtUgs6txYvLQRfWa3WgUF42mT1PYwJ3T6gdkzTwhuRKJNU6N9UdCodhsYJJuDTMo",
  "key24": "mGPtGPvmzxLaSowdTtRyCC8tLhX5Lie7qNZNicZeoCffc8WHJEHYzdi9S2KmruLg7h4wm51agCh41ZXw8a98Smk",
  "key25": "57A81dE7g72cTbbdkLwuow8qTJ8q2sZyy3KkGZPHuusYTS3hURxn2Vj8HgWWPWxjtxodmk2yzNbGrbiKNfUzLo9L",
  "key26": "3DFeWKJUFkCxFqACHmjYoo48wbDF7KEwd2Rs2PGbunSjDGmYfMCxBjLePv6ZnnduMmdvsq1ZUqrQrRioo5SXaHqV"
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
