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
    "4Q5MaNALeuqRGvsDaw9DXPKP64k9NPqnSQauAfa65VzVCU2HMBRjqegEnpn5MYgjiFUN9dV7zJ97VYSDi7mWHViq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbTZpSMaCajjs2HSK3o372r7FSZRv23Fer9Y4q21r8Hm9RoJqbgCPRwCx6SNsBk3jENjrg5BVBpqnaLxQGaCAJW",
  "key1": "5kXgvFk1wemSCVvU8UCVwT1XHUSQcxNpu6MkFtbAFezsopmnBzaq5qsMXFvx9Hakag6fERbXgvV24iUGso4WnNtp",
  "key2": "5kFcVL6VCU7rd6mNxmdET9wKjkHwWyvgd3bKG3gMtFVxmAbpQ58kTgZqmETRTvxjoHvjhrfuPcbU3Pt3dkxA3HeJ",
  "key3": "4tcDrYSL4UL7s5XJBCSRHiKh9iQsSRTfNydviiyd2aeSRoEzZDpmYqjx7riPssH59QR2sLMVptY3TuSGvJfg5qA8",
  "key4": "f7qxsT3e4TgmPmwRZkYXQqpgmEeYcPJhbbeygpwBWv66Jvgmy6LFZJaZAKeHe1S9YSDAMjXfJeWxhYNH9ZYzPG9",
  "key5": "yS3kpnE2xMKLpUz3a22qXuCQG66zfPxkK2UacAozC9r235ABM4HJDjVSr7eJDwKYoJ3rUCZQi9PA4k5oJTu7B2D",
  "key6": "5LuMWHzj5g88qv14NYk4vJwgUBdJrL9CUr1fKyvn1m7S8qV2a4VtP8DimegWRNwUWDGdhHRpX2vT31U235eD7jym",
  "key7": "JJJcfTVByZbrrdEAfQ7PaBrUPUcRAk8PdHcU6zbHsDSsd2sgwLma7RqCtQWCc6vLtkATC8YAsDRQXoK7HLSV9zZ",
  "key8": "59nMGSagSuWdKv4eSybPfBTENZDzSLXMK4LZxD7JxjXcdy8yBbTon2bFKqudJigpup7axQ2HPYctYcXJtvDU2Tdr",
  "key9": "X9yP8nqPGu5Jpc6wqmH7xgQQwk2hsuq81BBB1vEAX6y5g1hq5LzkiSe1PNHk2U2G3V9TLbhTFqHPxp6ShwQPs6c",
  "key10": "4adxPijVrDxWL7wwhM7LAh6h4et9Ykdff4BDTPph229RvjqnScXuDZpaKrKJB7eWxTFuiG9KSSS9sjjnnZq3ctP7",
  "key11": "5nM17YPkGL4vReWWmPBrxf94RXSVxz8AMpSmSKJKxJvNezH5GmXGGc3HX11mBNnM4c8y3HydiiAAfKnbuqSi1wN1",
  "key12": "2gKPrYM3RikCv6azNw83z5X7XKmXki3noWdMD2z8LwRi9JgxdiTBmGq8C3c7UsCkwHjMXn4B6d3XxsbihqH7h8pp",
  "key13": "2kncrGcf6YyEYy86vtgdXkMc6EEEAXCrMxYjjeZGhhtqdzwkLEE1keAiWcnSt8kQBowg8VLpdVzNUBuytCvEjs1z",
  "key14": "2czC3zZiwXkCiNyJtWZV4xAHXBgKmebhjKf26M8GcPeCT5jHiE2VZsacFvQAvCAEAF5u8EvGymsv9qZA84AfpJBQ",
  "key15": "4x1EsZJ6x54MEpgbypcq5qsgZRFGFqhSrC87c7UmNeqEa4jeFPyUGGLHRAgtwFsYyxuh3jCCHvNVJKb6urbnsASt",
  "key16": "Hy9rhqCm9EHnBKpm2RkKukeHyaUqCRztAAajAunqu2nuk5CiXA985pxPAA8zrCY2RNWs2sRiRALHPmnmYJ7mvMT",
  "key17": "2sF4M2QZ5RSrs7r4ErrnMqP7ypsjqH3ySoFo9LHf9uLdfHXvYdJZDc8T7yG5LTnEz5C7uYFpzP1oEsuD4Uu86Xwc",
  "key18": "3e2v66c2w5QzUFY8MtV8ES1v7XEgiv5yCJL8o2DCp8Zmx21ja7KGMMzi154dFoTE5yrKHRrm9n4gPTwiKrNC1Pm4",
  "key19": "5wym8egy6f8B5QHp8HfTWWVb727AG4GGcS1aiu3LMkpu8L8pD7Ygxd6adsb2Dhx9x8thrrzs7NJ6oMCVh33LLMed",
  "key20": "q5VpM8xhTtM8JLkvnbrMTAdWWFugi9q8YFqSKqRBvqTPZhCPcQNJXCZmwxF17Ayc2w8ruTzrgGySSJaGphDB3X6",
  "key21": "3e6y7CW1upgRAL6VCsHUb4pfyBMj24WovZt6wnX7REGu3ax3fPVAThNVcGZJByHSZYMGgkRz35wmLYgnudN2UKQS",
  "key22": "qVjXBpztA2cmY7acTqkPxMyFrgg4wguECHd36nTyTr6ZTd17wVw3ybUX7VfS7u6JZB9KpBUGMi6uSqudeDzDAGS",
  "key23": "5Z7JGdCPRTnrZFffMM8PyMVrUNPu7bHgL5Pb6LvvLYUwNifDhUXYG6mo62yuv8XszX1bfw3LEaSrvaL4nqWC4w8b",
  "key24": "4w927d6yM1WK8WfvJVPTbR14tyJJDJdXKvALD2VtbZ2QCv5NgDxYbCKQuXnq7B5cbKFX7S4htnRYsUbaMtjHR5Yo",
  "key25": "36dPLbBd7tyvrTvQkYoyy39cS1sgfVfqijQyTKZpyciXREs1hQdBCpygedsp8fLg54pJKuWPN5NJgA8AVdENxmAF",
  "key26": "3gggYxMgiUPyssp1zbkAoWwUU2oM7ZsH99guj79DAd3zAqfFhxvzw59S4a6XzcN6jq9K5BYyDowfE23JKr2NidJe",
  "key27": "374mRr3W43x5zhzRN8xgvmUcxcftgyr7g34zXhTB3YTQsjxTS1VQFvLPKxhADq5pq5gTo4RXNCX6XcJh9f3j8TR",
  "key28": "48ERr1XyxLo1smKbwdagyK7jPbSvRNjvNrKMDueMJNjFwMCY8so6ASHRv95KMMif9dmdFRYvQQK87JVd7Y7CXPgr",
  "key29": "3K3rsCqWXschK3UxUmXjbNtuPx285seQ1Veot8U5q2MnApn8nAvvRDK4cEDLy5uLh2aFKbmDbLT7Jg8WZZcJNGf2",
  "key30": "P7FBWos5xAAQdMzXnb1tfq4u3RaQG1N5CQKsmD534hGVD4p7Af1vTCtswzbvBRcFeXigiFvdfw1Fd6Y9TVvFXvX",
  "key31": "vmMV3H8AeiYFA5r28DbcjvVgPjUSDzqzhAdXaDuHUWHJMBjWmUhbJ9AR5p2J7w5ASYkPM9rN5dJP6oXpVZZGpD7",
  "key32": "4QyUC6TP4ktyjysyvyqQJkNf63Crh91nV61Cd5ZeGQ2s82Vm1Yio97XCDYQ39Gsv4a5vLrSrjCRnx8gEMUiKRU5X",
  "key33": "23eH5bHy14VZwRBu41QVSxAfgbuGkFHDWDnGC8osoVhUNAEwhN9tS1JxhAsn5AXSScC9nf2UrKeNSPPVjMqxANBJ",
  "key34": "3LkRqobKMmiAfvHBsunW9iC57TQRijq3tvwLPV61tNZrygjAT361ywGz9jnqDgwoiGMPtgAiqAiB38TAapnKgbfM",
  "key35": "61NAfcCYLWR8WHUTH2CAwrBueAQQj2kPTXhY53yakJw6e2dqabgwfiX9VmrmkqSmQcaBf9ZCctgen1NnBHrFz2cP",
  "key36": "5kv2tYeacxHghqtCdVct1mDGhTLoz5dQKzXVqAcVP7pm6zJkgB9tiLtFg7UevaK7kptNSo27S7BNGYudUYXxDrL4",
  "key37": "5AJWq3Bd1kA6fnTYwVuArUE9Vspw95ESfeP89bwdzKeRwrniap4Dof4DgGLQAGTD7qgneCPmK4xDto6QboGEhZMU",
  "key38": "y27JbXAUWwxuwMhdjftUZxWmLMgDVcV9kkHis7zKDeANWmcLbrKyRYQRsV4uFvhMceTwBvB1NyVMAqB5nQoEtCd",
  "key39": "638rFqyYooeGsp6RhsVAgy6voEEFe56knf2XzfiCTivjgc3nssjgbNAACehJRnCeC6kXFSjmT1EQJGGQe7pmmkGa",
  "key40": "SKK6n6hjXnfbm5kptWCHpqnKEDyuyhDyBvpsVU8bxQCwMgtJirPvmw8THku9keT6kggj8x4xWVnRA1jmuFZr9ir",
  "key41": "2e6EGHpx8UHuUJnPLHn7tSdABoWoFyQJ76mo1KJQmy8CpjSVzk27pTAYHmmCCdqAefeRN7TMZ1mWTfmuEPmxXRQF",
  "key42": "2q3uYE4RTjNq3ASnzMKPTBQ2eELpnGdCd6jgSJBUMGVqACY8hvfmZ2mn9b998j7uLd5b15vuWNuCgtU8JwiDHsEu",
  "key43": "3VhAyYF8Ej5x1JB81nT3TqUFfbAyv7oY6UXYNFVFNpU2PmVBtajtL4UGz9rVoXy8YLBj5CMHSnXhFhEaRig23s4J",
  "key44": "34onQrwVGSmiJX9dNFMSdjHVFMJKQacW9MFxCA1qNzKc76rRR1UoMPTDckLdy8Fa97Ubbuhjh7kVWATUU9yKcUyD",
  "key45": "47AKJzGndqhJgUwV8kUR6z11CsaF8KRgkxBz2CjN2NEZ1yGefyo2aAEXY9o7LsDbBktqvJ5TMcnZECbMa2MUGSeL"
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
