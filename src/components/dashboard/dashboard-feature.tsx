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
    "2EmhMADpLUhnvetZaeW2sJmhFLa878RAapPepeTpXgUyCJZymu7kuGpYBR1h3bhtq5UgnbnFVMXdBbtyuYQU5srk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64JH7afYMixLf15iAB1BxaZVJA2jKmP47BtXvFmR6Dc3rrgkXKykzNYAkFfhv85BeShNMAkwjEc8B9F17an84XL7",
  "key1": "23xqAvAoa8bnXu2ZZrWb1BLv5rbMMLMVGvKFPPts5QGZgVGdvVfSvkGFtZcVok8i578WooMFCgd7mW5hyb7U7KQK",
  "key2": "4RQMzRrRXzmpFeRz5QMVh9QttCeDWSCBVHVpKSoxx5Z954DcPUBL7hAmmEDSuZ7JPKjKsmg7eSNntqZpmvEuw2c7",
  "key3": "4noQYtCgMMFTeP371LJqkxjFNYanZ8yeKo6sPb9HJyp7vpUfEhvgn9xMWsfLuGWEQLuud3xtPrCXxmL637k6b23y",
  "key4": "XPqmQ9Pg1Gq4PCyxcYS5c3qLNohRSGGXWTsWGMib8GSKywgm6uAp53h8XPH3ARZj1TAcA4u1pgxUytEsiUDpnWB",
  "key5": "2BDnQExW6dbCrD6PpSAyN7UpHHvbFa32bzgeJRpDFkyDV1HjX7qfNNZdqRy32zYBdaxA2opHViWrtwacWB3VA2BE",
  "key6": "5HBsbNLqUH5QAaYdeWtqHFpwsX7xjewXKM9RnQsFxnqCMX43kCPhNorH4aY8yuL6pSCZU5yGq8WXHPvdwFfJFiKm",
  "key7": "3Y59yJxuaH589Mjzv1rVCwjytKLb5XPw3QqcS8iYzCDfQW5pkCafLb8eXNLPta2QRnukGzHKEBFdMoRwbWz1Fxei",
  "key8": "2htGNLtgBMotrMLxn5Zaw96CgAY4c7hw4PwxP4Tm5bfHD1FN8bP1Fj8647REeCtp9V4EMaybSFLYBar3GKL3oah4",
  "key9": "29eLt3tEyL4AhNLQ9jcLHrz8LnmtNrBNrTGZnfhWWdZ4NMKCvYsg1ub5kr5ptpm9TD3id6bx2pXn6AYed12TCzxg",
  "key10": "2YchhbwEVMG5YqmrX5GFmaesETJZyULGSFzirkK4mQj6WoPUnYB1rMh8mzfUCFqoHZkp6pN79PBWLR8Mx7ms6UKT",
  "key11": "3Dn1JDm4JnpxwV8gsjVXsgqUEk3XCSZLrrtDvza18xm4A87PhC5tcSaQQVtGdb2waS4aVJsC2CKuGN32kCw2yFaL",
  "key12": "31ePJtNoEVCoAvEZQXnQzWK2yxNiVxnmrmXjHcwoo8pyQMG3ic8SnzxAy6PrnRjVqDG9BXSnXju8dG9PRjBgmut2",
  "key13": "3CoRzXAvGawFqZ2vTE8GiYmb5UUCb6HWvEXs2GBDeg4NRzcpJpKvpyZnadZCUpqT1en3yJsFPJ75Nfgo89NJrGJu",
  "key14": "4YZK27qGBWQVvrBWbdy2mz7gBakp7XEnfLvpmy3LK99Sgu1kmgJLRPnSj8BPJaiYZrYa6KruvRXDwqH9APT8R2Bx",
  "key15": "4ehcAefWXy5YUbVpPAoURyeFwAKm8jHR1RpGKmebQ1rEnjxeR2BzWh4sLJWQtSKxju1wKjtu4b72QtYAXrYxBoxp",
  "key16": "2zcqrPUv8L8DfyyApASZKd3C3mbinsPc53yBfuAawr8uFRST8mg2xbEnBFPkxk3SdUoAXkn76CiNUXu77mjLEPWY",
  "key17": "4UH7MWwcxt6WKnVD5MAdnfziyxH7zFrWEs6Aqd25aZ11zVFUdFuZwjUg4cNhSeoKDzzrYDSsEy5qQULetcSDFodU",
  "key18": "5jdSo5oD2MJPYhGxrddkRHwpM6mev8NeTxcT9MTJJt7J5k1A2wtXcuHBwokueM8FCVrjJJk2kgJnD2n9kdu2TaGY",
  "key19": "2My6BxAHBvjosrehs6A8gHggSmFCeTgZDW1cma9zLoqbWX56PVetqAh1Kah7cjCgeoG3dD1AvC745usmtPtJZyw",
  "key20": "2KFnBqtHrfMuUTHf8H4BxgEwrxx9Xh6xuQX69sZzJhix9Mr2Y3yTRwmMAsTLexgUcpM7xNsAkNebJY8fpSUciysx",
  "key21": "5Y8TJ8kZiQ9nWfmBt5Nr4pnWcm6VoDjfkHzfR9B9Ls7C2aVR9uR7iX15nZcoXNdALZJMku42EhbqmnCPaCdPNboW",
  "key22": "4BUaGy5bSf5QMqNiEUe5g2AncCwP6EhsUwKxHoDKtXgF4K7MwTd5xaoYBmx2Y6TSvZPCUUqyTZDiL9oppatwnfNA",
  "key23": "5Q33SHJpnnLtX7eqPHvMbwNYGgkbMGbL2cYhmc1U6U86Fd9E2pbyvAap9shCmT6amZeFNwo3Gd52KnnwqXii8QRq",
  "key24": "61V5LyG1XoVZ3fGcykpsQp3Utz77QYmRf3xrAq51CpBL4VHcrgyKXBYgYDaUFTaZDCxwEeRtFuxTL8L9rcLKJGkR",
  "key25": "4H4r2BsXrK3acrvnCCr8uGgEcFkWBH91HgpbzeY87mkGSiDghoRj5zrqfrFrQT1SFhD8GNnuukRc2TKm8i5Vj1Di",
  "key26": "426xBn4cbrtjAiH24LFxj3t5sv8Vmo2oJMjZ6W4x9AzFZRF7Z1arhXM3HqgoZYt4P7JMie2rWvSYLNZzsNjz557C",
  "key27": "5k9oHevQbWtCEFbUyGGvGkvM2a158ZtLRAwLvmRuUUUfdGwng31MixenyxcYuRMUeiKKTTTZ1VUFPZ8THqaXdmjB",
  "key28": "4nmBsykxWnyhA5GymBJUB7X8dD7abZc68Qo5qSeexrDTbgERdFtkYUS7iCtAHZX7tBtagJvHAwqMTiBpbe7jmW3B",
  "key29": "WJbs4RxVJdTSodY1vLC2KY4KLFwew9m6PgHJHb8j2yfcrKb1SwwEw1ykiiNMYJu1BjJAVV2oFNfBtdERSSAEv6T",
  "key30": "rTYFqkCJCN3zxvXxRYs47T29gS1swK1JwXiwrKNoPtRFwpLfmSgDE9TFsyR55U9jAwkx4MGWhpdZEFtQBztuqdb",
  "key31": "3Pi68Mz8aqQr37LVcxZ8hrmBSxNnRbu1bjTLG4DuJ8ZMEhpxAiW3kdHHDneoPSr8hSS7KBYf3jhsEDcncLyMD9mv",
  "key32": "5Xr3PjwYysj1gzDzP2yqbUTxVnt5yjqhpdDVirfK9T4LBqULx7bsNPnNThGEuzHYkJ5nn6bVzwf6EhM3KCsY2Lci",
  "key33": "5N32geBFZhFMvstT7R9VDRhe4Cp8ACnTpB8hWbUXXwchmTf4yYePaonXoioC77N1DXrBnJoxZsF19wxUhEEr8Jbz",
  "key34": "5WVSuGmRNhvvWKtRANfXPYdceyZ4e4kNnrvzrurxSLkMmUcfyBaRok17GiJAhMtFNohocxBbACXmEPuVYAFX3Jka",
  "key35": "ixabYMZ9i4nXDcN7q8paMb5ZxVzJMnCSXEbJJEUpTLNPaNYGBireQ5zbmZ3LjqfdNFsHiEZ4boovEwtYekQstid",
  "key36": "g4ZjeFMkMa7EeRyieVk2H3WTAZp7DvdYg8qhDwQw1EqirxmzHjDjvBnyPkXQ87o6YLQN8NuZPdtStJ2ix4PAaEm",
  "key37": "5Bkf3j8FZNKVP8qB5acCXt9VKRacVVXDtyUHDk4skCeV9XxGSB1XfTsgpCtUE5bDxQbH8W56HpustdFPSnCiKGa8",
  "key38": "2M5dtrLssXaewkYzH1DtMdRRn5oQuot6jDc4GH4KkavH4wqwu4xdDjnFM3s9CtcnBMbNukuFhrWQK5bX24dddKZ",
  "key39": "5vwuZJxTnxDwd4NRgseBMMyTjuL9XPPo4qSsxFMnPb8qQGoZJNLQPXy5cDDFbji1MLRL4CZtetMQga8YxnwxmXej",
  "key40": "9HVCz6NJHpHE1XQFVNXSXAYvfe6zdDxNXnSG3T46XRLwtMw7MgsotnBZUG8Wz6pn4HbP2ECvUhUXh48Q6cZUsqG",
  "key41": "5SGEcM1Dq5EeHLMGaBg3Aa6VWMQ6pMcMRYdzN8X918LAwq5jsQ89nicXfjVYgPwUvifA5qzRQoq41sNu526bvS8R",
  "key42": "61aeJqPQ42ZabiVokUgPStDpGbgTVwNo9nsS7YgNTYbVJKmp9Vbv6EQXHmMXk1vejP8NoCp4mZaFKkomQFxCf9ER",
  "key43": "KSTusFQEvrvzMoqpPsrtVWdp4XXkkzRFF68h58upFEyYPnUoQS4TGv5SCdHd7d9dHcixeXoZa6r53TS5JR6Ab1U",
  "key44": "3Z6os2goy1kppdVUGSiw6Jm2ZqfKFNTox65FPyg9ng6UGXi9qX8MoxzLasSg9ugeFHz8QE5UwcDT8osZa3W4UNMY",
  "key45": "7Y4LyVFt3nLfWJitoxB5wHYpm9uaFtBNcaouw7JJSN8yJqmp4u1oWLinZckdipKemuQmCghdzVGWKbSSY8M1Dvs"
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
