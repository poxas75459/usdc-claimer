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
    "5og9m5VU7nU4UAzRqgkVqUVAutzdviSkzktD87JScPUaNCRTT9tinf6Rm9BKvduaqp3uppMPdgzMjjSBkkDi9R1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhWKPCfKCLVkn56KqdDUMSxw4vDd79WgYG5GGQNVkYQULbqd2eFhbfrgHJH9bKoUMGcHZpdZwfwaVSKFYb3AbKc",
  "key1": "5gzXiwYZgFe3eyeh9xjNr4kCpCECHLPtsPvc7Ccf3EadLGzzf1NS1CaBG6QzgVBNNq6ZnzYPvr3LtZpPDX4rL5pA",
  "key2": "2XRZTyYuz2JdspyVKUbBhy5CwbEvMA8bs29rxY8kp3W235fm82mWiQvkTwbEpMsDJf7QWtQFwab9PKLgUBwseBhq",
  "key3": "5W4VUz9AvbrqTbCGWzTBPJhAieK9extm4NZxbUSxctxUstrqKTEBbmpimLJDsFXjWa9qhkj1PUfmGf9iWMHTbgiG",
  "key4": "2KY5FaFYCJgsARLTFaC5kei131BN2VhfQMahYt4yJWRCsmogMgeQCDeM4Z4rR9ozz5TsN9NoyAthzxJRY98xrnzn",
  "key5": "3U6HpjEBYADwED1SQ589FCwm1kC91oB3gwXhzhxSNNGeTEDCuTKbLs7pXFCWuKQLmodFmY7HMEmPr4hpwXkqR9nF",
  "key6": "5ZpwnGAYKJ1ndN2SdyijxDwSQSp8gahB33wYo1foWV7NVcVZ2V3v3SAvyTJPwYKJ1aaqkkPRqSSqGTfRjDZBDUKW",
  "key7": "HXLUqMKV3ZAYBUYK6fZts5yokstNhUnVCRhCoGpKZ6ES8nchLDr5PV9wyG1zwCn4oFGc96hhbX3oMEr7FkbQGo6",
  "key8": "3UH9woA9MvkJNKbx4vLWoojp4wGrMMgDrnUhpqbXNM2PDXLSzTDVXz92Lf9HWnSQAGndo8CaeMz7Ajg4ruQB7ykh",
  "key9": "4idYgYGnvMcMNkxWuSYyNuN5xYWaHa422PksgmVqxqUsZ6wDFWUKFTkWJVnEbXfe7x7iF2tinPdhgSqksjfU74Cj",
  "key10": "5PrsxJYPyHTzCnrAVJBaHok2X7BXdMfpcQ8qT1H9bb5JSauT5n9FuJB6CN1giy7UHZ5kjA2gaZvZj11qZYS6umbg",
  "key11": "LiY1kWDy6F7ATpmzDgkn3U31q8mcQoS8w6utuyjtPU952J2wKeYK2tUKm1zZUnjeMLrcYZrdvmKBHn6vW4c9f1q",
  "key12": "3ReLFnN4PabDJN1KVWKFARHQdD6Li8NiVwZd1yCY2vP3y6rbnuQgzr56Z1TeDTQBGdAFdYa57zA8niZvdE6e8v2y",
  "key13": "2zFhHuySC936vfjUeN2J3EEeya1fNqv1op1h5WL3L93yipa81h33oR3MNAhT8k2Hu3JsB3J8r59KWVDTV6ZEcD97",
  "key14": "417AWijcKpkWssckBnDYgVZrLUSiFuGDjeNUYhBqk6VJiLAwoAQtTE2AdsBLE2xi5kaGMnNPGaydQc2GtVZz4gTf",
  "key15": "VS3FmzLKAXPioMkiZUXJ2gZDbr66Cjgm8vNzb99tbDV4f7GvDT1SMBtK5JP3QSxqnAZLYGoFXQ6kz3yHFAZuRYF",
  "key16": "5xMZU3cshUsU7oFbD5hRbZPaGPXU3ewFvN8YF6JyKodQpD1xrUhHpaaj8Dh7tJ5LYMS1zxHtEc9URWCFJqCLTjLY",
  "key17": "cN1RakydTDkQ4oEirMZ8DWZrh6aadze4Xz3QiFdULyQ6Eme4xUpgeD4gvbR4u3CsXiJGgDYMgWYRp4ZefypBfeG",
  "key18": "2Rt6ooEWsuAGQxGRKodaQLXRmMqz7z8gwnJNC76Pz8CysXciAgsMZsFKPfGGg2NdUKrMepExmQ9FZnneRmbrMqp5",
  "key19": "55yAWGDfj6b6rYCyxHAHMfHWr4Kcd2aHmSAFJcwTBDG7auQgtV3sNSi9YreDraW6LDmHzCGXSrLHtvgGo9HQfego",
  "key20": "5XH9y7XLEYMN6JRchZC2uDQ3LQdRNiswHw1mKcE8G3NcTLn8RffiXHRnaskX1ohnj4wiV4QrCYur82ymZM4JQnF1",
  "key21": "59LSmuP9TPVQC8VWzFadS2UZEPWpfZ69nGAjPvvNk9GYfZ5RcuocYye9tdghQeqNGWfc1LcrJK6wjJFyp348CAgd",
  "key22": "2aZnJN2C82RCCk3T2znXEcVFsUmt7RzcU8BfSexCtDzfCee8vGeZvmf5fTBZdS386tMUJqCfqmqwh7otGoxSPtXv",
  "key23": "4gLeVreB2DZsgYXtEopvqmdyb4KwtZ4jbANuJJX5zeZEpArG8G3iAGcqb2M6nya9N8nC9suzNKCvFhBQ6rk913Ww",
  "key24": "3KWThg4CUmcCbRG4u7e3ymmJAm4tGRnLwDUKPCp3pTp8Vvm1bpv83qeXA9FvViDU8Xk4W8WNEs9asBTx97RPTfom",
  "key25": "5fNKH7sdA6bYnitWRbmmTjEwTKXcL9iKYpTpbgepyVttKyTbmmDBwEE6dwbg14GmkraBRjW6aowJYgRAhCtfhpU2"
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
