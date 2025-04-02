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
    "9tTmDWqFUdTaGrQvmC9par327XRJQn1mQxnsddh5DWN4zqXz8rkCMM15HXt65weg7t382firgrFMMyJFZ3oGptw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eHjn3htWUpZuXU2X93o2gxteSovPPK5M1BjhoP5CzasML1YrMAx9UAyTuTu1rpKdnsgRECkrbDLMfSQsVen1jwn",
  "key1": "3zFsd6msQzcwrQdzTUgi9C9pPL1Cubs53Uwkc78KpWJvqbgAvntkagzELS2WKfpzd8CrXzUNP7drpDQEvqre9oBu",
  "key2": "4CGzFbPG4BjA28NFts7D6W9ANcMbt5V65NaTbpF5eJL6nV2JpJZku2domDiRPWFYCNrovrVKrJh8DPaW8RuXZA1d",
  "key3": "5zRcoDuf44xog8wvyyUn5kctWe6BbdmhNsqbAKgNCqFtHnzHiyAhnR2yWxKcc47KT6PcDK641HiDeDxrrTb7K3AW",
  "key4": "64PJuhD5dLKkDs62XRWDqxXH5nweyHDFsrLsSmdJGWqmzE5ZmSoBXh7muk54MDWCbzmSPPL2fwJLEWS8kkFj7Doa",
  "key5": "5PrFoFbmwu6sZQE3k77G2cZsjNTMRpHoSSbcyMUAHz6zpV5mLcCPnaBuFai1oeg6oyWxhsWRmhUhKrqJvrmKbq2G",
  "key6": "2oCDoBJ2HQp5jRvYXNpc9R3BtSpd9SvxK9smSF1r4JkwWYtqEAYaBhtq9tax7KHyFgYFnDgcuS58UbfsQ8vJ1NYR",
  "key7": "36iZjEaQxfvhSZjmgbDMpN435yapPZTSDHYby68Bpdr3R6UNzbdHGUXEr3VyQt9taAacudvcQ8zyDJVV3VAz6VUp",
  "key8": "DbE448AERz9j73A7gJvkUpbf5C1Nn842CYbVrxee2rCFpRrCcogSwN6pVnyW1epHZURq2JmSi3ddZxKc7yh9wvb",
  "key9": "3rDC6N58zx6SpbFfV7LAB35BSjaB8d35TgMBCmKvX7QABu1XjatNGFVjbLyHu8pWacCAa6KxyaGo3DtrCzbDyDg9",
  "key10": "EUx7Jp49VdXVT9y8Z9ugb83P4MXQvR2Jta3GxjfZrzVzxsJdd8r42xaSitzJbm26Q1ds66NBTgrFPzY47E1XYeW",
  "key11": "47G78qYhAK9WZTa9VbpCE7jiN7pQktj5d9QXJfWgWqEG6GASu5FkPoXDNY3BJ48WKKybcvSqUEZhpJKJAW5QNVDB",
  "key12": "2yQHfEz6CxADSNktPhNrq7Ft92cqscXjY6nHWRDJpox96a1X6gsaG6eAkLHc1K55QV23KUNo5KKKwnYbE3CEJb7q",
  "key13": "217mFmajWzSGtgz19qhvE8VY7Tkj8v2KuUga2JvJMM2uSnh6ZDQ53B9zKHMVuhqy9DSzKgEzQwx5xZD4SGp4bm45",
  "key14": "4GLjVFN4xJ9CPjCMjm8NkfurifcfMh2hyv11sVkxWQC8517rWtyN8zjSEMpKvmUds7Q7FAymfv26grgS4c7Df8Fd",
  "key15": "54mV7xp3ftdQfEcyufAamSoRAVsYhBarRkwQAK9wen7VURfpyH6Brj1u5qVDiHGXbikpKU5EZ2hAMcrdMQTUoqzN",
  "key16": "5a39vZyPNESQsNP7MJxu4zh9SUVC2UWG1AtMiEg8u9XXYyjz2KT6ywtAjrdmcbNkzRZAGCTzPEoKrAAWQUiGYpJq",
  "key17": "Y3PaGA5zsH1z4BdBJjGz88g9qboRZG4ABAvKoGNhiNzuan5pPU1QF5mCcjGDcehKQjD1jFw5tDJBNu4QicxJ1LU",
  "key18": "2tK8Wduubijpgx9MwUK6637kgYxvznwA4eKtLfADGE4dzmGtWep3b7j64QjXnQMqfT6ZK9Wc2KQoTawKNnq3sfDt",
  "key19": "3a1aDE5VtY79Wp1fTfVybqhbfGxnTijj3sU9bEyWtxw6KAYtx7daVD5E3DpR2sibSGNvaUjAzsxw3JRwBbcWgWLL",
  "key20": "bfXVrNzgkFeyGQ8wg9khV6fEakckCbV5KTV36aHko4SMDhSFFQv8VBARTgLTFSKCnHoW4vfd8TcACopU28dVedL",
  "key21": "5H2Fx9RphSEwYbDzZDmNjdcKzH7KZqjYDQ4iEpi9mG5183k67basWaqeE5Xfovixxv3k88Tb47AVawaRh3pajErM",
  "key22": "9qm6SN2rH3DF5vaGmW27gKVztbheaiix2hX6nFEJ8HnneP6JZZxb1GwUo6Gm8V17U3kWpYUMYmKrw2KLYFfd4mz",
  "key23": "fsqELeEyw3mLgCwS5vHSu6iapDMBDNtD2hqFNP5E2XerPsxABnfFp8E9uU9SNjDEc1Fcjz3e6nAPk6Yjm1AQz68",
  "key24": "2dhCrNG2ExDsnE7iUy4bydKzWDngboDV62eC6Tz74Ew6o7BWiTrsjhM6zDi5tj5orxKdozmBzZ3Dr1rKm11ccAch",
  "key25": "5TG4E1hkQgdSqQo4wgHMfZUNype3LvT6MVqMJxrhmjZVCWMstur8brLa4w7gaMLVxwrvgV24dqYfuKbdTVxkmi6p",
  "key26": "3ybjD8BCr9Kqc6Mffo5ZGZTEnqhYHSFwuTXKpMVtSqD6B8SoecZgb77xLj9hromSHEn3ypPuKL2U1UzDEKbC11BW",
  "key27": "5uEo712MxKeZHtNmLkwhbgGKk6pmkHesuDSfrxGXbcx8ueCMfokNTph7LwqnJ6XxjGMUU64fZ6Yqb5FY3jG2je3y",
  "key28": "551oo1vbjyk5GG8uQ4hKHexiR26C8cTyshGprtZukwwRFTopcUUWV1S9tpKfpVbCFBfYxx2Cn2QVoA3YQmp4KD6H",
  "key29": "5J8PNkjTNneZ7tsfox8wKbFipjw5rcZ5PEE7DWYwKHoQLgScBvhWgQXyCYvEXa3ckXnwbvr7vCv4nvBCAHSiWGFW",
  "key30": "iPMXrHqfp4UxSdVxPUfJ83EyXWrJDkbqzEdVmMVMaCC3ZZdPdaSmTFqdbtnALPut8gjt21QyUdbwmsmy2v44GRF",
  "key31": "3idCmcTUY3ayBGfjMDjitmRQfB7Y7swSqzJafcMsGMeReukP9vuSZkpF6ur4GAZ8Wu3c78RuN44fKNar1iWesxyL",
  "key32": "tmr6xK1WF76wX2WiQwmYK98Mci8VXSfydiFEoiAqPEnCVRvTLp5VuxWruaLQaPk6BFWur5pcJN1GFBTPA341BBp",
  "key33": "3ZGm51gHD2coQo4YYzH85VA1VHtxZF9EdqZZqxi81EX185fb8oMfkEGfZAqEeDwyBWmuEvYTsZLGxdiETzSx7spS",
  "key34": "53XryXUw2GQWGPbm7HWtTFVWf9eibZLh9xFqnh6mFJmg3GGTZQQpewaQJ1tFHqFB5QKB7qCiNKvk4xxyP7tLXtPD",
  "key35": "4pvyesZtvSbKbcPwZX7c2Uo6EMcRK6WneoMarYGybbET54Viz3hBBVo4mvirdGee4AnQDHq84CVBhaM3mmbcfnaA",
  "key36": "rKgACMVh8VjA5fuqSs8FFYGzvQQDuoEq6cPFTWApkkbWp2NP1kKKzXNyLtg7maEwbV3G4wNzTqhBsMvChCwXgdn"
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
