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
    "2o8Hii28N2LYJahaD9K4BMrEaDiJJ9Tr8omyn2E9iAtjst9GQEuzzYY8rvLC5BVP17XfnZPCbGzjsS3M1gtzWkQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56q7VGVVyZs2MEwtQcbuHn8EJALwhQFdngcx1taveLh86nkDh2n8h5PThJxtLYJPFGwPBW4civJB7ZKpShBZVjmW",
  "key1": "3wp1voGAuEHcE6txLZvuSu4V7iE4RKEvzGUo7ym5g8afKQ7brtyKqqMLe4czZ6JZZ6pA1UpeMPipoFpwSR75f5BX",
  "key2": "5vAjmVU22czetdgNmS5vrmaWukx22kLvirDCignBB3NSuWVagMdsQFj6XnGJcqeyHVQ6EQRLQx2DVw26JTrpZ46s",
  "key3": "38jrbTrGCGACLqFYBhmLQHs5Jgyn55GT4f67f5SiZsT1mRXNZKWNYXJYC13UAJP6BGvcZKU38xxLk7DeMDToLhxR",
  "key4": "4VTLdwUZLvvLkvxoCkZ6fDamGfcin3or9Eww9R6KHKRcyPJ5r8HvxRzc3S3bkUQJMMBTquyTpwRwo1Vw26Et3Sq3",
  "key5": "2Rt5uoM2sFjrKkLQeMS6HcoQZPugLhKowhBdD2HxvG9S1B6n1HxLVPaNcc7Ex54dNTTzqXp5jd29NjRr4uajn6by",
  "key6": "29TyEt9spSAi3xTFvQo4K96cVt5wVVRRXchUmZusewb4sDxzxpS7XpXy7cssKiVe7YCPHKYktBfZVBuLgUetyTCB",
  "key7": "4Shi3HEAaPfrVksdwic843Ce199mPrYtmRbTiemuyUzdv8QGLvMWZB7Ye5C8h2Dmn8h2AEcv6g6T9SqjdTtdPPMs",
  "key8": "8QvQ8mP8jtyrkJKbvRMB3RgViW4njk8cqzkymV7UFMiK2gJH7coVxucaKUrxwndgfKndv5mXgvfAScoLPj9Jyad",
  "key9": "4XB5p4jnHX3WCGdMXs3P2xjM1GXJdGYvatUJAuYh7yitZ8VQyyhnCWjN7uM8Bf6bX9RGFuUpZGPEcAaD1BAYYHx4",
  "key10": "5krz4PG8ycMjg2PjnG694QbQaxvwrWYMmMRXwhrNJnsAfmteXDNwG1DBGzRnD6sYHGXUgnXRmQDa69uv6mnp1its",
  "key11": "3yggwBAYrSQYaoWfRUTckeQA2m9Pc6SS9Sdyeb5Q3fwiYCqZHq2fvQoUZE8yFq2UfWaf4gmyhuQqibQG78v3axsJ",
  "key12": "5iZPc2KgHQQKkGMz5CEyzxsdzRaLBn2Fk4FFN4Q61ivcMifQy14f71CsJBUsoYdszVqnwFkjMDBQU19QczsQVMD6",
  "key13": "4fdqeYdX7tLXjLymY3c3uyMoxLtU3KP9ZT4suUDhCFj4jXSqj1MAqR7zm8iFdxTuCeL5iH6tYQU5DTUNjp8pQNsz",
  "key14": "2EDSQFC4zrwoAbWw8BaBp1EnAPAyZJSpr8KwMEHRQ3VrYWyVVkQw27f2SwhBiMg9Q1fBhQTQi8mh5UoygTSLLPWG",
  "key15": "36WHJ2yke2SPkiJ6nK84HkiZFazZWkRPQtUqgUuXMbuzAg1w4xSmc3oRjfEJ37Bvdqs44n6V34MiPRuQA3krDp7H",
  "key16": "2s5KWmLpeKzcQcDgSb7QkW3HopxJJ7EhJCFoRtSeA2gPxD4sJfa4WyDKe4TFN23dqu9H53c1n2TJ8SCGLZX2M8ay",
  "key17": "5rKJowdYaxwTmeeSr1o8yxuNWWsdWoNYjuNScJ7u3C15XA89Vgimjt2NUNz471oAuQkQuTmuBRnefD5gcXsMQ4rd",
  "key18": "2vmTaiiVmRW8PA2cteVqS93JkvH3Fx9HmiUtWBXP9CPZyenvbQeKH1zrJ7HKD7pAvhvM56Nvgp3BZFLYuu8cSVof",
  "key19": "42NGKtihUoK2xF3QJKxRY5sbaQJtLofPJoLBHvJLkXbVVCkmtM76SSU3FvoP4RPAgPTMMUtn8Kq1zkZ4JAWNQf6b",
  "key20": "573hypGmCgueYyYJdiqjtuzwo5t9Dua3SLULKjH6FrKMvU8dEuiwTrhwR2Xwy3LLiZDLfwS53mBQgKydWHQUPUfE",
  "key21": "EeAvrxTkg1zf4619Nhi8Ew19MrAt47dX4R9L7BynU41hAFAonBnUpLsjCeXCQcfKT18dLtKzwVtXLUzNPoCD4dL",
  "key22": "3FjxkbFRURvS293nfjGhAkkgpR52ecDp9zxauVJm7AxVZMtrfMRsZTnbYASJuc8BzRrf9yXMVQWYN7gAKMqC4DaL",
  "key23": "3THnVccHGi5wc9BJ9abg4uWzVK76FQoJ6LPNTYx8GC2LhHbtxYZW235SAubFdQcHoGqak5wk5hgcB7Mu8PndJcuP",
  "key24": "2u1tLHPHMzPDLcC8WZvuxMTjUBsXJrWs7Gu4jKEAasowfRa4jVpZ22u8FW3otbdYkPDkyPA2Xcxz6DbvkVqDtVLB",
  "key25": "ob3qzQqPJsmPyuaf9eCGAs2ZDC3ThXo9qZsaBwMVxKL9r2aGCHB8aWxwzLRfGokUebM4QYXtnMD9V8sVGzVBfxh",
  "key26": "5gbYuMjS8bpGoMSqWbFGSWRvke4TKxPrM17JSMdVRQH6MG9jiMAJLkhgbUSJ8sg9tKdEc7uA53iGpk9ygr7sQL5Q",
  "key27": "BGD1cMpywn8Pvaye3jVt7pRzHQjjw1qHHWofVteBHt1ntcixZihRSwSpfj5m8fh8RYydxyjNJaT6b41WKjrVr3w",
  "key28": "3tpm9sQsJbqzc2QydLsjZW3C72fYkGaEfdrFneJSiJNNxWFAYkwRCJ67Vf2mp5hhmwgHVnzHxbwL3BBXHFMSQ75Z",
  "key29": "iiG5oqrXf7Na2PhiB6T1jBYPPgyUdJFwei2dNBYZzzNzGe7Jax1KK5cWsM4x3hd7N1t5gwqsBbJ34YXCBXo48Pu",
  "key30": "5xwtgRkh7vKvwFGZ7Daz1maRH5vPzVWrwqfDkDBEfzsRMB6rUPbnbDKYiBMnx4zANKjik5b9c8KtK68scz8c4FFR",
  "key31": "25B9FgVAzWQD2VNc3e968P9e1oHAba8pbQRiKoDHnq1611Skg6BMasZRCjrAbFdtrcWDYuVmHSmoL51NgkdUkFxi",
  "key32": "2VgAWKqBKRtrMvHND2k5TmZzh7iDZ2gu2voSYRBnVy55zzfVnccPfmgadapBy6bn6GkcpgBKKpcPgPc1wyMGkTsL",
  "key33": "5o5VbHQjwtMSaYAMRoRT1UHewZQtk541r3x4QjjkSXPrRYbpYiTN4CceemPfAjye27nJZLXkft3n8CRjX9U2y1cm",
  "key34": "4yuqdZRNTrTUeftAEJL4YzdXWzFziqxL8i6LCd1xDBR9b5e1rMSCaGkXrznmYRVVx3LAnnwjzK6khy4eVcugcdoa",
  "key35": "4oTq9x8A2qqEoUr1UZt7CJytnTgb1eEoM3Bi9aarAed89ongPmAYkf4c6x4i7s8bXTCq6tANTdGk5MDc9P3zH431",
  "key36": "tyeRinjRrDQmc1jTzhzkxPXDmnNLrmkXxKWZVBtAQFojqgeqh7xJECycNiZeHKo2dckBT9KuH13F7vDVhdTHZwA",
  "key37": "RsiWYGwJq8rJZ8QVAiKChr5dKBKkK9394Cp2ET4GdZv3vYf2jAN4hDjL3qiqAuqGeZ87pWhjAerx3JCUrQBZPMw",
  "key38": "Jd17gRozfVbHBUPqCWv3Ag1kS6xGU2iCYVTrD5YVChqajSmkWkwtFCDrWLLBhAYyPrQsQC1cDF9yMysjbwAJRwT",
  "key39": "5E23EvgVSy9UGnCqqXNgoGmay8UydiUDgzBwuaNvtyNVGaeavrbmsKzzN8KT4ascimuvUr1k5RzELfHAGKFeY6Bo",
  "key40": "3uyj7ispp5zGmaoWzcNXHDobXXEFz4d8wYSbZctue4ebqqqCoZv2nSCctnURzbKedT7x37HEpWr7RbgRWk7UdXFH",
  "key41": "2z7s7bDX4C7JWk8gLKyKkWo93nhuPkuFmezXTnA8kMZ2ojrHcPzp4UMajXdXteBaQg5KVkTHFvvxsBY7yTz55RUX",
  "key42": "3Z7YWgT9izdGSUgVKDN1CEWhCqYAJfaoxxePZXiv9vffoQLP8VmNxtLbKoam4S7hfHsucspNY7YEM2WZuu5eSiss",
  "key43": "2uNA5WbuoxQDvxhvYVQRS37MeoFkVLVEHAeQeD1cJwV6siDE7jhY6ugu8KBje2PvqUdRjiXEUkF9kbHwCKct5wr2",
  "key44": "3JRcnukS7SF5PnDMM5sixPDjJDyMwaTFEAxUeJQEzecpFS6G52iVbuCvgrMZsQcjyj6vmsuabkkdEwYbnp7rja3B",
  "key45": "5uF4GEbN1toXZCJTvcxhFfFFApLsxXjrD2DEuGeiMMdioHoeKNzbjgWdMLwEKA44rJHWLf9u2Xfykh2ETp8L7irs",
  "key46": "2A3F5nVG7wMGcJNWj7WuYDs4AZ84aBa4tsiwEJAru6MKELrZLbz6naREKJkzcT5fNR4xg96KfynCNG8XUnXo5JHh",
  "key47": "u8fUnBo76UnguxuJLBUpYr8WCwgTvdGenYm1k6zHFYJSxQHN7uh1jpXXVT4hto3FjTahdpTsr6fmf9JTR3ZTBBV"
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
