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
    "muA51ND4BoAxtdSpZr68RsUddQBfdo7srRXMvKqqt1bfiQbPvcQw37CY57D1G3icuaftYsedp3t9vYD7oj7SjHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELFM5up26ew1WYTS2SKd52Q6HDxegowy4Cwzp1Vy3vRBth3T9UGtkUgpdWTFCsAGRT4pJFCiNYDPcnRXHLotX41",
  "key1": "2ijkP7igMyFz6ZbjhY4Jvvx6xAJa3qfEakQrgza5mkZXF7qf98EbmK314J5DtqsyYtSuL6AsUXZzrik42r4qqheC",
  "key2": "4j7u1pWbFDB1DoUiaUtMsp4V42KrJp1SCmar63KRjJaRGatRZ87jWL8oGteo683eSwhCxm5a4MfpCavvNecxcvXw",
  "key3": "2gaG4FHmrurDZuEiPXqn81JrHHVPYS3s3PYD1biT9ibAs1zA3fuojhNKEcxHFE1wjN8KHgHeK2o1YmLs8Hoo7trs",
  "key4": "xP9LqSdxzuNHbj9rMch4g84Ej3vCksFzxaHXdcwGCW48UQj1G5YMNz3mxi5NcBpVXr1SC2DQNSy893X9zNnpo4E",
  "key5": "34gDDLk3pGSV616sdgB5TBRQo1BhuFuNZAhGAyLcZvEh3Yz1r2mQGcgqzrG9fuEseikrCgP8U3xmaZ2cPo32MrAa",
  "key6": "5Q4UxoTxyhgS6dkwdLrgWbk2qRfsau7BJ7stGaLAqSkb1ec9yHywd54sKZvzZY6CJFxgRfWMm4dsGqYwbucvcWu6",
  "key7": "y8igRaxR1tDv395QeRsevPvgx1w6PFjCfcVDRGQbNDBbN38MSAG15FxBqMFYrP7cxyZ6dwk76yjPkPBALvy33Q4",
  "key8": "3uPyTbAz5aYBmtcTCJtU3P4VEYReRLDXGkJhVm2P9ZFo5urWBFSGwY6e9hfLB9qRf8UPm5r345GgpJP8HHBDnEvV",
  "key9": "A71VGzdTfzfdC8aD8JVSdR51345Nq23MAJCsr3sq6XVwFKB7HeYBBLx1re7qMHyuBTFVPfy1n64YCYLFX7z6JzU",
  "key10": "3WjizvK5gRT3DBZsjnnTtrX4XJcngFDxG3h1CBGUuct56FtGAnrCiwU6zXoFqtfuJG3eaBQ9Loi9Ts5m35upKeFX",
  "key11": "5m932FfD9gunK7vt7DyAa3vMih2Sa4pN3FGMQ8XePXTujqsH2TiMC2A3hfE3dGPpu1f58nyorWZwek8VAm8i4GS3",
  "key12": "Rq3ipWjrJunfccAAmt1EBbWRQmC3Sfbv4sjubfhVzEWndZj5jcyNzYZbbvFPM5W3VaLeatzZTJgYu5M3Vw7zK5b",
  "key13": "oWVXYSFoGiK4mX3DdARLNoAvNKHLpzbrjfgEaxEz1idfnk6NyD6vYUXE77tpEGLnjKQPKaBzWSgXbBBiyXSUMuE",
  "key14": "54padTf2WPbV6uxacckkPSuLHf4KmqhFmVrFFxtgHB7XFZqNc91DxgnH5okfoUpsPCQPjufj47mp5Zs47p88n9XS",
  "key15": "52abXYZXVmkyoGYv3V73MsXbU8QfAfxDTbeCjkJABuRFXWmuUS5yaDHZ9MJDUHtxbYfrqgH6Tf9dxU3fDY4VvxNj",
  "key16": "5XTdutQrMjH1kyGKJLZfN41iJQURWShr4XTjZwANdT2f8cyVtQhoLMxCPpeRYEj594SpoGwLsLTeWk8ctno3b4Bb",
  "key17": "5in7RvTmhYvN1Ztn7433aMmNvR88ckBD5zaphV91Q94WaByCvryhYGSLiujraxMD3mijGffnMih1cKrCQuytauwa",
  "key18": "3hUpcTfMMQCLSJnNBDY1L6CvBtM1WnyxVbcnSbkqvCiyBR73uvuzYS6pwxEwXEM6gCKb7W9hFEFLW1R1K4mnogC9",
  "key19": "2zhkDKtsy3iHgzZhAy34VhxAoZcPubAsureoekHrpSb2NgMuhMKwK3Udm4kkF4MYmvihyPWTKe8wqHSuDCxA1EGv",
  "key20": "4kmeCuZDakZenZTGhcnQodwWcKTGCtXFdFPHeswTp2WvTniYdsPQLbZdJ2QeAKyNKART28mQhgwzRnRvHS4dshcY",
  "key21": "3GStz69zFMYpdtzgZvhc3kbH48E8HMPEuSpJXuLj11PpFYVnTSo96NFyxWh1Un1qcTFpSiJZsg7KAZaMs49FiB3E",
  "key22": "PhwPNDBPjg5HsPWrxSGvw7SMsAEENatZeVTL6PoNNK6yXFJkjFrvq7ks5HkvRMYgdTe1DgyEV1whHeAL5KHrdBs",
  "key23": "QnGvpEKUTgNHaLkRrJfnVNdnmGgE3xzYWbQrJ9vhBDw1XT4qXwSNFyGpp35cTXYFaieaeHWnBsKYNMo8UeWZQgj",
  "key24": "zUo66uYhC2tdr6i7MrULQCW1313tBw38qPUK98dDvAcsZsquYHEJdJidnQ9jr6Hcr8LJX3G1mLE3NCap5dkitos",
  "key25": "oWWvWhHenxXVYRuQ6i4A3mbiWmityNZSxhiCwnCM4bu4y1iQiVQqRigu5aoBxxfkUK2o4pSqEATZXJPVM9Csjrd",
  "key26": "21MK4XWJGzSchVK2SzBb4bFsoemqKdWhFBfWiBDibxX8MQpmZYnfgDFswes2EoS7i3zHj9Bk53fL9cyrgSWpTbkM",
  "key27": "5yWx3reBQMqhFGW2n7PmWvweb6T1rgsy8GESwd92cCq2qgmChGep38cSz2C7i9QdPKApJegPCrZoSD82HqcPDnp3",
  "key28": "5HwM132mAvLKnW4t5kxtgbM1sk9rE9tdFKH184qUnmtNoJyaohZ2Q1gRCwdKttdFqcBQdeC6WWiTHeHFUQKHrUNo",
  "key29": "4n4Su5jWvijRHrmvsx3wY9rX7kj531oVwXzBfNRoFnpjQGMMrJJxwttDyev1cwHPQLbBj9KA9aD9yfTAuy6xk8Zk",
  "key30": "5S5jcNBr8w7NVzSEhRYSuhPh9ptF3wU8mwvM9xjUMeYqeNKt7baecoxrnLBry4n9YM4bT7Rz5MtDarhkJL2MFvpM",
  "key31": "2za2kDAjB4AxUECGG1Tb8GW6LTaS4AxzbaZXgUUHWuQebz4wurstEn1oeLaz1U55nTwHKdT28nE5FiiCW9vf47sG",
  "key32": "2mdU96hU47DwBjzWThHUN7rmTEdkXqW7d5Dakj3hqXL2Gt31MLMhVNWQQ9nEdYpQAGNTYCPJxYzbmaip85mLnaQm",
  "key33": "2jvnPeJBHNtK1iSBNMR8wbATcJA9fkLeeAwGrpxzd2GXFMcH9MK7LxjnVsAtJpBBiYq9JE6s55FfPBoLWuxg4RfL",
  "key34": "5ahmyPwn6QK93hXzkPbKwq8LWNWdfhrgNMfWz1CUaYraSXKEQceiRTJG1v2uim2jq1XubhvxgmGK2zdNbnaQeKbw",
  "key35": "5Kvy525MHcThHkoooKL7UQWHiAZaoQFyiDw7RzaLhuV99HibUXcxfhWZokDsP6joemCqDR2U4nYk5tMVUMeyhbvT",
  "key36": "A65Zbx89wvmYM3j6VJv539r9pEjLL44n3UDgd8YRCbgcVwoE83QTZRXZWDAcXxNRzCKBXyKyKo7wvE2PPVmyH8s",
  "key37": "SkasSkdejSW13FKdsPuqnUuoBhkkeZRhTmBeTVPKrTCDriVzj38WBsRmZLQMRe4nsjFGb1VeB4rYbcc4K6F8nsv",
  "key38": "4jo7wtWUx4WmzxXWZvdR3jZxseoTWxgtASsRn2kvaGt26YmNwZ1Luzh1kTA6ojKp2xt2WEfQMwaEHvVKzoU7cQR2",
  "key39": "5vMyssd5sdXwqJwR4kuXAXxF3uYFjAtu84tPNGXoS1Gr2S8ND6w18ES8UdrWmcLtoPHK7ozZ4R9UbuAHkjGZVMhx"
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
