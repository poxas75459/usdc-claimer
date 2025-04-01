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
    "2SVmyueEXRySjq7yCBTiNphWX6CNsb78cUh5FX5qjJ44Sp9KRTkHcqhYxEAU3zMG7J7q9kNZgKsdLWLqooWKtUkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bqw3me7suhqXZQ3bgqDcuV3Hj67yejxdJqEy27YroJqPAdTQozVSHUNx7rS3R2gze9jPtM9peyPBwj7Zgh2D2Kv",
  "key1": "3mKvUYBaZi7fj4sVwSJXfU7uDUWGt8ehKBwK5rZSwWdoV7ttUwqiPv2i5fNcSN75EnHawaNdoErAH8zcdyVM1wpi",
  "key2": "4VAghZAUoeQEXFcM5p3mRBY7Q5VEfFveuo61TpLvmLQGRc2ThNiTxTdpx5RS9nGQzX8hqdKGcJ81nqsSF2Mikdvy",
  "key3": "2LuJeKv73RrGCaNRbJtPnpWUeDUvYfLWmAjfVp4x8ZAK8tSYDtj4o98CAMEtEC545PYKSjcZUviA1BKSuP68GvsT",
  "key4": "3z7syBYuycuURw74LxVJUpusvpt3eRdBMLfhBtL2EXaLCMZsbmVH4PJc4oz4Dqou6qFfyCFp2B9bauCYBnZRSoLm",
  "key5": "RYPuQz1knwahD15A416wEouBtWYCFDpKWqjBigabtggqgfjQasrxBQznQrJPJe2scyige1KDRFY9FNTyf7NGHzp",
  "key6": "4Bp49EuZe9BorFCK8DcPA1Gtp4VnyKZJjkgHCAkqMYdrJkg8Q8FPwXdt8MDiLm86X742e43xdYBU76A3mr1CtNau",
  "key7": "29BDypA516tb6s5ekgcrD55trNpBPsCnqqXkxXH1c6xzLa49BGbN6zHw8QTehanhURdYQNt5M5iy5TfBUjNtp5FH",
  "key8": "26uJjZqNTBp7jfKXDdEW2tj1oixhzthWSiBU4U6oamA444VGadKfDen1r9yyzXeY3KdAxstquzVuSpq24cLNoWV6",
  "key9": "4REtChUYkD4mrHNbzi22Khz4ftZdPhReKQXKjLJM5v8QXUysQFSRpessCHmbEoEHYMU4nsSuwGybgnHFXpZkVrb9",
  "key10": "oDCuuzTr7JbxYjHMLhHtFBbjTN4ZYLTzdfBr9P2gDeez7SF4PT5zbZzhqgJVBETs8od9ZCh4jrD7zZVG4H1neth",
  "key11": "T87pnYVzkb7MvZNdFH1qD3W3X9y6hsEvpgBZY4uR2YAt3eAM9H96maMhJekLvjFkhmz6SZScRXdx4Txoxmm59TX",
  "key12": "h5Z3P5wQ76v5YCC6DGQnKEj8HYTg3b61BgVDgJSgi9vBHg5XuCZWR5Mq5JJjdgwpPY73WFLFs9LZbbCDAZWpLuB",
  "key13": "48svAjfdPeNfGw7xnQqqcTUmS2EbxBuzj3jUm5Cejn8f8coqwdUbVvS4WqgjrD2XaaLn9qDnCeZiTAKWwD9ERHXS",
  "key14": "2iqpAjRkxM6jWbBs4x5N9BMKuPC2civ5RbmjrS5FKEZjJTFsejxCX797ct6ZPyEhmxgwZUEtDagyjFygQNnuTTcN",
  "key15": "4oAYfDBTXaCUGxzMwUNAbiCoF75okRB8Yyqk37G89cUKc8pGsMFyM1DQ13KiPB1iuTFB7cAisrvxkB9Z3QTWjxji",
  "key16": "3ZmcE2WspZpeC7rfYWNcG5GcLJpeU9e8mjTenH7acBvsfJhnv2a29A7Jg5YTU4hSyPuKySv2GyHGenT981Bu7yf2",
  "key17": "66wbWE32uqQRpNY1QDqzgafcvsubQrrFz577ctwjt3h78wbg5FSPxSksV4Dy5VD3HVtgSNatWYLYW59KBBEGnaY6",
  "key18": "5ZaU4Q66vbdCMfX9UonGLTH6J9pfQnR5mtBm8JshyNcUz5akUn1vSpy2ZrpAu9EGtvFXpPAjCUEK58SNgcT9PXAp",
  "key19": "WywMmNC2Nap726CSgVcq7bivm8QykutxJr9cdv9m2ANyyLmm9kK5AkwNFeMFZF78LtEz1sy3ZhF8vjP7WdnUqPM",
  "key20": "2rCq1xB6MH3uuoBfovEC3vuZCN55s19tcwU6H56RB3EuFjQDdE3d3Nsg2FXwc9FcogCaqWeF521JAoPXN2CcUxkV",
  "key21": "3srtqtmg88v4LQPdoSjXwMvbLuBFR8RnS2eJFAp32ysvQmtwhaa8r8DDdKfcg9jfVTUhTEwPXQjMzDmrEUgnoANT",
  "key22": "YY9shoaC76wzLRpuwzcUAKY2T2h8XW7prMR9gsua5ZP4M8M5zc3dgnkCQoSWcjdBwasDZbfe3m7ykq951iueZiu",
  "key23": "41N9uyGacDJVXBp7UoB4sGve2pSLQVVXnJL1NqJ1GcsExiKjHg58hV2cmapHjwBRQUiLtTxSCQRSUhnDw6kJ85zE",
  "key24": "6xCBomv6AmQh3rTViXzPBU7MEQ35atmhkeQ8DzaK7GBdootLNYs4AAXTDvLGVFcCmqAqtGUz6opFnZcrkPuV7hF",
  "key25": "4gGBPdY7j7EtyRWAWpcCHnMdbn3WvXzSQskUBxfB8qJRwWECz76mLsNVTpiehUrrHe9TqcDDdhqdMhJDijeWjsYB",
  "key26": "4wG4qmNfoFAi7Z3y6Zr8c8FQtqRvy9Ft9pDfN5TBXtgoC2LcYJfAyGeX843nJCKFqMLmCgGhbHsJNrjbwK8emBmJ",
  "key27": "43yHy5vWKW6dZy8n3Z8TSsbiYBsxULP3rpCnkYYraaLgX5R2JXxoPACFiVYNfDGdeesNpE2TuApCYFAdtkmQpArb",
  "key28": "c3BZBrqqMWY2AjYwF4JqexFWLmShauzE3Ukam8QHJ7jCmwQFoEiMXWq5gCCiPcxtGuiWmeM9qzq6Q6WGUQE8jZX",
  "key29": "67TbVaFRVQ6fAjJNonrsKqvJr93FichsDaqf9mXHpc5Lfijvpmb7dWouvzcB8EnMfjxRCgp1rh5MNchzjKVNRiP4",
  "key30": "4YPF7m378zosJvFNsgqUzRZh8YVN8VitfvkSKeixTDbqZEKYb8Er8Jr4VZ3YKmdSjaBsRqK5erni5g9bSvgGK3cS"
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
