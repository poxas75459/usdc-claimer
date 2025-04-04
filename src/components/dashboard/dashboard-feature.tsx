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
    "43wdeweLudTNKB8QoTw876cKdLNMuounJiQJNHbpDDb3Ce7Hu1qETRjCrrUUaGHXSKTQjVVdBjpYNzp8xhPRiaWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZW9Ap6g7vunyoHkz1amuxV8uxaEzBi5gJcKWChakMA9hHN8cedPFj8Zj53LbRz21HAfNyXFcaRd44r67G5mvHw",
  "key1": "62YWHWcUYWgePwjF2zKdD2rD7BeXjNq8YkJbtPcMUjmwgd4pWXK6iPPHLByXiUbeMqpLRp4SyvMemEfaWiknJoHZ",
  "key2": "5hkKU9G3QSDUa8Ha9kq49UZLbHxoRRvx9j5fSLsRhQ8sBDsPyx2qi77Sij5tkEK4ZzynSSon3RvPN7XvVLA4aymf",
  "key3": "5vjznr8rUT4yJE7XZ7oWzmQ5ZK82368oGP7Xq3cToU7efJyLeH63vVDigg1S5N4uWmgKKLxSQkq5svksq7imP53P",
  "key4": "7znt6Mkw9MsW1T7NSXDyfeYi1eDv3wbLYkYGr7h4WsTJHN7ba2qKaY3pCxfqCDXfXcQt3eq7mz1aRuMc8sgdv1e",
  "key5": "4t2vRJDKc4p5vZSBskVmvKjAyrpvSnaeV4HkUiur5avM7kNjHgHhYmx9tfSZVmKxT6HNtubUfGEYZ9rK6iocnMVr",
  "key6": "5RCt7hvdQBVfHAPLDfbsgpB5eBEZQPSKWsKQJqcq9Tno75DeberzFLmHFGcuysTdCSZyrVZSMLXsTPvL9362huhD",
  "key7": "4nEEBB7t48v2MigkoL19rF6FbNVNis8ymnCh38gQP11UY7RzMxa3qVyQ2VMD9sQwAphDuz6CfXf6rKJgNYd7spjx",
  "key8": "5uHmG5X5WKRbVCWaAMfemn1YXBFM3z3UEZwQQXS5DCEY7ojCH8ZTjhBLJGRDrRutznPrbKqgppTRicHzqfhZQ4dF",
  "key9": "2DqsBhfRZr8Hh54cLfjQzf7PHuY8Y4xY5oCxUCEkA4nHt7vDPHjVjYLYbTE4kzzegzPEyfVfxEL8racErEmtNaxt",
  "key10": "5zKkNZbMJ2cC8bMPGLLt2w45gniypJYwAYAKNowdvQEi7gn6FXdX5Bryt4HUSdvrjpj2Kcz3LKvfWeU25W4VDUHp",
  "key11": "vim3QEpczYny623Yem9iAwnywkqA2KMCoLpkgKkaDmBGHTPixUcSUrznxGs2ePzU2G36xEW3wMd2jT1oG7j1f2o",
  "key12": "5a3ZCPyKwt19FvRK4jaANz3pntorY39HsBKxDSFGJ7YWumEbJktFzTkDWp5QdANUW5gp73qyXodBme18PBJ6u8Br",
  "key13": "4cqmMT3v1SGBtwxe6dv6m444bYF53bwa8jK8hpBP7cQzbCYCzuK678q76C3kk13YufHKE3mGZdmnRpurUfpEBmUR",
  "key14": "5cHN7KkkCDYFjXr2LubsPWPvSqFXEUw3NRSLyyeErXEbqsgnyq6CGqqpGD9mrzF1UF91SPu6YZkbsrGx5JWSxnrn",
  "key15": "55qmeSpc2Cx99dX4jnQVaLcKd1btesETcVv12fD7hPyzeVh9HJdiMazL7xKPMc2LEFJwN4D5254Coo33Uy2GgAAX",
  "key16": "2mxSgFFFPksrYr24tazAKowCYynm7dmhgAkVuJynRWo19aouu3Gvr3nWjmisfDrxAB2fgZ3gsozE2i4Vh2GwNnwx",
  "key17": "4TbBFHczseqpZXaWvu7TbQYbybVVjzEW9wmtJE2iXdJrb9XPKqPFzujRgEqBNWR57fPcSAgdvb3ZzJ4hGxewqYn1",
  "key18": "h2fg9h8wd8dJeopjix4SHt1MCHjNrkrQxaffgigB9YBBe7FYhJWVac2H2a6wxBgcnQcSEPYp4kmM42En1BLoMHi",
  "key19": "4r2SYLrB5kro53FTWZDiyhoPNwetsmjGA2qUZw8hVcUVC5cLKLBFaUzEjWEqmqen7oRfyrD4vTscSX5QLfzJUFKp",
  "key20": "461aydiA8Bi9Gb25vPF2QgVj9QdZuvkZqoDmhL8Q3zmVAD2KPU5aaeUuj5SoZWtiqSDmBPgNDbZKVXEyhVJHBfFm",
  "key21": "43qYVHzXu4Gcx4ZcQ3smBRGbp932PajKFbrUXxKCQSHzzE8tmjSqQC5hwFD8cxMx6sfq8iVLX8TQn9kdWELjmCUw",
  "key22": "54faK5gnTRqtBWMvVpApLDX2ckhqnEJMQ1qhLmTNZfCjTw8dLHoAbdAMwCytLCXb5Cauc79Um9fnP4u8mzE3ofo5",
  "key23": "5366Nd9FqkRr7G8Mf4oiDUriVaNNfTFydAwCXbMhk5PruKzCLzPirb5kVBZ3yZTAfgatvFUny1zeZSn5g7uXZvmL",
  "key24": "5C1Ud5ydgwnN7jwYrU8kiEQPmXwjx3aJppvqDxSNXF4N2nAPnyus5xLn3Zmfn8MkFAKMhvVmjZ2Jm1AeS6EmwrKU",
  "key25": "3jNBGo28kpcyFddVrWhGzLp5WtsAywMPnGXqPuSfujLW1rU2naEZxD1UeYRWdCFyQWwLGnDmirWuSnNxvktt8JtU",
  "key26": "NQQ3yEf2vnB8GnDFLu2gWZgK3t4NJzxRSQQ4hLD5YzTvtUfZ1rGYPRciW2z5gTjGAWVDy5Qb2hSCiRPFawLa8Gs",
  "key27": "4xkXqrYk55arxUajKr2qq4cvYvg74Z84oPM6HCamSzRTsrGCZ63A9urMGbNWvJQxywNge35ir2jMHxscJsuuiSQY",
  "key28": "433AsrCXwAp8rWr4BBv4vF4H5JggcB61U2vUfNEMXTt1UNdYnBg68uXZhYz56u67uneTh7gdnK436PXXoeZXk9sf",
  "key29": "4YSDBw7x3WzhiXjZ1dj9pcByZWj4Q53u7grcvujskrCSA6XCsDPKFjvTeEuan3ndbtAo5HPWggnNNDxmzeyxqq7M",
  "key30": "3Gg9uSCMaQbDWuqfm6wQvzTN9HwHFK71DRPBdtYxctUEYm21ZpwwakugvpctRtjWiEU7x5DcDbBoBxNuH8ngRcCb",
  "key31": "n5vMkdNEbgqzm18VZ4BbjTKkjGBX9VUzfFdYAViqzkQqC1Eb8hm3FuC9oeeMDnwuGKFoDw41f5PcaHjY4qWmdGM",
  "key32": "GVAv7WSQ6uM28jJEEQwoRvtz3TinWKMsGv2YW21W2jmff1yZy5CyzTSoxkAC4fKfei6ceuJvxT8avcuGsUV6Jeu",
  "key33": "F9RUZdAp7PK3M7WnmkiTLoDxyemxHfSMp7AAMVCf2zgDyUSLmmEwC349Cx3SDr5Hyh1UwhicervtJjEGzBeff5a",
  "key34": "2zaCHvhp7epuPoa3wkbM3TxnS2gm9NnaM9ty46QuQeATLm4gHpXMBcwmbm6T9Cc979UqMYCHC8HNE3SpzwXwHrm5",
  "key35": "5rXwxv1QNM6oYheSCYi3aaT9WFyNWjaiRjeGQ3eZPV4ueENN3PqYehFEWnfeQWrqidSdRhDXr3P8HjZXqdcDeFW8",
  "key36": "59NQ1omt8kde1iG1H9dqaTTuMruQt3fsdfxDb8Cn4SXyLLM6ZVb5R9Tg5QbXWLP51WLuTnEPA3fvXFPcj3bBPU7R",
  "key37": "4djKK2cEY85EWwWMmyTCtWExR7K891DvqDLSBz8qpkmvLudWG2eDeYEMfM5JxtBQNPCL4KSxa3EMFwW1NgGXA7PZ",
  "key38": "3tnAaoc4KvvZ8hhsBXVa7ofN5XTi62hVB58FXDZKf8Nt5nYFLgYMKHfqgaSr9bw2GToq1gNkD7TXV7k5Gb5BNWrw",
  "key39": "2Uz5KL8wPgxSwVyuYQnDFyvHfy8hPnypjkikxjh9XGb13Y2v2KAvkqttW5TC5BYh4bDHhwVJbqJuW5GTfv53cm3L"
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
