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
    "21tj2L1SPGSAbrynput4VWD1R1QLisfR7PFzWrpWRSKgvSoBvXQRWaQ5U9B9gpS6CWTaXdEkToPaLUaGwvdeidix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ds6FMxJkyqKffpWdcLDML47qY7H5bXjXz8yQnbKwd6qFurfFjjU3eEztxNKAv26fXjANiLgQLN1ZsxJbgaei82c",
  "key1": "3z5WXd7rpHbvjRkKE8KZrRbqGHzLpc2itrxhxqu8xg1RXPn6hjp8sw9YrAgRnmxAjgXxbQtYQeDifEZus3U4fTEK",
  "key2": "2CNsC4aC1tMtvPSUSTCv88BoEUfzVgpksdc8KjgeevxkdYu31HfnVPsA1rBG9kPc1VqywdEQbJuxUwQnRnoQE79G",
  "key3": "iM5wAN3tYXFiVnY2G4Q2ihPRyQ9stfXBcVUqyMVCHdUp32gX2g2NoFHa5he5VahxpywwwoSTosedgzxVHrkiN8p",
  "key4": "4UF5tVufXGfE8kg9GqyUZbtNotdy1b1SNCEAsB1nCVQ6K1vJbwbAmjXe4qxKgoLF9qvZ1sFfFtrp2V8L7jiEpB8J",
  "key5": "3ZyiLXPJ4ckuC7cqCFPRnf5JyL6wHruhPDFb8fFTS4idQTut78ZbiMWwHa9TS9X1X5SBjCRCApWJeMUGV2rt18Sb",
  "key6": "3aqDi2UKMLjq4oT9DzD8AYPV52Q5mj2JqXYF5cR2Ygrv8J8pw6MHQzBGYzdoCw1TNW7uuhgvrymSqvptRcP7Uu4Y",
  "key7": "jJVmum5qmPZCuhUS935snYknp6MVfh1Lv5HqGGauXEH2tnNAiMawDdnDua1FSqT41r3c6V1aTQuuPLWMgiDNy2Z",
  "key8": "5LMQWRU7Fh8SeNt22A67koVcVcnf6FnBkMeTwUkGbLcKUjrJtYnsvdnod6AXoy9ZfwDMneU4kdJoAsc41suzzTP3",
  "key9": "5JTSyAeUc8NsdMm8S2cTMK4tm58UVqzWW7CtKAqgZpMcEyn2DvvJ2a4LA2hQKE6YWssZ2oR2cdEzs68uJ9LejeAi",
  "key10": "4NjzhDAjgKzJBFRbJAwHtagaDqyAxaZ3KPyF27xv14KkbRpvB36sejeNecs4kqqUut8jXNqPsEtC5JmL2k9HhG4J",
  "key11": "3uhCpCvNnR1oW7NMNQMyUYwduirRgEs84b1HF6qZr9uat4bVJ4mBmNhWkQpTSWEJgs7L1ijiKSsP3YGnh6LTohuU",
  "key12": "SZSzeEsXT8JnkfCvJTSynkAE3Qs33NV6wg1ukeN3LvmaeabDNyLCbsDgV2Cq3hxzkncUrtXMjR6AZF9Jd985GUq",
  "key13": "4gRBYKbdeoM7n2wwquzYRZ128DvdrhpErW1EDksAdxZ1pLZR97EF3xJLg9AXoWAwVoKxWjS1B6Yzd3CNjxG7891R",
  "key14": "bFt12rU7RdTUuiRn8j8jHKqrnRpLqdDwCUF2YTjnqdtXWbMAWfrQ5A2VdZe5APhLZiHG1zXSUPbjcdTwwZLSz4M",
  "key15": "2T6SZmPi4CLNzn1rxqMRyT1ptpQcvQ2yJA2hu3oVXksd9F9Ppeqo32cBnXDsKQmwwZGdkugyLR68aehMxPTKAb5p",
  "key16": "3GTTeieGuA8kqQfXEbnJ6PwsJ9f2oii9suXbEfv5a3cHuURe8uMt5jVvVLNDwuJ5n772S1eMEpZCj3rJ8RfT2Lev",
  "key17": "2cdPgYwc8ZVjVFtCYaCz96Y17UmeYhPskzhAokzrD12ppMpdWbTdg6SAvR3JfiX6RAPvT3YRafbgbFLcjzaQRTD6",
  "key18": "WxoJExFth5JZjAeozTstrhk1zZ7PMvCC1xjUZsDiXBbJ1YPpvj7rHLWBjJXEkoacWQgNa454jA9RtFRaPgn9RL4",
  "key19": "4ZabNgvHtTMLMC5VjzsKAgQ3fZkwdaqaLxJiZhjkYCaSEtK7cwQKytg91iQ3rWwyGwbKakt9aW4BnfsuG7YcUR3b",
  "key20": "ibYgqAia6RQogSAkiqU7V5B3zZWFQA4ceie33xLb7c3Q96yu2LMfn5GpgvYf1cGcE1cwPKxk3A4oj6RGZ6Aqh1S",
  "key21": "57bnWNgdcHTv6cF6woMnjgvnDjqKtTtEo4JqNig1jAK1fBQUgKP1xZdQjozMVrro5GQa3koe4Ty2HWgJa8EEgp2q",
  "key22": "2DmBPVj4dn5VsgDYmjvj2eRa71LdxK9hGGFeNnZZKMWf8uiYKpNhNe3hzjn4uPL6jV26c8xwiVTVKJGYtpc2iRY1",
  "key23": "2dwzggvxxoZtvrGcs1LgzUVy98RpPu7Uk4qzjy1YUzUPPkusaKranKXPNar1yzyyW3nwMrHr6G5keuu6tmXi3q3",
  "key24": "5VGdyYaSYqx3k8Yx8yvxPGD6bNqhvZG2Lc6wZK9t6bVrPJEJ19FRCCBeoKvEswUf2C4nUepTcAZ2bfbAJsTJxu4F",
  "key25": "325AzvQoSiXg5uBoZwEFB1iWpk9f7gRcN79iQ4hfJQy2jZw9q2k6DmWiZhk3i874o5V87hDTHnLCG8sAdWJ6bB4k",
  "key26": "4QPTGGBw7k7YmdD5y4tBny1frfKKUefzKJNTVrLdPSP51cSMfjy5rWk9gLVGqTeXkvE6DsttdmW285y13wDisfEz",
  "key27": "67TWevwbYVRNwQTFxWSh72RDrB8ERtkF6d8FMwQZx5gzqco43qGYbH3Jh2P8supyAcyrBNwmaCRKuveLRs4X4qPs",
  "key28": "2WedyrSekyKz9S6aKkzgkCiRYjJF2kfWbmr3CLNVEEYiysPREeMRR6xpZVSxP5WXmnKwpZ6eNHwR9daVQ7nGEYrF"
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
