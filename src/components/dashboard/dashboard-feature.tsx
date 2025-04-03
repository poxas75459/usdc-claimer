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
    "5oaWgagMb5zT2b7T4ZDC6rCkdBPD6iyKR38vEcwtgCHbSWKdtnTgV54v6rBR8J78fvYF7KY6oPybmqUu7h1S4VFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bU3RkinEJZuaowYWTpJ3LeQS69S1YMSxtDQ8iPj7N73Rm2a3qb2R2VPqSvx8s9fPZdtwhiVZRQ3d2E1aGVzMbH",
  "key1": "64ktLTG9hx1mR4QAcAUYaXuBkaR77gbXq6GTTZgLz4KQjTdwdhVvmMK7oXioSbnSwzBw6te9Cdibi8dhUPjmA3Va",
  "key2": "7oreNjFNkVfD7eWnTqLE8dRr2PJtGjGg4F8t891Mc4PeExtTESGFvotbGE4gtVU9SzbbDH4KKuqUWumWVY9QL3a",
  "key3": "JSG2q4q1gjUgrK1ikyZF3Vgy6zGTupTTcKNT6LFU7aQKD7JRvQt43fsD5Sgic8cLT9v8LYvQ7HuqW2JZb4GLdTL",
  "key4": "3LWivDGdJxUcr5gaUN9qHRhkKKyExr8gc2C9ncss5erkNPkPM5ryf49W1Ye4KzdqtHAonoDvbefCn9xsG72UhPAe",
  "key5": "1ixrGc3iUoGVEbFfGSck18K9ZRH7Pin6t3XGHnwdAbPKpvjtbTrH7jj5vbaahYGh4FgabU5vgeC3NSjxRCNjAfY",
  "key6": "4gHZKZ1LxJh4N6FrA3xbgLCRCZ6Su8ZVoyfKNdVqixg2s2uwKdAGioLYwo4r2sGxj5b3QbzJmY5MciA4rVEaZeRk",
  "key7": "5ka8mgPKabFnzPkccYF77V7KNjC5CqbknWXFqwZVZZMod7WLbNB3DhwbZzCmTvugpZSLYLsywT1UpiYCVv6BXb8y",
  "key8": "TDx6NxySzSMqUnZwW2Va3kmE5XQqDn5mpyvWegQaZ5Tpj2C9M44erjRaPiNkExLCAeGMBPamAckbTMNVxLTYf97",
  "key9": "5eUT57ysXDVCVNsS1FyyZQQ7AVu3oH5gJ45A7MzkCK2bVAKPJBmgSuVxmRuPm8PBfFu6Rrrr76EnhTFuBSAwZePQ",
  "key10": "432QfaYmyPhymJh1fvKBDv3ykJQzKny32DLrN88cARgoF7vTxChhDDco14BgLPoBuGt6gQCfQ6iGzDniZ49nMJ2P",
  "key11": "4tC3iQVuN4Q8w4AXu1HSC1DK85uigrikM4Sk7oi5iv22gqLATSQpmyKqDWaAZcBef9ckqpK1ZMP9zLtmNixTkQPy",
  "key12": "2KZKHXfBCBYLjAXU4wvqf38ERrb8yNKGmEDJfFcy9mz9KfkSxRVSzkrHpHndCSyc8LkCJAp6L5FUbzXgP16tdBcH",
  "key13": "642mvGiYqhtDwJnq2anNETF93AGuDoAeV7MxDkZBExP6rEjiNDECXUsVmzd1wZdMtJw4q3rzwauJcHyhSmaqB3LA",
  "key14": "3Us4zQ2bC5kZczzUvRoo8VH6vPXKJvf1SyjJpKTCsr2RfWo3j5ZyqxJ8hxBWsfgbXKo2sEtkAHqYS9vqhv4WPbob",
  "key15": "2Xq5o6rr2519mUeGC46GdbxfAyphmkpY6sRG7aAiK5rNPdVRDuS4EG9ajJoRLn9vWKYgVUsDTcp5dJhtNcXUBXi5",
  "key16": "2oGNQd5d3QEReS6rDfHyXJn6jZuBiM131YrJU2C7hG49aQ3u1gT1ARSvYJ9ZcyfUZCLVBXdtgD5EHjJ1CpmPieyx",
  "key17": "344m38LkdkWRaMfVtX6jHbhrYbweiibRB1Nmtmo8Ukgc5fHf7cYN6wwb7ozBgWkRbJJHGYTEV8MnCB2cgeJYyBPd",
  "key18": "2y93QcCMPm2iiNdzf5yDFKViACx7Ghu7HRH6khrUg32ojbkHnRU4iVLABBz5FjsXbWGfJk8JyuKPQo4FFqua2Lu7",
  "key19": "4NbjhHekWp6TtoVfZTXLyhw9rzSFCY3rqgYNa7a9Gw2jLGv2pFau3DvDgUs4rSRKKqkvemov9EjxWrDggSLBNbvs",
  "key20": "3qaF47kVshGAgChKSJx2NmN74cJLN3MHJrrbbCT73hEZ7sve5B1wRkREFPLq1g7NUmKb6dsz178aPsa3xfEHYaij",
  "key21": "8S5WQk3ZruixhzJsBHCHoy9KKruQJgMr9NcMDRA6nY2CMi68YPrKRhd3fGEJXmHxwtXgaJv9yj4VeWx8FZAdWQ5",
  "key22": "5sVw9qYLwtoKPC1zwUzttBuJCZsDvpA7yQF1cFxYkhFiiyS3aZnPq39gwxbJGTqrJBWpnqZikTdfrAyyZ3WJmcaH",
  "key23": "3Z9GCJKnRzpZPrVCFwEEKca3ynTzWT1y8G1Z7CYnnV4ykmRnvwDeJDmA2wdRf9VL8ozKqbq1r4cmmTU9mZg2C6v3",
  "key24": "28EYQgKPoF7rYvZ5QS5XZGGB4gENdDWNfLY2KNG3ZGNcsmaqMFH9s8SWBUxkdXBuZT4PNpuBYGzryKyjy7AxyErK",
  "key25": "WAjPmCHELJTqoLjjDWZuVQAG3rzLZu78djM3QebB1ErdHGs7q2nZeWJhzWvJ7zbH8KDADWQrHCwktFAJJ3UEHbf",
  "key26": "2D64EPiMtvUGkc7RrZMBCksPDyc2rkkhUwwsTpMrGLzfxb466ZZkw7WMoPwJ5fE7qjqXuX7b17vZWChWrTz4YcAL",
  "key27": "4zToM7f5E1SgKkhxpH6A3GDnVEdeNfYA8N78wUdfcvGoALcxkFjpsqGudsQBktCgmrNa3TvY7uhEnZxxtpyo2992",
  "key28": "5AcZwkM65eo1WhpnzrPHZXj43LcCVCP8aaq23q6SxX5ksdvSXU9bLr3MDppeXQrcDSC1TGopismMuvi8hFSvHiSQ",
  "key29": "66Z5hdAxghf8EeQXSZ6NZJ4WLFezLGvA9owvgJuXdNbxPGE5Qfn6gMt1LCkkr5AHAGDDVKS1uxescJvRW7cZZytR",
  "key30": "3bPQCtRaijyKZ9GyxNq5VVmpHikBmBM8NjrPRPQQUbjUx6gBLbUF8KunYnHdZhwy77fq3kgsVLVVt282RHzAgazN",
  "key31": "2ynYf5Gx4qowbKNLzvkiZPMdTfPBsbqmut8AsCNw7bjcYaDvhNnXzfXUqtE7KqoUWHEVWGU5C49TtyeeD6miXMNp",
  "key32": "5wfpA19SnM3pVcBBNJbdWTMRvLTeDT8eCtZ8brqtMdJv85mNJb27wRaijM33g3uHr9ZLKY61HxnVpUEXwJT6jSMy",
  "key33": "ffbYhqXEZmyfL5bnxX2foMqvfHfhxCDqLdR585jADpKreoVD4DttQ3k9qkerS3DbvDWpLCidhmoHUJcHUaYbRDX",
  "key34": "5bZ8PTDuo7bEdE6yG5dwWCWhD25qeP9YqWjNPRHkH93H2qAsuyT8o1qZhKWFbhJS1b6qQqVd9CbB5JrK9H6VdtTP"
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
