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
    "34eC8z4eCP2MyDWMte141JyqBtHUCvCusmTC8WoxtpqrZGQCvCzXXRAv2T7t5YeMzU7RqDDt2ACn1oCgTo6DYd7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eK11wLVzrb5L65hoVX5Z7Qgfdq4oyGC8mQiuwCsdpraP62At8iXBj4D7E4tRZjxswvFXBgww3o7QYsLZXCheXsP",
  "key1": "2TRD6fkq2AQNnttfhuh3D6MTmGvtGx3df77gdkyQYN19aLAvRkSdExYfH8KoMnmFWTGghgzUbScAPBpbiXrB7vxW",
  "key2": "2Gux3EXPwcf2HQdCZmQgGivQ32Kswqszw4MuqwhA1gQXpaxMUSdJmkVHAscffd2GEi35JSQaegETJW82sUsjPqrD",
  "key3": "3witJ5jaQH7KyWXrSccbg4QEzjY43ASju6mUGHJVw3jU4mckr1fckaCbYCAgfsEA6zC7FRHoehextxXtDjgRqffF",
  "key4": "3jNj6pe6XDt7fyNGsstYfFRCXSP2GXBEPjMS4QcQRHuvmTo7hkuCaoRJCha7mUZ5qRXxEPz8fJVPbPRzFTjhP7TS",
  "key5": "2mrxAMFvgHmnKoiRMKoyeYkdQQc4cGVYVNZ9YPgLMJxnoWMquxwMWDFZMfQX48feu9zWW8oC961N87gTavK9TAYP",
  "key6": "vMPgUw6iArfkBTKHNjEivwkRfHh8qXGnFCeyFBKnDz5NXJqGSZKfZ7DbKh4YR9EHnxX6RBiNGTDHX3G1E273NUG",
  "key7": "4ZHMUBeT1AeUzPrb5iSsVHGV2crfnpCeNJhaVKAjtdDr4nLj8dqe912Vc2AV7uQbZ4939CYjMtXbXNBFStBpgmHN",
  "key8": "3Dhvy2XjVQXTR1nQCGvhae7aHSBRUF3E1jbDuZ66PmjhPFzpn3vjenF18y56D2xrkGTGCVnc3u4fvCfMPSgn3k9r",
  "key9": "4N6e7Mp3u6fiJ9ki5GtRkM27xKnG5UTU3r9iaPmPeWrekCKwBW5Xts6PGnqwfkaWcecPM3dMpEss57D9jHedLQqh",
  "key10": "66ShzTPkgdFr8kVdPkV53ZxnezY7uAyY7y8G7LsNxGywKAjH2Naa1i7cbHWE3qr2MDPxPeEY5WoHHSdUXREJQDtT",
  "key11": "3rh6BuczscVg1zMjq3qYDrhr5tep9YimWhc1z38rYV4Jzis4Gx3ecQBpkdn2w4dHtmvAG63d28ehfM3TS8ze3UGn",
  "key12": "4iGWyinusXMWuxCLeumqt9ExGqtCpYLfwpkkAG8p1h2DMMjPxYVzA6XvprijJTBJi1LQW6Hny7G8CEGSnPqfMJoK",
  "key13": "2uacYHcfhyucSUxjGe1LE8iqeGRjdnVTYr7mZ9ZuuQzfDWMPGPeS7hCrgdeKbfa7MzTr6EY3WCwzA2VWcypL6WDU",
  "key14": "gep1dw5F18yWEeBCbMGsdtFJsUNn8AEkYgkji6YuHv2vG7yVSfAZdsARwz8ftF3Dw5X1VzTxuAkasE8z3LT9rqQ",
  "key15": "3knRHp9gY18nhMVwuNwttZ9chFnhkzCKp7hwhNUseT1GxKyZfHSFLX4nv4Cp1Tckv53rCYMFrzN3CAWnanaRKhWg",
  "key16": "3uKoPcivMfHJHqVmbWKC7Cw15wngKY8RbTwFJ7B6isKNpLyTypoh2hXBKJmgoX9KGv5ZRTBAM8eNH4rNtj9V2cmw",
  "key17": "4kzAhwAMHhLsu1fTsR3cWfdNQuNqFxvmJ7SnHyQ7qNErh2xLRRhEZg1xMBQWju1fZpdwqhnR86Vm6TamZQMf9MT5",
  "key18": "54wEyt16Laig4KiWNE3f3coMSbvwR2Yg2P67khxhAL2E1Tjk2ADqp7AYFeDcqEWS2Hu9EsvJcbQ22vB2yXKSadso",
  "key19": "DCUqpbKkXG9CRLTSksBAiaRfyYeMTe8aHtMBRdY3fz6ybqJBUz6FERBLP1jfuVDkdayYeqCdjqAMWwCfvY4sDQj",
  "key20": "j6qdELPeq8NRZyUXzjfBxcgo8hH5cJLtEro9RZzfVw6LrgU6QKfDSa5XrNbDQ5S4ApbiaGmL3VR1AcdMJ1cvaND",
  "key21": "4FVgPFezA1bQAPj74xJNzfmg566BQZNUL2E7PGdK8YKcDVR2P2B88vhiFemXLz2xXTRRg4h6AyK63Zvy3cGYshAW",
  "key22": "4aKEoxQdTVP258UPecPPqLDAHxDngrRFkJQr4Z1MrEPTTs695SrHsqDhWNGqXgcz8AAGLZ4y3KeSGiFfXVZwcZGC",
  "key23": "4HJiDyq4TsrXZzMqA9bSUfFEKSaWh13B5TNNfnirTGV25kfzzVoXv5Qxxp487KK1KqHg7cvwsZxiMzmrVHfPyZr7",
  "key24": "3TYuE915rcuqGE6L8qDFw6wbeHjrXCe8D2bz61HcQ6JzFF4C6xiUKQKa7hiqXoQy9kE9zx7wB8LxnjhB7m2hnEyf",
  "key25": "2cPzG5goFdqJcCqFXgAvbFUETgZuFHNdXJTpVKxWDXLvL4Rd89H44pdgxSNQehkbW5KcPcBcHEYa2JdCAX8piKUE",
  "key26": "4uC6pPBXCBbnCzTXy9kawojm1yQyfCtmhJtr3UNz22YXynTjVwETRgZVh6mKakuLX2dzQvMhbnHeQxcRqgdzBGDe",
  "key27": "37FPyhwMhR6jupB89EpRhBhehnew8s4psE8XDr3u1JAhVQmuBX4YUWPW9ygAsST9wQND11p9YtaKDRSyMz7yoY1G",
  "key28": "59CWD52FVipGwdgXWS8PTr1DnsFMHxWZXvcqtAppYFaPHZR5wdKtDovKVyinLnqoKFQtsE6B2fA7pGHFVJYmtd9E",
  "key29": "43gSkUrtW9cCiyL1LT352N1a1k5rTxVeu8VAMgYhWSuQwf1bro867ajjCJt9ayo8uJ5vDGhqEbJbFrq32rLRCz91",
  "key30": "hiUQPQKdDpBUc9qmK2wJFiyRdwJd2waNY9b5u7RjAQxxrsgSxH6xihsfJoBoWHWyMgtk6E3rGfNhLSzcf5aHbtK",
  "key31": "51PMAV7UEHmD4pDtU8A7bQNMbEq3Vtv6sHN2KWRvsaebgprmmzP4tk57GWHVz1CNxxC1wFnLd7XohLsG6mRpDaSU",
  "key32": "5W8ZHN5bsergEkXQcFnuKzC4q5aqB51JVMZiqF6gqoSFfm2THkMDgzGNrqw2wNLgdA4FsUw2K61s9pBVCgm5Uo9X"
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
