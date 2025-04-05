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
    "2oLNJoKjguWKER2jpmM86sYrpYkBeN1PKgfPQb1TSwdF6tESGLjA8tzWLPvKwuF3GX4FtU11xotp9VJ4YPxJiqop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwvw4ZhZ88uvYDobjfdXksQz5mDnvuiDUeHayBREAx33xcnjZfNepERPgayaXS4UquWcXfEgHM9PZtmykKXe26Q",
  "key1": "ap2xtnLRDbiVd4mBh7xjadocYSAqusJXJAwEJrxs2Db5qqwXNkXiXSvZafMCyXPjawCCNmFiwKRBfPAmyrt1hSc",
  "key2": "2SYSnKppnhPzWqxcVJfnJmnqH2Xy9DcUusdWWv5RC1nRiuK8422UJQoy4e78uLBpYthXkw57NivyB6QjxHew6AtN",
  "key3": "14UX9yTyp9Uq8aPLjgepNmxEAtTFfweh4PaTeSa6Vn9J9vwHgnfw1Dmw5VhbH7sD92HRTkRjmbLV1GnGfBuRcTx",
  "key4": "QtJPvU6YYpaiooNuKhhicLPXx6CT8Kbp54sY4abCrHXvaAto3hdoRTxd7Mhb9E4CzQsN61Vy9ECN9d7pxEmtxtq",
  "key5": "2Ux2z9TzH4RZ9eYLnxNMMsARxEbCPCG7FbCvgfwbce6h4GsP1dBuvnXt92pEiC7k9BBo8WVHDzxfbP6nXQGHrwc1",
  "key6": "4QG8fSbZgbxLGoATr2bV6Yebj6DZDUAbCUM3CCHzYXmXWrckMb8nRHBKRJqptVv4T5YeuaKVmUYaRW6XBTTRfTZV",
  "key7": "2bz8ndwikzP3q5mU3Ms3n9Ewue5V4LHQbeaSkq9k6XjTRCtu6tsYAC5iygn8q4hNJPoNS3eTAeCt3b9Dmq8U4HTo",
  "key8": "5NaDfya1TfBmwx1e6ixd8Uxpo2bD8Az4TE96brnzn9yektugsNHGbz2jw9dexc8j2tjTVbV2rSN4XDyomAY57RAu",
  "key9": "2Jdqq4KpBajXh9JTZUnhjgCMCJa5fJcrRU3epNqCe9jbRU7KY6XXF2CshxUXqZnr4bdh1eGdVoUnfaJgqZU8S3fG",
  "key10": "2RmNQY7nDiwAkj8ibv4asKfCFCaro3i4vgHxCpcrXNCTNFMmwGBPwqqy7K9k2JZjnPxGzy6jr2jNUarSkWEezeVi",
  "key11": "2cfJsiMjGk7KfbZTC7TteUSJnWWdiCXHs3yWfM5kRJJhBnNAaPFjdBXKDKMMDh9xq6teetQgvebFHMzpqro27whP",
  "key12": "5GRMz4qo9eV6YTWLfcCb94V617AY767iVgDhWHfRoP9fpL6SAvcWXwnA2MSxqKAub1KvMQr9qCb2qdKiu7swNxxb",
  "key13": "29Ziek7UoBtBrKRjh6bt61e78WFJU9KR6FDtiv3jZNzhDdY9VEXvZCw3fVk7Bc6v3VTUHjDf62E5YtfYvBdVtqaY",
  "key14": "2AjVvcijmYcQtjF6cQgKjYQPuHf9YfM6bn1or7Tveo5mXgapZAgA33jxtTZnaugp84DeW49M3Ve7YsFeHpLKdLra",
  "key15": "2rZwghbxiUopFCDs2m3CtpYkuKNUENgxjezXUgFoU4cPcfsk1r22ECoZWzDabzmYVLP4hMTZKeBpj9b1Vny5HRfs",
  "key16": "53RNbXU5wRHZFm1rGq8KusEuuTi1AoMSgjmTC8iYDMupJ8qdghtMLijWNaBWkjN6tHjGRJ81ndcU8ed4AtA2L88F",
  "key17": "31bNGfu4ZzSJ4fUJbqsv6Ghds7bRn87cmHsAi7eERDDZZAMrybtzqoqRKKkEkYQ4f2uvQW1BvC1P5CYCSzTrinva",
  "key18": "37ottYUD55nxqjJGDjfCs5goma5qcpLZB4tjHbR7qvx5PA1rw4ugoaMZv8eK49L3TuLbsx7rTidHnwV8SAghTnqN",
  "key19": "3jmgpAFNeRH7jW1xNhek1YJ6tvDvgEgm8V9yhMetEkYkryc1fAbq3vREyUJyyyWQdMZSd1PUYLTnZijYu6kqvksz",
  "key20": "5womnvYUBqBYqYgfP41tnBCtPhcmfKphnJzBrLVu5bR7JC9hvFeZzaUdAYPCyej7RtSAt9UdjcVBsUbMhA6RAHxq",
  "key21": "2kuHYZ7S3AsPa42hZAzfmEHD35TzxNWDXcLJmc6Ag8XfjjW9Ryn44ra2NpLPb4xvEQ3nM3WWMxPKTLv9XeUSbNVA",
  "key22": "5utmxoNv4GauRLWRnbGa3wpwYwbinYx2ibAAqPJ4wm1udvgzTnve9RnoXZLvtVgwdjSDK4arxQa4gfytaV1Hy3Kf",
  "key23": "4WpphYYbi9J51gtCRJVH2FD7AJmqw5foC1a2dgCgbpf3ZPNpLtza2ZWnBH7AtAfAh2rNeP8FHhh717iSUzdJbeP1",
  "key24": "3aHdjnZkeaC4gbTTkBrzsa6Fq71v2agbG8is4pC9QXXwDCXPBiFSq6UUuGt7jFaCndVwWx6BQxiiV3UWVTmQcYN7",
  "key25": "2dWFPG9iXd159HbJ95Bb18MK67eeTffTquj7UEhnGjyZAvqegvRcS4FQsA1P3KXzmLac1RPR66WieF7tanMoH2wn",
  "key26": "4o1PKNuyHvxWDRJtj9Bwd1pGjs3dTRfipncDPYiZLcwcLJaMAkP6ymUfcRtmZmLEWkTL9tdDbpyd5NoHjVLpNBfQ",
  "key27": "5toAQrdFnAFsNWdbZeeTPsKwEp1t6sVKLLFYmX7jqGpwZ5yYkiYhS1LCvsUx5ouXrNevStqQv2aSghM4G1HZMue1",
  "key28": "2vDhx1sYaEjgiRwhRQ2tfKVAaR1a333r96tRyEefZ7yS7JMv2S8eH2ehwHiXbEFC7uKowE5wBh9G8H4CNomHsPeq",
  "key29": "277AoNGabREYN41JHvDXCRWrvusKRxTMn4sukHKwZ7TtvsBCg1RpFei7Z7x39ogA9ZGaZY5dRDtKWSKFRg6h7Luu"
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
