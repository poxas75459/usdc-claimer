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
    "3Tf2263khcMW5rcLUg9kMJ8exNtzA9ieUaZqR2ag3ttFDKTTdD6P7psTLSUToZMUyEffQCRr4HqQ2DPHKjco1rgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sydo1Nh3m141xpmSZzWeTsEiPtyo7CCW652GWrVe5hUFTyy6R8urkqGZM8YB7LFp3eorRPw33iedv9YrjQ6EDPF",
  "key1": "5r3NEYo5Eq933kqmsabLoWfUnQfFLVsdFABWe3PLMd7e5kSCrtWio2J7hg29qSWcmA8SV9sxesZnkRM3qyzEDwzU",
  "key2": "3HrRrLahUzqepxte93kTiNLZ3Ts1RW4aWwN3tDJjs8k45wjT8xsPvPCaoX7gppjkrwTXYwQs4wkaAd6bcB2cvqLB",
  "key3": "62QsNrqXaWNFpbsC9C8BNHcmC4SHu6uRnbmNW43L582m4KqqtSiY174CM7ea3CzsiwyBtT4LvQzX39AMZdZTmyrN",
  "key4": "3ztwm4uGdNE516MW9J7KAG2HvenGpPkGY8tM6D94fcEuetc7f1n5vmQ9RMdjhvQicKwYoefh2zghsf7EXwnu6vLB",
  "key5": "5nFsuxdjE52BHWsaMjD2d7M6D6NZwmA78NGgwuZBxvQaqP9hLhLd9XfFYU2CGdKGz5xGMrUUiEsnhRPfw5Auc3L4",
  "key6": "5ZjUo3c8ewCUNHGxp8uVfPfw9jutN2qVTH4RCWRw644BTfmcNTR4njYtJjgEcWyDKY3hn38Fkr3sFeAeUGLtPKUT",
  "key7": "3JcY45oKdKb32MnR4UgZ7pBwhR67T3tcX2m5Dj669Yv5PHC5Dt9ve8T9ZogV9kfWRPJtJMFnSgbwuCFsmbdGrd4g",
  "key8": "LV3BcA3GEjBgKcqehWLASEHMLUTJszjtom2hxsCoHkh9RT6fVzEt57quy26XJA2PBBfsYQJLDDpeeEx7kiLWhCj",
  "key9": "KBVjTBtti7QA8WogDqQWKbU5pJR7xrFsdfZsDpxaR5SpbUSyZUva7Lt4BPj6NJf6M3xjDE3R9JqGnz5Piifi4sg",
  "key10": "4Tg93Wtzen81ms2YAvkWGyDTZS2trW8QDQGF8zbMwPJmh1o6e5J2cZTEZdhDatwYeGQebbMxFafeTLAqRwHeWRdD",
  "key11": "32Tx9HGjVcrFC4h6fPNSznkUaxaM3i7128fSjmQWizdPP7Nu4dEx5AUby8q14u76haMLFPPnTfziPmYbAaU7WUgm",
  "key12": "3FDj6nfrtt9tiSt4uWEs9Y1RkVkemRgRsuzxZ9NjqbC86NvFf5eZbPPrB4iRNuJDwRBYEaLCKNKwTVDpgiQxJXgX",
  "key13": "5cwq65XohfbSB2F9RkdCDiD5Z55pCkdeg3gePSYM9diE34hC5W6sj5ECdYAtYLYsxxCkcGXsJzJyE7eqwv9vJPfK",
  "key14": "286QudiYeBf3jjE678q8J6eFteRynHPnixyGsqyp6zK8skSxNf9SfGHdSx4fPSq8k3fv7tpSHU7Ai2KxVb2ptPcr",
  "key15": "fHYcCPS5zUBzEQSeHkTut8C9mCUah3ePqxkzrqoxzHH719YZX9k5ErGXqogpVB8gFnxZqyPtMveb3aHRkaEbgvD",
  "key16": "Y7y9gsr4c6gBEj4PUTCWdPAzPc851bsWYDp1UeMmxNTbtrTR5G7HdM4D9XxhPX8xXfk8qHncvejHNsfuAZvZkQq",
  "key17": "47HygHJbdrDSmZRKrcce4q4x1CQcQqh1V8FGGpe3mZ8CwD77r8b77AJULyUBjUoa7XY6SHW3j7noGMNeW6J9gsv8",
  "key18": "2b9E1uo4vQ2m46RYNsAA2S6UST5nccLTmF5bAjzR3Z5s65ppssd4GDoiSWwfc9A8KYmN2ci7exm62kE5nw8go6Dw",
  "key19": "4pRXf7spbssmLntXqCn2AjcyA2Uaat76gskW3k5kiqCo3wzNd8JxWkwHBjE8rwfxtGHQLiku2XLquP8tTrCVsydX",
  "key20": "c1Egnjxn1DiULTNmhwZCnfVzXjwhFitk96nixDtJ1uuKdsH8ekHdP8uq8UA2fUtKAa8ALZ6vGtd7CFWRFbVaitd",
  "key21": "4FTBfj8whmQqUAxRM7Mm3HZd4EMChUNknBmQnbmYz1p69TAiHjrgLc7qgaaUiwADbuUbxkM1fVR9Ui1T4yrpgA4P",
  "key22": "39Kuosdn5NJx7RCeoWiNaogzmhhHJukVde4TLi1eAPKujepM89xXQ7mF2zGekx3Q3PuyMDY2KeuDUTTEgYgscrXz",
  "key23": "54Y9ZNUMtCbFehdGwAN9WhBhiLM1MELqftqQrGicc9Kid5pqJ2iMsa4ttKVq259UaEw9QcJg1pnfA54tViU9hJ9G",
  "key24": "2V5Fr7rXscxzj4vE758vc4yyg9WLqyoVM2QSPdcJLVjLUZh5ntb2dLsDqUZfnjjubyAx2uh6oXEyndTf9HgRhYmv",
  "key25": "3nGHKUkd3ySnsmWQ4PWTFzqs7KnJdQUssJ87fQ2LCgPAWCNRt3bezkw4JxNrninzHmP2fFVLrnZpRRPv1m8jbTNN",
  "key26": "3c9v3TdVVksdTAsiwyejZCfsKwazM483VvWWyfDQ7X58NrSB2iw7Qo121Xo829bnd7PvxPsa44aoFfnqvzojNkKf",
  "key27": "52TAMMXrjaxoXEE4uCAfR1oBaL9ugygfrLzoxitdniLAwv7NkhYiJUh1zicys4b7fhsC81QPRU2Q4GjLFJqgd9TC",
  "key28": "4FVCZ5fok71mBVQdYcQFwxVR6c3YfKiso2iqHrBgNkW7q8TS4X3YK2RVg8LxSoa3p9Aox2Fncoc7SdAVP2pgUX8R",
  "key29": "2trzxn5hth7Ynkf2zW86MHW2LFAiMjLHAjHZa3qCm2Zde7agrgFugfqVkNwPBwb9oGiVRtY2ELZPYjn4mDuS7WUv",
  "key30": "5EmNhX5jTTRsesaTZyq2SNsTAHky2CMVj4m2QJdJfJdrPr4nKV3GkK5tzAkEVi7jnXCy8c1XgRRDAZ3E5KApPXD4",
  "key31": "5DXVf4ERdXn6sj8w69uE7qEzc9gpXHh5zkniZUbbHHHzsMPHiGiXvd9gH83255hHVBBu8GgoLU3Wdxye3oJSnN5e",
  "key32": "4GezGcAcELGN2mRNaregcU8qZ9sd2XnXV7wuR8XgmJgncvqJJRsfANMRqhGYQWH6rX2JoqytEXa1qLvfpkusRSJM",
  "key33": "64EFyxggkb8FJ3LWEeVrjU4Rk6d96HEwBKPX3amXa7z89RjZSre7URHXY6faFGovi6c2DSo8p3j5P4Dd6HkAzh3H",
  "key34": "4S2hp72WLeNBXvdBHAHqp2pGmdr9BBCxhWk9RNMVvLYLuhwn2gYoURNhVkAeoiy1qgGaFEdmJ7RaJPjE3uL9Hm5q",
  "key35": "JZqkGYXFWDSdeoVBA3iPAMbdNon7EZZ45BiTTJyjj82nJjhw1mHi3Gf8pmMQd3PqHSr31Qm5KMANyzaCxjW3zgt",
  "key36": "26Cs6aE1EJs1FqFrHJF6op9oSk6y8y9etMVhqEvh3Mm55utiZvuD43befT53hPXw7dJZpkwZXufMravAnDUsuAUZ",
  "key37": "rXBW4MkEUbYEjM6KxWCPCLoZyUEDFaD6qw9fNUfVdyJrtRapXt67Vr4XCgWxdQU8AJr7KB2jwzNEs3fgYU47XFp",
  "key38": "1TTivyqbM9cgAY3mZxd8A6nvRApnucsurQuTJA4RM2JnV6A52ipVKUhDNv47VwMd4gRcKFyzPqTVYRboGTarpMk",
  "key39": "5C3TtrPk1vP1U2WWpguXKTu53gwCoYMXpKR8ygyQc49jqnx2a7CLbNvnr8WHvA9JAfkomEvd1xnjWKFTY5VuKrP5",
  "key40": "61euNgoXfkPP4HRyFqiLNDXQt4RQxNKTd2Ych1Ur9FQhdAHxUeWAx4sW2L3MwFhTV5JKKxAAGNNYeoJToyWDxyKr",
  "key41": "4QBotBV5ePdFkJ8MqMeEBmsVnCbpTAeekztmKymjpqUrdH3EJe2ryj3a2fwLZ2Hq3UzFf5EuKLKgc8vSYHWUAQrE",
  "key42": "3RfTFGdSjDfCrAR1X7zso2mEpo871HzEC3b211w1k2zMoRbnqWZm91mHzwF2Uer5hp7t9haeeiGCASL2E6eycZve",
  "key43": "46gBELTjQZKbtDwCkbvTVDkMVUt2ngneP4w8MBqXppgUXF1xUV8NWZBTLjEwsVyScGzrLs53hWtefSdEjC4nEekt",
  "key44": "2q4w8Xz6YTWsbxq4r5gavkmasmoqWXxYWH333TfuRmL7ENtd9xwUqxg4oQZX9CSMRqE56KDL1Q6CvLmMcQUsqeqV"
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
