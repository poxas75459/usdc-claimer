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
    "4Nst2JXQDmzxVHKP9XmLZBRrjS7AapBKHoa339L1e8pyddUSt54mXBQxEEFsEeMXaA47ft8CZgYHT7CU6ucWC4o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TN8tk7o6tJvJB9G3szxYAkMQ7XETFCFAux5brUkZjpAPY56jPDBaQc6tNgAi82tSJ3VU38J8k5WFuhj5nJAG1PU",
  "key1": "5AJVMEXjA4BohSkhPfvgpqzQsyFnzmKS9w7HzMyqhpVgsTfD26r5tXp7KvJq5n7Zt8MdP9fJAb5MKcDN8A3zuRQS",
  "key2": "66pPdoqBJHPnhdEKob4c1h84ZTX3DNCpBFtFPotav3XmqXQ4G6jwxLhqWi2e3pwqwSZvM58DFnHzb4gbe4B1m48P",
  "key3": "2gUWseAY8YGUnFnGuXJkzphKwJkcXUWmgYZTmhE6WRbPFQefLxnDRQP2TEA83rcwwUvJvS9HywKPh5jPsoypvDKG",
  "key4": "SPeFPLy9dtJ62aGEuSVSiqYMkyi79QJ6Ujd6D8n1diXXK2wXJH9Q7mmwa9zTSpoJKanc5MMH3AFbig7SbuLpvUt",
  "key5": "3qhVn18Gop2raxK5oV2CSHEdHH8EK1J46mvwHxh4CuTLsUzQjkTxusMgnHkohEiuTmHwVq8cK41JHu824Mcm7nGF",
  "key6": "EA7TkCryzEUbWsSDJmX1v1zV5MnvwFgehRgq8qn2xZQdKMSzG1bJxPkdHae4Kv16BqdiLmc8XhSCTt47LeJcSPF",
  "key7": "FhsXVNFbyZeVLx2oFm4yoATSZLDNJb3ycjdsXMMhBDwzQQ8sQHNBz3nju3QqFedhxZi8X6HSj42mFivWAjL7K25",
  "key8": "2ZruJ5EfYWcA7AYEY1zrTTRy5V3nJgGGwLDYeHCGWrZrLb1KEvTfVQrUxVLg8vFVEptdMdiLLcVwvo5Cq5CcJ7kY",
  "key9": "3xNaVdavwtiChfmW39nm2avnkCLds1fLyX9pDHFayodyDv6Ze3QHimPMaBt5mwBvniAkpMZSSMkCG95u8sq3emWq",
  "key10": "4tHwKgkdSRaQESNGAtdh1VcTdE9pUKhRDzHPh6igANeRZZKh9LQnaXhwQErScRezJXNkHnA5emDUR6XNtCSwwtaa",
  "key11": "2KRXCuZve3YCf8mW7akc2SVk3EGYr8RU6Wm3LyoF3WuSgQFxxxgsGFQZLhCh2BYwquKdJS8q5NXXe3mpGXPT66tc",
  "key12": "38kxdmCZr9xgvAk4v8APeqotdezwbu8J6PwnR8M7reER7z9mhrCw9EmMPAfar6Aoe6UeZV5ZjcFfk96ow6tkxDRU",
  "key13": "26z7LEG2HLkbkH8xBgfZRZkGN38EpPyMETbihdQ9U196VWi8piZDhBFfRanPLVTwihng3bBGbNw4wiRPSKSbzAci",
  "key14": "2xZJPk1tD5GU6qPxggtTK52rYUB8amUsEoDX8PtY8nsLvr8LonRfUdFvF83mvmS6fJ5sHjMAA4LCkjQ2s18VCxo9",
  "key15": "57T6Z9U6zLxbF88hbdnLNCxjoVBPN6JetcmpqfvQmwGmcVzf9YPLt5VjV4GQ2xFCUhMELmY5s9U5niJxRfzk4etM",
  "key16": "5Ar6vrHxtbHLPvcaKPmzSrnyx2KbTgsDjQdUpMH1RaAFtkDNdDZkQif4uifqaJxJzrfGNByoUj4Zn5W4CeyfzVjH",
  "key17": "2GRQjR3uoxQ3t2hGBySkUuFJ4Tvtog3fXdUafqdpBesMcW8JTSfVrsPRTCakrktUxBfjBxh2ynXcpVnBjBNJsqEq",
  "key18": "4QRqbuTmNFtg3BLvSmECzaL8zm7AxjTZaP9gNxvDYNpSFHkCD8LTpfoCr9PyPymEg6HCVDbN27qMsYEEVyDbNmVA",
  "key19": "3hqsR8eWfv7kjmj46oDU78bTu3wkKva7EfRCgMkSsyrD575uEc77LJ4iZ6k4n5ESqGEA1X1AbE8VPLgXraHtwM7E",
  "key20": "2mEEe2CEJ7yGHYjEvGX3jUS289Ln9e8VBQx47A4Ppdoj4Va4AZN61t6NrjwChSp7ugUsEk2YoK2sybE3jPH95UkZ",
  "key21": "35sF2Hik7PuyHJ8im88nZ5xgMaCvejpofk1i3RWqdU5JFkYQ7NJq1hbv6maykXDK4m1No9RoLf6d1dZYVJ1iRRG8",
  "key22": "5Vob95fkebW1q5zCMxPqxNhYGQbVQtVS2QLiVXxYHUHERenrSjLXLEdQR17P2Xwa2t9R3yq2tWYi2qkEERDqhsjs",
  "key23": "2764jQeezqfJJRez2Z9isQtxq1iafqtfoJQa6ML7vTey28WArBdW2TSMLgaxbtarzES18w6x5bNf14Fhzsr2aFXq",
  "key24": "3iXEyawQMtPnNpZPrwAoxqq76EwwEYAXjREjJU137kvKCCv3xt6AtbmPVmV7ardJ21oQwvAiDvRL3Yzmp8Y1fMHo",
  "key25": "B9xjQH8CFUVCkY2VyiTnxqfG5TWTTZBqED3wcTDXsR9dWPtdzPStv7ZYTdxfNP5sbaduDCQSYXLt37HyfY1rNfU",
  "key26": "5kwjgWb9Xy45HcoiRbWCEA7JmBm6psofgzduKa5qRv36gnX6NsDKmre5JK4Hu9VAhZ5decZE2guYaps4ATmrs9KC",
  "key27": "3hg6YSdjzzZHz4Qotc8ZS3TXg9rd9VY5hurXkrx9ppD7X9kiaSDKoJ7Ex2SVqjADsEkzJNrMCEPqhiUYpj4Y4tk7",
  "key28": "5G8NaJ9HKJBQSnJtZpLvq4tJKmksYTuGKZnF9aJ6Ynp1ZyMeASqkXYCtX1MAudcjEt1b5a2pqKmGpZ33y9wjRRiD",
  "key29": "UBcg7JTwBMoK4o4zSYqHG1yQB2Lp2hukCYDZ6HiKXTyW6zrE9bPBvDzqngZWG2Cjbih6UrcqDZmkg3nqeHqdtN4",
  "key30": "37hW79eQQHrWUkuoHVgcoJMc5KthDv5iXjG8a5WRa1mRZ98H3pHvKDLHnYMWYobKmdg8sKQZZwBNHnmeNA5279w9",
  "key31": "5pTCzHCByFvugJaLTv5EnoZ1RuRvCsZewLuf33UNovg4eaHq8vLPs3tV5RueDbemmj12n8MoySf5qbBRCpFZuxvp",
  "key32": "3fuGs5aWh3tYmaAwYRjExmZNM7KY2FAwPpJ1npGnCZ4QvdSs4WnGmVTVjViKaqpzzqbMrUbZWUTq5BWxbtyxk8wv",
  "key33": "29SvjmXVe2m1RuqLLd79aKSXzaPeDrTBgvx8kSi8gNtPxapxyD2gAHwaKSPZdhmCwJnPaaxCPBzCgZ2Tbkow6bmz",
  "key34": "43H6Yv5ei9jLwiBd8Q3WefFa9DNbCHBPsN2mXn6iMEFeNSNRopBL7vCYYc7gNJ4qKPfmRnw1n21B4Ah5EGb6sK5i"
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
