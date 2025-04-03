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
    "35zryeL2o7XXNE5N3uKheorCRyXdiNua75X9jCZ8gLbMrhqiqrTcZkPFhftwPknWBRMhK5teKheiz6CsxBDvVj7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "meZ12T8ZjbFGZAwjpnM39rii6pSSdv4PweJzHndRazt4Hf5TeoxJDKqBrWHDGX5ywLwrgGe45pY9RH1skpFJSJc",
  "key1": "5dZfnBJ6cWYYvzmF2AZqkpTMJS8VydeeQ2ysHwmFWjLC2Hqqi6rZy1MMiUWyV9EZo854CGUZQgSC8CV7jzYHpwye",
  "key2": "3F4d5BciBT6FSQxSDFkKDwqx3TemRr11Ctzw4xLQrCnjcof1J6gjo2tSq9BUFGhCP3hhCxKkwt1VbrED67jiiUUa",
  "key3": "3b5HH3Gt3YvMeNTHgNunv4N6jBbf9rBhE71Du7fL7xuadr6CBaWNcQ2278tVfsfQjhwdbnXY1aeDnhXPDYGSrfu1",
  "key4": "fsvKSsfPDAnf7hkXTnT5JACWsfwMixn4vmmthCuUMvyAQPEZHadBjGSEpupHmu2AbAUXjbgxpSSH2bgq7p3Y46v",
  "key5": "619QAbbP5CWfWUFVCCSUc1heoyXZ6uJMy7GRRvoEqy1dRAkvCRMKeXfbdc4c2QQ46z1Ji8HYsxVzo6GSyPcTLuVo",
  "key6": "3dLN1itGGDeWpgm1RTSPKn5zrfsPVsehSe739TC9ACvQBaCeKxrHSXeS3zD8iCCVZasC8rbk8JXCN3CxQBE93w3J",
  "key7": "5NrayW4GmkLN3oPTkg9Zw1LFHaw1jJzuoQhsELt18stuyM6T6gUyviiaUrzSH6xoAgN5wxiKKN96G7sTWxKmamyH",
  "key8": "5sm3bpNfRwkcwoQ4iXyAKSkzNGe6ZyUJY1QsMPK1WEX73Zj7biJBwAnKjiq5iGFF8tuipyibpA3EY8EiCzdvVRdr",
  "key9": "Vd8Xu2vykR4zubCfZoLxRL4Xyt9dBWrjhWhz6SwFGkvomtvjakidcTuee251pFcfHPH54KRk1zcU8WDX5GqsVFd",
  "key10": "3y2wmZzNhHhYBGm7PmLpqUVsRrh1Mcf4wFRZNEom5Lmu9rvtMABXXgNYTgLC39bZeiyLov8KhGzJudaDbj8g9ha8",
  "key11": "4sy83cHBoF7R2qMyNNUyEf9wHLh1N2QnhRsjUb33QHyPr9MphUsfiZpi6Q9xkw7bA2ZMfGabUZS11cmYrWnXQ394",
  "key12": "4NPvQgKRbwoR38ZQGKLN2C8HY2RngjDzFif9Lssx8N2yEJcfBwetnsinf4Tu5yMbk96pprzhrM4bqNW1RGPZZM7E",
  "key13": "2SNrTtLCFYAQLRUChHQAREt9RP472Nq2SXGHcbts4WjJHmKSMJ5a25oAGCyRcoMMjE6FDteVrg7c2K2Uh4u9aXBk",
  "key14": "2rwEhQmqYgbT2UgnuD3sV6sAzhR48jmR5n542gh7kJVJZ2XcG98qBBeECFQ825PjQhrqDebPWP3BJGhRGeS5o2G6",
  "key15": "3NWdvQCEB7ydY6qoYYcdUFiXbYN9giPQBv9ay8qVxstnAhiJrsnVsto87w3AN19HfU3iEem3jbHMX4NiFZhsf9o6",
  "key16": "3SvDDdJ9RpbAKWUSgkFsLdzVjxEVfiTfwDRVA8E6qUtKovhBryFB4CAuTy11HyyLLHaTETMifiQMfS94fC1bRGEe",
  "key17": "4JQbfFtTfi5j3VhKp5q1u5twA5Qx6jTqDtLJbShPJtnT6t4LhbnVrAFubvx2yub9audY3UBYXPP1SKSehB5neciE",
  "key18": "4fet4JDH1ye3ZmhnbfhC89J32wuVL32DpS1NNSWKb9gJwTD1BtFtm3FMD4QfHK8QqSv2TMKGxRWKKtgRmNyXTpZh",
  "key19": "2ngVWnQNJr1kRzesxyQXJjt8uh8sv3qCEVSJmUd7cTsKtJe2BryENXm2zNQGgGkjqw9rMnJu4bDwvVqumWn8pGAT",
  "key20": "64SxkPhEHtEpyBtrnp9PMHDLC9nqFXoofn6Qij8az7L6DzFr4JyNrtysYKU5VYnUeX5RtUDAAC6s6HrwdTnQPMY9",
  "key21": "3HCth3UCjS4Vx3oPRYNSiKzgBJj6hXuivLtzWTUhDWsC7FVrfJh1hzXiANYrJ4gXfb55H2neP3EJH9oZdPfNUvp7",
  "key22": "5HutoG47Vpdayau7owPgUte72VJUkwvnit7518YMGjzMP6pH8XHwwTawNxbmU2YQ8TvYNg37yV7qzjBWxDdgtC64",
  "key23": "pVKbZYHygeoCkq6PvEXcfKfxy2AacEKBpj2SQ9z5dztDj9X5VUKYSVmdAKwc9cvQTTnwAGLs88fLRgbTMQwTHjr",
  "key24": "5NR9aPhLtiXi6kdWLjoeyZmLmfrJvKe84cdM2ca9zRv2c8LYd3v9TsFyPKvUPKa8wX2xZsLwW3c3oywh8zsZyzdG",
  "key25": "4uPmiPVzBX42NBaDt4fGDe7DeB4LWBZbPsxRye4RGdtYHLt4wvq6c5WYmYEXdCmG5UQa71iYyN38VH7PtvLpNfpe",
  "key26": "4jn2FnniLXwH6rRUJGzm3Uv8onvec3XNv2V6Pc4k4Be68iVkGHhhwZPYCnxveYuEGXixSPvMkrhLEonEZG4W22FH",
  "key27": "5cuH1Mu7AJofdF4wfW7uUkv9UWZtwbeSXpKeqAWub6pbzuQUbGzTwdLWFCpP3TL1N8j2tJD8degmqo9XzyQHKWbW",
  "key28": "f49E9uTdjsxsubpGNMVpBYX2ctab2Yy1cZMU1MSAMwh8ZWagS1XNLjY2BxPpgn9eAkBuhgnyzTBns6f4rs8wZ88",
  "key29": "46miTo6pwXjSANJ59kUdKbmWWnFN8WBt6mrRJbMV6gaHezC3431gbPyKia4MeyC2B6qSeAQnX6AXCjFoSZt5gYoE",
  "key30": "4kZgsM5UnihKUEnyLrmMzqDtj2gUhXQwXm631hFJwbtEzYSiFoUUy3drdfKVT28Esgi79ogR75DxrpFPL2TNvUJE",
  "key31": "4M8BFFu4grCnsu8W111jKpoUmA6B69xKN22STLJb64WB5xbLzTRHk4AZdqAjyNSLMR8EhdB8zCEMXRDqgq9N7t9j",
  "key32": "4CaNgDfJSFsmVqCL8cpsL7v3CZ6vdmy56ffRn3kd5U987CYwMF7NcZysAtMezvExorPT5BACAmNbJNYe3fmv4wm1",
  "key33": "3tf9rqpt4FVT7H9fHGy6vndEhYNUZWZzNymLfzCx6jBSY7UwtzFCW3i8Vb33C1VdyhfyEup4LpL2K9s7e5G7CViD",
  "key34": "53tGG67coRNtaXYGtmBpWFLMsPmdnk4qozxme4MqaAmUyHE2brahyfzcMMx8mArogxMcH5khDrW6XwMePXaMkYqC",
  "key35": "5zWEkF4NLw3XQVJGG4PtXPTZNfiCjDNVk8hFviA4ncDS4hYHtxtTd1Bb3jkwCj23jihumP24tLA2LgATDyGDXUUM",
  "key36": "jCiRPaqtFM4r8vW952vPN4sD3MV1rZgzLv4tTB1UsFSKrmLx9pKmrusb4U4PFpJk8vKp47zbMhisW9CyYYFFYKY",
  "key37": "35upG3FoU6gY72fM2TDUmuaz4thhMGaJE2r7qRZRvS51EVa7MvQzAUF855DArPYQ4W9dhzboAk7dEPwrvC1rbexT",
  "key38": "cdwQCXrD7wZJ8VgkwgjKpaLx4bj2hR75wpTZBfjgKxGKNGAHzBxmiXaL6AdRpGPoBfxVgngKadbKK31X6s6CeoB",
  "key39": "4XpbyiiSc8pRs4eTFEC5RhS1xPbKa3VYtgBQiBUWGBU8Xm3shtoSLusxto1SuXtYzy9u1wK2MmYfiyGTBvLNMpbD",
  "key40": "4YeM5x6EHqaTGQiRkgNEWX45S4at4gqiyXwWWtZkxJuxQgbAewurpUhSDS3t59c9BP9xX3YBCjhAxfZDTC9d6iAr",
  "key41": "3ckcsFutEnKjXGXY9Q7iRaihm6FTcCxEsXn3qi8J7Cayj9i3gpi5JQQEMEXyXRG8vZU5xrzTpFxFJ2xu2u1QPMPk",
  "key42": "47nJMsTj4v9dexL2En6XRwJAH2vNueREqLXZxBJPmMp9EMpqayxtY8oEc85YrymqXpT7MpH1KMxq6afW8wdS8gGt",
  "key43": "5gc7rdE5TXMNCuWwNcbnP8TQS2baBLmXh1sC6v7MUEe72rJmZ4jFP3bxUXyj5GmBFyGN16ZY3KUDZ6KurpTbDMYz",
  "key44": "2mu8GMYSoaaUhDRH2Yi97H62HuNnEzt4dWWzQNDtL3CAnu93qM2dny8xVVukFi6JoH7gHKto43pdzreDqEqAmFkk",
  "key45": "2wM3rX3c7K5tzCnZWgzBJjZicRw8hpLvuqPisKf4ZyRLfvTmgs7HBkXAMLW4Z8ZJbnZa9Xc3MAQw5UP2jPeTQ8yZ",
  "key46": "38YHPuM8EAuUgYQCL3PjbSBkt1Yw6ouUcNRFANEbatqPUzDxYx6zoMHNFNQVVghz6c8AyJvuTDFUYHbgvw5hpZn3",
  "key47": "zknEyRf79nRzQSoCUCqWtYL9H5r97Hwm7XzxKhyZ2fim4KiQuYFVsHqPscZ7MFeiKkgNB6zFNFvBUMVrHq8cDz8"
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
