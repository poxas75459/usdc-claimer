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
    "5593V5xDYZvHM5vmWTvddR4aY5h4sidMEfTqw6MQSPhZYPwvgviMNQjStitjtExj3NUwZTyf51dHWvsGtG36PY1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nJoUy9WJjcp5AseeRWCNZKtauEq7H2GPoYiZksctkpDwDwW9H5CTSWwXSixQuwaKHxW6TtNbKNskVcvcU46LKAV",
  "key1": "2G2EpC8GX52rx3mA46L5GWBZsh9EDeSuvoNebiLMoNmCiG4caV4AugZstjK5h24Qhz1qoZ8UDuCEV2KfQ9H7sDGc",
  "key2": "5s4LSwwQFxQkurLroPtXx6SEtubP5a1ERmKbopGpaSY29sBLJFVKbCXXBwoksCRiV6WAxUg7Y6iL8WWTm8q6a24a",
  "key3": "2YA5DVv6qVv5MW3FNiekwE8EaCRAWCvXyg9JoHVyKv7KDSaJX3so5vRxAT39S2ZX6a4uY3t61tP6Nr3mriE4Mqnc",
  "key4": "4uVLk7NwRmeXpMBsvJQauMgXh5zajsmz1tAqyo2s7K9n6pZ58ziPMyqdoPtzUGRRmuacXdUW88mbUvHNYZU1tvrX",
  "key5": "5GAc7ca6QePCSjhctF7Anb99yst5LQpHS78WS6oC7NwKMxW9aXZJjTU5wBWjqeP2tgHYCjuyxLtdVjttqXfauwaW",
  "key6": "3qu6j2NGkBehQangEqibRaP3Tdm4GbvVpu8Bi85Urkh2eybBtQ3gDrVpd6Nh6n4dTmZGnjyDbbQuVjsevZWh2d8i",
  "key7": "2awUavuQ7Jii5b1sPuf98YSKHX9jQ8N7LmZqPvnJs5dcYc6rRBf9LCgA4KPHVQ3r8Woppu8sbYdXDKgtX4cao7U8",
  "key8": "4v3i6SX7N1TahFzLqgpKppnrgdmtVUZABL9pi65fCSwQg4eANtG4gdpy68pwW7Q1d7BFbCZ8CJSy9AVnGXxsaFsW",
  "key9": "5SEUELmoRmgguYLhBhjus4mn2K3zGyLVAaJxLxtqtYAFsFmWiTwmgzU9fggR92w27z3mPqxHnFe22A8SDyxwyxtx",
  "key10": "7YPUXhFD9ozn76Xcyj2aeALvTCpUaXJY2p8MFRngynxR2hQKUQhfC2SUGhWSjFM38vEpg1sy7QbQqHhnhTGWxPv",
  "key11": "56QhS4xKxEn3nhkHfQG2yLvU7tVVk9c5Tjr675EEP8UA8XweSqM7PjbQj12GQSL6PhGeBMGWM7io9q8YPdEEjeKW",
  "key12": "2z3C5cnZ6KgyehZxefGtKmYhYcjqJaRkotDVBh3S3mbGRQsMsRcKVPY28rdfYBEHPY43ebW8d8vGXcavhbWapaXt",
  "key13": "2G4JfH6DgWY4HEhDUswbTMosNTCnKHbrQWmjozY1KqNLwN9Hc3wNx6hrF945CiX9V1gBbis4pBJ2oQGzUiQgp5uh",
  "key14": "29juiHtWxXBvc3oyrnmz7NinLHJNzwqCWEPA94wKaoJ8jsCwsp8yqdFpUbobieK4rpZfLY5NN83hec1TSYbefSfF",
  "key15": "KgAxgs5jekpsspyimsfTeftEYXfMBgSP4zbVuQsMW6dnYXRkuLeDxA5xvJz7hNUVLM2ag5xkBhFDvQ3fuqgB6ke",
  "key16": "45RRdrs3qXa3G3FZty1rRwEkZsLR7kGf5ZybHWZ4nRsrcAnEyLZKJX9ydxqniNCqat12evXQ19YiwqNq8EhzQNno",
  "key17": "4Yn6YExJy4Ne5snJBK9YfrE763TVRR2kYokUNe2ED5wHdreYLyCpmqrigWEAyM8P8iNZpEv81gaLHEt9euYTN8kV",
  "key18": "r8uRrf9TmakC5cqSR7oxPXCPDus91WG6u4KywaAYqdpLdKHLbMBTwuXGn8ZiCpdNAs6g6vfKPVCVyBUkBwRqPVd",
  "key19": "4LXXCoyGaocSqP3wMK855v7M5JCvfCrMB3zA3URrwLUdzAvVJHN61fpKpfym1k9E5bVGWzv9SZds538L4Awo2WzG",
  "key20": "2yV87trMEXZTbteWqCjdD8yrtN7XXeVRX7PpVWfJq4BJGwyvgBacACd5UUvUuLSS8cLMZ14V6WwvCFngyggHfi4a",
  "key21": "6APN89Qx2sdQtPmGHvmegH2gb1hBfDYymc49eyFGTnDQyCScNCTi6GmttzTzfxndCZokVTWmffuXq7V1WnJHXSx",
  "key22": "5tYhnjAvFJ2vU91a9WB6oZPqhgjYt2THEnE19HjEC5gt5gcucWQf2HHj3Dd72PhStXKLdWGyotwDEx2fek5rG3W3",
  "key23": "38rD1zianGjUEsG6V7WCF7QbHPYvZzSpuo6imoq2qhNLWRNbNuV9GYzc1Tkifc2Mc1TQNgJ4tHhZPqmoqtgFe25G",
  "key24": "2RUwxDobGqZQygd2vKd9Wj7AzStKsEJ4ePWMXdcNRexhxUzsbnAL3ue2nvyuCXsLsA46QRgFk1jFjutx8hAfvGgP",
  "key25": "642fWGa4BteUffwxCVb6YRxXAkj4Gu2zpAQXERjUe1AtNXJVGzozWMoJnGfq8wg6vhKL5iWYAFAuALPcAEKKbY1t",
  "key26": "2NxH2Upes52eiTnbfud5RUYHfUBCESv6m23sXjd72mWVATnqZ7A1iU6HDYBUGzQntceQTBob5DH9E781uQDdZeLa",
  "key27": "3MVkVzKzYyTSGoWxXXUcW44UsGwaBUHuHN6BW3RAh3B1RvDbejGY1s3taiDj17S8k2m5Yre28Z3pWgM5krxvD6p6",
  "key28": "3NPuWHzvvj3QU8ZqRMr6soWU7Q8S2q7B39BSmGAXW5H1U9HDF3iuMbPi6reFgWX6z9itrQgiA5KSWkCUBFpfasMX",
  "key29": "AZZYMt5gsi2Yi74KTHoacoyU9JayXNEn1WXeDGSEyY62Yf1bPHPMqssj7K7HfsQstcyepbyZib4AGKz3w1iAM7e",
  "key30": "SRxnQwkzSqtFGnRw1D6XR2zMBzPjDErM6XqpHGnJR7v9yLf225JJvBEAm5doNrtQFqtA3QUnUmLHUkzsBpWKWsf",
  "key31": "VfBfp1XMP9nSWxp6HQ12cwyGBCkdy3wz7UCHVGg8XPUDjRt5t26RTm5wRZ3M24rHcEqiugeWnbJ55GeeBrbp9tT",
  "key32": "5Aba5zEsX4J4ocbJHqSVb3FMmsB9SKaE1yawZMHa4fd6RKhNof1jAnwTwYTt1cioLQcTUnghtqQEkw3L1rTfpem6",
  "key33": "3jobMjitbUAmo8vmQxAaVGp9im6zkCCsEYhJmJCmURqMzchX93QUuKTGsBn93MArRbUYFYPvRKQKbdN7cD3Jqa9J",
  "key34": "5U39b1RQwCjjwWqfqBb68juR1JFURmvCP57jgs6NQER797dEHR8JVfo7uEm4ekoiDiZmBwb1itnTkpL5Xjf3mS3a",
  "key35": "3tB3upKCZJphUsnusx1ygQcgsB4PUBfN8rMabtr77j5BfcLu5pAYWYMk5H7YZoGJ7Dy7UacgyXRNWbhyF1raQBfz",
  "key36": "47Ud61BWuwRw7DYm3EZ1ytkTWWUjXqrwENwc6FB4du3WZ3bvcQEnNqeMps3F8jPU8FA29cv2sxDrbZ97jPG6DyVz",
  "key37": "5jKgFWqiB9RBfMSgEKw1p8sj8LKRrJgXxE4A9YPiUfbdnryu42TKENdVcB7AU7VgpXx7qB79m4czyyAqt9wp5Zfy",
  "key38": "24nRNGa1Mb5XDLaBZHukMJnjYGs5v9jz3PfQ2wYm4EMmb4rXZJSD1JonjL1k1R5ERPpiXyPUwicA3g5mxNSUQtx5",
  "key39": "4cxSjAAon1gfokvUTWrgcTd8QLSHgNaXYPuJiwdxpnwLnAEtoF5FMoedDRdKXUCNoAHQ27cnAM813BBWPrrU5538",
  "key40": "U6Y13B6sXb51nQYFATX1odwCikfnZPRHxoXHHFctujXafkpJCTYgAf6TnbJhTrR9HSGpfzmasXekQYgErGhNhZJ",
  "key41": "4NWNF74uZbEmPQMmeHJDyAU7asfbEm8sQHwtDnRezeKMcfhSxyKBZDwdw4ZNxgjgyhBF7joBvxxfrDtPPfqVNZER",
  "key42": "NmbuLMaZXWJvEF4vDWMjBTmV4CJHXKfLnZaTWdirQvdB3J6xQm8bFhQWsDzGpnMfYSZiZ6oUyoa2KE16TZjqvqh",
  "key43": "2WRKLA8ooBMDtaMgQwg98vd3AiRgvSZqNpc8ETRFjnDM4VxQLx2pvac138s6aqZZMq8EoLWvx72GqSUsGipBG5hP",
  "key44": "5wnboZgvRfsbSsKaaw2DjdCWj3BMZLWogx6bbxBowD64Mb1NmpVYphEeRkaTMm3StScKVtjbeCh8MJ4U3xt6yuzS"
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
