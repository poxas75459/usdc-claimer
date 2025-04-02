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
    "31H5EYRJ1Q4yFSi2nxpbZ1KmRTQLaVGTfaUs2TxqMfVZdWHWY5HLYvaXiSaW4jSkLN7r5Ya1DvYr9Qy3zf5wcRWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yuXHzG3m8pYsegWTxpACqPbaewNvRpbxkcue7BGB1SmxKJMhShas1VYYYoyAkzC3RgQh81buT31xefjpNBnjv3u",
  "key1": "SJSCSCVi1aTuJTCEQ3rydcjNbKkYkGpGHdmP2rfMCAShAH46QmKZseViiJ63cUdFh9BR3eHaKDAUaRReVvJeook",
  "key2": "4JZypeowbDndEGvR7hC6eRVdQUBiKUM6KkFdM6nvhXB398fZ2S6zjuCZpugdamR6fDwnNvGwfSDewtu8LyxX7aK",
  "key3": "5KFHMJaoEGvJ2MmpucUvGxsb3gTJk88cewgf6Hx4pmrahMQ6mjjqvZZVxZG7rF8AgW8Vdd8QzkN6nFBuhE9ATY43",
  "key4": "3hwXD9GfexabnLhU8tDgxMgg3M2mciyhKJPQxDAeAGZKUpVW4kMW6dAa7preeK7rBMwD4qjbCtXTxewSWCGAX8y3",
  "key5": "4syP51fLfXJKwYUo3f89wnnNRKFiKkUPj7Ge5pZpZfG3cw7XTyb89Q2ZNHWkJA79BNog8VBVB8Eu5oTXUiXyiQMD",
  "key6": "Tme5sx4TXyBwNBoRVrLf2mqoHUpJreWLk4i95rfQME7dKHNvVoQeeCuDVJJ1WkwfN3rKWivXNDz7xpJv6R4Pu9m",
  "key7": "2cqBhrmAPJg8hAaVjW6K14r3muiDNGHwbS9nzecSQesvbt1Sq18MnaMZGXvQtqqPgBtmjhViV4LntydJ4htYvpPn",
  "key8": "ECtzeEWjbqDWEbuZfbPdYQ64nf9ykfpD5AKPJ4jHsgYaN2YkNuSuxp1jiB7oPFjhgzZFj9WDqesPBd9i7BSTpXs",
  "key9": "2szg5SqLtk2LKN4Kvnp7HA6dwVm6oQRvNTP47Qt1Qmokv1JEU2mRbxaTu5FWtqZU19SFwPYRUPQSPq1zKXAs9RFF",
  "key10": "24jKgE9ur1TCtULqMmeKfM9Y4inbJMgnKPB1p5HacAzR8edFyiNEsa47gab6sZRvoWqZEMbiBJdamc68ZTq96ySA",
  "key11": "2AHcRyVJpNwpnDjNnUowhkvbB1wyfp6ok1UMB8wtvqy1XcJy6SAtTL4gEALYRrz19BdbPJPBknwL7kPCc62JVaBD",
  "key12": "4VXeTcTayEwSRsbrdvatmwT62o4viwwLU6L1diXfnLrLEg3k4WDeDvWrTDZaKAFFRx7f5fMNAsjT2RRL8GzP7ANo",
  "key13": "2n8zh4RCfdqRyjzd9DALWGfo1dRpLPQAQ2wZgQuoZsGVW5FFdUxt4jF434hKu9Am98K5TcEZCVuiieSSVTBBWfog",
  "key14": "wB7ef2bZ1GPUKF6gewP8eoZ8YrjB8WFYAxfLAy4dsjHjMkC96HmMFmwjtgVoiChiYXcsfewwfnFyoMcJgC2X6Nq",
  "key15": "amLhSs5QKhMcfiMnsPR9X1ujDSVdXgBbFfKaBZ8qcMc3w6UdS9KP1VeFzxtVGXatr22ErVLvBktgEXUGm3EVb5Z",
  "key16": "PYeUwAdTyJjbVKk1kwtuKSby4MbHTBY8dpdbmbJUVbF57Hfwd5tKa3K4orAiVEugR93fBy5Jayr199qynLTTvgm",
  "key17": "2o3pxkjHbwLU3z3emNyjXH6qRrrTS2UXrAisxTM7UTgRL8siStaP6RUrvCdQ4w979PDTkULvRssk5izuooxPXZVE",
  "key18": "NcY6yT3xakUTZfcab4FDbtsKyv3VWCxHYWfHy5paXvUrvdhMR3J6K5TYSeVVoVA17tauQz8DMCEpHWZyBk5dG8c",
  "key19": "5ibf8yQ5P1LP8yATUezN3gqP38BqZNAzfDgdkHQbmezz5edtv6nBy9oTUopsUaN2AWy3ZJxZ4Qh1dAQS2keQDsEB",
  "key20": "2sCSiJCX9joysGyhmcjftnME1o2Mu7Ah6DE2GSFBTDUhHttdJckx4cWoHpbGMxxTsDagRWzz7uN7q7aouTLzSoEb",
  "key21": "5yrNht3UYCLVBZjzEg67ZFwyMXXFKpUrpsrAcVPVhTCLWkyu925Qdu5YknKgVFQXvFv7wKhA1sgydqpYUizZXyiu",
  "key22": "2yHgXM35Ry7eMbPAdMQmR17Zht9dNt8nRv6s3RLBAGAujnmek8K2NHkz2VY2uYhxbdJzDtrFkQ5t8tcs6xEAVyMC",
  "key23": "4z9mHKKJPrFNgWL1KUoE2t8suC7dkzPrCWW2DaPnbcqbR83jDfNbHapjSfn6LBUxxS5UaqaLLd3Dno7XUvgyVJaG",
  "key24": "Eb7Ln2fNwu6Z2ABWwbCZXWhNU1sZ8WyCFWH1S6bsMfFWTrmUo8ZVwuY12TKLtRN41cJoHZDqKBcu8N3nXLT4MfX",
  "key25": "3X44TVy5xAjUMrEsKTgHKkDiyKVb4KQuYTCk9RQmYZPYa7j3gDxgmZBi8M6z5HFoD8gsKxpiEK4eu4NrXidZALPU",
  "key26": "5P6DptL7P1ZL18QYLdszUgpgVfaECjNY1fPR3YeKU4yUoAbS7LM9V8oFXkoG1R2X8vsjEmLp9nsTyMFqshrqM8Ya",
  "key27": "3468jd5GgSztRNmQ5J8z26kZ5mmKcoJLUwMDz1TJwbPYA721aQoLRoX6vxskeNLkXtqRyU6yMYgavew1yTF9Q48w",
  "key28": "57UEQtnqwip1xFABBiYJjWQqYggPgVkm6MRFqMbsxjpohxXBaQ4ubqwo6FEnEh1xQMKSqmVeV5q15HBzUSiMTMeq",
  "key29": "T9qC58fEH6CpHtbt2oC8wWZHCW6g7JLuxVee8ohg6BxM4ygZEhpVarCaW7QTm5JQxzQmjFst7MFt4qiJF6x2YG1",
  "key30": "4cLNtfzC5D8osfq2U99TszdK2ie8Eg4erMrHSv96eDfDzEpYPrTZ62oE4hAHcZ8NTwtYg5D1oSkKgt84HwSaViu2",
  "key31": "3rL9tQcQ6vKtcSmE9gPmQv4CF8nBaLn5p57yKDn6NpE9i2fduxouMF8LqJaWCQp2Z6qUx5oURokQth1J1JWvRZPT",
  "key32": "4gE58VtW2o4SthJd1conZVMvQ36UQPhJ53BJYBLgPTiL4M3d48tq6PZPDm5LgvtMfdCf2K9FPSXEB6V64qWo8WMN",
  "key33": "5KxkJjc6gGPLnL3sAwherBedndHz6xfVWwZ9hzXZGyGpWh4BwxJ9qfMyARNKNzzxWz8HMssHYCsQXYRJSARtQczf",
  "key34": "5EMhSjnn7wDe7mt9dF9Ft9ftEf1dWFJp6iLEW28vYYaQckSkgHwsCrvA6BudnXeVr5brcoovyxmhNndB62ps11Ff",
  "key35": "2uNQ3KipXJhzz71tECqKgK5raCXqnr5g7dNSkxbDkcqovRv3qvu76emK9iwy5173eS2Ph3oraMwGc5nPtsYKrpso",
  "key36": "66oZ1nBVu1nUKmNygyGeGMwQX2WJX5Da9sQZJzDsWMCGBgeN3tPPd3QeP7hyYYFC8hD2aMapn5xH6JVpv6PjWjbF",
  "key37": "4pwuHmopMtJtGcXfVbxPChkfQeHzHVtrTZggy3NKwA8HeRFLVghSTTUSnAmY4dDhnZMoKKPdknXxLRh8jJmQFQNU",
  "key38": "36m6N7KaBLVB5PdtBg6ZuVvrh1kHngY6V7YGwuh7rG9hJc8CZCpuE5JnjaCht3zdXphFPpHWFnszToJLApFwLmv2",
  "key39": "KdunDRdaoXMXmhvNHynxp7LWUf8PZ4mQS8KRbLJh5gV8AnB1zVMP5n6W1tra3RTVgTPncofLozBNouZq5UcFF96",
  "key40": "ipEVirmchZCZ5n88tgffsK5CMuCXyfadXLfHUaYVMvHWPBya816pXjBRsSdV2c6wqYWpDojj5JxWoBz1oackvYJ",
  "key41": "ZDgS6f2EfvDZYemsE8An4GSyJThEevoBcFMW1TkXrK3A1yCVdnaTxsiMfQGaE3bkVnoexviRGmt4CMzfM7znnnY",
  "key42": "48uCDCaePkhh3m65SXZCSNLy8MXJqVX4sD4BfrjfeUKetuBbXDCUqXSQZXZpov9e8Z5woRwsX1TGCi4MycZbMJKK",
  "key43": "5bWf61ATp4NMb48Cmem9821e75q5aQbPwNFiiqbDqVKQm1ie5D2iS6SUniiznbGXgig4ToGgm7usZ8qb68Ay7Aii",
  "key44": "396b6rxirNCtAcy77vHqEaGGy5PSPPay2pYdAJjsqFSwx1RxS3w7q15pJkDkDww3qvMNXSEhtY7R1RBDiyh5sEt6",
  "key45": "DmUcvi5CZbsMgdXT7919TFedD2JmTv8GeWrERGydLEMrbPmwKNnZqf6svL4m3TDFx64ctXYFxVriCQCLwccckfq",
  "key46": "3XsSFeFDCpvdEAE6xi4GhokXMYw6m4UhjPdQumjAfywZhyRxkUtYDfCA4AzGmWhrH8MwUvEypCKVxE3DViYJP7gy",
  "key47": "4Nse7a5Ypcz5fjJgGY2BHWpN5mRpjBXxVJreagNSiRyZhtUeY5kgcs5Bh4o9Hji1ccrLU8JKcjgKGmZAG6Qbs25t",
  "key48": "3oiYG5wUkQBfNzisP8ZdnLib61kh3oPE4SyZwgya5kfDBB3zbdg1fmbsHJrukuytxDSDrXThxbeUB8fNGJsSeN8M",
  "key49": "LfTK4jLeN2Xz9AqEGzD58zRjHG65mRYkjpehZEa1P5VwDAfzgG6YpRJY7PykpYPA342NSD69Ebev1bXUx7PkvUH"
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
