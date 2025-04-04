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
    "3eVeJvyfftvZMJPHFQs2uGV4iY9kpKoBeiJSTN5B31AqBxgtQPqHJCCNKLSBvVwF9rbyzBEidfPpbVMUX2cEZ92x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "628MJ6WDNsx6kNRpQvywXXcDnZRS5LZzVshadNMm1jGJDpR2YZLjQPEXKhYLL9ABAjC1TyJKJzbsovqesjTMatkR",
  "key1": "2kD3G8j514QvnpyCNUAKWucQooHMcWrrmiogJHYgGK64T6B67XaGVs2pUin98DK8nsG5z3q3gzEFzpeUjvGFdcPE",
  "key2": "JTcZNUDsykWfQgTonvY5hj5czhUWAGQWqNveuTuQLtJxat4748rBmU48wcNKRHRoBW8PKJicD7hctEgFPgyCgZB",
  "key3": "cFipRYWqMfdusd9E8FMjvVcwPRoVqqfdywozdGvJdTKC6kLhWZiZvWc4gZD6R93bbVbZ7Fk7MjqxWzD949bzQbV",
  "key4": "5ZY3LSwZrophVJDCtxER4SGLsJRqfYre7WPaU81psP8BLB617Xv7oMSHiSraoQmrAP3ePpVesZU4wCzmEEhnjojW",
  "key5": "4mrXVFP2YmGEkeRBAJbRbU8D4pQy3XbMeaEM1CtHR2K5PMyqq9AgEvH1kiSRWiAXBKgT2nfA9ougHpBWRwkLLCeN",
  "key6": "4b6JRQ2FzDb3aus9NtN3nqnjpwjSNf1JCzHaqo6bCTDJyXcvbm1jGU1PiYjpLqKx4dPE3kwbLNaE6wwqYBmWqWj2",
  "key7": "32tLqDVYxj85gSGy4ZGqM25khpSXBTeMxKmbNcUg3hmXHwkZa9DCg5zMBNK4BaCpwTfdVpKWNHVd193MDPAdiPsU",
  "key8": "3jLGeTfozbhkKrLWPgjsftNex9nYBT58uJRi4b8gGSVLdAsvidAntFD71QsFKaCDniw4S4DorGNuZZ946d3h84pY",
  "key9": "M53bwwtDZSsdHkQmMD58fgaMPcT2vAiEnwSzZi1x7VBk4vomKazyjfE4qGVS3ocUXn1trg6MnJ5CVfemphZXs3a",
  "key10": "4uaJbtYcoitYcQ1DcvywwsRbyfGfm4dAcPhnZjxkfvjz91fV7AQfmY7JpvvdkVLQGocXjdqpvbR4GdDUkLJSrLjv",
  "key11": "57wkrbZ7TWVG2bfnhruDJN6cFvGYyN33PJseK4gU4zXyTvq8642gMbm4b55mVmXfMFRDKLLG6mM5BjV89b2NSqmJ",
  "key12": "5XDonLFDs2HvDiZSvw7f9tqWakD3c8tfaBcofinTtPZEYKbzFPy6vhJukfjuRZXtbwEgnkVKGyAQMFfcK21maTAz",
  "key13": "21jhKmwPgxJKuYZYzuUDvyxj9HwJG4ywifkUCbkkHiBa2MsgJmxUkVjBCPPYCrgF9AjkzpCbkABepZiuX7okvDPn",
  "key14": "3exLpfBEyWe27eERaYQKaN1RLKw2UNy7GBXUgQHQiXEyMcHBy4RYGrC6LQQGvLQVgLhrAdUvS3rtDvBR5jCMNSPE",
  "key15": "5nxpqcUw4RYFQVh7NipJS8bXjuAVe4uHzKiTf8MXdKqTuEdHTdD88xNBE8WnxMau8WEc4wbJDR6Eogq9nj5zG7cH",
  "key16": "2SrpC3TWVxhkHUEBig383NhVQ2DuNDmZdfqz5kVjHWKgqbz9LPABY95sidg5sqiWiDX693Ea4b9EktGqKbUBtbdA",
  "key17": "2A63EbZku99iusyCLkx1o7fFyVgQ1Vz9wQsYjwySXVnzhW6hWgtUkAzCQDaKU6MkYdCQoLbAXpFufQ5pBtDx7bcT",
  "key18": "2isNNtqeKLgW5fv42MVaMESzdZzBDpfyssTE5BufsY58kLm4w395B3jfvhDbbBr2dH5vwxhENRRbqotF7sbrhCNV",
  "key19": "53EsAPXh76fAwuseE6GW1cXsR8fEt6RQ8kSzdTx2v26gMJiDMeg9QEn6R2FV6iQu7K7TQFQQEc6JCChG4ZmxxRf5",
  "key20": "SLHddYhYZyu491zEgoxpDXsk4593jwqZJg3CCHomiQwmACJS21Fzyi2zgUJCm5t6hNjXykdEBvj5HUCwiyBJQNE",
  "key21": "2B5irqPM3ffFogYMiwoBa5D8AyHHtAEvHZVCpnUuDJFD2suU8iWaeDiJWEGN824E2sTZM4MiG5jEfSCfu2gxqiuh",
  "key22": "3WSvobwA1EXSxT27Byk38grr2f7g2vHXHZ8Eg34xZ7hDYtPB94scHMWqQ49uGLUp5ckGZrkdkwQGJTFVMj57nvd",
  "key23": "WBPHPyZNfcQhH2jGRvgr2LBdYf7nGPEMZrnEtrgc79ZkFAQSN1zVuowhJTTfNyAYSjmr6vHn53DivNMgpiaJjAk",
  "key24": "KPbjy3bHRfcvGLjVFAt6THRcv2U9H9CfrCYCZnC3Xa22n6oKvaAvYqdZEc4z3q2AMwkhFGU6cio7CZXN4D1TrLn",
  "key25": "3kJbvcLBf8q96oDRJYEFR7y3DgGxpDeESm81ZDuw93FVjmtBYnvCX4YcXxByt115aGJBUQZAPTM1LZ6ibmmCSdFJ",
  "key26": "4UEHzguH3C38Ppm6vzs4XSScBLEjN6w5HAtBqbRJ3ZXLqa6HoQTgYTS3Z31G8rNk1cjVxQB41SxpS4kdacpuG758",
  "key27": "YF6Fo2pZrYsXfZvtRkEDLyVSzoWv4TtNvjkHmknvcae7V1P3XGyNTobpVJR6QNNT2XYfWn1LkKS7GZfuWoo4cYq",
  "key28": "5iQEVstXyh7KC2gHE1Hft2WRxKHDMDxBTLcu8DyHoNxQyWU5shfYssCFsCboth2vtsamHKa9rfQmKdKBgFg25omw",
  "key29": "2eksNo6P3cBgk2PPqTBXaYK8Q4V2S9oZ7rdHMozjkGmt9aHEDsQ3WpsS66X2S2C33tvPFzGoNZ29P4zqcjE1nMFz",
  "key30": "4csc9w6QsCFEHesudKWKKAcauMvmNVyKg1ou3LM5RMiQMfiG7Zk4nzqS8gDB8XeAxhJknkYhuk8njG8vCReod1tx",
  "key31": "ByQhMu1sF1mkFMkiypz5XbJwPxnhN1HxFvvSJ9Gxiu6YgiHXpKaPnURdcxvk8VGbFttdgRDpXoG3BQF7CXJBFf7",
  "key32": "3JQmoZkJFnMHqc2kkX37Pb6wsGksrE9mou4M2WCBmC2VhBpm5dJVKYJxY7zeS3sh8MEi4CiHrs9Tu7xSK7yKCEQd",
  "key33": "3opFL4YvpYaehf9d6R23KuDL5mBYiwzEq714dPj9heGkCJSNARvWB29abnWrXfhGv8qibBXSGsysyWLjpARGDHyf",
  "key34": "4639y98R5HGUx7SFUGWFKMyurtZzAza7H9SxGmu5SJrQ28rVVx3oPLaqn6iYRRH9CSEzprvtA1EmcbvFY4k4Ms7k",
  "key35": "31sxTEc1NsLmrjoYDw2XGTwzxgMRve7K91iAefw1MCtLZ6kRwXGDKGdgN41WPnti7M99yvnsCVsVGBXpZFByVkg6",
  "key36": "2gfZUf2v6Y9GK4s1i81HWk2RYjXZADe1BTjm1Tj2iXsFg39dxBD2FtSEkLRKCacwPREFtg7ReHsPtWWSZDCiWPwg",
  "key37": "3gWT6YmTRXpb72WRTacGumjJ8wAzgqrr6SZwDHbtnkad8KZyhWYsc7QwvFLovCJ6Pwb5o4PCnGRd6VGQvpabNupk",
  "key38": "55REcwSBVnfmf4XapANTD1UQWCU2w4Zr7PvVXjQMJ8Qk4JqWHkpNqkLiZZne8HRme6ReXXskpNuQhkPRmGZNPzMo",
  "key39": "2wVzzh9t7guny4HdoPRhfRNoYXY97sX8QWU355YZxj5Mx1QZhRvzXHmZjXNtPaS8wSrQAKwVQNNNpE9VMyDnUhgs",
  "key40": "nSo1jfSroA18c9UxMTg6y7DXVzXrTYkmfT14dAQf3bpmCfL9ygmFztoHjMPeTuSnpW4gogV1QbAv3UGwrJJjYwm",
  "key41": "2NS46VHLmcrXHvT98kyZ7SKqdf1y3ecvHuE76wt8Q1UDVn5JxZtThaiFcVE9QUg27qX9A8BaLB4bjt8Hn5uVz8rt",
  "key42": "5HcXuHdXAxWUSN8sVgGJ3xAvRuKfkAjKBcyxZfD9F6jGw4XLmbv2vvSUA28x96Cm66Ao4cFSnW2yXFZNGpsqq37g",
  "key43": "4wE9N28R3VGHjKVuJZ4ApFN9aR9MySt1NKtf5sdHNpgM5ZWtWEumYQ8PiXH4JwBiqVESy11UpdN5x48UEyh14R9P",
  "key44": "2grP3GzSrf7Mu9516hnAndTVikrFrMWtH5pARumh8epmGLGHrXYnJjrYRXPpi1t6LZCxUdPpaifoVZEen1ZFeLLR",
  "key45": "uJiQFxEaHMfwvFoasKw3dDu1HANHj3CY64qnYa6Srb7dYW1Zf9xTg9DgqePLFRqBqXWMf5M4hfCQtpwPhBscBga",
  "key46": "5YEAjXNunzAnomTrrsGci13D81W6Jo3UqigAyKpyUhgYr2yiWPGuRRkwErSsZbkqBUK2BeXDy3Co3U49gK7QeUNZ",
  "key47": "nvwP3zAMUhqs6X7jbbRY6E61L9fL6p3R2nrNaAUSRVVY1ZDnhb16TNRf2XwbWwvMjJ4o9uvPkJevAZb4d6mjFEN"
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
