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
    "3kJK3CzPhaFP8EYsrsqghEbcV4fMu2b6XeSLrmFRHwLJCbB5av8xje4BYTD1KDa8LrPYQpMqcPuAxVn7zBmUboA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zr6KfGsZdRWaPfF5qvKnVDfbvo3iQQVAEa6LFZumQHnCXVERJRJaJy7kpQ5HGLe1294jUrX5xgiaePkKCq8ZUdB",
  "key1": "2whFd6qQV2wneJV9M1wMhvTrGhzykoX5BBvDYTgbDkaaJqMdkEMnAqs2xifv3yF8efqrrmhTr7Xf3EsQicksR925",
  "key2": "KA8h7PVGEoaRHChXDBLZa7S2XQLgL6XFQpwe3JCYLnBhkucqdSRX42VRQBYHZSCzziz3p9YUmQWqgkE3x7xjqwh",
  "key3": "HaDY3oe1idrHPRuhPvEhG9cnnwzhSuwJRPas9qEQQMvejK6ebczGkUjc8ULSYExN8Jvna1Uho4HSDwcw5nfnNXE",
  "key4": "5rgHjGBjZRWrVAKCV4nj2meD4XRBrePQ8kTtYXxfLpkt6SEYgeMw1rCYPpHGrBHJ3J1xxuLwTxXAGX43muFWFHMp",
  "key5": "4jJHZVaTByo5AuppEV3QMKmZLJ8xeM3Y4TQCjo2TaRmni7CeX4DtwUnkQrLrDdDmhdcSGvA5jqFrXkr2wivcDx6k",
  "key6": "5ziuXpfeF5NxH24bpMa8cLd5a4kETPJG88qKYQuJkKSt2nkdNDAyURY2yAvoHtoJnCichekB875XwAScZfcTzCsQ",
  "key7": "2VUda14dK1ho6eZFhhQbrERBkGQ9CmDbMYNyBW8juzV1cSNyADTuhmbWRRC9bNTXSSVU1UZRWZRyTQsi9DQ7R3xe",
  "key8": "2doQBMZbKaemYTbQhY2Qfym7mntLHRM8QMy8TZ3kvrr5Qqw354RtsuoAJBLfmxyEA1CCayLy67Z4n4q93mm3hXrT",
  "key9": "42KSHTu23uPdBhiy4jLMPmoBM87wEESdWRALmVs5uJpnXt2s3MdXwEiBqeTKWmgtRKUbduHvFCCw7SotPanNLU6B",
  "key10": "5Kr7geWPwHcxWNaRt2KdWxkhy1p1CVaWJMErLaokATdw1QXiw5PuEr7RR9CzHPHt72C5WGas8JQ4upz6oAKwyoQG",
  "key11": "L9HeZwec4VZgj3EYNGBwPba47aid6vwuGM3rnZjzr9mqjSBjcGetp7xSkBf5cxg1qZM386aZCzX1ioRjZKkd3tx",
  "key12": "5ecYto3kaPneVY9dUzuxtQzWT6obJUjtKBgjkNLX1u6VVNu74sHAuZeP3cb75TkZRgNWHN59jwpNdxQvRQJWwBaG",
  "key13": "3RR3s7UyiV9DWF1AimQ3FrJKzK9NoCHGGsHmqsPzcakHXEPWoWZHodnd2maar3vqVXaCJRECtVH9wcEM4jLn4ngN",
  "key14": "2G7S6aCzehGiKdmsZD7UZnkDEKrjz8AMgvZ2P8PBnQQ3sDVn7qAy5vFJhkUvwMhVdLq5V6gwXydss1iwZtgFYEzP",
  "key15": "3kbi7k8ufpoFxgt2cTghbQNqV988DmfauPVrY9uPEtAtSk3bjeEP97ehVRdKkFNDNeaA4FtTAbnSRG3siHm8bUYM",
  "key16": "4Gf5kaCmW7YddH22mLynZ2UAA27cP9wNcAcEiuVcvUJ1CyiuQdAuSc6DdQKmjMdtovfkCTeVo5FjVXUuM3UrGfZg",
  "key17": "3LmstQVELUiQsjpVXqiEYSBfcw93jS74X1v2zFPNJuLo6x2WY4k5kS77xXnT6Z8W4Xim3wZVGUQPsDeC214a5yWy",
  "key18": "5xGH8JKyxJkNLSDa697eGYbEvZG9VaC5VcRzUNqkmQnvSrrdLfZJ8msNuQ2HNxm3Be4sVfZpJTeq7rCQ1SZXFZqS",
  "key19": "5iFL7cTmfv3nu9vChXGVMERsoKDRXcvHKCaHfUsVNfAXi9t2sj3QXbHVwTgXwkqwQvX8xDHWL6k4gF47C5u8WNNb",
  "key20": "5ineh2kQ3uxbGGiT3dn5NhkNXqpyxPbqzgzJn7YaXQ5HA7KpHfPgffizf8MCiTFei7pydi5PyfUVsxb55dpBCkDy",
  "key21": "3Lmw9bzSYaV7imtfCVZm8UMvr4SEXgdgqjYxKos7Kt7Bg5FmWn1LmMX82gGn6XXvT1JUcirYGt5fFYZXwEV5RGgS",
  "key22": "Hc5S9zrHPnBUjZmJZwbFigK4ZFrA5mG2MVT7FqLaLHagBYpsHhaEcWv9XCNKS2Ab66ngWKU43fWPiVSFnpnRAN7",
  "key23": "q3UvmLCtgM81vN1AMpWotUUYjh4sXxdfnMYJeMUG6xeKvkxUjd84hLWCvCoaeUkWWVAd6bQmMQDoQtp3HkCpEZp",
  "key24": "2mJFz5uDxQxwyqYhqcXkQm2bgjdAvVYG3tnta42zMtS6xK9NJmZL9WtZ5cK2KiuHFcA2jPsEcpAEofSR9hdj2bxU",
  "key25": "3g2xFmfBY2vnoAPhVSWq6Bv3uqhT7pJ4wPWbzgCRdcfWhC5oS3RmL7s8VqQtrzfzLa2AhUQLfVtJK2sWRRLZx6Um",
  "key26": "3aBk2DKP1GwTWRiAVDmBRp6GPvTHjfLpAsDc21LhGGe4dE5akXSy6oELPLxqJHcQRsyAz7699rK69uP2VhuD9LBi",
  "key27": "5uqZ42eXk53T8Ytv59rZm8EdBMDjQPno5WTa7HzQ3ngkBrSwjLwpW91RL6ZjWnn7YfUhVfcu5F4hzA8JoS9rVdAe",
  "key28": "48vAeTXtEaj89trv3gLcxeVF7ywzNhq1c6hD8cd5HhQUsHmpbDBKJGVQHNERJh3adjJuKqVNm35uSoJHBfnQ588V",
  "key29": "2xwaaiSNpM353QvnYuAa1kEwnJgrY5x78vbkJNaqu7VkyYxE5Qk1UJGZhLihGRfvHY1GDgSfcdXGidt2udws6pBj",
  "key30": "3xpCNEXA9sUHtZ2AhdDFvz1yHJNqomvVC7qAQ2yoiUJKKi24ohnFHwqLgH4SotMsorQKRLL6e9DRzBLV85SnBxd6",
  "key31": "5EjeWyDDYqcPwVAyZh4CTENtaKbhi412bxVWRAyvB8H17PdggW4LzFu2nswrDRZUVkwFF6zq8Tyrcv9KTXCyhvZw",
  "key32": "61abQd8e12jkookmFDjt53qeCEqmTuB2XYjusTmWvsu95fxQx3TpeDNiN4Vm6NbFQBraMLWE2GTbGxojiQB9pQBe",
  "key33": "4Hidwm2B5BYPi74gwTXsus6mmsqES35Uvh8o8GUAktM68Xs5HGzLEBbJvM9hiQr1zBqanaay8SBshtcroFTS7zA3",
  "key34": "2uJgUpo2D5ECkwRx9TzQW8xMvNydSsU2d2ueqQfgpcJ8k2pa2GgynwvbmeC6BJJnekRnmFLcHqj3VXgLYQFEqvN7",
  "key35": "3UmvF5cA9Uf6kP2RsNPKqYs7DhSLTsn1cCmWEMFXYwDd1tQndyECVjrXsyi3ytbzCAu3HzFVwgHH2RYYbF6Vy8Y1",
  "key36": "64yTA5Br4A3JsLSop6nMbkiWcKN1K21xvi3TARyKVnPDZ1JmUKdN7LJmMqCEuR8BfP8wcfX9FJCQWpykBsNYYoi5",
  "key37": "2CnZnjWWPhdLz613MmvgGtdh5BG4WqYmQvzrKs44qTFneNzQUdPVprzjiG11KJg5Hq8ZYy2weWHociqNXZRxU3vq",
  "key38": "4p8dGLmhpQneTSanUNM2cFqzJ3y7LMpsryDV9kKp1T2fXGAX8vtTzKufRJX29NWAVpBounpbTWJtpi7YJLV1hhti",
  "key39": "27UvKWUSUbgWgQbupojq9sopRj6qxqoFNWfPfBUL8hXih2VjVneUsiXZFbpLaWibqxq3csBV7gSUCVZPSRjg3xfD",
  "key40": "31TLgGk11wSqkrvpLXutqVsLBMp7SrTdMUbrHS8PkKoJyaWL4tdnSEUhuEYMxkUBV9wBnQexFTRt9g72LtkDWCB7",
  "key41": "T2VPzcbDnUdLysWJ184rAKv1Ncbx4y8bRHqchWAxyUxbb1CJYB9JUyzewmpQTEuLXuFBHRB3UwTW6o7Yk89jkQW",
  "key42": "2NzAFjmDNfjZg2XSmXpfYTWFMtzT2yJZ4v8K7PLiyXyFgNGUszJsp5bnq4TDALrKstDe2gPvTSM8WaREo9TerfaY"
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
