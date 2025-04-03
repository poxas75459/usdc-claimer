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
    "SFGJmvmmKxE6ZeW9okxqaTHHKBkZypzahUu2Pm2xU93Se6PpZvqFBsTSFGH45WvobeSCgH3FPtNTQCMjJg1uYnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXfA5sU4nS4GxQ8mpZNtVX89tsU7fGoNkY4WyHrv71VKmA7EJVvpAuugjKoCxXDqFQYQRGB85ZHjiDpyjaWtP6K",
  "key1": "4Z5UgGhsskJwGceM6ack5zBCF7dP4ChSKRqC1Ncg64pdhU8H7n7u5fz8TNynX4aQ9gr7iujdW3ukbHSyAjqdk4Zf",
  "key2": "2fJzqrEhyNQPdWvo9VtnKjPQ8x6tz5265qLHw7DeHCg76SJzuBN5mSDLwftStmUNu9MFBcYeqpyW97vzCLR3FZy1",
  "key3": "2N9pBHGTFDMxKKksUyy974N2KcW4SSJpMLSLyJ9KzmhWVFLGUusSBjZBNd9Mo8E7haK27mS3YXx8vPCWEfFNyxPz",
  "key4": "2sc8f9M7cpshZUNQXJBCpLarKyEvDBhtM2sfHp8aoRNswknowroKkpeghYP4rctMGLZsPm42XaNjnzAkoGMU5UGd",
  "key5": "4isb7WhXPADsPVHz19UdynzXovt3VTkZEwzTfZUMTg4bdzidhdHqNTFEr7EkfXe1Q9oTxo9i4M8yvp9YaWhGLiwv",
  "key6": "5i9oqtkv2Bd4JMCTjJVAeF5Pq8nu7Zn3Yrmq9za4NqRP4Dwboj4jdmNX9a8kdmn5Y5LtPNbw4gU3ndS27yj8xEvL",
  "key7": "4oqUTJVh6u7oGuBr5hrRXFcNAP2pgqeYvdBqbj7nEy2oApSpFyZgGeQMBNPQw1CvSfWM9d5xovY2wpdNhkTZPiDe",
  "key8": "q3bW1PDT36jxFh2dgsSymuouQdi3w9stUQPReeKeBEdVZZgwMSppUtaifYpUmjmXD3supDJyAH6ua83MBpUJm2f",
  "key9": "3wJPCAqYh5kVbuxSD9UivpYksKqBmBPjRCgy44sfDZvJqiLZYGo66G1V9pxcNvTJ57VDQ2P6feiXwyMXdq7S1JTa",
  "key10": "VjWdozxu85x7mNGTHvHuT2NQQVz1D1h8tsEeFuGGtrf6FoUjvGcaAh2ahmqEp1mKY2PbKuMpJUAm5CqKZBjLs1L",
  "key11": "2VGNCjXFK5fBKkv9kpRWds3skRfqLoAWqLnnLgP2HFP2c19WzXyVQVR8mVPHoiWPihyoxSdwQa9g71xMETBpPrjQ",
  "key12": "3NC4tUCZxHJmGcAMv6Tz2pfo2akyXkkMbDpZysMERsEuk1zKuTbynnDtmmSUpYzSKRBAwUMa2EYaq2xJE3tgGbF4",
  "key13": "4WAqu3xXgLZUxNJcn2Bm93uMh7UBC6BY7aVttTgjyGinkbEC4ztqvoN7qHzbstXYc5Pxn6bCrTENzuKZrio4GX1L",
  "key14": "4ef6wFCZDWPD8hh27QDVAJ1fTfyXjt69M77h18ogwo7QkbyiNVtkQPZ95UjWXGXbCKRwGcU6JMvB8UGKGFzE1PJX",
  "key15": "3E825uYsJMCWvEfHHu2hbtCsa5XtfDby98K8om6Bj3PtCpcWcyc4JpybVwpU9RLiSsCsEf7PCgHp6eXN9bXWXCwi",
  "key16": "33C1JbBvCVz8cZg3kz3TYoBpjZXbntf4KHaRxSiv4oiH3ykh42mQx11vdnyuUW6oMrKsmEKTQeahTckVWAt8jwft",
  "key17": "63Uj8PqjKQrQE36dtirGpQTAs4BFy8Bojc5Sjpr9GWLWjftE9GA1imCEXJXMvTD5eyirkTd1ghjdhxuqFAo1AEzc",
  "key18": "4R2Buqg2eaxaD23V4CoWApqSwivympzeUzyBVcUb58kcwn4ywucbFVGLW5dPa4SCjGLjABWhN2cSjytvRoAoqHnF",
  "key19": "3RCxwhY4MpZFXi88UUDH1ThjC9a5VFHcjZdSqrupCyvNfH3AyYhfATLQkwNYhaxB8CoF1VnSrTkvP58EmEQhoxVE",
  "key20": "393TNaWcGGVmapRBxjRcoYMUysEE4Rb5Auet3aQ4v1uyisQs5CnpgUm7Z5hQdSj5C1sWEpU2oJu6EWHt9R88ddxF",
  "key21": "NdtmX5Dyf826ArjdqyipgTpWpGb6msK9dF6c6WanBWozqxvumMee2KHFSnRrqvjyrBcqewZAqRtz2mGc6DD16BC",
  "key22": "2Pm535JnAXD5db9SRVCGfCcWrr4McN9nnq8tK8xxsEDp7n5uAXEGKH278zBxzbCTuQ2ruuqbFWh8xmd4mJNjc4AW",
  "key23": "3DZdPYjjckXZnqYXfPHepGsB3ipQhXBmho5vNmwp94QCDrPCqYTt1uruxJttRb4JKrRXAVsqZ7FsCvpA9pL5oPNp",
  "key24": "42KqBJiMW2TijvoVq1wCXVyyg9WQy3SLWDpKayg1chiuta6htcqvFqN7uRtm9ECmyDaikhNVgTZVQW6Ro6p3728w",
  "key25": "4tqa4Vt4P1PjWFfQY92Bst7CGNxsrMucfeCinqPhptcx6DeEfwnL3GjRzzcTJkurdBydgpJPXTQ9wXeiL7icAb84",
  "key26": "2nk4MbNXFGnKZM2JcX4ZKWzyrneGmhSPzccS5uzPV8R1xnYtFqqwzQczHmhxBuhbRPsN7UCBBbibHqKpRvyFDrKW",
  "key27": "61fpNjRBEcVj9TNaJn6KQY7haaMW9vvjHWhoVgCiAADhwTqbzsdi5CF4xxHPeujNjzZLyqWj7CAqHzekS2sjEgxd",
  "key28": "4HzCxF38iaKTdN1KQ6mZsjW2J1BV5BKo38ufypB7BWY1hWB2GiDc6PwLcnYfzE3vesTAftBV9PPi8x8ykfEji8is",
  "key29": "4hLEyBSbCquyBAJxfaKHmdVFa5eR74tEMwX4M3DeXZjzR2J3MNeJfw4kWQFptAV3oGLvZ4vHqHjxLwitW8CUeMcD",
  "key30": "5UxgZnN7NxiyCFSrJgQpzpvVK281SgbJprAbN6FLPphfmJitpK238YGtsLCC5J861TxLYpEZNjToRxZeXgQW5YU",
  "key31": "4zm6JPfNgo9TxaCfwktbqdefLGmyGKaEATxfgQXp2qpzazWpcw13K7mnecpJh5MsnFYz31PkVnKgCYHFA3zb7AVy",
  "key32": "2WiL6BcvCz1DqDBVhNZ5CDiGeMsBBzQEY3Yu7A4pgnJZDpxQDTFuKxZcKzRNj8mfqsus1uhGEZ85rvoZEaRGKFxY",
  "key33": "3rS5FUwqfuh1skQL4Dyt3v7RpFfBMag5gEYW1yfeumSLxcwxdPnFRBrAqGYdBQwcuDWnqhPdGijrVFSW47mngN5Q",
  "key34": "5u5FhqAZbu4LourrcX66fXDpGSqPgZG4GdgEVf6wbT2oStxvGScSyEjuobNHDYdJozDJ8SSNkErsVwNsupQxxprW",
  "key35": "2nwABtFPbUU2QzRGxU2tvxFg1xMQamFf5qvqRMazVYtLssgbdwURkEAV38oBF9DJca3z3eEB6UZ4QnsFrJhbHuZN",
  "key36": "5qZf3ZpUnQvBy2Q21xnziWQAQuTTyWKyuyKBgkFFU6n6H68YRv6oanqeNokKoJi5MKNqrNbtqqDDpFkg9VuqgFM7",
  "key37": "29fF8kPZQJW9WYvdaozCJjryT1jaxBF4MAA8C718GwBAkp65GpsXmt8wdoB8QLYJN1Y8qzcPtt2wZLBqvkMfF3HL",
  "key38": "5YzPDhgpwYSCMzrMusxXRAk6n5pZFh4iBr5dPouhosyyWUj9UazYBTMG1hYVcWRRNMXQhnEaoMYu57z5RHqBaejV",
  "key39": "9DZx1W86ZKFoC8KEsTK7Mti6fDFRVcHtvASdEvgxgnQ8NsoxTmkkt4ABQatdUPisUcdzFkiR9QRabmNxe5pQ22A",
  "key40": "52Y8WZVRSWA1z4LZtmuWCiGa2HUJs2khD7W2yiyYN5GDC8ASRNRei6PEGQTjhGLdN56kzGrBk6eAwrFA56d3p5s1",
  "key41": "52246AyL8wiciCEXDDJFoQ6Kj9231qQ59xX77SzunvBoCfubZyJ1rZgJQxZ2bvzzKPLErgr3QXAJQKxDDyCogwWz",
  "key42": "5nMQscb435M1QZm2cCfSZxzKVYRtabS3NaeaWSkn86UTqDeNGzT4gABFj3tcPpB3BjaMbn1MNk2fFSodTvhgFtYp",
  "key43": "5GXsjkic2h7jZMwMDeGUS3RAuH4SuxEGwRkBubC7fY7cfmu1ft69gJpwVcUd5hEGe1bbU9tS5KV7EcWbeK9UYiWw",
  "key44": "4qfbRjb6F5aF9YA2AqsCHqJgxhsDs93G1GPSDmhVHWY9RAgcaDieEq1Vzgm9G8P7eQ3o1uvEaXMPK1shFGPw6L5Q"
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
