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
    "g17pNuM71cFYequgRFE65sZ2gWtnk1i9Liv4rWFAkgVvEg5RcuwrfSwBWHpyJJeaCi8zhctqMoFn7YjZKogZuhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aRJzRwsfMYp6YofUJc3aSLbA5oJbykXPVtT48oCGo9LXruQgH3j6jmkASgrnvjaUGEjpEZd16HbhGU7yncMDsRq",
  "key1": "3JZgi4EJJTrJzevJkU7BFVMhxJpyHxiPQwFqUDh5FddhbJSLketdaoZqNbkioXqbh2kaVzVvEvUe6GAfmB8DT2SK",
  "key2": "5zHz2ZHL5xN4tMmE6xJ19GzwuxPVDVpAKW1hbncSrm314T6AfhN722Cg9vbYKidou8H7R3WWKwa3wMHegLhM8Sih",
  "key3": "2wJguBiMxppaThgM6S4ePaS2oBP2VjkG4kVKCTGZ2CNKSWM43wf3da2VyLoF2K82uxqcCHSUMDcXAuVadxgwFgc8",
  "key4": "4iub5fcwytH31jbJYFcTEDE1uHVv4YhJjXLzmT56jEHPQuJEXKqdLCvkw7ZRmVVce5gF7LaVLvBASf7jivt7wxR2",
  "key5": "3sYDfnC6fRzuMBRSCWAzGYec8KzgLjdgQMW9WRpqcMD5T2sj9yJcyWRf77AgSP6duBX8fwE5rRTczRNv5sqz1b6K",
  "key6": "3fHfyucnzjvXJJuyaCePmjNnN5b9oqpmtLWFqsNiN1pzbVaGNXyqFhKyeYStrcgVLTq5vaJgszxkzpHTLiG7Pgz2",
  "key7": "2DvjWRNLBNynqR33mnWN71D6LrVchHsy591zD6WnEftam5d9ERpPkU4FpjyHWmd4GxcTWv8JyvbAR3yuvpb5fYRE",
  "key8": "2U84iXaZ7zpiRRA9AaF43PyMfcAWH5An1JoAiY5VooqUbzgkh8x6aZLHSroXedUAnvqdPas8n9KJyr7ZQbBkVBaY",
  "key9": "3Xnm6MipnEHgv6tqSvY8dAgmySqXBcf4BjEXmzVy6SXRuqpUGQmJeDYSRKqATWBNQjtfj9v8A9EsXnnJCVcC1Fgz",
  "key10": "4jLuMkfCRnRZAXzNsfjmUChXkVkDyiihVkLcNomf3abzWTjmDX85oXCftaTVRsBfedP5MLK2aVj198khC9Ys8kNw",
  "key11": "Nkd83xT4z9Jw2d3S29CaMXM5feDLgfQ6VhtT5jAwTSf5SjNkfQVi5TaodEMCXfQTUSWuPyMEoPBuoC6wQSqLLcS",
  "key12": "37AcMYeZuF3HCBNJNH8tCFC89yTcMfbGhgbYdWqnoUs38vE4RhycaDZwhMpMmyCgbyciWeG5LmJZMfinTr1xYHpg",
  "key13": "2cXSLVRhkT5PTEm6KgkEQviWiDwtQxnDbcdKkaWgoWQH6DVBfrUfAFmD7zTHs8egWYoaD9zNLFGqdUuuaqZRWZPY",
  "key14": "XqSC9QSskSasHmFkyRCEuqsdn4UdFn3emK7AoqbFN6zEaRBgTUvV73Kk5jHSJzkBmBwxRjQBKJLfCh17LjDon1u",
  "key15": "3MNLUAAmC8dhmFvHgssqiLCETgmqNsSKs4HYy71HavLNYpgPYVguyjeM6UfCVtgwRNRyGposgDsTSMZDkMZ6bwuC",
  "key16": "3QBLWtXmbe2immXEAZ6ZXUXdqyFvDmHnuf9UBxq9hFppBqXB9ktGqzMnNLYbqTeDMMm6VQmjyKvnVAiTDuJRKAQy",
  "key17": "448MoDouECB2K8s59dJLPuhS6eGf1wptkfjch4CTM2BnWhjxmm29DFjfVV2RbidgPzRLYNj3C7PokVyE2vV4b23Y",
  "key18": "5S6AMFhCXGqxBkjcnWHgdofvwKDBnexbgCbdsYGs8C9xY9RxvnaHRnpgiZLRkoytZaEtp7Z7ehR1zPUPCzJ2kuVg",
  "key19": "3eCJ5xZGQ7dWHsfYBznTLN44hx3m5e6hkLifRaa45LMGzmMEVouun856yqMFwmXwrVBv9EF9G2DXm1NcQhS8j6do",
  "key20": "4MZhtc6E3ThJowRGyMAeW8XSRnTPdukyeK6ZzxPExebew7416m254akS5CN5wnmUR99GixN1EnV2baEU3tnnG5fq",
  "key21": "4PwfookopbQ9LaAfLjP1rsWQAtnCNXrCi9RaN6eArDY6xFps8foQdaGcfxtVqK5JuEcgd7SeLG4bqspVTuZqNwRC",
  "key22": "QGCUDpYtkuVAN8FK41TRqoFccPYj3asBntCrM9G6pnBxYQLxwAujTXYaqbxiCgjaDVPWGCiLXrreA9JLtdZY5pY",
  "key23": "5YNzMDF9zEL6n1z9eRpFFZzk1MNy8c7Zi5PTkaPDCYUWv4Ct4oYbzZgW532vuZ4WZ4gjBZCa3LCxCks1pSRxaDua",
  "key24": "5J4UrfnZ2pMJ8fxro4fB2vyRZtKBLZaYJqDDhiKuDn7p4mJLB31ZJP3ivw15VbpuMPkJrMr9Aub1F6WcvYaJCnjE"
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
