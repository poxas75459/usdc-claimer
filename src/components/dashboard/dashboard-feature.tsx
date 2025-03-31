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
    "37qjoC5iRkMjRs2ETE1EPmxKEKUXuvkVCXZJRdzHPEwoejN4oK8k9eGDkNJJWCiN4FJnGAqUXVJPZBpWwXWB1rsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D1T1zxoGxdqeaUdTFTTgQYCgHDQUsemwCMW2QoQeVRcS9mwSanRw2rBeAXCdKmpa7yQK3ckNjW3FvHdSykamAvY",
  "key1": "4dve5nJJnbLfd7hArvDb8FysTCbdCukfckDw2agg2JQQ5Mpfa5MTnLZ14RpmoRAFMuZGD7kzAAW6pjPuEPBJ7YS5",
  "key2": "39GG56DTztVMXMfNdjE273ScHtaBgmvdKDM2rDuBtZScNDgUSM6GDHGj3hvfuuyUfHGJPBkEAem6n8zyipcprxoK",
  "key3": "7vb5R5zf8PKHrCAD1VRNMHhnQi1hsmwzSjUnQSfWdPEoemVjNgma2pudXagj2LudwLj512ZnoaaLWvS3fTvJrNN",
  "key4": "5ffKtMqaF7iZerGUrc6K5Jui4fzmVsHDmbBSbgr58T7bQJUeDDxQBh24jBRwLZ3UvGKn3fabQsN9UQMmVRbTLw5B",
  "key5": "3CdGqnpqCuRNbgfaBHDAgHUmE1bkyky4bJWsw4ioW6hqADFyp4JyWMDYK4JgTZHmezCzdQ7K6xYZ6T5uN8cTk2to",
  "key6": "M9NeWYY6cZq4S2y7JokYw7zihAbJbaFjvAdr5z8kBgubCE8ttpfXKdqccA6geQHNpqAQnT8LANCfEf116dXWQkd",
  "key7": "3E4VrMiVgf5C1YQVfhnWTjNgf5vG9oHJeT1PoUpn2ppvVyZ5cZ3W6w8FquAwbwmeiCMkjMQfZxrHDA6wGMrtLX1t",
  "key8": "3ivo7m3vXAbCQdUq82Xvb1g6LkSZs2LmF2vhMNBJbRhrpPEvpSb265byMk61xMc4k9WgREujmdn47UFgPQ3AXMKp",
  "key9": "4Ayhj3vxV7cV9LybMELXZHZYqzUKmqGz3XSBma1zdNY2UP5PDgibzA7B1cyQVa6nyhMwnjn9keHvcEfHYTAE627x",
  "key10": "34C5wM9sYQDPFDLNWXPHm88W7Dzmk9kP6YSvZm6kdARXqspbyTEDhQXXGpYeS7mr8rjuf2Eyfgs83DJddXrUAD2P",
  "key11": "5BeNaZJjCmBWr3eT39xHUBFKkYk7ybTVpPaEHgtb7ntXauuPuFz8pbHydiqks9Lr5LPqHAxG6QWpz3yrGhBhg87L",
  "key12": "4rmZdB5it8ZgpnikZRX37F3q4PtqGacL297TtaobbRozHiP2ZPJAnjdBGyFjBxuFEz8Jp3Pc4k7vrnBcBZ1KMkr",
  "key13": "3z8fbAQRxxoDUN8XZxKUj9djAGYyFgeHPrinndfC5H6gmWpbwy7mGYteGWtahjPh8VSvzwna48qQKYbsRkxG8bJJ",
  "key14": "2MmV6aWmSGiw7jkEYvbkB82pQGkfWinfcVtaATEHuHHyhGtxqYD2srNywn4bJGXoiQVrv8nip6yLNGsGFZmCBcGn",
  "key15": "5LJEamVFH6U7aDg3qX3xS8PVcQXcT8vyfuVYtdYHRtqGSXM7JPWgCqLqTTiFR53ZoJC1TUbHYpoVUoB5UZRiiyVi",
  "key16": "4tztCDgTs11sncp126AwWaRePpBZ35iu2DVfLmZqv9Hr13nxRUwfaYg1eTLSy3GsqCK4L4wZwPk4th8KGCBpndme",
  "key17": "2oTzLYNpmEhGQBXD3sAEB2RkgQ5CBnnkJaQFPqtYCKgsQZAPEc3JSrZFTZstRW1ABe9k58q75u2L5r9upRGN2FmM",
  "key18": "5CUjpAcUJWLcq45WBMAiZvckjTdMbXp17oMWPRjueWtTHiMT7VwSfV4TQjE7g1DBhMum5V2z2uzheeeV9QQs4ku",
  "key19": "3x2z2S7c5tVbSJEkvrZTYsVwzZuqcWgMLJU6Bh3FJRuAVNunXC3mCaEgJACyxYt8QVnk9sPBXTGrQ2jmb86fvdaJ",
  "key20": "2XnwMJVJhdN1hWfPHLwDJRSS9j1uU3vsetwtFMbqVser4jLT2mFXjEs2JQUEfmVNUgEAuLDUuP14FXiu9VgxCEjD",
  "key21": "2GHNgjXsKzTN1jm84CDZTcLS3XvMbUdFXkyb6DFU6sBVxie5QFytngJWAQ9WecWs7boyNzLUVkhFpRqmA2ma5H3j",
  "key22": "3FzzC6pmSDaeBjreo5TZWtcRP5ryWXZqroqswNhBVDQfBq3wDAwaFsvp6QYJMPxnLAnTiVh3s583pgdztieZ9D8e",
  "key23": "2YiFRLMXq87XAghukBYr5EiUYNHcDMP6P3txyxTDvQVJU5XYMWyT9LAy2DuXowAvzgFeetk6YZhgQYAoAvFsbFwa",
  "key24": "3it5wR7NTdTSSudso4dctyndHzJ8RDHywtZgnbLSDTzYVaoMbmNJxn7oyg4UpyJUanKgQ1ZT67Gs99Ga9wo7TLFN",
  "key25": "3R8zZDnQtL9R4gJsyQErhxmxUggrorN2RHTc6ARbhNK6g5tbRwEfca3Yi9CJeAVsFL9pZrdBx6c3nDP82M3pe8Yt",
  "key26": "7xhTgMZUhXYoY7Zt2VAijSiFaTzmEEsCtJqPpDvxUwche8DPV1t5husq2PDNwyUqsVQF5K8ZmGfMSA8KcHjWYG7",
  "key27": "2mVEQnwxVwQJ2XCArQVrrNFm3xUCUYCphL7T5Z99Qc8v7RG5rTz4qxeqgqCauQiKc4okYRgHerSJvaaaZ2C8N3UZ",
  "key28": "5z8u7AiqSR7RMXrLvVPAsDxyke7SXMBGAXnVVs3TyaaRymH92W9itCThcgvMSwFiW5ZDepetPU72odbYjz5NpYBG",
  "key29": "2XCqof54Q16WFMiBDa5cL1UxQvJ8uePXMeWm8X6N4fR2GerXLRUTvH9J91RinEtZgV91rGEaZya8Tn1eF4htWPcs",
  "key30": "4KMwooyZNqdVkF2BEVZ471ydQgftmSzgE7XkCdoMoCqhoRLiLo72ww6uD51oheXyyrhUKWVHbk7Kqaju2i1vptgr",
  "key31": "253yGPYdb7vkKNh5CepweCu7RVLJ9RsLVmnin3oGoCLLZRZRohMfqMFsvccc4sPH6sHFwHWqGHjut7v5rq9hEwBP",
  "key32": "ZxgA8hVAHzoBYY915Yu5xhiHGW9xwQCW1ETQX6CQDesnE1GpbCqt7bYAvtEamVetjzq2kwqrjrWYeAfQduv2RKZ",
  "key33": "67WdqLnsGurZZhdg126g8fr8HyVQEKmV3zXgmnvLpPyZw6zuvg5JQ6mGDfztSyCpwSYoKp8PQW1X3cxTeLKbXV27",
  "key34": "2UBEcJ556jQKNLRXcKADHtpuswpPfnanp8ET7CMtwmRan6FCWyAqcbaPjSMsCd1KAQqR9U1TSmBaEm8ff2SVi8oD",
  "key35": "2smfSVZA6KoqPYPEwisE2em8hwomac7C1JVQYU32TacWcidYYUj2VkaVghSFDqdxciaoBXvLwu9qx24eHmids4Wm",
  "key36": "RqSxnUwrJ4XWJGbEbHSiPzETqS8zDsvxEiu9Qe8fSsXMPvpQmvdSRbdfTUgHhmCR6FPj6smkQSJTHbBShzFjs3Y",
  "key37": "LGq26AXdMysSiicpDdQtnsWuewSqmkmAarCcPDRADsATxzwcCThheWqVKEByfR9EM1fo4mnuuaCq4xnwh82B9Ut",
  "key38": "2Tk5N8YZJkG5A6nwMMcHEAV8FRk4WKswiSzMEf6vBk6iqSTakKaKSbLSKTkpSVHoGifjQBunB8HVLHFXmCwdkQxj",
  "key39": "ijeiiFsFSYZPPUXVmA8fw1wQusYnW76DeL8heh8zpAe2qm9Ykxr7e2emhJJAihkRNcJGYFo5M3sA45m7gzUgZVz",
  "key40": "2hZUGZVUsnL5EWtRCCH7rEET29p6LxXMvoLiVepypVrvfSbxSQx8hjd7DPDEwC4FKrmxmJaPxiEnnDvDNpd8VMYb",
  "key41": "46Cb5UZD2FS2FDCviHAUqSQ2EXKLpFzrirrfDAgyEPL9Dvv3R82Ff8GFZ4JbJuHAX2FCJnYuDLvwAQ5HyTxLDRSu"
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
