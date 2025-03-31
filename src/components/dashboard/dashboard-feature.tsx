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
    "5rS7KAuGZmsAJ23KAuZ53Sn1RNnbVzUfmz23TEK3ZJYtXXskrwvhxtfQpPs1sJUzU5aXo4F3XGGkjQmofaXzgGpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYxKWNYSnej12mr4JCW4zLjBPb9MnHJW9cCRcx4UKM31UWfzAM81LXLr75hDAssRVXsUPsYQ9aKsddwkr9TpvQC",
  "key1": "3WwweHmxzayFgSCE4ZJCKHF3UmHyRhHLU2NXdPnPxNbhoaVqNjXSXEfM67s9zw5SETGyNYvphFpsA7LGontoPVev",
  "key2": "34R4oNfeKHmZtFH6iAPm6eUAUy2jmUwrBxRvKQEvLMTdKZ47M5DJZqpkDUhEkwWXDspp1y8KZnFrvfrS5yHrX3SK",
  "key3": "3es5EZuMBUsJbrVoioPiGz5dDxxzdmuqFoNnrDbDeKdnrz2eUvgQ2QEPp9iZ9vxerH3ejVoumjAfyEs9mxwR37qQ",
  "key4": "GQzo7bMk9MdxfPzXYvggBziEa5SbuFUqi8VZpq6TjzYTu56UHVyQjFD8c5WT27ocJ8XDjH78AyGBP5gQuuf1c5a",
  "key5": "3xH36N7j5Vd7Wh3FSNqd1gK28D8fLV8yGFBJAkbr1x9DbG4T2nYPRyzcWqtE9g2vvUxJuyyzuDAUCMbnN4sLaRBm",
  "key6": "5Jc2X9n2LqU1NSJKbXCnGPbRK2AuCNEVkWcVsbimWWr8fYUujTNapeL9HhnhTGHxSQNyw9GCxT7tYQPSGt6VirdT",
  "key7": "4BoySSX36fzRoZFkMs7MkwKkKVbCN7WBZmfmSjcRUoiCj8FEnQ5FE9kNksCUbQEuSaYrHhrgEd29attZyuGpRBAy",
  "key8": "3iWvmHDJQuVaZ78Xti5VVAzNGi5JpVq38P9k4372XAT41Zv8xz8SLZzemzhwVNsBvyA3PEiGo52TzK1nL2yaBHJC",
  "key9": "4jBEUHzMB9zzwBnmyuFsUHF3S6J29J3iKgtJK9Fkm3reGNMMke9EHcfJNh38CLh2oiQDZmJ1rVoWbbQcDMgQPdoj",
  "key10": "xrUAziwNE1DasHsAqSUVK6YYW3SMDiPvA8aX7LeZkwnfUoDtTzEwGsYuLCqB7bmeNLbDjv2LFMWhy1BkCvsRUHs",
  "key11": "5YiNabT9uEcnq1FsHhXoyyBiLo4X42Rej3es1vt9Drmw1Dp5cc69SFHCFMUSJ9ciRefM6THRn4eojXEhf3ekzPeJ",
  "key12": "2H65LGuTES5WYnaua4yMa1o1P4x9gR8h7NaNaPvrn2PUhsMJz3SFftDS7CwFQpWSBJKd5NrNcGJpTz19JVsBkrqz",
  "key13": "t4LmDpdk7Ks6GPTx1fAYYSsNho6MbdDJ3kTXzmCtrK3eDNSfgt6TTYTqUFnGPFnKFsazo4aSvad8JmqCw3Y9o6q",
  "key14": "5wHZBmBWmQVge1SQQfa1ERcXRaXereDH8iY6bVNdNdXZY8ZAN96HPVAvUGgc3eUcNCUDEhz1NYWTufgr2V1kzGhy",
  "key15": "99BwEqFER6ffBFxEAUDbXs4KD6tuEAE7griJwVa3HndSsGMGpgQvmcBQhT1bJkcA8hbuRZumFHr7Z4A9y8zbAPp",
  "key16": "3z3n2LCr6FkDN5PeEaA5Q4DwyUaFxxMyTocsCRmtWQVxBqrmCbfHcwbwtEVEnriUy2excxe1JmZ4e5taU9GsnAvS",
  "key17": "2i5vHT1HoZ5qWTVBfC9hwL7smPynd5qf6hYyPit9Rvc9M2w4nYgoGmEPqhvFPWAYmyB2oC4njRaLKeLzZYAM1fiN",
  "key18": "75GdJUsiwBwHSRPSBUh6jsAHgyuqhaaUJAsvop418wUjAnsSvTZh6FoyXZwwVbpJgryvc7oAy94P49UVWcgaAv2",
  "key19": "2L51S9AxXx7TTtkazJCm5c682k9BFjAnTrQmnEitZ84SWXoGwL5n8U7K35ZcwwihK2Wm9HjmNQA34Qm3gkm26thb",
  "key20": "38B4te7kWvmqdKCv46mFXK2nLVAw6iSkZi2K1fRV5vY6txvU3wnjMMKcK12YPU7mtkJ4tj81Cco7At22UhqtwfGE",
  "key21": "MejEroW58RfGZ3GUn9ZvnWLoxSpVEdhg6h5s2VANGUBzxN1KeKyGwC69wZ7hShS5Cq1LKcJ4rJ9vEJSncXErssa",
  "key22": "5fpcHYdam5uPwHGdxuHEH14awXjBpHrspdtAw2bhazrXLhEj21emoE4Hz4zSekqzyQu1NavfqhwgJvjE8oRvGyaE",
  "key23": "29dGumPmP2YsCBhfs7AbDxA2A3KZY6VVjVjJnjZWX4idyXJRMj71StrgcF4HzP6XbzbVuYX7YcpYXYzvBynLAWjH",
  "key24": "392ABZE2cE69vRr9mscDxQFA9Jj5oqQ5TDyWeG4UAFkxBDbti8nr5TsGTyTRrchCCLn2zscGtqSxqDAg2FhfLdhH",
  "key25": "2LSPSwXnH2SotKtPYR9hHR9BiWMY4HukahohbsTRnts6jpHhzxvvHnnKKrF8HNH9zVqpHjHCePQqLe4PapW5jghX",
  "key26": "5rzCRwiRYrMEMZYvrFPxHGDPZJjVCdukMszizdXEuR1zAeopoLXDzNn5fV2XqL7RavQryYKw7puAioXTbWcpUGay",
  "key27": "2jgVNYfPjityxgSVmGnFwvee6jTb7gtj8mR2B4GWoJFmfTLcj3zZqUy4c2wWUEqkR4eDqmBF1m6JZcnWLLMNMVxa",
  "key28": "4ohYLUWUUPAQjxKfTr4v3Mgt2mqeFPsMj7tSbKEfcWqmggACsDVMFVPqoGdUBkpGLFs7ePZN79jYvHfKpYfaMktD",
  "key29": "485pYikbJLa5VXZY5ZDB2iWiwnJDUw3CoTPFFXM4RvWPxFbxm4xsSjpLDJwdaLkfWpaVbT31PaiPSTUJ64B16E8r",
  "key30": "3nkDgjWxoC4FNM9ku4o3twDFNyV3SMhYmJbdmRoxHrwA7e613HtHwYsnhdN5FMC3z5Be6AL3NuWor64751E1CZGU",
  "key31": "2WTt3Jd56HDzaJKWfAXMzk8bb1uzoc1CT5srigiGoEHbCkD5W91t3oECSFRqX6fBRY37TmHVrFqqeniU1Qviv812",
  "key32": "5bPSWQHN2rZoYHuTdgJbLb38RoZ7Z8YTRy7T3FvFEzD5g6umwho2JQ8twfram5BLkUP11eV1iqULyarN9xXCNhaZ",
  "key33": "3pPztHDmynJCR5RXWdxLtDvMHyC7YrWJAVpuTBVZrQwNtU5rnKN8sJS7ybQptuwf7ezD9arB12UVwFLMupZadRP1",
  "key34": "2aWVkdf6i1JSniJauXKKMd3ps5kYktyHEQf31nmwY14KceQ5ugvLFjAK34cbJypNRVBp89wK7tkYeqjqMxV2ThRT",
  "key35": "36djgG5griSbixxeHFEMHB8jjnC9ijFTkMZnY1zfSv9676ykfdPUUdSbCU43rVgZTgwGi46pfpB4VrgmYJ8PxAFo",
  "key36": "2yboQShRjo3Fts8VdPw513p5b2jXk48MgpbSNABuXqiTLsgtdZHdXmHaUb5oKzm8Y3FaD6esUgFqsxG4C9HujMPW",
  "key37": "5caKLYRFJsYuT7ECm1k95u6uWQLRrqA7Wd82UPecfpQKm4jR2SJhon5gve8R6FukfjeQusoZcZv4T6rXo2nMn9VA",
  "key38": "2GoFCAwf7c8QBwWgUCThskftX6sJ6ubVRq9PngKdYt8QVUdhGrYEQJErh8TzxKjzLX9Rui3gJuDgMqfJ4yxJKgCs",
  "key39": "qr64GAzuHf9xk47aZ1MYrVRDQkCgAuCWcUQTGyjuo5TzeAHjNe6cQi3Fus1RXNHMJBKKshCPLYB931yjCTYsHCq",
  "key40": "27TRYHy5QZVco8FKxUZGomfgK8FxPAXmXtGLZfK9KeYFpXZzE4N6Cgq4CeBDSXkyLathVzsRTzgiG5FgFz3QeP3U",
  "key41": "2ZixUNSZE1t4bV3MpGpcKKQYW7eB3ta62Uxb8L5bJtdJb68DaTfxufnbTuw9ztXvmCQjh3z1gMX4Dfh9S12Y41xt",
  "key42": "482JLAaw1ZtZe1FhAUN5QcbDNnjYxqAM6WnyV92SUm1k3djhPgwQt7FRNmGsNbF93jkKTjvJ2X4DdL4FqPv4TEFR",
  "key43": "4qpuwR5uxzU7qkFQ3mQ72amSb1mW16oNWDc9UjpmPTxmxjhH8HcNenXgAtguAKCkYJWw9e8mkBHqhzdmeLnBMFEE",
  "key44": "4wJyBg2u16pZR7dVvWcXpCeNMdRAo1XJCjc6i4A61DJt56q3JYxDijYHaNcT2QaZXvHey4XkV2XU5SXX3kj2oNbE",
  "key45": "3aVHRbsBVEQ2gEPPx546QTzjd2dpVkhrHpv8GfACmnxf2yCWhktTCBAnjGi75eWEhohHN8DxGMHGqYPzWbGkJUPh",
  "key46": "zvEhmrygtsNczi2mKkbrv12AjEvq9nygrqvEdN81yhy4p8yii7kAPAjpsthvbVQQEQ3tWBVjnZugLrkUAw55j8q",
  "key47": "61LcLu2fCnfimJmGX4UbsVKgMbgn2SGzBCCXN26nQPw4j6WdJi3YFhEkrdEXZ8q4kMERFhLga2B6M1aXGDPWDsxo",
  "key48": "4Kyao8UKZeDN4MEvG79g9yb8HtEAjp8PQsKYDvj678hD8ECqdCihkkQVc3XZAUbXiZ3R18uvZEUL1QXaiN9rnENz",
  "key49": "4kSb6heCH3ezaK7np1nRAo59ubSjH3UkeTkvA3RVGC1ir91WV7JuqX9usyeT2rinA3v8jfTjsp8t1YHLkS7SdRmk"
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
