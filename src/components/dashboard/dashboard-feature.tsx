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
    "5ZDeWRbBvYhQbW1tCohucMiV8Likv7Yed1RHiHaHF4wGqt1V8mu4yHkbMosV4r1b4JsPGhJgF4EGzhxJ7dpUXZnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LSNpZXz1hVNqF1atSncsipxyDrojPkMrTVtgiFjWe6BLHzA3iKd268UKtmKVs7QQdqFwAevFTfwxUHJ3xokEcTE",
  "key1": "2nkqtFHoK8TrAWyQnowEsKWEAmcuHoVSTFs2pTGyxr5eoBb6WH1uCtL47cuqPm71QeFvZ4DjGKcrNevcdHWhmFyA",
  "key2": "4nof7X9ZgCDLSjrU4t3KEbM7ecxPyRJg2MAW5VRE793jogDyrzH4bY6wEoLUXgKxs239Y3LSsXiyUbreKWphcdRr",
  "key3": "3Dm22rNQuWPQi3pRmtVFCuW6PNSmSCkqnr9A1Lk3iKdDNjJApqhm2XYr3oXpYN87ovYTcDLU3k83zESkumMNrRHR",
  "key4": "bLWgRFmX5y9VcoM7j5PsY3vEuUAZXKi4xqbAj1pUYQaeeDiRpWE14hpcyZw9eYGW2EuPuUpghUaHoadDgxeygbX",
  "key5": "4N6s1Aqec6GGkfgU1Gb8GdYi48gVsaD4f93Tdju1PwGNgPvUWTHTZhmAzM1i6B2f1TQd8DFGYadqB8M4t4md3bKs",
  "key6": "p9rdXeSGtnXiEZJvDKt9d1CoaLES1cDPxpUjX4xYv11t7Ny65FqNxmppKc5tJQbnwfb9YMpGFaTC3wgFUkh8N5K",
  "key7": "3saKk4voq9mhJ6wdpoqvZirjmpotRU4vxbhMS8fhtkNMttcst5boiKKCBgMEfnsNmWocYcuLzjPjT85EvnKw4c2w",
  "key8": "34wDL2sGvUJMdBABmr28mmoccXEqn57RZDXDnp24Ne5TfQqV5Tm4poLkxhB8nGxPN34WFXMUJTTDqUfu5kRTtKRb",
  "key9": "3PK7L4oWkH96EpQe7nZnEAoU4qXgJhz1Leb2LGtQtNbdGiW6ESUtGz6eeuUPd1yo8QUGCLkq8PdwMzXnLCZf53Gf",
  "key10": "5Fobaw7uwvs72dMvwADdTS6ZLpTagVLajxrkFJp9XrEA2z7PkQ3rjEUN5mi1DNQ8PAFp1QhCZQ4s4Ew6RQ3FZQCV",
  "key11": "2rwbyTn9afN9scpk7qaUrFMvoUPyRfvV6wtMs5zNQRuhw2oPAgPD8HS8XUPhTm2xgTcTesogJTTGBkAWeqkMdmas",
  "key12": "5jjct6SqcmWF2gGPtqDApxamxXntuK3r8iE2uddhqEuqBuLV7LU3QegXbD92rTmbK6jg1shbSHkq5819GtQzpWbf",
  "key13": "3ytUyDZ1WBHmbGoZgxBydusTaMvPeSnoBxTRKLzrGNu4bk9bZ4Y9iFy3odf1UHxLSByNW2uvAMiVwdektz8YRLa7",
  "key14": "4a8UA8csw3dFPtcnL3rVkSS8cBZQ7Jc7iiHV4CysYmjaVZqeFQfBhGheCGKT1vt6wC6YBB9ABQuHmkmkuwAAXKsP",
  "key15": "3Q9yHN4YzUH6bTgPQh12RA9kYNiEQeUAa1gE5tyhUHtvKArwkbBu6VffUZYhthm2aH3ExNLTmo2YusrR6PHPBmgT",
  "key16": "61Xxyj9VAzfiUZ6ZkAFBnB8FchZGZj4JYCdwfUwUtpVMFTZ8aFNYErMftHwkhqZJ3KDUYpEHN9yTp7UBEZX7EaLG",
  "key17": "4RYNdmLW6ZGc19EJrrSAnoyCN7QtY2dNZcQDsWY6MHUuU3W6K6ZpPgb6C2214YV3zcVeoJYXiH8Mi5PjRh8QWj48",
  "key18": "4GqK8tEeMv4Qf48KrgNDNoD1MT9ZZ3mDHwmXZFqw4ZJWPgGU1M471LpZMheSRaVwfKhMXgp63mMiQ42Zpt6pzYaW",
  "key19": "2bhzPGHRZfigrLpcKXuDUxGFKYFkeaHGz9MtsdR8SRfJmoAUVChYvWjKBxtNgy2nHCbW5nFTr6pPdBh5acfLnCs6",
  "key20": "3oiKbh7MvNQB9R1HTe3uZwiY68dzqYPfcWvEiAsX2qoY5S51c6sk188aQvE2T2C8nrRUFyyPcN6BTjkx8N4tC5uk",
  "key21": "2grkueYatqTb7Kei26ySc1upzMG5jZE7L3QgyCiNLB8SjpR88742a79VwBYDxbK7Pv6JyiMqce9ezvDu8zDAe8Lc",
  "key22": "cTurEEGeKBJUcYNGJqbcnmqYeHtsPYt48jmtrCN7Z8DzX79PGS2pxyGGuqeQoN92ZyPY3ifk5zbeLE9LYCkgTbD",
  "key23": "42oDKHCmFiVtYBspuSgLsrhPbqPSRWyAKM7YxKnzNc1jjCZHyNi7Nf1pxPfZ1TpYTbjweskHw6raQQJWPYFTy3es",
  "key24": "pZdTfA11RKNKTji3eV2iged5wfGz4gcQRjzbDVrcHmpjKcBRMEEbYsCwviaiESSCkCCr1zFmRzp9rNYG9r4Nkki",
  "key25": "2kbvdtCw8d6b4zEBamebSbKQFBM2BiaADemReJuyhJECXz2kFVhp6mxUrsEU43Bin2Ewc3wQfaSJMnH26jku6vVt",
  "key26": "4ZCqr2fWDHivx1ph4oKT24Hoa4wugg2LB7YdZD1Ec5SUUwPj4o6i4UtearvHPrqmpQWC4m18EZGNNgLvpL6PvmJc",
  "key27": "5zv8gwcd2AER9GdUErABxGEYzr42MqK8pW1X9QK3MhLr1wVA5WTGgGzpPyUxdTgqsPkk1k511SyJLrW5vsjFgvtW",
  "key28": "5DPUvLj6uY45vqG734LUrHx6fVtR4GyDzABc4AmHSqgxwELoVzU2qR2KUWNaC9JGSLWA7G62GRQws4KKoQcwgXVN",
  "key29": "3G5VqBa189xa5v1xSY6Buc5B89YsDPBAZqkKAkwd6shRYBYtj4E7yvVCJRAhZSCGo7yPkjwbU1iALDpfZajiAsPK",
  "key30": "4cDHA79RGuVuYkZJAWPSh8kRUk94anuPK5S19dXbxzJE1uMRh1HAZifqdWK3iCSZL3Ueb5sRDbnRkkjuev1kRudg",
  "key31": "55SZnsGd8epC4X37RdcCSgaKNAmYuMyUCDvjfXhAGC8dA5KVXJkKJskJ5HoxKM2orXvcAD5sq5nF84GyPJgjDsED",
  "key32": "5FUWppZWfiqyyqE7bmKndoMVbkUgyJR8FnhdL1U8qHg4dcsKFVcPNdJdR2bxhWENKr1AXRTBX7gaSbLYvzkuPhDc",
  "key33": "2Hg7tcFUdszY4utiBdCY6Q9vvXdngcGqCw2thaBvZzFNi2reRRJgZ4hf5ew9Pr8RaF4hXXzyLnEW21QfVHS4YFjW",
  "key34": "4PsbGdWnJFJBGdPmJqY2nsQhqFhrCr3LGW3aHXibEe97Jstu9qUhkrsuMQcXYzffLu5DaKuBsktmQpXjBnuGNEMX",
  "key35": "cgASxZZaKZXtyzn3ZXpFDX3NT3GAKmPJDFMZQNMLkQaz9EuSYNt1YWi1NX6RwewnKX7mGk9Hh3ZDpbC64wmF7cu",
  "key36": "4qwucphLpc3TiD8ncPDEn1jYtqq7kysEMfHzN9sTJFECRZ8jNJj6XG5jrjYCEy58GcAt3R4ex1VWM7DwLTC5fq6V",
  "key37": "BhamXUggERtBbo7BQs99ZbugRxZD5WwN3ojrALgXXxb4XkcPrLVwUa2tgm3SCawvvJ7ABMy1ia1V6AvJjcHhFFi",
  "key38": "xuDq6tpHspLT38ARjCdzkubmzxiEtqoeM9mTuxkMNKJr3uHQ5nrfSRK3ks1hoRBKggdjig64Uz63cAWT2Z9hpRn",
  "key39": "4Bt4ov3apX3M7tqhZKDxE9qVteXGDsgyCwyoq8Rf2ReffzqfXvXsNjrLMcxDKK2ma6AQQchwqdf7wfKcWaT54r3h",
  "key40": "5A2hLXwFRvsMoGvFTRhZKj43eL4F4b11QqVwthRdRZk8AfK55e38GaHn3dvZg79WfZS3dgod5rddESwwuMZzTk6Y",
  "key41": "4oCZfcURoK95oCfievUbY9DHU4wP5hCx3tDLm8hDeKh1yLdJud45n3tEz76A1Ffyefuq4Mxu4SBdFCZUcxJSsZmA",
  "key42": "2TDmpV3Qt4yzbMC8q7AxmseH7TovVxqiFkFUMiALzfAVUMxyr7SAidGZoka22HxuB4GpSbN4QB4mgHNbhpMeFcae",
  "key43": "462zWMMCZxzd4kTDdK4JRtjdH7g1LdHXZqoLRn7Yk7mLGoeeQpRTyTFncmfHd6p9Mzr6182SkJ6GAc8gvT9D3APf",
  "key44": "34fD9k5P4ZEXtzuubi2CEPpRuKUccGhjCf8UrXU99eYEHBrYxduMtMFdvWGEeY86K7TUL3Pepf78gCmcpRxBLKro"
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
