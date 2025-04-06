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
    "3ghokryBHtk8w6yRRkj4KmabPSASi7SKDGpa4WBRsWiho5yLH42sbe9vEuxbLSRf18Sr6ySmvGFrGhwaHJy38b4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EwoeZgVyL7QshQLN7Ug3tx5pQ3CGshMPbhSB1oDp964boDtda9NLjvtj9JR7M3Q43uqQGps3TYjqbVRQP5MA7Tp",
  "key1": "58gKt6kj9wBz5aZwU9AGHU8yRhD2UGaqE7XZ1KYgX4hkW3aWT5mBS239vDbMcgyANencLHpTJK2FNWK1WjdRUzir",
  "key2": "3q1xhFewV9Mz72sME32NX7HDUZrRL3TJfoK2nJLKERh7jm5zuDZQEz445jPJ4kDNNmtekbzGeWiNBdLqjuNSHHjP",
  "key3": "3K9KdXA8iWh95WyBw11ndWh1aJ1DkRfnh1NtCDvwdeGf44pyHf1cr12Vv8pXQpgTNLoBszxyEWEzMiVLgg9SpsRN",
  "key4": "3vNmSXNqY8QzbYgR5Gc8QUR7nwKJk3r5eKxjrLYQZovn1khfwVVurMLyH7dDh3n83o7i9rSY3DFegYwACv9RVsBh",
  "key5": "5Y8Tr663VjtXTN5z27CH4tSVm2fJDvxFrabzMVowiNtg5xaok3NV5G21SxUGD4hVX1UEj7fvgK9keq8cwf4NdoEz",
  "key6": "3HYxQhyz9gY82vrN3Zf4YFHgEoVbK9Dv9kCa7nMmAdkRrrri5QtwYTk9irjWHzWStCWqNuG7bYCawBtq93khUKEB",
  "key7": "3byn8x4fYTBEaj95UHJ6mcx5xknGQprCg1Bqxf7oxFS1grL4yufk2QpYji7jvDh16gFxu2gJFo12ZdCi3xVUvrfH",
  "key8": "2WUzfnDjz65xB8ynz98kLAXV2pu4psxyGw8NYSq4kqbiQosRFPgjFGH8rQSvSwgmGmc6SRdyqh2CEuni44dY3Zat",
  "key9": "47a7pBnHVnWKJjgqc7mHeT3nTVjxLHWhqY7S7BAo7CxqNpVgxHGSH2SWYm3eEBtpWP7rvpUKZcmdLoiUjR7KoKEd",
  "key10": "25PZ6caeG8wDDMKsgTLvLfqZaiWvVqKeh2mJu5pSZ31ZX4cAKHcLLKT4EiGSZxeHDhBjca89dZp5CRjHn2gAdmV6",
  "key11": "3FjBTzL9jTU2HNWeNDfQG99KTuVwczYNFe4bwGjTDmzcHoYKiXNYjbkZeLxf9R4uaZxGTo1NhoApmpqwGS9fKewj",
  "key12": "39s4HfLwDdFsD6adDix3DF5FVqASqMcWbKbhwfQsGvCg9NxkDtFUMUfjL8R72SnVJTgqsGg72zGZZLfTWX411Fgs",
  "key13": "3higPShLWTbxqLt5mxovaoPaLZhsP8XQsp4B2yGWnNJjAX6VQcPei7GzSUU1viaQzBEWzQUameE95Yz82eZU1VZZ",
  "key14": "64Y2dB2eAuVoybQsoL3MStz2BVSkxfVJyKfsHUWebqxXxrVjsVug2dnNWMkCJqUab5dhV3PZDeXeskmyEXoHSzP",
  "key15": "31J1oMJ8eEBR8xLV6YM5hQkV9xA5vPj3SCmvkmHCecxz8QotUiGZquJsP1d18Sr9MhNSTXsCvUcKhxhdPSAcL2xX",
  "key16": "Lpcq5LHvEfkvE89Wz8Kx8j7pG814e7iSXSj5fZye6t5kLVy2WBJSCKG7QbHk8qtnEsNhERUf2xzZjeLH3qPPFqA",
  "key17": "2oUETSN5oY1qgt9dioqDWGxvzD5i8XZis1PHcXY6s9ifgRuJTFq1Bn5FraMf8T4FthgNvLZhTjfXVfS4kn53cVEi",
  "key18": "4tsPToBzLLG59kQYGdLLmBR35Y1tMg922cj6F4jgySXBwa4v5RM7DvSaeyy8kQQzhnPKYqPGXiCaiv6YtziEvh8s",
  "key19": "3QotPsrf2aTVWsc8BMPsK93WJvayxtqbcuzx2bxnTRfEL36GAohXqcshttYw4PRcaT8xkv7xtLe8Asf4EHMcMZP8",
  "key20": "3WGJwpJNKAtd6PWMM2hSaVT2Z92v3ufgzrafb3oezCaEsRdHGVBBy1YERRM7WaNZoTxftiMJ43wWQQXTp3SpdHpN",
  "key21": "4rdxMobWXyjapMJwYiW3H5KN1mJF5kQBT5dZvtE3hksS9vTJDauZhufNd8Zhmfw1KP8656cok1DB2pFFeqdUTmsm",
  "key22": "393w8G3PiTDcCX6n7wMc63c5zMbqUnYjxLDQZ4AtRnCxAHB3WzhLS3unhSnqy34cJEDJxQzLzCNnWy29LAZnYUgZ",
  "key23": "3U66PK2jrDuuDD6oHSMtL75LsmTZ3qWwMuiiHLr7F3qwCo6sfrEUB7eZ3RSn5MPVPCXJk8qX9pyAZjPfT4R8AdEb",
  "key24": "5wT1vRkQX35r8nNeN6fKdWMB5VhqTtbUq9xHZX4QE74rAUwHgTwn7dvgQWcMghDceXcuYr9sS1E7D5aDaXSRoREe",
  "key25": "4Gvkhuk1FkRifVece7U9h21KqDz48Es66tdt2Ue4gPMhnpcHnRu23nmadreVidV2rJaSNewbRdqsW2RRUtkHRQMp",
  "key26": "5ohab2VxaBeFirmfaWCTZtvpz1L4UEsiMfP2dr3GrN9gof76z2NK46PWByLgGSYm9amZBvh6hnLvT9Vo9hYJ76N7",
  "key27": "2pJhUmJV8bD5Vkxx7qfemFPTHS6ySYUgYEEjGspFvbkTVxhZjrSMQZaBEunUB1S3CMtVv1rGmtvfLGuTVUHAAsxt",
  "key28": "21bfPkZ4wZp25j4v3C7vi8AkcQPBFaKPTEe99uD7TBR6cLD6tkocTnFieB2jgngBNehq5d5SCwK6dZfLwUC8oh6g",
  "key29": "2f8hSRhajDpKYVi1WDUnpLaoxXKxieJZv88q2WWxRnEMSALFSu3B7U89jyXNVhvzrMxSbyTGzKhrMVApxqrzZMXH",
  "key30": "2bBxpnSnSNz2Xrn7KYwK5nEH3iGhZBJkUJPCBQFCySMNyKeZUD1q1YRugcAadn3qjoe3E45ZqqbXMeZvMRj5pTfM",
  "key31": "67FPvvjz8EUSdcbe1UrHCxP4gSrFfGdyrBbUzo7vfrbUc3LRpdbYnj3KRGEqDN2F96S8Cn5kLaMfKA8mBMkpYwfj",
  "key32": "451w4bA41ViAfYweNPahvvqmfGuL6jN7KkPDVdd7F7kiwZf3LGRcUfLCjLata2A63j2jNcPvjcbW9mzUMfNXXf6j",
  "key33": "38LWsMbDsPq1tbhxsRhjeiLoxSNJGTdiyeKWPhWh1iZcpS2K5zDaQt9K5fFFzxL2JhV7RvEwzsGTyFcjiyZdi9xa",
  "key34": "4NVGA3wCfi2fFivQffEMefwB9XzFLGH3STPawQxK6ACLAu2iCYWQa3MuVdjhNxRvFTm65bopDsXC1N8c9tahrTKh",
  "key35": "4NERTEZJPqeWSumMWMYbsERNYo1pLN2cnY8zwzcXoYtugGMhd6YyHnqdeL8nfp3XCBbrDxEduuSPXPrrEZuuodou",
  "key36": "2CfznXtrgoiDqnfGuaMs71LKVp7ZAZQh57a3V1uCuuE4MXbXhmjhdphrhoWCpcpS3CeR1sT7K9e6dgxkYxkjTJin",
  "key37": "3ucNNePuSLiYTDZGJcyHVL5ioVDqn63sWbYAnc1QiiyJVECqXJ7BxWAiJHZJMwxq2UAbS5GkBuNu7kP6NAaDXw1G",
  "key38": "2ki9znjc5mrtcMwLwez5kutpNwdsbjQhEc17ciqZJfXkPobD38L6XJWXKcXipLQTnSmkepdJx9xSpqENw8wtVD3C"
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
