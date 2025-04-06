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
    "gbKJ3XU9ccbSxhEGPMDEUGb6wcmtjAWfsZDH92yseuSEFDPWZGWmMpCEbdYSAuB5123XyWV71r85eyJjofXiYwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7fNtVKVqkWYEGDYxxCV5VAqDRQmFoojXG5WFkLZyUP2Mhd16LzLWCgnrLLueaZc3yGgdsvwXU2VmdRzKJcbh75p",
  "key1": "ajqhspR8keUvAMbYuhUBViMuB98r6UAtYi5dYc5wQicqiGyRjrKKSibTj1ZA1aaqBJUF4AZPUskvnfG5c9VuC2X",
  "key2": "5SK1n2BwavZkhMpcfs6A3nYpYktijrMkngLCrSWcab8EfewiRxzWKLMrwEPWTTrBdkCMA1Xdk1dj6Js3KyYcXP7V",
  "key3": "2u2x9eY6oNorba8Ti71QM7kAF91Q7nY9L12kBuSgQNJ4kpbBwR6i56YYLXaN76GYC7G4Kp31zu7vqezVzr2muPpw",
  "key4": "4Qk4ZELjQXNTv63pzQvhnRjGTJ6jozJAam3Q8MpurhVHQ5nkxPFkaJWfJFu3rdPyprFYQrxrgYokuPmXoiopim3N",
  "key5": "49T3onvW7UakXmcGPMFJuFvzfaiPCJT8hsqSLoywnSDMcLa6S3cjpxg3ZdYvoFN3xKMoodYxU2uD5c8aU2t3FmST",
  "key6": "3z6sJPAUnqpqpyYgKqhN8tWV476RSBqPwWvYP5YpuXc9DbmunEaHusqJ4KWbBYAnKX6KBuhVHvuhNDuux8bThZp3",
  "key7": "EDaz7UFSjTp72xE29uD86e5Cy8yPoozvPytXLPECFFDV1Rct8XD269fZWezcT5bsfcp9LLQeuLEHyNq7bTE7AXC",
  "key8": "5W2W7ir1TGRVkyi88hJZtVBmstaqkvVJoUuhURCfy9qzU6QZexweo5mg3D4FhaVbZ2EPSipHmorLzCu5Sxi7ufdw",
  "key9": "4iiBKrRdrTBSFauFHn9i5Ft33EDqAWZ2CyJVCFVhz7XeXwi4kTdFfq9j5doDR7mpYt5HhdjxLsc3vuNwoBNKdqMu",
  "key10": "32Ae4tftHk95oodcHBjbvsRgghViqjBygyfKAh1dhjN2dtBPKCHXya3cR7MErVDfz9feKWQ14dcZt9eh6JsKQEiW",
  "key11": "5MRwqJuFEYF18ozYVbXwDtcer8ySS2TyupAfFNGxwm65mE77BnnoEzhPFXL6WZqQgr1n4VuMTi1HnYC4aW1Vt6WT",
  "key12": "5MA97irJejpQHbmcgvusuUUPiRtmFbXAZfzqeMbqKVgxLz8V2KZWb9npkpLmxxx8BY3z5DcGA9fZthVDvRgE8JkH",
  "key13": "3BXoAwm8QfbtrrC2WruxEU9XBYBfJv2LgbmQUo4n4bffYYDRx1B29EwG78PQktZBgVBVKNPP9oWmo2jvY4VM8pBr",
  "key14": "2R5UrYYxWyZypZxAXNa4YAiBoLdV7kZ2x83NUHAiN2MrFnMrvsQQ4VEoqXKRFJMYv5uAzrHxmx9udq16C28zif3H",
  "key15": "4FcvvACrBD7HFi42MFFTcU9ioBfiBV235UqnfAhWVkQY4GEKMgeZpaBbF89nmGP9he6L4uMauP7U8KML4DMbJpVG",
  "key16": "4GaqS2xN7v1bZEmVP4kyVULC6NGyRqGDnEVgB3g4reYs4u6EKo8XPaBmAmPPCjboa58EeuhLoPUWALdz4PSWe6VY",
  "key17": "3PDdNkiWfUScJHZakMMa3Z3ZL6nYVvnTLWUpm55NQbJkX6c3UVR1AzKjEcxpqZvocRBYtfw97u1K2DDnYAc52xrZ",
  "key18": "21qp81MjAFXEDmn8A122m5zjTsrJj53aoHdNSScY5cwgFQGX3RLhZmsmsxxsm1Hq55uaQEwFiVqMM7fHd52n8JXr",
  "key19": "2TJivMr3tdbjkX8kRr9oTtSTWUUJGeUcbqck6BZ7eae426HSzoJUvq3cLzhuJKxZtjcGXJZtf7XNkAPL9xwR48nj",
  "key20": "2D2gYQnXxYEQkvLYQSk9Ni8uATSCBrNzPhModzJm7LoUsQDqDJTsbuAWEwSjbD7eQr79P7y7CwKx2a7tkjDwUCrJ",
  "key21": "2vyTCyaQuM1gnomP2DQPv7MBprqnGK6oG68LfQKYmfFz5Tn7F6mSkrTLMimxrsU7tnNpETeMmhq2SiDs68ZwpyNJ",
  "key22": "rbvT9t8FJQU9aPkU5xWXyQzHQAc8ynVdr6UQbEHw5pzbWFx9twZZZ15tH5mSukxwBHq8Ny2sPE7QjgzAJQTSQH9",
  "key23": "67e6JYauWU8gbe4cLMM6r7AUokULT34BUEQMELhbzVzbPXptx3B8HagpJEX72En3BnAuPLSxLMtXrEiY787kVX9H",
  "key24": "5tA8QWTtdG26iMrrR2zrRr1mzKZayM1mpP1sQZFCWE1EiGjPmHZ9Sko8GurFfChAbsoVYpZ2hJF4eEBerHph9Ubw",
  "key25": "7H99FuZnQ4zZK57oy4rtfXoBYuAFYFBU37Kib8ySvjvrf1noQDew5jGwGSfLWT1n886nCNo3z56Bgzr85UEzS1S",
  "key26": "4rQSp3HnTn6WbV4xs7EzjyBkM5g8uWykhoXL8egoWmB8rJwdQ4v1bvEVxaynUCG2GmS6peUQr7UCEENva58uomLR",
  "key27": "5TcjQR22bcptroSi4kPbtsq3h5zEbYTrcsV4vpnmXu52aTbKk7Aed2nVfAmGkqf2h7GuXFN9GvaJAST9QyYphk97",
  "key28": "fzwbEhdiCULboFbEuzTLk7DgVTYbbJExkD4VuqjcpRZS3xsicgFSD2sZGFr9uWWz6ZSgcZexm6rpufbDP1HveKm",
  "key29": "i4g9tEWyvMPJZ8ZNDoJxEVWkDwdNUSxEVQtFmbUZrbj7iPcDM3kfCvtDWJxVMAm2hW3osrFePEPLWteMCRiK9bC",
  "key30": "6kRNx94tnT9ZwkFTjyzPtUNk132EiBg5BMUB1UyufdMVBpYr3hpYyDD6nJrjBzWNomwPKTsq6vxpHVhWAyQS9Vt",
  "key31": "RNbRMDZ2Vvt5Wvz8o4XAz8H1SEFDuCFjSX5Yr3KvyJJutK8bfPxtkmwW8zEsBDD1mFB7ChEkFaJq8PUwxff8XgD",
  "key32": "2QnbTdvUCaHSQHYcSNStvqQvTRBZPe4SbhXegHm7tVarNThW6EvaVXtDVrW2wKCk2Gpw8Hop7dcYU9aksKVpfpLN",
  "key33": "5qHc6TBvXHUhFkcr2kcSWW9LqKV4xLxxrHGqZeLZ4FybMXxc9bEw3J18iSdb7m5xPbV5B5m2JZGzZdc8D1fjYgKG",
  "key34": "2c61nazo5fhUcdhju1GeDgpEWAW2RV6PQho8ASZSH9QhVkuCZmcUu6MabmR1vq7USa9CaKtJcGz2BHM4mmvERzRq",
  "key35": "e1xLAZJp7j2oX7mM8e3xrkUwLcvtKoPvaW85Ti8nZQjcvafZnzkqw7pzDmpt5PvysGFjxtA5m6RPUEtNH8MpSBx",
  "key36": "4S42SLcV2nas9Ff3i7VuPfDqdaZLWkZCd7gh5wtKM6SuqjjhxegSNbZV3xqaNKEk5fdnxpWooJHG4eVikrSCFLrH",
  "key37": "3fRCtpEcv8AKvGh1Aqek8FmrqdtNDrZK3UkZxopaPNc8KSYXk2D4onKfSCMW5gpS92j1rRRqwb9jsTXjkpAScaeV",
  "key38": "5JWw6sQszhySwgPdPL1JsUmYorPGnm8yVC2S9LED1AfzU1f4F3SGwhRUM2aMavwtCV3vmpogCxEUkRBCRhazWFwr",
  "key39": "wNdfzWiBz5UdSADMjJDc8zfksvTghQK6NvRfXBPu3MevgRm5zN1HrXrq7LWzF7QRxMgEMcAc18dfB5rUvKUf6Hq",
  "key40": "35mqQUKUvc2bq8XziggeCDxyG1xB2gn93jsRKA1thJfymach6X4QhKt4ojugBBUH6sz8hpwnowAPsbvY1heZuxoN",
  "key41": "3mgiqw2H3NuD942eUy3nDjKaLgvz7gFguxxAx8UmMd5MU9tFFSbfU8ARgNn6i7JyxFbr3rv7xy5rF98RczJnvECC",
  "key42": "2wm4rCiYqkdy1tpFeWrstq7RrLWdPoCpjyFRyuzXJaon8aWo2SmaS4VaupyNqHjESQGTHa4JEWgnooTR6chYn6tF",
  "key43": "5jyontVaJ986mq3PYXxFBhQux2ufzeCeSiqazAxS7b61uu2dA3AyY4qZdBpozWg4EgqsukZoMeDYnkXocZziaJLQ",
  "key44": "58MmszNcwkm1R9cj6LGWou4yWgGvnX24fdsZi9mVLsqbq7KpadYp2uGN3sNKEPB2XYu6frjcSjTrhq757xDnv5Qe",
  "key45": "wdmmpjyf7LFMefsgjw1nx9184QNxDTrJsKJ9NmvYZQpfUBD7m6KXqoGHGVyhLVeqwbovgZtxxzRmuDW4258VsoA",
  "key46": "3hACwUFNFp4RCqTTRuGWR77XngNeQ89u1CYKqYegNwmsewwGaPUvxp8rEHzrAE9D2zRg5o6R3MvbaDUb3b7DN2Gk",
  "key47": "3831NEKi2uadmiXVC58C667xLW4sGkVRPUoBYxp86tVS1YfLvwd6YgMGMcWXm5FSZ7KDKyHFwHm16ibRHSkKFnBK"
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
