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
    "4gPuteraQDiJS362BeDnsLpgKUqcND9btygpZ2o7NG3GbLUpuaE5vBnYxFKj6wfFyZoJavryA1kNacoFbkqWpsJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bDrWzgyrmo8yLMT381cSucz77THMVZiykgppip1asdXaqrCcSrzpBDgiF51SrA82fZqdXkC2cXoTkvDdnjsLQvH",
  "key1": "5tycA2fBxgRH36yiqkSqVp4EvyFYMSNsYJYW9RMmNb3RQwzJXXHiU3hYVqUtVYidEcrSTY6QFTGTwn7aTtBtg5F3",
  "key2": "2ArEDkeDxQdSq7ffmjG4RW9amw7J5cEuz854rd1iVPgerPUCscg6jebo2ZcEwxRw7NJSRgu1NunR1UrMzeWiZA8T",
  "key3": "57LYhZeKQD8wZ2TxqEbWE4cKRLEXiPvLNiRF3dhuxcnk4cA7CwwkrpGKS3aRsYqdDq3WnX755PPpBVyXN1AhtYtC",
  "key4": "5CWhXkXVjXc89PFVJCdSwHPFPWuMBPdDTriyJd2zeE2mo9D2ofsTDKjyGYyEHNxn4LB8uByWSUvkMKRom5QiriNG",
  "key5": "59KQo4d3tsTYTT33qknY1LsQEPemdxN2ikDxRQxwuV4SbGULTcaFwLWbKVMKnha6JGxFrAxwzqGYXdbeevjhzGq2",
  "key6": "wDp7ikiuEtezjvCwskAmfGnirMANPFghfQLSYVuzzKto4ktqLdFcmN9j9pvLAMaA5sZTQwar42nrYpKtzYYVxRz",
  "key7": "4mYUuZd3LUQsn6p4RzNik4i3pM9PaCUVWbaERWbyd8fAFU7zmkJEeD6T7khQDzPKEJZAPqFGPxxrrSmhyz2kg3Gv",
  "key8": "2R4wSQieABkaavDpW8tskyNEizyUWhfMPANMoekASEpZ6FqtTwCUqMyyW4Vg1EDjy1YjLheZhEo6PF5WaJQ2KyFt",
  "key9": "3YZVFKrsEwWL6BvbVs2RQqjTTykBkbGNhA6TztKESqziBufqeG2Xn1oHo6iTUxx4KRHK4nvpX1FTh3HF8VH51gps",
  "key10": "2x1eKhKbgBWCrPSmWjMxBoZnSxugzf9YC7B99N8azYgDJmjX9BFWkVLazDKgsXxySavMJYF71uvB9wHsYbG4yCgf",
  "key11": "382fcvsCRtP9yfdqLeiyjUacSVnbZc4DK7unTeoGQ9D3iZLozCqNG9EirBvgxDMDQ841v3xejZHfJC2vLjsudSWv",
  "key12": "3u5RnytNTHfShguk5gDypUpFPRfHqitSxisGYh5WjHA6ajU49ga2jauWS5E3exqjDkpixjudnVBeL7u1Spv7tVcp",
  "key13": "3QpGgtJVGaiA8ez4ctJTY5JGq2iM1Be1rEaAZ9ZnXp8JiYJgt8p68fQd2bJ8pCPaE1Jf2cPhQeVQ9AH2844ydfG4",
  "key14": "5mC8rmy2D7dEaKZKdksykPwqkJy7f5Qs5ypCBtWBZcu6wLHwVPJfppTedBEbL7JTzE3DAWV8hczuerNZyRZTFycA",
  "key15": "53H6huTBygttXkgHrGXtdZo7zqtQHBoGgaHf8RR3LLHa8jKkR8vUsS3eiJFkq3uoypTTHrc5Yg6Zn2Fm5NehRqBX",
  "key16": "4YQAhNNEF75wTXP2VpMRDunk6BnaqDfPFeNPwTrsD7VK22BjKTA1XGt7gQmtiPzr1f2Fe6AwNSBLbNptP8YfjwY8",
  "key17": "5LK4mnUZxqiD3PwYGJ9edjPEoT2cZ6NSP2RTpyPbJE6DisEAbt9WLvWiDBs7REuDw9MCAKas7XzJBkjV27fQpkMR",
  "key18": "5UzS3iJhcXxh8djYMJasCkdvjqYDJBMsZJ1oKDk3mqGFe5hDJihpqsxTUFGpwZygnj6sMyVinU8VEbi8CV2mDYdr",
  "key19": "4FGmr1ZC1DgQgNXZmKK6xn91td9VxXWL8fmsmrki74GF2xT42spPnMBSe6uvnHsdyAsinXp3nDeFy7Abz1LNoyPi",
  "key20": "2LgmrHryGG6KQ3VEWupJmrsAMGYJ3nJjKEvx3ds1osoCK4NDPVuqvCmVV2NRKziUtTGMNvTUUDeCYHKLgSurXiSg",
  "key21": "4B4yMYpFPMQsfDUqLApZEpQmLck5DiDjtWynUYE7dQvwywAgjYeZgt1cn6XmJo63HgQfyYDjHLyuqKaL771RagjP",
  "key22": "avwZw96gY1Zym7aesxP2pp7HmzqTB927uvS1svdrwvZyS7TV8n8hMSPixib4Yts97tbe9fhgseYVnTSoH42v32R",
  "key23": "3kNCa9g8h1dhJMWgkTi9dudrcxaPqHRTK7HA34Yv1PHkWeCxfSQUrNuY26kRNFLcX9sssqkELr5idemerSzmx6Bh",
  "key24": "5ECdo9x8Ng3c7C2F9G1W27tQMP6iHzHdCfKP82mLUDRYF9kXHZ7e4nsngSN25XZjFDqGkg58vT4s32YtPdAXUPHF",
  "key25": "2MJBG4dHTimFx4p61LEjHUTjZ1L3si63UqH5KxQtSR4wn6ad3w8fUpKvs1WjXuR6tqixpKYrEGcMCwXZMo1UKU8E",
  "key26": "4JEJJiBy4XJAWnQ9mXbKDsW9SB86VZuCQDAireUCchByr2uXxpCBNbVPgTqhbVYBCFCg88BPuorXAU1JrDHp4ta7",
  "key27": "3BMEVFumRw6GzmyiyAbxgUUjFLF6qg7UwWrHtRVcTNNW13M175fNZTvPZuWkNJCUSWQkj4bxMUeq2cV3gmCUwTqw",
  "key28": "2sepF57r8uXcBhCdNkQQACQ8gPFS7HWPqqVw2Y14Bp4WTjtPg1GKPuNXGwvejrAsJ8J4MGRpFpqx7zVGdZg17RT1",
  "key29": "4R3tgPfHnj7PHUHK2ZmYmftQK4pBm4ng4rzbuwtGuUtXu29sprRkLXcHCg2kgorHv8nSBggj4X7UAEb25kyrxmYy",
  "key30": "38ULe5ozyDy1Boy9q8y98fmDimDuvd3JFk3jXbT2qWF4tZLcSPGvjTjhfD8jBgif5kFQPDSAhuHP28ZXZvnmCzw5",
  "key31": "33xxmGZMcWZykz7p9fJA7oo9o7A5EeV91e3N1LZvNxJzzAEP1Zky7nEizbzoYUuvaUq95gkWf8PkKdDZGKmFJ755",
  "key32": "3yNxv4jWZ5XoNAzkzRVAK3dNuA99N7c83n3vuCyJ1aB7sWKy33DDicBthBQ62jCLvi5tfVqMqbpra6mEhFGAfmBf",
  "key33": "RYKoK9KuFjYN2tKPSwD7xQh9bh1GxUNNcvX13ZZisv3KKWtFUfHNRpZg35QhS5fjU7LtAWnZNTG8ReMKxn1yyZQ",
  "key34": "4mkXeaHydNScGsYm9teDZydDmnMA58wkMCBhXHL2WK1uBRBQ1KtLRrMoADm5s1qFgDsLAMtsa5qqDz7vBcRXZQEB",
  "key35": "4VGDMXNjwE9kv274SWFfN41m3UgN7VzYqx5iARxDyxQyhC7SjHnL8DqqBYPNbWchg4E85mZ3WK3Npn5HrNfvZCHF",
  "key36": "2LXdVsurztPqVdvwC6fK1rVYjq6edzWRwFg7dZGjSrrnpgW2bP2SfJjRSTrcfvWisZC6bGENUQLH9Dzc2HvPuQKx",
  "key37": "2urN9q8WVwVkWTeSdbR7p2o6Kaqe7yPUU1fzqoarso9XP2YhpVVD1bRUpMtfBvWRryYX6f3eGhBEG3RVDikewiTK",
  "key38": "4mQX4knpJZwPSskyvXDRE3dQnbmK3NYB5iNGvYBmBkuZ3mhAerPyi6qgV81ssQeiLcu6RCAZq1jkASBFVXeqqgZq",
  "key39": "2RbnfXq5BAn8vwUcaTLVy4jFDJRBs93f317rs5RJ9Zd5AznRnRNLA2SbcW4rRtUJHgQM3RKtZQs42oipMNsZopy",
  "key40": "47vtXAsk1qFFTusSbNoVrZbyMrfPnT5S98xpAMKXP6vQvKvcSsnbZDFX7nEqx6TtipmyXDEYBA1qtskNYYWoWzuV",
  "key41": "2cY8U5QkBA2xqLEErD1fbfMKi5ND7MtDjWUyUdRgMwPuvLaysf63RF6atmWiB12shXK1i2svdSTVnzA1YzBGzc1U",
  "key42": "3DPaGAgRXkowKYPHBwfnDbC1CDHZdAA3dkAvHsnh8mHLCkCVgzetXuayFtytZgLYuy6rsw5W3RK2njTkrgrucW9i",
  "key43": "4npFZnEKYY8jUGZYvj1piY6qV4oKQcxiF8HXe2d24Q9AZnrdAim75t8UCGSugKNHrmyqFsST4zQwR142Ptg269fo",
  "key44": "2BWf5YaXqkZB8zqBzZQFcVSEEeaMo2MGWVTeS1ptoHjVT7C9wB7PytE1DTk7eKq2eCcXpCABPcJusNRFQVjrmikr",
  "key45": "3G3iXNZPpr2tZPVPgXm9Mo3dZXDpNxit7UviBGGb1oPG52SVpjnXm5BE7yvckYtfaR5Pnqd4qyGnhue3HV8s12u1",
  "key46": "5fYkh41fg4agjPMV9gK584H4YTEf3YM3QvhwtA6MNdBm9UCfDzSKeqnbR455W74ADYnNXywzKSvjgUEiSWmtWEWS"
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
