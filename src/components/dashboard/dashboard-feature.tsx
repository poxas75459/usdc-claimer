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
    "4qb9Kurta53rTfkJKb2TFy57SdjHeXNYiQbvR21kHAr8mns7nyKoEYQyEVG3ofbZw17riMQAzv5mYEK9cbeu6mee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RfddpSMx2Wd6sjJGLqiEoCm38foZpbMWRRF38keUgRrPBScTMsMXjjzT8w3wMu2g8jP3o8RZYWVG2mFaJYpxZcH",
  "key1": "3tJCsjYeWXd7Ld3a4esYnfdr417iaYRGH3nQ3ZDE74AkRAXR1rnBHVQxTyBQ6aCakipkVPdvbjWZNPYnB8KGLjJs",
  "key2": "4XSXXGpBP9njcxFyPR6WmurefhciGpREwci6rYVqhdBqFXqyUXm27pmqTiqoD7wxxdpVYTxXtWia7x4ZTfKmDrgk",
  "key3": "5WZPuE4XawWRhoTfCJWC4MkPpA53dn4e55QzCWEyAd4KpoLh5cTc2h8kEksaJWWY9U4GL7Npj7sehxZQ8ytC9Q8X",
  "key4": "4x1F48bDQaoVxT3bEmeDsiy9Yi68rwutwnDxc93nPGfLC2WEjgxuhs3LwrgVg1wX6KmQapwMdvYqzXBA39EfSqHW",
  "key5": "Y4obVN8roDfKQFt8sHjSdmc9SbLtxvwP8NtNApHJZWcPHBZqTk8NfRWH1XvPVnDBS9pMbxjn7qw5STdz2nvCYoa",
  "key6": "2nCzn2FZbVK7tA2c6zpTLMX8Lp2BgV9KLv3FWNM89kyb8Qyut2gu98tc4UjvYbddVQjbNiV5nWmxFDPWPih5YdRA",
  "key7": "2HGx5bT6ciVQfkMJEsWqPakZVKyrLKJkF3hF6pTVz7iR9Mr6Tn82iCoGb6owhjfvegz7FP332DUhmsASLnW1uuXg",
  "key8": "3BposjrupUDdp6PQAZQbtE5xZHFJbyNL3LfMY86njhGB9h9yuzBHH77VKuB4ZQ5MEzRqtkAQpFQZ5dhbwmB6aGdU",
  "key9": "64aRzcRaTawoBc9kbbNceuAKQZGyFGCwWhm7m3bkLipkbtxNRCZcUMJwb99B7mjtVMsZ75Dntdqgn7ZbbGx3GSjP",
  "key10": "4NLhLPPqmkv8yNjKtPxe9BB23WgRKUDydt5RJw14mJqcY9UsC64qX9Wbf2HodZA6NrGZL6aq1dGkJXjkEybZvCJj",
  "key11": "3mKFZDLbvF3joYQhwsWQyPnMYp9paJwV8WuLsuKKMyDT6M7t5Jfw5GH3ocLJ8YCujZpfVtXzBxya9sH5VFjtksQw",
  "key12": "5i4sUDii1csivgFpy2Z7Q3Rk2hyEKAs67bZWdUdtKcEamk3LvPyAeCWwAbttwVxVZw8TGXpKhjJgXDcyvPcLV6mH",
  "key13": "2xje8zp2p9fmFtm3dpAxBQ86cPoywLxAmHA9WgCBZqNR2g6S1LHxiC2gmhzxRrhAJxqQ7yXeoX9ATHAogAxPe4TN",
  "key14": "4BWPg7R11q3UQy7eaf96EyVCiR4SdcSRsNifwNLQCo2cRmqEcEUxQEj55KUAJLMy4KaVmpF3EC4tWnqgqTegKCbz",
  "key15": "2yQQ5mBEgnibkFRhBm9JCCxnwuT2HbKC7SUk3PKRJhEVNGi4QMoEcC8G9QiD82Bg9akEF6fdRPbh3jZUW3YEh8HA",
  "key16": "2eEykWoFmGQyfuqEAPeZ5aq1WwtwVwF6t1dmubshx4cdWmCbfX1Su5WfgUGg4sjKQWY9EyrkPPVch38uZidhZyty",
  "key17": "qST7FrUTXcNDzmQiNfvgiaEqJ3ecnxyohwDivdkmCALfhgpzWNKSi66wS6RZYrjdi8zakbfPNY2ftGwUkHJmnn9",
  "key18": "27h3bwieYZDn529Zp7K2nrxG9HUtN36g9Fvf7og9L89nJQdQpDvgoPRDMHDLEhZgejzD8f7QX6FWr3mPBiWCiJAB",
  "key19": "4gyrs46H54GajUXjQYg8DCwk5DMzzw39cm5WoGUL9VwWTue9ar2EMK9WeHn1S5oZhDTbP6JqMdVeSamzx7NB1iBN",
  "key20": "45GYkkYosBdxcioTRm1KrYwn2UbG74nrVXsmkaq7tnjj5u8R1fB2bCULNjauFjMe5B7vzf2rsV2i822kSXrTFCXn",
  "key21": "5Kqm12tprngQbHCEv1429NTg9PWTZf3gRNVnMZEUycusZmFcMjeGPqoCXfzrggKCTRzwKT1vmnkUmnFZnM8fknne",
  "key22": "4ZRN3U9zs5VqA4MDsKS9LhrgYeU6v9G2ZutsvsjkNpVvc1SXNJD5sUnwVoL2rm7SEDZUuPFkfCdaq2PFnCtLknRY",
  "key23": "3Yn1gFe6TgfDgKD5TgnDXeBNMGf4KXJTQCsVnGMZzcntFLEkZJ6GyaS5jcTmoyHcqE1ZLqi6Z7rNi7Smh99MHWmk",
  "key24": "3RWbemtZi48k44Djie2hDgNpM8M9Zq7jruPtNWxCYnWAoWyaR3Wx3iKZqD7B5emFHDJN2RLmvmYKDVwFhfiXGinK",
  "key25": "2eGvSRYvVYjdNHarDMFuf4zWWtU4UQKYSfrgD8XMNyk2Xi5JP4z6CmwFy55Sz7a26o9uJHNJdpoqjN31bkxmru4Y",
  "key26": "4fAq3TKoZMS3wANrcee3taKz8oibXQVAWa52sUPdW8ZsbZn5kJVDxCzrBAV8KExbPqgTskJex52DFryAaqRmiwXj",
  "key27": "43JicJsf5TL99oWUyq6Jo6xLpou3aL8hLgtnRPYjYUY6q9SuKirYwgCMY6LBUYjxJpSbkkwueHUagzsAEoFaL1dp",
  "key28": "4VfFxdtzBeS9XmKJe7QzPEDm6mVDtTdhXNjkEMSzkeM5baSwEPyd1J4ie4UGsjwnPf3kvZTSDj8nxLUm1kDMb4U7",
  "key29": "3xcpBezSWmLAMj6fwgxWE6nAxV8XKnnq6V3c1DXkRkUxtx31wEsycmYTFcT2uUGN1jqK1s9C9roDtxW51fgXS2aN",
  "key30": "3ZtRriBABu7ztMNJnJnffed7co7q5YawsUaj2tVxuWjBe2YRmU9fufbUDmuYxDXUUbgoE2qYWE9fFMNakFmTzzz4"
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
