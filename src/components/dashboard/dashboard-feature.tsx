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
    "2oqmbZUKLZ7wQid7SctMpb6XeY2c4sj8qPr4ZU4DVHgCUZJw6mQnu7pYDdYJ18jQvCcuxddfHtfyU4uVuq3PDqqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jAB3PgfRy1B5vn528aE71DNywf6wXkQVjdfFkEVMH4K2T11r3AFwpSyC7mg9pHCPbucVkcHNbmDL1bS2fxTPwZJ",
  "key1": "5678JDDnsCoZsmo41weDkUV7hiLvrPy4SLYASXQAQ2ZVZN9She8xfpFkgrygehc2qvpLRRqp84AmFJitWS8VkYSV",
  "key2": "2613cPU1NmDY9ap5FVqGU14KcQ7aTuVP2BJXbZztf92mGScKLnannUXL2vBGCNhtSJ6n9qnpLds7VazQaRZSpKXi",
  "key3": "XHv55vQowaRFHnfr9YYkrT2oL9qoQgLSg1CKYuKXD2AEiDyCknSgAon4gErP53vHzFhG7DuPjJpPC3xvd7Z49FL",
  "key4": "CCvgo88B14a5ZaQrfYBbB5eScuVuUPUCgj5rNkNwrZXKopMow9ZiamPYGG981tjJgVV8Usu7LWP9fsX1q13F3nD",
  "key5": "2v5PbL53tk1jFkuD8sGvn3MToqFJRhrsPupyfCTTvUEp2hG2ddLfih7eMc6T1Qo18ncvYLJhZpJzXtSCCfgF9FPf",
  "key6": "2GbKASF83L3RT4PGQEE9xajMqY7koqYbDHqV9YJhLJG4Rpj2swnUPvjpKsdCKVHMog5My2EeuSuUx3dUT1VjTYtx",
  "key7": "rnamadPCN6KhLV9z9ZFQa9mpNokR3xefta1gy9MyxLpySTc5YLp8nGKNenRVJMgNeS6Rn6cjjzG7uaH9dbxTbdv",
  "key8": "3tYC23RjeSS96q8KrokdEDSzT3m8gemD4pdxe3njEp3AiMT4PFQNzmthcCRfRHTemfjNJemjUo9VGGDB6DZj7bAu",
  "key9": "2UdSmorsNPXXLj6tdV6pQRxQczvSd66Dxx2K1wAZb7fesMdZtCP42VcLKjZ4Wu9UjFQWm9gSSyyLg5MnWV8BHoYn",
  "key10": "3hCLNdDQG7zoVg8zhAG3VsF5a3N8cU4Q1eUubqGHJctgy9nQg4BWhEw3kuExhXz9WyD3S7xWdQapq3SeKoWnwi6p",
  "key11": "2Me17wu6J7WHgD4wWzvgUQ7x9VnHLRNMB7fBc9shqQJmnzrsZ54aqjtSdfgNLVCAuTNodVuKDsALg7BLnmSAtPzm",
  "key12": "5Yp75ozSn3qGi2dEsyWevtX312ybhsQWMvqVsnQ9FQgKciJciFgoTQH2ehsTmcwRuYJzax5DBGCcX6grRmof6C9m",
  "key13": "Jc1wHmVffzNYcPefRM3XnxVYuByu4CF2RFkJbizLFqKGZ2y8xSRKxdRdZbpgV5L91YvwJfKR1nLGh6CcVvDQi7K",
  "key14": "2YDrf1wnhnkXBswTEXZm99odoEqgtm4AY9F6CHCwiyemXUJBG6PTNKGwRBVy1ntGtMH3KQcQUozGA4Nc2GpmDvkL",
  "key15": "2beXCeJBJeLb2wCbUSfFbaRiUViu4VNzdqtFMCKFushpRWN9hwxyQUZREz7QcTXKPRvprbRUs8cb4eRqsHhDVJQz",
  "key16": "27BqyNdtAdxXwYFL3eKsK7eiz7pcXAdBrNjdJbJVpiMyUizcBKg2hW3tYYHPwvHppyerQXptFHv73oji1aoYAvS3",
  "key17": "2sNfpWYMUdgawErhc3i7ihyndc8rQJfLL1ubpcKNMNzyTufqBm3mr1gEteGUkzuYZaf4TQRoBewPdn3fjrUckwBy",
  "key18": "4JyWAZzyfjkqrjJbvDiRJPXGD8abZahK4xXdKbNqVZwJq2oQKxcxVAi23JrNeg8JP88WwWvpHZpQTWYkaaZ3Bnwy",
  "key19": "2yG9niauS1w6Rgq7vwvpoBeNYAuUa6Yk7yxmGvJpMMUVHgcgxYN2F6H58RWJ8TyTMvyxe362Se859Ek5bfjFNZnR",
  "key20": "4YzzKGddDpCPC3hg5CUNWjtn6NS8dJgszYSLsCE1JBtjp5Y3f3UirJaMHm4GsbPmexWshTx9foYu7SB5wwWiTCKF",
  "key21": "UkNqYwW2xWRw45Lov2GFqjwpUSdm111ovYKEUg7Dg39jfKxJ8FU95LRLPaBEzWajccX1kVX2wrUTwAtGAts3q5H",
  "key22": "2q9rVqFHKgWjdddM9Kbd7dhLVvKoHtFPenD4dWyYDpyLUNnqBVQ9wfW5my9dYwwRqVfpzDbbSd8yFr9fR1vZMrGi",
  "key23": "hskGyhEGhnpjfXDBjSpZhmG1PQQda8PSnEP79JWnT1wf4aWZx5z6UnrHzZNQJQJD3VN1vJsZ6NrJ2iUPrFggyfW",
  "key24": "5yTiAb9tictFM94CxXyCHNySXXRdzzHAYnaLYHW57RHALR8DtZFyqegxKTRxYA8PRKVTsgr4mFU5otcvSTDTFaWU",
  "key25": "2AwHoog8Eb6oGkuH1UN8m2nsES7pd75QhCeaSVgANkmAiHHrsdf6H6XPva2jXLAt1fHgi64vGuZgRn4xg9i2EEbJ",
  "key26": "5g2WbLzLJnmKvyQMvQmfamfYSbSbJKu2nZCMBdD798b1h7UqHMeeqjqgUjZJNfW8PY1ThKsKnFACPT9ZgzCpKGJZ",
  "key27": "3uyrWP7JzTvc9iDS3nwEcoSWy5Fyk3xbGhsNfKzbyssnDzjLWzc5h5mUR5h7aP8c1dL66Uf2F4u7q5vcm3vn9Xth",
  "key28": "rvGEcUoAs29Qnm9dvQDug8E3FvyJYayuyPcJsmhJ8Ek6j2ebFZi2fZR44NgDYjdxfPH5BFbFWV5Tz91wLjpWoYE",
  "key29": "4ZsYaBwnUTr7Cu1xyKp4QDz93pJfTC5RAw3e4jcQYrgFAb8xKRdQs5P6Th8RDo8NX3Xqe8dpcXpYdtTWAASDUoKS",
  "key30": "5c88qkuHEixWeRGAz2684hFZfwAecXBWHPwdbdKSSNuGKuUJvHhq2v7xozj2kSBs1CHwV7owLWVXGoz6iK58KHms",
  "key31": "5jJN9EymH9B4gYKjGRpLaQdpq2VCgYv8PYgrxqHQs4YmUjGB1A5bGv9cziADxiL2M972xFFrVCacrnRejqUXGgge",
  "key32": "3rJuVYQv5WCfm12S1pxcEvTDwcAc54V999NvSfFW9Wo4ep1chtWsduV1btsesCYwJsiu6M7NXmotE3XYZ91XDeD9",
  "key33": "3FKNtUohfBKD4ZdmNZgpWPH2bqLwA7eTdFYe4NXhoWUKnDANxeon5MobZDL4YSzFGGTEYEaGd7PDshfbzQk1crE2",
  "key34": "5X6EX6Jjfr7qTmya1SWiBi4GaC1otFJZQcJ2ieH9A4MQav2NJidtF8qeG3rRW8ZW7nmXLbguTjWA69HGyPCvLyuK",
  "key35": "5UsTETLEiHcYJ7BnyvtxfxXpAhDzdoYJpaooGUwVQ6bMk8UcNzRxnhC1FHN55Tehz1bfopVyvUXezMf8p2U4dJog",
  "key36": "2eA74BiqCBa6sodxEFxMuA3os1H9QqXdy9ceKfNpAEVjU3EhqM2B6oME2vhdwJmy9GPi1FJTta9gPF641nrchaRU",
  "key37": "3dVEYHyrVrZujNjNQUR9XJ3PMtPi4h3q3fTbanDgst8rVXJD8Pq4jpyBggj1XfTqHCC5SY5c3JqhtpXv55w2LBvb",
  "key38": "5zUokHxVHAeBzAT5urhaFGwPsqcGwXYMRPceEzyWcq5ZKepo8SmmJqUK2FxXWGzDfxa7qei3GN4WXKjBMveb18R5"
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
