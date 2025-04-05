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
    "3uEnBgZiveYPmpET8XVWxYeuZRrfWKSeH18tnJrbWYNYHhaPvtdpALeTSjJ7hbJ9ordaRLaxWzwHmm2bxYHsUZEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xydSHJ7rikNH2zFHn5ZJmMZrRydWARRRJo6QMUuroXYF8Df92Z28c1BrvazjZ4RitZ44bnJjGtJvEEFC5p4XLzV",
  "key1": "4vaVcMuwwgGGy3jwoRJB4bntFbHq3AAbGoobqn8gpen86shcEkfp6GrzbnT889MGyrz5GEx9ZWUzaYsVXq4S5ugB",
  "key2": "4SjviUFHb6idZ8CQdaM8g9ZYRiBPCV3BKgmV7XXnADiKT1EB9QMFZwHWfPotFGowdowCrCHPWzzTcGe3wk2MYZsz",
  "key3": "3rXgkmFBoepF19kgmvApqYpoyioeRzSSpyQ5zsbP9MMBMn4q3cSxiue4MYWfKveQTYLRa6UMzxC4jMYjvRU5UQQ6",
  "key4": "dyQ1XEcFkrqpeAcShkBVJVEL3Nc15iynYUcxfZNrDaXXthEXRqJ2ddeTYQ7WPHCD1XdLEqKM4C3PEwQonMqjyRn",
  "key5": "5x1v28XPAxcDR8yZmoXibJReKgzXUunUDqQ7nLtRuFQo18BqZAA7jvsszR4yQ9stUwLfiksATjQjDCTKZBGQxmf8",
  "key6": "m8iADTqETovG7sTw7o3Px2UNGE3VAmcTCTbhoHioGEpMsfW6jtC5UaZGoohybxuWWGxpMRpWLfLjTGWfKM3GdH8",
  "key7": "5MuwoAWey9CxZosjhXqj21AWWykVsbkPdEgEfj562pNCKyWhAAMZ8MMva4kcnVJRz85tnQLMeuDwUQLDDBJB9fva",
  "key8": "4dqwUW9ZCvCezBZLrwyRnk5mLh8rj7AcqahKA2e53LWT9BtxEwBt4gGoM9VrZYdtbKe147doKkU8DPUuSZkSXAg5",
  "key9": "22ARWEtekhSvU3abHFkhEHnwA2VV5FirSvD1qUkv276pjJwo5A1pQFE7vRpU81yt6KP2kZgdm347bxZ7TeFxUg8p",
  "key10": "5fJdXcdt3p97h4cEGhH6ZknPb7Ni8Pc5rAkQ1LGXaRAkKroqFTttYaPEf6tzGKYPryihnqiczxPQ2G4jWkkCxskk",
  "key11": "2rfgg8jBroyMiwmQ2h6hmfwYVULX54KCBCWqubyDwjbiD6kWee75ciCjumwfvPbSTPjX4CK1yASwNwnrByocgmta",
  "key12": "4YFswaqpkuAX38wqKRxbvVSdcwDZhgBdSyNtpA6oqvaiBmH7SwPr9gHUu3wSza2wi6v7E7avY1CTZeWEckc6uFud",
  "key13": "9Knjed6UESrHxZBKncvrZhnecgY7Vzs71UByqSDWeYWk9ECAHW6iyQiwae3uXfGbF57H22XUhb75sQwaKRTFs6M",
  "key14": "2dpJ2oiAYR4CMyuGpZaNMJnbZyoCE9tfwPmGbVT3bugNFzAFZZ3K3mWoZqrZeGXGBeq71iE9iKv7HoQ8J5X72Z1C",
  "key15": "4yf5YNt6y2CUhNmwkL4gfyB3tv3Lftfo635e2v9ikmpoWg1KLDQoCmvyQs8AX1KsMxpGNLSoEEDEn2aStGd7Pmnr",
  "key16": "2WPv7PEATi68m4MAx66WW6eiGoPc6H21TAK9By6kya5prt2jyXNVqz5PtLKK1j4e45t8xNFYUfPvRaPFXsxuxxff",
  "key17": "4v4AWtiK3ZvcMas3TG2Qz7PV5x7GDKVBXPby9839rpHTPzT5wo7q8RJvhopVcjbC69CkpQJS3j7GbD59FXtVX5cH",
  "key18": "5bPPEkudjjvtk2MymS4bavwtigUp4ZaGX7V7KRAVfPD5G7ti2567WNwx37WVF4bGBG8FqgjFSkMR6KDASn9DDDrs",
  "key19": "3EbFGkp8Z8KAMCeqNDrCnAiov3dkjpU8Ns8xR2haT1FU1vWEdh6a38CL2JuLvkJ8JbefxGALPtYg2LGmk9zEy4kV",
  "key20": "ahsVmaEKqbTqzahphLcodE2jaCSpXowao3XaaeXcaDhQgy9Bt1FzzhRckYVfHbux5G7KahMF5xZqNzofHSyvLyF",
  "key21": "JZcB4yfgv6FBuHXqJeR9eAZC181YZF4rA7LG4KVgoWTG2FJXn8VFjDp5PxZt5J6soEfochidPN1n36rf9BQpz5V",
  "key22": "37PUECvbh2JToXMGVAYxME1ybxWB5WuFXGvMSqQefZiW2rvuzLS9X5b19QeoSoaHgozib5vbnNuUurmbsnPjzkcp",
  "key23": "2i79h2sWGfafyQLhrqvJqFwwKE7drm81vQJCNW19wzNScGvRPSM7YJnAJCCaHjT48572t9SBBf4PCB3fsfUDYcuJ",
  "key24": "5mpKjJSc6RVTRUWW3LmtBrDCEunXs6Mc27qrFAaESEYwVsxJ45CuacStWHHEfK3RH86rHBTLqiJLs4qRKWtsKVKe",
  "key25": "w1vSERqqajrzwJHGMVYAR64Cm8SfYhcC1DQoUt3eYVhqUykyJD49e85M8WSF9ccm8UksCQPhqZscQ6MdECsZuqk",
  "key26": "5udXC5SB4yLrKFWEgYEKcrxvZiBaVxKJwLsvE4MDUqJCDsyjxxQzHYXCNQjBp5MixQEvT4zgEXNdsYEV5jEJXDvh",
  "key27": "5CVjow7Cs5Ps8eEMZ5tCq6qKhcS5xuwNeFbmAteBBDxjWe5XHiaHLiiYjgsQxJ7q8GjASiRh4JPWLostxSNYuP39",
  "key28": "5YjJCEQHR1dr3GHLiidtN1mhZnkrhGNv96rSfJcXYC9nAdY5gVPZm7cWRNjcHh1tTo9DBNRH2afTWyaVVBr4Nv7n",
  "key29": "2XVfjTbqqbFVwbWM5VZsrNRTNwvRXQB2m1tm8B17w8U3K1YiP5hTQvTkpqWdvzuiaijKTR9LJb3E61vQTpQgkcCR",
  "key30": "25VxXLQsh1j1yJLy5NrHKaoFbHDR95fUKTAy8Dg6U8b97fu1xmDJNpY2fr8663eAUNA5eQF2pCuMkK9Erx9TqFz9",
  "key31": "2o8kVESEXMipxWNsvHZKjBZGJWeDiHVjJHJYv3uhbiDkKv9AW6MPXNvzPxnXMQAwoBWu48A53GkiCEyMMwUWdPyF",
  "key32": "49e53Nt96fLZAngt7rs9AoDg1j8AqNQePRFmuan4y2tFNjqM7ddbq3kWhQDJKgTJNocWBv4s9EXQVu59mG59hwdq",
  "key33": "63rm9hjHcdUFyJnMca1AnmE4fmmd6sRXkP8YwRz2se8nWDsoPEe9Jkb6nNAqKLscn2fpLYZNGwtkro2P3wistcN5",
  "key34": "H883G5XQQRyBPXr9wf93c9zRbqZ2JSJ9ymN3hZseGu9s4LwwNqGH5SSK2j248z5gACKNSCwK6tVgcxywHRr98hk",
  "key35": "5wxRRhcsiLZpEPitACNbDUXbsCpsKx4UFnjsStwfeo7LAmKoGkDR8Td78EJ5rBUJq5WsPtKK7HjmXYfJHbGbKLLZ",
  "key36": "UC7p8bkNxL89vxr5K8FXFH3dQVrFzY3JyXYHriG9Ao1MC5R4BsHY81vXjfF1WscEcNRrFb1v2bc99Sam2HuAtqp",
  "key37": "28J5FCr16xBjMPD2q9FtDgagkz34ssUHuYUm6kttHKWsK1wVZ3w5zMFxtpWyg6GLcActA3cUbg9iBzpfW7SAjLey",
  "key38": "9iMGZS7QEzu2z4NS2L5nJLEMcvjKaFBWbuAyaYiYy2khkuALkWixLo4tTzgVkV25GnBBNLexY2k5TA1MSS3adfd",
  "key39": "3fsRaoGTEScCHHRpYSVRNbZspWHGzm6kzPd6wy8KzPqT1Az1npcE5qYeg3gXtEXr13mQDnx1dXGQfxfjcb1YKjjJ",
  "key40": "49MEFjVDwH7DUEJaQaCyGZbhZ4r5RvTdQq7JEEUDWgN9tCaFzSKPVbfKZU4v8Yj5GojDfrd3rNeouMw6ViC4pKr6"
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
