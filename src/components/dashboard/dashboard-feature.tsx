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
    "5gS8nrjgcKDhXqo3MuRqQxCV4ZtuqEQAEsaoWWetF3k6TzQDgefRBHsuCV5PtfJveJLkotnRqXXfuF17qoinkcEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vE4e3Cq46o8rWyXFWT159MUKomGkHwcGqoLN1boAm9qYZ5qEuRFHrEiupkrU28USWMiK6Xtxuc3ZcfT8Vpgay2c",
  "key1": "54v4WhJEQwBfmcFMsb6kELCTWHrLhU4dgneoyAwKbYTcgECSK7e8DpnsTvDeVqy83Zpe4VxootY7Lkq5Pu5rkZoc",
  "key2": "4JpKNpXvXqffRLu8mpHFeevYcZxUWEuwgXjPYN62eZ32K8vrBSecQdkPbte4EbN73WyBDFLjGHSbNTRPfWTwXpEQ",
  "key3": "3wjiybBagSTjn4cwQCxdWZGsQoLFZPd9AwTBPSfGLcX7yx7EPFaNtXs3ZHgHwVmA6MQP3WqHgbrfxFPaApsvuVe6",
  "key4": "3ifz6ZMk77W2TEYo55RtzvjwQUA7TfvdkBSQiikPAw96BU48A4nhgy4HuSAArM9Sbp69z1zfwFQEvSADqKJ63Ck7",
  "key5": "4mem6BSiea9FYwfTTHYVS9eBh7Fak5uEiBfTEUrAjWxYP4KRC58Co5fbd66AnDnmcYUCERkAvBmorUaViL2J8FM2",
  "key6": "3FJHN6JchUfLHzVCMEvDL2Y8Asntr3FcsK9eJtnAk8sbvFDTGDNhLNRWhVLvTTZvEf1qq1jqWMSA2TnqcFPm97Ej",
  "key7": "5fFQXA6H8N7QXXWnG6MRtKgqUc7wBpSSjPqNThGrV9CwoC4oQDmq39y1P3NGSRS7d6sSDGf76iVTvxbLBtcMm4La",
  "key8": "3w5xggudTZJVWCipPuKwme49Qtpi3LD564vM6PWCSRS2a8cXq5jS7wuPXNxJ7GZSy9PAyzYx8p2puQUynh97AmEs",
  "key9": "ZRH1hbggw9hdTa9jCubUtEYyPB285YmkbBWfsXMhYEhpxsJG5L5L3ZPnvpC1rwkkxQmBCkRC6r8Y8hHsCUgTweP",
  "key10": "3R7c6zbSf5hv5Px1RFaLUVBv62MxJNCrh1TYvsWTgM5zaCM3wvqjnHzipZWNvPF8B8ECDad5KzfcziwovgHtuQ7K",
  "key11": "jG4roYbG4a7tyTM5XEQrS7zdKmry2PNfenPt25hwvuzhziEH3yGjpbrsefvgn6wSdqQZrTFjtWnHnAr9dyvoJrC",
  "key12": "5nYrr7G3JKW2F8PdoeDdP1qrEhsqp3SPx8BnU8YKotUQt3KRtWVH2WXad84TbrgtDs3HgY8TYWa5WejpxgtisiDU",
  "key13": "5NgbZKkzkK6151tYv1uRT9dQxyhrMn44nm4PL4Qfoy5PpSwVGSrVxrFBs9J2oQ9vPHMtXAPiZdQv8CYt4oZWN2s8",
  "key14": "TsowBtks6HPJoaNSs8cN9b2Ye281b64mVCeu7wpWrhiSskFDRLkEvBsb8uG6YZMkjXycviDHLyeQXuBnDKs2WT9",
  "key15": "4CccpsY4digsnKDrcJf56bgkRcZmrdJSheUqzAtwWHYEMvoZgyvZCXgv9P8ZtS4Knb67tN5XyjYn6Pay6j1rRg9G",
  "key16": "4pDPqQyEv7tq5d6y3hf69jibPMAa7Q6PKJ2qyxVviacEPVmH6t5HNat9ZWs6FJ59sQE86UDYCV9pZYobaBtFPiF4",
  "key17": "28BCYfMw12ApcsphU3JGNwgoXMwPizLzxoRQ8Sq4GuJe7XFpGBY7J3DU565mkR68JNPXBk1Dv1Afzxa6UbPb1EFd",
  "key18": "2sU82tgaHF3DrjopLZxBxHMARCmKxdJzrdtZeuFRjqXB3ZUN9FEFkYTsSSKxAgQb1hUSQ47nptKBZ5NM4eiB4nSM",
  "key19": "4o1b9iS6z2rFgj1GzHkbvBQ69SgMyRqvb4Mo2wohis6M3noxuNyNgZ6adPTVMkU5JF7hNX5veg8L8DDW3pp5QV35",
  "key20": "64W7Z1r6uRCbEwmobTRieoKEr9LaXteJLkjaj2nZH2MjD4UoKGJUzfod5B8Uit1BNMTGbyMFYrmJfZbiHnSyjuG5",
  "key21": "39C5L84f2N2rRTkAria48C6ZuKAMWrWXdEJuRmFNey1C3cEShZZPCEz1RUrXN1QDDVU9jowSULPHFM983SAugypC",
  "key22": "3Y7FzPYtyCh9xUEkLmyxJXCy6fU15HsbQ3zav4iu6CjK3aDVQL4MTBDvtHrxzmTNiBzzjNnysG3fehGvwR4jGDwJ",
  "key23": "2oshoXMqPCsRXcrySRA2dDJ37YKBA1pmFF6eZLSKfAbihPQ8qohxPGRDgBzYz6AbR3EsrPhy4TZbYYsF7sxQ4rhb",
  "key24": "3JXwwQ5Axz3zzmuN7T2Tyyw2gqpzQGYHmfxzsAgTvtdsQVnpEkdQHHkeZYwGdznMk4cb64PicancCQRJNw6hFf2o",
  "key25": "4PHXLxr1dDgdUwn2ZH4VEK35NnHjGA54bhW2nwuY4VZihApCMFaQXnAwwxeF9Ww2TNACUxNYzXBV754bTmt8SqMZ",
  "key26": "5qBHkgbeAXBA8kR6ckUB3JvriZQD8S9UykNeNCEeuuPvz1sqHwYoAQeDa7FeTVpQM75Fdwn1t9WXd9Btdm275SDy",
  "key27": "SecazFfDquHpuPYAP8vh4bCuCgcdvE2oF615BFZvafLted8djYF6BnpLqrPSfPb4s2GvuTGVxmkimJhUmaF2e3M",
  "key28": "3dyMsMVAxwfdeMdgZMNtgAVSkuMzbBTFp2RKZ4xW1ZA1Jbds7qHTrmjcdYVuamr5Zho1FBqdBtpEbSjVv4hoQfZN",
  "key29": "3PL7fpVXemgTV3354JMhnyXPBwabQSEcjRiJrVcrTyqDBWvMktbCuDVq11U83QBgiijV2HjT75sxYDgdvfGk1ZJB",
  "key30": "3UVwGweDd1ZquZ1NeUcPPaBvCN8CNGJxwzrr5SqCSGWZPEuBQwDgpDPdoCnE9XTFFDyVqFnwQEGFbP7tbu1MEQSz",
  "key31": "32oTUbjC9fdoa4HuCTi73H6cL7dtDGUMhdfB6eW6PEyemr6SVZiT35eN96MV31uVsSA5Yr2FWeJ5kEkEKFJtwGrH",
  "key32": "3jgBBZ4hgBeMZy6JEaiVcDZEcNHyvYqF72zHQw1y5YKeLxcTDymbo8VtiFKMLBjaGEWtY3wqF3AzzUwkDRyGEdpW",
  "key33": "XJgMpXkya3HTPdr8eiTR5KhZRnosv2reeBhAkZZeMjAzsDtWnFsgenYRZ25bjfwke9LFpVPMqT83kvuNZmo3bqx",
  "key34": "4AGZpE2ziib928XTDDM1iv4fHrKtUyRGrjufvavFim4pdEk3GhYvkE6JShDUDPyWLRpdAGc1psTtnqCJrhNfGun1",
  "key35": "3CsM4UZXwUXwuciJn8K3QiZ67iYQAvYMDxwRurDv2qFXgdx1q9EDTiB1L2iuqnSDSCh5TSCdnXXaQhgRC3kYvvZC",
  "key36": "5AEMZpnE6PP29qhfpR8WsAa3e9ahKXQqoH8GRzSd8m5bmX8fzhbqURptt7C3zWH7WqL86ji8GUM9paRTqKrMsauj",
  "key37": "K1JG9RSn9UuqwFGVQ61X7ZnMjaLh51q9z7VaMCbi4Q47yn8tYAw5zrpJm146tALAN2V9WsarUspus4jEuyQUNQ1",
  "key38": "5EDcHVUJqw6kmSoGCXzXG6hkZ92S4JwNeWKQdYDYdV2jzuiMajQv8sCrU8TVJ4TKDAj9wunHdrTw3bDuVk8ei44y",
  "key39": "2E53SMtuSirGaVvSEYeD5NVL2ARyWkJb9Z8hAuztjHFbEgoFVJRU54MbGvPcy6hSLH7YWtAefdNPLSdeVZPkDj9r",
  "key40": "2yZncKeTWuqgSdN8Kd48uKQ2qYZFc5XjTQaCkbDMZcQp7Lg7ezBTxESoyombGUjXzfhNAkh9qtkw7Wk6XCPAfEmx",
  "key41": "4JexFkCXFHX18uoECTNnTt6UVAzruqg2Z86BeCfCprRsbWFKBziJtn1VSqMFpuGoxeWuLuPv5zyV9hL4dE5UqEMD",
  "key42": "VCqGMzgZhkA8mJiC8DTmDJyphQ3y7h1qoCvT1kU7pkkJns5mUAhz5m8yuhWw9DwauKcduB3v3uZD7hXVwNeBVYW",
  "key43": "2qTXpxgfVPNG9Xf6Nt167FBqNroeDNGUXJyUyQEBp4UJXo4aESmo3zZqoBnyxJNKAGhGRR23G9qZdD72chUDvRpc",
  "key44": "4awtWUcUn3ckKHaePyQp5iEp1aGzv3Frp8HAvtMJHvPexrvWYkEzNgtWsDhf6UgFRXt9p5e2K4Vaxo5hvEjwq6oz",
  "key45": "3GoGEmjaix9hYZYK4abR9dDvKeWv4XV77vQdpfGgTRkVPXVqB94T4V33BCUtFzGBxuH7XmCNEJLcBZW146s8SByE"
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
