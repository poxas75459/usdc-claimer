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
    "62yjGXPqMDVYF1MYEXBvdRAcuRriWfVBDR8QQurbJfe4w2xKmiEFEbjh5XNkaMdJaNvxmKUv7CwuvjJDbD5QPX7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JTgB3JQD81a9hLGMF36FCJPokZeYRchdweE7Txf8WNXFNBW3oT1kfE3wbQuBdgWUGmUGewRLQ14mEetVksw4KoL",
  "key1": "2AqcxieeALXz24cRW1wwh46UNyrvWXEiGqYfFC33QViyP8s4ZFEa6tnS5i9oS4jPPgcAUi9FyTr59ftuCwaCuUhi",
  "key2": "3XkqLjT6FuY4xoFmZL79u6YRYGu5sVifEBTmmRZe7t191XzMWNjyV9ssed6otG7WmVS3uCRZdtGT82W3kZvkvcuX",
  "key3": "aFGwJ6MNxQUdUd7neVr1tZQ8hhCYHkTK4HgV1RR2KLCPxLR3rd3HmkSTvmFmqpqZAW3GwuiQByLjFXUpWADYe6S",
  "key4": "3W93UYSppDbAUci1gdWZ5WjTSREBc3kRS8jzUzbUKhnMCbMuWmaYS57JvWTrhto8rqE1UQYwQjEBfSU2K3VSaNGR",
  "key5": "4G8hXPNUuG5Pr5S2kUG7yRepHHsnH1FetGBenwYRmB9Y4RmD2y9q9kzz7JpG8SSoyQc7LQNvbQLhhG9qh516vbeV",
  "key6": "YK4obSxDujom8a2ZfcB8Yn1nUuyXMKpU6BdUJHdbQPc5UqKb7Zt1kYzd5VVf4TVR4jUnPyxNiHkVpVB3JEbAwX5",
  "key7": "3xR3Pf9KsevFXVPgzL4ebBAJzY683rF8tzwtJmS4SKZGwRSR8fWEiuRDsmeDk23cJwXdeRFE4dfX145YR528ZUQc",
  "key8": "5yG73CAJcbh6WJVNT4n37skFRyxXkrm7juYMbFE3JCEnGBd3ZfvSqSFERXJkYU1ybC7RBsNRmnjuhk5b34pe7ooA",
  "key9": "3Wr9ZSgqftYdkvk72geC64AeiucAQc1MpKmLwujARxk3XH6hb9B1eS3Z3QVidTvrL4tszTgnWDyq2fa1xUVwhTq3",
  "key10": "2dyKWQT7htbPgkCv8WvJ3JeKi5bDBk9ZYkhdyngh3REpqND2YudTnzdtLy1GommT85FA58SoS7a5hrSjfz6oHyzY",
  "key11": "414WCKBdwUBq9YZs33efNGVetbitMmuvFrAvRKcMqRBLDvK1UAU686artFxSXz4AfF3M9peYrnqsHvpcwGQHa5og",
  "key12": "2kWmDqwweHhKJ27bqcnXN97EqJp2KhVaBHyZPhftcgWh8Kp5kENrEJ7bYpbLd9wgkXyt3XCsPVkeSLkJvBbVpNi4",
  "key13": "2APK6kA7zjDJNJ7P6pBNUXWHrh8po5fz4CDXQvdiYp7MamGKyrC5KDLnhzEDYZiHLdK94acjBuVnMiRki3rLk5Qj",
  "key14": "2RqyLbxo8a6Z3BeHBcnGCakN2Fnwb4psdWtvJ2H5emrYbURdAvNXC246Sg8AGVzV4RaLhHFkrefuQbGZBhK7ZsbS",
  "key15": "oRFBhsLeNwHHmQQKfiL86jBrndTic77f8N7KnvWp4HkDs4AX1zBB3DNdwnVbnmXvzP1AiJCoMuBjNBLMJann5uH",
  "key16": "5Gggsv8b1XyLWEZdczaT44UvwdHPWAbbczTjAvEckGbfezCzaM7tm9TqfG4VnkWRfQjuXAsYSpUFHjy7qRc6rXSP",
  "key17": "3NfsiKMkN5VXGeA8b4KXsD9fQmNkw3rkcjXLXLQQdAP9xCeiJG734VygG79SWeMHUQqwc2zkWdBMjaUZkgq6NAP7",
  "key18": "2v8uBpMQVPFy9HtYTgm1YQ2nZuYzNGDNCQQNfymkMMuTWphAfiLhwDUQ7NJYmDHzKmNF4aULWRArFa3Se9q3qHju",
  "key19": "49tuaCdmkJH3DYKNeKRzKje4VeLL91WaD6ZecKG8payfqsqHUD7adenv4LzmKvUDn1R18dd5peZsPUs521mRZAC",
  "key20": "5bQmncWTmSZuFT31Bo5pex8QTq4aECGuX7bYxAXujGFN7iKXQR2jHBJCm6c2y8TpxZeqGKMwEmffqsKmDLQJWBNB",
  "key21": "56ic8NN3fYw6KnJZaQMPdaBoDTtHug68qHH4KRWuDerR2ELqPoE59aEpTdPDQVaSqYRFnbzhfw8heMKEa8v5wFA9",
  "key22": "27XyCifYpWsQvmZJXM8xqxvMW19iK2EdGkYGJY1gcqLA7V7i2kjHACe4q6qShQH5KrWekQgPWYvNnXKhEtLwyT1v",
  "key23": "4J52hb5R8dR9w5Px9q4Me27tGrgHNGMBSTN3fRoVndmxcSRSYKq9uSvWk3sb8yXukvGFfqiEa9Fo3hyi9tMxLcqH",
  "key24": "2fQP2ApQ4a2X3g5FTr5jTjFxRzAx3TFrvBf7eBsA3MC63c4tN5LHzVESN5ecffef1ny1Npc5FqfSp1HzBjBztgME",
  "key25": "2Q6FfBZF2T8c48mtrqA7KCK3GWqF8DpanShhagEhycqFqYaTvFwvDM7Fxedna85282QnxNX2NwppGrSy181NSu78"
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
