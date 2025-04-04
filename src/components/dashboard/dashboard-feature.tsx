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
    "Y2jYzCBZpvaUyjjcuspewGxqxY2pUb3AmEHaqTmyJdTpQKeudpTambdiCfSFsguy5GZi22tYSB4brHqKc8dXYvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4My3a51JppaeUX2JXrK6UKZwvhw5axiKo7LFkjZWEmV57rScM56RVoReiGzuDCE5xR1H9yvijdv6pE34RzpwM8E7",
  "key1": "3KdMH97Hg5pZvhoFVDzzojeQB291xJoWyKdXCPWzy5Kj3GBKk49eqpUxgkJD1FqfiwzmLbAwvb13hoJ8a5G6LyVb",
  "key2": "3V2khjT4bdvjG73MM69Ag1NGK3rWA3mWTJGcijT82CAivR8f12JEzqDwisZaD551rLyRfyi9p9qT6xvFLiURwLqL",
  "key3": "63NrikWTN1KPFF2yrtkqABa1RECyKK8eiMfffts64WWb9Aw7GG3goKVCsgRTqi9RbBt4QjRsPU8p5Rasi9wCpXxE",
  "key4": "Fv5rKfKy59hmzi5SUyH2uwEx2Ehz2WsiqEugekf3hc8aueKp8opBD5t9wVhtuzYud7e7TPZrMeWrGybXDj7uDjM",
  "key5": "3gNLsQqkE5YFvVoRWZsFcRzXoMsmtQBqjDgqdT7svEt5Wfpc9Y4CDfeJMkZ7QtayTj97bT8JKny1g4s7r4LUdgm9",
  "key6": "46G52ZhCQ64HHbVNyNfas4qp2HXBUr5tvUorb7jSxMovtY15qbR8YrcvM5Ce9njSbuH7M5peH8GUtrLxthPmXA4p",
  "key7": "gTpPsrv7eZNLQRkMhosMixNyuJDXB8zog6a5zZhCJq3eGQxJKZFPdxS5qugJbCETogsbmwDdK7vnTUc9kkX6WdJ",
  "key8": "2TgNp81cpuw5woNYbGSprkGt1St9rLSZAT3TWX3j84VafoDQuWmzuTe2bBmsfULnJiyrRQEKKAap4YpJ7EzwP1mc",
  "key9": "4YD6o554mNtjUPR2ER7VGvojrKxpDoVXt64M8vxWWCyt3cgUSeKpgin8BmVmBorwVVvu1FngALQSNVDBD5odiZXZ",
  "key10": "4XaKFEkp5Y63jxEzMsuTUJ72pSy9eaLfjsL5JNZtMtSj5EPR2rxsw5X4EnczHzJHYgEnqRhZZqQrXYWRNjNNqtYD",
  "key11": "uRjcJ288Wfm6Hkkjh7EX8VU8UagBS8pnGMZPY3oY3coBvu7pfN9coeo4EQRWvLSds8pEgnuRgipv9CNmNqTYF9H",
  "key12": "2HGhLsjcuii4AYpbKgfAnFwrtjVPkPrVK9NV8J2UScjNKmkpm3VCpvSBrsmewH3XMjqjTDB94BuoagHJdqKcWJC6",
  "key13": "2KkRQ3Gy2VAD8sTwttNP2hffgmm36G466Ey4kj3qAbceNZRD2Mrfv5P8gWH9f3oCxLaVuJADXtM4VsCqMhzDqZK6",
  "key14": "5y61ngasBXLefAe84bVTdFrEBdqHCr7D3goqGie8iWevAfhQShyz7NdsryxTEGzgJWBkd9mbTafnSauArF8848LP",
  "key15": "2N6iYC9i4XGq2KYQmEN7Z4VicVy6afehmcpb8iJi38wFTq649xWDS61t5NM9rj1XrLckqvDVfy4wqCK6DBUZK7C1",
  "key16": "2bAwUeBmADsiXC6GxDC8Au2ubPDPEWsRtbCS6G5MPPKFj9GKvBJwiWE8XKfpy4ApGhPXhAL5wjZBgRzta9Ax3Bq5",
  "key17": "5sRBAYC19gdEPJJ7uwtbx63GM39UwpSR5UvJYdFC9RsXrLTfmTbJUEVbXHQSFzDdaQ19Gp8ezHtDeJE4r3ec9v5W",
  "key18": "3oxWUdqioxD8jXsTfhhMG596tFkeFQCAgaxGc9jMDcMi88G8c6rXnKP9Dh2Pbnq1YAwZnRSfcFryTgN268AafvwH",
  "key19": "5vhDxHKGtaaP2SM3od8anQt65F86HtdRUmtvBckKPoWFoEsVNeKGAjNnkpWHbTfz1PQCZXAAyoyjqiLP126NDn3z",
  "key20": "3ToxTsS9isc6nHdqvGUjLapKFFUfBFihBiVTYnDVTqeitBkYmrGe2GD1fUKMpT8TkmDKa17hiAXjEm2EVfXiMvbd",
  "key21": "51mqgJbxLu9TXhMtmUFHgMqNe5j71Gpq5o1SKyFL2G3L1U6v3GkSM3LZMsLz9VbghANL89LBwuJRYZUeDrNPvhaF",
  "key22": "xzRqc1JwVrcSknVdQcThS8eNmLCCxpKfam41rbTCieU6Qm86AHuKLjS19APPCLKoEsNWSJGR4ikXBo2ciAzNxTJ",
  "key23": "4pKC4VzxzURpJLdcHjyGCPf6oW5zMcdBEGtMMxLNhXb2HdbCCsdRqneXtM2ai1UmTBKemnoy4ZzeLrvQSD6nuHB8",
  "key24": "GQiFeP8WCL8AKtpxmPjbB1vNxTBkjY95qJmmxYe8rmAKiwFfP71JL7zUBK6w6puT1fvwcMB8zaANDSwE7mJuF1q",
  "key25": "5FhYAZkbnfs8k8dcMpHbBmx5svr86vwEMn5nZZBz9ydpTeh6sPjjxwihArDkdSNzBM9G53HmhxVg9NChJgfVFFJ5",
  "key26": "5xeLj8A2wMNA7rL4i4MRmm4aPBoCecB7MQtYSnDAbyrPVkWa4Q6SerMry1D3jZy8PJxATBAvP7AdpzYJAgSyMhZ6",
  "key27": "PfVnfLTiYGBn6JiHPyqyZGiKh2f1kPzSPnr3LBh2g2Ko6PrdETMBYDrodqk11t4hF4BjaYVYLtoSwZHYtFpV2hU",
  "key28": "5qtvYiTibaXVUr38gPjiDyXj7v9FwBm4cXxDVpqbycRRPxNXz9mqsBP6LTzhL4Pmct6tkXuZLZgi5XvS6cRBz62z",
  "key29": "4xW2C36woVjgc1mQJ29gP1SGkHrWdwy5wgXF71E4b92UQ1WRFJg4shH4b8i2G3QfYdhmp5BUYMTFPsfd9ZfC3j4Y",
  "key30": "g6EwumaezK9ZeFec2mHMuPocCS9qcrdTb6anFbhCqYpkfU48GwMoXqWxDeeREW5hTiKogfirt7aFpSDpWEGabJK",
  "key31": "5vMMcSC4WGkDSqoizkjDJRxHoyzkbCUYvu5MmonAe6XJnaTTTTgv25McHCxtHKGHCDCze3qMsEr2vpE5ww1B1bQ9",
  "key32": "5ckW43orH177VX3UGVyHcD2ifrUgf4pbTHcjV7Ui6dZeo14xv89m9AMWXd6ncH2DEgxrXeXFFvqxJams1UXe35mQ"
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
