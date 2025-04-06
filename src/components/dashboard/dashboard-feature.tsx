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
    "2MEz211AYoXvSTqWmHdMVfJCBL7sCziSDF8XcSpWpeaFvvBt6PxEvnqjfmHx5C1VM9PW256nb3dfJACLkY1gEoh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQdJoVqAGPmyDwJctWNjonFEk342ZCDjbuQRLw4a7UNGg2PwSJtY6A1j4Kst8VLMguyog3BuuTvcxQ39fHb4q84",
  "key1": "HtYaVRwpmBjymXH2Ht5pZbjZbZNUq4dwWPrQWREdn3jr2ynnRndMJEN7yEdjkjDJD7DWrdrj6Ubx9aayRyjzijV",
  "key2": "56bsAJvT2rySvRiykkpXTjzyKSAcgoTw4NivgrFtxQVNs2fVSpc2HVPMJXyiGX9M3SLeFc3C54LsiSmK9A6xxCp9",
  "key3": "AdJntpCmRyGVGUDir1CjMEQo45Wuvy8acTRLxnqxnA86WscHxnpLvmWyDHpW21V8gRwwUHiRrf4dDHg7ZzbxWmC",
  "key4": "6KfbiYwRa5y5vmCAiius8SUp9PyenW7LWLpEjp7iYcvFp2MrJ9wu7B4zf9pJiNYqX8EMkBzQQiXWpb64abCSjBN",
  "key5": "4Vt1GAGQuTrK4xeEqxm8GSX15GsdFPWejZRrhxhR8mXGtpoCDHKL3Gd46KB9WoU7UQ7qoV981QHnzsrCVAji8Akx",
  "key6": "41XizQzUa7FWYx4aAVkYva1iKbDmzM8bPN9rMjWrGfszPDjis9DAdcNAyMx3VnxfSQ7yWLWA9Ed6pQVmzkg51xZj",
  "key7": "4bUNcBom4dsnr7trzyzT1ANLsS6gJBKZPQ5psLZZBc3A9247HvWqtW1XTrD2Mq9Xinp9aKXcgSpY5qMNXNhjGNUd",
  "key8": "2G9Lwv2LaQcQ6gg5PH9EWXpQDzSLZu1w6HKCTyaH5oNLdFH1gHv11fdDyUhQrGf8YXC3dfRp9TjCqcivh6hMebTG",
  "key9": "GbLEuoaLBmeoFreEJPZiPvVbgiQghAgyzRZ723N1Dm8kLnfbQ1wCK2u45tSzaAhy1tTdD2diKWf6QiXTyKoQhSW",
  "key10": "47QGztKvvKsEdEfta9mTo8oYhMYmVe6H7SEmrjg1afPGeqcc8B1T2v1GejELDrt8pBy5n3JGdtk1UAhPQe9osTvq",
  "key11": "24BYVpYr1okg3K7AtbM2aQdHL64keYNfyBMDLS8ePTT2MTs1VLHaMLh7DFZS2yspFyxDssi6AuNzPnNDmyTFdMwV",
  "key12": "2q6csJ6mgn7ZA8rkyxjxUo7jtjBborAQ4dcBGQyd7ZYRKjCynydNApf9U15QygDwEvbrfNxszLxQNsLLzP7A7qKb",
  "key13": "XYKma6ymCJpkrYSsdzt9sY6JqsnDLdGjDkNfdZ1dcCqjhytgY5zsHCT5nnQLP5Qf4B78vE6jRJ2CbkQ5f4AE57z",
  "key14": "39ystVKik4KXkYZQEM2eSmgsarNX7C4TLJo5ieKrRTuAyqzU8sk19M5GPJbtb64a25esbhp1hsFiapREAYpXjQ8n",
  "key15": "2gKYFrxeS18TxqKiYoAiPr8D2uGiBvn9vJGo7zqFTh47nsQthwew9XrRa6XUeZ8AvMZpeiF3Ziv2oRV6J4G4DDq7",
  "key16": "5DM89Lm3CvxZmUCJnRDims8XzjQVF6JGae92cHpwrVfnx1hgSU77SHa5x3bvaq2cxptwJH7fwDdQesys7xf9dUBy",
  "key17": "5Vq7NcvGUDPAPuKQfn4SbzLHHQMx1i5FpbEpQVREHSb2vfy2nCFdX9eRzBdH37qR5JwrDXz4zYREQJFed2fvMout",
  "key18": "3xpRHD83jbUyAPVFnQuGeVv1GkNuCroHSnNsdvBtb5JD7sdV1FX3NnZa9xC9fowYXv5XZsmawn8yLy7MEjpHw36X",
  "key19": "4dLba83p8MrazrM6WJMhFQTZeQTF4ruLDHSB3X6rac22N1nM8VYmh8UGdb2tr3Kz2TGCv3X4Mubptqg87km8M89a",
  "key20": "4nNV9y93n7yjPehqmRx4xDVepRJE7QvFV5GBaVoraHH7RBPtcDqa7Xj9hPt9n66noQXruj3gXqaXZd4XYsPpPvNm",
  "key21": "4BX6wrdkauiPzVfLHAr8PQwoyEz1zuw8PyxcAUt3EWuoXDngX2oGgvNmknmPV3QAqPTx5Y36Moc7ouywk5B8RQL5",
  "key22": "4DRoaHLVQez3mfvg8mZdqhXGByRruhV5qZGE7HfM4pbA8hm8aSDe4br2aFVxoRLJFyXCbd5UTHHpQW95wEM6DDWW",
  "key23": "5Q2eQFKNGruedfqpE8Hu2xqK13tqE69qfnDvEE1eRzrhCxRPi7J3nCLe9MSgyrH2kEWbCBYD3Zc5fhGLH6NaiwUR",
  "key24": "sY6vjJT8QnNQ72bQVL9o7buBke9VRjbYbFm4zSADrRwFt8vQY9ozNhvMvst39K1nwwm5JWzfGRP8qP3L6Wn27vQ",
  "key25": "3wNYYhqHguSWjNL1M3aCQEXZFjcLE7i9WzvJHzgWkojr2irEvJA3r6dH7zPgPGRrepurusM9MuLKHuTZYTiWgoiY",
  "key26": "5KkhEThUg5XvwqJ5F2JPXN599szWymzqQYmzdt3nNttBMZ2pmpiDmFi7WT2TJn6bbEaLMTvJL2rANqjz9qSLt7B7",
  "key27": "2T2J4DtPdBeFRkurtb53jcmgZAQpc1jB91ou5GKea4dGhdq7G6tYfP3ZgrXCmihnWpn28G4dQTfdjhoaBpmwzHQ5",
  "key28": "pf7TxsqUV9KhakGaNcuE5NKXJVsPPvzwi9EsqVuRnzxepPgdSq8u3c9ygvgYy8VyKoXGyXA92krn8qczNBKuoPv",
  "key29": "5HGrC6xTveVTcbP4xK4i73acJbZaVdnoYDqVYJs6MAeYnLkYKr8YCSHMY49RX8Uon5w1zX9B9DJQTZmmEchU4rPa",
  "key30": "3NcRoN1rcsAKmyrtR5GyVTYXwcoZzxb53ZkLsJwa93sSZPBs3LgBpfKLBFzRQJegPRmWyaxmDvVUfRx9sWdLHPEv",
  "key31": "4mAs6nmJLXR5kuz8RumBt4spPb2Kcj5pxiau1EURSntL9REYbZb9N7peNyUVv2ca3oQYP337WnR4wfvPh6SEKqo2",
  "key32": "2aSbevdFV5SjhPntrtnW2qaduUcNaamZvPHAsJCBf1SQtXjbc5X9DpnVyCuYFijVKGi98w8s3b2GS8FfhfUujcuA",
  "key33": "h9ES7JjbQi9RA3RzbdigmDFkdT1ZAewKBwU5HFL7kYyd1zFNepmbMoW3cMSJu1ATwQikXEnZe9h2FRUdUWJcxCV",
  "key34": "5CcHbrVg9RgKQGxfPyHkyV9o63Ekkm9hYquuPcPR1BSx6qZYMad1BKMtrpP5GZ4584kSsuMHh3e7BPr2xADLZqD3",
  "key35": "2Wg5p7L1vgvWEp4GUGpufwm47cAdq8fe9LRvp7b7HGg2PFZdMuyn9GotBAGYuhTKii7CfJ8wtHYFU3J9Vpc5f3eo",
  "key36": "A9MBgRAQKXpKZHd9NF73dUWaegUj94k19wQEhWrhTFxxvXHHDerqEffCWFfBFvbrw1KjQxpiNPDRQrQKUwjXxbX",
  "key37": "Ch6ot5ahvefQUcvke9mSbrSvG3fQbfVzzD8WxrAppsMdt4QEmR9SbtQgYaELd1A5oc4nWawtyMsXw3qMqfWtMAt",
  "key38": "5LMfTXmJ9EfrVVRj9fgfhhanh7Z85tSh8zQtdXSRcjgXHQducYoLFr4RiBRuDtUHMw2GwtZpv7LridHctPebo3Fm",
  "key39": "dYUCEoDR83UxidoTuz74TYodVNHbUjfQCiofxwLQnPVYLx5UMgqZebpzU2pY9amrNzjvVBGfWXtCr8E8zSHqSrW",
  "key40": "47W5emwGunc6hcYRJQ8KKcLAZx3vCuwhMUQHqq2mKLMzzyvUj4TD6ViEUxjjqtDxdAzGepBChC3itCx9SRuCeqsm",
  "key41": "5RLPD2Ynuc2doJ1ixKunFaHUsSf1UZBMuKcFLSrCxUF2KTz4Naq9b65CrZhQkwvAYPf9Ay11GMwA5V9iaioqRDTu",
  "key42": "27RoTp7CbgvaqofUM6gqsNEGwGTv9nj1DjsTQRizfmRoKucRExSUjoBko6qifcrjK3RteojUcqNbRYPkAXxaEt98",
  "key43": "44dqFjccxRGJPBWHoTkHXXKuRVEDUnqB9eibPHV6bMgg8MkWEvrtf1Y4ia3qnjhdcY2fg9cXxx1ArBLAmowRSPpR",
  "key44": "3iJzSf8tbbucKuaio9mDWpMxA5TMCJkVWom6MSQD4HeqQWc6RKbjn9d7X1PZTwrtr732SqzU8tTULJjvHdswsraJ",
  "key45": "EAXscb3bj6sk3CE5avsexkVSEgHsNm4Wf5ebvRqC8JJyD7qrX1h8gLrt3hXEwuHr2bWyWufy8tCo5saTas6kqQb"
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
