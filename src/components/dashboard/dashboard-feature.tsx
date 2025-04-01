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
    "5DrdkDqwhcgMwwoFALJzMq48QMwmH8opVWSBCfwtjC9p5BLrjPSU7z3K47dJ2vEPs8P9tc9GoNSD4ja73ujHCndZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZcioezYzMNCTjXk1ZdRhhZm1jNRP5DZt4YQExAbUN7zNawN8xdq4XPwoj4SoupTDGJd1UJWRwSbZ7hiY31m8k9",
  "key1": "26rf3AHNAESEEEz9fyuRXb8VqN7DkfzTxn8ydS1RFR9zMQdphaY6sKBmFcWJaC6hnbK1iBq7pxGBY4hmVudwGGuC",
  "key2": "2k8zRESjjCmhcYL57FzxYu5ZzJrsSHHxBk8EFDbbQ3sTzVFYSV1PWisVRLFpuVbq5okDqep2ho3nk6QtU6H7HdkD",
  "key3": "2Bun1dXspVneZ5D6g7Ys9vMfBXEfKngSpnr5YkvWRQCKMo4VPKRcsUfQmSkkwaZEAGrinKR14D7Rr2q8dpDmJUx2",
  "key4": "5YLys2Rja8TfqcmiftoTo81MKRATwRnZqxduyg6ZCNeemanNCoeKAXkDvyG3bfHvteKsHtoGWrjcZGQZrEVMfwgS",
  "key5": "66jchhpYXLxgF96Qre3rirgvj1NUaBiVWmLNAzgWGXGgc9o4g6nNqef3LkmLBFnbQgmznzDHvCKeoSV5q1EuMTu5",
  "key6": "22gQDbM2nibxxZTPeasngmtXzDymkadoe6LjU3aHxzoPNnors8ydkCx4PjF9UDDaDtu757Nbw58WbBvsLUedJuPa",
  "key7": "2iZgvFmbpsTQby7i58dsRqiBZcCEicUxknbXjngJPa8wYgFNMFP7dzKTxRNT53qETK3gFv8iA1gpQ6wUzpwqP1fq",
  "key8": "3USQB2Wqygh6wnkHsCcno6ie1XVW16XMsy1VeWyKBunTfkAd4YV1MzU3nKznvChY9aMQJgfh6p4vGZ15SYPwCPR5",
  "key9": "3CDBWhMaqYRbqhddVWzQk7MdTCisZiAqTLBoxq8MaWtTCBM6k2d81z5M7EKyUqiZUUaZoKourBSECg7Qtema2FqR",
  "key10": "2sf6B6TUp4JagyDnwMLdpBq5ETbTC5fiA9VBcgLRV71KJwreYy5bPm8HYGEn3BShAAwsz13YjGK9Su2FSVo8dUT6",
  "key11": "3Lxz4KoGyBg5oPzoqGow92vsJepYaJ295mwUyZCZJZac1SbtT6UbwmvLEvwcbuevt7KfKpZPhLcMh9PjmvrGRCs9",
  "key12": "3mrStTe5AwMRcJow3TT9EQ1tjuKTtY5EwguzkHAJDdRh5wsdCDzQPuS2pXrGoeF2jPfvRs5K9F3KxXCVMXKNnr8j",
  "key13": "36poEUYHrsk9D2Uf5cbeaaP9DAjcxMA5MnGWWLkVbdhFVwGPDJmKfg7nBkouXuhog5ekyPzkBzDtXzs3VHy6vYVs",
  "key14": "4Kf9aR5ZaVLbWyEAk2dEdhtGtCwLFntoxvXTmbWguuBpxmGJ6rHnA1iHtx23ZvjBuYn5YMaUbAZUhnofxgaUFACd",
  "key15": "34dZPQgiPaxedDdHj2Crg9ApV8XFS3xKWjNJg3NkfcncKojXRrovTctM89N7bkiNSfSyoxNip6SySJeWmzLDFaPH",
  "key16": "Ep8qyEj13yy3uUdcWzj4iG7VYh69nHn9QNPuWhw5ayL8iA2QwWr3TUDAZLtAgqxvupVoJr7jy1u7RxMyc2Gcoz3",
  "key17": "4qvGRsd4nK7hCSPogsxXxVVbZ3HXwbMaPXbtKLUbFBdzQtu4RaB6vXhPsUJrkdkxhZL1JzNUeoQnkgENNKnTXR2F",
  "key18": "41XTBTYJNq4ZbpejoKasJNxoHtcDwyNfzjC6eBTzP9A6CKuwF2Tse66GQJJYMYSNtqy64NmTbVGN6qvT29SeaYy",
  "key19": "4CtGpako95vZLtcoefWcawkbCq2H8xKqKWiFhPHATYoZv3fVwDk5JPCowyifNh35Ht9pznNk3xfTQv3RwUeqfeur",
  "key20": "5wNxSCH3rhCozNfb3Z4c84iirLw7tnJmXBpeQa3xKuDZ42gMaJVdigK5tive3ZQyouQARciF15E9iGxAAyHCps6",
  "key21": "3KMTjyEkAAJE2v4ngHNkUCbZeatydQ1rNPkxBx7YT6Z9JMdhPH43DsPhEHRxHPLtMmxR3cHu1fehJxt4Pf7AgkPh",
  "key22": "8TjdNeb1WvRagzwDUiN9P44Zi1e2pu1ZXidXhkMSdidbFaJ8DEqxSzEvPm2QsKqVTSpLLtkto2v8jf2MyCrHaPn",
  "key23": "2JjhnGQ6sEYWVvqGATqgQ6vt6J8giS2na7Z7AFHLYzY9zKCmfDsjmc5U2acukNp3Yk23rgZH4VLmBZCVhpM9z3Px",
  "key24": "751zP4cYT9yDfx62E4PP8zeJdCiCGN5Fv4nzA457v6TBhwLCxboUrBf4oaPcF8oZyh1S2q1uZiZFFRkoN6Cuo4R",
  "key25": "3hpqGWQDHnAEirjm679KjzhUodAQKxso7X1gar2fkN8fCBWJWhdt7e5w38wuJfa6HBJ89bEjqjFpzWdXJ1rhJwkA",
  "key26": "4zCNJZkhMq4DyCShoGc12bwEpwbNvqjKSQsi3iTHinU4yNVwKRyjrivz7K9ZGVQcLaBC6jtSjN3TKiYHXjoMrces",
  "key27": "2EBNpf85R1Yce7qm8qZvjAiLvxLNiMYapHXmRvaAaDgNHkfzksoyDveUi82cK68JhKLfTNYwUdt5wJkZmD3GawM9",
  "key28": "3f95hm1Czot99HvmxsQ5sjB2JRG23HzfYAVKrr8gv9UVGGsquFNgDQCzHB6rE6bWgmaKoKdqt6f5MJax9tJV2qdM",
  "key29": "2efcEAyN3sfBCWmZLgurst5M37pbm6QSgEko6VnfrjyFcbgjgad65VAvaoRTtqcxv2oGpnfLpg7zK2SnDfgK9tfL"
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
