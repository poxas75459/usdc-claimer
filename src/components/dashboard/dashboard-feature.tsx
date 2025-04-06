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
    "36fKuja298XGZtbqXyrbVpjGrT1us8i8dYF6o2bxrdiwF2mKGom2WjsYN5h2m6nmETRZcQvyEmtppkeojs1hREkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dVQCfMUGGeEMxVT2mznfVWf2edjdCzvc4TPJ8y6HTXUPZNd3gMshWQYXJvVkCdCs4ikRT9ztU1ocnf8kYxB51Vd",
  "key1": "4ehdqLiiyYB9k3XeMGAkJLuJNd18G47j95NMTKP7asPEPmwjwFnJbuxP2vt6amxf7Wz2QvBAxMTcFW2ABqLZ3qUN",
  "key2": "4wAi8cSdYKwwSYjxC8xZPj363hSKgPQKAzZXtxRGbeVhxFQRkUSzF4omRbBbE38xawth9WP8VMjj2YoCsikrPdnk",
  "key3": "cXws3V23B1MLXzPqhGnMJm8RwdQFQ3txtRhcd8nkbMLfyXHnz4fdtN197xmSFLAyiHajBQHjFwbQt3SMEfH2t2u",
  "key4": "3Kz4PQ8vYqeXmF8pV9Q6HfadY63cwQyPWmvPwi2xZAs3HXieq4KdKxjpNGEkfjRPbjvutaGcgEuKvaR4GE29gyFr",
  "key5": "1v7wJqJTrV9dHwFfgP7yoVX5XMiqCFTFut1iD5sRmaAXqN9T23wioZSv9zo5BZvuNrs8No41LCr3gpWPiaFsYD3",
  "key6": "5zABA6aDy2nT8WqwwrR3bBgzr6urL9AARTbv1BX4eWz7M5Fj22bwaz6stP9oa3d2t7Q6fQaKYbYTsnRCBs5XfYuv",
  "key7": "43KQjsKPdPkN6sWUsR9jMAGXy6fQg1CoaF9fLyP6xAPdreQN6GJX55AebCfiRPqeMwhknBPc3unuWBQEiUrT5hJj",
  "key8": "B3VtswErtZnXkkZJMRad68ZrfkkFQ5V4uvVbSknYnyFTkK4TgtPMuG4FANAo9H5TKNhNqsJ1brYt1TK1Hpg6XMW",
  "key9": "67drQT1uyAkkVRgF1ZZwQRxDxKyaHJc1zEGzxoNLuyEf9eXrT15eTKm5aax3UozTcQUh5F45f6jmyws3muwCit2j",
  "key10": "2NWXHZ4qioMWsvnqELPSMuabG7NYume9e31V1MBxhF7BwtEG1VARS161MAvDd7UMWvtq6VvNYXdEWhUC84p48Ugv",
  "key11": "2xu9wZH3dLFj2jaqH1eB9ZTeB527R68tM6Pp2qoH7R7VwXGiPFZYKW1PybfYTQE8rZSsucHVEXyEKFxAa3dBuMaX",
  "key12": "3e3cmaQZYMonaktbwEmuRBzrc8NkYLMWReomX7Ht9AitSM4MemPYSaqoaVcDAdxQzLdu2hJPqcBAZjry2sFPAABE",
  "key13": "3GC2iUpqbW85iXj1hE3hqJYGcivC4aKZWExS1AdDRhPCZ3MtvcyCeWHANAk7NXLJuus49sbokRf6AQftWcHdZWqn",
  "key14": "bnbKFTNioWUHNWv7CUt3Gk5PNWCH4QfMvtYggLNFRzi4fawgNfZwwa88RsNKQhL7B6PGwvWAP13h43ZmQZxuk8x",
  "key15": "jRV51uevPE3NjRQYhX7rCepsZ95xjNgkP4XuhSCnJnXsXrCxHAsYdzCwpmJUgZFGNx3kmxf1n3tJazWDide1hxv",
  "key16": "rzbbBxaPzmVP4H8nsQ2jz9yhMFK7RkTNPPQfAXqAduwfZbgK5o2iYyLzjPF632XT8aFbz8VJG3Nq9SKDHB4Vrij",
  "key17": "42p15hpyPguUPaEpEdekmtPb9ezyWKykxhvqtf4MQXDai2LdCvHTQe7fCTPaWAMaebCWGC7uhQHy7GLC66CJBjPn",
  "key18": "5aRyMQJ5o3SWhtH5xiwzm6ZJ6mRKahEUaDR8imuXEmQPbTRwLZAQuNEECLp8g8mtVVswamAH4erUQShMWMPScGum",
  "key19": "5xit3AxN5ML41NsX3f23A6kytTEL2A9E53UAx4JZ9fV76RyVybj7ix6RqmDM5X22x5YpYKpkW5JLm5rtwzT2hthe",
  "key20": "32FwqwaZnwQ3YUmrHppkfiD7v7hrQ1jP1HWiZiYGFu4b5ixAhpF2CfpYTbvsuWTkch1jKvMzGRFDcirZdYEJFnj7",
  "key21": "5FadShugLBVkrXAfKv2bzcPTvY8rhjR75PYPKCeHzKr1RNW9sogGwtieXWJxYnWM5NgvY4wf6nfJHwMSyK7PD2cL",
  "key22": "2zEtame935yaLyPrK8WHvZridd6aEUmMoiifZLuSDfQ3a2uEvJd8EZeDVUq21D4Nu2Sb8AJWrZErEKe38abLFoUc",
  "key23": "5CWVa3ERdQxH27ispFFvuZRdLiKbmoym2fk1jGbhEQr43caBZqWUZgFTy1rA13ULkpg6Lzk7TUqbj5TmKyb3bmjV",
  "key24": "2SYm1bNt7vEj1NppVmp1xmXqdHnXyt3Usb5it3F7fBgiMiZqGtv7xMGX9WGCxAgq414JwmJng7beVsxfwBHzrcBK",
  "key25": "5H4DFZ3ejbdhEw6B8PYxt8amLUwtyUzKKMwn3vZdD1XuHTPiwReQbmZPGYY5PHtCCohs21GJdtgw1uCSXgcB2VHi",
  "key26": "4sU1FhtJH3Ea67pzVMW4kfrW4TeQrX5mAW3GjBKZYa4zKtfBGCdLV3FDk1VAwVb8akLEdSARPdVwCMJcs1s1LrcS",
  "key27": "3YoQJ94cC3SuDXDyHA3BJ8QnLSYJKwVBGRmDtWvQkYXW54K1j2VMBjS8Pzoc6qEagjxqGQvmRqTFuXk7PyDFWUR3",
  "key28": "YRyyQtghPbu2HJ1XNe3XNzwcmxtU4KfyQyF8yNrF4pYeoCbrUBQ8dGjbMYHgMvpoRyXDV3wQgaXVVTwzFdqfTwe",
  "key29": "2pHguSe5hWZYckytfeLbhqkZyKhbFKGQdFqeSgSs9xfxEjGrGoCGCkXXyG5vzYZUYTmDYwdZcK2ApzPdLorhWK3n",
  "key30": "5Ecv4z7Dve7c51hAjgnTPtK9k9uHQELTC5y69fi8BmBzGA46qPmVeg3VQx2tzQgCh6VvQHotGCZVuhjdWCpr1cUW",
  "key31": "269DAsMaiaTopovWeg1foMYUcHxNQesYCi9yociyQqfbSWhmktBdouh764hSETd8PRHyfXF35YpQULkmU4hLSZ9G",
  "key32": "gnigPEsy5wBAxxZyvdBrzQwMANZA8HsQQd4Wz3PV9neJUJVcgg2UvraU5hjzPtQxubCZv6FvF4kpDbdEji8W7EJ",
  "key33": "5mTUSKBCGdC51PCSGC5JszWMYtNzyQw2fqDkagaw1aKWVTzeM6sTr5G3tQbBkFXenrEcfkYbYQwgVAqVZj8tDzAo",
  "key34": "4TB4ev7B3NE2Axkm4y5eXdrN4YHSmoMTu3z3m7BGhkWztKKtVm5uQ1u6iNn5YfDAMfn8DzWJyQCvabAhVExfGhZ2",
  "key35": "47x22Xf8TeoZRhg6SGS3Lcfw4wSw1h9uD9XbabFRVNALGYXkJByNbzA3YWsu3EXeaZfgLauzw4vTY4H6GogMdEPu",
  "key36": "4roXyQ1qejHrTycgywWeHXZZosfvEhcGyoeauCHqAyakJoASsN594puozAGYg8EXC3VQPfdqJe2QxGo82TNxuXZc",
  "key37": "4PSn32k1hjcrs3cD9raCXyAd8ne5ygU6ChMSVLDuser2tmyf5vPZf3s9QbHV7jHbgDt2e6EJs2K6RqEhDHQWDZSR",
  "key38": "4FDi9iiCudxCVe8LrGhrugBiVcPf6V6SZXUY45kC7gWp7UpzfHat5aPy3AYBTARfDKJ2zNibHkgAbBbzEdJdWzPN",
  "key39": "4rUwYG8tqMiv9PBtpTdHWE1KhgHScVbDrea2q6sfNq9oNghJwwVaxzSLRPhdLrCyoKyHL2weB9qGFxfDd5sz2t5m",
  "key40": "K86ZhETiCQojhMYsfwxWWAh8hAKNNXctyLzFFVncuwPseLerUWaVo54UJ1Rbm5AzgYMb55H6UXby7wKWTQDJ1KL",
  "key41": "4cevKZmrQou5yvcvDSEfGM3xfoRsBQMxs9o5i27vAGBiP6Q612iQcuzDRKLkVffMDyqBHGUqKgcTtoqDfNoNsW8S",
  "key42": "2YmU5wD2P7vfBNxFN72SNiF2K42rqxxm5jMjZ77asGxZrSKR1sKGFtCAk82n18CxP3TgmxsCsMHXezMNc5mdhiBT",
  "key43": "313FB3yvdpqsAFQCq18ntppEUBw9NZh5aU3eDwk7aznNDdu4GQrkTxu5vbT5ZfCuVuvd4ypJ72c4omhVTroAt9Zu"
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
