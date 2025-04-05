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
    "2jqHXSSBVdiCJdDU8QvaH9xkXCK2Zs8V9eJ9VqW4veevKno142jswGnBi4UFV5RDCihjpbSu9Meiv1uZxDYpsQTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "px4JUPdoXGvxWzQHebo5b72BJogMtpKpKv6cJF7H5aquUpKwLPaZL621RWYWehkv9g3LRN48GaeH3Zto5eJJSmG",
  "key1": "4ugtk5jibAj2twS7RK958BAdaJUq36hbmKKFKJhfWzK75YqhgWmGdRF9pocwXmSAMRgDXMmuTL6cgBFWFxMoaJXy",
  "key2": "3VLw4f9256qDEgYcGaCutK78wdEnWqiNr1jvtbjnZfY7JhDGytzxW8U1wtdXrAimKZJVLZVtkZaBoj34LHHR6dvP",
  "key3": "4ZQAzVvpVM7U7vYvE25SGkQJAgGhv4RBsvDbKSbrzKKFaWFGkYgE5XaCkTT4LAdtmmzxtPe3AB8Sn3CSDDMnXnNb",
  "key4": "4sD3YMSPGDLXfnSuznFtkUrdgurBcHSWZXZGx9iNNKsMn8LHhxqL6gSyLXix2od1QAdKbJRWsDm1nU6UJ3SzgaEG",
  "key5": "2gKAU7GXwGppSVa91NvDD7Y3UHH15PDsuvQhFMfZxaVj376hMoUPzz82yMAbUBWiusRL25984z2PDsbPssEGU9ed",
  "key6": "5kukLY2QfUfBoUY8mTfo4oXMmkHmePtAP78gL9Y61yW725Y8NhdWtsCweDuwK41ef9BrknhTuFqVyXoSm9K5PFi1",
  "key7": "2juCweQ66368gGnoFnQ92JjLydEPR9tNzdmJB9iufimZy1h4HryS8eQ3HCJrE9JqP1a1krrPP6E5YXMjA7VWF3FY",
  "key8": "5yg5eJQoFXKRzu5Aa32vp7zvssBcwHjjENpwguJsA8pyooV81EEFBNFVwZEfPc2TQWTPBwyPF9MkoUrLJdtYu4gm",
  "key9": "24wvYSMoWTYvuyZzJvxzw5Q1E2eKZGjY6K4MwG6xWkiKjHGYqoBztSrWEWDLQ5hJ9KqMy6gmkunt1uUvSxxHLxbH",
  "key10": "4uu3xC6Ufd7no8fiNcY1vorQycvZ4ckeUgKsXnyHPGGuXyFT7ex9rQtuPauYLEq28V5MzQWV2Thba6dLBGJFjref",
  "key11": "dXNBgyHjo8xqxb8i9QZdUcygXQscwQHh6Tbec4VjgjT4HDtk5aum4fPd4WuBzba2LvPqgt5yFw9n5mANdfyGB8U",
  "key12": "54ieREyQDMit8EaMyYLx4kPqvzbJyt1bjQmLiMVmohbjQXAYQmLhiBPGa3n34KWwVtDmMmMwPvv5EKtZfV2ZWUo",
  "key13": "4oHyuQLQEQ9bLJyxWHBtqRcMdoZTsgSw9MjBhGQj62qEG6HeTomRv4MgfeJmnaFx6aaBG9Y7aZyHT1oT8W3t3v6x",
  "key14": "2mijTetRxomhzaRRiYsiqzC7VHiL7Ksi7gDcU7XDhnhMeqZrVsdSSkRAu7qBYRLmpUvwJ7UcPfCwwuqxGQ3E62mC",
  "key15": "pw9MqDRGgSEez3g16tZa8QECEaMHehj6FuVFkKL8NqSRKD4fccoJMAKTYvEbaUNBFNYaHrnDGt5Z6zAKNP7GYso",
  "key16": "2WPTXmfi2nmQRPg1JYjgLEsW177mQrudb32fGnWgQCUb21HF7gs3sNeCGoFsNxqvRNQufskRikqMFU3ToTQYVaKu",
  "key17": "23SAGuDjzJbXcMPoP173DezvkmEddFr4CJwfUmByhSYsMXPPkwn1gmGnSHPEZfin6x6odjctVmLMkFv3C6Jzowcb",
  "key18": "4AXhxTKAyqHXA1qe7uVxG4gVBTfsQzaikvwsTLBj2i5X668NUEGLSJU2femGf2NREMm8DDKfh2W2rF9Z3A4sr6NJ",
  "key19": "ycLQVweTSrTf6iQ6qKgD2j2hyUiDKsLB3zk6EGq5Nr3MtkL28G8Jav82CUTiH7g6uUZu6onznmmjvciSiGyAzee",
  "key20": "4g16zaov8MeJaMFBwACbb7xhX41hpQU46bo5PDa9uMwTQ1P2hhMgNyvPGKcwLzvCysCughizmxAdgTrHuktFLzZZ",
  "key21": "2quie2vLdGVmkXDGbP974u7wSxKs8itxZbfgTqXNbbGgdHw4R1fLbegnCyhPAqmbiTdNL5N7tHd9BvP8AFk5Kqv",
  "key22": "fyTZcRcKnPpU1wbga7KFvzFyzr7xcp8MCJEPfuLe2PCRAT4aQ4arfUKNX2HwXK2KDnQfgVKPA4LCBjM6KzXBg1b",
  "key23": "2Wqm62Q29H1mLWJ4McJYa7v6nRQZbfdpm2mXW5brmLNZxTugXi3LFarVpiVGkVvHDc1Wwyp8S5jcxtMuMtMkKYsZ",
  "key24": "3srWq3zCYmr1obw9fgipHk5FAbHEcg9VXrvkhSJETrXvWQtSaqCU993KuaWPWakcJyuLpdQRkC8fWmXtAdTSFMae",
  "key25": "3gpLkM2j9CWPtGoQtTjjTgPCZHQDkVir7oTxUi3DYCxPug1FY6BucmQS7xszV4QEd42o2BFdb82Ff2QgK9Pw19Qx",
  "key26": "2bnJXyPZcnbe3gAzAjomu99cdZw95e14NVMmaJqdEFKZjvv72s5MCZ8LHVN6Vvyz6FBkFXnFE4QzKUW5vqmekeU9"
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
