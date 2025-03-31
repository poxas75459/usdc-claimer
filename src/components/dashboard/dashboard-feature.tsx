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
    "3NwM3q22wQCZbZ4VWBypaQyvv8iaLMpsvuBQRgcGUYoQtUnVdbwnQH4h7cyJFGxKeupozZB7b4eeYUZFaQsQx9bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cvhtC8BLabjvMBsc9N8zuvDbcduWCazLwwvFgQa2pHPsocnF3oKGN8fpAEHaUzTZxKjUAcd6q8D8thjfTGRCYAs",
  "key1": "4ok2kbJ9pUyK7diMz6VtRgv6vAqXBnn2sFfmS8yuvuKLEbc1JkcabvxVSUpkdszBRVxLkbW1FkdtEY6WccYQ9Nnt",
  "key2": "abCURE7VX1VWK1cspzKTSZuNnqSnGC9xdQ6iokhuUybGSHQwjYnPJSq6sCcek3S6dfUVAChJaCUXcnjjyqM5RYT",
  "key3": "5qt6RP156vARaXTD9VRZsBU7dfQisJuvVHAXribTvegBNMupbMTenC8RVTNJH9EW95zuK7PkW5rnjDPehC4t4M5H",
  "key4": "4SQSV6hLuFq4q4H8mdjxjqSsiBiFxDixBSzpiE4tfDK6PXJseFyi8QXeBVgQ7vudXqXUD82MjjWwhRYJRET8MJqd",
  "key5": "2rFfutfim7dBMhDoz46QqDetG9kNh6mZbKef3zfkQAaJMy9sejUnFETZ8t8DDqdtSoo1gb3jYEDrZcgzEAkrCoDG",
  "key6": "3EDnBfbWJHXonpugdjXEJs1sv3XnSE7Fpbq4Cmsg1sWqbeVnvRqZYknESdQD1F66hh2AGu8yxecWQ1hB6BMSN9i3",
  "key7": "mJ3D1Lg6aa3NrYWRbmcUjk8KFL8uvv1h1RBQWaMk7veDEpWn5dC3Fo5iRu1WX5J6nMdGRwpda3mHGVGTQxQig5c",
  "key8": "56VnpfQREcEkpZGsEuJnqvyzPGZ84EKg8Nr9U3G7GT8A6k6vT8gwyjKYjTzdSDjyeiMPaFdKiDrBcQr6cod7QbFz",
  "key9": "3pap5cnYCqqbaVQhcdMkQNUskun7rWqVTcbSUXi6aoos27rDVSTPPttEeWdY5vmBewvB6XdAW6XneHkLV9YGfGB",
  "key10": "nWKZVGjWiFJvk2sssVVzY8u3C2a4FsaGNrBUGeDpGvLsz4ikHZ5DyaLEqr5giW64GuuMapSszVLK2i9gGpVnxXw",
  "key11": "4vMTYPCRJfEvG2TDMrMCKKaKTcGpUd8uFzWDUsathdZrRCSuudVxiKhvJennFm2hZpm6LtGuqZrhWgYNHRDpsN3c",
  "key12": "4CJoDGr56a6DWFzbFu2DtA9hKVpbS1C6WNHxKwm4vASVNAa5FQ1FTQ6pHdXSVpFWct4vriKUJsqviS6jPo24zceT",
  "key13": "2Gu3khp2SzHJM4GKyKxYEdNwVd6fs1NcjW5zrv1itBUizVfKTSaTQznF35aUg6iRMxZM1m9axWjpVxjm2NxeNtQD",
  "key14": "o9gd91BMtKWJW6LLJmn5U7LQg7ETkBkUvjrBK38xxowbpcbBXntW5Zr7dpfubDFycv5dp1jeJqYtXJwsrWZuq5a",
  "key15": "P4yhJLNBeEEVLefvZpwHmHv6SRq4kzBXBfSNa9WYaZyehskn6EXxSTduHmWyduZu2tFqX1N3PvCKSVr6avBPLK4",
  "key16": "4FA4TM5hetrJNjJaQcteEgW85XCXY855kSja9XVZyjzhgjQGUimgXVdAKGB6LgyNoLTAhKCDofW4vsaKgKs5eft5",
  "key17": "3Pa5F1YLJ7Ludt5Me3hcuVf5bskSFrVBiffrJDyHXLSgAtngSkTjvKQYe83JvQLiYdqZ4Z64TExAaNzQF5rA8eEY",
  "key18": "3T9oL6FSxs1x878xHRXMy1NxHk2goxmy95ZwkHTmkQRASz9bbgy3dEgMYCacL1FAqYcqSmThW6efNbam8XCWYrDz",
  "key19": "261A8ztYymGguD3ruZ8qxqQHVQu1wA2y9wAqZGWrXHHBvju8sfJN1FARby8Wax2EyBZia72K7ZG9UpzD1ANSxWTR",
  "key20": "QbaCf6kv35Bv1N13W1PSuwRT8F7hi6R7taqQVZKrAisY58Kphif2qJKAUXibKzD7pzUNayVxybVTitet17R6h15",
  "key21": "2z5hS2Vj7y5S3tvVcp6QSDcmSM3JZ6rqr8zLM2bgGeBDTSDNd6ciykmrrf7b2tDa8xdzJ9tw7WCsu7JjepAcx9xM",
  "key22": "4gVqwdoXiCSZxuf6YfaCr5AxGm1s4L6BNQ5VRPSjeX9icn6A1REaQKXJb3jsZoqbFAtezoy3Qoa4d4czspm8JVUb",
  "key23": "5GWkkMwYdNBwd6mZt9UUJzV55xpJokLuzGWXgarWeKwo7mVs86EfTc9aZgRehfKFyRTCp5jrVZLnYS5E4FiPT3fS",
  "key24": "2mKJwDucSWNp7ztdsCYJaeJRaXeuztnAj1viGdnakCx523NgtgT5siYqFKf18WsUaJGRb2eEoGBc6nirhwy37Uvp",
  "key25": "5mYGisPWJdFjxMRMpWt2fTr8ZywfrrQHs6pmSR7oJrHTS5ikj23vBKQLrFqqgYB5TCo9bJmppLoprLw5VcMKDkD4",
  "key26": "4xQGCS8y5aEVojQrFFz9pSSaPtdCcBXcVSE7YVe6iWa3zB1xZMp9eC23qP8Mkfwge5gEHf63KJgC6FriXm1otgug"
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
