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
    "32CeR8EkjTcogZAK85MAEafkhg74YqrfRQ6NwWPiLqacC8jUK53JzgqK3axQkU11iACWuyuNCZNhoFwdsjKFa6wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pgY2g8CuYxE4A3gaJ3Nzb1EiBpXAVLDxD87dXVLNiyxsPSpgFHMayMtPTa4GjYxppjKaQhCFPDXKWYGKhUhAZU",
  "key1": "2MgpWkaWBTFYrr6Lqi6j4Zh5dQWxbRGXAxexGDyCnStMkk9xdgaJ3qMcSbG2aKhRGdrVwYDAUNQo9BEdX37EAyhd",
  "key2": "5B6A2NQ9w1EmxJERmswyUdpXoT4NUgFCJspGsJH62nks9gP6ZSPAp2X1KkJJ7HRKsgRyHrrPMex4bFBo9Y3Gx7e3",
  "key3": "4rqhvEs5gXBncqrKFpeCiU29PK86HKvoNL9uGT5mKbNPpju2QhiPmjhmMYqjVgBddX63Lp6ZMrWEG3GpDafxYEEP",
  "key4": "3oahYGFJB6QfSS2HxDNxbTNsDpazdsRnjrYaBaiPVfHaJUB8y3Zz2ufTXcQKFojLbMQJ4G1rn7iY8Bc6nzoZfvgc",
  "key5": "4Jsw9gk1uNVNUCyjZkrXFwGiThZGX7gLcWz4J1hUZGSEy1VfzX2KZ8B98XsNteU3YG1ZVhr9X69Uu9Z16VopLGYg",
  "key6": "2SnwkuaCmFaZn1g9G5XjwoN7Es3BEL9iEM3xSEYRW4QpAMgJ44pALzWGpsgfnFNoppRT6LhSaS9gGPuARnAZdceX",
  "key7": "X7UGfcGE4yFm3BKJtZXCYbACNAcSNugJHmBJ6exmcMPdvXaqqb949rkNMUjCUXX1VtRavjxGjNdaa84DKcEvx9X",
  "key8": "3veyrZcdwpsBqvUbWyQmwnQ6nWg8BZ8cXNGYM9WdfwxMTKkasDf9Zj45Zyse9Rmm9eN2bFXSELkf21JayDBoCJN9",
  "key9": "33nqVEeNke86qddBeWpjXgqzqd5Qx6yD1kFJZ5LbcUFHXyHnWxHD49QmPzVCe1gHFx1G7FRq29igkyUpwSVixKDE",
  "key10": "2Z6ZR1dvH2T722gMrekpWDZHBk7DmebyX8CrTEQqNZUsXNxmXL7k3wGDPe28575jycYvAoQ3ibsx2bnF76CWWDhU",
  "key11": "43U4cke7YFxWiJxULidXgNSPf7DradMrZmDNyKraAc5RWixYgVpXHyh2cBVKe5SJuSpMJM4CQrwRK7Wa1EL47uSD",
  "key12": "2eGo87NrH2DAzBENuEm6aJg2GjmFRsvfy2i1jmMCysZhu8Ew3RGQx1kmrQctVfTUKR3pk3LaNN7SrvEgTeLRHyFb",
  "key13": "2p9sYP98MedF49TJMZhrBQePqRUyskgNJAPGsFsnwQYLKiGYwxhphFMyFmHcvKf668Y4FP7z8CcKaKwq9fi9pnj5",
  "key14": "4CWqbPR8pbymrj4NoygiS3fD5vxsAoFUVKazWsiXszQkgZnUncsxgU9VVjcrAo11hQSGeUwCUWqNyNMQJpZRmMLb",
  "key15": "5qfGFS9iQbA71tdLddQsucrgGT6Juoc2sBmkY1joUBzEkGabPULgZJiFomXPCpft25YWua2gv5zTws8Ud8vDq37S",
  "key16": "4wpnVvH9BbkUjLxpTYri8LFsYartEqnKToxqZ2Hj22ApBPCpcxuTbeFfcQqxaBfaejXkVFPkwwHh3NoJcejD1rSR",
  "key17": "4AVpCAjgfLFFG47wFNizaEvsbEDBgDWp6FAF1YjEpx6tKzaadzWP5zvSzkwGyaoV7GBTLqyNkf9rscjvopRuq4xK",
  "key18": "4gfkPYiGzMJf4JPdb2HygRuxJrooC9y8eS5aYL1frgEqa1V5KUgvNUZApK94EAN37XiKD1XxNxesERkTZkP6f4HF",
  "key19": "3rEZvZjC5Y3qwZQkCQw7NkPbM2R5nVRyDna5GQYe5P9ojXCL8ucwFejxDo1XEWLkPKDnB3bAzabiCxDA4fLnVNYe",
  "key20": "f14igv8XohtaJH1S31vSiKbfJJNxCrem85sKZejrfVxWS9ArHujtVB9RQu6t3kzHTtaqHzzNHyyEN7gSVc5LY6r",
  "key21": "5LJhrhkbWPpkvR6qRfxgupfcWSixaVwJRZrQGfQB5X1BXeB4eQYnwj1orHuFRUoQmPpoGqrKy97vb3PK86PTtHAu",
  "key22": "43d8zmns3tJDYhtv2zEpEyubuLUtZHGKvUPNz7x7G8dEMEGUBHKS8p9o8fExUa5tPsHXL5te41ugtcTLMyKwBghQ",
  "key23": "qpfpRvSNtokhGJ63Hqa5yGhEnFXdCJbU2zRebVp3JWVpz1mDeBfEVHtabwHDx2y1g8wEiC4UZzSv7tiNCyYMo7n",
  "key24": "4YHKofGcbKY9qPXDsNP4LGKxwkfZUGosuKcmjYShXzwYju7D4em5HjUZ5KrAiiY9BtvGTt6tnWAcQRigQFvsCnrh",
  "key25": "3efVuSDLs2t3GJJXSGpVrsUdjaotjpJ35PhkaGyUtDF1M24tRy6LT34MWY3YVKTUbTrDtxmMWCg2tpPfPcGoWw2v",
  "key26": "5VEaPskcLwEbRmpBU46E9UMoSPacTEnjmW5uWhvrhgFqSeNzgE1AHFxuSCK7BNN9kdjMF6qLUfbuaybREmUc7813",
  "key27": "4BprRYKCKvafp5JXXEYQmRajitQ8yRka25qzrxYUTEGvX8QQTA7F3BcFLMdj4FksBhutJwfLtgAKASFgFenh79qD",
  "key28": "2ij8dfaXjefVBAd9yQouHyi2tZBVGmmWnDjdx44E4s92DY8WkHD4stvGyJ5VR2oqhU8tiSt9eRHkmKeXyrs1r9Gy",
  "key29": "2YkvLoaHvqGbhmP7ZCyBKDrckeo6MwrnnaiWx1kNLQhbzNz4NwDcQ8mVGtb2ozxiCiE4uYT4CR1SeQp3qqbvup5J",
  "key30": "2K894qQJuYfMZHPn5tCzvPNv88W3TAWjpWNtQCkAK7EbQhTaWL9NAVWG3hZxEFetxU9Zs4jnufGi7HaEUGArbXHz",
  "key31": "3QXCnGPD2p6Cj6PmvriJA1nFWaxYUJPAbByB7vYhgoVpuBiCBAg84YqWKwNqFfehiXZPNcqo68xFmNJkqDyV14hm",
  "key32": "37X3Q8UEsfcrE5uTA7UZTcMvM8Mh387Tx7x9a6kpt63cX6LvoBwNzQSYDh6eMJv4CBwNhSqugM2QagXjk86r9qvq",
  "key33": "4fEXYBwnDaGcjd87XJa7mgVzpDBWfFiQ6TNNniisYNVopGJMiJ9oZT5N9z5tDTLGw9UMqgpB69kWcN44mauc48au",
  "key34": "4PhA7NCPAHxmUVSnTgGNaCueHWnFw4s1aVwdzoxEvnCcwGcWSZE1R6vinTpbPLrinrKbFMc637AD1Csrsrup9fzG",
  "key35": "2E3EXfaa7qFnDGkspxsagbxAK9aburZx5UohVkNxxu5ePc3kAhBpga8ThQGk3QYAHfbuhXNvLDE27PyQjcxUBNF8",
  "key36": "3bp8NsbeCsQsKHC2j2QzpxtoU235gZU348ZRftCfs54EMQi37Yw4mQ53hYDLrPjuHVPeoXW2JsTNViHwP5CTsYV8",
  "key37": "2ebNj2k2xCwGc2ZqGnyDqg7M6jzWh6Gug9noBQWUPiYdnXNEwewR5BVNQD6KeBRwqFgnsmfD12n8kH6enCQAQxme",
  "key38": "5TwFNGbd4A75oPKDsciUaGAhZzKRkm96YShxJCyQkzA7i4Nm9TAVbMbSQpGrVxpMRgAmQWYFnAKE1CJMxDzUVWy1",
  "key39": "2sH3BjsRRzxPYGagP25WvS5gzsWdKXC8vo67a6Mq7rRRAH9J29SUPczM2UjjF4GDvGCyfLDEAzASDi4NECQcmL7H"
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
