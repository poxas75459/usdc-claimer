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
    "5X48y5tcb12ysFGJEntho7Fh1K8YRXYTcZ5RHqWfL4J2c1ucsu9CBWc7yXnZiQ8h1vMKs5Z4o1dawUGbEG7MQAcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KT62SVmVtmXCoafdpBytKNo1kKR82P6ZLVFTi8RH7HaKo7a44uWqo9tRsNoSFHopQsy9o1dJfopMC4UjpEcgCdt",
  "key1": "2onWeDD4KLS8eeW4w45dUXAo8XzwFCnmVyE312oCyfh1AwHqCRL83omG14bpCV1jBmzC3an91LLmGZ25eMHxCmxi",
  "key2": "2G2hG5JHC13wGkhfvjmHUeXL6gW6U9D8QMmiFU6FJuDDQzWu4DFowMNAC5VQvj2P6abLp4aM1eWKeR7k6wJAoeiV",
  "key3": "54DWbb9mvPDfNCJp7bPfrNAN8STFzNWGytnoHkP7wq8HDvqwJjnZLtXhXToisLboMhKGwxHnmv4MqizoNH89qrLw",
  "key4": "2eMGMDUN5gKf57GFDYF9bvxJEYSgJYQeCeG389L2zMFP1AFiHFEVo539LYTm7JLPstr5gdqTv6bAVzyqS22U76Qu",
  "key5": "ZsTXnn1jVVEwYBxEqBSMwqMoHLZHnxcKRDiyYfF6GRn3c2ycYrY4uXJgx2z8YuzfoTvg8RRRy2P9qenWoVPkaDX",
  "key6": "2jNbgbrG5F5TB39sbDk6yAtg77Ahk6UYefoGsj6ZJ9pNdm6MZH61jNHvmb6cyT8RZpVGgRS4DZjfC3MEUCbo6MVT",
  "key7": "4eEHwo4Nj4jgjDRtezpF4eFiFY3GFtNdaRUqxDGq3WutPw24uprM4QxPErEtMQm1L3vnm6nupFWZdrgjZt5yDgdH",
  "key8": "5Ee5QUy9oqP45AFkKQtZsS8KaKUywm6oKADKPejGbogEMtojzAvGxbFSqc4xdTkWyeGR3dtvuwi4CGmWELjZQizU",
  "key9": "2gKX1US4xh5aKbgysg1JrrXeUWAi1vRmTqRbVefpZw7N1pt8KJ4scuFBJ4Zq6bRyMYnFmRnTJj6CmA6EwGdGLmvk",
  "key10": "RM4VscmG5ccd3mUiS68p5MGMoUUdG6kfQfzRhvYkNachF9op1XeVuqaS4iaJD453Wo3PJrRDkqH27MqP4vaWbZF",
  "key11": "2cgecqbPwR324aKhNZxnFc11oszEpVPuoyR4ThsQkG9sFwP5ss8R6xjW3MsSdJZXbzG6gq4MoCH8jzjVzzvfj4Ld",
  "key12": "oiVth8ne1XXAraDF1RSnjKFos9gtL7w89y3F5gJQ8kXC4gdpHgyiAKGXSjy5MmSgt6jnFf4wzqDMp9HMs4qKA3R",
  "key13": "5DEvqsauwGVq3NQ96UuuPMiZxa4HvLZqPhuQm88aD1mvTa2MJGDJyemjbLMP1wN3vU1qUN9T3m22LPUprek14A9T",
  "key14": "2eup21aUcJqp2DRTZ9bmdHGvSy53AvmxdpndgGq92CxBco2C1hLf873BdMc1zSiNvtCP34WPcercEgeztAJerz9N",
  "key15": "o4WLaRW6jkXQV4SRFaFgDW9kSYE2acHvnndM8XSon3SAbfJzb3kUZ7Xj16csUfUzKwR3yrEGcdq3U8fMV71D9TM",
  "key16": "57Fe1JWxunZfeeueTHcyprP9Rmp2c2a8sDRWXdvkNrwhhZKJ4P5edjJ3sqe3Pt34VvAZQuT8LJ8w7GZZX2MZxSN5",
  "key17": "c46CtHemXUWH3ksNgJhc7mNzdXss1p87aQ3raUnvKBxVuyyaELp2Z2BHyJ4nhSErWvR4n6FdHu1Cc5GdPJ1fkvr",
  "key18": "46fLrhKaB5rAcndWwzAHc4QGVKkRZfYZtwYq9c58Qvc3o4TX4btP6dXtAdwDBsyijADrWakV91EZXdWxJAEBZZh1",
  "key19": "4QYtkexEg4Z7wyVCMAus7GGMC9eCN7Y9us6LJ4bUatAgUx4QSkRvSEQ4wWSHhdqLybKX5V1w2LgrEMrrt9Badfz8",
  "key20": "2P6EdLZvrtrwmJGdzffmW2newWpYgR2jwJqbPKAKbKSw2eXuXgebjovtq6ZfcPKj2EFd1JFJVdfao5VuzXxPXf6g",
  "key21": "E93HftvQq3RCTk3m75wPNm1gEuqs8QahAwVLRGWHJpyncBxNSXLXAVNLZDNp9rxnNGULyiqrq8H5GfDJ6y5wtew",
  "key22": "4KxvDZKeBtYQZ1qFomgKJccnZrSw8Tp2mP5JHRmCh5pDqTyyXYvTVyMAsdq9J57QbfhGiGdKJvcg92viGkbuFw1z",
  "key23": "4Z376SJxpCr27onMY2oiT9pbMGyJib6Y7Jxc27qD9rErG8rtroAhmo9izK2d2zGfVXbiQWJwkoRenwVbRLj3V6F",
  "key24": "498A8XT7mtQjcvahtRkzZVSM5GGgkPseQBPJJsP4CiGYVR4X67YoepYaPfaG7sbujhoaoUaxyCfiWaoEic4VVsdw",
  "key25": "5U1siqY64dgfP8ygwTVhfiFxjtKkwWhGGiXExjMRBmswmpCFCWr4oX2gEse5TevaAH9JMEaETXWRvmqb5jxHk7DV",
  "key26": "5ZiFUxjT9k2JQ2cEi98EQsbDqrdYdDPcWoi8ZcJsNxaFsbfSpVrizgkJPPJarqSsQ8ppiFaBZe5VKFjXAAxrjipk",
  "key27": "5e7uqyKyPz2qUvSXiZiLKn3wgm2K9VDC6ddZrZKCjwEe5norErGG6oqEtra9AwEnjcB8qEMWc7xNuwEaryN3wRh1",
  "key28": "3ArYxJn6xYWPmiuyaBgmCyhUnugFkPQ3gxgnQM5gk4xdBSZE8XoNVcKeHtC25oH5bRnvqvJ7D4xFduPn81vAevhQ",
  "key29": "2dNx4nzkLSa41m1QeQLzdZDHV1XijoSFy5vcnsJ6wfQsoaK4kgmkLj6L41uL9oYmwJa1smvYWQEiA8AvFZaKQqS1",
  "key30": "2rSWZBgjqzE9Zb9rAqjuAMcQDm99v8JUhbBGqhAQT8DJKA3PLwvwWEatsAsJ8oxiswiU7ACAAZAzkQzNJDf4PjrT",
  "key31": "55zh4SThE5kU3WxFrabbdM9gdRFGNLnuYtvntwSz39pGxKzGL9mSg5MjSX6Fw5wNRDXjq7dii6F4hscygKCa8vbJ",
  "key32": "56SPu3B8vNaKn6VYoLXUicQUHhgG5HSGGL5qQ8A8aC1TjqAhV8Lt9HJSfbj3fJh7Ah46dKeMd9KrhXxkPYzffuri",
  "key33": "3aRBtgvNDNdu5SY7HfH7sfDTESpHhrJ9Pksh9FkatowZYKMDVhERLu6sbrdX6M6f8ukLkGVyj4pGAaWQoRkRTta7",
  "key34": "2BB1H5hQ4pLfnm5y2ZdHMwrtp4cd7jN89ekEWAhew5RgtjKmWnj1E61QGsrsd83BH7hFtGbdQoZ7MRCF6gzP2srk",
  "key35": "2yRaZDq4zLBJX826idPrR7P5XwpmiSHLmTnzF3rQ37GpPue83rXC1w2sSdqLEd2b2woiXfgEMcCzs5tMAyS3nt7S",
  "key36": "5VwwnYcr8t9ukZQAHRdfJwzUv78md2BtpW7auwxiyPHJeTPUMUiYWwukrBN7VJeLPVgAdQEZN5WDVpKiRWUJRwdv",
  "key37": "YmCw26kW4Sw6rBTYBS3N67XM2cvQ4gztgpiwLQg9rKw4qBzbkvQL91dKoow4hcFdCBqsEoJrWusLjjVnXQfPT7s",
  "key38": "5VsZ4yaeBKgoi1nQa8yD7hPws2GMJ5EDQ2Fv2En46YXPcdgS3QbX2ECbt4ZWVvm3h3LFDMwHcZnTXFSJ3mHQZjms",
  "key39": "31sq3Y8VY36xQqzcLfSbv7RHDHg8vNwyuExdK1uk6eafuU4tiygx1AsDUTwTnjZ7p2FNMczrahjLnovhQvKGauTu",
  "key40": "33FRhmkEJrNGfJXtkit8kir1PP9WHyLp348VgeApryKtGH6jH1m1H6df6kb5DhAXt7RcdDEVGCYcmbzTmFqj9gqN",
  "key41": "F6SfnPpUKs6ChBcufXQ3bCyuDeLh6TuznM96JJKaYRY233rD5UW8hSeywSLPKYDF87MfPu1Fm9vs8nuw3FU2kkc",
  "key42": "4noNKCnC8EUFm9ZAPHqTeaAY1p3ecX9cPwYWdso4WnWeumHvuPnbHgvRpNSvE5eGq81CpUR3GW8hPtst9rpKWnJ1",
  "key43": "45sCPGhRaLYnqCjUkpaTGgj6vGrMzAfhSY8RxcYGHp6hScsAEDC3HEeUsjS12iqbYFxiCwP8VDAkv86QV3oZbfsy",
  "key44": "p9EcqMsr8HXNavXFD2khtVwtd2bYhkhjRjChzUjxqJnYLDk5KsqG6hd97PKPLJVHiNgGr7bXQy8dVAkLNg3Tv7b",
  "key45": "aoaHiBhU33CfzrBt63simyHcbuQNgrigUJTYfiCsfiHyYULa1Nr2pBzZY6asad57KGnHbmaebDYGQHeV78czRkU",
  "key46": "3NoFbN9TbPaGFKu76jKojLs85FunioZbEm6WRXq9SLnNTg6fdKBFL43jXotSYGahfBp9f31VVQ57r1S3eDNQb3X1",
  "key47": "3FTdRUf8Z1fQnKmAeUgxhFujS7QekDo7a8PbptCWeSdJfv8wPMQNdM7U5JJCL7MbhS3Sp2mEbFnKYhv9BLnTiD8M"
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
