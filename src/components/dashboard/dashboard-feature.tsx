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
    "5SrQgPqAx88JkmfZikgW56vkdRD2mHAzzKHg9t591Tnd4Z8hf3iMbhQ5yeWvijz8AnhTKyRpzbJ4BoUiK6Y2XVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JTRsKN7odTQTbr4X8YL72mEVwoWLGcuQ1hhxZUjgmFxMCFLgVGB5CxBXANQPnb6648154Yjmyb14f5MKCgpsUcY",
  "key1": "3iVnNMb87u4pd7dbfmf4Hd11jDm6skGfsaQcmxCULSLkRd8f9tc4QSSkUJpeU3w7XZbUF2CQyj1cdwk31Pj1i9Vd",
  "key2": "23mT9tDFVSE9tXuSzH3Ymev1RcKcdyU85gDbjgM8CixodGnz737rU1f426FZUB6ZBhSrG2u6Yrc5QbKgzAv1RMoh",
  "key3": "2b6dZd1mSsRm4W82JqN4JMWW6CqEWDfp3mTkQhvx3TkZusSGMY6orpG5X4mocGrSntCMq5Xcw2DLh7p6tQEUyAiR",
  "key4": "ipqxjJdc37zRvrUfnqiqCW25zBcXZkp8gVVUS6sbRkzeajHWmJxh4HLdhCF2eegRaTAwD8ESyysdN2s6MWzaUFx",
  "key5": "5EYDKwznHFvoXCxvDAXAiu3zwhz4ZDNxdkiZVkkM9kzxborEigiVJ6pu39fJGpLEUyRQfPTcsSpBWWy6ew5jPbYc",
  "key6": "5YetDRLD5wT21vy3UjW1sQHYQhkrAdEH5bY2x1sfySkj63GStou9UX6EQHMrGksEwBkTFuT6S1xDiTWSGQbD6J7P",
  "key7": "5dgsRRzHWrj4QfqSAns2MM9sjS2B9UwA3NpHMCDX9pNfez3djekySTPBPfqfLszQGjx6E4uqxtNo1wsHZgBPMurs",
  "key8": "5QGtYSZQd3rDZx87P4CNbniVSeyWU5KUKC2CuV175RQCvqYiE7fKamj2d7X3ZtVQ1Cn3qjzgGARR6or1TF2vzSvs",
  "key9": "4LuViZpWGeNGTqCjSUyxrQgi8fBFYhvaiPeoS87eS72W3xuXNd59jz74x2g6AL32SAtqar2vZckvDaGuKMgKMLxe",
  "key10": "4CLzvvrJ7oSoojJkLPyhSwu8EETNAZmpoTnkMonV8mBpKvBp1WwbL2jCFzFN3wA2yJEUV9YtHWbWA7j11zaHgqYk",
  "key11": "gw3YFF5vESYVvs7rHDLbDKAfWXUoaxN7mjJbqNPnd2mojNxL8VETLNYhD7TJbLhAhYmJ5tNrqKreUk4xn34yA3r",
  "key12": "2LDc6XpUgcG3recuLm8JT1btx9hyDhqmCCcprp4J35EE61Z6pJmfxwQakb4abg5L9ZRX5im33sonz5myeHzXAiQJ",
  "key13": "4tSf3uaqsuSnr1vHEGVtC2QwKov4WCofZMbFAJNvyrKXmBEJfTP7iWM8S4GwmLZmccZ1W4u9hjjZmXfnXkzabkPm",
  "key14": "3oJQdyb1HXqjHsM8qp9fnW6kyAq9DbVUfegtWjJnPChu53UzAV4273RZR3T8JiqHGxihZ8Y4WdqFvBtvpzZBXitr",
  "key15": "323TMRP2eSU1EWn6kRLaRS9AYCsA7sHjpNye8gTLEeZtiheTqpopDVauijw6pL2TX6LqoPJ62cv7jGn5JEPwgVRU",
  "key16": "4JdJrMS2oE25pswcnZRJQLN3PbgCt5KTzJHuiicGnsyU6XYU3YL4JkBGyiQbvSqH6L6qFP7MT6zz1Jy5NngU5crB",
  "key17": "3N264wGktSAsVmQE7SiXrVCn9ZVPTdhADV2cV6hJRyr3XG5MXDwbhHjVvZWTEL5ZAuioqWtLihmNH5LvWVYvGyHj",
  "key18": "4N5oZnmGE3PF9p3mwEj244sR6D3jiqTtrUmjkhCuks42zy8RwszVVADYoZb7az7Q7BWLKuJhDnp9x1FoSAGetxAR",
  "key19": "3carEhMLu57AMZb4NL71Sa38UEcA31yfR4WtrXURXxKAogyrnhPwpvkys1zfuwLdtwUMfLdcMD9tSaomNVBCmouW",
  "key20": "3jq5qW81Zz9oysZUxgUAWn2Yqfr2sN6wbgs85ov6eYuacxEansBDMN7Zn9Huea6979wWRNMqPRykBKS9quWXJrQv",
  "key21": "rJKrjwyfWTSiSyT5cq4BnP9Y4wakvBSkaRmSG5xM5KkMJJmiN6bhvv7N2TSpVFgppMKqY69fzDqB8NcJdXMRVdy",
  "key22": "ADGqcTMb2177dapbuXWbt5v3pADbU6RhzLWbKfaafqFVZiXLDtBVb9rTquSScucJgdwYWuz5yJnrU44okH1EmhL",
  "key23": "3GsTkyWsGf5dwUmosReRBQBngWnpVAfCmHZgPfymqNkSCyVTxB5CFVdodzqwPRLJHWri24FwnDMrDRrEboucYTUL",
  "key24": "5wbjePn8avn312wYsuCS2kqCb5miDbJukxjSkTBL1LzEFNgw8WBmQ87UvJxXEpwvSuqh4wtCKn3zQRJ1s13v1LxB",
  "key25": "VBfdb1kZaapsLHjFJyiYTRDJ733DtnAkrAiYtuxX9yXwkb2kmcqZdtPK84JPcvQSqdj2nE1NuZxSVnP7aZ6Uowv",
  "key26": "5vnhR4Qh7pyDfgiFBmDXyPRAYVvN2xMEHTTEJ6cjAjutfypcg17aojTHUt2owF8JaU2VUMwgop95ye3RibcV2UDe",
  "key27": "3Eqz8JESDQDneBtmYwBAeWLHk5S8oRMpzqJyiuny1X8YFui8SSbT7QHVT7Xc1DvQLbJw1peANfCUjtZPCiNpGVjp",
  "key28": "5SCGZTPaSnpezqr7fN8vGsjMoNRNi4pTSw6MDMt3nJFPF6hi88LE3gQSLZ9iUZEDjkPjhJUoVHM9vFCuQxdWnmTZ",
  "key29": "5GwtrauiVH81ViW7Ky5qLC3KVQSURZFCaF4wS1YjJNLF6UDmmA3SiQzQ9TePq229imJ7WRYTxJtYiCsy4VwYHWLB",
  "key30": "5MqC1pkVpU6SiMudXhiHgvahFr99Busk8QWW7cbyien34CEhejnzY3XQeqh539wcD2webFmtq41wWeFJVQp4yoK9",
  "key31": "2eTCmaoJzokAxM8tXeqjPDim8o7L2KhqoEguZCFW2yNekn6Ft5Hw7k2bL889hcMJR3HMWAyQyCu8KZhTAYMWEAzG",
  "key32": "irypHj2Bk4SH2iJun6sU5RMsmGFmchGHW3PyHwEF89Q6ZbCLrMpyjSLgyv3qt5UhvBMDfez1iwnfoQxHDFwnrKX",
  "key33": "2Q2u5YfGactfFvhMp9HDtX87PWsirkZr5naK1ovXt8KFfMFngy6NdPKvPZpAAZRacosDJ2ij4F2bM6J9XcR92Nop",
  "key34": "vZMok97wJsJFUBmMqQ9ijRoo2AKL8uEoYZnPSLJ3taiSrgXgzNViLJ8oCAcVaNPRkMB2bE1ZaJVkGDKYoDJYkow",
  "key35": "JyzJvvcBW39hrid6t8dN1qZG6mQspZMqMg2UxNH6SFHDUQSjFRurV1KVh2LxW1hNLPG8GchjUMvdg2UfrSLQuiY",
  "key36": "XKuoiN9MxKG2o6GTYLgR33Pr9ubwYFe37jkes46nddoCL4i7fmWh7Dmcv2KTUZL8JBLSHugVnNk6DpJrTsDZN53",
  "key37": "3TCvrGxtxHqgoR7FA7wfmAorKKb9oyVfmbBdkmYjJzZRAZ7qNPz5QE3TWuB9xHkePwKxGxPzx5ejjbZHUctrwQZP",
  "key38": "kU7Ero4y4YwmrowrfmC16RnmiF3FYoUEeYmpQqzvLx1fxqx1HHXkGExfno8jkRzdVjS1wCrPu8DGfKBfHPgUZHg",
  "key39": "cn36y73n3VTHqTmFDAaU43YkabNL6GWMewLr9vtenCvefAq5tRj7gHokySBbN1PK8vi8DjSyzTmv7uQwv2pWQK9",
  "key40": "3iLCdKzQD547KKx4vZf4zEJtXbvhf5dHn2dpP3wTNDUWuk18iNMaQtjdq3WJMpk5kjQpxzP6f4Dq7No1fdaLR8Hf",
  "key41": "m49Run73DbhZEdMh7kUtdrYfZaBis46PTgjoLcyRcoAd4q2Gmj6DPgVpHDEk4QTVFYip5ubtfz2KUgkCbR7nD2L",
  "key42": "4xiFfH3AxoLsP8veSM3r4C2U4JeoP4Q96jpAKVzXTQ4bMX8z1hoLhG3kyVsU4xwWnCw4JKZm4YzvVv4VJfyu576u",
  "key43": "2CU9h2M1UonFRHdxSCzDxLrwh3jtYjYcZY8rgL7QWR72EwZeeZw6XzbruXTdHaqfBiXJPUKgSSdhGeVGaioNU5pA"
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
