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
    "4eeZJQjaYo9oUhbvHkA6wE6vVfP3R1ryi6b7GaciByMauMCbQiW9aWKB8YRzbe1AkZztabNw6dXZxWdvxckSY5hD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q43wpknC3GcXYyTgWd3YEL8yNcCY8aPBNJ9sM8X9EGeyTfAMC6dd4CTyg1KUrLsSEA9YzTkS6zWWczLk7ndmftk",
  "key1": "3A8zXoAkFrFu4fUEfssRwr2EUA2jbW3MocMpD7FsQBC3ZGkPR8XQUkU1yucrTaNNg3VW2ac8fiARje12UmZx4Qme",
  "key2": "vW2rQ1FFaWMPrRBUdSqYsPQALgjr9qSZXN9vXkHtCc3jCYvTEZtUfymokSEzHCaaBK2NCHW8jawHHgnL38dNVME",
  "key3": "M4t9YyDWDJ5JypRbCTgujrtSvhf4hAcKTjzhrH6KjjxenwDcZhE8Cs6samqACS37XnB3xJmRSeMnHyK48C4Yvjr",
  "key4": "4oPd9yiP12Uzx4ZmRazsSrP6grXG8ZUN6EG5WBWND24tkN6bd8Ka3jQ79PLedk39Hfa5Wi5g7BKVGJ6DmAx6h1MK",
  "key5": "P8oUFE4GsHadSGLPf94Vj7w9VtaGFWWsSB8BDZq5GXxAhPmfkfLpKTNhZuUGSJ4gEXqvFE7tSgHkPBQxBrKoGnw",
  "key6": "2X2wziYLDrWL8LEVLkc2RvzWdmhX2gH4a4ePHMY1hadp4BjzdvxUg6opEAfnWvmZVj9yHBGk5q7rYwuxf2er9RF2",
  "key7": "5HmB3s7LLkuvE9sNEPuXaN8PUvZsHy1PxBio5aseG4Fhee2rBTa8X6SH9mNYPaW9nPo6kjdmHA3motiZp3T84Z3T",
  "key8": "3doJJd45JMzMqi4RpwxJfcgsm7j4rLJYbB6y4ntSrjcgkBL7ooPo27ZtoD1Qzb8BLmsN3c6K9pF77E2nWGBkDdwM",
  "key9": "5zvz56FEDABVSUXge6rg8Dq1G1ZzVoHhqcEJ9XXgB8g1WzvVsMvGidkZRe9B7SUqrVbZk43fZ9tLPxhzUfsatFf6",
  "key10": "49Q9sr1SErGTNpP2wZiAPVSVnN2NTrQnpFQU44W9MUBAL12bEftDPkqdHQAb6YEsywqNwjK1eySEwxNbT39eowiW",
  "key11": "UR44xddMjUMVKf1Joa43KZ1YfuCRd2vyiCF4csNLqtaDcnGXW3krEq6A5vDxRuzueqVfy8HpvVQfmCgC4jR6bv8",
  "key12": "G6htL85PWvRyaMiAA8t2NyYo42xit1a57bBw4SZtH6za617aGy5KZbTUznBZEHJvCbKHeBBLZ9dV1cmLZwSeN2T",
  "key13": "63Yf8QQEAevbsuppCNiWUqoCP3iN1Pgb642R11S75SrSNgQdkjkPjSSKFWAiWDKvgxNc2s52V76MpBJ77QUdYLCs",
  "key14": "5aMe6GKAm9ZpHZ4PQ7DunNqdxxYxZRr9poxoAKvZdFsawtBT2rhRszsfWQuHinf6rko4zBB2N8TYJZsDTcwigdyh",
  "key15": "2cwafLeQwuB8PGNQqx5dcm78a7YvzDFX54sLAKsXzzrUi8SEQkK6XHwSr8TWM7TjkUK1hYUaCFcWQumCFKUaR3MZ",
  "key16": "SrsRAMLNkhXx8bkCLoV3isDEKD3ecqcPb6MZ4AYXYAJmpTfd9jB4yWGyvBeMXtSPmiNgyCWQgxSABLt246BPG92",
  "key17": "5LDnwmGR5nHSxHLygsuUmUnLjgKAymsuyo8S6Xt3EHZ6GBhwqFaX2bQUtj5rW9EuhniMoFdTqgPVw2mPKmSJwDWF",
  "key18": "G6NucpqoFxCf91653gCmfM4y7BzqHvQNkawtT1KwKJZTYrwDmf49bos3VgU7mNYi3hKS8iUiKMPcdnBrQXwSUQ5",
  "key19": "4AGcX8djtHT5PGzAuZRvyGa9Nvrk8TexgG52N6M8vur85dQvKCZFiwYi8JsZhJQT97wNnSfHmVppKFdLu67ko51y",
  "key20": "3UmDZACrUKftHQPzhV8QLonNKwPcBpjmtYzS1oZsyMuPEd1MfTEmb3pGwATTuGxHLfXVKsWFhVHZ2rcnJUyxjf3j",
  "key21": "2ykNWN9FikUvtNsBf2GCuesWpqvvJfed71JYwsWEVGgidgv2E8Mys6tqM4aneAHYvH9xz8msDn8CovYHmJjNKkga",
  "key22": "YdzPaaaUVp1SuS3XMAm1E4kQFyEsdcTqQk5z7h1P7k5FrBRAXqH4CVFkVa7K239tHt9gHMgYuzw7azfpNe6APDy",
  "key23": "KzQ1bBy3iTXhvnEVTgYNUtVRqK2GD8cbDWgmjjYa5FesLMhacbpPF5xeWDeuS6qmNPckgzT6akvXBV4jAP1HZsw",
  "key24": "rNhAsC8LoLDCaJMJkABu1CK8DdtySTczdsoHUGyQMqSzJG5PD39V4123iyiAbvogRcHMxwi9VV82mvhghKbJYMX",
  "key25": "VFPaD6UWSH9TujkihB5Aa47wtfLLujRkojCARa7tD4eCZ2EwEFQqKJsbBJSpFAtMXK3sYWXDh16AQUrJsPhpg5N",
  "key26": "2C4tLf7id5EupsFEmQEELVsWjKR6vGcsuCPYJRAp6hiJKzj2iQn53nThZ6FUk1ynV6J3AhXxSd8AvfbjrxFrpjK4",
  "key27": "5ac5KCUcNtgtdKLZqABtSpEi71Rof1oCHArYi5SzsbShwZb1cBSQa5BicGohtBFiCG9yEfHdggFB7G2xNZUsqt7i"
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
