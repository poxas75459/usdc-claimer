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
    "4CTT5nM6DeNXvMW2Xvz3rzwnU2AcbTrTmTukbKjG5Ls8qBCyHTpjzrTd6AbehcFdeVhse7STxLTatTUkhbxuH6ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKPNBjGZUyt3RbhKrMNhc7mMUpHRsnu7iGwB2QsgPG5Yx9d8kdpe5yQrb33jyEgZJVsdqD3phDQhHcZw3xZzECi",
  "key1": "4dXBGNUepUWt657XF3gxFEL2vAeRpTBXZ3SeKnKZfxfN4teRyYsG9mMSzgRuubimgXwHc3VCKBtDQy4UA3Tnqxsx",
  "key2": "2GiPUQp7ixwJD52HeKKttM5WEfxLuqz3y2PpKWHzyMtea12TJiEXSjnjH93Q9hEiTjS5Z3AA5ko45rsdeb1SvfE5",
  "key3": "eXi1bstCvT2eDzxqzAZAzPegRfDZhKvKAddVeD1XKDv3v7yVBVmpteHkatezzx97bshPUYxkWeE5hUtsqxNz15K",
  "key4": "5aTiKzNwi9D4DQtBUFXK1beUt4qvpsZJLTFrqfLiPgXFpCgdZ3Cv84Uj6LJz8D7dgbX4djn3nYKrRLg4YWMhpL7C",
  "key5": "5nXecQT51UHAsABgDi8x3gKVVifW7vTWFV3PYgHDhR3VBR4wk4CQBdb44W9wRW235jZXYasB9H8QBfNRirb74kAH",
  "key6": "5aVA7wjRCAKuA1aZ1PYSsYPehHMjyEvybK1QNfQWrLoJJCtin7qHe1xSWz2qT8vCajoJfPKDT3BXxY2iLT1mzC8s",
  "key7": "5Xyv1Z91P2dBYqbGXVYY4dkfP1qa8LAYFz4j122eZsKm1W97Fq5iRSBBa9nFUkZQXFZxYiaaKqL1YdUxyXXRmxwU",
  "key8": "2MbaKi7L9dvP9wWX3WHhGoGEskzAXFcKZz3rYQCAnf5MpfrUdroh5pSdQ56bHZK5zc6cXsPX3jW2TJmdQNdyrtWT",
  "key9": "4bHtj3KpUuXPumCgTjE1Wop5EE4FCF42p14JT1DsiqF2Stt8SaMJzsWE6Nj58s9j8fy9YV5KEsKqm32Wk4isoUiN",
  "key10": "5rVPNT5WrMqSQKnA7kHfX4onut7cgJHrbi6aKrG5M7iLun1QxNFg7NWqWX3JjmPoo37xBE1qmHLo1es82zK3WVpZ",
  "key11": "2X343W9c7j43AMgdtwDNReiTAnXUuzCf2vPagq1c6nx64nQDWAXV1pcMJcXjCocoQLTof9dsg4ZaV87RYUcrLACF",
  "key12": "5CwT4CnjSTMwQoh19dLJvgdVFjm1RxjHqFoFTFynzgAcS1yRY3Jy9Nv9Ff42um4dJSYYtCi1MhD4JxCQNvMzFtWz",
  "key13": "5UR3eLRbX8tCUvVkGvgo6hhLXq52tqvzDYpEzj5LLFF9iu9xhvGWnq1PSKCZsAYWri3Cx9BdiCwCb9KSRytamXsW",
  "key14": "58BnE3XSHS3wRx6xGqtXQxrKw8smR8mVPR9dBmCD4U1mo6gmPLJXv6hwfA6cDt9ThXTHGSMwdbq3BDzXAzwBWiZX",
  "key15": "4SX2F3H5hJf2nYYTwg3Px19B2modNM1RKcF3S4tBhM1LxFLKzDaXCojpqw3WzjMj9CYPvZhESR7Mv41g5LU3HsLJ",
  "key16": "269AZY7fqcS8T3iyBfXMkyLZ18B1u36DkVkFW7pGuP8TfN6PWHEg4CLmvkMsxekv4CXFktEo3oPXbyhPM5GG28k1",
  "key17": "2QfEG7GCuqyK7fpHwZr1AHmwRH6q9oqQhTns9VEK3HvgShYUFfvWf3iG7XVZtYPXM8R4fGoLGU2YzXraWMjSQnjH",
  "key18": "a38TfhcrMViPmoGL2YLdojkkAdWDvWfVc79hNRCRjZS4dA9zHM7JTRWaJVQs5YpATm2mnc6GXZrfpLnPUnrW4LH",
  "key19": "3CVhfeuYVdXnh9jkT7tMZHqoT5EEWwWByiLAWTBEFheW47dNhV1MSzZotwrTZrWkPMJHx8cD98j5FNaZXzK5rcL6",
  "key20": "5trP1KFZ53jxAoEwv92BB3PzHhebZ1dXhTAxyZJrG1WnggvwMb6Yaac9AEKLYsCUgjrMJfNa5uWK4A4XRcqYXHCF",
  "key21": "3VaHRQDpd85utsgaHSW6DPkneuAYz8aLoSLkmgmSQp7qhdUhmrMA5h5DGQcmoVkA9UUXAGWdNkMTB8wr9QrwyXZ5",
  "key22": "42GDePFRBVU2r67mKaXDUKmykoh48x61p3Y6QTkEatBLxrj2mSFkBWLRfeBnan5Jq1iUZdnZkixDtk5rn6ay5m33",
  "key23": "46tXyK6owUdnJKVeKBNpo9TozKaRxMn5FzMB1rqu4BdrVYFiNmjvqjfQhqcdbENPbquREMcTQnEecPobywPd8uEV",
  "key24": "3TpDkc7zE987mGjvoZP5CrgYbFnsJ3ZkiEQqFHsYomuhrR7utrzEfNyHCcP5LDhetmpbxyiCZLfmTrEgyACd67zb",
  "key25": "5Jd23DQXNBGLhhwnpyDfHQjyKYK5dZhPSTXZkzMzoBAhdwN7nXbRpzyJjnJvDhJRkgzmWpuoNgdM9VEfM4NQYRhf",
  "key26": "5moUz2bcREaCLNk8k3b1f6aCsUiYXkbdaZSPqY8J4MhpoCNpTXD7XS5Rw71ZLBjMrHPY5wvnpCjTkfrvE2Zd4G25",
  "key27": "2md6zoXqq9iM7t5BinwxAd4S3JJUhw78UtaQNkntFWeKMvWQfngkT3ohmCvXyKoPDNE4TzDjNyMkbdF9PPEKD68x",
  "key28": "3i72gZ876j24Y5XNPmd59EEigm6z6YGTsgY1wupQGeqKVBNsxmGjJbUEx7GHHsL6ReuVpGno36Q5fGEi9KYMbpGq",
  "key29": "2D3h9sagAdx6XpuwVwSaRHw8oC7dWzz2BQ8wujDNcge5aHi6UgoH9MBZNpPTi3aEgy6gcov9AGSyMH9CctPn942Y",
  "key30": "2ANg6K5bd8FGpgCd17hjRUBNdUdE9m7StHxH8JSBg46ekvLr4LKAzmwq99BHnR2jTP5Han5vKqHETwEB3DgZTzj2",
  "key31": "3kqseTXrvEZ265rDUof6kySW6P8vVDX7Pknhd4sJn6BdCWQBFDyRvEtDTm2T8LJ5NPmQ297fdQopXRaSx1RSxMAq",
  "key32": "3C83untgqYzVnJbvtCgJhjsJyeQpPoBmJciXpAy65tS89TNqQ3wVL6ibLgMo8PGVG8udjZyPswkZiSuaYEq6g3Hm",
  "key33": "unDzia8qVqpkE8ASNp4ueYx5ynyLEAxQCMjov55M5iuP7Pq7jrBWY1XjRRgXYFoCER25rregtuTkgZQwfxSy4v6",
  "key34": "3zrC7wxvv8eDtxgvE5csR81ND1wS9h1H98uqBQFB21DzVW2mS7byDgMb3XU3F9ZxV653qXdY417jPtR8tadP5nhD",
  "key35": "3kGjCF77FV1ygQmWtBb3ra5Rtpy3TezXoSZx74VwDPgFx3qv2E5eenqT2EJ9eKeeHak2Q4rjiUBBweCfdWs2499v",
  "key36": "2rr4zZH4QGgp8a9dXZPqB46eXmT21EtQ6J1GTrRvzyPcbe8MVsD4jVEJZWMtNdvgfnf7c1Am1c2vqQcG4kxnALRM",
  "key37": "VTkbn2NTMh1xBJn5HUdQiSGsgXcnttNne2zLcoGAgGdypsVE2zwFBCt8qLRZ49NwNrUScKNNxTPLnxpmrtM5UMV"
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
