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
    "3DmHYzKRJgY6PyY5StfVTh6kYdWceXBXwi2wdrwkasQDh9oG9rgJS7QYyU8MVFzzg8o8tjbHjMc63V2Z24M4zS2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPtK5U1WoukW43FhVkBeJGJHobDe6NpK16exDwdXJZAn8nCtYCCh9JeKLGk4fpapytroeG9aCeY895aMk3t9Bzq",
  "key1": "e3UHNGt77APNG6brUtpwQCvZ1cruwHVHyoupb9Crd8XbtjKy9ArdPEqoFP5MVLhfgLUzJrs4qYV1sVgruYCL9J6",
  "key2": "2LubVSzW9oFwjAmGe99hyYQpoZTGKKoZB3jupWKbUep3aHUqRwyv2d73sP56uNh61uT8AHVJFteZsAYULQwPQGo4",
  "key3": "4hB9yJNRu2j1hyFy8kHvPDChdq7DLKgTSbGawdfVHjaj2kKCHrh7o7pkMiHwviZ3UDVRMkChbYVjjwEx9ccriGSM",
  "key4": "DvjasML8VmDqX5oiVX2DuyyUKVJsx7uN89ZAZ1s9NdfCxJwBo5GbZRgBaKStyWhQQoScYSf8cZTuJVZFUDxfsYK",
  "key5": "APxpPM55n9zR3jhRHsNmCq2rpzkPLTdTwXeFyrFkDawVxBkDpBAaqYA2Mi14a4fattJDRZ7x3AHS96RUXnzeMwN",
  "key6": "3fCF1MnFch7t4BuSmg4Sxdoj8i7zGVxX9YWsMmXAk7TZC1EdM1fBUWzwBgwc9ibn4J9UNA1SeAZge8rfY2hhaMW1",
  "key7": "5J9f2fyupR5kCUQKAvv2LhygEMxTambBUEFTw2HGQbvpdMHCngBY7ASk78EZWGqwfn1Q4K3ZQQdPb9VpNUbga95c",
  "key8": "K8TTUvm57sNmpLZNDLbJr9Ag3DtCGNkdHYwfqR9gczfVsjWFezXm4AxD3yxFRNtbNNdP5QTp4yvkagPNqsdRoti",
  "key9": "2s3sctu8GcvHxDiqgmgdpBkVYMv4FdxhyU5EmxgAQ9GKLwnzkZ6enRs82nzjE4L6sapxwD8zmLMCrDrTqj4ngqnQ",
  "key10": "TP2QgFUtqnrAy32nZFQjwbdVc5Mmjw9SGyE63m42KREhoRwKfAsVtRYv324wcw3ht3X1DdKjWXwbh3P5CCMJMWR",
  "key11": "6777hx5diCV3p24Bp3CWtLLrSPwrkm6fH4x2PDXoeToDLVh4a6hJ26ZJQcY6U56vLVtSJWnB85RZ9AssCTUHMNtR",
  "key12": "2BDEKUYsbRFiq87vdVs6TuZEm2SeAkKmUNP7cdP2kKQeS1P83BMWk19WsDoUe67XMBJU8HmCprsakj9fhdjC4h81",
  "key13": "2vj6m1JpjHjoMJkReLtXP7TSmviMJNWuKKT6mCxwEacaEPYVbuKxofcsARPuAf7TzpiWe77dTkR8HGW2iQvctY9e",
  "key14": "n9QYYkBHRCk5qHo3FKjrVo6D3MrDmpfBHec46XFEe7rQvDC65FxHggaeJewzqYiFWotJNiKoUjvjuc4yTVeHmQ9",
  "key15": "4jt7XxW8WRYupcT7c4oVuWubWE4oyGj4cLZJ9WkXHCxv7xxd3XZ2rGPrT42YJRYdQaCXtL3u5c7sLf8xT3k2178J",
  "key16": "22tk7EwZfLDwnzkNTFvP7FMgEbDbsD6E12HVDMHEaqFGRgYMbxWEuyajsHHRZPUbMbDSxALi82HUQNCsK9V9Knwu",
  "key17": "5SMBEXXRPuRedPqEM9xyJG9DGKdVSWSFd4Jw9trYi7KTVw69wCzZv8Z6GtV64KyVQJBFtqujfmLhxRtQHc6vJFNv",
  "key18": "5hAV56nqKwBxtU8pL9qhcLHXnw4j8taNoCxwQTcFn2y4PmvDKi5kiX4XnXfvUoMSyi7QTCFEWVjswn9KcP6N7aBb",
  "key19": "4TJu1Lv7pjUvjvEiYCVd2JkCpB5XnxRFYwyhbVmGivtszSD4zh7MqUKVdSbupj1H5sA6Pc1M4RM8NWZV3iq2eRSd",
  "key20": "65NBAh41HM3NWKGfnpFaNzf4aVhKSqg9wCvB9wDERNoDfXtiApqk7Lg5kp8AVJZ4rU2uoV685dcvD1X2upWUfVmM",
  "key21": "4hGUunawJgKgY3R4fMkgmqresoHAh6zFXrRyv4qjwi2ZXbMMptzijMqmLo4cbEgS1NzVHGeJ9aLvMNLEdS2yKZiM",
  "key22": "5ckzmfiTZJgPWRPYte5qVMZfLcw6JczzhYe27JQDcg9SAMadKMNNgLSsGUNmEeZDynDiBcHPjutfhmPLnpNFqajv",
  "key23": "2QjKKBVjyUa56W4KEwj8cpvjntvPbTTNoHKxu8yCs8qu28Sr1T9BpMEkFiQ7USMQB7ZfiJFoheyeRxEwqYoaxxQb",
  "key24": "ASYEfM8XrWPXXgg7nqwKjvNtkn29S9AuJpuS3kuf6UwJ3gtyRhW2Qqyi7TJ6yvxKiHegJ1yePzxSr3Fz55mW6yu",
  "key25": "4K6oYKmme5NiRctYYY271s7Psd3AZ3dTBnWJkGVD3URakVddvDccLu3k3iHJ3STdgDiTV8ryCxcwCmC38ydwVdzf"
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
