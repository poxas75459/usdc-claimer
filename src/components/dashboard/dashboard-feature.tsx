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
    "5eWDLpGZAKh2j1CJfEcLQ6Wu6QGVvjB2aGPZmjZMQa7NrahKFGDs7e325dBHCztQeDcmJvhHYyafKNcGvABEg6Lj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqDVUaDwiWuGKSDP775X2CbpXqp7avRYCBBrwhVoNAvzg8F5ZvzitpxvMupNdYKWcogUoRrT5fCL7F43KfkSypx",
  "key1": "2jXABzarymWR4eM1qBKXf7x2ghX9ZrFmDWSwwfuKJCbGBegVoW1VveBg2n2X13VAH3kHHBF1PJob1o2XshJf8eyi",
  "key2": "2x9msFNcRpC6YZf3PdSsQo1v5HcJfTCpat8XKWAdZCgV5eYFAkPXe4TsD4Bb7RF17ez12uwrSLfvXT6ZaHBcSXEx",
  "key3": "37ePkpD9dzNUP6tbqSYVZgfhKi6qZRpbczBRhcFMjvRU9SM7jSnZ2HMst2GZkcMNUyL81msWHSBy5NJXGncjnHBa",
  "key4": "2L4T1sdBHkL32Knmybjpru9nZ6JGk4kPkyWxDSZ7PEkaTYGrD7YJKofMdHKZg895haj6sUSK3CGNicjgT6wBueEZ",
  "key5": "3PYz4VeBh4LKjX62Gt2nyQDWA1779b5E5Z32nUGJkEobGqewV1pYVae9gZZbDsSgcFAnfqrb6qE8jdPf6scUREgi",
  "key6": "3V6wowMTMV5eyUA9W9fbnoECLrT1yLUf9LZeRY9HMGLMk64XydfVEVRSke5ijjKfqnyXfJVVvKDcHUtez3E4CHXY",
  "key7": "42o7fTBzv2gA8rnEAcqHruQzhWwqVJMScxCmkqyZzESB5LzHmuwL95dWgn51FtPAeiz7twEQknVi2Nn9g7VocTcg",
  "key8": "5RyY3gZsTaSawkxuKLW9rcWMiPg6QcK7sJ3EWRdhBDz6pi8Ktv1pqTHLuPZAhfu3HWRfLYHeds2u1sCccp3KWwAv",
  "key9": "122MhGygJ3FLneJrQz7cnQiLtVcttCcUoNXnL3j2xAJ7JQTycB5b7esWMuQryYgKDP9sehw6m6nJVtd8mQM45QZt",
  "key10": "2QohCA74jvSP8wJ3qSxLZcMRNDCiaTd7TrhWCFwLP4Kf4NgrX2eBSaxv3aCaG8SScyT3Lxy8Q7R5GJ6zQnZZh3n4",
  "key11": "2MNQL6C95h4RydBUhCcnWGjaQ4iJXavctciXjW5SYHtDM76j8v2Jcwqhi324VM1zBVsuKjgA2zApYhDuWw2ckWve",
  "key12": "4uZqSYMNFn7QFA4gL9wTV1neAQ2NHJ9jLqtLZzebS2h6ZXaaxYJXw68fo7pgXdzYa5QbxrERjJpDnLxjf3Eqk2v2",
  "key13": "3qJtyh8Qj3BV4RJdmEebGxiZ56ECg5j97uuYAYZye4JBuh4ResydLtr4mtfqABfoqYFxUMUEtNqy7u64KZtj8gBb",
  "key14": "38myKdP9hq9uVC97vhwTyLCZfrF3YVKkjBbqhQZ8iDBGeh7G3aCuBaFkBC6RiWFuetjmDh9JmSWQBFQ3tcjjWziN",
  "key15": "5Axq9rJUYeSuMAbYhfDrrkRDtcFkjkSSFgVA5C6zZWzKsUiK7rZtHmad7aAdtZDvvJQBfV2K3mEfSkJzNwV88wjy",
  "key16": "STzB1bPk1cY5jK5s3xL7naX1bKQ6JCHjvQbf8gS6G4tJ8YTpLiEBsw92pJELojjYNFg4FUh8sKgUK4ijFAMb5wo",
  "key17": "1cmuLsWshYhuwgsXMQdo1ZiMCd9xc4g8EBodMnCMiPJmrXs2KLt2GJ5St5nDMHhGtvSrZhjY9BRiJBdWZs5FN8u",
  "key18": "47KJzEz3ajjSLRkV1sHWjVunMcxcRY9MRcAHNvrm39jGjSKtQs2UhwyXBsNSTkqZh65sPSEfiqo6NRThbjg4Tgpc",
  "key19": "5z8Zx72DHTgr1rBPJPv3p6VuPG1kzuS6hqdwQf8o6s9kmAqdw38J7NPgbTRxfPvTpyHuCNYzb92gHKNNE5mV6QBm",
  "key20": "2YWPbuyNdH57NUxD8Pn8pEsLpxikqBqmmc2JLWmDVDTJTkDFxqj97p5tmMwXLV5StZHH89KWDdJ1wLcYL2RbQPma",
  "key21": "5pXj7XqjhePYT7hFZpcBZexLPiUBYGh3TUwRhTgaNwgDb4MK5GHVC5s2pcydc3GCuJZxt2qUwQRQnndBSxJ35ovi",
  "key22": "39kpXB7wLWytRVJ7qCZcXGQccvTNV39qp7sqKT7BmhqqLCD4PDmHVNE5Fhpmr6Cq3eJfjLro4FtASr4Symg9cjg",
  "key23": "3A9LVb2KQJMzJLpHx8TwXxT3YHGdopmyNRy7y376EGHb6cfhyye5UdNyJs6Xo3SUdG11niEJB98bKRqGHRDPyvXc",
  "key24": "2mqeraogCAQj5szsJi2Kkstrg6qKu27XbFGWBvtNVgKNAtMdCGJPvYu84LMKvrsiUbPx1gw1LUB2Decej3Jf6zvE",
  "key25": "65thqZgjYKvQQ7iLyhqWCzYKeZcbkmEPZT1hn6Yzc12xsfNo4vhYveys8nq2AUS8EitZodFqrLg5nrgJ2L3ZuwPU"
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
