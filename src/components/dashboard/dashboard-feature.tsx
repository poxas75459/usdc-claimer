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
    "3JVx8Aaq3K4qG4f4zGqmUjyTvjJJDStKwwVhDHEMhChLMoiYnBEZan9fKZnSsvMxxSKiQyZQ7XaVQ5gQdGYrMzLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32xRNZMUuy9Hke41HegRN1BerJJVeiL7RitvFVk8Qyxa2VwJ6cp9HDLaCkBQWP8poyyVYwHRYPFF3cWRK54vL4op",
  "key1": "4rfbAr74eHoZcrXBFy7rhXXUyQktxBbcwF1UVs71TUTHwtyFSSjJS5Qpdv4hUwz81mMgZfq3NuicTXAY9dbeM61E",
  "key2": "5LDNfCeLFiWHfnPTUpx6vrUPJVHAuizQ8iHGafG7E3x86Qe9CTQzJC4zHvqmuw9ix1X4UaXkAY2J2hbhc3ZXeqzD",
  "key3": "3GjTPCxmrHoeu9udqGNitLCB8KHT4muTymPCPQWWGzj8qqQowAfz28DaijDbtqSz21ASgViuPWMQ4y8BY3HFsdM3",
  "key4": "22g4f3Hn1cEa9kHngViFVp2CSS9pYMhQyCKcqzxrCmNSK4oRZPokMC6FkjjbfZ7eVC3ppaAuNfoCMomWWJEGRuxn",
  "key5": "2koGzChKdSF6kLyhPZ3ehNBpAeYJiY4oUaKL3ThAgKo45WPuEwWkLVywQNdKUYsE61uB7QesyUdWjw9cRDBr22G5",
  "key6": "3VzKfVGUzGC8yWmzwa7uKQHcmHvmex5nuExZNQGfmpMtbV1jdiScLxn2zdB4vQJtJ4pv256HTnB7eideLQLimUS5",
  "key7": "zdBeM23xzvczuV8PR9x19rXxYspohB322p5d7UKAR6NHeepZ6dpf1XV9xsHaFqhij5N7zVQVvThkGMFSv6jxCSC",
  "key8": "47nXeez8kGSdcnXDoQPhXz4Aun5a2SGBKFfNXQTRDXAdejtCqPy9cCJT4BXnC5FAaXH9Ms4Kw2vfzcvxgzV8WveB",
  "key9": "64YxLsqvKyPPd8zDZVQMJBwmKCRpkfZf4KvT1bnGMGqyXwJD3CeWJyGUEhfoVn7YSJkA29JuZe46LJFxnrcjPPr",
  "key10": "4fKHThz5MUXFsfKrrvgW1yzEd8WhQQZKD74dcVMeqQVYvynsXdkqew2YevpFLcUYfthF8gaHTabK12kVqRpicvb6",
  "key11": "2tZk54mdeGTmLrwxdkLFtsGp4ptJm86ZtzBvShyjuZucTT7bTTv4y4Yv4eHnyjsXi1N64dh7nJnSEigdgyPgBSVf",
  "key12": "5yF4Sfyw68uWBdd2TR8J2hsHYrDpfCNzLZHEXeZ8hKNyX1ddQZYpBqazJS3HY5dGE5qLhn9hHtk82TBwv2UY76MR",
  "key13": "3aaSJ9Ryoj4Hq6oF9rwTyabg8WxDJDTh7jPcPxctkQnxsNwCg8HuqUSvZjQmcQY5Dgt8Qw3DWkTfevQQX5q3jfTE",
  "key14": "34jCkGem1DB3SpXFMPewMs87EAgsXAnC2u26rp6NUsnGRE3d4uY6Znem35gpvca474SYrBkVbkkvEufqRD7mejtc",
  "key15": "67KJvuwmLTpm2sAVxjQt3poHD3Vf7v83n9GR2Y9yDN5jHJnANrfVZkkTFRGWbgAaZeRskLXef6k3eNmBq1LtFX23",
  "key16": "2VGTDW7nYEdya54A2CCLxupRFH98ec8RWiDwd5e7yc9pQx3KbELfq4XeJRFeSCYWMMvku7FbvSBJAeEYR9qoUwCg",
  "key17": "5WWeVrkYQtJQcgEmS6pKqDgsRkEN1jAL9eGTiHw3qgYwP1G2EsATYL67eN3EVZB5SB3XBXbToWtoheQnWKMb7DDc",
  "key18": "289pAYQZ3R7Nm1ZdG6F34iPSGCSi5oSu9TA6Fn9tL4sRTXC1JbvGu9MnFLdRnsFYnx8iuAxdJbNJRiFdCnrochD1",
  "key19": "4cQfhZmcW6vLuso3o5jqKnTKTHDFdpLv1qYU5gUM26b14JdvTPJEUv8uJMtZheMfVYR8KQ8Hd7z1ncP8MH3rMidL",
  "key20": "2jLYx9KLHEsLNHzwKvutpd2W16SGbEXAZaqA6LvTgRLcHQsE9ZUmoZwUXPmezHk7Gszm8iHtnnbBaPipEiFbb3bi",
  "key21": "4ehz8RHgQdzXbjz4k2jkbRsbPzJuXgXcPwwSymvtkZA4UusLK7tfv5cyeeHrWTmFEJZwoa73eHtQEuotQoKigmrE",
  "key22": "6ZdEkXezwfueTJ9ZmrHmvha2XVKTs6kK5iDMR3phHyxdHYJwEgfq9TXXrvhjmPpi6P5SqJZPs82FNweDtBRsRu8",
  "key23": "3cSWB3uqWFckXaSe3MLajUyA2GEHfCNgQuwWdPCrkAMUnzR9bQfXZA8KfgocLcncnfQJsDAHFzVqmYEkfEiafe1C",
  "key24": "2hAKVg7yctsHMKpbpGZknuGHsDnuP1JGMn2pR9x1fZrR7Y9P4fJnXJfyaSxzbwPeeNor4a4ZUBbZKzdUJpddWGMA",
  "key25": "5ZmjUwNBCdx17kSPmF5GQkS56QLwbon5SNm4ZmovSQQyWW4sc2LnKjzVRs8Pycc4PT5MqPs9VpCFMZPE28vLQ96k",
  "key26": "2LpJGrLrEgvgSsg61fQwp26e71q3nRRiuhPnbfbQ1dwZ7hepQ6puENHKFhoEr3exgrq12x497LvekrnTPDAzfDRp",
  "key27": "4VfznQGqqAVHfYgNrWZe74HBgTT3pTbuyRzFyGJYzuVuoZkdt81QwELkXV4DTDQQ3TKAJJs9smZfRoz2EoYZqh9b",
  "key28": "26mjYrQxysoi5AGniercb1xo5rBgkBRQ7yaMPY7LRXh9dSBtp7dfze8QX7VvKRvPfXoKHokzKykz9JQZoo6df9Rv",
  "key29": "VE21c9oisy4kLKUBV9adpTjQ7Zvfs4eYpirnG8fTcJZxYH51vaaZW8AkdHeXqBeLgQ83ZAUy9MLstMCccW9JhyG",
  "key30": "4SbKzfGRxyfrh68BaMoeKrhPNqkvpTLMutXUkJGXU2zGn6YFLuEBHu7Pu92E26Ux4waZuyp1DqDqT5FgkxaLpV8a",
  "key31": "ki7rCTQxC1gMjYvY1WZaEEn9USTQ6CKwFugd8nwUxVxu1CcXQARdxALBerbykm2FBZxBssRbac5Ks5Wv5yUxXgK",
  "key32": "4arW37hPmr3RNc3Z97jP63Z8rzY7r1CfdJbt5D2E5jqkxJhVsJ8ZSwz8XucNX5ukSzBtxdYcmgHrmhGJeCJarDN4",
  "key33": "4paZtpan1byTiEJZtLap1z2jsWuymfSXz2i4CsHUyfAXWrKdMnZCTPNib5VWu2627iPcGCUwimMAyW1H75K2vK7x",
  "key34": "525D7eGQwWSxbWFsDnHu3o9snJUrEES8b1FpZBzuiW2bebHASqKUEoSPgVDJLEwtJPhG7UuEVvG4fRbKaGpFsG2A"
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
