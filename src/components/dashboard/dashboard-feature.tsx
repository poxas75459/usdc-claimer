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
    "4tWfpLu39eiRJVB233EqBaFbeGLW3VVH92GiAF1TvyQx7BkyJyjLUTY9sw1p88F8vT1AgrjFJ6m4QG9AUSWLbqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616EQuemgmFFxhu96F8VL4GDSXXJCv4XL8sPKq153p8xDxP1jTbTaXR5z2xuTPBnU3jyC7iBWYz7icwCWRwT99ma",
  "key1": "47XLVxKmHbveCaSKp7KqVHrHQGeUWvMcfTyDTVeDjdPPiZjenaQ9DUga1AmoeDC7J2JCGSfysG5zPAuTWrF9yW7F",
  "key2": "2mDXFjZgHLqeGuLTko8cFU31VP24jRxpqaWsWDAu3kS6j5PwyE6Z7Bkk3o1CB2Bqp1dd5rjGvb7dArrJ9Gmr2uw2",
  "key3": "4rTw2BQM1V3BSxcpkAFiCRqJC6BMkJY3Zm9rYMoEdk2T4awkfPRqaUTH7iGbHwzvpwepoEFfBSQmJti5NwQxEntk",
  "key4": "2QadS5YgXr7owyaFfXnxhXCAwCgqyqT7dKThps2k2ozQtf9eqh5hrjxeT4RH2FhqNtcJeZefYefe3mXD1kNBAd8d",
  "key5": "5rKup4xHRAuijEf52Si9LG1A8m61beQwR4YyCqba8jG1kUswR2m69aXbEyoPhFHz3CBM1e9kVzdi5PDhviMUdSj4",
  "key6": "3DqBttHwMkaiT1TM4jZfgAorHEqfzgZnurR7fbEXKfEM6ypUwm8zPxoossQQHgjogSsw8rFNgCAcAqZTRtCPCGVV",
  "key7": "5WnEeruFrEkxeURdBoV6rPd8m3xy5ih4X55rLE9zTWDSGddHtgRLVTL9kRZP547XcYvGkThik3rNUenrYGmVDk39",
  "key8": "3VcucUMxpnGSK3iEaLCWQYeRshox8mqXmkXQsry7bp2xFwv6AHnEN6ntHwJsqPgNv5dv9VgjGrdJx8JbFK1vnaPK",
  "key9": "44s4bd9iBxfqupxadhvuicYSDQvFbLoJ9e65ZvzbjvVJVh281BeHbYnuHzJ8HA3Hk9dXBCiVUbL551azQuPzJDkJ",
  "key10": "5PQRezX4CJdo7aCAnUtryxA6MXmBz79gQptwRXQshditjo2BjUVf1zNNWrAa4MABi7cZqcdF3MxWj2M2xVwsFqML",
  "key11": "4h3dhSmfdVuGRwvpnUTT8bEjE56pBF8VYrye1M3BDTP5UGLatbM9FLimQEtGKhaFEipTDnFosvvjiD4RpHvX9gfF",
  "key12": "2hnWPAcNPWMzS3M2WMDjCbVo7RLKPR7EUeJAAtBgFaQYZEkfRHdfq12dYtJVQ7s2CQJ6aHDPJsCgpxPCovm3bjVz",
  "key13": "36mcQy12BkkecZqihqbGCXW1R4DLPoFAQzarknEB2HNj8EH7zW5NwaaHZZRVnuzLDV3weiBwa4tvkw3eGEJ5XnGx",
  "key14": "3jrgxitfVnMsDUh4tdQqEK28FMoeRKsc28R9yryVNNcur7jY5uvmd4qhKSAvxPwhAeENKz6Fr2UpurKvtzN52w3E",
  "key15": "2VP3tgFiVeDE7hh5HjZ4oyS6fkNoFDC3mMo9SGRaLkZyiTDA3iZW7cvtDRiB4nKgpCw7LkeAawE3GbKCGryZZLdt",
  "key16": "3ozuLBCeX5TC3kUG7ApNqydpT3maXVSuugvicDjm9F1Spo2PjYsmV15ufXSn6z83vrBm9iaGo7JB4Nb8f5wfmBcA",
  "key17": "3UpcfYuKhYDczBq2PXTB15riz27XMhwo4CfwLmHouqwkP3FVvJQJWErMLafk22r1vkhACmxoe3EwB773zKMucfKx",
  "key18": "2nr2332FHQQBdmxhJD14DoEH9x3eZfZDq8rNz4vwYcWaVVc7g9FU6ceKLTBWPAEwHPydfosDTiowDyd4ryZ2wHCC",
  "key19": "C3odaizJdiH3NrW8RLq3QJMZNJuygnmhNyzPS5q3ZtwjW9dVErexfMkCkYCfg1pYLwF3G8Vp4WxwEenjGHmCVtM",
  "key20": "4d2UPxjzLUmc6Q39uW7qCkXLsoZUP1CnjB7KaAd3gCCrChRm41GtKBaYxDL3u9ZCTxZbQVxJTB6U1uqE6fbuTPGf",
  "key21": "t9rotLZp6jRccmEL9x7SF4crTCvYfHXQ68jmESfAMvQhknbQkDHa7563Q78rp3uG8hEd47vQ1GnM7D792tKAidd",
  "key22": "4MDKYyLc1qHd4nHeT6a7rqCcm2uDSdVfUfe9NPSPLReLdJcHWsc8ie3kYeTEhk8CjQkq8Qv7XjUX3iYHfWPgM49B",
  "key23": "38ejbQGRYp8wccs62rk5zR2YKw12rPHdz6H4pPCKp9RMSJnqgnRsc46LHBvH2VHaaBSmj1dabyjQs6akUNgD97nF",
  "key24": "27AJq54RehG1yf3epypSN59wRYDMUdAZzYe4vjgxW8jw24rXy4RHCXdGiE2yAiX8dGHALw29XxuDATZ9SCdHJxzz",
  "key25": "4Y6mFAggrKyMgGYqnAfbfBnoCagVdGpT4A6AXnarCKp1SD6mr3UgQLpJgaHLc7PpdwcnbVJ3CqPK1w5aNKgMMhET"
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
