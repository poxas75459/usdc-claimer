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
    "ZMo2JzxeHDzH6559CckHNAAEBRQQQJo2A7BCpnC1uhtSt8JxAV4i8vgkScJAQ4Lxrnb83Zfxw1xYwc4Rc7VbHgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CM4iVGNCHA2xsLnn2ssLRFKGAjki8BeHSH6BGDd974DBiNpDCReuF7JL7RXhDMEazBjuNsn8SUnmch2LpbqpwzN",
  "key1": "5FP8g34wzFADigQG8mRA86xs4SCVkUCUSUMfNHCDzgTJhGuo9pP5vJQdvopmPS1zZiJ5ADjgv1FcL2uRPpHdrd7L",
  "key2": "2HgPLWXEedX4N9wPiiWoDvnWvWfkRyNHAwqXxycNFKRQxnYsiTvfAm3M3aK3weQkRqrsLWhnqZxTuxA5khpAaH9y",
  "key3": "4mvesnkmTE7tgCLhvpwZ5Fdh776m6rSTs2afTuLNnRQwSYqyCa7Aj2X8YCTiEGyosRSEz6PwJaozQ2gTmfqh2ysL",
  "key4": "X3YHxxpj2AtwmRm4dywywPR2UshXg5w8BcYtzoE4AwWjG8Njv6aVTwu5YxdJGrXub8JPt9ijdno897wJUN1TSzL",
  "key5": "3kfp5ChPcP1Kj8Qzi4AUshZSakn73BR3ZPW5DGMTVvhFW5Sm76sEd6LogT4DTHmr2X4QjunwBLDMPX4LTBNco51i",
  "key6": "4tcZPXy6mR7c7WHvNhtvH2CK1yz8zcZZEQ6VeMyVFYfeGzJqcHALySE2YJR1Cuk725LDSv9T9Ts6JAFZPzf1Zxg9",
  "key7": "3ffwgGvp7pcneQcMbGs5t2ieBnefAeWHiBGdCgaisFdVvEvA7WHzrdbcxASMDhiiBPzU5JRjsuiNU9xPfAkBP4LZ",
  "key8": "3r3kxUevpaA9w6aoMMvvVL2NWTwBKExukp6JEjzD72RqmbRH5gYnja4YNuhugiHEefzJT5ihTVfhG39Kw7KrBEFD",
  "key9": "3apQiA4VqoGUjpMjRLBVqNndxeSMFFKi4uhkPvDV8tZNSru2SUGSXuLbYSqxQH1ZmoUwJujmX8E992Qp8AF5u6Zs",
  "key10": "uqmt6kU3p3BRUFF4gvtMZ3QqQraiHRT697TuXsK1AuL8Fpmt8tHvqKFdkgQjUAeXEni8oyErqsXU1MW6t9bipAY",
  "key11": "4jg2F4zL3VLaHvoapVjbtE6f6xo6HwWA8fi9RnDBmhAjb6FDYWFfssodirFb3bzmUCxdh4FKC7qhr9YuYYWXPXb",
  "key12": "2XDcBAJfPWrnx8JftPQKY6GD2jVppdvH6yU8Z6VWshTTMiPb6CjScTJ5nQKs3zK3a7hGufLJ5kbyTi6hMpdTHcaB",
  "key13": "294YbaoiFj21SEHzeRZWwgqw54usL7ARoPYiLhE2XEoSp8Vu2EF2fLPRDyGq9ttqAxqJucngGQypV5UWzUHoeWXh",
  "key14": "2QMFxpfxanhKBd2Y5AgKjbdUmNg2BvJRJiesWiXz9wVAmoHZr2mi1bP83kE4hczPEpvVXX3Yhn41W71s2HqUf6XK",
  "key15": "4o13A7bHk3HVyicRDDVT25gQB7Hz4tULr81dqiQmp5QCYvGa8NPGNBd1NFeEYirN8x4o4GFaWa6t5gKn6m4TCfF3",
  "key16": "3JhrP91yAZAuVNGb91zoCin4xjK4dUTrdasDsqu8CS6wxHsF1ckVNsxzNvq9tSnGZnB7wFtAg2xE2eFSgqf4xjva",
  "key17": "4jyD6EUsJFhJFsjqAa8JMQkxJdpucJKPurpTJU8hmgqEFR1mxNSKzAkpEWBkac7iR2tev7tMDdA83Wa5DB12PSZA",
  "key18": "48UKA4zgFsyLUzMEFSjwTexXpAssFEGkSNWh2FFvBkxbQioUwPvGsAuSwVoPPHw7PUTXjA9AN4G8PJAhmAqfif2o",
  "key19": "4HBEEt78RiGsk3Cv4MEwb9dzpC5sXs9wVGXU3Qs9iFFFwmwQWsVimmQmYX5Ak4ktJGe35Row6VgF7izPsb58oYMc",
  "key20": "3cVnakk8ZYAfkG6jQqiBDBw5rJrS7BYHDa91aLs1bS8DoHQB3bTaVtGeg8VuorSCUxbQbciG2qRdwfRmrTsdxPHp",
  "key21": "2WWhqWEYdoEwm8YXn8NtSGXAd8wK1tchzDJsU2i1VetfG6RfdGadN8GxxYmKE3bYk75gegWubBFiNgnJH3rnX2Mm",
  "key22": "2LggUePn86ZPvYoEDRrXDwAdX3YcCt53G2cb9XWg8nRcqBNYWYU4cmUNXx33rY2dRX73rkU6Mi8cny8B5YqkeECe",
  "key23": "4ygGoqZQFZtD1JGKU7QjockgKXk77WrjnfU9MAo9syTS4gHx8RHhqApe8U9aGiGMprpEBq7JdCpPB47ePNavmWQr",
  "key24": "61fRxNLLZaE7w8SM9Dn2mXQmeBKe4b3kngWNx1QD4HyrBPMfLZqTzj2HRWmSxsxQiateyb9M8pszXvr3x6pCMLzV",
  "key25": "4cygF4Wxz4dhxd8Ge8s4Ez6u9jmykpd9mrYwaEtuBXquvqbjvUZFCCK6QY7RyBekf6iNoQnWVJwUtTVTCH7ju9YL",
  "key26": "2xxaeetCjn6rMSeZvr2HxABWyXxM5JnsQQkc7yfvTfD74birsPLxThrhTmNiQToBkwx2dXpsE3ScniS7FSFgJyKt",
  "key27": "4VWYejPKWr1YE8L2eqnrL6LJHFreYH575dNnNqRKDU884HyoHm9gjYfJmHsgpvRh4SqncYySQBkYrZ7ycvVaJTXN",
  "key28": "2huTpQbUmuwwAb6c2yZ3UQ4HZWHn8wqXv6me4nRw8uZ5Vf7srS5KQwZEzDqbfK1tHanUzb7resDuj5ASpUC2YC7",
  "key29": "48eQLbzk8PXwj55bnJvrW7r5fTRkKbobBPaGgDXkt8jUXTbJW34GnZAh16otLc3ipnNY37b7UwpcJsnNV6ad1bfy",
  "key30": "mW1nAMJR3MARQXbdqRJemTxq6mRk9LD6V7nEiWFPLpp2kcwDyTn9QFWANnw3P7zUUGL1FxMcPo1YGpYiFKZD8uk",
  "key31": "3fzhNyVb5fFEhF5h3EKRsywoLZHXArvqXTBq1XVVbdMRqjApXUFH4q9jehkyZeo88uDhTCoV2P7RASJYR3f9LJYy",
  "key32": "5Mt5S23WvWXVgLkPnnDdPWmbvuJSxqDbTx2q8DSzfdmjBRXpW7TBoMNhSvtUDhBiB2SD6PJ6vVZLUcJRu49zQNB4",
  "key33": "4T4fDTyUQmNpgNUXALsfv1We2cXaEmyQNdK5gqJWCCqhExDac3fZbHXXVwRjnwB9i2Fy7aNZSeZHNeDGSkxewZ34",
  "key34": "vyhQGDigEc5p1r7pK8vreWt6iSU6pSq2c9yZRgxxt4wBm9jnja4cedcsxycQEWF3tKq71KAr92gMbpqmuxqcgzY",
  "key35": "2LLbuHvYZDqbziCrTSYostc2JQhNgVZZcuMkaebVMVBewWVhJRcej6QnvV32e2RLZqL5dWyRHXc6vJjo26L3T2go",
  "key36": "3HbqdqPQKmtrzchJRexYcp31aHuSuxzJWm8pPz7EftT1ATNTaMwJmjm6B22TwMvzd5NLTxPSArxTDJcBZTgG1tmN",
  "key37": "LqkPB3rtvVJDhzMxy1uqbEt6XnNyKrxSnpybdi5iZhhqyfvUrS2ApFXg5tqK4WgtVQEPs6L68pko1RNBeqpyKuc",
  "key38": "5UyDKsRkcZBGjej36RqSsk1GVyg2X9F1UJ7rbV4BPrrpoTjv9HRt7oas2XFdae9rid5a5Dy85w4EPprgJU5Vg77F",
  "key39": "3gULb5ps6vJguDwiTp1y3Nd3WEogdRS66KXTZW8z9YBra72uuSbCb9wVMRswtwWc2Ke4X9Dg2KEcGBxwJAzn7BJv",
  "key40": "1eGpUjdyYpLxuLtft1441bEvp4duBRLpJ8jJLP9vgUNVXV7Pcm1efJrNGZH7XaBmsbKqWBhuzowaFCntrd6KdiZ",
  "key41": "2C3ATxRdXsVT6M5HG6ADZ5NKNmyNgYQRzZiHaTZuzzuqum2ukf5r6y5aZVEhkfYXo4vKNuK6kgYkvEKbqGgapTVe",
  "key42": "oJQsfGnShmeUeKYYT1Vz43avpiiVbUhpxc3GtWgTuLipUGXmozJKrag2AAUxxGBoDfyHxi2BQWvDS1rLi3d9CJz",
  "key43": "2R1NJae5JChS8CgR1QUtEuwViXaC5ZhXtZqoK1UHruL3wCTnLCa9FsgcZA7w6mPUAzVqzrxVTrB81xzhmDdd14bC",
  "key44": "5xh1VarMjsYDCCzsrJQwvqqAWAvnsLtMqJQJPMQudZNtVykS1ZFxsPCxXTpomxFWaXYsFUe7R9nhnXb5zGRNr5Pa",
  "key45": "oxawSD3Xqw9RDmnMfdmC4zaNxjVRLArHCENTz4E1h4xs3SHvoh1yjeJaiHfYSdwJX7VX2pFm9YZ3SQ7ZnqApkVA",
  "key46": "4iW2PMuoeV531ifjDCUxiQHjUkrHFfW2bxtB7GwAqaWAuMVdG3aBkht4gvFAYXj3pQyVVHJs7q9mTBCjrVRJfA6a",
  "key47": "5SmPvP3ye7WJ4agFhQ9trytwEEWsvVF2jGzuEe2teqWgbz52ZH2hUFYr1D9Ez4GDtZJLZCEptxLoDkBJ5PAWaHat",
  "key48": "EYjPpjHM1BzU8v9M99xuY2EDiAahcFWnPGizrxda4newE6i7edyjHYNiYQzmg1CHVvRwN9B169VxpL8zcK1pp5T"
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
