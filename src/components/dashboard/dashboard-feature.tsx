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
    "5i8NYmRGakaFYRPxXQDS3DPCVyDzobkuGqFWEZh7T9XDuavdAvS9LtQ1NcKaWjKTLm1E8jUtaSQ9cLQfB41VtMXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSuiquPBUsLyBxooZmYU7zo4YHKb5M8F771xsNAEgLpxDZXHn4aBDyFxnwZ2iN194NY78wuexAQp8bDgipqdbQZ",
  "key1": "4rFEHcx4m45YZ3Ykvm5Ac9SxedDvBCQPFMTeZgAWg2wLhjXLjG9AT3dYwoZPWygauZMyxaMT8nQBhktGGWJNxuwN",
  "key2": "5TkXUMDx8L4614vLSNs87CuPwCF4oniTsfoG7GLWqCHdoDo7QmRWGte2cJd2Vj7kSLuvz8EcPT5FHNWDpZ4meBAB",
  "key3": "3Zf1ycHsfo3ySHiHK6H5whqhuWPzCc8uKJtCuDyRBeCsyMGEpdA3UhGWj1JpU8hTfFm14NcwkSzX79wV6BgvnQmK",
  "key4": "3QpfL9gTkm2S7S9QAxZuyurmSHhces75NUJR8DRU1kofN9kvdyrs9HS5BRY5hchUFrHLu73SzwEhAx4ZX51RvsM4",
  "key5": "5q5SmdLVoqTtc4Betui732NWaxk283V5VBUidcP7oNVkHZsJwiW9CbCRktd6cD8cbXzPDX8Q6ULropdno2gvYhHF",
  "key6": "2qPYD98XhuUEqpnENyDeEv1UfRkYxWZitTvW9CDFhGEYLk21PFkMM96jabtb8U7uyXBtCeWMn7N6Rcak9xxGdNr4",
  "key7": "5Pgdqz6P16LjVYscmJ5evTGKnyAXA2Cdxnd2UAbgCWSR7GAMMWpYPDFabeHbsiub6sZFHbcf99avYhxrXwNFzQWm",
  "key8": "5EQnYxJhUotE59ST1JCDBSMHuJ3piGPqK5DVskCnkCrHSihojYYD1xbB1nNKZjFhDUpCHP4S78YqnqB5MN9zkDd7",
  "key9": "supRSmyR6R1gRBbtn85veZrrqU5BmAB1jP53kTrpxVPchYURwKz2Fe71QmJak8ya33qqwAVXUHzEEU8ahqFnEDv",
  "key10": "Bm3GxNYh9aDNij6gb5HceT2jAAMUiVCNmcyfSRQYHxHCrYuMnnhoYw8TbY4KUrj5xA1MRpm8rAvY1yidVfLBFz7",
  "key11": "6D4VGFdo1NUs5Sb7Y8gv7vJS1BUW6szFvhkBXGEqSqUHnEpb3oumeAnNk8m8MTYdp9SWWJeukCoEGA6jwKCNCe3",
  "key12": "2FuvjbRUDWQNz1BvaMdEgD99G2zceXtymdR4D1PGCsZ5mLsbVRr9AB1LPZozyj2FuR27PD2rvJb2iGUx7fcZkNzf",
  "key13": "4dR171cpTVcDTEDqiYuhLguRUQE8vREEb4KvC3TZ2YsJ5KJHEo6mXeEA6vs45LY74zUeEBHBi2npdWrvugjivGrQ",
  "key14": "5CaorfubV9xsqirRVhuZ4w7WZnvvoApGnpxqxry5igy2JBztMMWrnaVMaAuZbtfFmRbvDsNtbtE1knSPL6qkYRER",
  "key15": "4PDp9i5nUqm6ytAiNRSs99fSKhZbE23Qh73GdNsr4pUVkBwpBuCAmM759SfKpTnWYom3g9KKY8bax23U4NNJGR6e",
  "key16": "396tUMWo9ZT4KLQETQSYRL9SQprLeYxexBfjZJiZFJuFSrhEhycNo2ZwWsVLxEjML9ufXXb2YtVPYZf1N3ZKEvc1",
  "key17": "5UmYBAUkEF4ZpCqKshXPamcCZ8dLWhYWy4gwmrWSkXpKvTzqsdUmmTNi6hrobpgJGYHH98uqpGHxgSQhPNdWfrHa",
  "key18": "2i1Rsv22Ri6dk9hF6s8fmRcCNSr5tMDkbyR18DR2DVJzYVQAJMqAQK632zniBqBW5T28eWKsdLrd9NgqBCbK4f3R",
  "key19": "5yDqTdVa9Z1if9QLnQkmbshSEd8Re4uBjcmMj2UcoCn71qzE87WhzxUt4ZwU7pLY8ZDULH2uGkxNaLPFZKABCRTz",
  "key20": "4PyKtHN4brS2b9PqXT31SHN47QUVuvukrtSF3qtZ3C9M64ShQ7NhQ7LTt4pTAo6C2DGaE1719n94iZKgBFPBj1z7",
  "key21": "4HW8XUAbFVZCjYnbePkApsxgicXCTc55x77GxLe3Vd4aFUXPuH1NAgooqHbqK2D9Zybo1quCBXi3Na8sqFg8rCmS",
  "key22": "5DNVB4KPfXL4TjnJQzZ8ptXmnmEtbAxz9BvnVtHtNVMf94bNmhU4Te2566WV3eAH7wjgtyRJLGU5E4ncoNeH3noG",
  "key23": "2jZDYTtt1vTD4ZAEGnwgzk13oWpTL7w5fi4nwDNF7Rmfve554DRbEnBJVD4p4e9Fj2uBWcVkR37ixKDrNzvxJ3Gw",
  "key24": "Eid69LK2jNbAYeVwkxmMBTLGhvMkVbz9yHaMzSGyqUsyYNzxcj6KWzfw3TCfKLUUFjRYgDJjguR8ihWJUfvmrxc",
  "key25": "36DdPnXtKrfFXmvvDSMdB1YmTm8Z68Y95dkKiQEwM2ALy45JHNVxD1p2CAFsxBwH4ixedTfBj8o5FcuaJXePZX7",
  "key26": "53JiGfjVSzbKfnb98fmZessM56CCDXST1pvAhCj3JgdiGHGLD5uRw1WsDDTayV39GKYCv2cPnW3rzYSim4vSYQbE",
  "key27": "2HXSkb55iPaV4dDyGbYeb6ngSsRcmiPE5wEDfUaocL9BWwfxGUDJEGU4NcYZgebBoAzdTZ3pB3SfgAn4wpBV7qVL",
  "key28": "4z36BttxjBWGMj7qYrfpkpTTHXKCKHR375VBPPoeWdWJfDPRQNVFKkdko3sy3yN4DS66Tx4NxZ3NmNEsnm1tTXwE",
  "key29": "5EVgXkD8MdTTarXZysXKZxHDdzNH5bMeHdkKQPdLhBRL6Q5AoVwdXR8us2Jc8U49LPvsZw92zUZTGUbbP6rvdiPg",
  "key30": "2rGFcqmtte3VgYi6VjN1sFKcTJYVr8QwP8Hx3oGmq3nZqpufsrzfZs6rSDPBGkh2xsRcWSf7SupHn8as5L6GfKMJ",
  "key31": "2sNT78FKtLttUmMphNqYYwijPVgHyg8MBvGCrDyWx4k1kUn2pMnKH5fgR9dnrRvW6ej22i9xHBKnNvMRuCDDwdYx",
  "key32": "5Lcp3xijQUCbgA5UKpjcLj6U2R8ctQR3fhxcHZTStNeUpxavYueoCnQ2yz9kCphCUshp7TZwV12FZEXbZHdBKdjn",
  "key33": "wEi8ufzrdBjQcD8QbueDodZDJYRKag96p7ixsx1mKHgnTs7HQiGuDzMwm4z7WUVUbKnxEBS7FNjz21GT5fJcF4z",
  "key34": "3p5UHyNZfGWwmyNybya3HAKUbB56e4xVNyUC83jShi3hqm1D7As8aRZy5GB11EnzDKpjT9WEPVA7xjM2ZGLEWBKp",
  "key35": "4cV8XcTe4yxHgSzDAH7NaaZ6HpKeuMPcSzbUHsMypVfeo3HgQqeVL4ZVnBwMxgep8SE2cKwUvsYpYxBWwnUUG3Qp",
  "key36": "63DPkaf5Sac7PPoW1UQnN168v25T8fq6j4RmLvS5E8mLR35aJMmy9g8rcEwuF58hHWaRs6HWf7WZ7qh9YHpJ227D",
  "key37": "2JE8n2QFDQtEyknwZjoZTuPWEXwhTbTjbJk8jt4oRHgoZBKPpCKp3XzKzJKt84DniuxmqXFVUjdtfPJnDG9bumXs",
  "key38": "3skP6w8Vcg5FhQQZrs4qFbiBaabTt3o4dak3WN9ofkCHyM6okbnAynkyaaQrbypmkKTSgQMn8k2CzFzc96wMjiGx",
  "key39": "31Ec1X4UG9hYdE9yLbsxecY5i8mP53fpoASfBnpKKJ34FhGPReTxkB2ycdKZQXpeZ4r5AjtHMwcagDabcjX4bdi6",
  "key40": "4xFkHAh1c35ZFKHoyfDdYBDnPQfexqZJVseSwsySUeT9sw4ruBW73uzuxFyWAviAhMAjWBgN8Rwx8R3hseivG9hX",
  "key41": "4BfzLhE1XAnKFCESFjL7eQqixhEdMybH93UAeQQKktiHd9tpvV7fQod3DkmqLtZBEBDqBP3M9vgbozrn8zUHtABv",
  "key42": "2FuE9PJMM5Zff8h9h3KseZ4cBpx61otScB5KFvHqiuZUCh4qd4ceSGkp6H8P5eTRXPNnR3kzxp1pHGMfKKe2HFkB"
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
