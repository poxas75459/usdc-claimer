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
    "2Ht1FAM8EzWftgQQmVsZfhwKJLMm3LVRKnYUrTi41BmcXPtxQxQ7sK7wUyRj3AM9SaPQBBTZcdmHWSoqzd295ENY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2xgRYCLrgxkCLKAqgetUdhnogE852oCfAjFyu58tyvRWvBWVYaDR1vengsMqrRd21PbDpHFWUNRwwEqkLBgNqz",
  "key1": "2pkhyv44d7fNyroDgnCYTeWUFZ59toaBHxridfPReuJGd8rQFJ84KPAntSMNsTy3MJgUBdi8BRAaN7L3BhHCN9nR",
  "key2": "2bVw1z6ctq3Wheh26Zsveaetjt6UytU2XUtX1hYym2ixLS9szF94mj6QThzDktuLGDam7XVRruu5euWmsCv8hyLX",
  "key3": "48igNBKmVpQd6c6Jxii3q4uNanB88ANnfqTDvRS6Rxbcep1PjpSkMjAkdv8Chvjz5pTyf16nTnJ41g1NuDwrNGEL",
  "key4": "ZJUtPVUp9G83sMsyzHF7gZz1LcMQZ1vPjb87odzQruuSfiGimVXsYYdWdJpySgRrxePxnH2KYrtb8jSNdAVQQGx",
  "key5": "2Dx7ofXCS1pAoavsSwXjC344L27Q2CZtYcqHRjB7dQdXAZLzqBohQsk8YbbsG5MoTTYqvhi6Lgj73YA58gWkDCRi",
  "key6": "5qib4mzR5nEfLtjLEXBSzuQ26tP4t4mwoEwUUAofBGWFgppUDaCjmdiU6HFM248kFLyjpNzWd1b835P7GwXVqAKZ",
  "key7": "3zgJugUGS6trf6bHg2b1hgbWorjtSF4cQ28AgnHiRtrM22hPZyPt6cMLgpvwSiMNdtc2QTT2JtWHsS2wRjG84dxC",
  "key8": "3f4p1F9ygotn4sAMQGdzph7iVRRPUedAjGi1JPNHcUxuRskEyRXkSrNDucdJjVovmmqw2ymN1uKhEoLNctBvw8Tv",
  "key9": "2jt8xnYDyHoL2dGa4w727aNGneqmGeVf1f1rYSh94AtXNhsJh5Cw4RT3skPwiaFjbb4oxVfgDyNFcCJNraNsSaiJ",
  "key10": "44HEEB31K3GLsYRZQSpLpDtP4QCQaQsXwS5y3k3Y1YbEBRq3CfX65cVzU9ijrryMiiDhVW1fHy3AhWwyqJJRZnm7",
  "key11": "5AgY6fnTX4bRZDMKryf5H8RZan7hz3Qj2nGx2QjiTCFY8T1NZ1LWFTBXCGBMsk1htbWDhLWPXamXocZxfaQ7scR3",
  "key12": "63wLFCKrSBz9ow5qdvuTaYMM6rYk72R2g2Hy1NCjsYqoLWWCdVfiRmqooSPVoWETwxfXUAuNEAwJeEnNtjryutuv",
  "key13": "2WUHrA5mzqMAL1emdWEccNcNnDYcnrhqUCpNkJjeXL9rj4FLqqm5SknqUVcmn4inhKwDkcNUBuzQJi3HmQCQuDhb",
  "key14": "4uRvYyjXsymy8LDfExqhsHXSb8cuCjsqL6UVBsVyRngeHsBpasuk6dQF8P7j4CxsRh8WV66EFVyteWNaUUkyNiCo",
  "key15": "2uo9GqQsAxaNR3FN6abSxJW9bCCiNQMgfTyUVVc5bMVVBk8aiLr7EpMQy12cN4NxaBi8MHdg6s5tooMWCbM4D15h",
  "key16": "3wVspvKUQjLqdW8sceXGp5hQFLXXwsYWhxxqCpswmYjNVymFqzwX9NWWTZiGQNtYYErmtsuLG22pgqQLwwUgawnc",
  "key17": "3mNCBZQimZCA1CfCPeiZ8PdmUnTcmxpiWFEyQLWWCWgmGwDKGGwKUDpXnc7YCEHtzteJFamJmH8eEQBxtL9bFfTa",
  "key18": "5kFUKNq3KLFejRsbx3xNs7dhsG1h9AinqVz1onKTLkMTNP6DFpRh9VQxurS75LVBnwisBDfAwBShzShLTxbBBxT4",
  "key19": "5BDNf8b75wKBJMKsdTPrrgEbB3oUXcTBakNBoDjSgArTZAU3L1izcnVJhv9X2TyGaYXGWEeEZauz5V5yDzLaxW4P",
  "key20": "66wagDnrAnD41yWCPz42sUmKYjvYizLRC8oT1AjF2u4x7t4dKtGhPB3pRgHNU1in6qbdCsJpZAbqAFtPpSgsAJE2",
  "key21": "26iYk3KdShXddxUgvg1V1cqY6MBgEgWETNJf49xBkDDAQwvSTVPNn1D9bbY1Brj5Sf1qaG9hqaVeoYrt3nnVkLsZ",
  "key22": "4rqjNzXXUF5LMgU4CFeWJFXkHHYD7ch4PmHUoukdgM15hH3szY4HGw9mcRWE9M7QzCbBgrAPrdusNmGUnM16ZMY9",
  "key23": "62aMn53WmFXbEjYnEacgE9ZrxbgZQbsT17QXAUgYaBhEFWNW6nBzowGPNynHPHSmVFso8yv7R3icrABofYQqnLkV",
  "key24": "2ELkrVZji3HHAFRKa2fegCh949N29rEeeAbLbirK5p81qNZFFoxKYLSv5zBjkuAsXV7tBuBYHZBYvyVwN6UXPHgF",
  "key25": "33VFdkMLAzGxXdt2RzcdBg1jWW4p3ABm2LcupmuXm6JbdHnxREGTvgGX3E4WV3SQEK2H8UnYNAJbpysBih771Wnh",
  "key26": "yrbqRR2oK7bMmSr9DbrY1JH3nQzDNfM9wiq6pUKXvj7NXTq3Te6TF6pzJJUP5m7w2G1aBGExKHfEEcKq45giEMa",
  "key27": "5vXWSipaTWKy3oVz3XjKohk2f8Kago5Jn2kw5ognF1qJPZ2JdDSDcztVtXQotx2gZbJMrZRTA4mJktwUfAd65K2Z",
  "key28": "4DWXNqyfBs9hPZ45TYqNS63kdX8kSAweKgzfYVYKiquERsSHiAb52BRQTm49MNbj64ZBzTtd42KLrjzvC3Eurzvg",
  "key29": "xC8ZZLNVCV88z3zq1b5n59FcBeCFgtavARJS3aeQizwJo5xMH6B73vfGHSsyrNWsTrktqfcYp21KXD4Nt2Hdxrh",
  "key30": "5onohSSRac81Q2sZLbzFVUqFSqKkAGay5QvzVt6RfKEzDePoq2edp1mYeu532GHTyjQjGusK4tjLa2ocoffNcZZH",
  "key31": "56XiUahvPTmZoKd294iC9DT4fpQbLV6oME4GysT3cSRtnWje6H7iDo123T9H4yrsjzRtTnom5DkdXkFyxZBkKL99",
  "key32": "rc37sN1MoUKEbKPV6Ttv2R4YdmRCpHGZyJSB1ka1VSpiqA2Xb72rHuWp11Wsv8Dd32sHauBke6urke8TXBAy6XN",
  "key33": "3gfJrkKDbLDHaSghZNHYvbGsJ7mhd93YUH2wWWq1b6GdwkQnJKmQi9PjUYU1aL1H2ppq8ticfFL95zBzWkhyz8RP",
  "key34": "46Qb4UbPW968UA29wfnf2RD6x3uTzAfgrxwW21sqsuStms2zhnFDg5D5DF365AynQrocwDX1twRiR7JkGLYLmrpD",
  "key35": "3UBSyJvL9KkHtPijajf8Fby2ESbrr9ibtAA7WysGxqJkfBE2yDk6vC7xFJqHRhz8LVQANpahKxNVrqoEN5m1WCUU",
  "key36": "Z93WjZTEBhKcpTc4kUJExUxg7Qc6V3go9iEJ8um9WbuNMj9XVzW71itE2TBiRx6ipzEhE3i341j3i5tzFvQJrhT",
  "key37": "22MnHpyH1Nd6k2D5nEtWgpRopaYeyf15sPJNLnKTxjtrmoRx593WRMMzo54wwStDkedCEJwxEPMdrvWYMcXy1fmz",
  "key38": "4PDNP2H8j5Yn4tRTHgN7wYvFEMgqfvacd9sCiBSLSGUnknDhq1Ts5ypqE4tvtN63cBYxwZKELqsNinVni7rdhjdH",
  "key39": "2gTheeUjhtwrDwjV4LF5aAuUerYALfZwt6WyKXapp7pmARHaAWNbdCTa4oGbcXw3o95PQmC5kvw8h2PRjj7Q1v8s",
  "key40": "2aUFqsoiC6beQ7mQrzX8dmfvGPcHBrnWpUUVMUdxyTUbKzSdsMMac3AXV7kgxA9zWdLyTNeZ9Q2A6N1tPz57dSEg",
  "key41": "3juixa3XMkZfEUHSiArkG7Kr3DW6VXHu2i7cBSGD7wKjmcuQBRcjRFPgFVGapHU63Ys87EW4pb4mytVfLE1JqBNf",
  "key42": "2z6uoVGZQpbxRxF9iu6jNZXEJbCRycFUismeDjJBCKgmSrDQPxrr6nhm21Sy5ZTZE6ajMeJ1mCCocqSPghFWZDbD",
  "key43": "vZ5B8DSPMZJ1SZBHLAxLFuEHajsqCPwrXw8rsYFWL9s2Tn8hjVbSZx96Yrhg7k3qBS6p26wxH6qz9dLRGyG8d6M",
  "key44": "3vu4vVYdnmy3fKfrAL2qNGJemcjpT8GZMqFPBdc8hML3vRLDkzZUuRV61YtEoS2Mtq715tFKiszQmYpQ5PVWQfpH",
  "key45": "twZssT5Qg85UorpmXr8Vf1yMuYqBVHMSPa2FdQxTCuTMubiLqX61oY4X7YS5jVz9J1HePUozPTRf4Aa1au6UJNd",
  "key46": "3uGEAGx326KjUwqct3FtoPSUSCYwWexPmq7RtXvmu5Py5xegz43LFVVwDFXE86uq397pBCT7ZXhaX2pyJj3NhknU",
  "key47": "ZxGHDy38AxSupVmpTixq8nJYUJe7e8nPR253aVFBKRNAUM6og66qdqqNPHfb5fuf8VCZGbiRvk3hiXapo5Qvq2t",
  "key48": "535MbWCUNRewUFYzKWdM3j3PatFuQxsx1QSHck3jSRSzKx36WoMRSvk4AGNVJFLS1HpDvHJmMtncXRqv5YXKTcdu"
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
