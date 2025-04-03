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
    "QTFS78P1odwBvxEs46wnCXjoJ2TTBDViUwWyVNmiKBRfGBzcx9DLiHbkyDiMMQehL8sco2NiHSaJqnGkZxj2Fyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfbXjYbN4ZdTGratH1aKW6gNRk3C7kAimBk1m4CgPH2S6semoL7ueZ27gHZ5zVY1ceTyPUt11Mm74qdYd6cGJDK",
  "key1": "41yw2HQCHYkfRNvpEmT4UPXyd4wvUxw5j9Mq7iWk5BqXrjGUjQku62BeEvjbLbbdZ1Tc3gdP2LrtpcbV9FqVAHsg",
  "key2": "5LBWszdgEZgEHcMHeE6rqG9MoMivnRqHiZUnrz39eKMbc7rnQaicFMfUu912egCD7uELwBsi1LpnSfoJiNUAnZcp",
  "key3": "5yuXEMjRciys6rt9Aq21RKKtRDzu82ziumpAxsKPNyTQeCpnnm3WktCVtvnLfoU82fE48bMA2oUusV9QDp235HP",
  "key4": "nxco33gPJ6WN7dYFVZb5e1GKG3MnzE3hha9DqD2vqYuspQVVtcKspimhLAX1rN5SDV7uCNRCoASYfXxT8yVLNik",
  "key5": "3MzzVv1qeU4Qs2f5zmz5bGnTmj99bDohcYq8oZFXgjQD4CHsdzpJqT5m8HwQCVzPUrsKqkJgf9rY2rwuKjngKTdU",
  "key6": "4oyqdfDqVRyfhvMnunoWzADrG5ZGSLkx7TxDtHB2d3oEtyhmYKLUg6LZitzdtP2q3a1FqA7TQR6svfXgaSWvgaHZ",
  "key7": "4kK4VvEfG2PhQZanX1E1Wp2QvrpCMXD6xcNywsJwTbkGGG2VpXj7kzzC6WeqfK2fBnbrYU6Zp8j5YN3cHSm5mDQU",
  "key8": "qVqG8XKJPzXu1cXaojS3qd8fwBfgrs2PSQmFzK4thEcAAohQBJvhL7Xb7EFS1TJ1ciYdZKfmyMpy3XLKmgqo9XB",
  "key9": "5KMb2HuoQHZgg5CLCB4e6RddKcQi7SMtCaaRK93Yjd5V8krzuspGTzSEXSAiEfJiKkSCurqNkgWLFndMo2mT4isn",
  "key10": "4NBEPbD38baEG3SG3cWBgnaDG3JEjSSyvhQMuM3RxFpsf2oDEXmToJVUCuBJWb1uwcmkTPeFKQx9nPRih7dUnobZ",
  "key11": "3KHmwgBpegSY9BjRe9QXPUAU96Y684givS4cGyikJaFt6cq12fwChkM9LCVzHQHsRkpFnJVsofMyiv9b5CxJ39fh",
  "key12": "4Ck2WQXYbVdcwbo2t63x5vygxqR6cMxCZ1pbY87UWVvKNPdKQmQ8gAzHGdXXyPDTM8zVbR4zrkLfJXFvfRAteuiN",
  "key13": "3Z55pbYkXYjLBdeWhHwjyGdKQMmXJuDvxzS2WiW7pbgrgiqmk3GQDS14soop7peZ2Qd7KryC5KT8hZjdriVyAq5w",
  "key14": "4X2udhCbLKZf9f9hWMq4acaoXZZwJZ3iQC6c1ScY12Vi6Ey53pMzkHvcnUwfUAG36EBBifKRveXBCi9ZBZgW3LCN",
  "key15": "5sVcQLhkLB3sXc9B9vc6zRdm6cintFVba3aK6aKLPtqB7VZVArXhJnMDQ5QdZBpsVVoAsV1RLYWre7qhVcJyHQ8M",
  "key16": "4Y8GiQMdJj5WdpicpqM2uj3Woj7RaJUA6w1AxdbuoaZRmX76m7YMf8PCh1Vdg6aqXieBM3mh8z5UWAtEcoBnb7Zn",
  "key17": "2K3odMELHWVkpXwq2ojxAqsEcw8roBxCKF5ChpuTtLjUYefrgMLUs8Q2NoX2uHFRTBBbAdrEtw61VFQuG7wmnKth",
  "key18": "5hKM3cn7Q2wxYD8qHFEDj9aSBbVjgJq9HjJQFr7QmrzPqo4UMNoszv5qL61gTh855SKcStW7rSXiYQhwEWKHMcTu",
  "key19": "quQmcDmGvk5C3X1r9apmr26ehQQ86RqTRrYoSW5oxa1GvkXsunuELBv5BduKYJoWYLMzQPaQEAFLJicGs9wizvK",
  "key20": "1B9w5RYMGNLDMkhRtRPSrneF7PSGNcNFZpaUxz4N9LT1d8YNVErCu7k46eC3xAdKc7zBxDTfJg4cHL6z23ivB3r",
  "key21": "2VkyLpKXNNuhRZTi1jRxEm8NgL6tNiZNubKUYSTNZr2WBggETXxZ4UJpjv67ECFFfmLXSqWAmLgzbaPvVQKmNdwF",
  "key22": "orHJcyAYDNUVPXtzvbDjT2V6Yyy6gziwkx1Vb8GNFzFdNxhhBQntYxNeSKF7V7a8Suj9zepDimestKjupr2QqzW",
  "key23": "BQG5o8LKc4U57X3t9QbqZHkRmevRj2YEVgmaDLjSJukMFdmiGx1Kr7ULHH7Li1rYKdrutR5w7wCWBcRUVPCGWBg",
  "key24": "4rKEWPpiAn3HL1PybGje3sUeFzPRsofo2haEFoB6i9sjtbYpAbJoD5NSwmMk3RHL8gvveq6QX9a5jXpvHMz5tqUV",
  "key25": "5BjG1xN8FBvRbm8dmSh5hopNGvxgB3NxViS31iNMnysgLgGB2JC6cBbPFfEraJgsL4a3vMj4UHe7Kmo9H68qmE7Z",
  "key26": "9p1LRLTsLVbnXarNEw6G6YopBL6YH4rap1pW7hn3rKtMGb9o9XMXdEnDBkS2FuAseRE7mHPLj4RjL9D6fsDjQXQ",
  "key27": "58dcAqMTPnoM1Vshk6yEqAZAxLRMnUxXmqtcQV1ftcQFbH7turE8LemsAL4TYYnLiSVRJAsERuyBvvekgVqo4JQ5",
  "key28": "3NHew8DD7tSz1RAqVcf5HiELQ9kpjtARoiMAescAAWt7296tGT9pPNCbRdbnd1Da6cgyQqcbJMRCsAvCdmabEaz7",
  "key29": "4C6SESskHVdGiqdu584pcpyVCqe4ZUt7S93vGwgRYK9EAoEWXtaoV6zqCNyYpCyJXUqghAM5Rmp1WeSDahKRxwsH",
  "key30": "TLC3MGegPJjaLDJ4GZtfxTa6cAXz2obTet2UuXumKNYVkGkhEMg4A4rSkacyi9MRdRGKFBnA4ZvnCvYbad1tWSz",
  "key31": "PcSJ23vpyqsTcWQZEuqqCLdUBn2Y9QzWanbUjs44gaHeWH39BChjRDaJEqBXtU5NvQ5jiRLWUSEAh7rUFunrHTs",
  "key32": "NChWK28TiGLgFaDLCHfnbPQpKhqResefXcVrJn52V3SPhpf9V3Rm3Wrt8V48AJFc2RUSsDDGWB7RDgEMLxDFwWv",
  "key33": "5xhLvJfuXJ1obes5bnAftqEaHzBnFuR9cXhGQPRA73VERS7SHJGUMf3G4roXsxjHBNBXYS33ouAKeEF8iPvah2EE",
  "key34": "3sxSgzqnNHSeZ9XSykgDWvb8Ww2RgvZCXQHNnSBP6N1cVWjyVyduKoBsavSGpWr19Hwb3eMiaFN2pUdSZ8yj1UBA",
  "key35": "4ksJoJsSEefWLZBQdazyN712EegNAnMo6zej95SVnDA4BR9FYXXd56PdxdS3iizrfSksHwfWwjFgxYfTntfksF6m",
  "key36": "5SUsCtQ7Bs8idi4ai5c8A9jrVq8oNakADjKF51pfsWsd3LWQqzHtqm1tQQE4LB5RsdQknaXmbeBrJNYwaoxVrNb3",
  "key37": "gPAXDCyw1bxGb71cuVZZBja4XENGxLDS4ksjbnaEg44m3kb1YHAhMDUcKmu8W6P8TAPJ1wRr6s1UhivSWrgztK3",
  "key38": "25QaRZRf2gWS7vdDf9XcJBK5J4d68WWKLErvmnGqsnVUa4taVEbPpwfnWPxxSLZKn7HvBsMRYmAXY1AW45mkNGEa",
  "key39": "E1N2AktCNNgqvsSKgXE4GFVxRSfCR2rh8Qv9LY1jF8LyrQtKQTfpsVbZh2nh7SjzBuAMBbNDWDHC2fvpoHaW4gn"
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
