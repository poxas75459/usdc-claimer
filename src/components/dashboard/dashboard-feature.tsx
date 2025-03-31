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
    "4AtiNEqsNeyfvN1YZcScuCH8rHhwwxS2DQnjU8biMak4NGqmAYqGsrxRZ3xuMpZ8R8GwpCSoGgvSiSypDCvEBS4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26RR5sNaGSVYFttac66EAVGSbteC5QfAUQjF11EN45tejPfRmjkqJyzLLUroUmboomdfNn9H8aTHvNjRENL2eDed",
  "key1": "3AuZXWME73yckZknBguZ1PWsYtECHKbAHn3ZGzakE5AzLcUG1W3LXKudU25SZHSmGpsnbkp474aJSDV4aZvfPWkv",
  "key2": "3xNsgKuakMbhR2RxoDvPfn79YsRV9fKci7eiAPQLgikDaqKr8kn7civnqqHGr41TmcVfWt7Lj9HcauVc35vS4qBZ",
  "key3": "2Lm9EF7Rj7dHhvmDRyLcwSLKUrTb7YTepi9jD4wjTpF8hBJVvwZaE1kjnw6EzbSK3HW2tKox5spLiwsmEsM5LUmg",
  "key4": "59tsWwoiuqxU92jby7x8mW6N7famKEn3vmfAY6RMnmyEzTyBquEAuhhKjTvJT5JCp1vUUHALJpkYECZTL2LCFpEi",
  "key5": "4x84hn9Z8W6hLhP9rejhYekNR6N9242U2Cs2WuRwuELsesterufk7AM7jjYG3YoTc2aXciniW5zsURD7856wyaN3",
  "key6": "2WvxzFTGo9d44WHzyn2jPutcArDwMQ8sDChL1cumsdE7ZU8RH5hpCtv86v7W77CHkFbH23DYBHTHif2pvQWDSqNB",
  "key7": "3xm7UpkKC5Z95JxYRds372275T4yFVsMAnaMHSsagKf1gmzLRzFe3hqHGynwHPp115GjSsSCR2gg2WdpYvhDhaug",
  "key8": "2Rn8h1ZcTtDv12zs3ebdwdixyinqknG37g3cWNK16Rw7NiF3WupP2qna6uztcaZtYyXEV6VeLizhcSGQowFgk9oV",
  "key9": "2uRBb4FWj4uAZrHx6n44JjM1ZjDh1fWsUgnF61RfWD3rbR88cw4pFwGdnBvfCmn4fVHkJQAMRj52oFKoAmWPW8sQ",
  "key10": "kZzjaR4gcm27AvRbJmqY97tDxmyVi8KEdKJrU6kdqePJuMzEhAb657x1g2gsaBbNN1kqBuPgH4v2mjFZxqmXAn9",
  "key11": "2s9QwfLRwE5spinXoAmhdtYc9daYCoyHcc2cbA2RYmBRwvZ2rRgJoAybN1cUDjrnqARWLKscgmE14RuC1cLDHk5Y",
  "key12": "5UTTMfRHWAfCMbCSXpSoBAimvc6ZCb4HFrNuN3ZBkDcjaH2xStBvYDistV3JSYMnNkRSfniWAExWv28R7KfbqYK5",
  "key13": "2YsDGqitU37yrZRfg3Ew4yKRuVAsgCNup3VRgj4xGkdtaTyuwh3a63fFV2vHBWpVw3UohyHeVUBtKxT5RxhX6bMM",
  "key14": "2iVKa8WdztNTG34VrDzzKjq7KDfgTNCRYbbbaPmFc1r2otLVumYuHpv8TfgcdAWorotTU9AzAy3s9bsWZuzFYznG",
  "key15": "zWX7er66TZHVGgjXh3fXZWzKSc8rep8ZqZuYCDQu6NU5T8CCK8fwnpejRpW3GZQZFUxmvuJG7vzTcQk8p4TyRNH",
  "key16": "j1Bx2pXWekdbTsWFVtJ1ETBGifAAreo9BbhMCpHcfaPvTg5f2a9y22yFg3u8TAtKFnNGNJ1UVoJMsgRt2oPYrd9",
  "key17": "4nyqWW7WS68FsUa5sa4eZBN3DtofDR5bcsV4XmjGqvKbPJSjMrNMJa3f5gFcqKevXtjwzPnmE14H42jHhLVMLbbg",
  "key18": "94cnUaAS8LiifesVbRAccUMXZXKkrqe2zng8EyYyW6LqfKTxVUXyxbuxA2AesEjwjaNJfopqf9HchVCjVoQEUtj",
  "key19": "5ATSBC6bVnC4gjuJfGNCrcdhysq9EwZKRWf5MpFDSSfdRv7BGvWfBTq6Q52qnMVk6KsNedLpBUTY2j6JGK7EnS9A",
  "key20": "5LsW5SZdv9j1TAY3zapU383eZwhuds8yXmTEQa3SAVVVqdYHFauZEGZj5NCSqnQcg3hJQitMi1wZEkUr8XmXYQNZ",
  "key21": "4EHjbw3sd5CAFP6QbLqZ89RLaf7PtWKeaSkcDkjWa2Qc1g6cRnTCuAzpj8Xq7qz1Fa5er8mmC9BoLEpwB9B7WK9w",
  "key22": "643xdWK2Je194nmRvsqDzQyXaCNrbAQhEo9bgFWrS6C4kUhgM78ecfuYkJFdTzXvnMuGLKjyRPPHn9PeSpqBe3Ge",
  "key23": "Qe9SRWJzKAPYF2iV76bPDNDDLjjw1kBUkbmHijVbUtKa2xC5JBqoME4NWuXD5TWE7wiEFxReC55MGtGEKahVk6S",
  "key24": "5hfRAkD6eTggsPzuJBMdhG49k7GUWR25Kx33oFW3uJ2u6C5TRKT9ddRGzA94kgtYncrmXsiVkXNm5ps87uR341Vo",
  "key25": "2ivNerY47eSNMWxriLRxQCK9y2QZmsWvnzbtU9if4CtWXLYmE9xYgUf1WSizDjHpXfnsHdCTxjTQUYa7FoTfRsDF",
  "key26": "3wHyRu9VbcMavQSnx2kuEYQKfzkoPBR81bHFDyu2BaWWWxSzoEyMNL2MX9s6mFAxgitMCCxSRX2TY2meLnoWH9Sb",
  "key27": "bwegrwukB7137ZajTYygaP8Rt3LRcTiLZZAstqHRCo4W6AuELMVxtugbFJhJDA6mMC8sJiUK2UGDYGEbsi54cd5",
  "key28": "4ifefMctvDHh8FzksoPeaFzxUfpkgUsUk4DyWFd4r32woeagV286pDyA9BThUGMEqRjgoLyPVsV7qpu6wA6CZ8Tp",
  "key29": "3yjovKz6B891nmCayDJKsjGsWCAxge5WBtKbQS2q34SHCZe6YAiMsR727U2EdYR5qsDeY6rXXF6FsJmSXoDxZeYZ",
  "key30": "3tZp1zWgzEY14J8Au3uGqpUed4F575kSowcpZLyZ2WJAJRxCZgp8rGDTtNoiWDgGVWvEoeySwqgDqr43eQTN2wmE",
  "key31": "3XU734r4hHc48Uo5t5RfV8QMv88PX8iCNKtH3AVEVDnegQNGuFuNJ7bsrknDAgQQt2iAVQ2o48fPkyVojep8Fmvh",
  "key32": "3Gg4Ntd2gCBtFZVNmnuE9mr4DUqaWGMn1VoKNtLpQ17P7CY7YTjKamGFrPaiSRnxz5LPr1idyt9144PMRP7oEA5J",
  "key33": "5K3hi8VCbLpA4mgWL8EbFEcgA8Adfco7bWBuLx6BFb1o89voD5SzHnPL9mtCnPV7GWAg5vBpQVSo9ReqasJbR4DD",
  "key34": "3UXwK6zR4w6vBEDb16K9FkTecHctQSiMGYe2HdB6ZkkNUxDoP7o7b8eE8Qz8tjQQBaQR3Mfi9nzyDcwqUBM6ncyy",
  "key35": "2wyNNLfYyHDAz3ttRRugDpjEhcNFvX8RhEzz9xCbTXfBMZcAg43ucundnu7Sn6D9ra1Lf5JozhuZd5eLPeetbbs",
  "key36": "3fVLtqrBBFXp67fmmAhFGR7pyLYWPou5SGq1uBcu3WZ2dXtfMd521LMAwoW2NeMaJR7qPD3D9KJKG3r7zzZPsCGH",
  "key37": "5su4UGFWP83oQ4fDo3vtrV886YS5CVFUArrceTb5qRG7KJEYHzDvhkFZR5TGm2ZzJm16QJj7nMziqvAAVmWVcvnS",
  "key38": "4iGceGTJd6oRZutcDf1XKXugXb4pnBNqpEKrPZF1mHQBvZbUcou1HxV3DPwn32CAFXnhkajbhtY1yu2mV6phmacq",
  "key39": "EdJgHAr5cxn5t5j8f6V1yEADQYHWwQwmtYU7ZmNMhtC3gBVUyqP76DdWiQdpZ7xJa1TigFLxF3WzEkxt9WszGuU",
  "key40": "5BE8BS5NuAr9cMpyALGCkUSekTuvazSj4RhEmhmXoaFEfD2MFyrBcyaLP8nZrCmgUhi6AY9UnBrFzkhXhhuz2x2F"
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
