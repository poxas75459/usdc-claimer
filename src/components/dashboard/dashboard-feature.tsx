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
    "PZyWWAzFD4mQLTnVDZ7kWFtK9aqgnnyWc9NeP6f48C8Yime23wUaiuA1Hm9aR6ESPnA5HAnubS4YSbYobaqjuBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pgARPdhD7A5rfrWBa6f1iiPmrJ45PUbFiU7YjSKjQt4P5TdgdmYUnM2RPnVyqVCFyvX6GduefD2aTzxMoWyGrsf",
  "key1": "4kH63BR5MA5YPd76xnwyE9A6Zg5v38JqJxDSgf8m7MXjn9FFMKbrJbtiUFu8dXPySToeiznbZQTapJJnGEkvJk2S",
  "key2": "3LzQFkUgyJWuRbXcXHrjrACRWgRVuAdfXCkyEUrcEkmjBfZovs5y4xjfNfieTh96Ez9HZdk7DWjyagNEEn3wVpGf",
  "key3": "2oPGGiFBEq4E2q3se9WnsGW9PZpntLdbvSVQoEFR2Ptcmg3jebUqQYewLxK672TmNgs3bWvZRJQ7ABE99mixjb5p",
  "key4": "dWyCPv1BCe79GLnhFazvdi5rhyJJym2o55BxjYu66ymdbCdHsuSbZLFpGk2DytDeTddLeC6BtgaTLAg7CQLHNiv",
  "key5": "4JqKyS6UjTTrQtqdz2KPAHmebHozPHyart3vsY1wJ1aeCNU5w3BpT7AmNt3JsLiJ53TjgTN77LETAs2fiMkPmZiT",
  "key6": "t4k8En8Eza5rjxDknt7jid5uUmPpACiNnfihZ8wT1SzzG4L61jmfbNJ8Yhj5d7QPLhLVJSxPNVby6J5cAxgB1Sg",
  "key7": "3DCgGnUjG91ugvGxBYNFFRavZ1J3hfzghgqWtfMYMXeBVTox5NJ4Yi9HF1ZtBGXq63idpAPeaRMMstaTWEid9Nxa",
  "key8": "2JKfngn5qkUsGpDwtqigq1ua4c5q1UFVAM6xivu148dsKhuUDH2udoZC9udC5zrrfZk8SXX5aymAE3RsL4yYbWu6",
  "key9": "2EoGgFpCuTy8LXNMZoMEaXjJUJE8Pk4GSeFoX9Sm7T87ZrbacXRTerv4y3LJEicpe1mgfqDs546AG2nfsdwknkPz",
  "key10": "61VmEJF6ky71mnYQJdzGbYSCUY5uu5dWDMEia7aWX5NEWELc2H6L687ePrLqBUj4Uhc8G5nqHAGs7Szu2XUoXtVT",
  "key11": "3G1WGfhWQ6sua5pu5U9WdaJU79x9e2LYUEs2bS4THmkGcQJVNS7yubQaJvSqR7ZXW6iZsHGBSuX9K7f2zTTfeuJn",
  "key12": "3vcPmA3Gu1tzjVcfnvWBSB4aNmVah2sXN8RgUwUQGs8v99MTqG2LkWVuQFbd1kYHCYxYWVUu4jXhtv1gAHSSFAzR",
  "key13": "d4Xo3ZSoSmS14iphDZo8J1WddH9GodJtRb53B9Fx3z9irgZ94uBGWSmqKKFzX5xv8sSk663FMAKh59XEkiMQNGP",
  "key14": "NVwhBa47uKbVh1s8BPYPwVBnXVZwtQstu6hZLQGNQ1kRGZkhHfqcZGbzHrfdSHAbarhBMD4voy38hyPaHCvByFY",
  "key15": "7PYZ9QDAtL77b1VHGsUeiiCGMyRNNqVhHbiknzfwjFBs4fNXa1pe4htgFNcW5gN1tPTkhN2TSLK4e2HakKr2PEu",
  "key16": "hWbxw1CtZbmTdACzDd5H7fYLHqUXHBEP3DSVVd9RCpCoSQPoXvjA9CPUGfDDnFN4aFw953hdXD9bcpMTK3V29UW",
  "key17": "2V9yJHWsBfVzNy9mHEwA7P4MiUpqHgRdnNRcESarBbawqCFxM8JPQCVzGtwoP1m3yzxFRTbtRp2SekuFmbo8W3RC",
  "key18": "4hbd8mL66Co9XAq6zBPUoGtnbU5BNb5GmJcqUymX8uEvDCU5MhTrTp3s5wAnmosCLNbmdSP3AysctmPcrZ8BJRkM",
  "key19": "5sVkDhUyRrKo5LcdcqzJWxGwAqBjv6KCH3ExwJSTAsSvob1SRywTDk1oq8PR6ZuQecUtcuxntLuEu4SeyKKNxEnp",
  "key20": "Lw5Zw6j8taXVsBDzK6bt3RHw8BTkFeQb9FiuFLvGCqQTmnZWe7qdbX5A1UkncXeBmV5tooM3FAnKGvzaRoehTzc",
  "key21": "4mt4TMNFEZDzJXMrHQrSVvcL9PfPvwqfDqNz2LUC8oEgpJguAccVHLj7hnmJtxp2bT1JXRBaJmZDEbz8gFFc7WVg",
  "key22": "3bCyWj8kj15YRyxQm6tyLiAq7agjMQqxR5fVB3sHzG7AaLJ4RZ4aYhtJFHnKavCa2VencCafYX2x9RnwtUdwcZmb",
  "key23": "5RF2XQ3f6KbDyYcWde39xZr2sXsj5PKfGc7ZgjFZ3pGKf2A4FfwULBqyrXnApeU2jfDiyEjYyFrLXn14q9pzN7z7",
  "key24": "5r9AsRFAVMjvViXXcUf5qUGis1yT1G8pYZdfbYNwM5LbPkj4xcFkwQhxrX3198D462pq6jpwWdJ8JeV5wNhvihTG",
  "key25": "AE4miyCTKtLUj2YDoNix2vyMP432CQony6Z8wb5w5c52Bmh6SzHXV9o7fGaxvBwARvAEqvd4gf9Y5PjnaFcjL5V",
  "key26": "44rd2KjX9wyXkio48GP1Kzxo3L2jqsDvc6tAQmMmKDmMqUspNDEciMgXctn1UNN6HkRch5GrMALTa8GeUnKd5RPc",
  "key27": "5Gp9yVCAZtsxUGeCXMKrzh5QAyTUKWDnsaS91EnwkmwfizT5bFZ1PKSvaHtUKzsPqvkZMXEF6fbyNYUf9u4yAH4Y",
  "key28": "3kSfnEbtmySw7JfdYeeHpcQf8fzPy8gRhEA2wUertRgCfeYvTc1kBwToxLAiEED2YitjM1D1tZXsoQVQD3qb3iy",
  "key29": "2NA9g4Tj8ZcYFrS3zRu3gcmCPtit8QkzovB1CmS1PtNKUysoab9uQ68ZqPFxi8q2wVumYS3FtpU1sZzvg9J7FSde",
  "key30": "1i2c4eNXNWDX2bGXgifniwnq9AnqZXXoP2wr5qnJsr9JWiBhjjpJwt9Rwxwes23m5zE46suf6ZvshFhEheStYhd",
  "key31": "5rXMnSGJWeTcbEcHn7QX42PtgZXQy1vd8VfZL733MRVKnJsxudzkXjQRqBzem9s2buDreAccMUvy3NZcX6CUxc4n",
  "key32": "4s9Tm6nZAoCQsc123ymvikvxbxBjvmqBPhqrbBiVnt1AJKoS6fgxAaAR2Uv8vMAbK6UY1AKGmiAPb8mLr23RtJyy",
  "key33": "36LNGcsZoWALyJ42dKFGxrd41kdY4RuR9wMgLJWnVBuxUyrV43NTzazStFNNwKEzBXchNfPjU5K4uupo1Q6brgQ7",
  "key34": "5BMMweFGBWqvfPSJLk3LN5MjpmTTqTw9YT38aQBFecM2smk9GiYP8G6TMCSgFsrG3ZjV1AAk7Grqm9Sdp9JJTmMs",
  "key35": "386oxecQdxeWSsyExizJVDZFdsZTwZD6jmW95GDhRLnCM7od7SGmq8evAMuPct3KZsERmJDny4TsbcA71rPUpDG2",
  "key36": "4gcxniAqV5E5kd2hGPMWQBkMzurKbBVUGSj9Z61SrwK1GnF2k6q8Nw4PwBEn1xk7kiqndTTi9Tadkgxq93NVN9pm",
  "key37": "trbSiWBSXgP8egxvgehVAygEyjM6spfeuK5cgEtQY94vJKcVd8g7AEUmPt6qZnPNTkzZ3oAS1Smc1Rme6hsrotQ"
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
