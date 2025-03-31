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
    "471s8jz82mpoZJGobDB6C3xXtCSSXXKERFLZNsktFfqDoSQ15qGSZxxdfnzAJsvU2Dyi5n4c4iGrQecNtu9Z4ytE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32HJknVkuMVUe15WGrr1YcCzPb357Keowxs3vqnA9T5cPfGL78WkGepsx4B9LzNGZwXWPycC8zhhUCADae9Ww5QC",
  "key1": "4Y4tkMZMe13gQCzi63Y9Zfm194uqPEyzyPjubV2HJNYo7z4jMiNJxkPxCRykDmYW2mbJHyM2xbf65neWnutuyHSp",
  "key2": "69PFL8bwN3B81z6ju4ZH2QyRFRzd3chwyyCi2noHxZ54gHCEVLfwmxzjCnLthvJsmpmcytGaAp4HmXNbi7oG2TX",
  "key3": "64ykRZ1GQoTuFyC69xPzkYUALfQvwSTp92FWiiJbpWshvFwkRh6ccCQdf9NNWBivfP4tW1MSqgTq84TMy9MKfgFx",
  "key4": "5pRXexfXekttdryPbFprThMWUPnU5tej7DaV3WCUmWQdfZHLC6kWEPkxWPSmLR3wEhZDjSq1R36mbRZMUGrK6jcQ",
  "key5": "4Yp6oSTGmrJVi8vmZ2YtnHzm1XtsNxPr3xG2CYXw9vHo1dpXehFPwFxhSiKuT8XNp3bC6MfScft6CdsuUsEkyVYg",
  "key6": "3reqX7sDhQLrxjggP3fbfc2zxFoUGMLc4Uw9kA7MaoXjw7qYV1DgW4gPt9VThNrmqbZAzxCr9niietCp89fbLvBL",
  "key7": "31KJkMThsuMTfiuiP5CgEmbGZFsWYcw74kDJpQh5nbsqXGGVLUab4a2jQinbNBMAJaYg9Uq1UQjvMFxj71bhwFer",
  "key8": "3ssPR9eu6bTdyje9WDvxNuVM22Jr6AhDWZuY8NGGZ54ERX4JWpfvooGnBYDibXmdeNtyVXmv2UeXyEyyEoTDt7Mp",
  "key9": "2AY2UAJtwDywanwvTQT6GPt1YE67cL1aVZfFDP936s6PGExdfEspKyR4pP7s4KnDgtYuVbK9QW9iERjBPPHLhqy4",
  "key10": "5yqh3a5nP8yEeujwhJuE5G99RxKKyoe8rvF3TwnVEn4XY3C3oyhSQ7YjtSf6ZHVQdmyJnfgRrmysiWjVFm5oMwjx",
  "key11": "4uvY3idTAz4dCucxa4iHcCqxH5Y5NEXUnw7jvFzHnggDM52HvMaAbfcLDfavn4UWmm6A6yjN667vo6TW1cD49xXH",
  "key12": "46URjfgq3geKLdRrJvtJys546sdobgpZofc2je2QE5pMvsETwhn2i9g77tyZP8VEpBGWsZZhJDNcc7BihatVYSzq",
  "key13": "bxKmdE9ZF47f2enagB6w3PmFBrV6PDSzr6c4SwTJpp27gbDcGPdmWw3R6xHbbPMCKGuWEAz1zy1qCddsksuGUBm",
  "key14": "4LYYn2njRM3ZswbohU4TqeSotvfuQhvvjYAaWcntPZd7CDsQff7iqA9b3e67tegk2XCsgAZjoraMJSLRhhkW9Zfa",
  "key15": "CLDpuhaD1CWiRgfTZ8w78BDWqDg5Rpc7ApjUoFoU9s24YGkHeCJGJCCmydePczJhjZ478YkTjCQMREVgn2AZ4S8",
  "key16": "5GSHruX1bBJePTtZevn1oUCYipVMFxkzDTd67YGh6d3pDKqGVwqjoQL3muHG3R5rNdfMC5RYh6pbVAszvVVen6Nr",
  "key17": "2AGq1Us1kBC8s9Ya49ZjnDaAP7i6raTHQ2Tpx5xxzWbM5JgT7ofC1bNNNpkHwN4zNMLYv9E2xPu3uF8acCs9VRC9",
  "key18": "4kRjhQiBub9Bw57zDDcWvTAiQmEfts2huVT9DSj7EJbwpLEmLqtNTPUNarBimz8osRCsEw2eF5M1TQi83KEpbyhp",
  "key19": "21W1AVpRtWecXk3Lf75S4P4kvMfoUNvfFNxCW4qGfa6enNCgkhxVvMi2rAuweDnmREcUYETWWHkt1bgj2UsWf1D1",
  "key20": "3CGHCE66DY2PsYWggacDQpX8pKHsSGGNbUpiAY2t1SQQFWcJYJuGJks94N6GUuro3ifs7aiqfYAqoLGmcxnQmAMZ",
  "key21": "2XCaEKecRaQLUgvF3ajs8VPTyHTVH66SaCk3NRKf3hoFXYGbCEFFmu2J4k9a4gjPVnUHVsVvH4scPGYrmvj1MccJ",
  "key22": "5a9fGDyQy6PQ4VPrUQNKNpB4SQS4kLiHw89hixni3BHQGzAvHVkhPYxDvDvia4hWEp2zJF8KzXzLMG4mGN5NNjj6",
  "key23": "3jA1cr9hHTyQKpTtQND9VtKX1GSNiu7KGCiziQvdUxAEQmT2xvud4ZgCSAbFpd1LLahn537aQ4gVvXnvaNr1PjAH",
  "key24": "64LChqL2cvWd8zPMbwg3iaqre6acBQeZtYnisrkv9zarRZyCrXhRZfTJ3dVbzWMa7v5pjpiSacrYgbxfavRd5r2E",
  "key25": "5VSrsMQKFg1NAqR9hP41VpKKmjDCnsYuDVfTic9K3H43RfPnUwhNJKBFnzRZSKmtgx26DFuPGSYnGEmsh7MBZu17",
  "key26": "5wH9hb3gysbMx9FxBFgRg3i7MuJCQakR3rhK7uk2QPvkf351AHTgwPNMzE2oqfaUCWoEVyPDSZWe2JcHCrQVe5Rh",
  "key27": "4WiydFcKNRmtcMiK7LymwB1KJckasY1SqyiyVcRJhRK9okdFCymtN7vb8FLPLvdSeajEnxM5kCymWdv9nsZk9ymf",
  "key28": "2ZXRkMccS8QCdrv8WuDE33XFV8o5gHz3V6Bw4DYAuXMfqoY8TiKiKfJFghgRqAXB7eo6XFFyd3YmN7x5kPHgPhzJ",
  "key29": "3cudGiGT6xmDMBHtqaQ6KfeyNAzeSUB3H9wJ8ypDV2srVLoE67pt6a4ALyKsG6upSFKc6PZBMYNW78fQz7sNRJ3K",
  "key30": "6RmDRPKdceDoDeLoAycTdpmukp6Vz8etoVMWdMEbmHGLSKBK8kwFj4Lu7uKHn4uqUto96AAVaFADXJheSQWdnqE",
  "key31": "5Xr6AX9BFc3j7eyPY2suUKreuoZDGiuxsBD1WXKMzrXMKLRY7EErkYPZ73hb19vSA9ZxqQyAkX6jJUYQqchGBDm6",
  "key32": "cdS8koQ1Ua3gFZXpNTJwRjo5WfWEL22jN3hFYPfbFAujgCeL8G9Bq6ZKZAGARRYYuNpd6ZmJJXNkpezmwn1aD8X",
  "key33": "53LsqHtFRY658BMqu8qK9njjFykqD2Eu9AFXvT6quYmc1btkd1iFg5NBqtcHTPyLaPKz55KM8hMtbZMsLag3St4h",
  "key34": "4M2P36ASHeHu26zUs5DLwcjD7VGjgG33c5AhTfbGG3Ehp9WyZC1iscWQg9oQZJvagchGfZDzAQGGsA9JUKLkAQcK",
  "key35": "33P56PtaEKkqgmk1StKekHKfgCwHeRNkDyr1iQcZTSLGnSAeobWRAGCd9yMKg6BdQMBGjyadwmc5Qq2jx1Suibu3",
  "key36": "3FrHDBGQpezmPHG9ZPSrt8kwvg51XNhsmYkGbnp6DfFjjLLgWBvc9K4tre7J3pvpqkdpdgWBWLE3zeVWyNtEmTk",
  "key37": "67FxtXTuZaGUTaat7dFtJZ8vz3DGDp8J8FD1EUB1mKdXtQU7bQ5JN66udyUKWRA1b6CK4Cw4LDr1GibYR1AM8ZvM",
  "key38": "5Ji7wxjbQzrZky8NaoTUFoknjGRsXhHcwsJBB1xoqeW5CCsxXc2gM2qRfiTyvoeNdhrQuV4F1Xga7fnbMEqRwp3a",
  "key39": "4r5giv9DpazM8gB4buFWpJfDRigqmnUKGhfL1sEymBNS7nzb2KMNBAckfpeXR228WdvoTREHsDyswCX497gNjhL4",
  "key40": "5bB2my6QknAdUy24eXMQqxc9hRGbyr73oNJ4Zd16Uz79LvSknqd2cu8fwtzsJiUyhuLAJfsM6Ma1Q2E34K6DYr8B",
  "key41": "5JnbejBx5ZsgUPSZyxD3uCfD4Pfk4Le4jfaFdPCynnujmfow2cdtrX4F6bJ78oLQD6H5HTpCvP97WYx5oGGGPZn8",
  "key42": "L2PQzjFGFLs61SoiVW645LSi8aFJkN6EhYGEgLGu3h5gy9FAc7pUYquGThsE2WuGYdVyPa3xzyaFubJ7Q4DMjKq",
  "key43": "3MGRCYM5F79gAbfB47JahCWrJP6f2G1DAyczE5VxhPJnTreuaSJ4DUMmhcJrt56TZZm2XTaSPF3Vv6hjm1zpY9B",
  "key44": "4GwhJBHxTmueKHyAzwLGL7rkkxbeJgj4oA2fFEmndEZr3ei3No1dxyK9p4BVZ6PLu2LSNf8Qrm2T9vcGoVcJ2iqU",
  "key45": "3CeUXji4qTSGBV84yRivcEQvbDwSgcvqucc6ZVvrMtVzKBtE9ZHhLrntQh1Nzk6wnKRPtkLBW3BU7SvJcTVSWSE8",
  "key46": "2edHYysGzumf5NeQap37CFSkwULUR7oWSXXLwGkSbWwVkSQ7wqfVbt3ro1aScGXYKCf28a6naXoSYyyCZoLhSBjt"
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
