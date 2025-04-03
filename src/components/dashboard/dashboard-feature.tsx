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
    "2cgBKLi37ZMRjaTdwUaRFveX8AGouj4nT3R8MwiiMBAdGmuZaa6qBGaiFSwLoxLu7YsZM9bmxhoo1S3cFLrMsiBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HuBkTPH2MPviQddD3cRubr5oYoYojBpXFw3bFn4dzM4Sa3gbesE6SAvqg4kLfgb7LwT5t2i6buUHnu7Lj7dbSVK",
  "key1": "4pP2eS8jNUoDNdDie3SfCW4MQQ42UW8pgxrUdPJTzPwiQYTsqWjvvLid78Z64Kun4iNwvSDZzc8aNRRGCQPpFACm",
  "key2": "3ZNN1d5NdqLk7CWXfiGvmoVGGLQpevHwpUND7gpT2FXrKN4FdZe4q7C3CkoxsZ2yEXWTg8oZipeku46ZtBVoAZXT",
  "key3": "1HBJWknWCGaRidZKpDfA46nVTdXNggpx9QHgkmjPHiKJj1fehsiHHKQQEs8ZQWQPti7GgQXHVVQmz56AR1xe82a",
  "key4": "27NgPjpoCgztzriXPd6AwnyeESrWTTaKqbiUB9EfcAfTRBFZewus2F9jLAcBFtRPRKTPbzNgP3mEnht16stQBbvW",
  "key5": "19jeCUgCD1w9WzGMCo9jymbkcGvnspNnZriCUxCBXizjnA3ETU8yau4UWNw8FrZtvsvyBcXjoerzj7Ysm4iFi1p",
  "key6": "3g5UyVTLyhMSFJUkTeRkax3yo4q4KRh1wcNAtrnTmNogscq6AqgWwqu2gqvqjJuB1wsyYEgLPSvtvTDeh62Nhgbi",
  "key7": "2TxuEpr7xkLEyWQq8PAHnUPjbXaJHcqrHXkq1cZCFNGGWo5DJE9vRhzXhW96Zo5wXL3sfmuMseEbE9cqFJvbDcxk",
  "key8": "2QsVECjgnHhvvysPokgB27gAhATw59eW97Mb4Z72K6KShKacbVWgkHH9KJbALUHbgxXHoMtvzqSYZMW5m2LEjF9D",
  "key9": "4tCjXoRGoNYYjYdZBwa9FRTRac41AYa7qSJYmGsTdnQRpZyubcTmHsHCumd4xmAAnJRoFtMcpwJn1D5nrFKemzbo",
  "key10": "2BoZXJh11ebvMtbR6zpf6chj3yYgCgFYrtKbBpH44YhoteeE1UFHMc6PXtPaCTmy4nJhGAAtzeFX1AdxDEzqKrFp",
  "key11": "3fecrv98WbhWZXt4vNRscPBagFRTrkmFqyPC1Liw7hRmFiWT1QoC7v2QmBEhd5pTisFGNWvHb8Eku9fEFShAtdPG",
  "key12": "3gv6U8isE9wKoqmivbFsSdMUc2bjQR17sZrfwtPBSDDaVHbJtCGbdzav5CR2YnZweLPc2xxL7aMrttVGtaUvS5xo",
  "key13": "2dn7G89ZDKzzJni8SrKbCESYnRjGxPmmeEMhk7EZdBoqfiB9s2x219k2hakGUNPnS5k7vYZVPtmPuDSRavsX6F7s",
  "key14": "xHh8B4TLTrMqJZrbjMe6whcFoo43qu7iLsWhDMKPJFNneqEtwVph5VvVyVaVuqNYvtMDje87EnQqoSRKBNz7KuK",
  "key15": "2aEZMQSE9cYuy67jRmwQoTPsQXqvw7FvugQmkroKAcogE3651zb5cZ3AmsWLaLqyXKWDPmdfjSg3jQDFKt3qYk3Q",
  "key16": "4sWGbyEykYA6x2u8QV5fogL2imEhEBcpUdM1mKP18YSZCCzch9YFgRBvpqz4TiTmQEdTH4C46rsaGr3HWUBgqsox",
  "key17": "4wKn5HmDAGcWfB6z8CAvypoGmbyLQYPd3CUs3phZ6txpt7gCYiTXn9msw8c9Df4wEXNZC3rj29Wd3ocoCQ1VzcMi",
  "key18": "EXYJHfi6YSWhuhLsaNQRvoU85wTWcCqFU8QKAps3FQ71CAuniqAooKDwzk6rvw4vk32aWF2fcKHtf4D1w3MgUrT",
  "key19": "5wHNLCRj3HF6NfgKUzbV4k5Ed4ennuWbhBZdECc63YM3CqiiyJJT3zXzsDrRzCnvXZP4MSr2YDVNzYPbHbAdMmi3",
  "key20": "2QTJDWonDG3mNxnzvUbwGpwbDXsNuf5NdhSjxUYSZjBXGviSqRtdoBk62rVvpRpY6tEuSEXg9ghVyhDfsFq5NPmD",
  "key21": "3Wo8aR8ybZAfGD5eutZpBCDc9AzwwDWiPQbkCh1jgCaWySQFTYZB3qPNYkNa36pe8P96TNzmHF9u9xfCdQT8vTBi",
  "key22": "3SNGWdWMBjZ52JxxHfUNaBiHXaqQgqv4h9BkR52doENnSZ6DUXVsfEVHxLzWM3uhPzKaYygPQQFCqX22ZFhKYA3T",
  "key23": "5zT5WwUNL7uJVUHQgV8JV1Db5PTFN7SbXS9Mvj8AHud11F68beNpYud97U3sP3knBaMyx2WFCnMB4JEnTPUwN2mW",
  "key24": "31jouZR3du6d9xxi6fTTJ22geoC5AFxr6cUDLLXyULfXFKUejYwPG325pwQ7jo9vwdfvohWBnQ2RBXZ5kfxKnkTG",
  "key25": "3LtRJLCx8zNX8uAksAqYMoLgWoVidTGiyfFfSEixxwU8GJtuHz5Sy2EhQCJYusFTSEvqdsFi4zVeteThKHCmBzmG",
  "key26": "2Rv89cddEumgRiWUtFo6FizWWdPGmfFyZ7oayJLwMLfaXbZ93HcekzyWH8WSJD5MCX6PwaHyCswiNEvUc493nVLq",
  "key27": "51uQowjrFb99UnSqfzQ9FfacSX4cMht3ckgpULxNX3pbsUSmjCaFwGL49aRHxEJbHAaeo3QX6No4PQQCrWKWqF1t",
  "key28": "2PQWJNnUoKHDWnFMxy6huKSmi3zmE59xYpN22hiKRbBmFuhDkjcSpmMPqFHzZtN7ZNpokWWtyQUoHFXo7vMWqToF",
  "key29": "3VE4159W4wgAHJ8WzsF61SQVgWeaNg2U9mxycWqpxiUb79KDPe4LCuNy9d9uoFFopqxqoTGoYuLap1kuLF2a7aY8",
  "key30": "4EkDw4WvJb9VDsX4kgvfMe79xZD2XMrXGTYvzCHdYBgqiiUBhmArVUvZa7fJ33bQgsGPUkQEzLsgoF56Hm1DpXQY",
  "key31": "5LtUefVyjYFmziwGAXphfJsD238odvYeH1yMAYfeAHWZmnHYN9Vr8cEvbdzEojA46Q7CePvKZKp7texs5e8xkrQw",
  "key32": "34xAPGk7ctMk59PxZbxetwPvfTKfLLN6jJPsZ627Ac7ExmeCBMovexxgqtie6yVnTx4HfZS1ySaHrSwSK1mEVaTB",
  "key33": "4C3dmUXv2YE5hHG7cGZf4BokbSA44TDoHfqqNLKDYcpkE1VdLscVvyHL6kWu6hcJLkVuTrCNjGCDKG7fxZ7X53FL",
  "key34": "yBYsxQZYxCiiWjmYJauLnaEoaKt8pLFgBtkT7UjErZXyMk3rdRSA5cizNQ8CWuzzUmmqDLtR9cWKRZyeUojMsDc",
  "key35": "a3dMAGTVaJQmMeBAvTSBMLgHn8hEA8PoipP93PrnwUSobQrKJpKpupSbmHQrpwXhqgMA8s1QZ341RDZiZiNVaqM",
  "key36": "kcJCFFQG66yn1uFp4HTZNMjeNPU9La2mDSWGc3ESNSsxaWBnEwFRGGUVDyeinFqQXTJnQNbAXjSfesQAXpxw4NU",
  "key37": "5DiGPhzS6UqGhh4B7tistXfftEnbEp1UiXm7H2GFcB6RhXZvayHmt6xaxvMA9brAWkb8kM42N1w5pJMhvNMDx1PP",
  "key38": "2iR3YCuTC2CdTBHXrHdJ7QvDCwsx3Csu4uQyUFCCvrBBSxHBgAtExmbyys9dmxWugMdeYKFuPVcX7KGzV35mZMEN",
  "key39": "4aFJrhALkj2TK83bTStKSrip1esoBdcpTHP3doNgxzpoMWfqdiMmGshZjdU5akeLaEMULmaTDzpwQiHZui3a6bmu",
  "key40": "3S9paVMHYeudgb3LexiUDvG9b3TGVhSk3M1kwUGxJ5mQH1pjALpQACNgzBPbTuHb72ZDe1bvtgrT3vYjSpbUNZtP"
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
