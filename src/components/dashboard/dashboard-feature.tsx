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
    "4SU6SmKkbDnFsruiGpQjDyi97Wsdn4setZEXoQNEYZLbiVuwB7HeR4BC6GLRs4k4uz6NQStBAGL1oR9VYAxZfPvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jX3XHzcrAbZMikofJ8dTM5xNxq6E7Dyc5aKepE5s1hXpAZZGrQiu8YP5kJT5h7iqXWWzp9ppxsBj1T2hKx3JZY7",
  "key1": "5swTZZCLh2eAL2EHeGuRVRZruXc6H4ex9nWvuCStG3Ty7KC1iBaCQxSnM6325RSKpmZn6RfYLUpWsF6bnXZr8K5D",
  "key2": "4Rra5XinKtzAp7h4u5tJ8AdpFB9onjYUvMxyh87kisbzTSA78vmrgZ3DRf1hR6CTAtcssoufvSdiXBCBUZvXnq5T",
  "key3": "3aQisKL8eouAKEvyDXiG6bV9n9igrfssZs6bn8pLQ9T7ABMzXtketQc9Tpm1gtZLKa9jeLhHy4twk5hzZM1usg7H",
  "key4": "3iqxcUNniJizFTZnQxuWCwDmayrX9jQh7zm3rtyosGKnBnhnd84wrhgGRftZfKkoDxrUZXFLhbUFJqA17SrRPY3t",
  "key5": "45HsBscSyzhh1YixMhfhjGALcEaY62iHPQ6NqLHQAsSZQC5hwD3PkqrKXYCv4LwdTHQgfbBhHA12ZHKun9KdWsk4",
  "key6": "41U2Tgsu239jwNUha3FBAdu1uknHMFNHhiwxPhbA6RZJkH7GdZGb4bTVsGX8HzjD4wDF8C2h4Le9KfPGk72RDFhj",
  "key7": "3jhPgPeHqBjAbArN7uJYhBuiJScTEva3euobSn5jkgoLNcJ1ynpD3kS5T25ALCXugepidGmLBBzQ5w6rSr3GFnFx",
  "key8": "4hxiiLbS46bRmBq16efdbwuieAhwfiEAqVhq44SH2WTkYaF4q9a92AUte1yLZERxkDjHZVCTK6KZdE5YKewEU1VN",
  "key9": "2xrt92ZMvXPxKpvLHVwfUJkEmQdpWVWj81dPSF69h5gFjWL5wx8ZsMpVzptMWdaEsxh2GPwf4Y5V1zPj6sBRnxEY",
  "key10": "BWcEPEt8fk6Pt4tRUCaAbtWzThGEQ4sA9y1JBrwaMjHZmmeEfNw7DjesJL2Mkkdh2NwjoCjd9nDakfWhopvX1GQ",
  "key11": "3wWFuwfM1rDXXjUoFrg1A1ziz5C6aRDCZYx5aXcn4dufegVNy85uXpdibAT6L7ximUqjdnu2WVatTbHMXoZ3Dzzj",
  "key12": "bJJnyJhZh3yQwitoVXA4XyvNksSWWbR1fiMu9WVyMQZvA8q4ndGDCyyzQq7DCuByZ9w7bHRuyUoh9BwKj52B9sL",
  "key13": "4DXgFjWr1jFUo3EQrjkU471C8wBi1TFwRKg6f9dVrXMjd5vBgyi7SCNR743zaik1KDJxrLssxQBgk4mMeudeK2jY",
  "key14": "5g544LF4hWysJjukkDmx9QMhe3iPkwd43tYpDPH78eqfBs7Y9xUuxKcrvrABKYbktUv1vNN8hdAYY2LqMB83c7Ay",
  "key15": "2MKLm4uLS5o3hxYxKN7Lcx48h2Vy7EWVhTSs9rzjf9uDgbDhDWQbzvu3MBLHmDcnPR4zedLDWa33mUimbSf5hXzT",
  "key16": "2efww6KeCgJwKvbSCo8CNuc98zVMhm9egZp34FtyoA7wTPGGHWXAxJyC8yGVFojgzUHiaSfngQ5s6dgjwSQ67WQv",
  "key17": "j9whVKbXqD3MXRdDjgzw1Q82ojPdu9mbV5633UUjATqb5rWiFemPbP7jCEYLbw4WLXCUoEhyt22sHGcNMhJV4Ax",
  "key18": "2VnDDB2pHZ7VKJJcDu4ZhVZGVdN6hWLgJoEjV2c5n94AF5modZiFiU72RJtb96bN5BXtBKERA9y6UoQ1nZpTLeq",
  "key19": "4Rq7F4a1swVE3a9x4MZt6BrUnJkgbHr2ovKn11eG1CHffE7TxTgku4MzVn97XRXPjcgA5NXsh7jsER5shaLTDdAi",
  "key20": "5Lb3WkPmh8GweNZnGq3H1ErqCVvdnaCtLMgtAiKkX66SKhrNxLxWvxUDke6sSUm3n5UxREoMTQTAq1YrsvHHndXE",
  "key21": "3sPdrp1CJi2qsEpBPoe3cHKCMDRJJk895So7Yso4UzqFU71q8fiDP7CwUNpRa9oC5gM4VhawmdtS1Sn3nbnPHffF",
  "key22": "4Q4duYRc1oN34i9G5FZQqg9F3LsuHyfhTneAKStT9qtoUVeCsEBLRLgfmH7Rp1bA5QbHoK3ibBPvbHP3mXMrMpDs",
  "key23": "58cPTqRzXg7LcphS8xCnADrZJCRMKqQvQXZYLfGymDjCK7Wt1rMe6wb1sQZhPZLjYX7rgcjbvLjk9UZpdCUaE8xW",
  "key24": "5zYsfN4NWfbRqUrE8AQLsynow3RCwUg1rDi3727dWfBAGtgMLr88hu1e3WR6SHFs3NtS2xX9AWSm3LCTowbxoUCn",
  "key25": "54oB1o2tGdy8N3WWzb91pukAWTm6jrst3gnnzTTehJcDaiuxm4y1kWLSoiD3jv4HJnJCaPPNU8RxHVm2mw97tGtW",
  "key26": "pDuaco5Kn1MY2vB5KpmxoFZooPfTRuHRDuEFZiSoechgdtYzyuqRTHudJvys66bz27awX36Mvya5b6YigAwm4Vb",
  "key27": "3QoRnFNfrSWCVaDpsqyYouGm4tam5jtNGMdLYgTNvYpHkngJUBssVAzG4d8biQzAie6gQ86sL3Vhb3LVpRJCnm6D",
  "key28": "5X2tkem9T13mnEQsHAFiygByHn8EACx4YBb2xWnPubs8F3C2ruhKb6VZgBp4eQdgUvgMVzyt2F3Gr7wQeJCLdM8V",
  "key29": "4BJn59Y4Vkh1N9jqaKVrBfnLkcK1uZUV8SBoymZ5Y7uSJJKRHtkwru8zxgYvRskMipD3BaupzXR1eLKLvgnSBYJx",
  "key30": "3NtmnYNhuKeGT92hfp2XnAi5G52bE53TWvK8T8A2pJucgSMpLprpXrmyZapUGcyZWYyjjEVxQyhwMkkstvMVcvBR",
  "key31": "5NR2dXmqQZWzt4kNxPLggEDSadJ69d2GgAdoGKk8TzxoRAwMUKakaaigouj9GwXgSSKUziYPz51jPP5RjSP1uFyF",
  "key32": "4ryj4RVsFq2f2vFvjwwzFwR4HDew8j4CF1hYCURCQr9Dnh5JJrRC9M6hz2xEKetxZ1m5E314GbWx3XP9GaEnz79G",
  "key33": "3z6NJiSMTHDEcErVWNq4ywvVM7Ee4AUnqp5oZ4eHeGkFabRYo7RPk46mmUNi49bDZ7WxDP8cdpRE7xWPd7xpZKDv"
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
