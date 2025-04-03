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
    "54MFF5VKV541EMJCxxZsYmsf7yS6dMxgNRTTweYjYU5RAEjfnBJQegBfJoY1BmPzXgdpVYybgbbTfJRjwdYeCaPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zkytmjczQu7MjiV9CJmGrk7b1LQBsSaV4UGBa9GSHZDJa1DHCynfaXzXSUqf5LnUR5cz2Ss6a24J7KdFkwaR2S",
  "key1": "65DtvrsjidmGqComvCZM1DLbhV9PVjLhQ6HsxUKN9xbsbyhkNkCwvgVjAW2FeBpa8JZzohvyjkLdMLKWBwydhsBF",
  "key2": "fu3UbFyEtZTLmzWBejmD1LuU2Uyip428WABGmJ38K721Ng4niMTHguMRqoKXJV3ZZvFuBCabjDroRqkaoYoE9sZ",
  "key3": "5jGQCPZtVvtQDShm28QTsrkMxMBoz5yELxNaPExbMdnC1LnsTRHvoumu3wHFWuh8pfeYNBrtniEYZYE2GxCTEyQ3",
  "key4": "36EkU4VveaS9WGJ7gUKfsBrS5ttmjRu2279mVrKQpFcWjHaSx2MomM2NLq8FrkrcKG8q9d7SfveUpRWRMEz7bMeA",
  "key5": "2kt6DSM4UeRRmthsuYb94DGT51ySa3NQP9pNxxXHDcbzpNxUH9WEyxVcSqj1m3uL9yRZoWs7wKjkusxMRiMicvHJ",
  "key6": "4uCiKbnuJosChNR85fqwq58cUWMhU4DfrPK4LYQb7uP1pSaF8gESaC3WYGciJo5MRH1Tzt3QPph3UQdbYC3kdnHy",
  "key7": "2TFudxSxdtHnxbUWzyeSxp8gX58Dqzf2zATnGUwuFfHeSXATv9viTMP72tsP3FauN1NdBuGygCBMqjXrrtoQrmN",
  "key8": "MsQaqCktSNztKNGT8guXriRKWCX6c4sGnGtmXATPqz7v9e4w7fGzYpaKF75k93sQsh6vw2b3w2kLitHTr4Ksngn",
  "key9": "5Bn6FGW42NtmH8PhaXsyubFHHUbUwzRoXKYP9GWCiFVwkxAQWzSqxU47M8qJgbGAHwHCAifX6kbHWmbdmDKGv7UZ",
  "key10": "2gq6ed8sKUoKacxs1JmvEhqjwJ1ksjDB8Efg6TJ7koBWtW8pSQYa1P6qUZ26MCtgbqCbDG55oFTYhW3b6JmmFptx",
  "key11": "2gXxdewKhaonrgB5zrXTuWWQY2eXUPM2cQ3aBu6d8pBqH52pFwgKdyShziPWb7DcQqjbCF9sBPmTDtSBRjKe3fAf",
  "key12": "58daGjYLyw1VBHDtRxteYjCwQY2Vr1cLDPD2mMpR9rFgTSCF7THZESH3WsE3sxCi6CvW5cEdq1ncTioRGCXaaSTL",
  "key13": "3rc5BCDo35o2Zw6GdkhzKLCLyovAxmHYc12FiaFS6wGNjR5jK7x4CbfqZxtR6sfT6Xfwe4KWH2a6GgJ99vr5A4XH",
  "key14": "63SMGo2JgvFStKbcNf3jfsngzX6oqX4Du1Y8t9YswXyhm1Qwggv4Np9Crroqt7viSYsVYck8kLDKgHrXbREygxik",
  "key15": "2FotRuWfuboAaz6PXqkA1r4csnfLZEutmTy4b4HDSPxZaq4Emk9PxCZgoVjpWvUKsqmcL2mq8xAV8R4zAW6gT5AF",
  "key16": "2xhHzugK5P1B2347cW6ha52gZKsBqdieWTE1ZDaCwYiJBNGkCRSQpvTtyPizdZy93nqdbWD7MPzBTTPLJTtgC8kQ",
  "key17": "jbxE4ZnxQakA3KxXdzZWyVJWwgEut6AjmRDUromp3ApWsmeWXdwWMNwnSQ1FPhogpVVm5jbMFZ3h6GkAkdAULio",
  "key18": "3qGwr38uCAzLBgcByGFqQLv9KwCGUgf1exCMkbnedT8YRkXgr1R3HiaFF7XbKkSxb7WFEoaqDEpr5kLBkPRHQSRM",
  "key19": "5NpAFqD7bj8SePtyJa4oUrz4kd3E5XEZEj2CNWbM6cYZDHhHdLxduScbRiXur2Q3hbrmDryPA9Eim7PZQxoBGiwF",
  "key20": "mPicTTCywuCTG9UJXnb3ynmcYHZn3QZMfmthjQPJCRAXc6SdDAcQWJamvd5CWb7kQZKwowNkgK7oDvMnuKzQ3kR",
  "key21": "23u33Nh53xhssGg31td9KJ5jFDGdsWpLKziLEr6P5XRnZMwBsR2mpFrXf7xzSc9vpdba6jyyTddq9kCXtX3cPYut",
  "key22": "2SbM24x4wb2Qu8EwpCUvaV23DnpbSiXxbhDEGRw8Fx2JTAcbEZU9XuuZAfWQrVonUibXnyQRdMhDyigAj4d96Smm",
  "key23": "2FauBzfrWi24L1ky6QxGensr2Yiz45bDaVf9wPbYasUzGVhcxfyF18yLnkvcEMWQ1D2cZcUjQEXp2cAz67t4vrEz",
  "key24": "N4Ac1y9AkzoKrV4h4BJav2bVryrVn6V4VxMdFbLjiKcUXisJmWVKibi3yDruCtaAyqvMyNBD8tH6Btgw334oXa8",
  "key25": "7jU56T5aTqz2mwVXyaFbvMk9pfRkYebH87RoEdiZt9KzNGYP5dEjcivhP59axkZg4ZmzM8FHZ9bEmCJ34dVrFjQ",
  "key26": "4EENaqqJK175s3Au2AurTR4hW4P3oyKjwCyUM8uo8VUaczqLKLjprXqCkPZcbKNVF6gCbYRmeWusq8mu4Q8ves1r",
  "key27": "2L8PMtZe5vjkYAJPK7Ui6qgKJyNa4eNMevBM65YQVevLTp5YXarBWTfv5AX6WuwG2ypmfqYPo5tjL37ShZQVdvaJ",
  "key28": "3cGQpQ5C6ZHS36mrCCu6Gxi4qtLfi3WgbLqw22iMmhi94iwNKngRdUfkjcn43ue4QWtmHJpwgpYkxtYXFF4ZDHtt",
  "key29": "47Ea1WajFrUFcXyqhH5f2efz1juGQfxpbypUFSTjMQ8hXTRrVKBcFbRgzZLsXJ5hPgXGD4m6x8LApKG49Z1bF9BN",
  "key30": "4o7fmSJWagie6GJ8HXNDAZarx7uu4Tfye8qNpakuL2CnU8EJxKw5T7hJkFDH9RN6kH1wRbidUDXFoPoBXZXoKWpv",
  "key31": "3tm4PfrQdxkWZX8wfrMy6S8yv6iWLwghdvXDdAFqJQ7oqxAhUpBLBJD2QnvHvqGhfzp2dU73QFakZyV5v7GRigqX",
  "key32": "4ELXvKHc93N6DtMpaMzbDwoMg8yajq6aKQ5wY5uwBrYpuGLecieZEU9vwYeHaXB9J2wP8juSJZj3CaaK8dH2juMC",
  "key33": "4Y325mjk2D4xG8idKDhU2YaS2FHZuYj1prxGFT6X3JeWWNk7A1jk35ormbFibUr8MVAane2q5Muyxanqon9ziCfV",
  "key34": "xWR78VguZFU9UxtUPSTPt1yuZKtdgGveKc6U5NiZfofDEuQeyC2NQJFfVXcyNw3SsxQjwrGw8UUWNyfGwHCxhgA",
  "key35": "XAaZZ8cqdUFLT9dT2XnwZkkY3DDDnL8aHt2GTF6AiJky6hQpyGkzzN8WTAdeWv7miN7HPFacR8vgDBzuHDGmQ5U"
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
