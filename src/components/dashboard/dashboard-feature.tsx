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
    "2RpiQYnQxG1qD5dJ6hnbVvNjqWWHCE5hcsq6ZmC5V9Ygnpu2LCViuQ5t2SVZhZKdthNFaNZFr51f8CebYYJZhjc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FYnp9ijp7QKUrCSxx4qDojaGqeAgH41bmhCN8GY5Y12Mdxhy8tQJMxajQfbr9dFXLJY3vAks4ouwNKTMgdV4LcR",
  "key1": "67RfX88d1vU6hpYS5jYyFj6rPvSh3NKeeSp5GeGvFry8pth9gyrw6pgZgphMWmhA8ZuXDbevSRNBJTweipeHSy17",
  "key2": "2SbAGERsP4ixcsCGa1eYDPGgW2UyyE8mKBZpNiYnA2eeXbWB8UEPm9zGhbjgygeemcd9EChRa6Rcrk6Uu4BpzK4D",
  "key3": "4itrFaUPG4VQkPMfUDXFkvRmNuQXVDnhVrgRk1CzmfJdskenB9rHWPcak1GgP8kNYLzzDebqiwRfhfNVS3U5LipH",
  "key4": "dtHVoUPD2h873Y5c9xCbQiSB9ph97HgT9H46k7JBdzCz2yafyFy5CKRVwp547B8sicZ5nzFXWnBTxBm1jD9Rwxe",
  "key5": "vt2kbyQZW9Y3yiHnAi5jTSuLvrsh8YFJBoSoYXuCByqLVxpSFhChuQ4te1kfnC5U1ZJsPuRRPFXdjexUJFCDSYC",
  "key6": "4U78TUbSkTo4r7KPFo8qUjrGZ6ncou4XNVKA8prwXucMjPh9M4o3qJbF9hpogrJcT8mkDYme27rAqT3HgPjGpLYD",
  "key7": "4BDSnrmhZ2Nuy9KeVJJb2z5ujkZSdePjHeV1dzDnGvwZWyeRo5RVXhHzNY2vNJyyveg4AsLfkRGfxRMkJixE7Fr5",
  "key8": "5PJnrN5DQyjXihP5CyrKGxTXVcjvzU6oi7Z8851NkWZf2gARD6DDKi6ESKiGympNayNb8akK8srYArfMm7ei78dm",
  "key9": "pii7WBYt5RzzAjDgENxr2NUzwTHw2rktugSNyaoh86VE1fEBaWroZ5c97DhUwUUzcu1W6aH8rXB2RY6BSa1ZVNt",
  "key10": "7dAhRC9o97oy217bgH1hhn2g9gvbQnzi1B6dv1v3VBJKeLjA9aLw62wNC2iiRgWhEhawXe4aEafTWfT8mpAYwRo",
  "key11": "2hJPaikfSVVj5qzMQRcNH682LQ6JNB8N4tN2PaFNpVzt8d84kyegGteHwER1BeoM9RryB8Mo41qsLCZBXPsNVoVm",
  "key12": "4aLTv53Pzu6GgKzrcPPbutJzJ8Tm9UJ3mvbLMKV38K3JixNGUcfPVL8z8TqWbdGUC1vEX5jj3MsqJdGgnKGoPzvA",
  "key13": "2BUfuzrXUGCwDt5eDXaeG4mbBeCqMQPzfgu8YVvsXtJBxRryCPfVK83NU4YhAq8VKNmjj2kv27VyWjd8MU5pcDeY",
  "key14": "iKkr6YZARBbMBy13LRWqcajTU79EFbHyVs1jtZVZ6qiecveNn6vQDM9a1DTrGZfiy4bZ71J3hVEraxHLrkwtKYk",
  "key15": "3DJcvdk7mu9CFMin8MMEX8dtskNDg9n5cCdP3CLutEkboXQWHP4fr3An4fXahgAf8X8eCejHz3kHcyCzv7ZWwSua",
  "key16": "jExzqCZXCkgWgpJzSGPELrLwkDubS4B3H2hHNWrPaWjirw39jGbA7uDmHQZgoBrpQJRzDs5vRKQ1qdwfPposEpG",
  "key17": "2GZ4c3XTdYpphx2nRrVW22gv2fNwD9iQMKpj8N9ywRTgFB1fmGB5d1Hh74Y3PB4wcBRnGYb7uKxZ6VrURDDuVE7d",
  "key18": "382fDSHHuH7YSxUWmBNS9c4d3tbEadv57hUSnKYqkwZK4TQ7kUmY7mi62Y1HYzWBFK6UsTV2mxoJjH4XWioGJfEK",
  "key19": "4QuEwYdPXo1LNBNyPAjREjMDKPnPa4KDNy5ZTXp4DL747yHhLSQcBiCpXUWD7WzES6u6g4HF6uNiegiqF2sWoML9",
  "key20": "F4VHPwwo367Pi181oRRgSbqkaF1BJG4LYtVa8dHktpamGDHJyF9toMWCeRU3jmXU2656tM2UgUMt1XHdcm2CU9q",
  "key21": "NB1yinrN9hNjnB7931in6E1iDMJ2cWx398yJVMCMpMSphbfpBRpC9kZF7zWSJ5kEQ6UWtk564p23bmAesnPxWud",
  "key22": "66KCNCjN9WDnSuzLFxTzUeRTtHnncmTkSWKcDDuMStcnZt5KvR2sjHQCb9SiXsujLDidNiD1Q4kQyVb8rwoq9iBf",
  "key23": "icE2WVSv8ZQgNKfgnVNTWt3aDJQpj2uViqEMS1Tv5YqoJMLAtBTrJ1KXaZemeEHKaJTfePU4CsjxminVHzXWWQb",
  "key24": "3pFUngSoR3wuPqDvAsGpLqPrSBz3PGhL9QQRwSwYTxQnoEZV7Mp3f2JLfVeE8ay2PNsVbXFuLVZqGPz717tAtv5z",
  "key25": "3cMjv5XzybDozqiHMVEUBymiCDdxoXBqHFxyfzXtK4eYuXhK6xCX2cj6hsZvp5s1APeq7eAzBGsiRnC6RC21uBpo",
  "key26": "3fUxW7BjBQNVULsqAhDzkPZuQ2upZ77fha8Tr3Kh29xbxnGGyCfvKaNXL5968XLATXjz2ss4fUg4coeECjcS3iV8",
  "key27": "SfzkJ79Xg2bCvm1CNpgnL4F7x2ch2FiTageHkqdjSJxpRPzB8BT6DEm5tnwLyGXiXgmRXTfgBPNVdFDi7XSkTjJ",
  "key28": "PAHfsEEGAjEKe4ufUEik39ZQbuwunMCj3Am3Y4R3fJ8AyJN3fgPtNkeAyEZDvJB665JGAvVvDpmbjiypDMymsAt",
  "key29": "2mhw64Fo2FjMz5tTmtiSufhXxvcrBnhRE2EMBuhXJqnRiE5D8o2TxcUS4HnBVRKZsCSupa845U5YwD4yiCH71o67",
  "key30": "4WDQesve6x8eGXJaJvPH8HpPVpuBVuA6TeLKZRT1UJumPw38pnDbPwpjjxUVgFKcyrH5uV4YehcTjRqn5MWWcQ8C",
  "key31": "2ARy4Q8WdP2y534wZAWGmSA4jbiXXHE1TKW4bjZw2BW7HfF8kEZgTNyiry9VuPn79Swqm42gr1PwnTe2tZRCdhca",
  "key32": "5qkksJybDC7bHX4HuefhzeCK86a1D4E6My7KCmyc32nz8mQiS3EuaSuA9prdSn3Xb6eyZqo2rSdxT2r44NSwodJV"
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
