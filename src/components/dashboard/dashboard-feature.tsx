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
    "5oxpTa2XQGPM5aughHvn34YnWNz2tSExb3JvFBGfy1ZmTsBMiswQmsGS8DbE7iWa6sLyjzdNSKMY3qwmxs43njhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sb6fou7BcZ5dCWDRZouA6bo1SKFa5TMxb3eKwhLJsgK6q3TWFLadVm7xYW9fuzbS6tzdZqpZ8kXJqSTYXrPTit6",
  "key1": "3vjYnNqs3kBKZFs7nL1QsHw4dH9sNUjubgyNU9nMvM4UnWirg8YW7A5ofjd1eHVgqzXvfoQpaqLMYznjXtukeTo2",
  "key2": "3cC49mtyTRXRwQbZAy93Wgq5amgaKfV6HFZT9D4DgpFR2PDoDpfTzEzpC1zFoMEuzM8FhNauPM8Uh5uk6TuzWhAh",
  "key3": "46H3TcwkBMMFGaL7dmS6NsjUZ5HbQuSiYT8t9nWwySxBWtgkdbjNMSq9o2f2awh7iyZ1zt8dH4SjRnVH658Wog8m",
  "key4": "4ZcXWb8rAkCDg788LyHzknE1inaBB49jngNR3VtibzTD64mtnqEp3EwiDKqcbuiAqzi3ACHRudwu4N4fwVUphueq",
  "key5": "3cH4dpiYHbkhrj9C49Cqkk1R8GfHrg6FbPdVEkiopQY7goHLw5eBQt1wPLJDxyb9kH1rwq8j9FYVupQ5mSBVmW7s",
  "key6": "67bEoPvWz6DzoRDzumCzgM4aBoXNTgZEgD4vsj9ev5qNjUCSBcR9uHiyicoLbJCfPvVWvqSLKJJ5dxxEx4Gr6tyW",
  "key7": "2nvhRvJccE6dC2AxeeZ9XxnvJUpQKKzuupYznTitVkJjNbESKjwvXYahzLVm1Nq8vBQMQSH8Asxk77iGZV5vW6hm",
  "key8": "bgLv8oLxKa6v83fZxbHeJXtdC7ShiEKzgkpsDdjyP8aKE8jkSSdFti5pXQ1pWxTGk5M2nJjYAngvuC9CzAQctnc",
  "key9": "4QSkQmjiH3no5fEmkrJD4m135NVkm5WBJwNYCwM8h4fCFWf6MThYAQbnhu3Q5bBdpkWcr2oDnG2wwHemo1wFhnVe",
  "key10": "5UryXnkcPG8vnZcUPqxmX4C1uBGX2KCs3bpgbdCBUuD6gZLNfzrbSvfJtfyp9VxswBBZ186Mo6WQDdorEBZ6YMem",
  "key11": "5vrJpvZvAPdEtZnBhrjCgjrLSfsMgPqDieXVZs6mnWHw89CNr4A4Etq5oKd9zowC4HBwicxVAV3TLoBqxB3MVPBd",
  "key12": "4iPjeKnNB72ampheatdEbyAVvRviapVqypWQkvR8uFa5HXyS7zJL8146hnYAK2s33V2jLdKatYgg2hwb6ybRKLFa",
  "key13": "4111vonWFtLXTWEED4p3dqMFWKBcPSdkRqR3KKdxk656DUo4kFAiWPSWoPA7Vg2FHrwvJ93Aah9RZHEji3updsD7",
  "key14": "9qWo725NJLfNejdZZaCpWDvWwcqdkq8YWTD7m2TJygKmyGSXYYqU4WiVSFx1tMXkkAv2kAAzfL3mGwYQSwuuFo9",
  "key15": "42ToSNKuk1FzT7Y5hrYb5RsC5CCg9ZPwHPym1RGSMHXQwuwrxZiAtySV6XapmwRXE1LFy4uCt55cVWSq4SZFz8ox",
  "key16": "64Efvfb57feTM9HRy9yq8k3CGf9Ud8WK84rjeNQxYG598NvtbPrZLF4g3yVmDzY4HfM3MXnfb8NeAfE6DfCx37ee",
  "key17": "5merjHc56FA79sSxZt9jLtp8XATyRPUfuWKxJnj3kk6tezrxD5NSKff1uSR92faEeCxxm4PacKQbBL1X1yroGcKU",
  "key18": "4JtbUGoESF7uVRm7bFi5M7BEDP8raC2JRV2oeBLCSEUtikvctJB8m48pgktQeeniKYMqqSeu1AWUw2ikQcqzVZEf",
  "key19": "3BAwPnnUhUmwchBLMPr2fWUPXnKzTwGnkCA7gz9vrJ9UTiAbcak3qjRxkJe4MrTgKbkYwrz1yfv1A3p7Q31bsQ6m",
  "key20": "3NAMzK6YakQU6oMBoWzkpRdKa9c7wsExU5cKrztnanLGHGVQpLj2H7fLVrq74Qc3yYCY7FrFhtkPQ2YoeY5JWzb6",
  "key21": "3zLe3zaeoS8ji5xJTXPZ4Z8sMMmKhm5ZA5L4GLgtqq1DmiNaFfgSQKjpAwYnporspqUrLeZB5nznYE1Ub7SqdxQZ",
  "key22": "32MpVB5BcWVNFRsxBcVaFfSKEfBxzrocoxnegCDauvDzxSPg7VaxV8imoitvaYrfkAM6d7Szcyg9n8fc58rS7c29",
  "key23": "2Aeikn142iwx2AenNYawt2dCWxNciiZR2QrZrYUdWNcSVwy8y7tt7BkAcZmQbEX42NdpQHZB8497N5Vnfe9fnGMm",
  "key24": "3hSgojYLT3xzU8V2Gq3KfsLnTG8MecREJwBuzxM5u4h6NYgi4m9aWCcS7nVwPhD14YfXiiYw5s4SiMfAKmSBAiDF"
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
