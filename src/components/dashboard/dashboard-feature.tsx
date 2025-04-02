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
    "37N89VyX5XPnXfTA7psZPCkQGjKkeiaE19EeoGmR5UohiCbgk1AM5J4qtKDzfSHQRWTWjGJDtNk2CssqX8TmLd1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BhBLUuUxxhU4MD1Eaqg6Tob4EFQJKsg5hNUJoMTzDUEL1G38AQtwSmymphSfCru3sL7q9naru18VbdTE6KYU3No",
  "key1": "4jynRDMf7rpHcCXqkxAPAMSz4SFyeKXsDqE6PLHcMh1KDt3dDGRG9SutJ51ETY36T9SUXMgfDQDJJPZfnVtzm3P2",
  "key2": "2S1sB4TQ8evWzhpPxT3ZxX9t8q6zUiUeptsX92vYfnKAkkYq1i3qrBzTW4ZkwJw5QDfSYbrLkVaMBVRGssvi4ViV",
  "key3": "2eJx47JQGo5KtYMq8hSSzPniTmEFhZhRa9oJ9gSSXkgsaGT295csJqcgjfH2FveR8r7yWsezmA9FFpJLV7Cpuw5f",
  "key4": "4j75PycLNvzzNuwU3LpAJYkLYTvMyScrUJdkvDcYTTTQdQJiEfwXVEEHrRsWkEv2cYwLFbFTW5mUNNJ2JhUJWu46",
  "key5": "2aZmegjVztiTh7kDJAgjxHpF456ctK9hRrmJrrLFNFBhMHmvy2tu9PnyWvW7YFyCQ8zRrnE3wPitbE8cWD5apBiT",
  "key6": "4nHpPN9MCvroyeuhvGhw8kHihhU4yUBRpiWAKBFfrt4X8ydor8SVf9rjTxKfZbmMm4tDgJQGtHJJ55TAokHhkpwi",
  "key7": "2Wwx7Cedx5ncy6FsvZZpCGxmhtK9RSNbhE4L7r1iKdmaAcBSFmMRonmZ5hsdWCrGbGvVusW8rkQd53zo6fKC1oZ",
  "key8": "4vHPULE829hgE74kTyR4mNNR1hn9r1T2HQ7cL3U1umAjwaS7NkhCyTathsA4MrovHooEJEDoYGWDvGjBc7hMxgHT",
  "key9": "4F5UDEjyDe8tVhnxRz23buq2ySQR66NHidR4bCTjhe6rHqNPTUuPQVAMXmqKC7S2mFwT8d4UqVELi7BL35LzNphS",
  "key10": "3dDcLJ9CVCbcacLAiDBLrep1Kuz48ujD7Wyv5LG6pDhu3r7mk4VAcsvzugTeui7S4rXr5m9SjQ2Yy2qKAyDkiU9U",
  "key11": "QnMjgZZmDWaYN65Kt7RFMUVYeTU6VFpUNF6HasAgzwMK5QTU7FcC8vsavL7tT3sPQeHCdJUWmDkKiRFDJmb3aBG",
  "key12": "5RgknbUdf3FBw9C1tVD1962ymoYuSwSQVk3kxcf72oHVsRiHuur77JTZBZr3WJnmobguq586siaMxMSRKr4NPGTx",
  "key13": "4yCfCMxi14d4W8Zf4QyaChgmCBb8W4uQyBnrZULVgQJXJ5HQMaawb55gz4rB37BHgyLW2X1KUgWaW72RVhqoyjn3",
  "key14": "42JuU1nc8SiWNjZ8ZnyELBALU6CzNYxEUBh8t7nC9Wud2CaMUwQXMbmh6usGZ1rR5Tr5AtR2cNcFnSjuEi4zBef1",
  "key15": "5DLcVo6Aw1H4MbfRebHWLyfm9JoxSqE8imrjygASEjDFHsGFVWYDmeBprZuWM6kJEXGZRefRrdW28P7KGJXpVDuf",
  "key16": "3xW8qehXSETpxdpn2nhocPwGFKrcsudt6s2uDn8kG6zAP2pwZo8quCVcAvvQiVEDKEAokJ7bE5d4bEs3UisM15JN",
  "key17": "3D9uEkE7xnyMadkWJgeKJcXaz4MsdXLPc8aqeXFmVChG2yTD7zRT8wv75puVRicqUt715NtWi3oho1io7JBLFVUd",
  "key18": "5Hv13BoAKUydzt34c3BuB6j5Bb3fXkA51F5Ex6mcRwPPNxnA2Q6mzmXDqKamLhzbpBTCByHgrXQfDdQrHxipcYhV",
  "key19": "5uPkH9aXHFcSaKG2rqo6e2zwC6obizb1vbQpuibDPdGVrocGbc55XDavHEqFn2vzf6ckGD7uW9yzpzXerVBvbPDF",
  "key20": "5HwS2KBwmdLCwBNm7sTHZEHT1TxmNjEnwNKq2RNa6hruvgS31xYnK99CAjsqZXwEwYg5WjxJXfhABPH7tLfYynb1",
  "key21": "4ADNGnAhuQ8WbBHJXNFnNotMaFepfXz3W5dRiB1MP3eXY8xoecvpF738hVr6fqkFsLP743jyQ38b46jpiFntostU",
  "key22": "5cnzMJZL4nuqTHftRXXn4xYAZHR7fr1dGjvKNZ1PH5baEWQ8xYrn1q1CJQZNergzAqwLswCptWURX1dCJjaR9NxC",
  "key23": "2UJEjT4js189wfJbrD6bPnPUbCDaJHDR6zHKjWLAQtiWikLn3hoCBzSDmB9ZcRZZVkfR6RXfEgdV4uGKXgQsGaKd",
  "key24": "4dtPA6UVbfUBkqKgJ6DbZYPfUg2Ho7rLtwMqHjTXocT4Th6P8AkEaf1onJDyK3rxQHcPho6iphK4qx5tPQYtZVSs",
  "key25": "5mDkUQQt1pYv29Zpk6ntmXAjz8Bc3rzTRo6hQiYhiKoA6Gp8f39joUWQsLwfiYxU82GKEc92vLFEDZLxtK2YG97b",
  "key26": "23e4wSBLG8J6tW6xtndPNodr2f4RdTBYybiW7USHDmS68Mm9LFqWEq4jWVZJbFDahuYL89MhhEypTYRao7RmQarV",
  "key27": "5f5Z8VoGiYHKcnLGXcFrZ53epDoxjTJRPzxSRRqFPJS92bAqheRxGtaWRDqMeBbhdLr7dLS2JHyzLSnwSCjNsiAH",
  "key28": "owcz1UZpWiiVxxLLUDxNdgctAG39x2MuPEm5VNbVSGZRD9WJ2atkZDQmCySqAPxA6Z6NFnKZumfHb7WjzatthXv",
  "key29": "54Qqxa2TkGMG68VzNhAhQ4wjrPjxYmXZ5u7zMoyVNKQAmhU5iFkdaAzR92YhWtkJ7zrgSSCwbgXaLvL2AG82cK8a",
  "key30": "2qUJx1ZTkMbZPcvBAj483ZBCFi4KcG1UQRNqFWMQGHPEJHMGhQMzyJyZTRMBr4koCg7e3TFRWRtQqMVWXPidDmjt",
  "key31": "3L5scWAgwwYaaPpip4kCjY9FkaEiNQKSuP1jYoF72Wu6nwvGPcqBbhPToej92mLut5G7kNHJZFDDwD3aVfjx3oFc",
  "key32": "566wRD335ncb6K58Vjbnt3T4DRLE6i3wDWpZwniCcpqMa4AMJW3kysefsaN5sNnooYHsm2Jd8GeepPeVYscx8nfU",
  "key33": "2oELJNAMWCDYsBbnpPkVpJwBkgcwvjirCHjNkqoGpBAH3bNWnBWT5DZ2BCom6S7s1F9aG7LgXZCrgXVMShdbyYfi"
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
