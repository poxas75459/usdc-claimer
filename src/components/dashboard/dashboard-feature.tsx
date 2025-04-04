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
    "5pAqCc38ZyrEP7NvBSYro4CaD1H1YGC8N2SYVF6NVbmgpugnpkQUg45pLKCSb5QDmPzjKbtM1WfCTX5VExSBGn97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DzsZm3caa53CK1oLEy5UD2LJ4MB41zRXpJqy13WhJ68YjURWSCWsSLM2bP4Z6TfXAjc6UJxvsvBSqY9SN7kmZPD",
  "key1": "5f6AmA9cm75ZvUosN4gNHGEqdhapLz7CBT55zd2svr3m262heddvJiQPts7ZoZjAPFzPYQ7sKnPPejhdr7UnZjaE",
  "key2": "5Ght4xXE4Wf96uuUz4gnFeFJfibBXCTKYrXby9B9vWDbXQT6MbyPZY2HU6cpEic6nxRMtPLDoiPc9qxF63QUQ5xt",
  "key3": "2idU1Umk1cZMMpcjD1HVNn29S2kHzkTEgixcMMdjU2B9pjvaJGgFbb77TBuAHzzpX2S7rP2cUAEKV8gvx63tCw3M",
  "key4": "4yntm4t3G7J3BdFsZxHi5oYYbwKyW2NBg131z4r4x7RM9aDwjrfWu99osugKVcUC5yhmiJi27HGGy2MuSrUzefQ6",
  "key5": "2UCkdSXhmB439rVoiqCP27K4GzyHkL6n3s678fueKPwPPtPCe8EHtX6Zt6zqTJA5Y2PnT8KTJPfTf1DZfMsM8E8V",
  "key6": "5Cqz4JzRsjGSNLRf1doi9iezwubpMEweBjKK5QDk9Rua1C34V28RB7XhbbWQtkyvWd2YYFPEmWNB2TRR2ZAZyTtG",
  "key7": "5oKVDo5TJCa83NCN6xW9AdnYoX5mF3aaRc8AvspFjrwJcMVHMG4fz3tFjPRgijsD5YNN8LBWbV9oFe9Kmqgpb6sD",
  "key8": "cLe9rCHhyPoTCtPxqVRhx2vtxh4QNFenxoPeuG2jkpEBGZYdPbUE4ikhzTEeS9yqZeKsFMbSiX12zyBGfcYRZwb",
  "key9": "3Fm5x9ykHeYkenqqJVLLAyDB9h3asDi3JWn5umikd7yvMYDAT8PqqhxL7rPuKwzHqu8pRueocex1ydTKCzircSJL",
  "key10": "fAJinfpJnsKW6UcCQHkQwbuY8gMEUbwHnVuPkn53WSe9mZzvfDQEDd6h1rXPVc7iPrd9dU4xAyHmAijLd41FsYN",
  "key11": "2tue2yddhsHC9HABp8XKvNv1xPfbXqm8PhDNDJeMgJQBRYPoGRkLhG5iGjVyTTzEnnkFVhrreeKR4nk1JNXxDweh",
  "key12": "HDRsqE4MXWgxUQnmyjBGxjA6XvqGw2rX5FZda881kkb5GNBD2KoxJuMg8B4knQLn1usBNKRCobTbtNzR8bfWXeS",
  "key13": "jdQ1BTWeY8v7cL5ZFuHcB7fAE7meXmt26yHfbf2Cgt7htDWNmCKFXoQcWK1Ho8kjZMnoiWab4x1iuRUyem5VeqK",
  "key14": "4Xhzug84craCKeHGk4t75DHwHi59KPuaUjEvCYf2c8iRNiffMRTxSi1rFPE758qBYQVYmPJ6f6pZTUBTpzA3NETn",
  "key15": "2PKAt2STbsAwW6ujcDyseGZQW2src4z5pCSQZ7eKyj8pbRZjk2UdFcCkcyxewwf3BN3egMoyXJvgCf8reSjMVyoF",
  "key16": "3ycEFjN7HBxtbaihjkB6Do5mMBNhNDcS1LXWAwApFZnxJqL4m3JxnmzDg6PJxRazW6CY1pfS5Zupa41GtYx91H1x",
  "key17": "aeYP3YVLnmXmD9Eyf15pcG2ALUmCy8sHk8RiASzP3NU11Mm4kafV5tfZbXbrLKYCSEaZEKBdaNxctv5qhrFgHT1",
  "key18": "5iHTooZGdAQQDSuspq366vVw2BD3WNWgZYbQQWbxMT7v41xHtTq96m4oMhSbNxSjGNe78iRtDVNyEsCHWdZMzSEq",
  "key19": "qiCuYLfbhaU6i6o5Bop6AzcMiRGvsSn8kvoteq3sEUdqdwFv6GmnAh8RHRZhfQGBUTBUYctef4Vt1ncHZziQu35",
  "key20": "4T6KwNeseRtsq19NFRQbTZwQdBnxrCHyJSHzrnZJxNfZybcq4jkKdcW514JsakoERTx3xLHN7U23qBhj7RMGuWu2",
  "key21": "xBPyoVe7KdUVQsKR8tSXYChu8CijYZv44dGLoN4kbV1gUst5n26XM3ymFNX4f38qSvxtJ34HYFm8M5fbgjRTDhS",
  "key22": "3azeJBHnXAZkGwJt4nVczeX2nGdJVwZ5VEr9RvBspnEf5DkqCeTmMvJVyH6n5jRCnLm9E9P8jG7BVDyYiZLm7XJd",
  "key23": "9wexrWfr33MDbBYciD2rEMFeVe65WTVfrZuWjumc81XgL6FifKBLNPB87YxT6JPzFjaKrxRvCg6AjAo7cXM2sg6",
  "key24": "38MZQM1vmnGXQkhNhVijrjG7uuCmqWQ8TbN8CkFPm4jUme3aThceRADhnGh1Kz59Cvw4NAfpn4zd2xShdPMJF9RA",
  "key25": "5HVv2xWgSMdfD4KUXSsoPFydn9zQMvFe49yERRLnHv6gVSuYEJWv7oTw8BQMXdikSW6P6LDoveD1PDCdKDBPTbL3",
  "key26": "3ogZToKLPbhkwmA3EiuRNPsefJnRN7EwpFkvkX7zqL96miF2mKVVQHQvh2z6ioJhfTmxrRuZdx64cJWikveDCgw5",
  "key27": "4g7kusLdkkBxnuW8JQuTZjpwYz2brZ24nhmdv2hT3hMzXuHQ9Z3PK9y89TobNB4EQAchyUvNfye7vfeyqo82WRpJ",
  "key28": "35oBAbbGbFsiQP5Ef4DywtDPfZhJTFJ9RcxN5f2RvyDYyLbxHhXnUMbwwEaHzYZxeoDK8VvE3XjgJRzK72BdcAfx",
  "key29": "3CP2PBiYZSkonKzUNTxos7Hh6Avi1vgmpt7CuiPDLTCeptJ5ardMgK9vPY7VFNNYChjTbmaPY2smTuzeCJ5zzEgK",
  "key30": "3E63NigZksnpmgNv27y9KoGMtaG3t6ZZWnQi9QjDCteaJYJAUM3rzfu3jZEUEmeD8WPYdcByUiRrXU2oaf6UERjA",
  "key31": "iLsn16Sf9j12tpyNFEWwPmURSS6xYNiU7QaBHdMH8XsnfjbJtmqSJWqcj6DRFZqH9PEpTmDB1Qy5cfb86H3XSio",
  "key32": "5AeKvVjVrQmcfWVLrZFvVZWNN4kamsGZ7YunRanWBkx9rNhhe9doGuqHRsmRwUpiFZf5DNbFNWar3jWDjVvbepkW",
  "key33": "2MEQjYQ1okRwn3oAUyLKAL4HWLhfiYRFQqhpJBHEjD7c9QM7ahMEQRxdz92ATTWxYVa6L7PURRo279AGWBpeujBA",
  "key34": "52oiDKuTeBoJwJnrSG84WVBKF8cBbgu1yDwEsSZk6GQmbiMGCDBd8z4BgB9yTg4cmTcSF39F6HC5WRudFzuXnkAF",
  "key35": "SMB13Dgprr3Am4QFLaFHnSzcNUJ4hWozUgGPydQivPfJS16yy6mBGPtr2FYzC9TsyXoxFEfXhYXiKTY9BX6BUVn",
  "key36": "47cDcq8dobx86eSvKF1JKPiLqL1iD67wVPEgjdV2E98JAoF9zT2AfhnEo5jDw8PdeeuCdg5UmhNHrQMY9BFLZRqP",
  "key37": "weyvV51cz1jzeLPXoVkE5goTVCqS8syEhAmgGP4pzL8sRFVgJDK1Pvh6Cx4YZoTSNtDwTrDxquECyXdLbyAvKxY",
  "key38": "2EGagGKHeL5ogXVLGXDxBRKCb4QbZsSveb193ttgqEvePdjsFrmMTXhZ1qD3Sj3rxWW6EMFptvHDgxGzRDZq6Rn8",
  "key39": "4Z5hB4REEabxYrmNWTtff5Wza2CAeFZMX5SkgYL1o6xzyxUMs9ad92xXD4BsEc6DEThRi42qCJy9r9NwakAVmAFG",
  "key40": "4AXcXvXRmovqm8yEbtUHGXbXTXSKwiw62FaJJryem2ZDyP3DLcbsXcGk4i2ox12peV64nBho2jMUQtBPkE1spWx8",
  "key41": "3R9jtsVvojUmQHesh4ers8g6j7R3TNAbZy5sipxExuXFT5snkMEbDFHgqT4whdbP4PRnmhP87Mr6wCXeUCJBtM5a",
  "key42": "3zRew5QUR1HWbbQNwqoozncEic7nE7Z8Q4heKdwxsPUCw7doTqpi93K6bvLn3M1zyHfngTddwy8LEGcHZKQPVAzP",
  "key43": "4H6gBWLr9XjZH7wEA94jsJvYJQpPeuaf2fiUYxahUnS6mK5TjajLMYGoZ8iSnU59UotrTsdHskvjb9TZTTrFjToj",
  "key44": "36ebTxmRuSmEFsWEScG5BRf2QA6BL9ZirXBfP6C1RMgi8qUDGdzQJw4kh32jQqM9vJS9oz1UshKVj3PvvWzhDTWo",
  "key45": "5srUkdYqEQmtvr7Z1H1eqTL3bKbe17u8JBXg2EPmRrZ2Jegw5yeiBipCC3eEm9cgGUb1WyGVVWR12rwFv3Kp9xYd"
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
