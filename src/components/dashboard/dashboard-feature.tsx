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
    "51JAwVNd77xbHtpY4UhVs2VE6QDrP1uGNLFK1LafTXSd7WmK5kUKdgbqfYV355eoN5jyV1S2LNcF7qLUb8NohB7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GkfVksgAjDz522DHSqJfJxeTjhSQSA4BFVwGzMBJ6VvNusgEvyJKdMpHpGsBmxNWCkXPibkjDcHaZry2qniqbZZ",
  "key1": "4ZxH37f9g9rrhSsmtRbcjPejH5cbCbSMKA4XsxcZtVFvRpGxX5jjoWiPHKKFVGgvb2kzJHPTJu9dWZoFiNqubaaH",
  "key2": "4TCWxAvutogVKGNMJX5m7Q1SJGX9A4XfY2K6ZCaLiLScwvZ63PFENWGsXQJUM4YzvUxbiXzUs18rWsqckdz3PJDk",
  "key3": "4kaWvznY55vS3YZfMoWsBw96e81c2NUVYHUkHquvRmoCsPsu8xFJFKVWUB7eQs2vdJtRJTe56W3Ti1rGzh4o1jS1",
  "key4": "H2yQDtisjdsu8pPYnQwzFuwENQDif5tT2U2EMHvgs5bjjrqDpJeqb2a9seNCPr3iKSpQH9s9VeAxUGpy7Uzdjbp",
  "key5": "MkucC5YyYjc5m3cGFjNkDgDJbSNCX4uVGaPtKNWHaYQMVtpNy7Dg9gxAZTtCTcy9VUnVoFoybvBoiggWWSQbSHu",
  "key6": "63qnKVSNLHug7KLg12eAPnWt4SCjvtJuREFwSqDPGd6D3ACARHuLXhB1nQwxNK3JNwHg1htYjUZ36mDkTWjqdGQr",
  "key7": "RrSmg5ut7R1UuFUC7eVsTEHSH5LAu5ZV115FkGw1wPztHAaYVXdVF5zfLC5KnBq5rWm5TbQwXpGBFNeHEgqkyV4",
  "key8": "5Lztf7V74KgCGM6CnqJuFFNTNJuYhSS6yrZ49DqTVnLp6MNrg2hqJrX2374JqT7okrWfEECS7KvnABVDJkNYPrb",
  "key9": "LfPAvdWjfexBYW3rNq4HTzABGHWmyDb9ENBDjB2672uScvv1TBhk2iA38TAjaiANohj9wdLL2r5jrb4CXXcWgaD",
  "key10": "dHp9dRsrhMy8Goy5r27suSHs827UnsyAH24E4crTy2VgjFDEwkUxmZhLHqt4d9UA1KA62ao8zkZnN2ioNYcekwv",
  "key11": "3KPxHiNBRU3WVxGqoSAf36ZqJ76hAxy1tVthyWv1EpvEZyaeaXF88SLYoUZhYg3JyiwtyahdQH7Nm3QkRKCJxAZS",
  "key12": "4rqYopSjPVFNvt1idardxzyWRMyBPKGR9E5yzdcCYSdgavRYZx1ssdMj9o9FpojZiK8pv3qhToFF1ZR3QSVuF2HE",
  "key13": "5umWRpBVcYRVCf5aoEhi99tBSnJvG4bazDbw1nTFrzi6Ti3NGBBj3Hdge9TaB9j1DnRLzZqgnTQmVGA7evMupCur",
  "key14": "37KAhY7ebj1hGau1Lg2KtWXEJhhtHgpw5XA1cWvzWyYpCcgdxFVHxMnFGjKX6qKozHZPFce8SAuUsV3FMNtS4ZAx",
  "key15": "ubUWzsn8tu5ev6zLB3QhsZGZXGjek81Ddii4o9fEJs1ipE43yCtX5tCA3S8NAYxWUjG3snMW33SJJ2RJ84hL7Uv",
  "key16": "5ix7YPnNeekXvxBNsyH8BdaP45JS7hn3mG6a1qQc2aJ5yMAQD5JfBf5DhFxrJDDmhjwY1hsRNuTD1zG1NDzu3X6h",
  "key17": "4j8KVy51poDBpP5pZUfcJdPSRcP3WA6z91x6LrLmL1o9ZEPjBHvYpNefSLDFGhnNjaSJQp5x2NQPLgFrSofW2Kqv",
  "key18": "2T3dov4cBWZMoAjRCuMBP38vYT1T23e8ye1u9urzoDJV3SXurcxCDdtWVLYg4hXscRe5mzYyLW6pMeZuRNZYN1zT",
  "key19": "1eUrbkTFSL7KYMWV1Q2aQ6S2rNyJZek6YAxmPhGZYw7R8dvZX8NKw21DzWUnNDgUdiYrZ7gJpySFW9APDriv2UN",
  "key20": "3adPME5nVbKR4ggPLegaZ4rXCTt7fx9Ko7gEYUfmGnTJBKMbw81zZ39m57GvpGpa9Zooca3u2RSeg1GYBCLKVGzZ",
  "key21": "3v9PxzjKLvKnj5qmSCFxhqBZvrrUubVgDe2PASMacPsnexmVkXiQQu8va51L8quWqHKozPfWMCk3tNkydo2ZwyYz",
  "key22": "4HyqWxCjnr1sfRZgk5GbJX2CrqYAQJaQyW2eJmsQD8KnvGDekbFsVc2i7RKv9sCcxQdftT3mX1LxVZGXQfJeAXg1",
  "key23": "4e7S25HMmtKmJZJ9DFRyiN3NzS3wrhVWuqnddMjiPd3UEYdrDdHTJSzskbFpRvFNcKm7pvg5tFAoDyseb5gXr63C",
  "key24": "4aeXwDz3zucthF3YTJSGJDRsWjTRWYvndzrJDCs6VZyteAbDamjSbcmxYcwCsuC5GyCoJBTiAdJzbbfKy27uSkCq",
  "key25": "Uu8Wun6MhQj7gtHS9q1nXGVhm3YX1yjD2U9yng4vYE6XyhY3RcYPpD7vtmLhRzeyU4ihqJSonMRZYm4T6kmFWPK",
  "key26": "3hdwW3CHctN9Hfsm9VwioYGiBPjArjiL9B738SSEwDLRPU43UbWh79zmZQVFBHoFs9oLJkiKA2HXU54Xw8F6dRqV",
  "key27": "3AmyvcpbZyCDVRoL7pAELSRnvsgBKuc1WrKwrSERPYDYmg5K8UZ425qWvT2aBVrizyScVtcgwAeNCWBYXM81z35A",
  "key28": "23ux3kRXjGoSxeqJUEpZcu2XsvKazqc4CyMNmbxzY2xcVTyPSckGsqD1aHo4Q4GJ9wpLyji8gZVDT39tBaUsA7BQ",
  "key29": "2QeBv4PbZ6NrnLvKmVVkoVHRntdKUTud3sY7Lz9eev5yqJsfPnuNmNm4DyCHoUbhnPtuY9u73x9L2QAVmWyrfpbk",
  "key30": "3HhiS2bxXPMMS9ywkp9iQzTCjZTiJTTkptLtdwq5H7ByW137vXzLpWyGjNe1YVyZ8r1h42WpsWf1nxHqigYNZdhV",
  "key31": "8qHSAH4YF524jhpxr7EHXaAH18c491JPAZTPyyaMvL56C7jwNDtp3mwDCtv1SAeR6J4VNr8NP6pavs9zNHV4Y1A",
  "key32": "5mwsLNnf7DxMAE7KEWMovkfubiDnWu4EXe2dV417tXFXaL1Snd7r2Tvy9v3Ei98FbG8DiTokEXP7DYiUpvDK1Cki",
  "key33": "5S5oNXXmKBsdL6ziHv11vavGMZVRsueTXzsia2AZPfVFLnckwgQDfqosg3nJexXFD1FNyDW4zYYYjvsHhAgR86K1",
  "key34": "bNc5kAYqHcm3udrmVu2NtSyFjQw8PCkhY5qoppvEuv2AsmTPEjcjXoWXQKNiym9ztLExKcV8uH1Skz37UAVDwpU",
  "key35": "3UQvru1tCEv1qa59CEKC8LChSEDmmFxjPctvDGF8SULgS9QPSW324EKB9T7p3S9vHw22MoWrc33XtfXZv7kMwsb4",
  "key36": "4sohh4WwNGWubBGWF12qJpVu1nufZtYgG6wLs1c7bwLx2iGeuWYcRFbzXpyVCsGLdKpLA8xDc6Ygr6ntwq5MGJhg",
  "key37": "4ZBDSnpQVFYF7DLCp9STef4DUowCxihCPakR7dpRkmM5e2hbpAHdPiW3V3HVWrVZM6X37RpNAfoysAHDAFvJ1UWV",
  "key38": "5feMbwgDmZT6KAGvgMmPoYqz6GrJ8G1wRDeA3UmCwUZDgydvkHVkSiSwz4PWphiFogEN3ViijUgsEo35cB9niHpU"
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
