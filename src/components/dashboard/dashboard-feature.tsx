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
    "5YRwG8JNvAHminecggtqE7vWASMmNdBxtj5qzoC6Bb4wg1v3CUx4weQa5kkwXvAT68BP8ucnezzZBUrayT4zBRi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jYEjHDce1chMZ74ZtxPPQwuZJDM2vxw1CA6sCN33ayniVvzptC8ctw9UMbwSaphuX5K4zjRV7WK6rDnSxB3pKK7",
  "key1": "2THzXn1hDMFzWy2mqGjc4UWxnSemkk1vncD6k7kcjN7aEM51aj4fYtNudbdYc4gTvqSS4j8i7b8rEqoZigo9m47U",
  "key2": "5fNkvdrHi9qN9U7g6PyNZHkJ6CpUDn9Fywsr96uv4UswKHDRSWK91RfPzTido8N2QAm1rchtWK4Fh5tQypXRveqe",
  "key3": "uEAhqaKLk29qXZDY2qhoeqiNdStq1nhaPtwaT15RjjCiy6rYsy5U266SpXwC5L1mUWEZZhvgGKKwtiDSdTZ9yqz",
  "key4": "25kwYxAtxNbPFnSwRLJtJZywLYXrEV55CwcrtgQZg8JeazJnCXpBHZohp9LZv1adWa8Nj7XHPuY1FN3G51CK7TaX",
  "key5": "3zSfRXvK14TYFJXsJJPbvDRkoZ9bqBgM6G4pgJemoQ2bZZ6Xtj3WXLmbTQPn7UDdjaRDHL1cvFx4qyJMjPndHRW3",
  "key6": "27GgYmKuSWbiGQmCgepmfC5A9gEhvmkqmiEzW1DnLXYhRAYcwdbmNTo9CzWDUZm4TaJichU7wEHF3FqFatvvW9QL",
  "key7": "21LkDqBccuQx6vcTsnsVGVR34dxPg6VoFZCjc9q9wJXZ5WfCFXv4j2ZiRzZTUshJQRAGGWGjx7q1CEZHPHet1K2e",
  "key8": "VShD9sDauD1qY1fdixkCKEkeHw3Q11u8KCZxFUXonoC9t1YhWye1TLNR1nxxkBrE1tdHdFekZzT67aYAfUrvVTG",
  "key9": "4WRsnyjiz9Qnkdp2iVTCXL6oSnodi5bqZkQgcHkiQA9auKA84ZLndfUec2TFGV7o8jLTMgERN62iyHXQ7d1YrvNx",
  "key10": "4kt3hbq9VzszZksnNuSTeJmGpyh1JLunDnWy1EeYLTc3bzTAwgodgFCXYjGgcX5KrGbE1aDGf7mrbrCvwM12Fcu4",
  "key11": "4hdHvmrWueusuorz5gXerYMMVtybkuZkpwN5ZRbBPbEi7bTuXvSk3wmGyAGzh9GfkkbqoZ2o9yojzfwB1nsCJyMA",
  "key12": "5MfRzmheUnvdNu2xMnUBf7RKsLpKnMXMS1Pftdk68Cs8xruArQWJaHTysdxKRny1igzqS1m7mrzZDpUmEHmB4KSZ",
  "key13": "2LTBT6VBR9fuMjccJA2FNTeNtgj8bRm58S1J8b8sTpaEqdKwuZ6Gn68zSCeEPduEa2zRxyZ6Ax92VsCd4TgjWgyW",
  "key14": "32o55DfNeFhTZ8HZRwa5gkUmxM2t5APYmAdsB5LJ8gxTDXXtYai7sURksvwBcL6MwK5kJPT7QBj5K5sA5GbNswa2",
  "key15": "41noH3gHk5b9FDU6iSaWQxPxEadNMLDANvbtPKbo9dDm4PkmVzJ5hatG97P1Pnd1JAkskHYbxCKmq2XXXwwJztM1",
  "key16": "aZUoGuRLAkUnDmsqFkYfGukLGk1ThSYPva8RPjZytRmWm7VEFZyioCQMXc91jLWoPBuXCeB1zSZJCCcwNHiJwbC",
  "key17": "3YyXpuDUpDUJf2nkPXb4fV7BYjbDwtFHiUYgaWTGuFzVUzCk6uUnY79zJzx6oDW7JKJoczY2S8vq9ZtsyqUYUhpp",
  "key18": "42LM4PrkbpK7Zi8CRUqeAejv4DJ2BJUuQ7fuWFKwCg6iHcipoaiM9LJ6w9iKCz6e84yAJiSFbMvgEeuuAfREK4zn",
  "key19": "6ik36zVdsn1XLBU1GgfYPDBP9ZAn6axxud6jBFuCV1r5LBCNK72C4xJ4WLNNuPooQkQqm6Mnezkrfmg9cahRF7v",
  "key20": "5GbDxe9sS7cW9MW54Mi4gJ9jekUp8pL1VA2Z8Ub8WjSvf9HLbErfnJyWAcSVoSAW3SpQHWfGyyfipTXgZT4u6q1p",
  "key21": "3fU3xzCs8fcsWg1hduPoSZhr7ZXP9T4k9GyG9V5QoQbgj7REhpLX2qW8PkMNFuHrMWLciba2oeTZzw8tR9Vj48LD",
  "key22": "2v12gKcTiewoPVirs5oc4H5sxKogHLeZwQ6xMbVk97ZcXwzHHKmKR9C9BSwqwNykbEAf2ttS1QKCbZw8GnXzT9aZ",
  "key23": "RXy4cXt5ptDDfhy8pUYgxmKuoQwUSvduEAyec5yR9Ggao6rHcosKiEuPDq7FhudyUUY71iTGyB2pKN7Xd5F6zU9",
  "key24": "3qPd96Rdjvpfvy7uhr8am6SUUsh4y9o4eimLqVdyXz2S76Vk3w7iJ5G9zuNmJdjghNRcEk61C2RuEJT6ZssYjuxC",
  "key25": "9kopNLvucCBNnXFXVxterrQAav4vCKHRATsV9u3FmUzjNnipVt4Hu2gK67hRKojAiHQxXHFkyaVcHWhKiooNp8M",
  "key26": "5qh51Mo4ZUaJMN6TRvcivENgpum5SHdv9wqAKsAuk1UCyLpMcuBEt3ANscV74KEAgQ8SdFZPY5bpmqBLssUFufDm",
  "key27": "64kQ1GipJ55TwJF51md2vv2JzWy29RGuxCB4AfQxtSwyQPvrYPP5foqGvqWARfbWcYct68dgDDDpKnj5GyPYJ5xw",
  "key28": "4e7QbkhaNrjsj7Yv1cA9PsUsGQFLVKCVYVNjW4VvgS1LjevhNRjDXHCKdYQsbD2wYZroGDkb1WYu61hu7SvfkgC4",
  "key29": "4sWrRvALk8UP7mcW5Hh1FtBq6RYAqib6dDHKj9kqSb6LmxFUSZ7tM8btDQZGeZuwrZK4fBXJvxiBTUwXmbpv9pCN",
  "key30": "4CffTh7eAtTwNruUSkyqPjSdc9EPShvSQG1kqFKgdqyPoMqHxiqPydy3KPL62VCfhbY2M77TNWctLKasX1UJJ4V6",
  "key31": "BGEQssgg3DPAnnGVvT5b9TuAFTEtNDHz3e9cucnvmV4UmTaWgtFuq1aD8pSomzAwzN1FNibBULTTJTFUWXFjpMQ",
  "key32": "2xkfAhy2ZweQBGPCkD7gi9g8aLr3XYvYGCUdvEhkyqr8JJpDiEG5oDkRS77eexHobbkADtseJdJD4zvLH8mCQmkp",
  "key33": "3YCSNnsMJKfwjc9hs47K6W9N1q4otSgFyVkHkbqNWiNHAPj17gUMF285xod1PEXtyVi5RNuhrYf8gHNYp5tXSqdn",
  "key34": "2cwPVQVbBDfk14cDo5wTjqBy2wrfSxLYnydaLxtiNwovE7uPjCFabPFXtCfphYEPDNfhDsk9RzXAWppsc5wH3Bfg",
  "key35": "D3wf1NExYdCb411p9LA4ZEXBMXHGzmy9oXy61WHGeW5cRk8zkLckD9Yu1w5kbhbNxLrUDU1P87mSRvMQnaiLMnJ",
  "key36": "5U8JCobg17YSs1HVEfyr1419mZWEfYGtxifozfRAQC1f4wTnjWB6uHNgpvCR5Jm3fyHctYfEbfLRH3E7HFsLbGaa",
  "key37": "3gTveybXGDTYB1NGgbcxsAsP69EqEccfDfufqwHAWKNc7PgeTuurStwZ8AHiq6c6D6F4ppB5gLXZ3H5qyPP1HxcY",
  "key38": "3Nw3ydrjvQhrA6LKTozAJpo2FNgvTiDBxYzgDP3TcgEZmmtLyLkixQPivutRGU2ev169gtvYcVDQAs8erZZw211s",
  "key39": "4DqwaQ7cXC3NeMP2JBeb81zDFXTNCg83V8Tcc5ffeMopVGpaLxpzyZpLTc6HAaxXEPngmb7bVX1t9KiKqPqT45rq",
  "key40": "2nfHCTkMBneww7TpAD44YqSiCNqZ9JX4SgCMJ1TwGNnHjJRjHwPmBPExVg4KEbys9CjZdzVFGnseiD2VR96YXPbs",
  "key41": "2r9Z73MU5CW3wp78Xdmjb5DxbVASHacobrS5b3jB8eL6digK5dUu4JsQjonPfVWqBNShG4oZd2FS8m9dtqsCDoXs",
  "key42": "2YxKavmJYHvnhdo4ipddwtkjgapxWsJaT2352GZBXppWhom1d3zbXTZU7pCG2Bo73VYJCwvPMjh18gxXE31AUrX5",
  "key43": "4dBzCkrHWuKEJ9ZkwpAbQxVwywcZ1Gt2yYVCePaMhxxb2tZi8NjP3yFsdcciN1MJg9ZG6FBCLRsv2JMiVd9PD1RU",
  "key44": "3qTZ1m1aT9MhQkAdiUwaVXeaiyVSDEFzbe3HaY4kyXqBhKntgy83LSQAo5vVSeaBPMZeKaNq8U5zkSU41jh1TAXC",
  "key45": "9LCgw4MZvBRkJ9JYPsW9cp65HWW4RGJ9FTWWH6dQhAbajA8M31FZSjdu3f1KGhKSjFVUajmSVapxnWUJpFxyTQS",
  "key46": "4YXeN9uUKb4QsMkLtnGYa7UYFkNJhRXaXXgRUdGt2bJKeuKA1yXEeFYzYwNcgjNRvTKotooXzX8Kzt7Q2CUwRASY"
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
