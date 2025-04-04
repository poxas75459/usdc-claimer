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
    "3NwAyJdVNxTAzQgF2xxtKz2MMzTtHriZPtgwQpUNbrSELRZ1DomnWkLtpDW126NEU4KxHfmuJU7Y5SnLvTyq1GcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eytgRyLvNcmuhDWcK28ohcYV8xsBPjFWqveSf5LnHjiZVWFyFf9TzAeHffJD5xzjpZq2kuJVLLgwyr4tTaeNDXr",
  "key1": "51nXrQKK99zepHhqDMHHE9uyW4Bz5wraixBn5cCP7kSXns5Xy15oEZ9Ffp2ava6HSCHtjeGqxejgwTzVLqnNV5Z7",
  "key2": "293bEH5gDuHq2XoXPrDG3gaHfNicPyYZZpUWWecuT5MAvnPDyZ3RFm755sCEae1kT3KBjF1XcF4APmtqryrhcEwU",
  "key3": "31aD1cRLdNejtPMTThG9drgvrA3ZkpEWYKbHc6w1W8EFUAfJRZ11BhVxXkLxm7cAbSbGGp3XibHw1pn4nR7Cvd2E",
  "key4": "bNysaEpXdmxT7HkxazKNoBjtunfnJ1EfJVoajSmZwnTU6oHEDB8P43wPycPYmk1XgcbGsmcaVFkWPdpeLTY71RW",
  "key5": "w25L8sWH88GTG9GLCzbrzLEz6xe5MnVewnJcPoPCUJwDs8CJWfT6KLmnTXgPqj9Qyt747zDMce74tbHMy4aJknM",
  "key6": "4VjKJ6Fj9pZpqYskL1bPr35E1KTaqBUGLBRSdvXoi5XVXU99a7jzUcAvv2iAfbXJTZhbaejq7GNDawsc7oT5uYjR",
  "key7": "3DL9hEivaipv59TAJNywhk3QkemjwFZBAd8rdVrZhApMscDzQEs2rH16e8y5vhwy1hKwgjH5b1vtUee6rQYWpmku",
  "key8": "tdx6ajmkHBAFC9Y7kj1PQ7y5CgXU8NKTTMojMmZ43jYzx6m7GjRgSEyoAoyufrjy4SVSKa5RmiCJhbAf3zzSwvD",
  "key9": "4G7kshng3mbyUBiXFhifmnU3mZnsMP4RfFabPnFWWrYwGqyL2Kd7TqoKHQQgMmtqwzFaDJVgtNENMq9MfcgqsnEj",
  "key10": "4NF6r5w7c6apaM5yFZMD7b4F4DKov1FCXoAbfs37oe5QZxqgNtexPfMd6WfiHpg4vsS3zyf68GgNw7GM5yNNF4C3",
  "key11": "3tsgyNmEyFFhzMBD8mgxLCyXo7gqkk9BVzFf6JdxzrWG16znpdRWjTbcLnLC5VfeXzWHjPxXeuSCgAbd9tRG7xEE",
  "key12": "4KB2pRB3eaEixqvdZYttddCngr8BTGnHqHUfFkwCJA2P6TuE2PKfQxC7oGntKA5QqqaCrbPB7sLdVGC1Jrasx6LF",
  "key13": "Xnvm9M2Tft1oW5pUPeneiRArcidG7KwaGtfoMaxbFMAzwoeU4b5QsnQ5KAhgG1GwHdGtQ72n716bamU6ZqYKy4T",
  "key14": "4D5MhitAcKoUTqUv2YgZE1R4UbDf82gzNpMKBwhRArSbYD4fkHjzgfjnAwgzahU975gHUqg31BLzeFzRdhopyoXa",
  "key15": "ywBwoEWnPVzUujd6ffEDHmPmGcZu4CSa2h8QpHrXcnwnAYz32F52dTwMPwoLnr2gqi1JyFaAcmSKFFMDr3rcPBL",
  "key16": "4vUrg5cE4a3ELjHGb6AbgUwDkgjuC2HTaPunVkq3zWEzSrMSHDZsuKHHiLL5nYSWhN5Jo77hQ5HWP8x6AnBaRoqN",
  "key17": "yDhptPn7Yu4yHZw8jCkHV2v2xVtc4FVWjaGfDjGnzciMS1bc8YWYSpr4N6Vc2KGWNLrHUNQh4M9iDRT6BcA7dBd",
  "key18": "59R69hcL7mSzBEVFtq5ghcFvv9MyFotjs2KBkXqZ4B7Sn3q39absUk95qy1xKU7Z59CMiHfhiwE5Mnr6GNFThSSd",
  "key19": "3ToKNpeWmRk3B9USdxWwUW4AiQFVqPr81tiKs3ovqodG3TMVQQnGnubqnfH4FhqhfRW6gYmgSU6YcW7BAw2MbmNU",
  "key20": "3Rj6bS5oXqNpp6QuT5VxC5sHwAX9m6Un3yhKhV3m3aneQRu4V2zQKJ1Bzz5ztNFSmZao4GnUn4ViUhHyujvDcyNA",
  "key21": "QaPhTcUthCBVrrWWdEPqcp1PuscMvVvdy1DpdGZN1ouUCbQJqZuYcFARza6W67cgVs7fxXnzS614Vn1Sf8d8gTA",
  "key22": "5DMKqKFBvXNafLCu5bcMFTbeBvKNcVpcoEck2SHjusfSPEuAaWg9Hw7C7kqxW8tYK7hSYmmzyNFBduVYHpkL6t2q",
  "key23": "Ph1x45bRz7s5YsvXk2d99xgA9rmtBbwd5BVrQBnahShsGUQJN31qaFiVXsVt5dhFrv54Q5MzYCgwjP7xufr6BH7",
  "key24": "5zT1K5DwdtMCiC1GfYYwpdUxPKjm8nWQ2n4jYHVjCBGdVKXRPeaaNWc24zyzLHpQevxXsj65JQddczSA9dWn23WQ",
  "key25": "4okff1uYjLpp8Z9ep7k5Y98RoBD7jAura8Z9BvdkmfVpLAqfoTJb29v3fiZULL7a6UqVjqaRnBbbFz5yRsYUeMkG",
  "key26": "2CZEsKfroVrZdr6qit447DZXs8fKA7LBhwkf11EoEQUNVLZCDsU35RrHaYGhJDkaktWDw1XYWj8GQSg9gXAfh56E",
  "key27": "C3wBUVmB18eKbVoS1regKUhpRuwK1q3om6XiELpcq299gcHxUGK5zgorWeaD4FvADGGCHSCo7LA88nbbiZGZqxB",
  "key28": "CoBMc5mhSEQ7Q1nSyKbDje1bPAunBZU7UonwSwKnAKGQrkmKCp6tKfMX6rZPPJFtC3WeCeKKwk4FHLYqWKT86L3",
  "key29": "2MD4PcTqjD6VsTHpTJoEo6U75J9oGTY4tTVBcyZj6LpEphqHxu45PsUHr4w2x73fknauLhKXEuEBKQv9CjkdTb4r",
  "key30": "4MgCe8YyLmCxfRoX4xWtfP4qeyC1A3EUusQ973DAXtVHYUCvQmNWAQdLrE2oA5SfJmyVnhvtK2QdZ6tSRyXZEBj1",
  "key31": "5ogAuTLfcebShQqyQE2Q2rK4XWA46z68DtGH73AaQnqwUZcToS6HhchFN5d7SEUY2ehLmrTe9wQa4esVRMMTvt8x",
  "key32": "5b5nkMBt26sPeWTqgSLG73yL8VQ5WrVcyLGvduaKvzD3FeCaFniVVe6DQoqdUkLi6Ty9GkWReNmV9YdfBrzfZBer",
  "key33": "5SKkz9Sv3U4eVqSdwTZnCpm3mRoQM9vS7tbtAs2zUCRqTQCdHhs2C4926ATwj6uih2kn1e6zxwFSWSc7oyhcWz6d",
  "key34": "f12MojX1mdvWdVEbgAMmCFygSb2UPJcEv1fU1YEzTq1gs1CbTBFvefYNAEcWittND6qL7WsMJ3pm9fD392ViCLX",
  "key35": "M7mHRB8MAy82xwFsCLnmqn5y8CoBGXzJrg4UiU6bLuVvfTVEXMZ8D9puR4tFHRFW9yT3GoPSb6r5BpQuxEDwPAf",
  "key36": "4VBDjJMpSrhzc2zAZ8cBDouPyGGm92PJ1WdZp6DdwxrGSvaF15xBe3pVQGs6kpX1ikuejDrcmWpqNQYN4U92eNfe",
  "key37": "DnasegKrJg1ec5jKuT6kd52dC2uhLDztStugDwssHi5HxgX5tk81QE7FoCPKW8KVPiiWZjYqHJ8ZrzpfVyiPPbT",
  "key38": "4rzGP8qSD1Rc9dJtKtoTSreZ8LprVgzZmwEy5SuyjEMZKGfQgkUm9wwtK5wPaWtWSoPHFVHZT5X6DXqDWEfuH9mK",
  "key39": "52LTy24feVcUXJkQHE2D4F7FoZFXt9JQ2xcwrnki1eRymtvWEvSaYVRWmXm6NvRSyMwMT1wmfcLDy4G3EvvvRYSX",
  "key40": "3hf8E3ZRHzRGhtpfaaVWzgzD3BNGSzvqXh4179qEfryZ6hBrFFkriFhtifvX39Dhj2LNLChzsoU6EAs9E7UHY3bK",
  "key41": "52MqrWdKduVZAMnqWKCWQDr1hA9zV3Ee4zHQTXqEhEmkP7cuGd6GJt2qa4kZEsrDPrp82DDTN3bMtsiqUgURuitL",
  "key42": "5xDqFjm44AwT3gWMzhCZrjFRiUStmMeZSHhHkAaprS9G6FhnULjbnZ4PVMq3xpRazZyMiBDiFuq1arAhnENnsMUw",
  "key43": "2urKBFgprAFPozyzSC13w9jr15kAgkurjRaL4PSCvyhbF9zjor1nReKRDppv84aAprmWnungijntmNuDhWPGWjc3"
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
