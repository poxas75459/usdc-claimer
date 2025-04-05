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
    "4puDN5pA3GnFeazYjegeVDzcJhDvNyBtchuGTgZAVna4xH5UimABMDhjGZhtQPHcT3SR2iyjDYQcM76iycjGWrKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBRrNYk5Ve9UNeJhYnhvcKfhgXKAgv9iVh3FrahPK9CwKe6Hp7GMmjgE5LrBVCqtkcYGuJ98j1NXfnELQo879aU",
  "key1": "4HqpqWY738nqWeLeB3hYUjmfPUL26i74Lh7YFgYsLc7sKnQ1W9i449rjNTnfQvtDvJJmGbgu8AxKrwjJVfs2bnTa",
  "key2": "2mf8MmkJkYAbqpLRGFvd3pd3ThtZphftxfvwkpMFtiFTUMhDdGrz4KCvWNZYmzipWRiiH6kDk6MRkBPVqHN1ztzK",
  "key3": "nAiRicMq9VCtKPJmNt2tBCHFzfFxDrdBQTpMokdxFkZoavHWk5JW7zroyFcCwwUfX5nRHdUqtEa6mmwDZcvteYq",
  "key4": "3F3pJHLYD3izJfxpfvcqgm6RnnFNwo1ZFkD5fRpDmxYWWyYL2dnWAAJEwS5XiUJRUuWQFY9GUWc8PqKMSHAq9jR3",
  "key5": "2K2UB7LNT1cT3GhvnqyeiPKaxeSKjfHKzKKQnov4vY3E2Yw19ZUCJjUU2VZPvB5XHyhxr61qvz8xsG55wFPZck5i",
  "key6": "3cuGkXJKHjLqJyVDWcJtAvhKGN4aEVxnjDkcftjrfeKCJ82gvcjfs9Fq7XkH67uY7tf3ZwjWNbFwSVGaWoccw71Q",
  "key7": "3uyapA9LcwxXJEosmHm8HFNyfQq876xFG8U5uhNAdUzykHdHJiFkKwbTt9H3G6DZ89kfBvTPVFPmm8viqus2VDUq",
  "key8": "5pmmgncqEPtSuWEwCFeVAsPmcTZyShMKd7xFNXAhbB4CyG2mwV264DaUFPgzKYTggxnXmDX52xKCNZLmM16TBbK7",
  "key9": "5yt3xdvtWCr66F7s491mdBqkiHEiWhKucTdmkaSDZ86sJB5AH4Zjm5etRan7nrTuk2QRxh7nJHod1qzTLYgwvuLz",
  "key10": "2sanfMRqcEoS9bq3pwMsYnsNFkcDV5WMyXNGWB12dXqYSCBi1omaWLbp2UkL76E7nE4wGaabXeb1NSNoRRHSmS3G",
  "key11": "x5mrphJEztQ7bjU318PAn7fQEjvaYQ1qfWnxWTsFzPExCYrJj98w7pqbcb6seeztHwFQzUveHPa7BcnYrw2wPjV",
  "key12": "56QkB5CdxXX4xgmtNG4j3RqA3CXwQMssymomkk5VekiHdCH8ikeQSSVtGUe6npFrx7jM1jCw2qpNVexFfm6vEbJY",
  "key13": "2Uh23yUNdWBQ3nK6gqZeWmAh3MWcf11s6q4QCn1oAgTzg2EbLqhQAU1jSNuzViTHtSWuZ3mWZ237uv94uvxkqUnv",
  "key14": "4vnQf4E9Nj1R9aarfqKAnvZrZaQrwh6TtsniJ3G4S3ndPBBgamtoTHigJukv2aEqCX9pzxDMXiVZGH8qR6NwR4x9",
  "key15": "4KnYpzWyhtRze9pPhYpKWkkX1MZn1ByQixsqj9AH2j9F4oGM4LZmkHy6uSyhYHmd8J1qfi93rs8JiPdwm3T68bfx",
  "key16": "hLCyxh4Lyh28jXAw4ACByA8GfxahjKxrQjss5qRbLP4X9o5uvS73yJ5YcPVc2YyhWNPdad7JmRVaf8jdSVbvZn4",
  "key17": "3JoeGQKpFiLTCNMBLAJwVvgvXaGo2nGzH7YALrdJqaFWe39bG25J2GRLfpV6waxTmpAFKoZTQm5NJqcfREuHDjvc",
  "key18": "2FhDavepU57kLPCk3fUm6USfRR31pF379LPqcTzJgN1xjiD4F9QcLJ5UCFFQPJ9kgeAv31iv26bq67AJgKdBerz4",
  "key19": "2yWE6HuD5EXpXxR9K9gUsbEoxXBQfnFUSYjdq74LFHmMM6j28gk9UJZQKRuhXVVN9SGjTuztWjzBkcJNCiGWnrsP",
  "key20": "4WvpPwRmA73BcxVi45UWaH7mXYAZxouCRuBV1M8fww9M9AJmj2rjk56DsbaP9wgxjBLxCZRzqoK27N73fijF2pqL",
  "key21": "d7YAXCpmLU6W4GVtUYNzP3PwhvAhBB57do3yZv7yjKQXrAMAWf4CH2NHmUCdpChgMQjFYZ9oNnct73Z1JZDzswQ",
  "key22": "FuyYZyVagbUSbYUfQRY3RY3YP37sqnBXNvoR55SfaF8WTUZikMJzfrS9piTZNRKdH6YT3AvwMtb659qaBfsY72S",
  "key23": "3eJcF2EGcxt39ckyuRnoYQJzaL3vTa1QdCAu6Et6UPFAVFJgCXpPxPMswZ4gNhCN267a93DV6mooCJZnYuypNoas",
  "key24": "38GjdHX9BVJKNFXynac5s4GVfMiXfgFo1ouYM6bFgceTefYGEramPHfkvsL5HnUpwSPDnXVJpdeToc9PkaJgVwpy",
  "key25": "2V1xngLeK1ZHfBxsgpobgrwDqTecZtDpAnR9GGgZ94SaMszRRqsP7mKMARi4VcXW7YvbmPQdivUne4hCErTTcQuL",
  "key26": "3tQU1LximVbFWMvaSGNF1s9Hec33U4BDurpz9zAekYGZTVhBaxrn93uCdnvJXpzkTDVBdVD7nGHMttSyc4Dwqchq",
  "key27": "4MxsWs4myRLJnWmmuqxfcJ8ggj7ZpLjEdjHC1ipUcz3md1SbRv6Y1W9vnN156fSLg8QvB5Ky9YoksfpdcGqHffAq",
  "key28": "2DX16N4p6cVf21J3yHm2dKqv8Vi7u4RFfFSZbbEXrGJp29Y7Wf4J36cu5jt4nnmxUJfQnCzUhbWPzmrdQAFtYkCe",
  "key29": "2GN2FoVf2RW6Y2Nh9VAwGu5J6bydDVkUUcpUKG7uYS6pn9AMnLa6vaA7Xmxd1DyjLLChAK7KBnQbPXh1wF9mpyM5",
  "key30": "4cuMUyscQGoNQnaEQKTCPqmGvYed17dujwoq7J1PZe1nDgJx7oVpYMtn78eZVFpT97ZYbo9RzkdKxJ2yB3QiASoM",
  "key31": "5z73CqrkegTnA6i9epgUcqi7GU58FUCiRubfhwzktcyeSwFN1NLwrJhS3SAXjsjCkGRTpH91QRKAx6HCe7sPqMhN",
  "key32": "23z4R3ZiNXpdKp9jRNbrPhVREadRKxEEpPzz6xk7LHzy3xmLNxdHVnSViP3WSR5M4tP7FPkGNdrmSHPrkhoBxHJw",
  "key33": "TWGRAWDaLfx9hfiV2i7MdzsSB2WYbPMXS2rM9ekXJbXUQd1A5H11XMkaQ8G1TWB19d38BHhs5JvNcWcaMRurD1k",
  "key34": "5Et8CQa3UuYnsicx5tqAamkVnvGs39MNvTZ1wc2fU6LBMNwyHZoTLjWWYknd1ZbC4xgRHrVMJziA4fXAjJu7QXD8",
  "key35": "5EdPW5cEKX1vZ3twG2XcpHEcMnSojbMMYZYmpWA6EUPV8g3CedbJVHvZfiN4UZJLzWUhMyqp4mhGhRWULKjAtNHV",
  "key36": "5VkPkcxBk6N12uwYxN3o8Qj9reXLFuyNXCojmTwNx8uj9MGbFL3m57JkMivBwmNbx65vqkbC44FqiVWvJzfjSriF",
  "key37": "i3QtSjm7CYPwSryZtToCYWgeY2mQSNjf6m8QmowowkWDKatRgKN4Xmd5W2PjLCDV5wAG7smUoNSfsW2HMrQha7p",
  "key38": "2fRJ6z6YuaUdYQktCyryh2CW6MUNWziv7ZSkQdBCN54rkVgsZ7qy86Nk8xGTrvC1hEvRPU6G8GBuAAfjF6y4YHjK",
  "key39": "3dF4hW2hjPjp1zB3vvQPVc8QL7xybHYYFRkM4MPLoD833XCMcCUXzYX12zvkT5RstYDQhav1FDgscrovsJtrbgao",
  "key40": "4DBgBShY9jzUsErgNmKzDuRgfjH7VgptZ8a85VAdSomXTKaPndgBF8sLhDHjjcV2jf967o8hrfJuqTYx2YFpbUrC",
  "key41": "41QgEQD5MiS3f5yfEywNbH4E5JgZZbmtSVkrY5hcYsPLja6cztTruRbrDcG4HipmzVbS6ASoVz4bZt6nZRz3bxhX",
  "key42": "62aiWCJso4YeBH266UyQU3KmmBMwvwjHudFtUZsBKZTvYVpcW7GjJRT2rptUHQs2gmqxoYZ3WumffMxtU6xDs4Li",
  "key43": "sLtwtvBJAuAi6SgB5fy8wHTbcUNyYXtTTKwprbgJP1YGxvDYyVyyiPboGQ2tGycHU1STikX4UnZeqnEPJQRvCEu",
  "key44": "2KDPRSgBhr5z58uZQ3s7CLAKcMPTL8NPVRUMY4CjKu2FS8Et4iFSE3nez6F7zzoXQVAo8uFPSZBngAHfKqJrdRBK",
  "key45": "4RzxKTVj4yZpmp6AoNnaS51BPNsvRfuvHKAb8pk1H9gU2Ui8hdnB8uLNyWwZmGGmcitumXEhh1kFB3zNHZ7TjPBu"
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
