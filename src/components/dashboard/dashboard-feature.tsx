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
    "48XD6i7bvhsog8oPNs4bf3F6oApgtz83cVJJ6XHQfAgyWQc8GF8wbpYLVYtcxDySH5X52Ct4H5PKK77j5bk578D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkjpuQ2b7SzRLH8vCqXKoVgk5YSihBMzNebN5UGq3m1G5yiEfBaFvpSS2w7JqCT42gHMvUwd8GXNPLAj59tB3Se",
  "key1": "4f1kqJdephvtqDZbq4hwtEamZGQhXtJpvg9FSQPEc3qyuekdYDeo8bz163qJ4XMGJRV215mJoZ2x82y6Cwsw4DBS",
  "key2": "DEG3Y8hvAvSUrYnfsEnC8ejp8SsJtnycGPWH7D4UzoWQXgCnj95ZLv4q7RPzEAPRdng4v7TtY68UnfpU1jysFYA",
  "key3": "4RKrPX3aqfYe6rY6gcxJwqidGUvuCEr3Hk1FfDvzQatx4j3zHAVHDVVPPrwe1PtfH1xW61iu3KQMbkvA1sfajCiD",
  "key4": "3gnobX9xa4uZx3eFUPPgGdou2F4SjBqUGLSE51jRY42ejWVza7hVh2LjASrbMu6o2LpAHuczMPjUsQSAaiUxac2C",
  "key5": "4kUKH6cr6GPD9xPrRGaf8fdnt8zefrA42KMB4WcMHtYbUjGsCj4A4f9MNHdUxNPa4NfVJ7VJAvwjxYAu8thqmwy2",
  "key6": "339h5Gtbh4v6jBBWURbTu8fTQMjN5hnebyWk97LAn3zwXEfbzuoBPCcT6wL3zceEXy4oSCmi88Y7vTdhvcZmHgZL",
  "key7": "4NhddZwGv8SrD3JZnBHePz3xRrqbnxtSUivKWxr5vYBjB7FWikJo4Ew2uf2MayvYc59JgZkkzEEsBkihbw8iek4d",
  "key8": "3xdceJzdL1XDyXN4mpVYSvsoDggJH31FhZa2iP2Ri97RxYvVULmGcxeKi3iqWvCQ1E11nLH9bWEt41bicfYL6zo4",
  "key9": "XfDQTXXz9x4mcaKuw7T5AN1CWas7Fj23uk6FwF3xh2rWZBYtAvEqU7yBkRy6aatdmufKh2w4HR5oS4cYDXrXQXA",
  "key10": "wqFbm7GuBiDQ6ykGyHD6XHJ7akdTLY66EZPoDPiCz1R4DRWzx8uoaKCFQnjtLWAiwt6T4Acr7gqup5Qz5oWEg8T",
  "key11": "2HFgZmHscK6NVH59bkpuNCDCmmvFaKC4xKz4TQ1L9d6EpFHsBWFdgoKFq8KTjTe2iLi1jMUrFtCHASzEf88TBCS2",
  "key12": "3xWr2DfdzJSn9qE3qa62LwXnL83WiHPnnH69xNHY95hcrhB6rc71NCRGDaHAJNLrF2vNGYtok6xos9Eo5QvgPjtB",
  "key13": "41CkZWAF4YUiQPju7bbANBP8UpB48EHLfHo8M8Ujmnhm3UESt18vXsNCWcEJFka7xUgvoBTfHyWyLNCpERw3aJyD",
  "key14": "3rLFJbNc5jeoWPf3JPZrE1nLhhjCDyDpEZAGUgjGbAh4dm1KDEkobb4vCpKXMrw6Ujh6D1qw9s715dpogyWetHJQ",
  "key15": "HMeDyEGmWnHfXsJZn5VpBJzMMEyZN2oybCqx28bugNys7wz8fZnv7LN3VvhPgiP7Ux2X5jepBZufNhEcL3snT3R",
  "key16": "38d5uxcdMCD8BtKLisFqewMXmKKJG5hiAuxr3639Ad3R5pS4FiVjXX4LCqsFGTjqdPjjQ9YL7rBaWPGcHFftNNUD",
  "key17": "49Z4FQ3X6mWwAaqF8T3TwMm5JPSqepYDCUHozdyHrsEWvMurjnWrEfhLBqT1UmmiCr8qeCyYGzEUWjsghchUpFBE",
  "key18": "MRYPyz6Pg7SUycjayjkSZ6DKnU5SvwtWcmwMnqxw23PTLEAhiG3nDmrMoGSVrBUZmQSESZuxoZAFur3dj2G271R",
  "key19": "63FB9c6QkwBAvVzpeB8ktjvwhJubecz71vwHxQpPi5cKfrgp596vJhSCBVtdGdfT5axE5G9zkrjc3RHhrGPiaEL3",
  "key20": "5sb7EUSxeCuzDD9c2HQtAecxKkfGHCSLQWUA9pqgqDRvZXBVgdTv6cMu8wFyCpaknXaisXVQyGVHeVf9QYoPtB1U",
  "key21": "XfVxA45AtCj9ParUuzZZHEkrNo1a6Q2kUiWEWjFeTfiKaW4LbvyoxoRjREGixH78Zs2M3mKn5sjwU7WzmrAfmks",
  "key22": "3aAS9zxM4Wmcv69BgQ3Xdw8XXiyRRwiG3JFfkSkYoqzqC7x143EmjUYnDroEdfuxCuYsBpFvSZYTVwPaSEoUnQwC",
  "key23": "4P7xTofvgdvC2zZXktvRY1wnxVDKqyUNz4HqjdW4UhtvFzA9GyuwzmoV9xVbJ6DnVtHfjRAnJhLfYXoLBPADi3FT",
  "key24": "2Eek6xcdUoSYjtRnc13ZCrmmMu1ch4HfVoeYHihtDTMLUngdG5oiVCvZpA2GcCQZCN4gHR4ro5AA83amGRygFk4h",
  "key25": "kf1AM6FKcKRrvhpepjfGvqSvN4QW7rZgNCTfX1BD8WWTZtTD7gK3zZViVwmKQFP2JX6TY9Zm9VxxYF8XpGBhoPa",
  "key26": "2X7wE69nuwUGKjC9ehASrYysjXg6coKxRyE2urW2TKKVQvvVhvyuqRHV2TVDCSdThv8v3UMhH8udCVBATN1irnpT",
  "key27": "5dK9gUmgpfEkgikdWpJJ2szwRXQrcZbMMyVk5BUzTrk9Tnvp4nUfy55sVgnCyN5i9cmk7WybpByvZ7wwqvnd61nv",
  "key28": "2wmui8zHvrbqFMauVDfEwqFH7R3qAu4EV3jotgYjYyq5hXdJDKk3hXLVU4pP5naH6gvt4qxnXSnSV6CDV3q5DAS",
  "key29": "3345twpBc8xDXuCUxZyXKUQiiMSgebfGAHBSEKdUN4w5MfsT35L7Q5ZunDQHKupNW3R8ej8peUm6Jy1zh7gp792a",
  "key30": "31zPGfAu5M1mTYrpnwBSHUqWx9tu7dGSvDJrXqLMCY5Y4D8UM9e9226fg1AdRZpNMAuJWXGBuhxHxKedBJUWG3A5",
  "key31": "EdoksqBzRE7PmXnGzi6AincoWV98oswG2fyn61DRDtkK6LJxhHvATP5iN6UG6ytxuWHHs2JtxS56G9gWj1Ko6At",
  "key32": "3g29BNg39ZUBsKqebd7xqzXcxocrZ6fHomJxwHDdEVBaDyoDjASYZc6zCwGkEhkCguwjNYDcFecRW2iTNVrEa7bd",
  "key33": "5jnyQjCUUZ5ojE9ky5z4aiQYV8pmEPu5EB2i5bvmC4JX2ET6WaaLqeTCeSvoeCH9vwFxro4VcbkLwGAhamWDaoUZ"
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
