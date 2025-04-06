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
    "4Sw8JRghC5WJzQ7W9pgJYS2JCfhN4kWTTBnztswxJqZ8ot51cUy4A7MS64522SHbeYaFSyu9iYjEoEw5smDmNnBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mb9nfgBDf2E9gQnfhupgqsMz79v4WB8us5Z8ySJqoZgX2jsKoVXtc9QRY6S3iUUkgVLVkdtYYYb9iKXawrEmT3j",
  "key1": "bKTxTSGJf73yD4V9xMpDFvQf3ynTFKuKsirAqFXpfLDL1oe4Za5d6NpWty412sxg4cmyTuX61TZQNGq4RnKLvVK",
  "key2": "25Xq2yb9BFMtQ6Ji2azkaR4isqJuZmdeLBziin8v9Rpy3Z9b16xGPrgShsHggWSgdn717TwBYE7eQ4k1nfTYirUr",
  "key3": "238MFBzUrdurKSq3hWrJGAtgvwp3QcDMKHwuCxNGm9Zs1AAouzihpYZQLe2WSbR6CiCgn7f86LY6saB19VYmXusv",
  "key4": "5r9ZEG86y2dL7jzPVcZUAo1XDpZfea8GYNSLjuXDiViCqHikNJFZ8MgLz42BnY8b9cFTs3JtETDbK9B57oztpo4y",
  "key5": "3gHets5dgHtrvsB2YsFRVnXo4nMfRP9vEiDTGsgqmCijG9iyYgxVfVG4KbeVk7hKftCCPscbDQChxM1XcHs4fSWk",
  "key6": "5UFhzWFjy1d3h3XwLc93SLcQdMRaUxuHveNDQmeyBgfqoPhpKcqxYxcAEfbevTvzRjbMaAJth82NFXo8rnf8tmd2",
  "key7": "21WGyGJ5fdp97Uxmb2xp2gTiy1q77h6bYnj94tdV7bfk7hXX17FuhHGXZXCGHFRDwFXMzqEd4iq9hdgqDsqJanci",
  "key8": "2VsChChFzaFBGJD4duKd11Ds1Qru3PfukgbKYQQXF9G5t21stiUdFdd24G5uVixTWaqSeyVo33WoBcdPu594bJ5R",
  "key9": "3RjNm9en2Fj2wBBB2ukCpwvvGHpYmkfuoNkwwZM5JsNiYQo3VUZ5nXKKTQSoH66EB1R4hceUPpv2sMRFfSAA9M4W",
  "key10": "377bEasp3KQPmKuketF5tFvAuEpsbGibBBq8UAj1ENiM3kAiyaVuuushtCP66cSyg45Qnf5wcVUcgz2gVXbmmsoQ",
  "key11": "4nheBLnL18ioDMdHCJAiKakmfwejXsNRMCNQaU7vpqzUjUYkT7DxAz3z5MiEfmGEVkN44duqP3KysvWNEQNhzPds",
  "key12": "5tp33pm9QzwT5NBEvmLW27aLgY1Sienzzrr4y16bKmaMsNJw7UwF5cWYqUwzWd5WpJVMgx7vw4az8729bhzXrp7R",
  "key13": "4pk7RmPvTL2aUFiULrSP57sahbL85yRupbVbpzFwqYtPjBWwyYxzhrTF8nzRoS1DCt3PQeyQ59koHAqmtFULktsd",
  "key14": "2raoDjHstJ7raz8Phk4Haqw5C5r7qczKtxnGjW9nmAFdsLCCVB5va5Se51TbqNZgZ2Mqe4xkFEFhpRBLtucxwqNg",
  "key15": "4hQphBb1PJxJKfCABMBynKWsHv9CKGsrbEPM7x9MxwYgxnhc6UrTUbwnyUFziE59LhTNyk6AAFUFwDhGsjpLAngd",
  "key16": "2aXh7hoyaWqLAQZqzRB8uPhvxM5jakod3D4QnC9H1fM3B3mgUqRNJ7q6jiZgr6tBYT13jXWhm2PFa8MthGvDJno1",
  "key17": "FJxw4H3WmxgVqREHuknb6aDnzYF1DBEuGC82SakHRpEAWrhZhGsHCWeitXcJArsSHSM2BxCHTL3ef1GNtssrwZs",
  "key18": "2RKM9eZxC9FXnDsrWFrUpJyp4khAQnL1JguFLPaURxpHRRBRYs8sUujwquNS93g8s44WP2Cn21L66hueE6b9pPMH",
  "key19": "64gkJbbgHXJVfZ8dyhLNU5yCm5c5vfZBH4WTnDu1FD2GrGGptJ3kPMiEkJhjSZeiy7pJ3s8BSSgqNSA26awV8MHH",
  "key20": "5BQqEo3C7dUwrUxkUVDKG8YhXku6MyWEUVAUgWjByU436kymkj6E4uUVpBKmdSHd5eR7sKrhdaCGCVk4p3WdKrEQ",
  "key21": "3VuNLc4xvTDMwRVayPR9VDiKH1RAovJB9jTwE2m4topCmjqB8DcVd87fAUv4fuTjPa75ryph2BbdmGbLTC2BkwYg",
  "key22": "5uHvuDuAoeMbo9PgM5xoJdaBKGBhHFYUDVvhfYx8B7kHdE8BnkB3iE4qu9vPcMd6JcQAq2cJg7Yq2qaRJFxDr3ZJ",
  "key23": "4UAZ4v5LZNhfrHnsdQ5TkWYzKNQjD4kAHgt3jFkSLMrxziyNz7uDs37aqc6xvb2ezi6bmvryZ2sPXevL2yrBGFMn",
  "key24": "2wp9QWQRxm1NnGzWW6HTMGrDPnfwqdpm8EEN8AzhDA3CtEJ6FpYtMRKRMdjXNhMgPUiwppEzhKNTP6gcaM4uMpXP",
  "key25": "SLgxWqREqDRJBAYdjqwGY3EN518c3gSBaWQbKktfHtZWemcqgHZQPgjTuoMfac4qjJUfafkJUpQMwY6oynFXR7H",
  "key26": "3G939sBFLDXS6eyFRcvWghm2UQ3buxJkogAFSzVx8vMJpVCtABExo2o5bShtWnADpujHPbZqpwqCMtSG3oYWSP3L",
  "key27": "3HknagiF4UJqtkmYTHaV6nshwanKuERC171M2cSeZat5MvjToG4WwWF5vrsfdjXFpJQBogez2xzK98AodDHZPUmK",
  "key28": "eupR22ou9wcABigHKRzvFDJBevJJd8gFT4PVMzTLirC3z6FC21yoc3uaKQtcCxTsuBfYChh2Vtx28grwjVmaCKr",
  "key29": "3vMKhtwzMaP4ynUg9xm72P97KgmLveL2ZwzKswxhCaxuPUuMfqoQpdVrSg3tMHyiL3xC6VdmKZvriMVPsk9xtHMb",
  "key30": "2ZvFdLzm7CDZB2anS48LkKeiksUWRWXNbm1scZGbwSyqyP2tDyvvsWg8h1QCVAssUKd2Ls2XFBbnyK9pwXijqyU6",
  "key31": "4TyrFEvaxd5X9cDQBTF2ssY246ybyengXEXySkCPsMB4spvtoJLQyHHutRabgfrb9b2GGeRSUvU7BfAyuV9AwB83",
  "key32": "46n5ssxcQEQrfAnxUYnZp4D5yhX6AX6TyzrStuZjtrEud36uk7RCZm8gHZBitrENBchCg1UYmGAQpH5iQnLkPv2b",
  "key33": "2v4BqdXdrU1K2TXqqrxdrKjLjXYN2ChYJ4FYxjiCnuR1iLewfeA7KmCMqi1foW5XyyyXftgc6MBHe3sunAqRrd82",
  "key34": "2vG6DaMoZaRA2LUqMRxuoRDzknGYXN4Up65748B2wVGAwc1rRGwhm3JkRtYLfixhCJ83FMAin4QHdyQWZ8SB9tCs",
  "key35": "2r8aHTr1CG8HvVyb478Z9xgVmNn3HRQhQEk2887zXUKjAqtmjo3edXrDQSzgGqZ4wz4ieWvE5RzkFLAxcCDTXY1",
  "key36": "4k49HBi2SCLHLbdBo24S91ksGBGKVqqRAG6ftcTSJAzRQDAt9qJh5DuMdLK9aAueuf9yzThyPJiUd53HtoAhniHy",
  "key37": "2yfGH7zM9jfkahP41GtqrKGf8QWJva2Agv8hTnRNv2DHKqWQcCUeN4qiuSwPCQBsEQiMsYbaZd9Gog69HFPAwwWM"
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
