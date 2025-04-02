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
    "3GU7jJ4zPi8FzS5ZY9zocHv8BLYFF8FESzrFnMDoP9hww6cqzWNB6DqdU2n7xFuynTWFTMpx78iwy7aNLhgDFi4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFMR31MzVXPfYvTiuXaFJ7swuedJZh8LsHS91ZfpJpP749FCCvh4Biz3Wbz1iZ3dxwDik66PjUZNaEuUTVaueGH",
  "key1": "3BzdEYr3evkbxwtDcD2qKtLffYp7Ei9cXtLwhnUgcuLjxSgwDa9NeRFFC2bdc7XoEZxTH3nLe68oRy6KN3CBP387",
  "key2": "67DHdBDb9zdpnLWV2MTzbKYP7qVjoNUFvXnGfsafdwMZzQbvjP9qAGkrqxorZjK7JtM7KqHNEi1WdTNkQNDEsS3a",
  "key3": "3fnvim6JAwNNs1nMXEuoGnRDRe7VAmCJXvhgsxgh3HKLrpgEYS7CmbvCpm3DnA66KZLPjjnW1TwWTsUfwYSeQ3vZ",
  "key4": "nPcFQJLBNuHbep6hKk6yBFxLZRUp1DgBzjaeht8N2Deg3p9jfgTBCo5K6rBp9c6pXzWfcDb8M3TDiguLYgka5Dp",
  "key5": "3owuhwsYFydRib46foSNW4mqbGArGi1A5kBotoe3NKxCNAM9iW7vizeNXQQS5RUojRJhqX2Zk16dwPFydNYeEMmv",
  "key6": "2htbeK331ioDzPphW3vu3f5xyKjTLsgoaFZxgD4NkrCFkuLSjVcJahBuc3TcdKXa5kWhy6fALECaBhz1k31khBj4",
  "key7": "3QWybSPSRjke5FhrSpFgNZCoNYofAtTxP3hmEqJVHjYFA83SAQLFEbYy5Dn9xmNg4ZvqmixVNAjxRGPtX2cYfmZw",
  "key8": "5T6z9vSqYL5Jt2XBqy8WeHrhK6M4cqKo1QoJsmDw4jGn3LEyR64iLMPa6uWDaotFCvki3ws6ZXSXjSqhBFe1ssTz",
  "key9": "2LmCKimUgnd6Mw249igEdaNpPcjWjruMcL8HmXiGYDELXV5qQ3TiPEnF33iBhD3DmjE1L61Bdvj6rEZhQxkbWr3v",
  "key10": "2nPyC9ydV4kJcxn45tmcWhqXAcdKk66iJT2eSrMEQ2YLMYuBFvsAZ38DPPXxLLDHp3uTzyBjcdJWgAKNUNkjRgCz",
  "key11": "3rMtufSgncNawV4ZfdwpW8DQgMufMR4TUdq22rWqHR8Kg1nuK3zsYod2gafiJEyg76JNxDh2ynf7dGE8uKjf72yj",
  "key12": "3KdvaDgeZLLStT82qE2JEHBqLxtZK4RVpkTxFP1XjqBK1cTkCz4pUpiCNPQ3ttAVV4Z3u3njXsSc97DCt2DMzf2t",
  "key13": "oVW5yXwjqZBnA1PcLcnsnir2Bwrg7KBmggkmGsmF2tf6u8NLwPzHFyUmZGNMfrMh7y8SZxU5snKxVnDc2DVCdTZ",
  "key14": "4vjQpZLKvBkkNgJiPEGZmnUrBjAAvhKKwxjgoDuRwGjXn8jUcVUvUJKqP9Zpp7iLhsAgyWt8d5MfUhMstKg7yVjy",
  "key15": "5dUvUjEWz7EnPjKQAnxhPFcApD1mUQ64Fxms7ESasxXfw44TkMJJ4WVq6wW5iz6kyiK2EHZrqi2gqkPBh3jq8gx4",
  "key16": "4PuvZED69EJzFXV1kgdwBF3HCi9EoYWhMkYsTQwem3a9W7yM6w88mtne5tLBd6mKsUgPWpyUzBXShCLbeCH4crnp",
  "key17": "61LC6Tu5c4bdAQifovU15DJifm38m1i4bm9cKnafG5DGwb2NRwhjE8SapjD2irJ4yZvq61PUERTqzBg2SHunBGzz",
  "key18": "4zs1E7jMM4cYb1k4DtU6D5jBfn8KjPqMo979aDC7UFfjrfrfqDdc5nvLGtXybzn5RrKWFoTCJQyeDYkvLEo5kJhG",
  "key19": "h65DcCmpCG981esU8xzkVvBv1WHwVBKRGg6gg7HCTbxwooYWWL1vRbXbh4mGxAj6qhM67St94KB4G9gLpoAfErx",
  "key20": "3or5NF3A5SusaD5PivmbdyWecYRKNW1gcWT1XsJBGoMBA7CXw5dhmMZ88Gm2UNMXquCJ4WDaxPRQDe1Yp6nRVnUB",
  "key21": "3ML5mz2YwEg2Wghx1ZQo8nwTxpfqCMzY5Nw2gFQVnc6uD7NBw6ShoT9qQm6immXiYjV569z5DeMscPwPaCkY5Wg8",
  "key22": "4Th6WSbskhai5B37R2C34J3WbXZxJoY9V9TS3taPi27RfKmg1oVSf91sVdAwvrT8JStMrrK7Y88ndDyZDzoVpCkS",
  "key23": "4PJVmpdhuZxhdz7Hv5U9Dwr1ERzoopQbSC632JUkn2ha3qpM3Jj1h53ikNATHWgbQnSZDDCQQ77NoMhKZ5syKtZy",
  "key24": "3jRsKk8jDjfYMVRxftV9ft7YsHduEjW7CK4iSh7oxaiYhgMyPMtU6i8st1dweQsQiENq3g2y6v7Ar3jYRgKgnxAL",
  "key25": "5HYfKjLF9yiAMqEQk4wc2tyUihzE5mzaDGwfNoEwdfvJWpPARgniu7VzpQbmzkvGMuhXnppaLvbVWLQ118NE5i8i",
  "key26": "2aAgbAHmbzprSKLWR1ARtpXoXbKL7nqMPpahqx4xGtbzHu9AzdMfQAB4FvCx94aKusG4rkiMr339sL2SeTtNyqxP",
  "key27": "VfyrTPE6WxLZTboUX4nDE51PmiSaQfRhJX6EEhRQ7gdhmMq1mLF7gZ6XKFnpZR7kejRuwjED4Ct43HrRsmxo4GQ",
  "key28": "3WPyjX4fKtKnE3VRpR3rTGCMEq7LwM9KpHddu9GEhP1BuPRFLh7DeEB4Vui9Rx6Ddvd4ysVAGDqCJcLDGcgFxVZm",
  "key29": "5ESamYsALdY8SBwkeEwu8MmNHk38TnRUgvpgvWLHAkeJbDV32YNT3LuzQo6xfjAoVseUFZeByZyo3aLDdmSPCLmQ",
  "key30": "4iBKSX9zJSswUPu5wu4y5T8hHk5ACXUYdrAy8RVQmvWCnnV4mywcqFaJkZFtZ3Fp6JDydJi9hNJMj9R7eNPz1eTY",
  "key31": "z2u4ytKApJTfUBsxgv5YozCqb5sS4Tc8USxfoQ2M9jDiDsrbU3cM3URZEnj6Uk2cNK8jfphwGTrcAfpo68SCCbU",
  "key32": "4p16RER2Lcqwrf8aW4r3A4fjqFH6iB8Evkw7t3Dbi96C19GiqUQDHJoYTRxCkeggrQ4cmELFSdKLSaQr5BJ5oncV",
  "key33": "4fW2LqwC7xN3utkiBKJfomK5p1YLAAunzkc2Uwt2dvTcqgEWutjK4wrimCNrbyU9t2JGeufNF9ShHZ7cHJfS7Urc",
  "key34": "3Nk8LLxjG6rdZEXPPdC2yBmmT86v2GVMG7F2ia4Vf5QGXWmtS43p1iPKHyPDaHgSugehXWWJHcnSmizC6KumpxKz",
  "key35": "3aC4JbPKVLmEuLjSEgytkY4DQrWQy8a1avbUXddr4W23BAjSRMy3qXQrtuqieF1rBDaCgy2zgbEmmK4sv2gGhQ4V",
  "key36": "2BwrxEZyCJUjSyeoKmKnMqu6ZUWM4DKmbUEWMh8A3WS334qdwL9uyAbfYSaBoKt8QmLhfYk5bi3LVikM6s14p7zm",
  "key37": "2zyQb6bnJjwFRu2Su6Pu5R7ADXrjbBkLHaK1csSvhWh3NTRvXFHJFLXGSozDGzj7HUqGznYCB7KZwNMr8QfM45Wg",
  "key38": "4jYqEccVrKCHW91atRgrzUMxwdjpE9V53ZeefFd96bwSBg6mhBUzX9SVUFNqezCaLBwNZxF3pCHfLDmff9oSF2pu",
  "key39": "qcBDy7ocN9cA4eJPzijtSCLzW7YqRSRYD1mdMNswvELVmCu1EHc7NeKGnnsiST8PHA82QRDru9eWPTaJjuDA77M"
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
