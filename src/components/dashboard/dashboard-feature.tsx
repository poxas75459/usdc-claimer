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
    "4rYgBYtGPFkeE1nCgkxf1asCtEyYyd2tpfD1VZY3xNmdctWcXFYjGJXWM1zB8YqGE8fZViZuz7txHFqh1fdB5PYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e9NDMhTrsUS5vLWJ7fNgL4Lc8NBhfnetTjKyAUWWWDm8oA9UTrNMxxhj85qLRqpZuNqHiPL77crMYnRkJzz9mGU",
  "key1": "24y5KySuEB7mvWLK6kZzKfYDURP1zejEcx54BmBgTE9tz2U83QvrpgSm9nRdCmiJe4vKdzyNdieqEyyNDnx5RNMR",
  "key2": "2fiG6ZjknTXUZorZDUWY6SidRboZpzLzg2csQEJiRdjBsrrP6X2HsRdPyNAM9qykEfzhBzStQDMFMhk1BSEsmznB",
  "key3": "3xx18pPRLZJTJorg6x3jLrd1DmEgAcMKKR4XqpUsg7qdYEBkRjJVh91UeM7kjowAWzK8cbFwsAVFaM8yuv7c9gGM",
  "key4": "5a7rEjG3GHy7VyPRC5gyWtcrcKQ2hTGWowBNdopVPTrbYNbxSaJNirBASVso4ZKvHSyZLQgZv74Fiih8o4eBnkqd",
  "key5": "27sQx3pLdCy1unGksQPeJY5xUgchgxbPpYqL8airt9LnicKEFGgs14qNWtNxqYvekErjVPtaPHKcmjtcJUDZzmdu",
  "key6": "4oS1gXYTR3obeBDaQFkG9P62wVRbvAkG8eqdULYq4v8Hh4qNUEmzk6w6t6h4mozinJbCrNVKjU8qnJj8nLizuKVL",
  "key7": "gYGiGtNvP1CvSH97SfgTzuCXsFE1YJ6DoncCb2UnBc3Y4TLBc8YWxGgTMaAsgH5EwWuWAuqGUeHo9TM3sv4eC6E",
  "key8": "5KVU9TFgBgciydpqGSmX2RbcWPz9EhsYkZAo2i2suJFh8kPyixdgPCZ2CVwVcVKq2w8cQHmPyHgoqFDrregsMASU",
  "key9": "5JwmJ53pb5yzeB2YDJyGdEgKrK9XyaVjT2TahNRUTRx9REWGYTP2gVZkFikG1sc1DvNExm4DvkJQARzLMupqsURu",
  "key10": "26qQESGRHuqSUZneGjZKpXSCEdBZjAxYjeZz5A1bM92wHqtu2apVaJxvSQgKYwXsmLmkqj8Do5xsStgLq99784C1",
  "key11": "66tAZFpBjEnssibfnZ2FWQoQrdAMb6SZeohgCEjTZVn3toAzuzoz7N1hLMpeaG8BrFXRC5seKW9j882MZ1kmzESs",
  "key12": "33HNWRinFUMHrXS6Fxm28kvT7zijypnx7P9un9fzb6YMmuXhiokEJpgw82HdhkUY9f2q3sWGoejVc5T3iTW5K5hG",
  "key13": "5kTuXnvoTHTa9EkGqeupnRkshc7TjCaAfmB9btUsntHrZcDhqYxPjUjV7MCeezotcxVnaC6kbhM6zphhjWQiUAy2",
  "key14": "3s7pofniQspxYWomASSkmXphYRugUjztbreAzMWkoP2dVTbFrx4xx2JbjkJHVGqc6jK1oD5peMF6HrR9NUyxtWqf",
  "key15": "4hQaVHqxRt867Jf7P7xSMxBP9AKxkLWJrkmczac7hqwX47kkNFKH3oFGK5VJvRjEyfDy3N11HJoqhU9wnCYFokXL",
  "key16": "5Njj3FXprfg4zEWQBmM7RQPHbRwErmsixZ16KGzjZaZ9kcY6un9RziA1idbME25LdJqZ5amaCkHr32Vhf3qttQsa",
  "key17": "4HhUTyTrtTXEtBDBNmr2ifjD7wW5haYpCYHGW2vV58QvYEoygz9ttyZQ3RNUFM3iHWgMjposcVanDRAf4sdXLETo",
  "key18": "TXjPd6R6ErMzVd413zgouugPrbX2Ur7adsoNB3SXy8ZQZq797mPpgpUALRHsDrgDhNDhtrStKrh1pNpqK84JxWF",
  "key19": "ETm4mD9U4jAXWnfzpjBPy19SpxLZMi47nxgwBb3Vr5snEMxT19we8at7hJd9kNHJ1sMcXGqH2iNsk1gZ3y63LcT",
  "key20": "SedmdHdSeCZqWiWzNjBCkXbAhgifedvTDoedberrotcGy4eRsEA1VarRnoUXYKh2pm4szyb9q1aG2eAmZ3QNBMr",
  "key21": "5TVJRnk8u47MmcK1D8cZWKNFgVg8rApRTwGyKE8SAZU913V54GU285B31PcF2MDtvZzj78YGGnJqZiezJ2RYoMsE",
  "key22": "3AKMZe8ARDVJTvf8EGmKUyCixQkSSEzsR6DsYYFVVCVWPnF3SossgdCrpJw917CAnpGnEqzKRpMQEWKHsApuLMZN",
  "key23": "53mdUSK7xgvgPphyPHmDUmJR8o8EYJdenXH76K1YdZ2RRUkBKPvpNP6FykLZaoRTuLp3qEMBsXyKEF1awMMr4zYH",
  "key24": "4FUuMo2r7kLARjj4DTd8q591dNXYA7KyTg5ztYCKNB1nZ8teoeqJmwh9soP4Rd4RuDa4uTrLaP99KmLWT6pReQxE",
  "key25": "Qs2MR8ZEB68eUyWbBT6T2Tw5Xt7zhZEUrZ8ZPfUyZ1sqTCpn9zveMdywwEGFxkRvHmX3ePMrDzbsYxAohvTGf6s",
  "key26": "9s6LiTfjCbnhAUm6tDLDpowXduUNjR3KydGPn9hGuxgXWQzWq1hLnS7wtqwGz8uiBK3LP1SLhvs9exd1RV4XZy9",
  "key27": "eH8jaiaNmktRvztWJbx5W1H1D2YLciUakeCgsQsURyyxaEP96YCpNt4Up6YHkTHVnsU9q21XmBGbPXpUu7v9fSK",
  "key28": "3evhQ4KTa1dyFUpkyJAM8BSPDrhgJTUrdrW4KAhWB23T5t4LnggxxtkmQ2n7ESi6YuDYR4KY1rBet9RzqWHPWJYo",
  "key29": "5M7UfrBFBF2kHxf7Wam6eSJq2JLibDuHuQ9jb163VpgzTQt3wuW6fXE5mJEkJXURJKeUpbysspgikyxm4YC5gb3h",
  "key30": "5wDTPFnz3JuHhQBmLoSjc7kLGeazZ4aZUEhd58RRfuwyTWPNfK1KDQ4SwkDUai7hgqq9TG7thWDTfTY3gc1JDHyz",
  "key31": "2xUJmqvSm4oXUPkeFtJVPPHLZNF6yUFqi82v1xQKTKfLLpZDnFp6LxChbNSwr9hnKnLuU8F48uWKL8sM9M6kctq5",
  "key32": "34q42jRrk1V9b61dtqq8pMCJvFzV7619Qt64jTBQtQZRqzswdzNbiAxZqUUtoFVVZ5zJ6NhQoautv3oPh5qH3NeP",
  "key33": "KKv8cXCbsFiJ7jJRyW9Dqj3yA5H3f3SgFAHUk9qDU8KSofGU8eigLekZWBpVWH2wm66jzChJ4ksYryWvf6fH6jF"
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
