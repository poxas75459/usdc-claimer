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
    "4Co397UrcQKCJHgn7opJbbLAF9eA4E5crPN3mJNg1Sf4ZDWy7Fg5UffQHJLXVvbtS1rU59zfqRik7Qp6XURbtYYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PoUYt2cxYxtYmDxU6WUMsFe1B4FtB4orbG2mVAWf9hyecnFTaiC5wfwbgoCC8rX1K9JBC8rQpHNDVsnBSjn7myX",
  "key1": "2MCq7HCjWokSoSUAH1NP4CbMr36uTKXfVcAiKoRhFmfCQoSB6imKDPwPtUu7aBmctJHXUrp3g4muovELiHHtgbhj",
  "key2": "aDVm5HneChmstCv7dwEk7HHAmGNwK2UbczjBAkpJ7VR2NAduuHyShqZFPiqLvHRUVTpFvwwFaG8NDQFmGcynonV",
  "key3": "2Pc7jbiNK3KUkqvb5L1jKTh1pBMKGDqQ5HsxhaxZxp4wtEwDoC5KjR487rRZU2dZ8y8yWc3zFKJ49Lmma8opfXwR",
  "key4": "5yjiyt2SzBjUQ7ztTXUyWcEKgynCBmPjpd36wYGTrE8vYk5bRte9HEG2EUbX683MVn8QgK5NiRXzDrc2qUCGk5gK",
  "key5": "3jPsPB3YtHdooEi7gCiVFLJLLnevsbLbXbwrA7My6jnzEfjGGs7DnTKqBpepGnfba5js6h9BERXLvAjUc6S9seUN",
  "key6": "67NF6xyKhwHeuSVGyGCJ21ZWUrkRX5U5SqZ1LWJY8VvWGNp3tg27mwd1GyEd6bx8MiJNkH4PWzYVVFs88fgNxydh",
  "key7": "3im4mrMSBLx9Up2LS8xB6azT8UnALCoe3rpdYLvqBB4Jw91Rm2w7QLu5Wvu5wL7SKwqnmJchhWbpqsybQiuqB4Wa",
  "key8": "hs8c2672UGtezfpWMBRtPGNXaF6k9FpqpD2YsF6uQsZSsAcjKbLe61cZPyZgq2sNMu3MUoGjfHfaihsEgPpdeaQ",
  "key9": "5YyZd3Zu4YHkSkkVGuZFGuuY1JNWoqydZcdr7pRjTmoqVizpCrmJtH3KDMYft8AhdSz4wXtFZgZmwzhbrYw3ZXNW",
  "key10": "nkpVmt13YD4pLiwAoEESoNiyEqUcRXnW9F8DNPRjYvYg9ncRh1WqDNib7S1pMHx3RaXF1hYasA1G2rWkA6HUuWE",
  "key11": "zp2g13639aGwAErYhPpiamTkmtXsjG6NsGuMEWTGZQkNz18PEkC9rCKW5Z7tAmMJmwxUc5wfyx1ScBdFVNF9YPt",
  "key12": "65WRkr4ywvcDbDwGEtsq4oeH3w4Wk9stkUXhaeNjf916fnUc7dou6LXW8FztcRSf9P3F4aTB3JXDmsVNTF2WXNic",
  "key13": "njF8L3pm4w7sjsbi7iCWRjtJZBUcTt9jJr8CQ5faST5jzBxaRrmXwZHDz6FnrLAKJdBAmFNBGJGdwiMLpKo6sAz",
  "key14": "3pCUHZwENDMC6HjJ5PmLSPAvDbcJRSqGQ8s1tA8CtBrzFHzNHvrNSVLPx4JTi2RpMjZ7GQvQBcLjzTsESg2XvwNu",
  "key15": "2VwnNSB8TRWWm7ZLhaB36iYwf65kJu4s1tUZM1NGnYN3vUdHxcD8NUUCPLApfXBh4vnDsXmwEt8d1e6s6YydS7KS",
  "key16": "3fNiXSdX8c4C7hvZcRzCGHu7ESPLUMVbT6YjQmm5ZjbrpGGGQ6ZFYftL2JqDXSPDZva6WEgsu44HPkTpE93Jt95d",
  "key17": "5Qf8rrpFxMjLmfmiPYzHwsLLkit7ij75S2XtzZg29TBQKrhC74x2zvWnwfjtniRhv1i6qiRskWtxVCTWahbbqcn9",
  "key18": "5qpwBpSh5XE5ApY92HcuMH8H3o2D3d1HCraAfc8rUsbKgtbFxxQiQgeJ682BmJri99bALaAEHavLZdUbhXVH8hEr",
  "key19": "2TGs3g1NNBcgmisFdKyFrV2eaE3XoFHLNhgUdMfCnnd7h3ULxTEYjoBEVzH1wj33Xj5roA3azX7jN567o2kTE5yA",
  "key20": "4QijUTbuTzau5ExzvwMGMLzwZDBm3YuuziFWFPp3ywoJG6Qbo2EV11Va55c153bQ7CQ3SDzYJZeERwrYcJygrchu",
  "key21": "4pdZMSnDU733n2M4DhUNY2LubvjoyD2dCdEJwH1GDnuhA1ZPW3anYHAjiH8aoTa6JUywwmLDHyCjN29L9kxVBqNn",
  "key22": "3tu52fPRZoGWd6WLzkmqguCLwoAWkyHJFpdUyNBdaavM5JPfuvAe9fEZtxTbnuCFNxMvFaei27Gm9BJd8SFDngVs",
  "key23": "3rnowk8uQC2RGhfcVyRMy4wk6QxoxJ6HxMh17WeXNrVRCKCKMNjqjNekRtARGGw6q9okn8whwmJSFAjU2TCBJKtp",
  "key24": "62qHuyvVmciSN6b6Fkx8UYDcvPY5AvcMJKnknpwZZ42UcjQRe1V7qABEhQDJhiH1QfPYcTFpJWnazM9Wok3vaZQo",
  "key25": "3c4Z6h7vtBevzmPi8k89aoY5nYMosqbWThLAdxXjYedKf8ZStA2XbVoPa8WPyoogBuUXD93GHLiBQ3rRbwHAABTQ",
  "key26": "5CqANUjTZ81zS6vARrAj7aXPQ1eGvG22rzC9uuW8ZhfBqrZj8ekkvYUrWa1BWrqHU5NkJVvNpQ6CtAGfpjmm2twC",
  "key27": "42v79mj14Luc6XHNL2mekzvpwHMWgEuhwjZaUTuXkk7mqu9A61z9JEQCzAkpj8L7y3ZT2javLey6LkTGW6vJBYkW",
  "key28": "4WWMYqqDXzHoM5SrrhvhAE7EYcpXLwkv2XunAW9hAf8SvVBDMZiZpyyhtLSWSzrCoKM4deUT4SfHxZbXpC5pvF5o",
  "key29": "5hHHaooRFfqCqgM59xZrTebxvMdTUu8KCAbmNi2EQP2Gs2mYEAWNKwt9a85X4ygYyKD83nMzpC3FfZKxTgPGSCGd",
  "key30": "fs6E5ezMmtJy2xPQdrEF2K8L2t13NKMKfd9VmwCXT4pAj7gfYU5kxG1L2eJbeM8Fyw73KgBTns2DdpmwPumJNcG",
  "key31": "4284zQgfDoUEycXP15jAKq7giXN9cafdoMfpRwpJ4U5BNvsFCAEukq7ffcw8Yu3dPjzwqKw7NFjkSzpQjHWzopn1",
  "key32": "5GzpkmFTQoNyYvwdPtWoVAVuxEFZmqebSSbM7SRhR5D9ksEYwzMGbmZKjMvyU8AjQA3G13buCnhjFxMYnbtRJDJg",
  "key33": "32VdpYsbXauoJ2GUQcP4PhpjmVNSoMzEKwGPhuZpEFiTrYb4oqvphSqt1YRhS17rVDEd4c2UbjDCWmRqMSA7Vz8s",
  "key34": "2gkF8y9QgacWJypjWbx9d9xH8G4kCXRaMhfgSpv58d8UDMAcPidEFrtDGWBRnJb1McSDHnzsYnssEkkAojd7iJdP",
  "key35": "3p27YEwY8XZdX11FByhdTBHSVppFV138bNn6t9B7TsFG8wBShA1yc9vnmzHe8dZU1EbXuJz64QoncUXHUCss8XBo",
  "key36": "2GRksXCB3WXe7k4h9KP6BwjSVWW5mXdk2uqx1D5PvfnFkhnQPot7ENWFMBjjdppKyAVc3JSvb8C2CEY9bE5eBmY9",
  "key37": "3dDQ4nTKNxH5CzCaLxmsD6ZDyc8WTjFMUyPfxZM6577WPQKvhkrEyX9FUwK2FsT8snYDFRE1C8RwzWtFq1EwxQBP",
  "key38": "62YM5JYEM7J9Pq3kXYReFh9K1wMNJ1eZUQVVk9gF8oU92rQFLekqURrbSa8d1Gxf2JxF4HYsvPp2DHfk4J2NY2PL",
  "key39": "jKSgDFUx4GWWgAoTcd7jXEDYUWjnte3Ag2wXoVHW2H2ZPgFdqXPdVzbbJGoj2JLuPNkvaTZ82XS4m1TJ2gwYedT",
  "key40": "3EsPSH2xugucDxKPEvB3vMxCK1h9J77p4quNw5i96Cbqy2dZegobBpThLjuVyvHhmoDp26Zvh7xxVhjK7iUCjKkB",
  "key41": "53DwGg2nM8wydFRVRYaKrkfKkya5Z8iJixy3DwrdWErdXwDvGSCYbsJ5MKeorZAXL9KyUkC1YFxdb5XL5uGFvbY4",
  "key42": "3c3W87wi2EXZTCjK8ZYrqTME3d2Y6EJUVKu5tvUtf8AgQScKxPTkvnsVE9aq2yYc1YHLPhK4nCDp2GwyLp9exRaV",
  "key43": "VAVKZbMWy31pH525jyXjsX4i5XR1kM2xZvvLMNTGKtYGrrr2eGT6q4cKhn2ksvVVuab9aWyCmEWgRGLFmeaRWV8",
  "key44": "2TgprL4eyk7sRFPfmJiigMfrRvgG2opv6g9w8uXxVGiVrCXAtsqSVzp5aXR9bPNbkaFRvvoSsjKjarQSmBQTjq4X",
  "key45": "28QFFAj8YHV1cn8VFgV8g9TiR9DnaTKkz8W3ZeMjUab8RRRxiDz5XP1h9jYwzhrENpomgdSZXppqrSbbrSv3Xh6A",
  "key46": "3iXKsqPUqsNcCsibhcinyouoq9RCUwxZWbHp9ZGpV9Cq3w1PxGGcTYgH7i3x1zxvGj9Y3x1NpnMCiNRdQspcnpqU",
  "key47": "4ZggYCMSbpaUnSkKdioEHJ563oekUcNPfvTBLq5uhEwrtCutxhc5rdx1JUjnF3byZuysUAjmAWTSPMp4GZpy3Acs",
  "key48": "3VjSw6tyHRDxyjE4mFXYcVeATubV1yWUe6wpvePUjMUvHKk7xAYvfkLGWHHkdfiaW9QMsGxADzX4eLgUrfB7m2My"
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
