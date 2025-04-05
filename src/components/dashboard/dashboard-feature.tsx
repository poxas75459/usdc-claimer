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
    "4voedxfPzxCo8PnGouZN7sL9iSouYPF3raD66FtYfxttN9rC1TuKUwNaU3B7eCNLk8B9f8Z8c7P9Zg4amJdj2dAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qhMDP1X7NvDHQEEHgVA7BdPdX2LoY8huD7V8aWkoQay26DjKqrqpN5giysGojo9SMwNkv5CVaRaahQksuRLGCXL",
  "key1": "5kWTT84jSEy3CdttMaHT1b5J7reYuvkn2Sfbfiqu6F8izwSLKkPSgtDtPUpkXnGQeXwwMrabezjz4MpbDrb4bNso",
  "key2": "5fbRv5Crk3eZpAExZhBCHkYyJucnyxc7QxrmcAoxa5M7DvrPqmFGqPg26xmrW3k5CffELqwqyZJcnFDjdRQ1ByDX",
  "key3": "5mMEYPSRorKfA2mc2pHoxvafgKVFhDYF1w9NULyX3hPkK8g2xEmJPYPy8ynJrGSzPszMDHFzoaty2UuPrYrCo8yD",
  "key4": "Dw5hcXHfSHAuroMbQe5SmQSPNUuDavVVedAveucb7yborBpURK1u4wu5jLrAxJ5ejyqQ8VFRAgKob2FyfqGGC37",
  "key5": "2RhvDKZyqodepzakDLVa4JhV9u4zcpF3LmCqd6vXZZFSeBDen5t5hJAU2pFK2iFuDdnpQiHb8x9Qi2cdkqSXJaQQ",
  "key6": "nTHLTD845Vp1zPHqCHj3HVDexgdAJaEMcApnuA7ybTgxh8KmyVVJMHt78Z7WQCP5uvEKxcw14dJAMNAtp89TTEx",
  "key7": "24uGUiRSkgRfH2TVidR32yf4Z6w8LTGofw41dNE9ncH3FZZ8BD4DsdiSzvHwkrp8B99w6nKLodKNKzzuL6YyvUnR",
  "key8": "5YV6p2rPKrnX6N5BViJSZjRsBLT2LPxkfD5vVsNxjGVmx59oWdsnrHhbEYbW1pHYQYBj2YW33qvuUKViMvxVzn91",
  "key9": "3ZEAHLN3KEsL526HRmAV7JbfCaM6K38zCUMY54SRASJskgdjGZY5LRbmsu1bEBiyJ7CVZVGYTcujaXZXMtnTQp3F",
  "key10": "2zMM9BXhdJt4kffzbfoBcm7QUd4X2CHiUarMqoZkNF4PMBhePogV6WHwFe9DMXX8dKFd2axGrvRvUVCUhMkJUR5i",
  "key11": "2vNKQamK4MdSNMEPzet4S1kem58DSAB3Cou96kiptFm8BA5EAyaeWtedw6kJZoib743UXo7sB7pvDZh4MVzonKN7",
  "key12": "52XNkJh9pJjUYSLFSGgiPtSx5SJfgQrekKm7vNRjPM9HhTypMxUdT6kUqAoSvqkvzdV4XNi7epMWQa4kkJ94ck9B",
  "key13": "3QLYkQkxtsx818W7eCF51r4YA96k1xw6dYdhwYE4KWFaskU7VD6PW47617WdzEyTVR3v3Mfyk5tsdLL7SEf1ydPf",
  "key14": "LkWetyRVdofntKsNBYUiZQBttuf1dcRHRCWiqZ5efxV4PthKUYxn1hBHk5hufayc9EgHtSVVjJsQmykNsmPoBMt",
  "key15": "3sYzPcWNyeYn2T2z5bTSkRPhAo1Hu5QfNAWss4gbbdD79e6wLUyfksgvoCWqWnQK8EzhnhHZyjUaL5JNXnxErqGw",
  "key16": "3XBCAkFpZwZpU2W2pD4xWyrYWUk9W8VF332LTWAajrAG1oCBh5BgaSiznTHYrQuKK86b3Y1aW3QZqjTZ6d62jUsj",
  "key17": "2gsLXCfLf3cdiehZXBNtzL4fUyAjtmnMEGoKuh4Cs9Vq4AdYf3RFwKTpHqkHeYHsLmFwcxgDkw119fdrt6edU9cU",
  "key18": "4W6KJxTVHQ1khX3Tr4gSHsmGH8suBjr8yjiKuFCqyzPoXpw1EgbYzmfm5ibV4fZZ7aMEgKimjbTZ22qZBKZ2xnPQ",
  "key19": "4YJb5otpb478qtRyeZx3JXxJTb6MbqnYSc22RHZLHEzJWfxaC4wTwSCCZtMtZi6eHQR3qyTUDiPBTQ6r4kpg8fuZ",
  "key20": "3Gmp17vYgHktRoRBjNpUY9kW9dsTTZc5QwQTDpPPKFakjjgjGctwpJz3WHKMSq37TEaDZBKVsmDHy2mHy7Uns4Zf",
  "key21": "465PBiqVqeuBoXFGLxpPFAoHrZdkAhiU4dpHhvfEkPWsigqdff4As7divi451AQ26xAip49Dyz3F54PxY9o2j3P2",
  "key22": "2gw73HCPC3J3h7cMVc8FzNJAxDZYCT6TwdRcHpYHeBSUrytyu56VRMGr5hCVQfvRGorn1HuQZzTHGG2UgKEPX1zL",
  "key23": "zWSXKYxc4beuNvaQcHhm7q4Mi1o1HgY1xnYKSne2jnDFdvhvn8idUmLPYRV6rFrhg5RNZDM1Z8KMn3LgCY3WyBG",
  "key24": "d6eRad534Ja3s9nHHSVAr755cv9zDphUFS7EQ8hX29pApzuzqZVyDnuDpXNtevz9sXD74LREVrAn9XDxr28UqCf",
  "key25": "NnbuDhyWqmpzQSex3Ct4qTzsb1HmVg6MtiXP1DE57QNqd1cN414ao16Tb2Qqa41cPA3w1uMvEVv19SpUc1r972X",
  "key26": "jg772j3WtswBdME8DP8Mv5k3JSkLAnKQYUGJj9FgJnsypBfJ6SDt62up7aC66h4HJzdAYgVbD9UE8e3c4Cn2HTj",
  "key27": "4ByByjEsFFuusA6MTxNrnEqkJXzXYBVkzEChThoZRFmaGHLbd6st5VjLizjeZJq8JjBU8c5VQhd6aZ9YhBvB86ko",
  "key28": "GrvLmW851aWZjKq8jYbyJ9rSz72sEUcfWHLCLVPMbJPcPUzc1MKE2VDPZmKEgZ3nkg3SanbKZNcYQnXV6BmBGco",
  "key29": "2aNUNxWepoBhhamb91j9gVAyW126aCick2DKBVByYuJHcN9BmswcguLLr3vQDkU7Bw8YtvPm7rjb9zu95o86YeHZ",
  "key30": "5Cq9MFJeuBehY7EZDfLJE5yGweBmVadfQqg5XV7SaX542Q7GqagczscfzEv4yFCXhM3YoXkorYwuhcGEEcf1jM1j",
  "key31": "63Mfi3KeJfpkb81ci2UmsSMzLXovQWH3gvnaB426Dvq3JCCsYPjEd8sBXUK2E9nEDYGnsiDNBmXtxuqV1GYJ7qwk",
  "key32": "363Umxoo4MWo4jsxGduzvNTVomv4MANMNgzCCyoBSiD69km5yDKzLQfV6Kdfa2a2VFieKyWDgxbTHC8wWtuLheMc",
  "key33": "5mp6c1sqbSGgKVWL57wEgqfzLpXohAb8MKJRFYdc4jnEJ4MFiwFDq8EaXzyrzuFLApbXA1hCqXcNgZJENovmhoAV",
  "key34": "UnEEgPSuGxxEgBp7sSA9jyz71mNLYaUuLemLLMEcQe69DBLrMtXEjGUF66rsY12Bdr4kUZD8K1M69jJfCi4NBHB",
  "key35": "4wTFPNwqvH6zNeqMGBqStKa6LcXMzKcThE2LXRGbAnvQ53fj131E9UrT8nUfkktrjjeiTjKEYePCbz2F4QmPZZHT",
  "key36": "3YdCUpmAxxtUZU2nzj7Fcz6wwv4KveLkruw2qDWPPFLfLwAMN5tf2PwanDVJ9jA6gVHzWBNXofTfrWoUTyHssqpM",
  "key37": "3NrvXtgpJx9qvwrrueUGyBZXafDeM3uJTH9gmx4JHu7qWPTu33DQpdFUCZ9JZG5J19ZKjfGw5YyEdDdjsdETfaXZ",
  "key38": "5PNMfgRF7EvEFzL5b9rr3K5Tkikd9wdgBbt6eymsgLZA3wfJfM1aFxQb4t8Zfr7VzuZFBeaVRB8ZVCvjpe98JSTw",
  "key39": "5Q88xEHoadd1sJ9uEm8xbh6SuSZ9fpx3mQ14WoM7yAWwGuK9NkSXSbxGcJx6PgyRnCwcCg7pr9GN9HvCLSnWyNzM",
  "key40": "3YD75FotFA9osX4gHAGNVckjNG1wJveqXo57jumSboUV52LJBorw3T4r7V7Tw41Y94QTCdpNSzhqmrCw9DSQP5Qc",
  "key41": "62c1zhX5x66eL6dEjBFXDSX9kg4qJFHNVVZaN7ebDNfnB3vqJFLhc6vwwe2k3ZpFK2xpWSFDoFhL2QmjH3DxEJzR",
  "key42": "4Jr6cwqrY46Syc41QjiWt66Zo8xwgCkdgNCd9ywBMGosFDeHjF1Xenc4oitHVYUkcq4Qda7VZy8zyC6gGquJus8"
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
