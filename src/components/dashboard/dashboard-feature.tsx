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
    "3upuqEuDmAvS8q2JMtV7ZNXs3f8VwPh1jrUjpU9eKaUXHF5y8edzakpEFUKZGXwL5X3Sh9wLVqQoqhmdAC7UPuu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4noC1pFjQYVEcXcTkp7e19qxtj1nwVzHvphziZSYnkb9hD7C6KdkXa2UCj7SrC8jN7qqMWeSVaWiGZnL5hRTLUSc",
  "key1": "2KVaB3Y2zFt8EDZDJQAyYg4usgEGPr1TBPPD38a3TiV2o6Qxu9qUv4DQwnhGh3LqAxzJg94iM9kFZH317okCycLP",
  "key2": "4ZnjCeKQywtyb6MoYozb8okYZ8KAAxGDaLdmepWg9exQw5uNQUFTyhx9jUYjWbiHPJg9GiU2qzTxPP7M2CAqDLN9",
  "key3": "2C9y5AsHPWBGqeXEVEZhHpqRJsyNz7qDMrdWSP8L1p4XWYkQon79H8SiWZC3GHgqbrKBubZyqN6Cb8XGe8T3FCEe",
  "key4": "2L9w9FseFNp4pFRNKd1Whpx6N4zBoUxtNqgqYMySdVJtjkzdm1A7CQxpqm9H4U9UnZsYisEQS6owhGdzRuAiJezg",
  "key5": "61ojGaFGm83CU5TY6Y9iczL6nwkQqbA7veKrUrvsX3r5X2gaweTjc7Sc8KCVpq7sTtmazWBiH1otGtwc2naFfoR2",
  "key6": "8sJrLUwaST8RUUxRaQ2KpsHkhrY7gfvcPzGw89DH9YWVGtYhGC62oarEACtzPwfm2fKX5Rrhe8hHfR1k3T8FTt9",
  "key7": "2dS1phWW8DWBCtWfEBHRpqfDLjFaLjTj3oXipAMjrjDKxfedcwZPAdM5mekSmSFuLLJqYZwSu8jkp1xU6VRCYeVq",
  "key8": "4QdBN8zkG213mvna7kPYguwBB7NsPMATUmWUY1cF4KPQy9W7botYgDnRuycA1bngQVxvXNuDQGAj6fnwxmVF4GZW",
  "key9": "5mWVSvsURCr1ybunZL6CdhDkY5JorNMfP5VRKdySRgwyajcsVJCxxJPE4ZfWbSqYZBWVN6WJdLJu7LEawoztPdwL",
  "key10": "4tf3pJrXqaG4wzjdqmJE5j8uNg9oYcVGQGpv8zLqXWjf447poTSBEEfgTZstNPi9Pa5Psry1ZqoZbpSjkYA9SsqC",
  "key11": "4SatiPXBXEJE7xaJGSWrapLztk9PyRcAv7a75jtEMfKiSFYMbokwGapbsekCQd5GwhVDpaXrTXjH7br3KoUd3gYU",
  "key12": "3igcAmjS2ubChgous6BzsWaeekNj328t6V2jJER6cZjsgUpm7tGFtkoSTB5hSb1KmuiPPB9ziEBxVnJsm1wgJQ6F",
  "key13": "5ug2icJmWBtydnVfWKHQbM5WTHUPsx3b8w1HmhPt7AsjVfByE9pSk9NzSY24xnU7xKsBL66mdz4mZ1ShjjuHEbnv",
  "key14": "2q3JFGh63V3GC1N5NrSqjHUe5gGEj6u9Co8vb157zdi16cH5ZNH2mBhxCzReYZQpx4YVyR9AnqvRQbieLRPjdfAY",
  "key15": "2sTG6MkLoiwHmYTmVN8VJW8EUpna1TurEtXbDdrAjFNs8brAUajrU7REELP1GCFanfs9GUwivCGJPXSZ5hC7EzrC",
  "key16": "u6iuxMYGMXgtyQsaToeBo53dUhz4i1C2TFvyRkpfX2vjdk58eWwBaPdixa8juH2BZQvXTuGgCe65h6W37bVWo43",
  "key17": "2SdXcw1ZrDhCM9b6BLmXXkjCCSHwjhZcEurFCh4sQobmwVU7wxYWCVbhgueBFc9QNghjkWhVu1Ymp7s7RWGRbpR9",
  "key18": "2FczKh4rCYCUFpy4j7dz3PE5xaiqdr6HDUiwo3wXmM2VbZpKKoXFY5zhEf3sgdSBx91sTAJhyi971k376eQJDijt",
  "key19": "5D2JWp7PknzbmMqQJd1JYB9XCRUetDCxLtrCYrc2pqCMs2LhVdwewEVg58FAFPCKByV2TWr7yCKNES43DQjZV5kP",
  "key20": "4zciDhM5bq5zutEUQYo54adcpwvE57KsLooMCUoWhf3BcXxitwAfiBGpqhAwFH1r8VkusrT8EottF1KYpVHUVdjL",
  "key21": "5LBdPXCDS9fMfqXQfbaXFAQi2n2goX5dnbHrtM3hJj1w9mkTtErg7pQjdgytsYaroQCLk9H6oX2z9AHhUNGFQcn1",
  "key22": "DsH1WnJuz7XKPRo7cYPtCvcQaCPuoW9Y5Vz7oFsEXv1uQTHAwp9kkh9syRRqSRk8pkTshy5brfHrTjniyYCrRNE",
  "key23": "2VHhD4UVEZwd1wTvybN8FcWnmy21yMPVWk9T5Pj3uVaWNKMtNQHJXwLcqxZa8FpytV4CHqbsYs15WuQfF9mFxFW9",
  "key24": "5RWv32auxRRrEY8YNPCdDzWWTx7bwCEALj8tx2s8jqrXw1Qf4LQfQqv2nwYFsYMGEvbVmMyLiw7a2rWo7vzNMwpf",
  "key25": "5qPSxJak7hfLzR65HcATBL5yW1FD6cSP2FN2jA2zCrXLTSXn9shchWkWsbRB5LnES5ZnVtzyKu6zohkPXP7swK3P",
  "key26": "4rmhByGNw6Y84yRevroLxXJWJry4v1PFBhz9LjQz7V36BhoAfcRcPhGDDcpVcxH4juQo5NHw1rAcp8x73Sgcmx7C",
  "key27": "BGdk8mEa36xwzFSxfBThkLHcoy4wVJfAyAQKDZCUreKDB9sMrL4D6VdcnHUuQuSHCZW6YcygMzTiZ37o9hGVRxD",
  "key28": "576GQzzAE3wPqN17bkfhvPsiw62DBuLMENyxQSnyL8kEpFpEFj7iQ82fBQoyWVuCMVFh2pj1CeesQVrXVNKYsTWF",
  "key29": "5RQXre569pvYsdG8iaTrTg7RXpLqhogvLQxJcHiPhyzwtxpj8HGxroHAKW1bWCRgTkG2SyHEdtcsAu6TzypkVFfQ",
  "key30": "5vKbXVyH8NX7UggjG71xuUTX2rcjyscUJFriMkEAdQbu2Q9QLXaCqBea9ACnQ3ET218AT68dXtWfVkr9i2ycMDr9",
  "key31": "44zVctN2e7cpY1x2PnDfUgSQ2V41Cj7rYe6yPY43e6kwvn3avtLNkGu2Ajo2YaXtLG8ZTMcYxjWyjtZmmvG24vb9",
  "key32": "2XSouDL5KmqpG3dYqzor4GkeQ7TLdRmCV5vHbWDpAXuxXZuLAmLxGfPxpSKWcH9HaiZi4DYLeY75ELKmXEBEJYQi",
  "key33": "56frDuLbrCPZJJ5nyB5VF2oZFFdD9h3hNFc1D7C1TJvqLpEcmEHQ4kdHeUwtne8RuVRttGqd8mrZuhZRkVfMhVgt",
  "key34": "B2ZpxvTGB11rEYnos9b9XGWkHEy7PpWMzunsHpcUiga692pTUGuLfTLfnRGvz873jfVXWdBWRQwQh2UGWnA6hqg"
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
