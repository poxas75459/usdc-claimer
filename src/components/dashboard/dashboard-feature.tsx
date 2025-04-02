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
    "5SAgBLSSpyhwatgPkq1YhnDZDNh8CXf8kKX5SVv8dSdpstjx1M3Tw2JAfno3ZfQW7N3ZVTe1ivytFKD7CYDmLEe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DrJS3d1KsGPoG7wzLMrHfEYwxTB2BQbSjsvZGcLaLkUFTKJeiJKHcHHoCRtWFmJcaSwY2MPZAfBM6GqFY8i9QaB",
  "key1": "2VxPMsrWRmV6hAaRQceZP9D8T3pcqyXx3CwQpUnCsdeapaqRaKfuL4ceBnd4FMGo3hSyfBwuGB7RZnVw4e5uaYM3",
  "key2": "3WHAxneoeciFStaUTQqhCyiFrq5JToJpfRZNhP97ymgPLu8vu1tBXWGVaR5DaCcneyHRbZbtSau5ZByy22AqVheS",
  "key3": "2nxoAmCGUfvndvAFfPaaQog2LW2WMmcByrPQysTXtZtm9Xh2duyHgDDzJRP6SFUQQ9A4Z5cwtfCXWsiiN1kyRTLX",
  "key4": "2w4DCbY9xGaH9uSoM4NSXumRYJbEtvcKg8JmjRNXVh6WDokuae7ZR8WR3saQVhKTKS3rgbpMRXw3ckjmRiAk63HM",
  "key5": "679gWkDZakdVJasswmLofwKxp5fHgZF4pYNKC5h4o9BtukGxQieiYJfRAP51qqVaFhu76pRAmux1jJuw7kDAg9tP",
  "key6": "5eWhbexmFkhzgWG68LK4XVEytVRYDjWF2MBuTmxx5jGM6jDhvXMt5N1zvsYiFmSod25yrw5AM9yPi1f9bCjW6ag8",
  "key7": "2nq9b4FtkJ88jg5Q7QfMXTof29A434kQmdqvwuN21sjCGZjnYCP5cdAFnXXcM6i6eSx5TqYea1Ft6BL5XB4efbLq",
  "key8": "2hrUUGP9wzNAjvqAKiAZzn2CXbhQD5Xvzbne4wdWrNpFmJWcQTifcMugfDqmQAA5WYuFdgJToD2JPJNxjPDjz6mH",
  "key9": "2JtUphSQXcmhu7xPp5AJxHpMngtant5Xp5hozdbDMfnXXZfvAS7nGb63Fe5LDvn7WSndb3b2YmraKgi8eZdgc1aV",
  "key10": "Ap9b1fbLabGoSK2un4Aa2b48u2E296NvhBBqaGYGHQYpWhF8wxbMy7TUvaU99HJ3uSEfuWn3vXnBPm1fAmGz4MR",
  "key11": "2n9odu4NMi8KjAvgKPKCb6iNiP7XF13kakzXAY1pfksx4uuAp4sBXoG2UNJ5qQNr7Wa37U18AkVBjdwn6Xrr9Tob",
  "key12": "4ArSL4zcdckm369KNheud7BMbo3Cx8Hkf2joQeVoKv13koduyhqD8NJkqm6gSbki9vSSdxBRs57vxRwUFYkY2bH4",
  "key13": "2mjACThuLoz3bZeXXtGpBt782sB5nzriQMRUeExU3zkRQsJeHF4fHNMSstT7H3jumWpGbS8R5EX46VVDSN9VEtMR",
  "key14": "4GkY8A3nVAKunYPnWqXyjUTQPzn2qvF2WHxXz7ZHdM7NxFpS47EADiFLZpG747P9C5dRgmJFGyrkxsoqBgerua5r",
  "key15": "PyZiZuXhoj4kCjSwtvfXTbN21jJNQsUqkkFp8eWXWe31yUGy2VW6GP8JvEUCv21G7PJsb8pBimn25XffxbtEQ7V",
  "key16": "4vBhi5NEVcLFuZqTnTUSSYSGem8hPog9SrMHjeysUKnHo9wkMMMiM11PTxww9YYa77f2uhEJAPHvaremApMMFEM3",
  "key17": "5FBwnoWi2h3XHtauik7acBcZ3PiwDrL9v1JGJxhD3GbSbicgzNf5owfC1vrfzmucDeM1LKPJ9XMmTjkAng1uP4zP",
  "key18": "odwcoX9B2JbtucdBZZu9pq7od8Q1gPdcNsrwe9DAkFEKSv892tcjEXLt3FQEpgwoznTJCjNVHZvjjawezWRxUsu",
  "key19": "2PsjNprCj8wsf1AjwS1GuykCKmEpCxXxaNiBDPABpUzVocPpiCU9QywZJdwmXjrZzdgKkngnUGbarg8YuKvrHnjB",
  "key20": "4R6QxZHadrPmJ92bdmGVHi3MvNseEVysNT1fUtbgLk8nCxo7scMBxEACb6wdREhmP568V3Vq4iviujK5WDpqb2HV",
  "key21": "CcLnFjjo2jPyA6YDimT99XBnXQ3rG39xtmYu3G2TmeHPxtyTdxtmBHfxYfEGRTmXZ9SxAUrfQTm4FJAc73ci9nE",
  "key22": "4125Rq9y87xCMExNYgSUeo9cF1dgDWA6B3fso5GnhiUUNu4aZDmHwjJieSCJoQx7YCoxVMC44m7h3NHTBU71Jhhk",
  "key23": "veHFVFFi3c16zK2UbXzBh3KEwu2bszFUETf1xhyVad5FLbRpcXh4BJ38occrqeE5PYy8jRuwJzHVkmaxED8tjV8",
  "key24": "3qTFiWpTwNVhVZaoA6n6T6D5Ee7MKCueZnwYjGsmJskZNgaiWJxdKMHbNAMvAgGuNS8mhBZeUUXJobrTM9wyjiXX",
  "key25": "ZHXWUEaXWFtEFBW5jutjfE67qFFFUH8JsLy3HNNjGTyMv5ri7R366xd7pMgHL678f9L4t6vtc1LsGvuYLwqqGSU",
  "key26": "4chspGsYCNChSNi4UQDXGsrZ1jPKYZymq4sD7ehBXqv3HyZgq4qSGUfbpRafvCbWy6V3Yodb19dfZ3eHboWxitF7",
  "key27": "3mvgfT9B8qUUmpAgEzW4ZcXQHV517Jy5vTR7ACHFYuABH7YN6CU49yWbQK1a6LBScyN8muevBEdYKwmZGikJnzFX"
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
