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
    "3NdUsn9A3DDSjNX6Vvf7f6A2BSwZUGk8EB1sFDYmAMqqh4WivRLDQsCuWRWHi3oZCqPjniBaexeLDgkQCC7qrpw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FX3dBSLVG5fATG64Cx5rYsoj5M7gKcX74dKxMXs8B9KyNGEQYHgYy2fLmZB3W5TbKgYLeG3xjnp6SfnaQ32kwQq",
  "key1": "2jbZwB3FMcDmysgEnJQm5mXqP1w2zbNA1oBMzHrvSPKkZ8V84wieq48PovQ7eTLfw4FikLVXC6Rs8RTM5BQgyk65",
  "key2": "ktna6UYTQRiHm9UeLnkcJsRnPd783Mnop9Kkq4mDyf7WdR6fVfnq9wHVDZNWZBHwcxL9DY1BAkn9XFWrUDaz5Uv",
  "key3": "5th4tiQxCGdzUcabtmK6oh2u7hfrtaw83i8bN7LJ5BNeC1pSTVsgLpUpDV63jhx2UjncPizGv3b5ExrdAfeXLwCk",
  "key4": "5qRbM5vzNen9Cq9GnV6LPCXwJjgmgZVwx2JFV1ExyoroLkjPRMSEgUEqqT4ak2KCA7QMgMub6kLLU46poeQpHVvp",
  "key5": "2CJ25h5MH5aJfbywBdDHE7rwSYDdW3FE7GV2E92cjHjkSiJRikmtjvbebMG9UYbcxfrM3hJPxj3hATMQEV8F63Jf",
  "key6": "2eBwjC2cNneCLdRYgD53LaaT7qFto2duHNqQgB8rRv7JjiJPs5Lqn1hQYGJNDRZ3ZEWkWo8d3mrgvbXUa3qTsThT",
  "key7": "5PFN6E1vzV7eFnarsjrmQozWCBn7P6Us87ZLvyhjLpHDivTBxBQ6Pj6UfGS23VqHSfM9B7GdNiD6zMuzcVmnPzZH",
  "key8": "5A2xALKXGZUrBxwCdALfWwRnf1G9M51x1Z4Pxz5BvVHqXFw5jyBNRmToFPVJwUgRRp1UkegsmDuL5oQWyk3od6vH",
  "key9": "4UsuRS4ZmS5LjRunUndS1Yt3V8TVS7XN44CKd9LwG5nuZ3qgBkwkrtZY9GNKfoedmXSxjjnirkhLB8g26kt1nQMg",
  "key10": "65HXfxPYUE64BQxj8nqgCdL5vW3HPKTjYFtRY3kJjJEGqBN4D5XGjqzmZ55k3rSmPaYadFg7ChKtJuPaH8gqwrX9",
  "key11": "2qtwXknfB1UKLjofTndHx2LxyLYHkMxoFC1fhWEEk5QLdu9dQUtXWFstLWdiduYKPYQFXFfzsfc8RV4GpRBxdoU2",
  "key12": "4cissMAxpgV25FUsyDCbRLk3wZCG8ucxFJ4WUyvbggPMzcNYgVgmUX1aZWwVHedDZjAeBfj4kxdDUGmxVWmmNph9",
  "key13": "jJ3jvsuBa7AjCxHND51upVz2oDT6wsdnra1vhhcLELmC4M22FYfP6AgKCzyAa1FPB2D8rsLiq3aMnvBqtTJECMU",
  "key14": "54FS2dTJ7S2zgQhq1iyYEb9hC71EgJ7Bbfc4YXtJukvyQB4b3HeJNhZyeCgfBDyMk3Cm2jhHAhkjRTvU7sFXiDdo",
  "key15": "5MH6HdU1fvAKRJWrkBL62RNxqq54AsJLKP1EsC31uNXmrKSuCzPUb2ADhnpTpsyqi4CpUAqekVoqQh9vwYgAEXaL",
  "key16": "9XGcq8L8pTLjYsNRviySdN2zwg4vAXNXZfH6ZCGhmXmSUCUCrpgV5f3Lcuc1GHjNJqV3TRfH4sTSHtTCcbPVCPB",
  "key17": "3h1kxYvBHGMeUFkRQbefdBNPQ87y4RnheBEjjCYWB9jAwYc8v6DbRqf1m16pvgTEghp18nroC96P8Uzr4gvwDCji",
  "key18": "29V4gdpJa1PUT9DUsgMfgc3VnSst5X4MspBGT1X2y2P8B4qJExrXBorNsGzuBvaGYhDBjzznDorPUTe1hSYTRkUm",
  "key19": "Wh77wCBhXHH2Dubev4jQqbJ67kUTaymSA8WjAcWKyoVewGMWqn3urApBq7spvsea9Qo7uEivzKQwG83pVNKP2RP",
  "key20": "5KVATiR1D4eqypJdhJqZYWVxyRbA2n2pNhqpcbcSsGcDZqcDoruV17deqvBaErR9aBvk8BS7HSir7vauX5meWBvz",
  "key21": "4j5uDrgJSNbwBRPSiXZCj6UW7QTh3gu249XF4oqhVdHjYqLLqvrwEB1ERLdJSBCWNMrMc4qWT5kwEPKBkPPgYhQp",
  "key22": "2EETA8Zj9yyEMiYuZNXBdu5odSeodbjrTDmAiFogU9vW8ZreKDaQw8Cwx5n9p5iZsyMdxP1anXmYkus5EK7hvV21",
  "key23": "iCrxkgcoSNm1JQfbV5bBKTUJPVR5hpuxtWJZbMQyBr5QdQZ1vXHE1p9f9kzchmQFRrEwPqQvUnmnM1XfmYFetag",
  "key24": "4YkMoBvSNdHMgnqeRtH9MMABaLALYE3A88sf1b3T9YUkZZfbxLQyu8Eiq72CdW6qdgzYNiVVVnWnEBNbNvTYLfoP",
  "key25": "Fa7ZuV8GPN3dDLvLLdo76VdSekUTU82gKjuHimL45LKqvogweiBn17zGVb6gS1rfnosNr1MnBys8smiCJ1oSRng",
  "key26": "4TuE1RSSHsapTncqgLmQ4h5reJ5jLjEgksKunZvBW3HkfAnSwg9ynBS9yoSuCvBPoSGfXWRihizm8xGGMoKstMJW",
  "key27": "5v4T25AianEyHqFMTxCEobGP3J8pEJ2dWCvubLb1fPyWxSpzHMMhwLpyoGNpATzdnexPyoLsFvmkonfPSeHwD2Hu",
  "key28": "2CM9cCL52hgPE2ZNSpr4hWS2BQMSwcJPBQWNraxG5rLuti3e9aAQUBFr59im7rQKgkLPU3rHdTjyjKdGn6a25smR",
  "key29": "4pV5nuahsQZyGEyHDQM4WvMwh9mD7NyQXz7pYsEeRRdGZ65ABfUzZUVjSr4zBYeCQ6amoDcP2ftn59F8g2P1Cboe",
  "key30": "5tWHfDCSnjGgVsY1aP5cvgT4sTd5yGZVS7sWmHttnCkgFhsTF5qcwehVXH2jwvSHdBmGZfEijCWRyG9cZBaEaHt3",
  "key31": "27CsBp3WoDv3qAsn8ZysxaLR6bKrsGkfrzHPWmfE8Niyj93sEc52ooomAYoXK9Y2jsY8fyMBv4F4wUfnjZuvYE15",
  "key32": "4eLgzB2hy8krVk1dnfeKoACZ6Vnv7MMKEHp2czR3CRM93H7ME57tUfxKyzy9HTvLqq1m3jJchxXNwpxar6bcN1SC",
  "key33": "4rM3EJxpZDRV452vEqL21V9Hey8Jq3jXKQMatyCAcrmSp7pdcykVA3vRdHBAGLuw3pWWYG5FKUeXoknc5393BuKf",
  "key34": "sPqKYq4nBW6dsUwDfL4QQFmNZqEY5NeWLEVvhJdX6joTHTRz8ayAqELwhDVmUaqeQv8FvsZvzXwssQhJDhxuH9w",
  "key35": "4emCcsLHGveg7zR3owSjZaJ7szMR4k4BrHwEgBQ5hHGxu1jnjHf3w2rJphprkwC6urzyLpWDhUor5Qi3PeoZR8AJ",
  "key36": "4XTca61jAieh7SfqxRGDSuBGUXNMJLNB5Tz6zDYnH2ipesqdKXFb5bTa1dosqydMboELSuPLmNbGFmbAcfP4KKRL",
  "key37": "5mWJJMHGtnvRie4zeyMyukUP7ZW9ZAvBzpNkCb2vAyTRC83XbeoF7aFJBSRWXmR9KNvRsWr1tAQsuDEbp9VKwTSr",
  "key38": "34JS4Ndt67SwPkrkHmyLTmPbEpp5u8mq95H624RjVwAZMbtgytAe7bcvm9Nm94UV4ts7WfvTRj4CGC5ooKChKmcK",
  "key39": "5daGc2UXSRXr7wBKBTRqMWLbUUUjw16SKeVwSkCe1RE4y1XBJ7wCVLWkq4MW3NyBXuNAiCCczru2h1BrrapmuBiD",
  "key40": "3xGbkyNYcAhWed7vXU3SqwZbMn5UmAYcT2xWptTZ7DbYc3AQkLsR6jsxsUWCx6pgfBGAzJTimY2VR2zPwdGWhvyD",
  "key41": "3KS3x414Jaz5bFko6qaSsBcaucsC9zmNSV4XSBSjNDgthB3qgiyXhoAGNveE9V1DrCq3WHEixkdxA3x4ehpPGtiL",
  "key42": "8VbagrjWka5EJi5zuG1hCbm1bHByP2toT37i7B1bomSjuCc5ymoeTiw1PaBabTWTxV9kgFpxP4MPKJ2R8biEd8H",
  "key43": "7HiTXTgBhWn9qLaP2SsUdgMsdnY4TmhetDGjvieqRVakPrDLysKg4XVaUoJ1dXhsp16ws1gYt23GsGvauPQhvCv"
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
