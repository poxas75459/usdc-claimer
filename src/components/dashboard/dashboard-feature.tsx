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
    "5QTsKh2U1eswUfXQEnJkx43bbTAD2ndn8ihn46kPcDB2XkrJci9QGueYNigMY4y3RDmE2UFtYHqg4pUmZ5zBcZ8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3shJk4DTWKrd9UeaGRbadhwGy7rJSkeGqNpHfjzYFbRsKReUjh5nic2WcrUjrzvbQtPVuv2nHVZx6R8tjPTpJQ9J",
  "key1": "5TKvCAh2ewU9Y23fc6AiRcSoyeXcyYrxZNRDPGtXAiGQnc6LQW8X94JK5uowgXG85KJCmUQTWaKEHKVmBtZj6drg",
  "key2": "2QocWxQxFxhonzSncWjqJEeXoYH3tbSeyceh8RRsDSTuDBAHcDncnAet2hryfmwpi3Y3qA8A5t1jRNLhQQw1393v",
  "key3": "WcaPoXSyD7VhYez76HxTbMc17oMM7eiZFcXGbSvS7GLkSznr3fbnqRiuFeKnfyfPb2TYUNxmXW83jCox7BG4jvY",
  "key4": "37wALVr8QuLW6jwnWb4gPXo2c3XmztCHWmud9vbgHn7WU8Lcuzo9tGrtUtENc8yVqvM1uMirLXViR3aqnAsSEjWF",
  "key5": "3Q484H41FL9ryHybficzZw5jGN7Ae3XrFLTXFai9jgZurvXLGoUDjfuDnmsFRUtUHy5VB3vNt1E9GMd15Z9zVhQD",
  "key6": "4Ex8wmeiJNUP2odrEgrrTiyDR5LZPjXspDdcuUCadcJhZe2M2xtsEcgjZ9AVBiTxQvokracVoC7Aa3zV7GUHsRR8",
  "key7": "5HcSeG1MMZFw1TmAyPsjqL9ATNrZs7Cach7rFH3Gp6BtYZBZQGeeb1ds8MpnDmv5jDgGW111g8se3j4hzocmpVrZ",
  "key8": "63DePMgfwnwEr5cPrUTaQgyYuyxbX7FhDknryAyN4NUR7pEM5ifrztMkTH73wmiWKu9ou5JtdLYiLWWTpLWerYm4",
  "key9": "3S6tPt4iBWVKyHCyNR5VkQdgTAdctY1FaZJ3ySjgAPPgnkgz3wE5DGY2mD7wJRz57394VpW8cyihmGnQoY3fPCoW",
  "key10": "4odMPe4Bg9kbfUvio6amJ3tPcM8YVQTcTVrvXyq79HfhPXR7zL49u5y4GXuETvWk4uCWnhNWZs4trEwQMLtDZCKs",
  "key11": "5HWDkvCfKtZK6iJWrUh14Bp5XxAY1hd57MP5xsCV87dTUc56eLziSAd7CsouGXnGusNUEWvc5e9o8kxcAtbuV5si",
  "key12": "2SH6yhQHtaKsfNZjWfpgPDRzKABvAhttRf8Znq4DxLm8MDuF2zWRjDDPKqVi6fJJWC3qj2wctadh5wcrMuf16U1R",
  "key13": "33jMHqocnF6REZZAVu9N19aknR2SHsChbYJMeTH6DUkHT6Us4q28beXt1EqTNUi6MMCw1sj2e7EpDai6LTA8DjF9",
  "key14": "57N4rvVx8tpaUKUZE6CnQX3XFNpeaAQzsRo9zbyxYwbjZecHZqEV66wFJbzu97DRxMRLPnyWPRHkG93ULCv9yzXo",
  "key15": "5TyFeQpnmKDvHZ2vXkmgpoyEeV5ZzQHgF9g5drJ3aLt1SCH3weSDpcsvCTqwKUHrFhSSCt8QJZk8gpPipmcKyr1V",
  "key16": "2VNKwEwnZqgnUYGjE6BsFidE4ToHoxqnRD1GtpqjhJqLjZLhK9rCd2w5z8rRrUaBpryexV6VGzR3YLkEPMN5UbMJ",
  "key17": "5RGUzc1Cw4nUV5LYmLBxNogFkoZVrC3Qs8bFA7MWc9oRrvXTNVB9jcwx51SYG2tHSxRiJ9gW38wbwVMjcG2NPDTw",
  "key18": "5CfK9NkCoiB2b1FDQGkzoC9DMUtNLh7w3z7strRZNTyf5Zn2XjE3gSj9PJ1vh1E4eTFut3Gc55oSkLK4e3sMH6k1",
  "key19": "2PWU3fY4a6fgK8YuHFD6AT8UmApNxXz9YEeFJJKR8GN1nxnXVGXBkB8ErbRr7n5LjEbUb1TG6CiQzEDvcUCK7jjg",
  "key20": "5bEujPMZVv2x1WAZKC1pRnsUtVxDFXznSunqcgzcFygbgEisLGpWcje6N56Fr6cDFExVwib75AdgNAh5ejPL4xWQ",
  "key21": "26EhiTaCnnzKZQkpPmXSpPN2UFVYxb8DqvMMkecJTPcTUXBJL9UXYMxaW1UHr1ukDEjz1MVzpVwZcxQ2zVWxEeg4",
  "key22": "666mFpud1eeEN5vzcr81Ua2wMrKZ2vUCnEDkxC1g6Nyk3uAja8i4JEymz4XuHYrZGetZuFf8CGAjM2q8g5xYdkSJ",
  "key23": "655QtFPSvdqZ869Rd8DdeXtEjyMsfaT1qVq2wSGf4TMmTGzHVYvjbbova6dj78wGSi81Z5rTunNgvmrdQgnjzqo1",
  "key24": "j3Tc39r7Uu7kktu2VtT5tGuEEsqh2iYAZjEySdPSFVqApWHGPgFqfooN91gM8EuyoqVxGRC6LBS3o1ohUxCdQH4",
  "key25": "mkpJqSGQQFwaxz2YCLzCwC5H1UeZTcsDZwtnNzGe1suNHJEFqt6BTsucaWxzd6aRMyRUQByqqFVJcpS2teeo9F5",
  "key26": "EGK92yNU2wT98KVh3vbStdAys7qpiWshPH5CKG6h8AY6kvwkrg7nn92AHaCFi5ywPCBHuV9SHMY1cZgJZ5VsdgN",
  "key27": "2LLtLZ6u5S89jMUzixZdLGVFjA1KhhVPuubGZWEMQNo8L7nymW2wRVjLzVvwXbNEamfp8sqUyTGznc3YgzQxrB2j",
  "key28": "5rvb3b7JPtVqEErzkeZVe8M4c2o3nE3MQWJ4UXTjEJNunB9HEK8fvzQVRCTUiCnhVvmmb2erghx3UXTjdFZW5Ur8",
  "key29": "4JANPfjhQT1S92c5uw7zEMN2sjqANJMQ9HpN93RfbQPGo5ebJcEv3XQkv1EWihjCr9pHb9g4xDEE3fyMTxw6GdNa",
  "key30": "65NVdECn9bfM3DQQhYVdY4wUCzGV7uuBS8eRyjrwo2TLoBVPmZFcPQQedX322o3LpxSAuwWgEJtnnGBX1NNvDNGD",
  "key31": "2m5o28Jon9ohpTUD5dNgZdRjaTcb5WUjYnJXKdgxMGKqVnWYteHAkVri7stCjoj7VxyYzUyep1sX1CzGffY3sqEL",
  "key32": "5LZASYKURJELeVdFpXVZh7udNufw75fjkcJLwztzkHiquHs3VwvC5gRM3Pccwh9aUv84inkxo2oGi3VK5uxsfhwa",
  "key33": "2mqhHg4cEJer2kbW9e4fknkmDBfxvC1mnKuXRUGMJq5D87wcnub37YW45F43jxkWMi9GwiZEzx4qhsCv7KHmAFv3",
  "key34": "5tPrQBYwVuWmaC4RKpwTU9Z2w7pm4kppTCTRo4fAPrd95oWUNG45YXnwJDZHAnemDEBbHJVerzMApP96xv3crg5T",
  "key35": "3YRzHMFXbRWH7sE6NKqpgZQQSuoGnBLELWziWRmKuHCGGLUmBWiNXcmxxkBY9ywhCiHRh1t79CKDpcmtVJv3puAM",
  "key36": "26VY8RJrHy2VaFvMaZ4rKMUsu7G1axXEqKDzx3j7w1p7b8Jf7keRuDDZPzed4TJFfrFxJfwinu4Dg6QY1Zi4GsBa",
  "key37": "5pW3SKuDC27ndQFN3RuE5XRrZxbVqGejAguWYS8frrQdQsER9YstPo24afskCsBfSmUDDf9gnQKK1VL3pgVksPn3"
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
