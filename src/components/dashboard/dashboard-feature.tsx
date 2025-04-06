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
    "4RRnqGcYs1mYftRLj5z3XYZq4RJjmACUfzzC8LUVz73pAS4ALY2PMxufCXU5zHCjRC6uX1uicaExCfETEckxPgPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2wBKQ1jyWufR3D9VVjmCNrGGM5m3rwoyB6hjofarPWmoeLWiEN1CbCusXPbu7zcjyLPEbPPwiA3sdseb6eJh7T",
  "key1": "5JBKgfKGAWo2NFQxGUrbt7yHCYKLHn9Deg6C9DrrUHbXJtLvt5RibHWAPchDwNXzzkDYtpJ3eiv3nMhbPA8pUA5i",
  "key2": "59beL3x8aiEjnWaZ41Jmgr2AWKTmfuyZUT5cgvoLo7uxep7w79YRNuUU2Ak6meGdtoHwdNur5kUR6XbztxLYKRJg",
  "key3": "3f9qTNeH17Q7K9JhyrxdZFxh5ggV9BNetA1hP1a4voZmMSTVWuuDxz43zZGjcqC1CNgNEWjC3U3U1wSreSR9uGz8",
  "key4": "4UqNVGhgPhWHXY1SZUBCmCrVYUCDr36RgCoSUKrzuBr3psevPUSLWjHg8cjJuFQzuRVndXCxGWrffN4ukryEivQx",
  "key5": "4CYHZnkK86CEjdVJZ5eBnyKyMF3KTnbDkg5A4oHb3rPT9jvVbrAtAAm2savKnzuQBXNoG2LZpy7yQDwsWNSezJw9",
  "key6": "5AMs5BRTaWhvtmqbZ4J4fQhN29tPDQk4unpbimQy4Zk9mYBRVDDqWLrtya7rcPbBMynXZ8fM2hKLt49CLvdvnGzL",
  "key7": "5Ye5SYWBfiPLDMq2BDcZZraWNAJqnFLnqWtpK1eEWgrLzZnvXczZrpmwF8HvfM3gNTscDX9G5sZVNakvdwabc9HR",
  "key8": "395bszy7CMKdPW1Ciuf4XGdt5vvYGzEm5WDN2qLziJ5B4QrXF3qjwCcsqS5S56p4bh9jzsP5d4Qtq3upCXJ8fsAA",
  "key9": "25daKbetkGNEUP7GfqJLmtCPzybGMA6uEPdxSACMxFnbXHix5fAq7P5D2mreG5VkbQb9SgYUHZM2NkT8PsEdTa9z",
  "key10": "4zVfUgrch8dG2v11hRwovuiEHM7CpTLBpo8dX7dDVxixzThVK9KC2hQ8d9yiogopnsPiTDFed7xMhwiDvZMnbmuN",
  "key11": "5hw2SQaVYoLW6GdCoxC4xPQhQLPdT2mX2QJmpZPhXDPLyu3U1iYbuSSs6waX3EU5DmXGrdsKcGCgeb3UBDj5zedd",
  "key12": "2NLcU9rw4FEDVA3JdFBz3YJPAU6mATNEnmdsbDgTF3auepysYWnGZJvbuWyLWYEYsHhHcvqruBhKEoYVrYc25TxN",
  "key13": "5jdPRFebjAtdXan4STNt4m7CDhP4RycPjA9E5UYWhVNSGu6N48Bnyw8NrrLqMc7cfC4DvPrYyDFXwdqfCSgs44AE",
  "key14": "4UacZJEqWERE12KBAsg6WdJ18NpcQSGuKhGLQZGioy7qX15uZyVMwRrGgG9Dh1zbbfph7ZQRx4qZnWNN8LkeHsXT",
  "key15": "3oEhKV1tkp59oTtFbwyDVReHjTccK1d8Pk6cBRtXub9yW9eMNnWyYmwBws45YHm6MQsediXTw3Y4zsxatpQq9mNo",
  "key16": "3cc6uCaz4KG7XEd84sPwK3DZk1RNHuDYzyoMNf9s23sT7L8rziFMJUGsFPEB4dQyQn2ibj2SxFEXvY55hqhhmegi",
  "key17": "BzJaUnKNg7H6V9q11Y5re3bj2AXMPg5QqvyXm3isBieTCqeFrj2fez9HoPGhwG5xWDAZvKTUKRpwQDfMwqqdy6a",
  "key18": "4oCxm6xVooK4zUBR5utJDjtmd5ve4zacDKwCthdJfUh7EdFBJDWBiKb75S4rjsTqeoyQ3YdYgZfGfZZpSzLpCP6n",
  "key19": "5ja99THTdW2wmDjdwT6P1ZFhTXzXFx4Jc1fsaNnogu5GPd1KmsSMaBp4B1LSayLpJpu2eUpfPCYyRd1Bp5ARL9Hj",
  "key20": "3kkt3xYYKDvWFnQRzLws8466r9fsc1PzfyfqrcWBBb7kAxXDMaA2RHKqbSL6gx4F5QMpFhf6dVboNfvd1wCsnxCu",
  "key21": "48ME5aviwryNhq2wWWeXErRThFiGxXN5h9VVbDd27DyxRTNPxCQfUveTz922HjKC9rtNkXzW6bfysQhrJyqHAU9v",
  "key22": "mKzPgsHpnw16pMcJJoWPkC6rzNLQchE42MNhCPP8smrYir4vddv9e2mRG4vW4KXEoyUe3Kuj3kjDMuJHAJFjeQk",
  "key23": "2Sp2hv7t9QeifB7TxGfeuf7rsU8s9XVUX3HbWoQtrVZam2JKTWc7V3DJRRpR8BkgiKd5HkuwCGGL6GMUMUwt43cB",
  "key24": "4Lt1z7CSScU1Ch3VZ1NtevDVuc7w6eKaNrzNtMGxZuZoFgmQ6YANGkMnzGCEnw7DjnLj8L116Xw84E8HL8s81fhi",
  "key25": "bgJU8rDk7LLhxcyNk7KycXXUd3Yp5ZEMCb1PfzBe1ZwGEUfg56ptbb9EbnusN6pnTezSQMJfCo9g2d8BbJQRgey",
  "key26": "3Ej5xWtqCEq1kiDJf4vYQBLvkxqoq7bE7xznSvNuubN5RN2qZnPeDXMJg1f2HXc8XhbFJ5iP73s89PKimbrp46Hm",
  "key27": "4j7wmSi2fZyzP59eNL3jcSyqb4ccE6X6jC9JPTps5QvrZeEbjPLszxw7PL2ULyEfcQm46W5yFHNWf7gYs6ibB64f",
  "key28": "2MfCDFPazaG3eCYu6TCbu5J3cZJ7iWduVooEX7xrzUovyyiHQvqtjVzMiLMyiDxuqBAaCHJpUiLSacVmheQLQS2B",
  "key29": "4rbhRxXfhMf4sKAKZQticuyKt3CaxnymCLMwppDB6eLs7Ewp4U5VSYinzcFpeK1EXXfcTqqfyh2tK2dpxYNjnSPg",
  "key30": "2w2FageiEV37KzuaLmsyxSR84bUbFUNLXWkbzKLVNQYKhuNh5gxMmXrzhRYwTDurfA7N3s7MMSuL7B83MaAvKB8z",
  "key31": "5LBjrBR3hXPtyuZ9LpqSDrGGLYrnTm6V5EZxh6pkwCMSv2JQWq8Hc6JYXcPqKMvLaPopp1qeGnXU4Qz2G675Rxaz",
  "key32": "3bQoxV7CZJAM15hP8mzn1ZjwtctBrcG5vqjGPQrTAf53Lxn6r3urhSZHnZheZkR3A3hvPhs5g3qXv696UHyuc1sS",
  "key33": "62cgxCYWuxPQViFk24N2nn52iK34gGCyDgDdrLbXEPv8XXBotnRxVmTJm9t6fS3D8SpjSMzkqQ3XAqTeX5v6WBMd",
  "key34": "4zv56Sac3hKKNm2bSXTunm89sn1mcHgz5idVWfK36FidkJQ7JXPMipBKQjLgYE3yuq6ot829YMWMrD4h1h68baJ4",
  "key35": "3icj8vUysRNJKSSNQs4vEVYoVjqWBD1vPRKR7mSL8AP7UX8L6uuz9jnNuoVMxYQWRtXHEz9rGFP2gVSWsi6ojoQ4",
  "key36": "4QwnCN6QY1vFmbNBAsfrL7NavLJxXbRVpjUuKmWoroqgSDJB3tYti6Vu4pPoeCTJMc6JaLurA7gRhQixhG91HZ53",
  "key37": "51v1BuQ3AVVzL9H1yvXbt4GbAHA1fK57mEntqo5YrVozsQPnEpzcucNxcxMEnrM9xQRHi6Bxwsi4pUVEfJQ2oSeu",
  "key38": "femEtUFCVPrW6WPB3wdQvaA2pk4hT8Y3ndncHuoJH2QhC5P9xTQcuPYXUQQUx3pbraGqvqysGDBcXTeBPHNHmhZ",
  "key39": "514BqgSK2zcdSg7QU4y4oLPS2skZv6GcoPxkdjXLbhjgMRorKJopgwHw4g8PQFoFKnD3UTAaU81eyUX3TL7RqJ9c",
  "key40": "5oxS8LKxZceGVE6NEAEHgmntNp94oieRgZxVzoEFqo7Zicv7P5uNmWbeRABz8xnZ5msAWnkfM1evkLFuhyoLQi6h",
  "key41": "4ubGcjqQySU5FQHY1toiq1vuPpKN5e1sofcPKDhZKfXirHvfvy7iSbXYkXUg8pfRnykR9sQmQZTZZzjfZk9WEZY7",
  "key42": "3tWdgpBi63SCTwf6BK46UD28ZbpE1G11bioNSX1zcKE3Uaz6wi1y8BqaqHn4DPLL6aPNEz9UgqcmnQXTso1xWb98",
  "key43": "4uD5QtjHfnVuCEQUibHRrGKdwpsiMRv8APucSAgq2QkHQikCDuZWy95yJTajA7KcX1aCL8g89h2n6NR876EzTfuD",
  "key44": "2nFt13hXNzMGFFMnpTDnoYoDTXvDMG2LFqfecamcyzB26PDa8riUAS61utTp786BwDpYdVNtvVZMDZofSiJEYJKK",
  "key45": "293WmbNxMWiqadLptnVkkJnzEFgFzBrdp48RWTmEiV1j8H33GNAWQH7wLPqYJ2nzdVZKNHsLHQas815YuvpZyNak",
  "key46": "5kvcK8RqXew5xxWayMBb7kcSTedinvvVrDhEZPXJ2wSCZhTrnPpCKYuaKUTUETunvDxx8uPNpT7gmrryREADKr3M",
  "key47": "5VWfFC7wrgPPkVPC97gzdNTzBisNsqarYdsrNgiqEjEW3c51gDHDB5aUViDTdaMMRJcPG8zbu2ZoVVptXv2K7kgG",
  "key48": "8u3edMmWEXoU2iHdnUKuRrHpoK7fERTgt3MdAJW88PPqBrV8QtnibELKd7FtVUymwFvm19PMLYMkdz67KZZX2xU"
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
