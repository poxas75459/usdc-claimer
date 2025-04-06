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
    "zUoMPVuaYTe2QSJLdFo1YsYW4AvXzEyUc9YAzbnxqZqQf4XwHa5LYkP2xYJStDzUrEmfG8cNKEurZZtXFsaCE6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HFEMjvFYEKzi26x7Dquy2YescpTe5QNXmsDpiMBHHroD4oMJEp7N9zLGrwqr5E4m56brJLk9r5D2kkz1LktcRXA",
  "key1": "3NxjnHL6yK4q1Aqcyjb3gJyebZBK61EsZCkxmPKV1mSnanqivarcoeypaxhm1cH1jBQkNFnLk1tRtFtYdsgX6VmE",
  "key2": "UajrJAjPiZZx1zWqdPN4hir3H7GXgWqDahqeYM5oXSNtBNKKXM7ew7s4jFY7nAuHyfdv47eR7inCGnfq2qoTVRj",
  "key3": "5ykZxw5Wg9YVZTeMMuQpeLjMVEdMUAGkdW8gfY6zLpMpeac7P6F68Bu8jbpEbAfbqRDtSGcMpanCw17YVuf5SZXa",
  "key4": "2LCKLWDXAqwx6xxA3jZL4cwkLoEJoR5PpaKb2pVEB3zLoApR3hM4URSfWqn3idGmgAUiFbN26LMSStK2PY3MLyZK",
  "key5": "447V9A5dZCRtL63KF78pGcyuQHHNgoNa9KohpPw2wp1Xgd9xEtR5GURwwZRCJfCpGcrQSepy9i87t4FJpLaagRKK",
  "key6": "eEkHoYZTgdXmKJzg3RuXVNJMdvo4mDYvf8DK6SpiDTeC9mF53J571byWdBArSFvicnb7r5NQsM8pYJEGnUkGbC2",
  "key7": "3C9CFG6DGHy5eMg8Pgi3xWtL1uNMAebChMqjVaqUyQMJ2Cb2VPZkaL27LmnEMEkDHAFWxEWaDRZ6TiByGgqVtpHW",
  "key8": "4jibZ89QG35Ze1TBU4ezjVL4hUCwHgEBExdzymqnpGhJLKYzJJ2jEMV6tkrzvis3ASn92u2vp9uUci4TcVSdMPMU",
  "key9": "53LTwHUPtLUov59NpT2BQTGLu7zCdcP6xRdRCqJBMWfBvv3PkmUtRd69K5NmogqXeayeyJksXrjbLsktPjW1uD5G",
  "key10": "3ruuNdjWfQEmfQH23W8n2UWN5NDcm6v11cDKZErzzoheP6ZxH4TuzUZdpjXmwD2VrKUgksjFXs8L6KNKkypbR2TT",
  "key11": "2pnHwcLa73kzefS9HFoePCebX1VXhBzywub9HaKhytBJ26hVetJ2kdtfaYjaZtAovzf9jWPWh6y5iuswAh49jNa5",
  "key12": "2Z8reFVSN8BDPpkHGFhaZtqYieWRi7mepi4WxBD6ZovhuvFP8aEVHC8xtGfpnz5CJwqZAKh7JqnS4eWvwUvrwH3s",
  "key13": "JtuPtNqd7rE3Hi4YvLzfKecbyRZwn9t5oMcjmtFk2fj7WEqkQ6zfvsrHb4P89u2gVT4A7d4zrr2RRYoiiyfSZ9s",
  "key14": "jvgrzrMRhxQSR6S6S5jtWiHwWfbTb1TZcEPyJAf6BoFpDH5Tbk31NB3NpCgmMBQrUgNCzZFtg2Jxwp14Lr893hp",
  "key15": "5bjf59rPiGKjtYrPKCTg9W1NgCHWPb2jRTsxfuJ4isgjXAZKMmrtmaeiB26dhgy9hZ5WYNx8SUakuPhaGDpKT7yT",
  "key16": "29cdrjtTrAWCKUzBMaBbzb2S1xQ3wA1TJz9cu7GoZoFL23uLHQJatnUniSwPiuGaYQ4qX4A8epGybtNA5BepvDgR",
  "key17": "2yNj6SHGnmYLogfWghdqxifUTjYDzA1NpZwdrwtMgYQWMZuCChjbPTMEkrzgEP1MyeYQYBLVxRiicRqUxSTtfjq",
  "key18": "4Z35u3yWT6B3af7rbWa1CfTkEqA8kqdGjncTRXz145rbRHpTUBxwR91RuPcNcuvuYq5V9hh8aU7FLZqwU2dmiG9n",
  "key19": "5rajkDCiZfwYRYvsZiigtKJfGvrhJahsLqfhwsYgyQ4KvMefvtkZpb5AWfPafpArzpx8e3q1YrETKVxfYfS3iFGm",
  "key20": "2h4Sp4LTUiZAjbcxgJhNB8RNgrHuCZFdhM3xxPcnVCEb3cuNy1NqWfk7BXhGGcVfyWJcKTzjRX5r8oDyY3NFRpwF",
  "key21": "43fWzVunDRxU1yGR8rESiCfeNiTCzbYnr1dHThNvzdTwDwnNL3suFJtbW8ByL53ATkYJj5ewUFqcumh7xSngaYdL",
  "key22": "5uZ2ByKVdvw27zbtT5ejqMSbanZXzHsFxGRrHmGx4uXjg5F3pzsqUcf6DLoeLkpKFhBhGXXKeaTjMc55j1xfegCh",
  "key23": "3TiPDLL5qFqa8t1VUrVDX3MHaHKqn2ndorUkQtbdntq3mfoGxc4CaeEP6xtKAWStj86CfL76UPA8QqwZ12DrWjJT",
  "key24": "2NYnebCcgR4FYMuEPz7Nyffi86BK6CjVrfjFm5XH49oTJUUGY4tEDtmdtXnFFsprJwrJA1GhK8NTYEKsXRVoKdd8",
  "key25": "24WY3bvXeLpzd635Ca8jqK3Je6p4AKQjCSrd1LdbRGqfD4mNsG9ta6Ht6UNtiHU4hZE7unqJjaDBg7X6PtowEDfs",
  "key26": "dyjURwBKDTrz6ojzb8SMDudVd8aMC5MAX6sWzBkeDxU9AugonWsVri7nLto8hKV4qr2R4Scg98gBWNfPeMbePyv",
  "key27": "43v6L55JMZZaD1p99SaiZLa1gt1p5hKMPjf4mWLB4bfKPGmzLwkqdHs5TbDFcgiKHkfhhy2pTxVZz6d2BNDeicis",
  "key28": "3BKZ9398MgwM4J2uN4UfMowXobDucJm5xW97q5DSUqeC1sxw3qBnbjUdXAguAqaUnq26b8omRUTNtc4TdkeJASTV",
  "key29": "4VSJ7PKXn3AZcL26xdSpLHgvBpfGsCJiLuiodbct5pCJi1ux4Npg8Zv7SdER1xg1oJyHMr5b774XL4WVzdevVqVM",
  "key30": "GeFNFuS4NjbifjguYsRpAmHJGeBEjetaGNmSwbesGcxJHnq6VV9xHHm8vZKcmcP52JGRxv6AtELs5Y7fkEYf7im",
  "key31": "dewSzrXmAvrenoxvDv1yiAHduDTktmZH4oKJYgFnM6iMwmVL8tUyBZjLqzdFojYbjWKNUDbpqCusfBKq8QnjRhM",
  "key32": "5RQrcu2THbdUce6KSVrkwR1MEmjh31QzAT24GzuZ5nvXYMRN6N55xymsiCdyXgT6UCW2tnqbYQwdze7WmxGbMqix",
  "key33": "2pPxgfYkZsdBMR3ayBLi3Yjpaie6VtacPY14Zi93VZwBGcrpb2qmvxxKzKpx52Ah4DfrdgCJFbApYeYZHRxXrUKR",
  "key34": "2TGkHw2F8NPavQ8TUTqVZ92g6W3rVPkppUQveMhu2eLoCAcunm7wWEZEY5L4ssoejnLdPfKWVxEkc2YmyWd2FevG",
  "key35": "a4TtKkQFfNsRS7WqeEnrMNVk3FLmFfr2ASF5RvJrPSnaNaPFmLGkB2AnP6aVTS8eBRct8RmxNa5Z7ERdmMQFzwe"
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
