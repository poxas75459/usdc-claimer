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
    "43JC7HpeoZ9hq5HhepGHmfdMQaWhwVQE4K9opZP5o7EQePnkc4sVa49TDYGUGXkV8Er4CHux4BJ19c5SwZqB83wT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4818YYWMWWetrm1fpiuAdLiqcE8optTAemNdJcsFXL7eNV4WLygV6SYK4KvMtpzwGmhwWVRCKtVBVYX3EPXF1kbC",
  "key1": "3UYvmiE1qT7EGWoYX45ttr482PbD6yv8tf4VuQk3A52ZuVU3qr789mKDNLwQ11TYaUaRF6wK3mkP4XoAFarasmvX",
  "key2": "2uM57WGL5muqAAYJLrBhKzZjhppdNcstYt9FEV9Pkidwnr6KRzXkgvqwED1uafPp2kb7UAmHJfTjmyDmxoRy37A9",
  "key3": "3jM5ZQMrMcp2y47JZ4GyTyGoJ1uxCj45rQaC93NdqCiKHhYFPdNzG47n57Nu2VK7TAb1FtVnqFDNHoDzA6hRsSiL",
  "key4": "5Fs3955PUtdgCTD7PN44ihJuqFQj1cavDZQfkahcdEciSj5hUkPDRuG3Fuk1JJ87sh6vCsgqjdY13AM2uDPfkfCq",
  "key5": "zZ6jeB6BzBY2hWhrWzZKAjpYht69uEkQ5LWiFAdfVHks6Z6S7633fvzF54HKSwDcxpEg96qCnfjRyDJm9yCU4mf",
  "key6": "2aLZbGk7zeN94hiuxZgvaRQ1ASFwvyVCmCBsNqJK8XtNoXFQTjcBp1QDegA4TnsLUPNLceBHnCSfWR1fFgSpFYZi",
  "key7": "2oRTjdsN255GYjTJuTtjQUZwaToqMBxW5FBvGZFck3P7fVJDijRYe4vmir88MSPkuDkpAcExQvGvh7vymucFZLom",
  "key8": "VuLbC9YSp1sizFP2QjKxduYA1hjqcXFr5U2SwXg2bGm4xAsRifPxKBXKEAik35bjnHxg45caztL4ie6VyXKsLiS",
  "key9": "q5gFTeybvT2YaZaWC4HBHtCdzaKSr4Nmaz7jXZhGLNXh9ACfp56wwiiQXybSTZyEPs3brXp36yDYPnr6sp4RPhX",
  "key10": "4vewjgAKoZMNssckdn1oas6nFfkSFQwpm47qDMN5HgyincyLiv7xsN2Y4tRyVYz8Q7DesXdWK6sxim3L5wjVjFjD",
  "key11": "4Tva1yp7BEMB9Fp2vjh39FbSse9AsLnPnSaji54HJaFELAW1E3yC8qv1wbbZXaULQ2MfPjiHAT9fYtZwUB5BSG4M",
  "key12": "561w5ps5NdX9PnGAhgv4QRPr99tBrf5LLAXn7YagH6qsuwm9bMTY7ng36b2qLMNTtQwCWLizfAXvvK4uJrR8McQX",
  "key13": "2dcYJ4kDvcVRqNkg7GPc7ZJ4Y6sya4uF9t3HdvQYpdbJMySvCydEGLenARzEY2tDER66d4dukRcHxeKg4D5Xo541",
  "key14": "4fBvek1szEx7QhpEjyH5Ew7LUwW5xZonsk6G6Q3PETCdaK9nJGqJaj56zDxqLAUZ6wmE54DxLCjDp9Djk8JJq5cH",
  "key15": "3abfdhkoWVozwMBKdcKiJ2vPaxhhVZFpZz3f6ezzHc2Vq1bLNUhbdzjuD5qxnyWKXoprJoEh1pAuzTSPxLfgHQJi",
  "key16": "r8vas8Qm76gfSCcrysNDYhD48Zqr3LiUPKxZWStCFGs3wDbuQadKKYSdnqZRZM7SbRjdJWM4LcyijSrar3ejbVZ",
  "key17": "5usgcaTC3Wv95UCL3HqYkhi6T2PtF4ZCUgsYUvXeyxMhBKYHfeu6xH5ReQWwu32nZ1j9jeoKvEexjGSy52LbNWL3",
  "key18": "31sibwhnUT8mM79mRDj2NMebRr6FP6y8K5PyiQBCYCHqb8DyECLa6ZxYGTcZP4XJiHfnmUeBERGJcfLMHQqpMr5j",
  "key19": "25LqsbenJHzRpYWBHHMyCp1vU11snLShVaYnvcRfWpkS6ZJbTikLsGZMgjPPoL4R2dygGcCepHTsAnMU22FXwNWr",
  "key20": "t4T9mLdFtMmDzwJQS7TcMdJqRZ26TqQq8MzSzRe2RMK1A9bc1mwSAjYnrjc5EqiArPjgdv8anVjfMnmP9PPnck8",
  "key21": "4yBddnGYyDeQ1XUb9qNM9X3dZix9JqvahXUKaLTNYVjKN5wFT8ajKHVQvr9Fjs8BinvjdKu4xa9v3JyGypk8SKxn",
  "key22": "Ww9DggbyFUV39vw9rJ6vX2xidDZrwkxUFKLK5aVyjKSAhrNYD29WbDngoBQMujycAMMrDgSrPDFhaisn86ndWpL",
  "key23": "2xSANnvmnx96u36zLCEkMjgJnzzRaTWcWE2HTcwFW12HuoeqUaRdB5LYAahEePjvfAu6PVyTpQgxzx5Nj2g567di",
  "key24": "25dFtMSNPQQgzjF85q1oXe3FTtKxeqUNVwY5Yzp6a8aDj1de2qJdPnYeyXKLLcwmYUXLSe9yRE1Y8sbCVzsiMdSE",
  "key25": "3TUeETRKgNvfLR7mU73MsftGjFQTdgu7hG2GvKyf8VU7xpqWYfSZhYHc1S4tEY5EcgPEb9CMcBfACzKn5wqEeka7"
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
