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
    "4dfVfr8yjAGuuu3mCL8gsHoNbuAsUd8LMKUXpXaKm6Y2HAJ9zj91ifFp4LpBxqtYZ7Jqximtw8EdZpBfgyhsnwsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m42oeLvWWQsX3sPmCzEGauyw4z3YzMzuXZ3nFfDmf6yLBUr8jPgFPYghhxLwH8vmJCARR1m9ef6XomezNrgatPE",
  "key1": "4NBJCySJM8yV9vW84rt18ZU4nYpiQoPm5QgWYXrzDQKg6ihCeyA8e9wWjtiiR2TtqfLq49CyGsHSU9FoPHZSfvdr",
  "key2": "57JQ3HS22DmBicYBxqesFVnNrATYWmA76RBKhyrJ1ssYPceYNRveVLp2hs7CUoFZ3yokQea6zcsDeGH8JzfyfpHg",
  "key3": "252BQqVZE2KE9kja5XxrecjmU9HoEQJYAehC22NyRpotThfayMr4AQBXnMY1LMNQtPTeSnit91AnAzEqY4pJo75G",
  "key4": "4s6wVk6WAfrjuBYHm4g3xty9E5pUCpy5S418DCuwcSAngPWR74347SdQXiWUDpUcU5qzpenu2hDtQWoiVRjgsH3Y",
  "key5": "5sp6sDvmsWR3Fm4wEGzfXTFwKsGRMcNW9LCcwz8Eo8psDHaFCJiGyCPNLSQDitw6uySnzDtyWY53qpDVpAcw7fxS",
  "key6": "2yY9qEFbxdx3snVKU1YUWTFV2dMfceR1ZxgbDJScPheDHzMNnzsDGuwzuqmmZ8NbwGCduvFrdxzEnf3ZUuhUjeVM",
  "key7": "4am5uudN8XawnEKpkiy1SKtxX3CSKKMWHaAB2bKzES7Lr6qvtXGebiJFi9xkNb2ZiHinBBLViUtp62yVZVbADrZ7",
  "key8": "cV2o5PKPUdbB99ouTSt8AY2nkYRmRnyMbgMctWeUVWBvkpXEAAc8SHYbmHnHGvTZNUSavYDwQqDmcuNionS45Cb",
  "key9": "66Qxf5patrF5rTTotuN4x1ooZ22prVRFYQp1hx1L6jXivYWqj8AeiM9iwcHNeps4jnQMMbyPfbWHLsB886oh6PYV",
  "key10": "3icvcWEeTqpFBij7vTr4SSeuWudF4bFbAGEcEgYd35rMRhbPu6NyuSxXTnV1iociwwXxSwxzW7wkVRn5QNPZDx4e",
  "key11": "5TQv4yqziYiUsd5gXKex8Sb6LinWghmg9sxxKefooVn4UjHNcctuFEi2EeTNcRPeCkZW4NKAfjddKWsTopjuY6Z9",
  "key12": "41dZQau9wPV6u6FtNEyYKMwtbedztHiiFECdkddFD46ZigUMmiitDxjGmU7bPk1Gc7YZRxoPXVGXwm837f1pzohn",
  "key13": "YMAuZNNbUSwugmLm1oxTYLhGKxpbDvwH9ShmqaNGDax6FDCPDwcNPktKiPnxkqU28gC2wXU9Hgi16aY6q23VEGR",
  "key14": "49ggrULMZSDAQoSRd5NxAop7ENrN1FaVYPCosqb2LEGYDxjqvUDQtDq3DWPRpPrd2Wzx8wJFDFzEzoCkZXMnNqZa",
  "key15": "3Q3zEodLShLhjCaep8mVVtpZqUHBuH2wzHFAmGNxfknXQLsXkiqFC475DsZXeLV1iS2iAt3ycohEuhu926tf1DN3",
  "key16": "EuPMVmWy2z5VsS25xwdRE8g6qAYrVo4uLSy6hYwVnnDVUWFyCP1qnyZVmiMjU2Y118KmahWAXMPL7yRWDXDx8Gv",
  "key17": "54NjSgGRtHkoj8AyoBm3Hn3x7fjm7ziUPVg4ZwB67b965BagduMwH4st3xfQq1FPvGTREoLw2RSwthcdcrELB6Rj",
  "key18": "5CgKBdEEXBr5w2c3NLz8yegn2dp1LQ8RZu8kuyAJrWVCDHmNrNDQbRa31sMcyFwxYFrHm4C81BCwsnrrXi2duRUh",
  "key19": "XzbtdvyVJxuzf5f6U7RaBY1vH2H67GMWiT9d7g8hogtGikDCWGA9tu2tTm1iF4ssadHU8VEazJtcCfrn47zJrqe",
  "key20": "2Rj7mVTLgYeHoX1mrVpYXWY7MCaVV8xKSnA5i5y9gwMnkbzMYfz654SpobGp5HTh7vbGRBU3Km1xrTRjWrPWgtMR",
  "key21": "3PBjG4YSLD5HzCSTJgSmoG2aDAtS9f9u5B2DDv7HCY2DTUYpjN6rfStccm29u2C6jSL9JXifNFAXiF53mJ9fMUeB",
  "key22": "4C3bM9hZHNSdm2FCQGN9AA3ri9dPLc6pbLkiJGkeX1JqLTupVyY4AhU5x4dSWpqLbd7zG8GNuz5yEStch2tCCyff",
  "key23": "5ziKHqALGs58KTNKHjHHzV4AxP1rebsM24E53fw4DwJpAFhY1FXMj9HZe6o4V7P6NLMmU6rM19eBtDHucpdnZ6EG",
  "key24": "XZDA2kEntZGqGPLTksyvRwvdahkDVQHWBgFEKkTi8vM2ytp8kmqqAYsYtnxgSkqVYxqbVonJvR2p5DUwXGfNpC2",
  "key25": "dbPVK69NM4tkgZw5eQKLLhtm1RPSKS6GyDkLkWrMs53kPyeU27AXEGFDRqti4psJUu9DKwG78GzA5YsurmewXAR",
  "key26": "3vfmJ55KBjMfJad7WDcUbg62QtCAiHHL6PQ4VaiBthW7rN7YWsjtk5CNNpCHaMUy3r3ESbR1DZ5LAVddjGNLemmN",
  "key27": "51Pr7FqSN4X7yTogACcaRXhWNCqqtjDHAuJLFGEgCPMXoWxYS89zrQUhiP9GJCauZFRzEaNoTdSsuKDNHn25TpfT",
  "key28": "2YKpfryjfigAbxizbN134QytXrpZG6cJnUMp8AHUct2GnbEDt165ZJEPYcFjGd4gBA1KHebAHjXtzuJ1n18rvKJA",
  "key29": "oojtAHkMwKSwa9ZBEVH3e1AdVxxtTU52Zq7rqZJbKiJEYMyeBaEQmoYnUd3NutqRQ22nbGY6B3N5KazyNzCikhi"
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
