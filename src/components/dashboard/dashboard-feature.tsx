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
    "5ewxYWpi2snWWEg1EvGnvc72twRg7sSihpnTs2MYSdKrdVRWMWbEU5ag7sT36JsLT9Yj3oug27HDwpYUGEDStc2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMuL3qmedbZvWAE2j3UNdLLPvDn6LDwubUHCHw9rJgWqPAUtfqKQSYXNAx7VATwfR1RFrJZQ7jAoyyBKZSKqheZ",
  "key1": "4mzbmcQtVx3PfS8RMbVVJZWMFFAhzbxLAk3owMWQUDcSYytJhMJPKbyFM669H6fhXuesTnxHu6uGjk6GL6MbvvCa",
  "key2": "3Pci448pgqNCi8NoNGkqN94LmwZBK9KLLc7Cq2VbyMZWi4JzZGsGzLz2yTYgrxKe1V1MSfgv5WzPRDahKuqWjUgM",
  "key3": "2cudcXrASWxC9L8WLMHKgfgYrpwSnBiQr5oerwTcSvo5ujVKBKqezJfbhYzDjzEW4QeKRQk4RtBVTEqmhQpbeLYy",
  "key4": "hGUjunTm6nDxQK6qcPwGNUc5T4N9YVq7pzJKVYMWfzEApuZxabMLcjooQbuy6kt2XSwGciSs82Ti55hg7Ns1ekJ",
  "key5": "4aTcDyxoW2d34QBAkewh6WEUbiSgA6zCyvNXaaNW8U5K4Dqv77R6XQX8fQoesYwzLbuD3sC4ARLNF5UaXdZNuAUb",
  "key6": "sy37En13m9nk1rAK6LBJzqLubanG8TRgpXcnEyQhryyL7fCfeZdtJPW9TFi7Y2yzzvZMjGuou455xRMpuYQAXqf",
  "key7": "42e1ZX6PTUzT768Pr7owEsGpYr3sfW62cJc59xVyFCQxRMUJk7hK8M42Ybhts1nAMURTBFKSK2Ggj7ff8VbubNw4",
  "key8": "2TUn2SHXnjhWJJ9GuJ823G1W7pHA4yFbkw2bgmAzcRad5Xu79iv5hUPFYaf68NKBvysvYKGQngMuT5fg8KNJV8PK",
  "key9": "2ndZi55TB6WJicAfWCt9aXQ9zAfqsMsBoYUB4Lr146DYCPdbrv7Qu9fLqwR9aopP9cEL6yUGyFAfLuhLgsxjSSns",
  "key10": "4LDjPYFZvZHxhsRifb5mPT4gjG6sM9RdnQi5vtR9siNMBm2w4kPT7jCAYx1Ndsepc14thSeKaut4bxVLkELgJ59M",
  "key11": "5C39rnbD5eCvqoftKTjtsXpEoKaVgSE41kT1s9X1izAWv9KT9TLFribkzGEx4qYyTYVoovvQtW6yUCRo3MdjqLxi",
  "key12": "5ftZt1RhsYgPSDdUZKt9GdMMJ7zuMszV8VT4sWGw2vDWFBGRSu64k1xJUvejuQc6DDaSNRA4fKwCWwwuUxX4g8cc",
  "key13": "5BkR97pKSgpq168nfLx9SKG5kJnme8UZno6aeSKBeK4tuk2VGi6T3WofK3v99rdNBFhQqTTAuLsnJPjWJXz8QaWB",
  "key14": "2iuEeDqLoHeoHUuh2fZMGLbpyXnsTcvFUt2SNik8MofHyy6T2ykCWBhMsNNU6bTUJnnpoCb7X1rcmfqxUSV8d9Rp",
  "key15": "51MWDLKEmWX6dVVQxX5mfSzmwDVknHx57kxDU6c4XwFfazQCzK7mykxHn58pAshBJhyxnz2tcFZN83tkcsPTQxdb",
  "key16": "5qmMduvoEeee6aQFrMykGJRHi7FVXdTp4oRf7rpPXa36rbTXdLemZkBSuGgu7ef7F2AZ2cbfY21DucsjhNsCBu3",
  "key17": "kg5FQ3U1YwPbdwHtZHJzWmBn6r5Kpq2JAx4Rr7YyuPS5th35FJw8jz5a4ZNy7a3CMMsGrKFVKFvbhcD1fdN6LdJ",
  "key18": "26Cnq48HBJvw2Wewi8kEwG2qQnvaxbwfw6jGoL68NE2BGHyaJ2ewytVw1BbG787gWZG5cmzSqnfJjVKGFiLB5qmC",
  "key19": "3PFJZMA1L4hknFk4HfgXutKezNUCYakxS4mx6DLMD8brsQD2mY41aiBoam8CEH7TMTZhVf7BHgXgbrSYyiEaKqY7",
  "key20": "4evY9oiVgUptSSLoopJkcSD6RRoeR4vKu6rC651QPVp7wNCuUYcXNKyDhQkPg9CHQ9sQni991XuzAhzhVLuyUoCH",
  "key21": "58RbhmcVNkwiqmE7vEBHFaDUxbNjAHa7mMgRDg5Ujbsxe4jWFJ2QzLEPsQ79CJ4EQ3oHDDN7F5QEb9PnSickJky5",
  "key22": "3Cnu1Y2fg8ZuooD47YA8KMkqRZwWkK8Z38UeVJxsQyynwBB9oxmN745TVuuafMVdY8d4jFUt2TNRvKeyHzHt1pcW",
  "key23": "5ELApfyqEUHsGyF6s1KfsSZBWQQFdL1A6WdJyentM1R1oZ7ghq16KQ3L9HQ4CprybAphZJgMZaRCAmnJdD2YXRtS",
  "key24": "81eHdQk5KAjeyNPjJKQxd4VJkNg6kBUhCoJcPGbrThFCLbZ5j7unga6p4CF7uvoQ3zXjQs1N6tuBBFenzxWMAzG",
  "key25": "2kKUnqCcRVZz1tmxgfxnmdgCcy89C4TckoiorHHYciYtrMz6MFsJcMPKEtk8Fuh7KbLrHmo1842GBvhb1uuMPTqe",
  "key26": "EmM9bB9kywSNgYic6vPzeBGGWizaLLMmT3HZH8eD3g35qXLJ5pKBSKcgcTCPAy7hg7gaxGkuMKWsH5eehzvkx5n",
  "key27": "tyx1CuZixJ3zDj7DXh5KVyqLzR3hKSJwQeL6g5De2amkZYpzK2T7yo4Wz7ySURmgFoQkN9MguJh7mqXQvFBt76u",
  "key28": "5DZYKgxzBRrGsGmiLhdVtYMWoSXY4zgp9xA7BK7JaFE3yG5SCJpmydidY4UhGQK5gGNtBPU3jUDLShxVk87KU1BL",
  "key29": "zG6XLLLzwFdUjSWptgvm9YMUWaeyqzt17PTf7TnfJc3C6yW63x2C9631YeK7r4DPeBivS7f4YSXbt2tjVuho57M",
  "key30": "3gUmFX68iRH746wvGmtYMjJEPqyvMyqxaPmofZNnZxxMVWSwDQFdvkbEt2SYZzPWiKtgbvAnGrMhSGjCUu42uxzT",
  "key31": "3vs8XxxMpFwd2TjAwUummujJzxfYrrxcwXcXuFhQTkwvW453KAHu7Sgk6FAyMwoUSy9VSE6iqWuvk4i3eSL9tKEL",
  "key32": "4DdwUnYjiP1j6ewpy6ME4umk1pS7XvsYqsQH9zmt5fzPQ3An6k6FtbvxN1w43fJPRfHKdUUhhRdqSWNaufsHbdnM",
  "key33": "2UJTRXn8WBxyoocLpWeqCkWG4t1pLgrY3PmXAEeSeDygbniy77rQm14ysCvtGFbMWHPxyUMqm9XBKZ8WKqAxrHR2",
  "key34": "2xsDgRxxq7Kz9X1YsvbuGouYmbfZfCZR7hQrDVoUo5AAxyVZQn1jkKfLD5uCcpsxTUhN8VDqNFC2akfDhCkaR3ht",
  "key35": "4Bq8znfDNfMzFXgBB7eiX8ZCCeeQW6dPCuV7iD6dHLUgQ7RJwHuD4EbAUnGUVbdwMCZPxSqebg8edYv55kJAbcPf",
  "key36": "4gJzAN444ksD7VapduCuMdzK84kS27Bjkt9cxZc7Sr4ytYM2hxj19KXBfNXqgFYoZNakbjqmqirQuhYhC88NbyZK",
  "key37": "4ndo6ncJakQUJ6kWcdctSF18mh5KtrhYun27PuDCnFTm8ddE8fwB3yX1C9WuS1FdAUa2d7ikY5bH6jjCFe4U78xe"
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
