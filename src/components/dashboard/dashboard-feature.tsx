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
    "37GvAPAdpztbmvUreWW5SoruF9gjYgSUUSbxU6xVRFMg7TPD2mYSJtRx7LaWUFga669N2kzC4qpckx5QCZ7uMUY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w1a88WtiouK6VZEK6TTpYuKUYPWpCTkiW8QZA7CgaqoPhLqQwzR4ixQuypW33d1VjxY6v6HQWSAywGjRT4zLkFv",
  "key1": "3SmiqzMYJ5PFw9HmuS1nQUJrnDjENrKWXXeURmrkopBPjSnRPGzQfzvJTuPRPekkaF8rBKGR7hqipTovnHvmjEcY",
  "key2": "xdxV8Y3aynHKm9FrhHbkZwfFdW9wVvaa2aPGK2NWD9pqUhCV89hwGkV49RqRqQyMn2LyNeAc4DfKz4mbhLHQLST",
  "key3": "59bxoEASB8zoY5QTwE3E75uT3bnnRu1Gah43pZvbZCjQzhrQ5PsPAKcDDaDYGA5xtUZPPE2RYRpKLDbKnWMcM9YT",
  "key4": "2oCaJGyZdDtPfsfR3iAuB823TESa7ioXVQVgd5s7TtKQnsDuMsukgDjyuEi8wc7NrrPRQ9SnGsHJWFaCw9m7kb4t",
  "key5": "647L6GBPu6CSH8hdwtn6kVmxUetW1C9xNddBgpV5P2kPVyX389VdM2Sk2hBktuDnSzsMDkC86ExFmHbj3991RfY7",
  "key6": "4WEogPMQxeG7Em4hCv3FDZYvxxJ2afMrUGFPKn7mNZLZuaBrmwfWJiiwqSAbCeJKc8S3sDgUPyNPxA4iunmgJ8yT",
  "key7": "22DhouX2XsfNEmJCqrvzduFYS2NqBf4Rf2w6hL1tuFJTAEuzv39ini2bwthTTGZf3ykjr9M9CYnugcjaaDN4fwcb",
  "key8": "4nrn71RXzMypCQ1e5ZiRwPLkcahQUzHtTrmUtVs7M7ECPRpCgEmASncAfpuRcjc9YUYRzFMHXxeZRgc7NMCsKzWJ",
  "key9": "28t22kkNBrMFBL1Tzpx4MwjHGqPeXiYZCGrwJFKSNo6J9WUttEhySzsicTwvYzfbbe3DkMLv7UDRkXzsdmY3Ljzg",
  "key10": "3Tuax1bXrdYZ86W5JQJhX8RnmYiJmdFNPqsph7wcKc35NYLudYQFCFkhx38EvUEsc1YE4it3ooAxFWUBDsJcgGtT",
  "key11": "56tWvLWrtWKm3KjyLAVbeoB6evWQEFbMEmufCw47use8zqCR1x9cwFwrB2z6Za88uYgH7UfChauMm7Bnt59rquhz",
  "key12": "5pHwzJGwBcRupiKd5t6qxicX4qGqfSyM1FzYV2rhrXBUTbeaqBvnddWe6hya3oGiPG6og17B4g7d6byxYmiME1g4",
  "key13": "24aT8gbJTaQnimhaGvw2CE87s6tcWZYGw8J5PfEKtX9JPYUAf1B7nRTsmBPq99nQVJKTf6nVRt2KspqPLmru5cqJ",
  "key14": "34v1n7HiCFrNR45gHNwxgvdLA1GsenqF7E1AC1ffvNZagDFDpmFe3LHSZwPXwLdpaeZrzYbBZmiev677B5MKRVT6",
  "key15": "2nwk1tdjroTmj4fWwpEEMp826wD52ekekZuoFz3QzZA1B43Y4SH4VkEzXgbYfN1VaVFfL1HRuL3adWYAgzBKVd1n",
  "key16": "5BiLNE1mtDnNsugPnRhZzhLV2sFjTryYcDhBBQ76v4bbYGLmH2BCcPr4tN8cgStYtPXEW5C96H7m2Z9dTX2dr4zJ",
  "key17": "3eTJuU3s1dNwKCjwmDScaawsxGifRaH9atWc2irDUousb6JyCufqs7zGRTPqTY3VDzPGrXGuvReqYL4957qZ4Q16",
  "key18": "d6sLBXQT97MLCHWyndR6ZiohZ1by6mt5B3LGfhuSP1xASC6o1tkTno49g8Lkxzt2KW2vmJM7NJ1FhCCrUuEceQ5",
  "key19": "4e3EiTjDfc7bGcx4zkNogNyHY7LCqWD8fU5nQXkeFgLukr28g9FdCHVDj2DgUHrMUAfJffb7o3xRHEqrR3bTcP59",
  "key20": "2js5bb6vEPH8zRADKfZY6EHhgaYVLb5jGuYGt3mLrFpJHmXBvQH1wifTnAEfbW8CgToRNSHj6ch6PD8p3zVTGW1V",
  "key21": "2Bh2LTnFp67e8zMXSS9DxfzfkBjwA6fPrDe8g9AEbyrPesWE8RSYbuijE5XWGv8wkgB8oPJVRpddasQvozdjhiBx",
  "key22": "544MMem8t8bf4mRBbYcyb6nFe7NKJq39XY6kWwbeBg4BmTaHTMZo3VD1WfqJopmLQCLdXwik1hFY5PAGG4G5XpM",
  "key23": "57iAH576L6FU9p4bFrLhuaBydgjo6QakmFwYQe8FwjysBdE1e4Bs4T7hq2RkbdPyjppFrRtY3thueyB8nzSNjUTC",
  "key24": "3TkGnnR8vM4quQcbo3NawLHaCUhu1vzanvqNW8KXFJFjnBVrv1YUVKvKZbdk9U3zfZoZJSWKYSyQRMssC39kaR9G",
  "key25": "2twb7FoYX8ofZV7nWCfYNRnCw4Jf3cXUDkpa3EWGvMFkBZsNVBXYbKtsopR7zr1wwggtCnqyMMKNAELiFKbJmGEB",
  "key26": "2VYEUGqUedmCodwYt9nWRRURLBHQGCSGJ1dCDUF6FXETMcpCmBEt8r5ihhDt5UUf8CAAqBCEWt1WXgJfE6WqsriH",
  "key27": "3aaWx2QjML9fVnuM1D22kCMFRJBQinKdeB71uNYeXcQreXX2R7fBAQ3mHi1e2LX19QwdhjdJWixBZz9Bs9t9zGE4",
  "key28": "5hCassuUg6pGgpahHr5VgGAdBh5vxps8WvyzFecvMeeZc8EkY7p74Di4xaGy45dtcUBq3FhuRoLUaFkdn28Dphpa",
  "key29": "5DAaxBYZkEbP4NPaMbeMYzoAdHqqD9618JdkASeyA5yNLGcHXD9DiERA1TuvWEYUSAmVmxwkPdGbQykb8JUBiY3x",
  "key30": "5jYocqSMoTA58VwcnCFmrMyyHidzRMdoyGHTsLoA5x2u8QQRvdgL2gvQvjbnTybn3EjLUE1KnsfipcMuJn7PxMUp",
  "key31": "2aWwfQbKKdUcafqCEYPHNsTyvLcYwc9oavJJPFSFcsRkYxbTq3uJZvDBud9ZPTpj5omh9UjhmjyR2qAWjLUVN4hw",
  "key32": "5rfvunZ28X4UFTL9KQfbVZAEpzozuwfhGWrZN6g1uKwmQjkhHkHXF9cFBjvi91VF83dSVat78ePHFbERaYE9KueT",
  "key33": "2ZoXYHNQGTAwisNaQrmvGqpwmqWg1phw3ebHbns5jp3p6fCtE6DyzkhMRS5wNkq3qRqT5ug4zqZfFCcXvy8KNxuM",
  "key34": "8S87pMB6hU99iM8qzKvwuKSQdbkhX6ccCR8iy9GfwvQhKKZX6C2SLNvSRonKHExewzGc7p9rx54fmPCZv8kgqSu",
  "key35": "2JSGTfAbqXxZh9MCxZoWNxS1m94rhEQcwyVbBUrD7QSLq8XdrnppUqXgXmjbTEf6j9YDqCjhDHZvy5vgNqS9wLj6",
  "key36": "5XLXcSwLKUiFCJF8RmgMw8Eo8gagMHCfPhmdN5fYa57LDeLkYF8kQY8wEm89cSM96ce9wH7xHrmNFdzCMQUTUnAW",
  "key37": "4svANRxbYC8dJUFy2AAvDDBnHyi9TNrbp9j1KrX4fLkUXJSvTafKu52HckrLyVksewQkJfV8N2R136pjhFUM86N",
  "key38": "LY6nscBKPrBi1W5svxTbdFFkTaADtRE5V3gqKziVFMw3A1csTzAGzffobguJuxutijHjK8rPMg6B6mZv3Zjmn6Y",
  "key39": "4TxJjnnL1Tj3o39DWhJyaUr1TSXonwdEEVYVQVTmduAPfbwFbT19jQxdC9V9j4TQiB4MtNZ5BznmLhg4nQX6ws5i",
  "key40": "3EkqJMesu5oDNVvwNTW1jahMp9TBic8jSTZnUF16eQYEknGbqVwE6B5AfUnFVwAkyqPsAqJWbmQM5m9A74vfhcGy",
  "key41": "qXXaTg9sWeENr9rfdiRgs2Toos6k6Y2W3LKBmdQWdqUaKpsrgLM5abHjyV8kr1ExT5eTf3imbDPH6SaR3Bizmxq",
  "key42": "edzLFWMusdGnEartvuMc9nSL1NJAooiE6q5oCSxbqUFcJCDTBiww7pWCPX2VjPBrFRDXcCfHZTUSD9ekXq5rvbE",
  "key43": "3QqHJmJ3Qz5wtBhDwV53eNqg4YtGL55RWeU3juw6nhAcXaq5sdZVvCw7E4676ZMQGRLdknkjDjB6t1TcuBUuPohS",
  "key44": "4CtejsNbYZyXinS3tsCaKzhmje6Bi4HtgokCgP71vNzphAUheSf8cKueVmV6T1smJMbDSieckdZhmDW6SXu4F1Ci",
  "key45": "35h8h6WvB5RNRqvP4jUkZ5n7n6YNmCwyzFbuYn5HPj1BMNjEM6Lgg3wPrN9tqysgVZwxoTcayebT27t9fvxxursA"
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
