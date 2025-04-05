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
    "5yoLpnWtn9RqsE5HCfPoYyVjyuffqVwmWT8HxAWzTojPb3V9Y5kYUwyaujyGchWQG4oC62eWRqxopU5rRq13sAtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VrLPxstngu5NzCp8W3U1Jtad95AE23hMYYUovdqiyU4JRugXF7bsjCLNRVYAdLgYes7Qp9aeEdDSJTM9iDR8SgC",
  "key1": "5Mz99JaMHshd3izaxHSUMHooAxrqDAYr65e7atk1yyMYgPvfP6VR26BtpzdzZ71izoU6cqdtSyrnyhbyyW8oJUag",
  "key2": "3Rrs9K5DYLah3EBfJNbTe7xscHvw41iojL5L3dKw5HcSzAUpioTXpAoncwpuRNH5AEohnhsjRZWFEvk7uyRLr2p9",
  "key3": "4bBPQ7V4GumTCGQqbNS3fA3gUTGsZGb4prmPXk6CDzcKR1pRL9THS6EiEVd5G9PHi7cDKRvQXJ1Z7VGyFUpc3HZ2",
  "key4": "4cgnc7gfxnGLhB8zEPggFCj9bMZaF1d9YiUC9PLrGi7NnQ14EtX6gufVh1iQMzaVRaBHv8VNqEYEKZ3pcqaDFFrH",
  "key5": "3nADQr7C94Cdq686DQSEEVftVzJPJtDxE7HBNvvKmbWHx7uxXU3Mrnr18HNrNBwVfSo7M3hTBWkmCKQy8pVMBki7",
  "key6": "39N6qppN4gpmao58fz56mbXp2UsUJPcZNd3H5WMUxyDZkdJjxcpA4sAVtxx1aHvWXGLTMq8Kyq1xecotwtqWdVU6",
  "key7": "rR5AnrRYfs9fSFpW8zNGxN2rQffdmSQJRYFaR6g1CKcKLaZADwT1an6JrrXwCPobJ6ixrajY5u8qpCsbkg7tEUU",
  "key8": "4vxKG6CqdTrMTMjcjC3htPkzkW2WFdqaYzsTAtf6CB5u3TBrmmCSHTvVsgn3ShW6tcpuv6tJ2yAVTk2R8uUQUXre",
  "key9": "4YxTxZpvm93gkoczK58jMSiqbjvsmEMDcBMo8Xtby6xEz4Y19GQNcRBid8wVzd414y8uL1g5Hb3jFbNuqfignyzd",
  "key10": "2ueK3tjnZfrnGMBt8ZM7FbkLi3kcYk53EjpTnuxzAwMNvgLLMPBj6GxW2ryHEzNeKHq3DUPvRczeBH3GW61nzVeQ",
  "key11": "3QptDe3vuNA4bnEmTrGhdXu3Xrcrhgp2UszSJMhB5KM2fYYp5kei6b1PmNCNKL2ojaV52zjpFsxuuz2Yss2jAqnE",
  "key12": "32pDKia1a3uWk7JE5ebBJhjvittdEx8hAGPBoyY4RwTzVPKfwcu9Z5DCvEirEWEUbMa6cm1bYHpofP8ZGAMpowEC",
  "key13": "4pVZVTEHFYFMqPFYZoGyzmASNuYEdbMCh1e7vvLujc7EFm3JZvig1o2Tbi5PnKHwrqYQuTMJBBkSXnNQgFDU5ynZ",
  "key14": "W41jFrZbj2wKWNDhQQEwd6RL3i3nxDpUoh28Jh1EJCDYQLJbjuT3uBuWJcTGNUKDvrKshBYeJTe8Y19hrtQ7Co6",
  "key15": "vNSAsJcNZxd4oVt5wJz92d8hK7TdnMQi5YKyACzFvnwu94Ev7BrsMTuZuZbiWWdgJmqp58RQP8ovENr8PVUmuZv",
  "key16": "5MJKZgzTCjf3KnEiXWmdUVjcteCQcj8swubR7eCdJPJN7WzT9WBGzcUJXwXyDHSmaZVrn5FShPde248FycyiUWKX",
  "key17": "3E1RZaFMvppynaK9bFn3KvywDw9HUNbf9SHkaboQ8b1GpiygMEY3Z3mRAuiDWY6TgFjjT5T8J284qDCqaC9qD1aE",
  "key18": "2dbMjVAYGJ4zFwCVCYsiXBtiPNb5XizftV1F3eegCpNpJkQ9n7zSq9nfRRcnaAa1VfsGTY8kWnCBKearTKMEyoJo",
  "key19": "5812nLr63QWGMz2SAx4mW6M8v8m9p8veKhT3qoprrNybTXcYnEDwa4mkcbUT873CmYA1TTcLhRKCutJsSta86uAu",
  "key20": "2G5rNx8A8Xx5hh3MuZ9YzkqfzEEnRvwweSWFvdCapse83pASdiD1fjk9dfH3P3wjjtW2ziQKjAxZx1PSW97f6Kxo",
  "key21": "bW2VAfDg1ywURjz7vkFs1e32y36kBgn1sVH7S8WwhwxFqJDtVdLmzHYJkUfxCHECtKWUHqvwN3smbbJfNkgQUFt",
  "key22": "5ivpt9n5ZecRJaqb3u7NDFJapFY8e5krra4E5yB55RwRy9CuAcZXC7DhXn9U22XM6bHAeEKQaLwohV8JVrekpQnj",
  "key23": "4b3zT41Gr1WkmYhwXqqQvaNSkokZkGQ8N5yEoYz9JsMXS4tEUpeF44c6qnTPmjG5DBQWo8TnCdt2zjEajj7LUWoS",
  "key24": "4L5SQKbLD3sBNmLT6dy8HmLwJiTBAF3dayaH3CRtEQxvVqxvj4x4Lz3Y8rvdywgfqqzd3GEN4dGEncmqYHXnTi8b",
  "key25": "cmRYkeSHrcY8dyN9FsFchsu77HSmDFrU7WDPqfq9Ngv51jDRmASEz92kNrzxuuc4nqpcMCpYbZKaFQWJ16L41ze",
  "key26": "fpdjHMnwrJzmN5paRebnHMnCZ81Mu7y7ETMiwYB2kh8RRSSjwD4QMHURbS7u33obrMc5uPGq8QYKZgVMrz73jRd",
  "key27": "7N9yroDXdfGDt8qot8aFstX9X5zZLWEE6vpGcVg8JMPpx7zz9BrArFDasPqqj5g7FeMSV7TPaFtYoyjkNN85EKH",
  "key28": "3XUD44nWY15gRtuhGgzNfT78Vi6F2E9LxKJWvqfTR7F5XM53ZqzzVtaSuMD9AexD32NU8Yaz79oN5kyDicY1dCN2",
  "key29": "5mCUgR1G22334B7wXkR7fiHZW3MrraKxaX6jWFLQkxb7ZtkpXafHftCPAqq3KyffZJFP5vNba4LRS1NDEuSEQYY5",
  "key30": "4X34xCGrXpdVXyAJVfKdQvjLa6nQLY3CMHScpMA3GRan2TjhJEvuGEMUsGS6b8dUnpu1RCZKTyXj1qsR4V6FEpU3",
  "key31": "4URWzaKv4R9FVqe4ebquhjzvYcse41Ru2cp45FtWxYcw1nomdQ6YK2H1tpa7J9ak1ruNujmYAo2WSqyeetXrrnwK",
  "key32": "36Yf4rMB7ZSakqmCEEhGoe77qNNuyxbePxSrxYDzSYMPrwgMUZUaPfFYezChLT9qzKXBCDkV9MaFk7wjSVUywoeZ",
  "key33": "32ivQxz8x4axTMsUyKfWoGoqJV4LXtCGpd1NmPng9fcxEVFghpBp87qJxA6KkuAaEVBvYBzFhT4HPPpTgfW7BV4q",
  "key34": "5wGRiaC9T51aZ1sACEBCWpt2MZKmLi87KE3J7hBeT1dcu1kHveLkjannr9AaU1XyzQrMqUbWJ2krRD1B5zbWafr3",
  "key35": "3s18d8HT7anortkx9DKCfd7JanBwE35JXJM46v3VpHrAm1qkJjKxJY7cgBnGz4EXsAB5FGzyo4683exXkaqsxWWN",
  "key36": "4KL9Kz6vTYog38kZbjiftpJmX2dnn7KR6zAgP1UYnqN8hQNFJXuztNnDcWdE5NVCeJPmEuKzotbC13NNWvCC8cLA",
  "key37": "2UpDnfGxEhurADPD5zQW2tGse1kHWU4JJLWYQ7JJWWHDRkCBHAqnSWEEg89dHJMMss8ZTk4RaRqfQSEytfoAaKhz"
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
