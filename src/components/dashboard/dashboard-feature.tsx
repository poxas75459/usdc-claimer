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
    "GpoVxUdQw3UFnKuWBswNCLtE8Ng2Q3pMEA5hBbJPdMfsoZUjRqrvAKJk9yzTo8jMJkXfpoKhqpmk5fvbYHVDjRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Th1BkysezT8t5wPGbyADWsd1iG41aFMS9VLBfQjbf1ccgH3tY584U4HpSxnmkqzERjM3wpNGvVRZcpiYKMZPDyw",
  "key1": "5atWb13Q5imWi4ToPDji5CWpkj5TBNzG91bZSEU3qB3y1Hs6rGTueBdLCriDuUZFdojs9bbTpPmPuse7Q25FYGWa",
  "key2": "4qAWCE9yLZMCMDyR7SkxDXbKBCS45BydsGYBtSvHuNtuuQjXhpr5gs8gvmAD3VDnWXFnnCxDNTYHgwUce8mYVzWX",
  "key3": "4GMoy8MRXv4kphEX9e8DYFeRMZwViBohc5c3V7hU7QCFGpMcVgCW4D2nAUGTJ7636SJSXDAPCjnX6kNm75888q4x",
  "key4": "bmWhZtemf3ikpqEFLpQGHGr4WLSWiNrbG2L46xgy1PGnbhhYe5mKKw38PAc3FEdngEGRLnzKHhfeDQieeyeUbxW",
  "key5": "2zormG8fwfWEVTazKUUmhDx6Ho8deiz2BRnHa2BJpDibtkLh2kYpmXYfVycqjCixV8UBBnujkepWCA4UA83kKzb2",
  "key6": "5KUd8tn5a1KnyoVst2d95MBqKTjUHakus12Nfmb6fqFhfvk8mm6bnRcoDtgMWxeXgMjfCUFPqabLPJY8gQuiAG6",
  "key7": "34CParrunF8yhqa1MBE9U5nMFLyTQkfSY34B7yjQciXagmzvgCAtKdCRNHDCGageWYKy8BeQBeGf6HcVA6wKFcYf",
  "key8": "ppyM58fEWbrgPdMViCjVAKD9cnxF6sZCVKEhLwHnGDhVnuS57tjXEUj4KRY33BQakm6Nhkn6hA59Jc8hjA5ZMKB",
  "key9": "2WbanQUeZVen7SCi4o3Tzhtv2vR9soknYyG5BDPrLqsMeRtgaxB4b9hVd3EYfna1nXcuhS6PvhkMKMYPrMqW2VZk",
  "key10": "4Jru1U34qHbuy4qqwjcpyDBwPR3zwPAq3kSoqUj5jABEnxiBa3sdRun9v66hhbvBMSjtUM6zFfHQmnPGkBNSEHfP",
  "key11": "5rHmXf2ooTVQSYigSy598uRr9eFkwG7KpxT8aWktMqwn2m6M1DH3EdByXmzcKnaX3mndLJwSPoep9KfhtdTg9PgK",
  "key12": "2f4sjc8AzpGSXKGLuk4Q3h8y3QkrcWSJnK3Y69UqhKBM7Cj2k96tYeMTP4ia13zRjj3BKznxUQ5ZjJZviZ3C8kYy",
  "key13": "5ShpD4mXVPLw1dE7i7n5xBdMgVKacjXsU4oca2Tv9GUab7QkyTU5chReWdP7wj5GcVxVgb59BaxpTYLnUQinYwEz",
  "key14": "1Bzp2EzUG48rydekDg7ZfULQGiW9yVozKkF2gQAtvBfsVfecxheYxgKKJBkVBK7rQCLGuLf6T5LVv2qiif4rhSL",
  "key15": "2x3TM4fdPKR7Vwg3cyDKQ5uNH87zvxZtYTUzcRd9j1BxpjiBoaosFGCABArUT7Vj7MTpbxzCEDHyU4fp3qUxSLPT",
  "key16": "234gN8DoYFAfdKELZvSorP8KJNXPEh3WtRCgv5DBScLCCQD89APCxmuey3Uc2WYSWwde8KwhXfgjRRqdkckawEAA",
  "key17": "mcSua2UQr9NJBaNTtxsXXb3PHLssfJZxNNiR8QRqE2LfHdhHWgx4eoecC6Zr7qn7wQqcnmdoEDkEvN5cE9oQFuN",
  "key18": "4wdxLX54aUGM2w2w1XLeEDJMYHj5HAgkpnbYitQySL9kBipPqtQnxFv9wj5f7nE6yXy9XUDgRqBBzFvSaEEKNbRN",
  "key19": "7WgspbPK95i8ndmkHmkzAVy4AnkuddJVCkh3ZaXtbdNBSVGNJT3ECeohtjvUjqjg8Fuy5fiYLHJ3mTRu6FRZeL1",
  "key20": "4srL4oHGrDMfeUQPuEFhJrktGqk6J96HZQZrnuXYrxMNrzjgU2NMhr5bH8KFbQr3maQMMhwgETVyCFL5pdndVt7a",
  "key21": "3WudT671y8ktPrJCNcAQEKf65bEcpQFmCESZ5yj2qeZ6wTGbRZFbr47DRYv1qREZbWe4qsMH7DqZZfbY6iiGEdjF",
  "key22": "3aVxpEUjvzojBpeE42UW5QTfipciBR5pgxp88eYUVLghPzEdD3bhhuwdxRuq1Bb7C86LX9MLJkxthdX7QJbsrAVP",
  "key23": "Kd4zJ72ytaxcXr9qMiYfzChTxe1u2aSdnEG3Fim7p1Miwi7RvEN8LAmRFDC6iR6V9nZNJWL6sozVDe5LggLaoc7",
  "key24": "2n7xuegdjJZQET9cdmN7gfgaPS7pAqfi3VKAZDFrvYo1hiTyWLNUoXYtFfyWVjzY1NurQ7MPUWz4FkNMqsv8cbvZ",
  "key25": "3bMmA21CoXp2ZcqFWs3ksWQASMmDsHcrUZZEZQNFZxuMe1VSr2GfCkzt9Ln6mbtZToT3ywnrAvdGD9YRNLs8HXk",
  "key26": "4diJuAWcbz3N7WRb5SN4x9oXy744KmPh6444Wvm1mZwSrsMSDocmH3LYjnEackRK4b6p6zTMZ31jw6W2qVDmohjY",
  "key27": "3KEP4uD1jhMthBCHazsA4C1Aezdk4MkzeKutC8dN23zoHmk3ZCXdf44f2YaN9BkHGpNNUuDvP7Zvg7sjageh6Sqd",
  "key28": "TKcPrQxYadqBe3CZpM9Ujh3zLbjR6p4Ez4Gh5iN61nDPPuTeYVciUtFQLJyfat3ueaQdvifFyotS48BhMzD8pfg",
  "key29": "2SUBy8q1FUBH42MLWxNixPbJtRGUTGoVUYJf2mNT67yPtbkQHVZtpwHZw5Po9Q53apCcA5JJBzzZoTFKZg6NnWEz",
  "key30": "3ZAnytt58WhpYnG7afbQ24sHFgaTCRRzqpSHNvTEsXM9MAwM8MyTR9jJbJ6QHUhKLenTChCMskvdiBYkMV3EYweu",
  "key31": "wk24nDcv4UopvFFY3bpkTyt7y5hbnk8YopkQyKZLzz1F2WNsrwG2vswWu8w6hTWAjjFJXgKixKjE91EQ8sdHVHd"
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
