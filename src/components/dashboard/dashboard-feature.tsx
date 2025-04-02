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
    "2sEWmote1nzHt3LqfWmK4SCDePz2FnUQxTGERX8mVPTDNZVqBED88Tqhh4DFv4VFDUKE26KY8uMpV34Tr1nBGFN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WX5bNQtJjBmBS8jnp5HKyQp7qtygqypq5Npv53UY7jRqFGwuCmqqsZSDs2rYmsE1U4tZfyftt8QedyQFALxCVDV",
  "key1": "3J8foxaSy6gVLJHugf9bBQRByE4KMtEFVGUwW6Xav6LDW956U5N4yh2GMotEz2cb4GjsKYis6hJp2zTAbYXzu2YA",
  "key2": "4HY8TejxRb3q6V7WZuoijdaXE6htx63MGtt9xc4JdkUpBAsUX1CjkPobuq5ZDR6x6xMHWjdoMoc6iwrySUuYNmoa",
  "key3": "21HyEXXG9Vow8wop8HcSXpup86NS4Q2i1BEhiLw7AJe3QeHFNDr3gw5BRJZdDACoyBh4CTJuDxmrWjaP3PZs8gMh",
  "key4": "5QxvQyoyTEEeoGVDntzh5QH1yueDoHqMSJTs3yG3iu3vwCqXoLTsELpeUBXEvdnwUDQvzuo5U7NtXD5dGKfW5UVp",
  "key5": "3pU4Gea144zbCYJA8UNK5CpSgtxdpygzbqzDM2whWksi5obrSyF7CypF42YpDJcSf4WRugMyopnjyWMgPapiYgdw",
  "key6": "5ELtbpG5GT6ZEGnhwNnyaoUiFfay3SfUQSdRTHFrVGxN9R6cFozZaui15bHk8Mthoz6EDM5JJdjRhuK7MRB8kzhk",
  "key7": "3sjHMHFBFnqbEshYzSHFq4qQaTj7PsRwhxZFPfyPMWPRsX6WkAEyDrq6bs14Ha4QYp9GqP3UBMpCsGQBbYbHYNgt",
  "key8": "5waTPyPYiof3UPzLdMgZy9ebUGXfkAA17j2uWE4UNxovNY5m6sE3waUbf3ekpYZgzZM2FQdHBt3NZsjq9T2Xgku7",
  "key9": "mXcnd7A4momADHGrYhQPgnfrEhAmJC2MPWAoqNyJpKFPkg1gZsNrHxKes23R3o6zS5vFUUJtLKZH5V8SBX758P4",
  "key10": "5hPCpW49hEBBPhb7eTtPxVK3rTPdX1nEycwRMCJ56qLD8tQWSF9icq9sJYxrX99YtwKjCQX47rVU9MrdSyTQA6Sf",
  "key11": "Q2kX9Hzc4VawSXZmNC6cHhspznUw14DGrDwrWX2s2EMtuxqa6WgUecsSddG4diGf8R6HCdVEJqbzQv9zR4dP4iG",
  "key12": "wgiRbpYos7UYr698R2iNakjAgGqZCRwnvwVosidPbXcpRF7bWxFMFnFCttGgfwkqECazmCHXVKByTmKQfSBJBoQ",
  "key13": "52GgnkwbUjuMnUwp8GbWzff3Q3G2jmsuM3qj4VdSAzwVfFtMyhDtqgdzyvQhmBKQSqoq4cW5yhggKxYPX1N5UEED",
  "key14": "3Tb6NoufocVV8Jtz9bCMadtiAEqzCu5T3o1gm7hqarxry8kRekdB2NJjsQKjPngPCZ4CAwzamm1gTYJXTdm1pZ7F",
  "key15": "63k9X2oum3mtcK4NFzhp5LH9WK31LtCRdMfekc2KTjwcDVRJCtvTsEvApaJ1yoEpeFqmnUKiA2WrnrRNmLttmncZ",
  "key16": "56EqnXtVzsBaYjucZJLgBdaiqsxjBmicBZEd4FUNi9o3MFHmsXrDs7ijzMmw5pRTJgsdRoPgcJWxBiSLuWmVvDne",
  "key17": "2hTsm51VG1B3MNo1gVjVRnRhYoNzggrV5UC5mWnVxV1mK9GijLh616o7NRcZ3dpUNGLbQuhBqjBrykWMmjVNk6LD",
  "key18": "5g3BkrpXU5Nbu1jMY3yKFdWeQosZb7UetrqBsQZS8Wh9WY39n5UgthjrzEne4oGg1s8wVLZeYk7m8ULMaCY9TdZK",
  "key19": "2WHYwMfxYcZmGt1jMHPZp2oCNmGE5ErfSdZzQvdVHa47hxnKsNhH25spN2nz8GWcHiKsEfrhcWrkjv3BYgSLBjh8",
  "key20": "38Qj3b9w7AnMSiGTZA2KVtTpfwje4qg7sbnnYkcCTr7SDxZD6ekE4NwAAiGjWZVDFt1oZv3bLLxKzJxD6hUtCkpT",
  "key21": "ZUG4f6VLfdw1CFyZbbmfdpS3rdBcNSVFjfkqsWKVTy7bky3Zy56Gki1um8eVzsfuVwoXyuugBrBcMDTgFP6x2JA",
  "key22": "Hm2Rd1TmEJBnHw6BKjW96pw27gjB6jbvLhDs9MAcV7unRNUrx8sXyC7KCyU96mTaevQ5HZzNWR1tTXcaR2YLNB3",
  "key23": "2difcfXRVNnS4PrcuLzRm5g4Mu8Tje9oHpquodfQnayZJnGMAqAWb3Y9dmoZb2QyMcMRJX7frz199mecPSGvkNNz",
  "key24": "3nYNx77auxYqPnw4egc14fx6N1CE3FuGqzZYs4U9uCSZTiabuBVJyecca7YBoEKH2AxH9eExnGXeh6LeajwvDmuT",
  "key25": "5UUDwyd46EY3dHHGdg2eANxdhVYTSABtJpmipPLe1tt9ZrGpbFK8mdAj9kWjzWLkWdsYovJsKwHYnKwJVzNaei5Q"
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
