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
    "2UEU6LaBsYLrPhjdvFvbhZUAqbretxARuSx8yL6XYP2ty9jZmjBhBjw5YE6zvQyXGz2oXgCUBGDoi6LQtih5wf3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhio9RtcD4GwUmGa4gA6R29NBRcStfChx7bsgx9juZGxEBSsHj7N2yomwFBAhg62mpFpH3ZJKEMVsgHATVqJh9e",
  "key1": "57brcQ7MdGxjvuRb2RtJpfPx5d9NUfwXBVRmP2baBQmxiYt6Lp1VjPpBrhETAaVoC1Sr6vimKwHbF5deHqcrpTT7",
  "key2": "AGbP9ZaHHi1JALzuwLSkJJ5DfL26FbcBMASQFgDhBxH9h7Vkv22XmjvXqw9oYquPN267Enyqn2r1S4iCdJXgx2z",
  "key3": "4oX3FCnPobdfXZ6ykCaunrTm6g9DZUCv7ZYf4A2MinZcHZMRFoU7ZpYpVNZsCtG2XQkMEzGet4KqrPpjR71cn31Y",
  "key4": "5xKsRQQdCy1PFksQLZd8DbPs8U18u2tNjdiXLYMozARyiF7ET6Fmw3fwfDFrFGWESgdmsxhz6wSszdWF7nLgvXLK",
  "key5": "5deQ4UfS67WCKb9TUdAavtyzLHqNmqiaS9PgfMrMoXHv2KsRu7aNXj8D5tHaZNV4djM6novW8Rn74T7ZLS3AHoUY",
  "key6": "2u927aNE7rZcMnGQapUUCCGKUEekDrqDBEDH8wZZ5unoUje3CvYKJMuS8UBxYn9uda4A2tN4RkDGLAA3XdznwxBm",
  "key7": "56LsaMh6Ww9Lk82NoM3KgMqgudLNrjsnYYY5SpmX1r1983v48pLpqRmugvH8i8UBzLhagUCqacw5tSjBBh3Bmxa",
  "key8": "3vX48s2kusEN97eoCfnxxkCnnkWAxgy636qnXLyBrduS61XPmtyT6TNQY5HvQq6uZUa4r6xbZRPwXzT6GAR77Tde",
  "key9": "64FB4AjkPz62BKp2kZtvK3embnMv989KEaCinYMDcK1ji1jfEtA6n4cHsPc8A3QK8GR3TB3fr3DcCH6FwnFuRJ2u",
  "key10": "52emBVbUMmSA1om3SzucY4LSBjYAUw3NKkbC9c8wH9oKVaegucd89yaWBk62ojXiuJ7cEAcceWkX1ui8HuzFQ8aQ",
  "key11": "47bM2WWxnEngXDQe3LDH8wFiCUcA8tanN8oTwgpJX1ai8HHX2fWPM5RMCJtrbUGph8AseoDqxMxpWdrghcdxEbZT",
  "key12": "YXSWoLMJ6Z5ogU9NcySqgJSLqmP7eJURPJeENUWzdCWgh1jweMkGrAQEaZiaj2e1aGcF88odpgMqChF7XKhZGX8",
  "key13": "2AKDmRJ87vVUWuUF9PM95jkpu97gMqFZjgrbSZJt74VEmTNNHhn7sMkCSm4cxgjwMZvyVjnaJAUYBymB4gi2UTVN",
  "key14": "3En8GnuFf7UNvwtTz9dTPM3zFKSKN4jQzw41eE9HEPAEQRVdmno9M9321ArgJTZHNFNg2JfTpa8dT8y9KWwFvDjE",
  "key15": "2vT1tFdHp95ttopJT1gPcc7Ui7Liq3jYLjUXjbYqgC4ekG1LTryDyxcVTZ3WLo1HPPsw6i2fTTsS8FBmhBRgPwF6",
  "key16": "3KwvdniVgaiGm1LjjShfcT4kC5sWmTsaJmA6rA4nadUCi1Te6WQGeM5EvRpUhkWrMPomi4hcJJH659JW3FHLx2Pa",
  "key17": "4WRoU2VudPYfqQE9rhoTwAvdq33fMmHfN3hgAKGqyzSnEBTRkH5kbRxPmLQ8GZZzMQ9oPU4Gij6jL5b2uZKPXeCM",
  "key18": "oP23CxrDSrjG9aNnfzbwyKfSnLqbtw1d1tYTk4GGwVcf5X8u7SEwiHkD3USfvfL8NeMRannrB3UU8q9YL5jqRSo",
  "key19": "pDcFxDKKtyMaqAij4QgEtc9LnarfF3H3BXqvyPqudYEEjqwEoEniEWViyj3am8mKCQFCYKXtQGv8Zt1f8sFa4LH",
  "key20": "nv71wxLNCGQLdRwsP348duWPZPBF4io9kr6S4iKHZT55GZjAP1XPMR5kYpBKbg2giWrq2H1XZW3ApLn5RbD3emN",
  "key21": "48aFMeKiPsgvMY9wBHhF3w7QvvsE3vRnzFQBwSNjGotyvYrkoP76gDuhr7i17HjZ9Qdjtb7dm1L4G2tq32qwUMe2",
  "key22": "4kABGTUgDoS69QTUjm2R6pjbnW7cDXeqaDvB5wqTggX3BCnEomYUbD64b6x1hgJ2Ysa8Uot4f3HAV941ecC62ZUH",
  "key23": "3MmXJvTF14px5p7cdxXeUWdRGQ89FiuaSfBriGhVJke6b6zptqX9M8SwTiRcJGax1ACV1HWjZqvQnJyULq7Arp7k",
  "key24": "45CScR1fYw3PsEP7H3YxwYxWxu7k4KEgzLQU3jBnmRxjnzfq5Zm6KLCdJESYvNvoCeLUUkLdjgcQDihEZxqDqPyM",
  "key25": "U98hVyaAVg1wKaqwGZnxHHD2sGkrvn54oUDzTeCsEdD8FZLV3y93Y68ratTNuNxsrCmn9Ye3Yp2zYhrq21XJtdR",
  "key26": "4PSYAvHL7W9XSwLFS7vpszrwZvckYFmhtmJhmap66rqneNaY9DKzjYX5UfWTbcYxXHJLk7RrozkXuKQCCnoDbkxD",
  "key27": "5iKgQgYCzFTi4GnufMT6SPPL7pG7QdFfSWmm9efy27uffwZoi7RwH29tzYAYuRgFwvXAQTkbHyWFXHExgtCvz6UP",
  "key28": "35UsfwRz5FjZz2cLjb4TABuFtw4R6TRfmB9av5xVjLsnPvQiw75GZmxpMoDdumvDzPAayBcG6nUmwmu1rJYdUYtC",
  "key29": "5L5nTayuJyTFG2ZR4uGGQp8Azk4bexxWCWttk1eyHeMfVw4pQBAuuvLeui4bRBSzronxib3BJjSBpDhtDnm6qUyc",
  "key30": "3yJWFC32PQ9r3JT6y8pKDHdw6tg8qGQDnFfhthkW1rJ3dhaFwARc32jX1Vp7TU8GeesQ9zk3EqxyKHiSVnxzL5bA",
  "key31": "mkvGGh6EQRpRZV2iZdqAQSZPsCLiehTCTCCg8pJREwfuwJfkzcrfViL9YA28vVs9oSV9YbvndL49WEpMVozWgu9",
  "key32": "4VrvqQVE4AvCkCb3H8iCTJn1p5NwFBcLSywKkcpHeUBYx72AhH7mXADtxio7KUdeqTMSyxWCnngwZCyw8mpbom8f",
  "key33": "5H9bzd8npdEHUT12pGv79AwancE7e4k34BfCm2NVc21ZZduXWysuBUSCrgXJdAZF3VFDAa87APayrzQtCFL9FYWr",
  "key34": "nUQ31AMRMyVp55cJV6dHCKPGoQ3cjZa1jYztiQZ1RzVV4YThemng9oWEcpTbfDtr1xby4yB6ur1JBYWGtp3WXdT",
  "key35": "L3ktXwB1PAdVPvncc15d45MnkH6krvvD5wVDk26PRZ7Fh8qnHF82588fNGCsegBZpE9bBHEEkNATpF2zXZ6Sa5R",
  "key36": "3FfvA9Mh63oJsxEoNnfskWUEN5kn6b3UXxKb2ZcfspQwgwqaTXeuB5AoAqLmS4nGwZvyP5Mbhs6dABYDnoYH37Hn",
  "key37": "5siZ3X1rovSjhkYTesczgESNQ4hUredNiUQV2R2NsZkxhVEXazfDa7TsEFuapZRu7cEsTZiPoNmpjSe51CUHM6t2",
  "key38": "5jYUWcpni9UKVS35xt2TEcYBSqtMzChLBMjzWopKQ77ExPU7BfZ8zhaM28D7zRWnU8LKCTYCYUBKp31CyiGi6znd",
  "key39": "N86aey6ydgHFJ1SByfXxgJHRMWgkTGdmD4NVxhHW6VSC8mphRB8JygLPqJSmgNPAaoZyVHBVFbKg8Vh7yHfUCqp",
  "key40": "5XFRMXhvezDFCJbirFg5QzFWVg5Sa3YJXMAVtCo3cwp3CytZtmtbRgs8D3kXo3fkqsUQEBFXji8tGH4dRCbjMGtp",
  "key41": "2VkEpRrBpyJorEkUKc3jY7JLGMb9Sy7vzRw7rb8sMRzS5naybuaY7Sisi892HQmVyvMJ4rki6DP5GfXWPXEbMKCt",
  "key42": "STNuf4zajvggTGApWpHiy8AjLXY8tZFPeJ5P999EHja2KwLHNQSxE1fzjk5cKLpXtf6oYF9nSDiwoq9kEmwXmmi",
  "key43": "3iGmou7WaoasNFf8wQ8LjdHDB8swt8CYcCWUFWKzGtmJcnwDLWhSntXZBbXQgbuboyCn9xAMr7WbLMy3R77PYkB5",
  "key44": "4nkcDUguPBzL1zGzLTj8KtoyJ8LRis3zjHqM3zgejPu6XKCgzsoYZZdeVpQ7w6VkZcpGkMndCnqnKwEhvabjukWU",
  "key45": "3vLDZ9b3FVUm4DFNUqu4pKsM9NPQzD1cUqVAMovKTZB6RRiztJzqHrHzKTTn8b8PUEYBMrHnk6DzrbFfMFYd3gmL",
  "key46": "2WrzndMpS5xFBn6eg7WoPqDZxpHP5gAgwSWXq1R4BYwuFoFhPauNTETxGhhfCPxSdJpARQqoiUjYGCMiYt9UEt4N"
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
