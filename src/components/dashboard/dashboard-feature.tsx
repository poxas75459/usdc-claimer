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
    "7NUSrbDNGKwD2cuseuDxD2pvLjaccPqLwDrau2ZHqJ1B6LBHLKC1XCyYXszcizeHvJs8xFzbmfQrKhBcr31nhcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bektev7NR1Su9S17AiYwYVcZY3bevauTSnBEaxoaLP5YKeRTg5W6Z8ni5PeromMk3tUGpxRVo2krBNVCxjmRTLm",
  "key1": "PsTYnhPw88XxJGNhQsw4NLxYeFCb9Nq6nwB94W6zi2FfYb5rCn6eaFUzowRGjemGsLDBrktxDACve1FhhCRTKZX",
  "key2": "2MYB3FNjym8MFjbFBRXyjJFVEJmJMZVdwphPE1uCKHjDsWiW9iSi9ddcj2kMSFeRdLfNQc8Kmz8miuwAELXHpHCQ",
  "key3": "3CY38hgyn1RF3Nxk8hcKNw5xdezx99AKAyQVchdFATLZ3nwfS7fP9Q2kDAhU7LB1oAdeNXgt3XcpW49YiHVsSoce",
  "key4": "2RLBSG53kwxfLgt8CaeL6QozG5obW5bJShGdxjRF42j5kgGvmH8NEuHFfdESXiSbPJta7YB5pLjmRnsBx7fhLZ7r",
  "key5": "4MG43MchjrkK2GxhXHBm7zoYJj5yVBVihzvxkyHeMCbk3q8E2djf6yzmAKZQhFATqKEVpajRkSsJ4W1Ezkbh24jq",
  "key6": "67NiGvw6a9MwQGhWUBueMc8xHrBxvRCRCwkHsqRoPm8h7pvKkDdAre53dqjhPR3BaH3LTtybMTfcf3zBcB4xzBt4",
  "key7": "491BYJRhWENJKasWAtgGGkCvzNjJcWMBz7npumNBaT7QvyDQxWK49oFEH4akPXoJWaeuFwowkxx4fm5pvzLPHZY4",
  "key8": "5H65wTWSQ7eHjfdDWitsNaoRj2b4z1bQQTee2Y5zmjTEqpExyCqC3oiXU1VR3jF9RMqZBeZRtSLvfdsnQAww4mRo",
  "key9": "2foZ1VhJURSpY7yYR1jtKKNTQE6tZ2C5ubZK5UBGYuiXv9qkFBTk6CvSYNcpxATATJcsxpeci6rFcMeN4Z2iSjcA",
  "key10": "4Hjy7jnogh38wnHTjogyt928bantcKoNupFcyTxc6ER6c3hANFxiYx8zS5Qu3UPfQ36Cnd8tCj84eEgpCDaEswDj",
  "key11": "8F3kHYr7QdaAZVpGvAUoiQv7o7UeqJnKYAQ6bSSomLTHBxseEuqSJLVT5Lh6Yk5mzHkWsQHVfGh9QjybzJoNJfe",
  "key12": "2KKrhuTibkfumWoupCK9Aa4NcXBbB9zgrwwWDVGjUF8ZY3LQruYERRzjDoQ5Cqv2hwgVWDG98KCrD8bJKSTXfh6e",
  "key13": "2vwv2WsF9RBCzgXW9yzb1onb3Su7yDvLjDjaMuRc7pKBMg7SPSRZ8yEfhP3aCiGJSqQwFQpwn14FdUHWeHMLmXsV",
  "key14": "2vQZ2kmeszGb83rMPu5daUPKuk8hkGEZY9BhixeHwdXXTFAuitz1PMsv95qjTPk87PkiFPxb14Rp9YzDs2yEgwCm",
  "key15": "5FzxS3YVoSrjUd6Ddrac5D5FXMGhCPq9DdbVAs5t3vKmvAxscWKw83UvrWVkSWf2KJTmH5vBwd2sy5BqAz9GgqdZ",
  "key16": "26fvRy8SsKPtKGM7LMU7ojzkLnR6ueSb7xFNDwfWntWM6pL1v8aWZ2ahzVpbuDTWVAEdvv6n9hq5WkbVTb7PqXMa",
  "key17": "2yGjUmK8f9sHnyRr7G8Sggg6zrm4nqupAm6FdKZP3Fk7c88hhEvDpb8Fjyybd84S4mYyX2SYFewtCZ438A5zayMb",
  "key18": "2ydL2Hsw4snjZyffL6hzvexSRYGheHcmgdBSXjBa62T76uU2V6gqVtEEXYJghY6ZZrLL3o8zpgM8BSF3okrLMRJC",
  "key19": "E3hfLwnRg2SnQchTbkjFsmLG14Xi4WBJPEjD1WVHMUhicZRwKw7TAr2UsPBstJ1gWQKKoja573jYvDhTScTLpLo",
  "key20": "4gi4QPXFqjrtdeBXN59ZhSngyprYYtssbZn6icDP5DJ6dwhofPwb1VbPxkKxXRhsMJJbiCTv7U2Pj5VEE565DoaT",
  "key21": "5SUc6kap99sSuDqrMSeQKso7pGXYdBh2MZag7NtxEQcsocHePoqBaCvkXiUe1x6sjPCUoAQtexp7CeRQEr5Lhzsk",
  "key22": "5FeyrTHQccAsqyZLpsyYRagxcp3bEzPY1QcYZbMQ69RXSen9V3uzbTie1h8niWQugQiSLXwHSiZiYooZu6hutsDN",
  "key23": "5zpxgVgEYSwFYkQe9KThMdvMcQUM9rupPwhVNkbpia9wGWXeutQRAS3i1UARgfCCgmsPYAWgPXGbpH2JZKnaezWL",
  "key24": "5uR7k4ntSoujozqBVurXcuZYwEWJKdKaW78DjYGdbuBZRe5J3k9RS8b3BYeUbzxzd1PLJpUvrFQvVbPLws511mHh",
  "key25": "2jx7WsNW4RuXXhpJKc4yuJXNCgkZ5E3WnHox3HP2BeCgezkYC91VXYQxPVaJ1oxSYLFqGdYTnTKb2ejkqHw1fbJS",
  "key26": "AJx4SCUPKti1dTb9nSMQxnTesWjV5ziuovAH1mNAc4LFDVFqxakHZoE6RULYn62VnwnELz38X9ZzUv67MbmGrwx",
  "key27": "5aFvgMFKwKj7aYSAcLw7wSFEjhYtWLfdKmzP3tmJLyah4ERt3RS9atKJeHRtarYY2dfjiNGDK5abxFYY5h1U84jC",
  "key28": "5sVFa7dRYWVtCkWQH51k2XmNbmqoAJzM9cmaRqB5ji7E1cCTx8VjCYC7WqxhfMzhAyRnT2XRYPGggpCahhSagUEA",
  "key29": "5fCKo4fV7ywvXZ1y4SwY5c3FqaSpgTCxFiUJF8hmbgZNbQt8AbDR2qoodvnDcxPRnWv4qqT2HHVNZK1rudxra9wh",
  "key30": "5oYre4TcZhzuSHbyu2CD31TY8H18iCReWBTmRgee236xs9aTb5JUod7Q86Bw8YsPWqDXLRf4DEC4MY5aWTcjekbS",
  "key31": "3cwwkZFcJEEYq3deLAkoJrxdry51Mnh8Jsqe1Pf5PVvpcDN3X81QmBkHHSnWq65fihZGwKoqgiR5ifEMeLnmLXWj",
  "key32": "3bLuW85gn7eceNmmkYES2f7gHyPvqUHuFRVDK4GvvwAtuXqk5ixG4TDJxsu9in4HG21GVyemoWNPBfuZMG8Qae4d",
  "key33": "EaKCihLAVxsEHFveiSfQpbF1LYtRtSPBhTiUVqtXumhU4TcWQ6duqqzACvpPmKhsyigHk5BUHsWX77TtYG148rC",
  "key34": "2GSY95Ki1RJyUM9mUVsJGynxYcWtwP3kzKjTSEk7Rs3F7goVDvqUSZAamoCxYQi12etMXhQmXh9wL3iuXJ8V7stV",
  "key35": "46dBLDUAd4pfgEbPxja4jFC7yfbTyxZYpZ7dmq53p8vitiYArEKRPAXG2DBSxBXuotHkuQKomg2RQMtF4bXAfPQr",
  "key36": "2xKNJ9fAFtr7AsB2vVwuXsf7Ch7nR3QbBPAmTZeTzj3hfgXrPFdL3ZCuWM1My9FfUedmLZvcvaGzKQ4FoRDZAYJ9",
  "key37": "2ufx3wQ3TkY8aBPczoJErQtgNHi5xXhPwgWYgQdrMUsjSk66NnWAPzNDY5UsGj2T4t7KUEtzqzaMXGtUu7rDGi6g",
  "key38": "h8Aap6HkSgTDE1wPgTjqd1Khkpowwznj7wWmTBc9d4N9Martabz8eTgh8TG7eSpNLUpVH8m8tjR4oSogDg4raDt"
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
