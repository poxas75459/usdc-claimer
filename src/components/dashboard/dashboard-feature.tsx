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
    "NcfuuugXfVAdQqtz8jEai82t6SDQ2u3yFDWaeSGFrjb5G7fiRaWxJDFPmPPYgr7ec6XAh94bpP3TcFyyV1tLe1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c2FoSkzLLJGNxABFYdTceUYFntExFfDjo13cgnCz8M8YmV4YPDWBW1w9Ejtwu7ok1Kg5rJrowzma558X7mZcCnD",
  "key1": "ATcE164jk3HecWuh3AP4W2dqCCTYLWSAdVypkp2tRaBkB4zGYzagS3o3u5sMRhjohDda4Xqrrbstx5VGvV9kcoD",
  "key2": "4Nxaw4SoDx2QmPwNZqEKr5W8UkXdxYEPhx6Qh1pbsiuLg35GX8ueUYTMRbj7vfyCFpiNhq8vQH4rv3WLFFG726B5",
  "key3": "2ie1cSUSzQcQn797g3MR1VbZmaeneh68KC4yCM1pnAdaSo7VTpWJZyPbBjYp4i5zkMUGPUzL2kmUHm3byNmuQHf9",
  "key4": "4CKf67AoAtywtmz8ZVxYNtLxTnG8xrcTnPMmcxoNB9h4rgvt5xnY5dA8u4ZwjDUWCFvrXu3J81VhazNvuzcQ18m5",
  "key5": "4XorgsT3YdrAWucD5fUMvsH8TU5ZvBgHqiAoYqjmoe8aBbj2R2aAzExeZAbeHSas3tSeeMP4TXCVsRSoXrX5xkCR",
  "key6": "3xP8PR34m291YMGzQ3BAWN3jNfpnPY4CA8CLQ9x3tx2FytQ1TBtYmC3R3ULhaBDrrarkx4JXRCypfzGgiSTSMUhV",
  "key7": "2pNkgd3BQoVzcsPz8fRR9VSALYC2PLWG4K9bmbEd2Ds56NSrJSKwNJeAgJ55SuvSFJL34mw2baTeqT4rrPLXmKM4",
  "key8": "vrxpGJrqkkWKgkfX9powajEdTLFzhKpGVQYBMnga6gVYBYwtNk4obaLWkpkEitGNW4rndv87WuAZYKhV5y5gxaS",
  "key9": "rEdk58ZGi2tNrRj8bQa7w2HS81dGyZgLT8nsKv8WvFk2d884RTj7tqApcGhfEm3tf3b9FScjPguq1bALZWnbNEP",
  "key10": "3irWFAWN52HpD6rHtnTW1BEgvgk5UzqZqRxbYD8qGMeN5CMGBQDj3T7yoDgWvD8T67FwnGSsM3Myz7dwAae8Mm8Y",
  "key11": "5JSUrqF6h88BfaBGxeY7xap1sUHNcW8fKjorvK4XNHARLpqiNPxF3SJq9J6WhaE6KTgqq38g4KDump1BpAxAf8Xz",
  "key12": "5wgUQrarWzwWaDWvDxWzgFCQJCq6DrW2qGZDGy9NZ6BoYhdN37ZcjbH6U3eX5B4kAsuZuitNLosjPDBwMpmk626n",
  "key13": "grjBmAnRyFsiykxhFEsrupQWPFUCFTbvQSeAJhBWRog1PFPe2DtCHEQmHfRJVKcHkoBRvcpdQbCHNzKazyA1FAm",
  "key14": "MNUbXME7x6NGZY2wN9GKiYLzvswDkPiSGodG3ySv1Psxdr4rdS6sm3PP25cJ8E5sTrY6EJf29Ahuk9chnidXi2Z",
  "key15": "3ooCoUQiyTAMySDRrYNSk5hcg8SBUHEmftpfYnrT949PjrkJ3qKjYPMeZzaRZoVFjekVGmBtHxZCtp73rpHEYGTX",
  "key16": "LmFfLCi6bCtZGGLW8zkvRnEep9YHhUpk7jNAJoD84wKEmVYVoGT9GWovQw4FTqSBneDAaJxvhZczddvxV6RgiQ7",
  "key17": "3oQWHJNiCd2a8XWgbZZkr1r8XYnosC7TMK9dS6rvJD62QuPn35fE5Gd5NYC3rvXk1sWGc1vgJSwXiWVBkDCQ5tpP",
  "key18": "Vfrffw4owJLKtJ3QkbGM6muroDo9xVWBv2dLsm8K7wCZgx4k7tw2uTeLnjjhvFe5NqQxNDbFU7iREcRi5XATJ4Q",
  "key19": "bVZm3cFxui6kyqqhpnK2KAPXCvswAX2tjP1R47Jp4hNQ6FUgn8UQHgYmu5BgofBp7TPh5WLi4S4QiXb1fUt8h1z",
  "key20": "5dm2xp5XTiEJM5tCYuRfqFP5ez9EtiBw43ZhernVX7CUprDPwj2gNhyMME3AyNiAPEzCSYs1C42sKJpE7MjAPcNu",
  "key21": "2sJAryrEP9A2y8sRPiTTvkxdxsoBw8d931gYQF2rGTKtnwQ31M1kSbhKnQgmZKqrUsAaeVabXMqdRoQU5BRPyHyE",
  "key22": "27yUttFFQaguyci8mByqXE3N6NH9NyD5oJPcPUqN262me7SJBpZDzXa53inL7BcuWfHz2ZyGfhQijYre3z8T4rXY",
  "key23": "5ven5ZJV8V674Wz9pzck8YGu6bDqHr5jgiwdjEuZpWac2B7mToPzHTFSP45bUHnqVkuuE94991KLjxR8xJM9M3gw",
  "key24": "4xffbP6KHLk4AEMD1SnRuc2XT8RNJaMW42CD9E12QZLbsgWPGiuLDwdQEdiBfYHsRBWznPobuW4Dk6iibRyptapA",
  "key25": "29tiXzgRuGzwZ8WSkScbioXc9Nb649tjYexiWh2QzL3X9A2mH5i5MNkYGyCeLhTLL7sKmSFch21J7NeS6NivDjf8",
  "key26": "2Ay5r27EUPEK1KrXGe8SrHZHCPX7eSkGe5Wmcx9qrThKY1R66xCKqP2HmciBRZLhhmm1ZF2qiv5dSxGT51DwMNSi",
  "key27": "LEkMjMV66BZH7Yc64xkVAPnoeG1vBFaodQchfsYsvMFdcjLsoaUMtyvNaHw8vA3ogLDZmiYexd4NuQwR6y44XBx",
  "key28": "5BB9cHfggxKqg7LXQVqSyLgSHN6ba4M2cufoaQ3xhp9S8LDUaDSX8rjHT4eCsFoJCN34ogxzuFUZY6kQ9TYgHmwW",
  "key29": "32K1ShMcwEor4pFXyNUUXTaKBRgaSab5y47xpksq9iDHRKaVB2XsVLDXS65eZoZph4AsQRDCfDTTU6FZCLQsZSjZ",
  "key30": "2qhnXNxPgxyZcdoK94aXoUtEkxbrM9EhH5x6Wc6hqpR3GhrSePPUSbCLswRDg1ShMErzqBi6WcncYgnL3VU7Pphx",
  "key31": "dkYkLXNw2EmnBmKdpPi3sXAW48o2CrA6cfa91GHcF6WKVFJkAFU8o4A5uy1sET7BJYRSYJ1q1wNnBGQb2TFaTz8",
  "key32": "61WVAfUZvvVDdsqra3v9KydhMYGx8X9SzG3TbazGQ56FMBFSmNm1MsEHUU31eDbE5TPU44tbSishg1MaTaPnrwmt",
  "key33": "AptE8xLNa8rCJkx6UhJfmiTAAhnZJw2cdagujvvUcot1tZCevhPt6ZDFNLCr3ZYm7z8FQzuDqqNnTrzbDRi7avs",
  "key34": "5oQFp4bgH9QuUGgDq2ycRzjExAfmb6StfeLQDB8yhjdhzsAeej94b2jz2jMUBfZsLN6H9shTWBDrh2zyBYU3eY4S",
  "key35": "cgRPXrqxqB4ob74ZXmH4UMFR5XFNiT3JteeVzxSvTRHsDHemxwkMJTUxhGhDf2XcQ1XEN9CV3M5BNYVRdUpGUTg",
  "key36": "3pnLG2njjtEWmWY9EZ4RY9CF6ytgPgzniquoHgHdWXKZvF8SAjynYPYSiGCS7e2waZLtyMtKNYL2srAXTJTAjeZE",
  "key37": "2qxbhfcZx5RnDzwxpCzYaNWJCx85P1HXx8QNR3fQVMxa6HdwJ1HPfATWu5iEzz7CYCAN88GhWXNhWMbdRJosxv3R",
  "key38": "gQPhCSJ128Qw6QczoxWfj1jrjBKd9PBCgaem9pwhiKCXBBGFsXHhy1c5p5sUMPAdTySTqaBKzQdcWx2yiWJheGK",
  "key39": "3fV1NsNLNJJFzPiEoyQ6VHEDd3hZU9prqD5CrQes2v9xUMyPMREvo47KFt8oM9ov5dYK2MdC23QfpE74PGkcmVhF",
  "key40": "tmN8bspZ57ht3nDjTtMtmxV2aZ9g5VRPyPsPYxcCFGaRHNdYZDWxT4ofb5QHD99TbPUXYJofQD9ZCUUEcVHc1yz",
  "key41": "yaPm5FgpsYz6oAJ2m7aqfKsjZf7rxM8Zbkw48ongdQv1jghyB2X5A2CTr2EWidFBzwkFUSFuDqSDqyYU2XHjYPY",
  "key42": "32bC68dmhPJRj7JhJKSN4E2AF7CcjZyHJC3FvXLpeQwHodZtYkCpJRxuBWLfCngtFLk93ntGDJoaZr9DRkn6pdUw",
  "key43": "2yv1wnANiZBQjcGsNLU2XN3KW2vueFKkkY3rWJo7zsWtM668YmgCVq1ErVKCARpyeTUMSRGCnFQcjj37GibNdKQ5"
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
