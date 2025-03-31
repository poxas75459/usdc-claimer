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
    "5KxRFNmAF4ekwprvvgTMpodP3FgL2oUJLCF7gCAQipeEN9fvcgezNYTpWTQKZBMdUfRNoJoVKaDgKTMgYachg7c9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6PPtNLkVWjnfHdxXqDydiHNoEqodwSAP1xWgDr3ip51D6rUxYrg1piE8yysKzDJ89Hj41sVG5DxRhJ6M7PKT1wP",
  "key1": "62etsiKCFBiiWrmFCpxr9bTyoeTAMCDtgZ2416kqVa7V4APDmMJnppFPjX6SRh1Vm7FdLKuJMHW2snvS8fn4w6n4",
  "key2": "39H6Ff3BGdfz9qLZ2rPBdxBkLiGDnjA6YZgJCgH2Buo2c2tqRRUty3xWwYjd24fFTaKRvECZz9b9hRfHcPuSwxsn",
  "key3": "2TqrVUeiPrKwB2yWboNoweJJ9sbCApEWBU74oP6RiJHQn1VE2sZNCRrkoG85b2QNXNcrjGGkP1C1EoVhQJjEy9wu",
  "key4": "5z6EcXrxAgiTykSbyBbSYvDHmkGYFxCwXoaDs6VRm463wDj4NmDjmE99JVW45AKGr62wKQRNXwEHsJZgVYKpC3Xw",
  "key5": "suRnH9soGFEYCAXB1MC6yxSpDYQndY6f41z1rcrBenKifFW3fCfuTFBSnYJSNhqBJWeabgS7qD6yUkHQfhHEuwK",
  "key6": "3xni7ewefS9tMkKLeJnbbCSrscEVDJpXZ8GzcfdGyEfiNb7CNQNchwppf9NZjhixV23SqVfg8SWCfuAgXvBkJEaj",
  "key7": "2rqwjNzCMiEwswVhh4V5MtY7tRKaTsH3EA7ajYHMctVxKE7i31r7uQj5eSwfwhpEUqPqGXmcxjVuP9psqQhEpe6n",
  "key8": "tuhuMSgYVmw84QMdXgJxHqCRKNmZ4iDNri4cHqdf33atx5ZyyYfY8nNedxH51uqmqne7vEdy61qzc79araVRcJB",
  "key9": "3PNKSECai4fGeFa25a4MkzDeKYziiyBEwG6ZoPzXzTsbUsB1fsewH1wzVC36QPUc3fWrgkUXYBJzJ7DYny223Vpj",
  "key10": "cFcNEzLQCQsdAjNwX85v2FULG1LjsM3qweW3PYtq2HqQim3xVuyAaXwNFYkNXu8rprpoSfswoiydQb7y8jACm6w",
  "key11": "v9FTBAZEv4kmDsGK2iY4tXBm3A3rXW1PnhMyf1Qu2p82uh9rcZABryb879saLknK9xFPp8zoSo8WxR7kMwKDNqY",
  "key12": "4g2EbVNKQv1pr4UeFRiH173FtgXXatianW4GMbQaTZz4TZE3e8wYoWfnQsf5aWYnZgZshHRb1w3TUAKDe3oefq5z",
  "key13": "JH4zDVpHjUuAM9Qu2XFRNRdT7yynNZNrRysLB28k8LvKRNMXVxKjUo4YwvJum7bFhZLfEvhQ2qMdFLEfqwYVzdm",
  "key14": "2d2qjzLt2wJUcnemB7jqMZULU8X9rpAMqkHeQVZ8QCV7mAJZBJ5KuKgxBZ3Nhj4kN2pQqe8EqRkerwTQtzco67Zx",
  "key15": "owqkgQR7odfHwshauixpNx1VcSVcBfE2Li4jtd2nwcQ3kLWDqGGyUk8Zyy35VpeYUbuQmXNd8b9s9vA5L67yoMs",
  "key16": "5PsKrNtzNxJEsqmoSrNYgfkgY3dD7sukeQoqsV8fY59YqCM4iwUFu7r7tyDb3XNcHcrG2RZySLHzwztePhFQMGFT",
  "key17": "SAYuxv5u7ureBnYEuBeuJcg7kRQgP5iZA7pFKxCQwQcjm4P8zkndqBWvKr28jax5k2PSHFgqDL8ESejQy2r5dUS",
  "key18": "5P6uJWniEfaWg9rw4ezw19us1EbDq49hBTTow9w3bET763x3KnxEhoWgn7ndZRkfn3kPzpBgKATYenMm5XriESQ3",
  "key19": "3FouzqQd9JA1eqDZ5HSqU3isSERMmGbaD3Td1YScM94ZUMUEXV5fP24M7M8wEte6jArpCZmKAyEJAq6CctMwzwyj",
  "key20": "FCnKV53PUPwnejrd9xqNjQc7hJxA9ANpnXQsbbuXhikNKkrXELkBeahnGFjWb7GECJRSBkohtdgMatZErLCwMgn",
  "key21": "2XAB86SepT19t845Cea2vkcP3u8t8QRTwSto6Yi8bQEotBYD4UhmzMQqDpr2i68Tj2EYZ3En2BhBZCyJxZsvvCz8",
  "key22": "3WsuYaWh9QCkVHKHj1VnVqBwnasgtYb1NBSnyTtu75yaKf7ekUngt2NiieEcrBC6TH3sgLpGgqpewPJDadhVD3bu",
  "key23": "hUXtNwRGg2JTEWuQPQ94eejjCVLbfxfToS9ZjBjkiERFBks5WAHJYejxiUEbZy59whip9snM3guofQiicnGBgqt",
  "key24": "3Q1rEiHC31wCf4QLbE38iq6LmUMm4Hftmx83SKhtqajpozx5fq7rhtxJ3zgWRXAZsfKjEarBhpm4pkbePPYGNdGi",
  "key25": "4hjn9bswsFAoNJb5j3mQW4G82Eb1DJxGiKeoNsop955pMMDhkQYSA7WQShnEGTmDfdLB8hnTfkWQ6jeYiQET1ZhH",
  "key26": "5ppr3J9P8PdVgnFbfcox4JW1cH3oVhaJcqUQkGZWzNWjRP8KA18o25UxYzvKZhMJwf36hYB3XRELkuhPMuYrnKvE",
  "key27": "2Ptw3WfpLksxWGvHD6uXamr4cvgyUie8MpBnzdvuTAoeto3JJrasKiXKTMGjUuso3mjqy7pAcHSdn7yJr9dkg7Yw",
  "key28": "3ctq7gTrdCoHt8rfaJ9HS4FmK8fyTY6dpnd4ft8RAdJp4V8wYD16jdD6ziuMoj1cMN12jNHKhsX8MVY7w61CSzGu",
  "key29": "3i46jncZ4ht9ez5PArkSWTeWuTu8z7qSRK87DG3DTqAdqsqCGnnPWpzMWV6ExSuDJEzYo84ZRrwW6M9ziYu74nRi",
  "key30": "3q2WHhjqKdweGphRY9hpxJHcB4XMnRPjWrHYxaXXBfUAruosuASEw8KTSLRn8GdMSavdPWXAYiyXBTr1Hs13hg5E",
  "key31": "3ey29cgeCzkkLviZ1ed5hVw7Z5StCTHjS7CAPBfcqNRaKgegnaeQNXh3zkzXcnEMy6KcnNbrU6z2qR66DCmJCY65",
  "key32": "29Qb8z5Qash8DM4bo5KSf3WMWrP7mjLrAgCsXhyr7rNN4aBU4mfFdWDdF7FgcKE8GHUQbyRc3vzya5gLMaQd4YVX",
  "key33": "5La179nU1fP4bCRCTd47fNkkcbsexrdP2E4wr1yhJDrjknJAh8LvYPJX5fDvKokELtyAkkRtVpNZmwRu4ER1Fs8K",
  "key34": "4fchBSs6vzpXaDMfVrGt8tSihsrCvXXXKnYFvrbjgoGdV6xNFdouwv6nXHp2JtrLj1MWcWkj1qxBRshiT9AXaVt5",
  "key35": "5zq9AfKGYg3SPKRDQWuZ727RXEGLKaR9a3UQdRUuRLnefaUa6WxGERZCiRybfDi2Y9ZokGCzpFKP5U79yRKczXhA"
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
