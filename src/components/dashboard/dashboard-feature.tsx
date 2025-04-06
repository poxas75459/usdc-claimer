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
    "4iqKThWAHkNh5hA22wFmo2qzSkZyUDMP68XBmqvRPaqLGFJEULPoi82z57GFWCApFxK5eEVEjpsWXJzjmgx1BURT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGQfjhW4DYcwUEbkDfZwUrtEXgHM8b826p8ULQRd7537jphEBSm2NYeWj6ZEGYU22MsxHkU9KarqeYbmgqW7Y2z",
  "key1": "61brBF2U2YB8srrAs5pmSFnHzmaBJ2ZSJqS1vNbsrCD6wxehFHLTe9mBnuDtcnQdHbQLMRwCT3Xdk7Czz2hX8r7Z",
  "key2": "Et3DCfcE1Fnx65nKxcZX2e6QSbpa3Hd44aoDQzEkeSdtUZAN2mUqv5nNoL9kGtgJd4ffRiBDLfJz4NpdnKLnFkJ",
  "key3": "XhDe86S6JA3NyXdrQk65WAzoQTduCZZsvdiyajVdEafBSknW3batncE89HutFFWTxjn6Xhs4pKHXhMTD9m8jad7",
  "key4": "5iHDp3642vGehfRFn3NYGrNx5abET8WNucta1RZmbVaepvkhWXEpjnVi4HtXRMQSiVa7fopj4wX6FHczBJENds6v",
  "key5": "359NnTCdBK3rF2bTkBLGEFhXzeot1yWoJvXBq58zVMxoZnmGfLp664VeM5qswPLHd6YFKdnzGCgJdeSAjK9hbbop",
  "key6": "2jLpoEYjBq4iC4sb9QqTc4zH8Q8b2U7KiB3s835TtKq3G8aTaNhWCD5aZQaN9o7AFuNFfAUkboXM7mVTAUD35W41",
  "key7": "4FHjCSxmsqoCEc8yZjZH51hd7KtyCksPsg1k8DW5SbQfvLG2U7jH34gkbNmtrX8bbaSKpD5qBC6h3grvtLkUwi2Y",
  "key8": "2RZup5CyJvfYh84AdiwsmowXBiuw6fsen18xU34v39gjVQjoTZkBmH7LLoTsFm5Vm2vVhgpcCVhTTmhayMzZ5Yj1",
  "key9": "43YCXKtjjFUTu4kF1DHsUeL3aupw568gzxyTgcFumYNg96xSpjbrZTKonVENH8xK8NxgMZXFgc9i5dojM1DrfETa",
  "key10": "5Tdrw2nL4zkK8gaDTuwqowdq6z1Jz6zFrxU9iLqmP6YhHqv9ocAvRpNbZMFNm2KQmE8Z8AkacuSz1YzgoER51aM9",
  "key11": "RmtxfTgFWatBmiLcEdBVqEsCUQRej457zPBo8aknGw8Ue3ybV4BHqNRcyL4oVJYv5tMp41s5EGhSb3HVPXstoMG",
  "key12": "5g35ZFTThVoaPWzEkd2wqyGbYMxZh12cskv7GLK6fRpruX5PZP8CDJmLeUykuUDSrWgcpcNo9uZGQcTwDEEQPjD8",
  "key13": "3KLQQTvbgqurZGVn5bHRpN3qocDpCdtsEE5KFM6b2Z44ZxDRiWEaLXT21KsyAYkdLoocHdeV9oJXvSGRVRiRE1BD",
  "key14": "5AreLP4kvaLnfXgoZvEaPu6R8SWQK3XoDAGBgfBuhwhoNzf6Y34DMRf26SUCawYT4bLxMNbf31aXhDig9QiyXRWH",
  "key15": "3kESpvpHaJoMhtpge1eY9KhnbCTuAvcdrcJPuRrV8w8uj4eeB69HPMYkmki3YYNZhBcDR76RGHJJzruTxm6jptim",
  "key16": "3MbvTnqA4gTCKNBTD9n93WS4eJhFSk58N37uGCRGRxvaheoKXZX1TMFG6MeEFZekruhh2YP2hLATJvToJgnu5EMG",
  "key17": "4DG9hYSpPJCGaNS7VW3vSj8HgqGAVhnLeQe2jP6RUnWFsdjnaFirGx3yX6iuCaoqRfnkUhzL4sufiDyQFE8S49Yj",
  "key18": "5eeQGBzQMWyrpwcf9tZFGKeVcdknJcwBXELQ4stiG2RiD1HFxyZFUEmpsjPKZt22uZxCwt8nHh3WSEb2Ekg8gEvK",
  "key19": "2vSpwFn7ZE6EMrzLex76gEXcKLVtPYyXbNYAZSMmPU5ZngvdKWjPJwP5oJYGFU5xP2Sad1DhFwevmS26WVi9Raes",
  "key20": "vA7Ax1DZqYiv85dRFuZWZqiLMPXpWQGEqd1hjSiYoDY4io2jKKxB63UX91SspEJyHSWw8YzisdUEZp4fGs5S48x",
  "key21": "3esuuu69TX4Gd2nF6Aims6VGTjM53Pkxp13mAVmPLDasDMj6VFY4yXu9aM89Djac8DUuhtYiNT8JYmqKnV8n5AsL",
  "key22": "338M6qdvC919LeEiuZ2s8QCEvco9pDvbKjuG6q4Yajy1DKNzx3VhGaeX4DAAF6Ai7SvLaUj4PbR61Ev7fdrzzKdA",
  "key23": "5mgWEYJrh7PPmwwePDvz38SzWwkzqzH467hi6aJ5EdwxrLyRLyYq9i1pjPgoho3kFs7Rj6ac3T5wRfBBxAeEGu78",
  "key24": "rsNgDQnfJLNK6PWLp4cW9fHB49HJmtXjgq6snHCaDMq8GWGP1XDHvki34ZPQnFjPWjEUdrMdKabVSkNrXvMq9Uq",
  "key25": "41VAXariJhqYZSrYAM723bLVLKMHDA23872iBGcyZ1g8AoiEame43Qp2mRvE7tLrdmE1DCm7yHgiUc9byQ3EVGc",
  "key26": "mqGbuMdymzMd7DPDU1bBqMCbssnj7wr2ZXsAVbLwnk9nKYgq7ZXkhDxzupgbp9YnQAms1BXaH858GBYzxqoNp5o",
  "key27": "5xuK6LJJBrhSPkjcachXW4FNsALB4XZJvYcKVnTYMJxfGSTGYrpyKQ36MkJzC347GiYKmnyGRZsi29FmjrR1D4G2",
  "key28": "46iNpfq4M2bmtvmNynwdUKAaA8S9yTSzCJ3u1ZP7P9mjNC5SfnFZGgNoCH8M7gTVhu3iFH5Z7s3eKRTFYC82RSWY",
  "key29": "5yHfVftLUdQrsgm7cApemDS5z5eX494LRuL1RGSLUJQjQPtAhEtqwqZrFYbz7dYjUTRTSH3SBauTXLF1Q3HLHT1k",
  "key30": "pM5MfCkEtojBdboSxGRcLfjpBTnK1HB2744SoVhUg9W8FM8RK54d47t2jiqgSTJysnWpX6JnvmRvrbopw91GLKK",
  "key31": "CGDs7BsdjVnoxB4pb9p1i5u3uZdzPDbVRPApQ3aN1rqe54Fwi4yDCUGMSc7JMgNhVAoQfrkZ5attvikFMMiB2F1",
  "key32": "5BYwt7KjqAnAqwbN3ksntXwZEAfET4wGVkWiLqZi2QJ2hM4BrgVGRVX2e61GYdvX1cLo1CkWkLdtYd8y943KcG1z",
  "key33": "5GguzNwEasWpk3Bx87UMKNW1SX4Nra7eR9R3QNfUmn6GavcUZW6VjtQQ7dAHJzLjabbxeckTck7qWDizjdCvCEjq",
  "key34": "hFPS8H7idhU22Swh5W7LVG4qqU8sqU5UpqALn4L5DEJZ2jxFRpNbHbaPKNAaES6NwR9zhut6Wjp9SLLi8KFejRe",
  "key35": "4qppen3Ko1eix93K3xkXWvpgw1BJtABqFUX64QbE7t6EYwycfmucH171c7GwN6jnYnTASrVGfZdRsJ23Uu7UDygR",
  "key36": "3EjN7t29BUZsWKfmZnC2HhmaEVouVJ6UCdzGuc73bNyFEZeaLq7HqiRansvbD54XmwWp8FL8hHhf2MdfeiwAAt2H"
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
