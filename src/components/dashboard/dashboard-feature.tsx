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
    "3seSpbGh1QxQshYqbKvP17uGQQhvUt4PeEM9XBkKFPvezuXRfC7WEY3u6cwook619how1KSZfR1HCxsYBHwVUJcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pjkw82eq2yqhBVgAbM5FnE5cXv6pLfYvypLsKPhEQBuFV29qx15V6khWPE4E4FxXMMSCWKgxs3bK4Vjw4eCWeg",
  "key1": "5CMWVoRZuRo2zhQsjyCwKeLGJ96xWBsCCyBR3PthETWERUuRTxTJBygR4dgbkzTjGd3A8Pcs1V2KUex2koTPZ7Fp",
  "key2": "5c7kXRXXmt2ZcekiwLMYsBwEgemmQ54bYuPMUGLXQQbUUmMJn6U6rvE7segdBJW9UoBKaKV5B1wcHHnaoxnRredq",
  "key3": "4fc4eEqNwsUNB6azRwGFQ15mQL5u3q5cEyPBQ3Ch3MAeybAKJGKhVxLzGQ4d2rtgXxx8AG9Y3TNDrfRHGveissPX",
  "key4": "4YbcSpoRuSxsUgTTsxGZee6ucc6u18u1BEmZDWUyXGqJQbBPTSEEnzHGteCP5WRp458Sa8XDyJhCnxhhqoNs5YwG",
  "key5": "5PdC9MkgjosQQ6BTU9fxp8HcTW4cD1v4kF2NteQ3N6svvtpeL72Juu7N8EkNBVdK9yyyAQTW1dkQmDSGbRYd69wm",
  "key6": "5QRwGEgygKveQqEJ2fP2e2Q4JxA6ZPtZiFPDwAgMGqtxkhx6E719tPedewGjNH96JWptnryAa6H5VrLwxL6ykzjU",
  "key7": "5eFDMpqYLYMAvSu9cBb9eJSWUgsYYDpa5FaYqSSjnx95mPH5mrkVu3f5EemQyLmB7c6ffZhJFp2MzMVewnxCzoKM",
  "key8": "3CXEwb3Yc5c3i5EntCTLWWH92WomACGSpSNg8QAwmGTHMoaEHBRiRLJ3DkuHvDQGnaMwGimmrndvcCKQ8wGSAD55",
  "key9": "5KcqXL7fQQESYHPkv9Pigo3ZCokXN95aT8Yyq5DX1mV1oAdGSfYeGTtXsmgfQvUBYjf2AviscTtGGBiiq1gThS9s",
  "key10": "5kLaQn3ohRxUkV3WKoTKQXFtRhEGn49dHonehwjh8wxVsh54n9a2ktvLeWervRsRac1GHEe1DctAuz5cmN64wboF",
  "key11": "4Tawwiyjysz3EXsjWQWLWdeChdw5xTPP3kb6ba6FD6szrhJeJQQCwfcUzaLGFRbDBap7pBQQvfX8Bda1Xxcst1Ci",
  "key12": "3rmybsmQrCHwpmFgzLdMhpE7CgQkqXf5uQNyD7zvyb2dioqxTRuMU8QrpjranTCDutXwFtiWwe9vKR2H38GU9VJG",
  "key13": "4ycjrAivq2owF2m7oR6rPwK1ULvmRNRVHWYc6xvqndqhsXhyC6uWnRQHsV44qXASGFxcqHkh6FGiN1QcDEqauftf",
  "key14": "49MqxVnDEY2UWCGPT5JdTsN2cqwfgJxpTHfTXGEC7Hifwon2g7Bh23Bz9gaQrjTn5Nc6H8NMhvcJEvRB4U5irQ8a",
  "key15": "33oR35g6M6v3YavTCb66ysM38ZsFqU8TzprXxHRew3GucqHrsFZLWVzyUnD43Vha7XAr5A5A8Ed1FuEdoziouEpz",
  "key16": "3BhprDhiVcA6v1DM2YBjnmsLg4mJvtdFhjwjx2S2WGWNf9LaMhsrHaUPTX7KneGMiKvNsWaUuVM3qLygScdSV6hQ",
  "key17": "2Ds5hpBS1cq7ZE3vQX8E5noeMabrcbBNs1T1Q6rQDAycdsYAv6ftW27gF4FjqUVTyX9RSK7B5JmQ66JfrJatweqK",
  "key18": "mreqYyagBiFzSXxFvx3C5sdFoFVCMsVjqGfZBDy4BYQbaPbsKu6EwCQGowd25BR83K7VEqZgGk8CxQL5DtCnVdJ",
  "key19": "3HHRuwDpXL7BRs9xF1oRabnRndWXYTU4FvX6jQAFzXijXovT6zn9DM94WSzUHqNUZXxpj51iKJhjEaSy4sDnyw2",
  "key20": "u5MT3bMbzxo6MEj9jZYquFNyPz2WJ2UY6UHeWbCmP6kNMdhNcUmPMFtJJ1WwL9eGSfEAM2QhZDZuj954RGj9G9J",
  "key21": "5oigMEDcsLExa8uiJHdboN4YNFxznwxCPQWX6hCBNwqHEXdFv1LHUUbzCDqJTTGbFriTk4PGvJ65N4r3RNH2Bbm4",
  "key22": "51t14ks7Mi6uBsf4zTBJ85K59fYm5K16jWkoQhQMnZBUXCNjPdDNkFn8vfmQd1bCnu3FYojA61oMCzVyroH5YZDT",
  "key23": "65z9Th9HUsD2BwPkQ3SjGtCjhsSXnn8U5ETaHYhcYQH6TY1nZYyg2aGLiHt4vfuLV14NBsRpnTEvsbikfh5dVL4F",
  "key24": "2xG5nHniNhEYmNiSAAp3v3XE9vptxPyRsLaPAFqMgS4o1L5rnAFfrKgmuhmD4d5YXXeM1Wz2euHGCNMRUxkwbmCH",
  "key25": "2whJdxc2rUiGWuTwCedNiZzxJR6bEfRdW8G4FcxAGaH4ib3kKhXATmVUQuvgstqENgb6y7m5KHeJh5YA1jT1BkpC",
  "key26": "3uqexuBZrPbcXPHt1onp3KVqX4Lr6oQefTND4VoqSxbHyz6CJASJN3nS3BT1ATyN5ci6rrxMHfxai7Y8xvmUjJNb",
  "key27": "5fAfNUCnfAiaXaVepYWKWoQXbdM3VJoNFxmX4FN8apQojQQPBpTTtE5aDxtHhbe6gHZofBbwLfF2zpvFRHoJA1R4",
  "key28": "33x7f2masdKuV33VBgpiRswUdDAZgzh2ZQzzzv68qKS5LTJ6xaTuHhvn7DKt8GNVBEynvNNhdZzfhNLTWEcLEGS",
  "key29": "4EWCRQNcwT6QAt8uhYBD7cdR8bFbqvXcwnZaxCVSchkABg7Y9goaxHxrdgX8V64qLjoSFbbPGunGyQZDcFNv2xAc",
  "key30": "4x2BQCCoivMGb76Pyi5aaPvYc53of6ChQsQaGniSjkmGPx1tU4eK2U1k91euBr7iPzu2iGxbc3QLSw44aZwfNqHQ",
  "key31": "2TAdqSuEgfjEzXm6fBBaed7HPdKDVh1nHP4WDoiirifeKzEwT74sej5pShi93r8gF3Mht3fXZ6jXUftwWH2cFwmm",
  "key32": "2Xx98PwXiFETG5XCAF7oy5pRRd3EEXwxPpVC81W76B9BstDgdWV26vmJtXTDbJKEK9dcAVwecRxTdjWubXJKkXM6",
  "key33": "3gMDDXfLDAvaRXhpgtiiwFA9FHizN5FDp3yNcLQnUwm5cLJGQV4M1pG8StCPo5Aezi8hKdk2w3dvRfd1kJcWofDU",
  "key34": "7pivJsk7WPV8AddS1vnKJEm1M1Sdy3h7dSHN5NANzxMXY5NcyCN974cMBJYvTTHrSyA9f7wGhjdFf87RL2Ye714",
  "key35": "4rnfurNeM1XWT82ZcvGbZWfa9Hx9XBSSVP9eDSvSzABrM622ixGTA7fhfCW6prvjKYBeMmfSfbyaWdfjwHNef9kF",
  "key36": "5jSe8c1CJ7sY3W36s37BY2Ts7yu9kHB3Mi29ArGpdkTRTJ1LGzYNkzae1EaPmjSDrkmWy6xEy6iPdNeXGLs7jLS4",
  "key37": "2wZ6dzLaSFFFZMQpAuSjnPQBKuVjDp9qe6qfUfH2sDQVPrrdDE5QzVYFDSFz5wFxpu8YhqjcJ4iosZJA33oPXYvX",
  "key38": "4C5S4KJBnz9YfQA8Z5VQfKxEwMBiKxUrJViREuyAxxoEEnEWPVkoLvyXTxg3cuo6Phca8GeobCGjNEDnamzkPvvN",
  "key39": "3ZJwi5PFDrq6kvHyxCkxqFuZLo2KBvQf6G7qdx7dU359DnvJ8MM8wvqdGze8qWE8yKo57AJytK8LV98qKAFau3xw",
  "key40": "5VP9daVZPJCt8g7YJPGZ7QAnjNvhXS6dgbnCyWJsky7XNaJ4iMzEfnycppYbvRe3JjhaNN7Fjb7QaG1bgRBSiNUR",
  "key41": "5yeKWJzPFsZcz3pCNvtQ1zBMwjBebhHVAmB1QvbkNsxNdV6mXfkQXHRKm2UpsQq19G7vLjGMBZzTMyFzFzLeq2jJ",
  "key42": "3FXbiuXHpKkw1hwVU7QDMBEeG6g1fiNn39oqZbjAhwA4BCFqnbPfWNPMXq5VBdZGzbNkv4BvQpiFo5PkjEfNXpSs",
  "key43": "657FFSCbaxFSnk5QSw1CEyLRSyVpewBBRPTuu9qbXgHvEz9mCpgZ3Pe9k9ZRciLtCpViuCxJJJVwLhTAYH29943f",
  "key44": "2Ax8uSvZveZmHNtSyyj1ZMJxaZMTsddts4CBmcByVAUUV1hBJQMCjWHiiPGte69mPrUqoKfuksVvXWMtBfjDNkpM",
  "key45": "2Uysj6b3d9aJw8XKLcUKDkvNfZ8dWRG3SdBtWHFYrmJTXBvU21tqvmSR8GEmhnDgMSyiqxEV9fMi1kouRTnTkA2V",
  "key46": "665A92WYdhRNbKSjbLsjVYJjBXZ8QZ9CU7vPqkNSAA1eVExRfS3c1ko3fUGVEFpNP8gosSQNZwzWpTLBoZeKyyZg"
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
