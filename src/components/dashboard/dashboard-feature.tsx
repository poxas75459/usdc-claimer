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
    "5Lfiod4BpKBarFuBxzqgFk6xsM6Da8V5GXCJJJAzwtQsoSs6eZRPsLRJ7dgzgCatEHG7bxovxZWaYDGEX3BthNh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47EyhfZXJ2KmvkdZvkZyUqawCRfQbPy7cSzVVvAcb7UQuXf1SzL5XJQiBa3aEH4jhApRrzbbhsHXKBN65wXzjr9T",
  "key1": "243yuL3zXowAmRTECTJuf8e2FioAYqmZPLQYkU28j2FDbqYZjjRGN5Qk3kTwt7b2Xnf97mhyHd1RRnoUadVm3BNy",
  "key2": "2ejau7qSjQAyzAvMY6gTpe7tTv3Btbd2zZr3PPd2UCh816EUbrWZDhVotUA6btyGAKVzCVCXnEMW4yEm9jnAnp9c",
  "key3": "5zQEmLRxxSnnoqyuqDNZa9iW8TWvcAxP4PSTpTdPm7i46QZtwi7oWtHu9hisyr8wdgm5mLPtnixmB4H8VzaDmLvb",
  "key4": "56o6aE7FcLc9hS8YrTxfd7z8bSQf9HNQg5ZE4Gt48A6ibQa5Ge2xD71Fs3Wp3oBPccNus2vpG6uJfrNXfHaAG1gj",
  "key5": "3Q2xUoRv2N9jFkNREGUKcte5T4zYwM3f1qPCUWGybtidmdiau2kJwcZy4n7NWt1mDnUBomeiodNo6cYf9comFUYu",
  "key6": "3EVFQWcPNW2PtUFvVwuknYTtMfEmdyTy9BNy2MaAVDxyNNJayLHKnm8VupgHFv2Nmu1B4yQPWCuSaiPWbGC28ZJb",
  "key7": "4GfMUwaXgNKnDFcfYWyYcTLMEz8U1DVCBUWprWwDw9LWPtqNSHZ9HBHDcydm8sk6m2eZugkrRFmAA3tyYMNcchym",
  "key8": "57cQZiuEi8jmeDKfCjZ261HLCkftL9vZeR14wK7i4ZcVawAubUsuMJA9LNXQFLES3QxFbimXNaVijsYmJm2QeZCw",
  "key9": "3fNBbYoV17viQAULdub8fJsM1zHRg7RJ8iQUcT9cQY3GZtqD3b9stCSZPSDgFsspkPv8UqhPA2DnqvyPkids7Rr2",
  "key10": "W6YLFPYjuBM7X6hARuU498KKvUM16YwC1XfqqhuahBKSgYnrw9K6EovaH58QwCtVCmRGh69HVnJ1ijgz7y7MTWQ",
  "key11": "jiQXX7ZRVXVwzbacBTLgSSaTghRf3bcyj5a4xaP2FG3jwi8b61SERVMZ2mUtq9bTvZCeNB7DhEHCwQyE4DhV9i6",
  "key12": "5j3uQ8os2LtHXiPfQxtwK5WeF5FSTc7zcZe2bXqw5c1JnM9qv9ERk5D6PdRnSRWpvXJW1nf4aoJGgceUDdGzQwyf",
  "key13": "3ew1Q3yr9mMrMPF55RwodePbe8pjAHDD2mM2LoMD595rg8bXzYgNpq9h9XGqtREqFBJvnJFivposvAzNLjQHCUaS",
  "key14": "N2Gfje8kvF3m9wMwhKmjSt1UaBBS3HSy17E7BZus3w3Lvrz7LY9CXiFPgTbdUP7Rvcu861ww3habGedCoH1GgLc",
  "key15": "5m1umD4qRW93dC9QEC1CafBCWYYCT6TJasHzE6DFaGUkLUDUeVDmmBo9e3dNroZmgoWRyKqcV35iFxV2Wd5dF2Ka",
  "key16": "2c46fjvSuMWHjzpDWCFfsDLkp7gZK1WnHhTRTsCuswux3dpfFLXQYBLM58AMTpifSSHNDr2PGX1wqV8CczXMbCY8",
  "key17": "56V3VkVDy6nA96kbgZcmobELhzY49tFxsgmyFwNhdGGpvKxdv6ByfYeEaGgsZgAfWzhL6HUDHiKCxaVxXFR17wif",
  "key18": "1oh97rfwrko19DTHT1UjL1nJY6AMVQyiWHNnmMms3j1kvHZWN6g4qZ7VS7pHvqATNncuS5RZAkhHq9xWYBcYzui",
  "key19": "4c3kcBgf7BwPjwYiTZzMWfk3ToELzYGP4CpPACkHsKz8UVoLE2eJyxwecoDmcMDQEcswyJgKPbnJwtonHdEKyR6T",
  "key20": "3riiKWuZVLby6cSXbFYb9zndxfX6nJ88VdmnSLQAoExM7DnebygfTzZrs2CdkPywHsTHFpQpyXiPjJVq2zEgJNw8",
  "key21": "2HfoRQ1mpYqnkCKp1XEXAK6PzbRaLgrqKQh7cFXRoTC6KErJSMHbu9VnfG8imTfsoTeeoecknzTwPzeKHwpK4MoH",
  "key22": "5ZHkM9yGfM5E65Tuvcxj1wuJqLncHLgf2DyGkNcGypCqpNTbTYGWKdvpWVucfvja5ktig4qhbggb1guhBVhpt7LK",
  "key23": "45noJcK7sqeYnZvFVRmcftt7t6eVtxeZbf8o2sHFMFeWRfXALjzXgqJYs2ZMr4N6v1XppT5oVN2jgyPAHLRnAeAR",
  "key24": "TBfQxA1S5PFNVR76zSC4sXUkBBsHi6cBGos5twviVZX5qdjG1U5P6PVyvSLYdaVncR3FRwJ9g9r5bXAZ4Ku4WF3",
  "key25": "4S29kzjtusTDyjSLfSg5xXbJxY9jFnGNvE5zCrTHiWEkeHkdJkhXRmn5yHwhAwW7W32rri4oQ8fiLdkPGXo5pf2g"
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
