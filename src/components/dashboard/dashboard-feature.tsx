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
    "jQWu42iisHVaioQ6ThVNoyUbqjMH51d53enbDhHxEaythG4abGnkNVatbWVGBhzFmsPa6Dmwr9NVGpEc8f7sfaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgogGB4JViBg181PHdbei4FbxfbQqyedHJZ5GePcPtyJfkhsTicTcA1FNFxC1jjhaT6k1xhkz58wrKyKcDRMWDU",
  "key1": "5f6A4Njxq1Nw9LnR3PFvyXdky4CmFRvwUFWGQ9QVYUXGbVHx1pdUrmPtNyEx4gt1NVoTqjmvHcF8NAfLPucb1CLf",
  "key2": "3tgys8zPPN5cnx341EwPyTqLoscAvwnukseLiFKr3phM3xcaZu4Eq45H5PafxAfxHn3FWaHFgBTa4Vm94WY56n4q",
  "key3": "5ezSBnTDgjuF918ZrMBXjcviKiGY6mw7peSMckV3qTXTegMb3NmeM3tLYBXnDfwBYS5ESQCKVQHodMHmij8w6JpU",
  "key4": "28XUqXtJPZuARzFBnmZSeb3spkdEsRW2DNAtWuDeepkc1xi7BSBGT1k1AcPATPYJTwNMqxaPz2ma9Lp9ebvJph3e",
  "key5": "Qa7mMuGL23yT8JnPaiD5NwZnFn8umcaiFhnxD7XWdaqB7Lxf9zkPDwu8JSnLXK7JJQeQySmFsdUoN4n7YjRxb6x",
  "key6": "4ayXE62RDGFQnJvXMZBnnxT2CwufpSvXCVPFbTbwexfi6RAjdsx4ZuZc8o45w1fw8iYyyBKDFEpkGrgi1Henso1s",
  "key7": "2ngo1pXWpMhuuGbCQS4SBdtYXs59ugPVLuNqLovAUTmcPfkKYgK7b8ZFZ7epJ91phcz7DKeNcG6yGHdo2Q42teUV",
  "key8": "4262ZFBhUies5rFrzUsUfDkgVr4g1fVfbZLCGK7G77zmtrXrrFAB3sK7nmm9uAP8ZTqZv5VgY4tLVL5gz1EKHkdu",
  "key9": "3RWWYpK3M1yXyK93DmWoayPFMPZbJLia2SSn8ei5yajAtVxacsBAwnQWqJLFsxgu5M5YQ3yU42azNFSLsrsy9heC",
  "key10": "sgLDj3egnKsz2y5dM2qMCqisL3FH9a7Mt37AsE1PpYS2dKp3yfik7vtSfwq912p5AnNcXpFgn3NDsH6cCK3ZAaG",
  "key11": "54bPN4XSCpXJdYn7D4DuTB5pPm1CYsFU4EzUA6a85Hrg4tgxHqB7hdxfPX2EGGE5cBdgs3ZUFKHccsV3dv8zndPn",
  "key12": "2sw1CjV2zdknFLKZTEFEt2JaaQ7Jas5nEjJ9wYo9kzuu8LzynNn3SLCfGFmMm5kBH2YZCvri2cVnv8Hh5pAenmAZ",
  "key13": "5VTGoHJ53epP4N8kntEWeKocZw7KX2CeviBm2Q6u3DKBYGXsZbGJ7JrYFPttFz6oXfrzxrVdFR1YCQ9GoemnzTF8",
  "key14": "2zDRnARiHMp5XcbcZ3psPUQZz4s6BpZVfPUJK6FvkFyi71ZNnwbY6nYZoX6e8DeN6Tuo9g6j7KJ7e8XyxG5j9a1M",
  "key15": "5Jb2XQn9iiyDW2ZbjVZZFe4AbHARJf5QEMrge15bVSjSuiBRWc2TtCgtg8j93bpcj1SEzoL5kcmWNTgAJhbNJZya",
  "key16": "mgfvH8WFuRGWFz7i7mBC4WBgUmsjbKy4cAoL53EYLv1JkxnqAjodvuVfrVUkge4s7zPY3RQukH4cu3agX7auDhT",
  "key17": "2GvJSwFV3hnqVq3sQ4v4k2Td5tLMW9MM4TR3TC6GaFFMHUVJzAYLUgvj9vwfGKNSH8xY7GMaWD11HBwKKn4H28ki",
  "key18": "5EUiy9Npqh4yFWqFALVArwg86bDLMDxjPFtEgdLHjD37tADvWo5n9ANBYpkXpxWtGovuERAXUF9z2kiTK9xaBmB4",
  "key19": "HLsciXvfJFNw325pTLwm9gddgsxwkUJgBAxnQdHV1ZMBetAJ8fmcBwzfCYwfioyX57TosS2fkbM1bgALVxs95zr",
  "key20": "5PEYeoR8p72x21pn3hJF51RVnThXbX4syDwK7tyPwBzWVz1pjwHeDt3kieabWCS3WcG54wrLUgjHtSDo1ym7Xr4W",
  "key21": "4PLVuXmLFT5FnhXmY41Hm1DeHbSEmxtU5XzE2CLGM2bXjtFmPuwfRTg2JABYNghKWqsRZr8BfvNTDLpmWkNnweNA",
  "key22": "58jVFC37TkLV98yuX5u19ks5E1Ei8UqQyx7sDQmAfWnq8Hqu8GZHxpjtEgi6UeTcQnyGJKY9LrAo2QEpS5LMMvdN",
  "key23": "sxNkbGp9XGcF1b2qvh9SvyUoPUBP15etmzN5eg6g4mXtoe1UHz5NacU2jQPL8ryXF1kyVMzZBFvtsnFtgvZpnaH",
  "key24": "4zdkwMnRXmsy3kspXG2atuyBXi3cpj3hYveH8bUkSrbn6MmRDsHHUyQjaMi5CBgySiLi29matsc5y7BTJ3GuEx5F",
  "key25": "222gdFuPbN3VvN9zmUmjd241B7iDeJQHHaxvK9fPUa1g8wV3YY1ZW8A6QL4ZScFf5nazgRLneSzHyAc2HRbSyRWK",
  "key26": "3MCC8pSugpSEqAPRetVq7QgUP1vbbhquU6rrCMrUgAA3RjkUmRUy5uhE5XJZ1CKu6HHneFMw6ZPBDAMxeJfPTNRf",
  "key27": "2ULTpbwUuTNqoRE9S2kEqTjjpDjxEcp1yqmK8aJDqtWf1KL265t3xHUDsyqjnSwccqfxJeMpLjxqD9gzLfv3AD7Y",
  "key28": "5NaN82iQbwJZicR3ssuWcRrdoburRSVLcbKipUXkd3rishDRPnwqHgE8FrKUkt4yV97UYNNmPNkN2fV3qHirUyrk",
  "key29": "2QMVPYGSNEbDYvVzQv5oSG9zHGP9uvAY4v3mMZWqKsFQcSA4gpk8giFs7mZJAZBD33F9nE6JjPKccxonJay1VjwF",
  "key30": "23wjs6Jru3goEcKp4Qs3awt6ukj6QSgYDjoZnhmuSGbvqRhxCMnUgxoGEG9M17WdJwDJkLx3fBamgGwNtki8pd7S",
  "key31": "5N8z8WMgaok9VUcwXNZB2J4dFwQn4zijo49schtKUPAhyarbiqa8EsnS3KjEafS17sbhaNVf9qhreMiAexvTpoTw",
  "key32": "26Zi7JSkHMcadVViD1UdPSuN1o9HLv7PJcmrbKFpBeL55wQKkmeoR8PxAtxBZGpqaGEjUWaZr6FNHHufTMKu6Lsq",
  "key33": "3Akui9i56Q6ejCXsxN3NzixjqqbKAVvqRDqHdkwrcHgXgMneTEagsbBCpFxDS6s9myhR32muYwMnte373YDenp9Q",
  "key34": "4MxtV3wPSXG5TDEXC9VN7C95s7LJjw1wgtFF4bX4hDAB9RGP45TGrTY2YDQTXRsWhcmnG8TVS2yVE4m99e6saJQi",
  "key35": "4xeYnYYPuLXGCVP9o9jhpqFuZ6o8rsBWt5nPWFpDFNTrhBWeG18GpzfM37SrQN5Fe2bynGqKiAGPVaTT1o2Nhsnv",
  "key36": "36kPNv8q88kR1ZX8vZemx8ttBw7nc7KCeqzT929izxhLgJBgQttVyLgr9bopwXr9p1BqkdBF5QF7ApvzSUGZe24K",
  "key37": "5jUqRLbYAUvALfsXTHawvDgVAyphTgpPoif3iT55v5aqPrGYEQv8mfU3RFKFftcn4ictwjcYzXASF3eDJt2x81wc",
  "key38": "4dqnYfrgsdJAxy8rGBnefhzJ7HUJctbdze7wn64p1kw8wriuCr28vPuhbb58SrAvS2f4KubbA2M5HgQNjkWyPeNQ",
  "key39": "5Fm1hzsg6NsysBT5vGZypwxEdRAdzPXQoJqapbeqPr6bhQ4hpv6vZo14FZ9D9bTuo9C31nedp3DpMiJp5pMX2eao",
  "key40": "56e2gfVHe5z5sWf49QJ8NsMvayWTbDPh9j17itrmZgqjkPHKCFeNFfvkkeTCw7LUzDAizZbUxNJMu1vtiEZ7aEZD",
  "key41": "P6US98c1TXLzCeYwEVuAP7nVXzJsqTbEGEoCdnkUPPs8gMGzJUrdPtAXd2YwwMNF4VK8DaubdNACCgVreLyKJ4E",
  "key42": "2spaxVrJWT7LvgZTBDDAyHFFZZsGTttR7mUzTS13HynmLKEE8QYfYvZ1TTCu63A3YBCvg89xYrx27syJCjMgLkAT",
  "key43": "8s1qr6jNqF7MKWGhHhMcV2CaZ6MaxG3oLfFhPWsdJuZuQivwFUpe1o3wrjpjCsTPgMvG66pC53KGHrYpKRfGsSn",
  "key44": "4LKdNJz1bJDjzyi1nMiBWCh8jpEtjCKFiKBGwrJWjAkVBEsgiz3c62MeGQtPsKFs4AwUQeyREvo2DLEbALWp8Vmk"
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
