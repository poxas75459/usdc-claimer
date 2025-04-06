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
    "5nhje6DTUtYwRGHLiCKAGnwDR6RyrisbsXqHuz8EX9QSutempsF9atKMJeHEGH4W5r58t4b16LDFWVpcQ72FjFCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34By4mCgrBVVfAk2o5JuvdD8fAhMuYWakmGVWuMLuLP8iiBbhKYcirhjtGqWCAWAiAX29q37nmjGJjyi1TnEorsm",
  "key1": "2N8s48M6ss8B6smHwQCvfkG8Y7kDhfjQ8Gm2iUT3GaG9SKoPfFzUBTRUcnhQcRH5Hhj1x6XKCR6tz4o6NCmtDapT",
  "key2": "W49v664ocoubHPKdZ4dC6ZxyQZHyvy6LLJmxGidEZwTUBQjPbRhaPGpUboY9JfAQ7888Q7z4XYAgQpSkXPsQAEE",
  "key3": "31xd8eaju7bEc1xVZeuMmu9wxeHV4E4P1zsMhjf2veNT7iaEMY9n2RvXz4b1RStq4s9PEdzb79yvP5gPBXKucrCu",
  "key4": "7CBigD6oAitJCsxvreLxcZpz6R5D9yoPHYbBvcvsjHvvPLCcVoAJKRb4iUzv9Puv1Tf4kuiqKsToWxnBjqM3dF5",
  "key5": "3CzuSrSKCqeKGUt3AfHtRJfSL8kw12MNFZFqbkd6odnaNzuCcvWo7Cp2thiGEkVERBzhDdz91L1mG6LdRSpmrVL2",
  "key6": "65wZcx4Zd6yCAdPHh1bU6yrr4NEhc2BHiuA2QmWUsV1dJ91u4Q2kysEsW41H5fJK7zwxviXW22DHSf6EhfPRLfS3",
  "key7": "3XY4rzHgKcZG3HFZctS2nNf35uECd2pUFYH8UFBimCim9xiSGTYVMCKrLRyh5RxXDgnNuP1NB5gzLkLqcRmS2S9t",
  "key8": "4sGGj83MWzFQDSzquC1i5D3DtuJ1BjjD7nLPf9Kbmk8Nh1JwMoBipw1Lwtt7vwEaM25os1Hkr8D8n7Lyw1aMeVkp",
  "key9": "5aqkFRTrQitHB4uCow2QNznvL3DEZPTNiZ3UiyyJcvMRKU2bmQmvcja3p9XHCHdRisApeNGx2YkSgSaKUizgccw7",
  "key10": "Y6CUZL6RXJi3WqFBA8DXAtmcvd2FD7qRAPfVJZNY9bgGMBuCbMnzZc3zG2jh5wGQg6WgSe9WsHD794SVSSz1LHg",
  "key11": "3f5Dn1NEFtrTAkqX4huabmpiV9f6soyfqCAqu63m24JQ6npuGkB8ExHJ2EtWXqfV9y6bdGrBXbWxGH1cUP8JDhzw",
  "key12": "3T5SS1pHNka1gsTCxoENWiTgjWkZpio3nFtQfDA5hEWEFKtm9FoBDyjczkhrXEygSxyC29hmxH75q9Cc74zUyoNh",
  "key13": "BJc5wkDbwtuipG24BnA48jqwaVdpR7HwKhaP7xrgCD8U8VfekkWrj2KbRjen7tjZCdr9qhcNc7Srmj8gfuBHm8B",
  "key14": "4wcFqm1utzWeuZhKYdwUpMwcgQ4S83zckmmt876svr6KnjH7gafQPsvDHFHxg5YSHft1iHpEjZhTLRx796DLQR5o",
  "key15": "6ndx7TXBQm5x5uEBi19f1o37LvA1781bvp5cnds3PSZQtYztyXDgoAhV9kA1ufopSEff1DjRJhgq9AwNJYBUFZ9",
  "key16": "3rjm7Mgi7YcpAKmRUuhy71JVWHQKVzX1iayMHYwbnSZDxioE3UVwfGLFiau1pzeRdUfXbVWn1Z7mK54zUTMuhsxA",
  "key17": "3yn1N8oph6L1vTXo1jyzKRGiv92fjqcS5s68oGabB59CyR85j1yy7Xe3BXcykrBqurLTD6TEcLK2v2sG1YPYdmCG",
  "key18": "44ZqFqBksysNW49YvAv1EwWRNAnbL9xkhfW5QojosdzGeb6N7XGfv3RavJ3KU8dhua6L7jcwF1pCUDahm1EbAavH",
  "key19": "U8AU5HxXShH65Ln8dscXaK1BbTayW5yiRNEtGdVZuE1SguCjc9WemMJLgfUsh3VjZ9nu71gnD78BbZyVnpUEcN9",
  "key20": "3yGGWkFy35LRr3nzn4ezKMM2RDtXtb3V8nZoHJJUmk2URKxfJFmTnpVBCLm6SmQ4VjPZ8Cu3w5cYYFshp92DRtw3",
  "key21": "4X7gQHeBcguMGCRFT8gx71kCJjH5K9Thr1jhBh4QXDPE5ZVi1E3pnkSmhEFfisc1CTnF3gmiCgKCnRK1krPdoYLp",
  "key22": "C6evBsNFLd7HyKNpW68ePNYCE7aqRuXjnroLGaTZ2XHAWHMqiWcxcojdMmw7tGKFGhHJQ4ZHH6JqGvdcnF8Yup9",
  "key23": "sJ2jw3BX7Cos3ZEJp5EVVzEWd9ZosXHdMXDxV1JZmvmg1ZxSuHCNPRqskmnwUArHTvKzYMrovtq9E7qAQmYiRgu",
  "key24": "5fuMBY9AZ4qFLcRtqmnfKZPrB5q93EoHPr2QxnXwsw4DSKZvangSXoAGba2qC2Sju72Ex72DupqmxMmbtYyoXKp1",
  "key25": "4i2eubaqvBVPdHboq2VUUVQ11PqmwBX2BAgVdJqG7DvCaW7GkT9YJZQcB3zbU7cmfPf1uELmHUqa99kojmQWfFWL",
  "key26": "29xgXMU1o5Jb8Bzw54hAhKkYw41fwet6C8BPC7MNCuyhF1DbFEfgeDaMEAFtvVfTKW3PxdGDjW6Cza3VyeXLEFZz",
  "key27": "56z3nckjumaeaK4saf8m47E4eNrMtu9N4eiP95Dsq4e1zHBf9F1vNi4cNMHqAqm2shnkHcWkHnPk7ijAjpvwYHKF",
  "key28": "25BqHUs35ABLkWhRf3VLSLAz5kU41Zg38Hnk1nkjBbRNS4N4vxhNUm9eQgD74YSBdc4gfc6tKrD7XjZT3jtZvkbD",
  "key29": "5esUKkrwxBkK2hFXBpzf8ELQYjz1VUHJosjvgMcFeQ1entWEWVpEPk5M9X2vxBL9YbAgBmNhkt3HSg5V9LmBe2g3",
  "key30": "35gNEqWvySe7iNJs4hjYagK7G218sLbYXqtAtPFRXWx5TWdnmy12yZBQqyVrXXEqNceyk6bHuioh6A5qevfReMfH",
  "key31": "Ku83Z34nHYHvFnsNy6L6F1ejR94UysDCo3839tW8egp2WK2RcqN1YAErXK4mGy32p4muyGFGw15K6C5VGbWbWq8",
  "key32": "5mMA8wyiai3u8YHvwNT63DNizvWZNhviXp1ovqzQq3bGq2RG6nb71UgjdWrH1gxsft6LcxV6jPzMQCF8mu95b8S6",
  "key33": "5HRM5pVXWh1XEFgnrqRL5rQNcArS3GUheGyKDmvZLFa7ZZmvrv3YtU2iC8G6SsZmu65tZp3TVwZV56iLzavjWHpd",
  "key34": "3nUBTVcdNyEvxkvbdHcFM2mXSa5fB3srfwFa3de9cAh82oy6a94cCq6fpKtswGW1gmQ9ittzhqs4uU2jiWMV9PnA",
  "key35": "2GrVGMBBSHLqM4kPtsXX4mniyr51rivVNeVo9Z7zPEtmkxFpKAKiU8WmbtY6oidnGxo2tRhAp977Zy4ViAi11xff",
  "key36": "2dN3NdgNnVdWRUuAZLctWXSux39XnWNbXcBTjdbgrgdz5cMPcKNPZcUcfyRvasdi2x2WaBigKR76SaBm1CYN2gdP",
  "key37": "9K2PMgHhRJM2ZR3DzsbBjTUcndBiKgFqoAry93ZGsoQgVfxr2xT5WziTTTzBzmGNN2pawtmyZ72d11qcRpkDywz",
  "key38": "4Zd9atpc1ZecVEoDVz6m46jGkKtpFYGkACT2yHUFv8ice1cG1Dd5M5A24T8UAQdk2Z1GxM2ugq1g84aENP387Qh3",
  "key39": "4ts9YJLqVHWYCZxDX1m4PT8fPoMaB5xt7Ui4EDG8jYCybKHMcWgLkK8PpDbcDxkeWHADWHBtrm7yeaQKDndTJtLd",
  "key40": "LguqJtDU55XCyRKDff84nSC4nRw3ttSmJw6s1Q4NVZgqr1s33JNZDZzaJ9mafTEMKhUSWE85s6Z3VmN9Gnhw24U",
  "key41": "3tFgDhd19JfxRtTgYFScjbMSbmRySSPCDZviZQ3qHJjArsKtgyLe6qoDEacP9QSJPVijR7aF3QNpANYiYRWaSqUo",
  "key42": "4cY2CaWzL8Z7z4M6BVQxXoP9btaspiGvdmZfTYeJbWwzB8Td16xTHN13YoG3F75JEjBE5p3ZoJthee1tYEKCQGeD"
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
