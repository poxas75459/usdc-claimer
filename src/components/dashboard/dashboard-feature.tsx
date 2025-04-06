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
    "49ER3jcHUFZb8JzpyiTQyGrMgNtVA4RrAsweFTLM3GLQPxBXfVgz3CnMZb1Jh37LJhDz91ehTW5Qo8fzh61HStwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z4WBVGqRVrkKLMY9kMLjB97JmiVKpfwygai1SsVskyp6mGDSFw1aJir9UvUQ4bh7aaDzEjLW9cY7uBk5hH1dTv5",
  "key1": "X5spfhKSB6tzncS3s1yNS5h2Vrwv7uCy2PfPiJ2FonFfY2AXdg8qV3bGmUyCU27eUtP8AQF7FLj5HXT3iA2bQcj",
  "key2": "5h8LUEo337RCF5BW5JZeMQQmokkMpgP9HAsSf6tmk7J4iPBK4dRDttwaLguH64JFirfogv2LpERmWWFdYSioakET",
  "key3": "3A9dzzJFHaQuHujfNn5KigWiVkV9LXxMKLrP1KiNLxJdReAoTUMccksmvc34t61nWhopoz2LMzYCiwXXZ1fFohes",
  "key4": "4VFUH9KYMXmbY9WbUViY95hgNL8q167xoJWt18PCgeg7byRmbT6YDicQqniwLDWs2XUQdzjAvkzmaJ6jGAq59U3y",
  "key5": "4imNGqnY36tpejBmP38qQiPPfuHXdWpAbfZ88ezYYBHRQdivvvMz3U3kJYcWdkKyxhh6ZMcz1iMzDT7WsT7eVAY",
  "key6": "2eyrC1tpMMbz8BbPMoR8GV2FUYbTECJd1BrWEPGpgL5AZs2fRbpz68TDJrvWXYgmT1W43rjXHzcWS55z4xiG1Kku",
  "key7": "Vz2NkiraGvx7K9gdvjkhHRz6UrPFknr1uqpm661JmCuDMEa5ordryhoWJQJW8Kotame6YEvoNu25RShx97Zi2aR",
  "key8": "2azEjnYfim7GA749hSD1y1qB3uE2a89H4pnRFnZc4btwedth3R795Lw99XvnGsYdvvrGh3zYfw9obUGkfbSsFL2c",
  "key9": "5hp9FJ5d7NjcWGYUeb5VYkBMTXu7akXc2VkMvdzNnRBgG68ntpY3F2X48D9nwhaCb58ubDwDkMuHBU1PPRdfZvhh",
  "key10": "4zkjAHgWke3FAXrRvx2txds6mr7AwAzURvXGCsDVCVcVv3v2AC8gNJ3yg4yWP3FexqWWCfEbNLMd7Rne6jb66Uxg",
  "key11": "5fS3iXDSTnZVZU76o2ijeNBszs5EdTjghoPifSxoqEwN2LanB92e6TfyJNWHgQjc4nTgjhi871QSBVneC6bXpDyh",
  "key12": "5RzCHkqFc2EdCRJu7qzeaMdJzShL77KShkMHME7ZGMPTT6cMBVH31UJcMgiP3FWLDcxtjMZpgRW32ggWYGvEa3D9",
  "key13": "vErrbpiGegWzJzWy4R91YbVMC3tSkgSipCyXjmYjrd9VWVFapXiuvMFgtQVEn6zL3CfzFFe7naiDm1n82rHXBNU",
  "key14": "2bYj8dcWNswGZeSZKauRSUQPyuhYMyS4JPQaAeoCb8yFCBpY8fefyY4t4pJtPJUzvGGNsK85Ce8drqyuHTLKfsRo",
  "key15": "5sFosQp4FLxjLjkQk9L5Wngz5ebka1fwW35j48Te26dR1Hu4p135Kcaanw62fNsmQCXB9mT5GZtYhLNav9cf4Rrb",
  "key16": "63VAcNHdG8AQwB3o2jg1Z96Bz4FCos2fCd55QPmop6hEKkD9nH4HPERwngz7prAcXCo8rYiewXwpEMBZbVLEEkNA",
  "key17": "5hZ1R4gFv4LKiK6SwC6C78gBpketreZWpcxafUEE6oepgyYr1g8zJRUcvwc5Q6fYA7QDfkeUnaq5gQUtJd5wK2r4",
  "key18": "4ehRQYx3JJuRW1RE4qk24NXNoCs3dtPtk1XsuT4oCJyRWLezc8TpzsyiCJ6tQ1ZEYRudeuN5BA3Ejhzp43e3p2TT",
  "key19": "2S7A6YeFQYewFonYUH6mhtrPUB3sGXjiCsTssAgPfy1oito1w4PVyAvZYgXxsiViexp3bWahxu37FNny8vZZGEU3",
  "key20": "4hE96ZmDetH57P1g1cr5yKuNzfv6Pq17JS2ZAk4bm6XrMDGaGNiESnnz9tuxsdZXfArV3dHtdhvWQWi5Cv9jJMhm",
  "key21": "5Rnve3u1waNBYSqkxE7rwQJQesAVykCKEtkmo8fHh7Cqt96ucc5g5n9n349MT5VpPvJ5tweiyfgP2JJjDa9XzMwU",
  "key22": "4zhKNHitNSstRMThqoexfx8cyTibGNwkb2WYeABo84sh9Egm5XsfDKb44kX33oKus3zvJxyGnDaLNkjcZDjj8Adi",
  "key23": "3mCQBoeUtTG3jWX4VWeneGDroQCQTmdAsRHdg42Uo71bJNmsug6TqHQCTfoE4sNsuxeS4s1dgTRBpirh1M4GB7Wn",
  "key24": "2PwtyxUhvSF2XPxc9Gk1NAAFHUNVV3SYBo3BeskGB3YBTVduexKoy35JhdA9uZ2DrETfg6WZDua5nbRimnMXQKGZ",
  "key25": "2gZ4qSQcL6BDQsedCdNwkM3S7za5FETaftmy4MJXi6vk28KRkEZRCZ1yfCqQk4u3bFkYsPdFWR9rvk3QnJ7yWrSC",
  "key26": "2kbkqeS8JY6EmGAdiqGa8m6yqLdbe4og7ctKKMq2vKYw4q7Fz596nxgPHSWFP3mzMMzQBn8oWa9CXJz7q55R3c3e",
  "key27": "3aMmf5BBK2TSgTLmYjbrZBXorVfovSuvyoW3sUNS1Z6VuXu5Z3PRMZWnWqzFTCmsewvJhD5cSYrAEaPQF5zMLLTL",
  "key28": "53695cTmLd7mPrFv59pjiqePYqEGrEcYg66yE2VG91qqMdLsM59A8fEFtk6pKtapTHDuaBfKS2GKCg4vXfATj7YB",
  "key29": "5ZkpkYwVhJd4M1XthhKXCrPpyoLeKsCXzgz7dv5BwH21g3d5JAKkqqecuv5gZoVT6ggRB9jt7ZBcZVcy5dvyyZqn",
  "key30": "5cf71DXFghyPGB2a1WXjfk97dWooFVA4UwxJRHB95JGeNPuxbbcHcV5zNGQX5HqH1MWUhWnxqqc7Kyk6xouWEvD8",
  "key31": "Q2Q2C2uPDXGzHdn13obgmfXnPsYBG8fbN6JL8KrLgMcuivsHkctAYjgY5ssvNRB7XVtBMfGZm8TtHvhQG2NS9c5",
  "key32": "5BNsYZ5TRFhd1ocukbtvNPxP3Mnpts3DPjiwpJAUZEaxfsPmXCJRiqtWVRWTyk8K16EjJfTFukWWma7EtBZxyiEe",
  "key33": "3XwNqkxTayyfuL4yMrJXwNMrnpPFufti9yZSb3Hx53DBoPAtkqaAFuHhPC8ugkFJkhmy9arWZQd64PgoJHg3nPEG",
  "key34": "4g19ugp9bBp5WumPPXZTMUbMQWyAVyym6FDofDooos2MJdRqGJWZrngFjpdGLYxAfKHZ6J5i4Bn6UVgyucBUJ2a7",
  "key35": "5aoHht3KQjor4a4jA46HQ3vPhyJRGxJTfdrTb9BuMFyhiFm6h1omV5ynKStE3jwbbiHsLBWTX9UE3gmTWoQiLSLj",
  "key36": "2id3neZ8MZ4P1mnZ4r883QN4HzqzC4RN2KnGpMQyDorpMxcqB128bcfq413pU3BMeo4UunzEd1rffj72LpHQJVQb",
  "key37": "4jcV3ihxWt1CuaS6pJbYdM2ZRT11XM9oA58rKBH1a5yUirw35PhqaoYLrwn5xLTRAAr3SfMkq2YmC1f74MX52m4U",
  "key38": "3L327KPTg7rQnUE6yG9gNwEvoStM8isTUtcsLPdhtzSMr9xJBx2DDzpSmLPQjLLUmyzCN7iMdUvPJUzyVUpYxn4s",
  "key39": "LeiwQbFd4zYehwmQ31E5CcfcNV52WqMPnC6pnYdoKktKQJTsAuL6WwtMioMBMH8QKBeTpudQ3osDKb1S5biw9HN",
  "key40": "66TwY1cb9B6JsJrVuCnwxdwvTDYP8NnyTB5P6gcfsTEuwrMfkkdVRye7DjypHR4TLioDfiRNfo5zb4aou2jeiLSu",
  "key41": "oYPp1qVJZdqRVWz7W7mDBSSeLiYMntruvJid77w94V1ABdNaC8yMBQyPDY1YgVir2MnLB9U84YyB6ScmhuV3GZk",
  "key42": "2hCWqwJS96RjDfQro2fNXakgzXNScKYifsdBkE4JY54XgEnktDCu7hWEa4i1gQoDe46e81cuR9E7tNPBp1NeRtBe",
  "key43": "2mMe6hKVjWsbNVkUxm9jsdnfUKmzwsJmvQMoMZwMgPnvgDSyGKJvJNMft3F9jRjM4pbz4RDDgLkuxjBkh6vHXezT"
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
