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
    "4ES5PVJ5kxqDX2qfYWFDQSgRQozX2aqCXwkbTjGCxsTfthsVph4v1ZU5D4sDmCGKTvMYM6gvsofqWsSkwHduqfwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AfMhiPgjPwrWd9gHjUih2sJMPS4CWZWvw3gUhzwuBrXhNGvjgGzvtSZqhgrrn634Sdqxjt4CJLkya82L1MqequQ",
  "key1": "4EiCKvJ89XanTDD3CQq2X5iMdAw72Kod6AhXYev4KJgJ593acZZKByP1x5RqYj3Wf4gtMqnAVMucYpuAxeUcbLqw",
  "key2": "2rbfmDn5YLx2DBhByN6UFE9xwoTTWdSnCSXpJmdXBj9nbeM91mmbouNcjzxURXGKsEUT8QjCqirSVuN9hwyrGuTq",
  "key3": "3LKGvmzX8FAyAZBbV4r3jChwvMubwgyyKBHG8Z7Vn7yCmLQTKvy7CWYaMKxKNBHkYpLhsBtCjskmcC4XTGKHE3Hx",
  "key4": "4Hca48vAgay3mGHomT9W6bGPCPQ4zuRW1QzrXVF1mgfjM49mK41k9pwh95YHW7STawbz8m5GQgX2Cg5znT51ZGsh",
  "key5": "2UdQp2Gn3hXad5uPTLDrKAdV7beeGjj1CSgGhuTacJ96G4hCgSDjaFr6GeHfdDYei2gTHcahLUQSK2fD9KXhPamZ",
  "key6": "2YGFk812iGVNcVuhuNBkQXWT3awjuLSV6brKqWxNa8MayyvdHgW7gmUVL5Uib6cydMKYwJ3tB7LujgxHgztH5Udq",
  "key7": "3qf3UBXBXMd6HdhAWp3aKZhNVWZRfRruATeUW5p84gDnkLNaAs8itkrCnXd82Werefcg7iWiFxuZkc5vBFvErB85",
  "key8": "53Wp1eQBAYHNKGY8RRbP4Q1k4BLuGYRi6Zct4QYsEWxg9ucNTMZ7u16a2xeqC9SdSUGFaS6GqRv9dHMShLHMVBMV",
  "key9": "5BAxFsbVvDSjsmUjuM4Q6acr44bSpeSVcwMTFu6KzpJhQsAiKyEozCNyDbFPRfe97kXM4KgdBhtKPTSAT7J26by7",
  "key10": "2unDJJr8bmZyVbpiZwsQQ8itHApuRFvJ4Rgd485Uw915JEjrtcjUYpv1UQmfFisFy4k3ny9gcsva59CruHRS6QxR",
  "key11": "4XcoyFgc2D14zXtekpZLeG9UTKNxQRt6S9Zreh64eryuuoxpajQFV7AGWAkgZbogKgaRWKwSbhNDP3ouwHAKnWDM",
  "key12": "5xsLt99vY8ix3Dz38LSp8XXZkWjbYJthnawe75bCDbp77p56ksCXUA85Nu3q1JF5gYrLEGpWQ1zQJwexcamukfv2",
  "key13": "5F4UxJFScYfJJVJA7HfYuma81cs4rNBHaquHqvriBSQ82EQwWCaadLRW2cD9NNqZ2WptppZwVcvgzCuHb2rbhZrr",
  "key14": "22uv1PZVgRpF8dUqDVFRNvG8SMGKQ7SK85p21mkHUt4h25kY4hDVEfdZbKUKW2BB35SeRjaz2NJYSCtWf12Gb7cn",
  "key15": "2aESns1Z5wBF6dxdS6RPxebpJbMiJTLUXdr41iz9tYmY6XZXDbuw9GMfB7zqRUCyQWuirJNXpYAEXex57DutCQuD",
  "key16": "2tNzEGkgnFY7YBMHsm2LrN5aMPsGSmmTVVrEDHFUacQ24C4ks4itppBrNjQXmuu2FwMCmQAxSee4cuoQKATLphFH",
  "key17": "4X9JCaA6EhZDypKdLkJNFW7C5axEC3xJMoxUp5B168Ln3NcDsj2UYM8xNVaM9NtS4D4fVBRyVvPr2bkRWgM38vP6",
  "key18": "22b2F6F3ks1QMVV6BuN3W8nQcir91mUfhFar4rKhKjaCrUJTJkDdKxQSZDCeD2PHMhQKrNKa2Bn3nx4g4n1M2i53",
  "key19": "5xShxbuT6icfXSjxcuKSiFPEURqLWhXqWqtdArbCmnWG2hoWbHXCvNovXUiHLAGnLzEB8WtQsE6aovGXv6g8VoWu",
  "key20": "VSMPW8he5MXDLTVXeTRLAx8nD7mJS6tMwyF13k838Y3A3SEbmjQhPUupGbW6BobzPzvCUqW4QaXeiuBHJDXS9eD",
  "key21": "38vG8dC6xVtnBWXzRvtnWXpZo6dtGr6qo6LArWUR8qZ5y9xqwMFp8SkCTXYuXhQhBcYzEEBtXQVemgBpDUSFhsnN",
  "key22": "uyAJQPLc4VSkwAgSpLkpQAdmAg8A3kZBJrBWAZ4c5BvLgKtoWc2XFDKt6Hqwn3DXqHJaMBxPpjJpMdzY47YuY6e",
  "key23": "3yoaDFMb9zUV5yw8jgebkgwRadz2DD67KsRzZuojE9AjxSLco9Fxt6EdeCAeHcp3FMzX35w7SmJmLLnwPKpwYVsv",
  "key24": "2AhDpwqaadEU2uD9PcAFinJLuSy2UY1Z7TGReWGwvABbFA6Pjp5QB3XmqZjGbHGuybJCRbroJSPj4Fpt43HdiT2c",
  "key25": "2g5UjLQGiig8Zh3UaY89xVTa62L9i4EKdHyEELzUeAfDw3FgjeK2wnjT1okhShRmhG2QFRNAX7BaoMTn5nDCGEek",
  "key26": "5hmyJrKNk859eh5Mkfu2M7bxGbbWA2vuYDAaZhmM6RcaJ1keXCNu6123fEduUuwJ7Kg8ZQmHygyYTRAR5bWxPyAK",
  "key27": "485XyUe5UACA1QuUMXuf4X1QowjMf7GPU9cgZfFa2ENnKbQbuxtbrbsYaiqgSCzoa27S3YbXcu17kqzWMXDd2Nf6",
  "key28": "5YxTcf1Un7D6AuK9nN9Jde7ufeFfU34zv6ojoLptVDYkTBAzZyBQnBpJr3CSEzzAhMaXhF5dNYXMnvDjPV2uezmn",
  "key29": "ZyPR4vgQGPh4t7WZe24S2VH7JhTBoduR52HY2mRyvigT8bakkNEWv5x54XpZeNUusCqtoAMoeKqCBDcm7mFgEAC",
  "key30": "mum6VRfgPbiGsLGeXBsgsErMgCYKcshxtJD3RKYZTHa4V27hp4iqJEvPuHTGdwY5DEKSixo1BhkqjfccLH7YeEX",
  "key31": "3ooTUSFgHMooJckB71hw22wEH5tH6MVrcUFzPJnbnRgnf6p8PiqQermjCUWB16HmtNvU93A94rtG33pFNpxPuPP",
  "key32": "4f4DstCfp7LHQCvch9pFeDF5HHq5BW4FnAkpB75D4Gw9gUeqp6ssuacxNb2pxDaccLGKntXrFinQVrmKM6PCPTSR",
  "key33": "2DZqntqs2mYMS2cLJCQRc4U3k7MHxoPKmyPNizrnnwTSt4teNEPZfEQVmjNQXaiaDUUTVCHhjSLdMChTtbKfDuGM",
  "key34": "5frynNQnZukm1V8VeZMDqP1zxSzdktRzeibrULj14tupma3k4VhpgRMZRUgXTopeGhDUMhvo3Xy92qsafLrCxU3k",
  "key35": "3wA7pjE8PRAahzCNB5tvXTbBZ1XeQYJz4C9x64suy7evzaF9p78BuCm5NzsortXp7bsxQiaoxGVYmYWofftmdNrq",
  "key36": "46btPFTCUZrb4HVn6UwNufaKEbq6wEoHa8fuC6iU3izGpcTLQSKt38V7xuBmNNbgsZYa9E6wa8y5899WJgNPodA9",
  "key37": "3HjAjdh8kukjvyYAxNC32FpdJNdT5TxhyZK7dKiyZGs6BokHejsbe1n4TpL3pB8JTS7paNTRPSnsK47azbg2g9c8",
  "key38": "4YCUQJ2cXNjqApkkaKmiG4qRgnQWjanr7kLNUXqxJgjLfyzMWRpGmkWQqruzpxMJUvLknQK1uPuiP5mP3TcCqSjh",
  "key39": "3zPaQggEbhUX426oayYYtL2p82VDwhRVmnCyJPS3kdSX3ac57RLvJHmP1rZeoPPp7gGVNopVjDbvon6DAT2A7nbb",
  "key40": "3Npjmcu1TZMm3kVNh99MqpWAw3CfkAP56WikbhTFMQwqsaQh8R7fxADDRLBUgXih5XK6HNGiPTM5RJBerqPXxatj",
  "key41": "2Lc5yhM7CFGwXmb6tmF8yCarT66Q17LrB28pJKnPLHas5R8PcaFAnybvEN9zH1HF8ZcPpxAGMPq8s19ziuiNyJWg"
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
