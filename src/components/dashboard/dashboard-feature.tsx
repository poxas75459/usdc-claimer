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
    "5ccvh1Z9WpZEjuY4KGtNKJns1r2fyVHy9aS5kKtehZbcQ7pS8qMLQZHm2RpG3WhcGfYRdDQBNVAMXXcx3WPoryi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVXqXT4uMGhFQ6Eoq3exugM8brUDKcYamcSTya5aUfvyXacUkC1euTVqeYRV4pVMU3ntNW9n1r8ftcuvmRZjRxm",
  "key1": "6K21eKxGEstTZm7yUFNkQrM789e6fqQvrHgPLuSsbA8BTzugrsDqZxbzm7LGEg7PhXASzDNXmhv1r6CkdB1vxpL",
  "key2": "26bzvjhf8WjexUCTjhhSwViigQyv9CERMKrA9rfmozgdLqadDHNCmcD14GPg7dgotktmVjP9sitDR92x3zLgBx63",
  "key3": "3s4tZWWUq65ZWCZsfu1hERYLwHGY2fUudL9sn2qHS86vwGYCk5Q4ntu9caSCCsmuTaBzz3BhULvaGn7gS3b5mbEa",
  "key4": "4LnQMZGLCx5RJRUwCCdaJQ59aWQchCiXerzVcQThaoJuZdinFvGYHXLeRDgzTYfuBS862fi6B5FKoc8qEQWQuDMQ",
  "key5": "4gJLmBxiMxtHMCJxgdYwMskgF4JcJuwYywczYKX58XvsaknD2YeBNdH7oVukcoZFQkQPyPeNgUFXzAFoJ3hn2r26",
  "key6": "5GmkRHmcyobe6RcJPxj5p6qDXuyMzc6EDLirJ1nmFhbSzMHfTEPrZjS5vogZYMZtRDnvtgbP33xYtGA4GzzPU5th",
  "key7": "3LjKQ7x1mVo82pUKVuAsqPWiDasR8cczV76oUUch1qH5XXJruoFnnwD9ozHp7L2vhjoq7ZAvik96kEBUdNN26wZA",
  "key8": "4mpqXatdbpmpFtsn4f9cdP8yzf42UDaS6tPnecopVNK7uqxE3CNWRGgmYqJxihzRm1Ujo8cFZEx7Bb6DVdEhioJr",
  "key9": "2GXVwFHGNr3r6d4hsqCeSUBGnxgkdxApCYEoJiy4i9uXE7CpknyCz8179cN1zbXGp77r3BJ7CSrsmzAEUAWMfAYD",
  "key10": "4BmuvcgxykQULgeYazvTt9fEZ5Pd6DuMcxb1aPx7p8mhHhbaJfCKWyY8GpeAst5RuaxeZMs5Neqg3W8ZhdXr4JwX",
  "key11": "2YjMN5i343SQyYwQCcU2k1CZPLc7yUyHkNxVMZ8rexNPuCH2QdUiaVtyvkYEdS8ACw8WLLhdjTcWH8WPhmZTfjBW",
  "key12": "5N8tn58LmbDyqqhTHzgTDXh7tcrCtSAkNH3cBG3fCV3c8NEtVfynqfryXJrBHSzjzS3PGByzr7VNd9WNSNjBqg4Z",
  "key13": "hFNvUbR1Q4yBD9izc7aATZqNBP8bA46Uxz9YcwzUddhWjcXtKv58fWdCmKKoFYgFZLwexXujEJKB3hdn43WX8Tz",
  "key14": "42XhUMednJW2kvrZVbNgFdrm7t2EYUaUazeaMrcT9nmRA58s5PbQ2dXJeN69siMHntsjH2aFz3hrUZJLnKPNS3zL",
  "key15": "5uP14ZyM7CJUjt5adsZXjN4ZX7fn4sYuZLUGw4h8g7nbLzpWzjf495yPqdFzFfpvWUaEx4ZdBBej9tTVrA7bKXA8",
  "key16": "56wT1zzVpjyFYBjFL3s1ad7FvBrThZn8BFhv8mAkzb8C4KDCjLrkpSHy7H8xJaLZ1APqowbEQpZ7jy7XfCd5as4M",
  "key17": "nqT1odBuiTVWQuRrKLAweX5uPuCGsWWbN57TC7wLZAp1ztLFqfqzA9TDAMsCqTxCFeVz5TQbdrRqnJ7MWweFwFk",
  "key18": "2LAcChkMtZb2YbNtXApBkyTHYbQTCx6jDgsMEehmVFjbciL1pgF16D5pZkDKBaizfChyeyLscUHaEhEBGaGZ5tKJ",
  "key19": "3T87ZXcnwPND7MfnP6sQ9ep1M8Htbd11gnX1knisEyhJUyTgWDQ3wKiTLuGxLASakNKcYx7xe67S4rpZEgSLXM8Q",
  "key20": "3ajjMNs8pExPc8jo48fs7RQEfN8WZVuQ14661YCr7FtSF7CAEZKXLrEipUzG1RQAaEuuPwdkWHpy1aSAYTRjzJqc",
  "key21": "3nHiQp7ZKHTixY5rsf3XHtPmovwhTNQUWqkfHs1EJz3R13GHRg3x5SG6XxcnnyARBUA7Ff2LA7YCgNnhGcMetScE",
  "key22": "4TMaogSVdUcsPQNAKYuMbyvB6wNJdNUFW1tGCTvme1thE7FGXXpeDd5vMfAUQUkkUXB3sMhDoSLCkTdGSKf2o9i3",
  "key23": "3mHB2Li1fvcFu2CeNuaZuBuMdgbrZPfLJon4yWErFMws5yTKqFGixZX3gaYpNku4XjVJFxzmKYq6U9xGYUn9AaUt",
  "key24": "62zcTq284ic3magR5EE2UaD4Wk1cjtd76FP3ANG9DPPQcWDv8Uct9rGoGPYHzt2sRzGeoY9Xva1sm2hhv9vGoKa",
  "key25": "2PmfGfjKQyTNz5vYDwMe6eB1PLgK2DcFxBwY4WK464MDyFVBMfBRKYZdAPg49nA4bNqKJvXsyiNV4QTMEadbKvBW",
  "key26": "3xtMNgibDt5Ahpt9wF2d1u1popkA2F6bUZSDvX1KWt2cRWV1NACyyX5ub57mypiJjFw2Wkwa7nsyT6NkEP5JSJus",
  "key27": "2AQmd2yz8nSuqfv8oG3isYVpndQDz47Xxm3CxsC4va62WRW6xMKdRjaGas6yP3XKki9ALsobNkhxcs74VjrVKTx9",
  "key28": "nvhuLPydCem7q1sC71NzfzLGv8WxxfX1G9EJxry1uXjd8Hv7Wv1zZGdoFzEvsuK42t5JzFPYmyNUuGQ4eo7A3RW",
  "key29": "2Y2D1bH7hvGX7j2BfG3J7LHLhtTW1wop9fiiq9kzdbUzeYAWyEZhJCH5jSXxZwofYjDhhfRZodWeSZgjs7TpFeg1",
  "key30": "2Lr4HjD4xTCa4KofkcfLJfc7CntMzaTpSRmuzmSTUT7wXWky2zZpH7AHW5ZjFiXVmpEzmq9zsE7mQPeMjutiohXc",
  "key31": "4CJJyLWSvCw6pnoxPPh9fDe6RQxLp7XGvqyU7hQSBEp9256C2qU4iZ5Zjk4MR8ANgpdW4A8TJrsiVerzvo3gWyBk",
  "key32": "3wX9uV1okGSico58apfH372No94KHRVmXUkTvLzmo9u41wmtvgsHfRFK3pzx8UCoPvRwBXtvjdYAj9L4y4kgyvnC",
  "key33": "2t31keu1LABZXjRQLXaDHfzT7878z7U8AyyP2VwSeVtEgrR3PiJCGhhZMWXPtenJsGb5BgXMELp5garnixv6mC7d",
  "key34": "53jNN4FR5cYoS54hVELpA53W1A933g5zzHa6wdvrecvw6hZNBV4zPTPt37Pte2znapo1tPpZbsYtGU91Uyi5iXba",
  "key35": "3ZbkesSDd4c6Dgpkm4nsSFCBgdsEayk7kKSggtTLsQbDSjtqGGiJYKktPE71vFbGBEt5RhdJCsHTGEqhXRmNmhNR",
  "key36": "5FDYKArjnudbRfjhJjmtcWezRCKoUqxPzWR4FcFxKXN7R82WZKkEGDnJENFjGxLbqeE94oxWtj8NBxdjj5rGPSB2",
  "key37": "3YcZCTWqFhbmLBnru6rS1pEKWmbUQhXQNAaEy8katgMnnveTqvUCsjDd5Nq8F9XKBPhm9PLkepVwBG5LsT9FvKJa",
  "key38": "5K6pTdk6VBLWcqD4axRmKmbietp4BRkPmdCgQ8D9tkXWA8bz8boDrRjTvacaihLnJ3VEhiNQZp8qmmwGMdSuKRyS",
  "key39": "2kLZ5WhUfqMRydaBFhiu89GsvYd8vXq3Uj48Ln3vJTAbKxY8EedQaCBKs3VAVnrgGm3ewfKTHx76yhxyqr54S5vT",
  "key40": "3WKCib53MFT3hJgxBitAH3zVQxeGu9K9ZeNZbKdtiWqJSD4mKz1WoFVPQsA5yBDYqxxBhf4ykhNgTGg23jLpmoh7"
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
