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
    "SiQqtarpu1dqge2uZYYV1Sz3nKnyWsu8FXDUZavhZ18v5krE4d2a4wGRa4YFdiWEZVrk3nTdDEEm4j8CRVi7squ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81jcDiswJrYN5BtJbwHoFstDFra7nFpxgGsXzw21PRxo1U7J3rfFaiFE3Fm3HsZaaEeSyMSzUGJSZ1dL8qAVk6G",
  "key1": "NoheUVQyHtztx3GmuV8DoigZMXvUMATFJQCNBK5v3QzH1spnkNFEDyUKz3umVAupZtaigksgpSYLJf9ZmmeN2yE",
  "key2": "5wzXFP6V23YSRjtQ21UPQEuyaQTLd5XVJzmt4AXWAfVB8HsPFJZ5PEMTX2CizJAy4HV7j6de9Eh1Ts2oNixgnThT",
  "key3": "4MTFothF9Sq75hQndfV71wWyV5Zcf6B1v7hg9gzDgZwQoV1iFaCuZJ1PqZYxsT89kTosYaHUZ1Kd3vkoiRoCVipv",
  "key4": "5qDcEY1cxSL53jEyQeEusfAHQT7huFpKRL1fqHU9XEizzPQcTS2pN3qtq4QeSPRWPRydQ6Q5zLvo3azXBFVfxfDd",
  "key5": "5y86mqvrjf5BPEBqWFgbAqETawmKH5Dbuacp3bUmjJkVPMZrXiAquDiWjG5JLZm2mexBHY8sypcAqbPJxz5DupH1",
  "key6": "2iy23u2Ec9rQZ8jf172Ky8HoSjXR3fZfnMGLfrFtnQPvFwTrDx5jR5pDgJ2CbEcXzfBasJQxACjYoJQ7piAm4JhC",
  "key7": "3ewN8fot9aPvvYV8CKiBXD6MztxdfrSxT3u311bWNECLLVGvUgVPUn2C8vxSw1SqPvwZpk2ZM16DpmfVQBN5m59s",
  "key8": "5vYPUmWAgQ7Rd87QMtzm3sY9KxAuAxLdzTZ9i1PR3hBAmSABaA1xUFEHkGBJttFJFMjuprTDWnXBRVoy2mMAgGq1",
  "key9": "3EAp7u1vJJAhvUzER1fWGLLTaR1s3kW34ej1gnN8PJffhBg2NC7U3bhNX5mBj36AHpSvpmBZvHTVUiB2DTowmu9o",
  "key10": "4b5654WsKFdzsTTsJnDcoqjXa6dLsExwuQZA73tpiF1D7tMGQyxS4ii4ns5EFKkXiREk1nP5wYQ84KCxdVzqs9ge",
  "key11": "2yS5wfuYMwyQzd3tKjR9B3Mut2CA1F2t6dC3RiBSDTaJHXv2TSKr1ovVACScGR3ZDGC3SYKTvabHGuUnrx4Xatww",
  "key12": "2Jy9R9yUbjEeYZNcTV9XfxSDvZVSYFrE8SaQiGxfGMp2xKYzTA5AbzwSoSLpdpvQQfC5aLcVAmmKQHCFZiMsLXJe",
  "key13": "5Jndp8CTBCPKPHzURXqynWACdX6TjaB46ewXmbhoXjXpf8a1FSYanAGJc9qMwMLtiaXr9ukxuZqQwhLncuvsVBcv",
  "key14": "D1iV2i1NGayz8Q5ByHrzYLharR7HeQxHviVyxqc9HCk6PGhn21EHo1DZ4RWSsKZi6zNEsHYo321zv8fsVTwRq9p",
  "key15": "ngF3qFFvd61rNg6gvPGSpX1s61NKjGqbcDT7wBYHZTesxGhBtg6PUkj3NgaDDQBbGvPmhBEB2hVW5oNNyXx3YsW",
  "key16": "4vc5CKKTkwC8M3bLMACFJNvwBzx2gninK3TTb1jtkAXB7wJxykfZHyashsChdeoFVihG569hxK9pKkY9x6SM9xPn",
  "key17": "31tNcrinKsr7hHewJa51juYEbXquUoinpFpG4Q4ye5cSnLzk1QpXSMgadihJXo88scQfqChrg68gEdQCP2gaviGj",
  "key18": "421uiWMxtzEGMANuPRHP1KwTRGa4Yp1tTGWFu5Y8xTKueCbsW9geoj8ZggFiFTUMa7djY6HuH1z5GTfWv7nCfKCf",
  "key19": "4CvXCpNnoj8FWnHA8PnaEB5kU1Xmkk8CHeKj965rHk972nzD2zt8VjMQi1iitvDmU7Yt2DRu123D5Fd4Pkjp7RK9",
  "key20": "5BgX81jvaRRoi7ooTtT87DXvRHGq36pQb5fHeCb56wTU1aB3u3g9ePcHbYeNpW58stNYVEGaaNdCwVAm4txhhaxN",
  "key21": "2GWsrWpgkwXBzVz997HzXVnn5m5Ri96cPsBCiUNrUECnF2hW8fGZWhyWrenXmsJdBohiPnFDX4EyGBU1yAKpLBmE",
  "key22": "Uxoz8whUf1zsLM5R3fJ5AGmUeogewxzN6hFba1MYo8VfPmg9B7td9mq9NbdzBTbAKDL2QBx2z8HfXRTB7Q1fRfK",
  "key23": "iD2CvoQC1VHE6z9MoNieDH8PYLZJ6JJB7dCztUkQsufKaN9PprbdcVM5t7Sxagky18n5N1yFayxbvSXKBxqv4dK",
  "key24": "4ewqXfniXpMi4C9FUfcbjoBhgdWoy9fk4JdJcVwDH9SKjdrP3qwYR3YLfExcxSgZYYg7VDmCdeTH2irxLjCYgSnZ",
  "key25": "PpGD3CW8Ay8ostBMXcZ61k8U5wbpqP59gvBegVA9tQMSWeXAgoqJAi7T2bpUcFfM4wujJ7PD9XTNHwubXPvcpMV",
  "key26": "2dcokC5qVgS3QAHCWsrLxtrDVb5CKpuZggtDt8j1uru5igP8zfG3iUuXNFz2E6NdGkUHgLnk5LemhHoaY3uFjeqF",
  "key27": "4qjpTDAUwrRDuXhchjrxJv5sQCTf2q2o4kqpwfoHDSZNrzggNtv1cFQ3m6sBbZJJgVy7KCdh6Mr32ZfBhHYoiU3Q",
  "key28": "5UwuRBthHAL1ueuj3HDwJU6y1awYJcF3mzwiXQi4K4emGhfKKPLyZkkmQKQxh8VAurfiXM66gLp9ffDvB3YKXAnb",
  "key29": "NJsiPvCZoTLzr7xv6BAVnaRCF9x82J2EuMgUmHJaW9PrKrqf6TzoeKj5gSpazUfPEUGexvspznVSjbJtywNxFfh",
  "key30": "4UeHG7fyYW8mp7Lp1LurmXWBDavcx2SZAr4qZtb7ypG9b4iriYDiD3kebsYPhHvKNtQxSzKjnUXhP6fe9JAaTCYc",
  "key31": "67cb9iRRuqRQgH1rsqDhPXPVgx1j1P16vNJYBEjbSNrhGYKNisw1U5SgiBNXyWU5RHWhGRingDSDwyToPWWmUBxe",
  "key32": "5tAi9tfWqM64uchTmPwXmsKvPr1e7KNoqEcEU6fuR7cJ7sN2p4dwsfM23HxyZWpndTXQMVXvZxACTeDhQecXgdGf",
  "key33": "5umAR5mhxQP9U5RgNkZry2KFmkPpxRYXZQ8peuv4JpG2FnwM7K2gpuS2kH1JH6hy5TrFy18kt11vcPCoi3uAVeAe",
  "key34": "MDcrm11wgBkNhtT1Za2RJYvQFmR4w6TJAUbd4eAR2mXVKMc87jtUFGZ2Y1uKndunCuXenYFpBZCcLjMKUnLMcgA",
  "key35": "Qn2rio2R2J5i5vmANmdRPaNp6kiMcKV7iCepxZ7d3ZSPHMoMjG64yPNgZfY6mXJhtpNa6NczryjbVJh57KvV3qR",
  "key36": "2vXyWA39wiLGADuJFCZPdgDjjQ7k1gZcqFVdVr5VzgTpUQURYqZqj8JNiTCsM26pR3FqSTzDDAGkN4LJKKP5qvU9",
  "key37": "SXY5mX55n4DnmfDAoMZoWmbpqeCpFxW6npbPzYMeZvPHNPF75s6PtDu41m1tgDrFDonKXVQ8qYbujTCiyLWuyw1",
  "key38": "5vkKySHiik4mqrqVJN1nm37tqjiYLx8mqXhXb4UqoYfQmjWmzQwGdBm3KqRcWH1x91r3ZAanf69mqTtfJ6zaNupG",
  "key39": "3rkT4TGPs5iG9VXB8qURksoRnmzgFo1VqJsaTWKcgHiLe9NFp4wiMpsXwQ4pVSfKuRbFd86tymzRTWdWBAudN1RZ",
  "key40": "5CZDAwGHxB7taPhbrEvy65uTrGf3dHfqSqGujdX5MpBavgr1Fqt144pMMZUcV4oAMBMShdUZSABqsuKxCCE72eHM",
  "key41": "3BpwVu1iHGCeoxg9sEu42AnWaHcNU8M1fCaR7zNGNeJqeKaX8WaeLLFF8aR3HtGHowtstDXQjKdvAQXuxwGxQoFR"
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
