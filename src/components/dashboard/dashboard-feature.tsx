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
    "4AVMeHRKMcttY4UC2fjj8nGmvkjfmUdjgq2rF4ZygrkGiadM1daV5y1rw2UFcKL6ZZZ1zRrerFJFzPa2AfpRojMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yRPxQaFZjqACuxusfhQzdktq49tdB7PQc3CDR6obWomW8Lxb5zP67P2a4GDxfZaaeScW5TEBXULcAir1MA42zGj",
  "key1": "B4FmZCnjA36nDdKq3718zYG1mDGLkAsZhsFK4iAwv4D8d2XMuc2qMpvEKqhB5ryeEM4443wHoMyhdUww8u1rBJE",
  "key2": "2wxXNemgmhYX28Pupxxjefdsx56qEttFgBY27rrfrURdEzgiT8Jk6h2MNB14Ju3Mk2Tmect9oHT8CCJn3oYFg19X",
  "key3": "RfsTn96uNpCpg9EngfyPf7euyXzJdbZNtvePAiKU6zXNqT7KuQ5ncCBcSDaq3jvvHussfumx2XwqXivKRCkBtfV",
  "key4": "2tmdJvLxrxUJc68nYwkfMMQTXK1Q7JUghV3DwqWwaK85uvsiGWiK7jnZsGbYndimXReWZzZK4Mc3uUKMuj4xvVKG",
  "key5": "4X2PKSDnj39Ls7hMU5pxnw9SGcGzb2pufHYkG8aZQRXmoQpLSoV2zzLzanrcwRoHwjcG6uA6qitesGw2oc48hqv",
  "key6": "2CSz8jdeoSG2m81QeMAdkAPkSB4sSPiqRZnK2EL9UZ7MopkfbWTbpPxXZk19XEE2KCqxiz7w2xT91mLMEu5GViLT",
  "key7": "VtpMLjGmEvvpPmnTTkP38Byvduq8xiSr4SZxLPughjaw6hdTzfvdwv1j9R6aC8Xt4HY8ZSYT8nVWPdZzXDT5G71",
  "key8": "2RimCCE3NdAhBegTtpJUU3qmoFwsztLT2Zt6KuaWLt1J2pnmDa9KJALJ4UvQQkBnFwSjyPnckmEA1X6njkACwrMN",
  "key9": "3cUb99rRyyXsGmfZbvpC918spSFNkeTysJg3L3QqUBYeiKVxR6uyXp3qZdSpd4dpVY8qoEskwQsLp4mxSBVoJWL7",
  "key10": "ADKj5z9sd1ySxN56sjTizVSAALXbBvJgLgnSa4JG7N8xktEm2oHLajK2p3nYcKMqNS76uXc9zTft6hfWHvbgKCr",
  "key11": "45EVLqyfzQSWMwmx1AKQHZ3Hhhd4xPUZvPAxjJvQsm12TSD1UKUVMwEPnA16L6CvJf4FqVGFXbM4izb223xsJaQh",
  "key12": "5rnnY2Gj4Q5vRmoEc8w4iY948JmZ4dV8Usas9mSLFye8J9KkqiVVH8VXnykL9nEfiKogtEaL4Nhx4E9A2JBYw93K",
  "key13": "4qGqeCt9QBnA9ZzVGjiTRAoM8tv1bqUW7yGLZSzo1iXfSbW1pmiM993BTMEVgCxL8t8PYephSzAuHQWScdniX2Xi",
  "key14": "28dCosr5BtDArFrCg8RYfMNz2vRDq4cMTpzfpu7BQk4T6tBNPr7KNJmPBVv5MZGi8xqZ8LKjnQ1rQJgFsGSM1orn",
  "key15": "38NwnkNwhZA1X2fLg3F3rYSU82tDSQw2oJdZYaDXxRsAUrYGvnng9pFGdRyXyMoa4GjhN2vBhGPXCrqAp1Rmez84",
  "key16": "5XRjBiE8ADh9QQSWs2vreLZkdsmECRX8KL96yafRud8ZYdHsu63KAjw7cAzdaYtRQQ8ZVCMevKqHHWqqbVCydiq9",
  "key17": "GtKzdYA9rccW7roEMnFbcDQUibR3TYwgjqSGQuwTqnGoQvPrrLcpeUxHpnbRBqyMg4fa2WpjvsuLxzR1hWS2hyo",
  "key18": "4rBNyhu29Jap2jGqaF9KsRZMdP9Pz6snzFVj1rcjRbgFwHkdJacKm2WKFmwVuQEdZfmSZqfAihgczpie7BxjwwQL",
  "key19": "bervd4ZbAFpXKVxKkn1g7SkrEmu69qtAkAPWtoRVWv1vyab7wkUA2sqR6MRYSnjU49UU2pjRz7C48186NHG7v8V",
  "key20": "5ANF7tAyq8KxkqE3KZByN5EesnXurAxaH69arbAXaXv3PFhS2qFb4fEPaurLpABeRVVmvXjrJnit7MXRJEaXJBtj",
  "key21": "EMiAJMFuBAhpYMHz2mxeRowYSEbXbZZniLTHN4SbCKdhkDvmnLiiRwxJHk2NE8SKMujKeFuLE8Ex4woCABw6B47",
  "key22": "i6W2LBLnsesvWV5a6As8z2XjRJ6hntySqVf9X58PZ5xGc1814ffoUu1sFazHPcJFR3Pnqi81Ae1p5E4KPDcVZjZ",
  "key23": "tkZSHU42R8MfPFxpydbvy6P9nFCRT6sDy3y4c6cDBMEjxujMnm5xF1q1iGpJeAQcSxWdWSNZCA4yfSTJrb8X1Mp",
  "key24": "2ambRQXQvX8ruGekjKdLRkfyfWJgHQBbcrHnL7ogm1PrZRJfvi6JnfnuR13sq1vhyYopAziyZMSqkGiDJEP4Ep1B",
  "key25": "4FvgqimReagbm7m3cgo5oVXJpkkw9B5jm3XF7NcqyGLpUWRtVcRm2Mu4Z8LD2QQ8WuwhNLSPEao6Ea3fuqvLJ7nu",
  "key26": "2YiegnExdbd8gNsyjVfswo6GnfSFEuyeiEawouPYKz4Sg5b1if2gd7RbfR6HLPYGwruuRdMeZZxcjDzQuKmjPed6",
  "key27": "4z8psguJfoWZC5rVKAgRR5i4eQAAgdTAarKmKWX9Bnr7EnTMwb9uFGfjyaqjj34YCCDApGnVnuDBGELWVvtwNoEi",
  "key28": "3TMUutNhhLXy31imzvJNzFa3Q8T15acZ8Zdf1W2yaUX96YdUZXoRvxUQRUpLQSXCs4qogBb2hm65iMUDTerWDMDt",
  "key29": "5k64MGwhF8Bivxnt3V89e3imbEcnTH4n1PQha4vCEnqKVrNS8rj1zG44VXHADo2A5qZvuyJnSPvoCJBrrc4quxuS"
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
