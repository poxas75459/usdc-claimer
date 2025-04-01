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
    "3pk12LQRUiPJq3owp4Jia5ZyMz6PbacvuqkZEcMKnpdGhmRZrCihbyypTVGCKVFy9c5mSxfpoaFT2koh8A51LomT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vtkHd8b7AyeK1VHc4pBCoDLSugoDEvtMCvejHpzmM5ZWHPF4Ff1ykSm7XdHcYYncmNyUYxCZ1YgFV1mKMhKSpHf",
  "key1": "udBpEJik6dkQKkNjCPF5FwKzTmV3o1LKnGUkAGdyQQccsAAn17XmtD8MC6zvaSREPCxWS7egcYf1NG1zXTwG8Eo",
  "key2": "mdyjNDqXhFsfGkEF7zncYwiHqyJLcDj2uzjjbwABcRp9cU8bj7G8hra9SUkntAR6MFpCb1y6kJxdvbcdj2rDNBj",
  "key3": "4yVvjgb17YRBCww9rzk1yZ9Li9X9xD7sUo9KYVvhkCFNah74RDY2QYgmUGsLmFnvKkWWhfE8qqTH1sEUGkbVipvd",
  "key4": "57TwDxpQbniC566o14QzANxrSycvZ2bFnN2697jPWVkLvRz2cmgWKGLJTsYatmHiRsDutC2Q6rJYCTmH1PzsX9oA",
  "key5": "3sTpaKCNqTtGrsDkV6vbRVJ1bWCa9vpnEWieBZ5B9vMxVYidaB6DqB28PBFXBQmurUZRqUS5yXzGXoo786x4aP2f",
  "key6": "3C1T5LGUqxMM85jmPXnuU3WhuJzhYRnx8unn5GmE5yBckDo5cuqYZ1AyUwryMgtMxjqD5dt6WFdqiao5d8zA4AGE",
  "key7": "2LpjeegqrtNezegD13dGo35WmTtPLzGaCpUdyNbAZf9KfUuyPP3pfffeMXMR7ZktfrMFW4GMqVHPyPfgrY7HMMzb",
  "key8": "aBnTyeS2Ugg9HNHhdS6s26nMeiMXULQxZccpqUSf7GVyDGCKAQgks76GKBc7XQv78bCmrzvG8jVSTBs3NBPuFB8",
  "key9": "4g9KDNk7zPWE5xDV4PBMiTgKz6ed1SzApdbsr8sf7oe1XKE8H87zKdfUKyQquwfXssmFMKPYJpg6Mswjoy6voDkT",
  "key10": "2mh14A1dmSvf4rjKsrWHS2Bg6FJkcD1QHbW3EZMm3sngpYup9a8JPfZg2Nc9SMFt5uDFRWdLmLQkXM8exGZ8wiMP",
  "key11": "3pCvqGWVWuoYumWDdzorNSqRj4DfNMDwACA4QcAH27yU74Fs3hBfefmsrAFf4x5FSEZwfh1yAbq9iRv93TyiQw9h",
  "key12": "hFkFGYLQek9jm9JhES2pyerKj8LUAwfZJGrMSVw8c1zhYAF6kW4hnXq1QcRY2xDu7diLtn8WEsfUUggHBZHzRZt",
  "key13": "2bVsYbuGxscs4hYf5proDcUygNRkRmsSHc4dytjQd11Ei8aVcb84PsSgZT7EYo44YLYomVmWAmhXx4YJpJDkS2HN",
  "key14": "3Vid4kAzBS7x2g1gixsLNpLZA3jBJ4Ri63bciGqrGbcS2vZoxQTZrGa6V4ofaxDcQfbhRUhUWEyhJox3FDRyYm3h",
  "key15": "4sVQHGDZuTDAYuRY3Z4Vry2rQc8jN4tXoHMnLwmH1DRQC2zVWgtwxFKBvtTNbfVPi5Uoehu1R9nrPLuwTVvJVHCy",
  "key16": "4CQMM3B4cCbZ3yWTmikHFq2sG1z7abA74C7SQTg25wM96Cex6w3LqZBhvzoAchn7PChJHg8zghDoZ4LnYLHQvG9A",
  "key17": "5xQvj6VbVGrMmEHJWkVWqn8PG3VZKNV8Zhho8thEQeAaCvomVdwMLf6T3EV66zDkLuoFaEtiMHyt1uVQrtdb3LRR",
  "key18": "3Rqrp8aS5ppujoEGJ1a16q5nsXe9NP6UtzRCdFh1x4mpsRdnup6wvHF5VFrHmaYEZPZF9fAHdjFgma9WcHyWyZtS",
  "key19": "jZvXML38MGqRt48Mo8etbB8eStFUThC3kgzwfvpgNP4MN2EuQ5omBqWijSxbH3JasMrEZQJhxMiSQpxYR3vHFdq",
  "key20": "57kAyA2sxRbKdPKM2wSPAdd2GZbwqmEi9auqAEWTT74Yy1R94v7JpZTQjvTjYVfPvXezgR5DWezkdLjSWjutvQyF",
  "key21": "JjCg4f2f9t9Rr8eR7gH7BSvcRt74ZQJ734FMqJ1nSEE3wFiPtgFy9tnYdPSdpzNt8RLjp2HojVVjKb8iM6TzK2Z",
  "key22": "5EgkJ854F4g2xPbf2X6r4GX9QhsYvVBmehQM7MoteapyaKwxHH7b9h7XWmSRYondFv1LwjXkX8neETWgUHByp7AC",
  "key23": "5vDJLLXvMRw4WcJ9Lsnu4oYTTDXEQBYcMw3mSG6iymgtpKWBCsLDoDtS2VD1H5dGCgkgAvyhm7UBJechAvGtcm8L",
  "key24": "XFpdUGwo5mPvpEVWxbnuWFsNS6RvuJaGQHW6BvwuyhoRyc96yt8yMGwnNTtyMmYe72SNaXpVMrXMAo4BBaxWvsU",
  "key25": "4KVobFsp5BQj5NWuzaHt3sADcb1G9xJnLZEcaUBgoKKiUabv5NWURt31QqCCsNvUX2gpCRGBiUJwfdaUZnNG3yfi",
  "key26": "4wQZQKeaVwFticehBUAEuSTVhcABCwFEt1WcRVokvUMXy4STdKgJBo723G7brnj1HGLg2Qwgc4P4K42rNmYrMNEE",
  "key27": "NUkWDUjCqQYg4nhqxaQwkPBRn6wkDy5DsvGVaejECta8hiPyRTQDNp8BvdnAaspKqtP9HZV3J8hyUtHvjGahszC",
  "key28": "5Xdz2XiobbrzniwwKVw5866wKEMfSME5ccD78srrxiPxYHZ4excZXVSg3wja9iPeLbxQmkUUNxJodV8NFfVEP2tV",
  "key29": "51EvXjizE1usnQTHWL9YD8eqyGgtLLowaExKjCHAAG3C4yTU6ayP6tqvZ8FnVnokGGvQsp3Q7N4guTLUQAQVYHA8",
  "key30": "5CrVV1M1jA34WEXerpYwCcHVVHTMtCum9JDvqxHrjee4ZDbxG6ozdMafYVzsu9t9cojo1ez2okMFiAeLGUs2jRHR",
  "key31": "2QnRHxXzfj8zXswZAAtXQDb3ZF221sEjbjpNjm8oB23naPsZegZZWvcqHRtBWKSRB1N9XFwLycTfN8X6mN4rG3wV",
  "key32": "2mE9pgcebXcyvGx7mbNkjs6r7q38FnPmtPjWuCxdm9xuGyQ2zYzgSvLXo7xbnRDw2Q7e3z4NaaCGudGmK7YmonGg",
  "key33": "2aSg6qUb5LHa5n3JPenkRyqsv4VcsgXiRUo3dHMi2vhrKpkjN4dSUu2kgomohUcrS1PasJBxnGB6pvxDrKtzcDXD",
  "key34": "54GrFEpDYpWXURnCN74vk3i4QNYczwFYhuHtznkaVPq83hSXVjGr5G2HDnTAR2CE16NWx3sdk29sde7BcPrrwJBL",
  "key35": "5QcUz5TnQgrt4VBt7JxpEoYHNMTRTVGokfKX6FktU6zw1huWRmb8z1CvMxXm7DN2eMUY1rGakxmv1MT4ygyzdfY8",
  "key36": "XZGGLBzQeNGHaS2a1BuqVzxHvCPBhRqM2pSdzaJqw2EXvpCfhiAWZ2XULEcbXWaA7gVn6dbzVgotxKCqUsiG2Uu",
  "key37": "4THS8xHPZ3jmLMAknhYTyH9UHfs11pVbt6MA2adjVSXzMVWSHigXJ84CM3XVAzZSRk2V4yv7efmAgGEMPgJaQ2J1",
  "key38": "26ppwRqabGFTB5DQCedn7T25ctRUU2YzcZ26YvBwfyREhh1dc4fXCW34KY3cosXyYNpydj8PUNdi9RYVQoz22FKn",
  "key39": "4JbxnYdLN33shsau8rvadGxMQW4TwBKoWNYo2M6LxqKC5ZzYReKyFFFp7sGgYd7hq4bS9S1VpjD66anYReNE2jGv",
  "key40": "5QpTUGRv5usSuBzQBK4woT8KtmQSQWRgA1LhYMugJdCY7iwVZantYXByH7vcZsQAXSRtSpxbYb54Visd3wR2YDb7"
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
