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
    "4Bt4dZDQW81ci4xkaHdgZDy2h3bQfr4Xha2NfWrfqeqqDiH5W21PJSMJ56eR8kU6b94oSqZX5cxXNxC4nL6tp8V1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DcwmxFEH8Dc6eJ28322urhsw4eAzGyjfeKAqm1oRo57kHmyBrYGEYzxTGVnveuVnLn8kUhMigRWe7uhNpqnpjJY",
  "key1": "23VxGX9izykgEPVYdyqQHDcWPxAyc5vYooWqyuXEVTUuiS4rVV7i3YYA82GkYfjH6WYMrERvkhDpsg6PFG93nfyx",
  "key2": "19E2Jc8oYtfgHgUWhcsmXFxembrcE7meGTqgUaq3tQXESHbKmHbhk5S8AB3qA8geZdRt9KbQSzvM2HA4tkPKefk",
  "key3": "3iqRDynJkScWQbRji9emNigiQaAUh93mUYCMsiHk2yZ6fRTuVHuFj8nu7uoupq9qMVygaTiC6oSH1uXHodRhwmuM",
  "key4": "3a5bwZJj8y38MpxG2SWtxMafNLiST3PuKCaCeXAk787cfd7TJzeD1f4U3NgWGg9g9eJiYL1MKiZpVoecxBEodBMp",
  "key5": "2X9pWj39L3ThgWt1eJY7whT6VPRMSoHVfkPCWeHQe8pUdccEJuNDmnjgtgUkSYQfJtD9VtsTBEXGtS1Fz9K3PH4t",
  "key6": "4vyp7oX3Fxn62v7JdmL4XZ9p6APxxW9rQfaTbDnaHfhJLmhyZL1PKbizPAbbppMTNbHTEg2K9eQqSF8XwCXPEYPE",
  "key7": "3hNf6GJsBAUkoFfCcKF9CUbjqMUjEqNK8jBXu1gcCxBhSU2G4zaNVWgzBMhGK6MXUn2K72vC3V9bCtq6v85GMK9F",
  "key8": "3U4HjWeGGYrnzSf1SVncQwrjd4xW1bvW65WrvMMpBjqXwTmJ3gSYzcaueeXPjcC2rqdGg9YSmMvDcH5qUyLe56BY",
  "key9": "38Y5nw5UsdeE4NBFSRFtBzJe29YjnHeXegVx2oeqhW9jq3ukZFN5wz186LJNhi718EQQigrRqanhVDWafkrT2HD",
  "key10": "63aFPcN8R8VRG6AjcZJ137pZdSoXWPS1g3TPR8CigdxPfxwxxp1a7kzbgqVrcn25gV4d8NJLBbXjF2K3bH4RadEn",
  "key11": "3kvAL6on3mEmoi4y8bYqANiGwJzRHU1r9yUHrhZbDpAryHYgi5v3kpcnPDea2kMZmB2ybghZinfjqnkZXqDn3iBo",
  "key12": "4zDEu2F9u2mkaFcYPGSTKZx4ifge4hQ7Eynwdi5gkLThrVEfrvbq8U7FYhH7NyVfQBS8u5AeKqKmU3gUMVuhUcuP",
  "key13": "5Fx3gz7AZ1MdpjMU5tvbD1fJEpQYGzwtxYzKBE8kWUQvgyFbJSbGMDfLKyagkRaYdcCpoRg4HoJ5ZhAc3WD52aDW",
  "key14": "2vpud3GE1eU2DKU94nubGRSPkBGwnkR7pZBdjZNcXzUTxX3eWygi7tkHrggmeXXzeAHZyPiU8V6HY1D3evqgoHgz",
  "key15": "xEM4QgK6eqa97wZnN8QQcNYqKLzzPcpYfm1LyWfyiEuRcMzxHMxoLFhNg3p6Q9WeNvQUM68z16L7pMggZebNPHj",
  "key16": "4xk81wer87jczw6Ag7XDF7ib7s1xCBKYKg2E1mpM4q8yUnAPyPmtGuACaCKQ87ufmuUx3WrqfXvZ4tnPHjAZ2DHg",
  "key17": "38UaMAU4gFD36wDt91i6ewXa3xW89VaXGkBDhZ8w95EFCwwkF2KKpnJ3eGrTeMfsgoGG1ueyhjKpeQvW4pbmeEi8",
  "key18": "n68uFoVZ7MVoorGQ9SQBC56ds4vsTApwzLDqqWqAxDx4qXy9tjYBrJWHH93q6uRyRUNdxj7cuFiSs7iUwJ2btbS",
  "key19": "5TJicfUSbqB6759gXJTSjK8KxkmFnQoZpdJQmxy9dX3RBCK3fieDnrzoFsQW129jGAXa2LFBTFHeoi57gMgBGNWZ",
  "key20": "p7pQTRdALgKPgTGdwiBWLHG2yYN48nyXQQo7XZYGtjvZx5FR4YhfCvhfNihGEycVmswSYqNFqQj1R1jWZg9TqpB",
  "key21": "5afAYqdLwm9zaLh3ezjiqyfEbnsBerRGG1itAs6hgQHBYKJSFKpusbhcw41ZfnixBeHeoNEedo2Bu2wweidzQQtv",
  "key22": "4T1aZvtY8RkxnhossAChJMXbntFLduwsWjBiPUkqur3ky9hNH7ywBHArFCts9s4aaBLh7vDDg4gSKmjksGxjyP7D",
  "key23": "5e29WvdrgafT3CKZBtuoQXEPMQhhT6G2b2jg8MmNUVx7zXVc4dxZaYxckBUDF29SmS8KN2VWEnJfWU2No4EyzHDo",
  "key24": "2w8WQnorsoqD8heD4ritqVu2BZVxJQ67Ro5wyZ9TmPGxNKekXsJgkLW2F7K9XQLxyrWwVnfx4Myu4CiJRF3FSzwZ",
  "key25": "4CzYzDUa7o2C3oesMAm7kdyxwBuT8hX4dXPRnGURZtB45j1v5XAf5TQWGfsmkP52qvQUSQWPUoxXqytgPBjrrXRM",
  "key26": "5YGhydFb6S7eydHXXKNx1k1Yu9Vv5EtNdKXD62y3yDNixAzaoFxVFB8eCRkN72VYhtoJJQahJWMmqg4ekJeHquEE",
  "key27": "2q4yEVkH6YyRbStDGgZ91NLuLnKweqZUvqdN2KN5iA89SAEjfcb3WmKkHYRsg8U1nN1gk6mGn1LGDhNKYNyE2woa",
  "key28": "2cpUyvZy864cs8Ya947ZFotsam494j5MfW8Rvv1tUCvToqmeWtztvTS7raiM5dmosNS59LFzeiAGbabZkE35qUuT",
  "key29": "4ks6q8ePA4fogMz9v9pe5Q5pbmTLWd9p4LzQzdE6teaHYcBVCvqMms4HNBpFoSPR3isrEJwBNdWNGcpDYuNXqSVV",
  "key30": "dcEMv1o2ZSoPSNrQQJqHshL5u6QABqrYSNDuksuJYQh32dRkX6BQ6Y6qrUn4sf5yisFte4kaQPQLUQp6JHbFJv2",
  "key31": "3kap2Zczo2c7F7z6DYYKoA63ng35NoRbLndrgeowcRpz7ctsrHmvcTfMWKESzj6cRMXtuf2tyyVyY9LcURGnQoTT",
  "key32": "4wuPMtARXLsaFF8uXHtdxmQvet67AdCZ96z1k8PPqE6z4PSLPJQJ8pH54H6nY7yWq2zbwBZeruZ3JjhchyJTg6nA",
  "key33": "4gphoq52pTQQBRReBhkxZmEKqNhxmmrTtPJ2DXFYZ2jWgmthpYRDfKdjA9U79t695CPcytQuhKj6gAYNrmXGxo7W",
  "key34": "2v45UpioRQv5rBABAqDtmVQZ6ByfSWTe3XKkfSBD7sFTqXzA6UcWkz7zP1vF6eF3Jsqm3KKHKW4NCcmAByAkksDo",
  "key35": "3NeyMnyCiaNtqT3pGDQuYZD7yBhHPGCF3UQmpuLjCwcFGksmx4neeqTWLfMe8x3FAWnbS5BCK2E16zy8b56iuMVB",
  "key36": "3quu2bjAZNq3WPxkwZ5HKjJrAFfjdhCMrVMRGZrieBk1ENkn6wjX1gbS2xRj4KarNEoDiiu8M4tAhe8ABtUhoJ1s",
  "key37": "5pZaTrR9jtGxZPJVCgwbewH6AD1dAcBPNY6WG5oNyR8hTM4juapnVbwGA2KQ9jTU8Q2ae5T8cm2p6s77fEd4QfS9",
  "key38": "dTpEddmk8h5qzMsMV7Jw62dSXRzK5bDeHfQktAu5v2ztoVrR2zHLVcESuzJet29tsgKPc9St6YxA47mGigCdhTN",
  "key39": "EfFfX4Chi14gDuoXEK4BCGZjnJD9UCAukNkHLgpBwUGBAvJL8GyRc5dCV7d1fjS7uCieRycXWHxpoR1k8XgqDTQ",
  "key40": "W2GHsiYPWtQMUPAw42D6s9ZqQVmp9FrXHz1s1VSWVaq8R9Ag8NbaovKdTdkZ3dKjKN9HfRwqWEiuHdcb32AX4WX",
  "key41": "4ELadR9eyYxA3joiUEwDp8BctZcxKCDEzSY2ta3tQmzZrxiJ7vQeEKAuB3wQ3GAWxqhZ27heJTNx6qzAymqsDxrR",
  "key42": "392uN6CVKnDx63ZPz6hqC2woaGRV8ASL6DzqJXCGsai8oSgftiT1jCHLa5jaLGrGNZqTTcdLi5PfH3j4UHdmb1yT",
  "key43": "5WWfcmr6EqRNjUstNtRBQPdu9YBecPPDGpjHHnacHrP5XaKfwF3NzKCC9w4CJY2DZU4yTFD2kHqKpfAFApKYDvXV",
  "key44": "3QN5DqrPdYdJTDXeANWM5r1sptPbAwo5ksEQhAwYNbsUrAvKW1DjLh6aHwjWDzjP4ERwZqudGRg3RbiBkX4nkQ1K",
  "key45": "29scN6pVqX3HLTxdQ3KToRw35cAXKLQqqubFXQvAkG6n22xAt58zvVcpp9UiSk9DAeWUJ1JHEQNsKVnMUSLZHyS3"
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
