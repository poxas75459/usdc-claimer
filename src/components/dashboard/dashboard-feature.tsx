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
    "jk8pEZkeb3vsXj6isVz5o5fqdgXP5N9boMETL59avxH7Y5ZfgQpn75kLW4wouNqSGwd2jPqHYaCr3bMXDg752mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TPTjrh7GGamG56oyWuuxycvMPUdzi1qVkHEEtEm4FnxoRfdivbquYbqT4Wx3dtLxfMwbZyvZzfdtDxgoTNbvzKu",
  "key1": "2WoBfDrHihGyU8sehoP3kwVALhwQ95fLwi4DKSKcV9t7T2kgRGC8jUPB1mf2DHoWKSAAEQFpU4FKq6MJ3oQ9DEVf",
  "key2": "32cMpqya3exW7K2mK6MYg7MbN14uGWBGQcTgPDvNSDjsu1i6S5RHdDp3u4MXqgaWotykepgVZwAibr1khBP2iG12",
  "key3": "Zi4BRV92NTKPfLKCPJ9RHRfSe3xsj1c9eLN8YM2bi23LXYEcmtGiQP7pnYFqHijaq62ktUvNnAwJ8s1CsdJkG9f",
  "key4": "3Y21XiKsenhqmWofuqCqM78zoR9GRq9UfKKo85Fqvp6ntT8JY38wmcmLMknpUSiiJoMsAoejFcJj6wwwkqamDqcw",
  "key5": "H5tr6oR57nLXXcieRM2NM8TP18gi8FGY1PFZ5H96UWpwmxjix1bVHpRbywpqeFX8UvpVMKf7q7mRFuSjPU9vhw3",
  "key6": "38h2YTLuFE5m5xrYB5mQTqRV3uVWRns74K8sApbH8ELWi9mhH7wtatSxV1iMugA4nbzV9UJuq8KtmT5KPqibsPMQ",
  "key7": "mWeRbUgXXLYHwd86aerfsV5VMpkXjDPcxL1YpGmd9Y2i5jveHFjGcbXNkbSXooHTngG6V8rAucsjorencPzfv5h",
  "key8": "2FoCL6xkLZQ34KKa3azwLHc9psakCbUtLmedutKiJhMAadiivuLDTyfpx8wjNmrZcw9pp7rDnwVp8LksvmcCL6Gc",
  "key9": "3qgmckfaYEeZR3ZXQYX3rQfvBntd1UASnDH32AssrP3coczaR5wKpY6Jiu3vu8z7oSeYuY75ij5mBtt5snzNmTcD",
  "key10": "2AU2z2Cp6j6K9WURdfZZQKz5aJPGYB9UDmMzLaYpRqxRc4mfdABwwMqbmE6QdL6tkBSWhQj6v9tZNfe7DSvD3dG3",
  "key11": "5YGMJvR4fU9Q19wHiSR897M4CDMzKkjG2C932MXREARUF86M2Y2bBXz7cv2RSsQHmRSuTj4ri11X1wS79Aro54HR",
  "key12": "63zRpPwvopcpRqCTynUwmi29RGPypNQYuMykWxjigFtKpxQvifpsm2xtuy4yKy77wN98HT1MN5QoeyeZF8Zv79Ko",
  "key13": "5pie5oLU1nLAMkiywNDYDbn8krRhSoS6eyyLJAAVzz4r94fx3VmFZKXxxdbmP9LimGnktRRRktagYLJ1EL9a2TWt",
  "key14": "3D2U6Q7XHp7Fu3wCTkbv1VtBkMNqDoJUPgYGXXhcLvjUckeB61J9fNatt4Miw44vFuM39B9NB9Z2zpjjbnQBd8Pu",
  "key15": "4utwhuUNMgmumHTiCbrJsnwJFMnKyDjPKjeUu7naz8jmwWBPRJAqvVzs67USxmZh8S22t98TkEqdsAuxwyrNjaG3",
  "key16": "5dJsqH76cqM4jHgPYP6HwQJFFAG6toMYSvd2gjZxp7rTQmaqmfntLrarAqAoCygXHYjumsrChGMwAKhdWZMA117G",
  "key17": "549EuSzbJ4cot4d8kH85YjRxqocbsXrNTHhPENq6yT4PaxjTuTzeyzikYuYDzCjU8hfA3dqVKhF8Z8wUb9eFk3ES",
  "key18": "4dnwav6LwS5Zo15uE6E9i3he2YL8xU1gCRkP6n4Gb9onhrmcxpJYmif1AkcDkYn5LELRuwWxVBrhW8uHysCah7kg",
  "key19": "5i9q6fgXZU4cCkUEuS23QRmpMexT7ejrsnx3ZPC7EbBRAKSpTodMKesTFZ6iqRYKUQaB9cKx9Y76ubd2QTS72jXN",
  "key20": "4Nbsc27nduN22DwFVVu1VqRgbynDe5mNEcDjsmYURYZ6c8itMHco9k56k9vFgpuDPhor9HnipjTeEAWx9KtxcGeF",
  "key21": "3H5oGp41BDVhHrrz4cfVs5icTrdH1ygMHZAsK3QiLiFqCPW4hNEHHp4uJd8btLk6uJKHw887ZSoh8YRFBiyLRQoG",
  "key22": "67fRupVVvPTYEpqBHd7roEpY34T6GmcMLNwFqZNYyTEWimdSX5opK1msyF9nv9fMPDCtGPvv7EwDZpRiuHEhsEGV",
  "key23": "2pLoK5M1469o3tFG1UDXCAexqU2M7unMB41eFHzmc7oVU5MTDRnxoXjeVQwzHephBiFMur4mvrofKMa9gqzqd3gP",
  "key24": "58dBLqBg6pt2DLycAAYaRdVz3nuesWLRXXpyyFnkVUvCbhVXt4S2qL9TyLkT1nv16yz5ozUwjAsd56crCyX7Lp8o",
  "key25": "4NQ9dfEZqi2yRqhHJSAC6v4dWsu8Rb7Sdm25DyB7wJwVtcDGH4yzQicn4HB9LoMVd2DSTNaBc7HKoXCsYdj6fLj9",
  "key26": "2YE3DsemphaKJC3Dw8u2QbsbTMq4GAoAzc4kVy7jLRkaJBVSYQynCrsharzsKFjSraz1nJTWsKgvMhBBUdpwivHs",
  "key27": "4GwaMQzPrQK86a19xdBtBwjyhnErY4jyRTeU1yxCkdSfAiU5f2c7e8mLc1PsqgBZqq3g3gBsrJGxsLE2BNShbaW9",
  "key28": "55526z2QbvNPRFyLYt8eeuyPPDjYjdCUvQQC6VXiiUtznspRswbubdSw73PzuwGqHaY7wcJPJ9cJgeSEmAycQqbe",
  "key29": "4orJxmRa6cZPztVMfRKr8tiMdLqH3derGSS5F9KADTJBS7uTDEsiu8QfUZMBGVPTqEbf7obyYXkuA6nGLELn1omp",
  "key30": "2P1z1ASMzMUBpHP3wE1BkZ9Ljh7o7at3MgKKUYd3dobn9ERPoPWTRvAWaJwAWELBjPTy4UjzDguxTeiziQz7YK7h",
  "key31": "4ys7KjKVpVeRLSXjXpi9YanqEVUqHnxDwaccQ7u7PkG9Ba3kUizCb9cUp3GTAMDfBUc8W2R572rh33BjcadCz72h",
  "key32": "4kLtdj7ZiR55DPCPoPrMRmHBxVofkHJrAbmsWso5jN2dPBt3bYgZtNKxvuWuPFsYiBLCbSBvgzLxFUNXk7oosRw5",
  "key33": "rHcYTYUyWHMRiPSz81KXf1YmE3jponQNBnD4LUdnCXr8dwtcBRS741nCRotg47qFChq4ozHKMMoGLKpVkHDVSwJ",
  "key34": "2cnWz8YxfCgqXye4wtKkCXaAM75om2Gqwm7JVegA7PbbLjbMFbYpcsf665CUabBsq5ihqMHLTAL1ukybp1NmyexD",
  "key35": "4MmXv6uG2U35P7bcUaffoLgEGPhUBdC4SuGkXo34mhTbEV3d86Vk3uQnYh3ZUE9maonULQBPWBGX5awteBsHTVVq",
  "key36": "3nPACLkzQH1rvPJUEzMF2E3rgAQngEdMGRDaosmYzmQ5cTqbNtsVMy9qDJ5K86pwng3TybgBGKH5EhnXXvXKzn7W",
  "key37": "5WDKxSQPYwboSG1Mha5sXowhctQ9fSAryjw1uQUmgPASSCNcYzRY2a8iNSY6YrmXPPqJdBVGPsr9henDoSPfsC6U",
  "key38": "w6UDsyxmTzbWeQUX9vUBJdWqABX9ZFRNJUCQvcPoaoQEvUPKzC6mbDYExebHV16ZV4Jz1uCUmbQEyw3abXdVWHQ",
  "key39": "5wGcG2nb8SxjvbkQE9WmLpymZ3khTSgg7Vu8WKGY2Lv8aYMbp7v1Euqc29jb8YMYaTXDyrhRBDLZqikSpwD6fy2C",
  "key40": "2dN9yQrdBvqcx22Zzcdk7derMeqJ3wU5hDuarL85kXpLJ9a1TmSEWkiRMUMDqUJTEgPtV7mHpEyw5yJwNNG9Mx9i",
  "key41": "4PsHvK3kG3o5yLsvvJWG74TcAjmsYoUWx9nAEC6MHnyLrGzcisyoJmsrZ8Tdu8vWpVdPUDZwJMzpFj5Y2K7P16i5",
  "key42": "5LaUxgeEEaBg525wseq8tqhrgfUURcBvg7Jp3k23sjTSw6heVjGDEgCYzqzinwijemk8nZA6ByNdwFYCQk4DyZRD",
  "key43": "3z1bGuthsmHviwfq7Qi3dYCLGhBUUQnA3TYzgkN61DKGTLx2qk8X3Fd4ZjDdMisjBxq2AVovTkWUvAmffKT9Kmy6",
  "key44": "4Ad5tTGAUPB2XKn8F7dwJsqaeYRV6p3xQ4CmT3AgrknHGpvWRXLGtYLSawAth4dY4JqEf2RtXvtKRRhYYNebYcF5"
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
