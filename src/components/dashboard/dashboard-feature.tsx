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
    "26udEUQfTViJLwVmSKTEAZ3SThJDPWkGoZ3HXXYdef5HJPTTtHmgYr4VmdKZt2fiEa4MbroZMcgqGxLFTjYRggFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Yh5Tzc8869W37nCDdSXGwX9GCthoFxPavJ95X1f6JRUoFG15N9erX19GXKYSVBJxcVQJFJsdZCf6jgMpDhZVk",
  "key1": "2hG8oZccGWCFHTt2vCXyo5fMYXukp5PKkxH13qHwvYSdURGTVHQW7AdBaK3yWJgmfyuSUYBRpXuD4fYmkEcZjrvV",
  "key2": "2ahnqdkHgZdyhYA3ZQo4PYTp9fh16nJ12if4r4gakexvETmLqseigkpRgWFoTbm65SdwXAHD8V25MQjSnd88e4C8",
  "key3": "2kegcSg2s6Fxv4VpdKo6innXpDMYAuNAF9JJcpaxXpBRdjBdP6AwpnWEseJdsJYgSCFYBL3dq3cQ6AN8oSYEne93",
  "key4": "2VvMeJL747qHg1TMmXAEDY8xcaQ9M2kkQ58jMt8i8dRsN9M3nV1CrM795UVK6RbKdWW9z3VogfQMJXs7wMCFyVXA",
  "key5": "25EfhFJEw5DB2oFDHTSk13Kp4wnZ1KweDVYVir1qfbSVbEJLFzrJBDVFc4W2AwY6APaNskH7WkXfvyEZe1NGveeS",
  "key6": "4MypHQRmd9hDfsKCKXp7J97GMDJsUaRkAm4GB6Akf6nEzzVukGwUY7SBaZsFuJs2V1813FPNjXt4hPdC1QWG8MUV",
  "key7": "4kYn9ujpaJ2H8aQ3DmMTBusjXpeRcZxBd4agL9akejyuSWsm2jV2RLeoqXy12VpVYWnq9D4EodxTrRFJDUZ3FzBn",
  "key8": "ZVvmmD1fJY6jq29hofWDK6KKh7oznTpUMLwBoaaBqQzXHwdHLJQtyzxWDh4QRprsyk1N5eCpK2LEZphHu61TFiJ",
  "key9": "rtFYGF76XBFqqej1uCkFXZg2rd3P9yLrwA7mf3PWAJLvYskCmVRnFJMR8T33Ucx4m68yYbJ8TGKcjbcTHm4vUtS",
  "key10": "2QzEfqM9ZnHS6vsMj6KRbsTSGuoJqjNak6Z9f7DY4pvFGiTeU77xDxCuJQrHp6ozxCtLY1jUiYqJG6LiEAYV8Dj2",
  "key11": "3gBAvsqkCBQgAKbnL69DQx6uhSBbBhe5UXLSThkmm1ZpwedTrGdfEYf1CKJcEV9LcCsR9ys8RvcC66LeC1JjrCr5",
  "key12": "5tuQA2DLq4DfgTojVQfnYzMoHEjNFe7DP59NjrcWkwosAvdKRoueQGXaesj1eeCw2HtNCT9ueU4Gk3aZYZd4jw7y",
  "key13": "44ebJZJzfD1rLshZrZAqfMivTmCmD9kezTKP3AD8k4ExDMRDxG422djnYkkQmHpL2p417EmYBSf2HHrkhmkapNC4",
  "key14": "5ZS72yXX5HkeqJJAXv3gjXK95TVgsAtjB8M5hNxyub5muGPo5NVer9r461jwxxrxhDi82x7FXY8s39pkXvZ6j1Cu",
  "key15": "5y7eqPgJgwr5RQJ5Bj3aABqBv1CmCNe2rZQo9z17ZwfY5xJsnzGbLgZzEeLW5n8GbufsaA59AtCgxEzJyxGUWvJu",
  "key16": "3rFSQaRFesJpaKmwKGYPyMF8tzS4NXWQU8CWXJDsfwkpEzXiExvh5kE3AbkdoVJxxe7eFuLBWJzrRoDHJFTheKsx",
  "key17": "55CodESHvowqKyHXewhjK5GQANMAV9rtnxMRmaKpbP1m2QP6CrWMPi9p25q8P5yzCe35mAvqQnZgoYdvYvHLeoTm",
  "key18": "2TY1gmszKdDFeMLmad3Y7nLZ5tEKVmSFdXffzZJuF8qzv6dtnw18kbCUsxsiBXWzqGTcdxqBKDBt7VG6PujmNaQY",
  "key19": "5nQ4Qo1oxFXZdAcs2VubMxJVgxxWujEz6ZGmdJiC4YuD8iUB9zwnnZnphT3SQKuUrXncuf6KhbaAVgh1KVEXVfo1",
  "key20": "uJjXojJfCvyp659ueQs1tpoqjBgG3BLcNxtJQZkq3pwGq1Z9ZpohuhhndLLqtoDJM3WnSsttUvRb3zJaLJg2UG4",
  "key21": "5utVhvyYrNWvTenXcwzEkwuakma1UJRf2TXJKhu9X5yTUEXw9iQpduMz6ahory1LK11z67BsaWkgoLDHihacHauD",
  "key22": "rNY36uKtNoXknZkhSXhDoVa5wXxcSoFzXYjiBtQkwf2mqf9RGhjtBMcLL4iR8zbwDryPMq3UU9sQ5dG6WhJsxxC",
  "key23": "2eudtpEuwwNCgePP33ubMETx2FKArqX87tNHWbCj6HNLNxqE5EYvJC68iXxUBtQgh4NbdDuDmAmovLXfHcmh8DUr",
  "key24": "48a1fKEXehzEMdiYx7j5fi81dQpDrrtgW9UAcL8DZPm1mmsan7Zm6zWCFrrkG8SAap7d1teN9yHmJrSuqKfXKex4",
  "key25": "54oCXq5Erh2SRncB5bHiprbHGf5c4MyotAFGk6PCoFH8K1fmFLHcvRHFMs7FWRJTwB4cR8EMVFePMC2TWpSRAMbi",
  "key26": "3PZJMMwfv1RJuP1BZDMTBXUdRzKv7oCqK4zi1bNrT8T62hYngwyDW2i1gs3QQP6GDYQYMTmB4hRN9mcnqXMtGMx7",
  "key27": "3z9nhDmjQNY3QVtfKtqUmU6khcyb2ZSDRiEgGt5J8p4LSxJJxBELaw8A7uz3EB1DfUosj2swWPqK65icuqbVYZxo",
  "key28": "3uDLk1zvEooTvPgDK5Bb26VbHvUgrEQ8WpDEAiDcJgTAYn5oUnRQp8yoQoueHRufis3fhGLaQMjTXvRDYoNLxoBV",
  "key29": "5YfsiiZMUzx1CD8vDHSFr4ysRAqPqLawJx6fv3iZXFEwcTXa5iPLjYGbxvL3frpJgUWpZwv9pghwZBq2vVVV9Mb3",
  "key30": "3S1Jy4Rm7eYXj4q4AwPZ3VsCJtHefq2QGnNsmT2HGqw9U2WwutQjAdGjT85zHsUs5PRqa8MjoWSbp6XaytBu7rZs",
  "key31": "5QiFCxfvQVM24micSVdHLP2i4RMibzJNFpCuqwz3kVxhzfsi1gTgpSMcU1yu1Kndq1YpnGqkhc3TbyCcdViHnTbB"
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
