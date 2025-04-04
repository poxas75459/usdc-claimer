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
    "2jD1SsrHE9DkFpT5RGKWjgNV72ByENxCtkpHdbYGfn3fM4SahrsDBsLT5dS7i3yKsJt3Tay3XPnMq9DxJBSVbyaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7J424Bg3veJxRa4dBfoSpm4zL3x5nhD9tdUKkSXFU4tUgrqc1keE1GAZ6yrqh46TvBoUjNdJZ8huhwAvSsjq2x",
  "key1": "55CC9ocCtqcXQiGJMumxsXn9ZPmZZgRvcrk8ugZGNNWyjQZfuUsjs7F4XRYXdcuTgqq2JBYGPdcaqAsWxTCQdMHm",
  "key2": "52MjDKhoZatTd6h9hnocedeuRy8PncmQYNSnCX7CLxW2yhuFu9v9bZPbeRG2v9QuvS5BFVbz75i67euv83FKxbP8",
  "key3": "5hVYaXSHBhsrpRHn64c1M7mmKmRZqz2qTSmgATmCSVHMzB3Pz8psWq5SdGDbUWXsA8FGmZhSBmagVpq5VzUFgBvX",
  "key4": "2USsdRfvTosCppbzRzAPknwfbiSkvcTK5QpeCyP8p8u9YfJJeCUKRxwisBSWypyAFmnw4gP683u69Ynf9Dsb1ffW",
  "key5": "4J5KKGNtDmcAkeghzCZXR48TBYNCDxYYvPYfdV6cVoBza7X73NUjLCjsPJ3EauogDkgGAy4cvoT7n2PxZaevWr6u",
  "key6": "4n4nkuy5kdPfut1Evu5g33kr8Zvahk9kipaWS4UFMiNCuk8A7BZb6rDKDYTDqH2azHGZWcgNMCC7XYcNSNeMiXUq",
  "key7": "5seGa1LaEULyGuk8zV1oxmwa5dJRggweyxgUDsySBVyopPTSfjZVeeHU5KrusDmg5idNP3wrCRasLcooM6nwB8aw",
  "key8": "5xQWW7moYGR6zyt7jyGJrWX1rzkxQVYnjMESDTxJGdwDe9mq6vX7ioD4Mw5ojTbKnpTk7jCBJFSEmuQVCZYvd5Pp",
  "key9": "2rzQHtn2DtWyCL5CJWXogMKaUNiiB7vtnCm5isrdjqDCFadNKKrZ6rwcDxs4MLj3ZaHdnWYERxKx8rD5jXpGkgvo",
  "key10": "2Z9MfW4D6HhgQ6tLZ5Q5JtCZ7pc99vsHtbJXWdnRZT77YhpFeU7MArGfVpt6NRcQRgTyyopn2yfTFKbUDaGRCxNP",
  "key11": "2ctsaByaxtGovMZbyT8H4ooLwWT65z3W3L7TTeHevndACPeYCKYx21FH83Zh61Lu4vBBtnHi4Ar6kqYNUBiDYt6y",
  "key12": "3dRDSPxotNnmYjjUVEdv2QG3Vznt3kPrGfmmCgKhNgS18mGBx47yibykjGCv2z9349dJkKLPZVV7nKBYbzE3SMwB",
  "key13": "4sNrAv9rDSfvi3GyfuwSy7bTNdt77N51icrjCxukMdTiwN2kwx5DC7sgPb9Pwo33XoE8gMHMgbtJ1DwvaG7rbufw",
  "key14": "4jSdAmSwc6eXLhAVTgcYnSkb5saq9mQrgYRss52bVvqi4BncTySLuEjQTonz2MoaeFnxHJ9nJekCYUKTm9rcwZqJ",
  "key15": "33fTGRoR9WUjcoPq84hZwDuTQz5WzJuh5fee8J9CAeoRw51kymbbxhXHQdWhnquxhKJBXbuDMRMHthNmXoBren82",
  "key16": "5sfVYVenELrQrEtUUFWNjsb1RcgiWoWmG5mF1TH1fkKPx6dXFZhzHctAjasm7fJ98v3WTT3N2XuFEJrYUBFWwjzL",
  "key17": "4DMoDfRm7sXBL3EVi7Wzj4sgo7TJFX5cMDDAvFNRScHequNr3Ni4Vo4JSnpEhD1G32Asc4d87wH1NcESA5oe4Hia",
  "key18": "4QqegtwaD41Ypgfzr673VNCWyj4BtBL3984ZizARnVqafjvdA3j7WhCSVHp4aeR7QvdfryjRmybKJkBZZYrSWXD6",
  "key19": "2e3mo868crs8YCHwaY3qxjBmFAECMiPNWt4LX2mwz53MmuinhdrPgfwn8vqKY5bDYsvjwXTzSpySzR4shhWLZX8T",
  "key20": "4DBgLnm3EP1Vv4Gwdg1MseRW3xaSbJFa4wgNVUhXKTzEXo45jh5WdSyYCq8ZhVF5XQcNyF3Qmm7i27zpyXz7vx8x",
  "key21": "53MX5JVAYcembYKS5T5zabffDPrWmqGLpr9fwKWtZdaPePJ2FghKDR6DfavwWLvCeu7HLgTvstAd5K6yawM9Tkr3",
  "key22": "3WAVb99eHSEa7XG3eFf23rkzV3gQPbEuawEXrHAhKc1Yv7uUkxdr7uQs97m3FWUaQhk8EUvtEBhsi1agF1s1a3yG",
  "key23": "343mhvKFywqkQ6q1sKvzQi53NDpob564GLM3JPeuQhtQv8uWDqhqnmUPr7wTbvHpqL8QEoRKL7NK8WWjDvG7abn6",
  "key24": "4yMbZ15RUACsX75cw52sMN9G7Jkm9K8FZ3EU2yipL59i9j2uQcDHwidSBRBxZNAC9skY9VUmxMhVEtGnrNs8Q919",
  "key25": "5rkqhcv8xdtz2y171Fy8MSSsFPfxywhYCGEShVw5sgJfV2pxjvB7P1Vg5KLfEtXDrDv2iTJ4CYWuwFeL9wg9ygKF",
  "key26": "2GqM79boKge39MEDXw7L7bynPhy5hmjnaBTtPWShXYi7qjC55qP2i4H79jsEPUecRUsBDLQeS3esnKVXpngmkuZK",
  "key27": "46UkUJs3dNbtV24Be7CUoP11cX8nktMxnuvCUDR9ZrZtLtiFmdpSNdZcDDhQwbRtT4xdA8nd9yqwuo75CBKTd8xM",
  "key28": "32ojHXiMhwoQd1hYDctWDv4gG46QvhzmX1fEG3PNLRq4UR33zLm7PMG9efw7Giwfyvfdfgv6pMNSYEhGaXncRnQN",
  "key29": "3RRGy6UkKG4ZgwY7hNbTF7S24jT2B3DzTLZjSCb5YnhQXNkjMQcQRDGWYSEnAPbkRpodTsNFTeNQTXDMmomqR32o",
  "key30": "57ebmGW6kqsdDW4f3qkYiG5PX46g4LHUo9AJQm1rykNt9wjfaR1ZL8cutkEkQTuPzomoiNuFYfULjLCywKERwwn",
  "key31": "47j23ar5yiYtiDRjz62D7Xm3YWYVmYxVruJF5PTRarx5ADoBsuRht7HndaZXturqkm9TV685MYZKxcWkBFQaJLi4",
  "key32": "5hWZTud84MJsmtaUUkB9KxQj8irnEEiECMsboZSZx9ALyRffSqjzhxb3kdt6vQSgFwZv1tQBW2yzarWQsjFyrLj4",
  "key33": "2QbWui2qgn1o3Sa1x3wVrvH9EkFyUnQpx11nvG4GPxt1smrsxbdokrHy5sQNNWzTLP6E28bqB8VPQ85htiNu74Lo",
  "key34": "5XW7iBSQsmX72SLfgdpRFSZPk334ytfHXP82dVLAm5PPffWEkzPQwdFYTkVATS6FHA7YJe9XCSjq6xxQwVLaumcH",
  "key35": "2XURmFnqvn3UQxfgREroAhL9EeS9fYEGUEzACxduFa8A39kuMMcVrE3s2MUmAV8k546J9xzENzd8QnHYB9kr3jvi",
  "key36": "2tghduKVi2KQ7rDH8u5BKyQVYMmjH6xhrJRZdafPtxhgRSW3rnBWR6FFCEMyXRV5piRYmvU8UrBqDqvRJxg6r7Sr",
  "key37": "54Mejia4bSPTq7VAJKe5kWKMChfCxzxnpvnGjFUVYUCi95c79aQWEdgD2dXGbddceq72EqBhH9y1PsSsmUernSyW",
  "key38": "5YfbUTftVV8WN4hFmVRUwCuqyuoYAFiPL5hzNw88yM8UaTzWd4jEQXi3E1fFvod4CqTR7qg2C1yjyb9hrpxzM8EX",
  "key39": "2r3mnd7Tc4qhZ4vBbgYiGBe6pPZLMbEmmwnK743t8R7pemhfrYdoAESX6BWnAZdvqVnsw6F1YqLYowutFudrckuR",
  "key40": "WcfVX1DGE59cRbMbMKdT4WFohtGqgtHnkCyWbfW44A4mvLv1wRCmpgKjScF6zBX5mCtgZDnaf2m2DcFrF1w2Vjr"
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
