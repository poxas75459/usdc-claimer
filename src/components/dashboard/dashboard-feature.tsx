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
    "26kUL2HumEW9LfGY98qYMVvJBBD7ZhJQTBa9mkqX3sB2QkxeY8EvuA44DAG2bdJdhRLxsXstnftTSMrjNKeHiSD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBQsCsm11zzwkP24tvfAgGze3WbQhTrHEZiuiefkWgaEvDJzYuDzfJpSJch3gfQJt9WnZp9s7XscXZsyXJapGXv",
  "key1": "5SxQASfHfwxffbZ93nudKLerXuxBXvZqZaReXnnh7DCPLVRgcr8h66Q6eiznNLkWYc67ApsnwRjndioKKphxTpeV",
  "key2": "4AWv8X9BSt4bovqhxz8VNV2DqnbqAg3MohJKa64pWN2BDsnazBU7sFdKiVUXHZyg6NFmuaPLTsP2PDxge6QPnVBt",
  "key3": "7tf9umtXZC2vhxiBijHoMkKLTfRV6ebqvKchmKJiTH7aHhqZnrV8eDEnP82pUnkg6B5F7yD58vzKQikJyqNPpip",
  "key4": "3JEebAEupopQ9NMHY7qELE6Q4aQAjQu1aNj6zzAPEaGi9UWN5zaAR64oJYupXsrktbC51MxNfosx1qpU5hRhKYrp",
  "key5": "2BTJNQyzf9sDPTZcCvozCJgCEiwXqhEd5CanSowaaa2Z6hPrbFpuTmyb8HEDse9TYDxzoMAtRnyF8t2UreMMb8rF",
  "key6": "3ZZsbnhaLSw9Cr3YaBdfiXCt3478cPjhSKiiRVAhWbP6QuRhPkHpB5zHFJY6KyYJWNL1qD4ksp2ZFwu8Nbk6tvab",
  "key7": "UhGw8h7zFNxxFppLYKE56kxVZeRsb24k1rFCSmYXWubAoGDGMoqA2ziF937bYcTz92MoK7iCJK7PSkLyLACujhn",
  "key8": "2tMbZkCnQaX4rxearDtJEfPLXuKYCmoX76vmGmYmrBD5UA3iTJewhUdyRDBr3wWnARcWmktCiNaaeYaNNjCZeWvG",
  "key9": "34eXkuP7ft7VSaxgX29qvsWvkCAUbUXqfXnmcXd7bTr4FLSi6RhMqGZc5a6jhQBYcLQPsUXJa854i5ZujUUxEwQY",
  "key10": "2ysYF1XexhXshGNZSdGYZv1pUvgNy4NXr5Q2HSQ6BNVKuULyUYJ9Estk6ggcFe5iwPqe1Qs82yWEXuBrVzCg7e1X",
  "key11": "3bYfKgUUwtG1jV24r6HMexkoQzPxKnRLiwabjZoRFmrX7sw1nvKFeJ15v1xagdjCc3UZX4ZGX6Q8VXiNJu86bKAz",
  "key12": "4h842xLB4yQVRvTGWM94Wp4TFsvFbrUcg7vi9efJftp1xaTF8PXTviT2kxHkM5u3DGT4kb5Sp4PNzLj1QsMq8wxS",
  "key13": "5fFUSmWHyK5QprcgsyxZzd5uRLAtuqfGtR4jCB8hemuocT89P5q2bRxNCSvrxX1iM451nN8ZVwSRZvkakAosemN2",
  "key14": "Cna4gw1im2AFB8XTVu4m5UkmrnSzDJGnmt2F1sCk29KV2KYc6he2eHZefXrvkdy8v2svHPvzqBERJu4Qyf8oYkS",
  "key15": "4zVYTmAyQTG6mhRw53Q96NCa57bAYBxLd8UycHEhAuLYDX8Zyy1xqDmRb5mxe2BsywVxeeoqcgFzAuymDX5FffBx",
  "key16": "2HBgC95goxxMU7eKj5878u3a8SRvWLSxWuG3J4jpKsRnSuziQCnaWdRizDL1rpKakNUsE4Yod7GRahEg3NSUunFa",
  "key17": "5xbg4ZgcStUfTGyrHsPtDvyCSrdmqittKS8QezMTLFcb2NJkEeU1hbs5zKkmL5YutGqFDYiTRehdHEuaWQWizaM",
  "key18": "VDHJwQrz88M7wNzNwCFxZu7F4VkrVpq5FjHo2CvFstMava2SkFzV2pm2s36EZVVoZ2J4nJ5qh5ngHy4aUCBA8C8",
  "key19": "Ccw5gTarVtXfztjvwKP7BoKpw5UTg9eGRMxzBhcHcDN1GeYD22T588v5gHxyo1BfbvsX77aa6fgXLvtGgQtLc4W",
  "key20": "4AvHRVaorDmUkwz5WWfUn2yhyBz42TT7stvw1QBkkL6Dhz9234Ss7n9Ybq81eaP4cNFZqFR2HDsgBM1ZnHAmqvLH",
  "key21": "5DUCTJrbG8CJZYp9SUARA8Vb4T5ispQb1tYX9qkyoKQivJNuDiFVjjf9LX7Y7F1aDxrM2pgQcLHyqrA3vzjJwEDo",
  "key22": "4tuKbAapBewNMuAsQCrcpr1TT83fidoGtfdfSurSZPfA8xt4XG17fH1sXY6imqJMKDoF4g3MdHqHk32YWCToTCQ4",
  "key23": "Cgk1x19v9myugtDMugRRT6pn9jAeaMem2AgFGUi1XeFLptHpkW1Qzbp97YrnpvSVsTfmTv6e2gySkGXbzQUKoCS",
  "key24": "62rKL1BVPBinTMjEsqxbBTj42ZXzCconzrHBvBpnre6mKUGE7X4snAwZFXumaRkPH86KiUhZ3Mhy1SahPK6jnsJR",
  "key25": "5WiQBNs7UsJAouAh8cuf8CA8hae8U8JCn1hEcU6J7CFXZ4VE63kWzu18FvHkxoC1T3M7vb79uDasZTwXppaUUgp",
  "key26": "5fh6gavUuHzpHAVaemfRxwUCB1GvEfNtu7KYy862NUKu4bgxpSgfrGuXRBwuPhpBw4aZdaGUNxbVaKzc38xVhrvJ",
  "key27": "4zozAJnMX8voApdRKg1PfkizYsehymWHhZT9XoVwrqciUnW4vbGBMJBZsaXC1FuECkwV3nndYzQhhVdR8JgtLJnb",
  "key28": "5bpJeexRkk62qdejnVniNoJ2BqSC2xshR15EsQ54gu98FesiqTyrwoH9rhU8JXpiNskRtpyxkGcqaBdXjU2EPR5n",
  "key29": "5G6i2qMkSM7xZJ9xrqBD1FCa5G3KZhxLkzM8X1pnYo7y2ZTx4AHXeV9iifAiVJTmV1XUdRmDQQDsicJf6m3siosP",
  "key30": "4GB5pskB4EBh3ae3TJR7jH5ScVFUsQsPLkkbmP6BaK24xGimCgj9251PxnGVd9BKugbEe4Ns9bcysMRiLSVnxUVP",
  "key31": "2AyT9ZF2HfE5rQcxLjv4fv3NBwHgL3gtLEZugwxWDGFYLZXU1UKyaeMu6kLmPsQwbtwVCpoB8zpuwhPwAQpCrgH4",
  "key32": "3tVxZxAL4q2jZ74Mvfj3cruteQR4Kaasp1HrjGUA56xfpijtQcj6NugUbg5b9mwWrF5rXgSbdGAeZUbHEeVyNy1v",
  "key33": "4UCkF6kMBBxAw1m4pmVejJmFgMgTXKnkAXyJwnUhnVANwuT9JEeiTJ3Y21NwkBg5AVqK2HDmirFmn22AZksqnW8d",
  "key34": "2HogCFg5sibrD8VeQzfn23fVRznWBoRYJu8MR8grwQAc95Pakb6EKchmPyDDBsX4yeuRkARqVcUa1jDpaAeAGb61",
  "key35": "61NwiJkPbMUcgGtxbEZePhWv7gQ7R4mKwbjJc4NFtN4cLTE9zyihQp9BECfxykYi6rmFkuffMjJm2w9LZEy27fCG",
  "key36": "3KqdVV6iwAXxdgkyrrtH4B58XBnuW8p33sRgofbk6MzDJP4LxoEca4nxDY2ufkPwyHpCB698oCxFTT5QEemmFmyv",
  "key37": "3oAkZptQVbujvwpk13WmQcLVFHXtjv9WEGxS8NvTsrFaT2WyvQrLF77vdK7sbhZ3dwSSe3xNXZR8vpDtoB9f3fG8",
  "key38": "5SnJ45PTwtbeJH6DyXkb13nRRt8ejtxzXivF6upRiUMDtcHcv45qUUsp3UfYLZnEafRqWGHAnCFYpUsxdfa8UqEo",
  "key39": "B6tBYysaUxKogcpEFNFyRvW7TebxXBbNXnxoGVvRPKuLe26oZgWj43p7fWusMH8fjQzdhemivUYMUPwov9jqSXG",
  "key40": "wAcYNgFN3mDB1SVaReW3knqEfN3Z8KWsVv6GfCRZEXq1VB12mznmiknX3EGhunXkidgz7fbYWFpqpjmnHwkshTq",
  "key41": "5wso13STHQ69gXqKjFx3Yj2KoCT9hLwm7eSWJStr2DEzJ2FaG3ABudHicpo2UGJk1fK8DbUkxWhbUAZFG5T1Mnav",
  "key42": "359nzRaXbgUkULzhVCRa4CCUoHcjEqM5rGx9jfzZDK6J9C9z6JgRY9xCiWn7pQjsyJk3pUMg25nttAXQMnWJkSr5",
  "key43": "5LgKYLMZwS3qTfsfZR1ra4GMpsSn1oQQG2qLQAuh6WUNTNqhG2jNJC5yWNEAQ1Bz2rc8JbJrmequas7e1EzJuQSE",
  "key44": "5AsdZtEMn3FLpGY9z11uCrREi2Rv4yjei7MY3b2VFaBmPLSR2oG18tFRyEeLkCwu69u2kDwfmq2Yp29arShpAeML"
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
