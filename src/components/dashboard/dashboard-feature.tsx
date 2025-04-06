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
    "Q2dUvVo9EGGazifhf4L4612WfnWcKTMSe78DQt45pjQjPqgDWxrpPnNJQR2UDRLW1u2ATkeE66NAfmgF3XM3Swh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSqdDLJfwspMavdcYi3jm2B1WiTZJ2o3CTeiSFqQpMSVHsNh2FLBuiHTci1jj5XEsFTq8AwVFZmZqV4xGwH2hto",
  "key1": "4sYB7J7ekZqfoNUR9rbiy3YVA519ZYKSNVXetM7BbmDFen3okMyaARf1XmtAfNJY9GxgT1q6iLTN8855rB8F1U2D",
  "key2": "5iEknHL8UpfmRCGVqY7knQ8wrKiPbDPxR7WNWHmAo4idVtnZ4g2zNwRECJtgY5kLdrLkcX3MdKR9rb9srL9CrKDy",
  "key3": "3CY8esHmvctumQ1eArh1pdDE8ndupGToVQsgeUh6mZJXAL1opeyM33WaESDUJ6doiQeuw42cSjkeTFXc1TUKrgjD",
  "key4": "p3V4NccBnmQiXz1ybxNShSrRvCY7WBR7D6Sw3ZTRHXjkpDqGviTAviWqcyP6GrB9bnQpKGEyC3JeTLiRRkzW2eu",
  "key5": "F73RG1ffkoG9UZVTjrEwVK6XasEcmCUPA2SLPcqHZg8drVaVjsrWmd2q9oFvF126kiW2kiG2pDavq6fXuaCxSwN",
  "key6": "3uy9b36QA5RrPvjYTeXwCq1SYNUA15r7aLMnpjygBKGtP5k69RfXARjJkCoRANPkzcBkBsKHZH8W5DnHQLTvtUvW",
  "key7": "4rKFRc7G4PbcEumgknvtXP8ukE5VEdvZKyz79cNQSP7rD9qkFcsRYhjSUj3vxyV46soq6mTRPdd9N7CMh1Hbcwaw",
  "key8": "4Fm41GpuMZJ2gs697h1UEAT4NYGBSAydRppih8DZcWawwxvcj8n99nUU42krMnwLwAa28UCqVe2TTioq2XUSdVDJ",
  "key9": "GqEpyFEfx5kMPPjcDigyizJW5hfUHHUPEcep9F3y913e3ezb7vYUn4vJhLrYRswDCNDntbV64yZieW17d3W58oq",
  "key10": "2pQECEHaw4SLXeXi4fBF7NrKRdaCt54Ky45kZDFjc4kr7MTvrHSoLWvLG78ipSG5h9VopQfnYE3YVJVUyxWNB4Vr",
  "key11": "2GgXp7R3LDpaDVVdFFZSp7qhP1eEEdkSMapsRnZxmyNRVttPHnaWK3BY4219BYfMLpxBAsEAps5uHfhrvTz6VkgG",
  "key12": "2Brcw5mrtDQ64Y7V471GTuoBBvWxoSQF6qpTLt2cch9XpkJmy76FsjyW2oFMHJk3yqsnkczpPpe26k1Ds1YnVfAd",
  "key13": "5avhTR4gbwpbekxs2Lpb5PRBqBu97n319BgREm8VJx12vJZAtS8R93yrg55EbkMNinym131RGR93hGuM9Zf3ZB2F",
  "key14": "2Xwpc3sA12ubCq7oTHkaeUdPLsTo6nmQMccX3nUVQM2U1g772i3B4hg1p1DERfyu3XebuLUTCPLmrYFAwt7hm15z",
  "key15": "4kHU2Wh5c1ndRNwWPAceJpeSjj8eYv2kYGmPBefJQYxmC1tucXbVLcPGDkVqSZtmyhbU2dPEYLahe9dEXpAvCgUV",
  "key16": "4noDoB3W75L6BioWCmzTYCrJTVgAhDELBCmjSwtCuXNGWodyuUE9fL5GQDpGdxx3LR4k8UKAcWueVAGLMLDBG43h",
  "key17": "2Z5w2KgpnUU8KQvsAoGQvAqbjVnJ5S3Vv5hHkXrEi2Mf5fu7umL3kS5fFuAAs2Bt69s1SphNGFENhVdnQKMRAohm",
  "key18": "2F8VpHYEHsSW3UER84NJs364rdA3jHdAezTsNQakx4WpFKjCW2oGwYAcdSnToc9VkmHgArmy2A56PNRG8JmxiPpd",
  "key19": "4xkHUo2Xkf4Gnb9aDiRVgJ6jkbHu6GXK6zmcndfGawKKyWXA3mi1rS762dFZhUvqa4YGPMXpjLyVQb2vEhhK2fvv",
  "key20": "5qA1CdUQG4CTs3EESBRpp6FgMSdnPUmPDNTkjaPwoMdEW3584uGjmFVoiNfZHnAqcBuWF8jfEnN9U1Cd8HGSRqkY",
  "key21": "25vwogTE2E7xgsQdYXVABCAF68bMSRTSdnXNq7DcUvfSqQdJqJPi2xsCS3W9u1VNhq5DEcA1zoMRRVuJDm9JYwMH",
  "key22": "5ufcfQX8m9bNqWwAww2ycoUtL24BsQF9AUs7vKgVG4pKEDSWo9PnhijW7BJ3Ju11nnKAVbeuF1RXSaMrPrycLhps",
  "key23": "2YqrKR7hbvzc8SEwqMhKqsnExsUdg7nW91Aej62ntZHg3uKsqRYJsToLRrmjWgzWWqKWeZCyen2rWeM7VjZY6ffq",
  "key24": "jGFA7SXWqa8k4V2fn49jwzeZ88NZsZafJhSb1SVnkhccrGSW8Fp6FsQPSwMoFF3rGXGbJh2DUYYd6pz8hW1DUKz",
  "key25": "2Cchczfrke6xNzqMJNzYZMHpk7HGg8dai7pgv5bTa9vrEA7nfZCtqMzsYPYQFeFNUG7ZqogyLhUidhMRMhro9och",
  "key26": "4s8ob1pFUVmFhS1X69JMEw7QvPz5BTfpLiS5chCJTURqri7vrPthQ6ZKC7GhjdE7VMHWJDctm2PkkXeu8iBcGZpt",
  "key27": "2PxLUtZs837jsSXLV28i7bqFSVgceD1dvPtudSZswREyvTkWmf2KtFx6qTa3rNmHRT6CQsJvjTet3GY8EUAPFwGr",
  "key28": "25eQqeDRi5jcV3uW6vTYQpcueEYLcGUCvwAcZmYGpfEWiYppSJXo5g3iExG5LKaBM2gV3jyTovyTTmxdDVWdgXUp",
  "key29": "5n1Nw579SDkT4byHC3k86NBnfiGQMswaQzwZXQicV3Qar5hFv8BQY4SZscLGXoDN1Dad6Tfiv5nW8ZneKpnrU5Bn",
  "key30": "5Bw9vQ7vmsQeo9e2usuM8iXRP7sC5eo2aR2rP2FgC15HsDHgvii27vyyWCLW8YiCaJE6V9j4RwkXAgyoTFDFUDf5",
  "key31": "4wRyg68TeX3HDk76qqMuM8BYMAWiCfFcBtF1dmy3uPEKE3SH5x3XUcVZSW5K2xqdEnJNZNvmaiwBS849MpxRtpVR",
  "key32": "4uBVTJZSXUanp3eS9i72yFJTqCKiPBJjBriV3TVxuTu8rXHUe7gvxmP9QBZ5YxoLq24Fr7Pj4oY6t4cLLUMiB4mq",
  "key33": "5W1erPoTmNVvhw6Mz3rS7oznCLPogZxLBTEzyGrUJDBRUVPkAiZfP17Z2HietFBdJUzm3RrbUcyLcPw9xNTwjoxX",
  "key34": "5bM3aC5g3A7SZ1iNCwZ9QuD1YF8at5y9Zi6m3hy9HzrDV757xJW9yHLyMGhusmZLzNoZHVdCay1uuVhadMjiYqgg",
  "key35": "2KvvSXMJBy7fUkT1CUUUc1abct1voSqA8ekP1vuhCgRAUfZPnrkBewDSvMY2BdZ5UDSnFcAg2FTgc9Jyr2YXFysr",
  "key36": "2Pk97mSERccMgbCK5z6FoCGbFh6TPeifAc9ecw3BbV7fR3j3SZCzLnnYRmsPvHhLH6kWrwseVfoBkwq3GdaZQ2dP",
  "key37": "5MNcWLLK6zjLjKo41nVHC12Rp3Az81UBcXU6vpj26wJA3uUU8Mf4nVJ4w7b1oFgsGRZNc8cygMYyuSj6aXpPm7MZ",
  "key38": "4oiiqqYY1JDd74qWwBoDwWv3j8ob4jHzQ5TDp53gaBzWiFae4WhnqEt5PQagGFqFJs8W3WCdaMEk5difuYGKUa3u",
  "key39": "vKhfdV8wUaB7Vjp5yk9W4EH1iqrvyLcbx5iWYpMTKvLoqgAx2c3G6cTsZ5Jz1ycfzwJMg6i2prz8RdQ3ivd2jb9",
  "key40": "2dyXwEXLw6k1QckRx1FPGUXdEUXQWWjATXw6y4Tcq7WJo2pSztisMuZ9YcvAgLiqPXrfN9yQNhk7c44KDMumshL9",
  "key41": "NPj7cD9m3pgpw3uHxrQvK8tuaQtkzCrPayjwjZMoPVZGvnBXG4Di5ssaGVpz3Qc4Rd37ChagLaZ3AmYv4JobWvo"
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
