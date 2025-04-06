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
    "sXGgU4iYcgG26Eo98nDsFMiH85i74AE8Epeb5KteCZS27qemwRSpt4RBC3HdhzyhWdDpAfSNBRH8Qn9somq6tXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGmGPG8A6F3PUHEugEqJzZi6aCW3Bkd8wg1hNjndD2usU8fcQEYHX5pFaBRdm14H7fV81E92G1aUsxgnJhnwJ6u",
  "key1": "5PC1DZMPrFAc1iXUtfBLA3FgZo8SJV1ymsGv4ytvTY3CDvqm9qEv3mDmUVkCkx1wcNcvT3APQ7jvL9CZDdyyYCKb",
  "key2": "3SUQ7dd6BVj8f4ri5tFDassiC57EWcNKv42HP2RU3WMovAm1mNT8wU7UBZC141WhjJkQBX5GZJGirusZoVaeTviv",
  "key3": "2FFAKJ5uitk4KWQWpd8FoGYgXXd3J6Xs1c3z9NJ7JDsZKtpaCNxRiFrPWz9TyE5ezF88SF7FmaPJ2a7sEMQoab8r",
  "key4": "3WQDd7HTKa1w5p15avKfztxV2vj2scXDq8RajHGST7ZAibT2vgMYWcy7PvRdtHNPgdYJXDCWzHQUWiYdGumemnDk",
  "key5": "5a5hwrpp7P2DP4Ki9pS5pJZuF2gTSzpBc2fLjC6V6zoXrvY9VspPHpMEkQdRDkXJhyEUwyLbV2yhS6HRqKF9ezmj",
  "key6": "5Pg5e3S8HVybSvQvz9txTLcxx2vjKfy77ZfqKMaaCKpQEPaFLAQs5ygvqZaMjfZmrrCjrZSeYippkuDidJnZ7R4K",
  "key7": "SdCfrePgMBpo8qLyoWjF3XDdQEcpt2BuNbGiM8nD7K14EtSpVVbXzjy8DiXdNyUHTyRKBUgbVkcQK7RoLiZjshc",
  "key8": "cibKnTrJdrxP2NC4pJi75EuVKJR14EwU5Z76PMAYvsjfSMS4pcj5imnJGug74Trh4aJBoWeUrL3mvhURWD52o1N",
  "key9": "3KEzdM3EsWEPpyRw4Ww9M9TwdSniVeEqtFNayoHike74XPYy2cSjUD4bqE3ZWs5gR3bvhsrW69aYSFvi7BYrG9Rv",
  "key10": "UCRpSSjJDGTbjbBJLZtCQd7NKGvkPZ3Yw6E2WBBi834EMZmwvJGCdXhwFHsCxsB7iyQ7AzogJqAUt39FxmaSzbt",
  "key11": "LRCvRLZkPYvQHBxAn7PcHXQ7wS52nFyBV9px3QXGJpubmypt7c6H2as2tsCKnvxbhUV2mrmZVQQ582cxyhwZBW1",
  "key12": "32xQb4fT3WPmDKqc3dzniMppPKhHsLwETV28UYHMCv52E3ydyKzi5XQhWHWZpdEmHdkV79uDxVoku5kwWSQKApXd",
  "key13": "3YafumehVhMSNVa9PHcWtKtzDootCGGwpj3oEHP76LL9vR7Ccow1Wzztd1yXvDT3UJHcMtihty6EePzak84wXy2Q",
  "key14": "2wpBXjCQ9eDQ51TVv5d1Wst1WouPQVUfga3t4PxhKn7cxPdfjYLa9A6Eurykx22y8SuyMTm23zvn1A9Cr4FuD3Le",
  "key15": "3zKDchFRBEtKvknxyXmji3jK4G7jAGykXC287SEyAKVZDakUWumsNGau3Tpj7hUhrVCrJno3jz7NH6zqQwVLjYAi",
  "key16": "BNd5kPhSDsi5CiqEteajxDPU5zczRKhdpjYXGaofZ6vc9MkiTuyRr6wuSm1DoU3KjHsrGM6XRdifTxvH1YJZ5iS",
  "key17": "2PY7gT9qvXtU2jzgFkdMJeMWVGkenZCvf836DQZpMfKqSBq3YxtH17suSokaVVaRX4Mpss9JsaG1EurRfAhTBedS",
  "key18": "21NX8bh8M3VczVos5uiEBJGG1KfErqgPjwWhxFW6N6wqHR3AhPURzecGEpezqPybPxYgrYQKF3fjPJkk16GaCpZr",
  "key19": "D4Tu57DNmB8TAFmKeEQWrJ1xrpRyhXd2Cq19DhWeK9jxPDG6XEQeNBrdWYiHXjinvEjYrhxSZmiyseQ5kSVpyMB",
  "key20": "QYGWgXQsPnHjdS3ymaGUFJqizJrmh7vooYjN93gVVYdCEmAggPi6sdvpQXPyU2ArYBCb5AyxaAkvZQAPmNWZq2J",
  "key21": "2ZxNKDkTA1UKVbi2AeyMqYoMrMsL4WCsMtfpAsGg76p8PumrwHJgdVxmauhwXRmsBJYd9qPLpyuCcKMdUhz7Rr9A",
  "key22": "5aPgLZyFYNj3JvbcNdB9z24j4Q7s7VJXdzbgQbE7Y5Z8tAxx2fNepfAJPkP4cRJ1fEzw8Tz8mf2EuUBuemuMCGdo",
  "key23": "2MvP4Yyagc7WKozqrn1sCKYHU1gh4iT5XzLCFgsx7hPEKgTSrui4U6BdM2zDLwfKpc5sYhJSs3fQf7ej8JDJX2XB",
  "key24": "4DYncLQYavhJC1UMd9kPYCJ3n9wVpyZZs6vyBDJ6enSF1Jz2VL21aYffHuYixC9tgczfAHNQsDmc1JCKftabChBm",
  "key25": "5f23j26WDCGLQ7G5i2q6uxdayudKmoyqboKgwctP9iDBsD4QcDqJ4t4AJQ3gn9KMwGvmVukhAapwqv6JEMsimean",
  "key26": "2t2RJ7Dq4WuX2ezLSUfPXX99qWUKiKFNNrYzRQ9yszd2nDEW6kBUXRRi4zPjsqJK43TPLtuzNEuLUC6cEvEn9hj5",
  "key27": "4e4A8XBECE1nfRwK46hyrTMsfmnqX6SJkQR7y4P3TVM3KpKJAJUvoWaX3HrYn9y1N8uAXRmHV2brPRW5siHqb9W5",
  "key28": "pbZRN6WkmBtNAp8FCy3rB5DpuB8gSiRS6cZ8yMSdAeuYEYojnyiLnog6W5i1djXjcs7WrDv9zMFL8VX97SqS1Ys",
  "key29": "4Q4KT7FwUx1D4FCBfuK4qeEKSrM47AyfP22SVw1MW6WzmBtkXMktz1btz3kPgWWRtPsFaFhfZM8DCs8CFRi952jG",
  "key30": "4dv8m2roT3LosMwpLvdC9sbzVQThhFaRN7TtjRFwjw3DdUV7rjp4DCUXFyjAmDTChUQeaAKzgYm3ugD1QcCAfGUj",
  "key31": "2qt2HkZ8DcgrJJNLPYjZXcKZg7cgG752UTnpQYNMXRNsTsKgK5yC7fSUaY8cqXHaKr9qdW3JYuUGwbG2VtqxThiA",
  "key32": "4QCnHTNbTPUjcpVujbnLfkRvWhzbYDaZf7anUfjhMSzVAPEGZnhaX48xsGj8aNcSY8BWt2zZEr8auqeTN4L7HspX",
  "key33": "G7wgmjis2WbBd3o1YvT98bQde4yTBhzvXMQx662bQLpSL1sYLoWyyeS1n2pe5b1dGCALgjzoxzGUQoNpn3qz7KJ",
  "key34": "2cL3NEeUyQZbVRQ2sPosJtTQwtjpWRfhuxXKfobm2bY8jzGdgYGeaFe6fcYbbMUUpnwELaEAiSDn4ij2wVWdE1ay",
  "key35": "5ZBvpDEKJkiG1hAGt1aGtfZqx4RUdfUkTeXNFNFQUjw5iNA8AuJdY8GxENLSpuKBisD8UGu3TN8xGaYenxEDmB7F",
  "key36": "2mUaVj6n1hsAuLhnxq5jbbxJHiuG8BEuZkRLqMWqxydmHFh3dhSoiDXHA55XecY7TYwR7anA6fomXR5v9dk897rb",
  "key37": "99sJnomeKipSXPErczywk5o3ieKJaGKBmmygkVYwwYA7scyhzUAHTKQ4QYadiiVQT5EVLkzwJPryWGyjtTA6m2V",
  "key38": "59WfjUUcyicKchtfLF8LSUJGYfWAg8YVnYB8EXD3ncbkhfLbvgWa2hwnjNe1X7zsZE64dBsjGtyUbtMdZcJMWZQY",
  "key39": "4er3BsFPWPFkAchDC8vy376Bpa4XnVh9Xtx3DteKjeseQkJZPjuCZEpLEZDAQMsq8AB6npm3BtYs4jXupV1wQQ3o",
  "key40": "5F8rrnrKoJ1twfcoapdAcVdrAW2TmCWCTZGnuLnwToLYHkK2e5LfmzjA6qteSvdiutHYmpBsvVoBh7Xx4kMCNLFZ",
  "key41": "46pmZSFcZ4CRx2o3QuXgzAxPpjPL3iqrkuUmcUSmrTXQroi2Bm6a2ZsqNDjirdeBqnDdh46xZjzeN24qCjTQGKx2",
  "key42": "49qk6aDcVEe7S4fg39i8k7GRxoM7H5K1TDgMzSWUKNhU4soRANvhCS8Vjx3cHTDAxvuXF6HepiQB1JrvRQr5hDND",
  "key43": "c2NDuSKAm9WbEvh2V1sVCamW3vddNSrXdP2pWeaduX523SLWapdaGUDPkFSwYjstbCw89E42Jv7rLrQcujdTJP5",
  "key44": "3DnLPZnt7dX1JBGv7VMk5snVYWh2BayENcL3JegpEocWmwHswSWT3kg8uVuYyXURfyxNWuaH1Z2S1t87FurFVGa3"
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
