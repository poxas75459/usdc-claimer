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
    "YM1t95vHGpJGUBQvAqUhhnKvFNJKB14rNw2Kit6acN4PxUk1XagTo7BW3EannedjGJP3YbKvFRUP33uH82PvTHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbxHeEv2UD1vMBFDLdT6Ci5KPfREDtFaajqVHZ3eAVhE7stWFjERFTk1aDR2u4TS2CJ9jdKxtiyhWYvSLTmKe1A",
  "key1": "2HQTWNwgnzvo8VB7zpz2UUK66ENCt52zr8aJAeD9efT56cWzTVBcm9tmX5dSvXyPH9T9RMsMPgGnq95mHPyB9AxV",
  "key2": "mbZd8FW3bzxGUa9aKHVxfFUrUK47dYJKV3GVekzKZp6ZtMwMKfVXEMzHq9Chqq2CkBf2nXmHxxqf1NzVzA4J23M",
  "key3": "4R7KXqvHB9GDKNnyMqUeYV2DjBHVRw3GzWyEUPRDLDE4KqrEfK3MMnFLbPdCM2v2i3zbJv6YnbPTZBAXEN7JKqxU",
  "key4": "5U96V6Rsp7tAxLFqAFz5wC3CbFoejd7SsQPh3kqhg11KGAVBXKbmMR7CuBRe9WYvzogHEH7ptHJ9ze72x3cs5Ezf",
  "key5": "NUHUcqtpeJj8ZNx5CjgQ94q4bVaNZcUWSnin2HLrcEqvs9atYaMJPP9VjGzsxw4AJLzzXCH4XRLBcChPwyyt1oN",
  "key6": "21rM5R8pfpGkvzqNQJV2WGez4YjPuVNJyZrEpBuRahvaVpzm3SWhYkWKTitNqb1P3rRko5S4Zs71JMFuYo9XjVop",
  "key7": "2WFiVgxedEwhTJ1SHKPEdpxoTe8DZNwzaUrdwsdPp2NQN2Y2Ajm1YyYtP7vSh7oFFM7GK1Ge3EnQhJQ6syyoZtoN",
  "key8": "4Z26h3bMurGVHRnE3BcXQpCQKWWrRPut5Q5gcJzjyB1XEnGwegs8M1EiMA2JvPpQNSPgFKxatqDPvtkw9sGBgxtD",
  "key9": "3EeY79A6pApCSjpBTJK9wXH6RwobWN3qRZUu8poJhrnkeVC93H4QMV6nVgQZhoX8THo8dtvZFciEXvABmRUUNJJ5",
  "key10": "4ATy7jcWkKDH2MU1iPQbLqGKX9H3QVGT55Qt2hUZD4xchsvRT1eco3ViL7n4Yjm3duGEndAAwxBuEj34XFxPrauy",
  "key11": "dwSzGmV7wKCULkfH66zsCWz72gf4QQoDUkeRwJun3oHtWG6Z4XoEqyDhpxPFvYWZ6rMY52UMCqn65pUUVQDM6mF",
  "key12": "2cN4Cu1sd9DHSkYzXNGfEkh7sfANbz3qDUcdFceVHVB8JJtD4r2AwfnF4sskxUcHWAFndGSAbA6tbhrqGh4Pq2fH",
  "key13": "4h7RPw3ffDBGDPhZgYoGbbpvtTvFAcqjPKsQftbnnynf7fHS5kvstx3UefBAFnBLkNN68tUhYriJ5nAzJKHZuSSv",
  "key14": "3WTxizxmK34reb9wBE5aWYb7qydvktWre1xpZS8GxyJ9DbNdSVvJHBCdNLis6mfK8v1X9z6w7deSuo9TfW1ogkBv",
  "key15": "3g2Pq1dUEE9piDvgczWz36sdHdR3gQjTcpvMtLYreJpnU6TPWrzeqCu4Xu1UkqtXouqERwo9a8Azy3M7cwAVy4vW",
  "key16": "4K32aq3ek6kwsVFofHbMbtxhyiWg5YHRLgZUHXh3LbWE1yQb844GuV9TSb4ig77TrwdB15W4BbzWMCei6EYvAFCZ",
  "key17": "4sM98GJ7CLsUqWS2PgAWxVwsS9fhtUMUopsnznX1krEvbzou7FvcB7TNey82psYaTUj2nHrZBg86Ge8DP5YQc8UC",
  "key18": "2oY5XJ6k3qte9ebV8ugfHXZgKTb4yzWRQhAj6dTrPBbwgre842BhHAhLVZ2XMVAz3iwEfHHohPRWB9MCFqpWKLwD",
  "key19": "27K8Ba6A8ymwmPJ1ZfDG13FiYPCQtTrLPxZiaNbzBrMMfveraNmp76JMYYUTtA66zuuvYLS13qHWeYE2NdYoGyKD",
  "key20": "5afGyqSKioHUJFVJFsARrGDwowzXUxUoALpEGG4nH4kZU9zYKtcK2mf4baL6xrojUB5f3ZTJXPZfVNPBsF8RqVfZ",
  "key21": "5YVVKRnzmAr3RgzoaGjp3e5HzbA96wy58P6e9JRJSyjM946tYLXepNYqtvFAo7DJvNoBA3uneUnVPBBFJWEwxaNx",
  "key22": "3gtXQUEVHqr13vgAo25e5EUWbHEL3zcnJJd6i24nxybY1ekrFFopii9pPRCLbRifa2FbnSdGhcX2s4ZnouX7oz1e",
  "key23": "vugaj48hXdHnV23TdSpjgA1H799h3LgX6BkYNzYUtGsZQqGvRmRzh3fZ4CDuydHmXCnCwCiR7cDuLEr3Dfb8mZi",
  "key24": "2DB2V2kYoFQvT45RQ9bQyGhomLGEx5kKm9mzewwuxCJQa6hF162HNJxiFsydpD6ijYejir1v1eD1i5TxCy1Njez6",
  "key25": "2QrHqHy8X3FQxyQXd7NsgiPoLV9XnxAssC9sXJNbLfUA3bSyw1SEY7JUHY1UQHdJe3LopfsMBfzRTCjEx6hgxSo6",
  "key26": "2nLNJRPqgLq2P75WXdofJUW4ce6uc8mz8zapdYA8CoLJcYPr51vCzosUMK5HStV28nkfF9DYuSho3kzRnX1GpJEj",
  "key27": "2ji6cfit3ZxVKPTGacF5aCA63E4py1YM7NDrRZhyEcQDackCcsenK5pCMLTF4VXqCqj8HsPSXyNb7kT9JMbpQ9yX",
  "key28": "37tmosTtysyohCVP7ZwfsNp7tF5eUhuiPcChQqJ4Mw5p6RmWLL5GK1xisxWqmDRdmsepc2aKsspH3MJ5bdUMa8Wa",
  "key29": "4bYa9SCUhAC4DZm5SATwDFSxmGcgd4tbiYr4nBnmyydT4kW3pRh7X93iCrYWoLgnrQ22aYhXSYmSJNy4DpT6821J",
  "key30": "4RietvG6YkNj3rZE5YRTUBkjGULoGdxUsBhxekChjH9AcwE4LqdPhSkpvEVDkctuNt79cAKdMWUmZ4N2VE5JKsRF",
  "key31": "pqpbPkeyWdwTXMKKrHQVhcqYiwQhWuXwLAVbyvMQrk2ovRF1bynYWPKGjoKEL6W8Q3hc7vThxT64NQ7oNaVCGvy",
  "key32": "1UjtMhMNBZUKdu7QC3V5FYhT5nw54bUwfTj2KtGa7zoZgmTDdUmovXqU6oxH2c2UFPPzFGhbFEbsHy8qmFEtQAb",
  "key33": "2DjGZEgqcXdWujpHSjWPiyRHGh2k4JupRKiL6aPWsuU62mtzQ8m6tsAAKi2KGMiMn3Mvg4AQT6iSz5MrwRPmgbQ3",
  "key34": "VjsjnVvx1cybY3tsx4eC2TYCZUUQLHpPSqVseJ5CsCkvYhXJfLUkFqFPFn6DPBgFUGemiufL7hgX63ZZo3khEh4",
  "key35": "4raFrLVvEYgbRB6pSVvxFPnrNTYsAxpk4dbBu2ERmCCYxZrGnk8UUPdgPJHPs6XCgqFAgtrkbzumbEZLt27hTYTm",
  "key36": "2fCovpao5okB4TCpVFhNCjt5M5843PLbT7jJ4LipCk2ypJv3jnp7qJeCMMpeKybLoC1Rei7C3CTYsQLiozg7U5bG",
  "key37": "GHi5DgD42Wyw6NtrYo4V2mQKyN8zAN7qToXHSyEXn4X8HgvqLecQ8mBDJDFFZtuUJWsnbJDYjpKTP2QxWa2zmEZ",
  "key38": "5X2G3L9Vw6DjBzTYe1CGJp9CW1SdvA2orfkR9itH65f24ejjonFT4g2VnopAHA3aMUz2RXiW4RLGSAdUHSyvooVF",
  "key39": "66FYU1L8h8hXposvzoZxsfDZ4Wnka5Bk1xNuJ8ydycRTL26SCcnZyJgsyKpxzsWxzqWzZociVUsGhVBPqoF3iioQ",
  "key40": "D98JSV31ETHjZfnrAA9nVNZM7Lzsi7WV2V3vTJCtMhAmjsiZGbVfK5YhoAwXmq5ayy3KtXT68iwghY5719xEHte",
  "key41": "31hhJDTY235Y88hH1DdKqmCgMoBtMw4ahtZQ1o91Dg5TwHLeRajsdboNW4kfo5ck411maXMJLjLmfdkK6kUzt5Tr",
  "key42": "5X89EiqZhktKJAAqcMHqwty9CgSsiAC8teW7xuziKuoem3aS7mSjb2FrVbVgdc1RnCE4H7TGHhRXFkFei5yd4JJQ"
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
