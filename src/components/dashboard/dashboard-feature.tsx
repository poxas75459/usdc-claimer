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
    "2Qb5BigQQwgy442NzVarXjNreb9P3Cz4G94AXZJeiHv6HU8ocwij9eX3Hq5jdWLEPqphfeMx2vYSzyEo4tVyjPwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KabvyTfk9UUuey6wy9TRWrNUDePRce7zFPVd84nAV2pLxqN1ABtN2ramVFspokaHagfwMWjdBrE4Z21fL9LJNzQ",
  "key1": "kdmBTJ3hkVgEvm8gA728T9JuM99YVMVN3QP6Nu8Zm1dKjnJFxkkVENaNxgtcNzZVJbLf3hi32chnE121BupYSyR",
  "key2": "3ysYQ1gAhAbLE4WGgQqMMyQ9r89Sydvb5x6UhKttitVcyKUpQEUQVdtakP39SHCcAGUbHGzZHZgrULHmtZUsu6L2",
  "key3": "4k8ihxSio6reQ23aDWTYEEczDJVbkgeKatycv2kkFvoBNSiuZy9uy5BHwFiiK4qGme8XS6LAszfgd4jFAnh7nfow",
  "key4": "5zXoFJ4oeXGfL4GY6nLPfpcyBaiG1XZgnQufRr1YKfKTvw1YQxy9WTyH9WHd2EHoPwn3LdraSv9zex3VtdqGXuvf",
  "key5": "tjFuvAvpaFFYr9DkZX3cn9rj8UEQRsd1T51R6stYXyyVp22xJpb6yFwJbT133v9LCNo7Z5kTPDNiQgfjqA1oXef",
  "key6": "27kEwhoJhbpcy8US4ZW4NXRNNNzjXnRRMxTBDxkZH4Fp68RmaJhWdkivBZFF44hdanpo7wwwMttP7qsKX8MVajc3",
  "key7": "23tgWqmR9R9DDYuV9b2UwPm1WMGuPHZhsmnJXgqbWj1ixmg3mDyjoHxerFQWUGEUMCFioovCrXzAFHewWVeckYyX",
  "key8": "4HtbKg6puKBe7Umb1Mtvc2xyQ2RmUE3WX4dBAnhLaEZDpHt5KB6FzxDyzC6j5DJfMv62gbK8SYUqbxft1SVHu3hw",
  "key9": "4MdimxWAh8LLsExdK8yRhesWgtRaoSMZ2CZyuFtEBD8p2wK1B4dFXjvGjSbHmtJ1axfdmzVLmzkNshqLATTpnXrS",
  "key10": "5dyPge5eRnKMJhvbsaouzZRbnbjeEwVTFGn6MU1e3Ugjer6RgEzRc2UqNQXprKmgMApC8ijB2Eo9pdNBga5qKGy1",
  "key11": "3gwZXsYM9c5SQa3Mw1JA5VAnLSzwNdEX7C7z8idUqjdfjpJiwBNzmJJN2JxsTPd6E7TpRjkNsTP41Gi5rMBGDwA1",
  "key12": "3YcH9ioWbh7LX7bagnAGmynZCB3fdAwp82fwX9kEzDMbCcoVoydS1NFtFu13aXNMzRbzJdQiXRTKT9jpLtjKp2c8",
  "key13": "YSP4DbFmXqvAEfny3krzAymyAV8xVdBKzbWAZ9sr8KmF98oHe8yvFH5TfHmDnQC7iG16FLtRTHWNwNvjJ3LNQUm",
  "key14": "21RUWnqK7ovmXtNb6UzwKS7oEpKa7eRLNLzW6rjjELBzUgCpDxY9iJifddyvyDvkajokohNUjGCML2MEv3uv2QMk",
  "key15": "4VL4EJ3syLXptpw62yCwWfp4pfDYDCE43pMy52bg69TYV3TejH6BoKUgbiyT9JoCWkEJL6Xd9GwJW74os4BVgeMT",
  "key16": "4YxceteuU9ZLSc7vhTTZJce8d629EnGtcZqwTb8G2885xTTeW2cYKKXVyPGvmQJHjEHuLc5fMLH6S3z6fJPfJdBQ",
  "key17": "2oqjgjvTLiuUZGj1h1d2L7p8o7SNrDqqcnGDEfnaJdnW9P2Rbcg1CfqNgrn9qve2oEKumW5XfxtD7v5LwZMDzLJS",
  "key18": "4M7kkk2ui1cuy7S6kGxQaFfmH3KmM7ig4PzYqcDNCJREAmQG4CmwVYbbMYkxC5YmotMcs51nmiQJugnvA9FAgsKg",
  "key19": "4ypwtNtXtbPbXcoJirzdjvXF4kXzRatWaQMNkabjSANzTY66yd3ztYwkKaUPGWP3wg3gNZwQHqjbGFDyiG2U3CHV",
  "key20": "47HwWwwahUuf6Z7t2qFQjBJxyhbVZm9KmZyFwwBCr1d62HKPecL7BEV9mxjr3ZktkDGepcgD8BaYCdoKzKcTNDTm",
  "key21": "4KeRuAWAot4hET97rNZR4ZSu82ad9EgfPFsnscCJBwBKCdnYkvBSg9jyimHkAtSZWr1gJaRnMBJPTWMLRDiaC4yW",
  "key22": "35VptSwtEGXHoowjNH7rbqErATH31zBT52RT5tRxi6Xa3GZ7NKzyv3DPq69qipZtQcbkBy2FSddAoqZqsaSMGKWA",
  "key23": "2j5vMvwqg3PLVaTcaNLAxEr7qELqQJdFjd6BJ1x6iBKq52hDCt7XQ4TxBBFiDhz891dbfoaWBgo7Mn1UQWUBqkUG",
  "key24": "5wkrFPDW2obKyyeoxwF9ycSsjxGQRPJoEkwyxCF4mmNjogW4kKKtmTidaByvD6HasZRWtXV4TzTY18qtr4yjh2HN",
  "key25": "31cr2KsFyU7ac7mkWtJpyC5yT7BMjX7x2fpzdbtCpbvPzvT674Aggd2pJnKs9wFimkFSzs3fzdNinfdXVA3YrRZt",
  "key26": "58KpQHDwCUVGUp22UzF3knVB1r8ftBNY5KHsK9HU3DLsMeXXmSQvbF7nRJqFvsy6hk6axMymKT6tJqQkQ2Zp78FW",
  "key27": "3VnpWLdZPbvYCgzSG3tpwguDq6PLG6pbeWGTprwWNxnSSBpCzE8YvbY8H5x67S1TNXFT3dDzMTTtCpQQNmE2s9v1",
  "key28": "5n7PcdAk5AubHGKscpeuavMaW6kPKRhdbLd8PV7wFhj8oBGCZvnkgLeCKkHqA1zx4UjzxRgpUMTB5gNiiwrrCqpD",
  "key29": "3dLM733A9xo5Y3wtz4h62wCvhshBb51DBkUV1aeV7gRMnBddFp7A1zv2WYiw4u781ggghUmEH5t7LD6xomaya9KH",
  "key30": "4pp3emWJ423HBTqm98tRVwYBoPsWJLfCHxKQsvsA5t6aEsNQhUF14cHSuH3ST3JRBs5B9pAvWHUM6XyBvHDimuso",
  "key31": "GLmH4VGEndibY9N16R4C5bdZScrhwqCQY31tdcroKsUv1WncPoXKKpqNtEJEGpZHoT4iaAjRJufcFL3cBp2BVNP",
  "key32": "y3XyDQLiXFP9qeFeqCJ8LZb8AhdX1CAG18n6fcq7phhGJ4Pji6c46Q5cwcqDCSKpommkxQ73QQVJkCAWUXq5otf",
  "key33": "5P44iqEsmDau1a8r72g6vUhjcY1y64iuDQVK7B132ouaJUasuyVbaiARKWApeFuD1Ur65S9sc5CmW2i8uor692zx",
  "key34": "4CSbDgtxgb41qQFycjokUVMG3DqHAvvb51soTyToGBruxQFiogwBwbNfhrHuu7xyvchnZJ57C7b3Tj66ABshvd71",
  "key35": "2MVNVcBAn83rV6VDbTzKqPyzDEEuZqhFDzxwfyMuWXUR42Vz2WbTLDLmj6FFkn1mq6vkJfXX3rGTkCbCbfK3abHn",
  "key36": "5tkF82yUdqH2GKrBqwo4t3SazBV6jFAkcPfu5qxfca2mYstNVFf5HmfY3Cprnh2TKeZKwbZBVpD9h2wWXuoDFsJ1"
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
