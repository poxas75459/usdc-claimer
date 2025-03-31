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
    "3DJACFKX9znjQYNxmke4sduywQJUKPono2P6P6jHH4aY61rSLV24MAuSdpW2rENoC5v8dZu3GduFdCtzMdB3EM1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ViDt1Y6RAf86h82k7JURTLDb1ZsBHfsdjGHrzusmYuwzt2PMRsbLUBcNdCawwKZfYX4W9TZNvAbKJXKdnqBu5P3",
  "key1": "4sKYZMFgPnJRVPLG32Gini5SgL5rxx5J3yBv1H5kyXxiyJdeT75VZvKK8RQ7qM6uuSb6DHbHvU5o5VKHaKUT68bh",
  "key2": "4JU7BFY17QBZnbmykKPZ65caurSuUyGiBobV2RtxP2nFyWAeMK4ov4H9kXHJEbWb22kMpFJ5eXeKHy2BoqAFZUdB",
  "key3": "LY9duegnFEfovzWftpF8ffVDStNfz1VtjnzHziBu7gYDXUz8WoiHe3jsHiAhofuio43edBcb3Paj2VeS813DmQt",
  "key4": "44QTcn3Q3ASJSnzdZordp9fu7gErm7EnibgjSgGD8s7ymyUXY63pb1zWbDZVXbTvZW1UtYabAE6zGPD1iQj1hCaU",
  "key5": "26sSVQAcoQngkjLJ78c1PgMeZSBt5Tb3SyePofRzFT3qn1repKUianf8ncbDjA5za52B8RqPCaSiLwBoGcyRuK1z",
  "key6": "5zt8LZoySUrb7Fxmg3mCVWZ5ZiDTNmWKYBcAua5HHhhFYtrhRXbVqzX6kr97YxtFTrt4mtRFX2Hg7BUr8qkiAxpx",
  "key7": "3d1u3kuavgX9tXBTr5TUi5L6A9KuBsvk87YxixjtyS4v6GVdn9hFFtik8o9duA48tfkpEKbLzhp5RahVerHdSV1G",
  "key8": "5GnapA94uizFpkdj7fGsdycoVLgw4eeJkKxn7SGNXcwJwGBK4ZomRDEbs6Ri9YiBWcW4bpEFvNL8GH8hrzeoiPxa",
  "key9": "4S4jg5aXXUqztEuS8fnMZCojNpedXiJJaQMiLMt5wPnr54szNvDFzEcTMy1VwpEYrdQcPnn119JHoqVnkgrqF8Sk",
  "key10": "iHHm1pks2L9q2dBrovniA5PkqctjS5GMdTv2EPHUMgoPnbiin2zYF6jL7RbZSfAAg1EkDndGTuvsiQzHkiVhPEi",
  "key11": "4sAaDF4Y7L8pzNPCodHyL4XN4LgcWc3kH9QHPHiux2b5QGJaSzFoJA9bARTzVEFgk7nLVFN2VSprjQcUAoCcdUJe",
  "key12": "3M4QDMUPaUVAKgVDww8Jeah3fArSpdJGyAZQG2axLqHqSaNXA7m2CZHcqT9d4bdGVjEDjxQmxu5eibUYdVkAN1Se",
  "key13": "3TPTC9hALY5yNwUHCYyXEfJkBwv4S4deTSsBvipUdyC6AL3a1CpXqRSMKUtg3fYKUW7QeUjiteAVv9PDQNc5CsWK",
  "key14": "49KkS8MsWVEGe8u9e99PWbWdcRB95QgGnA2qqYsxvdBPngtGybfmEfc6fyqdcpHq7tREA29XQwMRZ9RDTLLWWkXt",
  "key15": "45dER6X9fx8WUp2yHwWxxRjn61oHRpcrKDxteYQd5bNAggM75fBWqG97YjYBfxP2areCAs9geLUjVtdTWXyDMZGK",
  "key16": "59jg6FUVRxDKXXuMPoYspRWwa8bDzhuy2sikSGuCgeqZJWcUKsDAh71YUiBPGbHNgWjbxQw3H5Frxt38urTwKe9n",
  "key17": "2525BWvNm5URFnCce2Vns5HVRzBBGk5KaeeP575EhucbMbCkPScu5DDXh21oVoGT4uMaQnTRM67nawyH8i87LDrG",
  "key18": "4HqqvPr17Ke1WyQd38DsdRRpPuLVhkNwZWcjx9kixuJvyckqFs511D4KGD2qFMbVFn9b8dWzDNMQLL96fhm5QzxW",
  "key19": "5wVZnJpUKMhRMcxUs72Lwf6kpLumE2yJqG65VD1wjBxLARSAkpUBGgSQJpM8yczLHRtLK2pU3oXKgTN1NFv3kRCm",
  "key20": "4oFgcQzLLF6473TsrXHQRMoBJZ2HwRsDZtPNnF2BXnXAqFHMC2rAeqdD7uUnf2DBsHgc955J8x1EREd6ufBxgiX6",
  "key21": "45QJGpENGbB1NgHVaKxeqzv9VD56iMd2R489LQPP6bxtQazN1DdGNuNSjWRcTAVfTkPjViNz9WPWBLqaj7Wi1idP",
  "key22": "w225EusnxM2CnDrthLQMNwXBEXAQeN4bK2cKzGKaJ37NnMCh9sTm9eTNSvvQX6idiQ7NFL49bc2UM7VRaXndEMS",
  "key23": "4HF1a9HwFpwPamwupcduvvzW6BGGvZ8k8iVQEi5SJ4z7qd5wmi8mayU5v7b7Es4BrnU5uWtwJWrCmYpC8NTYGYtc",
  "key24": "62bsrAvj7pEDxJP3jugAXQVfqXKqvnUACcBfgFtBJcE3Zc9csF29y31wNMvGUMUUzVAaoiUep6MedDfwLr5U6qJR",
  "key25": "2ef1cweD2zhe7eFDQ9pdq2fJS3YTKr4ZxNFRceCsfbpHxWibro51N6TbWRyApBMbr1ZuM8aUj1phPLooNC1PKYGy",
  "key26": "5Ch3MuKKgEfewPwjqEQW3VTf2GVmgfyfhVgeYJhEi1b3SBCQ64bH6oohXGA8mMVD9u4xKrDhh6g3SdmPTusxvjvV",
  "key27": "2AXh4kviZRQEDAKQ1zK98vNkYvvN41dxPx941k59KcoTd9zxersMGLLmjeamYhfCMK5KqQUsYcSz4gd38CwuzScf",
  "key28": "4zQm8ZR3j3QAG3tqd2SAhQRT7evdkgVjURVQEKYx3Yx62vQDqdNXkTjAfCAv6rruoft1yP5ZhDAfMdkevGhxBkjA",
  "key29": "5cVZLM46Wba1sk6gUWKSDcY4YcayQSHFqNd9HPEgd8bnHbLcTrcW1xexvgTGUp9XTN5dUej9CfkmctNSjUvpFZ2D",
  "key30": "4ip89pxAtCtr92soXpaHwLPPLNq8U7LrQhTkui1TaYQTDuZzo2w1WbCqa7ZErBertDS4y2C7bLGuxNk9rAHUozmZ",
  "key31": "4DTsYd9pXYKX3iqTdZtR16c5eBmA7d9obtp2Jd2fnVCw9eo4RjkHPapoEbRj1nbfTMWZhXEnqZ1mE8VLMLFtk3Vx",
  "key32": "3HKXadschhcpAHBTNggKUtZnee5nnjDKDSGM9TXCZ535kjVcKZwYuRvS4bXnato4t4XWXWjdpDFjFDVQaHc6SHPr",
  "key33": "5GHeJ5xyrHyNVMswRRLENckPiXwdR3judPfib57DCWq1Ezsm6PB1bqUu65YQ72LrDeJQdJBwDeqmySPFMLwJ9i2R",
  "key34": "CxP2AZ5osg1efLgMqD3r1jHbuF69XcMh5YCni7FN5PU9yLtmgUhZ2pmgqqWxTHTg9Ubt3kHG1FcgztebAkAV6Mn",
  "key35": "46M8U986HUrfNt7kaGSfZ9Fw4BLLtC5jzu4iXZ9LPcyVfswGKG8Z98MFu81MXicgwQQdPQEQUwcgAfbh7nG68CsB",
  "key36": "8Mes4RAod6wSFNqT7DETxdJp31WC2dkkAG9eFeUf4FLmfktYCUYqL9aW788fpjmmY11314tZgn5Uti7AyjSR35S",
  "key37": "39YBYM1BiKfqFnDYEofx8ad22fpaZTJ2mgPmpXMbak69jSiNU82jyAS9kzRFxdDD5yvEVR2WBt5EfDwP1QPhEEi8",
  "key38": "2mjNtWnH81oNoUuUZ99aPTKXeWTbQUfzNq1zTjUEBuPC6ycvzwNdrPwiyoDEazDVzWndnk7jvVCih6dPjbEA89aV",
  "key39": "2PpMeo99mScsR2Zw5rXLJ7vLwMbcH18BaufMtLPZhfxRiuUSbWx2wg7mFwgwLSVJTskPDbV72Xfk5fyatDogPm9b",
  "key40": "rwF9A1DNGDuyKQccpqtintMEsE9ZMhm7kzcPQxvcKKcjith9x6cdJ89K4fAhhgQ6jCL1iQFC2E39F79MnZQJcsy",
  "key41": "28ZmQkg3DTJVPWvyKLrgupWzDZycEzVHxEMi5MmbkAzHVNATCcPdkb26L2pFjSaZfaLZZ3RecvgV8xdGywmCrNUv",
  "key42": "638etrcgad8vj3ei5vqCvN8jbtSX4i6Qkj8SUi3fsEpnYktvGMnqUPiDiAgjrNQiSMMUTsCxGnfgSwLGQEFkH7Sa",
  "key43": "3UWstSTwJmzuov2j9TmRDKJYah9WyiDSEumRcXJ3x24j76w7T1reDjTuSCSQzhqLYYksPp7oPr7ibDuEmdWoMT55",
  "key44": "5oyoPL1XAgxoaiu5gcE2ondYib7ZzM6A1zgZQKNB8Tzx1uuERHBXatT328GhmziDyGx9BemZAt95YZ4QooTyrBQ",
  "key45": "2chKtG7aXqkQ1Mk6A1UQKbQ6gupJDHKLWWrunA6WQWok3prSfpgW7rX4Ypav3a3vZxReabgckSiEBwzt5jh2TikW",
  "key46": "45nrRmMvd8st7SveRiAZ2UoCbUu49iGDnkztQAYv4oo1q3V6utcDZr6WppTBCLtbejk66Q82uiDuQbFEu82hh3Wk"
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
