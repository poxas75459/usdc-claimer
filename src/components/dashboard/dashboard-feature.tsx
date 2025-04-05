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
    "218j46Artw5n2JGwtLrLqXGVWJwBwGrpAvKU4YZRznX4JYfk4ivJnSjGJTcEtekNAfSeRaXeMSCdnpscx8wCJQDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54cZoV4WLtfmWwb6sX1S3ok1ja54MCLmr8ct6xBDY4fcD2JrNNN7Dddmorda42vAs38pBSGejzQ6HEkvJK8EHK44",
  "key1": "5758x5QgBsrXW7u5RGXx3uwY1FELBmyMgjdMLEGnrgicCBJnuYhqyYrtPUVZNgugKsdFYqsUaWPkUYKUNtP6Yrb7",
  "key2": "52yapeJDyPCcwWRNDJy17XKP58BhzceG9RVz8t63a3ha9xkWvucRiuYBncmCpsUNdqStZfvhVMWYksyYEmW2dwbC",
  "key3": "3UDWzRpy82YaKNz1cm26MTFLV1fYVDTLRCHGZvYqoDnPphqLG631TKNL8FsE8zwcg3hywBVz6NB8QDFbYZ7Yb8wN",
  "key4": "NK5F3Q1u12hGb656bLQHjQdD1tShtqPMTadmX2Nyn2Tm3DgrBPf3tgZEkobaFu2CcfGg956SzxGjNC4D8Z422cL",
  "key5": "2LpfsvnjYAv8aKZDqoJXN9tanWFJEmkB3312BtV1ZdxA7jBzkiMqFAhDquM9scHEh4ChKZvb34PHfjfs9QBphr1v",
  "key6": "4weax1v58Yy7W2wJSodcResg9h3wZh6oWi8xUy8XK6fSfmmNEua2YeCH89N2wPp9xHveKsUyQkN5zx7bUfv1pH34",
  "key7": "3B4wXDS6p5VTdNLpcN7qRA6Pk8jKyaUbGE4YT111UNdnfLXftRC9aNTEnu2PAEiSwMwu2BbaEY1RWbXhpgQkPve5",
  "key8": "3zFoEWXdjqV2ujZuMUSH4MGvbsz1D5BVKrhdoNX7tp5ZhvpeQ2H65HqRyadT1QYvNsQf25GG1vAcQZ49GSMBrju1",
  "key9": "5z4TkTPzX8jd93iNaVaj9hYjMtwN1HPJGeRBbXcbNS3AQsGcmcyXUmfgUU2kj93586fGiKtNKkNNZzJSGPiG6kSN",
  "key10": "2uXe5nRW1WEFwHMAnf6Mvt4ZFdFhVKbVVVm9TkPTXLiJCZz8UPZMNYqSv8QWBahK8W74z5HTU5pKN9fRwTyxqHLT",
  "key11": "4RQJ7YDFLzkxXx4onVGjYBCQvnhNVdnG5KCoGwQAnDpmCCsNHUnhYKrFgaBmt8tkVt1AQpfUpmwQZweSpDqP5iug",
  "key12": "2o966QhEcrSXFtGPJUfrTMszDdmfBHgpgGjMxWcgttk6MAdL6CpWJdcVVsivpRiZqs3pPEMGqL9DMJH3V577DQX3",
  "key13": "28vVicNHAT7KygVNBd9ucD46tsRPP3q9yfkso44rC8R5o8wRw5CQKmBqEfbgHapU2hbgjH7CHzfgRKzCAuV6nFTe",
  "key14": "2LYnLH2Y7johqmHXW6St5e4KMwRZyzuibiG45gK3aB8bJNdPHDXSiy2Cp2urmbU8kKdS6efm2M9GiNN9AKjkS8hT",
  "key15": "62EehM8ggPvoYLbvVUeKDKJxDVM9qAzkSYqnWRe86GsSetASDwi7uekCHij2Ci1UurTy1CPPtDw9GvgJKsXqAmHd",
  "key16": "43ooe1Npp79BqGdR8Q6GuhPw9trqFH6gAg5PSr5mFkGicy3YDHBPs14Cvq6C3r73QDYJEp3j4eeSL7PZkCdRCyjc",
  "key17": "skTWJrAX9AnhULRa8vBjGV1hZ9NFN5emCYn7jdJPvBTf5gQuSQZysZk5M8HpWgFwEwkKAHud3AksVb23CquqHct",
  "key18": "5s6Dp6dhrvx8F8seS6m989ZHJJSZpqogb5J1NbBwfc6u9vXt4s863yygUPD7vp4qMbxMTdizTxvJt4LUE7ZpcWqW",
  "key19": "4PoyaNBWSyQzcDDtLs37WH2yvz4guZWrkP5Nt8L1fA4pcciDpFTVGDYF9nWt2G9WmMgAVkZ7p4Ziyamf8BwFExRJ",
  "key20": "2cgmz48VCLi9ztQSHEjv5QLC9sTrFnuF7R7BSqXRsm3NWTSyjSvAhRuz3ij6WUoXiEEdJeprcSFNY79Awb9iHNwV",
  "key21": "3SdGHGDs4Wyt51cvwpj1361YggDMSsJhShoFQW26wVj4ijZRkqvP9i8pPuiY6B78S7RxT7bHKUWdDQiFQ6a45Zrw",
  "key22": "2UiRiyrQu8V1irEqZHeYmEdcrpjBK1jXYJ4jttgYUSfDA6ycLFsSJzXY9qVWzzqBFu2Xxc3u9XxVQSoZEQc3jciH",
  "key23": "3kX5ErK1S282bKrKCCnhbq4DH9U7tFbgS84dWvFEoDFJuvf6gAZpA33atEqLwNfUuRkDbvLute3mU47r7kpMsyPW",
  "key24": "3wWVRhrPnb9PVzBy25ovo85jfSWHnmmBZKWr3jCD8cymTm169vu6Ktt8b9fjqSX2Lyjr2RLP4FJRTziDu7ue1jq6",
  "key25": "iT9tgYEa3jZ9mSSkL7cFRi8m4fJcGnQYpYnMs3Z8Xd8c6tcE3uJuhNGWb9cUEQqBg8VRXVDuAeVjGu341bahYHq",
  "key26": "3LhNfSPuETv2g1YjMd53uZAmdLJiNRhGMJhgCFMh15Vs3q8D7LVbKDCzpzb21LHpJdWK37FyUibw7t43kJA5DfKy",
  "key27": "41HukAP4vv7M1cEFxYa4XxyTfySmEKnEYYeEw1qp5ugtkdbeigYjXL4hnSwEX5CpRu7dhNmWwQqUNsDTDx52Fa19",
  "key28": "5y8RMgktX7APuNker19nMDR2R1QBcTWkSESR6KPKGuxuKEWs1jGBtmsT7hGnBiCtwDKWJWWo5UAjTZ74BfLryh9b",
  "key29": "4BaKZfmxSZJvdZagEa6XvpFX1DG8jbXcTmzRnh1bmugr9viRxnpQKTEiYkfcE64vmxWmgKR2FjLpd3XkRRD5jPay",
  "key30": "5mmWhUaeAGn6PFZKwr4vXSp2SuFTd1n4ZbKGo9qYAXWQjTJfLpjkYgnLL7jzU39swLKoyFrNavvFhQ1okUZJn6iF",
  "key31": "gNqUBd6Xig3ALFpnXB3hBJnQ2ty1hcNsEEZmx4P8yTKygi963KZDF25Hiukgnrm5m37HG811h15yk8XmtYTU2YA",
  "key32": "4izr2wSevoEc5WtKrB8UcbpfbThrvn6VkjBzTLQhsfHueJqs1ZURiSzEwBuZc3cdhmamAvGD325QMJMbEwHZ2DyZ",
  "key33": "5ohDutSS9zaMXzcmhKK3NRpyp78bMxndqpJbTQsDcgm3QkKKVUrA6e1R3joPJPwFL4eW6o46j6bwuZarcNvtddGu",
  "key34": "5hwo6ujUyxH4ns24gmKkmBS3iFhZ5VanveXDxmypJqxVsE4R1npYrSa2rb2t5Z2SNDX2rEyxpdi5z2kencBdoovX",
  "key35": "4FPn3gPjtwDuMHADP4czyYmv5oyLd8JySP363KCBEhhref7NgUHVNbdWXyK9BiMGRXHyJ9zqEhr47U5raijamhR9",
  "key36": "W55u2SXTynNnTBqPh4DDsidHtsvwSStHGESFQiKp2k2zGHELgmQp3ML5BnWEDsTvVeA2NAq97mK44hnhXwZVmuB",
  "key37": "7sHuTwtdVJmfVEmgm8kEA46KQxJZj75VuaQxEmo2D45Vf5GbcLLZCC1kkRoFWjk2iBuisCzmWwtJApZw8Q6RyyC",
  "key38": "4vJDmzEEdw7ZytZBVkJ5BQWfDP5DcJBtCsnPpDQLADDMpWaZDN11dAWb7vnZVDBt9Cp6mP8sTQZsMgAbJuwgoYcf",
  "key39": "4GLPb8ho78ZwJJWokiLvynf4k5HuN1VG2nEoemtTVNUvK1nbF3ZHw5zEbYyVcd9tnh3rbqFza76vYEaioagLwk86",
  "key40": "zNJpUWuGCKreEHXyBZrAgV2UqC7V6Uibh4J9gZSo83UjzoQ4kcV3896QvbUvP2vRuuPvoEj5LRi9k5ZY216stk1",
  "key41": "5DYGqSDC2caVpeDQRkYBQgtAScaj1DDaBbxyFKMjxr5PUwxGkyRyvrF4qNNTuGzzvxxuQaVZZvhaL4i5Cb2kJscJ",
  "key42": "5DZ2g7SHigQ4BXQXsZYXvcNjsQ86cCAihUurupQVr6i8Qc5PfiNqyyRN9pqeaxFmPeU4obBiCjiEqjYXJm3Zw522",
  "key43": "3pcLAXYeHj5BQEvCvdTCj1pv5DQ1iXQF8xnduMiWX5QFE24AD4xuGwR9SojXpVmtge2rGrsXtM51DQUEgdqjSngZ",
  "key44": "K2z87i7cM7F1JQfrcfKUYBrkBtDXbySVb1XEZB4iVztfFEFjjPY5dRQeQCweMaLRMkBCWdbjcBXW5Wa7jFn36MM",
  "key45": "4GpmLZzXweWceJEzctsrU1ozaf8nx3CaUEaqwA4LL36PSgPxqAmNjJwBzfX4MnVrWofiyJ8mvdgvp2vUQeQvFwYw"
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
