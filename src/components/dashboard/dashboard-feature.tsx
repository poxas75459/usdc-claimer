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
    "3uhYY8N5ke5JcJoJyJPFZ43nsVxwXCrsS2TBFyxPq4DLT9BLbmvNNDwP5BMmgaTm8YHgLo37Dn9euTxgLQ4QoLS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GqeJjH5mWgtVECbcccJRymY14sMJAeywmXPU446p3hojzUZoQeoM5Y5ANYFoyCJoGbhrjx4FwQZU7qgvTo3Svd2",
  "key1": "5b8yXGKYg3t2Q2niGLKeAeHdh84Zh8y7yZodt4t62au8vDcBNzgXahfxECNJbqhbgzN7dXTqmZGapYcQsoLVDa85",
  "key2": "2KD14e2LPxxkXXhaJo7h7edtTXd1bK6tHkkeYssWV7ipmujCirKE7jaKG1ueBFwCAE7edmUufZmsRHqnKp9XsEyE",
  "key3": "34gGHHBPhyhW39CLHtcAcw1xVUMKaYfagXZcDDPwfLye4xXwtVdL2McbzHcdqTZNR9Ge6mJKbyFpZunDr8hQVSC1",
  "key4": "5BJKnAp38nwcnHfeLZAHXuqidH1oUWXiofQJcP11CYZFupLVrztUviFhEPzKhJ8aVU5Li3GPWeuW69EDWBTwKnfh",
  "key5": "Ga6ioU7467ZTQZ2y3R9AE83DckaTwDmn1RJyd1dduQdYPQwQBgX8AkdAbz6XeFcapRdaZ8PbvuiL6PeFnRMtjdh",
  "key6": "5yKW7rf44NdSvic9HngiAs1sAhZtgQgEtP8nVyQ3tPDQCn7N8RQuvi2HWuFBPVthC4dGjY5y44ex3PEUD1xGggYt",
  "key7": "4hVDnn2uVwzmmLdBguurn3f7J8u6aX6ik9XCUHYfZhs7WsR7TKZqDSmwQtA3QoWWvSQR9UCer4yRTU3Z8jxBTW1y",
  "key8": "2EJUfmrd6gMwSedScnSVRpN9ixugnkCUJyEpm18AKj9muAk5KBJ2mx9iNReSEeF4GKnrq9q4v4J6LF8ZSvxcBwQa",
  "key9": "5mV5jPoq84puExWoFwnSZnu5u2aE3HMRiLvSc9rbJBiS9MAT2Zc7dmU9uv7T74UCoGhFfcrbL2FBTfe23DY7R7iM",
  "key10": "3Y8nLrV8bd2QcakAPQDexbmDp1C9ungU3NHt1vdMm3zf1z5oXeEnEhZup9Hadvh1nTdYZXv9LN3x1BSFbGAjfThS",
  "key11": "3vxbj6WMxN9fJ75iRo4koU52t186pnTVroELQb74v8Kc78Guo4AT9rNcAz6ZwNc32afhwJBGC18g7FxagLx2ieAS",
  "key12": "4ygsATnPSPMzTRNxoBsGbYaffrVatrU5iJx5tnig3hjntmTcn9qpMt6GUEXfannnEdzfu2ghukLwfrHVG5JVBbu8",
  "key13": "4PbJau69oiQ88erf6hQez9SBzt5VxD5nB88bA3gD6tG2bEsuJdVVoBqzSujaZZWh3fiWJb4HbDkN3N2ZNiKh5CWH",
  "key14": "5Qy3qUMfYqxFyFGYxna4JKf66V9knNXWr2JcdDwoDCQAeEsncDcUMsT4us2f9D3ER2VbY9BsP6oH8dHevoLdiVfW",
  "key15": "uGdezYs4SLjD1GM3x3jSK2rwiXxJscZkd5xYUF8S2j2ZSvKxDggHugU3weQJErLPCG378oRNVUbwC6GP1CiPePM",
  "key16": "41JsyttnU18KNPjXzUMNZoRVnHj5HEas9guQcCcxN4TSGqLmV3VDSwPqh8KyBDXPCTqmjHRKty1qxe7ghUY7gbqd",
  "key17": "618ZEBvrvpudmEAxDdA6zKr8wY67GaK1w2mL49j6v2R6UvZizmNsCJ2eSa3FoTfK34gttRBd1Ttuyk9pBThQRVEJ",
  "key18": "2d6Buj71vZ1QMkrYKyCJozBsJRgFE2Y3yxhEoVqHtSZppjoKVC1mqo9YvEEGfyK5TXr6TKEa69bT2nxbsSpNbGMw",
  "key19": "2kJus1vRB1MaZB4zMUyrGuatK3EGrMqSwajHTkuff1S3AAtSJJjPfQDTJ3FsWQFN5X67yQpszYC1eQ9LYey4vMqf",
  "key20": "2wHBQZZP6K9de9sH9X2bLviN4N5TjeZP7KTi8YVAgdsDbKBEX4N8MeNAYPFoijNJNA3Yfb6Fgz4SpNarHoWe7Dd6",
  "key21": "e4weKSYAQb3xx8P5cwY5aGfra9ayRQV42UCoiGsWtu4GZyrRVKdgqJwbrppBaudgqw6dQdNoEJXXEzPfV31J1Aw",
  "key22": "26NYS1WCZYCTmPm394cE1Dj2BPWKiVDfAKuvC21Wv6hePyGy7ZMiv3D2BhzQqfWKymFCAH8kUMh4h94qYQg5BiWo",
  "key23": "4LhU3Pfbknp9NhLbJBVniF5LYqn6M86tYjt6LMXcJSz8AUmNc4Yui6SperbX6KZpWycYVUmsJXTsTadcJrAWnr3Q",
  "key24": "39YPYmhp1aBxbWekjzBT5fdQp7b6WGphtMbiXu9ULQwvqL5bjn6kLgUPCH1DrVkReHm4ppMdXQ2ij7wRRVkCCLpM",
  "key25": "3stAjM5QQvh3GG9Fg8tmxs1DtW9888jFPmizJE5hEyPq4QaBtoVPMHLAq9EVEjpSzUKn8aYQThadz9shVyGNgytq",
  "key26": "oRPL762JsKwAwywqe79Hzj1SbyS1hkgzvwZc2NvxtCsLhGp5FZ7n7DitSXkdfkrMbd1kTzDhaz2KbWAneGNdimK",
  "key27": "61sa3pvonu6J8JrQrGqHyE97SsYePeRJDzHvxomgTuVBPdPMaxo5WQzUPKEE3HP6YCyYbYT8eWsix4WBhkT5YytR",
  "key28": "ryfvDUdedH2mfMv29XXCiTouyxGfZDiSisaB5MZSKotyqW8sV5MrhRvpL5tsD4NLi6eTm5L4DxqGmTRXTUSZSko",
  "key29": "Ad4C2E5nidhy3Qogyh2JSV9fZFHZHCSAVLjDMPTm7CtF9myLuEtcLgXryENEZEjitv1oJocDe6y23qkcmfkngda",
  "key30": "28sq65jTFLcdUZ1LagVDX3cC7DxatLD4mQNUjfk3QSf8RYQ9sxzYVvv3gLdTDeLZTfdXMdPL6542vd52BcgfKiyC",
  "key31": "3x5x7pqyKp2EQKHDnjekMtarYsZFSrjJyVvWZUxDhFut3rK9xoncWt3UjH1VqQWrGxAcBXqkoWQPJxtK585ByZ7X",
  "key32": "mX9XyXvMcaG8HwMoF3hxSa9SJBqEmUB6iBQUAEJ3TYcNnFmZp8GASfXZR85QfU4vYixsjYZicaE2Zqndh34wGcb",
  "key33": "5w7cmMV4et74a4tftnk33JC3K1hMLvwv85ugZGin9PuebNpbcNvbFK1Fu69XaRZ4f4FijppdMzwCktsrJsDLEkBp",
  "key34": "29vgBYvurYXPMy6z1th2YmN5ojm4nj1sb4zpcqT9fzsgKAXBqtJrALYgYDVg9g8mjLHSrwBCuqhbgSC28jVgQtN2",
  "key35": "55ZA6YZKcUARjzpWoEyXNzUktSJ7qx3cBu6shW9MNadDio5EbpWs2CHAtxZTmwNWmorY8xouFT1FZCfUtL3jCmH4",
  "key36": "5aCXRc9enGJCNT5ncRxcSgcvEa5S2us4qCmGnwSm8hUEXnZ1eqTP81npKUEhmeGJaWz3kZwyq3aDT6Kvc7umNDWe",
  "key37": "3hrDbmKNW8pVa7qD1vqrafvb5angQi3UmAnUmJHnjZgYyGkRRZfNExV8fAPy6hLSFoBHjnmBgjLMrwiPnxnBAQBu",
  "key38": "4fkXdsezxcfg3EdCYnEPJv5qqooVeryBgiZVTwX4Mbaxnhb2VohBwsGKgCedzr4RH9ueFbqLjneCktxmXwg8e3S6"
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
