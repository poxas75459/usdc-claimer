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
    "2SJhcbv41bDqiuHhgCPnVCPBZJrWRHkZ6TjkmJK3noCgctsQSicxuU9xzPcA22CQE7VSY4QVvdFeVAqz5oXwbqHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26VN69hLcFceSkRpKPZ8e3qG5jt2Vh4qzjTVEBbnEGSW45Jy1QoJoJbhaUF5i7Vpiodi3h2HgorC9jziadcMcsub",
  "key1": "2Dp6Ay9PSdfx9nAxaSCPPmbaCaqiGyLiCrwqnUKjA84MZSscVPE2dEmUWCKeu4csT3ekNWjtfn8F2SbPVNczr1T",
  "key2": "2RMpzZgctmK9bvKnBHPnuNyVsZiVsnvLW2UJi1udt4tG54TtddBqYVYwTrfpMntGrjZEKnsg37sLxZXrWMuSmeEz",
  "key3": "dMB2xEFjUcDLASVio47L4Di6bPuv2TvK2NhtUcBqQZiHQRCdXsYyGDtgttBS7DpGBDtgPSA513BLTEpBjx82uUa",
  "key4": "5zhykFbqXKighZ5dkxZmzKVMHKcGpC5hvQUTQRU5WnwrsUp6JmhnBGbkWnN6Xq1QdBDDG6JgLYUY1kjZqG8g2Mij",
  "key5": "5e2YRwEmzMq5vgfca6SHUUi3VELqoouQZ78ym2DHsqmzXS5w6d4C8CUQnexcwrohxyR3Zkz5y2rFoZAKCv4WC7dU",
  "key6": "RR5GimBMyLDn2sVL3RbXLbj3kXSrHQJe3oSG62AoEpz4jxUzkbKCRaTpDaHk212LRMVXE3E3iUrGTVu5X4GZPWu",
  "key7": "2tViGeVwWvE2mUnJWwqar6oMTgyQAPKt5Vi6unBm7wHvH8iM4MiCh3CMtzCMpHHmWSVFSmoshEUyT4q9H5gUnPod",
  "key8": "3g8ingik8GxGT5mSxY599FumP7iNwAAwaaJRq8Upf7dq1QManZeYrtKhzzJN2ZPdvWbToS2SbQ3YsR2qgBcNgH23",
  "key9": "5YamXGjPH82L5uti67AWuT5WkNhtihbCZ4LXVhm8Tb6rg4qUXvga6yvQ2mQb72CW8ERK1A9TwfmVssKNYEEVgrzG",
  "key10": "5tS3B4LAnf8jjkLAm37hHn3XzER2mB5NFLPcj2gA5FciYY8PxeJGiz6RXDZnt6t9UtyzMsGCZcupEvPGbN58ACzZ",
  "key11": "5EJcCWvuzSSEhFwzgj2aENwLVrbyFK3m3wmisbdLLGGkkSe54o63HLLAjKFFGRWNEC9FgX9kK1VZfcb4ZPNJKgB6",
  "key12": "UNw2bbc3CWXqxu286LsHodtpeiGcbWUNgamByn8c8Kp8aBvfysUxb547RzKFB9WtSwRLMThV8JZfdJZHwvZtNDj",
  "key13": "5icUPtvEqPb9MBxx3M5TBwR5sqDMjYNPNJaJDEZ46CHGYR9akb1r4cvKRwnv6bJjyaSDxxkK3qPUtFqhR97qNQnN",
  "key14": "nVyRcXxZwTuftGULBMaeGDzkNSG63qpm7GycLMVDfEmbpUqMVdkX6iEuF73jNErjmJdqqPybCuGJegUGoKqtgmr",
  "key15": "4HZoFGXoS1pjw818jmnRky9EVqe9oaBHSEiwsbvmP4bYwkCtF53eHyr75igaagbUPz6HdqQFVWUN62wWbgTjmu7R",
  "key16": "3JRKzNweLTWnTE1rXVpNPQrjw9WijyRNspHFZiqiM6ERCDroqWURjfzETtT9z84jg98CbwrTSMM38Csifo2bb79J",
  "key17": "3UvfXz449aGkiq8LmdmgdVKTjXsk7oA62Qv7k5ubwYtEHxbS6ZJTBKn39KhZjfYJvp5xzC3YYCezr492zEaaBFzs",
  "key18": "2Z6QPKWjFq8EqhuFDAsv5xzRssyjC3vpgv5ZL4HwQfwCX35ex2wZ8AJzHGu3oMa5hGzT4pRkBkzuH8iX6GACuWCK",
  "key19": "2EPj2LHi1yFmPjyaCTq3ZLrVxMArBjMCreFyfqVZtAQKgJsRNiYco949TvEsPVE2kQgGk5JxcK3U5WJ6YSHT3myq",
  "key20": "23n7QZ4guxZCDMoiX9VwqzNJv3QtBAWfefdWBh3taZSis5vRSWek4fDAUDhM6JjHqcsHGxTtVx4WgSrgP5G5X2bm",
  "key21": "qqpgpx7E4MhEzHSwQJwNicoAzNpUGn2HLSRtHNf1USApHo7trp4rA8WqFLvFGohsDRyeJWptBcpiZAN2Vnd3hZb",
  "key22": "2qC5iTgtUEhqpPgsXnhqjJJYqzMHxWPWGf93KcvPwzf447BDtpLLbctFbrG4JicAMwboJV91Thn15sqVfZdNHRcY",
  "key23": "25v1HTRJnRxcDjhaaxSKfniLGvqYBXHNewgC7pEpi6A1FijvaFuD5sgZSkGpFDyesiF1JFuntsbDRVoqBbbeaAu8",
  "key24": "3yfSbkWdkmeQiGQgG4PYPMk4W9FrXhMsbX9b46v6Lo2mne64GFn7GiAjfbXyhNbMwPif4v24tupDe9Umyxxnh2eM",
  "key25": "2sgpYeQrfNqvrZDT3kWoJQKj6TAFoPrapNTSSe6pR49Fq5oHVxUcitQQqS2RNktjueX4g6v1Pyp3rND9aCute5uJ",
  "key26": "MhiVWnwXkyL2w9Gc9zmxsJ194vLfW8M3G51a3huX7RDZ8F4AshaeCRWpcHkGH2uCbEc6MCSKrpDq6MBmJ4iMjZ2",
  "key27": "5eK7G6czbYDNdmXTi4P2ETFNZEKMnAof9kwsp919SKvjeeDbRZJyybyF8wLPTzbEQxB6dAciqrKGhesWBjLLjn8v",
  "key28": "4w3PKDG9mMMYiK9MnRM4z6hodFYFsfmoCUYMq8PvJH5TD9xr53amGTKb59J5KhFP5569NtLbBhM6m9pgbwg8fUML",
  "key29": "5VwHnMJL7rdPAeA5Rry1NoJZZskKsWfkNeAuSQSnUZd74qfoF6fm1Q3a3Ejq6dKLFQ8u57VaSSWi5odFmf1SS4ba",
  "key30": "4h5npoSxaNjGNGeUH7nTHfCtFBDP7KJK1aVJTFZ8aKY4HPGRTeL4qgbUNUTtqmL9yC7yu5DzTBavncMvvPWdS5n",
  "key31": "fwFH9ftgwgEfupKt73t18rcNErYt1DxnSoHoi2YTiqcAHkXeM78dJ6gyfp4UnKnL1tAEhJmZ5hM3Gh5XT8F853h",
  "key32": "3DKWSKemBwvnNgx7NK5wfcgkgQ7TNQELTTAgfiQPR5MfAWjXb1LeWWZrQLCmrYxbbaemqnopjKbX58ZVp2CMho8Q",
  "key33": "4rMJ3b6M6Chgpe2AZd4GSMLjGyMTPP1n7jAeKcZquycepxmbd6FZvB3Z9Fh2GCrHxRsXkgPAeGoWqyhg8Kk5tutJ",
  "key34": "3dieYgBjoSsuF8ZFsJPCenUo3idv1K5pqqnsQk4mRRrSqHktZLW2XbXB9Mni5mhWSYmeaZqjJjGzWdrtmGrDaSUG",
  "key35": "3uUrdXG9ZXzcrJgqLz5Sq5ku8A7HSZN1ALn2xCbxmEcNxJCaLkLxJMKpxHFuMNRRB6DmfrPKB7cQJkPrDwSgYDV8"
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
