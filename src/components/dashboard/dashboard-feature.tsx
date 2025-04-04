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
    "5cPuV4U8qk95wNke9CeYmoHp7fVj9o2DCuiCcQa4vWQk84kwrwWoqKFocQAVsnVrJsRTpmUpScbBA7vE15ficLtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oj9kL14WRzPvmkViCsNy1HbLMxKzy5SRjcFpmrjE6jNxcyAZ3eAR4XiP9AcZLd7pP6RB1MyKED1yztBaSNahxs",
  "key1": "2ZAbpAXBxpaEUmtZDzMgrNcQ73XcpPdy6dY8pxtqQ639mJwPZ9aH5wG9GrnApaexNgi9BwXK5S1QVHMDtvZAVGL5",
  "key2": "5SUECkCaKutDs71WyiNvbgF39zYAoM4u8prQzHiSBBZdAdvrukZGtJkgTPNJM9dMyjCru1XSFxuiNP1xpJWXx77W",
  "key3": "3JhBcSjwbPu9rGgfWN8g7qRXTrmJxNagwA7UyxaY6AMsL1XfYSEUhpypsEzEf3fzsDePJ1zvzD8pC8EYGSEnLxM7",
  "key4": "3MneCgTAdyna4Ro3rqZfg1AJfpePU8JNgTCbXWXfdGJCACuBZgHxKmj8ZYtozmvqd4bha1PczjAwF6hHYGSNsikP",
  "key5": "5hXppEFkzqy7mNFf4mK1GNcuYQEyeREFV78j9brPBkFo3uqKGNWWTSUjajB5PPah4Rin2VQno2ebdroDcSNwoDHT",
  "key6": "5kJiZTmXthiRgG4455S3HBL7FtgYWPiAN2MuW3cB5jyqCGyjvUuiKVv7jfGwiKKySfPu9K2Uv2CiQ8ZCiwrE8SDs",
  "key7": "4d29kPn17TEiggzsNnsJop5oxHgMrjwpK1hr66n4srqv2Bwu1msP5FRxSfyqxkMA2FUtgBFUx4hf8QNyF6bfpkjp",
  "key8": "5FWcXSMYHeStz1Y3PiP3QYxsHWChZGkZsBhq9CCosqDckCccmqdqvGzbqSV5DmnNMRfSeCeSgKEW8q7GLZnHVLL3",
  "key9": "2cJ32kcRaar9WePsftFXxBApbfLyPR6eSZAgmbeBf8j6jFHdDnn4nKA39YJv4hj2MsYJcU7NyahnbhW6tgsgV1i7",
  "key10": "5NpD3nZ7m8Zw6oGE7zigtKguxZHQTUW1viAsnPsxzLGbfSNq7UMUjPRicxwERYQgdxuTdzjrXAaLNMMkM84AeV4x",
  "key11": "3auNv5hBEHr7ByoEjeHfGTetaDakg3HC9r7fYtkBkBwZj2r9Te3UptUJbPHYeq52CieBHS2r7mPmWJFbG2kFgKvm",
  "key12": "pLicQ8qKz636N47dW33q97ku6uCFfhpx2wGtuCpWhpRf3z2fF8A7uYdv1kGnZcCXFW2aCQMzuYwyTnEYsuYtvE7",
  "key13": "oAQ4zw9J2xAxV9Ckm43Ye9iPrnHU6C94nWKDdQfcESijfHEPwV8GVwrDuxPWFNWkGzsHY3gf61XbNUWXoiJMBgN",
  "key14": "5r5CY8n4DnvxpgcMjKJFS4iMiqGUPtH6Fj38qUgcVUbbPkJnkmwKQHhtG74AZC1EiwHNKgRcaRJfLxD2CworaM7N",
  "key15": "3Wt4xPo7MbG1HxfwU27ipkvFUGT6AToR6GBrEM9B3XtXSpsBVQG7Rm4WrvF9J6VEg5SBdp7eGmWYggDrzoEAjXFf",
  "key16": "UBJ6VpgSEg748XFgvM8gUEH5dtU6PtjD9dEhhALk9f5sPtZoT8DYrudNA4jMDy1GWH4mcUcWCNsMZdqQNHAkKcv",
  "key17": "2rX25LxgWXcPraC1Xr6S3vx3VA7Y8QspisrefksV94tWuKGeEkBequKevTNduCv3PAJhfBuVjgQAd76U34UCpphm",
  "key18": "5YWH7Y4xyS1tLCz5yBHywxkS4xjPu7K5rdpiVqoaZfYmo7bJsHUZwqGduwDTYUBcCUQ8TiZq4UnMxydGekJa1QBd",
  "key19": "Baxs2cYGf1JrBnCRJpN91ARstPrnF4giYpvN85cyMj4W5jqzXc3VPh1QJqxwpZN9PJUFGo4inkESx2DF8cdm6D1",
  "key20": "3d81gGQGA2uFFho1yRAgXzQ7MvUgQDDu3N9L7TxdjBz1DbZuCkHt2vEAQRCtmRSVo5V629YWADNJtxnbfrAGdQ17",
  "key21": "2FzyHiUNhtncMWb3K2opRQMJtJSpoqbqNf38frgyHc4po7hnCjCbuyjmu2A8C6i7Zv4T6Dt4bwf3sWHCG6v6ZTAR",
  "key22": "2dKnCVQfb9CTbxjF3pvSBPLayMtMiXo8afCyPTEcgeAPN2DrFperZ5GDmRdMgWTRR53FUcMmuu3nBfQdkR3HabSL",
  "key23": "2DyrFf9BZUU4rQVG6hvz4AjUNKSVUc2YzNrrPUyXuBqS2Hgiey6nejQqRN7wq3ZhXANqbgf6wPEHA4MFhyniHixx",
  "key24": "3L3HgvoEAUzErFEvDWdn562cSh5C2TyJsz9Ck8TKsy9wrAgx464FcBCRC8kv5YJN6CYR7ogXn4688A9dsFzDqBx2",
  "key25": "3j5SGW2rUbcyCboJJhGvsAkmD2enaCXDQQgpX3BMzJWJbEGbBmat5KesQA1oYJvAr7Sd4VKmvTGYPnYCJY2SCbZV",
  "key26": "5AiVXfMeimkAbjVcFFubELh8PEsaggF3hfDbM8RioooqGBvmYHQzqJVhLxvzrz67kSi466cgSFD3kzhSEbaS42Yw",
  "key27": "2sDLrphgGmg4ULN7e2XW7cVSDv8DoYPyZHyG8nSzu3QQdVBgHsKQZhqa54P2PnAnStWCDRgKSPEFrjTdhuej7MFp",
  "key28": "5aNtYEHswU9KVcap5QpcYj321m3o3nMSWVuvWMz9wuXse8zfqDmnV2sT9KWY8U7Cdc5hvXLYKYWF1UvtSYojnS26",
  "key29": "2TFcvnvWmCRNwTWthnyidZ5RFWDx6MTcG1yCJHehrSQJakTKb6EXSM4YZVw94k1G5swfZKUPTvqPugF9Zwa9acCw",
  "key30": "39VZERYoZM4rPzMyvgkB6GQkNsP1Y2PLU2yNrAXtBEzPTnx84F7ipWPpjeuNjLDWyd4LKHktGmp3hZHwXvfyWVmB",
  "key31": "4vr7VUJLZwZVmeT9oYGTw8uLUX88jJsBPvk1u5FM2LHFS1wgRPban6T7NnFdeaJyUcZgViv2sAWdTFUJz7b2KKdx",
  "key32": "4JRCxrEeeQEpK1GWyV4TTDnDfo8NRFDmDLNfwCmHpdSK7a26rHBWtV2rsMYziWKnPa9yhCWGPPQNqXwVwvqu1Zqm",
  "key33": "4TWLTXB2nubmaj7asgCdfbgxVBAibYb5urxXrBENhtvNarYdzUJrrZ43BquiAdYhMEB62tTF4cR2sybTTyP4KHK",
  "key34": "5V41oQkF4DonVVu3MGHrbFCtTtNwS6bLFC1CJGd4D64Gjx9TafimaBhFfjku22CtdgZDELmAPGiuo5q8KRnEHCrh",
  "key35": "65wef6apjDc13MenqaUA4H4ekZgSAGg1qVN9XCcuucqjtYtA8TrSeLwZCQwgMhR9EEJrCj5Bj8vt4yw2yXZiPWt9",
  "key36": "2itKAYz81vhAvr7LnctCcN7TbP672V3FK5jsL2sbXEoRCB3WSf7NwFDbA4u8rWBdT2wB3v9Ld2Kwb7HyzhSYATYu",
  "key37": "W7Tmx8AgVaQCVWKosU9jHD9BaXxQDH6dRwNewQEkmLtfYZWnHQsx4eQx1YbyYcH8qvZHNGcKeAz2TkMSDZL6sFt",
  "key38": "5tpMCa9D245437uvtDeu8VNpjBdgCUpkpf8MQUCoVWB6GwiUTJfVCThrp2SvY9N9JHq1ci3LN3BoKcWGh86m95aL",
  "key39": "2pbm2FpnbxALKbZmDYYUeKtn1viEaGWVZPRE3SpMN4cap5fYiisZBH1ie1YiVo4A5ByMzJfku3G5rz8HW8MwC5Dk",
  "key40": "yrywmpVHWSE64BDWAed22yFtD26mzJKMeYPumCm7ZJPXMx8kzN1c5LQE6VFpwCBHm2DwKzdXHgudMLDVppmRct3",
  "key41": "3VkSRdho6KAuC3WPvQWzKeUmsWH7a2eNY8YqLz4ELAoTHYLx98BrWbKJs21FxoSyJkdVhR4jECRxNmVNmLg9nVAQ"
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
