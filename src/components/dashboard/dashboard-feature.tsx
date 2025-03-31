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
    "3wKDoFV6gC8bDtWMGDHYn6rwvPBkkJC6QwLqi1DtRMwaaFgHYUeAt9D4TJCm5zkYNiT7246KhYpabopqAkEnFXc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41br9y32evFe7Rofeyqr8vmBBvH8oVmuN4jLnN15W4DiZdH76NQDndg3Uq8KpRJXYVSM8KQEB36KnSZW82XMCNjZ",
  "key1": "4LcMFZX3coMHFdCU8iriqhBzYmghCf9vuM6Vk8Wau6tmxZFxfq6ec564oC6qNEZ154XR7qCkL5MqgTkxHZDDBFec",
  "key2": "5p55pxMXeSmHRj8aguaWcJNamti1AB47UKE38mvUHGEDQmaScHisvCxk7G4qS3n2DckchmHGTzt9Qd46PQwKrs7a",
  "key3": "5k96jFjgxp6vX9gDSDq842w12V6dB7sdN8WGAFxYdG9drfHnxERDyhXCvS77KPWntPxBaQR4t5egCmor44Mx6Rfj",
  "key4": "4U5jqv3KnnN1LppapyoM9n3Lyg7TdS8g7L7XJ9yp8bcyB9LV4qxyttnoLvosfLKz5vMwRNtt91w7fuvhXqszuwGA",
  "key5": "4xWd3sUh1i5FDNs1wsudxFJSXW9Jo7BaKRgA8zGTiXssdkyPBzPu6wq3jEE94qS3pzRwLqpnq5qC3DQGH24cHMGD",
  "key6": "7uHFHGyWd2hg8aFH3zrErXiBZrq67krUmFaUhCHnEnsCVsqnyqNz4zvqQSB8NbiQduRReeauZxtvB64nC49oXLu",
  "key7": "5FLsdGUn6QYEuRNNgrBcuRFwYissdQ82srAHxy5HC9Lj8aAbqKAMMYKQgY3Yz4CWqgx8u5KfjSTLkynaRfLNqStw",
  "key8": "3kujcY6tfWjpTgPkyyygwa5YXFh6MCiRtvNrwBMLd6sXiR8g3mQMnd1snMEANn1NKJb4Rkdy1UXGLVmXK1VQXXAa",
  "key9": "3pBTwdLM4XVb4RHSNo8RfB9tJdx4dg4v8pBqK5Shh9KsNKJxGgkJ74Zh4CSyzYxeebYv4vfBRxUp2wgPBrRXvzMr",
  "key10": "4arxUUUNtRy1nL4J1uWKWCKWan1RqxBwsFqmWoavxxmqsmLNb5NjUD9XUr1LDQTLqjcTRCdjMaQt5bxwBQrnLnrL",
  "key11": "3xtrxygbpKh5PhSgy2CDPtTwmGqQraJZ3PdHd65JjGzDtfzX5r5drSXuCcweBUSXp2WxUWMGv4hB7y18t1ynVrHX",
  "key12": "Vsjb3cHj9SYehCTK6MN7SBKT2r14j68JDNhFszdsJ4uXLGuUTwfY6GSQ2KCs8PumhXdaVLtJvMJmWZy731x3Pwq",
  "key13": "4pQjA23EGYRYYggCTxjpvs4B2sCn29UARMrZcReSpR5TtBXrRL5aJ7YjW28xeJYGt43q4LkVmMCURaBScT8EbKu7",
  "key14": "4dPZuGp4abfqSQ4jqudXeZ3i1t8S8WaEmRwNtr8oNKnZMhgvXD8hbHiAp4WUGBEuspi9HsKi3RdAacjsg46UzHv7",
  "key15": "2NRH1W83Tdk6qvHJ2mZChQEmHrjnznCRbM7evb4kN7s9kMTGSV8NJpoBDAEGRLgW38AsbLkHrrwhYw9AetttfKQ1",
  "key16": "35dx4fxRFFPGKARgxvGStviYqDJQgG6KgG2BTLwMtPhZwbhxTmSNpgWKAFbd19jz8csEKB1Xzf6Wxnyou7kHd7Sv",
  "key17": "hnUQ9gFr4Cm3zj1VEgZrMMeoiThkJqfvf5vdoKfR5CSKQSpJjR1fTUQJVfoLkvDo2UfrewJ4vJUeAXFzvfCaJL5",
  "key18": "3XUSqJ9kh98kGHzN85XnNPbx3rFkQcok8mDvvyyjg7UwotDfR7f82RQZHpaqDpSwTjqXuz1eNHyXqWzSr7wC1Amt",
  "key19": "48oHW9sBFn413zwCkrUpChjLv4o218hWPhePrZmAuUtf1svCpfXxvSws27pRJzrMqyDUfCC6P4r6bXHJB9pJjziP",
  "key20": "5r1eyX9gcVec18RhRq29d78TrcQMJoGsnLrQwUpJ72QRGNLhEiGSbyWjbbX5qUKdeoWhBKbqkkWZ7QSUppUMDEAx",
  "key21": "4DACn5uteCQySF949oAG43GP1L9tRMMTS4oZupCX8B4HHGUGT8wkaQwQPmiQP2tiHogjxQ7Eo5SHo9JKMiCmB8nx",
  "key22": "2hcBr14a5fo6YocCGoVs6ac9aR3VUJ6hKLej5icpSxC87MuczT3MSCXBRSz6vv3TfzBWpHoYKsw7xSvSCVabWy2T",
  "key23": "3S8LCJLkEwCcuZWtAE8wUWzB6GhMrN9TYXMCSByu5bMtLL5hsjsYWvELbUFDVMapek6QjPwLStZoNu5Rv7ZQYjvw",
  "key24": "5uYrNa4Mm75w6wPuivXuLs1sef4JN7z2NmLL43TBcMYYnUiQZZ95oWt1S8ziBpMCP457SXHHjQ9Um3zJLd22hdZ8",
  "key25": "4NbyP6eMLqDrR8DgmqcjLkS3yJrHULacwrEdnk5skuismdHDSNGBDZhESmbcXhtqq8QXEXftR55T5WP5tctcTTQU",
  "key26": "2WVSApJmdLvSfzzsLyzTA4EELysCEjnvCfupEug8GMpN4AyNKhmDygq3YHqS3UpvsYRww7XTr1qcBWJ9mSf4WevD",
  "key27": "4bMQXMPgam3eKcWYR1xJZWkzgEjXVpprDDcG8M577fyaE3yrsFNTtSXqbxe79BQkasrkFuzwNvowbQM5bmVxJY6v",
  "key28": "eQqGgGbHjsbtQDSPixqd1U4XruFcEQWLQnxehD8UbrXZY5bcnjY3XfLAsye98evPXPis1YCF29xZWCvBqh14Ca9",
  "key29": "4DRGCnefqNVa2RRrs25UWy79zTGsUxowq4oUhBatJ6CgCKfZuYfTyGZkPzKGpxRDLmKSsgXb9FiaU3DbCqSWLRfh",
  "key30": "5id22BMPNpkB6YGLwmNB6vCemFeFpF3eyGAVXkJ5V7RvrHwRtw62bkTdKizt9fhrSxZ3byCkeLCDfFMxM6BW6c86",
  "key31": "5PnbCauymiVvPPn8cLUo9QsFHtcneE6cw7iL8YRGCxQZBhLfNb24DD8VWctg6eFYSnxXpX4S2oNzafqbEKJixrKU",
  "key32": "3KAHUz1QZt43UNtBEMDD9uxvZfofRzPKMiEHkQYnP2AXVgtwX6rLAvTn9RzAC4NS15qE4MfoH31cAr7PwEUm6WbF",
  "key33": "3YSB4EfpYHAnCvUPY4QQkECCpeXqN8gthEDKSPU4pWj55gsBHcYogZNPNDrJ9pimkVoBHvgBtMpSLo9BpzyE93yV",
  "key34": "3XxNtTKwrLi5bGrec5U99eHYa7TGk6L1eRzd8Lx4T9sbxsiVJEiXEeB5nBWfNhCGrMUrREvW348XPKznN2D1oJiV",
  "key35": "33EiKnuMxaaH7mEDUKHdmFTHna3RE6HEdFkXzz1DKhx1zkSZqSxJa6hpTVSeFXGMscRQZKdvpoiJXN7RrDMqURiY",
  "key36": "2AAVvTqX6BttTuP3tmYw8AchQyokKzTuS1WmhHS38GbJvwGmvx3mQ7e29DpMk6vVjBrUdm4bD5uc1bQVDofiYyDz",
  "key37": "2xV61CJM6ctTwiKhmy8hEAieQmkeBTQ8G8KSH8XUrU7d5ACRDr5pvuhsfRFuY4KumjA1ZDuFthfqwudkMN5xtYgG",
  "key38": "7nYqqxzjT6cjWRiFtUESKAtCmcmFr9wQBtxC7BoZgXL114NWAhsKdZPPLU8angs4ozxzHVEkwQ5nC69uGwQ9u89",
  "key39": "1NTbPUW3MQuSsBJwsuqMRGrw7mMSZU4h743FKd6iDETUBbGXdohFh6xHo9immLLEVdZk9H5Uhz8r1ik6KnihQau",
  "key40": "4odtJUi2GRHYuLNfRxR5BUHT6ed1N5PtMZ8LtvAvWPq5vwb3niFeKud726yi5thRqFTX8tzjBxSX3eAxkw2yx9dV",
  "key41": "2tuWNRKjwJ4vcwRXtnuNVPaMjfc37FWcmtCJqTZvWhYhArRCfHhVPB5TLyxvdQ3HeMEuy3SBm64JMXi7MqmqeshK",
  "key42": "2nYBLmxNZrA4DxJ8gPFjjzVqnJ42rAzNLDrJ5TGjsJXKp3xp1zDHfX8CiWcBar7wv3r4qFWZhmVm1eUAZUoCBGpa",
  "key43": "3A3tHSHwMfVP2JNkh8Xjw4hLm4UqLJpes5w7t1XQUvZFHDnjbhe77WXAW2baNcbCAr8wQQZ61Gy7UMLfmegBD8CD",
  "key44": "3A72pvX7rLMHc3eMtugyHqbucc2Tx9AqvfCJt1BdsnGCVnkkGHxvzZsQoa13ULrAcSz2HhY4rciLueTAya44yHGc",
  "key45": "4reSeZ4qZiLKhDXKBFsfMoaDuzfswbomNFAooGVG8sTKNUHaZK4Fe46KLTR2F54ZVwB5mEgfrUbvcP4iA7SmtM5H",
  "key46": "4QTHedojHV4JgYxHzpCp31C8BAdyru5nXe1W2ayKvj17V76qBLWRmakQxVu9QsHEvkkeTUMr1pZPG7dxn8ZFit3m"
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
