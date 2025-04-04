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
    "5ko6oXyHydgPT5sjYushFFqTLefoajuF2Mx4oKVGByqFJ12bAEs9haoyVFDoiEHRzUnPbAMQgkhgoD8Ci2TBtRrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BodaYy3y58NxLEGkSmtfPS3kPcySZniB2X7yi78cuYoxA92j3icuzjWMFmyYvbH6j6Cbijb8LEaGeSQL1ERs9tf",
  "key1": "KHLAjSJYnYa5Pos7mehFXGHM9u34mBxxfUpnH6uDe9qjU6Pd7toWNJrv74ZZ8FBWsyYSFPhizpGf2Shez3t6SbJ",
  "key2": "3TXVgpwAozGempZg7VkLm84ivBhdch1w5baHwuyXWu3BBZbFkW85GJmMbtUAsCv1XU7wusiqYpoS232kj8L5p2Po",
  "key3": "2V8QEi1nSQDxHVL8kDM5RKWbhjr2o9KAoAgYTXKo9GQqi2iKFo3YjV9goWKUx4yqfmEaJfSdaiHLix9iXiYdxCA",
  "key4": "xLmKLhp9xxyXP9kgeTLg73qUKA4Ye17Pur86eetp4TiMMpym16CGdXrLrpgwmTuxn2ZVn3PGDkHjos4NfNrYPiU",
  "key5": "23fw3wqrntt6tvhun4igSfNNkUSSovHwzL6uyE1T5SkYk6eU6ffd8ZM2QSgjeBNioPGpHePuMJn15Asaug2oPYHD",
  "key6": "4fzs7KadRsH8zhWhDJXpsTE58RBpYwwLh1rX45tnSVtwad4zUQm3uEEHJCy4usvp9tByenCwho8a2Y4CsWFUPRhi",
  "key7": "2HSngHv4HXc3xLVViKsV3DadtaUXfo3BqqSRskTwXcRuyP2N98C5NkNLFE3o8DPJZATQP9fQjLWeXxhLnswWRcwv",
  "key8": "7QUB6SM41gDwKAWGaAFvo4GgpRBy2kqwbMwwGNyKpgQQmkZA3wdke4p7MxWem5UaRpLhDNLKbTKBaJg2gQLYJ6v",
  "key9": "62qDB8JQuTF8FZbesoX64vWtJLNDC4FU7YH5dus9B9U9Wp4ziwyN1ows3EKYY1sJabjcerSTJevuXQ7DUj7GQAop",
  "key10": "2aEiAp4BuQSdWkMPXjHt4466AHywjbBPoofSyTz4xt3ZDxU831EcunXJE3Qike6xq4m78gKhJ89nEnZS2USo8xPn",
  "key11": "3bhXxbpY74nohaYPsWpik3pt8fD6hJq3Z7zT9bWZ4aQLrcAQ3FiD5PkjaAaZ61gg4vYCg7amyAeCvCaToqTjDhkK",
  "key12": "2BpFjtjucVvQPUYHr3fbx9hesZTViTZukxbCFCmKVV7ajj5hVRf3Vy6KbUcfKentFpYwA7tDevZn9vQAB6M5LfuM",
  "key13": "3vqUW1sMz78i9gZ72QMTFNpdYxMrhFa187uayj4EkJAhwjQ1knDfFuzAQosTNHUDM4Az5GvhQewE2hMr6ayh8CCg",
  "key14": "2Vm8Wwomte54x8Ys8sVdwPKBv6VafUaNAmvzhd2gCDh1b6BHpEWKXLZmpiaeeDskGhLSZxft3DJTSNfTbT2trMH",
  "key15": "nMN3ituoAMBJKrzTJJMKAjbV7cgRfZk6YRsm3y5U3mW3mEzpWpz2zF3VFcznA3rpw9uGjDKLbWgHFi7P7KhPzY5",
  "key16": "vMVSHWz5ozuWu6wSWoBFWpn2nVV63y57aqQetZhNyzGSgquMHHYSSKHJ4JeYUJxLGj4H2Xc5kG1Akb6NiTBZbVc",
  "key17": "2D7NcshsAecCA26kbeaN4xfPm5XSFXd6YmPL5a1HM9k91Jr5y2yVhAJUXy32ysy3dYC3NM3Co1VFDjAnDFyYQrZw",
  "key18": "3JBLRxHdt4PPzeFPVqDnmPbqJSEwRHSitAAf9Mf7CUufaCwyMQeW4VFJA7GAdC6mzW1qRtkFMEGBLzWs3azGe7L6",
  "key19": "2WxpXxDfPxi3rJTZjpnbeRW9JxnHaWQdKQEzNcJ6THtzsYNsF8C1bu8eEN5vX7mdiDj2prYCbzbCz1UXpq1oQK2H",
  "key20": "3GPdhML7MqbxQAE1MFGFyy46QDpjK5Xzey7v2mJYVziz2kLBZELLACcRGK9VQRWdciJT3UFxeshRABMRKpTHGkLG",
  "key21": "5tUgiySrwWC5aYxnQfGBEPV2116rGxEpb47SnEF837ta8urhLyjH7vSx6t65rKDNTNg7WxruJRGMbr9QeDoYggnG",
  "key22": "5X6RQvRDnbWdVbzd7Qge1z89FmnhFtSaoCHPjnDJi2FDQDfjcKiUHFh1kuA9zfSKj5FwyLN8MvMsXBxUiZwhUEWX",
  "key23": "3Mzfb7kEGJaiAWKp8SjX1sPFtVnaiFgL2m4erZHj5x6vv2fj6J2h4uUTEEa6yipTJtqCkAowTuCS1JQcjhffM996",
  "key24": "2muDWKo3wsr8XtHuMHrjioSnJQ9okmXuushyP9YEQzQVCBaPJyGjBpMmKqbcjGSwLaJbavbQ1eSNKVMdiWqhekvL",
  "key25": "rLAge5DfTix7MU9LNAkZqUy4ZcjgrW1Qgj7ugpYXkh1VjNrinRNDeDPk69aMdyFQfcqyMQcUQ6xJnVWdd7E8cL8",
  "key26": "2FZgDbpnSUzwvyy1Y3JVeN6WZ5LFAL9mfxswEyzrpdjKd7oxiwmH5qVAU2rg8Z9uAZGHL8ny4f8TVuVqoSb7Ss9p",
  "key27": "38WkFn71VwGWjEWh1NPLQhbdum6GFRLh8Urq1AVdSRETfyn9Sqbko6KsViLpAnfSuPrhgHJJMF6fjBHmZSHTYoAb",
  "key28": "3ir84MzKGwsrASEQZ157Wn3c6kkvRQas1WqGquFwhgY67z14RXXqvUH8qFfPXsA1fd5mCKtMP4qbGSjfZDvqSD1z",
  "key29": "2Puw3RduX9s28vRwquZpvp4y1pgbEnrvpiLpguA7mu8S9NSK6XH5dS9smDpsHb5U8jx3Sw5cXiipqHoCg2NTq8Ge",
  "key30": "4MfbPSzKxvfinmHKmG6Mc7NRHzK7G6hQXzM5Luuh6iCkL1b2xgw5ip1nXjUPYqHFv8oQ6BG18uxXT9XTLACJmTpD",
  "key31": "MJcj82zk3R9GxyjCsQqZngTPp159eZ4ZRpVAxqhGwXREAyLDpeUocmEC6suARJdPuhLWDfj1EDdU1pUL9QfVPKL",
  "key32": "4Bidx6EP9yWYR8d5QrSXk44KgdA567kXuXaa8Rqycv2bF1ZBC8vW4Fs7JoM5eYhow8tNJjaA9QxzkGWj1yLePNjH",
  "key33": "ucVqBrUWb9qk5AbkPvw3UtDSAP6Rif7cur3ds5t6453fnfDmRAKiZHn22X11A1BtJkE4rFwEC2RZkBGW8ef5VAo",
  "key34": "2YnnuHurG6nJefP1FCVCUagc3DKLRuDtkQcJNYZ7zyLNKKxu35xmN3kboxxxQ8AVhD2gnredRymw3W4ZWy858s9F",
  "key35": "37dzxhNWx7XVQFVmTsjyn9B1J3jJWmBABKGugcRtvb5uQft8j3aSfppcvCqv3NbhCxiF5XoKL51YJbmXamPkRHir",
  "key36": "DAt4GwmqMkWp8zxkW263sbcKKpLeo3oz3JXjzfL8kcKxBSwCdH2GVDvHZUgrh2Dzj8fSJDwhYbkmbEkasRsCf1J",
  "key37": "5SyLBcpygfkmWMXbJvAcMV1wq6FmB3po6e6PwUzUddR9juYRHEWPftm3eyxJoNY2roLhYJ8W872itUfNBV2CA37N",
  "key38": "2YHfHomtsbZJQPVdkS6WatAts7RzsGDHgb2xvkTMGU5wjjKKRdQ2UkCSt57Rpp6ziqMbfGXGYCcZTMAfr8JrF8fz",
  "key39": "TNkcza2GLfWaBh5DSssuTeooSGgPxi4rt9qsSSHBaqgE97duCxjgd1XxjdQt1EKXjXjHgY8s5LFYnw2gZBmnGKp",
  "key40": "5k4nw3nNPJqJFbKU5VdrPULVooDmhRP2U2HUE6PVydKDBdJEss1zctitwabPAhQxYJvp2o1WFsiCCqTNhZXQiiMx",
  "key41": "2rqbXEpMKkobp7XuJRAAAgYPtR3C1eeusuakbNwr5ki4SQyrSUq3cJ3pYthXvMKUsdYXzYY9d5LwCSGyTHL1CgfT",
  "key42": "CMHK6Yu4WB2h4MfSU1EUZCMhwSEpcd5vxzW1HhmgmUgkiJrsnocNV43LfKJqQtRZxXVwmCxgGNprVQyd7dnuPtM",
  "key43": "2dwvtTFw6Lna9Nv4m7DgzzZE2SMuspSgpj6q2k7BgqEKJAYszSjkHn4k12Fr3qxmZ6fF9Au9NshuY6ztaEQmFrqn",
  "key44": "2o2e4vjnemYpst2wXoUxbVah9rPheM9DH34qUS1ziJLZPbBsCdbukr7aKdfrbEQmYe4FmdMEzraFG54huSJ3gXix",
  "key45": "ySNJhem9PZY9u1cUXTcJBhErNgK6KNY8mDLvC7DbvYfW14ciQkTLVjgMTchMXXb8E3HPzyQeeYCqXVMLru4FA64",
  "key46": "4kwZpyQB7psbKGxfwg1GsqMrKu3s66dPqmTPBNri1D4HR9kdiwRRC8y8ct9mq6xyPemQFEptfAi1Um84yAuBZQj4"
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
