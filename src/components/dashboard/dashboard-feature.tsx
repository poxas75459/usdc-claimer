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
    "4SaemcgeuRNAZiFmWouxMu2jMXx4TtJrzsb5jBMC2n6VqqjSXvLH6idsEYVDVLwPReJdYHLxkZsgBgn4sms58FkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sfqyfqEBpm7U2ibtcCkSdhHejPv125uKCG1DxjUn2q3hJyhXXFU6qnetYRxFVnTCPfutDttMSmxYhSagkhEr8zU",
  "key1": "4xe1dEgtiD4nVVf2Cruc159gNDVgYKeXwwxzeHXeXwnuV9yfHAc8ci9Z5fQxuySfDXPzwn24CBAWuH6pvVaFUXku",
  "key2": "5rFNfKiCoeoiX6xKWK9vW2hLMhn3frHuUmSF6hB7m8nvP6H12z81evWbqTUTahCHxVY7XnYmhN63Finqc4pQHSxV",
  "key3": "4wmHGgdRuVc8sk5XPnLxxo1H1C3YMGrMkSRZ3DcWGjNsyz2tfoUMYaQoGchenYxvQt7JKuwj8xdbScsMSvNa3TFW",
  "key4": "4RQ5vTxBT6CftuMhQEGfTzq6mnmKLjEsg2ocqctQf22mXfjaxiNz8NcdfbfKetxLYktTWmbqgKgnZ18SokKDmVof",
  "key5": "3nSz6WSRMtXMVSt1kMgdhr8yBDrTyYE2d86uwJKDAvKKLkh4TdsMCzRFv4b2iDw6yjqzookFkKzebnQcDSpxWkfw",
  "key6": "33RMvqm6YhrtHBAFM8aGxoshxzBZrJCg88vDDfqFx7kC1bBAksTRCCtxgf1roWNv1KWjR8zfJPaNJg7dskgSKDVA",
  "key7": "5s9SCZbabneMWKTyezPHtyiXFzAtJnR9GqpVyk3Hs4Rp9VnqocqFSdNz58gFTEvfh2sZhgU283JQnJd9sSRVxT5w",
  "key8": "3sCnGG5RdjwSsmaouzBrWjJScyP4rpcHUnEGT7UNRcPkvGTmFivBUDymnDTXLwYVJBhUBgz3ZbKkbvfc4zJHxJTk",
  "key9": "2p88j3RKPoGALw5DzS2NRjbkDS7f5oUj6HGmwibxX4cVdxDSHLXs2MutophyfQCVEF4tvL2oHZ6pqR55ma3q1143",
  "key10": "4rJcpmLLn5Meai4vNWz5MZtkLDKCfGjFRRpK5J8AX89bnutA6PnwtZFPZtk3mziBJpZ33AibUcd2YUJfUE3yK1r5",
  "key11": "5godhtB9emJd1Mmd7639tsKqsGxK9eZc3fsJm8GE1smyggf3Foppe4mY2Dcx5BaEroqTF6YKvk8rzXQKuduBhFk",
  "key12": "3dXzpUvMVANVxf3sjBzb7JBnThwVPumVXDLaXJcreged6nmbwbduqph4F457TLmpwRUNFzAHDNvTFtNM8Cvbv8Dq",
  "key13": "66YgMczgAyaGKQyH3GzQjpwc53MicACqZ2APE7yVfyCVxrp1hChHu7oLgzwffGiGaCT2LgvZptrotXEb28AGqFi2",
  "key14": "2VNM6LEUjYKraBUTpTfYdW6pX75qpz3m4xQJhpQmR5hxpxGRovMnc7cWBBVcfzrNo7FmDr8DegU2GmRwryB3shcZ",
  "key15": "3WjbuP3acJ9W44gwwmBvhdapQGX7v3KwTcK7m3Pfd7RW71mTE2qoWAN7cS8Q8yiopT5ucJnwsnvFyhbfAHnGkYFm",
  "key16": "3XtTN5N2xX23wv7398j7DgsAMTmTWJK9nmdndzdDQ7ZR658U8hupQzh4ksYRmXUNZp4iECv8QwdmacShyesLyFbT",
  "key17": "4FD1kpkZBcynSAL1vbJRA3kaNLxzBcv889zGSriyBHJkh7ZUyEGCFganfvyDr6ppT6jMdQEdGt99hHXW5jWhUWDj",
  "key18": "2UNxCaLL4LPYUwsHwSATXHbHbMk6dAhCeow9dWG58FFcve7b7NqRQnB7JAWsgMxxxn6MP4GY7DkXoyekbs4kBX2A",
  "key19": "JaShyXpUjyxNcFhKdhTH554tHmZhRwWGppYu4dkKGddNoAkazUgUgUPp8ZPBjxn36ocgRPaKF6vNTZZyfgcnWDA",
  "key20": "5sRb3HFUh19paWK6qtTgBjCjG3kAFLct5zQrW9gYLGJ6eue34oAy3vyDDgjk4WPpm9RsuRMZCGuE5U24ULL5YtUZ",
  "key21": "Q4j7TcsbQPWFjKK47NjGymwuoQtaBAummaXNFZCdj1H4WyQCkKKw1S917FSPveJZy34YDJQtrk7CbNEP7tHN95o",
  "key22": "4feiTDHRP7SA3qER8BffeBsRUK48hJi4EUUtrZTZVTnfcM89PU9A3cG7kdqjBeM2H8j4zMoUJiEUz1GyA22WsAPi",
  "key23": "4YPnQBhFVMwqJcJGk83Hg86yxG7fmhSwz5R1odvfLnTGyZbeCkc7uRp3K9wSsPa3sBaqYgmzdkBZgT7mFxZiE788",
  "key24": "56nVMhcdVhA5chzAfgumFWWdrBSpjkRJnoZkmPu4XWADmE4cgjts5iSpNP1TqmEe11UBfeafDQDCaCzJjmPEfzNH",
  "key25": "51uzX84pJpKGEXCVwYvPkFALwDkBpovft8aiJ4Z85hSJkfgUcB6W5G3RTHFC2mnAgVsNZ6FLtbJuAGGjjwzr42bn",
  "key26": "5CqQHYmLXEka5JX3iM3Qp8U8AbWc5ADE1HGPC9fvi5qPY2GWawG6hzGafcpT3fEMM3DUrT5Wb5y4rqBLd9AZSkyu",
  "key27": "5W8tdUmZi3MyQZ7HSbU6y2SNRZKUx1xuvz83CcwRArAGmAqgFntqBxRhHHir85jBMA3aa7sQVW3YgBZPQ4QhK5cJ",
  "key28": "5MG29Fmopx8u3SoXfKurVPm9weYrWFQiLsbP2ZXAaiyerAbkJ3BvVziFxU1SE3jxsCzNs8rq4tZqKeasjYPYg3eU",
  "key29": "WxhVxqzBzugqmVvxfQmpzV86WPiYbbCeBaWsBE1AqiCGo7RKGD4ZVTBUugRcpUo7QhaK2yqRgzkAgCG9pWCW3GS",
  "key30": "5ed8NN2RrCBf8hmnsyGZNYgD843spFewVekQyV9Pw8ghZHVahPx4ddGeU7f9fDHiTNwG7nPPpbNquqzdCP84mB8g",
  "key31": "3Lypx2DHgP4HQvkiRKYJLdjJSSLau6Qo42dxgqurEPZFT6rjwNWFhyEiyCWu6uvqRsp6bjRvVkGKutYnDhH8AkXF",
  "key32": "3gN4EFFogYx2o9KHyP1yhDC9TBaeksHk2J5GRWPkef5WtY68yKo2GNBoKCdVEbJAfHVb5sM2N2J4zXgQyBPxCe76",
  "key33": "2oREBH4PFvghnppudxrq1a4jXMwS9gBZdkrSMTQ6BPxV7BLy2ByJ4fNjXrAN9KimpvcxcfrRnUCAhuFpU5PfLxjb",
  "key34": "5AG5u9sD5aSGVu6bp9n44MmJ19xiDAZtCaHTAdMJoyRpDZQ6JcTfuSg6Hc7Zzq5MzhAmMpjfhzs54P72wkYpfnjn",
  "key35": "3HmW99LQ57Whu9TZda4GgB8Jj7zPwsGtQ9vpES6WuEdBrb42WUMkScZgNvK2QftYTBC1gw1Wjx4oNr4GGB3TGy8z",
  "key36": "5vA7U2AY1pW4kmwE3s7XmvLRLQLPjo4vMDnyHrfNDYCSBEiAsb475szkLLqUy9qp76CtbKCGL6Tq7ktqxSGZNr73",
  "key37": "4cssZLptnb8owRoE2NB4pGoCT9PEtZMTgNLXh99HXENS586P4i1fco27Vg25LgpUhLCpZKELUm9yNLCsiyqskAY6",
  "key38": "1chWytAjF9wUaJZHWzXNx28QhECeFH77dCkw8d5vJf42t6LRp7M3UPe1sAttfQM5wcP9Xn6ZrJndCwQRv199UZh",
  "key39": "21YQGGZL6cc36E1dqnsS6S8kFTSrfV2fXwtVjp96jCwptrkDeKkmtD6KETCmTM6X4GhtvNUguDUMLk2py4uJKvDv",
  "key40": "3zgkyVkQV3KfouZjf7S7S2jgDT14UhfB2v1BGV3YLPvcREDLecxcHKDtcXxNaZPL4n7T1U8igPP8zqC86bZYcifx",
  "key41": "wP8W9dZRvrmwuedjzHBkPNd529G8UEk4kJeYX2ezgohixbtPEMNzMZFnQiEoJfmggLucj3omczcReeePyzmtpm4",
  "key42": "ZCAy8mvi6vxR5yzYdusm8okRSc3N7qf3pntUBNxXvXnFztsFGFEVpbZoY4b4WArmXCdXSWHKWceHS7RGoJXKE3i",
  "key43": "43izKL8LXpzrFjrFCZwtAaqFWT4tWK5xNnakFpqoc8uohZN4HVLYctixozWKcECWa2wKhHCF1Hr8qJp36ZXHMZLe",
  "key44": "2LbVjwZ1mpa648NyMXwpdcQ9TQzMP9BhSHYeZhKRGRoHqSgFp3Z5Yt9dbsYvycc9Rsw8Qh7SdrmJfGjLRRosqqLJ",
  "key45": "5iBdiGd79SdVFMEFyLjtn3G2cJ8n4QstReaGLyDyKKnxL545cjAbjQjvNHqpvu9DtNcrWFwxmKZq1PRRJu7mUnnv",
  "key46": "5ri6c36TR9TJirA8UpLaLK9n53Gcc4yyqmBDcL5tTaFthYowR5fBKfPRzRNNrUUAEL1CyiLzHC1jPxPmBete8WU1",
  "key47": "EwR5krzdoGi3FrmVQrXVi3gcWdvRQkdfgXXkYXi2tnAPpvAeg2mZKQNEemXFFNgLbDafxypKoLFPnk2fw3DqPFC",
  "key48": "ybrxWmFQUauXT6dDymaGEKCmipT4Pns1znu2bQ21nxzay7Jo2KnUp5hnr7WcQKrKQMs4uixCFR6V9Gb2c83DaSf",
  "key49": "3QBRooXdjCZ1ZdpSmsBAYr1ruXRysabhxdaocaDo4PyEzbaQS88pF6SKxMA7UpxRpwnPFa8n6jYq25GSUocuTqxs"
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
