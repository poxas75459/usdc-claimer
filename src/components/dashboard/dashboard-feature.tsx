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
    "3KvjqPNUKNzy7Kj3z7duz8eUFpx899bzTQgrQiS1m3NZPvDm1j2jQrkcYUfskcZF5srbH4mv5JYnMaprPZW8oeND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQP2bpfKtKoZXqudjRjsZrJkbEh1WFCnRrmnHk8x2YVsuU4Ywz72wZgydto74zvZQXrLcsv3opCNejkfYiantRT",
  "key1": "3MiAgARcvbGip32CdfAQWincmoodYs3ch3aWNtEBwCbABDsmuoNFaqWCsQTnLMzwDBsKnjJCWzDnwa9fLB7MkYuT",
  "key2": "71tKULswgU37NCdW1GPzZaKZXcSEvyRWeYypJm1kf462u2FzzBebyDKEnivmgHzpTJoUAReeh6USXmcf43eJb8v",
  "key3": "5Ktn9FYB5z36Xw6AVB4kDJswQpdj7cb5V6AoiCVj6w1pyBQE5p31m3x4NwrfHT4Xogp5v1QgaqACtVaW4mmP2Ky3",
  "key4": "3D34bSsjimNL7W6HTf8GGRo59Kut86F8EJFDyzZkLfBcNgmahhSfn7ttegd9cgVknpwrTweUnnGagiPcn5oQSFdn",
  "key5": "4TzYruwyLwDqYvMrbmKDXrGVxgMfvz4WhDbzbByLSF9rVhsj6fqyYcH4txszvuMWuS8Mqg4bh1YwZvfz2b3pU91S",
  "key6": "61KBHCmZmboAuFE3thnYgncQ3VWayUtyLraRu4mHhuoU9iLAb3VKonHB3Zgx8XpKqvKc2gZCwkimTfQ51mawq5og",
  "key7": "5Nm1G3Fde8PJrrU77xu3xhPGfVffaERhfXNvTrq3s9VXRJqKLT6m73DER45A9SvGwYmkh6YtxATjh4gawTZGgmw3",
  "key8": "3jWEBnyB6EueSz8DE5t1oErx6VUMAoT3ZkEfcYwZMG24oi9yfFxwaqqnwzxuRq3jpV8itXzzQFxLq5VYjbZ2Qdmo",
  "key9": "5qeQhdEQcGbjCxYQxk33ztTjhsC5Ze5769NzJF3rSjxNuQzBbeTekmn2KE6QGigDVYc3UnEgykXY1rtfJfEM4W22",
  "key10": "SR7CPQniPWWhP5cVuCPxMbWVyWJD7LwcTZL91D2LvuksA6RvniBz6znj5i4Z9WykjYf7vYLMgbC1pvxPzqK5MVu",
  "key11": "2nBLRwj3ivti1yPSfghXtUFLskCvfiyoFrkkSYy1WZwRD5DvvYjpunvNe1n1q2huzuGowAxf8hYxKz4yxsfW1FFT",
  "key12": "N2bW983BXm5s9hYYn5cc6od9NaNn3DUHLRznXgnony6w8UozsJhXd2uhfxhtRozFjJ5u9wy25GzvAzVVdqEXpFY",
  "key13": "2uBTUTvMz8WHUywjAWDoj9Koj3vLQvNtA1ZdAnaddnrZmsVCvMfATwCcNqkG2m8BQveifNgLYtHJjdAvA1UspewR",
  "key14": "3swmx9sPBPooxvnpAv4nLEryPbo1khGvn2B4TEZuyo63taXScoFGPwCNaYQ4sAMq8Q3jB68RhNfru9f6nDzyraPJ",
  "key15": "4uSqLs1NCgxewdmmpyhxD8M8p3aF7i4aRp1TcHNH6WM8dGujm217isfdCJeziAb1m9ijKTQaLHwzc2tdsGP4nrYB",
  "key16": "5rbgFN2HHwa4d1xNboyN56pbKUj1cKJmuexW2pMsFdfhEbEJW6m3FRihV4HND44RJ1vQ1VCSKfHBvFDfUcjyyKGg",
  "key17": "5nEMmNm1TuwWT35AowSW5NUWSfwq7hdmpaJFBkq5PjZnCMajJJE2Sdsj3otmJYEnnbRXxZjVNzk2uYN7ajhq2kRF",
  "key18": "4qyjpbQT1UH4ew3m56aivUV4xjZEeuL71psavYEx4nh8nQnRJSMyhLTL5ztQx8ipPJ4dDGSgEzkcnU2EYDxqvZAv",
  "key19": "5innY92n5JPweufAzjm3aKsfofjY3JhyrGzPMVWgom8JKfJ3YM1dCDUZgKcZ38QG6PHLzfRVa6fMDfDFEWxGdSE5",
  "key20": "4aHaSRb4bKchMmLBACfN871XPnXsg8tUQ2LDCbLGLp2u8VUrqXDz6BbPFVk86HT8zSGr1fnQLhw3p6bEQkMGuHLu",
  "key21": "65PKNJjqgruQo4xajdNHPCwJNKcaJqCUDFLVS9kaqGorS735SCNyE43EZqZafJsXsc5qEkLKnohx9bWwpQtfJiz",
  "key22": "fNgrvbXRo4wJY6XXu7x8pcvvWMx6zie5i4H9aktqSvLNgUu793UWzeeobCxYxGAzS2yVT69SGqzMZEa44PEVfAA",
  "key23": "M4xDDDhUqQJM7tFqX2CpnK2YPEnZtX4tnVXac1MUQE2B6myFC4LhvKsvdRKjyVDhaE23MPX4W8YJJN5aWW7YxYK",
  "key24": "xrreG7esXiKz3DfAjmXpyXZBqMwxFnba4Y13X3ydJGJBEaapUEiNrbnYeqojsemyZNDXtfoU7v1KPHG7YDYS2ju",
  "key25": "5MZpFyMxu7hn8XLH8oLvdwZG7mzz8Nt9jbRuUsRsGnmVmg7sdPNbtJJLuhDzS859xCaqqYVNfUgckdPiuhbgMjSd",
  "key26": "3vRbCvZFT1FDWz7VWT5E8fvDxxpGAqF1H16bxkijzhg6WcmKqiCNZZX2rYhy5o8c8XFJi9tU7dDH5xZgpyz8jvch",
  "key27": "jW19EMf74dVgFc8KnFkT7e5oG5iUtZtJjCYUpKWD75zUg3fed6dop1h2CbVUNzvXogmkZqfGvKmgbTDBv2JaNsg",
  "key28": "3G39f5ZPhpYE2jTDBxg2GzxVLBMK7guQFvvM45yWf5nbZcKNqRvGovRkkpgkBA5XJ14SwYHvzdC8ntWAbkpJXEqn",
  "key29": "3s8BWs9etW2PkZ8WDSjMmc3bz71Re9LwEK2cpW2NUCEH587AmFBWZg91eW8NayR1epT7AMzgdGmPX9GMXmHYZkgH",
  "key30": "588jjFzZTL6G7LW64QvhVNSgLhaJuz4E2Utjia4RRmqb95AaVukJuwbw6rQSqUFidWXhkXQbL9tztexxeAizuyd1",
  "key31": "2xp1R8QwJnV3bDuijtYeJWjhu3xs1hXajLdmioBnqAcm9MaJJY5BZ6ryzxzanxuwpHxug5C1xtPDyFi3SVgret6L",
  "key32": "2hkZ7DBhuzuQrDytn9LhRXjQLSqJMmF9U2WzkfskBd5ZNHjewHcHVdXPuzEZzdHwQGVMRR7eMphW2cW1pcT3AZHA",
  "key33": "5NQUetLi4afG4ZSyRE5PECXyfKV7LAX2Z7pxnFgNNASzrKMcRkMhrNb7CSf66d6uNzrxLHyGA4zsLciMGZQgjQWb",
  "key34": "FnYYNh4i2hw5sou2SAQbweERzydB6EiKVpoUSbSMYDLn3khK7AcqsK6fABD78QfXgw8DBnZ4AWMsMcN8u8i1x7R",
  "key35": "4pwn1pkWA9uXQShuMQyi2kbXuKRfNaoX5sFZfuUjxG2PC2FFAgqQSTcodkxuLumVJokrKK1skV62HfxRW1JHGkbg",
  "key36": "2pWQFyKvEUeB7DmGKBjffycHzBKfTYTYmWcALMat9PMKfmm6FxH7fzdfXv9zHWe78xTyfeT5J96V7gSSY5ZbYpap",
  "key37": "qugt7otogExGrXZXnUJUnfr57WLk9bRrjSsoSyRkjHrN3XD24GxFPywZPrpMLMkHK8oxNc2RP3cjLYhw5xJVewD",
  "key38": "5QzqTVdqMUfXFPX4UTypQcT6GV65XEdNuH7nFFKMpqCrB7ko4hW9rgB2VvPJ3rJpooSpKbzaDj7t9M2R5TQPfiu5",
  "key39": "3L4RkVbxC4ocj4MFJ1kdk2CdXBRmYLPNUy6SXUQBQg3KTqjAEkb8dR5PEwLoCwKRMhnPCoQM1KKozFzkKpsoj9MU",
  "key40": "5T3EFGngcJnhHRzyWCnQ6iPHHPFT65WwhkT9t4j38gKMXCy8HxjDeDwx8xztXyGa8zSGhi7jgyfrGQTZRmac4QhU",
  "key41": "1hJvR5z87LBimRdC9S9pWR4pqsbAYXSYJx1s2dZpkeZLDjEwKZvkF98ioKrwCJ7vctoznT1mEJtB3QknVY7uN3P",
  "key42": "W6VK5ihsTijGf1avjfU6xUssccvCw8tD7R3tKMJVm655NhMYAKWwn1MaKeq1H7VvbNEFovoqaBXXtXCXFXe7EmZ",
  "key43": "2xJ4J9pdc9esbyfJgmBRWpyrB8z1NfEr9nxqr7DPE533HPCppQReLbPfvVRzvwye8o3V3CPbCuAfWurxEXkmaDh",
  "key44": "2F9M3QiDv33vdsWkGafLnvLHVryw9HdaSymRgvK8adtMUaDTGQxMBiFjd18cPPCC9EapPWPa5p9J5sajqmQ9bHaK",
  "key45": "t7PiVnxMZM5ALLFh3pt8eZ2rq6kmLNcGXHcRxRggU4VexHLMRwmcpFVGQwqg6trXHVWMgAafSTzYXYLcF612Ycd",
  "key46": "28BCDdduLKXqu1AFYAFBmnoM7pTFekvNHt2kHt5SuAPJkxdK3J5wNZfKemJ4FysvvsuC3pnkGEhS4DAekrGA6top",
  "key47": "4zJJKgtBzB3pu385LGi3xt5hqoj5Ee7yaTGc5xbXCqMZLpyTT4JGn5sT16syaPUG4x1TcArWAAVqEWv5Tkq5vLkB"
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
