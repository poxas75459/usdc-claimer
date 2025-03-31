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
    "3CCSZouQYozMwVGry4nTVrrRcVWwfGNyYtXpKkU3aGQZRK5vQXmssGvXCuQgSZoubAX4hsFKkRURsNUKvaMR9Qe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktqBSbH2BrzJBgdMm2ccxK6abe9BUNSgjtW85cPmwGTymuLN5CWJYi4gLZQibG3Lk9Esjj7kwzm9L6h2KQszKhA",
  "key1": "22uJN7LfKWAbtBnChkQwq2ff6DJYBWLoFDqzrRn2QdSVkT7nGnhGFQBcRyiU8yVtiTyDJUx43Y4zqZZvarhpmLjt",
  "key2": "5x7TzCkErX5239mVVPRJjiuS8dx6oEMj1Trwo4KfdDF4Vy8wgHSMcGQHipTmZA1jLhhu4dtJvzMe1tkgJ7HvpnUu",
  "key3": "438eG7uTLXn4KBtyGtxXLUSwdFHJTxmaKmHBiFxBf5hVeX1sDwmuVBAYmfUxPe54Sf62cMgkDVFcB9FnfNi1zAev",
  "key4": "3rhGVeWDQkn7m4t3SSkjLQ66xA3Yf31ReFGD925mZNCjoSoXXismss52WrNvo9GivFNiu1gHgPtg9qKYpd9NBHoT",
  "key5": "5bgH9Qe7kwQNAJJcs2GxDiwVsz2SCsWEBpq9a4NY4uRgDLrKPkm1tyDc9BNkZHkWKHf7R6Z5GcF6s9Ed14kAuKM2",
  "key6": "56Lt5isdjioBVm2jhEqdQRYyvUsz7F6BcxNjq28tYf23UZV4N8rrSK8GHSgzfwSShBkKZyPy9HzUzWRgFA7brY9F",
  "key7": "2SrRAG9gm94S1Xgx6eFSifNXEL3cN2a2baYiSEzGRMae8BfMi9g7Kd4wPuX7a6Vko4veRh3cDoHY2CX8xL938F5H",
  "key8": "39je9FkyiGHto5nJgXTjwHnWzYqpybFs1oRygMV18fLEdRmik3wzkKVr4CBvmcHS8RLcm7dufNvPHeBacV1QssEy",
  "key9": "4weyNoKqzkhVxSptwzYRDNaUjD5WzgnnYNNwjXqhoxpYSPqz4ysASvEx4Npyi2NXZXnCcXdtLaPqQCHPEavBaQ5b",
  "key10": "2o95wU3Cu1H2qmGrRkfcn9JuYvA5ryxHcUwdySeZtjpktxcixnJ16wCQecgdFvPXDvPwMz1XsXHPNTQy6kzQY9MD",
  "key11": "2JpchHgGnNwvLePPuQejZJoMydGh15QXWsB2s4L95Ja995myh3ncnUxjnCGF28pU9CejY5tZbxbxJciv4wSohtNA",
  "key12": "5XBjPkXd76cFCBKy8hbUWLC6FbBsn8MZ3MD69fGUYRQF25yJJzXVAR4QxYjGazcbpFbgs7ZqJofeVYc9d4zEM17L",
  "key13": "RusHjWp7FQT9n7CyVDYUTPXN4bxq3BrXnBkc31erpJd1efMxTUD5rk3Z6HukVZ61v9c83ay3GiZRdcfdEi3mpYf",
  "key14": "2qy6p3uqqCQSRW9HxjX9MvCKfwj65xhAZXmEBNfvs2QVbmn653e3XnQhzsyhe1McLHZgTYmDfEwhEhFND7zP3KLd",
  "key15": "4PzEpw6QvRmKVg1JfJgQjwAoibfScW8GkzyPhdHRxpUAXzMAuWixHjCQxRRNKEw4f37oanGVhS4gQpZjgmGdPfiW",
  "key16": "31WPhm2DHZ6AbYTuRvCbHueJttMFRMWkKJeM5hcVhudXKTEaWX8JhsShGsRSwj8Bh2ANNa8mintE4K8cio2et7qD",
  "key17": "eQZyCPefnuPPQda1i3GhM3JVLDAKhNHrLH12fyeN5MxivgT5TZjZsxgnnrmfZ1RGfgjGbqi7Gsca8CNM8Geh9Sv",
  "key18": "44ZPY1cyi5NGn9Qj6bzkyEeNu7b6iSHTSK9rPX2bmpDdVfiTg8PP5WvVhWCdhUmyNkVi7ANsN3mKwdikcjLzX8t8",
  "key19": "3q52wmcrTjteg9bGfir1Qn7AzPmTVdW7ETauWru8bXWVvTz9b84Gy94YZHAD8wVpu7ccZwSeP6LQCarD15SMUyiZ",
  "key20": "YK2kDRXML84EuEbkK3XZxCRYefyWQRqrKw2cNTHvUAbAy6i3x6TSTuX999kjzxUutDL6u4UkxfhPtPXnq5eRBU7",
  "key21": "5Nnf1Eq1LQ5tjyQZtNSsV3myXumTzP2EWjZoxgGfUWJpRxxzgbvyUGc6eRFmVSJGk4n4fPypRGwMaAnNdCY9GWPa",
  "key22": "5LsWMKvKFn9kRLobCmFdByg6P66NJpVuWWU4Mv55UhYmt8jFT2rXg8TteFn7wssyis6wRjiVbzRMAMwVDZPbBMM3",
  "key23": "jgSk8A4c4UsAX2JzqJ1mX9Vja5NqhF8CyEQtmQkGMcXrFPuKfwKz9Q9gaGsCLVGMC2tCHJoDS9956mzxQJfkaYs",
  "key24": "4pwPsokfVxhNxDmhWGmvAsTWQ6KPBt5fZxwDfhV2AVCpDQnsrwTRSVEc7WEQmVtRi1VTfyzgfxe3Jn1t6NUWRtKS",
  "key25": "fGQmRakdiDot5WZyCFPV4UyfHKSMaWVMS3d7MdEw4yxkjmTfqJT8XYb4L4VLLZ4byqruUEGdyzZtbv67o5BYZeJ",
  "key26": "5AqoGzPjkKyzcAoJKK8ebBBiNv8Pok6ieGJ5qtgqafYiAzh7M4td4KX42mJ2rKinA6MwqbH8eGEjXmLLv8QoP9YY",
  "key27": "sgPAnaHnFWepwCyLd5TSibTXepJ4NNhH6DiR6n2Eakc4xzGy3tMrpParyrBLYkFtT1Qhz29gaAmRNGvVf168TVw",
  "key28": "LxBzoXmKJc9oXp2Xv13mcBJkgobqbaEeVaRNWnYsvHDvmanZEVYo2LCfR91e3j7fMWH5fTToQPcepH17h3Z7wrz",
  "key29": "pcKykWMKX6okmg9j5ZNLmxZfP26JSrTMUk1X1racr9Ui2NwVakRcvU8au1zWKAj8L4HowaSGQGLPwmXazjdvPt6",
  "key30": "3a3GPRVzUoRscrFtbYdDervrFP5ACNdDpesKiVJzmYrM2XAuJa6HJ7Qr9C3yUPEzHrK6JeAXtTPtryv3JeXCNt9x",
  "key31": "2ubeDhhcFvg58XeVokn1fAuLYP6Mj1RJw7u7LRsHMhR7hgskinTMDfFMMXC6XR3zLqPdbGZx9duucgiTn9EEatw3",
  "key32": "2UXCq1V4FJ2nPNcEyskdz9ds7PWYWvb5vjmPFKgGKrmHSmSiQvTRU2JBHbAvmVNhp6VfKkShTCocDs8tV81VA8mL",
  "key33": "3Crgk8P2Pz8LUUvsbZej8qL8q3hSqqqr2ZZJcA3GMDzm7J7BSSuFQaAz5xcwGi2qAnnpamuajc1anQoY7tf5iAzx",
  "key34": "513Ytg3JHWow1Usyqnb8Y3R9z7cRC3AUx8nLMretsCUc9jztRb7ZK4pVm45qqz4niz681RDx18ycsAebeUgVwgo6",
  "key35": "eMpgPNj6SxJV5DrWsZTAjdQX9whAAemypbG8BZ1eJKPmpeoquxKhN3aBKgBeczz9pmFmfQsUaXtMe1qgnVpWWBh",
  "key36": "4ChkuDoxpK22e5HLw8ehnp9kZoc3MVkxbgQd1LtDdDdVEj3yub8ePtqKiPHSAoJcJebB5ZtQxEMrwvFfq2BN4RjQ",
  "key37": "5uTadotiTp9iKsngcGdS1d8EnCRphQDzYBEu24tsQPofFJZaPcvfZDqdqvVVQpEUwyVWvHKWScaZLSk1SxdvXLa2",
  "key38": "4BSejMMCHBHLQvhibFvxrLu2swBVe3U5wPCM6Df8XLFu4hs7GMWNCxngxjEz1s8n5mHjcB8VuvujHtu2JvaxM7u4"
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
