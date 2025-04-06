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
    "3WZNREcnoZj1WtmYJzKzRWviqgNNvqYEuwuZegwpEUrnTSvxP15ZcEnd14bCV9kBeQgon7Ho8aCnxnt4dNuU8huJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwWMDZS3AKShMBfakURPhLqCzoZEkujg8vQkjKZW7ApfMSL6xEKdxZKMbjrb3cHNkRwXpcK9NcgWQEwjUQJMHAa",
  "key1": "5uDjZaukGKxFFYHAHJcNoBTwcSNHT5tuv3iQ2Kxoywq2i7DgPPF9WdvQsvyZR4KsehAxUASB3c3Dp4FZXYGfK9Yn",
  "key2": "4mT652uZ8JEGyFkXkUa69aNZuxtZVs2VpmtZ7QA4pNUHPiRAD4NZF6VK6riZPWq9ARavXc74dE6suQfGdwXvhn7W",
  "key3": "38n8D8JAcEDGdE91TDGK84TKkVwARkiUhwv3J8gT8KqpM569g5sgXzXNZwgCG4V9L5MR9vrcFChEM2RYhP8pD9Ky",
  "key4": "4h7cCPdiqaGPaaWjK3A8gJbCY9LA5zT9x9Rsi9hScpwWkHcqcfvkQNYLaprSowQc6AUihy3YVR1hZAVtEDcpVY1f",
  "key5": "42SvCguSn1SUkJVd1XHiT3fB9H1hzVHbx2E9TLbUrkQx97nj4W4HbanpKrVquVEwzxoq7AyoCPMkM7e1xQWLk8oi",
  "key6": "3kh5bsB5FAde6AwncEvf9THezeQLbnE1YizVNwHS9bCbxyxzFR3dujsCUxzMwtUGoCL2D1iuUd76T31bSqgZ9BvJ",
  "key7": "4eUrpxmWCP5V21S8y81adYMuLpLmegymMgNxgjoj9trHGMBkLdCsaBd3SK8EHpVkT83dPD3RsSsQpFJBo8Uuvtre",
  "key8": "48QW5KGKVXCKivRaf7dtwFxZZzeAu2x5UohUacJyfYwkZvqe4bGpDS5hSGoRDdPthkcTyjVtXRmAKQhdmF4TVhfG",
  "key9": "5De5fG4GyVjE2VASdWtBCExcNPf2ugbuKAxDZ6oTLCo782j1qkwNqq46bRP8XFLSbnarHvSekMkB8vZnDajTaQCJ",
  "key10": "4DC3Vx67aPVcMAw1jqyc4ruoa9EwX8DuAR4q71aGivfCEYACsA5E2n8wXAbxM9UGMnRuohzPDobiknMdaNVgu3uC",
  "key11": "prYUbZkVWVKw6wpUqPT1Czg39JEubmvPXFdVaWTdjoPkZ9EuPDhTnApvUzw7jJSPL1ScVbiy1qZkQGynbpH8VU3",
  "key12": "3sDeYJm5KgGdmSHc2rUKpEqnnVjDaBfGQ3xSSQGygaoSP1VHrRL2Rw7Lwpp2wWqz9LQHsw4M4wtfErjxaDD2dRNL",
  "key13": "52zizvfa4taFYrf7ShhFZd8M95jQZaK4AYrDBBNYP8ZdTUwdvJoQ7BkMAQc7W1FLup7UEfhn5sGBrPhRYPhiNXxv",
  "key14": "3ndxG7jdv2QgY7PqEdK12kaCb797oi3Yc96CF3c3gofyVwBqeejA83okCFaaaxc9fyAJwrFH4xUPGqhg5xfo9wSU",
  "key15": "5YaAwdpaWa6gxRTt5FzXE7HDcgYy9QwZQA4FjvasjYqFo6cSf7UAz2xqsYP4mPi6qd3bZXnLofh1nLCn3GYMd4Lw",
  "key16": "3vZggByez5gPN3E41KdupvX7KEfH5dZf9a4gRY8zLzx8UFPbgtEUZzYTS9udxFpwAB4wD4cT5ZbgdQVn7gfvWo8S",
  "key17": "8RH21M3GyjSx38EP7f6mH89sBhJ3qKovWZ8n8Mjm4A8hW1NoUQrWDoyU3CW7R2tXMmiEGcKfCGf7urHXabzM9gE",
  "key18": "qSDvZUUaFoxmLSHm96ecCwLQqbpGGRMy2Bv35pyZNCo6ZbSkdn9mUwsSZUu3VWzGMu466Cfth71eZPEyHXjisCs",
  "key19": "5MnJtweEg7spms3ScNJo6xTA1GRVT1T3eTbLjMgdCwcPWRfyHb4R5PykxrfntA5uHBPJPRcn51EqVtLV6iUj8EP6",
  "key20": "3ht4aDapeD5V9CzUZZ7DNLY7ngC5UPC2BzedcHhjZYqLSLDwtqrNVNz5TmDbZWEktyYNmRee43s6dwgn13SVjp39",
  "key21": "3fM4VTJoAgToj1Hjy1xetQBDGQ7WgMLKFrJKcMv9HJ3D7UKn6YYuo7qTuZpLAqmxaGZyaC9NtaoN4ywrWJ1sqUjz",
  "key22": "3LBuotxBwJbkjnVRqoMvgZN7XmTf6fvbWxEMRYebiErPR6Jdac7N4tXu2A12LZdLADe6Tx1jbADx9UsHo2f416PS",
  "key23": "v4SjmtsYgoHxM47QNteA8ESGepzFjMksh58HEW7chqV5vb3xK8faf44Ko2B2ENTximD7HdNpYWuQsuoHw3sfUGh",
  "key24": "2uFYV16MX1MUbahwQrx7dqd7Tb5bF9thvxNxKcGDf4Qbx4QbaESqikZhekcjMvmbj6t7LRuVojWurqrr3wBrPWwf",
  "key25": "4fhUJMMPu3aCzXDBPMZ8yYegDzJ2UtVEykfGuHGyWDyEJBxwGHEnYrTFXHJBHe689CoWpZEGPPXZ8qGMyjPJbRHR",
  "key26": "2Nora2uBwwEvMeoQpm1XheWrCkAuwG9vVkaqRHW1it3xwqPvR146yPKYa1b4uQRfooypaGoVGmWHkCkeR4bqe9bS",
  "key27": "2ZnWfSGHtpgw63YeKaS1MwJYYMs1GBfSWuCJq7p99pWPppDafWmUAJ4JG93ogP2wUMabCDHRxMJ6fcQ8nh545iXY",
  "key28": "wZ2nLpg7PubTijWgbKFtf1sGGZ5HEu4rC29TjXJjf8G82SkwND6E5FVaUzFc2qWekBbKWJ6pppGWEo2zCbL3gxq",
  "key29": "56iBsuPX8xFdYvsSPuJUuukQ2XjvRHdq9cUhGeEg5SUsuD6QWU9N5hnaMvgCiSGxcdZFaRSCZLzVck2p1ELHKcAG",
  "key30": "2U9oAFRZMCExS47bEPnrkx8i1KMJZ5u2avWsXJ5boZ7BUAtB3oq46eVthcEBcTiyXLbQFyGoqBXd84F1qQ7TT2aF",
  "key31": "2CGd1YyL728Wh1LfbXgmxqtxSHmP3BuktX7qVoaho7octiifxN5XtgpvqB656SFELqyUMWtMGTseM7TCGqBSRQBo",
  "key32": "2GbstKNzbUh7RFcKNJbJnEz7bqtEhisH8xBMpMJWS7QFozf5Ajd6nZtfPz5GWf4Cc7iKMUTRahitMdBRAtZMx7xm",
  "key33": "2jWAVVHWZoNiLC2EDFSZHQqxoBJH71c79sbaMxhcaG9JwiVpHKckSDQTbSVCz2YazMfbCSYp5CUt6aJdkch98EfY",
  "key34": "g9j3juHhkBkq8xUC2riP8H9cSBhCFQRShzsA8XH69oym38u6pop8VhgR4xLaDjEY1vcykhsk6H4fpoHQbALrtnx",
  "key35": "4bJAcuy3bcFXaP1BWVM2DmRgBCzThzVxhVU9F6dN6Wj4dF5xxWyQDzknt83XAN9MPihPRaDuzY6dREtcGkZky4Sk",
  "key36": "3SRqebCgmGqTnPzCs7U3rrQtaQcacfLwAKaRuKxzc6PkCScMiLyvF9GwvCg4hRFQTKh6WnvYd187wAszoLp3QUcH",
  "key37": "4VDAUcvbwTXBE1VT8DwKuzqTMPrjF83heWTjFKh6KPBtKWvRZ2NnnDofjVtTZCaDU1Xv8XEszzMuGJ97SXmBBneX",
  "key38": "2ntAQMDBGHvDxcLXqrYCPSfyTj6CdHT6nwpBr5ivVvgaa9FN2X9onbH71BtDPDqeUJAoRXDgD8z2xejgbmQYRxLk",
  "key39": "5wswFJMuAy1xqzVvCzooyGpy94sV3SVJBG3hLtYhLZ8y9KWpLTM8e3dmHSW5eEhbvF2VAgqhZn1UUEBoCHwZRA65",
  "key40": "3TPW7yo5TWB8RD42fMoV4sDBnrJhvZMrtgLXQ3UMWYF1QL813VXbD6fWCAdMi9ZkT9N9Gv9fGi8W5nGV3iieSswW"
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
