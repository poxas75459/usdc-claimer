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
    "2jjbkKgBsvcofXnU8ZHmojYSn7ajEaNiPRCmoLtKAwM54q26f9ZxkiSp5nrx8jXpCvWnq1nx6mmhoqGb8SW6xRai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zhS3mdLn6B4MGSZjQVXdWP89ZqrsapabrBMLCpdCfKzjFjwybiSuKMkt4tSPGLp8txauwq7PGRpp7poAz63LbDf",
  "key1": "qwuFWe4VGKsH178gjZu6k7nCaCcehpHBrWj9e3SYaarEtbNzVP6194xispTTnkfVx6yvhTxp8kW57Evct73gpzL",
  "key2": "3NMJxwZASMuG9g6iUY8Lim5Rqjto738v6kmncyQ4ZNNor6PoABAjHQ3KQ2TKCVV19Nw13H71bznsqXsS9TfEVtXA",
  "key3": "4U7Pu3wopvCWpK6vUuHhs7bf4bcR8gGmZazRYi19V6CiWc4zG2P4Q6b34TMgVCEn67o7UtyjykNhEWwNrSCdtJrK",
  "key4": "BHZsAGqgqXakSN1K5hVZ2G8B1feBoPLaRTgvefADg81Q27uuf52ndPmSpnxYiBQfZpVF9dw1q1WTdA8Y6cbKZYk",
  "key5": "2ndAHQJgBtG4YiM2DboX1rX17ydmg71CxZZPzBRu4LEFTQSfVAhNj65UvXBxWPFrpfmyaikcyHYpbrrrFpdR8fgW",
  "key6": "3p1hptcjS5eRSzFj67m3sxiuxgjWEoGf53FPEUtouwafrb3vdysGPfpgRdromBYBE58q6DeoVMBdhAyXNipdYsb4",
  "key7": "8GSHssWPpdcXx7CibcVWomawCd7yL5C75CzAaNAGHUSJJuRfzBnVm9JQYntR3CVkgip3QKuuUwMFL5eFJhJAJpN",
  "key8": "2Gmzba2Hs1VEcrj7KWqM4ajKZsY1eJmbuhyoNpDcU5KMu8Q1bhg7bZjyiJaKVY6yEFkbBonicsLcE9W3bPK9PgCH",
  "key9": "3kTrUdKLK88oybRZYcLSMYtxZYoWbJPTCVmx9NrRXzfNCg2bR4FTGTAsEWc3VyT1NRuk29QNQG64hTQFNVhmuTM1",
  "key10": "4pQCux74MuWCrQhynb3i1LtnT9Bt1qKkZVyTqueaUs1SxFKwuqwG396TCNdhXnsw87STSHN4bxbFw7ah8MH6Y7CC",
  "key11": "3ztVr47zWQPPFENrcw8FtS7vBpxGDk2qNDXBqiAhNu7jqr2d1fp3yu1xKmhPsgN4NqbvyKrK9MZ6rxrQd5272GW5",
  "key12": "DTqxMhNxyDdWXiRRRGLb1QeYbivXV2JBGN7c8smSwdhSm5dxQeGeSVrjMaZns4zdk2Xi7qczSWucXUAJPtwhVYX",
  "key13": "teL4e9Umv1ppUQJ8ekwJD3vZaQRoSy7bzq34ZDJKN8cAN1NKymgvxDxNuDbLEXCgc2sJM6sH4o9o58VpcK51Dsc",
  "key14": "4B6AVXZc1E9Ex3PZar1Gwju12RJk8751VkUUZUYK3F3Be7wQMywStS89vGT41qcLwFRs5r8tyPX86qjj3R1wQ3V3",
  "key15": "2v6dRbiLC1TXSXRRCnUocA3djt91FkCrKbG8GP38MPupQetC5v2tdsm1WTqFSPyPEzjhhjCNGAp9n278dnjLrzrj",
  "key16": "5yqCw4fWNRVMaYq8QnvMoY9dwasKY1cDUzJooAk77UJnYBSFis9zENU8pBNubMmPj88kEW4RP72u7cHtgdQAUjab",
  "key17": "5EeKTy73rEsAFst6qEdpAsZRghEQNEBiP8YPBDmmKrqmhBaEBYKLzBNsa8tgkazXUsQwCcf1mZrvq4eqAzjHWJBv",
  "key18": "2aBEbjExY3PTZAPNoKkePUgxKDEtq9RJmmarfUCWfSd6qZHLQVk9HsHap9soW3HCuPEw9NcrKApJfgBtnfv43WqS",
  "key19": "5jUhPaDeJnTYNGoRpS9QzXH1hajPkxJvm9Z9KZCLMBcckxU9h65VqoxoMMPRyDr1CZ8jgRFDUKsRstT7u5R97pne",
  "key20": "4G5yG9UgyMsZdXHfpWxTEvnuEnMzRjHbMphDutugzGVZFATHSdpL1739iRM5JhqyuLZYPo9hWawWZSzv8zLhAREW",
  "key21": "3ees8MDLwXt59MxtdPPM4aKpXFdzyPwMGrQxBK9iDPY44VSBTTSEBgwySjLhUc3Rh4jKCs92nKPv3BuuKYrce6bW",
  "key22": "Jzyhbn5yrDgtMx8QPJVsKWXdeT6XYoec2g6Gwz2ZmTe2wSJny2k7g2fuDx93jc24ocK8emi9qFx3bGae3cnJnxg",
  "key23": "2XS3bht6R2uDHPA47zEQHGcT4LP5kT2qc9MJLpDTi7jv91BHY7xb4UQ7HZ69XDVnEE7f6ha3K4y2mSyVXq56GQdh",
  "key24": "5XGUJDtpTkXWvuoQHu5D4VhWjmmFSHoDh9Yc4AvLdugbYi7LcbQKRRY5uCRDKEv9Ajy8LCNdJrccQBpoEntaSj27",
  "key25": "3xmdZX21y2WyKFW5XaG4XjJ5DcKirYm7xbxgMkRisDfV4pSoDzquZuCa3ugASdaixnwBYvBw1arvhDie1L2F7m7i",
  "key26": "3cm8fgWsBexX4heRZP6AjKxQvtCYvogc4eoQT2vrFrnKm6HbYyLNCjxjjaK5iqeRNEPNDie6XuQ7kDhKwrotX47g",
  "key27": "5XT9D3v7kZgVQaWZzcVCjTCGNyhmEko9TWFkdYWrGRY9m9FVZPbSe6KapUqJjKuc5oKexjgs7CJuteAqhH3w75ta",
  "key28": "3hzHGyVwLkgT9LDS6wqDWXHzeQX5LCGaNNbRj4E9pJJVW4iw2omL1ZvkKp6Y4BKD8oUyD2hisYvdRHEBhDBnigVb",
  "key29": "5JrMT29N3GyVc3LtsGbyBuMTBqLZ5QBCyQoU2X3fcvdVM9NtZb6VQAAkE74s4bTdCRD5PmGPzenm2wFaDMa9hXaF",
  "key30": "3kKEuqqJRuaa5UnQZvuUQCbvtqD41a9SuAKHtpbEZs8W5q745hVBdKfGcfmcEH46WXdP2dK9edkMu8YTZfAVaykZ",
  "key31": "3XGAYpZXj3sP82NuDp5HT23YrVr8NPJb1ithw3EEXM4tW4r2pXmHqKJJCoYZR8x7hvtJevWqELqoDTaSVK6BSCRp",
  "key32": "cb1gb2DCRqdPDd78aijmF8aEiLvTgKdvHVKyvuVz6TRsaD6piyAANC1mcQZjqn25h7ExYVpc2ZDCfHmWYKUwDX1",
  "key33": "4CLdkRTsYopCXwgtAH7ZMvEX5m8ggQkm9wESMyULzrBE9DW728dkAZcvR6uQ7wFcKQxxtVv1SD8wobfsjkejo4Eg",
  "key34": "33BTPsimxfcstxsBug8SmJTJ2Gf8CkDe1Ua5a1xLNxxpCTY2fUuAHHNu3rjk9PMqpz9tAMQViz2Ki4URpdWYZM65",
  "key35": "2n8PQYTg5RLk5ozzbAWeoDQZWAFQSjGKpU96uL6E6XtQnEMBtnTZaT1VCpsdJcbtFaD7iTbEUbLc38vJCUjVpv2G",
  "key36": "dtd7zHYCFUQBdNWTeUXv643xw18sTCxJghd58UBi6cTcaZkwPkgXdayMMjUrcoUgY7v4MPxpqddRvW8hy1rCgTx",
  "key37": "mo3b6W6P37GaKnqz9dv6wv4688VQpgcmuEN65pwQEy7SJ6WnzYfm7Sz5rRsKRVgLBRpufhYeeNEzwpP5oQKrKNk",
  "key38": "3k66ebdkyBVyWRJ51E13JCPAaAabGtEFRgCTJgHzVZd3RjPHj6YdZwgLpWwp6dkwvSxxVoL6ViLeCt9HrapEd7nc",
  "key39": "5REBdAL2tiNtKctLZ1LTyD3869hwNVV5xEZxcVrrT97g9yfsC41V4Gv1D8JCPvQ7HjAQe9qwym5oPAC94HcUEQTN",
  "key40": "3hCyRMpZBSkXRkAgub21rFUjcXs4jDvaH5SQz4Hhriv3Feb8CT1BMdMsRWEAZQcu9JY4fYPsFvvdHZ6eSdPkh8te",
  "key41": "63UgYPuHGyKnG4z3BhNRRVFZQ5ymHtmMtYkfTS5BEEw1z8bgqQRygZ6CZrVoAek4FG57cnUoBEbKAhG6fgr4PxJp",
  "key42": "Pdb49QGEsWwrMuwEM5ZSrnzGscEtpEnStTiu1t9p58C6d9C83ZTiLBAMbXfHEiZAEietNGAWhH7iNHP5bmrQsU8",
  "key43": "2mXi5azNx8f3ATniEvuRBRc7c5WqSh1ZZjmNd8QZPnbgExPodz9aEriyaNK7EtL6Ciefd36qcEews7BLMdwqgAkP",
  "key44": "TWcQqE3Bs6L5hDkyciF7UD3dMjeu4pJWx9uxBXo2RtVcLdXrbCMdZngaos6k5PXBy7XLLiWeEiXCZ8quR3ttzPu",
  "key45": "4LecFWWNRipzcnzAXjuMjmmj9LB4r8Ekzv9V1zUF4k6FfXwddKpSfmFFsr1vzu3nBoYfocrJ2qzYhYQnwbhWK8hv",
  "key46": "3Xu6sbGHPFu297nqbULicQAnG7USnDh4UhDMBM6PQXhhKc2A5fySQDgxfFDw8ApjsMNfCkQTZ15YHBirvjp9FVbR",
  "key47": "4nLpyPguWxFbKYL5hXuummN89FK3QYtLgy9KfqYSGsPb8ubHRzW4JusrZA1vuKiZS1eX6FFt3JZL2oezaACMqyuH",
  "key48": "4SHKhBe9kUtKPfmZz9TU9yWCV8mzbTSs8PXp8gregNjxpG6LJ7bh13HS123eVeAFtyN7pCRLRpk8Buc4cRrv5UZT"
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
