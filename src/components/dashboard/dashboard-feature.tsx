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
    "4ipA5YN8NoyeLSyoJaBBoh7y9LYyxUeiWcBLayTtw47gWkYzmZxEwcunt9dKyP7UCcD8crBhFgmXRS5YnhMSLAki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZxUMiMoJB2Rtcq7Eke4317ESnsuBRZHwbj6nr5frNXoVwqZZMctsDLa6hzpTUWeLBKsRqNjhm4bjGYyNuGq1zat",
  "key1": "1dZfTuRDPreZ1y6moeeF8DvULWQazAUpnYa2qkY53zwbwnPUBHjSCMiciCmTfZy7WcGDXqwWoAYmezddkcC2eTW",
  "key2": "5zFu3SCZRjGLZzDgeKxWRHhfG6gzpvL7Ac2sdXiEDLxwYhssUJ8UmABZNZXMiZWE6kD52R1cUWkXjJEyku92svQ8",
  "key3": "2UcPa6uaBTSEwRM3dupb8RAGZz2tXjqCiZs6sLce3rp45UZ1YEeNX3M2qYp21Wm9oXoi4U6JmT5AZ1yZNpWuC4Cu",
  "key4": "5e1cvLjxyokg6wrt4b4RfRvNqaah9FULuRapwN8qHbKqFV58mqqkemsxsbPtwEuxhwQhB9xrEk3JDDxwpBzijGWh",
  "key5": "QAvN6cKBkFnAY6ZHzsrzDUFQLHnHjs58LzCKdYbg24s3PyEYWf1Auo6HPav1mhvWHzLY4ciCgrZvcA1fJtyPwGC",
  "key6": "NLsFrNKv3PDJvFDHtbWnm6bzqQyQvDiHbTgBSV6SCTvXS3eEqNkDKqT15NqWHHoatV3r4rceRkS1CbwaEJGquPq",
  "key7": "2gM9fGd44MA4uq2Rrwkugo6hh4ANx1aRNwVSz7tJeDCRVZeoDgwdSnEhorpJRvVdU9HDR1dsWGX2pVAnZ6k9Rs5V",
  "key8": "3aFmkMZjrMUDueAKu8w1nc1DJCYPtm2QnJaAVFevyip1k4jk5Hy8cmCwir6e6ngTeqnAJjzxFvVtdxZ96kxmsjmw",
  "key9": "3FbsGkkyPijFL6QP7qz1ZTQ9ETSP8XXJiSFv2RNniWX4Lv2GKh4Q1xBrxySzaeLs1HphwDKrTxYAQjEVuM6Uxjio",
  "key10": "3ogegReJnNp6s43U1wizU67k9Rtc1tq735BHbNSKNh7w7ktqPzhoi537R9z6a5YuXHeFFjmCvF3JkcrAhfzGF2qj",
  "key11": "2tAhva34y8cxjAwYDzVJf95xjufo9Lq7qv1JiCB3ycZbybH2AeTBJUqohkdj7wiwnQmKoRU5mbML5NX9CKDzfqgj",
  "key12": "bHCrHYkbRTYCxR1wJXcHzTbs2Mh78pP6EK7o4iqWuXkcFzj4FsEgMjU1bFeHAKkpXGK9gTT8jDedwidMJ3ZR7V8",
  "key13": "WDLjfuZWEAGyFJpRbhxkoqSzykncVQCcesrfgT5PBqSNwHWTLeWZ86X6NZ7sqB8SuWUNdKRK9kTMVZy2FaX5szM",
  "key14": "2Ruwnm8kM6c4RT8i44A1doteNNdd7eMsGddB12SaFvp72dVY9UrzJD9gKRBPh69YyTJifA9pCtqCNas32DUeb8f7",
  "key15": "5niwuamYruD2aeukjsRT1YBXn7nTf1iqMXDeTeaf8bMoqy5iYZg1ovLDeQwhFpZCqk9bjKBw9UuTMsis4zZbBGa4",
  "key16": "38aLwxE2pJbfS511eRVcAizUTzqtcUWBja9n5ZTdSXedJoeCceXgpQ4wM4uZsXkrDDsWMaPKMQZvahnTr7pxqHDc",
  "key17": "ZkPEjUGQQcniKaTVdy1nqMVjgHC4d9dxdzPrXzGSz4Ut8dVt1WMzzn7oAYQFnCFurouvf9FQ2yNwyQcLe9BJQGw",
  "key18": "3gEEHZfT2V5asUkz1gDjxMSfi4csYgJYtzP94TvMTPhNhUBN8yjoyehHgs3bYN8Lc4TEUx98Pct1LhZBNQjzcefU",
  "key19": "4y1SvE6cFNpdKgEmXUfNAbET74YMos6RU84wUmJZvj2HgMXqd5PYEdtdaxaW4UfzdDKqpWucj3hmb9hyBksVKQ6T",
  "key20": "4h7onfJbeHoirg1v7bWKP4RKdnwdyxMSGHokifVTkumWEv1vU4houSDqexn4qqPqLcfY6QE1BGy417eddvqWiqsi",
  "key21": "6AjeiGk4GRm3jDEn1UxTJAUjvzKJQuJYsiZvh3owLiNn5uodAa9qFUR5csQ5i1S2tEZSDHFdSbA2PPn5RVKCqag",
  "key22": "2hRKR4ervAjsGkwkeUPw3dcKWyLNp1vrW2syYyD3apVbVAvEHn1JSpzsQwVuCskyTZyqArfNYkvPhvvpxRAVz58b",
  "key23": "3e9n3YQJoMAaVdHRMkARJGBJ8mrHXHxVLExiq4peToAA2PPMfh9wys7GqqJvsXpUs8UgrNL4aPn76swCM8cMH54a",
  "key24": "3ej9g6k4PpBxjjZcQqrQ5mqd1GuMrxYg1uSWd7U5MuzfdWEu6yG3RgLzPoN1Q3YMeVd44F2eEKmgaUuEdUBgGNTW",
  "key25": "3wqLqZ1ttUumYAdi9xR2ddnfW79TCmQtgxz269Vd8ogTG6JiV33R1QSxSwmiJue57zT1aUBfKs487ejrH4R91hiT",
  "key26": "c7eRh68r8MeGDzkasCCjhDUm4Q2jch8KoxfNoSzgAsBMT7pJxtpW1j8bpxLSarmQxGq2TT9NTgQK6GY26gTGWLx",
  "key27": "48uSkyFCbfCKDQa3B66uXU7dszz98ctvmEVTnmryuSYmpkn6KDsTiH5pJvnUbC38LZEEJvhrabUV5h4ZcMh6xYNM",
  "key28": "2RnbePPo6YpwLB6x3rtPGtD8mnr1CakWckgXwMRXBkyfXZhSPmt9nuWRTUrHC3B9JRubUDpmHrPULknS6xG7BMaj",
  "key29": "2iN838sa89TeDMrkLyKgQZ8ojXm1p54XggMn7cU24ffDiaHjCB4AvobWPUDStqpkxpQJdLsH5Rcs2hG5rZPTBgB6"
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
