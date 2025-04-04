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
    "3WfVSZSVcuhwsbVXT2cAzP8Bp5KKMhHa3LevoUE9qEV2AVatwVSwi9ZPzvmQNXTzhSzqum32WGYysNQTNK85vNJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61duqrLk94EushAeuVPh9mVZTzsxLxXaZZ18wqCAHxFU5bHgoUUShFmDZZuXM73ycDsYuShxuv5HL792PJWpGZvd",
  "key1": "F7v7QwYbEcHvLTCCA38atkELHvq1mTcEFpE9BXcVRG7MBeEBHgaEWjr1ynJgzHr9goyXxQZiPNiYYkbTzNVEAMb",
  "key2": "3BWzvCodfuas1okYfAzS1mYbUapgucSjVGv5n9HGFTwR4hUHVwcZWPw9oC2xGqMcGnjZhFrh7AMxFJ5UUu17P5zJ",
  "key3": "57DZihwZJDHyG4dTQjVHUkLkJY8jNRzeRFCso6L2qR9iLQEP3CaCeSJWLep4oYEZdK4fWauUB6775DUi8jEy6xkU",
  "key4": "2PMD7zeSxA2yxnzNfxJtKkzW9LAcZAcX2YZU6nVNwwvMJhHXppepk77GiFJq7fBUR1KeguQ6czZvzbqmyDY9xM4K",
  "key5": "3WyeqPzojEc5gxEMBmTSk1f6cSaKktP7u3vxj6WkkhcM5k8GVTaia32t5ryqE9KyaDoyUqxmQmEjEAkEz412LqJC",
  "key6": "XDoHTT6a7rFikueGfjqKSLHeWBMhwCDpegNpBAqagu4BREPXjSxHZhJiv4MSt9J2uoWiTsNyY2g6FncAAS5mxLJ",
  "key7": "962YLktzo4sJDo5zCkhJkkw21MfhVX4JgUYKtphbSiUuYX21N7QGHrTFWWEj59dLyRqzNTuaxdXo2S4QHYjJpNk",
  "key8": "3XXYuUaNWJ5kngKcPZgmRUnZWd4ZECKhVJEiw8YEqJfBFjani5yZFL1QcTfPPnRb8CBhTGnvGbwpay63aYRKR5fJ",
  "key9": "5NV4h3nGDWgdpuLLuyGuVcYk8JnW6aZoXu18iSMXHJqEHyNQirbinPbuAcseuiK1ELr42ExrGyTaaop918d4qJs6",
  "key10": "vaEgSqJJwBhCbzhq3c1nMi3wG7H9VsLwSWK9QhmRFertz3wHVECNvAYrEwZxyaviAmT8AdUMe23iw5NZBsbHwLx",
  "key11": "2MBR61kmJXiFMKV3ASmD7go1VsqgFh1YJUk1NJYhjYbC82cZfYiRrEm82zze9bd2FgkNBH9Y8YJoFir4huvbko6E",
  "key12": "4yLUENKRkvw9WXewZotXsdfVAUJ34A3CSztWZhEeFGEAqA8XwbVDjwXr57mFoPZ9S2dv6iRK8KGXiB6NwcX6aKT9",
  "key13": "4bHnYH5QBfV5r1mXKtNHdB1ACUh5MuhDmWjLnPZYKSEF1BsQkT5iTt9ckSur77zdD3YuDoqTVjtcdLySR2wbSsvF",
  "key14": "4JxBhhepPxopdBMw8GjNA3vAfKGXR9xuuFdNNxecjh3jF2bLbd6rEqAXJn5q7FzYTdcyLRjmDCWstQVio4iGXqSZ",
  "key15": "2YWZp6sCDJ2v1XW9Tk4vdvsNVaGHG65iTfSPi5fWggLe5ecfR9wxCAfgTZ9GRKryeLi7sDJtK7N1r71AGE2EtMqV",
  "key16": "3HKJiurzPnbGgHBK9QWcKcfG8BonmQfLEXEG4R4vLLP7n4JzD7ayXrmaPD7VeQMnM1PwQmAPQ5fJxvgvfHqGEtSs",
  "key17": "3np1Y16TPasY9J7DihTsk5GmvxwEs5hCG7ERRzyGsY6faiYX4GVpqGTSSse1bGyeZ4cL3Cjso5WRXCjx3LzFpy5M",
  "key18": "5fPkKk6rm4ExTbXX6z7MHSGgfedRa58PPkGvrsUEbSRDdvvEZqnuEkot8fXSwKwtZ2fU1GJewoDeFBCg9HEdTVLb",
  "key19": "2VFV7kukAA87Z5fAgAt2dgbkuzRVEbRCm7nb18QMDCuF2DDTjUq3Y2RasEbPQstjEr5obPGo5YTdPDLx18mgZFVs",
  "key20": "5q4fE71yHAoaZrLX9hqZbWJ4f8vjiN8wxPKxjV5VqjdkDwmDVJ8RJE2ZwLgAeLGb4e8U4ZiVJQueKXq223PNvAQJ",
  "key21": "2HVrFLr5PPebZnwC9w3qrDcBGFFXTq8xAN5ztdBbkS68v5VQisZxJGkaZYkPEmupCNBEdDHFpBFUbdSM3yUNSnKf",
  "key22": "5AJM6yU5WWrA8cJbkKmCYyZaiV62vAxmerUaonoqLbW211TTpxTWYyneHTZdnez5m45HuWvgqFoFh4VyA77bzMGF",
  "key23": "5ECLFkzZ5PAi8W323LSdGxkoavuuHbaJedwmpM1XQido3RWGu3YoAQUoG67e26XzB1DmsMoCTuUHnCMmE6FPXLzz",
  "key24": "4umkjqR11oUHZ4pBRmqvNzg97PgnqpFB8Ck37tM1M8UKr8fHHA7pAMWsZfuiq5KryAN6mDHFDxSgHEMB6yA5yMDP",
  "key25": "4j8rSRJDwBYYRYF1Gq1CbdzBkDthrXYL3yVJujEzMzfBViemPabnbaYiCmAFctQWsV7qD1gzVEYRvEgjYHvqpuQ6",
  "key26": "4bKEz5gGHAGCZUM3XG4M2mXwpKNcuBrnHfZXhfLW2gwSRmDBL3yXXp74znMq4HLbTRrQvdU6itkfsijqb9ita4HE",
  "key27": "3YDYU7M95Qta8BqKfcvE4Qv1q6otSQqJjokbychoVDo32HP1GuNDUJYz1muegGF8xpYXHEvZksUxmNwbhifRjMw1",
  "key28": "17sjVSyd3CxFYB7He2mqxUfK2ZjjiQBGAsYqcCjGL12V5ySMmZN9UoswnPSwGVKBNY35dhPxX3VDptKJ5AjHuzT",
  "key29": "2vWjvzGt8CDnTH1nS1PuTPgfEE2QxPLybqSb6BREdzCRQuLWW2bhkBhnj9XE2dsVmh424H7q5bmiUb2K8BWJCpD5"
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
