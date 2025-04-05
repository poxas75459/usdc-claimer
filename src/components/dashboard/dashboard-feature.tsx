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
    "4hgK8AZsxaRuRgdJ1cw2UhcV6pTnfBrm95yEoTQMfzVTqPiLNWVgVa6G8Dkq2J5ozxhhcwgGtaqjJEYwXCDwUj8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JKX7PkQYUxysK9sdh1aqmxhE3nL4LW6AqFqLUv4wHL2cznFvGWY8TL2b3GpocvUEV381NfRt3fhHeXNhEEw4Mdh",
  "key1": "2joGRRhJ71iRXQm9GRvUAf4Dg8ZD6Euz7Z9tPGutWSowFuZecStvESVGkSt21fQ6Fj8VUW59nCPWjZ8omEsxrZWs",
  "key2": "9xikVYhwfiEBa7hxs68MW338igxs1QHCaSj3QDn6ibH3kiEKDxoX3ZVLgXgPHTRcqZZWcmYUYwvqa6MYqxmpGB2",
  "key3": "3gGK1AV5xXocbPn5Zq8hYD8QxCBM7qXcukrB6RWAcpnkpvxKQGJpDdFsyzvMsvUxNLW3twCaMHSA949PKEsWbDrd",
  "key4": "23pFT3mNnvcPHPCRh6M1c2YCstAyGNUtYTSeW8JLkgbnMug7bSv54MXpNfQanEW5A2m7Cn4pDTSJyBbu2YbF69Ki",
  "key5": "4aHTZTiGfFJH3uRfNSisqTvVeFf4hG7eV8vcv3yjeBcafTfBbVLGEc96wyYZDSmBqCPzvBK72F2qew2SQkVG4CrU",
  "key6": "2BVHG7owmJzNmFzEHCw33D31VVZPcqRFiTHpq12zeH9ogWQpNhboj25ejbSyTrYhh2L3PE6owvCcFpXhUJBAhurv",
  "key7": "55faiXiKjAv916Lf7NvvTZXYu1YNFTgxzYCrikQU8hHnXehXXDaWSnhT7Ef8fYNp7YVp53BMFHA44kyVhSKc69KX",
  "key8": "5mUxSCh9Boh8i5vEfqhGhJ7TRX6t7WsM438mn5KGukJpXfRMLmREx8RKxuWFZ3BKyEr3jLU6ZyuKyogYghGaEvNU",
  "key9": "4yjyasxWyjq5i4SqeBTAQ9aJ8ymezaCkJ99rMNiUSo6MYc3mKkYMnPnLH6NXpWAQchge9pm5qALLp31oqfo7FBTi",
  "key10": "2YySmctochCMmpXxUqB8Qo3V9Us5wah3wUUyMphJRkdMJ3ep2epKdn3LbGo5m9hpD9hHdWtq31HUeRPUZmKQBjdw",
  "key11": "4ydGGfLqmCnxWuqzsP3uEK1UHXUNygNZh7JhfpXyKXpsExLDeXK3FKj6HQGNnjcutNp5gTh5Zd8RYqUvySdY5Wuz",
  "key12": "39MGQCRoEPrQ2UT6jb3arvyih75LwhPDbU6BQ7tozYeoQAzy1KCdnmRf2VBz4NDrkmTmhNYSJ449HRaRytv3wnrJ",
  "key13": "4v22XyRVaFYeTv5HtNMy7t22AMEE89ATNHZhoVem7NgPPRCpQ5AjmXcCHz7MHGnyH4PHCMT3TM7XhMoe7gWy7EUV",
  "key14": "LnrQdwfuS84GMQQo9WxTp9dNPAmFuSzfTEqbC42Jqszk2CGBgbh6cAKHBfticev6ZmiADMQHia4Fy6zvJwEPa1i",
  "key15": "2tFxHiZo37itMQe83x3Juj43Y2F5LxYjJn3ioc6aCE8L3onT7NMjpqiekYXYcfoQ4MJr8kzATqdpmB5TV3AgYaVU",
  "key16": "36F5GQyHNbb6DAEB9Wj54T2i7MwgmtPPM8rzgHpYXX38wsYxNtLvps6Sq2LeWYv8CApuBRxMpt5TTD3n4FqBH1AV",
  "key17": "5zNEvC6nyfj4b222gdEaWUL5HbTnzcBW7MEqLFDPxcj86RQEwfJYvjZKRTofA6T5Kt2tZinjSnhuZHqYgtFxg5xS",
  "key18": "oYiWS72FZr6yWW71nUcA6o9YdVDwJZcgsizySzXrzcg8dcMax4ipGA7HvrQwE6XfgHas6KqwHawdn18Fy3PkTfu",
  "key19": "5K2dT6rDM4yZJ4KHyhDBiJ72u2J5LBxZ6Cw4esZtoh1eE3toKQDQfjUETQk8WNHXZM5zhu5wbeHaRrip9wErGKah",
  "key20": "5mpXMbWBCJmnSX2do2ZfWy8qzKKPcPg34qNQpEohL3rNCnYcnvRwr4uHit7KYtPky4gTtNuL3pNnwyaW1hG9dkux",
  "key21": "3cCWych1omH7ZeKbZ4tGGm8cBKiNVifSxGg35C4X5KdXRAiMkzL9dfwK4yTU3W9CVaaUF2NA5WdXZekQzNKENB3X",
  "key22": "4KhirRqFzCBJnu391pr6hUpPbZafRo69CUqdAaKC8YFMcroV8aGKvQ7ZL6NKYbV5TdFhxLqYZi8ZyqA1teRtig6p",
  "key23": "42kYEWVJc7tMqu9SWqxo1dt5Y1vU1oNk9zNj3TA17qXZfDrnCyczug39FoNFBco76wujY6gSBpyuTqv2SgH3FMx6",
  "key24": "2mQnsZFLfa3eM1AiyjBtrZ2ernj2nk8wVaY8L9Rbh4URigNLroVwFgpnSX9p8fsdsD4b3k1GiuHTo6RrNGyEBkBv",
  "key25": "2ExV3if2eHCF1j2TbfZXkit16RKb2aPyZhvFswvVdSf3owL3f8QfdfZQCHqDsdxVPZS9fvuazxx3HGXU1D4V6bki",
  "key26": "HLWoBctfwbZoA3YpCm2PgUNf4uGiKx3SdckqSoLc4eE4pYFzYzx8gBfC9iu4u1BkVrSoNVRC4ZeDLpwb3P2YPfR",
  "key27": "r7yxuFGx4fhzaDmyeY9VDMaPThYMSjtTAGmWGugCZX4JAkMrmju2TiviUQsBsx7t4FsYDFZ24zoKwcCuhBrLGVb",
  "key28": "121P5HnJNY3YuFWRa3f2swNaM37VNpkbMi43LuCoj98MrmEYakhjZwyGvPSayaXjNo1zpsZSbEhi9RBPHbafU8Yn",
  "key29": "4E7pDtyEtg9xV8DbJVx4LGtvuBQWW7erpsnVajptz6tQS7CtHwrRMS8rzE7m4yJkSqmiBNMbAiJsmJQDxidpNgRj",
  "key30": "4LqvJjKaM4RKU9G6GLUUYgphBEDjLupFwTxLXWyEJrBiU6boDZvaXmhYPZ2vcpeREuwX8Ws1WYSZTU1SXve8m7Rm",
  "key31": "4TC5LFb37CjgMqoXu92GH52RruutN3bnzCQ3qLVMZFLaMBAovvouL2EBNyS5jw13ZneLMNNezR8omFqYmXdh2nwa",
  "key32": "24YHAaYqiKZTUQM98KH5vqdZRi6tX3dm7RF5y7qJ5PKqWLr2cdY6t6r9bH4Rui49GTrEPZ8HnNckSjLm8deCC1s1",
  "key33": "4nCQAishjDQvecmDf2Aseko1fazatk8nTAqAEGmwX9vVDREoaHAjjAdWsw5NATuTxKkQNL2uhvXR7dTUrvWhkfUj",
  "key34": "5sD1NfBE5huAnssNpb2jtUPbgGaj5m9yJSXA6oiayXyhqJmdUoLFahF4ENqgxnNLfwfpuhcxeoS3ihV4o4qeZTeD"
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
