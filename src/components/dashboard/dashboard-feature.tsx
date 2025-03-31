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
    "3efJZkkrA1TBxEhL1xcVRQub2Cc1H8A2HFe8y7MpxJtaPYtpCFSE6cicsQ1x1tE1RJCW1AH39CLj97RBGxH8mNNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UqL5mSqq79o3zSDFMdx8d7eoq7X9HULPYQeYna728WyHsKdPEBb6vENzALfHT97ccW8nmoTMo4dGac6TDTyfjbR",
  "key1": "2daP1XnED1q4zvsNrUyRDSA5txjeTRRBm2NexE8P9JzwCgV9eS4matz4fcQTgVqq45v6RwgtWUzGowAqt9gaaYid",
  "key2": "wZc4dYoxiuArgWH4wsWVQGHSAoBUL1g53mUhPrko2X5uhoKzXTVJ668htg4PQrECDbqLTy96LsbKyumsRGLq8mF",
  "key3": "58D8AC8qCaUXaffhdY2Wg5uJi1jx6iWeo21WR9kosq7kjSZRiijoVSoMSW4XxnM3nrDbNyUyqR1VjEYRWZPHH6tE",
  "key4": "4wRjBvMb5Jhfwm1PGudaAH1K9a7mcTa2b7H1Fr9cmHLF57VFjaaPRBKXvayAqf1Upiou7u76oMnCDUUPFCcbE218",
  "key5": "GEzz88Wisjp4EDmyq4nvJsRQS7ptCZCS4cPEmM1cENDRNRJt7wGFGVXBh1sQzg93tdLkWXP94teRd25aZqB9mbj",
  "key6": "ySZHiYGi35zBnWbLNJruhWx671CoGS1vKbh9batuJVX6VT26AwexgC6scVCJgiTMNufYfftt4NMMdYWyPh39sjL",
  "key7": "7Pc42urfGxQPuuJETEhEDwG9EEWXXgNAm8iyPykLyyASCWVmFFaBCoK1dnfFgG5DqSQUkGPfwdA2gueys13R25b",
  "key8": "2HDtme9ovZFRN2KvzPz12y8g4wUUSTKyziejKSnQpdwL5GBukohNQUZ97uk8nsfnc9Dw8JHTN68wX7hTGtebs2c7",
  "key9": "j1h5DDf2FA9croj1cPNp3CcB2jKCjzAHThL3baQS9YLTetQz4jHHDsmR8T71AJu1VrWpcmsoR1qu1wMGKUs4bcH",
  "key10": "66Sp3G7qTJsjoXZWCwJYrnaAK3wsQvajAbM6LdowYutpSqb3rq89xq255TFG9vXYPj3CanV6Z6zrWC8atFnEX3MP",
  "key11": "37L4kExBWKGeMu5KmVCZWgL2Xpxqarozr6fyQvSE3bUCJKAPpVS2Dy9yemvWeZZbk7a1CLzkZE9Zc8jax1oWGcQD",
  "key12": "3n17tgjf1iwikHsLD6TUxqC62DMeTmHiMAcKqp8LyRm5v3q4xMVbuztkefhnDZ5y91gsJykdtQKuj88x26XosqCg",
  "key13": "3eRe5Uf1AvGk418B3tMMRuRdfEjEWV9wzTinR7aQu3UUt3Vx5pksPXPzkz2G2uJYHLDNizN7VuAqQVdadSebeSVb",
  "key14": "2AMe5fZH6LVtYue66aCecdFjqFo7YhxKLtNy2QcT2zvebg55k8q34YGcUJdDerKAe1KwrGMArMp1XJo47UKFqD9h",
  "key15": "5HXmsCwRikfRcF1JEmvnw7fKUAWQHrix4g3RtsRomZvcWqVRwtbRdE9vptJpeSYuagehSuCLdangciA6s8y8ntcX",
  "key16": "3RLjsqunvzfnp98LmhuQbSKNLSjN7vT3e9cXMmdYf11SMGiTFAeSCQsTw7kobYdfS39xhYem9vgoBSquuXE6UdaZ",
  "key17": "3XyqsxETLtFyS9e14ZFhRiK5H2etESWwY9PNHPHDSZozKq3SphpjaeMavL9WveQWM7BHWjde28dnogKWLtboRbMR",
  "key18": "67hGPjK3Fx5tWpx31C4vqP8kMkNWCWsKMhEmHSphLRaTQeam5nvvwjsRJoHv6Ci832TNbrQvquQAbHKVyDrs9Pqm",
  "key19": "3b8Ptt5P98By2dhCFiViSi4QbZk2rwPUeHeXnrQtx6ratxBTPbH5YbQcN3BdFe53RmWv1wmqMpPL1L7xNje9kwtC",
  "key20": "25LJYRowVqy4aLBqe5W3NkX9Vsk7Th7JNgmfFRArobHCH6fYH2DNvuivLk9fVbLxBTos7cDuCcXXjUxKJ9zJB1mo",
  "key21": "zE1h6Ece8ajZL4ijimtWjZFqcs4FfAEVshBPRErgmDn2CWgXirffHWDFn5TPG8ZSxqfpcgP2q31xWLyNA5Lmgjr",
  "key22": "32wzMBwTL1KaHwA6RbzWK2m3JE5DbZ8exsfgtTbXxNjtvVEskwqGDjTtAx1DSZB38Fgjg1LRx3N4gLPLGyM5wVkN",
  "key23": "4CDrVh7SKtQjAkzTJE8t71PBzoqvHix8W2tWoov1wd2UiWBxiqd86pr3DWeDvZqPX8X7WZ8H3UMxBeWBJrqzUkeF",
  "key24": "LS8SN3sVcPo2xnotHT7CzgRCR9rDu2dYcwasooKmgsWCSxQ95Ggwny1KzwKG8zV2zbADzNyp8q1PAqh56aWsYqR",
  "key25": "4y7R5whBxKSJxEh7xRodmPSRM388f6S1W6zfLYEF7bDrw8j4RY1FTGucfVtgwiFppmmXQGXAxwe5hVtUGes1tqwd",
  "key26": "4BHKrLH3devKuy18UUbZ6A5H4BrDVnuzdGafhvpYVXmKVd8FWsf68FnfBJHbCQzLzs3vyet59tJ2Q3NYeq4yeEzE",
  "key27": "bt8EYXQHUxtFQctpezm7bJFUhuxFDQGPwERAXYvV1fAPnSB3ynBA2xAYvo2nR8NUtkpMUYg9CEqwKWYXu5fRv1m",
  "key28": "5z9VxFe9YqqrHjcFFNRp47WgG5h1DaCv1Py3EDM5dh5BZP9LUXekss98fWugpDQ2Do1sCJCAUyPYPfUhcSpkdfVG",
  "key29": "3znzsAjHJ6AaQYxq1bRsUSHLc69MqcoB3KyMEznv2b5exWrhdXW1c8vrY6peVwLnqJK5RGTTd9UzVHgJsmMR9nBV",
  "key30": "5FvKezymjst9pk8zvp2kf2cskbZhFxep7EtF7KzFZqQqnR4giNHDRFQxRh1oFYYGaR8kF3M7WdwitLKnwHTgPSQs",
  "key31": "3GLzT64mpnz47tqgP45eLbkLMoAoX9F9Q7kQqgr7DKTYJpHcFFBjzA4v9MboYcJGCeuuGDixCvV7b1QAQ1Q5x9Ax",
  "key32": "4TLEa5vQbGfCcCuT598rnuz812jrG3gvg7zjc5fFDe5dsF7sWANuxaQrrDs2weWrMjbvX6XfBST41CZcAKqSFUZy",
  "key33": "625VNopC8Ka2eQynSzameS6KvSoC6vo2YWGL2b683Mo5Jiv6VgMm28bCneYcT9AnijNh3S6s4yy4zuqUYwYJXw7E",
  "key34": "Doi4xfSCNBFESf6gUZHjDMvh3Hz7r9fKWuxEsT8qvSbXib9BNcNVQGCk2PyoSG8ZV9oBJVuBiy1B5anw6uRAQEz",
  "key35": "532S4fEPvTNbUVHXvAQnB6KcAbXFNrjfqA8eFFDMHEQXtUKrQfUrSSuTiiJikqFthSnNRXRnsL1wkqVEtn8bJZVD",
  "key36": "3Dzb5pjFs23Tizddns4jLTPLEXfu5MrECkvGLQ1JMAfdhSwUBCu6sKNwSuu9BQV7FiwpyHnKyvCNB3VvvLW9deer",
  "key37": "2wtYFvHL13pw7uePrwn46G3V9wdLgvSjsd4dqxzgi6C3om6aYEzPkueK2WorzmhQ8T68371JvzG12D3jDTgQu9p2",
  "key38": "4AJdcrVYsfUktofUwg7DNmqh2R8gCPSyUU3DZSbHYKkmzxQwTCEZZTQH7sqFsyfwEhP6szQhXm3CWqCCJqBQ7VuS",
  "key39": "2BZEd7DDMR6jM8v56SbGMjcbR7BvmhWgQMxDxnFo344t8zde62BxvetbECjCb6C9YkgJ9ciZkBnVMEZNd3u7kcDx",
  "key40": "2j7xxrZBaPY6PDAPhzSEJNw4Q4bd3TJtmBDUvKkvVghtKabX8W1c8EjyGcA5nbyNBEDC4rtqzZEe2BZLTxg3hMbp",
  "key41": "4vNK8R2J4UvH4VPMDs3XDCRUd52Hkbhih8GmobowKfwdceTWWi36QbbszrrP5FPRjPB4JE9ZQr4zCZ8Bb1aJFeMG"
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
