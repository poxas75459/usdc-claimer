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
    "2Vh658JQcxaFvQwrye5q9QJDbYiVKgcSstag8mrnPUV942PhjgeGfAiAJvUaepAXU7E9UiWmAoFShX7i8a9C2Pce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R1VFVzf3Ryr39NUBKb4wDGuKfQfnqzJ4CbppMBaJzrLbZfzVGge3wCTdFUHfyqpoftA866UX4AmakLtvR7nHkhB",
  "key1": "5Py21G4hoHvCD7X1jqbTaq8HeVFVVJ45MC75zTKwTL8kfCwG5ZhyL7ghvJYLEe5ihWWnMhiHQfxJgFgLRJqVhEGS",
  "key2": "VUBN5DNAApaxcqCfTsrPXdou6iv7nGt9PjYDuX937FDZNNBKL56oWxzC3tKSKR5gtvaHCdKkFaNQx7Vh5BAKqV9",
  "key3": "2mZSeFZ3cdrWdP2J48XPEApBLQw73HMEo84a2N7suun3f7SurqgvkubsqXztrMGkWDkXaPqGLNHLWRHoyxo9hnuT",
  "key4": "3pkc9vxTNbaiwRWg9srbKo6sHSxQH5yCsrq1ahbkfsrPFCewgkHDQzfghVMPDzyY1uGF56Nh2UvoMstBCyJvVaJd",
  "key5": "31UgadiceXjE9QpF1c2KqCUVfDaTvwT7kYEW4aq1AGe5foiL7VY2Ec79T1m4niRgdsF4TiZShFdCBQrBDu9RK4oo",
  "key6": "3FzWZHoCBggLhri8UPwNtukCYNjhhxZh9jayTXR3GZk8xZNPBWVLbLRNSCvH71sQZe1hjeYwxRCMAw9SzCgpsUR8",
  "key7": "4w7sk3ZtfK6i5Ma2Poc4F61H3EbTxpmq3BvFbVWyh772tcFxTf4mWrN6FX9WcMsRyaih1bY19BFyLzfqrjfLM8ed",
  "key8": "5BomB3husr5zJKBiupR8uqztSkWBVS8LFgsiB6FT1gPfqibXa2URNyoD9zU7JjMWkLi5K1p3aGzfkXNVc1NfppzM",
  "key9": "5MDiDCdDPnEo69FmfLfKQGNTiVcUcRG1iZGVfrFh2PcRoyTDGFCQLbAq4N2WW5rztqVJurrvYpqdMWie4r1uc87w",
  "key10": "4RkE7sVo4vHru3ouFVzJ8Cxv2XrGCTKdHtorrVcrz4mcnxBbye6f9KKze5GJ6gdJyVzx6idiBPrh8QdVT96xSxuo",
  "key11": "44bx9htxgdeFmTZm4Uiv6GMSnAQbLYHEKkg4G48JrLKvejogJaim4SXq51rvbXAku63axHNPkrNDdVNXWVzah7os",
  "key12": "ShRC1VbmGwVJFhftK78XKPmjLXT5bRwiVttAzEGyQTgFZ8JP5qGR3Hagw1LyWgJbCTeopwcqoBysQLwE4u6dtbm",
  "key13": "3nYmtSFoDnTw9xfvSuZDXJs1z876da5pfk9drzDyU8MmnGpBA8VDiYDSNDAVtZDQNmW81wSAvAtQfu2hK51K3txF",
  "key14": "4FkZ9e6WdMTKTAB6hBG9Ueu1knL2NfREgQfgPVNTDFmL7BJSesdsFyK9pW8HiYLT7CX3Bjswu5rtj9dbZmgon62y",
  "key15": "5GVaczaWGNW64hxGGVNvgJoYjjxVTn1UFr7uFHAjivDezheQDHCMaJQEq5nAbeZCU3ueAXdtRpEiJHkomuJJct8d",
  "key16": "4MJC6DQqsFF4RJbUuhkXt5TzwzMgtohFE1YyRxuJnmLLRQgB7stGhMAqTFR3kXmCFAM5CMk8aySVPFCJYkCsY9pQ",
  "key17": "2ibFkzRrQaKc3ERMPsjRoZJuLgwhKRyvi8SbpsDNUSe5LQCz8NpcxaECxbHrgtY6t4D2SRwivyDHpDuNrkD7QEWS",
  "key18": "2gooqY8pPUuNB2cdXQyjTtxy8Aqc8puKmsoKSqsnTkwgWZfHiypeCo4vEwGtFCeYDrrgpoKPJXQvEm8DH7gcQNJN",
  "key19": "2gQM1TbPNStNaRDKu7EpmFLoSnDiyw7MVjZKG47T6GxEiXy9RGAEiNKbVGiUiXeNQM6g5o6UVqbfrZvg3bj8oGCb",
  "key20": "2h8apbid19E6BdX3Av1AwQhPJB6CSkWni22uP1zbeQLpx5Hir8HmjVDDYzWK1HPSL9KkicMPe3pP4nJH8eu6sGBJ",
  "key21": "4Ep8qU7hnfEboar2LQvaE6ZCzigxnVfBgU3E8qjhQYHpxMy43GGr1rT4bia4WkDf9Tczcya1bcnKugJiBFDTgAdZ",
  "key22": "2KRiYJwaGvh25bpHCjUBZCrEzmEQyNDhBTTaGf8ftsf6nQZkXygis8uZeqi5pkChcqh9K8FEeWC7WeLzqgaF5AYV",
  "key23": "5hWNzLB3Pbbv7Bhy1rAKvBX89Jrpb353pCs9pz1L4hw4QYqMU3marSZDq4zxPbu4JfSewxDVsDs9Rwf3yU6vZ4aU",
  "key24": "Mzdy1rzif9fVAb3iGE99LjwjTCjbfkTU2vRxbG1JsjMvKdQAh8ZAo84NZbRHj7L8MA1NHwhqA9LbXqZDK2HDyun",
  "key25": "5TadFBo9JxReNwRwNeffihmqF6FxrHKJ5MihpMZbws9tGJmX1WS9GVVY6VedEJQN9uVAjFCtdWqFyFra44SEQgfk",
  "key26": "3bV5WMEzfm1BwZwHGQ5JrNAPoKJh8ccQbhgMv9w6M8zrLWpf2TCxRFZqs3ZHvp48UV4M6LG912xXErXia3pxKH72",
  "key27": "2fvnuHroZ1ymhbx8u7GjbqhEM2nvhGBvMSmZxF2kSyGjwiCreuVd6nXp4FgbCqtojabgptW3hTwAn1RcyNnue5fC",
  "key28": "3Yhk5mUqRoKS4rC8CLoN51vQR6YsWF8WE3mx1hYZNJktfDZF52Bxb9KQFhDQmux8Tcy9sbMbMBcpNsfEpHtFrrN7",
  "key29": "4RUQ9zUbuMReeRj3MbZTSz7YaKJFQvDDEQUTAXeLY9EpNghhYSL8AVATMdr7ux91v2sB5XJ5pSzibSxdP4d5FxaK",
  "key30": "5zpyzokH8P8eyJC2vtG51sP8N8F4w67vngKrvJsk92BhPu18rqEStACUu4wikww7A1xTY2624PsaA38hN9JwsfSr",
  "key31": "3iqHNJzh6jkBzb7LaRgXAfAr7ooAhxfr758JbqReGgRkeXNmDPV7ssS8rki1PJAZU1pzYwMhMELSoCVbvesyX2v4",
  "key32": "4D44wKEPB4xYpuUJRAiynDopJRUGbmGN3e5qVDZBWtAcJNiSmTPpnYvhnjtxmkneWh3iVekFqxvnDybdwKDNs86P",
  "key33": "pXSZ2PM9FYDemcAsi6g2yXcDRoR7WMYHvZqRKy6ANRhQW7DCxqn9nNyiypdvSbdEpwmsnwFVyDEahMxGaVBwk2S",
  "key34": "5bVK9RvvdPFoJ8xhAwtPwTr1kV48ph2ocDGVB865P3tSUmteh9R8e4QUqeacnuMawjG7Y1cMKQj77A9z9igtHbFs",
  "key35": "vcCeFdJ5XbJVKFszj2VTq3PAKS17QtLB8CESGtJpuuo4E5WovqbnamZ4Cvzw7dzZYHR7aRhZYB6yyQPa2PDkFye",
  "key36": "5GanW8eSKp7T4s4tvqgAnR34zmSaAevHvWeGffxkyVHuCth18kB1Rsyuui2Yeee5yb22UWGQ15Lugy7cVtBLEdgf",
  "key37": "S8ifdbSwkCNonsgyS3uwGv64pJC9L36uaZFMrdJtobsxM224daYJQ3kmebDwhT52THx117g69gWFgH4ZHodERcd",
  "key38": "5ZYrpGvFgt3VhfHKSVTF7gg7tJTGDWoyQgjxG8rFpQPqQbA95edCsKFdfj3PSgzaMa4QTUh7RrK4ELKMzEUHGx4t",
  "key39": "pgyTdYWswCgQbep8r8tNX1KthXBWRf93TRw8SYg115essEykUMc64EXrLBM7LDQYLCqLuwjJwwMcSiP6FpfzHHr",
  "key40": "3Qvw2V5i4kdvc8zJCESjV4mYTLVDddLYcEMrUtAJCFQoKfB5a2d9SR6DXnuawoVgamc66VUww8KSBUBqz6o4kXXc",
  "key41": "2PW3Gm4PcsNT8CjqY4gj4M89wfH5ZmPwU1Rs8midVBBCahqHKs8krW2T45hRFNNYnvqJFNoU4DAFWRCWwrtUQ4SG",
  "key42": "3nhoq7YmqSrEK88BfzJtZGWKeWskWugei9EiXeoA7EYPcw6UijGJDgntrhWDVapZRZDnRf7eH3Z8YfVqacCiL6Fw",
  "key43": "3LqR3hrL73dAgZE1AUzT5r9WGU9dueHGWW8oBeNPp9RCZr6VXpN3EWHYv4asPg8tFicdEbvpxrmZrH2s75L5zcS3",
  "key44": "4mXjd11bbvP48BCEj9p5MqWi5uHGy3r2jKqZDYSh27y8kztefu9Z65mpYVBu8ohi1eC2jcrm954TmcYX8EYoqYs9",
  "key45": "ewnJKs3HBWZ74VaPJU8wkTEo9FzGtKiF7vrE7RcWrnqwRfbWofUzAehfWzMU5Md8c521hu9L7aScQafzjkWYS8R",
  "key46": "3vLhWGDEwpfaL3VmktYKjvmY8b9NQ744wj95Fh5YfVimBCzWVppDWsRKq28a4yA2vpKSfyA9QJPrSetzU11fXxSf"
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
