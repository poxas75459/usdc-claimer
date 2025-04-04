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
    "43iQu8zryNpRMtxd4RDwZ6vuDpPhwtkE81E18JikQR889fCpBwWLxdJKrod2ZGUKjZwM3m9dP6HfBuFEqCwGVmiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38oSTd3jWjgGCTx2nDvkzvCzUmS87q4cJ5aRPPsjmDb96uEizd1nH8ixvbvXTZjwGdNTQHT48DqoXsfTXkFgyQpc",
  "key1": "2YKvwA9J17dvquJHoFXix7Y515BWur1UoQZWEwvYkSyhv7XCEav8d7ADRUSaa14Ah244o86v6DzTdRv3pfCuT1oy",
  "key2": "9zFteMmkkgo6KDjavS6R8V2Tv9FVTzJgPjLyC9JEt2PU2iZZD4RghwpAxykNyX7L2nkEi55JwAnPhm31XcUovor",
  "key3": "4pvUw9mohwzgfs8d4LRnaRizJXoCT95Gp1m9R1FP133Vij2888UNbFDFzZch75h26HTuGFhmDRs4pNHK6H6qMnKj",
  "key4": "3smkgkEd4v4aF6sSApDq74eBM6bNP9n6VipAmJ9rxZrCu9q2teayukjVCa7pq9VLJyr3wS8ErwFrQjG8mox7fD7s",
  "key5": "4ZxSCobkVdEUwSDQYiK6KkMatKCKWHumSzfLuV6fQyavdB4Ntc44zvQ7yhaMvnFHmMLhE3RQkjnEviBw61NqNPoD",
  "key6": "frZioHQxFfS7DLTenrZh5yM4P4VzC7Mz72T1pxx7ikxiab9ndHMX2Dig8vQMtDunry1n5wpsygWxKijdc4jQNsf",
  "key7": "5Q9hawK7CLRfZEjUnj3ZwaVbboxcjNTVsn6xiAcutkDJbtcxK3UUQiZqnLhnzvCbkRNYpk2UB9S2yWmnvd7PaFNB",
  "key8": "2N38dnyFFus9NZ9aVn1EA932TooUXHjdpUGMgX212uDpaP5rjjhwYedqTZp5m3T9SgKYsVdQuxq99P24yBh2VTfB",
  "key9": "4KvMLh6L795oYsrEP1w3xK3n1gPFHbjQHwDavDrmkUDvQFgzJHpzp5Nf9UDmmdoeTEjjTJKhsWxeABVTxNTxPndT",
  "key10": "4BHLCj3NvvBfYYZFWjFcLVC4yGRTK3GeVMbSeB2wgXDadWn13HNsgVGyHbkq6KoLuGG1NKEuy6sJNYQBY3Tx47yQ",
  "key11": "3LSHnXg5XvxEtdHC9F9jiqKyro3qXKsDUVQnvoELhNL2jFeABp2AzUVCFir4B6ASpXQ4GWV1aX2JyT2uPYuzDrBH",
  "key12": "46Mr8ytcqJjE5gQPELzgEfC6w9wYafQuPfNRaDCPMGCWDcZ7NCbGVkrXwwcHKgGJ8d1LL4mopcq4oS4y1XgKzASa",
  "key13": "5kM8u25n11eyw19R2Hn2UUDog2kmjzCbabm3JgZRmNBmNFFnBFBkD1hLEyY1MMSPrPaqozhnmg8QbLpT1pt7S7q8",
  "key14": "3G1HMrwDZD7f4Nk1D3rKewuW27pUoaxW82CJpYhYRWAv3WrHSYE1mDE8xs6aP4vW8JG1pDj6P3Yfr5jaAh99cVMi",
  "key15": "5EQd5xhBCahDot9MGz4fZG4ghfJAbYQ6TSRAYB6brgfz16tFQfaPz5m5A2zZJQSJ4s9rNuCc9Y7MWDwEtejqFkT1",
  "key16": "YtnQvS1WA5VVhmX3NWLh9gZcBy2MUiZUpBP587YsNmup6S5AMD5QvNRQNrdcReLBmhRrHJvLF8q2TNAn6sikyBv",
  "key17": "5VBbwRVdReKmoRyUHRS1D3AFya9cUGDwEeLU6CBdpVKF7xEYM45zDYjyAs6icYUb6y3chKCbnvNxcTt6e9Dvfk2K",
  "key18": "2TyViepDKARS3DRxXzB7hjpGszJRQaDomoogCWbtf1j4w5tvJBi5SNVNTvehrPKvwNmYwk3goXAhnyu3RDXHXcMs",
  "key19": "asmWgUWRbxh8kZDAJTdHH7a4kiXC77xn2HjEjkpR28fQexWaA4Hi6sAmN1zjo4zVifBvPAXT1i3G1RJHdHV2m2A",
  "key20": "62vbXkpGMsewpceei2XhVrG7C5QYbmNcqzobH6bFk913gUjAx8XSWW3EDaqyD2a3e4cMrKUzBsQFbZrK1CLqMEoL",
  "key21": "3BY2VWhPofSzmuQkmNBTzUHMCAS5RiQAco8Ec2QfpVirVDLmBxoLL7rpQngibPPvMhN591Jagk5YRUqfjAW5Yuid",
  "key22": "5E643Axmd8eLKF4CXm7o3mbJ1mG25pybVvkkpgonk1e1AZnS1Ppd4NncacZckNw2TG5evk7GuKDHN88rFgDGiHSn",
  "key23": "3Tgnu76CxaavwQX2iGXvhz8sV116WfxDUBd3sY7sdTcddVvoPCaKV7Cd7EcNMovYpVqvADcFKqtiEuZLjz1sG4uM",
  "key24": "5iSrHkmhogmrNAFn3USBHhWz31fUSfpEgGcRfK9DRqLLuExhfDM6fiJs84DCAT6doDcN3BMfbgCyaAYA6diaYWkw",
  "key25": "2qsLpWpEfc3tXrpPHwHtcGN8aHctRLhLi1F3PnLt1dKWHPxieTeU7m3W8FnXLM8QLQaDkVya4kQXSRq3FU24Aokh",
  "key26": "3Jg9szt8ezWWzL3k7KYPp1CcQSXL4PGzezwBJFLEacSMcdQ6qWcsiK1tzre3yBxk1DZXKz7YuC5FVAAVsb2i2sCs",
  "key27": "53Hz9SCm8ZUUViwcKcxEL5YDjmb1qrK8gaVYrbQHhdN1j86XCo72yaeXmt9beiWvs1pkR7NEtRqWdSPEVQbXoeUt",
  "key28": "4x1rLvHumvrmpRFYPPL6jf2wYUN8RM6M3c4WwKzWZdWmDnjuVhdpU4MnWXJpBVTHtt4RyYuruo8EWQt9a5DoUhQ2",
  "key29": "3JQGDA2jy5FHq8whvNfFuyyqmEVnXEmdHScRHtReTyE4bi6nyQL5n3wdGHqW7LimqNhkS4vn7iwY4WDp45VYHu7L",
  "key30": "2TiX4tJiXe3Fu7hJwzUyQU1sib5tArYzkPEALtJTzLQTMwkTmKXJVZSS8f2vRFMY5wAEuDr35Y8kW5jndNdK11Dm",
  "key31": "4bbtFbfvwbT5wGVao14RHmHUJS7G4VgMV2Bt2egZo4MuUHmn7RsVr4gQ6DsakrR2Z19moaYp55vik7AJs8cJ6ZQT"
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
