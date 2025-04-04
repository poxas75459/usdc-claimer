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
    "4dcxVHhvJRJ6jBtb2T5ZZbLP8i36gumnYMyX8c1j1GtbzVPHciFPvFSb4prQak9Zb2SZcEAc5kqh5w9ufxDoFyPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFthxHMMYWwNW5Qz9iA4ebyCjfAvFCi7YYbmcxRHWm3uQpggwitZiWhKqWhknjTfvU6TMmNNAV7WY1VkyPjEd95",
  "key1": "5M4HGSrGw47p6x2sMK1HG3HH4Zb61J8LSptthNoqpJRwMUvftrfsSiGGhfUCXLg3JBBZtSj2cbVW3o9kD6K1fHv6",
  "key2": "551QSMrSWH4kafHacxMHUkSNrvT9BNpMM9T4GHeQCgX3oXgQR1cMNxRRNUZaZirRZCx3mqu1iVtCdgzyXuBCHjzg",
  "key3": "4YGkVqWuTy1gXBKSgXsFntV2E2x6w8fR2yaJEAvB9chFr259g5Qi54f6FP7ejZDQGsWgPNvfuFoyUD7cX5KCmZxa",
  "key4": "3cVCfxMXJhgGnMmXVKgBrXi2ASF8DxcK2f571XoAU43VJ6zcPjSTtx9gzSfPXdXRCpypXnQmTvLvkxH4kHEB71WU",
  "key5": "5uiCK2JQWVYkh8VwwDVucSKBXinGpyBZzsxHNRZuWBrVbqyJZ4iEDwAhzCbyFqr2pqskSptG4oveLFCkbztFiAPU",
  "key6": "4JYhV7ZaGay1zHUzFUD1b6phEHCN9ESKwV1kpzP7jpq4RiUufUR2ht6GeC2EKh5zzJSvUBudBWqbqycyxrZ997H2",
  "key7": "4XwvEBANv11wuAQp61jSdf4swvinXJTdr1B3TTx7ApmCQ26UqMm3FuPeTvxWf2Rk7p29pEk4W45pnevQZQ7r5ugW",
  "key8": "56w1C4ZQEXdpYSS8uM5gUU2GCWZYQzAkRapYDg7ZRWQujTmFKGx6bmUxhkVtdF45GCiNEU9hYy5a7EXk15FRfycx",
  "key9": "55mznEWLxbNtkB7eu2NF6qyYEfjvdVnTrDysPSyX69hNe68nHKFb9tVwz98PAQFmdQzSHTAijvarCNvYbVTeX4xL",
  "key10": "2MEEAzLNhp85GSsS97YNQiG5ghF8SR2e5CqPf9nGE3Zizq5JnjjsCdiJQpKc4pXZLoaaUqcLR1srNja22KZjShCY",
  "key11": "2JEU5Gtf6sXJK4wXzy9dv1xGuCo1u3VH7cZ3omZShqoiar3pmN5gWB7VgCPMipjHnWpyCo4eEkvo1r6wMD542cyd",
  "key12": "wQ5LMaxu2T1XYu5cYcXpvgzyaZnp71ifQs6DSB4xtJ7Fs4ePfQvfTeBJq81WccpD8ByQvi9KbCbRAgKvz7nsLA1",
  "key13": "4CKxncBcdjYDWYMkw2UQCf2RSK3Makwmn4aratjjfDcKQUvpU4JGobRf6HEY1QBy4JuqySaWDAAvUWs1F85Z5ued",
  "key14": "AmsZK7emQ9KcjajoEKc8wxKSA71jHJzFRkffdHdTZv7RaGhKN6LQ5KPAMjoeoLvb9b4zDS15hbvuMvmp6QZxtXY",
  "key15": "4Ex6dnTiN5GYcPrkQkQMnVGN8k2fQ8NwKWNrvsv4zAa8KExRhGjzEvSEpTEWLkKm3rnXkHxwr4CzXkdvXZZytGRw",
  "key16": "5XSxnZt8zCLggrKh4wVRsi6xvxueMvyjFsJRUm1NUnvGrU6E95i7gTpxF3xaXW1iWZYwcuwQ2T6c1SYbRhkRUG5E",
  "key17": "24b6M9s5ehEQGUofEpiMmKh7o19F7u1RZaompz6bQsN1RjUq7Y2KiaeUqRPGq7spfx5XhrG6JeA2KxKrZLL6xmpK",
  "key18": "3149KDdQLLg4BWLY81g5r3PfgTq1JaTaFvLPg9x4o7Q6wDpfuzGzauhET89JVbNxnd4sjQHCEoqfuCcYJDYc8Zah",
  "key19": "27ygdm7Jcer9xAjdUGT6qHVPDrkcrvissLzpKSTFgCn8s5YvC6uzBS9vHtfdMMrhX5tGE3Yq5Gznt3tHB1VVk3k2",
  "key20": "63eNQDbFjcuUE4dZP1evir4j63ivLi29hG5xxcjY1FFX8r2AUP4BLUwd196z4q3hDGhDrkfbrEwqXQPguwgm8JH4",
  "key21": "fVjhvAUFkHkCJpCeFTkF9mrxif6eUJiBT2UWDacRVWF71WJqHCbYZ6wCdNCHtVzo5nQkFTDAoG4PrGsjGXZH9qt",
  "key22": "4FWVaQQufJsh9aCB1Nmpvh9PfX1cWkQZjmsBRpxMaUXE3oGRmvK1jULuvYV4BzMGkZNBEaeVNQSC6p2SMK4t1u4S",
  "key23": "5N65P1vKNbu5HJTn5TDWqWFprxd9tfsv1h8r8CQEGEcDRSKWGSgzrn5G2LT2iXHd3hdv62Dwd1D6Eg7qCxjmvzGu",
  "key24": "4ag6tX5HadTRanJYfqjzWy9paJis4AtM2T4XtjR5v3zuHys11uePn512Ejeg211p6Sot1GdiP31wXCDgLE5oYbuX",
  "key25": "3PLXwZWwLaS97g3pizd2WrradRXxkDJrK3u6q7EH6YFwbp3yiojLPwNZFz14yFp1jFH6U3bhHfWvdfa46yGWPaYz",
  "key26": "5WBVFLpMeFEpPqByNvCzCcaWKpe1xNsu87GwpCfzjCRp6V7M4WvzwescBMHPCaxWyAYNgNb6X6D3dJ2LZDATMWyT",
  "key27": "LKz1QCuFfLPVa2V19x22dQeAMAGZRwAPC6ww8S4WPmp67vQPn7YJc341Nkq5BnWNMUvAyhQ2UFiYWZmhBfcxwMG",
  "key28": "5yShuiydptWau6CiPXotKjCNtARnk49BZYjRuYAzJMXRzYCNjJoHkUSX7WTnW3BNcuKo4HWt1HoGgk4N4e8w1jBV",
  "key29": "2Db2BTbXVWd2Rcqp4RhughCTgYotZe5X4AZ32J77mtS3mJiZahA4nVm6FPxCzWSq24bTZJe6eXBQosjwXPS4CgBh",
  "key30": "3FPqrJCGTwCoB7cm2Y7CNBXqEFPvAWi9TYZ6DAReBrqzwtgHeDFou6DiFZ7648hSukNDWgBkitoQWZhDdXfn8Pi4",
  "key31": "3gBdLj1871nhJNntQnVKY9Lqqs3ymDvoK8jCVYLZFDuhbBgwFDpbHieMy2YyR31vYZBZwitwRtVHqGxE4T6PftEm",
  "key32": "4fZSgz1xnjCfMrECMHEcABLSCCQWurVuNNyN8i3JR37Z59D64uVnf3iP6dYZ2tYdGRAWqqL2CXatkPLboYFQ9dEk",
  "key33": "5LDFV97geag9KP8nCwcM3T37zXMf6zh32ew6XfHrb28LGv3rRBpY8XDQ2tEX6tTY63j3QkmxEuwug7ieRywYdey8",
  "key34": "4TXWUmxKyqnP6fZy6zVujhPZw5krXJUxyybzMpA5ckabbimBkL1yKmvLEPaJg87gdpZqfmn4SrYwMdvobHM9LZTF",
  "key35": "5M5yEdMqtS2L8vCJAEwpxjPPdM7nB67VzCAcMiFXVn81hvQYcz4NoNg3nsPSS5bkCAuSv2T6s4HoYVneRAGxfea7",
  "key36": "5yVDuVRgWdSgvDrvb1gPzDPBZUMdmMkEgztznnpAM1EUbgym12p5c9VajKHjhfW3rXFDU5bcgmdNMhaHGWCpFmuc",
  "key37": "3o3SWEZpYVubTqW3pgvjzgKDXscLJxYexXePZKWSw3nKGY86CQ66v7f9bkrmVd5kKTw9CaYRi8qPdjFKz6YC9Tvz",
  "key38": "2zz7WXkbGP2tBMQafvfBwRg8WNsT72Snpo2PcMLjRfTiA14voURSVmveTfDiwSw8Z8qHktUrTFqxEeMKT17joFtu",
  "key39": "NxnfoEwGxfKR5PxaeMCEdzX7heA7R5VjPX5RtitC3H9Y7VZAhgCFV5KZZVxyKgD1FFkQbvCvmYPsSoV7Ccdw8wV",
  "key40": "27KNdToQu32mJzW2zWbt4rz6acQ8aNLrL2wN9GPZmpbQPavMuXNQxDmvmnnz9pLFo6addsycWjGzm244GT3NyKAt",
  "key41": "4GNGCqYnusDH9xAW5eZXXd2HMpzrDHRwZfmNf3yctGg3MCnQncm7nbTZGANF2nJep8uVgVJtNz1KwUchwksCuui1",
  "key42": "2MXNeZvXytZeKBJxMERJBDom4yA9krfYcqxhSBq5j9We1B5Tkx2ENe4twZNPuoozCHnGFXi4mgghVsWrKh8wWDxQ",
  "key43": "2dXk6JQm2FT47JBs1frGvdY8NsCuzG3M2X9r5tvkmzdk39xHV9wRHz56FRAUL9tqnC6sdbEbjr2csYjNMCRDgfk",
  "key44": "2jcz6VtvqLeXiauLvcZzi7YxdRfhYBoetxiCceKKM6VnuQThizTEjCVsFCzCj7E6NJvd8ow458cC5cAo2QnWzFKc",
  "key45": "4a8pfBvpikrnuJzxt4WfphcpBFGbjctfDGMDrw1LPXukMr5u8p8XQ7mTTYJYFT9GT37UQ8wdxa8e43qdiLXGkWkw"
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
