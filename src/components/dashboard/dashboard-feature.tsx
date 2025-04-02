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
    "3bECp681EFxQs1LMVLaqgsNjafiHyFvvHyRkhzKJf2zfNiPHWohRQ4ZPHBxqd7rvv4xqzTFNz1CBnXU3NXcEaC2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdF5zwVjHj66hTUuwhSRumQcZ7d5AEyT2oSn4GjpHVYfUtD9BV7UqmBaT6YQAcGFNqQXxEg99kC2VJupJXmqfUe",
  "key1": "63yQFoEXrbRR26gk5utHHsupuXd6xT9mMSmERFGUH2U7BBuHhaHVtuTikxv3uFSQRY8gMuzxifnzxQyUvAvHTdqQ",
  "key2": "Yw3irw7QoAm74v81kLoYBdoSqWCvUFCRYdAVAuwZD69JJKY7tedtF1i8mSvmAsoGBgogXbdsCP2uU1Wv2vgjpB6",
  "key3": "4P92KjcvUFL4wGNPkJ6W6j7tfBDhm7yJFyik7TBjZ1q8qiTJWhPifbmTBJAHZf8NXs5QRv8B9DkTpbHN4VyncB9h",
  "key4": "4qvsmvUxnzojTsqHvxJkE5jrcyH65kibTX69VYQGb2dSdqT49QycPDdbK1vbyA7t9Lb1464AUp2biQvzDh52w4Zm",
  "key5": "5b1mZWyszHZ8rYMyo9AdG1UH9rrGVG2opAJm2FV57EyvNBLa9ZUnXk6gBCS4vC91wKLMnVYpj6w2ejzN65etCX1v",
  "key6": "4t7YJPTcaQc9bRXu5xes2qsHHT4UmDceK9pcAwCHwK5r3NSjhFdsvJge9UunzfojwKy2cAJMZ5W8MoTFwXBtX7fw",
  "key7": "5X1SsUqPRFn787F6DLR4mMDQMYUoLZEuvS9VhpZJTjKBbvwaHNDszcnP7ALejicUPZGoh3dPCSEUbocjX6KUAshJ",
  "key8": "yNXYP2PxWLS9Edxvo5rbxhaASWsCx2zbzv3z4Lb1rtbquAQRAy7Yff96uw1frU1gdBszkpj8X49ukxpoozwMVwd",
  "key9": "3Re4vTJzhQu8SsTLwTMiR2KtzFKqfPRacyv5XqHXT8t4EJRTjqfrNJ8CkhrUrFxp4Zb88CwTzfjPeUbwxfFW64E2",
  "key10": "2asKmSebDqkUBy52S2Xv3QfCyzqFfG5HXbP348Krzp4pd7LRh5ZGG9eUU7zhm1zBiAcTooaT7tN9yq6u7Gp2u561",
  "key11": "5Nj8dMwuWFHWVU6cK5fUycTfrygx9ThJKvtFpjCaoCFmsRUzfXxm7QeFei3CdS39ySAyweycukfDnYsmbuzVxcrc",
  "key12": "55pdox4REj3qR8Tb9HaP3ekmg7hJ5JprFrhP1x6B3C8eekp4ftfNmvr1pGkvgtam1W1jK5BgaK2wizaDetGghirX",
  "key13": "5FBjk4CsrKBxs9rZGRcMuR9LueL6jPCZCp6cndLMtFhmUnSik3azzM46LLSPtzewfdRjVXMDDfUZtCHRp9YfTvni",
  "key14": "4JJ4uTDagvr6Symux4KJwBBLcsfYkpKsMw1LUWzYSTeGzyqMW5Ppw7ZkBDXEAvPMUu6mD9mAYt5xm692bbp9XVrT",
  "key15": "33xQNJSVg1NrxAApVwdBtvx6pEToBvTmhApArs4pskFjTjrjE8C8MM5TXNexVuKcLhrMkoy3gGAExZSEjYdi2sqo",
  "key16": "3nuVNNQsWCDU4UQjXoLqsJMLx4AkmX4g5tBQn8v7uRdJ2Y2jbUKTqQoAQV5SewbFqsGKr3ZSw7GZ8eosjaA7S6NQ",
  "key17": "3st1aaW8288Bnds9C3ArgCWJBedCvsVGv6bwhAWh9AEsaaDF7gdqwCV3Z16FMSrjvDquv6LvxiDM9fQBYVg7svsv",
  "key18": "4QSGKaTgdH7LopFFxJVfMkTkPgfSwm3XtPQMtbr6qG6oDu8f3txht1jzLpCiz8xm2DAgfATq4vH3bfkRfGno5HJz",
  "key19": "m76c3P85m1xGs9FLKTDdFEqMkeQngan3vDU6bGnLo7QHWHQ3EVEWXadQDjwfMA3UUeXHfHdr7AhEhrAve1LxGYd",
  "key20": "4LfVqaVq9T9mGnzxmHhwe21xBnUsGW3DCnftkwcNeWJkp1Dp2WUWkx8aCKxjgQ2r2Wj3pP38U9CoZSncp9WTnGSr",
  "key21": "WLdsMhzfbKVqPCGk7qhUf4eFscXyX3rQnyR8biUizgTGCVucYPjM8K8Yv8QSitYRwKWb9V3wVUHfVavNE1aDZhm",
  "key22": "4hMrKihh8CJk48oKNPcEHvHymJbiLLeWMddS6gvcCEw8DVQ7Vcb1ZQvdA6mGRBiyM9MKuKDDKFNpxHQocL9hmZdG",
  "key23": "567BpbJ8M6tayoWuGfW9jH9v4AMUHXPxisbwPSVqApcYSAzZzXHUnqanfjmiEdqnqZDRdfnMCbgfEFBPckymnduw",
  "key24": "Tm1eKYJAaZGC5S69VD9nDN1sA8RLgB4LQdFMN1DQ3afe9NRRekgoBsxi35CZG93qhux6PFBzyrMu6pfLZN8SY6q",
  "key25": "3KYKxXdL5CJZUj4HSpD1qQzj8sDo1EHxr3UijEG2YF2UG7t6YKHGty9b3WwGTF4CLRLWBForVUwVmhv7MJ3jMzCi",
  "key26": "2MfXECoUChGuNRGKY9Wcpz398znnBrTAEzKxFeQ1dst8hBQwc86EeZjyhHebD6ZqwoLEF9hgEQsdpoUfZ9gq8MFw",
  "key27": "2mk19JyMSZec3o44v24uc9pQ6YWjSNTAwvNzFzuSrBa4kbcy4YY1g2n2j2tudy3Gq6crZaEv3chYRHtL1UGbx1nZ",
  "key28": "3uFVHfjHkhYrEc5UbSkBgPixXnPYvfrth2J9wLaGA8FB8vxQYHe9NWS6ZBTazEWxYrdzjE9pYPKgE79HxGha3Tby",
  "key29": "3fWeaS1JJARbFgn5D6ygVDkXfH9GwPPwwmECh9DXmTDFzPbASVVMdo89JdgcAgRp7JRjtAjzsJykYPGFqFvZoM1S",
  "key30": "Wuq8gzdw3QoRqmYrbjTQ8DFC3nfqY53fKssvN5XvZg7Zt6tyMLuFHgDCTjBPxUt8zwM4cGd5fMCbZPtoYRLZ1MP",
  "key31": "4Sz5QbbjfYpXRSmyRhUo9CszP1mGDzhAdxBfyRXL9zvuJH8DjdKtkUYSHPTWoLV55s1YUF1JeCQAfkKq1ZYsHGJ3",
  "key32": "4fUnCDvjurJJz1hxiqXd5aRDicaQJwhAXUqmrznNynGcU2qrRTT1umwDH2z3ytNhcvX9gRerRS1rGnE9HzoioE1c",
  "key33": "4BVjutGeE2W3dwSTM6ouLyMeBzbrMqoBkBWiKPS2y7wp57kFy7HE4vji34DDwpEthJ8Y2r38AtVkpESCs8Ym7e3t",
  "key34": "3PLBHihfzxQdVVvVwjEPawTFRu47s481fzg5UwYkpGmRSTyLsqRs9yU1XAQEyo79gpm8dhv56HobspuFfUzyLcSq",
  "key35": "JSpTuEczk9XSypKDNYwRUag9yEDxoUcsocTj5wqai7MmB8bKBk8DdH9dtyKh6LSywkKLfvYJBPLRe7DELRbPyur",
  "key36": "5G7DgEJMsLFZgwzF1B6d4siHLRTtxrUdWTjZ64wdbu4dujaWbMSUG4CeokPPPgaAdP8dbyswstUdkkEG6zzZC1Ne",
  "key37": "2Npnfu61jFTQwQkWDP1nVsry6TSDsAFggdy7pM3rTE4CiK82rsUk7pSKJKH7SfKqkCRUxTMm5JsbMwSmeeodYnnY",
  "key38": "VXVCFE6XPZNPy6dJ3xwELiQF9L6GRUuxxJVZLCpwri9jcnj2Qat8yiJYCGzW6zXc4FvkrZHSdKcwS3Qe38JUBsc",
  "key39": "wWpq1Ypr5EdXeynAbHspUM9yBWCraAWpaScXoMcW7E6ZPR3Rd883nMbYviMfi9PuGe7uxgtw7NFyVmCrnn2UGVE",
  "key40": "4Y5wUKxFUsboHuAoVfL5DzVpPFWvDGUbxgTF4jmU5uWzveZ7orMzidnxhyHRrMaWqYpreQ1YcnvrcLHGf6wBPcHJ",
  "key41": "yWHzStaSAEMuv9ryaLsk9fXrChEPMgQaLkAkAxH3HPMjQTN8RAFyDBbcks9uDGPMfP6aDfu5JZL3hWJ5cyvkbiC"
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
