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
    "w3cgMarUC39ocGmJiD2oXxB5gyT89Ud4Sx3KKMMRGN66wdV8a3GtPJ51QzxCkhVML7yiv6xdspFepKfRMThWAcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PbVX58TJCSAiohTqKaEbTyCvgZ5SzzkRZ1GVBZ3zViUgfxRfUjbDcm1C41Tuezr9zvopu3d8i4tSvkSDZnvPJJU",
  "key1": "5cuovzp2tbLcLDAVRJhM59tHv8iRjkkHNMkb85T2vLPoaHiUiCrftEkbKYKfQRVq9h51UbpNRjkCXShbPcMAAV9G",
  "key2": "4MDnqykhYNe9S2hw92KhYbyFefSVwLy1yPTfswVssh9L36DNy7QNocunkVqYGXGhSBTYpofPddjuAZUmmxyf6mKA",
  "key3": "3TanBygiWDKUdCPLkYfbgWPdFznqjP13S1E5Vc5QMvv4EQX2nQaiG3A6ZXJdiAfMgYjHCDs1tqwt3FoRmR2YoTwB",
  "key4": "4mwPsgd5iKUnC2GRTbNBKP9RA2dZxXzTkVTzBbEm9ZtHa3oFStsW8St2XT7cs73ZFE4Gzia36HDR72ZP6ba2yuRB",
  "key5": "5QrMJ4KpGLkF3ei6daNvs4UoqWQGda4wE4CCAvZ27os4PBaJtCrbaXenrWxPFAbFCTihQrFjcJXB7XU6NiWeU3Ft",
  "key6": "3P5Qz3cUcwHzjcAAjrvTDHAB7pb5dbGC4t5RnwotGwy6dosTV5c93UuDJuuuU8Jaies3ZNjctZATitWnctgw4G7v",
  "key7": "2BVRNEcJbhS9tg8dZiCQvHLeS8oLWXeNdEp73KSE6HTdNKB4rfjd3BRM1yDgXR7w1XtoEgHrEjy8VqXVheWRqnvD",
  "key8": "5mbfaZEUyumYiSRzzbQBhaeLsd38j2vKP68JLgcQSJFcFCM5amfpPSZKEFdqfb2ohPHtvKfd8c39pJqKEfDLwSdZ",
  "key9": "2WGfyL9XoWmyi3KEGdjZJ2UWeZhDhDEMKUq2r4XsBuLiGtPbWtca9nV5jJ9XkDEmFKjYJkbUEHkgFfAvz1d76S3o",
  "key10": "5KJ5f1hwNa4gNuqBrZ2EmF7vCmTmLmcqpEUGgUHVgEp8p1bGFQEkEfxtkCH8dSYBUbC4orhUegqwwa6jwGzDA41i",
  "key11": "53Fi4vGbpXf6w4ywmt7XrgrTuvJkyLtxP5H2n7LdsL6HamNK8Qz1CAYWk5HYhRSvck9UWDB4F1LzzUsujGmDxQpY",
  "key12": "64okdAkw4xj3UJEhMDqHGQK4EVzPYcP2TQK6TPAu8q1FUaV28qY83PsLPMwejkNVZdZ4RJznWxDmMzFCBXSM7Zhc",
  "key13": "3f83tUmeYn4WwCbTHZsHke3RoMAihXTmvAErM3QpQhCpAegJgC8LBD6YDVc9G2H5NdfZ8EGuXuYC33X6tyWZaPNK",
  "key14": "5LJ3idKfU3LzDHcckBwZF9urgqQyVgjeu1pyskTc2jmf7osTNxqpPyRG6HUfad47bpwWisqqC2jXqaFjBYZZM1hM",
  "key15": "2Uct9qgVvzFvTEXNsivWULR5isZNEakzXPFZdjFcumk3zVzXJ7aBzPagDqpbkZqtLa2ihGMB5kftQ37whhqFdhYi",
  "key16": "2Zv679xk2XgUmH4bjSv5dQ1ZyYrsR6nhHgDhKAPTHM7HX6gqCyzmj5oYV66M9LqL65QqpyJiMEopWkeQW8XyW81f",
  "key17": "5uBgmw2tAG3EgN55LvTdQdyz5bdRV7Zzn3pXHtLuniwWcmUhZtboJcmPetTDB62GLicPqRQHuAnjKFq1ptDmy7Qu",
  "key18": "5n81Y5GqPCQyUZHwTPDUjZqGAT1nqsV2rZ5acuVCGxV4EEEXUFYBh1H99fczipSjjRq8rcrAF8dH36WsVKpXQANL",
  "key19": "67ps3mE3de3LGU1ZaCcw7yDzNvDtRoqoK6LAuYmwEb3dxF4zLsedDT1XcFEgeoDGsmVGGAyAvJ59ch5HLsfdUTqd",
  "key20": "413tUpiLjDDDCAnzzmxQwMfyH8biUQkVhis8hBLZr8xAGF8487L4p1uRuC56gUeg7jjJycgVCMifQYDKTRKmzUqu",
  "key21": "2tHFo2a9PCaqJRbMRQTF4qEdZBtYZEW3aCq5taq6NyV7E3WVbY2DXVUQko2oe8bQiimbcbTVm8ECd7tfTQdTjUtn",
  "key22": "4jXvbumk2ut34taS3WBKM9iaYuSisB4bdzE9zsUtxU6ktQGdcozmBaap5T99R2cxcmvFJsP1CRkciGRgkwkRFuBW",
  "key23": "2AxAG6iHFSj7kFCVXDcniv4WQRkNvC82FTZz1sPYCAFkgUot14xxpbn41yZa8nwKwHsv9oyk3LZhQThiAWX9FbQF",
  "key24": "uPPdootz5qaKazPB1BusQ94UHmtm471G8WdhqiVPesph7S3Kwx3Bt4bvnNuYvvQiGBbs8oizuyDanmyahcAtUSU",
  "key25": "LWyJnjDkQuWvoesaKMjToQeBMGmL7cKfQX1XkMBCUheTqR8vLXokt8LEHs9avTyVVxaA68tG1W8XCth8uDyFjwT",
  "key26": "3rhk4guh1j1aPuKV3h2j5aVLaGK99L9vRTRu1uPN56CFUBi4Pr94LT3tVT2cn1r1Gc4U97qqH9qH3t3aouvwcdk4",
  "key27": "2nguNDQQKHyujracQZ1wWK7yjrJ644LqSNMwvRD6XefVYJviZMhzLJ5Jb8MpURSbY1SzqH86zrPVzkjpxBxJ661T",
  "key28": "2DnevSpRti6fNwmju3PBJTNgw6jYMJxMfjYoAA89EGJfncGvn8eqAUg7MiBZ6AyfvPFkxFXhmrCyLhfeFmgbz4yB",
  "key29": "2Jm2EUQYX1SmaQ1QsHgEWxt43epCnWSq4kM6akf7jSiRDAs1VaC2aE25goQ8QALFbEBM3QjUPHWbXnCPpG5wZQt4",
  "key30": "5NHnntxNpTETRDMWACRmtt8bWaxbYJVoxX13T75azp5FsHLHXJMWVzqgk39gZEr9Q37iNP7uZKShXu2GgKCwp9rs",
  "key31": "561iqjfGyeaDGsFmeJDmiAEwCGatgeY1vZDx2z9QDAZ1QLPBhV8iNzBfUuCQ5aA22d8NHepQ45bNtEfutpLDA4qn",
  "key32": "29AyUXpWpgFPY4ZvNkjn3YyxRv34Mg4mtU3tXgvoXDPmD1Gmt2N4U6TTjbhzWqbTEs15Ykgs6GoRtdSxkZrfHvKf",
  "key33": "5m1RaGt9DkxmToFsq2y7ZeyM5oSyfTyMAJjVNenJj92WxGPKVwEZMPWpJPbsjXeTh6qiiNURMNpTg6atbrvsub7y",
  "key34": "YBsYaXuqc7vxKpY8fREYUfamdcAgj4fWYUEfzhYvW96ZD1yaavcgPH5z1mnakhwiPu7gWPgg5kRPn6fbbtHDKBH",
  "key35": "3HhTprUBu4v5FPXGrq2apfBhqroiBqdGv9m2UgVzyhnZe98kraQfyjB5Q43YuesFkvCGjkbNDpN7BP8pqp3yTuG7",
  "key36": "5EfYFEouvSvKFK8coCTuqW1wstMCbwQxFNBR4bxhd962kjeeBfLyF9KrPki4jEq8BggCfGNjUDQbVcMrjjTKcHdE",
  "key37": "22g5AmA7Vqz2b9K17rMMRCNRc7h225GvbaH4yPnpCCq2v5sak94gCZ6R8xs1R4APPC31hupaNpP8iJQZdxwzH6gm",
  "key38": "3WrWwLy7NWhghXNY5mmamc17mvQiF1X18pQXFp3A3sYZS1Qsh5jS2MaKwBKUDubHf1eomGoqhNt4p6N2y3sssMqA",
  "key39": "2KoTunyxWgdragtwS5yyEgPkRvBbw8J8ofqDZWuPZTjWxS9xoJqJ22YErZkv12z2ZgFG4XxFg41UDowPcF3aYLHf",
  "key40": "5LyKvXAqN2nNLYZemUGNHKut6qtAB7bPgZEBJxenNyCQKaJq1eiz2Ppy9YZKE1aF2sLzaH2biEoxouWYNWNWx75z",
  "key41": "3owpe6SMQqKsuHs3H6qjTkaWbDt7xTtruXNaqkzt1E5WhvVtH4spu59FzZK4AvB17PH5MiNH27z9MJ8cDoL5NS9g",
  "key42": "2jPPg3a8tgQqfeMrnguLGyRSweGiFSk7XQDoiXg3gp5UDT5xDrw6ju4NjXvXAaSc9BPQ84czyHruFYG7PQ1pgXL2",
  "key43": "4hNkcpxmcUq9PwRkzUBfsQfhGqx7S5Fvz3vH2eSatTtRWSMeg6ds6WSxurEdhhNG6VjbGpokztXaPTahGUNVrnVk",
  "key44": "3mdigGKBVM9fuQXAWziHGC9zLMyz9SksxVNEPtzu2qGo1ncvL2Ggb57Wa9MrS6GbU7AYeh9eN7j8ULeBuV2CjJSo",
  "key45": "YU1z1kqEP6kdVMR7TC9sHQaP4bT5wzsB6NdyxB4CujVnUhsWbNYr1SgtgSdfQXg6Z8icx69vfsD4dMDrbwDRSvi"
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
