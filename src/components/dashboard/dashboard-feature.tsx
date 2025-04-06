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
    "7oRS7nWKK2kH3hRpsDD1VPiTaQaZn7cEWMLs86pdb1R1VojsGCdBxxtzfGTmwJdX2ifLmTbjaG8XG4iXJfBPKzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GvSK6pToc7dj8R6jWqfEtwWA7A4E4nMFcruwEjbkND6EnYu1b1YQF1dW5pxzavXqKHAvfTJ9vDv1MaY6rhWQSGi",
  "key1": "4iiMA4di3gQ5DGFv7DkEKRHWET8cYSrUnBQUYzDv59zq1g9M1ZQgLjtd6osasMicWF8YdRmByKeW6vzASWhYT1j6",
  "key2": "2myGxFKfisE3GtUhyVNESPZq1ZYriGQpF2CtaKptd5QHksM6u5cqsUXKmgXQuJScfrRdiAQJupDc1TAyLRQD2pSX",
  "key3": "4J6bwxcNaVhnSfZTNaNjG6K3Cv6Uwhfpfho4FL24xmBiggSnbuMNuhUT9svFca44tGGYr5nhs2WHmBDqSHTyXSZk",
  "key4": "hBqyCWkMscWuawJe6UCr1Wje65KKXU3QJ6dsxD4j8LYa6ERJk7ewBxJGoZNXhB6tVAGHhYq5wnufKPT6esJpfWJ",
  "key5": "2gmumUX4uxjDEwsqjdbeR2ZuD6rdDLtWCQmSTjMXzyjZJqTNREvfQ6xxCwgnCUHZdX4RR27vM2h4kT3nxbpTJoQP",
  "key6": "Mj2eCSZZVEsdYcUEx2982oZVEpw8eJY7zQvjCEHzL3JQWC9Hh731w6edc1ZMVagewQcz5gB9ErJgFjQx7kCszdk",
  "key7": "62YaWPM9yBGy3v5WPFkT1otj82jWdKJkWWScbEXbPcj6r9zYEpR9KW8eyosbMzVTNrduvfk1t9AC7XbrfrNwAr8u",
  "key8": "4FzTWuUNHZusECfcqWJyQpvgYZRwGNe1YY7FkuY48N6MhpVcEVnGbYKwzvnd5MmrYXjD89mKZQFQMLbHTc28rEKy",
  "key9": "29ycF2nE1TVVd7C5hXX5q157Fj7nkut9hiDXizKH3tWD6ExkigyWgHksJSKuj2gRac9MnvrKm42FmQCKYCWJxtSM",
  "key10": "CsXBgKLWv3FprDPg88sBinGtCcjtjGsHBs5dfUxbDaqB7MJe8AKF2chb6v7sWwbYXyKWqerm6M2skcpJBXVH5rE",
  "key11": "81My9rjovUeKndMqXsuf5vSrF66zjy6MbBferbrshQ84nv8ieMpgWWCXajCEPjPV62wR5mLqAN4DhSGsMoFY1Wc",
  "key12": "41PgMPo2XU4KHSGJmFjuBzXhQN2w3PrqigeWvpf2mgZqgH1fjPMPTut8hyoUdQ9VUAiKSSMxPd4x4kN7d3ZqCLsw",
  "key13": "HXbZgHor28d5Nc7X71pFnCZPKcrsFEpo2kS1x3az5LzuUNrWpq9HSXmqM1mc13wDKv6gcfE3hTmgDzh9Fp23Fs7",
  "key14": "36jSqWEnq8Cg6iqW2XXT6dYH9C3VXFnAkifa6RButu2pE7SbZCvrH18EoEDj9gMJ6CmnmqLXpUPn15WVWuUEbLu8",
  "key15": "3Da1aVd4b42UyjpbXcqG33VHwu3EKtPkyQVAhc8bpHsarpJTDzuCiB51uz9V2bLAbSVSRDTKhzA4ccfmVhFzGHYi",
  "key16": "3sgqsavaAs2wYVuyLxqWwWywjqcRSke9wLW6UBzmxCYfv4FudwetQ468tbdyJdEtmehFuLZkvuYBpoHU75VkVeuc",
  "key17": "4fRkeE6UDzvfEYj3YbNb7Mi8Ah9h7KWv16ehXY9TgYq9jBj7kaHtqppcA5EQGTFADPYkYvQ9aF9gftv3uuBmptVi",
  "key18": "aosQMQApd5QBHMcJzHoBehQYqekFg7DMQGPErDdfYwJubmfQUGRK4SQv8rzfSJQLsGxaHzWat5A8zqBy9F7tLvC",
  "key19": "DZTS7H6YRQaCxJXNghWQn9WNAX8YvobAHCDTtaTRXMRa1N8Z6WRxweZobbYGRYRdMKHGb9yV7HX2d482CxxmvrX",
  "key20": "5FA6qfyrDV6VbJtJQyGL3hndVXiNK6hoeXx22JSnS6kQrdcJh4ufydjJ3Fgssu1UGnfQ7nn6uysCYzDJSTQANm2M",
  "key21": "31GCdjXp1w6DyS3dwHVtK4qT7j1tp6btYQmD9ujzKG1J1haTCAjwDoW7kjRom7pEVzCgVzDC4gA6EYEQQiDXz6Rb",
  "key22": "zYEyv83z4YK6aRSqaN627JEPeYjy5qty6hLAJsv7w4ZCr7sVUkGuoqH8vxryJfuksBZmkq3Y3SV9sK3z3nk6uzq",
  "key23": "47GBy7Aq8535CrKRdLUwKKRA7QJ9v984PxGmx8omkgkbUBhv43ndfFX7oYoy8RpiqAqmmh7vtUUSL2zA6uGZBPc4",
  "key24": "4HiWY8EjmUQ12MhskMGYqqqryMhzQd73shRXMjUTDecqbTmPZwFxDGVM6Z53xnr2iEfs4BbYx1g7sfSLFWoztbZf",
  "key25": "2o3rn3AP1vz7RdVt18qguCdPsZ1kc1fXcFtEa5UxmsbRi7eVzN6FSpZD6A4LZ4JPRtbCPSaboF8iAg666vW69RWh",
  "key26": "2QWN3TPNtnJk18LwiUdCz6p6jafntNGXTD377HUxLKwqEK5GAZs9ZaVzsy8YGov11LAewjbzugMugL8WN1aMWHoi",
  "key27": "2k9LdwLnR6wSRw8CMNqFQGaCsKvjJjhG5McCiopxcT2CbJF6K6zq2ZHaRx1eC2Q7A77T5EarWWM1pBq7kxPaoAsf",
  "key28": "3K5xmHfqma8Pwhjckauvc6vPwBApAiuimqieb24vHjdza1bJuFoSStj2vZnnCzZw6rVx9JUfW8w7q9PgZvDBVj66",
  "key29": "62CUu6JTsUFR3jZWXXYZvSNwvWYnU9dzqbmViJZQBfQsmKb8o9FvA1sgBs3NySMor8m7MigQWPY7U9MhGkp21rdC",
  "key30": "3Bswss1625x8RRRvpkCmcxp2z5DAGds7pNCwi6EoYAzgXT3yeFcdEmVZsHsu8qkkMqCgiXtXQZrr3GqWn7ZZYX2Z",
  "key31": "66Z3M3PFFTbbvVsf6ko9asa523iPDGWnRJwAcMp9zXXwB33XFXiyVBdrsdpW9WG1WFb9rkDR1KKiNLvsCFmJsFe1",
  "key32": "3Km3mobsmaSDa2ViGniw3YmxP18B2gqHVfsJMJnZAzhtiRZrdYGeFhb69gqmLpPxEQSsHFRoSdPyfmgbbJhXrEmw",
  "key33": "4w5xGWGJ9bnD4Z5WtSzWYLR7ESXw3rA7UTqBYbDsRFi8PQyhLsa9jXHfbJoYzoxnrNP529xh8D66ktngp8tgNzT2"
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
