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
    "3CCScPdYVjwT79GwwgG7QpW2XDvE3haxWgSkVJKwMSEZrxcWUaUkwUURyqsrwYeEfwh66K7LRK1eJakLuYFtD82y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCnTtqqxPKFx46bvbRLUQqKethps8yKbW5Yvpx2R5Tr2raEXSzcKjjE6N2Hezso3uar6krFzsbAUPA3wSjY2WfQ",
  "key1": "4i6NHAaSUYir9p8YEDm7ohpgWVg75eYY6vu25UjDdkggqcHQvtMJjAJQ1YJdUdmyaVgvNwnpKwzN4Fu7JS8Z9Kap",
  "key2": "2anwu8HgRKxrWGN7aGnTgGz7jBXkA4MTHpiNwJFMW2wSq1Kmp7jkYnEYvhjVfArms8SHJ97v99tiaY3TBjCr4sDY",
  "key3": "53jtVGsgEBSoQYdt5ZUgMxi7HHtPso8y9jGbSDmGzPozb1uY6GQJm1PTpUF7QhzSp5BPdoqeySDR4k6aQQDpPW4N",
  "key4": "4CzwX725BcoWNoWh9RJqXfBj5oDZisE1U6n74ktJrvG8yb64xgLijmBkjW3sri4NJrjrovPFJAG2SBpYerRggRKv",
  "key5": "4z2xiK3m1uud8ekWr4gVrPbFgnEL1DNyxUg3R9mSV4YJqAdi6bTTCRedspyuLew7fAwdWxcKevh9HyFH6ThfghKh",
  "key6": "4NrVDzUmahiYobL2jowW49ujMdAp2Us3zphh7eUS6o2i7sDe6iYsznbQmzrj7Ys6CAM7rez4pHVHvdEbheSQbXoX",
  "key7": "5ye3AL8JxxAeHzXvX6XyhPJNTphEekDWAfHq2JMFiTu89k4ACCKEzHSWdQ1NfeU96vJgNEvvANnjKpt2pGXcnP6N",
  "key8": "4eKYSYnPQDQPe8SUeZquZ3jtrE4HStRSpV8HHVFyzoZJn1bhWmhNYD5NqgGaNwcx76fCMtx2ugWw42upk64xH8kq",
  "key9": "44rTiHGuKcxDd1kcPM6aqsZ1zUgc8qnF7hpJoFPnPLSM2GLSUx8DHTewHSSmsCuJgZ3E895Ty21DA82Sm3ZEN2vo",
  "key10": "47N718KLxDgNuCqMbmzmaCoZosMtFDnq8LRLu39v8ykTjYzMXxhp2oDUkaE3DDuaAjguhwBqa3htJk7wzd1TzuF3",
  "key11": "2kQtMMxCkctLACH77dVMTrfCsnkAojzN2CuwQTEf42h9Rhh1AZRj5WsCidAVpgFknDLYPsrQjgaAjG6n6wpDMjUm",
  "key12": "2UfoTN7KNNGmvtQr1tjav1BEMsikMJJJFL8H8QEas2whR8yoZxNybnBS1cVkJ5cnKWZk9aH8WbQ3wME7aAkSHFxC",
  "key13": "29dLmjEjdrFNCWtRhPzXXkbfT8pWU6S9ANLtohEXTxSDnQHUNJHzEd8YzFM6CcMnRCLGhakvzk2xBWTnufodQiXf",
  "key14": "3qJnELYCgMBwMZmct6w77e4SNvrRR33EtTMdYU1ud3PKU88ZLUWJJzYZ7W8bwi16ZDqfF6pf1Ugq4qCQtW6xdZ3o",
  "key15": "2ZDuNCCJPwQWWgsTB6pYdkJongYxpNyNNyP8vzt2CyueGGbqShVcQZ3XkC3wCypZS89q5dM3iWXxLRTBYyqWc4Mm",
  "key16": "4HRsSpNe99C3FxjYguF7CcYVg8abvx6SDBMZWVRXxDT1PKqTnjMvmFZCa1YSMMtvyo5PgwchSPbuLPVv2nRV4J19",
  "key17": "959iwbWsrbaAz2MiBUstLwV1w3rxpZweaPx5JjAko6C2aDLjuRy2CUTwcmH3VbCfjz5QepF1Em4xpLbrBrmG2M6",
  "key18": "4QV4xLMmPtR8BW6fDtmWJjE7U9KHa8v78aYRmWCmY3yo6XrjyijNLjA2YUPz6YUsizZwDUeMG1KU4i1s3xWegSY",
  "key19": "we3SR49u9yUAzpCACmbzcBQPSMV7GMhSJMBHLtngKDfJbWbqDPsxfoa82zd6zuGfSZ9bqZRsNjTnuLGLWZ1wm1H",
  "key20": "2Q87mPH1f9MZDEDWvTT8khwDz97JoNDEMZNcUJA7peG4EjEzwvrSvQoTMCMAVm2e7zzYoBA9dzEMWWHVvRvTqDH4",
  "key21": "5UYeJRDTPA1N1Gzj1wbnv6WvcTjjK6xdEEDY47TSDWzLsA78URELiKebtG8Tun98DR2aC1ArhmgP1znjYpXoHG3d",
  "key22": "5DHEukp5ZMWKtGUfc9ruEmpZW35sYB7BHM8eLgZ9hF4dyXhQA3zy4MQga9vgh8YZm9GfZsMi7ZsrYhZGYMmaTkb",
  "key23": "4u5pEvy5FpJ6hNT7faQ7LnSK4bQroZXwyaHjppfiUvo8GKmQXEijifzGgjBuCSxpnZjJ5Q7rPbekeer8rBZWsWFM",
  "key24": "2vn8s6pmp9kFbvGQLGfcL51GG4RUJfDAXjWpRdDAXFtLcCETqq3DTmaVZ7yXAwfLnJ7rHa8MetA73JezBndN7Vgh",
  "key25": "K1f2GC9FqTUV9e8pTHXFErY6k7gAAW58bEYoHtmrhkM6dYMXPRq4feaqcQdyGCN2NeiDQ9BiMqfyEAHDDpnyFtV"
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
