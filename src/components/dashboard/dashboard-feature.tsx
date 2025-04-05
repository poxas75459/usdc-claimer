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
    "3TXEFgtqLkMnhdMF874Xepp1hRqKa5aq9swZEY7HxCHDwZ7TEDqQ5cqVx2rG91ADqgMvJnYjUipzugHbi5Mq8aQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uVcfBkuyqA3awsDThBnTGDCqxzEHNXeAi7PN8MinUQudJEsGAtLEqGWLq5cbNpqTqRDVnd6e5wpKCnGnNihRraJ",
  "key1": "3KQpRCNepB9eNGZHsQvY8Wu5MSbvEHp4ipSWbZ1YCYdVg3qTjSWGFqMvK3yJCycWKBUX7u1EjLHFfXtM3tKDyyBQ",
  "key2": "3WLV8zBSws85s1QrVYnbPEpW94Wcgem5FNU3caDpYanKvWeYdMjDuShDNwHssAbdp1bz4LyLjVyzsPNMaXh7E52H",
  "key3": "3efi54s1qCiRMHWB26fEhK5JpLM5emoTBAdz4D4oAcwEBZiZLZp66dLh3W1rGzMtegW2MzonoZefZMJKqW68DyHZ",
  "key4": "5Ei8czakJPJEVCcEC5emhKHAgaudZDvHCni1xZXtwFD4PJxxr4h8LTMGzKYEEp9rMkfcqMvToUWZBSntCWiMeGsg",
  "key5": "3P1DwoFe7GqvWSPXBfDVZ5RGwLvGXhg1VscpWMh7uavJEHKRd7LT69hC9qV4YkPNLJc6AGG7hUShZ5QSvmRmJppy",
  "key6": "66DgexrDPk4B5NeBrYuXwnHThRe9JdvwDeqU3qvoVLQgjLxmmezndrd9VQ5RM6pFr3ASBRoTkEvrohwppnyysezi",
  "key7": "Q1p2GJsexBt7M1XYHR3XMoE2mfn9DQFDZS1d3dNNbThoChqsqwaARz42cPVUYoGZKgPd3cD7vZt9Knme5DQkvCr",
  "key8": "4zxZ4c2niSntYV9zWXkTFX7QtqvzmHAdDaQVxWjRigmpVeBVctNJaLoRX6KmufkNHuAy1HQ2fdcw1oX42eBkf9fg",
  "key9": "mXU5HCwkN2T4HriyYdzQAh4B1YoKL2sj2VPvWfyVNj7WiPFdug5LTNV6UMh4ZZ9BswPwN3HDGmUXBnvKuoVHk4f",
  "key10": "3NihFiH8GjKnWdNZv91C4XreB1ervrc8hw7fhSEAqH6PqGtjWeVo9pDdgcEeWvqcRefB2pyCxmGYpPcDmQB8EMY",
  "key11": "2SvQ8btUb9VykibvZrakmRtZoMUSkeoFbLbBrvKRDaSP7jyqE1gdUMzgSYY56f1BvV5SrxdcKYfRgC3zrRz99eXf",
  "key12": "T2e4A2BbnZAohRykvp8Q53qJ3mYGV52FhdrQo3djbmesAtC5nKu6vm8EaoTcS4w1ue2E1uFdgdJgtNZwSdEUAm8",
  "key13": "2PJ7QKdhfkyVEaVCTj2t2Uiu1p3uFkihfEBBGEPA6hPkPzsDsqx3Nw2oXXpa7TDAbBTxNEXN3Wc8eVpmgGnZzbcH",
  "key14": "23drEfjp79zW67gBHU4aFwpvv2QjEJZ9pmQE3WfEH4TfQVFDR9akZmkeKvu4BJzCHZujWRkd7qXVeCirSou73Tig",
  "key15": "5b6c6aMY58p3Lx8zkxUoMBv18KzFz1N4W5kJVK555FXXMbSH8WT85puDqkg8d7buhUGroLURAsPKvZPvZPKXtrBb",
  "key16": "39BquHbGGo8Cjn5SQvNcQ1c1cLNE4WANek4r2xfR8F9W4HYx1yWK2tUBdCeffsa7m6f6DxLqEkpZgG5zRTPcHKQ5",
  "key17": "5ekgCC2EwqR6QwBN3cuW3xLi6d75bgYJwffheyEGBT8fqhFMzYoWvfmWUQS8o34NNCbmxk8eQAcP6HrMymd8UUWn",
  "key18": "pnLtd9VhD2WCdBunH2EVWHKMEzUobwAPMmx9mQoYhojU1BFhJCCxKyVZFkHnBHVJxSBMjdHpJE7bRdvTW3q2jBf",
  "key19": "3kK31P1iDAw9t7oDLNu8dy995g4SRJTjYoZVYpSWQQZVvj1T9Ec2NGTRBM7Jn6CT4YBev5NU8ZEvfHVdk6WQc8VH",
  "key20": "5Rvf5tXuT2T42igsnAzjJatdiNmdyi5BgrWtDBCea5GBibP7KS9w5f43SZJar6gJfw1frZr7J8JytgQydzSxYTgB",
  "key21": "a7aGFJBVgx5cNiyn15HjwiQL4p4QfV8xNyxmYYJGfLGePFbu1ey8S5vp4WxYjwUMYNz55zViWSQQagdDFPdDd2G",
  "key22": "nQ5x2FHqHGNXYs8wAjbhzvHCPdkAjJRuHn772VAkYT3Vm1BBG42zgDQ5dfd8a6aCF6cQKD61wtWJ4hoAnrqSWR4",
  "key23": "fg4qfuqgBPu6KXPtingXSEY251zLxKgfhx4yMc5Gj4Vj7Xt5ZD5waoWGqN35h6kzbymEy8ZHnHkEVg8GKEmCsC6",
  "key24": "4pzUVRaYNf6CyHn7QjRCDnYuihrgfSEiUHrUyLd1cZZGyGnoNEDNo8BLTuCB7a29X3ofFonEkK72cGZk7WBnCds4",
  "key25": "61sqNtPefRcwcCtQCFro6qRZDMk38KQNDDD3397PyzHvnBBVVwaRH1C95voaEJqodiLdDvF3r9brJaWEtnJvY49g",
  "key26": "4DE9GqfBbSZiM6KtwfDrHp6qX9qRkNAp7EVmz9X1WWaWYBa541wUkXdpHRmTxR5sBKbVCdRZGs5frrCWynJYaibY",
  "key27": "CgALFrYKH8HnzL5qQLeG5zLnu1KL9kyt9m8YpkTBqhWJdQypFP6SwiajSU7TjokyY462AK6LVgDKuwDtxSihyq4",
  "key28": "3iNmc4ePaixQmTykV3TpHuQLp3sAEmCqZZHBVspDSzXtzNgzZvHyUYcnYyWdwvkstn2X551arLNh9ZyW1H9dPttn",
  "key29": "35f6dKZNG9AkXJuFj3Ysj5Vn8YD6g1KCuCkHKNGiLJu7TGxLxn4QhcutLKzqDyBUHAdovbbXqF6H3Lgyos6X35aA",
  "key30": "TWC2hvYsVCU33iDkpsxp5jqnEhnfUXX1f1T6gXu9VB3iJX8E8dhhR168EYnhz8LKrqbKvJf7i2k3LPbg6JbR8ro",
  "key31": "2d3u4vbmi6PGVg8ZyqG5CWCEvXRb8NMSV1ThRzqCnCK4VUnsNYAmgbtMiKarqQNs2eEk846UbrvhpSpSoym54p47",
  "key32": "2Y4XWFqQfDjZAy8A6sXEmZWR316GKCMzKGhkXCwyCMoLmvZdrAirxCAvV8UGZE5V4qM6JbJHBTRJW1yjueuNC323",
  "key33": "4RpAyHUwYr5dW6V327DA4yTbqBEy1qXk9tztNr1FJYizomQppsc5YQ7LwezFTFuGvEjQJs89iA6rFMjnfcDecnJ2",
  "key34": "4dV5TRQEoac3qf1aJ3nUsMm5hj77wM2P9gnhRoWXX9BiBeQd2GnBbf7NWGWErEs51nvceNi322RESGmkbCSNR8Rs",
  "key35": "31CQznc2miJeAoEfsBHdKEfsNe7C1yp6BN7w4uvA55HihdBhJSFCLaY5qejGwKyjVtnvGKMerg3ZXEiHedsyG2Ha",
  "key36": "e4paKuxxWCJFutZqmUq2e71dUuFYWw4rG18ribpi1XWqDpkN3aHxiuiPCkouF7nm8KpGZTTd3b4DHxEfGw6Nn68",
  "key37": "3s1ZaStajTGRE1rbJs1pxa3ybnSK19hMrNvcc62QkeqDowApBoau8GK42uWjZAZkkwB9FGJW6n8cLmTzesVXFgpK",
  "key38": "3WN3soJcWku92zcfAVq3JcEhsU7bgdWgzmADhG8t4KZAJhfLL3n4DQH4Xu4WobyGpboxE2ynMiqikDz84uio83B3",
  "key39": "2aQU9BHRCuKqhvZgoPh6Ft5yZcQcGoL1KdscYTpoxgMa6s46JuenXVjeNKmeLeuT88zfoA7nXLCMKggZTLPRudz6",
  "key40": "4ePGkcYwzQuGHiSnAyFpzabvnGyn6JX3cXNroWkKPVqS9FZ3VpqX1mLTBq49qBwgZzWeNhF9uFTYgeJHd4epNh89",
  "key41": "3Yh75zYBBh1J41M4ctXxk2ywCCQ1njZokuyrBdKmXnuN9k7p2FNqcxsK6Ghg2fTikuiTaayhtgsBTpvZKPz5QbfM",
  "key42": "4dDZpGEf5MDH657PHerzpovVGM8MfXUU98kaefotgMqhM5w3qJvQKmENbshXEpPyzvw5zugLTLbp3CaDsnMQnw85",
  "key43": "2rpDDUkfu2Tczq5HKzvvwMdqc41BUtQRvmN5W9kGhEemT8bWS1fNwMtdRDbKh1BUWz7qqTnGgvjW3oGhNzx85FHv"
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
