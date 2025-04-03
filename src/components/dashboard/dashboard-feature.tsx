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
    "5zHXWzVLtJjWxK1znoemfMwnEbUAN7a9mEvkXHXH4DJibApJwhSBFod83WdXEVVo4f7uc3DJ6GER45QbYp8J5aqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RAXct91HWt3Ki4jvv2af81d7dJGDzFAe2i3kkz7dJFFaPGtTVMhEUJZjTk1B4wZRQAZJQ2fCsB5aaVw3tgvUwZK",
  "key1": "4cdpQ7eFvLgJUVgWWPghoD43q2dymrLs9UfYWtp46bZ1koEMXmxR8E4tXWdSS28yKc4FtxvAYZTx4UzPpNjGNdaz",
  "key2": "2vvM3cgckF6Ecpz8ouHzDiPTdtf3WPj2QSXumAVaWNHsMXhnNfuspBgC5ta7Hyn6T1hLrk1514tEb6i7X1HArF1N",
  "key3": "5xudmhRVMoVDuYcPepXk1VBjmK3oiN1hLkSosPb9wujNqXavrg7PYrshANYFy57ptT1iporsHhmGqwHSKR76RQf6",
  "key4": "23PMCY8fJJxp6K2UGsErhQRu6b7csRSH8MEu24GshHdTeJknR9s6TfCxSNKTf8UcZ8Zq3hVCgCemXdSQWPJzFR6q",
  "key5": "394cD4K2zjrkhQkjJLzX2RfHtNbCbbikBHMdvK7WRoBD9etdbKM74QAK5HoxoEBr9Y7egWeeQsJ3gKGj4EibuZU9",
  "key6": "4M6b4paabfWLdJmeVUEbVWmaoUS6t3eiVcT3LqXHaRWzsvcuJ6BaMUR89mpBk4N6ZFXsA5ZVgUV8HjFjTYt6Z9L",
  "key7": "pLgHskamnvHdDWKPh4v7Capp7jRBn5UEckrsm7VHmgYKW8QvwErAWx1vZZWoGVBeM9YNVWtt9sxSKwtUNcokiTS",
  "key8": "3joqWFPzCxqd9iVLmeLvjH5745fuXTV2s3VyYCwNS1DTAVPrXyErBgi9aiZECzpBdeNg6yCanWtxFSia4AVyhhYF",
  "key9": "4LhBrvENXmxJQDtiBXdzzGG9b3zumPE5PVnHxx8qBwHwMHSbr8nUatXV9x2QFpnELnaPqfSj69j6DWko4Ewg6dUw",
  "key10": "4x2a9Me61B4E3diGqE2qPoyQQ5JGcXZcfyQKBGvDDeEo3nmEYB5ZDfEt2tqE6prLocQseaMUNHJrxSv2XXCDcZHr",
  "key11": "4yyKxBcYpA9E6K8Mn2YHkjcFrCfZW4FsKTAcRJuAmQUKCqNQf9UJ7iyZhQCYnycUJNtKdarXufZC7xUPMgDMR9Gi",
  "key12": "r4zgDW3oNjRiTuSP1HvcxPTeDkUV9fa1XsmCSKDDwSPS1La8gN69bok66F3aeSSYggyD1sRZ1NVh6gTN3T1XnJS",
  "key13": "5ix1cugXV6q6mDrwA1hdLkhMXAttpGH8utcCg2rAEXGa8FFMQNaw3S497CEr9Rq2EYZSmdpFPS35tfN3NqjpJA8q",
  "key14": "5BvckrQZYuZP4tgMaFXhfuEwv48sisB9sRXjWZCfWxErwMtoqP7BhkqntJZyfENTHspxNWFZZMPLmCquyaoyMSNf",
  "key15": "3ct75BQTWs9TncX4nsWADEqzhduywkP1M5kNaFQzY1EGH4SVfQYyjikqJraCY91SUe88qfKH3BDfKHAerv7tu1Hw",
  "key16": "2LdHxTULHykQJ8yKjCs5t2Zj9yV6g9sT2K888zAx8GZXcrVGvzKPBTumXnjjppTz3kouk7LTVfi29YKFBaxUW1nG",
  "key17": "4XqkRuNHVBJhwrmwAKxGayrQmdq37KxzXey5KeKU5gFVR2WwNUVAiiACK4LQULqjPc6MrKJgnonj1ikxnQguWAwy",
  "key18": "49xCogvNVdfySigSsXeTjcJFz4JCqqqba7S8nmaVEY7zPdDEL3dDg6eMvsN5GUjh68RwYxLeaE45SawHCpNE1Dh3",
  "key19": "67qvxwsYFM4B5bQtGbej7AnqcAuPaWRpEr7pRuVruaHbZaAMSVdJLc9oMmX3MtMfSm2tCT6qgtuhuMtteVCmwe9v",
  "key20": "3CkQQCWFcZ7Sm8ekQeE1drHfBFhWYjzWXTCNZB57ttRrL7vBo7YFJUuECZnpooUvWfuimZNLXRBjQvSDJEWpbN3u",
  "key21": "ZB8Vw5LqCBdteUtbqGGGWUHmEsuypZwFPjtqP5Td1LmLVz6DhnLbwcxGDji4UP89ueYHUR6XmFLPBxRYLxnVkAJ",
  "key22": "sXY9evPJfva7muThgvgjY4w1skDFMJ9UbNt3gNi66P55JqUs3vnrrdCFfDix1SfGqhkZe6FkD7tPs2ZeeLiVTKi",
  "key23": "457mVXAGtZtEAjvtynH9Nu3ViLoPTXzA9EZUvdYWyg5GMZtrtCJCtwrrsFXrHB5NVzqSCSAAAsa4GryLhqw1a5oc",
  "key24": "2uhUwm3wMimRTJw7a5VVVuFzPkzNsSusCus7XhZcCVZFL16Ws522pZp7Cfe2bEqTxbrTmxuAANbz55SPCLDiyg1D",
  "key25": "sUfN8T3xKt8tNjGQnrjUmz4MZGWpCRq1FBGMF8xyNZqegsCMNFS4n8ZTkSwuGW5e6sbMWJVwB89W4wCLnSY3fTg"
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
