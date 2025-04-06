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
    "3RyYQkkwkWfVxfEJbtw4eE5LRGQcAa864YGZHnfTt7R5JF3dp75S98eEcGLYiYEb2ieYv9H6ez4E8ZUKz5byimNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dU4fuP1ra3ihfRD4w4zYSCLoeS4cJ4L1JdCfhhYq8rcuwBJi8bH4dt2PtnxvnZoAGUqMZdBx9s3Aj9x7D5QiQgV",
  "key1": "26Fk42jSKdHuNeC1weFGoekfPKDnttDkuWVDrEX8jpWz62eyK4MiBNWnasZA7gT5PmvUf5PR3U1zYurmNsH7fYix",
  "key2": "4SzyCuQanPeyUYpzPHqrR7Wgt3HsZfsCVLU3ZLEw5dfPo9uSfhrGkKdx8WjWapPPwStHNmpd555yTapTdizDkrDE",
  "key3": "2Jx5rYwoTNjGKiwohHdzPfF3MiWjm5iawoRqXcdFiC3wkLupGejttd2ANRAVvNi5c2pC2fL62vbzTiFcpUyzTT9A",
  "key4": "3PiaU3k8qdbwcRPNigs4fWwxH5y9pA6foPYoASuU373iymEtVTuUXRqUr7ffDkS2wprW1JQZiupX62qrcFMndnjo",
  "key5": "22vDLc1FBfuXh7veA8chYatdM3wQosKEebGDa51nWHKF8JjoCebWiKNuNy1pYm76NWLwnbq8b84ufEdu4Tid3KFe",
  "key6": "4Me8MMDoGHf1xsgj9pmAX5dPggyaVH3bD9nTC2eF2JtBSAYtonR2ki3hBx8dvhPwMp8AVSfbn4GjTaThusDj2342",
  "key7": "39mf5RfQUJVcoR31zbnogVMMv8dcZLoEZH26NuFEiPTXg5pDUmvVFwLravNgWairgFhJfPY518JKReqLLHVpMGVt",
  "key8": "5uSPAVH46NiLwM1eAcAD6xZ38a2RFA7qxYW86tmYsHp6pwzXxVCL6ZELT2ZG2Fu6FoYkbTPAJ5Fcp2Jy1YQtMs3C",
  "key9": "4jqxFYK2UxJxie2CiAqCdYWLmpNBFKu3pVtcC5TxmM23ZA9cbVK8HH3Z2bJBxX2r3jvBqpeQMJXFNLbmCUGKDA6P",
  "key10": "hrfEekMrKZX9FcJrNt8pbn6aT4HmNEzKpUhAhg4R9KBYgU8V5KkrtK7B6KLTKy6zpW12yijkF34CekTGEpavwCq",
  "key11": "ToT4Np5hCjAytZUzNMhto52SdkARN51isvJRfJpCLZei32bjGGAgU5buF4DSJ6cz7Yc6LynotKZBs1w7s2Vk4jz",
  "key12": "5zEgx8tbXCJuneG5E48fQD1362x1KShnGWJshzRRns8gvVHDfPabGHppDbKkCDWgqXXxEhpAMpKCRzqyTZXzSWFd",
  "key13": "2AHuQjA32xNQRqHyYjbBuRBrk7DeXch6f5zdQ1WBXUh9MHkDP6H5cyUB52ZPKkYUj6mWvejLWzTEm9RrVap5FXRf",
  "key14": "4dTZPFm7coG54i8B3zZywr5qKQa3v7bYkqbq11v4tcLaD8yrRuxgMXmQGePHdijdjWn3nADLjoxyAxGfHxkCCpuv",
  "key15": "3oqHXXZYuRakVyD4r6xwUWF2SfMptM9ZQUQj81LJBbKhLMg9Wi3WPbtJpj6yJNgCq2ascnhCnj8UJ1QWfhSvUy7m",
  "key16": "4dJ8Az1wAtXrKy1BsPXDS82o1akdNR2D1aQLofStJFMaSXexxQF1tmygVDCBqzkmstZapJvwQ7VWvha3fTWP5Dr2",
  "key17": "tRNeDSj49NY6cESxgY3V7kNbytLD2vPgxjGsXGiN78L6srbLMRmdkjo512eRe83FvkX7GSk3vBA4CX1ETsfS9LK",
  "key18": "vc1Ar23PtLQbUikQzxnsVsQ1WVJhASyS5nUCiEX5GDWEc2tfTQ8fjMSwwPTBRTCdCUoz2EJynEuDGGtPib8wKJk",
  "key19": "2YreXziP369xSCkReEtVuex336aDaXpLZ4hrYT7DLAHPHUPojBetjVFaDD1JvG8DJ871Q4Fh56W8w8xmjhDBMqZy",
  "key20": "45eAyy8j45f2JWeaYtvZ4dRNgREViuqPAxuNxxNUuYcLYxYUFFK8983sv1fWC5iCjxEMK8UHZujsMNqgDqd6wLex",
  "key21": "36Ktu5NUFmfHKaQHw5kqa7rPGRdFAsnw2jkc2DU8NnU45bNu1GhjmU3QW22QeE4GMuS7Rdd92y6umH4ZVEftxVhh",
  "key22": "2BiJ3k7Tqoj5TJLd4cEc91hYNNyBexp8LMoKVzgm5uRp27SsB9L8x7UXpajsQH3zmpZw2hoWYt2z8wVx7M6q1npg",
  "key23": "49d2Q2e3ExoiDXU17rrQHzysTszLx912AEGcaSyCsFdJZ8bpaPjodunQSy8CVbpRynhZWs888JNdzQk4Qgsgvz8g",
  "key24": "zdvXRzdG6mvpJZ2BW5H6AvBkPXmozFpL2UZ3oTFQH1bLx7qqEv5V49wRoseb7x3eqnH5vvRnRkMU1JGHcvjo34E",
  "key25": "4qiPkCHsuTNnf1y5megfFGCdcLbBRWq2JNpxQ8eseKRRmSDEcEePyRqxq1Z68VmsC7uSwru3cQQEBQvtibGZwz6p",
  "key26": "3TaMechzN4hgCHju9KEapVu4rqkZB7VU2hMJJwXRN3vP5VC2EXE5ynAuU2tWMoe8nurkjyVpdqdHjHBRz3pGSHCj",
  "key27": "4eTcKfwNUaYUsrHrTyJsDrGjh1YktCJ52JhfLzAZ6HkNX6gXqHy8rahouHd16MH711kbgBfuBXHSWUEujw4YN93F",
  "key28": "5eiknN7s7TDBwHojC3H3CWbx9g3vXQQXDtp6qQt1n4u9PTS92Rriez1CjTUYUyEr7UeGQ24DAGTxMrQAH2YijEvf",
  "key29": "2dMYtVbuHcRdokQYLgux6wkVTasNNzDbpAV3zC8WT2sdxav7RTEmKbck6brbmBU4fFwg22Dt4kdXtjjBn2NmT6UR",
  "key30": "6fSVqdngYAXUR5T6E7ujjmaUeFP33oacZHBqwRGBTMBPqLX2wsohw2nwRsDgkcDcGDi19zqb2RCLp4UtKhKt4Ua",
  "key31": "2xboMvTGFmTuJDfAA5wnW6pRejsfr21w5pKut4AfEx9hUSvVwNty8oyAqc7fCogt2e4dKg3LN54VQzeN3VdvzKqz",
  "key32": "4ocdgHyXG331RNzaLknv8DUiAAQSKNTDdusHGtR237qRek1HmYLQieCz1yQkU4ZRRWRFfsFxGnbpe64EUGz4qxTt",
  "key33": "5RqM2BYBqFL4q8oqmeb1MxSmWWkqPdh5ctQMv586fgT9L7Q3ERE9hhCjEWwVf7rcF9zXGV4epAYbxGRg173Z1tsd",
  "key34": "R8NHxzYQDuz5eXYh1WizagrXXSJ8uTtZCyK19faHJXBn6xtcj6yi6PeRzkMGSfQMtAK72fnNXav2CRXK7fX7smb",
  "key35": "4gtWyajFaYdfqnGdj6jR1opJtYj2sn3NmwZxiusxU11Aj4QN2CZnCJJjk5K3nxfTUT1z87DVGohYzBoozDuAomw9",
  "key36": "2RiUTyBrP7SYFhfK4bxfTWfCTuUCdnbyggBtm9qY7VDLguRG6pPm1yVCLLckyGPy1x2Jyd2aqBxL1eLau2NbUt95",
  "key37": "3uyaHLA5eKsgo3HnLaV8J4JAJ3Tg6G8eJfeQP4SZVrskHQuoA9zrptvrnzuxYRyuuf3JQwK1uzfWoM5WJ98ANQkq",
  "key38": "2HB8vgz3MgUysNFD872oF19Ex1pq4ESF6T2s1FR5WgQ3nCzFCqnkmrXq42ZYXM9p9eitGSGTfrbGLNMYBmkK1PT1",
  "key39": "3AHkT5zAatyJarHutFHyTTxEEg63ZZAuQqRHys88C514q9WjkPKq33V1SA18vwU62eRWCvhLEr711Y9Z66zswHp8",
  "key40": "59SZUMzkcMX7yvLtNwpwabMYXeEKiwkontEaXoiA5RYxWuXmAhtsswXiuCXwRUkeqHkUA4eBjn1RxfrXNThq1NCT",
  "key41": "bUZsfm6W9UtKf26izMACWEbrWGZBUZfU7owQSnMFDUg6t6K5SPGGJ52yteHyHgcpn58X8QeLD6TSESvFnxfZHos",
  "key42": "cFetq7cnunA6T3ZkZuUui7e9HoDj4sGZBCZuLYsR6tx9HSRofmZ43t2racsYud2ytFMCdeCMnod9DMDF8Y9xJN2",
  "key43": "4HuEUvh2MKzc75a8ffZbSzR9gjq1ovhPUy4JapSiCwh1yL4pibmKHrXH3be8eHfbJCSAukDRc8yvk2kmD8YikUjf",
  "key44": "4kpV4wL8TmijU4THyoiP7ek5YBm86nLYh8H4kRPopY1kU6DcE4sMDVx4D9pcDNRWjWzWCtwUVsARvS2Qnyph561g"
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
