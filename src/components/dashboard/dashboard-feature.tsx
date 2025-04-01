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
    "39u4yeYza8caFRaY1eGPM33pTx4RufHSd4uMhua5yP1CxL5NpVgkAmaQUN69aX6FfqkkDg1BucM9x4hawUa5oron"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3nthkvyAnQF44nhL5zKcjEz9NXsUH924EQdJugahrstAJMbBHqoRG6Jg2oBp45ve4P7Fyj45mQoH8Frsg7NmZf",
  "key1": "4Jj3MCnnrf1EUgJZ75Yq5N8TmnpxNC88F7ZzMuzaHWLb8uVGh3dKVBcMmXo2A6ykMwP58NojwndxSFmG8YRsq4rm",
  "key2": "283LmPiKqx8GQoBF6zvrqx1hpywH5TM6MuZ9w8GU9RxKH8GhA6zFQnjHYYFLgYD42vZeErfXoQdUnJxpcg9eWyuT",
  "key3": "2ZNqMuyjKc47Sy68oDdfFFz5HanhLwJtafv2QrAPaxyJW8fL8vPf8XjGNbAouPgudzdRK2NEXnFK82Mm8SzWW5Dt",
  "key4": "35V5KLoFz2dH9b2gNGoaz2egS71h8qighGofewpzG5K4JJU8kaXF9jJCLS2oqDcdFhnhyurBfwdFtPADdaoUp3EC",
  "key5": "4V5gWXmYwUgUArbEssn3HnQDnpqYkDwW4stTha5ZEwgWsx2dUuo399WfBrgZbotd51y14PrDGFHgEBdXmfQ7q9Cb",
  "key6": "3NFttyD7HJdkgXZjqvRnoWWGSdV3SS3c4sY1TqtJdiiAK6zqnLB4D1sDoerqXC5CbzAgDwcwJvRuEi67kXhjEMbU",
  "key7": "4TaVqMBXM4HNJwUhofudCL6fUZRvi6gpeDCAGctp7yGquXxyYK8vHax2Sd4k1BcctiETABZLAfSe8ADvhbHb7TaF",
  "key8": "whVPurUNvGtA5ERpDPEbmSieKQiV85XSZ5YK7mr3feMvePX1RfUDb2HWNs6igjDKTwWkgtScQJL39gtcXSzXG6X",
  "key9": "5UVvRyyk1JBtGYz3HFx1FNvFo49wBvFCpYnRjTyDmwdKDmB1rsVkg5MuUbZjMy9qX9fUUvrJ8aqUiMV2vZ7pyCFs",
  "key10": "3v9cewHDQKJniEgfc2idQXc9DjBMCi7yCwrrkUZyN3SaUdHVCEkdrzqUQDMn6R7KpZqyh3FMSxcEv9HiYxNutdc",
  "key11": "4eP2SNgXAjPMezJyKNgbAWHgczLSenPawcy3LhBMiH5ckezWNtVnKrBosnVkwbWpvxm7HezdKRko5iAaVv9UREe1",
  "key12": "4y2ub5f9NP1fW2S5innnF4gbE1RzQ5QUPu6RjwnJY3Bv6rg5SxjK6K2yWAg9mrvwXUA2yYmwvP1JgN7FgEy3Jcpf",
  "key13": "24Dy31ZR2BYjjfw94T9HtA2JHequHuZsczyzAtbUvKAKDNi9TCVXHG539KfwdC3CgWcStLw9caMtZqMwg8r24PfE",
  "key14": "5UyAQ1Kh16KYsDPWXm7edMda77BMMGzQ9d9aQybQrkUpbTJ7vLy4NpkakAf6ahXCnNjJUdG2XKwxerSqZ7iHMgJJ",
  "key15": "x35aML3sxLZUgxwgY5p57a5a1QySttw3PuyDKcX5RMUnZah6TEwmKvSqfSLMppDFYsces6Zm3zbzheXNw6nZdMK",
  "key16": "49U5NY7Aug8TA4ja4LjTh3eJtiiT8nQHdKkCswEs33NRoxnNzTpHHxzdwER11178fGWPyyNawKwzon2C3MT2xc5y",
  "key17": "aEtoW8XjgA127hdBGjzH4SvVrwH5FUenkGvfwb45wWy5u4A3ZgQRttbS9ZhtvYnPPF4x5tVgLm1C7SGpvtKziW7",
  "key18": "2Wn3QbLiuPpK5Jxqrw9uCZVMrk8NhM4MEbiWcvGtLtdKXgbViJc6VZQJYTcwL21yFJ6DmJSj515N8E5CkmXhYWJH",
  "key19": "3NiXRZPX3jqoftk65o2VgX8s1pmkDizFLkcqaEYZtnepCpAoMfQFgvbRgeyuHTiejUCGHZWYFKNP6aDyf9xx72Sp",
  "key20": "5q22PLKSMhQZ1E8kLJe1MEMau5XPXtqj64ySsYMxjpsYW9uFNXW2r9LmjLKhy1B4HcGkZixWPFy4YeH6kk7Smkaa",
  "key21": "3hiZhP9Etv3k6u7WxUcxSgrmKVpQn6DrmLjqDGMxt7AQwdKrKcPrbdXSn1NYeSnNAkDf6V45sXjFvQPHXzfs7APo",
  "key22": "3hb9SUnZzUsLy3KCkuWAXSETxJCVroMZMPhL7UX6wN6oyoKLvL5FgEuBcmTvK9vAseVAqdq1rQUGkUqhntPGuc6i",
  "key23": "5ZjGyUkA6C6wMHhaZtc1PmBZbat5vwGrcHmtaF6FYx7Sb635BGbwjnZ3VcyvGghKQLSJNi3f9t4NTzD9MxtKFKxx",
  "key24": "3yZ4wKAbLH6iangjTE7YvTdQkFUXFNCcu4boV3jLBYLDyVavnVoMUmude8SM5zJYJLfar9gXmsRZtBa48jJmi1RG",
  "key25": "2g7GAETFD9PxQhsRk9YDKwW9xSq6w5HF7zBgA4tAMX1XKmitvjxFfuTsx2o3LoavZtMbgPoeLgSZm4CzzwKkW3jc",
  "key26": "4yTES5M2qE4eiUcD45mJLH7ZCC3QVgPpCVuB8pMSkYVLLRXz5U2ddAk7mTgwVirMkDRqiFGGoWsESz4CkaerhEeF",
  "key27": "3vpftDmD5XHgD2XM1txqLzd7CUFmozLUVEfYbZz1YyBC7rFqaZp9J6Khsdtt8FDbwdQ84NJwfW1zEfmwpndVysNx",
  "key28": "5QmjuXs1mimQh1XdsC4w5PqadBEEEXFgUM3uu44LNDBN9kmnwuhVzQaV1Qs7NwayzncndHBS8R1Qq9twNJBjGFPt",
  "key29": "2vSf7gPsGuhcszMubjb2PSJ8evYCEVxmPM12cMYkSz5mnd9GrmY2R3ZcEHCYPGuVW1cGiFucVN4XQ53xkc8NJh9S",
  "key30": "iP9txKq6Qe5KwVXKYFQncE2dCBmn3EDAUZKv1snCjwXwbqRj59EfBvSDJW8cU8zobd1AZ5J3qUD8M1Rit2UtRKq",
  "key31": "2tUhRGPcA7BtP4f1USZHMK3xuuGMXFia1bYgxi4korA17KBXSgvc3g8VRfQ3Ao5qW9x7BCbrv3ELz7APwRxUevKk",
  "key32": "5KzYqLPTnQCkUwtX3RYiKGAnv3uwjB5Rd2QQSeL5DvQq5hHrJoqjms3vCufGczETxDaZ1EtPfZHUNStS1prnR3cj",
  "key33": "42XWXs3U4qcDjmFTE7gLvmgPnHtRUmXCcsBZr73zrJfrvX7hk62M4izjscu2L1QVmV8xheTP6EjBLJCJAHVmMXpb",
  "key34": "5GGtcUZg5PZQj1ahq6221VALEdEVL6dYX6ksS3GgPeydGpPRGtjvYFD99Rc2bkAjnSjz6dnNjt3JoxWeVdvxxM2D",
  "key35": "UUU7Z1bj34i5txadMQgaznWyz7ir3NXZKSiYbJ8TfUYe2eLWDL3ZLmPbNb86yeimNAJcdhhcBWkwPvs74DTjTuo",
  "key36": "5wD3xtHbVVSVBxqTeEPtiHKZAjxH46phL5Wp2tKx2ygzAr5QdZbd6HXUqs6Lhy2aUMckPZcPfwA3mmjeLPC1Yc38",
  "key37": "4fP8wPC6nwnMy3xGCTCyGFsyhf4mhmsSWrbWwEAdyiigRDEXxfx67GTZTX3n4ziwMmGqckST7Cmetzk2cAVavDRM",
  "key38": "eFhXUpbb4gRD6EGao8wiA2drc6QhxirWff7q2FBgBjdbza6C4en7TfYiHxR7WtZ9zRai6bW45YxMLEpAeYUpW5i",
  "key39": "HSXu4WGAw3UThcaqB6frY6yZZH56r2gVBD8fCL3ijrwswKbbXNpZbhxtsXWamtiFn4cnJfPKkui1Hbw9epTVBd9",
  "key40": "67U5nv76J5JKoN7E5wRuJETFJZdfcXe8h2hpfYQfLNXwX3p7Qshk6pVNLLrG31ADegcZaTv2VkMZEZ3oBrhXKjiU",
  "key41": "4FhTd8whsMq5mdMVNAL9D3DpvJrSWU191YKstZgyJdCL8feKcZvmChEm274xYeNFAJviVYKqfoooNZiq7JJxikrK",
  "key42": "481bPS2Wa9MZB3C7Q4Jk3gjawuKsbQgpHspZ7ANqZKYwvZKNNQtmFtirGHAGeK2jahCrV48deEHJ6roYCddW38Go",
  "key43": "3r7Lg58edsG8z7qjyyYukFQDUkpkbLiVcwZjkynfqTLUjpqQtwWFp2Vc5xunetYT54vRieBRWAZVecK4dTHXQULt",
  "key44": "LhwD26ZWezG3uYtXhiULoC539aB6FEHBNHWLJh47DjLMT4vpe2zB4feekKoN87CkASchT8tqssx3GrGk6zu6trn",
  "key45": "5aXcfqy8KBihMz6v7eTY8SoevzXSnXrWfMK1EKgVGnC9m22Zo8dC3eChwmcFRCJSawCGGTZh13yDbPB4o1ZumruL",
  "key46": "3CtMeTgq5Pg98pBBhtftRp7DSxboD39HQwY2PJe17hF8ksWtAA8ifKdPwY7LF85whNBKYYJ5nMRHWELYvGJqCuZs"
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
