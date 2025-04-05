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
    "3T3X3QkE8jNZKUMiVRAT1qyoxtZywXcA1uHboDmJMnsgbxsbRJcEhk39eRH4MFPLANphUcK3y6zZMidqWrT5A1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bAnWui6vFxMNjpvUqKfekCadFRTKWD88axwFgqxGmiFTrWVZGNgb2Z1v1UzP5WPaMhGuqg9AL9VfitimJk1VKsk",
  "key1": "3MZa2ogUU7ogxfAND5W2MdMTRfTJ1WBrzNhvqwMvhpn9FAwd73TeWYPecdqGSF6Q2JSVycoBv26YZtkhTL7kiax8",
  "key2": "5K2dA4L6kbZUujUruKfJxfoQt6ECSqBUaT17V5UycFrLiu5NAhaFyHUTvz8RXovN763RMqjAvusThuajrULm6iMY",
  "key3": "565UmEzYCJmN14MctPws7EUB95AbVJt9VXZV3fcRSwLkcFi1HhWrSxBEdLNJ83thTY3ksDzhrovQFf9cSo8kAHEH",
  "key4": "3w1qoFaZJ84zTu2BGRbr8Txzr7xuxBL9quA9eYp55VQWJxSkMuE9Y9BMAttBxt7qUNwtzgSj7GMh1moDfGBSwath",
  "key5": "2i39XKFMNBCZvNYvkqKPDrAHekzz89Uo2SR8Q6kCnrZvTrHceG4yuSWGMrSrif6Pucm7jMVXZSrHc1jxeRtFAqfn",
  "key6": "5jGhArEbRRP8CxL7GJ9Jvm6VeG5AygERbNPTKB8S7Vu6pizezqNU7gvQrNyFhNErVFSqiNoDSgrEfieG5Eokc47T",
  "key7": "4Q4ghRHaB8VUcTkDLfSggUp7uWq6Q4WBTfDRxSKzr5bXuQntgSSnL9MqKBosX4xHNW77pUbhFJWBmp65KT6V7wAj",
  "key8": "43gxyfgAcsgnCqbkZK7mHRzU2AriGmjh4ViisFDY47rtgcg1B4ZEUQa7zdCAVPdMjn4bsxkQ3Vgt8dGPP1H2qJmR",
  "key9": "27sNdUebtT7R5gtfaAgaCVA3sGuu4Yk2vdwXub3fhTDbcL5raVncYzkzpWDq2FHhQa2TN8FYWuDu7BdnZ81H4Pxh",
  "key10": "3DHHPPAJngbWerURX3QRs7csjt6AwDLiBtF4SqWE7LZtcdtidcmWZ5sABZyZLnMkngc38JhgvUdAemqPs7avDwom",
  "key11": "48KL5BzAgAMXiD3bLTbseS6ByddJUfkcd6QTeVTNxtPhQG19vjiFEFyQEbcrNH49xPaL2LGkAuMztxjtBfQPM4Ri",
  "key12": "2fHhYA6dReka7HBrUjMeqVxRCua1oZdaj3zrproMmfuDDLof9Zx1vNn4d9pAjmtayP7GL2XfU8iy7fy5B8Aa3TQQ",
  "key13": "2YM7YQnkJ5BDhCZC2YyeYLciStpoBkogtoXWhYF72hoW9jLXSPDXfofJp6aW8GzBdEFUBR1BqvRVKvs6jpqyq24N",
  "key14": "2QRGvu7caGkHqtqwCEU3wXTfKBbFHNb5i2Hj1xX1FvC1bo8obmie7mVTpFkq7uhVVhXnvjBUsyjXyTwHLrTBzq9R",
  "key15": "5kwZRtbEApVBkwn8TJiwjvEP2EGWyzmXFDe65p4XbtrEJ1vq4851Qpt81DEtbJUfk8g3wnZofUrs3GhvX8qNxaU7",
  "key16": "5vP7Qset5EpMqazw8s1vyFh3ecjVDnnyaNqpKVj2LY8hyovvabsmX8YoBRKmem8cqAoJEiqWs5YK4pYGxPSgefcB",
  "key17": "3Vnm42aF786roahUC82pJEUeuRMkrhLn9DL56jrpqHmD3jAfwTi7ybAVAjREmteB9iFBfENpbcuvfS4QRdC4zn1e",
  "key18": "41449CF1euAVq8pfFXb4Q18pxWFrnzX2QTZzowLR6pot3oWdww3Q2ihpPxXA9XejxrdbQwrFXX6SN1uRf1vtyNoA",
  "key19": "3JD53jZ4Kescr5817KHsM7nUs5U63CD6PZYr1175qmM1TAJaAwgj55iHAYUdWLwsEHcdZPbnkG4nM6KFpPTcijE4",
  "key20": "2BLe1jnV734hcuKzppYyT7ooxdzwjauucqvcZwC3VBNh72QnbtgSq8acA9LYWoiUoBYUCQAsvt3bpChYPEucnZ7G",
  "key21": "64Twg14vttg3daDUmvRmAMFmqJF4JD8D3dDo54nFxnQ1Ez8Vf1sXRb4Xh6QKNqXULzr5PCmC7Ph4woCkuCht7Kze",
  "key22": "5Li7aufuWUfFrbF9Yre58bq1jdUuvo819ypEP6GDQmtqw2NLUMLm482jBiTfp3s5bMCNHj2QNaqAuzc6pv5wRrJX",
  "key23": "5sa6cZ2EX8gk3wGW9ekBkrqGMzvBRBQMWyJh9uF7BMrUqsFqrGB6Hj15qwoFYm2fV1C4c8BuV6JBp2aAKf2ABbU9",
  "key24": "3F4d2CEFsS6cZgGjxYLKvUnfBKPAym6ymQJikJhBL4fYUHERj6HHUtPWjn9PW1bDdDbzMYRYHgnR3J7k2Cvjwfkw",
  "key25": "2f84KnBHDMebhrHvdsKBaepwySQM6tMYiMXZpLrYdYdTZEKvKQKpn9hPVHw28m9px2URtQtZaHV1jtAEPtpBn54N",
  "key26": "4BMin1uEQzi5qTwvMHptiHvoLekGBZSbQasZ7swhSATHjp6QuJmeTN7V1mgarW1kQdPvL1FTAyTxXHTSnXV5Twjk",
  "key27": "2xH4VXBtcKVmXw36XEQ6oz4NB9MUaYuK9kWMjDDRVArvpKKMK5XMjzMeWZvvCS2gmv8y6szsGxriRQ2nukL9Twg1",
  "key28": "2LnedFWJHWVrG7UqGPVoxGRVTWGENrx1Jvx26xWjJiekJHG2n6VDwRe7wpUDCN9SrwZv13XLrEh24uSty6NG23Q2",
  "key29": "55cD5NDS26UnRP5xRk8Cw46UpznhkPwKTioWttznrM3tcgH7RKjQhr85pUTShtERDXk6bqtgWCKm3Lwtc8sCwa6q",
  "key30": "6561if9DG2NaNmSmcGMRdtU4Yvc2avicE5qbhCLS4BFKFdMCFVUBMw8mkQGinaXh6mZBMnrQoiv453Lp4uQzucrR",
  "key31": "46xVvCasdceTb4Y2N2LJB5sJ3y3oeoWaeJpKKyLtzDgWdiiFnaRLfBwBd6hzHTuuYhRZtBKvf281NhrkejMDCBDo",
  "key32": "5ymz5fSRjJno2FkKZesREpHWiH3aSFevETyHR1iLE3qPP6TiMiyT2HmeGSdqZhrs8NA8YTUMHtyqyBFaHpJRCKb4",
  "key33": "qSv5BAjjyFvo9bjbiX9EMQUfTWX3YUwrPHfNtfkb9N8aJqS6eCYN3CWVdHjofLw1MjPC8wHJWteJRD3ooEbu3qN",
  "key34": "5hNJMRBTf8CQVAMgN3r9RY5v4rx3EJa6nQfviAPxHgnUJ9MHCarKbH31ZSrF3jCpNhocyxroZnhj8rYSjvPgrVZE",
  "key35": "2HmfkiUBBAs8o7e1iSmKUQxPJcDrfB14WFY6Vn1E63ZUW2DLpJqeaKS1ByKSym43YXuCmyvzPqK6PRdoByVESAFb",
  "key36": "3H6kuHuzpFEjFtiGL7TXcJPyYrJtFpbxhzXWkHkkNCBQN3bnmqn2bhTARj8hgvEB9otvEaYZ9rMj4ZCKmeaaGk2",
  "key37": "4yTbYn8vyezUd8U1ibiMBqzPHSwWm4xWZc4YvQJjC4LqJEQBwJPGykPyxQb8GXYrTfbVVaTrpVeEWbiMucgNakZs",
  "key38": "2HGBP5U4Z6wt12qRJnznvNfkoeF5Q1tY5fJHgkmAX5vdRyZSD5xQzfGmvzLT866NLwqFxL5gYSB5ixSw2HFtYvYL",
  "key39": "4UzMLmLqDbHEAcnthuVCoSKizSvksZ9jDqv6pafLbc3CnM6DY5RBt4fBwWxRVGQrBWt8r9WWprx2posPp4VD12h8"
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
