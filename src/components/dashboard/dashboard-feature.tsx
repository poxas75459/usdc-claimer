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
    "54B3ndXLff1DFWLr8qckYfmYGDCs5oGB7mQyUbtm2C8A6yoijJRpbfCikg2i8b6HNdkqiAWmBMVBmXpL9aYi38sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W1bi212LAWEuMPGhrCTgaD7GC9z5aS7okRL5JcRxoGJST4TXMhvV7os3MzSyTjLjHVbvGuSZdUCHRkDkB8oUvyX",
  "key1": "9k9VnEL5CpXP4po3ukjpC4UPEPmyaA7Dc4iL7kfAf8LiwQvwKvA5vUpuTZDSeSr5zqZ5b33yAznD2mwshGzqTpw",
  "key2": "3SyEV3uRaZzsx7vAraCjAh5rTybTmGqnQcKNJyjJ4GVfhSuPgEkvz6qhoDJbS2UVqhqCzndfHr9VH5GVR23j5R7M",
  "key3": "shvYtPcPztRiyCzmd1WbwxruYFM9o3kvVdAeUUBTdRmD6ueknUW7MCkNY9H8b62UPwpYeAACB4NYfAuBWuTDVot",
  "key4": "2XC9nM8MjDWoPfbEFFvAgj35zFvhHmWqdA9LdcRrodanBzHdfEg9w9dB86WpVaTW7MpbSQuVvrEoUUXfsYPL24yM",
  "key5": "2iMjrVW4UazVRpCAUmgDDjcQNxX6pZujLiCrTewS7LSH8qTgAEq7zjm3oZ7NkWVVDoJewtubAXiM1G646bQoLZeb",
  "key6": "45AiJNKQUw7gdptZ8meVpH9C8X2X8GYGhZzTbwXMhSDL5maPz8xVxvngpBAiXawk4yvC8UHujCwD3g4iFRQz7w4T",
  "key7": "3Zc2jn2JgKrMYc6sNiPpbQ4E2BFBnqP3Wv3YH87upjcmVMuPv4t3qAkM3S1StSFqvt6TYooFKLsdvE3cyFjbYWLE",
  "key8": "3BCuNc3uxXvujXazUWnX9p1zu45Pi3RTjRKb9WLq1HTQbD9KtouFi8GYRBfovBvkCWarn9QWyNZ8G24KQQQiwYT1",
  "key9": "4VtUecHkiDg1MBcAhmdgrjLJ4ZbWp8azThgYYPLTU5L5LBau1Zdi1yAsY1ZQnBrkfZ9GihqdLqMCTK3sgkpbhDHY",
  "key10": "3HyiwskD2YdRMTkue1UReyLRLVBW5yZCJepKZGBcm2pxDTn9aHwhBnyRiHCWdw9iVSHrijyP4UGdp6Fc99LR6VZ5",
  "key11": "4Hnt19a68eTqxDcQPmsNN6weZL9GXra6YUNqZoYNr9jERk1wMYHae368Agx6PtAZh2GH6MEE8sZUp76AyyzcTSyt",
  "key12": "3dFwik6e1g75QkXcu6LaRS5SRDf9EU1AGRGonVHyhDVxjiP3vjC7pYRspmDZ3rdmewnGsEVcp9dVNiFkdCUoUKfH",
  "key13": "32Ds4h7uggWCT82xsHpQAHBzEmDFwvYd8Zw4C9VdewKErBqoQtCFsidTsFwsEFL2ozoe5g1NvYz22dgJWSpWcDqk",
  "key14": "32nQborvUNBEvngz7kiuML4zztqppCrvNjuDRzdQkivmzh6cL8j7Am4n7TighVDhsm3Uevow7hZpNHoma1pKkmjK",
  "key15": "5G3yiLqjcUfLrfnpA3S8VZYdKMEFJCu9K9SqoyhZADX4KQvJHhunQ6p7kL7PYvtQ4dR3LuSHfpSv2271zfDcmDmd",
  "key16": "3sAgSTtDo7mGnQWnng6Th4KerkDQC2eiD7pwX2X65u8kandNxMTzsgc5tcJ5p3HbjhBphAnte9NU3r3qsdgHRT7X",
  "key17": "iAwewP3euk4KEhetGAYFQYXDveFjorvHUENw7jDodAicqwyN1tPgbXojBHmAB5pKsS36YbiXxzyB1qTR2t7exSb",
  "key18": "4QPcsA9Pz24WDR8QJDYBRthjWoDaZQf6eGEwWcgpiNaokJgn8NgKZzHRt8bzTGjWxhMcBuMqyqxUe84JmmomCXjs",
  "key19": "3FqYWHr5RsLSNfTTdErSit63g3nDxkbNsPvxeSgXBok8LArr2vK2UuFdETmq2BBZ3HZLzPffJsE6iQGKoMwPu51s",
  "key20": "2XFyyEp8oEnZcBWp57dk5Ehc2qpHgjvCv2JDGtZXHroicPSWyLucB3ZepudUCD8NvprazE1TCE9T93yrM3E1bWiD",
  "key21": "2zPdfcEdgPCCQfG6hqmphYShdBCAK86hnS7Uez1uBFuFCK3F2a3vvrUnZfrjTGNj9JsLCGbivAN647CWaUNeAnw",
  "key22": "3UZ98u7mVFynkd2yVWowHkZc3phWsom4Qg9rNAsHjM5WNo9a3odLMM92aYPzHdntN5axZhPCrCGfY2w1YKgXnD9C",
  "key23": "5bvGVH15ySruVQ97sB9bbhp33mmgNXEaTquomiCc7CELCAxdHWJ7aB5FJ8EKTmwzgGRia36A3Hs7DsKfEmgxy2Jf",
  "key24": "2co2nP8anSFDAxVMjLxfxLJiLZBGZmzh734rMkJgdMV4MTHbAzuUsNy3cXbewnCD1AaB3D8N6dcdb7Rc3gmyjhoi",
  "key25": "2hny51kVWq5ahhs56oBtG5oTdAcBueY9nLRzg3pwf4zfvKwzLqbzZaSVzHEh6u6ZBfkXxx1b6HmeCF8NcHXzGNsC",
  "key26": "4ho5XsBSdVnoShn6dMqXkj1d5FVYubRymarMww377FStuwb5S3FqtzXevTegTUsH5hxWhh6cRLJ6seCwuWdV3Usr",
  "key27": "4p8MPkgCnVWQWYabMS2dPfBazJViXxsSVhAox9wdtD1zLUBaDARzkBqjSgo2SbdxPH9vYF1CQPiNU6cesNnTQ2GA",
  "key28": "2ttuNdUAyT53G2UCytDwkHY3Ba9MwXefbSmMnFPBhyzWE6M266NitniFfa4otLP7LgyfBWkr9tPqTqqutwcvn4Pq"
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
