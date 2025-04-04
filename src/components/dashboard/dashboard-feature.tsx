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
    "4f7MjPugNHgiG7kej8FJDTrZyjwBHVYE7X5YfSucEnkNvUs3Sn9YCrAAkdfKyJSeCLPp4eFkckFm66kjgqEKH26U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67mbW6ZVgXWXEPUJQuBPYEBVfK7xPR1uvUVUGNKosurZJhfagiRKrUbggJKT1hQ9nYkmJZyxbShAHSVN4anEMxYk",
  "key1": "28RNuCZsKTJifBaoogEgnBJT3Tv1gdExS91bpg7phn9LRES6rfSDjfqcWRmzRv5g5mtaGa9U3akHKaHdnfBcKcFq",
  "key2": "3t78W4yACdZ6WviLD48rurtePittLos74Xf8knNoyDFW2nLukBCNjsKYRWqGroGCjpnCKXpjA8CapJk1Bdcuwivq",
  "key3": "5FHVQrsK8ygFbxxXDSL6UNvfCpsqKmVc328Zjr7oDMszZsd2vSnZ8FiFBygpteoHrk15SdHX5gbfVkbxg6BbM4eu",
  "key4": "4Ms5v4PKRREz3q6Mo8HAPgr2ssXAt7jpLXtLrUQTQRPMh8fspBNGcXTvW8yB4xspMWw25bDAuzqdWiZHHYtx6PdC",
  "key5": "5u3Stqr1hAv5Rh8jk26hTtQTTcjjYnfD99zq7gT8toJd51ZcTMo5begd7rcNVKsTjSwuzi94xCxi6Mx4WW1d4Unu",
  "key6": "32AB49PoAYnwZnd8BgGYqqE1VrdY6KtrKTA2v3RLcd9v3HwCsZcYh5K7H6B9oMR8tBDUhJ4bRDCBTidVsbYsZVLn",
  "key7": "d7ywD5uqUG7mt8MWvwpWmxsXAb5ZZKAnGvjXe4guVgzqnZGSAitSWbPpbXMZbzniimt8ztSxJD9cpLnMDyUuPxu",
  "key8": "2F4jL4fDRcLVbEHmDvHZQydzYe2PzY1UxcaEax9WoKK74K6Q3mcB8nKo6FEZXsbXVdDfcTBzAem4aqmEg2shALi8",
  "key9": "65GZqudoBuQgJ1citpFYFD9Dxx7b3ig4vsUGJhFmwYx2oaZpoBi1FGnR2jPM5kY5mK2ri9ErU6Z1qNJWGTAEwQDP",
  "key10": "5PvSszo2hfzC8sFwEKHq8dWyxawVeBAVFCiBnv7HvBPKC8jmmwCatAt7AeLXNJanhASQwEjfhXm7EaCmr7KVsMPv",
  "key11": "5FuR1VpBuQa4jrfztWhkvcEkfjHNV6vxosKxCC8jBpYYbKHCYR9sthhqStfMpWNc2GyLYaF3BNFKmMJUR8fXnFzi",
  "key12": "4atFinhggwGhzfTSTNSnXZs1vZgi4Ef6wSoTbGPU6KgWCLeYFHpVC2LT4w95tWVGEY9GRtWy6TTUjj6xn12ytHkw",
  "key13": "4TYKx559UAoqDzoXvg2kawyBBkSZKqvyP3rDRo8rsYEcyVEVx3ouKG6timAhFKBWyKs6CKBDfeguyRtp7xhMYRce",
  "key14": "6izj59JPMNm1kzPBgZ6PNh7ThAHt1kTR5R9vHAVhEqGa8wYDsjiaDJKWPSH3KXoxQWqca1K1BCcCko8BT9t1jZR",
  "key15": "523iXB2gXZsajD5e9MEmKPq5N52inSwHqrexirqQLLfVSdDCLeCQxNNXHZkoJjBx9BB5wcN6DNb7U4REa1Tt92dQ",
  "key16": "3W2E6ptoMRayELYxoSWV9uh29BdgMLEZ7cHZLavKbXSiQHjngEWaHgv4ngVzPkV8PiEwP2TaeECkHNy2PXnnE174",
  "key17": "4DDa7YhsKemYWMWA7jVHQkjNzmV5RinvvQJXCrwboYf5MK7GeNA3aB7NZ2DNhP7jowngGgKXvBTYA3hVq8KYuKxh",
  "key18": "yqdZZisVfVGPwCNHshQSngdLjMZKLFY65yaZucUjJ3ezLsdsJx6s76qApwinq2M3SQw9azQJvMkuHNWwLYBhDkw",
  "key19": "2vMHfVmdopQaFHFAcc6Htf8WNm4P1XF8FBuTrt9U8KDPxB88M34djcTvLoSDrDiGQruYbY2gbhRNXtxy4jfgZFxg",
  "key20": "b6kMwPTqKNUpZ9jrf727YmF7bHWcT9wkyeEdokd9hYeNDoJqu8hJviSiChp5sTTB4HprxfKgL5yfzbcWbsCChqx",
  "key21": "4shrz6wWNYHqBrmQZB8cxNa9JkXUFjziH8fQNCvthUdhuwAh5UdvJmRacnp3chgQqk6LvXDdbC5ZfJvJGpePLpN9",
  "key22": "LFb6mnrwSeWdzTCBsqkPZ6HHYvjPKSQvxmCESSrJGTeYjNUnHsqYZnmw7x1t8r8ZpSkzQxsoJTXhAhwZEJzsEb2",
  "key23": "tHrT8jTnHqJAnZQEBwcCbBmzJLesJGewNH6Um1AaPSTHGTiVMYkb39rtP7tpS9iQPjfiF21321LYMhx4B4rBrN8",
  "key24": "21pqWE2tmDsC6hY2znFUyFWCnLDT1eTttLovJWaAPQam6wHBx2frQbywVFsm6giCv4fnQRkcqRxJRHaS9RWEPQvi",
  "key25": "4oLgw3RF1Xnn5qoGnn44RGqHfpsZEm1B1Ygxn6wa26otZA6EPd5nCgvdRW83MNimG2gywQ5BucHrn6mkoPGwzRP7",
  "key26": "9BdTfmMPJFnwgkz6ZfiAtcJUBmo7Tco68E5zMb5QhpWbCVnoiimpYXisdW27BBHKz9tMeD83kUH4Sk14PL7stA1",
  "key27": "2oe5vdNPpPKK7Y4pj7mEPRoMTLhMQFw1jA9C8CgKW9VyjWdUMpT6iuWmbUaomsm1Pn7hNo7BdgtkRKH2Pede74Cn",
  "key28": "ydsTH4ebGNEAQPRCd8WVHF9m8VDhDWuFtRYuzs752EvGD98n2m8d947dgDTMznTHKeP4QN6wUTLh76PeiNuEviG",
  "key29": "5rcEq7Wxh6SUBfNz7fBUsFK88nbCKXDpXzQEKnfipyef2AV3nthTt14hQtDYS8H74SZfdmYpMW2FsSNXthh3FKGB",
  "key30": "2yCzUNDwFXZ4huLQz5YCbxEN5t6C2uhnes8be8YgMgkwSLCeSmAmcC4Kaw8tVhqKxJcr5JHcF9J9jPd4xYPJE4GR",
  "key31": "4kvuQAPq4Wd3Tmjaj23XmTfg4iqdQX8swu2NU1utPjkUEjUA4LqguerkRoiFFqkvyWdNjpK1y5NZ7oeS26HgELGB",
  "key32": "5CMxgecMZtmCuRgeYQ4K1cJ5GwwySKw74ptKXBNFDbtGNwC19ykAQWVBxoUgto6rBSTMXF5uKLRP8GNMo41GQeci",
  "key33": "4tjpRkQHbJsF8E33uT6pRjaeUnqr9xMomLxgFD2ehzaMndeJgToNs6zKbSgNmXdRPYp97WTPNi2NQsV752LhoAWJ",
  "key34": "2Y12cGcDAVUPXZ7DiqADgBxBFNJjoS217diYSbvkeXkCyvYaS7v7XBeh4sZp8ninh8uUSywrfX9ESJJzwDbn5bMg",
  "key35": "o8bPxs5HhFDRDhMjMzPvAFkdnjUvfPVUKjCE6R5885tUwdp9eSxfsnHyKcNAC7xMqrnCUDe5fu1jfMwCbifF3uM",
  "key36": "3mcHQnLN9oDaBGbPJN2wLoM9MEhHYAHLLWKnALmJEXRiXUx5N1BynfhvtpgQvwrFoLLC2UhoenU5cenau3oPdqAr",
  "key37": "5pysmLt8eb7n89hYVAGEWc4xXS5wUJryXXgBP2t6nGPTjp7HPWLDfSiuc2J8semVsvECDeEJ5GFkQbKwtSPnUACL",
  "key38": "3rjezB2Mj7pHKP9FC722Y556qxHm28cvTkUBZSnnZPFGqrJT2fRjHZ6ybUW7BAoq5y1J7GTHKaGKoCRSnCDq1gtE",
  "key39": "3A85Ppyr8uQqYpG1Y42td2d2yoauyhMTkGxq6YQU4V2bCKx3NK69Dn46vCxbMm19uSSnRnJq4GmP31zRUQCSvpDF",
  "key40": "4fU5Negtk9UwZvRyRtv5KwLawcTYUUSpD71PKUMTcS9ivPB8aEDXedzFGabXNVdmjC7Ks1vzARXvM3WnWzM29gwW",
  "key41": "5EQcX3a2LRLsE3gFm49cc8wkw3HxkKcvVfsshkW2PJ479hkbhPVbu7WvtcTWrUm91WNVF5xC86JhnzmX7yGYFoJb",
  "key42": "SuDgCtWHhzSQxZk9f64NUWZqD7zeAu8PPrC2GBawn9ytwr3CgB4NFcGTCrYyCrJRFGHy4LLhqNwAathSqHR5Yte",
  "key43": "65P9tyZxek9dwdKnsShVcJmoKezgE5AKAUAV4zBWnuHqZn2cDrVg75obe3huMBCA2x1GZP5GT8fSVFbpdbXQmTv6",
  "key44": "3NRUrsGhuFCbsoLyT6CZsBiQvS98n7oBWSzX2sY3aUe9qEU7HKtodAf44Vyjty7ZuaTavAmfZwzejYkrwK6P9Eon"
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
