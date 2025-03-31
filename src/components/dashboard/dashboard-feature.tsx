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
    "BU5vfcEAJpvE61g5DFjjgvuJ9D9hxH7XAGqUmAM7MNFHuAhspb8kkekaWtVxqxhfE9uBW4MuxqXCX9A3VZ8bc3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nJuXHdGyJv4cyYxjK8HTtj9yhEG1JTWhHjxsZyAdBRiDvyPAGno6om677MKuL53PYco6LSc76FXiD3wg5JiSBu6",
  "key1": "5rW63MxME9Kya2EBAcD529bR4XBGwUY6iJj4J854o6ar7bL2Qzaag4UfGd2HYJKMBzykx8zFJ5MxygEzPKVzMDUp",
  "key2": "EyeaBFKsihB7iHqCyVMS3SLHKWTAHRNQ3CEVLJ8QubeNYa8D6XWX1W3HcPtGoWj18LXKgRzAXS7ZgP9iEFTbpoh",
  "key3": "5ugXQc4wAVtYXQUMq73uByWnq4QbHTUgapU95mj4VLc1xT5PXBz3CXCGoMWFR8oWpsT6WRAuYzPGbHRCgM22C4Tp",
  "key4": "F5nzjHD8HwQgVAsjz4L65CKvKSKPu8XjNQB8hZmsG5W3yurrQEWzea2ZSscs5FnKLkTNWhaN2yy4WN8AFj1jyT7",
  "key5": "4rCGyGQaiKBCga2qsGAoSGQcpStQ5MhGYuXtAHoAJ3wWYhSuzRcHtjnzQExSGWHG8YHnaP4qsv3zdNXyipu3TLPK",
  "key6": "8eHirgYL8yo4FnurVr9izUQx9zKw35w7YpKuvucCKJ1YBwqRMz1Z22RMAM78zncFLUigr4pE9aAezbF9diYqygJ",
  "key7": "49h5uSfkPxUhZ5KUWQ9ddBBPUJE1PFNNhwxsGgtt7M56mTTx6RG8AEwQhs9sL9nU5eMpULaBveFk9YTzDSzYzsVQ",
  "key8": "1Ze8rtrH49gnKt2yjjDKcYJbdNuM89FhbakXdjmWiBVZ6tFcdNwUuZxU5es4D7pXmwsMoVGdyeLQip4fUEfYBGC",
  "key9": "3iaswCFF3ZHovtgzFFbpXpWgapMK6FqUEcdJAD2L944ff35eZrnJsQckdWe1qHYHwSXMe5U3rkMFsEpL8Bp2hEyz",
  "key10": "SFXqiCRb7KAwCQf1tnTuoSJoeCgmJsjBE8dkefAYRSJjFjxSw2AzvvXpgshbJjhgfBuRCbQDvkxesPfEfhyNxar",
  "key11": "2bgoht12AQJywtFWkRoSNhUyUFVoA2MP4tgdNuCkVmHDqeTydf4WkhK1xMXE6hDCGeBuFbVb6xhVyP2sZrxzdjtr",
  "key12": "5vqcHL88E27AcYZqPYveaUXPH7SioonamoUSRftuaBUHSxnZUwu5pTSzfK8ndQATy79k4L2twNND5v1gnfoFVsYK",
  "key13": "z38um8YJx1FANXWnvyHqvKXcrd63MAxD9esUHbcWea1UQdXCy2bcJmxUXHwDUzuXG2b6DDLyJpVX76foLXtWvLi",
  "key14": "rsAGKBCRcRVwj4pjBv6V8RQgfgtaeHSAisdBZN6bR1A4QayyTKSKerCrynbN86QffW4k3PMsAsb3WHHbJUKsMk3",
  "key15": "A98TNQ6oEEZAVAZgCyMEX28C6YTRYygCL1qGTqb1tCBw9sUKnfBRvQWVT6hjVE3vhvxyjay5iN3JnhHpk4CxzuC",
  "key16": "2yZ3e8iEXZjYXFZmueVaqGfQXdPkBeKnpDC2Y38jmNfwQPXiaUZe5zqibmoWved2QJC6u9uKtbB5NYkky38SHnjm",
  "key17": "46kuJEYNZrpcuKpGADiRf1AyEdDRp1J14jCNDbm677MEWCSmiASiDB9htPc965YHUGFmxRhR9NznYNnhhzk34Mh4",
  "key18": "54wSfmW5XpNhQnxnxouwSapbW67kiBbrFHvuhFHkJm7sUuMUGpsKP9WcaH67UEFomL6JBj3zF1VbogPzFw556XdB",
  "key19": "3znBnGvddix8MvLmjtZ32NSQFW65xL6UaLRvoif1wDaBsxeSLbZgufUcrh6Zb6NLwdRmiaypxfEGNwFvfZu7tTdX",
  "key20": "3GF2bAUXe2kC9neMGvSCxAKg9BzewXLwsMi8qHdVS7K6nCr831uDZySFrUrjmoDFzqbKrCsDc3iuQsdnJJSqwQ7P",
  "key21": "5bxMGz7cxwb4Q5JuaqMgY6utNhja3eqbe2x5jhiCmyfbCs7tHfqrUFHmSJU9ki2YEWYFTa6m5LpXp2E4U9yySKTV",
  "key22": "2dybfEzgYog6reffZp2mn6DPoJMTuHxw7GWkhQukGxhaKizw1x6wmSV8mpBWHHCeUvKQUJBtimk3DgTTiWsc3Njd",
  "key23": "3nPWX6RW6c7WhcioEPbx44bChncjcqtgHT9cVezvHiGZGPWSuXNbaoCUReeNRXnJduDVtccu5SjAoMu8NLp5LwCY",
  "key24": "2rWXAMtKZCBiLDytMgYFrnFG7sMCtviwYc3qi8JntnoJ7tCHbBHQcFKZwnFJx22W6k4a13Nsfs72p3Co2rWUKFBb",
  "key25": "3ft2rw54bpXuvjVKE4F3YSN2mag3an2SEThs5QDijKjmAPK7uDZwWNT82PojxVegWbaKVhSun5z63cVzbZs4ohwX",
  "key26": "2QyPjBp6ARhtmrqz7fjtzFgmcq7cFAZFoU6f2zgxb7vVFAJ7BP91yVyceyu7z3KsiPPt4sPtkDitmweyhN9K1MTt",
  "key27": "4cr2KVYonvRWcGRsFvrYuWwsxFnNBZcwrhQrbLsipbxZ42qeCp7vYizFURrjyhSAmu5BgwDfgALwPTL2pwpr6XQL",
  "key28": "4bXu8B4FPqeCDcrwB3wF1xqn9ngECPWhqTkL2oV4XQ6gAWrLcuChnU7XWC9P1rsKZ2DdqbScDzo2Nx9z2Sxwj5q6",
  "key29": "32suMZGEywCSKXhE5aLfdJVa5j1sSTqLvnZCmThNQd9Zy1kLnjtvBArNcarHWNNT15cRKcupi2iqW4vD1rgtMkPh",
  "key30": "3Qd8Cci6pDZum4dhdPGF8tLUsZKwhhjhZJ6RMoBugHZdGKmkYz4rhv7UegANdX4Ka4riuH9SoqCEbw1jiJhnUEnA",
  "key31": "QRa6WHBhUP56jn3mspdhUDLWkVbAd4AM2vTywk5piDxnopRxHH5KzoEZknwNCTrvcjjPTfx2CL2TGc5AUvLkgkw",
  "key32": "3xPHPUGbhaHqeRYYLVWTWUoJLYrgkyVeHeS6yC6uv7Ep4YoHxEfdvqmW2GW6FYSzbrBYWyxb79RiHxqfWhW8nNGB",
  "key33": "RBTQK8M7rfELXMKgYQgfwwyQUQTFrvGBmR2muhQmGfKKSHPSQzCnv5PKt7Xycfw5GUviNqGMBD1jhsLP2EkM1Sq",
  "key34": "63CNpVYP6FoFb9eHk2GvD3TuL9gkF1dDjmiMbuuBWCmS1cugKinDJNTRQr8Vi3WMiHXQdjJNGCoMyRq3eymgwM52",
  "key35": "mdcnLdWxxQfVxFpD4v41RhMSEoEdVQMjC8RoXgKfDpS3qiNBXX4YQJTkJvfTXgNef5xeYQfp7r4eRiDwqfSfQUH",
  "key36": "4862aR8ve4VWKkSTdvigMegSRy9xB88R1EZ16hNaCm5zdNsehgvqvLzEoTko9H2jekx73z8KJHVUVJ45WWVa6PtL",
  "key37": "3XvYQndyz2XfphX25ad4BcVBrXQw3Qzamty9Pohn97KoXfXtBU13HjNYZmLRFiQAELjEiwe1kV64K4Lo4kRKYpYq",
  "key38": "37cVbd21rXdvqRkzrZgNktMH6dpn3FA1wNMfUxXyqtJJwFU1846hnTVoMR9rq9wVxee7PgEgvZXhoXhaa1abS7gc"
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
