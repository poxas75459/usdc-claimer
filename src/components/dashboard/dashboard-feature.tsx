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
    "5HwKCCMdjz76Fw4hwvaF54KbBMZ6g57VU4NL5wQtAMQqpeqeKVwNMcwmRgnTvrX9PTtRpdXogtq5iPHPYKbESJxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63pviac4Vx3LtaHPZDWmbTr9x9ZXH6G9fEdSaRWAgGP11DtW5shmRLykxT4FXMoyh5NtdAV56e9Z1PJiexsWufiS",
  "key1": "2X5UjXw5BSQ5meWLoJfQtPesVrDMYXkBe5yXV3Jg5mQAzjsMe2aQKLZoqH2229BdarKi7kZJkKS2UY2SP5Sq2FZD",
  "key2": "2pwNsf1tTSaYM3SBRZEXW6YacWD98EJnMbRaUCxWoK5j77cAaur1d9zrP7xLQhm5QmWuXV1vGJvXFEA8dGLyYp7o",
  "key3": "3FmNjRmFVcxMGGJdioyctNdZqYPdcSGqi9gm2Dtrj9rx4oS97zNix1LB2sx2z7jaocxLaZKnvXDvteNoqD98fkhs",
  "key4": "23kseuAd2v7yyT6mUPzAxCUL89nLVdNbuAX1xijppJ1euLPurTFXE2gsW1CgdfxgpqyBLYKGkQHAXu3Pnjtce6XV",
  "key5": "46eLhTBGzQRzZfg6yHcMZg43sgfBXf4eo1EAV91nXCLdUvCXi5wSrVjc3zsLfYfEH3PsncCJTehdSnPZjmHacCa2",
  "key6": "4AFoABXhEhUBsFkQrxtXwW5hy9FsivfeYS4vo17zw4hgpvMMebnsgbWKWNZZXeSihbZDNXFrrE19tci1PRhc4ht7",
  "key7": "cds3sxTzkmK8wYjRnsYZ61bddX9dcf5RHDoWo1uxKQ5hpCCoUGxpoT5gdzF4wBzG95AaAYgRCYqCoamw6Go9H6K",
  "key8": "64idANQX1wCQLdYCwvrWWZWD956kwqNrVh2dbZPkaEysziCBvvN6nLuxC7pYAxe9VXNRjd2nS56knkci46ZSky9K",
  "key9": "29aNvKDtRPosmrH222HHGiiRJPn3FmUYF8RrKyPKFmLbVKzqQsS18PASnjWgSRDuE1cWrFdY5P6u8bV7gEw3H6xZ",
  "key10": "44K98GjFRTYs9STJSidQNBiVV1SnAHEyhDJkmWRMThFZjxeAv1UWvAyJAucNpwtVb5QAnLEBf7fXJ273rizyABJP",
  "key11": "3Zcaz7Ex1SueRAqDF1oNfLHdn1cexyZQihEAjAFbFvSUfwgLE2CsdXFvAEeB45Vb6KE1eFk6BrzP1ihyvmGkaVax",
  "key12": "5RHEA7b55NbzC9yze3w7hUfHyVfGBfs42ZdXHfxvzAdnJbNepcfX2K3hauStWn3wYzriUH6ycQuaSkAs44M3aktC",
  "key13": "9PZ6hVCW7zxtdk6aWjX6Xz3UMaSAiTA26LzsfMYpDZx4Rf6yUDFNz4UD7s6E82pAbkZnekhmwfNUqK4tywxjMjY",
  "key14": "n31kzSS2AczYXASQcXPCvR4yitTNb6UYsV8xJ7F6rrXjUiTFPJmuy9YkHS6qCxgtv5vLnDJtHYSqw4gsoWmvcw9",
  "key15": "4y29WMj8DTMxqGZtjTEeWbZTokpcMzoKhxDAyxEgHMx8FwGFNX2E4H3YCqrwMamwLXaafQEsQhrAVieXHi59bxfH",
  "key16": "5FqcaZwdXcxkmxVaFSrQxSL9qRJQoNdxR47BYKxArjcaMWfzNoptW6UQaamg2D1RJxfTQE6PVpKpF2WRx9wGtGSp",
  "key17": "2YsAymWDoLzQcgzUduZVvCt8xcSW6Bz9kfS6Zstt38nx73XMMQ7BoJ7Zd8hn5xCZhQJmL7diARu7VPQ355AVz1KU",
  "key18": "H2PeGqyAkAq8ZKpyRSEysgFZLeVLA3wFX6Q8N34DmENP2JGWUWoGnhG6ytASP6XkPXdAoJgodLKxRig5gEWqq4F",
  "key19": "5wqAMta2iMwGZ1PqykG5LwgJoNPkGySTjdhFhMquiZr6eJq2NdKe751bgGGxzoKXR9vCKgk4xTSaxMa1SFotXxmA",
  "key20": "4qFBBAZkGVMS4Xryz8YMX9Cmk3LJ62EDwA6nQhVJDbHHhkqZ3MgW78uZ2DFTcz7TamMhat6qtwH9gL3CaotdtRnA",
  "key21": "4UzH9VT7ACDZ15C8HMG7aheoki6RXKvvfLzof4PrwfqvkuZDL2QMPGeJ4H5W8W8uZpRfB24jNLupyidkd9xcbMzB",
  "key22": "QPu34C7LVVu51dUcepsXQvYChSrguTXtHH8gEsG56ZoFDMdF493Cbi4MCaLAB3WACArzhQQVXyDhfCG51tMbWFV",
  "key23": "2G1SQVDvpQEjaXFm44K9NmZxBFFBXdsSQvSAsuU47wNApUmy1xRwYV6FCAALdjtDvuf3KXoZWwiPcbRh3soTJPe9",
  "key24": "3GwkUDYFGsYL554w4wG9iRhNktuYJ5ThBctkF9Q4yQropEjhJe6Ai24N3eXwMmzTMcD3icGrTVToYjsPrQ1yXY3R",
  "key25": "5JgBE9Vsgw9jkuGeumQu2hUv63NNb3m81tD6zk1nn1kDVT23mRkU29k8roYrsEnYBMDEi7FWv9hUkM4rav5y8q47",
  "key26": "S2ibHANpEAMPT4AfkHa8pif9vw7RhyvyNbNp2fuc5MUpMrfM2JAa7FN9f4H6WD3u6B2WLzF1dEKwEnU2G7y6qpS",
  "key27": "bQ8kEC8x7R8P41m33N7FmYv7CRrUuH6RAu2poNEmgfj9xonUDBCPWmQAyBxCzJaS8UffL8vdqPUJXsYVd8EDVgu",
  "key28": "3LEV7bZRwwKSMvocopb96it2EAbstmkzBt7sKY6Bb8QCXXSbV2zmBGuwnTzSobHAiZRDcfb5Q8tJz7beSf39pF5b",
  "key29": "2jicZYoDKrPieEpvFEUVUYUicjjBSQrzdmnaWv8sjBRdLnfcsnnQ1Ju7bYeRrymfymhuZbGfLbkfcwxkiinLt8N7",
  "key30": "2L1pzWivdeVmThgBvqJxoKR5qLverFcr6JpmLVWnDfpHtW3DBRoWTK81XbKeVccXuFhFoC9NnEynpCVtgRKvSHgX",
  "key31": "ndNDPLoDBsJHdxzR26bAz5uPXCXoAk5Fio7CqRqB6durtNU2CwhE8SDtedV5XWfSLiVaSmq733PMVVpoMwXC5XS",
  "key32": "ExP6Pcb51X2NQLdumwznczZfSCdRQGnKQZJZ6ekAmz7Axfos5gkuqpq8G7chXcpweSKwcKWB61csJymWW5nzUP1",
  "key33": "eiQ6ZwTA42tUkKE6hyCcGmHThjyqjJhVVN7Uq7H35p4GKFgwMf34pezZTohLkqwZZKdgcUnCvJne2s4vLrz9mh7",
  "key34": "CQw6JNzu8ii9tU5gjMP73dyHoxqfpoUQrFxd2tqppwzyTFjaKerFz6eGPvrFYfp8TrEVYuUo1nuJtNMhHAREYYB",
  "key35": "ncCjcVwxNuEvq39ANsES4cncZo1kRY1j6gx4aYofQHssddxKp6uN4mUF7S1HeuTGbYHPC9zYSGN7UYXMWFaNLie",
  "key36": "2biUbtSDVvTA8G9DofsM6LF8cUpZ7c6gXuUTbnMhbovZoP2tzx5bemFRbVRHzxWgUrRf8zS1Mg3edmaPmwJttZfE",
  "key37": "5cpDMAxjacCFJLoNkQNAc9D5GWBj11cFvh99pEMJ2tCFozRSA3KhtZiSrTPAicWkCYHUaqSGjTjWqiJZ9nAkKwZH",
  "key38": "2KpRDp3WuHGrytCh51G7N8UbuVbn4XFcpKc7RcfS3ryNt4tHYasbWm1ZKmnDknvc8ZNEppRYJTeH4ywq5Zwo4Fuo",
  "key39": "44ta612bZ5oMEM4wpGpxkMn6LqpgxNANNG1bjFcunTs9GoPxqmCsQkyF9Y2mxfY3JkQEZ4H4vVaYgtWtgt84P6SJ",
  "key40": "4pLwmFWEcZKuCoGLgCJFbXY8DvHzoYHKW8LwSfTDRw6QZRJVwfZoc17YoCDvVUL9912uZhgAGskkHFXqomw7DN4G",
  "key41": "2GJYzhfKFuQRoTqL57tMGRNmjWsbSmN7Dm9BAYJoNquqXAJ5atYwHgJSNZtWEiJRqb5Eqs2WzayxPQWmXj1bEpxe",
  "key42": "5AbZCQ4mwgP6fnKns93MFN145RRNstX5KzKHcTHdCHAm828AGyc2qECZyuKHZPwQF9M4br3Fa931jeS6tK6uNjGb",
  "key43": "5NuFgibbLDBHVFkhBJf6UDZVh826t4VNUVZ94Md984ELXYiUHfBF7FPmPFpxmxaD4Asoqxq8A8bjFWnhvrN5kNiN",
  "key44": "5Th4mWfFLbmSBiXAZMZtLrMhLH7JtArNRgqNAw2xNVX4pXRizsXKLX6a6rXonvJqmNzePEfq4qPb92WwWYtezwXo"
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
