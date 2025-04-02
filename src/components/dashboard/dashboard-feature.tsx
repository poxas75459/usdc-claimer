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
    "4KKECxyNoyhxrFe6MeGxrHxyhkyvPv4bigUJTt5q9JgU761fzmA8LoZKsMHhQkEVovUo2Zkg78FrefgCxs1PeExE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QkJWKtg84VVJR8269Kz57Gm97BkY2G62pUFReCeY73rjj7PhfVUTRBgcWEzRjiCnAZRZrippYBb5RZYAU68beV9",
  "key1": "3KwhNMMxxLnG3XLaVr26b74aP9oZC2zKeKCAtQ5MipLUcoTQNmyhLMgfkccDXyLxX71QQQJEWeQs7x9eXhAL1eC5",
  "key2": "2cRKL4BaD1hbU3rs3zPJqfXq9brDxGKuSKsne5V2dyxw7Yf34nnkDZbypkBK85snnbVf1mHmMoaX9mcwkkwHvdZi",
  "key3": "27V3P2kLtkFzvWDjD67beYHhNVX1o3EceNuBzjGhcw9fKof46WWP5EWCEXtJF6FpVYPnkHWuekBZKUUSY4f4L2gt",
  "key4": "356rFGsanxFUv2aaQwTasFg8Qt1G9D47NogXekV9myhhdT45v4wgzW6fBip6t7GQc3pvCJfgwP6qVz9yqZyJkB22",
  "key5": "3cAqwyQJpb12En43o5fc59unZ9AqxhbSSHGDd3BfixScPYDHW6EsfMubErxyGtFHuJuUYNDA8ATLZ8WrgfAf1i9h",
  "key6": "4wFDUNKQBUheeSw6bGRCfcqf4PZKGJ1WuhagsAk1Mo7sjtwFWqfi2oWruXFLdzxsjmqG9XsrFWY22jpMdiASjV8W",
  "key7": "3GetU7XnmDWDBVHiMLbhwFXQfSii682uUkPcdu9esT1PjJ9vJa7KnnaGCxm5WpfZuQDgj5kUestnWbHViTpHtqYq",
  "key8": "5qhMbcn7reL82qMdEozDtbugQeQ8X5MECeTwN8dkhr9aZmZSgCAfg4R5pbQAigSZGMDYKcow9EXuUuysQHsdGH4c",
  "key9": "2v7RAvHikZVzspz34C8vKzaF1kRCYmy7AtffPD83j4CFjvL6aYDuWhMgBQdTGxw1GVdDvwXH4dhT1vzwzwDBpEuN",
  "key10": "561ayVvtfP2uDj8QfbuVBAxxvnLChG46KzVhZVfyx6P6rjgc6qFPbmPJRZcNuZPYQbZv4mvc6sK9K1F6wnxvrwXx",
  "key11": "4gQCmFdpb1VEgLVhJqf7D1FJkUTSUFwNX8JiexpicyfMFtNcn4MnzvgV8mkpEdsH7NfWBLQU369kHeLM3yW226Zo",
  "key12": "4om7e3VRks9vCA5wQDZEtKeG7vsXcAZprH5iFJZun45ZUe8TDHBLkuopTKeZKw3BdTr4VxszSwXHH5kUF7mUp17a",
  "key13": "4F55aWvKwukGtMVzmFJS7ynnN3hJVDsjMYRHzDJD2muJdUJQ1fC9aef8fnWjAJ7PLJeYMun8bjPEyKNwbS4PcQNN",
  "key14": "r6UFuVsaVGuDdPG7LmECwcybujRMokF1fbCgdRAavQsREbXQJEvPyxszVUPu4o86x5WfXkSTzNRX9akq9gHGmmk",
  "key15": "3cjS5w7ZkLFaUbR2zs6YXopUttu3jguhNDFD3unFim6dmnFvZo4BFtbcTGL9HwXcnqiUBtZhMiyLLwmE9pJvSJvL",
  "key16": "2QEwfmoCAskNFeuiuQ5R5qmCNcgE6j2gfCmNZx1XbuhRGKybF6tg7kQ6akPF9k5qtZH4SwhBCezUex1yxAqj1GFD",
  "key17": "2nEmkEEnej6c3q39TWGKwKiFLEgT2fi1JjkK76ajBZD711M9dXWU3jut3UWpPTpTykc5Sne6xgKEEgRqTzMc4x5i",
  "key18": "53Xcsb6vseVvEcGsBNrYnTWbu9wpkVf8qu8i98aSdnamtQ7M8v5qbnMSVATZbU64m2wiXBvVaxAi6CC1JJhZkWTP",
  "key19": "46hjRuiEtjEHbDFHQAhjQQuT5QiraFTvvugtZcgkfon61awcTE37HeW4HP7mWi8qseQrR36Myde2eH3CdawFdTwY",
  "key20": "5WQEnVawgUKLPFLyKnYf1Yvw9LxPwvC3m3yxtiiy3maEHosr4pGNtC5nTitMrwFYGTkvsDPzpSr2WXE4bbwzHpja",
  "key21": "3nWifPywx2T5Sxg5s7qWdi91dbAdY9xHV9yBuqMvhK2ugpfGfiwoLxN33shLNUqPxjcPxhPNp8MLWf173VyDZAsf",
  "key22": "61RNZ1hkWS4w7ajY5e2edQGiF4YYTmffDLtZwHbXNtQx2zyc95ArniEpzuaBtjnkvJuoKG38y2ceezeMVsvbpZFZ",
  "key23": "3iwNMGmtPwNFmfVMCLGHTiux18pQmAq86oRsdQts1ysYGp5eJB4gdAmtpTu6HYZ6uSVj4znBvRQTjEpZDaXV1tRZ",
  "key24": "4kD21xArbR3pxzfT7aXfvNuw6FeMY4x17M6pHjbjHZTam9sx9kuxTutiNfqz1dxUwrJMbtpYXHyCiYjJabnCHsY",
  "key25": "aYFfDaSfzRMQroQp69TUq2M6vLehMZi5jgSL9qtonf6RPLT6Yp6bvYpU72UFqo4LTvdisB5LD6bYxDiWL9h1qcx",
  "key26": "Hm4HTxZGnyMFRjLAVmDwmAAcCviFMfvDpcNB1BgT3dADV53MPK3t2H2eeFCzNaUqrtVffJoAq1Yqn6zmoUoNWS9",
  "key27": "2ELLdUQJ9DDDG1jaficnYyLJtdWaYkcXxTzZ3mFwP4m9ZuSijtCA8T4vebDQKCEeJVAcgRYfd1v8e3jscbh2dnsN",
  "key28": "2QosoQCSnnFvYoARFmW47hXzTve8uu8tQDSy8qtjQ6nrUsroVTotC7f96fm44wmfU8JQSqp9keRZRoy7gkaWmmrz",
  "key29": "2qxGVUFGYciyMjAEPXeZuAQJGG3nYAYXGA5C1YCgbXbsjjVfA8dkSzw8zZYvAVaKSb5CQWdAWnLS5tttwrDb14cS",
  "key30": "4CkowXAfDYEDBvmXw7GmjB241Uy9xTEJDjjV3Fk2gtkMTpZxXW5MfUFkBk7uqV6MJH8TDNtRCi254zxDh5JJdBgH",
  "key31": "46iuGKLwn233zTg7fXWXaZ88Fpz3PKm5HmxHGgBSa9aWkrQnKhkCWy9VeujpHoAkwEkUDbHcDeYNnHd9awpoAdcq",
  "key32": "4JVa6JwCNmD8ngdW6nYxUSXALpHtJoJx3wt1G4i3QrDTasVH1kZWXitkH2o9bjtZHxUH5ptNjef4xYNpaC11ava",
  "key33": "3mxi3MMYwP5wxq6g52f3uwVBXPWtvkKpJoThvJ4aDk1ayBJapjRA2jLLwLRBr6zvBf4UEMxrbTaNqtMitpyzmzgV",
  "key34": "5zwsrr2GpZpafTofNwMjNH5qG4pYuL4ErYc9cnUcUfCmAqVwvC3WY7ugzwqSQWkcPBQ1ZcLPVoDPmyFrk7tULY77",
  "key35": "2ntwYZQ8vmkyeU3DyUNu6ZLfdAcLhuaP7NSxXS9dnwsHPkenZ9v5dyF8CD651JQGm4nyJALXW1jpeGKtB6gATxjD",
  "key36": "2b9ZyC7EPGoFxYbnBC1sPXfEFAT4fJomuSXFu8kxGDpY8KtSD76K1mSoU8vkXNiUvpcB1j6vhbbmPwH9zMVRWnmr"
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
