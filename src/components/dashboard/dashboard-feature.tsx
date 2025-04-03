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
    "5ujU6avS1kLS6s5iuy7eKyvYiqc6BJtJAbPgGsZoNTHavwV91oCurD8hP9oHSatYj9SgEedNoWxRK3WC2knp816H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTNyp6oCiLUFxW7wGCsabe1cK7b3FaiYqPgBauQJTFk3M1smsSrv18hTYxciq7ChJoxcHcHmyPg6DwZYv6JVgfE",
  "key1": "3AGQkmLyJNVEbPPdT5gSR15mRMucDr4189C7DEGmm2oFfCntdKSLVZJmJH5pgg8BqUiTHBPKh4MTsoUTULc2p61B",
  "key2": "2kiwHFhCE2xvPX72LWzhGZcoNWM769ZUBuS3Tn8T1CoEpuDYw9iMWSEaMSKAuKCwhd8Pw75geH69anE1XfLFdNY6",
  "key3": "iRo88jPkcJGWFYTrkD5vBQiQ4Dda8crn8qmXvc24JDjWtQHuC77SGTDztLkXDmJjs7RXyUupkm3os9XmCSWL8MQ",
  "key4": "2Vsy2KmBwBTwPHwzRLga9u5RUbafmrKQesBUzEAEEBx85WCR486fZ1PF19s3a3ZusWzWkHaFuP94kRP7fUxJ9QAu",
  "key5": "5J4J2Jpz3MVTZgHzdmWSrV9iHNWN3tpCN5PePCT7HB2hQaqsBZdhK6NWxY1WpB47tEdiZXgqCDMJfMWutwxtVkEU",
  "key6": "3oqpGceRGfbitkNKwPBdEBcaVsbeKR4UR2MA7pM29wBSt3t1yduVDax8oUaJ6Uo8MLm7rarZAbT96Yh8YS3paci6",
  "key7": "3JB9Fb1RvMiggwSRWs5gy27VY5EvZtr3bL29HRMLYtCSjgZGU7dNi5b2c7VK44KNaiGxV45h7y7EBAhT9Hxs6tiz",
  "key8": "3jwcR6vHmNraYeL1fydy6upXgrP9BxhrnfdvTf5JTvYFoaG7bUcTqr9Shf4zUDGt38qSAwJpWyGXRmnUDSjtjE3Q",
  "key9": "58FfLMBT9nHTmMeowALyaon4g7siUVTeyP53ouL13LuryJ9839VmSUcWaMNYfwTWbzh7ksA8eQjtCrhBBYdrZMoW",
  "key10": "M7xPb466AUREH8n68FdFYpGfu6Ke7igVxb7d3wcMgKwXxCDKMmvB5ZRYvBYjUX5TmKknbKMx295c6E6FfxBGRhN",
  "key11": "5Qn7atALbR3QHeiTvALJWnTnwsVAY3AigZXRqEE1xeufHoT1MxrDPjuTYgwz5HAHgqxBaGELWFdJ2tRLgE93ubU4",
  "key12": "2dP8cmV6UwD4hnmSbctpx9ojpSzVC6G8mze4qC5aqKDuYf4PKizD8ZDt97NqWBRZmVvZ4jjT8Kw8ioZQZrqah92a",
  "key13": "3DMwCT9MFbh2uyM5RiFTiKM8a9o8MrTh4KUFs6Mj6ibaL54vpGqLQj8fSm1Q9BjUprQ1TBqS4YTN691KFT3TMjx8",
  "key14": "2adS63dchrw6fZfN1awKJcL7UbTX32PpsdcvnxYUN1MEwRJ7VB7fA2XG5DazmPWmdsCYmBXX6jPirzXTvdqPVpDL",
  "key15": "3wYwxj2EwuyFZS6hBGMuskPEjoA785mK9UrRUtUJ9k4MSxpuse2NvRNQ36sqzLkLYQTTevCTC82DPP1FSo3MM3vw",
  "key16": "53gWVu7kAafyikmfLCZPtTbfsz1rt9J984ZXtvEp7GJ7zdAAt27FK4S4Xkj93ai99S1PUx179MJhSmMNcJhDVveo",
  "key17": "5KSRkpzVbmXewJhA48m3nBh7zNEdFAUCpazc9bgpr92iGkRLf5odfy81fSAohSSTGLBWXe2GYppefiM5g45Xm9BL",
  "key18": "5ophYAUTkrYUfvYguT91EFrYutRTwY1gszZxNs7uNQyPZmTnVYAR2qjdgjFZ8exYm1qXNVSQRr4maTB3HntSvKxm",
  "key19": "37azowT6cud4vAk5JSnxmd6ngTvEUQogthScU1YMX7EFqnbKCZ59iPU9Km3Bte4msXnHhKb8GsNicPjkEZPkDmda",
  "key20": "4opcg7wWZNtdV5rG1SRroHg3YTxqj2auJ6wrHiYMfxGHRXE93XSC2kANQPXRSwXJUunE4SaH7EDD4Qeuu84665qU",
  "key21": "4h8E3x2Zpd2TD7gb1ACsuSGZyBatqev3DwoisfqdfsSu4ugzw6fRmvk9nChwm88EwqZWx1f8gizekw39yKwcCvfM",
  "key22": "4xA7HM7ENFE6cDx45z8SBRbjLhFXjU62F3mqf3hK6DSi8qyMQnSGfvFE6ajG4FAKm2mpXUCtX4Hy9AWHka5hmDNS",
  "key23": "5MZyNvNFT728yizaHSYjFN186vSNPSUcGSF1Ugb5AbBN3iuGzBygQKzEcVLXy4phBUWWL8Yg2HDLkUauG2Lmf3dU",
  "key24": "2hnY332nib61vabKCoExML5gQ8k9zGunNqyUftCjtWSW3y7cXVQYEdzWiRGuh9LNbq6Kv53BARxDPFAkZtZRXefH",
  "key25": "5icM41XrSYDFaJqjZHWNbpNfofe1Wih5cwLtECzw17W2i9NS5cMm3me6EZkZFRLaFw1nnV64ANPFqWrsapyrBjQk",
  "key26": "2xHtpRh9pARSm7bAcY7T2Zuz9DT7pBxap1f3fBkcpDPLzZNFnPz9YvjJEWEo6Hwy9SAwUkzg14w87ecAShKJXYyj",
  "key27": "9uCWAFTAZJHjf9Nm8svTVxQBR4Tx1Hezqi3j38WuikE8DR1Jbyu8oeSVA6YvgWborcRDDQ8WH1qcLFg2qeTyVwK",
  "key28": "4chA3EHSSqRfh47xvpkCnwcHAr4ooJ6uDEXKz9JbFgvZTP2UTyhuWXYqMbGWH1eBHSEagaRMNnTGBqhHsHBzBQkC",
  "key29": "3GbHTVmJ4ym8mAogE3BMmCigB2UFZv4HMDC7tdNPoqLgrT9dStBMQ1bE1hUoWGvf2jMz5uMHSyerKN6xmWUyb6K7",
  "key30": "3y4B73aJwAqz7d7bWLBR9xFgbvahuDoCeVhFobtg3pvReo7MEx6gztjxbkoztspSXK3x1WiB6R2q1eHKRvG8pwuX",
  "key31": "621JeHGcNotrJR6X54jR9sZdPyREsnziwuudhxP1f65HVoyJum8kEPRCk9VtVP2V73o1wBE9HmBiUTJF3NsTaPr7",
  "key32": "nes8Pu6AF9HqVPvJPgHDEnhtCTm23ULepFMSZRobRkZVxe9F4Vq8Js5b4miSZz9G8ocfBk6eZoyC6ccByN8viBb",
  "key33": "5stfT97PmphL47NbAkGcYch3UFN4iG5U5zajMtQmFRUYnKyfTi2zZmTREDnJgWw9m5AzuHySY7GLNbjDcuqfdzZc",
  "key34": "3xZewjt5nTh1s71Lp3g3kyucGB9RnTboxrPnm8uc6DWaDVWTdCAXTD2Cxg7KETtnervX6jRvTZgyoUHKgtaGzdFV",
  "key35": "4jkcXMEgWC4YPK16EsU7jac9SJPoRRT6pqqBzN912GZ5Q4MvNvYfemZtUKfcm1EoRZfBQbuCzW2cJkBDn9GBfesT",
  "key36": "3g5cgvZc1ALZQS4ugRPJPhsHTc36mDsUneMWNRbtrzd3xCHAVAujAkHaxVD3AQfzH1dcuHV7h5XLDdXHciLXqzWE",
  "key37": "KDxEfiHTDKXULbtHoigNq7d7pPqKQtqSUsm5ooeuTzbkCaCyqC9WwKgxfoBjpdc8zLbYeCm78QSdGRRqi7ooApa",
  "key38": "5KVTHZMsxQSD4Dis8X4DQfSKrim4eRhdcsnn3th38oUUkenLWaNZbfD19zEPhoqYTNWhv4o2u8uWpKPR3TRtLX5e",
  "key39": "3Wh5AwxNbRKMkfdo9yxtnvrH9sRFxoewVdMs5D1Q73YaUkaVNydPkyu7d65CS8eWTaMj1dkHWBfnquPs5otH4ZyQ",
  "key40": "4DRtV81sNaSu7QZDKgwHXygM3Mdetwvi88MV9yi2kyBnCu9PBgzUsp8PZBMhcgHVvrTWcsMB9PhFVcAc8uHHSgfG",
  "key41": "3zszkfaanpK1uptfVqztANBXdDxreWdmxwMyjhukW5cfjFCLPrPptvGHrdisbtQfJMZaKm3vxyCG9RoeTssox6ti",
  "key42": "3XRaPA58pE9ygzjFH4QrSSghWZs33URVrWzgsFgn47VaJk7KhkTcNER1yD1n8yShZdMgHXZo2RgfATXnDEswY5n7",
  "key43": "dscW8ihjqDG976jjCoexa95DzmEir67b56J2heChyXmqYi2Bsd6h2sWuYeS9R9zweG7PK7NJEx44tsN5NxYv7xf",
  "key44": "3aa1GtpqWPQU7XSxUmYiDzpsvCTLHUEfACZdr9cRp3KBHbojDzkPWPfeM7wpQf1ve6wvLuwUQevVDHAuMYXhwkBy",
  "key45": "Y5awjjzDkNrN1ApChGz1UsqVwxYkDRJ2ZtT8qwdNtZhenx7znNCBkbr1dre1u9Kjw9ojb953yAdvyLY4xtpHZpg",
  "key46": "mWZnoTXYJnfRi3bRcrnxvMsHcHLWRSi3RDF6FiwmvxvDMnMVP7mT1atobUYwifFEaWx9twyCZaE7DpH4yJ3eRFH"
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
