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
    "3TCx4iepyxuAVo5apbKDFPJVHFjuJRD6ed6hpgpgvEaSGpZ1bbR9uo2Lw2VYcJPMq8tzgjWXUn89KDEL7XB8XHDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53b7bjTiMARvbpay6j4Lqwdh3HMoY7BJQxGXaDWZTgXYP5Ziw2Vw5x9evbB1hUpAfsDkEM91ye84BSHVjdvz1EF5",
  "key1": "2gJHgRTPfFzsRzzegZtC6FPxNZbv87DB45V4171FBeZZrSEC1ByB7Eqp2GZsJ5RVEe7ynMWki9L3t6KvenXJDAS7",
  "key2": "a93NJH4AFXBnfjrup7CuqDW6crbSUy8mkfhdXVTq92shFeJCN4YGp5CpAtGssqLycGW39xb9SonuM9yBtptQRjY",
  "key3": "5TCWFrv8DbDy8jxop83NE4EbFDBEbYpN6b9E9fmM1ZJJaQuVVGaNZTwGR3evMgNfFs9zJFBt3aDwDV9Myadcj4sE",
  "key4": "4ZMVTh2aLTDd7WjEEYtDc8u7zG6qs4diBxuk3wnd7m6aEt4jUDv62aRSZxmiSYH6A2ycMcwsFe4eAJsxpEQh1CvW",
  "key5": "36gzVWcSCfhmaxtvamm1o85r7ZxsgCTmZWNTi65CChkZ5Vxc28cVnC8EmtYXRV7xreR7nynCWmui659unNmJBxov",
  "key6": "2cQDkiLbX6cDJRpx6Kup1qwCTKx7cCRQMRncJu35FgjxvWLNEeRLrQy58RjdGHpuzfTjBEoRwcsgEHdGnGy5uMtj",
  "key7": "2pLUQbbgpPjZe96zB5ZLCNRYqcESuMLjv7vNkBiVDTHoXBFTjpzB9k2oxdJ8kDn56oDAN12c6hC1BiL8NuuBRWEJ",
  "key8": "4HZDY2ijvUAZo6Q1fkpXD2dmBFLfrSTsdoc6CqndgTuD78cZi9NhtHagwWCWbeW17Gj2TXzQ39myzRNiD52yUYwN",
  "key9": "4Km4hrVZVLyVfTUQSvKazqsBisNvqjjSbQ1LVXxmXgtJTy88DMxhp3FY9pHdpNPRV2H65JFhdr2caMW32ACW5adh",
  "key10": "5FCHVmsbWMTF7wyP22d5cp2aVCX4wC2VQqPJSyF3w8WFWUYsfo4EA2Hx4YU6L326kBZh5Efttfrykt3QsB2CeaqK",
  "key11": "3sFttSxYuBd3ifVQbbV76JfwMQ9xoGEq5fRCCeCRsyPXq8L6RNhMKaFw9pMLujfT3RUWxhYLrj6dFnEdSM3KN59t",
  "key12": "5mduTEQkRN26YKCmHzVZrRfVzxnazva4r4XNgLo44QKo4eeUTht3eK4FKtkMP3WEumdyXQdh92gF3V5wUpQKDk2c",
  "key13": "411Ms8MuDeUZ8z9s2KFQcaFVFprSkV6GGtQoP6m2Kzj86kBCMtm9NcSpBCyQEtwgq1zYCKb3Nn38uutK83xUhF8G",
  "key14": "3xX5payaKqVN4Kvhv1Trv4fzZdRm2fc1XuzwxeuVngJuPJvwoAhaLmCAsfjtMVQ12kDbJFWhEGAc9SvpSuxc77eU",
  "key15": "2hZBrRtmovavVozz7W8W8fRKBknfzsXhnhJ4ZVUQJC7dwCwfihpyiL6EjKT9em3NuSHnmyUPbBF9Fu2cZtj6hyXd",
  "key16": "2yJN9N7zAYarKv9SijbSJJt8jK9BAZ5Hh1Rx7DTYX3zvhSHHLyUmwnaSZ9EgGzChAwvfP99CEyueFfE6bmR1Snm6",
  "key17": "jmvWq37rXJBQn6UWAz6LnJkSarPVdU9Y2iLUszmGXnDaZCWBhX69ZLuFTDt5WKx81bnMLsnpQjvMFekS77haxWg",
  "key18": "oqFTPXrRPdYo7E7kDw8MYK76EckVHnH9yfHYS7oCuijpV3zgFT7vtTc2ytcnqipYA3syizUQR1HKKEvSKKaXM4H",
  "key19": "CFWBNazbfymryMhwZ5wdYebKxNWpi7tAm1rGDhQr2ZMdCbZEMJZnHtMaA9Hrjz9habuw9HJBGMQH2JBAS34ombL",
  "key20": "5VWhgQufj7o6ZUQrJtqYMfBXgjrkx1NmWnfLGwCpFaMX5BZ9iceo5uJ2CtHmtgRyHA2h9FtcYaRpVmoX2TtwWanY",
  "key21": "673EZdqjHUZxG9YQ3mx3X5sZ3ahMWTTzXcKfPJx6KFyyW6kRvUuvhetn4AFeosmPxrfJL8QXo4oVZskRWf8RQQs3",
  "key22": "k7pzwycm559h63bEzTDWBdqNRXCC17J8MKyojQxLGSkje7eEmmrZYx9AKDF3Wyzdbh6i3fgedq8JdXwGJ8jX6aq",
  "key23": "627bscR1kpaKWYhtAwg4vRj5vd5mqE8ULNLgiZe5B2PwYR8eZBFkZWUqxigqCCgnn18f1jJ1YjpUrear5KP9FxQC",
  "key24": "4W6s1GrJkvRFMEVgiE6nWsGVPPJpsmAfrGtQySd2tXV92zk3w7yfz6zxG95dPMGh9miU5oLtXot27uMubYRK1RDQ",
  "key25": "vPfzwjoREYFurQW5gqSsgxTXXxj5pfwqa4BVooNMVCezfD7ZqEzMZdvZV8iqCL7fFzLC8ssJ32Avd8doZUnLkfh",
  "key26": "4hiJz3RLAB8C8bjBVT1YwUXVvrTw2kRN1pSbjNGzZSbNvKCv2Qkk6G53BJhw6QuyjYwcqbqTJmCaVFijBpn1P3vu",
  "key27": "5FpNE9W1VrwzbPCtjXnykkFHCfLkpVhPxdNFTjwhxH15EEzgFuZsnMN2CDJRLYQvdDnYhU4Hff7KQFtkUWyhSq3d",
  "key28": "XGTQHWiYJvHMz4s4rjLgjhf2RSUcd1tpUeG9Q5bwn1qiRx97Naam5q3sbBDter1kgehA1KU5pfzQdbo8nbLojMx",
  "key29": "59ZZPQFrtMv4UtDPp5Vc8ktXnBMsEk1oLdzJiHQPt6T3LvqEzfQZTaPGAqeSCNHCFRZXEMHuG1SgNVbpAGAf7wVc",
  "key30": "2qtBV6cKeaotHTD4K9rPEsnmwagnSRbVBsj6AAF1betSNGEVkkK79bxptD5jdUAc11BUrtGYLeVAMkXFvtnqN9Yo",
  "key31": "5U7XJQSEfZLYNjrp2PiMiQTmGvitT1MbpC5eTp654bsXsizcVFpju1vqdPxe6GW2H4h4SVZcZynLFR7AZi4hMqy3",
  "key32": "5YCP23dbMr7nPDpU2Yq5uXYVtbqSawiQXLZdojSES9adSSKHRjL9zm6Zc3YXeGJPP6mHqemz7ysm7yGPhTREZyYG",
  "key33": "ZBZdoK1Xvbo8VJp7BVyh4c2YQE49jzCK96PW3FQT1ox5ZXs1Z5bgmxFzac2F3LGaknMFa8rhbQeFX5u7cpFxLKx",
  "key34": "HiNkCR8L6NQ4bRNGfw1421yyUwvZCRYhsAvzPvqdL6XY9WUtMvm9XbtLVCqZpoArpem6TLMUqyCQqayhS1shBa8",
  "key35": "fkvVz5aSUiAoCrxe6HqatPPxuwWshoeDDAzUCNpLVCyBgnxJsqsuuQzkiPSTEbo6tqXCw5vuFQJFc3gRB1ptyQc",
  "key36": "445jn2WwHGQizWfPSuAxxdUrhNefew1UQungtygWPnAnC5rWnAZNeJbNrVhjRTNnDwAG9WpQQPTEbSxzbKyzf9JP",
  "key37": "2JqdhS9v4yW5LoZgenmzougGx42u7CZg1LKMRQNZ1eHko15aMmVhjWdaB6punRbmRZJBTbqJWKFXgaogxVndofW3",
  "key38": "24FKp8hk57cSZvceo1JG4QeHWq7W4dccJ9xBk4Qyg8xtZspntcSrobKNhPJDwpjADYLZLuRB2yT9upGp4VUVH8oS",
  "key39": "5z9mQce7uC2uSgG7A1YYwEnk5aFkeTsMaogMHKrDZVHGHZBTuRiVAJMEKXZ4VxRN9xvKcwdX1QsjfFCAZ1R3oY7e",
  "key40": "2NRwCYAxxTuPYANUVhA6xXGFnvZshSm6FjLmUJBZPGYzyWA5RRvS7c176Up3YnduQPrdVKqEi4z8HmrXrVVPVBir",
  "key41": "2oTE7Dc9WWscqSRXQyPP51ykmgRSqx3bd9vPq8TvfSjWceqJCP8BW9d9q4gtnxSyETTGM5WzJs3BWzA5Rphi4Zaw",
  "key42": "4b4up5hbNgS6Mn75T1smx3uTVPQCrWMuAfKSBqFFsCS3noycfXyHFYqhtS5V1ZEeatUezxmEavMY7TrtsvbnjpQG",
  "key43": "4zx9TwVi71BGM52ogKp1qzMsCS6guceiVprfVgHkirE2EatC4sWqWHe7Wg86EzZHnov3iimE7HRNRoFuNHf322bh",
  "key44": "3LPFMQ8Jyjqg9AUPHfzD3eP4UZ8HiF5YDN2JnkcpUXtVdTiYTeNcA3MEBchNhPpzpxg1S7MABPwEPjdS2rCjr5Cr",
  "key45": "4R7m7Zxp1oJP1yq29WcSn2JHrtof28jaTpGsFBjVsZNLdGWsTnQCJjjR3p13m9NKG17kWxEnv6CDjr7GRWxzcV8o"
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
