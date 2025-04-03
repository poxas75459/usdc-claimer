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
    "4wvSwin5GhwaE5KmZUHGGJ9aJ5MxbuNqkWcDCcfumsTscb8qmZPuaKg5eYi2CJma6kSP8RnC2s79QANSdABGhWBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHcn9Ydv3rjtnGnEV2AKQyc5ySVEY5WE1ebCa3Bqwa6ehdFCQpCnuWV3YVMrxJBFzLe6BKLx54NdV5xadJuMAja",
  "key1": "2bxRb6Sd41DxNmk12NBdMaGkTwFrHJKezfVxuDtcooG65ZteNuSiENneoCiwq4U8NGggQPkQebMJvWzdba1fyqcz",
  "key2": "4TVPtPYnQabe1pAW75GGLFXmvNrM5zAcjLeGjnyeZUnMzzNmWGKzDeMZ5PTxFse5d1hSKpU4sbbsLmwU7zwGuj2p",
  "key3": "2qTta9FZtPLAMEzPoU3q3c9YuGRoj3wkBXyxesFikNEVDmMukGgwQzLzx7esC39tZEvnM9yUp2J8DcSM8y8iVwdB",
  "key4": "465JCq3AkGhBkVskuZfcgAUsLggJQxm3p4M94Wha2qhEcSjrcPePXrCy9QMWwHBseXQ117PwfZtSHbRsbKLPqPnP",
  "key5": "3Zd8CKPo3J6m6pChyF4cMtfDuCzho7y8CTfXPzQkFLnvLtaVr5CH5pWuYShHPvMGN8UsLMLrCbMGe1VWLyyPLFqB",
  "key6": "26Bk7vpsVHkCDmevoJs1WxgdJs1hQ89BgKKKuCoCWA3ru3MywHQMhbnjbJDf7XB3uuWdztek8ETFaSmFSgXXbW2h",
  "key7": "4r5qQeX7FjsrBF22QQykZaCZyfwERU56QrGggqndj9VaLN4WDsUMdNt5esjiv72z885QKFzAvbskRQLHgEk2Wemf",
  "key8": "4qk4yfpSRyFvq9n7gV7k1NfocMGLTjiaYTDRGey4ffMb26Gp6B6JpgZu7yFMhr3RZYqPaF5epmT8YpH9JwSGrhCF",
  "key9": "5Vy6cDRSDPQAVdVyV4t3LxcG3x9FBAFLqdL7oTWmou6agHRk95MjvZBe2XduUWuYtD8wzES8F614yJW8eCd7enL3",
  "key10": "5MrtwhP6ztRGSN58ReQQhksJt4WbvdC3FsGT48FSJ89LbFRptb32CwAEQgtgNXdVVue86eptUZFaySrm7oZBhGdb",
  "key11": "5L3UWUfNthaGaNz8yjB5qke4DVLeNxw3WAd473qYPQp61xY5Ec3N2NTuPxR5FkGt1NPXG4L4hfVTxRn2P9ShVJzd",
  "key12": "2ofTmJZzUhdGfU3dyH1SXADHRCN1Lxn3Xgrxw9XnBwDi8mTv8i2kTfwg8fnfXjAtJWnrxeASAemKPHHGvTGuRbuh",
  "key13": "3bmqw2VeSEA8WFVW8SQq7HM1nnH7YdiGPVVeZSwsVrjhM84powYtkz9PNJZMWZhNq7hHZa6Zk171eFnXMyP26yDg",
  "key14": "4VaXnamRAjpaa1RLRiaL9JGA6SK8qCbieBBt2N1S5RZMaKNP6QBBpJR7v3nx2C6Qq4QPq3kvXFNTVKp29DtYv57G",
  "key15": "5TNpmqT3gQ85Po9FoAHFCeaApW66gBDDJALqbNAiqVGfdDjQfgs21eavXkjbsMGQxMgPSCULXSuj62Se3Re7CMbh",
  "key16": "5CadECCbRqDV7oRyNfuqqmBN7FcDnbHJhKhWMfbqLsARy9uHd2LS5s79uQWAZHtE59d89quXpeAbAtoKQqX1tXVi",
  "key17": "66rXBPfkxWNEdreumtaVCC1S5X2amW7eA9eJBqnXkhuE8bopWMVxWpMGQuChfQMkAvQTJc4fYXYXgZWt7fqh1fbF",
  "key18": "25S7sEdzdprcoAfrqMbmJfJgiX9isRSJGfMvErNG3WwYCFd2uyagwRPC7PQzRmQsPYSopyK1t4sX3n12VaTRFXUb",
  "key19": "f4aqNLbmKQ2szuhXP2Xz26B8BRPLyrJzWTqe43j8aLM8gvGaoF2DnQQ7DL4ghsWyi3aVupewiguY7r24EonQoup",
  "key20": "42LPT8Zb3Av3QrUAKQHhTq2oLXMMsdKoPg1XwWBRH26hn5QWex7ZYLduXAnMPkamH4ejuVby4VvsoGd3wtCpNch9",
  "key21": "2CcWPpj3Cec5Q8Snqp8P18yqi1zJzxB7Fa5Fdj65C1pTcPYm77rXEzMRsG9GFc4AaxwaopYD2PKzZkVuw673DiJK",
  "key22": "EA7bfxh5RviBbJFuJnwK1GT1eE2ZaXBGn42TEvNxRjWCPTwTkL63tenVzwyq6pQgyTr6cz1FXXNk48yf35gLydy",
  "key23": "5y4BeJ11rN9YUGQwKtqvKu1usgieqTKeWj2X72dmTcENnqTouqyu8XPs3aXk9PpVYnhUZqeAx53pJaYVkLKaKBZQ",
  "key24": "5sE7eEjwLq7ZF2AEn1UnninbL1hoBuDsFdY9j9cRoSWkeA6FCmmoUSAAjyJ8HQ2P6hQrmZBS55gTsscQ3MrvuZuZ",
  "key25": "4eJv6cCkndVFRMa9M2zgtg1TxaXWBZLwfgcKL45SLwcgNZW2czoG9wGCCVEjpsuS94SktDdAzJQPWR9RmNSrWcdJ",
  "key26": "3nC1WqYtxpvqyCAsZMX5Hoq865bgHJf9iERQGdLCuBqb3iR2X4ZiMBgmDfzo93iL4X2QAKZMcqdc4s6LWd8e3t7r",
  "key27": "5a6E8WpwC4JzMWLffBftssUEXcRv7Cs9Rs7nNZUuiAjXuEigkqzC8pnXQc5kLh2mr2MWSpEcSgchavdRKFWDogDV",
  "key28": "371qhjLZnURLZEbQXJ2wc7zf8CmR4LiF1WZtg5ut4bzYqprFGKhfpD9b2bkyeRFC3PMPdxTc9CrgJLNU8pqMCxDN",
  "key29": "33j24MVnBp7zjc2V2JTTWDg37YahPpJyMv6dZ5WGYQywSEostBStgRwQMnaxeqEN2vBNYoZB9HWYoxYn4jtomonM",
  "key30": "uUNAsiMtJH988KJjbZz1uVMgkgkJBGA9p18WCjbPNsbSKSHFrViKeUYAjkyLmbcvhPTCehEXTCobrHhANVE4cAj",
  "key31": "4fNzaiw7mz1fm71dh9KgNpH1pcXWYsYbRp34EXvDLDxTd5VsaVbN1ttFykcV2BjaLfmsEW8TvjXqReTRp9PF5tFt",
  "key32": "5fuNnxjGkpeqyqx6Gx8zq2TakyUoZRHNhxf8b6Tu5TJ7mkKsVLktBwQqxTiEPtjt4GFCPNoKMMYen14igC6uFVcM",
  "key33": "5RbV85vM3nxtmUify9nZ7JkhVZ9jbsPU4kTggsuh2sh2NB6SaQJQREiUkEGY1osd9ZympnHwakykB8CeLjABfwPu"
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
