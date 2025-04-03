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
    "4dHN5qQEwJNAisp3d4DfJg6JkArCEGyebBkXwsGKynvFKm1QHcZEEdSpYZ1G2ER4xNqysPCEsxpafejDtSSjHE1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cTitDYtyCZsRJtSk1ninqHMBUbZfzp1QB53KS38J2zTvQ5Z9PBPzy8tRJip3N28Bdqo2BvbKLttGfNvYj1JCWmP",
  "key1": "4KAhWfLo3ksPjSiiEqjSisMbKPk463i8M4rY3dNNotrhRu4mYzVFPTi6g6hwZ6bAZcAE2gxdrX3mPtstJaG1226z",
  "key2": "554oBYSsVeYELw8PhY2R6NYNLm9VHCwoSh5CAEnqv9jEw2bVi9vx1kX7rgQ2zhUSmoZtaYhYwx985UnurQww9qNX",
  "key3": "koBsSAgEruZHF6JENt8xduAb7EUqYN4CK4qPEffCJNToMq5z9rC6di1Rx9AUoceU3532YCxvs1hZxjnGQ9A7WaB",
  "key4": "3xaFhw6RATCiWPouNbN7T3DUJU89LVY1bqsDMHALM7bgn51opFtEQNDegZqT2WwXdPUW47HoVBnq1X59tzgRKtoF",
  "key5": "5UX9ZxShuNMnX3vcFVN2cd2vuymuTdgePQgDrukLE2oVYuge1678pwwf9zHomMpXFuJuM15zP3nWTbnMUn1zg4be",
  "key6": "5HZmeM5bvLp8kamsX7s8AHR7K1X4HjzhQwAcDYf8j6GGdyCHfzGw8nAaWisyPv5DC7bFAqntp5ndhUSpGn1sgE8N",
  "key7": "2dxwzHeFRVDjQccdu8FT9q8KNig7S3rL9dJMYrkbrodGenGfMyjEBLtVEmdRKdm3xVAiRCVMKjC5RDn3EVbA29ss",
  "key8": "3WMP2KHtfebLRxqcPKf6b1UjvirbGBuMjyU7LzAg3XDbKjZvJ96vjUKkYFZG1ttLjbodCKYD75qNjV1Spr8o1yay",
  "key9": "ASnrYZHH6SsUdZF8terV1Liu5xUUxWwwgLUVpQFKnubw5m11S6KLcJfMqLoL7ejya9qBP44jk35xPxpnMWTYEEz",
  "key10": "2u6qjd9mHXrbhqCYduFoKrTqvMuJfbwkiPQevMTzgvmZv1iuNzg4tVCgxDZEmpEXczuzyuB2YB33yheVaK4y12yf",
  "key11": "4PCiHSFMcUdCRW5znzw8KjeVn1Bb8GWGU6Q4zqBmgmVrjCYCMjvuiLcrKvAUgio1BxdM3Tv35XwbUDXNLL2vXohf",
  "key12": "44mDQbU8TbiHFt7HQmC3crEFDgCj63FS9fKj1MUDiiKi5QrW6mZpWzash8avwNDWgHij2UApr5S8tBdL6bgsytNK",
  "key13": "2JBEYYa5B6KP8YdDsYxWEj4S1tL93SjiU4PWkgVakWV4MmQMXqsEJoZFm5XxJjHfxHuuM4vLeXYHLWkmncikLjLo",
  "key14": "5Myf1NvFqcK5x8LX4MbN5cgdfHLjxMaZtJDdYdY22wk2ksuqymh4zJffpQ2dEkFNV5WVRq8zjawDmmiBY17ytqm6",
  "key15": "2EwjtjN4YgAUP8aj9EC8hHy29WCTVbVFKwgmCb13XDBiLR9wz75b482ySpRqj5KZprdBpHxQ3gk47kM5czJrf5Hx",
  "key16": "4Q5CyjY6qjcpvqHqPvmWn114xYDgT3GGgrKT4Sd8ym8tgPLPDnhU58agvfzYaSoTR477fgUQ3pSVCuTPPS7jhWM2",
  "key17": "2YZtfMHkJFtL856C5V6Rs1pHkdGeQPS4ZQh6SCCd2xXeHqXjqs8CLhgS2bL5zKMtJUZa9nwk8MiTUNnuLXYEFgnv",
  "key18": "5FCjktvthidYc6eAJyMgDKwVg2ccNVWXSF3uXMwpogfWKfeBrwPAcTM6svN6y62RhsUHV22KejspiFsbrZgDUcbq",
  "key19": "51HzAqUMMqpVV4yAPKwBLHb86N7tpn1ZBCLgoYeZJAPk4iDJjJAnpXa6FqUHvsadbmATST28NeKhpR4Sf91ATZmF",
  "key20": "5Q666hfCT3fEwEifxRuSJzrHrCpfd7fRZ6y3aQRw5nzx9kT2aox6EdcP9ApTTQ5jYds6SFoomU6cXC4LoTgG889G",
  "key21": "4NeFbNVEtstDc9XimV2HkKVDvVaskQJFTeRCHwt957FoKDrfbhcKuMWMq7ncYAfweqQBuDSJiCUzhgphRqsR6as2",
  "key22": "sDj3dhUp7hBy8kdp8X7ZEW2aDkRMqJxjphsr972w7Hx6HoAhEgdQiZdhGeGqiquWGmo5ZmCHv8oWv2G4KCzS1WR",
  "key23": "srJBWKeQZqjYdx5UeicpzWmHMFG5yCLHZ2xLNdqVVn6oe76dW5WychgvTQwWQFxi855NQUkCxDmE874om7aHAD9",
  "key24": "4BfutUbEfnqoybWx48NSswuYCsYDeJsbMHFLdjEDR1j2bvFsno8xcr49nr1FNrhk6AWx5QLHg243Ku746Ryj7mfj",
  "key25": "3JqCnQQjYE11D8QWAZjRbzv1j6pqkYzpgb1fchsLih6guwx7df3dwHrqk5P7J4sv2SDfikBaFU5JcDfG1RpNZxg6",
  "key26": "5RhBJRUgY8NKekv5SyyFcCr3Jv1UtU4y9JzBmFFZdmxqEFvKbMmAMmC667UAskbW5jzGmnduSaCYKfzAkmYY5zSY",
  "key27": "4f2nc4ViqBGxvqVCqjP2HNSPSoyU7CJPBoXKtUJMP5tZryRgiUZi954pwoCaEwqFZ83dNan8KTfARFskusKRB4Bv",
  "key28": "22aa3NUPRG7uP6nhMjg4TncTmyQuyAgXN4apEFrRuWwK3XGsYoE2JxaNGEgW54Tua2SJjaKbpq34BGejyCsRzSJi",
  "key29": "q73SU37tpa7R9yytaNXWK1XcKuWQLiXiWcwpDmD9xWDJho5vFQUwW11WtwHr6uqotnMVBBD2btZi2NLLkKJusbj",
  "key30": "rUwbtQvYHbC82P9MfKUa739RkedZDjCfuquZZeD2wna7dCMjoSrsZGL1D2Sh2sWaxgrV8MRdALFpzuxMjpxvewp",
  "key31": "4cCvive9pYzSKKkwq2Uic9VT2uLz1zUL5MXo3A5UwtbX9ZqAbLZxUyho6H7qyVPwf2qYvuGAWKLEbkBRZitgkFe7",
  "key32": "3LU59mWHc2S6SSQyBrFrAVi9t4XtrPk7a4y4c4WhUrWEoXG4yHyQ3BpBWc8YGzDF8ikjmyrvmqDkkWzxb1r1fuMZ",
  "key33": "3RWaph72PpGLd4hYQh3jjVzAJwE4qcuXPeBn271LygyiFxmMU9daevsTSUB8mZVt22q6q7bZ1h9QpTSBWwGHQUqW",
  "key34": "3skN3afyJfEo2E3C2992yVkgVEDVbVry1rpTLN2voBwjL6gD5YNyPfFqDmJWxKYWUpVvpf1nKw2HqmnpWWPGySqy",
  "key35": "25LJXswYePCgQ6ZwuUfECaLvKaU57ThgZ4G1bqhVF7tJZEmmqQWAa53wb8RAKZ7EeMabnE5odNcLnnGyhmxVD26e",
  "key36": "2SE4BzXLF1HUZpoVGnBjzpGLQ5WUgcbaszPJYYxY4fpcR3V5mHDMSARBxMVGhtUU6XbD8Nqq3bQvnimLv2yyy5rX",
  "key37": "2JPvF3cHNEbvrAm6RJfNpBtQMCBi9ABkdTPViitx8jabqWdRvNerj6Cgni2ozt988eNv7b8DEykD2xJFRb1SNbtk",
  "key38": "5WvtNaB7d6oGTNAa8mEXrMD3sY1gRmCf6W3xPdYya9GbGKgHgk3qz9v4N6cPooaaTBKHtsiFkALu6wxt8qKb729K",
  "key39": "3mbJQaaUxeKpbGqpuMnZMa4gWN8iXB2SuFMcXEmqFi1Nk4FBPf4pixd882XUzvJzDM7VBCT2tTcPTb9HeTNQf3TK",
  "key40": "5pDmcVbMtgVgYvRTvbxPaAoNDZuS3S8RZdo76hLwAhX3BszDrKQtSnTyhj8tJtj7CpD2cYNxYHzSt8UFXEw4WzNg"
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
