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
    "4kLt5iwSjCLmCkgwsG8itjUWxby1CjvV7ZQeozS6YtdrXpwonN888zwryuEn82aV5VXw7ow7EKbZ9mTses4BMf1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KEDFsvKRF15uwx2WzbqWLaK9n8xjQyP19h8xQr9u1wyN9kdQGEyoNAHUKSwmj7GLcy4yb1kw65XghSduoarskXX",
  "key1": "3LUNPqLdAcDVpCaVH3KQ2iJ7xpQSyS71B4eWjZS7jLKxesh3N9on4PDNnXTA5uTNGJvf6FNbduNHhCYMPYQKU6e9",
  "key2": "nFyiwFK37yLq1Uhc7JqN3jxa5MxWm5St1sCDwUqjREDC8Udg1nvEqanWkLXaynZJQ6uXNC8zSSSijHh8bjUX2pE",
  "key3": "5pHVeTCUmWsaJgjczGzDedgtA8a2N1WiFgqsNXZ59Usei3PE2a6CNV4QkYZEi5DgrNWHmR16zRq2958d8E6ZswbT",
  "key4": "4VQe6QwExp4haQGivDDSxchYqpwRKjnDjzHw2nCsJKYWnKKhmGLn2unmTn3c6VEU1CppSLMRT9c7Zy9kGfZcgf8D",
  "key5": "KxkEDf3U3JUqHGrFvtERgmiHfvrUeSSpX3tDukmD7pKA9XkXrhj7h39V6BN99KqqUVooCNJPC1jRwcziQBKmQEE",
  "key6": "3cJSdfcVDHtNQtPR4rRuShovgDedhedVExYGfLSbJm2dRpErcNjgvZqDQMzHA7oi3oh5dzVT1zz3zyBVkwNsuTRV",
  "key7": "2BjGdfncDufJdMuqKCKJxtvvTvGYqv2KN9MH1peLT42jf8JPBrjbU3q5KVNpNETrwg8WkmJ8h6sTqmSL3it5fHi2",
  "key8": "38K9EZVTZjZMt9yYymTvHhZy9ZobQEQ3vev26ghuTAKELcJmDkiQ8KuuidHhEXZCSkMxLTNXoguLFKNCGp62zcQz",
  "key9": "55xCKoMThEHHMXivGmn2reEhfDkee9UtqBrkPbppLH8THpGEC1d9HArRbN82iPTMHSXUCb5tQmKh1nESLxsnz72J",
  "key10": "5SbxUNu4oPWkgXYgizobWkYsM56XLbj8fZVwmWcHjsdz7gDG5eh9Q5PapkVnSSHYMcb7uK4S2Vr6oDKFhnb5bdDm",
  "key11": "5Q5n8smxXdRh27vwHCev25eyHHrEay6jFFzKJFfiCdH16BV23Cxq1yuTi5nTiZEbUaa1S8Xpsu2Wdw8iRhieTPkz",
  "key12": "5nhULDZZNVr3rq6a24fb2FkDuBjNx8JXLYB4bWUQQ8w3JR2VcQKp3MmRqXuhHnpR9aWvECR2onFnz8m61xmbjBcw",
  "key13": "NcHC9g5BUvQGkiGLr43BKSeBjMZ6AVkUBQzsqr27oLc5rBFzaZ9118FtkBmhBvU7r9rQvv7UsHrMezLhkTTJ7DF",
  "key14": "3KMG8EFDTN9Vs5JEYzEZowMYnLE2phZ2x9v9uX85KZp4RgxDyHZzxmrqD1NtTUBx9EE1TVR5QArwzERGRTFop5Lc",
  "key15": "magWyYd3YXJ6XMN3K4vn9ot3RX1CSS6RfUUYQcjcXxUoB1hJ4zYiTR3eJY6j4mJcsH1VB2tHKRG9vS3esQLXAvM",
  "key16": "63RUdmKutQkepLWWLR7vT24EP3Ti2BmgXJub18V9JKCPCZzDe6na3tQ8xvnF2fjrqjZhYTSXfaeqzhwA18LNMH9U",
  "key17": "2sumbkxYDBx2m5r23AgVKfSyodXbPAaf4doo1AxsCpiJpP3Y97oZ1nuvqJxQv42tiryL5bJKiJWHrGKbUuwbEE4q",
  "key18": "43n2ThXea1AXozh3M2eTngwqhCjEJwrVLRJVhkuututu9x8R6NCvPo2htybS8az1jxABWCBmAAXgBVa87mMhkDQE",
  "key19": "2GXiMqEf3Sx4k3tSohNZPjDy9EjipAWR43kGoyVDBsibyXEEXk1jxwtHChGLivnL1fqUbwMiQ79AKi6RhbMbSFU2",
  "key20": "26X2jshoV7hVCzmisidT4purVB7vCLnG3neaYY7mGkaAXUL58sGNftDe1uDKRFxU2ijWrXVJL3mXdkHqTeQLEezv",
  "key21": "3rhqyvFnwa7T4CeNbGgGWuJJE3aiLuWfywVyUSQi9VHSoqQKcGvJcFSHFLThZktY7iimG8ha2kE1wLyBcgsrh7jN",
  "key22": "2i5n9v84vU58FR6jNx9ciDQZSZTJW5A3cbisdWca5rSbu9Tgpxo2C7dGC1veMjPq9cp3m87yFHkeuyEHCZ9KtCgW",
  "key23": "52BzQYdchcoJfGwUJEsScrGGcuUiUq4Kw8ZNTuWfeNfrsf7VbaWK5EVzCAsa4XPHKRa9z1B4ocEBFTEP6zzw9g2U",
  "key24": "2yP39xm5feVtVTfMhW2VXhpFKCRNw4VqnVsnuMvRxbnbwXEwEgf61KRkf918TNqWxqUatvMvnMJzM2EWM7Bj1ATa",
  "key25": "2ubRHTPuvH31MgHBFtUUApxQfNiZRbxtKCRE3b44753eV4B1auoMHVtBaCPW9ck24DQ9RZYKG8kYaE1gdyavcFTs",
  "key26": "4dDdko3gfK71dGVnxgRcU6rBWBvCVQ4wHawRWpJwYvtAwGtLw6NT7QK9Fje1QkcHHGRVq9oxSoEU1WNZyF3ynzRM",
  "key27": "4TtaeJMMVz4kG71mccEUKB6gEAt3fjK8NcXSsmgLwALMF3A4LUtPuwhD5un1t3BaTKnH5sBRtFNpL1kjJMDLzTEb",
  "key28": "3uwNzrVtT7ZQhRQG4dhcb9VQ37Z3QfiM6A1pbg8T78NUArzPKmtEiQn5vNnx6EGSRFZsbEpzq1KpxUgEdYmtT5ZS",
  "key29": "53Xu4F1HMWyPmXNXUUE6EzrKEPEoKpd5zJ9x9cKZ1t1C8FPcg7kLZL26jZAoUvUKVr391joQnVVHNwB54pdaRUGg",
  "key30": "3JAzD2KwX8Sj2YawpUJ9LKhE3JtRTckqyrKens995drzDe9XusitW5q2QLnFQyDoijweE9UDbCmxEpaa8mUFXPqe",
  "key31": "64jXbhYwW6oDLzhbiDk6hBdtD5kXrZ6LLPt9G6qD3QZokX1ZWiHNppNdooD9YHLeZiE7fhYTPam4xDWdESvaYe16",
  "key32": "4epzVzif7dUMssEtvHG7G4yjVKyf3phhc8PhxZjF9jkwv185itrbMdUb6RRvMNJdRdbFYxYtQ1UpybLcn2EMJms5",
  "key33": "3XaJBqnttsAmkWDysug325e5y2Q3hHETDoeW8mkZerzyLznpS8JAXyuM6JfHsBFkxy2VAfp8s4sW6n35odjMDe24",
  "key34": "1AzCG5D2ySJDur2dHSfpLd5JyQPUAJRMVY31jLejxMadTCFtoposkAzLncqieSkbMfjwhxRjtvwjEcgzi7oM9Sz",
  "key35": "2jJ8ZV4SUgA48QfhD4H9QByhP4bS9UKBxmT6B3kZMm5jem2Er8Kn6qpEQqLmSQ7wSMK17NGswRoX3jykKnPe89a7",
  "key36": "3QrPy8YaS5fKAbSR78WpyKiteNjJVzN1cAZRK5m9fDyZJ1q7yvg7m1r14UgBhVkh2WPBBw3431UnNKbRV86v7E5v"
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
