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
    "64EzPxJoAqUtxKeuUYYE53wQ3oHGJrj3ixRcuuaerb8ReHyFze7k96nZQnzYkfoxBJFNxedQ6vsAmRvwXfTHcAUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iBWUekfp8wGKKQ8wzsCHTZmfekkn3gwTUsLZYYhKaXJNEFaEgYQLHSp2Mma9aRwdMo5qzqc9BMQU2qjm5JfTSrJ",
  "key1": "wfSGoDDB495br6fjixzZSMemsxcUkBeqb1fN72SNbXo5GP5sWScejHsPU12QZLuNNMTDptu8NhgX47mX5omAkzr",
  "key2": "3TNPne9cMGtjm4BpuisMFPM46A4uMcK1bdZ8kUmsok3RMbs5siVj3VZkBNwr4LthAVuKoCadqyRPpJoxNWTUh3Z",
  "key3": "5rgb5dyGS5HTrk4TpGA8hxx1Us1uRiYAJeymML26udkWb8caRQHCmst5o1k39UXM3Wc4Dxwyk8wuuJ4rndMyxpft",
  "key4": "3cnaz7HRmzANKL3ii8Tqndsg5MnbuDgcf2fQQ3MzNuvQttRgQYxroBZhqzL7fjSo7ZfSWf8tYPhemb799jq6qRtj",
  "key5": "2PTAURSMGKfvZwyHikVJS2XzFvoEmeKFX1EYXd4tnpM8carVr3t8RvLjfcTvNDZBtMeL76KJeiHmNne5mKBYmRAb",
  "key6": "4jFDEP8HpmVwUqYdMRgv55DdPzFTBjSUjd6gHVGoGEHynGEnzkNJivahSgJkgeSEd2X2NNF2WkQwfL3VXgu4WbLP",
  "key7": "Ayz2PVXWs15XM5BYx49BwPbfhR1BF8tTs9xzqobQwV3ZouE1ZBuS7oqzbhfL6dYTPa8uTSHnjN2ChVBYsqRnfhG",
  "key8": "3Qar1xaGkV1b964oMDGdcEPjBZvVPfU66gAnsyTucBBUfghWms5HMgJbNgzbkzk1BzEAAFww8o94FDqYRpdZt95g",
  "key9": "34qtLKBx71yoWr55xGQZPeAPbo8vAD52KT3SRYSQvscKvyrdNCJrRnwgeQhoy7DqUceRy1VQ6kTRTuAL3hHKfRRv",
  "key10": "5eLQ1uWxCfHztq5dYmcGmYMSFtmfqieRcrNEhajfHWq2nHqhZEYDebVQjRSnrRTkC8j4Ra7rNBx9bivyVA9tPrLg",
  "key11": "29LVYxKUBUbJup3bvLTP5SZp8BR8SmcPdf5BjZA8kuxQuMifnMypdfxGkct3ooowdqrRFoEFmuqp79zd5LqdXoVB",
  "key12": "NDkAj8bbu3kq1wkSceFzHBsHei4YPvkzB4VqvrsM5WLZra3omMWV5BBCZisNfGyBPx3kty6qJEbsvdtzG9HuTDf",
  "key13": "3FQt4yZoAWZvWvf5k5RR4ntG4UAJd43ahih5LPj4EUX4zhkpwCttdWcBoRSDnEzCqaRPqUF8g9iJd2zkHK2kbxzM",
  "key14": "47ZV4AGkGgmie1L6mU3Jr6PCVrodD6Q1rRokXuogoXnpi3jrFWq63U2P7jVsCmWrMyydTS6MxSzRRsuMB3pZncNx",
  "key15": "4gjgDVbmfbKa6571CqRH5eHUjZ4co4dSpTz7DAfoDKWwYWavdTFbCcGfqBZDPF6o99oVQPogDdtS7G3BchNbBuNN",
  "key16": "41ejQPawFGp1ptE3t299EZbDfX8EyMTY4x7oPu2VWEURncftAVYXtvXrPKdjvSfancq2F335vYt5VShwTuJD8ohA",
  "key17": "4NVPHvBDWgL4SUWohaAhSTwbqRA9tgyv7QDnckp6D2V5zwRiDQ8kisE36AupT31T68g8D6sBzZJ7HiGFkqBSqNXd",
  "key18": "AuksjpG8YVewaf48YstYJLWHAxGoGg4Lxo9i5A7nhJ6SmMdhLJNBoqeCc4ZitRviC41UZ5k6d7sKkXH2VWxWPGj",
  "key19": "2o54jYgbweqSTisyxLp7fvJ3DPrHo3bHy2urXzhEZgLHnKVbsN9NbzcZKuNzwj4AtFqwkqyofNb7R22DvoXmSrAx",
  "key20": "24rGomQXfCv7YaFQK2fje6UgpzPoprQsTNdR8QKdTPAhMuTX5tK943d9HYTngJSRmccL9xaDcJBY1fueMRoarJKV",
  "key21": "4eMAGuieu5tV9pXVhmwGqvtnuGmoCjsKBcs1LfUqX83XZByJbuJXwBarH6Dot7KXrZUSNQa4crQiZFff4gEL7RDA",
  "key22": "4XUdwJu9JJCiQB7w1X7Mox5wxWzNhyhJwnVpT8oGpPkmWimd7QJ5Y6QFn9B61jZNCWdgMup3d8YveJKWoAVhs7Sr",
  "key23": "pK6LW8xywsAm4mfe8b7NC7smzsK3Ws6ydXRjAsRFM6eHMx9CGZAck4tXfmimYxZb2K2DxzjnUNgyHMtcMhjgc6P",
  "key24": "5M2ZFUR9qEXRjqmD1GAwAqfpM3XECCMdAWG4PH6PesKihYbm5Bu47H7i7nmovD7Y6Ukp7BTGHb2Pp7VByQcxBAnm",
  "key25": "63ShJx1K8am8wa9MF5ccZe2iNVDHDAuSJPC1FfJeUvqACzJfaXYMTG2yuJi6Q5qrvp4kuTeAGTLNFRDJcGf5JEJv",
  "key26": "5ybjWeGAmEc196TGaEPRo3Lo9wAgLi4yohE1CrDK1VLjgTkrNF5BrMSE5iYsS7MPX18TYTejiQZitW94Gz8GZXid",
  "key27": "LbyNrUC5KcFpvua5ordWuvYAGs51fD4yYc1Ak4Lrxkt7c8bkdfsqY8HuyBxrKqnRVLHXB1YtMdT65C4rxncBDUQ",
  "key28": "342gqWhdtVorcbfi3PT8x4GGyp1LpNYXCKhtrAQ4pNowSbJiToWaacn6fKUqJZXPzWpLLr62Yj1TUKjP2EZ4yBJ"
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
