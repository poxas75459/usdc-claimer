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
    "N6Jhb9F82UiTC85DjnqgKAUmsC8gNPr3xa1NKCzYEuiZYtwtEqRyoqEq9FwUrSqeQHvHpWVAnv84N5YVDvnhjM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "452s3WbQFFoiCVF8AcvUDmdRkWmave4V8g6yMjkzUFk5erfKkW7makNY6YUammo1WVxfBy8wmfnYZnL1goiKcgp3",
  "key1": "3to9Eo5bVUmDHkSUihucownmJWpXBjC5LWR67ba3tbdJsKYocPMB72UaupDuikCanKKoFbGFUG61vFnfDvFTG1AD",
  "key2": "2tj5ADvRBxnxCJj1mt8UpXVxmj25udaLhDi164oqusv9QDj1b42krcFbLKPzbnAhninh4qtCKBn6N9BCzxCsCDEt",
  "key3": "2N12CM191vqcSyk3PoY8CSeFpFGdorFJ8ftSUBVyWpSRdXevAV7YSivUBjXJipmvSoo2C1cYA3vuHm1riZbzzMv3",
  "key4": "5wTyq9GDE7Uqen5to6F8qrTdKpuiNy5rYUwrnxdpy3nBLsm9dEcnZB4mLFaumKpyCwRAV6rd58wFY4eHMJpxnQEQ",
  "key5": "KhnuYN4xdXjBRzn44i6exMQ2TWHvp7kTnBHWS3Hdky4BosBoNykk4vdLVKUG7oKvfSAhnwY2QfNFd8KNXS4xFRT",
  "key6": "3GnrT9g9m4BqMXwnuyawqQeyqfkf7P2YSnoBm7qi45yjfLghj5RbdcsRxuZBh38jcsnbwD6BqW2HDc44R6kmLe2U",
  "key7": "MpjDFAESZv3rNoGwHXEHebN6QuXzA3nkgXvHRCnM9ziuZVC5NXdDQJA63taCKkgWpYQYMsH6m7PBdMhMJNxKSbV",
  "key8": "itktaNavpScb9r7JugLbwS43iXSotKjrFuL2bu7XPY8A8ybNzbveqmseVsz7TpMQP82bfGymjurYF63YpNX3qjT",
  "key9": "3N16wNkxC9y4MrTkGGx7y7Zxtzr8LCXrpZJyYQzVBSB6jgzz1eUPPDSF3cUuqaZBgVMoTQBpcHcJSccgE1iCdQ7S",
  "key10": "4NjpY6ghciCrFKfV5XqZmaah2jeHAYDVbGiwqhzbhVoUtPfbW3B3CG33rAji9CSp9kWAxMk2VwKHxtqLknR4F6kw",
  "key11": "416pdh2bVMCwWxsJHfK7HnNq1pjtjtW2FH1YVR4QcVEB9GFhT6YbgNQdUTdL3WmSWutVUSCkVw68ugPG2vdMTLyY",
  "key12": "2fXPao8B4sqc9RQrgxvdui5WS4u2z1bgcYcVG3ZqKnK5hegKdSRt8y6w9afXL75VDRCWY9M7pDgGPYhdxWPhJ4Vr",
  "key13": "4zQrCtzpJdRpKPce7X6gu77tG6AvkFM5yF4hngageZk3GPmUW7Qr2zPVTqpKMR3viJfgnEfPDay8S6tkSMb4Uor9",
  "key14": "41HcgvXi6ukmjzbDesb7tYGW3b3HhfCH5hfH7u5kuy9WVRizZAUZVFqja1YaYoWZemnYW3DPxadJfZbSkbBnHs1w",
  "key15": "g6u86vPYTYV1Q6S9nMrAKdJ2PFbL53cY75LxpZU8hLX9Bu7CQmikrixgCFLhv6wexCucgXJtxMH3kkRWd2uTgQj",
  "key16": "5XH232dUUoZEXDACi6efFbDtsksbwYnyrX6VUimJisRSbRTPv1c43KyVF6indU5nkKGNJsjQL8FobFthHwRmhhdL",
  "key17": "3kqR6WUSfN6UmVFnhpuAFfyJytNkZcmZeKfhkkkLzsLqmXqdU5edf7XvDsBYG8zDWNCnBRriCghb914WwySm2uCL",
  "key18": "4vBsMRVjxUhkdncRdWLkiUNErWoT59UpoDxfr2tcPy4nF4rCC8R6R5diWknVvPXvD44TFaLn1G9nrFBcEu79iyeD",
  "key19": "23SjBEmtc2PBkTgWLxtHp1ktm1h91abjquUo1994GwFUCFWmzidcC3cyqXzaToedkAXVUzyxWKGhf6DXAtJVHCAe",
  "key20": "2Vqnu9WD5E6CuSYoFDezN7AneacMVHSGGmhFYXmGWb2HkFR36MrRBubs9QoiWBMRF54GB5mVbvfvipyhYkRFGSap",
  "key21": "3vrtoBs6FkQemFvy44oHZJDPLnB7U344hKKXHM1JDub9bMoBt72Jd9o7JEPyfrcC5CCwuMr8m6pZ6T8CU7kb417S",
  "key22": "5LWjQWKGuHEqVmHYex3745tM1tkebCdknW5MzFdHWPdJGY2SsVMftLtJXmyM2T3NSKFK7cxf7haq1aj7m2sCpwBV",
  "key23": "4KdR5AssmXcbV35uUJWDk1Sz9Tf9pEUyknqHLKGEA5xRyjnmervKg7BfMbTtAD7nMUmcyi9atEbPCmAniNmzdKBF",
  "key24": "K5foHEk9agGdnEaWVTm6T4m9WTXieroiBDXCYE63f9WCAYzD8GaTNF6KTG5WiaZLD9p4T9yhWQbMTy7EDnSHYdW",
  "key25": "YE4s6yu2vhjHZvnJmStJCTTofAAfWuA9aRTpynPcy9UgwNcUFxBhnzi7Y943fhz2GA1vuXZexKrNfci8Ztex9ZX",
  "key26": "3aHwrZkG6RC9rQk5NwTfeMygZF3hYbeLy73S3AKfHeuf1SoKc6DKWH32vJjaxKqToyFWuVPK6wHhBp9bvqLeenYU",
  "key27": "5sf3rhCE3efF1kuz9xwnQbbCsB2V9BPJRAXEZAkZ8B1DMJB7a7NCRq7CDabaEk9Eh49TXzvFC2BCXpKDAux8VSVe",
  "key28": "3Vw9xHz5QM9wvysQJ9d3HMKnZC6Hs3DE9zmBVy8dcGXD9u6zDbkaKZvasw3VmjKnaWX6wnTXMhJckzdzBtxn1Lmi",
  "key29": "oTbthmbxDq7x3bSNHg72SCFjq3iJV8iiiA7bBBRDAoETqC6WP4LX6DcrwRDPn23r9DDoFhUcu3rZrg2xtapJVBB",
  "key30": "2tzd5iPKZPdefHs8iXucWKPp2MxYNBJSL4fNpaiudRCUYuKZkf8E4pAFxPnhKFzf296pYv686AAgj3LxZgkANSSc",
  "key31": "5mVLYBYPwdF1eQwMgVvFafa1zxmXLkWkjtno1xp2qNsLy33nUh6FiX3E5JMnhy4A5eHwyy9869RoXdkzX6QWagRp",
  "key32": "4U3PQf9uiJxh3WuDw5Ns9uf9SAyH1qdmtLHH4aPzZNEmNfjTn6GsgcZpdbfqR5B8wiUgd6g3aMPNMYKFDsT5pkeT",
  "key33": "5n6hhrab6f7U6QwNeSmXiJDkTmz1DDG3T2PxJLXEd76FvM2o2pLWaaNmw4KNK2nBzavZdMuULdhcEy5ENKydMCTn",
  "key34": "3ybLvj2mSwhQAZjYtsMWFkiTh7K8h6VBYH9Qvea9gzSpcezM1tZUEN4h8ShNZB8ZaHSM4E9n12rmvcvfhBJrnTV7",
  "key35": "4GGqAUJct3jEdkN1b7URzPoiEYEwt8oam2NhiXspyaRSAg7UzxhqM45CKRkmThZwnqGrPSyBvsgQnduhxFR8jMx9",
  "key36": "3rFu33TVaoc3NAvzWkBQeoTrj6Yiz1ZQRQ7h7g6UgpJDWFpVpSu18XeYojMAHQAG8vpqFk3VcbvQ4kzEM28Jth84",
  "key37": "3gea3VhZMXwhAMXovXFR8mHpGeQy3d7xyjA1MNz7wJKMHXiwLGU9z25T8mifD8LNvcCVcnA1zgjhVwUgqcV2uvuN",
  "key38": "2EJPYgzreCZQFXpoPkyrmr6ZNVK6FnHTrGN6dNpkRxmPTCcTtqCdpDs4CSvtmzYq3SGP8Q2fQMsxrRfCjnjYzfrd"
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
