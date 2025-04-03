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
    "4PrFBvobRZKhHzVNJsQ1akXBXGinVdybJxHVfN28U7PqQpBXkdBFqbpTCxLCTh2sqooaxD5Sn2rbBGiHFWoxqmE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SqzueraqFcA2c3Rkm4AwTh7FGiBvsxSrU1MfH2HyXrSJisnwqSMVUqR25NMiGApYgrs6cTp9DQa7wEHF1x2NJUa",
  "key1": "5htzb95bjeCmkKyqwma73BX8YJ7wiVBkQy4uhbTnFda74ZLZNVZb8paJuM9V2WC8q21YvEatGYnhfrKgHhLimerL",
  "key2": "cadC2owuqTSRZk5Pd14VxAaZJ1AiAkFYLFrVsXUBeXU95qC2kUJ6firqKRMVvp73YLMn8JCRvXjEfq4UkE1v76V",
  "key3": "4xFLmDiXC6DSA2zgHDnNpNzJERAP3sN5yoNosUT2dSKf4k2VFKn4v9dABc71ABvu6Dxr2icNoVpERBMqthYzhbTU",
  "key4": "3Yke3UU75ASmWJUPh7ioLS2XbFyDJ9zVcjZqFNfyRQpiKKMRgBT2xG3V6Md6eLke7EM91As4u7yPxQJkB4WFoRCz",
  "key5": "4Tp9VuxE1VLGTZFi8JaSossGcQrgYVXqJ7FtDs82yE1VHwQrnwhXrK91g6F7ZHLL6t3BM2Jx5LQW3yogGgURWiwr",
  "key6": "4rHvFrN5kaJFND3oofkiNV1MYwo2zTR71MAM98HHZEehRdp8BZpdq8cuK3XMozQWwgE4ksAp2cGAuQSUAizbbp1b",
  "key7": "61prVX1wso7a7YdvVboSF78h1XdqqokeMHwTGbdZThQUpESozj7m5Kowj39g39hgEAg5Dqc61TCp8iPzALtq3H7",
  "key8": "4nnBfswmTS15NDHmR72j6Jn9QBLba4Kncz7GtAfRfMYb7vQee6hiVoL5wQ1Rc6TSqNRaDvn9nMBBDB1dx3DW6cne",
  "key9": "41X8Axgt5K1KqAowPrjyfQGRCY2yf15DwhnqGgHXZYCDBQAdobZubYNAezPzcUxeBLuDvRqykihvcFCRqMUCfjbb",
  "key10": "PCntpq1NqAhLUudWunxSth5XT3Xw9ms2URxcW84S56mRw9vuYXGBKvU4NKJdUosmzEfypAkvEjyMdsnrZDgxaCV",
  "key11": "3qPmPvGS4xGKAMH6azXxJsyd3pVgBY53fZsC5bq6TtXr9anXtJC48X625T8jSF5exEse9h2ARySNtHxebax8kDPf",
  "key12": "3eaAyfmrhBC4jj3v97j5a3BCjeb4ejMxsxscj3QcvWAbw7YTuKqXRx7ACQLF9AbYUU9sxwwELSoVFEjBPuxktHMg",
  "key13": "b7bcYj34VyJmQCJmruWbFkpqg46ofkNBkPvCyxTtUgSRFMc5TY7ykwLBDAJYEuFvK6S1J5f2QHjUq3CYDNnWN5Q",
  "key14": "nK3vn7WWbxDQATL4XQc666PDk7WMFRno2UT4tkxxwqXFDMHdJieJTex5zaM7DJKuAPN91ynKsmFp8Zns7w2KZrc",
  "key15": "61MfheVEe8Be7dYoBqDoGUGyf8v7kaMYDhV22U63bSGE7VdjFLoYuaC6q71U93ZzZicPVTAhGpTWiJtLvG1KW9rJ",
  "key16": "2QwXMXgLPB7aKsG8f9T1BqEDERRaZNdK8VJMtJ2E1hRciwqpUFjnFeBPidJWR3emtxTukmZ17giVNrhRxaY6V1L8",
  "key17": "5HjVZB4MwaPMGyJLbFhZx64DRaYLapAXYThH1N3V2pWEebrAg9yK7CLfN8Ljt72AGPgQJtFSGWAfJrKKGkLJhLF4",
  "key18": "3KMSWGJGsK6VAJh3vrwA3ccFKVAHCTiaRw7KTMzkiP4bShCuH11B2MyEoqaEgR25RtjXPW7ASW8s8APouDDfS8Wa",
  "key19": "GmhwoZ47dvrJyveLZQUGHB4umKi1tsNWKMiHmiaEsRSt2BKyJka85vDeJ4KnqcWN2PXLaoqCJ1JkzCT4dDpXZZC",
  "key20": "3VEgVE7ziyRyoNY9gedcfbVaqPB4ri5g4vFgDCtdZ596yQrCCrQsYVapok75nhiLSqWLScz9kVFF4dtXNobp58Lz",
  "key21": "3MFfqBXt787be429Lwh68UJWghneTBFZ6GGwarX65WdjkPFKHgnCDAigf9gti57VM2muiJVrR3XjgmctEPC1WZaK",
  "key22": "siFGhu7A6Wn4k2D4PjWXZbzq7CHsV9k6oD8fyaHR4ijCrp9YMfxSWSFUqi1CZBorG1agGaY4RbYkTyfrbLojk78",
  "key23": "cn7uqvpxopXdfGRCnZfFdMNZs3FT4tERj4bCPNyn72feWrSLvHaw2xkaZHJbvM7K83EongQ6vfX6dX8Uwmjk5nL",
  "key24": "VGRnBzzuDSozzAt6Mqa7qvH3JRswCv2jNWiFxEM2k6WVd3DMkhek4KNDgGLHGc5QeqYePLy3dS9kUdDjC8ZhYZx",
  "key25": "5xBzfbR4L6o74UTDRjasjExfBD3X6cVGFvD9y3u4h5MR7TmB9UehNHBS97MYUnKVKya6UPqVWgzWM6eURcKZPJkZ",
  "key26": "2Q5SUyNfCEhGmddbhdWYRkJ1CWk59xQnwuqxM3jY1DtJ2bJmdoHxrTqhLDFYNKhpGP7CnDjDLLHCfJZXn8JRU6mB",
  "key27": "4Sfmbme5YyxXzp8zehxcFi5c1G6fWJG1GwZ83xC4tntR6KfBR11tA2nGgLVoNUaTnbiL84L9hQ9vFNMvWQTuzMha",
  "key28": "3NxxhrqbLr4MqzhCQZsWu2v5NHdXoio2K74t2c6WHyhMkAuSMDNDQnWt7JFo2gbioNkic5kyDRyiJETwwZtCkBRF",
  "key29": "KxYLu2cWWZ7y9ncM3CoKu3ao4jFLYR7o2T5NvRFbSRGMzdqBnCehR53dXEFKjjbpXD5UyEzp3ZFUhgGHXW66Ppg",
  "key30": "4qKk6TMvD5uDcHgm8nMj78wQoUyRXFijwKS5GwmyaygfcAUHpGgzt1ajjMDChdnJ9jPrBMDapan77usMZPdFFCy4",
  "key31": "MRGoebvByKWyRYg9Qdk64VcvqNJmBd5Kb9e5aiY6jA7Dr4qgjgndXMb47ntBhPuRPVF4TNUBAeRBL56kaCzQvd8",
  "key32": "4XzNDhvgHcWSgcPqmjXs4XhE7UcwbYxYaj6uipNT2MWWzggar8SbsxwuYJuvNDk8x39rKk6JwEi8HwmDtcpMwa3L",
  "key33": "cSvEKT6VBxk76rqBUJfuFcFBNcC5Bfa5dsqydsx5LmirnecLNYrNQc4NFQTzsqFJkSM8YNbuLonGyED4K8dnP4R",
  "key34": "3qWzM5inkFohR7aHtNhhPXw9RGC4eh7w2LmyrneQd1xGCxMqGXKTKFVs5dmGCXdfpcHheXSuAX5PTEdu7iHtzYSQ",
  "key35": "2gdYSzGxXMA379H5i9fMnuhVSnm3DUgUT677RLsdkVSNgmVEzEJbrrzCCzM2WSnHA14x9NyWfQEMn46oKan2CHvD",
  "key36": "3fY2eXG3jwxYFFXa8exS3k1u1vNWj46pk6bh9eyv4QoqnV8RzxG7aQLgF3NM4sBwGQTWeqVxAmWDTcPvKQwY3wyB",
  "key37": "33jR3jx8s9UJhhk4iBveo4Smq3DSfC6F8aASc4mX3DuQuGuA6nCKpVVhh57cr79C1i2QWcY4695Le8GhEqdUNRAz",
  "key38": "4DxbUYbQ5ixPwY7L97edeMPGQLG23aSKxJ8QYP2yW9cL5pQwiJnUwJiSQkk5ECMc9wCdztqiHbxMsYDP5ZUoSihy",
  "key39": "5tK5F7HMPSBiZcHK4pYh4UBfVhBe1Cjb4xixY8QY3JAL6WfEbYibnfCeJq3nY1v5vctCvnKx4BAbFR37GkF8qqZc",
  "key40": "2b8Xnt4v2VsmhqyLimQ5d4xZcoxfCiRfsEhUuEHWnA6UWCnptAFfQpUYhKiJuV8cMtC4aX9qYf6mT865PqWtDNM8",
  "key41": "2PvM5tA2P5qE3HERs1sdSUXhPiBwH8XUEtgFSeY2VRhzRjEKWxjcEzLPRP28psUwytqtSfQf1A1paudedxFBcCEr",
  "key42": "4hNjcJfCtHWEdeN45X428tDEAudsR5nGPxxTYCZMkni5NxrKr88bW1LXLp7FGg3PoDXUAwqENmt22uN7YWd6bYK4",
  "key43": "4AU6JYbFYH6XSCkFjdghxzhA4QT6rwrBgp7AdfbwEXub4DSY3YtbnE5NAY7E42hdYZ7Y2yrQ3V8MGANU67gBWmpM",
  "key44": "2aS55kfDJJGjavjkcRdqGEnGAeECWt41FzC4HVBdhgbjcu9AeByho4ZMSwH6tb7o8fUwnpi117LrM7N1qP7Wxgj",
  "key45": "34oBbXT37r2cjBVjrL2ovPKfsgKKJAYaSpKDg2d3oZPgZJNSw2p2C3mn8Yo97vSG3yTqBaAs45fsPJvu8AtsQQDw",
  "key46": "59nJhLaaUXTrUjKeccNWkYy1J86UtHAxGSaP7zJorTpfKh1fbQc66haqYGm1ENAx2r1qrq2bQHMsUL8Cx2QbQTQU"
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
