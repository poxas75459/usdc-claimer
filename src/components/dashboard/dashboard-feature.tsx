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
    "29L7FhzafSJPXuwNws1q5PAfbkpa4Zz1Wpmw67tbEdaffgvuUrQrGXQmX243a2phpJTH5uy9QF7FXyYiXJ6XtaBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uk5bx2oNpffvV5y7PkRnKydR96UBQWjFSkR7XHt3Zzw5j83ntg4gqVvV5hoL8iKJA5tc6ejmtKBmMb3ZyEdw4xB",
  "key1": "2yPZSraVKcb1kqGktZMvMT9Lx7WGxbjGSg42CsTufMU2fBvE4UKDS37Q6zy9fMqAWqHrNzzgqxNHdcA6Yv99yvQd",
  "key2": "C4K89UfKPHZcKrFmSLB1oNfcYD9bLC9H97oHZmikyxfh3Uq9RBPxwnJwZpWrXL8CmCwa2Gk6Dq293WzmR5ZACdv",
  "key3": "5o4KZG7wH61EN5jyUYiADVXKwyzkhYp4DzUTQRLhe4LELrpdYVQsbVW8ZfArmZQsL8B86G7XaA5KRwsjTCqbMNT",
  "key4": "5CyzkhKNXZP3YGXGAkbvMoywbRH9P4qrkZ1Yfh8U7UpJpKyupRYoZ8r9YM7Xdwh6jDZjpbTECi2Az8AuEZhPP4r6",
  "key5": "4djKeTewpxPHhBkVHQc9NLzzjNQqVaafTszUdDEmhsnPrdzLxEGtGZHaiAdFaHMtL5WMFqSnnRn3tEXBmFBE8S9M",
  "key6": "cA1HMLH3Cma7vqhjXwQe8UAw7fg2Ezzb7EWzeRupPCyAhnJxRUqRiRpsQ8udeeESQkLNjy15w3UmRTQCFrkCRax",
  "key7": "37kVGxDqPqdh5ya8qWrzgn56Vw4c9LW9L81cDVfEdTC6AumKZpordqih74wTLv9ZdGeFppzxYoQZbwS7wUeDz7zs",
  "key8": "674MVirRzYNkmWUhAZ1DZPn2LZvqnwWyd3adkYnar5vHJbPbBmsB8ZPUkKdntmWVkgXSC85WW5EcJyKjyKsrTRvB",
  "key9": "4b2DDQmgbbS11wuhD9jFTDuPwjBjwGyxsLRhdpQVkeHsrGvecLMJdqvNVK3Mn9GvtChEKb4G11mtymVjSSVJ1inG",
  "key10": "4N2xTLmieTKAvgbK6E3AWbNSzpwpaqaUXKwC65MDAiGbwp8sKFxcUeZj4VKdjNrVZ5LdsL26X26bfDQNtHqRaZML",
  "key11": "oobCA6fLkFom9o7MA4pz72YtbyuoMb2C1NfVHdqFffBT3cLHtmd9UnEBe66Yina8qoqJQerM4tDc7yNXwyP6ybf",
  "key12": "NCNtCnnU9aDwbywV622E2B9KcKAh23YyeijyPB1iibbMjDsupZc3QAWo4XysdBy59fCr499oo2uaoSYXHjodmdp",
  "key13": "53wCLbaV2pkKaxCbHBy3Qzfxg7mtUGJqc5FcvmvMvor5joRCmXLzTKKNE7WLLQYcwSo7AH52YK3ghmVsE4HNykSS",
  "key14": "4gEwtWW7CXDsCt5YE9urVheR9d2TeBuSiiWpaJMukD4NhdBPA2b2P9mRF2EPmDjmjSYfvCrQas6bGnrnP1Th7RUv",
  "key15": "4DsSLKDGggzazpXGR59njV9QSCi9L4JhH2PTiFznVGz6ybfkKLZ3d29GZMfm9oHdLcV8eMwVENwAe3FyC92CuWz",
  "key16": "5gzqwT26kgaKtVh9p9exF98rZMAagNmY2yFonFMGZJV3jjp4BRxPj4QFxG2N24UiLMJifbi4hbj6YbaE95Leb9Tz",
  "key17": "3iTiZLcCY4KbbKUwdUEswxb4LfDUvaHLWtDVMyVoDtxx6z5HvrPZT2V7F3u84fFpSc2KJbEDREZHpAR1at8hauKz",
  "key18": "5uk3uQZyV3PMdU47zR8mJpsNkb17EdzWkM8ABuTn2DPaJeJcks9kMTpKzwA6SqeZf5kpxKYBCRZw5eWALeYDYmAD",
  "key19": "4LGFQ3i6EetVCTxzKYmoBLT7e3L93fyT5X2duyfgC8KXTkpfwaRfP5ZjsvbHLSpg5HaJnum3P5vnf9id6XpqMjnc",
  "key20": "4sQovmdnuz1VA1FLDq6atKZYcc7TQE4YqZcKKbWYHi6mabdjCPvHUjW25qVTqcqJGy1WDGfBrjjfZZKaYspSYuwH",
  "key21": "2JZCnxu5XDkdjfsGtjVihAXpwbcCrGrFf28wXvBTnjVkaGGwuLwBcvE3dGH6cJByaJYWBhaKySrSxJZySMJoPMui",
  "key22": "gQBxajyqMqBpo5AuZh3nd9JcaQAW8hiccNSin7mLFRXnyBjmHqdLct9o67RRi7S2hN2eqzw1h7BPd3BLNcFdvwD",
  "key23": "5gRv7qMZCMT72J5HefnbuTShuUEJCKsZWPMVsqjaHwtv5YNYFmz8xHjsDBe1dEnBJ4svZW37wK7arSKPeEjKadMz",
  "key24": "4JvYSw9Yr1Vybcc5jQ3SSegusFEFT3RnV48SBbUqxPv1ZbZqfGMvuLNe4MfNamVeGZk2A3HhTwzTjmUZSCiaXACv",
  "key25": "5AFqSyywzVKGMA5FJCbKpZ1UWofQ4LKF32i5iVHwsesVjM1ypWMCvVGDLXcd9zubeig7SCbHHmyU1HHp76YcXtms",
  "key26": "39HhRLnGHDEpBwmHaLK9sLMpf6dfnJC8Nuw8Zk4ZTzYFE1W9YDTBu2QzRfCEpgRVLsDedrzMEdpTac4riQSbwwyw",
  "key27": "yZBUTtHTYj85hXSvRdVQH34z4wBEDh4JjMGs5Vf5MzHjDzuUyecxXNHqthNGLMkMqMDw8JqDAFV3XREs1hGweCd",
  "key28": "2eKXEHxiD7gkwLgYRPbMH4ut2vKMkJkt4jmemPTxfZM42oG2bgGSK9aaeHGSAhNs8HjDKS2TnmPFa5ZbFN6JJiuY",
  "key29": "3X3xt6eUs8kGFDWQvSkgZ3eBQDptXu6HPtxqMxvJvn7yeHhREnVMWewU1CSCZ8DnpeCsD6Djy2MmPEXQZTz2Fp4e",
  "key30": "47bjjgoqrF25VPPXVBVyGVTq9TvCuNDtLdZu9cqGwmZFVSPaFkt6eKjeypFumjvUfwK7ziv6Lsvk9kwBNG96L39n",
  "key31": "21WeVLP8V4is4zNoQ6bt2PUWhqjA9grSyB6LtAYweALv71srRB2YVhBywdqKC5PkUYPaHTCvewJ4deAWoHpTagRq",
  "key32": "22B3mMQcpepbqxgmGuxuHkPboBGbR3HEQ8Ju1GTeQVZ82wzVGjaKo1fPXcpLk5GzBUjypxsThyiPzLe9VPmt1ydw",
  "key33": "3CGKZPDKX1vaHkYXKqm91x2nnk9TQ9FGdiG8KjDaypVAgHDQijHAnssy788Xh7m46Z4N7kMNq3aJmpmrF6rAhgmC",
  "key34": "58EZkbU3necZRyRB9rirv1aDYcKc52DG64aaN1EmFEJPF6Gyvh5iJNPiL4jkVGmD1yFzqETytatSTHgxrqJpJWAE",
  "key35": "4qf7Xemp1h3bjeY7gKiSNLxYYsQ1kbHn8dKzL6M3oocFPAG1MDa7oTWwGgRw4Q6GC6nAnToNwoAWYVZxxq8UHyAD",
  "key36": "5LufJQmcJY7BdqDYkSfX5fsaVTATZ2TfXZMiMA8dufHQrLQEv1dzT3m5yreWq7hUWhwNfSJEvW5F2K8P1cqQ92Zq",
  "key37": "3N2PqzJzA3K8MKTmBvq3tBHsYPMYQHEPRciqEa9YjfP6GbMB7wmFGoovCv7VmQFuoua9zAD58hEHY5o3Q7oRwexb",
  "key38": "595D3y1WcAALJithvkDiSc911w7pwtUrWr1DDij42C8Zfd6vpbfJBdS5S9D6tjbsg5CKeaLL1ciXs5G6Am5H8ihy",
  "key39": "615FxU8VH5FJZtEHhB98khLBjrpffb8z6frww7j3SPZmJF6N3SGEn9mfZjdRydM9wLzYQd3ucxqZEdJAasGFKf3b",
  "key40": "4cnQujprR1PpVgEWeierxETboYPAKzoTT6wbUjNsqRPt5MM9S1HoG7bVugog8PbDiy1MimoRNJpDxZ1WDgKJeLGY",
  "key41": "EXwetQfPF8Eua88r5G7ZHRnBCZQCtMAtsCzHmZNuuFzXGmnT93dB3sohNDEugwjczfdyPr236nkn8XQBEqdBWs2",
  "key42": "3K39uG3hLFX2AfLfZJFAGZLDdMmu5KXXtyXCqo1oj9Cw8NAxU1JTe8LfHH1cULSpxnyX8XEgg19v6CDDWbeW5FUR",
  "key43": "3fnCZGgdgurZcBEbZFMGN6WX3k37EcnDKLjkuW3LA74Vtta8tQXGkxfhdtqieZed53cxD6X8Csz8m3VaJvtkLGsG",
  "key44": "4b3EG6RhaAjByDoxee1bVDCJMZWmRC9Yt7ubvb95PL3BahKsuSpp8dB2Qv595DspWv8UW5vxhEkFiaefFqyTwuVE",
  "key45": "scsVy3HAFzd8iLUQFNe5ELFp8bLRqM4NMVsiCpttYdhbwpYNtVrRbPvCaGxXCdRRUhErScTUPa2JSwRXxeBxYbT",
  "key46": "4MywMDe9wEDyJ3HJnqv4UCvQVuMBeLpLe22ZGo9EzdYRUdfiBdFhVPD43DszWR6sKvbZkGqiFsCGTJnEbsoBcsh5",
  "key47": "4vrNvymSpdRA1UWmBMBCtwicEP2VHPJDAcQ4Kh9WhGcs3BFSVssGywfG3sTgQQycUBLcKtVGJR6RdQqTxRfKaVrp",
  "key48": "2vaa6w9KMRJ43RA1Rd8AEoqxwYnS2AUJGbYDBPPNLDAx6ZJf514rbnGTWoTCbAAt4NoFdoygmKNiMtbRTWznhoCV",
  "key49": "2QFL4rHPL7KHw3v2Lq9buVkodYw56jjyz947KLS1dJ2S7Xg8jqr7PmcvnnJDzbD7XhMyoJebYYgFgHfRgk35aM7L"
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
