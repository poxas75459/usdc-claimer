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
    "1T8Y2jWgnwmC412ETExCyT6oHRuGX664iJgDdEEkXfrtWEm2e9xXgNC5M2w71Me7D6DT7r6EU3QCG24GMphX2Dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uWYfJ3DiZVfcQb6ujXXJSkgBecanrdHgxi4NYjJpVSEfeCUjyoKyF24dxZh6zwL7jrYs6c7JxMG2js3i84g57vM",
  "key1": "3XcyhPt8J4bu7f5oXu3YkkwXZHDTpMfpVYDfodnpY719htxmrs4b63XmmuK2UxcwJqs3gWVrvS8TWsogrhP5nv9T",
  "key2": "2ZQdvJEt3w11TpH3q4L2npJTGHdSPjNJwe2hcpv9XR9GD2gMZuHuLmswubd1Revq4A6baLHCdDh517STpKG1cNq3",
  "key3": "4fFxikXpGehHKQcpVemgWCwVuokYnJ3SbXoBPVKuKAVqaiG7EZhzyCTkUUGK5v3ftd39fi7CCE5WBziLVZXUPfsq",
  "key4": "GV42fHofHToUXMoEYcKnu5pkpEJazECtti6YQC2x3pXz9bZ9DhSEHeVGkaPyAQeiGhMufwf8xEXd5uQecNn1o6s",
  "key5": "4bgpVQgsAK3c64RKSovqQcwrqqBfCmz31qf8s1orwqkfqvmmFo56mERVcWAzC3kvFQvzVWv9YHK1vGHRoMEyb6Zb",
  "key6": "4CG9jCcfyL6DTrZNDDbciNjM7vNGZBFSSy2j4F9cJKs983VY4UN4NJEFiT8AitA1TfZBsEMSiFz66Hr8UdrzYcjW",
  "key7": "5NQUM8o68h7jS2eaPLSCVLUruuXwebZjAjrE8F3A8dRBZCwMR3of9ARCkQkmutuCy3XM3QQauVFGDdaPkWuuvikr",
  "key8": "2L5BEg1jxu1LGkCfsZ8v6X6mZCFXCUW5tUi7heGYfjZtJubMyQ8tdgBcZvuipacjNM3XjQgrH7B7qFvgnB5Jsm6j",
  "key9": "2aFXVNVWYF7nQ1hUF1D6Vg2qREhmm72ke53aNEnL1dfC9qwHPsvMLA9SeDKn7cNtVqVYKBgzTuKYnvcaSmBQU3vF",
  "key10": "2JpFGutBLD28GibqV7sF9tuChzkxPETL6Zr4gU2ujGSpt4kLLS2pv1fsVJuxQ3o42eBWe1eynAAXNT7MbHZwARR8",
  "key11": "DCTWRbJsMz7CikEmTc5VS7hmLtgMyPsU5VmdivpP6S5ZGy3J4bNt3C3Gk4w3nqaWMEjq8DqznjYnJw9NGw3QkYr",
  "key12": "3tDGTAghsNzSyWZ5tQh5pcFyG3Fu2nsJobQJewuqAFnPpQTR7DtJrApKZkoR6AtJe2qEXMDNexJMKiS3XGZxWc4B",
  "key13": "3MY9nSfNXZVcErPY6UxLWEeQMVwHPGgRe163wbc4jfN2RiYE1GAzi9b47qctcRUGt4ATSC4ZewsBGCsN17QGe1HP",
  "key14": "42Q9amaY9MtiWGC4ojETZj7hk4sXHnJQZPqQEUnFBxJWRD4RDhFbHVNFLDepwJz3XkmBNz1yhAswYejwX6PEVkjh",
  "key15": "3NfNQcUNyuWW4JoPSffWzWcQLqYCUnfedZeNrHdFLztrvSTdFtxSzWpvqappAnq5Z15gRuYUQxUtpQk7RXU2Mqjw",
  "key16": "22FzkeTAbGGNxiujCULTGoyTjqmpDCa6qeKbNkPoz8pBY1DxvvE7W92GkDWXKVVJ8qeG8VgZ4Z2CsrvnghWb3qn6",
  "key17": "3dmGMA8K2utJvGsFnJuPBp67nyHu5kwrNtUDZFQDow2vsDryWp98bRdTimXegEwSzQXuc2iG4swa854m7B7t92qv",
  "key18": "4E9nGSomBDyJakNPrVmU7n7EZ2z4s2Ko8n1RgD37DLDCWzRWWPAQKGgZVPzffkWsGcady4ptUbXTtAtTvqmHgf4f",
  "key19": "HYmkDvWvf7Zn63bRqntGCMbrJjaTGUs3CbkJ6eDuWRr5Sa5t2ERP3WN6Bwk3TqqJF4ry8UfVUCzu4U8P7BzrBVN",
  "key20": "56wjgW2pb1GAtbUgUHvLFuYjGYGf1ZW9Y5Wspp1fxzMC6bJn8kZzGN31nHVr78aiEuy3XN9k9UCtrmkfD19SNTHS",
  "key21": "34LzF6rR7Xjm2ad3M6jYogk9XNxRmYWv7zzEmM5cg1c16QturJFtJMXA69VGWHsfnFJPASzKzfr6kBfaU1E3x1cH",
  "key22": "4cZWLCffvYPc4omuYzwzS4YYPk2y6GmEzVidvpFukN8ejVWLRWQnW4gvG7KBwFnVvZtdMTcuQCBnirJsn8tuJBe6",
  "key23": "3rZ9M1uto8nsN37e4uvL3AwXx3wMP5mbqsWSkNnwRFYS1q5pbtjvmPz7GVfv984mbkyDF15seXC16yrv2tMVGFmg",
  "key24": "5KjYcQNJ7WQq5EYnLmk49kYGuvU4dqqvFzB8K8KA4hEuCgZwUeAjc2mrEMusS6sz9hpyMQNVppestZ3Vd9DZt4V2",
  "key25": "2LaDkADq6EEPMHbhJ75CgS9GtQchxR27288Cj7Zg9QdCsvokV4GXHc8rkYcMdwTxPcZgKeKkyPQ3YyBz8iv53mkh",
  "key26": "617p7aQMuTYGzGowQ9gmXR9w9dbLSdd9hxyWqe7qWK26Si9LRXHyvhqno2nUveCjchLWKW4fCY2NM98F131mLMmd",
  "key27": "4WL3iWFPVTtaGBgVEF6v4m5Ku5U9dd8jGbmYGXZjFbGpaPVrygdAHDKdivSpyFp3dp5rJspa1pa3MpSMmwvHWa1S",
  "key28": "5HvGmDmuAMzrWMgXjjAka2j8ptzwx833oZuTQiff4HbEvhtxaaiAVfbzuR8YrSZE8EGmwhYq9CUdpXujpGU1Qnaa",
  "key29": "5meF8KfWPXJ9fUCvfoeH8S27ChWcrW5TKZkUMbNLxXPAVgYUHTs5rbApWDjThgEnoisoQ1d8dYkCNUiw8FHL4oXt",
  "key30": "4ud7NKH6Cc7Zj35uuuLwu3ZGpERBhuZgV9AzdApVhUVTKTB7EyDDPGJEdkXThcwQySsT6vMFRkFj2aPbWykz9GZf",
  "key31": "t3xADKaU4D11W8o4UsYfJgynszwvXRMBs5v8RspAoEDkak1kipByM1gMKnkvaQnLQ1T5EgXJHUzCNowFnu8Srzu",
  "key32": "4SCM58LLwhE43yVowanWcqEiCtXoR4qSxc35f2XVkH6v1n3YAwafqJG66E3LnWkmfKfaBvhdQyRXUbAdSn19sRwb",
  "key33": "4xYk2xzX68BncVimQtGpRVjyTJ6H69TQvuVnKggwoKXRkTiGtaU47tLR8va55EPSHKWgwUTwBWiHJ8794X9JbFre",
  "key34": "4ns9b3wsaWVaBxJum7RqGdHAyvp6UYsFzasxFbwJDh4tuZYdVUAxrpuksfWB842yk8RrsyxBfNYmXM8Xte7FtV5d",
  "key35": "3hgspEm4WeWWSRPWesv6jNNoywPywqXCwQMhX8FCiAZnrQQnqpnL5Ph3U6Hr3e26rwSTPZxTq2gENAiaZ4g9dGkY",
  "key36": "5hxfcRwbB3dGB3Wp5qWf9s6mJuBHuzTvq7a348HggLtC7dNqmSL9rcQqwx6pXzsuvT46sjARY6D3T5BPt2nVmkK2",
  "key37": "3oUnt44a4uLuRHs6SkVkPqQe2FGQv7saehV4TXKyJkBm11wFhcrjPVrCc2LeNuzTtHoCYnPt7rGEfkSiD9QxpAVV",
  "key38": "4wErXjXzcPy26o7NxNDMctqxhFQwfR69AYfhVAgAS79FDoYLrQs3W2xw66piW1pw81zALCW6pFvDangb7ezcPU9y",
  "key39": "4cwCbSViMxCuRnMxRyyfvGDHtgcUWhmZfg4qGZGC2Xzg1vgVchT85oXLWaeusDsceVPbHkwCETKPMr1fqYqGrRcq",
  "key40": "KCVKWZtYgWwfnZYVpLZD137ZHLns8NUDe9wpyY73LXVeBzhrJrraCAaZSGux33WRoAR7ZACwvzpX2usAKgbK5ct",
  "key41": "5miMnse4Uzv7jcJTyn7FrqR81Qz8akFzq8H5QehNCFrogT9czJ2AkVSoN1U4WaJK6bkqzZRWWZngiMgorCMhm7bK",
  "key42": "3pWGaCij7XaQbkCJMR2MRvmabABpMMG9rv8paKL35Jqw8pmBG8nCFBpc4vid8c7uzJp7gBv8L38HhtmMZE5SwrXc",
  "key43": "4fFSbC67nGPhBRpA4pJ6acLeATmA1MVU6JgemvSM6JokgVuBY5JyrRz9GxfnBQSXUiNrfYp2azFqvwkM5biV4GRZ"
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
