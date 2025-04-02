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
    "5F7QjTop9pC2EGjxCRHy1nXSf6os67VwxAcy7Ym6XkGfngAGYxp4FtwZmX2CzBNjMVGKJGfqcCnnMz5NTSDJBPrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d8kRWE96L4zKbHg7CVf3inJgySvyBzB22udCj9Dhic6twQGi6WTytrGfV3VayBJ1hPR2bLCh1rMNBgzMvVD5NcB",
  "key1": "MB9qjKfSP8yy89EezVNuSjdrtViS2RGqgevzhZC413rW1GXCzJy9hH6YKPWFXvNuhKR4EJqxmJKKfrFusMXML1q",
  "key2": "2mvgyzj26hT9Bt51EWVsBUcTpJ1ZHJUHP3XHrn9x7r5hnnYbfCowXWEphVhJfAQn33HBKuW2ucbdkzTsSwVMvgjh",
  "key3": "k8MGVCCpfpRv68zmjw1e8UVjUg16BUFsvjLdHukvtD5wBAsdxKgR3Jaat9B9DWt7WKyMmx7gv6LBQ8dDqjrAQk4",
  "key4": "49sdzxennn39CmShZvPbThT8cELJwpmaFKbDHUsCWnVa7PwgAqg3EQ8UYAJcjoEhMtYeGqjRuFpsDC3uHpwqNANw",
  "key5": "tWecrn9NmPUKqxAHr6YNH1qxUtDp2ZxXNKy5htsC1P9TBMAgGUX1qHxvmonKCwhwSVmnSv5hmrCUKJQMZs6DzfC",
  "key6": "4hqKa1hx3w147eL3fgxMmgTmH44Sbf7eVdqQWZ7dBEptQxTw4D9aTBdJuCpYBuyAbi8iA1Rfh9MEzCtA5DQf2hcs",
  "key7": "5TeMvkY7NwYPnqCX6UgjPjLzFiBCYgBAuf8oVjFtLXYQkZPfnTjsZeYrU4SZE3ms36haCnPpCkXSWsoRe5VUpMsw",
  "key8": "44hkpyEQCFTBUosyviubriZWek8nqP9osJz8GWd68LnfwyvFQdrK4cgKruCG7Lzjt8af83Q5fSjWviKTMKWEeY1H",
  "key9": "5Jf2aGVRnxh5T5PoVRoFTh34k1onRswejSYNEax9qxLgq1zfGQFirmKWnoNbpeq6jCgyynNSuiEQe6sq38xo9fKh",
  "key10": "2sA2DQaAjdbcPFipz1KxLADHbodFBQT78nH1cecMtSv2EfsEn31Ev1nJb1Hv62vx2Q2nrZzrhfY1ajEcfaKt3LrB",
  "key11": "64A7oeJjoiDDUUMvqUZkzi9jZsyAiuaWfgsT58boXrDAkE3RoumZqVHacxJRU13Uqw8MQSLzwvLjC1pvKkcyN21e",
  "key12": "TyLPnS8iPYTAJpEdqgvTwSQjyXVVaGGfo6gSUHbWo7fvVmo2G1ArV4dD38nK5qUEQfwLPdoD9PJqSFQNiDsiRgS",
  "key13": "27iQ3Fz4U3wWtkbwD8ku2jBcJ3hrXQZzY984qASRmyq7JZ3EsACs7juM7Jfs53qw2j1qXD8GLyVDe7oF9gpjUbfz",
  "key14": "2znRYk6HemiEpDspfz7kci87oddyKmAymHrPvHPB4uTcAi5bzTrfx7P4GcUNu2PKprs7mVbWzCaerkxnNSMhGjFV",
  "key15": "2DWr82qiGKD4KjAxgmpRJZZfbfj5k2yUJZF62dKzjRoNQKieRxVc1SEdK5Mcu1nCUYkBXh9f9TxUX4ftyg1qQQSU",
  "key16": "32wb4mG7c8S6JsvCPidYW8bmNQkTkgp4971HwPP7VvJy3d3csaDYfnW2dLSZPp1EBhHCqb6SndNzq8qQN1DNobTd",
  "key17": "5Q7tTDtobctVVxGqiikMWoDq9fappRxgQ4BXd3UxUJbUCT5JjTqpQ6koSFNq3tn8VVAMf7fbAemzfJFbZ6jWVrig",
  "key18": "4QnjBQj87hYKZTJsHTm7xjkfueGAgREb7GnFPCXSu5oX8uC5Dbkc1gvgcbLkZCb9t5YyCcAXSHaRBGJ8DTYgtKJi",
  "key19": "25QcFDFawtM7B7bu4wd2GmqYnRZSWvu7J99N2LqaKiaoAqAETfY1eJqLx7Xsu3iGvtjzghRb83zZsFsh5D2LAHv1",
  "key20": "56nqYwLsqeKMiGqMDH59tCeYnVsxVbZXGcH2VPRSKd2nxp16tCgGVSEDNhx7d947hhsACmcrX9XL741JjDjbXJUh",
  "key21": "66ocPBfqBCxxaDp7Wq3L2pihNrEWG4czRLc5CrEG9NYkN7AmsrjMTvp8KE8qP3Yv8Q3wQtvK3ucbW4pizQLWzTos",
  "key22": "4M43Uzh4ErVzg3MXFnSoLrvnxrz11u1War5oqddoQTnZtpJuJPFSQA9uivUD2DF6dMKZozqgUntgQZn4jMZQWa2i",
  "key23": "2deNrmr82vdaDDbYdP48dYkmM5xEeo1482h7FagthWkpkkyR1ixJiCRzo4vP557S4xtUmKbztspaZtSpxVvE6Kbh",
  "key24": "nMRC5e5i6xd13SV14B5B2UtNnSspzPZ5owumsDMdzAbmEx3uoHJqTdLyLGNg15QHrRQ8hd2GEBeJRY8Q2Y9JsHS",
  "key25": "5dp8MBrvi5MvbUpW2asbFcLrWtPP6UZVDa4rc4uSavDNeUBVoj2pvZc49K27TzaXvz17aqNcahR6hMV7R9dGaXPP",
  "key26": "49jM2XpsEhKLtctw3NMhyz1QqA1mrcc6SsNJ8jLBXiNckVDL7x1yKihBMmMhcPpifXZmMKzXLRboxKLVW1LUfM5q",
  "key27": "5SZSVK4ks1hL6hNUoSDK7JgKguenj8PrbTmq8neBoH6DJHKWxKXdHAB2Z38vEGNgKiF8DxpS8GGgBhKZiDxgGzeQ",
  "key28": "2fTwddBQUC6ih58Zdhfrct1NAHu87PsCU8sJM779A1PHyWtwei7PFcRkzqEQwpuYpDzNiz8G66P2wJyPJkHmjr7j",
  "key29": "PWd2mJz4LpYvpt5NKnTh3QvxQfrLvah2Qs3t6w2EFqxTA5765US2AQxP9Z6mJ6J5pkpeWT2eq4YFJpXDnDogvYz",
  "key30": "5VHYZzzq16BHGyE9eVzWixa21YsG3sJvPHKsA2keemXo8ZfjJd1EqLyxpNn2Fd33RN77uxv9CWfVC7hG76KSJKi6",
  "key31": "5nnxcpdZe5BkhaTBmwpc23kbvCABZEJHqxJbMGaGM4XAJ4roWQf8PB3vkLYcFSGnEdxPUA9ySeDHZrwqVZK7QS8m",
  "key32": "3NtRExKbW9QrhzEh8k8VsFAQWYPYGhw7imHErhrpnZgCZwJk9gC6Xwib5mWGTYDTnW7Uaq9vNJcAzWU6KoyHrLhH",
  "key33": "zqSWPYLJ2MQDaU7qSjVvLh66SeW69DsHqLYVoLXzkkum9YiMcjQjhCqrPE7XffFC1uvf8c6w9iLPNRfND3Yei6H",
  "key34": "43spsjxC7MNZn1fY3wTxbFe8N9RZxP25F5C2yrmohSRMs418naqQWow9Uzcec1X2uPW4FNoKGhH5XJ4f2j8x7Avv",
  "key35": "3ArdAMUphTzGMjr8dbuX67u4VLqBBwLuisDxLqoWCMBi6Ea4GAqWNw5zfNeGfd6TDNmJ5QAxBiTgnGbXAbYY21qT",
  "key36": "3KauQBQ8rVztx9EaGq7a8wtMHcbrXLuRhD4A59yrbFU1ZNVEGup7aa2vy5UzDU8MCcesGMPFQwCm7TxhZXSFuMPi",
  "key37": "2QF619TGc6GQ5RC8UmAKued2LUpQ98j9C49oC29kVKdGz2QxA9y5My1T29ZnqA7bnvo8KoVYuVDncztMW4DF3UwF"
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
