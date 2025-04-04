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
    "vo29mqUhxMcKnMJUwzuC3afNJjcM3LKepJbhZhFdXYUmt3okBVSo3rn83rpUu28vGq3J6RTV1K5usMtLdeyk7F8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wt9eBGfN13tMTE7BwVFby1gG8UL3KogfDXxiP3ZS6k5kpz9mJ4HkzX3EoFW8MyU15jSMHTkobLqe5wsLTFXXeQJ",
  "key1": "EeDGTJ2HeZa8eGNjkVBmgqSnVSUmTUxw6fxTWedfX47wgigoE9TW6gNmZ6pSxSfhcaK145uhkNG62BSam1E5jfm",
  "key2": "cWmvtvu3upAgp8PiqeMLvuvmK9YAVKTcc4QxzYn9kkxsJjZCT3kFWrd1FFS3qGhPpRSk6hwDGE8dHT2LoaXecb7",
  "key3": "4tYRuCD5T2EgQMEVQ6xhpfsazfsoPnLXWWJBJZf3YpKKV2fGgYwkML7fu9qjdtnzdLwYVJtLepYRbtk6VTPLj6ak",
  "key4": "5a5dDAkJZBjWVKjgb4MN5qwv9P44dpkXJU1RYTFrk1tK7neCGNKYUwUgoCUnU4qCsDE5NrvYYe5vzu5fzgAsQWJa",
  "key5": "zJZwjf9Q6AWbhNfMePMXrMYe6rJtdvdLJkbQNvZvjALw3ewFK9MUKgnr1vkwvYtrXEZFoagKRne726DUHCMBv4M",
  "key6": "2rzqJkde8PXAjYhHsj1MaQDqpuW3zV9mKNAY59AKRRwUYhqdsjmy2pCdgf3ZYVxu5kogBzUvpsB1txg8SchGngbu",
  "key7": "62zyTwMoaXcCDc8GEaJ4NKfPNvEpdKLFVRdjCT8e61RPmjBETm9t9vczLSj3neB7RVymwEvX8p9M1uqCgoP3ET7P",
  "key8": "5yGXuBdxauyJaSmEKVAzi7zTuHCiqsmVmSp9Ug4jxo4QikGECCQS4LrC6bBQdGfD3ymsWQ2UGnnwj735rHjHEVsh",
  "key9": "2j5Y63YE3DWVZTj7sgyhGppUyHym2XYRTSJY961H3dAFLM2ReqXa3f1EFDXfMwuiUdA27eqwsA1uxTq5X4NLMHiq",
  "key10": "T2ucGTf147h2QykmRgtF9XMvW2SKEnrkRCyJhn91iyswZVbkR2q43dU8E9JtrRZN7uEjRNsaw6VkgGqmUaoYmhj",
  "key11": "TZ8zWpYwoYsgD9mfwBpdjzYLmTwhmokFPcDLRxf1G6BQmNSEy5LuByEyb4FMsabLWXS9FyEyJFwxuyc4sB9TQfT",
  "key12": "8ArcqspAMXvWqesiK1cxEX72ZZBrpwEyTZXTcxHozAX2U9aV3k4vVN7AtevFvQsPEN4GKwwssD7rMHFZan2Mfsr",
  "key13": "3XkzaKtvbxQM4nrAYiUcUf4rtHgS2hMbx8VLLhiHp3Gqu25FYcJkNuX2D3GjXf5rbk9YXkZqTYHBrhCC1CGwkuhd",
  "key14": "8UGtKkDWjpgh6dqvGhKUxKcHhyPtNtv4hVWDdn2UYHa3828QKqpMe6nVWoE32AH5sFMZWSed662nS52AA8iiD21",
  "key15": "2r2m12aJggtDhGp4FqC4rQLMkC8eGySmoBxeMsNdwM399CvxEaJc1Awnr3bEvoU5F6ayj1JzUeyr7524X8uuRBxC",
  "key16": "1Ek6Wk82Ua6YsEq9MP2211d8UiH1CPY4GbKrFpeTcDiHZ1ejDxanu88tbKyi4wvYBeybfGCFNuY2qycrmtmeTRx",
  "key17": "411xFX1V5nzeYDUfYiwiMF6kJ64YJGWc6GKg8SJ64mBM8a4woinc1HaxTeG4ESx16JyizZJSkorPGiR3XeVuTX3y",
  "key18": "AbJHqUwkYWhk9RjoZTD9fMcewWZWuGV7eSpchmvPyq9QUdcBLZx1jiw6iaZsEHLGb4zDuD3r6cn3AVG1JVun2Zd",
  "key19": "BYZDpv7YDHx4qcCNBnhBb9byvM5Gi34Xw7o82gU7jWteo9wygAMvQdZqAfo7mChizYrqG6oisSFhPesfQ5FHBwc",
  "key20": "3WimMpNDkzHEf66ygGydjfEf5H9KvbXJtwLeXDSSDQGiMXiU4b8YFNaCWi3NExGtjK53v17d9WQpQpf4kaYB8aMG",
  "key21": "4W8FBU4zcM9pz2PErXXzewC1z3fLNnTV78FhhWuLGkB7gaBM4ajdk9P5p69DU1otYEGxTTcdNix2QZKuYzhxL2ve",
  "key22": "4a6gYEneFAiZA8or5b3HvTE9TRXpHgGi1P4yR1xZCji2JFPuPQw6B6eP3smXEnMgR79aySvyDGFnsrAbNF9mZPvx",
  "key23": "4efUkeFyTjw3fcHQa5RKY9Nr2DevheL9HF158tczBhSkpdFLBVKWb3mToheYi8YwJMw2PhqhzSTHLhzsBfduPbA2",
  "key24": "Ab2EX291Cd5C7M4wLY4VC3iGZrFW4eEVbBTd2fCxepC4fuwvp884psTq5kF8NQZ2EhQaLN8e8BNXaFrgFuK6v9E",
  "key25": "4jsNHuyDVrqBv4a8jkBu4jvLEB2Xs9axpSPvRNNBX23yvSv3gQ7GunMYVH1qQfDNz4ruKzBxPpbmHj2PgwgZ1F9k",
  "key26": "29ygbnaTLrYUVdxBwJEMDrwYawpjfxyUorsB2qNLNPR1bfFC1aHEErspDHdz2c6vKuQVvAMVDDnGizRXyjhe4dQq",
  "key27": "bzwqqE7AfM1t8jxHwd8tApaqcABDzGB1QvDbGQP3Bmr2RiR4kV4QfPfiRG8i1xq9ATXTioLXQzqcReaiGShaS15",
  "key28": "5LPc8pwTNxuicFjYmemwc5Hi4n99ViikHEoLXzk2idFsN8NPB76WWzDnzuK9ba5p8mjeR6ZuDr46fygecMKA8a8M",
  "key29": "2PwrEezikMkHKLmnQzNbr4cjCG98gF6rDeW7rHA6sUZ7UnPVPPviMP5i8SFQfzbfgjMkw1a7Vnamvvr1N8iEjtGd"
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
