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
    "p75eBUnTpQ36jFeNS8uELuxzkiADPtDb6JFCqr6fGF1ZsJj6uU16NhQJUbuLgfgmaD5gTuDT6R2TgveVdZ17KdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mN4WMFr8L84nyhhCC2BzXcqMQj91xKtH4Zibp33v2Ys8Hvyrv89FsADKSGfu9BgZ95xs3jhAQrZNryimufjsQiN",
  "key1": "5TtHN18yWfBeWZ1fbpdkXqPbu9NK4j8D6v9rLeqXoisJ46owzUuzkSFnTCnrRgAEbYRvtRfm6GRM6ZeoJAoKaRV7",
  "key2": "2pGE1KTJei9u4awayFa8GDcj6rzx1ypRk9EDsK1Foi8D5GXoSr8M3G3nJPHE4XHwf7QGvfkPuS7ibXLc8NkRSWiV",
  "key3": "35Pg1tKhAQWQwbTnn8mpKrCGScpXcyzVYVfdjAEVRxwRMH3PSR787Wt3GD8sh5MTnMvH5EHZ5QUxHfQpEDZCBfGs",
  "key4": "4AUHErHKMgV2pELVGgMNyTkJSCCsdNzhzU1Thq2xTihkprSGpM18SJuwZeqjVU9mZbBcKfLH68PKAPt1y4FgC3o9",
  "key5": "4G8GGtoirWUXfUk5xrXp555HYMGWvQzoLujn2Lsk9wcmGnw7VJLeR2xU5hbUnBSc62MpG4jyfCnVAyZZBpqxRaAm",
  "key6": "5WmEtEeRV8Qh4QnZYrn3NQdmN37r1hLY2bPGDs6P3UzwfFXmTp1NKQNi4kbnUdq9Yn5bqEiaNa7sata6pc9QrRvK",
  "key7": "3dWDdvQ3YtFbTLvmqiFCfBukJBfSQNthUQ2GW6zFWTSyKHCnWe4WnVVxYgiptEwNCZseZRj2X3hAZ7UoP7U683Js",
  "key8": "2ZiRFXoashrWUjHZU2wVgzEnUF46ctUNKgqVwZKGo4BCChWdkuUG45xMu3egHNtLuUpNG7Zv7wFUUBABeqfKXcKt",
  "key9": "G6XbVh7bFNn5Z3gum9W5tRBiyaHE5nvBdRUJnoeRw2C7dZ7rUvzSzERnr8NDJUa5d9X7qUG3pSP1Tru1ENNRBPj",
  "key10": "2QBd7dv3hFHuYSqBmLAqzchhtXNsqnvt61iroQ828iuLNz3SyfAZ1HowQbT5pQw1AtvwFLqKNUpFW3HYpkgjaCm1",
  "key11": "4hh6DT7V6yB7eXgMdNz6ngXJw3N3kyQdCTCin7oJSWexgbhc1SDi1LF57msLtoqEBCtoqKymxm4ioMn2hn7SKm6F",
  "key12": "K6FjmJnjLZfFz3CT1ADapF14UemUhxhNrtvdwKWFRrYDkeWThj2KSnDsC4cqg4u6rGmiaWoSUzBk93VHPv5K6tj",
  "key13": "4yW8xtR2919CxEdH4qnUN7tJNuBgiF2rjpu8jsy93Lh6eg3qB3vAowJgntJTHGmNdZWWG3en5ySEFCUaZz9jzdcK",
  "key14": "4sbtiHvCeLARMjkp2mv9zjvvKGgfmeTaWbrzBANp6zvQE1b7FzkoaHHBmJdbgJgtuWWUjyP1LxGUDBBBXh5Ygwtr",
  "key15": "3Hg1dveNZBDFs1r6srm8dRsPFkupzbu3KfMuvQRAuj5YAps6XYnMPppjq49kM8N5m2aQ938NJrv29QVa4HSVT63m",
  "key16": "2UhU3bJAZnFWzG16M6ES4b55uBHKmaWCRhcc5toZ8Wyf8auWotmpHQ4c8GMQeqSrz96XtSNDQvgojiLdALzLeBMc",
  "key17": "2wmV9Ny6L7wkryjEUwQtAPoYqQ94etiEHUMG4NhUFqkenDGEekQrUyHMeyo67JDhWWtu2DJ1Htj2meW77cdoJwea",
  "key18": "2axSAgDEEsPzvumWU8njVydqyfezb1b9fJym34HUbFukNgLEE57QcctCgLDKT9nqFZwpKhq5DMcBCxpmW7ESWx4F",
  "key19": "5k45ijNkKC8ZvRcPWfFJjVVfYDWAJ6DT7hBskm4Z6U5XiSykK378yxu1M3nH4u1g9w6xnGkLso8zoKBoNqaXMpkL",
  "key20": "66mDeVXu2iX5756He3hJtt62pFTypgBgVN7e6CNLyXXAwZcQPudTNA5H4uaemxvji16fU1ef7VyhLndtMzJuJ2kS",
  "key21": "556rJXoTUx68gHnTQ2ckovavsbE59mWVgyvxv1FBhaMRjMxxMCJHZeMP9cb5WHkQabMVQUYvgk7wPp24R4Lj7pzj",
  "key22": "5AebQq6iUup3U7VLd5QPHxDBwSM3WQntXLdfnVtYVSxtXR1TkPwrP1sz7RhqpZ7C3788p5Kc7xrdMQUYfw1Efxw7",
  "key23": "47qB9yZzfuUcDr7eTq8S6tQQzLHDQf55UThZmwSb2tuTym4nBxzp5BBs4Ui3RNvc9HzZTUGWTnWLKs5nf2sVzSW7",
  "key24": "3v9NvCBJvH2G4UDn1tAcaLc7jUVRH8ukuUxFFfvuK8yDHNWsn4AosRTWSGVjWBSJjXtfbhqcMCbexvsoxMC9xBkE",
  "key25": "2jweo5LWmes5aAf4e81LNHxBDAgCk47tmhmZKK3AfKiVzspUhXgPLvJzJKMgu2XzKL4Xawo8KNN5hdpv3wET6CSC",
  "key26": "4sJVUBABKvFU6pDANhe3pwvXNi5LdoNhUNHfDRYBVHaGzjY1pQfWQozBF2eHNEtCj41zuvuqokGH6QGHDe3NJXUE",
  "key27": "HTBDA49C9i2WbAXJABg9XqaaXQ1jM3KkCuibSbcvtWwFzreUogdz7fwDudvY76FGKh6ZaJ1K2rqkbnNiQQbZ81N",
  "key28": "2ZRSsKjiWGNLFPktPK7DWPt57oRPXU7ckGzUXyfzE6BKhoBEcACUWKiiZwZG8tpXKMEB3KVjq2LwHqfiNdkPiTXJ",
  "key29": "2RGwLcznqUCRdjehaxZ8MvBR1aUPgU9nNuMFNmSTddMjkYSKqgX98ENf6UJJXfkTJ8kPEhckVNu6FuC8s5a8eFt1",
  "key30": "5auMzBddtFBRgo4LJDBgs4vUesNbQEeQJnfYN62GnnFKRyiwDoFGsTSuir4WjLF4w2FJqZv8ZhfaJm3uwZAwoAGh",
  "key31": "4dn1Ctop7x49cMi5t7B6vc18q2R5J4sHDdW712ftPQtRLQgSEzCBaxvSnbivpkzWAyYVhbMPZ7Sw9RSdu6gMJZnN",
  "key32": "61kawFaAxXB8brUYGQ58QBS8Y6R3GVeQbULdZPFXZRbwFUncsbmzdrYLoHvxRaY3PEtE25up2xPzcj7AB4zWVV6i",
  "key33": "2zwi5fN5Cj3Fc1QLHyavtL7iJMMgQB7ZmcA977rHARKJAHoNtiHXJj5iEbn7fDQM5gKf7xSXF71UzQDYMiS1ukxZ",
  "key34": "47nRFKNbw6xNmR5Sp9ERjMZC6jxDWCNqu6Chiw38q2QbCL4TZJM1UA2JbUz8y8dNWvbatLEJipU1U1HmeSbVe6c2",
  "key35": "jeJgkCirCjTuUELewN6EAh1bJSoq45cw5Fy3isWRihAnpeWyAwQZkKvVoKnWJHL21viW44wG5mxHAeQmPvGeeba",
  "key36": "5rDLKcpKGt74eRLmkowd7CVnm19Koiozkhj8R2YS2f2VctYtKCBP9yx2qrpwP2J3uLLLa71F8PnXZvzBAMnJTvLM",
  "key37": "4HJ2Uwa8XfreHsKSCjy7DPU7PoQPwDfHE7tvmNr65QLMQbxXusGLKig3f8YtRRQYC8UKX3ZPZGA5tUA7mv11TycY",
  "key38": "57SsNeV41atGfEqPGn7ATU2wvBjrux3paet3Vi6JrRc5cBSgPZUHeAgxJE3FN3yot3DPe4qs9YtscBcVAkpc8xHF",
  "key39": "29bsPocSCihUfCsAWUGcpV4GXdBr6c9DvJSbZKJKvhA4BErvsk6eBRwnULdJ7DEWisp6QTvyhqA6i1UJdzUnDd6p",
  "key40": "4KAAr5XfJWY5XoKKUk63rpLyaM82UwmV6JjWnEneyqHY5FdNfS3K4TtYqZvkoNfQCGuzVj4ukp8fUveXaAEDSLrt",
  "key41": "4PCbUwqYxMxTgaq1hgCs74sH8HtFRyEW5NmppJM3iygc4JehZsxJtWi4gYDpXXPc84FJVMsAdRa7GkW8X3BCFYf4"
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
