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
    "4GyAdMr86RPb23GWWLi43st83fGAHQV2PbfKRFFKHFuQkwv49bAZznxUM8nMLJR1AceLcfiYweDhLiHswdVCCHL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2tVnvpAG9pBwXHiVjykTo5zGyQ1zKwN5Wk1PkE1ub28f9qLxQUcFMHuS6C1GUJN1MSKgMVtZDY1M8ZU3SwNfD1",
  "key1": "g5eiK2pFzmoYJdrcppAvhyxYfFjMGvbZ7FQTBWe8M52CfR7shwTox5se8v22QNSXyV2fXAN3t2q3PXbtTn63Ex2",
  "key2": "p1tvtBZBtVSyw8qBnBhz5DUWi8LsBfpFsHixX4YCPumum8LEWPUaYHkdoTbhE7gqBE9diY873mvJvCUTjWCGLd7",
  "key3": "fMBpHCSoTQsaoVJtn7gf3cCFWja5x5VnD3HqVbLZMCbegYr3NMDEkzJerv1QBYe5Xkz9nDdi7xZY5C16t4PdcQD",
  "key4": "4ds7nYPf4BjwhEQZaXs5nDATUPZLjZAHzY2EBQPvpV7vj7bhbpuC5cMJAqh2pntJ6qrjTR6VQkQAk4iYV4ti8qPx",
  "key5": "5cgd1emjcXifmU71hh3uffaD43wbFPdGfJo6x8BMdD5h2yYnk9hRnZC8wmGZ1iCfUhDXWVK421XwXh88yWMGXQE9",
  "key6": "2aupFa9ARxqzzEwj7m8M7wP6u9gZXxx7PLRRYokZUQEiU4LSujpkYSucCpqrZRHwFadT3zQnQaHYiHZVQt5bmbS9",
  "key7": "4fxavApEw5qSjfakZvRFWhUqekjEipPb1pCQzTHVVubq9papDWaSC4dd5JYfSFRbDoQHg9kH4Lkzd5oLnmsQMv55",
  "key8": "27gPzq36NwZG7pe8KaF7FhUmpk39fH4rNbcF7v2aavxwfTYFNhG8JTTWnskeDv3EuFyhvpTkRyVEbgcM78qodnwp",
  "key9": "5UWNMzxxKAsrXuurGrQNBfZZfSxW1LUNXmqcwXJyCHBmQXhhQLYDeW1R8HnGe6f5XSXbph5GRSyXdAVcxxFTg9qG",
  "key10": "5rp8spHeXKq71rjKtLKcbrAt56SSPjwC5ng5auYG536seKMhqpVyCiC8CdraMZ3qrV3ALB781uR2SiU93aToy9fF",
  "key11": "632ZTib6nzzJGdS5NSt53CpqaH5CMbsr3H4P5gaNt2nR3NDyVBdRTF1nUhJKm9scDv6pZJknRBKgGxJDXGeuvAdh",
  "key12": "4LLEraFSGV1JxoB4RoWXbsL4A5PuKJeoSECgsM6H2MM2dThvNWRHoNjNvaYGwXHonqfqZjJSaLA2Yv2yR7LDLfhi",
  "key13": "4A6kHWL9pVs7y3LZKr4BK4vLVjJDtqMS44PfigaJddVwodACZhSn7BYvAxZJN2ZDEJkBukAVs77dwWD4xSxgjEfS",
  "key14": "Vc4NTGH8c8n8TXnhTzbTCbz5Hzc7DsVkHgvvTQjBzG2jYgtvPC6fRfefaAhzSoPa2cdq5NKen7ucZf6n1XLWMh2",
  "key15": "3NoDsCUwNdVew7Cj8ASKeBq9WZ9bqATzpZsJyYrJdNTMJSotytmktM2SGXSg3tpNg23aPxF3Uk5WnU5GPQKiobiy",
  "key16": "4U3hJ2zYAnteHDNzXsLVnr6qvd2DVe5Jyupira957W8dkDeseXsHPSAkud2JZ8EjTRzn6Pd9Vw8sngCpGdgidufZ",
  "key17": "37dsZTqCAzkyniZNqpBBBZ6kVEQcNoT5FeLzEEMF5tvxjcCKGcFuXoABwV3vAjRdbsBsbZs7ZZwTMbjfUa61NbhA",
  "key18": "5pyV6FsEbd7r2E1jxb5uY7jrjfHgmGRM2QR9BZsrC2tuxotC5dWz8sfNRFYdnZxZUKUT7Xhpa3QAvYTa57avDybA",
  "key19": "a9L5in5hDXfZr9Bpjze13emtS4FcArnGrrzz5reKwYsgcdLfLT3hLqBMz885q3LmmRauXUTVDNfmekRV82PH9DM",
  "key20": "5SYU4a3BRYgkFgKNhWEpwT3ADrL36BgBXCbFaX1GXHBCbJCJT1otQHjvFjV2gxgKaRDqRYNDLx3aiNWvt7Ji179k",
  "key21": "4k14dZPdrUw6tBM43msRqmL91trEwbr7mF7ZeWbHh3TRK5jT7gLxU1J2eevBf7EXEM4ZNrSxrJmVtaJUDcUuGaAZ",
  "key22": "46P4vBsHeKvBt3BysisB95RuVovCVq838ftMsm3aCnTHUVJJ8hRNcW6AMJgzLiMsFS3P15AwDwvcR8T1cgC6AKXQ",
  "key23": "24aPemyLfygUBBXDKm7EemhqwWHLLGhSqwzMPyBbWQwQpv3s32PwCgCtxnum8xTvKbYeEHR6ZEnXjdRkSFmLTP3h",
  "key24": "5qU6bWaYGr9Ye2s9xM8ky93YR1zSBtkppuPTnjGxejH9jojRN6tWEHkw5ne1nBA9HQCujfMLQ29vBoJNR3RzTbhe",
  "key25": "4FSBoR1nbfBeCjAZ7xWQfrzcQxR2pYLV56xdMf4kyKWMmNY8MbczkCjRnxF6dGgPuGZSyQGdAj7hauc1UvcQkCyi",
  "key26": "4EUGhTyHehiJ7rPmq1iXU32jtVKoCF9Vknj1GTc6ub1uRQcNJxbGhfeSDKrPHYHJtbk8sGugJSSicktBF3DGY6mf",
  "key27": "4z8dRwhVgfY9dkUhUZKYPCVy9N77jMs6TCe6uVPQhkTHzhqGytE93Y6CSakL3HRZmVhxhgX6RJXLjyLRAJvEZuts",
  "key28": "3YwHu2cfUKsF3GNkjaukuTxmLvKq3vrNMn3XejFmN9jaEC5Kb7ef687Cak7TjnZ8YrDLskoHgYyTmTFA8mL7J9ZP",
  "key29": "31MvXgWKU4iQbb7jJGs3GbgsAHL1V6SeNZE37ctfTygmJMF1gwm89Mmae2QxaEDeqHWy6tNXHRb2bh7QhHx6whaM",
  "key30": "2ZXJEHcw69Dyi2kgnkcSpiyEaMbyCJTiNzD1cd3uYSTsY5Yos9XNSvKazsG5DWRhx5hqxcjeedmmxaPhJxuj6vbF",
  "key31": "5GN3wKaYERmCVvVBtu2PiurN8bMj7P6uBv4VDDHfHFvSJcQc78HzHhMAEfiR6fMsmgTsmP4F84JWz4VgYEF22Heb",
  "key32": "JVQM1yQRUJW9PwE13yT96TV5TzRgJWM4Rxsba5ddDb3x6EGM7zrG2uJeRQJkFRyX1Bq9DZBqRLnswGyMvxcoqqs",
  "key33": "3tQAjxcU7R1kc2XDABH9BTNnZ3v3pPdED7MSQJ5wvHpMccbaat99K7XpXAhrYitnZqx68UyArrWqTMkRAjNkhfwD",
  "key34": "2mW8Rj1dWaryPBmZFnNBeTx3URQ8pCJnwLK1Gq32haFUktxRR1WqXqQo9uJ67YetGTBW6HgakzwabFaWArvCzuRG",
  "key35": "4Ei9e4JowU4vRpWaN963KKC4r5U9EAGsJzLxakr5uEZkqBsucrsVbdRacgf4ivYqWZACfaSHFodLbfdGP9VrFAvP",
  "key36": "4vE1g3gtzfpXc6GTAbEa58cb52ZwVz6nxd4LGVd8y67kC6VMxddpnMWShJw8izxUTguyZnbTuqHtw7GCGqycnqUJ",
  "key37": "2zpy5Nw8WV62Vo1FCNhtzpaMfcdAFbBdybERcYry4tBLG6ecCzPL75Zu2LdtkXbTSMk4yA5sEbbr55GJobk1gGVs",
  "key38": "3xwrFjxJj9pV2Rk4rUABaqAFjYN5vf3NnQF77Q3T74ZEg2s9UBcobeDV1ULu3XUXMC2g9YbcBkEAUKUpfjxGKSKp",
  "key39": "3PqxnDvmpj8rNH8VcUQcdvDJTERidr8EFA5DKuX5mTJnSyuzjgVWSXafV7KchGkmXX7CBDb921DpKGr5Enm38oWw",
  "key40": "49wexgu2u1d4rjCZfGQBoimxFy62vJenTdjFx4Y5g84yrkSBvWXxRcJWE7giVtL15DFLgWu6ceLwGr4yVLpgxwow",
  "key41": "3XTbiiy4B94ZChibYz14hb35jPPtgKPv24uk9VtwNyb5vKvLDe8fKKXtS4SBLRxVTtBHqwFMfTXJJaZv9LGoaaTN",
  "key42": "sUWyuppbfMWGWY2ZjS5ASKqh3iwmRjkkmUUVZCdkHGiJgaqDE5xSccsYx8kaSAxYZdJGXBpNiLLhgwE4KWGUjwS",
  "key43": "7JHgtiHkUooTzU3E4BWZdBoEXL1nNBVXTVrPUnweedhD9wJvAMBTqisMWFNeB4ebwUTM6r9hh5mX89ictwe4XB8",
  "key44": "2Q8TTRg7KN67nrKbeqM7Y1iMm4jFZcL6tnhPCxowzz7mbUC6nvMnzBxdC9LU8Ro9dqDEX71yB7P6ACEhcjFnWNYr",
  "key45": "2GCr4a4XUvF9rmAAS7j2qNfvBUiR83mJwm5MiT7PKnqtxN4TCmNMTHqztodqbHGXJpxj5RHnVG9G41NjMQtRLAit"
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
