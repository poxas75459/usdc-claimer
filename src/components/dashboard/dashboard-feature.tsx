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
    "4asf82DbMcCGKoS5TJNt2EBKzVzKEZAWjo3t4QxsUjuYgKUECJCzauihQ3qJj5SxxphrDoFJgYJ1ZXUBePaX1jKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "drGvG6ZJw7DnyCQ2KuoBvvejHLS9HPsNt2u1t4WMZpCkDgc2QnZfjMZ1b1LovpLBbLd1VURT96Vk4jNKQsqTjQB",
  "key1": "YNXNRACSRjJ2qRcwUYrUb6mDGo9ipyeiyotDU1spovRRAKEEWr9KBW6zc7XgeUxgHgUhjm5AmDNMruSdppCoxzH",
  "key2": "24uABJw3xJdaGXw3L57yyFjP7mkM3Tjg2FDUTCJYZAsxzpo82thc6QWxC33oMqhXmxVu4gnHA68YXUHPx8HhHC5m",
  "key3": "3k5nQ7yMpZU6rTjcwafzp8vKLYieJe6gCSPL4zZMbLxqB643WhNnxPxFWPqTyY6KXHaK3Qm3nT6JwX8ebnT7R6bZ",
  "key4": "4zpW58b7CepB7UpxtA4NqFPEPAWiiajk1fEqC9xZxvkiuFrti8z9e8jVhcWhCjkrqKSnWoPmof7QvZWj35C939Qu",
  "key5": "Hby7RfA4yUyZRDLzavGqLnaijgaFczhrGLFAF8nnrmeYoDnEjC8dKmz6iSYtN6WWtNFqGcrNY4oJzAWMnoq3sFw",
  "key6": "Tmyyif3pL442KdHcwsovbUEv1gmpXBkJwFJwdb4AriZoZypmCmWutCVmFpDXgsAPHjX8yoTEN4cTgvYRDuL6KUf",
  "key7": "5UBb5UTX2nEZbob3wmLoxSn9LFVjwbvZU61KNuJJXfHPE4ZRRw8UpuJYNjQXDNvX8bUVrLiou6GxdUDp7WHESuZu",
  "key8": "ZM39CNzos2dE7fWWHta9KRxQazXnPCHq9UPQi7jLdMTxrikg9qkXqxiDQDQv6m6JpZpGVhCpoDfC59XnvmG47PM",
  "key9": "5og61ktkznMcG1STZb4KFB5W9TH2HpzKwXXANMEgKorEd7YyQMQLAhnwmoJhMp2UNyU4hrw3W2RLReewLoHnLoJ7",
  "key10": "2rbKgGnm4ceewqMfxbFvLsFkBBEr5SizS53e3xTCLrhwm3nSnjecA2CFuFMsGHrT2DiyMLhmnSHzdSN1iJCKUpR",
  "key11": "4v1iq45bpeQqiAh4Jbf8yjwiscAHSWeRBkzkqsMGLBZn2yJSkn5x3mcVtqBaadFdQNE4fcuhdvgKuivV7kHtKTcV",
  "key12": "9UjkJ8jpGWvxxtVjvw9K7RJuQiP426tgwuA7k9Q4ccRsgRpjudzoi9k9XP8MsmzvgWCYbzJdms3XazSnUNFb8QC",
  "key13": "5mTG1uuFw4oGXugakuWwK33gNMLGbsxV9kAAeQBUUDm1wbfMv5GXqFeSAEpBfgzAhSZvQCbjJyiACnhMjJ2iCwc6",
  "key14": "Rz8Jnmf6nyHUk5htxkA9UCkpSCg8PsM1264XkDKTi8KJXzQhnb5q2vwyoZPVPsGbW8eMj8WYZkhztCAChFC1z4M",
  "key15": "2nzPCveoserWfCjiDyKFWDTYcKKKcZv1trWkxBytN9k7UdvqP93Gws2BPNLHesQRrbDnaC4u6ft7BviRxE4rCvkf",
  "key16": "24yhcniadqXU5cEUytTA6AihQEsa9jN5v4aDxgLJhheVVFmivdxpwZ1upvx6TqwAFJBzfNWuHSPJ4Ejm1byM9H93",
  "key17": "1opgKHtjaqZbRcfwoGTjobwfxvcC8PAkT1rZBPQSGmfpwzkQ8YYjsSvnPuBrtAgPkpLwL7GWsRtujPvqWqhdWmw",
  "key18": "6C4R9VkCy4fY6JvUeRveNywrg7K6GEKwYxfGnxFqSCY8wHgiLUEMCssphrznYv7YXgQNwSsA7xpc9RqgE3VMmgi",
  "key19": "5Kik6ofSftusotxmRLUkv3f14JJPoXBGR3CpDLmSdDQd54XMD3FMgiBR5jD9BPUPDLM9ZV8ojusGFvixo6QhDGBi",
  "key20": "4oU3exutMAzaoEyZRaXW4e6UYoihS9eHnCdXi8Z2YWmTdLBLDRcxTR5agsh4nyV9MNudJDD9Dc2QRx1Le1xAE6px",
  "key21": "3CSspyaWvpCXZJ94VdK2mPNFzn5cVXt5S98XRuhkXjo9dVHmmcnHkgfiEjShGw2NXcVPg42grgwVn6bkQAjpY3wt",
  "key22": "2CM4wPabfaeBQrdZgYbbCaateCRSSuWRM5mfBs4pJem6RQLWEi2qRn2nQboW79FL7XpE1r6JSoF1GGVLRwLdE4Ei",
  "key23": "4C6UVfFhu5Fyxj1djc6D4BBZCnRyGGRPAk65koGp6afS4LaTrmPdNb64zDHEUYR6rTdaGa9FouGviEkAcnDK8BYU",
  "key24": "3fqCixBdJp67nJ3RTWVpzMYkQu3CPs9HkUJZvmjgyEcfHCVyCB1wZt9iqgZZ5k3Wd7h12XuXQ6HsywDdSm8LU9VZ",
  "key25": "38vcWmQXC8578K7MYZdSfPQmVhi4mfqcBsHB1BjrmugszyqKTqz4rp1UTk13Lddp24TSQH2kzuLqsM2G51rkt8HE",
  "key26": "2kGHhB4vy1pDKT52VYaeKzqTiDqznBbgLevQHcFQGfrffz4cWELb3PfCGxYZ9TtCgsuKKptM8ujQX4yHpU63atpu",
  "key27": "3bvc4SjvtBnKrvvtUBptB25TuzNdCKVnMHKdwhn27HkTHLcv5PhYhDyc1Ttrhs86cGAD8gsAmZPkLR2JmEknjGfH",
  "key28": "2EwwsxygX6kZALjumVojEHDS9L9r8KUpdyLdRCjgqAt7UJD7VbaMTzB17FDRWf3MrNDw9TLnvoF5MNkVPTuM1noP",
  "key29": "N6BKZP9EfxbBbhBtdG9mLbaH1qjUgq1vULAwyJBrX1WZyyZP5e5sWtx1jCcVafQWQAXkh7qkfKv73zycZYuHpqq",
  "key30": "2Eg4yUBa8z6Fo7rdSfvheWPHegXVeJbeXWArQc9B3oQz7etYjVKy44SKs7mvPCa43tdAAbQaZXfEv4JQRGRVMSuV",
  "key31": "2enNsdAyrz1xvz4JQKT1nbxQQiNYvPX41w4JA7J1kwudVyJBuRuRK9n1AMdvRPDGPiWtaUkTANNLq3FMVfhsLiD6",
  "key32": "3QTEEEWbQ5EW5cKwmpiCVyvuzbxw5Mss4Ukdc1AJ5ojE3C2ex9t62sG4k678zjDMsacRhag2T97o3XypHQ5ooaEs",
  "key33": "3i85WsEq5HnmcvSpB7ocF57C11vyfgohEXS5qnUdCjQ3H7c7wePUpDLsNMopYBi4iEhoLGBw37SjjE6NHxJqDgpN",
  "key34": "4PQVwcRVyQpbGgNVtwGzTV5HXHC7NhB3KrtvyRN47ck5YpjfK8xL57Jzo7cJT8SsGGuevrceEG2BADK9MY1jrK4K",
  "key35": "5T8Dap9dY2KpdRoU8PLu9254J7BZp3vh7P8wdVGtRgCjSpQS6PKzPFu9HUqbqe9FjnaRugbJbvzcBh2TGCof4AdT",
  "key36": "59XkUHoUqbaUS8FTdi1v8N2rC1QJbAiHYsJBiWprKU3NuSVVsZEgHYjkDTPyZKRWABN6KCqLoQNqWWBzFZQpHB85",
  "key37": "2WjUxWPiPbqpvvLyP1LW526CDNeZ9Qy61aGf747318Hh7YsiNs7mKjergq6FcNSd11fmsrQWuXgMmqAAQZt35tSr",
  "key38": "26RaV3j4tooXNP2bZyvhjiGEU6hKoAhEepBsxT5eRwdJdbtKDzzra1aVaCNGQvzw66BRVWJPLuo8zymTmZm2awZd",
  "key39": "3UosoKEkcdBT6VS65sF9hnnTkmprS8dLNhPbrfjpmeZsegfhxS9R8458hniNKVbQExnw2PKUnHKTLmraCRJMSg3j",
  "key40": "4uGBE2ehLFbQcQmASrYRQYzmwZTwDatpCLSuUwFsppYyy8C18rFxjQhK1dKuBNxtWs5AyCLS76UXaqfZBbkCzEgM",
  "key41": "5AqZAfu8dBiNWohr7jYa2kp1fDJVYnC54qRjAtDLFF4pnnKHgHLuR4qPB1BkLT7GknXiyDGiZ47gx6UwbvLfbP6V",
  "key42": "395U5Wwnd8ZFzFguhaJQUCxrq4tEQLGuguP8R4LrE7N28oUv5RYnoqU7gngGE76qukPzhQyZFSFKiWK4t9PFHydd",
  "key43": "CJ8a4LQSHZSL8WJqaVFGjGDxmZbdZP7XJwGThrBWu62nG1MzASVFciKdae2JxywQk56vLVahwEn31z9kGwkXi8A"
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
