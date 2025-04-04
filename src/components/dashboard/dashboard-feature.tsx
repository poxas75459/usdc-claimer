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
    "5zAMLsDeAsJ1UCPtmGBYsy6UkdKdQyRVn3duKVBuggUKa8zmHZ1uVhqJEHcVHtKVVDPVJBBmXPj33nMz8KMmc3fQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24b8AzzhUwbXKpi4ohwnEennwhNoot5DttndJXzvGtuD1GQkSvF7FMth5Q4aq76JCFxmW6HyYYGhhKk9E1xo8S5m",
  "key1": "2YHPLyqAP9GaLQr2PQWWqKF833vP3cXCqPEaTHg6XGivDzMvDMahesvvosMNkGxjDprQE28pAQQaJiZxeYYuX5oK",
  "key2": "2Pn4rUm9mumSoA5f4mfwCiKSMy3LfCodVyU77qEVs2CFQz73Sy2nkkJErEDnpW6iY8meujyYPgWnGr7eoiVhRyi1",
  "key3": "45ZhGTLCfRpQXByFxT9oU2AHW9rKapudXZ1Xf6DdEnpQxVhCXLpacVMTaypQQn3Y6XZvechWDdGRY3r7CMC17xK",
  "key4": "3tZpbtGUJysDsqCDS8JDNcmPtAqicw7pH6gzkA93r8wHai7tu6bsp1FHqJTmfrKc7beSVFC6UaLNcdV61o9o4vAS",
  "key5": "3SDwvcaCF6j2tDmU5vxh9B7R5HQSgtpenLQGribTZt9i3muv2NgcrJcFajzTuEBZx7FXcmVU4itPF17XJ5r8rUVX",
  "key6": "2x1VxNED25oiMwRTaobeahU5pQXKHkhVEu5eqbVMgFj8KinfTVnQETv7vZPyLPBH3sXmBeQ17fjBbpjmLAePSrZi",
  "key7": "23vffPp8HWudAPNkPEz5qnBjKgoA2eFApUs2YNrFLeGdhtRVDh1qFxwNgE3hVjF35QGJcic8XxdXGDRuyZ2Gh11g",
  "key8": "3Mp4hgwmzgZuTJQ9z2PHiE8xPYzBEZgEtpum2dLNA4foVAJQfkxxwEp4GN8dxne3PYmicuk88Rg7MZN7bzvMCPdz",
  "key9": "69qq5Tf6aJEZ3LKUfoU5xAEgyi1Bjn1hBXaxUYgkMpnbjAhw8w5cSkZnenLs93CrmohwJK4sDRrxuAjTFRSCvWa",
  "key10": "2tmWa1qgT9WytfUSTmgdn8K1PLsNoPL71Fj9Gc8u6CJRdeQdHHi2Zmbxt7QKTtUoxBvMjpFKuogeKdUYfhPyMmXc",
  "key11": "352zqJ7JZx8pDhKnt2Gh1vsjrMHmPVaBTEbkE6VySHSpAk6poAJL5LLVQkRVVa3rdGxw3g3QhZ9mG3fMrZwA1LMf",
  "key12": "5prLXbZ2YHGsnG64sAHtb11fW3fDwWSfaeSdZ2ooraaE9YaLBVmKYXskniqZj4QKrUo9SJMqD7e4ZtsPvRJc5N69",
  "key13": "2qkePtsTSvJbfTfV8r2yCesPqWzN5tt4vGg8SmuMQJMfU2Gv5up2SfBrfX2Zc6FCKTLyK5m2AG4CW5J5icrYvw9z",
  "key14": "5D6QRdLeZXuYhfHNNwdGSdKLJaAL2dtMeWyoJBf1PhZimUVpCtVL9tASz6pNxxSkoAPULt2jEKngHbhrZKCgofvS",
  "key15": "CvEMnUparSn6GzVFz7FDAvCwd5v8cfGqWWnRws7s8aEYeN81noA3wtKiF3urRWdqkoo6rewwFPKCZyStZAAy1uH",
  "key16": "2aAHLBRvqopYXBebGBrSAPATLfyqumuvma95d1ZznB2PHqdAJZbexuKmUKR1twimjC3QhahqDoJxPK84QTBpW3R8",
  "key17": "5vhgMSzDvVEzjYwLaz4Z6umDx7ho6SXwdhq2sya72Uvac2VbHMLcgaUhue7BK3NRpvTHkXqHpKEUeVEMmXuSsU4T",
  "key18": "3ogZuXWU6FJzbBaVsDm1ff7Nj6aMVqJMDpxvXLysTpkAd7emkGmYHKz7S81ZZrsRXpkDvsKkzWUQe352S7TZsAU4",
  "key19": "2t3GWvWmN7T813NXZ5zSxVp7o6XnvMRvtABEdJiFj752Wz6WtVU5qsD7Yufu7cuSb2s5Kf6et6rooXAR2cKBPApV",
  "key20": "3PkDhqotxcoGcYKhen2buJeQaTQHYFzU2XRPYDViKhHTT7p7wKdkRXfG2BsGbDt5nCj5DdoU6d64jneFiUXq5swL",
  "key21": "4YLrjGBQSVFwnAPwUNuJxHUkBENdXkNFC1ZFLiYaqEXjsc8aydctVjsXPyLHrbE4wyiSLEEkgc9Mj6rDfhBQXhLR",
  "key22": "4gDSs4Dpe8e6DjnpyoVqLrd5cNVXbHbwE783LnKzFFA5mThKJ2rDyMasCSasns3ciCd9TwKb9mJkD7iXgWoePa4t",
  "key23": "3nGNFvDXAELZZALRof6U5LBk7XKJuTYxaNNgawqdcyfJv66fdkHzMkrbzzz2xiPHwJHLsQBNJervZxH6MER74bVb",
  "key24": "4NHCBwfyzsJSYkqnR55o1YLuNn1GmrKtZVzA6nQZnDhS9AfjermPqGkBSUoRzoBuVDTWpEjwX7y8z1UFz6xhsdoU",
  "key25": "2CphFDFGganDzr18M63p69h25yKCy8bKyAipAWNqpkV6JicraVTKTbupXraLWkdXrfwxCXbMCKKAMRQjebVxAWG1",
  "key26": "crpVZCTAPDcg97m1CB8RwQnVfy2cNFyM1XKQ4BXM4cEALqc7AbbakR8UMv7pRkBAd2DUMrUgouSvytN6PUuKK9M",
  "key27": "4pCyWQeATwZtUsCJNMEGLbeoWebbaeFP48BT8N5oK198WL3GXEC7diVGhywH6MbDLKrwKKVShAwF1i7xFyJFUrG1",
  "key28": "4BuYy1BjLZRj3RQjpA28GPc3jG864yeDH9eTF6PmfaQs7TTiDqBcXou9i97oeSNK2qDV9zbyZvpM2Pm9WWtM2Uaf",
  "key29": "2EBmUaDSxSCC1zgDKJ2HcLfCqs5WHFWPe1yHvdGxaAp9yvRNAQfpfzaukd3mupLqcmfGh1vUf5o8PBpK78CYLXM3",
  "key30": "3sf9HhKNW392gvFePQyCHaEp6itXjiy3XQVSjRt7Yc4hUAZYg3Q9J2sPfUFgvoTc4Bgonhfijh4YMW4tsLkeNaGu",
  "key31": "2XKr4jSZrksBhP47L9DY2vn3kW7JrsBtshkmapAQA5jUXU98FTvV8KbhWE2LiiWYcZURGVoeVkMDZJsknEVR4619",
  "key32": "5knSu8tZkjR6n6hCpqaMsJrwM3Y86k6eaj6VKxGCER2Upo3pAGoPaneaUUT2y1ef1no8twrY1F8nmoEjDbK3BRYY",
  "key33": "3Ue2PtiBFPnrnebtQz9FcJkyHoZQ9Ujua8Na6PaB4jZxT9JagujQkwPkG4fz8cPzybSGPyLJTuAKKk6tyTRsgoQ4",
  "key34": "PXip8Ln35GB8jWu3F7Lya4NkgrvU3rRF2d1cpqywqUrZigXL7rdPoQbVqxXAMBhCphUPfLK2gfBrCGV8N18xjXr",
  "key35": "4S7VJn6v9JQLmQJivbbqbdMXSLtha69wyBBc5R1652KTQjG4X93HXzazzFNJzb1gAVZRq7z7RDS1iRs4CbwuFMkj",
  "key36": "2DJKbGNshzWsZeJdPxvyY9p3jPhsj4QM37vL63bASiimiNP7xcp1XbPcghy1jtciQivC4s3hhTeeX2s5niBonJJE",
  "key37": "2ZL82bRJUDQhidaueqLvYhr7hrXPoPTDCAvMYZvqjn9mBXpqnAFwPckDhv7XB9NivdjkkK3DKGM2Lc4mkcthT31y",
  "key38": "3WEGFgp81FXpTXRL5pDTKmTg94BmP3KLqdH2kEeKcGV8JrKCAZ5MZ63EuUJt5sU6DSGNMA6SRZv12GLQyS9uxPML",
  "key39": "33gawLSR5UXrSgxYZ5AecATGejbTeegy11m1Z7c51Nodjdir3LTTZXKR5eYpgRRBHLerL2zq61HyUK74mtWhxRMh",
  "key40": "5PU6TXvrKjZpJUzznficYFiZkd6AinLJu6wK3DLgDc4RXTWrXvGLM1sDUDwdPPcRd8vCwX9ffTaEwZsxnC5MZRLs",
  "key41": "4AZYiMGsBoinnT4BBBF2sd1DF2foP6B9SvrwDAhG9oVo7s4jjgMepc7SRyr7HDGZpPzyNi5YPucuiyqwpxg6FpKu",
  "key42": "5w3FGbUcK7ZiqzZVJtFZiJFJxcf7CePMos4bGzEMNQzpKetjU3ehmNmnVWXSpPnrCuUQbKbFshmTyQRAn7hF61e",
  "key43": "3KcrhhBX5g9fZNuctmpLQguyY9tGSWCsrvRUuNuKgpxSac1nSobScWzBRJnPUp1HV3R6sUT7ZSiUAvruCRURwP8w",
  "key44": "3Lt522kpNCPMdcaDmiENccFngCUfb59h77WVArgkWnqeu8wXvSK2FzTRc5x6Vs4YPrnWGKeCTsit8Gyz5BNbeksd",
  "key45": "38t76FFQSm9QKcUM4ECketkZyihkBZPeZJy6ouFEfpGJcbWyom1mb4t23JfxSd853MKCkVWVRZGFysVoFNmW8ifq",
  "key46": "661dtyjycifmaSNQ4wpcbHnJUxVUebBiwiQXdyPUrb56t5QMNHaVynPPStiGTsmBwKxFwMqrnuQ75Gh6Lxy9sb5g",
  "key47": "62TCMi5W8Yh2qzBs7CL1MJuLGSoEYjcLRM8LUe99wQrumQiW8Z2VQDhs6EB7Hm1cLrvbehiVMjTWyviqJEowcabz",
  "key48": "4cssKZcqDH6ACZcHRDRL2itkNawBLCjZ2Jfz3tGqVSLZm8sjdTdXt6gGjT69MspaHmkmNpPuyTNzs7TVEiVGCAy4"
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
