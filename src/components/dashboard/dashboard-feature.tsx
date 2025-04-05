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
    "5TtGX4gHqfejLXaihKWYpARLxfM4HW9MUJfdsLggWCpo9gq18uwTBDijaDnX4cT3ibPLFzvCMpKsgJthuv2QztLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "242Bh2pCM4d1JAEGbi1X6y7tLSzCDNqaxeNfGq7hN7QgFXfYk12KeSDRvUx7cRQTJVESPHw3KyK8DZ2uvhik457Y",
  "key1": "5gCtgRT36gE9LqrgZxgyDocrbpCmTnRc1QnpriVqRLKS3AuMwRARrcCTuiDUnqVcGNq63r5D5eJRr5U2nrDmXP38",
  "key2": "24hwSG1yeVhToFkytVhhyLraeixPAKwSi1zinUAhtezp1AU95EwWNuHfEpBVvDeHqZmp7myC26W3YiqwUXbWKs5i",
  "key3": "32kPfK8tgYfT7zSunRrRdmJhAs6YPx27dLGdbZz5F82Nmy8KxgYEtkUW3oWtKQEA248S1UUnQ2smXLrr4jr14JVy",
  "key4": "5J4XdFMe1tRCduF55zo4T5gapFwHcvv5aZxVpMa7M3xnGRc9bAF7UBq725yz5VEh23PVzaFgwNuseRTTCYgh7t4A",
  "key5": "4gBTVwrJMdmG464BQEHxgaCBZuVY9fcb5FijSykgu6UFrkCLPe6kBkCEgiqxtDWwKvfYmVEwJwSUpKkPtNNaQ4Zb",
  "key6": "3rk2rcwHRg8VFfpLkTpgyK3q2HeadxkC9Z7d1Gu2XnCYSoPMfMFPup6wCYhB6Pg5FUH4RyJq3TgdgaAMsrPWHLKs",
  "key7": "4qUtbTZiGoBiBchoBvdtfQP4egR28PdYPUerMeTP3H3AmLJ1VL6BkwbWSFpwvibSPekFjVimHHZGeU38HcJD7Y9j",
  "key8": "2Q9VkZLKM5yWivL5W5P7kkJ3C9hHpbQEDFvfCKGihxw9MQbY27N5iuH6Lth2HovRCBdxYuX2347YjZPQkMD3eC4M",
  "key9": "DHyEBPdFiq44yFHEEyHXZxAn55WiaT4RCbbx89APZsHKQDvmRxuCr4Yy3zyFGMuKU2eLRaDgdmwmQkCJEWTbfKy",
  "key10": "3bYDciL79xZwcNccMdU2K32sEqSy6SqYLFbTd6XaTetHaBud2Lc3zgzUpxFdKRkRtwKBnm5Nbt9XrucRMSQ3imPm",
  "key11": "atnZdHrfnmLTp3UeJiYj71Ue8v1bCthMnh7WSnwNQ5RDea5YvJaLRW5MJ9WCEQo5wPa4aVud2sd2GnwJL7HbLAy",
  "key12": "aoMSerLD3RKgx2HuuNEVDg8rsmBY74iHa9vLRfSHqPo5XBAHviZnaQtzdY5aqRnfLwnqsy8885yYTj91yfMBTbs",
  "key13": "5QkvwuQ6cwRH4XJXdw8vsQdADGRtMHDNQhFWPa2LCGFzCcuDfTEuDYScMsbmt7EMX1L5ZrdLvQPXFovLdqHThDat",
  "key14": "3J9FH3i6N9rVBLZLFqj7wBw2kqnUk9ZYAPsCLMSjdwMnyc2UnfQD8tRYx6QFeEjxKj4Bw9in2tQmnJDQ8vJU9w9u",
  "key15": "4TqPMVHaXEDtHTa1r3TjwTK3xr8VqvkCym7fvnEwEDrrp6rdNxFzFVPbRs9Y44ZCaJharjgxRoy1qpskPCZoWYeu",
  "key16": "43abA9Dbp1UkiARvCSSugWTSSQUzUCydiQbjiWXavU7kovx5v9wGjpxwnZEvmyCK1y8HEu1gcFcY1F3hQfi8EAyq",
  "key17": "2VhwHGRUwzYUrTLwCm94Ratapa569QBAf5qMZfG3MXDYNXz1pboKwvhh2w2cretvwwLdcXQve6jpHhuMYgtVTAiL",
  "key18": "5P7EACRWHYGv9bdSv8zw63U8VJyvoh1tgAhko54T6JSaRHQDTYe8U6dx6njQPzntqRsSQABA2MGBubpVbAEDjapx",
  "key19": "37j485y55jfahza2QuSFwAto5kt1f2rZyZkGBBzeH6JnCXkvfasszWXegrQsGAbt2zDUonGxbSNxWjRNpdp8oYMW",
  "key20": "2qaVgdRTUep8twBJEYR3SfyW2AtXLKogVFabdP6YfTiikktDW9Y2HRbht4ugTnFHZ5VCZMW5UrwPryvUD2e4i8hT",
  "key21": "3iSMVQjNZjZY3kfJzdXV5rFeNHU1ef88QhPAdp3JLW77Mpujg5xpKM91tigsjtt9hPfnftpR5kPDZPQY5EDg7uJD",
  "key22": "4FEMFZBwzonjaowgfSvd5JQBvWuvHFpXAgtTxSqCKCxxj9egMwnCETD1n57bTJ98qtuMmZaxDMtjAdTLfrJSfPLX",
  "key23": "3qUnmJKFC7GVkU1yHfYzo6mucqeWogEf9dNEoca6JPWBHpci6L18ZVJU36mk8zp5s3GuJ9XUvHPjK1yU2tWNgMWw",
  "key24": "5P83WU2F8ngPNmQaWwoDFJNisNLHx1nEV4ENgUygntBJ1i41VfKt2Gm2KagERvabW1TdSsZE5xWnn5F9c4UF4Cnt",
  "key25": "2Sk1DVsxY2y3dVGczKUmxG1as3kUVEXDS8fnniV596MGFFkPc2FjvCfMssGP2vsFuqsyyfDqCssAtA3spq8Qo65q",
  "key26": "2Re4q51d8tZQbF3V1bhQupmnMEhfi8Jab3WoJbnSujkiKUTCxVMc6FP4aerLWT6MSw1jjJJQxiqfTsfUXVPNbDjt",
  "key27": "NnoMnubwhmoZLf6eK9HL32xvSC1SApCeDuchrBxGAJSxDbUiyEAuGuDJmw2YG4m1WNNsXEG6pRoFZTMtcDSbL79",
  "key28": "4JKS1jncCTJaTi7N6HbpRVPkHVhi9NN33ZmBVwatXFrCcmgYkzmZCaKx92YcLs3jpNd2Lti9DMdmx5znCD2fCiMy",
  "key29": "2uWBvB7KGSL1TpHVRxeAWq3FDgkkukobFdfVBNtF4TrxfMRJVWCNj6we3RRV24Bt5sT1X8JGfkE6ZNztaneE9WLK",
  "key30": "472BQ4EtWToMj96roRaWUMC4fDjCMyizxGwK4EFg9QGLwxsBVrYWCt3rJ3y8SePd9v8VM6Rhp4m55XAHYL741kiX",
  "key31": "2QCSDsKkX3yJ5nj37DDMmgCfeaBxRXrQ9m96Rt8rW8Lb9QV83s6q6bDp1uS82oyDtPN2aXEBqXKarUyA5BfEqEHL",
  "key32": "4oUZCR9dA5KXpZx95viX9ft8ky6e8WAV8vmQNBtdZrB4qcS5k7h8153cRqL7URjnMqettP3pCEscfdHCE7hFJ4AX",
  "key33": "3uMYtTCnyc3GQHogLS4x3VG1EoGTakqm9rhNeaoLf1UG3QsMAeqiZdkup9CQbPMEnUije8rs75S34wVYKEzHSHFj",
  "key34": "5bbpYk2xxhWE1xAoJD4jUji8c9NzokaFDCPkXuicmRAyXjaFEHyPuXodRqfxRoAFsoKf9Wn47nRmQuCwzid6TGk3",
  "key35": "5vzSrP16gP6woEQAJXqUzQChLwSXKmo5hzs8qMVNnruaPxGuCcMV72Yh4v4gkBSzybKnwYXnKFZqHqABd47QGfJo",
  "key36": "2ih37Ch8N2p6AUB5aCCAeQiYMe1BE1GhKayZerLz1sxu9UB2vW9JH3usYKGQmjYskdG79pQ3ZxZsbLPTbEYBygJd",
  "key37": "4Z4Fkqfs7mFNGQM4w9pAt2jtvQrbesU8j2xpVghzD9FqTsbKwwk5sH15F2hGm9J5DQYiM4A9y9B7DJ3wCd2DuFcD",
  "key38": "3rgRx4vYav7QXd2PTBDgDc71h71BQBJuP2Tcr7tVu4yD81GGbwvEcSvSnTFrhuUgTtD5wyfCw1tJEmrMuqbTeSpk",
  "key39": "LP58GQVrGpNzE7FrsZBouPiCvYSLRBwj7ddquyXy6xGKJNeXjifzfNUGJvPXinY4RVUhxoPUEcJ58ehgUipFAwv",
  "key40": "5nxFLrQYURW6E27Q34ej8a6G1bVLZi8kLDAdvDeoWHq3Tz1RYHLLxJLJ3BzTNGXzEdtDRn6bCVzLYvAewRTLSy35",
  "key41": "bTkiQ1dz2GtK3yVkqDMJCjeFR979dLGvy4RwbfisG2WhAWttHmCAhtGS9QPCfPEFZhLstX75XK8o9K3ec6VDYEw",
  "key42": "4GcYbem3bcDGMWz2o8Ai99Dh5AUpXiX9ZotvESGhyyGedmdwAh8Fe2RU8d4mJLHXir1U3QeEhLbkpiRtbEWaAGZa"
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
