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
    "4kK6Q2NSyeTxrDnMBH9ju5nfwKhKG3VSHZpD3gzMxeQNjtYgBpqbWZ3fBkMnC4Qf5XQ7GWR65nDGdC34YcJpxJ1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMmjZFWLCME6iyP5WyeVUaUQCxE75aoYEPipep3vqExJ4MN6rpUWYLAsQn7vfbaz21fzTt34YSuRRB9xPnCo8Uh",
  "key1": "2xpCdT3PxBA5izVuTtZ53WVutNowt1XcNBMzZex5nHLkFMqfQJLNbEFyxAUvKmEotzVTYD9Rs3vHJt7ZPtK2yBsd",
  "key2": "5c3pq2mAARmc61GMy8U5qUJsWQPmDRRjCgBFL5u7JfbjkmqYbPjUx5KPFhbbhyCxUMBnNy9J4HY42tWcHXsZsvsG",
  "key3": "3cmvQGnzwg7TN5ZTAYsKguEVARzGj9Vz6X3c3yeDgeEiVZFHmnwNUsyf5X3cgp9KNbRKXo86qbq6pXCbkZZMzXim",
  "key4": "5qKhnetnfydAkhS4LgncgNr7UVpF7xXTDABZQfTkj2v54oyVd8MBKFY6s6eGRFYCdsKXgvSH7M9Uu87CMvghoRkK",
  "key5": "3jaQBYWNzArbm4jkDwv1vyBk92wWAA3BesYYXGDBioJ6upaBhW3VKgjogexzqDXBE6DSusc3gEhFfgn6wazd56Vb",
  "key6": "2GNZRes5LqVzjQSs6YR4szwYNdHHb6hvqQVvp6AFtbwKdsdq2mHKV8a3e2shdS9xuc2pi4UD97jRc9r6MaHnxq75",
  "key7": "23Uheqs8GHRyWjcp1xEi5WHCZUTbeKRY3tZXxZmk7aYJoVAc3GpYNdLK7RueE4uvckanYyx9Bwf3cDpWL8fh6dL3",
  "key8": "29QMpAmAx6uBy6m9BFPM2vrNzAJKFQ1fuis8gQWanTKV7bwrKgru9rwM9wXq71Jyan8E2oJMytgcNoNXtRAjjWhD",
  "key9": "4TVwd34bhcVbj4w8jp2QNvku3hELgJSkWPcyA4Wr8Ee87hB9iJZnaLZsmEJvrdrhbhrQMduymTEzas8UBfLYi8j6",
  "key10": "5azko4HEvfRedGPr2SGf6QPRkCyoJfQMSNKmHFjRJR68T66bybmt2X5NehbmCdK9BjpxBN2VbcNgStNtewFmeXTe",
  "key11": "2dJhaDVTTREUffhirydB92q3ADqmZtSap5eUbvadvTz1USLHUG2pWpqQreURaQyhanRtfwdZNjiRjJwhAkeGWMNN",
  "key12": "2DzcgxLxTPaJkaURdn5n9yzEJpTEwi7q1bnJ8yejvmW9cnc5wCtaQ13cxBXUxVnEfoBQyKGXmGRJ747unfr5taat",
  "key13": "497UTvZbtYt3s4ZTgDt2zFKinQyg2JsMoSxBQtw7p9oQM5XJeFsLDToDEKALE8PKJFpGMRBiji56xzffpvRYFCDW",
  "key14": "5tNMETCgs4BzBujZDhu1QkdbvcCKaVnuceTPXR7LHYsGvWYGvd4fAui1WoSQEgbd3C9GZgJ6pGW32zLxEeECfc58",
  "key15": "41qwrB6jdWS1vWjRPbBs9a9mAyoDceh97LsAYJPrfRXAtRHTuR8BztAcsVtoUuvZrqqBwtjRBZMGMaXFAZjsFh7q",
  "key16": "Zqi1JgQdGiSYZfMkDA2aBdVPYVW97fNwQHH2qcGMDiLr7dDsF67RaTqmDr3FuFX9AoJQHk7F7q6ygB9a33y26r5",
  "key17": "34TLSCwi34LDWrCu9A4pzgnEMN5sHVvdC8KXYu1mGhwVz1hjgBjcaH9QhR5RUKe59JREVjzHNiLuk2YfHP7x27Rp",
  "key18": "3Wf7t73uiphT1H7VEcmPXQGvcDc51erEoSBWbmPtwbZxHz8xkGB5obFqmPbbMbEsgsJDfPUFZ9Hz2BHTYWH64oXW",
  "key19": "hw6wtrFGKzT5DZk9wj4eyJTV7Fm9x5VsGVFHRwaotnrXf77fVpzwSyJaAEmDyLED7KhUmqCG2jnR1VrxvSVcLEN",
  "key20": "5wYiwzAVUfTK9XqXYQFPejnsYvx5CUjdxB4TahSqSrbQgMCF7hFQhZdnBEoD362ATQqZUgYAArdSH167ddYdkUh8",
  "key21": "4xuw6BDx4w8brqWbpteMnohsdqMNAsxoUvnV6qVyryJqD3Jf12k8spFSD5N71gBSsKDKCCt1h7YtfKEWUepFs7aY",
  "key22": "xMTNwxdHbKv8Zas9RHzDx3Qs1go6Mn7jM2zfx8pmZ85YxEHATuKJmUKr1EZjGUk5NYeUYCTff98sDkwWZhDudTT",
  "key23": "3zVG2NetSBMSwLQHj6S5bptB78k7ApjDjm6vADDkw9eF5Fq9kMAF12kRBg8XYmDEvdY7EEu9rLB9XqfvjUj6vhGu",
  "key24": "j61D8txNiWmzLwoiy7mnssb68KTz3sZsVtzdHN8oJ3N9HigLdwUVDyDszrnudiRiMRma5D8UkXDwsxdTBTQsVZA",
  "key25": "2611AYKbLog7XP6c3zk2LtD8T4MUDf1BE36a1GMZga4CPvvXapPEKKvF4L1aqVNB36LcX3RJzyXnyRaeUymw6KLa",
  "key26": "3YUnPgk3nKTy8tpm9gjF3JgA29SuAZe5rWyELxFpJHdAjQAnuCPxnZBmnJpSJheA9DiYB8SgWRFWkgvTxBswYxZ5",
  "key27": "5qfYcxAWaK5wbQ1umDwaMda4jA8vWbYBWT3LfZWAeUHNQoUkCfFnuyYEmchu3xKd5VztK7ZZeNiScizP9WN2MXCf",
  "key28": "2qAkCA2KXoXh4nxy2GwJP5FtKLcWC6gEmGFeQ9AU8WRfNW9n6Lw4eGweKr6razQHbQQitwu6XA3nD18EbsMPfJa1",
  "key29": "3Db7T2TfekZN14B7zi8778B6fQLqUuDyspuknDepgwVVm9et47my6uHPnes2Lfoxw2M9TNqCqEXcPRu9zFuqVQnW",
  "key30": "BDvvYRGszdsjXXNXMvnEdXkSZBPUbQEmbNjCHy7dPvzfP2ngLFPSdydmEgsJzo2uLFqUKDtEVri5jLMA2ivzzDA",
  "key31": "JGrSVwuhexbjHfVztRfBWKr143GQJ27D9RVUfG8JiPDFADFDwHXxySbVrTs66UXRF5swNmnvC7An2Qem9i2ddXx",
  "key32": "5LyuPsjEf2JbfquP49h7pLVcDQsoZPH6FvHCu2Ti7aB8thgLzoGydAtASrhhG8n7N4B5eD9U6wnUUWZwKJto4PcU",
  "key33": "2PaQjw6DgXoqbgyUxLXrDj4YQvCat1T3yqxi4oLRdjVZV1kTkYwtJED7P19yG2tSr5jc2KENBRRQtWdtxrJWLpkk",
  "key34": "2uirVCx3qok1yi3CUf37MB4Yk6uJq4thv39sBxUtdHHXySnamz6TirPPhRzWmCCmrvhgAtM2MPs2WVRsJj8MgDo5",
  "key35": "5wf6SAaE8YPRDzuKqx1bHZ7Jcf1tTwD1287cGbMfSQeVCgrBbQXXPWXrajkR2ZJtudF592dXA7jFuUWc8eZ44km2",
  "key36": "bZ6W5gX8tXVntKsemPAYS2yT6H4GKrWBMKPTdLinTKYXg6vL3w4yZBb23bhKpXGQhMKFp3T8qTLxsBLaiU7akwM",
  "key37": "2Btq7K6HBYPoZkkRPhBXmxCS4smV6Vo1skHf4pS1VUtWxXxSp9HiZECxVJo8bpgKdRiYCYPZ1Ed8oqYh4nM31tVU",
  "key38": "5Lj5xeWwgg21dnPa4SRRjgtVaNZDFQU41qXV7CrotxyxbUG8RGUd4roDgiCc69rHAjd8NEgFabYrgbEH2u9P22nY",
  "key39": "3VmxPMTqn8KwUpv6bzaNBMSkrwiyD3ouD1JsZhV1AHPVaF6ZEaZxuJ9KwWxTDKqtC7uREWjSKUm8ar14zVVncVy6",
  "key40": "3XNLgpGrvKqXEyua5MWAiYVUcBD57nYDht2hx4KKv414zR4jeRPh6qVzF8Csoft2S5dPm7hbc51uaa26HdG7sA2j",
  "key41": "pfSp9w5fFJmEzaCMou8pgrWQWkbMsCj9rCb8pzRJbP74tyUzDyXRCYmHywwGPyeLuhFQ9Bqn3Po49Ux3g7yTUVU",
  "key42": "663dTbHZzrthYQjSJLXwJwoanWikTznrDWokC6uKfNsJXwr3Kknw9BLnooyANjkKt3HgMBw26wwWZrBGBHt4Avtx",
  "key43": "ghgY52eP4PNAhgNNhe4JtPYNfMqAmZgntkkwHar68QkxpAEdBaStAozJXv6p3XW6x18AVHZeCAgeixrJWWt9XuZ",
  "key44": "9nNP86pVgsEqbjsmAQMWZpemeR1oxfLMKdsvchjsbjqJvpf2u85AaGuBWHiHd6SmPbdzwvVRNfNd8mMqXkhaiRx",
  "key45": "3dsW4gJLbFt4ARuVGxRqVJp3f3QBiRLrsUuyL22MQyDsEEQ64bG8AqFdGio6N7YgsGdpYjoRjP5SPGPC91vLwXJ3",
  "key46": "QbqdRdiUW1S3zUbMTqFHqeSwya6CT8BgLmhRfT42F9KoCs2i5BW3nCaysVdb7L3AELQMzgRXzwLMxiCUgB48TCQ"
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
