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
    "59S1n2eMcc3Kw2a7dGeUvUi8ySDvo4KvJNB5sADDFSigZaLpjgxZuUoZ48aG7hPMQX5Ju5fir7ZKvuJpDDZfTZo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tSeDRD7RHH1snDUvz1pVZ6HjUPmfoUJUSZtkWdm91rHEXEASdvtxapGbANaXT5B8bizMUkXDYLNay8wszHjiLDz",
  "key1": "2Zu6kRq1SAqdk7oo9N28GYT1VtAffbny2Xzi5mCKH3tsSkHPC7wUcS3UD7LnFDpWUVu3ss7sAxrdmWiTTczHHJLY",
  "key2": "5WxVKpCTWHYr7qSS7vWnNe3jz6qD4LP3DjhzESmS6EMVVFnNjmBQcdpsic6StTYRV6YRwKEDiz1truo2LAsQT3WB",
  "key3": "57LJbVXc1qFbiUP7KUQ7RLmgkVS4TaPQasdaR8GfsY1WCvn3PAGteGqgbgnCjaLr8P9jjWgb95dWVusHfmAtvtgn",
  "key4": "4hyiXJJCVTL2A1hHCRSD8YCYscXbxPZ2N9dA7Th8mBpwnvQ7DK5zNaroMdVu9wC8VLiVjk8YL5dUE6WUQLi8fJJ8",
  "key5": "3HPSMsxhpd8dqh8Hn8xvCSHh7hsDTxfkXz7eTw179rwP81ELWTvFbRfnSyHgAzvN9AdfHSvmWToufMvx9tHMzSQt",
  "key6": "5FihxPMEjvo13y82VvTXYuhMXJJHy1tzqcjvoqqwkzxNCBmdcTPjW5GoV3VrSwfTfN5TC5nuhPeLajtFgjuRqD5D",
  "key7": "BETdSmHpkhphkGyrNFkXYahLyiFWxTtWNoeCJZ47CYU3y6W4sE1P2uiQJ2ModENqDNQhZWoxjeE3ycvvkg4PJY6",
  "key8": "5xXVHUaaSybemPbrZJyvGojyKQ3RaEuyDFJYUjmfE8H7bR9962tKdH4QGkJSsoGJbkVVCyDUPKawJsEx4LDu5Zdc",
  "key9": "5zW151GLkpUFQYTYRoDN2eYRyiex51jGK5TK63h4PKRCR45zE3hhfZXTwRrrikYrMkC2fmgRMgLBapPzX1gRUKh2",
  "key10": "3Usi9GtW7GhufyHwnUP43XbPCyvYfyiJyEgn3TopUzdocbott8t6tfVEmn8jxaGDYsTDjYcbpq1WbzirFR2xH8sU",
  "key11": "4tGAp2ZJmyJnNyduHjprjXMoHFeiFVAveDzY2tKeahSECLL83LsvRAGd9EFwhujjCbfwMhexgW7MuSCsrEy45ctZ",
  "key12": "42MhUfxNLi8wJXwDQWhhPWwTqp2zRGvARr6vsz36HjsWpL1zBZzGvSxJMDVgxY9bsqQDNWaR9sHK68iayDkSyWyD",
  "key13": "RAru6ugChfhdymNRhPt7kLi1eaGbBvmin4pHahDqrfHjG5f51XGQyoTnYpuXYbSd6Nih7b6PXGFBoSsQ6jnXA5L",
  "key14": "2Xf5i6NuWoNJ1mpXZszXgx8vDbpn8yp7HEp8kDTfmBpxUsq3iQZgfP3BFYDgGcMdUGDPyqkq3SbPu1U2V4Wkpe7L",
  "key15": "2oEh8eXx8inxZv2D8Hpe99wjrnCnFT9hGpKRJmPD3aE3hKzTnMhC3hiTvsMvWhMgbi8pmBLcqhw5C3xGEFPpm7fg",
  "key16": "b63h3fy5zUnK8bqpCFm8B8hVxB2Hxt4ZkzPz75Wp69TEZXa4aeFkEvoyZxcxXc5B5peLH9rqHAFN3QucwmPBkBT",
  "key17": "4TM7u3QkBqVYcuktR4425z97361XPp3UyBWkZjrWvnQXAoxnxe5PLxhoTQKYQX3PnCkPMcb4ZX9dkuJGd8ygSWFz",
  "key18": "26H7QvauYetF7HrS9CF614moKdK2LyniCPfvV2J5aneYTWTr4VtZhhKg4PJNPcks9T6GfRQAqCDMCUCXZvEcPjaP",
  "key19": "8TfsYyhTYj95sxEMG4pVVCnsX3KSTjH1VW8f7F6NdBS72PQcp5ppqoTavZCn9QJ5NQX3gHJcBZKhEcPLSq5X7eS",
  "key20": "5TAnpzHbMhRWQgK3m24A7qfUtjAnkvn79Z7XXWzSMaYj9haxt8rFrsq8qccgBhq1Hx1VHe19VeYAf87xfo8XyjM7",
  "key21": "2z7awopnzt48ttoDWjYTR4zS76DM2PTspTKVworE7KAgAFfEs3AArfA8jUqCXDPYUP2UCM8skPaDQkuAmgq2os15",
  "key22": "3PmuL6UCBZTPL4PZfCjg3uTM3Y6jKGhMgjNkh89zreHVCHRJNeMiRnseCDq47DuyQEG3A4JZUCLPVJ34hCiCzbmZ",
  "key23": "JaxHKesqrfoS3CXu2GPCchXznF1bnKd2zcn7zTNyoYGVBdbXVf5tQzACfKoMM1pDMGiErNRozRrGTTcbPgyfD8X",
  "key24": "4q3SnFaX3CaP1djjjHiUtcKMsmmPPowDLckShuoZYppxPBwRXUrrd7hvgC4RGtwZ2aAZHcpmgxgmq8PtRVzLS5UH",
  "key25": "Uje5amDBoTfzGMByT9b1UkHDRhrVr6CdiaKZPHWyxeA2vkxnBjB8DZnSDekNfGsBknQsJNwPW4fVcRy59dHxPEu",
  "key26": "3A1JqiASLMrEwMsjoFW7NsgNDwSjzLSE5Pd7vLDotxxw4CCHFEje6czqC7bJaJJDcJ4n5Xc7tk5ewbXq7Yyyr4sh",
  "key27": "552ymbFPhXJR9TJktK9Lu84rKhas7x3ivP2Sf83fDCMhTKnwGZrGCKSkDFHRodF4Y1Xv3rxzCCT8avjoCsfYfdQb",
  "key28": "2fJ5WRhmnPhz2KszCwj3kXksx4zzd8QHyyeMPxJEVB3Zwu3eRQicvJ7dYicCbKyE19PB1mvysjdpQbm83gxiqxHo",
  "key29": "2W5YjJHAfqCYbuWnR29qnpd4j3KF3Qmcd1fSw6zrQ8jR6rp5Y4U8yHcTmvJBFCANNSoRrC2EckRLn3EurYyakymp",
  "key30": "61WiCd5cedvR36882EHmwhDEKeuRzXKn1pQzRVXJj4JQPQkDF6zxRciTRhGLWFtpuEh4fCrEJbFvHH2WKYdMXsDX",
  "key31": "2mc8JibaQAVXQMGyMmL15wBja5nFJxqQye7AecYjTeiJQQxZhpdoLdRf3TjyiN9fHn8ijz2Q6Hptw5bK8XZTdZQM",
  "key32": "9aosLLhmpJmKxzZNpwP1CY5jFQwjdmiR5hffQ6wYbEy5nza3UqPAtdeX7WtmXVBtfh3MQMeaGc6KJdvPHRL71hh",
  "key33": "46avD1z71xU8wvj6sS45nPfoxm3e2hqjfYVWrKiXa9Ayt9JVsE94Hmx1CDabkeYUcVvEoG7rkdMqjiypmBkYKbtJ",
  "key34": "45p2axRnwh5TvAoRJqZg5zCdz86keBbA7SpPjMBi7pdLBZPgwHQijDa8KXBifC19i6mNqkwB5UcGsPtMhvPnVK6U",
  "key35": "35TvzSn2J91ZWryiWFDyAc2YkSRqUWyuytErCdrawDycfmD1VoDF6eSkPzKKUTxP3BLKc2mX8QXkoayjbRZNftgo",
  "key36": "3wLsbCXAGpduqbtuboAakKqvXPgCR1Ghdt9Gh2nimbLUUiarFC7k4ENTdLKVgnTKZ7Dj82dPvzSZ7AYXPBQsG9pr",
  "key37": "4z1etJ44meFurN5TJKR7e2wto81G6A75xNS5XEqfaykLKmm7VGLvDQGuHWPBiDYXnftuYWpe3rWZykeMdnnpNAA5",
  "key38": "2xYs4FffBfKT6nvr4aq1uFLqrijtzmocc9z9e8J4VXTTSSDTazMxqzi5zFTALt7htA6ktDedQMUCZusXurDrnpMN"
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
