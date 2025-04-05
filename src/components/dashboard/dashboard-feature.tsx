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
    "2BJpC1tL3yNBVKGX1v9rYKACLjkEaQeTqeqQPg3YjcuVMkPArMRzwbZi2P9Sk7AAoVG5K76QEfqpLnn13WMo4dxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pV9aat4cQMrPvKGoZPTYUFmJxMsTdBBHB6wdBBUxrFfDwZNn4VDJJ8qkydRmabRP5x7TWGoZLUcuBMrcnwds64E",
  "key1": "V2bVb3eLvYoYxf7ouAQoh774vyQdReesX3DHCphXgKX1MHEX5jQpBoV8keUTcCngCDCx9FG6qtSe1en3BSEsxyt",
  "key2": "ynEccwjbPc8RBNEJDwhi9TWG9Yh38fWXXiMc6VzNVWoWonJARWRUYpcM96qCF5XT7FQsYD8cBuK6q8Rszq9ZkgG",
  "key3": "5u7pzskQxXLmehARBTk5jL6M1wrJCiudGV3Kiy4avaJSze1KpsgskyWbEj6WqeQNcE3zWGphVkD1UocwzpFgTUCV",
  "key4": "94mz5iiCmxiYsK1t1emT2PHKWdn3vivbFU6txktscHnSA8GFM2kE7RxzHMGUQpHeYgYcCgW1UtTB8Bg1QeowWUs",
  "key5": "bdBTj5ccymgsD1qhZZsUBDsyyJLaG2c6UpqdRnGcoJjtDebeUCRZaD9WYyq6irbqX7X7GvUMNcNKhZHYEbydZ29",
  "key6": "4bqENWeHXenztwXMZxS1D24JkgU1n6kKD1UuZvjKsqyGJ36Bcu5duUTsUmMVyHPXe2hWTzAYSCFvXuaNU1YLjiBY",
  "key7": "2a4FwJRu8v7VSPPvbsU3Cg1zNZyXwzDaDdYUGoF6qwAish23SgtxC8WasxDigbCFXDUPor1N29D6EfkqeHDPygXp",
  "key8": "5Gi96EeLbcthtP34iAMtrGefZAFtnoMqF9f7LRVxmqxn3ntrZukZ3kP1X5m98Zd5c2UxCesnn2nm689RJuGHY9Bh",
  "key9": "48qgvMxJAGJMkktPhF41d1Z4t8BEo2eB6xoCiUKFwWRcbUdAcYFZqfFXizgJbsHUFLpFzfKrtG7P9bfCo8MfFauo",
  "key10": "4Kog2rGntpnLJno81AmKWFNVYCN7JoSCX4bCfwCVKJDgzaCRfkqvCfAiphnrfWZSQzbbaZQsGYSJgdNWGksFEeQE",
  "key11": "gA7jx4Y9Vdd7mm7L2XYP1vWob1yHs1vgPk3iCnWS2woGGtyFd2XLmLTk7TtNHwnSLDbefHbTwMJ2VDgvvQEMH9b",
  "key12": "2Fgvwg4xEqSRJEC5JBS2RZ6fUu8C5KYg6SAMLfjmrwjd6ptqw4nTFGWCSmVfK6wLC49pyoEg6DC3DsWEwm8kQHtV",
  "key13": "25Qzg4KLixQCkyf6x6e5K8idGgECQCBdYJUKpvcaLH1iCecGA2cDdi4zi3NRiZYdb73M2NvN4iDLqc3fvWmJwyKF",
  "key14": "iaNYzrAKBtKJx7s8gUtSyKStKKUCQLhChQm3vvTySRKKLzpirNgfje2hHTsmtt8KWzdvk9tKVLriN4x2i87Wt8Y",
  "key15": "2fdHLaV5JWiSES6cJEFcg6rpjBvEV4bHaMtob9kv4UqtPdADKw8uW5VJajszQsyBVbShtiT1ShyEpQxA5zAx92od",
  "key16": "3S4ReLH4T93saYHmcKDaXx9E8bfjiEz8ftFtCWYLgYJ267g17KsahpZvELjSHYFpZyX9dvMFqigZX9niz5D8eL91",
  "key17": "57fPxZAPE2H4x8THF2VdfKDNAHXs8RdfbmDHyq2w1AQVCs9DDo4yZe4EirNdpa6CRRby9wFVQD4FRFsbmcWUV6xw",
  "key18": "3SNgHsDNFcLrNnjhCHpUgQWa2V4j3Qx6qQ5FFb8eVz1wFr1aswzA7tNT4mhspefsBRwHWBMGLsbVq9STSxNCagsD",
  "key19": "43G5iwvHaoQjzMxRygjAMCHpxwR9whHUcwxCRNGdfro7mjtdf1dkmSBfzvXDVh7fWVQd4fiysRVYFJYcpdosdeFF",
  "key20": "4qPbHnR8npugd25B6mnu7SVGZrvdiW7b5waSaw7DSpTuGsHkuc9Fj6jWXms3rys3MjMgMeakJqFU6nCo1Uou3wWy",
  "key21": "39PSPK3ZXdhtdK6npeodVtxBzWbeVoRUVdhydD4qKXSm23BT5Vh2wZzJXuZ94AUjUDbDSSWg1q1KfQubim8LVcRi",
  "key22": "5Y9eLkBhxrEa4j4LCuurr9bAQNgSMDKU1yRxjD1kTYMBHgrUFmEF1pWY6NNynq5ioMe5gkBmzvSQFAVTGkJCEYr3",
  "key23": "22vgt4jQvRe6VJ2uAypnr7cQkj5nXeesE5bS8a8kfxejtAh9tNSikKPwGVRYqumnpku95SvFvmU8GiovkYz3hEzw",
  "key24": "2ByrGUobA3MqMUZ5qpcmonHvPVHDHSSLsgWoK6v4Bs6Pgc2XP8gJStQczMJmVDnv2vXSgz2GzotDTUCmZ7Pw86gX",
  "key25": "4m7rsqS6ZBtjtPks3cae1hYrGx8E4uAdTk3BBZNP4dKDuZ52a8ubbYPtifi2qiofjriJaDLZjgoWdroZeU6dNFXE",
  "key26": "43eZPPRfHvyyDgxJxDvVn8Lr8RPrtqesWoc7zefeeTuWk2STGbfFnY1wZ5UQU34QHUTLQhXuH7wYzes7ZYxKgMKn",
  "key27": "2xbEv2oSX7oJjdLnKvvzfEmAvSrtkcmbsqGxG3rrhW2DrotfLzbQdYHnk8tQoEph6MsYXMmDP1jXLoPr8kHzY6sB",
  "key28": "5DgQbXhhmQyj47xomZoETjsE5vLui3uvAXbfpHPebjJKaXwCByZcq7gCuhgqkbwviGkkgubZN8udma9igfSyb2Fv",
  "key29": "2eyMSTG4TNQmiqeptUeSkzyJUemzmX8anSmEwzntkVRqKpDftWWC47KSmse3wj27s4fBRbijSx2Ck1wQAa1FLEHy",
  "key30": "2uJ2Pqvqko8MgaPj4ZKKpctmWxzWdViKdr4LM9tfdWAym4Zvn5pmASv8hFJXn6Urs3LXd8xP57unAM6YdnH2rEBJ",
  "key31": "5JufuTHG96bC1Y32Z3P3did97AhNZWQTKu2pnQ7AV3HtLKsU3G3DTbjUhPukoZsZXq1ZAZRidDmye6nVZTCKeeiX",
  "key32": "V3vNsrKBGGLkXN9NV2688uCAEM9o9LKcRPnHB7DhSv4RApdy8zhQBuMsRoP1dQRhhEHuVtjFvW4krN8yAai6EKC",
  "key33": "3Qiep64Y2jV6nagJjgnMCKnbkhDfuB9AXJZpBMZfCbHp6dA3CoJ9zEByBCaDe57BReQmMtuopyGsnNc7thVSQoPh",
  "key34": "66eQJU1NRpDbyhgfQ5v8y4zM5vYK6fpcP4vGdkRLS9PWp9e2FL4jZ5gfgKV3nMXCQ5aKaUrzFLRNPCAVeS4dY791",
  "key35": "3apJ72KY8wFsGiMjh9s9SUgpGyQY1bhbXfULM9oK83xFaB9w5hxxSH9n185GNvMu4vYYGX5sFRfES1Q1Py68cfTf",
  "key36": "64sfY6B9dkX3132vovQXVv7x79HQcXueoY6qoP4ab6oew4GvcXCahWvUNd6GWxMxbn9iLLL5wHc4BzfCq3qenboH",
  "key37": "66cumA5JhG4v71dphQbGC96DAADBrWcZgPPb95e2zPnrbUy7g8MFhX75prRkezraS3VbwLLnDTGPhvZ5Xsin9qwW",
  "key38": "5Fhy6dSoDBUyAQypnoSxGj9asFYgfUSJCkkwaX5KrfLFu1TXJf5gPtP4jAaVUAz4k5QR7BSphSEV2DJpucGdeiVZ",
  "key39": "3n1icqCd5mW5CYuQDxbZJermCnGnU1N4kh9j7nRutxsSNqxqtLTbP6pS25opyiTB6uzWDbNX2yPafCecK8iKAdn6",
  "key40": "4ZsZGHPXVW8BLmVswnoggwLdTYFk4fvYpDWuoq652Ck58Cw7EFRtXn291Q9Yx7aBeF2FTQh7CVLGmVJa79A56hDC",
  "key41": "5X5ePQTKbac9D3GAu4pxRwhEBDZnYTR4Lt5X8fzn6SgmYYnKTULs4NtPi5miraDz7kGCDpC9zaATzkD273XuhdTs",
  "key42": "5AxNnrx8D21TxKM2LAu4ssoXNF4rFNk7NG2ab987YVb5d74kUPhWydKmsrZV2VhguCdYGqG2qqWfqyDrL84JWAH1",
  "key43": "5fTF9eSw4Qaf8ZWWts3ybmGQ2Z9P3wNQqD6QpWNysRbHKAmRPiuwTQERevADGoiSMjXS2PLHWZeyqYhEbZ2S53U8",
  "key44": "2o54A6Uzcs4JwtAPphX83sc8ifSdr7xQSJEkuQxzKuCZDtC1sBPGtYqc3sQ5JRb8pnGHo8K5ih2bX98K85PUfiwj",
  "key45": "2wN6pkimNy7sdKAqKYymqmK1QaXY2nxVn9FUDxBN56H6YNr4Ak71R2Sit712mvGrpVxp7tB8FaeKcFHZvn1rqjvP",
  "key46": "45kuadHG5j63piZxeBbEyZeVj6eB8ftuqL4AfL2Fa4UMXB7hzeMsfvhgvcazt4bCi9Mw69sCBJhijVFtaP9bAem5"
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
