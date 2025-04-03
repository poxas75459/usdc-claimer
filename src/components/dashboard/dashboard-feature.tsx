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
    "VVHNgctvHS8Cz8ACC84vZvHU4x9iny3AHUuKVnWU6qEbYgpYrvnAdNpFpKee9Ciyf4TMrMz9vsnKJvyEeYivi1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pLaXdikoBmn2v7KqDUnjWorxrzryBT9JHwMugjUXCt3aVmXPFFTdXCny4s3w8pKGZSudZ8Ho5wW7uY3U81yCmkY",
  "key1": "37nitHoy7dYgLQcGvSqpUAs8xJhAr3iHBK7t6AVXfoYSsgLSVZF9nC3oxm69XA2ovFL6uzbGh7Z6Mtun3VoR9pvr",
  "key2": "2zxgSsLFGCYjHvV1b3CYeNqbu2Nap4yoEp969zaJvVQqvLKyLGLzSNFbByp76Toy7Qoeizo85AYHxdKFr1Qu59pa",
  "key3": "7q3eqggFjeCUD8NfEE1VpftaPdNv9H8RSbNxzha2FjBJoUXEzNKGaJXrzX5Rge1kh4iY9fo9gfYTFZ6DzrNJq3M",
  "key4": "4tUwZFsyCBVRJLQiWRuhaANhpQUUfYTxsJLsMsKgmqvAzsVSSqRLmREVwJUs3wu3HZFDMwYp83V5uBeehnbYb66N",
  "key5": "5GJoBper1KiZuu2NfX5HDHHznqcy3kPhxNWWNAMAAiajT57J8WyxahLdLxdwVJzQd9FyhGmz5Uh2FdV6hzWnESST",
  "key6": "24cy1E7FFyjaKiYZZrFDnmnMjRfQpHdAcoF3tNQxcpr2HCUuJtzkdMTePxJndAMdVWFLS5MPCpTGYXDAwf63PTuR",
  "key7": "2f6TpUdygRPx9gk4i6sdGBnACepAVVXd5vqt1tK182DpEEVYv1ZvHseJ98y8HfwnFMR6GNxgYxiaxP2PzPURYR1q",
  "key8": "3FBSTcCcCZ26WQk8HMh6YzUSBkzVex4pxsGbKVWATK6HWAY4XH5egL4bJjCi43u8fQVpZDk1AZs4AZX2MX4RJunE",
  "key9": "WkoGPQHXpKdimnWyfL8vCaSDs8qGv48s6DbTQuvU62FxD6rxshSpk7q4PNsZR5SAX1w9XWsh34n2Z4w9zRHCywk",
  "key10": "49vXPKhkETUMqxK8XdadedrDSuJqgV2Vs5bWRPZPN88eN5DAoRM8HqsSoFpjd6jVzEB6cqgzvGYM8sWPdbELGy8q",
  "key11": "3DZNkKgS8fXtLYXZCEtG4W7PTto9h4R2nSVq8Fh6i3uqaMd1e6Prfv7pXFrMUVRAxKeynDBwdaLJG4Vjcfv2kZYk",
  "key12": "XoSeiPcoG7896uK8bMHtGroYGx1caKhci5k6GarQrUfgQX4DNzTdkxbvpDNb8bGQM2QraMrVn62VXMXrBSHvyeS",
  "key13": "366pyN1qWaxZfEzpeVuRhEgyqFuyrk96xRnriprioygyQdn335z2QbTNDsuXzQ94dcjoZ64epB73gBpgf6ZUEdNo",
  "key14": "5nwGexPmTVSuAcWSMFvsj3XQAEYg3iUuB1zBZ1h595ZsRof8LQt1RrX4j1hhW1F517tK8K7pt1hjwJByvE4b9ZHC",
  "key15": "4rLg4xmqvNkmn8pLG6ND2tuuYVe75B8WabVg6xi6LTb4AHMLFH2DnXNWjyHDHCLTkZj4DtQPzHkZMesxtgEwSZ1k",
  "key16": "T1fURVSNQJnLxpH5yT1nLVLa3dcxU2XuEmDEMh2CvCzGPm81anGcCtrYbhN1oevERWJveN3QT9tVwwREHcowWYu",
  "key17": "3xEboKvwffLnKRe3qSdzegbYu1hq8mHPrnk3RYe1xwsiFqyD7rnxeh54BK37ULo6keswEEQ2rnLv5FfZWnLGuPRz",
  "key18": "2YQf8Qcye5of9GBYBx4yQZQQ4on7dCj3roJViL619frhskjgKXGkQbkQVnw8SyrPfrh423SA8TiRPkCz6zbJ51n5",
  "key19": "2f3hZzcyQb5Dt7am5MECMsECNtAkpmK5XwzXYBYgAxC2p9x3qozbhhp1XszayH6uYdsarMFqwWRupyMV6Fje8v8K",
  "key20": "4ad1emXtgKP7szCuCuDGzW8gaGiLqbsCoendsXPg6yYsFtz2dHuteoB9AstxpifvQ2T7VrfTdPhH18xKfrydMcao",
  "key21": "5QtbRaUDfc4DGbgAPRhmV6b8jP13fbfSPNnY9WMKJBdKLLRsR1hPSmJnkjVmaaVyVfeq3N4VS5CnXTpMtyfzF5Dg",
  "key22": "3EvbZNeLQzYn4vASvfyG3xrdPqNBLVRHRpprmCwPRt54pBCXg1xvoxKbXgUkHRErRfzDnzX5M9YBFjXKFcNgxPYQ",
  "key23": "Rn7mEfaHst8ivu824bmz4jtxEjrQwKeyW5FjKRk6DEPVLsZ3k3A2GP41roip7kvAhcNtFBu3QmbjKqwtfVbFbAp",
  "key24": "3u3FZfRoYcCNTqvXHLrsW8JPPqJUKK6Bf5myY7fVVFePgatkQ7iaNg6iELEHbSGoh9f3ioy5Pvc7EAUq79GuRsh1",
  "key25": "3nMnXU4En1whV6UJjD6YeNmih7HKCh8qYtaWPrf75MZbdH8jTKnVBtgcte6qitpgiBs9ccxoQbc9yW5sDYcHRNdM",
  "key26": "58T8LBfuHnxGKksNrsPtqHxM9hYu8ou2ygKqhFZjmTQh4MALzRp9BUPU8gjvFoi2iHYjxofu45hGUTH1Vca5nCYC",
  "key27": "3ekQs2nKisxp8ijmBWPXdFh73SXU4ipiSsKkgjqPMLeiYs2e2yYFa7X5krmBKQWweJS36HsUCCv8bLA9Eq9Wyet5",
  "key28": "3aqitzPHqdUhnsZBXkcZwJ2BhDBexR9tmhVs5JqBBFbs6zsEme1ZaY1mpZ8zLjH5KZKnaqffj6JCMbooGLxCpdJZ",
  "key29": "xJ2M6YYYUMqKJjPCgSg1uc5QfKHyJzkVccCS6QZZaN2XPPSZ1LxbaLGmuMwjqjRBoMy3QdNQfoSyPxzMyd3KNuT",
  "key30": "4xD8QK6AmTnYNQwHAa34AM3SECuHxWgigpzqe8jSEWGPR1BUMgYZYCGLJ74ghDbwtHa5Em9FdPEeAuDoHnvAfMq5",
  "key31": "2w8pCyiCTtujxjhtnQzt4hgFErjqP1AVTaGoqUKoVTtJBNMLUaTvbWE9Y8wykq3aUbHs4MDpXw7mAvMy2z2GznMu",
  "key32": "2DZmPBxLEr2Tnw5vMbZE8JHvohd5XmogpF6DoCaDYqFqqUVUmTuNYPheFwctkoGfSk83xbcBA7d3UrFwF34BqQQq",
  "key33": "4neLnN7ZxiiyJFZT9Znmj5Bn3MyeQ3SMmCg5cykfKNrcb3JVpWeyWMcQRnK1g3SNgnLgkv3k1xGKwAqiGPgHHHvm",
  "key34": "2MnKDqbpTux84YV5e6db6yFihr2Aa6nrYVAWefCmotNzpgBq347DiXpZiMpEFqKEVvbgyWeZpKoTgMo9HJRj5Gf2",
  "key35": "3Rcitvm1gQCGSmQd2LQ25g7q3WKwPYtyxfSho7GNDfDMmHhtSvy3PkCK9htroJPGQ4GLy5RVJV2TbqiiAkjhh9Lm",
  "key36": "2Gn37GgdBrDABjfrhs4hfGyencjG54a2185gVgvSowGwCfLKkykedLLHxWXfYaTMeomibE3FtkBrEnrRYukp8nZ8",
  "key37": "5iDcNqpCYmpYbMES5pp6ResmHccaBMbXnd3uqvAz9RsvdqcuCx1dXhyxNJky9LBfVuE7GeYNqf9mXPK8ZDy1vXJ2",
  "key38": "2ZhMfqFctLdFQmunjHkSFb2kLFk3UNvTsntfqvQ3F6s8wpGV863FjuLxs5gxydmMznqtgiXi4B9BptKyw9UsRFNg",
  "key39": "5sVR9rpkPhct5QXUPJpVo5MjrdNCEKrqaU5M3gigesbTgybgYKpw6P4ZPrzJqH1mvcswrdq6MUVP2ohYGVKBP4my",
  "key40": "2BCJPkACVBPnxzPKzYWiYzxZRTW41Z2FKMqxMhCdfbfzok83GMtxNNeNYF2ECu6N6yGGVLoPcDS1bQ2x8VQPNJ72",
  "key41": "2qZgARsMqRTb77Zq9f2Ts8qUco5r9jpex1kH1KNH6i5j7xWW8jMqN1LCRAcf9TpGM79oDFdBNVCLtGQ2ax2FJ2bY",
  "key42": "3B9tFBfLAoxzHgYymH8c4FiQYfKUtjywyNCT1tmHodK6u5WbC1zcXHvyz5LU4fvkHC6c51xzYeBhNDzbEnPE1Fst",
  "key43": "2wZCoStmypeQU7yMqhFK4QgoVagWD9nXPWDF4sJJDo8c8Lmi82mQY3UKSyZBbjdRgFwmQRsyzSbDg11DNfUJX7fG",
  "key44": "3efTNUJG4qnsdXtR7QKLELqQ8ekHQJzWWY8FEA4WwHSfgDZc4zvjaan5gAQyaHMn6HNFATTJCbos5sYHK44d7XZn",
  "key45": "2hLCyrh37aEAck2ukLSTQJLsxNqsr449hd32dvUpo9G5vziWNLDXS2GWst4Hy6QAm7xg5qpaiTpFLKgn75mvHJEd"
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
