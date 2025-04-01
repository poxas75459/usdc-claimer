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
    "3PpSVuBuwftKc1RST7RfHZxSojNMe49Uk9TVmCc3iuPDtxzRqHPLWXZn9WikAvVfv7JwpTfxxjN3FWi7cQzB9a33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ke8qJLiJVUy5irT1jdmiVwimmpJsK6Echv8yti5cF6YG9tNU4GtUSZnfgc6J3cnhpXiPrBhbPtt5xnebVtFXdey",
  "key1": "5auhw9Mf8rZdyUcskD5SfrEUo31aFFeALKjAmFTzgCFp7WohUJaiP4UegsR3HFsXeDRFJMyz9s5ZQNUZq93YoqvP",
  "key2": "3nJw8XCWyfXPjS64pCY4cmkfeLLv6RLAs8XZ9U2a2UaeUCASWyegCTuzEWJg2qQJazfmPLZuRGmZHA5nCvF62RHU",
  "key3": "4bbm2PtXAuzsFAU7M3U4X3jafWoCJ3TUprPW5msPsxxQFPiASfjPXGkjZjYR6kK9reNRnk5uF3NJJRwPmbup2PiL",
  "key4": "2fv94r8U6zbefyssspKeZy6muNtGDSLEiBmSj6DMwx8FXttytQT8U8J7m5i3bFmi2CorPDwFq2PoU885wGQPy3Rb",
  "key5": "2zr43jZSqEMjUEtMwBDozoQMDyS4SXY6KKVLhegLZoDU2H6uTwG3s7HLUG8MvmVkGvniQyfxgoTWkdR6JH3ToLeg",
  "key6": "5BD4ZBPVnuLCfxnJuhPLkUdSJ1wkBY7t77aQabErxjZX8ekHoAhnUGCq8JHGK8HcCQ8bz4HmpkivhvUz1JdhAtJG",
  "key7": "maNucDiTntek97B5huNBxQahDzPdokDgsPhcqKp6ABZctCzVm8FB8CetKzRrE1ZZbWRvvSCJkBDdePkDUYMCVLx",
  "key8": "4gXBzii2TELhDL2oHVox9nK3h8Po8bXeanBNZ7hmRPV2Gc3m8PxTWDokEhh6CSKvLU4dYqSpYQKKnK6Hi2KfUk8B",
  "key9": "5hsBYCuD6TmnmDENwoP3VjW98kLzzEZCdo3mhT7cfYC5QWNWt8shYN9KZaA3tAJNDVMZdZDwae8G8CkvfFJuhaH3",
  "key10": "5ZVbjLMfSBbarHAgMvoRy8toundmDfBr1ZikWtpgrunfXNqcBpXbKpHr1v8JKPcgTM84Xz9SJA8D7CdRZo17CnRe",
  "key11": "435W6ZEmjjRWq1Jp1D81qt4kmm5X1ncUcfY9NjV2MUg3zyJrcyKR3Gggk3HeTWuBkojqwwY2JTDj8QenLJp1aPLE",
  "key12": "5TGjaFYDNkvfWwnys87jhKsRFdNvGByiEaeBzrfReaNqzcd8ojAdFTkDEYALN9ieDduorzKaqhdwtuvMZUrQ3Yo6",
  "key13": "5ywLoB2gznrWMf5WGwK9hPYzPGTxYPVBZa9ZVjuJXQYthnzFqmmi6uGrPEHqzjGxHhMnWXV7uacnKT9eKgVbWQmr",
  "key14": "2E2zjrquWAjnpE57SikLhj4N9SRdkVqoQ2C3hgWmQJkUWEbJFMdUShuCgpuTKKYYZTtYQcJHXsHDoT6jfVHfkvah",
  "key15": "53hX84fN3vKi6jRp7Cus7ykYCDE4568gTVhjiviMJsEefct6VKhGeR7k9Qd55LKQqFPC2P4LBVTfa4Yk7N8Ks1sE",
  "key16": "GDM56kiw86h2tsDY1oaFcWpVJfuqsLHw4ojPa8ifSKKFAbmJnqLNUFxnCUDfUC1CjiJ6HLPtvK6JuJMAViUb4bs",
  "key17": "3xQSNKhUSVKt8LDKxkXVsXYdP1tgFVXKphErPWfHq6DLDTn4NafYhM2ckTt5ojWbw53d3erafMD2JKWWAhVC1sAE",
  "key18": "66TLNJ2B5vhmBpckKiFoTWLbBFStSjquBhKheHgWEyaBvvqgs2TDu8bwmjxC3UHxiLhV3N2wSQoRMjMqnJXchSW9",
  "key19": "2jgUvr6fmNfGFCqKuAC8GHsy3NdUVSBvUBHL4Gfip4tyoUKMBjZR2wTkFE9goMnJYaZtGU1MzUcPZpgJhTm9BQtx",
  "key20": "2a6ecV8v7ob47FWVqQKGQDxnveMmqcQDpe7oYBjbJK2C2udkYeSp5ThUKQUknedbGj7s4EQMzhY1mRHNjUfGUzBP",
  "key21": "451j4HwCeYXiCezUWx4MxuxZNPTVg8RWFmtc8B8yLdy4m5qwHvvxF7eihDDQhwGK1S3hciHdTEJSeX7Lq3LzjbAU",
  "key22": "3L4sDyJ3MJ33FMkpvHNKJ1a2juxojY1qJPBUXKALsBRWLg4xGH6cF8r2AJwUhgruRQf5gW9KfvqvV7UegWZvbeSm",
  "key23": "31owMrBKfPnuh5Cp3fvCpwk6Xes6Y8DEqDz9bJKcjhn4VWujmNZ8msica8Jmqy72Kq4PLoDA6jqQnnnbLRptbjg8",
  "key24": "2jA6pppZV87T5oUbf668wVjegXw1vim3mfwghR3THbuAtdeCQmwtiPAmPZ4ivR7Q5NsgZySs1kMPzv5vbV71GCJw",
  "key25": "2yKyVVWZ1qNpRy7gX1XguSnUBrvm3aosRohfe7qLr91udEzmZU6oAj7aDZk9jUJL7kR6CfZMrBmFyMBsBaiseaNQ"
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
