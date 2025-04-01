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
    "4YWZcoAETVKGJ2nEQYwU8wL1AsfqdjRiiGSY88eQnUNASac5cTFBdUKdYxauDov4P6dcPKt2TCMXxhKuTUHfbM9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "17oE4nXf8nc2LBHFRQg1geUetL21HXq1KmQg9N1WQJZAYRCVwLP1QVQAsyftDkzgDwBKMGbvQEKAoxJwEPrbWhA",
  "key1": "3f91QwG5yVYb2H7bSqAEeq37RuNxFVrozesGGpqsMsXBRfPhaGVdxxxSV3BH5DTnZEvnYT6gyejNNk74dXXfrC34",
  "key2": "26fHxER5nikwh4gcHNwfR8m7hvjRK3eujbefrRrE1ECK3kpZ7Dtqi4aRe29mDYZNidpbQK2BWS3Gb5ZvQ6RVJGoh",
  "key3": "5K9yuwKF7ahX3qLF32M8a9wR2D2mTRDMwYY5rEBgeNXAJACApBZZ5CqB5GKQCVhoo3MFU81pXNq2vMH188oZdPEQ",
  "key4": "2ky6HdaRMg2NJvbcWjWjHD1YHusALrGH4VoSXtvF5xmJzrTX8L8Y1NazfRLMvJTHQZ7AJ3jb43adQDRnXZUwGi93",
  "key5": "32yQwjN7s4afJeTYUpjmWH8tgdqsginwZyuqELnUEYfmqwyzinF1WnCw1HY6vSfLd7owdTgvDe8Rv8rZMtrzYNh7",
  "key6": "3uEqbk1TUe19gEZ11gzjeR3VdEeBrxHDVFiX8MSnepRafEYmm5bytM1vwtDMpJZRHRk4dAMboGH5Jmh6pcNzBhS3",
  "key7": "4vor3z66DCXgXZzykiLCPjmiGYTa3y1erdg75dZUXJoEHFxB14WH8yjAHboiX9LKBRbohmHCT7RysgddngTAQpzt",
  "key8": "5NoeMZ6v1pAGdyqksfaXTTQ8npNN6ux56X3hoHt2FaALKUawST51y9Xb5LvipcKLEKan24P5dZTgRgdA5vUfQksp",
  "key9": "3NpAVN6PaxKMNikgkjPGXWhmhjonBEnaemm5yHVCP8KGfntyQzRTgjxwsQMyxT6CfdYjas5LRehC5LFHsv8MnJVq",
  "key10": "2YQLEc8KCG9HaU2hYm95XxpkU1cTyFBZZJaYf1DdaazKZnngmV66t7j1YLn32wKJ2qtWJxVLk1Gk15mrE7yYw6Ua",
  "key11": "33Y6DAmBXEGcTdK98hTV6RUipUKv47eUM3g4i38tAcssiuaE6X8G2QMQs6CC4GJa3mhCGNmAZuH2DaPeG8VGdjhy",
  "key12": "2xRrLqZ12mnXKB1YYqmLxNiTyLjz3GUXys6KnXE2S2UWNmmbsyVc15r7x5FoP4CNVqfw3NtVqwgVjaEV5ThQBcqu",
  "key13": "49mN9D3wCm5zANhKTwb5ozb8dM5qoeAc6xfGBDVZAs66eJTeDY6HxrMWErmsrtFReCoojGkJ789T4xr5Mm63FEdG",
  "key14": "56HpZH5tYxNzBwBKnZvBcukjMrWEv3yzC8UeT6A96xFLBaCX4xdQCG4VWsjXZ657XrMtZPdgek7r8PoGF4B8P2Pz",
  "key15": "X84KQuQRPRVLzuL4VcdMziXnvpjPyd49y1KHBMU6YudWjQckdsUgfJTCx6NDinBbYA2uwgGAu6Cz2fiiPQVvjoZ",
  "key16": "5a34VEgkJ6Hm19J69EfUp3RM2sxiiKFwxMHxc1AVLVRFGGBYo87Zsn89cEoKGgLuVo9ZxFuQf84TFaPEvt5yfDos",
  "key17": "4BgZXtLXCMYioSNwXdKEpw1y27oqP5z2gJjLwX1qQTeaW4kb3SR1Tvbpxi4wYBQcctTWxe3oMnowP5RTeq3QmaFQ",
  "key18": "5FLN3qxHPqvrrdFn7rWiWL5zjBrnTzX6r61Yub4yFtDXr7zCdBmMfx1iABPTBPYjsgvxyRkxsdqq5m9HEyR99Xi3",
  "key19": "3yYcJd9KLRV3Bb1PyiWM9DmQjmQ5TeWaaFymaciqbp6BfCPcmbaBbomgmQEuWgjie3anMgKtRGPynViR7odPx3tg",
  "key20": "4LybQBKY9hVA8e32WuJdaZgKrXdDqaQz7jeRPaY9q2s2vkwqH7jyzDSCSzEuKGZSA3goZGUEfeKdWPTvFGT3k2Js",
  "key21": "5UGX9Xx89SRAsEBUY3PjttFqXyj7tftHPrydoLDVwqdByrU4uo8BcsmqLqP1HyCaECQmov27MHG5248wvp7pVEP1",
  "key22": "4W3ZruKDuLKDQRzbJD4p1wQqSsf6E4ZDLKJCqAxjT9xRMhH8YSC6T86MEk9AcsxeaGkEt3aYKNCa3jacXhvTxvU7",
  "key23": "bbyiVAU1UvmoXGXrrwpbdBT6eKC9Mra6qA6NNGBvbBk5KQd5odkUiwedFCJR4ckr97YHfCGA2CtFVHoFwxHAv2i",
  "key24": "45S9qXhRX2pinpfhxe3vxYYFy98q6NVSKiVXhAvSBbVxLcmFWDFQrhNUMMPPvNSgfNoAxsdMgVw8xcdHQ5ecWFAG",
  "key25": "LcDbArtyqmw9ggDgkokrK9zVujnpdk1zsE3XoAXkTJ6tX3m1qQKrEbwjTZ96NueBJTp9ieKKVdPWp5wX3qagrrp",
  "key26": "HzPbaTSrQc94p5qvB6snxSoT88XgTU7jAs8LgSFGCdtaJZjYnmtAdSvdonpBwK4xrequF5DwmEWfXK7ZqQSCUsG",
  "key27": "B1XQ9TfdfEjuUGuy6kMLdDr6jWSxNhQ3vEezRQ3Pe3yocrH9TexzhvWYmWsNSQBHEHc1X3Cir6ixAMLebG9RcTq",
  "key28": "vj8wnU5tChcCtN1hbQcR6vUCLMZUWmd8bZAv3FzSz3gXc9NSDQWvjsP459e1RCNCqLHCDfgPUj8cs3atoc3JCgV",
  "key29": "3LtDdaY5EruAQ7BzSx9t5srbtvH9diGoeWT3yvxQcJzzesJgFVo6JxU8Bt7sxKQc3p8PErAbhUFSLrV8DC1V4FEc",
  "key30": "4rbCRk987euhiE4MiwEYMu9zkLSnDbRXUZNCEHDfJvoDrB84wS7N7vKoRCmycEZcmTb2K5jruCpwW9cFGkkLZVcu",
  "key31": "4BN7fRp4FZhJHhKzkj1wJW5RQZVpgVcQPfzkoF6XfnWYELq5WaC3AfPx5umuukd1bMCGZ5DePawwpy4rxiWkUXHw",
  "key32": "4YAUAXWopUUoMnNSzzdbvc7ky6gsZEqHPtiv1eysGizA3k14xEGZjDKfptumNeKeyvHXeVbmeMV9HZQZ3uc8dQeM",
  "key33": "48LundLWaXprzejArttmHesAhJLMyxMSPJicvnwjvVM6YYaD9sJvJrqrz2RJEuFcC8r1tQHLCsdh8B1wF28G42ai",
  "key34": "3KHkAuBg3GbZ2PWTWPX3kERfoF8vgmnYF7WtbVr4ZQF78rwuQ1ySqBYLokcR9C1iJH8EfruConQYoi1RJzP5kgz1",
  "key35": "3yRkxXebLgtugtYot1D63hXax6DRGWVGzZLnBcMdY9yHZNt5Qtxkp5jtBHwYSbapC5VcJEYTXmMAGijCSVN44RKZ",
  "key36": "3tx23WEnTvDT8bnaZgbvDrKU7GHZxyXHasWtBhqva2Q83FPeqoQRXfWW4trUYiWYdCzKjyUyJYqZfvM8wmBJDX5F",
  "key37": "3twxshmMru9Ni5JQEYyjhJTzoWjxYYA1xUcKBaGAm8vLuUGBKJCLSp4XhAQJT4ED7R8jPp8hjQgXPqkAUhJ2VmGZ",
  "key38": "AspMEzbZUEAHX5VYdpHpvkHyp8CXufJMdzL3dJ2rQFQ3PvoWcuYnj1BsZKuMYjf2ocfcjGai6bKhVJgPqABumFe",
  "key39": "4mZWrD1V2aWCYgMP3N9uHYaU7Jt4VaATJhWGXfQYaA2DYeSBTnHmaTAfw2pdA7ujS6VWsbZu71bAc6nSSEzzqazC",
  "key40": "25c4UdAVkY382UKfia2KTZYn1khhbm61uXNSKJzy11nVxwsYmjBvS8Q5MQySuhWhrCaHg1KFnXSCUW21nrWau4xj",
  "key41": "5P8F2GJ9ZCtGwHnLXHrGgK4H3HThXWyaBmENVZNTJVDsEMBnRcPL2HFSKKGdZuB7TVcia6hjC35h9vJgQ8UvGKQB",
  "key42": "42V8by8cEgzvxALTWjpAzBKMWKsJxsH3dT4vQ3KyF8gR7EyZmkvkFXgRRi9hAioVwi29H2RkEfBVstM3mgAfnoLh",
  "key43": "6nWLPJ69q8BgUFKSRpABMQf7tLpKet6XAFoXPWCQtgWZno3yWch7gu235aJWUjNQWEbgRQ6GNmEYXFtGNnH38eN",
  "key44": "5xmrw5V4MRxKiAZorfcUoa3NGzR54hL2dXex4WTua9qoXAXjXCRUXhiV9we9NpWAKqzbEJhCUpqQmoFHQX7n6SJX",
  "key45": "5zTN9bLBUrk6J6Ca12ZBV5HefuQvVmKbFZbunAdnFjebEGpZs6fsR9miDLaec2F2mQAZ7rMaJpge57dA2L2ER9oJ"
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
