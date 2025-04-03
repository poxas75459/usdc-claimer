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
    "5rZCzFk3E2oJCUxiE2AcH84f4YnMTYbgWagf9QgVgMF6L4JKsUUwwEngG4gpb1S1QB291YuYVAGE5aHpX8T4B8Bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufC9x28Uc4NyjUCo6gFUQoXcwfkgPYDzN5AzWsyLG9xRFJczP1TH9qWXr1RYVW3yU16TbbQ7RAGMpqqg5gpwTCt",
  "key1": "2xpM1RtJ652vUUasmcDtTvvQhNKbaGmmnYRRFrLbCQGuLd2ioyUSq1PUvuNkCGxY3u9gS9YzDWWZGQbKKEDEtPWV",
  "key2": "219uTtL4jj9vtMdB4ESab3A3ksdU9uAJvqTdtvGf9JgW6mYKdygE4nXvZuTV4zmzyEmyqm6XpmgMPNUhp8V8Azu9",
  "key3": "48qmMCPi7ziQoo8hDM4n9eKVBxeWX5HwxdsD1mqieAx5te2dPu7KmT9fG8mnu4W2ftfMWYS1t63NrYLvmR2NBtKP",
  "key4": "ewaMFrty3AfwGLN8RSzmcWK8avrUt9FU55mRyGARiMifespP2gagMyikKNnnnfztEHZhZWBTtSGp8XyoU736jTR",
  "key5": "4aGCuJeMiuSQoZWA9EmMnMEivCvuDu9YAKkKaVJTyMZsSiUZCQoKxkjovm6E7R5qvpPSns2bmvwmymZXrjEYqKGT",
  "key6": "5WtVeADZtQnMYjQzKtxypbbw934RvnhpJqNErPesTxu1ZzKNGC8rq2ZzrJkeLJ4P4JW6ix3o59W5eDMbHEKtmVrM",
  "key7": "8BAB21tSEiJV9SinhNtUxuyd3uGbThnxLx7SYBTKJygGxSQ3t1Quh6j4akAeowSyxFXKY2d1ycffXcMnNci1TGW",
  "key8": "2W7ef1DGU2AP28EhCXt1AjvY4edNmEqUYzJZhNqvkAnJFQ7HCrm624BZBLpnBt6oTCJu13QGMHqUbVoVfvWzkVQW",
  "key9": "4Zwu7BNCVTkHo5crnYDMfhhzahDhSr9hwfSrh2KQKTckJ5XkNX4T3m4CKbNXaAMbBdzDAqZwfYSTBZkgiBqZAuQL",
  "key10": "5bf267miwHfu3ibtbhFQdqpeQVtX2DUgY7X6cH2mjw3K6c7L77trS5wZ95xMbQyaqNQWCWU2V8C1aHWE55yo1X9D",
  "key11": "3ohgdxWvBGMTAuPaq3EdNAWkkNC27Yt6qyfthpaCSb5JgRqzaQgGGeZz4U7WKFi67C86aZ1rBmZkwXx1Fq2DKQcy",
  "key12": "4BJUDVDL8VygvhiE4vi1VTWpgWTphyRBeqvXNUBUcaoAg7j5UMCANYmbgxXU1LhDRoNubtLQ6MqH4mWkXGsuq7tA",
  "key13": "47pVop7htxQAx8ctbPiPsovSJs4NcppBj8EES1t9kcSDPGczSHKBNRhwHvJgTbxx43faar2wJLMqvWFhK5oHYyzW",
  "key14": "kcsCmKyCBLJmbyWJKUKbpicsSvKL3AqRAAu8Gkbtog4QwqDtN7TeHa6WcQ6nXcHEGf2baWfvoMho6ZEBAGy2dhz",
  "key15": "54adrtFPMM8uG57LUZsSfjKsz2Aqj95CYTC6uuFp4n8wMmvnXsoUMdRhYLU8FvFQ3PTtxxv9fuhTorj72Q2pY1H",
  "key16": "Xa9T9xgHyrasTCcW1jeRSYmY8hMNQrjhR4HjTMZfAVc5stM9Vc7fNjREa5zGFjriquMbR3ji8XwZbiQKpe8GCjg",
  "key17": "5igH9YXRNWjWgCDJJ2KFHChREBkmnCQFQYKYPWbTHUFeAXUCPKFA1ArLt2njyJeHEo9iq5XFXZhdchXJ3Nu2b3GZ",
  "key18": "5aSX3gQQYgcKQNUrLuN1aB4samzLsutaiP4reo2XfMRbDSHgRQbXcpTXHehSX4RHv8E6rzaw3GWrujgUMSEr3P8S",
  "key19": "5v4Y8G8qv233KoRTQJ1pKuckWYxQntVE3qp8YJXj5QCMXHMrTZzHExCRiCup458gFCGmKnfJnRoJz9LW4TACSSJi",
  "key20": "nFNnxsCrrQ5rQPoW6GjcjnWahvFNGUqEtzn7UbqRMN6aPXTBoDJvYM9ATD5tF8QUeFtNZXnscdjBCDVR4Xq1FfJ",
  "key21": "4qP9njGo7RbbVqaskazJXkWFTXxgziC6Zp1WNtNSU4DeAcyVwFa5CHqHHLjYLLFTDtJKzWeCDu8pcXAoMR3Sv2Kp",
  "key22": "2MYk1d6m6UbqqmSD24QZ1XmC6SE7jRfYciPp4moYsQau5Upgv8TfykZg78rZF5sD7wCmdxCpCPmv2LjNF7ynsuqd",
  "key23": "5iomwTKi1K7u9EciffkSMNRJUFPG8GQxybMMFY3S4GHQfA7YTBYiRRio98E4rnc6UGHUXFQASAYS7jYmvynZShMy",
  "key24": "3g3FdGVuLpRAUefZ6DaHM2xYBVKr6tZxunLk22hMfj4Er6kwGWrZgNinaYYYPQJP5Acbwo6wSVQ8cUvvH7oZsbMA",
  "key25": "NbRWdMi7mXwMrb2KW3qtjY2NY5PYNS9Q8vHkFbGkmu7CpFkY4SLbJN5y9PeUhSyubUJKgTifQ3ZMMMmL7AXv3kg",
  "key26": "4MZycqTPTu8cnTJFFicHWuWPM4rD1PSzwmChhsppBbcBiBBeSUN8YNxitarDS4DdAYaqN9H16cHLBMR2GT8mm3wv",
  "key27": "4LWjxpSVNZ2nAij6qkz5ioz5jw4nq92cxftTfjHoDtYhHSZE8pie6maMqR4j2kmLzM5nLdstpccjXFB37gqKL3Pt",
  "key28": "3oVBYSr3pVDhZTz9CnBM1AZgzQiBYWYHv54mjgBjvgqJegnW7nm1rnHaxznYCEfXNkKJWxYa6EgAT9e5J6GqFh3m",
  "key29": "3rvQYxvKUoJvy3AFcmiQcdRaZDSkUxy2vHzhAWJ3MbZ2fkVAPmZhGA9r4QKbRiCzmJKWM3mNLTWbRJQwzGutxjeE",
  "key30": "215k7uZQWJUgDbho8HzqPr5SCDyepcQTeMoTJq3xW8LRXRXM4Wd6nN5BBawCcK4FKfGnA3ArSyjFhTbBMzRUyXex",
  "key31": "2xsXhJhpoFgEytT7JbzeZFUsFvBmXkWJkbi2HsFmeWoJwpNXkYBmTnCU8Lj5Hf25avmnXQTTAuURbzW9rjA61hXH",
  "key32": "WtYFJGU8EEjREdkXg3rAGb4uWvu3WA3VQXwkuwCCyAjWFRVCnH4VXbiegz9HgCjRGk9ji6ofCpE8JyZkAo7piv3",
  "key33": "aYYey3rVwSK6miFCRH9aNfn12tqMxVS4ytcyvhgcGsV6sbb85Dr6nZWrFJsjEqyeVnYvwp8nVZzpwbVQdUVxWJA",
  "key34": "2mWfwF9BAgBZRmRVsiXhWe7SvnTtFenZvMQKW4MwziyMJ24MHseFaL2LBhRhz97PiJT5N9cFQhaRU6puvHhPEeRx",
  "key35": "5C1dXWj5rH9411z2ZCw94UUFeFttEr6VdNziSN8Q71LeEr5hdyRMv9Jsp2jw5UhFsmq9thaUUMXHDST54FGL3w9S"
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
