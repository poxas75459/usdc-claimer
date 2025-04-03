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
    "mvUdMMQk58dU5fB8dTq916KHRAzLhvyxuMzyeBEhw2ptxvfH7e65LcT5C7m5YW9gmXoixafGSz5cnmWj5LWyZ2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w75HfeS4BWWfyDAAX7PsZnAzKVtHCzTTfgDuCDPF5VYjC6hRGP9m1SRPnjJYuJmP8mXZbKdUzG97cGrZFengcfr",
  "key1": "4J1rAELMSJzsLJs1JnFG1635J5Dsa1gPV8UeLhScFpUZZijBeCqbyRK9AYB92hCymKP4ojiA63AQr7u1SAVJmVsc",
  "key2": "2vdBf8AZH55okDzvJ52kvg8zJYoSUQkRXddGz3sMmkRXSKsKi1pZdZ6qHsWbQae9zSFxBnRjbFsk9fLeXn3vrCTU",
  "key3": "48KjtpbyXzFbY9TZzBmUHkBuq3rCteEPc4MdA78zj5UMvTUuuT67J36F93qGXu6Pd3d8GC9qVYKWhtH7iJtxiRGM",
  "key4": "2UVFmaNMAqp6wEQGoC9aTMZ7mo4haxRrN6MfjsrpQgBi6eW1qV8EFAYUdTuHpEdKLc5hMvwMRw8xrfKpSAd3KLY9",
  "key5": "5utQ6qC4PikxtxodRWXfe8GwbaRbmDFcMMzME8A46wVTb6rbFB7fd5wx7e5vpbyMTrpyWBv6a6HbToQ4wQ7AXVY7",
  "key6": "5b9a6sdEYiC6gX4wBcHSD4ZVgMDzyDSqj7xzHADYKv21DRWfUDGgDvKrDqkGxhZgaefaymS2ddrsCCymZyzam9Vo",
  "key7": "3aSKHzEqDK7uL2psP2S9m4xBABYVTaM631Hk1MxzCYQXQjSewuz4tHb9QoAin5ZyKWrvNUPN2WkowCJJw8zbUjmU",
  "key8": "wtkJUGx9tcdEEpYxYMK63bEsGzjcWPGPgW4znF2YgAXVV5ZThGmcppoDX8U6SNGX8TuvuxNkBVSftbb5AsqeowM",
  "key9": "5fqpmStb8bSrNFpC1MGeV7t8EdNftsbAky1JCBMm7B5ZgNNdLn5wXXoHZXx6dUfBE5qwACs2Gx9u8H6btUEtmEJq",
  "key10": "3UHqM5ijrK7f5gpS14SL7CkSw9gC4LqYPU55PbswmXpFdmGqkAEBkMeRrcD3sVY2Vcq8cqX4i3RrWnHH9NR5QtoR",
  "key11": "3tWL6bFP9nQEJNNDHT4PBa464zpHDozzGTgC9EYGoLLVwerkAdFSS3gAQzMPwh6DyU8fPpCofyXnWNFrqFoamS6T",
  "key12": "2hVcdDe7NCMUuJ6yC2BdvhKmJxVGKczjVhZ1n1Ue7KFoB2atqvtihVEQxMGJx2PMNktWuCnAU7fgCDi6AbxVHLSw",
  "key13": "2sRbjTeCDf8WnouEgogMFrzFGJ93HT9KzX9HrkDWRr4KdcdXqAgeFrv88ooZYwTsFP7kDHS7gFXkBSWt2h3XfNyf",
  "key14": "62Wg9AmqvnPuPr3WPqTmhCoTg4fnDRq5eFUrxkmYQnEji3k9dReHtcko3K6kbzFzKws5AbqCK35H5dJ1X2Rp1cpz",
  "key15": "531wWTnySQFGqkspJ2BjAK8Amt2QmrfNhUJhr62qfiCo8HoKd8GG8Lcrfa7Jgvp7RteJAx6D7VeDWseKhPWNQnUM",
  "key16": "21V5C4SN2d1ZCNMe3B3kp5sADg9KwJ3Fi4yi8CGbcZyEETNiG7izEfr6Za5Cew7w9uiNG8PrJwUqo51EdQSZeet8",
  "key17": "337QqxtCHcUV6CrUEzaoak6H5Tyhs9yhvQGPE3ZYa6S6K5zFFBBPzkMXZMFfGCqbsSPp1Y24jNo9Lxz6W9NAQEpX",
  "key18": "52xRKRvbAQY7sqb2ABjn61Ap5c2MqknUn7mG3BKXqbfiNdqvcQGmpWf4E3KxgkeQD7t4S9a6bSRFnjKcGXp9KB65",
  "key19": "JkNF4ci9v8AsL3m1pwqgpy3TfSLLiTptqYxiYeXuQJxBoNEdsVzZ2K8vGbe8Sr6k5azfopkYzYvpoMpn4xQ6UKX",
  "key20": "3KWj1yqoCiHSXbCasSjS9BShzVSi6qfkdfKLUES7GjPgfziQNaJ3DUrifGmqbAmxqL8veo7djBiiLhdNsEBAKC1X",
  "key21": "2ejHJxUKx7359XsCEa7jMPQihj4zwadqASrrhuurARqhLDNqcN4crHR4BiSMDvXR5qbFkrsE9V64eZNeG64Zub6T",
  "key22": "KGG3DYhyXgjBS8jxZNDXQHyowfV5tMWoFM4y9R6Tqv1nuoJWXnFCHTFwF2vFXpRo9XBnXafgxtiKmWm4922SQPB",
  "key23": "4mu5ApFR4GGvyZaBFfAvPxGu7pzaF1KLHRAgpmQHcvkfi49uHZSnGBLdsSkTiMzk4KJDWucx98jWFLwV7xhvVPip",
  "key24": "4xbi7rXG1usQeKbtXG6rZshxv4ycp8j7Bfti1Pt2RLPZHD8N97WebAirPk6KLf5E82qzSadQeXBE2w4CRMwqJaHF"
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
