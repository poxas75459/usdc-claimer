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
    "4Gb3YCV84atsbAbe1bYKXzzAHwgV15nafA9R5vzgxwY27t75biuQzmBaLvAkPs97HyDiWdoMazLZ31Sbyp9g2XB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5kuBd27YQFi7rGEZAFXa9fmjr2dm27USxmFqvDKr3tr8EHx4JJvEDwk2CHS6RTPjjeVTQvbot67jSbKimBcZBN",
  "key1": "5hUPxmTFyfb6dWPrPsaXAr9c1DS9ehgjX4kZRCFo8LDWu26b7vUnAiE2oA3yeCghSTmE7ivbR4iDHEXtzmFb2pVk",
  "key2": "oeP7cYchpJvtVkwiUeSYtoygZa4V7ofi1BvYdsTXX94eWHFEEZ3M9ASTfsAfhEMfQprRskGQL1qgx4nyqHLqPTD",
  "key3": "2rza4PsvP4tUWd2axj1c1P929Jj7AjkJdgFzBuxMkXQf61QBGubCrC2dZv4B7Cqq9qy1HjYHSxWRyFKMGBDk9mrr",
  "key4": "doMRASLKnpQjQW7AeEAKFBF3ArcbYw31nWXkSLC3XESZs84UdLULVezC6JnnFJiVZGEQBNUWjnFHsiL7bzLcKyC",
  "key5": "5gGRgp63Erv11gKRjmm1ehUoXXpnHdJH7mzH2CoVFzcTrHRj12zak3vpYyyKmoLSnBZ95H6iPovcYpMVpN2NWM3j",
  "key6": "4ykSuHTPPME9jXu9kmJKjnXvYdA4C1XsZ3jWHtHAysi15is8QgBShZDuhkDg2ajaMRmVESEX6Q1KyM2fcna4LxdL",
  "key7": "43iNFBcLzitioijbYsaMC9hsAHxWnZNJtTcE7ctCDqLKMxju33KTEWBJubskaQsb9dRrGMayuA38ykj9Rr8UWHrS",
  "key8": "4RT8Uny8VRk2F9CGumRB2edfKws28bf9LRqE1QNA5PszSZYrXvNVMtjAcEwRh8RUZ95sqik8RUfLRQVm37a3woiN",
  "key9": "B9vpEgbMQoyqjZp3BuVogfuqVZE2aUoHD4Y9rzj5RqUL8iyU7SAMVxy8spGAZEzqiy3Pz5cFRBydSXXzcAzfeoV",
  "key10": "62SUVQokdEajj89uxnnLdRddkV2d53b7b8qscVqqxJEB8N8HjP1EBwYdKJCrgTJrK1a6ULMsZd1CaseRL5FTBGJa",
  "key11": "5Yh9tS7Kimp6xtkC6X8YGSfgBgYapt8sgg1grbiP8UB2VbzRVKehfk9BY3dWYsKNrjhUqFi8AAM1f7btBt1zNzPM",
  "key12": "2YTYCwKo8j1pDLVLq2VQDjeB8eY6sGwDJYKD8DwKUfNgMrzABLXkojG1aYWQbSXmLXdWqCJzY3FJD47wFFKVoqm1",
  "key13": "3PW8jBYpd8uBMphYeTE9MQFzXF1oMQ97cdeER5JZ8LRJhxKHaJnJ7YcTCdfQid3mBFmnpK4BM7LXgQQE94pFjbCq",
  "key14": "4FyKmvencxEJ15XLoJkY35HYFtodYJBchGqNspC2g7ydwHrf9yWirPmDi5CefzPxqtTDh97YcxB3svfWpwuUxctJ",
  "key15": "3GHfUqd6XjmrrUvCxdKtndqZw7w3mWjrk1A7zPaYo3Fk5tLMacRa3bEF9wep754XoU52FMUVFQS8CHSC5UdNetNc",
  "key16": "2GFTbcn7jygXA67LJg3TVh81xf4NSkYyesYKFjZzLhNPJJGsXawZoPt85SmGLBdxQs7Qo2ZNcYcJ3XGpuomcsCAC",
  "key17": "4kU383zjGK7XGhf1mgzof3Pb7vQdwayTKbrdPfXDHGSvDSiwSxowZ9h9AximScuo2NPFwq1wAo8ihafcPmp53Hcb",
  "key18": "4zCfpKzxt8Q92UPyrckxC3siknXEuqVJPtRKiH7pAP8JdiYoAHvcrK9Qeumr6wPyXwDuFp5soeRavHn47t3o6YRn",
  "key19": "4QWqyDdZ3jcvHpudvPqSFKZx6mTeHV8X4ZkNf1pih75ptiJ38CfAvq3xcwUSyh5kTJvuRHNSqMVJySHo9PvJ9Jf8",
  "key20": "e6RUvw8PfxogtWQ1nHCnUi3auXR6NbKvbkTgXvAQYoXBWQCZ3aq71emHDSB9WNtWLG892ubhRmZGmC5tqkd44ab",
  "key21": "4of2Jf9HBWoJ9PS53hAXwvXKy7bpVoG6HrXH9WzguYtxjCui2GUSBGBDy8zKiw8DzxZJvyCKLosjGcyCis5CNaiP",
  "key22": "fzCb8npD4sSHTnikrTXzRQvst3sC7uwWfhHZJrH9DRAtBUj9QsA2RGdMnuVSKXHXmWLn9ZHuSa9tPm5yBFEp2oo",
  "key23": "5AHUdAia2tstqAiU6hEBgvEDCrmdUmwy1k6iUkwa3UELsSXm8maaabqbhG8pfKCJG725bgzUQjqDb52jLnh7US8e",
  "key24": "3GYxdDuDBg1EoAj6651mTkxAewK4aL3gS8SyDU9p5w8b5jd9J3jKW2gBVnYnQssUm6ySYXVE9WFpLUJRVAXKzUfW",
  "key25": "2gWa5RYrYruPRV2hkMeZtUnXVYksc4nbJYqarb3cYK4pcx3bchtU7tBoTTw7CTZmtoxYvZYVd4ZhQHZs7hsdhLwz",
  "key26": "37EZg8RgT9493hW6iYPssiWrc41im16nXB1qjx4jfWotkRDED8bWQrmqcBJ6GhzQM7XmSsTCifJefgw4hgS2gHcP",
  "key27": "aGZMqs8uZUz3NQLJTuqKQbD6LsPHcxAiKF4REHPXj35G6yKAxWNZ43pmvUbFY3JHx2u1512s7E5CRvbLnPZjT82",
  "key28": "5eV2orRS9nFmbZbAk7uQnV4Yu4vFhQzdthgxU3YFRgwJq8GoekYicXLm7p94wgYtjDs3Q8vWkWHGEYhKdhwrfmT9",
  "key29": "2fGhAhiAVB5Ap1tGiiUuepJ3JiVuQJDCuP3KU3pTH6ti3i9TmQFuxUS6zMTE4H7QFccQP452D86486p6BhGpGAGZ",
  "key30": "5MANWQ5RtBa9pxZ7BtMa3654JfkJzsYWKCkDpPgE4BEqQpJZ1pj4oZVtAwuqw4JvtPxctE5FGxjrdzXrFiggjLsY",
  "key31": "2NHzo1pF6ymbj4VdCq6SR66MeKT2EYusRRuaG9YYESyZF6qHUPFpVuf35XMyWHzHi59rBMCVCb18e5qxyQFcS9fo"
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
