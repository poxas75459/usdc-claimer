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
    "3bzg4A9FzSq9jEdByBGs8v1tExecY5vdun2y4n14uk7CFqEJmJFstNRJfw9jEzQL6WXSJiAqbrt4KScjJtsZqfTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BeaiZ3sNg8J8n37FTry5LLEbeVjUgFWaBErst1EShVnoD5MU2ZVr4bdURLqqMAGj2N86DHCAfmu3uyTPtsVzdzm",
  "key1": "2RqSvLhqNf7xEbL6xaoagj7zSYa8ydKZgpv2kx9Z6Mb36oJmKqavn4hUJyJ9eiEa1D2xSZgggZyVp1rxWD3QeCBD",
  "key2": "235TdfucGZybb64o4k4RiLQHiH5aVoRqvKLJdrNqr3nqhgLPex2xkB3D7JNjuboUMZP5VyftAwu7DTV2HahV3M6A",
  "key3": "3CxVZ4FDxY9oahSFvyBcrrL51AXQLwguuZfd7T5Mg3G4rmTbJYH8vW1XNMymvB3cjSmWu2qsG9SSZ5csKEurzB7h",
  "key4": "4VK4ZfTFzi8SZ6gpqp5y6oCpLGaVWo2ppUuBnf8a8fmwbdNc44KFjo2AqAj1zAjudUaUQ6Amdg6Rfk4oJswdpkBM",
  "key5": "4UnxgKVb1ce79ZsgFWA411Dqpwo3s6pZeb69vZhKLUwFDHsFk5wDeaDrxnbCBHHq9FSK1X18y9Vzc2UisH8WQHou",
  "key6": "2uTCUbzQxNUAs2s6iTqPjbfLhWQuc2y6FBYFCPnmxmH1asDmNXNRu15dZfBp55hZbwZrEYzXPyT6eXfz5wYtgWyu",
  "key7": "MYdamVBzPHi9Mxt8SzjeiZuutP39NmmcCqqjc43kLk8543Ce7mkzRFFLAByRrdC77p3xUqgxk4GcQMqgMXkJeY4",
  "key8": "5C5vzXWVFDWC1YtS2z2j6Sj6gRzbZQ5s6LxEMffLpCssN4C6bMLW5abempVcTXsgbmHoJ9wgWF5SojSX9RuYUhFY",
  "key9": "2twybqYZobbRq2P7NfEAq9vSHxMu49ZXw8eAnYHR2Mb8C1gLw9yZrPLUDx5vz73NpzBeVi4E2iskxCgYEfd8Qcoy",
  "key10": "BhFe7bdCY6VWVARBv8v82JqWeFVaQRQ1a7xUro4LWYfc2h1uDxm89xTezL7FbUUuRb7fQsAyLxEz7DhKFmCoMPM",
  "key11": "46T3aTLEJL8AD6DAe1dqV9sz6QyfYBZWzvfXnbY97pVwxDjqXcU1Aewjj4hw2xjKz2HmbWL6DnA4eukkoaUDH5GH",
  "key12": "58vbaxg2TgKzvSKqQ5eU1NXkv7ei2wbHHdxncbNo6gpzTfPdxdsQmjxTgYUbP5mhCXayJaQ5aDBxPpjcBRN8kfmX",
  "key13": "3fRbPTZffVvpPugsnzfHXCdPJ34YaEeb9tskCzQZZiESpbAyvXixaZ6fc1F6JDfJu8yyNkE6vmzfHExgeQTFE9ib",
  "key14": "5Gzfk6xAnbWXRrYQ42XbcDQynyP5XBt2MLEUWcz6czdjgvyWjd8LvHEhKD1qN7uB18eMHthgN8f6u9FVkFJaBWzg",
  "key15": "3ZLaMoSqYeP4hhmzfC6i1JMHAsNS26QFaJE8C2qgYReg8GitjokZsDujx7HCiKHoaLS3iCSgib3msNxn5b6cDLT9",
  "key16": "2LAYkNsNrKEdciKS3rYbF8tD6Ee3Cp3GEMvJYqMvQ3yWWY5dJ7tTuCqUxRhuZWFrbS1vsVztJ9PHcHBgzxkugqwh",
  "key17": "4vTUaZwYHaaQCi7TB9VViwFFCsxuHqmzoXUmpLqR15ymG2qrzEYETvrzGspYMsN63JnyJz5SGk7CKKp5QrHHbZJk",
  "key18": "5HvMWVqT36z4J71ivCPNzvDipTpGMoCJ4zpb5EWjh6HXeg3GLcfy6QNUxHqZQ1oUsib4DiTWoDay2BSnZysST1iz",
  "key19": "4sUtecLcZqQmwcg99KXwRY3wx3BMA5sUkJPx8BCMZ4fGdEwsCmd9SyEFwm5MNknQqFp2aRVvKnxdnpQwGu7iu2eA",
  "key20": "2A5RZ6BadNRq8AMqUgSpT2nEwa7hTnCVC9df5oC5D8LLPiwnvfXjkkNGrjmezXvaXjb3DZd7VnpPVApWcjScHruu",
  "key21": "5MuzKcfnAhATHqRrkbHt38NPMW76bjA53M91rZbsCHPYpwqTVPnCetgSAPiSK3e8FaBBkpKQt2oDgSg6FB2SZJYN",
  "key22": "2HVrsEkEDdgwem1AeU4arLdigrTuMTByQGqDD4nvxFKa3ACsEi78KLvUyEKBNKiP1pPU7dybqnzwJFAmsbdcaC3f",
  "key23": "4VyK2KdEQp6tVLuTrB9sXJrSbxqV4ikSJCK1o23qJii4WEfCoBPH4fwzKhBoVRYbkx949iGCjCda9jVsK6dh3Bvi",
  "key24": "5EcsGr9DitMxGucDMoucxMdsxXQWvxju1EqLNH5d3XBuoDxqz8qA3HJ7mNMEM6V1DNxGQ6Wx5szJ6SgUhSPm7oqH",
  "key25": "4nbjGd6eHXYwG9qoGRn2mkrxWMohjxeyxwzg7jNEeVL96v7hD7V1RoNRNT83cvXRwmSs2UkYAtNmzzbpbbpY48yw",
  "key26": "4YQiG14ZsTGdAB15u9qW1kzqjczC8Q4XS8WfZ59EnFZgJ99GUJ1PyKkCBoLbVUVMCDqLbh2xkvt5yWL2id3LBvW2",
  "key27": "2ajTQZVRYCaby3SY6vCNLq2yEgwnyF3eeJmEWRG5zgcXHepACU6v6Cn15n5YeUFzvxBtjg52riviLGJmDBS5CnB",
  "key28": "4CvriyuJFGALhbY6CcxQZzqW4xjGPjsi3BYtD4JhNbcARPored2qby6A3NUrHRzuzJnAA9N3kUUgeRiZaXcaZk2",
  "key29": "5fLgqgwBgaCAeaxnamaMz8PgGXzrBnNJf7gxSq3jv6wxRf4VKuYEVAGFNkyYPKkfbqcZrBv3DBRnWyNWKHZVPNpj",
  "key30": "47dhXYC9C3V56SyfJ7RU6STC6MyNQcYP4C3G8beusybVGBeA8QKqGDHpxdrM77xGzmxbpJfYabgJE5PG7zqpDNwr",
  "key31": "4CjwUJDHgTvyP55TsQ7qP51QG1iSJztL66CkhN5ar4E2nxVx7x11TuW3R5CGdFfB2E9mis9x9yT9kHJ8skcHL2AC",
  "key32": "osS6DBu5q7yTiBJDqtpqr18waWT93RAwQQAQijfpUGgdJuuvNwYNyBLeqcLAj57Np5s5BagGcQ2HkWzktu8ut7e",
  "key33": "45cujrUmokYb4xR4nVPwcTt2b9UQkDBdNwi65MiRE2xvsRwWmJR9iqGLxzNqYsSLQuZ3JQhztDHiTrtXMEi6zizD",
  "key34": "2j4WEXmJtv84C8FdHVrPsWEyX7WXFyoqDFnwdcKQoDGnTWuHBYmCGWY2GQ8ZwfamHufApo5qjgbxdFsdLy2taR9F",
  "key35": "2auw4HaZqekzuddibKkSVS2YavUZ1SxmCfvjogSiDdHjGez2WSZxyRdi5ABTySzcPHZx5ochc93akXsaYfZ68wn3",
  "key36": "5hToE8vgn7YRfTjW7nAU2hmh3ZnGeFmDzePwZSzqqqyBE3w4KQbeuQUQ3hQDrg1HXfMBjWk6iV3JYdsGZTpahwgT",
  "key37": "5yxfjNbCFiod9bWvctFFMN8yCnYK3aGL4X8EYscJhQqTALFBNbU1gghy9maHpRayvxhdv8fkq2sUpV54aQ7bXMee",
  "key38": "4PbYM2ofXJhh8F5UR2sqYZuPnoYdB1z2KAiomJTP3wdK3cYEgHVTeuytBVsrNw7baL8CRQsuoDEKM3xj64zzAbhs",
  "key39": "9Dyhtk8ZLgVUgQewzz54bkMw6j286RQjDWsgtSmsENwg7AzJJ5FzDAE2rwRnk4xb466Dt2HbS3gFScnaLTLdzFq",
  "key40": "28Cjv2d9uobHnSL7Pa4b4sUw47BXsTkf63N4NKgL5JHi9zYzHeqvD4xxqRiMh2Ndo2YzCQjWK1aYeSdXVvrbKA13",
  "key41": "86sfmiGbZJJPNxom6fuA97Y82uYPMFezFyTGFSQy7PmkAkhbzM8rToyUWrtiawDfUwGLke5u6e1Xu66NVbNHL7w",
  "key42": "8i2KqCVqvSXtqrfU4ZQdtiVh3KQtx8k4ckLhg4LtptAxEhzu63LXokddcBBpF5FCmp8PsdFQvtzWkw8MAkNHARE"
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
