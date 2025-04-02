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
    "61ai7Wksn5n7orxd83C3d9W55RrxpGyuZVoXcBiVykHSa9Wh4LTzfsjssWeeuEEBfXTvPagUUdmdUBS4nUFEDSjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t192hETNACvR8a4yT7Q6jo8EbBvaHUS9EDvBzXuooTXauiNy4Pm8Wa5vjiah8bqJnxfWrA6ctpjr5cicuJtydad",
  "key1": "5GvtVdfB6WqqXidpUAVJKAyRX9oND4RLx1UHxRdA9NFMGcNEaaL81LANw5EGWiSi6kkMpAtU8pBwBHJfJVPc1Yc4",
  "key2": "c8ayjcf9jXeMRvakoKLKmWc3V9a2yVuS9Jf6TXut12JqELv5uPb7R8unBSs7q4WhQUkoooBF4wCXQHUUKmS7Jiy",
  "key3": "3sBTo6LHhepsx1nLDEZwQiKBx982N5VAwfF1azfRWGcfbc4V6B5MJazdgSdier5RcxEcXtEog3UZkPvP2scaRZuX",
  "key4": "3E4DCBDnEMmBi76XFbgfT5Rvkk3UVCTrnGPP7Unk1ySemar4AnH7yHJs8hZUQeUuEYyh1aJP1ZRxmWwcspM2H3pe",
  "key5": "3423sFhA752HMHNBCpdGBJPihnmWzcGDSnLsUwJLqABuJrDAyEcP4KLyvAFF7UfPHD2DoGUjuv1hrrPAhALw8uLS",
  "key6": "2h921jCSZu1Q34tMdj2iLBRm1JAoDWzDiybp3h1yTtKxnMmGarS2CPAoGGoJ6cHL6pdSk6AyPgE1NJgJLFpCrYPt",
  "key7": "3nQnB6cA3f8Xbj57WTUGNNYtPtLtSEeeoJ25aALHnXJoo6yB8pG4TTP6dF44us1BrDctdaBiTipALqSnL8pzPup1",
  "key8": "3LHbXZj4NWxcNQqmK4cXLFo9FKKsQJapRuUgU9TmVDGxi5h5RjDQGQfNcJSLt2c2jthdayCbVyi8x31a9a1LSuMi",
  "key9": "5bGLdAVUQ4xs4CBWLFfDJbZZGYZmDm6gksxvmKYUNo1r5Q8swiTfeccpyLApBceH2979aAn6xBnpjkyJ9LrtdUZj",
  "key10": "59W6xs4LeP5XhCcCPapufDeLEMQz6ryvPBw7cnTX3bAX5DSp5hHY6ZXEyrdsR2sMd3m4BsSoUKW64TXGuotr4gW7",
  "key11": "22nP9pZcR8JgEmJ1Gi2u4HQ7CV4n8v3AT9kbfLZtStLxyeVLGuFrijtmttJXqRDLDP6KXFGB2d6WHf7uUr34rcgb",
  "key12": "2PujJ1Pr6cK4D4LfRxu1uWWMP8w3QJqREBDF3TWtGJVQT8FMw7gm4T2ZJqQ4xEADRbU1kWGFMMSPrZnLy6TZ5Xji",
  "key13": "3bVn8eAq9gEJYXQqt1CsgjJQJ24UttFdNkHS8TuLfNM7LvnYqkxFbChNcj3odDsLW5RyrvF9FRrkppPoeNL6higG",
  "key14": "3JtWSs5pHxZRkFDHwqRDugotJALJx5UPvnkLwzbf1hjMQupgSVVKJFqrpVhMtiXuPEMjUYZ7hR6Km1yJeGJV6J69",
  "key15": "6hE7ahwV6JpnTgKSezpEqKMZt6LWE29nXfeuLvFNQKHpfTSKpnh5qaHaf5W1qz83EHuKkqCrT9SypaPgybe9d4W",
  "key16": "4mXxGXGJn2Bpy9tKq9BBcHDvQ4Z5F946gqaxejf4k7dixj7NRfsHqamFQM8jig4vxypTLN2Ra8DCw1h9a2jK66mb",
  "key17": "3C44WGrt75R16j3scemtW9h87g6YP2HCztb3t4bELRaaQZfy6q5yxPBqjNVEuwHNKw2fmD3TY2uXQ89QiN3dyrnb",
  "key18": "3TyfEF697dFbRihMQTr7FbqGbsJj2Y8rPxkEjkV69PZKV8jgGEsVGNSTXzSa8pvUqnHuPtQn1yYRDFfzEcr3bnsd",
  "key19": "FtVdPhzRbcAjxGcmBpDaNLP6aJZLupmrixoPZ46DwfHuSs6v7xHpDxtoz7Vf53JTDeTPvBuSaJzJiFSVm1hNPg1",
  "key20": "26Vzk5YgRnXQB15pLzA95qmqpXQRtLiKfbp9qszVrAoFs7tRRPMwyQsUf22mCcb67yamXkQ4fwvpMWBsqqGDM4xL",
  "key21": "2vKhUJkQ6B8YTAHmAyWtbZhzAdGTA3TyrmFVk11ar6g69qXsms7p9zGNNCtb14kF5BLae13YAqDSHhWcxRJmUabR",
  "key22": "4ufpWEV6FVCknaB7fTGeQQwhCsTeEWkrcjErTdFEaVgaECSkDbJX66wMFxiDb8TphoCGfyRHHLZvSqRvjPdBKUE3",
  "key23": "4qRyReT2ReqNP8fnebQsdA6ehvJVQXN13JCi4wuJzZNYxMf8DxSGMq2sjNyzezpxruQhZb3E9zBmbo6YummgUzJr",
  "key24": "5YyaZmR7Pyj6fZkcdyVrVA5uzMYB1fyywyfNKRpERFkrUghFEoux4id4Y1sqESt7MRYQ8XbdJnpfZG1MpSkPcyLU",
  "key25": "2DWTRtajVL5bhQa8cV6BZJgH7Qz4YjXChoadMDTCAp6monfhvAchEyGhkRLR1ALkdrZbg9Bu9McsiNdTvn4EvryP",
  "key26": "232UUFfYWEc63nrJjTDeimHqjWNWgfmjBUXu4NDyUPyhoZMmjoBSCsY9TvrdMwQoEGQ6ihYYGRYwTG2tQjQfXZvd",
  "key27": "p2RDHQ75iQRKVxfgcQt4zmjTRijZ5FtQFfWsdbKnCEUfZPFm1NCgNXuqTzYFu3uzZVBwXW2baArmCmjd17c3Ri4",
  "key28": "4nf1MMUakQcD4ZZFfYbzmFUb6djyA3yTzHxwgvLkZws4yWeRJ57u1mA1zhN5EycLDkzpSKmLHvh1FaQkEfpKS3XX",
  "key29": "33YUfejpCX8eAN9nfaQgzj1yPLGdKNwe42dKkNP2DnkMPZ2bLKCpBqSf7tMuVg7XqEBk1Q8KiGgspbjp8zgNhoAi",
  "key30": "3myzRvm6YSqVXM5CM1fFpmC8HbosdsCkDXt22C1uEMhimGQhBedLpNkEPaCVNeVLFfRzmcv3Wsq9mvA9KS9V91gS",
  "key31": "sbU3GA9RUypnr6xugx7MoUtddepnTUEZ7fsySTUkNBFyogdJ1rAQKkWzc5T6tcziM3rMb9ENx7qgwEjVTJfWN2T",
  "key32": "UEdJnWxkdATycczRXjNbyH8Vqair4nm2ws9mZExAsbauiqaHTvn8YfpSyfuU7gL51eFG5wvDZkDsp6gy4kQCDUE",
  "key33": "4G5BUzCKuBeQpSLHkL7hC8wESrSt8wgDoqgpZKpCpq6kbobtpxg462W3yKna6hCwByMKjq5bHU2ZX5bVW3HyPt7f",
  "key34": "aA2LN54eaKRfomDmym1icV2hqRQjr1MaCQfYDcTBp7hWxbs458i7TEUhXX1V4Ef96i6M5TBNkbJHqan188W3ajP",
  "key35": "4AFWcsrQw287985XE6iMfseEcS3JoSyAzigPkaWsvjkxfJVK1vXuAF29vPpmtxn1JAh78WpF9xvyC3Nd9BKrqJpd",
  "key36": "2nnaBM9XSJCyBA2qn5Hbcz9Q5qhDmg11Y7iYEhhWAk8pJDdTx13cmcH73gabqNnfEqzLfRLoTkRg9huEQdaV1Bou",
  "key37": "M7Ab9xwRsQ9p4T72wJbq9T5oRJCVyGGHrQL4C9y3hrrVmT6kaZ55nGZcvHgV4bumm68B5PwQz3zgpwoyJhy35bU",
  "key38": "ZnsWmJgmUsyNeZ4MUVvnvq9e29iQRF28NupdngBaxYytozrscemVcVwAmtetBXbm4rpCxb631FKRJzUJ7YpoM8p",
  "key39": "36rezgJoBCF5jmQnBLq9ssrehhwSZ8TAafHb1dve4ejBEQ2XRBkPZVGfJVETeGPfV1RAQurZcfdn54fqFmU62W2f",
  "key40": "VxJMHUcFdBZWAPheJdDZjBaEV54JLbg2cuEYDXUQfEMUTtnBgghSZZt7fJDsEybCfNJhWVeqvpfj4tVWRBVh7HC",
  "key41": "4Mqe4RAmFtCLvoGjJvuJrEdqd3VYsXWisSfXLgMqvEehj9TtFGqszg78pVhWPCSu8NsvQKtd55J8Ga18s9ZpVATr",
  "key42": "3sjq6gi36HnPtiwYxFFGPifs9dsuAno7TaKw6RaCXJcdveehTaPHkX4UGCZQdCHecRzFZhhveT75DDyt4S6vj6SK",
  "key43": "v8qH6S3WeVFdaHUojt3Y2iXShuEMQR1J5H4FaEENdsyuCYAG6qk6hBQXWbo7ZTijfBW44XSMXzW6HQcGVHVR8vG"
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
