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
    "5KmABGyjpACYq86kb6fpMqo8DQwna5q5uxhtnf2621wdZoJ4eWVwSNCe9UfBPLFzv1x9RE2w52cz3UWHaagNNrvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJ7DCnBufWyZujdzeawh5KF2gS4MiyA6zanfKWgfiqGDeoKdNZMz8FpJYEUWi1F9vh8HNr8wdhyL8To9hm9cqH6",
  "key1": "5szRTJeaXP3Fw6Y77Di9zca3CYdUqzNUQYagpi4cpdDteNFgVHJrvcJYDSkfhgcyVxaGa8Brybn5C97nKx8ajaKd",
  "key2": "4NRG5h7gH1A8SNj9dQU9fztQDgSi2XAbZDmgc6J7CPnis8z86faWnswqxR35VhkfVKaqigTjdEX1tg9Cd377PXQh",
  "key3": "2b3dupWTMVUhqKhQ1PXuC6RykfiruvMijACHUUMvprWUrHCRKK8eMJsEXPYFrBX11pnPbYj1hiXoS8jkuHp8H9b7",
  "key4": "GvnFHnM49Z3WpiV2BBJSKXPVXz7o514Wyfonfr1TCmVK3sKycc8mGkefdrP7vQyLUHEEgiu9cSxN9hk45ZCSADH",
  "key5": "61BM6DSfz81vYM94UdKiAjUxkhHAdUwwxejGVh9UuNynzcBWPvLvup1m8SKR7NxGhQPQJw9Er9nj7HbGKWNgBLvd",
  "key6": "5WPY7FeUXxTfG5WsTisoaDPiZYGE18JN6AVMj1vKsGRSxXByfxtHGR3C7DRKaHehf4GfKt3G6CDR6ohPK3Luhsfa",
  "key7": "4yNe5nEXPCVHeVWsGDUW9QLT4tYxRMafMz16xYWpxiFSbD3Qsf9YbvydisPwcxcd5DjC7gw2U1rCRBDhANCAu3he",
  "key8": "2zYeCTFFGMwNKQNnbBYPdgJaXpUediG3jiV32GD89YQcjA6w6s1zKi29HTn1X66tVSdNU1ExBBYi4ScWdNQYSW2a",
  "key9": "5TpbHwr5HRZfXtEgw6YtLsgpKN4eC5tG7znhyj4Au56Aw26iX1SgcH7m2g7D1essiSFg5aGo8sNetzZZR6ZD9hHJ",
  "key10": "FWrR2xA6HeZLY1kAD6GjpdfFBnnmFsStzgNcBE7t7RY4YgwPNcUH4XdqJu89FFEVpuGCL1g2Po3ssbZbNd8PEzE",
  "key11": "km6jXwrDyweazN8eAGKXUM6aeSoc889ao4JYA7hc3E1wsTWDUubvV3aBg6sZw9x15EeaEoDEbx6piHfoFV3ZJEg",
  "key12": "4jWKdY4F1uDeXkZeg5n4fHzbL42H48n8BLpYPpvrcCz4KZb7xAaktd93ANRhkxxD5nNsf8BpDgAftExSsHvEKzgs",
  "key13": "287AqV4nxY73umLxKL81siHp1wnKU1PzcKftBWRzAd7dzwNnDo3prr8M9QA6KiQYrSDiTKADtz2LHFiss4xT1UGW",
  "key14": "wbVk8MrkspXPbvL4UnXmbnLP2feWAdxSizLCDxWD3ZTGgA6nTFRa7AvQ8KBNRNBu9QctZhF1QFU88j9AJ5qQ5Jk",
  "key15": "2w7oUsqM8k4RoHhjvfANFX9Ch7oikGZiHxM86cM3gCNkamG15xMs9wqhntSUAe3sMb9hYFHhvahvgYjwFSeS5S1G",
  "key16": "57gZLe9d5GjATtbFEmnoFARjyxR8cCYQjTv5hAuNvvaXiyb9riCZTC4rFWU4ccu5RUoaUaZ3SjLu6DnMNPc9hCPe",
  "key17": "5eKpFBYxJSgwPsbnNfjmGJvouF51VpFTjMUeVerWDp32Xt1ZBWFiGqoJUuTY2s4r2JcSvUUcLzuhJX7bhmxsoZdW",
  "key18": "66B5e76hzjot7389dfDBexBLFYnidtS2DuPq9hai5Be6yQe3hR9kyZzHys2auXzuqzMepwKxx8r2o8kEtU1LeGgf",
  "key19": "xvaS1xcuTzfiJdJjb6tSQKEwwGvT1VUTpycxMJZ2zHsTWkDk4knnoWuhy3bkkg5ANbDncqrhkbsu3gaTMHN8rUM",
  "key20": "2TTaDPMvVq5Z9WXbz2iGWWpn4sGCAK6xzwnx7Hkwh9yQ9XwaoCoFaquUxcvPc715HtBgPQAPCAeCqEuz4HhswPEy",
  "key21": "5QkCDuaausQp2SKZDBRCLhkvQpntkoqe4e79meUsnevt9zu7nSNTYAkUzBjjFczDE6vQVxFLuKkyCeKNSRpKEQK1",
  "key22": "mRe8Sa9TzStYtV2iAmhahcfiu9wf2DeS6Gn41p1BwpWQrFYRLyWWHUwXp2sUQZMYdF44FXr9gZ88WLqBXm6Nb7W",
  "key23": "25j1E2C5JMG1FqQLorZ8bwwNq9Y24cpc8SJMDDRGE94zbN5ngwrz1zZMW9kGmFGPnxcN3eJ8QsbXaTt7jTEULAeP",
  "key24": "5aTwvDVgcPzmpr3CvqQeac4zK4DsSsCyPBV3VDreadMfh5ESUwcVDvkHJJqw9gqHaZvxxYJVrWv6WsLGzKPZm4Gg",
  "key25": "3cRi2cMcrUp2w5bbtu44yCmPULxzrFeLoc7Nvzt8Y9LBpSPh6xFEGE2hbHDrGsSsvFeMYZpJZcYim7BpyAoBR2zS",
  "key26": "rzaPuLPjPN6bC6Mvk926e8zzBoEj74XSQojAwYqT7VuXMocQdk5vtqWD9HUTrjhLjrKvjZ4A2xQTaefB1nvkjxx",
  "key27": "2uHU5fDpJtqGS8dq6urXnkRW2anhNGLJtR85HXhYM3u5tAt7eVhqAd4FZQxicDcPY6r5ocHKByQrxvD42QrA2q7S",
  "key28": "UfQhJknKYn4qgUDazrVBCsbFaELTwQcV3HqzuS7FXyBx8BAp5YhJ5wbN655eXy7r7gqEgSYrnQcE3qJpwYvRsx6",
  "key29": "5UcR7AATdZdwHQEPycsF6DjRF43qJA3CjVDGddpERcTPNgN7w8Emkr61H3vNg46owSSN1dR1Afj42QJxx6zGRrkD",
  "key30": "2Ds1LWtBs34uPmaGWJ5JDyipssHNgRaPYZreKSLJgZQ89hBLxSfiLm7CcQsbND7fkQYWoZcog8Tg8K5Vj2AT87TX",
  "key31": "5pgDHZTv7JimEP3z2vFywLybzmCxYPnKcuLhvfndduZdXzTfbv3gjLHfRBTnKAkCbeaEiMbiBwKomyd4soAPaabK",
  "key32": "3C4bGimGSryfsmC9FkoEsDDa1VHwnF7DwCm6svcT5LFq8YUVGPtJizXPKnR1RqzYsPoPUt3zbeuxkvYSEbRQFyjR",
  "key33": "3DGF59RwR4XKVnsxkMCRtNK4WsWJfZuSiBRXkFBav9Zp2o6ywh47LtyCd47QfsZqFDmCoFsca3nTqrTAFP8dQWHZ",
  "key34": "5V2UDpJ3ny7oDcmwkZrRskrshbuFu1YRp69jpjhVdwxDjgehrV2wxr9APWAhoRsr4hcfGx28nL8FP1hUmS3F3taY",
  "key35": "2PT1sLYBBFXZEtCPuHsf4PBoS3vzsKzfbtzxeSokZ1SRJjgLvzLxwhWMAfLNtTSJoL5Qg4VCTsHg3FvbGwRGSjR2",
  "key36": "3AcT14rNXGyc3XUjJufjeb27A6vtJrhq4PLQPYVTzGHn8eTx4WcQVXFcBGfSNdq3WXkPB6wxvJq1s3EdfL29n9kD",
  "key37": "546NwJurUhRDjkv962ywL5epQkrkeEfmSRDyD65FQunNdw57zRYCorwmYwhgq2RL3mfEVyPcZQCiHzDdktKtL43u",
  "key38": "5xJqd6u4QZkk4XnGLaFBf4ZJ22yCoZq4rjhcyGwWJQWnRgBLuUTQW7pdyxX6Gf2sPCZjve9w9Rg2pU1hpf1VtnyZ",
  "key39": "2mD5Lgcvuzntt2yeTWyfLoBmCpHcdzucYpRABSahifBWk9YLR6VXjisGHbhP7q4EhE2gTnPUEa9KnRxi86JpZcmx",
  "key40": "2XCagpcRAfsANAtCBmAKDra7ePZ8ps1BbXNcE9DzimjS7vQ46baLLYx3yYUGKm5VmedhyUgS1TD4FALSTHr5vuya",
  "key41": "5p9QLGW4RyN9AHSDzyPRzTpcE7QrSV1sXW1yJemdhXu7CCWspPUQrZmmUkJbQ2DT1B6tX52GgKhM1LxrWhh95wdA",
  "key42": "5J35jnspjp6JeBHLMrZ1fjZXFnvEv8KdbDLXFhbNe6zCq6Qwoz6HRKJXAyDDL6ko6LHBFBuimRd3zZcXo7d6rc3g",
  "key43": "41ZkPDLyW8jRrimdaUzBhmoDeE57dqM8Bfk9E4DVjgd1kpa14dJQWKRXFUySQDyjr3L2guZE4WfKVowGC4Xmicmn",
  "key44": "31HUMgeX6VzAarg35dAAXip8njCpb6Ku1tLBfBNBjxST9M5DJwCZKPp4CmbGpghfV9JpXSYKN3Z6pogV1rzbV2bG",
  "key45": "pLcrLCCXgQb3F8e2XDebEjkVu9yf4wNrNxmdUvKUkW2Xj53wkCF2w4kQ6qbo5izRmDuFQEwSmznELY9bPb7kWZ4",
  "key46": "5JBNx2BreBsk54NFK76V4Rd9EsSmsWcdz4Br9jntcCKsxNz7pUs4BCCLbgpKkk2u13jibDoXSEghrDym8bZJXaQq",
  "key47": "4MabSNjwz2sqZPo4aiUfLawu3CMGvVdw6LMc4AL1cJrmFa1UzuvJa9jTLsES5HqkK84VSZGhXjKHjab9rV7xjqK3",
  "key48": "5L7F3pwmUZmj1mvJDs53M6mmn4oFb36CA22RdeAyja7cUJJxUDxLzX6rNQuXrTQZnzYcWANGv5BEBXChoe5Y9Usj"
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
