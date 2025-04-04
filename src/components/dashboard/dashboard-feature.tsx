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
    "4n56HyANHzVw2qD75viv85qaWzzpgFrevQC1wdcPsjYNgqSoNStWMdoFdjhjz1SZwLpnpBR1xHX8E9tjPWfoDxrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29HH3ZtXx86uGS8XLPYnp2hYBe9prXMcGH91JdN7jXATf3U4AohRWHyf9nUrMFhcMd1LZkEGVnWnJjwLCEbq5YTH",
  "key1": "5NKAYfwTTdRN3e5GxHXdKWmyFP3j45HS6vB1x8XgTxashtD2W8cECu445xfdMtkrmvybcg4RfztFLop1gS3W2VV4",
  "key2": "3icqd9339Zu234JqyXRc3wadzXdg3BpFJRGczYYCJH1cX3jb1JNezqZAsycK9mqoGBeyfZcqYfinqc7UBUwEHNYA",
  "key3": "4yPFwS281WH9kwcwiTc9fCpH1EGe4CGynmi8FeUQKEKUaRKHMqogs6hcYf6gbgiXERDNxz8ztTKC2QiUaGRtEDAD",
  "key4": "4RnPhy2r54Rb5mP3oZw4vn5eKHKEmKn4wpdXrGdLJJgCAhTxAjtV2WTVN4ATNpqsYYomQuE4n7ibmm6W5t7ZH4QD",
  "key5": "2hYxvtXjp8yFjF9VuqpBLzei5CtvJ1ZS2mYGsvJDBap68atgBNHQ1mqzUAZ6bRY2H1vyu1dAB4W9i3SSf7nPhUbj",
  "key6": "5DWzHhbCRXLEkDUpvi6C7pqugKMasHabjrRnah2L32H4NFLX2N5EyKC8GMdvk56tFdFLHCLMrdyTfLNDdQX8D5G8",
  "key7": "2UDJfZFXbjnphzuZ8XR8H4wHmsJKAQ3HELSh1znCkcJQBFjEB9kuQjb2s4HdyRHEM7C13bKjF4q14HrcfQgeJVSV",
  "key8": "32SjBo7n26KACu1BGGAvzYaKwj1B3HAQLzB2pibU3mwECzWpkdkd7DbXq3BKJByRuC3jYKj4nqzGJsfLdfyMPcDL",
  "key9": "35LjSgck2BgR6FhWVsBRbGvU9mPxVLz9HFxCPBUeLGmrt8rTvp2NY7uJEY9WWS4DZ3xRo41JwgpzTXFwvMwcc49Q",
  "key10": "3ge6kzfH7fLFGTP1CLe6A68Zy1LR4h3a3129awCHbaB2twg5FCjwW1RehxC92XhU16Qv1q2We5popeTsbsmjXvhj",
  "key11": "5weS6GrmJ7tT2YWKcZxS6d3mJDRKVPRGqwbkhtgKsD1LgFw69K8JBbTeNVCT7eMwqvUZwtxhkhUsHV9Vor1P3ooH",
  "key12": "31sX8GoX56SQ44EyEXa9EvCz7ne2TEkmmVBM1p9T2b12CgFKt8Nh2g1fhhwE9o5gSYmEJZY2vwEZL1Cu8EJapZEJ",
  "key13": "PzZ3yqiCr2f9PeED1vLmitVqqLuvzAJ62rgafMjvk4NyYTVgTePCJoYW4oxoTHCy6vZyjSDTnoanPMRs5N6Wk6J",
  "key14": "5HqVLRjgoMSLUeNugorA3KcDd59dCnTQg4knFP9E9M36fcLHHFD5MrXi4daextWXfygaVzrJTs8omkDcs5brqgWE",
  "key15": "5xBarZGBHuNagqi8JmWRYB49devTxm2xMkhxMV1aRRCjmmsQMdwwCSxwFy8XqaxKcGoCqCDSNcFdCLhz6mG6gXqJ",
  "key16": "5LmFxSkcjcMyeBfzoiva9EX2WUynQ2Ye7QAVdo1uoVJhdHLx1MFrtUzFYvndJo5DZ8zxe2mZAva3H1zKGu2C3qCc",
  "key17": "3PH9yDqjJ2yHtzpeNgrWQ7GzNCkRGhXbABsRuKjrN6aUE9HF5YrpHx6iFoRYC6Mq6JYNrjPu4SZfXe7bxSKWSGdG",
  "key18": "64SL3bUk3Chgdbrf5e6B45iKZ4T6gS8qdvd3kLRpo4VmmK8pDHm3K3JWBKW2VBoRLPgyakKYGn4Drp4HrjXuMzFU",
  "key19": "5x9gBbRa99YTh97P4kVxCnmZQK2z7NBdUt7SLbmFarVUvAgEHk2FNQnA8qSS9HiaQzuCuQ2qC2CFyzvcKrNojJGa",
  "key20": "4PTMNoGuTrQMT95JmFmeFj6mb71MczzrHcAFwZ754FrADPDF1n78Xt1mxTWia8vCRLXrQsrXn79yyBu5vECtT8dZ",
  "key21": "weu8wYXNsTcEk9bQMwzcGiU814XSGrNuZmwBNHfzPDwC1EZXZbmmwMq6Avmh2thrDYoAkJZ3Kyxj42gfqcGa4eD",
  "key22": "24gjN9qwzCekEiFcQfryUvP2e4BPz43t5JEaeix59NFhnYC5vwNaMou1J7QchkLmUsaeouvVfpoN5nNX7VF6o88T",
  "key23": "64KYcewiodHgMVTtgvoU59wGMmSTDJd5WBDDWkx5ztVyfc6Ts9BpKxH5fFAsne6fKXhHiUejimq3Sy9n146MJXPY",
  "key24": "Te7N3YL6UsGtRXq7dboEX8b5UCJQmhy8LDoB96qBbiC7WMvTakyjvy3iChMbuq6idrZY36QZurnxzpzqAGkXGJx",
  "key25": "2ecZSdpQRC3bERk6BujW3TReMRPNiTHvkM1qDAH4htB3gbwLfK1PAT4LR25jPV6iSfhh6iZRdpAxbqD6wWx9b2aA",
  "key26": "2uUknCd1Xh6AhAH69xjTgfANdbdA4BqUsqyuKeq9KCFNjWeSi2oLY5M5Wc5hUjWt4woh3oBikSWac7A9MSKjXHAT",
  "key27": "gKgFxwFfZ7QLyheswAfoTPk33vaRAZ8sMe3oTNSRC7ZAXgXDhgTAapuZQvi1q2FKiTNLdzQ4jA72puFyHbGe9k6",
  "key28": "2RVXEv2aTj7YLufr9b92bYDkkGpZJfkwE2kGN5t3teM7HTUWtoJNZBPzYUznHGNgGwnLLJJUXJXbx62n4HEgxbdF",
  "key29": "4wcCkLtAzJm4M8LRxwigmA1a8XisMiCbfwP878ghfioXu7dmApbFpabccqefmonNb1BSMEmKccQYEBcXDVST7jUF",
  "key30": "Rko57u9CRVBcMeUggTwvkpuxisAEjhk3PzM44mkhWboatQA8f36xR4B4Z1YQixVrhuXHNRoq8jYgeu5PkaBRJbP",
  "key31": "3AdeHLnbVvWrBgcMKsNk8N1oYLo2bFcUEY5JjrDh7tLY1jXVeTk9LUcSGhGHbyMQHBKjjGKk1PAVrQgvYRptvXus",
  "key32": "nxgbrZGEU3TiSNKTNFC4XSZDRX8ubsLE7XWX9GqxYeLhPMKokcDtBD1b7H26H6Pjg4P3LACJtV9PuqwMS6SbvnE",
  "key33": "2KyRbByDJ4JpsqEK1v8cYMAMMgiM5wJgWZaAkNRpm4A18R43wPLbaL9n49ezr7ZF641LqW5UFzJr73yYX4ENQoCz",
  "key34": "4mcLt1DnhoR2f6c6v6y2pRK6BVR6SAH3vuNbLquM12iBxY8bFT7NUDSbJMsCiWmQCXCXBQNVY3iuCCeAEe2AdBYm",
  "key35": "36NTvbSKyuXdyPmVf4ak2Sh6N5YFhL1RhJkiyVk28r9jLhoukwr56xbED8iK4VucNbxTuLzPLoxuQc1fyYUoc2tA",
  "key36": "5YzKAQBeK91HtdMiAfV2mPkXMB8Kr56YfEXtVvt2MLkRwq1bpFPUNG1cVR3QD5YW3jQubXQP6cN23AFuaEusRogh",
  "key37": "29bEuwLg7hdGNct84Dy2zVAcrFBAZ6cdykG7ikT3SbMxYSzLtYGL5yBquDSQ9yJmSVbghfsJSUanyPpwjBhzYX79",
  "key38": "ELnhZDZnrFRnY11gtYpUJW9TV67aLZfyAcW4NCwZNuKYp1mMKG7LF83QYEBst4Dx8tXnoKUBbPMjfzuqdLYFSyi",
  "key39": "56nSH64BipAUBgRQ3WegNTXFNSMEWLqi7mfiur76qBbju7kaDCkgsiJe5Z1fKwYMKDwLrws8uxGhnL1j6iN3FepM",
  "key40": "2twNkcLPK8Xa9xHEoZBUfVdjASWjBUcZAf5R2kXRPG6PGEURECkQtbSinWGqWVVcGmDqwB8mBQhtJJjw7mAu2Aun",
  "key41": "3BoGvJscNvbzNShfmiYATNFdcpY4V5bXWe4mwjL1vdmNCyZpJi2PfDvaPgtaVQtD4xKyCzgatrqBxLwaLp6bpEfW"
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
