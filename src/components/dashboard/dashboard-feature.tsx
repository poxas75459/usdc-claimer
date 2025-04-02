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
    "V7Qk8L5NiwZr4mG2Dri27ADHHHKYDMDcD6CftvAy6nu7mq24119pr3kCZEyg6RCj1fZ4PW2iMdfbZqXz8nU78EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uk7HeoeVLx3N2ZwHbVrofYckmvhzSPS8e8ymjKHqpuWowCofX3RzpjZzgVee22dyvCR4WzeGcn4zPcv7SyRJtTY",
  "key1": "2pH831VJBmsEG8zVKPD6U35zPrgrDVT9du9tHKbCDZhQRX74vn8wDzmaNkJzP31czSkfmBXTYWXMgChxTzsEoR7y",
  "key2": "423PQcXSW9Pza3dJkYobFSN4BqCfKBQaSVFR6DqFkXnDwCmwXtKen5m8tnp8gzwpJva7SyZA8QFQv82rmrseARBp",
  "key3": "2pAPy3gkJd14442Wy7P9thL4AGenhB9dgJUnXoEVbCuqVmBaVdVLv13bhdEeTday5sX5yLGMtHHgddGQvxTMTo4w",
  "key4": "5G9tbesczGcmdyNbUJhZjZ2JphtyUcxRWTGQGt8CVUcp8xmZYX8dyEsd7YGQc3YMCxkxXeX6zUAMMN6wTmrFU8vK",
  "key5": "3pE2TK9khaRvfsurmtFT24CP82MDAC2QbHk2M7cQEc3PkPmiHcPVpVQPkm8YdyGVCra8NNeXVMJTSJhSQFLhCJns",
  "key6": "q9bKmbGSaCauMebJ9TAj14jTHT9crm5gkoZb29AdkAPSNaeiu16HJLyV2DrvK4YbJAWxEaK4DiWWUNp1H47mShY",
  "key7": "2W6b9dqe1z7VJdAehjkahQ7cXLNAStgjSbZox3Yx49m5KUiAWYbn3Y1gN85zd4jxPTHXW8Kg9uo1MsZqiLjAXrWV",
  "key8": "2QCr8dfLoeCbuZQYNZQZgsaJLEmGe6TzqcPeg5fjE5oUpxN3wBiThGvW9EFtH3MCLgWzfiSpGKaS884YnDbJjmc9",
  "key9": "57ta2ZYGkCwAjfGim9z4YhqogWb1Jamu7HHJukx69BXEir6M9Fq3Vcm62v54Ys5jJkzHuiDwTBsNyvUByxA3tkFN",
  "key10": "4WLvUU2UrZwRBLmwXTEnfztPJ3CNK2ZK43UMrbckJ55qEriVvUuwLLNYE3jKfghcppCkwFKPY736xfPLmsrZ1DKq",
  "key11": "3mwpUmTniTiK1P46vVzvTmtSJpBSzdYyGw18v3qFtupZnqTQR6CN7wBWfPrvDx1m2Y8LHfvAX425SeuuZ2ir1kDs",
  "key12": "349kjrmTWpuL8SajLyQP4gz8hG8vgDmwZZM55hqpkWxqhPrt4i8AG1Lvz2Weg4fjte29GtTdHPsQHNwg9tsrrE1o",
  "key13": "2femLzKcKfkY359DeD9Qvo2xRiVdm2rRpLrnqgfL5zMBeSPKGi5xXFgocMDihbfH2ZGhPr8vi2oQWiEtBoQifXJA",
  "key14": "3GmaYyxxrdtxB5Psj758gH2EpZkimedPMzaBpFX5Zmw2szFvYopB17PpTUYj5kLnmxiGwsxLy37PaDybEFu9a4No",
  "key15": "4XyJW3ydseUJsaKW7sBBYa6ASAP18CaX81JfwcFwf3hHLLUU9ytR5ivvok46oG8Cdrk9JVw9igfnf2Y6QJ29jvEo",
  "key16": "5KarzZ5G8E4YByKthhahtdcf1r5a1em1DEG8a4rMwaF3R5Ghxae5KpNRavMYer8s5ikskRd745gFSmpkrkyLTtcs",
  "key17": "4dzVrjaDkCBYLdPL2GCB6uPAX2E8XbrnfRnWv37NbQtHhwTVE6xSRVMzs9eEDsRuRPPqkmtJTLMQwY9ZZTDpWHAS",
  "key18": "5rpn3vyoBotd3ckr2QZDej6BiffgVwikV9iAS1LA9w7pwW31NSCWYWggmEzzkHP9QsGV9ctamuu7w5PkjQ8Zs391",
  "key19": "2V4gQYmoiw1YSesJYD59Jys7HUbaMjMwBgs3g4WxNdQiZcvZ9Ng1GUpFPmjXmQ47dbq1JKbYyWe5ZUwsSKymPSdB",
  "key20": "2wN4jELX74KtFBVKHSAe4E14t2ysJvnWYXPJLTDSG5UwQSsu2FpkWA2Qh8D7HXTiPmjBxgGVCmEWPAaqG7GxeeHR",
  "key21": "emyUwWD4jq6Em1a2FQqG1NvHP5XtPZaUQbgdV1FGGenedc9NYKEQHZUp7Zyz49YysigfCZG3GyCU8nhCMEA8k7q",
  "key22": "3pxaMDQoBz3pigF4Ywm6fPiKSDFxXM1vHRiksGZFd5t9ttJuHdnrUuBvZttXRVYnrwojDT3wvmtsymTrNEbN5ZEf",
  "key23": "2QD4DCtm3DpPTajhRP9vb58PMXjSjccC6n6rSWXBqsDt2HAQ7MFpVzqDsXgZHfuhSHzoEk1gaYkXiupVd9yfYUHZ",
  "key24": "TwZSZKw4vaVxW8jygmGUX4EYRU6baTtVQvthgFpHb4rCN6qy6tMCM9pi9G3ZthquK4oGve4WXLUeVtPJhWKz2Me",
  "key25": "b7Hfe6ttmw9AQRmjYeFRRvKs6QGhipCKMdhP9Zi9hZ2c3XgesrCKcvEAmyZCMsTczzVRc2mAcLNU7Nq5cNQavcb",
  "key26": "YdZ8F5tXCE3kDkTzoRKrjYKQDRx4rrg2cgco5PP2yFouEqdtwBgxuFQM9r67TNhhXKid2z4zwgh1xcdoMBYGzfR",
  "key27": "xhPtpfHA54QSYKjjqmqQvq2USVa46zNFvSj1WMrWviSNEW5JPWbjRTCei4GdZopykZFTaFET3511CZDnkL9PHTn",
  "key28": "2ySV8pHREhrKxQDsv8LwHq9rrbiTxiSKX4vj7qpFxB1Jer3zydcHso4NA6emwHRxxqyqkt5jibaCRFAWyNgtRBxW",
  "key29": "4ZNBF8DadkBHaDWJbPEn9PJijUVGSqL8PAi78drk8PBpEQFvYqKbDfP1koFhXcAQiVrtUHEeCMCiGtwBhfE6VcCx",
  "key30": "37DtgdjckR64msn2dFptMP1cryRsLYM51ajPBCjcmgp86NtEHp2zB63dnuFTQ4GupzJ1GbW83xedtKCZNsH6wcqD",
  "key31": "4RnYd57MugJNokue1odu5LfixpLskg3pQnQ8wXaHtcqUwEuVbaVVgfBftt8k4AsWkmvaD9Ri3ikQxBKLT3CNX7kU",
  "key32": "4Jth23RwZosKSy7ysdqnW35KBYLyfGXZ6wRh4easJrkzyZJSGTrz5hdWpp4p6B6A9JFCjGNmTaDFKJUC5VKr8Eiw",
  "key33": "5TARWbtdqkmkh5m6GndSMB6pAkXGeurTnpKBuwZoZbxqyne6PDY4cPpYEcXdTjysSM96YxZZPPswYqkJCmsFuYS7",
  "key34": "2GAVumQtQbK3amCFwWaS5zCjw9AozDH9aEn1QLEAycJz1nz3J1cdx7hE76xNnCzfvquZXWSF28qzc4R3J7ExBe9",
  "key35": "4H7gY76v1Zt7RkAZzYQwKod4ikBnNyjkt2a4ar5sRj375N4KNDkijXodTfkLwH4Sfj7Zs1mJP8WkutNUuEXcmUA1",
  "key36": "4UDaXCa5PCag8hjDLKFqJGiyCY6gP6rUN4xsAHXCURNW5wsWiveQjhoUtRf72yHZMXoTLEG2HmcMvV9P4QPx9bex",
  "key37": "Z8tbbEwZgUhkHqdXEeWQdb4Ht3tP2KXQbj1kDzBoiFegVBqGt3RBurkPu6LgfPwhg9XurCrjst8VgtTX7LzLYZE",
  "key38": "LZZKyeDTJz2ncm16GeBaD2vn1azYzQRCKzmx9bkS6pTn7PndNqo8ciPhFQzVcWw4s38NS764ouKxmU5aJhRqYys",
  "key39": "27HxUToWorqG44xcW6gEhNDWPRbLwVVsdRCq1dZEtBcF5SBcXF4zXsbSuUe89bMxsj6CeHh7SyYa7How5PW8ickm",
  "key40": "2vEGUxyNcnZy8hXZraSdiq6ZVuj9FV1UDMNFfL8mLXmg75Hv5kP2AUmtyfhYa9f3k6aQ7dkx3ZovHhkxEkRDb1KE",
  "key41": "pDvwv596GMTzeirzE1SwM2Rx4VfUnAQZXxFhDdAr46nuHN7ZTRJTprMuvr9WoVGvURuRTgqaauARmcLESjdbRuz",
  "key42": "5HPQVoVpQy8ubfXgbJTcag8P2gR4jQ3WisMPyhZMi57RyzKwGW2mTNK3PvuACW2nypdc6KU55GuvRGXbS4sjNyyS",
  "key43": "3uktDAbjJeBHFG9FJMGdQBhXUjiNdk9c8tsR9bx7itD4wVhyHzA18yjuWhyGEoXiFaS8GZvxkne3Saap9S4GLgMr",
  "key44": "56kHRsJYuP1k4sNa7du4xYwT7YkAAqAqJ1tUg2RMMbyEhjhKX1JUmHsNQHBecMmXPcRxkkF8JTT2bBSnRCEN3RtZ"
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
