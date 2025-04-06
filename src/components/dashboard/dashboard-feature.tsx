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
    "5JvgrCbviYtB2sup4Fvwd1cLi2SEYQ3pXC8hjEh2z2Ggf9KQGmFSs7wrxHAJZugLK3dzZj5a1rboCWmJ2rewGnEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WmizN2vDy1hCKNruNwN1zKi7B3QDKCe9tFvtMD72Q3hEFUKEwBADFsNVvf4zBYsaixeckiCdsMdbtG7CUh1mmB",
  "key1": "5UBNsAcc1W47BuVMR2teqmvmJpfaPDZZMYh43vw9p8oLVSy1sCbmuJqxNTVXgExBbp8HUbYiww62QTF5LU8QgdAJ",
  "key2": "5aswKrPJiX1bvTqZMLnVEvt1MWGp8Y8gVaP2UDw7kntHJBXn7FkdopW2M692JfUGKbTzew6ADyQeaMa7J83iR2xm",
  "key3": "2WJS6aWkqT1g1erray7zaisEevPa1nikLUWmJycxudkgeL5K6EsPhZ8oZNPVn4vrUZcT4YuWf4TGpJD9xBPBEpxz",
  "key4": "5PGCSMdNY2ViT2pNEz1Tf4aV6S8jiAVBDpQNAjBdhGKNjsQ9qJviGhZNwWFaSenv8tnUdk3CMEJpP2YXHDWoGF1D",
  "key5": "JLSdbHB7fNnoELdwJ68Q51GjPPDqiHXpSnXyFK7Z2EsJhR1oVD1EKrVeJ5DnUFexzW9G5vY5SMMNKcFxHZQzXti",
  "key6": "5tTeEkoYVTZdwhbT6wCUQoCKv2cPnpHoShh3RS7QH61d2T7EGWtESdkV5yf7wGMW3E6HYQAqUjgxzzLUrqcn3HeV",
  "key7": "2XZ32voceDhkSXMTVsqRqWU9fna8MQirFySh81onRCQS3Fapy8MsfxkkeR6HV1bEMshaT3CevJBYq6bE742UKvVC",
  "key8": "4ffS4cb5EGyDFDf6mJga4bNNe9uXd2pDk35iiaQ6EkKW788g3BeZCSVPAAHDzBjyjdhuWYqHSC3YsXyh8HzuJ1Sa",
  "key9": "cwyC1VZypocfBzbukqmVyChEiyBQvTCBcC1bSp1CZ6gByMX72SfiF6gTFDfLmBeb4LX9EzRzPLdKBYbvYVZQSc4",
  "key10": "4PAZmVxB8h3PNS7gsqnRp1yhKMSm94MdKFp3KwyVLgVuS54BRHnLVgMKJfb8XZuSDJPPJGKUeJZueU46yWKdXnax",
  "key11": "2siqZCEg1PdqroVivrccdSJ4vDVSu3AF2ePHdpZq3pkANU9xYoqgZWkaAHb4svVPWDuAG3feBABg74Ldw4qNdB3U",
  "key12": "3tDV1m3FAjG7B4FVNHNtoFL8y3LkbR3Mp9GTFA6q95RktkW4GrTd4HpDLwFm1axXbbTqKo3MDienqfP5ituw4uWu",
  "key13": "3wJbhA4LBhtGawZMrRK9heTfbWC5HeQNwrd1R1zdNGn6WGk3sWUCHCT7taeWD8nQ6pqeBon8y9b1bRvyzSdn1KU9",
  "key14": "477YCMq34UTsAo8Fs6u61AsMYkU7EesmwaZgkv1T27QUN4TNtg4wTbv6nP9sw1ekz27tk47YsbAXJ3Yose77NHEU",
  "key15": "NM9KhCMwNkvuPjMXbL3EryPbVqAy38npXXwhfNvTD2KH6ZkiceNHXeYVdQKzELHmrkCepYhEmzkohgCzMJoudRa",
  "key16": "2zhgJe57dg4oLKUVo1jcc553YLXSkMtTpwszeAjx31tFj5UvoNPWaC7T7LPwTyWGXYeZoJS5E2B5tvSuevP8CoRR",
  "key17": "5PSDdFdhRscpsgVvsarYmDEPUMYuhA6aTSzPvvDvaqVQqAZ6h8zR6XnQYJ6hoTc9z8YMmzkDURzrrpoiT7cNBdBE",
  "key18": "2D7eF7L8Ft1R6LWf9deciT4NDCJPCcFpb7BndQpzWYiLHqJz4PMy5kSnJHoMgzS4QXZUhqKuENrDxkVsCkWHFVJg",
  "key19": "4z6VcGdW4Gn8zqaL6J9vN6Cbrkuwxp7mWD1tfX7eb2cgQVSPWPFbyYyuSEoKiNyKLcw1foRHNA8Kjmzkg4k5fPTo",
  "key20": "52eVgPA8LNN8oTyTaTLBDv5RTxfs3RQbxzxeoVyTQRQSAWSzb2vwyjXMCxRZMnVmrDnVFTm5m4AkssaNonBjJEDM",
  "key21": "5HeZv6KNFpd4pUozt2SGrNi1LzUkjyVW6VyaHmBwsagCwWrKgzHnf3q7ors6R6tVR5EvLXCnA52S4QQz3fmjmTwr",
  "key22": "zSW4whQhaYSeea5U4hN2Qu2fMUzadk29EsE5GgZqtfSbHrnTJBsqQ3yh7uJHL69qZWGwacArPA8NmHwigBmdGQC",
  "key23": "3iLYK32GS686NCUdRzCzekUewuth5hFExhTicSN1KADS4V98Lz1yW1YnVKybu3b8FsMopgShGJbxpeE5pRH1deRJ",
  "key24": "4zJJsPdgMny8YiKatqCdemnRXphqfn7gvtcaKgaC33jzEs1aYX3o5GDKEHc6Q1n8GrG9K2KDKCkscHYML4FkBq8Q",
  "key25": "drSn9Dao2SerUQYqxfPv4RwDe7EWA1eLyaBDpDeXouHeHtwL8thwwf1fkDZRwtoKfKupmTYfuhXciVEASrXdivY",
  "key26": "4SdHNftmGGYfkxeSkbFvKWYPQK2Q52Y88RLhAfBDHdr28yFqkasXP36X5DkjyEjMVkg6BFWatXbVMmet8bvU1abZ",
  "key27": "17yw6aN7QMdRJxXsqAbREPusxvD3f9f1uEDTPPcidZW3UiAJuywcPEgCrWJhUebHnJBZPrb2MhKxcdv8LBy6mCk",
  "key28": "5pttT5SygKgRtwU2waMLTMrX5DrqJiMyrJjx7Gq8RTqWgPAEZ1h49e2sV64dzjWfNEyi8VWdXgBqKgNMCRq9k1Hq",
  "key29": "3mCVBptrVUDyaU7kcDVtUcQj5cWRdfbx5HdEq2DYgmoooPkQWsRv16FdiyLP88UTXEcw6ZxSuNFYLJLPcMaxAA34",
  "key30": "3iE3YT7QJi7tvTKiDy5JeZkxa6pgJnbSKXowYfm28Cv898MVPR3UpSHFg7TiqEL54jLjLdib2C7xfTeSdGhX4pxQ",
  "key31": "28hVeiH1eDMVD84FtFQPoXhBHbXeKzYeMzdfDxoqCESThB1XAAY5Coh1hDLzKsUM3wvXsiaEkFDPoFgP6DR33oTh",
  "key32": "3ZUiM6qpi5v4H6APwcWPPfn7XtB4hSuKLCn6tRAJ8wQGfSE5zTrbbaV1hgwUEnBin1g4T8CA6sLySaQvihSyMAEm",
  "key33": "3cLspBeKA8HxW1xk7XZNEQAj3ix7VK1w8E97sx4NZWYbwGBqW1ieW6ZQdHAQ9he5YkXwwyM8mjAdUtcryfh5SPor",
  "key34": "djrhzEneVUEYmFEeWL1uRXBYEiP26vRznzgaK12v8JJqE4o6K55XCvTusbNVH4BMBxKDtEjbjdNN3cgkAHMUbBe"
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
