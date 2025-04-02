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
    "3zAygowymTA8UmRznVx3ZR1SLB6p6eBACJB2mq9xdXboX462NqHEs9FH1zsvadQwTa7gbDuUAuTECu6sh7CgvwUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrbvwcVD9QrGi77hSvSH6hGhj72ChicPWdf997n1EC1ei61Fdq8sAHwL5nrbmLYj8edH2UPYutVzduLXeFPKuMH",
  "key1": "3GHZPo4pTij7fhkdncqjMF4B7bh2E4VmSdqXJxAZPENZphqLBngSXHQiMeeSmReFeV6RqCPjhatWfdvK8PRarpDA",
  "key2": "5a6fKPjSfcoErk4gQXAojKaaeeCEERCWVZcx4Jua9NL66RvFVxvZE8jq6btU6cyoYXTQhdWs2qvAbDumdgRrEpeB",
  "key3": "2CbbUfDCg2myVB7mgFwhqWExDSKf66qmGCi2AxyuV3DjuqX8DjF7sezBGsaUFv6o33waZpEsLsNkRQ636HoYo9bz",
  "key4": "jNPup4KeFYSyXMx2NdK15RxWCqenuexG93gA6Hd9h52cG9VehKTb9LXZZe41VRWxwv7S3EPF8tG9fm7x1YAe9sr",
  "key5": "4TZqsVNK3vwedFcYMdgEKzeU2QPJEocV4gwpr7Ycb1Mdifqz7HiPpsoPggQjf7gDgkRgSUxchBdkzu3vaLPg6pYG",
  "key6": "5YX6no2D8XMrj13GQQJQ8XCWQoBXWuzUMmHpyzC2DR9z5Y7YPxq6zKLYA4Tk8U5d9XEWRZv1rn7JjUF4aUHtXkXY",
  "key7": "2auNbMJQ1RFNMYk3NTeK7ZVjCNvWC1mAV2jjWusQbMwbxjWbLMBZiPaPCLddaTsEoihcSovbB8EcjGfjH1LUYUS6",
  "key8": "3KmnwSa4DurbRSqwzTS7uWbnibgJeHLmLSQaXPPy5LqhdikQa8SCE6B3uPGCUDa4XFx533S8aeogxEaZY14ZBjxg",
  "key9": "5U1K6DEQchntNwzWGqWPDzheNZYMiMPPNzkrmkFSYfb939GAeQzVrF7Uhhm2c3YVgpvMmUmSVek1fJTF4XN9HQep",
  "key10": "5wRJwHoBzJuCgfm3idotiwHXfM1ReQPjLmpG95CtEKgXBUineZHAuTFLQkpvUQVENNtPMhvUdUxnjEFCMXow5cx7",
  "key11": "4itjkXVQnecnxbbFpZPGcNWYfjP47NhkQyVBYgTwcSirZsUmfxNeKuWhgNtnChJnFKMpxQ4yZ2ZsbRJiDFQjdbSJ",
  "key12": "3N56dmi2GP96iRCZXfWwaQJXn39oEWar2ZCPsvrgoW87whBod3K8N1UxNKkCPJSoXCjGAsCvfsSWqcgwF2Hv5VKK",
  "key13": "vkQmZh24GV1PVqdDdLqPdRGL7sUTipCfecZTUCmL38WFKwbiZN7PDuAEjJneWTaxcLapEmnKeo68yensyNrr9Ng",
  "key14": "KRtCJQhqP5Wnzm11na3PNJySJwDcVAgwG55TQb3H47sfjEgmoTPkSxa7QnwkjjDLukVMopo3FqSYqBE9pt1XEHU",
  "key15": "5svtUuwNBKavu87utqFsi5S3VJXGynG8EMhmtngdYv7fFry3wZhn3SkhyRJjfYCwUHPiKyQc8LbZFHCQ6JeduXhS",
  "key16": "59xWbWwzuofHGwG3AYg77gUZn9QCuw6wfFd41ZMzp6PBzCyVRPL7X4iGAid5xgLFuwXGzhvAbRQdnCzd9bw1wZz7",
  "key17": "51Ysv2w9YqRNyFcQ5X3VvPTfeXZvpQUhZMhxXu3nNpmC33bD3wSAD2w93dbrCBE3S5JHBMEbZcaiWA3b6j62quCo",
  "key18": "57jPbUUwuTsUVQ4pdJhxBT7m39Z6mw9B884wzU6JZMq4FwA6NHpFHGGVEstqvdCXc8D9KYNwNh6yfbuNYiq6AhAC",
  "key19": "5MErPPzrAyikQe9vFqiqTRgYrC432RhVdDkonUm6wq6BvGxag1McrqkzMHxiNijNVR4xgJSPWrJTHX34xa2faj28",
  "key20": "3PPeBQbrp4NqhkKpFTrtWyHkPiFCs5JiJd81pdBeZAdfUdZRyG2AZfdb5n28ELjAFjYPhAjdzVWKiiVesj1W9p7A",
  "key21": "5Z9ZVbDcpbj9LnFscHN4KvWprYVhxj2hf7LnQYPGP8xhrTLLvzYfEtVJGM5Y58oNi1xJmwMUE5jR4BAwZXae2fGq",
  "key22": "33crX7aGX9eW7h8yRHi1AawahH3LcfmfaE6zBcHVCwUppy9qo4pNLZthfZqpfcBLZT8dZu7xhXXgc9QyQVfMv7V4",
  "key23": "538ZGaVcxLtozX4cXSnnqeRPhEZYMptBGUeu65Zr6MLhnbPue4Dz3gGEjn4s3hKJUU3YkjtsHzsGPFCYABDoDhxK",
  "key24": "3LFP4bmuZUZr9B4NtB8N2S5VWDCZiuxsR7LY7Qu8AC5vHRuejSGDqcfG7N6qDg4akcw1TJ2AuJkkfWHNMce3fDZc",
  "key25": "5HyMmGYdAvTb5LFpZv3PZqKkuKeE4Zni35cuJESL62pa93uBf8SdNnv3VuqFFbJT3THVwiik2rJnUaBfRjhNji73",
  "key26": "4A4rthmjGsNi1g3B5PiQyzUpDp2L8Cb3N4UrvouFZxtgrzcFXMisje61vXHJ1pejoDikd5QxpbhtsAkhddD6nLg",
  "key27": "Mx68Atb2hPFqWpCkD3ejyvGztVC85Th8vTscuqRRf61HVcUi52jHM4uH5i1bKyvUJhpx24Wy7ftgWLwVe5D2F6Q",
  "key28": "5o9CUXEGV2NLVCwZ5TMfTaKJasTfLhd599Zj6MtwwsnbtnwZbYeShwFrxwjfwgAK3xtBFrzKvFB6pquMBccYk9Ky",
  "key29": "2nFoRSoWHqivQc7mVVD8ufMfEJbKYSKtjtQzvQCuRByVWqocLM76a1ATCBM33U4w41bizTaeQjbskLKeDtRDuuuE",
  "key30": "2UgXLEHkRGatLJtaKJ2CxGY8PTWmqSgHyKnF59XJWpPma8WMTaaYPY5FsqXBGN38WYbHWtmsiPVCK29t2DbRLnor",
  "key31": "5rFaqUDkKBs8Th6HV34n4GEYftc5KGa5B9yDUif1yiXqRy3FDxP5whNvyo3LUeU8BQBDjBB59B2SpHwbWytpviMk",
  "key32": "5zxNLLMFdS9s2dfEjLynVnqdxddVeKBeBGguL5hjxehUTycP7q8J4NsgyPE2oVV5Cb9A45y7M148ee3kB3eLnZUZ",
  "key33": "2uBunPFApSod26AJjdehQ7Bfk33VhemTPfWVmqvz7ggR2M2MrTsUXmSP8KDFWyejPcdWrVuFopDaH4GWHeNQhCK7",
  "key34": "Vtj8UAboWEFaXC6PiobP6ksTgfFYrZ6NeNg3pZDmLhRK3FoTAtbmWopkVbKwuVPze8KGB1bTpa1T8LK3ra7zqge",
  "key35": "5nVvsiy49EnQ6igdrcptDhQ7qj27qVp2TadLvaSsTpFGDspXEKWd8brnjhMxRG3WfCHppBSCxZQYWFYXZfNWbawZ",
  "key36": "2R6VeFUrafvM437ANVyNjga8kBiLSQdhjtPvb9bdhFRREt3i6cBLgqZktF8MkdoaxXUK7yrGEmG47FsKbab5gP7x",
  "key37": "4Py1NaTWH1PfAkiF8Tb8Y2H9iNr5pUFMKBdc9dYVKPE9aRmLnnnLidaDusUanNtTE3WbbmeTw6WvDPgcRkQ1SdHS",
  "key38": "qDYofRWeEMDcaXkVhtwFB5wGVT5NdHtwsLzT7raDJ5Md2Jv6PBfHEyY8UuQAb4U2dhFac1AQmUpAaxNgt2PRYuF",
  "key39": "5omjXJ45QWJosvjs5QjmrCPge5ukdzWQY2QvJrNmqE2SnmCD3MPsqwhyPaURBNcM66tA9XSF7b6euZVRPdMJZNUK",
  "key40": "FeGCW25J9CLBS5DzmNAafx3ZJ4qfxJVvuVm4fGq7Tji5iedvvSo4YLaddu66T4RELY4teDPdFatshZmY9fZLWXG",
  "key41": "2DaM3oayW9d3MoY1LSg5hRFv7eiMjwjsxGBXBiWEWfRsmPihCxJ38Rw5KSfu1fQMhfzZTuG4BjL7ikGeP2sEdDxF",
  "key42": "2wk5s3FN12VgVZj9NNyUKtapt2DbgHGFqx1hz84tgQH8rLxUKYzZVZp9GDFuFoskNJQHeSTqMaZdsB57UaEbCm6u",
  "key43": "5EYs2uWrBiwXm8T2AzjzqNQfZyNGikNC2PUbTFHwW2Mk7bHzrEqCs8QAeyHzDWa1foM9V5joBEc9rMgvRzUT44Zk",
  "key44": "c6fCbcpzhY2fo59rKoZoPxvQCCGGpNv6eW8eeYkPWCQsi2E17nBSSJH3L4yyPxKoZA5Uxe5cky6XWMUb7zUcjMq",
  "key45": "4fJnggiJB8t4m6EDjdovwWiMPtC5SE3AK4RK59Mv8yJQ6q45SrodBhF7LrV6kW3jtV5zZoZPijjGn9L7AdDPs3Yv",
  "key46": "2psfbXMg8r4EaofMiYBBeKWjhdoYedDLw9vQ2H11tayn9AHe4pvXbovNcpWtVnt5h4MHehEWKkE2ggxgBAwaaJwe",
  "key47": "3oqSVXRmiYoiwmG4i5dhFnc5foZVYFUM9BgsJdaSsUSkzZLkKMr5fwBmbZY9wpa3YPu7uaq1CsaoqEGiM26HYgUP",
  "key48": "UpDsEcoWNznEtodPz4Ph9zi25LTVE4F4BE4P8Hk2d8irkq38sar2fbacZXjUd1pUYR5pFJ2UTQe9XQQ9eA3Nomp",
  "key49": "4kxPra3JSVrF7PHPCXwDdu6h3Q5RejPHZyZrmhKPDcEC9679kWRZqG1FwANjDvtB79pQP4k1MidfcRMBhKXt3MpQ"
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
