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
    "7fKmwVN2dn7j9SXTAgHb9XLYwUSKtTGrXERPtLwVArvusCE8qvfZbrHSBHo97eoi4BY3t9LrvkyNXZJi6iA6F7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wRUxfvwoVPpf4XyExXwUgRovn7Ls6ySA6EFhgu1qeGRcJtEvq71o9qi6nSULUJebPjDxYJQn9AEQSUdk6NQU9y",
  "key1": "6Z4GBFymntHBXsFHGUP2fAgph5tvcK61j4tgS3DiPWLy5v4kzteLJFG15y1FuxbNg5qiDepCNM93amYFMfqAJmA",
  "key2": "CD32QNT75CVMKzKwAnRbg2ynk2ti8se4R1eJ14ZLY3oMBm7MHvqiv6ww7cSpvrt8UnLE2VndNJ9Uqx6vjSp3yVV",
  "key3": "2cNug2gmGCSqhmKrfQ8zw2fAy4FDVvFubFr8L41cw67JeEXeZXcbNRsqw2xPvRpdMfgtRcY4Tnjb4Gy7BB5beMcs",
  "key4": "6zCpoFa9TxcNqb77fyF4qTRqUdBt5NAZqmaRVVr1KUfuJCpxTZuNd1jRq7tengQenyhvAkxQ6S3Ht53mu1ua6Jk",
  "key5": "R4JidHHJeHjqfyLezAkXixBWvm3RzPdspp3DAdJnb4rSzKsahojnRPLDXsCb7GCcMxqXBcRkJFwmrM6GHcDz4Yj",
  "key6": "3zeC9p2JbKqPtGbLqQbXhsWTtW4TU5kDyxKFsnpUgma35oJHaDHPqwLDjiCEU4ojs1ctiZanSzT4619N8m7XWCDL",
  "key7": "5v5fUK4PfsXreom67vVLFyuUXo41eNdjVNJTbnRaC5FuD5U5HBEiVHXv1kZVad2oUso9qmoRj5jSsFF9Fec3kxWE",
  "key8": "5muTfnG4r6JxYENQKzSnBVrEohGSWEGdFbh9yQrtGDyk4HogSiAmvLS9wb2mTgFvACTQjumvdi7Poq3v19EJdnSV",
  "key9": "59MdoR3RPzM6Hd3ZtgNXQJ7PKDiMykNaFcpEfFq59bydGq2ov6xizL2Md9k8VkDb9VvmyrRhxuQpAThQLdFEdR72",
  "key10": "D7CNMwb95p4u1z24aJkzHM6N2W9ztLtEWZzdHbd5F9uVGYiHWoqMZJiHKDxexcioNk644k8FNay3cCp6oVzn52u",
  "key11": "2AdH9jN57AAAxfCqL6zkx7yPgiHmnG5GvwgspVPeHLPiQHtHE4AGQx2zZmKGvvkHrLqwTaN2Jq6piTiTpeCrwqou",
  "key12": "4vXhwgq52gcYAmYv6LPP41dPXXM6pFkNBashQMw5xu9KGTzH2DhKSJJn1bfYt26Cw24nQHN3Lnvd1R3AvAdTfy6T",
  "key13": "388JhR1s2CAa8EEubM8LJsNxrLKYUws5Yy2H8reQje7nxLb9GwiGGZjvPJrQcLndfsKaagn3NSXEq9KbVbxzz2yX",
  "key14": "2anYdpuagkr7Pb5AoaySbj5hay7WbmRt5fjbPM2us9TPT1jLm3wbsgxZCiXdRQgZj4XM3HXD2KGBNQB48YVdjiXg",
  "key15": "53stX6Xr3vCsD2op7hToEBjSdsvg7fXJNT8HqKFdmDXAB2VQ3q9HcmSZzXNn6D8YBJTkfpfDjU7aSjfdaGCuRpNQ",
  "key16": "5YaLFwW54HzD9SiZh2nWxeAxarwPnMDz3W7BM5hWjMXWyd9SrnH9J2yaPTuP5c2ETdhQu4QV96w134bgQgt54Q9P",
  "key17": "4d49dMkqUQB74wzMGjJVprgFaYuDi9qmsUvj2CAunNG6xpUo7Lo9kDpXfWp2b1Fe7XBjNSBaaj2PE5NEMGFXjaBX",
  "key18": "518Y5u2Zd9gxSTkDiTHu6wiS3sBcQPCdAg1qk8yW25ZGjuELcjaA31rQDLxDc1xUPWSpbg6xpAHcayEFrsBDAVQT",
  "key19": "5awKbbxMoDGzZUDY5bVfLuEjC3XWFxWAAzFfSEsWd7qYBxqwYM9tRx5XT8dzPtvMVX83TFGX9FSDqRJJs1rHwMLu",
  "key20": "2Dmgc9LGo7egCp1nnTdAAWNE1Y52UtPVxuuy4w1FUj3SiTv9XAWza65YK5eqpbpHVjFBqoZFbNwrr5fdWT8xhhLX",
  "key21": "3z3JYWkGBzm7Wt6DRJA3kjHFw8zp2HsjtxyyZfgc3iA5P1DjbsSwwQmPhhf1JtEmQTijamfA3nnnniZ4m3QApVXJ",
  "key22": "5fEE417ubveU57aXVK2NvGTtG2tEoaGf5hvRXAKptJvtKhhfXCjeE3a4Wsb29hjcJD3bCcUiz6GvSkJ2VZ8rRGX",
  "key23": "2a2jFFaKeuLk7J9K4EG9r92iA5Ndp6X6Efes1uYv2S5VZjdPQW4ajM89fQ6gPgWrVn3iYU7ZsLsFAU1ZA1Mdvppf",
  "key24": "95u2Bzx5xFJpmA7a6JAsWrngFiJiH13puk4NqXE686qvYkcWZtrJ2kS4UKoHpdv5VmBgMNhbhGU1eqTtunqZHtc",
  "key25": "kBuMnuqcvUqSzkcUW3L6RDsfmrD3N4XyxUBCb8ymxwPTs1PhL1SuqMd2viCkomBbAkWXUHRnwugTEDHotBBtr5g",
  "key26": "4zEhg48dXJDbfsYw47BDtV1tCosa5Pdh4ZdUKrvJR4YvkxUYhBZLGHLcBLk5pn3QCJE3SeYHtRZWK9CkHqSENukn",
  "key27": "2R585ShyveEzGMVyqa6zjnib2hZnmemnBJZpj3zGixAnbMquipmEa4wfrQ77p86BR3EVMjytT2cddqvUNoGsasuY",
  "key28": "55yVQsmwoKZ98n5Ev3KHzddFCXUr4STFi4gggdba8741EdjP3heUjj9qRwrMN5KT8K4waGfGn1WijrE7tNW3zS7P",
  "key29": "4dxWjMZcv9hLg9v5sq3gNPFiUrsz9A7gc6RS3bgJDUPdkWNeYt8fQCVB7Mbu1PbqEVvAGAU8dQ3joeJdLVycY6JV",
  "key30": "4bNjDGL9hVH24xisiZd4CdKegrQnBuuxJqkxrmq6mDuFWKV1Fz7TBqVjNPhaZUbqRpg8gj99oR8Ber3X1Yz3Jpp6",
  "key31": "3u9u8QnNgi5S2AgFkmTA1Qx3vnk1WLxs9xQ2Nhj8d4upuueytxLNyHqYsT7A2652KH8a9VysTJH6mTJKUGy5Vvt7",
  "key32": "2UipRhi951uB5NV2zbdc7c4yNkUfXzkEjtSpcKvMpxXw41TbSVtBBJF7SuSKCp1H4hmYm7wbyoat8HBDYS3rmBQb",
  "key33": "3rf4nF7E9jxaDt7nxPWmHTRyDpjxYjWcvKXYuNFB2xWY869RTQLxeAGXKeMUF16Zog4GGZibJBjVh2vLLRCUG9ko"
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
