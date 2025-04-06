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
    "xdUJPtG5JNgBSoxCLAcsVxu1BJJa9TMakeQP1Kfc6QkTJgoAPvJKghdnmYo4VkfNNcrjjJ7xxGKvrQyrThaFsyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWFtEWrvZH8dYoUjkoEy2AGLJS7ea6LktXwDfJhWHbYVssky2JTynVw6DgJTbqWwjpbjug1JfdcNzCEKwQBJfVR",
  "key1": "5JXm8iHBs5Fu9At3YJ2skJveHrN9U7kBLhVCBWDF2pUcRapkxejAcS6vemVVCrUK8igYbyX8v5Vjdq8XpoosaVuR",
  "key2": "4WAb1jUgJGvc4Zd7ygiEKMTnpns8DL5n5GPhEkGfc5cDKoNXXWVKKz1HccUqDGcjfFeZfQFhDTm4d6316HUai4EA",
  "key3": "3YeeHGVUh61biik4sJPj4nuc8rJsxdRj2uNAJtGz2S7YyUDcU6HoBo5mMgyS67SB8V6ApEeQihjEvW1pF5hN5igR",
  "key4": "2RQYMoXK5Ekp9A4WGJraC69z1ER55FZoe5efTaXvws9FvoPQvvK1ybxsGV7sX3SBwhYjVTbAKP6HtmZq4bqdY1G2",
  "key5": "2QmSQ24P2atgVPVPeK9mG1fxmhky9zHxWvWWNipdGi2rfPcWPygpugNrM9Wwj8QqVd46wj1mySqtFoRogXDcrGYX",
  "key6": "3U2sjYAcWeWHwus2TaA3tKqRuN7eDFAP62odXL1p2vEJfxFyVpNaupvyKKgXJ8WDeGHKk6MSvHs6QrREMkTSeQ11",
  "key7": "3EuopTixGPvTqAsww7XY5QMZR1MqVHrgTpGZ7FbZ2xWamQZ6ueM9dRzLNeVvWxPvZHQaStQeUmH4xEpF11wLZTgY",
  "key8": "3KDTYhtM43T65taVDcRtwiBZhE1Tpx2D8MuVoeRiBAE79RichGjKf7D63bh1V8koYeWrSxBdaunGpBNP1rSQjCXq",
  "key9": "3H6BKbcG6og5vqMbCojYiVcukTTxPdGMW1You4AbThRaJftx5xVvAxbHFx2qM73wV7hnvX9qMWdTHLrD8cjHdseX",
  "key10": "5KJVVZFiZBWAELv6wWb4efgCxcZeHUocubfcrRAPMCqwdbMgxyL2PgErSWorgrhtcAvgjsoo3S41Foc8jm32UfoH",
  "key11": "4F8an8dL21By3wrbH4CKU3vvJ4W85n89CwdPEssTnSctJTP1TgQb7KYNJkVJ98uBPMaqKnLFR3Wu9L9N9nMxz3A1",
  "key12": "4huNCYYYFKkmGWsJRyoamFvVZVWbFS3a4dYN2R7zgUCCquRK4FVcJewGzkgPHsm4NJMU7TPNra1JHN77ztkEFQz2",
  "key13": "4nUhUQmz5hFoEU9qTtoHP3b2QPoxitCba3Ayj8erje4Zy3APYsaDVF97vNiaYyTT9f59GrbFGDj1YjWgNZ1BWkwU",
  "key14": "2S8JQUR7crvs8YjJJ2KBiUGZhmoeaaWqdaN1FTyiJj1H3krQzu3tpvWRZRxT2Tk51n9VaY37R4F4cWiuycFZDbh2",
  "key15": "5Ctjd3xioA4J47TLZbA9FsciAzkwpeNjkyHa3PgVHV41hGqgT8PAb5NDF2mMvVZfKLeDsd2fWMih1Ftm4fdPcas3",
  "key16": "5G3WMmJn6S2pyARMLsJ1s4WH7ib6BBu2s79yc9Ey87tXHKwfw6ZGZaXwnUqNaqwHCFX1D4PUwBAgsdRL6RzeA1MQ",
  "key17": "xwNTKgwyctAbSeANsbzCEcs7XK91G9B5aiYKqAkUsxRM9GmnFUN91vtBayWCoRT1fVCEGtyqRYzjHAKiPandTB1",
  "key18": "3QEpEJatYSoiyABUzTnohd8m8rF6GayaroyR7RdEuQs78u8rNsxVCwhgqUsCNB1CqFv9rxUHJ8ZV537Egzq76cWX",
  "key19": "57XRfBBoUMqL6PFGNxWUcX4UzHo6rptMPEDVFp2Z2hgM6sCjrUKobHubg4WForz1nrvKRJSry7b61agAD5DHe3WE",
  "key20": "ark9hEZNuq8VaKjRvFjKMm3xeZYBhsMQXm3EEFZ8bFjJgYqF7x5NUZhoa41P4jfM9twszzM8f7PQWbG4BffHxnL",
  "key21": "5uifJdqXT1g7TAUELrRhCy1gLYBQx7EhiQbT16yWrAU5oKMC9CNSfgLdSBw1HvmpZQyFr51tbwdVdTEJApfHeooC",
  "key22": "3QAVhgaiLW3ZkB5iPHJEJcjq6TPpBywYw3tBMA6rfm1eVGGne6EkXH5USuLecBzZsucUg1NnN4F8FS5GfXsLY56B",
  "key23": "3E3i679rbG1cPQUFHs5wykXwhJa4grdVWswedpPnmZKtLL4GtAzCuNYrUQFuaXzBoMRjsfsnGv611T5k8RfLSG13",
  "key24": "5LEE9gxvbnrXJAUPogNvSJCW5pDS3P5TVX4V5XX3yDpLmfDUSjNVTaBqp6FSmzpPprdKmdjdG9k6G36Jx7rjF3bq",
  "key25": "9WttqcMjE4ajEMvhimxGPmamSfPtKT4deeiDSsxGae4vQmaCS9fsGC8VWTU4kqNAfBXAVoa7xpmZLWneQGCGgPD",
  "key26": "45cwrXCnDpi2e7p7HMX2VhkRoki3A3BPYg45Tzf4hVDw5hdzXY6pso7nNDtdjW9xn5Y2LE92k2RyQoK137EyNDet",
  "key27": "5Yd6wdkeJp7rRM1rWnaCMu8KvKPi9cSGyoX2qBfPwxXsve4a4yfhmURnjEu2DJMGU7HyE4U2jNRS3a5ukKvE8hvQ",
  "key28": "2QXDWxuJuEmDMDR6ng6Dsh3nC5oB6Y5hKx6cpYD31hBTTzjo5Y8nNYrixnXmBGeDaUTWTV56N1hUJat9HkeeXpo4",
  "key29": "4bTURRTfu7E8AHFoCWojBbfhr2GfkZz1hSGmhnqJ55MZp5z2PQcoj8XFjP2eVdA7SpfGy2sijGMtTykjBpCFTEEg",
  "key30": "3vmUGnqHCMPT26mJNGWoZ5zv1xTJYPJ9KaTWjYzDB4yz2hEg2ZUc4xrPxKErSk3scHo2qM5KRRWmV21r7ge15sWK",
  "key31": "2jaaB3ocjF7zVPRJjuFNtRrHDVFNCPM1LgMfBuZuJQiPahDBjUQwsj6bozNqVCg3tBi7K82M3w1zz74vGzFCdj6z",
  "key32": "tyecTXBVBf3B2wSyRv876eyVBRxAitED4sGbkbPHYNvFSa4KxNZqCFMNtMguEdyZTNq7XzDf3F8kJgiHew6xdsS",
  "key33": "eK2CVBGNPZCULTeo9c9wayTz1wpXvvZDrYdQeAFz9g8erBB7ZjMh4aFf2NuhvMedo39CaYFo2UCec3kUXyCaPNM",
  "key34": "2R9zLzuNYEbPYAQvrF2THzBjPHVKNwFJatfSfyf8FTVU7bT1QjpXWDt861hXzdW96LR2W34sf6bWsJWpbr1S24T9",
  "key35": "2rMwtRw2nn73Z54CfMsYkcX43Ld1w2uUDKNzB5BhvGWxFHuef6wfadu8B4bswYKQWyEGTEVP1b7oebgNTWC5RWJ8",
  "key36": "2Jk6WgtbAdNpVxr3VeF1NZMo39aG3UJWnoeChrEPsVHtNFAeBxMmNnneV5KyjRFgmtNqibkUThJDFsByoD5ohjmT",
  "key37": "3hPEQ9Hy59iAYDZTN6wUk2bnEtqc7wGxjA9r4JNxJJCg5WXzNCxgXsoe9RcCgGvwgx4eoG72NPG8dJ4WyaHFBRZt"
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
