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
    "22WDt9Jr27GzdjVg3bMZ2LFQcnVrm85fi93geCvMjDwiQWUcrzfPFN6rMiszdkbsSvENRpy75hc1u2Zy7sf4jKyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JszQzauaATvMMWBKjjtW6D9N9EZDF3NzyuTQvNEzhQCVA7sv5bAYDcuuGHBY8uyoGXVFGnGJ98tEbRBwFeuiDZM",
  "key1": "3Z6N3wcYwBrPod4qobneZU66gmoenwCYjo1WiUrEs9wfrmk4zFJdFn3NeULybmsGMrg32DipCo9HFrrLxbFbkEiE",
  "key2": "3AjF7jdiRETiqZmkTDNS7WCZTw7Ua3ZyBmTHTSQDbrqfhLMb9F25XfUjiF2oisxnGx63N5FubQPdkZnPpFmTnwzm",
  "key3": "2V76Kca9cjaVhqAEjgtDAq8YuQLseuDmMwM7BUfUB2kksMkiDdZEVD1RZYEQDQynMwZzPA2N7DJ3K5H1iwJ7nm2c",
  "key4": "4SoUW3fwTNA2ypk21zX5qi4DcnEcXHjNWgZMztw11kuCSWATXcNvAK6SEvvdSSY8QDeznZ8AVVyQ1BKMq7VUygGo",
  "key5": "5YLEG9qKhBLWDvmoBaYP9iLTxGte7CtVnyxtdi4uivNqzoSUjTqPYJFDkJAcQwDMSHXNJmqpJkG6QtCD6pgbJa2V",
  "key6": "4xzbGH7bAEdwAqqrGcZxqwQKWS2hqDtE1RpWDjKJxFpZH6WTuBcTsD6v32Ls2Mz9zwecZrxSagQ6Duw8JVAowRtv",
  "key7": "4JVdgDBKsXVDAX33UoCeFrg4CyKanV4HamwpPqZh5tUA4omLg2uGbR1Mbh8EdKrJdq68ja3fwXGS7FM4P6QStUG8",
  "key8": "5kuTkvpamLJaAjjoD6rpKL7NsHb2gmqLpVFft3uTt65ktndbx8E18ji4rmgfWtUnoEBRx8W4jnRK4FqerrrqZ7NT",
  "key9": "Xwe2wEDJh52QyCLGwhJJPopbaYQjT89rUVct12iFfG7DRjXf7ofsDhB1hu5i6vGdtaDXy2eYbDXo7o2nubzxviH",
  "key10": "AZHvc68cH2CmGVWBKxQX7xDthxFr2cgnXxUycf2KV6Ckb86ZBN9cse4fNxo4dQ4ykENBQ1S2WAHFLp5cPU4bLyA",
  "key11": "uc1RXitd8DQ8V3io2Sw54viAbdeKAPHunqZ4q5aoxBXxW2pVjPZo9ZSMoWfAkwU36xuYKNzSgSP74AtNS4A2jcr",
  "key12": "2R4k8Z3BP1GY2P33rvi4PG6XVnviA46Yg3Tovu2tDux17peZunaBUo3cRJHdDx1hnmWoa2EZjRQ5iBBUBVCxwEbT",
  "key13": "PVUk38oaCitms8HWcs6UZdkYCaebi1U5R8Z6HsupGnymhpQ3RuvNPdA4vaKEEGu1Z8zZUpBGPNDEJiKg6PzXCJ2",
  "key14": "HjFvaY2ioYE8vYCBHHWMMtqtgvJwwrcDqtg4wVcEHYU5TCPrygA2sdfovDTBHTbrPx8voTnVRqiyWCVTFfWbxRU",
  "key15": "6LLHprxxvohEzE5w7NmufBDoccpS3Eq3esqtFSgEfxVpD8DymSCLfkGMDYwT1xxMz8b6nAu9Pj1NkN49q1cQM8g",
  "key16": "UhUBjmrAFjkDkK9bU1qAYrmbsinaHMQiTAChWKgJE7K1xuur1xdXodPsqTbMRgrdsHxGdk9YS8FiemWh5NHn34G",
  "key17": "3sPf8CTEXXT6SQKD9Nc85D7vB21NRPFB4446QchgVdP4viXxz652NHczpjShPD8mDjXHKaU9aeUEimq3pRXE1Kw9",
  "key18": "2NSGPNg9XaBc6Xr5uQceadjPgf4YpyFWqEsikg4nhZqTd5CbvsvRxC9a3qaDQiQK9JLH8EA94ZyaKcBuvEv9EXDG",
  "key19": "VkjVMpvadBPnxNmDBAQL7C96is2bJSH3r5dWZTRNFf5jyfda4T71yVMHnXGajncDn6LpjvuMWyYFHetWYiC9SPC",
  "key20": "2odRcipgNq357za8JTUxnpJ1k9Jx8vnhVZ1BeWYe7iD2yr8u2AnDMxyisGSn6H2dQSXGy25eib7EeF5e7riXUE4Y",
  "key21": "r5VymAtudcWxPxK2o5vRWWU8qxr25CiH4YuyiNybP9b73TAhoYg6zL5g3gihEzTNRF4RApwHYmbAZd6gGxCYfd2",
  "key22": "3aF6LSDehWrJ1SFKAcBhvAaHCqh5xGiQQvoWWiPz1WXdqFippLExRa9M7cKBahBf6Ju3jUY4iqX1fnXGcxvFNwWM",
  "key23": "3EhSxzyxMBxPDVtYZvbMWJno8GY7BuWH23QsJrFMWrxAt1YjGnGeY5TG3vuhfeasoB5RbPKL5dv8Rv3d3aqio987",
  "key24": "34UYzzcgrnuY5zbHDWXQ2ZDyTauUiKqdUXBwdDkMaYhz1cbghCjT2jFdEsXKUFo46uVxWRPYKeF4BFz5wiKhuhpH",
  "key25": "PZqghb8h9w6bgdKXUUr367dn2q3LqZb8FUDg4abAGh1eYwdkc2sSaQ7igHJ2YZiPsxzViuyDfgoZnQFGrgdjYGX",
  "key26": "q67YK2skgyEAhrqYvJZ9J88bKUxYoDnKRxqRkpLy8PnmbttnJaWEJNdVuyudqS43jkByDCiiVt3sUq3tJSSbAhF",
  "key27": "5HxjXzAPtpf3zPJ9gKZBb8cvWV7dWoWnjzWVVTkcn7oyascCMGWm9WVs1cDzBXDaWhMRLUSQTrVEWJ63c15m4RvZ",
  "key28": "3ik2KZiXieDGFpby9jfGurhbWpS1FrAz6sqxsVNA6h48VF5wcSQAubTHA5KUrDJmbJfhftkNq8dPf8NzyHUzfTeQ",
  "key29": "5uCjTCDesz52nzQwcX4WXWKJXRHpw7xsbe3c9QrgCPSgErtJn9uHBusZbdnA1kxd1Jgqx8n6XCqbECjox51Zf3wC",
  "key30": "2y6AgGyDo68iaR5s3ikPRg6hphWp1LmaZNnuowy45H3oyLRc6hAcumMhK89sYYyS9SarGqDXoug94aVVTTg9VF5F",
  "key31": "23JXrXiiRwXqEDSKEbf3kyzXmygAZ48gyaNp7rhffsxS9dvSz4knhBvAEBbwSGZWmNrec1AJVzRQC6tKVoaVdFpz",
  "key32": "E3SF1mLANKWPiTPezykM7ke9Es8zH4Qm9DRd5cU2Hz2exSJe3w5RW4Afb8TN8FtbKhpoqtoxNvT4tjzwBGuQ8Ct",
  "key33": "2VYDuPDC8i1ZYkEFMxCjnh548ZBpXSj8deKvQtikXyZsMeMxTjqBvpAGFNRRtp2h5hghR4fR4VGpAs6eGmcoMXy8",
  "key34": "4HQa1VFo1JfvRVGWmHZ1tN79hRq4oERmSzWq5QJgsiS9Q2ehDQ9EjxY7CaogAjHJirbtgfYhTSbHgCF35WEzwkvW",
  "key35": "64rp96cBzksPjNs73fJHVRQZUgyxJRr5uXo3AVL6di325R1X7HsWdDppbcyFA73S5teYZ22feoyEZbWKu3oMrPBL",
  "key36": "4NtybDs1D8WjjuGUiKwowSHMbb8kALBfUKE4hC1YCke2vMSAfmsrzL2FiVxtVTRqEPv49xbQrC7PHf57G5ar7yW6",
  "key37": "49CWox6UHwCSYxWzZFRHcSE4DC3W24LQcamz1h7nVyqx9sQW6oToKhZKwFUz5SmSr4bqGzzTmWRcrALuFV2XB7ic"
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
