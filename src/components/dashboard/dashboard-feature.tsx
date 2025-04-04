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
    "3L8dsxhTxjNjupARVdSp4YFzzNPeGeGe7UZEtnD6gGP6ebeEUzzXjDBcyDr3fkivEYXPubfMWus1t4ru5QBq9Jtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NEwrH4ASm1ymFeRMXpKNU6gYjEWtnqkpAm9DyGxH1zNgqkEfxFapfA4gFQBuLygi5nYyk7hTsm9qjXa469jeaMw",
  "key1": "kpk8X7hBuMYaNmJSGwKxUWWaUrCoHBeDx65LLJ8fYaMQt1T4t9HweqdB6ghGsX9uNVCrPYdkFPwnRX8TSmX8GeC",
  "key2": "BLD5ZvbZnqo289kWgKgKZBCVLTU7NMdR6WJaztvibBb41YGgKbcWsuAfrttdXkJ7q6Xn3LPDKDYKzqm38NmkWxP",
  "key3": "3dZ4mDjfi1s4CCC5ekEKWkjmD7CiSVCs29RBeFkbzE47Z9YborkaJRTYGfz2bqACcWRAvXLD2tvRezRtSw4xj92J",
  "key4": "3vVyVGNcaZWhq2USFEhw2szwCfGsmg8DgV47zoqM54X6JUeuvApo2YZBezz3rfutJVoCwMrUxgcn4z8uYNn2NQuR",
  "key5": "4ZBZku66ewsiJoqNwaVybHT8YdPEoupUAyeca9Mdyj5GUDRuuDAMEGyx18hPhdsQ7784SJEmEBu81STmBYDkdu8a",
  "key6": "6owVLfqSiGLSU7EAgRsUbbJGxrUh7rtpsZ2B1NNFP1adqLuJ1vp3ZKH41Q8VsLpLo3icbFBAatWsxMhhW9HC23J",
  "key7": "4isLt9L8RhkfsyKHLSArgEUnLaWuNnQNK8yXsaKmJ5xdi2uYRY7dj78t3xt6zXDBcs2mGNMspc6oF73rwKh84T3u",
  "key8": "HJb5SavjR9ND3EnTZ1pNz2PkDn97stL4ESNMUKibPMnY2CEiDShjKRdKRk3riDfPDCu8MNC6aqAdM3xMwYqM6RJ",
  "key9": "5oSdNEwKHz8HvxmapaLhuYRFyBRAtP7peNrFu9A4Qd5JJaZ4r7sUAZ6CVsEdfLYpxBSqWAsg4JAW2byuDBtTgqA3",
  "key10": "2uYZanNL2SrC5R2VciDzVAD8Sp5yv7j5wtPjrdSoJTaNdwjgwZRdzEwpxGeKcNRWhyPbpkxkcGK7w8DjSyHeKejG",
  "key11": "3gMPdXySNFfJ6K9CRULjGJsNpgLc5B8pdp9zA4ohqXYdRyZ2ja8Z9ZJ2rixCP5f8QXmGtCP61DRpYHurqrkvigZW",
  "key12": "5hiYvFE2vVjj1zgYEN1NYxWTVZ1AT9h99Jevddi8Z4jB5ikTVk64SWxNqFQDAwboYc3oBDdtnyMqPwJrwgiXZ6nD",
  "key13": "3Ees5kRwyy44tpXoUtYnFibAGmVGXBAwrtztbV23FP2eeaE5hXJF3ZYhHyXiFE2qEphRFwbRzzGVdvExEe6c5fh5",
  "key14": "Y1ZPMrWaZgFLkahE5qL5Hn8WUKSC6M7oVrNPWM14jMQvCR1snAjL8DERFy1bG9uiqJ1bALnsEHScdb9NkeiYky7",
  "key15": "4kDFm5cZkXa2WuC9fLh11HqTm14QaR1Qc5TnbBRJCL8iyfvkaev2HZupLgu1cvyswCTtU2pASbRRBSENSSP7LxqM",
  "key16": "4eNUcoKV7GeJtsqgUCHkXhxfvtNMgqaDYfVGenD1nivCemuCiqAEKcQJxfkPAGQ8eMpVBYZjVeaUg8MSkvfw4FFj",
  "key17": "424xKH2Qw6oDUUH2fNWaqumT4bEQ5hqKNwW2dNTo5ue4KJYZJDKFfxfP9rYGxJUHDkpGumG2xpdMq8edwc5ve8Tb",
  "key18": "5KCCcUVWXxBJ9Cu8ESJXtbMs9ybcWL9zmXvnLLxwkpu4FFbr344pMAnBhNVsg5Tx2aZ5exoZxdck6NimkLe82iTK",
  "key19": "2XorNycPBNZrbZCohZWSahZL9hdDFGiFt155iva7xASz3fuA1XYDuxMCuuyjAVgEkYQcoYCWxX3fhUNx3tNxsCNy",
  "key20": "4s3yp3Qot2Rpzp4VJYqNfFkG4xyBKrsYbaRysKhkucu4PKD7YP3E9WAjAko5QyaLRTZD7YaYN34FVb3Pq3UwKmWy",
  "key21": "2HoyXoBWHPbiXim3u8sWrQpX7yVMgqXAsHTfzPhvjKTmngc5W4QcHcGAVY9X9VQnKd5bSku8t4YNLT8QYW5cbCcu",
  "key22": "55EgQ7AHKo4W2EAnakLDhw7evYmZ8nxiaFqTsnx8YBHwofN4xg8irKVUbJpP24sNqSJPZxmTqoYnYkAnDYJ3mMsY",
  "key23": "5zDqpZ7fYuYgA3embirNDTCQM2BGxhVUbggeqUm1ZbiY6r9DMzEEUXirapSDxoeTbqtHPrMuE7LexqdUMqdidgjK",
  "key24": "3Zw9iJCfd5MXjMtNJZ9R51ZWv5LVHrLpETDxwbQEFwK6aJx3DpCbktXioR1SDN5zqsnkQ61boNp4GVQBhFcxdzrf",
  "key25": "2jRB3Kq9tV3tbKJvmP7XZ9C5PhL1fD5i9HjnkrFPiV5FvDxe3XXaSsjYsZnA2FEP4HLrTir1jhHJT7WWcGTUCFit",
  "key26": "R2QHyvrzKq7iBnv7grmm6qoky9AnXpgN9Y9sDe95oBNxR4UWGaTj8PaMPdYV3zFD6vuBR5gXGVagLvGLq81Nbkj",
  "key27": "4BucMAYU6Ja1tgdFcFGDDVpqRf4GrD2wVnCQsJFMKbnEyrGLsKvHsaBbGNnwqKtUF96bxcT9nfqdmayMdVEDKKFs",
  "key28": "2ySBaG3Y8A1syTJwccuDHNn8ozi36FSUBhN3R4bdxtdVjrrRk5xzPWQtFC6LEiwXiZMM7Pj3WTnyvs9d5ybF34nA",
  "key29": "5N762pAwN8ULxQgGTD4itqDaaqQqfBDV9ZYsywzPawdGDYac2F392XceeSLMwPENLcGqRcxg554FbqLJ3Cb1Q32Y",
  "key30": "2PmSeKxv8RHN5b38ezgsjc3zL6Zvht4ik9tK65tZFNptm1LnCe2J9KaonQMyVPGnnNbxahSgdGg13tLj3nznoa6d",
  "key31": "3Sf84jq7YRwBJSJoRG4JRF8n3pmVzEgLLUJsPFe66DeoCxzVKAaJZnZwkPAvoqtbPCgZKCuuvfnwtR27P3KMsh4X",
  "key32": "2NWFarfwQJfGowiZcmyGpwPZDvXrWrVSMdR2DabGxK7L9yLWCTvHsVvWzC86vFubrxupc3aL2EEJQmXR4WMSg5gA",
  "key33": "42LjJ1eM4KV33J7pkFQESrcSByWKUKZa9ZqNHP2g1xvZcEbfwSNxAZofvjZuJUWW4kha7Fvdcp4zfZSipSsaMSLo",
  "key34": "HtzMytr2DbvXqCJywcqjrZeQi2RB4zL8QGihVdS1ixdzCjvBgDL3DURt2JJqkT5qm7pftb6DBisZxqoFit5aKfj"
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
