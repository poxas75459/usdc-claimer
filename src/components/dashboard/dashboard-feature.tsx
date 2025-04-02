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
    "faHa6TRx795LseRBJP3kQnq21K2M21febZbhDHkc5XQ8959NqpQ7647xm4kb2NQtnh3Ab8MqnHHSS6W23wcSgeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "htr6WumrGnr9siUvKYQUgLF5yiBy1Z295EqwKckKJSjwKh9gLPDrzNcDZTd154gE86DFCJb6uNd5Z6iNuu8m5Cu",
  "key1": "5qzKhFnbboX9bBAh48wn1jwphjzmYcVqKKPpByJ4t11qEBm8WM1EUyMd3cpsngS4A6NBWZmaMSFLio7p6cfqdpJX",
  "key2": "4i5ChQQc2SbVbkCzE3SBCAKbtTRduVPRoqMpshswFDdCF99WTHeDGdqPLXAyDy75RCTRCZQMAQrd6amtR7MLzrhU",
  "key3": "Un89qXm26eE3x5P4dWebynxTtunuPSZSJ8X4eFFubWgXgqNBDqRtZkvgTw1Vqh6LYaEC1bkhpvDEbe71kzUW8NK",
  "key4": "Juh8P5UAd3amPV62SKkuxtQiYBM8HmDYWwT7XZ8tXkxC2YamV8BxFauf7LQ4N8JAmHJdTAwMN76fquMC3DbrBXK",
  "key5": "3wy9RXVWh3HyF3g9UfW1wTH9qFU49aibwhXMQwpYNPWm9856M24Gnuguu7aEkMaktMXYCMUrfENCE7oCEujqNfHt",
  "key6": "4pko49ocgQtiWVZeWsxpZJTsGd85VQ3NDLXBLasBtog2ap4tbpm4pwS9z1YYjJzUKwCVsVhis3XVA2NWorAhsXAH",
  "key7": "3DahfnWbALdDYSCBv9wFo39SbZzKgssnCXcvZvg3VtwfazNQ4YuaAaEoEnL9HyfVG4kCSkSmyxHJ89t9asV6h3MQ",
  "key8": "v5D3GhuLV5VhLn6sG5hUiMAih9TVM3zyWsq1a5CAUMEuBqgM1EhcGLmNwBCeZ7n8Axz2tdZUyW3fqWcTKSaLLsz",
  "key9": "43x4EmR9mRtLdX7A7R579wWFnZqbaCXwpDJxMB4dWrU7yFDcch8fdCxWEfZ5mw1bPaLbsKpbMx5yupzuFy5YL5yL",
  "key10": "jsopuivA8hxy4dYKdM5rf9LHhDMEinrKzw6Cny8yyeKpQ945vRXJmbNpSq98QJZUA6QD1LzovkuzvQDST79xrZJ",
  "key11": "4XP5jRyqCS4SQWDeuk2k4Z7MxSdPmvtUjfX3D7U7NA3txP252tasdG9AWTGqxvuwBRPStQzJ1XwaWw5Yt3YxohLj",
  "key12": "65pqEGifURDpbRtUP2NETq7fzNbDx5ZSugRPhS8Y9eGYfH7Wpcjd1vbiu36QVSe4RktwFKNi2CstcbyYvubj1Eip",
  "key13": "4FnVRt7uCdPDT6ybVv92txFQD869YqnGsueywhXEcmVzd98Y3k2rYGbGxod1mYXpVibZ1JNipVbtJ1bsqLfHf4Y3",
  "key14": "3zsHy1x7bCwSZ5mTdgxzfbYhGnf3oykUUyvwGYXiHkb72pLqqfbnGMtw7zNCKnQ218Sf8hFKEFFN1ioQwWYvKA6E",
  "key15": "2EUpyw6Fu3PSu3JRDq9t4WkBjJpgAbqLYcHV8bmbVF6v5oWcL2mkDVwzGrAhuDXoyLu4ir6nWFTmJPT5D2jkRMnd",
  "key16": "3tXTGTzkRQJmGiuTdybLFnvmbp6PkWMTtt5M5QYruJQ3ghpbr9ro57vbYwkk3U1zjSEQpyYyk6RtQXcrAvHz2F4q",
  "key17": "3Nn2tLJpJWjwd19nAe2F1xbAVRLeVCadfELnmMMooiTNY7dNLTn3ZYiEjibJRBELYPnPX4meMZBCp1LqzKL9aP3R",
  "key18": "nmhy8o85ANwhH5BAcxDCwAhaQ9gvDb9bEFz5n19otgHTT9ubqtZwiib7JY874z7pbPECtsy2prKvFHUrhKdoTg9",
  "key19": "5cUsrKMYRpP1PwSYqPG356Q2CP5Qr8pNzEzBrtgZHarS2NAiRsVLgvB7GSyHS7Rrwh4NyQkAGwh8RCryhhy6iqjF",
  "key20": "5Cv65WfDf9fNJub5pUVYqYdcdve2oBZAGv49D5i1K46YqAe2KZGjcSPUHbueP9tppRwPSvMymytNdgDA4fGwenud",
  "key21": "3SwwPmyRcFgC65hjteW7xn3ULKVJPygT17Bq7atoXcRXEY5rnRWZyj5pxdW4cw3Edd6WeKYpD75pBZ1qFYyuFPHQ",
  "key22": "5gz1jqyxgQMnjjMF9yJkAJphJQbTvjTjcCTMHToctQRCfjtyqAbznYW2BiLpsAVMhQNCQ146TdX1AkEobKfDrvra",
  "key23": "26p3FuRWEJktKgkjS18MfcPb9equ67DsNheNNnupDodVPGR3Vhy2kfvR1oXy7y9mygqxPTrfEny1gZvnDt1JP22N",
  "key24": "zZXEEkuJkRGh3H5RQgGnVkRapH6DSheP4s39HwSBnjBgd75XYsTD128DdnAVbmR55jJeiVF8dxbvi8zr5m2SFwu",
  "key25": "43DPr7TADLbmRe1N4bu8i1mtfb5RiqPS2GHpWk7HWD3uwExwFfP77vwVecuDgGSxdSxTroThRgHupzaUeZACQkjQ",
  "key26": "2iAWF8ZweRgVamoBDaifaCqmSzc6QoUuRo8hF41Wr2L6kAPkozCB69xNHhvshxsxJvDJoYmKfdoqhXb5nFfP5KNR",
  "key27": "4gnsqmRBCgUGPBqoehMeK3B2ANDrvJNe8yA5jNydmWkLAx1ocgmT1eUDBdSPzGwFWyeBjsGWwZLcZ1ENVo7uzTkR",
  "key28": "HL55J31ThjwuMW8n7vqrGR8WtiBPoXDbtpEcaBj2EPZ6ceEfZ7ypH3oTN1rgSCoMnRDvNEtpXd3XXvUCUisHzzm",
  "key29": "4mYba5zcyAxq7xzHseaZnJUPTqCB377FJk3atXPCDbJ12NX3jxxVQuSLcVRMHkc3t2Lt6M5kipHH5f2v9F5uimLh",
  "key30": "4vg7dPsmwoEfv6o3nD3vTaJ8yXtvVDmVeU8b2Hvvv7qAbFqQQ2iNQUVuf25AvC21pUWxXoKWV2i4fvP4VQqffpR9",
  "key31": "4g4DedaxQXssb2TDoCjKBVV1LJAhuh3kw25G2XC1fqQACAsq9y5NnwAUYx6yWFoj893eLQTvg8u2YsKvQ4D525cm",
  "key32": "3ufU5e4n7SyYdje8tnqBiEVo1CeXTKgvs4tHc6csLRZK6KnXqFKARvjTQrHwL3NWEoGyWM3X1WXVDfdRsfAJ6uQU",
  "key33": "5FMxjQ6ohFbLUjF4LfvHfmVCGtok4eiokDezKsB6Y9VD56Zo4JoE9MXrF2JVmkxzArGfBPxGKBrz6qf7GYgzshBe",
  "key34": "2qS58jKNAVGZad78XGyBJUPkeKNFh482M9i7W9D7sDzBbbzhNNUKN9S9sNk28iYgWMSB9vv6BYE2ZKiKGvm4DFnC"
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
