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
    "4ujfJXEAXS2PQvGC56DZiAjBjK7e8gj9aFk1BND4gxry7G8M38wJsy2n6w5cW1ZTgWy4oq56wJTaAHCxPhPevpeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DNkvGXA5X675hmdjSpXBsecFZegPgwV3rRi54ivL5RaccJPoQfRQ2CFjJ2erEbSuPedrXykzgHemmM5tRMuhRk3",
  "key1": "3CGhFB2BhiPUo7g7KcjCqjAk6nw6EgTfoxCwxDjt1G9eR7pdWgnQCcUufm5J3bHVhRqNWnE1WnG3zG7HXJCL8zHd",
  "key2": "3H1MNtqVnSTJUmaeX2h4Byrdo8vYFZzhKQc1yTqHTWu3uJVb4rEtq5TjFDqrBxsTjp4uXiVkqXh3NjJUjNjQckBB",
  "key3": "4E8hPxznFG1DPVWrgyDDUzm4dZNUTuMJ7rVih2yeQocSLDscrhXgP2Dnv6p3fu3LekXtvBdjyueE6czWNTJQj2c3",
  "key4": "5yE9fYRaoxYzmuj8bGCftdnUN5gQMHoUjQAcWk5yxBVpraLMN74zuFvhcjTSkxFXofQ2SET8UeUxk3FTr4uXZ69e",
  "key5": "5CgjAgXfvdsXd8gjKZwVrkmyAPiyXDXe6u6aBhN3pTm9SuxEQhYLCbpEjZhNgoNQgNumQwp73AS4w1mQVhq3xFQP",
  "key6": "3tUkRLkuA2h6AQhU5YdzxPEoKf2VbWWeoDRCT6MR8qmEFNVMXGsH3PJzji33e794bRdeKsAMkh7kJ14Dh9g724qA",
  "key7": "4U7ywcLS8zXHGL4hsTSQnXJVQsbkdie8M36BsN5EHy53iQKAKGcJuiZwgvCXPERB3gzcETNghjuVkAR7gMZVbM8M",
  "key8": "4BXCf1VQuY3XeQ56NAbMRHJ9YfU8g7ZYqdE9yxN9qNkJzHpiTytf6G7MH5dhaK8mm43SWUMApLuKz7bQtrhbuUKv",
  "key9": "4sVLVGL7AUWGdSFHtV9M6xXisXe7D5wQaYpgzjmX6TK88LLhBqS8QfmDwXj92Zq2SzbX4mZwRGBcEkA5xfkekTvU",
  "key10": "5UqjrCx23x6iWYiWifE5w9XBGZvKstaSEZqYZ1oX1kjz8rdt1z5kKrpA8hQWVe8KiWiM6V8AVbVMVUyK9WnMpVci",
  "key11": "Jn64PL5BdrTKXfEuF8tXzys6ds3fwAg2ktBYi4m8LGnz49jt9ES6i3NZyMmLExSydA2sLiVYfC7K5AyiS64sjVd",
  "key12": "xsuned5Nq2qj5fAf78jRnqcbyrNtjARamhBfXNDdwet1XwwnkJwsNNei7hykBcAsXFKpPrzDYVhssC8sZHSDVuV",
  "key13": "4XXDTdLTvqKYWdWzcjzfEPngbvpmv9j19fwM6JcNqM5qWAfZG9NMJVfi6S1dX6PciBna4rXhziRWYYy94ZP5wHUA",
  "key14": "2Pw3YKnmF9ZAh5JoDifVFhmCtXwsGRMzDPVUUKSKF8x9QPzGxX1UUhQ7qV3PdFXYhvKR5iAWSxZJNu5R6o8waEJ",
  "key15": "KSryBhL9ep7z5DxnP7tyKmf8myL3hnxFdogpr9yg1peG2kPwTFtURMLwvhkLF59qiHcWwFoLeFXeg5gWhz9EWbq",
  "key16": "29R8fTHNjQLgkCYxQh9rCwCzpmGjpssmQk2cT9edsG7rr28but8FA4jmjs3qjAoaPbFJVVGrBdrs3WLq6Ca1Rft4",
  "key17": "3nogwu9KKGZCjTVFveQEepJt3K2qEkNwPXGx2EjoFZLZvSF8rZF24uTYzEkNXycNdXMUrfRfGv2MeR7e6rvGxQ37",
  "key18": "52eedy2Uob28CaLo81frfHKzgUFVQaj5ZhL9k7rpNEfDWE6FWxKazK7SPDydJJVJGALrAeR4NGRQYTyqJfd1Xe79",
  "key19": "zzVSc9oYrBcaMop9JESSLPMGU8Yf33uBjVU2scBvSgYEwMTNTZ1tNNgrzg4F5GPpL9CCumd7fbrmh9wD5GepRPR",
  "key20": "2fF21mpeVDHbZb98Ym38aENUhWNbczNduasZvQdsnkbB1S5X6LFt3kG9ieN7mCdXS65YSJTCV2JWBCsEcCGXDL9K",
  "key21": "63VCoty5WozyYoKTuWvMsuPsJJYuh8ByjVq358pGnpT6gY3hxtUWxy7NCnsNJJsGcbWv428U2zM6UTCx2HtKjUV8",
  "key22": "5CdKpUobJhZHqxaF1kE1LAwRXGYocyLT7CaHovuaP9q414tqKnKedve8MxJQ3h8NXwFNBLprPT8TCgTzc6NzR31k",
  "key23": "x5coKroi6U9rhQ8pq2FkCchutVCUTJWW1J1Jy3XA85SRaGJhcvui3r8vgfNZpbw2v5Lg8jrtXXRqUTB1xDXevse",
  "key24": "958zjrqgYU6hgFgieDqMrFDNPvgXWxvdcNuFqfBFYn2f9WLrErGdftZTqz8DZccTFbHq9Cq8xdoQVCE91JaYbe1",
  "key25": "2BhfGfxtsQ78tEtx2EVh9BYMen6yhaTqUHSkXPXdy5MkEsVbBeNoi9NJEkBdBCVSv8xfZngSdo8TcCNxZ9Asgwvv",
  "key26": "61i3Xpmq7LgbZmyQeE2HBLk8ybNhXp2igoj1mNZieDPkwpzogKcvhE2dki1KnNJvJBFJJtjE6divQaekfKBFYHs3",
  "key27": "2n1aLFadDP71EYMEAAeLvpdcUXXjdsz7yqWmvWyXDujRPZ6rZhTVAPgu8TcznmtKRc8KYBPVntCdNfbgNaYsfs1e",
  "key28": "w7JeCCwUkFWwNXCu4LmhzKg9DJUd58A3T1hgFvCgphWWcF43nezMPNAuviW1kG68brsS4daJkVNXhMFihqVuwaP",
  "key29": "558tFCWwiiWoQAfde5nANfnrzsnNthHS55GqUqf7jAjBi1hFzfw79h8514era7Za1bao22UhsDMfL6KDR6UGYzjh",
  "key30": "2bcdLeDBL1aEwonJBmUJnoB4xUZqTCnYitL1YqwAkiUUjekT9ZktybxQPH9tmstzzf4z44mP53L2u7vwqvvfc33F",
  "key31": "fXrxW36YZGpbt7QKjmyAcYAYnq6C5VB5iznThsbngWFXFrTDASh62CNYEHi7cxY5JivmYBe3NJEjAoaWygqr5qs",
  "key32": "3gpT6aP7JdGcAtdyA63bmH49K7ZYT3JCmHRUpafLYgvcJfK2Le9bJ6wAkymiNGMbehTmLMitM2StDMFcEoGJY6xn",
  "key33": "ca7TZWvVGxKMzoPPVhyMTtwizp9wnsRT14tyVU5R1N9VtwP2K1yrW1QkaEETYuGrC4i3zmR3Ahu5qnvWr6apcya",
  "key34": "36sborWK69wLe1yYfes3WbcMshmYUQcMyp8yWhEt11ndyZCnh1JFfj5tM3UmVeThqLbd9xbw9Z6eCQWpYoqg5tHb",
  "key35": "494ojXrd1QV8kgnqJrD81H18N1JQbJSsmRevhygyQ48fBcnSUW978MK6WTH6BzHAuya6os8G6mWB8gsgaEEn9S4i",
  "key36": "4HKu2KbUVf8TTdXrWvES4LU1N7hofRiseAX1qTZAqngkt4HhpqC7FNbtGCLFVfTAPxNUFamCakGW2nqAfwDUcAiD"
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
