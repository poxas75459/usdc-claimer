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
    "5oGWgLN4yfYmePfbJSsEfhUmHbLwXXpBMVF7FDFLbALYKJSDbFmfRVKxmcKoVq2nLyySpQ2oUFbx1YEMQocJmP3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66tFjaURhUDuQuKYNHcWJNM9BH6jCKgB4V37Yu1cuD16y9erbCvc3C5KLKNMZVWf3tYbaiceMDTutPrQqJDq9wDA",
  "key1": "4c3NPcX5rsawKVLtp2LXYzvVBa8Yy1cYzoMj8UtPU3tJzo5BjoaQbkaeLVkC5vHDAjDfiQPs7Fu55G1A3KhitESE",
  "key2": "4cLgdhWjrD9Yq83NvGfxkDE4HueJMRRmRbcqE1qnEjBNdhpKX5NSPwZMER5JA4K1op83TV4JbHcdEbQrahdH8jxW",
  "key3": "27ddnyrdPF3qrNDuX2SXQiSzidhbtVK2BqmgCwFSqpNqU1VCrHmfrwqKgQJTuz2EvPQKpx6JA78NjJNxLKk4HVG1",
  "key4": "GEKpjZs2mM7mhD9UknQEhZAqCB8Ad4AUA8KGmEM3y41ktqiE7UNR4NLT9ySzWW1SUivWQNWqJEPtPJHj6ZEJoub",
  "key5": "2Y4Zf6qBiaKPtZgKXYceRHPDzimXrTY7w4CiFNEnoKCjwN1A5zzjdbFcMDSyrQnNBt4CtqV6TNV2k3fyHg6QHB1e",
  "key6": "7rUVfAjvxNDURv99LogqR7nvGZqRJDQN4oxX4RTjufRkQn1REU3NPKvkPdWLyM3936pPu3SioUFzQtZyocVKELy",
  "key7": "qjSHYXDtVDxUvZQi9mWXDqCrY2v3WvNdcqTr1iyieTX41RzQifgAgAnCbnATyefEmDoDZscBU3CzFsdNxWyB2tx",
  "key8": "4QP5AciAP1idw6ehGb4QHsReQ9GDKpKDQCVmRn84ZC19BHDgGgtyRtfyPX5XrVPzrZRh65b2q9CkxxEtprQjLp5G",
  "key9": "5sS21zrqJDmGkjbbAMw1R65CzLT2vFhnoP1aXGucgpk6tHa6CbHEhEaaErfAWw617HrwNuzvgeoqzWPQAkpwL6tR",
  "key10": "26ZZxRB7TrkfhQYj2VanHdtVqJzSYskFb8KuvRMmL59qxpgqY8DxsnRrsMQPXicc2ZGwuBQ2GJXP2MnJyAg2iP9A",
  "key11": "2tHgfRjDUxxEayZa4DpfYpaGmmEjnLYDTRGsEVkvvbWvnfbpzn3w9PpSC1Tww3Nz5eyNwa7pWvrWwYExL3TcFbEa",
  "key12": "5mhBQaczc6uC1k3TdFySzkAVvVCde7PzzrGzV86JEiHcKyZJTwe12UgQhFMYfid2tbcr6iH9yR9ZdZVWoUP5RATX",
  "key13": "Kvgf4CoGWGb8uxDtYPnK6HfJ4mpNrWzss17RiR9eAfi5fh2wcz86nCk5DM9hvPFMgfFyesX22WHCzMEAyncxjN8",
  "key14": "4Ps9ZmcUhxhbgGn4bkc8yXdnQzJQPMe7yp968bxwG4RSqh5KoAQFZdsWL2euKBAS8ySd4FAPJThHuqn9TYVjwvAS",
  "key15": "59BCUkm25vVRyo4c2J8FxEnWW5BCm7ajDj7LRFhBjUm6rwn6D49xQLhEyimKTKwxmX568tip9MK1jrpGVtv6fYEP",
  "key16": "ocgj9CS2yzqhpRGPsbxKf9nom3YyjB63J6s4ZNtzWBHawhP9WFsapGTzy3BFPsihKF3xuwsoWJqBR6V1V6vpHoy",
  "key17": "5ecKHoKG1WfqeZiodmU7aL8gWHwZMRHQitnVnAoW2g7GWCscBcaKrggk6UWGxZ4a1v14YhJ7XboYHbaQPnkribyc",
  "key18": "61yGky3ZccNZUoH7D4jUDAZux8xfSbmmk6wu5ENrBJjNarsaLMwAQgp3ofm4LMyGKZ2huZb71S6TofQytaeAE21L",
  "key19": "5EyqaakuU4TNxZhgtJQHrJJTvqjd7o7xamrmc7C2LdmBYsbrDMtznJ4CVqy1EHX6HHHd8Cjo86Hr9srjVHzr1CfN",
  "key20": "T5WuqMUJRiRV2Z79JwoTRjs1zfK3TYaTAku5McbTh9PbnqkbKa1eU7Qz745rpo4KzgG8CcA8gHaFXCXWfppyEQn",
  "key21": "2N6o74ethBxuyFYute15LEzyXgz3zLMuQSYDJurR3sVifxXzyb5HWk6g9feKa2WzSWgJeAeE5dUWuw9HnRjV6rUf",
  "key22": "bAtYLCvtFy4ejuwDeLTz5Gp8pvPTen5gBq6om9NdjFuo9Uwc2gRKoRu28v8mbSrGGRBSfRaMkBYS2ZpJEm2Spbw",
  "key23": "4HhcFZc5S9DRCiCEvv4bH7f74GaRLZvjofD9a4BaKD7FRcchZLTVhnL8nDtfPC4ZovUKpkCsstRU97gp1hDbCao6",
  "key24": "3nG7PxG8GR9pTZv2RiLzGebFvZ62Q9mMMHUqEJSpZfx4fMgpwonY1uKe9q6cSSDn2LUb2MA9MqzizUKeR2wGVcsT",
  "key25": "2yGXjNFuaZYN5fUn8GU7gmWnynVc7njJNHJiP4AYJMxZzeh7rZ3SnVX8qBSJtAJyH5SdtrMXzpc7UX8au2aJZHB2",
  "key26": "6423zVCQZqoDrJrQeELemjjvYCM5Xx5nt3KnQbpMZMSQmK1NxHjnuZSA3utFSdPuV9cpWgieWcH4BFnRJZwtg1mM",
  "key27": "633YZZ9fACyXd5i6sFpXLKPYE8mPztw2xuYS2EkPKr2yexVL7BbKWKNEs3fV2p3jWvLJcWLNEjxemF5HYnBjGSvH",
  "key28": "4VHjMcmxzBTwMAUtb4jcJzDUtgaqi4UZbG5SRa763CytyhPAi9Umyc63pWTHHULYmVd2tuHG48uDUrKDjR2ArFMA",
  "key29": "5QPNuWjnSXsmRHjm7BmpcM4iuSmyzNopRmcVY7rPH2uvXnRfqdxGwQagkUeiVUhT55chKVd79oyx24Q7XsRCciRT",
  "key30": "4HxR3i5AiWU9AJH9ipQpsnoD4UmTwALBvjYgQdTg1swckoAruDogvw6AyouQpGKPQx562WKXcy1DzJAShnyM9Eo7",
  "key31": "5pJAg8igjjoQ3GE5J9ENB8TgA6bmewkZopr6tBKkdnXmyTzXa6e4G49kduPMceFx6eix1diJvfpdNhUQtYw4nbfh",
  "key32": "5kT8JTfm9AP3QHUKvYgK46TPamNnTFjqSbisNEUSqPzG7AYYps4uttgmz49DTtuMAgMeriFK6KN6Z4KgeMnJPXHU",
  "key33": "2ERQ6ugi4X2MXuu1q9AQeCR4uGm6AM8wfSxn8K3wgcA7himZxQYB51BZfjPmkUucSQHbD9LjfJHGnScXuGvnwpxL",
  "key34": "3YAZkuZ9pzmdPq72PCtu1zAxnj5Uej4ZPbs29JZBptm2hfr8gMBHXaM7DyLRpojQQ5NY6J8KhHJ8xWrJVmzzUtJS",
  "key35": "2xgVKomjgL3b3MYxKmEw9QzLf4ua4ycpphvh5rpVRGPXirQV1YsxbFEdsVSyTyFmRzDAKue1jYxYoNM3KG7ftRJe",
  "key36": "33GxM5XPeNCn7obFUzjkuUYLZzor91FNyMyb8LrdKMk3Hbqb48SUD7wBrQan6FbJFLZZQvsmw3wH6hc7WGSP4Yvm",
  "key37": "4ifxtMbEerkiuc2uJnrwUHnPsgdpBvAnMd56Q1v821JuuTtkzNdNibAcNu1he81VFHw3VXuZT8bZv89dKTrry21u",
  "key38": "5dsJTshBJJEUygyg9Xia51dx5dtZzvJwVHcv47JMHdTe1i2vJw6ji8LxnYzBKWoHMmdWe4EuhtFKzZtLrPecdPd9",
  "key39": "1XrfmmLVKkE9An1Fm4MmGzHTXaQpeqc7R5r3cRsUfjqTk69AY1Gb5PyM7owoiVwAyQNXwXiskrLiUbCnqGrPL1X",
  "key40": "u51TdEpZ5RxuWhUKMS5WNEh2M7PjbFeN6HCPwbbZeq6vUtr3TSvJHLN5mSiyUn8oVwV3qahz8x1aBAtUs5JgALh",
  "key41": "PPdzR7tEFk4AknPRzZFMsV6etZ13wZykou7KeDbdcPCFs8RcnoJzamiYM84yMA4pRi2cjCtQMx31XCvU6rVsD2c",
  "key42": "2kuwHYTPWxvKu7gdeaSWBtgwDGmhZ6mjoWBZKdzhLBxRpJjfCSvjuhmZjbBA34uwW7R8LtU9iPqmC9xPM6ypr4uy"
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
