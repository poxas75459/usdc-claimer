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
    "CKwsjz2jNug5WMBHq4DafeuCfkezoWKeHvmdj2vDPWKvQ6xXj5poxrBnFTeUMr9rHM9Hxtr5T37gQ7ubGZkUBH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W42GJe5ZnAT4PLzgWapbvXYGVfHjZmSjzEMw9wexKmKd7JBG6JJ1eyympjAsjau47msiJHWQCgx3d9vrG73qPCa",
  "key1": "5j5wrkGnCdYbVNM6UGkCWXANiDHGBEg59Kq98PLyx9wgUf4RqPRxop3Z9N9QgP4s8iNtkbeN7Emh48b2Z5LJpy3d",
  "key2": "3CACuN5pNZY5W9pmh3py8pTWMHGDfVibmFbcAMoRt9eWvrLUF6jGUbcFmcCJ6Sni3CkdfN1MysE4YAFtrfGGCWj",
  "key3": "4LmJvwgRBLpAZujD35ou2QLABFQHjMoPuDNqsKtRov6Du5zRjiEddCxW2TgzTcfgD8pNANBSFG9FJgtJCBFjAwSz",
  "key4": "tNDVU1CcwBajnYzuD1mSkJ3rBU6J7pFgcxLJppMC4ucahuSCois5b1uE3wfDAuzSZPkAiBKFCjBPYCdgZxmj5ei",
  "key5": "58sYHNdvMAcR4q37RpSPjgbw9BdvyP6RdFNKnFAv4GywxCVhZW2eH5j6g3i988aw6STupvm5mUqPLUHEapLvMDQv",
  "key6": "4WwJ42Gir4Et9mm5yuR7cRZVvMxgLu6S2Hju9aDyBTrm2RqB33nKnZbBc66z6byixHrkdj95diikVxtMA8ju3mwS",
  "key7": "679QNLYqwWAydCgA36NkMrE9qqYrLyzuEympZk2bVzfUwyrW9PeGL7V7Ut9KSCZ921vcj2AAdLaW2bGJLZv6Snvj",
  "key8": "2w63yqPna2oENUzw3GpiCttHKWD8PfiZcLSsomRtQoyEiQVKWX6z6xkzP5i2wn7BpxYHXi6wch3Td5jVSxTiTYhq",
  "key9": "FRr8sKEzLgzXkwXfeqpMdxewuvjnrtbjYmhZGxZXYJYcGAYn3hceNfkG5fZKZJJYMX56HE1XwUEc8wFXgWvqsMs",
  "key10": "RAURVmtjv5BzjM8sGdogKZJfvgbwvDckFfjjUkmTxjxRsF9pAeKdmeAJaDzYeacy6NtYX3UqfQYFiKLSuf6WkM4",
  "key11": "2mkrZd2XkwpK7QEpKdB3jmRm6Wh3vEKJqoMPXsBTqHLE1nLFue3twj9zj3qjGDVWbWtCWSWPS4GYerNzQRPQKzpz",
  "key12": "dRgzVfRx9hMWNP4gcwcQpcA2JtR3ZPQXTGTEtwJxUVFFnNTNM7RupzjnW5e8Lki6hDfjChRjXNsjTeyjGwHWrc8",
  "key13": "q1wZH3jK4wfFLBifH28ZDo6HREFrWqgzstTXonkyPc9KJ93FgtPtSESakwk4fLm9eg2spoN6NK7ZxdE7ndqC1Xq",
  "key14": "29WYSWGmyudKxHnN2Tsusp6VGQtd8a1D3TKKhbXKZvceNCn5zvp4bAeduz5sEfYSWTvzpVSsyzfRt5SpFQQu2G9R",
  "key15": "46mGLqcrUJwU58o3BVa2ELosrm1gV4V5tbA3FH6WnSaC64LCTvjAJ3c94UunPqEXKbSoQTM8YzubFGaNfbmRnfXL",
  "key16": "vUXKYYkxPzkngwS8okZKnK8QsZ18DPu6LFom8JdkPhXE1zaqZ7RRkByHVFyr3MnEnNH23qhmA3NaEE8P2GvRmHZ",
  "key17": "57kzVNMcxEShtMqn92CKinRG6UWe1Hq3dpQQhz4oDgyPLuJ2ZvbYka6DHQSSUQBxCvzQr3JhxKizE8bJAQwKX97k",
  "key18": "Vf1YMsubBTaneJiQtfRmDLWqdVaUvBtMYzbhha6uXXXnEp9go3zH9DbP8haMocKrFCxsuhKsPDN9PiAyZsaZyg6",
  "key19": "4tDF714LvA3DckDiGQGxAPHS5jevcxBAvVaxjkF9YY7tiGvcvk9TVBNNQE4ArMsZ3HmBGiMLfFVRqX33y4pMKEwo",
  "key20": "61cm2rJJWWBv9gWWo3eAz2Rs798GTkGCQdTtTKjL1PLaS8Y3Lwq6sgmYivyfeqRVGid2aoqcWNHDFNqEAZQAGbR9",
  "key21": "3FDZmAJnknqWhiVL24ExhVq5fSfA11NPEKGKj3MFn9XVnaCoWzzcBjyKhwE8CokTcz89ejFgrkJKEbAntVmy98mP",
  "key22": "3zPs7AY7ErQBiyt42FmQCUtYND8Loigd35B5cyJJj3w8s5iYF1LmeMZE9zRaKUoqYpXYmcifo9FNusfUUGt4t8pv",
  "key23": "5oTbeTczJypL18UFnytsM8HL8GceygxjwpSjMMHyPxuZxkC2hnWDuqbodBU5bfJKUUGoKC3WpaPrykkpVd83HpM6",
  "key24": "567Fs5SJaaUtX8Cy8S2smGmC2rea4D2S28wnBUoG3iJfLmC8mn8u8Kjt6aXsKwzDRhVqWH8PhKRnZtgSqJJ7zAHH",
  "key25": "JUCtBxKNWtd8fpXrcxr8Ea3uAaix4Xi3GQXjJsitF8cqKmrqytxWLGUXcpWTbucPKzd8q7tv2rA8NZ53NuZnh1p",
  "key26": "39GnFuoiDDJFHfCvkhiYLzSbnEZyVJ8dr2jdr6zSGaujL2onJBVuhCjJwBQ5gqCXn5eddHpBzZ3nbRFupLXbW4t5",
  "key27": "5f6NySzyEBjXrZsr1nGfX4cHCiciUsbg2awGbrgfteEiL2tzh4K8tAkuaJnegdZRFkqnwGhiCEeWKrC8NwJUMvpa",
  "key28": "3wVZJn7AdJAk7Eg5pPsFZCLZNxvHKkywxu88tpR9A1ku11AS58nCjanmteo8ZrFP1Ua4QGGwgPZY6q2m4HT9c4sz",
  "key29": "2CiJoNjtSQWw36Fnz199mFBcqy35n9xmJvzNDu8F4VATw5BsXfCFsWKXQvbrGrxEa3J8EjcauBK7CgtyU5giFmBk",
  "key30": "5KqcXLfBWbGwG7sHGKb5g4C3ZbLBQV4XwJJMe4B8xtrDFASwd8UpQoCQFKabRX5AjQZFfHGE25HhidUBRjwzgcU4"
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
