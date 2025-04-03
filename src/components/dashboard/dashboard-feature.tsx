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
    "4o2fFE74sSHYGSvHL8KM6vNVKeEMC1X1ftrmfyE8fSCkuoeXRKj9tiJsmAPt9Q2vvPDanzATonWnd9MTm4Lvt4yJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xvvADEz8Uni8SPRbxsySUh7TUzNYYNokC6dd7Z7LJE749bLvytaKNKs3HzcvzVthDg5DonMAVEWtZf73ueA83kb",
  "key1": "39BvMbgz7ES4TB35JnHxqP8cJeFaNmzqfhnkG3J1oxJsa4EhmzLajQQ2HND7AnUkK3oLrJDrYQjVu7tkw5DAQYE9",
  "key2": "4q7cUAZMEbxQ3RHBA9V5VRAkHhFt6kM14dy6zG4ifg4NaDszv3FjyMmcSdX5azJsMU3ShmJtSyxD4yCfjvSddorL",
  "key3": "5pKHD6ve3PeyotuLqSau5XK8oUzFpzFBpunLQmX2BfLPNa7imgwhc24sVVAzN7rxfkTduYQ5sQvPzFQkLMYzraDP",
  "key4": "4JZtAVqZpWCujTLREQX9LuPHSaHp6ytXMYNJRrjnSAttFKZSi64b4rF3xLGLBkt61wYNaRLT4mg94yBhQJXbhUkF",
  "key5": "2qYevJcVHMLivqYVPNDG13E8ev7r2dgEvg5ehByZEZCpFHbHQe5TgrEHp2nvwHrokBBSrKzFE42y7divam1TrC78",
  "key6": "45GxdTdkRk8ZKqTYbV49XjvuJN36YGGyLmLzvi797Doc5hMY2Un2G2YbumC3U7c6F39C7U569wgK9Wu2NyJyURum",
  "key7": "5mjwsYpbXv4TZ29pK3N7GGcZTXSqetLRuKTe84YjQty5E4bMT4FhsuEBRjCKWcL8WZueBoDCqvyaFn6cQJchEXmw",
  "key8": "1t72RgXFHTXvyBVHwCgs3eoD2PDbz6HCUPVXTXrnnmqjC8kAStWYpqzQVVUTT6Jpkv2jorobdzxtvTJWgzJmykB",
  "key9": "5BdXhuFa46oPqaphNSHBGga1A2XnGAuJu6pkLn114ogEZ7MoLLkLSGxFvx5ki6St3XMT8R9tUgFu8kPiYy1ej94y",
  "key10": "JZXuC4FR617ixUvEuAUGEcJVm7Uw1fgvcSNkgPMBKahu9TgNTvZZf1FuXFYHkKMgU8EfSoktMD61BdmBVdYzcVE",
  "key11": "4L6euo4piSfRq3p3PtPrMnL59xSg5uECRJ2YKdVdimL2cWpE8W5ZV1DD8owkRkRMnxdRZ712iNbWUBT2X2oUzsGH",
  "key12": "4oNoVuoBLouA2jAtatyRLobqZC81sGxBwQFDu4sK5sywW5gCtKXPF3LggAiBkQ6zzupdK8ACKhHfnPJsmixpVKM3",
  "key13": "2gwVgbVweR5WPU43dR6mDNQxZja7eee71GuVXLnA4PhdDRWC2YFhLuBLcnxNA6VkjyLemyQHhF2bcsUpyTyMx69N",
  "key14": "2sjNCT7LKqeD4ASrWKkHRpH15pnyrhgG37MS8ungUVg8SFKXukp4tEPm8tm5AT7ucaMKCoSM2R84wd2wfAof8grN",
  "key15": "2zeBFui4PCoaw6c6wvqGnZgCGUBAFQJaoPFB3hz84w1Gxx1SNRPQMxGcdQahm2FqkWzRkCZQCab5PC7Wa2ughLHM",
  "key16": "jcpX9PPZCW4fnNt9szAzDctdKWkNDwJ7NhetWmkUzZ47YV5zvwv373oFBjTSVwC3EzyfAoY8uFe8w569ozqjpPV",
  "key17": "38yjqpxeembgVagyVJhFiZ2qJiuXm5K6B1HDfpLjxLeY3VeUQfz3ZfsaEb63NwcmimWZvEkxpZVYPJmwaSYEjXeG",
  "key18": "3aXBRncLBq2sSZdYYhrSzFW1H2UNKrUrhfZsWYpBa2dt2nVp29by8C2Lo9PjZ9q7BmcKXaVYhsSZc1ahStES7x7W",
  "key19": "b5rFn2Z7JNZhCHfsvvFZDuCKZotsEi2Ln4JDFiWRVhYCPHt2JVCLzwhoof9bCNEF7o71tnnWjHgXnU5w9pz3QZm",
  "key20": "4CjJNJLAqrg9Zcjbg9WFi3rXuzB3tipeyKnvtzTwnorbpZf7EBboMWLMwi7kHD9Jiuy4vgxMwsFPR8x9cT9YXprS",
  "key21": "2Vy86aeAgcDz8y6EaLtt5Ke3Ka4413VQGyZh2oPHtMEp9UjXJrWbVpaKyahu9bCK1MwFpxdXX6hiiY9iEHkVhuKp",
  "key22": "2wAyZJKBJ4849EGEPPva7jSLYBzHKLAK7pk8gsJLhY2asG3CFPrDXjCdQRETbAETC5KUru5yNPMoSntF1Rg2F3ht",
  "key23": "N8xwRrugEe5hCqKBdhWwc7zJvctwkka79biqEPiypq7kpSqgqpoRoGdNCByrmfw8UczT9MATVJnKFDQyixELvKW",
  "key24": "2gJ8JkPVZafueFxVwjHyi7XQW7nnauikz4YpU21bR6SYHxsF3biid4gwwBaNBsoc6d8pZJF7oCbmF7zw4Vt7HXeP",
  "key25": "35FAeH6tkNfiaE8fFMSCyBhwe39k9jPN5F8jEd1iwihzTNqgtF1JT6ruQGWm4xf15pHWg7XzVZAYPbHB1vaHmtXs",
  "key26": "5SsYveNdnPxjgt9su74C8wYJEYd2LhB9kp8drHUzPmnaVzczcmaJkN4BKk4sjgEZyfWKLb42Ab6kfnjb4nSdbaoK",
  "key27": "5R5zUqy3qoA6CJ7hhNkLGRNEqRpiZuZXeAVLvbsQmjsidGwum6ySx7ad7K2fcLUatCyscFhCoLuZLbL5rLmyCNZD",
  "key28": "22L94uirfEwoMetD6HGvGHefyjFj1Ai5FccX4MuzghBeTDrLmjgDx93Ecirgswu77bNVFdmsEhJ684nbq1C7scbF",
  "key29": "49VGx8R6axMMMW3152W83bknFcAp2mz6zykHq8bnDj8yPBqzHcojXKPT39wN6z9jyC72dqAjFpA1VwdiD9Scbwtu",
  "key30": "3bFebtHszRWzVJtGqeVoRu6d33Q719vLcFCxCtKsCQ1jDyH2FsXTwCKP9L5ChiK6oFkoqXatB7pjcGL1EMzdJdzy",
  "key31": "AKZmYZHPuyjH4oFBHfrHBAL8GtjFVoouccWDrt9uWvtNSoZJWYVNKwZn1YeFtXkzwnSjbh7g7uKSygEvCQEj7iv",
  "key32": "GEuR6moBxn7Yy2Zt8gK9VADbkKNKvLHtonFzJ3xihktTfh18w5avZ7uCiDyMSJmfwFB9RkuzWm6m7KHZhHAnSPA",
  "key33": "26GKkWKSP7aKKyBE4NfiQGrV9MkcDoDMgJe92nv2cMdDeq8sUar57443NQ7NgCChioBkjRojUSizZikijfZ1pJ8c",
  "key34": "291PdrhXiyw5R7mudfJCPw6Mf7njJqWPnZ9FfTMMEWbQgsZvf1vppuaYCTcLZqX6nkQnSHP3RapUHCq8upG5sPet",
  "key35": "33WMGgfqQsmijtA6WPQ3ZVKyCtsuRXhVHSrq7B7j6UBuRSRXHvRWoxQHDEbSLz6Vjej1cvQYnPMKDPrxUrwgtEDd",
  "key36": "64YUQCNgBCQePrMGMYwbf7Zu9RZSM3FLrNwxwJ9hib7PMHaC6uTiKRTaDdKEgebNZxKtVADXM9NvXVEzSMyQEKiW",
  "key37": "2PGrLvM97NgVkxgMjBgBowU94tJhPmdJmiHTNbTKP6KEZCJxHCRhd23EknfY1vxfHCuQXJWELcbdQk3z8SNbDE8K"
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
