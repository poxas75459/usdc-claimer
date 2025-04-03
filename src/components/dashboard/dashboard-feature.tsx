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
    "tBFiqmNQxLG2hccNwEEuqYMBmiGdk22gyPZDSWxVR39hKSfk143UCyxvmSNSe1a1d3s3Y9zdQ1puKUeJcyEq1LV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yb1M35aDxYnCC4T3jjJNF42v6a2Ej8zndD9XVeQteC5jvshc7SijtBMVq4MAepVW2iCRfgEm1u6kBd1rFHDD98N",
  "key1": "2pCtimjiQvWxFe5Ybuw43QVXGYQPxmPQq2qsK1wd9Vjai9aXf6ApqJWMWC1ndiVWoCBkF4j7UwCLPTSsoqYCRjrr",
  "key2": "2oU6gwVHwhqkFpshofxhom4ukVisQJe5mcS99WugoUvo2DdPMhappC22DmC2TForeyq3jPWKKmRB7wNgxQFFN6Xo",
  "key3": "4XJybNL4LxrpWyF9955hRgCrgV3i9CNtGnEQk3Y6292kSuYiNTvBbPo8GaXSbfFyQpR7jZA3njYb4p3bUU3i1nRF",
  "key4": "2aj4WNaAiAWkcZw8CG62s4Ji2itfNBK7KYnisGfepuxjNj3oMFSWF5ezUhwzwkRH6qiGSW265J2V5TJStKFxVw1D",
  "key5": "28yrMQnfqaPpX4b2drMdd6TKzQLz1P8WHdAww33oHWAzxZs5qyjyrof6Wgo9NP5nmepvueiBZkF8yBLnUup9yBAJ",
  "key6": "4TeMYuZvreXN6Cbo6sNjWD2JowSnokknb1AKeSeW1HiBXsL2X9ZpW8Xu9EHKfPEgS2FjGVxBzrfYZjZM8byXEG6S",
  "key7": "5sukrSLWHEf4Yak7x2ivg5WL31391K5Gq76vzasUXZn7QezsBYfcZVZVNJE6Wfgn8fS4cqW6sPqCcS8kmZD9NUnw",
  "key8": "ET4PhAEu592LQnVuBQ4eNRRe72o2v9kPyHBDcjHeP7euqmHrXEy6ynDqaXXKbwtwMxoxsKA6ARe7r76qWZwnAaC",
  "key9": "WTR83kpwjtAc9vXRp9BMiiMYpQKxpJajguVEj7Bt2fBdzp9TGxosit6YpoG6o61NcJTX8jTCdWEjWd2mJgeQF82",
  "key10": "ATmxzeoBUjvbcZrL96FKRSS9AfTsL16d6ypd9RvujWzP4aWPd3VoDSuaGKYFQFLdKacbhz3mp7utXtkpq7Rq3CG",
  "key11": "3wYHqkG2jo6f6x4HQvuNT3XLXsdUJpjGit7fT2QZEXA1Qs44JopxqHL7XGWZJJ1Egofpm5BbUujPMk5ACoa1YxgV",
  "key12": "4tCgwzyFWLNaGKbVri9mytqgv7Dv99CN6iUnNuaZzgSJqFUHUsCAgFnMSL9JMCDDUaGxQ4xM8WjbMrKNaPgPjx5b",
  "key13": "4HStULQYuwbgzA5RGe1GyHUnt62EGDVASDwndFUWVoFygTX5cDziBAgTggoaQEzNJm7XmoHVgeJjEsqjpX2f8tBK",
  "key14": "2jmdHPSKpGfHg5SAPLUgTwPFr7tXwinWxXVsiHD7CbWgJhe2Jox7SWNHzq8PnyW9peRVK2XoiSeLmZMUZpuBRNda",
  "key15": "48wLbPzLJtMqrbQJftSEY3Q3jUQHfrpxNMsPYf3e324NVAadkZbgc5LkcUD8inByziJphvY4evABLFoApr2gmQcA",
  "key16": "2ndUYriCspFcJcFcGPggYJbRTT6aLFXiNqeWRF9zMA7H32qCUZu7aVbDLErbKeqpHkdV6w1zstRxG1uxBHqmk8vz",
  "key17": "dw413PVAY2HdPR9S6GTC9bQxjffJSdkirPcdFBdWgqqVY1RRZeGdZQPJrWtEGyv6NHffHZwFHRs6958NBPgmxVW",
  "key18": "4ghy21MxDbX1DW8Rg6cqd48dLU5LFDvMrbZckNxvrZ7SeZpQxz5dMkGfpS6zWXQvsxpgTAe36k2Uq9NLdobLU5P7",
  "key19": "4gvoBoBQdLFHexfngc9qzMc9EX1ekE3VEmDTmKRMcxdYKWSTGSGjRTKiHt92oqmrD3tS7A3bMibm8thWsZbjJtVu",
  "key20": "2PTmGz66fBLZr1k1TZYM5orQD4MEScmiUBGb2qVKk2wUVAjjaxHkVf3N4vDQ6iZ1XYjSXr18mGRnXx241usCbFN8",
  "key21": "5r5XABZppFWqapJSGhrHQYRHTZC6MkEoFFBbYpfkJWUPMZY9L8JNJTaJMUHxViieotuRsQ2x2h26jZhk2in1gAFd",
  "key22": "2vboQLSg5L7GPPMtZevgabX4vGWUuG9uRjpytfeVQ1dXhN7mwNZ9e5uynCaKfSv2Pi1whJhqM7V4MSJtarGQpWZv",
  "key23": "5m47Uvxc87Nie6nqmz8pcrxS64w2rNWgzhx8WuiJtNshGhzZ5yZZKJEdLbyTdgvsh4dC6qLjK1JBjDN5mn3ZSS34",
  "key24": "3Mn1i2cjg6Ju711u5V64hf3vUy2TUctu51C8uNqjAjDJe5H9sc6WY4LMbYV2CBqB2njnBBm3rqqQ9fsth5FEjD4d",
  "key25": "3nenvRTdQiafcVPTMPWQuA5Ub7KMffvsdnuVYdimkG9ghGAnRH9rKezvoDQXp3FdAcYV7YsS9u4k3DF2JEww3njD",
  "key26": "67PFhU9XN6vvrk4AiystAEgEtwXZ4524jNzTrvkUfFXZM5sg9WiLCSBM36cRuHCBEdM2NJJc1KPfNxzEC4FQcFHk",
  "key27": "3e3aKDimVCEnB1SADDhmgNw1gLxGJ3RhX8JmFYQzUkwfTi1FbLBANrH5Ffn3LUw6cn6s7xtxx7mi1sweqZdYFnfN",
  "key28": "43j6S42Gj3JduBi8QXRVaEHcHPpqq5AssHhyshKdqbqr44VsDwnguj99afRMB9FUqWcWwBtRCZXy6AbSVjCDpQGU",
  "key29": "4R2mAGgM5TVyCHQbDq1CZ26eNs13Z3zKTMDkBY7neM4FV75KyLEJBdknUZtkUxxnjwpwZs1T9pd3CD3abfJycjrh",
  "key30": "5S7YZqy8g6Wi3cmhhdxNXWi8m2sXEAuBFG4bW9QW6qax57i9UcBKwro4J3wMLo4774Ae9GqvKCKCEDDBQy4NaoPy",
  "key31": "31LxMg5QriHUYMb86kw2NRUxQzYZGsh4re5T65MiLDeRTz2AoFtoLR3bsgeDzJLh1KSQfy2t7dmsGNNtQS9s6NHv",
  "key32": "2H1vkV5pPxgARujQQYryMnmnjW61RBPyCfczQDQAyX9qLWBLBS8JxD5Zd4ppqa3MB5uvg7niMWioZZ9zM6hWpVRB",
  "key33": "58m7T4G5E7AzawuyrXvCD2EbqEitd1DPQMvP7bQGfEbYh7k1xuCRxqo1QCwD1UvYRAiEJVT6WFLGsjv1CPuSVwbb",
  "key34": "39NtWNLsB1tzvvx3NU434Pcok4Mt4ArnJ8exnZYrzXMAoTtfAtkatqUSjzasSZTxHBx4Q5mCjDmDwHpszAQhBMGt",
  "key35": "2MUkbCY2sHNZoGNtrDkRvdeRrb61udAtMHJq1tB9MWxBPbvSNqvpanXfHQg1iBDjhrjbKERTpM1eTwHBpbU9rgoS",
  "key36": "2VQFyF1CCuMmq18eTNo4DdW8nwym4mhxavsgSEUXeqAa5P3EH6tCt8LhR5HKxf5tzKAPb4mAt8PiKzeXsUGd8em2",
  "key37": "4QpQgwkwFnqKwa6URE4a1rVF4ydaMNs1K7Cn15NcT5xG57uSoqFexKa5v3mgsQjLikVEBGWX6wN4KAdQAPE3Ne8Y",
  "key38": "4frQUVVeQCsGZ852uE4zKZNYqVmBKy9PSpt5hFKxbQGD3vfnNLD2fN7WqGsR6CYToexJb48kX1G7YknEcWeyM23m",
  "key39": "RyBgAP6ymS4TuAf6CwSRpB2SUBXkHspS3EZpZVkViYgwi8qzmAgz6WARqTPyHxwd7zmzHqvrS41Vr7CUcnDbLWr",
  "key40": "5i289qVe6VMy5i4iJTZvQjWhjw77YTQxBo5e7Xidv3naYFozkxHSpRhHK2Rvh6FNP95w2KQzZ7AWSJZTzjyi5uco",
  "key41": "5dQBcFg6Tr53jeYUFAsz4MDNqWgXDHZKtGHqWnVUdhCzRiqMuySKaMQTNth3Z9eAJtcXkNgVMyFSaQ1yQspZbani",
  "key42": "KzaxSmECeLx5C1kEUauWybKKFRBn8RLfeXEgbXb6WwmMoADaFfywmG6MYgs4WwVaK8c1uSVWNWNp3o6DPAkUJkY",
  "key43": "3m27CbL5DaSWsbtbpYSwxog1kJnxjqR5u5rr6objoDAdV8qUhkNWmBEwJjPJjYZwGrCWLcZ8893BJgFTf2Nc7Mhc",
  "key44": "2BRnytNSDASRqagXX7JKwo1nMT6Aju5qWC6fM59HgNEEQgSsuvDfdDQzvNaLvVeuSozauPBcV8fWKMRBtisAsGYB",
  "key45": "ffTrDuPx46cearMX4mXRTD4G2as4ZXQKruysUzKjjmQxw2KkbAdYnVwRX8NTPN3Jviuef2573Q4S23dmy9u2jPJ",
  "key46": "3UdWn5v9FuLRFdXqLpytxG39wsRRZLVeShVSYpVKsoX611qzs9C2eHB4U6MwGW9wmDZrVL3jGGYRPG21YRVP14if",
  "key47": "4XrovXich76PaA3ff5vjfn9tcdNjuqsJcpv4vFC7Qtq8Qv8eZP9nfPtsoazHaJrWdnTf6BGxAucXomcYiVarJBpd",
  "key48": "3Ea3DidZS1vz35pfQ62AUP6HStVNtL6Cp648wFyqFNFdRok2rARg8X8HuRbkDhBzqSLk4Vv5BrNrMbvnxLTY5x5t",
  "key49": "58TXnZTkVSJVZzt28Znhq9fJKTc2VqNgnurkpczKtd55SDqo7GuDMWHy9ebcsXrEA7BKfZvHy8Fihhs3wY29T6q1"
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
