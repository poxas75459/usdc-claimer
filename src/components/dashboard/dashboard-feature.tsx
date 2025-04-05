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
    "ZUzA6kS26uruU21pp6qgNMMjooS6eV5Qu8WiEWpNkWK6EWSCCuEmkPrpqUg39nZSG9MP12MUbqts2tRoVnEsf6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHfycVBk8fJ1bWEzkwSCGxQAbLzXQhPiQL7JqCA1Jdqp5iLsaN26ixmHCWQi8qGqtszZ2ek5okEGjtiAi7wGBRA",
  "key1": "aCeBkT9w4c22r7YxQ63UXqfmyRZVY76TNb4GEcmVgQnVuX62LRk5E1UeoEAqsCCQ4ZKRxm7C7DRWEYzT2HwicfU",
  "key2": "5bAA6LUtRySMiLSirvpm78KjMarcPQqpGy25NbPBz4fmXmW9DjCiuFYH3j8sLhbaXZwDPKB14akYyqvZKQUPnRcU",
  "key3": "Ey2WZSHnuMmAJW2dHqxt2H32D9qkU4uiYyp4AK3RqtqyxP47HGwZqY312w3VEBUTTaq582vYg6Zvgi4NxjPmSvX",
  "key4": "677KfHKSW8cjh3SamJrChwoNMjkjAPGNCkbW1PD2xCZuqeXJDCwNeMYXvPBuGgs62RFfyNVQCPRtsgcFviJegv9Z",
  "key5": "5WWPfDhNVJgh3ZdCRewPRFNp8Dx4oUjfsJe3qrmmPk2KHXgZwFrEE6s8AfiWtcBAUdDKRCTezwwq5kzUW3osZrjn",
  "key6": "62FDefaRuoZAwPhxoT3ionVV9ZHMoWtVT9o7zy8eKm4SJw2JUy5k6CqtCQsF7cLVkzwfPhDwvNQfTV3RvaKqdkya",
  "key7": "5twCHQ6uXZ9abmPmhhTYse3pi2hrftNFrNmzhdXtH8sefZBtX3Sbotu3NvUMPcaWpXFNLoYiW4dpzpxQwFyPo9ur",
  "key8": "4W3CZHh9ExGTFqdxp5T8JAAepGp28wQjyjAX9Dc3gNZ9vU6nQGnZcApwDEmoqvakBQtYvEZSrPKAkVnE7GMBWC1n",
  "key9": "29VXFotMre8whBjtYbUVR9BqZuarjhF1DRvzJ7Zt527sArCLjVa1ydAJsXP8A53jog4X2wEvMfiWhAMynJpMZfwG",
  "key10": "3DtLzrsvkqVCtL24EYQKEGUFNBk9mZhz7XLxezxFhn4Nz1DpiosufBkBoP6ztjeu7PxQno1D1Dqq4VejnENKqg9p",
  "key11": "2Nez2ckCgNXSmkRActy4o3A8wW3wxcEQRwfcEfVXXDgpLHhH2AWm3MutM8SKpp9miuRoUryUuUVnaoEES3XRhwGF",
  "key12": "RW22W5FFrhhHzaqWFrg4VTLshMKeK3cAsboRGmt13xKPTdT1XkjoEkvG6WRnE2h9nQ1UVfBPv4Cd6nGdEtYEkrG",
  "key13": "sgXbGMDFWYpLo8GehmubjhPnKFDDSnQn9ACRkLodHkPDN45TvzHu4durppHn6Zhfkagt5ig2NLzCnADbBMxBZng",
  "key14": "4qhuVgUGPRhtufUVoXvhfYpCcrPgxNQcRphcuHDYH4Wv8E61XkEXiBuReBWNnJY5sQq4H4F6MQAZyzTYVydvw8zq",
  "key15": "4AxwohAtVifs8LwrwL5abBCfwQSA5i2iafo12GhH8Wrjpn42x4vYFRwmmMRveXCDmsYmM5xQ7dJGgTeC86Sf8mq1",
  "key16": "33TPYrh9zXTDDyJ8rNcb9oL1v5uraG96iVJU4DSfEmK5sPJuWkgD8LNwN7KzgCPcwMArMcoaNkiBCaN2uwRiPiFc",
  "key17": "C9VKBuvDCcCz9YD8EfHXUJ49HgbSoqWtz7ejwCMqtKqX4sWmNTwaFbCuWEockf21R4RGcmurjTzgcmJKYmERHBX",
  "key18": "HEaDYXTCcGmTrZBKFA7YeAoECZ8auTY7K7pEp5BeY1tykey5nC4s5PAj6JeGKtayJoDFCkhCokgymFyc1FTSnji",
  "key19": "LqT7Zvyg9GSuswZHnwi1mwBBLbXhyYRKAN9vuejJopdQ1TVZMm32kp9QMz4adFYiJXH5MgGCmSfVgCkmy72R2oB",
  "key20": "3QF9aePpuN6KAx57iMw8k2pcdnye3mk7h5a4NE7y7HvWKpCcVwHw3XWqw5Fx2HYQERrkt3KdcqZm7zMf4qaJtu7e",
  "key21": "3ooyVvUufB9VFzN69d6UZFLEXyGA2xHQ3wquqvpGAioDbHAcXCEfqCf6H5MBU5936dEBV3vKVCB8t49iEGqK8iQt",
  "key22": "2iUZLP42tyRNHedwSZFwPwQ8iG4d6xNQHMMPU88bPVELW3qz4qZqXH2MYdM4BMPK6Cet1sA46wmYDMB27iFFquuM",
  "key23": "3zrKkod1Nrw7yEWCefYuWiVk5nvcBJ7NDk63XSxSpWQGjenmqa5MTcuGNocvNJoKxSCx5YgPvH8iX7zyuW6agBkR",
  "key24": "2mB7UMcye3fKTTofmU4BNQ9o7EEc7G3Nvxr8aMD5tR3oKQ3jupqzr9D3ea8rAbdw7kHvxaa7hV759J6xhQXy2Rjs",
  "key25": "QA71yeFWbr98GY5s8pq1FrW6Xt9zydamSASbDKZ9CgcP4bCEfR3X2r2fxE6Mt4NnvkBEddgnhfab1shAB4x3dtb",
  "key26": "LDTgVxkqXdWpcmnsBWqtT9FBpAeP42dWDbTUhcMr1jYeGDK4hcgVx2acy35VQ49GcMGJLwKesZQcPgb8zb7ZGDD",
  "key27": "3PR1VzUPL7bVeHDBfYFmT5RD7AtbbxPzNw1UJZUsh7fVbdgJpPFeV4TrDhkDL1NBk1b3WwSZHBe8W8nUoxFihEE3",
  "key28": "4gAbg5k4Qr4UCCJo198XHhcpWGkEG4q5Sb2trU1L13EN2XbV9yP243jLojifWPx53rMDzuVRBvDi4upZaHGhhzSE",
  "key29": "5cXxnPN2ZMvEPLjXF5x6Noqxkbq74v5dB76xdzR2cBTKq4YkNMov17FXSs2DvnE1pJD8gaxCuqd9PshpGoNVa1vy",
  "key30": "ee7DA76jbwLgW1552siWiUci8JLycSqjxXBtmhR9BhMsUhPbAkcLiF1ms5n5vwra7G8G8Ds8o88vJw6PyEdxGGG",
  "key31": "5YM4ueeax5qjVL4N1RerH4ZAfyzEAqjF1RAWpLs8EzMt5xy7h41Ff9H2XRgVvRiuNXhqHin8HBWr5d1V2WPCL2rf",
  "key32": "2ETxEBaKWQfv8q1dKH9B5DA8PQyYZ4mrhii6qWPvhk75VE2yPT9sFay6bLJRNQW22LuGcfGKenzgZ1iRPbeDeQP2",
  "key33": "HAd1BZV1ic5FqoAcsjBhdDZkjJ6FA3rQndbzUiF2vNXSUSQZTJr2YmRb3saTLJD8WrLVN7Ta4fA6voX3RpCXis8",
  "key34": "5dyDGohKhaobADtCTJ1Ws1os9QZTbe7egz9cUysYqWRNTPbD2Gmn7TRMftQitgs6g8dEj7zYas4bJPFnKxQzCgex",
  "key35": "5LvmEWThBfNi5hxX2fBfh51ijjerUfjrFwnXjUH2ZdGyYDtWADYu2N2UWrVg4CLghti8QnQQnbLLUpadsPVpBkT5",
  "key36": "5GnS8jkbmZB5rje3tBZMdc3nhWEq2RgQ9uYWTc2i4ER51zpRPNFdEbVBRbPMaFWk3QZhAB6n1z8rNHbTH79U6hsd"
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
