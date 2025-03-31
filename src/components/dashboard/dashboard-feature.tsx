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
    "5rPEwBVmbhufqS2iaFckmU5DNb1b6SFbQDaEANqaC4o2uFZCxbYXkuF8XmWMneg8NGYKktw1zpsTSi7AAfmy37ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62eWg8tbmFednMGkimqpmdxr5afoG1WZu7rSfrT9HfxD67LANfX5K8jd4rVWN9ue4K4z3mQGia8y3j3cCUumkSHm",
  "key1": "F8Srpegn815nvxffLazZ6jwdWx3nnfhxbcBGuy71iD7mBtwmTugXM8kFzwuSYLXFdVhoTFBgmUyWsSRnQdcyEDa",
  "key2": "31mAceDdDdHkD9GjL7vwEVzUB5ofqNxxNDhkspQrNJrrr6WPM6ixPDWmwsbQozWEExDktnCFANBev2daKnZNt9Jn",
  "key3": "4i3cyfTxfa5u1acHkp6JvxgfKRnvXFSkH8NeNkr4n5Je1PS4FkfMg4AKtd8cJ1Q1BvhDb25QNumGr8xYMqF9sdon",
  "key4": "3BhzsP9gATzKL2DLw86RHSjdhzGoEBZCQ4z2sqxx1hxV3mU5N4jyq5nZwkMhJDcv6mAWRa8SdjG4GZqZNwzZBozH",
  "key5": "5iPYMnoazJxr7NEN2X4SEo6YMt3DbpTQ1RADCYHmycgxi9roFpBZH98LjS1LhHtsSpPqbnf4FB8gtZzfjWYxmiQX",
  "key6": "2MDqgbvFWQcAh9BjirYd96Q1eZ4zGsoxxhyALtyRSozH9vALBJbu1Q7b5SAjaxzYHot5hTNRYeHhx11ze8w9L7xE",
  "key7": "3tfCFMP4ZZ3RFrgthdu7J6EKmk5nXe7THFa2jz2bVPkSwNjxq1fbMqMyT5UiSRyxou6hDVype3jStNjE2YnDM62T",
  "key8": "2Zm6rVXbMkuetbhCgyGHsivG3cEqeaGyMqRJfQLmJAUwxGCpuz6prc41ndpxptayj87EZvA36PH1YDxSxz2jCrrC",
  "key9": "bkpkEKbZSq6ihdWpW5TBQb2M5Q4bfsjmHf71DPFw55THLcUGSVpyhJN6vjDdbwQVDMbY5Sb1UipoEWvWnLBrLm9",
  "key10": "3cqFgdKzNiFzEXGvoqMEArCL8ahUZTFYr2UeH3m8LZ9SCAs4uTeoDWMZR7CfqjMDYtoTKXTMXqn1BMcXhZjDFXgT",
  "key11": "2t6aEEq6YtdAc67CNC4JM85cndGf4gjnE7eMVmvpuAF47xxrzK4SDQg9sKt1RH3QRXXDXEMqxK1FsTfbQnYMPqKg",
  "key12": "399saRN9rvLXbrUWYqc7xTiM4Fz3Ufio94aPU28idxsonwn6g8RXDi2R9jQm2cTe1LNsM9QR5WcthWTFFQuy1EMr",
  "key13": "yTg4BWdLcDGTxAsaZmaJpvAjvuf4CksBaeDFj6iXBziUBKYanKUJbVfvigQ9TuVPQwBZKBdEmWhyEXGzHM5jUeE",
  "key14": "4iHroF2D1Y4Cf5dfd9f6PH489bugyNYLvM8MP8tFVktKaMNztewPNq7bnxcHNyPYt2Lm124xcUhD9cM2MbgYqATP",
  "key15": "37cbZUsivc3WBMumBtDZym7BjuiT3uXDtqTvnpLQESjB1b8qdGPzPrF4DiuiXtakP1zUWWZ3FDVPGToVhy5dN1xp",
  "key16": "q4og35788HiTXFdb3Nr9u2vTE65MWkrECpaQMvSCL8SBUGRV2KDkwkadRFzQ52inm32xaBNG3r2mKPxriF5HenF",
  "key17": "QP8QKHUp4g3qA5TGM36z5FSwo4oP3v9tuFimC2sJeoFUUjgz7yxZxo6qygPgC4dfQHHZLAziBqrqZRoXy49t7Du",
  "key18": "R4Mtw9fYVnbpWbRua6ZGjDghBbxgvj7fJtcpY64hcmvgGXUwF8dTDNmEChXA4kTCqW5VdXSyFhBXCwAowtHktLS",
  "key19": "4amNgt67ZjVVc2e2esrseWLebriRgVPhA3ZUchZ5QYSYjmAHmB2HB6YuRTV1JRUdHATZ2sugSxb3WSnMpHiistE9",
  "key20": "54X7Fhd3Fv1qRK2TEjKADM15ezFALJY6iZDgbjfgfgCU9KLTC3ESeVQXtKjkJKcyXdKp29sDfoFS5xZd6s1TYmdX",
  "key21": "49EQArPUAWA3vBtqRfhSgXmBY1hUSfZAGQZqhYSMuWRoFNq6YCZ27wDr9b9LByusSfvpvdnJZjoQzVR4c69uAz5x",
  "key22": "4c5ripTrnwyt2oh5NH68RLFdpZczhR3DnNQMym1ddHT79hdN1HeyBSdA6sRrAGARndHGbEgEZteWnnAhf11QrZBg",
  "key23": "55ppc89Ep9GNF1uTf4BmvPaGKGFTQYyaNJ6QAUAzoBaNqQdt2DgzmyLpPHdNotFNGVJuR6q3hhsXTVKUjwzCJXfH",
  "key24": "SMVq5T8SWuuT64v3vjrw828cAZx5XSyY8rkxD7HkiytYvXAsYTXmZQgK5YeHY8xRKZEkk8sTZFG6R1TfjLnTV6k",
  "key25": "2cJQgrKzPoGJ69kS8jfp6aph9QZeFHzpLLpB1EPukJHNrPPqWx62oXMR6jKHnfLq4txqBpf99zPDaK1b5RvTx4NZ",
  "key26": "2BjSYdAQXtC94fRgE5doWMxvBTtFGsDAKahpetHodmEXteLM17NfWu6KLxcTicDXYdgLhf3TWqhzAc3z9Uz9UUL3",
  "key27": "2S59h6WHkCjyX8pLy8puXkipjGBYUk1oSbNQpnXWYCeV1yXQvCy3sVeX38AC33t6HWR6w5X45Cc3NRugGrtVWZoP",
  "key28": "2y6UNLYMZjc8ujyCM7DmK1Uhjya6rF9KFH3fA33kgmfTS1Z7o8RBSCM5qb34BNfb2uhowJrTFvjqrvb7v5rX5ocV",
  "key29": "uQHxYUHdHkyUFyaubQWn7NdCvZJb4krMsRhxBBAARbKvvZANCK8pTKbVvtccNwxjRpoxSezAtJ5v9XThTM8Dq3Z",
  "key30": "3RE57wX2dkiQBLgbS3YKj6CZFK2Q5wirBwMEgznpMACiAqYxfPNarxFnuCdMsiX8Jfs1639qd6WN4Hx6eH5KUcPd",
  "key31": "55QoCg526L9Ztr4wf7uk6Qi71qgVtx9HUUBSJQJDT9W5L2pAVgE99GzC26BxSJHWd9f713D9q9LbL7SJVwu7fk9P",
  "key32": "1ctTL2dTqj5w7pvoSdN6L313aXctQS9svj1y6THrgo3p7Y9T2nz9fWNoUjanx8JFQU2H5FKoWGAJ4Gv3E8nTBmi",
  "key33": "4KAzkJFEwHFL982VU4sSQGxXu1M2hAHUZQpfEhEHRrQYxTSytGvRGnwnk6xBFsz8J5HRAgSs6ogZGbyTzjDSUeYL",
  "key34": "3Q7uLtVFqzEsFZBNzbk1GTtkDoUFDytxKQHr6gSnJMDGBCtZyvTfTLeechwX4jk8vocMQqeocwBevLw8Am4WU2yh",
  "key35": "39jxceaZnCKCsuEvUJ4vYCBKn8KP5LrnobxhwT8Xg7qhei56yN59CxjZR3MkWTceXaf9JFVnpQkqWZBPpAabQuBu",
  "key36": "XqzdGJy2jVumuqSASaR2xGxHV1ewjW7y1P1YBGwerU2FJRLHUcRKDCy9Zsq3nA6oHcKNMxSj1hTWYjxcsA9yAki"
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
