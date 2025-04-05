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
    "4Yf9n3yqUTJZyPhF1SU4AiXKLjz6eXuSzcxLWShJSqWDExDCVofPx1iaD3kxcayBUsfTr4Um9EwGkaEs83S3yayC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57kfDtmcGC4GYRkBrJkpBd8LEpbWLrJ2XPoT3H24PaQC5XEJYNcGkixQN6J433iYHaDQbmKsUT7w8S2a2BbVyFA5",
  "key1": "2t4A9nLy2vGrdGorrafaDSZN3ncFPpaEEQJ99wHyR7gvuZVzqm4ienRo1Txh5UAtqZ2MVVqmZcMxr3oQ22KkdB61",
  "key2": "5qHc83i8DZ2kzcjBToyBXMg9LVTUYaPZbvYB2MLTZw6pkV9wt1kf8smpfG8stEYB21wKHmNNoYTM1EhAqR3x42aD",
  "key3": "4A9ziwaog6mKPYrcB9vvUvfhsrVLB3VZVP963iwE7X22pkBBVrbgoDrgvZDXBpXehoMrLoJLGhaGRbDzXV6xaccW",
  "key4": "5NmYgdjDgdGyKPdHC7RrQHGKB71KdxpMruSAy54RKmeLffPN3RtkwwACqdMDo1czdgjFbmKwJXnLbuPwmHEoRTQM",
  "key5": "DewRZbnpbf9LGqRgHQZHdrDVrZ2titERQdMCjoDDM3JYrjZ82P5e9RQsCixnGFzTTpvdEHBn48dZgWXmZS9wpom",
  "key6": "4FhrDAdt4ZHg4ASQ2b7ygZYB6gWeszFvTGEZVrQvLg2u6Mk26ivy9YU11RUscuBdKn1r6XwHi5odKNcVcbbPwgbq",
  "key7": "56X6vNU1r4GZvPnymHnPFVncpqLvcqtPLirAsNEoom724MuBRJo2ZhPqzwDoAxxyXcR1ncaX7iX1yggy4tQ31RQ6",
  "key8": "4RULq5m5GJg6J3nZqEppWh8fcQLGoK5FhW8P4Upib1ccN3YR8fdHdKXkPLpD2RUmG6hFrdnTvETftZEVdr4CpjZs",
  "key9": "4NH5iMAvqBx7NJepxZT1TinVpi8M1FSx21UjMfERSzyjCRyQk8xT9ZyVjQ9ijjFpiuBDMQXrZB1AKjHVDC9G2Dns",
  "key10": "5kRfVUAZh37N4erXc6nziyZwYYW1PPwucST4MsmQGJrZQZTpdsLTWcgfmSGcDn3Ca7W5WKJy8CGH6GH2F3yFodpN",
  "key11": "4EjR2H8Zd5ywGsfVJWQWRoUFxATrf6PXQBfXitvB9WnuJeLdAL5Wf5WE9C6VnetuyaZNXm7M3v9FD1uFQitzM4cG",
  "key12": "26kRM7yuFVnSp1zFmGeYy4PCkV8PFR9sc8HEA6a5wwW9y1CXSc3XoPqtL7ukK6gzYQBuQjRW3GLesCKxtGQgKzmf",
  "key13": "66LKEpvvoraeJDFjj2AK4PPn1cdsYH1VprmMAgzEqAqGsdEuCd1AGpU6mgsxzGDGY9ytp2ibpNi7DTrnhbcyk27y",
  "key14": "24CVXRc78vsU3a8dQkEAvLLzNgGinPxg4Xs2f2ytPResJnRdYvcCuR8VkFfmBr5LPyrg1xsPh2Yoh35BfmqMroHK",
  "key15": "3rGhymJRzv8ZczhepHrbe7KVPkjB3Ws7tMN5huPsjgCpH7XJ2V278HhvHwNrCEbK2Z1r1DQqjq5wsgSXj3HCBJtS",
  "key16": "3xEPWf3DsoQJwSkD2VKxerWu6Fjodpub4F3tPK5m7Atfz4HJiFh4ZshkYKUCNA29uRHjaNHeF3zLiMx76uua22wR",
  "key17": "3ootHKD8oFsLxKN9b9KtorPYwKRfp3ThnKV1RpFzmRwTPpmwUbaDdZ2Gby5ZLZXHSmjhcjh6raZwhQLhCkGbnxSu",
  "key18": "5cfGr9c68rpuyBSpn3xd1wRH959kJwAfxc34r5uB2rFn4tyU4DfwPnsCvnQXDvgNUV8J9w9vqY8zSufx2g1gjpeg",
  "key19": "Hoqt5VFaGSPgD1x23Ex6PFYJsxj8SxR1iPDHPqKxgFVw3Wx7ac9CjEhZJBLWycTjWYceDKeQwQX7Vsef6be6bxM",
  "key20": "2edXhB6GFNF7cYqmL1gJiFDQVH12WeP4Uv4u8n3FVLaFEA18B788vtDUKCCZJFUiyojnU8KJThnUxkswASCsxLAQ",
  "key21": "2jNd2jYCGidFAKMA3kqz45UAXUnzJp87HdvnntzFJwcPpiYb5nosycFC3H735kSGafmE8U6vfxFNRvCxRfy6x4TN",
  "key22": "4XXMnyEiRXM59uamkkZGNn797c6ruzkjQF6TKaC8fqrQ9Xnkd8Eg4HrM4MYE8GrVtW1pwsdQ3AxSSnK5VoxM22Gx",
  "key23": "2UBt81Jt3yUxT7KC851EpCYxsmWDEDCsRG3iyp9EZYHK7SZfNzcCS2pXgf2hMVVxmmAgFrHNLDQzzeixVG1avjwH",
  "key24": "GiX1KznH4a2VR2WAfavMJHEPj9r6LgyqHVWrq9LSpUqzzto9wz431gA4DfLC8hw1Edd3HtUsj8Nhny5zVoNJwQr",
  "key25": "3h3JHE2m4ZikFGCW1rNNp5rH1k94JKCghiMq5ERjLk6V8q3JGudsUwaqdFvzi91Rgu9uixTNQkUhMdRuZTHzGAEM",
  "key26": "3B4w4FubtcwHfuF2YbVWCCmW3VfPMC9712pqnxVGWrz9zMwmY1TEpv88g2nRsWupofZ5PWdzUwMpwMYPSWByFJsr",
  "key27": "3gLzooAu81CmVaa78ruxNducUxpsX1e6iAqbH16jR3vL3vLakzBkoWPM1XSQbtNhCAcq8fvBKmRHc2E2FPzRRETL",
  "key28": "271JhTAgYhwmhiNDELWETnDURHbzubaJA6kU8ShwmgKHMUrnm5dnABba5Bvu7Y44t6geKvqcsjgCH9ErSB9Gjxg5",
  "key29": "5hiKjzaAwPSzgJNfv7j2EUe8Y8aLQhaAG8snFpXLvmfXQgYWMxffUqmyfFsAvDgo9UeefuAv7DNTNuJfyXx9W5Vm",
  "key30": "2DtaGKGidDKsnb6LG2a92PZnZnnBjAMXrM4aCmf2yhrjZmqpViU2C5URwTiraFNgu15icyJ797HhmVoun1Q1jhMN",
  "key31": "fJxN4symxfjyDj1SY1WoQgysNZ7DrTucMTgCkqnZqPdjC4xLrV4HAQQqh7ANrbaUgpmzkDMWpMUFWjsPwrvHHRw",
  "key32": "3EjaR2ZChcUhd9neCq7K8wQWL2mBrLHnBkbEm1LakmNsAPEhVkiAuM4zqc6qxZxu6pQo8Z9x9fLgkPeiYyuXqY1D",
  "key33": "2k7ZAmMfsMQKzdxo3BoehD7fprE9UupofEoe4zdCpnBp9xWtk2U6puvZWWv3g8mnBwjyKa2UyXAzzCQt9hGG3tt3"
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
