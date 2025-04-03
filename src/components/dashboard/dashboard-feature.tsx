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
    "356WCiBszGp1BFfwejut6nCo5G3bmTWrRTGLMRkW3FjSTyxf14RLC7qPoHDahdwsY7qsbWPQK66BausDCqyw3ZyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mp2di335j6CGLEonbmyqBCFu9gozRDN7rBfN7JewNeS6wiRG91UBAJxxMXf2DfNs1D3iimwigzYt6BPrkU39cpq",
  "key1": "2myRRc7fEUZSdKPjU1oABriidAEzNRNiYLiEXNc677WdjJ8ZNuzvhEKT7Md9exdy7igZmJivdqyZFYurDu8UVh7q",
  "key2": "59XF1QSko2yq8YZCk7hoxeFb2Strvr47iF67ArNWVaeC5WM8rJ871orZtsd4kAWyqFMzzYAYtxZPR4uAFX8j1C2s",
  "key3": "5y6RP2qWore13q8eb5m1z9gABrgb5vqRiwWdJvWyAfPT1P8ML1KVNnSkEDccAePRVvMsZbntUJPWJG9HZUFEZHBy",
  "key4": "h2qvCpa1vZrBqu34bEXHtWQ1JdKCa8pFz17dTWEvbL1ewNpPjNB1qz1cr4x6s159ZRS9d2UZXv6WJPVZqPpSTRi",
  "key5": "2kow4rpPQQUkACrFhphdmhRnLHJHQ3pWGgYgvkZZD2ELVjmXKrQz7M2N2gQhPNs1L2JMMoFFy5rTinF9pUAMKpek",
  "key6": "23xnxRG3XGC4qjJBgt73AFFtLoiZC1NEGndGvfPmfvAR26BUSuGwsVYRugbnby1WQq1RwPMicSMEUr7hvcsKC863",
  "key7": "3e3GZhFVZ79zsKd3hCmA4atcPuPnXsUYPT6YVpU34pcTNjTucGg6YCu2pAiokXxqVHLSbT5NKbKbySXV3EBwQcHW",
  "key8": "oqQwhSnKtrEg3ciDBho9iszSpZfQvDyqcpzM7idsHwT6s9wNu1bBuLNsEaqE4m5NneGh1huWUr1hcbDnM5ETPsY",
  "key9": "5DoUh7sPwg9XiGFxQZExKxFi2NbUMLTrS7QsSA1rqn1jfZo38w5o86ioymKKY7VXxCYV47uM6LFNwdCxXub2vbRS",
  "key10": "2bPriEvjPJwjTDEiF7YeFXy2sh9de9XLWauaa5oYibKnw9Zwqt9asK4Ci2jZFJrEALMHk1C8SAk4qmphrZ4bnLUm",
  "key11": "4ym1y4bt1KughYD6Q7voYNgZ5jZqXCbbCsdJqbJZi8RQoy3L1GdsPBeFu2Cgr6pK6bEKgtF9e3dXJvHW6EXkPbMb",
  "key12": "2mdgakZJYEXzCtUgii2Gic9CqHBK1wFX2afTP2PrYq9PoAU9WVGut2qUYbW63fJDwsfibJdgPX4DvnqodjJ1Fmnr",
  "key13": "5eUtgxvspyd1JAFgGeF2JBMqy6jYVPsNo9SMXXN442BGUVZbBWVs6sksbDXCkref2eDKy79rTxNpv6w9mhyZkKFq",
  "key14": "213GVaWH9LwQjRfYKWuzGRysSobqh3XsV7xe5QNJXk8UuiAiwAb6oRNxQBhrkAMGXypcXo8Z7Zb94LXG8apaW3zo",
  "key15": "YUKNmDrB52MvhikuiUQ3yHxWjTjtpJfwU5htts97Yfi8MSn7KitWLBVPgYZbKcEQmr7t9Q8qt6cirMiLnqMu3Tj",
  "key16": "3QFJXU2Jjv5tsroeRNQzc7J3cLyzVioe13zZgbFo6CKYXF64yEJ4W54rFfALysH4PWbXJ3adXgJofXPpKGwkhG12",
  "key17": "CR99ZLHNGK8Te4q5C9qLGQAJgQDcF62889Y4MsE6q2ndzdooYF4vwzaYTTJjcm9yK6VfFfze7z1pEYhidC3BGyG",
  "key18": "4G8tvxnRQDMeKDmKdKZUCyphmubAYGKxpeCCM2dkLFPFDVHqCdM7YuwhrxZaiTigCKXmE9Q26BRk5UnwMQWDhVKz",
  "key19": "2Co3QdGdthQcTGf8pwz75JRvapZKbyXEeKhFbCMUDC81PmxZPdGVmz7moPCSfzyRxLD335viPv2sPvxERNTEYpfK",
  "key20": "5G1ZZRFuxgVRHtf3WEPxXuLUqp1E99YL41MQEZWqZ5xXybP6N2AjwZqBsoy1N5pVNcch46tHAqgMvDW58YN5BwJP",
  "key21": "4VrSSkZvB8jECDGZwsFAvFHEXTrhCd1S8mYkEMxXiWwWConehfqBaooyhkKfddVNifu7iPwFpsPssjPBE8FoHqCv",
  "key22": "3Verx6fdPx2bsRY1yL94bMqsPQivcsxTRP6EwBkeWJKzFAfV5KJs2UecPAhSAhS4djePUWLXPjzcF9DVqw4YCgzA",
  "key23": "Gu5ktAJGBaMfzhgjZr6tmJAXHHWmFqCssM58EYqMvdEoL8gKJaPrjpHf2RBXt68Nee69XKgJ84Bzt7AiFtqRMCu",
  "key24": "kb2sDmsxM3ME9af4aNjjG39DAmsvkSx83HcB6pPpg7cPFybhF7zh9XZTFzKvdZBoiBVXkqmKTw7KQqQQU42si6V",
  "key25": "4HhMqAD4RxxdWYmujeVrnQ5mdgSY6xVoeE7arTsL4KjDdMDH4CC3fu1bpQniY4CWeEN8gXdG6AxU9jHaNaVbMaDq",
  "key26": "3JoTetyFwh1cgu76VHu3Qd1UkXUzVZQaqy4XRamQcw3aFccvwdfiNjZsDFVwd9Ly3joteJZSPb6HQVnpxztsis2f",
  "key27": "3fv3VvTsmmHbh7xXvyYLUqUwLArCUKqnMPSG2aPYaxyYWk1sPKmrHZrYN75hMBXcudRwJfXhb1K1MKXbUw4crYEu",
  "key28": "5uGFyjjfaN2upDhXGphaa9aLVc5c5WP4wYWQTZ4XuByah3W1Pw8CV2TodxHBFgNsBKb2ggms9k7bAZPiSVmbbk8x",
  "key29": "dc4GjtCf9WCuLo6eAUPic2qPfRH9arBsbgDvM6m81GsQGzciDzsrK84JkVGBGrJrcHJAFb3VztfntV8ta4ojf55",
  "key30": "59cwYdNVrwQg3ioqwKnuwXXzrZezstJDrBNPEU9HtXQbXCWdBKW3ie4pPtsEZbbG3GH8YBmBzph2swCSDyNQg7kW",
  "key31": "3r2FLn7AoQsbjwwfRm8p648rHzBqQ2tpE723GA6QDMF3KPERSKkkM4fDCEto8AV1cUmhKYjP8y5Puw6T41DJcEmD",
  "key32": "2fF7RSjbmp72ZRJcnrKEXQLnK9BUEDazsib9mzeWqtmQtC8bsLQFcBTEQS4RBjTPsDHCzsvw6dfGfrmpLWAWc57r",
  "key33": "tpdMuU6UZvm5PhiAWuGfntgs39713ryfw96m5KvowBQfJ79kpCX8cZAk8u4ERG6EPv65tGB3zZSNB5tMy3pqb7L",
  "key34": "PCmnauj7j3Nta8eJAfzg2P9T4C2FGYBXR33VExPgU3ttRvXC2hEZjRC3F5ohRYa5UojPCG9bVriHbygE2YZFWEw",
  "key35": "4kKyyPezjyh2fDugEgXM5Rd55o9vPa9yUaMjoM6V8qQvoE9e6p46NhFLRp4if2Y6D6xzyQSEU7wWEPPsqNte5Ew",
  "key36": "2LVqRTsdJceNTYgHmz2mro2xw3ZCXuUCSEi2pyvyj3Nm887hfpP3MZDWsGWkmzhCvEDs3vgurM8WPWqBZPo1yFXp",
  "key37": "3H1aWTUB2Fo2dvWaaG7etCWpLSzdUtR1eKRqdqJUukdqBg7nyG4nzv7zCdUUNw467P7sxd4xRQeuz1pm5eGLhYYr",
  "key38": "3VqKLB4z3GdtcP41Hhwvf92SXPVVV3JQc4BCeyt26v3M14xWmCacZYGR1DTwXNwNk6HZ6DfA8zuR83fYm1uq86yM",
  "key39": "5pdEsSoeGJb36aySuwFtTEqyJCXwVuGhZHXsNyXN6e8eiBTrGFZEFGFrkY5y2sr1jmNL5zheHa76Lvdm9ozWP8hA",
  "key40": "GyCGc7Jq4rXhNUbnftQjddfQ5da3GuncCNbut8wzNVKPsD5paWXnkaHbe9E3q2tbhhYV6yB68VMrdGWKyXNiXXf",
  "key41": "3g9djzSNN19sK3jLTLK9yGWmGAzEGjW63QSgwWRKXed1ZRRzLmvHtuwftigK85GjwRzfVBbuGiFHVnDDN97DzDco",
  "key42": "5hvGWR1cn2S7T8RcLikqDwiCyjEqW6DmnirbqFM7faR9n6mJ81XGX3h3vx2952BK5im9rAynYMuQDMif43a7n7NW"
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
