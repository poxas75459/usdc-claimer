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
    "2VKpmoxVPfEgPuesx5fmdWndDsCaZJYdS64m1wHGhYorBti1VJWWNa6wVG8eNpvZghB5pMoLrXCZ9F8k6aj7oFfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKR8oR3NQMNfwffGZnZRLpPzXHQFLsvQvcx2ReJv9b2X1wqeeGnMv4Zm1hEqxpWS5SqC97P2r6tgzLwjCQgrhxq",
  "key1": "3EXkWDongJBdC7BJrDX2c8fZQYDWwDraPtkksVUUfqhNUdDQiqypxYxGC8L7QpQ2ZNHzft8ty6YLPeZ8ti8Wdxwf",
  "key2": "5169SrGApSJ98uZiBzBYxYVyXdMyN1PTkVWnqZnxpiPrZPbTRgwHwf3P8E6Pj2PJpN67fAooAekgYNU2QdRTgKKz",
  "key3": "CEWZec4AstHHHooxRorm7aDugAQuvbXC7t3ACpkzYagbghsPJyjYxw7NUW7PZbnoFcQbFH2ZHN1gtSgVhLFHrue",
  "key4": "5ya4WjmrZnVVjpeBxt93kgPcdpbsX7CX5NXAGa9W9eoLoLXz5rhksemM7Kpw84M9x1G9UaEfAxsP8YA6gzckDnzc",
  "key5": "25ZciMt4etBnp8DGbRK9wYGnhMQqsQgSEeFf4vm1yEj3MdWFP79JXFrktHhkPvL3sPmDns1Xje9AbobY3XBkHd9W",
  "key6": "4dcYiXNSgsf4hHP143xzSdFp61jEZpohGf9SSbiBJQ3RFa57ohjptS68yqoGMJYD3DLk8ZcrCZB4g8iDPHSaKjsx",
  "key7": "4DTSq54u3ZHAUjePcCxNYZT8GeHUh7vFhFHCCG2sMErx2TRbzU6SyfLxM5w3nkYtFdwmsVcXoyJP9AyoVa4UinnP",
  "key8": "fEy2BkRbDfo4Y4pWEAGnu4pVB3ZV32EXyN38jkHr79VW94WsDem1CQyn8SJPFriTzjM9WbNrkvguM3t1YMXduG7",
  "key9": "4iMbpxMebqSNf8L96P7NmzQ8XLyeRFDpDY2ptJrVww33cNvzkigevANuV7RjnvT67i1dyVQnt4xu53HoiKPu2vrh",
  "key10": "4giY4sKJebXLEHhTvzjyZvaDZNN5aLQTrY6uay1xUMSvvmdp4GDQfntjf6ysqBvrthEa1GLayRYjP4SUGrrctJ5W",
  "key11": "5cA9nJenMHDL1XFgfYnP1V6xLTBKfAwnaS5KoCaynE24xFGmTYbKtpDkYtgbMKNcmHYtWkku2XkKJtxAVxE6duHR",
  "key12": "312zQShxjnPhrf6njWhA4shCzkpaJtHWTUcqrFkE8BpcsrSE2EmgZDN346PBnjcBGDSH4zzZUTbMGHcyhxmThAAU",
  "key13": "xic2Unw7m7PNv5b4twHsvicS9WfdML9rmnApQkidchEBjN38GkcryEo7BHvFnWzFoxyhji6mhBbVADcXp7bjjmj",
  "key14": "5SReN5GtDWPGoggzXVfxGpMsSB8X7NEs3CiEykjRtQAjSDgVDkhFSFGqNxV8jcYu3A7yXa4XqUz4Nrooag6ETqDZ",
  "key15": "4i6mnCoVts67TmP4NYomLctNTebXGc879d5uR3T5kAU5FR8h1j6KYnf1m9giN3Fmk3jD4nomPZCEMbxmXyp1HDqi",
  "key16": "5hLFGak5zvP35ou3MdbVBjGFsvhbWV64roevPh9Z8Svz4etr8YiernfMg4RFccyhMKcVJnmCGy4GVBfVTNkFsJ2h",
  "key17": "wyT3A8UnrDqwgCAwKEhQPUd7E2UrtpQ1PeNe6iGZPtiEYiERQWuGBvMQp1s7aiPbzGw42YkCaQZUDDKNeZ3fFcL",
  "key18": "3eD6trqAb6hWZZCfiMvyhjAPgmiwMYi1soui5yfWDwGjQfuPhXk5KhK5GZYsGwm1uhQzqGgico59ALr5RaLWS7LP",
  "key19": "3K2gCdQF5p9Qnd9MbJWWzAiWJtdRQX5SxF3S6ZKGGe6Yung24sZfkSKyCXwKBhYtw8zdo7x71TUbq7D6CZXhsXxs",
  "key20": "4ZoJRK3kvCRdypt2RKhJy7rWWWcXkp6DBDBwfYrLo9FRauBkKwiW8a1b51faRiDDTkZT5Hwm5vdQr3rXVZwtsYoa",
  "key21": "3p8KXnDPouC9WoZHgjskt8boeKaWXyzV7nN3WApoS1RnJ1uPpAh5FoaxZDoCe1d7A1uU1XNAqTNE3L3AiHAwt7Mn",
  "key22": "5oEnUjWJLYkJZVhiJBmWS9xRW7Y5BkUmedSaQ6ZvHdbxr9aFq5mNBtGavith18KzT1pnBmPW37od6xEUS8k1fmjE",
  "key23": "25ypvjLDzqg72L3L8wxZ37Ca3UVBNcdVJhgcQDHmSWerGBkseGWXEEyWRLyr76mRusu2pDsHwucoL4oHajUgaSyy",
  "key24": "4A9Adwvy69ZMNMNhyUuihjzra3nQBg3r1iBfXMutjz5e9zJ8HWcHijkurjczcfuiuSEYJM2euAYYXaiNApQgrtbT",
  "key25": "RuuiuDoG6dR2o5XUmyMRwztU4Hks6LVFZdF8wsFVGMNXrs6s3guJbe8BLRvEMYMhpSbLGBTksVo5sgEEEozQdz9",
  "key26": "2ShY5Kam2q5v7ADpJLqc3AQGNMZmvPGwgq422TKGUKcLSKofw29ycyALKBQUDCSiEM4TzUMntXfw5AiJhrXj4ZVN",
  "key27": "23AnGfZT1vFcoJ1uJSimGT8zhJjVgj5xac9k84z2Y4kvRxuU9efhSWDAMom3JBT8sBefUex7Tm83j72uwTAjAga2",
  "key28": "365foqpsGZHQid9Wnf3K3fJBt3YmJfPrwsX66giuYXGobZ72zVoR7sxz76odb6fkZ5BQzWwMPxJXNED5ncoHd5n",
  "key29": "317DKicSM3iBLm88UrpsWYTz553myVV3UxSsBGYYoVbqzLJmF4xr2EP44TUZtirVyGBuVmEswPZaN8c6PZoF3Au3",
  "key30": "5vJkscRy8scqDTn2b9Bzi4h6jt9SgQXNT5tDmu3NVPmnVhraBLohhm3fZzocyuPXNaYcUPgPeX3ybfYePGFNs6DF",
  "key31": "2rZmSAv2VazapEYvX7E6gkD3DitoQrHwmxLe3vmpZHiu4ZYANoJd73MJtzXZD8QMBFcRsUPhduboE5z39n7snNGP",
  "key32": "4GEvLedY7TKScUPjZ3A6SdSu7dmCruhEj5MvnPuzWBeCetyYmkU6XtZj4yU1BmiK2HaC5hLjoD9XsMMguGv3B2Au",
  "key33": "KgTuJ3QNSABtGYNiHMEybLT26U2FW2W953oNdam7184NSiQjbhmUB5pz9s5k2UXCQRUhJschFQhD5TN9FpyVbMM",
  "key34": "4h3kjf551C62YcQDpo4eJaf4eCxgo6pvbmLZUHxBpwrzTy8gBiUjCNGfFHPF1soTmEPLQnKvLeXsJ1AHbehe5Ms1",
  "key35": "56yY8AwcmPYkwzWzCXdqwpuW9ZqMgCXZ2Exnq6TdyWHpfain5BWE7nzgBYjVJP23M4jrCYHdgChJvJwpaRthYmvq",
  "key36": "3CJptccUf28LH7dLBGEXqJ9wz8U8boBoQDmJQF9nsK973ARGKgBSCofqkRs2S2YbWKey79cG9YFCrQLhKP9cupgy",
  "key37": "4LU5wZKcvetpnsbddSreUrUyJdkND2wZTRmaxW4TQV7ghsKWFpE3JxFct6K4ykd74ncWebfkPYrtxrLRdc4BuPjc",
  "key38": "51T1oenxDuMrXTga8Vp3iXtoyZqir879cygGY7YN2UsjcnBWj5acjpe528HYyTPhKYzsAF6b14CFsCAqWDWRPh8e",
  "key39": "39hHcEUVPxNYTfQh4fneZwxYZzFYoDq5g1JmCXzdcLT6BjyaaT6zFxQJ9CKZGhtRmxgA7B3RoZL6yBs6pZS7JMES",
  "key40": "5bQFMgs44HD6Kj3cCLRUNEzGbeSSEyFsVc3HS7Yk4zP3PnRaYm7AbkvR7ykJcwn8rzq1tTmgCvGKseiv6ntg1qV3",
  "key41": "2v2geNvdqnNS4acVQ3cq7KWAaSNyhiuGLz5P3UkP7PLjdqWNvSni9eGBB2xXBcCpxife4gFxvnR8sW5hc3kDQkRg",
  "key42": "3t6uWEV2wjX9A4dGUAQHztYC7HNyFnrQEGSbC5FdvKZpDAApwifXxtKEcBALSmCHj6Kbv7gipnGWtnviaFsszjdp",
  "key43": "2thG585WVjyNx9rrrMQpTqJvtAgCpaEzadvt2cz23S3wEtx5LV75nmfVbPrWC8cnojC7zGKxKqC3HxJBfuq5p89Q",
  "key44": "duDAQwQFGPsH5qdMsKqAojieCwyvX6WavxtAmECq456DhUa2janhLs4EL6akSyLjr2Pwte2Bs8PXBXnJRnZEhxX",
  "key45": "4ZrASH9apPY1CW6j1A5MrmkEMWkHD555K5AVYDb5maq7DVGiiqe1YYkaq76S9ERaTBtcoEPvCiMSeYxxghXav1Rm",
  "key46": "2sPU2kuWksRhncWZBuwoCUBPtzxCCECmG8fVZtPm8dBpyJcioMY84WNAVcVTt7xAGEFu7npyfMUPTdCPJoaCJAZ2",
  "key47": "3hNKs2ybTf38EJSZyZF1UZJWUKajoDz9c74A1cZvUqZHqjDm3vTHEWxesWLuc4yJWsmUuDahXw9oGii3beRcWEgD",
  "key48": "3ZPzzd6yE6jXau76ALkupcjaLyAwKvfctdcHFjMtkMDm93RxSQ96Yi2d5jVpTDPum2m2wvWnzveYwjxqDgG846LN"
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
