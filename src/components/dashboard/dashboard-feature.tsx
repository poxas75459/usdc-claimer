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
    "8adcbg8SFnj1VuKjxqWAAq8MZdhakjRjVeVkt6zXFGGNQH3EkQfFyKjAtep51NuU4X2sxwDcjPPRjj2fqCWCfxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jUusJtcT5CD65aFMPwE8mBk5VfoAztmL4aD8q6g3Nd8kVNM4PZWUHkiBkd72jxUWzsgriWDxWEgD7JhwVV6FQEa",
  "key1": "66rQr8Y9goB13msnrVSyh36ciVvhDqbtsjLaCce1ekjavKKT3T4MNHPF8jg1KtPcckyPUZnHpHfanc7uLDHxUKuz",
  "key2": "5trR5oPKKMPfK9F12cPR8Z6cG9Af8bGWpGLvZX5MYuW7nPT1VT5ioqo3ALQpk8ru3LPQQj1vNmTHYXYjMR4qDiDx",
  "key3": "26exc4DqvuUPTEr83CGVV3YzSRLjYJvyiVYcQpuYbuhKtft69DyYMJeVTyWzPjw8BDjXgsfgn5n4cPDm9gs5G9ih",
  "key4": "349xAbwDrMcHuTnDX7SzWJYezbAkTYhjqHND7U6dDVA7xXZoRN9StU73wE7RssTJenUCKCuPJSbr8iAr3AxRBxiR",
  "key5": "4wqTD6Z8JqYrV9JoPob5zvERvZWwNJ9xwZJZauUQDtnWJ8LdC8wzidfS2xx9MpirnK9MUZHF3ds6SgYLAKduHM7i",
  "key6": "5Db9BQafLTbfQXDqUz9FRdvDJwyLFAeP3x4zRuKNMStgFHVANBX9NHQyCe9bEovQtKLWwxAqHF3LSyvCaj9W7tk2",
  "key7": "52hABrrejzqGQdi8LAb8oN37NBwGM4A6LEKzMbpDw4GUKe8VwyYDUhiGn2xQpzed5oJRr5rJArNrz19zjsygi2RC",
  "key8": "51frBr3YwcAZXxTpRqS5xx9ot328jZvbADPHcCQTHAsS7gTC1ur7mbY9QP35qbLvPHSaX4KNhgmBRivdjpU5NUkA",
  "key9": "JTGrskhRcUYUAoueuysxArb5G3vQhWWFodg2xe5PEjAk9kfhBS3NokLjnBKPgJAwCJtS6iYddAHBFm6NT3Q3MWB",
  "key10": "2HFNNK868X2ua8MyvTLJXESwfDvngUMikK2B1m2SiqbCuUaTwXmkbyMy9z1557pVrcD5eiPPAtmb4gvZB8BkNxkw",
  "key11": "27WJB75mV6EJp2BoSzkMN7vpTdsASbpyG2kbRFNgSWbn258dxJxeePx8a9nPJKCX7rhRHFzJUjikb6N8De4n4TTT",
  "key12": "3gaMP56a3A55Mh2t1zW2sCVoGSjW3PDj4tCsYZPQe5ZWiE5EAxf7FkEYHDTjrEgf6haTx7Tikwr2gmhUZyzNT3LD",
  "key13": "2NkBBQQrgAGNpTp8bF3yG5FGQvomQ8GU68DyTkWB1qp2QwprotrN2BZrKykYrF9nj5hn54E31Eq9fqTha5YZUW1K",
  "key14": "kcxo3DW1AcEdkfjgtWN5BUDCiZgiE3vPh1oAvjueK19Tj5YQeT1xogViuFmXDZC996LntyVJWNhgDtzgLE2yEaN",
  "key15": "4FnwNAGaUgxjTazpdXjatu2UwxLd3ZBWfQwVeH6wE1h3knny4DbCqLScUfBrsho2PEmLzLW83ZFdhUZLfdcREPde",
  "key16": "2aWch4mpuwLuaVEXDpboodzxf4vtRfPD2Bmj7ZdZRs7GSJwMriABLM8GLtsUFrwwivRrHmuX1gFpur4WZmt12YTU",
  "key17": "MCwtJ98YgaC3YgNGmQAcZnVEKg7uAYFqnFNgDZw4R8zNmEYjhiKHuukMmVytoWDETeLzcxeZmtS4YToXbTDfksd",
  "key18": "63Ec4NYwEz9zr4cUbVGtEgcYrZyPnijhwNMtzu7CCCgXG1LU1QgMWfaTgZ4JTsPhU7e7BwemHLkpmmUQWWfAQs4z",
  "key19": "5PYvAeJq44zmDFB6qGQptgNQo2N1mp8Y9d3kNvMMvULH6MGdsAk7EwWeHe6ZRhiufitzXj74Mi5F3g94tUjBqkh7",
  "key20": "3eGB6XJuSWyekQQPiM28oZrui413ULkHyyvTLshWJYXjBXtrAbpkBBPZJFWigy5C7xCnDt3vFravKCYjLxbf9vto",
  "key21": "3KhyMy8799kYf8xXzDJbdJhnwwGTDfZJf6m4zYppFBwfVjQkRpNr37V2vQVkNGPxJQWfLD9iMSvnkqp7uV8TGRHN",
  "key22": "4fV1QiwUddp8tiudrD2m6ezjYYA1fPAVhRcuhg9TitTNgfqDYd3gYUJzMxViwF7AeDW2ityxMqQbZSacFFJz4VvR",
  "key23": "on46P6ZxfPrCKUFRPz2xUYRr2iiBEtXmTjDSN7UPcqAxnHqxugP9PW9FxMAqMNeQTgsZRcPQvwgvGZYdJTdzSPE",
  "key24": "m2D4nwM3WYz2KKJtX7Gv7LkpsVC1QD8C2QJ3Pnkd8arEK6E9cSmiamqPr2dLK5VzE7SkHwY21dyiMsWqw9aWYKr",
  "key25": "3WPbmfBgrf5ez11boE6Y1AwnxKvk5mddh5Y8xVJUZGGuaZA8VGcwZApLJNbvoczJttGuGLXJxVNxcBKkzoQZ9p5j",
  "key26": "Znhb6BF5Z4mkRdiR6SmeCnbPuk1F9ZFJ7w6VnXRjA4oCzRC4gh8iPzMhbak7aH2ajRAYQ8zpNFeHzQ5gGBDhXgV",
  "key27": "4MshGituiVnWmBAfQNv2YptSWZJcvdtwXtEPZqAzXtRMdWSbt8LUJfjA3aDMWrEyd6ExRG9qTTo9Fbe6nCPS4aMg",
  "key28": "3SHkW3xsWrQpmVsHwLKfJKa1JaDde19NPuN6rHAi7GzM6dvK5JzT8s8rasmX52TZ2C1p6uPTDQdj7TernwTCraFK",
  "key29": "2846sZAYFPaUwPtfoGaXTdmEqTeTHF1iCtuWhU33gpLjr7rjyENkZZPnSRfPDzg8u8qY6d28JWHzddAKAH9XfJqt",
  "key30": "2EyCz8KMi4znFodZZhBs24Rgb1gYXujeBj7kx8SWUFdRqe5E3WyPvhL5mUeuBv3yAzga7Vx3N17JhLh2DBcz7cwn",
  "key31": "4au26L2irhEN84nswV21s7sBycDgnTYCt9aV76NBKb1zSL3tp7WgSUqs3suFVwN6AUgvjB9DyzZqK37CV5Xvc8NV"
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
