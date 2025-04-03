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
    "4oDsZKiHDtoMKboGaByL84juVEgd32VXfwDsgcAcKj4471nCVn5A22QV5weAZ5oyQe4Bqd4o9RGzGTDPC9TdRsnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hg7THyPV8SCqArkbyzW9jyAqWdn3Y6nMLi6K13DY2miccjxmNC5d26zKiwsX7FkUiDRs3aMPUvnbRAuPEXaGJov",
  "key1": "4RUkoQkWGpRW6ZXPe6CZ5PYvCpc6VMs4rHyhaKJcJ2KR1YXr1MSpWB2qKYGKgwjDpWaZtiJnjE3iiUpqPTBuxeP4",
  "key2": "2d9qxnGqcSRw52ZkhWSTWqEzCUeVpXJnrtJHvChcrmhe7maq3APof4yBdRU96aB71PXiRdkN58obrGvTobWDMCnd",
  "key3": "yF3yyYH7ovqUCkc5f2n7WnVwyhZYivEqMcwFgxsDYhHyPb6xenQdvzxsMGEDdkBCsFYy3ECS9iXXeBxbHAzuJaj",
  "key4": "4bBUfXj4SJ33wJfADkSRqaqy6nW3UxirTsofi7ctYuZNhQw5wasSQBfFzaXCtyKaFtAbvHcPxed5s336jn747pru",
  "key5": "RbPnVKAmNZTewJunnHwMVJKcwZ28shoGRmtvQiUXH56yt5taUkWEsN8J1ycpFFgtAicmswHZSWXuXKFaNT94EJY",
  "key6": "5bbdTDgfzFknpJfa599DJNRmuMEhCceJefbvKYwQ9eguajFMjsgmF3YFeV2qpXLAHdmFcqS4PAUc8YeKuWDRgcet",
  "key7": "5dqviFMoEPXcUyJftJHKKy5yqxGiAJY95vH2LQd7NKM9tBxeXTiWL1nhShRZrM1hbqxiG9rait6wxa3U7k2P6f2s",
  "key8": "2RnjhTys7BTN255eKkW59mw2MZBXdmJfhpoLLFwAT8LU7YF77cK8HgYJ6kGKRQAR2WrrGisB1Et8iJcJHatfND9S",
  "key9": "5rKZy5GWCzoLzyo1rCxdLQPQCmvvwdE7foEApAubGKXjTbwNwRWgwTHS4JZK3Mme3uvxK8JCeNBe1Q6YYEd5wkFK",
  "key10": "jUma1TSMqxq466STdt7csHbQPHCHmvrLPDg878ZMJP1nNhgK53GRcbE3GpgpUXBZSYCy9Jz4h6JsPd5Wf74ZmtA",
  "key11": "5RPYYkpe22QUKQqRnBYsNWbkNMPWDcosefWQpGuaPxnSqtRLbHJCoCzua8jqrcrpzwmj1VvGmC7vW5in4UwpuQuy",
  "key12": "4jEF1L2FMo3hssqg1JygzADkos7PRkxqSXESfKHbNmVPUjRFYLN9FPUENqQ8odfvsJD6E5v3mft7TKxGMfu8Y4YV",
  "key13": "4Ldu2j6i2m6TAheqBhubbPkhh6J32bsxNikqGSMnT51xJBDd6aKsWEfCPUNFxeeDe5jBb9iRZumuFXLyTa5DJtJ7",
  "key14": "4BYVa3aymymLmag9nPAJmdo1M4vg7PD6Ugf3gBvzhQPwsg6jSLoRHcEgcBCZ98QJBv9oFrPVTbnkN9y6XzLV4fpb",
  "key15": "3hiNTA181Ujk8CqmLth6vk6zUga4PGvp7hoiZs51wJ81DZwqqDSxHbnMoQbmK1nDSRxGMdgs7XDzykYL2hLerWmv",
  "key16": "2KGWm9wmFe5B1EVY1wWneMArynDGrt4LUWPMhcpr4RW5RpYyjPz1AJ1TBRtBGFkojqdCQbdv4enUsAzKXnY36avt",
  "key17": "2aU954GxF4o98MB7mX73ZzQ4k6wEDrmmwhHr4wMKBDpPkHyL88c2DrQu7pUmrgU9DWeEDrFmjBQeYs1JzW7x98cW",
  "key18": "4gQc1tBM5XtGsT2JqzuB9nPNBf8qP7gX4LC21XUasH5SKw17hKfCyDPXXPDgaBHS9NxQfHJqB6x935T1Lwdi9i38",
  "key19": "6SJQhRdPYa94d15rLbFPtuE5eLu89Kp3xZSo4h9sS2VocN21fAcZ2skvr73UCBNkywsvnjGvv8qVUPShpLWLS9L",
  "key20": "5jfzzy6vMSmx6FR6YU8YPJF6jWFVK542Jpqqay9AgKEd5oK5Zwcods1KabiBrKPTGqL6CYmzgRhk1BKK75gXgkmd",
  "key21": "3SNTR1zwk76fhtJkwk1dpU7mRXmj2wx3tJVL87GaU3HuR1sPCs39Nz9TfCPvg36VbiWj8WXYMDh18EcbChV3GkEe",
  "key22": "5eJMkY2nmzpNrWvXpnCkYwsdMyhYmxj63ptCDN6b3Tkq5YeCpxNBPjJ5nUCdXdJo54ucP9i2CHjmJK1547m64VVj",
  "key23": "4GVArJYyX8ZrzCw6bmt8TwkzdMbsx1Ldw6Jx8rNKDEhZhj2GyuNy88awDN8DP3afAbDsj6Bq9D3RcAGcaFTbmS8W",
  "key24": "2mokVf9a5adB2kvw7YUCkXQvb7GGErzmerTVDbWQ9DrLqhVCLTr15YwwBkZnr5p34Xzr7Xmiur9VTQ3w9d4faGKA",
  "key25": "5jA97Ljt84NZSbzbZT6LQfYXxh54JGAi2kjz4ik59NrCyntJq18HhwhxSJTkMVPBPuW2AU62BT1DXMeUfmy5VCBk",
  "key26": "K4tKidNBAD4QNJLeXgqahMe82HQHTLEesRzGTS6YArNF13btnQT6K5MGShYr4V6eFrKTJxvfqghCyobB6HEWAP9",
  "key27": "4jd8DCtjLVgnrLCAiPay44Nj8uLhy7VtXVPQj2Tg2eSx7G3M79fFhBQcZ3YhP23sLi3dYkW7EvJ9MeWTeUuSZy1h",
  "key28": "4Hs9E5cCvc31HYwvNbU2naQNk9DCmPRhaxM53Wr54fVJPbmJ9f2SoXJaEG2zdfnu83ruZxGTUnqaGqZmSVUv17Pw",
  "key29": "5G2rbPrdKrk7vEUpUSU6qok8qNvNXfDDS9Xx3SxBCHKEYnf32bP2iDZi4PV8vE7bgout8LGPXoBkGiePzyKcQPbk",
  "key30": "3zrBgnVrqTb2zTgHDTmpCNr1bGRcAZFy4xdsXcFMi7crwZrV2iVeCaP1RBGvvnSQTkgahVhTJwiUJbCgjsfT36Ui",
  "key31": "2ws5h7PMLfSL4vkFTEBXDBDFLj1is3XAsK9iUebGE7Zh3jeeou1qeZQMzRTHTGYugXHXdL4u9oXim8u1m5tPxi12",
  "key32": "3NTomwEZ3cWLk9c6wSF2o4U6wxWzkt5U5VTYuaDqq7kisbTxFpEwrBL8HZABS8HLEQsHWPYsabxMxmtBLESHQWh1",
  "key33": "2GEeHmkMtmQ43Xgx4aYRqt99jfQE3dY8Cj9pUUkKFCV3nGhA2i6kGuL8KGSygjXRiADk9BmkpXPUepPrLxTKboWa",
  "key34": "3wrruYrxYDGLoqUnN6L36vUydCfz2UzDbaRthhKS8bBeJKB8C88mzF3MdWLer8uTAe6UJbnCfXdGm1JMX3Xaj68S",
  "key35": "G6kp5ewMfjStKn6JaR9W1D8eG44ELbpW9SzCeVGG6PsZ6t2hhfRGpjhSXfW7Ee6PnuA1u5BturpSroLppMPD7KF",
  "key36": "3caFT4QxXDv3UdXJmuPPaUbMs3p2hzjXmeWqHC5iyKFVtytKjeX8N5btRmUzyD5AvS3nQkYWXBUSKappY2Hc31xS",
  "key37": "2Zvsc3kE8Unn6nnGUFL4pXhmAnq4W4aepqMEPA5oP2MxW3Gw7KaMFkeZg89SHszaqtqcChE1gVjCZLD86KE19TkC",
  "key38": "5HuQ1vUVuYVTvUYrT9w4yGRax6xGhn3z5W6bdna3tkoYHfmTzwDyi4HkHvX91AbpBZfAj14xAdhCuPBTXfC6jZMf",
  "key39": "3XNXkzzLMKcnX9cVLd5TVzxZMpqdPMfnUk5sm2jLUZ2wwL6AQBuqJ1KpTxn3gy3F9h6vfySYSjXU2ErSFThb1daP",
  "key40": "63sNdWDMjK3cK5j8yo2vw8YUgBwhsAMSudnWKV25cy2E9aXoxCdQmxY91Q6imkxkDUmdSdAwUHzsnkPgBMEoiv9d"
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
