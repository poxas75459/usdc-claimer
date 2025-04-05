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
    "5Gt1HojjMxfZkiPL1SjyqmC7H5LyqoTytfqCK4wwFcuZXcVrfnbXEx2knCxjvu9NsUXWtcK7DjtLDy2kfiLpnb7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Fm4paaoNCXR8XwKPv39iVEAbN5dzyvaWpawBGE44PsotattC1tNbaYLLt9sFyux98GSEwSvUwQWLv6S7mKnui4",
  "key1": "4PgRn154e5MSRsEEVFSMm4bSfvWauMLeuBADkGXyR5XxMERVfNsdzsJbQmg1ADisuoVQMftGkcdzq6VRr6x7qsSA",
  "key2": "32H9H9h6Fn3zFHjxCQtJJZcW67mT1LjNn94FsBhLPZ6HTBiGFPT62XMzo4snGCCERXiARW9bFXb6UqLzXrmVtgKU",
  "key3": "5JxGrFWrckFkktpqFgPSkPEP9TPbW3oPVYxEkDsJACvVq5xYux8MJ7R437waMMGB8VWat9FqfwgPgwyEALiWFBEQ",
  "key4": "hbc6u9joUhyDcjT4Y4cmK13uu8PV71rBAyAGwo4QjP75iLjTa4GQZAytFus6rdzFXXBAToSNSjMrHxrdWPoy2sv",
  "key5": "5pC9c1dW3DdvgjquhRsWMXGCoouCLLNA7ga36fuNFYeKeQSQAJY36AsvtGRf41Hft9mDP23HzmLXcisbC2AGbqxd",
  "key6": "5FoEVEsjRtEYVVAYWbCeykGYubheoJrWn8inTn7RCn8cNGcU5RDDb8uQ62oxacmKpqRdvtHk4UYd7s3hBM9sCXSZ",
  "key7": "yLWzKCRbDGuNfyVQAVG8hydzh9zHAc7rMnZT8szg7bSx4Va3KvaFG1YZa6CPxgC3F5ZE6W3MB1trx2RM1KoiYsC",
  "key8": "3FrHNzSiJ8xQiAUedcskgqpsRzrxYKuqsBBbqV7oFN65icXmgigQqrgKw5oYzJf6AmMGakoECh3ATisMhugCAycq",
  "key9": "3S3J2Hfd2PACXJGY91VYFUB3ypTL8Lj8y6gr48aUN3s9KZUVJtDwydBxVCtTYzCFYK1UnHT51mDD6Yg1JayMmL5M",
  "key10": "7qcjVj2LxVnbm57gxLmufwR7sBD4Ty4xGtnw42CdxCBQJkBmrKkg7kYoRf4ohwrp83BgVYpnedccbYC2SHACDaf",
  "key11": "4ct9GaeXLM4BNAaUaqDM2uMiGHPj5FachUGzonuzwkNRnFNsAafvQfPsQ2sDcJe7nVGjq3HMThYo5ECu8AvYEyp3",
  "key12": "5kYDN8e5o7J17rdrfMFfC3peaenTYph8KMMx44CsZCnySwDr3RSKQriNbQ2yYDypGCy8oCA2vrjSxXAPNALQLDyL",
  "key13": "2kpXaqoRgVWKnV7KVpVjtRrWUJgtfmREF2gMAYyazPt6Dgi7pzwW9QP9zQDZ5HnaRwrPwFAgrbM3qU1eALSmQaKj",
  "key14": "nC7GfSTjGs29m8sD3njEVYr5cAcXJqVGbnN6HEPKnppAYef2mc3x6ZwgDkiqecMkgMJYJhd63BKZHhhhTQYc5Cw",
  "key15": "5TuNvGSQitQxpe8pUYpzjc6WmLEfT7qAkH8qKL9wAqEEs9SiumDWctoR48FLSJFq67RgrSKbxT2LAcFQZmyJgutW",
  "key16": "5yid8BKbuGmYooiPy75RU5ptnkdDQ6E5ySQvqmDHnXo8HBMKLg39Q8hAmbJmeD8dyDx3CwjWgLxLRULhvPLKXaoY",
  "key17": "YN7cDGbouRXk6E5WrY1nnyMGyjjYYXvnhyxrv8hZoRfjeDYWYW9MaBWmeouA7LhiptUUGAniipHUZhdKQ3yHb7N",
  "key18": "63g8QbnTJDcBnP7Lseyi8Eb5DaYEnP95aiAteGs4zzkoEEqgRe4DWWHhHmeH8e5sv154LkDm6MQwiQga28CMUzJv",
  "key19": "VMrZFAmBdX4xHPadY9vgJ9aWpztcwDDq5BGCiairz87py42ueN4DXRugQbjeo6gKSEF9HdcW3tpuM8GvYCTBqKv",
  "key20": "VaSzowrDi5kDGnLPgRPc7UYxS8sA9TSXVdomeYDv3VLqDiLkqUMbsmYdgW9Kt6tnxUM9o7YQjQzn4jPHonnwNxB",
  "key21": "5243sRizooBxZo61td4jbEUv3sVUgRt9LP7ymLYzG4k9geCYoDVRZN586qZQTca3VACch9X8ENw2P4A5SDGXcWk7",
  "key22": "5JB9EGXuoHhwjKtU27263nJ9MY8gFnpUcDyUFCbLToENw19qLQ5dUcpnRBUnCdJdks2Xw8NWS3yqF1EbPsJixwgg",
  "key23": "69w4hdeNFoeYgSJeAT4VaPxviwnAQopiMVomBQEUbkbqocdNmygMf5xiZPKQacnmfhsyWBkhRxWtwjzC3F3CpPG",
  "key24": "5b1MF39gHEq7gWCW7TcqCd7KsUoBc8zx1nkuCXSvSQ678BCS9HpWHKWyeE44HppKkCZDcNvTqFDBCTFuL4suqXxc",
  "key25": "2XscytbbdxZkAkQy4yKteeMwix8nYZ1aPjWbq3FVVeyXKFjmms8piG6rZR7mwEQPZULM5ixfF8DgPtKvQf7XZw7h",
  "key26": "3GiLeNTfvUbEuxQJohZ9R4v2Lxamjtt8gc1R1LeydzoKt7znt7JbN5ZmtGrEPGBEXVsqPk9CRuqCkiU6WeXnjuXP",
  "key27": "451PnyBmi82EPLAbD7JQ1Yq2xBaVf2LfVgTxtPtywQYZpAfVVozWWLEB74axTBZG35ghRdfykbeqkjji5hRkkNW2",
  "key28": "5wxiyE6jCRcoY5VgsGxDcaRLvbrXz1Ufaj7hfsRUrFtUH8PsuV8vZM2RG5m5nCDhxbmwqBqUxDPPbKJRGfgDLmTw",
  "key29": "24EKavvxsQQJq1x5e7tQfDh3bAbnwhY3xipTAxtrEC4RbKSmNA4yTazpxKvQnVN1U3XbFQPGZ8g8Y6jQZhhhcHtr",
  "key30": "4apadhJiSzH7yRLvKaifUNiCrpRTgKZm8LoVekt8yfi73JGG5KeXMVh9yUp7WQHgA6HrMnRwX2vcS2Uai7RQ3w1s",
  "key31": "5Ffzp41TuXrmZvz5bwnTB5TvdHhKNeAm1ULW3ThgrVviJ7WEhgdq22SGT9WS3pMBriMmuZc6nRqfHSGKQHA4yX5H",
  "key32": "4qaFyWsA37sFKz1y6YfcEYxsVSi5mT2ePH3vdZnjkbx6kYPBmJFkwGoAonTnY5HzZixLTaa4GRun6gEedMkLy5zC",
  "key33": "HVuDHjHvV3rQknm2b1RSUjeu9wVwY6RCb2w2wLfY1Mc5xzW6MKAABvPB3jxCinhxSx1LUAuCdjLUfRsbYeSYJEF",
  "key34": "aJuurcCPRQ8XYBH6bx2rME3eGKuV8UXWPUZ7dKhMqNXQhqR8ehe9UUcpys3k3Fx5vcgeK8yH57PzgxEjZnsyCmY",
  "key35": "39pKwg6TYUy1tzzGVERLoDP5DcVvug2wNP4jTdL694k5MiWB7PGrJcLopYMJdvoKkeHWYHryXUp4gNgSgB7sMVoB",
  "key36": "28dseoPzCaGHxFNPhsYUP8aBQtxxHi37RenLc9hks2NVKSJr7Fx2ds9j13dMziLzZk7mabmxpKmiA5Mmsgshn91t",
  "key37": "vwLCDyyxnCgXpx7JpSypv7t1e7DmSCrXS2iNqfU3hSndWdBotW3e3TYTgBZtWKMtUxkh7B5uirDVFjJPGbwRmYG",
  "key38": "5JkwrBwKwc2XCUi5RG4wwVvN7Gvn5K8m8rfJ75wTd9wrtpQ34UP6TPpG4bdGARbVxogfCprC8ugRq9iRqa6DvNjK",
  "key39": "4C3CUi7vj3KdvsgbjEwZsdnER9zkZB919eECpDWucCxjZcc9PPZkH2SG2XgQXzBP2H9KS3DG9H25x1kDBTsrB7tc",
  "key40": "nUfYtPPaFtpT46SSHkycwwXEUuaYDkBxS762htcsUws8Rx6Ehp62gWbHyM9SXU55u7ufTzbX5Phjt5Sqd2F5qxN",
  "key41": "2WpBjg4aqktd4ViUYXMi6DZ7aAvbxGALPwYbWgTRZgVjuBrJTg4SqtpbBnsK1B8u7CeDFxwVhFrNhfbSBuBA6oeb",
  "key42": "3nTq1dSobqgxxYazwba8zdpi41e2WeiBn5KpHy25rZogeH4mfEUJvYnNnoTgCoS7dtJ4eYXYtcSNPHH9CUtcy6Ad",
  "key43": "qPtG4LDgWU9bpLwxyBgmTUf62GrLZhbVwjRmpkgXoqtKqqCRBaZBx8rSj7UGkEACUzfZ47aHecNd9cuMu59VMQK",
  "key44": "xDiDp8uokz2ec9pUQDMmx4Gs76nGT11rcq2FyKbnNfrzFbQ79432kA7457nscLsV7rdub9eB9QZAfCvZ3jZifMg",
  "key45": "2tW9iB3zKBTF8nX1uE29LhrTofbauS7cRoCRgvKmo4rBAdUZLkpXRs7x1rue24Dow4ZUSisR8FBW7qvWccLsjrR7",
  "key46": "2NSnkk2qgGiNCeHwfQGa4mxSeVzFt3pnLk6Dk9A52YkPa2hACqYVgNicdsDWQZg5K5wqhVL2N5X9JJNTobXfzQQR",
  "key47": "16d3H1acZYgH6tTdEMJ7fUphLrdnuuFa9kAaihEiRVAi7PJNDDvzfgH7rqxPNuCDhfwjCM1c1ZosKqy8HNnLDHT",
  "key48": "4EnkuqRsqXgiWRk5rZ3dhQPMhQfP3nSMiCZkH1WVEv1QmfbncnaeNr2fTJ8AkJnYkGPdgbeTsr1qzy4RfNTzuBY"
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
