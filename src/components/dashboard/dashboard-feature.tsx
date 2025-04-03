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
    "4sjjBAeD2s2GnHu3HqEbZXe27tqZv1X6iLEDB5fvgDhcibPi8SqMQvpaiAdGJr9fL4fCtUrQuz8MCz4VRPmWdz3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "us9KjnqicoxYWdZ8ftMasE9aFPRRjmPdFZPJiCQJ6k2sURNFiHM8FwLvM1PDe5uHqdeznmhAkwaNDBjFjc9aFS3",
  "key1": "3ssfcZBWYYgQZ2RCDmE9wTjrErk2RL3LkDE7JJXZk47TQwQ6PipNPDqFBQW1UyCErtACN1meoASgihFuy2LWmczV",
  "key2": "5TG1jdkbcA4x9JSWxhJEpmQjXN1iEqG1QgnqJJU5rYJLCXvgML53rnEXwe5zCWLnBj9FZPaZqY3sXoGhNFzvVqmi",
  "key3": "4L4q8GpCG8vZntLXh4hN5vu7QWDsEK9uqv1VjffD54uvxHsZqc2LDjSPPpSU5mJKboWX2xhgrtAfVik4PvVbNRZC",
  "key4": "32eeQAmoKAUxRAh8bZ5ZYsWK6c1Lp8abKmjbnnvwxXfcRsRUi28Je35XUcTpREPkCftgp1r3gwQK3SB6co7Qhaaf",
  "key5": "3pfswU9qMY7UBU5x6VmnXQYitkFWdEy7tqaV8FrofPVdEKkUZtuC1Rpq63vTtXRhkL8bunMw6QMX5PPk1QfKv3Y",
  "key6": "4BQ5ehL7Y9649C3iYyvNByuaAsn6RFxQ8AcJi9Vh5C3Epd14XZhnZq9NsJCWjw4MSpGRsBsVm2zfbjKqA6r2armg",
  "key7": "4u4mVZyH9SU8s5SmMKKar1T9enWrw92pcmupR6oAz8x8nmN84jZbkQKj9y6AnFn38DVpwTRFUFvffi1GWkzRWGMm",
  "key8": "61TgP6AUhECrLayEybt9T9UqtR6AHpa9YTfjFEZuEkqJeFNUE9op9KmiMdQGE5as12ysBW9G2vWAwxY9BAzMwpAD",
  "key9": "ik7kQK3nVa518H8WxyiSMWyb9qvYTacKAuTv45e3jqeGqzQ5eizmULpeJPVh17dnSgksrYHVuMkXWCdg9GTTDp6",
  "key10": "46s5oLKuz3ZTfvbbBtGZism23EoFSBF7Xk54tPWjwzLxMgmYXCXr8iZrhR76Hnu6cqeKKFxkmAWUEAAAojW67417",
  "key11": "3ixZjYdJyC5AWRSJsK9bTNV2xJM9Z2TeTrXUEkdwdnrc3dkHVt3Lni46TqS8VSyiCHaHU4ro4pYUvNs5Sb6MwuFp",
  "key12": "DtpGYXd6dmy1mx6nomgCcrKSRHHtSYn4kikK1fP8t2ERWsMA1YmoLmUdd2YsEfyhs3Qt84C9FM6RUvFEP9A837J",
  "key13": "2Arre8bsABvugFVTVbuH8aY6MWwepkXFKnuqoWu2yDSSei7kC8YNMXzssQvWHgh3ZYSVzVvgrBS4tR3uh61yaEk6",
  "key14": "3BZvXNy699bwq6axGSd8fRvMMarLfA4w4q6NYwgjSHb1bRw1eJceLjnqd1Sjf7XGaMFipqH9MD4u6guFtAmBV6kU",
  "key15": "5LNtn1hYf3NRLcSogEt6XahpYzpcFXq8SkDCAbBhBMEdteM17ia9SkoUEPJ9GG3fxVDtcQFZvYGrHeJiSpSW4k5Q",
  "key16": "Z7pxFEqR2wdxxVtvxar4jX72PDCR2Ufyocm6P2RcLSZnB3Mm5AyV8jkLKjCV8dhBCtpFsPAZfScCpwpx3igYMDg",
  "key17": "2vnGDRZmBTH1husWX6MHt5bDB5V72MnzT1bXoC9RtCawQ52c7vkVUkpncpqXS6RBBDKP83MqiFtgBSWNJDWGshG1",
  "key18": "4sweTdHWvGoNb4KFGLBDkvNsfNVdGv9Yta1pKEWEPzaym9nigj6MKrg9XowEvqVrhjiPNcbHVxDigD6nLHNgcfNL",
  "key19": "2sMuk2u5idg37iQJbjnkV3s5D8dP8yd4MSYtoUH2VaR2AYJ3ggBfbeZ3cTdmAt59aYrYo4Z6FpzQf1UzYLdCAspQ",
  "key20": "aSr8N5cuKt3hkLkrJ29zsKKqXz7A5rh6J2QNwRAzuDQdyFbqYCfiMVK1wc7XTg4ziMEFx3B2PaBbeqfuByFHxiP",
  "key21": "4cxsKvwLPb269p8aoyXdDPmDZDyaozm3vTFpNSRKqGrhXtGLCax9kru7kBid3tuRiSvZdyxmh4yrZjmRn6LbPsXD",
  "key22": "3sydjhYJY3nmkR58eRzcAyE926HpqX3EJadzGe1LTkyvjoNxGReDGLjppGMzEe2SA3gJdTiRcqWoc8YFB6yX3SYN",
  "key23": "2ihzwPzE2uNb5fDQj9U7q8nGERRKB1fF7QTxpP9hVDoJJ9yvkqwxyZWSvxAemcm8Zza5fiKaEmnoCgBuaZ49y1ae",
  "key24": "5mWqRBcHGhxsbn1yC6wSgN7XkaWghPJet5TEFKtieFDCb8xaU5v83fBZatbviySA87YwtRo8US7ZHPdCuGquiENC",
  "key25": "2wvsxAS8DjKpmqGVTdw2eVWYGmzY62keGuFAK7S4RfW4GQT1CZCXPPE93N4Mmhw77ESDVPoeR8j6vWN7e67Hx4y1",
  "key26": "4pFSPJ1yZR6WrsmSuVrcog6MS35RcSeq5mNtJPtxeATCk1HgffwajXoKaQiCUpWzYvKmDVMgb2yik1aPc2yTVmLm",
  "key27": "53aNL1iL6esuJ7mZj4JfYpFas7NLmPHfV9JouUQ5ABbAa72R213DgpUR1n8Rdfbhn966Bpmd1BorAWRqHY69Mhab",
  "key28": "3GPnfjAM3kyZMRoEiZCfN8MboNGGJCK9RqGb8wpkhroJwiiMC6HUfvssfXFXqhBkNgeykcteaxwckwmyg1fiUuYg",
  "key29": "2TQJSbksrovfB6Qg285WWQpN5R8mj4quyYLezTnJS1WmURD5LqFuFerjufJhnYkyszLt2AeXFSkWbziqFUDRNr5P",
  "key30": "2WwU8jL4CWLo9Gewqd2n3yXR12Zeo36dfQKWh6Y1UtjyeU5Sokyu2cDdnCwb1Wc5dD7rEaHzGmDKjxqqYg8sJw8",
  "key31": "2bWE2Zegxfm2yTveVom7srLkZS4ABwmXHg163Zb9NRty1rkvpTZrgjRKmyS3SGy9WJ24CoHEqYqSvGV6JngBcZmR",
  "key32": "5Rjn6xDupqQ6STqswaS3AT4bN32cqjyYGSWXdgbhzPnA7r8kx7k7NgAHuxBUAoapGQG6ufkzhiqpqfAqffwtjoSL",
  "key33": "5s8xqp2mqkTtXafizJbsGmA4an9DrcgfYShpKSNgpBTyESNnfWkVbwxk5wA9D2WYViRFkZeZ1owo9Peo1Rs51kVm",
  "key34": "2QKVsRzrrQAnTArCsuWu5nYP1nrtBFvBSKd3N2TzUANhmLZ6JL17RtKCBJ1Uw2CYyjEdm1LJZwjbWSPyonuHyPUo",
  "key35": "4uEXnjohjkT1mwiBhjqojsSEKfWJ1pLbjocK4sMP7yukRRJFcjPxFu5AYrSGQp2a22SJhGpDe2dVFgeM39rahbuW",
  "key36": "5uBmKhLobefEnnkfPLeK4THSQVPfi4Km6QvNDRR23J4TCBttD7nfCyHWVv88QLVoLyHUCrVDUZAwCKjoxMCGDQhD",
  "key37": "4Lft1Pv3rxj4b4uppg5k6jfumVxWwSvsQUqRkUR3RHnwB7KJCY8MVA5x5fqWzfe71RVSP4BGhENp6k66L3w6GDf2",
  "key38": "2wHXQXZAxZkt65GFuBR5z4hfH9Xhd4jd379TRef2ZgxP4pnGM7qsLoWYVswp8VhBPGTqzFHi2LurjnRTBrJgLYyn",
  "key39": "5DELGr5tsqkNPBfDN1XGbDVSEhuugGqyxbxR7JVoDppMwPwayXQHdCHZdxkhguarmfXAyiR5yAAPYqButZeoPJLw",
  "key40": "4SGTHnsNiHX7AUSZjbj3e7qhGidE8ge6sdjeJg6f15mxzVQsAkrno5kCQmCukyrGmDCNK6H6hE1ZSh4YwYG8icTg",
  "key41": "VZjNXRMyytoZSEc3kAWrStQ9txWNMBJwdNvmpqPPUSRyg5CyRSAEsLSbCq85TuxwnPrxtLf8PNrs3uUZmx18vNq",
  "key42": "4b4ziSdcMjRAioFi5sB5xBdaNfTcGWTcF8wfFpCiAUMx7kKN6DtZCvEdtRYJLaLBBJF5cdZjSphu67ncywnPnkHX",
  "key43": "5VLTx9PyMxMyfrcsir4RimAqrdBbVoiiMA9pEoQ4Kf7F3uBZhCePvTKsk4ydEaEM1nnoDoQYMZbFKZAKCfg9vw2C"
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
