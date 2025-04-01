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
    "3RFns2NWNDq5FE3si8txK2i5Zog25TJ7CvgEwkNXZoMt16d9GzeiP5RyDLRBSY5zH4g2rX4DoUk3WXKVtDb5aFgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mbTqT3hStJExfLm39yRYNJbD7gVnLD8VhLtkLR6X417k1HgUzSTPknZPvWC8GWkXVgEk97HZ8kj7RAcyJGavQaR",
  "key1": "34q7wQ8JnKSa9zLhiCVDTTT4tRWfmsfKgPNJogDkNQbcE4cscRnLzqVGQqcjE7xT8MRdLHh1zihHr5trR1jgfhDM",
  "key2": "4VKvhBLEXWQP8FJjcDhipo4cgqtbzPUY1U5cE547ZFtNpA4z7B2s4WqKx3ufjiRbPrknu298swsW3A2fnMFEkSWi",
  "key3": "xztukYFTvpTwg3sTkD8BU7fMTRFZJr9ViZPw7GZYGntVeE6inxb5DadPKYZApfNecGKp21GKs88xYUPLeauG6sq",
  "key4": "3KNVKLFVvkvDpgjCwEoQSezscf1QriRvcnbHmik3UrDeeVTHMMZv5ggKubnK6366xjEaGUFzCgyrYynZaxXYfdTc",
  "key5": "31b2Uk5QjuQTMmCjVP4YjZVyN7MpZ54ZtFvRdjahmacfydZsnxCbR3xSP32CciUhc5LcX1aD6Futqdd7ajJWqZCF",
  "key6": "2VXiZMaNGb6MsvF1JkXT5nBYtt6Bz4xs9d4V6zD4sLQL4Ur5DCrPtovynLixazUeCCT5o9VyD7hGq5LhEqxd18Lr",
  "key7": "3EupRNZGnRU3Y75azZyQTKBuCLMdKivWNfseQ3xwj48hJou8qSuVWrLCVLSyGpAvE4ggazP4hH59QBMB3obyjWRT",
  "key8": "32HLaReUUHHV6kYavU4HMJCqbaD39FqvJmS8sKyhaf2eJHPP9DGvyxDY2sPZBttkAQYAQfEpFU9McJ42GfL73z8X",
  "key9": "395ZdiAoMFoq2cb5EsWRSd1gWPhC7YuCDHGm7Rbg6EpuprB1wCQVc1MMfriknqRd1B8myrMJYkJRVGYa6XTsFjp5",
  "key10": "yXD8Phhq7i2uuDJHSmYR5fskmK2yjAMcUQrM6wpgSDSsU9rTTVs46zG9LvtSMoJAwoJmgiwU1HgCfpXH5cWvBa5",
  "key11": "KFHkTyuHjapHLQb2upCy2Gz5v1PH3w9ma98AW8w7uyyNEfth9wJ5PYwfykEHrMeMA8eMz1gNaNdsv98ZUbT2uLn",
  "key12": "4aTSkUayq3R2UkyD5cPHPFEDuiMWdzF1YpfFF5DNnLSLXkd22xV2dxgWZZRU2Q5tnQhhnfz5Ky5Er9KiFyVVhvjJ",
  "key13": "4dDKqizyUhftd56RGfqqx5P391w3Rpf5LvmAfoz6RsTtm1ngcTBNXt1wmJ43Kw31gHNctnTfY3CbAPCQHrGEJhQk",
  "key14": "3CwyioQj8YHasNNxNsXvvQtD6355baRd8xKjP7qjAr5ma1mxqPK4vy5sb9ucAiydumoyAj3tc1dCDZEn5y6BVQqm",
  "key15": "2uSxeth84PquMgFzKDePB33m3aHLYuN3vjHm47uxX6dSdnQjAUvpVbzQA2j5fmyz8wNMnB1ERv2xU3txtWeBjFB7",
  "key16": "2BX5zA7KC7j3c2nBoNyjUNA1Z2kcyJxYX3kznetLUz8Ek4UXpvuzrZAHxUr8Vsdn462EdXX5hGchUx2sjXihchMh",
  "key17": "gmPtGbpE8qQNqVYTKXeYNAdzXBuLALt7GjAcDMmH98YsCJVzFdzZQBE4MuGTkmwUQBgfKwpCuk6PswoZJZ2t7bX",
  "key18": "4BzoUayMZhHRN8GLwt7QgdyP9oyYnrsxdqpqvKKCLNouU6SLuWQmigWofF3Se1u9nywUdNYtXK1AiUh3oznDgThC",
  "key19": "2RZkYrCDWXs7L2sdAi95DfX15aD22fTBSwy7YTBEmsGaFcn7Std5iP6n9VMJaA8dbZaRBd11NUUTH7xUp2NTQFyW",
  "key20": "4mVVMCS8Utng2Hwad17Gj19u6in3UyeB5YRR2hGe376apMPpsq8p6gVfe7NEaNBinzb3ztANzSV2MjZwTH7KcKi8",
  "key21": "55EzNg536dgtiAzMwtZk1mBQ4sQ2e8g9sTS863ByoVcwS6ydU7yVBzPtEoV7pPcT8ifSCz7NNpswcA2s8GuqwYsw",
  "key22": "636mzGtWTGaTX7ioHZt93dVixGBHPi2nx3MGHsYrqsCWR4cUfNZoXXtXsahtpuP1JBiLoStJyLvEWvrXd4ZtgDni",
  "key23": "qAhtpemhkEqGqHWdpfVvVBm7dHdkAEFBbs8YwJK9EvrTk8ZNbfqXxDhNiy23pEbornYqmEzgdQCaeWK2SgPsvZP",
  "key24": "3T1nStuaysNwH7RygDpRaUtg8kBsSV1Jm9zNyyXZhPzVFm6oT1QFijJeTxvR1qHH1Zj5hyXr4qUB3NnSXT2pg52Y",
  "key25": "b98ESgiFnDjBmx7H8rgxpwJ6JcNgJrKZbJ9CipXtFHnQ66eiQqcTbbAeP5h1Vt1b5Gws4nopXEukSrFBTDU5XqH",
  "key26": "4dAUuMPkhSAkv7cg2RpkKtDUMzMkC6a13QMaz2ZC1yn3mjtfHdUKpcbiymHGf4jmUotmg5MY2xpC7T9bK7tQYUdA",
  "key27": "4LcqkRm82g8EoKwEp2vEX3KQViu2ayenSfLyBRkNR5TUETVuFNArWzs6tebKUk3ostwvHy3uiozNDDRysfvDYstT",
  "key28": "2owqyUvhUMWtKuXAZ8EWPzRRtQHqPxydQHAenTV5CM6s5eEERtEBE9d3D9V2LVAMwCkhef4GnGBFtK2sWbEFk5LS",
  "key29": "5tbigHNReATi4HGq7GqZbgP9NQEq6pUnUBmCJwTqVnpU3op9n8GWXZB8gW1y1L7FEbbSU3AziLKMcK5xY9pUtNXH",
  "key30": "3HK7o6DZpybvMo6Z3x3Vy8RA96bbDebFA6ozk9ifEiefL3uPsNS6SnP6a9j4UqjLoHawwfDg3zhqpicYKnJ1acwz",
  "key31": "3cTjYRsUmCQdehUX41H4Jn9Ncm7aSXUe3MTo7LzoHQAo7rB7QErz8kGCQYZHPcrrPJY4RBHL33aWhVXkXrwyBEew",
  "key32": "HmU6psL3yY8DZTjiGxfcN45Ck1pAiMS6wwiS2eovnuDWUgvZrDLmeDqwN5qhTiGVBN2JhTGxoy3iPVUd29GcGSg",
  "key33": "1p43pJxoKuVxa6MGGUTGhPzDys3C7KJANHsyRFwkAL3yYzmgsChdGxGPfXGaBXNBVwzvTe4ps8VZb36joALwQ1E",
  "key34": "2E4R4ypBjLw616gRniaSerym276TyLmKWb1kpZJDJLuAGHPFY7YLpDbAdFRjRomDoozz7ov2UJtW1NEZxSH84mKs",
  "key35": "3fhApfkjpLxBYcucH2SfHdAB15kvioyk7byUGG79bHz3HW5GnhXagas9P5ZhjEkQwgnUtVHLfnA5eZqgAP9N5N2P",
  "key36": "2mjAZg4Jozkwxeh9f41oFFP2mZixGciWje51B22KcFnKH7nGSRNXL12x9xwbAJvNXUdpobiNmdDRVFJ594FRQ7iZ",
  "key37": "NVkdS7w53863y28Sk5QnRAifw5LYT6GKAL3cZrXytMQHjX9bQhtPE2zEwATULiiYYWm6Ku46NqMdDLn1UgQ6XK4",
  "key38": "28txvZT6RdRAPuQS3UyyiZRN7QS5nWi2J2Mq8n3wfNSJTiQdFhmbauiRpR2EJ8Q6NRizV2VSdh7d7bmdNs7iiyi1",
  "key39": "4mkTAXd7x2SNB4hU69UHNs7hHSDznQsNqNYcszgBX3zEL9awdifFYE8EJdW67BT4shjazZipenuASno54Ls7pint"
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
