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
    "5jLQWceP441WfqsFqpufRLpLEFfgmnqKHXvmQBmJt5hzvpwfR7KrqAcbe3bbN1YNZzfBwarWaMLtpzRpAmsRs6Vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B7uVQmUYd2beP7zkuNCNuQquERr9cDyUXK3NBnLt8pTBKM34TgAxxEbB23eHDxGcra2x7LwhG5XRAtt75ia9fxb",
  "key1": "3pwCZag7xuD4T1ixKQVpdcYo56xK29Y2jPcndvAoiMkTG91aiVTzgDE4UDG8YX5SDKDASVDpBKn44bCxjdDM42pe",
  "key2": "4YZeKfW6upzMMEx6EZuFMKUyR2TMmyCzS9fzo3wvGzwEDHNWNSrgtmozDBXmC1uaf9NZc7oGjVzh3AQPyp7By7JB",
  "key3": "3DhShDM9ywJSe6MdLJ7QjCn7Eba8fLiHQkr7vx1wQfiEtMzhT2UyWeqpHhbQFjT8TS2dSXZ3GxRxA1DwRdh6Tucu",
  "key4": "3RgmZu8ULLp6ZBjQ69j5XGfYT9B4AZeRhcsqfqxuiuKPNJ8rRK95RV4dJv2TvLoXYMzPbmTkDMnJDv34xpvncTHf",
  "key5": "22jw1QyPwyDkqJpapdXsxHY3SHHfqmJm2NfjNzzBxCqLmBfNJLhvkVv1HJbhMvK4L2qPWg7MuEtnHkiczXdJP31z",
  "key6": "3TckBxXKk4RZhQ1h5PE8Q4BU1RQ4rai33Qqb7xfdmCBkEoMzeb28PRGUp4ghKKP1v81kfEerJFRcaWHEFg1EJwHx",
  "key7": "GAY8XEcMXLnYQKPSfHFDPwZ8NR9N3WypCAqN8ps8GwDopBYZwUsjZNgKXgACmdz12WDt7F5PFkJdBByDvwxtkfg",
  "key8": "35GaiPDWzzr41Hx1sgBzhWDw6LuLW4nJXVDvZ3C7XDgej2u4f6eNUK7QcLuXysStqs681c4JanuF951sgq6nyt8s",
  "key9": "2fU5XxrR486SrPvdHCRTNrMCxXTkhXpTVtAnLiWDsAmEYMgsenTkAY5w5BKfvvpq1vfgi1q81Wov8TwfiqgRK3Yp",
  "key10": "61ck7ZNNrLBLKxQL1PAEeL7JfrrddNV3sNCWTeJfbNpACunm2xUfme65vbG9NfzsBcL6ejz42GnSy1Rfm1JPT2KJ",
  "key11": "27xiAj2GEPW5AqBoyiKxLEcq8N1zYN2X8Ve9URw2BtUmm66jzCSiFN9qRvpP1DRiRGJmBFYw6dZrR5SphTsTLJsr",
  "key12": "TtnKi9jUw68Gn9LNqmSRiJynCPgDHoLkR8sjsEQtNoWcV5X74WZLBECvVSM5QmmKK42CajcmPutnepKzV7yqG2p",
  "key13": "U8SnFryUv1BQvYghhwfwJp4FQbaWu7tXzm2fK4yB3SBbjiJD4F6J4HgdAjTXwiHx9VK3FAasY9EgCzBfxx49Yh1",
  "key14": "2o9WUztMuJC1dmBfmzWmkdR9nAS1WpKJvLeuiYKXqLL1oS6p1LY3TkRFs82qVEq6EmdCHjUKxxckvTUj44M8DbsS",
  "key15": "3etSoa7T2fa9pfm6cuMPqZrP3wqRMouufoGnvLAacLNDkFzF6sYCE8DvwjeWrayPVA65e1AjiQXnRnWUzqSutqS6",
  "key16": "LMbX9DYkRvjoUNjSitKpb6LGTQckmzt9135Je2G7jPsiQSV7q4PDuaYdbAaSBtcx2FGcU5nZGMXHNpLTUobw5KP",
  "key17": "2NLicfh5R6dwxKh2rt4dHZkpqnDSp1bSQVMwXEuPtGzRz3hQAzu7Qa6L6yNNBCGbkUjdjDWtt35jBP8aXGxTPbTC",
  "key18": "5oZWtxfP9Z99BFrMAsHL6Ny4XvDP5RN3Zp4VcSLn8pNq4jJsncD3rLr7goEngTpjejVQqe4n9V8z3Upmxa47GyWk",
  "key19": "2U333dWXcUjNeKxr7HPz895QgdSJT35CS8q4NP1otSDeaCMcGFGrWgxXX6E78bqLH1hYQbpLXY5qC8Lb9Re42be2",
  "key20": "QRQEfrtKz6sVkMffofKz4ELYnCyMs4tYyqMyUkSpn9AhzodNQEGr3jHw2y16tjMcdKvg52hGHpQBszsB5kTRJHp",
  "key21": "2RDDznL2mrXYJy3iq3TUZgFq3zz9NUMdvff4tmFiLDhKDK481Eh5WsjguwFjQNSoAFAqerZqCuqj42hbY78LGQ25",
  "key22": "tgpK3BtBhN8PJu4QeWNrrZktbRgDUqQsdc2y64TRv27NFbTNqKGXZ9PCziKLC8aqd4Qx2avUkmjd4ZEnuhRaqsX",
  "key23": "62GmTf7AjBWT9poDe726fJ7UUKGAFCs4Z8oeT8NbMKQ276C3aS7BUvHX9gAazaLzxxzyAETmAZVL3Z7VVUJdHJuR",
  "key24": "33WjRwgAYu3T5kPYRoji7e3pUYf7KA6mN6QZuJndgHRFNyLkgNCk5RjgHPoPe22JSHr4CX6VFnQFjz5hhSw4kTLA",
  "key25": "s1weGoDKm2A3u4ap8bmZW4uszbEPuyxuySrYpvaAYhm9GgDMdU2TMerMVniVYmNXkpANxWa6BvrmG1mbVQxRiMV",
  "key26": "4Zo2EoCzRG8gStgGyFTu8Afq6Z8bzAwT7p7okTZKnWTMnkotj7MQyfj9WQyohp6fSoUxci55wN9VZpt967gSXwis",
  "key27": "2C8f7oAEQUgyvZPwJwnCLKJFwuyRrPgUKfapGAFrSWYGpEj8ZRuuy1g1DXX9mnKoNVUomZmQXB6za2MZshQbazFa",
  "key28": "5xk5gXoTMo2vCbkmH1VcrHa1DZcy6TWDiFLF6r8pcHgLopWGjeQt6mYrJw7cuzHY4KXo94xu7N2LzsyhDk168ey8",
  "key29": "2SNzKQkAvn1Swp9WakcxsRew2U3143NSQZXwzhsNpGmm3gcQ7WDvbq5kRGq65apZf7MqWrLkNzwM8PKCvFKQzZTm",
  "key30": "5GTh18uncAETao4FFNUajhinXpUg3q1zCnZz9YSUovJrwgTnrdop7XHJXKyGTJR6Ni3puA6oonRvsuQfJumL3de5",
  "key31": "Xjj8GFEpeiY5nxQfQYx9QfYjEiApH3BsgKFuGAkUiWJWyPMWgq6niqNfPvGBydrdMgRuokgWRBPWncPskvA1CSR",
  "key32": "5cfyKZkbSzwvX6qSDwyehoJy9GWEV5q2e3jyHN9q4Ezs8DooVCQyTbPj7NQL66L5jsRgbnKtGihgAcWKnHU8wvLH",
  "key33": "2jMhsrzNuTj7JxmiiKcoPccmRvnV4x4rDJeDV8NYBd3oLFxQRi54T8JhE3Vw2dKsiJ8dWnFnWPEW95a7zVgcEpvM",
  "key34": "4H5fNR4SMZ2MzozFoED6BcZS9HR7QiNGCzNYenZMDzPLxZNj2SLuj22UYrXW9msxNeyQQuL3KGZLY7mPLJUyFVoF",
  "key35": "2Y6c5dWatuwgu7U9L7kGrzM53kgZyV3QUpDzjzxHfN8kkDPtPmLFRgqd19DdcRAizVDJyvotRvKFcPYnxoxh4Vj",
  "key36": "3hX1H6wtuzPy8EBuXo5Mt6mcNV5g4NDpBhRbm8Mi19tZP8JYJ48hyVGDQMXQ78Jhr12zxqauTm2VUcXka7UoCZyW",
  "key37": "4oCtGvqsahwPfVAnVZxnu96aMAHoyYngqZXDy2qyYKZDwRJS3UfRS8zp7UbxFwXNQ2UahdauYZA8TfAaUCwYdwYx",
  "key38": "3CZViBhtJd4zEvD82QtUCjjVE17vMEq8PQWLf7gcqnDHrg7AGVqyduRfXMY8HV8tYs2y4am2EVqaZ1XGRc1Pe7qu"
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
