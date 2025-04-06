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
    "4xKUkkGsnyfMihyDgo5Pj9ugNZ2tavtGgwpC6FgbzPeycsemx4oWpoEMaL7Lt3oxD8cquhQbvkMkRLHsqgEfCjhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNBPYKjBwK82s9hn3V7EVbcjkBDYUNy3BQR8HVacZsvfgSLu6EYqcg3cdHQoG6vSEXQfUuBYLhVZKDeTDuogieg",
  "key1": "29oVeneV5Z58rjj1tSmgnPbKPkHRUWSv4ptXaRLwgfg7og24JiuhBZSA1zoHtd6a3vSisMZ8ry8VCJohZPezcCG1",
  "key2": "4qFsfBkPuJ2Vcw11Q2GgCpjsDYLEFi4SCTupdtoWQ8DVeJ36dSdo6noJYDiKidhUjDyzWDw1UUmWqs9VH1sFRn2i",
  "key3": "4kYoXRGC5rKv9UVcUhXVUSgp7crMLuvL2xAWCbYFSwP5ipbJ3dYUkvXUMLfD2e6TfsL2eER6jCTK4h5EufaVpDZy",
  "key4": "gY6YD1c4eKdkxmEReALBTACtTrXzwB3VhfeqVqnu1FZXm2EtxQgbqwBJ28vEFiJn3HsW75eQKAfnppUnBTaMu5W",
  "key5": "4hnBUJfvRBnCwZE3J4bjd53uYWdwp7MKsdN5bKvK7o3quMppu3rSRf69coU7TvLvbYX3xc2D7rngL1vPgnvVUrVz",
  "key6": "31NHcwfAaAL1jtAFbizNsaew7zwwbsYCa9W2gRTWxzJKxmRnWovsLGpA5kVr7hAwQ7vGVePQH873bfwqN8rFzMai",
  "key7": "4N7jg1fq5KYiFDCzK5DDYAj7GbKdb7nFPbcscfi9o7iM3XU7CJAt61U9Vkdf8sejk7HrSVJ7ZUXC42SqD3Vg5hYU",
  "key8": "4xHheN3JdWduLrAr5qwBTgh3mdur9dMfSBYFiWGCuEb1LdMFMQXjcbWi25Yy1pz6Gi1897zXnYAs26gLA5vRTsMY",
  "key9": "oh8XDpbrEy9JWPEBYQSQMTRGTkuEmmLzvkMNZqYodB6gAnn35Jj6roSLxfa72Jfm2rCjfjjRoh8CsDmH3gYL38M",
  "key10": "5cBYynHgyYqh6VhGYc6f3hXnZGXWzQYmfHCaTkqVUscQBm25eVpuguoEWgnLcKcynGuPWuvHecVNVotWKma9L3Wa",
  "key11": "4Cw9oEof2JZzZk5escSvTaSKu8vCf1Kpi1thYGs9sJbRvgeD521MgtcZMSCZ52FnpyM6u9XrUFHdWDkpPzFn6cyP",
  "key12": "5CwBQmtiCAQ1gXwybqz1FfXyMn8UWHvxygMTjWTrujANNMGtgcegZfKJ3DxVj37KYj57iLLQssdUPsEpVSsQJZTZ",
  "key13": "2JYsCxxCP1B4E9dXCRTJGEVD5xtttFpog4ZCsZDDWJQcitDBt8AVqorDaEUe4xuN12tAm2iaGhRnfjmL5Z1VaQMP",
  "key14": "2fiCbeex39ejj6kzZ39v14KTACFrHL99YdAXY94Draqu9NiKHcyVbD7PaVpaPAN8HG1hzZq1t1PE5pmC49rwkUvZ",
  "key15": "RtrFHasN7MUjPzSuGTvZcxLv8sJL2m5xRue1FyPHNHFL8FjMCEh3XsBnCvQm47gWq5rhYAtQd2MgG51QRQFYN2j",
  "key16": "5q8Vr2GiJrJfeDsuCdz856L5Sx6T79g4nd4LJRqG8MHFW1cjLVVTZei6XZz6Y6AX9y98BeNXBfX4mFN8xGbmg8H8",
  "key17": "61o8VxM1LjZxSjqSnoEYd42dEQajton8ustYA1sAVbAWs9JSE9za2LZFg5GHq1wiQeXGFgz1GTqEkHvwo5e7ZBMj",
  "key18": "2R59656PvJfWwycNbgv1iYaNNcAhRVzrLCCeSgb4PCTDeu5Yb56FMfdhNXvg8aZuWK6X5bxuEn5PMLfgeYG9Jus1",
  "key19": "4LY1w6aAdmkgYKA5NxhA5o2R8E45QGRg8wtFJa4WhavJXyQEd2Q3XgcsSoLTcrDnTJnujTneSUW2tRzTSh7Ezanz",
  "key20": "4CVT7bM91VWjCSLzwg2tQBVpt3qGa4GxSbJq1FSvEcTjD7L1i3Sd9cRCwbb3JhG9KrE2zXn254qAAJPAtKbMCXGN",
  "key21": "5s6JciBajf1WduVc8myLJDZHYgk9L3pQmSZUcDjpVsi8s7FaCxkKQHpCQhE1pXjJS5o4m2qnpbq6r9KYAw6MJkcQ",
  "key22": "96vSAwK2aN7CDbYQEZTyKkszj4v6Hz4vHgJQNeiWjiHePfBmrh3rxNN8818TfQeELhWhvHeLxtwdNmL3tzxzQJV",
  "key23": "51bHgsKEzVBbTXiCz293kCUwQE9imVn4NoSiEZKy7oxDrDbUntBykRZhv5h1TnZ5Lzi2Pq1QuK6UYojMruumSRgN",
  "key24": "2BhdPUruMa5mMwrjt7kXN4CD8cf9Wo4XWMdKpaSHFTxwhEkiqQYHFYQ5jGjRmJE6ngEDHujjnR8MBuC5nwJMv8Tz",
  "key25": "25cumYAnCsSDjVArWBWjHF44pXMbw2A1S3Vd2VEct3u7MDphPVLAvpztkJn17nMovc9YNitiAN59RbrEvwqD5zPP",
  "key26": "2sdUdjsZspNLqzrC7MWKEydwgmW82AX9E349wUgDWrgVUJH53VYHitBMXpi1hbNDVkSyyZN91ho5E9RvqDZb3zkb",
  "key27": "4X7WPFCxEFtQqTa6mw9wothwX6Soh2iqhpxzyYFe2KS7KkrFdFCwjVyJZz7JbGom9eQNDbBTb3zFckn8EwUAyuAD",
  "key28": "mNXo8QHFn8giynPqW95mVLDoNgYzb9K8YfvQ2N6FY1QobCGqX9BExxc5ygMf5rPzdiLzPEkB7sqgu8raXCqSGk6",
  "key29": "3QmsQGJYefGTQdsk8ksiLyjBjqq7dGJbbiuoPxnYwTdZbxKhveEQEYuX97bDaC9dh8CKxYDRZ3ULqkViuHwSePem",
  "key30": "3sKPDJRQ59H4fHFEUaJdtec3v3oraLbdugrosHSnN9YRrny9zNx45KuuuvkecKXvjZHwBC86jfeqBexSSxo2N7F9",
  "key31": "5cSbmeHFFJQmWmehsquGjoxrEbSQqTmE7bLMcpMngtBEytVRVM8p5iePbvRMwtjKQiZ2N9VZQxVXzHRjf74j3MSS",
  "key32": "3925EgMZmf22eFurGTjeuXcoMgDR2C62VhhA1RHYYJ57wS8b58cxEN2sqgpzMBNMuhucNiwp5jxx7tpebCfJGynT",
  "key33": "3DCV4cnuLLurjpGofnhNdVPRwHtJst3Zzw2uA3VrtUtf8JPKf1zGaMye7uPA3GEpAnYoDgxf7Mo53TKtkArWDQHB",
  "key34": "4ni4AgxMmqsJf71zAxrpyvJZH925Pa4usuYfqxNFYZcmoehNEAn3eG4FXoxD3GBHSB2tSb2MLcsrRxaawzV8YS2b",
  "key35": "3WbSLUeXwHKTiLZkKBsQg7fTUF1Vxhdn3WuuGEttxgtLwv7tZ8q46ypjC1edfMRzJtrkQcDomKqvamqFMK2tYWPS",
  "key36": "5Cs8gx144oAghHjst8vj3zg9oXLJ3PNbumYFCxEP1yyjwa9HYd4Yyh8TUaVdPkV6AkDWVpoerUg8D1yvf5K7gyV3",
  "key37": "2WowsCoEEFCKmtAQvjdHswg1ef82SUNqizwCxCNHmkV4Mevift6boLr2J6proHHTov1e5WCoW5CRM7HUSCrPGN1F",
  "key38": "4HxCP8W4n9EyWFugqnmxGG2vmiEJkvwovVdiotvNUBmv5nTP7PaMBBmJfMtGg4qcqnVa2fKW9wYiR6LGjC8WKFJk",
  "key39": "21NmvnhC4VHz8TjxRe3fSPXzcJCpJJffoy1jdDkFF3DGYV1Mi5S9ko4KP73RMtBcRmZrFV4fg5kfseSQxtnoeeQZ",
  "key40": "3NYBtdgTMNBFs2aSKJ7K6fY6aX5zxPXJWVpHetdx2HDgcuzZCU5zXeAoLDpcveWyUU2T1idbkx8adKEgDboNuFPN",
  "key41": "51vynMskQMC2FC2LbyTf7jC3cJ5Z1Zopx6Y3yoWGytbayHBiqEmoRkyZnxi95mBQBm2XVjPo3YKTpzYZzEZ38KPH",
  "key42": "4jVUm1CZ2kZZKoEf3EVgTqxfNhVqrb2P6mt4Tu711Be5qV25uzh18mJpyok2NxMumK5dp9ova7WTK7egtwjASk3v",
  "key43": "24e2mk7XY6L9rNBeryZmtS92PsyxfjQWzEEL2LKrytaqi2YEwLeNXoi2J1gFP4LzZ5veeby4cNXmnxB8o6HAnQq7",
  "key44": "5vUat77idSq3Su2rCqSjdbJVDDXapL3jcxDoTDggAi24kxL7Z1jtLicqj1xdNm9pWAAuLrh3cfjAc4EdShjvGFDi"
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
