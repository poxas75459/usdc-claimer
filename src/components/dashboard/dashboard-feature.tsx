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
    "3Yf71vryuqBfrXWS5GbPHR2HKhnCBPzYdKXbLt7QDYZBLHH7LECtMV5yBkXnSJTXyG6fS9jot9Zr1iKb1tHefyvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "596N2fr6rq4puU6dTqg2eZxNK4QuD46rrCArKkbNNVa64S35kEhtEDGQG9XNsJxiRQwHneyGb17HKY5ggDprPVxv",
  "key1": "9RoLHyjfbraEG1rZi6NowwckHtF1yZFYsxsqbhUsJHMfj6c2Q6sL6mMtbRon2robfmuibQeeGtgiUAahERFZZrt",
  "key2": "5HToEnSvgkg1oAqp4VafGhW7HwZyAcEzd5v5c7xJK3h5JDBxHGYjMFLrxbYUwu6W3P46bzGLJMvPXSVC1dB6zW5Q",
  "key3": "2aps6mxuKrYSPVB4wYepxSZRmxZYARsR28ri75kTnKhEqMpACffDhFTDxYGRYo98vLmfFKzQ1AW7THqgc47qYBp3",
  "key4": "zKURTdysEv4DeWB79tYB9LJKtbQZdyZL5RU6ASoC7t5PhyWpPjPVdK1pnNyV4KNcaPfCAWN277VaSVz2aETu264",
  "key5": "2bpazqXmTrgfL4dDFHUYpEyB8ZZLWS4GzGykzoKgrwYV4Qa74jdhw3RSJ8vjEpqdzCaruLFZ3od78AbSuWPmEbhC",
  "key6": "39w9GbD4aJUTdRJFYtHGd4PbUbsj9tvWqMsKpqgKMQJmyo3rdFi4dcdYj88HAk1yiGEr4KHMEsb2UUUUPej4nACM",
  "key7": "53pJKqmiPPo29Q8stAEDsGHbLmbzVjnqfGu28m9u14DWdvgmEvP6bJ4vpi5S8CGAbTDqmDG33msCDbRXoMnfaXbB",
  "key8": "2CcJJuSd8wZhEjJiBeU7hnKhFjZUhpf9YYgp2V6JCtfGwwJbM7C26VhUbi24aPcX5Xp1oPtUexQqotGpdZqRNPkz",
  "key9": "3tMjQcmih315xNZE7nV1uexm1aednWnR1FY1Epx9BN78gDx7cmyv9RGgjr6s1h41aNjRNGLQDiCiqPT1aYum7KPh",
  "key10": "2Cg4qxKaJdFLVstZ6ANFT4CkgSQ6beJ9aSmR4mTZWgAMjbfbsvvvYeHidDzryGyT5siDg4DghrgBGMadwajQbHiN",
  "key11": "4kNLC7BeojagfA84deE9LtGzCssgddjJ3vCofHa94WtSWE1yVUEwRMpbzJ65m9LfLiAT9rVghX2FLb6yUHd5F2jW",
  "key12": "47nA9gJvYmkgrrARUxVkTBCrHM8tQnp3aLDWLZAvdj73mt6x2wo9eF3ko1cJRaFGWAS56qwDmNj6Exyr11oY5qms",
  "key13": "3QQeipbLafLXau6WX6VTuTcbj2ndcMKjZTRnhRyfSHAb7JPhJ9FRrpFWW4pbHKSDWHBq3RALDyVe5ggpytY3wPyh",
  "key14": "peBHgm24okLCM4LCf7cmAx2w4iSqxNKoSJuehx1LpkPpXht1BZ9wcnoEXdoBVBXZKhSQf4X1SaaSHHnE5cHz1CM",
  "key15": "3zppKxZMg8vRWm9TVoAoN2hC3ZU6toXPJqQ3JgAHGm7NnBzgT4EQLBTkmUzQeCBeFAHSyYvVCujmMpEPwZwLkYLF",
  "key16": "274doX2YXg411CrwKTQjwuuNavWc5S9bRyQU98xEzcZ1VoRiWjYYwj1vHfQVTvYADbyKkJf4tkahBTJBwejf6y96",
  "key17": "3b9CZTHEkS9cUUF99ahBz9fwqcngYCL8e4aWJZNarS3SL5FBqyXVc3qViQ1TRmkogfXEVFqRs8yHyZSYzpxjVRJm",
  "key18": "33pNgkreHRDSAPkazmqo4tBK56uo9u7UobjZfoo5zJUCDFNZ9Bxtv7DTov28GbB3FvRABQwWWjkww22pbxp6gr69",
  "key19": "5mtjYxcKCNgm1uRrsoGjgCu1VqL16rbScJd6JqMf8QhiDSuYqYTXAZbPP8RkntgMo5fdPiMH9C6M4qcEkuJzPyBE",
  "key20": "2f6JNKTqJfEJk1JpPUxVcwxrvyfm6bDWj3WgZT3bSs64kvjStUBeikuStYPkYHJTGjJzit3oeCAKrJUEcZeJBdVj",
  "key21": "5Txbtr7RCn9GEL5eyKDFNJP7vaHb2g9h9QHhGNkNaQCEmhVH4fRQkCKEeMgGH9qHnnoTugaKXBxMiHbYrvLNG9WE",
  "key22": "4sGXorUxYkXBV6mHJbcVvEt1mSj3SEgukjgSutx7yCYuLxLLZ78kkdxQBbKiPKmAdemQCQh1CbPtMV1xSj2BBnBZ",
  "key23": "22njWndFQSjNx5YeVBs7CYff57AWC9yZgMLA4k1EZqZMy9o9vSTEGci7b7k2PfQa79FxRsW5jx4f4HGVPTiafyvT",
  "key24": "3YkNvoN1ovBBbS4uXfiL7pmdxKuoqba1vKkB84ufy4uTVugViVjaDYRYuVUN1BdKx31SnRgD4Pm9QEftuBXCAWPU",
  "key25": "47spFZByBTuDGbohbT7JGNMV4zMEaSA1rQk4Bq5KdgfasfoKUSXhzpz5mgwUYp5UqMaXHQdw7hrNxvbuC9wAaenB",
  "key26": "4SXcjrx7Tc4WHRPfVcsXWoS6PDzMUUx1RTj6nG4nPqq8wefMs8odGHz1iWYctg34WaRViLCY8GHNcMC6skXir4GU",
  "key27": "3QVn9q2yHDiFvgeP2zgoBoXco3Y5W7hQG2nFQ4AkgKY3WesE1WbGkii8rhwSHgnFcWvYxaSbwBSw5ePd9Y5enkHd",
  "key28": "4oPtiFRSvwXWM4bThaqYKrF8RBiX78G36L6P8kB4nGDfgymt2Q6Y5NCTbeHkGFpVt18UiA6DUNmPB97JoUZX9im3",
  "key29": "2qz9rCsXTEv4K4nYnEZ9PDqkX7FRSfBhkqjYZ88LTUoeGbRqzBYhpnN2rRj1WLnEh5fdVD7uNRe4VuePgqWpjHiM",
  "key30": "Bx4QptddFCp3dFF3QUkzAJu31iiMqTYAqQrxzue8PWKHhFx61kXQku7jGmhuBdAvovT24yfVczGCF5bbDATbzww",
  "key31": "3tfsGB3MRf79BhHMUhiDpZeMsCMnZgWoJqYHz5vp1bCxDHyaJSkv4NJ534krh1QorcEtRLxBT9a5pxYBxuc9g9WR",
  "key32": "5jnJfGxgyK6FGbMe9AVr6VnwrJi4WfrxH9SgPfVKnXCpXrCheyfacmWiUKZSdWYBR3H4aCu7bgLuLmMDF5CZbRzn",
  "key33": "5UD6woF25eGokkFGLFbBnUTW4wxVHMYQC21CiggYemH6j6cjwJjNUyVDgtbi4BYLTpXsmaJB5TRZKhg2rc5PrZuZ",
  "key34": "3VhKNxBVXwyUpJbZ698GPVCCUaiciRixPGZiNKeke5c3JcXrwjFA8S1ZfTf4rsUG4kEFXWi8ThYzBzwjQE5xEYhp",
  "key35": "3mdAFMHjYAnFPzhMFSAvBrhUGJPuu1bekwRjRuDgfXdt85DEvSDXAwfN51Vffg2wDwUvrUkw3SpSM85xyVuApPWW",
  "key36": "2Q4p3PM9YA6mNQ5BKgMYq5bpahdkEKq6KjH1a6AHKCUMpKQntVE4eyDm1Qwr21EXtStN6bPx8J4hsgFDpbmwtahB",
  "key37": "4MJM9tSbFFwVDuBYPihHuhWUeKJPcLzND9NhyBn1gNmZmJe3EnUF31SyCmPsFx3LTKt7sQTy5YyhJfvCaniLepSh",
  "key38": "xoDUgdcvNXv5LNL7SAHX1TcBeoYFoUKc2doGQz66Ecey3G8KeWkAZCRAzB8Yrg4janGueEVWLYdnMifFgMRAhtX",
  "key39": "3nYQWSjdsL6TQZ7Wt1CFaRjyqbQ4AoiU1RsMkNQzsANAsGZet3PauV5DDhXUXpgnpYcDFk3p4Hb7gFp88mVbtPHZ",
  "key40": "4eavfSBfCLoUbB2qQnrHUeE7qYLVdDZs61Qh4BmeMDzeXiNxZ9Z8s96sYoU5C29qgvsUL2G5bv8vPdgp8251dNkV",
  "key41": "c2J3cYDLx6XHGMrZsmvCSp9o8YGaPmHVRHpMu2t6tER7YyNhjJMdUUt9sbUY6hLZy4SKPK9AzeczCPSNUXsm1mp",
  "key42": "2CZTA4ufgMW3TuCiHWmg3sssAHpQMMSu2Ry96e5xmLrpzQnsx2dV7YsuycqfTWGzWfN3Vv6LgtL1Dw1N9MNGtdSC",
  "key43": "3raZLyMRjJGMmgXkdgDXwmza1tWWC54TUfudjk2nNJe9i7acN2FaN43AkRLbfrmWojTU6baGtkvgevrvdC8cjCUN",
  "key44": "n11jpX32TdZmRYo5sMUdGNWjVKxcvnE9XxWbSR3LxqzRSeBp69xEfpkHpymrKmyRu5FhXWsaxjUZePTBqRqwHKq",
  "key45": "3sBkxs3WKqb72X1xRzN3gt8KoaKCMhJ8ZuKFCJDuHtG5wXyhGb7RAWREtTSXku7xA8gnNFLmWnkUEkpc2ehJhXAA"
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
