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
    "2ib3mzBB4CcMKd9FtXrESNmA9E4GzYJwzLfdKiN1TnNNyTn93fYqMypJXP31jdr2FQWddqWuh2Aq5mWyeLsGYhVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dqST7Jem2AYbsGt8wxKjsYUJQdyQxQ1Sm13zcpSHVYDPoJSBXyiYPGGSzXh7QrajTA6LEWPyZZ1gjdK5hk68dzY",
  "key1": "5dWNLGWwremGDAVbRhDfSQB9BUDcPU7BughD2UyDhJgx9JySJ1JbPSb8nEpE9NmkWsVfmwzsXc8cKm5tqgYEYNiw",
  "key2": "65noLVJyLu1U97H7vpRToBcivD9Cs2ZbfR9Ham9j5Qnx9rnQNuSjcCjhbzPwLi2VhzmDYWUgBc1Hfj9BXfjrrkes",
  "key3": "3CYTqzSt6exTrDo4kpFvujqyYez3gprE7BcG5EfHzKpYMkeNZquyP98T8PT6wguwbQJ75TEJ6zyNnXEvxSjNxrpY",
  "key4": "4mcHBgifgwwBxYLS9nWKpRbFdMtBJvA7Ro52HcBvGvpLcRDY21D5QpWK4Qs2RKY6oSaWZnLha5n5NS6fysXyCpsm",
  "key5": "2oLT3Tn4wVTMcXi2885jHPHwPCoiLS2HvYV23UiKpSsCDsJQbVvttV2EADorJU8ETJiSSY1HXNipKC3rx8KEdhB8",
  "key6": "66PmekiyHDE4wkNCFUEhS4dgnyBMGK55aN8HBKLbjUTQUDRRNsfeAUqAooDxoA3UyghxCvcxzELiksKps8iP8QAs",
  "key7": "XdcqDPMkedKpoiV8JZ7MLNyN85WpuHWfrfdzDAgq8TnhfqDQPu93VohbbY7anRedRrKkFhDZs4zMHcBGAfGHd2D",
  "key8": "5N3xDwn6a373h3ADcQCCt5HgQio9eJKcbmYNe2oMa1xrSZ6wEyqYMQQuZBXzM7QU2np58jrie3Tb43azqHwERQtX",
  "key9": "3mW5ta6CKUib3pVhrembKuuGPefx7dZNEG8Nmqr51JmECnNo5YANhNXwHjuh8ZSb723nhrmEgBh1TJp1PAjeBjNR",
  "key10": "5BAbLyUtn1YRXwAKcat8WY1suYvn6o2CRjLJV8d94oyU1vsqdA3uRJ7yTLDUFBdUaNABpVuvLAUkQfbMBtWQ6MQp",
  "key11": "42diZ9fTsG21A4CBJpHyEt95idUj2SSAYd2heemVVA6tyLgtymFLKnEutvEFygMmewbYAXgLxKWZCZDDSBg8osca",
  "key12": "4KmV6y1GXaM9FJjDFLq94mnQkLigvGcGUeXjx4JcPh4mes7qjrAULhcDk85eHMPcyNa8yPM3HMn6QwMXFxiSJKS4",
  "key13": "5bttxTsX99b4Tvy8uwxG9S4gnobRV53RhPxBpC49PFj3t6svtrmobrpSCwsEz5kKeAfPTTUXKqQwrBEu11fcKcAS",
  "key14": "4DJcfYMWMrhHDf4mv6JzVeSgSH94MwmVqbrSHfgU6vKK9hXvn9LBLAoG77zMY9QrJp93U2J6zTsSUzzXpkS1icj5",
  "key15": "acqHYzRPAmjdajq2zHXD4nevJvT2zMZwMyhTjJkhSAavJBH3VuUbCAS5mmesjF2zwCjy6gWtUxwB7ixuqRUVUy3",
  "key16": "qn1x2qdNKXtiniPM5P9WYcsjijudGqqWW1vnAiNVXwkMfheCGScEVqPvtrGRAYzcBqfEfEPtyaJouDDN2RJTF6N",
  "key17": "65kD8WSMiC5RxyL5MPjwniz9g9QDj2rPSEGHNdYDafKxbYWTrhteA1dZwqJzRpyspWsuiwkCoWdyanD11srb2C1x",
  "key18": "5Wii3bPUpyJS4srq2F7p5mz8XTDWtx8XjkphbsG6YnPCaroSfL23XmkZK7sYpei9MBG1GdQ1pJpYGq163UohLcAu",
  "key19": "3gid7UpaJnVV967j5CUMtZHWmAtsdmWTKC1yKX8qJ2LgsETcWQT3F6kZokoBhAWvu1dFWkeSJame6buvPH5oN5iw",
  "key20": "5zf2anBWBbHCvcPBr4uyHRcCB9LEP7Exs8WFKDB6m7PMb59onMaYLEdSKuVVCQP3chaF3Qcy3UNYyujZ6LmQLg17",
  "key21": "58xChiAbg7YnRJH87ezYAiKGoMptPsV6ADNsGvAQ8PQpqFWrdi4MzqU8j9wwzAHLy4cX5SFXddoXzSL22CWRZBqu",
  "key22": "8kYV6Cj4jCQak7eaJ35wWuh2bt9igdZiF531Hh2HYT2NnbGPaJnmtmJC6E6yzryFxJaQG1LgesTeyN6Lkt7YxPn",
  "key23": "2TeGRu5hqw1CM1PNNcZVzD5PJ3n4iUxAouYAhcoo3fiQCd4aHtAuxNbK5dRiEXPc3JYVFTyKREvjdna12v5hqmKq",
  "key24": "29LfFZyUJzLSSnSwkLPi6cscgXqQT3wr2d8miTk92CY9vbF4S1dNheqdtL2fmqmk8uwi64fxwbdyQd1keGfRPSWj",
  "key25": "2DTRCuPRjNVxxDTLpBScC3k9oJspHuV58ioLMBNA8bxP8eb7rxkMAFVwHg35YW2vLLJQifKrapLg4hmovScNVYAz",
  "key26": "3y4pG7uLbCSafDwLL7n3qpbKxoLiYMdzCaPWbsQhqEHmFjja6WbkuY6YfwyAFYDWqkSzaVNJ6CPFHMFJGN4mPrMY",
  "key27": "2w69RHaDh6sdjMoUfEQKshaqzTKscQz2qiJejMc1NhnzVbyY7FQ72np1QLo9UxuWVrneUucYkTswdn2NEEUUYyix",
  "key28": "4Wkqjs79RmQ8evKSTDBX1qoCQgVaDDmj2Rv3bfmJP4MHM6ueggMuVKNKicxLJffUGzokDbMdDtfjH1ukUNb5HDS7",
  "key29": "2KJd8WNPg9UNRt5bGdVrC7qYFQhUR1YVG17EHeP8vBdEmuJE94cNdvRdqkb1FDJR9Kk9E5HBaW8NdpNdaWiakUHu",
  "key30": "2P9mo4djTJEzFzgqxE9ZGiKD3rMJuBrEKnFqPdMfi76sUgJhmgpkjsMg25SzRxsETNogYrkCNdSaAPuyzL82PGaM",
  "key31": "3HiR659QrJ62ewA6PFvba9oUcaSZRdgZFKT4JMkwKgcrp3ePnnpGwmVtad6jBxmpqDhtWqJg5HQTZqCwegN3Bs5g"
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
