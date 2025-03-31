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
    "Tje2SBNfvivodSH9G7h2LcxavdrTscgjGsH4gmFUrZgK6GtLyRAojKvoPXVJSyLZM8rZjAfmghWELiTBTjDiPc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j4ooMW7Vxf2KTaN8JJZVTDumFU28Sdv4GQ3Qqeo2uYJpv42nJfcvQCXqAcyEFG8Gnt3VHPMYfe37vXA9cdNcn3r",
  "key1": "3Qi4mZ6yvhQVrjgv9YqVqK9P7dBX9R2gL1hHZZZTnnUEL9ZrX129KeYLesARx3Cr7eJrVLiQt3FogYu7RgZfr9oV",
  "key2": "49cq3oP63oZ77JnUY2YngX7iFvti7rFjbsTfN8a2Xjx2WZf1rEKvZUKo9MMpMWbpEExeUCGGt3f62kyxDktnz9W1",
  "key3": "4Qf2zGyDKxqEXRDPNZbRrhQJ2D26cnWzoNYyCU6EEgyokXwJ4tgUn6TYkDi1iuP3iZGh1PX1rDNGqLD2VQWhbTKJ",
  "key4": "3HY5Mg7HagWeYuPtPhwqsGoyCAnzSTqDDdoHfwUZseWLctzU9agLaKVahyZMh8mUgXUoVRJew9csTpCdbvVLjR9f",
  "key5": "STuDuTRhy99b4iP6ZJPZbshiHDXKMtXHciH3TjqdBFt4v9jqQvDaUbCCgHVxEodxsvCpUryhyFsqVA5PdwvR18c",
  "key6": "8dnbeq9KQxvcTdQKq221QsKNovMxh3HUEio76wVR8EPb19V1G1ueQsDDv3QWeuZeJoJRQ4eEPuML1MrbC5myX87",
  "key7": "5YzSp7nwja4SYctUx9MHDvE4rJy4yjR2kscs9h8jBATsPD9uitJUM1NYukc3NcYMPFr5jhdjr3L2sjXp4gBiqky1",
  "key8": "2HtcmWX2RrsPx3V1MnYKv3TtvzfRTVHENrQB4Hz3DY9ZeRHnkG5xYoWYE4YhLZ5fjnfY9wBJu8CAuWafxtrvqmiq",
  "key9": "HNPaJZX1pUsTn5EiG4Do4iN3GNsKDnMg75fbmRNH4tgRw5mFkFgsJY9BFqt9znRKasR7NUEVwPJP7oF22dGo9JT",
  "key10": "64P63pg8aNkdhD1FJKVi9EXFDHzyRDf2bNJwo83xHnTL7g1qr1MJbdf21758Yjp2iio5bmy8Ta3s1NbMGv8kwvp9",
  "key11": "8n8LSTrELhhmwPjPkEYM8KGsJUVERLAQ9XPHcsKiKQFiM9qeTdRVcdfVM9vx8LNJgkfzW7pTZ6KXM1TMKsPHrMH",
  "key12": "65wXAqBv1JQ8zKtihXsX5V5wKwggfA1AVTku7T74YZsdGCrJhbM1qBGs7jEXuVDbkZVyZQW6ZJtBxhsKkaW8YfRG",
  "key13": "5hDzsKhSA1CcMXb8pGrdMy7Zrc7XkFGyiQ7pJx4BFDHuLp87ASbtbBUBFFLU8mxDumzWqfjzsqPcrsBsSe9YEdpL",
  "key14": "2RUZLzst8uh53qp43Qpwf2dnRUhDjkRoKPJsiABPMFZFo8WEbfJv1z5W8MkcJ17vJFxN2douLykqvdGcYNjxTQhr",
  "key15": "4qwcPVy53g4mfN152H9c7HXU7L2vcgKZ5ReacFgoaP78c9Jwfaqjx1FkP3UiHFZ1HB8MnCwYQ43X8Vqm6k4FAJpo",
  "key16": "PyGdzudgrRhM5d8tddLxixUHg6TRWctNswsGgp6BsmfPcuTEYNxRr4LNciwjQg4BeCTB3YM6y4dX8Xn2d4Cgcv5",
  "key17": "3WxZo1GFRiFGVgSA5F75H2e18B7P73ihuYHvhubkTcCXGgCeTpg7ExFrzUvZvWYyk6QTK3yiG3Vy6wB7JHkmt6Tw",
  "key18": "3G2obT5PUZC1XwczbAgTXijpvYHUVZfD4yeFpta79MncPZUeYzJai1TYD61QCdC3w825Pzym3u6iCXNDx1DTApF3",
  "key19": "4DtstoQoi4TGNFNZjeU1SrGmSR4Zf94uSRy16ANvXgda3dRX59xxPaFK6EpnKEnQVdou137fYQYcbpZ8TwUD72mY",
  "key20": "2KVFyoda8QjK1WiURJ8oe9P4wuB9A9cHYpVyk3BJGMFjvRq7xgxb8XZVZGjWmBvfJzmgL8BxP7V7HhnqEtcWitcj",
  "key21": "2pTCLUJm2gHucFoMHAH9QNQVj93PLndpwH9fJhcGPYgmr4EzqcWTEdC1si7bQXSZ3GCGUs37SoizDeRgzXorNWsi",
  "key22": "3pYEgZb9YiVs4Ygste6iVYAxgaxiu1QKMQJcFMdpzyoHheCEHtVgzndV8dVAKxojBr326y7huXELJnLWN3tuWLuv",
  "key23": "ZuQUpYwvhnQJq61FHkrVLNKymHazTzB6aajDkChhE9DiohXzDnwxN3Ztqp1fA3oaKxsMTqupsVSbtZjJp5ASPHb",
  "key24": "3u33cESSzw4HJFxJk7PWZEvY5F3w79UuAZPjLgEM5MMFBGgXxVeo9botKJgyPtCDMGt3fhR2g99m9q6owoJL7GyF",
  "key25": "27ST8nkXxe4KVFXgSwo38CkrTATGkJrH7vNAReFkGnziiHfTzVLDYzprvH5ddyZ53M4xp2JzceaGqWbZZAQMbR1L",
  "key26": "2tNCsUWaWFuZWWbB9aMUDJdjCu8Uq5wXTmfB1Jzp6nMoDY6Zd4ng3L9JFaYD9GwEN8SGeLX7Nz9ZQfF416cXeWJM",
  "key27": "s8pkyVzMT2BYLUUxgu1jBjas1M8iAsBtkaQ26g5PRp2RbHqNah3asFVE8kuqPd3bmGrmcccKmydQZURNdyPYWo4",
  "key28": "Y1CLbaSPZHobPL6S9vNNmcVKaXXqLj4b9Ag8BvSxGHse3Gi4fxKnZZdaXg8heJiTNomCCNFgwPTXN6vaRKCQvJf",
  "key29": "5k3pcZDay1a5QoJFLFUX5E56hzEZzbzFFcNCvBwH7ZSLcW7YVGbhapbh85Apamo5R4dYzsgeG5FtyHMFPeRLDDPg",
  "key30": "5pe6VpLC8xaFMzEDbFqpH3LbeYwCNkdHNe79rA3Lq7V4HXR5y77wLxWoPUdQ3mz6p5EThRKV1tJXC8VcE8GVa13V",
  "key31": "3iBPyc5JQ4M4mMmqGGDNVEa5JKWU1XacmNiKUqZQNZoSs2pAGzSfWBuEtebiaxeeFpKYLAYnXWBmzL9iX3x7QqgG",
  "key32": "5TpuQvfEYMY5Hen46QoMBnquFrZZ1zQK6cjxdCbLqybm29NsQVhbaiXiQKs1NzL7hnyTgVBv2FReAh4Bu8DoZRdt",
  "key33": "GNiPTZJjrxT4Q93FD49uRo9vx4ty689XDwfhB4Hq4uiddDEYu5dq3Tw69jpYBSGay2T1VjSmg7YV6n59tr8RDwU",
  "key34": "3xUC2nkc6QeY2rP9QRK4xHEMMvfrdbF14VJeLaJHCbrR2g8XAeBH28brUnWXdQDoVy4LeSePNa7bTkarxVkYpQeB",
  "key35": "2NzHHGgPUaXB1C7UjCjL2VdHZbWBAqcNp14qbe3iySMWSVnKhf4f5CJLzzZj3KLqNYfP84HNi7bwbH3HxEQj1RgC",
  "key36": "2L8TSQt8fyAk5pW4JHaMaWKC3FQ6MW3BhxDRCBXQY5EqwTz1kb6YXK2PkDTF6z3QtBJEhk31BfMaZ4cTzEBaqgv5",
  "key37": "F7AZdn2L3EEJZiLkNVQrEPpBStZZCcyQQpFjG28ZtLQhdvRBRZy52ge44zjfKpCAAL5bkeZim1QWPtVMRGtVtc9"
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
