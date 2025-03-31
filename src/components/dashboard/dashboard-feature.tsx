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
    "2BT4UaS4bSMwKvP8WrPFUBVzDzkYSMgiKj2pSX46iQ7fqdvvDwZD5pofmKDkP4vLnKRikT8SYFY6pdUsb3o3ZL5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GLz9QeUkjrVyberhnn47NWd6ZuFrr9BS7PSeaPcYyQNff3y52mDCWEXpRnmXxK7FdS5f8WJpzZpokXa9TWEDA",
  "key1": "59DFBLBo1m3VpUe415mSUFhVbu1hN5KCjkHry6yRWhHR6fiGuj72bMQKpLcyTsnkum1fgFM57eeBxSkrfud9Eyos",
  "key2": "6k76hyN7jPC6TEP3zAD454RZ6SRa7mEorZLaVKHEK4vtvKJpAcqt7HGtiwarieqhgRxjRMXMXhhPBms5LbHPXPK",
  "key3": "4qcFJD7MYiFMKPHb2NZBrFE28o2K8jJ1WKHzcqDKb1bgWZUNi5nXWJT8vNa6XtBT98Sez9h1pb1NGMNB4FADGs4u",
  "key4": "9xmdDyBAh5YbYRMrpToJccb3GCRbu3YsZzPCX4EX3mtiSyLgqSmw8XXCn8NM66FYnnTt7L5U4QiTH9HigG2kHGD",
  "key5": "fdX36gvUA9LVZsaX5LrDLEqMhegYrxddWcAeN9MKMFGKJDGLAukdPjkZc4q8JsTJvZsTVvF1fPNkuYwm3ZeEeyG",
  "key6": "2Af4mL21PMKNLfKwEReBMH8zcTKKt8DrzgZwHSuwuC3akGxF9J6dh9XtVFgtVZmex1kG2ax5wYzgvqi1XZuN5Z25",
  "key7": "4ijm4TgEHTBi53WXpAa23kd8S9h36K14tS7wcLJqyEBRFeVMu7qjCqur9YfaacKN5Xnq5WMoio7ki8KEocvtYgRQ",
  "key8": "3mEvBANEjtgjSvmEgbAkYNqUey4EQ2QmRkJGABrYHUCreuLFLWEDfHoRE68RBCvsSLcteDauNV1X9FL7ys9hK9fQ",
  "key9": "3aoAaZKgGJVx2Uk1nK3YrU5G2BiG5DjseoQQcKBsgoZ9n9WTq1CP7bCHcm4GtySFip7Wqq5hZnBPYN3gzJdEMdfv",
  "key10": "kvg1DNVVXzMvj2wJJjVU3AMeundigUagRad1inNb9hY86oYVwvhvxSBfMERYoaRTrsg4DVXcksyMLfYLJ5svvWX",
  "key11": "5b14jzXbXtiw2v8qNSVhcouBVuNxpyJnVatLrbcqYU8EBPCYseZMPQZuhwF1ztLnYA9kUik9yAzXCvbZPzYFLcAA",
  "key12": "3EyTBHsahu8JiBmX5w2MQUjcyMgsetzhAGyM4Yb1XmJNTiD2eUxJw16qGd4nuTEuSrCvC16Msi1uYrZuXBH9P6pv",
  "key13": "38TAUTEa6oCPqb8xGZsbTHRxFARyzriRKFQqdEvi5FtkpNsabDy3kFKzEw2iXHkkoJ4bKPT9RT4VsHDt4HRtqKLg",
  "key14": "PRjQuyncSHCuqZxpyss29tQ9ThpAdTHNjwhMFZiTzMUvCH49w11PrgQZb7Cdr994QfJAWbzDzXxbSTu5NKpm4NS",
  "key15": "3JVEZPPeMtXCDbeQMy8FTuPmriagmvdWwNs9bEGGZK1MRtNj2kw75btijf2i6Cnjmj34EbVMHqkPGZGXBoSimLPb",
  "key16": "2mgMMTbQzi7gVNfxBn4NwCQK1F8Rq37EaHGqifB6Zt18mFrU4nbYKBvbcm11oawLJBnGHrYNzjeZv12na9TiZ9wx",
  "key17": "2Bt9xux4SwYttnAk6To4UvP3bbHZeGs1JQ2dXvJQCN6J4AxR5mvZPDd9xhAw2xC6tHyQHWvu6LLSJPNiMpDUViAb",
  "key18": "5UGLa9KuKv1v9BXzgqzwKBWBvVvRhzdYn1Lm35Pya7uxrjEzsAV5Ua9ug3u4ncq9YZAvKwnoGDFAehq4ury8A4LE",
  "key19": "3xcgm5oAteUR2D44Lna1gm5oZuzM3kMyssTdYvBq4TSguazNTJLoePFfPSrXH4wrWRmHFddbADGPZ7jw6viyNz98",
  "key20": "2CrhCgLFh6oxVuQdUNVP1r9Ri6o6pnmqm92pCwRgrRjsXXWL3ES1UcuMrErV7tpFLoFz7tSq3G7t3Ys1tTLtwHvK",
  "key21": "2T1cQQ7oHpKw1obxE4TEY86XgvqgoWrHP7gCdoiNzeqjaevshqKtNKVgzqdM11i4hKfSvG38AA6Q3Mt21ArT9uNe",
  "key22": "nPczdnLTEFk1sW9ZrjwWKx1NsqsiV3G8CjsctK1k4f4QfUX3NHNugU4HHf2xFTy93e3uswS8FoVBCvtgPL3MQoK",
  "key23": "53JsmxTmRTT6adF4KMFnk5ZS2inYB2C7pdLZegV2URSTVy8FTsYSwxqBiwmDN4m8EiK6UJUeCo1pr7rSFA3awyTF",
  "key24": "jPDUy6YHxnC6zA7UxgQTajcjHSUACf7WVraCZmE89jP7bbx73yC3L6nNhfDK41VEjJfuurDb8x63Z7oLdRASayq",
  "key25": "ztyA5C3veA4DHQZA2Yhjx9YVYJaaU8ZjT5eagiYuVcxN8G3eXYpjBmZonFoWPuQ9hMs1KjDuy6WBhSHeiGnVLwn"
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
