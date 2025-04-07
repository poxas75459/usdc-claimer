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
    "4232P8r1GT2TRYui4w27tF2NiXHUDqAhoFCWdm1zm41potBGKqepGrpym89YehX3EkR7NjjkUAn1y7JY8JAviqTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XiYwUcekL2hjzeaiKq3g8owTwXpytGLxYNJ19j5qTgVuCH8RXLwTkuQsMcMx4Jrq2CutxJinaVjygz4jenLXgb8",
  "key1": "5EackLhtLHwj2E3gai751P873zoLmP8h15Mwi6S5o1ELnXDKcPHfdgwGYe1VrXEj39eSF7ZD6UbqxPMnbGRxCMSB",
  "key2": "5WEF4vmfS2FWuFQRqri2cLwBADUNPziUNCYBRHuVwMouaM3bzXPnFJEEwGHpaVkMp4EgmpZaL1r9acCRSMUSDNmZ",
  "key3": "2w5terExhJr2kMSEP7C3jVKU4qwRzdn5TQKG38nyYZCtxR3zcA2JzHcNjtVuvKXsS4bdMd9MnPjdgkYyAefWp9Zt",
  "key4": "2bb4NGD9go7tAiCoQ234YT7DagD94k7u31eNSL9ySiS8vi8ERpLq5ZnAyL9HMqK25gsoHMqpvZwqHa7TBXF8snBz",
  "key5": "5GwUbedhYw9ruJCMsFDJbvCfdvKUQsX4HENN9EdDfxyvsRB5aDkP7GnwEQLx3o5DoQcyh2d4m6RyMGE17iYq5T2h",
  "key6": "5EeBmMvabHaTbKa3AcAWKeVHfqvgnhG3msrN6z6jMYvxK13YqkoXDd1dYHLJ3tuSQk7KrqJ6b1FoCxkPzqzs2Fs1",
  "key7": "NtBLgXw7sbDRJvrpJWKpcs6M2tpk6DFhwKki4u5w3RUBz59biksubf9DjAnVseNzcc1Ja7hXzSeujG8NWTgk4zB",
  "key8": "5kpjaVYcpjwvgi5MTzD1GdsbDGNLbwkLRKCy2q8qSSyRbMhAvKB3UqanBF3NJvpzQSrNP2tyMKT4Qf5EKNYfQw8H",
  "key9": "4eFn2X2d2GbqZv7sCtBnDvwr1ZdiQkGiQpwmNkvxuYT9VuAxyQjAdpMAJCDuT8ACRWD586HxZLY18VMEnUukxTLZ",
  "key10": "59b6S77ak7gLSiW6JLvAKjx9nbivY46j3cKbKWc1o2yxfGv6Dvt3yUVjd8eFhBLpLBfHXucnfwrxf5P8Tf2Knqe2",
  "key11": "4565gL86zS35gjyqJR2Wvj9amMW7g3yddTJtGyWYrKNCpYBwVD6wZxh15oVmjoTUCpWm8jT7YXXCg2ZoveEz8LU8",
  "key12": "2JY4Qpzqdxn8BhgEyHSPcGVeLaF7JWHZvrFBoPHaRA429ckYs19GouwLnZfAZ8eb3GPj2AR4cDuJ25JeffUvShEy",
  "key13": "4QjfRGbfYzem4UkHtc3Q4HDBb13H77YguFogiHDFn4Y9JCANcWKoRed4P2KURsApV1FRP6cq6rXNzsXCwszfrpQu",
  "key14": "2J626EV8bKnYrfvSHBBwW8TSzaTid4dkiwJPM5Q7qtSiuLLVGYyCgRPJRfU1M1deck3dc21Py4wGUC9YqhG8Ch7F",
  "key15": "6Gt7ztWeS3VJhahkiPjyUWfHAqPBCGvVHMAwS2n5KSDbDv1tVkiHbbUKjaB9qrxHNiwMApm5mBd1FeVF3Rnfnig",
  "key16": "3fY4VabYV6EMSwVJxQkWDLpLve3imQ1yQLuHc1TiS5eCsraL7j3wCRnCDpiYBvyi9wUp2fSET1GugANuYVq6QDxe",
  "key17": "2fuYuBvEHawRmXKDUNsuZxt51acPJy1Kasuo2sU7DBipvYt4FjGgf9Ch7Yt35aX2k3DaD2nM9zbpDDRwxHqQ5URo",
  "key18": "2xrXSTLvnSaoXX5R1ZF7yv3xG1iMtfDHdo3pa9sHgNKGYzxep6x9n98ZyXyzeJd44PXmgEVBDAR6KbCNzybKUy9m",
  "key19": "uasLyiSqeMQUV5SB2u52G5pufRbQ44APhS4pwgYfMLrfFmizayiCbt5o8cuuatmr81rZJSgW4Eoq36qvNtn2XVy",
  "key20": "6765nRRwpwP6LK7cMSxXRhmhjBLwE57Ka4BgGqy2pQ5FjnaKMMTJVnFRH53B45ZveMhh57BNqLRPBH9CXspxCtyf",
  "key21": "37ZfbFxAZQjMLuwWhZSQ5ycMCdT323Ed9yhK6SGqZ8uCTL91opDtq41oQ2K9J73bRbHedTK6nmnjtyAQeStQjwxW",
  "key22": "4Lry8Eqad2DuM3aQRLAkayMLRP8bhJRJa2qh2BdVAWzweeoNUx1bFhq6uZwYuaZzAgCVM7K1HnWrzM3yvAcGHJiQ",
  "key23": "ipDfKUZeU4Qthg9NyousngqJ4T6MvjoB9QmZ6DrfqzxoNVhRRrPsxNucvff46DHp3a3JrWxMs5AWBiuCYtGqmAL",
  "key24": "DCAy5QdBq6bXSkbcKQYmJZLvgmrqsMVTWJHnK868eKmAk4BMxAsHVactzmk5Ah7er6iKDEWcAfhjHEfxHsWLauv",
  "key25": "2LoKkZRvUpK8Haiy2MNaFYXBVw87Am2UgBw9wnX67LKsqByEbnbeX8fX5iDXrEtPzntk6qfK3g6jX2YeeB5b7uLU",
  "key26": "5qeybMR3vbnmhjW7dsqX4pk2Me6GmccfkuDfotMb4kGncWuwwodzuawoE7qMig7o82ciXBRf6RBMj3UvYLe2g34o",
  "key27": "5CUjnkcxdg1YC71yBSfJrgXea6iNgaXeLP199Sv7Pf6wifiA6n7X6M2kdA5Vb1zasD2n8xKCnEXWG6xNWJxo2DTu",
  "key28": "3JrETfwpScVwUXobYYt5mYmLgyEK8DHDzSjq99UW1iFfeTiEQThfCN5zedQ7tGPMzxTVUDoRMN7XzNnf1EJgCL2w",
  "key29": "2oViYghmGkiji7WsPHhoLzav2vyS8Y6W4sV73oebeE6RPYZV75BTSVnFMgdc756LzKM3sHoQ4GCw3up8STksiLc8",
  "key30": "vLpyx3jCfCP2dBJj153usycbCERF2w5zveKi4B5YAXdm8QJLe1FbzpAc9hVG8BNuhNFinxBc3MB4HheDM3u3J6K",
  "key31": "2sTDy3bqszU3g8S11jYHjTUeuyZRxGcuX739UWgJyMF7H3pAgimfwhfJ4NvKBvAMWumihRL3VurDV1fBivNZTdmC",
  "key32": "ws247kv8SMAXzMV9pKtRVmK88FH96HnpSYQkPR1EnSFzp2Vs1TgqtwCwTij4QSR3NYz6f5P468LuPHbTFV12gXK",
  "key33": "5dp5LsneBKp7srPDvaL7Ti7AC5MT3yjiPB6vigRai4DbxgK3naHsFnJwy2wWCnc5jXtEeNopPsUUZvXWDdxiiTCB",
  "key34": "Yc5gBo5Jfo7a4M18cnFF1UoK5aKby7cyTHerG9Lde8BcFD2dpc75Dy9pSy1w7Y1rkqFYg1R3S11uvNBfhuZGyKi",
  "key35": "2x7nPGe4u6XDkraurWNBenzegXVKSNjr8ehkiQGkmnYPD4V5daUWES18p5dzQ2DRUGxQ64u41etZLSoGBnyaBLXV",
  "key36": "5prgyjp5mc2m9Bq3xmVzrJxefegEkQzk2XYaS6ERQf1QRmMsMde8tCPwLCAA18NEY2axXYA1s1CgTJpPT217Dee1",
  "key37": "cbbL48qpo6J8uz7VmERmE3MyT35eSSSsjCYrFHknx1ic748bqFM3o8n8QNAHNEeffy4DQiWVxntXmot9hGRdZG1"
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
