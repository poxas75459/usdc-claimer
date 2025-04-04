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
    "jt7MqbrSK8B9JLTUMqaBp7QC2nBjvtM99muVrS8SHpN2w1fREBzQQNThycgDe4eXUc1MSAswkxo2R986PUxFjzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31KnYzF6bZaCKaa4TVynduf9aP3VHKeyxfv1XEFzbhMCjAG4vZzNpuojxgXMWDmq7By2KxoRXLzRAsMGtFxnmtsr",
  "key1": "3QmdiXoBxqKCSicMFA2LyXwRd7ssA2RGxjNZgrbF3fTTbFEiM29GrnKLnN2Gn2LiA5pdPeaNRLWgRQg1c4UNwy8M",
  "key2": "2yUfiuZjc7dkVHnmfwJPj1XctUxTsiMn9fqhhXn97fHDSbUFiJ8R8Hj5c9p3jTThTLgL2X8rt9X2YyttagGKHa2o",
  "key3": "5nfGfUkBLjxRC7WekyETS4oLrz2ThTxjH9mMNeYaAqECdZiJq5c1WNkLRcLSQXZgVZfd29oKdwPKzTYSHMMFkMhN",
  "key4": "2EvPiXAWULMsmgdTSkNg2G6BQHmsa68J9c62E9tEYhmQf3HVKvZVsvXA1BjHmzRDxyVsdYEguQ4mKFSZkMQM2jTD",
  "key5": "5tddpec35GcrkqYgbmuJroNjwXr3ZRBuULf541Rwnww5sh1YpeiJ5gDVhCpC9MxM5UDXiKPoYtAVWBUKUQohi2z8",
  "key6": "5zESqTj7od2USxXULn7bfbCQD29mBXnBx9ALEEYUMwkHNfUiLG5VvqLz12hdC7NUUQtsQwiKyD5XmuVsAQNbxrnM",
  "key7": "5ktRKc2j6bErhcJZ9VCavsAA45Ne4JHaZCHndaCE9m6WFR9Dq1iNhtS7BNgLHAxvJqSvUCjGC5yCk9nytbM3o97B",
  "key8": "4Yu2CzNgv6ATp9Bz8TB9wEWLPDe92FwMWbAhHwaWWmqVgkxdGhCRGaF6pFYc6VHrszrTp3LS895Zg3sdx6bP33BK",
  "key9": "4rALMyyAoFPWvq6P2zN3W4ngmKFcXWz1BjugLMca4NVaThY23K9qGc5LWNCF4UBnuWFmFMtXowxRcSiPHDuh5KA4",
  "key10": "2zVRfkek1TSf5QY6VDgQn6GXkj1Xcz5Hj3cL8hQAqfc6E5fi6pzCA5SsmisWgpbZ6SM7wQ41Z3eLEGZt28VGdzAr",
  "key11": "3pbqZd7JGGiS6TKgPN1dyBxmYQrRdNbqs7WwPZNbGAwzniTdfL4AReqHuxEKguY83wWCSU2x9SajD8KZpSpu1nt6",
  "key12": "zaAnPhsrHtT6yQfSackBsTX2GiMrfzUrHC4ZRPkgHYPWLuWS36d9jBka3R3CkWfiJZgYpNtV93mvG9WHjSYoGKt",
  "key13": "5VevUCZWPF43xcGu7rFYr9tESGLLC7uUMpT6wJVDhKHPS3rBdwqspNDSA4kRKYSCKemM766BixWBY77Cyox7SrGz",
  "key14": "5BU1WUjWNELLdQpAxAUzYZSFL2CG4Yxe4cR85Z4GodxH1A53Jiei9DSEgyoYJYDE7a6kv4MbcRs3FV2QD37C41t6",
  "key15": "2REpmhi7t7rpTPiKrUm2FCKvCZYB7cuREfbH1zgLue7pNzLue9HtUYSrE24PtmzyGDysMypVSTcQyx9aowbYggG3",
  "key16": "4FV6RxvvqNjStUreWkCqR66zz4SzoTwRvssDQnQ2HUifJ9L3w48cKZmKv9V9yp2xnBw533gtexGX7NC2fVpCAnX1",
  "key17": "4k1ZoAUA5dhHrCSUMA2QWXXrrHeohnDKLJFKHhZHAvxYKKQipxPjwDmA88cKNqEvQwU2fRFajfCW5Cjzsmuaz3T9",
  "key18": "5bZ1ioTjzfTYqPj2BGvwg4tEwH7xiTQ6Zw8XMkk7qNA4Je9GDULUcKLW7Y4tp9irdz9XLmrhhNxdVRqLcGp6uyie",
  "key19": "3W9L679WrBQTfD1Ro83iB1qSTmqmDgpHnf6fhmUWrdqXtiFULgruuYggqjSoH28vmtpcEaFk27ThZDF3rg6hgLDg",
  "key20": "5tukDdAcXxjcwSnr3XpFLc6b6A84mFcs8Wf65LhRaW9jw2bVDtvn31WqJowKf7Sqz65BAp4zXY2oh2AaTQEFmqQR",
  "key21": "5YT65qM6141Ntvo4QUmRxrmZ8i7b4kCQY992wW5GNCb8QazLk8dged1R2AwxSB6oovymFqCjq7UK6YfiCT8y4wmi",
  "key22": "29P6fGDy6Zv9PdSyKgS5uWFLDWNWV9GGxEVsxzPkHuma9nUCKVAwdfRmMkC412YERXNQmZd8Nc8Nz8X13NRt9sfd",
  "key23": "5Hg6MzPoj86tyeCvWj3EgSt8wJPhwL6FiQJs4ZmWifuUr2cCdw8pRGhdTaj13S8ZNjhPgKANH2Xqbgy6t5s2AgDs",
  "key24": "2qjMMDHk2e6bx1ojNVFhHvHmAhZt9X6EN69FoCHadKLgEDT2PVQeEQsqbvEoBv5RJeETEwSmjqiXTgZiFqrB6tqP",
  "key25": "5aVsFvNtbTT64RQXkt5GZQbDh19sirFL4tW5sV6FUrYx9KzekdyYPVaCHaaBW876Jp5JhCBgsUXssYMVWmSp8d4k",
  "key26": "hfnWDcoJsBhrbdT2hDMKkhLdRquJiWEWhEZ8jpo6y3tj9kFUkaxkvSfJSS3iKgB5iviGuxU8Wb3tjGWg5XBqsHf",
  "key27": "2mD6PDKypMmLaiBPUCVaBcjYFwoZZ8uHUGoXKab6Mouyk8sXhUqi9me7YCeCacnkXPc8FmqYwG8MBhtEUkh9NvHZ",
  "key28": "5Cx3kj7Rm8L6fH8Jn9RhPncvAEjnPuDtYoDKMLsoUnLN2wQVqbdNTqsqre47QPNHhNi2M86Dd5ZxywFNCL68hek8",
  "key29": "3fMjG1RAFpVcG5AAGZQ9zyqcW15obwpUDLad2C3HpxyXq1Abr9zdE7nf1cFVFeZrk9aaa1rcitQddc66E9Y7Hdr3",
  "key30": "5VWEQtwJaSiUVYzKJpQgqWDbz3EDHghoUkUXbaMd8AxatezEHxtoEikKJ9e9bdkDd8Rh2ndhKdhRzXvMTDKMVhcc",
  "key31": "2bgqBhBzdSn8FMffJ6c5V1qRMgAKAj7d6v4XXxwmDLTiyyevhzz5UuLajoaJyrRYnj8snfArZ8zya8BZN5TzYsuP",
  "key32": "55FkmsfoBCBaxMucVCrRe54bN8UbAuDVMRDZqCKgKw5JqcuRBL7mA4vGMHvMvGCUW1aipm9nuyetGpPjApHmd8GQ",
  "key33": "2XDw3vKsBvZ6rZyK8jReLfPsnhN8HuPrK3mQA4UWCVAbmNK1y6zTHHXxHfpg2wjnpthZpbZqGccsfgLKbdurB4ya",
  "key34": "2v5vi9fZYQfenJpCRuFPFtb2f99EnMu5tqxbAnafQEQ6i6RDcnHxdgELVxdxGiAUBTkWzHinih7crSL4mJgQa2pC"
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
