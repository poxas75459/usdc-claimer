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
    "4v1dSYgfdNFxMtNoi7jAmed25NPFxXZexNtbYwWMRgRw1UaPQfNeHuRQfbokoyBWH1LyF3CDAJ1pxzHA1UeY8MUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvRDXQckH4x2x5GqUgAh763zLmDTN5KMDqSxCQFwLLvxiFXxHFTFogH9H73ziPFzbmziWNC74JUzYutgB6CHfXK",
  "key1": "UYpD4qeaEoh9eQ4Y3Sz9ZMairfeVCNWckTiNxigNaUYt68p9hLNof4LMPMLxZbhERXnP54N5Z2WGtkiQzEov7T2",
  "key2": "5XdXN6KDRbih5VRW4oBABj262MqUdpXVMd2BbYi25jkUvnFWj9LGtv6CatUKL7FsoH5K9nmX3bskKX4rR85aGoip",
  "key3": "4YTjYgNvUDf7JwkoH3u47b4U6YFGuET3kTtzK2TZwCPyQ7ga1GvHYCHEvVznirNED14hSyz1iPVmPy9GkToRhwqm",
  "key4": "X1myuWP4NJkCqWyTvLa8hfHmLkjUgGQ4QoSuZaFNNC8LrLQp9SmXPgBczBsk9NdqcgaF6fyUEkDs2ncXohCbSz3",
  "key5": "KdDL5ULDGk7x5CsSQNfKLrnV3fHQ9pmT4frAFoomKUMeVTa8NHsZ4PSRL6MBK9DiKXoXxGKWKT7Bw7KXUuPzmTN",
  "key6": "2thVYra6C1mxYJpapwhgVL8h7cMjtFbFskmZj9MPzXhh7cwZPUG9GzEPQXNVwWtykTcPmBBMxzwxaHdgtNyZuSjn",
  "key7": "27KMqNkUrpp4Npurd5EjdiV1DSMN6ZwLcvQn8Jafm5tz3XJ92Gmki8Y2rAHitmpRL3L4a4a3MZ3r6dvGvJUQsHke",
  "key8": "2cNFDY3vCfM2nvuNAWVjrUGqXx2PcwySoLHtuwFqadu1jWXwDgez6TbKGK4guoPiwLakPaex7CrTaBbMA3vvP8Yi",
  "key9": "2oMPxFmkVujdtp35ffMZhs4Em6TETdkjytBYQ3cuJVjPAvyuUqNGNPjq6xpRFtnYBJzkLRpSveLZkjWGB3URuwhF",
  "key10": "2jB7i6eCj4Zegj84PgVCGarSV6SoPYj1gYULWMFWW6kUz4BsNnmDRw4HnfbMrhMwuZi7fGT6ekSYuZ7MJZiELWN9",
  "key11": "5tMWmikdwXK8ELB21arMy1ufmkndcwYNMAf3p7X4tnz3G9u9bVxrV1tDKSH3iDryi4DjvXgCvmgxcBSakHieiGu5",
  "key12": "5dXjBRMW23TBrbmEBQQX3nFVLHEoaKHxmGZHNovkEx7DsTMuxR7YnNxfeMBjSbzmRsgMa4pmJQZUD3xtbKsDr5Yt",
  "key13": "39J9cLRmN2Vesvpw95NyafsPX2ZVG6hGc4VTaP1b84gejPA21jQT9faZAdQNrrm62t7AshR5adCt96nUQ5ipHK1B",
  "key14": "eAffsqAkXUM1YoyWCrSRK61s4D2b49LZtdj569WDJozfSHaPS2eoizwiPbPHyYRTJHWgmGobTfStx98iS3R9R8J",
  "key15": "62iAbH4WvDHBL5NAGLPGo2VueoRr7FJ8tjLz1EbRbqMwtrnMp1UrXvBfffEymviAF346zVr2Phj9Q8NkwW8AyKHu",
  "key16": "4TqbAibJ33TCxwq3QgpTzrT7bXNNqHiafUSNNR8fQPUG7NA2pmVK1iMUyQmLsBYtvpfzifyo7cQyMadc8tfiwbwp",
  "key17": "51AM4mAzBEuWBBWuzUgEN8bD2F4YFfSookrngo7cY8L4bdg41sf4TYf423DusrU6FP3h7Ksc28ZHKu7RGsYNM3NA",
  "key18": "3iArCgY54UGnCrNGs3HMQqdGqYYwDAcagyPXikjjUSA5BvoAr3qvNUbu8w5mFfME4cH2T9xUErRgDdD9wKaiWgfM",
  "key19": "PcMv64NtMRfmXDHuEoQSVFjZKTPnk8ucYCL7TjoxKw2NAiPT7EjGacwBvj99KkpQeBKceeXxZuMyq9eHGUspKyo",
  "key20": "49wYj85w3aA4ko4Y23aNoy8zD5vFLKaB4kUPUThC572vmBcjdvKA5pn1vC3cJAVZSxSQezcMiH4MREqwsQxJTMq5",
  "key21": "3n2JyCgsVx6Y934gWpwVY5xUgLVGXD4bnjv3WHPFJocxjFAtLSJ4cqXqjcQLrnY1rcRyaUdFSLgDvXjM1v1HiZkq",
  "key22": "3xmnbRhKBS4GzoELvMcNNPYHi4yqq4H5arzqQxGBdP9rKJX8yVKgVZH4gKBVCMpuKXnb73tAVPjPTPT5SPv4eRDk",
  "key23": "4yxQy9P9RqJdcqmkVafFsRnczTkD9pm7EgvAJJqmaZY9prWVGzrhQGYw7b3JfxCECUkkNzPeB9KEyXP9dDT7r6FM",
  "key24": "2TCB8176EGY4JzqnzLng9JQHj4zoKGx5rUpsMKrGehRPgyLqhepxiz1yb3WwKVh41FW14Wruzhd1EzUiHrf4RtrL",
  "key25": "dADWLFsnSYFy2DizBrPUdqFJpaW8DtSptnQt73z3nEqYdTCgSHgRtgJzwiK8XJa8r2ggPo1qYeU9mPJgKMmjSro",
  "key26": "u2mohuM4NoSHnGehBNNVLWHD1mnNT9wevmHGM4Bj2gHeMZoo38gjQQQeXr9gx38Es7PHtB8ngrmeJfZAS6mobj4",
  "key27": "2uj88KtwfUEkodN1ZsFkHBZFXsPoRk31KrxrDhhRUEr8qLGUygqEYJyLCZHhsyBjzaqUmfsAxsrBdJjSZfgF7jPu",
  "key28": "2E5oDsesYZEzTDzJsETorCpVkWUGNm52meyYipTFHMLxpihuWyJTm9mchc6vib11HW6MaQY9snL4nfouYsARWY3Z",
  "key29": "25ykcJo56C9465GcbLkHkkdR5snZ1sspHvn23zpfXoGk9x2o8NVfiTTEgpQKrWT39EQ7i45wAeGB4X5Cg7XeXsDo",
  "key30": "2YVrN7375tRf8zwZFgL42s7eY2qtcjhqxZkwQ2eh3aG9WNrjUwQAeTPxm1hJNDf4iFAPhuNoqKfadUr6um25qBRf",
  "key31": "3ciYfkxercgyr18ygcWtAQZEJbdpzVPp2HKczkVuq3RUseKoS91Q4P1MFy1AxDrFZR9uBQVPJbUD9qt9qGnyVCAn",
  "key32": "5B6JAsDiLpL9J5E5i3DaU9j6rwQpKg3yCMRxopzarUtHTJB2TuAXT8ko4Wj8V17tzezvFYv6XAvf61cVSJjY849",
  "key33": "62KJQ7sWDhunH9Y8E3rNC8VsQHSeiKTHUAaEbi9CDbvcwSbywYN5sxsya5BMNa3VahH8azyF8Q36ewCPfD33n6Du",
  "key34": "2Ak6D1pJevHm2moi4zXkUCJ9PC6gHtsvZYd4xXFGZYTMLdSv6sPyrnkzRRp7XowS1RzY5QcJ4LZrTGG2Xe2HdC92",
  "key35": "2oLE7SGgfEhEdHMbCvf2QtZfA5L8mMoh2m8V7E5GLMHBsfhzQ5crVHtLe2k2ZKkXDtH2Ar9jFw3XzyJHBXCpSxPe",
  "key36": "3gPqwEKX31JLwYzj34Hzk94fLa1fQANZPVC6eTzqZFLb5CwavuY48D2Q7MSoLCqVj9FW6L8REFgwv8Npyz4WKFEh",
  "key37": "461rz1JivDLprHc3jArJshFzd6ZBgx6zLQfKTBAWfcbQHsK6WagVidKjE66qrX1wwygzPfTsUqhCEJCKTWui8VPg",
  "key38": "2hTHHZKbuAvicxhqgZsSAFXBNp3PrJCQT6pCQdp2XNscASnhksq5LiDa292ssd2B6TRajeWfasKjvAWFqUgyg6QG"
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
