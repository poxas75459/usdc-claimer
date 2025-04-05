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
    "4HczQ1PYU987Ga4aXK9sXrQTPLZBvGEyepTkwsf2jPj4837ZxLR8KQhVMwzsg14eXiJ67Qcsbu1YGuUAJhsxV5HM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lai7kUM4F69q9RYz3tAn8ehaF9SPyTw8cvn387mMRECnBhDuZsaVmaXQtRGihowctLyLkeaKRadRbs4pqHXVMgQ",
  "key1": "29C8wByHUEFBmu7UdJEqoh54YMb7QwkTb93dGMwMnaphCQZC4VoZU6hhASmMcHBRokmr7rASkD5hTt4u9BisusBd",
  "key2": "3E8PGLUmVYyyptZcF84cNKA7uS4mcw85xZ684AZHzoMqrU6c8PZiqpeTTVqKBDAuLceNvMksfAvvmYg4p968N1Lp",
  "key3": "4n74vYq8DTvb14CBJiKPpya9bb6MjnDezJ5RS4kSmmL7J9YnsxiYeBuiFz1Y9skwYAPoEDnE3GC1znfPbpAdG194",
  "key4": "42TGW71pJ3oJT9nUrmXu2aF8jWKYXcpb4xKS5DMsjk9dvvHh2K7MhtsCYdCWhYvqd1NBBnfbzKoGuyCYdgtbv9i2",
  "key5": "UhjDN8LqhZSc23ZjPqrtxkhpQhHJXGCkTEd7D7S4916YYTD3QyWPE21eC9AoFvSA437RhVoxw4XN3QMyKdWZ4n2",
  "key6": "3TygSD1onna2ZoayueyLSHj9TioMfmG5dv3spsZAAZ6K1xShfWKaFxJi9dkNyJPxyqpUP7Ezwa5MMPteaCpd7Xuz",
  "key7": "D944TxcL5N4249ouH9JyH9yw6aCBjbiRtNAZQGTueifZbykmUtb6ExhBacwg23QjwKB3yRZ9mwLPuQBJe41A8LT",
  "key8": "3YmhwBB3XfX6CMMRPevLevWCCYuyPZcmyg5JTCSdSYNpmz8N3V9A71WbLGH6oLSPxY9LbWncUSDJ52p5Vu57Z6Ky",
  "key9": "4uhVPBvBCWjEXEFnXdQNDFf7v6WW3CqwKQPfMwrryguPCs6EGiqwTekBb7tYN6oqmkLduh8jgEkrrXF6mFhDuTM7",
  "key10": "4ULbruXwH3NSL1xXwrsYRGCRHXEhopGSRTXd5S6JnQKaSr5WzL2aZGxZqwsio2HT4A7URtLa96TkYj4LM2mZ8xXV",
  "key11": "3CY7paseVT8s7g1vz2wVmmdCziaADibty2NsceqwQiw23WsMGdHUoMWesbxcwAMkSctypRrYFz5854j8tDuCgFnw",
  "key12": "527mhf9rVcVAonkcLU4FWkcSyhTQ7wUobwh8f9tTdDsK33JHpe4sY8d4yQ8XmqXnGVoRvoizecobMAKP8DrxAfa7",
  "key13": "51CPiGaeCj6anDY8bbLaxCfUKVXJHBzhaUcDdDD39njWtFJdGJRtkWQo4oLssd52yBFmDWSG7C8koFGbCTYcgoVt",
  "key14": "D8B1oZ4uGqLuNE9FsGKYkLgAtoTXbYpzgvEoEtRyU3LipKRNtNLu2JNWqCksTBfGzNWJvz6VCGKzNLBmirupDJZ",
  "key15": "2Wb3EyDEQkLP72ifD6s4s8xbdBj2zzh7thzxNWqwzaE5PqPHvZTXQtNYfimFbvEoKAsrStN8dMeySiZGBRGZFhuk",
  "key16": "bbrBATAAGruNJqnXfKQGVZpXPrKadeu6AXKiPgJxN9MEbbFSeYNy3PMnWukW1qHdLVx3nKQhHkMZLV99saHPxYM",
  "key17": "cDhW68yZS8kW9FbjhRqUhGeNwQLNmdgBVpRVVFtX4BnMbSNQb84AV6xDK6tR13DiBcipjuHbV5yNGZbP5dfmXAJ",
  "key18": "33XxrkhRynQMFJZ94oqCQowMYbVxRGQeTxneap61vmpe7kAHTNY6sVKfh9Jzpq2HgWy7Zx7ALrhGtw88nYrbw2Hf",
  "key19": "viMhcHL16opLCeJeGxKfQZe5zzW27SLqPuV48HrHWTZqTwNZSYktNwHXLhCD5kuH3hJAAaYJhZanmCPZojdnBpC",
  "key20": "2EHACBE5Gh7vKkj36U5Zu27KCWYTNyD3Cp1jQPDYMrVcmua4adaLLC8b3Bmj7X3PahxoaV2HnR2rQwci1hHrj3ze",
  "key21": "3qodjfKBLZNGzWuaTHJEz3ck3z28puBERRd5c6Pz4isk3g3PNxoPn2G4RA97yLrxCUyj8AxmQ9EwHf8wNPLJLRoN",
  "key22": "2UWoqCJsSgGQXD5HyMDjzCDcebME7TzC2BjhVKVXZ5SCF1L5K8xfemfLbzk7cFC9HhSRHby8CvbCYQ8PdY8xoF2M",
  "key23": "3KzQaPDhmvCQHAA6Wu8hQ2U5hwGVPdhmwhzgotRdtF274d9J9cFun2jNNzdjVewbNHchEVUn4ETqQttckbJbBXga",
  "key24": "21bU6VWBV36VYTu1Fuzo88N6nkZbtbyyPjiVK5e13KCy2Bxh95821voU86SLzrxAERLF3sGGvkpAQ1AF9cMxqfUs",
  "key25": "1fN5gsunqzG91pgcC1fvb9r9XxqGas13K5u42NmRmfHNKJBz18mbNgdF7e8jus523wHMW6KbgE9WCubGyRLuvCz",
  "key26": "4svakYUyBPtQeescRQVfXaeYKUhmat3y51w81VBxiPqh9ytySzaKiGbqzUWu5xLLT3AWamxWhjtUs6JduPb53yRN",
  "key27": "4dJtVa8eRZVuFfQdbAJGt4ADqyn9yL9X8YekPXCZq4yUe926kuKxejSgWV6TkWP3Gdp2yjeyhpnTYNcUMsEXdodj"
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
