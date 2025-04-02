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
    "kKaKdPhR8F9n3uerdB1okmCmQJsc5EC5qyxtfPH5GxssVzLZ4VzTFLoV2y9D7gRxa2fPXDMYtKfZczjvTpTKVAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yy6rq8yE8te8gptfVJtH3NSdaQnrU4xAZqx3JsWpnsPF5WEB9MU4hJHX59wvp47k66tLjDkjnfAuLY6uuwg2TAs",
  "key1": "4yAbxpcYuyPPtd1RhCENN3Tr6p9P3kCvwUsQm5MSTVSFieoacjSjh5weVAvKGU8YD7cRGQuw1kJS9Y8Wyp6qZRbp",
  "key2": "5Nw3o31bjBmuyffFjgi9qyHBpEDo5JioYXWGWBu4Uy7rbPn5knG7eh6mSaFQMMH1MJcgoanDBXhwitMcvL8mUCT2",
  "key3": "cUrVrbXVpahMRrmdZcKQDeZP8faAHs1cVchEx7XvYxGc4aJmfbN7pRkZzz4syDpwSG7pAn4MHPv5A15QnRj5qDK",
  "key4": "tfZqMt4V7qiNocXkcKtELwJUf6eQWnMc2dWLerWbkbBDFMpUCDpq65NFQmyXraMic3DbLjbeQZeeCPov4zRHCdf",
  "key5": "4U2M4pPw8rCDKWpAo5JQZMRinswNe9Tm3dfLD8tbSyLWLVUhMvKyWWgU3PGjvPcDcXWa7ZTeubF1mwv6As43Jit",
  "key6": "4Ff4dqqfwyJa6p3HScqPPcPwqjvoXnzSBeJhPJQGhB14at8DUCr99D2UmCYeYcaJBjoZMSR4M2CTomVMEh34BaiV",
  "key7": "hQBZ4dtEJ839NX15ATXjm8m1u7HvYrCxY8zL3kbHx2AHvnGKWKjipo4gHckhR6Tj2Ygr3RPk43fAfzZPgE72bwX",
  "key8": "4tAyLLreaoLsNqmHnR5aQsyVRYrsyRTRUHLFMHPdsjkm5jH9HWgFAv3iQG3CyPPrESAgu2b8P5Q3W93rcm52m86X",
  "key9": "2XGyqcQtiX1XGVXFGEN5XCGN5JUAucdJbMvznm4TNUVWBbjZhitqi5jKBjJTa1WPjC9vrpdvoR1NwrKBW1P1R2Wv",
  "key10": "2LDZK1hWWQnq8X7kKcN29FXSxSomhQjx9MBcaHnDXZitxeu6wiJ3r9J61zbzEKNTv2T4XDUbWkZLR8tjXUBt83w",
  "key11": "vWtVjGoBaLrWx8f6g1j4LsjS6askLW4EeJCiYfkfWyMvZEAYSBTPuPkoPoWaXx5wsiFjvCrBJRp2yhY7rhwJDqL",
  "key12": "4yw5zsfcE6yovgUGG4RXswueqXMQMebRMGDHXKJgRJ1o7iiJTfUYzuL4sFvG19BqmoqBbJzSU8TpUjBvCNE8P6PH",
  "key13": "4D8h95XEGJ4YLBvPW4ZomiGezHm2gYMPC2DAACEaELXxmWCNoVYJw3S4GpireSKaRKhKtLbPETUSnB7pX9Di8Txz",
  "key14": "BsbczrbsfaDGMx2hn7dzrwYGDToUugpEXLG1V8oiFhECmazzgQHPUZi2ZnuBHT2F97ruLfUDw2UzQpouanJZe7e",
  "key15": "2TefiZRZWYHR5PrS3Ndc69HJBajUmUZpxS7SG3Cn257Q2T4mLKxKFwMnAbvJhcViVnCx2692hUWXenWF57LxHziW",
  "key16": "4HPf9sDTaXwJJXn8M9LjXECJWLq9STArGWQsH2FSaEWA8uFnBRumDGXU3mrKQz5We6ssc4HHskwhX547WjNnmjXU",
  "key17": "269CkZcrWXB2eBQHiLXUFc7wXSzD1Uzq1DLBgjy6q947wSzwmJpRnQPda42JWuqwvbe1CutceLQjpGNFEMSr8XaW",
  "key18": "KkCYsQQSBRDBzijQXANY6RAebicnVFBHzU5iWPrEwKTKCsvBDEvL5h59pV5aK3VGedf5g2LPMbGGFtLTxUmYGJc",
  "key19": "4TXBi8CViVXFHE7do9PxWE9gVFo7bt6cGXrKjCXJqVuw9sevB6GjJ2fNdps3E8zXPwhjYaZV1V6R2YtW3c6B8bTd",
  "key20": "51Uo5RwXadkiygvZzsz7CaqGpY5D4ZFx6sA6ve6JRXEzJqcQpTWTLQMiifCdhv1Q3RyMSCPWQaCi1poF86WuapwN",
  "key21": "2bzsaCzDS6h8puajomfRkHBcn8Kz2Ud2uVD5b5AdkcRJ1aZFt46BCpRK4omwj6cce1QsKmvZBkXLNht42L29DRTK",
  "key22": "2VY8QcxHR1iXdTLZo43xLRPA43UvmaE3oEgLhhoFcfP4B65STYPYwZS3X1AQKagRZPGSQJkbbMHiMRPvQaYxuCBu",
  "key23": "sN5T8NCdHj7PMbG72fc3jFzCvfu4JbmsqTWWG8v1sFmC1umyRqZs93hpxNC6fejp6MTwiYfS3mcvP4FNjEtHFNR",
  "key24": "4CtYRyEuY3KdE4iqq9pJWKqGEvuqjR34gGmaR5yJ9nA6QekUKiFLTvo62hVSHxdcsMkVa6FX6FwhYxaCPFn19eb5",
  "key25": "2k7YEPzKguoUepHiq7BVsVNgddp1y71KLjBXVomTPz8xNLzJcYeGbwAj9ptsC5AJ8FcMnSQnWxFVgJuRTxzsMBs1",
  "key26": "2Xg8irTa4zGkirgDmEM5QLbF6SjkZwuWxV15tKf6e6v8Pu4Bq7itkBqRhL3U7WkPCeSX8M7fo4pexMdErjHKhSTZ",
  "key27": "M6xWS5VN8ypnjkcGZhD3g3rcL2cNFtGoopZwRjmHuyizUWbKHQxewitt6Ho8y5gVBoZQcni1Q2nThLbwE3HRDkg",
  "key28": "5b2qmonTu2VgzLGc3d5zdVBo8BzG1v92EB13YmDRUU6eCYjHavhA36QHmN4Ki2hrL8NB8XgNn7M7XFDcFXoJ1pUn",
  "key29": "3Bn1YGaR1JL7EvDLSiv6ypcnuPFnHV3L1MaPdKkPj2sMDGTBYw2NscnpzbgqJyKwJaZyCvwn6KczuBmNgDT92Xie",
  "key30": "4DeJic9fTy8ZPd2HNa7Z4cH29T1oTevH5MMVRxmji497CAer3sErADGmaJMfhvPKkbjZ4v5YkDAHxtPYTRCf7fsD",
  "key31": "5akDyQCgtNgfecPy4aoQs5UEfnMgeRsT5KM8Aq7U3TJristyM9oapmFcBMJnUqXRBB3dCcHdeq1HnjUd56crV4Pu"
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
