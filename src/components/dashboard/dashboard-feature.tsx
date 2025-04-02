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
    "678rhndsJf9EDnAVwEgVjsjdgtzw8qgxddBASwsq1wg5TgoXB9shmTexdi3AdDxMAqUBxJBJqDX1LHvqDMtwidN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rdVLcec5uhvmWTT1xAi2aRfBsGKeSCKroHzy18gU2DiGuKp9ecTUwRMBSyLyakgABaPcR1ZpJtFqQucqj9x9XoK",
  "key1": "9RkKEJm2x4PNbKJJbQYLmYUufYDhMip3ivSb96q4ZbP3EYmio4c5X4ZGChEMh5r8zW19uSBn2K23eSzPVfTuXWR",
  "key2": "5f4e5vR8gydcPDmPZSwSJo33eQXgJgE6sCHcWD4r6Y748SS9zzPbK31wTY1WvtcZ9CNMWuyNJVTSk2WTqqTvSGLa",
  "key3": "2kMVjKHxs4qCySyfzksgjTVQxmc7JfaJgjN6eWJmqVo3xzoDfe45z9QzRwLJTSDUxz658SryvbKRd365ySBfooyg",
  "key4": "2yuD81CS1PqyuVqisMVXAuY9UGgbjHrSUduRVRfzZ3AKzJ6zi7g531CGaMC3keH9FN8wmAgwXEPGPrv5Yoe2LpeL",
  "key5": "fssVgpk2NYnirU9EdkjUrwVTq47JS3QNHSGY4WhJ7y8mJ6SyPvhNwr4qu4U4C7oPWxpu9aDMzG4FfN3jjFHV8Cu",
  "key6": "4sJH7x3Au3DGta8TaGQQSW5b2bQDkRA4Qwiy12drLUMer6fk9YrJGpE4sc5ejymX5t5DDXoJZkAk5BBoAwS2od7Q",
  "key7": "5qM6AfWvs42mdmaXiJ5pDhJZujWstxRqPkFNJNEuF5MnxWGZ5xVR9bUvw11n7YkmaMpWbsxpT35U1MaCdtFY2nd7",
  "key8": "5zcN4QPLmzCu5JAS2R6irefH3faYQmYzqjxVJ1pupzKrCQZvNFszRZdNMxsSUDd1VncyfLJpg9ivqgtYZ1Nr42rk",
  "key9": "2yQ9dvBkDges9ZotDU9sLpZfGqLtFWYqug1DcrPFJmR4vqbW1d4hRYyF8cU4bEvNxM5vEA9h72ENH1WtEiggPyFU",
  "key10": "2qmRDDL1UA7ozZ9Es4J7aLbPZRkuqE9JtMg2YKdrpkKjbrmS7TXBFjbcYe5DjyVJh2cotCLRJXsfr7BYTm5r7UZe",
  "key11": "562QZA2KsECbQL7WNCHpdu839M8SbpPR64ph8BRn3Gbit8gC8XVxdFJU86caLhPbztve3VAgedHxsicUTmJppnPZ",
  "key12": "2dgTUC76wHntAyKYbeDFz74UUyMH9u6T8T1N87BGSPUr1JuLW9PKBB16Jd8qTX3W19u3Z5vSX7YHg9dK5MmXMskf",
  "key13": "4CGaaX8buMoG2y1SgDREytrXBXSG4mnrZX1h8Ds3PqTwPukyZ1RvV4bk39F6vmmchFMBuGXz7oZkFf1K8gy2hLxv",
  "key14": "37cB3tLBr95MJ6uV4G42FAfyTRGM4BEJ1kkmX3aeoxPVER5gKv56xTvro22ZUkPdvqnzVc4dcdhjuadD3SbhweBV",
  "key15": "3KbCVskQTWgBFDyeghtKPYNfeMjmC39ewpY8pywnK1fWsWF7d5SVCEjrnkUGtMNZZgesqPjf8aj9fKLabnUYpRpY",
  "key16": "3QdHqsPJcKqAwBnLs1sgwenMJdiSmqFHfwfmNFF5hBbAdbjLCo46iJoWhe9E2vkqQSJvXiRvbitSZBXRWpwrAXn7",
  "key17": "5xYye8QBnco2yZCXGmXqdtTBctP86LL1iQKK6iGaRcDbKjAFYaSY2q8TEBR9hCdki4w2NdtoJjRvcVb8dEmBCRFt",
  "key18": "4qsqc5vqzmfGSzB58tfMyP2owNm5cE9sjeCTPF3sTcSww3noYFxrD6pX3njkNYjJ8T9GYHVWVr7Lv8ZSQ5U4qqKH",
  "key19": "5LW8KZ8REDTPESchHRZJd7Xuv7Yfrkv9RqpjThTapNvYBbLPq4HPQhWgUJej1YEguL91ui96SyfSvMwkJBnBj6WQ",
  "key20": "4hJ1P4p45u3y8cQPAja5Jtd4kUnvjnu8XvLBFPrZMVCYusTmJcopTfuMp3oD9hi2hqCjGbgydM7o18RHxc1DYNh3",
  "key21": "pjZ72atvmYkQHq6Yb5tuFpPbg1pif3tu9JbumFLC93WQywhchbEWWHnRf8Liyn31KoMrw3YW8vvWZ68REQuRnUR",
  "key22": "2B3kL38A1KAbHvQFmMJRdaZ2XTaHyrXhZQBJbEBfQZKnE83zb492XJgjvRaz14bUu3wecg7d8vVUsN5m4BB54x9K",
  "key23": "3XjFAbUPuUKwTmkXFRWvswKkuMNjZmvXG5kXa7jWS5H1zxHYjHu9NVuq2Fa8aEH8teu1pCji8CWrWKjw4aghos1k",
  "key24": "iTbkKHNssNXXRZsRGbG818UXqyPPmQngJQCdEpLCajNwn2sfsUZugjRwV9TTN4MSQKvNpiZzCyynuWmFzhKLpyW",
  "key25": "3zfjUSoWqh5UfAYLGrgYEUYndpjvQHiteYdF4nxT9x5EnFNfvoaf1XySXrpWA3EGG8Gdeg146sfUW1HpqQj5jJFW",
  "key26": "4iaZH8TCW9o1ZqBqUouynD2FFCecWZ4MTbUAjqVvpomRUVJgybvAJ8hR1tYpL25d55QCkhVT8keAz6UZnCZTNfVS",
  "key27": "5R86DvzSioffC1AvHKzXVsh4k2A1XcjMe9C9HeVxwpkQEsksiU84P5QRCDtJ9jpDqCciPQLQ5qUQDpwZv2nbK9GF",
  "key28": "4mqWMvWaWbGzFFV7JrDZn5bfDMxNAae85PPnhWPoE7uKeTKo7U1PQTbZUxQg3d7UHvjQBTxfgyEznjLsevAUFaJ8",
  "key29": "4QWevVwH61dZZKwcYQvR6p662488Bbj76bUQyy95Niq7Wh6AAWbyZnSBX19xBdZKMPmZbffTLnfQg5LyFM9eP2sE",
  "key30": "2gpD9K3nq4sZa88Re2U8Reo1Z1NMSDExukKSDBMpZmM5H7JBLd2TXTwwgFu7CCMJ6Z2xH182NQvqX6GMqK61UZd",
  "key31": "5X1Qso2i6euvNTNKceKKe2AfiwFvBsdxZshhWDGnLPPUPFmJHzQWXH94LrTN9ThYJ49bcW9LjKd9o6juNWJczY2Y",
  "key32": "21ymy5w58jsWAVYjnuPf33porzq2RBPdoCdqk2Pnsqg4T2WafJ8gGSmysf58aRNZqRAjz4GkR5Vp6o1yTKXLTJtE",
  "key33": "ZWxEcxSq3KtKPZHvNxq56TvP1Zbx6X3iki1ymD4YcMFuDYQvCaGU1VGaeD3jMyHqtdVsbfzSZqirJBc8M4vjAg8",
  "key34": "4peECvGLfPMV49LxZa1AymAaSijLzzLhiogQyWaLvNZbEnzDDhuw3oFZ5eSeVuLYrKNRhBGFSoUw2CKYVUStL5wA",
  "key35": "41ew2QtRrENQ6guPWrYvshiqtreTufkgtozr1uXUYayuY8vPyCuePgnsWgM5qyiwACjqTv5URad7PdQqRRemYrVr",
  "key36": "25LDk2WGXEcxy1nBqTtHazd8hRUCGm2apgFzPWWGQEZzCezNWivYkH7QzdtUPSoxbFb4kymb9vxjizrUPgA6JxMS",
  "key37": "5RXevVPh6TnWG5DByG8VbQnzDLcH4hUeeuRA2ZbMsgyUWJd9xWJhvT4of5G6NaYAfYVwz2r5ftxCJNbpA9mVY7mF",
  "key38": "3yZHwsxKteTSzyBe4ZFCWoJYP7MzhLuZx94ZfwDveoeNcZ612KsubG6RgiJA82bBP1rqDQap7CGAX69k7whMzWwK",
  "key39": "3BhSG8f2ZT1VoK85wJRrtgu3g2aT5GDipAmm8wr5ToAfzTsQgJKaNL2PGHdgQxfCYqV4gT1BDA2bhaS8xHrBCpcy"
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
