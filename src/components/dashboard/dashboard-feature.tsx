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
    "5Q796so4FPKGXJtt7aTs4uVVVH4t8TLscqUdGcAVE4gTkxD2epJw9WL8N6pkpNaWRKSwDrkYpWbi5k4hkdcrTadJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VQxhoJ7wtLEAPbpPcVE21U25FM7U7YsYLLAxvnvmcyjdAuj4qwLK2NgNfWXvQCSK9xfvrgSWUq5NuczFdxZLAQQ",
  "key1": "5BG21CwLE7TL2YYyph7S6yNBd5yQwkXjHN9CJQgzknJvKNoEGdCpuN949fA1aWjbfPzSPkoMjdDxZ2WHebEVxsiC",
  "key2": "BXY2QDxgi2yCYpBWCr9DWmvdKDmrbin5dfJxyfEouor8HSXDgoMvehy8qPbjL4m7XXB2CGHXMwYeHe9uia6CUyn",
  "key3": "4CcLbgGVDHmhoBrk9dTuoFQQCoVMBaMrRxZFJaHPvy1TCaNM9dLkY8YtGGcgeJSUk1bQpdoRZ93ACWP6zNCppAA4",
  "key4": "5qpx8YJQJusPgHydmf4qaUCavkkYBnjn3z2b1JXSS8oXh6piYwLUEP5RQgLZaq8A6NfTetiv2JDhHYxua5N7v2Qe",
  "key5": "bCV1Lbr5jAbeXHjsADrjUGFbJzgPUaMieGogFJh7DLLJG4o9T7k9R1p4cZR8x5MfCuHJMNQNpLXMWiUrLCLAqDJ",
  "key6": "65Vz8q4TcztWLU2b9utrKNiS9PdhWXpsSHiQGDYkLKYKdDQkwhwNNH1dChSvvKEDneMLeY47S3KJDKZRZgawoqzA",
  "key7": "3J2YLYK4u7whLCmMigurL4o5ALX3wdBwCkCYQ7xxjQQeuKzdhhZR9ERzrmEfckhFsnB9KgV7QAcnLdyyBSAV4aAt",
  "key8": "2x5dLPREcRnTH2L3piSFcGHih9ErpmDQ9cXPcAfZgPSq2GNPT3KJcSfExh7bDhF9SjWYRpiY97mXEDkgJvfZUNei",
  "key9": "666VCANZ3kDsEQxYxyPLnoPEw2s3ANLzU8qJifivyposbrprxECBYwoV3JKaxJwCs1q4FMwMzeG5RfJCwqzhZDgk",
  "key10": "3M3JVQaoCD5x7BQ2n7Lh6Sq5DobRQko9CgmBubDjDnXNPbQFUWNbLE3whq46Y47zaBk754TjuTvucUBYrnGQC3eR",
  "key11": "4fneSc3SAqRW7jRcdDtMp2iQ77nDaRTsH7iJyXXzTeq1WbLX3S8qe2iyCuL4qrMqpqxb7mUEfgf721vtw75j4GiL",
  "key12": "5CMNZ64ZHPkR4JYUwWSVr7CTsQDAtunNrwwoqBq9PdACwCQWf1mTnw1xQLS6Yak7EnLaW7tyEZ8vh3de9ovw4FpQ",
  "key13": "9C2sHTQC9MZNB5DdrVSUFaKzXUCwmDh76xJVJuXf4zKBkNjrwyPuprjCeQHWZWa9BAMnr72kpF9bvr7Zv9ux5D4",
  "key14": "4eG2fmq9vAe5G1KKgu5h1Zk9rcH4NzeYWz31LHzV5Jcjpr2pEpR4C2ACEyaCiJwtNQ4i1HFnL8v16cY9gi7E4FHU",
  "key15": "5o5KY59JcDwasHny5Ys51786H6ESsupgK2bUaWUfRrpprMiMmWWEiZcojCH1USbqdpkzVADkWbYZp5VSapFFrJAq",
  "key16": "3RXpCJ85LPXPBpJj9r8JUeUMsxajkzhaP2vUGXGAUQ2BaV3BXYMmRiZgxBBxWqRzBo2vJisPoipaLZ3sXYxhAsoP",
  "key17": "3dXuByEZZua99xLFvnpwG1boStSPMniyHh46aptL6LXjLLTZeCfRkPMbnT1DipxqxyToPNC68yqdGmx2QLqFZxZJ",
  "key18": "2yF9fym7kAAJD6fkrzUWNHVNY3VNUVnyHKqRopTGF184uwGLHYKPvCYzLgQ1NKFxtUGLKgY6SphM5zyPiGpHwQhE",
  "key19": "34fV8frY6HQvAqoCo1bKK8tEpKtn6J3WwvaAu1kn2ffgwAHwN5apDR95A4GDmWtBTQGDdistUzGRn72DPsaiXpkZ",
  "key20": "5NuXyjD6P9R6YZZNa9NdZBz1C8P6i5rhX42kXLSr3dWWoCGFMoNWjPxhArT43CARNrqmqZK2fNTnbSLY7RqWqAkg",
  "key21": "22kfBkfEjzRgCamUSgB6f1NDrECTDRAz7MHNGP1JMXTAPYGqBeq6tQYAZB3nahHDGizecNys4XTKrhbHzUPXcYAw",
  "key22": "3CrAKUH8oBXdnfbvmAwj1b6XcogqsRJtZ2BQiUK7HXiayMoDcwEs4PQ3cgpXMJNSw3phNouVSSatitnjuVpHtTFf",
  "key23": "4W7nUzVCs3h5nJzPKuSDmuXyy8u74czNjePv5pQcqrd1sXnArtLbXMUK8gB2CSAZN6JYbDF8Mc6pUJmjJp3SndbF",
  "key24": "TaqR4BZ3jzMfaiS1adBU7zokDgV4BdpHvd2ix4GjMXGKmdF6yFHk8aKYnV2yTu51KDDbmwMJ1XTnVH6bmPedN5s",
  "key25": "2fuqaaL6pBJJXtTA9SmUzcYNmBcioC52JSduiH1dsbwYfHQHoQvttpv83en5LkzEHN7gm5YBHpGYUFHHZPoP1oHG",
  "key26": "3jY7eh7Z8K5gi4YRvsiYUivvMow6VVfBfGE9iJTVVmvn1D2LoVSXPWtfwC8cP6acHbBU2x3JqM9uyJE5hVW2Df7q",
  "key27": "474gjzNX7fU5VPfH3Ek8Wm2Dc4sAswpiL3TnD84yjZFWP1RMJkGSPhzBGTUE2rH1aQKp9jcicBcMohEjdDpjQ46D",
  "key28": "2DVLgetVZoq6LtW8c6HYj2wqtguv5fDoATnBmre67HKLPYcfEMsnoe28JWhjJXfnWR8SrViVRCV1q754sSEQRPc9",
  "key29": "4ATyjmyA731TERwTt3AdLg3M2GsHQT3QnS1zGDkB6pjXjGnYcNRbbVz2K9mXeZhJnUtHA9Kb7TvbwM8whvJezrTw",
  "key30": "LF7csFT2u5Ki1eiFtH7uVut6AnpvYXwUfes73K3MZu3DpQpUsrZrHYCtN6LTBHafkh7CnNFR5AkTtU4maZF5Jc8",
  "key31": "2PpmK7V77UQVV3yY883B1EQck5NzbzcJiA9n4mXJSedJnQB54uxGZf3xk9hGzDgBuedfeuDB5tZoEbtaGp7ffJor",
  "key32": "3Hb159y4KAutSacR2fnf96tpPsryiPW1u1ezoDNHtCDa6A3rASE6ghu6f1R9NHW9Pjece4ox4PkEQc8K9mj3wTpS",
  "key33": "3Vh8LyW45aFycWGV7ahRsSQAXFpUJZahSJ2Q3vyfay4C2D7pjEmrJLjeLrNJUw36u6mLmAT1bmyCAFF3DVwLPAwf",
  "key34": "8gFLY3f7oeNcYotwtCUvv1vcwC4xE3TSy5JzbWAsZZkWZJWHPaUJ7vRGM1iEfPbdsWj2SdPXmUovt7dAv6rniiw",
  "key35": "2jAT8zd3c84ukNRMTWijLK4XyAbf32roFt1TvNo6rpBALvywfLWK98m5ebFSQPhbSVQJxBhRXcjkSRBiJHbsv1t5",
  "key36": "bJDEW1vimP41j74y8exa2jS7DPDUhiSnZmpMgxQuwrvA2o9Sa5cWmAxrkMiUjXx8kJTm7uVofvYT8TNwgtutiC9"
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
