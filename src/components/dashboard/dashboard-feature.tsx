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
    "4xVmsndruE5e3t4NRjTdeZ2PJG9CFPuFckaGW4bchr4cN4GGmNCZEAQ657Cu6zExvPStE3DVw7foiYQZRND1s8jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VLgEvHM7QoL2QRcxwDnzKqH6ex36Zp6oCGh6NdEmT9V6U2suStdF8pMrPJ8fpkqVfkfapJgsfcfutDFQigiXAeT",
  "key1": "4GuXKivKDzykoQKSAr6kwkxPJh8umCCAoJb5zbEZARCs81FnNrtUu3H1A75zh8cbdd7Vhofxodknx7YbdjTPb75R",
  "key2": "ayoK9XBGgHjSP3uUnvNx2CPvTnKNNpXKiphDf4hSsiBzAhiywhkUryNnsdLXZC1MKVw6Tv96BkKuxS4eKiCdBvL",
  "key3": "4jDvJ9mH4RUAu11SQCs43fHtHPJL2TysPWTpr1rUXnwYG2rWUn8ZLh7hrmqm2uGomLMdYPU7tYnunxobc2wboakW",
  "key4": "SGT7cqfhBdcQCm1Pyi9e8p1nRKAsHSnmoTGB3A1wE1Wyabc6vP99EF8geDNgU3n3nodjWLdVUupWoVEqADdBuyy",
  "key5": "59ocDuoFMfz7VDh6Mx3pokd1i2bmd47YkimUWDbKgcFknKJYZbnCrRq1jVfjwwGbpFcYrQ7Zxa1ANpm1iHS9E5f8",
  "key6": "JWLRjhBvdW3fs4pyfP4wLXHYXeNsFqMq9SyBRJsmBmUcPvnhVBMQMMB68WCLaY3eAndXTgzaZmLi8eMXtZvCUpK",
  "key7": "5wWpaLfG6hGNEhawXTYCcG9bdTy6fnaTRNfzptRX7bN4Q86a2k5Ti8GkgCac5co68BvUCWbe7ytaGUZgpwYsn9fT",
  "key8": "398b7ixQQ368nCUFr1Yg2LurWPpZ4sxNqnnr5c5j8fSJTTozjTBKb8EE9huS2icpihdVazNqrAM9GC513qZ5ibRL",
  "key9": "4zbn2Q5Uui4iCBJz1AZb69w5ALJsXa7J88ySwdZGXpeqJoJDH1j7PRYtBP6xEygV5B1CUqKeGHNLXj2WpztzLs72",
  "key10": "5NyEGT9DdqzkRCFgfTPgPh9QJWC53cNkBwmEZJ4GYSkgWpWoNzx8eBSoNgE3Z2t5VvTNAjnoFQedeWLDPHQLEovC",
  "key11": "CSaVU1a5ihmGr2KkvSL2b5Paz9Qx31b7sCw4sSLJrtBBWq4TNqqxQNQJTJ4auKZmFY8rFw7zYvG78fTHRAWbyw3",
  "key12": "5gLFQFzPY5P49PSpFvPweCKRDk1PgwFrUQD8ynkZLVC94Tjxpwx8UnhJ8nX1P5psP5ri577VrPsioVAKjhWz2djs",
  "key13": "5SuXatpDDcS7hqBvu9NYBC3SBcxVqr8bRhBXKhsAFZfseJTsoqKirBhBzVxBVRnzCuF8cqv4Bqarmg7tjBBKbGKP",
  "key14": "55o7nMG1aNRcgArZCcd8Uu884iVvE2s6u9NKr2iv9b4d9UrCbxXGhHA2Kpum6KHAfPw8jn232YDzoTuRWHHgpKHK",
  "key15": "2zDG6cCvnDmiczoxveWQa6fBuQEYmBJeVvT6oZQuGTkWH8gXQSfTvxbr5sB83Eob7V427BqCiCpoBGtemxALgFbW",
  "key16": "3G3GtWe5eN1bNLsM9ZXgCCwKixLaPbULA5SGsWyjZv8Tx8nXDSU32RLWnWKe3NFQ5HAasXD8jddvZp5n5VwVkS4L",
  "key17": "22aECRxwvuitLdoiwi7RZmDEQuzPKaNZJQF1WV3ah4Z9D9VSRNKMWZp67SZ23YSMqreMPTNji72K1t9P4dL3oaW6",
  "key18": "61mgT9nEwE8JmZeLAJi2KUK3mkuu7nG87XG6ojN6vaoE2s6YRP86sZRsGAayhYa3X3XtD2AqdadCZA4QA2Wdae57",
  "key19": "4YF6EqTfbyBXHCs2R5vvcFwxuVsHt9YwkVjgummaqXjLVgLUoM24fcF6Mw4WfAUJcRVQw8uKWUcLu8icg19wPdjX",
  "key20": "YKqasEBaAUvWpd89aZMkpfu5Frj67gzbNw1WYLM1h522zUmRPMpVu1xzUxJTdKbushHiy9QWRTsZozzFn2nHvFd",
  "key21": "yBY2JTdvU8t74kPCfjjQoVhxp7i3m4Rc7s9WZEg6to1JCgB7CdE3QvUbNcBM7TUfHxufD1LcbUA5GqNcD5uvRLn",
  "key22": "58GEJFQxAGeNwLhRgoy32E4PUTjrNpNmnn8qjah83BtHQXt1FB4biocuEX7qz7GywXb9yj27GQ1ZfyexHKbizo5f",
  "key23": "5EsPXT524WQPQK4unQ5u7tDpXYNJnSZkubdzPQ1sNpRjLVn2KPy8whjMKPcz9s6XxgioDwPY6augUdDzyz9CbPV2",
  "key24": "J5yU2BL4nmvZF6etRYNiApangQT6RgPyx6UwCgYb38n9v8tsrhCwkBJTUAL1KnBjQ8eJvEWDNjDsTkiszXf19HQ",
  "key25": "5RN8kB8vfdq11X4aw326N6urFbiVXH2Krn4Lxq4uyrsyMm5CTd8FpAHEFevQapP9ThMwiRMzVMUkQmGZLeYF75Be",
  "key26": "3672g9vnMeUe9mCVYJ65NnfYc9vTMPdNTEgkLvNSNgFCszW4AKoViz72rJDSu4dxrKd9FMFH5hxHjubWkSxa6AfZ",
  "key27": "4wUXzavuVxL5PSmLKWURwkGV9BMm5bsfE7kGdqefvzmc5c5A4txoXPZ8bA6iSUgiAEvW17q3ayVg1Vq7EgERCTcZ",
  "key28": "2hU3ggwrNQPdz7Yc627D56V59hiL67CU776wMC9Sk2q1dXhfmnsNxJdgAf49RzAKpMzL6ofZEsvTETEB3eZFHycn",
  "key29": "5nRPv4Wmay2wBJrytBhMGqoxDnXCXNXErycywyYqejdPKavSi9UNyuq6Xdizu22kksm14mzjj6iVGsb13c6wiogx",
  "key30": "154eViRJ8WACo89M1D3BLg5K7RNAQVrRkCAZgqNfrBCEE3AhKoZ2stBAUWByoYdB5ugCirmYm6DtUpmV9uhUhYo",
  "key31": "2973gLALmg6abgZ7cShVXAPmsfUB8KWLqHgXXEW1tcF5N1pCRqboM5VkXzaxQc337ypbRe8zLDtLT9chXHnxxhe3",
  "key32": "5c5hh56ssbE2Yicy9R9qzBB9HVVpsUy9rY1WfNKLQmCtr1AMQuDX4eyKDWnUztVwqGwuk6sHyAxGNE7CEnjP2TXB",
  "key33": "GEnKSNKcE5EzuViLVVh7BWd9GfvygPAmd3MfH2P3pGPTw9d9ads8FWGcf9xLt3JdyBFnoFMSLjQw5fxx9YhhY3v",
  "key34": "Z9k7aeRmH4uF9G4tus18vQA1WgwPqCxt48N22WDsWTpzqspme9tnpsWrqrtNi5YivFCsts9QTSEtkM79WCU2hPM",
  "key35": "4oxv7x7uJWeGfSPKEapVcAnZiWvKmHqL4UQbJHma1VPtVqeRTu6sQ3zckxPXsKSw5R81NSarXaJpJkMkMsvNrrbL"
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
