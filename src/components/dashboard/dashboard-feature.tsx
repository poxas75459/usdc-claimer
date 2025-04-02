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
    "26XfDYvbe7HhBzFiumUc7sZivWFf8UPQN6ejrPSU4L9N6GbWRYwkvVjCFFSYHBCEUwC769vAyg59LPxC4tRTHhCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GTQYdo3ULXvF1uATuXrS5wum6jHYF4XuVWUuRa7STyX62oTVZEoAdyzBDhoz8ErDMeDioBEprST8tvCidnzjpp",
  "key1": "2VaRwbwudBKQeRvgayPhdoFdFNx2j3LP3MGBcD2r3U4zE7HbpcuJNRd9QQfPQU5sd54nweB4teGZHdpXEsAqpYby",
  "key2": "3hWGkrgnFToceqQ4wFogujkE1ejpjEoJ3jrdCRqkcPqWVVduQmZ9t3RoMYLA69r6gbtc38rgNT1z51SHSq11cfZL",
  "key3": "3CA1Rxcn8n5A2pmAGC2BCmMdEYs5qimKNwNznsUYnp7J51MtJWzQ8SZYWcsB1h6SUdmQyfbG5DWJrKmRRkuZkF3k",
  "key4": "3AhxstnKh7sXABCxNBbmbTbJTV6ejofnJ9yL7TpVHrCZafhQm2LeUHGQ2NrNYKcucZLhHr6GzmASaBTY5xeiebeG",
  "key5": "3J6shtDdg6j1sCVNxDfhhCSZ3aeKL9ex9zZVKAno3RQQUX8HhzAumWU78BfN13jgnr59fC13zqWMsGCykMmh3SJQ",
  "key6": "5uNmmL9VVMbHsUyTVcXg1K2X9NA2RDUiHfZj8sBXL1S5b11LzSxpzPiNY395FR7QG4FiVrNwF9CyKFgj5q7bbksT",
  "key7": "4BA2HnqnmBm7Kf1mrbE6boJLjZBRzwjZDUvdxzs4akQdzUQ3SBKUqdGdpQ6BKKigGVX3RGACjn8taVGpiki8UsaY",
  "key8": "2tNT4YbfjNih3g8Ypt4CzLY8PghQcoQzMDfWAasJzCkZcwe5oumBBN79swBbA3dpHXhEU23Rarr6siMBoAAXpD5A",
  "key9": "5KHsDYFWyKioshCqEAEccpTkwVQiZiHV9KL4qzrFX9VepjVHipCTLzCCgdNW9gTQRRXUgSpJPqT2nPXKmVMyMeJv",
  "key10": "2pjwkzfwPaaGtNtcrFQP7DfBovNh1jZxf2QQtyfB5uyh1oCHtvod1trRe4Gg9tf1GzYsYMHUqx31n1rEkss1gWxk",
  "key11": "v17zA5RgaGKTdaG7Gt1yQNHD2ZxVCvy4sea2YEcaA1jnVacAZ5V6Kkuxk8sdEa1M4fhc9R5nh4JCTsp1VrH6xPY",
  "key12": "2f9YYSy2g8thDStMKHcTGabJijnRawM7xjafXdp79KjEL7RigSeaLu8nd2RNqhrX7ndhosxXzCweWXDEhRbPRqoE",
  "key13": "1YGzL6CRjiAz7umDzT7fVJGTfpJWC9wQhPS8KpseCRLCWCkVid1PcCRxn3AwmmnGR4gQkPyn7sTSYU3Mpj2Xe5J",
  "key14": "2SpH27mhbHLJjSfpikw8bH9tbksCWpjWMFBAEM3SV57aXNtif45qQVU3f1gaZrUDYj8HJ2trPWmtx8tzSR4fqUjK",
  "key15": "2WezPbMuSCT95nivB1JVdJAkUQW9Tdu4ksDdP3ZFExN36E3bWziaCjJ2eY7PCS7VYfXYPfSdegcXwAg5Qbnp3qoj",
  "key16": "4QQWjMnTxdFi2Kgu6bLd3gzx76Yk2Pc7UMwWuEUWuQiQCgEgsQjZPrrASZQopEBAPXVzDfZ9JKrzjTQ3fpgYndPy",
  "key17": "GBy2LuFxRgTYva9UKscs7KVMYzLHkeuRoCHZ5uMuCv7uUcnGngPVXjQp1LjhA4mPVbmoMCQZhSzxMQ9vzR3V5WK",
  "key18": "4QpBJHF6ByVXJri1JjUj4ZckJ3V1WrwqyTb1mqav1oJxjnBEXoYh1Z2qSZ7TLd3FVq2FepVAucyJpjreVJMDVojs",
  "key19": "Kd7ZdBo5teN48rWZb6stBnwk9wGXLdbDHhSsU71jgvwY6YAqgrszwyphEzRzxk5Qb1Ep3wFHNqohghX1ZcksUqp",
  "key20": "3M6aTuDULHsXDBvVP3ohK2t7E2H7aYRn97reyM4a2PAGDA3NQsHp8JUrxPtwQT88wHCRjei7ekULdYnCzCEDZrG4",
  "key21": "2Kmk8L6NVNKXkNj9eZ2TjbqGsXAh1a4FqWsJm2UmVZQpqnsdEJXi7FjSEeDogLEhcyjtR34b9t2mNzCus3ctiyyF",
  "key22": "5rhiRqgHQCM5pKckTNrjdUpJQVfBNjnX9Dr7Mp5kMP2yBSwKBKMnFrRMHV1zyajXiVRAibuxX41aHD6j6pif58ft",
  "key23": "jtL2HU8vBimKawFtAqbcXyAQA62ph3sJ9xuYsn3P2VciTVys4Sj99iPWkKs3YezfJeZJTBDcT3QpFfZEgxLJgNQ",
  "key24": "2pzGjYVCkFyhCLAGP1bX5hhNYXJhW3JuQWaEQ2yDLBmuuzJUdpYN6pSpGa8pcVdH6sdmxsachXws5odbkkfaK3zp",
  "key25": "m79zaW4EsYKQo7mZ9rVriJAuhj2inzBVqvMPCuT2tKFV2NbqbV7QJKC9sGqpE8juz1Jwbaca9XHcaSh83mELPTp",
  "key26": "3zFN3oUo8HtK2qxGCWHLSGaJAYtD6MwEiJ474PdcRGacd2wwhegvVAArbRV5i6ewkzWK7uCXTKbH4H1wGcrksGWN",
  "key27": "42cPpauN8eKdWHUbV3qaFShV6ivPDo9oeTMBxUtkZYkCKXzjHThENQYpd3ZwFoLZvTd8P66c4muZWFhFW1QJ3hrJ"
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
