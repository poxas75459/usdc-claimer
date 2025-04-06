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
    "DsyUpsR3iLP3t5dxWDDged4sSEtNaiemNQ2nKKh9aTMnQfiBY1kawbgu4NVpXohgVW9mG4bjY8zaEP2Dt2GZvZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5goqNaiwzPstfE3rBAuVWG22tfe3UoubCPt7sz7sYWjTkGsUHYZVtqEwSqrudBwJq2KiyzN1HeKQd1W132hY4w8v",
  "key1": "4XXUWJvutSZHwErJwESzpARJnBSdsnkP5xsjvV4Fgyn8w7EpNWHegAZ361z3FKxyeSk9BtVbwbDazqxgPoTHnNeF",
  "key2": "2UqKCrTsS5fUUAnb4UaCwLNCuNc2AEcZy9Mhj9yhb2yYDxibAzCBhMm4tpeRSSiGvBtCjV5eLEtjBvJY2cjXNaVm",
  "key3": "1srJCrXSipS1UUhCocyFYTZWt6zBmWiXh67mkwaHuP69wbZHkTYfm1ffcti36cqj5ds6gu2vneLms8kPiy1G2FZ",
  "key4": "4QrLjNp1nivT3UJnTiMxfjK1Ts22jp3jfiDSjdpM58aHk8vP4gu6ECG4HMWJdyRZgLx2Hp74rQYY93zxnhDLATNx",
  "key5": "jUvDJ2dQn5W7qBfgf9LWSkZrKBWnH2RRdiSxh8S6Z4RHfjcCBrnmW7gpCQk2F5FVNMRcuyKwsdvvBDKjoSyb81f",
  "key6": "2efgyZgLYAP4qUe4AZGdWAuia5pi87WE4YmAUjzso6CN4frj71A7mC8RC8vZeFuRF9Yoe1xWEhvD8wuaSm37yMb9",
  "key7": "41TGt5TN3u88tQxwDew3T4W3gBF9cLJVKPHK4YoTKmvcvD9oHVD573FbagfKDMmjVAEqXfSXR7uBmZadfYFHKkP5",
  "key8": "4V4oemSBgdfMSf8KqAj3Dz6kN6ac5QFEwkxNRQLZ3tvJoDM9eWS8WmdsvkUvePEfg2qfBevxcf6c3UWvznauwNHo",
  "key9": "3td7Jx5sh8xnCgBsbuHo9VRrisWXEVH2edsH6NeCa47AXErbQawTUMTyn32ADjU4J75BqGntGi55Gap4cjyh2DkK",
  "key10": "5LNJZ9Jdb7FY7nr3wy7AKSrzcQXXx9i6yPmC2yTDaM99pDuCRYNFNWLD4KA5L9fvrADqNh2DEvSQMNahJTdaKQdh",
  "key11": "479pdqshrGThCJZGdAGWvrunSTh5kuBQJT5u6Y3A4q1MEDv2mi3SicF4N78iq6FCWbw3DfMAgtqwzKtYR2FS7osn",
  "key12": "5YVosaUda3brmGuveJSzDzNTkTj8wsTKFmTTDn9XjBKMVLyM1behmhnyVECvUDUsfxkcZeXBHjEtqSJKUJ5KWntd",
  "key13": "4t2s5hvZLCVMxMy8E6vHvUoyp1FC9Z727Pk47drszGKDpCYKFQUqwBEMjvdQWzd5qd1ZGxe38CW47ng9QVyv9Vce",
  "key14": "5AhCR8BwSg4wJwQS5wNQ2ESvuGpSB7e4ZQGdoh7Zw76oR95ZF8pjcvLaRPMQxuKUyi2ETafHQrdTHzwwga8S3kaL",
  "key15": "5MBVSgmuvZUm2mqWXRstKScGcyxFSoWWSpeGiQjgJHbzb1hM9yTgafNVjW2r6GdBUCsZG6gMAhsZtRCNkiYnVhQT",
  "key16": "2vDnEprozUue2atVqWGoHJvLxTeiu6XexnFvmncnZyGoph8P7yy4qkcK8ktmW9JsE8HBGCmDgWUbwxXCZuYQRSyE",
  "key17": "5diw2SQbEa4DY8FDJe55RF9aYwsA1NL3JKcBGCddqRd4wF41dgBuAEg7iP6TR1oQrq1c1SYjF4GhjzAqhsJdrJaM",
  "key18": "3jRGBWipdXJkkyFpvckvjwuEBgr4Jea94pQM4ynGGEqhdFwstnsoKBRzuggnZeVfRkvubfMcX65LC8iJqhm5YUid",
  "key19": "mdyrEd4SVEWpRneLxAPd3X8xmqaSMDWXKFXRn3fSwsHZr5kiYS7SmAiSdz8pWjA7jufF9qCyVr8upmS9wngiCRG",
  "key20": "5Ws6Qrh8tWV45cSSS1xW7jDK33YhZwtUZLRTKu46mLgfyFTNQ9JzgoAHPDMoyadjaoNTS6xwD7PGyRU9FfyFLmKH",
  "key21": "5vQQD1SSPeB6Nm99dVh3ju8XXPkSCq2Z5hV49uxzJrCHCf9KvzAPqjaLrH59ZrveEPC4fpADMRydifAFooiPRFbX",
  "key22": "4iSm8JGXttdFBbBgJBnaPngBQVGHUXKJGDa67kfvgJi2mTasRAWCJ9jqvaGAY6AWBCEWn5jqcjbVNHHobJCNCKAx",
  "key23": "2t3z4wNxxQLtd4T2jqBzgNZXWw8bTSZ6k4LnKErvPESzUsSawHc3imUoyZNmyaKwtqRaiTR2by5vokdXcXYYF8cS",
  "key24": "qU7Bu7MqfLGbG62gjKMmyd44ju2qtPzBNqC56r86DmugR8seS5hdKNEBRNDiLT7B6XfaojzkgeoUcxvL4VUHytd",
  "key25": "4joQmJxBFgPL1myfRCexxCTjsPSH3dWSMt3UAZmeTG2CCrakHoBUJz4WfEehdJ3UckarPCPUVizcMxCukdXT5VEu",
  "key26": "2T52GuxMXYuX7swjMzYFywi8aXfM9S8mKn7YNt7w5ygPpB64ZyKD548o7h9j85MAcaKUb9z9RxbFVKyLJLCRLhH9",
  "key27": "dP156fCzbVt6UpyVEofM1g915eedoPBtjCRHYmAnqCQLTP93FYanEDSwJe6SCeHFYGh53Vg5asGGUKJNFLaU4HW",
  "key28": "23opRVqzdzJMe2WVtHisHzDS7Dr2dZA5N4JLbWuUresKgUCNJXFWPLr9GtsgM1A65aJxM12sjHfvBAMS328w8yWD",
  "key29": "4NKGKQWeaEFXibtc8usrM8vQCrMFg8SZ1WYrgqSB6ePV3eQghLKnjFLqVvQsRiT425NTKHav1NJTXM71QS3PK1qU",
  "key30": "56i2s6c2mhj57Rr9f5tUL6duXZEn9m1mYrQwzCwcznm352jskhmwA5mmG1Rd3An57NozWhtVeXWLH85gZoSYYe37",
  "key31": "HiAyhw3QnBB6k14yTp5PtvX5AuZjR2wGjEgduSo9wVdgVeuRW3mp5LWBypCH7VVY2P1iMtSbyUNC2X9xfCNmrPY",
  "key32": "363tVeMqJbZebdStcD9hQ3PNwi5YzkCabn9z3JqEcAyB5dAgYd5Ycb1Wu6eKvnoKJaiYBUZ2Tn8H8qwFULcdyRyZ",
  "key33": "k76xSespynG8VY4vUFnw1Xo4bi7x6UYtBgqRPgKT9M9szBsDyZvnV1w6dokjF5aHjbA6peWYuf51uiXk4iN9Qa4",
  "key34": "4NxZR653gj6G5wf1iipwbbZ5VCuyFnEW2yPM7qeeAHvFsXHN6t4jUVv2z5zxjpYQ1nc8XHx1G6DYcCdqi7EW5pSC",
  "key35": "2Pd8cgxy9jtkid3Bhvj6BaCVM5x7CkEos7PFSsHMYptJH5JwVscGmB4dbdcqpe3eJ85hQPkC5QvmDP5ESG8XWSgZ",
  "key36": "3ytuTnjXW1tx1q1F4YdaLewuUZTCTnbHaxcGbemuuYn2DwLQpZLQouWmB89tzR5UqiErB32hUy1mCAQyFMMa5nhd",
  "key37": "5L5iN511fpVTqniRjnZju9JJRHwVC979Js1GBeDW9QQ4Pv7P5nx5rWZ8cGLMyDcbmGNGZthUQPjHBY6yJVK91TUD",
  "key38": "4DS7LbsbkgW72UBsWpt5nE52dSoNp5pgRRxSo5J3xm6V1Q7WUCNrdQKA2cb6v5W5pQgerYBsdx3oJidDdWXfTULs",
  "key39": "3m5s1nvbEdk6fLXrQci7KeVzewh5Z81wCX9px8neUv8FR8FMaYjeZXNrtAvKHDHKYX6KqQVibqheThctgnHG5KoA",
  "key40": "3AFLRiMMZKiC5JgdQAmUu4b57wdh54pv2vhRjv4U8wQPpyomC3Lgw6iHE81zU6X6AAN9TgFjwV9o8M2t5em4z9Bv",
  "key41": "5MMxFuyuyTShkUtA6ghTPzHAsKbn4qkTk6Cf6GFui2BCysdwbz3WHUDSCjR3zC7BJfW6oMqyPBFRKuKDjRkKcPrY",
  "key42": "2HJhgJEdqy4xix4nQPDgkMmXyA2xdMHsAVizGEzHULoZP4asTG2hAzBw2WHxfBgP8EaFhqCHHSLeeDYwNtvkzpLe",
  "key43": "2MKA81vZXjF42eXYWijqNf8uK3GpT3VWX6ojPXSzhQxBvVv8e9Hp933gSwi72oh3bEeVrfctaKmhEeW8XxGNXkc8",
  "key44": "zLxacHWt9wBaR8D1ot4Zc6bcGR5exmVcCFhTPRLRicovxhrrr3JpTzP7yhPvg2DxUJVL5pBWg2116dNzKBuRyTU",
  "key45": "2gYr6e4iib3s57kqQZ2f1UtvUwmTkYaHQoD4DgrPtjwSBSkh9SzgyqDTQCKcgTEg4pdhXPuXWXp9B3zrGK5xvZfp",
  "key46": "4uFc5e8n1WjorvUx5EiTbdjPQTE5tBVxbNkffVNu3oMkJoCQWcGm8TnuduwY3kUrWPdob8tzo3PN5Rqe6yfPB7wd",
  "key47": "3AWrjnRgERTJyMBodg41JsSrmhAdP218xNHeYnGpaJdPGyEA3QLFVyaqysyRDcny3L1NyKVN8kXP4VWzgvFEkWqn"
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
