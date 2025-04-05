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
    "2rzFCRiyUT3xst9HEbxoDcZynsF1tHgDPzijVXsdNVhvbt9KGdiwvtY84BYhgARfxGbaFYUuD7DNrMAmdXp2jFaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmUtsKppfSxCprx2azbRiCq5aRPTpiUPVxzJ7PVSPX3L8JNoV3GYcJntm8KK9Yx8zw5ThniomFmkEXXxLog3f47",
  "key1": "3Q6WkdDBGmTyvzbAFJ5HarNtXFbdZ4BRuX5Sv8tWUGRrhyXGZtw7KmnYyBB9hSLyTx2skDbqq3uEcMfWLqKd6iCi",
  "key2": "2Vqd3g3SVEiatR3AcSnd2JhbQNCm2uxezX52jsgLBo6MZig4dguh5SzE1iJvEw5fecT5jeSTdeM9yrLM8mSBYdKN",
  "key3": "39EkiFcpS8LWBGRV2PyRaKJ5taBJkZ1wGbRFczBgCqZumcmY8fuc8D7JJkKoDwY1u1YK51At1d3prjPR6hGbjXCs",
  "key4": "Ev7Wk5PFY4az4J3H52J9AMNunEyg7c78HpW7aDfEu4sbL4hCJynKD2LhoVCYvR6st2dYasMj4RmAWePMiVdgSDB",
  "key5": "5AAzzdKCYuHBYeegseBk4XFqYD5wFwLJHMFPT8gd9suJkKBL8kNdBQYrUsQD9pkKRURAUzR8TWxuHD2YP4o6hH69",
  "key6": "3L7iXhs22md6nDHSM992DUuYuLNLjgEbWPFNJyBVnebosy5CrgocRK1bmEq8NsYyag9NTfaHvZnM5Pkraa9n9LFj",
  "key7": "5yoXrHPCuYznWwdjP8bYahTLP9YhMv3Bh6Q7cadVdCBFvsUkktJoSVUe9eME6wLkhubGJ3j55saY2p7cDbfPjRYd",
  "key8": "LssLZrV7DKWdfMGsefXV4eLcRS9pootWkAbL9kCTNmzV2mooRpwb2oRAEqcGq2QzWsnuqpfTxij2KYncuUYEkN4",
  "key9": "2ro3P1QWAbK9GUDKsunGf1z48GvrbKCGJm8Qt7AMoR1L5qie5echq1GnP3cb7KYxKYoA1GDLk3paznKGQ7Z9XFAq",
  "key10": "39oKeZtnexiBQAGguXp9YaQ9yV5A9RU9YdYdbJExmodBac9QkAXgehVv7xDBZ4C7E617kK1fSCKv2zgmu9dwNgE4",
  "key11": "4nCzuXmRJ3WzznAG4tCwvVfRPik8oHCwr44AnwTgA99PJbPgenVHFSxTFd9oqBAB6kVicgFqDL92esvoA3wpSXNY",
  "key12": "4L3kkYweD16ejPUK2hPCVt8Cs6o4mTpJ3oHqsPbjBgdhr7pskwNvVM2dTrgWGzoK8zqtQPDKnsAjr3q1DoYTUcG9",
  "key13": "3nLzoZaQdYUCCsEaNSVfFizaaNGS33rxExenSGqpNv53grMMK3hFfsxGbFMBDfdueprJFiW7hBq5vQgibhg4yF5W",
  "key14": "5EB8mHbPoaSFcmQjZdfYvQct6YZv83HfRCYT1cUmyh9ddycU5hJHPsxQ1D4ZV3pwmpRiy5fQeHxhZxoUtDDzNyFk",
  "key15": "V4y8yPo2opUVbqx1WhCSLMJjRPzXURtLDohjpZH7rKXXzBpEUrvzM233wDewHt49VsuLjdQK3aJmSr5tTfFkch5",
  "key16": "21pNqaR4gi9PoTm5q8ZVQt4m9xQZJrRRd9Q9D1JfmVqib7p2PswXAoXCnNRH2gbXpukhn3o8FxVng2DopAinT4aN",
  "key17": "og5TwhpjzqG7ya6pr5TBM2fjTVB2SWNqW7cNtso3CQm2kV7N1F48MViGkeA8CQhJc83WowxDBnuNrn8iF6oCvaF",
  "key18": "23HRseSPiM9iDphax5twfDXXrdsfr61CFeQihJmvqG5QQdaLigpNoVuAF65mTGkVWmdpUottHZpCbn2YQ3oxdr82",
  "key19": "61HfEEPQRPdy77VyvCkANmwDB1dQquXWmq2xGuVALSf3gPxs9ZAEnGDqRgkMGePA2ufrV572zjfZA7SVMtZ8UXSK",
  "key20": "3ChTDv9BS2XQvQbUst11z6UNvX1dDfZvEFSw5Cxkr5R2fkmVRYUvKamEFHrCKq5KcvK7UvUDgWhmuwRdpUh8vaXQ",
  "key21": "3yXf6AhYBU42J62Y1MFGWrv3K3qmbXPBzt27pQtUBPwhUWDFM1vbEHiSAMZTyci4JsopyNWCki5gigj5xBvwBJ67",
  "key22": "4u4Y8hLt6k4jMtZZsJugjCkeSKytM3dU2RP82xvqj3zkz3Ngb9g5YxsA2zet4pamrKwLd2bxQLKf1syp2BqBTBLE",
  "key23": "4326Fbs7wYB61guKYtySuWy1xVwGDgTZQeX4SNY5N89ESdnsb74sGHo2GsaZA81MaNMxjp5TYRYC3xqDGBU3Fh4m",
  "key24": "3rvUPkrZx3ePU8Tf1NbANXUUjxSYvh5uDXgsAcd1u1hzRJdMQCJsE9sqLUj9NP4UkPC4uLwQa8Lwo2Jb8GoWJcA3",
  "key25": "43XKmDKcW6NiwNV94A2hg1gqhhR7L1R1uTVx1C3NVrV1cu2Qac6hRiYjzJr9GLewMhNvRt5GQr5gQYKrVntXN4NE"
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
