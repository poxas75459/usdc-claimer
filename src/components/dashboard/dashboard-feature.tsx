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
    "3hAv7Cd9d1u5yoy3m8kakWDpKh3UVeFwWrt4ruo51navD7BaZDyP5wdCdySxRboTFdJsqnK4mUU8xP2hjpcj832U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8HG9uFo7HjcToqXAhaH9VtGfpbKyYm8KaG3ujeoQKwZvHRhZc2MC3zPpXcLf7t3QX7reD5JGHXS2bnyzHFfyEt",
  "key1": "4zo6QA9m5KyJWQcWR9oNLSb8X8Pz7UUPLRjFStcAFsiNtcj3z8MwoBhgPw9CtrXfTkgGisdVUUSAfkrDuDy4Hkry",
  "key2": "2n9KPsvkMf1qFH24a1fhfQAX7GFbRMTKkQ3WRZywUdKP2NnGFAFA7CDnUbUcPdkjyxRi7EWpwaeDVUupFHDSfRx5",
  "key3": "54LVGiiTTbM9bArhHr4TpWFgXWiCxbgWQgCLqMr45XLw8wyT2ztaY7iRpa7qTCiEUTn2DeRexjok1ETxkKWStEiQ",
  "key4": "43z8ScKUKSYPyb7nkhrYk9pRP4U65dbUFh11H2adD7mkLpX3ATrA5KYyYUN6FyRnXWbPJSy44bNLfqoUbCq8YhQM",
  "key5": "285NVxTtahMZUp9UyoY3uQRnAfYrjsE5f1GMp6oWERAvYX3jx6u9RdbkKgacEFfMKuYvnBuVYb3oCQJgi2D4DzUJ",
  "key6": "4vFq4E3qJgGSnvrfMSmp6AvHgHTBfEW5QKsn6yhLME7cVshGybeWycfkT3fMqNpSn16kF7oYPzK4GU9sdo99Rw7L",
  "key7": "5jcokNbYU78kid1HER4VeS2gpUqS2XFzqEMZvgzLpAifpxiJEZfy55Zy8JkfwXiwKnRx7GzzuYHHEUf5o7WSZT5r",
  "key8": "2BjbHkeji8wJT595zDW3Vp4xvcz725AY4Vu6SgkTqXPKqet1qi4HQFCbLvUEqAhckhc42HUKbgoNTbjxhV9Vhagm",
  "key9": "5hAoozpuaH45xzgk6n5RrwuUyBQsc3uQaTyD4gDijxCVKQuiAFnZbiZrUFh6ymVeqYNRBthdJcKQNxwuq2qxDRgV",
  "key10": "5Dg5FCosXumVLswLijB1TLtM8vCR831N3LyVjdZEvH7LqdhX674KUtYmn4PQDQv3bXbvBiZqRtTyAZVN1veE6nb2",
  "key11": "3R6nRo9ZX52T1mSrswoBz8UuT5CvmTBdTthRLEbsYpSCnSFJZxDvxkJ4dY7t7VU3BbDvYtzzpvpPKrUzCg4V6H77",
  "key12": "3AtG4ZY5P2ViTEk2221KL969eqhu8e53LwneM8booJfavedtVSQ812B9eEgc4X5A5RgnnaChyi7BEvxUcZMvpbyE",
  "key13": "4FKFsgw26qUUyvamfXxa7UZs1wq5xwcD5qZJ1NdjFSUHuC3vduesZFZPgYy7GxNKkwHNN9UHK1fmQaGKL77YFgY1",
  "key14": "46LbVGMcm5j6emkUcWcgcmYkfzSjPFLH3qrEHTcoFoCuStoq8SWZKAm8H68E1GefKApnMgwFDDgf5Sso9vLhgzqy",
  "key15": "5GZ5rHWJyytzckAzqAx8VmNZXLj2rC6e912vmhCxBWYjsTK1wZTR7vJzCnPiLbEuDpmaWkAzL6uTeGk1BSujhh7K",
  "key16": "33SPDtYVw7KUnffPNZHyy9aKaGTHQCeVigrF7LSGZcZfoe5VJocUkacTigo1TLmxXWTRdjeU7X7RzUnDpTn5vtWX",
  "key17": "5wSFwDq6fDaqoHjqmEFeaxNbo5G3Dh7hCMzyBdofMAskdNpfGujsMhaFPFEj6FX395ontJfU3jDKGiiQ6fMoLFKb",
  "key18": "3wGkdmdVxri6CCvvqeX95DzpSF9373J3SfpZnx4gPgK7tYpXKUkVj7mH9aiCEWExWyPWYQVfLsG86L48PBCF9poq",
  "key19": "5CW3jvKaQSyrETz9aqFy7UXQ8RKr5ADvcibREuQBrpra8TBeLrvBiq5JMunDWXzvg21Uyq1wQ84gaxygxHUQgfp9",
  "key20": "4biGaByX1D6qWJp6PhLP3oNPg7XjDiMoE3e9nJ2iG2iBqZoG3hyNf2u1VMuxA8QujdbF5WdXS7yHLgT1DPSp4wFJ",
  "key21": "xnD3yLXz2PXUqBBsDU2TMXWuCW5M2zf7YLCTgDAjrh2FeU68DGtWq6cDhcS8YNqytYTMCLMjD8GRLwweWCDmHr7",
  "key22": "3TxXCtTXhbmtiYrp9BgxA6JftJcGxT5pkRpXkb6cdiEC9eVuq77AtPw8cCKJbzZkku3DxYeBvFFVs6apf8dVz1us",
  "key23": "4supsc7c29Rn1PU8YshRQ4fxQjmUEoEPc6zPrcGHY1fwQ7FfMvoyu65kW7o8YSbZU5E6F93HMmb6CFtScNzfyuMK",
  "key24": "2EQgSeqhCYxiQkiyDf7u7neUYSNrsW3qhifAbnYrAzwaY1jjpsou28fnz1eHV7kPRVj8vxJq1tCyTBdgq1Z4L8cH",
  "key25": "4ii45tpXrwry1hw3riYeNkzgM8oCPzocq7ms8yzww95F3sgGyRjAmj3FT1ZehtdmEn3nMYqruUwLcMohcvUJhRk9",
  "key26": "4ESnVcTvGCwxdHSH5HzTt1yT1AZtZqACPpd4uZdicGhdNWDkBVjzhgRqMRrTsfbzg3hprp9vS9DS9WHESK46Y7UN",
  "key27": "2Q374p4J56KnFcc61qCy2iyVm6BhjZQ5KiAWHBGF1CsC5qZzGK7YzcpD3hiR1mdXXGmGzNeAoxBDAzmNS6UQAg4v",
  "key28": "3dkKg7HrYpNzohuA7WRs4HprwgQ277NZJ2GgdFtQgJ1vAebE6M8prVojz18w5QWWkZKkmwJQJqUNyRr8ZuAaxiGf",
  "key29": "5ooao89UUAHCdynd2VJKmuYkpXrLhPbcLEizcZEtxNJoRYkdFiP3FfBmXGaq84k7hAZibsAhr2vnF6tztSysZNvK",
  "key30": "3jEwxR6qxTMa2N8vQmx6VUqwqtwrT5QYNnMpT3pWLnFa3vceL6QbXgcFgMEq48nApAh6sSpN3GBAD8WgvQo7vf5A",
  "key31": "3wtCsfXm6CDekBRkH8M4Do6d6uNMRxRNJ1nkeEaYn9TbUmz5tHZkacopo3aMcn9kzEu8mq8ffdfsRmDowMXDbrx2",
  "key32": "4Ei6QY2iGbv7dtRYFC5L4M6iHhh84heu9rCXhTwuBmW1ru6VLbYSKfMMA1GeuANvPQu1hiBBeTPmDpUseC2NJLyk",
  "key33": "5khpo9HvXwU6ewvPUdV8o6YDhkXchTbsnZau2Edg1ka4HWgpC1dKWVTG13wZNZ7oqCYzVhftBQp4zLAL4Lj3L5DS",
  "key34": "3Bdqcvh8ZBFzFofwkLaDyhCgwwbk48MaLZzHTsQvMVtVQMepUY5q2LamZ3eM3GKR8rX6sCU1GLpJm159mcr81naH",
  "key35": "2NPnNHEKgj7BzLQpdbiwqohyNAHyJEmWVNVHQawohgrJKDFKAMjA314DP5rhYd7uRbY8QD2YP7uFWaVBxpqADQaC"
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
