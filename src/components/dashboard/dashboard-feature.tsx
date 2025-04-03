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
    "2Rbo2MNjUSxEU28L9vZvM5o77icCLXFZQPD9KSYra1PZ3hdkMgEYeeZdGHJ6wFqvvQeTz4yvxZDzdYvFuc8Gj8Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yUsjMd7VfK9wNfvuvxUcgWB8yiqWhML7FfPGcPQxFFRYkQJ1JSmkejotFPGGJC4K6TWzgLUSmSHDvBdt3DNrWRL",
  "key1": "3PKqMYCX7ud1zhXX67yqPt38ZqYpPcw8DCfZ5CX2za1neLBFC6AbCb78tpXvNALGMofJnG4m328CkxkgiDk2gVzL",
  "key2": "3AvnVsBzZPkhL81AHVSpy6gNcQ9h9FJGZiUWza72Rye8SrSE2xHa7MVLbuUAGzPe6HVxnCtkXi1QfPqUKrHHc6tj",
  "key3": "vvU3SAdMaA61FAPZzhkRABp8uLg4JV3Fk9h9TdDft14RtfPYoZHUqPMNjZ7cuP46MHpHf28pTbWcqgyTyzNFdbf",
  "key4": "5pt9fSUmGEmawAX2VB1jGrRfLGcoQKNJzN8nmSF4ezjmjKj8xvfHqYhmioCHBo8R9VbQFfLPq15vWg4g3EZbjUsR",
  "key5": "2ohsidfc7pEYgNJ9MMM8vwpHWUgnTx3q37wJM99VsBKDXzcSgmitSqnWHDe1vYzozZXj6dPSui2PLkG2whXkYGxj",
  "key6": "vedaZzqp1e4EsQHUZ5rvkA6Kdn2xmZXJRZPvKNQbswhgXnxyH3WGff68pGHKZqEv1Sf2tdG9ZUJC6M8un2ADSSG",
  "key7": "3uQ1C2sKWFzZgmtbCvBWhzB14wfWKDHAruEeQy7UYgw1B7hkotmXczNh6ACTqxMN5Qw1qJ7PuRyJPjb3AC5VJPPF",
  "key8": "2R24DkeFQZ8mUUoqMJZJ8YSMXHF6BAoxqTdX8zrJUWUNoK5msUzPWawpyBZM6wuMg6ycPAMfs6xFRyJCv76jeT4W",
  "key9": "4XKRctJY5rs6SW2kGk8TFddGYrrAmHHWeYDjDFVYtHDcS3H1orLwuCoUAK67VZESAskzZ8RUrBkXEUAM86efi7Sx",
  "key10": "5zWPp3oAmQ5E4byLzytRr32AvqK2famyqnoX3brCxsEt1TCPKE6dc65USq6niPjPhnqDzdat6aqkWy9WBhj2gDnr",
  "key11": "499CYyzCZw7iz8xBomjmmPcg2a439wKoMB7xRdMbECkpqJcmQUZUu5Hu4hEbxk3k4kmzpcJcCidahHE2mJcijyCq",
  "key12": "5jsNWNNEEq6WuXPbyakjCSBzfhLP2s7tB6CgNvBwHXciUJafkVVMKQpNMd4CNVkS2qrjK7ua6meAU38YLdZW28nu",
  "key13": "P8KZtP7XAFeLfXXr6q7pEw9ofM4kMuD9cb7ZHcCFL3rxXmcmMUT9iZHg2v4x62RHN5c9Vy6H12pog5fFPZ47Vxi",
  "key14": "2BrWrUr2Pmaiwp9F9mrcJbA6QitVMeaTfakAdG7Pdzx7TEcbnS5hKTPPrugMLcBfzEwQhYPy9hGD6N5bHZB8uCPF",
  "key15": "z7mK5aJ88cwpnrgoAhx626JqxBq6aWGQv47EDiDBDoGSVdhNTXVe55tjhE5J2cs5SwT58wqhrR8gYJGXH6jdXmh",
  "key16": "33zv5EyrV5oKbLDvXF5yDcoQQA9t3QwJK7LGLREoxvdmCVsDqsiKJKfUpwExJwssLvYxKUq4tPGGKafoPEQ9i8pe",
  "key17": "9J1hbrYDA5LQ4E8ZuCG6jDQXirL141VGQxf7vvVy1f4kH6ngYr61R2cw9BwL8tXvi3k5Jged3FeLMB3tTcbKkpL",
  "key18": "3RFqedmR2zjfMVub5ueghyxYkyMmXyP8aJUSa69rH5ZyrcdBq2UR6WbZsGgtb6NH7MBTMz4G9wesN4T9wFHCb3xN",
  "key19": "48GKqEwLoZUsSQReFqbUgyzgwTF6nP93Q9MZQPNc8qfoebSEPCJvpgzDYnQQyzrxz2pfqpd5HxZJTiQo2N8MzSKA",
  "key20": "7EqbQE2KG1zMEB4eoPEP4yAjREL71FSuXBNZisS8bBexsuop6EW4KsMN1mNpgpK84i5eTr1ypMPtRGPZapkfFsG",
  "key21": "v1ZSzNdE9XYkTJ7tbiQcDSURAKhshVvSYu3cunvB5rivwzMmgNsfNc3EXHUcGNveWw2GZjRTNAWX6Kw2V6CFJkq",
  "key22": "YEPPdawd5nT9nZ6hCsRuAJhpdnvsQQh7thCWMCkYEAoANtYTrx6x4EkzHPgzmzL67owf1PnpHHE4wtzGJLo6LF6",
  "key23": "2Zy3vJnPGJd5ByGqWh2E4p93fgnZRdf2VB4YwpCKacmQ9AKof4ice8HnrgnMfXJvmW1YnDv35tdh1HUYQ8A76M1j",
  "key24": "2eiYWWuKi3DSTJYQbDtUB1vRCDcjMFqBGS4LH3SdPugYXSLkjQNBMa2aWEphiUqNREN2AgnNdPN7nRohPDRcR94x",
  "key25": "5wbgV7xePJccTuSVEKxDr9T1iaZQy1sN64Mu9KLhufcpH4rcGv21JCJo9f8Urr8FwFuxihZH5j2cSR55DE3TQYgJ",
  "key26": "4BuRKN3PbX9f5PeoN78CX1jYh81i5dLp3qT4gSgiMZqfexGKGZQEoNFQcuz8ohe6SU6rbEE7NMNzsoibb7g7uDGu",
  "key27": "31q9VQRQnCdZLQXnXHSAJm5iEm5MvhPncjabqnvJEVLKiBBvoe2YDFLX45ZkbCBpLMUqbvRfvBEvDNrMuHnRgTdM",
  "key28": "4hSnCGS3sArtGUNaWGamBFBPWFc83BDauvGQ11m4ZqP1dv9ZKjjDxcjsZFZoeVm92DRgu6U32HTxffMFySTFJJLF",
  "key29": "4K2CxzXR5M5PTVfdJUwbbZPFra5CYdfwhmsPF1DXcG4iMcHWWSjwxkeFCjvMRGk3fTw7aFophNaqDSA9PxXmP6fo",
  "key30": "5TntZ4uJyRDmK629tWsxiy2vDn6vRDJpmJQ9Z6ctMy8KrHjY3EaG6Z9E88RSSLjU5JpJVc7aA9DKHehNWA7FeKyq",
  "key31": "4NZeGwVaa1NiuoybBpt8A1FFqVC1PrHLmVrtV6PD7Uow8Ttaj7paajUjYG8Y5mCJznWgoya4RFarFUEws7fkSaGa",
  "key32": "3MAnvYZTEb5vq1zk1kvZhR8Qhi5TTftNAHrw3eektc8RJF2HFK32vhh84iyuchyJhXMsp41MkTE1hV9t73PigtrJ",
  "key33": "38jiES4Mz4UCyAg9YP14Ah29obpC21uxNH7QdqcE3j7fFr2J2HpNczoZRbGnhbYaYs8dTW5tHJHdr9xubtyrgEUP",
  "key34": "4vANkWFgJActtxWp8B5WFsPBdDqm74qsBXWD7kRbEPResL7ZD8qaSPG9JEafb65Cvmdf6A96sqhJobg18xiNsjWY",
  "key35": "45tknWxN5oRKDi9q3kem29uY32742NDW3JYWmof9WS2fo3HTBbmEZFgYzdm4ayHKkqhESyp5NnMHjrEwrWoyVmwi",
  "key36": "cEJqjeJKc9xqWWkD8sFoafCC29mSbY3SS9GPFL5fCfM6U1sM5gjAfdhG5SZvJ3Kifx22fC1UFni3WaAny5qf2CH",
  "key37": "EzEzYdjWqcwwezNTiuskTqHFff8irJRjuRt7jrMYseumVc1aFoRbu2MnpsWc3nhp41quXcKRfVq8fKYJn2c21H1",
  "key38": "2tMCZJwXHzpCzQWV1WSAhmfbW4KKn4BUdjWo3mC58EUr7G1BVyLAqoPhNkLqZaPQrXG54UheWjYLahDVwSfDTMic",
  "key39": "3G3BAf2pWyJfmi571hTxhzjGQscxcbzdMHwCLJGW73FYxo8t3HLtuBy3gypoSJm8xVudQudJpS3WRuWUBf8QGmCp",
  "key40": "65rJ5jmEV9cL6Z6hutQPA5vMDvqii9jZFRS8xghHtmnzF9n6sNJGXD8PcciYKiWZy3xQ9cGgNKjpDHN4Krfo6Jvx",
  "key41": "25HM2UFwMy8i6BBtZWZcsfEazRJXHPSSo9LVHiuKH5Aiv1Vrkfeoui5xxmzFLQF7ZWS1QJjTv6JHDUmWBLWVcuju"
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
