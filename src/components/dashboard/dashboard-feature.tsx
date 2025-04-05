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
    "2GjTbMMqX19WZAtmn717msRUb1vZxinM7vy6prb4uYqtjN9B3br7Y9K4ySQbDf7HZLo2my65UWi2m5ougx3rLZeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmPxiRCTbX7Fq7SsdhheBKgG76AnoJzZxuPFbfxy13Gy9PvBUpCra4hbaBT8cg9iygWUeNs83xKQJP94fH1eBMK",
  "key1": "2ha8Hvb8Uy95gp67H1etVFfVBa61C9NJLJsJrr2oVLcykcCFeQYhpJ6MLsEen3f9ND6BBHvPUEGDHCnxKuGX914d",
  "key2": "4VZJdo4AaHUqFgj3C4AGdxfwzXaTQRf42b3dE8G3HpYEmcaVkmSL4aD2dbhWEXVS9quJ4nSPzufsUPMLf3Yh26eg",
  "key3": "3Ag2kCe4hNcQfsLVn3q3KKjq3BhkJPmHfdfHQk5EZZypw8S3mhyt6twFPogLLTPy68F4MYHmUqxdz2kkHaGjifwF",
  "key4": "3SDN2REaCb1VvLksBxtxKrT79AP1RphDTLNY7h9piCjGfRqnj4UC5ZhcoHwQ8UJPgfHEww4AHht6abgudCinWGj9",
  "key5": "2WqGPQSGDZe5zj8kBJFyou17Uw1d5QEh6KZ9AMZegUZigabE6GchPKUnV7TzDeT5qeumQokCjWTMvBDck4YSWHyt",
  "key6": "3Tf43VvBpdRqTRuZKzNWLZ2euqRnyauQKk1jfAKBsEbcj6YYax1D2M1bh9Bc8JTBuRbjTrnwchRjeJxRQ9rBqsHX",
  "key7": "21yBEftN4e2Pgf78e38EbSy8M3CJuR7q5ENCA6emg1rSGTUsZqxn5j1TRSXuqEitduPRaUJhq4mV96ok3jbRRUHg",
  "key8": "nfRk434tKun1hMes1YmC6rj6NHTut2SMgbaG5AqiGhL5iFUQCehRr6TPhosG34xUVD22uE6gtF3pWK62oNEYvmt",
  "key9": "2UNRTp6DzTM6G7QyHfiPKLqDLFEFX73BxkxPrzSMc6RbAeZRmPQqw7HEjYdfbzriNM19ch5uzi5tniAGayJPZEe6",
  "key10": "98YDHXCrbqD7uyuHDGK7QGWSLWcexEEzXsqgLFCT6PEygeW2xhQQo1XwFt94tu7FyKRCrHWFDQzNXq3J84ArLkA",
  "key11": "3xbqCEotcyn6MdkMtaNFPSyPuBB86n6VL96gFR1hWaxWpMmKztwtXCkbWaRUWQwTsWA1zAUEMDU3v1qhDXU5SfhJ",
  "key12": "2bCFU3GHZFUSVUwPHijCFnsmCDVTK2Cwwy1YUTP8FbZCaA9H5uT8zeTvXT4YKzugcPbNJFQnwoFjECnDRQ4VfEeR",
  "key13": "37VLnwdZhf2BoJjndRb4DSA41WsgDtjs36cN2vcUYP4gRqVLbBuki7XtD3ds4LtEtZEFJSQygT9VW9nxZWrZJYVJ",
  "key14": "4o1woGHyYAn8TJWqwWXmxjnaGUsYWQCCNSwBoMRfHGWzwbob7MqcegVr3zLWk9JCnVv3d5LjopoUnaJ9AnhVXLCR",
  "key15": "63ebedY4w7fcEy3wM8mcNRKkteeDUeAFoFeojmG4RwFT9YMha8A9ZPC92fvvxzGyr3XdnxvS8dzBmmrMmZyj8zBA",
  "key16": "2VU5WbU4L8Af4b5ihcWrgc6Gk6FfxMX8frJQ1Qat2X5fwPn8kYi2TsTvFhzKfjGeE4USzQ8xs7q4riHcBFGuXqrB",
  "key17": "4gBYJtaLaAnVMEnD1KMQLQYpr4wTsVV9Ft3GN3e5t4adxZ4ijzrLvtTVxMQRraBesAApzh4dh8wij23vTKX2Ejfv",
  "key18": "63pHTR1VuKYopvxqJLv1NurDyF3GxCyoFMLQAJCTEN6R3PvfQyD1sRkaLG2Kko8ph27TrDyVwsUft4RSZeUQrk8Y",
  "key19": "4V2YzY7XpMNWbwJQBRXSdxQokLGAp56DfUqi74wvCtK8zbyMQYBgYvhHAWDvDSw39rtJCDrrixcx69ivfLSJ1Wk6",
  "key20": "4YhLFs2uESCPrRTkMCtwyoB9Jxw3cXc7UK2HVQ6gPRprcVCnN9cgV1ahrnQK8iQ9BMk3Q7XXbumPanffHEM8RY15",
  "key21": "5zRw3vd79exnDyx1ZfvhLz7qVzKDiKA5NMHtmnw9ihk5Ye3wnwmhN5aTZZ9VzgxhJPtfN3BqfxGvDZGVRG7kX3r1",
  "key22": "2io9E3ryznxLD2BGv4gqAvb3zqmgeb82VRKfBSkTmzeHCR5p4Wr8wuFQwJUqH4DeMTKNKWRxmPiqft7YvmZsEYtC",
  "key23": "3oiKjUvJXSKgKYzPrK5DTLzCixM7ENG6hRX33j52t2615VhZrHi5ZpZn9nfKtaChLgbwVn8nk25JQyrFVntwqCCC",
  "key24": "2YLEhB1YKX9VKLGkt5nSzR2ECeHsoQ6ZyFDuYHRMkbvmrXPZPGgNimedBPhrSnY2FeYKUtAiUPNQEb7A6rkLgR3R",
  "key25": "4akV5HnaQy9kKkQEHcU5BVbfcWuQ3APLvn6Sk71XcWhPqjRU11bgZnEteY3SVywQQ1YzKSpxwmrVQdT5NQS52ZTe",
  "key26": "2MHecGZVuAxYa6M9DqdviyJh2cEwpcUnaVUhdToAw6HKw317tmFvGXhgB1YcrXTWTE4QbangEFRNQfhuhJMk95Ha",
  "key27": "2hHFM1rojQN5UAe8RRWtH9KMvwbyUTkaWVEEQFf6Wa1p5Jt5eTrznDXycunCD18jxLmectuNy7daw2YR6pyDXLab",
  "key28": "2tGbQaLwx6WUmS9i1KZirMTxJhMKYAEXSox1t6i7QNgZkRK4abjvL7FcpGZDLxHohE38axsBiBJdVVwk19FCNHDq",
  "key29": "3xw3idqQWQqM8o3b7bQJEJ9wsEq2S4LpVD7adzuYpkVeyb9BqKLjugAeSnUG64ge83UsLDi7zz6oiRnTnANcgFyt",
  "key30": "5tRfhvF8mpufz6nQL8f6oCH2aQgxSWV3cmXiZkmEuKMX2eKXRMiaHbk4tAANuQVzRmFezkpJ1EcC8eJRsAPm2xtW",
  "key31": "5voeQ2jM4TFLWH41tg7ohdkZSHdewyaxH7whEo4LeQhWHfTB4oFeZy9iyLZtGfHtzWxYJo6xRFp9562ZoJ171jqD",
  "key32": "5wyegi1yByTX8yqfFx6cMCQaM33zx3RoJimoMoNAQ8gbATcooFUetS7ZxnBzBsNVqVGVVSBMfPG9fVTiy3mu9Rnr",
  "key33": "5hFqVjt6kt4SDUtwSHvoemhTnBi1B91fUtTF5ob2B47HnodfPiknkrfNYCHuAaQiD5EYKqR8JV3E7e8dzDhwu2Qx",
  "key34": "22LQx566VefUPTvdhz2D75TRJnYoqtz6qjb1q3JR5t3E75Pf5fbt9KCZ3ypTaToPorp6L8hrh3Wc6hsZXaAtKHxM",
  "key35": "4KhjxBaMcsQRWaQf9NvaogVy5NsbWEFSXcfVAM22XuKsQ7uSAMD7RkXVWHfDyPpUSeqZmeXmxFxj69o4d6c2szD2",
  "key36": "31MBnRemdjSfaBGtsYyqS1VsHj4N3CLLgwJL2G8jipZMXA1jLQASb7kLj8afh197U1TmW8V2tvLsa9GLTLfceV2a",
  "key37": "3Pg6FQ1Dij8g3rzLX8nFxPixbovoVhEYKE9XK4P1phCkUXCJknMNrLxPYDpHCumMr5E1HFJYDE2FACjYFg5rLJg8",
  "key38": "4wv5AT7fDnCZbiPaNAzZaBYfnnXeXT5VQUdkgS35hTXK5QycpcWhB8ffQSdoWvMerBFcD2sNT3qRkbLocs2mv3mZ",
  "key39": "2pEp3hnJ1GapVfAsHMzXpVPMGuFsbDcC53iD8SutxLaFjEQJRmcmp5nouoyUCaMyygh3bdYmVtkQPCuhhMcxRYRr",
  "key40": "5WWZBBvjBreaZapfdAMthh4ug2xBb5QQDghFh38vS6RscLR68FcAUCh24FnC7UkpqYA6UrPtd2myMk2D1gVkwnWg",
  "key41": "2aKwkp8x91tfKEDNBkKjRpBUzyBna1hRTbu69WUHE7iJZWmPXm9zWCd7ZQBtMWNGvbNViFLdkMGU7ss6x2URMHWy",
  "key42": "2cTvH3ctQJQxBN1rf1JMBczx2x3HG2CM48dHXvanT7rg4dUAsbYMkupen5wU9Bj8zwQQkH2WdUyJ8Bj1NsERrjQ4",
  "key43": "hC4uFH2W4TmjRi8uS4GSh4tjqgMVtCngp7MMUKEmdvUiRZ9niqR3QZNN2x3YQ2BmRcECwJS2AV7a7utFkrqcaqg"
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
