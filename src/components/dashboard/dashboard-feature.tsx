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
    "2vD7av6enusFs43FuegDj7SGqAjjRrbN3vn8av6Jk2np1sGrsiXu1aUKTiH7buaoFwHC4rgPM4atvw2BuYSiidCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Md7DEk8PWYNML8EQCKu7MMhy6ACSxpb5MuUXz7x65aBRz5X5oFbzNSxniLRVSavrmzKjppfPuDQNkreHyTm3FkU",
  "key1": "3EqVvkrUuU2Tnz5NpZq8vg9o73HgzXUVxvBUM6NG5uqjntstZnkh1WXb7CNpTjuHMUccQ9Pkhsq8d7fLKG7sxtb4",
  "key2": "21MyFFwrnzWs6dKZw2tG3WchkxBaourKbjB6vkwRbYeT4oG9GwWXYF2pzwGXVoSHnBipxQkQNwmpmYWVU2LWzTCn",
  "key3": "4JNUtsiFSVbwoR4gypxMFfQCE3c2Z57f4BpRsDAHPSPyMJVTcdYycS582qmcYJrNPZf2fNyDLJEwdoKzGbtz72w2",
  "key4": "4SKDS79U7ZvJ9SnHwUeKZzS3pJpRnfLduSc2WdjrC2CcH7SjDU8Yp7mnPft25NmcAQ6p7b4YvL295wCvvckkqBEH",
  "key5": "35mBdGDL9JifKhRdnoMvBAvAUY7DNgzQXaXZnUQ7ypa7Z39KG4b28oy3wdBX57rwWcDRynAkJosRC6JS6nJvZmW5",
  "key6": "3MixXEu6oUtZA6h4C7GTrfB8eG9RWkbFdXwL59jBQYzvovy5fc9W2FgdPYCNFTzsbVwXt2mXj2nbsxY4y6RhUbSE",
  "key7": "4mZ3FrAX2gct9TdWbkpoBJGkK6qXkQCK4MNrjV8ZQNwUjYwH7QhXnhz46aKzh5hVg2HsNTSK9fxnv2p1F3pVZNVe",
  "key8": "3ki4h1GJZWKhYPrUxFQeM2hjVscVqFdroWsBwPjQTTvYQR9ruDdEkxChR13USfdkQqWFnEaBeeeVfDLnWWZKHpJa",
  "key9": "26PC9mg2zvgjZYujQqNkbF7fNuYXkRX8mcx4Y3yoVPCypzwDSvw2PdNFrPPKk2x1WPHUD6ymxuqM7ZmGe2m4zQ9M",
  "key10": "4SvxqCLMhv4MKuSwcUGX5RUbkBGBndhJde2vHZ1pby8HwkSyrA2TVpK2oefR1iGrkXgApT2Y8pKCePk4mrhSVEfH",
  "key11": "3Ep16diGdP6Mxn4P8h62dtgFxMxbpEEWAzKDfz4LdLB325zmWZSfbFfLEV9erPrfiVKwRpjuJH9RaWbBxRnHoZKF",
  "key12": "2yVb3AN97tibfbzuTJsfNezYxZqmeRF2FHu18TZDw3eXE5VXcmx78iCzGwyFwwnv8ZMeQyu6EMR7kE1qAeFBhx27",
  "key13": "2iohTU5MaNHBdELzhQHabWVv6NfCoLNF3ZAKCK3EHwRxyn2FTsWWsRC3TwiWGt78jRYhWoogs1msw4huaEyn5ACD",
  "key14": "DCiESxDHouqvE1gJbWeif3St8CyNaCgBVJwj5tJ8pjWoa936oJMFWqKChe6uXQuTnqZxwF9YzVXQXRUDeVjScwj",
  "key15": "2FQsxKMfL8VGrEsVs7u1SBEaX2XyGFTyqb2KLDkyLb27MtQBtboTZdad9rQuZcjHWVyJWYDkEFwHGWPyNuKCnRPm",
  "key16": "34LfUAq5cDk16xWUxH233Y2psfsucH8KHT5i9agbBc3HvuSbeNzAJovmec2LKiA7gL77yFGjHWPrHADL4vtHTK2V",
  "key17": "2VgRZR85iSjQrzJHRjrtDwFmJVJydbfDsNnST7hnGnCTwmbUUvxP4TJB54CKkcPUvVWibBHGvkZVZyMMgPXxPLgg",
  "key18": "4BeTxAipq3MmwLMrTCgNSj3CYSMJSeYxbzHKXPp5sKgKAYL9pHv6USckNmk6FEawgZ1mhARPfCkGjFnGL9biMYdQ",
  "key19": "29Vqq3Yhiq1KZEZesphUVcWYyHP51iVeJ4DCqMBybCoYwZSxJWogmJLfjUE2WvsnKvAJD4veKKEGXXFFmrGxX8W8",
  "key20": "3spD7T2NXLjdCLsrhSmPfQZcyq8T9ezE5d5KE2eY7NZjp92NQapjXbj9UFqLUJ67xbMQDCPboLbobWPUZ1qoWzjY",
  "key21": "635Y65MjgVLrDRPMALERLX1dhATymhvxcoC7hpHQrAM2ksUf4xP1Mz9CQU2Dr1ecNHH1XiJ25Rm8R2ps1714AZuN",
  "key22": "4zfmbkSg9ziyFCxfQQjgKKadCZpMV84mBo3Yv9B2urDqA4c7RbfM8yg3JRQHNFDyWmBBGpX7eT5v3NfeipbXpH14",
  "key23": "3uQcQpdEgWBvKqPxNAUXiipwzEsXhE6Hc4JZUYrEtFLciNDjaUdmGQ6hG7tnMTBGssm2n6kWEJvD23zYAZPZWdij",
  "key24": "3eUZN3nCutD9Q6LdVvVdK68bqKqnTprLbkz8qw8MctFkk9fAxLxdn3fuStz2vSVC9MrLegHgqkrvd8ujeRs4mRzd"
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
