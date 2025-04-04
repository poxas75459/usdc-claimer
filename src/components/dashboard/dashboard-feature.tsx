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
    "3P9q8t2HwmvEFPmSoNzppmDwusFF4oQtBpUbc5Gw4hAF56xMn5iF89nAzUVJ7jMbDJYXa4fxzo1PwepMfgnCZ5fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywRf6LRY97aqWxksMd4fbRyzcaNx4xBgSyuQjpzWJU4AaysmhtzenuHxtNbfkpJWaW3oVNEtu1LtpQVsGJvdgpi",
  "key1": "5BMvwaTiJaXT4wxnRDWes7dBZXLVpC1bvoUr8Wt4CsAjaU2cbkeHQzDY7ZcqPGBU2cpmwNQAA1otmAF2PNP5raXS",
  "key2": "4Gkx7bnT8zJmrBDQ4pMghc5vUQGCHv5uRnXAgLs4Waw8tyXY8Y9k9r7VbyXh5BUJwgYXNNNUEGQWr9m1HVckQxM2",
  "key3": "jWiQGPyFZrJXonjGFpZW4GeavvroCsPwn6qdZxxNmbLCRsAo5mKaSPnvTJLi2bXdeSkLo79DK9DPtaA56effsAS",
  "key4": "5vsQFB8ZisMTU3Kvk6HevSAc2HWrwz4zDQtqCtKvpVXChDsq1F8bsT8F3MY8J49eHYKAt8joT9dQ6456DC9yEV9i",
  "key5": "XsLLkmuucgccyLYZWhsuTMRcaW4d2qS2ZM6KvRrx71WP5ZxaiZPnfV8HsNJQnJEajHQTni11YtGk7weT61saC91",
  "key6": "5WXYqv2ZDg1whoQjvHAbBdH4Rk2UvzQBpwggVDxQKb841rPttD16FCRv7MtxsPrYq9NBy3tiStMuZPTVnVZH1i6",
  "key7": "4XjoW73vMrxX38nwdrUmcByfd7S6TixKMgHRebhjk5yV1bDcxDJh7bpQQHAawDkqizV1SQXhwXVZFAbY5HgiByG4",
  "key8": "4TuULACmXYgoNXujJm8wGuy6YiLmkj6tRYwUQ9wCrVyUea757zHngaa8gkNYhyBEFENcj7FsoLyogiE9XAbWRYdb",
  "key9": "56HefsvjWWjho3uqEHwdYRQgik6Jf5CtJ3oLUXzPkiEcBTZz4qW1tCCfCz5CMAneAFDysEm7m6ZEi6u4NC6rVANN",
  "key10": "34sHduzSHReQBED42LyZy2HsSFcc94yMDCXdtBpUZmGDeUvgJ37bsT7Q4GvrT4i8UkjbGoz2UYR9xYKNCMvXZZiB",
  "key11": "ndd3yRhmtiCW9VavHKWQcvQjoikkdHvitVXmApvpmDeaGBs2x5iphDvtEJzwb6FeZcWp2vhXds8u1N6AGVe4Mwo",
  "key12": "43XyUFf1WZJoYi6oDSXGhFFEuCzTmyyugXmiumF9tSTPGMwpKpAmxbMRwRcx9FL2xFLzBVhUNK8LRRBxJbWerNj4",
  "key13": "5p1RNY7vgERLeueDfikifg3nigsYuxonNfmNLoyPNQ7xZRFk5ZbM6aQXx7FP94EBRKSzfzYe8CuM3vn2XynDYxJM",
  "key14": "2VL3ze3kDJcbdAJdmrttgddYkt8VAnxYxLhGgk4CqziqwMpB7verakEgh3aMB1LpzW7Hzqa1ruhNVU8srwAHUGUs",
  "key15": "3uyKFjtYJJpi1c3eQ6nR8jCRc62d7vHBLiBioAMjPa2fKKy5yVVCpWL3exyUCE9c45ehvXFrhh8Maa6PNt1uHXRh",
  "key16": "3Afbu1h8tUcVoZCXG7f8fRcp36deSA9UiAApXtL3W1PG6SVT2E7d2ttMhgWtwaQmXNhNDfA2oZQwp27EGAdGu7Md",
  "key17": "61LnxKEJ61zXF6Kqbvmu7RxaHA5CvM1Sfe6HSB3F1LiyoRT1zwGE6uwn6Eqt6FjaoamL52RzGdjvmzAEbEYXKzGV",
  "key18": "3o3F9y7E6GSczcC3ZdC5mNQHN44mnKXLDGTR8Je1j4d3CqGH9Y3Ymob3a3gX1yAbiAFqsvphmPwJddFxwKQk9JcD",
  "key19": "jWWkMcTH5XWf9idfD1JYcaiLKzYjJThBKA6NoPjKY88qYA28PhMS1dBnthitrtXUmd5Fs6wTTzJ3ugdScH52BdA",
  "key20": "3C6SpWUnE3jL7mFo9XiRwgcJYhqm94yxYmBaF95hsREjTBp8XC2fdqyjTib4CsMUCYP12kaP4Pz5121uSGS1ai1e",
  "key21": "3osY1B1Vbmhjyc2xwAaL6JXTZCvJPRe95QsQNKVUsyj4j61MY6BmqndKJZfi5DLJpZ1V7KNREcje1iRuHMYFAQX3",
  "key22": "47tKL9vYgiXgFtgtqF3bp1maCrcA6iwjTxNp41jNByNW6UWjQ33XDH6ZABoCDdpgnmQtbH5hfgCJtCNY5jqLKxBw",
  "key23": "3k2vCnKsnza3w647fefZUnT8zkM5MkFXjMH7AjFPMqQZJLckrtWqb7PMsMmuoaavqVi6TAzrjzrbXJ9EWvT5FoiM",
  "key24": "4FAG62RfPgNqa9uFVbsAG79jMpDaZZFqnLtYACSgqQkdb6rMUnCibCUN2QD5VoqDh17m7VcwWhutNqcCnSK4DPXb",
  "key25": "5aBRvTBnkanYxt1kmuB7hVSatZGoMqBJvJYQL8tYRmDjWzg9ovP8C2jMAFCZ94kmLvyQutr1rKD8gPV7w5b3S2UM",
  "key26": "cMZhwez6cquihFunAJu2w1GE9r7cWxv31E7NAhemh4jmNmuFJ2L9MgEWgEpA34xHvdx7ajNnVivzZKkaDbRMhkN",
  "key27": "4QQM14twiDxb4bBFNcWPf4VPKz8oeZqmwS1H4NBR9j2cAU3bEN6J581CKhBbcMfrPop7prYLAGGhrC3BNjkEUXYz",
  "key28": "2hN6nWrBQoTWgxGzXYzEMYeLFrQzj3EHgoMZ85bpg18RUU9pMQCxQQi8HyBjHNgToL7e2EE47KZEF8iArV2wAx1s",
  "key29": "U28C4FZ4hX5HhZbE5gtLA88fXzFc9gXJaQiDzC5RA6eQhcmfkUQVrbV89NvtbuPCGcfqREsz2aLwjK3JAWvhh2P",
  "key30": "5iSkZ1MFuG8FfYmU81ymoAKg7GfYH8YHUXFiLTdu1NqBud71Sovw33BKEFyivo5qVuaEvpDrmKVPFYxqDEBVut5b",
  "key31": "5NSEHCWTfUjsRckpcZRpZmuvxaJy8d6gyjC9T6vLxvFagQTcX69tdNGuikyJr9QWizoG5NiLp4BpG6bpeFXSeME4",
  "key32": "3QMugpsQF8t7yRhabKhgJNSE9QuuoRKhQ7DnzvwshKVVSY9eMYhyKuxr6MgTwSph3MnxxAfvNkrPhwx2HdnZXEDy",
  "key33": "3MCr5rv7eThFh4PTJV7XBmwBd1Dt4hBHMAEXrx5GLGCYHViWrRvRKo1mVQiGD5MVpsfBqfHvLrS6PjRLQC8TW9QP",
  "key34": "4bfSjcTCL3HjZkba8Tz1u3xCFAYuMfzxt72HV1LH4BMBhUyJdsopDt3FRmZu1M9Fg5tpRpoM7brj3bNwzrzPcRgr",
  "key35": "5fZKQNGZa6amn1Ua4BYMbqTkmqfAPKCNG7UY9jGp9E1sHZ7vTtNzMKgdhVtLZpJKeB5Tix9rx7cRjXvJ6L3x7j3g",
  "key36": "3K1Ww7Vges8k7Jd2wrqnxVt1deWqmRKzwnatvTthMrY14H2WcGt4FQRfs2c6F2zUCjkyTfHqYjDdtRayqjbFEUUR",
  "key37": "68pTt52DWtuaV8hyx45FX88ZeTHvS8pStzs2HbWHmt7PHCvZmBq7BAjqR6dAPxVJjRwgqtBYwpwndvV2dh2xYaV",
  "key38": "31msfZJH3shhBfPoV63ryXikBB28eWtg5uz6eXXW6aadkERZoThBXXuDKvdNi83XWcG9m13XMumnzQEVBQ5NzvJN",
  "key39": "5zkYsBdV373cGh6eskenG65dcKxJgd1mEKy3V3SCLJTMrLBcNM6axxoCRRjY42sSW2oCXFkSHTbgafogCBe2v2W6",
  "key40": "5amAQe1iS9XHCkgq7CWaA1SDCZ8XPfaFL2ZjNNYsuTiWxifkfa4cdGqZpN5XSDm2jFRyqVUtAa1C8ZSu5UEGATGa",
  "key41": "3axMytRcuhHXiuAkgb74hHD4dzYYjCU3h1npvXQVXMVrdTYmG2tibUPwMq3DkXgvkiDgvWa6KAi5WhJmkoya3rBh",
  "key42": "3mL1yHw1ihq9rNtzmCjQs4nD6mdcrtS5PVhAYqm7fbeQaJESrAsrgetMZSywJ64SXTB9EFHFV4CqF7XJtYVsa626",
  "key43": "35mDodQbnN1RywCwF8kbMLtwMg7UHq1SEz1jBv1hLhFC9UhaA39Dm7beka6ACkzxjo2ry45z84Fai5HMTvibRaNq",
  "key44": "55poj8LPpLnfptFHdNe9cQ7xtqqLJeMBRFjn745WsvcWx9QDAmV7KAw4TUZz4SbYdUu23EefaUk7PvwXYhdsiipy"
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
