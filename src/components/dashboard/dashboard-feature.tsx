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
    "56dSf2mycsHeE2Tywko9q76pTVKTkVKvihYttgKvnTfhx477xthvb6LVujq9rDkJBEqhQVoPpYBo4iSbWVnJ4Kid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJGq2vyDHp9yqaE8exZMd1RwXMm3zsm6rVNwCgqHuTb6bTdi3H5z3XmT9TxEsSCyzDU95RBodvEAwTScq1iZAKA",
  "key1": "NqSWR6KSpJP5KKFgaSMtyVXxamaPcLnuexf3MAfueg6Hg12wiCnL9pCDrGuenKR8Pa67biVxnoFvhUQPZ7oQH6T",
  "key2": "4XNxf7Hr9oQDB1cR5843yvq7m8HE4nTrLUJf3v253aDRnvqkuzQ3DwjsM53RWhVySBRsfWdDsmGd87D1evb7CYjs",
  "key3": "5kZtwvNQboLUurvYkhJAgqAk2xLtbwNhFv3EZ3Hxx7TE7JyanuQxi28eriKqKw5udRHdHmWiGuAYJqMcQtjUKzW9",
  "key4": "4rPYsayLErHb3ZkT7MkxXUNyULwQzaK978uq2uBFmwZdgBCmc7eADYRpHKXCNXpirWaa9G5AEoPQiRxdFZtW1BVN",
  "key5": "62MLxMCsbHJimMBC75RdUTjNjWGZ4jynSyzRqcYUdb7ju21PHBD3oLUbFCf1N8x3LNMCFMXYJiePbgYsB1ZDBBky",
  "key6": "2yn8KqEZLtFSAwNxcgpjdAvbUEPfnVMuWFPVjiZHYA6AJ9snC7dQGrqQt5cQh7suFdMZXKVT1YatzsQfwRpsYUJq",
  "key7": "2NkkRqvSjDAAGqP2ryApzneDV7UM9xQ3zWJ71GxPx43TjSJwFLQRtA2E8hUJ8eMMSKPtDU7osPxmouF4YsHyqr9A",
  "key8": "4JVDvfUms5ZeR1D1YwF8uCyXPcuHo9fxqRWVPjQ6MaD7PC9ArbKAPxRsXXxrWwJh4CXEJp51vqC7mNZapztoa4qo",
  "key9": "2Miz6WjVNuoGq7mUpozry9onv2ktMpecHTcUFMdR6TaRG9n6DSBNU4Jxy1ZdHqfR6FdAC5HPfLbn5TYY5GkKTiGM",
  "key10": "3Lw1hgWhfxsCRJj2VkvXLTyWy2FiGvTzce3QX2ZSFBb7fLrw7qn2K7UnJzUNDYQadpiw3hNvXwGTJaK1hQSSxhXa",
  "key11": "47kiTJVUtkUD9kHnwhjKHm968V1fNZWeedoAVuMKKXdVSmaMZ7TMk19fkxzARo2WSB2GQXkaqCzwyiP3ekzNmzVA",
  "key12": "413GvRioFXHCQo9gJbXdoSvKv46M4DFRHXqyrWDTWqNWyHoDvCV4YmtGNQHKz8n67X6Z9bpnQqxV5JG6WBoyJ6jt",
  "key13": "2bpnj4CpTrMULQxN1PsroHUSJEwSaLwyNCc4PFBgU3sgJLDyVANoXA1tF87Ca2dqrPqUXxbzyoyDMXyQw1BvMtmm",
  "key14": "QLu299WQYGfVhbpdYVbKYThUYdXQZyPgVyGV4TTexjUcCtZYTSZ3RVf6Nzu58kiB7ntv2mfLPCBURj8LgJ8RDCs",
  "key15": "4UCu7gtyAnGhqvwDwhvt2FeeSFqTJZPDmYekfGAUqdKAwz7K7HeXjMhWBasVgxWvbmTA8ApuEyi4kzf5WvqfyJq4",
  "key16": "XoS7hojL1CVLuYKmQR4hvqt13ardD644raKJeKdYVsSZkTXw9bGVDvT9nFQtoMTvgdSiGb3UNsVB7vuS6pQhny6",
  "key17": "4qD4sEsMUGccG8gq8QajHU4hATDkrMKPd5QV8WKh79ERPtHMTWGNoPuE6GoXsm1DcqR2wvexRp6KNgmLSHhFagAE",
  "key18": "3DnQGWjNyJ4XWjoz2HjfQ9TMwvbPR4SZ8xWti34M6g2cTfME8vCFGtgbT3EcddT77aYLYwPRNpPBfgdehAwjTZMc",
  "key19": "34uB5JtJ5AXN5QWeYsTYAhkuLAuPT3Cft6Vzn5QVUzKLMJNyaJj1G74jTq9LXYsidE5p3XAZYefACuAaCDZL4aZQ",
  "key20": "k4e9soUchaVr1yhGsm3zajT1vCZroBky5GZreCqUSqHqMj1noA8ASiuJqySVbMjYvgWYeMbLtUqAwD9BohT6kq8",
  "key21": "ECKtEK3FKrPb4NrXu1sVFZ4mz49Wab22E3NRvLDoRoJ5Rqs33nNr8fT5QKtjevxb3n2VH9mxJPLiaLPG62qbgVv",
  "key22": "5Rp6sh7SRKqcPXpwRUzxQM9vDEJevD39TmhgT4yJfcLKhDxZ6xzeg65LEuP2W33nCi5KfzJK8KLRYvCr3gzx3Gwa",
  "key23": "3UsePTFA5FHDKKYUEEgXNfFX46n6Ej6PfgJi6PWmu73wgmftgD6fWQx613oUpSKcgM4TzrhZ3FoY1x1bmtJi4hVs",
  "key24": "3JQPZZNWebc2dcLs249xP2rKaXvYHamRnG93NmRT82gA21vvaaya8JKnGf4FEb8qyY7HMBjpdXjDxePW4rMrbxPv",
  "key25": "4kgcQzbCV25ZPLSkSggsFaAuQxyKzWTgJjbLhyhhas7oZkFNAQbN7tNTddMZHn2R9F5iva2w7KNPnT3r8UL1xnZT",
  "key26": "4FjWaLgcy3fbXNRhhBk72CAsJFkXyJ136bvoJjzmPHitcmMnckxB8xvA6gjeffa87ESv6q5CWCvLD2KoEamhNQia",
  "key27": "3964EfXVGZ5VUVUD3mDvobMRdKy1UgThLJVLWvNc8WMSx6Ngjcx7H2SAzL8fut36EBiHbUxwvFDR8cuiz2cmPT5Z",
  "key28": "4G9iWRQzJpEXRXssEHMsmirohUzjoibiTAN38nvZmvmyR7HhsVrtqAYj94sYhEVTea5GQDqJpeBaDS8GwEzm5Xbk",
  "key29": "5j5cYZzzVDgVBij6Nv92Ane8ooNnixa32cLxTmek5qTdn9i8ZY5Nwqc4kSC2Ni4tf9caEFJjMpeZtCfKzJ9mWNAg",
  "key30": "4ZLPH51hdp8aC74v59PofFYVfyEyingtVXfRhaFMYqeBW8vtkuRuM5Y5Gi7uYLS4neM617DZXF1DKVCXFVKnkSQ5",
  "key31": "3MHCpLPnci9sf7vtjTAU599SMfhvRiEya42VV48ky7t3gqCaY6sqKX7isMSe7GzVNky5gqL8BnDsL213oqAfhjxD",
  "key32": "2EJdockVz8YyPKE2cW1pQBuJ2Qyyp9B6ke9Y94eXrUKy9uM6D3DnPxgFtELMVp2zNoWpWzs4i4gXYo4asZSJbqSP",
  "key33": "5LFbP8Zp3f7hFBj3NubHPNMHSpwHRWGfrv4hnDfh44uNZa2bspnq4CT1Yf2WeZaCCHkBr3J9jVq6Udj9ztz5TvM4",
  "key34": "wnXyocDto9TeDxyfS8KGMLSceotrjPwm4wRTQnVwJRPJCMzdvJQxP8nNADqQigkRhi4PcwBeMJKywM6hEjP3RHv",
  "key35": "3WN1ywmriZNHjoW6DMhwk8iZfCAwaeB1vQ8CAezJaDsU9KGTYbZnH2Er9fnnHcSkirDCjNrGa6MFPf2SqvkojPv2",
  "key36": "4CFdeucMDvmDjVpcobxL9FNnxhXXHRBKM7HrjFz1ExRNbKFikWHJc3AMSN4L8LWicPX6gx8tt3GQs73D9jize8Mi",
  "key37": "dmSitbEspUtGBFnbf5ZJ4kbhm4wFvtQXjCWuCvfvKQv9anAqH4incGYXNxCHc61MXwWVAksr3tUJda7x2ruomwC",
  "key38": "2mfHQA1S9Q7NkJjwLTKiMW2tcjxMnFHWs8Egny77HDPeeVLqr5hCVJg4fMMiNeSqbMQNB1MagM7b8jLsokzVNYGi"
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
