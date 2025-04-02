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
    "4X3nUconaRYjkwbe6QVFUome75KsutwvtzLz2GSoabKyTjb3swuRk31dagbpYJqKnpUru4V6uw8MqABieCXESEDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvwr3Xwy3GXeRTvEndmCxz6rdB2DJH3QYtjz9krTK5XyFrQ4ztUoVPKjrwByZtsUYiYzXKbq8CZ7wU1V9bdWma7",
  "key1": "2msDfLtrjeMbHY1Bo4uYxdLx9Yg1jsXcxspfYoSxcTpNAq9hDjyAFC2V9Be9xJ2bfiGuSL1oq6zsYHgM3MMMUKCu",
  "key2": "2KWPQbBUDxsEB8YW1SP3oG5TjWx7hrf1fWKmXLX4B4NEqD7zKGZRcDuSnhkVmGUYHrJ1HHoh9LugEsWBAXanqe5f",
  "key3": "5ZS8yE1ERJVEkjDDSw3HGNBcF2BHLCokeDk1Tv2bBJp6BtMcayp2XD9EVUtZCKqWzezYDyjG8NoRL71KHjzccjhK",
  "key4": "4G9B7GGq6yitpwGvcwpVgwTms9cJVcmSEVMHXnDGtEmFqLSyVuGdGspNrFBwg5kX9fdmfaEk1HW5uRwk7xazsnwy",
  "key5": "2AY3PpeqHgrfRd4iULRHLn3MrgfjaBNWAP139cyDpCajprkmqMocsgJaTWJcJymGfpu2LwvyudXZGAXWTcn5oaX6",
  "key6": "3rZHZE8b4jrHa3YpAeMcXVK8KASCeNVQs7m9RV5sztLMjbBrUvYDRhyEor7f79VCEP54YSdPUQvd6YaQngRfEjhw",
  "key7": "jXnKGkB6nPMrJXhdLJkT2KiNiBgKThQ8gWTjCWSE5bPcRdTUg6QtW2jvCvr84YucEaqetc6RVEdER1yaAGZ3BpH",
  "key8": "67d8TEzYvWitoJPxnMY2mnr44n1wNbktp5C9NEisxBrq9N6vm93h8hAfYjwzRwiARYtT35Udy9GTDaz3qQPeyrYK",
  "key9": "3maEmYNfJwXPahCGiMacQcchDrhy7c52LeF37VKVGAUy2Axd7uyWCWPHZWBr1JWZigTrK18upertAkRkvePnHiMY",
  "key10": "ESxFfDJgN4sojbUA6rrJ75obExW2ZiW4thxASNjK9gGf6oeC2ZKq3UncypBZhfGtpQuR49BKR8pWBKSL2GZQKFo",
  "key11": "4MJPw3iRqQyVDHHWSE92v3Wed7U3qP57W9BrwbJswDqK1xvLcJEwhkt9kf3tdebUhtnurmPftEYPtree9mioiN5L",
  "key12": "2b3w3arghH9kHopco46viptD2AeCVjiG47ddAY3nN6bbwB7KtsrLUMYyjgDrL26NxaRJsdtzR6RbP61fyF4MyFjN",
  "key13": "5jc5Kp2G7qpsHS62R8hKorqPYdEjzYPiLgo4CS5Zuq7QN5bX14UF6LsgSnnCeiKu79RevKDDd9r8Pk4FpoMtCG1L",
  "key14": "Dk4o1qP864hQsCrbMWDnFCuwh1JAzE2ZRjsK8BTR7CPUKCA4jFJqcAAYuyZXCQ8XFYsfrW1AoYNWH1yWaJ6jj9r",
  "key15": "1CqR3hk49qx1SQU1nRCLDxXFfS5QmeF8EneuA3zHbfU36JEiuKuots1ckU6kCYRoHMgEhkcggjfLgsHpYhKaab5",
  "key16": "4jaa4Bpkde5dnTsFiFfso29qwReWTZ5fQVCrFN19gpRAMREQb6WATh3Mb8yki7MfYpaVxPEwRUmdmBihHdAEVbra",
  "key17": "51XKu9rLLKncMSAGzaWt8S9uGu8ZRpnTHZFEVzoGYVdGGz2tTr6oBWACUmpyVdCRWqB8ZSaxpkheL7Zn73mCMp39",
  "key18": "2Tcz3Eg4ngBe7dnjbkoNWV7tZYUiqSu99h6fpKWhcyf9ViRXF7pBMBao2bQB3SV62XwodoA4zSHBXRVG23swN13n",
  "key19": "3WW9tzdAPTpPL3Fgg3m2WhNNL1LcSgiSsRMthw4X6tPYvVSkXd8PwijoWokR7e2YZPhPoYDw2MWr2XL2cuNWxisT",
  "key20": "3T6EfjtsiS7CXavzzDZjdswUwUdxft51QvdLMk9o2NBDHCPhZNTo8zUsdqBLa42UEkk2at28PXYrvXqS9rggEVyL",
  "key21": "CgJzpSDdbKjuwhAto88AdPgTN5edT42xioqLbT43Tp6v853FEgzj5ZDpibqek8848cJnK3Z5koBoJMgq19TqMLE",
  "key22": "3wYVYJik5Jbt1EwukH4iFWVwZQnSPc9RsyMB1wBXATEW4SZxLoEcv4EBy4Dts4c4Tse9FmfgQH23N8a44nFKotJg",
  "key23": "3suGcGffHwxtkn5oEnVPbHNLmk2XLdThDsS7prHqtyMYTCW6448h2B9F6ounVBXG5ydDJmCVKTA8TDZHNafTxoSU",
  "key24": "5L4zfwXnmHHD8GYANV5MBVYscyUjoAnMytDsf6w5u3r5cjwrUTWWiiW7RRd7spA8mrUSPuofpgUNVZkc5FgX5gB3",
  "key25": "5atbQZKCkPmxGXt7tJvGZffFg8DcmmurZ85MH5MdzJ7wi2SAtvztp1SiYVsoqs8YapQNnua7TiU2McmXMMxR5LZd",
  "key26": "4ADYMcaZLDMS71NbAscMb3PdNi1GN2WUj77AdRF99ttex5xSKowNhHaCCW7rUdPQWX6s9gp9VGbWcta3AfRvpi8x",
  "key27": "kazvtYHsTW6sPioBE19NHoUNmCcHpyPu2fyDbVRLNkkgTFkaypkr7UTMhFSpoZSfZzR2RqJZBr6EnLAAbfZYMFY",
  "key28": "3Avq15sG26AH1VzriiUscuZoAQR7EeBzbWJpvG6Pf8hAFacJU5mMMUbKDA7gisgZLMmsJyjqKpLf5j4HgpEvTZnC",
  "key29": "2YgFM67A4ZsAG6vh218c9dY1xrFwpDWiwDUPLaGzds1aWE2UhqJAB5rxDRhcowJRvedo96mqrQxfyGVxBrpna7Zq",
  "key30": "2CqWi6HzA6dH25HK6okU2NTfcfzrjUjNZu3K4rL9nibTTiPTQasa8PGnryorUVJTDAGNRzYSogbAV1hsEsG1Ntg2",
  "key31": "43kxXR2fTLQdvnjFFT9F51x3g6QyNNEJGq5HSmkQDuvNSrJuW3Q83WMyjkDeC1ftWiGKtx72Wdxx6tQXpiSTXkWn",
  "key32": "4uae7B2oeJdQMCvVE3GRPUT4ndVoAj1GrtpoxuP7utbYFGy5KiTiKLH9XuJamfK3C8rWQUE7FtbZkcyisVx4ZFjE",
  "key33": "4Mf5ST85iPwyUudDB9bzPfj5LkmNVVdJgERhKCqcpCVHWYSvdYJWQ7UHhh675aDoFEEWrzG15JQ1nc8nMCtkS6zW",
  "key34": "2GErvdUUaLdbrg6DT48EJzgazPK4WULz634D2RE1KDddk9uS3f9K3viyNGis53LjrMegYAaX2mEcVuCzF44oybKD",
  "key35": "5Pu2adDTf4CHyFuWtCzjAzqS1iA8wpLzUmynJEcF1Lr8KdiAhXyR2rRbyQu96Sv9pzTCwP72M8a2fJBgfvxoBJPi",
  "key36": "48WASTQUwVaW6cW7jqL7ucU1AvZ4xP3cqS1or8baQnuUfbDV8qzgjyZRF5bhsCMmJ3wgzeEBzRAHzB3xtzbbPpwL",
  "key37": "5e3ZgCwsZqr4NtCETAFuUMT3nffxjQru8jFGm6tefxugLFJBNcn9eWpAutxw5BJoyntoKau97rD4bkRVVQSGxdY",
  "key38": "27LcU5gcvKzPeaXw6zG3ipYfEh1o2CoqtgLySofE7hBkTayuXHcEdhSg1iF2VQgY8hYPh3TWn8yCRv2j912Jo9cD",
  "key39": "hpajxJSNuwwJKS9iu3m4GZnzjZB4nSUfankPzj2MfT1ZxQRhVEUu2ifUbAvyoTTasmaRpEbffsTPSQix66ckhuZ",
  "key40": "59nEF2G1m9dGUUprT3pMVRhoutJp23H2P4DhtcnTmC8ycTaa8MmeM2Wv4JqNVQXeXFtZ7qc2aQjsm6dwts3or39j",
  "key41": "4jTtB5RefdpoxqF5dZsFmMKw19GC4RWSYDfnkohv732RtwDqhDKeu777GZsCoDUYR17YMWWBrTpe5wVv323CDGYM",
  "key42": "38EbnVamM2fVPLZnf9c69ZvE2YiMFKXiHjqPNdDF3ujHVaEnUZ4HWKbkBHapGxiy6NS7n7g9Xe7YexBUs4hXZxLN",
  "key43": "2ZtnNJ7VSPmhhZi7n4qBS8nkVh6S9KaqRRtXgi4nebzrqoj2PqmoyXFK2W71nmGqmDQjuWiaQthRha37ZegbtADu",
  "key44": "2a2LtT9d1WJksvorGKaovBqHitchWnT3smo6rNdrjEGN6m5Qp7ZEvykvGDGmj5rmU3XgomvUX9c9NYKRh4tbYWeG",
  "key45": "hzE8mgds6a41wygnwQshwCZYHULaH3PSKKGFR4QE9YAfMKMfQeW9dSNGkSgAWx3UcLVtB9U8hg16F3EXL1x7rfa",
  "key46": "2NegtQ5UtrKGndJ5QrNAbqzv4KWPBDimndeqepxcHvqmXNEV1KQC654dtqTzWaLfFqRHoejx6Ny65QePaDEPdsA7",
  "key47": "52MyNcg7qLHL27Dd51vfZjpyd3wp4WQKKmRSe6J1nAAY5xUj4ioz5QRjetGyTfDbP7wcVoG9MZqtRZiX9H4c8CMM"
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
