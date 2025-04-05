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
    "2of7wEoHmHHxnbk8dfxXdbuefdZvF1htLPWN93nA3Pb35esKTUgjN9KoydFh4HToGBDVUgXRduNjferXjyUR1L8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANGnFXWiy2hEvgXbDsJBEEk2V9pxnKZXuvprSHWqQ6kYKBvZyuhGtMwaGViYNBRp3ysoirVz2AjvMe7zE7X3ikv",
  "key1": "56kJKjGi71cBmDjZy8mjVooNmAjHULbc4iBvygSK2YWyL2sH6txa3s6EahjGuujewU9p69MRG4DVyUb9KyaviUR9",
  "key2": "39BEWwVWRSb8dbCTZsZDJidyYeqeWAxeCiQkmX3pvfKkTVJJBDWM4og7Xa4z5WXM6ayaFaAFzB5LRdzDoXUYqKvf",
  "key3": "2Zto6jTZnLUnhv6S4aDGQkvCkWijG5R1TG2123jzTG4ydxFUaa4XBpvCqCwkhJHoNzob7N2Cd2qijzwTEkoyUm5G",
  "key4": "59uEEMDovuVJRjYNGEhuUwgy6by5tJeP8F1SmU7ekH6gMvzFptzEyH3ibp72mv3XVc8ot6HjHvVgJ6oW2igzRj5p",
  "key5": "3JgqA9AtBjynSJjZ6pPXr4jGZanUtmKikcDgDLfR6dRwVC1da6UWTz5RJNdZF2Comhkr6JFjrrGsBk3qumnMSuF3",
  "key6": "5XB7vpRzNr21huhFBoMtJtpNc1JjHqCEYi2BiGpNQfsu6xFqKLYNrXmYJMFCojiyAsnL3T1qtRmEDz53tdGMwAzc",
  "key7": "9hQQcEahnweboovqeD8iYqaBrziTcaz8D3NmzTk3cBKXnUHK6ozbKRCoWYaBuyfSvdVyeNNjsnoEGJQ2KPV5HVj",
  "key8": "2z7zMGNhB7REq8EnZsAmfDVjwYKnwweW9hJefm6LmcB6ds3UkGe7DhmXs8mmtSqu7zXiwRR5ZC3FBjDXLnLeQYCP",
  "key9": "dF6D27Mw2dUKKzFwjqzweF2ex5NRxhTVBZDV7XhRmEkVyxuuUqQGytcSQENM62iHTo57fHPFK3TZtgeRJsksaRA",
  "key10": "5bFH2HtjPhfA1TTuE8C5W44tNwk9PWB1CjpXfxnGfDZH7RRWMrvuwBoPn6v2zo5ZzNRHpvyMJ6RzTLyUdSLd3NYp",
  "key11": "3XtFaqztvyogBfrM3iKGRMFKjSUBoCCnfWMvvCBwBgV8b1c8DZ1Fo5TmzQQnR8oYgBxkvqVyKFLKK9ZwvLvDWTRP",
  "key12": "5TE3Dor997sFYfRyH7RtYYQe2FxtkvhFTJ6cT1CTESnduEDHekjUQp1uhVepCMNxgyvuL14ZkTnYjU1Nk2RuytVQ",
  "key13": "4XKysf14kPiC1u5sHPThn2k1gndEwPqhAyrHFYjzMXMGfcYD1qzBZasaZb837yMwL7R1U5eZJn18q6yWDU4woMeZ",
  "key14": "3FsEeFAPFoqtLwYMxJdmKr6nZrxjQMkkhCP6CB5JxmtXxMKnGVNgBJjQvWwZNJmYkLyLXvgakDfhwEQNf3eiMEdp",
  "key15": "5JEFJxMsZb592AaNtGD7FSk1t1767PNsaHYRwiDFodgTBybPw6QUKaMUXpC8ctSBZqEBoduFYJzYEEpkLpbuYGoS",
  "key16": "4G3JdnNVre5bjS3Lgpi7AppphievctA8fSnWLmXHKoLLXMgB7ZoZ2XjGBURxt6cdQybBDVAiJhUxouhE7bRVaMdQ",
  "key17": "z4fiNwQXuMdpdCDFZJJ5NSWdfEYc8JgHiq86Rwev6eST1mzg9wkddinUEGki1TR3ZAvzbh7p5ASReXcV6NTTbk8",
  "key18": "5F6PCw9nkPx2f2HRmJwrffqCGBzvcG9fkeiFebooqMn1bCu1QNP8AM8AL42DUYvefg42Y9m4bqGbLexqmXnRois",
  "key19": "2FzuMHFY2YaRGG2ztwmZGBe1iFTpjDYLpmhTQYYAsriQfCKmLN3DiQEMZhsrjLrbtKfrZVLX3HRBkPdM5sLsHqVE",
  "key20": "38FysnwFhbFx6mNX6BUVnHPx2JdQgRFwEHjy2btmHKbaYyjXqAF6S92Lv23JacfyzzkjJed9NRqkdQE4e316LN6o",
  "key21": "vpLgy4i1Gx1ZLQUyXpcdy5UEaJFRDY5ofxDZSF5tzoj797dEsW7TBELwHjwoQogKa43KzFfTzE4R5isRU1YpAEZ",
  "key22": "6dADvXXrWeGExLKpz9vquPd9XCVJw7mLekwxjsKGcqqnNy9jn46z4QYfMhAjKSDQeZNYCRvt1DkAmu4gi34exnt",
  "key23": "2T3K1eYNYnL26Xwywj5okwNXhCRUz3S92gyf6szudHChG9ZNxiLqiffMHsvxvDL9L2NdK3DKnFdMinMGLaL7kdf",
  "key24": "4N3oz4wTJ3uGYE5cPCPv5F1g9Mcov6M82YfXkcyntgGqUXqJ6dJAfT75rNQCna5oXoZwL5uNjAAZ6Jj3XSkGDfiF",
  "key25": "3vBSQ5kKxbJzJYuXQnjVDuZEfFxifnM7HKKqo2ga4EM9KdFpoh27ysSACbQPHmwKwXjDsKZbzbHniPY1nY1YCdeS",
  "key26": "3N3cVcQv4Zj5fd5xJ6rdrrZw9tws9C7K89HkNypN1ZzfpBB2Nn1vVfTFAuw7gEpW1m64WFxcK9bqF9ekYrbRrunN",
  "key27": "cHp7sdUQMQY77RbCqifJAg81xwkBX9YHyZMz3f2zzxusChKCGvVcteK9i5QTJMvM83M5uke53fS1aB6b314fi4b",
  "key28": "3GCxMuSQQ8wT87mMXjYXsYgDN2DcgPaoPFkTpbWW5NWY6zkNyXUL8MXk9PmiQFzXyUmwfXka1oBxLV9WPdLZuVmL",
  "key29": "5w4cyrcVkXxaLkMBZTyTZ52o6ZiAZ7vBX7hX1oHKxf1oeR4K539GvwB3AFq6uPaJrWb12NCr9gDs9i1Bf3czHuJ6",
  "key30": "3P7iqvm7i8EZqV8ipKVDvDy4VSqYeqr9axWt3D68mC5KraGX5kVuLizqWgwnaz1ofr43dkEdgGC9TdNWdGLMTTDp",
  "key31": "2uzrn3kzduiYBgXjAjwMjoAUvd7KnuhWnotLux6VX4hvcF3vL9ftWcnznjz7VpCfWwKhvA5LQ9g3X2fFtFbeQB4P"
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
