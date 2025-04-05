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
    "4rJJ8dyWQEtriPEdDL3n1Kwvn1prv9bfWctBziFE2Z6wyrZaET7hXyvvnjx8rkumDmMb4RXRkDVcBz2ynFcERJmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VN2KR6rUwn9WCDYVSWmLdZTWexkQmqKK5FT45kmZzuMtktXoLEAmaffMqGnw6NP3WbWrBW9StMahaUHN6ptJP4N",
  "key1": "47JVAMLAafaLRgowtnDAyMjAMnMYAxKawWbQ1ZLmGaV57cAeLToddStDiQp1vXF45jhALgoVnjAfyCsYFK3n2MRe",
  "key2": "5Vq12F4sCUg2n8k1SjvWgvgHw6zp4wycJ4tkWfCzaWTJe6xtocNk336VDNvNJ91xxKpv4GYGgtmt4ES1AuF7L6Hy",
  "key3": "34L2LThomjtsFYiMVxJSjqhGo8BmVuByTi1UJYTDLbZfk1UAQq9E56shPjfPxGm1Bq9xPd7ySKopkgAn8tk7Q7CH",
  "key4": "4zRi51mt2BMFUYVGuBaHYUMyLB47sfmFETsBBhoNVXaQhtsSttJFJ8yYzWX9PsRdYS7fs8fNgg3eJTNZxXg3w9F2",
  "key5": "28bJswmJ9eETRmJSBeDVDmcSqxgbbUtrSy6zDCufPWCXVxbkdYaZKPsHfznkwDCWJQUb5UnPHSF2DfYeWKBaciMF",
  "key6": "yDtCsb2zRqaK6zszFyUvcEJYQg5wVSUqkJchM5kn2MiyqFeWeM3bYCHECiDVeW4AkqtzbbBLjg415imVXn8tVnR",
  "key7": "2f8XTvqxGbwMjnjZmHJwQEY6CSN7zVei8LDUAbUeuRBfz4kJqu2LvAnG6StLXpzLQgaDrUcr2qPstS3egWnyErGA",
  "key8": "3q6paehHiTrbLJMLq2dhmRqpueEsGxLxDWyZFsUcSXfawGPCTvC811iBhakW8jP2CpGwotGFMo1Dy2nueVCUqUqY",
  "key9": "4erMXQ7bqhP8gWfYNucMJdfMcgNhwKTzMjFqBAL9KEai8AkAsNMbVJAPW1dxCJdQ5KtLLHC1B4DH5Q7i1XcdStAA",
  "key10": "4Ab6bSR218kkkPMSKXeNG5gEXnGBygPsYV6nnoZijKTX3BJmqvj2h4oXQsFzZ2Ep4PKC49a41CRAsboqYEURGC9K",
  "key11": "4jLukwZDLihWcXqFoYGTrhNS6Y7LyY7WzbtpFnzpJJqiEDyADCLnJaHiJosJmH6Vz4q3jWybneoCu34cZtTWwupG",
  "key12": "2HaJEqbbF7T9L3SYKPqRQqmwHYKQebKUU8yYrLJPwab1gGS4VrpArEoKtTkyvbb4ncYvNXrgt33Z9m98boEiD6Q8",
  "key13": "4S5XyV96JmQA2syeg5rjbWsrDDiFyBLKKaxyofPnbrj7bxUXZQPgL1aHfLGjp7MSJQYh2eU4LLe1Kwom1GRsY5tL",
  "key14": "37wD4tiio33N7EP2AYidiQXYUbAiN4DDd3qDWwCf7MfQ2Eg7SzhKCrmpLoKALWrU7oHHn9hHYLC5gxGvtwULWXkU",
  "key15": "2vB5WpqH4YmSFBRD2m2goZYvWVcwA2jQWSjuvW5eHWHwFh5TK9TuurhSr3xXQSeQQk1PMsv4JSU2gPmqoDthatHx",
  "key16": "UUEf55LFUmWNDH5EBauM2pCbydww2ZSBrogAtJ22u3g4Sn7Q6V35S8jjQVGUvGrUdmqMtF3Rsugnu1fDTLuV6VH",
  "key17": "34LZzjgCdu9cxW4eiaWxGbJa92JLaS82h7sZYSsqWSeHQJASjG39UQeZig3QVECi42CzfKsjtSm7bzGjtZH3Nf8J",
  "key18": "cxmVwAaRXupZLHJmeETbx6eJrmGmLjnK2spXiTgnRkbjrgmWiu5EZv8SggYpQXBQGHYZhvTP68oxuJ2U1PHNjAx",
  "key19": "2D4THTsmGQkTFEH7SZ4ZjbxRxMzPJooj8W3WUY9aXCkRuH6euqx5Nftpy82ZRNrdUrSvrynzk6cmibo2YjMKuCGN",
  "key20": "2zjeh8S4aLc1SxKXnCcYuBoAqsDFiTFBPM3av4GpDK31AK2aQ8ih9o237Ydhkn1w4s2ZjcHdv2RFQeKSvTY4wRhK",
  "key21": "2VhNmnmcyhLwnME2AFZfMAb5hkr3SWjqjCiqQbzMPvohvhh3drECP3zqRT6TdXb2eBsjAYRhwQStN9r2DBJKijRr",
  "key22": "3PQuqQb7SnnxkzA3WScDU5p9Srq5Lk9rowxHPZJNUteA8CVK1u1SDamiR327bufpBWr7KavdGp4vaTvsb2uKt3yM",
  "key23": "92eT4CUku5yw5WuHZBtmYbKEdyJ8DZ6d69QGuktU42mxrv2GfvLCF4tjYJRgRPxbqp8CtJRaeMTyQYteYdBRnZp",
  "key24": "2L1qocYf7zxxKALVoqQ7kj83NsdjxZ3XH96Gut5U6hcHghEhhH5A1iDQACkars5Qix9VESMnngZmN3cTtZFPtCvT",
  "key25": "3vRkRsC14HiW8HSf1fHBfLPUxoGfzj4heCr9Hc4bkKjo14dk74Gyjfjtb3wwS3uUrFEieiSxRXeodNuzTeBFm1Xb",
  "key26": "3VDwtimZ7GMQkTgz2UiCfgwFM7s2GX69egbhb31idn9oDFyWVvb4XJNWtGDDzNq6cajGH6cswRzyC5qYe85Ksnp6",
  "key27": "3DxCRPJNm18SEv6XsyJUpKD8S98kKuma4usXvG2i8LQ2AT5y4vthx77Af5EkdnQeL3baHnc4vEtoR7193w4rvfZE",
  "key28": "rppPVf6g8pJ1rxafqthqj6qe7WjMMkmuKLEdz5pDxbS9pZyhMNoUZ2JSwdqgDnRB1qZNobJ57mbrfj2Mzxr3K27",
  "key29": "3Lq9Dru6cs5Tgqf76rPXSZRBiAQHUMhX1jxR6sPpeMUDPVBmFXsZN9ipe6ABcVkPgpM8NMruE1B2hm45N4smqRUg",
  "key30": "NonV9KZiq4hTeUzQh7Gt4vwdXf1A7JD3Ax5ici8L9Kkp2QAabyW6Hu2Zc9SeWdRgjJ9kxfTFauEmCxX3oSLQjfE",
  "key31": "4ZmAUpFtRNoeZXHoi2qZFNmmpSi7yT8SHnGbNUfgCCH37QodY2zkFjk3w3iGTvc4oWqkGDW1poT2L2EbKZZ4ES7t",
  "key32": "4T9yeivbMXBMpgxB3ptAxCuubbHr1YmQMoiCFcK87zGcMnF29cPyvcQwYmnsJgDTdD2oSEnt9N1xdhmH3g4dT6pv",
  "key33": "5yZNeiZMh1GMKkrYZUh41w2pKrY36Aq7GURqoMbj3P5SM4BXUJKFQfmQFF7P71arCd4UccoA3VxGtmh1HyGc4ta6",
  "key34": "3p7aTwnmYdMmTbQ1F6LvBGWcQA5wYmKJjQbY75CVijhDtn7rc4FTzEmZz6PRrWWqLtF9vwDNqNkVamy7XkPXJVTn",
  "key35": "35xY2P2SWDPLRLBqRdvTsWqqJiJ4wwLQceFjbBW1QqYLwvxCkd8EpGC6gVxLwMg9G4BrCdasgbqXhoRAYbfwhjG2"
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
