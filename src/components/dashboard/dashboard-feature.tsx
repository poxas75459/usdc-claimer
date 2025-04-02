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
    "4CTziCyB42TffTVkfgrJ8Wn4bQykDXjVWEvFgaSHFfBQh4aTHKYdiEe4gaBRbZ8HDW3LWmhoCRNKBEBkyTogb9zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z64dKsA9x1ZcaHCnhriEEow7HVMsoMgjskxYeWbTgk5EE4kiGEinws22H8iwk9qfCEfnSyVVFLCWND6SdgtAcCy",
  "key1": "5fuWe2HTHgLKD3p8xowz8jtiPjDTtqpSNfQSQEkfEq1f1kAzKfmeRy2e1vExd355nGKPrDbu2ysaaf6UXUfxpcMQ",
  "key2": "5yWRS1XStiLiD1zoMj5oxGTjDizfNHgdTddBqiLZcjXycB4kr3bFFtMqwpkEWwu5n3BSuJkBvZDB4rBC1dj37J2A",
  "key3": "4fv5o2qTkpXNKmYAGebupZroXaFEp9eJDcr3GbvkUJ3XfNuweyFyYEwGdmnEbr8C4NtJypseAvC1tnzQNsCyEi21",
  "key4": "2P8tihQNK6b3UFDss3ZgUWm5Fks6Djpq4AHau1ktsS34WdZFenEa8a1J3VAFW5jWaB8eNTiQtWGvSsNnBDFTm82o",
  "key5": "23gXATxvRBTwuvAvsdjAqNbawTXv3SzZynm98HFLNUAkATYoirD6H2hpQFMjfsRWZkCM9TC7uP4XC94ATYu6mDJd",
  "key6": "35oiS2H8BmapUzSDcC4dgJ5fNMidk1Hm4DiuJNa2hT4kWZ5JwPMQRA74mGhLkdRavTS8aDm4fmXqL38Xb7d8m2DP",
  "key7": "4AETYHDGqWMUjJhecFHdaRb2Rsu62FHBvbnGyu8QXijJ4YwoZG6yWZWYVEf4rRqA2QfD6CFdPKqcm5cob9bhLXVH",
  "key8": "5BfxVfYgMf39rXVhkT9etWJEATtEWJ5WXjdRYzXEohjuo5oFqpDvUBhPh8vr8zjkKdDDwKwXda7sSfggAyW4Uz1y",
  "key9": "5wMVLBd6YehgCRj7Fkxh3hb4Aqc16BaVQhW17WhzABTtahGDCLg5bxWrBwezajp16UoxhMrQTqDwwjVeC8VKrtnu",
  "key10": "3kJ5VAXiDRXUGZZM9xCWYkLiNb18QR4d9SJE4SJyLrtsPmX4pwgvypS3bKN2TFf8xjdShoCxX4f8hqoHcvb8czjJ",
  "key11": "35npHcmmpGtJHBH8mcKv2AoknKR4NCbhRvHPYJRFbaaps4BQRNdZR6CvoqHd4KL1t3wkYuCrWQrmHHP6HQEx4PmV",
  "key12": "3b6D6zsvr7cRvZxzaH6ovwCKzBz3vV4bEsKwYZMr7PE76ivQVGmBAQuYYbmhD2t7dZWSf7rcEBXxgaCqFpzzncWD",
  "key13": "47PQqR3Ge2eCEZa6KiPJPFdZMPCdYP8DYxePGG9Vv66SG8uozbWdJxv7LggW63SJN1hV8rx7nA72Bym3rjVRsyjS",
  "key14": "318fmkeDgRZ5o6Ukj6r8bNz58SGbJTLLKPe84jRofVRegcCH7YRbu6D4tEesBG73z9s51K25pN1HJDTzmhDydnh",
  "key15": "4p3ffx2VVqYy33mwTVp3k95oVZapRqmpD1xxptuc8GSZP48bBZRitJgbyZUfX7r99Xc2N5HX7cRKDV8Y24BzM5Sb",
  "key16": "56nU3KaqmwFwwCAnM6aujQVNMRo2AK9j9DVn1gALFxMBerH5W9oug7aLgu2YPZt3cew9k72qyyNt5DVF9DaDhFiV",
  "key17": "E55ZtjgiyupMe2KKwHTUQKU8VQkZq8gdREgCGmo8NhGDdWQMEqDK5kcidKJ3MEEDVQmr5247gd2eA1THrGtQHCV",
  "key18": "2kSPC5YMx3pobFspX9Gv84ysypSKH3Q4T9B2LYsq72SgGLv8xnSUFqxivW8o1nJgS91TDW3rdE8ikcgEHsujVJtN",
  "key19": "28zzqMeiXaBPx1SFi4ycSVbaUEWMARzo27MC83AS1bpU6jKtkYFSf654H2h6NNcWBBUQnpPrDDYCSiswfVvZQgc9",
  "key20": "4xAcCwc3brMgPNRjwzeRY2kjpzJF5pNFYQguHvUuzdm3WkNezx7iYbh3e1yJmAjij2kPX61saAgDL2ZDc5dVGGsH",
  "key21": "5ZWBbW1WzMABsZGwLMq3nveP8xFPPZuyyYAUjzMwZfcrxYgVYC4SsGnJ8BJYyRYEX981h3tYzWUpNu7SoyxLw8T7",
  "key22": "3tFyZFQAK2mLcVzpu7DWWaPvBbpobhW3dTPuq4tx8Xf1ZCeLZcUakMXBHntTUCtNCcQeX2xkpkWujggZ6ofydha6",
  "key23": "M3KG3dmaiKHyFXkuz3M82bWxH9uqa7P3F8pzjptczu8ghRtrJrJ5o67sym3NwUHjCcpVPf2YKARKw1gyKqsjMFF",
  "key24": "5jpt7UeinLqoj1Z4Uf5qX1rBc3k9bGkVw6tgHUQ3531Ro77nbcQJywb5fQeRRh8Q6DLeazAqz1tyoQgnW1ea3box",
  "key25": "2RPPgDenAfiSauKesohngPwREzGb9aD9nRCTv7AqpegFig3Mm6gPs2YXTKoCDtbPG615PiXe5V66Vvd1cgUmDdAE",
  "key26": "7WLGSg1NS7VfFYsrmyH4nsdQgq2uyhvbXPpRWoJZVUQcS6y4fSZYuq5R1t1uPhm49YyHd3sNu4VQ3GQtkY4jmNU",
  "key27": "23aQjn2MD6e4wZ9aQFhr3WrSrPZTbpTDy3MsY51ZPsgoRMjmQzN1ALTiFJwVfPu8NDHMR6Nm4KLWUBt1S51GMfSt",
  "key28": "65wA5fUPL2akuACjEMV2Q5FfRwG2sUwCFzgnjndC5i27aDHmaafD7vLZtg4hRSiV2puJgHwucVXi5sdNmNas35Bn",
  "key29": "5Ahyhzgi3iTt6K1kp56UgN4Q2QFS4R1WKirfr5ekC7P2znHjTNZJ5guFxX7k2nAMUBvdEsP6UAYWitqbrY1pSk3G",
  "key30": "nNK9NThEJGL7vtnLmAgGRpyeYQSxRJTD6n1mHJSLuigh9wz5m5pGVQmc2yUJCGQbrovsvAyxzzfZMasD82hbTMS",
  "key31": "4oKmZJ6yYVLyGYmXnvh2jTmbJV2DCSxwziNqhkpSgVC77KdZReMMrLvPAshG4L9u2BZfB2xrodk8SaX5HExpF9Y5",
  "key32": "4QGQsiFAbB1q5KzYWMoZ3cGWY31uMPLgJ5WHpv5LBU7sGzxFcP86jnGTsPiwP6jYMGDAnpALxkE91sGQQsbBYCBX",
  "key33": "3SgDYueiH6jP1BGaRn9YQLNsRv5X4pAiGekEqRrf7KtDb8R7XrZoU4E75BCvYbzsmUHoyr6ervY75Nc32YytdZbd",
  "key34": "5AsoqL6ev2x6xg7xMUpXW9N57AXZnTM2J7Go9f91qshJQ35NfhmjnNjpd4DtrsUPynyaYeh6HjmWkd2Kgi7S655",
  "key35": "4Wh9UqQ7Kc2K2gmxGCzjHcBVqMkvkRUA9gNr7Wvgu11cWVFNDohnZR7hyGPx1GLKY1jT5utg31GU5C2TcXq5qewE",
  "key36": "252d9zFsgEGFxaMwMJ7fGzbcH8B6jeiy2fn9RJmomH3WNTQFFffaEBLv2dkhrtRWbFbJT62bcD93r31pgmA4EZd8"
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
