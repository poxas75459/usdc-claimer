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
    "4is9uSwwg7YP7z51kGLFBVihjnLQeQk3YzhLCzh1kmBZYbhTHRVF1hzxfs1kNMSe5zjuTXb6wQTHq2ReHBFDM8ZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dyoE6dFjPHTomyux6yR7yC9L93PL3oaubZQAbtoAQvZtdjcPzGfGH3EEeDwqrcvwSvvALHdmKKJzkBgZAjmNibc",
  "key1": "2FuBnd9DXq2RQrMmSThDpps7VGvdDjeP1kWfSdPrwVQn9JU3axmup7nDt4rrgz9VCVbUvWsxnzfMhPxi5YYetKT1",
  "key2": "4CBVYi1LGimi7K1NMpSBHFvvN3RbD3EaMLmVFFNBzCcVbpaq8GZabdyzRsXnDdveS1HTYXBvcLwbS33UCFChrkQX",
  "key3": "z491JKCYb3L382oER93myan31asWd68Kbk9sy3GttzLehStfWoUMEyz4EMMUSkfsQf51oFBr5cuVStEiAFfb1d1",
  "key4": "4kMR8CWBn1ZvxjRCoWDMdfWHXbqjLBJZsw5qP1RcTGhNRRVpyLGPpiueamEZiKCqR8VaWGBNRdDeQrb9Tdzco8zh",
  "key5": "2YLvad9DDbEjYsC85kxynxHrA4jr1hc1FLeyosRvcvSdBwCRVypeScjEZqwkiLXhPkx4JbvzeW1HfnApSmoMktFh",
  "key6": "4pGfj7xvVRZCTBVg2gMsmZkFR2qrPR4QQMp7uM5367HHsgAmNkW3iiwBS3wSegYWXHvV88YrByFoXhs7iKNhx5tq",
  "key7": "5gMtX1WyPqai92Z2HH9sCWKx1hxc2Wnz1B7Dzbjxo5ojH9phBWU8LVMhQVHyiGyACo3Kmc85ofuRjD1iibSnVGza",
  "key8": "4Wm3Coy7bKuZsuBKT1eFRn4JXAbir2VEgsx7abELqbfkvTmqeT5VtaGxFBQQrG4P4ERRkmdW66DV9912fxaTW7SN",
  "key9": "4CrzdVLvsCMWcFtzMP4T6DgBMHGtJr6XxDiPxExBVHm31bfJ5sosRuQAYH6tiqpzctTuYKDqk4Z4H4JKKMX6R1Ff",
  "key10": "3mPHq4th9tqjuofXGFoE9TVgfbtyC15dvLoFEgqv32bcjJJ3BNnFvUEB83qzxiCjyLBj9XpA8RtEjrmML5QzKgJJ",
  "key11": "3i4qp6mkCLqUNGaFef1L3NT61Ddtok2eKDVhYEjPJS2AGvwSzYCXsj9sLapYPcFjxq4EBpZgPTkbV8H3nu7MM2fz",
  "key12": "4J7Nt4PEGrcnZcokQJLTEyvwSyTFZyJtxMN6ChEA1dYGZELySpQjcLkshJ1LPS4yjJHxUDQBDwzquBLShc7AyF6Z",
  "key13": "4pBRCHoRKsXRXUe9rC32yaaMyUZU6E9GvYXZ3rotMXo53peijcyy5eyQ3tUbAWiYhn69cwYeVfHcG3DJMmvwsBtf",
  "key14": "47953wHpRZzoYVcUfzLVwj32KZUxpwjA4UwCv1MQqecfbMM3KkBQma7t2YsqnEjsVDJSYp3esiLqedAQFky336ek",
  "key15": "54TctYDcsmEjGDsY23HW4ARbnKNGtkzQXRmrXTsKzUniFNfSRupZBCmehLDQsVDtA96jvuwpZq4bs8HVse479iZA",
  "key16": "4eNs6fdUvUV3y44nyxMEEG1yhfQBCQ4VeUKaX6QBgHNhVnGDi57bGRj5njiEHMSqWSwG3mJ6iAAikK9x7ZrQmYwF",
  "key17": "24V5XJJkXQ8nW9drwaWNrPg344fZ8BBTvqxrwVLB5bTi2xPqwWCVUn1o9rV9BB4GHiNpvHg3KgcTPQcd9n4YT1NX",
  "key18": "2fhCrDK21S15oSGtEqx7kdHDfCErYxfTcuLAqPmafu93nn55ngfGYWQFzJeAZH9ZqVq6HDCzYBGQrdBsf3NMKcuQ",
  "key19": "2SzJ14kFWz8ysH9v5SUCwyBmmdfEMMUCSJnh2u1xedGDc2gFTz6VUoSu2EKL9EubPTZz9EbyGssQ6MCC2ZtQXJJ5",
  "key20": "2qpTPY2j4zUkRjBaigcaZojP4gpfzZFg9vWv9U3PxAupDFXtoFxeJn9ktqfYFdade5WuAeU7ZwHTyqujQmHbZQre",
  "key21": "Wdd5Gg5b1FQHzsLp8bQE1izPv22FrAGWv6cQqqs9ehAtGmZzJGSHpD2cPiqDXySNJsTz7HrVqDDWYWKK3ncNuyp",
  "key22": "5Yis1TKvHgztTdFGyj3NzV2mAto7htvECqDT9rvsj3Ruhjj6ho5od2wfsNPiTpKCYwMNoZ2WS278Tyf4Ecg1SDV",
  "key23": "3Pz69sRmiqbmLjU5eMkyxfH9znvtZBDRzp5Qgn46tNdGCar5cJy93GjKy5R8UUG2QEvq5HVUmZhris84VcUx66nG",
  "key24": "5Gxgp7r1fcL1YeMMguRHEDN1gRD7RMk3UyABtuK48UQWFqk4R2fMVe2FfvGKsVTjnoYGCjiRKa52ZKsvby66fAiS",
  "key25": "5fpH5faKkVX9Juc1Ji3tVeFMbqJ6rV7oasnbVEzeaCTFWG5V8mZJ3uQJQfNW3v45JwmYsNm9yaDVnponVFK4brbS",
  "key26": "2YpqbMoggUXjXZ7fAGPjctY9qdfJDGhSf4wvxKjpZm8qBA3B4MkkXAn9nbVFiLNT1WzP3sXLhKX9CpkLepcV4v43",
  "key27": "3NcBrekxMQPKxaQbGV3iUYgE5Y2jj5HnsgBkNdnVefst7QbDEbkaCt6eaYL9dmhZKkYcDw6n4HGa6vK6yHuCuP2d",
  "key28": "BvD5CD1uTh42SXDiTehdPGZNsWKTi4jjYEEi3JNEdYedcaCiqQgvzTkYCgf8EeFLJG44m8655rLBkWbJGX9PEL4",
  "key29": "4arGh9FaweHuf46FxX4jhEz4xwWAX5qb1MMvjRjHaQ3sStwdiQfsHdBzHReoPCCrJSo11spcWjYv318BbSQ1Eg8r",
  "key30": "3vGyEYvQJFFc2CmCgZJ4qWUF9d2XUVjJf27LJA31aZ5gjrtVnCAkFU33FToGpiYiQJqVBximv3Eui5P9JuZH7mqo",
  "key31": "2vKSm3q7etEho1HYf4xQei7cp76jJzWVcC7fYbsV1u6V7Ac5ZRiCYks6QygYakvRHLBX3riQrKVmBjQmBxMfodPc",
  "key32": "5RgXASgozU7ppk1deDev1VBCFsdAyQt9b77xcuH25ZjXEeE6MDhuvXnQd3EFp1sfnWsknjHzjsiPgDUg47NeuvxJ",
  "key33": "5YNh5RDp6zq6CgzHGKZNncPxah6uuT6wWdaQaT8ZVtHujPs8XjfW93Dcb47XCJAeHZ76A2dR2RNdmtYLcPThfVah",
  "key34": "3xBGKTSksSuLy1QNJTmTBHKq5F8kZRnecrvyNXuAqUX7zCWsoRCvzRL18HRoDWgpziLLPaoGpQtTCdEL8NaeTRvt",
  "key35": "3unyETkoJAVruV8xfqjdAK4B6R7Tmj28FaiXNtHXMUa6z1Q1QgkQD4uJV8e1DfFr2SBg4KuDVFEoK1STfJy2Mg5t",
  "key36": "2jqMG1as2iUMRbw7Kdipav39kLo5bAeSQnMxdrwNksWW9QaheH8viAesQgBx4aeFqC7MDyBBUHgsv2ShUksfLsqf"
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
