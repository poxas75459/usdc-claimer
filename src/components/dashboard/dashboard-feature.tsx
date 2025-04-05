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
    "3tJdZfKfY4kiurkQwiJ6fSzXavKPFcrgwFyUTbUUSu5whT27AkzpSe2MqRhY5DBVm7Fvzbsij9hDw7Y1kPhpXEmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5woQgxr6TQAahTX9TYFPgEVgQrUDWdppD7bsAmsQSFzGKGPuvyb47KWCNhT9Az7qoETqLSAjU6DezzshazTEKrBJ",
  "key1": "3dBmoiPNAuA6LfWPbzhCfJ7Tyfz22eHgKBDCxgGk2UNqqXv9BAzoUfxCWxW8rYbWFCRgv2NCv4tAqnmNBG7aw2PR",
  "key2": "3qM9X4UR3rWtMdDNPv9ekFod1w3AdqN9w4GvD6zrJa4AW7zurY9nxfo1ZUZUSSss2WBRkHZDgKndwh52yn6LcLj8",
  "key3": "3BNd8fbSVRyFYyM8oW2WGdPFMTgThx8SdG7QxFSj93CJDvY6ReH157ThTyf92XgBdpLm5854SDhPBnZLFYnRXJBc",
  "key4": "54efLJe8cK3jBpcD74ipV4JHU5VsRquY1jukKjx3DG4p8cLXNdjGEoJyNGTRM3cGvE7iwn8cpzzbgTKposUAWdzh",
  "key5": "5SHXHnReEfW5voprNYzkRnWXw6wm6dmU4FxTHWNJ7GF7deCy667NgGuXL3t1hnNco6t6psvYJcjhe6r2FiMesYeo",
  "key6": "37nkWucVLJsBXvv2zuWKRLHANQdnNApevsAWhgbdjN62phSqwssFEa3AAQ527gfTh6pisSVoGwhsynQ4rJC1ZGyJ",
  "key7": "3fXsox9cHJBUtQBKrci9BSArbTnh5FaqY5fAfooEumEuRNahi3knSrxBe1yWVuGhkUSwNBFUQrW3nALcH3jjKKvt",
  "key8": "pgUasyWeEAx5RNe7oELXusxmmLQf8FTEBiA3gmyiEvgHqGJPWz99MKzpC1xnJmsFUFAmjmf77AZ4yQHAAMAGtoi",
  "key9": "2JTTsHWhWnxPZGygHPBwrdMdLvDhXFqpVRhGTkFUGU2WXH7bRChxQMs5VUYgMABGP6mzL2yLAADTF38ASrhkJ3Nj",
  "key10": "2FEdRuVmBPqM6V6Af9ux2RDei4iG9PKXrS5AaAV1y3gTh34rLu2fJBL9QHibTaVYUrDLt8UEbPwagp6rqurw1H5i",
  "key11": "22UugtDuvHQodj4xN2jG3A43dcEhEy4LUp8712TkQmDEzCNSrBBR6MRfhafLMT9Q5tTSvMJ8BbmjvM7osDzT5nRk",
  "key12": "67mm3XZfDn7DjgTPXw9ZMZTv9C67wwg75S32ScPvPXPiCxgUjaYFV4MRfqULUY1LnYoq2toqhTTqa7Pr56pUzu5M",
  "key13": "3Ckqk2BJP6nv4PEBRGVPANkXE7qzjT6bLzV3xgUweAb8kYS1p1W5igXASEEXM61La4CJdwW3u7tFZjHNKbMP5mHD",
  "key14": "23CA3QFncYtVVHqydM5qia41PVtoqiViQiz7d7kdgdfTDmZia4JKRsrSwaHdpS8Zz2DoLnxitjb2WxZx1zPjr9ZU",
  "key15": "49iRjVMyAaN8u8UUADbJYu7FagB2dr5GYDKLJEYsqZEYhF5r3naW4VSKgic8iXegCcCyAgpvXt1HZnrZTMVs6yWC",
  "key16": "3JSHxbXfdvkBj1b8i592xycQj3HRJg4HPTfHPjKimpRNSMaG95U4iFo3WVTzY1p1trcDngJhU5NdTEJ2i1nkm493",
  "key17": "AAcjfqjWju9XGkxra7hmuS6uCiGrgt1Bs8ZEeapEtfMEsmUPyjzT9vfFdqomPQMjyQdcc7PTWuSeSg3ZYhkoEpX",
  "key18": "UDUTwXDV7BHEW66KbT9E9nVDi7CtZzpNZB4j3ZujiYsbgoYZs2q5eECXGvdXG2X9CX4GmSgVSNfCcBofRxLfu1c",
  "key19": "3eKAB2C55xuMJYczNr9Kq4DD9MeQEMsEKt4SBupRhZf3DunvZyp9M7cGt97L2RooMEnWcaEUu2GupTFexqgFsTnB",
  "key20": "dmXnKT1xV8hwsqXs7T5d9kW8fiK4q1uRpYPqsxiz77UTAvhX88WhBmgmpgCYFUvJ4qCev13k47QZeaJwg2bfPAw",
  "key21": "UmjDJo86kWjRHByzkvoZXEEqZfMoFuwyYjVrM13g2F9G7weCytLqLWZewUmgR1YhHM9co7tGY3FBoAfVYf9Gf1c",
  "key22": "fSZC6eWA5QvT8RRZt5Pb3hTTQrhxsPxHxLHJgcaCoxN7h7mJVHGgQoet426LbPWHtXZkbTrAdYGcZqRoYgGJ9d2",
  "key23": "3WDTQqk7VuAkdxyc1oDoJ6M5WhG3x25y5nh6cgn5unfLgPjUbMximyWYRK249a3xLoA87AyZKmtT4xuwi5x9YbUJ",
  "key24": "5vqPHpyZmn2KcNds3Xjz775LmsYezTdJwumWVZZdjRhfBw1dDQ24cAzJg3mx9nYGY9RoNLo2jFfC6qscacrSky23",
  "key25": "24NTYLmNVkCSe2xU49Eo33vpZ5kWfhqSF1uhMm6yD9i5FSXFM13GoigSvAfiH24HdUQou5ZmMFVvx3EeF2QW4rL3",
  "key26": "4CQRg8LVRKvP29t9ezD9qxjFM2HWNjyeYUpFetQDdj7kWMUAoQWsmYBHBvQLnzbX9tGRZQGJRfHJoW9tUMrtDGWM"
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
