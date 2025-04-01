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
    "31gagBZvWTEG1yRHRx831YYgRVfVys3P5y1MBNB464pbGeESYRN677hRXqQWepSidRCUUDiyNmqh65RNbMQjY86D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zx5pZCUKx9G873rBYUYWzFuLETZtJTnd1stvaSUcgRdqv6bLxcgiWBLPoAxNQmGYjpnRvLGdGWS6ohofiAAv4CW",
  "key1": "jKb6wCQ13yX1djSi7TzCgDZMekrdgRgyfryNFcqYHwoMYrCf7fnZiGg1PENgzYMDPV5RaPsNMGnXhPVmqtrtjJ3",
  "key2": "5EprzEk4S5dVnLJRq5GdYE8BRZ5Snvs9Fi8G1Tgnaop2SeNXdwC5vp78itFecTtC2PKp5nvnjJuetReMgMSHvJFH",
  "key3": "3DubQcHwJuiAjt8amZ6yCbju16LyYEVefMXK7f17N2bqPdxMKqjRym4n6eM37NvDfgH27fwGsNRbHtH6sT1HJQDf",
  "key4": "4bAqTR9WTVno1QFrVQnKo7uwD3mgFh2x4u23r6JTYsy79Eak3fAQirTQuhAN1m2cS7GiuwnSF9Sm75cdSsxEMsXf",
  "key5": "4dEHzyvMYWm8Wy3irB8qBFiP2LMhPKayXrFTfRddua6FBfjpRE9J6DSRim6qhdPr5pf4ZdqYvdSCWipowGBVbWhC",
  "key6": "256QBek9tbepeecu2FJEhaK1XSGCtn8fDizrC6sJasXMvWnhXvyQKDLok6eD4YQWZEqZvE7aRsf6xxmJ5HqsrbN8",
  "key7": "3zRKaCeWj2AmNRcqe7a39nPa4VeLnHB78Gm1bNQxMigxwQhiuzhX4KfkVVDFj65HMwMiAxumPxa4Nx9knJj5svyu",
  "key8": "24odBAxg6p1BLmvLvfT9Fhddd9GGAJSkLqnCdPDnYJ1JMexuLsebAfaUX4gTh1nkgp4AN5LtYdEMz4Ls1KPHNhK6",
  "key9": "nYHitrhyVhjupi5rqsAAKs3E5miEq3sLbaWYpkY64oEfjmaDcnigisXKBBSE2kRYmWfMcoV8dNoAcx9PJxZHTxd",
  "key10": "2noA5HKxy1KAafgUvqfe1S7G315hVYxWHNkgfy881CotYqRvexx4pCSzz9VHcBVBy4FA2BHK9RdxonqxXY4b34em",
  "key11": "4dMX8L1h4Pn2uWXSGZLRi8SxFG7mz3H4sJXNmSR4DvYxmM7H58i9UgRtCrtjtgNp42gG7N1w8e9QSePzQYijMJhb",
  "key12": "3LmEvLHcsA99FJGWyJUP5bSCD98NzhxqbbNLHiAxSdY1Ra5hWR16Jrj1igzpGucZAxuXntftE6vwnXAJzy9iEPBU",
  "key13": "62hL1TQd4NatPXadPaA6mcwiqUQjRJh9kMwGhoqcJfd9kZV3Fb6A3y2AjmxQoGjtSJQyTFQYLWX1k2D6B6Zjk2CD",
  "key14": "4vsKCQop8qmRRkBFWgwF5jSyH4UUAR9zG32tbkDngoAEGDrHDAL2TocVsKoVru1gmrjJXC9Kd9NcEjySwDXUFSet",
  "key15": "3FtRmRqaa5jAGB9mVLE3h32sPmMQPtsaAHyNcHoPW85wAkJJxjY5epZRbsDGRnpzPXtgzjGyXyBrsfjFYhUkkgqX",
  "key16": "5ZC9tNphQWjeCL97XkHQEmXXnNvSeBRYKTZcz21F1fueS8X8e61BWNFM5TfJDpcSCavanW4ZmFVSTmmRJuv4KPSn",
  "key17": "5phc8C7TNE8FwK7N2JXzk9SRf8xGm1JFZg9YSEGp9JmRSXANdZTkj2M6Qt1do9S8EHUkMTCN5zVMNAmn1fqVmYND",
  "key18": "Xkf8MNBVNx2FRue8tKArDURTDc5Yj3rS8747wAGNZrThyP2gy8c5Zn6FanfBWFhNNXWsDxCxuNU7kd7Jo9P9jGA",
  "key19": "5W7Q53rgcyNTgb7RmqKABFcvYBfhDSnZru53HQ3EB8FmXmPYsizhj7NYEfPottg42jrdqfavmGLrhQ5VTjY6DZ1p",
  "key20": "2zTtsmLTY1ACtA9Za65uoLQ2N32DNYmUph6jwcBDLgnPaLinAoNEQ1Q458V1mJDiXDYLLB9YQyUuzSLHoVRDieJF",
  "key21": "To1jNoH2ukH8N6PGJfjgaUt7VhJMUGxG2aDjAtgDRjjYpjmWKp95Z8FRpB62QPZTAHqVtzsFNn9WTedXAqv6r9r",
  "key22": "3Mw5JSPDNf9DspXRAcfbdLTvQmHRg8R4FsukqnLmiA1nZNpZKNbjzyZKa8TtkDqkiSE22nyjGMnZiQVKNHGaKsYt",
  "key23": "42bAgpieuMZDcNYp5xLXfyUx18ngX1JVtcCUFRi9UQZNR4BSNXsDUbM8A5wBwBEqDcRcaw8FRxhjZ6DmzLiUhBph",
  "key24": "YHUjaoYrQStV4Z7JWqkqJTbbHYzHfkvSRfxgZCejFKUcregwpFRxDQuEXBGp48JRZGbkh89TwcDJjhPhczJBJep",
  "key25": "2yb61zSRkqfbr1CWcrgrJSobtddTSK4AgDGS6LpsJz7npRkizdwMKq88aE16Ud5Qesz9wiiV9eX12g3tU6gkkChA",
  "key26": "35iUoqKSF5oTs2jvJwkuytByuFgDUtiycF3fA5EGoTaU6smH4GXwu1AziXNbYpUmXDgqnPdkennqkbPTX8hdgqkT",
  "key27": "5C4EsVx2xpG2maZAqocUQUHEKj73PPNxVLBXt8pRtA6V1EMVvgRk513fQUB827tAgaDsyKjXectU875UocYuAAa1",
  "key28": "xLx3QNDZfhcHLmYEZWLAVk5Zi9fdRqSCDuFZadAyhfyyU7yMVUQp68ruMYAVBpRhej3QgCvUsnZnKU7kPDxUQtv",
  "key29": "dTFp85Z9CP7Sjce96ZkLDUdAhAAJGhr22aNLh4hdSyHrLmDyKLGe6kwsc7fLq1Bx1vuF2217ts15WEoFvXUHT8B",
  "key30": "Pwkf4BV6TcC1v3rYiHgqgcWH1kLfrmVDZqDKJdVP5Ftwo5wruEPEwX86Xkzutw5gNJzaDBjX4p3jNy7KYkiWFAZ",
  "key31": "3t94pMbdwvUYYdsFqxLUGSDZmQPsapwTS3PQWLS1tjS2r5WyY3trJKHQbDDQXTu35ci3JaXckR2PGRAESbDxFEL6",
  "key32": "4B5Guqtz96XgtaPXfEJoinAJULcsiLvuQ6DoRhjYJHvfmJZbkE5BDsfGmienfBnbjGRgtBFEkrYnVmbCvGSr2zsw",
  "key33": "nJBHGhrT2Jfoxw3EXwqe2mBkm7pJiY5bfELy9fWUG6Z4Y7puLbpZPLd5rfZkYDfQZAC7xRM2GKUKa5BNxAkrD29",
  "key34": "2krFSUa14CdwrtFks62HzboLYVPd5TrfQbfaM8v8FiWUcyL8stxYhWWVsULZzVff2tPCDoZKxtPQjhsvqyL4smJk",
  "key35": "3r424c8DB5H4iJ2MniUMkZxK3aLDyFrThVMVhjHBv26sW3P17TVvD8LExfwLJDfdHzFveisacxrroFffqXiWQ4z5",
  "key36": "xyUF8tHWXhonXh4iFaBvCdWakhQVRHNohsuwcuVF5dpZfKqSwiSHk2YLP7YM9dpVf6iTPhzaVvoAmaYG9kRZDZX",
  "key37": "4qT7AkuhE6TaYxmVKLhedofRNUpYX84mkcriCJ52WKMCehum6ZKEYH8gZMN8JfmDxvh7TUWewiEXybEvZh8uSkAo",
  "key38": "3XAxkfYBcGtKDBvmdEgtaHyt8xLbCoy4Vx3ee1vprpSYfBKAbG3XVJJm7aU2a6XVyzfckkxKXJnzLRcMJvQEGZXs",
  "key39": "3UnNQYkYbiqRTqoT6REcFGzSycNAXGpQy1PVhsTn2mG6RAWBL2iKJUoWd3za8FXTMRatNEjH795QoQ2NwMGtpbwm",
  "key40": "5zbbXM6xZnvWKuRSt5tRULb2YcKwjkoSaehBtjbxjAQMrDAJBXwUmJ2fYSdqT5LwM1YXCEridqdmWtcynQJcYLSR",
  "key41": "bThfhQPrai4NaejZS1aaoqrwFhRccFnYiW8Cm8YeUetoQKer4qccywX6Hms76DcJAwGabwq3gyHuHEWwYyF8JDV",
  "key42": "66gqQ41kNpxvATjjrP7ZvqL8WXLeFgU1ypsLMQe5x9RujwUH1MtVeyw6fr8Ux7uPGTTk6KVq722gVsFCeAt5qpNu",
  "key43": "3GsCW4nCqK8Yv9g3BoLNKPPvbU7paK3FEKyCum61fDePH2LXovAa9ZfK88vWEXBgRbMdE6eFhgubtjwxUYPxEjun"
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
