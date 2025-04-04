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
    "EX8wR47zVt2vp81Eafvq2Qt1N36dP2KMyoc1NQDXEMtMXM6jZo1PXfWXjQPboa1hb2ufpdrzKWfKZF7uKuwmoCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38gkibD9c37CSzour2yLztJXNMi9jocnHZ9FQwTrW8TkdxsWQLsDYGZ6D4RnpA3ueT79j9Fi6sH8RUUQNoyBy4ys",
  "key1": "47fR7TS1CYfDyh9nT2D5CiCBcHuA7dBNtpj4f9eMRPwswH1x9Mg9YUoiGhT7GpjCQQBGziXceqCdRQZT3s45MUzy",
  "key2": "3NgMXbqhtdsijaSv3oCCV9mfa1gbhRWDcGvfNwo72wwzG5wn3KjKBcqgBPLXwKjegnaC5NNhpv7voxTFjBT8WhzL",
  "key3": "4S2WfBGnYNJ2RzeDarRP5nKrJ2XtdhBZtbgJK4FvSWGqHZRH3gGcQJaivrkGJ6PfMoYkRcJPAqWUAU7NQcB5m7jo",
  "key4": "4t4AG2dMJjUoiULqQ4Q9KNRmgNncJxrWyCFSwUhdGYQNxesEN8vReMsJ5E9h5gff6n2hBHtmWTnFfibLPPvZMg26",
  "key5": "4CPEDGSoyuvQ74DXw6ZZQs5WKM6MQxCSNB8AFNch66rkfs5YhuJjB98jNvC9thbjA8XznKjkQ4rZowBXUCxNPtMP",
  "key6": "4ki7EAHL863b2fE5vtuV1Pdhuz5YM51wEEoy5nkJEV2fCHNgCvhkYSpC7WEwLCLKhp4xLLThzMiEALerybHWzs2",
  "key7": "2aNnZcZK7GuQ4muYEGhGcVKxT8vKeLYinUyUu8DazQcppEEA4u8uLhfBVfSbPLcM6ajnDvaMspEfwNkoDcMNtj26",
  "key8": "3ijvycgNiy2T21LUVtNezymHLn9uFxoUH5T3R2NNbW8EL815NX4i7b6xVJvbAWA5nw8V9Ki9ExGwd6waV8hEm1hp",
  "key9": "5Xn954xJqqC67k1UArKpvfVtjbd1ibHwAxZsUmzMz194TH328sSPjZjZoEJE5PDQbK4j438p4hYo89B9ZnR5j3YB",
  "key10": "271xdQ5wbfmdCENDt4EpahRYeTXNcuvVsvzUK9Nd2EsSPuTtH2TQGhsq5n9iCU4BjrpzwFyCtVxKNfwnFU6MNF9r",
  "key11": "4RGYG7b4ksZTW1YoyyjZpNbVfUce3aS3YXYrk3BmQYExMNLn12CDhCi5ivbUjTKb343e1zGdQA1zGe2FJN8NxbDV",
  "key12": "45DC451CyzGumv6eNrovojW9n65Msrwd4Q58RW9872KJpqHYiWewK91hTHby7Epb8fyJvQJWAFDLVxAqwTTprb6h",
  "key13": "3rSFMXuFTzwqSsisUxAKdgznQevT3Tb2QkKkmfMa1QXpKaCK9haeZZxGUCa7rTZcwtAWw83kruf7HcACp4xJPWuV",
  "key14": "31UzH24UbZJzTPCKGr6nzbR5hUGsZosERv7EAdHWitYt3fBWypCJgdbi2jXRcKSeVNySmoNRdj5Y78D3Tj65sUU5",
  "key15": "3sxwtPPEt2ssAFj4pavBmXKDBsbUHJsT58D1jeMicU7Ki79pp5DtiMfpDh8jDDVt6ABMPQbHtJoTFCJktvtRKWz7",
  "key16": "27Q5EEzX9JuXXhFoeePAoxbXBHPLKhAngRMSthUDgyTZof7F4fuKq6MkXyewDKD2Xxsum7w2UMCzntr6BhrgPCCa",
  "key17": "5pXCtatrv7cjX9eZ9rNcTEsniK2yugdA5aw41ecxosFpHroC8FMPxps1jQkQNJEbRRi6d9dSu6mHMSd4QxWz4BRj",
  "key18": "5gcX5tqgEqvBoZGxFP4AGvACFY9Eqc4bNmQ6y6uq78dtGmu6nkH8Cz3hsmMhmewhQhNwuE8qdJ3JeFG5xEmjLgoA",
  "key19": "3dcKHUoHHyioC7FgyoCXUfqv2Ci3zob6NZEjvYgWtQyqjzZqwSSm6P1KbYPbynSUDzeXzhJGQsapu5x6ZFduPvHx",
  "key20": "5UMRsyUzZUSWGHDaeoAnXP89qELEUWnJL73QtK7RUTNHaK2NYEi9oUHuMK9G36L4VSoxQ1hadJccX9JGjCrtMXma",
  "key21": "5DSgqB4isZTCw7h11v51fDAvheLaj5X9s85A9z1GuRxapN1dvcSGHSyJkTH2fUHCX38Kmi6LhXBzvXPMeRnbRNMy",
  "key22": "5TVdLScsCneVJpX1y1aL8rCwb75CNLHcnc45Ed15SHKFDdrPr6Fmq4qn33MEi5senFxofb1fApZ3JvQa5Z6Y9p8c",
  "key23": "4fd6q8TRon8svtPAxwWjQL8vWn2FCgWT43omRYTssdJPAhTTrvoe9ZDyjzFPqgi8fbX7D6VtzEetiQZ6sPZBzfz",
  "key24": "5r5TVgBRTavRgrtjmsRNyp2gjRNYyDsmvF5C7cmmzKDi72StaHdk8Ls811QeQhYX3SQKmPZqgQSxAGPWucUridgG",
  "key25": "2c5WcJbVapFfSAb3Uktd3wj5PJc4ZfPxC2tdHdE7BmduZAxFrCnqRMYeVrKgScUp9esYWmFxZ12YRWpizYzGRZov",
  "key26": "4kEHJPGMs4hi2s8XaeXVyGanuM2Y7WQvsKMeLSrfZEhpNTLDitb1rUz5975yQHsnsMCPqy4yF9qdZ1feTEENfBeT",
  "key27": "2Q4a74nZf9twD35PheNwLkpuaTdS5uEhgPT56aNTyyo2THdeGh99PiQDP4gtvwUWZHAvGDkfLdEA8F6HTwdsB22M"
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
