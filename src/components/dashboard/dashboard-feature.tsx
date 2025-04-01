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
    "4hQwdP7Z12Vucr9zYrdWEPKFpTyttAi9fAHAZ7k6ismVFJDhE3ZbficQvzDCpPLDMQgAbmFAiBQVe4C8FqXeYp2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYrtkWuS6kd7UbQiYXe3BZbkMRRX7FycJmJ5WQJLURtwEDTjmx8KWEkuerEXW8ur9MB4pGrHfUQhRez25o8wyid",
  "key1": "5T2iQY55F6ucNNmsJJznZPUj6cTjA63NZA67mhiSqnRPKRzaMuPtJQKnB9NHHmi4hg5Add8csVRJUhgg4AApz1pC",
  "key2": "3J2HwkRfFBwm1e61x9YQs8M76vQUr2FoUmNLKYuSf3SXXUMHYo2f2R8Uz5A4H9nKDMqjuX2eVU8xpDoVJS8wpvjJ",
  "key3": "3eSTfcbHT2aaMkL6HHeJr1fXGHAkwRWL3GfkGLvaUWCfqJonGguRq9CjmiExmWjGBbHyKPjtMeh3MMHwwUMykmay",
  "key4": "4GnEdYv3urNZpoR9Fy4AZgr9C7Qw4sp5a2xbFjyW2FoKCWaSNENnHQjf947qFJ9vDqiRbTyNNjFJpyUxccZdKKM4",
  "key5": "3UCBSNKD9U6vooi5XFUj6UQXoTS9448ZW2tgT7aoTw8pRo6yVfkNoLJKZkv3ufhy3CGZSQmyFeM4PNfdN9Mkyayb",
  "key6": "5Tf2ne256GduQcP8zNw964HpFECWYtynwrBoRtigNfZPDzXWHnhL6ot8Yhjxvhr3AutHgRPYFkxdoamG8Q9iW3e4",
  "key7": "pYaX4U7Ld3LbhzmEXqz3tiYzvUS3mgvjzAXFRwFWiwRZ7Vqt8A2CeFnzLXw7F7TW8wMwcP7f31BKDyYcfN4ikGH",
  "key8": "4xy5bYQQaeREzizynEah5Dykx4gKyfYHvGi6VfE7arx3XffnUTHbPDunJj87HadRhDESFFrr6uhmm5YH1tZNFF91",
  "key9": "4W1k6QkQ8TcUFr8irinBdJm29LBQB2wseQ8Ptrbx6TFhyToXVFc6NJ4BXzZDAs5JUkRC6Zxjxvm1VfLi7nzJoyYm",
  "key10": "8uFxwTPq8UkBKt88KXPtWzce8Frs9x3AufJwswkX4HrWgG5W6r7Qb5Ym9NQpyhpKBVZj1bRWVEcCXNNtkBLVuFp",
  "key11": "TMxzwNGnHJh4xB3fo7QgABM8TPHUPSsK6seXvyqCeMFcR4vMcY3DUoqHEtyA5s4gaZSz5rRHDy8Ebvpy5XSG4sd",
  "key12": "ztNQJE2SfrKRiKSdTniFMEbHMdTPTR93qNxcGBGPzYDb39JL2ER9FThy9zGuvpofLBPvCoeULexshhfsZtHyRAK",
  "key13": "2C94iTM6ARaR2fp3u5WRuBM43xpUZd61emR7GahMvQ9Po8QkFbuSf9Qzko65YAei4vE5wijVE3nk3RTDfYFLV98C",
  "key14": "5tPVwX1tEY9XfkeZXwe5P9RKr1pfp9S8erpc537bJNWtE4xx2Ti4AJH83nfYUuG5hdbKsXULVrq6W584D8TXFHAw",
  "key15": "2cow9K6U3JZCLjzZWexFnyzi3ztvWMwWoMSTrskZhosyN8JV9CsQrDzNHy62ScYpUuCmXhfFEYfGJbBztTMcCzTo",
  "key16": "5qTWSTnd82UyMX7YSEj5qRBWBxtYkxzKZcJ54KZiT2ERrMesAefCDBVBemmiLJYphrhCLLGibbJADeuoobJMa3s7",
  "key17": "4sra7sjUZSkYyCtjKBK8nTDV7cjRhKhVKdBxoiQ3zmk7pX9nJhfju84ACub8TCu8oSmPzVNbDRw9bjKkrE9S2Px2",
  "key18": "3ZKnKT1VyVZkd49XA42RARXApqqL2Nj9qw1c4ZoYVE3rUrMjBk7281T2crJTP6uRJ2BGsaF2EBzyDgBAAKSD6hSh",
  "key19": "5wKtdJzwWic2SixWmrkzfGwZUCmZALnz68Feo897itwYXYt5aL1iZMY7Ei1BoiCHcmhATL6Ab1j59zADPZ1haDp8",
  "key20": "5QEve2RdaE14snYdB4HGULWuu9AKyAaMyVfFjj4kNLXyqREH671TbmQyy53jGqMrpxFa4kG7jAqeoN16oPz44Ckv",
  "key21": "3o4acAiamknWkemdRFWtNrQbGmqKVZz64Ya8jBMtHApriXh415UqpfDketnvg9CLewGSpC7vbqzgE6PQvJoLyhjF",
  "key22": "JTiHc7EaeEE9zxyTe9VtECoCM3Zz3BsiJNuXe2w29CLXrCemjTP6DAqt7rQknzjAvhpzbWFi8tRLmx88QQTpzkC",
  "key23": "5iG4jyqPv3quKFtyejf2wz1WedMNWh2H3ZuDmEAJxxQ1AbyNH5bfTCVRTGY8Gmxue3CGxoHMa1mQftyjc9dE3Lh4",
  "key24": "kKZNNXp3jvMp7PRcnzvYVGyuf9DmECefz7BhLWNPpf4D9CzT6vXNZ4d1sBobR1oGx86tsM4r41jv6iUEshxkdzu",
  "key25": "DudWZK6UUpuAMWa6bBqKTZTGLbm1RqU4fVkDdYJwMinCQzjpgFGwUJYKHFDeFFXTcjB5Cwp9apceJyEdDm1H1yi",
  "key26": "4R8HoDTnF7id2W6fZcwcCbA7eguQYCGUah9xiTanir9P8XdkPn8tu1KNfC1Pojds15oaji71ZyEQgBReBMw7sqvz",
  "key27": "2LRbqQPZeKTaxqMs4PCK14Ek51Hm3ZbRL2uRrWY2yjZWgZzg9ZTTD3PVBtQuLuniHF2Zvn5r4oCxVqctpEfF4Nw9",
  "key28": "4tx6fb8hAowspwXKwzFLwtXPF68EcBdyntziF28Mf8TvnJshSAr5vieWgpFjJZBwRawSmavXcr1Eh78eW3Zks9DG",
  "key29": "67at1G28d3dxoiDVdhjDZWCys9C5nDZdciC7ThnkGzQffBu4ppkvx1M7wqFM7Uy26iEhf6uNY1j1nkBjN3UkfuVA",
  "key30": "3vakXVXyyGnHecHmKEQYGafr9soa5uc6ho23kyBn5NUj3f3SoXrwjqm2CiGnhedmnhzZWbSvgWjH6epKZgTuQhfV",
  "key31": "7tHzFgbL5ftqD7QW1WW3bdgGD5FFn1s5dnryPku6ftnozUUz6KUhTuZujxXzwuZoRAuC32dizfpJFCDrbZzDe27"
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
