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
    "qHWHyfVS9ZBFUmD3DC983tXgnbrRU9FSrcjaJRJMC6Ys9eUvnuuiWarWq4ds7QU4DXsntMwwQkJCqZVn4mUZgac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StBaWzY7wjiPSyHq8F7bbWcdCdfgHxLj4eHWhmw4xbqM79p7tZJ7ZYzzwTdjgxUgaSvZfyx5oADBPCVR7488Rae",
  "key1": "3Yq2fMyUtM9RFK8k9Kr78543c3BEYsBU4SE6nX77x2Uy3NiBs8pCej4pUyPramskqMxPQa9qzwe2eBXHPmFGJ3Dq",
  "key2": "3zonWSoabQnvjnvXsHNWcRUDsMov1YkBh9A71khqGFyRoJuKUEdus5hPHpoV1ZquAz94akU8fn9c2q5BLbYnXndE",
  "key3": "3hCEbnT9KGHz7KNsfrz2HbXxiBp9FVf9fDYXT5UZxtd29Hc4BQFuHkecWyXpbCjcY6egwqZ6FMDHdiVkWFzv5nyB",
  "key4": "3iJxsHTa8UzbF433TBBiZtyrAw53GdNtUqiuJgVntwWNskAi4R5LwEG8VS1VkpCco5REt8c3LURv5od5vaQco2tE",
  "key5": "2nY7cDdg2EUKsQ15mtDKow3NtMmksk2RKHUTs6dbd7pKxksmTDZxRxbm8PidE92CYvpsLURyC4bATxVft3xgt1va",
  "key6": "36PZ11Qs27u9AzjvF3sk1EeRas7XPMPhm8avYeeSMNaK8uHPLx2Fm6mxhnt4NA4uCSwBSWkh5QxQKqgvuib3mhhq",
  "key7": "2krPmqtQpN95Mmfzhmar8oQEpsbs5ZnJLgd3tHrWZZDcSmjtXLYYf9mh4AmYVTkcJyqGbjoE6MgDuhNXGgNkekPo",
  "key8": "2n9eWCtEWEEf9sKg3GnEnNUYBb6JUGsKNP7cyrGfZZLikXQ8Qfxznhhe24zjy2Nk4GKTUbeB7eczcTZmHhYe4rKy",
  "key9": "4Q7ECd75FwQv1qo4gXDoU6JsLYaoKceJ4cPTGmeiaXmhsU2h1gCvPkBfb6S8qevBhQ3oAKc87qeRcWo1FckEB7ZE",
  "key10": "4fhQks9FD86qphyX98qaMKVv8P1Wy1RmQ9Ztca5d4NjjHaovsxh7ECmQoiWT1xU78PHZ2YMsAjdH6AgXiyDsSDHE",
  "key11": "xVrBRFv91dQwkmRjZHkWKdsFYSEoMxoBwNPmvXiXWPXSWYNxMmtDFJ3QWQgaj8pHcM2CA78j13n8Tx1Ueust5iR",
  "key12": "iPtnY5kUVFrsUuXdCmwgBqsP4Njhgmeq7HjTHztJXEyknML43uUCGzisbnffkoSLdY4wCEbURrfhex61jn6UvZZ",
  "key13": "2Df9TBjcGHScix2V6GYaJQHB5wVtbRLSQD9jRW2J9LbitY88NgttBFZVioTwcBbzaF86QHiDNsBF2Ak7U4htHWTg",
  "key14": "2zf9B1GCiT5zZ6ikD5oTQbd8X9VjbGM7Jks3fPjsbhCZHqFZcYapL3Fj7naUVD43nFNd7JgZqBwiT4xPudb29ax",
  "key15": "4hvS1aesGyG8pHuXoCmcbq7286XsQVWYf62N7CYMiouuDJMQyjiWWpsqcKaEghdMgydj6Aw6iTFAUzLDDc2Ph8WB",
  "key16": "2FiAXqFRvijh4w1HfUateW1TkgEA9G7xdvS5aJ1zGDhhBZpAuZvDuf5J2qiMwXcaj9B7sVBQK48Lz4W2AbLRpTYD",
  "key17": "3uL7QDKm1xnH9sUspXpypZXnCocUesgPA38dpraSse3R6PzVfCTtex2Uug8MC6pH8au9hZjibiHKYx7rkJ4QRYo7",
  "key18": "3fStrXjifNNreUxynugN1sVbZ39NF9bzmFggZzjyZnxB3mtnCHNhMjcGBJTsySQFreSV3AccyfX1RGEXaL1fLXXF",
  "key19": "61jj3S5qHkw1ZvLzbKbNZVXGYo59papzdk9z2PuAY5UPB3ygiEqgHS6rEUTTPgd4qmfgusdE6E8vmh4ZUfkvTauk",
  "key20": "363M2B7b6jATrZkpXojAip6BCippjLCcJ1Z7ECGjDYRQqmyFvYJhiMELrD1u2SobWugvgzoDrc8cgjo19FUqet8f",
  "key21": "24X6ujoAvQNd6btniLnULG4ogCc8hof2Pv9jz8URPUaE5AHZ5gSaXGV21XucQzknyKB2tUBrX7gJYeekvpzHoqDb",
  "key22": "eKqwBVZxat75D4agUeUXeAhUVJKaTYHpYSRus1Ee5cEbkumbjypsMePhYt7LsgQVMUF2pdGm5HZ9r8Na1Vw6znt",
  "key23": "6re29As1oJ7D56W5Kh78A3VMdECCAtLg4miuUBRRbXqtLdWQwhvjZmkmLNbeFL2hyugNEYMooQWBTSK7GNDptxt",
  "key24": "2SFhGjpvJYG2BzUou85odCFbXh3eKSJutjLWEeGhG76aYGhp2zJPZ5r48UoFEKMG1hR68jAt7zUytL7gNa1vsK7c"
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
