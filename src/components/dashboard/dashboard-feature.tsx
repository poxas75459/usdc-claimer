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
    "2J9g3PUs5XzXiTqRgRQ4apn1Qgc4ba7BKar94WsAaBh5X2y6goJ264AAiacdGaDBQtN7RaWE4oW21JsVydb7AqNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hF7JmSzxWPWbp1i5iTAgdMubdkTNmZ4epGCQhwVfiUYVdFe2HRj6CLAADaCKvCf7BGNXZnJfRvAvysYfurFcFkK",
  "key1": "4GwkZ3vDvyxTyoaiebsrx8TDDuHxqBU8ZGDrjcAFwcEnJQgwBZuiaW7EAMfBoo5ajmE1TETB64fWKUZhDy1K29Yh",
  "key2": "2SgP8ncU8gvaXjWLr8ca174FndJRyo5sLcbmat97n2xSTrBH81XqFiwHYcqHADzR7ziYuV1UiFQUDUxuU1ACxvid",
  "key3": "675njsjyRBmjKxH1jprYySLxRmjMoHsGik24LuLtDNxKkbnnuuR7qb9551WdUor32AvNxYeDNwiKkkr4nUsfnzv1",
  "key4": "5UUX9KmSAb2bRQYYuazujdBJyiMFaT6CQBhAaX3qT7CUcGB5Rffr5qeQH4SwmkHDUE26kJpZf8waQTGTKpbSEE61",
  "key5": "2QkMTe1x76zV5Tubw1eDSz3NDJVCekAAgTGCwHSzDQu5V3fvxSKHuysixnHoZxownLsK57NSbJ5RRws1Krt4D3sQ",
  "key6": "MgVQ1Rbu4X8DCwAuWmDPtdMPKSUG3qiYqkJHpaNhMAS9qydiXXGgLgVGaACHmnKMKPBpRy5RuQykiTbA5xmTEYi",
  "key7": "3LMPj8g1k6cpM1GHfVpGNYXDKs3Bj6ZFvSXdUyWmhzEEsKqqeT4YUyBFkoGRjNWPxXAhhzcMTHfQycELdAjiJAvb",
  "key8": "2oFjujMfjLUHiZYSkRfwcS8rz2QrAKpxriaBSPDycpPTy3fPEVCMuaELVtckoq47rJBVWiGhDkPRicFMfAgCeYQ5",
  "key9": "KSrxULV6hFxwfEj7xtLqPEFPmuGjNwEeX5oF7sX5BhFhsHD3mzw7GSTUUQ9iwTELqPUz1VLvqibyAg83jaSsNcc",
  "key10": "497Zo4bJT1Uvua1pjAS3QZLpB3jGaHSyYfjTYVUfJXtQ1iqpdbmPJtYRZpxi3x6B3rDeQxxuJ6s4nAnPqUsMheZb",
  "key11": "BRKWHViKcZyvhx2mLqPMY5PwrTmshb7gjSyUgTy85SVXGeKnrgYBFNgLyrLw6eYkcyX3S2x2pjzpAJZkfDdM7MM",
  "key12": "2sC3ojTuSTgUshqudR8zuiWPSTVPYoZ2v1tunzPV2VtGjHMDAbCihFxsp4jJxC74hMjo2dzxkjSBvyBUQ1AoFcdr",
  "key13": "ssw4PnFekcWm8teKVWf6kJopBPsL2YqpuuKrjCAGDBU9QXJ3TdVf3ivYuyokoWDLMbhPBVUuXSJ3BMeCCzEeHsj",
  "key14": "2ZCJ9z1vqTqKg2DqfQfCpkVnZuLJeKHyP4VHAS1kcZtKENRcKeFbUU4wQ6DqnYmXoapU9d1HcSdDrhFWBPMpNGau",
  "key15": "2SGMMdeZRGqnpy4e35Bm4z43S84162R9Ciuw29b8pcPJGPzJEh1gEvYqEBrqbfZqDe5NjpjV3o87xg8k3MECG7Bt",
  "key16": "44p6Udy2UirYAn4zvQprFXqsAcf8PiEfN2sQuzkEBgWXKrrVtkhDjW15AshgzLM8MR9wSotPVCsufARZWnFBZaYw",
  "key17": "5hWkMyYFjaLVjVbqJ2Njz574fkwzpjYKzU6Vtdy9vUU53uxNuR8SGxdaKr3ufT4GX7jfv6KoQwJnFXqfd2De6Kpx",
  "key18": "4oPAcujLnfrQ5BvADrRW8ZZ874xGv4zTiz3PKpqBAxSAqVeESktzVuseuMiRtGGuP43UFXtZFp7651wUMgQwasM5",
  "key19": "5EcSKWVDuCX3SdPhtm9rMwwpdBo3Zg4EXnx4hy1aSfsS42DW6mKmPMsE8NE6ZJfHxWvknWjJ9kc6QQKCc35JzGgf",
  "key20": "4W55wwR8mQheqee55dNotd4YTofWp9eZMHjcLJk7wTAMnUH49pFx6j7igzqhRbs8x5uJofaGmmZQH58UVohSAbLS",
  "key21": "BknVPwFYnNN24crX3WsmMNqFw1JUkNrK1rjohpnwHG23cesi8HN55zHNqHB9wwUonjY811xrs5XeZrCDqJqwmbK",
  "key22": "5CK9P4zNubVbxGKjwGmRyuvEgKDWcf93QcEqre3h9REeQdyQFi2aNvRatoFhDh8ug9AHuCJ3sr4TB5Y5eZwmB3kw",
  "key23": "61mshTXUxqnaSm3sEVzZAmZRn8zyCGVxJzpRbznmdbMzurhoaqLpWUgNuY9nhaBPkQYPyx5JjPkSe1rk1yLCKCkA",
  "key24": "2VJbpfFfqjFhVroTKAvH62icZc7X3v9RNgAkXhXCmgtR9DKsuFGeyVsRt6FdTXnkSPjjtnQcZ7XqwRRHf1AfkuGz",
  "key25": "33e9BG3JCe4gok1m3pmmNyht1vvoStaSqeSYNwTVpPcEaN6gfeNAbVSdrcz1YPyjmhNqM7D6zTkfct8AiSKd4o5P",
  "key26": "56jkQkMTYH9k9mwdY5UuQVehKVmFecD5Es56bDVXVxgRbcVm6A2WrdE8gx19UoeksGFMYa15nQsrnK7YqEf7tqmQ",
  "key27": "4V4RpKJRJenGbq7QonKGSVLyh9Jk5wS94TwuHoXwWondz8ZjzvytmxzRhDx7DQywg4zNPiPGi5Yqt8W5pPhJ9zwn",
  "key28": "24U3h6LgTT5Kst3Y9tuCGXok1jXc58bRrtW3BCTQoeouWAjwDaQ8red9X9FNGHafExBSiah3nE63F94kacdQriuN",
  "key29": "4QVgYHSCCBFA56JEi2Es2vsBPo43GAB7FZZgWGtGVvS1h5sV4WwZ7W6cqmPWuKBu8nyjaBniN3NWXyEmw4t351KS",
  "key30": "ZJdowFtGHteP5nKTXTN9AUdWw4ygFFwNa8d7bPfcdBLzGqYC9kEc1KvZV1LHgsZdbEkriQ9C3XqbZVDKWmnCHEG",
  "key31": "5rudxGYqeSJmYKE9stZgCeJVEdr8BMzQ9HZjyVBQ3aGy6MwBtngo7EkCWYBhGNYavEnNvd6arNmttBufhPqPRf9k",
  "key32": "2TDsSnTrQhf2x1ifsbTRXvAbQCJdgoM3b6RCQtUBgyBeQ7RtfaCQS4kK9Jby3izVExEgUzrkPHftee3j1DhvbXqd",
  "key33": "yyg9ioDpY8Wc1zi9ZpxLkf9nokxqkBpiRv18b4gz823XHC88P32SJv5F7f6sbmaYGDqU3sVSS3fsAMUCpNBUoFu",
  "key34": "5H4KQMxmcdu6LmNrh9FcU1EKAy1FJh5Y1FJnkV9jjADekwAtPVCtsUB77fpYYBoRAAgprouJv8ndTci73NaiSPMX",
  "key35": "4ZC9GtnJVACd1kX9xit9g9tzbRsSqdpNXAW5g43dCp4zaPsH23b4hFNKGm6gWZKQ8REgTVWs54J9dESBjQw5uGPG",
  "key36": "4bMbg5vgSQE2wnJAwcNPd6if1t8LLqnuBxi1giMGvscAXiwXQM7a9uWunhDtg2tEAvBFZgRSXs522DmXGGCN9e6U",
  "key37": "3zbyWqU7eZJaBCPTKZWa3caGdTy4hTCRicncCYHdt7SnJyrs9JoU7Rs7QkDEHTuyxRdMv5L7P8KqJFWW2MAZsnYh",
  "key38": "4qC15zr79tU11siv4t1uQ5RHnP5Twh5rZARgnx1JGhcEgcqcLV39jJQxxZ9Vb5hfntHjq1ucEgsPSUd5Pk8sX2fh"
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
