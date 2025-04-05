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
    "2aeEbZCKsARhH3F3ecaHPRkKGnFNphGKrgYoSCc7gwVtRHVja1UFbVdUF9h1rifT2ucSsmfAkY2TTYb14ga159MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vmGAC6E43q1NwWnvZRxtRrjg8wzUsQz2ThLu8dZNLoHjLgJKsKwyLEmSPAnkzvs1wimeq7sk9fyDXY7iVkduhEz",
  "key1": "2HiFQndUsQCRUR7mgTP39xC5WiyQ4xBjiqVCfJ72qaNPzRDeLksVFqundZ9DriqbJt3jpHqpBF435cWzmi38Lrvs",
  "key2": "3dEKaZeMqiMRNXKJ2XJ61wSkfKfDQ6pyh3QNpjpb82F1CRfjLXh2XFUQj82Cni2kZSJ2duM4S2wFTJX4DuXPzc9t",
  "key3": "2kAdsJFPNv8hinoGChAQnk1nqBs8FQ4m3MeNiHLduXjpmoeY2hWg1Huz1y1dufLKMWf1Aui1Qh4NNibUijrFpoGx",
  "key4": "5mFFN1oBDt5AyvyeLNSvrmJkyyRoE86WyeUvsUjiKZx9yhDYBxqy48h8N3XtCbEWa1RvC9jakdwvMVQoSBiHYqKv",
  "key5": "4dpTVxoUwV1TbY1ScXTAqVbY9AiXubJKuoMKgPRd9151u8gaVDn5BSoHNtFeQb9tr7Rhpyg5bLszwttR7gEdY1xb",
  "key6": "3nnK8UpvaG8p8iPNAt9YqZv57jRSP5JPrJfqN5kGWHxnfJY8e9n9UHSGGwjFiHY8e6HnDtbR3tj1yMXqgXxLuR4i",
  "key7": "4PuKvqjDWrex659En8WUXp4DgHffnxkdx94fB7jhNGmByX191s84b4kgyPB9mKNfWpHSkCERxABA4J5L7Wc4BFHn",
  "key8": "3vA3ngRVjxR5YRRC9kNh5zM4cTwm9rZGdNS6s22m7aXLf7gzfxp4AiskKnLdee32gR8krRTyRd9G3aYfwGD7CbuF",
  "key9": "5HK2dnoeFGws4pfEqKhcuvy67YRZ6D7MLttj9dJRy8NyvAKgCtMuvq9XH7t2xCYoDxhvicVXY1fac73DNCP62KjR",
  "key10": "NLUTt9heoTSci8f5coKas5vd57bSwqCgTweXkJxeraCZAU6wT3vAiNe3FcD2R2GqiNfHEy4KZDpmsFsiWuFukjm",
  "key11": "3rhBCzDe2MfQEehL6Yy58nJhDCGSBKun8KULe1pxqBNWbVoPgREVo5oZMPJTmmvAwLFr5cYhC2e9b8GWpujYUbvV",
  "key12": "3tBfhKVB4oTZEECZrj91ro5CTbrRqQ2yM46XEsCApRjyMpTLvcD5hE8fqTmyvhAKaT88Erhd4Y7AUdsVjANyVhnc",
  "key13": "29CdxyxA4J9LTF4JBd98Kx5c9sAfqWYBjc9EJCiHYfeZYcP5uqpRUUbRQN4y3HXEHYjCJk1tp3ACHHfqTPENCeBj",
  "key14": "5vVRUi9mt6GGr6y7gLi7KhRhDqoL7Qytb9qrxMLJAwM7cJyxdp1mCqeLchFr3xuQPx4JknSuacwEuUxALVmvF7mn",
  "key15": "4jFEtDJFUaY2zf6dUy3QxSoZT3UwBgQUHyvKTVVabMZp9kBEePwyRcvpkQ43XAByLPBrPGArGLeEwBQJy3x7LhQe",
  "key16": "3rfGSZBwUPxEhVL38oW18WBFWanck6tcKqTgL1b1XazgEKESanCKNg7BJ8D2hjN9uWDL2xMV2AmgSiLQtxNviCjb",
  "key17": "4r6DpJmawJUeD22YWBtvXZTab6Kd4Ue9j2ReypafU39N557s1QcSDKhzK6UVEK5SdmC8FzJ4xKV9mdUiGtfL8Qh",
  "key18": "2MUGbRE2Rmis6YCGgswbboPnBRiAZvgy4JZJD67WqeB56siuMCRazCC3UNturBoty1ymiBALQAPYfmvH4qnquLsZ",
  "key19": "2rtFhjS4NZN4CYVWHap85zsNUe8WTDzv7smep2yTeBMdsHtfLwLk3tdFTLdRdBz9mS63BLqoSnSS3XqR3pvBvdUR",
  "key20": "5MNB9tNoS99UMePDjsNbN5hxeuuMzhrH2pE2q6GpsLAnfTH8gRkeyQMg4Gme8XEBE38Vf2URuaPw8QUUiVTrPwuf",
  "key21": "3UNaZEzBQaxNcqjycc4q46J23UydJyFVRgTWzSaqDEgvPkjTLPh4bjWqpDgAi1BMyQu5PfPeVbMY7Apxn3q1ptB8",
  "key22": "xZR449cfR3Y84RL34HN1586yp7UzVBLNPsLwpauzsPdSWrTzQw9K6MutmSMm8MqMkcci4TGVjA1fEGcyY2ucSi7",
  "key23": "gEpSVeU6934oGYugeYRVqG3b6F2A7w7mGT9cgg2c646k24gBVMGGbdrVa6kaSuHa4D3BfRxuAVF4h1pJvXXpnbJ",
  "key24": "4FoCfx9hmW5EU5ZrpmN8DK4haJMy5iGrhQy2b5GrzUrq5egvV1DcUsNLDHz6fBpcX8WHYp86GzhL3xAeR9YetWTt",
  "key25": "4ndjT51czoYHEYEdVSLqE8V5W9ZE6R9CJu65R3N55B4mBFAdqUm4Jzy7WK5vamKu3FSLAdWd2ruTG6nf12nYQYEr",
  "key26": "58JxM4h9Wx6LEwbn8BCUdp3m2oaf1YUfcFLFNPKjfm8apKeuLtK82pFT4xZjwV1euQ219tKvr8p9xwzMs5nkXxTp",
  "key27": "2vFeBuKs9eUj3ooxfBYW1nHaytk1sTVyr2hHnc7BXUHp2nMBMzzaNPVKKLMaDHfd2QWDyMLmoL6Bxb4RzRAfSCFb",
  "key28": "2PAm7iXbenAxCKFbmBLRy6PAxZLLWsxvTNMVZCLK3pTHjgJA1Z9cQY66K3aqNKW3qVBEfR1Nn9tGHTqTujewq83w",
  "key29": "64YHiR9xrszJPwKPe25XASkGUrYJB9p6Hk9iMNN6PW4zPEUA5MuWqSAaWMMXXDwXB3QfPnddE9TkS3JiMZFeuhi6",
  "key30": "3QucSk7zAQ7V1scgAU37bh2JPiCaLeWbRSymRob2e5ET2emYDipg8ozXJ3oy492LPoyXQYgSY8GAEJ4y8iMfjRV4",
  "key31": "3w3ttCLerUrHndzMkDeGDyBoHyuQ6HfsUMtvps9Uzu1Bs4u1q46eX69vmgTdixzoaFWsmyLN6dKbUtmCXpgQ41jp",
  "key32": "7Gktn6LTCoAaizrRPkLWzfMZbsc4TmHoi9ukhAuMqL3tZeK5F7npBHren9bZY4jH7LNbAo4Bgtc82CMm2sf4GMQ",
  "key33": "t8fg7EdjDsug3iW9JmjHDXqhDVotYBFKG5ADZ9tK3VnwSKgqfxpfcLD7DargA1WwMYTCsPnkrvTQW6CcP6drVqj"
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
