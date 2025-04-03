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
    "242PbHnBKLLihELxfP7DnR1ueD5EvavqDeJforNNMB8xf4MsLhekrfK33x4jrdyAXjn55xNoU4ke3dJhgW9sn6Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xv3puryAmz1LRbWWvrpNj76NPAzYxiVGNDLvGPEDhE9CpSmf2HxJd9hz4UaEbwBJWrvaJK64zUnYKSB8u6zJdDM",
  "key1": "4m8eQ2x1pvgE29w8tBXjQjd5hmntNF3gvXg134NxxWUWtsPcHBDjHHib31UXYzNwWdrx8UDuP1pAZoDC6p8G1TMi",
  "key2": "5jVgWqMNuaAdSJH5aMtPvMhbxRzrvA2MM6RLHpA6e2mtbWmDcitLWu7PDwHi9YxnxTqLTePhFQRNWQP7XRUuEsh6",
  "key3": "tLzvwcoP31HyuLXmsP6Tb1cELrE2yQjaFPftxPmPUuD8AcgAeeZAj8Y68uDH9GLjVdM5voeJnwQD6SM77JtuXWF",
  "key4": "5tEaJ1PsaqAtoEkGqZNMHgRsX8t84EbiufmjhXjTSkdJaRNvovMpZsZwpkbU4DsPVu4LF4jmNLVvHR65ARWduupv",
  "key5": "5k7GZTZNvV4LoEzpm8axmJNwNy9LXUwSQ9SGWVdCjaZFrqFEbnCTNYNAkEhJRifdS5TaoKmuVLi9fc3LFe9oRqXd",
  "key6": "5cCyMv5eai1ML2TeaKcakysCTqv8HTR68BqTSpx3hBjeYSxYTjMsFbUqX5MBoCYo62AuvNCB1a9zf1YqLK9mAg2f",
  "key7": "4eGc7xEmd2J6jSDNtug9TBZ7DozK34MKq45UMcCsPJ6JCnwp5pJNJ3emfCBu2oxaGafPv3SbGobBivjskG1X6Eu5",
  "key8": "3CppUE7tarsvPDvaYx9Zo3wAr7bco1ZPzhEbJkyN96ZyKcBxCaz5mYVovphk9rpKmBooGwfccKv744xApmvim7kc",
  "key9": "4Y967EaywT9uY2JUhsvjp3atmmH9HAYRAcukM4xXGupH8FWtKtNPuwtcQCj6c7mT8cSB2HsX6UThGtnXg4DGr24d",
  "key10": "3G3N2xZoSUbZBU7p4X4UF5JP5MMSNjBMkkDb4Ju9kZgFPYAFc7x2AxmsqoKgVvQ7hJqQiShsQvm6QMptiC8AjShS",
  "key11": "3QWVPLAVRUhxk9Uraejt2j73kTc4sq7dsaTSHAm4v7cwEWvYhbsBW7pFZExKiNgxuYGZxwSg4sCEVXZTiKv4FjXd",
  "key12": "2VQ7DRnxTuNCXuHXfD4CvHFzYRfv3Ay1A2JVwkTangVSecUFdh7rHmdRd5pWgi3UvcKKWuiZvJjUFhLxpfKMUk7M",
  "key13": "4T1CirnVdWarNt8XpsA9kgtdYAu1MXShHac9ivUSw1pgpEnhFmqEXtC4PSxSQwSHeT85NdkbjruTEb5Q8ReHpDtW",
  "key14": "4crZBuwEyyCzZ9BxtX4Q5134A23TfpB7hj78p8ytoqNRgm7i8fhPmYXXMByDG8YPzWzhuTiicpBuk1z3Dgc95m6R",
  "key15": "pVbSdv4cnPayV4gMAnVT3hag4d3ok3vw7oL7pzQ16vRHBJrq2fW3MmEdaunpR3vqnG7D9nEqF13y5ZWszxdngTc",
  "key16": "27DrTnXM8BSRxE7Jw4cffz1kimUGix2EWY5AzsT2bCmWrBkAG6UCggX18wRqFSJr2SjTVCR28etLHhHTbvcDZZii",
  "key17": "3zuohhshiVFa9iB3zGrEovMn2C3W8vPu2roS5ciX2aCjpCjSJShoSczAnNQvcdr6JxUsvJ8V9zr3FaFRKbdYhda8",
  "key18": "4phQ6BCQmbah4DJG7spF7PumDHeV1stb2pfZTu9npxy6MFxG1UdXEPfLKAdAif1A3nBVfqGCXz1yNycSaLAwsbjP",
  "key19": "2aakFjU5FqWiX5LfykeZH7G8QH5aUTCdkTKVsF49rzyrsCZZ6wmCXbdQSZFdQofZ1BxR7avaEhHCNrbLtZ6hNvdE",
  "key20": "2X5LuBXzsqvVZyqhzFjRGTskdKAwR2GQ25w8Y67uByfZfPon55mtYtSc6HULsRaFK95DqwDtux6VoC1VXJCWuESJ",
  "key21": "3MYZK52B7EqPhE15CSZc1RFmWRNdnkg92tKtcB2RxHh3A89C9Jfy4x4bLaFr6PRvQap1Hhqy63KHmx78fc7h3EDb",
  "key22": "36weBcnc6K6srT12xtcBdUvMgVhGzWQTb2Dy7pTeZ7toS8dWjtfRg5zPrvWr61H1VE5SmJb5FoB7HJKtGddvxN53",
  "key23": "5p9zvSZfGsf1adTDgGLAYrWDKAv7pQqvWGe4Rc7eTJHBNoYihhSWaMijfnBdPbWvBcUPk3QaXMBBm4gw1wRA7ubL",
  "key24": "5cX91G9ybHh86caEKCakZFeMN4L3kfvyQzBoqtMUmV92XNmDJ95A2si165axkSMvNdXRxib8f51kEfH5AkDzkhnJ",
  "key25": "2JjAVPEwCKyouwCvccCB7qY7dQBEee7776r1ducVsAhodcEsYBsUfevZqaLhYybWWMU3Q6h1neLLMXxjNEnT9s7y",
  "key26": "5tuX2u6QwWicx1AuCCjYydWYfLLgYScwwbh8fCUxq73MWro9msVC3eM2iVQmKYW5m1dubVAXjEc5hV1nSjnGxW1A",
  "key27": "j87hh88ivaHdLA83hV9qdGPXvswUG4ZVoG5Sk45CAXKFAfCDnTEyvMhFr4sZQiSPENJX1QHYtc4pko15gr6HGHy",
  "key28": "DeaptcPFRiTC81bTbRAT4zDQZgSZyNg5gf7R9MLcBbtgWBGXSFy8TaEVesaf8erRgoEivQgdDTgQN5W7DmR38wv",
  "key29": "533RYWej9oAGM9EFGqQgin3UZPRJhssAXSve3nM2L3PKB6uZ9fPmJCqLtq8Ron4fg3Lx2xGtoAN3yQNbYgkmouFm",
  "key30": "2sBz62gDtRwVxn36riHpchV1qx42xg9y9K4v5gnsJnHZ84RkcpJpu3JhBmFMfs6YPAnhi8k2uHYiqpcUtWjtCQsj",
  "key31": "zx2jnVyNWjrSKT54dUD7vvNd99WepepKaqRiEUGVcML6eobNGhkj9gHpjDPZVFBcFx4L6F3ee37E7NJ3izFPEDN",
  "key32": "xpTAcotnmauzPK9C6puL9Uxh4MJRVPbVynCzUp81hs9LSZotX5YYNfmnCNdagLnHZeuSZUKUZXY1SLHWxu7AcKg"
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
