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
    "pMu8t1gUrRAz8pYFJ9isXe7jn9WScSrnKCv8vxK1hTj7N4pM9zZkcNSxMiAm2FMXidowVv1pk4PaE7qMVQN1rv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZtBXHDco77HoSiX48DdqPeYS6SSUYcHnbKAXqrwbFZok3cFUPWhVnmEiUK7NmLD7UsraR53s534pH8VxHUh1Sg",
  "key1": "64oTCd2gw2CnsAAuXuCtZFdqemUcgjgGCJVMUFz2cfbKX7YPo8UkgbYmrB2R7HX8JJJqS9oBna8m3tTbqBi7N4TW",
  "key2": "3ndEyE6ebb4j4XHGLFtbWcyjZvE3aTUX4oryWNVh24EmBK9vEiv9Nh1ooGVDwANCpmR6XXYpHeAXR84sGjVR9yuZ",
  "key3": "2fYNBneR9P8Lq3ybJSD8yoAvR3xeaJNz2SmJ7Tm1x6v6AFyySeXv7RCfHTjE5B62cp9T5CU3n8vSLXK2bPK5Ms3H",
  "key4": "4zdLzokXPY2umdFADdcabLLvm3Nbii8eryUQ9UxSVirRHY1kVeibbNWbmovB9dJRxSMmrnPWGUYmJS5Bzv4NqDsB",
  "key5": "51bkLDQCSEpmzfQEFrPLMTtb19944G6qG75K3Tb5s98Baeu4SbwjXAuYZVYNWagN9XrDhZDMnrqTgfbUwWKWf5xR",
  "key6": "zKYCJNvZ7uWLKFkzLnKMytP5FCod2YueGtx5QSXFagEyiYB5amaktGbmsjnradMQFtd4X1X8hLq9RXx1dDcRKqD",
  "key7": "38VeWfu8JPVdzuvzNddEFPdVFUUghzxityhLFpScTK1v6d283e5ei2tJaAwPiaNXaFrRKv3zGK9RuZKK3kFKwz11",
  "key8": "4gWfif3SFE725i9MmhxExNtKbkYmXvo4VQJRDHfDYfC5uUqDsFHdXKH5EHNP5rV91nW3emC6oEMBkaEzK5dPvrMc",
  "key9": "4x3nQgq9jVJefVY15n7VW2H3xk4BzLeDkRRRhnQJx5LbhAcSoV2DY7JeUWVUUeJtN5kqLuDzJVgRG6N9hpUruKkW",
  "key10": "3JsNgwTjQMXC6GxHVEF8ZDuzpsV8uQH7HdUw6zbqANhow3crtRAsdvJYZ146RQhxzsnphd1t8JWNqckdASkBysep",
  "key11": "29nwZwv6NGApz4mfN1vs3mC8yTQXcPGrZsheUGfpy1GyQnviukcBMQTbG6irmeozzvmRReC2NsCHkPBZY8YcdrVf",
  "key12": "53kV5v52ux9qQzYQrG8zEeMgvbQFVdEbueFGKUcvyJXdTA6nwQeB5VauLW9KVPFp5wYqhpXym8zanVeMWE9kNyWX",
  "key13": "333Drbw8bpv4TKFiTWvA64sWJgKRDaQ9BC9Gq3rPZsFr4HJSVRnH3LW5hWESn5k432rYsAMPJUiKA3ML9f2czw7V",
  "key14": "4BjpSd9awCmmXWqWwcr5NjbExM2iAP5zZ4foW2QBDmhRcsJR2Tbr8W1vtRvkm2HE6FjmJUa8LUaptr9UBuHLPgfi",
  "key15": "FqMRCfkP3tFH3EDHHRQGckzvLyzGnFop2CZEr4L45TrZz5h5rrTe3nbKvVZHmuVrC7W66saJ98YwuWc8dDgM6hC",
  "key16": "5sJ9CmCeE1K76NPt7aZ6d1yV5WoJheVmwa27nT2xENRF2BinVi6jBjoHMMeTzpoqDqtftgZNLoK6Z9YeykKXhMmo",
  "key17": "4yKuyPAdYPSLSVbSiW2bmf15Ay58UyMG3SxY3JKsLWSpXfSpjgrBuZxWmwzeyqgKXVQgJP2NBVtLA8UEZAnudFni",
  "key18": "4FFfP2fZKMym1zDJicLMJ4EtnhjBWJicvRxGi8s1yae3gusD66m2inszCxvgWkcbnrhtEi6creYThfp9iS1g8q6b",
  "key19": "3E143AJY8KN8yrG6cK9zX8A82Z9yAuLpzMtMwPst8XscnuTsFytTFtjF6oFRujrt5XHCiykyUaTQLqBuwbEJvrQX",
  "key20": "335r9boj4unaXmtvxuUCBeaRPZTUVyyc2VVEtEAQbwBRsgsJnKNJni7dXfnQpUUwsGVNa6qQ1z4pEN5dvbvPunbv",
  "key21": "2rk5oFP2duwnU5MtRk5Qhuzv4iqes5SB9kAbwmYQdJfGit1YBDxXwwMqvgnCGfNV1tBeUYQzRdpz9yjRoyVsbKYh",
  "key22": "2B9E6im5NJU29YsBELdrprubKdpimYu7LvTE69RWYrqnaM59tsnBubNTTo4fB3sifDm3cFQmgGxu2k9JbySPHBGQ",
  "key23": "4Gp8UAH39wXZBfRsW4JQX8yNr3P9ASoRGaFzf8ZY8xjJaURgmUUz71N5ajbs8PDQbYRS9RSQBvg4ynbJ6tT377QD",
  "key24": "1Hkmhfwi8wXksTsrfgaZwk2F69AP18hWjFVtVeTtyqbBTWVyACfwUPNndk5YuMEi26Ex2MaQcoNmPn3XSaGC1Uu",
  "key25": "5Q5hG4RGfRE2au4tsxLrrUL4m3pio6yaMqQS3Syrc2xr63zd4Fo3s4kxiM3Tpr6tfFsZsh9qNiaS9zGbd4Pjc61W",
  "key26": "3MXkWmWdChiqrSWrs1UZ6XnEY7LndmDLQSe5AcWu2MtTFMHyY5NyrbVPL1ZAMg7oTYaGwxUd3TmjrLjdYbRqR7c5",
  "key27": "52iX3gnvzrLnP4Py9J4ouododauTNdUdph7pz4rPDUXce3GW7hBbCBj192WxgQEbX1TnV4HHsQfWTE8ym38bCsrD",
  "key28": "5rm5YgLmS4DoZ27BQFD3UerJN5R4Szdrq5zeB3oLZcRRRX6jwcRTzXs5jDJi8MTSSsuXRmHbPkbvhdvTrdMH9L4j",
  "key29": "3ZcQAvnG2kG71rWKbdnNxVsEfUMsEUQgvXy3sB7jdYScgPFvUQBKKpZB3S6qFNpJrTwMgEzMTSoERtdVVCC5agtw",
  "key30": "2pMqMkV1FVvcK2Zs1pkGS3QwJ3oenkifCSfZ5XEP4A3ibW9Tb77ugiZn7rz3EKD4NtW3yGBtYXnVQzapGvaeA9pH",
  "key31": "27pbuMAEuBhQCriqkCRz8arrCiQLCdTH74VV8YxYe9xhxJKrodwheSzNYnH3AZPoxpTJdpWA48oAkEvRqKF14mUT",
  "key32": "3TgUgZf8qdQEsr2uCNow3YFGESkiNoQnuZTFA2r6F7oqjthYS38eW3YAgB1fe2KvwtXZ7iAnSMAMqSNvf3TF11j7",
  "key33": "38iUsaXR57anPsSFmNkSCEC53vhvwWDtwYXo5DNggcXzbWFZ1bisZXR1MirnkyUcEAz1pjdHtMhWWsFfui9Efa55",
  "key34": "2SkRW93Ky68jzYSo1zRxCcD6EjUjcUqxJVhezoWVEjA38nXVjTmUm5rsQfy3bXESMHRMZDFiqvFq6qvHziDZCz1t",
  "key35": "3r4JNf4MoTdZmMmDSVDWXEr8gFKU3TtXm7yd1Nmcny3iM1kW6uFCcxMFiemFW1xHdoFFGNRtoWMXQ4r4GyAqNqip",
  "key36": "3sUMJeb7MUEQWDEABJedop2Et4kx5BrpeeEWqwPTJh681hQYnQb6zvXekLh8fok5neyEYnUvkYEqjmY2rjEsjSau",
  "key37": "332nYi9WLeyZajiuaBJZJcWh1razqcWjqJFnyjfMgSoHAeVBu3WhTpfe2TNBLf3NqKZWqFTEtRMNBW2VtLZibA8Z",
  "key38": "49M6CC2VcsArr33doWid4GnzJmAGyJgsGDCRGg5UFXaD5Uum7n53ibVpzyY7U722rzuS79w8Zogi9SzLfFTgG5AD",
  "key39": "2JbE86Cka4osvpXiRfyywdV4irhCUPnA3MXLdJmV5L4awgxFyTFGPExtS91TF5jZSf5k8Y3snVm12dh5zoKCW8bf",
  "key40": "5upJWpzirfgs6vzKGyykop3YpVMiySGXv6nD27NdmdaZMTnFi9WYrxQ6N1FfV9F1sXgLLmwpx3XLu1GTLgYH6ohW",
  "key41": "2tMeb4eqf14Zy9S5a7mdEfpND9XpsKVxzZ3SQMBtJggxrNgLHeNHzuWSDun1JhpKH6sbTqBrzUSYGBeHgh3PGLiN",
  "key42": "4cUdeHzLxiQFPBsqLSJyuwsdytSpAtkbW3iXan6paGRVRgEcaRSxG5Qnecy2pfKLBNG82bGnJ6k8KaGmrCjL1iEu",
  "key43": "L5xsP7LLMUNufypACDfJckcRwsEyBLA7uBZga6SubTC3QpHWJZnqjMp56j1tuhtGPBKgyzeRKUZ8XVHq8KkPQ46",
  "key44": "EAoxg2i4Pktpp9MabGVTtidKm2W1pKSHEc2fzpmfbycfaTfK7VKiSMG6Gxvp1Qp4ChiP85mBeXrfYzThuXAensJ",
  "key45": "2ZmxAhxCQEejQHHobnPq2TU5fvsE3YhZFQ15hoT5csqa1xipwGKhGTozT32c8H6B55dMRe3R9PjKPheqGEHdRMz1",
  "key46": "2QPE4iUJZAm6YCpHmvzgGEaaTTDSnuGKBCpJhudKsrPDubTm2EvbxFqEi8hJfaepSz93u4zDP9DDRyAwtpgoAQDd",
  "key47": "27VQxbtwvCZsofkCyUiVrwwb73TuwDKDNXeWr5Pi7j2uyqVX4VB1CXb7dFQ3GTgVNybVrng9aM43fD9aJVoD1pqe"
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
