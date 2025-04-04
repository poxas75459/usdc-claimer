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
    "4ziNfDE3nmbJJmFj7uht5HZ4uNAdLKwhQ8jNrNDCJL6pNrecRhDKDcVh25p9Zj4daHsfuBA6WnAZSwDRq7xdZdX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K1CH57wGjdy1dfSz7TaEczVPTPWmeBs8KfhtSgvGta9dhW8r4kmayHpAhKbLS7MNzwaeA4Z8ihx3TmZ4XmJZAXQ",
  "key1": "4sGPieXbTx7TaA5ArbYjC9dqemf4duyufhgXK6tnV1DphEPQvR9Yn9sbttYU2YC9se8Pwp5ivHRGx868WXnLjiTx",
  "key2": "4Msh25XWoKEM1Z4M4bJYNmhNkA9S6nLAF6qvNoea1PzH1VApS7zCk9MBQeptBwieb74gkyBNiumX8T78DNmgsT5u",
  "key3": "5Err9gQrBV6ikbFR7Jr6PXRYiehrqov8LpqLi93JmKwgRnREfGxjv7yApSdz4uC6qTAuos39pDGR7apkbkoSskjw",
  "key4": "4uSCbkxbJ41iSRvCh2kgt3j8MecuMc7jrxhzRmMvj8pLML4CtDi2hUYuDxaBVpM3fbT9WbJwnJwvZfrapUZvgJVF",
  "key5": "2VkrjucJY7Xhpx2bsR92Y9AJhijmD9ZGyM8QK1ak2aFfqT2NTrSmiuWHzCVchHoeyR1vhvgzwb3dL18hj74sWaV",
  "key6": "63wnLjLkWznYWEjgeYvCwx3m9JicirVyHnTtJnDwCwAdLQHPYyRge4ogRmtxb6chpSwRKCkwt43e84PtPZHc2yUT",
  "key7": "5KE4w64iTrcdeJnQuGu13yLsAhNoyRqbu9t8X4AsDAnt3KX9jzxyWvjcuLJj5RfnWymVeveYsGE3DCVEJ8gxj4Xc",
  "key8": "3rUYLe63Nw7GzYVAE9BhqTBrYQTuruPo8zPBw9VuBtfFVn5WTUxdrDCGtHFH1fFo8Kqw2bwGW5z9kxUL3Z5vsbR8",
  "key9": "4XpNDsQQgFiAoLqZhHPZRXAWniHEGTo5s6csb8vVDRAW9zLEACciJcT2Rg28Dx1C54LxT9PFPeNdY9z4bdguhLvJ",
  "key10": "5o5YgM9J1SqxpD8w4QG5JMtnAMtk8n6tKoUFrN2F1gmCb9JZUb9frVsmw1e8DDSxoAUrm55CTVznN54K39vtuu5e",
  "key11": "25f1RbAxzCmtgU6wzGJnbvptYzyAnCmGfkpttVdBhF2giY9T7ANrj8KZTSyk2yTo6bLupv3DFRggkougUW6ZLyTv",
  "key12": "3Uwqm4vH3ZQz7cLrn2uk9wU4o9h25N6z3ZMm39BzqFnpFzkAhKaqACqFJ5n37TFfE3LrZTx5wv3NK77BmFTR9AWk",
  "key13": "4pbGyTY8dxrNSu8Lkbt1fWRuJ1thUNzVk3ua7T2vdcnhiXWMpgGNbduMn158FBKJEsCQAYCDqVcqJMyzBkXzArSL",
  "key14": "4oViH99bDwnjbvjiMm7G59tTpsczSFo2khdXgHmkbjRYsQfpZMMWmvDieCeaTVY4H2WPveWdTxvSRwzfzuTYLzmg",
  "key15": "evRpmjUPdMFt5KCBS2uZxp4p7DQ5LMfXH2xyCnREYJt5Rgmu6Df8qRL6ychQnhE4MReRJDzhQeYPgua6hKMx3V8",
  "key16": "5yXjihYAxjuU1X5ZxWvZxxT4tfB2QyL91QZySAdnnaeB28LjE59VVb4BGoVWPuFP9WLL5T9qXYBD7zfE1WziJ1Ae",
  "key17": "4QEyE8J9sFcWEj3fj1rT4YLpTWFDL7Cgtv2RPtHYhQrV9ikr9jrXFJKt6Co5RiYCjhNYT81qnhq9jqKbezjnwvaR",
  "key18": "2Qb6pzrjujsFyhVPAxx2DDBqPc4AfhdyAZM6BGVDV9QgZAf7jhwMrAxrarTGtaneHzsF2t47jHEpKcdM5oZgB7SL",
  "key19": "56vdKSTGdsopMPkwVbzLvYZpB3MaZKSUrhanqDDcpZppiQEZgAJcg7S66HHskrkPG5wGNPy2Mho6A3tefDsAMJDk",
  "key20": "hCPuP3sNFACAWA9JHVBMd2GiRNwH142dMaqRmpBvX3kggX1e6ya6CMd4W3o2AwbNm5hUiHFqkVggApw7RtXeUqL",
  "key21": "2x1F8ujtBonZJ5fCTPCSNkeAxLt34NkyxNS2hUARtcpuV7XrijECBM6jyo68m9BqXJFoMAGQeLTK5YfN2rrYMDKG",
  "key22": "EuRkCeonpZAsBQa4zo5dNv5P99w4A7xtQrDxLy1pbow5bv98Lf77mZJ2yrkFkASb3gus4m7g5GtFnwGBcVzzwWn",
  "key23": "58E9gQtC41Ub4x5ARpusHdfK8iuSQ4ejDjaEXAod3rhWhorMBTyXd9kmPPPkzRYCE6C6C8eaGV2Nk4h7cs5iNQNV",
  "key24": "Ap9Ads44YCQU39ijzbcyjkF8baw1qq6k8oSFLJATdT2Jhy9HbbpV3AUDBXPYwPE7XFJ3XnKBLHKnVBhdJq4UqRP",
  "key25": "6aK8qS3o6tytqvYuvfqjMf4antfoeHkHwYxJWHGrrBAwfcU4tt2vNDsHbfcFYmwa83xxCPZYKpWKUf6WviyA4Gn",
  "key26": "5AYU8EgGh5c7wC77deV9XEhhLjHjCyCSrc1FGsPpak1idB861VLphCTxi4qcUKtr8ZFXBKGQab9cd7c27qhGr2ma",
  "key27": "28JexaravU7o3PZsB3WaGF6GNZhM67a21Nw3VGzEjh3NP4YfhoV56RgdeXB9VyYCAN2khRabiQu1yvcKF45Z6jxu",
  "key28": "4zAxJyPmRD2yo9WDn4MAMEofCfUTMEjLQedQdthzkceU6uei3gn6Ew8Jek6hvT5rZvF7E3VZXfp3mEHXCNg9K9Vf",
  "key29": "5s5rjhqsAshjHqAc6XCRgsxMKjVhEyWCGdxiMAah6RX8DZF8YC9GXVTwhirVdMVXKiPvUwqSTt2p1yVrVmbkjDKY",
  "key30": "4y44CFjkYY4BEv34eERcjuyDUE4CpZFAVKGwawJP6eZ6cvE7K22FB9iDaHC4mbD6xpfbP9juxFp8oEKkkRaFWyy1",
  "key31": "4qj72JxG6nhuQLct4cdQYWpvCSk3spxHhj8uuZ6u8HKArEdF7fkjBC6w5f9LUpQ34JqqKMeuej4fsbGhiuEsMsuM",
  "key32": "vabs1JrMNFqxCTJ2v8oqJ7ZHb5FiB4fF2LTPb2HegCby2oEBhJ5wEbU2ni2CToCigPavhtUierCce5118aBkfYs"
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
