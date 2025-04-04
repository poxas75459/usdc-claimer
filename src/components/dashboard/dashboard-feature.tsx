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
    "5R6bSuz6hkvKfEtzFE72GJxtzfw9nCCXxpHke13JvkHKNyFk4JqxumaiQa6h2YV9oCdqfXTR7dvUg6K5U2EyE2Kc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48JtXV4HseJsL78Gt3gDCb5XmNYjzqcjaiquLuD93C6rHn5kt3Tbp6jaPTyyiiAeQ9gjwjXpbUk9KwDuB5WJrC2c",
  "key1": "4w5Yo3SAPwoRx6YwnWZLANGoA8CAmmPBqAekwtjVnh12Lr7N2WknpcA5odMQd4iMUv6f8dqiDfCWJmYouBtETKD3",
  "key2": "3jB1eE3MC3uikrbKqjU4HdEY3So9Ky4WXPLj61qCX9NJA4QzBhRS3QVNh4S2MbQ8Ud87mXhzngGn2vwuJfTPUKgx",
  "key3": "R2QJDng9nRqSby2xVBPvvuo4MzY2iStjX8bqUuubxhmEJopn8DyGZmpiefKkJptXccjarzTztmEbf74YhJJFWTK",
  "key4": "3ov9rFXMKAGJJznuZvAdoHpNLzLtyejYcAJxNzHQjJ6i711AAwKtxRgx4aakXSpTCvs7i993hxqXeyXhqzx8xPZE",
  "key5": "3y1scHEAXR7Y5MhnU4WCbGoR3YRwwbVEe1zr4LRqrppvp6sEcgiqMdSRji58Lt6BDC2fRh2Eu9hzAg7mhKxFDtQT",
  "key6": "5ogCC1ArVa1KjbTN11jcV8wBopqrhR93R58W1YeUp1bS57Aq6rp4G8dpdUkBKzen5bTXew3EhwrZthmrgGqUu6Mq",
  "key7": "2hzmorfRDPUwf5Eh2LFm6etBGZJDT5wN2UKCg6nEKebbjB7u5Co8iwbcnf1cYPqKLHqo4b41k2daw7XH9Gh846cN",
  "key8": "2eQXedNf2vqvm4gXvKZ67MNeAqoAMBSTeD1m5ePh2ndBm6sSz8YEa9qjKKStWRcdDRx9yq7ZvhFkKGGjiL1MTyDd",
  "key9": "S7pFYLSE7ts6Pq77ToVzUXzfybqNnDoYjBL1yigS8aJwgA9xhmkSkLqa7XGB35SrJ9zzNWqidxoQSnk4XypUCBV",
  "key10": "4AjYcMCxkAHtqUx3Fg74upa36T8CXQBeojuc6CnDTsPeN9V1oJhDqGZyCiBP8qdgKb6vgRTJK7HC45BLsBzoHwaa",
  "key11": "6BAZFYob4s5hYULREYvJ273L6xXb3aKRuv9XH5bATqqyetJPzeuFXGQB4FPJMEhf4ZRaYkXtMNbaAnSkzmzqMU6",
  "key12": "49LRQuRPs51Jbrj9jLNhmXR6tkQVnVzE2Bq3wciiPPrusENf7gMDp89NzvQztBA5xdeAQQ8VQKZeW9C6QLjkna6Q",
  "key13": "2wKY7b2acP7NHYQvbYLk38MAyNBuJeMnGK6CygTmvQjtfrtnkYXAqnAE8NA4QiczApAcViFn3ZZsK8cohJVRL9rX",
  "key14": "35kgZFWXipGhhehWyk4UB3FgEgRMHZPXz56GJtTyCmwGzs8xwg9SyDBVpVY1Th3e725nwY5mFKVdxqoGtjnpDQSv",
  "key15": "2zjd9nDAfTmR7bKwGGU2vKKjwRwGmHmzwrdFgR9LRRzauZPYdUAFY9U2mpseudgGwj4resE6Juz3uSRsaSveukfu",
  "key16": "8fzS1rPmCy2ju545JJVxoNj6ThRQB72vj4xhv1v2CCBf6R4AMuowow3iBmUqArwPJuu5Y2Aa9b6iKYThXpB6NuG",
  "key17": "5YiVLQ2hfw8mVHMRsgsS2nE9fNgke6WzL81hxpWN2sCKfVHAw5M3LhtxZRXxxBLFSeQ63aAM3SkbzzFou1FtLBJd",
  "key18": "3rcngee9VwCXRAx7L5qQfJMHSmN6Jwxbis6iqvCdLBDSAQkbkEWebNrf48LV7DcqeA4csEebsZ1Lf3ZTexd22CrB",
  "key19": "5JGmfL4FgHfsxWTWE3ui98iRuXNTP6JbeQfqf1oSSRVAuWyvH8m78AEuD3iVqtAjpfTYtEYy7qm5QRXzRrEGdKAy",
  "key20": "2ktCUCGK46Zo24JYwdb3qmRXFo1ai35TDyNVpJukqxcNoTZm9rtGFQtpF6q4urmF5yXTwJP2CPvK2RURxvMwkBRZ",
  "key21": "2v4W7GEFXZmcmGCts24sNFtn8az3Dsu8NQHfLGEL4PgnYLnCprHJFKw7L7HhYWJ6i123W8eyhTWSRBJTDwwFgkBe",
  "key22": "3kA4o1UWc8CuqEYNcPR8RjXZcHtAQF1jsFpa6HCEr3ogCTZkspgjQwdmCrAjvJkHgNDngSCgyoTtAAkGh3jAzUbp",
  "key23": "2enXG1SbgmAcKRmQ8BbyRceobP2UNgFjpDQ1M6GA84J3yaNex22xLisYSBq9JwEmDHWsBiFcqYYqTEUu7MrCVJnf",
  "key24": "5dxM1L1zxqYziW4P5atY5JFyWtdPM1xVZqV68EWGrDdvDN3gvTGuy4uSyeHZ5fDvroW5UVEPwobEhwR7hY1dTTJk",
  "key25": "4MPsEuaJcFDEbjFphAEEyP2yQK6BRt8Au18kZg2jPDwwKSdvuYm9cap57wvXJjDYVR4HADGHprqGxfp3yaM7i9YC",
  "key26": "VyopE5skjGSQ719GnWaukuVeW4CXTvcSUDvGDUHgFo4tGc2rZDth7j7EgN77aXKKkFQ7yZfPMHV4ADc4iDx6USm",
  "key27": "3ZCuvGcGQLEXGEevQEEw9Tuw1JQvja4NHv4WFsFGxK1tDkPYCkXJ4d52HQnysKoeT3E445QdbvJJh9w4T9V8ucLu",
  "key28": "4ZKx3JKiCd49MUMQgnCJ5vp3YGBByHoQXU6rS6vjXSJ3WAbAJXMMNanARTcz2F3NmT3ApmL72VNUMSiE4MAHwtwW",
  "key29": "2RpARTbmMWi3fVYo6z4ZCYYPuonZS6juWQpYQ3cc2nVSKZr7u1VHMvwd5bXVozyBFJyPZnRhrWzFCXfFjQNA6LXm",
  "key30": "5QdmhdCDYGJFeq7rbopKmVtT2QyrA614mku9YAqXjj15AEph3nhwitePftLQToYMZb8pQFYjkbyVrRdqXYEPTsen"
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
