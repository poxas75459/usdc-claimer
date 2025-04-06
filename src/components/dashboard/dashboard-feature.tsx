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
    "55nLGd8f33sqKrZK8wEs3oKwR92pVsSyokFqpzVzHNkqQhFwXwfKFKDMUrvvg4skh4qFuiQzrSpNyeuEeUx5h4Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jSCWbqdXFjzF3UC1e8Rst41d1dY2KspMaqgHCpEPHe1Xurfw27TM8crsV9Wt3rDEKg6xJZSSCGPghDuhoyRx5ee",
  "key1": "37jHkEcyFXrtpbkjjVqXiuppMCry3HeRUk6TeTdf2YPeGrAU75AKTLrneo299aE2odLDfSfhrjXs5P72fL2LddR8",
  "key2": "2LJzuSiBn6yxMTc8MbVsJKk5nFpnv3H4tFc7VvUHLNZoGLDa5qL22GfYBQ9fMGUm6FzqVdHGwg3myhH25sQTLMvF",
  "key3": "4NQDhyFsrajB5aomeiBkNjzuDMr1DWv3ZNENLU81EHFyvHQHDpAvTRKnSQwKG4sNwhYkcotf6aSbjPfLpJtkxmNq",
  "key4": "36G2ZFwa7ZhzNSj3QGCY5gZEbQ2o6ALDB4328pUc6XZdER4d5QFKc6VHEp2onPLLNnREvE8AQPaYnWc36s9nMwHE",
  "key5": "3KQMze2ED2kj9FnsbQWpP17N3N9GfY1QzU5bX7fRoTejrXZSaAQ2zmw3S9U9RAg379ciR3asBYeZEC4mbdig1vnP",
  "key6": "JamXiyNW3TugNTTiVDGL3jR4qv6h9jKVasE1Qgsh8D9TA5msMRhb33NQ5hQbGWQi5b3GgiTC3QYx7RUQuSapdFc",
  "key7": "53Ak2D61HGTboZAsGwxwsNsm4hiCB7caZfU8hbZ8qmnqNkpqB651mByi3ce5K3a7Gsue9Q6W5dAnZFkqPgAvo5nd",
  "key8": "2XqqafyCjZHaq8ZXi4ZP5756CY3bhVwM5uVPxvZpqvREr8yMLfxNvhzRD5YAkTnoeSE6VczRs9mbkh9U4u318vte",
  "key9": "4C9ek47NSDuFpXUJ16NUoZ5hWWQvvrhg8ioGxFVjJ3LWn1UDENUkcVtZZyYkczevUE2xNcZkZ2VoG8mCnXBzLmrM",
  "key10": "4RYZcgfeTAvXAqpPK2pimNX67Gm6NAzAW4mBVdwH573Jsd5e4hu5WGqjRD7ehWkUFF552tXVgKacojeDfMdcRsAk",
  "key11": "5XZjmFYhHcYbUgbh1tBQAPeS8sG7tmEVCScPwwzym8PT51ra11iUC4JX7jLxaWH2oYFouWhyuA9H9aNcn8LejYpD",
  "key12": "2EtmrLPokG2uUYvBrMt2aogfcLgFK4EWAoGZvyd87rGHtQbuZgiWdtyxnh83BMd2WLbB8nufnB1EZsG3D2DM9jdo",
  "key13": "2f7mYTPGDkaBY49Vuxpwc7cgi7TW7nKAa8Jp2HZgWaUiAoJDzsEB8suaUnpXaw5ySNwR3zv1o5r4nX78mUbKrwah",
  "key14": "kMqsuhueRT65bwMvupHr3VXWX4eoZ1CD8og3MgtRX1DqFMvKtLMAi4oT2pcFMN1EyUuLdBy31dFpraey26kf37Z",
  "key15": "Dad5aRiGJqReCQwKK9acT8gkEb6GDAfKV6jx73zuSDfVCPX3C27S3rgKZGfyvLe5WBpwGBAkgTJEMiMFAcai6yd",
  "key16": "RcW4eG8Hefau37mmN5XgkiV65wD7zKN9AGGzF5Eec4tU19DsT6iNcePX958qG8nSHEXp1JDeFMX3djJMQKKKrnc",
  "key17": "M1ubHaThc17hyPkH5Qs6piRebraAQCb7MUtzRrh3CTuRVgiVGhsCo5kUrBLRM7QDBarRh15BdrdAQK7T8ueywi1",
  "key18": "2cYsPEEPDANqrSqU1Z7mCSUr6gATCz8gmQssv7nSe34ebG82gdSQYZkpMQ1UoYPL7H394iVQv6cBSL1SPvo7w9ze",
  "key19": "49ZCs5zQBwBNyojMBBygTjnXuDhjnhjPaLpzEYZ5t6xGLtYPPq3SopH1yGk9bUFuPJCmw2LieG2Nuhu9L4vC5ciT",
  "key20": "4y2cDj5HDSzJ7nRqwkz6W8Fr1EKBNB2uWi2YPthZtZRJswNxmiXvcFvpJi7E4ZwAAJoDfdRrGCFkMwkKJVMYwscz",
  "key21": "3GxHmM2HkxASSSjZH9Xj2qUhuqXUegFaLPQpzMqzmcXmobQBXDPATFomHZ211T168GhwGf5XWVqVkRTUixpaaBjY",
  "key22": "33KDt1ZVdksHHtEk1NzfAddgk6rdvGxbUBp5NXDEjuRMMdFWbXjTmQjJGZPdnWd9fW2eytFJgeWxSqbEuXBC6nY",
  "key23": "5m12nvAQSkGyHb4mM6mu7YbhfFQgAMACCvVKqNZg38RFVcv4p4TG9q1Q95Nq2oaWnyxRkxuj2QQWx7kMv3vjCtn",
  "key24": "26h38ExdYPAVnPxFoCKPEvzS1n5v7zAw53AqhcSPPrFM3VaUXsLiHdut9MWvUGK97UioJA5gD8gtksX6MqzC1Egv",
  "key25": "Gu9kfKMehP156ZckbtV8Z17g9aPKaRdCFKhwXX35swPyWpAjeAR6Ssw6aAj3u5RXnxZicyTVPLt1iRHa52bgFde",
  "key26": "s6n14nJNXVDpo6ggkam83FiFYQWfYRXQUP6693Q1X3DfYRtaWbiaKyYTnZ7i4cEMYRdTFyfpN2waFqzDjHPXsnn",
  "key27": "3haGTdS8PDFoFsrQhyrWedWrBNrqcSJzo4kQtiL4qUTMgHiDibZr6R3SqRQdq4px5enDLU69eMHYKrsW43pr16Lu",
  "key28": "3hyPfH4Agp6HMLWfHZGadzJLKLAtuyXo1TPAKcgW4QT5L6YcJxFjphmsz2tGHDsdbxFPFfpzZ5CGP1mwp23kAXyr",
  "key29": "Tek5RAWhCQzNvXMPUyHo15A48JxBd7FYeUKb1he49CUbez49dRMfnfh6d1TB4LdsjHyAqx945rFBYrDy353Fu4h",
  "key30": "2tjhJEGTBA8SyVM4EqC9XnFJ4a4bH2UeZU7zaHT5MLsfEeS2FkTxwNYSBmfHD4x7WWn2uEg2esEmXytuk7SVXgRc",
  "key31": "4Mg6KtZYQh7usrFUPGMM2GHXA9BLURB3XDnL3r6mvau9kEZqQzTmKva1Ws4eHvCo5Y8pEa5biqTuyh74jz6YXxqP",
  "key32": "spHAw5YuoTfQbNnEdAEwUwYGwQVZejPUsCA3fqL4TSc5Go6XHHfL7op1Mp1pJzYYk9CrismTFPDQQETJGD2Bn5N",
  "key33": "4TD9dj5iqoSFxJunh1tXtg1qZGzi6VsUKPRsKBiRnSUD6MBkw8Zz3NRTn6UQeuTypnxq9zqqFbjibGKsanS9h1sY",
  "key34": "4vLf48WnCYJtUCujKtD3q5UySwygQ3oYHph2RtRdUvQkXufbC75EmWzkS1a3XtxDBvXMNqSdvZnbLwcNqmGNCRph",
  "key35": "2vm7k73dotvT3KXfRttMikYbW4VibopsJ1yM3vdYKZXZg4nzm7vCcbT1fxm6uGcbAENKvYCnzfcjQ4QrF3z5eG5u",
  "key36": "3wVr4TTdU1Vm8VJv5HEvCRhgXLRqeDL4oQ9khDVrDFNpiRaNCC3HiPZJCoQCKzoCkHzdRAaRkotN6oL4ZJwUUpqY",
  "key37": "3udwVuUaBERo2iB5fCFyfGusR2GN4rZjHzzHJKnqn9BZLVwvoGAYqAFDNi4LxgoVRPxYXojB25BZoxv6wrFnm7y8",
  "key38": "rP72H6VuJSTc7nBqg5W9iqwNHwny1H9MxpGQy3SjT88M3EoievpznHFbx2NBzKnq4jSA3fRFacD6kqLH2e2Cmqs",
  "key39": "3JanYoCU8PQmx1LtYcFnsPZK43wnBvQGjwD1RS1YYtbRmqidGppDmDp5Pg8FUcGBNryDM394KT94fte1ntjy7Bwc",
  "key40": "2yEwRPKSyazPmwb6e6666rYUrkW42pT5eRJbZhU6cHAuzXGZrSvpNtoWw2AEqU8UnedRU5FD1gCZqoeKJvqeV5sm"
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
