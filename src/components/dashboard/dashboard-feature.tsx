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
    "M7eAHtk7AArAYnunaYiEdedTE3EQaWq2v9b7xgGarDpU6sfKwwBwd5T2uypPsEAzsMgGANgp4QbSFmPcSXwn9eY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KzwEUR9twaY8TawMebWcYtHKou1cD1e74S55pKoojG87a49o2ysZvs7fbpe5pPQ2Mv3vdUDd9S3xCgTu9gk1AWa",
  "key1": "F8N6NcR7dafsFUtxg7reP3vZsaKnCHCmjDbEbvCoJxLWWhq8HAEqtYBQS65JDdnxRZCGxRbauzTv6AgQcS2obtf",
  "key2": "2yjbTTwUSmTb4ChynL1xQMGEL4dUbgB1ex5WJhuAhcPcEbGg5BxzNrJaFoAPeewAJx6XvdYehkRYbWLgExEXkywo",
  "key3": "5Upi9uMb1yV6Cw44qqogKZrcbs8WaQBSuidNKnXML2ioxcnTgZ7k1pStNyX1uQFzbvtRRbhPo1qPqRUMZgrGdVhi",
  "key4": "3vrndi8A7QYyStNP48tE3xmD3krJdZvqetQEismjnoMQygXhL8ryLNFMx7s2ywMJZZYNUS527u99xTuE4Vqv77iA",
  "key5": "3JJecoJDrBDqP36aMrz7rUwt37DCXjTibEvUPZLGAivHS9SioCRfSjd9xPoEABdVbaDhKTfYZvw6AtKpqd41eXGf",
  "key6": "28YajRPHZStkYDcAa4NbVKUzjAtRnt9TTs3BVp53Wm6qL7uSwaeD5jj2SvJHzzYhYBr5ccZQC2mcGdF51LPDh14b",
  "key7": "3aPrLeSFYT6R9n7hRx9dJaVsHUExWvFaF7NiQt2X8wdmzXyPoKpWxC5XzDYcdJq5bmogJrD5SW4hkzNomWZcVJSP",
  "key8": "2gFNMhem9qDxD5n2QT5in6GtsPMx1v4uAGGpq1pUqfBYvPUMNjSP2nifrXEVFMm4U7QgAqvGiHKAfYxUS9CBLaGn",
  "key9": "2qbQ3op8jGiJw7ZgrXMQCPGsEzfjzJFF5uXcAq7yqvRG1QWoBYxnDuj5YU3uhmNf1sePuJEbEdsxEV8iYre4RH5J",
  "key10": "2PNC3avFhgyA3apD8itD6PaZMNJHPLUmko5NLpx3tytHH64b7i9GPDUgrj2o3cCNKZBGMwo6PY961ChUemsyneuC",
  "key11": "2rMpruVp3mLhtW5dVhFx5XxAt24oe3Z2bv9oB9M8N5aVtyjracsVzeSRCGkfSaS2pWv2tNpqoiX3Yv4nbLD6AqVy",
  "key12": "3a7mEyVtbHyvKtaYCqmLZMwakbRm5nyhWhFxJjpuWdgX3Rnx5PYefoNQpJikcSWSEa87wjTBJswFPEPMgYi6czLD",
  "key13": "3m396rHsgVxeyR3uHNPtL5Bh7j5CoDCpAU4TfC8KcrKWV1Q5K5tcbPtiqXw5BxeC8KMK2nAMyQvF6EDAvssuPbRr",
  "key14": "5QEQGMFx5EfZgA5M2BS5Bs3UBfASdbxbbhLtCN1wDrKTvCapXgE4MT3QLi6PXVCL8JzPjtTxjfpWmCNFyYtuaV77",
  "key15": "5unCd9jMoxTk3iLpfcNyp3u5q14gFKYSqd2WutRD2nkQKf7oWrB8jsZohU84AFm55XBzoku5m6FTS4duh5oPeE8g",
  "key16": "2KrK1Ke718d4GetQcNAsoqXXsiS8eSAvnkHfFSv7vbdjDrj3woJtRa6UFHdKBvaT2vQ8pnjveMgwvLzguxz4GRdg",
  "key17": "4hQNcKAhjcZ5zwWCzSkxMGR1UU94qum8gBw6uLbu1XMSsDw6ff3HMFsLHGX7sVMTizBqWHqDeZpvdAvRnZaKmZxK",
  "key18": "2YcQkbK47jijiasF2EwLdxHCqSJwMsTsUHye9pgCrpGUADj3QeXVUrUAnCYVV7FtadSPhVHtYsZHSG83gVJ7pijZ",
  "key19": "3yRTHiELCFdhznLn3QvpUKbtVXy3whjuNF92pfqCN2LGo2xJrdeEdwtc7DQFj8s4qzeAGGZPk2qnGDPZn9VNkaJn",
  "key20": "5Lr8VrZGGLAcKASaBspwx4PmPniUxJMx78Z8ej6mncFKNWq4aYe3dB3tZUGCzMziq7TJqyyhCAEKkdd6jHMMCDZ7",
  "key21": "41tpmkJmsgtEYUUjQCH6p7xbyEXhaQc9WX9jQ2W3ZT7xu9zpFGRzKoFAFJ1uCTqeby1AG5Jow3vj1aUz4z5Rv3nA",
  "key22": "2kwFUTiUS8CHCCCvKn2Nb2PPzFgnwwQf1x2vvJGooSbAc5QbicZvhXnbL4jroXYhavpCWG8ZTWNPzGXv8U489Phz",
  "key23": "63UWkXSVRHzP7W9nm947moQ6NUpgPFju4L4hhMSdo3Jk92ZQAzkRHkbsUzywF4dSJrEUh2aCeJ2TAZdn56uqLh9v",
  "key24": "5f8oTRQV5yBwXnXxyWvDotgSzDmqU4RdgMbJpnBThnz63BuNSnxEdpGa1RBuWHtAFzq8wQgBmFRkQuV7EXyXsFbM",
  "key25": "5qEWJ2b96SU1EjX6Auuc5ixbT2PiGWe3ENkaTJ5AACSs3X6UhrQk3gPH3Tc4ABmCDo3mLEvf7sTAH5ZvvfeiVkjg",
  "key26": "4sBa2H93Kvtir8aJMWAA83jMF3cBS64iaXB4Vc4yoFpxEUgoszyYMgDHc1D7WQaCwxJ8U4H9QNHVFXdNtBjgqCpL",
  "key27": "2JFoEhMkpmnuvQjaXqPELQ6FQ3N5aYP94EHCfSYjteWFqJVFsS73q4F3DRZPd2vCKMUAYXvpwxcKEw5LWeNAAEne",
  "key28": "3qpqX4nfLrXjsf6e8G5NPL85gkoUUQMFiz6YtQpNm8HYDhqxzvkLc5inh3QoLMwVoT8MnXUbxqHMFC7UvM6YbQvY",
  "key29": "59iMRQyBb3XdgjRc8T9cXoP52bVz9YXQAg6Bw3wGimKxoniiqPGHCnTc4GHasAa6VoJ8FjoBV2gGnZZ58STSM3bP",
  "key30": "gCPDusfH7NNDFWeQi2XRr71rddB6qxExf7aDuAmucVcJ5SH5Vba5x4KASMPdNJPzBSLdxyP7KbReSUBG3nWbZjG",
  "key31": "46aKrMH4169JEJ52SGtE4V47dprEc3vpfawsSjHZ8Eo62xvRLaVKmTGKzNUDd3pGv4DNebaBZuoW8d7kQ9RNrQfg",
  "key32": "xMAxS3VxiZ8TcGDByTzpyfBxA5ToABe9DrVzAgpUseJ43amRmUvA6HVtEZyPXGEbTuhZbwy1f5FedJqU7Jv6b2m",
  "key33": "4ESgxXzJV3oqt8d4CiocXUfDxGBZAxKxfcTrW8ZzzYQsychWRrhiDHFh5PJX5FVjSRjefTeVMb48MTX32w3KZciY",
  "key34": "3YefXa9Q1YZKCmj9mNDqKSf1Q5zfDhGrFDnELJtfQPmm6BDdXXobgtNViohhU5roLLRpbibtMCTPJvKsoJYZmTYY",
  "key35": "5ocAXX3AACMDAeLQQNnS7KuJy2ynbc6CRyJHgVTzXJb7zYYmEq8h1TyDRFVk1GyvPbTEVA5vUSFcqmd6F55ufyoP",
  "key36": "2z7wVGT5jgEankziEmBi8hDEkPczF25k59EzMUVube8mFEP2uFQ55C26HhqAnz9BddUsRFoYhd2PEXKTchkv1kcb",
  "key37": "z6BF7uaHjd7jk15ghVfRTKhvAttp9ZiwwaBpsn6Fseq6UJURWHqfJPAHp4wLEgiG9gLSNaJydxXG28Vyb6Bh3bR",
  "key38": "44Ytx8vj35aqTLcvotowCwoiLTBthXbLTXdGYWSTDLYwVuUT9MNw73vw4s3TKwZEuc5jCoetR2cXchz63QrWHLVJ",
  "key39": "55iq81opMacthgoXHZS4MQEsTqSeCSJyCtfHVzMbvG2cC3hfKMXk3b1DNybZ8npD4FMurtzRSgcmhMCrYknCGbYW",
  "key40": "4GBeUXw7L7WKvMw9B3QNvLezJJG8gwGcVkr7Ym1VeuCGWA3g2a2hdfT2ZdyhwzNKjNoA7BCteRJQNGzDeUktmEVb"
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
