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
    "5Qz83a1TPXcb9f7BG6YTpzip36Gcd3o55D5QckvjMd9RQfd5VFtToc5dD8Tc8M5fsZALQqQz8jMHDj4DBBxic9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1vx26ttfyE2FZYrSfqAEF9YRaVmNVXu3Gpne26GbD1iVyq7e57JDnSwsrYLFgM5vDhofRDn4vzB5XEtkq7CC2u",
  "key1": "41L7CMhwH7vUPSWHmkHF1B4PmYJj9g5D8SZBdFXdM36jjw7SxEe3mEHT14FjbBr2VEEX37MkTfP8ZC53gCyDTz8y",
  "key2": "21MLL4roVEhRbqEsAfSdd9askhdJ9jE15oaU1ALhmtBDyFqoknmiJUK63KicWtNSsDs9Mwj3o2rfy5rfZdMUcZoz",
  "key3": "8zvtYRaNBfunhqp2oNTnKXLjgXGieJmKMhqq8n2JLAqiyKEyd97w6mgLHsmFycDYfe8YVuf1Lzr7K6bb8c93xY7",
  "key4": "26162TKysiA7XXBtrRVBxH6QcrC1zX7CQNUrqAW9x5BHBiP7URet8EqTXuXCX4UXmEcN6uporMqQ39WwJbApS9VT",
  "key5": "3w1sdyrTmk5Hwr4LLxgyKq5xZFykHakG5yARhVMoxXnsF5oKr2wS7AAk1TQB5zffxjXTNro6pTLtakihgMkwD8ag",
  "key6": "AD6Bne7iijD6qRv6J1R4gZE4SNgzKP7HDXsuLgK7GADy9v3YRhFErnTwrovXoLV4MPrdercBMA8x5aXUdynjtFB",
  "key7": "2urY2nW7PY7yuWff6brnNhCkrjHgdEDRuGXA8Fnyz1kK8HiKQfhRLGJEJJ55fsdi6AUu6RZN12pTLP4dcNHBPJzF",
  "key8": "33UDjDFYx2dtKSXDN9mpAqvq3qFvFT5DfmYE1Jo4BGjSXCWwGj1KyyM9D48Q5fShdLZwZ2TsQ5i3J1otoHnKGXkS",
  "key9": "47CTHbje692TRA1MYRQyED9sQDKVjHkRgXaKHc4Cjm9JSgTLFtsgc6oufEzTtub935TkPD4JAB6LhHUKj22JCRaR",
  "key10": "5QMRRV42cWVZa51JoE1c61PiBvGkHcox15R8En85YfNPchpLKenKUc8mnBE9MPhdVj7XC1fCRxPh54E9R4N7SmgM",
  "key11": "5NCtfeQNKzNLJTmS2St5McsfJEZUArwLqfAdrPmurP4KWMGbS9ZSB3WfWq4mqMWFJuV6yPHuEm2x4UeZDNoYtCQU",
  "key12": "3GxssA4Mooe1CSCvzBNAMrPQ6kmnTk3xjdhNMF4GEDa75UcPmobzBiQRzXyzF3MzPh4WruoRJDyDC5CYjwWEJG35",
  "key13": "4VcY4MrVDwaB13qZnQ6UVU2mEp7CUGM8qse2x6SWeuE6YdmADu7ELbhUGrv96bBZCg7WCEArbEAzM2V82811CJg6",
  "key14": "363z79uXzUjFKh1QuZT1XRu5C9Tumzaeo55KSsUVoG6VKmpNkGp6RTSBP7KGyovcNMfJW13tzsmxvvno7zUoFkFy",
  "key15": "4o1nvBC4K4H7g5SH5u6B5mRa4iHnVMW4uDwWfWGShtfNdxoiaZStZFzy8kMqtWrwoU3cWFdjDJiug1fV4jky4PBi",
  "key16": "4ktvmiNiisyTa5AWxaYGF1JuhoeThgm612ntQVWpcRyYmvtESkELRWQr23rGzYbK1r3Trv49HLr5FKUvnHk3V8ww",
  "key17": "2DBhvzddD4wttrHiRvnk5Bq67SzcicqazwRToo9M9CCZ9NDPqMxyEtF7P5RSQYrqdGctZgb6jm7q6sbQkuuhNtUM",
  "key18": "4K6CT5xWhiZ8n5ujgozroSC7tygntZjTRu7AKAHLiTQ8VyiF9CgnBApFX3PKcjzC9kBzjs5NxmArBNms25PZySJ3",
  "key19": "646BSc3SJwQXLkNxWeNCL84LZfTsTKhJDcXPcsc6bHJdTGdECpA2Buu2rK1AdaGqg1LbDTfUFZdgRQ8FoNLrkVnS",
  "key20": "3m5nPcExUrQeWZPyXnQyAPxym7DGwXwqK8q6i9nrp1q5X5pLkpNY1CK48ndcAFH5dgV8vFgP1gM2uS3r1BotBGk6",
  "key21": "2tJoxucQDbsMWRrqq5MwtFMaf2UzvEMJuBnsx9P3DmBD4soegCCUGBj5PHvg7QQWgEuawUZ6LnZ9DgsUUi9jazCV",
  "key22": "5fC7LUDwFUY6voW11hfTPmPipA4z3NQaYACpKHgcs2CkjQUrCkftHMVhG1gPi18ww7g38x8C4vuQwgF6TWnhMcjv",
  "key23": "5f3mHPAUMRc2xAPP2SuwuT8ofQEFYhjWXzaXGjQ5kuHdZNw8t5qwF9znZBd4GYV7ew7nbiMkTjmdBwXkLobVutEG",
  "key24": "3EhoiaE7D8NgkW14nYwFWSQjDjMG8kiBRPBjMMVhMX8tAqmo9zVz1Bd4xEapUjqW8AsV2HpahwtW3Kikiy1J3GhK",
  "key25": "3NvNBKdsajdcjW82PjxigoKQZ15cspRE8mtYMqPws11myKEsPpjRsWMvR2LGF1qssQBbPFBWWA8PJWmBEW4HcuAg",
  "key26": "334RnVg6umUcUecb4JPv7kmwZ1vAXNACumP3cunnQK78LoYB4LTCAiEbhtwpWFxMnoqCrUUxeZLfCh7kc5ijjfBa",
  "key27": "4wnnBEWQigoTnTK1nLoJfYVNiK2dLNvXdBuG6sXwJYUNqSJVgWBksq3XNe4QV5jgCTWbYsuCJgUVXWKQSNkeh5uN",
  "key28": "5tHwykPksp4GsGHKqrntzDVsfDUeJEreAg2FYPca3e48LCzBedorQMTyEhzNgehj23tFbU7UoUBHtS6MCJLMgUiF",
  "key29": "5sTwGrtdXqD5UovYSqda4NgLjkaqWP3oAqFNEauH56rPC8HrcNvKrQFsQ348eNN4JVyCNP4N5y72Ycci7wQaWHPW",
  "key30": "5RsiiJQ1Hu5x8WK4gRV2fANht81sCvGbh2HXMZrywSwnYwiJqvce83HPz2UXjfjiT3RHJcV6Zpvcqoi1TMf1ipWL",
  "key31": "4RrvTqGkQosnt6w9EUCaHddeErBd2gjqDqUuRWvanSUDGXbWa5mfNQMdupCxNPw7R5r3tBycGu79FDp8neP71cpj"
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
