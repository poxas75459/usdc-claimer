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
    "4v1BeHFrWoyxj6paSY6hrRHEMH79udFXtNQ7oDhLXyafzqhR5p86jPHeQ2eFSAwtqtMg9gtjTrHcza4CA7vFsqMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FRDB4SfsEP714RC4wcEBvSfRo9cVu3KsWv48CftTimAZ98AhVdEKNmrZH1skhmE56m9V6psY78ohz4pw36CvHj8",
  "key1": "4vDtMEciPqN4obgP9tHnoR463TaPwQd5pNn1ZPVKzZ1KAmVu2Ux6gGMxPmbL3QTp9gK1eJRkHCVn1LcHBNwnTA2H",
  "key2": "3x9MkBrSGUGtMwYVF3Wre8koCmoktkL47KjhKhrNBKDpURqgou8tJrhhB2yae9Ny9KSrV6WUsS34PHeD4mPfXJtC",
  "key3": "2iUixkHJR3Rtw6ok7P2o7XrtNt8MshmFFFdrdXdyPX6kj2BK9TeVyK8d8XEQtp3LvhZo3pUpXxdTjSdwZa8mVhWJ",
  "key4": "k1UYXy4XQ2Lry4MWwEVH7VuZvnWRxRJe85cCYPSWNibH1Qypxr5baFrdV6sx7bCzV87FgLEX52cUm1veyhwZBEv",
  "key5": "2t3wsgzyuVXrufBD9oGfukTqzA2rLCkwSoEpZJMS9ttrtmo1j5QXPnHf5oBVvQoyf81BMyhRhGQw5HrvfuXjgM9W",
  "key6": "2x9vXVEoh6zpGyBpbvMXLYsFE5iRhir5ASpnpcbkKp3VSm2nFaUZ4NycCNFqzqEReSnXa4q128fznuczXXMdXMG4",
  "key7": "2ZUxrDdbT7Vc8TzMSeubvCQq3anEhcBKnhKte6ZNj67wLg5mGXUCxAUymqtWgmDuSnJgWSdAHMYvVauhdoei81PN",
  "key8": "5EpzoTamcod44Ldp7CiavCYFyAMD63mcvdzATCvTybBVC3HRLPXJJiKWJgBw4zXCvaPjC51TorNwV2gckYTgbvYe",
  "key9": "AJfNYdEfhqQeTmmaf3iWnbiLrj3Dm82bbSmqryCpJxzbmE8JkHfjULN6T4JFKNAcBQW4xBkM47g1tYqUHCR7SKb",
  "key10": "3BQ4yZ96BW15JN2fWzTZWF4VuqW9JmfpqehUCRc4AmArKnMfnBUWbMbeDsG5TgiEtmwDbwAeebGqnThgb7arBVgo",
  "key11": "CuqX84UAb8U3DPCkJWroCFu2CfVEfEZ7qbxezbkBDNB5a13Dx77QmJEttvq8nLu3gYyh5FZ5adxZTAwwwPopjEE",
  "key12": "48FdMcwwCUvtUod8bMiaP964QXqMYs93yjb1iLKfav64WNa2AYt2zyt5qdcjkFQsM8moEnSqfGiRQ59aTf1sqATd",
  "key13": "3WEH3753CH9wTweWK7qXPG11tAUKu6o9oT67EBwwrDPSJ8h6u9i7yG5TuzAFszUfXThF1r5wiYoeRrCbPpwk4pmx",
  "key14": "3AXUwnSAcjU4wBpgTdg1dJNuDhZEFQPYrq2htS21cWmXQzAHTuwNsEDQuY2VReTPcwPgfKBX4qQafzvRqPKAdi39",
  "key15": "65cjyDjVBFCfnL25jSn4z6vbLcvLDpzTEuMw2GZv8omfEiDN9RyVWp72LWUwYLCmPxsqYnd9o4kyN37DvYU9FGoe",
  "key16": "3mEzcREwGJMGhoKx8kVHHJUZXCuaNgn1BpufYLabtJKrtRxKchWkPpEL3ZsuMM2Pa6DJHnfJJEc2RgdoTjBdE43K",
  "key17": "3EU6tcgQihHASKirXZEsApGMQxjdFUfwYQJAsivjAiPXFVeixy2Mupt63z6QArQQYBGzx6cvXvTAuRkHogdXouW3",
  "key18": "5tqZ6ZfK6KALp4rAcF3dkax9qM3rhxfZ7Bmrupn367LccHu4tzixqeWdyszsN18iWbrT9L3TK4cii7MhbPc75KMQ",
  "key19": "3t8KfjrMVs6GsHZt3CwnDom6Q9ebKTq6AHMRkmxubYBWDtkXt7eb8jWBuAtVg5amQi2r9kqWySuL3oV6x5poSSvz",
  "key20": "2qnHdXiBWgWiVRWjWHPvbYKSpAP7Xd8duC8ynLQLQjGXLd99MuhY7yc116uwYVtMo2ENSKSxeS2Lx1WvS7T7FBRb",
  "key21": "NX1ZfZvSvskwkvsw2xd6V5R2P2dQk4yNaSXvrQ1VCAB2kT3oYgPkWx8qZcTHpbwGrNfyNVdeoqDvK8fMMCQhKWN",
  "key22": "286ELHNECrpkbzy4YmyVhh6oy5daHDyQirSVbdXUvvuPd2XLSZsa47UNFc9D1yWB3UTCmQmtrZ9ESoiKRdZLSjNW",
  "key23": "4iioxqvvJWZeroanS4RnCkv3vUnCTsV5xyrK5BiM1RownLFC9LbfscncfYzCEpCc1wz8GyU8hT5grvojnTzd4GqB",
  "key24": "4ecDZ4wCiDM4uxpZKvzsak9CDSiatynmD3hJJL4BB3UTMj4xC58BfZiFz9gRGxoHNCXpJLjzPUHPq18yGjmBavuh",
  "key25": "JMC9CTqsTLFPoT1aW6JsL9XXWStb9RbFKpg1RX82eVnq9iiCJN1pXxvyw9gTFGEcpiPK5m1bUpZJPJyiRwyCBjH",
  "key26": "QwywnTN3DhE9p31b3KATbK6a6woV2hgv5bPka77NkiJqsCRnrXvkDeVPg4uz69pZHx3w9JrYr5kiBTQukb5bRQX",
  "key27": "4sRRGmtvHwH2Ed1iBBb6LKGWnXPVdSU2PjM3Ly5Cgm9oGw9zKuWjgZK1GpHrpAKh6jCD1Gpa4Y9gKEdqjgWsa1ca",
  "key28": "39eMBxH2De3muL3jvvsjbNVc8JBrDsZPgdRAZyn9HiGtVgyRDXuAicgyEUsm3L92atKMFqej1f8t3ypvJUujLk5z",
  "key29": "3j2K5a1ZGkPshAbjyWWaj96djvfTf1Nfk1hREWA5NPZUjp6SP1r98RLbavthvQAHVz2tLDRgKCWUSUaDD5NnFJaV",
  "key30": "2zUxFrFk1xC2L4hhqqMFR6khirjAAV4JdvSzSV5Wj9MuSuY6iNqgA2yeDFm9LeURScwS7HrxZLtk8sPucbYeqVWu",
  "key31": "5uxVdW1ehTiBdXm1cZsdHfvDS5aHpvq89WUeomaeAhYPQCV1Y52oaZr6FJCXfJZYv3ZeVNKE86wQkSZkVxNWnAXW",
  "key32": "5coZoRw54R6n1gGhSAYrWm6HgEsT8bET6eHZXzLXNApgwMWu61gv9WoLfy6KLDkFx7Emiq9Jd1jdiyCf8ME4F83h",
  "key33": "5M4nTou9k2RJCgjsZjykDd4kLAixaCD5dxyQdiLuuFTveLPkCgvunXc9piCGsoxP9hTL7ooLKJNBB8bzjYQ7RsBv",
  "key34": "2ruJxhcxKh5qaRRZSmPaWUSyvrT4KUJsyoUZQYjxhYn57SEdLSuJuAd9W1CNnMnCa4NJh6NtWF8GNqbEBvoMBuL3",
  "key35": "4hU2QgV1EGzrJxrqREEoonvR6cTv5xDejPU485t2aoRpw9Wkkm63mJ1SUi6jF1nmG6hj2KHKd7aMYDjMc87atgsu",
  "key36": "3ctFusLyBDWpVYXcKdvEqmyw3JMsTECHKNJ71U29ty8w2kL2q9czz8QTARtBc183LAszFuVRN9qtdZXphzX5Wadu",
  "key37": "3Bjer1kq3hxu9p9BGJJGxML5i4dBjhekKVeCadau2ggujmHYKhY4GQAhp1seYSL9BYRTuz1t1VcqTzHS3NEtUQQ",
  "key38": "5iEjoxqeGTH5zcET57kxh1RPE9LctwvLcGqiNSfKKs6uxBft7er8sQ1NC3csE9fUZYMJZdgeebsWQhCHcXx2H5NA",
  "key39": "4wrd7XJP5mnV7hWfoNnK2usF8wPWvLBoWco2aUg3m374krswxvyToXAywpEvhvGu33J2bxCj6b9ZBRBy4aDEjjSJ",
  "key40": "3icsX11BbiJtaBbKNJ62Juse9w7gRfD1itZbLUAKuMa1uvBSrAwUbZZYcFm81snx1zreLaqjr4ZkWJfL2CkSrsyq",
  "key41": "8v2schjsCyGc91dQG5tGhAXoRw2EADaYjXr8brUG931WtK7JSnR7J5co75LmpqkknoCgHiqUwbsjFDpGZc1aTcJ",
  "key42": "2B9biCFcrjSSzvBe36jwuneJeYj6FDdaHrRVUVjSWUk85UBShk6qHEDnxh13FHSVQk95U8zUwbUsUsNTVRniBAWh",
  "key43": "5erTV5NCiQgvD8UJse7yjsMjk1PHzLXiFAUhoRnTFTbZwYy9oyePrudwfgkVJc9TcKW4J4isMXE7y8n2go8bn5NA",
  "key44": "3Fqq5uGKS2NGPLGZuuqzL3nreavMhfi4DFFRXhKmUzEUNu67XZGAMgLmguifGKqLxacxhYpnvs18JiYpwjhU84xQ",
  "key45": "63j2mbFDFjndqeS4QHZqCtJc2RFSxoybx5ewwHrBTwP2axq8HTBCYjZYAPFKskuRHoJVEn2owvwTsWt9UxcUCDNa",
  "key46": "2KXjNRc8p7VsmL8bMYSLBpbcvVV6aztieNS8LcCTLmtyujDRGhWVGq6BvEeHSTpfE9DLRXCrfAtNifDdsNn5wN5t",
  "key47": "577zbnfG6EBnr7EieFGZTUFAMz2u6n1M2gLYmxFv5LgQxWLHF1G3cUNmAHWbr8TQvwPJb3rAWdTqmCiien1CCi81",
  "key48": "iKpjtMs1wBGrikprboLUqi2j2AARGS7sM43EQbnV7g6YLMDdrkdfm2DSGWxJJJnycZV7d7cT7BoRc5wZuEPimix",
  "key49": "3XnpZSuLvQGotEigDr4LVfCnkTrkogdXwFBLQBpSqzChSxnmdDiYsp1vKmdYJis7WHev6sXuzuKaN7DGBHEjL7si"
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
