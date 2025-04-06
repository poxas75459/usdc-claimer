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
    "2UpYZvjaJMUQeqkvrxJENcddy68bGXPgeWZ1JhqSvtskkmd5cgQxbs3A4UXKT4raW5G5mkbX6VvTEoyBz8L4bVs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39RidUTruTBe8GaCp7VL2gP4miu2iBJRJG8kWars3RXBsxD7fxa42Vb7HKhNPhq5WGGnMrCKJkgUkbGFPVcygoL1",
  "key1": "3q3Eh5HqkmGpbz1riyKuMrJJCjkE8PXGckCKxJpG7ncuTVY2qfi8S4xpeTJ1BH9u9UiM5fFp2czyrGir1PmbSskC",
  "key2": "5pHSb1J6nHMLPEpggAeH8BNaquyQEADkD9E6tAYMJNZkUFukV3dBwFkJg26zEGYDEscjDBhSyn2QhJ1WU8duw8zC",
  "key3": "32KpKDLA8zyCaeaULeyHaPXE9xKEecwQq66YPPAL7HeFirnLBWcj1pbNxUjn5Gf22FA6DEH2bd8AvvNjmVE2V6Bv",
  "key4": "652EXQqHwWX6Y71M76iNPMqre1zXEUtSpUz9Nh6zsBj22mLYhew4d98dPYv8eEXFAgERrSsVeYyC1rMojYhiZZo3",
  "key5": "5gH9CyhcUWT8d7RCQY7jVawNPMXQaMFtSVEKwjjFm4Qyp9t7SQaC6rt5xqcuJjrT7LNn3QcxsoHePRT1ipfMsLnb",
  "key6": "4PJVpPhBtPsZbZ1edg6JpJPqemUoiL7CUhKSN98BxzW1quxHp7pmRUjFHDg2tUyzkUsH5Yc7XNba9t5qXWVonjXm",
  "key7": "2qHm8eeLxvKAB9eesUFqWogJfzyhh8z8NB9A7C6j5H1zAZfqGk2AXpHddDyXshvBieQVGysQbRqVNne5y1q44Qtd",
  "key8": "65nV2hKHhnVDqjgPep8XuRtWxM1qG1eUvWsgdxHftedJZEvdXe4MAPy6beFhinmozwfArR57mZh994VWfin2TQjR",
  "key9": "2cwcEQjxqDQkSXsg8WdpQkPP8xQoNxHJvmWTrF6CxMaGjaJZ544476U5SfYH8szzLKMVt96iFZwGHBvJBiMSeqJF",
  "key10": "4fXfC2fBGv3Lod36QNE2Uvm3tRy5hazmWNitV85PwuU9nHK2DarmzJnsiwZiiRV84y171rKFBwhoSLpYum8SmXMR",
  "key11": "3dkeRDheX9kepPFPDNgkj8V9WUp6z8ewqxrDRU3Rd4X6gqFUosYu4MMvmvf6XxYbwCfN6jv7xFGt9p6yN4P88DcT",
  "key12": "3zdAREAmChvrCFN42EFFeqAwjrRkLuhVUjQYtsG2KudT5MiM2Dm7cMRWtwfjxxZve1UxKz34hf5Qq8ot5kV1mzBu",
  "key13": "EbUF8hXh1JtRXaXqtjvgHBuTq6436dxpTALD6eEwgfGQuiY7ABewxMAVkwN5nqGzAo6uhgm68oLM5gkzdSeuHQg",
  "key14": "qVxSWcUJdTdRzDKvhkrfGu9JeMv4YCqetcb8iG6mTHyF5Z7tCFH8bVorsmpAxmwZCbiSe44pgN4GY91cDaQtkAY",
  "key15": "2Gf4zAPv6MQLjaoYDQ4LVXCi6tcRrkYWXXwKWro9ZvzaboL2sNSFwH7pF6X1mdX2DB158uSU4XXruZKvzRZ4KWdZ",
  "key16": "5kigDBHP5xJjhq2vB7fBkVdKaUhVETmL2orcyiZ5Gk3PGDFQC8taM2iphxKWQSQi2TJHD9DrqeBf4zwMk5Je1KBG",
  "key17": "57y3YhREmAkx5aHwAtun5Z37REmcdnXKCmoCUM8YNtyForE7duWCwUPDBjsQK2X6GZBKznnGn6aZ3vptYrtn3YmH",
  "key18": "SdSP6a7tL3UJim5RCUdbTU9sEhSeBT3j93RUHH1kZgCYccJgUFwETYkhWdFNAnBiHaorhRaS5g96wMJfTByjC4k",
  "key19": "4kYZ94FFvmtBFpsugqHEKgZXm1nhmPDGi1L56fHyjfcyg9zP7dVF6Ps4e1G2N9tn7A6u6Nh1MdYGPFJjgevYY2tv",
  "key20": "27FWuT9x4uY3LnSWE6khzaQkkK7WVy2DZNDGX6XnjGqhsbTfEVHfWPcSvniB91MBTDst3tZvN7U4TLTwsndg9oYA",
  "key21": "32iD6q8MN8yunDK5GQQzWQEkvxkeS5Lzu9kuf5EZdmbtmJGz3gDZrG67km7u2sfSPEnwaxQrsdaqUFRL3A997KED",
  "key22": "dtwM7uL2uvPZGNQN5UervJUWEYPwmbkgZjzYgKPhFLUTgAGTxYujHB1i98EMsZBNAsFZedzmQQrMufjuHHcb1gn",
  "key23": "5dybECKNBtENJsi4C7ngXkaf4BM31JaT4a742hZCNAzdPrf5BkRmR67tEwex1edTZXr244ocwYGCf5w8q5ocbZBd",
  "key24": "67U7juXrAmRHTrLTWBbF8iRrj944iQLKrySH2V3J7qz2AT3k7pWM2i5pMk3DrQkmFCkUAwqf9vJecEi2y2EY4gpd",
  "key25": "o9DEpWD2ZCMNPPTntyTfhyw9pyMBQtHG53afcUb7ENSxr6tyt45qFCdpCHW8orcyketNgHht96tvnT9sXDU71Dj",
  "key26": "2wnxkHPQby6M8jtxfqK6zYvBqZxuGsPQtVA3mHMRUetf3HELrceDZ12wWNDqyqweB8uhSkZnAgtXMZVt3dfcjbTm",
  "key27": "364BJUwpcECrqdQuQg7ZNHv2uXHeacFqxdtcHqWCPQiZhiBw2HxnXjWhkRezfPN1D2pxpL9uXJWYiUrv35KWV7pf",
  "key28": "VGVjeWACxR5z4EY3D7k4ZtU9fzQyqgGDQk2D1Tdtj1E1invXQHbB1z8Keah4KtjV8VUViCxrGAJYdRZtgGeL6rC",
  "key29": "5UcYBJtFzGa1Czt2Jkmp9MM9ffeJuBESgkp2FshAtcco4op7SFFzf54AjN59HjunKDnjZbBuTRkKwfnCQspzMTiN",
  "key30": "2AXQd5sHNUcd7LCg2CfHSN7nP9aJtsmtw9MD2yWkDtk1f5T3vkWTVQVbEZLs4giD5LM3E4u5dPuiwsxi3teMq5XD"
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
