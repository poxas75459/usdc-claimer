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
    "4sywVN5NzeeAnfPzkP1SbJJB6AaQ8NFJzbUG1fM2Hi2qgsz5Hrry6RcmutcLtnq84pTYztktWs8BbLBRKFU6npA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ayex5LG5sHjuo8yvek9PSAEHWnpdvKkwJi7x5LbVmEs3ZHHuB1eXmTrQUSLMxjrX241ofvffWJpFTLEj2p479jp",
  "key1": "3kMRvtdzSvYcafKZy4RXJsMcChixaYFfZDqAiXt8vHcm39Z4bSVs3WyuJTt3pHXTXSr3vKNjuUmi11KdxoMnKogP",
  "key2": "4XdKb7UN6gHjZvPcrErZQNxyX9GySBG1AuUQcw7xDNDSBvnF85Tji1dna4VJen2PPLcw1LWetsqB4H9iumTFWPa4",
  "key3": "45E5wKz7JT2ocyuGGL1Lx3u7NiUxpjAjkYdV7f6Ym4xRbnudeb53pqDrSd4Vhb24d22bfpqBRsdTCWdKmeoMNGK5",
  "key4": "8HTwMzjn2AZcgaRXc9yrooJVxkforLA5VpTWFoZYM2Vvb4E8rpqkD3fLpb6V4YgLfHtpXAvf5XG8gyYkHD7Qupw",
  "key5": "42qxDtSYpagLQTCwLTmqWHrv6KKYk1vjczi3tycz7jkXfrSL2665ygpTLmhv3aqsbpuz143Q4F81QNe1rRq3Lzaz",
  "key6": "3SCVfhmePynpyfkWADQudSAkazgSTCDbN3o8t8Y8W6NiQUtgQHj6kJLEKwxvhEW9YZKRep5kwRhLw7eAStfb4u44",
  "key7": "5VGcKxddnSMXtsKhosrATyhkzCfLpzhuZppHCaduJuu7yphtS7B5d1zsnAoJze74hZFMUC7WqprJmz91WDAEw3o8",
  "key8": "5uPLhAaCSDLkH51p14Avaue1sVmzngZEhdooPx9vtByEx3DPkxUE1dtmHG3At7AbRL3W9rewupUZFSaW5vGbPcsw",
  "key9": "4SBQBwxNSu4zMeGpAUX18R4HcTXgXi1M9af4LiFVbRTBLMLtt9eutuL67sGU8mxSiKL6gG67Akwj1PdWSzn3XqN3",
  "key10": "3bz19UJjuq9yLKYATZaBCdAH4LXBuRcYzTEfh3VSsxcpQDjominxeaMXTGojFCTLiFT2S8RJJJWf3FZ3SarmaRuD",
  "key11": "etwYJRKfKGtmWocxys1gH1B6w6ucs8QV7hemhvayZmQHD8bAFzZFZm6Ah1i4DWNJ84f7ooVMo9gHUu672ktPxyL",
  "key12": "3Zi569TSFcQC7XcsKexiC3voGNqnfYpPmEGnHL6r3kbj7qRELM5CRCMrFT7Yk1TyZFGLevY7xYUdTqeapXXUHHG9",
  "key13": "m264K2C3oDvcGhwy99bfxgHScb84EGU6KwwzrWvdrqoMdA2LWGkk5FnLd3ZiFrYjGUG3pnQ6S8csVFzyREAW8kZ",
  "key14": "4dGF7HCqui63gKUSV3kVh6THp6DUo7CgQwnbHZTrmqGPS9tPKsR5TqDBJwrHncMNF8aYftEY53BhJpCWKp54PbEi",
  "key15": "5QhBFu33ioKQRWYDp18gBaueN9UJYhnnMvGobMZGvWubADrg9F8snkDSUjXvk51irnSwuoz9RdMyeJfLotoJivsb",
  "key16": "3ic96HSRinsitr7sNZdtJvYaD9Giz4xkCj8WDv2ttEND3DVrWsJA6pwHc4a7juG3pHhE5Py1zqMURExSrYirQ2jY",
  "key17": "67BrWiSwusDsfvm5LP5P5hyncKNmJiK9fKXmZqNrjN1mqavtkvwJjtWvjVjoHBV27Ki1W4WLao2WoGeWrTMz5xDz",
  "key18": "1tzWKJPqRdVqUKQDNu2uYpcbtznLhsLafZJdLAcT7BYLzJ37Lr3HEqsdjbtJvk2jNN6MWedeVwFLDW9qds9V92j",
  "key19": "2zpNxxeaUmGVDmVeqTPEaeCZFVdsx1PqwjJGXNbkYpiWmY36NemwE7djCqfVWP3G1QTgY9oKbFrmY8166sahN7nm",
  "key20": "5PEf9Ni6J8MTaS69WrHZhg3oJSybUGV4PM8Em9SzEgC4VrdgzyNC9FTSxpCzA4h2PeDx1KHz3xHm9y4rd3L1ZnQX",
  "key21": "5AUfnQf2ZUUhU9ar28Q6WaASbrivcb1Ap4VUunPQWmAyBxYs6RUVpNzUfeRNda8quaRzEjNLtQzZMufHjFWPSDNe",
  "key22": "31bbSoqzRXYfHndz99wFtKtKHB68HP85HFCaktZnhE7tjLn6J5UxausdxmuCQgrz4c9MtT7NR6EithvhgCSgkQh1",
  "key23": "3ZTYRyEZfGB56bqQTu4DbRALmpD2GSkjuoFv7rqeMBbVMp8bk7cuAUWWgsLaQCkY8yzhsrEBi7hq6jnLwRzFwTG2",
  "key24": "4NNUn1FSwMfP2DyuB7G6bg5FjUscXe5UheAEEZTneAiSb8csqRrnqaJq3MqDi4cnf47LQef5AeoCMvo4SEKe5Nmn",
  "key25": "2eQWzUaneNGfA4Jk4D4CgVEHx4PxbJ5aqjzvYGZmFQcFKWHLoiH4Qpe5ZwqtRRvycW6ZeQt2XmDVTYfg8sA9HjJd",
  "key26": "XRdu4sHN5DAjFckcQWUEU5HrjviqHJDCbWAsRbGN8ah1sJbonSxXopy2gx33c6ELrWsHwz61ZSVeh7FSZtG4V95",
  "key27": "Jsh1M4EZV7kHzrBBaXQhWDy8jH2neYPvzaM5MSi93dthYg7zcKEdHhGk3qQ9uxCZgkq2gAhYYJi9NnfV1UrX9GE",
  "key28": "3GYky2DdrjBjE73SNFuQ6owcvyZxMmGJfzJw65FwBQHYhVJrcmK27BJ7J9PncBcuHSsMVkdwFTMR6hyPHPmVMTBd",
  "key29": "2KEqbzkQk6A1Ft81WKEEHxhZ68juaAmWHSnZdWnTMvebFtbs3aykWmmhrip9CDp6SFhxvJosWLJkjYPZM7pBg1wn",
  "key30": "4qGVnj6Cwb3bEfj63ZGgkpoMWbUB8wTxvWc5BPNAq1nb6dqLosgEvMFBdjA9HwCZYdUvg31sRZpHBvcsRD8Gc899",
  "key31": "2FK8nuNu4Xi2pwymqRw7YKFq7ib7wLngSdko1QbC5nWwzjMwfs6zddVooqXfNsyLqgt2qx26wJSNMvouU6oZjoi8",
  "key32": "GJFxrdTR5uXsrKFwjktCz7imbqjoREK5G8y5F7c8bqSqtDP3BFc5YQBBGixQrsp5MZAf7LUXDXmreomennVZcpV",
  "key33": "2BYcQW6WMcrujrhAHBMu6hMDjD5suXoxjyvPa3ffpc56MnszddQCtr7LiDpxnbjELfvfi97yUWqKdggACB42WDLd",
  "key34": "3E74iA9hq7tHN2cCvZ8kmC2PnwZHdRPdV3fX2Mev7H6fpxQSRnY5c4pwDxgTy8nhWk3pofxMqi6NvdyNsjXT6rhx",
  "key35": "4osunycC1LaPsFzk8eRoUT6yVm4mu41cHZU25iC64hQvkdfJQCJ28YsdVughfHYgts4PiLT3nTCZ4ci2h9wNGTPU",
  "key36": "4YNA4xYvcM9HeMkg6RQKmB6w7StStPSgfuqnhkXq3YCPERBxDmqA3YEE5iYef9W2j6fcMw1XxcJq3VViaqkqt6A7",
  "key37": "2wK5WDSpBRH8zSD8cvZC2xXXtG99eGi5SegLZrU1snnfhdpu3vG7NB2VNQ7aTZptNEUeEWU7p4XBoabsmbp9yL5W",
  "key38": "3KFHNb8r5qZipDGLqYMhnKFf3LkyGW3KHQWyJUvqzavDdPx3tLjgY2V8bhhs4Dg1kpjsipQSN1zMfHqbH9mFGYAj",
  "key39": "5ZN5dXsgZ2c1KegvUHVzwLtH9VexpNoUSEYhgUyQZej5aJxjne18rmG3W8Jd7LrPe7oJtshZCU2tuGxW9eKYimYF",
  "key40": "2im56cxEAhyqJpp8GqP4Kk9dvERZvWkvozR1PaE7pZh319Hkvq1UmFobvBxdx9YitVc4BaF9nZRGMWFsBe31bpsr",
  "key41": "2pDvi6dh3iRXqZz5bEQ1HwsFcZHGUqu9xH2zFh9fHo5eKWQUMtSmDFWLC2yhhrZ9WeZaWP22rjmToTgKpN2gCBrx",
  "key42": "tkDawmymW2NHZPuEa5AAFdHtedgxmR1fYmqUMQcNa944Ryorrqu8ckbwZudyYdRAv6zhS2VgFGf5fUVaPXmQcFK",
  "key43": "63k6iZrdnNLTzMQXfeGudkRtKGy4xBoHJbtRsEuLyGbyewZL72h5QiJPQqbtjt2esXxYQKZzquavxFAuGsW9Fixw",
  "key44": "4XqVsWmm2xpzVnM9ZVoMkQyH34iYKmYporh6vMCJa823DRkLEiiXRjQMxXfC8fWJfDZ2K5hEoSVDCg8WfvLWD47Q",
  "key45": "5cFXvicuX6xByE6FVbSrw65RHphjQ1kNbx7ho8Z1ndGStnj2mkmg9WpCeWqFNZ8nyDt1K1nhT5TxvBRXnsra2Sd2"
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
