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
    "ZZm99ZziCcJRbyZjqHPNKSFuWA1ysHvVZr8oiWMBMf8TQpJjGxzdRZQecHs9YEcbHtzPYVQp3A7JX3YQGSCHNgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p45LfmY4akHKC2SyjQRC8szQmtztK7QoP41Tb3LdmAVsRzZbuVC9Xoj5hZhkANzEz6HU9ZER7jqjMECUDQqgyd6",
  "key1": "5ncnBagatutgrHbhfrBZi3erJDiM6oFsLmtFCXnyfE4ETAQJJPmUr3K81mAjnjtaa9xAJxKnjGmwJibNkST3K7U9",
  "key2": "4ZHBhctAMcRHwabNPgRLipm9f3htRPG2BzDDHxmcjPt747YcitfGRHiqdMeqNB8AjvLti3K4JkeCeH3Ki9abcrLw",
  "key3": "4B2DDYrsEySNehcEARmQX8ywFmDKsdhdnHe2iLhw6apC5NmtYrY5yNFHPALwcHZnc23Tbaho8Mxdc1LoeNQCt5G4",
  "key4": "eP46gDcds4C7Mx2CTvVE2GLEHBqaYXW6LLVBDv4C3zMyLGRU4ETE7zoXTXzZMdjtW48dx18sF48ujXyTeyR2YuK",
  "key5": "4WuRnKgKUNd871y7FAts3in79tNJscm5hPdExzvYGHQmLxNiTttHEGNg3UyNGHMV3YorqUjLhKaY1F33oNSMKVkw",
  "key6": "4bU9k4JYCANiUS4V19ZdqqK8zdiiDEDrobb9LG5EjWNPoY9PSPiXdvymv8D5fTRBRa5Zy1pY9fXRifDSQRXB5Lgp",
  "key7": "ExCuUuFwsmeCrxob86NvwYaSU6WER4xSt6NnkfU7jpHfV1PFKm8MzhkPsDX3ZF5zyWxQHK3z8ZWtqwU8wKSdVFq",
  "key8": "5KQJNgiWJga7tHhPvZ5K34hqvqstQkNvQqU3txNRvCRMfzYNFosXNCd1k1BF84WZ1HfnKq3XhnBmK5m69EZT59ry",
  "key9": "bR5fFCBYV3VK6X3ecKcPm8WuZ6ZZ9ssVo1uTVVRpMchgjDSwV3Bmb44TFobSo51FFw1gLbGjKCy2hf3rRd13azX",
  "key10": "3WC7XyVqGTKGtrNdAFouTUwThEUGJcFwmmZehnCjHoio93T1NwYyf3dGibTB5ZiuY8fw3Nkcd49jNfsZymoBAZk7",
  "key11": "3DW8XxCyUer1zhKYstP9HeK2PqXXSWpEwJbDBwCWQXe9iutzgeDGJgUpU21CRRVk9oZMBiR29xPGdujKMrUkLUzn",
  "key12": "3SZCd9a6EFx5W3SZNyTTM58aqpw3iosmZFokoj1h2zBbzxjRZSrjj8wT5XK5Cq4w9CojTQ2znsPEYBoY1Bf7Ueit",
  "key13": "osvnwf9yHrHh132BSWYiP2hDzymkSurDkkQSAbVN4y9XwQRpaPzt1ExFgk9JQXnL5i8nvHGuPB1N3BpToVFsbKU",
  "key14": "5awRBfdgWScwUaDd6hemw2TCY36gAf9VkCy94BJrsSF6frnJs9mRH5VNpcEGTWtBtEERXsyJPgKsbCjyXQ2Dst82",
  "key15": "4mvrFc8hMiRfxun3GRmwFe4BNT3CQUM1j1YFfDDrtYsoW5CMT8pJcHXgbNBubNu8mnFHSsqzrqkibnJU2yAtNstT",
  "key16": "m4qe9JByJJ7KqhEMZb73wHLLHsgnKnRmU3obftMsaicoQyCkZKxGisjwCCvWA2HunpkJbEjFBRrJLSiWtQYTvse",
  "key17": "5Y3eKaQUY5Z8KmxX77ZE47Bkh3WCQYMQoiHhuCBWvZg2v98VZvhwGDL6SoLaysYGkEYA4hZcTuVuXQnTZ2tNrwrD",
  "key18": "5wv7RR92wWLyr74tzdd85Z5go412XoZDAshTbCHeRVu4zZEN1Me7yTjV7asQyuSUzVo9bGqKF1rxFNCuEPZfYgSB",
  "key19": "CQvNLz3vpAJwybA4ssXowZ9BEK77ozuN9V7C4ZZDtzbfWtjFtFnBiktodLZTxwGkyVjEsAUrczw5d3x8Bun8hsH",
  "key20": "JoXuf1TcAXf6LYRUDJg64q5Ez3gpb2qkDg9auehFogSdPBTpzyucmN3iF3tXAD4EUwXRfvBcr9ef5AM3mQDmbTG",
  "key21": "3ivCtQNVraHQUEXtENquLH46xgzXLbLiFiDXqtp5DPtvZ6ZMXTJcshauZBWmNahjCJsjTcbHjFnyUoLVw11s9d8N",
  "key22": "2pN7Dwho3FLLMHtGY1yj2sQG472k6ZxNZtc9tjvKzjTTKmGLwQM2CUnFBFWhvJsqdHoeRdJoP49ooXroJKzpAF14",
  "key23": "5RGFmo38xnkCzw983Gjtwqf4dE3kbZL6hNBRVtuMS9EVaQRueXpYD98bRQfd1y5NzL5CWaTWSsjfSmMjarLPRCM8",
  "key24": "2qDDoZ5ebXkpfMgtqU14Sd8mP3SHe3nCQ9q7fg8Cdh7R9TFwSkiodQySJpetvEYFp53cwR6sisLXB8UbypYRLQD9",
  "key25": "m9YiahViSvRVfkWjutcU2Augyu6FnXNhLxrGi8ydknpGv75ZCZW4go3jRdFNbR4eBk9FqStzVtSke5uwZqpu2SJ",
  "key26": "5reRTx9w7T3W2kXYcMbpvNbiAJiXQAg4Jy6of1LrCq1cJ9CBoAAbZ3eTuqLvcvozB77BKih9FJJUXYNJrm5ZdYHs",
  "key27": "3sF32uoq4sStoxQoM4ZMYJYJutFSAXX4vHKw6UFgDiYBcpArBEG3p9mbnchFKtopG5FwKjpwysx422cEVgRspy6U",
  "key28": "4GKzVeiPLHSFykAMZazG7vHnE8EAbaT8Mxu5jBT2wBuvriEqEYqE9xPYw816G8gAxfiE26vd4oscPHm77Qcvq7Bv",
  "key29": "4u4K8SNzwsvTFZG7aCPKXNPV1kjFmEL7Yj1L2uGyJAjChneukfztxahT95zu3hxEoN33jK5ENHpMcNWeqHpNen6M",
  "key30": "bHBezxvNu7MsxdxW562xrmKBk5CxdsuADLqeQzd6orUwoMLYpoqg7QdWBFFUWGktKSdMFeXG32536HtcKqo2VaF",
  "key31": "4j9tyKQTgdQKpUUAKQ592jMWvJ6933SfZyn3ooVc2rSSkr7M1E4NJhweLYobX6tm6Yx7fVm7GoRFY6zXvgdheVaN",
  "key32": "3AdPammftX8Cv4F5kbshCJyWvg81ZvkK8WLM3FSjuzsH2qpNaaavu1dFvLhy96xCEZEx8D958ZnR4XPZgEBpTDoG",
  "key33": "3tdJ2PUBJMNwqqvuoyRhu7bek9bVphBLMq1SDKD7JVqQJ2SjhGUnQ8RwWBDaRZ7QGh8ZP1YUVNJL1wmdAwiDNvKj",
  "key34": "3GukHjbCREbQ1dgwp3R9TtWChWD2QwZMXPGqQbSHRx6KU6zUKriHVCn4FTKSQMax8xTTaNSDDCywPPYsBsJipiCC",
  "key35": "3yR3bPP9Zfbkoib9K17XFXF6izpiAJ739PNbZncBEXncs3mZTGEZKTugFZn7LemCMv8gmrDvjeoYU6JwcL5jVeCm",
  "key36": "2wK7meymrTHS8WZi7uz3WQ8QqNANwJRB3CjM2UJTfU9gro2q7qH2gE2ZpHs2W8KVz4JMGuWR6u3aBHdJ1RsiEnsC",
  "key37": "2ECyY8tx9u1WjPPqcFaGWiK3CUcNcei6iuwZboFBfWoXd6Rop5k8xqZiLZysJ5JBnXUnkznf9cD7nxk8mf4qzkns",
  "key38": "4PCuBkhejDk2WYeKjZZs2VqHbx6ut6rFga9UrJg76skLbBHQ1yx9bteGMTvVPXyGBMadujR2peHzMfiyH4bDDJHi",
  "key39": "636YK1q5TeahfcdnL4vnF7MUdA8TL2MrnHgk558rYtw4n41yhxjf4Lxg5JbQUGUFoNWQi13paGga1saCuptaar35",
  "key40": "2C1qAGbEjFcHaoUDDZKvcRvENSr3Z9qSfQgyH4LYwkaak6hzjThqCETjKrBdvqxYTozPu78fFCZHqKMrhj7gQw6G",
  "key41": "3Yo51i8VNNjVMD3MpJTJMADSP543agLmWDvfLFKC7Y5D33GDrYneY6qgZ9aCMDu3LzjacJHWfAYJBx7VPaPeS8MF",
  "key42": "4HC1yxyWSvcoCpzqCmTuqgjp6mAUoqNUKbW7Qrby3WcSoWPijCUpmhYkRpqPS7aaxPeBqDgtbacAmfgvyKxL9jiY",
  "key43": "3RdXnu2Y9LdUKgB67p5QdxAy8bQr7ui8BhMLJkBRLW7ddyRXUBPHcGHUfR2Gtsafk1fAc2aqEaU5FB6RjwKB3G9V"
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
