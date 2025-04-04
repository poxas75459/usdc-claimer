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
    "2bjg53W9T1mqn5ck12GGEojzBXi5SyruPcEDLu2f1iPNX4HLdJDXQ3VJw5zxhZyhce9iJSkd7DtoXaircS3PaVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AQZVpBgsunCM7XcBJnxu3NcNyGoYXRN11Crvpa38nqdmZYxAC3ngyQsjnC7QEjwb6gqe4GRoRYaGX2bnrR6ttke",
  "key1": "3nYmCRo1R1hLEM1k8ojHd1d8JA2ix9Hi3cBwCDjR29RM5wAK1qUyfTwwzjea4jWUxiMsigJZWktfuxXYqQHg7qrA",
  "key2": "5pr2QWxWP9BidxCW2p4pJ7oYD3SF9cbL1DcEz971idWBQh5MTHJCQtC7fySLYkRTVKRmbvLr4TVaAjJFfyEcWKkS",
  "key3": "5fWEvSbhQURWkCGbjS6pbRafsBqvLUM8zzoWx5nSi5nuvDS26ZBEfv1FS1g7omdnsecguLGfgPybYpLLDGKutqqH",
  "key4": "ZY44LA4MihTEk3FWyszFUTwxKFM4ypSCwHdcuSxYLF4BQrNg52utZEosZNbPfYkgNQWsfkovuPqfMVKS1765jEX",
  "key5": "5stR9jJ6Mk1oEdbqUZchRAdC8tvcWmzy7EzGSCQeDGhoiK25rtzQCUunGN4hZJzP2Ue4NaKjqFN2qTBV4nsWWRN5",
  "key6": "5h7qreNhhjNpeZvwxZXj7joPfVKTL2P459BtRbUa45Tp6YtErwVPykudZuDFcSfW8HpDELGA2vDRqcRxB1ptL8gx",
  "key7": "2iixYyjQaqsMum3tRcdLNjzU2MqUCeDce5UQs7rNqV7Swt3PseQGdpeYwYXKqMHWdGHfRfX6nB5qZPsQENj29ia9",
  "key8": "417EqkkqZNjcEMP1Kq8t7SEuvWEGX9vt9Jj23Jhto8uMvkUCQFtVPeN4NvHT8eNu5vJQKBeDtH63QYU6ZA81wAzy",
  "key9": "3kfKt2ugRderJFVNSNgFXLz6FopZSF8eW6DQzek9TCsiHaBzNfCpFoWvEx6b8tFknhQDGMQNpNF9KRb4AnLw5W7p",
  "key10": "3XmJwGUwQ8pjoKni2cNgSnJTR72hSPGcr14JxJkikSMDgLHU8LHWXwf78qFbp7FHyxbnxak8jZiqrWYSwGEyFaCh",
  "key11": "36NDg5kzeLd2JPKenipV3QC3oEGR7FuvjSsjn1HECtTrokrGR8M3dnMbGvSqZQ2YNc6MWrrURnSqAQhqbFw8rWtr",
  "key12": "2Hoag64fNfx8xhgsEFNNggXzoncNsXh45jDFH9CBknB6wiKb5r6rH3smuy3cKddjQJP1ay7XzVoX5dJpk58R43PQ",
  "key13": "27xnEBcLisqANrZaWTC1zWcNPQ4dcW5yPFudx6KK1oY5tsPYi7ZnVuGFVGZcSSZ9VxPaWR8VJBwt4aFitBuyHQNY",
  "key14": "5imHnXawB88QpLwAvuw7oHfjDXhoqMe3jC3wuJ3wjSb7NBcEsFPFvoiqdW28YvT4xSXqrBvEttQPCHmEYqQRoj9p",
  "key15": "5CjLo6JHTsCffLKa5m1cLnzHTjemCwrv1qJFNaoVhtNQ3wXKRCoiC4DzPvGPhaUSmQ9G4VE2gawXJu8PFMtV5Fum",
  "key16": "WsZitszh6xYdCGzgbhth2hDoBdczjh7D1tzgqh4Tfh2PscxoRnmdAzuY96mmgCiR9SX7fna5ZfY1YMX4imQmxTz",
  "key17": "5qPF3A9tswJXLkFzWtSwiG4rJfKd337Nk4oanURBc6S9iE6gxYYwcHJXbCWErC9tTHu4fWxkrs4rjUuLNS3Jwfjn",
  "key18": "RG2bCXFoZyLjF3MReWd6BrCifZjXgcqbU2HyQF3brwin4k9TKjnGvgna6ZY8awZDQGgM6WyQCwYqHMkdty51yty",
  "key19": "6JcngJBCFgwxuaHLNF6nkEJTuaVaScSVLo2MZtudn4R3ECy5n4iFypDXo9i6Pk2PmM8My8NGACCwdmRqBZHT5X1",
  "key20": "2PeDqVeURsyfbdd1WSbP6NQPz3tAeiucXRfwUmTuvcTbLuvttpJJ7fZVog3pdjQ12HZBt61XwqdjgsyNkHc5S85N",
  "key21": "GucKUJf7STKwHyYywAb81t757i3KXkuKs9zsjkSdtRUy8YnQ4vFsBy1BBwRwkEKVKd94Ct7GGcN8xhus8rhwkGN",
  "key22": "oq3pCupAPYDCp9JWXF4sLU6Uim7SjfYviAiQPd31CYtbs8gHtbk6tXaGEHdhT5gPEX5wv17H8dvjP6JjYS9yzQQ",
  "key23": "4pxY7hTYLMCN6HMysCSVHizKHvJNTCiooK7Ug5oFC7Z2m2R31VDX3bAEVBADfjJZpqqtMQ3t2uNn7CrG1Yx5W3N5",
  "key24": "22K2Qvp9uLfQQ4camfHXhsBmjYHfqAK2KFq4wshLiZUfUrVxtHdXYud29T16NzTaKSFyKDXB9QM6B6hDHcruchnX",
  "key25": "5WSZrobkJfRqHmSaU4MFRWAVafe1A1MfE6Eek4Tvfpf1nndHUf5iRoWzDYpXsN821fSnPFvBeM5Q89xH8mrmSsV2",
  "key26": "2wN5zHJn1WAQKmjDZX5gDX8KEWgr6226GtE9dbWH9RUUh8pgRmsqMQ5JNGnReegp9xaYoyCviiUw8r7zsNPB6p5",
  "key27": "2HpfoAdwhywtDp7h1VUWj2Kuri6MABasZqXLnr61UUSaZe9ATZsnj29Fn2JWLxf4mQDwrM7dP86YeyUozHmhdzDw",
  "key28": "4dMGMotEhYCZxPN1SQXqAVxYoN5NkQ2qm7gTCdj3MAFbEgQwWC35TrNaf41BjshP3rVkfWNDUPX3S9sbkoWHuoF8",
  "key29": "4XpQwKPbySj2cXz6DPdhMSxf8CX9zKh6rj67VpBtxuRJAqiNbs4K5QQpa4v76RhDSYHzbipjJkqenyFLeXDc2zVV",
  "key30": "4qPMZnNqY5SS2c2sCNfQHXM2wq5y86GRucRDkH2i6tkuX5Y79Fg6qEtGPeTYkSjHsHuJfFLugbTVtcm3yak3qJPC",
  "key31": "5YKguj48bNFkKyHDoSK1v5NUKqihVTy3Q5GnjcH8AaMAByNF6MSntLKRyNwciU6ZieyFL3nLfJL69tANV2aKtN2p",
  "key32": "4hGQbzbiUjeggsQ8dZWCiNTxGosxbbJSgW1dzrdLMcsmqUDSH8NpUf53NMSY38D1F8ichXKKyPyQ1RdZsfu3xM5D",
  "key33": "2cXCQBF7VKz4DUhU63LhjNdP6hCkaaftw321f1w1Cs7nYsHqxxPKoLXM9qd8TsUDE2ckjtvCw6skmgZZpyQ7zXkh",
  "key34": "7VZRJkiykAh6SnoQFCqhyuWgZtVNEgkNp9aHvRmdGUo15PkA6s2g93DsZhwEtboSD792dwesdaKJVdEX2tTZ1qB",
  "key35": "2H4rNBy8JRZAitSwcsLosrT5vnakp7FYhkjhihxGa9MaNFs17BtyGWp88xJjA1Ne8iw7AcySuTXqeWUzTSgvqqKf",
  "key36": "8e9dayKimtLA7pa7fyfftakbryrF8aoyENGu5moWMMeB2D2cNLs9ZXxB6JmgtNtfTqqvLvGiab9X3JLYNE3aH5p",
  "key37": "2skbryAmE9u8nqD1eVoadNQ4nwNQFoJoFqmveWUtiCW74VpgjTdjn17voPn5tLEDabFHSzAqzn4zphkeySPvR1AX",
  "key38": "4nBM2ZZtXqeKV3PaJq3T2Fg1xJ7niRWp53NYoJ9aP9QoSZwePEsXgoAexBR5Gqi2Sd6ywD26tr4cwgBNQrC5X3ox",
  "key39": "3SsbCjDhFj1ukM8tNpfUkbp7dvqAdhkLTpCPRMYKrcbtUG6Cztwab6X5P8auZTJiA263BVUmVJyArWpdkXPzRgSj",
  "key40": "4SxirFh18Z2ERGEL2tcJcnaNYsBRA1zYy8VZTehrfHjWUSCnCa91vQuWzEpDHWLhEpFsVfnR7DMJcsucunPi8nEV",
  "key41": "25KXMriwuQHTEvQQMxbvZoopb3GBaLQSXnrmra7E33WtuxF6RdME3R2sSYnyhS9oKRpY9n4RdQyT8VVAdEjVKEdv",
  "key42": "vFmvMjZu4Nu65qJkknELoCWxrhzQ7sjA72ZVabxnBwBqbsf7HymvCyhqR6SqruhtCvJYYpXrHz6sJZmjW2seZqE"
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
