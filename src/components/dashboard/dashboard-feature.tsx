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
    "58vdeRS7LsiWRc5Df2q2YKmemn1Q6h2X3SXTRCo1CSRwCAE7CQYPh11QJNKyiPK7JExqTFF1Yk33S73Vzqo2TKMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qJp3pm1Fo8Z9SMMPpbVSaLC2iLEUy2tiYH75zbYfm4bx1mVFJC6HFeuTVQtCBrr8XSmWvZKFEPBSDKF2dUxpKs",
  "key1": "5SYLhxZXtJjnoKiMV46CC2LK1ocf3yJUFqcN4LDgEU6ZvdKgrHjqM2ahZVCPqmfeaHFT8yvTrsnL41hEZrhSxaTk",
  "key2": "5q622GZQkSX4FYvnaQNyHpfnJTANudT5DzPYygbHZb9fFeB5WUzJgmL5jaApNKPt775xYUCbi8W2Bx69P5Lq8eiG",
  "key3": "48wbdZ64Vqezqr4LwmqToxmzm3mfzNv8LAhu5UoqHfpe83oC4FuU375L46aJFNvSLq28Y5BQc72YkneC51FwsXD9",
  "key4": "2rE2jRrrbRYbVAr1uowx5GWXshNwYHJuxpgd67QNnwzFHD59Wn2cufayMLzZEkaP8CAkXRpCSgEjxJWihA128RHU",
  "key5": "2afodcoeTxVGt1LkPuFXFsevFVLxem2yhcqkW7saeeDbb9crixqBxHUY5TcWmfH2rkbg1euFFTbqfBAKqheFvah",
  "key6": "5sBmSmhU4G2upRuFoGrz5Y3nQAG3Wd6eZEheAKtAT2QRPM7TVsJG3KTqeULTavPb3ze5FhMjL1GAtNMaAfvKjVVE",
  "key7": "2dt4N6hURgumMFR9hyBTD7JQFf19hKSNKBRkMTpvG9uu85NDVyMEDxhhZHDDQqhdVkscV9nrvAo9dG8NfdXMb5Vv",
  "key8": "5CrKW5TyAM5cCyBg6Y8ufXhJ1g4vuBpeBNqu515cEseraGyDdw3oov8sSinb426sfnk2WCCFSa2dhGe5odPaa86n",
  "key9": "5SNW7VuoKHPnx1fEpzie8Vs8Wrn8pxXo96K3dUXQh4eJEBnKvRLTKEG3SnG8Rd3x2H2BCezB4BXW6sY1goBQo8JJ",
  "key10": "2b8nNyUtpEMKdM6r3t4ioQJoi8xNSGW2NRQvyoeJDEGKZZWcAMshpraFmizR7kMKEu2h6pLweQRBY7bytWoDbXe2",
  "key11": "5Fh1ozwQHF8v9tZVtEBEJkASFKzWEn9jKwrZNfjzC9s7rESnnF5dGRyqh2VXcvnu4ptWhSh547wwR5XQa8evPntM",
  "key12": "3DvAtBtsCh5hCEqWRfZAa2BcmWg4TodVfmy4kzaexLsjWSZk65EnGC8xCJeyvDCWuz9whEA7NQpTRWZnwcgTtfTx",
  "key13": "361LSrzkcwbEVh5nyiYH9FbXGq4fwHGgztsmePagwPnDQcrQYMWFamNgsheAf9E9zDbP3394k6pTrZJ9CZx48cEM",
  "key14": "8Q2yKrEQ9DwffyFDQLSgazUD4k9i5cVifzgr2bXW6XTzZiEY4p9uhP4L3XCZ644BPnFh66wPCZY4hniD7SC3HXB",
  "key15": "4toBX75TCPLwKveLmCsFoRUt2zrE8u7NQEVcNW2y7BqeZxxneM2VRWvm8pfxa8MkWwHZCkAhgQdHkp1CEBesYirj",
  "key16": "4SRdxKJgaNgCUD6bAFhF95bCHuBPLuCXSRFfdAK4HxgqwXRsqDYc1dZ81Y9wnRQqMamMnLnak5ZMRpubNhTfP1hB",
  "key17": "3HCdb4qMLdqVjovTd5x4FdtRZTTdPe2u9HA4gtUn4pWtYfGTcdQ1BpuCWnZY75Nz7WUtWdRmRcNaeZvz9QyWgik1",
  "key18": "5KFnJ3AL3CyDDGmxtWkngpGF5TnVxpZUvFgoSdwuAuttXCnxyjdwYrRb5TnMLbv9iUZjvDY3byNx2kjQ18TMAyrV",
  "key19": "x4ycsJggVkZ2qro17E5xfjJQfCAAvSbZimxAX762KmzyTnFR2XNW7XAyHYVz2nx5kqjbVPQ8mkLGx7d1BTKVbW2",
  "key20": "4toDXwitTn3BPejzRSTydyTDxDaXZjGPD5tcCP3fhAaF5eff4LuECxeoM9H6dNNzGcsWANHEYrwgZ6S4HsDDV7hJ",
  "key21": "3kd7KijNCWSY78DwckJvGcuC5wZ6RPrea4SA8vydYw3AzYRjvQxXX985imttA1Hs5sCLXM3mTXw96JMYk5c7kyQG",
  "key22": "497zgJ95EqY1At62158cwgYjM7DBmHCp7Y89ufdptYgkeiXh3E1YytqhbrmQS8XwSerX1SN9RePbjmhfscfLcX4e",
  "key23": "Bts3P3USZXNLLfQ7jypEM2h8gaehJTUSgyWVtYmuk5QVrQ4tB2poSrfesq1j4EBzjgv7puKcJMsGnCzFJ44Twdi",
  "key24": "3zncJTd1zbySPrjX4wmCuM13rf4tgfGFKQ2xq3dvTH1PQbHbMTtJJCmRg8cHB7hsHkEhYJkYkGLbEGjBpxzWKrAd",
  "key25": "3ud7P7sVx9gM9XKDouvEXmcz4iMhRR59gRYDzbgB8JxAiTNhLwwxjAv9SSCT3yRMjyspR7F6miSY9We1YFYXLo1b",
  "key26": "2H5CtMupbYnpSkzHUn9zYyojJXt1ahyzpWQg2y4uNsesUwjnwU2zSw2mXab9syQZD4n8CLKZH4JTKUqNNMAV3Gz7",
  "key27": "5vn2gtWjMnXvxrMaoyi7KfyVZB3iQHkmKrqH2FheR9NeErdw1B3MAzj6UXc1G233UKjT5XwUMg9RBmqA5rTsqgsr"
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
