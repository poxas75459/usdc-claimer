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
    "JxZQF6svJ3paRjqFB3BKb1fowsM4Lx9t31LsyoNAqYKrgUuTmkhuA9WbMtSZkMSMF5XJhLJhvgTbDf7tYUnd8ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8WJAPJyyAKPWxWyhA2GHX1HetmccqafNs4V5NLxJQfBesKTShrxwyBL3DZ8fhAuQBb1z6fcRcu7vTtotb6KAa4",
  "key1": "2r5ZVPNLGtewzReiKEJaXek1EiVQSWtkTNtnhq5fmhuv2xq3JkZSgJ3oUVT52ahGbuftxxJZVTefVxrGYSUqoX2e",
  "key2": "2SQRVzPFeePVFm3jgeFNKQ1DNE1yb9115ngqwt8STi8aA6z3BEyMtSZdzWP3HBikX8eAGLQPtMLszCkmAkAyAm93",
  "key3": "2J8qMowJvkrQrPnFY95TFw6Sa2sjhAVdbJ2172BkpEVFD2jyzb6x9Zn9tkXgLv6fvhufoGFFxevY2hcrtSWzDXMi",
  "key4": "5PWco4u1YGarFEXtafRwWbG1kQ3nNoFHarcQHa1UiDo8hWbgfdxFiX4tuV45VEuY1zxVwDe3c7Vezhmf8M6rDPAx",
  "key5": "4kbsTvmGSEmVoxPfSkjPmWyqRyeqZ3fuN6QqiNVJBgS1ESj7Rz43gh341LbfaGnXu4E5MqqBuyRPCAuFrX7MaWq2",
  "key6": "258MB81CjJ4zXCy199HzaVCdvunYHHKQuUKz3fZQHCXKL2A5V36VjZvFHASdrNTinQRouQsc5uUJrJ4hyvMbyXpp",
  "key7": "89NVUxw9DAvpWLtmP5wGcg9dgyBF5V4cFGHqKhrLVZ1RkGA3w9wsuKDTsPeSAUNTk3fqRHWUto85ddGRAuHzcho",
  "key8": "3fTfYoHxZxJWgYWvV1dunKWxnCgAvzGpDikfcqg649vU6DtPtmYde4cxsLuTBge7nKCwzdPAnSzXAWmB3qoSvHTM",
  "key9": "WnqX9K3mjdWSzFrxoujQxa2zkzmxgJLDB8VqzqjsMp6SXMpm6Agq9WRaw31ZJ3JrrFXGfzQpzynJ37Mj68ZPC6d",
  "key10": "4x9gf7ZtRtQ7nRfebwU44EMEt45aQiTpqAMcrn2xPr1Ef4ENDQcvb6UUA5amZbxSVqVQNMyzLDUJBs5BGna7Ka3z",
  "key11": "5BiMRZbUr6gnKURGfsWS2EttCSNk54MBcS9iY2kF2E8z1QGMeKGMv9Dchw95ika7dTQ13YCMdsATTrAjY15a6NGG",
  "key12": "4dAqQYzzH1piWJKjBuGtNK9V1vnHQQREMTxpbtYDKt5w7DiqWGhXgQwkW1zxc4f9DVUUkJoo7H7tmCRDNFMrWzLg",
  "key13": "E8G6Y2MexxDkXMNoKhZRXYB7xaBT1bcYTnwpSxdJXdH2gtsmoyPERT7hTsZMuw3LYNiPXrcnusoGPDViUGzjjgA",
  "key14": "4UuSYsKWdhcGPddFM79VXTRpZwZsdVAahdi8bXN9Y4oQNLdkcZMWP1heKWo3FQVq4qhwi2hnKXvW2fYPr195fLnN",
  "key15": "4ZBHjmGpS7aY2GmQgs8Xg4nCkoLNiRDVgeDL65Ld1KXeFeT7CZ1VtoCmJnNKu7bkjUiaYewfQx5t5gGC6QfrA66",
  "key16": "4UV2QXSrvRwi9FUVUDXFve1i52JTudjQaQfsUpLYgxNsxDxz7yEBLUfBFWiv8Nf53WfX2vC9QwhELVDw8E7WahsJ",
  "key17": "4LauZWxVHABNiXRt63uV5NS7tn9shuLi4GW9NEY2PShFzzGwYp6dckaiYKpcKezYu2w8FHSNswFoZyXMjDMErJhd",
  "key18": "4TJQ7oxesmFAy2NTXrkq2zCZdgFcZoJfpjj8KfqtVsZGWgXzEmDXyLRDnShW3taEHS7Fo3guHbFW8PpGdr4e3Vy3",
  "key19": "3msziSit4tgFAsrfh16QUYi69VC2verqUHiL3k3JDiPiUGDWAh9UY7zvrWUnzCheaPr3aPTXr6spK2JpBrSJ3A4s",
  "key20": "35TqeGjZA3v7kxnQZjYcphKpyjvGszXpLrJTNK1L5SsjEz5gaeBGym58gQ68MgWuErAXPNxyaJ645F51pgn7j6Mm",
  "key21": "3BHp2yoKdppuNfKiw7QfeiKrmseSnEJCD47DZhWhctqDzioZRx5UhS4hJtJphGW2Pe7wadzpUcM99wScDG9fLjSP",
  "key22": "3kFzTzzY4bJpM7jd2W7dFcwfv9m2WSP5j37pvCaXWfSWDi7SqG3GfWcaZ5PGSzrUdE99MQ7yMYqNioH2gPSfT7yh",
  "key23": "4DqmmTqEbwy36J6MfcT8hGFwqoUTUcApnjbG1n2X4whCxhh9viS3XD7qWHKxwtKysDzKtHNfG2RZPpyG8FAEjz3a",
  "key24": "24Te377oPr6NyeHDtXtr1vqJ8Gw8wbz4LE7MkabsRidM8z1iLG3zqjjckEY7GWKy3n5btzioGZbuBeVG9yVenUms",
  "key25": "3xV3UbpPoEYzmSii1L5eQEB8Zu2wwVEivuGvnLtAEAxqqxWCrJmPj5n72XP6i4vPo7BcB37vWT71uGfWru1meVNm",
  "key26": "PNhqauBBXAD7dn1zcrtsJsLQ4qwtwm6T5aVM4h7p7NRueLtB3M1zEvDB5cToVepC9yghosn6ns2aUD8tsvJnBbQ",
  "key27": "2Rv9M8ptMSnQ32CeewtEjvpbXYThJcZPTSgNRcNhwjoBophPAHGG4xC7tjbLAczi7TGtR79d8XQn1piurcrbMu6j",
  "key28": "4W7QCcLWj9RYpVc2Dn1x6BVQUkUSuHvmpo8A1Q3EWcJcaPuVyUBTT5SwNPjCn6c1rGsR2f3q9WfbWXMh9ytmi415",
  "key29": "3osfiGS9KzVaxddXcMRehMe6XLTp6xYAmVNEVB4x7hbJy7GA7Jwnpj4WjwsVgsW2RhsKB1iZtq8XfgMQMLccJBN2",
  "key30": "5VdwspRgBZmVwMum3GLyqgJbNuxEdTZ5nWHKD7i8sw2oB8cVognScaDaJAbd6HKovP1QTNHRT9XMifVJg9gyBZRc",
  "key31": "4oQ25o7QPAGw6QVC7du4bjkHLQFMpFHDqJaeHiiYX4KVCiSvEdGxGjvuGouVJebw7d6MtGsNzFrrJRBn3vS46Uxk",
  "key32": "2t5nDW5s9fsBePCpuBU3NLPgWL7WVBo7KtRGi8WT3oK5bA3oksEWiA931oTZFVbkuoMUT5D8g8kk1gYyc2nPR3Hi",
  "key33": "5BbxppZk78GtPNSE5vcwdhc6LtsC7sgbUGW8AEMgD5YQkwDNZovgvrGVDj4CpWc1baef6ckUMEpfGhTeStbTEm4Q",
  "key34": "YPrwH9RqNNycxAS6r4gSZNh8fizt27hMmJNmu7UKaN1QbUPgGYCP4ACf2zhcP5puRdBuDsHmAJGCZpUCMYttEqJ",
  "key35": "QMh5SUBi3DNRCUqWBqdnqNJGfhVWRbRCiipCN5nDSnXWQXGfVY2RZwC9pCtVT8kvnZEkubjtHWkmYoB4UjqKbhk",
  "key36": "4NFgWxAdq7A4NovdEUWzsH1PKQwBz8kbY5HiyRftLXvnFXT3X8uqG5DxRQxMxVNKxKZWirA1n3Bo8udzUvMtsA5E",
  "key37": "3D99mPfJUk1spDX4doi13x31Tx8dqEdegvMcZVnp8nBfjpTs6KeojsTVLLz7LCnkJXNrRLs6Hdyjonyer9uhY7cS",
  "key38": "4ypDj5ZPwVmLXBmnAFJvtGo6waSTx3BLU6iu8s4upBoq9kYtTjdyCtCb1ri7r27MMQ3dYa4xBfno2on6kbpAbior",
  "key39": "3xLiZ91NKAPVdWYjVkfwAbkVvXvsHPUD9ETBrPkVGdSX9YptnqDZe9eLDtLcYjNagSAN9CHpzVCXyX6wqboYAKCS",
  "key40": "5v6fpXGnjzwbi5PHguRTwXXvghPPsUE7Dje738BDbPrzmNWqzqRi7P1Rx5E9695vzWVXp8awf6ow9ostsuyJhjkB",
  "key41": "2J3QXV5SrH2BLVrayZcvH52SJRuNCxCRVarMSk1ze1sQgiJVZMmkU4RQbmCpREEqPM9xT5ss2uD4Rdcg5tZQyV7m",
  "key42": "5C1z1iks464kfUUg8rjNxuzs8EbSpj53kMbNt8Tt4DYgR98DoLN1NcyUsQBw735A5pp2H4tzitVq7cAP3gqDTpV2",
  "key43": "3S7uwjy8duNe3seuQqJG6RrXbZsYPtY8c1PytNR5m1sQUc25DxT425xcAHUjnP1BjgtDR4v2CoeP2Tfoiyibnxws"
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
