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
    "5SRP5drST8ZytSizHpK2mFNNVWxzKVtLBbRZy6pNb8QCBjWmnR7qXYnaxGv92JaBeB4XaJUA3aYDGtuQdNX7v6oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCGbYfXU554Y2v4AWPCaGKoZddQF1q2b2ikW7vNxmPf1MGnbEnR3QBtvv1AnZAY8Mf8ovA12bkqyuaKEwUsRDsY",
  "key1": "2RoGKwXRY2Q1iap7KzmxGTY6o1ZZy5ErurgNEjcVh16J2TaY6JuXZWqgFqwSisuro4vjbxGnyx9evgQJxJCZoySR",
  "key2": "2Nvyn5cQ9YMQGF9AKAXCw43sRgT5uuoqBjTR5mNi8NQjsH7nvetBxN5MYxiFmiwVrfiyqvHCJghVjUvE9AbPepoa",
  "key3": "4x4qrgqsP9syd3SvoRwqfrPcrmJRBew7wnpq8TBuJj8v9g4K48YjVLzuTTvzVWLs1Fy3Ne5MFLekxReXDT8dRLFM",
  "key4": "57fHduNnwzjxuqBrNeT3xsbg3676Cd9wCoXJzoYwYFRyt3Ho4UA5oF5v5uaznY3TU9LLwYhJJpPzfStKupZf6xQP",
  "key5": "G4ejdRAeWbHQ857DjVNkHT69XkxfXBRdNT4gYsB7dbizYXLNVouyyyLcg9hZKZN5yLjiao4ZJSSRKfZURMvsGZU",
  "key6": "2Tu5YXnXMQPT7TDZt5dEzgnXAxHEKMUWidC3prXShtbXmLJwJassRWtZ8A7JEnTZcctJc49Tjd6N8G7MYBuh8DFx",
  "key7": "29QsnUhT9fCaCwxj5Xpope43trZ93iHmsCX8H73erXRJZhE2eEN2taNrb9nr6gS7995dfGYFQ3rkUxZoECeduSQQ",
  "key8": "vQfsPZWFHu4FMU72F4BmES9tJxLWz2L5kTeqwSLUrp8Y6ghTa6wEX6P1BwiKxHdgh3cqy581CkeTorQugHJgidh",
  "key9": "4Jz6XUUQsQzggi4ir4jrYFKGzmpSbY9tDmpQtHnyaZCMWusccw2GsC6cKmVtfsCJxZDRNwv1Xv23e5CpdBC43FJk",
  "key10": "4VuUzERFoWqU8Y9H2XJ7UuPGN3mZWEy4Gm1UmttgnFhRg5HZcFfD6RCX5SUEw74eXy3M6JzLJ7H9hjBQHUXaBA4m",
  "key11": "2AHgDAfbGEquGBr6wAq3GkZMaBuRaruQu8Htq5b95TgcKprVSauyiAABn6HYBmUsWMpD9DsjiGq571KydnrRQjZA",
  "key12": "4f3BxfMVV389ihiXrk4uJsHzmCga85Q1vLvpvADFJ7EP51HCW9xCcgtGM8vwo6fnzmwmdXzpJESzK3Scn39MF3iV",
  "key13": "2MTKM7ueAUYwY4ZTuX9pRbCaqQN4obZUJnhuZgWoAkoXbd9JJeSFLYnvk4gyjGEZ8LCUXrwaN3ztLrxKcRUKkbBe",
  "key14": "3bkygEK4QG3Gcsm5uTouHXpS28x4axgkmUhGn3SGhha9AyCoQFwVCPd7SsUEkPwAE4SobDM58P697VUwuyc5X5TU",
  "key15": "3eU9q88S9nTHvmgDcXTECNGjc1csJMLpfipt1qjn6w5J4s1KcJSwU4vHNvEyGDBsUoyrgLw1m7Gi3SUqVH9TNMPA",
  "key16": "2AwTArXnyviFJfHK7fmdguwzGxNnGXXLRo21EB6rsGGJUjhj7XKDp8WoAmZJMCRpvzYsh7k4srLZUQGcyDTw4Y7V",
  "key17": "3reckjxTPTTcQbCh1FAqASBbM6QaqDyXXLpBWyjo7tFCoZY72AroszJ3TbhkoA627bwjmHMVv97FLFSSLwTkKGYV",
  "key18": "4VrUSpRicynXXvhYva9ekuZosjGbuRBBP3BeCz7dxNBrGEDeoBLBxgGsGbdzeRNUhwkFn83FhncSeY5Q96kcdG9o",
  "key19": "3idiZLuBsudMor8HKUtzPtQuZZhEHZ4JV4eCMu9SzN931oESRTXGVNDMYPYyDTYQqk5fMUetuwDV8i4VeTZhxBZX",
  "key20": "2MR7wa4wkwE5sSR28Hg4UbKQNmGwuHj8QiYySzvVcshp4CWusNMDfCH4zFD71J8UpCywMpQUbRk95cNrvnAnnc7S",
  "key21": "3V6eJTb4bFmCRJK3yhnA8BTbpdaz8ns1i2acXZpKeu4xrRDsdVYYzYV5Vc4pdcTKjUCaNrc75fWk6PH3epMZ4z32",
  "key22": "3cixhnCazWaaZ2PZBDkAUgqqqHEC7guxdS2wyfQPXxuTwjyDibtGSvfTv8aHuRULMPVQZUChz4HPnCwuU8MBjW2E",
  "key23": "4NHH3UvvpKB3wTaQfZEG9JcjyeAAiJ1jnjb44aUS84mEjAGwazqRpYD7ojEy4n8e13oddXNT4qtaJ3vyqu534m3R",
  "key24": "4PtrRuwWDJP5h3cXYmFfgiyFDgAc5cUPdxxsYKpGfQpY4Dc5vHhWyhaGBHNgogNTKks2EEmbZrzWBamYVDEzEQEt",
  "key25": "2vrN2uPDSHWRXYwwhLYw5YimvnQV1Famy1SEaepxJ8zMQwAogq5eyVeBtJ51wTjy5q6ZUDHEYzCw5svqajeiQkvK",
  "key26": "4cx8ekhLfv5HEHzXPGCb4fGWhUQu7VLRikYqMMEtR7NSHnQcAh9AWdKuGN4aUd4SMunwz1VwhT58XhZMFVFeoreZ",
  "key27": "5NCX9H3Qsja7aWjB4nXW6CcQzA5CDz9JSHgrPDejFMf2ZDtAkfUQvCBBaF5Fgg4B5j2yUrvTLhCuu99e5HSLmKVL",
  "key28": "7V1X513N5V2Dq457pB7wYiA5FMpTswq7wBH7igBdEqBLPMJUSmiZkNuBQQcwQvzNxjWpm8E2j8UeANyhWpFZEHb",
  "key29": "2h41gGJSStCJa5epZDuaBasuPCRajFvJn8Y1KGkNecrGmrZb7jMJut1chnKBmcgRTWYi9UqF1nfmtYGp3cnGeouo",
  "key30": "4U7obtHPxrPzgpEn5Vz9GjkGqUigopkMUtgXT2Po1m6YyWyky5wViSevSJkPymZX8y6scqw6Km2oXDQ72zKySJk4",
  "key31": "4VGvNk7WHbFHRWxRDFAqgc8mcxr2jknFQjVyFQDhFM5H51ARPVY4te9yknweu4hqtT38Mgu4zqiBD8asL9XZupCo",
  "key32": "5WeKKNdsmYZCyosQNWpXCsSH67E7qmuHY33TtyjLA8t5p63ET5WChQhZzYEsvfpzxHPLG8QVYaDVdarRdppGGE22",
  "key33": "2ixaaRwVVNpaBcC3gwT7hrY7m7RXLJo7d6hGVG7a9UCzSe3Yj4TzEtcs193x5xXusaRZA7E2urU1e7gb3gAGsdc7",
  "key34": "4xbTqBtZ6nsWzKu1B2PCZGUtiA9izozaLyzWNC1Js3x5Z53NTMuBAS1XL523ansdJNzAroD3dowEWi74oWdgvYX",
  "key35": "3PPaMAMgW7BvbH24thZbGBMscHk3EXDTQdrAxoG1HSXHVZH5kQdY695Rvv7qgx5hPDqiTxHFAD8P7bWHk28KPgnQ"
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
