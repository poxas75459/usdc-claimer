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
    "2LAYzDsntUn79sqjiCrHWaBYFnhSPyFFj2onXvYNifTHEFVREmJ8NBQTVXkQy3kiVHBWqtTYeCoFHJd6S7LCZm6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4ZXeoPXbNEUHSGF6bz6gxrVdsGFm2yL23yiJZgUogXMKYufanF22fSoHujTXKYKH53C2gexwBsVxxdpoA7d5xP",
  "key1": "3tRB4SwUTSL1LJRpoxyYkr1HJxBBAGymLLqCeyezgDYsi8FN3pL4kBRym3H97aZ4iyqZLVYwJ53XbBJdmFWZUfXp",
  "key2": "4xzF7kJ7ZBsuTD7Zf55xieC1VT6gj6RqrQbDyy5RYCSngo9AdnmAa9h8BxdDbECYwZUwJUQE8nguiytWABz1SVcd",
  "key3": "4sQWUeG5q8v9WDKLbB4E6uiFRktu5rdvM6yNne3yoRMcaroZeVnA692Lkb96UAaDY17NAdJs4Wr3myXd7Y4vnxu4",
  "key4": "4L7ttk3bG4JJqVakRwjfTbik8YdgMk64qYURqGr18yXWrXM3ZhDet2hKjNHkpojskXoAgTpF1CxfEGvtATa7v8G9",
  "key5": "3HKDKNigSJpq9QaGbALKhLGgAGT51QpvYUFrU7WPBh7nFDMZ2voPH8Qi7EguqUWrJwuQKfCkG1CAaNbXgYxd49Le",
  "key6": "2x5RVtukfakxMf4794UyWN7Jx4aGsp5DjaZczKhz7qiu9FkmSPGHwCP6TcWwNZbCSsdeVf6VmMuQiC5VpWDeJhFP",
  "key7": "4GA3aL3pcTRFvKD1pgW654Fz6PWNWssFon5jQYNB6749ortapDMw7eLTJqDXmbeKpU9WMvJ9QwkwcAX6VA8hzDhC",
  "key8": "kEPQ4Ux5KoxPUGKc99ZLbRDUbZe2KkmLMiHxAMNYLBGajgMrmc7xZprAxaG6R7aiJkeFvuZKjf2hBNaA9eqacsq",
  "key9": "CqmFuFEMZXCKcyXbrahL1roV4jYtWBQoK2JxL3yAwavA5gALfDoPCmKTwt8FQe6nbqijixtCYZL3fHXj22Ev1nC",
  "key10": "x4NjETSp65tMHMJeKwC61VdsEdkPVv5udcHWFB6YY2C6XnXagpxU4m3P5YbueGTwfzbGGDqQKRqWHtesVyZ9cGw",
  "key11": "3apJXohFHBp6yegyBz1zC1iwPTn3eqEcbmE5WxcoWScm5r5PHD94AuFhXM7VBQqiAgEmdCkJNY1ARmkpstBj3VAX",
  "key12": "4Fyesw5ZZzK5r9qSF4wMXmkkMGJ7DmcLAH4N7hrA5EnDUqNAJS6m2RcL4DwzxdnDwYaGT19RVqfmHBAMwXW8Znvh",
  "key13": "5HXN7zUrExPd2iJPuyf5JdZqUqu2bp3Qdf33oyHHTKgspQevXmU1vkMVXkKeEhTGL5dCvpdVvqmqywq6VsxEiAqY",
  "key14": "3FgVJ1BmsAnbqciMGjpwx6xT67QRKqKs6gj6J4qAh1MTLTvACn8pbDz3gtTmYCJm6stmSHKTNnojcqhag9BoWmc8",
  "key15": "3MEfC14uZsWd4Xob1vgid8MjguUh9UipxovKGj4yQEiNXFLk2FEcEKcWKf4nWaFY1mx9HiJgesHJ3ZtZVLsJmhBE",
  "key16": "49RjZvPCi9Vk71EoZqQHk52UFcqoTB1X1rWRNG5UhPWgnNWRgjsqXrc28byQ6UNMo2NuYYXtNzP1gZRyvfKpNetf",
  "key17": "4dnrkqwubTvtHKnZZTCKPjwzyUpCzz5nABFXYqxvKtTTsXkStSUYReZ8n68hgMzvbJzut4aqNTSn6PVXB4e1T8f4",
  "key18": "23qX3fRAG8Emw3qyW9vrWT7ZmrzZ2GpZFG5zSHPhht4APFrqNHbmNdz1d5TsCwq7xYNFiZbn2MKQHniNAge6BLMe",
  "key19": "4JjV86H5nRtaPRHteFJx1nbYHXtxGXMxDj3DyCQ5T8gCm8PoQtkoFzW6AYhN8wKvr4cNaqqgqQ9xQdpks82jqSr8",
  "key20": "21XUAyqUREGYhvKTPKDpvoPKHA9xcVKBCM93TqrTFWgN4cWDzejjYvuUUymBhzhNvhPiuxAxDX7VyYu6ax5KEzTc",
  "key21": "4p3y1ZCmKsSmBAJxGVaxCa2f62Qr33htTWv6D8aiLXZ3wSgGFP2Jx9fUbGfFvBDGmJNNJDnzCWzw4feHA6cybt9a",
  "key22": "3ceFmfJBM5pegbJ11JjSaELo1DwUj2Gm2FwAH1HFC97KJg4nYDToNhdByNREjqg1jYBkJruUGwDfSyksGuS63S3c",
  "key23": "4mzq2UyPULzdiuJt4oNJ85mLNqYMNYN6yQVkqgAAYKfQmU8fPUZPVqSwzvnbD4iGr2nHCaibjwy94FYEfLixfmcX",
  "key24": "21MvHda97JjWokE6pWp3iEKtomMdwN6qjXaUJ6NjqLpe616dg4zLQkfuYmCPTPvZpuiBX6g5rdeD6m6zktfHfh1R",
  "key25": "5MjMpykcf4ecBKRfjYeGyGcovufzYKhuaeXSHLPr8aExHN4i5Gj4zywbJLhqJCq4BmQ8Y8urXAP7BukkRbZAurQU",
  "key26": "3gCrZSqsbxrJXSufwET87NKNaADLm4zfnmmCs4xNU5ThKj1P7UXAs9LuK8cmf86yJvck2N5RPn6yFdLrwERUKek2",
  "key27": "vVAZXu1WBG1frAgbRLFE1oy4vRRBobq9A4qPdZ1DDegjthnQFo6Qc2Coav8vcSuyd11wFRBkxS8hUQSBvb47EQv",
  "key28": "yvjpKsTs1f9mSFiJnCFBxXbJEBrgfBAqXq72jWEnNdVG4D3ZZraeYQrxaxboAhTRy6y8Bx3MPjRbnCaBE22iWWz",
  "key29": "f84abQmcV2qD2kfRzgCrRMp8FKT3YBy83q1Hnp9rFL9Cjm9NzU7FxGuHN1JDFkrkFbdUA86QsegCvxT4xJ4iJ2U",
  "key30": "3K5aAobDXxY5ogbnDEcwbYYJTFFnsi66DgsvM8PKBTFUUgkTfzN7PJiCL8i3UmJKFaVNUqGnU6gN71fBv3TXsXX4",
  "key31": "2cDLnpwqsz3fJw1ubVJCoMTXhdiCXbHbjiARSFg4BuuTGUV2C1EJH9LU3ry8cMeSQAL61FrGHhPPWGEk77vuNyf7",
  "key32": "rJULzZjtmy6wo52beeRfzn3kHbkkoAhUueTrWV2n5vpVhmiCGjNCF6L1KjFFsNsjAMWKwNCPdyYqRvo1yRUk3MC",
  "key33": "X5R13XBrMb2aDuVyz7udFmBmrNFXuaVkAkFhRvrZ1AZhe9Qx8aruCQjkhsBkLkNMmd28TZFpQEZaJY65t66WHyK",
  "key34": "2mZ1hHLtKFqhmgtocotQEAqWZFsR3ATtgF9acCaCVw14umUdb86xYMizDgzAZNWYJfpg6ophytsQgvvKeWqoFKX9",
  "key35": "3zHHxsDx7QQjELkXm9V8WwxDKuh2tHoTsStHTMpKiSZyfMkyT3ZDgPBZwUDtEQ55yhcyDvTiHNZdimgkobNwPYKL",
  "key36": "48b4CKmsiEFjjvR4qWzoWZP3CjZSiGEsjjGRSzs8NAxRGQfQqEsF5Kv6iQNgFD2hbmAmqcicLtsNoTsYZUeHbuRW",
  "key37": "2WjojyzRhX5e5YLDd6NChkYQtXsCQQuDzD8YFgaW3KyawfiqosUaxaRhuRW6awztQgFDxYDvNKcsv2uB1ibApn2H",
  "key38": "5Xuee5JgA4g5nBxHe4hotjVbgvxkFJh3tvNb5atE3Qtdnm3hfDEmrjtfBRsaKXKZ3pyzMHn4GBGwgtcPrvKhbwyX",
  "key39": "swe1714WrSMUf7c4KGGj3RKbd7Y9LDbKgp4wx1QDhw1TBDPAJobRMK8C5qogA1epRV6vAtpdGXtESQL7HBbrhzW",
  "key40": "4xqEXGR5wJyRA8BKjg6sPzPyk7s4CNrdmGAf74A92g9ytkEfKXnAPYMFA4dt9VYpthPhLwXeTkB5i6Kng6T9DG99",
  "key41": "56oE67mkD4fqugfHjbENZPuA1tf47KRZ3mn3tR8amEfAwQ7bTFj5L5FCte7uLCrGK9n7svxbfm2CYdD7dmgT9j5S",
  "key42": "4byfBmDqGFsYzHdbVh2PkYdhi4C8fPL1xkWjJAskAE7WLrrA4oRiUikaZnS4Djx6R5Mig4FAg5SvBhiF1fHJfKTL",
  "key43": "eoi9wtcMYppnK975ucpnHoLWrcVReik8tGpfpQGVRsswx5zX8bE5yTUWRLxGfzFkKQNUvWChVk8rLsbNbiXLBFn",
  "key44": "4Pysmi9ABrCSWdYZMncj6uUq6z33CV36jwFVwPsnCxVDrsRKgobvVE3GbxSHugSfM3ERkBK9GqQTFqanZM5zxfzA",
  "key45": "362iHSj9NrE2fDjCMjDJ8qiiFFBv72byH7tvZThchopF1zXSpNd2z4syvhiw5dgz8FND7vKrR4yFMr3rA8Bo3r15",
  "key46": "5oKExVsekVpLpux4WPgqBE3V2y3384gG4mwjE2SAEcPE8KW2w5ZhJqeHf4jcn6Vd15gtNxhT3HKHUkjWp2WC34Q8"
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
