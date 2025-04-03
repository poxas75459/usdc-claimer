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
    "4CMLvi2hWmLyqgYgLUZpDftugPbp33KedDLbFRdoUnsPTTreoapkiPthKGCnynfMdLfegNN4qfRnEYDhcWVg9Phe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u3ACaMxeuUgyVtgc76VQevQBW1XrdyTgcjM3LH7umo15iqo6NqmEybk97vc4sNhbmTsnwYuYKfy12hfsRMUdaKk",
  "key1": "4kvnUYWHL5JNLkG2QSQyoxopByWHH1KAaa394RUzHTTXbKdav9uXnSmrg9tahVfMHWTqkizAbTiuNB4V1fGgBPrK",
  "key2": "5XJQUvwihL54kPpvULYyQeJjFituees335AFRXJasfsEVqJdQrrmmDHSj1AQGFHg8EZCt4Cf3bm1YV8CzhKJfX8b",
  "key3": "4XZBamdM4B6nd65Wru2jFxQ7Co2hK2fYF51C29z1RydMkncoHUbYMckrbmDvkGM4siUWMs2BFnyQwjcELDpmoDtG",
  "key4": "6CQ3vrS41h8ZrJYoriBRhX6p1ah42qfv8mbAQEttqzsZUyiRwXmxKTVdPMaSzvN1nqxz5SBF8ucyuoWH3UAfnRN",
  "key5": "dfqVAhmyffzWSwQospkWzyma8jm9ooH4Jr9aweS3d8djjVmfSFjzBc4LjJf9EY1hWJ17HgdAKFCwY6ewDa2UALS",
  "key6": "3zfyZSgzgXe1ZNRAubkkRc4VWVrKwVMm2weYdwnkw4uHSWWNdAtsixUTSX1WuPso9Zuo3wSj7uJTxHtrqdfBtXMM",
  "key7": "4xvaRYeGM3vTC3bmdmicE3zB7vZoAx4jtMj6RsYtqhvXBQwEhpt3R4sFF1t1KG5scZgsGzYxQpWGGao16xjHZmns",
  "key8": "XvMQby4efgsyjenKC3Vzmf8SzuY25VxE7hSTSwTV7oayF5Jgm6Z11DQ1GSYuZSRn6V7WB73r6PN9uzDNCDGz8Wc",
  "key9": "3TdLnY9BniArvqtozFWkkk6K2zS6i2iJoJwUv71cRRBSiwShDzcx8si1xkfmnmP2tcA26yCskFcAPCjwArEZBihB",
  "key10": "3HEMR7xSappZEYzr2Dmf34CBdhwcNvKK9RNekdUgaJp86fL7aRzBRME1hyDgVE8deZBdKEUifgRSMotvRbnyQiPB",
  "key11": "4bVqyorhS8pUBZSUQhM4qyKipBNSEfVWLa6NkZZwWdBB3yPLc8HzNkxKqs4N4VeWHXEpRAnnb1a8PVd9ps61nchX",
  "key12": "2DziPyg9T4qeS3wfQXtSUxfXV2USGsvoVAhr6EsimeBynUkwK2Qin17gLNEH78rz9zLm1G6ubFjyJGtNMob7gHdN",
  "key13": "2PFT9Ag6uErxjjMpU1C8PBr392D7MAK5hP2RLdDSvUe6aQPJe6o8CQXJFxbef6Cse5UJbVMzPRYYhN8bRAZgRfNE",
  "key14": "3LfGPTaPGnU6smqcrMtovSvcwSiKBX1om8JHeWB8g2YrpfiZC3HmXUECnBj5oGCgyonZCnnudypFHbHNjFF61MVF",
  "key15": "5V93QXCz4UTsca2YY4GVd8BnY9ASGzMqg8TULowmDbK2coviT9mxJS2mTWgWyKkD8DGY5PM1XyLHHvTu3ukrPcpB",
  "key16": "5w18qo5he8JVusg8H7HUfZ2GaBJ7wnLuV6dgejy2EEUTiZ6cH7KMt11cUTJboXfA3Q8z3o6TgXf1HSD7we1z1Gec",
  "key17": "519wZpj12JKs9LLySspQPHqwPWKsCdydUt5wQovh2jDmfKubuwquEgaDK3qoZ9HWuX16XfFJaiGqwxSJTUd1LL6",
  "key18": "27kYhK8diBHKceJukYrWtkzeNhEaEeLvLSZ1jCVf3N1ZpoRmH7N4FxpfbiJkKFLVGeuCMyM7fM3eGAJNyoXSJLJC",
  "key19": "SSsS9AHwRSUmgYUxPkyYkeTeRLkcrG7Am7Ro8svNVXSuoSbWK6EFQEDv1feP3omisfjZstKmrgqyte2iXbXMQD3",
  "key20": "aicuLYuZjJ1MBz8tULr6wZyRPG5yXCUZinR4AZvUyVqg4hsUFJ6MWCMuqpuSBBjHc4ELNjZaS3jia6FKVNrHrCM",
  "key21": "3bYDUsMhD6axST1QQwKX7RCMCR5pzFZREF61hRjkbGaQRScV9ya46ZaNmdQYYyywdrrhZFVsEj98qYRdAieyguXt",
  "key22": "2J54CTbvas69op3a2ah2qVrbxqVJCeQoG4BR2JcwnfQA5wqH3TUgWXXa8FiA84stfJ1R8Hbmuscz9nfCJRABNms2",
  "key23": "3LyaSdQV1HUnJGf77ZCknMMNycsZB97Wq9L3WANBshaii7hUzzLxXGy9jWPS9JuQLujxxeww6PiuAWPZNsJthf2E",
  "key24": "5JrcULK7EVUkEgPrmi6FADtBt5nwJGV49nkratD9JzZgKd336AsqUw3gVSzyvPpJhvVX3fYiZLX8HtdrVLT7sMAY",
  "key25": "25NgBbnSPb4Anrifns4Gj5WaiLxWRfjND1tAcAodBJB8Am89Jdjxs6b8ryiYLEvFEyQZepKTvUQzxc4PHfuYUQCk",
  "key26": "6y6QSHWPypMDLKbXunmVhJo8G1VeERJznW2TdZURZnHEYKo4mvHe46gz1p9TbusAwYzfPB4Hf4WeRZiTSXkLSKg",
  "key27": "2qUmZvTBnDdw1cGWajkYbXx9CUrDfY6iYTqnK6bwny9ZEf4rCLCjfXqXedJBUP4SXCgpCFZsRyjtZygPkoYVjow2",
  "key28": "4vbxzFke7ys4oMVX5hZMhpvLf2Agg3GCTJEDiLy4nziamYC1Ro3Bfck7v1L8BvTUVim8Pw3sV6d4rgDyLpgzmKLs",
  "key29": "3d1vkFD2Hx6S61ygW6WmcfGY183CpAJxANQ64Mgh17Jju9fRa8WF7SiTtn4unUfLeKThkYiL78jPJMsBUDqmrXid",
  "key30": "3g2HGWNx1RvAHSs5qJiD5io5PgKWxzMG8p4ux4vjnqRSpLHAy73zemKwSeVQQAJhzKtwiqdmCr1i4aekrFaJgxFi",
  "key31": "2VrgTp1ctVCnvBuLnd1Nuide3ignUyuAYDsBZNEVNErKTDRTzFX9hgyKUU1AsysKikE99H7N5L4W6eaDeTKuXQcb",
  "key32": "64ea8pNMUKmnBXNEBKudGQ7S2Da4jUXTBiVjMAPnPKDEhoWDTWVh2asVXvRS2w5zCWe4YzakrafoiMH2Phuo4tg5",
  "key33": "2DYqB8J7q5JiggBYvjJuo1ntrPW2QexQygXbm866xsb5vm62o9mR3MDSzWoA1y8Je1JrCkJGAcQpd4TGzKkVHq4j",
  "key34": "4sH5x67D9BjSFybnC3tzxZbjJAB2dBFLXaiPUrvz2qsZjrqkeHeLZLUD7zeuck9nELNTQPZSTBNNSRxfw122eEm9",
  "key35": "2rEYYTDgWWsr8v3kxLgHj4RrxufdV1daZx1uCfQiwzB633NS65D8PZiosnuv8WqovgdTEkjRTscFr9vPmwN82Hcy"
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
