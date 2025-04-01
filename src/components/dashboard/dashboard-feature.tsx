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
    "2Edb2YbSBTzWXoWr3FNweTE5LPqMhFdbvvrwoWJ7uuFDjQfXv657QNsv59wUpHbPUMZvAiqve3TcXFE8BDuyXRUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2abVsnr13iGcyj8Gwhuoh9EJ6W5QjWq8f9CdkiiZXk7QrhYhhhXrRvLA1zcbME4V4EALiKRetfCQCi71SCiHs5EL",
  "key1": "44YCgzFGLjrj6X7WZDT3EaENUvH5DKQDKYk2y7eE92yMKGJU4qXPozwi1K4SStwbjTXkAaAUmPFAbEKCmchNJXLq",
  "key2": "4Mvn4Gh19qosvePZGazdp6DPx6cKLF5Ei57zGAjwRjHMnezFPSZBn5Eq4ZRY6E5iDVAxbtz8dLXXrarGBxW7Bhgs",
  "key3": "2rnccvBXmfVy2b6qNRRtFDEEho6dKfzk1kaB9h2vMG7PLcdNKaNCewwuJ8ZK9sJNBqqqMgQZufKvwfqMu2REiZ5G",
  "key4": "5X3rnVDQ5PLA3iy7JYA3E5hNQGJNz2wspoRgAk11qAxVgur1ycn5iSfoGwmSRKXh3V85RygKxUGtcS9QyXR2wYL6",
  "key5": "24KXXc5tJVsZvp9Gp76Ym21hRoSi2ggTNrtcmQuSVF2ifpUXf4aTFpZ2bNUVnBjHQ6vxwQQ5EcSdYVH19ziD3DgY",
  "key6": "5yH32JLe9Rqukm4AxteC9kjwPeXPiBySXLrmweowozCZL7KXFEw51aYbJkZVTVYKzY1GVLdhKv6xzYo3zzmcc7QU",
  "key7": "5UADmGqPann24K56PWPajeznLA1JtqYNLQyf97oe93VZL7zhREBv26MP4huyS5A3NRibk6tLhfyZNjb7tdveVFES",
  "key8": "4EFk19PApmnGgoN5AAytTQkCpAxyZ1gk1CEZLmYNDYeJfXtMQxGEXMuuM2c4wdfGZFfYbDmFUzxCNX1daDuSmc9Z",
  "key9": "2roUegG36jsUH9sg7sjquQ1FGTenREi6q8c5RBfwCj5HJHdZzK7EAkY2M3htpESFdhxBkn6BvCDdETfuyFeNVgDH",
  "key10": "4QSm6BvefCME7uP1qdj3SMNUdyRtbnFbR9HbGp8Lq8ThWyzgHb5Ck7C4sYLCg9jehBNDNzt1fDPajeXHVoVSjfqB",
  "key11": "H8yh7TEQ43HyTkJYq3bAzgTEe5hcMRjV5aTivf2BawFZjNC4NeyTWF4sELMHkDoyoozEAY2hAxGwHYStHUnYK5h",
  "key12": "4gS4UFyXp4rNzGZkFhez3T2AbN4ZGcSv1rKioKov5uZf4M8m7esYhy4oRADjtxEdMsHMpDHZpLETLhxTpqUWWp9i",
  "key13": "3dzGYc7xfU9wWpzevkmscRXM6Uxp62iFpdFpFBeM1BR5K4GCGjiHT7Kvc46NwsPsSPgTEuu3TP3ybEwaYmQWkdts",
  "key14": "3sa7mYjzcC36K1udhPqK2Fk5SFDQb2GEFnHeAH8kRjcSE9xJSHBDxCMkQUXgd74pKVLf1yDSU31FxCt4SCR7FZ5k",
  "key15": "3cakogxDdpAgZUFEPZopSijTthSo5mt1T5wnncrWSTt46ob4KstzrJUkba74MoKFmze11DVYFeukR4b8zdJnrw1k",
  "key16": "26ZJ1vT1qFLRJedpHsYF9mKt81n4SNi79C3nW5JNBHgcsqQGSwceaVEQVY2vMLWrQALWHt8CzZykpsj5Z4daMVMu",
  "key17": "3mi6gyAD76My7mNTYRJAWkkdouLGH7HrXG7dJu73cDyjGmxCF62RPkYkaHurPW6hfdc4uBzSDgHdz8iP8GZNRECc",
  "key18": "27hFwSm3jf6uMCge4LEhcRZ2cYunS9eXujLxwLzp35R7xiSNdpTyYrypZvHE8QB1mPTnhpjZb6WXv4urUcozbh5Z",
  "key19": "4YyqMjK1S8qjJn89wyPmhZM9S84uPAtq8K4RZD63Ni6fM8FDDdv1ZjKGrsPb9KxjWmjHTXyuocjhvpHpKuCxtu7C",
  "key20": "4DbGvzGca1sXzgp2SwJjnPya4EPnPhxoJ95TyJRQ3fD95zsXNDP7Y74ttkkYvDYeBRv3pN5t8pJmsKhzieFnn78L",
  "key21": "21M4oeYayNv5YSSyYuWHd175eVnWHbJ1E4byFUmioa5UQgn4juoCygtZiLTX6BFMza3JZJfBW6TLRNkcP8P2NVH6",
  "key22": "3trtizFytuUsmpXafvXgh4aWMqV4QR7Nntr5oTeM8H4TdpGUN99hPHy3wAjzKQFESHGNRQwzjZcVKvA8biJ4mU6p",
  "key23": "33FLsp3cRh7UjU3px9bCkYSnzgg2Rs5srFpZ26tVq8wLZ6zyyXfNE1TvR46QGnjcnFjEe3Rezg1QnxbcCFbx1XTr",
  "key24": "oJtUdoxaqxdN8L7XUzJmFGbMke6wt9q75bjc78ebivki6N5HkgVY8QiUPNYggBPwB966GjnBBum21zF6MnAgypk",
  "key25": "42ZP5LoJvp4rKZL6gAcT7N69WcdpKoqKdi5oDivEW8nrkY5JKt9aGsooPgiLrfL6uu19NjxwhFxmtJHiGRZgPvMd",
  "key26": "3mMpzMAkZYK3dTrQxtwAbALeqszazC6FYkTCB9vEQsF9VcypyMNUXStAxxVUujTTNCqCrryV7SN8aEucxkP3HBxB"
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
