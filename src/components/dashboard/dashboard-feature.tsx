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
    "4nAR2kFKLqqZvSnZ8e1HbJdU8FeTxRwdFHKbfx34vndjDD21u8RfyTqecBiEUa3rnYS3FHz8hSATQyo9M9g9r1uH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U295hgbo21gR8hsR7r72p1qv7rV3HnkBEPbD7TMoQwLFuT9rX4Coar2qp1myCxei5afFjavHXo5EpvQ9mAcaKzj",
  "key1": "4XriNQiembHeeB16k18CqXJxnqhSRktN3bhAMfZHhJy9DzhNjGRCaSNMtPh4o6qrTuC2qdTFS3oA5rEF8Y2rQEgW",
  "key2": "23NPzDZm8BQCtwe3aBMnPvPzzcvqrk7WciRmA5qEVSaEvpULVKNeSxqTEd5PHaXiQiKsykfi2VkBtoz6MUm46Tqf",
  "key3": "397BswUuJ27WPUgfwQBVac2B4oAymnHvFjb9m3UnSr7rrMJWDvQJLMezxpmbbjJEuGdotjXEjwbCi3sBSSrng86b",
  "key4": "5cYJGdkoQMxrH53i2HAABm42FYzw6XW9LXNAe3JhS3qgWLCGzgVbf8yjtysX4C1z3fKHeUEYs9vVWeZZBzbXW6Bq",
  "key5": "9k5JXUd6Xgc1RE2fUuRT5exycf3x3o8nWd84E2ZbGhg6dFmjJ3tkiJamKPa1V129ETKnfCxtBJtXmNeo8BsH2aS",
  "key6": "4dAZUuYc8um7BxzCscikGnEs5MAiAru1EAor49djQ4g3YzUgN9b6iqHjb9en29zL4HeSqjzZ3QR6nw2CXW4p1bbv",
  "key7": "UG3bPH1GUk58MPWE4mW7zjTki551r7mQ6k23WuHpB2bB3ytzbWgPjH7qeujwgN4HDH3FC89oVrd7vPiPx686Cqw",
  "key8": "5YvNehuG7LdymmRPwzNAdQY6DLBPFAt71iLuRyitc9NwUYesq5C7QwGCryRR3MaFRXWnXYFQPrACccHLUHDJLxpw",
  "key9": "2kad5ySzqiDGcmKrwNvduDZE3tAEPrDGW9HELiiuYS9VzSsLiEwFYTESnQ7kBXK7h8AgUqdch7JBLFEo6GvMtKzz",
  "key10": "347mrgsARxsh3A8KBkBEzJMngT9yvVzh7edxmLFdiJiXPCBJo45awGwqKWc5JGNhRfaH4JEDv4uuJgsSxiJ54Vdk",
  "key11": "5KrhE5RacVRvM1JkHqgsw9Y923jUxpAsMwRrZkb8hYFEqnsWzzzc13WDPfay7ZN5HnZMzxYoCD1kYzvys2eqVhBc",
  "key12": "27N4vvJnBxS8y3Vy9FAg8sE6uQcpoCsUdA6dzXBKtidZSoZJG8TuEKL7Y5JncGbiLPSYFv6pHH8rtrosywuQQoqF",
  "key13": "5CGNGjdoeWtK73iXgc9ikzyKQBeYRzhKrSHCpMN8hNejG4CdzQZGDjt5ibE6jjHXZfYBwexRtTRFXzhgx7cXQmkv",
  "key14": "3ctQhDymg3LbpQjKkWu8TMyWXqQxcCVCUXEGNwqGUBHax13b2PjJEf39AF7EjS2KizSE89ySeCZPsmfhp3ifpjcw",
  "key15": "4AnkE1WoaphRmePBPh3GztGpE2Mdp2T1BvmKndP8UjoAc43sQBTjNLGoSeZNyEdTe9EcAkGsL1wpfGWCvYPcVq2Y",
  "key16": "4bhxZxxZn2gDCttJEVBom9MsivkiGLBT11VwqW9CnQvgsXyJJzwLEepg99rw8TauavqaPqnKKKQo9TqsgJRKqvPz",
  "key17": "3bCZDnHALCR9vMQp7UjWxvqAG2wPkiPAaz7FtfVQbAFwrbFgz3Q1N82GbNnLqwvKZwAxTLzHmPhrH1jEsCTyPB8D",
  "key18": "3wwC3hVvnZtfA2PvjD6tGbgav4AMHxLHjKvgWWX1qrQp9mqjHKSJ9uqpe3GVDebDm7MEDbG9HW9ibFAww6DzRLNV",
  "key19": "2UczoYDEVKhbMfeQogHqzL9vQN6bqFgyqUXCpNePEj16iFYFfkRPPsWPXYJuu461w8958oZ5FZJP4Ae4pBzSX6Ge",
  "key20": "5Ehe1dgyNbiGkxibcaksPDnPyE6aMstgQg2NYRqSsNaWa64U1QFbCdK6UGbUfjeZY59yxFyDHf4BbVDM5JzpBsxh",
  "key21": "WNCNVMNYQPq6cE2L2NgZf4rvWpDe3KGCraZwa5g5WsEDZsmCcZb4cPK5qHosjHXHZCHt6U5RitJrjH5rgntAcN3",
  "key22": "aVWX6LVCan4JrF83Yy3NY1EbpsW5PUuLDZgCdEUo4ZkbGhzvTSpTag7syMs3nrRi1esX6ixkJyZKm7AHWyLqa55",
  "key23": "5KxH5FZMT9efo7KTAuu1UjkKsff7ykduNqsPRmUJ77E4QhLCqGMa9npAkhrPPi4eJJwCq4h3ptRvon77MfH68S6z",
  "key24": "JxBCFLif6kud8tDFmtazGxk9FutoKbdp74nbTULwi8SWMUYtEZUoi7vLiwfiHF7aLMfVyrXAfYAgDJHuC5g47o9",
  "key25": "31WvczTJp8ymMEhz96vzXhipnPswZnxeucBqJ5UptDZWf19JBi9UtTFRKQVSvnAdym4s1h4BR9ZCXe2TzHVL3qgv",
  "key26": "3H6eu3fRVn4jML7veJFBpyXrnvm4jPNNrf75DFkMfXuf4dSimxj1bG1XRLdHEN5M4pURjtmPV3gHvcpiW7Kwrzi2",
  "key27": "128G49kN6gbMvmUxM6yNoEtwnCS9fnWpM36HGxNPkAWRGAm8iYgdwPyWoXZ4csrNyqmBRUyBEsnqyfC9kXjcXeEW",
  "key28": "8izLGMBD2UDLN5MXdf1mxQDCdyAH9yaEAuyBKk5FhvxqtYFXx4gqGXKa2FY7JfUZytA5kfypy87AoqBQCGV6gSc",
  "key29": "4QMWeHrbh4rEfCZEoPm1LWpV1eUMzRB1kf5U75y1aeWteyVWzKiWa2oKbT2NU85GPa3xuCgtneEkZiJkMcX1TzLe",
  "key30": "4FgyvXPfSTSZXtJSaV97M3t1p8xKmLmK6mHahYRrY6BrCyfmKgcBjT68pexoBPC636P8GviRXL97QE2jX7GX4crN",
  "key31": "4NyK8E4EWqvEHrarJc4sHaDpnQUmWUvtMmtvkhMUNBmxXxhEszTXd1oGZnawGZ5XLiEguVj8yNF5VrpmTQvXUZG2",
  "key32": "3CKpwvRrne9r7qtJVVhrhqBEBFWpUyQVsnGznE3q4ipE2bEczjbFNmVM4M9DYGW6bXUuFX7BYNrxCvzkbZewVQxX",
  "key33": "28KqbqVPx4HJsxXC8Laaz9wiVfMTaHzvCAj5kmE8hAQ2wmGTTUtGDyijCRSnPprnRfXW4ZEXzYeng5yjoC7My7EW",
  "key34": "Ngw2MfchpM37BsD4gWER31eUyHdasMfpt4LjAdhKov2jymHpPLXA7KuzaCLfwtekjvDXSvL94bYUGPQa2WW9xjX",
  "key35": "4YpHP5MwLuh5gLPPwu8i6866K4vgoKFCFqCkU4AxMJY4Eg2svTAa8DyvKCgGRsFq4k8wzzuavFSQyu18qYzUZjJb"
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
