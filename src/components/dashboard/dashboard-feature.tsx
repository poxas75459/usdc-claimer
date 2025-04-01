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
    "37Fp9rAvfWjY3KteQwcKv6zfDLvoCtiJ5iHgSkVarApJ2BxPBToLiHyzNVb9cagQj7sSH23X6DrHiZEHHk78c9Uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FhZTSM5CU4aqXeDzBYE2XsC9ESRfThAVpqy7udR7wMqde7Ti6W9vANAzpnbEsyrRzAsiNn379gZzY7BKS2HhpHT",
  "key1": "3ohBeEuazv7WcfzF4UkFgVx6C4YU534EbpLc7nsEZMYFPn7JDDLstc5uuS5KqbFxU8KxiMCj6CYrCfRpZvjU2ZPX",
  "key2": "34CeB6cFPaaQcxBqBrevPCvFshutqpW1c22sdK9yK7U2YYJqwDYTAJcmvMSS6qafZAL2AiZUagYBEai2km37DPDY",
  "key3": "38gBzMyxwZAjyyaDjR7hk39omwff1us6vbG6W5NZQtd2vR742XgFFdVELycBtvThVM1RSV2G1C1BKkScDSqpAC5H",
  "key4": "4xKARCZMpPDUAnxT8jTSs5AcKMkDB2NXEjtMX5qEXXZBJUdjT9xrwGAUR81LC15eKPGdgq92DvZAmSpDH9hQPABa",
  "key5": "uhUpxyUscpRSBSc8grUsF9L9V5FSRgybjaXLVt2Tj2aCUKKC99s1nByZATsExuR9bt391i5dHNYrc6Y5ypxGkGt",
  "key6": "FCH17D8kHX5RFZAcctiYPUnjZ7a7wbHDX9jf7qAQ3UM3fyac5ZPYWmh97TpXkDER6nDnJSTGwW1oB8TsSae5qkA",
  "key7": "3KnN7rUunewWdGJAS8EEiXjT8XULb8XJd2EUZY7Le7QG7PtEM712mRtE1WYfckyrGg1Rowzsvz1eQ9UyX4rAR4sC",
  "key8": "2yi87TiAgmGXoP2PwEPxhT2qDHm1fErUryeDp29Cg1NVYqY1mhdvuxrvHo7D2GkskupNGe5rm86f3emK9eX59Lxh",
  "key9": "3nJ1JonMvEgvrTAyafiPzrwR9UsqHf6HYQYVxjG8KAGA9fvLq6STDBrmZrBqhUfLujB3RYCVV2KoZwZDxsXJpX8Q",
  "key10": "3dNmANmLNmA5F1MqnL6db8WmRRfBkTcvRNJjU3PngCVw8HY35KAozHztfP37Uy2eAd1wC41GxhCuMPwKMtX1tt7z",
  "key11": "5pnLAQFfD9NiZpoDmXg8Ts1aCoaPh2ZVWTzJNMEcJ4CMSemJFjfEmLxtLrmoTdJAcbzA2fufXAHppHxRrYou6oXH",
  "key12": "CTotoBP1GQBoRgRii82TfoEHqc5iBg5ttTcp4mJ2p72GEq38rLEX1sbkPcFasj1fpZhz4PV2sP5onR9gMqMSwgc",
  "key13": "561CCfWi6BEJ2GuAQ9ZNP5Uog91ZzwsEb2YF5vwNkPy2z3Mbo46JEC8dDGgp15n7vMriEAGuRb8R2FZ95iuZYRnw",
  "key14": "22Qc4m2B7kQmBsGJxQdfwDFm13jcx6FSnD8xXHyQQZTbBTfED9jpRdZrvp2hNeV9Js5sEyqDFre4MVL3K7GmDpZA",
  "key15": "3uzSUSesmD5qt72CYmKEuTY1w7FLdAiseyJPgfGqahuhvriua2eahe9F77iqNTKza7QNv3352CzwDbamFSAGeC8B",
  "key16": "5TyH9LArKcJXCGNNPaWySFwNYAc8LF2d2ZtmeXP5u1ygiK5tjuhN5cBKnJb5RfjguvvRXYieft8QEijGkvykNEYv",
  "key17": "2RsXe5QDA3ranytpSWvBHDRrt64N64rkgC9jHDNq14QzLvSku77oYMPgz6djwCSfYwKvzW84RpBeJs3rC4hXgnEn",
  "key18": "2VxfUBwMn4fVuEsh1YG5X3ZspXo8gPzgyshzUFEra9r9sWLqDmwApLg6gMBgMFnwb9KKeZHdieEDLeLDmm4xfVjV",
  "key19": "5q1FC845h1t22Z7ofNeiZQLVzdoftxrUYJGnb99e22VUbN78xcj1ZHsXqZ3zAN5F87B8jsJiuXFsfAXYyCFXL4ET",
  "key20": "3yPFRhwSfDXewQUrtSzj2oGaAKxNMt6FJ3KoWNvKACnCEc7dzmjQYjCwtuVffNJP6Qr9HdAuibVwX4vW8hEiPSR8",
  "key21": "McEoX1MxEVHFWfGJHjJid3RviY1uNUGH5bqTMAfgVG4Ug8tgv5FtR4Uhm3dcWSC1WkP3ApwtBdbv84gNrdQF57B",
  "key22": "E61u91oSJpNRe1s3vwcNXtD6PjGZcbBvB97xzKiDzw4uLUBSMnog7Fx1Pq7BhHTRPUcHiFhTDsmJQDjAFE8YX6M",
  "key23": "GpBR6eWduVWV5oBukZiuNap2p9GG2esLne9RBZorcLvKnVTVAGfjVgV9KnEkPBzhwRatwHcQ6X6S4h42qTvZ5cR",
  "key24": "4rrzQ1JXyxVovg1pYBgE6H7pQmAaTb8dUdGB3ypuBqp61wTtwgcgSJ5a3FSr3Knd9rJWxij4nn6TbaLFPMrebm4h",
  "key25": "4mVpBuVer8sScGMKsfefyb9xvh66D4ovWnBDmbzkwgvzBzDP2ZWU1bTuVhLNsDVS1kpvcgtA2MemVvER3VV5NQ3J",
  "key26": "2Y84GvQWdzEs4ezVi6xaUmZHLNMuNY9fhvCWoQBwz5o7vG5U3ejtrETKJJdaA3MHwLXAMWJi4eX55bSjjNcwPZSE",
  "key27": "648SJD9mA8eTPqdYb2i2JEgnNPL65tP3UqDWDf9GHyD7CjZVtj75gZpFUXJKoBUfxkroMEt5Bct8rvG4x5FurEqJ",
  "key28": "2wyixYzzFXFVGugy259UBfRYGW5EPYZqLg8vEHZyq95cF9FcYuwuf5ekMow2o6Zn4Y1x3uatnFpUZGJRr8PNbmbP",
  "key29": "36CJMwcyrexQcjSknYayhzZFYtuKYtidPesVPCgGTDKd11XvPrsJT3WiWbVN9Lk3BVMF8kbNgGN5EHasc93Qxh4d",
  "key30": "5AtigWeDzktkCiZtyF7zv23gQcHu6qrmht6ZNcdBzUN7JGUWto6sAnAb6VXfEEbwbot8bbvdCjNbDnUbB3MjBMTX",
  "key31": "qSDG8raCeXgpxHRenapzQgNhx523ULxxiaTwbUCaKx9D2Ay7u2YYdBHFGDzpM5W98TgskGhoS1ZXiUTyavFaxdM",
  "key32": "1KQkLfohEtMTHLverkEPgU8dfn2xzvXr7Wx5P2xb1Xy4z3x6AYBDKDY1986BUYtyRA5JcLGQdbY3PoBcUEG8iTe",
  "key33": "fYHu3FqJaGyY1U73ArkjhR66cgd4wJ84YbNXqBHWzX4FZ55vr68Zk3RpNEZEeHjygSLHrK23b9JJ9GVmPzDeABy",
  "key34": "44zZTRBTZFJpkXKu6Y8rg8GEpcxANGy8pvKerbyZ4RUhNgYrVksEunuugHCtZGwnPgpfjAcZWrx6KfcwEX2R5BUx",
  "key35": "2bUP8pXzvYcLBGxuE9aFBR5rzVm7pEnoHAC1QPAZjmxu8wfkVECUT3TfiWCGc62t42YLqGxoAJLtjP5HUHpC5gVv",
  "key36": "3gnNKnxqgD4KLWAJSRfpJgJcwzRFC9Nc9S1rSPfLUoQJCJdgjW52KBVB3RYTa5cJHiexFBiLiESFEdDRiqJWQnBu",
  "key37": "vkqSXdZKCzp3WzjG77gB5HsmkrrMfKZuWq7jTZVxNmf3JwqpavWt8LwBDDMBG999dhVjVXggB6FtuyGoaVDN564",
  "key38": "SWdsBRbjKBEaWoUnVkUNhpeMxaH1RCB3mZ3MWQGQ5cXGwuesPwj5PwM9G7Xkh5BeB6kcRhZPVnKv1t3Hc3Z3dQV",
  "key39": "3hAXYML8j83PT5azBkrdShVmxpCkDwPnpQ9jjVETRYuBuijSuRzXRY6d3ZjPmeUUSKKASJjkyQcGR4jksbNyi3E3",
  "key40": "3BrKpWLuRbYhKU9FV9mEvciv5UJzgy5vEvbj7hXxqpsvfzszn7tx3HQSZqJqEhx26n2VSdtQM3Vxnt4vxz8uWs6z",
  "key41": "4cEedR9uXokmQMWYfqEPmb5L4on4pkq52oCCwDodBCG6xDV3y1CPjXmCzHg8XNJ5DmzkwGYEUSkPgSVY9tFRivej",
  "key42": "3AS6UQLNx49uiycCdFyc8pQRyEo8c7k7RirztdsmkHnqdxwYRLj2JvVFTgWd1ZczN8N9aWzXchjomMLRkxPemCjv",
  "key43": "5VckgL9FG36zqy3Yq3VPhfYLomSfzmmwKSQLZodaTPK9JwoMGke9q5YtPtTb97QGAQVwew8gEBCK398Qv5Y8biWX",
  "key44": "2LNpf2Mh1c7EKEECJLA9kVznCPKs6ocDnsFJ8FxNJj1KxzusonkFZT3si965q9YBirQxsUgYKKv9mgpTfuwD8SkZ",
  "key45": "2GzBAyAnpo9eKGh5btdVGJH1sGj5XAyvNzwypqEoWySEE7n23UZ4j1fTc1zQLBjZqXm8saj4Lt8iedAZyoZrnH2Q",
  "key46": "5jFrzdgQm4wAQkBLiy64VpKx5ft2xfMBpHAdcPXbvAeRbkGf83vigMe6bxTpSDjhqP5mrYqowR2pumwDijREaABf",
  "key47": "4Syc8nAjzx4ejCCrc2GPQgycpmU49GCpwuHTf9beFff1Y81k9tsFxd6tA9mELW7LzvEJoTeowB3nNnUqSrgbzRkK"
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
