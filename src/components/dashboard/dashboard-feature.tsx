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
    "4AeBTkWiUtAncBSsRs7nuQQoNGm3Cp9VKZj2fTG1ZaHY5NkvVV4VXiwrLqaLtT7ygJtNEfT3kXkYsWeFf3EnkxRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1WAs9SHSMofYRPQ67zp3nMJfFZ7ThGUeQJ1sKngjFGKkQib9XbyA5r3xcveSPN4M98PBBWueACuzPkbk75B377S",
  "key1": "5eCh37tNZxXai1HGExP5xNSopL4bi6t2UQjX3cLtasDm4G3rxeSodXAkHMy5KMhCg4DXSJTHNMEMAcQSEzNyyAvC",
  "key2": "2JULfuJegpGYAgCNWT62TrZ5iVVayHBzCYCs1XABaWE4fTUWjAkM5WCQMPgVyyxhMkwXrsTeyN5LhUtrifySTF4c",
  "key3": "5CQEvC11guaUpXo4ep6B91eRNb5Wbz1LUwggrEzbjJS8VZ32RhokyQrzm94cM4XsKGqxwfrBfs1msY65d1mYXqtj",
  "key4": "347eqmg9czY2W4QR7jj4JMDhVMKDBCXBTqTc2FkJJKVCWv7CfxtcsXZREoAv3TynkCkYv1jbw4cy2hd9sPQUCp6g",
  "key5": "2L4rvUzWWVAiFGJ6fixgerCxGdtSwY5R9UhGjjALtGWEDt6sw2wtYRjsASWfDahjg8RVkFQ52RH75jZSEEfbLrwq",
  "key6": "dcaAFXJpwJ79UcLvMP3G7kt4X3ktRKFh3JwXC18Q8sqgEbCyJuJpYz9w2nzNsR1Fg2gUaJnDJgWUNrYhJFC7pkc",
  "key7": "4GjeausqBESUMNNYv8mLPHBwaH31fzCnKaVw6oaaaSXRNanzAnfLQEnTD69fY3h4at4Xwg9gFkNKEyMKqr9BnCjt",
  "key8": "qU6QwJF7ymj1vzeJFqB3d6ZQK7ueasxLVKeeKpAh6EWpGdCwpyYkSXT9vU8xpWS4uPp1ikWHP8VnB3doSq21kZs",
  "key9": "5T2w86n14V7nnnFkMwPWei2EAY2iMii4i85837v4A7XNQ6pESLF8vTN2zHaJs5khPS4uMw7eeKcgxygZSQPHWA23",
  "key10": "5ZAQxkkgFVtBKgyBrU5TdDAXsQyBwtn2EgfjYBR8cf5YNdmK2uwr8eM8264YPFeZb54ERuwisGeyhEmV2pVkJRpS",
  "key11": "2v3MtBkTCwpkG2snXqNBQYjihDVqN5rNytgScUWpkjvrPMsrZsA4mPB9xCCjkbXQ3xhD7kAPzur4hiiqsWpHRGBq",
  "key12": "27kxjBoz7AgvqKsVx1G74Vc2wcw3u9xMg97nHXhXnUPHeJPiXQYocFgFH9z3sqnuAuX5sG6B7ET2xy9hHe9Xhts9",
  "key13": "qrFwmMPFztyW5wjBXpe8eMNPCzaZcyzJzRZuo7fg7pn36jYRxEQekqTjfkV6bsMpvQ7fDZu6VeD6EhRLqvhmFkM",
  "key14": "4TwYjUwDXsCMJh8S9VzYi98gwXMyMEM1nAaWNDwuLxoVZjqMDZkVxU12us5hp5Z8o4ps7z4K1hsqbJBjfU7CboQE",
  "key15": "523a7iQzibXynQFpkq3W3Ap3n69h1v3G4KBuA4iiKRjtmTgamWsAH2iXmYXJaYx7wHb1jv1ssabVebM3puysmqnG",
  "key16": "64YSEnHCiD6iGkZBymsCsycL3r8dF5egeHxRqHi64Adzb6ekMvR5PqQSgJAww6bAZRVpAQmNDL2N2cjrHWMrj675",
  "key17": "5wnGxuQsJFUymvLGgtFoHD8BfoNfyLcFVLaRyLK6WRYvga3zQHR6S3WFSTMLUduaEZPQiqevxDjPXTirMr91P7C7",
  "key18": "5jERF1g7LTnNDH5jQiyEST3cp4ygbHimejppor1PHaLisbnsHU4NSaH1nrVtueGQPrgGYB4WrDWgVqMLH3GjGBNX",
  "key19": "3qMqgM98gDpvSsiA2fP6vc1FUWC8vQYyMhabMrv7FBAJBcbLXSYpwYLMWbaEMfJJVZquCsiTjfCrqBD948XXFaPk",
  "key20": "3XJE4dypRJS7szBAo38Q9iRVQ6jsi9Qnjo1kYG6juvkQZJFuFa92mVesdgfHnrELr88KstwsiqkB5KpkwgrRzayT",
  "key21": "2hrW98pirqhiFfWUNXqXiuCF3Z8D3gNLUe68NC6WDSQzZpqKLX4YLC5WXuWud37rCHp151LRbUGvXEdNHdKHYYjo",
  "key22": "5ijFX856TjLhcXcBShiXfVwt9xZX4hT3X6Bb69mfgkak6MpujyArHZ2dZaY6MMJQYDSgG9WC6jKDtJahBHfCfHQD",
  "key23": "59TMNatTHSCni1b7NdWQqKZQ1Z7dC2DHUt5C9V7CMB6Eefumr3pv3wBMWRyAvFuwyAPE92NsEYLsmU2G7qMCQZif",
  "key24": "23b8pc281cAnuU3NigVhqrkQDwCBt1v9L51z4saR7WVR21YJsFG4gdNRxPjB3JPhZPtvAF1s8Jc2a1KycCtw85xT",
  "key25": "5yAzMbr6fbr5s2xguXQmw778c54sxHfZjRQShjwvaCKizgEU6KCbtauNZdH58fRYFgAbmzXj2cTtRCcpP51WqUjs",
  "key26": "4K9QHYsaVjZsx4MVNehY1bbVHVSt4EybRkhzrUPFZwNsajC7FocFnSQ2PXFRvSE1iQx9gv8q4sf48iwFfrzYRYXK",
  "key27": "2gS2FNx1JUMoDhcrSPJEWHprYsKmqu5uXtN7Yn5MWJrtrLKYqFEdenqnssRUWnuG9Mfj5kV9KG56sYdHgKHjLLLN",
  "key28": "3B1341ifCUVWqjYavoEEVLwW2g3S8VKn1PtYCiamBkqRjFxxokoEb9NvqR3LkXPgUwUGB8HCxPTZGDvrJVr7MnEh",
  "key29": "49NEjXCxjRQzCxDUr5ipUUxd1Mp1NKWSFimKEj2PFXBVnyRcxPEytF1e6nPfhnhHNfEjfKcvbiidhFpP1KZ38GYw",
  "key30": "bsU9XHjcVU4ySMeF7PvdRz66Bgs77MyM344t7b69L9sPVb2GhuRDf4edPMDGeVCMPrAdahJeUcPEKdW94nZopaS",
  "key31": "67g4Wa9HWyuqiwCQKsc8YmcZ1sr4dvPz5z71c3zm46851cbNv8ShbzYTRomqEf9YWaAoTugwhiJdNrGvh2Y7EASX",
  "key32": "PfWvFa5aaaDW3ACLkx9ZQvVUr4LoHbYtQLD2vhSy5ePg5hjYusBqoiYWbftr7qdzJ1RyVoeVuXDQUgbi2xqA36Y",
  "key33": "4h8uEK9EjCXQ972HhNMJpvjsGqnTDuEmEhegvbpQ4RuySdDeyFPBJqgXn7wAA3kg6Nmsce7P9zXDYX7zCywQ9Cm5",
  "key34": "2q9EigH5f5uSfYZ21Af8pyce3riy3uPp29QB9NsHaF684grozviVXVTg3gBzu4nrbfcNfg9rURXNfgicLRo9E4EF",
  "key35": "63MveRbJkXFJ3SSp9NTJEmcjs8gSKhvzVsVJMJkq1vo4UpXGRst8GBWrr5TXgsvWGaBMno6VTiof6wn7nim931fL",
  "key36": "3eP6nJHeEMc8uSgCbu4KG1D5g6ruX3UzfUt3YCzjEG7ki1RNfFw2tM78BoZrBjPeS2D78eXWyB2mS3X4d3gnwhVS",
  "key37": "F7nHmQSrd6Jm7UcGDa7zmYeAawWrcUmEfJ7wFXajZYkNEQVrDpLq5FaV7J1uoogXTZpLsh7rzX8HKCe2CurG8V7",
  "key38": "2dkeDn8XLjbZQMfqDnxSrDHtz1Gwh2KCBgYUKRzRXDW2RoT6vGLaukTeuwrQKTgbCnigVSyBHvSyChiem6CLRGN9"
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
