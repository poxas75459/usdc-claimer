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
    "33N8N9qoaKSeE169ngePLe1HffkTaGA1jD7fppyYkPducEDAqhYEWGKUoeu3L9ZNuRR8BSPGjpLxd6hZUcRmNkuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TX9inrA9X6wxzxELRHSKkQ7ambqzw6QD2WYHDgRaskmSwyfW9iJn8hmXt3EcSwo3YbNW3w4ZTpJQMRn4UPHbvf",
  "key1": "3VzWuasZmNiS9RXmn8mHwacmZJLrwrF2JNTYs2DumonDvYBKCt9ZCv7BuThUSmRxhKVA7SaWUuSmXy7Vbzooqvm8",
  "key2": "4F2qPmKpSTa3ftDafynyuyzCgWjqxHRVEfHpZBRYUYpwMX37WxqwausEuSz8GRBkfZ8k2zDhV5KHGkyfnDq8pVQy",
  "key3": "2cUAGviNSxf3M5T73SBf6fgrnq6b2hXcDUxhFg2JCQDsLUuPjmz4VcL1CMiF4vcVU6tYDjbMjCurRXw5LsivqTfN",
  "key4": "3t8eub1ChwT28DuYes4bXki5uPSdfKXdtvryNVVLpu9mKfCoNV5xHR7xjiWivWMqVFFJTNZpVujdqAfDZcD72GPF",
  "key5": "3BsDydpji3BwRorUnX9f6CTQiMF2n4CPW8eu5x96ptFzj1K2ktzpWCS9PQCzE62jxj6m8aFvbGUZTCvWPLzCbPS9",
  "key6": "5MQ7ap4fuMdwkvcAbCLSgYGi3ALRnqJoGFYob3hThRKQ2dDLRT7HRQD2XS5wGy3Q2SsQHTMJ899kRkntf7ELFWQ1",
  "key7": "3a1xZ1Ttnt8G2wEj9jGwK26SSiTZTFMAsCYPrRZjL8zsUxNd7TKcf5Hgn8KFFAGq7yxpYKR866rVgB3TMxWEhXEX",
  "key8": "C5LcYbyDoBodsm4Nr5Fws1AMBFfCn8AZmDVp7NJTgbdq15r1ANmNguzj67s2TQVW9HqcYEnNSM3XMz8oYPRCbW4",
  "key9": "3CnxDwgS4b1H5qC4G8fR8x75d55VzRvPMe8EsB6pcw1mnWErRSptHyc9D89B4hHi7WrtnDx6VwgwEHNqgPhUPNbG",
  "key10": "3BfrxM3meNBEntrZFkLYgSZZy29VWPcVLTBvoyCxE2Tw8JY2JY2ugmENzgGjvVtDm5JmNsyK5aQVHyfWe6Nhb5Fc",
  "key11": "3ZjDYv6VrYjoX1JusBojmSEvHtve3siK5EhA21LCwH5gVt9pez7NXwCF6mXKa3LVmiYYbJGg5v6vuy1Gte47rXP6",
  "key12": "KfBAFeH31NyZdaQL8sFad5wKJdK7qu8ozEYLYJ6V8soN9vGKZHAchHDSndV7vGbrgcM3SzXBCE4bzuDzKrvE9QQ",
  "key13": "2Q4ss7etrPDin5NNkgUmWGBnUNTGmjYF8cUaLJS8oiuZ58u2TDr8vxM6LsBYb7Prpi66sNMbmdP25BHcAzuNfhnt",
  "key14": "4im85waC85YVVSb7PoR1CJ2e8xwMGxgMboycpGrhUeufQRcVz7tnvDnaM6n9S8iXJrfF4oHdviJ2FvnS2mLUwLY5",
  "key15": "4TyVCLhpaSbvjmSKewrNdVjwuXatgin4D1eBAyDvgyMUgmXTkftUz2WvyiaKjbQCJVD7r9YifrL84gBpPxPQZ5Y4",
  "key16": "3dPGew5RgoMqU8AV59BQzzJHVpeeNAZsmkwjtgzoq3fLZhCdbSJ46kXS4MKifeMru7eRVviz1XXKLLQoNi1BT7tp",
  "key17": "23H1zP4htiLQJTPM9SessyGVwxPKM9LegrxNcekk5eU8RS6AmYy6WJNDQ4Qbe1kLugsz3Phw5y6wFWVKo3qyuG5e",
  "key18": "5pNk69zkUvstM9nksbuX1zfjCVsC2mfADwavqpZyXftkfLFeyx3rvMYZVb1yvoh258iGfutTNYDjDRmeNenJ2VCZ",
  "key19": "3qQEx8GNXep363XPHso3DRUmGCtc7AQ7RJFY5q4KxpEQFbzrzgRqYTEB5ZvWGe9swJ9KSZuJuFvBXv1HiZPaAxjH",
  "key20": "aEk6SkUdu7gnKxvHy1GySfzyCr7mmpxYDR8pDNLdGHdkybSaDGk3882u2F2drhMPgZfAz2xV2k5kwsycT4iy74s",
  "key21": "5zKnSWmTJa67miV5s9hJWxJMAvA5EzZvDq6Q9AAvqgSj713bkgLn35i8otuH6QZYazWBfYZXHPr4cGts3tiN6E3k",
  "key22": "bHhpzK9h23QDiiPYX5bm8eRcyADW5JpMDJUVtniP4t81MtZUCxQAq6aoXjCzSMPM4BY9Z8dxpx3UBFqXcf5SZPL",
  "key23": "4BApLQsPCrLvyzQNHUG6PqCognSxpneHRxLETQBE4E14QPi4aAQ47i3Xq2qMu9sm6EbCJVHXPFovq1rCQt3A8MZt",
  "key24": "3LrRKqh824xgzu8REraWW8D2WzNv2aCd3uNNMwwmjgXo6YrxsAt3z3NTYo7rHQhbdJGYXwpbDFQisQzbEaGY6cgf",
  "key25": "34krc9wkebSyjx67KQSfQ1SxVnXbh8Ls8P2vwxXoNqzcFHAEaaLQU8RX9HsFUVxF4Mmi5eFaxNfSgqRy6ZJbAprH",
  "key26": "3bGWq3ytzgBr8uAVji2qtqnn3Gz8Fneo452ts4QG885mP78bbmUAxB5BbhKF53NM2ewbnrfSupVxqY1xUiqHcZXd",
  "key27": "49cwj3n5Tg1AWBYd9wgsBnNUasLnfMpYsxDfYtQrtKMHhkuERgnnxZgEaSosFwz6opFuvE7HaNC24PvKJUG6g9Nr",
  "key28": "SiDz9j3qbFEarSPRxLbisRz8ovLJXbTXDCWq7KWVLjZiZ9ahrQa3j79vDBTy58Ndqmhi9btSTFmuVofqniZdonj",
  "key29": "5caUYLG5pNp8jnGj9q3Bm17QPKHVR3ibZHzyX1dNm4LZsLN5W3a5dMhzwbFGd5ECECbvdoFLppsR9HBtNpNQW4Z8",
  "key30": "3o1sm4wPoRhgqqeXwRBp9HBgmEEtuVGKfkSeRSUJGAdVT3UsSwuez2TWYZk6R5ySmX97vAtwTgcN4wgmwck9zQ9a",
  "key31": "2XLMJDW71pgT3CoJFE5iFZp1ThK7jQnpbEDc3vDWNrfhSWAe3NKAdaAeuC1kj63jzEpNifqHTScjK6UxefwzdC3",
  "key32": "4vme7Wjq39CqvdYZhLgtweZZzhBzTozo49FLGTKop3DENxq9UMXNmRgagwpSb5GFcTqzTBrQdcU5Wps2gsuE5KWr",
  "key33": "5XgJdUnKACvwLJYFKqaLsQCjEvKaxgUqnV3Jvw96y66crXibpAKhwvbd5rABFJQoBAxWe8GQHF3hQCfTPqQqAKDj",
  "key34": "oFW8efX6dqtwUh4RTpsJbKbK3LPXQMQVCqqQ8RWYybrtnz3xtyLt2TxWK1w1k4mwHmg7qm8RWAe67qh367bqoqT",
  "key35": "66YqSD5EffCo4FS1Cj76xYqcrknJar9JGMhXPsF7gCVqSSm5H9i6nzRSgRjQLqzsbQUQtyeyPSHqXbmqXHCDH75d",
  "key36": "3sRpVRaaHRhv2mWhoUsn8yp9jTE9PCAsbyQX55osWtJVfobQ2MbqxJQ9crZhHV46p1sn6sJ9vQ4kjBy7BuNMVsHL",
  "key37": "2Q1RDZsT8pKAZcz48cZ8tyTNYVpETYepcawRVF64ihtDnsSxe3CU9JEKVaVPrEMvpn6y54cRZNoN25uptFf57ANi"
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
