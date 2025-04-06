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
    "5Q5Zh3HV83S5P1RuqcHCcmXk2P52e1Z1QAdnV7VkGArZDQfgbcKS11ZqWDs8Grgpj6e2mf9fBchjvDUYShEUc5pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N9RNMhQC3z1AwhRuVCaHZpqSGcKuz4AeFp1msgc5JYMENAivtVYBnFQKPEvVEriD9bD1G5D2b5FTiZDVKxgANWC",
  "key1": "2yAHjhdqcyJYu3qF4q8cw3gnsjeirVXWeHMZsePGeeyAyH29F4urR15R9xRVWuePG81vh5PQicZn8zDjaXpfJ1HJ",
  "key2": "3x57GAAt8Py748C1FNZedtgQ3NBmuarhw3c5DoeEZ6jQrnXJXjBRYo4vQLCEbzEURayseY8LR4Cbqqw5V17NxKeH",
  "key3": "5yEzrZVT3HDsViYce2MkzKaqCV3SRvJxfD72hQJhN9qckegFpk4gT8yEeVWc53Ah9UYtAaMvFsAHSTUC8F3vX5H1",
  "key4": "KJ22mevse2KdXTamnbU4f9G6X53b2G6HkWLBT6uYykcivDn6GRH2LysXj7ZNfJUGj3kT76FPY6j3XDhskBJNowg",
  "key5": "kNTxRvwVmnpm442yMZvpu5TJPKiynAVk1Hbj91m9jATCnaNeT8FDxbSqQYvsxeoih1QdiUcxsxtRTkUQvxumGsa",
  "key6": "3D74uYgiJudfiVSLBDLkE8FXXFavCxrEjPpvPXcEbXtoUE3vAQE7YiHxMuaJky94WZHySWTjF74LzazHFhGhLEsE",
  "key7": "5VvCuuAk3XVJjVT2fVaeHYxLmgPJYtu3E1STtzkiJ5F8df9uHrKFioZp5K7erW9mDynP9Dz3JsZumUfbVM4Uxyjv",
  "key8": "2kXZnwpuZG1JBVR3CddzThjN8dBBxFXo5AptNxJe7MKsq5MBwnchhWprNBYBBEHqSmHymLDVszvGoeUqUdoGParC",
  "key9": "4Qkrsf9idhJUUP5qxLdBKxRf4dmjrK6TBpCni2bTpaoqp9oezser1UQfD7MwTan5E77Cr7Hzkc9D9kFjp9m5QMbC",
  "key10": "4TYYF7pfhKQEEsj81L96CjEUQHBwv1nsb2EwJ8otJTn2KtzfEewCG7j2q18LXL4zrG7NMAN33ZaJ4bnkZ2wWySb2",
  "key11": "4Vu1HajLV2bdMxLBC9io5eZjvmmXMRVqvsR9dmBTmpqUMui8emr9Ya8USRzHA96edrgtgrJLMjCzV539dGJHSdV6",
  "key12": "4jRBJ38MiqMfc8qqrcNp5J31UeqTEd6fSattZ6Bs7KNwLKKevbDuLtryNqSY6Jr4Pm5PpL4XgQuFdKTZ6jLpovWo",
  "key13": "3W5494EaasVZW7ug1jxtk1S1n4mKmxoHmiWnQFRrWejs3PS2oMTjg7NFHmeUqs8oADxDnZUCgk5RBn5Y1Qt4ew7u",
  "key14": "JuzK6tKpNz7GuU3vA9VCM9CTdo3zyXzFmRmEaCR35qGMGWrHHTUfb8GRshzCHNoN69fhheZzNVjnSuGSJAu8ojr",
  "key15": "3Q9EmLUAuGVo1m6h4Bu1v89S6199BUtJu6MxM2hd8m8VbHMfV2tVX8KsALiiUvQiVXUQEfUdxLDR5JrpDdTHFS4o",
  "key16": "zPNAXMwyh6iapWGGmujU81zevCZtd8KcJkRGUzdgNiW5tpmmFppFddRV4vCyCEDEeT2mEKzStBJfeWBQ6r3oKXp",
  "key17": "3GyKR5FeMvX7FLzbR9n2fmoWPvCASxsgswqU1rdjwrPvJe9D6EZ9yDmCJ3E8kLMKESnvKSkpiFYQ5T5SjZjUJ2ZV",
  "key18": "23bYEo872X9fZxFXWGPkgJMCQ5Ei4uDK4wVAg8mMTqhPtbMcYR5gpTW4bcr2FW5QFEJADnJXG4c8Z5fytPSv8YWi",
  "key19": "3yU54bwUbh24ii6TP56brSWBwmbWvGNCWmd3QPJf4x2e3JV8yoaktm6XLMWUoFsSfwfMS2xp93RiMbx7SR1iS5oa",
  "key20": "4h4wgMndo7RT8XbkH7YUNRVh4cpxFaa3bNv9PDwLAbjuQWVnbocDZL8ePD8S4FRN3PvzmUSFPVtpAE6DusiXJ34L",
  "key21": "b974bSp7u2kTdwiZ9FXFVn1dygiPWsnVbdidhSa38uNDTTJkeqtGu7WAFaB5msaP3YoGUdSBjS1wPV8YTBsh4QR",
  "key22": "yTDz3royCN8qSyYtnBhwCzpkkpLUiAcMFFsxboiZktrtyPQpVZFm8WuryywYx9um5CLtG8adHrfwkQqZwD3Hk5x",
  "key23": "5fHZCKQSvfkNtf9x2qeDg7WRkMEp1vR7PFKVGPpNZdVvZDu1KBsEyDHLsL1txb8MRqPXd71MsosKVSEggVWHHwqi",
  "key24": "2y2ApJv19oHyt6QN4mEjW62UdujRFHeWmVJLs1D3veNpntL457zfWMWZtkf5RLXJhFNnTvv4ECyFqR1DDvJm7HQV",
  "key25": "2SreccYiA1P3J4UBkESoV3ASY6HkF5H7DLcLptdd6nzCcRLgKLzoJGi2cmTwkBreyon8xh48ZCkbvX33DzGX6Bzm",
  "key26": "5TnDuXK5E3pfHFMQxYvvAhVNACkAE2vqhPsiaoY4mCYy1gLHYjJyiiwqYVCdWr2vCmk4uy4kkueoXGNaJJLbnkVM",
  "key27": "4c8A17ihdPSQ3NvVGN9z5bDG2zhLMUqDfgkVviMZv4pS1BEGT8JxqUQe7wJ1whtMzXHyoDNzPWNFPaRfnRYkana3",
  "key28": "28JJHvYKQbKVG3L4aAZefu4xVwAoyJG3HUxe3K22nW1J2ZSnFgpb2aKKjgqgdJU6qPpKtUhMwxzfsCH1JsYJiZtY",
  "key29": "yFps7JKgd8wgmdEES1y2HifXy74ESv5oW1dnyeWMG9QLize74JjLbM1k1KHtsP9o4FVDL7rH7RN4dTkcUPf3bpp",
  "key30": "5ciCD6RLfuMZ9N71UczGBGvNQ1CoSR3uFCeuGbWTFZhuCACM4jZyQHzpkjE5zhiqUsFG9gna1uZZLEkpyR9j3mxs",
  "key31": "4e2hmofAGDmAoANhgwyLUPiYYXxJHXw6QuHzZ5ftC5uDeGnvij2SvXitjP8mq8VoEb5Nb2t8NjNLn9t55ESk2Zik",
  "key32": "5hPZHtMoyWa9e9VSEtAcPmbNwQKm3xZJe8SgVhcgEtVfRKVFeFfAopTscFJkGDuy521Kg2PXHBqH7aSvWGrPjGff",
  "key33": "3mLjeLVeFfg7dtg1BVvD2caH39t1gJ9QEr5dwBUxPvs7SLEFqmxKFmuAT4ry1PGFcJL5hrvYhjfiZxk2oQqhjQfw",
  "key34": "5ytLmK3hC2T14hsfaMoN37YHicRV4Wjd8DqXGFikCAqbp4aGxBUixYaARmDrqrBZzxVcdhgtVvD82z1TpYa3WWpN",
  "key35": "2XUxYh4RZx13N8TweYNPRGjBSY68PG5u3A931nQfFeHkmcyV7TvB6sfib8666cSfJVd4cuJ8FxxBJwHF56hsLtBw",
  "key36": "i1grZEGWpFhsrijduemru4VxtXnwJ219qLCHQzVHREs5prD5kiDndYAoUDHWvBHfaNRvQPqqsxXzBSeZvCCE2f4",
  "key37": "4b3TVNAjaroJZqqKg2Vc9KUMPK4eE9vbFRixnjTJkuRUsaaPFMnSQaH2ZBtuxBTXrKPQUcuYC751RY7NWtoVa8JM",
  "key38": "4Zqc6g34LCSrj7cQeH74dBNsMTLHphJuxRiBNrXtGhwtQm1ciUWFMJXF3HetKa66WoChg4x5EM9XvDn5JLhLrQjV",
  "key39": "EVhATF2KBNajA2o85jZ2LmNYPccYVAwbEZgGBYv9sxJKdF3Hv4dWXn3gB899uWaYcpB43jHnbub44F9x43N9Dcx",
  "key40": "25fim9Pm9vPNnZnCbtDycZDarwuBV5kpQEmfQ1NJD6bDQmRECcKR5FMreqd7bdjyX4hP9b9e4oacew7MtjyDTUiu",
  "key41": "xqze3WQrp2T4XEWK4MpatcXkyZRVcZjhkFkHyDMjZrpJetxZwGGDxcHnkXfq6r6Cp1H3Z4FFY7LYr4NsWbpgjYY",
  "key42": "FUBKgB4c3XfRveBnhJKcoogi6kzPjUm4YxVHJVZDDQLjKHHV24ve8HoTUqBktKWTCRAWBSrj7L5vCvUtPo9BodL",
  "key43": "63pFMtXYakDZai26GnJ4wkNfxwvEGETJL3c4bbQTHjDgAdsT5RrrKtUEEW5SMuwFcXD3zUJyN71vMqwSAPXJYQhp",
  "key44": "4nhRojAFkamLfJ9dJjKAWpKe8qP2sMeq9eEGHdJ668EdECJm2PJsxjkTRmysvkSfajHYgfeQknkXom4PaFtYgJbg",
  "key45": "4J5DVzniucR6Tjsi1om3xB17hpPRqVL9rpmeHJQfAQfANeyjBDZbLBF9SsuSSuQeX2BWHqbVYNgK7BTtgEcVpoZD"
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
