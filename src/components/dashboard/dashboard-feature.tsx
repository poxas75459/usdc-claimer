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
    "5vW9L1EcUSAE3EA38TSdcPHzupwobD7uEFKXmvAPZ2Si2iUpRZjuJnKB1fQz7RDzNejWZzZ5tGRbRyixQyTc8qJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gT76b1TKJYzBYZpubehX9r6fNbiFwj6i2hLyh4An5ZtcHKDS4PDtQbuyUH38qBcVHJR8p4pFRpmYEoAj3ztJBes",
  "key1": "4DWYjDe7rGieaGiHCnMd11NHAhSRbuq4TDJhTTfPhsdmv5StCEhfBPCaQWHkX5dwMsJKZ27n3tHnSzpvZAVwyf2D",
  "key2": "2aXdYqmKPnAbjGkGaU6XBw1N5JWvX8qXDZSh2C9dndpT4Qmtdd4UxZ5oVTZmdxqENxYFMqPjKd6iMHCCX746gSsA",
  "key3": "4WBCyAE9ZB2hifChSoprRjo77QL3hpWbiPWMSXcui74KgPGMqGoDNqRhuyEyoJr4PAEMB5nYLsZ3y6PZvh2XYaZo",
  "key4": "3EJS79Hc2AhyS8iinMue27FmALGTFuKvsKP6BkWyreenKZrPTXVDQ934GkaTbTpynQkcvqsvPQsgqJywk7BGUoYQ",
  "key5": "4hakAnTxFRdXYnGUGh2zzrzNizo1cZpzP188ameodPqWNaSqotmi3yTMp81qsrDtYT8h93maPpkoZrLFNyVZuqAn",
  "key6": "27bcDv9cF3AUrTgFw7toAK2dU54dAKfL7GfMCPXu6BePPmNPLSf6T5MBt7BDkMCsGz2BxQttjwJ2MqtSe9BpBduG",
  "key7": "3Ev5knxbL1ewHjkwhn2qBeSXwxoBNmzb1eYv3DBGmFkXmFTgE3L3qNfAioJjdfXHoGqqNfffWGYC3AyGtvMC16bf",
  "key8": "RR3QbYRJdPcPD4H4irCoU8AWWGTNbHC96rGeJLKCYmmVXFqqoVqFxy9P3GSBMJtL5T7F5pSA2q2xTBwU4LnNzWD",
  "key9": "3tbGuAgtH8Wxkkpj4KYSSyAfrs95kJEgK6my6ExJXr1JfyavwR3LQAUTpSwwxUmdaXdXJRk2R4J4Hj3BSGGRwh3w",
  "key10": "uwt69YsFTSAwwUFCxby2FyWCbfiWTcWpHaBv6siWCTmaepDKsPTzDRZzMQVSBka57iLCRfUvTbE3ca9ZuCeoDND",
  "key11": "5nmMsEc6ndK5kGyStSCwcNdoNPNvB7pmfKikwFaPorBtE9iNTaJ96biUHM5oYX3CxB5LGLWWpSYb6J8mDkyZd7my",
  "key12": "4UnCcHVJ41ExsN7mx5J5WWujcxoSsymgXVYyoiRXPRzsHDJKWCKWXYo4eWGMh63fFaEvbSRTeG45riSoLaidc8kf",
  "key13": "ksWsF2QjbRDfRKKDn2X3xHxofFZaQATDShHuppevutLDviNVVrVrqMwakQMZ1j9SPkrpNow8MbZVDxHw4C5aauZ",
  "key14": "aPaBSUUbH9jXZDqX3Z2nv3fR5BaMGa2yxDuwKNZyjYF78zd1Zzv13MjkjzXLyQpvwvnZwxMe154pRNbKkWuBw7v",
  "key15": "2XjzYFD2wmR5TcwR3Q15W5gCDQadHfMBTSTZAyTseFfnPZ2Ss5ehco6XmoqMv1JgsKrJY8CpkJsazTA8MVyCbu8g",
  "key16": "5X5zQVZJGtW947qShB9GG8wxQdZEyCWbgU97G6LKpBWZmQoR96ahBre5NBa9wkapRuGjVn9UVbKN9AABCCcwX2ta",
  "key17": "LjcpAX1u6jgUZsWEufcYmUHBPXjThr5uAwNyGujrHQjeJK7VnwSLKhDtDceokKkX2nzthbiTeYafecB3Kz6yJaY",
  "key18": "51ae4nYDGEJTFfUSVq8nZ9Ce8LQ4MwCfksyuiJmHtjHYzdKa79mMG25DmvpA3dZMfEoz2RqNv4yLecXGTPpX2ESh",
  "key19": "3uAzPqSVngH2Ya1emuvmMVa8G7CPy817PXz2hz5GgrFMrmtz6Nd4ehPAT1NpFBuEKEERkLdSkFsQ5VhPKokqHEUc",
  "key20": "3TqLQhZeP1cKWqiYKB85c8hhouT4nUtMWb7EqwJznMbGJfMB1zF4Vp47Hz789yExzKEZg6R9iFcLVMcDLZAiPm5N",
  "key21": "2cEZnSSXGZBoHqseroCnRAUnqFMcTGBbAHCeJjxSxKdvqAmDDofFqpmfgDVeVkZaxWFKpM7NVgZAiYqPcSNPJbTb",
  "key22": "5UWGttCjp5bJZdiE23YK1pBGaWmyeLLEoF9g35KJjEdppck1KNnt97mLdBGAGFqvEBGwZU6DrwBXETuX2MwsBPw5",
  "key23": "NuxJQHtpcBSpwaPtKqVeTQ2azFEnh1fNuXeGDWzgmfNSChGywqpw8gDgVWjjxqSecg4D5XrXwe1d6WQCCLzdGFb",
  "key24": "5KZycea7kmK4cTJQmNeqR9krEgzrwUZGVgJ3A8yApnv8stP44MgJF5CdLRHKCxfU1nJvwJubf858RbuPT6ftBgRB",
  "key25": "1zorEfdHZrBMuNVbnHXRxo5XruWcVSykP85MEqdPvfw4GLUWmgPFrtJnFtWbQ1gQp8v9ak2BxZyh29ykvy1Uaai",
  "key26": "56Gj5Rs2x18w6dLFd7H2GuVKxp3ALx7RJFPcecEa8qLW1Y4Kf4G42gf5MKQQuquhsfyaRepJ5zS2drmFCCyrfVvJ",
  "key27": "4fw1asmA4pcTKeBSVNqQVsjyAsunevdpxbVSLCn3kEX2GKbJv9XDPxaA39RihRE3DpvhGqnDJGTWijSd4ZCBZtNS",
  "key28": "5TiocMQv8xSbEcwqRkV6nTYmiXDm15sSfMZqwDdUrUGExDLFC9RbSyNFxgFNnujNqHTV7GUCWYqp53NUj9HaM5CL",
  "key29": "1Zypi9DDVpjfnpEhEfoTN9HmyKVgeSxKCEmWuHGXGNSyfhWm4d1m1VzyCtuskdu3b4ax6QyxEzPP5d5drenrENB",
  "key30": "4sFxQJznR6PrXihCufNvrk3FsHdV1vMNrAYgxJ36hdU2CCfudpVyEqUWNNqguEtLVDYLe7u47CjVbkKSjyJhh7KA",
  "key31": "4yxrxfiGaZ7Mdijvxwy6E6teYhf18Nb7re7B28uHfCNXAEu7LTQiXoBb37Q5eeFDr9P14DHaGcj761Jp4cd8gFiH",
  "key32": "UPxnjqNXSBUxenpiCSkusayGr8sZt7KUPTwy1BXonx4ZuWorRDuDGrmBXYjeFdqbLTW834Pvn53gSeEQrwpJmD9",
  "key33": "62merifCZnDYdYa44f95Lt8zgC3B7TQtCTAxPUptL2v8n7aCUe763hY4dvAQM1Sy4oc4HDTjKqhJFug34PNgKvTH",
  "key34": "4TfdKN725UxnzYkcnDmXLSnBhDRFUJnHLQ4C6gfjzSK5B9aD8kHCkmfAj3fFv7qb57Xb4neJ8XvVAtGTjXN5LmUh",
  "key35": "NjYBu4FcPSv1bfMMymQz3jd93PFkqp4TGcR5U54Qchd6h5BS4QaK7MkMsLSYfBUmsyzGAjuM26oKVTxBUQJ24M4",
  "key36": "2foXHVKtvrsFRtuWqvAhX8vNhmPJSHFQ3jpXZq72i5XagjDDevMEKXaCqdrSWDLgB2HVaJgYky6QyGtVb75C4oMN",
  "key37": "4oQuXM9dstM4Rt1XmVW2TdQmKk8t3AUwbtf8r8F7NwPMmv2qF1tk8SnU4GQTpUFLhYBcEvxbV2FHh1qS3vNgK8fF",
  "key38": "4X2f1XbHtJKC9R1PEE4iuLp6PP38ahW7D9PMrmbtHZbV1AweXJL1LeNJ6PDTQLBESAMgWzbYusCyKQdwKPjbdrqa",
  "key39": "4trdGbw2UzWDtZTKV6Wy7FVBZVyB4U1i7jScUxkkEsSxiSYKQwxBMgu5WspGo3ahNHY2w3zFoediZDt4UEkkJMU1",
  "key40": "e14DaBAWKRQCwNfb648NgK66w6YgLTuvmeoNhf5U4vhtM6pdcWbYNbKJLrvPb3VZQHgVuUjkfvCdiU8f7a7t9TG",
  "key41": "4wpxjYCFz8G9r8RKmYat2esmrhnRN41cPqFkd2bYW3q3mfEedAyK1kYMhe9gZCu7Y62qi3LGSyG9c4tD426peQYT"
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
