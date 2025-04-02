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
    "25QfQf2rChkT7QRXArKB2BWaFR8ESN28bvTdh6i341d2Shi633ixFZscTPKYzh1YkfH4hZ2wJYWhHZY6EJsutXsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D2CrmExmFHGmhYriBjdHYAnYuFKhjP1pnsuPaByGKAP8nfPe8p6GfBYvyvwfQWSraNm4cPmGDvW1KpyEY19K7Yh",
  "key1": "2jrZ3B2cCPez75C3f3SWQps3DSu5JVEJekmGsdmxr9uT8XEGsmuaUVBXauHDSs9J53F3DGfQTxa3SmzgF9AU8evi",
  "key2": "72aExK7Zt6Z4WgLPACH3Ndq6N1breBuXcfLZaX3V1cuG2323TpTGjCzKSvGQJbGHgkh3ghsgrRynaoxBc3JUr1s",
  "key3": "2AoEXQrwub1LKBeCF8X7n3rs1abAqBkqiMj1wAxAo8arxPUphTaB4f4gyrbeJBTDFcjKKfJaem2yT5gGVi11pdYw",
  "key4": "5qaykU927cKWfmdFUrCR2LebWT5UGGtpKqEz5Xi19yT39MVewt2NCoa5Y5GgaEufqGtvc1bLA7AYrzwbGcQFMffb",
  "key5": "cHkkzCLZbkEduhWRzmEoNMH8yPkKqBTFiinNuky9RqYwmVxSD8KBMySxJPWiXhSD8842eWoAHGJHJCWRp95fYu7",
  "key6": "4QYnfy4QydrD7p3mq3RcVrZpfvuLvNVAjqGCTvxgsEuTB8h6tDjFwHgHF6CkpeoWNK3AuMQ7qPkJmjzE3FBs9dbf",
  "key7": "ptBxCFuBEtF2rtPTRN32pXtgQwKQwyzc7jL57ac3DNCC9nenUyjwi4wAbWXd4sf2T8P6apTrhyPbHst2ZF9XitE",
  "key8": "4S5PXhrKDWGbKh4RFHjX1TAnK6k4NGi7GkYHpUTpCxid5xGs8bfJ18DgsEuUwh5Bmi23fF3GxgYEadpbHdLDxxWo",
  "key9": "3F89id2oJKPWdMKNXxLZziyY3VChmWYXpbx2ukRFQ2vdrLPfiJk55yUHq7tfo9wwg6b3et4ixcgG4Keo8E3C1A8e",
  "key10": "2ocjN85uzCWis1jChdjkWN5iwhL5gEzSdNH7xNSBHa1JnWWJ2QCTBEqMgTgLfZnbgBtkctPcm8egt6U6jR1AwYDH",
  "key11": "iPf2sLTjVsXw6uyku56FdwDfTkAALLk8Y6xSBeW5Dq1QfNnbi9V9nBM649JUPtHWf2jB3vcQSEJFpUHtiMXuwKU",
  "key12": "3JK2Utq5vCbkSoTtNrXLbBW5Mhiz3f5M3pa2iYN1nfJFwiZwWv6LWNUcC5RxrnFT6rDaFXJQATAMd4Ek247BMZkb",
  "key13": "3RYXy1akhsuQ5reeYdA7KhPHMXxDu3GRXygNcmjjLQMpnggBRsQGwpBRGPf48cXQBhqxrdZYcghJWrQmQBbdE82H",
  "key14": "2PifzykFsK3PbiHeErmvFuMeDwHgNM9oDYKRKqEHmqGphmjE85bhwBhPk1tdboXPi9xm2L235VXYTx9o4SD6eFSn",
  "key15": "4QMAUMAZigGYSAbzjFoAofxNC829UNW1ZgeqXfhMzGdHr3XthdsauVGP5sq677LAg1jvQo313vS3phxRSNx6RyaT",
  "key16": "5Hc6iQeyJiVyjX8GJ73fFTFTk8uh5EGCkDNWHUt9grJaNEu57VNns6KkSR9tTfubp7HgDBp9E3v4F51NoHQMmeBv",
  "key17": "3pLMakdEDLpDkJHyiqd6xJTu2AycR3Q9nQRzuanUpJaWRUNT8a3u8Wo2NexTTJ38JFyqF16vxjZFmHdXeUEzibjF",
  "key18": "2jDgDo33gM43dfhBqJzxXkGXEuN7wAoG5jD5kMQ1tbADZphxxDgsknwjyzbva8NB9g2Y7mmwAsyyCJFApR5FbFX8",
  "key19": "52KqHRrQYxkWTjbUNErem9N3TeXJRLWnw8UvaquuXmxi3jEeY7amXcdKgqqTTPui4NFGWppgP7rLCQ9kjeHtTt7X",
  "key20": "2pBFYniFKr3AbtYdyndjppCSV4ifnqecZttXmqsSxqpNEABtZjMNK23zw8c8BXNEunxPL5dWzum1s1aPM351c2t9",
  "key21": "Rka1VdyNijwuunVXNsY8duX7ZizXT92UmrfBvkLfFjY3JtCEEKCfopmB1jt1qnV4VLpE82wd6GFsjpFjGHKcpoK",
  "key22": "4ioPzTtMpqZr2V4XzU9fT4eHWVYqbFqsnVaBvo2LjycVMw8P8prHmsPgnZxp5VPkZjozRk1MidnHCet9ysK93D6K",
  "key23": "2ZfdwoGLRtPKmDHV3k3wXm3AkPEcKantuxxhHima8cYAJ6v7LwyTUr2sM6mDTuxNhG7zjhx2XGSRSFPzUXZp7osx",
  "key24": "5KGz73QYWYgcCknsjzax4REerJCozk8icJSioUesKu1RrchwHdhfUMSrprS5TzcLBYjcBUb9sYx3ykQDRK17m6jy",
  "key25": "jP1rEheqij8NxRqRNXL5g6G2Ke3zYBxfc1wuSFFNfgaUcvNjaMm26wSUCzXCgg3PBaq7XhmgLpRwNZ5wZYxUzw3",
  "key26": "LMJKYk4siJso27M4ramic3xX37fYQgULJ9y2mik5goUsGhqQ5Q4V5UF7RR4WQKcn1j27Y7gzqxULqxiCRwduYxt",
  "key27": "4qSwvnoMuKZiYnVGSnrT5ejzPGjsXEQvZqCW4JZtvP7jphGVmPnfRYK1X22Xxjh7wgMFtUpFNKyXgu63NhDCnqgH",
  "key28": "2R2pNnr4nbR9sYakCdinCPTjurtpVnC28WeDeQ6WoQph1WbpuTMnu7U8fTQ7ASKNsfnr2KHBNTfyM7K7upyGSENF",
  "key29": "5h75UHbD8pRcqsEtSuFLmWcF1cU1GK2iZZzn6b1m6miuNGJQpVTqLqQhi2Ry3QTVbjyu28y5BotFZAy4yV18DAbp",
  "key30": "3STGFaEsR5T79NKSBK2xDwDeFWHbuvn4DYXk7AyaiV2KyQcX5bkFR14PfYJ1aDZHe1dukbikqmPPytWvd8ZGnJmk",
  "key31": "4nyKLprrCucXXyXV3NUfFgDxayfAJJzpvQapE3m8Jc2mcRvoM7BAE5srKfrijvv4cAHhUfzHmyYtviVYc2efqcjo",
  "key32": "5FFteNyA6xNnJbSbmLzYsRMLQC8UMCjW142EBtrwnCHtZtkEKzDCYSWjEhEGTwYczhrZZ7RdCHP6AgecLov5Rzie",
  "key33": "gBnLDqEuhsk9Ma63sexhcXkBSusFwG4WyRpncJ3wWfV7a8uC2y3iH6XFUwi7UJAkoAn4CQn4D8Q7j5xr4Up8W4u",
  "key34": "3FvPQwgYisEZ6ZL1stFoyaqexwjYvmdzXZGoJ2Eowxj7TriwvKfC9deJ4R6ZfC2w4AvGkmjvUN66XvQ6fVVtUNVP",
  "key35": "2YpM5oHhDytfPZJhgdXsggeEaR2ADFr6B4knvmPmkhCTWKsy6JRTzebNW6KNMj7Gh2fU8zSJiWXYpwUt4BrWbMhp",
  "key36": "TcRZZKELfLUTtnvQmnZUNqLAEPUXJpgfsfLZbyqE2Wbe2UnGEj7JtNYa36v6hVA97i2zSdwep6wj6EcvPKrbDpQ",
  "key37": "3j4DjVjjPSh1Vg7UAR2sWxTbkmkNqzftoduZgooLBpPaNc1F88p1dtsY4d2P1i6v1PQhsXpv51824TGzdDeHTkhf",
  "key38": "ShxvBPMxeCycpopKwSsuH4Le8UxtMCYdNR7LLwkGpL67PMfHUdqUZvZLi76ADfYV3tm114URk6yCh68T5NaByC5",
  "key39": "5Cuf5RbB1YJWfiKwqJBZBLYwWV2sy8XBCr5qvzLKBUNY7wZqWoTFcUL3aiq5qgXLZnpeJQpW79cJ5cEydSbmyE38",
  "key40": "AUCGN7L7t3LMwBhE1DSwaB9DCmGMRdCu1YUJTeBA69LjqA2LRB6diR5yP6YN2tsvrsxsDavyik4M9FkCGnS5GyD",
  "key41": "4SJD3112VZDHKGTKcicfX7r9uomxm2fYq4W7qRTXb33GTW3PVtrjehHJYUN7T4z5znwabjY6YNosouN4bogwfJWw"
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
