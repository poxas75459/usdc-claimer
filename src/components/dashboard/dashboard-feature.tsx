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
    "5wiYQ7dVGqgEYBxopQffz9cupuyRrqtk91j7rp7WonsitS6EUNh4iNAQze5WXu9BPa8ohXRjF4hN21uVhkJnQaFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qxKrFAa8U1mxqXrtP55QhQQC7anF7nJfRbo11k7VJ9RTosVEntkJK3db5hN67Fo9veQ59PzN3cBgsZ9w1BTkMc",
  "key1": "as37iLh6pxE9giJKEwv13ZYdDT8P57gc72BQPkaDPqbQujUB7geQ2tFpW5edfYrLMD8QvVDfSs4cMkqSTckdKK9",
  "key2": "4KM9Pn8LN9akHUYRH3A2ZigFJ5uxEoQmXJg5MobDp2hPcqME8Mam7TYyGRgkwCxL95NdpkgJkgcoMj1XszmC67ZC",
  "key3": "2KFqetgAkKWTtxVi2iNCbiJmUsZ1erFBGTM6QnJJbigJKsENXncduLmFuBSowVj74PjU6mCuXc4oMCMRUzGUyZMv",
  "key4": "5KDGo3JpKQr1hTDyvfxNAsPQeL7VL2RJgYo6ffM5xPRHwQw9QgcQotJRJMyumVH445QHwVNP7uQ4WgN2frfFtr5M",
  "key5": "3ib3s1cQyT8eRtNkVGyLUW3kFR5DmDBkKNNzpv6h9jHp6EiDCK1p8pXsj7FaNN9b8op6ayBPUTMrR9VtXiPXaB3q",
  "key6": "2wCvL9V17aKRBfRKpUXSv98XH5gDisb4BKWuXbUUwztyBdPEKGuyRKDzxnBa4gt9dsrYkgpcQKorVwSZvQrSetGq",
  "key7": "5vKVqH5EHDYU55iaQoaDnWgdU7SjsUmHtCeQHC8q8yEptRuhCqbtCUsUNaRbQJmGGtYwqmtc2qrV5LX15SVcUXik",
  "key8": "4LERdzoe64ixhnjjcnXHZU7UFh8r42WmM6BFKse8mfUKFr9DUJWxNA9kxGg6Bjxxfm31p4mSSPUNdxhPDGXy41qH",
  "key9": "WuD7rMehr1zUEFKPbsJ3dk1nU54r3CrphV3awUV8PQSyERLCmwaA2sAbEALKQ6wsBLqEmPZwcQ3o5bt8ipdkp5S",
  "key10": "4qDjvLXJYCpeWA3sSeWtQwEBtV1kc3CZ7MAtCrZR1DyMAf1G8ze4Ex2xnaFX66UqUDsGscJTspSfXaLxwF6BnrmU",
  "key11": "2p6k6XLqx8hFhuw2gs6WpSyFxsg3gUu9hHjp5L2fc4vVP8JUbBR4orhy53KGCxkeHkapqMiTKPcRR6ZFobXiD3Gb",
  "key12": "4PAMMNgpckhFfDWCukfJbguoCZJ7LqqHzMYnqfdEJA7bZCZXMRKjucx3CHDe38Aq98KuNNuAaNqtCCaKEZZDKLHG",
  "key13": "2jvd5SUYfAFyqC41Z7BCJz8TqnARXaevr69T8cSNpyaM3Pvu891F6wD6pTLcBww1v5JpS3CBqzQQzvCiamqM9gdH",
  "key14": "2BzSRjXdZoi4K4ytNB6HTtMrgotheDwEqYVpbztWvbAsr9V3p9x4TJZcNUkyDzQZgwyXaju1NMQuXTQrYhcSBEAD",
  "key15": "2HRPhBhEGRhMB1ZNvwqauheEAG1KVG6VNq2ioLLBXcWszZSPZiGi8rZ9NCSEjkrSfKBCKTMrMDE6ecxExFRCzZwb",
  "key16": "5pz2ZSVHK8yBTr6HCGygJdyKyKsifrXVN16p19tbVyVGhevR8Tys1tjtkz8gkWTTi1ZXbKxPbvrhTLpCH8NgDUWD",
  "key17": "28GiBgkGtTK3YKee2RFSALiF92PxknNKdta7XA3jkLrHBs3hzUXH4uHGwidbAz3K442hFQ4KPwCfXxH4TPvBuYZh",
  "key18": "5Hb6WfVN5mv2ckhkt96vzgc1dN1984AcoUdit9SxmFygmz1fR9zuJNKPFkymnigRiQFEMA2zYx29kYEzVDCejqp4",
  "key19": "3F2wRzcshFKGS41BJKHBj5UHmV1sPEpkNxcqGmNu5WM4g5foCc5Z1EN8Vgjw85pAQKHWRTiH9AGSGU437P8DXzxP",
  "key20": "3DVkmuKT6FGdhwtzefgD283rEPyL3oeM26pKAiETgank6KWbbRX3eaoaV55gus6ymVCF5PgwiZiDAfDobvRtydWe",
  "key21": "rrtZa5z9GqdX8PAa5k1dAkEPNPXJz1MHNUyUqoRHMjv8HFpWCFx9TaNVDRQ3QUFpWBEDnFDXskHoDm1SgKziyFK",
  "key22": "5wBmgKp1YMPXWc9T8ZFuUVT9tYaKVGUdKd8sbrENhnARaPGuoWeCzNfpFCfb81hPMUvRuzJMWCPrR9QVB6x3wuLT",
  "key23": "4LJHiJTG52komUx42gLE2jPaWssC6zhBwXzdgiwCsgvei6YZzkaGYfGC3pyPmP7tVXFmboYCLM9QJmDEfMvm62KK",
  "key24": "Sz81EvQrBm6xyQMpdpGmr1eGUMA7yrNiapb5LeNP2XANQJCNX15bNNcY3DaQiATvjD5xuSfW6z9N4dwsL4cKPvP",
  "key25": "PcSJ5nfwH58YF7yBUH5LAuKseY5rW9A56koQakYjkRF4HmyndWsZYsMv5XmEXkr9Fjg9ykEYnbpdDBXnykStd1x",
  "key26": "3YfwaMvqEKpS5vAws2RGd3ktGJjf5Mxw4JXvmWoppn8GVJ91Ba1h6K1tFbUtM5TMxEGjKWa9VoLzjxSo9ssbQdf9",
  "key27": "4KshGatp1zHLMYZPjK36USfkaCkYwofMcmUkR7jvxutf1tZEDnTripKcxejXfod4M2um3xP8PdeMjwyvsgPTHCw6",
  "key28": "3TtoZXK5jY6AiNKYEuyYhA2m1WPekp1dVtvTnzcbWvCoXXUkNtyouYBWD15JBX9fnzFHHE7S6jR6H4bskDXz2xkD",
  "key29": "44cruXy1xz9M7SfmaHbYdrLt5SvYrALrBp3QYpVrA9idBgrWrurnE7MhDs7Ywp4Wq142kLLjFtH2RejDkaqFajdA",
  "key30": "fGRkYsYBawuSRuDSxaHimdiBffKGPYNTo4nr4KhyNP6BPvaxonSia4UwMSD3amVs4M5Qda9Yk9qZrenkrNBRDA9",
  "key31": "6mAR3d5DCCqbFKfFFvXATaKVFBDquDVGZWLoQ58m6BAkLibxseha5adyH7seXerXkEQazbJaY9Qt2DGyC3RoR6i",
  "key32": "3a261QBMFfrCxPBAHzxnpaHfJ6eHJByZU3TG6YHXvdFjY5M7nfCfCRrfLmgbLN1azTVqo8PsYjmihAwjWv5jKBZi",
  "key33": "62WAErAvj78HHoBheug74a8aLxuVdWTT2MyUjdpZikmj7We5wSsqakbVwdZwJrd5LjmnUM8ninZo2QWdwMx7kgfr",
  "key34": "5R1P5Shvh5kEqQTYWJSUHizFMvDeTXXt1BR8fQs7HzYYVuc5cdxDkby2qVo5DzhLTaHFVv8vd7gDZDVkWFhPVh4Z",
  "key35": "34PiywMD3wTg4yADvjiSVobY9dhhKUjyYLotbykWSrdkWkBTEDcp84wKG1s2FQMEF214nN21dvSjhkMvDkrpwWj3",
  "key36": "5qHoDGrk1gP51vqAjJiKwrpcktEvHKtzP6oYjwm92xCsg4ZU2UiqukRQtCPBwiP3BZ2vx2VxdjEwgTDfbZA4azqx",
  "key37": "52C2cz9Yxffp9CgJQJK9f9S7P2EEHZPirc8zZ3KWXafVeRsoax488fg2tELLAcgHUDZfKFFkX8GdnPWx99eiDjJu",
  "key38": "4aB6todmeKGkhfmhkoZSh2pQapZbAXb26w3HbBTmhBFfAeWqbH7w7GwnsKmZtSZcW8UiZRm1tkjPmRxvYFKjfFVS",
  "key39": "5JXWE8TMJ5f1GikMGjQwGwHnfZ1isXuJ6gskxwK4rpV3uphbuNr2tD4y9XATyx8qTFkKLoCfGxis57QNkS14bB8n",
  "key40": "5NMTCxRFAhYFbNmAJ88xRvo1MksX4hj9hr34TwgqgrRSqsjLYGqYxEym9KQSmGduTdLEyaghAE4cV4epK1DzTqiX",
  "key41": "3NJCjEMpuCxso8XtAXmPt1rA1XXWMTYUHhTnTSPN5MCvzEz7nQ7G6HRWPo732dzb7TBjjRr21L2GULZt5D8mjWLf",
  "key42": "3EC8CN2u8EyScjt7hWWH8Czx67JwRvvZ3nCy7jjL2Hu51MwqSd3WmzUyEQf5b5emb4Q4BoBPTKUeJq3zw4zwpv3b"
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
