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
    "4fDNTFZbYRFwVE5atpnSbgg6skBeRbYyWyxzffSZiptwo3XkQbFhCttDanWqfN1GzJR9kyMCLq5rthAuMfbEssE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ym1LnkUpnYa9FruXFd56hyK7cPqwGZMJGJGbygdC9RRTbrrR7rwYuD5KWGf1kCF5jWzBAnEkZWNkNEiQnXzRMKP",
  "key1": "2L9GnFdMre5BZC29Z74NDL4MMnSUk4A6828SCnhAmCevYgBAzbvGtMkTc73ekGZXkBSu1HC7qqvp2Gym2TN5U2di",
  "key2": "3vXdtPvJv74aGFwdRTqur7Dr6AmwSazFVr6RZ8vEKsbziYoSV7JmZQYkgbPpbHCKvnEGyUGbTmMncEBiyhhznPWF",
  "key3": "2wdRjunGWTNSdWQSFyxZ3yHZjkskgTay6Aqf4eRmfVJRVN64sCa5wGsJa1NbcH2F8szT3BdJsHPgpmGTn5eBVA8r",
  "key4": "3D84H6qJLurQTxU6pALPbCVc1MFKQW6TDKqto5sQwLP5K34h1DtNMDz3duzJ7drZ3fe7ZMRaoq3iUrRwJhTFRyct",
  "key5": "4DEYyMgu2TpEU253CTio2NbGWx3peZmDmaYaZWvhJ8mwAiMSEUSr29tjn3CN2JX46Gkjceo4VifCsxUp52HqU9iy",
  "key6": "3wVYsVzCR31hffcckqUp31bVs4xr8v7WBUhpMfBqrLCH9Y65dgbWCZsz6BoQBWd6gdqWd1zCv2ayr17Us1Hv5mTD",
  "key7": "3MYq5vxMUMMHdX6gPGQ1dsbGRofwatgs6VfS7F4oLLZFpF3CUMy4DHjvQiw5y3Zk2HXBCqJkkCm32LyU9qWPkMo5",
  "key8": "4LAHveU5wE9ZnegPsCivzq3bnJdgN14ZYuZQSZoBvBTBhUYevW7SczJGce2rCR2g8tV49QrEFuH6TMXmk456jFri",
  "key9": "4GXdCnn1mqPD4bauzjzM4rC7SeReYR8gKReFacMkic8RhmaDMAqDFBvEo7wdfgyrVBaSbRfsoote9WVqzqR9MsQ3",
  "key10": "2PRRQFATWQ4B38Ui49GegLFUF8H2nVX2TzzjCdMC3WUReQbTNRNNNeATzN7LjbnMQoyWzmuc8vbCWr7mSahRpYjV",
  "key11": "thegfgNAsVyuPWJXgZq9vq7kxryVgCTE5pQnaANfoXfXQwS7agVvELCfczENkJUoADebu7JWQgDZKUTJqNoBXiV",
  "key12": "52NWPaeTCVYP5YD6y6pRPdDCG7m3m2ugc9sGzYfzdZNCzAXbJ3WNiGAbTNzPqXq1kYSFBfqHQ5fyHYyACdbZxKTM",
  "key13": "5fZdSq23tARtR9v39tx5YrC8x2ERTCSMyGSCG1iGjr8hd6UNVAzyjdYg5j92GWqtPT2n4VipPVY6vUdM1p5sJfbG",
  "key14": "4Ss2RH8Ca25VvDvfTSfaD76foszYCKsTXLCXJZdNVu1FLVP8gpwr8FvcAAkGTHQwqhMCtorUoNnrmxyYWeFhTdae",
  "key15": "3SQyrqFXuj53edtNnPHMTDCjGLhpHTMFnJXhpdHntvDZPcgYmKWyayZKMsC8NW1Mpc4PjGJWnsFhWVXzJJ48AkXj",
  "key16": "3HVCryS85GEsur41s7NfTZxRvJWjfW8MG915nkzNUNVzHWzHyTYohuAFA2x4TSBzmQmecefyX7zFd2jmPwkD2KbB",
  "key17": "pY6fEZYz59ZLtdDMChnHMH83YKaKdXr1VTLyjr63NmKCRw2x916f4uTXBzxggfR14XL1g3Ve85oRHTPM7bFFMWG",
  "key18": "2hVN3fnR8CorLJxvsutGDgBG43dQXrRX1qF1rBQKj3xiNw3UbjA4mW7AFZJQZ8ioXVei71Kq17C9fJg1NWZJKq6g",
  "key19": "29AUJQqE4R5zFmRHAKmJvPKiYNbk9oa6o1NNmQeHwukDf5wiyDBHSj3yAqn6EMEa7wbHG54PxSKz7Rn2yuBQd9Wg",
  "key20": "2D5TfQgZrN5SdNnocP1BsgqwkfAir6fCKadxj6CvwjSwfi7m2YKMDRNwjBc48GFRz6CvMz3UrjAfV14rHs32yQsz",
  "key21": "3q7ggL5HmFguSzyGi34wJPiw4hYL6V6TdCkKhdqZB8kG9HvK6aUziZogRDLApmFuawsNxcAMcL5T1avhPaYp8nf5",
  "key22": "2HSDTa6ZhUUb5xQP9fvj86R95W94o2buXVzLTwyoEVEsHrjAYfT5UuttjAKsrSzhpbHhb53qxEsBPHjzxyCBBQXm",
  "key23": "4kkQbCMp4N7wHQ2CdzD7A7mUzDd28pCtroN3sbKji3pUjT7qoFyr8YpjU7Ehv6vRtRgFcFknbygE6cMvGFKBbaU4",
  "key24": "4WMFSw3Hw1eraELRqLBmpkW4Z3yLRbcYhUi4ga3UNnZAomTo2y3tpvpC45nLC8QJUT6Xb3chYcZWzJciyYTM9fZs",
  "key25": "5s8g4TRjk5ojDdm2WsdwPv8S4LwHFDAktMQUCQGkdKFKX5ScFAbDqHt7JJA4rBxZgyPF9fHzQyEKATgotyQp2pDV",
  "key26": "4hp1jcavCoMvtpiqz553eVC9jHxPFg41S5qm9nDYskA1BNVS5iZiL8KAVt1pmXPhu8FkS71vM5vrJCAqfrpoZwbt",
  "key27": "2dU4CLvKUwVetNjvbesquw6PsQVGmNzLYa9MmWmFP3trBZL4XEry3LMvj7oucsakrxTJdx6JS6AQPGhzw47V18jm",
  "key28": "3rkLjGwunTMun78pcip7XPUFTjCQUnFYsFgNp75ie1HS8CTYu2gQ2aeg4tEkQnZaYorsfcudfuC2HaeJKtXCc8ij",
  "key29": "4vV8CCwCNu1Mc4YtgxQCLQUEaQicKUBCGGF7nJrkMMMupdREEgQoyw1wCJCuo8D8Gd1hJdUsXCoEX9VWteHPemXj",
  "key30": "2mbqUiki5ZhNdKBxThPsaF6ApZDy4AuGPnmMd7vmijNDFXSjAhhgTLJN5bpVBn82RwEhScbnvRiBXneTD5S7zFG7",
  "key31": "35kUcE8CnJDsFJvwcGU6t9Ufxzk2vWUPUzNDBQDEMxBE9AVtmGQwqXMrL4noN3Htrjfv5cyAe4gabywtdFsMqTeD",
  "key32": "pwyYeKgx9krFv1RRWCzwcdRqezpPkQSMi4vTp8ZPz98nkWcLTTbXgKs9m7wrUN75uQYK3BawekAyWVj5yGqjVEv",
  "key33": "41rbd9wP5AVGiDLRscuMAfgC3o9nBmkxbYx2Tqrbd2btfzZ4wU77fz8ehEP3DEhm6NYjGbW1XBzhicKk9uD15qCS",
  "key34": "59ubxfv73nDMPGkroF6H2sGEBb3MmbnsixpHsdYLDn7Nek56djmQT22Y5hiQM6Dt5Zmgn5yuHQhW9euFijsGRMf2"
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
