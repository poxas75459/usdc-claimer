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
    "35eoSCTVJNMqKcVNfr1EJBAw51zpDA6BCuefm1wwJrmwuPbscH7wpHMYruqdD9hJ1LVNsJTH6xu6tgfyPpenUB6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1CAji3GbBaBDKM1pzWWbi45MTTGNY5xJJfQWVQoQunptLqeUSYY1LZpxvefpRub85H22Uxw3vsWuDRCRgsTGaD",
  "key1": "43SSCg8GyEntrxjLM2iXcTPD9Ka7yvYtWTdFt3jGTNk8i6pNJKkyeazcnMYob4m4VCqHezVvUJPcGF6vztS5fPT7",
  "key2": "pNjtRtoa5hB5V7784uk1aGQ55AXiP1jsEoBRrtEke9VQzSJna2WbYcrd2i4camH1jDGdTkKB7PC64aH1jG8gqU1",
  "key3": "3JkKi1DAxfko9XqG3KAdbcJANUPh211ELvN3BHtodWUkixb6hXUpaMiESvM6BjSTF948MoFh7iykQhL8HbGYvfJA",
  "key4": "3MUocTLNbxhx7AJwGv8swkFc9GXQst9bS8u3UjuF7dc2TCvKPzfwaqKqqgUWG7RSHgzCBDpkNjCW6CEmWyMhSri1",
  "key5": "HDLFgkPWCsyTvgYm5UDGGyUxZuh6fWudUF2VYPfnQs3Ft1Yy9Z8Seg33EyptGtyEJQ8hf4mL8GqQJPfXZnqMLrZ",
  "key6": "4EvqLo176rHHczKSmoXdGUAvvsAhBV9vgxkgAhEdgSqx7sPKdknCQXjBDyZRm1eo78gqYA7ZL174YM7bReb9XAef",
  "key7": "28h1EWVewSwvKq9WVZNcQN8FRnVNgFRMZoQE1eb7vKKnzo2etk34paAKFFf71frWBtJxQBbpR7bJx2GUjAYJaR1N",
  "key8": "5PjR5V9nX1Wb416FY7LFf4usuRoY6g4sVz2pS6Lq1izK89yHZsNH7tvwEfFEXPGcecVRpAkLUBkhewnGvtwppT9q",
  "key9": "HYE5apFqZHaforCmJQLASiXsK6UBEr3XESdDQpzWQgpdHvtkfGREbnQyw3jbvTgahscYsL9G5KqArALAP72ddqG",
  "key10": "5139qCmggB2CxVmiy5BNL1iXz4rTgQDAU3DZozt7om1xmYCj2xXTMH3QakpGHomsxpK63sS1tbfXhVj4qyozs7QR",
  "key11": "5EzAJ2S1DCgMLGGU94Qsx61ES6C4wQRkGBFeo6bDexjiWrVM16kM9PUFeTHMknFTQzbLVJ5Md8j1XLgFNoovpDs5",
  "key12": "2xyXbDBStFtMYx5yaVWsY3B7gAgh3a1GQTSrK7nf76nB5Liwajss7t3ZBzDTMFx837VR42ZkdVBjHVQCQBk8tqKm",
  "key13": "zXS4Zpf5519anHE5W38MTUEPSztCNPpoNuijcbiE8E1WHoV3awhf683UPUnfspQDSrRKpTr6v4Pym3G8RS6FTND",
  "key14": "63djiUCU2yCazFtCrdUVZPsgXNvd45CSy7gu9aaD6YMXbmYMMVMTP6m8DhZGGkhabaQiV8gfJWCUGyjYoQgBhsDw",
  "key15": "hYQ1z4D7rkcTGH1VFKsM9T72qb4iPumku56dp8B8JgsDcHh5cw4LjDR3aVSayMSFpyqGZV3WLnBC5USCYygmRiH",
  "key16": "JUAfeTxeSYSXfL7SvMPAzsyaaBhgHtsXxFoJvxjUseV2oKZNv55j2YCEgDKZuAJAF9MtjGXN1mwZqvTvENt79G4",
  "key17": "2Mv1C2PwHVHF84KYoJX621RnxTb3vZcL8ec3mBjYrRAhTXSMivEXf31FfqoDWhaXoj68Uuf9956AS2NqmeXzns4G",
  "key18": "2BTXLJ8KCKFReVwRsrasbcUzt2UpvJqA6phWwZF7Zo3775sRhBotY4A9gUmrjkSSYF5HjwuuPP7L2ohzt7NiCCma",
  "key19": "5ENPxAXh4QrPrAuQcFUL2ZfxUg9WzVVAXbFtMoKcZQH8igMEdoYkrQNRihxUwNi6GmkU7nvowNcrpuKAgPDpL1m4",
  "key20": "41Uew4u2QEU8RwKEDHBMp4koyD3SoqHFjAquZN6YDUiJrrmPSKBJrnp7nztECzFr9UhAgHkoCdG8c49z1WfvQsU9",
  "key21": "56MS4FW1yMGvDziWmNU9PCmiCkqq8LLTLMgmod3Mrbsz4rEbPQYXSCrDpAHeQ1oj7aD9ZTsCEqEHw1rUntrjCUby",
  "key22": "2AbNn3dwzMMkJahy1opvszHHofTRtFdmMBgomgTHa4CjduzaDdPEp1bPyFSLx1vm6W3owUFJop4Xgf1SedBLa1w9",
  "key23": "5tz9ZRMqHTjdZRyNm2x94hpxaRjfoiYzn9YYybuDbwNuEGLZKXmJMnV61YiNaoxGFWJxzveM7GxuYZzrt9GZhitn",
  "key24": "5XfbW42ojK9cF6B1uA6BLecHWAomjwCZCoPtidaCNLJ55FqTBeGr3dT76vA7oi3v8ueewGJoLf2TzKycYnUX6dRc",
  "key25": "39h2vM4TvJVNes9HoNenqgvyGG1BevojVCp3Z2975MDqy4HPHfR7yXY1aU1k8gsULRxa3XBQgqZgwYN1NQCoihx5",
  "key26": "2saMB4a8drVdaerxHG87Bynf6cUbEZMvvgrQnK8Ur5CgoehaeVueCaqjRDknJwwL7oe4QKQFxwaiiiCS1iGrJmZY",
  "key27": "4HZ9aAUn2XoznjDp4yFMdNpbqeypwDt5uZz55EGRxZBHHF1yDgDXsNrYBREZc7ddjTzhg8292ASfyHLskTppRHzk",
  "key28": "42vEDNETqSdENh5fGNnnCSCV4DFsYG5Mhy8AGtQGCMq6npbCQcoNNPgpZKrXM43o77dBPsquxQCxW2Evv6s4suDf",
  "key29": "45QgnewgA9FQwLLUxA9iMigjTNEGQCgTMwzUqvrVbCwtXvoRsT7yAinwqZgTsxa1z2xSvBZGCeuv9ynn4AStxhMf",
  "key30": "62s4cruDQYewSArG6dScCbUkDtEi6GZm6PPTLovskK3rzYTjP3RUUqVCyj5ftauPzKXF6KnyuCVsYHFiCEHH9Faj",
  "key31": "2VFKoGgyFE7N3tcBTeHjnN8AxiFLwZnCBgP6iTEwCPrtb6bNtzRnXi7NcFZwzx2DAxNVU8S5XnbXmXDKgdE9CDHA",
  "key32": "ieGxSvz4oE8epWSshcGDZvJhPzgQo6RjN2ixkXYMvk55FABg3HupyVLpMPqsUftUkRQa5NdyAwEY7WHTZgXZGRB",
  "key33": "2GwAHqHxLdPgS8tBgLGY1LXBP87pvCpYQZWWrpatMR8NGACcs6NTZSADenbKVzeJQRYecgRBMt95essy2EkArbFY",
  "key34": "2oNhfHQf6otaJVCtS9SJ345AvoQTjCyDLAg2mAd7djCX5F8mJ4ssCKnCa67cjTKFqAd1HZV23Y3TCKfVxmt6jnZC",
  "key35": "3KNg5iumALLQRff73V8RyGxGAUHhUietRwPnVDfCQAtBeSkGDagAbwGf9Mafj87juSmm4fvkS3JDeuG699nPNtfh",
  "key36": "deT7fsk7ybwFPVX9vDV3vsMBcE2MQi2WC1GAgg6J34KAZb6w4GppEx22FCzWFy9hNoTDGbjLWmon3XxuEMzRjpp"
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
