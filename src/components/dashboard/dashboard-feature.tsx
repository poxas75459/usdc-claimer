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
    "3fkgK5z84Uc4WHFxskEUYF7Re8ZNbrwWnUbgAChyXDCFQyDGJ3REmCwV95Ku8MmatTvM6zNA5fzkjaehCT2jKyR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31zA4NtntSZcrJ2C93ZwRZCKuY2WBuK2xPPStUZNWpGvh6K7W6yFcVK1xPCZX36Yqhji7dd6DubQfEbZY2fP7HAw",
  "key1": "3uGTowqqEUL5BZaALmDayKSfLgeC9VpmRy7NxAbF9E2keeRhV2ickVTHSrQHokgLdQeqRQXhc6A3fsNGW2pdSNEb",
  "key2": "41oLeVg9H9ekTwf2B8XqzJ3Uvw2x3jUdpsQu5fx6Do6mi5rbccRaAS195aEMBo7Gv9fcEBnHUngU3zgaEUME33n7",
  "key3": "41MPG1uyY3exLtr6iDDSCXAYE29pxRCAjTShuT9NGzFLtHVd2adFte6jqBmtyoahUbE6WFKpZWQj8U2SzCoidgUF",
  "key4": "4sDge8Sxip8T8CGLKuyh79f7sRUBbru2318bdwA1NxyaGMgQQKPB3g8DC8CQwR47BqqvxB81GdubNpRrwUjmf7Dt",
  "key5": "23a99nFDj8NbNwSJo7AMStQqA1UPvzdXcyE5oFX4nVFeTSGMJBJYNuwN6vZjxd5rQrmopbVRJSzJjvA1cpLS5qSW",
  "key6": "43x8CP9dR1PAXbuqijSSG79fcbJdZh5wmGSjoLXk5h79WP535VPHTojv71nnsv9gi1oCUjzqnwZrEYycW2PAWtgL",
  "key7": "58z8k1zNyBUqeCLp2vU9cv7bSSPsf6W79QeQ5jbn3txGb6xWwdS2VJYMynJBEGLt8GJyzKeNRFpJ2ecCoYgTFC6U",
  "key8": "3w5cZtdDHpitLtEyJnRnuLr3ooS4VrJKz1TeFs4g47xMQSsxhS17eJCiuXeSHF4p233sYXEcDLsiYjaKVbXjSeKs",
  "key9": "o5MRFDfndfxF6xPS1DFZaa3bka5abA4AqZXEBwuKsXibnR4KHEV9HHFjJxAT9vjWbcMWw7SFKQpVcKpioAWYV4b",
  "key10": "28JtFUUd1x1vbCAkf6ka4zt8iC5ZfA2K8WzjEHCddkuS4onwQ4QnqFzCbZvHmQxhPd8hPWz2jqoXLrAtE4oQRHZJ",
  "key11": "3esqPpT2Q15grXcX2dYti7WwkuA4pWSGsw9cv1iFiHNqJLcAoaNWSdzXHBYhd6acyVFrB25Rhb7fEVuzCjyqb3is",
  "key12": "1y5AyhvuXuvBXv1k7Nv2Z5muDFPZQLwwhKeXRccDvWyFewJUBcJg4MVvfAVC9Ye2Do5gbZHzTEarS8PmrahagrJ",
  "key13": "dLP3YUh1jvPZnd4p56VZaKuZA22HTJMjq3rb1Cz2bTK2Y9wfK11FkeyfArWxiVhPUPUosTQwLYm3D4j5GEh8vec",
  "key14": "67Vo7QBfD9HHwABUhbVBVGV8H8oPYNuY1U4MVCxcmworr6NyP66nW9Yb4HxGQKNtfeeHpVzxrc9idfbmJuG4owLh",
  "key15": "5DAGatFQH8ehDyBcJQauPkLHQaF6XfejdXqoN4sNHvoU8zyiV9t9ZAhejCyhhTprjrhtrDgv16q5AZVw56xkDWbH",
  "key16": "62pG56mdWkbienWhnwrL5xyza8LXMjugX54g1rjJt56i6J1LpH1HUv7eo8n2Paj1d1QYgwesmE4uVBFZvuyMJSdo",
  "key17": "4hpnc89C4ny5GqqR4kAaQ1EVwsDkZZ4KeSQkdYHfqgfXCWagnhYzSX1D2452gwNuQfDVXBzMUeuuCfJW5yLDLMRg",
  "key18": "2tnM7NHm1ESwofaYPKc5KXPPYB8iVBwopkG9o7UeyRZJGEGxAm1zeyrh9vVHthgnHKByNtr5HfDxCG6V2eERNUtG",
  "key19": "4rd7TDxPbfj8GgaTRmmAzmtmTAyfb1hSbSM6vL5zE3i8uAC35CnQJbbf8WnUMyZP9zXKmJpzYW7CEr9hCbjrZa6r",
  "key20": "4gGzDbrrWM2kYDxWYK5Zhd6an5jUseZpjjjLDoHHRXCChRBW2MYF3qig5nZW92vVq2szRMCoWq42Cq1tUt7LmcPQ",
  "key21": "29pxLGQsBFPxczAn2LXzD76pNzsHgkKuUZhH3vgp1cLry4mrnyyBTXRVszDstWafBDE6WkfUVZCwWHmiJ2HTXjeg",
  "key22": "36bLbuHrXpDnakENh4nQj8ryqZS3EVegNkUUtCaNqtYx1YrBtfkBhrDh54MCa8aoRUmBfTvCwZYKu8HyAFwqK5by",
  "key23": "4awrU2NqerYYt191XDGYCVKGTPwmNp3Mpr7FdA1P1smjSt3sZzgc6FkYmYCNLjz3d7YE5ZmVL9YKjGiCiJC5Evtu",
  "key24": "5hG81aGq4KGRzgXixRYjsuAjw2vxhsbyr9yzwqN12RXJ9cm1NSJ1FfCAVUgJhK8VLXBbxuBQVZN1JnAe6XHxtHKD",
  "key25": "3a5XD4bKEdS7UM9UbpooLMdb5rYNLTsidDpJbcSmDz48WZVmeJbH24fSwWjqVRGh13KWZ77GV4wy5MYJ1ABTHGvm",
  "key26": "p3qYxJYgfbFaPjsKkhy9eGngzD3AdkikGjSg8i7vKvmG1zWEmG6HwDzSHZ7bR3f1ujZDfTDgqM3wo4XrtSFENCu",
  "key27": "rJEkuAq8qN94U5rn6Qzu7sgZ6T9jNLpAwhaE9h6YxnpvGN1uLkwHku8D1GnQuWDZAByKtTposrX1ooaXHpNbwEr",
  "key28": "5xBSKnzedRGpnGjBk1XgyRdwUvJ96ouR62LEPCJWbJHSLq8TXLH3tKbvLKdXgnqQ7ZjZ9yZ13wQB5Ur36E1Dj7io",
  "key29": "4gY5js4Za6jz1YZXuV9nTcTPxvWTfQZDiE6tEMuVwpEgRTy5HaCxZ5oQAKAxeLDqtKdhH7CWMZ1nrG4htnZ9Wiw6",
  "key30": "37oDzSRU34mgBgBrhVWDyb2QAgaTChcdshMxsFWWSHw6QA54rmxqrXMaQxsvq6ScdNZbbeWG1Bbcq53UeTjXDmLN",
  "key31": "2TN8RVmypmHFWjQnRUbr4L1joWFVtkLJ45Z8ysgJWyKNWqGLz7oAUKrToutkpMZyL4EEmZTUCHhXAKpf39AMz6wY",
  "key32": "396euGXGsrbyNrPxX7rWnwrJBBWATVA1s4DBkn3E4jZ6hj7RJ6SerEfxdEwPCyMFpXveyX2dgVGEjCnXTNDt7qfQ",
  "key33": "2hkDNaW95TzRrHirUkioTHSCaBWEBbPGmkgshe5ea7MUNMm2uhLKJsG63HRrZwKoNRW2cgCrcCJQhqqueNAdx99u",
  "key34": "2em4Tim937trEhzUpMENSDRwkkbpAvkMeAcMu859E8kpFzRc3KHtmDwqJ2yriRVyrEymMknz8wATQwvag4vqWb2d",
  "key35": "4spbshmdMjYdn4uyMBqWVmBGUMC4g8ykHgrz95yBvbNtrzLWDvsnjUycywn1ynbkjnKGaQp9JiBsTWPVfsCRuRAF"
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
