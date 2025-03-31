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
    "28FcB5y4Syb7UJLTM3rd8xwi9ExUhE46UpKWKxx4vpvdAiYr6mcrMpeU2AZqPEdc9z3DR4pQRi1mESYiqKQiBzAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R7gHnXGGFkscKB9KzsbH8NT9fycFtuEoJmSkuAxTY7k8HynXLHNd5v6ML3Gp397ZyReSvCF8jcfp4FoUcowRRtZ",
  "key1": "5PNux8kY747fKTWRHYDrkNpJpiHdWoTF5XfiAziKgfRqc8uttKELKBKVRu5sa9ex7qNdzUXpCLPvzKEt35X7vLhM",
  "key2": "2LkZN7jDfnkayLXstqFEHNjD3pm8Ce4wPVj3pUrzyhnzPVWhXaqA6VcYpXcjz64nxdAcKTQEjkp3oYGGoa2BvE17",
  "key3": "4QYHTiRxeKfHjbVzHfJuD2HDTS4AoT57xuLkUMAjeaf3q3Ng6gH6rysrBYincQbn2cN3Nzjjo2QKhWhns3FiSpTJ",
  "key4": "5Ew4YJarAE6iPXXMfHvjVrFSxaikh49RyhGBpSoggqegfq5FNuDMUFEUh2DXPqBr8vagy6rHkzVdrhje6VHNiz2V",
  "key5": "2HVdigqWvefRoQdppWknBoacbfxLd6jDDmra78tPfQmzFZp5kTtadkkGVBUEreCqhtCcZsXLFgM67KZrUTWXxSnb",
  "key6": "2KCG4KSSTwPjTGzuuX6aFEYPeGH91s1Hmkwefr8DNAQc4PorFcNqWn5CkRUfF8MNqVtovPHJq8Esfkj3EJuP4xo",
  "key7": "5TXdDtdjSu34yVtxwQ22NcDw4qGa1f3NpsXJbSnYKkdSBTrZtX98mjhdyXTD9oNtG5b7SsXXY9jyVBkYAkVJtXXg",
  "key8": "4AcPuY6WHxzpPUM4HCEC7Tfudcfat5zPeAMxydevPM7RbDTAuiaGeiiREbAxB4X3grUqKfgjHQnXvFpkVxqf44Gu",
  "key9": "qWV82vsNy9g1BenEBWUb6pBrq23xKgES9RHn6hdxUbs6cuEVvzUSsFg7FPrLw2P7DMjd1Eq9Ee1AzTtWArbUFyL",
  "key10": "5NVNXPPqNDgx4RN4f5DPBC12V1qWhAuBK4Wr58qF31vs2k8c3SM4i6hAYkKdDkesQL3LonWix5XGrh2PL9qkJAL",
  "key11": "4b7a7xVfu7SNVi1FB3CCkC8PrXTPU2hnfpX48doGFsR3uzUCb2LFuP7YVcWhkPgYQYhXA3aw2gvpG5dBNnSFmUwv",
  "key12": "2mbP5jFQrnPfrgJX9N2nXge1A9hwccShGB4f4vPFzYZfLb3optf5ztzJ2fP2WY6ZFN3JBqnHPJyRxMNb111zU6iQ",
  "key13": "48HbyZfo1GmgDxD4tpuXXtUuKVQW2bwbgFPM2ah2KvpZFzpjDg84SrV7GkhjzP8R9ztAycLFRrutGJ9oycnxAP18",
  "key14": "5PAqDAExZRX28NkMwuMq17TrsjVL81tjHe6SH5hZGXsBRbR4niYPQTC6zk4EkAAyj6QSS32LeC1S3PSxnfxsMdtJ",
  "key15": "5CGoWy45JzxrjqPR13vFeedx2vQkEfDxCugJKL8wSqhzYVidAyohzaB1qwDLPskhz4admxT2ikymjtAEtejubNft",
  "key16": "2gyuHqt6gjG8AJ5w7XzAVLmCzp8Vn7xB56M92WWxzUDU6xAfsS2iuSiVcEBQA7eMyH7qZgA2jiKxbZACkpvA8bZN",
  "key17": "4QXJq7wRyZz7i2rPC9RS4VWfXZ5Pat1szbMHSnhFKE43hMXcgzwdq1AM6A1XBSQRpjwomuc4DQwcjTwAx6ZbrDHh",
  "key18": "4QMiGj9Y8H5QqNC9RabRjr4ZmbQH8uGcxam9D1imBiuiYixNrpoYKxozzpnwodiW6NKwBkSGKFbt7D8SzWzeTzj9",
  "key19": "bEMj2geFC1Mg8Fyf9Bh8xgzN3YkYiC5g1QLZF196a41zDfdKw5h1oYPL8Ap5fXWrUNRCfyEN6N5w4CTefjzAV9i",
  "key20": "4Gumm2HdBscFhWrjXVwdaeyRVf7nUu1rLfEWJaLMwTK9TTM35zxFU877k9Paf3nvhwqRWrXpM13FSi7ha43TFVpt",
  "key21": "CrJvr7yqvrMkTjVwcq7bLQfULv4PH6Nn1YmokLYCDpwTrm9eGLCoBRnBphJPwaDBDq73bhggT8kR1NuMdqGR8kK",
  "key22": "4BT514p4MoTQihv6Ce3k2pcj1LsfseQCwbyyuRFewW7YbQNtbscwfoo5ojw2noHU8s3oeMoBbe8jopjycaiBagJ1",
  "key23": "2cFQhcf9uKGJTYsi7Jq2ogEMU8LxuH9cuXXQdDAXHSmCH5NrbKzPV74fDgsPTLgaXMSwfajvMcSFmk8G7EmQzT9Q",
  "key24": "4Y4ccKYf1jZuLnj2mbShYAtf4Vr6mTvQD4q3RsdvQAAKrxZcv7XXFX6focgVBBNkXp8Rds8SWtwgouMQ3eGTsoQB",
  "key25": "3mNfAJHL9EfzDUcp5TyY34CmnrmVexyib52giNp4fTYUnxP3rDdSQN8DyFdYstc49y2ABBPWoAA6Sc2FdBQYZpUt",
  "key26": "2hax8JpsCnTNkKsjN34s7ByCwf2kd4qiN4BXNQuLzj33Yf2ZdRQ6zRnQwGyT45fK5SVj7H7VpUdUWyne4HEdpZN2",
  "key27": "3U9LzHz1anmhHKvAYAePjDqer3fZJjiiSZ4tLsy12MYffu7azF3Gnohh5doxz6ahkX6zTVkoRiNEJ9YuH8czFfLM",
  "key28": "3h1eN6BxcxVgtE2Zteqoftv47ZqHU6JTGjGSDAbg2db4i7hAsSLUdcUZViG8bqC8zRwz4QQ7pUhtYLwHqFvBEfJh",
  "key29": "3VaLdG8WHaJNY9EBjxyvXwiebo9hExzwaDCnjGZM2ASo64bpcFxHxVphNRay1Rt9a29GfFcMZw71nBuWr7Z1VwAp",
  "key30": "3MJpae1hAez6bJbkfMw17w9UCC59VerNrehDFv1qWbdUhm6KHaYF7pMuf465ZvtsQesbTLGXiBnh9eYzENAT6jdW",
  "key31": "4QVs1aULxCmEfjtXgpZMhAK7BGkUMVWxQwt5MaFfffaRfn9Hzv2yGHnB6dBegfpML4QgqgSBKTGJPN8b9WtEKbKq",
  "key32": "66WQA15gRxp3GCtqSdcwjuu3yD13S5BLaUpEZdjyq83iC8PAr7V6XWDaMeSgzqqzXTU5QJEKbifNV6LCQFVh8xRx",
  "key33": "4eAC21ipKHRv6wWysC9CauMPo2Q2ahedN3U8CArA84v3AZiLG99z4kZx1x1QKQ8bYmC5YD1qffoQpxChDRx3uWbQ",
  "key34": "5oj7j4YVMpGEn9w56xaAVdtk5NoD7SF1pHNXSZd6C49EivqWGSqLUpm7V16BNkfvPLC1qi1go1RJ8p4Q9xKMnoRb",
  "key35": "5QuKoTDoW7iP1kQJ1cFL6UHpyFo3eFyGSDroigjkTvwRScvytSTiBqR69v6V14HnstoCThuhj95W5daDsZnVzcrH",
  "key36": "23ePDxqED1fiSqUPuixnhpGUcBDvykfE49q5E6SvwdNo5FMFbsGBqocpu7bvUhEXBoR7pbyEuy8HpRtNBQ1FjTT7"
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
