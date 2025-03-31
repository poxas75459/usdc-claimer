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
    "bJ6dC7RnQoVZFvyPcE4mwKHBgkBnSjhCLsAz9scGDGjDiKVjUdsQNQ72UaSyw7x4MhDZnSxZbQtpaFENgHUKawK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "316H9k3cdDDcZTpRgthFerg6fCw7voJ1DNAduwKQakjC5dFLn2WetGpynGT6YF8kCcTtSNLzS5BrJfpjP8iBGDmx",
  "key1": "4eN5swKJnFZNL9jAwwLsAXDjPZayhLSQWbeTHatNVoNFhzWpBKKxi4ABuyLFhU1GjwFfMnwRT8qpikVr1TPeBdZ3",
  "key2": "aZyp3Q7oLFGHcj5HmRrTHNhPn5byMXBdkZTkHRmAbEW8mVrGH5KGMgX2ppYgTrSW4AAkquSLgjJyCPt2R2SUS43",
  "key3": "34F3ob5gretbBoTL39Yyu1hfivGMdQTnPQorXCmtaASR8qExfbdTPo1jXfK7cPLU8YdFwgv6boEdnGdd2iCAw6v4",
  "key4": "3oKHw9mmM6tZdA9G42efaVrSS78vCj6YiKUPRHsVBfpJkVKsyAyWPH2C2etoSEyZy2cMiYrya41PyiJSy7DZUptE",
  "key5": "5N4bwa8vmZQrhhP4e84VrP2cWjRwKXPGSa9aZkWufvTb3DW5TRNeRyJx6ZFfNRd8CfcNCSCzipieRfvxCJ55fv8t",
  "key6": "VwmBnvzrW9CigJKgqBXtwAFmkWEJS96HjZ9KgsZk97FER655Y4Hu6Ym65JqKvpQtTxXSCSsabtQjRzrP5np6cBZ",
  "key7": "4w19HzpJ7yRBtHty9uxzJLHktg4HM3uipE3r8UXE2NdUFs3eTPkvVSi8CCdyz8cFDXg3B38bboNnU2n3w3g7EHXP",
  "key8": "2wRiG1ex8mAbXnxnTku4Nh17Xf5PvZD5vGMsAM7PovFmTA3rMaKNYncHdpSQ2uNAnZnPamaTmfh23NLaMKeAYuzG",
  "key9": "5cgAzkkzRHETnHeL79dCc3T2Fj9YPC9mVJ9Auw9aSDGdoyRpqJVhDy378h1WaKvdMGMDCEsp44KHmm72dijR8ya6",
  "key10": "5eCWYUFUafjawHNuXXtnzNYYv4z9oMoEMTReVKWfRbYSMF5PsEBXKgA3cvRXWMbrEfe7q98oSqhUnwdRNiCpFSwh",
  "key11": "5EsMhXZNeytLU2FQq8J6HKJoDr899136D2vinR3x9hFL7GGbsQW8fHgkNgc2fEjGRK6ABpqvSx9S5UJbcv8Dbuvr",
  "key12": "5roUQPvhpmQwNLFApLtiEAoALec7ySm4eTU9eUNHNciXXjWraAxeHXPAZ6gq2yWo7kXkqCs5Y4x7HBoYvh2iD16u",
  "key13": "4Mr5fbqiSJDKxzKFNowD7JTqwW79MMcrGpgob9XHmXss1q1yRequeQkvpHoNTpBzsXyYFyY9wjGpC4Gm3romZXZo",
  "key14": "g932nWTsei7DN9pwEeAn8LMHP97Rv8V56s24G5sUzUxjiA3YfYuBf2qN3Rzo63omXmguTX8fjPxWvvX67J7Zz4r",
  "key15": "3UnVvjuJc1fdcEoeA4m142MRp87BeoFvNeXDhgmTNnMFcbbF7F4pJrx5EcjPYavQmswtmem57TBdxwYysLKu9E56",
  "key16": "5ccscozW3fzqir8aMhb4YuS2AFBAwNmXsP9eZYvA3LdzmAqAUcowKHG6ki7MzyCUWwmHZYEM93gnbw9xtawbfBKv",
  "key17": "5rnHr3fr8puaoaNUEJYaWD2rBqxB1k3vYLFKSUuJ4ziSVrHzHNsMTDt2QMygA4RnqMt8S97X6YTft3j7KuLRkz9G",
  "key18": "4Y8XkowVHch7jm9VA2a5meqqpPayNJWLw1ZvQ1LKbxkEL93By62q8Tx868r8iW4nwqs4gRjJ6DAxvz1NyrEukBoh",
  "key19": "4LaFdRTKYdtxUupF6tFhWNYKQoGpyeC7iiEsUeP9ScF4fBtjbYFs3KUJ5cdSrcUogtfJVQ61L7mhEZ8dK5i9SDLS",
  "key20": "n5HEa2uttiVzNRWNBrecngY8j7ZiypWwAhXESCWhQs61Bec2VyF4FCHwCyKM6xBjb6UcuXUzRHVzi3rUDSUanX3",
  "key21": "En36KA3nvx7wVTccDsRbAWLEk3yxdykKHANibmoW41pMcP2d5jrUiP3RihrdXVd21sgVDssk1UHpTWAKVFcN8bw",
  "key22": "5StC9VUo8SrR418HJM2H3vFCqdXh3JttaUoMa8gQBMp2GgtB6HKUgtqei7fzq4huU4LtdbNQEJFKEJL5kkxFwc79",
  "key23": "4xjA2x1ycGduo3dXZS326mdWG5R3e69AG5uBNquY3JHyR6fvCaeDsHia7WJQ3hfNp6sSfSLdkr2vd4wuYmHn9XGv",
  "key24": "2h6BHvKq3movktRfTad3GYMtNXqUVhaNsKadFh3W37x1qEPTHzgGf1WaYUCWHrFQTMVs3T3Wrczb227SzwYu5t1Y",
  "key25": "3pg37vN1MNeQmeJUpS4gzR82XgBu9YpkhwfXGsBQoH1ixyvodUKkC5vdPXkH5Hr3tFwAD3JNS5QW67XH8Lzc14zg",
  "key26": "3bVLCtop2txSafZqb3DzMYkC5Vhxr1qPtC9gYwzUuD8xJroUbX5akBKgaz2SgYKs9ai9MeSVwz7a6vFruSfXf47f",
  "key27": "5LVCWXWq96KJDqE4QoqyRs3CXt24fyYfwXk9tRTHyZmBAPULQAEonPAQULbGHbeewaSBKGcwY9AJL9qkCJP86pPk",
  "key28": "4qBzZqgnvbpHhG7WrdGLJof43Zx85mTM3f6ArwSFaxocRyWzJEDwE8xmkFgQ6s4hque2bMchDdZBKfepbD31DP5T",
  "key29": "62eyqo58bzcddZx9NdiLtzbSyZhnxAuLc4g3eV2m4bBd8BAHYcT2Gr1P6xzW1KnVCShZhwWXVyqhwGCYTdzRaC9P",
  "key30": "YHXJnNDukh6TYdyyaThxhLBtq2Z4pf26Ygxh2yvkgbxcYWFi3CHrGFqCSsfnvuFeejDWNAVYXfC22zGqq6umdg6",
  "key31": "5z1qRKYFoAGZjMTDXJGEZLuwA6RbxDAuggJgyRG5jca1nQHbRWuUvXo5G9ta2aQynD142SCqzHQoqif71i1KwPys",
  "key32": "3wNaWUMb1fo4Mk5qGJFNR5o5S2ZGJemcGPBhVFdeR7Zudc9zzNzmhQ2VafQqb7Aa1rczCBvEQ9rQh7cekaQBNfYt",
  "key33": "5qVkDX1uaWZdyPUsGmxvfbH8jESXXckzSAsq98BTfP3E5g5FkzefF2zMZ1uRjZCX6LcaATSFC5nwKMwGVbkrAAMz",
  "key34": "2ZR1FmJar9EJB6XLmrnyD28p6Q3EmrkHTBRdnSVFgQPmSUB8NBUM2yjfwWYsWaviGeycqcjCjHGRhYDXozP2zyiV",
  "key35": "3JQSKMC42WJSxWMSoELFYpy296V64S5SaXGsCX2rUCCWcH3paHLDVWqGK7r8UToPAPMzJMRh9AKVkYHbiHMEZsfK",
  "key36": "3NkiwC1SVEMZDwWrNBjFBHg1QLYuEeydjD8gwHcnZ9WDGJiz78YTtHGDHytnnySRyAHkniGU3Gfm3CqrLpCtRhkr",
  "key37": "dGM48g2tJPhDupe4WKomWHBC5oVgDTCmfXmY9tYKU9VWtqiqBY7ghM2ueJwrhXu2HFh6Z2GN3LWD8GSmyWRzNh2",
  "key38": "3mVz1S596ynLsJBC3N2H3wSLtNrhxVUTPxbD2WTE1ZdW7jnq7awrTnaLUxq97AKdvJPMVWQRu1huoNDEJtSrvjrN",
  "key39": "27hEzyCuzDkCZ1ypvRYF7gYKK443WBeiUgQ9AMeLs1VdMk3z5hnFQPTjgjNnFXFrqeoukbFeACxYoFHkxLSYjRbw",
  "key40": "jXr3VgR4pMzsNsp3kZvvmFdgMxu9Z4mAjtvMLpxZioh3CktJWp8KyZKCobzGYjHxv33yJXBpnSJQ5hATHh7Cm8x",
  "key41": "vPoBowaYHEQ2AErB4PDLsiPQKfGWfQRc4N9hoPtkYJwgfeidmJqjkXcy22FLEPWQyDGcE3Wi9Fq1sTVc7x913Qy",
  "key42": "3acxEAiWh2kWDywUeDbcb8NJ17MbAissL7Padmk4uf1P6p6mypvbrzyxdAr6taiHmKz8aSWm7QUnofKtdB9g73iv",
  "key43": "3UPWvPABJBLVGYoUeG8VeZQXnQgQ56Dj7HwpXVSCN2911TKp2FvqW2uazdYHYSFvJqtbTBRbMVfRB9XbqgiaS7Ba",
  "key44": "47N7ruMBJtt2kmp9SpJZTduA8c3Wii5qAbay9xtzd4zfJpSW8xLWM4aqjxy3mnkUoDw1msmjLrm1N7s8aZpTCY6t",
  "key45": "5ESX9CGPyX8xniVVdoeSPLq93WHuu8QMdGqTYFDSKTSaPzmMtyzj91RH3iANAdK8Xb1HStf2nrTiiXMqRn5keXs6",
  "key46": "Mdw9FmCbEbHZsrDF2fNHCP94q5Aewrfq7C61BUgqgYPheGv1PRWw8C7c5yw8EJXraCtjxARPoKxynCKeKu7b1Wx"
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
