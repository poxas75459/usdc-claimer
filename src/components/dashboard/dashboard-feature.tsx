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
    "NZJ1BiiJHNMR6zCHwuhg1yieWeBXHdKvxtae8h5U9KJvqRegWU7w34WLPEsRN9CHpXkXuT9Jp9xpmCYsqktRmy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32JE17TJex5H1jDUmvY2Q1Q3ghwDjaAw9jc8L19rnX3wuRDwdEV9ENA5T2wJYbvmL514SsG1aPKnbjqA28NdA5Bn",
  "key1": "2DmVdWJaMEkqDngbxaJoUhxMc8EL1JJWLsFE2R7xsx3ouzrZFtieEMbhFPrrszvqHuuPvWEcrQjuZiQEq8PvqqHP",
  "key2": "4R2iT1wJebiPUkrFVf4GRmmpPhc3gowZGPqWrxMTNKmMMTbAaxfQoogkVycYs5vWW7UU8kWmM3SQTx7RgbRcV8A5",
  "key3": "3b8FZFo6nBQWmzt35o3PDmCm61fxvraFEiqCrm5mcWCiSQgKgXZCdpcGhAUFx5AHVSKQ3bRD8kQWHTbR7xsmFUN8",
  "key4": "2wd8Lf3YWX8jQk7d1ozZpff5LLL9qb2KiDoAXw3vAcXvjm77NACKVP1nUcF3MZ3BRXEx7uH4G5XmJU2kVqRBs2YB",
  "key5": "4D7hGy9uJE8H1efrxsXah5odXy8bR7FWvBSobDs4v9LUUfvZcA6eqShnzVeBU6ifXZ4UQGneDwL4Gphz5t8f8qkE",
  "key6": "64wQhGib4DrNVRUuU6mHV9FHxb1HWpazMQn5vKG3MNCTBiWPrSczZeDtbrYuW5aARhYfszUBBVdtFRX24tpbME5C",
  "key7": "24uGCv83BuVFr71QAbmzCnLjhyWnj6915FrC1H7XnLLv4Ty63rucrffAvbiDwyJCAs7LRycBZamwqvgvmwRyppiF",
  "key8": "5HUVE7qnsDhnEEXrdjTt28eUKZCccBtN13h2bWTm2nsquecrFiWjc5wRV6T7uwieUoFYfnKWUbznW5TWJgES1uwb",
  "key9": "37iUYc5oM8BvisYpEDMh2P7A6Fp8FJL3SwPrc7P7A5K66D12yaymPG7KjcLZhEHNXUD8pkZ9VCsFGfYhUGoKawY7",
  "key10": "3Pb7yg7rkp8Zqe9LH6MetfqbR2e829Djwg4XkBHbfjGAEYbsbidi1ReiqT8eNwQtdyZz5NFnbGfutCwHojtBoXWR",
  "key11": "2FZoHz45EW7DJFz1NJRztLuLnE7fSk6bTM835k7i6FCpE4qZf1U27tkdxj9PdnHK9jivKNxXGPi6KUXUC7LEyweM",
  "key12": "2eZtMpRQRzBJJSwfouQaKvGK6kNvGdugic4APNsYXZmHnShDpaDYdy5svijBmDQBKd8EGh68FuwuqpST7tk382M7",
  "key13": "47MYFqFH9jKghqLogUX9frAvRv442Ve3f8TH1saLMBsow6iKQXqzgTeBSCERTdaJHYe9K9g6PXn7f8jUi7LeGusA",
  "key14": "5A69JHzCmWsEBpZZtHbWdbnE2wwMtAgGUxMPeVR39frH6AvpND2oF8cQ7KRUCUZ4DxWmE14DoP45qQK4WWksEVDD",
  "key15": "4PYijgRiDPcaFSHQ7WLFMuFmWTjiXFzbrqjgDUPyvKkhzpTYisgSUopLMBS3gSs4NQgAed7KJnAz35ppyfjmqabk",
  "key16": "mrqxELzAeuJW5m14dhZfYVGdbjb59UGEWJ3e5DbY7RVWt4mVjnqzPzDnvPxwgg8WB4QQUfmTC5tBZNH1jeKkot3",
  "key17": "3HMGUQ3ahMfuRvipyYmJH5f3UzMPaRdBnabrBtZLHhAdHA1TXDoHZyKjkT5qPpEiRaMYQNqahjTzsHfedrw9UsMq",
  "key18": "3qM3ihPntgqM9BHJZC7jrw7MHVHzLramTbBWWc6uqm7aLRhtbPLEw74x7pxvyxxu3VJDthjWW9YbzhWKMito4zMo",
  "key19": "2F44vTQyA9vr2zJwA4EmrhkCQ4gpwSwFWwcqdHk1tsxREKviWduFzPSzLx6wXMbW6DDVakhDvymKpmonhhox9iPn",
  "key20": "2ZNn2BZY4rFzumbBYj7GXYGJ5TcvmDSHjuE1gnPhvZuMa4cRwkQQ2Mow3Cw6YznW6fffn543LDbfD3oWf9wfUiK9",
  "key21": "5r6YiPoDY8dCssgXat2219uRoAeit2BbAYxAovCqAx9pDtY8FeihTCoCRGipZvN5SWuzqX8SoEGvUxW5PpCtYsNN",
  "key22": "3EgopvUG1pQ3wAoCsK4UrzEW6NQG877R2dCDCQbRBRh9Yxnc5XcyYuG156LmCs6kCzPWtBNdqMXRDXNYQbKAVkme",
  "key23": "3GcZZbXB5iBihb5A6dYfYgoZLr5xaR4PmMASsk8LDt6s2qTGhxYXGg6T24eQyKBcAkniAEibQh383hRUDxzBfYmh",
  "key24": "2FzNjJacWHF5yjeB3rCP4RGvKxYKHZcn9BpRQoJwevhdEVM7k5p9HTh5MxuvydCLo5drgwLfdHWEqsAJXEGH3Z3K",
  "key25": "2WUX68AhncaAYNBeBAAHs2Nk2HgBeSuXf6DGz8PUtzMZwq6QuJHQSfiegsH2pkdFdqGzukzf4sfA5gsDQ2BqXmMz",
  "key26": "4DhX4gNfekQak6Qm25dq6121icrteD5brwfde8TJMvLeH1F7eoP6HbwV7qX9ExHk6Aqc6n7pZUqE7isuEg7ZSyYh",
  "key27": "5KRE4i9dGw3KU2u4N4KNLW3qXmDnp6en1TUQbGssswHmmJLrfKsPAXNYpRYuwVRyu3ichn5Z3VrSNY6er6NmDKfm",
  "key28": "55ydQYuemhtZrG84dCrC35VnNPB7EipDueFQFHa1xEM5upn5uaCzyVbemxU6HX58Xpvd17gEPdvb4hYjKEnivq5X",
  "key29": "5U4bcAAd3aLwSpEQq8hnGPQHoP6fbj9FWQhU8zpt1xj2KJ3jnXPjwCZLDv4YDzAth6S8kVjhsqo38tWJkpYo6PSZ",
  "key30": "4W8rQvMrTZvTKhqSPrrny6Qu5tTTz3Tn17rCTfZBcb8UVidFa9KB9g7fhaSr4jEiBinJe8BRaHUYQC3j3hVN68uM",
  "key31": "4kW6hUG8Y3NuQuv7jvmpvUQLpxVsA6gxihoQ59dAuVPHiP7urkrzJ5pctyFBNWCcCQABEhPeX3sXnMDtuA1tnoex",
  "key32": "v6JpJh6TmhVgdgvaaPBu8dUDwtGjuAJH4NFQRRxSnsSBDBH85dgiuFFgm9NbZwZJAYe3SmehZLZDGsntSLjUgEh",
  "key33": "2HGor4MkBQvrsbvyGoQeMCEF9RvY4dE9pbFiRP3LN8XpUCyYPUGSixqNjFQS6GDoHNhMKXbGrNpzLn3kieCzify6",
  "key34": "2pSfzZxWK3QBjCff6Y5R2RyExgS6JgvPghV9mLJA2EHiV5cg6XSEwMh3zThiy9GmvgSdYt2ovUuRyJM5Dm4mzXML",
  "key35": "VtFYmGU8DBuFEWY7mVfWuf37bp3APTW5bsukDi6poQhtj58BQs6qmEersN8e3qCSx9jT6aLqJm3z6uXLXR7LLsR",
  "key36": "2iTCxUo8iw9cjSQ7AAc9wzFCHf26MfqAQeoPb75XYxt8QunGoismf1yuQiNLL9vQatawS5JUjAq6n5xov6dS72MN",
  "key37": "2kdsxrDSgV7toC3Xt6bc88gxrJ5YSwWvoATpNwv6ycCSoccVWE8xjgboYvSfvmr3bV7pud3GXjCzQFAdGwWphTS1",
  "key38": "4nJPAkpBZquCkonndBrDmurASt5ijhJcszN18LbifSBn5qgT5xjU9kpCesGfro3BghfHmgJZvYzjFB49J1uGjrMC"
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
