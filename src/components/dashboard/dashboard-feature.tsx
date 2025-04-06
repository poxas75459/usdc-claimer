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
    "3F7EGd3ykA86x4w9nJFrxPAHnfhEdUvkF4SZi5YQrfRe8MkiyS3dVuNHXcMyPF6Vt9SQYXDSuF82heQuk8rMTavu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q4F5QJDzLGi2MER8B1sUEt5LiZFSEH98Z5r6Uw6JbkxFEWFBfyVW9ZgQHocAZhcMACMrE53YvqTPWygny2waYMM",
  "key1": "2od8ukCHkvDGvybCwnAiHBb4PmLh74yoHSvKjskq7xCojqEaT11QtaBvHiTKrh12rSLi9Ei45TKhyA5V8kJH6efM",
  "key2": "4E2FSvYgpxgwn84JX5y7YtCPqETrvnmzxWiweuDtBQ3uYh1F6CUSqLaTT9TXo5vYZhWsnnk6nnZ8uaL4pxNJ2F3n",
  "key3": "5xyPaNrdjYNLjaWGdV1bZgHxRCJnCLF9jckqZXsaXtzGWbg3ZpBY6bvYuvXizG1TsXfysz1tjmDo7tSs8pPQHJZn",
  "key4": "36NtipYdLG3AUpKCMwUkaG8PP34c5c5Csk33b3eV1nsZffqXTFfa37WVAegcKMM9iduL8shhKdm7QckNThoE7rgC",
  "key5": "nuVjPFpKqGdGV3TjUsMtJndMkprqWx8tzTNzXztHytABMpJj7B8ehZ9UpuYkz7bBPR1wWHjFHuqaksZK3m1qTZy",
  "key6": "CpjsGThrh1ncPEbmdbPtYuZn4EyHn34Sg1mRToJ6JAHyofQP8REwykWG84tBSKDRU8nt92CqQcUg9gxFSmvuATL",
  "key7": "5V9tgVJoZb2mXeJUeAbf1PsimLGrgHZZXVi8fzgVpgUTeB8BCNqcNo2typFnFYh5kaNxb9nLmTF6xJ8AYfusuzyK",
  "key8": "wbGkCzVAj3dR1i5BrwMVUzFo6jKLJzs24aWfUn6AhZRYvgXQ8EXM1oz84bDUbTY8ncT2RrwwYCHDFKMxEQjLoyJ",
  "key9": "2owdwshmcj5z1bNRV9AyZpfCYV5rCN6mhA3Lp9YjthPFa5TKZSY6ZST7qDF9zSaF723CqCk8pPrQDwY31yJznHD2",
  "key10": "483xa7z4aVQEMdZnWS6RRrAkUR3PrfZZYkLWvFXUTYfuA8TiBGFtvE3QNr7z4fzVRuE8QjMhNhLVsgLRaQ1gK5mJ",
  "key11": "36eDV9NMTXkVzrpx5wAp22n1u3LJJK8aLgn62jHXPKjBrTPTLfq92rJHifgRM731AQ85p133skxuCdbwEivzPdNd",
  "key12": "5hejAEdVwjPyLyuNUuGVtEaJ1YdisxmHPSxoHjzaUxpDadnWVPw4SHqBb3pyAyAtdfNXZr6FQFaA5a2SENhUfhMP",
  "key13": "2hbqUuhkZcS5jTHuMJinvFCzLLEtofn7NhhSsb1sUuaoqJgugSYxcJpVzbaxRwZ4zDjApHSb8w8oWonWf6FsqAvi",
  "key14": "9Hnb8iDs8X1qAkDbKvLKkNWCQYqqDyrz98QtnoGtB6egH6fxfs5KMaUHZihuBCSCPELQXkCszs5z2FUKY2xsnsp",
  "key15": "5uMdQpUk4jzNRtrLHHfYHXmK3Cc3b7yCZNEHnd5fp5vHUib92DkHYbmHw5Qes9Y29yebvTDPBo1Er6UH7s68bsjm",
  "key16": "2P2UQmbF99CcsqE6qUdDHkhzoTpoeJpMzCWW3vRCw72PwuFSAqjrhHhYNLFDCnfbKKpZVb9M4UsfJP6BoRvWY2FU",
  "key17": "4wCHp7ze8J3A57jQ3DLYCwK6W2GdVUAPtDpoQV3HxFPQPx86aBUzkyMKN9mUHt1PXW3Fa3XKaW92pEbtGBU4H9fu",
  "key18": "5NuT3ZGbtbgXqL5v1M7JGqhT7eJ3LTuqDzVcbHBfrrYPEoPTXTbLLSVg8SBP4HLCipLjsW7zcbPvivNNdqjvfppM",
  "key19": "5oQHQB2fUXb7FPyFjm1kS8AbNshYoAzUtEMf1mS61MtXL1K1fT9qgQCi7kfkraznYiqNg8cTeLgWmPzUc8PWmDMs",
  "key20": "5ooxoZfRwyPU3TyUS9RHd1KyG7XmB1as3BfqXHGgJa8CbBqg1U4zKt7neiyLHFo52vQRUMrA6N8iHFtcVUyrfYC9",
  "key21": "5N3xRYHyTBUmbfEzeZziv7BehUFb9KNX3n6rWmT78eBvYzTVe8ewx1KXRrdJDidGWvhzu4NtKB7gDjYLxFjL5uuQ",
  "key22": "58L5h9VzbFkxDp5hBbAY6qz2nxpjP2KQB9EFyvFxVPzAuFYgSmV2GF7q2qBgnqKSxM1U2CwHRtLLkPyhietbSYMa",
  "key23": "3TU2ra2aCFzDrQnBQpn94yRp6EarHX1GCf7Ynujyu1jBYpjQh4UiSW1N5TDhbpjfhxqvk18Ene9APupD8n8mRapq",
  "key24": "5ezSo2xm6CFhrpYCFPFcg328QJbTg52wypN98YE8Ca2cT1Wu9ya9PXsMayDuhHTexHzJPAr2YTjb1Xq2qyRLTDqG",
  "key25": "3nXhdpzh9Wn74ZQgoLxKWRK5PWk7FB7izS7DKpiWS6LwiU64FeC4EuC9QL2ZYXNDcR6pd6t7LBfdENWcG35XdZ4f",
  "key26": "3PopKqBtasDv8dtNtPyGgMruncTVyNH56LjoadhJPvmth99pi7G4G3AGq8X8r7Bzkj3JFbFgFP77n5jF1P3xkRSi",
  "key27": "3WUjUAZpYr1saB7gxEBeUj3nfuXnZD6EJJAWfdMGH1e5CuQLwBTbxMmeCPdJopDqc4AKHfZ19Pkzk5hpsLeqJowd",
  "key28": "5bDyHwgahxxL1USCkdPe9C6m8ickgsKp7GUwijRi96uhWfCYmG5p8XToBecVStZTPk6r9P4pueD1WKCDsyMRA7Hg",
  "key29": "P7UBxKN6ggs2KkE4p4WXvE5t3zdFKXAEDgtSaBSFRUbRWyfnqL6fu3asTkPZ6HAJeJhPFkAthY2iL6KLyNMyyKN",
  "key30": "2s8cFMYzZspaFg2t2LLhRvTJJ6avJnXX7KzJvuMdmKL2bK1RsELPr52dVpKXiHD8HnkhXngXgNPbutLMWDnhjoM2",
  "key31": "fiu6RXNBN7qy1ZacUfD3121GZS3nBeRSrmUxnB9KCjK3fJKEiB64AvZ3yWiCjJx7ViPA8rB9bQtrFVMLBiK7sZ5",
  "key32": "vWaWaE5tJtxSZ5P4FTTtaZuAiFn7AsEZcFACXaohdcTCk63avT3XomNpNP7NoUsur4L1huFXHYkkiNWhRpc9qmD",
  "key33": "41wseWb176itWEw7kkXjg1ropSByqdhVnvnX3XM91V56arnnhFZg5KtW6NcWHCQR79U5gAzRuPXh2cK2gMvuB3MV",
  "key34": "4vfDHia3fwoRfCYiSFadZf93PMQwYZiGQGGm2yaoyYzY5B4DoRCrKS69wFH7UvMmTW1wpXMX2jh39XATjVykg1fR",
  "key35": "248r2MtnnG2U8BMUZCk6hZTPZ8NHK9HBcFhkcEusjHPeAc51pmEzJ9MzNX3q54pgqhitbdwvZQW5SfmXab8qMCnW"
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
