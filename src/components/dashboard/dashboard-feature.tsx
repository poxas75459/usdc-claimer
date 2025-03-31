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
    "o6dyHFn45vL8hK2oqc5heKqUWhczPzWYPvZsKVPq9ioXPjX7cbTbxiPJFbRBkByas7FH83EQb7RfYgdfKDErqgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gv8ryWCsbiMUtyeghPxDHwedpAbaVtrPKrLEKBcEBS6zgf6rgvqZXYfcmKJiEcSqdCPJFrh77aeeY8XAb2vWHZi",
  "key1": "24c3bKK1oz9DP83dNCauuK8Y11WtPr52h4Rn7g3k3sByspbXkCGhtP4UAxhckPNfaK7hzjsA6TVBQ2JzkiSjbXCv",
  "key2": "5899ZjXRcoAP9FaJXThEoCJ8gF8qMomXHNeuk766zoVm7cYYpMK5tz6dfKDDYQftcNPtNPf8aLGjMnZ8qt5eFxVm",
  "key3": "dfn5iTv7WMZUdpNXAQ3rT4ohwVx487n84JW4D9WfvouZFJWoHs78sAT9Fkpm8hE8De5MMT8NX1yV6uEtAczDYVS",
  "key4": "eaFHnUzWz3p8ChMYSumqpokaqF4G7B6hmvKH1UYFdtcxR3WwjrbBGfTafSe7HSWovXfve9XqCpWQ8mQWqwEN1NF",
  "key5": "3U3kNif5zryNSdUdQwDuwANLdw83AJ8D8ibWwq1vsJa9ZkxNfxZkaorDMsBdNcmRNb6bzRXi2RFNiQCieMxc8puS",
  "key6": "2LnfxdooohDFKqWSYaW1Wjq88v1i3dpHss3GnmXmJig3s8qqSPVdS5ydnuaJokELrH9gN6AQsCp1eDYmaRtnRbcF",
  "key7": "5edz6K2UYGhRGZdVa9Zqj3yeCKYfobtn855V9AtqFupb1zhroxL7cRUxCQnc9U9igPmegiojy8aXzWfGds12roRA",
  "key8": "3BiUkVzqLQTU4mrcqPCX5ZZacX97RxZ1XkDcuEhfmcMW7zL7iGwAo98DdYWZ8yar1HnKqwEjwq7gKJGFi7NoHzih",
  "key9": "3RpgPW5djKS7JBX2SMUswikas7Jibp7VhRayUVU2yZYpsboiMDY3LW4a8xVS6DZqucfoGiQS4au5q57V5zrULGCT",
  "key10": "283q9mBJGzZuMcoCyayvr9z6RnrZ9EsnHpKKNEQP9efUvEaXVKXRXPYqj9d9DgRRgr6N57DECKnytNsjsJJvUzg4",
  "key11": "5JECnTckjaVE9sveMt6WimN573gDrqSpucvFW26nqW8RFa7MdbuxHGWPHH78hMHjwTzZQh6QgwyKKwZ6tT3nnFRU",
  "key12": "4BwVsvs7ZY9cxSpztuL9Z2vNjqbG7GD8apXB7YiY2cHyhHMpRGnst1UCnPrX1Fhp3fY1qpsZ1Mr9s3hrJU2y8Rt3",
  "key13": "3qQGbheUssfb2NLtzovfAKkDa25gYAYdks29AZFyP3nqiC2iP8ut7GD9riQVkH96hE2bfnSfPjdQDgoyaVNBqtkZ",
  "key14": "2XqRRCWu9ZmcNk1GrCYf2Sgh5nbteiDCFKndiaEygimgbxM9XbHPzr6Se51wZif8jCzmRoPnZkckbSQjW3njeQth",
  "key15": "4gZ2hdRJSSknuzuv9z85x8mhaEtrpkyeN6ryciqVR9Xg4q7rti6KDL8C8Dvbc55daTFiMh6gRuULPvvm8AxCJXWu",
  "key16": "39SxE6sviEPA1Gre8LQeeuG6UvRFAcyLggWQqCEaphKiEHho3ZuBtLEge5uc7PimkEe78VyZrWyxJhpZGv9QscD1",
  "key17": "5FX3uKkYwDbh7z9vZwrdLqh6CwViFuNQTKW27sexKfhq2fkaCjc2ideoDcwNzu9tXGtA2X67gqXYoKTeK7LfDqJd",
  "key18": "3sdxmS4RYetjFER3ADyAvv8xnrDrAafgqnRGTMh7Vb3517aXwXaYhG1pnQ19HDC1PfmraxBkVRcfy8dkquw9WXVb",
  "key19": "2AdLgbMjvXYuoNjU94ewtbG2i5eTEH6x9r5XBU1P1L36kSJQkDWrPCVWtAxWTxqsw6dw6vsvU5XggQWGnrakoRyD",
  "key20": "2pWZ41CpYPnWV3tvNYM3j3ZBvVPGaEVcW2rSxervzE8tkCdc9VypdkFCTvDvLhkf9KAKwGMiJ1zH6suqVwBJqzFE",
  "key21": "5UXcV7LaJxTVtZVsQQcrWhG79eWkocmLY1Gs6izTaSscyttFQct3QqiECh1Tht3162yWFuy77nP2VUHcxqPnm7xX",
  "key22": "5RbyC4t1UZn2ADmwTWCf82yqhKuCEZLGb7EJ5A6FGRFhQUKHPMumaDTDVNgB9kEgYo5g5UuzwSgu3oiPx3PDJEgA",
  "key23": "2hN9Mx11BSzvyEZfvJGMiGRhY1bd82CAnWpV1FJDkmSMXCssVdAZiW39zwU5m3snNr4QkQUdBRGGVR6GgoHkAarg",
  "key24": "3cNec4iS6fKd5uDFM66jN5NSb3XXjcSHdn673pUopEGJ6LNtjMTxvNARTmD6g59q8B2pmYPD6yULzD3vFHfAfrEV",
  "key25": "4sq3PTLfpKyCz9HUpY5AQfqtTMsbd6pq3jRHMMmEcMGChWTTGsdKfskRtrHD1W29Tdv1jQZpgynqZNKp4LmFn5mm"
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
