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
    "37BrzNxR59vz8sDzzvpTyX87xuUmbpepqDjHA3ZVDxUUpXBPRzo52mG8Dgz5hXZaCKWWX7oLjCjUzVewtUZEzVEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dWH1hDff6mcmUbjxWwBUbZiGttRtbW1vYWKfHMfzkBW2AxrnxejvxxXTEcseiVrtJeG34BrMd9cbbps7AJj4W5L",
  "key1": "5c9AfyVULFUghAV4iuofXeG4RLed3iL8CW8EVSRKSXdesRtUyoF83viksTkUTBtB66EerXWaTVhkS3WsgghZkJpA",
  "key2": "diRZM3XT76hH8tbp5GLWAc6Q38NcxgLE8FdTfL1DCUiBgURBatsXX1TbvYKpTTWNDbid8RLqteY53je7UaZniD9",
  "key3": "2jF8AF5YjT3FFVef6PeCzXYJWRjABNW9UaNbxpD1TBawNmZrbTjA6BqKZBVF8sb8W4m2Es5CmyGojGMMYqQp8tsd",
  "key4": "4SGtp6yAyLkKycQydYfUfg3qd8PoapHHXDV5GSav6XWpLBUEs9uNrtcBHEkb6u4kTR1d5244eC3Rc9VAYhpHvEPS",
  "key5": "2FZUqDRwJ2HRAWjY5MPuJnGYY98PhwWxRsPX84MoxZJHSSCwHNMwuLknhjEgbrXG8gM8b4kYduNUaK6hy4gxMpLH",
  "key6": "5RrJk4PUauDZP1pXoCkWzb6KYiPtkYXwzzKABeXU4fsgquV71M4D5exWWtzxMcQvwutaNQusr7Jb3ocxagNQVyL3",
  "key7": "DqDKrCCzDXCqttm5VBGareoRKi8pfZPM5NHkJKjimz7tgUXPhT9N8LQZ4WmAuc8J8vMTjQj5FS3ZzmUKmVJukJB",
  "key8": "3gyx2QCW5M2TiTFDaQBJpY8RwdEbQsPJATJBBj3jmrjzTtY477c7JkA2oDHGeie1nj7iZm68aWNqsEtuzSZK1vak",
  "key9": "3opjJkye74QTNFKjyT4Y62SweSKBWiqU57WAmubNRQkFDK36BDzdQjmy27KZ3YHaNfQDeVxdXBJrM26xCx1rugD9",
  "key10": "2nCWXsQprb7hq5iJVvmQQFnkNHL6uZERNvXUJE6y4dQw5jnh7Z5bxeu3pGw7DA16CifkwoXNGj7VjuDmH6C7c6Cm",
  "key11": "4mgXdP2idUcoaoq2gmFJuekRbaanWFEdT8UAiSZhLeuVXTWEV142cbW7bVimqAwY15ztmExekq7YAT5vCEEccSXq",
  "key12": "2hUXH76rXwpJas5QPcHAKDbWMKRbNFyAiyqofNepN9sU6PGu8KugrhqgS4kdXaLsVL1JNDouC3Tid7xLYC3zS3U",
  "key13": "3ZUJFRKz8JqgWERxS2x2YUshHymhPiXQMKbhbb6Hk6p5wokmC7tPMfVvtEovihLZjtNd8SK56BwWD2Xn368SuReg",
  "key14": "1dkvAFUJw8Xy8yDgcgsfUYbDiHtrj3BvZiE8VY1A9aAQiY1wxLWc58UTFVZetXqYsqfK4FJwuro4TbASBFzpiBi",
  "key15": "4qBkQuKht6nPwc5MLTbgY8Fe4W1kvX933YzD5XmE31ytTujv5pZp6Ybturto6fhY29PFVV2M9xKvZVcZYSNE3pHP",
  "key16": "Ua3CDtyBkgY6z7garVzL5kFLBvXU8GWXcfjoUD8sZZmamRb1wsT7WvFNT1aqm7c47eNV6q8rj4UxcykBCRMGo1v",
  "key17": "5WsMJ5AifmPCy1bpUpK4RWEMKxYRiNFfXPQVvoFgPxMCMZDRpGZJHLU3CQAwTH9pJgx9DWhRrLytXecJ2sBB4tF5",
  "key18": "44fSELntLpfASA5p97ScSictqtXAfJiiNL4M2NVZ9UnqCsho7SsyauxZus8SRq2z5yUfRC4cEZyDEAFxCPqZdqYX",
  "key19": "5zaz8SDaZzDsGG1n23BTSEbmFPajyGwyjJiUDhXkA1rF2bvDV238U39eFJUo6AC9JgmUU8qG3pb8muXS2MdiwjqH",
  "key20": "4TcGXiR7chsEHwLLSzN3cAnzDjR9B4Ssa41Y1DJUJYq5Ko9ri4Jx5kVfzfVvpg6nNzPu2AmpU8oYvcEJnWzBSsdi",
  "key21": "54UY6T2Y4YWxFetNJ4D58hbnxu3TXpBZsFNiZfJD5CMsoPYE1f5FShdPgJJ7reo1NENY2tnLCfLNnEBr13iR46Hg",
  "key22": "2NXBkZGUapeKtzDdF9GXMoQuDWA2oCi7JUhbEpP6CHJbZtcApUxPEddWSj9dpidKqFSnYwXA9Uqt2M61Eo7KQaTw",
  "key23": "9Rwiunjkio1nB5vWwAr3pA6Z9iykuPaDMkSAhUTdkh5AJf2mJ5Qt94PDYraWi9eVjaVtjTqU1aMzLkhTLajzXDC",
  "key24": "3Brcnst2zpeEgwHjc4Vt7tqFfBsjfW6dcBBc47FVBvRr9A1CHpZN7x3XBh4sZGjw9EszSUP6BPhQBd4CcQ9x1Gpw",
  "key25": "2LBZMbKzXjqEsJbVW49Uby5sL2vGW1L6DrgbjbpudFxVKdPqHzfu1Y3Mg8Y3G16Bwx3NZmm5BC6LXRwpNGYpnztD",
  "key26": "2eVa5ugZq5GLisHu83KM9nF7BTVuLQr1oGWtSSnqFntLLcrLbzoNAdgyXhuNosAioyotxBXFoRUTp6YV7K1HpoWu",
  "key27": "4qXxk4rUSsZVJLBSztScRPT4fKd7xjWa1eNdpi2JaJpvaD3BaBya4S43xCcDY4u96sYZK7ZrTMEuqqJxjty8MqkQ",
  "key28": "3jc9kFGbj4YJVRqytdbGt9NeajWe8kUkyTEZ4ctA2boNGJR1QmXA45oWW2ci25aZhfSGetinYRV7Jc2aF1nmwiGs",
  "key29": "hLF94ueUEoP49DiwkGPZN8SQ27Q8tddEpqzsqcFhDEEJL3YatsYovKo3fgYpi5gw7gqD9EHQJx9ZW4SkZSNhngB",
  "key30": "32sJDtRNzBR7HwSc4TR2cDLnbVgDpscyGJ92BCad4wi91m9f7v9qXWYQx7aTfBjtwtaRQdbxYpad46NKAXVptPvy",
  "key31": "5y9JcdFpGU1pKtZG14mwsFzyYoYaoRvQwP2DiqFYMNaJu4Pie7mW7SwFZnpNyG2ZqnuVEKkuhQHt8yK3t84GVcFt",
  "key32": "pBDVxF4H6i2sPNYS6UDAnGiaGtS2QgsbrL2Mo3WMNVjxPv1nQMzidFUvjczpYEWGfkkjWxZcUqtWwb1MeeHMxuQ",
  "key33": "5QhCSavfsRFfNUra9NJP8TPF4DvpbPxQZP1cfbEE8bdUkhhe1Kh8i3kipEAZdWZTnR3B7d3JbpUF1xSBBj4Gnf2o",
  "key34": "5nKUenZEGpoih1k85QjYmD44TASKcCLy5sxkKkUaGr6MUQf28DQqPYKCzzTEX7ARVUv5cawxSeVmL65xGeqM4kAy",
  "key35": "LjzooVmjSMEw6Jrw83gVhsMoKVhq7ckaZRURamuiosvhwkzHghe32DhxZaos28D97xH93wL3RiUqsmzJNxM9wQ6",
  "key36": "29B97N6WAr6q3w4CbAbWbuKUWfheCLE5Hbse97fynLfUvUmKq81NjBFBsSf1m7VbJzK6J6n3mL8TjUnYs4VDvXBs",
  "key37": "35eY3ZCvqTsHfhmqTKoE3UrLPnoeEGaQrohrdqhSHyFVmDsDe5pnZN74rp93MKqv8vvdV3eFea2338Q7gvCQVRZQ"
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
