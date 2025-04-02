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
    "4HfsmsSg3vJbUeDcUxJaj6pwwQJdm3JbrNXXAora6WzNsUsJbopgeGksRh1B2ciE5YePR1tCBodo9UJPBXxHt6En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vvZ11KjDGTDcTZ2H193Nzya71HscRoUXc9qCsWWbKzprjChKAoKobAP7MmQihFchzdRCqqLc7Mvcjg4MzQkfJBV",
  "key1": "5P65ASJTPgwt3fs27Zb3MUoijkSG22Kn1iBtECBDiSfX3UVS88ZpCRj5GLJwwWopobacmh1ioRjuYdo4hbq9Uk8y",
  "key2": "4mJhxJJojmYAmG3fQkM5g42eELwe5mZBrhRwCweaNtcyP5yvjbPMdicQcxk2GS9KrN9YEpe8eMc5SW76cyWdvAPf",
  "key3": "5AuHyjsbof9FESMbkP3xR5iZq3Mz5f4aWgf3wwjMMJDFkrtoiYWSVsq7vKdbCNZmVLuonugUY7hYByL1U8NHbb9V",
  "key4": "3H6WFogsFa1ehceJewEGXfVCEPhAhZszSzvuWCy8gV355mGdaDi4EC1J1pf1Xje4hRtnn7LDnxGsXhfgMNQs93br",
  "key5": "2hqvaPAnkC84Vbw1J7Nt1gQ2pJimoW5HVai7AjSduaWMq386dSCtMSDvmR9qLQRsVpFmzrfZp4TvrjAS5GKq8rmx",
  "key6": "5NeZaDDsoYG9gH6actdrJGQSZk1xMQiuJpoDeu7gg6TgAkNvCzBP92fdQoNEtGuKumhyNdK8daUt8YncYWPZgiKH",
  "key7": "45tiXbGCBYMoyW8PR8jbUhLa4n2tkWU19e7iekPhM6npB16suPQoW7Gqvc9584Lfd3Gzsbo13YA87N2k1jQqmkLH",
  "key8": "2X8T6tUaG7RcFE8AsQBARupNsPYpaULXGqEXwYRNscc5ak6GC8KbYwC3De7ko3UCNgDLLgy7vrzns9s9KvWmY87Z",
  "key9": "4URDrQmgYrwfKuvi5thXxnVtZMseot1TUy7vLm5e9zQawyYePYSzjUhBjxLPNjwRbHZaRdXcuA6fBu8TcHnaAS7Q",
  "key10": "4ixKb1QsVbZZoAh2Xy5KayknMEHtxD8mCkJdjwd9MYnZPUEbkvtZnWshxw4hJcRnqVca2mp9bdjXsHajRMWtjwBg",
  "key11": "3eaF4gc49AgzTwEanDMjk3SwXbzR3pKpUkm1rD8TtE6A7XSpLGUpisT5jbmh26SpiPgMPg5LZGFXaZuhy1Tykxc1",
  "key12": "2tjG77B5ut6CyrsjFzbYTgzY1VKVcsRsK7EhPQcSZcjEbyBYFW8eGBpwvcLbXR7HXf7RjktUdqY5eq21sA2MJy3e",
  "key13": "3dYbVJd71qoJuxEEMUQ29BXonSGBfprW6Cz6tY6ox2LaPQaqyHaJ5K68cwxWZmu7Lp28QMsmyunvwfbY6TEQdCb6",
  "key14": "4XcRFpNGdWQA3p8AS7WVfjftcDZxmF5DXkK9161W6EmKioCNEWh8HmzGyetywQRkz1TBB4i25DJXbhc2VAhxypqs",
  "key15": "2Va8uxCDC9EXKtyZDUREdyvdXLGaY3ASCnHCiXnX1r1fktDjHwXD9R9WZzgk7FZ76Lf786xPiCXwMGTxmyxYLAh6",
  "key16": "2PCMUZg3k5S5DJs2QuoJy55nxmekSxdUi78U19hFtybAdGcoH7MsCcJnNuMt41xY46zvkb4eCcwgpSrxgnkiPt1E",
  "key17": "5oQPag55rGKKBA878WQzWe87cCDQKpheT3winGWYv45Vk94YJFboG5AczhkF5UbVnvdBfaqmKvn4d9rdWL2xLwAu",
  "key18": "4YLEMfSj7ZN2fwZxoTLLzZa2dq9hUZjajaLxMQxiLR4QDFdDJkWyxbcWBHiZbZjcRUdhFcj3K6M5e1MqTgUHD1Ah",
  "key19": "3ZdR8rSpAdfjCFZTAHEDjeaRMottXM2XqcyFXfo2qVbSbn2kc9usJXjb6mYxTc6h5K46ebjPmuHc4a2b6YQe32G5",
  "key20": "4X6k3MJemqYDZeAiiRb2aW7SsJvhmuHY9aCsbHz5pJgRroFiUB5hMHDmG3KAVgKQNWR6QjddhdnbwM5jDcb22Kcv",
  "key21": "2zSE72aJmUGoi3frCgS11xtEbk9vUaQbEJpGUwz9LFaXZTk3LZ8b1fhLALrohVfdQFwYmL1VAbs4eBKFyJt2xwyn",
  "key22": "42CxHHzL982psNYVrAyzwfA9vo3EZx4k4BVAWWNWnQdaBEyMCz1M46yFS1UBBkWhnbc2cDbLhTZFmW6yL55rBRdm",
  "key23": "53Nit3JZA67cfZ7q11vFDAPRtTgjGPSw5yAykdLzaJMxXEMLskqU6Lu45eKphHSmPAPmoFVB3k1WLnAQwQpFTHNZ",
  "key24": "JZDJ7sjBeYudU8HkJEvJ1ZoUTL8Te5cdAugS5djjkAykW3RPSm8DT3ZXrBz6XEwbr2dUg5RYRg4Me4tTi6xtjK2",
  "key25": "5ZsMTLTB1TEDaQjUXsC3TLSDR4jFX3accpEF4L6AExznEUEP9nmakbMkWLvwVtdiFEHxPMDcv85uNtNewoa1EW3w",
  "key26": "2hDm3UfYYFAWjirJCwhtzy6d7vqBDxfL4D9CXsUSL6K59rKDMYtN1TVsbkDPBA7y1v4R7U4vojdBEPVUKEus7vN2",
  "key27": "4uMibUzPAxmPq6HfugxuSDbsECLdynvHF6uzmphsFRmQJTk7TZaWGAxkABBouJ7PPDsv8p1xaSrfVJs7vS5RpzJG",
  "key28": "5xUeKHCBhHWut5MEdPQKX9KJz5q146uTLynmxfAP4uVac6aJQDCD14tPmqSTL3GxmsnNj13uNmGU21YciL7Btwrx",
  "key29": "57UBBgexYZLYH2GDSAXMKhDcETk4CvAts1C9hXKTrzKYNEVptQFSD2Tg2ZFKWfW6dZHv5nwwXX731gi99RxQBtRv",
  "key30": "37mE11bGwosFYA9aMSg7qDyQsQ8iMXjGkyfFanudUW9wLTNt5to8avJnEiJNfP6f7iQ49oK2vYNjXbs6vseNfDKe",
  "key31": "24Yb8hfdLYerBkr6Lv8uakTcXCQzvVxLwtWBGMn6QcUhHP3u8pBVGcSQuz3sRpBGF6gEkCEGF2oVr2U97BqxVEMe",
  "key32": "4bwS3YQ6NbDS5CG9B6vVD5ffxQBdV2AJwpmh1phu4ohnudL37WQFbaWkGGiZHYgmDR3ZzzkbY2faT8ybixePe5XS",
  "key33": "2eh4FN6jDA9WLG6EKrpdLRYsr92hgHjrX2XbsHKUGUzovyZY54qvwenr6JFXdQewYCwrtMSggxfjh1P5QfKGkdym",
  "key34": "fghvGasKy1FB7tpvshgQB29Fin6fq4t9EPLZvNtivjfMqo9WwnUpKDsdR7SJD9rfeJN7fU5wdxf7bP7tH3fR86v",
  "key35": "3ykCCUHUidDwLjYhEsiLm3q1PWS11unrpm8ZkQShMesVMBxudVqaTjMjdSVA34WMcZTb7ZaWxhtpJq8P236xXeM2",
  "key36": "5PyCUYuMuQJjMao89hnBEVAT8PgbSsBV5YDmCBS2wGPUJF6QYu4LX91X73xXcsfPyGtrXcHBrP6UDa63bAEdMpaE",
  "key37": "21WrD1NkdegmxhwP7svagtJLQS9HQaMAaivV6zt12rhbHYjhjeudzEVprxSeWVwZXkPbXLdcCbBZdmDfogrNqfHp",
  "key38": "461xf9FXaSoRuDhYTiYd77BEKDHcGrapCSCjQ8ReNpi2Jep7s7EbNx7kvBe3YfWWWt4ByFNMkR8sTSxd52Ln1oPc",
  "key39": "3QemKxgPwY76CGWJAxRr49hVdHYNxScxLS72RNsinbxmY7zg5FVjXmyYfJMzzEA5PAH9w3d5vwj3mdKLJwYxsjV9",
  "key40": "4kKbZXGXMSoxqGmreqkHLJPyt2yFuQDy3vAhMFoFENK8PsCQxRs1Ldwb1BtM9w82iWjkUsReBZ62XiipWNjET7n6",
  "key41": "4BxjgVhnyZLvUcYBWvraVrp2at6Pgx7zE3TCJ3yMcoQtTWAksEzFoBzm97jWn72Buf9tAsjFkbYrtbyZbCQhbnLj"
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
