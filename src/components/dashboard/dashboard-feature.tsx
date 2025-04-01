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
    "41ut2mqUMZdjhzEjymxkoYwYXr5nB5uQrv6JLQmYF8J5Q3TVrkbDMXrxRoUw7Gf7J7E4gKWAmK8CDve4YXH6hrPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7kJxRsk2t9XoHzfoq1ncpB2waRA1FT6hw5EPK2SN2j3aa7Jh3otSuymUy8a1tQBah1fbzaxUd68LY2n2xBtssr1",
  "key1": "MpRtDqn7DRehDz7KiJf17TacCt484pKfsd9eTtiLvN8fViHdLPBJzG5yRFceHHR3sBWPaHr9janu4MSqiK6s68S",
  "key2": "4oQrXeDhPjtxAJHmjXrebzsZGhUcAKt6PcpfYm2RvGhvQUo2q99FXHssdsbcnMJq9kNtK2w5PLA4L26NKcAmLY6Z",
  "key3": "5CZNJkjsBCk2YMXkqmefXk746noucHs3PhMfuYucfH8t5uiqWUb5wcjSk3SvmGmoq6p4d3LzK6h3ESc3EyGspGwx",
  "key4": "3qiY6tGSks8vSzTUGE7Nb2VEWxcYQ99yvB2T8hLG8sMsLC3dVFkmJgM3G376MYK1RGpesatyMAuGmgio62e5oxHq",
  "key5": "5Dam7fBt48WCh7TQvXPtBeXCiLf6f2zbH7y2g2uuBYUQvnwrDkfQ5Pg72Jszghkuc4Js9B1hsjeuADziJxqeTmGr",
  "key6": "24BtkpvjeUHkbrEnqJgdizyaSLpoaCi57r5XCKtikn8kZLcfMs7AXGiLsQVe7428QQg8wRkYcbWtUUsJFnaKnNLa",
  "key7": "2eSpusDS3MPmJ2cLs56eyLEj2bV9N3PYBZagEMVQ7Z4gcv3zygx7WRhGMmkmuGkEBHMco8DZ2Xi57NDz6LhjBFEV",
  "key8": "jZmbkafVnJUEib5axwBG5q28mWvmqRi2LzBcCehtAwACQy1EULy5x46DFqUqK3WsQ473cZXssN3iBXUa4ixXtya",
  "key9": "448PVw6x7ZxbnKYMSQVJ197zJNeo19WHv67KGLZqbTgGyjxKDW24wuyg4SvkhX7tSMRbvGzx99M2VHFQpS2892nH",
  "key10": "61MLEPzNW6R9yCuSQ5ZQZqGc9CAqRqkM2t6rbonQnLAb4Ju9FhWwidouUpUorySPz99gAQDoFyDMWfyti4xHrcKC",
  "key11": "3n9N2bFtHXwiTBAuLdSmqk9ahwdGnDFMfnCHXgSi1iQVBvuXzFHAN1aVQHXWoF49isHLTbLP7MM8oovX9UW7akrN",
  "key12": "4pwvEZs3ACm24dc7JU66GyYEAVm3QipD2uMikH6ALWoKXXAL9JJrNQ8e15fW5Q8XQiXHNDmZj66P31izALinQdqF",
  "key13": "UD7wVmBgHv3AqLeqD9SWmjG8azVb1gPQkTFED4gje3T8Suc6F2k461vDRGePHqyrzKAUEP6rE8epEHEWNzejXEM",
  "key14": "2zCkfQRN84XjMESQfDS9jxgY9a8QTVfvyw3yVqMEYxaCMHZghQ1RvhoBpWABuz76fXks3bJCB36BDBMUZ8VFpydV",
  "key15": "RWue6Gn7xaDH5WCDQv9NjqTekSTmT7EoHRB275niSEruvX4cXscsjFcU8km5sAW4R2C7SNoj95p5fxfy6pZrSF3",
  "key16": "2BM6peHuJrHzfMGvAw4Hy1CtmK8xttAYSmWbDTwHih3gnN8g4YNnK27YradSWVtgkGafv581zuQpmAckUySdFySE",
  "key17": "9ibwPC6PwGatPFZ1YrbVkgSgQKeyJhiZ4SL9HGYDBgQAjDZfCnPgTSL4gf1Rfu64TwcHf5Eh7DVQrMceXoz2etL",
  "key18": "53wpnp9gxvKBFtRrqUoLLwsUDbdWjjCAgJ2hdT4vLv1iZz9F9CfAnxw2uC257G61yn4j3V3cbxzD8bkuCyPKuTie",
  "key19": "27J8EaYuFzBH1cvKjhPAM8qkEF17V8t1s5QQgaXrkpmYKp9RMeMsmEufY4GiRNoyRaQ31rQk6VGWhdi8nNArkEu1",
  "key20": "5GrQzE7TgA8mwNTcA8mMnieaVFfAcCcFQeYmpG1es2594gyHR5XSDaxUtuWUw4wa8CVPz1KpwU3YJ8ZMvf4kDxQU",
  "key21": "2TBRnwkuGKLgNRJrVUGxGD5FwLe41yPqwvoePLsuThnv9HxBQU86GheNMTMhgXhtsm6iudqpWkesf3usgDVxpWHB",
  "key22": "ExcMmq2b5k2PnCHt8tZj97rCHEgszuaV21nccM8pMhd437FTF7cDMZvAr1qa2VZmtK6Zy4MjXgWtREmh3fMRXpe",
  "key23": "3i9TLH1qFeA6N5jtYzET9bVXMAwJD59LFhPqjwKuaZUh2Wnr4wfmA5zTwN7mdsYJz9btc7np183dqFxCx8DjxSS8",
  "key24": "2kJvgtqe6qrK4knwUrZ5C4Z67D3N3Dm6iubXLCPCDaKCQtchk6nE3uWF3MkjHenysbcUzDDNrdudp6YEJ53fyKko",
  "key25": "53LbBp659CBDJcWQByiFvFcDEmtQkT2ZsFbx1yDLJE31T3rRPtehgajg23sCrrsm1TDnPbvtkAzypSJ23KwoxHm9",
  "key26": "3Cs5pD5sTPauuFNDa4enVAmcAkFa23oSmehNQA8Z1Tzqa7neSU4ZexZwBWAdAHm9JYkK4sjY3WQqUXasQBCWBtKu",
  "key27": "5C1fzU14zGPcW4g12Dfih2VGoA41jvXF6rcMLJ9FwfdfxNfS9HThFWWU1JZEQ4by24LtD2Gt8ZJsVPAX5Jmqp2sE",
  "key28": "47iLVsnQfwdMf9CwSrv85XJ6QuKGDjEqarHG2FAvGrYzQ5Xdpbp35jwrCEKNV2Dmo5ZEcCYu4uQcdDhEexL1srC8",
  "key29": "5yw1sB9PHk5rASEKG5xzHYerMjWke5atNZVzhxYbekwAVWk2cnsuoQ5HVtWKBqgELd8RhN9ZZsFgB2vyNiHbJ5K9",
  "key30": "4EvJZzHgH7VEaBEKrL5hzrxNdqa7Y6VRARn67PmKZos1LhRW7zzA8esVj8GPxMatJX7yR8wcZhvqwsRcmqvadsJU",
  "key31": "4aZHqUKV1SHAz7yBQaPQChcHFvpyVyCWwmqh1XqWACo7Xb78zNLDkMzM6zTNyKesQQkvqHvjP1RNGwbsA3TCih3Z",
  "key32": "3xUwEiUAQseNE1LpZ3BaPq6SLpVsN4D6zwcQm19HmeMH4B4gmeb2RDXi579rVE6Z66c4DBwokbMZnzeXG11TVFad",
  "key33": "61v5Ywyd7MFQ9yTuiCSY4pjKbxZsjQ7FhRaz1eESSRNSJigKyr6zwqCoMeGvNctZMJvZ7jsR8MsAXgk24xsvh2jo",
  "key34": "3fZZKM94aRu8c4qmVwaHgfAS5Y4hhbvFb6iHB1ALNWCABHG1uHrNjram1tekeN8VtvDz9C8ACbfeTk95pnQex9cP",
  "key35": "26qfQTwVhCz6UunLB5akMKW9S6c3MSb1Yn8jGjzLLX1TXqe91H52MLvxrUqsB2JisCsrK8DG9VRpHgMTMvJn6fpK",
  "key36": "4p2j7smSLaoHcuVcGPQ4Ldm3MxjXcZSp5QCypirFobUKSpBQMREcPgP9yLmikrjJx7E3eYCuZeFYERVABnprk4GZ",
  "key37": "2FJuoAi9ce4ecRmNNEopwDFNgA1VAh8e47bQBpn6SDEdpu9Y5xBjrAasEgaNsWsAytjZ6pnoqVcvZEeGREAdGziz",
  "key38": "3BNmTf39DTNdp8ME8fvFHb7B6FvYnRPnNDYcnFsnAHidqdjKVP7UQgqwSXwYembeQ8cr8QseJ7mSz9pXZ9eobPug",
  "key39": "2iDHq8kWF2Jr4Nea1Y73rvPsUCrjxqib5GDHKNNtKrhCnRPbe76GgnMAcHWLjBvaHJgxmukVkymqWCwED7DN2snQ",
  "key40": "2U1gcEc62WrhkjEnTMkbugVboMrsf3754ViXFoc2h4419AbLwYzgHMfjWusqEFThejm1TGiFU6tt2hEWeovXRjhT",
  "key41": "5RMkzGuJPcUHLZrtNtnJQ6PVziZ9orjdsgsrHsbqbAEZv2ifooxXFyPnurVDZ4dcqExskagAfTtUzguZFTK7NBzW",
  "key42": "2yixDHJQvGiSvUZjibVmvXUSqeNDgupAScW1mFXrjydYWLpqfwJkDJsXjycUTpa3ayaUUXYqhbPj3thBwcVoe17T",
  "key43": "2TMXyCdfjHGG9FkWPofuKcEuW3i65TxuQpd8WP6qy3Vx1H2krWXs23wR89vVqWzihaSf3j7CCL97MCdLY4UeyHLi",
  "key44": "4PGyFynpuzUDqSHS4iFB78fxKnDY6YWWm9smyBaf1nxyqdsBYyk5dx6q352km8A9Y3FFkQ3DD7YXJV9fP3DfC5K3",
  "key45": "35pFWADKGGC4GqsT6EDyXk9JmtBpmmdmebKaxUpzFbuC326pasfDbjiDZc5kZmYbUskfShfyHXUZszxDcShkNkhs",
  "key46": "4RpA4awkYrT5R6NJvpcGXewe7qjh7fTonXH7uiHkPVhY2XkAboFneSYAaafgVF6xZedtM6DMntU2EjUWvJvsZR7R",
  "key47": "iH8JCB2H39w4RPPUqJ1XatZcD12yuLL6HcTxPuaDZszbjRV4Cj5seRh17J6PsmcEN1Mj625Hb7KUmSLE6ccnTDg",
  "key48": "3d7bvUwn1sL24LBKpa2Ch6a9A3bojJeEiUj6K2Y5rLimZUZGpMLnyt9A6mktfijqEoKqFLv6SnXtKhCfBePgipJy"
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
