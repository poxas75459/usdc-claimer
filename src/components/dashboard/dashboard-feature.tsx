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
    "5Ut7rhu5qyNi3i8UpfF7ARN9mceztsbCCy1TbD49UyyF7AQDYHn2JqYeBbbhtpXLdhQhLM6zt8i6Y8AAZcktN7Zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62dzyzGwRAV5BMTaDxUjDQUpCbeBhEjus1rAkcPoqVHhPcPh3B6eMbHJDyYcK6KHbyw7HCrttzZXhN9uNrooC6S1",
  "key1": "83p6ECQQSdr3JcwZrw2tUGYWhQaCb7PQDLbtbZtHLM6fnP5EmMb8DkfuibM2UecYCU5qpkYziiz5gMUjKkW9k2h",
  "key2": "3hmox5xGXrZWehhRwbeK7rVXwGfMSLBgJJhzZDsikrvccpVuqWvdB25e2bhPLciGpSLUm7Jm12nZ2C1N7Ehz3RcG",
  "key3": "38JsT1EwEJiTZss96WXpyL3ZvdvMjwXd3MBn5o9TmXPYmExAdz4Br2MMEpQHRPhVdrmuMFFWQe4Gb7Rt63HvrHWv",
  "key4": "3CL2z1WysWkgQCDfD7TU4RtknPcAULnDe2UB4jAh71iH8W9r6rfH6EuGT1DXEGifGUrbqAwXb3F3hYkfJXmBhfTj",
  "key5": "LzDFC2Vc3FKL2qfNoHRDcqSCUr9XTggNgDkxmfRgG7kQXHDDrTMg3KMwAKYhp5p1akxms4WoT5FDb19zftoTKL4",
  "key6": "278DFNm72guG7oTe4HAjR5bvJRafDaRvtQ7zcNAfUpB2ANugBfePF2D98ieG764mqJzbvuU5JKJfdJTaHB8ExBUJ",
  "key7": "2VZoxjFnSFsQezccJMhpX8he7dp39DcyrtGFN7At5ECQ1VFSrrwYX8ULrMvxjhmFkeNpRcoDUcahp5pQG9uxKZxj",
  "key8": "3XHLauPKcDKHEbzA1h7KFdndQDMErNzYmN3aTy5K8H1QSgp1vLZ6KrapewyDPEfsAB6mqPheJ8JoPa1GWzWqvAgt",
  "key9": "3U2UXcPVNhh9zhyR5PxDLyZTX9kL8xvXdkSH9cW4mKstLbAEUZQsmZmePrY5jHt7ENti1Tw2efbYyycCeHWCc7TP",
  "key10": "2bSHGrYzY7EnWufgoqvEtCsPe4LrrqrQnmiU6N99GeygiHxubXkMAyS9f6468Zqf6xJeczZgyXp5X4K7WzxaqK9x",
  "key11": "29MT1PBQrD2CpyY2YmU5FirXGLuQdHvax6HXFpK4um4rEWUF5FTqLmxo4p82u4HisWFvZpCJCj5AR8snzpaXgpZK",
  "key12": "5s3q3ZEHGMr1K8iFaEPJh5fmGrtrLyPrTKuMUd2AXn6pRbyAortvKiHMQUcsBRtVierAFf2pCrC56uTN9BvmtVFx",
  "key13": "26pSk4EKTmvTMdPh8D6QA88QgEF1UjXxH9Ujoru5NACAex1X4NJskh4dR9ek5Tsvd5ST3BaicQjFNJAmE6Df2wFK",
  "key14": "5u9YA93yiS1USJ8ePhFtwxiVUb7cMrXSMX8zoMq5iSsYrJHvh9rT3wbE5AVtqYb4BM3onMN2enGi2YLR3Kg9TmqR",
  "key15": "5T4EuLEhwjawwj5DLrXK5S8GS9fcQhTxaJJmb1JMdD51uM6PaixfU5GgAYes1mkcj4ZgNvbbXkTw1U5t5MfGh13V",
  "key16": "VcR9Et6PF3FriSotatX3tfRx6E2LrAx2SHeHPTHRrG2WDYXufhgJjvDK51PW9MU5WAg5KWaNkHdFhHay9M111up",
  "key17": "52SL6pk4VgjqQS6Nb8UfrgFG5jJvr5r3v4yYAcs1WSN8eCkshhWbfdiqqHy4uaGJtDuw5CWRewvMe7zz4WyJjv2d",
  "key18": "5RnvZMBpHhQv6bnonNiV9toz7QsLn3Nxr2oyY9w6hcyykijtpQ9y3mEk2Vi7eGLrauhbXarjLfirviA4QaKmByNE",
  "key19": "L6qcYQVFTLFybQjGRbfkUBXWWMjejMkf4rki7ndjm973KjGgHUJBhBs7q3tzTJvTiZ51jZ8cvzZD58p5w2eqxXG",
  "key20": "4sMUkozuR76BYix1pJY65wY8dWRmFTceJLKi2UyHaMokokd5gZtpuV4szHVwsBmxifa9JaNgXpHFYZR5r8XEjvLc",
  "key21": "3qFqUGvrVFN3TQRSKgTLSvCqXTBU9D55SYAqi9Sbkgj8VfjkDuexXYZuy9eB6mBg9uqZEye4pkhkYi3JGURzpfqx",
  "key22": "3gmVBsdSx7h5iicv2UYdHwyQLfanJde919eq8yvxKJN75K46yKxUriEVN5M1rXx7khxLwcKzgqfafRwMA27qGCit",
  "key23": "231d8zXUgaNE2mC23e5KWNurT6PdpWTEzH5PtzgPAtMSqMGrvFVgGSX5ouTwbggwmg9kmovzPuWgSGGD1bAy2Z55",
  "key24": "4W2ShGx9jakmG8p5e2Rvr61UPZgFkzDa11c4z8JRgJ3PgVAwFQbfZn2BPWd2LLvfGFMvFtUyDXPJaUWXWEtnU9bB",
  "key25": "2ZCe3ZVSkfdosS2Xysiqq1Kr2GBZ8WAqJuLixXE7JTvvjXpC45DJrj9UCM4Ykpyx4LcTtcq1WMNH2qoSgfd5eViw",
  "key26": "5Ajk72jHZDKnMUk7aKCHCy1j836Cx9KKmdQMGCqeMLbYRMqFo1jQTsiU5HmRbE1iNp2sYi1bhnrNzsV88bdm7Bi6",
  "key27": "3SptZ8aTv4uAvUjT2uSRxwJjZjZM3e93G4EzKBkYdubQMorK4YMecgwrmkAFjhUhusUtvMVrudahZ8hawNfAbxrn",
  "key28": "2SyyZ7p8oAdMVkNQxC5Xz2Je3xUnWXqEv4zWkM4eP7MfgpcsgmF8ghhscMta47JwUK7JXfPq8eFpUtRM48FTKE97",
  "key29": "62Wc7W71Urudt67tJenPzwENiCGdfKeSarFwiZ2ABCAsrDGqYM49Skg9iknno6q4Vf9ZuPMkSBy9pLyRyFQkjNET",
  "key30": "5pBVZwhff4gqUe8iXL5ppbHPBUh2v5PhBDDVi2BMAPPo4Sr52GEqa4boY1MY51pP5LaYtxt5o1pL6tMDPBpxKZB2",
  "key31": "3eV4H9mbvxLzVfWfTpv1uWh16RkMUVkA9q5uHLWeD5MwUWP7VG68sCfGFXaJXVksdgbamaahqFHkczB4eBk3KFWN",
  "key32": "ZxXnZYqNHYMUXzUA9WpFeiJnLpu9vAtn1sxZ9JDMGrtNFp1EC24XfurX9usGb3hq4FhQiES9TKAoTPLU4R6Pfcb"
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
