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
    "21pPksRppZed8cdFQxu86fN1Hs38nVHKPBWnmxgvL7c56VGxKMXQaK6Fn29hAgPC3DQvMq4gu66fKWdKqDQhcmne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLBSWtQKbbUGTGy1TyzqCathQdt7Jz1sdmbiBHV5P3AAhTVVGqL8BJ1cVP9acxqxHzZtrazy9JXdQPreFgCK8P5",
  "key1": "vk5g4R36J8NYqgf4U51zmZyJWkkKJavUBMeBjtTXM3doVpGtGE9twVDAr4T74qrmEod1AVCAWXgbTehRH5CrTpw",
  "key2": "2NGJgmbErrLDTqELmKSrqJBXXtfYnZQJGeshZpTmo4pVHoig76GQ6yy3i1RVAxKAXtyUY44qwfdrmKUiDD45YFUG",
  "key3": "63QHE3JB57hhdNVEEUiFVod3YyDC18Sog65VWEcMx6AsBMm3eRrwJDAxkNvL8Uvpos8ANob3bEo9kAF1SwTv7dgk",
  "key4": "TQTasdsbMwE1azUafbWTqb4cW5oDhPc2pjdeeVxAFxPSBRxKuTKDmHMqequvVr74qYsw3yuNTcQT2PoLTrWsAgW",
  "key5": "HPhyTTBVZxQp6xo1fkgj9fUMy5My8ovQTH5TBuGuvk5c8hAtw5md4DMBDzkEs6Dcca13MAfyAYVvazpb3tvUVSc",
  "key6": "41g211J3Bqp1fBxyXXn56V5gqCgKTaAjDdARKotKEoHWnRmpTVvUPawzTrPtzGYeFNrzGGjmZH3YzkVrNCEQaWyD",
  "key7": "5TuiQkMfJeoe2cSsMZdAHALZAgSDzqFcg5c4YCjKo4VemrA5rtwaGY4LuKojKEwn7kQtPJwENH3kZm4sAzpaGFVE",
  "key8": "3z4sU3zy38E2q66PKqVGVutpcKbbsGxdHywqCPJB2A94sgXfD9VWMkGPig4WLWh9eMx9BJoeLdVAU2Z68zrEtmxa",
  "key9": "5dnKw2hJBJ4ZQifirzLfEUWZ8BN5wqYoZpSzdK64RNjeksfxW1yrh8tRc6ap9aFkKq7svA1wL5MFs4sJmMGYM69g",
  "key10": "q5hZ13pZcxq39ZuRAWiMLFQUaBTn4bocYuQnixPaM83JPGgRiGQ1muJHYKR2B3zS3kAG34MV4Dp2ZynEt895FJW",
  "key11": "3vFNQCYfk4YRAFf6CQGSMTosx2EVo1zY9hc3AXJNhPhHvwAozsAB4o3sxoNrdN19ZvU5SLZBt1rUmmoYanu46w66",
  "key12": "4nhfvCisVNg8b2K59HXEGN2KZPwFCEovK1o6E15Jn2D4zVtPjSQJF6DjGUmNF6RDiEYYS7LvMzW4evLZUYK3VjVC",
  "key13": "2UGDA5dzFJNWQeXUKKgKMg4KHASaEVEz4hjMaS9B5DERHPXQFFd4fWDV1iqMtgRHcgcsc1j1WX471JxsqbLqPKFG",
  "key14": "3xoK25JY8JmKaxHF8xqaaAQVzqcE5dtGA9WrpchPethPfbWAgZYnHNgTq8HRKTNNKzxixoTMQrbuuV12qmEyKwYZ",
  "key15": "4FcXkD2AfgZkEHV1GQBkAxaSdBmAcxnJLTMunTVtbzz4jTFvZqc8W5VLPXA5nYLHoX5BLTjz6TZctBQQ31562oTo",
  "key16": "3u4P7HnqvYVpyD9iT4sSnvZdfLR9EHPb6iGxSUFpFKzKNqWAKSXbP8C8vUEkzXxQ35g4unXMMxFXH2wcxogzGEux",
  "key17": "BJxZE2yM55hb17wzRedtgr78HyNZCjFaFAwcQz1QbsrR4fnzrYGKAxykSFsAsgsxfPf7Hoqr2F4LvEezwf5PTWU",
  "key18": "opQDumUXhhMZBcbLR2rv3zNvgE9SRkZXhycSJj2pJFJZkoQQT3K4irdEdukcg8k4Uzox1xaJMTo6WE51DjvEpP9",
  "key19": "FnpNC2KmVE1hXVgZy8mDPnNSbdVWdJaVkBCf4aFBMxLHp1csFtgP1DXcJWVEijn19iEUaZmHFZWwEU7ccLf39tf",
  "key20": "2Eix226vS4BE4PnoT9EPpTMYEmPPge3fSteoHqbkpFdbfgKSgjKxjSDwwKWponXQS4zi42Q9AZVy1vdfNRD9Gw6K",
  "key21": "fkgsyWkWgd5Wkzz9kJTFy8Zq7NU2QFoxTApJM1QM1qcXS6ZrhyDJMqyW8QUGqsLG2cPzsL46Zy772ntXqX1R7Bs",
  "key22": "EYX1Dya3izVUTDxQx85CnbkepVVmp9Cnd3mGsP7PAfAkmkc2PLVtPWTzaGvm1nxbDtqFPazE6Fqor2gXAqLqS7m",
  "key23": "55PKfSEvoWeRckaxPD4xpguXRpoCkQPiEM2dfyFP7EbRi6ZWc4QGqxcEVpZziP4Ch49WvzHYSobftQjeQfdNkUSx",
  "key24": "4JbtweyTwDLekdBQC29HvzmebQJ7J4FVWwxNsmaCW1Xz1nvz9X9sfiwYi9QWevR9YGCWUdJUdeNnBwU15Q5neZUz",
  "key25": "3qeppC3iQ7kf73NonHujEQXBXDq8TD1UYRuiywtAbfhYMyGp2dKMxFLXnVnXCkjXdaunih3RP7PyyFC2jbDaRkhy",
  "key26": "5dWuPYce5DTDizFr9bCU4UD6RGxY2ENapfjH6Y6ZP4D6KF6AcQ2x7UvDRncyi4z3SXU4zHvkRQuiChQReJA8FRjX",
  "key27": "3Rax1HwPzniMcwCFkWEQkcDz4VNfiymtGJVtqCSWybzXoqpwa8NBtVtbHujQRFy6bEDQnCN3jpvbab2i66evgdKf",
  "key28": "57YXxFBYwNk8fAVpjmUaBhU5xPqhzCobb6ktmu8MfdaDg5QZL5eV8wRiytpZBSUbuCrqigXGF9inRDMELbHN8JF3",
  "key29": "mkWJuxUtpbpDwRs71HN7khEUuXgvvSpD55qV3XdmvWYNdqsSRzgtWWmokmccYVnCV39j9z93ShQh3uJaBee8w56",
  "key30": "3X5MNh6QpNzDevcYfqXhxgLkXft4ASpxjuRbQTusm2sd96ybvriWog2hT6v7wQuLx2rY4MyCVGGSoPajJbo1NbHX",
  "key31": "5iJw8nVrLcjpG4KY9QwrFZD4JsgkhTkbx1hk59LWn1MyDdm3GA515XyfYDEuZcJTPzTmoQaXhRcGJFUBo1qjenJS",
  "key32": "74B3LGEkPq6vKGcZTkeiiUdheM2pEVg1JeDTyi9QEapi7M3nvcXzLwPHuYDyw1Mqu2WnJuKx6rTNo8hUbgoG3m6",
  "key33": "4mHyRa2EkVY4zpqNcwwzHCsPF7qJCmmafbFdpZmRfadsTTYANGpXyS11Uptk2MxfDVkEpcrWdfkQJqALDVhp3FHz",
  "key34": "qhKRmyhhp3Ef9Diq3KWhCDEVkBd9ChjN7Jh3vmjDttsxaca2qEJmLWNQuJFCwBAUQqfLSY1MGLtwgECDqdsyH3p",
  "key35": "21jGs79kiuVQZARaxxk4K316df9onrTcPQDK7QAHMS3Zntq1SskRYAnGr6SvPuKtFjdunocAXqKdY2GPWJYpgVxK",
  "key36": "2amj1LbeezTZTRHpQNotMfL1STY3tCNnknGs4DK3mkjwrGdTxzBx5WjsMS5f379jwyz9VJgnZousR2KMZySdrEuz",
  "key37": "U8VSgNHMShPbBAndEnUgvKFE3RxuBAEvAg6WL6eVwa1o99HTHPWQQUF6uSvmDaJjBscTFsiZfD6jydMQU3SxdtB",
  "key38": "5L7bt92bWVabq5cdkc9mqRojPmB1ghHcYLpaWY87p49EZNWamDKkSETMqush2t3Yt9N4NMj2zxdtrnEB39owGaET",
  "key39": "jXdevhVtwykcW4h5RJ3cfZRfoBPSzZsSU3kgsH6UaLVNVBf5E4GzdSgbtvchGVnPxiEQfMCoSNKJ1WEUJBQdzrp",
  "key40": "5tQzjt47iWBAGPcd6aSaCJbW66We3K91GdqABtVauxKM6jk6MqjszMxv4JGW7t7vvxgmJYVXZaZJnZxHJgKeuHMK",
  "key41": "2jM854W3Aq7mbf7wNrxCaPPFRcPVP6uqtbZ3g9jBD8HTzufcpPMcbAvjtH94sCEzPAry31gFwMmHpmM199cGeQFG",
  "key42": "5cbPXqxV2KCy178RCk9rx68wt34PdNjgZyCXwNaMQKFJAGLaaxPkscsjfwPnJeZzNEJFERpGHSa4JTmuy3rRrmeU",
  "key43": "4uSGHgSeb8KL8csPbsThGZU5ChQKMJPeVPSzrRoekWmHGPi9wWYNWQEoS95gXuegHwGd5Xi2cmjzFezw6FKTdbKM",
  "key44": "2ykd9x5wNLpy3nhDstv6AxBQsKD9vU1moZ84T6MosZUf1PgDZPsPKRkNTBRTg9WtYxeNs4qVYqPrC6Kf9BeqvzUG",
  "key45": "48xZN5ESD14j2xKKyi2bbFpAq2ZNNdWMeiEFRnzetjYfgxknSVdGUXyM4kzAd7tePTMoyWCzWaZ6ukbgbXtRsAcM",
  "key46": "5jA6TSnihyAGkoe7aYFhAvAXq1ySAWFPasg1QLR28NnQ7eTJtt4y4fSDp9Eb3crgaMVCBxpkfpSfA2TmrXeS4axq",
  "key47": "5J7Q33AtrG5U5QMTvHXFpawcLvYbRW39AdPhBA8SoZts3SzUXUSZTpTJStL9ZHc57hQE3HK9CKVPFufEusFpbF6x"
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
