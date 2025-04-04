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
    "5tJHzDJyN6Wxku5N4G2bqxZtgY2mrBL3kZkxkWqg7rXKBMcGuuBxA7F42LXGZsTZavUJAbshkh4Ntg7bB5UBAv2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36dkA2ZkyCgYLAWTape1dnPoSgQ63R79dVEKxpE123RcmsEXrAa994aa6dexyoHMKDTCbojBSd35bDMaDoUVXPWd",
  "key1": "3HVuusvnt4fFnfUYQZjPmogoMmLS4nVPfDMfqe5nyaeMBuBWsTS4EoTSrxuKsfSLneJvUTC3LWsasoCnmyMMKMdY",
  "key2": "3TSjzan2CATMrjyRMVZYLBJDFV1rzma278boioNPsj4E9ea45xYhv7gBprEF9j56PR1awtQQEom4qQ2mXqwy9AJD",
  "key3": "2UJv8XE5yt8CDpJokH9teRnSLTJa6UdDnJruET6Y4opy2AVnPsL5drutNMqbm6TnHcvQCjpbTfUmkft7oRmP69dE",
  "key4": "47AjLNcymikHysDCWwNrJgD68XSam47kYqBbxERzKkSXg99PAxkN5h6FqYTNJwCmnsKxGqURALL7j4YWFEgFPnA2",
  "key5": "2Qk24Zt79i2gRZ3E7JpihDTZUNjkNSPfmTsdyqno6LBnGwZw7PXxfKJb7c61yyXdyHvfjgbBvmM4eXiwqVVo62CG",
  "key6": "4YQd9icA9JXBZAS1vfL5J2z5cc2wwagxrCKAtWPMjSTT1NuUWMj6B6qqB3RiAhecBCN64696nAzen2jJe7u5CD5o",
  "key7": "2g1SKctvAq53wJ4fEkC6YxDeHW1b1mRNUFK3t5gtg2SyoPQQZpFgekXJg9nsJ48ZzhB4troPnTApuuqrkHtm9hqg",
  "key8": "5KizAvyzQZ9Ui6i55jBnc6romByjrvVyqkSbXhqWxvbsTnMKgVeBpfK5d68R5dsqB6QjxSBRRv8GC2p9VQSLbpZZ",
  "key9": "5tqoRwSqR1ohqyMtN5HLdjEXfyqW1QrND5JwvnKXvts25ZZsqnsbSNfxjhxrs7tDWyAcqKZYq57sf7MukfNDyMQ6",
  "key10": "2pkF7fM4gWK4YwKewXShXNiuXWyvnejZ2iH3GEQQQDxmtRLrbT7Zei8wgq4Kxag6yrrBAtRNgE8w8Ju9897D5rHM",
  "key11": "3XXr2hkgdYFnEY75dKXUpe5bLE56NW92WKKXT4WZENfFxGRoTwmpvGwrpy8hewfxZfZtTYUhe2ihbw3dxUG37b6C",
  "key12": "BmouN1ST8YznWv6GjbUpRUA3u6afLSJordPMTAURtiQKECbPuRCBMB8jjScA4EtCQ5XYRzywpJPS5BMN8HySTbG",
  "key13": "4XwvqJ4sH2bfQYwZf5Rz6Yr97n1E2MJVd3vqNpzhbYBDxKvy7rCwA4W7eFkjH7CTEj1qJ2UhZLQRL5sRk7FLhN18",
  "key14": "v2XDbN1VpbqgyvcZMB5Xu9K6c7qHkvCcg6eAmk17VaznjAoyxekybEUuskDGLd3fV9EMpVKk252qfqDcxrntKQ6",
  "key15": "27fHJao3vFbBBseGcV4Z5C8YwUmVbGz7dizahmYCYAaEFG87kw2aryM66TqVwYYVPSmLrnRPowurY3knm7wgCQVr",
  "key16": "vwtiE2BZ5bA7LscjY7R2ubL7qnjjLCo2TYDkawspWnenF9De8rkJFrDiY3UcbFVCUya9odzZjPh7XuDJh9ussGm",
  "key17": "5hZ9Xdbt8C327pJEkC2YED7RCSU2itQ4kFtvQr83EoSkAPvKMxRaLNPed6naYw26hazFZZyH4mXwBfNympaqWobx",
  "key18": "2sYq9sJ5qouKaRCKwFu9mrBuZuLoc4pjU4kiSwPZs1NZeL7EBUV3QjrbnnkUZdD3H13Mtbkb6VM5WfyiZN4HJYr6",
  "key19": "5L2qyAhJ8riJch3u7rb9oAz1n7pjs5gmFUNmqCc2Jw5koDasRUBsD7CJhceLUW9m1wgDvn5B2p13HnbRdW15foCJ",
  "key20": "2nWDtQ7RhT5mzc79E1cQiUiRrvUZBzX82Wyxz8oVShKaUMHf1YQ9APDu1kMVSRF4jDJUtZPxLJGmsQTeTRSJ395Q",
  "key21": "4bb9XeDbfrPAySioKkvgYnXXwMZ71g8aLZJGkDnW5VFckqSDLjbioBK9n8as1VThZ2gAWSCh6bDZkHzEzWh5uQvY",
  "key22": "3qUmGXsZsLR3M512pumuCVjST5NvXmGWLNbwiggMeE8HzyXaHCewwGR9F5nw48ki8SbEdCtKAmdPKVZUkeB9k3vn",
  "key23": "4pUa1bbzTjcyy9Hc87EsL3vikLc22V9TdafEkpQjYSc43KiTcFx1NozxVJbViPchWsvW9houjYu7hZm1j8vhSdh1",
  "key24": "5GxPwSMBGYHjEccBKMSKWvW7u2QcHKioroLMc8LnK8HrXZ6U7zEBCF6NfB8fkD7uFxuHmVWsnq9JFvLK1yeezcxs",
  "key25": "274sy3ghPwuXRouvfjtCtxNsAxUUxEKNi4RwLVcgg6No5PtKB8F5sWfDKE6iD7RbjfHNJozjxcTtA2gm6XgoMtQ3",
  "key26": "2zUDT1UEc6X3Yx5CnPkKFx4hnCgDXimiTmAJTSDE3JUpBmCz3EugxLX3w8mq1oFMa7is9KKUsw9zxxEX7dh1Xzce",
  "key27": "2aUzCZWScb2bmgjZG7WnvdpyyASNPkjZb1AntLbh5GTMLrEBbnsXRut2G4MwjXqf5VaBm4Kiw2YmPzCwmKtiBPjk",
  "key28": "33wr6ushzHTgQvWhKMwBP3eM5Rh9p8wqbkRi35qsfrDq3fc7nd2ffa7AiDadHUK1YDb5bops4pJjkztHvjT8fP1m",
  "key29": "4JEdumsRVWGBaUuocNc3bXGkvb8HCGNFHY1Nfiz8jCUX93XjzmQyASxcRzy8pAYZyzSbU6r6sHYz1gU9CPHaZkP9",
  "key30": "3EKEfFHjH7qZX9w63zLM3ae8jPHaYiaEAsSYNp3eWZe9KRXvbn2wQLmQLsHM3uTG3eYspuD7MLnoEjbZmUnsi8hD",
  "key31": "GPStTFy3L5xrc9nCjad82ChSdXJK7i7B5Hfe5nQGjqTpe3txKzVqWrV1s2c2LED2v1JXtcG3W7dMqeyJhtkHw5M",
  "key32": "L6C7uiFXcwMB9pm8oUq2qyT1mZBuKL4gEmqUpAgcJQ7a97b5cSgAyqfEtXVKp9eQLZ7QZ5Q2fH3NYtPtnzy6Bky",
  "key33": "2A9PRRgRYtnmCYeEtjCiQuc3AuuZH3aBvUaFPHHvXCCD843homtjKRKmfo8rsCqHuQ52V3pJR4UBTnhV7ALGFTRD",
  "key34": "4aiz7Pq7dFiFnurAsBSL9mT78W64CPCpx26v3twuq37ikdMWYGhdY6hPqA1Hr8Mf3CAJwbpi1mkww7graKCAU3Hw",
  "key35": "3gGDMdCpgAKT2yuErTr8yoB3iNuYFwgQGxuU3p2zbSJVJm17Bymgxc8WhZc8pmUhHtnDfXjPWNq5Hqdg377UVzPN",
  "key36": "3hEAZz2gJdC4SQcmGvSCPU4CTwsWzVz77zC4E9d2TakUevctiGt2NimQaMwkPG7JPuXvR4WST67a6aSbHXKH9TgV",
  "key37": "cCPjCsG3vuaciaAsXDZ3Pfen4eHeKZjBfQP61Sw6FgKgfsYqvxsnWei6AfcCrStxM7WN5xNcFHeh7BmCMwiSr5N",
  "key38": "3VJVKrxxaaWe6zy7e49zyTqN5aJRGsx9oJd9pzeVg7osUqu1uRrxqWXg4H37SLMSGtov53Puf3LL68WNbxfZad66",
  "key39": "RHyCrLuSepBezyFFkrpgkqNaWV4b2CD9mnsBUYRnrvxqgp8KyvXaB4B955WC9nDYqQDr2CWVCEZ2bTie4i13Tw2",
  "key40": "ZH1ZnBsKnEfuzr3oFdt1JpE63DM9QUkNzJrbsbS8mW3qppK4qGXbnCzFhPMDsz1CWE6debhejeUwZuuwa9k3ZjZ",
  "key41": "MQdv7M5MEfvrNGqvHk4KMzx5mQHUNpTR6ptJzK6e67QxFmvGo1enZgrjehhDcNirCmTmQ6oatBasabZKSPFRKnt",
  "key42": "2YKn8jZEUAXkeGJi71DvsQRK3vcPKtey6DxnH5EbiXivUEd8W9axFbGqTpJzaRd6f8B621Gf6Pqt8xDoc6dxdBHk",
  "key43": "5UWi7zh1EWQepRvN7NWWNLZyXgVfimCxo1K1HtqKxt94zX69CEoq6JfXmzjGmNiA5rj8pKDruRXjZRDreNGD23Gg",
  "key44": "3CYDmcGtgJnFG4h2ReLtqBj2h73zPzAyH3oPJMhDf8fQ44miB7bUuumuaZbH4RpwZJnGcGDx8QLqLv5HzvMGx3gW",
  "key45": "2zWos7q72scujSvbVE1X9FesjqCdwiGA2WyA43uNZuMzd8fpay4rkXvswkyDAPfk98dVuxMrP2HLYkGyAfnDq8vB",
  "key46": "Ze8mqkzRpuZkenSmeeT1G32trysLZWF7oCfG5qno88pCX4gfmApKi9JsxrC2W8tgVQToCDwXc7wHLwV7pMESpv7"
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
