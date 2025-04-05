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
    "4sS3ZQpchbZjD7bhVoxUaxwPjD1ykppXAD9bDxLdTZGjMgjQajEQpNAdukdTmAMxbspEySadUnPGmqAhwPbzAT38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJn8tgRicyG87wy6vEPye2w65SHsiMnYU48JAgvGVnMxqHjWPKpJYHFPHCeJhvvLfJr65dZAD9u94LfJscXLgg",
  "key1": "5aL9SY2E7UnEqwM2fVu7iQVfFMhu5i7LNQkSifRwbnNomWLPs9J6zkwXSpZbpM8GLDr6nDybXNaMRbY4pivNe1cy",
  "key2": "3Bsu69LqhcFqTZQyUAKxKhtpnqssXj2ubwMPzzNDkDsmfA3eA1FdkaLzqYqxkhKLgpwiBjDJhn7kFjyKA2Y4XU7Y",
  "key3": "5ANSSTxc2tX8cJVBStrSBVj6sagedhgUm92auCxAGUaVYBJLW2ik8LHcvNtXh9TmLDfA4m1PwpPib3bcy5x6h45o",
  "key4": "4CZPoWbohkNrkfRKSwFKQ1C5TwQBPH77DptdfvxtyjY4xuVg2ZeUmMamfQ57yjDdUNyWdMYUBzFAPq14gBTGU7wF",
  "key5": "34QFogzhAS4xSH7ZWKag8A16mkY1FqQtDptAzWobktQ7kSQxZnwb5UH4w7uZtSmjuXqgfrGq3CghKEH93wJGCEw4",
  "key6": "4w7oieb6n6SZHutFUfEw2nBaaTR77jZiHPRPnvXtkFAbEvbqbyP71zx4j1TCNvThf3cLTdLJyaBa8NgTtPaAqCAR",
  "key7": "3vieTotXn1Vr8XJUq4LBZuUwE6ASTvm553odjgq4p3aqMPqW1jLfSQiTzNg4kGc7YY3DTL4MjMQQ5e9WXyLxiW2m",
  "key8": "4xSxozTk5QV4AcQa314eq24cACANa6UrzyCcL2RSRLPkxbqjCbNw296wmRyBbztXKS3EuCE8MdSXAcSG3mY5TTkz",
  "key9": "4fEYKqifyMoj2jtavRKMLibw3dHsUPZc54ELPFrxwMg2UzdqBpThidnCXJYDBncY4mVjCA3RXRbdreF6Vy6viV3K",
  "key10": "R93pkrWpwp2cLpZhsbkoEEU26jsZift5cahXngkmN8cLKW1nNNiV6TqfnywZo29WRx3foPycWQpzGcgfCPnuj1u",
  "key11": "4ecbvB8KCwBKZHRK24hSJvTPUSLsuL8949MChDeCfWS4NNYYrEAujYuZFZh69NMNjCWjns8N2knRZuvN1FaYYFPQ",
  "key12": "4Q9oeUaSKTYhL8T2RW5Bi99zgLjySWuSnHsSFXUswokywdTzugzNk5EWQQNrEZgrmYWXyGJeqN9ALGs6AeRgnyWY",
  "key13": "EseLhGenxQJ9mohmEDKVjCDptreMNMgdwp1ueyNGwHaXt2bcr8saWJTHUHNXkTD4Fpm2jEuTWcE5b5M4xfuKj4B",
  "key14": "5fFSMCgpFzB6rWNDxdVohkXRbCn7jeeTkBCAbmTgPrH1YF66B1LVytdYrwMXoNUUTW13YmTZz68o9ypZTTfuEvCS",
  "key15": "5HnmsmCsaZGbLaHMcnWKywn58TPqpAHjHRVdxcVkEZmsdx2X3V9aBrnkpBe7nutWXe3s9ZaLm1H2ZoanWUd9nxrv",
  "key16": "5NWWwgbdLVDzyBLafGz4rr1PsVZ8a9FGYerLTxc95HstadpNT4JPTNufFbaRisjocq6KwDPBafi8wZEZ4ZUfDpBv",
  "key17": "3YoRwP7wzs87VLREud7LasrCH2T9fpSBE3Hb5cu39P9kC5Svt3GCGMBASm1Jro3wkBT7ej8eREEtDkKPVaFCjP2F",
  "key18": "53oCnrqo3DhZezqsPGNi2bcU5fGvxZjt7tuR17CHcXzQdjB6rCE2S2wwQYhjsCJavuqXdgEsFp1uiewrf1VF8x3X",
  "key19": "3A3qLYyd7ooW7MX7De6pKkc51k38qkPz6CmAMvwt5o3DdaTDJ5AktrL9GYngLcNegDQCMBaUFxVwZbEG1rfE1oUM",
  "key20": "4RMXK5iciYnjuMjAM1pmzm2x5q7CDapawyXXhjvFYitrX8HvPgSJBZr6WcqBa7fjHscYjVfpyPNvPxhPo6VssxEi",
  "key21": "46NG8eFgJmpMEXQEKoTtDg5y55EnqG4YE1Pc6ry7AYsA7GgGbsEWcBreUj1LhoAEHnnvJsp2jDKn726stqp44Uzx",
  "key22": "3tzRnM2weojJW76dHk4Qxp7rHmnCWNBNywSn8NeJGER6NPCntutY6VBmGYXGHUe23LgFhPvc6okPdX2b8xdF34Mo",
  "key23": "2ZDRgs8VN5R4sEzjNUqekAUYGTecv7YLdWHUjRBc2dXtHhcNK6PWMqnVt5jmz3YHnSaaeifCtywRLJNtBx1pLVbX",
  "key24": "327vVEwatPABA3WpetyR969mc95eVhstVgMzDP9zvREu8ZLauC3KnsPFqVax7W1YpvNqeH9FZgRh2cfkEWxvvJHT",
  "key25": "KtVy6zMAnAtA8oaWPvzM5YZ8hcmXYF5XzigzxrMkAHyfjQUM4bfStq8ScDUjiutnhFnh8nKoJnQhawWcG419NbM",
  "key26": "nAoZa2eodgbDCQF8s5uvMrBjKiCf6GW8ESSnRY6549ryeRFwhSsMFnpCg5hcZJeytvCyhDY1ZpJrnNdf9BDQ2MY",
  "key27": "2WKHgA2q6UhKimFuAoyZdDjWVbhf37s24eevAfUtyW1Q3pESxy8ijSiyh8ZpntY9TQfaNfWij1z13Tij48QRiVn7",
  "key28": "5qHNyrn2JZAHoNnWKwP2C8atGJvRj1JfyzjbFy5gj8EEpKUbkCcLj5vGviUt4dyF2gzp6wMbMiQaa8buwyyLPL5u",
  "key29": "4iaSR5FeZrxZj9mKxgqZtarg6bEPfZyMKHoTk8aodmtMkfpgFNjYcq7iQeTE9R6sLNsPuA4VQpNrK1qDwPNndoFP",
  "key30": "tZDtjjNK9cjUqvcChJPuVTGxkjyQbQsCT641b16yQ8WcMqrPiBh5SMdhNrSX6QmRaFoPB1Ncv2nq91UkF813uPE",
  "key31": "4iQdTYoFiRi28c1ZCnnp1nFdBMnoDzPU3ekMTyAE9uuYFaanFwN3hpXweatmPhUYWDDiwxZv7oFSJcYYMA3ShTVt",
  "key32": "5z2cUwMr11cMcdurXChnk7edprzuuxPoY6z7vTC23kzBUiGH5W9RbxXqS7MYQUwdzV72Bgb9z2npCWoktFfJY72n",
  "key33": "5uwempwc4HHgoLF4zHaNFvdfaByQduTdywy7JUxMRuKbJXnmDgqQTyZU2McYBXtPctqqzto9kwbAME8J24ktCdUc",
  "key34": "3ngrBQkoUA2mYtwBVB2C7Cvz9DwWDxone2kmy7KbKFQeEPZZoHstKBcQC2a854herY1md12vHJEBPN7MJJAUtFYt",
  "key35": "4NByN1FX2dz1hgWCwwBy9gxFv21miUBu43CjcakuNHh3sXEHTSbFQTq27TrnzJDmGJZQiGuoT4tBKcsGdJKZm6hB",
  "key36": "2vWJUGZyptFVNvEH84zKMaSVtDRVdGp5Ceg3Z7Wdduipt7JAzdJnBJ3zeouHCQQgrRCFkxa8GKyaf5MxpLbDNEoy",
  "key37": "3b8iatLKGhgNfZVYCM3Rf43oYhaFJbWQwj56WwnbH58pvV5MwCjB2xyG2i227krNhwRdH5jU9VawthQ4cXAmxLdY",
  "key38": "4s4FC7PYcxPmhqgub1bKNXMR2D1v3fdTgc5ZqrN1PYXctVrKCgvuAefVh4VrHynT31Vsbchd6cKyJ5VQStaMUeB7",
  "key39": "3nH484QwzBwyttx9vztQnsS61ptcs7Z11rqZgxWFXdSivuyy3wrVGrcEKJ7xdaoET2soCinEujW6n9qtJM9V8MiK",
  "key40": "568FVk1MBoYn1mtMvfavz5EQrgKruiTGnRPNxHmv95HaELP3yLkZmpHQsiboS68U2osjCmyvs8VXfdCtZhsHGy9D",
  "key41": "391def8C1k5ikSj8GC9NGbTJjzdgmf8uLQFgkYeaeveJaV374pcjC3zTwr6Sbme4QY5vGtJGRfXmJVLppiaxsbQZ",
  "key42": "5Xpg5vimedk7UTTmFE7C8JzTDw7iVQWzX5WzonzNa3VLtHWCuSSVvrPXVHToy4Q7tL9LmT1d2As2yYvodKKdXsus",
  "key43": "4nQLENV7y7jCv8F3ZUtWRR8VgWYVYtnsw8StK5fNdrHpuDoo3V8csAEwQEgfUH4wTBXpfRyGo5mJqExfPAGgAWyy",
  "key44": "3i2yG5BatH4xudXvtmycrfh9y12iEG5Srfi67gpz16Z2MRAVD6BJx2Hpk4ryMdccLckQMNeVospB7JrGRrG8DJsf",
  "key45": "3VLscvqD6U3HqWQTgMXiTntfetM2eCA2iMiXiGkxtWH8vatGvHv1J72Eyjqf72BN3za69Byevm79bTZg3ryqYvMW",
  "key46": "Y8V7Fzic3f9pyf6H2rLw9UVAg2QNShS2Pn4jGqviUxTA5H7MywWEfMogBHN9cQXa6zkkbFr8KS376Lwmczfo6Ej",
  "key47": "3acpcRN3fQyAs2VkGAUf9WcKotRgA4rrQEjsq6GGF3nfC1ed3my3c3JSAKCKstChFtK1gkPmwWXgR7qowF1AmZ2b"
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
