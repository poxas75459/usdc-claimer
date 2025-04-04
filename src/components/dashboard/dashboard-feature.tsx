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
    "nVTfPRbdjrFbeDhDVZfWSymsrVuLin8Sehp82JYq9QsxNJwg7f6XucBJFSWg8tAigxvzUV7ni6oMdioXzcV5tse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KAya3uEVmdZsxerThQ6eq77Fw51iSBRrth242qt9nerkVY3a6WHfbA8PcTkzvXWcqARfpbM8YNkDmRuEDjFYZNK",
  "key1": "5diS8Dsqx954Zs1qYecvqBAq1hBAGmn1uNWub5zrQLrwToqHR1gaj2Bgr7RFKPbRDSyW5cTjvegPrBgTVBMKioQt",
  "key2": "EPAd9MeJRSCorh6QfnAKZjjy6Prnp3qd6U4oRiksGnbFs25YCfJkCh9mN7nMVPkTqS5Pynz9rULSRvPkbXzCeND",
  "key3": "4c76ExWqYkUvjZwjN4RnhuksFsic5eEFY97Fe2UQB7zsXApDjRsZMA8yfPpeH43byYGLBJPyQm8yLoky45YmSJJ3",
  "key4": "5xrrXR5zhGMtmXCJgj9mbq1METSuCBT6w7ZqxSea4tse8zUmNovAhs2fCXr5Zikk6gNUFXeDgo3ZRW4N7PxSueD4",
  "key5": "Ggc5F4uDKUWtrG51arSwFkrhzLdaH7rT7dkaALFJWpGjAwDBTz6N4M4aFoUDFoztBsgorYzhFG4mXD26gFcPJju",
  "key6": "42sNHCXFDa6Wymqukvhf3yTecb8VNhZRbkWW7NqRKHnBfsWSp3Q3uReZjSZjiPXhRwp33brdm2GKDRrx8yPCVfBY",
  "key7": "3t7WYsQDEuLgCt31KvPejzJDuVcfnSgfvtsc1sLBDFdEBJnWpFBRj51Uys9gxyiiWLczvBfHhkdEjBH2rCiKdYs2",
  "key8": "4MxMSscMDX8jRby2NUFgXcDmwEysRV4DznmPPwRxCauJKedF5XL7fgE2CrA8YWVCpK4w7fiHWeqmb9ysyb6C3C4s",
  "key9": "2E5hTLn6RFtJGEbhA73fuujQvSr6to18fSQ4S9z3UYYDN4kyVvfWdQibHZuUvvJxGFPw8t3rUe5TkFvzKZ7KXgFi",
  "key10": "4Ffk7fvKNhwvZ6t58PbCNhpZa9LKgjkE7V4ykFwYo6LgA6bddWsHsCbevWgocTegwnj7sjxsFp3xzrFUgFJwnbnz",
  "key11": "2VBzppe2fbE1SM6dwPtYKuxEgVLaXGmRi34mCGrdSEWTyat7R9BFSkrLsiKu5NuuTk62NCG2Vm4iWcBbiEdTpJRF",
  "key12": "DKiYgZv4YY68UgJ9b4SAtvopuSuJWScmjrLtKwX7KLBpJhy9r3EFWMnDgdh83AsAL5FgZ7dZaWcr6XyeBxpmSSs",
  "key13": "cKsyUHFVM6M4jQbHpnbZN77miC4ifqWvZX963QwgPUHbr1EC5C8ZENqrWh4f2PrfyKWvmBGu6yJ2GSW5fAGNoLw",
  "key14": "3etL32ar4rpDULbF8f4Po3shBTiKf9qkE6L3kRAd7i8Lo1nd67LfgwF9T55Nzcfut8y8emcduGfac5ixZWy97JfY",
  "key15": "3VdTGv86RqpsgasLnBJPmjugQt5C1dxfWg5gEjtc3mmnnrbDQpqR1bZLLvtPQvHfAxbMf2eZadyS25kSjNic2Sk1",
  "key16": "2DGxjLFQG4gNKn1QUrF4woqeCXSunY8B4sA9SH5cdxvk8cbGT8MX7zXLjBpA1K5XHrTVRtz7ReXJkA3M6jy2jAkb",
  "key17": "2PVoH2wGwySXJG2GkT4shSj57fyr29Mzd3AcPkxiLWdGpWzX7UFA4hDuWc6ajtzY236MF9u8hkrQLhjhTYYwXxZK",
  "key18": "311nqhSGtLyy3zZDAujLyRk3mJQUhNfUGrmefwnAmdGF4oAdpJLJcVnKfCi9BBL2pVJKbCpzNEAwcj65eMvpAYVp",
  "key19": "Ld85fvW22HC5RXsUYUrdWZkFf1oCniKGpjf8wm5pJRWTj2mHH8DcvHrcfLKn1vZgj2SGb5BtYPXRK2ECAa73uGU",
  "key20": "3gP2GQSn17iQKXtqtHiKiYU6uFD9y9bRJD5S1n7bN2HnS86nFne3nHCeERc6AnUZRARacggwd6WhVHfiMvvkoxyT",
  "key21": "3xqc3As1K42pKRYJPwH4LKvcRhEhw5ZcbkBW2LhFARqpqEhZpZyku3QG2Pc9DxY4qNE2innENLa3DFoydjpS3dir",
  "key22": "3aqUWRVRSStHZvtMkCrAxRa3Wvyc8pPvp7cctbgfHfWucfXNXv5epzVp2iDaCg3c3RemTma3rcGEKCajMBMM975y",
  "key23": "3WGDQMmQjV6UiemBJxQjw9gfCw9ZGpHSZY8ZMxK8vxiZymiSnNRTyUmgA9XoJFWFbpDvAbyAdwg8pp8qEc1T4fAU",
  "key24": "3hykfpFBwCsf2Vks5Q2ACdnuNKzzkeXotxafYV6FBRg4hHqkexo7cH8ts64q68zBriefvRyLwQffSwoGcmB9aRPv",
  "key25": "5p6TELdPawEnsFfs62vQmj9mSafTBhS9yx4FLkPLA1PyMia7F6hrchfYFBe9BZASwm5EwujdmmJrhrBHugr1Ka59",
  "key26": "54NiaC91LeV5CjMDmhFQFuh78G8YKpHEa68jz8a52BcigkVr7yXXd227kuttBn18bJR8MjsxeHezuExnYa6bVrZe",
  "key27": "4TD2L4YqDNgLbs29Ux432LNuseL4dXsQQjPYEsuH1v7cSbuT3niooN9BcRz4vjuJQ1hDhqE5GgryLMKA9gKgDCed",
  "key28": "VrKvt4uzqPiZGuHmgpPeghTjCHM4YPweHoKaGDSNxUgBV2M1a9NjZwF8uVrJHHffxRjhSBQXG6xFGcERmS3kiN3",
  "key29": "3romMMJX9SXTFDvRr7thfuYXg7poZ8kHP2XQzVSvnY1d2BBCYxYGnAQX86TuDNnRCtfRgaZRbmHRmLgbRzsWcAsY",
  "key30": "36TBak6eRuvAPomjPd2amcbfeyDwZdtrzyBAurSD6uKFiyrJgL1CGCi4wkkBYSX6PbxAXze3MBxF9dsqqwgWFn4M",
  "key31": "3pmrfXxr8F56iSUR1ELZk7pr2or6mDQ4WLjMtp2hFALvQCdiXQpRDzgqnUJRDD2gTQwnz6Gq5v6Q2kqBDwt1zKtq",
  "key32": "4eis6nWtDFP7qKNPL2Bt9r4HhJyWGnCyYJnTQkJ6mJm2Gh3PXn3fb1DNiiWZdeBWWWq9TwHhkAGE6hQ26no4sNTj",
  "key33": "3frYC4jUsLszHFYSvR86FQvzTUaVbLrK6VpuNsAnYy6F1fAULxRD5Md32GrnFAo13nX5hjDPA4NgSbWbQDgVBCpT",
  "key34": "2o6yogJv7PWb1NmgkmCMEG6H6QAFs9A5kXpDL4bX9ps1m6UiYQoernXoeWJBH5iwj5WggufKJWGGsdwSGHEtA757",
  "key35": "MoJbq1LNdbXqZwUrRi1u6Kq1swdQRBuiYxJcoJmMYAeP4WwrkyC5wQDEjTJAtvWtN2n1HeBDzdNEZgqVfKXbE3s",
  "key36": "51pMx1Cq4qaEF71JH92f8PtwEBUFm1bF5N6QdisvQj8Q1kXe7HgPMGGDQxat5LGwPzYsc2oddAy8jWwNLFttPdk8",
  "key37": "3AfXArtAfZgyeebPYPhv6qhYTFoeUKavuja3bCEAYuNZqpmfv22jbr3yPstGpXpxHEHdgCQMvqYwUopPKfMsPkdR",
  "key38": "zcr1KdcvbGZa6eAWr9XXiNGyBtXGFx4n2yRPLLNztJJDnC2C9kcJSso2nAQcdiYZPgKobHnPyqwVXCRRnJndgLB",
  "key39": "3emtWZBkC4jkPdj2dNz2LP1YKRnF9W7ukQorYxY1aaogmdf29aa8i64cXVWaVqMuvcQpTKdeDQDTshtvWg2Wwv16",
  "key40": "2ppvFgbS61j4Su1P14oSrqet8dLLJaxQTEefY3DCjEaHUuyUsB9PWLnNDGeHM4QP2TsJK8R8zHZV8PxXZcDkqYGJ",
  "key41": "4RL4iYjqD2GtzzXq6cA1CXXz13Nnb6anf9CeGoXDSpABQ4KWPU1Cfpb3tGNx3NhuATkDDJjpaPnSKX8cerSRZmZ7",
  "key42": "4PLigeafQeLAyTTiQe4jywPLuuyepwykSuy7qW5TMygKs2SH32AU5LQYPWwdMAoBSr36VYQKzBULqbFpw1jcYpnG"
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
