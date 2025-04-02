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
    "3D3GJWgQieBfQyQBUajuqM9i4XpD2bfMrYtvACe2Pjw7jpwC1Pi7ssDGjAQxf5FYakcYSLcHbKXjScWrRNdwwhnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CoP4GeoeDNARdZGja98bEsUxxpycSj21dYu2L1RoU1T2g8swrDWjfdKtTuhHFGyaRFXRrUXoFzMULxzhmLFw2vC",
  "key1": "2eGXD1tfnzYKRWF1qN5q4eUHHtohUrJPYyrYcENTNU21mba8oKFQ7txZaP9zM9ekE2n7MbPZZQAP3zCGQwbDi7kN",
  "key2": "3MCgME8J8mHru1YB3ronUAPNkFZqgNygzKD2EfT2BfJaaqQM9rkgkMSyVmySFojyKcuEWwQYyvr9boL1ecvZkgdg",
  "key3": "468jZwHCWJnKDCtJGdjqPgaqPcyZxZer4affCsZQ6WcTjwkpiiSjMYJmwiGP9KGCwCDk7vHiDRsThJCJE7A79i2Y",
  "key4": "4eJPaXDM973XwQKrMEH4rSqsQHFNTbSe8oLHaX4YoVWc93skBWsTJZUXRQskZJrQz67PRSN4N6rnK3hcVkLrhdtb",
  "key5": "nU7r3qHs7UGwxtqeHUBvQ4hr1E6a5xwWcXHCg8Mkk41pSQYAvgQMndL6R4n594E1Ut8HGsaKxNjG7A3RRNxsj94",
  "key6": "e7dQLTsiLxHjShy6tfeecq8DMbYM4hnqGr2YMcmNzWwfQ4ohGnvM2dEwa2zqBmTYuQxJEuYWcm6Yy31Q5cxZYS9",
  "key7": "2iXkLMYNpwEqH7RgkC9mTyqy9Ve42Tg14UvMNS6iQjJm7kzbxEyqJFtEmDRXins53uiz8X66LhqzMeqxsrCaFTgT",
  "key8": "oHeREsuNxNVS4evVgc7DBwnHEaT7bmLRUJUXwn2Ax7hDXyMC3LuqM28AZwH6xc2rvHnyRWZTnapG9gm9FZdYHmc",
  "key9": "5bx7FUEM1hEkdd567aEGFs24eaZKB1k8SwsnsrnGCj4xbLQFv1EuBiE8LmqPegKBg58vGCqKPQ9K7ppYmUvxCpRC",
  "key10": "5BkmZ4CmaPkrG7M1nArJYBD1sRk4fnFQp3fKjBai6SFVFhZP7ZX56Nf3vjQmyJx51RaRiSASsqwPFZ1zgbjDoc5S",
  "key11": "4iSRjUSXVS8cz34n7V8r4jj4a7noTt1Mg96Spq3pXrXJmdYwAwTZTq2eEfDkTJnNF9xNSdijUpBhwdLn9p25LFzC",
  "key12": "4b1L9dwQ1Hu4nkpDEUqDK8dSwdoAntPT2Z26U87cciNPtUWDVQMtTgCsDBFZRL1gEKEQYSofeHpoUB51gxQEsPSb",
  "key13": "59rcCsVz2RuRU2LuVzQNVP7f1p9YMcgRLMWhaxeBDtUGnBdL2L5tbx2r4jNrv7fXFyZZEEsmpKurmrjrpJkCbi2C",
  "key14": "2L7oeFGsfYVw2PR2gCarGDVBPbickkyRNezFz5XhQtzj33HZbrED6eJMPbPKNW8KM1PzC71UnMSPu1fgxmjgtYZp",
  "key15": "4M886GYV5AiUiZWeBFDekHayPT7oJWyegFXxVv9RRqa982YJ8KPsgswUuX8inUPS5SxLiNpF7Jpp8yC4UhBwmtg7",
  "key16": "59oWVp9hJecYMHebyEuBdJCtG4jxs1JgU16wViVBPoeipxXomYDxabRxxsTzBnfa5PPHXXm3cxraJ17G6mCZhwuC",
  "key17": "4kipNbYrNRJgGY6fZj8uvAX7J1NWwuxMNqQZa4V67DwjKuVZXMQ7QBjtiVkTWUjBkKQGmEumgy69ZZTPm7S3pYpp",
  "key18": "3SVQD63dNZ9WiPnqJfKGD1TZ7hFFLWmnwCbTuKrrCYyrMpeRfK4KxZegZMzw25zJ4jXvE52bREk7kFzD8rQ1qnHo",
  "key19": "CawaVH2XpDA5C5cH8M4QicfJur7VqW88tzy1unpVxczTkDXFvQnogdtnXk8Ck866xrdvogM7hN8Xz4dCtXw3Szx",
  "key20": "277mt8te5DaiEtBNg41dxX49boG4WQ5mopLeKmey8tccCCm6ezE7XDKfDdjVE29CghFm8gtYeguLLoU27rCY7n4W",
  "key21": "3BHkuKzrMDLPRDKt2XQLR5k7UPtTAxiZySteKbx2iocLThT7nkPThm9ED6yevyqGicUwcpuPpuJ22Lh58oyVm83b",
  "key22": "4QXJp8uasuKqpoL6qmwvEe29Gzfr9HQfMzvCtoynA6FTSe2ASjQ49cSgjrJ6fTY1FxQSPEcf49h6pLmBtzZSHpY6",
  "key23": "3LV2JzTa3KzK9XMHgV6jFa5cNFWuzA6iArgosjD1pxBkDAENSg9SKCFb9UaV4Hp29ikhpeMTPpnRnYBW5FjP5pmY",
  "key24": "3Jvc8qhTaKutuF64LTiv7QnRUxo2KwQfUi69VB6iWEwtWE9zrVWf2iFg2FRJ8KxyctsVeDjRLbbzqWcSyWD2Z2Mn",
  "key25": "2h6wuncsdaGqRDE78NxqdRW5WoftHYg7e2wAYkCPKAfGY8bPZfpmNEw7FJbNZQXVmtM8zu5CdgC75MwfQbyaBzfA",
  "key26": "2RDeWdyzes5oUCArKmXbqSDU3CU6x6SDy6vqzxF4TK2uLwNnsW3ceFeYuUacyzfd2uDN4N8qTmjgSBtVVuWiSPQv",
  "key27": "BWZwa8ZgLs8rbq2F6UNpdxqEk41kXB6u4zRotqxvA38KJFBY1UDitpLdEooqLt9grfoB7VqTNKiX4QT7a7M86B6",
  "key28": "21yTz1wqmRN3KzJVz6baNesVst6HVgBm7spFukeeqyuihgXPHhV4QvCWW7dRJUjvAnooGLcv51BoFsoHcDqVGfBL",
  "key29": "4odsTU9qbN4pBWjMRCYZpam64rMv1GPytbjP3iFwDCNwLzjjpkDbbPWEaPFWEZkAZwSWH5q9LoGgdteghJdzgPHe",
  "key30": "5jjmH6vfyrhGFDQt31hGL5dMWMoSE6fEZr61ob83JtdUWo4AqFjKnRVzCfyYJnE3pmP5RiGBu5Bfsxga9LV3E9XS",
  "key31": "4uzMTvaQZNWoKof5ksRSfvruwUw6rNxFgujLSGtMrkNK55vpRPL94WX4nNeAv9vWNeheGaxgunoSA5Dh8oeZJE3J",
  "key32": "4mX5t8TrRaJKao5MEuhHt6wHFEz3XmbWxWf3KCg3pLuYkSBmsMfzQ4hDRfyHydwMMbJvB5m4i9ykLPYfMTiLErrj",
  "key33": "2rriL5bFEhvjwpt4NJHexAvLkRpXCLrCsT9rytb619893YQg8zsHDhS2ADeKWcRtqfMDBv61XAxfVkcAAMHcVMzR",
  "key34": "Q2t6AwM519L8hdBuqi6aHkAEJn1fAzonuW6vsqTzxRyjeipksJ8Aq9FeRantpG52x2RJ9ee5Yfu7xqpGrKixgpF",
  "key35": "2uwm9P2HqgAbvtsRy9NKamjh6xh7wcHXuEwvf33PMCcvY89i8PNQPvY5shKXjEQDMWpbs1A2FzcFZGPqtBmTaKVZ",
  "key36": "WaNMvdYqph5h4kCAU2KuAz4SLr7ieLtvJQnKjr7zesi7v1DYy4Aj6vkT4ka8PzQYkbYqq3iSpNtSRJFi5cCcnZW",
  "key37": "3f243V8dNwcrYLeReyf8Tv9JJ8Zr2tEpNhKi3S2TCd92NeWfH8wL7pi9sNcBhUMXh3HtWuUpMECUDE4D8Xu6wTmm",
  "key38": "3kUmAh4MrEseqEBNQzTvHVtPMAKPehLah19GyVKtwkPtwKArqoNRakCGPufozdK8fFhFKqxSHMLFyFHgdV8C9Me5",
  "key39": "3k4ABBy3gF7hMTB7QhH97s7xmGhF3Y2XusTUy8iSUmLtVNrJZrmHe47veWmQrVbNktTSPzM9mKdL4PdH8zSaPhJU",
  "key40": "3XoUipYGyLZnNfNHq424fHyCxgzQ65mFTByKyh2kJgsVqwUBjaBSCJiDEepCwcxLb3kDfyaNgpdw1TePmKDiaMH7",
  "key41": "5Sk2VNgP8umnNdSwd3FVWhpcGakCn7Wv3ANzzSNQz3pojvXpXHDvrqtQvLfiosqBzoMBXyKSoAXr5GC9ceta5Ce1",
  "key42": "5XytiN6iqpfjMJVf5d3UaYNxNcgxMuAVRGnH4q9NRMrLKAwgBnhnLPHWgzVmF8HvrjoaqtouySu6kn5J8WJ2mme6",
  "key43": "4CwkQNWwmd1zYtKfYxPpDpQ4mvttpPuSyzhy1tPTWCS69g1CmZHrR3JCjZu4UC2JsyeoMqj8wYdHdkzF1jDCCNtk",
  "key44": "eR9HNfwWxqduZVbe9MN2SV2fVZMPVLLHyRsa1AK8gGCmAF84Vav8eJN6VArG1otamyJQe6zLUjQHKivzfCRxRk5"
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
