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
    "4k7kwdQz7Nu9yADhTC2qpjkAk1E2BWfgoGkEUwnn4aDGbDDN7bzNfSfGUpj6YYUYDhCRiie8z32Dvfj1oyfA4PWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDwNPLpF2i3iseCLtCpyaSNsRxhVkbF7xkzuz4FQYE5kxSFVeuqutVK9arF369wyt3VvnGeaLMkJiA9SHAghtdk",
  "key1": "5576RvSq2zoofu8FCRZPfahKYX3dYkVzREkhdC9iHQWXJd9bShULsayjSbgVc6gGQxAjQJmk2JKZ2Hy4T8eCNv9w",
  "key2": "4WXwo96oaDGpJW854nPcJqTJDDdBTeeRdXseQtjB5Yw7DXfz6yJap3V3EGfVLr3nHb5rGEt2VHp9eLGLfKzw58CJ",
  "key3": "4nwKYhzSESJneUC8ELC6pd6WoWoj5RD6rUrw5Zb4JMq1n3LHbEZBnyfHqLeT8LyBCbHyyPRKgvXsri3mM7qwCt8Y",
  "key4": "wWv8CdQUFgatMgFjgaXPtdT1XiUnT6m5xG27Q7VWGDUK4Gzi8pUgC9A6uF2GZivqkABwMVSjr5x7n6S8JyfSi1r",
  "key5": "LJqKMjh4Y2SrQn9PWTu6ywoZ9dj7SqTo3YpDgoZG1b9rKhwVwuDGHBUnxEz7eqL3MzWZWMJmDUT4zkowVKUmUhi",
  "key6": "5M93TfMFkF3rKcESXcmn71E62xkxCDLSiZbsCaMQjy89VTYa1XZkyBeW2JJPcGf4qdhZ6xmZ5DNNBM34a9X6oTmR",
  "key7": "3FedZjtCjNvEUkC91iC3dzkXaGYf7uaP76Rm8PPHd9ANbMy1Uadw79aCsdvuGDUYsVRd5aQF1Mgot6c8CxAW66xZ",
  "key8": "46iMSmrXswuj1rmmPo5NxTbc5tjjz82QW5egQRj4NGAkKj4EJV3FAovXDvugVpGJ7K48nQhsrAHKB9Jg5yx1NLBT",
  "key9": "5AggmZsEfMmFsDiyXio9n2ms4dLkgzkrK3cJZya3DNaefQN5sVGufAuZET2o6SjUaQU6YujDwdCuaSjahmkWWC5s",
  "key10": "3EMoAWcoU7Df6KatkAxLiDu9RZeuCTiZmUtcmAr3ZuyWX2jA2iKAyuC1mXUo6dLKWb9SaGLDQLaXNC89u9donRbo",
  "key11": "SQSYYyZbNQ6wUt6P5b1mLAGhqh4QjiGUMwHsgc1gAjRnABfFAXisHnrEtm1pLYfSxtuDSGiVeh6tNLsj7fvM8cG",
  "key12": "21n3xeHoZpVrrgGZjyhhfti1P3UKqoQHpRTvrw162MJpkY16h8jCBe5vn8dp9adM7kixc8heA95o9k26cEaYVxJq",
  "key13": "N6Ysc2nEoZCK2vbj2GmwC3Cdq44SbermxdBgaWZAfVuKcWU2zP3yNHbtkFs23A1aoLi1ysSjRWvrd5HD7LsJ6Cc",
  "key14": "4brEBn6ZACPD5qJ9fEen9j1As643WUJMVVETSEr34ntmazh9e6WUUbqKisQJs6nwBZGqPuW2nRZm2sLWRD6XZ1Yg",
  "key15": "wKwHqkz9KzXDdYP6AdoMPfdGYbejT53mwfGPDsmRYbmMpGdK7UPB3YiGy91ParKeNAYDVgPVwwKx7pDte5KmMto",
  "key16": "3Zc3JqnFX2KeHSDdesJn6TSbp9jdTebie5Bc3PkuwaA6ywbzAypi43H5QMABD9cQLTPRttwrP3aD6g4CqWGUygxL",
  "key17": "LgTpfhQfaitdnQxK7wwdNCUVyPBeieHFrmpVA4h2b3dG2nkSn6HbrFtDBP4jvKfNMECYbWrdJeVGnD251jPaXjH",
  "key18": "AJXundZBjtPQZ7k3JSjr9h9cnqHMk6kWFoD71QUsxaXfy2hLdUELP6ZhiUJUa6EYjM3626tBhKs8pN2mYBHBqpt",
  "key19": "2Vnixoos4J5SUWGgb4tTbQ1x1bm2fZ34mQiBG2ZV5xfttR8ap3kCu3Yu4HkybEBLS6iZYMnk6GipCTTCg88ZPbHy",
  "key20": "2P2FsWEdRq7cMcrV5PJBhHyUDtW8jBSBK8MbhHFnswhmxhTYat9CzAzyUsj8PVctUQzsZnEE3Z6YF7JhHLfn5yo9",
  "key21": "5wA6E4jRKBdmtrmEFdPnRM4rbJCVAg9CqviBLX8oqz3rjhk8MxT2c3t4n1iXMEvyu7d56rkx15t2zyJsEbwLrwH6",
  "key22": "2u8gmWWV8CotNsCu4m4gt7iEhcfJ3ZcGzhdk8BjHsSsKuThmzWaidHpsXz4VFWmZhhTbUTMY9vUYGcPcpwPZcFW9",
  "key23": "4p3bJxp3BPiY7yRwzhAUY1E3ScZvXThjcMwziFQYTjpvEgwnooyx6gDr2XiDUdXqqaY3p9xxKa84Ch5NFb5H6rNx",
  "key24": "HkzMDyBDCh4659y7rq6Zuv6qoURZYwZmHgrMvRYFwZxv7HeMBrF7poaCdrae6FVm3CsU4XUi2XKtRp98J4je8q9",
  "key25": "4uUieDPLVmUtqNdRACriMmhxCJQCeE5s8KEZdotZW3wc4YoSoqDHFQr38rrQw8b8DMbu7ApVEkuskp88G5ssZGuh",
  "key26": "34fjLRuwv8QiRpRvc9PQ6Hw2QKT9otTsg227TSmXDkWR7CyARTAMcHnC6MSJMYaoPub71VdXvP7uKkc6peEyxjrM",
  "key27": "WR12HdiDRVj2GBHUqj55wa5WxkpE88W293aHfLxi1MhdhWxKBn5FsrT1Vzt7MxNumMZkVoYZUvmdPwdy2V2RXgK",
  "key28": "54o6RMVuXnLW73iGKUYGwHcryT9Rbuto8da7RutJ1CuN3voS5MiQGf3iqFVYSsjHNj3xPgQ1SNvbo4uufLU3NQHN",
  "key29": "2GCYikqzsEYcM3nDuNC3nfZA9sZnDZ5dfDE3EvaLaXnbydQ2vz4FHUuDdtQKNHWNTWGLfehrk7FbQ3yevq7iDQCN",
  "key30": "5f1RGwkHTdqqvF7iAkJoRzN8ZvN5AK5wpA5sbbvpyu29i5cmY6EQd6UWKZ4bC4aAPTLbwLs2VVJ4AFBfgrZdZCK3",
  "key31": "3J3kCksibAS7R1M4axe9ZUEDtkWqDQBbRAWRFBJnGrF7NZpmVdTuvYCvdBHNqvA5odcqP2fzdGGqLKh4vUp7EgZy",
  "key32": "2sP5VyA7AZPvy29SZi4zRWmXJ7NLBf7jTssaV3FDJCcWjWFWX2QRBRCcT1b85M2iYG3KhrduYqEmmePg1sKZhcue",
  "key33": "erWA7FHtrKpUWy63pgPyGbrufD5rH5JSWVFYWKEoJKALfrpJmbYHeXrTXhxZ7Q4KBjzSYxrdMZRSg4G4E2iLNAj",
  "key34": "4skAZZJiR8BKPe9wN6NrU72DvpXu6ZGETRSiG6wdjtCTxKv2dnZ8fF5R7QnFEYicxZcgfUukVf2YhrMQL51i6h76",
  "key35": "3YvvAqXSrgwcG5wjiTCdiPNWEWDXuZRf7yfB4bsHLQxDrTU7Nmr7Hi4SsmttXMfBFq2uujJTWuXeQVPox7nrw4on",
  "key36": "57uBRcKWN8P3y8FdreyQ1G7AfgNvu2sa7GdB2h2dkZ1NMmjHGBMyUNBNJ6s97tm7o8WzkA35q7FEHXLN6VakujWZ",
  "key37": "3YeNm1W7wiYFxB4Ax2QMeLcaGyU87DQDMECABkLKKTp1843TYixeWbCgKjv3xyKnfke7QSVLXyms4PTYFkQ44J4C",
  "key38": "dwBQxKSwBaopKEcbB4U3ogWTF1atSivonkrxvG4FV5bexossjkUFetVV1QXsJi7QPGPSKCopocrQ4hGeDejvZM1"
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
