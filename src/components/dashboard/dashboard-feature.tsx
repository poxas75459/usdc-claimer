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
    "519VEm3k9rVxZybKLsGFpWTwL94P2XwyYDgTk2je6aQt1qoKFbeog63RMV4kaUnRJgq2eyqBzKch812GWAHh3EWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qGwpd3Q7Xj62xT2TWEKZqKuPpcSjFHuvQ2DQEC5WugpYcnkLhefpmsaPTjPJfSmSsWXNtB3sJrZ1j4cd5694mg",
  "key1": "2WdWeBrtXtx74dDVLr7FwqC6N3CeByfZvMqzNYBpFnafqBHewDLJEhrApTQrS1sbFkiAQmahJmDzh4invbMDB8iq",
  "key2": "21fV1pAmkzkbfjX2viqQMrFFgff5GCni1YutZntQUCELFkkTkbtFJj7kSFV8Rm4rcFgyr4LcQ5dNtQt2WKRvQWGA",
  "key3": "cgcv7Vvi4PvBpvihz3EoyutdXKswiVxza1WNaCSJjqzkLqg6bxzYSQEfBmkcn6MthoPi4AuN4R44JhPFfQAZmet",
  "key4": "5J2tTcnyjNphpXSUUYe7jwfUph5WVsoVMpCBiEGB6vMZzidEB8HBim9RVEuPk8iAVBs1qhFXhS1enco4Jj2i8hxY",
  "key5": "4CgrRKhyenCaYHszPdejN3YHfFFvWhJjRh2m7AKJ4LQrgCBFjtFCtvqSQL7VVoWaoMFPGuC5WpNUd5WNEYi8Du1R",
  "key6": "4T48cnJgoXYyReFZHEdTwzWEUfxZHuZTPJJm46YGs7m3azKzFSk7aUfYX59jhaXB6Db7NsdJ26YRZ5E6vn7QHtTS",
  "key7": "43ciTaTUjm5JsTrR6qCLGxv8NDCNjiipHw6PMirxi5p7eVyUohDvDxMR5tsggDuT4bHoLYQ9EFyctP1cXF226XUK",
  "key8": "2T4b4GCzADtEeiBwLy2YvvH79Lk2MBiU4sQCdEtqy61vk5DRNN4PM9MGjxv4ie7GpZD9yuHbFURvtThBjHAJsivS",
  "key9": "3XAKUYXL7y1fmDukxxQ1jeXmHypuMEohTVC7h6RYrVd4HJUYxukZbvRxB8oM4QqpENXbPg9eJCqzA2WckDXt1Jwf",
  "key10": "2z69KmEWpEtQmwJ9H2eSidhr1kKJWeAMEmMjMqkX7S2yAB7Vo9rYcC1nYMBX46LehhB9S354dGcb5Cpv3xGCrbuU",
  "key11": "EGJSh13Lz8DEkBtptgXS6hiSU4Y4k6mumoiD24qhjNjAXV1LDekDHsL3dYJdVrqKb2jkvX8CvY5ZFxFSPc3Cwqo",
  "key12": "5hWRdsqWbKdthn6htcn4HEa4gWhLgTPq1HMPCFd3rRkz7Tvvyt4R4Hssjg7y3oreQ7ABHkg2EJDaWqLARfp89A7h",
  "key13": "64gZQZwUai9a8xW7v7kiHnB99nszqizZrbff2mtusvnHddp8htkwuf5FNkPAKNmpzybLWZ14TQK3mEDdBCuUcfNS",
  "key14": "4A7RDRaXvQkkSDujzwbx7aQNWe97fDVaYTwUGZ2vReTX3Q9HEJLHosesdM3VQBKsGBXzc7fLM4wgKCKvhm32ZUFJ",
  "key15": "3aw2dWbAbtRwXiJ4a9jWXptwJhGdabnJpD4xwYHitkdPjNuu9EvP7jYbbXycRNatWJD1v6TTea7fsG1k21Hz8WHz",
  "key16": "xLeEHjN43aW8G3KYW2JaVFeWQRmZPPyFHdLi6pc7dHHQDzTEEhLEh8TS49zK9EudWJ1R685KcNVRSmWEhknVnSg",
  "key17": "5UnxiaTKXuPWjiKGg8yrH93vxdL27aji756uNYpMvHJVVmjkudVisJGFe1orcfnP4XiEmthi9LwFskxfErS7zXe5",
  "key18": "4SgZkkMA7QXa19g21WksvL3UxHRxYMsT41AELvrUbyhfp3Hy4jBVLukfoKXKJhpq9N6vdHh4jaBUpPatHoWWsBvj",
  "key19": "5J5rrurMpuxK8ZVtrvggJfWfBUNGjnBkBbLoahnAo92thsQSzyCZRg3JEuSBcnPCNbNRyL7QpY3HLrWcLxJAd5pk",
  "key20": "2mrQzFFvrPJL7S5GmZe6Lmo6JsC2Syya2gJWrQ8z4tFdD225RTd5YLc2remMWnqTkEYzqr2va2Z8uxp3weCrtbJX",
  "key21": "4Vqqx6S151i8V78pm6VuZykbwaxBVor9gDtqYJKNKnai7r81ApsD1Z43jK6C7EYW9ApKWTfkWkKVFvru6SPR8Lax",
  "key22": "2LeF6q4bz5KJaB86uxdqHQ62FcfbJUXdZPDhCykv8NWSZwAM7H9LC6pcFXJtWzx3gawEJtr3nXoZj6V5hyVcanvJ",
  "key23": "K4QHo8Z1m5w7hGmVqG5uuyxdfBQGpP3BhvHD1VTGZ4HBWAW9Bg3B6EML47mpQQz27xxUgwFzPWpyJUxbgMS9dyL",
  "key24": "4mVD3zNss7xxr8FSBBrWvzQ5hGu34pzPvtQWTF3unGu46PZbaWjMjvG7zVesstfamjGy89s8RVnRcsHubYfADVNo",
  "key25": "3fb45p3vnMGjFaCmPLJshvpjRmGQDEyDYo8Th18D4ifYyKyRLbvxGFWoydghqUmnR1ThaBcbKQ5qy5fynej8zWJL"
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
