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
    "55zD2zJmdr2J6sVVrBpjR6NDGT2Vxjs3Srj1cVJ9TJhbCJU1E5XuHwdvgTkCJA58DqPDkbdo7ngPck2BnsH4gDEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PwmwUX1BRWj4sxkNyvx62iAWr1aXEDhVTSqVxRce8vfhVLkyVo8DDhCXKC7FM1yX3Xa3YC5eDmyLh2Hkm9HsFN",
  "key1": "5uk8N29iM2pSSaBfenWJeCge9cm6RjEdF8nXmNnpjVXmhr6yv9JcWNp3qmHpUppCCGm77PCAxUxCVR9DCpn1EGMD",
  "key2": "AXQE6TyWWavAEkN9w5BaQVjkZkBk8uZV5dwnchCP3vbL21t2qeRqZcNAtK14tZbeyH6w6KFx13pxmwz98s3Np1U",
  "key3": "5jymgcAmR7Cox2rNh38jjNh77oXkScUauVtGvyqgLovuxeF5qzb3mXqEkwVFike8qF3PDjG2qCZXTuvgZfWjTgvP",
  "key4": "3nJYL87P9jpZqFMtLrQNFyJpVXpYrjqGuyDPtCUPoTFDTDecQRkGHTXnakzG5acFKwUF1qc991ciXDGHWEQUsX4x",
  "key5": "2jF9WV2FsjxJTkuer2xKc5N5PEnhfYQxZ2eBjamkye3NR6j1pgzmyZWFwK97aCaW3QvFExFXp1n4sz4xaEahZik9",
  "key6": "krtbSeHXBPT7J7ZJa5xNEsxC75R1nzCbNBHTeL9AAvYb7qjaXGYmSvDPvhkaLdwr6AKkUDNWNux9TDxxwwvvr4j",
  "key7": "3Pvob8AVJnFNKwXvteX8KuSjyXA67TigDXbUsMm5Vw2zF4wSHgSSSVzsAiM1h2ZeVxgx5mMsXtTVxcAoTFRGuuV2",
  "key8": "28afpyZaGHsf2W3wgj1gM4mKrUREEXxwC1CH8PuQtMdeDFgKZ5iTxLSDSfG9W1rSukRXa91aE6TyFGkHaAx7AsLC",
  "key9": "5RSKCUXzPNDnTFkArhGwC8NpCEkofA7xzEvSbhcd9VZRDZMaE4GUAkipEdXx6ryZ64Mb7pRCpCMJwuxPTCYqJkvK",
  "key10": "35YfM3UcDsUVhL3wM5cpP7zGHsQGHVq8fvmvC4xui51HAUXt2UYy55tMj13rbHYu8R66G7xdpDkm7nQ3cW63mrQ8",
  "key11": "5qQQ9RNTJd3UpZhFLcV7rQ1QvJdfZ88LMvCeazSPjS99XF99NrW9AA9vDUpm1BurqN1qKR7138KF3KoS4TwVL2Ug",
  "key12": "2jtVDNZpdghBWrB3FS74BTw6VePT6wbgQUSX17kC8jTpAVYk5p1Wd6Bk3y9CPetHDbNyvBd6kohg7whxM9piudvP",
  "key13": "fDtaTSsU3ooQZ623YJegGZvDPW6vTYumXe8AcJYkipBEadjs4nfZLu2qZWRAoggpi3sn76VWtJXw3fPU2XAhRVm",
  "key14": "2gkwdKStjYM5uXEugB41oArpBkk7yuMhSZh1KxijEygkTTqW8si4g5UVpZhXmFgvLynzV7jeNMWBdcutc6PzF3CB",
  "key15": "3FTAq1KTNzrk3gyRZoygPAFXxLuJfYHSJK4uonRcdAULwmHurFJHjwGX26Y6kadPLkNFmrQFwEXP38Ug8PiAgV2d",
  "key16": "T1r4NzUto6aEe2ypeLgNNe1DVxdamHGN8SCRzwxLNAvsSxBsd7JaX6UztdLtP54VAS9kX5hDZLeLtEfQrnkMHBa",
  "key17": "2afxKx85d3ooNqfwv4SZe22kLLx8UQw2QCSL8GV4AsTkjTG6xxWjnL4Mbtob4C2ZcHaDaa9rcWA9AfjHtLVQc4KJ",
  "key18": "39d1DAEVHTpa4rjqMHj11KJNRTUV6ipGU6SQh637uxB7vE3FiWXhw6tUMtjNeQMMJBkHPreydzCLEpVQQSUCpZk5",
  "key19": "5njoMrHMJQ5qjBXu5KJK6h9WVJo8EWrbU5N2gsL5fuP5eUJMpidbZQEe7uWvdxPFW7TTWVxLyAqQYEmELCWftKYd",
  "key20": "3uaLgZg5kK5QsFpFMDjTcNwHSfft2aiCiDAKNZd46wnqXkzHUBwgGG8h892JZcMMcAvp1uQWp4Enwn3AD5oQXmGY",
  "key21": "2h394mpMGp9zpH2YUbzDAY1XHhNq9LDbsqvvQSVa2ytqmuac5poxLi6i75JazeyozxhPPXwbQb64Tci54W817UCE",
  "key22": "5N3Ncyk3wutoQQorwFtihnyVnoZBAoZN7iWt6d8jHqdxiYwDpp8JVr8XTXfuCs4xUzvcCgAvGpGCqTao4hDh48Vj",
  "key23": "5TE847r9ZxLb2i6ZkrqmGbA3uvyUKke8XcWTCUWz9SSH3jc3w7XgchrPNncnKsf8snizay3UgkeVjkZT13kbvApe",
  "key24": "5BRGkM2k5n1MDJoM1MtTRqnR98NnV2HoGpa3BxT3iJRBXNk3zFat5sQhPCj2gzv8aoG8j57T9YZaZ6rMUqcd1L98",
  "key25": "5hZxHtruqR3ToSnzJZjh4wfvNMFHnc1Cba5ZbBxHhF5chyo3MJENX4hVDvgDvrbBi4J6e3wnHSK2auHWdz4WxrCt",
  "key26": "26dF1gtHMJbq56sDWt2oPtY7GNiyAPNSdDxsoQwX933BMJp6EzsqL7eny8SwJrQjH8fdyzoteQtUr1ZQxcv5msJG",
  "key27": "53ZaCWeLPDWjzkjQLq2GxK9F63BEHMMHRcRTA6vH3JsgUCPV7EC2zP2AQ3GTMX1g8Dt9bAWk937Z9NztQrPEQztx",
  "key28": "5uaTXso7Q9fd452GUbrY61YrPdCMsFgFem2rLvFwWuSwfdHLLNdmxrmo2E13WDs2zbWKqu5DoJ1gF5ifrBuNQc7k",
  "key29": "26mZxLqAkNpqhqp1AXmjpZHx4ffTJnzx1mpA8i9ekefE3MzAePtLWheAwtnUmmR3VYeuNbg6cAeJB55LtJ1rcQSV",
  "key30": "4GWomt6jTZ3oN14xXsKXZB9XWjXt38zorLYq2kScxcqm8C3vrzxrrg1e4VZWxLsfzZoTwNziZ7rba24Ed6KPGVEG",
  "key31": "5RABbY2kWzZ2jZtkdjmTkaXqfCW1sv8eUdpoL1edDLZhBPAzKjGgoZkPgN46UgwjfcbPPxygLehXojZTrw92xePQ",
  "key32": "45qaFR32kewJgm8S1W5NZafP4EnqAaqr1ZY6LJSLVEba1tGbAmJwJ2Au9pEGo9anwSr9QhskjQQ3nvD1tzEoSfCw",
  "key33": "26PsYVVtmFLtDWBJK5vynVvs126ba8YoDes2gurWp4Rzpb5yNS539f2YavcHWHB1SJHxx2Bw35bcV1m8TK7NKN7D",
  "key34": "4NwKWXeRoNBAy45jTQQfveBU4CjVGrcoSEyKaKzP3F2tTgJ41QyrPZQnLTsh5gcFB7vMQZUNkF3gRhzpP2MohC6X",
  "key35": "5FSYZrnMKmzbUenKZf1A4HcCv7cs2BtjAZwvxnnjTyBLevi1jjHeDB7yzCLTa7Topmahu3MJBawGnTYWTfinCC9R",
  "key36": "3DmmbmxYAMuoHyjUfWj54UgVFuKVKaKKrRmXhm4FUoSKJyZSSBuN8s1nfoAeii7EdiRm8qLr7eAwAVNNTM2yF2pi",
  "key37": "2BTM8TFrrVDNR72PAwzztFCsVkc6SLoComYTidPZUqkhE6F7ArBQNKcyKc7GXxBXi7Xq2oaGSnzeUxbxw457HyXs"
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
