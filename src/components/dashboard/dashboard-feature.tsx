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
    "4ohRmijdBSxvn6UXeiarvcyonCKFESh5j4pAKM7DJaMjq5KrVP8sc1EsppNfgRAJFkEJaDH6vfTq9EKpYqbdrqSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29MtQa851byXT8q3jTiP6wCSJ3wDRJD8tEnSGD4YkthfpW1jiiw1M6Gqs6hVMwwyCZftxnjJMkwdY9Y2CMXyNtrW",
  "key1": "2WnE9D7Ga32sPGHf6FSNhUgoENtfpzj4njyUpttqMo5cYpffy71WWXWyDphgJLWdE5yRj1YKjQ7D7ADXRc3odm9Z",
  "key2": "3GdAVTRGi3c4oQXTKHg9UgeXQmNnxj8sxcwuFT6w9YDzqsAEKu3zutrGeEdE6ZCons51eCdcJNwNBwyjv6jdUSdH",
  "key3": "3bbtixkxxKuf7cyVQLDWEE8maTgWdeqUs1V2ArizyJLyXkuyuL91rct9KxRj6Fw9XQucwXhVphrdqv62dKxMcJTS",
  "key4": "F6DfJZHCVcAzBH8UhV1SpZAhpujY7mi1jmNN7oyHwh4yaPLbLUZeQiSGS7KfbBaEz2P2ZHqe3JddnjPyCmztYwh",
  "key5": "5mFU5CEqDvrtBM1Pz5T8keBqwCDyKsu8wRUY6xMVPmLEXYkbEwzKc9bR3VteneFM1mPJQqvMqF5ZA6VB1awDen3n",
  "key6": "xGxKz5rmygm1fhFPoLf9Gw79Y73Qgo5HV1ED1SD841LHA719HZeb7Doqo3Cz8pA7h7VSYxNeATypsBLwTfDwn8w",
  "key7": "2TDcUyt6Dk9vRkUkbDwyras2jZxrsPN53tauhfesMUHECuu2k7fCK99AGPvHgjbZSP9xMzNZ5DVB2FjoP8u7MJNg",
  "key8": "2XJzi5gMFa6jvfzkC2AfsgsZ5QB9XSXXfgrrAmJqKmoKQY5N3hLedJHaxmXBLJFAnevaLUHUWf5S2CF9X7Drgw57",
  "key9": "3f2LztN7B8VBCkYC953P4wYZ7DHeecvvvkNLLCiRhcpr7SMgCTRFA9aj7Cp2Dzmo9KXhk4dipFWrk2dyk5JYHara",
  "key10": "2fnLNYuLbjohJF2dyqoq6dERyBWmy1T1fcoAwAWKDDdtzxq77sk2VQJTvSM6u4wxjUaNeGU1NKw3UFhkvFHpPwEX",
  "key11": "3ajo46Dp3aDqw9Jj6QxeLLNuq3T6YcJr5E3uHVHUQTAhg8RCgpcfad6G1AuSBYyuKBjgY6V9m1as2uGExvBANsmg",
  "key12": "4askPBX8zoW2q9AwiEZc7BUsN3ksmAFMksvRQ1A5g4A1Yia2m3W2PetLpGjZDJnwNe1jPgd2bSXhczcNik9EoKe",
  "key13": "2EDtRFExD4FoQ2tSuHXeCUDVdng835NG2zY4y3wJg1U1yW21EcUt98jSpHdTvpFHvykDcQQynupDjQztpMg1mE8",
  "key14": "5QznWZBGfKAHcgTHML4faFopsm6Bgyt2ftFLrc4Dq6qbXfQRTeFHE9nLzn5BK22BsU8M8Df6S9k9FqocBTdLzhpx",
  "key15": "4Pw4KvRbSCXpUFZoNz1pAQWP3dqZW9vskY4iz6iPVC2qtbvcWvhS5NbjU7jKKqRkp8BLfGAb8ddYnRd1kJjj2C9g",
  "key16": "67ZwnvgK5LPs2sHLFbcuD9Brgp4MnjQEXv2MP48rBmRgtoSjtiiH7FiaCvkJKQfMsBS9KgezMGL4osa9kv1ttUnz",
  "key17": "3rtmhTr96HSJu139GfKMtzYzmkUQmQuGaTzDEdMLq6XVFLHa8yFJVwRCoJAL7274ZMf3gJ5MbtTYg741cqtdwHds",
  "key18": "Sn2NpqQYuyhFY1FVFAwA2ncGv61A1T7FZapBUVTeZBwZyswqDiHeKkuqSf88m1hy5kBJpeVtrv9QG6FVUAWMzst",
  "key19": "4Edac5DhpwEEeWmsN6KtdJeMeaYgR3Qrc8j6hQTQg6Nj8bXoihPL15MqzPKMgqQKc6UFZDAurj2JjiBPbQUJwUba",
  "key20": "f6D51v334kLbAvLw5uqYKqvJoWmuA9LVtTuoKbdPXsM7QvtjSxdpMW2chjeRjTy3vA4kBrVNTZq8G5iJA3SRY9S",
  "key21": "595g3dehWRLUCoVwuQvqJzW2PWpbKaQXmTZU6ergetRCwRM7QJaeYoyFkLE4LCU1rYmS9wTd1c3ojLgfDefwS7sn",
  "key22": "21yiPaUgDhZoT8k1ENfZx1NoZN5vixnidhTfisazFDKao9ZZ5RuRypeibLhyocYJ3mLUQEJJX5HJG2VPd33HcQ6K",
  "key23": "4xZ7m2Srxkh7c3PxWF39cTGFTa14kNtmPUP5wT1Eq98ucFQ5Z8ZTyKx6jY7qNcN88bFheyuxekpDrLZoNgp7igMb",
  "key24": "5kbhnZAde6PA781WiM6KnTB3AWTeLDjSHL7JQBgt2kiCU9Lo9nETGWMNbB9PnUnixu2XJ5PF83KVQR16v5X2RGZw",
  "key25": "5WpbJLNfXyZ8FHWG5kXwjEZeTo9Wik2bB8XaM5uFARDGG8uusngkNMbRqeXnkKtBT9HNh59Xac5nuGHqe32Tnhr6",
  "key26": "4Z9HiktuU5xcR2rrYSwhUnnFrvqLPfdNKYwcWduz39yrXLrh4q3jfDcn7HFKmiiup1SNr9JTg8f1iDUkSgRu9LAP",
  "key27": "4itd5Kj2SH2CNC8i8YVuXRYnUS7dwY9X47WjUgR9KofwbrZK6szB5wuWFcy4k7m3gYJrNaabyBGFoifTWHJnWy1f",
  "key28": "3EikzsDmG6G1q1wCqSj2dduzzpRb3JZPEuJTGT9imAk3YEBsbkTY2Sx7UtbmLtFm2pR9LN6qT2gjK89dXc77BToX",
  "key29": "5CF9u5kUD39vm8xFQgPrvjXBHkUYBKieTPfVbQpPDPnDSYSzRV69QAALLb2MxTz1KSkCSLoTo9PrCd83aj9gQSLG",
  "key30": "218mNPf1HKoHaxuD6ySSxgwGrgCSvzqx39T9yL3FWhxrQmQ7QWKtY7E3zEoUbWrJe9ciy6zQwHiuhaGTWzPHWBqE",
  "key31": "5jDZMfugPR66vU7gD8y57XVgaEXA1wRQJa2kTT6jEMY8QBnekhtVsSwXPvhHD27La4qddUs8XUqbJPeJ7N1UXe8m",
  "key32": "316FBGi2DAa2UyydLuvPSWd3CHnvvjGsdEYgDqJdqUKrYq3AUJvfowhakJ4zLfWziFw3j2iMQ5ri29pfyCzuvH1n",
  "key33": "4yLuDqXCVWbEDajgEakoYqXw97EixX2QAB3HsQLJVRJkEt3ksioRXQGPjAs9yztdLqrXywgWEEsU2BC9V7J9HxVC",
  "key34": "5ip3re88BvwC5jA5reYAWP78RhVyWZXfweRWqYHtRTqSzFiou2buGG6fSBxQ5rXz5kmL26S8gQf4j7RLGiDs3sLz",
  "key35": "65C2c7uq7tBXfFbaHPsVgsXJ8kiKnP6RPbDEGeZVf6xh3vyteWYdwZJJFyuUs39vSnPn5hfHwuXtEXrv5p7XTagQ",
  "key36": "3soh2tjECo3LfYUpGs6yK1iCocm6AHWiJ1Y3dRw5um1eGsqE9QYCeeNDf3nYvC1TVo59FiM6s69kz4A6dabb8AJL",
  "key37": "5fKEjsxmrVNN2FKmL3MEU4mN5DxnPBj2jimVPh9AsguqZbeNexnjBLpwkh8ZPa7YF8b33WZzK486C9WvQuvdwfDr",
  "key38": "3GFSsGXYymcviXBMr6bHu9u3ygCK8bvYt17CFTMwV7k41sRUiLpNBUr1EUaMy9hn3cjwpaV5cCZB7SPFCGNhqakL"
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
