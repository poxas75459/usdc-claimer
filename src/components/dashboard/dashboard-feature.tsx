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
    "9oWsCV8bn4GmC6LJpJPouox8NugteRA2gmHHPTgXpANahJBybZ2GWykYbrefkr6kp6kevsrmtnVgFeN2CXsBiki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XamitfqTyTMCnRrw6WvncPxnLaBq8ewe9RAuwogaxf4bjpJQgRy3AYq2W3ga3PXzCNsd8dnkVXCYtavc6D91CnE",
  "key1": "5YTZGgyBPpeJa5PkSH6Wvto6Q76fM5nUVXMj7gEDz5wn7G9TnfoyrnomKaRmU72BsbPzGiWLysWhAVLsyYYvf53b",
  "key2": "25VEURpN6wzQtoyik9nGx2figX7Q3qx2eZ8vGp9fWvvfMRNednoQDsb4ySMNkau2x4Z6ucT7kPBURb3a1iLrNTAg",
  "key3": "4GNdq1P3WMfTwyoWPb7yRjvywkekCy6qzQncQjDKdQJeUt2gRNftWbsUMGfmiQGGbUbfjGn1m5uqfZ5uSCPR7knw",
  "key4": "xeXBGpWFfZy74w7HFQXBpLckwvbg1nnDPoswNpzhSMpghkbRuKHmtCRzK5N4gsSNoEsPZ1DepqiWcQ3bQyhQBj7",
  "key5": "3yC5bZKWkMAGorWq7KMxNk9o5USpSA3d4JuFycbvLGordXnXrMjhxaoZ4UT4wXhYbYpzDdjccecZyJDQznVbAT41",
  "key6": "2eLXyVFt57y9RyCqsBpubxRwGZD65pJCdbYnzYs8kmFbXJ4bSSsemAadKFs7CpvBYS3gqkScN2aaRjiAt1x6cXok",
  "key7": "2yaXSbY8wYKZ7Y3uJhHBEYXThxxV8zAKQEwa5mVZYUEpFUaig7Qp43qRLGB7RHzizpUvyGJuWwnXUvrhnEy8cd1y",
  "key8": "KE2LzQtaC7yVftdJAzB5PdSBN3ADoa7JJJnJHJJNAwuQUKeAG6ZmKtMWrGHZKmUDmorYbTBFBxHEpJXky8v4jq6",
  "key9": "4Q4MaR6dUtxNwfAxwZrvKqH8iZyXbG13QqhfUMikwtrHYGFBEuR2AdtmqGbuFEqyHStwLByc2eBAuzVGZihttUpJ",
  "key10": "3sZnH9WtnqA7BzBkdFcEM9kLcMM45cKoG8ji7p3eSXp6GMwBasudgxhTV2uXNu2g8a8VjYnqEio2A8jVDtFijGyy",
  "key11": "3uzTgTCyHHv9yuXXffmzddKJtdnGBTRyd25yjfkbrd9FSsrbebdyK7Cmxmj4TJpLY5XDHNfm4wxRYtg9FWcBWP1W",
  "key12": "5eoLBvDN47cYuXW2HnK6KwBq4w3jT1gB8ut7DrnUguZiXYuuR88nz3zeEEMBWH5M7gJQWYRLgjK9XwT5ZLGHocNS",
  "key13": "4ukSDhSjGURpD644vhUQBE1YYoudv4mSLHhWJdpVHxzzwfL9FKXo6tNMaqvGDao9TLfUGHqtWMsu4mpRK6tSPmTV",
  "key14": "xK51cQ7cgKj8Qbko7oeP9dHyfzVwi6HTA2XPPWx4QWMuoUPv5Xueh29XjN5zAEEq5XeR4Xpw2bLeLtmi2CyhJaq",
  "key15": "5KjgNri5FXfRbqac7Vyf5yURv7Tq4P2Jzu4XdF7S76jgLAmmMYfcnEbGnx2Qmvv55jPFKt3xuX6aykGp9trFeZfB",
  "key16": "5BN8Ut7eKnWYwCRDN86YAbUKgwZqbQ5ZLRYY6uUMZL2GbprjojJ5fXb4tNCHVuj3rpJCNjCfu9uNafLZVnse2nZv",
  "key17": "KniTKtatzQW2QDZVth31yf6GEqHgFV9bEeFD1NSWN3hoQw5cHMBX9AbSDzLvp6nUpjbZVXUBnR45due4dCijfEb",
  "key18": "3J5qsaC6uoLLkfDx2sjB8zjYo5CYDRtoqG2r7bLWN15CjNzmMPtQFoERkHmk6xpNtdt1tT1PFPfyWtQj4vGTJEpS",
  "key19": "2oYmg2ABuE8n66qLu6UEy8jgyqrT5RgrHtZzvdDjU1JKBgAC89CH26pRtdQgKAKqU43s3Nhc5Uy9Qf2zqAGvTSrn",
  "key20": "PzBYf3FB84gYQVAzW7wPtRhKU6ukP2kG8ZZPyeTbLySEDQWmVed9RvU2NYR8oMhqQmEiYkJ3Ym8hoUJNBqAKBk7",
  "key21": "3Cs5NmNbNjdH33yBHbsQJKa7M2eGMbuzQj5TvsYhX7hfTNfBg98vqjfh245stvpbGG9vPE4LepwY4dXoyngvsfFn",
  "key22": "4u7oRA1yUhe7asHLhH8Lc25d9MuCgUpWqDVHpZBsqWAAxQq6SRd7ex2QQhpv5HstQheSeH7rowL5hsgKcN5aGoPc",
  "key23": "3VaNQ7z85h6VD7Fokoxaot9EHJLNm1nJybf5mqidjELeotY6jPFD69fJTzXYBK1E7uJJRz8SN4oraqgx2o2SkGJK",
  "key24": "4N8LeDeX9xVRKzruCAoC3r4Hm8S6qvvnP8QEADeF2ymvtVHyCxLYwrN4gPM5XKkY4KurwcJWdqAWNnN87H1TyyfZ"
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
