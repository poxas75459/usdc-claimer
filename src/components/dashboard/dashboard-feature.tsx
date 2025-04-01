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
    "YiigAy65VrMxPgkFs5o6xykyeDCjmWscWQZP6jesU94mXmMNgqHsQyYjZZLhnVbpRB1S7x8dfoy83ZcDaWuLpg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdS341gab2jkzrjB7enqoDBQZzbDpM2aTjMu5R3sbtUPnuTHNDF9qaPBsGwyVsbbxEmv26tw7K8fzQsxm3dhe74",
  "key1": "3mvDKBSHojqm5ZtJLPdKWomWLjzPYdP1nRCJYbZNTiNGnoxfUqWbQrX8uMHQHe1xtX4kix6pHL27gch18cYKJthg",
  "key2": "3akBKwTi2aoQV3KS7cpDNF2FPhQQJsvhrmKpZqMq6pcRv3F4CHqLmdRNRS1ZLcMx3xBpkXmwyW6JuyWVrS7qvapj",
  "key3": "4FD6pQyYjrugWy3MoW6MeZ1g26SavoJVFToCqhfSoGSRba2Y35LwKKcsbRmR9qtSvKARxBndqyL7fUgPE2iSaY3J",
  "key4": "hxzzcp3PccQcUDghUnanvawNrHvqG1zMqSHW7xPvQfzyVns1fs9RFjNyQfZwmnUsE2Dc8HHr1Ksbdw45opKzXgE",
  "key5": "2u6EKknanCLsmU4SAM8sbNK1mqXwqASdwKmigumPzbGWoak6sgDnV1VZy8kZhnQGZFfQ24qpKaftJgnSDGj2bws3",
  "key6": "4t1emMZTmD6jFtWKR14qLJNxEC1LGdNd7zesqaNZiiW2hm2ZYj87quhgB4AyFbwV7CYLVihafTioAwzUVoDArELR",
  "key7": "5JCknxFWJUo7n4jcKUQ7DkJs1j3hMPo9LRL6Dr3TTczgj76FV8UQs6K9AJbzN5MFyaCSC1vDmboWHLW1vtSaBsDz",
  "key8": "c1TzbySsqz4r4ns4ywzs1sF8MWZGUrh1MWfz7VwyzKELPhify878JMGdvZERh9CAkTYATZeWqNjAQ9RQYyy2A74",
  "key9": "4zFZPbL8GennTsxxFhQaf6ETfTRfGbzaijoAz6gHJJES7fUvBiv89ktVrXYWExZmm8mLaCfZuvsqmUv4H9kaShsw",
  "key10": "3VxPD3Vqghww4jSp3RFALFTUxhbxLyWzKyTsvM1ghQNRUxJCKs2Nx3FmP83Zip5Gzd13N7fpxsdjfe74zxievoPK",
  "key11": "2JSQkvT9PdrMzzUYR8Z5795iB43wyWxYPK5PPNfvGF84BMPFhnpcUfoNTS4ot341y9TmPTcXhXyEKrgnVWhEjGmj",
  "key12": "4xisCYMrXPaZEVmCR6EjCYx2inRb9iT6kgdU9eqGn1F3H51rxSfdkUJLxEjzPTev88fBDBFESwhTjzePTcRDM3x5",
  "key13": "49sPUDMat2tCLDguZexURtBmARo6sUXcJTCHoCWoc5p1tCHm3VM9G3RB1nDpDwkceaJDAxjU19T3eCqCKgYSidcB",
  "key14": "4AMjaRCrTdQ4cB76L2UB1TAAXMY8RQiSBfNUmdF5LychugDze2mSvzUQn6Jz2muz4Yi7gjbeWZc6mS3CHXSu3oNT",
  "key15": "43XNHsfVdZu9u9u3ZmTYnAYukgQHCG4YoRMjUVXJk5cbFVe6qvcqNTj4frhBcAHj2HZsrkFs3NxTwSLxCRwbKzZj",
  "key16": "aTweex5BLt1z1esuLUoKqcqsqiCbtFW8cy9QbxcjV3iXy2GJhv4EK91GBfqddw2XToCmAaU3vjQU7zJXbq3z3F5",
  "key17": "53GWoAMbn9ShefsBiQXZ6MD2JiAWXJS2FvzD2mvQv6UFYiqUKKNBPycnAEiaS6pTga9nMos5M6QnG8HMKej61ifY",
  "key18": "5cbZMZSjAWTocgZBd7nApYoR5tPzExqb6Tr2CckBWyZnSUWmntDPneqyYJeZbmr3EGQcaebq6suTLiXwSpURueGf",
  "key19": "QgXtjzA9xw21CFXvkF2WoHsdQJcFcxeRHDUoqthMfCMF3hahnWm3c7ro5uuzW4xVToqTiQyikaJJbswnK8gz5WA",
  "key20": "4tC3XpyJyg2mv1p2oynYtWLUmeTm7wcT8Z8CREYrAVymRG12zdky9HnULJdN4CqCmzND4kpP7c5F5K6GAHuhEmfp",
  "key21": "2FmznUeVxGwvdZspzvT5duoeCSCgujCxU1tzd3M1HZj1MzGzEFM22KomC31qUsamHo1diiuZfimcGV2SbzHCGTTP",
  "key22": "3qLhEmyGimp6x6WjkjKxoB3L87KYJ634rWtTEzogtKGeaKgUFDMiWC9MBdx1Rq966uXLw6nQQA3Hdm7WJAuRHGq7",
  "key23": "3MBcXFmLRDmvG1jG42QJF5ueQWBghA7E74D79uNFr6h5YvkV3LnsRkoFM6ci3h4zbXvcavPi6Wn4ja6ogpNBcHj1",
  "key24": "5hmipYVQw4Lk9YMfi7VSfaQ7YhkJtKtodxv85z6TkZ9eiuc7DwS6znRQpegSMjbrB1aXLkTvJojtjb8FCJ82PqKB",
  "key25": "2YUrGWVErAbRyoVEcYz5ZwyLHMx6wk3Vh23hn48VP9Z785cubznbYbNfA4gDfNXLrWL9Gic1XAGmKhYcbFnHad8c",
  "key26": "3MaS4Ei9Lb67Q9H1FQr8qXfAtWyUdvX41NJBbHYGfXr9uFYC2wn2KknBmyH6watLyHDhg7LeFETbb7fuS8GxyRo9",
  "key27": "4EqKUPnfZAFmTbGXnrZVKqTAMKeeqKx8a1trCy89vyNHAgFGFnraiWXtC3J7fqn71RVEbfzn84rVR1US69YETtkK",
  "key28": "4pH2Y8bEdh6jxF3hQYypQoTVGmYzRZfyoSQsk75Ky4VZTsU7JH99mZ6dGWMHPVtb2ciEGts23Axr7t9ve1xWthk6",
  "key29": "4ovdHMgZe1em4eu6So1QCL4GHpwj5xefkbGVLhPtMFJhwxpDV6jcJGmBhzF6k9LELskWBKFrR9XmdR8gp1er4S2y",
  "key30": "6271soGSXih9pMob7235qXabW8wmYxonLYhoAyn7bH9TfrXMCbbWxaa2quksbxeykKGiV4rTjttyDR1CKBSG878q",
  "key31": "22JX5ytC6ujxkDN9bT5baATHW2ZmCXoHCaRpgrMeBw9PhyzenEhKmN22CmuqMB1rhcdVSSVcG1PSwnLxRtHi9rov",
  "key32": "4chcx8NyFdyKsd7NbkgS6BMrKcouzoScjANKd6BuuRNfTqzDoHMHZfToakie6bKU8h7LF34EhtKTnTyM9HxcZ8r6",
  "key33": "4xjz1RGTs3hX5DDTQXmooxiZeYpzQ5xXxbBbsa3366tNKnTPnGkqHm3SWR6ohftTbkqVYStQKm7PuFx15hGeko1d",
  "key34": "4i1g7sk2T3XzqUj2oqnq1jrsUzy3f53koHCqhh3qiqUk7k6CXZ4iQxorP4saBmn9c4NUwd63dimmtLVMAczNB7YC",
  "key35": "5KSmbtadXfHxjbLgYfnyrPUC2xMingycDSyyEMsp8dGx3U4A8m87do7372KrKoqwhsbgeMy4jwSwFu9NRyi2oD9"
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
