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
    "2QTEqmfe9ZsVqQToWfC6Jnvazg9gFi7T93XahEabLjuxocdbnpR4nhCV1R4G9EDsJpB811ao1hkpvm7RxoEfcm2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p9s1AKbj8KRHVpLkazR5rmzmHRvsaRrWB7Jgv7MumjHPsonkmZWhQjikanBmuiQ8zUSY7VQc7wsAtmHZN56v4gt",
  "key1": "UTfDcbTH4dCcvp6mJ4YNy48vwPn6eEd2C3GEbkd1jznL8cvc3nff23cme2STFzt5VG9zjrCFMR6n7aFig1vL8MQ",
  "key2": "5d2SW5PgiZjUhqhC6mxVeNDTgwT6b7h8TNs13uS3B22XemWVs3EYKrTGD1Mwdigi8cUqAb4FzZH2QwbezihmaxCt",
  "key3": "5Ge4ToLZrUBjDqM6kETQ8p2KuBbpL99bP3pUoyS3jFZgZJ7tTB16MebsP2SLjEQz5re8dfxkjkW11kTRwh98wVQV",
  "key4": "5xPgiWQWJYfSdxRkpQJpynmBUkSdEKcqFfmNFm5YXskPxGXBCnsozAXCKyhr6eMM3ux1Qu6HFWjMT2m6c4hgU3ER",
  "key5": "fnwVJPzDaudFN6tJhttUXVN5Uv9W5Wm2PWmUEanQ8Y1EyaPZb5BEAhcc5vBZehM9QYbj5hfhRBp2U3rRwFNTaxK",
  "key6": "5rEDicfY91Nr6fKeSAPofnKm2ch9FZGnpkH6ZsGaKXtTTGopMqve7PKLZGZQ6zb7uqrkBm6USFb5Ah9bDSURcxuy",
  "key7": "XnUcxXTrBHdQDg5c9VDFXAmbJiz74uYY5oSzXJ6xpZmXU1SYhCu6Ys6Yvd9w4CiRR6a8QdugrBJxrd1Pv2t4ygQ",
  "key8": "5kcdGDus7awVubS5k8V1u4SZsphqVfqs2zNAcDSVXHvgbTihCdQTboHXzSEuPh78yPjmC24XB7vRntMWKsShsqW2",
  "key9": "2c24nVdawLBBUjw51qhL6AU9MPwSr8avsS4ug6UVaAXwrgKjmfkWywyMnkcbXGL2LXTtF9Y935Dyn1bsnkk33ggm",
  "key10": "9RvUaAv1FWBLZLj2fdV1Zbbm4YYYiKRLM56nq2GWMiZW34heCjDV7U7VB8nTd7wFNvvbHJuPygxtdqRv4dogtKk",
  "key11": "4JfMzLnCZjK41v9J2VDsH2Ns7jHCVFpzuCLVGhZy4HfTzp9rfsnaqBpXYhPg8BoRMXf385EDyJsTK1qooTkjUiws",
  "key12": "3giVWZa2r7Q6GUDvn1SpKA8vPZTcXDrsdJ9iXUTbLBiEB6PVWzces8szAgJse6c3BQSdV1y3cp1dgLjhhSYs2t2m",
  "key13": "387z5N6a1cyqEbe21tbs3PkFPRKPZWNifMBcEXLVAgtv1WVeHxr8XeCYwmWKkj3GdUiwwjmRmLx6YQXwJHRPnCnr",
  "key14": "3E3MPQKpZgojbcbJuCVuKvXfGpbuQD28uxgQPpwXeeDQDz3RThbFtKpXz7DvNkxRtEGGh1HQTpbDHKAhQNpWJ3vZ",
  "key15": "dio37PMrQnK6fNuqxBpf3nQjod5QRxnBLzpLkGbeS3VBF6KmNnpBiJjE7GBCY7DqdaJNfjmvbjDfzGagiHWumR6",
  "key16": "NZksvyzNNVyU3MSzwjexuMuwWTU8CQeHECvp1n2mLgDrVH3RtVALnLmfT7EUkCsY9Ddzb53ngJ3Ytk5wEteuVRv",
  "key17": "eijYQvV8n7N3SssjHTVEcKW1ELe1XELJjQfaBReprYjNMJnLtPDMj8SLpUmd5RDMqEGSRZ59szFUEn3P9ZsZ4e9",
  "key18": "4DCWBfs9qRgMkQjmV2dAkpDhtmHuEnLLidhKfiexTG4xC1g7wekMoEcNncSLK4CSpvtMSuZhfxz8iXsZnTVVEcxD",
  "key19": "3q8MiMWFWMGVphrVGDgtoPEYhPsnViTVzAigtQm4DB6Z5SxmgSdDij1zAbN8dBhSE2C7DL1Rwt5MzjZHd3oEZnrz",
  "key20": "4RKFC7CnsKyVqyEmnEU8VoMcn45sadWAqLFHRcfQNSpWdwfyYDcq3P826Ek2CF5J8RQiQPe5UELdGkvievHVo2uD",
  "key21": "43vaPbe6Sc2K4FBPBPAKTyz2dGtndNM4yWFeE56FSfCH1sVwCZ4sDotgZPXg6SPDAxLVWYgsoLQg3EjNm3r91EH",
  "key22": "3oDFeKzHzQnrZhu1ivwQ8XCusmNqo3BAFdPkTAunePBFMGvihbPLqTsvSGvBh16d1mNKFBvWnRhTFjapForyt6de",
  "key23": "4m3shnKnzDSkQ3kfn5hkDMA9SzchnxE4JCRKSehfF1zF6nvFoxNjVvNapkw8fhUHnrHAynzrwEr59KEiGaZyDuvk",
  "key24": "Zw5kVz465u3L8AsEuFA8D2xZCEM6yReRZvpNjrM237EcorX2XQS5QFq9U3oMLJeuUSDx6NBmX5Q3k3hijmYakR2",
  "key25": "NYtnSJMCrihV1qELhN5kxZV7CAtvExPSs7dweGkNoC5AaJyLcQxAjeAW1qfq9Sest8HvoKd7EarAbDvE6R97fhY",
  "key26": "vjJdg8522JYd2Wqzg3VFhNqQg8K51GAigLGeqH6F5dbNcYG8pd7EMdFXP6SzLVpQsridKsyZbFwk6AzgNeKXsdx",
  "key27": "5tyaq9HK8dEMKZkDfSrfcibUERXJjaLZwhq8piA8Q2x3fGX3TvyoR2VRKFfqa4c5KY8Dy3ELQR1JcUXTuY5u7knC",
  "key28": "3279fXzMqPtFv35twbbfm9rqUUaTxZRRyY1SeDjiQkPisUr3xQJNx54MfdNT3KfBV34wSMH6qNNj1L1T7vAkBjRa",
  "key29": "54GmneJz7RC5Sq5F6LSkas3tFqaEhKuJ1eQFNdsBBxyu9RV4SX3NNXMqwkv7oYx745xU85WDZj2bp7spZZccAcGn",
  "key30": "c6GJgkNqWuCkKXpq3mbgwAMs8AiyVEguZMB5rRPqHL3Gt9AKeLhQgcJLjugmu6iJdvxXPfo5UFwj6sbmNwNLY9e"
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
