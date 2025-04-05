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
    "3xJ5kXazHDx85eAjMszvtfT7vcD1cHicaR9H5pvWCpyeyKFszXqau1eR8Rx6RRcvhh4XL4X6UhPcxwxiavqD5Mmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XgxAUCBtW8A5iETFGxS2rDBMydJ6J5dgkoJ1yjTTXTtanmsYCdowqZqbFhZMLYzBJVrKgN5cVtRWZaMAeE2L4tN",
  "key1": "4BdVZtNvu1qxRKu8r5G1HzSsdzZdFBkJb4TkvqwayYvxkwCPFxrhebht5MRNKsv6Tsbs7fGZUw8FR6UjVwvZdGvx",
  "key2": "otiCCSnSwuvoog6DrCHw7EKLnDAzYbSfDXmWYTZxkC6iHBWAxTMoy1rM9C4xVamsVUcGTYPBC7Qrz7r3iZydjok",
  "key3": "3S9WwthjwA6sMtvVPSMuHrE1H7u6swBqtoe8b31LmiPrmYSwMwroa32otyCTSAJdwtM61LyyLs2uT5ku1Hmo8eEe",
  "key4": "29zwnkkisKXiDr2EpqcrVxdVJsNyET9NzGNXVdfwbxi4B5XsHXfmLqjX4tRTGJE8iKVHiqgFeBPLwuiihAZ8eYNM",
  "key5": "4Dr27gfx2oXZK8rpdcnYX91K63vki89eTR4pcB6gG9btuhzDxoiGQD9U2ttyrrmhd61D7rZqu725qN9xRfAWao1b",
  "key6": "2bijGvkvSoLzV4McQ1gFy3rWdMzSu27jkiYiBchpomCCe4JxTfMSG1gP59UNM63wxWxvUGZ66wTWHv9xhn8Nf73e",
  "key7": "5znAGhQtY9MNPammGbmtS1PCA1X3EPScZQNmGPwf9ceGQxaDgoN1puujs4jMdBkecXNpjcVe4z8TQSNvhD7eRabX",
  "key8": "5KD8YaFzMdbjNFbeCJvev7mg2omrDMwhiyaicrBL38hu2RY834DWYbYXUQwcD2P22PHG4YHJQaz9uAzYM8f4wh24",
  "key9": "62K5v5Miwa9o1DPaKrdLP27KZEnRJvQEVwp9XFVotWsw9Xbq9u9x4329ZLJHCNTos7RgKeR7zgwwczod1VdX5Znp",
  "key10": "4R318uSTCfGJz8SbB9KEKfnkM6zzZpD68hs3MHqJNmDXcj2orQkVspJFHLBJ177Tn6Ju753HZ6L3tMbLC7aW5GFZ",
  "key11": "5R3ge55EYkNBekicMnzNBSJaqy8Evs6CicXCVmwtHpL2ZTXMwsk2LP8c283wB6aGZ2BDpuj5bzNs3FTZtFpiD4FN",
  "key12": "62gd5H4yzvaxskqU9dF8fanMT2snDaSihdTXAJSYyLGj6jySDC2L5eGUbXafEJpB8AWtf8GmE8qu4HsADdweQzPZ",
  "key13": "5oq2Z9i2UaL76pJ9QuXMooLHGqL3DYwzmihsEvGMjote1ahjKB4Ps2ZixXV3TQF5ydSvdcQ3Hi5Xr72HGa485mMh",
  "key14": "3Wc8uoBskG3d5BimifTkcNQXbsqruBktbUay7eu9N9KQMSWyuafEM26JW8pNJv1BYGj7dkANxtSTq43Dz6BX5Fzm",
  "key15": "35hC93FQyMkshkUNg1vCuV9abbJxWVPGLaETz6FRULK7NHSWYXwZFDtQHbS5u1bDnXkNdZFBeKAPtJtBURbTGRUc",
  "key16": "3nLL1oKKGmrEKdW8Bmis961aSCTw2t31ot2QqDCNFWgBXeysSMV33wi2j5BcCk1NnKFpGZhRGzB5FwWRFF2CTv24",
  "key17": "3dq8FLv89iCqLS59BfTveceHfbD9XHoV5VF4qseQmNsAw1WkLBaGuRkQEfrfZ1dUoUjovcvfC24doZYXJw9ZmjVM",
  "key18": "jfDbcajLKND6c49M4h2jXTtT2W52if47L7fcWmTo2gfcRLMe12dMrpmMREhbY4fbzk27xT2Uvsh61L8GTy4vVdd",
  "key19": "2vxFvQzmgAuXzvJoVyJZLr9UG1wfNW61KwcV18sygunYffiXHai4XJubbKmStZhXcVrYnLnHtzr8ckt4kANgrCFo",
  "key20": "3dBwYmFsCJMaWY7VoTFBfR1YPiVSD2fQp8uYusBrBNM6hcGxx1uToEpYsVK1tWMQ7S6fM4wAXdpG3Bb7d4u4QCvk",
  "key21": "4HPFZTRZ9T59ZSTezzG89dee5Xor79yRUBVrdwjFvtmGj8k3NRBawNcQnZ7LCPcfzV8eZwgPVBzh9S4gG8hVTn8k",
  "key22": "4F5fKh7P3mMSQQkQFqa2kLRtgkcJJX21bY2EpdmYWvwfPxPotREGnMcccGTqN3KUy3Xkw2o6kVCT9VGFQJb6Zyhc",
  "key23": "ssq7vs3xKjHsTAQ6sLYhZoX1XEfXbmRMDAnD818hezaiZdXavqJxj32JrRPoRJg418VA5VhjGVEYjgoP8R7GReY",
  "key24": "3Ut8PtRaf61ttiZVMQ8qAkpExZB5HMeD9Uht5LJdzb1k2hZM86LTwAhpLzA8hD9CX8k78srXYPuWHpLCj4MSy4zd",
  "key25": "4ARpUVvZ3qCgA5Qm6Unt1k6KT7h9Zw85odwW8v6yoYk4SgyvVqMPbktQQBPSzBYnuYXJH9g2Ke36uUVQP2PsegCN",
  "key26": "5HfLAQDMZ3uQMbbj2U3XoPMGw76XYEWPVjbKfqc9FMor8P6MxvhJzJevMZbuKhfEKHbdbpoagZTv6y9wMtnyYfYa",
  "key27": "vgisQLRuypEhHRFMzSB9FzFigg4TxEcLZ7CrZ288KcqANPy5aPicQnyrsTXTUam2bSofSzNKzh3LHixYDQsH8d5",
  "key28": "4aewddnm2oFtUSXLKyQNGZegcTcnuR2DuSFU6CCGW2DHLsiaGB3Ns32KZyZXAteC1gxD36ogJVfVpdkQ2P8wd89T",
  "key29": "2wbsFQ3UvESSG6xW53DG1hP6j5nezJEgdvujpN1CUPLn4Zeon7myAjfNhduakSmQRdLFvfkSnpP9ZMB5tRsPQDcA",
  "key30": "3Ft47xB5qCzcrqJszGVMmCos9c3cCeBweLv6oUggS4vCxJYX2usswvKZkWzs3oFNtCjGeSj5vnZwt7oD8y8efjUw",
  "key31": "7SUJ58DSUJgH7M86UnyYhDjrYMgddxNKU2HoWdAva4wEb7KkLPPCtNZb1VFD4c7S5GCRL697Q5KnFVEetjaaewD",
  "key32": "35snpnUhw8rtprz6ovfauUhmrqxtbGb3bfCqNvJqwzkb8bLcFYYVEpqWE86M6Mo7FvagkWquCcEn2dbKM9jnFRep",
  "key33": "96Tcbp4RHQf46PFrebSFFU1aLmUfAxKqgg2RcPopNKqce6DkqELJVkAELn3EFhPnUVD446ymb6HrmnFcFEVcvDK",
  "key34": "5oaRG2yzzPMXaUVWAX2MiEogk5Rns9JjvAdJgDuCir3mWYG5DkkXsPvULUcinmmLqRnyLKNoaJuieF89uszoteBW",
  "key35": "29g3CfW4PCAphx2zquc4kL5sg2y7XhRxYFqPDjs23YQW5LSmTmaRxngwb3mU8zWKqpmSozHgZoR7kcy21NbVXQF1",
  "key36": "55UyQ1bkzEvKTxfCf4L4BBykcqAbtPc7QJsU1DLLgRHW11jYQ4XtNg1ZsEsoXx1oLkU15YjVM1kTunuaoveQ6zJD",
  "key37": "5ouTSZ8rc9SeWbWvPdcQwwcBNSg3SyLyLHqjkAgaivqHfwKKo68PQUdJp5n3JT3hxQCfDNZQ4LbFDv8sZanXHB8x",
  "key38": "3erST6b5T3D52izfgFaZM653CBrqC9dae78tD3LCwrXvfJk7Ng9HHVBViWqxuzPGLbKbRRY756G6sHggKJV7rzR7",
  "key39": "64kDFsqvru5sev92yvj2h82c8JKExddVgsCKVFhampUSpyFy6LCeZ3k7W7e9H1VeqPfbiqGnuw4gePkwbupbYxSS",
  "key40": "4BikUhuCzWuBBqQVpaLobL47kRj789PHAzPVBsK9YPovdfGiebHUra8wo4SsdHYSQKQ7VispD9mmXyrYc8RMejsR",
  "key41": "5ogsxgUez1WTi5PKehiAQJTAAkZ2mo1GPHTWtVrcMGfoMFTVnLydMBzvqnA1b4fJtkC9BRP2eMoTip7wghLN8DWV",
  "key42": "3Eb83naGdRKwSKzxAFZT3XfZmg137AdaSCxFxo6g6NeDBSxitgkaie5RZzD637EeowZWnA3QWQHqcPXQQAm8tPch"
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
