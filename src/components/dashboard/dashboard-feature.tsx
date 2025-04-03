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
    "4MKq9RCEZ8ZQ47cxqfuR8NKncH8X6sDhUHu3pMNU9hBk8Av3u5vQPiZtus5eGCgKE74cxsB33Ve7GsDeBFmv4MQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36XYZ1vtoVdL9GAhT4zHJ39BkXXXiZQ3jM1YLMhddiifSgg3VguGqcHZow4inPQv7DuenHSFM5YXdKP96Dvo3V9N",
  "key1": "4HX5wjouXgQ7SUNdyNxBk37j85W2m8dwNAXRbY2X8oyZoL2ZxCiKy7Tz6bh18f6MgmwgKEgCqoFTFJNbSWN3T9a9",
  "key2": "3yxsPKuVv36qXtpJJeUSyQTGn3DwVcwYrkoTMEFpfbNJtom4KTMk3pVKc7gsgdfuw4pTMtCfBZn81We21J4MbnKs",
  "key3": "Hrx3xszNwb83Jpw4i8irRbxJUT8qLUkLoPmEobTW8AJDMAKWVxChi4Y3DkSVYEWS3L5zSrdFapbA6mk2fqAfAkP",
  "key4": "5uwxHrb4YbhYk6qcW5KAEazSzpa2uY5dd6GscJSajrThteDfy5Mh7iva5j934gSUV3rksMPoC5C4UvLY4omgxPSS",
  "key5": "3Vw1vEpzdFhVKbG7hkWXvVmDU7bdgR3kWcCQgifQgPSgKLAQVuaezdyvx9Xj2P6hp6owQoktWG22JFWM4Znd7fPC",
  "key6": "bsAqbjKkEyUuVC9FTBqrdaB5i1cLViPUzY3vgLeFXEMLbYNnMtHKYtT4ZWAfoz7sh2njGqJ6aVVrxy4d3bTAhjr",
  "key7": "d9cWGx4GfymrPhH3UmzL6HZQsk3UmWEFXBGdLYszRjSm42kDXzM8udPgfYnbevGj3TCZR2oENB8fzuXiMoxYuC7",
  "key8": "WxSSPWsx69Bv5vThWxCW2QvTm88A7SxNeDupLSH9dq1mJKZsSjvbQVupt7QyeQdai3QpQZBrjMTz59gsKRuyQ4q",
  "key9": "5bWYUkAi1MDAu8DWnZTdTKrqcq7ogXWhtL959KUuDLdvxQtYT3zUZ7zNJukKwhH2NDD9F6LzxXse7gjSe6FUS5PQ",
  "key10": "3bsAqXwbjL2cvGLF8YnUrktia2qezf6uuqUjd9c74DabXaLM9zUD3Mz8g21jnH8emYeptz8JrG3VffZeXmgHFCbs",
  "key11": "27nKoZNGENiJxr3WSa8RDbc1PK4JwRgS37Epp9eXDqRc1EneeFGFq1Ur9yYk54zGAY5L9aMRMrEA7fRmaYFgCmwC",
  "key12": "21poz6BtG2RafkgSuhAdi8r3ATRRuB6ZsuE6BGAdn7izUEV4j1X33CJRYoC8gbv3pNWJQo3s3QRgRphE3H427ZXX",
  "key13": "2y3CFbmXoBa1dHH99ESJwSRB4Qck4TaWLF4XjQ5jHJqf5dHBE2Lh7jyrZSuYhC7QMgW4gZ1GaYbgzLrn5q5121pD",
  "key14": "28rwfh6GfNp3zcu14mp462XQHZLgxSJH5bC7ky4sy7kBKUugBvMy49GmhaVQmNJdCae4dioPFCiLnrdRyCoLMqxM",
  "key15": "5tb8Zi9SCbFDb91ZnCegbnnHin5u9jfS3LFokGN736caFhjHEq6gTXon8ift1kuXwr8FuE1zDxnb6xhwcJDvrAb1",
  "key16": "5zLhonTiuMCK7qMVz8UyMbD2hvCvKUypYSHa6vXcofbei8Adf4bzqMBZdee3vcv29HrqvHHn1AEDY8FDPAHzfjVR",
  "key17": "3m48zhcivbKMisq9EGVCMVbyYuPvF4GYm7zzz75SpTMgwk3HiALq2PHejfwf64Hj6fsSzzhf6xza82xjZD9VhTCD",
  "key18": "3vtWQCBfm4gnUow5MKBBD5b8zJyKapoZZ6skh3c4UxEdr7CoUAJr6F83cfNJMDYar6Z4qtoM3Ty26RP8oX5fhpcy",
  "key19": "AaePuf3Vh8CojpfbCBd6bk5B8UXocJcDxbL3Ru7LNFeY21soK9Qy73rcXUHWatD7VD7dfeUTYszn21j7QF7SfKp",
  "key20": "NFX1AD961HGzFQsvJBp61LT9bCVHtXmjoexfAcoH7qcBBjghCPCPd9aWXficdCJjTe2y34Uyf7QDNkdDxznJiUj",
  "key21": "2J7F1AYJsX1yzj8Z7eJXLh7msx3Pos2ApvWsRBe9RAqv2zZXaVVmpMvzzB3Jk3auLVCD8ui6mRk8KgHK1z25mkrj",
  "key22": "2sSVovUAZ2G52wDCJZYaFe17JFpzNw9UAad2D7LqpMJjwMS2op6vVffW1MstcdS6UAbGgB8gSiagHK19a25n283t",
  "key23": "n9xz8wTvzuF9L1HVzkF8MpGHakEEu3W6wmgcNZiEX9fCTPsT5Q2KeUY3vtAc9gBDULJu99h9tEgZwErdUzatwEo",
  "key24": "UkHvDcMGgHB2Nhy7MAGT3WjgFSWCeLrkgXEaKjGiBy1hAQ6h7fz8tJnE5afAC57qKD4F4iX4VeMorR4bVaHS1S5",
  "key25": "23KZ3JpyFZofK25hpCLJRQ9PidnhwqZkCckKFFz6vFQmy26feGneCrFirAWP6nPqfQuhkUmx1LZhzUyXW9Py118g",
  "key26": "2rGVwB2oKPLeRtcrvaoRfNANWm6MaKCwPdfNz9KjuRmdVkieAgh8yBGeRFrF3Ju1wByM5nbiPgJEYw3dz9u4oWdu",
  "key27": "5yendHSMjrYu51JbfUNUZYdHVp45aDVWba5U8EuaSng5ycNJoy4PX4Zq4nAiA65cAX8m8XCNssqoqTYXa7CgH4pk",
  "key28": "57fLxEfHrP8Ay19HoXgSmy89wDCWewknc4xQf8pdx3B66fJ2xu51F4yKMugwBtcGeHTehVWoFHevqxuRkyzseTqj",
  "key29": "5QCEbTsSoJS4nW1coDKAWfzasL9yeQyTZZkizZUu1fJ9EWpCkbYrCM3D8ofucVxNX5jo8ov17sLBEU6qmMXSYwQo",
  "key30": "2r5CqnHEx1LcaJbUv3kVARiSfskWabEbENPBWn4S4KMvozpAVZtWkiKV8MGz6o68Ustdax2D1dztjbHbbgtfdkAS",
  "key31": "zzDaZRCPYMz9FDkPhdM7proMh9wqHDQXih7Rb5gHM3NAUfpYGFHKW7AvjmjuYpZJ4eQKSqmu5cw4EhjuW9rPBuz",
  "key32": "3KnBVggWRwVefySTmGHqGAs2NXBPkkrThhUkccuMUpqaBANq9SNSGB35rnzuAS9oHRjMC8tcFYjufk4bZQDK5p1y",
  "key33": "25czpEkX56iVGt6UjdD6rzaErzRQh4HKLcxAUnAKkdu5zZmx5b972qayhk68wU39XK9r2h8gDf6Ak7TXGgcoQVdb",
  "key34": "5QJCiMJ2npLGUoUA7ueG41fxhudnDJYxuxZAvArF8emYiJUBADeqoy4VBgvjowYRL6XBNi4M2r5LoFxxMNQGYydn",
  "key35": "64srJP2vXQyrMGTPJwWPR3sLu2FtBdHZvJtwumdNJYsXY1nWFkAFYtdEt6YApXNjpYYYbhnepRrz4tNG9XVLuHqv",
  "key36": "3ieJ2JTEWudEjFTN5QU9bXPWa6xPWDVoHyF67gzmEUi4ehEyF5qRdv8m1je7JZ3RXvE36txNDiLzXzAcHs3E7Ern",
  "key37": "3gCzku3uHR1YpNnTAdRV8TDCg7xctvTEsyDu2JL42BAUMvw3mSozMT9f4mCANmsUxwzvEFL7wC4fFpHXst11W5fM",
  "key38": "uj87YyqNTbuWXjwbE1yL9u8buVA5rW6UMAHosiHnWAwrTRdxchs8qJPiPypHNkoL6MZBhayy8rF9fM9X39vo47d",
  "key39": "T6LjCg6bb74z14S3XJAb9frjTZmZMhTNcsnSTxHtmP9Z4aZ6ZWcwTJNNp18PsqWYFPTHUTx4zXK8ZRRLrvSZjTB",
  "key40": "4p4ieWikpyPwVwUtVZLhhumJd87AZMFrigwq153NPaGy7kHL2nYQ1PY5pte9MAtshwQA8ytuXdQiCWoYP4cuJCEE"
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
