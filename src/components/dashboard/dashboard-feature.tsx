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
    "pcRREAYQnWnJRUpwQZ3qUuA3yLws7da2TN5bBZMPcLS8YCMnNwNrDRTaBhphkY2754pin625ahS6BTFHsmuzYDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gYm2nrDFqWYnQGk3q8y7B1jxmk53ZiSeTHMtBj9k2tyWeeWN62A3fQDQuFYwbfXr75mqjshp7dhvhR1akHHJcVR",
  "key1": "5AhCTmbMqxuPQL3YYgMC3sDw5tPBG5bLLZQMZqBpw3yVzzkgr3TMyv8iWYPxa37k22wW3ZYdxzp4QLLySHqYJqe",
  "key2": "8LnK6qi3c4ksoSFGFkX8MJe9BR48vhGgqHw7uq5bGixKzymseC2Uxggcm1zhu8pbLWfjQGjWCivFCJTsXt1rWTr",
  "key3": "5yQE3zq5gTp5XMxY56MViKJxPCqhZW5PyWj4c7uPLoygZEVKmsJJzNuxmprD7yYWbkWMT33m2sSzgrw6BEVuGsMi",
  "key4": "2hmXyb9DdMSAZNcTHiJAczQFYNFrZFLDzxNuWnKZciEGpKTtXPE5N5kVWA3GnCjpxxyzwt9qRaTqiG74g9MaNB9S",
  "key5": "3mBs29RYGhoaNoXzaYXRofgzshrnj8TTp5JjWt29bCFB65HnTGTFVx4rpwzYXNYHm9eGVKdoZkB3Pp1sqexBqGqz",
  "key6": "5bfgvkLAb4dcPgpiQwDayArDAVci8QnoroenpcPF1zxyiajmRuF4kZ49zExnt3g6AeCVBgAKzTgtWh1SZ9vmPBuK",
  "key7": "43EoQ7ABMqxT5v76u2sDtccVE7NxMXFCzE7hEVx79JXKziTER5YNDZLWWvyQcPQHjErH4dT98Q8MrV9dk4NPeDnK",
  "key8": "MimBWRMp7v1eKyC3FRyzyE52evZ8uy2wdduSVgMgzqKwjTh5CvgebmmaxRmXoZ4j4UVXrPTrepZhz7Ju5CyUHbc",
  "key9": "4Anfz1rJCsW6ZpYpzpG9gVsQDzYCMKN7o43a7oDRay6farcWdwZRpSw8tx2YyEnhg24t8cdjJBKzfMyLcL4S17hj",
  "key10": "1h8k1jh8mc4SZNQq2d3fZaoTi2SYLLX11gr7E26UySzmfiSWTPLPRDAX56Nr8A7ESM4FbjmKc99kZH7GSmxDybh",
  "key11": "CxMZL57mPmMSz62tmiTpW5iCpEnPp4goXUZxcpDH83T5ZsbPKKGr558Ua2irXwEbwFHJ2JeiUoyLCBGM4mrJ5zd",
  "key12": "4CrTbp1YPQqN2cz6SRtCRMT9oE1RtCTMdrebkGdMrVigXf8JgWFaFu8GRUwMuvLbcoPBBcivNoyX7qjrKKMmt8nE",
  "key13": "2ZTmgbCix12VeF3seQipzVgWTZAju8oaKFRvHne5hH59Jk6viGjUujHMBABFAGLQnu4nhiYH48hBM6nijaxJopmd",
  "key14": "3Dr8EB1xzXShDa2fepSANdRChiha9JF9472McxLKsoimxKSvVkiKDhaZYYAdBQYuKS8q5j9yBYBNS8MKrSU6RVhY",
  "key15": "2eLJsa94M8zX1z5Shs3HmzBxdmWqcbMUc4zJpQxVnGCY4T2rY8WS7FxqLirA8XMph2gQC3gGfx74Cn8oiC3Mattw",
  "key16": "5JQ8pfS8zQVAFQA6xboHn3qCVb44PZXqftDXjPtU3YS8ZCuGGUzC8g6VfWProPFQd4VZpBwLHAvY6iDEf98S74ia",
  "key17": "bLirc5WwnG89MsRzZnU6nnNjBiaYnrHiA9sEAYvDuh47TvUd6ndtnhFobRKJCMTWqqavMb6mGXB4GSwX1VLJPtA",
  "key18": "3rPjcU5spWKDRnYJJEL539nKXz4H3A1jQ7NSW1tptgUBv3FDRwzF1LGJq3UCtbneJwX1yAenBbhVvRyv9z14NYyd",
  "key19": "3P8bMzbYCgCqwzVwoiB4QV5DHZzCQG2PQzxKAJHcdw66KQDHmNV99FP5NbMSKAvmg5rgZiy8VzetwbsWEM8z4F28",
  "key20": "5oMXD3qGbEnkwuTSCx1rj7MztRYCZomDnqXhgAjwTkEkjDDx57RTR6aFX9RcxKjaLjqYNXL12EBdFYVocg2HioKD",
  "key21": "22ELsBJhKjFiFa94wEhSBnU3F23T9yvoj8MipAm3kfNC6ZhQKj57v83irP64GR8NPgzjVNR3n2448dNUCoSB9QXQ",
  "key22": "2nXaEzAkgbesQj98an2r7tuE1oAV2qtNPHfC7QtUbh67xjrRRhhfy5hN6i7c59dK9dVkyspGh2QiVbCzwTQ4TF2x",
  "key23": "292MzKY7eEP5355AKkfKaZnH5ZMNHrBmaaQ39muHYemQuN5PFL5L9wFoVmRCZjgThpX1mZ9J24D6m2iwaLNYSUo8",
  "key24": "33T7eZA9xWPJnHK1FHrF3o7AZG9gJRhcNYP3K2LB9ii3moE5iT9aNKfeqxP7xcxakTe3C132jvRijdUQN4akfZvU",
  "key25": "mVK7wSW5QWn9VkAEh3pNV2ALTzse9QfpHuHbMPmLCNwv1Bf25xBc79ULyMU689Yf3PPiCEKyW1hojBKmYUaZFNH"
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
