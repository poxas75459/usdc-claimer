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
    "pUx3knsnx6qhxn97XL2yPMkguzU7G9ruQ2VQSHffsv6vRLancu78upF5ieEvj6Nfws6wCCFNPkwjoqypNDYjJR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gfn5jpGttjSsTodgagwGeiTyiqjs3q23v3kNbNETf8mdnCe1xYNqMohd5VcrMFAKsqa8ZGrj65JXnXzNDB2YfNc",
  "key1": "nUEZE6HsEajvaQkf2No3HNFEMF8B25pqG93izgKcHzNiu7DSBqpKe1YNFucfeAVWWm433gwTWrjXa81BKygUAKh",
  "key2": "2XbYDyRtsGDzUa639bog5rJ5aaWmrWxqrnyHR4ntky13TCVwzo9vbDWCwdqe4rMvj9Fo42nqncdQsxZQgfB7cCyg",
  "key3": "zCFo26BMNUdf7PgVHphsJ4ALBD11td8a6a1dHqav9rYgL4PMrm8zVcGsGR2WeQAENfu67a25FGXG2uo24qMQGnc",
  "key4": "27uXzn2oBc8UhpbEM9vhiBpDgHM22kpXH193SMaFkLB4DJ9Drw9UJFRW5h6bvRmu2t2j5R3JTVkVLckceDmohkLb",
  "key5": "3DBs55VHUpXAD5szxTYgfnnJxWFtwfrQVhj71zXhFnXnAo6hKkzsBwib5q69wABrLc1H2LLdrs9nH2ip9fahpved",
  "key6": "2s78gEaC8kiCn1dM4GDybvAiZBmEa4MV7f64skPpcz1GuCgBH5awucSx7YWBLSBkLXFWNo8a2PtwCWRzkxKNc2WV",
  "key7": "5bfYeHmfxzWypXf9ntxgauiDomRpdEjkL2gSJrT2soC3ngnPpYMv8vN4WeqN8VkUjLgAsS3cPVMhZ6Z1MRtwDYJK",
  "key8": "4xq7FRQF6w8D8FKCJKsDTBJMzhpYephJ6GYbmyri4FR5FE3c9uBzK7m3mDfQjeEcbzR3WYKPU9QELdsmgCgtfgYy",
  "key9": "4q9WjHn8SGWaZFbaifuG486t1DjaxckjfcecDJxKwfSDnuducsgDZvwq4mW6igZM8L3jkTU425J3DSczvdaQFrn7",
  "key10": "5nTUmnoKqHxku9o8gZLF3tfrNtYmAuvGm9B2fY2HBQ4g1e3jJ42Qjiyn8zKyFaResAWCEWhRaRLWBnL9y2iosTJ",
  "key11": "mK5LVLRpGFsrZZVe3fWgh4VzDUqm42NVsNrjiBa5TV6oMxqDRSKpQD7LABsjm6Z5sv22yoe1vk5eSzhDSZf4ZPt",
  "key12": "HKocn2GqxzmJwgwxke7uU21WyytyroyFNZtfHngFJ74NS7whf9qAHbqvu7YN9dqZTwLY6nNevjkxCTH2B3yXKx5",
  "key13": "3a1u3coTpNiyKBAzveMgUxie4ZvFvQnMezJ7RUAHJQBsTehY8WZP9kGpdNbBLJbJZrRBjY6HRxkdpesE4PXNV4VH",
  "key14": "31NEtwymuD22Qj4MZ17N7BhtAYkhNWhDDTVU4rvbgkcjeFTZDeBZ5Y7e1SQq38XZXM2cHaPrHBCeEMHW729h199J",
  "key15": "4ECjo6rchN8gUQyo3JpFpqq6oaaQADnMBhpD9dbguV4ywKGMsM3bfu7D5HwYwj5Xu83WMUqowUp1YSZSbdaKRTUt",
  "key16": "3yqyivBszctud41ZbM32YSEg7T3adrGVEkXdcGesuzXapDz7okPMxBt1vvUN5jQrBLpaa3453QQgvBH5BYjS8kmF",
  "key17": "4PMH7bXiUo1ByenBVmxoiwZ1E72FrNRVahvuP6wrpn4p4xYAdBM4iQSBZz9oCWpxYUa7ZbVpFwWRFsx9vQsEv2sM",
  "key18": "4GN18ubG5gfJSMeB3PYpgmMFZDt3eigEf7Jg7HqGSDp1pYh9TTWu5EuEKmQnVv6V6ZAneRi4g2nj7Qg5c3yabQ4h",
  "key19": "5AWVKkKZViGEoUoPhFwncP5Kz2sxC56mFWm7s7DYxPNpPpWgH99mzy8z8mZy8L1XkFJ8ZrRYWTpmGer4fhKvasda",
  "key20": "2vQ3w116kCfot58GA23voS5uTVJQaqnMzBppL7vtFMPXuoovcykeXxnF9N9aZnGvFVutg3o7rxoWSxPU7zj3sHRU",
  "key21": "4BdnJyiLRCETcuKzX3Ksy8n4zdPXnRLFRCodrspCc4L7unLASpaz9pYeVHGmVDHBP8mPvGWfgdzChjio5kS532KY",
  "key22": "2oScauc66eyonkbktkFgwj5VqbnCHwdyQqwyUmhtS6UBrRpgBQbGpLVWzxjnU1hStnzmMBMf6RB6bKAQtjJLUCRR",
  "key23": "LKQopJkYJZJgbRCUeAzLPWKGXg5Vf93WV7UHnHG6BKTuL1RPoP34YdzLdiBkCQ1CiewsauNrVEC1rihi3EkinbJ",
  "key24": "2wA9pSs25q77PyTVjiwXJQEeDjSa1ixSrtkv9YndS5nbfGfJUExLd9NhFV7eiiAD7PLKWo6jTV2v8MkDYr7AMGZu",
  "key25": "3sShk6UCEdsmiPzY9a4dwwT67f1s8y3Zhm4YQtMvrDYwDKsu3M94kn76m5zKL33giDo9TXsZwhCjkbqgJ5ehLrUq",
  "key26": "5KGCD8LaNjacnLQB8yApr8WZfFHq4iLcFk6QQuEUvTGdjEcsD4YJcKPXPphaKfLHTQgypMULETUNPEZc1KAEA6Uu",
  "key27": "3Q522CHdxcRc2hVEM9U2cagCsz9dqzJhE8co3FEGMjXcN97MP9wVRQgDv4dnwuqj3HQUEqzeZQGEq2zaV59LgFQW",
  "key28": "3RJN6oqJQaj2GWytDnCR4HxD2dqmFXcYbS68pDmWtHPEvLfMpeQyiJ4cguHot1prTCTWc6wT1w25dCjqFVY9xuqX",
  "key29": "23Dptovzov4M1RNN2pa589kGBFNh6ngEUxgFNZCpaAeVWNHfC6Xxf6XKK1iGFJitTwnZCfPCCbaZmkqdTA9ZFktZ",
  "key30": "2Sh1XcRrHforroX43gbpNm4d1T3jnp6Mxuqu2MtYg6MesjQ6UffuyUDLQK4633hESbpMi4CXBrYna5PJAqMVvQMq",
  "key31": "2wU7uYtmZkrfXFz1P1bhtond7fxvx6MNX7UoJGWxDutu8adDo6a2dCXioKAS9q6Hb5iCoGTUuW3sSqvbjDffJ6r",
  "key32": "4xKSCzvsd6VbgEkNTwwt93Ndk7TezsUDoUyJsNn1oCRYnUcBKKxW8mSdqy9QjaBDJE2yst1pgizyaArzjmY5PPYf",
  "key33": "WejRb4kx3VthafTdnAGKpCJTvjSMRxz9gJsRNgjyQUh2yDCSdt1DSGEzDnRFamPTs4QntUniUaAZpkZBed95b1T",
  "key34": "2PKUwWEBjQy2wPjR4E6Wyj3BAkPfM7o6pKJKQPiXLNpsVy16nXF7BwtenUJMn5TiDidonA1R7uCFr9rphAw8FrrX",
  "key35": "c9ZAwCmSMSKGov7CMHNCukPdVCj9Bhx5rvq4RTQF1ipVZKR9NPcJbs7dmKrWWFmPKpH5AGQnW83nyGcUj3Y9k3D",
  "key36": "3b9w54ainP2A6jtH3UkFidEHw3RzViCnYviUDUmvkQMu7vjUEpCudcR5uvYER1crVDJwujoVpZGW8eje28mpjhpi",
  "key37": "4tgQYK6GNL2RbS9osR5XN88U6vfbFykx1SrrpnXt1N4gUqb6XYr3AdrF3wLyRWSZoUpke6rv5zu6K2maAS4NuhUn",
  "key38": "4qJeK3ntXKoM2Yc3HXLHXFhu3zmM4zWcCYuZPMADwEnj1iFfJmPdfCSBcCGtucqrdVB4dpmwcCA9beJ8onTqdSVv",
  "key39": "fDJ1oEokUcq4WNk87wH3NXWaU2pa8New3HhSiATXHuTiijLBFnut6a47P5pr2XvjTphP8j43mRTDLgJaRrrrqXy",
  "key40": "5NEMouSQnfkFtn42hy345F8Hk2eTVrDKvTPRQxfpS8Ps78b6AD4BaBpW5rrZ21sisWoyVZwwKMQa5yFj5hDg1WvK",
  "key41": "45RcG6fnUQW7dxT6JhM3XAGdfJoShAiQDCWMTa3odiUhCQMmY9fnSKX1QyYS4fe3TkBGesgLQvT94K3K7N96ipCP",
  "key42": "eGWYe3GtTUN3uRHKPAbKZHgTVe5jHXkKBroQs8sgxxBmn9tgGoFfgVT9LAb4RDCiPUKAAJZqqXuAMCAbvGcdPsS",
  "key43": "5hnxT8nq398fMvTpYT6EjYdcWWX3vwxXqiuTGy3F6f3d1zx42DzQUq9JxyCusF1ZSshWCSjJ51x6q4UK93Jm6DGb",
  "key44": "3MxZtqqPZd28vB7ZPtrxruREqCDkhQxnPBaN46xiHwWv6CzetjiwbJkEXfHergW13fgz2HVAwaW3Zr2d8WGUQqba",
  "key45": "5uKoUEXECsPXJGNrt7bQdBdhVKR3t1fTqRC93snFiobfckG2tMzyKdstNysu6eg3a3qRMdfS4Wu52zwmMwnqSEmw",
  "key46": "ixPbokZ9Co5esfddd3xSx94GiYop1Ky5zxaBezuGvcBndwxa68osQWzkVGzcTY3cSAsZVYNRxRdvNHyjYG9VWm9",
  "key47": "3miFCKYLJjcXQ4sM2gU3psnpN6T1cDnBhvH1JShodFPfrQGYLSCmLUSVyk3K4H32aGrcxbznTSs2eDxSTYifztn7"
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
