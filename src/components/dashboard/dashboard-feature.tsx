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
    "39WQF38GSrKeWrwMRyZT2LmQEkaT7jVqp12s2rntzQvM3wVbA3tWM1mwDKH8tHYmDJA7UJ2sLwzuK3nDekxmiovz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ciMfG6cVLVfZ8ftRhbr1oWsqBRQMDh6vcpQtBoQTG9N6P4RTZuiyuwS7F8ZcuLBy1zTyzNYPHNgBAHTwNQgTg7b",
  "key1": "ms91Tx3sHRFeN1o75UYq2tAu8qvUm8TB6H2Saqm46xuH9dreqfia8EUmgMpv6ZqqjCTEWwzFkS55aYx2xpXBX9v",
  "key2": "3jbxwanaFWYN2Td5V1CwcLhXgLGkhSYCqzjQ7VwN2FmXeBR6dyMF9hvcW2bDa8tcFaweV9R67ayygHDiGQetVM5A",
  "key3": "3f5riJEDUB2BpFc1C8mCLca26TAnPKUUvPmv9AnPBGJSf2RjkDCMN66tWWM4T6grLnLEiysEEK1SE1nuMeSsJVXL",
  "key4": "4cvGXk5GA7L4Bi9j3D1QFVGFaNQQJZ67goNARLh27o7R2e3EBmcCWcmErvK2zdtwyEkrKGMHrRmUYUN3WQdGLoFn",
  "key5": "2LFwqC14cL4Hj2Dvzfk1DiEjA9pMB9GuhNm3TRsEbTbdCdGkQouT7gvpGfXEpCHyWxMLUvJoPk7k3uCB9ZqN5Ux",
  "key6": "4oAqqVQWXdq5WZyMiwUHNxhwCBAAmLM813Nt8EPgMCyCkiSZabA5esKap9AdkZBuxPcJvFtawKYWiQ5GkoZHwzRH",
  "key7": "4zZ42PbKVeqxrG6xzZvC2M2u8P7HRq2rm3LQvyngSqT1zBxaocRJL7JtVaDU367bA2xv3BjPSm3SpBxMdiSJ4SV8",
  "key8": "2B9zaQE4F5q4sn3PY1eoRZi424h14akWVTiedxZAUNChjYZo6NUAry66ZPRajFWc6ycSK5C1SWrUeHoSf1djSbo",
  "key9": "3Awsf9LvEQWbLJghkmNQdGcxcgfUs4KyUzkxhZLEPMP92Aw6b4ejh3TtEuCNR5PM9U9j6Ki6NdUEy9vM26yMw5Ek",
  "key10": "4GS6st31idE4iB4DcrevUKDsDmqx8F2socdJkiJYaLnBVJDCBmNiFXs7jUnTE4uZH5WXURMNwuxG5bHaWgid2yrE",
  "key11": "4qVQj7U8F6CdDw3cDy2GzdZYBpUNwWtyCwLNCHZ1j2Cbr1skEqci1kYW3vYFLHUnSoYdSTbC3HfJCjCt4kTf3BmE",
  "key12": "2Gbcj3Rn84pnSmyNSBYfgSQdCNo2PZv7eC26WsYQjVpuuWcJDxnRYUbBp4tqXM7fd7bdx1tmehg1Zz7uDfEwam2U",
  "key13": "3sLTfc4E5Cmiu4XJpCxtAWAYdVqtWnY3bQrvUoBKk6am4S4aojsNTca7Yr8HsenD6RTJYfjzq9Y7MbdGxeiPfCUQ",
  "key14": "3CLuSWFBpSJn32CHkyLh2ETUwcXKJFwmPsVF9R2xygV9wVZ3e3W8FNWb6BPd13NZMXjVJfAs89dM4ZPFQ24jFRpR",
  "key15": "2JgVSUz7gt7Qiv2rDEQjsnUUvZBgK5hycZ4D5quAngC71ZpHziaRzCUVFLtbRfTACqs6v6Sqn62QAxAohB8KLmNq",
  "key16": "4Ys5bSr2vN7tAQjhZsuiiFJSZW1Ne3nwBGzyUwxubTxs6rfdZgnWMUBCRqmKxAft4ZRyzrYPWGSC5gi15kZT1pmf",
  "key17": "3Aq6BPPD1x3jDA2D32iFWQk6bYTjD8uEDuMwtQUPCK8ac2p4KTdM8QdgYd6WxSpdxDKVD2cC7dhPAm6BpPYpLiQj",
  "key18": "3edKF8psDxJt67LG8p9tbiXJsJYe4ts5rLAF8UJgQqGhZ3cx42uqLAX7QbnFAoNTSZ9fFgv7UxuXd8WGF5S13QfZ",
  "key19": "4YdP1W6Zeh8NdCVuKGNC4s2tVedKsAZbHSXCpebpXLbQj1FD1agsrNYcFQ3j5mHr9KjgGZFkre7NnBCur4dg9zqQ",
  "key20": "3XWgbibX9yReT8KUx4Ec6yw6PRQLNupFvVztT53CYmGeZhTotvSPTRsS6QawqhBzyKWecKvxoUQE78s1iKLXUWYT",
  "key21": "4oagXABZLoCHpNVxWPDymb5APCUGUGkcjWTNhdeaKUGFbVNr3HW68R6Q8vKvTwV2BVH8HGpAaEJWnnAjFkkrd29W",
  "key22": "2pkVu65Poa6tBmBucWw3wVkhAYVj1f74RoZ6xXiE6ksJjS9cFUxA44GMjEUS7xzD2MNLUAEip5czzNWZLRHP6szF",
  "key23": "5ai7omhrTiyYxCNMqYHtq15Xr6pk6eVRJkHMFdVupbJ1fA6tKPL5i1GibxsTg1jypKTKaJkkL8bCnJHLTULuXqVc",
  "key24": "2pk3EvwNRqy1uYrRNJCtZDEtFggAt1rx7La8L25tbCehrys2aJP6omZYKqUp5xfZxSKxA57ygu3JaJ8hSBa26Yxt",
  "key25": "4eRLm2xLWvBjvdqCSGpixuTc2gLoXugkpQvJESE7XFER7Lr5xMfq3KGaoNkzEKbD67rcg8jvKJivTZuZJ9Abqt5e",
  "key26": "4WdBnHHtZJFVt6hXtKDZPq7W5qGj5B7WUzBYKL2Wf44tThxePe2a7ENQpZmqWqtUDaAPFqMPRA8uuAvftXTUMnAw",
  "key27": "5cmHjRUwUesNBzKR3Ntg8YpYbtG235Xr6XFfgPPTtFszrVPuJpWJag84GtpMxbB8iYFc9Xp4CacWrTrR9gmZe3MZ",
  "key28": "4yfu33KVsaswxJLxFABCwHoMwANHnKc6JjQdBDnCb3cwrjWdP6XFZdTNUcgquWSpLSjctbG43Ug62djgmj3CH4z5",
  "key29": "bs9BimTf5emuFWxwaQy3w3WahiVp3VUwAA7nuZh9RWj3YeBJPBNdgkp6B3bCBNrbDQ96k13P3KN5gADBpxjvP1S",
  "key30": "vyL2Ck2UaXFmU1jcuAoftGoM5ekXFB3RnxHkMq7hK7Xk7Z1xE3rWx8xhattdTVQkdBQMpTDrJ11JRKZryDgMLFc",
  "key31": "3hXyagHmXjYC7WYht14117kW34sfEWDJ5PcFgbH5BJkt9nUnhCoLS6rEy3D4iwNkk3qdL2gaEuAa1zQDutM7AMiD",
  "key32": "3v2CLVguxpR8yTTG342AtwYhLHSUStqvXghcgGVsGmFUXHxy3xEHWCxfPNrwF42L4m5zNtRx28Twf7tUerKBD6Gy",
  "key33": "2CDRG2MxNx28rau2yTtdn2hiuH7wP13Wn5n5MiEZPMsmHPgSxX74ZLvzUXnEfoJ6d1aUJXxeDFihcvxCjzmr2RGa",
  "key34": "4fibchD18FRQsoSQ1eP5eLvqURwv6yPe5yXzhWpgsoRGnkKJGkL7S4CbfVjjgR85R1hATyt7jEJ3qSjkTH2fGmfh",
  "key35": "dbi2MSbyF62aEbNie6pFUZJ1Q9KWcua7igCP6BRsiNndpVn2A3eM5ukgj2SiNeFDgX8bSCTG8zXvj7tHc8fS2gS",
  "key36": "5XqLwfxfN3CNmz7f6CHZKJLFWziJFHxxbj4U76fWFve4t3R9wWy6WZDXoqWNSdRNCNzH2pPbfubrUY9vvYzrDQce",
  "key37": "2EtZiYcQAGTVSUhUs3XhNDU4VMUTBaBj1Di3BQXEiqJw7KNVrR8MjZirJSCBpBK1gTbAUT4njh4NEcEwQa8RkX19"
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
