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
    "4KzeAo7ePVQGi3TYVigPF7TE6GgV6piDyH4UM5HNYsEiRCjCHK1SjX4sszwW12bBJ1Jv3PHk8a36386j4ed3o8p6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zLhZ9q87S43rAHqqhjfQuNRdhsvhYPLD2e3r49DzBN34ZDMkTjboHmipTynHCVzvcSv2PPRx74ftKREfhGzVa85",
  "key1": "5dFsp6wEnNcx71PsXGxDDQnjXKVLp1qmPZz1Sy7aVFLhvxDpaWiaxuh3bcq8yuujX4V4TaRXZyhnk8Rw1KTgbWJv",
  "key2": "2DsfV3gPPvK61PhH6DQDbTxEnZxKojVRWkx16ZMreDYZLcSwxH9Q5SKcGT5uTfYhNBsUs1dgzgsK2nBrgntLvpok",
  "key3": "2idoaqhURMg2kt25PU7KQs1Q2ctzdm1DUi2vNAAe2fCjTN7Xcqsw2WJGTUCvrT4DRoRo2LYRHydSH39ediafZH8Z",
  "key4": "2rHJxXEZgweRTP3xknGBbB4JDEHtXM6YosBK3czP5tGmWuMxruSHc62tPtbiQkUYpW8nTJmisf5YMCdutZCqRhMD",
  "key5": "3CbUEnqNZj1dp6WPFKvy57AoHn1vMJ9tCBYih3MDotav6oN9EwEkhLhg2mKnFEgiSZQCBcjtUxWrKbqoswtEK9ih",
  "key6": "eruGJ8qzmTKf8R7H2LgLBHSBLNE3J8WpTekNHFVm845Q6Yb4ZofDbWgGoDx6cGt3N2bki52j1Nr7bPhC9ja5wLx",
  "key7": "39m5eVmP2LHvBJc5M9yQp5bx6Bj3RrYuvtfPv1T6rHLYG4gJuvPbhs35xGpkj2gCVs7pzUj3KwQqjySKkSdeRb7u",
  "key8": "3kSGfEfD9fwq1WynBQPbhGThLJDmJz73VKrsamwid6oMsJHGa5QoQ31KVJyP36gihLX7iJZmrQbhGZ64naQRbUbu",
  "key9": "4TgEZxFUzSgKYmjbSZLVuifZur4iqt3zCqvx7UdU4kWbyvvQFMnk62gVTSRRd4XHc9PhuuPv9BwtKpJiXAE1fiR",
  "key10": "3kreEkZvtTGv2QMnL4zpx59x1aABqrwewBj2dARrcG4ZnFXUSeDjhjkZPqGmurpDhaAfMpMZqRs84FGwegpEmtQ7",
  "key11": "2Apt5ZRyPti5jNKc47FAxrGnepntUxfMZrGYJAx4geTZ9Fq1MSF42mA1HPZqcZWGFQyN5qwsAosM22ySV97yHjCZ",
  "key12": "4MwGSkxdMpPyaic11xuvnEd27TeUCmCuvaioTrWxEU5qKUFc9JSKvgEUp4xnVDc7YnSiY5cPE8LMtPMzisfqyMCe",
  "key13": "2Kh3Gjojem88wnTFGDRkK1CqLr8B1EuYg2Hrnydgc12hgMpHNznEwB1rV9cQoXupaEUkeBdyKdc8gUUg9LpEDxbh",
  "key14": "4QjTAaTtnmRwHehL7RaVs9L9LUGQkYZdZUf1FhTQui4AtjqyRaB9CmLGmgK4rnbtZfTSLGkcoSv16YgR8Av1eFQv",
  "key15": "3xEYhAbM9FeGtropNhpr9fNc1HY1GdLPi9RC71EDpaEy483as99SKdUbrjEzNkHHezcsWvQ2LQLZfBmFSNSQTxyR",
  "key16": "2jpa4EkPBSvixn7NGLX65HTdAZDFQjb3MdvEbLFaWPK8gw8ErB8FbkduGRkx1WhGWgq77qEFG2X6tegki3JCJjyX",
  "key17": "MoTqhu74zyXaKTEZXZnAV4R19Heb6zwErmY1VWNcygAytsWveipwKQoiztzG3fVhTncMCEpRfoQKzQkRDJ8HGde",
  "key18": "5X4LezxpscebLTL7rv1yGJdSBAqtem7d6aXWEupychrdHrs1yAK8yUZC4FJNE38LG8Szx69mW8yqTkeBECiRRPh5",
  "key19": "2TJYWupA4jrWh3KWsJkvyeyv2aFYNwFXqn7yvBaRouFV6ngyoBDtvqAaYb6CfnNSA4MSyDKYvqcDqzbrWsJXBv5M",
  "key20": "5DighrdMLuN2yzeuPmS5BZeatXcX4N2sdvRZhptVSXHb7kVMdPJyJjQpobWazRyJ5PFLRYjojyYuCWzqM4Laj5Mq",
  "key21": "5BEBtGKRZP1ARNymE9PVP3JE7LcxLoKMgmJp9HLW7CF4JycP9vBaJEk2QQbsv2XBwRkw568jq1MghJ4Y9TPVRgBX",
  "key22": "4KyVa9q1y8GFGyoMQcVbJEf1axtEfvRiwmBqo1kcmfa8UjXMPgWUsYE6kJMrmEmHHSdGkZUjsJ9d7wX4UKitTpLY",
  "key23": "67cHEyFYrJCHhMWC7kzaZ3GXSXNBRW5odKTqkNujnMuhdNbgPuEYYwRW9yzja4GEdadBkAZBDSpP1bJn84gAbD2R",
  "key24": "2jn2Z3o4ZHRJkgJWbvYWLaLJTE7YNy934MotgA55qnXqaG6XLzeEa8tfJFCNCm7ygUZyqWWCKjTVkyCUhpwqZF8U",
  "key25": "4vUozPgfUhBLXu6fycKRbQ8gcxhazD5c9fTW8DT5okCnj5e1tn7qnL5JnCC5aXFfoupRNZCcHoVJKAAmi6ufhXHf",
  "key26": "VnYjj7FfpFJQN8KLu2s5Ugm8aPXMMAvjDh8EhH7VVf2knznX6dtA3mUcRVinRnvVq7Zkh7w3GjR5JPpH1GEbJuc",
  "key27": "4dYKhKvt75NcKMwcFPPXm7pfdd7YAHcSU7cnzKR2VBEBa3rFNgwe9Stym31n9W1bckJxgnPvABM3cmtvHJtjpLtR",
  "key28": "rY1V4jtuNATHcjEwH5is1GKFzADwgmTDHeJVLazNNNMBWUWqEAfBYiHBwNt11kbYaZZQDzj6kM2hvCrX9UYXbEG",
  "key29": "4AYkJPsihMZNKaWRdZe6xBsrf4cAGZjmQ816bLWq5jNKxivcopFKRRvtyi7aT18wgyThhepezoZ8CEoLRLNCzAkZ",
  "key30": "MWheSrBkbMNjc4vc2yB1jRgswBP8ZHsSEQt2zJ1hbQb2xrEWR2PYYeo6e4Knjwcb35jjVV2nCy4qAQaNdurGvSP",
  "key31": "68qywCjGRUx7aURA8FZC9SP4uPw2uDuF1FRaL2MBWJxDai3yKa3BJ1XELwZZYrqVELEvvqxr1o9wvnW5nCTr6xW",
  "key32": "2hdswMcjzR2JofLL3RxK5W3mWAqoxBKwGN7LqUAXVu885rccTMLBvJ3QmhBShujEwBebAf7GdRZCtiy8SrMPkwX5",
  "key33": "5cvFmJAniWq5gwZr8bnko99giBxrHrkb9AS3P1WChSEZi8MvBKBG4oEVMEGVVoGUdPFcAnf4r3owD2i1zA2PSRka",
  "key34": "9q9vLX1YGX2UNiJJ1vSbpp8wxf9XMVjorGkP5t4nqz5JmtRL8HRmWdMw5AS746HbJSRQ8X6PPVSmxYa3g22BaHS",
  "key35": "3oCcypayGanfGycZLAwgdgqYGqf32pexcj42E3Jkg1hMEnhTdruQrn3yZBbZikG6TH89x4TMpz1N7ZKApg4pPbb5",
  "key36": "432nQGFb9tUHw9caLsYbxiZ87wHMzhp2W9aizwkFNg8DUUkdL1TdVg41TEZjo9tzRZCDvykQroE3fg92JftptNVx",
  "key37": "fvxYZv3zfyk4ZxSe5amottFxkh6CxpS8q8VsiPQ8pfUHcbXSSKSK2AFyZ7bGZa5RZJYXyowPNMXdz56Hs1R2oVE",
  "key38": "5jDGQCx8NjPT2pmxTrtmA9FLM1RXdF8PtFTAjyW9wD5iqynERuHx3FQUeAbJxMRA4WuBK6Xz9dsfC5p9oetks6SR",
  "key39": "5g4Zg8nofY3maYEAKiBkGfaQvwXT4gV5u3gePfYkY1YSETLvxpqme76w9dtrFG52ZKytRENhqtWK6fbLg4e4it7r",
  "key40": "49pKBpB1eEpfPQcC2bXQwSSSytKeFvsnPstiC7XZMCBu1G3hJXqqdkqeQDnMPHFuStQrMeXNMYtBCqjKjyGZr1bX",
  "key41": "3v6KLuFzGWkdiLCrxVq6ToK9ZLmiujMXKHnKNqYbykvm98UHvMWzntXD6CGDVYsZ2FsG4HGmhbYi8KZPQhnkKhJG",
  "key42": "3BFq3gAjvURJk6GCL325gPqoeiLEzza4247ZEXjJGStzXsBJrxJFLvpm7xf8zBJDvnC66Cid7YPjzk4jJDtqzFr9",
  "key43": "3CHK6xg8gvx54ptRPWyanNfByk9eeaemqtRb4VfNto7ovEJddTsPag4cEwT9eWHJRhxf11czN6qcK8EZPWc2LjVS",
  "key44": "GnVpdHbCE19LKagCrYx8Das63oevibh7uWV2RSATbfNYqXxuJMiqivxVazRBDVca5cDrJP5sgcouzvF7jhbdL2g",
  "key45": "43jydHoLvtXGyu5ktDZjioLYMWe92MtqfTa57jq79oqKWwH5uSLcrY2VgNHAqg6vt8seqqVkmDtXV6NBUD4ruqJQ",
  "key46": "5t19v71m8FDpjYXjDgRrCMVyfphyx2HTtZBCr6qSo8LpJkYyN3DkHHoGGZwwAHUV99LvyYiGjB2QCJHrCdUS4TED",
  "key47": "51mm8FPQ8YuvBxmtGCydoSJNF7v7DLrQ4ww452P7hBdvzgxPJZZHwRoogmqqXfoKLjastx7tSiBuqJKaHtAJ8yZp",
  "key48": "4AzssZSC5T8TGfBVtiV6NfJD3JUdv1ty7q3UjwfSGb4uGnfLTQMf6YYpCwSQV1ZrZgBNoX4SwP6Heu5cE7bBtGiS",
  "key49": "2zGccM4PqM2oqJ3qbGK3ESjrhuf8poszCGUwHxjyYXYFrPAaFMs2twKA5tMnHjNmXRw4oLeoGUU6y7sqTh7wQ1gi"
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
