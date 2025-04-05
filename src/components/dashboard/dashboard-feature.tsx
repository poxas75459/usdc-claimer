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
    "44d5RDYUdiX6pxDF4jzL7sfVCn6XpsnrxXT182mnbXuzqjxge6vMWsxvjwh7e1Y4GufwTMiXjKyyKbyL8GHdjmtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZakjioRe31UkhF4tHDbQGo5NyQHeeuXNDkq8tNq95j2hjNpnCrksCXzvHjLMi1EGhGYa2mKZjHaisfBJL3kvfJ",
  "key1": "yrEqwgeTQedo9ZERM8vWM811gTz9QPktjBVVKrdFaLKJML66KWQgCZM3Za3EX4uxpo1sKVhLRtAUkHFN7NXLV3K",
  "key2": "29ETbJkhXfNLNPqU7PArR8gyrcerrqNGM5skAqu1cuCJBBkF5aHbim68KazdrXvpQ7yzE26j668HtZ5sfVcCxw37",
  "key3": "4WVnsT3ArhQ6LQKxnggxbjWjVWJNWeyxmPmSxAuEtkPqdDYGUGyf8dbcPjQ2JXViPgJVxmVt7t3NZf1V8RRQDF62",
  "key4": "5DhFnLn7co2iVAyxPpzgPbQSkhweo7g9o229C8uKi9DWMvBd5J7u5SQRgFEVn3Zf6BhQ1kmDr51G9S3wwBcVomE6",
  "key5": "5ShajGAjhUpYytVQYdhydE6e48eRY55qXT66Z5k8WKXLkGzBGZh2TuHGu8cBf3gdoxND7fa4FPvb1UUm6NLeEVf2",
  "key6": "iDKVJFi5ueBSUcSGPzPUexChceQDdzEWnRoSEoPabbSVvp4fiW4wjiZAGRjfEvvebTw62t7VyeiqGDJS5RdXwXf",
  "key7": "5PDTgY65VNNdFJuHi2E9L1GqMSWWC7qVSBzBYHaqm4t2H5xGKJ3nnW8XGZ5MJSxbmKzGvZmnf5Pp5AqXvhNL7gjs",
  "key8": "muEnJAMrkzxJD65T2PScFcd3TjkX9BxdGCpTfQmL5H1MsnCEhgioGWJZecwPKwpPXmEMAGKc5B8qSG66KRMB3fa",
  "key9": "5wSyazRJqbXNbjnJFBZfKXsTaNsMExjtQ37bWqQDv3Sja9RKmyNoP6ckaiU1BczypQdpyBAi3KVKLbTPJmKx24Us",
  "key10": "3z3aoFfwx15TL5JG41KYpmdJoJ7F6Jri5qz7fKfK81NUyoFDFLSh9M1eq5UngjexrR2jyvCsFyBP7RYXgxQXDgp1",
  "key11": "PPk3DtpYemsg1aaZvVuQhfgTxceBZazoohW3f7NQatzGaSt8Hx7hgUsQvVG8J1WVhsXi4KJ8s8ZT5ryRRZFPyoE",
  "key12": "61FwFbgtbHYcgLdjNrENSJxd64skhHgMCL6Ky1PV2HfPAVP45YBVatuAHmCmaL7nkPRH2iU2HNrmMv7yehDsR1ud",
  "key13": "2HGosR3kkEpTpmUUHDsYjxYYdo1MaFiXafy5vZ9rrxB9M8LcuVDDRzCbnvZKVKSCTV8hKfkL9nGSAQ7a89qurs9s",
  "key14": "5MYm4ZYPEqohiLwZwULCNouX5CBgmTCd16YdTYkKzUia9pUpknFhDGWGWAb6p7T38Hu3mvxpBVXm7dKBSPhBiv2p",
  "key15": "25cJ4aN9Hsyc4WyjXksiZxZafEDnLLvKRTZkoUprMxE5Wjvv97Eh5rBpoMggiUZFqn1K1rtasVWm3zV5Nr39ZPBw",
  "key16": "5c4RUtP99dKVoqWa3Jyese2YsFxjEFUb12uzTVFfvtnbsYs7ofwB8XdmASn1FKRMopXG7CBdG6R7FkbFas8ndFsV",
  "key17": "5XuSkDHXDi6rE6hX4bhqPhrqZNTDnfKCpcVn7Rc6wEm6V15fQX1RGetiTZEvebsQ85moobNPi2Ga1XjdiqVDvwFC",
  "key18": "5SvK1A4YcyeGtUVGDHsshCTzkWj81oepmEnSFm6wwij6W1SMsMWK9WDhQyn2qRrwmRTerd6FoPTqmC3Uck3bPSng",
  "key19": "PFxUdYfKf6iTHKLrj97sLBRQd25CNatSUhbsVrmqtW93KngutbX99yMGLQ5ASuzz4veCCT92oRYrbL26eXgCVKn",
  "key20": "4fwEWbSboJ4UPMq7KePBvYBm9KkH8fcgSySLhdAE3EtwrUS1ugzF2ZGCSe7biQDrMEM2Mqi9otssqEmzJpYLM2aa",
  "key21": "4qzMsxWy3tieMS4F5W89f64s4ArPwAtqkGXZ9Y8UJPrLwxGYduU9EShxE8r1m5rTECcYSyV6kZEuwcm1192YqMXj",
  "key22": "4eCo1LmNDw5cE9212CV59MEbxZvFbRmgy5CJ81ueXAUjQUbPJ7QentFjPVP8X1YtuG2suzfyN8TesCMePvzotHB6",
  "key23": "AzgGKN2JPguyrmngedfcHQhsnabmBjgRSyBpxAC1wpnMSJvLb5bJvj1XtgxiYF73CnaP8CLfNrGwSFX3rof78pu",
  "key24": "tcFhoj7JKZDB6opTVYfZE526SZJERS77DNK2z6DKubQzGJkL7Sd3u2P1ycpPouxcJFH7AJaNXwbAmp5o9LTNhN7",
  "key25": "4cpypWruQ9u4XU7wsDsj9GxzWyDjyTCPQ8ESdSNqYWLUvDPWv4E3TfwGmqQtF6fDuViidJCyRJNRUeV5ip66ADAw",
  "key26": "5GoK4VFJ8TbfV6p8ehaMd71KyLrswnYySbeZeUZmCXZ1Mnr6rh9hLbHAyRY6njmnTYWNQjji96x6dGdWvH8mbWUe",
  "key27": "5jJg3MGWSR1LAEetLUTu4CccAPtUT6FhdSik35gv8nUTCWuqhdWkd8fmhmXU9SLcte1PmaMWGrwYVR4ycHhTJeSy",
  "key28": "5prxAVWdwM2qAQwQBgUpMKs7a8TJz2hMLQYXFtqRjZb4FpkyJNbdYZhw84UkCKHT8rXdDZbta35J5gzhDVPqUoKx",
  "key29": "2wmjp86uTWRSkKL6avXYRh7XqQrTjtKRhnRPH1t2YAXWtCCRczJoLFzty8VS2xHWcUqWwDFpdTPg5DvKGY2X6Bte",
  "key30": "5Ft3RLgLnnJuNK9PuvmggeTnPDuSQhKEeiufwJ2chmreCwhHXMDDPuVuJsXQXnLZ3j7Fx75Ni776PvX5DB9J28Gy",
  "key31": "4Xs34ijZtVbYpjt975n5dntRFQgT83mSX5PJheg8DDFKSbQMwhDAWAgLo6oVN2s8FR4kLYho6jEdZzTHkBZgewzy",
  "key32": "aX1AC7CGFaPXwakshTVq4qexZiYPi61AgEMfWKTjkqdYpZvNmj9PPvAuJv1qiJvEFuRmAJXbUVLoYrsUjfC3grL",
  "key33": "4sKHiNWJjU8jdMXz9ucvB16biqsHnBBx2PxtDMQ28ePaf8xDerPx7JmzfwGA61dSHjGoJpYVuVKMZDeSTVHo2mTf",
  "key34": "BJC3UqqdGHnWs79g47U9g1T44BEQ3TAJaF79aPhzhPfoa8hr1QeffpBidG1Wv8NgHaEtjadcF3gknFMQegKukfV",
  "key35": "4b9fSEbA65Vg6LfXrdjvU6o2VXYtvn7MGKq1UQVsaUutKNeHZwiQpMzw2ZbmeD81n18WaMFtzBTAvvaHaU6TMGex",
  "key36": "WBhrymDyuQkQQGJ6TwzqZD52PYseH6Xhn4y3nvemDcqmTrha69nZZHW9QP4pmWcKDBcXMK8hYT59dGzG1GEVuGv",
  "key37": "35LcQXr45e4ZVdTwGCAMEhmdViZynLgCcWsxurZvsZACZn3rwquHb1H3AWqzndHBqMkzKp4qpMcZD7VsuJJg7mZ5",
  "key38": "EYJGkLq19bdscMHQbmU2TpAGE6EDBsvGEJKzRoNnPpcD3v5zHFFLRgb9T7pZLqArT6hKmUhwfmGLoXYL4pjaQkV",
  "key39": "24HoZWiiMmhSc2B9yHBo5uJ9uZJNmQpVuydJbHmJoJrf8MqbTbttUVxobsLyiZExV3m7zi9topwzzya1RVVDzurL",
  "key40": "4vN4Me2Hu91sboEKk1PuqvnDw56fY3tofgCnTdWgBW2d6ivsMen8SqP4aLaARanMKJL38uKZHAMGLMhA86swnbEF",
  "key41": "5YPpBf2nvSJ6yQg9R69iN6aV4x58Fhsmt1nE2okjiSmKtBGc9KtXbcaCWRzAeMj8CzfiKvhBBGcDqYmgnQcTiQXD",
  "key42": "BeZrr3cvJw1Q1cGN5yeyWme3ttp3pFFgBiqyr7EWACWygAfPTr8PXsduZAHvxVJzunF4AwRnJiLFtMh1fTW8css",
  "key43": "5sMsaB7aJsMtH8ufnhs7yoV9LYGUWWaA9ZSbJb6HPRAiZD7c5bPuCqKBpxPgeE3hkMRHsKxB6fmogEJx79jinEhX",
  "key44": "Dn6G15ZUuyuvL7bB9NA4kxGpCKzyNKnVu9f1FHCVnWf6SyGv8B5Mc1j53ni9vkwbKEroe5e311odQDdJmjDzDms",
  "key45": "5SsRK6xg3zSPGgKf28z779Gut2V48j73bSQi8kGJ8Ch6xW4uMf9gxTm6rUbiGX2JpmFTwYbQnHBE2pWKhEero6tz",
  "key46": "3rxjrNNPBp2Znk1fRJW5MByMQWXpf8AcUaiwMmfvPSTNmyXMkMGVTpj1nFKTqBdHXFTjKGQNRdqoxx1AYc9uh4GC",
  "key47": "7SZgkZFZvC9aPYRc19wawBMpNVViaohJSf17oHMCMFXDpSaeoG3Vmkyr9wSKCv4SUBct1Q19Rg3LGaLxaUDinet",
  "key48": "3AU87DdNpZe2BawchWMKJhkcNdyZjzuBJ5rpkaU8crP4DFcpSh4xjteEtKHd8mcCoe1fZ5PSNCXb14xMH2JEjWV5",
  "key49": "5wgY9EJoTWosZspm2nFEpTmN5LD5N2876LG9tzuiTcNaD4yfWae2seQKGCMKfGKPsLE2tj7LYE2txLYvLykuUA6V"
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
