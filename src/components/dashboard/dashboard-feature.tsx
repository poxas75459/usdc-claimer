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
    "4HKqZ4kFAFo6QGdGYdqyNESG5DqCVWL1yN3UGySAckQgJsLerjeMzHaJpJ7C8BRbT154nC9w95a7wbgEC6GqWs44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LoVjAPRWryy78D2mFerUoLbBxcSC5fcHv2FnEGkV2aisAM9mUpBhyhAC7PaNDCS9WP2YZqoHSi3SLmpbmrhqH7c",
  "key1": "62yxpPnnkG5qhwhRpkbgubsKZj7jAbRNts8Ak7yNKhjjhjm4UoBjkCHcC98Qb3wtB47ffuvySpp35kJQt35922xo",
  "key2": "31tP1RcuByfqxce6JbphmosB4mCHeiiidj2VAcmAaJEPPoCYsuU9ZSXXrMn9ZJbxS7xDbkTp88p4T8U66V1sNPLH",
  "key3": "5yBKJTPAERuEsLfVf2VxmhMbowtH25PEWZhRUNnkWmraD7mXih9iogStHrQoGu5T86kYxs11ETxVmxjqDUCSQFvE",
  "key4": "5P583wWiG6no4b1NKyj2CTyBhBM6oZ7SprughguWDi2hjfSpTziHDCd6Rp12UmcdukBjGSei5qj48cx39sLzZUzW",
  "key5": "27Ce2yVVXeCZT1nEET53auq3njYY7PEgFYbidDzqYTyuJzVZacYVXDZG1Z1VbDe1Q1RmQiPZrdj7zo35qS5TEUda",
  "key6": "tkKkchYWZRSUqwA6q61ntVrV5uvZBthSx1yKNDGQcniwnQ56sTyuytP1aoZtZoMSegFAKT6UeuRJnnQA26g1WjZ",
  "key7": "5drcgqt3Dm4vB4Ep7RsUWxn65JkKazP7Y4TUUQL3X8PraoiHCrrW22oNF37NXfZ9Ni7rF2KybQYVPiRL5JacZhBL",
  "key8": "3xFMatZ8gsA9VW3XwKmV6b4LJVzXF6EATYjK9rAsoCy4GJQFKFsb2v1LQSucRG5hroBRT4BHaeTKdR35e6J5i7ye",
  "key9": "4ukN1kUympVCdpjNVDdAbJPqDV5BjYbg2jebXL8tVH7YpSJoc7iowN4Ut2JYCM55BtYwRbTGVahWNHXaS8Ys4k6M",
  "key10": "4ZNnxC5iXkGUHxs3igds55PJ3dUkX7UesXHT5ZFw41XZgNY7si6KRcVFBjtYggC5bFKJJJeZSNFGYhDSmN8FHzRo",
  "key11": "2i9GDyPTMJxLi4YSxHmU4QVzhGMVjx8WhHiwhfeeXBkjVhfaH49BtRSq3m9zegFgct3DasvWHdyFyjAKWJR63B94",
  "key12": "7nggngT3GDp1DJyudQTHfM4XWNyHepyGAgfgcpvaSadYpvD8co1ne3BiNcTWg8vZnD2zmZWdMYQyEM2fDLcA3VQ",
  "key13": "h6Xd1DZdr4BjjAs74ET4EJ5VDaRwPuJLn3FYJnth2fVGjeTbhGGtuP9kkYsW87eUCH6X1mtMvuQWpSP6RAj6i8r",
  "key14": "3pjPSMXV71k5k5ztYzLGDpCQLy1YdRPYkLFRhb319m4y6YEwvz2ifaHv6gmc7U7JhtXZ6mZJzXw9XTh8YHzc9Fxa",
  "key15": "3SyPCRGbXzA5E9QuEMR2PfkyArdhhFqePcZW7MV7uvoKhtQMhTS55WE99amieneiB5gG8LirqvPhMX4GwJJUZs2A",
  "key16": "3An7carQwhhRpWHeUjKdntnxN17CW1qR72bx4DjZWsZ8GXbDDKPiK97L8SbyoCusBaXutAxtAnyyojbkvLA3vkew",
  "key17": "4gMLM9L5qR5HVmMyUYSAp9jMQ31Ji72b2FtpWCixM6nC9XqEumGpgogtQdMirUDVZ1pmX1aLh5xNYKw4Rds3iWNX",
  "key18": "3Lb5GMq1cxXFRzhjnbgxKWaGFTrwAAhjnjpQxfEZsRyt6mZMrDpA3ZksWnKSmxnKw5HEJ39wErQ7nCMiCofvBFhD",
  "key19": "2HEz64fC9uAfCF2u4Pb581JHa3qGNfXzCF4v6FkzUYPeLdZEWYdR6c5VgckZdf6mC7H41eedvRpkJbHWG6tnKgLK",
  "key20": "q1djdDbkZaB8UkaucFkaAmQaBJ4N2LdnbLWvxmAvq6vnzc7Y4KCy7QFp7hZPYwoX7TJuGuqsLJwD1qVFtq8YNSB",
  "key21": "31GtkXAPBwfAymoDCyoUFASiwqsASSxa2wwFH9mysW4BRiq2znHZ61S1juvHM25nauh2zgstfYoYoxqc83cp2LB",
  "key22": "2yChf5SXsrSiYN3RpDvCLLXxoFhNhwttgbpLwHTRxKZQneGtdQGqrPGTQfX68M5RC7mris9nLgNMUgpwUC4Qyb5P",
  "key23": "44t5DxAihDYwS3J56AmEZZ2NYkJ55AgVo9FT6jn48KtsXUKDfSt7EUToueDBLD9hhGhBF7oTPdECFEVMTvXBxHFW",
  "key24": "2m1W73KFZJX39xKEuy2kLt4eLDW6mR64vaG1QtWg7eZotCu17ngcbQrU1K1m3ZEhvHFLxmPN5o4KLuQMHBeeFAPv",
  "key25": "5vBzJkSfy1XrSAKD7mfMwzGzZ1B5z5HgFv4zXCXEHChSF6PmqbKB2xUfcvaocNjJin5cMLYpDW6EDw6DbeCgcWmJ",
  "key26": "343bzSDhWqcDvLebt8YaihnH8rFwsbkSNwz3EE5RRAaJcrWjUBf8aA71cBSd9639pFB8RCmMJCcScYZWmNM4kWWK",
  "key27": "2dcw7e4xmVdjTsd7EgcrTwToPubdRD57K2a2jpyVfkaC3wXrMkvNpWoWhCaLKwKjxwfNq5KjhxtToNkaAjhwcDtz",
  "key28": "db7aKYuDXtQ58kZ92Cvue5bQtAamwj3YyfZ312ctgb4q2LSsKjJqEyUhaG6rGdekwABY6u457GYBvRwokJeyhdM",
  "key29": "5xhGvGQ6wNXwZbjTQdhoMFVQzaCQGoD9c6VquzF5t2u9imUpiKthLSwiLfLzJzcdTiH6JbCxXfWy7rk83K9fPnAo",
  "key30": "4mmmh4juncSpjEk4hZGLdorue8EyP4o29Sx7DVqXBqNwYYwdS1Yzq3eAmacVsyqdG5KPjQ6ufDdxPa3Y2C18kfu7"
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
