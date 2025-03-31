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
    "vKYScc2Mm5bpp6nbb57NKCCh75xKCiYjnJrUD8yF2cbFJuCKLSy5rzTFsYrChvRpD6zaR6LKcAofs2eMNRs1ZCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n2jW4xeXjHNT7dChbdyD7DU3oTtdzics99xuzJQYfpVEyvdxtCdUciVuaEYj3RD5SNR86NQ9yxTZrD8cn8GYD2d",
  "key1": "3GR7tbhSMHq9QsBZzww2yAiKQUPyiUqGsNq54nBrd9oZtNNJaBpgy1MBd4Ux8b7Etx8hWkE4FMzwLvcyknvRGANF",
  "key2": "27J9sY98dwmM5qrWA8K16VrecKRDzcMzjepz85s3541ZvKg4WR7YPPbxoCbG2oFfi7bDokpyX2dAhoLQhSESHio7",
  "key3": "73EtaWpgCz4m6zg4jdN9Lttry2LgCJdQMNDQ3X3LaTi4yu4evYRKqe56atuotzcyRQyCZEdYNgHKntTccekX7Td",
  "key4": "3M7FyTihZEW5e29KTQwRsXRrwGFc6beP5RqssR423g4mrqG8hydpkuqgDq5aG6Y8d9vZ74Yjx1Cy5sHAx41EdK8w",
  "key5": "325FJiAMbbRNfWn8w33yJ6spNEeoGB94dPNuzokJQ17z4H1d5k6jSCPAcA7JvJaMEQceX5NRFDfq2QS3g8dp6yBf",
  "key6": "nr9RMUGiGiRX9vqd3nFEkZeeTfU2i13jCK8q6S28th4cdUwMFjVjRZaFJkAVqLmP26bgag4t94xjsbZm2wnHPgJ",
  "key7": "3NLVAy7KXxVuv4jZYi3Zf1h2FFk5Bcgd2AKh8jua7GmhZTwFmfYHNmLatnGWExQLgKUvth8oibq4esPNBSZ8heKb",
  "key8": "FdK8TgBRqYnwYazgGYQEtwziKjQbRWZ5zqjUY3TYNiK861HtpAvKdZGtZizd2RLtC7gGJ23jBJEiQsVGC7HuikF",
  "key9": "63LkZySzTvYFHUpdf8nSgAd4qcTUjfUe7adMyLkQBEeBUGPtdsGgLd1vQtBwDPgBo6EM61Dr6XKJa9pjAkZz1TbD",
  "key10": "4mJrGCDgJzrvvpedHx53t5yfQRCu5sRrTHP3BdcR55oMcwmJWcoTaizFb67D48bicM84izMNXrsXW74RLNqBEaHA",
  "key11": "5Hq413tdD6cfceKEiR1ipg2qKa48ZBjPEzHqCRUCFyDucUEzN4ZdyX3jthtniT4dofu6CpU3eoLZoSwWpwLWrViK",
  "key12": "vYaMBtqQXbdhxRun2DVnxkgHoh8PuFwR2FSrwYnGk76CsL82fnE7Sh3etUnLx9Jk6LD5fcEWHYiwZsYY5uEhDkQ",
  "key13": "sSQo5ZKuZwQ2nA8QcP4uPtrkmeq8LuM61PtKgnwFrkTSYxp4MiepAJN8PaWL4ZRExjzEamGBTsSFkdwvEbCKYqY",
  "key14": "jYhyHrwCjjpznRATNm7EEBTPskCiBPMN4dhyLB4zdLFYz2G1J6JvwY81uWW11Sc5XPQ5W3PoTxXk9rJ9JYg4xfQ",
  "key15": "4gKiikQZxhqcQzKMsawQPPzM4McZkDPvGHW2mdpeEKqK33T53VSYbMCtmcpLAC8brqJ6kN3vV4CaHTKLSz5KBb1z",
  "key16": "2pKFc22tc3pgB7GUu7RGsk8xSSRT6metzEKpUawrndgiLyhCKXznYRpWN8bTpDVyiN8X3ANVmbP8RTmUZhhJTM7U",
  "key17": "39aHpDTvqxLy6GE2bf1ZQRuvX1QiHswpnWNzb7PUz66H8NmqHafqeQ5XPvghhguYWrJ3GLxbQtcT8cWjU5sWvC9s",
  "key18": "486eX6fdrmZ3mwLJQBLqpp9WKvDG4zX4mre4VqhCTG7RjuvvNKYgXtCS7zBEqtjK3hTERq4zMed3RAKTZ5DhgqTV",
  "key19": "4nTocM4wviVBzGc8xfLyoUgH6WreS5FyiBGRdYEi1Tk2QErc2TyaYpuqCTBYfMd1vDVuP2WCa2TQ9hDY8XAvzhA2",
  "key20": "5vFntrP524e6YfmNUyWvdXnBvGzafagQy8ysixnPAmA6d9YK1gf6aYBT6MkZDGEHhx9XsZqZxckYwdfjTPt23A1h",
  "key21": "2H3iqLUJ58tiUuLMgFpDuqEv31fLeQMHFkpAtU884JvusAjwEUQBVSKrZztpemn2SvPaFhssghhZ76vFf4dTDt75",
  "key22": "QsEncwV9zqYTvTmWEPsXsET5nNnUYbQk1ha34FmE2E9xxV14CekDgV4DSiUS9ByWEvDvK6JhtNXK6NiHVgdfGtS",
  "key23": "351AszkAyWhr9hHGAaAUabsCCRNBawZgfmFCZbVwxURrSHDLXAYv7mwJtsQuUfeV9agtBY2vb5DmKyJEEMBjYn3n",
  "key24": "434EViEbJtVopzjG4M7xdzt9Fv1iL5JhFbvPQb5AACJwBRLEzs7xmg5FHdKdvbkcxMrim1fdL9CgurFwYaWpFb9k",
  "key25": "51YfFkjEYyHFZqP9aPdif9cE7G8iXjckbEbE9T2L3gvMftiwx5JvgFUdV36aELLqi9eBYtyE7v8RYuijdiot1nYR",
  "key26": "2ceTEvssCZx34CRdVGCZehfou2cpbQJz7MmFsKUuqqoVGoaLPCDPeU9nd5MDCHUaTWXk1xeLUjRUbvcANDdvvmoz",
  "key27": "27w6j3nYP2W9hZFTxADPiYEgRcXKMvzXonAaP4PDV91mCDrJM6GcGLB3kZTrN3rjkQwBvKWruu19ByMu9wgBPjj2",
  "key28": "njpFjv7kihDfGoafgpa1Xq143Dn9DgnjyYyrHsGQPXmA6dv3qH4N4sVhdxLeLLXsQwFtKmYRqyK21raPfNLmNPA",
  "key29": "4dWCXsPk25XrFDADtCCxPpBQwJco1Tt21EZMMosXFVaTEvdKzV3g7nu3s5B7ZsS9PERH3feToYywpTebxuxYwkG3",
  "key30": "4mAjHx6VLKyPxkSCn7N9cBdPpQjimiYea8WP45sqBs6Qp13SR1uCqRbmYNmZLCdmS68fkcQa5tSvGgoExXE4Vopr",
  "key31": "4bHnj8x9ReNbqxbqhqefo6VbPXZb7e1Et5oCCVHMMDpe4xhTmn9Etd5bxyUPwjwBzDrTJWw4wPsR7Fu9c5znT16E",
  "key32": "3M6jEVRQQs6ZeNXKEPx93xj8E76GBMcgcWRAwV21V2TbxaLwmQotSUXyY9eu5toFagGhGEGGuyen1YSd3SoR6cVs",
  "key33": "4iqcfrcnFYbngzx1XruyG59f3KVN8RrzaibRiPHPyvTHGw35m6pb7ZtEpmFY6EnDtJpYFSdJfQVRfPmFvuknDPqj",
  "key34": "2QKnCuAHH5VCMvVdu3UcCbpgwoVXLYMUpHgiAysW44n6vV8zC5FUp7YZa1UCrF6Djc3m7HKF6fT5RCinoiFfTQmG",
  "key35": "3SQ4hi9wZNGFAi3xVR7xZuwhSpHxmdtVdrhnnbuoApXeeK3Jv4buL6UnfGzAaFiME5SZmUFHRBfG17ry1HZaKDWU",
  "key36": "5c87QJnLdxRhEMQfztejTsLLVpv7MWJYzuPosATu67DyVC7heESSMcwQCVvdJipQyYXKLo9UgMnk92hKCBdqNpR1",
  "key37": "TpSMYRaCvMRtmZv8WsMNFyaohYPMPTUCDGbEN5JDTE6SCJdFhjuys6CkM5LYy3S5bJk8YH4ZeXroNr4kmuPt96e",
  "key38": "5Be6gSCYPYE5wRN2WkQV8DQiDzPoq2BoBHn4kdDB2nsdJH9g4eL77ymq4unUM4bc5vawtnc6KHJHJjqToLbeGD6i",
  "key39": "3AEpHPCYDW7dnqCJHpFh2YhUTHVr3sF8vEeAn8EBgbEgEbNSQAsZEzhK8vANjK2fYuchBTEeiNsMMvwKCkYjnj9P",
  "key40": "3mknsvAcoakDv8Qa73jGocKxzfE8yS9J3kmoZCg5zewTZjLX9cSXrQH3Y9ED2fefFM4s9TfC1fYLfz1SMsArDiCW",
  "key41": "MoLnhNYZTFose6C1yqzhVr9yfKywMHmzcwxjah9e2NWDhhnPuaakQP5rmv5EuWPzKGjNXDK3JqYwJevRoh656Pw",
  "key42": "34P7FBuS3nKz8U6neZ9XcEBLKwWBjm8gwZobi33NYNe8abQ7r4mujsHXcM5AHZvKbronrJhUUVhrsc6shNRN5oRY",
  "key43": "4FvTdKE7utJ8etFYktQwWdSjuAaoQLQTpVqboJVK9pB6vX7UgJhC3Y4odaLoKosFDK2c3Jj1oTh46tNUKbPRyWMe",
  "key44": "4rDC7jU2f8uZhU5e8e9crqwSKHxSHKQMrFxPaStGtqzVKkZVX61tNusadChVMJFDxJRHtqEVeGgXUs3hwTMkpxqn",
  "key45": "3rk4ziKCoteuzybdvifkJS3fZJVY6NyTUMz9jDdxNzxphWQV9xNZsS4GUMMVrvbvqEg2itMLCjGouiYLas2FryZ4",
  "key46": "3Cu7j3rLiTTMsVGwEAMKDZhjzmvr8mT8BnCSeceqQnvdZQ1G9kCx6d9XhNmB53ayuBXSebv9Nt4fKfzYgb7qXB5E",
  "key47": "5KFnmRfyiUpCZB6hUN9Cwd3W6aQTtA8szTBmepRFeDKn57e1sWY6KYiroHDbTTtGHwARcmGkUb3Pxxf1EutT3nfi",
  "key48": "2GKUE2Cq9rr3VsTXNhDtjZq6KQnjvcG2QUmFUyWJAqWKDbLE6gKBzJKt9x95xEqRDCHdba5wQEP74Jo2WEPGZa3A"
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
