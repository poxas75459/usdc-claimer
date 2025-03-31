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
    "3zQJqAaNDazvaRTeDusoUbZnbT8RynR2ftX9vfArpUereQCoMuw4bCpM23n4uK2AnBC9qQnnbD1ukJeHSwN1qjDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ReFk2zzPWXbEpKEv9YdG2ufx6ihMwMMYXpX6ocXCBfd2yowQWdNCgshFmg2mvMt3EuyvwRUAssUfjJtGWAxeYe2",
  "key1": "5FqXArVTasUAtyaCrWdbTDaHsrGidgzgBwPfnJoWT688eRiQgoZnnGiHKp38bko1mXm94YCMkcH56dAtXkoyT7TL",
  "key2": "4abTzDMrsgivYb9XynXz2gz6Bx1H5eNax7ec5LTbi4sRWEJDHBJ4doHkbd1NZ6SNgrzwjTKWBKHeEqQdRjr4zxZh",
  "key3": "2ujTmE1nnfZxUf3gq2Vb9ijsqaUXutK7kaBgtrSb2aCckHSBWPPtAVJnrFxiuyJ6HU1rsiqoPCa4kuXNonyVr4qh",
  "key4": "3TiQEsBaC77PdrfvMb5NzWQ1UxXytP2c9anm2HGpYpvGaSNyDzVwnNN81teQ6jgXyQEJPfvEvBbhGnFZYxmf4Nfj",
  "key5": "3AndinmUpdG51JiRcND2jyFhqmkMGegWSrK4eAXhGQp38GNJFHnmcEGVoaHJna5ETCXgrvyKS6RNKHuEUmrpFkwx",
  "key6": "39Ga3GuuKwRWNNDBMHo6cYiVDMfBiakfpwzgbQRn38vzp29KXfrDGb1fLRL1k1Zwx9F6rYoWYWqtFjpTKKJ7oED4",
  "key7": "aVXPCQ3QFfs1VxpoSN1Jb9ftmbdYBBqLTA9K1JSAGchArYHC2UkZKJngDX19F6Edms8Q4asMpGJoSBJsP5zF3rN",
  "key8": "2YDYMqupTwXpghuKc1UbbQbgvuR4TVikdwvQKaajvcCwBJf7hVP1ZK3RBDnu3m5zGXaoHooyjUPwJXX5Yv9z6NGc",
  "key9": "2Tj6oK8x44na5AaapvUedYgQkTFFbTDxWHgU5p4JLuU7UBtQ2QgYkLUKN2aKducS6uXnA9xz6bx3ZSQVFah4TJBC",
  "key10": "3RazjK2o3zgkrVRBZCmP9Z74PBGJ29LnFJJTdgmgq4GdGS2Bkk6VeAVDhqcvHP4Hj13JZxUrE9gELhfmdGkwV83F",
  "key11": "6GG1DFFxJHgABkrfgbn7BwmBvSgiUPCsNPHHtyf3eFNj5JHyY2H9n89mms2spU9HkyNok2rA9buAMXmrW6udHcw",
  "key12": "5MVkRFmmwB9vpaZHBXqBFiK8Y9XhT7Tg5AwMNuw4gtmRqbYetZnFmFwyucK5C1xjkGUHwXLxWzsHGcuZkJndBaiP",
  "key13": "3k8dzwNLHu6JAAWsjbvXYxr44WKD5Sva455vwjqZGzVeVb2xkewmdq7twdjY42iRYD73MF4dJjHwuXXkcy9t6WXD",
  "key14": "2Vq39AW7SzunDiKjNhNB9PKsMK78XcgjPovZFmWRw4qZMqGyqhuoA4Aa7Quiuo7VqUcCkobo1tMsQ8pEGu2i1Rpd",
  "key15": "63nzHWEsLUpTpAcVZTnjhVnLJY9AAa6jzPhzgWC5E4bP2oB9HWBXmZgWDMYrpwEaaTQXo3ysjBJPv24iHa3T1x7o",
  "key16": "64eQkUKMN3tDvgLhdr7TNRaiUJCykiVpu5D9Sh3eJba7VNonjabnBpukcYr1Qmbc3oMzPdJYe8rqGbokSiwscpog",
  "key17": "b9hKAw5AW7kJtfyDcKS2p1y6pynNiwbRJiWp8YnU2rWasmnAw2sMKqWgox6JL2K1CRspcGiwoDEfos6LFFFBQLA",
  "key18": "5KRFBjpMPbQo9xuGonREZWAYm4jiaCVYyRzB3z2QzXx8U6WfWUpUsyH4ne3H9amUb5MtvfzwhG12GkdWE49b8Bkm",
  "key19": "QnpBihByhWKsLxfeehz6vanhmDpRNmkQqo2Gwj3MZ5QrVW1Q4jDcCWdGuSRHurA9JT2tFAC8PfCLmTYMoDci53M",
  "key20": "Ea6LWiT7c7Wi4bWwbyx4CqcZ6kUooxWzyWcCxmNk5phnNZbu6EWpugKUggdmRRXjDBkKDMiDTaTbzeTpXB1anvT",
  "key21": "37hegF3N1vXMyznW2KGVHSYpqBDXtPAeaU4yrQAZTmZ1xjGM1JMkx6cv18D9veooEpTNDoRzAvtZ7oqFHY31sxgf",
  "key22": "2XUmcTXuq4Y5MTi3nhpUsh5oMNhZct9zDDU8zpYoeQaneaLsEoLRuJZFBX5acX1RZ5z6U1aHTT2uBZeubpq1yFef",
  "key23": "2LBfMiRnrd35GTHooThLKajRd4sFDWTyi8sm1dY4JPHTL82UaTSMjQTbiuWS9w2kWfhzTKBzMrG1r9h1JWudu1JV",
  "key24": "4MUnjYxLpTUqNtAsiEA3Yoosqa88oYyrnTyCS6jts1dcFkcJWXoBY8SiH6FoehjptWiKmojq3JKHL9yEDacKYrvX",
  "key25": "4uxK6KFz957cTgcxBF7z9oz69USDDdrSUzNYAqtsQd57pevCB3jQTAEvUYzqjDDBdbituURzABmAkx73PJpgDJqs",
  "key26": "4r3m4F8CdS1n9w1f9xAgS9qjcs9vZ56cNe9J5Qj5JFJQd5QLgH5AFT3WtGMfYYbCgmRzdeVHFwemSJY5E5A3mVk6",
  "key27": "3W8EzuWs1U65Ye45Wmo3CdKnZ7GMJzYcqhvvM8MtvNzTZbRZLqRtPFXA1mHVBXa5aaLhvc6jCUxz4naZhT1eUKd7",
  "key28": "2dZgdqnV4SDDmtACk3h6MappKow7AykC9PZz41vhTi1gQNmhz5JSdrdZs1uNYA5qzecvx759aWvrx46gMTkT7ugn",
  "key29": "2bU8KHM45s5xPDQi4rG3vgPgm6hL2sfDMyMZWJiTpgTCfsyFbTBxEs1Qv2dSx61QsGmxGwcYeoMLkdE3uWYh33sf",
  "key30": "2zLipgxJZRJPhwdUxcEM5R35L27RCbc8YXnn4QdT3npaVYWzEWf9TbE3Evo9J7sBS9rYYsqxcpjiKHJq35SaH32L",
  "key31": "5J7713jUCDDw9LyXuZBs43GJL7ikXnGYJ3TD7tTpe5q6fJBVmRJrUqrL5AFLkvwet4mSfNEkwDyCwgraoeqpzhBQ",
  "key32": "TM3t5octfY3bJRHccgvUNfVMtJmqD3DEooZNFPz6KK7UQvMi4ohgZW61vfm2i6psdfT6R9UDNAtGVd5HLjVEvpC",
  "key33": "5bHGm5YoVnPYd7EnMz3oqyf1QdwcSkaarF4xtd3mMmPNWe6w8SksxnSs5TnGn2JWtrwUcQMrBGi4tTYMv9WRrf9f",
  "key34": "4D7FbzHDQYJ1XXwwe1e4tW9uuxe6sHi9ighZHxzKGxPUQ1eMp83t4nKAwgLbKe92UxGSf99npM2LteYnnP2VzzhR",
  "key35": "4iPWibAjuv97ZmaHsHAG22CB25DJ89aifVJwSZN2ACj6qHmUViiyGbvMTLa7NjGQtV6ZDfhLn3yX3YEtVBeVoXBY",
  "key36": "ap3VxpG9bpsiLKRc1HNNhwQyFX32BbRdkKw1LskpKnGy4UYxnfvdp4UhMPzMX9y5E93JN1GYVFkAbWWFgQWoUiJ",
  "key37": "4au594j9M9d15pfsD6dm4HWD1r44PCeUPtGtgXMV8doGfNH1n1iD4bNL48BNgCuTDcPwRuA1i7kyb7BrDejKxdx2",
  "key38": "5iEpiHuAdJDS1T3K4vnZZzmHwJsSdyXnQ7XECMz3DNHNLNGaQZ9urTJuBNCqzSjqGkij7MVQrpAUKHLBv1KJGmu6"
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
