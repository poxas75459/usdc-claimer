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
    "2C6Xvnm2PcX1QamwEWLQSGpVCw71cjkW92ykCHzgBMrc44dgbypbZpBQsZViFgk1s35jJZnZmaKcXjC9aKLQSe2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WhMvdW5oDwejZVsY6E1nBKRdUjDJwGxUnsFKsRs6e9jkJ6XW22Zw5D5sTZeAz2Ngrgat42b1BhEizP3aLvPzpbj",
  "key1": "4T8965imjfhM63LTvLg1tydsdTxrctuW1CC8jU9geNpbUdv3iy34Y3ApEEchHhJSaMQoG7zWDUvwocyP6zu9uuQo",
  "key2": "1218Fo3yGrVS8CBMLBbQFu3C4yHTbptontENELGfkqhrLU298rjqqi6vnAz1qoi81btvkeKsTLi35Duoi4w3CuXh",
  "key3": "4MuZWpVUKgdiF3Y5bky4nnN3X7UDocCsGi3fsc1zDYNMixnyMqpNDKbeKvpH1KcnZVX4oU59vrEyapt5QcAtdiLZ",
  "key4": "3QUcSX2eHjisLNUNtex5oiXLBjnrFsSkyx6CdmZjGhWhiy6mK9uL5gUrU4PSLvmoGg9ahFqHyXxKbSMmoUP3Eo8Y",
  "key5": "4Fxkxb1nuE9wdmUc1Rf3BTuiBKLyTNNDoNXZGZhb24U92RcsU8s46exrEEVtN3koZ6yPDWoemwaQfyRwQnF3tSTv",
  "key6": "2CPJFg7CBUR28kuUPfC8GScDrEeyTbKqa5QSwKNLe6k5XMtWKULirn2GtfuPhBiw6Q4voT6LaZfom4J9c3t7LD8y",
  "key7": "5apKWpJnPZteCZ3Y2spdJ1aiWJjG781bPEKvNS8eSy9CuDmdMcTJ8fkDqe73xRXzBSqRaUQcSDrC7uprvb7nbvbg",
  "key8": "Umg1NuTYyc2jZiodxqaXdNK1msNsBa5uCdzij6367U6KGMMEgYqfqaMU1PWysVj6dkcHXxckGHWPNj3bDxT3nDG",
  "key9": "mVgpY72EtLNV7JcdvnYc4qoEY54uRdqqy9khdLfWRLwxn5U5RWtcyfBFDepBHEgyLhaqKVQrvsc98aWNushcfCR",
  "key10": "2UobkkHUcrLWkD873peDQzrcZy8NTFKYGC13kZqUj7JVVHWjctAw2bYiz5hG4bT2qoAfq2GjHwKQjfWoLvBDK45c",
  "key11": "45UUu44uKr4tnoQe1b8KcjqbwrKndJZTyKYBVSRt23WxQYbrAExLPfWsAcn4F5ogoVjaA5ziB2Y1iWvrwaZMXwGv",
  "key12": "5o4cnDoMp6xVXiusdsBzQgjtvkFJZF9Vvyjupb6uGNLycHH6ZR11NZzNZ93Ktjs3YLtTkPBTKSyY9RuUuMtBuDnV",
  "key13": "5JYFW2zZgR4sSxrGvP3ZqngKV5e4SCdzSWadCmqZWY8jYYci4X8KXC2YU6KE4GQjncb2HT9B9iQVqYZ1mkHpYSEG",
  "key14": "dgeBeSZp9EXni6t45AEGB4kXbsBAHAbN4UDyoFSJyEy37WYntQBFC1kEk6rf2XKKDKuBf2hodkdxiVbV4RFxQiw",
  "key15": "66nNeAHhvQnWHqUcSe5RYCTy6pKb2eNJMgMzPbwhvvMScM8QnaHDm9CZ3ykUVWuzUb1H76FjkPfKpLemXyXCcor",
  "key16": "3kyciMUQVaMSCiBJS9hHiybbrRcDwQdPg82qdYNPzaVgwVNred4mXUgRb4KP1EFMk2yG1aHgZnYuFr9YYNwaSoqt",
  "key17": "35K3TnRWLkrgqKAfvLpPzrFuvt2QHz9gFRgebtc8hEnqvvvmk6uAcczY2DPxUk43aFotKpbCLsEgPB6epNsZAovU",
  "key18": "59bmLnLd1qEEDbZzxTNtX7vZdRT6vZoRGXCRGSSP2BwrWR39BaotvjtLSf6CUaBtV3PdA5n3hhuFuPyJ8SwEoQGt",
  "key19": "2bgyo9VSWrmfwBph4D6L8J291gVcVb38tJm8KRhwoB5ytv3D4xCqabzefRq8jqrAcMNn6Cw1Ny59nsSPqodZQhiC",
  "key20": "fx8aUEder2yqzcc3CMzoVnn95cbMW9SzKGD4caZ5fTLVuX2ysKZtiKoGipGs3uPjisVD4a3wNuVCiv5CWqGJzJP",
  "key21": "5xZog6wjpM9EStAf7xNbwFoGdLy3LTRszCremYvcPNzRvZuKxUkQgMAQoo7ihmtrcPgYuHh3RBd1uDyHzn3i2P4U",
  "key22": "eyCETWQaZfTjPyePm51EXyRXaqam3w23QxUxbkCCseFNZj9zzsNy25Ynv63YZHFhR6xo1GfiGcUkmLfZ4BitVmd",
  "key23": "2yBiGsbG2sWefnjr686D8pFnJDAa9tJYVaDtX2nNgQsi2m8x52gx35HHHYtj5jgQQWaSUGUsSeHcmg477Rfc5G8J",
  "key24": "5nnFvVw9fqGnbUxTdjoEr2rUpLDwb2JZN8cV4yTAp8eJ2NCqUBu749DwmvTcXye6961VppjUvjFWF4jggiYVgK3K",
  "key25": "QvRYkCXNUjo6vac8R57nJpaaXpHFvQCDZwk7ibsB9txAjxYw5Qjst62GBfPZ46nEDEvqSWKWwnmxQKFTiN5dK4m",
  "key26": "3Zxx79iSEQqdyLJNjYEeYik4xtcPShy5oqKmxjVT6L8VgRd37DSyBkzzBWhZUNvQUDkxMfS1iJEGM2j5EWZWMHET",
  "key27": "464etbgv9aG7NaHdvTG9hGRUsh968FFP3SE6viVT7U1Rq2wPZojPruWMTxYbpurx1evN3sc74jjUSK1mAn7cegFf",
  "key28": "4eqTsKzXzNZqL7PS1j8DEtaD4nkeZAygdMebcf7mQHEivZgLC7mQLhEiE58FV8wpH12ZFFNzPQipJ8D9icq2ZSzD",
  "key29": "pY2E11cFNdK3NzE5ojjvAgWH7P5NgstDyecGL4FsMav2qvm9rRkkVU1nquGuQPuth1Z785WJaqoejVRNitsJpfX",
  "key30": "21Ch62tBmnxXbcnD3dHayJBm7Fox1gi3Eo5bzZi46zVUg1fHDFMompHcGst3UbXWXFtqeD6Z4AH4LJJeXbuFWTas",
  "key31": "2RodHwEgLqEmreyHw5BREUY4GhChvr8iQjwFNMa7wgRCW1ZDewDTQTW6De3dq2aadVtdjwz3Qt6DVR8Eo9GLNN9o",
  "key32": "JHrgRUWn17K5rXcH6QziwqL1XiTDWxdXR43pqJi9YabCN8x8oedPjVSjntvADjbtUvcEwssK3ComgL8GSRRyV6e",
  "key33": "2x6PTEZuVxM226412s4hUcU3DHfA3Ymgzy46dALDSfjN2bkRa736Gchg8WHWrHUz5V1EdLepRpFPZfhfHbfB71G9",
  "key34": "KiH9KfbbW9QFZU1L9Ni7XvxJYhZtXATP1Je5RfGXJEz6xyKyhi9u7tw9hMDasioZ9WndXUyEhWPVBTz8Vzt4syY",
  "key35": "YWYwoLbCPjQGa9a45Lh1YPcqioyooH6cGwsaZT5kDC8wgCT2zAhMMTZUhLnLUL7ULFK4SDaNxFzkgQWC4i2hKvZ",
  "key36": "274xZeoXBr3JSY4AtGZ2JCiTwNBXYkjtgP64fjwFXiCZZykLKRJCcp82EhfUUUbNJKUrh48gbPjNFdbKaFfN4XqR",
  "key37": "39zrDk5dSkLbPuXh1AyLNQukRJYWMBYcy99GDHyTzf6r11bQxnhBgWe1XcbcpzUoBiBsdYE2YzeXvMjomKVz9WZm",
  "key38": "rQHTokDs6mTKMqzSgDf6aCWfrt3me2jucbW5aX1SNkw6LSrjw9owZ4QzVBDasns49mr3Tx5YKHU4SeoaQcQLQ8e",
  "key39": "2wvVbxZNWEkW3huUYwLPmRaa23Ab2c2X1JRHcfZrMYDHFVJzEu2oV6BTB6dvbA8EeTe9LuqRYLNugrpB368gwGPH",
  "key40": "5CmeDL9EJDGxuojGaw61e9g1R48dT5rK7hwy7YCz3kah7f7kjoZ59VJckv5VLgFH9RXaSLuSMJTayMMPxPyzT4Vg",
  "key41": "5WseGBrCACHdexGoGNBAZPh8mFfVkeRDtaXzQaFbuKmBcXSKAxhvH54zwHpArMJPgevkosg318KozovZz2Zyrn8P",
  "key42": "25nbPo1MqeGstKHcFAdy3jhD7cvNxFxgRxJyxivYuoqoMTEtQ2fR3VKkbAx2k7DpevVTXz4KGmy12GpYb2MK1v9J",
  "key43": "62BsPPz8bgRCVn623Cv5vTZv5NYEeEtm11i5TzX9LpPWNnRbtFGxW4nKKz2xaU7UXW9sAyuidQqZh3t6Kuk2Anv7",
  "key44": "42qGAh8j5EJfachGXiGmVi4fgiCA2R1Sb41Lw31KXYRmAuPjbw1zjJcBDMXp7XBdoWFdeW7yrfGtwVj98aYbw7bZ"
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
