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
    "2MBjEg7wpe3rRB99gu2xvmkndubfgZYfmH7S9YXuHRp419nRYRA6SmuAQ4nrAjwiHC7mQFnU4N8TqkcCseDzcJ5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19TpUtfK1VmT1jgTVbZiDwnTW2nFoYra98Nmo9XzULBqYcv6RkzxLja88EZfqBRc55N5MtYJD1MqV6fBCz9jRnW",
  "key1": "2ZjZUqHzswTceYV4XAwxu6QcrEMNQ5qfSPFYDg5g1Y12pr4rruW4tnTNWzYHpFAhzpV4YqjKm1k9nbf9JwVUGDvR",
  "key2": "t2ar6CLWiFjbZY4a5DYWcdLJUyomRfcP9aH4WKZGWBRvbLViqh6VTEWapQ2Hcw17qgGgnC1fEukxV6QPogpK1nP",
  "key3": "48VpDgct4cXv5ZZ1Ca1UnLR8xBfLWjoTWwrJQZCcKEbpuao2ayjufRpWYjcrB3zeGvpoy5w1yhzPtmPZJ2FCCcHU",
  "key4": "2DV1S5V26eHgLhbyAaH3BEALdGsJP6NWz9rR7G6jD7BTjf1kwVEP8wcMJqTtYuuG4rVf2jUvHZYuLGYVjeXpB1zV",
  "key5": "J42JrVNSHbXNmcrRkW3NYZzBoMCkqqFHGqsD5T6zp2A3V2xLbrBpADaGGScCxuWjCoftvTU51pULNerHif6ZFPs",
  "key6": "5Znu32gAKEGqn8NZRLRQYippJNxvAc2JY2u6pWa9GTX6YzbtkLMQDiGf95gci6DhNwWwQDcAXStHYArrWo7kW3nG",
  "key7": "5BSi3SYKuNxSWZ6bNCsUVaDQVXmoG8ddqLueN6PLzDMU1pRHS2p7jhYZqH3uVsjxBJXwwWEmSeeUFTvN5UhgHpNx",
  "key8": "4pxBZ4tqhdKrEeMd1UWwQxq9vT1Yar5MUjLkTriRpwzAUcuqnpGCJtp14UvXvG3ea5k3TrmHdxff2hJ4DHFaERks",
  "key9": "3AoPVzQiWKPV1kaZRYfGs9Sfa7cRCsggNTxWY8FxT4q732d71jaFuP4y9S7WDKRYm1AVaF15rttdUdCJjPNNJixj",
  "key10": "9BaPVnpVRksD1rFGTUyvCD3e8CpqTbrZ3zxQXoBppioSHMhTVQZjebnjG53ZpFRHqXQwZwSKNuF68QMzQdGM2qq",
  "key11": "3veZLFK51dCBTJ2zsbGvoKFyyipZpRW6sn7sgFbbpsQXvCCYhRgZgesj1peMNYM5Qa1pmcpGD2M549dN9QkMVoLk",
  "key12": "5v9VESQzYAPqWwCTm21vgAYCE6cU2S7YHvJjPcN6PrBQw71MM7T2R2LTJr3yzA83B4exmYqzJkoaUHa8L81taJqJ",
  "key13": "4ymoEZb75u8foY6HkYnQgt7nMrahQDiKoNpAXq74PdvdRMwrcimeTC31e5tT4BdX9kw6e6Q3uE5KqHbfUMmzmnQZ",
  "key14": "3UkavybtDDdnY8yg2WyfdjN5qyxMMadzp4iumnKah6MoGeNf24rcsjA312nfYfdMmiRmRSHzYDTrx9qn9ZKCqYUp",
  "key15": "3nAq8fchXorsLTuhTZHQueEeqndyLGzQ29QnBzk1rc7W3umZq14UQ3viXsJEJRS8DXcEaNiBhCEhANxyv1gcRV8",
  "key16": "52MnrJo7tYSmdjwJjbaUQUQcjGqh1YBJsugKRGrYbjKJx4yXSpJQ9zxw3YKTZQYDJq65NLH4GEw11tnyyU52UNj",
  "key17": "3AXgtaJoZM9uPmfY7Bt2BmY6rbVDK7XWVdcLzUGhjUZj9Xsw9DphgHmJPYQBATkjiC5nsXnFZq6hepsZ7A67Ab1q",
  "key18": "2otKaULeeiRSz5tDQPRmeuM7WkgqCNKtKCdzXUtfe6xSYhAkYMsb6sVuuxGyNWZPbbsvpTLTctz32pDcztJdf7pC",
  "key19": "5RoLxqzmBtU36hmLUxzfj1w6q41RWWrmpgVdYxFzYyKk8SrtyqK1he653emSUyGAB6ykS1FqLfdb3jMyY2TtqVJr",
  "key20": "5PzzxiELf9a4hYTajeF6Y2FW6uUdWisBz2HKqvQ2h6nPC7WUzXHJ2k4UeFGsdUfWM3ke7UkKUFGdeoA52vhVJZdY",
  "key21": "3L4nsbicBtKEUysjN26X3s9jdpbJ4ELe3xFQubbv4mAq9NJd1WksgyofMvqikupdw7M9PL3FhDNRvTE9RJFPsjWS",
  "key22": "3m4CNn29TbHJKqV3zb1VzQcesocF4DwPjExSnXs6ibYdsGWfc6pauoKnRJLeadeVA15RGRvYdo9wEkFrwbMw91Q1",
  "key23": "3DSCZKM4fWokuaS3o5hu8Hc6eo3ZsPwre4yApwuQTEzvDwkQYcvQsbxHpfHuYEbhi6NREmsELAE93Zk3H25v8ime",
  "key24": "G8UUrgoUooyCtAfuGwgVzu1NZSuykgUtPVqLMEKbVE7UpNs1Ss11iEsuedtPRBbPRE7oAvcA4eBspvyC8qgqFr7",
  "key25": "64LhFss4q988gjU1QN2jyDomRJtcxfaYnJwtpZCXfc4CUx8teoZGoLHFaStsZ92Vv78vUSHpU15xEkSKbQcUYfjq",
  "key26": "67STNgoV3YMZE7MWbXoYDHn4PrdrJXe9bLwL7CT7LvfVuU9bj5q34LHamAuXxkxj4NxhjA1YM6UwpAKFVeCXZycr",
  "key27": "S8s15Y3kbJmy2PRWsBZ8Ud9PzkEyc5b34m3VVyt6fkBoXNSTLkw2gVkPd9d5XqqsqV91JSkmJEqUVYTdcCGZPgR",
  "key28": "3Aw94oK6VyiSENzFPnn9LVYfFEqNG4KTfMmzUvvHhcsf9HwU7z6hXVVTM2e6zz2hr7hFrUX4W2y6JLMSW9ebS1TW",
  "key29": "JzwJ1HnBWFVSWDXDGA537oSz8bxJHHU3Tj1DqjhxyQVwTSYyRauWZJUXrVsDFUMaSbTUFV5FHmHcth4WAA2UMqA",
  "key30": "41Z2cPuKa4YtC23TNZcfkY4C7cPdYUC5D8A9D6UUmxAKs2C58ieVTYmCBvrgc74hrkFyN3rSaJgsYw5dKUYjbfPU",
  "key31": "3ArMunUwAHSe4dmDyZ4JWXJ1kpHThNLkejsLq2r7gRE4cSrgAqyR1YVRjRxm1UNTTSXUiX1F57PhQqxx83KwYGye",
  "key32": "2GeQSUvyFEKKZ2G2kGMGDtkk4gyhYTZvwd4dhJgfNDLyxAvNuxdX4hfrhgKekStZTTDjgqjE4qHjbtdXDxJfVVU1",
  "key33": "2CEGuTgjBxmFmZw3wFDuNKg4jBBDUCPnPjjBddEmejyeACASTPfosmzWe3CsE6kVZMA89u5PwLmvkEw1nBzvJ4To",
  "key34": "425XaJSJPw5VsejPw8ymvMuLAxiVJpmhTh3fjigKwf6Ehgg3nDGzC5KPY3vPUmfGf1hrkVtwonkt4uv8kpkTMzdz",
  "key35": "5ZCb5gKDiCmAFwPJB3GawzDXZEp72ir1URw7hRzxCd2zKKCac5Ly5K64QPjsi7kPDXZ6xT5vDNga3eoSCf8TVGnN",
  "key36": "2zQW71QGBBA2GXbdQ3HGUYoKdGxh2959Nqk8wpuABumEN1ueTFVe4Lu5GQMTtiVjSTSGjmBMsXBeAkpHRdGTKoeF",
  "key37": "5CBxQyh3DPhHN43QJJTs1oCTwNKQrEgjDg95hXGiAHr3JUCWcQSaJkfwvisBij1qgZbzfmmhr7fvs8E8uiBD42y7"
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
