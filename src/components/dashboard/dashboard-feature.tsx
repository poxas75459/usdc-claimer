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
    "2SJ1eMyZ8R1aYP4Puxacg4g37qDuj8TpaBJCu98oYVttGqcFUeYNJVUHAqtiUS3CMqZEHfXLkk8p1eypLBkGnS8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkwdpyJgsMkVe8S9MC5eRnyEcpzHxnX7mRnrCEXkhuPQ2TAK8qfwPA9856qirTE7sZstZFn24hHGDayWkDppAX5",
  "key1": "2fAzas3jyuu1vFncHBiZKXgJoJk62QQHYa3Sfqr2eh7WeoRawkSZHWR7BWoFZcyb6KLgtZqQoeqFT4uDNMSCWz6r",
  "key2": "wnGs8u2mQGjhip6dA56U8HxtRmMGx8XCGioGWgRV6LngC44bAPT6kyjY9xNYiwn4jRZ15vNbZekr3dzDHu6YQ6G",
  "key3": "3JT4bwDLfc3FYb2TxwZeWhBS22HNTK7aqzE882qkXjUUXBBs2k571iBoGzuTtHkWcaybKap6ukYfGRBF3QGWWMES",
  "key4": "y7UiVAsMxv9GfbzxqCbCTVdcV9vUmcC9fN6SChpJ7YEZZ7LoaiRP85xzjzWtzfjeffoWXuAhbaK7WpRgg1phEBB",
  "key5": "2JU3RkYHuYpYgv4vdsinvgeX4YtjzTQw524kpp1x2Yx14F3WUAQtv2MGYcRiT16HntKC6hhxUvaSFFDY3qbK4nXU",
  "key6": "58VokqyYg9TBNzyCzetfQm8wqVhCpvUHXEntUPDNMpcNAsd3L9waSQ52exBNE3aSNJvVfG26HoUpvDgN3dKCuoDR",
  "key7": "4Jo6sxueiXMYjYjByEscfhS48HgZtV4FvvXNQMs8fDQ7ZDnonqCqkbMKMxXzEYDKN6QehtwmZmnwzqhg8Nx87ZSf",
  "key8": "26fG6dHmBpwXZN2QEbxF33Jjo8MtZKF46ThecjZ7JJMHofKdiQvsmaZQtuQfsdbgMDwQghvUMkVASj3QRm6YiqpF",
  "key9": "5yf7nrMHXX4DVFcJEB5duQp22P72KKqvmwEoTFTDmiJdoLGSaZASLXwmDzDAUskcJ9Gg1SEfu5BSKZ9zW9r9njR6",
  "key10": "639a3Z2TUin6PcsuaJQf42jiyLUVi1JVeK3xPJvueH4cMukntb21zRkGrCAgTHuxuwHimn15uo7afqeX5K8JYfiH",
  "key11": "2EHcnhLbxmTYAKj79SZUUZWnzPv3LvY2gzx5PHzDJfJRZ522dFhsgWnL8tg13CW2ZVm6pBiem8kHjQCh1K774sXU",
  "key12": "5B7mwTYJz6UV1M6mcJMHGZAXmprStyVjr1JVRsuMPs1j5zWiojooGgiAVjxr6B4scPXA5SgdadayoxU6ZrPQjxMQ",
  "key13": "2Puy4bgvCUbNBajRxyWictNRgjKjsJwNzyT22FkvjcsSwcNtiwRcvexskqpyBLkpKyaHvQ7hLVTdd534MyXL4VKU",
  "key14": "43HwzfcTcAHDjYnbJs3tLt9nqJQuLyR47JM6dD26zZreX5mkzZxjZd947XhSYkhdaV2F2P6st6unxjZHzBGrmhmf",
  "key15": "UrBP6BTnXdUoDH6YcUrbLDNJcBrm2wqg3bvaqghVbzNaVRNh2PsDo6x4uV5CPgqEvpiVA6CbrMgVtv7J4rRouHA",
  "key16": "2Tz9CZ96pi1E9MQjsadwy3MwjLZoXREiMHWizXvpDvPeagqGh1gS6KuYokmM8E9kPW91GubyRDVCRuMUnDRuLwtM",
  "key17": "3o6b8yX19KrYfifCo7ZbagCJwRC9zYiWS9y7qo5xFz73wxWkimUtZUJJkzqo7ZicKhD6CdpYE6Mdx6XFTHMx9rUq",
  "key18": "9iUjv6PbPmMzVAmQvQw8TrruhMM8oXi9ustQDMoAHQS5EppVHtzAChWWvZ9JnbgHhcYn6DjggECMskKiXw1AWt9",
  "key19": "52sBUTSoh8WoGnF7Yx98FSHLss7WrV7PoN6xBENr1isE4nR96ANAn91iNerUAk762y32u4zayfL8E59j3RRQDzYg",
  "key20": "PcXtRBmh3PVnU75Vgt377H5ancZu85eJN6ZqnAhCWRunm56Q54fTeU7MGX5eQkvZthA6CYmMGiAwZFP5E8PUrmj",
  "key21": "3EjcvQ234pNQyp3ATs4i2wngDyy2t16FsWBGidytD7bWnriJw6tSTziJdGcKNCrXCdTdyjYtcKPct9SJNczUQL8k",
  "key22": "2iigKUtVK1JZnt2ZAJQREcAQWJjaKmMuQy2S5c9CLagBfHckqe2tDBBfoQ342jEWQrDV1YXGwjzLzPsEUCFupT1e",
  "key23": "4Kgdo72XVknJ8u7QCNvsAMvEEXYfiA2f83fyZeWnqtFe4kqZcV2Wu24rhqc5Kn4hevrB3CrYxCLQgp6kY5hchrD4",
  "key24": "5xrAjL8rBBa6uRpXZPgYsfxt5SdE7nX4oPduzpTmddRkK9duizPP8Cp65GXZnJ4iVsMsr1M4P5vr5fwezrnWJNdq",
  "key25": "3NabUNWRPKn37NGq2nxFbh1TucPNNbvu8X5KTAxMkbK2LpLVwcBYQFA4TCWcRso2gH7ZMHn3G66m8vUhghZqVfMa",
  "key26": "4r98E6te7KhEiwravfPpgc2N9aCtuhoi3QuSPmW8tddtJroXrEwY1dZ6zJMMXv9a4fqae2Ra5fzMopxs8Y6MKSnp",
  "key27": "ji54bds3iUC5NcybAJHLj2FC2kMoV1yvdbNzMAUvWdAHZKV78MTTy4esETMyip1kYEN6jhfKHS4mw1ccLwKCuqn",
  "key28": "2BVL1KxgFNifsw1C2azSBMkmrZMevucqYjyDrxRoXTP7zfejgF4UhyXxLFMHeBdSUKBHFawFwJwUXJidPkr5UDtV",
  "key29": "2piGLK5q6kxY8iKkjwCR7zBcccdmiugt26GrGsPgU71te1EBBbyaxg8C7vwY3k3yMpW23i3xzZVXDTRmwf9iBoYg",
  "key30": "2Jo5eRcv34HPMoW14omqDEmiuyvPGbYNBxUU6WFC32gV6V35fJRx7KfaMjcxvAcz3bi3N8Hy23FUeWrPsNuXbBya",
  "key31": "3yjacVM7nexKnMi3E7H5W4qD8ugGux1V57Z5NBbxGWsZUEKLb9mdREDpFM23LXickMN7ZQ1ZcoTwWYagDFPBSoWY",
  "key32": "3XPTTkmnkDPRKJFhCwAn2QeT8D9DhgZPFcW5YpGmKnjyMFQAncgSJDCndusjd5nUfaVK2br5ACSRLf64pVVcEksS",
  "key33": "qo95ekBxnCgt8kJ69GYpqjrJ3LSyBCkTiwAuh9Enu9tmVxdcMgQ7SGhiMrAEkQT3G8sqEpg5z7aTzzCtGPQVqoY",
  "key34": "pvEQh6zc7aPH3JfHLeNzVfZsyhFHzKnAHrqwmHeKyWCeGyTqR3zoLpRDv1c3L7TfBAF53Xpmj87BVJNX3fMYJ37",
  "key35": "4Fj8MzeJRXeCny6HUk94vzwWLWPE7Fj2ZuTwXstMqTt1xBKv1eaAUYjLix3YuFKaxdEqjrvKdoPVQFiTMa14A8ty",
  "key36": "3RkLUeKHPBtYhb6wCw7q4P5Bf6xoiSL8SD9DfemfbhwVW6tU9zpqQc7DCGF94JcRoGChYa62kmzQxXjvs8rZdmhC",
  "key37": "41feC9DvfeyjimmefFpmRBGiVtGWx4ANhmCbtqMwNRBY5wQKqjPFC5X3fwXcM8PDWfBtx9en6Mvyegj684g54eeE",
  "key38": "4TH2eArZfnUkxYaULH53z9Y3LFUaJR7fRcywKziH3SkDae1GyoqrECbu98e3nhu42W3CpW6NCA9ZEprwFfbBz862"
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
