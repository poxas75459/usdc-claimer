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
    "67CGkqAFgEPyUdb9ZbN23vY6PMTgn5bRy9YGUSS3MMknRwf9wbFNj2Ah9tuitNnScTxPbsEJYowoLcK4x3xSPtoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23aEASGqTE5AogdNswdnYoo6AUtKd8aiwpWZkbCpxEBPfJCeJySAAPiTyqw4penQ78DLGAKTTk2BPDDm46B8FZhG",
  "key1": "gjf7gcG7bsEHUGojRLP2fFdtpF9wf7Uf8c5ziNJNPQ9Ywanv5MWL3qniuBhqTVQDRyZ9UvmSE4KZx6z32ZqaTqx",
  "key2": "4nhRJ58jHfTjyHjb9pQp519Pbe72bXQKQYB1HnVcrrhgHfb3BaXY2DZLPL7C2L1wRv6BF3fq1w6SaBKjBChDmEEX",
  "key3": "4SH1cS5owXiHtKCveFAVpoUPchzpcwzVrLxXAhLVRFt4zPCtJr6Mix6tBYXFxtg7Y8NjaoQGgAwzjFpdeti2kjmn",
  "key4": "2DxERz9c4KXQr9gCz9AwECj4VCZPK93k6r9Pmc5vkJymwetj1nCrCD1LzSF3LQvZLLmNfRhQFKoPE42fQbovM1qZ",
  "key5": "5M1hJuzXo1o7kPGau97NGgDHxzkH9ZUR3qimBaHp7qWFYoisNR7LrU3Hf1DhSXTq6pFhy5xLPScEhF4LGXefxFdL",
  "key6": "2w7PdxvpPv7iXfqXH9bE6jPYCmkQKLbAUEbV5ia1KgoLCRc1T8zoq8AMMAzrmh2hJMSfwUc8sWUQSjfRaXoHfydh",
  "key7": "3xqcV2ij9MMRwBihpZQCbCw7AE5v7d531hhxDQcdHVgjehC6YHJ59HQYFB1YwpkkNbDuwh7JuwDyzBNhLF2akf3T",
  "key8": "2rm54bn6p5yUbBk358sLq2n7vMT7NT4iQhrTneumA5xWafacmw9a1efXRoBPxgTuLovpVGT6q8beXL8F5JFihsVQ",
  "key9": "2qSk8SEcSuf5kWAHi7K8UsntkQE7uzNYULabGA51cCRrDA1vr7TKGQje7Ckf4dLiHxTwakA7zkfgAhzbLn67yLLP",
  "key10": "4ffC48YuHMnnPjx83f2C4ML5uZhk4ZNuEy1SdQkHWpXtZzRWx4w3odurw5WoyaGnsbhrmPErmAjrTDzdwG79GQGc",
  "key11": "4fktJeo3oWGMd4gf4yLsxe6aZFTLGCJT1d68vVofZTXVzrLgPSEHFxqkrs4gnTwiCeg9RSW3mstSBrCwiYrzSrqb",
  "key12": "4YF6PjEo3SxAkeps6Ak9Ny3V5kCZ7JwQRXWVaiJ8CD1N37CYdgDUp2yEBUaCUECdxwWHVkq284GHTastTono1rGw",
  "key13": "5bgSsD59Bdf9nsu14KW6fZcU2iYF5u3zCyNTLDnUdLWygx1tr3pvfBpgXtSaTLr4Krybv9YMBdrrbNG4why9NKUJ",
  "key14": "aEmVLxUAdKqeiboZ8reLUYKAoJboNiS79i5ZPFGmbo2vammmAKSJBn2m7AFUkBp43YwkpxuAzW2dNDarctcCMFn",
  "key15": "xHFrCv6XPSURVJGn7sTQRBnFx1KNHQgiZDU2z1aYzi5iCZZXyzC7xcPNS6fqRQqD9kQMnNTFWdyCXt51qY4JGXN",
  "key16": "PiHBGq9bvpyn4iUdFUGLHd3gP1aG8PtFdHe1Jh9ccuuN7UDr3WnwJ4Af9WSUSVPQ1AhEXGakoXeYmeHcv2uoRqx",
  "key17": "5KSMh5b3jAitXoL7C4BTZyHDKwKqv8LTWkMAXTcTQDSFm7a9cBrNzdiECW8qKEFggMTYuNXzYjeLfgKgGFRKME8P",
  "key18": "e7iw2YSi8XqnpL6hCXtKrkEUdRNWVUtuduvrnm1vqKuXJRVv5zFtEwVRjkSccRtkKC2Nc7ib2YNDmbt9RC6JLxD",
  "key19": "2pP3hXNdLxVkhUp5qZiGnuimvwM9UmuPxYTRGDXkjy8vjVBskbaiRsx94x2EYuc4tY97o67GX9QKC5GkKncTinpi",
  "key20": "3g7xqs5sMJHB9JDvu8VdQZb6xV45d2hRWDNoA3Ckb5FPmAr9Xja2PUqZezxJfV2BKKD6zKoZqGGeqciM5aLhACNN",
  "key21": "67RPYwPu9BhesYm3XPpnxh5JSpT4VQM7nb4o1cMRr3wBSuxzneZCkWsdu2tYqX6ebxmq7RN5gHMaAE6vWpPiscft",
  "key22": "47vyycPSWQsgXdvDRtF1TqZtZukm5vMsRG2isTZNL8FSYL4Kqp6mN1D5ZFPKSe7Gf6ixMQ93bwnoTgebGYEgoCDs",
  "key23": "5LD8e9Vcu6DtM9a1tykDc56Bbh4BRrsL7yuQ9vMRqCR6JpDYHXnjC4oW7QqhpNtU4C5LYPbChX2673qctNNWBmdR",
  "key24": "4C4qXxrEPFg1N8FUsQf2atpSbErBALAYZwvUb3Rs9ejRzQEMGwBSz8BX1gRBPgh8SHtthg9rQHQt8fUJkoWqMj1K",
  "key25": "WDpwgz87vVQShxUxE7763bMBUEi3VmJyecWR651cXingJKdeR7VH9RdXLBJ751kGDdodL2eVdR1HY5TJnf72WQm",
  "key26": "23r7UkBYUPBGrmVV1sJspEt4YiVbrZ7yhDg3QaowP2C7g5LqhjFE2zW6DVq24aSBh4R5EQLrQqpZkZYeVfwaX6Be",
  "key27": "2oKR8rAuE4DMdpipNBHyBce4vp95LWtrjg9Ho2f7A4dAR8U9jwKEuTaeZnBLpGpPrQCYAQvk26nb4pwjzQqMe8Mh",
  "key28": "4VYgjWG5VNp3VVntf46SQydL2gzCmmJJZ7YLDFMPeoEAH1q3QVG1ioZpEabMNjNLcuqWgNLaScrcXqsN2mCH9edw",
  "key29": "4BTXSMLrXPfCwfyN3hZJDA95YrmoqUCzuUEBsNQqcHNZRBe4Q2ppZcg9n6tZAh95pxyRfBCPLzUKWfKGxoGr9rYc",
  "key30": "FJDY7VgHLSakPS3JsPXfhkNjCMLuUD5tDz4JTXTm9KA5vRBzVsDjXDJMAe883dfBz8dn4DsXxVkwn5NJN7j7kJn",
  "key31": "2X2rBFBHz5WYTyYZtDQQvfsYG1MBLK4FJ9nNrutqjtfbn2x21HpWRmamfnhYuCQaEBKgzkDGDSbBSPSPoTrqg1Xt",
  "key32": "32sUCAauLZ93QfGkAupNhssKF9id5WaxVqmJo8nzPKFuCwdsL6dsZ34aKnH1ixL5p2mjvQn8ovGrRtRCYWppQDUa",
  "key33": "4Sijs7AgAq9GZJLSjcGJZzCQVh9RL66cYADujaCY49q1beKvShPxtNzFsJR1fptsNxG3nimomprtAFgjtVyPEgjz",
  "key34": "3mUfBL45posHix4t5hBBeTc2bmre2fbX5hGpo5B7S6WEBScTYNB8mjVyPhpAbkxT3s83PCYD3ias27KneUss9mSD",
  "key35": "3YpjtvKASuW5RL9b1aKU2VbLjeg4mtWnx9BMpECHtuiXSB5JDM2FptHFSm98v2Am6Ms2qCrAymAu1g7igRC1ojtV",
  "key36": "2d3JbrJvo9RywMbvxEstA3gKfqwusK2qAYcfp8EMrP5NTrG1D4FGXwVfWMXq3KKATFfpwkR8i4otdyskZhpz1PnM",
  "key37": "3obVcaoWSnDgT5VTnYWffvDXvnM5KyMwJTJuLoaCgmv3V8bkVmk5QQMeMPWAvpgihgr3d3y7VmduBU61GP1GYnnn",
  "key38": "5qYzrkQqPLwu9d36DsivbDqqk7xXNZ6YKjvj3t8CUx9GxYKS9dJtgoVi9AuNCiwjREf1TwxZJ5SMDKfeMDgrUpSp",
  "key39": "553pa7Et8md4LXAtkfQqSzm6SoumrUQy22TnjTwgMXUuHy5VRfqQtisJCHMs67KAfWx9a5L63izgx9imkBMBoxNa",
  "key40": "4caVkdjKqQXsnwt4Wkz9SLHMfWF6rbj1Cmmv13xxuE9nQeSm15BgZgydzrvcxaEGR7BynJH19TTZ8h188rrz637G",
  "key41": "4dASLVmd8WAeuebfVaUnVNimTwzRGQU8VDW2JJDYxcj4CZzyjABtTkw9PnAV5FMsk1Q7aNEdNSTCTWouU52M2r31",
  "key42": "5jKkRMSMJXgPBAudLrbmd8Ewn5pkL1VMu2Kx4h6G3yiWLc7yGHfMQ6s6AnnsrG3GH9V1y1L5eXRjuhZBHQbavtSX"
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
