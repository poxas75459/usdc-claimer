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
    "zKtE6GehPGXwi9AKMy28CZQEeDjFYtYswkVaddp9r6k29Hpud1iRaCtsFQpZ8XtvTgFYFkeW5hPdmFAdhNLv1zB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QM3TLMggPTiUtsRxjgqTPiyeqKVXEdW5Y8W1uFdGPv12Zkw7ofFWQrW88bVxpFpu5zDUKt2vhNLs87j2PRD4Yr",
  "key1": "3Z4dcFzQJWuuiCjzr9JyxCZ5Axvz6FD3G1hHbwG5Nt2xHmAvNRG7Uzf2wo84tUwVbKUBvfN8RakbE8Eh9urXpQnn",
  "key2": "t7MML7EJP2M3kyjhiykSVrrLrFKVjVdoZ7YccCeLgaj21M7nVS32JqDyA8GXFS7a8gsLH4uwZQdCf1rotu4Cdt7",
  "key3": "5FCN7v283QhE2c5zytD24dU1as9Ad6EftsbAdzqswdUZKkErPhVj8ApJSwMCJy1fXNKv56hWwfnoZpc5T4zVs3XV",
  "key4": "2e8EmvvQU7eYmA3QrUAv64VDCxWUuEvLganvqkJDSsDjF7iXxcukEdfi86b1TsaG3FeDuLdTFeRN7TPez3bJGdbT",
  "key5": "23HJkn7MVzBuMf89byfq32gzkzwvZ5P43cSMaDP57oQ4rihGxEziDiWrLatshwvaEp2AqxW6oFrgGvJFoFnawc8c",
  "key6": "2LVGKuHQmB88aAJFcJGrgQiomiWFzpRETFW4N25NkR3u7Fws5hJe47amVC5LhovZBRMVLZYsVDXgiomCTxLLdaiJ",
  "key7": "2DzqYKJLxBVyhbNMHYnj1HcQt2wNh6zhvydWRDSVYkhrVRVB4bwYQJQfdBcUZYQoSnc6YBway8tdPXX6m9DAW6J3",
  "key8": "4jiPGmbknsC3LuwXf6VqW7WRsAi9KAFFnydNyGSkioeS4Vyg8EvePzbvabfgaELnJA84jQDtn2d9VfeyWWCRGzgD",
  "key9": "22LpQ1jVXxmtJq3nzsLvLSyK2AtJvEfdnEgg7UXivTjeQprhh3LiwhhefMrx1wBUG1KbMB4siWmm2tzFneEiifJZ",
  "key10": "XsXfe8LZLpKvueyDRShFsr1ab8ySbWLTDspCKySp3ye4iTqowBMU33guFRRFvdFZvQz5ZiS9FAoyQdac3eLiP8Q",
  "key11": "4x7wnM382216tsxkJ9Yrj2rZWSVjAPNempKPeDXx6XgeeWhLQ35RVtBEfgZ1rjo9XoqeDbShJiCvAQWEfV6WZUfD",
  "key12": "e2XjU1P5qBFdmQSC3JJ8Jm4r1boWisxvc1US1SLkXSQ3NDtMxc9Mgs5Z7BeLUBdTj68DzfWw23miKmtoPojUrvR",
  "key13": "3T7s79wgBa2SDryEpYSFXW7k9xjnGztnCNWyzjMp7tEJwGh9iNwwboajvTucBDW7ymf2geHiH34JeZXNzqLrzgFE",
  "key14": "2sy4f9bLGa3APbVX1CDRnYXyHYdc1kSJtLs2ePj4cxY2XPKbxRf3UfkiP49xhgExcrWo3rQ8tzQU5fVzZTGjZgEQ",
  "key15": "65n1UZQucdxjbsohAGNHzFrYsw3c8YjEvT5e3Zoc7cmkP65BSpzuKUKDAbKsFQjNsXEj81EUyqGLEKdZDQySZgkV",
  "key16": "qijsrLHiNqm9Pib2W8qWLinzoGb3kJC4qDnFHA3jN9oVsj8Xvb6NJkM9ittMaf9m4t1gEDDGaFGA3wPYS5iRXCw",
  "key17": "51vTWcPUUwqchDTHY7LsCidiu8aCPfyMHsXUjCAsyrs8PAyGzhZ4kqUhcDrMR7K9J3U9ysn8Yi6ZNE23pmL2t5Xd",
  "key18": "67G9R2STUojugatcxsppqv1f6bDc1BWnZcVcvutnvVQQkesVCQ8hD3zfbUcr3o5SYMBDUpMuoD6u5R3CTGzZZ5gn",
  "key19": "vWJMb9Tuq4sysqsUrSxatZ1xSa3CLamfAAZQcpYxNUsLPPmgmVN6aaKJ8Uj67rLb6jng9K4aSDXXjcCQxQeiozc",
  "key20": "4N1ELWyqe4BUSbqQT3hRrjzpo8KByFxaLRAHQrbxpbkCAfLeTbRiKHFGrz93Bt2yKcJR8R5sNaA87EV9EeDDLkaK",
  "key21": "5Lk3cVp3U7KVdoF3EPEddDQ8pvBVamvJoLFzL84Bg3hEvDsy2wPm1F8TkAVsGv3DBQ1yhu4en19ASVQCFUF1GSEQ",
  "key22": "5GcTUaqCsfpvdV5QVgxeCnjp6rZ7YXM75Gw98WPrdt5wHLpvkqJAZsfCafkk2UPJWH5oYfyUbMihPgiDJ6mT1s7y",
  "key23": "5cqrWnncDH9up5V9LRUxnki589M3kdtoocfmbegXpA4kuAEKte3j6thrKBPVFgxFQJS77zxZNcy3z7YnvHFyYeRt",
  "key24": "9TTrqsLbvbTpteabxtTXM7ZBmdEZjhxvLDgUQywAmyzysebPxR52rNFoMpg6u3uiGYne22EFsoTiwFEsXcyyg3k",
  "key25": "3MivyC2U28zq3gcBKDYJnUpVtVJDDkALvC5NYCZ1mtmzutVP4KEzRvfCG79sVJy8XDxtMGRHf2CPzwFRZ4TaPD3e"
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
