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
    "4KSxbdtNZvdzCTb7emF36s465teppkjJHHUJZeo9HfnpchD3zYdhMjsztqyqbkEqnp5DGb4t1wjpWJ1bzXT1znFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YnhbjskjxLunw4wQ1BVCtcE1ceAZbfcn8LbgnExd1yXcuogEdvLLr5L7moRZiHZSiSUzfYdE4DrNeRvZBB439eJ",
  "key1": "5ooLLuDbN5BnxGMZBn7qxUyU3jk2xEGRGMq7eT9TAEHMG2gcgKpoeT1jfuDfHi9GLpLr3sDgE2cDuBRcCJVAV4Uz",
  "key2": "2XRGBQXcY8wM7cYh6BGgtMM2VXAqSpT3ss3mYK2WjCckGkbd93NiuJXDSVC2in1WvKAk2fYeSbWeQRixEX2cAoTC",
  "key3": "5FDwQAHLHkEBoC7MKUo6rGsjjeZ96fNqo8EX4eWoR8pm7BWUm3KvQg75BjgcVbx3xYyi5AJgYnSwotKsdM9YvvgE",
  "key4": "2bB5YMFvZuMbxJnxhwXGxsPnRTHhuaV8kTxDWQaeUM62HuRXuywuikhN1e6ypxMiMz1bk9Xeck6u5EZKDpBLQL2u",
  "key5": "3Z8gDA6R56NzjZi46WYJHfWRpZr8DTufHVgQJm5ERb6SrAZ8gjUzPy9tcepBT4omCCZdud2qpCtSZTnNTihmKTzk",
  "key6": "2usvoiDoyS4RHoTh8vopRNMcSbd6G4GRyhpsGWZdfvGaKzYahJJd4pEwkp2Fm9LhbtZNdaswAmSLfzYjm9qdeb1Y",
  "key7": "5PuDFSLXU5YN1LQ8HuyVXijwF6amyDaihBNBJLhygVe7X2NVtdDM7UyA7ex44PTGx7DUpLPBJb3Qj5cS5kMHYQo9",
  "key8": "371Bm3DBqyyAuRzPuy3hYnAL4NtzTjQQawwWS9bgmnjvVTGwwp4gEzBs2zo6NtbpU8hyVW9qDgKfomGCjrvRo5bR",
  "key9": "3hSh1KNhMRBfVkxo79atttbJDU4ohqXodL5e2JnNfBKuvPptU1yNLqpnU4mWtxccCzVG1UcGELcHcADRXXfU9Z91",
  "key10": "4sTAezeksV1TdPurmHAVq4Xau4xA7WHoszS3idKPLkiy6dQHT2WAHXRgquVQCDUPF3BxodGcjQT9FrMKsTzecMik",
  "key11": "47nM4UFA1sZRTTL5ZX7FD7R9DmqAdAywnRFtekig1mU5CGi9zRgKKvp82gwRDTocnqB6n9bXTE3Zsy65ZEaUyXmp",
  "key12": "paCn8e6B3ujusui1v4ZrFZ5gqituX39NHMxtXtBp6p9rEUFoKtQuiSreajUSA4Ej1xceyuCzjs8qdCa4PdCbj4R",
  "key13": "5iQzRHX5YvZQ8JCbdo5Aic7u2RWQb3cjo5kpY2XpJeQg6CNAaJ6FZEBNEpM8u7tKzMPDwGEjjnJY6nCkj8uozt2K",
  "key14": "5Nsb4k9exQJywP8P8GduyrG59JVWSvNZRgWuCGSj4wB7x92yojKx9G7xKefrsL8KS3MgeT8CYKQ97Q6KR5Csiamq",
  "key15": "5Cymp6dAMXZhqxkKC3TeFe1X2GrqUQCuNsB92yBP9ZsbdEK5SJDwh6hFZpeon2jWkqsMWPJjUXyZKeToDYwn9ZVN",
  "key16": "4FE1NJUd1W4i6TvuBrGi5fzPokvuzgG1LSyDYsKPy72N7e7oZ6HdgtygEn4GP57rUiymhVh5nyEjrLaqg7N4XJ9M",
  "key17": "2bSay8rWRmabj2VfT5FcgG9nsMjkiBUAsqgzNsCbdzMeALa9My3GNasb4JJs2T3NcsF3cVfuVqfppJ5quZoDACi2",
  "key18": "2eCDwhT3VHbanGURtMebbmsHh6CFKrjLqX1WF8hKjqW8YVMy2M65oh8xizsNZ93YBHRp3p5VkHkT6mRhUqLTLaYi",
  "key19": "4iWNmccWSrvZmxXn8GMkfz641DbFxwBzZMQURmGtLk72Mb9gt2oRPttAdcAW4PQwyj5fQPx5wLx61njJRq4j1PE6",
  "key20": "2fmYCZhAnETvh8jWzF3X7mffd8TPRqxSLhL8FwzYjRzfamRRBwGM2LgtBjpNY5CbWFF4xf2fakh6SVEixCCcov4h",
  "key21": "2D2dDXvuAmszMdth9BEy6ogejEpmNviPQ2FQfFxdJfwxzi4dJYtZm3KikBwMZCnFqMaZgFQRGENBUFn29iqHHJRu",
  "key22": "EKbzkiobPaq6CuggQ8Hjvc1ZFg4BwRPrVfqQRdZ8driKaasf4mvoJVNiXRCAyAn2n2PzyNTH46PHjE4zDUfuWuv",
  "key23": "5oKkQDm12o6Z5rYUQ3GTq3e9dxMmtQ3QuJPi6mXDbwXpV73f4PFoLgQYSmin8PwR7qTvaofthFLPRuASgNnvMzWJ",
  "key24": "3m48KAiSTnbipt6oPza6AVnKuZY9ApBhhcMXyxCEHjMewVjhfhbTXAZTQPA31pUAEJTah3AekSmDQT2LLqevtQR9",
  "key25": "2x2zNYhmZpJ1Dm2V7EmD7bofbEA96YGgZMuf5XHgGgFmwuJKzhvyFVigQjmkhJE9HbvpbojqYXUhCHVYTr5uzZJa",
  "key26": "5HxEA1ZabvGCM7rycCRicdX8L5a3sBUeb9QZ5A1wKxz9x35NrRFX3b2bEvTPWdSTDLJmXd3MXFzFUFtWSwAN9d1o",
  "key27": "4ksgioCrTd7N5hPuhXsnTbv4EPRMa7jB7xadkYGn6Ntbxxmae2qtMnL33eqjWYz4P1vH97tPaTDSgT44WYF4S3Mu"
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
