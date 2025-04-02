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
    "5YN6BB8BQYjtcu1myfTLYArK56MDA113dYbzUv9w8uwcnPkUMYKU32VwxFRwVrefDcr7FMoSc3j7phmGNfEgRPU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AwJoKx6Rk6tHBjgjCvtxJCHhfYtzejuhjBoida3knCMY4QjtfdY2jaPtMGzPDgobq7Xta6aegcPBucwGkq8YUbK",
  "key1": "4c4GKw2XiSqzbCKdradKsvy2skb2XqAPsn9JHXrSB7djyPkrUftPrvh9Mi8Q64VnBe6YQmK41wCSwBuVA8hUJYHV",
  "key2": "3Gvn3j7666LJ8R6SxXJzrSmdWdZnJXSctFtVYjpqJDZiJCvpZYewR645qQShvRAYku8GvkEAi4pf255Aa5QYrA7H",
  "key3": "bTvvqnKfbo48ZLs3LMUhgheqyuKukrAasvY8NgEX9UpxQeqRnP1beuP4PHTZqH6wpFMQHsB5WRqRAV6ah4DpH46",
  "key4": "28kypshUYFaXvR2eHY3VDR14DDto82hLJU65N1UqwmPw8xa85psja2sU2ffGcnRczRJP9DRYrCc7h6sbpfp9Mko9",
  "key5": "5PT87uVbv3CRNp9vFF6Ka32535u71Dh7zgRDAJLFDAPeHPQe6FvfJZiiNHRsFwM8qLKbqF2TXaBr2DQgQ5Az6nnd",
  "key6": "5eHSjuA3LhX5w2Rpi1XLMexdcy4VQPVjomwLzZ4LGg8a5gJsujeWCZXKcvDk3UgQgFTfif14ZL2v8T9Egx2ADswq",
  "key7": "4Jy37dAChcgEQPLUtvYrKZk8TctMbjMAWfbsnT6SmsKPJBfvgsYNf9Q7L7a7uuhWM61msvS1dBPT54D75fWzub98",
  "key8": "2AyjP7Zt9PrCgPwjZZ2Ev8PsL2cLcZnm7JtrXdbPDDRVkhS1o2aidxt4cAky31V74KQB8iZThZR4zU6845jbJM4n",
  "key9": "51ypRkfUGqcUsj7nwUyN1BdEiCCh4dnJ2NTfhLTRXiZBB1N2EHWK5HW9m3Ayt6yM12oYEVXCdPAtDyJmLB5ADqAV",
  "key10": "2d81mcJXiSmz7oW6yUwdC4CVP2j5XCvHeHADn4HiR51GiCnsV3a3wMeF4be57rLALWqsJU3kieZwXWLbouxBHkyP",
  "key11": "eg6vfErTcAwhnG5sfBNLar9zzNYnuvTjZWeTfuVQLZdSMPL9XKXjSuaWRYShT9hviQDfn2wPrHDrEpFGyMNmiCv",
  "key12": "3mQjEFBhDHx8ifoGcQ5t8ptNAKDH4R8n1CfghuCoUuRqp7z3RzZKrVtrqAMG3VJTSRrM7L6WJ4wdrbcwX7N5vfQH",
  "key13": "5tUBjhAAoGKUrmZAngyN3bpQpvjvnWszocuA3RuNsXcEnqBMMotRoKbPd4XhJ7eZw5zsz99vNHntsfVVZvq8uNnv",
  "key14": "1AsP1ooXgbK7VjAt3p9LtjecfWenxu22obM4z4LhHFHAQ5cwox8yCiP5cqjVkDTFb8s6yN8Mt4XQ4ncrnrCGB7n",
  "key15": "4yYgYCEDuwKWkMAWavaL7hBXjYWQYdew1Vir4BwtfwroEyTEHdntwLV1ChWmATNzoZchigKeSPuV2P4SwmTKRwcR",
  "key16": "8JFgwP2kTiaddg3o7pJkvPjJ4uc1NByMo7axhBydhHysPXjJZFwGcgVKN9x9AwjWPZK7UF8LXAjfFWkiFu72ofQ",
  "key17": "5MvqSEH5vfBNJHXQwud8HASXmp5qkCzpzM5H1m5HHtvw5rx1pGFsr3bwGDiGDuQbxcuoAxogdyv6VmXPqyWS8uUp",
  "key18": "6aLy5qXtpdVxejyjanDCaTSMNSrcNXb4dwFWTm4yTL8ub24BBkDr5oiCZyMHGUBcBjtaVSRtJFA2xVHznxgDPbS",
  "key19": "2XSddf67YKeq4oahEzJAburbpfYsA4rQmemyu4oJRjWL9bKdMd2kJUSKBYpu8oTA92C5MRTiuM7Cv3LpPdEMvg58",
  "key20": "23y8yd3k2e7eEcPqiBGoHmnV5MncuzEhYkkpKQCsADTH796JfHaxCDTxDvNPLqRhF5tdwFpxQ5YSxq7M8Ks1ipAu",
  "key21": "dDdBWzZ9dPWfitrpcXgchYdFHpbqBjkWxXoccPX7n7MJ5rb5fXWyyDSftJ7LPZSLghy3hSy5PRcZZMJwwkaP3zK",
  "key22": "5T9fC68xC9QF7A1HJF6WK9SzjHi7Eth9uasG7o8GMNaBFc9e8BgPYHBxsPQ44cScYaNU1s2YrpaxL3i7mYbxfzbX",
  "key23": "3G9Bgfha2yNbpW5R4kUTc92dSg87snDC5YFYydY88jAFQ8ogUSuW7TTfMKWyctdYY9UAyZaqBgRiXQLF1QZL31UC",
  "key24": "4DNxGFVhiAz6FTfeSRu6xRv324epmuCB9R3jG5tNYUDj2mK2ACZoZL13WA4y2ZnQZr94BqecCGuttJY8qLxyVGxq",
  "key25": "4xp16ZE9iFXLNuhuvvvFJMxjWKtbSz1raGZi3Qa5Ar8vgNZHK3PB2BFS5JQWDznwQSRyRdeidvfhZvCDYGbNEULk",
  "key26": "3k1KaUfo3KdxCmcP42f3xDC8nLwwC3X8WUBR1NFERW2KeP9R8ukgGCQkBPzN9fpxJr85eaTYDxqjLRLv6PrSc8o2",
  "key27": "527ifYCyARtVBx3VGrV7EMULDdxgFqbTm3kzzbNN7JS2mXsLUUksSDg8yc2JBZAjnfp9JgB82iiV9fLhYXie6S7L",
  "key28": "2TTAP3GRwX2HX42bBkgGTwuN4HmwYKsU5e8mq1Fxy7mXnBrknqrbkKPaMGUkXYoW3HbasJ7aZUJL6RUxxCa7qYfc",
  "key29": "4X1nksfQxcwRpWUXkLWzgWA5hVY2g24kP1TGFudNiuzfDGph4nKMKKcTo1t1umtnVauwGQfiJAxYSHK6driJbzKC",
  "key30": "iJdNmSvc45UPEE87khk3wxHxTyrfr1yQDuqmtJwR2t4pCqKQSB9NpEMjhEwyuLWrGH49roBsp4ncATppRZW3CB3",
  "key31": "2Z3WEE5d6T7E48bdjKuTZFjZ3NRqvw2C3XPm6ETVgCteCfWqK2NRbjUBNstMxRcn8GP5afZGkR6HXA7MpATETAhR",
  "key32": "5SwMvSAx6HsR9hjSk3iQCnsteNT4hVcDW6B6FyYezbdZAJRoaei8q8pqmkZHFAyAbEvBVAENnELhTnVbR2pzywZD",
  "key33": "4vELejAvSPrk4qABkhdFFWRaTUde3UnnmzTm7ENHvVBDpGHQ8XiZkNfeApqzWiq2gtBzK8bToz5ajSy59q6CHvxn",
  "key34": "32Y31DXLFt4UkThpPqoWzxGkusbg3FBtpc7T7hfN36FunkzyrQkYgEvJjGyHbQU38k2FfyouQZpj36NiGY1itwrr",
  "key35": "3mTseP5ormjffc66bUYJ7avXkYhwvQ8koLRVbg3s1tK29ZHGVCQcDGt81GUVs6wrvzmMaKAUkRUkmptGTikCnaWD",
  "key36": "4HMTwk4t7intXQbGWHqMGBNxHp3MPRNkTY1om6979YKQrer6FCXiJ57E22XMaSqLYXtctHuFsoLqbRpDJTkX79rk",
  "key37": "24CSJU37PBD4QibhqcTQEyLBV37UE8bwzZeSvecM4GGhXCHW4LPfzsFBiJYcdiB6ZiKFdUp5mjPPbn7a3HhBEmyt",
  "key38": "32D5Huvw7zRyzANNCt8PaSezLVt9oUvk81LRyHHkKZ2MX9zmsTZ9pPMcfFXb7JMk1nvR4Cs7YH5YEBie5ZzG5x5J"
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
