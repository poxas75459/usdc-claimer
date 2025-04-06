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
    "2zJKL7wmXWuyy5pGfHvNvP1UVgufeLk2eTmHbjdA1PpeniR8Y9MyXU885mPHtQqzMDvFgAcueqPz7RT77gvDi3fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UeycuUicfbD5BnF8SSxDwyFbWeytZKvK1xs6ojR8cCEt1eS8tvtYKuoxSUkhUv2N9Jgjijkv9bkm4qe35ikFAN7",
  "key1": "5CaBnYWZ59iiTJUR45Rxv7M42n3GX42vkF89s7QQPkvzmARJxvMGcixCHRH55opCgvZqD5qCfDjvUw5VcZLL4cU7",
  "key2": "SSPg4TpkJXJFggKmSgW4oKdkuPrcJ5AqxpGaCqDZHeHQkTvPF6pxXP6qTYmsKWTBN14kQSpW3wM6qmMgeXoArUP",
  "key3": "3rNJiC9gK1viuYpeCPqzZzZjSthNgcTAKpkcubAES6WQshTcjHNjvXhpYM9qaytiBkv3mmw9VVxzox82Wpdsba9h",
  "key4": "4KSfJYutdpx1mDL56sKRU7b9ZW1PXfcZNxngK76Xob9XGAeMtKYZjBFgayrvYZ36rce4eVLshuB1JBkjAPGfcFpE",
  "key5": "4v7StsmhEaXvCQFNSuQkLbMGpn3S98ADzejDi312n2xg2463cVD7m1aGdSMMeyNDjbgweb2BgGNEG8ZsGweffGvM",
  "key6": "3111tQ2HHuf4tnbnw59EUooJTK8RsKvjnnvZiVZQXLyGP5cFFiNzAULr2TayPBmnYZyGgi8gbHmvHmkArMj6UUEW",
  "key7": "63jJDAtmZHjz3SPUC5mMixqNU2Ah11aBEcnk2VuwTpDV4fF2DUg2JdEyyqLTHNhPFLS8ar3vHyYZP8uxqkbq64xL",
  "key8": "61QoUbBBmSe5ywRP2aKsvyvUAjRi54A6PpWf51vSyKwxURscygyWQpUoMA8dEUzaLygK8bVFq5wkCrZNhNnYevkr",
  "key9": "2Hpj5aJwf968L9MDREKYVYpUBQT43nejWWdYmSQDadVs9fTyhbaYCgbTj9RLS3YputW62j3tB34hf1yjjN4fFEu6",
  "key10": "4uSS6zC58GVBL3ap9gni2dtw82YLjZ9j5aXnvBzZQdgiZLRXfXGAskchmzz8VsywCqQg7yU8yK2GdACsU6wxEJts",
  "key11": "4UHpCdiC6tZK1xumL36Ja8ev89Fn9cw8AWVnrRAgaiatNk9KySZX7d7RCSZXzHiomxmZYd5HagmXzaLvU5QteSra",
  "key12": "Mdk8sRVDA5Y2YxyWMFWZetWgrX3dzjWZSRi5P7HyEKRDdznmcDvjtN4EGYsJiaonyHotjvPHcc7cip6sd8eX4G3",
  "key13": "3959EmAYHcVAeJShmpWbAKMow3iRDX6nPBAMrazJ4Kd19HAUjW93JQDGhZSp8ZySA9MrBHgvDEv2uZeXGymtKAuE",
  "key14": "31vUuZrnGDzifzLbze7UQuSdhDkjqwFN7v75cgxsWgxSSFsSQE7FbNL3UiM6vGMig5iEnp2kJWLsVBmehpqCSZd",
  "key15": "4vLv51qbHGBoFbRDU8qJo7s551n9h4mkT54cKwN8hxvpTMSWV8TmsZTcyWpFSqqRBSfvKp8fnwjE9fzYbJW5WCek",
  "key16": "4HeBfKECmAAbQSGqDJ4BLnBoFgUA8QESbQ5g1pbXDnPbVVjCE91p416W4YrnzKGsbSHphBd5mLuzkhfro8bxqvHP",
  "key17": "3t4iegJ8QZZ8EHetx4JWC3jF3oRJc4j31bQyv3z58cA11CUu4wNUAMdy2hECsLucwuaNDP1B6sGtpgRcijbsbMiT",
  "key18": "3DQgMGeM9d5ti5kB8w46whXdcXtH6SYgDaxst4ChVH53H4FNUy5qbctggy2LYQCePjbriFRJAUsR8QjXrKPAx9v6",
  "key19": "3Fnb5hbJbfFi7Zz82yw4bTCw5GKSnNjUMkXMJNNJ8fUseJ7ZKgZxJ4SjWNGKwCZgNWzUcv4ifJzhg31qxGR2PVWa",
  "key20": "2iY7UFzhwKh5z98hxN8PEsEE6n9Dy4ZwGdeT5WEmb2xtkQYCH6B8w3CaNDErWNtmuvgxxsf2TT3XH1PdasPKiAiF",
  "key21": "33wZTr9duyqrx8BAgJn2DL3DiFz6Xvk1ubWLUN65LLxzhQd4gQs3ebyAfW3AHpgUC2pni6qPiPJhQgQN2oCDX7Tj",
  "key22": "3YNb242a6k83t4RoVimD9YUyqoVXyq8soWASL9NQ1T7iYcJk2ukqywV1mp1fTJnJs2DLfCuRSoHHQxNVCL4Rp9MA",
  "key23": "8kVpfYDzyBDRFejzipnffDHq8mZ4n9DKf95gVZvXnxJYWhxQUccXAEXtTVnR7vXwDQYLSo92oAexwo9Nzvu3Csn",
  "key24": "2q7CsM7tqgJMQ4FgSQ5kFVZsLND7ssHctVDtziQAvgvcZ82ppmQzY99hVaUN9eQeekY6UH2xTSRjxnBvnjX15MbZ",
  "key25": "5c1kkaeMQHBBzTBoGacZxmmD34T1JjebNL7iHd9g1fKz6cPzwK18Q5gSJBjoLXFPGTG3fQexmEF4r9bvrzwcUoLY",
  "key26": "rDBrp4iRJBj2AfXhwZaGZ9vYBGfXprctTJuJWKb7GYoWCKxtWafDv5cavtxr6CYLzo3Xj5SLVsWwtLSuHTSZFs2",
  "key27": "2sRHXyFgs35u8Vq2TaRSabnojDddkJvJA8vfUKBT4ffTquXamb1HeVhDkYDTsM15po8k5aAarjehwzFCGAW4ZC3U",
  "key28": "JJmKQ6FpVDE4CzpWBwU23sSRzZNjdngxRLBb95uAXr5EQCFDBUmQS8yKq6dMQZkmFL4X555p9TY9ZnXSNbuMoR4",
  "key29": "2q2Kj7X3trK9DDVSBbYwYYHYH8PStcxYPPwZ5rBZTC2opKLZtS7aYXo7JYMsCHX7gATmRyJk5VbMzDZRVMkdiuW2",
  "key30": "31n1PRSkAsbkv3jgSpPhVwPUZGovRfxmp4nG36t3zDwAe4HPrnqHtYgGb12obAR317Yyn8UGdWp9YtMLq6y549jF",
  "key31": "2HXG73ecEMPHMwUHvnZCiNABsPaz8EQ9neU49QYuzbH2fEt9AT7B6RdcASEupEhwbZ2JErDybxWawfURAnK6kigP",
  "key32": "4dX2nDdSUtymo17BrwS757knHtonUpFtTX5mfvS6cvhWorJSgCji17RCK36nGWDRPQWnntxPQJv5qXYDzk13gWLy",
  "key33": "QFLinXWGrB7LB6gA6gtn55if3Jgh1VoNJPpjR1MY5uzpYwmgvNq6Fyne48HKv1dcEwtsUDpMwDQYPiMJ9q862Pe",
  "key34": "3BZqX5CJZLwqsfrrdnogo4piyFpkVqRCiE63SdDFVrhnRisRZzSziN3vFdhzWDo93iWo3X5gXA6HXctrDenqfGaY",
  "key35": "62ZARPkyxEQh8fAtmcR7GrDQzmV4vp8Vo4BA2WqocV3LYfn3qW9WwUzZrAgLwaipZg3Kb12KtEG56Y1tZvA6NtoD",
  "key36": "34wxzrvzrj6c84kMUtgMZa3XrSDztw3q131Xnr5MFcwG9xQQAs8nJJfndPYTqJgcvXAjng35NDKj2daXKJj1pKkK",
  "key37": "2fxH2J3SEyxuyfLoihdAfcVyESdop7KJgwYX5asdWbrSujCc5tgQWJF1eUJ2wiP2mNyLhAgtBod9djP1Sco6ps32",
  "key38": "3u5QzYAT84pQKB1PmqKZLDPGXtVYv2DkmS72eh8LSVRXY73inZMHnJknCX3qxARK5fi2WUYUSpxo6CNkmkriQwNq",
  "key39": "3WpvMA9UTQModBLQPPz3pQ5fkYSbnqW1ZMArFpqNGEwR3dypcwUVSVAzicVCByyH387Tch6uEQthihTX6zyG4PaH",
  "key40": "2PpbhcBw9Ymjr7nLrLtFDqGjs21PjqC8wAdUDpykB5xMktMhyREZ96qk385EbfNaZZ4tKbmzf74E4PcHFFtuDVZs",
  "key41": "45Pz1XLsoGiZxrZKCR9YTMXAoP5TxYwuKzs8zkADnjXXGciw9gm8sha3kfLxr2ETfFD8m1PjR7B81ijhmLcMUeAA",
  "key42": "3Ys9buto76RqKKEbdA7EdiuZGcyv9LRcZdvDUsdmZabvcHQZ9MZds8ahxQ9xRwHaZcVuUpm5QBR414es1GnujGBe",
  "key43": "52jisM6QHkYmZapcWh2wK9Z6PprHHCk3jXGaHfY2G2Rw375ojnaHnUKzs56GPBJLmeikw6vX9e9CuXZFVfr4LKMj",
  "key44": "2E2ZLkNwM8ZoeiqwWTHF2Whg4ke9zFKznrPPPxJhdcAGYCrQr5HMuXPi8mjYT2oUbtk4iDKrAtgfMLWg59NkLswA",
  "key45": "2rjFTQsgxMPSSmZUtvnT1FQnuw6mTYGL5jRK4EfQJhVKgFbPRTuqu9972ancaD843AaSR1FsQGkY7F4g5hFPjWLM",
  "key46": "iAhHhV7K7SoMLxmg6fQNgJbMRYYftVHsZ7kFdpJgqURftucCgoHYaKaszrfJ3o5JGKvyKaJHRYo669yXyeVi5XS",
  "key47": "r2avSAeA9ucTm2Du1Wux32SreU1hyGEPAJTz8jWLwhPxe7iAm2r9A5iS7J5GUBhiThxASkDkCqUGMq6mP7u914L"
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
