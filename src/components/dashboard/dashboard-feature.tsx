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
    "4rrQhpFkHXLnLm9H1rmTmpeQn5VApEerQe4G5MhwDSfaXbRg7Zp1rZ5KoZnoD7zmyZJBEPrYXw3HfH2FK5N7tKc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32UvPkSiKg5bXzF1Qo47Wmy2MefUyNtTfuW62kLA2iJGHQNWysmad7KDDBV3NXGei8wRvgrwUwqsTxhvrLmh1vr5",
  "key1": "nh1SMfufaUa8pWPmrQkhzTmUR4tsRW3T7AtP4QFU8eKyD98rve5Z67AXCoqVEpouNqtWX3jUFSWD8N3qs31zjT7",
  "key2": "2J6zAnmJQu9vYiH6peSgkbYYwv8yMSVdQWcmnLJTbLtxyR17S2CLbMszJdyrYJBNH1ubX5qKU6BvNjtYWYJR6FRb",
  "key3": "2Rue89mCEywraPLfteuRJtybNjQcLJxZbPvvF8UvzAAbdDcztpFWy3jM49DaA4VEFUGGu5cNLR5Gb4bmPowEk5ug",
  "key4": "4EEVjdU4RgjSvPoScWoLNqfzvovTAN2Hh8mfzkLPAagdGao3Ap9Au7ADkz1kTM9Dthg9bcuvLF19Tj4RTFiLNxHX",
  "key5": "S55ftVCqtPw9BQcGq1V88ZKoLSv4cdEjSAizE9LMX4SfxLUiyNHp13ya75hGJMPJdcqpnudpeBnkJzkKmCh1Kb8",
  "key6": "3HSgwytJP7EKpwueUCmmdw6a7XtTWKtRR9y9BZqDDa9xZgH3ec8nBRDb96ieXZHEX2rneZcHuVXAMdrEMUE3JMJu",
  "key7": "3rcwMbbrfGtPhjJDSjpnRNEXSz2K4djkrZF236ix8WPpzRUqBrRPY5cUv6yi9r6zqVFnbEKjkGF4k1YDFSq4b1UT",
  "key8": "3GznxZBdSwJDUEktAmXAWmDYF2HdStt7g16JRBLYHkxoDugSkqDTEns4rK6y3CoLfWGqAdHXYbFyeWmLyNMzcqTy",
  "key9": "3q8xUCeSpzy82hkM2XggNNAqxNDvDoGS74BnBHoy331NCqm6NgRN5KAnMEvHb4k1DFhaTfsKVMWCKnVFiewuLXMC",
  "key10": "5JNJ7edWz3Zr6q9LrF58nCiYPDPZzAq45pNjmideii6kJMLnB8XhpXmw4LkQJkvGFt65Rq6Ydnara3jz4JUmPkBA",
  "key11": "5MtZkF1c29tEzGqgz7nBE2kyB8aN9e5eBUC3cwdEvytQdg4T8XvpCQFpnUpMk9eR4soKcETVxUGPXqnTjX78aeeV",
  "key12": "5u24FpPyDtWztLqrZcCptTfDNTy38opCnAj7fahyT5vuuHe1uxkfRvFnM1y6tVk7Vin1ki8f2Zm7CqNdxZkwthXL",
  "key13": "3zfGu42aS4gWTLKBSmZpWzqR7Rd4VPfoXcusex59WX6KvuZXM1UYy2udp6dzAJgiCYgGmGRn3PsE9nbHxZTYsHRD",
  "key14": "5jZfe71JhE6kaM7sEFUAWKxT3t352Gh9DZ53DByashtGRVfxFtLuXt4Y6TN1hFTKdk6Jh3VWhQSmacUzJX68BMRE",
  "key15": "2KVdEUY4bR8SJXPpetgob6HDYktpUkgnEEVdtgPqy21crvAzxa45iyUzHaRvr5P5EFE83V8mLUeEadfVUCdenaBa",
  "key16": "3qczQVf9yWHwfgQLLZWJQZtuZpAzK6tWQVzeY5UGRffgH3qSkx8EgacxbkaWgJ8oXjqvcxK1fGoRUxuvhrq9TQNi",
  "key17": "3EftzKn5fv4EtdoxyiwzVWg5r2sDnys5SHV45WJoquAMhfneXsNGcAcQvTFJo65qTfAkUpXvAk5DyEgLeii9kx9q",
  "key18": "3JuP4BCagRcHks89Ek8PMRWkLHXnjYryd3tgLa6FTSgfZ4mottKM8eHrtXR2BSTcEga3VAtUDeVvMcPBWbkbDvHU",
  "key19": "2ZNeBspHGUftWyeDmmnUpZcNQr6uMVkRyS6jG6GFZT9rTr91k47ZsCQzPPG8oQRtUZcN3tVRukZ25KDfaJbj42zU",
  "key20": "58XxUPJJut7VNq6m2SPeMCQX7xJTZPZU1cLg4j3ceUDCPTLYJJAEd7VJXMZFirnU58ioJkStypXUQic3ChJRCXBT",
  "key21": "22CZwdBkZJVduyQjsq6GxV8rLAbxwXA3jhVv1rZXnkVmoS7dH9sMpH9NKStdctDmamiCKyZN7ZbvHkxauG6Xk9mQ",
  "key22": "48XeybFznBHFvXJ1KSQUEd9syWUj5zFCWskK8YDTPVsW7B2PgM81HxpkzMK9gNPYGeWwi1125FEQ2QwFcqp9nf24",
  "key23": "4SsoyzQQwHXEJ5qJsmTByxGpSeiU9YvsYoV2rbN5t3HbvQ7ZTVyai3RY5RybBmLXN6zbE6Bc8vPAcAi5uZnKS3io",
  "key24": "QU1a4Ukfm4qqc6dmqHXK4rYshMBhG1dkr97MkiJXXXEfyM5wSyhVqAXoMS8EwRqgsSx1N7yerL1hFtVMf6hazS9",
  "key25": "5LYAXyifynMuNoFDYVr37UwPQjPHKdJr46VmYtXUNDs92TKvX7WMwtkgSceQrTkepj5ikxx3yUsJSpTAd39NMk1C",
  "key26": "31WUEDYyufCDMBsmn5VPpjPtJJWHyH8cunMAXGJcknwgr4j9V2ASahvSqJsAXuPRy4vBidXgwc7CKBqi2E5SweMd",
  "key27": "64bExhFeFHKco4HU2mjHPopCTKuWCvmxkETMtqQwZttYPQoSeG91n5PHDmCWjwmr7urG8UxdjsioCD98Xq6Jt5or",
  "key28": "3x77k2PipX3qE2Aa3hKNwL6NnwxG4NCjgqB7YB8hBDQjqbfcbo4KaAQy7eeKWzDxkB3f7pgymneH6jZxsJkq4eJL",
  "key29": "akndp9kPqTsEwXNRLoBrEGQevkXAidn3jQ3QP66yRcNjj5QiX25kXkGVkYKxdM4eU649BmaqccSbBQ3JkiZmTop",
  "key30": "3Mwupc2jnbDghudQShy3SzVRsB4gQrAnziar7KDYhGZP9dmEPcnTksU1z4XJMKpKeJYpywWcNf2XkCHx4LgsdyNS",
  "key31": "4isgfvpBhNgYHgsmXingCASg8x4fYt4GVF5tLHJnp4dGTECRUXvnRCu5VGmqbBSQbiNHjMhKC887yK7kfXgUuqEU",
  "key32": "665t7PBLbDGfUuDKtUXungaHJhuyF6iB1PbNBYWC3ih1mbnrvP2QqyHKLJtWDESHf6AfKF4s5STyfijxtTfNg5PS",
  "key33": "2CFszH3sJ9jEPWFKrYizDi4wMXkmKCyVS8TXe3S63CGxa9hd3x2GfsxLthxZ7fcZdj8uSsQBu4BCPwAEcxaLBEPx"
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
