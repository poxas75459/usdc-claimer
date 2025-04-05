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
    "3UkDAVJF4S58dzdcuZiNwpLMkGcREnEkTxz4WMLaEDRyqoAVCPeW22q3cXMpgBvtwbU9ayLKELbqJNS6vMor2Rtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQtRYbjCEennGAjXh6Kgd8a9JbKYM67NPFmSwavG6C2YMvrFDfRrTAkHQLNbh2564ZcWWxgVcBjjBiKQNuGPSWN",
  "key1": "3nwYdgiQyYwJz6xWzh7KsLJ2xB8syFHb9mBUC649hityoRUrwowU9VSYepiA6ZvVT2TXYqr4HtP4ZSF4zpkYo5nT",
  "key2": "2jczEkNHpENbeS9wHhqUCCvFojuqqMahVbrAe2BuNPv5sUEbWPkDLcG8ikE4qC5wLCLLumdvVY4GWbEf7zYEPLVo",
  "key3": "32riyZmcEGJN7XrqYHyNq9BFQGDYWLK4wNNvXby82UWDZGsukGQBpAMBfbgSo5adECCG26LQehQVHV1AVQREJTmk",
  "key4": "4kZ785iRK3r8cGMrMVJFzcpXds1H51fRxXk9HUf7sH6LUC7ZsKKFPfwDuE7YJsEQVJppNUzi2DdcPTcAFDHnBU3L",
  "key5": "2MwNTwBTfn2XkszwrkGrhNYi4geqQ5YE1MWAGiWFa8WoXZxhK3eyMgUyZTQJXsavqYme1benWVShjpXBd7c6mc3K",
  "key6": "27ABdoiuoDZJHK1MMTgz27zCzEZwFBMYqx3GGCBhZoQsubbGmPWjvFrt4h9m3TqAwni19xXG2PELUz8g3SDLSLeX",
  "key7": "Uo8XG7xYwCVVSKA84YvjjcEsKfD6s4tFWf2GWmRLNeGpja3DFnrH3aahv2zTbpJA7B5VBaKDB8JzAjM39ZkUXEG",
  "key8": "4zxQRva1miL8ib9YGqGVMAoWPgRG2WQYADm1dAhx66obX4ARWpYmAr77svYHt1Dg6u175cPn4fXXTUTx9KjETgEM",
  "key9": "2DNWAwRcfVd9gsfBnMju1Y7NYJDnP6aWaVzQHYWrbBqSgqz6hePy2dXmXv5EMzQvoyG5tv6KD9cQXaDuDSz44ws6",
  "key10": "4Cic7eam8xuYk2ZL51PnHxsB8hud3Ga1VhVgnWX9bVSuqvuEKwSCcyAwhFiX9SvLSw1Bu5u1onmtFX4WdoJYJouy",
  "key11": "4awh29smuHqVW6cydBWjuoTmMC7NbDv5wthv4B8GiVQwwSsCqZy21kWPYNtTeumnxHCPzZqLz3tbEhNKx8cYrsXY",
  "key12": "3U737NNRXmU5DQ8Toqx7KAMHruZ3ZCfMkyVt19N3KhweSwfzTfqPfmD2TDcbDsRWphHPiYcgjobbBu9VqL1HyZXz",
  "key13": "4fRWiSwkLZsWUE5vo85SLGsPLZvFkLYmFhYTmH2tVycXd79CcmmJso5aVRQ8K5ztvDu7gR69pLnbDN6JeAQ1JGtp",
  "key14": "6bYEA7DEGTaBx7mQbHTZnijxZznyzS1dhnPPWVPaDeYFuZbfDxPnWhnzJPQyMtXTjKcpnj6vqFdXj2W9pAeVuhf",
  "key15": "3BmRnTGBJRGczhWB5m13g8BWc2j4Wt9EVMJU75shQhmgo5VXeCaPHPHEEPQQbRqFktqffyTzvNmonhkBr8gZ1XmC",
  "key16": "2NsVJzwF3ZBXYNhdBWKTkdRFxwS6wgfyTKWTt9fi3TPVzUx53eSVYwWwKji5PsKo5yNpBBRuM9pc4dypaptyU6qz",
  "key17": "282dKgtVB5kfRorUEKZ4sFRkZRaz9HyFBhHGd3wKDvoNgrBvSYbGjsadRBo2b7qQmerVxf2wuTTCiVRapDW2Pg9E",
  "key18": "22jcXkzfext4vT5c6i2mtbCxBD32kfQ2bMVD3xwKwGNPjZwdgteaERknPTScyF86r9ePC4QJuBkB9jC4pp8RjEU8",
  "key19": "2kK1WveiN3rnH4EkXty4bfLr82nVuwdPn4qNisSxxU5z3PeTd8NSj6DkA7zMPvZAXdBYaZmc8yAiughhWH4o4X1a",
  "key20": "idLWB2mA8X29EppiQSQ91e6YKguXjiibTtrpNJbujiNig56KJYRQb3nBUh5R61atZChzD7sJEMstUZqZsJ53Ywy",
  "key21": "1W5VGV2wsJg5iAEYZFBG9FZ9ZB9LoJuQ4hpFgDhvxf2YGYCNCTJQYfGNKQBUEuriJ7Ba9cHaueMYGxnpTAqkqbE",
  "key22": "4Hot4S7yw62oRCMUfAy7aAGCGqyZyT7Xsjbbbo2wJ6W2aJJk9BPVVe1G2NnXg2JZ771eQdmft42X5eE2ft9nFSqG",
  "key23": "29a7hW8USocyNo34eNKQhY5nuRaWx38r7hQsx53whTAATg2BwyDUawwZEyHdWhK2UkJ734kYiMvNxXy4LjwpeFqd",
  "key24": "2Wbn84G7vy9K4hWmu4K4rBqvXk3BrDHKxyoFcxtsZDsEuuhHyJfLnCvBS83omTbCeDDMgYAnzBZg1VcvSMcg6KZY",
  "key25": "ak9BNEcBfp4ad2QFTyUDHD9ZRVZFBJPW8cYfbjBMi4nMxt6x1Fk5eioYswEEqpQQZhcZbXuMvUYuzaxWE4hHg21",
  "key26": "4CcdupJRN1SwGgyZ3UPbSZcgGwcgJYnt1ZzJ2jHfx5jg4QXa1ru51neckoqTUELjDct391hbHiLoC738a1qA3z4j",
  "key27": "26YfUzR2U5UkYtsViwjkxLVbnuJv1DCXhwVTRfYj6w5MYf7YUwAj92fKFnLozVnDab9xT96qmb6LzgczCpDRhAVJ",
  "key28": "5EUavHs3oUdBPsYjNuEjbE7hCzR4aCLM7BFMYovrvvBufHCi4oSU5W78ieBk252WPuULJTr5szgwSyAhRXiHQ5L6",
  "key29": "5TFtaazWQC5GELw7bhadCKrF6dtd8jCv2UMfYqM8CGqvmRvHNYnGZ9CUv3URocoWzmNxDJ78KCo6KPgbvwnK3d6g",
  "key30": "4PRSAwdvDS1oftaeV5jghFKRxS1hEdwtcdGMVNuz5rH9Q6FaezRP9HnnwBa38MqLrx8HHKTmwfrppp35EzX13vin",
  "key31": "hoGq5rK6UGqBw4cuctAx9BJVxLmpnBsqQrBUPcG7QotXhW23aHMEJS1ZDm19LYQ23KNLqLUQWpQNKzJLhcpHT5q",
  "key32": "36LuECfRsr7bWo3pu8Cpri1wPSG8Vqd6268NLU4quaSE5ieUX4uRvAAAgjFdnc6mD3Rsoyh226HW2h32m1NBnFaC",
  "key33": "4X9pEEG2v9pAuYKKZXKsd6SDWyXLdWhCtQgYX73HLdojFvpgVP6FbMpP7o1ZDFtF9KG1pBZ5c1D5NR5m6R2tnxeN",
  "key34": "3ozhTpjXyHeWtuEcfNU36KgGjfiJzkdSNfsFvAp1TrEg7K8qHrFKXfMx6U5N2PFzGjNmJjXUxm2whiSnKrCgndtN",
  "key35": "8YDBzxrKrhVspHpwLYX2bbuD3MjmJ2DKhRVTwfYjKokQpteiPZYqpZDbfUuvuQy2exeuwqmVBSZ6eC83VRdUADg",
  "key36": "ZYSUK2zG1paEHTWTRjHf2QkX6BEGqePadKt4E6ykptrF5Sg3faA4wKugjUkDyWgKHiydaEB33kbP3d1JLF2VN4Q",
  "key37": "e14t3q6BtpJjEqn12ohUivzHqWYDMTXDmsMyvfMx2TDtnc7cFdBiEknyEZBsWGK5RpEdMddAtCgxRpxigbjnssa",
  "key38": "28xpF868qo5DXk1tCsgHuPeEx57P3EjemaVa9nrX2waJrZ8Cbr8Vv1aUKkzn8cc2rDr19YkTecTBxxgQdenm92iu",
  "key39": "2HT7KsANgbvkFnQnkK9UChtxGhj9N6T64hV1bmxhMk1Lz8bcc3JdU8YktqoZghhc5yUzEuA5DXTprsrwHmSorbbd",
  "key40": "ZtngCiVJa9MHcFV4AVxGUJTPFG4PczGA1usL7ssmf4RfSZc5537LQHSfosB8BNXU2eBfn9NUGkHLUCSfwxywGZz",
  "key41": "5jmqeszR7T31EBWG8jTXfDCLDvGizapUUa9vXj5G5Rz7Cdqy5HFExEPxj9ww7nrvCPtVvFjW35gtj9tUYMvyLYQc",
  "key42": "5fXuXybwhZ4dckbMA9mWKcZp3Ji4eouTTeRrBUq6wPbW6e9BPuC9cW2CgVfVL58DupKErMSWhxyUmfQqRLEawkei",
  "key43": "e2UnrFNaWrbWH9Ag2gRHqo5z5Fb3rLkkCFofHQiMgKpXsN5CLUK6eeLhPLrmtJjxqVZvPuzjaMJ5oFPY6WaiKVb",
  "key44": "vgPFkERU5ew7ukco61tH7yZFNZBryhj2aGj73feTuTh8xPaZSRvj8iYaiHnNCmwhjyLtifRfCD7H5Ju4MuvcaFy",
  "key45": "51oMhcQoKsB9fqyZqUF4kBXZLNiEkqsT78sQw1MjxLYeoXrK4YMBYU6Pj3NKAWAznccu396voXEBxbvva1PTArKT",
  "key46": "62K1Uuw3m4Jq8Fu4MvwKdmwRt41V1UbxCXpbzbfn6SRjGEJknMe36KBZRCEmcymbmNkBmjjJgkdvJTbvg8oTRcK2",
  "key47": "xn61e9EM8ScjkTEfmLKJ2chCkxF2hDCatv1RCAXTiUkj3M4gXvBymb2aLH8E3k7rBsUB1RKwKEYFqUEAQbJfJfd"
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
