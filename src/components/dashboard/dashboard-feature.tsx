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
    "4ZwiaKoXtCnonJEwoThTeL772kZCpUMcwvfDkE9ctzDzHXyrEBRTXPgFovQZfjAPJngvsATiprm9ruh6B2swghQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ud5qZ7bzRbxGr9PtuvBebhF2VV7Q1bmRXJXGV61aGKbNiFZpQyf2GALMQfCnv9vB2zhGGqhzJSFuWrpVU31zqCX",
  "key1": "2vaVaKAbXb8iNuLjEBsnWqgBknc9pYv5KfVULDDNmHYS7fuHUvTx3garVdqRj8ZjJPzYAMqQwpzMveonmgE1MAFt",
  "key2": "3pmBCXGfpJG1nrU81yGmGuFr8xCz294aTzzYyfQfUrkANK6mUzVi3tzub2oVH5JJ1vHH6qBuGaA5mAswWy5FnT9N",
  "key3": "hdh4PESVFzhy74o2GmApKgRaL6i3tpAgkDV7dCujDZFry5LPeNW9z8RW544VtkPi7br7iso5mns3xTWdrkVXwwg",
  "key4": "4byigpQ4d5CBWL16p3U2n9ic56KydxLKUMFa21UhmTN4TkbR4iv4czFVPTMZxD68Q3d56otdwhGdL4W2ZZERUD9D",
  "key5": "5FZB9zgnwj4Np2LCMocTfuqySYirBrrBqowYn38TNrdB3Xhz1qxa3ALhsjwP9mwQEHYNrndHdD9yYNDyviYMBFhC",
  "key6": "2aHMbxUu8Hdiy4N5usq6XxoFc7ML3tGcFj29p9xErmXf9FWDkpfoNvDAEP5aYsJtUkbbM8vHiqdu7Xxtn2qN2JdX",
  "key7": "j6E9v4e5dAzraafSRVFEmEQpBUUPzaA2wvfzbL4NLCAm5JQSmfqSDmumpWoaYxQXJxh4SPBMRLEK2sQBZWmkecG",
  "key8": "2GJvBvrnHyiWnMLAf7iRM18h5CmXtjqZV9WH8NtXJWACwGEBU7cGcXW45wXw9mT2hZqugSSuRW2Myfq38TAJ8cjs",
  "key9": "2xfXFgiXPTo1YKBHzywfojDWCeCFK52VDqAxLBgW738r7MKZ36oxzvJxqxsf4rpTz3ES3CPcJoy9hSCyYNGrMbJd",
  "key10": "3f396xJWX7wF7rqiz9f5sabRu9os61gCjmUob2oAFbkGK2kxFR5NaQAKR76ocY9xjfCeDrFq3ZqvCRNmidKyowXe",
  "key11": "4BCnuor7MPADTrGmyqpq53ywQfiAWSMP3awt5sC8uFx4HJy75vSqEyKvAucpvm4argTX8zkmJ8qASBB1KJpfk7uX",
  "key12": "55DvoPosBJP9pqTHGFqRALJgEqAaMeKap3EsTGAdYDhL6kYyyaDiuKQVMtf4UUowiMBkVwsL8yXbA9hU5fd6fUXA",
  "key13": "5q6FeUZMmDyWUefpmAHYreBciRgWVcuXKkcGZ5TkTEqem6AoMA6ueJPrWJEZtcyDemoc9gq6hUKsenxnVKPE55QF",
  "key14": "2PGodH9WpKQPokZSkemMKmiTDuBvrRPg79QCJwcp4rEpeZn5Fm3cPqMFG7DiDUMyCDuazKVPAYnKBAzkeMiCz7tV",
  "key15": "5BL1ELN955AMqbT7baUerKB5XfNTUVpXN5EmK1KjNGxRRGa9Q8zefoMe13kqGhF5NYALMWbrU26ru15GdiZYeEq7",
  "key16": "54nMHdiTKjXF7LV5yTTKycho1LuKM7ezdLVDYohjt3VjtmX7uzguTyWou65FkACbQr2kYGJKN7o7iy6PPdgqc2AC",
  "key17": "45utEWbypAfqdgcEKtyMYXJEfph7vqdSowbQcHqZUnync4mJRLPLz3xQnGb1JFdHEvh3QbnKetkUZrKxfudc26ye",
  "key18": "bv4P31pnG1QHT7XiyUJX1UgCNZuaGxPdLUjuYvik2moxu817VSr2GQUaXgfhkuUkHBwAPLg3GYP2cYX2AT2JnoP",
  "key19": "5XWWwLzR2HVWMRzbwoMVrpYigAc24rAPBVVBSYnJus3a6uzXmDJyJSYy5A4RKYcuMWRdvy5Ah3GubNkxaiQz94b",
  "key20": "3t6tvyhqNe9HnuXyNsi2QHE9r11yPtRbcN76gz1FZMUEgShhqYqSuhGqeAtjdGwqoMJ17kqYvVtsYh8eNP7z3ztA",
  "key21": "rej3hF6ZCsPHbvHaRMt11YJwLiqmi46PT2jCMRVfwsEY1KFKkbW9BwkMEaABwE57rDUcAZMjky4u6JnHsDCnUFF",
  "key22": "56LDavHdgvTheDF5oWnFpwyuGybtoTGjK7BVuFnWzA3kAkyCGkAYTaqgRjyYkhypRojbS1DwrbNEQPtgH3XBWYLv",
  "key23": "5VHjEbHvJ2LUvzyUWXh2zAEBmgPpYzmLgSopyQHYbsAQtVYXbfPvwsnQKykJoHdQXue4kVypTRdrAZCzJb3DWWBZ",
  "key24": "2b3tShUAnSzHkG3p5SYY67VkcA895Haqfm9doY8KHuRtcmdWeHy1CVpLE5bz5G1ZfSULa6L4vBeLZjLNY2TsFhPf",
  "key25": "264qtNZJxTbcnJr8tZhWkWsYoLZCFN9Mt3zJwcKmNrAdjahDTnREhvWnpNVAkPhBez7SwyRHXTJ1yHPdZet8Ui4j",
  "key26": "5hybYm252AWqcZM9cvkrvb5iZVivEFM1jBPunRr4HLhAfM1abGJSH1P6VatCMLcgbpGADBankfQQvUNKxNW9VNMh",
  "key27": "SBFv6bKz1KeaG6jZQRopnf413g6wwSkkspuuisR97vYzdggoLsgmysUACAQw34iciaKQPxYeWMZiRE6UnfPXNAM",
  "key28": "3qA3QzFhB1krxBbw2BEvdfTAYT11yvLpuJBD8BPq15KAkX8aHBCg8GPmEnbUPvM42sw15dpm5ZHZGKWzoLVUfes7",
  "key29": "4fe9v1VjXRv5rzrWUqZB1SMUL3tuH4WGwWW3cTFpkkYJPUMC2R1e6LSTBQER4R7zcVoir6E2QiCZKb3rfkSRQLbQ",
  "key30": "5dgHfwQiTA7j76m89BNFLa2JTkX3mLYc8NbY1qaRYQEhHRcjSaCDWHMzBreb7USTZR5xYV3j7Pg3jKthgZdJkuT3",
  "key31": "HWjFmnLpDyQt7ZVsAXCGHyh69adFAUqe2uRTWakjSEHzssAoZX2thwPULfQ7DegvEU99356rX7Ez3UBN7QG2XNf",
  "key32": "3srJrFWPTjoNwxeBg7E4VJdhXsCnBQRjU9w13V1m6GS53chMwEYhbPMGGSESzuHCDvp2Bhm5sriR3WyKRrfG5T5c",
  "key33": "4RQXGt9yK2x9479aUgxcggyDfD5ubPDCbBtSeMJ8UmtDVszVCQKeUzT9PUeqK23aM8gTDWmyx2zuszpP4DYf1gfG",
  "key34": "5r3aGYQ9wofHkASy2LsJ2X7E1NkwG1NQ4CCtWWzX2UjEAPHbK481BKMR2S2jJa1xNykWiPRiGdJZGDRUk4mieM3y",
  "key35": "3UhmhPHt4TTcr3Ti9fCjdToqzg5yvmSUxoHuvGX5xESaehig77Fa5Gap96uGPCAFiKWZNsnixaQBALUyLabLpkzG"
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
