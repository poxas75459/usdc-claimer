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
    "61WjeLLUGKR7UTcoXwogviFaniVvxoC3tb2GX1JoBaMDCSEajWYxemZcfY6oqoTDzFb6y3E6ryzacpNyCdEnD6Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PCoBNcb7qvMebuyNHDjuVbsVEkEhN2vC6QTrqRoSNuFCqeAsSgx8UcbhAtbYRTjvu8SM9gcWkVf6U7ub5bAB9YB",
  "key1": "25kRb3FchbDJ35R7vyUX5QbbyG3yW9iwABsvKrR5BrNCWC6hgiKVEwRkhwUFBUauDPvba1MEbcfFB1P8GTjTUHye",
  "key2": "3GxaNXcLpMFHzNT2aVFo75E1sGjUcKjx5xQaRZjSyXVB5U662wk78V3YkbUH3KoiahY4zMQGVYPKKaX1LwsVVjV9",
  "key3": "3aYQNZkozMrTBxu1uKVL6zvpS31iFL4WC3yauyKVKJ3saLVj3qMZaSnztkF9xouoUsiUWEUzsGURhumBEdTF3axj",
  "key4": "5w66UDBNin2LELfdaA3Zco5qQAjWUZWqAWXG2BacnNcuSzLbDu5B9SeNdA81F3ExUPU27MMaXXZfeX8h2MSCXb7S",
  "key5": "35NYHa4kAfSXDABhS99jeUPXSjv1bgu97qPMgpPRMypTMtvXG8cdojpJdze56wQu94X5seCpF9rzKYQseDAVNiob",
  "key6": "41jQXH9bPqg67iXv9SMEttQSYpPx2tQkGFJT7ASLCcjtoe24oL8mmGiQVcLRZNioDLgtPvtr5ywoMCVCBfY4cgrT",
  "key7": "5NvjnwADpxLff63A69BC243jgHimmUZGpATED1yBsUFzVS3nJuWsuBawZqDn453xDFFhRgSVQ7vNSrhWBAJWebEb",
  "key8": "4Jv1B7CKVibGjArHzps8uzQXYrgA4h1xUD7YnKvw4KBd3gCVDMiaKhMvKqp929iSA1q57cshf9T1TSZxUkTfFxif",
  "key9": "4HcX46XG3jUGfvvjmgDJx7UTCmJ1JHLfm9xrYfczgqbBiS8TNKrShkSZZhXTioDFXRbUrojq4PHY5aLDKJWMf8cp",
  "key10": "5g9EYTMhdAeLmeXm3qMHNijbiQc4WrUiG2s4zdvj31mUEf44L7fAr5J6XkFRVAtmwd9oDnCMh8WZK3MpsK55rtam",
  "key11": "ZR2KUBZgwF6Y5UrHFYdyyJ32A8pdqxipPADzWmSCQ5kAieBYLQaRsnMkyF7yF6b74r6vcH9PcvKG35KTtebXpcn",
  "key12": "Z5d2ZWQusuENAtueRYmN1xPNVmhCqKkfqvWGh2hA1iABem7AEgCgZQNtmyYNoHib4btJVn6YcdXnTxvwynEnDmV",
  "key13": "3FHD9MZeZ6sCri4Y24rq89S3sE6Hf6jY3eLc533excMfHXnueghMRX59RQFvVz7coa36GC5Bv47jWQg9sEhEYTpq",
  "key14": "3aLueR1d8CU7chKewmTCNm2E3bPX3ekWrzXhYK7yND2kaHFEnMBBboH4g2WD6GeAATvtQi5KjEUN36EoDjw65tKS",
  "key15": "2bBnRA6KzTev1JN8prMiwLx9vH12pKULwRfhts98nqXdbXYW9PZ5NEGkTAALN3MNt6uucJYkqPH7NHzZhaoCZtZx",
  "key16": "4tP8NtXbpCdQ8qkebZpgdrvghn2wQs1STToQaKyhv5CyVMvGeMCyuJeQ4RytAegXeqAvDJ64BHXTy8f7sjohuqpy",
  "key17": "2yzU2TBKfivrnumAAS1A4ZgwXzxusKHRuYu6ja37cxKpKeEJ6dnMKxpvF8V2Amda9VmbVdAFQ4gzGxC2oXZoHZ27",
  "key18": "4LaYUPkPfdVQEsSocCJs2mjr3UwnvfZ6raac3774QeyoiYuu8Wkunk9ZoHoVuQQuhCxHvXCFbgiYksfAWS5bRhPw",
  "key19": "EGsSvnSkXbtBE9gycKZBL64vEqNxbHAabjV1zo93ytPfQyTfZkG76mZmFqoq4TwWKxpyrTy5XtV1U46PvQvYkfR",
  "key20": "3RHPoUEeTDoyw9a8nj3uAHqxfPLBKr4avXCbyMCAHTZwDwdTwHNFxFjLYwUWeCUFi2wNaX23nGnp6e6DKP3dXBWG",
  "key21": "5V7LA1oBvGb3RMFCNEtwKr5xpnXMVcsj4wNU5fFVDsCMMaoGLP2uUyR2rzq18pmtAg8t1JuCHYRWFC6qASYnDbJh",
  "key22": "4vV2inT173SmXhzTQwzuxKk36FjiHRdqPH5jRuVAZPTrKko3PEMQGM2UM1tcVTFaTKzBf1QNw2muRcAeN9moWj9L",
  "key23": "oDAXCGcyyVC783Bb6nY3yVZPryWyKeZB4JWHxZYRtaddAeaLA71rTWZq4joN4XG2GmjJtBWrgmJc4jM9fDFLkCt",
  "key24": "2eDnFLmDJjxwc3vv82szpSj8fV57BNXbqBc1hEQjk6BwJQwVQszzrM3pN8QV2DwNzTxAZ11q1Ku72RRyAYmeB4Q2",
  "key25": "3WTSwc22eJ5oXohbswyeZU7qnMxiJuxatQ6yiy5ZBjcU9viPMcqH2auvN5Kzc6ntepWtEassJCntRj2JdqRRRps1",
  "key26": "59zzCHmQcZDbdUDC1zWYm1D9jKALvpo9nB1XWbbYWQPEzztvfiVc11uPV2dtg34QbBUSGXV817xKpXt6ef8MRZKr",
  "key27": "4rromsRFedtWR97CBRNxmMs7dnCPwGVwBR4fvgMbi2ry2CqFDnBVuAt7L14a6pPnb48XvuNAfZNKFF7T6HQozeH2",
  "key28": "3CosjX9yte98QpFBpTPnzrWPsvtU1SL4CGwKnZSAitAUtdwFrogu2nVgEkiPZKsLKwKdY7yGXZ9rJHchyLRjVuGv",
  "key29": "4Ey4U6u1zs7xHFSjEBgdfsVn7em7BqwPuNSwRMwiNN7vEta2iJ951DDESpLAaVV9eGbPychdMM2CM3ga1cGJk8Ld",
  "key30": "3A9PyGbY2EnqrDASAbmAmQfw6gYqasR1mGugNYQRYC4rgxeddQNKhrKnk6bzaFg5nt8kwMA5D9nt3kRUChMpnNdW",
  "key31": "3X7GhAtrRQNi4KjCxSuRR3jHoRBwCnR55JmaTM7e51i8PpZhCJ7oY59FoGYK6pv4pZfEnjmV2N8SgVYnFEN5pDMz",
  "key32": "2RQpHifiu8oULhrBJjeAb6Ezg1TLjHrKdaFALcnxTkd7aGv7Vy3r6kKGXXakkrnp7B8JvdnNeaL7x2v8r3EjkWnm",
  "key33": "3anKBTJBGzzNg9k716Z3c7D6sPjLu5PPwek5DsBT3GAN8F5AV8MvdGCizmpfLP1p1xYSJ77eg3msRzqGbVR5cGdb",
  "key34": "32vCTdEQkKeQVMgFwoTzrwXvLcnrNauLHeaXntXG6AHahbuYKmDZQw5bqKBtmWosC8GPU8aTSJv4DUZ8nE6YWTTV",
  "key35": "baUpd8g95oNw6fLjenatviwJ5geQSmfGJFeNuvoknfJRmqTKk8MWo2sDaQpAABaFd8oMGuuUoHsEaJiBoLBti5f",
  "key36": "2kyXNFE4AM6HPbxdxfohkCgfa897HJV5jM5ZTmWd3aVaoRgjMLgaWU9esbVyR2TezoufydwLXbDzfEK5vadWwYjT",
  "key37": "2rMvAogP61Uo3GsRnuRwrxScY12zfyXmLRG5Stgb5ey8ogaFBBwh2bEUMbjBjpzDfXcu6yvvaBmoGnSUyAhPJH47",
  "key38": "21M5scPn965foRYamtEB3qo9FSbT3hQGErxvWZZyaUdh76JC5pN3488wQQbT95YfrpgdQhukrfmXpE1oXPtY8sRZ",
  "key39": "2ewbBPnAUhNtnjE7fSVPTWKj5hbpbSDveYs3xm9PD7CExLu2yZeuu5Tugtnjg6nT2Z1fKvFVtWg3Ri419ZqeTZwB"
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
