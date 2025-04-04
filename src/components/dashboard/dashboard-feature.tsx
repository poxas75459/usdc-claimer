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
    "3xnQ4CyptCeN9p2Rd6ksbW5ruRHoovNLxPvv9vB7YCtmD3MBkbQ3aGs1Vgm9XwLdtrqv6YzdqLp4H9ru5LW86qBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2snRtz5J9bfvYP5DEkH9GPza34CbAGX9jrygBVszqvQ8aGYfrqwzzdogkife79pC12cdkttRkTGVjoJcBga5jY5Q",
  "key1": "LvV8GFaJWW2h579vQd1HVgbgB7GcpYTwuhJft1dk32aWQmgttCi6cuNDUBo6VoeHERZLYbuHguGWZZN9YpRgReJ",
  "key2": "3NGDF28d8nHMYeKdNjQLRCgWbffqoDWNE34gvYHYLcJoAosz73GKz9zsBVCBPQNGFLBUvnoie84xcGMeWZvqCftS",
  "key3": "fUat3opSspnqfBrohAfudPNWk92GFoM14ej2fYbYbpmEsXHuQe9Z4nm6BjpD9Pg9W5rmJeG7iSCLdf8wvFCWHj4",
  "key4": "5ACoKm9vw99x6s3kDH2JykQFvbbanBx8UTpbMM5n8EKvtL5uWXd51krmfjoeGtLPAcz5NJpDJpnML5WKe5tUJ3KT",
  "key5": "ADQ6QBgWLDkXSTUHZ6JuyfJtcVvrVNJ3SGUQvtUCY3T9YxKPxAEKeimhezPsoruydmv1ug3ayyCFAQtTsBopm4L",
  "key6": "8zUU965NvhegnR7heNHksT5nnecu1JYYbeP8Ldu9J19Ai4o1Y7GwKSkWKGe2MiKcBdw9xXfnY1YS9VDH33N3xLT",
  "key7": "2Ci4rKghEKBL33WKXe9t1n8o3vy1jYmScRg9LeJuZ8Go2R1RvPBMQ9tTmTyPz6wZqnhoLewcLNNTsbHXZMrvHUu5",
  "key8": "4oLJunC1WvaASkbNFGCtuHpivsvcqoZPjYZSdg5NnAvaKorn3DhrK6jeUboXajrCt29H4h4a4uagLfFvZeY5biCx",
  "key9": "gkxrMgGAgfpfMJkhmXWJCGAzwVF7rJvpyJDuS8quktZvf37zwfVFEzjZJfQ7asgEtR8PaRDkBEcGuGjiGGky6S2",
  "key10": "2riebQmWtDXZPM1A4XXBcBE21UsC1jtKnjRiqrULrVQCuEkenUaSEMXq4kTJbAAFcUhXcqg6k3vgDyHxJi5Kz91p",
  "key11": "5QinahLyG9K9hrBw4bEyBoKjcGhyQBG4najUUCHjo8ZrL65Rguw9hGC9k6C27FusTjgBFu18JnPxRLqsAoGWWP8",
  "key12": "3qa8QufL12zpyWLKBvA8BRj1KWBSHmmcUR8Y8bUuqASNNSia4GhKawrwGsS8wVXMJT58qhMKPz2NNaFhob6MDbo2",
  "key13": "3Ksq1cBNeKeo3DEZ1YNvfEN68ba4HRi6nMnwJcacxQgqUSaUezsdpFqpxyEGmuvyNBvkS5Pufuof4SpDExUg73oy",
  "key14": "4cZWybQjQ582CA424o6SVGe1WKdB3ESwFUDTXJgXu9mK3JkjifmjJpcvZfu9SGgFUBXLRtc7wwMoYuNjf6RXyvTK",
  "key15": "5SYhMmq2unEQEr1zRffxnpwZcwzZ6muQ2KAdamSnTZNaqk52jxhF9jrfYAciWUf7m4Ae5buu3bTKrrgBkVsizLLo",
  "key16": "26bfnUoYzqAtDUd2cZpWaZiWWoyQcbKNH4GRXSvhsMCGE9yyQrUQmfGzCUSC2SZx2Y9oD4SRaKEjKETNm7fTQ8Re",
  "key17": "3nyG4eeekqid5vU8i2mQifpGCwGAYMpmXEURnNwxBkvWu86Kb8eM1doJvkRFjPUm3B1VBw1uANPZZPivJ9JTj6nu",
  "key18": "498Ae1d297JoxH5aDygCgP5uF5vaYaHPtpCXW2fKV4MPk3fxD65DG4UCe1GXCU5mjRAD4RMVC7v3fKf3yeKCK6Je",
  "key19": "4VupSkJKifyhsjbtpKtbN7od1ubZDCfSW3RLzgUDB5ueYtYZvgJNHCdUXYZBYYDUHegWU6MLkCzkCHWxXLXBoqmi",
  "key20": "3ESWQxvAQDiFXsdQXxSw75bCkSt63UA9ifcL6Ns2qaJGKgC6XdPaXqvXjsrfsRWRUUDXSx35YRZPKEN7FSgggF3j",
  "key21": "RNcusnRA9DBRtestU9N3GkY8dBSaPxvCM6avbKnSJByHtAVrntLz9aAGL9EUwKRbWLKF7QuFrnMAFsDv89ZA5NH",
  "key22": "5yHkb2FjepYZ8esnueuFKhhfv4ZYJbiMjHCt3QqeF2HiD6So65MvrtfSDyj5pPDHmCxLCwz7J9soinB7iKTKm4hK",
  "key23": "5ggjdELxnmp7pM69uRE5xNS96E5FBE4Z43rEsSnDwC8BfboCAPaA2owPd7UqEvYMYeN2T36NaHRime8vasHYkrpw",
  "key24": "4ujMtoBi1L6ewRdtzmLdam5YtqTyouFFGncakUToedVBZhBJT3KKbKXqo4jkGM2rBjr95zqyyndDegpdSNJyfBMb",
  "key25": "3mXeMiHrzmpsvp3953PNaL8ga9JJx74vp1LkVdWC5H2jYjYBzsbutiGVJahsq2q39GLkbdWbg93ypYeK4NibBBoQ",
  "key26": "3a9TLMjSZqHV9FdZrQetbx34vB3oJcVDLbg5RFsS9NMwP46f3KRsNtyedf2dizJgpY915h3m8tE646LQCxwNhG7b",
  "key27": "3AS4Hz8Nba3gLB3MxrCZZUjhNJ45AzvtURL4QwKPkoMa7dtCqLdVkBe4A7k4bHuGiQwKAanBrvZjfqE6Lc4idGmW",
  "key28": "3aUvC4Ro14SsuRTLrZCrpJp3gu5imv4G5iZs9216W68cQF9sxxFNgsxTMVrgjcuLC1QDXxKe3u1TN8ejQYAiz7wm",
  "key29": "3vV7f1RodBhfxGt1zKA3CrbiYZqUKKZsvs1HSnyDKZbwqBeAmR7JU84Af2QXegK3LoFSq82d3M8WHuXeDuBPi7ig",
  "key30": "5UEDpUpdKJbDhsYV8C6eTnqREXscsQcwweKZmavrFebEWpR6UqxhoK6oh7RK5pZtMyBqeSA5hhChdMAJbjwPmqUD",
  "key31": "5WSE8W2N99qLf6kFuwFv4Uhn2RBXFTNVQM133sRnuiRsyz7hCkFkxf6gkmDhmjHmbFkfrZvhfmoQSE47VEry9HiW",
  "key32": "5V5ti87FHcfRyAYiGjvWEZXa4yx1H4ghzmC42DQXHN8rCC1XEGQbQzvGxDQwdw8gu114mGaVXRKynUWrsCxF1gmT",
  "key33": "mft6b5yJCQLkvyy26K4qerTRBNGWs7deJnKfxDqAiTm2hQmiHuGTZ7ERKU6bXmAgjJ9AX5tWpGF6EteNKKU3NbH",
  "key34": "4GUx76Divt4WCz2g2Wic7mdvWDmewgo8qGQiVKtDmwF8VJV6PDSBHMLizuyRAvvHBJNCiMWvPgMEpqShdP7eTXX4",
  "key35": "3jfU8xBTzSHb1nNbeXAMm7UemUViyWUFbCiRfPqTqby5JTVYJr16FhUwwdWfio9sDVFYzb5Vs4iyvMWtXRhQFE4g",
  "key36": "Amo6so2cKvw5EkXVZMxWK1Gbf96cwvmiY8yrBved9v7gAqfbnDjYUdXhy7P51mwVNySXH6DvNAvPd7ddT4kJq9w",
  "key37": "4uDeEffg7cXPv5Vxgju4uYqdC7TRptc4TUss7zcdR3XjdafQN1dZV4A29AFSu4gdZi2CsAXoxXuxAdKNeUPX3EQ1",
  "key38": "aCzRga4zNdZGxsMSeBBUi1UNhhHvhWGjhwYftBF1dWiHrwQDQmNcEudErasQm1rYJZnf1a7U6vvivghUzzbhTUU",
  "key39": "5Ya11XVZ4LfzmoiXbh8pfCuZioJsBqNHzxKFsfXgMy82RquwZBJYsZ8gTKb7dSf6LTG6Nm3YdJ3Mt4PZCfDxvnS5",
  "key40": "3y1rWnL6aFfbLvDAp3iK56uLFzUhsJ5xUGMTtjvjUWdJ79pWTQTTctjWMoy5VfpnjjSKtqLZYrcUwjuvRuSioSxz",
  "key41": "3rZkefFuVc9ia6tKFEBRBGKNp2JvhojZsMJfqHU9AF6wvAJECvFfKHwfNzGmSWnwTpjWqxvWsTCNA2Jif26Y6VXQ",
  "key42": "2LvzFFVfyiWqm6iJVtwymecM9b12eQ4ccYfA7L3icyqiWmSepYcfxLiD8nk6jHUnRTzCgKAJs2LrqjzhGsW8sRFb",
  "key43": "3EjFXt7WXa6aZnvASYoV99AN4iVrTjY4vRE77zJ9qY6UKxC81meTdgjubmsRi5tbvUFFYkZizT6LDDSfwkPtDzKf",
  "key44": "mB2j2RWeS9EY1f9G8izLKJWVWDuLsm3eGtChiwVAwTC14uLvraGBgNW5DX2wWftB8VU4qBvWha2ca4LJiDzbgSz",
  "key45": "5YgVAbr5TBfTYDC16hVqD6oihK5j2NX6oDPqxsDE1Jh5MwgQZXwUaeJ3SzfjnxBBcpSNEkif157oXDuSDZzSkmXs",
  "key46": "2WAfCKAPaTBWgtgjKoqmefmHvrVuu7XFP3o6RZ5pJSrpdUGSQkKE6WrtV16i6iaJyfdeFm8CGhuepGPh2jbv1nY5",
  "key47": "5Smx5yA11MrWf3AKsSDzs2H1Wsfp4iahd6Hkr34FLHnnErD5DE6ma3Wuge8CiGP2hg1wj1Scj4goyh3wv49p5bSn"
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
