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
    "5PuU6kBPHXM7x89XEYedbvC8EsNBbWAL4t9BH2GQT99KCZknpF38wAprfuoif4E6ic6hXLMzCPCEapKqzrS6TvNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gbgunJrBXLMSkAMjdkZ6RrTrSUAvogU14dKatv6eubUcLG3zefW4Ghijw9vpM8qQfzp5GN7ic15msLhdBo3t8FN",
  "key1": "5NzQhyJ9o6GqEKYsn2d1goHwSx2vxQU4XQCtX2S9Nf3utrTBeRFJLRknrtCgnL7ZYG5DtkZgc524fU4eoZE4TxB8",
  "key2": "2o9jd7qZ7E7nXgGvPc2Zn1g4yPEBd2WVvcvoHmnFavJSmbsX9qyj1ac3WFnsyTfZgLZuhsxKm48XWLBrZW3gDQM4",
  "key3": "5nNXBA37q8DPbEmLQHqPXDpb6cd5XTMaxgEwrwR9Qmjq2GYPRjj8xKk1qdbcfa4tLmSjXxdjjMHMjKVd3QfzsfBH",
  "key4": "4dfv7ERDNFrfdFktE7G4y7tWyiAU5B4hsHcDBSQ7CRHS6yAanWmYppZLNHdE7s4VRQWspzPTBNZ9bv4pYRfgSfvw",
  "key5": "5N8fg23wSyFpo9TxmZuHoiNd8F4QmviWzgvGLBouzU8sUzwmGZCkwWQyY6hxVkUx53sPr3US9eZxJR9TyZAWAgsG",
  "key6": "5aY71TG4WvbTf3DTMpRYjjcWLzr4ByaEf74UqWtD5KPdh59WuDDXUh4mo799DeEg5A47eX9S2k9VhJkiYaCcBdHV",
  "key7": "4iEsCbzWjdNQjxk7Dgsw8GT41M7EJyYbx2uLNokgFPq14mkEhpHrqiNAcSeKdENWCoWHaem2Jh6quzcSwhoYovUv",
  "key8": "5CkjaDefifN19ms7E3rhDzWeVaKyNoqpcgANLCeDzf249YtfPGjBkg6vy7SqZnLa4Soh14FuSf9QiJQFsMQYqhfM",
  "key9": "4WbfnUNob8T8nx7jMhyrwbNzSne8x2FziqwXkWRysydmb93hahbi5qPhCUGMiNfxyvQGUrkxCmwNVmgYdM2FaMPU",
  "key10": "261tEU69112MVcrznoJ53BzykWr4TuzphjaxzDH52ihPkzRQUkEm8i7JAf3KEfxGZ3yRyFpRGKTh2UbaqPS5wzpi",
  "key11": "2YMquWRdzt5gKZeF3NnHNrpBpGFqG3uJhtMhLPCTY6KFw8VnTLKn37QnQu6ky7TXSGhHXMPCijKSNVvrzuNWqx4A",
  "key12": "4fFUFvJcwYyjWNN4GTXnZtPjoqGcBfB9hL8tLojquCmwVEsc3Z25bR8qS57N4i1n4zKNQTANiqbqyAk7jN6t6ksr",
  "key13": "wWhiKx63U9aP363rz15ntapcVm4xiKrHFbF47UE7ByJJtCMGztqGS8wvRes8oKYg1Cv9yvyX4gALsEp5NZ6EYhm",
  "key14": "2BJRRGrzV3W66h7PwhJxMtHkSbeWSroRenTDuC32YiCqxXsohHCDiSmXMdCp6cdX31PegaNvBd16JaCiYctbmEtg",
  "key15": "5ERUpXhC7m2Umz7JC51KXGjtSauvsMaKGJC57ezeikUJhHueb8eGNJ6ymCcjFhqD9bdshZwz9JDJB6ZBc6vsK2hp",
  "key16": "613NDzngAqCCjEftwF1KUiZn1HWtH417nkxXv7CpwoKAcwin7qpYtmuUqR1hKUNXSxayAPq9ojPLk8UHs6LeG1UR",
  "key17": "3KkqxMVtWCx2r5Fe5ZkLYwFVod7tYkDCyg46T7gh5Mb5vipRiB5gVfhES5JjX7XTBipwVczsGe7AJq94gNfVswHW",
  "key18": "4SwQdTaS9aYxP7SMVv2W2Ao9eMyoZAXZ2MPM4e5hAqP8LHLoA8AzxoAVB76m7M66r81BxmSPEG2xH65opM7W5pLQ",
  "key19": "3wMKJ4NccmcmvDTjXBb5jvHAjwpnUqtUbsC29kikYquDCL3K1h851EQAW4XKhdQn7c9VkHmCHZbDedSBBWcnfa11",
  "key20": "4pf3eiJknA7k18DqqQxk72fiHvpFRgUSnhf5jn4uddb9QjkcDMuRauZjiUTKtDVHRmJrW2PDiFUEF6WFe4uZELhy",
  "key21": "3sFeSwDezfzaXXL3HrtR4c7QCJRjeF3G9rbbFuwktSLA78rghbeeN6TtN8fQFLGYmJvCgB8Z86hMGaQV8VtWTmuW",
  "key22": "57fjeqGQiGJXFjPZ63F8TpbqDL2Yn6EPuEvJC1MjMSeoFHkMNqsy9Xd2wsVUQ28rJEESPSnPC1k1SLnGNu4e8fgH",
  "key23": "4CNawNrYkvYVVTJ44CAziMB7jQ2m21UkeQu3YwVyfoApNrm1kNpqonWDbD4jjV6u6Fhn68swzd2ymy2iW1oDBkbN",
  "key24": "4tkKWTQQRkyurgNjWpjmR3mea3S5g8McXmRBeSPLdxXrgXo2QPhLWpoekn2s3UpoUCzzs24PLJYKGQzgaTgVZ29d",
  "key25": "467CesuU6Kv2utjnpa1FJLKKgXfLymcGvVbjXeoeV5Q2ytgzP2STZCof7ACPZMsXFDJUHMqxcAVZboJUENDUgfAY",
  "key26": "5wehYY9J9sxXytrhJQdiQtQhjYsFFWPzoLDjq66mgSY9QH8sfijN4Tp8uVxGgnvVzQn91gpnnTYC9Jtp76VHE2u2",
  "key27": "4FZQxFDiqMs8SYV9nWzMbfe5EB7H5Bk3886yTK9dxUKHvVQ4MachZMUwYZ4N7fNUrazNikNmye1mdrnuPzj1N4c6",
  "key28": "8W1px6LrqHKU3CG3qARMAHQG9wmZfs5E8U3ZL6udgLcxEoiLkYsTyKjYWf1Qz9GzKpGUGV9XYMJQHUyoVRJgA2F",
  "key29": "5WUi8UcNuQJfVEv1KfBTnp974RnZWUEz2GsvxxvZhUrQHtX4BMzqTDPuGKZBqGNrSNpbp7Fdcpt3QJnRHsTkygju",
  "key30": "4bfZUSKicHUxtLDbVqMF3bTQaUKSaFZUMJPaMZs2DFKNDKTcHp3rdTT5wMwpBs6LFE4pr11s4JPtL5wnc6rCTcLM",
  "key31": "2cWAknnH3gmwvMMdANPw3cu8bngqjPwKmridzr39ed9bCBkLC6EB5FTJhsVVha37zU6NdoXKZ2rkc5fb2q2fxFQD",
  "key32": "3jk9X9ZnssH28nsLU1ihrhyN9URT9n4ndbAo326KNKk63LkdY9dE444CpXiSvLn2UFE8Zf4YMDepyWcdNMYSe1jh",
  "key33": "2soMNWWoUHxyERq6tvUGocZKkfAcSmejUwrySy8JVU7sg3FwHpKwLEnB6LzohPyJ86N9WFqR9JeE6ixEQgwCZUQ4",
  "key34": "3CZ1pVVdDwLjHKBYCzxfPhtzULuzJGSaaWTaxBCAuV8i8i1dmf7LPuErHywy8598ydmr4ZLKHrHwHRuQGSa3YS4y",
  "key35": "3XfbH4YU6jbfkXgvj9QKyVkhVdmGmCAPsjavPkRuybLK4w3TiYKcsFRKo5YyxNqUYu4Pp6QyURjLMjrfg7sjsGVy",
  "key36": "u9XSDb8k21fR6VAmuaRKQyxEBTJ22LQZs932twHuQDpdaMMUfpvD2EtjEkp6SrctDhRUDomHTbKXuGoktPzLz2d",
  "key37": "R8ez97sUDzC7vZiES76WbSfBCKvNaLhVS3BBDd8xnG3egqDgHmNRNPviKpZPL1dinb9AZSSvXjhDehig7vXemQW",
  "key38": "4pK3VdwMSxeDWm2SZiq1MQWYG3hPy6WVxjywVeyQGXXWLGCgiDWajBTL8GXd5ctVDRTyGzntDgztxhNvypq86fGd",
  "key39": "2hyGngLhCYy7mDEyEFDuD9tfeRntQtJpcJnZAumH1ykbdNvTM5EXAy9r2dixUdB9t3QoNnZouqsV2GzpLHpspE7c",
  "key40": "2L4FnE2MYvXJr35J4Pp1GzKuSSQSN3xXcFJ8hLmjGjEuRBzBhA1KdA5mMNZjrEko6vhodvgEjDJKXYx6KEiXD3vT"
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
