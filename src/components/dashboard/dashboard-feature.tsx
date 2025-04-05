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
    "5ANvLbeuyVzvk6D6usLWEsERSMKtHyueqoPA7wD4rvqtCm4sBpx6brCEuBETUEAyT6QiPCCzC22WDxrHp9LrJ8Ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVYuAXyPXzSc6eWLJSzC3q2ksdenpTsqP1bTXr1RtsJbMrgyWFmcXVzcwHNs1TL5GxpJDcughNbXFML5CZdF1WM",
  "key1": "TUcngrw3iHbvoRdQ2AMWgWWu9GmrdQZ31VrNege2TuCUy9tb6dg6CYPwtpsnZF4bPAekmGB67Sazxgrk3u7vBoz",
  "key2": "2Eck18YwStsVREnomyBSbNi8wZKkmDwMwFmbhJ2TC8batq4nWQ1xXmTJmMuB7KEKgg63TSebS6FQnRaYRbEZgN4o",
  "key3": "3Sb1aJSZBstqBc3YLRFudVVEwtJ5pdDeByRQNbVXE8vLPTkCJ6zWAokycNgCdmoYRuiMtj8zBPVDVPraHc9EhDas",
  "key4": "3Knc33rv9dxfrnZqFJu4vth6qaCZF3u8S3cVttAtubwgp8cmUMcNdN7Y1s8ZSYbUGvJbNuoAx76webyGL3qHs2YY",
  "key5": "LTx4ZWdwnqP2YzYeLtqoLDvnN2dz257LKvFDXc9NhodXiPmMLTxRkaum4SYGC1TkdeDguzRGaw3Do15113wBWhj",
  "key6": "4qt7AKUw5EaUCCf2yqmG9iKU57SjJFbGutg1EW3d6TFWxcPKohW2JzfjQoW2C8aRKHPsDCt9QTAvtvPV3Ub4w2cm",
  "key7": "4MdfXXixJ66o5h9NW1xoTaJmwrkL39dds21HKeuZTh3DjMCJMa1gsyMsnTA2bwqZ6BCDoNJGCafP58UphrEvB3cj",
  "key8": "3HfHa97xHw8A4e6ciGVXmuQyovTDou3AgapcwHdkJMAQbYBc7NPmARXqqFQKSuMzkREWwQVwHdMWGKLapHsg87Xj",
  "key9": "53FQpSRwgNpSNqhto9Xfk3KVGYNn4LAHPYPubgp3ceaAtrEY24TEf3J5EqMoYuNSqw2phMHAWvEiHfbAFm5LAeMP",
  "key10": "2GbKjL2v6NMbaqx2mVYSEaK3M6FmccRDb55n3Vdjwy3fFbSGmU1EvqTNbppn3UM2wV7visusHFGmXfAwT1SdACGc",
  "key11": "3B2sTuE1ZJRYCuCgG8XFBFLR7yfi1Py3tJgpGppTtvNf4u9J1AmZdxrrT3hutiaTgy7hMyShptJdsfuJcVsdoeWb",
  "key12": "4zxvRw9ixFM5MtGC6QGPQ9xQNwUQPmM43T9LAYA9s3KaejgnWPwHQEvVvw29QuVZ1CV35gWG8h1n5AdEQgutj9Xz",
  "key13": "5ax1svJRDLV9LFwMPQAk4FFRjuDcPJikQSdB81bX7WkUoK5gdBYGaZSL1Qvy42jwamPBg7crP5vr8ogUuREcGHgY",
  "key14": "5HD77etpZ78xEELFvQskDxixKEzraqf4TgGFiH5tupGgQVQwMNjPk6MFaJ96KEN6MojvhxBfvShKccvNEzGhWmRz",
  "key15": "MeqNKtSMjeKC3o8t5xgZMEodN9UZ91qsbbN89WQKbDi8ZkHF1BRc4w8WCP6p8shMjGfDNNSVP1kxch9qYgXpvRS",
  "key16": "DzwbCx3h6psftycvP55Xr5LFV7kqwnKX4rcDfzaEy9Rvhheitj4dLFncrXZrUmtpdMUzHCfLr9aRrPXJmUkL4QF",
  "key17": "5wpkWKyuSzsFoMt5hZdsXFLiN6UKJVTRYs3gWT3yejhp8L5pZyzuvki51tHapPADtZk48N5UsZDkWPaZASRvDDZj",
  "key18": "61c3TRrb5LtzexGr9S9fRcFi39FWHgSXh7sxLXK7thSXCmR6fUyCJ9ThpLaAr6dQzo3NTiRRtjdNBzmXwjUjswjz",
  "key19": "2zxRYPfHxMCVihvVzMJDQtpSNyuPhi6v8kqaym8tuLsUnG89U4c4PQQh5EEdeoo5dZCZ732iWb4jk6jcTjq2UXvU",
  "key20": "4U8Z9zhb8sGD1Cmwk2JFkTz2BfhC3mNzDKPZSogH3Q5dVnCBLR5YR4vnzerbVSeDPfDU8ByjzTCQFaCdv4zsVAsn",
  "key21": "3c2nbxtyGL37Erv7D411S3sSFddzfTEWuptrMcJnHUN9bsTgFWyjwKZAb3bJPbZqqZm8A57gEkXz4J1srpnYu2pJ",
  "key22": "4wUuXkCVUF9kULsr8Qa1Z7iJsR6MyJEHFNiT4RcpU3fwBUfgVjcSpSXD5b37dycqppwMFr2kbxW1AcpWc1kDDGU1",
  "key23": "28BvpNxLv8qxBYrbpx1ntbSMbMtUFJrMQfTvXWQjyL81ymZLCzqqhoYyMgdQkyoYVrSjZRmbZHoAT45BkfXhWo8Y",
  "key24": "3JUcRqWXNQuwi9Hc1aWvTb8RzzcuGtRfPohRdbzKhpRf672TXDBt3fXgYKgrHDNqFpWGKAUzr79iq94S9gyhCg68",
  "key25": "3q6ttsy3U4s1NXCimsxhP8yKMxU1MNX4Hnw9pyH1HT4CFr4Wio1HrPTSS8cz7Ft9eqNSznkUvjc1hhxgtVzaZbZb",
  "key26": "2He61uzYKtpeb1kCZ82sYpwaUNfB9eowao4d6hvJSLya7TJVgMvA2i6DkkUzPf2DdPFY4XDaRJAESakB8HfUV7yo",
  "key27": "4MGoafJCiFkrZd7PkgeUhQQpVTszYQMVg87RBrJwoTZ7nAaF72L4kqA63MmLcQopPnkzmgzvvARhaFP2Fy8S9R3H",
  "key28": "4HQQXVD5SQbJCc2KujAUoZ6i4tJgD59to4NsqNfKhpdAh1q2hLvVhE3BV7DrbNDZzAozSeNYXNVxpkFi73j2yYpb",
  "key29": "4ByZLnsaoqUA71N4tnqb9HDdwzFZ7xSWZHGGCKgUP4Ve8wbTm1tEgcZVYC1UeuJFNzwnhDne6Hz4v1Rtzwwtpk8c",
  "key30": "pEfQHS9KctAZNifapHa3qfrriH1yoEzHYokpja1VWw9aYCqkENvaTz5jEThdFCPu8pEoWPhm9o4sMRJufomRj9D",
  "key31": "3E46mALrDXASUU1UDn68uGo2BPjD6S9x3S56ALufawPdHAwGUKMoMVavPhccYyYR3etNKQg8fJffzuZcAofmGsUe"
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
