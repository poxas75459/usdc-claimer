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
    "4eTNJNdSKnzMyR7jjJGk78X6okMqbbRg2wgu9Z2XAhSr5saXPNhRVKWSuKh52VfPGLRFyr4wakYeHYXRNvBsnkte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VW4h1tyJwkJ7cMLBz3VhJgWRxPWinVGNJHkaPEGLH9A5LKNjciwxL4nHJJtYtLzYCyPvA11yf7rLoY4a7zkibje",
  "key1": "4orBs21jdjfn7epqFy1fqPy6mMfWbyQ83zM51pFkK2UDaWLzzWVWK8Mhd4TGD6kNMRbgMaz6eS9eGuJ5XX8ZKHFk",
  "key2": "5jSCpT738i4Hgv5f7URmXqbY59tJ1VZiE9aNeGJRwEHYSD761hn2xD14Fmj7PTwog4RXEcVLQtS4CNdoJJjnomDY",
  "key3": "2wCsrypyb7F86rivCar1oZsUec1KkhxPnfz7xmutVrYX8jC9ZhVN7R2YNdNssdr9A16AfYzQb6vv9HTDuNW7hqdp",
  "key4": "4jRSuFN2GLJaP4jv7xZ6nbjvWueKsc6Yj63DXQGPPCGuqfkmFyaVhYEtzkyQQpgf2FQTF7XaXJau4fshgRRq3vdF",
  "key5": "8hfC8XPFe1rYWZv1NnX9FVPHaqHq5Ta32fzKLo11T963bY1zVVGPpuEEaTZCTSURQSf2eegAiixLQXKFHHRuJfA",
  "key6": "3xtt61za1p826cuv6t31y7Nx81PyQs93cXYo3mLsfg8deqTFAC5NZH63cdsLLM9iXJcGkJ8ncEwoqHUk7MAFPT88",
  "key7": "5jTa1KJzLTq55Ta3cjtYtuNNBHniREGUn1H6DR6t38zFmZM8tSmbdb8kTpEEf58hR2eEBFrzMepQT99caM4d2PA2",
  "key8": "2zwgXvgj1ZtEAx1gnx3E6tfqkHYjmKrn1Z2mSTU8bNVyAxmwhAW2Ls7CN5pf364MoprTjcNq4xbngdMi63MoTVP6",
  "key9": "48Hwd2aB9Fw7Cwk7v7cALRc3hqunoEtoJCkPJHr8pnwrxY4SWVTS5JY9tGAXJzNb49kEpbNiQgva5uDFsZ5gi2nS",
  "key10": "2bdT3iyh4Y5GNWHjWc9PqwtTUw9B9dFrPcPfL4wFYsxbzgWVWK3X5Na2iJgTN3J2QWUr3pdm9tvHDJV4Jfux3YmS",
  "key11": "2atYwzBZFo8aZfqGZMczBo1Ptt6Xd1DtS1fguThPcMHnrLxLnBSY7JWK2wesJyHpQyxktYjtmwHHfVjhx2roSkLt",
  "key12": "2YUcuPKYVRqjFU78LspHYGH9DVqfiehoY3GPUmEh9hwdLj4zbaDS4VAYhN2Hmqfsdrgt6VbMkU6zvaoAEx2BLyvu",
  "key13": "4ya7DKSnrzuerMrEeSA3tuTpYpLup6453S3szxboGtb9J4FgddGBXMahCgAtXSdZ6qVGzHCaVPTVL5BKg7VUM5u",
  "key14": "2HiYJCsjWY9VXBBzhJRzhwgaHUzqR4kBc9nfCV26HcW4RUcKWAcfRuuTDgHJEWSZ35ccaS8DWiJhay8k5DQRW11c",
  "key15": "4nWPtJBSd5C4EDJ2RV4poeFybCGV3VuUPdNH8QgKteakzB519Y4qna2uAXRm7JjHnQ1wWgjDKwj3d5p1uteQRJZx",
  "key16": "29g5oDn7G9yUaF6yrZ9uTkQ97GFaM8Qk9Vb77BJSiPHjAhCJtmsjTwRKNCKp1DTq9EePgA8ew9WHgab3NNmTMomi",
  "key17": "5C3ciSZYAtnNf4ACSuD6WnBH1NXtFjpCSFmHsQ9PsnNfWBVC88buKguU42oEaekKwnDkY1bKGqHPFWsEo9Am2uQC",
  "key18": "JaC7wercBqBcJ6A9HxKdrWn4SCJVEQrAnBA4DUz88yEHQjQ8kUjh25KMZ3RbLgtEUPPdVeLkG6c8sfWUQaA6GD9",
  "key19": "3vJ4fmqn8PZHtoChgjCZ1cN5VfLrEZe2ZerCrevs1efj9wGYD3P7Z6B4V1qcpJqKpXH74oLfi6cqYGVxhCxcs9CF",
  "key20": "4usJn8ozczcLwuu8jTmYa3kTwHhrBeQ2co4KG4VvDnuEzeZuDHuzrktiFDhZVm9csgLDE89jkeSma6qHyxWuoXs4",
  "key21": "V5osSxhxe55wTSzw6ahkzGqkk5eQhoRko8dPv2eoZgGJZM9SP81MPo4Ja82Nf878BGAnvUx8p9r1K7uGEd2ytyX",
  "key22": "3shN1H7wShS87wYATkj4umq62Xqtn9z9i6q7QkTnhNzE5X4eiX1dAa3tBieVdTyqfJaeu9n3mpXayX1nk93xqvNk",
  "key23": "23yaFgBVnsZEYbfk4BK96AaFecFeHvv8A3aPUuEtHCVffP6K2RQXdPLTY7Ht16mT8Mes8TmNXKK6x1J68wqJWdTE",
  "key24": "2VBLz6LBdb8pvrn1X2KzQs66vfwvAFCmMc64H79CF77qjqEjc9T946YnrKaxf4aWbjCWWVYXqZr3vJ7T4TNgentk",
  "key25": "JS7rRzVz1GsR2hqeANTFEYpD7VgqfDVUNQQEHX5D7hRcsXULzAsyqndqtfvC5NrPz136Koy6Y16CGAmEjYDDaWs",
  "key26": "22YreRsUP1n7NA8zJeSD1iXHWeTnUfCF5WV8oxdDXh7pFfUExwUsY8TjgyTbDD3MukhRCXWvT46yahvFmh3ByC3a",
  "key27": "5TvhRU6VZEhdMWNJMSkZfLhQbMGFKQn7QBhhFgKzTwhA39JBgSJY8WfjNVKhJQEn3MD7zzk25LpXAt4u2toVX3GA",
  "key28": "35xv1R5XmFVNfiQPnTQceCWijhp6YRYCNij5m28XCYXqDtgEMJVPmpaE8wVZQHB2n4AbmwEprP3wwDJmA9KSt45j",
  "key29": "aewmdKh3uRwvhJeePS9ceDBfStjY2BAbqXuQyfeseypfVYTJyxiTFN6pVKHH1sEQaSrBTF733BaZowRYuTTr2Vo",
  "key30": "2L7jTJSu43nQEmZKFwJYA7PdgsVd4pLQDKJhkM8rJb6xNErZM8R5EmmT7DkmZvYCCLpM1MrAxvP6S1VKiCJ97fFx",
  "key31": "16CYkrS9KLUhzWse7H2KoPeVw7tQ797j6uP2yoWgV6VQSq4nAPo6575pj4t67mQU2yN2bYpvXoezs8NLUBP17Ek",
  "key32": "avpAZtwF66GjtJxFwfga11HZ1JrdFFGGx3CDAMHMCR5whXssMCZ22GqT9BtsPgKSQsW16JeDTMVvxbpCeZVCxE5",
  "key33": "GyjwCsajL8j4VmAALb68UNJA4JQUDxRo21pFrJNdfDmPaFdQGjQNzGiXf1HazgmkejChBHzvqSTJXKWnvCmxeF6",
  "key34": "AwvjTJMZFDyGPYZiCZUJCwDbG1Xr8aQ4YPasST8qdwck3qDQmwWyZktgiZDEW5TjdVXw7S2txkmfSUp8TvFmJzr",
  "key35": "25ea7mQu47QZhqNKmdbbrQBESfBvqQwUZqyvUTEzR2YmiNSB8M8WXQQ2zVt2fX1t1B1oMQpvk7rzmhg6JiozW5bb",
  "key36": "2NK9sJAT4bNJ3pyi135P4xj4VjKCepDkXjcQhg78zdcckJFf6JqPZwoHjiqFTKtcdqhFCenECJXzqu4QDXSPzcxY",
  "key37": "Cn4sMmDWVqpGyzZvkGZ6pFqP2PkEfo2nTPWwzaUYEHwQFkPVRHj5QAVTYJTrFDqJTmca3UtUAzpgMuYNFRPjSb8",
  "key38": "PXQPJpiuGyDborSX41ocSzrHTgmaCK4zUrVKDpHFZPq8FMpGdmcNy3jkmGZLvjqXDMFGQZSxrjspcMmJqyd1GLq",
  "key39": "Nwx4ruoBsULLZR2mVgc4XvdLqoU7o9cqZNiWDZm73rzxfPriSTL5nibA5m6R5XRgDiHWSeqMPLGfZAEgma2Ti1z",
  "key40": "5icADyJLAr1jrXryZNJF3BGWRJoVtaKQMmU7PHpkPg1Bun79PTfRabT9wVMddGUPrt7pLF7EvKUakp7bUR8gbt6D",
  "key41": "5JbgTYXVacmdrvoe7qkvz4yEYJqkpAhErnHxy2xry8pE1toib7U9memathfsnggoVkqVQvh911a5LWnXVKHNi1Tu",
  "key42": "ADU1j7HYi69e2d3iqY99gr7MCFgv7g8W5Z6mhY6o8xb2sKS2sQ11C3SH6EPGoA7F2uaCcBMc9WLBhUA465D2GNm",
  "key43": "5HgzQpJYmSnhM96yfn3PVA24g2V6oS37zJLwRA8FzNNN5BNjAw8FKbaaq7GLtb35bn7iss8ZHMVkoz73BHDZYMMq",
  "key44": "3Uq1rdqqJgb1XfRA4hCZq4hq88NMNq7eAE1zHUDPa2hNWRtXUsKtUsAbjxEvUji5iXxDDLA9GUpZTos5P5jsVjqo",
  "key45": "5oraFPcSjSoq2h84C5k3tsnGYsckvCksWZnwFmaeTANDQmQ43kmyGvbDWpYHjAM7KVf3nAKZgmwWWioeo2Uvh6rp"
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
