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
    "54LaCyJzgWpBiaTnEfnX7Mom42HcLBcPe3bWAmH7a9zSaMeca8RJV57RgfnQnoBj51EA2Yso7bfXZgUbSwhE2GuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDmne8W9SZXg9MDcxo6q4zejbz5TWvfW3md1CFfS8FB3pFcMB1yfSti2nfsGyKPSaDTAnXW9QqvPjdxeJEE9Jfd",
  "key1": "3NYUEryrq8v87k51FMpAkkryTao3YwHTGtBfraQL95wRyffpFQqrLp4tpNfpnUqVqUChk74rmMdv3XkPtvv5m4DK",
  "key2": "2uEPWTipurhiNWcMsrDzvKitkz5pzX1go1S8ekofST3SFWcR8WxeaeQzvhc4CaSrdSPAyJqJrnVGMVgGprNR7Tuu",
  "key3": "2BCUtuYedikXaEayk3uAtELu7QYachUBWsqEn41zpkeWKVJvaLxQ1rXyuhTczaZfHJGhrkD4MdmgP5VgjApVT8YJ",
  "key4": "5xabR3BdgLEAprGsYqmZ9fhamhxnydMGabfB3rFAqtdyPo7CQaXqaPzzd1ocbKchZ4vSn9GmwrN67XFa11HbcnQp",
  "key5": "5aqdeAUJT5DVkXggNhAKyQR3G1b1vrvKf76yAi8tsHwXbvymFn7hcv73wr1mDW6NtqN7gK22QkcjYKwdasZhpujM",
  "key6": "3V7VMvBcZtXPK3Yv2KQVBh8GNERcsZFi1CcW8Q8kzs5KFqneffinvAoYFYgFcey3Cn6KT43aFWwpeG24BqmHY7r8",
  "key7": "3x46VhEyMxWEKKgdK4jHHNGNwfUR97vUJzWSTFNHwne2bCYJTrLGfqczZUnndmsu9FemwVHTNNPrb2vKUaYTBGn5",
  "key8": "5cjsmVNAog4RsivLonv9BzLrxHxX5ovc9QU1t2NVyvkrMvTGoJ7Pb8NDr7AbXg5WUZbbzBXix7uCuKCNq3bgaowH",
  "key9": "3k49hL9nHrgBt6xA3hKJmykTjxictcv5qi3vBjrxGi19kAUtnTVUk6Rz7SoKWUztBXxmDGGnnNDc28ru9NxPsXE6",
  "key10": "51kcQ5pNjfqd6aP6NFcT8YVWSg8fWmk9c6yUjc4Sd7pRZF3QsppLQgepWepXMnNQmjRVfcrdyWeJPdYv4Qzdxfew",
  "key11": "3k6eLYQjae55q7bsn2bGrGJyHdZ2NshWfP3YRknja7Gyvz7YL1HNwVUomeaj9G86JUm2u16F9MGXdGmhX9Nows1W",
  "key12": "2JQx9gx2b9K1w8MQUKSqXSuThRgb1fcpavBfHkUeQwDFGnA7911YvSg1b4ZnXw7D7ecEGz8ypiEyvTMqbPRMMMYa",
  "key13": "5mHymDK2xNoMypUDhQ1MDxdhSrMz8HiDsU4hohcqfGnDws5ohffN5jfgiqVJYiEyxPqLvsrXaKPt14rQDgmxNYM",
  "key14": "2Rv5BdJCdskx3kZq843PMbH9YietzXe484mXgK6CoKW9EpuedAiD9LkqMf8xMNtQFuvGrK4yp21oocsDR9wEUHZD",
  "key15": "4rLYCKJykWaP7kyrZMsXuktmDBYN8mNky7BC5geu9yxygV2cAd7CeFmhqF2thru69QLUnad1qsWKd7ViWvhWPb7i",
  "key16": "2eyD3GCyD8a4Sa8fZSR9bhNFabsyzwjT1ZFip6Y7sdmZJezAiZ62FadjKEFiigZwR26CZ5EBdhhAKf8GKdYTyDBR",
  "key17": "2manPG5wiec6WQiEhhZ2A2pB6Lz1cAof6qvpQX5WjMKL1F4JyM8kbtuTDvc6xZft9t8kuReiDK5BN6aFPKTJwPXs",
  "key18": "5F36ouwwnmaf8XKVz8XjfSH7Gx8bgxEpMnVoQ86pqronFSjuA4xWt99ZFYtu5VaiMERZ3iJy7pb2JnC6uxnxvJRB",
  "key19": "31jPcJNw3dzfJVHKcXFmuasuUWTw5bgBNk2CyZDrJo6NmovzpyAsWkBXroDGMM7sK6nY6SRiGhihrR77b5fYpZQQ",
  "key20": "zZF6jXh8QohHn9tXYpx2YouhckaDaPpqQEvn42Lxf2CC4Smf8HoLE3KbBGZ2x9GHZARSRbgLDLSmepeuxaLDHX3",
  "key21": "5pijHgLidzt4xENBo9c2iXWsEmbgdN5tTTCJtFmdHPPntYaxizqBrfmSdF9srKeVkRFsJjqLEfPGSQELPawtZFdX",
  "key22": "8fCBTjib6CbMi6WWjqMRrpo4CXB4anWzzCc6noGQKv3xkKX9rociRkfjHc5YbyjkWXzTxonaTmRyxES8ieE3Mko",
  "key23": "2uKXQuhVth323JSBViHfzY4xTSY51TwK1G39tJVSrSoUxRHpLd3KSW25GearWgzQqn2VU1wztuTLpBzqtLnKBDtE",
  "key24": "5QK4tLJCbvjkmXtwERP1NikT1xHnuRGzK3XSkK2341AeGCpivbQ34nszAncaiCfEVT8EVHwFugvLumBkoVfVEcmC",
  "key25": "37fmUpWnu22AwFCdV2yPupzwvCJnthiTRdLxcAcV8jz9ZWLGpkYuQkkMZknhTFYHvyeXJBv9suqqpQqUcheEknx7",
  "key26": "GHZcLGbixGLGrM9FiSbNLjVaAGvZNSXj1jmdwNsnzVVY4hVqdG5EQAbitHGqMrzgNA2Yvw9annsGQau2npL5Nhh",
  "key27": "QfVJYQRqDhDwPFb5M9m2SeGJoNdFWdpExV9p6xo83t1k5ig5pioKN6qHCTPTRC5HBCTJA4NBac7S3JhXdPBBw3P",
  "key28": "3t5t9B9AwTkHc1TKnrrEctZBQDv5BFnnvhFEYp978wLci3sz55aaGNRVkGc1Lyu6dgyrovKxdXLrfDTnyvQb6eX8",
  "key29": "KsUVCpHZnUDwCyeTiGFdueGLtUc8vYWqL6iYbZthpgiKBnz6jyMByB8nT4nVqyvCbjzM4hYtwTYQxafUKo3ALno",
  "key30": "EhrSDJJicTGU2M4bgCd2bdKjEVvhuzwWssq5z3h9tZMsUQuYBaD5Ju7qkanKMuumNssMrx9Yaaf6NivabRFLiWq",
  "key31": "44QeUatvzExHqFohU7hwfzbt2u4mFsS5TdttxQ6RCwxeKkTavJGm2zZ7DGdewhSr63iLFiWvy9yXcETzfTbzp5ap",
  "key32": "3rayrXi2ACPKXcwLhDq4PLftKG49AxnnV4Mpo4ygnxRKDSsBTuEjjnhfqvSGzq5wkLCMDq5FHuf7wRjzkQqNTkXf",
  "key33": "MLLMq2yuSv2MgAZZKMc5xL5U3v3sW8tHieGSAUDfYLwpLL1qAqoMZphM9A1SYL23xdrGp9EHQK81UVDYGSBtab3",
  "key34": "5fG886GE3E5AMqg1WMFk3mC8scNcDPCLHEtTsTwZ6bn5f5ZmD35nBqQv2XjZgL4QytNzAJu5VMprnRmnNbWqd4oR",
  "key35": "2zeAJX5yyCATZMNjEyNzhTgsFEbs7qgJDSmSRQ2bHMtZPfGSp9z64CdGoy3PbyuHQRLWfTmCUSExnyXb1GZUExJK",
  "key36": "7WqyVWDvyPF9ExiN39q3cQ4zz3LenJsmsRuLY6EjNCFwrLWD51jJwN7pYwnNFuuu1oNoPfGH29yX1MMdBYDydAK",
  "key37": "5Qf6hX1MFdMtMi66ReWT1Qt3BqC91NYQuWzN9iBYMwb3cNFoEiK4cHbh9KpoGDXmTDcND7yBJN4A5TDZDf3fjpwp",
  "key38": "3ajmnr2Ya97SNmiUzjA3ywi3VRyr4u3wcJqbi7D5A35juH2XfgYugcxW7vaVPidLv6RxZ6fkzyCeNgw1oyoRmPrh",
  "key39": "3DoUkC41CEgzn4USs8ce8Vn6GV9MSRGm9NSf33gkExpyc2WTQUcXBbfubEEb2aMBi6vcWzeVeX3Kwm8Uu8Z5xcKf",
  "key40": "KjNx4AhNWKEbCsurMje6yTPJtK2jFt8wxYKJ7n2uFeccmTue7kbXFwzr9b3XXyMAxUut3zNT8x1w8WGUuYJwDH9",
  "key41": "3FWEuiiTGMq3kgWNPa822kQCyekyyXcbDeNqqSjJTauoaiKcjuCTSZkHG8ia51ysxZeuFaaDGTDWYSg4ycLNRpTK",
  "key42": "4WR5r9zPvHdG6H1SY7HckhmMtb25YJjbEjWQgpiz8G1646iLmWDeaHLK8MVA6SJ5XRZd2N18UjQ2RN1K3RDNNYXM",
  "key43": "55WXubjwZFKBNd7BVe7SeAB6d6hrFtHvEKJD62VqFeSitLJrJSLLTyqnWWjQJDC44B7t8fag9vq4r2CKUH9cMAT3",
  "key44": "2fUxKKkQoj5iZXgGhebnEu12vqPRpUTyCCJJmt2dQigkA8DWtq6sRvQrGi31bG6kpWJFKYja8WD6McGi9eSZzWpA",
  "key45": "3gCY4DtckvA6vESZWqtigc8TKRiSr8vExy2BDNQKczsEky3ExYKFMdLPTq6zSMkfMVeuoQvvq59WR4UihqciEp7K",
  "key46": "4RQ6HzFm4t2BikMVeiNk5Vk5gTLt2iqiQ7LY4dQ1s2J35Q5S7igjeRBw16cN5cAQ2zGLyvYNyWpNNrvnymbCMvHv",
  "key47": "DzzyXaSDFsEUaSA7yivZei5npw1ALfrcPLNW2xP6jGgPbECF7N7dgKFa1Bpje48rMnGv83FJT2j8HRifNq5FxGq",
  "key48": "4dPp3k3xPcRVA4Lmc5usabxPGZsc6weVcToQPCj97uBnZcunrnBkHrxk2kX3su6FUqXQRNMxtU5hhN1Yg4GB8DT4",
  "key49": "4nyJg9G8FSMiqh4NVkqCdSPbiu6PqsaSotmxZMPcr4WffsXcv9V3MYXAu9UKjzPcCsYNNCXGxeDCDpEp5AertJaG"
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
