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
    "5qT9bf2eXQn2YBZorG7LULQGKY5YMdCFRoUhdFYEZ7596eDwK6wh1eQEBLt1ce9BurUZjqPEn8Z6G3ddXZZVoX7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cnHKxH6PiSsaUoTNszwvhucsCmJYo4THe9JkRLVp5krijvHuRc2DD8w7mhE4Z6ATRVRWA79aBokfDAemE3Wb4y7",
  "key1": "4wV6dcNhd1rKaWi4wyVeJTzut979e9XFmXFvNFFJZJ522skHFK6ksRWYaPwTrTPZpmXevV4oKoJDHp4eeW2TABJ4",
  "key2": "3hbR2M8AhDs4JQrsNRgyk1YQ61GpfdT1AcXUpoqqXTYRrtx7WHrCCTktjTSnvgnvL9r2e5w5xDtpH1XJnY4U3wCL",
  "key3": "dksT6ZfGLXSXCs2rTyjbxNvtFLyetZjNSqqcHunGgSgbLYWeNTpReWGHuPuTFafDd43E2VgUrH9HUdmv2wxrYFP",
  "key4": "4tzobpEUebY8Uoh5Wef2c5JTLke9okoc5GyVXVdLGhXNCvrk7CDHA257gpLiHXhzkuUNFo7Kkc7mbGr9rHjEayKC",
  "key5": "4qYj9QGNtmHgWKBUyWJU9TqhssFukEw55kg1n1JwCZjy2qHN4DBoCStsoppRNk1EydX1qX3hignkJMzmt48Ng4Ts",
  "key6": "5e9fZApLvfpSVCbmveNbQc9mpSkVbHFhdxizBM3TFb1CTp6f1ZTQg55Z3Y2UUgQePTLxJxnLEWQc7z9kpknu19Jp",
  "key7": "3yrANpiCNLoxzwVhMUNNdCKQzFJHGZGVa4jwxCAcW56ihMmrwGf23mNBD41B8rBQRVe88Hdohcs9R8mZ9bb3Sh3A",
  "key8": "3hiUym5JnFBRiJpFDoG3QJtgL3eooAy3nqcFgEXTZKdEq3bnmz8bzFeoiTzEDEdNhaczSrvhKKDa4izPhxbcZbri",
  "key9": "5aaHJd1r4ZRhzxcezNqt7rG9d9UxeZkS5tM7sEaL7rNSEBzXrb3tnLXy4C3rK8i8zviEzFPdQ1x2ai8prQAe4BUs",
  "key10": "1gU6qepeHR3NP7wYNQMq3CafVqZBLMvrzJB51fZFndYBYeiJvoD5n133dt19zYGVCHV3g9kkpxu61QwZmuY6aa4",
  "key11": "3soaWa3Rx1HA3zbMsHa5kyf8nNPXsdT8p6DKpnSanf1Ziffmnxso3stj1bXvUQGFMTWbk7YQ2uAv6HVW1bSTmNQH",
  "key12": "2W9WL8CmBbSbqj6kydmRqUrqAHK7BcJMRR6ds3xkFjfKqvumYypa5TjNmtPYq1EE8s1Q71PsPp8ddyZEkaQXiyC3",
  "key13": "2LdwhoL3R9W7NHaNhj3WVwZmS5q2kGMNtiDTkx9nAXfj8WiLxL42bVkQB3qKLHMX69t5oxh2JBnthbw97HHUigkh",
  "key14": "2F6UJ3dZ1nbHEy66zHacPEGY3kYyjVrKH8heZQeux1hmRLt37chZVSxvcCeRVxz3bg8owcxznC8WSbntKVY4AMt2",
  "key15": "3fmcpDUsaCcdFRs2vbSFjtn3Mwe4kPrkHYFdbiysKERCiveYwnPwduK6a4PUAwweyAEr2YPcqmrPLCQoW17fREqM",
  "key16": "5LqbY1YLpRSbxBLR4sfJgd7ntxc1LZrzzAmBHVQU5EQJF29MSNjtMf4yGjSnWZAbWHdzFSYStaDDe8Lfj9e4BXKh",
  "key17": "3NHT7wVEsgcYFmEMGKDjdgZVnghCT4CJMHSeiFYqwiZ7GSnv7Dmb3H8wJCB5rC8ucYLY5H2ntAPSDt4VYJcjFoUp",
  "key18": "3Lx8EeQFiPe5Q62A92bcENLczxKi7718iN4BGKks6bbjBaTWmihDmPgZqCtLVzo89rU9ggeUJEnudx93syM9LtKx",
  "key19": "3YB7tQfkcxJj7q8cYk9Z2P8Z8cE4SD8czk4Gjsc6Fv2uNwUrjpBcF16HPtbaEjMSjfeq9skBTsxFSNrRigXPE9CE",
  "key20": "5biaDVmwPcZwZFXxhxRCeZKoNRRHp7c9BULhzqsvs7eAg1TnAYNoXK48KrDdUCHqL7UmCrGv8Ko82bFFn3JaCELi",
  "key21": "5D2UiwXsRUMfTypihhrh27uhr2jPTec3Smw4mg1VpgoZ5uxPCpTv95EVRotor9ynrebv1iUjzuMC6FUmMcTJoGcV",
  "key22": "Dbfsot7iBuVuouUwUcSyzGz7BnKFWxD75FHccsSLHX3yRdXpd3hdGgW7s9nJ91mBDGSmdYz56pCCnfvFALRSfcN",
  "key23": "5kCVVriYkPHMkayvjusYy1i1BkcW943JGATWXk7SgWKzCnfjs7ya5jUbzQ2msecj9dNes9Jmaqjs9Z46iRH2RMk6",
  "key24": "5r1owVuUoCnAXRTSx4Nuk9YM4xTqbXBXpMSZU4z6iEV5F2XHS2fUJsVDDtkeGpQHvtHwTSQxSybquiLDngXodfUo",
  "key25": "3ipiXpeaMtH9nvkyj4a8eb1ZhvD6uHWr5C7FMPnobxz91nntNmHUBH7SukZWN4ZRjxNkCjXuBVxXxLVecEHGH6Ju",
  "key26": "UwDyaiDKKJ9Z4BRduR1v7PSGTCAnBzf1h1n3bKtPWSCz72KQFGCkAi664vvzWiHsswVHeWnpcsrgvWuAoEm7sj4",
  "key27": "3zhWtzBQ1KrgtBMmGkBmEjQiXEvHMtCGpvHarYgEVfhadtr5M36FLcPvFBYdbACYnoNWZbUjw3Zt7Gu1FvArsu8",
  "key28": "5RKZrBjUiUGdpuJiXkmCMpfwB16z5DCFLcxDPZiTFZqGW6GPrPJkjuH92nVLqy1zfKVc9HQ8U3LXJzZFcRdVnJs2",
  "key29": "ye4Q6EsWiu9hhNdayvdUwWTXmYGMWAq6VxwCGQUwdFstjheDDJeDJffcn7V6xjgTep6LDXSmKnmbS7FbQj5dcMJ",
  "key30": "3BtL7VBo4DFSrtRpFLT2z6Tf7Ti8xwACZPpVKfAVEBUfHQwPSfdF1R1hCsK555cf1FpYwHWupgq6daNKp2yo6Se5",
  "key31": "G7gpzskxLvgk3BhL7nq7cpo56HkM6eGJwijTApJZybPVYL6Mujo7mBrnEGT9zp1Q8WAjXgjqFuWsmoHAE5aU9G9",
  "key32": "3Q3C1Rry4ejsDrMpBMVRPatZ3AiF8F3tfAmh2iZaM26kDgBaNx6NTYv1heewVEuTBZwLGDtq9m1ZtTA9owkhnLCW",
  "key33": "29WjvoabX5BdWP2yW3vAgck69pNvFPp9GcdtYURa7cJ7Hhxuv8hAeyBnBLLauaNVeN45pjiuNXRsXvimVnh2ahKk",
  "key34": "3sC5CCLxGC3cnkK5cvodTXL74p5zqC14MtxTYrzAJdebj9udXDiCUqxxPhQQ17U1t24bQPPRXU8wzuqe7qrrafmu"
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
