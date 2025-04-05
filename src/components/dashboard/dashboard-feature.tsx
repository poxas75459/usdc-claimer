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
    "63zm9F74WVMYmpHTyep3AVpUjTRWHKBLpe5VoeRXDCkqQ3R8TmCG8Ma2r2fJgtNpJqE9mmaHWYhxSZ27cXHt8Rgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVLofGFUiGKr796AHrue4okKBpPrNsiTcVFUD6C89CZCdowrbCieDZ4zE5aYH1UzmQKHkzDPppcsvBNRsjuVpqk",
  "key1": "JGxZUapJGjbaQHkvyJxADijidjSAdmUrwYDEBq3PHQYVPcKUTwGmG24bBUEUTfh6howUQvPzLhFz6xtXbvqSsR4",
  "key2": "4bTZy78ytEns4soJ7rghx98KyU2E3MRHML9mJR7Hf6pK4AgtyeDy2Aaup6GKkgmoEXMnKdVQEjojLgcjaexDgjbs",
  "key3": "62mDZkyQhoQGdJGP9xSRAGsaNjEko1Xx9AzT9xSkCnN5aP6eVBLEmobuKdP7RmfnfAkH2ucKrEHD4rVxyjrw3HeD",
  "key4": "5EKarDwyNNp74dEMvPectywiYWcCW9hbvUPehNAx284cuSSJUwNHvvb96QTYyopBXqBWqmfwR5irJ1eCDikGgDgs",
  "key5": "4Six15drZrMHKZjP9PbW12mCZdtkshJAjUSCGAkchpyaojBKrFh175Zqp4hub7qQaunUUGR3mvQthhs6B9izKzAk",
  "key6": "3BPaZWQzzf1BWAej25zu5mA1b2zo89N2q8U9czKN33kRJQz9CY2XTKw3u24zvDQ99Gi23MpFdwLCBe5Y4FyLCBBe",
  "key7": "2ANALg1xECEsVHiNSP57d85ExNMRA6vpkCjoELwkyJ5BdvPQeMfhrrfebbVn7LHgoD1CVuuGN8m3bAhM73J4HC3W",
  "key8": "2pw8vgXDdLDG32qLWJ3Bqf1KUpgKDFpeu9SjArHgAFzYQzE8Xcgbz4ByXUJQ1WWyg7fvsm6vLdeJJAyvvxLBj9UR",
  "key9": "2Tyjv5UKjK3P9qvUkhnywsHshYLEpEQHDmajYYh4M5nxVwY7yQgZ2SkJGYBjVktZnjAxHLaHW2JGwWY5in4wFkhg",
  "key10": "2vpA4nksVfBtdMSA8ZHJMgbk5ishPPoawjNqXnmy3BEBepGfdeHe66uMJcw9DA3TKq8Wqf8JP36P3TqTap83AwJV",
  "key11": "5eiDKznRrYrgkbAA5SwMNVqmjNm23xXN3G5MKa2ih4xEcxnPHfevZCUx9fpAKMGH9qy8ymnumTRdiBdCqWs2fs5v",
  "key12": "2x3ThMGh25n26w4HwfB71djDQGVLhKQR9F3UumK9ztXEArK4TSf2HbJ1DeaCPxi7w357MPn1kFQAVZZJyhZNzyfb",
  "key13": "5FA5wmqPB3Kbovg85nGizBgG2kCHQ4BE7tJ7mXyNjDficYq3ev2B3zv2LV2SsJBPQZicBduTLauxQz6TKjoCeR2r",
  "key14": "5yvWRGLXXDiuEHvqL2r6zM5xpbPDBP3Fpza7EwrnAyi711qNEEEhjUgXugcyKZMb6N8SXWkENZMYh7y8pgHnrs8q",
  "key15": "3VyHgdERLKpDDqDCGZC7eQHep7QjZM6i2QqEMjTdXkPZ3jkUUeEgMnbucCCEPzPMuYFSF9X5VkFWP7LybPvcqtcu",
  "key16": "3oJFKfor6rNKQB1VWh6TsD1XRM8A1NDGzwAsmJNzcUij9uU9RUR4Z4pki7yAa4XwyPQuqrMdQr3Kd7h1UHmhbJwi",
  "key17": "fDeLfBVT745tFQ7MiJeqTAovjT85c4NaqvzkfQ6ZXVnFroyB5wyJQpkk9XyENkF9G1Few8Uv5qvjVqFPriSVEPT",
  "key18": "5qTSsha75U878vZuU9L6p4P8S3DvZUC4bT1hj28LKXCj9mH5gLNBmutwq9t5PRkixQynWkmai4jXmN8XgPYccout",
  "key19": "2NdCERzKL9A1uebrZWjFkTyjjhG6L7HddKxTD1TXkS6fEbTmUHuMwU8TBTs41EAyRi7obVxwWwMgb9naQ1e6WJxh",
  "key20": "2Ct31c1gMySHi4vwHgNwFCPik7Q1xA8enQmz24uLp8YfifzAVFjyDdzYrwVpLZeCuyju6hhsAbgx7AxpoFBkdgcX",
  "key21": "44y3woxcqCHR8uSdzbtC48KGaDWGx2qbGeV4rgRk4oa44LrkQX2mr1P3ArmbxjZyTJeWVmm4CSNejskXpPv8FmYX",
  "key22": "LDb8kREfy21NhgUGfXiAUDHEMiRL1Ta2me1gCHtoawLBeRi3d5kDw99pgHgmMK8pqdgRTYvyKn6BrrXGdZLT6iA",
  "key23": "582HyHN9Kae7mAPVvBUDvcQPY1Yiy3X69cmZgbEXBkTbJdCqKmUBUQ7VQj1M6JRdZ1nSbyoyw3pMcZjeKmaSQckU",
  "key24": "6EW8fXckiB8HQy1APxLJbZQdxbs5U4AKHhr6YsmHWq7bUKzamDYYe11WXGj9cV9FJakVU1ees7pzFbuoM3vELZ6",
  "key25": "4P4gjn2qJxzJYQCLezwMo7uBjVHYtoxPHZFAPrmYCkDWB39nuJUfaRAJHLgYGHBNyN9DncxM8XZkRCYiDWXGKi7p",
  "key26": "2hxySk8mLzKDa3o9ySbgVxzue8obAbPnFi1n4DgJw7rXSwEgdjT7DqyoQv2MuAYZ8p9UNuWeauonLsbP4wN5nCj4",
  "key27": "2QXmq2DajbxGE6LHvXmpwj2efrFZKv3nneY32nn2aTBSLvgCbVyy9vuJrL32bRS4zLfLmAn8Wg1xwayevAXTFFuz",
  "key28": "5rygo8bon9eZKxjQstBGSS1tVPAv1p2G6RB964W1EmKPjZEZo4toMk9aZ9uxaMp7EKsDLXoB9A1jmJ4m65Uhbz2o",
  "key29": "MSGg8XVFa87aztjBHSoafjRwpn1ngwTg67dLXLCwbHwvg1LZYuLfpGCRtisTBm6FtJeynuZUUJR3YPAJjoACW3Y",
  "key30": "64KxH8ssKH77YF8U74aUFwnce7UCZK57E9pck62R9REouVb3aaGYyeZ8SrHL5XhSPdUxAHf4nnmdVrBZB9gwknZw",
  "key31": "43TiKfZ985SoAKrjLYUZvgMMBuGNdgY7q1fVpQhMxUEfaHce5gjUKpPtfjHsa3ypRV2Q2RMnzZ3rRudZPiGPjqKp",
  "key32": "385hfQoT2vNt96pceSecixeC56PemR6hoYFjbNNaYJzvsHfXBFrS2eaEmiFPTuGsP4ksRakRyZ4EeHPaBgdmWdiN",
  "key33": "5oC8yshar3V716xKrtfkm8MXBChHN1tPcArZbVJJoEsqaKWiUHpGkGdSpPJACLHobXqfFsA1ffM54aLfNV86sMS3",
  "key34": "5UpzjAUsAJzjaCVdfTekAu8k4LruNkrKnLtihPepnTs4htkZa8qpkZY739eSqUV2hzunrFSjtsUiHb7RDgPM3ZD7",
  "key35": "5QkradDDGo9C9XaNWRdhNSjJ8HwTVpGiGKvnfKcWcqkrekhdhiPGPBBzeFJLuPupWRo9EmteVTnrXLACxMS1CnWa",
  "key36": "BMJSJxpgQ4TYL9BZeXwgFgjkCyQdQyazWQf1WkqJgf5USi3WAtEwQpwrUSz4iPjkwU1MnpDdMqxRJaG7MtLMkcM",
  "key37": "48zf9pEzEEQkBucA5co1bWYdRptpgoF1FnWgit8orAcavELUqmLmEbhTqBn1gWnDhjQfFCPok9ykuyc5SofucWsa",
  "key38": "dqs29Gw8X1h8tEX9gYN62BRarrGjY3Mjn4eRL6MFtvDhRDJog3T7xEeC7rnf4xSdkMEetTaVcS43GhHrRTHq3n6",
  "key39": "2NbVuNobJrUL1Vuenq37Yvqeg2aj3vT4PXR4kSvm2duPQeoiPtt6eWm5BEXjGq4RP4tsdb3MuFoMxdaJx6xshZ8r",
  "key40": "3S5F95gXWMd8AEaZX2YP2FFkbxWWEuz3wfoqXeKk9RDHnNdmKJECmJSHFmUtYBCMGK2DaaBsjUn9qfkaHYHZk5tA",
  "key41": "4UWXsyZwfnc1tqCfRtcpgpCq5Df6hr1HEDi9KwoP7V62Giuph1JV89DT2mRKeiFj8BdLT2QePRStM9Swg3bxwgip",
  "key42": "4p6Dq9iqKCg7awpZcgE5UmMVbYuYReQXHAu83a2pkfHwA1fGhRofmNEeocB4gTaCHu5ys4adPdbk1n96SmXNsa3v",
  "key43": "2yrXTmumvPe2g4qTcewg9yk151AtXwJ2SDbxzqk2rmwgDyiTd3BJsTyx8B8c3bBDnhajRWcKCFHcruXNvrDEosPu",
  "key44": "4Dgc4vNikH6h5hmsUW2jJYZgtdqzEDv7eP6qT6M6rVMs7LngSkVSJppUB7HzVoQeF88Lqxbv6EGz7CD6o3N21XBy"
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
