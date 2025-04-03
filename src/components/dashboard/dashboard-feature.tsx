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
    "5N8C4A1fEBQo8N8ybUFJ1BsQ4fsVUHswEG4goS36a4qXXvWbVrbami5Vx5C8SYkTYd4GPCnntaanFJt2UQJmZ2LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "532yZxa5Z39UH5pprR6vBg8u9C28tSYSo88zaE4e7Rxoa5FoWmzxW9pWxyUxoiMFUEYT1vnTfddtEE5WgRNvjro8",
  "key1": "5vN3Qh968697tq3wMviLNKwUV5hyackLRvc36N4rFP4Jv9nthvkX79HW3DcjpKy65qzA2yJH5ZNPAVQq7Byv1aaP",
  "key2": "18j4d7AB51LCqCvjM2GuEKikghpT8jmjAsCb9LAQwTbut38m6EuLiBe4RKG4LGKGu8j4ZaFd74eZe5ydmiXxPHt",
  "key3": "3a5oyzuJejx1LafNHaZByttPw4YWyeUPfMH7Tz8JbwfR9rjjbNni4TCfnskizWZrCNKDxrhK4hzmSME4943PsRup",
  "key4": "2oHaiX5dZGpUQpsEojX8cR24tGDEYGiFcBhmHFcm27mXZtZQEF4cJM3B46KigmKJY2UXE31kL4YCXxaUqHBd8jYM",
  "key5": "4PT5vqX2HJL16fNY44jAn7NpCjS8Nmxyj2kc3axp1RaNa42KJv7XqftTfLYv5dydZZfJrAVCWdU3DWRtC1Q49g8K",
  "key6": "4po8PP5mDDeWSSzaG19TJWotGNEKg6gH6WEokYxsomykGzv6mhc8rZs1Yt5esPrVfEGq494m8Ktjv364H9MtWQaD",
  "key7": "3d9rsg6APrBMxmpkxsbVQgjyQVethMyh1Xc3PEbBjbCDdxM12246f8wE4dVtEzuzLnDd1jQctaShuBNcRpkKQtMt",
  "key8": "4mbMeYUJfyQynqBzreyAK43L9qB2V1R94EBEdF6pNyaHnN2waGVgfUYE69iBw4ktLXp8JGZkek7swNAYriK4mvJe",
  "key9": "5TeERdiZfQdNseYUgjEMvi9DNTfChBzqbto9b7rqMN96XszTSqt8Ljy3QigMMdCd6jrxURFe9TzTSsJrft3DQ8Y",
  "key10": "e8JV2L7VZLGijPHa6gSD3wCGctEm5xcEf6fGiu5db8f73oSphboqSBPWZKtAVoxZq4uoJW8T6PF7ZQsduNRSSdH",
  "key11": "2bDGH4yCbLjYk8XsdPe1jLrFpZiPyMceYcmj49gSN4nP2f91c42JdgKihiNhicvEdTRh49CkchDgLsQK1nLQ7Dpf",
  "key12": "pypoXvJq41L1CsXeiypXwws5bR2RLF86w3qYRyMJ3BZUh39WCDfAtHhSykWhuHD93DsBPEeXYQpfgP8Fgkj5yWJ",
  "key13": "4Ux2rSCniHr83mzykRdTKruSSpSEmiZfQjZBacaFyjAV3f499Lm8JBBy3trCYKXbhXRCX2h8yNHtY5Q5GWqYekjX",
  "key14": "2TUGMd95oNZJKgC9U13tMi8rSP5YCmCAdACFXqEvfZGvycoMZecSzUmxD3dm2cWJGs7afKh6Foa3CFWL259CB4jf",
  "key15": "2E5Xw4ptd1kHLDXXuLf8RxQDA4DqC2TMRzfPLfFhfWLjdTasy8gqXrTvAb2paAWg4aAxBFRBDh9w3gCLBXiR7oWY",
  "key16": "3JaBe9J4DRhcRirS1ebkorYakFRQwvDGpagnqUsAT3gBN93ofnNBEcwPB36Zeo7z1CXhpraeVzPq22LuDWDWB3Z1",
  "key17": "5YnohmyMotZQZkxotd14wSp1fnRB7vF5GXChuzrEZE2ZdY1buNjmR9ZnS9HswaB3JP3j3FuxpMyKaTTgvK8QhfV1",
  "key18": "4rRm6JaACMy61m2MEJheeJgPLfTFNdyqabwMzETv9u5QJNmJAPczU7vttuEbctDsqmiiy3aArsN1FTFo3wbM3kZ4",
  "key19": "4EXWakAxCMCH4VzM8jb5M4eboCBUGf5VckRq3f7yEESv2LKaRM8R2TKWDF3zzeJDcB6LLaLHaRXvSkVTakZt5G4b",
  "key20": "5demwvE59avPyqcskaFsNDdyZP4Fh1AECkezzBFVsHzwNVLAUYYT7Bs6EUx8TF2ivEnymJTT3XbJdMkimrXJzPKC",
  "key21": "2yHELDupNU6LTBU86mrgxMyjefhxujVGYSzNvFyc8BxbSU9gxbxyvJB5tpts1UxkJs3XwatFQtsMzz8VevHrSTpD",
  "key22": "3jXJy8xzHY8tFoReCM7ZXWmN4WBSLxwvd69j38rsEkZmJJtce8Te5Z2kwJHf7ozHdndoPtrPX2gkeG1DdW8stppo",
  "key23": "48zqfeZbuBo3UvhrufvvT8ApdnvgVeMBCuvT5nAyJha9ixXKPHL5kxc1WdwFZEGT1nwD2qqWeFHNj1zwgbdGCeZp",
  "key24": "NPxDNyWz2vzQWSZ1BaibFVvQNx1vL5hfstieUEo2VpZsY1aKEfQkHspL8wAZHLpDi1mFnqqULBALbyyZZSjGpgZ",
  "key25": "NpdVgZauH9ZUwfPz8ro3ybtY4AuKGKWc5ZFvoAS8YN6wsticNLSkbjMzN76GZYFbeYRkygJW5UNkLm7kFaUnp6K",
  "key26": "yHDvHQPuAy8N511zpewfKVjSTohW4pWTHAS2YQnwJ3gqYEfhGKaLkGdLTQoZAo9CiwVFVTpyHXwscGQ8eg7nooH",
  "key27": "3SgKdXPHx42D6rfqL6R4bnKSpbDbJaKeoV9eJpUBxZ6Vyj3FfkgD4QU2j7QZpbipwHgpAzcQ6BdhPwBnDDwVrz8P",
  "key28": "Nr51SXsDHByrGieEHBRE6T4QPiVEAEJMtrNmrpaYmTLurQjAG6Wmk2BwgS5thPiJ4uNb9rrxC7c32pPh4BcNVC2",
  "key29": "4LVoZVLnq3WMntdsgb5bZff1nLCfLWBLKLxjhxsaAy9HvFJXQeiHazBRFQMCyefPHqit2zF5VbAPD6NDWYciRzvb",
  "key30": "yML5dunu5aqoJqnMkkQHxzrNT4hr2Y9C3i5msHrfjcjmV9MBsmvULoT4PhYGu6WdhtLo64LzjYR8dJVjy7etEJp",
  "key31": "3hghDbVaGznrtteWJPYgd3GMHNP56JczRPh7rjvxEoYNL5EX6zT9a4dbiuG34ppfuRmJmtjLNk4y83HhjLUjUCJE",
  "key32": "5Rqpzc1pM9G4ujswoJ3kxrhEUxLKG2MMwJc93k4gr3s2G8HR7rraghbSiQpEHPJrB6AXtacdYq5WgPtFP5gnE7Ty",
  "key33": "51xT1aE6LE5oCsaqPQjWjEcWCPuMSwGrJvZ6hDsc1fUBWP52ohdTsg5mAb9gucFjJLdiixnSRDpF4ut6Y5uFkcom",
  "key34": "4NWPkyXkfgawdnCEpxnvuRPArYHwbvEHqD448da6CrdxcXakggj8J5iR62yCqsdqNMm6Ek2GVj27Y2wQnzxvCoqA",
  "key35": "2BAGnW1kvV7GuSYaK4p4wivBZriTndBn93HkTjQDa3EVaasFqTB2NtduGAbat5P7VquHSaxMW2Gr1xFb12xrgQfz",
  "key36": "j8HpEWUvkFfLx1qBk7RDfSkq4kDTVLGLebYvTqg8SWFvqudFWGE5NoD1eN7vhBSKK4rL9XJPh3sD1wnDXuKeWR1",
  "key37": "2RZJEfSpj3QUSbdVHYWszEUBJvEetBzxHhsmNWHVHGHB4cgnwRPkatYT7kYfFqfJDm7PFArisytEcUaFsG9qep5s"
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
