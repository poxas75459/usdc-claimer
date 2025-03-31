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
    "2Tn42mJZU6Syam5hrs1mR2CsywXDsUkHZySoSZnsyDLbB4oQWKvCZspW43VD1mJ6v9vdfuCwAi9tNB2eE9Sze2ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yW3p91RUv249qYRyEDKxFcT6buqM91GCVzCRanZe6SDyrTn7CLcVEwaapad5f6FgYwqxyB4DUfdbFq7KRWugkut",
  "key1": "4v9Re7a56AsSaF8CbyktCYGbj9EQEWZoJKLVWxrma5rEBNBE3F19aZ7sM8wALrjtVd9VKa9XHwdKmTgED9Vc6VJT",
  "key2": "2kTHfNr35NgjuVtKWmNSY7vxoPxReAhWTNM6mq5N1ZazScze8YRcEJCEERywaduMrJ8MaAyHvT4Kgeu5VA4efMKp",
  "key3": "24VSk7vHwnEfk8zA8V9rzPgZ6y3GPYPhu2JZWMuBX478J8Wo38XzNNk8rztzYWKG5BVpWE8jeYjv496djRSzkwGN",
  "key4": "41JDJXdpRoRL4ZwXSUsZ9oG1xGXGgzsouVS1AxownFG72uwvwow23tKgPpnJLHyWtCz8oYvfo7rXfHp8KiRGqd65",
  "key5": "HCKV9gazRKoPYoobuiXDDNfdGKGTYR7kHsQAQoNPpbF85hrTCGq5GCxTQTLG2YxnLT1MJZ3ojSrLc3qnMGcDnSS",
  "key6": "4wHzAMm4GGyUVkmK89i1obgsQoaiLEURvfjckVhZFB6uKPg6Sfqzd4Up35macTZpBkKbEpwkWi3EgcsVyUk5Xo6G",
  "key7": "2fRDTf2KRDMVW34wpXZfSSXXsSmBNFGnmF6YVY7mAKQo1AQ1BE2yd9jf2EgdaV6reiHVDJjjPqZB1eAnHZ9rqYhn",
  "key8": "22zwrbfgq3GKSAiSRHwVWpcbvEwXmAoKhAj7mS8LphrW56Rw8Ziq5cQtdbj7cHhQ9KxonYQYt9vVWge9dsC2o16q",
  "key9": "2KRw12xzS4Uq5VxdjaLPQiBgrhtpKj624PykrFiZ4um4P5Y9bSn7yHVcSundKn6N3veFBjvD6JZhGWXGG7jZmpPh",
  "key10": "HaJnfA2QBtekTpuA3Hso66ZmSDsCreFPGyDYuq6fWWaBViF2XrsEqaiKeojhSFetxGd9jH2vM7GnciVUKtdPADh",
  "key11": "3PmG7DamxRT6FFuYeq8aPkLpCSBrdqmnRvvWt9woe4P6gjGovgh7K9YWzop6vLXQA92SCuqMnZwQhBraeXjdyFBC",
  "key12": "4MazvrCPL6P75LbMYavbSHbCgNUnG6foFEQew2tDkXMjhVE2qoyxDTDXJQKPUXzPyL8fiwoDE1sMJUfYPGi7xDxH",
  "key13": "jUftLcHVkEg4RpLYoLj838rAKFjjRw2dB59J7YSFpTTJoxa99DxZKHFhoD6guRT1KK2bqQEnPEoNErfaEkF3PbE",
  "key14": "5dAkhYMjt6r2oxQsCMcrwi87rwYLJHETWST2VHHPnFnGGvEgQQwdKS5oJaNAUQNTehAgtEiesA2U7VC1f7DF8aFL",
  "key15": "uocL1eSAtA3ZxbPZqiTzS5hjdMkYZD5xZwbvvghPgESGPc1DEkRMtt2cGF1SvufxiZw7qF3iCzVTav2y8Hxfav5",
  "key16": "21HLP1WTvZKxtMNgwupsF7asXdqeTHuPyuL5AuqB1nwe2N9eBngKPaTf3cKd6pnsXCbnrKAw66XYY6Az92vBxmhh",
  "key17": "31npb7o6eC3J6bddjaPxmSDhnBGfoqNaQLYS8vebns8Pa8cxcY2afztZHxsFQ97LvsmcaCenHEDtCRdRjJ81Bkar",
  "key18": "5axXvCVo5Yz1JZvdBdTstzi9h1CFwdDAjjM9vFhVqpFUdozDnbJnsG8gmA2E7byJY7mqR5o7UBpCHTnakkHzDLWf",
  "key19": "2HwZG5FmHJB5TFVuUNP72iSBVVTRcWEdpzBCquJLu5WnkmWPSqY1sqqvN9dDxitCYbson8MF8oXwFSbTaSP1AUwm",
  "key20": "4eeTifAzmDxS2y1tBa9QPwcy9hqD8M6aHWPCKG9KnUBxMrRgZ5ymAZZLqGwVNm7vyF7WRDYgUQavsciZZomm3xd6",
  "key21": "2U33LzsS1i9BmTEmGzriXAcDzrVvsVqdCQdwc1CqKvT4HhMBEpZaYfwGX1XcaaVgdgYAiBuij1XMAzcveFciY4F9",
  "key22": "63TWrPqEqPiRu2qTk82tu5S3ZN6WGGpASZGjDSWB1TboXZv4ZrcLoYSckougT3H2kndDCNgiktLWFaLwvBCruUbL",
  "key23": "5tcyqNjsUt8BKdh4NBbSAx7eg3dg6T6jVhRe9M7HHfvFfxEA9hMUQY3pzh4Fn4e7Xh8DBPRTsWMj3tMA3J9pRXuA",
  "key24": "58zj6cDyDxgUrJXqCJL9Ma7xaUmy3qam7EgHwKfVEHsE3VYZiLLa9xxFZrYZbYSnK39rPf7Tg1vhjSwUJbSFc6Pk",
  "key25": "32iEe6MFc7XnEcqEfKXkazcjNWNhg9NmevGkSQddJgvZ3dzavuTXNNRf12Hqi74bTGLXkzx1PQYshEZAaRUwABNk",
  "key26": "5TLnr2XZPGoAvya7kkSRKFQ9Kf2poSN4QgWSvpGeiBrdGVHMFi4FcpVnVvVip68PdGXXd6DGas3QgU5pG68UrFHP",
  "key27": "2CDvFmZtLH42t4wbYQMHYQ7YjzVEQnh371AWSZWdW2ejnJi5sx6mfNR1jbfWsEhZY6fXS7ju99c1K5uDcmA5LE3s",
  "key28": "4Myqr5mLTLGNgnpn1RfzcfwMS3V2ZjToPxMgW9DB9PKgQGX9ujFCRpADRQtPak4hFCrnFJoV27ZyUcBpJtHAN1cN",
  "key29": "eutjmeguS68PHRYGxGuRQDmekBk8joVaN5zPwyhFmNfiyjSGuQiM5Q8JePoKPgUSxjhJWadXcFD4Vg2DmWxmKUG",
  "key30": "44bjcSCMbxn4EvkoCSc9XgjtBWUg2fGgQdS7gr5WsmFjPwGZntfj6GfaPM3EqT8weMeHZH6KV5CVkcTBDbH7ygoT",
  "key31": "3CUe2pVBoQKPRvfvWDHoJu1XGPjGrsoeEtMLBgNPMivc52VbU2WZXzUkAL3giSdJd29zjkRT7nV123LXRmChLQCQ",
  "key32": "2T3Sue2Y8zHwuWq9XuWwtXnMFH7T5f1buqBEaFguD336Q1fcUfJTcX6W2X5297TAukV1FviyAZxHrBGQE4xUV7kn",
  "key33": "47nSbAp1JsvbN5BE5RXHJsvDFgCMjwAPocH3NqQBLSR1w4LwbHZdp2LW4ksFAwe7zPL92ZScXgqdkQLXcRd9n4Ba",
  "key34": "NgMieLnRYgTQBkMd5Z1PCJaJhKEgxJ1iHGygNtTkX5YXbhrvsyThAvamCx2pk8TLVkX4h25seJ3jX6S1TwSs5Jv",
  "key35": "63bc4bqUTnVeGBVzpgWf3HfsxNkHFa7ge8LhvQ6YEnZzkpbhE9QSyFXhBWdMkNNYaMt23xP7gx4i8rXdo9P8ZbC1",
  "key36": "4MxDQysKbZCFq9z5467S2yL1ph37Z3MyVTTPMRNL66USdb28PiG8FMznsd6VHD59p42JSPrv7MwgrAQEBKrykL3A",
  "key37": "4vhAeqjpLN7JZ6ei9an4dnduWFmb2RgqAdJNbMegA8bfk5R7hhUb9ADFXf9qb1sprP9AuTrqvpfcSsRL93c9qyKD",
  "key38": "2Memo3hYWJ9VNe2uUdmKSxd5yt3eF1xUABAXLQxuZQyoMga4B1PvoTo6R37oJekeENRYHNMzjugUQSYPqfkx3pvY",
  "key39": "2CEc8FQ9LgbuNcvG25QFY1v9M8mDu3aGhyCFnCKad4fbFN5q7yZs9JVzb3bcuwmsLWwaKdrAdQiQGHU8ijcMSqjb"
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
