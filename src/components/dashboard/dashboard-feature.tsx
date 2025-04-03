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
    "Howu6YUdqJ9tYjSatV2ZLTjSvUdKimFYEmPe3dNPWrikT1uAzfyuzfnRDfixp4GCcQeUnSib7ddQtJuJkwnkTkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZUgqWHppeLNJy3UxgXazPkP2CdYLJAUrpUKUCypMeYAbxDKiVX5pLesdmQWcsH3Ri2QFEJG8efxd4WygYwffbRT",
  "key1": "3wVY2ZAZXCk3E3LETyHmdTcKd9FZHgKPdBiDBoGTXX5SKSnEFsZ3ZPJasDSmJyHRwAATNw6z7jFQvHp5RkQov9oD",
  "key2": "64b2FNQtRRHq73nTjZJvWdSrkUMYDN1TAy1RMja6n9UAfAEQdqqHQoE3KPQxikqroboJ6BtWvVKSe8Fi6iThk82c",
  "key3": "XyhdibtUGwwzRbMvAw8po5UCSrReQQCg4qUDytB6z8Qs89xD9qN65Roht3Th9WkAfxKW94XSr8vkagG5JmxASNb",
  "key4": "Rgdu8tFx7Uz2DjQFB74oMb3ytgydH8HRuuQ49TKaj7ETqrXvdEknv67pT5i41ci6mYfNhRB8u87KeaaTCGhbwdp",
  "key5": "5yfWKgHhpxfG5EJuVpNoSs6cC98WQuCPip6C2t2BQWAMSEisFqSM9E5x1NbLrdcNmVRAvmmneB5VXgUTzvidtVWZ",
  "key6": "4nNGCYp6bW7QZ2QM8p1UMCEWdqCPdEWNPcNDdsqMcnLFF2Km4WLrG2UoAYNBNwQXc8XcBFJLMX7HMF117PsoFnNm",
  "key7": "3zfM7EmjVuCWxviBbYPLdoVS2hopkKvDZ6P7TVn9WuFv1X3sfNR4MhiduYoUgW5e5xWHBsYUPgdZA57Fs2ekrPvi",
  "key8": "Qo1jopE4xRy4zpfojmPdexDZF3kQX2gto8H4S5gpFjH3H4AXryFME8cYWwhidjWt12NnRzcy3ci2sxBP98Gutod",
  "key9": "4Wp6TwszZRzGzophdEarAhd9FAPNzNbRf4wetUMZvPytCjNYmoL6GQCneN6cK3kBsCCKWNUkmayyHocJ5Darnouq",
  "key10": "iAnugGm8RbWSf8yfQdNcjxgbi3MtrnsRSkPo86yuVEkhr6N87M5HQhtWihfPEp7Bi6gwkYhpDeN54CfJwcRomUY",
  "key11": "2hh5uddu649DHhe5JYEoYoBLZSbZmCkD5oLCnnb8hFQQtgEGde5N5qtjncGAEyFbmPJz6ADg18YXLK4dq9gcUHPe",
  "key12": "3NeyRps2jjGrKHdWHRuRnrE67jo1e7HEKxF5P24Szf97CGoNCSbHrBkgrdnziojU1B4XNUZF55C4MrrkjHm42adm",
  "key13": "3a1XAVwUZ5m8S71QuiyJpcEfWpgStS4FaZs5dsK7wVVdtCp6RM7ZETdjvrNY8Y7p8y4vwAJC3LKbjhtgVJwf5vXd",
  "key14": "4rVhzgiSF1jDvpMHyiHJ4W5aMkagLQu2uBQYGiYTZsLAp4nmaHdagVneL7hrpragB4N2pDZ2wmkLKUfTVLAz9mP8",
  "key15": "55rQoVfaFLnjcqyXSnBRGXLSvYraCcyjD9saxMXgFzDKPfw68Vqj12ZFcaauTZvMjFyGfrXWsv5d237jokE18uvH",
  "key16": "551XtK7AMdSjPaEPjrGisRZg1ZcygZzr48XFHk2opTfWNRfmWb8ofBb4LYa9WJjw6hUX4G5wAtHqAgkw8KRkaCcH",
  "key17": "kRXL5hLdZUiaCk3iJxJj6axM5HFpcLsToAQ1PgqgZAFGaR3XsszGy9mRaq1dY5WbTDDovSAfeNf938psW8Ft7x9",
  "key18": "3pHMJKpRo8VmGwgES7PrNFbqtCV6p8PzyrXtC1JokRGhZSGejwpMpHMRokDxtBobkPb3EMGVKAKutp8yd4mwLgCg",
  "key19": "2dxrdBQcdmA8tKYPW5NeygWU9XZhn9AE9FToXyAANNUm6SpE5ernWv5GngrEPPyGnGrLPf9uqiCerundtgC3BX8q",
  "key20": "2ZqhFfby8iCVoyut2DWRLwT6cpHtC8VzETxjup7LrsBCA61wjf3qokYPWP6XMWsRF8YwGs9RQW92d1TRbYvmpjCE",
  "key21": "2fsR2VXQiR2iLBVMoV2QxBhP13qX654ipT3MQJXLmLmQZk7FA5ttXHsRC6cHiJLc9ySMcxMaR6jygXm6XEyQ5raP",
  "key22": "5pVWvNY3B1aAXQB2tJyQCXUAFWMuEy9GiLp6ZdY4sbtjP3mVpE3Ma7sNYigFNvkSDY3HRxhLCZtmPKr74zc4VgK8",
  "key23": "3qVNiGxN4dTUnMXqPsjEegM1kSpKynVamcyMsNoWtNc7vzCjNEsonKq6yYfKYpgPWUbGg8CDF47UADwyhAroodzT",
  "key24": "2QfJYcAi6YJ6aRGWXAFtt2mWKeTScVV8MRGvsrKD52VMvV67NjLZDYuRV2BntBiKj9ngKmM9RiNVqCsqXFnSzzB1",
  "key25": "62oCK6bZCy15bct2VwB85NdjaCrNxWBJ5VVSPRdSNANTFUejxkcMS7mrNncrqa1Yf7wRE1TRuKgQwJAABAiqc2cv",
  "key26": "5MedoTHhqpsW7X749ih7Db9wyXaYJcPs47PRRsr2aRtPdDhoyJdKoMba8YuH4ib4sBbETNP5qmnQX9w6SiJ47684",
  "key27": "4Lnk1TNBRFw4cAkyP1CnYH4KuQvWS3KqgaRtzgEDgtDBrAkkfPTTu3SHZd5t9SrDZr2f73R9vzQmQbKMhaRJSDUy",
  "key28": "36yRPeab8cBhLhF4pJhyViF1v1R3bcEBNH1CmXC9KZobGMajY5pAiSJs8BXg4NQKAcx6yZhtM9vAukbyBJrrMcM6",
  "key29": "3UvxezqeZaL7nVCE9aDuUBw5xJYSCQxmiowqENrytCw94Md7hWNHpoiJzXB6nawUdb4BWpKjs7X5BHtbjB617y8c",
  "key30": "2ov7jA88u7nfkbdme5zAsUj6ZzTr4hYTJ5HpKxgAkZyzJerwRaLstrCv66PA1Hxtan4Xo6H1ZQvHUTPi9md1crrk",
  "key31": "5fEYQCnf57QTUU9jhPWyqUhLMao4sptSCuQSXFqZ92wFKfYA7ne57Qqx2rXATbbLHJLdhFK1NaZwr9u27DUbDwbD",
  "key32": "5C9sJaJnBiTAC5qVd4pmds6hHmqEuWbWLd2jMiavehhyYkMabZrd61hTCwb52pq8FA4g3LkZisjEMJRSTF8hKkoD",
  "key33": "2ahnrYidxnWXA3MrCRjrbn69EhcPNreH1r3fAjLVotuVuRkczJqLfhrpc598T6eNgg29C5mbbdydtBeWNpzTpHJx",
  "key34": "hUDMR5hspLfQTpRAAUiTmuZ48416jRaM8w8rrLuWgpEtNgkUH4qNReA8HmQNLb9nnNjTybBwjvJAbjhziF84QNj",
  "key35": "5qhd1CzqCo3eyxkDxicncWeBdbh34HvDjJkgxsHQDtXxBhWW1vMbgZj6BRLaThQJua5FbqZ5am15buSU1P3NiEvp",
  "key36": "4qb1Su3Qf1Ggy6vDD4Fsz7dit4Y5pC7PTB2sv38rRuyB1sVwkpcRJHAMcZBaYvFhrpu78AMNGL2agidSq53ahNjV",
  "key37": "AsMcX3Brzg9ycXMBeLXzfSFGrMYK88QX3SN1V8JDX3ScrymxFrNjR4bmiSy9gLKHHVke5vpR7s9PLTL9gPSz9rN",
  "key38": "5WPuBTPGNLWh7ZCMyWa4MXAkdtUN4G88CzJrKEn9USpJxQmzLcwr3kCRKsi3zzrNXfxRo3tfM3PnfvxQ7TMa53rS",
  "key39": "5kWnyHeRTHXnqgh8zWo5PW9tVZ8x1HYedxsJvuQiydbH8icfkjoDkJVYPobQCNWtzgK3fRg2bt3uZPqtEdXAxvZ",
  "key40": "aFtdmwQUqcffPw7vXnJBXu5wocd9qGQc3sPQ9quA5bQudQRep9cuV3DaVA6SKUrRYBUF18gXMqLH2NDogMco9EN",
  "key41": "29u4a7d4ewRnSAA8YTLsYcZyKKsKih1uT81f6UxFnSzq3wn29vdNhnRZsj5iojXNRro5PQpAbjWJEJCp3PhT9svh",
  "key42": "5HERkgxk2RpgcxKiE6zUnu29D8bWARARUbniRCBwaKy3D4nK5WNAJHCS84kTY6CETrX1rDJbKqdnN2aswsnnQZhu",
  "key43": "5BQVgsnE7Bsw5qhmBWDohbCBpjSWE8VVQDtMup5vSmTetqNt1MXxLGri8pd9SFfo8TYm4A2oWKfw2pD1EiCTrHZj",
  "key44": "4ARjYnHgxhDrLFJoLaVpucgHP7zL42QCzzF4RYFdCpbMg9Vg5anDJz9ktj2mPDJaCriqQoDPjSQhzYHBifUYUmVh",
  "key45": "2QKUbG3v1Q84ii63NWySg7th1FS1GvNBtVxJzZSAneqGRG9n9xJkaU31BNgzYaSTPb4D7yfgrvfG6Nyowg9dt1wu",
  "key46": "3sx8ihcrn6M4tKSYgWSD1rLAyPayehNbz5uxR3KSbC4TgGKQgasuFJPjgevxTT9etJPDLBTpPcbtb9TML1Sr8EP",
  "key47": "4aZYrYmcdhE9WraVao1YJGBCXf6TNjEPv94Km1GHsgv9PD9DHm7ZCA6pqXKvJJ7NHFfgCpmc1u5ANJ4oYeZiSD7W"
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
