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
    "2sJ38y4DeGJ8sPryLPUTggApASEMYqTNKVGxso5sLPGQ1DgPRf4TxLFFEVvEVQuUStbUKLPE8S8o1m4m9HaTedji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ZBgwRQwBGkKE5ZJt8PFUzG2DiKn7DUQy42YmUV4qwhNdKp1d2dTaHxFpJGk8KdWChtS7VjcfitSsxCrJWrYdj4",
  "key1": "4tz5U9q1UH7oMSdbPgwo2VqjtKsVL7TiE5WwrUZHtBBzWwHTKJRjm78GGKjqQxvd7b6eHCWvadBZFJRFmb4YcA9v",
  "key2": "5dqeHBhumawsRiZtHYY8g1xAKGiDnEFeTANT4ARfxCqxkYz3Zo4kqfPbV1FiKRRmwtT2xwd3EavkwbVUknF34ynK",
  "key3": "37q8yEE8R2FthAgtHKWFomHBUbEwFnf2yp4pHLaMqv43cESTYqnGhjDoXWvLpdJcBtA9rtgWtq2NUc4vmTMNpnEe",
  "key4": "5njetaPk7fgm1M5XnmvGa2RAwF1cQwvJRqKjmSoEGyA6UkYeioweRoe54jwa9o7phmrrMjRLXFkNpg6ruC8kiqXG",
  "key5": "4uXai97fR14sTkDfcS8aAUfzeVQcNtPoys6LiTy6iCWqQhLYmEpBfX9HPPJN2cxdGuLKmMyamwvzqddPjzzebimT",
  "key6": "4oYpdz77ZAp3zYa7JGdpVtgWzNH8UHsLtnGGt6XyoHfNEBbaH5vcHMGXH6aGNJws6jzRWEeWgT3JaWLYmNDfoCRR",
  "key7": "q5AbEyxT2u7y5YFUEditmAUB4VFX5bGxx35vXEtEzbncpcTYZ1VuwWyAy4r8nLydRpWvKBQ4WwCvYx8ymdZkrHh",
  "key8": "2o6mz9Tx8ZCrpLqEtvjTNEneN5H4ALfFFjdcCfVbHFap5DF9zVb459tiV85wr64FXzqkdd7jYjwmzkpjvjPBhso9",
  "key9": "5QN4coX2jeRNpCZUju268enteWvjeXmnTJcCkyJBkimSsD2oq5Wu8Trv2Ncu9DFMdVPaeFouxFkuRXTbwjc5QEYw",
  "key10": "Ui6RqNjg5niXWpf78cordzNnus443Zfba49o5v7zdTFaegCrGcNPBFgswtrT5iZpVjNBDnQaVfShK4b8zPJW1Kf",
  "key11": "78F5JDWgf7F2iHrJD7Q7hqXsHcyPpDxK9auCuvwUBFeiuw48PgxvDQwsXWpbSgFuR19GWQ2U6yAiPMrhxaZTD9m",
  "key12": "4NEJcqH4TDri3d6fX7JpQGSxC9hKV2PJhjmAxev124GzbYZDUySMx51VrLVAxhP3esjgdYcGiGgGnNVmvwY5SeJm",
  "key13": "3vmytZiWJBDAk5BQUmfgiZ59cb9nRpKCsmA3XPHR7vrw2SLTj7Gsm3WGfS7DuRXyNX1aVyYpKo5jHi1JSBv8Nr5",
  "key14": "2iXEPikFECWWtBW6syegFpNLKcc3oWA11EuksA64VkfCv6v9PP9g6fuFd6hxJfshf4pB27LN4WGqM8byK3DtP5qg",
  "key15": "xX8A7xi33n3hjMVGCctHGB2ixeBCaVC2WiSHki28DZh9EdjCchWeYZ2FmQFp7cCEYywjedtZaaTuQw1mR7wZHVg",
  "key16": "2Mt34RL7agwNHm5M3oHAz1Ro5yxNjzrTNT3Bzkze7GVwDvZR872bkjqavhN9CwxsPkRzNEGqzZDSZrB7waWZDU1M",
  "key17": "5pAg5J7rWDtCVHNQ3rtC8kyq1J8XjdFbYVAQeq69mNCpL3ZGb4yiNDKVYGS58uQ1pjEdw3tpJmCBLEPSFyqNsTuS",
  "key18": "63m9MYob8PE9nC5N28psgAbVRVP9rtBRpXA9wWGEPedskm8JBbwmDrN8uzLbCYzoS5ytcbfcoBuJzFwGJDaTxySg",
  "key19": "4pdaYWqdHWDK5LZYw7TwFfsA5tSB3zGzYhmPozrowfargQbaBkuDdXk5DDui48GXA72pNpmDtnVxLLEQNVQzoodC",
  "key20": "4v8ndsAuLnDEFAvdGrhoacEn78HMzGnrj2CGysezQxjj93VTH8WTZxPcbHfGppu5ApWCu7fCy5JrQubQAfuREis4",
  "key21": "63JLJT7jLu2CR7aXiM5MHwh2Gq5z9NzUnu66AtXQ4Ua3aTnUZojZLLqiM8apEXk75z5C5oKxS8R2o3Tw4W3g3NQj",
  "key22": "282CJKt6BBaN1mnJ5HCSWdtQD7yQsKLMLWQn8L2iaCxpfXEse5Lo1NcEWRudCXYtAhBFDeSZGewk5wneQyAiGSky",
  "key23": "4NqcdDWCPgtHa4xm8L4vn23FBTHji2aXdGV9Y7NWgjTBJsMNEE8zEtFaDGFL7utZuaZEpijw8A8ituBTJcSxKbJQ",
  "key24": "r8j863eVaFKR6wUuUKWbYtRAA4jdqVX1vcrWRwSKUrpny8n8JGePs4BKjSvAiEKWXBMDttc7T6zMzdVocbpN1DV",
  "key25": "S2eSscdGkawMz47ZiFkbcreCAWJBw2QdLEGzBHg3b3coQndZ3kr78RY1Qz1UNBagdXjL26Mtw6fka9gmWd17f5m",
  "key26": "5b5L29TJH3rBVFNssbjywvkdU77r2q3Htbkap94X8BmqpBJFLUkgGjZV9eFy9WwwWQLinTniu1PtbpgE73yENhpp",
  "key27": "kda3CenmRwuyhNK5qrdbNgx3ZRZnoVZLQ4ZdHcB737Zegs3CGU2h762Hauygm9TvF6cD5EfbmTEMhCsHHf9SSpU",
  "key28": "3yWX1ARpXS2CANf8yksHH98vN1woxN4rb2gyqNJANZfMpNWKbUtUDR64sZgJhKWW3xpjaAvAup4nxjo65MqCgkea",
  "key29": "nskDCLGPW81y7KsSqoDS9mHM9A6DRD6CjkVRa4ydYWMU5eGMQctJu6jPspgD1gWSj3gGLs45qveuLkshkFxu4SC",
  "key30": "23VUMWAzZxmjGYxtEfWkxpy2qoJuCDo9hXi1gmJvTTHM32KjSYbquSBfSd4QZ1xSb7iZJafkdHkdcPXU73KASY9a",
  "key31": "5zK7K2jDCvQquUzKRhhPfHVWQFPKShM37NWQboGFemdXBPXCbjinhjSQUcfXLPfjB9FpM4Q5MPkKBgmESt93svbz",
  "key32": "5LQdsPpheCEh8UeTPN78XFoBgbczvA2w1D5JubQqEmB88hj2szfgbHHvbqoUgwYRcuxhgzYZwu1jU6hZUAi2Z2JC",
  "key33": "eXUUJTa8u4JCepjZrCv7XRjgt4oxjH2Rh1fThwKqiAXvncFF17KthRBrhNFyAM6wzF5TZo9XrFyqNtA7tBntK7k",
  "key34": "3uwFjf5vGMBwLsFpPjcRrqu4oNxiYGeTFy2bCv4s9KpDegxWmACdkDu2UtQxVGp283RWEFe9EVbeRnmQP8HNZmFd",
  "key35": "55hBQ8nPbZBMVetyYdTmWjUduuUGo9SkqABMQ9Qfpv1rEge8je3KLCDQ9rEeRzHLveWukDs8jWgSVzqBuaHHbwMy",
  "key36": "2uyPPDoMJ1evBpEkwRHBNHGFoS92pRUtJig3c21brn6LR91iXcCfiMCJrFgrRP6yCPMd7UoaYsqtPRzeRG89nhZe",
  "key37": "3tXXvquqx6MvD1eC97UVTPYQGNL9KUFAsPpfEJkParrhw9hLNLZudYRgXkwm6wvizn65aAsrmurZQTWCnXQgTQxq",
  "key38": "4JheeN9iYrD2emzpZaUuQ4fTjg1Vogx46fg6mGgVfH9gTnPxYENzM5he3v9gEcTQcppKHzbXduaJK6bwtNZB4c1J",
  "key39": "442X44UM1rrhF6F2exAgx2v4iSe3qTrs9mGEFcvycnF2cJtcLUzprQLupGSAG2u3enPmnLR2GXV2ukceCJqAbp8N",
  "key40": "FLWdqnBvJWZ1K56auq2LUbGn27ifNof6gUmTxze8fU2qiu77GdExrvYVB7D4ztHmQYsXfKqZbRWr4JLajr1mRvP",
  "key41": "28nJ87Jvud7Q5EfwojxVGqEJ85p5z8hikJK8x6r4FsnhwjR5gDhLPhhJ9dhZXrHbB2omcCgxAvT3ZTRVXvtKH18c",
  "key42": "FpXYGLiZuvQRLcYCE6MT6f2bysG7Zm9WbeB8Zd2qnQbotrLRP23QDdmDLtroVLTqwBztVvojNK1eeKVkwAt5jN8",
  "key43": "5rthBGz3uKYYHHGVMZvPXDmbnTh7fcqNSBsSGxp1tT2EQf4e5SadNz85AoprUyNmwBGQ7XXxnMxWt8FsRDFDkNPf"
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
