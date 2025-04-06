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
    "4VCZ4V6wjdQYuRebahTVAzhirAfpoDjyxng36v8GDQiv9MqTkcrKq3ZpgFYoMNzcLDPUzo4p19FgMZMLFcjjZsH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CK9WVjVP4qGdh48oz6JbVAGmgJsf6v7dLuXNaUHHdexGxJtNf1qcCoUGa6WRrwR12gnMr7vWdxW4KseFket9wBL",
  "key1": "4Xh59WJtgJTYczomNNuZKRhzpa1bKuYtjPELw4WBLvhQx5WNEFrwSicweNU3kyH4xBjauw4c5ZR9KXocbE2od6zD",
  "key2": "5PdszWsbBF979sdS2qKRsimvDQz7r3P8HUpnDp4WDbZjbaWRbUpYmuyUypKG6jgB9osKyqMh4teax6Jw8bkX1drx",
  "key3": "2NQupfCqRCLNtUKRoKd7pYeuXij7i7csZ24f9ULQLhDp8RAMKx1JPgVoccJ2tums5UHZvbXywxeUYxzomRbESFJm",
  "key4": "5A8vK9Yghxw7hSJKTqrWwY2G14eUPpbdrugbH9BRXkPHf1E9AttZ1Mb6btQgpKLyRgV2wudbBNFfMQXsXV9gp9Rf",
  "key5": "54HF1SvBgF1YKicc7QFww8YCWAsaQhrSvhBSCgyTbzagdTcn8e1ALkeM1sF9bqFv92r3UaDpbhKWMMEuBps2av5C",
  "key6": "Mpp1xvWjuyMkTYzCtoPZKynrDsuu1cNEFA4j3syuqNf7V6EsAw9iteARkC5okCB4ALtTLExmtMG7xSrd9KchYj8",
  "key7": "67Ba7GX7GfPweZzszrmZJTDZ7oHM97uYmg6ouLgsES9tWRB3XWkjsupALzR4bvuUo9vhgBchJHyPM9yq8DiAf5Ue",
  "key8": "4m3XSPypWc5fXzHbNqMbaVdrNWQAKtyqHTr67BJiLgLRnyb86cGz96BG7KrZWAt66FsGxSn3KrFzb4nW3tnteZvH",
  "key9": "5ZwVtXY2i9Y8Zr1SyhfyvoaFsVay66rcGttWtj4G4r78bnnvPCiXZcqkn2oxynb3GDy7nPb6Sstwqx2RUUUiqVL8",
  "key10": "MDyNdJ4Y2KwUUUqXrF1yrBwHUBvY7EnZEYoqJDnSmXAhpxBQY3TJxQenMoJVvYWNTBQNTH5ffAX6uj5NgudBPTH",
  "key11": "4K8fD4bCxeDGA7ZXCB1w5UpqT4WPYZcyFg2FZkrTdNeUvsSjbSBDHSTpvxoCzqo63nricADaLM7vCGeVi3TkH7vj",
  "key12": "4bcRbXyTczADcTvmXNURuqheCNLwLKe6DdwFXD5CjNbYnWM4QtcavVQ9DDbLpjNUFqohbznkaAtw3MbZK4PkqtTD",
  "key13": "5jucCjpnwZKMoMZoh6FfpYLyn8gcLrWNfcvEFYhe4eevcTaPQbcrMQvE9ihJkCP6damDKTGchwLAE1jJQAbqvpLt",
  "key14": "32zqNFurGnmoVAECTdJCt9mCV1qGzFVXv8hxR2Qcjbo1rNzaUbfh4jsexK9XxLuq9MrASqrrk4AAFdpHojrW3x84",
  "key15": "3NCZ12wFoEVMrbz8c9FbaFYQz5bcvB71hq7ycWzfsXn5Ek6zRpXkZKBFJZuhFfQdXBnWa1vmcRc8yh1YNmGHJYBH",
  "key16": "ZK3R2ZEZNkx5aBdJNBQDVb5vTpdZqzSjPT73dKi2NrG8S4BQF9ARjx7ijauMhrodpsVCRTE1orCjQ61kaWNv9gN",
  "key17": "2NGAZKuEqMKF2gWHyX7Khe1oNFgxCCeHN61vgXUcPmZ9uRQqgrQzWMYcaziCD3CHXRhMfYjf7bo59J8bLpQKnb86",
  "key18": "3a1L9d2yy9TkKq4SuyKKEoDYgosuth4oeiyY2M9LM7gMwjuoAG4WHVJcriKZTPRsKk6SrbNwtfgVHLTMkTK73PWu",
  "key19": "4DcqL1UHuxtqQSnDTiGE4z5ifymXhNXzDdsYmb1q57zu3kQ9VjrqWPU7WLj5wXHuCwonfWB2JRNms5cKBgMn4dHU",
  "key20": "WtgAwT2DDyujjMAQzLGKkcnnLXEDJsvrn3eh6kVnZ6hqFh6CC7kWU94FonrJYAojqh1wVWYnB9Mi5CM5YZ9ip4F",
  "key21": "2aHvTFMHARm8rZYTsRFDNWMKenLtix1jxBPvKZdgzWsyfsaG46EgwhKu6YuvXwYsQHbdXwxLLgjj4fS2SELc3Q3T",
  "key22": "4ondckDnLM4hHiU3CdUS6NHauVwKoxoNmDNVypY9fhbmnvrGXqzYRDvCG54KAfV8n9mPuqGePDPQc2M6u8WrWUV6",
  "key23": "4L4hEiZgjwGv8mGaQ1o19G3ZgYHHgyabZYj38NqCtEQLsnfxvVoPzst1FbaDMSYTeUrsFdRpvqENwMohwtWjUnJi",
  "key24": "5jezddAob3LwMbL5tgfBKrnmsBtvKsC8n6Xg56pe8ZdQwY6QnrRrLTU7pXZbxrXQqaHtbQ6RzfwBRAzTYXiMtUNg",
  "key25": "24fbRRHFyWRWnyade2gnDBKdoeX28j16VihBBuaxoAS6ZU38Gk7jy5GPREvq3srWXeeVC2ZhnF13aDAcRmbDktb3",
  "key26": "5LjhxoWGrAFWkeFYcnXnBreD6yGCacFHARxU7ZhiWBK7KVpGtjNz16RBm2tG1Ehc1bm8jaf5DAASJdshNuZ32fV6",
  "key27": "3v17VaeYWfJJqM39zCU9xmbo5nSQxscuPqjgxNoPDtKBCTCyD63SpgLbvV7kEKwcFKqiz1wDMdTtaFv8uM6TwK38",
  "key28": "2yfvRqYdFQHuFCQ9ozg7o55Epx8YQ4PhC1fS96rD3A41QKqBYk5z9RJUQd3kcVCPmyzqRMngyMWnRdbhqk5ZYCVW",
  "key29": "4cPfubTiPuwPE2ytYUJXtKmxkkSavTHVEwHS6uNutASqYGK7en4wsv4yYgUUCfmrFhZSruEUom9taC9ba8E8gg3a",
  "key30": "nPjdLXodu2HPicETFaN5r4XJzcJKchC6dAqyAUmxw4J7nFchx79deTZDfbSxCraC2vktkDpThLFWsudwznGNJ1e",
  "key31": "2fv73DTbon3TnoRS7ArXjxfbXhjd7tqwKTQXo2Z9bUtpJF33NiDU9FfBZeXKFYLZ3QQBgBuQYTXGXCMgCHnar5wf",
  "key32": "4DMaCmA8hJK7hCMJWf36Sr5a13BVfKGKVzxtuSRNp1o4wRDA5yQu1KetJbdFtLgrWVn2WfPL4HbZ8t3jg4T9enjS",
  "key33": "5CUcnVNGSe7RyFLRgGH1VYg1wXtkyFuGTmkNT4AbAvjQbyn8kPsvYSzj4kZLroaV3NeHtwN5NWv19UyegsVa82zY",
  "key34": "4uNhYLgnPjbgg7SWoUcwQTUv5XhswbyVVMZSnJu5TH7tDW2NXH6xENhKDLWdNJT8zeGjCvLC4bQc2i7JuZJYg6YW",
  "key35": "4FRQZiiBSoc162NBwaD86bDrB5ZMSfF71t7vSjB9MWpSZUnjSRj5C8Asmzf9xwTRksvPUEaLuP52rhoZ6NevXZQT",
  "key36": "2dnGyPwK9rkXDqBXwMPSbx2Dzttquve62J7uZ1Hu9f2SzA297ti9oyDXJhF3vgurEeS1JHB1PHfihQyhviDd7Eyw",
  "key37": "U3fu9iLHaZB7APgmitpLcnDYoxmTjYg2eeM2NaRLLn8MnTLpaV4ck9RdQ8dYauMTpMP7yRjrDmJVaENoyiFucdU",
  "key38": "3Mxs2RBgGP5246BHW8LcLvYB4vErcsnkquLHh1HeYZZuGiAP4ksmGUtKnLq4YJcdkR4FodgijWhmKaygu2Xr65Mp",
  "key39": "5j9wCbKxzqQBQFdang6QdRwvZoPcpL13uDLS9FTnrueNYfBcHUKN4nGmT7gTW4MGFSDFPzpHZgfzARLKvoqidXFR",
  "key40": "4z2cPHP49FHqJK1zNz4D1wX8qwYeFxbBVTDXTFWze8J6osTestmgCVSvJ2By6W8a7optq4VV27TAYNMR4duiy9hp",
  "key41": "358UMzMqgzfHXNTfsQ3pBaHJWBLPP4oRqCcwbZF7eWT8yGRfxVNgcbGRteVjNZ5jNiFcQbtnoeBkakFeHBBU4fRk",
  "key42": "LBzqfthrmw6mDLUF1qnEfpQ4tJvSS46w4JpEWZWoqs65fEhbfyicvnE7M8Zbg6LoxEh4w8kpsYhCUT19ZqsgJAH",
  "key43": "28BkRYmedBhRHwtNq78b3gkQct1H83cnL1VP1hoFQHB4oz3cUxDtJZJyWeRFQ96HdPAAgupYJ2di7Tx3uiUP9WPe",
  "key44": "4p3fVnkgaG7G85HAqwcCgxbzSsLDbH7UrfE6Sc8PwVYvXGAjC8yEUx4nc6Pqwi2fYPoKFmA1Y8EpssbZ9RsmBZiW",
  "key45": "5pTqHP8uiLzTZ6NHnLjGqK1q77gcwvdriZWcBKjGqMsP5ANUnkPMRA9X8SjsurBjydQcu1NahVjcCiCkwtZo8dUM",
  "key46": "5d8o2hchPg7uS9Q4j8HzboKhqCgsoDXsBTW5sqiyXKmjeARJhWEkQfmwdGzSs8nTLemHtqPqr66d2feDLoa8oZMj"
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
