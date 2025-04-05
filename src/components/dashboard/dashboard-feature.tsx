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
    "5rWvxP2nrVWyQZg7kMiGJHeZD5f3vvzMLcTTs7B36o87dk8Ho4PNJZ7Ym6RPqpLK9j36PzGejW787gzcyieL3wmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9BVBiBR9HXRENHZ8GjNEZWeStN8eb2VWBAUkGuYqS8i8vce675zHMMHSir3drEK2FeKnRcwnE1CPoqvw6KaoAP",
  "key1": "rKw3Zf9UwfM4GXfrg445c7jN3Ms3MyKmNHYERrs9UnxZwsGLjoa8opxEFbtwDoo5jJY5cTuZ6QHqhFSKMd2Gp9g",
  "key2": "4eyGRpWpnW2HFWPQkCwBsEyZfToquuJKmqkoDfjdPEfw5PAFMu1PzgL33vBe2UpJACYPbQrJkkYog36vJCShbXhV",
  "key3": "551avhutfBSu9TEmF3tW7g9DS9QQmfcneYhoLcsbMAvRsVNRz8EPKkFJS8FVQTvokHMfdFZvJPiz5JVkcDYmSwb8",
  "key4": "4M99ksRF233MNdcAe2MGxDKP43W7ztA6pVWih9iD4C6ebJBA258GfDsHiJa52giio7JNykcmC3pSBcwLM9VyfgeX",
  "key5": "4GpHReuXnok1ZDjvR71w7PbVLP1Jxnk5oSmiUpNMA8iYjGTvYEQVYeAw6fKfhERF8R5m7cwrB6YgqppHg4ZFbQZJ",
  "key6": "5erdRgBqiA4MQEvFtyY6FctNfLtk6cgDUAKCN12NCotK7vubpeBCv13NMBgVV4nw1pnYwnuhBRr5AF9Qh8PtgGvh",
  "key7": "2SC9igxUSX6yC2gn3jLL5rWGvtGUQx19cCBuS4qd1tnK24mmjbr7RTB67gBFm1puYtHwk9ZNgSZDoBqnqDnZTbQh",
  "key8": "tTeVYNGaFY5yAAr2xfCkPoMcZWxGKVBbLg2tAXiaC4Au57sKaegxr5yzEQHXvhyLPAyfRnmgPEfo3jaddtHzs31",
  "key9": "5pmvKPSJxYdUfiV5wZsUbH8RtVgSLp9mcCJVUMKMWDYdnwXWiTnwNNRa6cDhPTfhbQBebfpkYMQxqJr5o51idnFh",
  "key10": "4CZvAqKtJdE9Yt5DGJjnnTdewiS6H1PU1zkm6T6V8bJKT5FJ4uxMhFCuMQFgZCq66jCQ1EvGdCqDSYM7m7CcUD5X",
  "key11": "wNfCeK2tucrM415JuR5vdGB3NkHkcnxk8L6NjF3F5fnpqMBHqc3uAP28pCnuEnmFueHPAFg444SNomFRb3qT9BS",
  "key12": "3NnBsEmsHc5mkraZSEuc3TkrJbR7ZvKBVZFmzRRd8Nzd1SGTyHcBCx8mo75zjrTxiUndQHRgGtJTgt1jv7RJW2pn",
  "key13": "3bS5Y1PFPxU4xBgJRgnsTfpU9YXs1UNMi2Ubkv6mnfy7nAaaLxxUws6Yr2uJHKfjN9JwcBDWNuWdWTtVKnAZfzgK",
  "key14": "54yqDrXGxpXHz8kbKfSSmz9UN4MaswEmfup5JtaghzAQzt5NPaKZ5mXQ3cDk6dEPgyW2AQ2BKNYcnzoRHxtD2eWd",
  "key15": "46k7eS6gjZEzJJG8Xa58qgYMSDa3iZZSngL2cBenm4NaKeZXLHEwX79wt5AHmPxYi6enGFF1sSbriXpa1mebDuMW",
  "key16": "2wL6XgJiPsG7RYCiHboQ6LpYK9nhZ36Vp1Sk3TcurUJ53EwTX5WSjdCTzP9b9gVjswuE36bf3rMkx1XNt46aiYwc",
  "key17": "gQD1C6fxg3BorWo4EK7jZUY8GxVaVm2uQeqCyPRJCnTB566ihsyTXmhteLPx7niJJgw8DRFr4WYQeuT6Z8n7q2U",
  "key18": "5GWCuWjiqHZGfa5iQYumS4QZF8Wh2dwJ7hUWnh3T6QTHbbMbRFapwoXkRgrRo7DR9UG7B1HVEJ6GjTARjiPJhaCb",
  "key19": "4KDyni5gxeWNtxniQkqJXcZJC1cx7Hk1CcZkAJwQvoniniZWgxtttSKt17WBAj49DBZSWu1vWyHRezkRutqMC3bx",
  "key20": "35KGMWtUFPktW9QoHibXrnduCcBUbB92JyRBzFioEKJJCizRQtivPKMLTV7z8LsPvpB5Xv7W4evtGKfMPXoQ1qH3",
  "key21": "5YjkTvUd64LFb1MJXSmaqdArU1XfahTLUKzB48vp5xgUmHrj7GsPWqVtXm27H8ny5Po7ALVNg3x5eVgH3npJLvkQ",
  "key22": "3Mt38bEoAcpPpEDb6Z4amgZ9Ldibr5mi1Y4Ya9KsVbnAmVNPhSScdc6thGpYDHeHp58RiR4E4u2UWEKf8vtVr2qA",
  "key23": "3giXVwmSxwoi8Mc1VznejZmwos5ojHtoAnVtvxhGuZX56SmnF6MT4Jwqzn491Yry61kQkksigUHY8eXjg3bNEbPL",
  "key24": "41tSCvL4D5JFYab8SrwCGTXm5rDPxTPtRkqPCCSouFCh5VUUZBs9ygvoE4QLYyzNK5y9JdSDy6QJZsqFz8Yjfsep",
  "key25": "62GRBUkywqzbVQATcnXCxzmer2tzoABZp6R22P7vKhqGp8ZwLSNA3A9AaSWR3iupjCyJtFMa35q84hgFuR5evDc8",
  "key26": "akHEi81NPFSewqHdYUbDWSGe2Cmy84gMmGLhfpNbkEhwY1pJFRKrji9wRhQ3MbRwYFTEVkpFwbVrtjgwdwARRqn",
  "key27": "4CMxWrMRYcrQd8BKX3CfGtMD7cUdvP2f2EWDXTvchNBFuqCab8PU3LbEmH4bfvqHnpeoZ38RbKPiURdcf7nQSZYj",
  "key28": "5J5eiuAvUKQeQsxHtX1YU7yQBKWEt4wxEKRRUh7WvBDtj6rvyZHyRk38YvwGoAJEWRmFiu9AJRMsbwsCHFMxdGSs",
  "key29": "3PdFShe1NnSbWyq7i81AX76Ea31LSU5nUfN8i4RwS9j34ZBA8B4T2FVX6nyWTCUBdsCPv9MFUx3PjghixYfpmAtV",
  "key30": "2Fu6t58EvcusMQCbkaRgVwZzYRMmGacQHccK6FYdURTAMYndb7mrhs84DwSGrae33USc4Qa84pCEuCW7M7vHzySD",
  "key31": "X14xHbM6DF8aFrCVmqCiVoRYf64rwZW8vEKGZHWebxcDx2xvMNF4dPKGKLk1z2QnaD5hgfwR4LVrXSYsTQzg2Hk",
  "key32": "5X4ork91V6RCGi9YQbJFUcEGTZWfutdjcs67c9T5TJZxxkZFv1EnvwUDUcnpPUg4Xd7y4EbpDjzFvEo61snhY6FR",
  "key33": "4SgQsWSfKoME9ux9rNff6Vr2HZxDVgJS5UmB41GJ7ftZ8LG7XWiJ3ppMEYA1Pag5rGzN5gK8Z7dpAWjgh6m3dP2Y",
  "key34": "Y5uj6c4MyVbmzbzJ3Ws4VprqVoUZvsu3BrVC2ZRPk87MAMp444wEfDfk1YVzjo7ZrabkdY7x347qb6Gg87sz8Ve",
  "key35": "2oZPhAjGZuoyt7ybFhKGF3T2VjfqMec3BsfVKsvLVGuBi3rA5owafPQX7snqJRHgE12sNufKThHp3WN9KNAqRBLj",
  "key36": "4C1x3cfGHPZCGCgTRoyrnZMHhkDDjZD1sZt8WDUautAkS1trhNvRXTchgVrSM5pXBbGFjbpokixkAMJHFShhTTXk",
  "key37": "3t2juQ4QPpci1VC8tY7vphEiamNo6kfBTc7iCBxKPeLD6abVqogqoPk3fWb5Xqdb8RCv3YrfsTLUSmVcKdzqbJHE"
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
