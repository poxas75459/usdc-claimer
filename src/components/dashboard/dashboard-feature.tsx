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
    "5XnvYdatFGH8dAY7qxGwPrMDcdHRpaLuwJiQmfRqBfCTs3vhiRWuDB9AZ6bw28x4VDJBiJwUBCCcBr89zwvxTEfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v9DZpFfouZp3WWDLp8v7TQ84AagHKizSdzG4jn6kiHCqcivGmf7jsx2S3i86csaDmzw5JTscDkH9vqLrgV2JgLg",
  "key1": "2mX2LHWwjEzeJsfzpP7WQeVXRaqYzmj7PiiXEA2HvxXKHAAjhQJD7nyA69LF3iajiscBtgCfSFmhhJ4trAoY6uUS",
  "key2": "5LJFeDJmgBR6wHhhQ2aJS9Y6ZGqRJXn5g7b2iKPodr5a2JNq8BPg7cFaCKa1agGichBvCCvjr2GrjJFjcea6vWm9",
  "key3": "2bGFPwZjXZQi8hwanRqZQZuThiU2cZwRDVyr14Uhc2RQ6Ke3KSnDKq5gtvkodeFtvJWCT61vZ92PQiBUEftFEGbS",
  "key4": "4vA7eNpxKV6kikhy7Wf8vVaQYbCUawm54zGQjoxDVEEYfJ6X7kGnmj5hWk1Q5KXxjFhHZFDzRuhrAvHQRKLWDdGA",
  "key5": "41seaAwYNwn2mx9UsvEkHmcgRMUkQH2JreM7Kid4EVR6VH4HZaQe72d9o9WmyFeRH6UjzrCDqcPgV97Gos3FFCrg",
  "key6": "3TmrCPhsm2q17J7hWgHAesis1Lsq4cKHqNNeWRm2G3APSKHuiU3kpFEcQDJzaitBhVH9LHysodSadcZFvGwHVzF4",
  "key7": "4dc5GwQBeqymbnQv1SMnhnGjBxjyDrtwtDdDBBcYk6smXNLQwFvcxg6tyCbG1FqMgJKQ51YBhvonD65SVTTFiDuU",
  "key8": "2yoioPwxiJLEonBWewdF5D3GdxBCzX3fG6G1icDVk1dmvdegH6A7kpjTJ77VB6gWisM3JCk42A4JB4TRCWwcszkW",
  "key9": "4LxqJ5T4MHcV5h7jFjWBkAkMWnWWorzKGpBfKcJfFyfxSuVMR7z97Uhmk7FsyDcWMvfine5NiMLio4noc6sfxohf",
  "key10": "3FSY5czZ7K9hMz9Z4wXg3C3YA4NsKutzrGXW55B71GTwHmVRm45ncmFAjHoWum57UFbF5beKBkPQhV8P9gK1v7dA",
  "key11": "39y3fv1fs55zHCB9YSwtq8rc5WhSgTtp35a3orgMgqv5RK4oWDAkfW4QVs2NwhYT6y4UPDbKjhqe3xQ2m9o8Jn6o",
  "key12": "2ozx99UvRhuR9ZR7N5f4cQ4wAL4Xw2br1w5KZ2ZKj9HpHT2V4K4A6WiaEaXoahqp41vSocx9j8mhZcRG4HJ1ww16",
  "key13": "3awUyHVj56mwgLHZNaJgjangeuiVQr9GtcoiLxgKMqTvax4VC4L4Ab3neDAszSZ9h6Bh4KsYcVhGUVA6y3x5A141",
  "key14": "5MtJ3pMJgYpp9PcmFrGvAM5WNRysQ9sqdkSSbnNQ14U95feAUMXbUWngK5Y35t8MHJLuL1FhcAfuJC2Tex7GJjJD",
  "key15": "4eF8HA7pkzfGP9wZSN4X2z7zP3xjKJH1KK7nARJGRKdQ5HLDRWWN3YvhAV9q7eXurYqcCXmDd5uwf39T2GjRcTCJ",
  "key16": "5TBhzZAPuAVy95uf6UNZUM9so4DPHeKpCnooTA76Wn5MxHNnrKNxnonTcjxXcrG1xry1y7A8KdfkJPtGAcmNQ3LL",
  "key17": "5gNPZa8NDkM1afp9rqRaXQ3BAwiXAULAxmcm4wLjDAGfRMva7zV2RhEXUnW55H1VaDNEMLt34nht9ZxtTcNxbDXe",
  "key18": "5oeHJTkurYyBt8pKbdt9x9JESYp1GLs62SMF6pt4P3sa8etLjXdKUtYJJHCSZy2ZSjL9UqmmesfWzMfUXpDVFdhd",
  "key19": "2e3U346PL57dFZwdvFkbckAskdcXjucgJhpkzxTR81gWNhguL1JibJPVsSsEgdwGwBZ84C8oz9bKm3267ueedFr8",
  "key20": "4UipNFFWBUnoZJmsJNWZMDr6qnA6dYtZgFJScAKAoJTK5ktcMiBMw72ja1N5G8gzqEXGMnAV5gtSzLnNYFfevP9n",
  "key21": "3YNhzuMWvsAAsfHXnRf5jJqXuPGCtDYyBSBXMzimJND8uyvRLzsyhaLhMqcGshq3s34YUKYRLEXrPDiX89DYPUmA",
  "key22": "4YoQWGZ4Wj5ku2SQbiTbSS2JMs9ZAMCPEPh5UNvajzS3RjxJ5rsNUCNFzuB6stCFtPDWcYPG3mCPg7h589EQRovm",
  "key23": "3Q2iALXTRFgzvuzYB8PrNfEHSZEgaM5chsEPab7bdBpNnYELZRB5mFGTy1SmsX85MpojBp4iXPX3y9WfvHCmw7X1",
  "key24": "fgMPYGYyVC2cpz4CthpbnHZCjo6hvoqL39UYK9tMvcXatSFEkvGpU4v6vR5h8bmmNjehbcJuXkPkzNbPPH1EQpa",
  "key25": "4m623hCvyJhvtrf56fN8xENtLAw3NkEHKtEuqHZTB2sGq5z6dbmQqgLHB94jenHSHQfykgq8VXYtLoiU2dbLK9qv",
  "key26": "3KvcjKstsxCFnFAbRpbYMBMxvcgvpdhCjnPdF1m9zqMSHvURfD8sxSb9Vv99goTGomGuSgJZQ8gsBYACnetdM1Sy",
  "key27": "2AUvEaHy9xiPwq1ioQszZZ46cw1Ry7M21Nn7QEzsCbJ2T3BWGYUKmWs8HFoA1wcSu7juo3UZ3epNRE9fA8ajBYMq",
  "key28": "4ujHFweAL39TVMcs8jE7jJGD5rPx31e6hivEMTg98QafvkgAoQ9SmFTd5kwmS9kdpXjq8nhwuCV3xVoq4b74RV5V",
  "key29": "2gUrPbYusvKTqNbX2aJK9CfLLDKPpdACP56NKKU2Bc38pj9v1rTWPeRGXiAudEoaWMUnKntunhfVLi2fWTY8xPoB",
  "key30": "4kZCvrFudjVWPdUbcNQ1zqo6skypczL7SovYsFN7tkfCCmvKyVEvWi9fPsNZaPC271Dfao97mT4ZA4ewUvva2xKg",
  "key31": "exVc6LyJYdMupDEJdhrcpLypdYjz2Dk5RjLsL5HijoUawKdidsHKZn5BgRjw8nEYYXVFNTi4WfYNWCCuJEaaC3c",
  "key32": "3qkf6xmFPP4ag3ZvEc7QR6uUzA29wrUd31tDSaWYKCs8Huf4sjNMQZi6qtARHMbC4je32exzk4BbGGmX4W6LkHMS",
  "key33": "3GB1nS7zyqhaY2eRNzD7vGDCUn4xD2WK8D3G3f1G2mcfhdGnGMociQFf4BaeYbCVikm3jod3n7osMfiDULXGP73Q"
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
