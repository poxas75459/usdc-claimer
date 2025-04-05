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
    "7w8t6Sp7SeFshibkRBtfuSkcmcQXAaj4eSQaRR9ugRC2E97ZDmg13WpwM7xMGzsa91ZTwYcodpFzKuU5ouJSU2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44T1hVeq6JRT9jQDziKwvSyBHuADF3Dhq9ujqiihE99LLYqyQ6ubCzqkFUfosd7zkRkk63U85YB8oYiLYteVS3wB",
  "key1": "2DGBt5ZU3b4dcnmwnjLV2KVvAy9RtorFNvgPaKwnAbt4YNWjARoxvQmN8Zcoz2aBz4JS1bcNdPmCnwKdi2sYdpbN",
  "key2": "3DbsD1ALE4ijGdvT4U7DrXXUMFgwuVApU9AZpBJf3xbcYgeFaCwqTgSSh6P5fRfneQm6hGwk7Xh3XVS4iBry9xCE",
  "key3": "4W3yDoL1QbBGfWfH8TegdfXEEH9CVwoQQ1BVXtJaBGFPCPgSHRZry42D4jT9Anf6eksyBVfRwBndi9b8jWzKoSWk",
  "key4": "48yoPEjxDxYqYHFmKmeXCLBAQ3MNrHGyuYnXvWE298NxuibFRrMe77gvpzWkG169Q14BpK6gU7cWCvE28rfeH9c1",
  "key5": "4ud6KdJFJi8RazmiY1y95UhwCPmnbsdxqwr2reUrcoTGaGa1UkmEL1iCrvv7qVLtVufEYAk5aMwZbdLetroe5Sks",
  "key6": "3KhBq7x9dJsEiJX86Qx23n6yy4pYyy4EqdX2Bsm9VfBuC5AGM7MXKMgixLFi1DS2Bu3XGkjEYeuGnNiDLh4NGnsP",
  "key7": "5EWirQJ7cdw35bLx5t9wo9K79GwXjtGk7GpTvWv2HUJwJpkZGG6ioi23ng31Y7qjuBby4vJEvewnsVXHnCaH4DCG",
  "key8": "368grPZRo4CyQNJ4yhuuPhqwxakoCAUEFKGNvPJVymRY2EP8mEiHhS2zKreBjD7HPaV9ypichQcYPkNzUpb5Ho7g",
  "key9": "5hENPph672RRujAkM8HekGPviwtyznUTy5sbW4HGm9nKBxsLkcoECGwUNMYeA3QR4cundDXX2ahqANnvQs7GkHw8",
  "key10": "5UJJ31HutUeC5yrAUsomGyxddhVUiCeDuyxq6YLN7TvbUywexoizEgQyQvXPtf6ckz4L1mJSJDJkrw8x75KK6wVN",
  "key11": "4bqovHiE7MmmaeVpRumYC9Y4FAvRMDqrFe7Es7QdiKHLdUmBLm1kzEDNj5tdRbs9TmMGxr7MxGTZdf93wyUiWZEY",
  "key12": "24tyj3n6SsSvavLnzqDHvVf25zdYhdL4XBMWDLfaiGuUBhgv1dLNwGyGXSVAGP7GpVHWVMiGHMhg7bc8bEqs9bsC",
  "key13": "C75b1RW7bpuSyCmwJwYY6DWsorjc97PAp9LGr6xuosPwaJgttfb57ZW9cEwB5sqZ6x3fLEUzVT6pZh3UC6vhfXF",
  "key14": "nxxCHExGHMxf9jfHGooWcKN5kbvCA5ADZ4Si4W4aoPTSScCFvNPY3tNceM1MPKgSQV3cXhM8Y566ADh8sdHHCak",
  "key15": "3efbeyWECaVyeN3vkvE2YxtVzTbzCSUzxJrmYZLn7gfX66YRp6rXuL37EXp8QyN1Y1B54k33BLREeT6eAUmJCGEn",
  "key16": "4WBZu3dNQAJNDpqs8QD7ByG8gwjRH9QKKx9nwbb3myEUJAbdCF5xawBdvFQaBKDwto7xhJCrDyEhZxWqebdNVWxR",
  "key17": "4jTiWq5XijMa59mzt6otrqipCKXZ55eyB1ZPouMnQ3RvW2XMKHS7CeCPZFAY2fqy4oo33JSfduL3po9GLhYRiBa6",
  "key18": "3QNsUcgNF7ahYBWKyZBHZpUPi3j4xtEqqeYQz1AhWFFVAMoLzRFY7rA4hJxDXFiZStj9UTUrFh4E5pUaYsiwCQYU",
  "key19": "5Bj4cnDYkPi9LPiEDZTsMhUqLHayMPvrFXno1MWHct4WrzbGJo6SDtnWp2kJZY1JZs9TVoyg6CQntdANdom8B2ET",
  "key20": "1E3qkZz1UBvuwGViBzkMhz4KqNTMpPSLTLzA9wgBxPAs1QyBA2WxiX4ksbSQE39LrYoLDRQ8UJw2X8NkxpczLqw",
  "key21": "wKkzF1oGotHTVXCYuirMY1kQQKuyPjbYu7Bqd6kCVq9EBd6USCxi9cxKnsBFDxyrqB2PRWCTHHUXHVViK1gvwPR",
  "key22": "46Yw4pRYSueVYrccP61NVP4r5SaGKR7otBoaHpq6kSxGGEGpX2NvzuswovvBixXUjdFpWNggPWpsfPAgMGiyT22Q",
  "key23": "9zU68nAqrTdttywL8NDcDoqrue7a93E1gwJxeFK23kWBMiaBQ1iGoXTy83CFgMA7X5sGUa9TqwEAQKdXQYJrD6v",
  "key24": "bjagHAms9GuAKSF24U529jfKNXKAqjj2P8Y6SHbcWgoBCBiuQEADpbi5PCcGYND6wFaPPKWxicN4rygn4yR3Kjq",
  "key25": "EMVfioRNZKNKFBEB53FSasivhViYAfMCFwWcNFoLL2wokY52PPFRGNdj4RoP2uuzBC1QDWtCw24fm7pT5re3agN",
  "key26": "kaaJxXUWRxTn7hJ4jfYDsbMPDS86AmM7epN8gh6Tnurc5zaZvT5BgmScaQKxULh77tKfHsG6pLoRmBfyKTNwcFe",
  "key27": "5t2yRbQUCum4dEKVHFkMs2iXirLFEhZxfLNdw7ps6XTT1hqnG3LeHozeeQCGsMAEYNpmJZM925trY5sGWtDN2jy2",
  "key28": "43HBUY82naoDXw8dbkXuyryyf4zwaRRfZ2ZkrmzT37eL4gyZcZyYKQXK8LdUsAFAt3EiaKC5exzZeDNxgztigbmp",
  "key29": "54HoMk2vaacEt6vpqtaHbFYyuwxSzhEHVhfE2c7Wa9E2taj5EjKApJ3gWat7QVHCsgkkRzRoh4jGPMYnrUy6LiBU",
  "key30": "3CR6vYMbQH277yV5X8ZPjvJZLhikkpUWu13Ue8qJytDxt7XkHDhvZyWnVq3HLmEZQzyLA8Aug9kKwwuYXxGzK3M5",
  "key31": "4KM7iPRpMxPn92xPPP4GwpK8mbnB7n7SP68WJ4qvstb6pGYq9y46bCFgxwovVwVnZphQsY7TxE4a4LUsTRFz8ihe",
  "key32": "cmK3jKc1Ny8yK7vzjPVnfzVpZWKD67beYGTfwFS7TdxjQ4NU6YiHib75BdZY5svev79srn4RQzJ2HHT643JTArE",
  "key33": "5oagvooniVurRD5TcNGE4bL3VbXFF9TqYZA4mF7EHhnRkoKFciDrCnZz7hRAQPLmyCC9SAfytBs95XbBoZUawmL",
  "key34": "3MCKSWbdFgJfXrnCXZzCe9WzdANTsxmFezqCiLgb7KpziN4siiiJ9319h9vtvXLar6Yz5s2oRP3nKBmtpVYFzoo4",
  "key35": "31dJbzKU38eMmHvNS5iKAp3pnHQX6CbxX5PvT47eDW1ARkPoAZWJ4FZrT1RN55Z4YCL3S52oMaL5B3P1B7quQc4t"
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
