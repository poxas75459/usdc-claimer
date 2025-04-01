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
    "4NTG1WwoCo14rFu2jtMwYX2PsFn1MGHrMsMdiEfEXinZv26kBKR5wJsuM8eJKDeotzfFz1WTT39DBXBLzyHvUGVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYjkDRns38cDhgZEcCUcJtYfDNuzhrX9WzuJ4Tei6DxwjGGZFqJgjawd4CMwJ9QzSLg2AKqNNo55M1QCPS8fhr3",
  "key1": "5hGm1yDMXgKwNKhZa47ATtr3B3MSe7Zps6PSWNEuLVSAQ9HnTax7ARRGTLdPGqU6Yj936nh5AQ2CGuMYHgiYKa3L",
  "key2": "4aafy5ByNX4vaD1YiF9SqDU94KAsufvbvMnkB7DSBmfapVUc8DJSh6KHU6QdZaFUz5cdTNCjNy4MwNevMhAt81oh",
  "key3": "4ygC6SSRQXUUsv2L1S7RwqRbaJBKd8grqSWwiQGS936WojjGxh2ie8U9zDz2DMV1Wd8ZPdiRib6zQPVpSNiL2p6W",
  "key4": "3ojXVw61yUfZ7qywvn8S4BPp3PMJKAGsuSah5KATBNGSN3ycp6zTN27fegaHoEwvxXHUiWGkyT6Gz7ZKofUo1Xwq",
  "key5": "52xYcKDrRxRS4UP8hahgiH8dPfSXEPhGLfWyxvuxhsURavNhNre8mV8zMT5BSeaspbgW3DahDHEax8EHsFJXjK7j",
  "key6": "5QYpd7TGDerhfmoLBogrKLveYqYHQ1Qe5XHhyxMu6mM1Zf1RQ6bUrDmkDsqogawnvykXojpe4d9X1E6tAkswa1dN",
  "key7": "3hrWKwGp3Gfvntshvwkj5EmgBataieaZLVL3yD8EjYZjv1Ai9FuaJB8kKZRPcLNodubzSUMG39MzEA3pNS5oJ7nT",
  "key8": "96EwGTQBVjK5gyZsnXfVS2LsRdckc22sB8tUUeqWcmcNwHqi6V6hCqxvXU36MwzbB4NLtF3z8mXvvSYQFBQeCBN",
  "key9": "4zJ6xRHbupxcTMQFHFPFyt2UwkcwKoKruSRdcPvwnHLQWqJoDwV75jQfQtb4BkYSVgcMcQxWj7kDDskrn8fNqQc",
  "key10": "2PiQzWvW9EFSZ5RLfuKxEsaJ488WNT8TAkz5HQbsL1SzDBqYUj8B27SyQ76yp3s1HY9Dgik3Zf8ZZuFbycXy3X3p",
  "key11": "2yLVBs56jE6QKujAmdj6d4aWQ3hM5oryjh7VNLMxHhG72LopA6WkA27Gaj6uipf1sxeqooPGk5EiSYc5bEHRUYg7",
  "key12": "2UErpWXYRycxXVgFamAVSt8Y6MHQRTdXE7dmnqGUf7KKpLMZqQw5LvCfox3jRdZrLxhw7movTr7okBxCuNyEZSH8",
  "key13": "2QQMZvh6hNbxd1qFp8ABDVfFhyPmke5GyvauijgUip3A5D3386C9MzaNC7NFAJoCNEGK1oMysXTg5fdWRKLpXQWq",
  "key14": "3CHh5aGyeuAcUvR1w3oywMSgvUkkpZFZVyvrxrigj38hDyE9ERMAfd4AWgXXNFWUUYwP8LzfWQx1xKmoD4DUh5Xt",
  "key15": "5EhGhWG8EZEiMcLmrTw4HNZXic4aqSEkGhaqfP8cVsg9qmeujD3y7qUjeCVfVDuPuBpW4yYXZpbdCY4J7ubsHp1N",
  "key16": "4UxRujiyhdfc77whasV1N5znnpPW3UDKVSSSrzGFwhiwK62SUtzHW43nNYmCAnVrXVsEiTxRVhpRDo1nDeNTm8KH",
  "key17": "4YZcBAeVAbXTNkVvKSAiPbfLhPET1Dai9ton6xMbxt8vzcdfGHu5pjmBHxppahnW6SrZhZHQiDoPLhcpp3kEtoBX",
  "key18": "2ckNXMJUGdVWmxG9cYvvyFiLfSL6YWEMzic741WUk6Qm8Jqr1TjgEtR7iSFzphxiG2zQEXsV6qmxnjas5WR13vBY",
  "key19": "4kE8rPKcvoHcSGRNfN5PzXZB7CPNt2R6VXkcepxx2EKqEfPtVFsr5tZLSoZP2cijSTDaPGsDD7APVNzaxR1R1HRi",
  "key20": "Nkx5S4ifoGhGoEnt4YyU5UeixFTVJL4wNFZLyn7UFDErLH8AyhFmiQFfGq4UGUrgrfEpDLtbq5nhzHtVSZkkuCr",
  "key21": "4Xp5EsV6VSKWuguXGFWsgdu7tZDHAKGq5UjXz5jN79428FAmaFq78HeatSLd45yBX5ZGNb1WGSpGzkTuuzaeasiy",
  "key22": "2jKtkCi3scLDhjjMchTK6689WZweViBCXNjd5L46c15MZREit1kAyFbp6xCRgrorj59jGNLhVBWtifMWoujYsogw",
  "key23": "39LrKxdjq8cbnBrbL7qRtSgb5y7BLirmPu2JTTyoi5haUS18mMuKJdwPkQuDsKC1WQEFnUwaDKFGRq9cWN3e7bM3",
  "key24": "5QwpL4PnWqd9WNsMtDWx4UwrrxD44gLKLrad8DBGeShSCDaWfgB1Atm3ffC15YYYjBT7HL4EDv4czicjQQ6xqyFm",
  "key25": "3zirfy5j3BWqR21cFpFCSRm9x534yighioAgN6hPxUHeq1QqaubCLqzgjxiZnna8ToXc9c62xhyBBxkPzYwVDSLX",
  "key26": "5QDu9EzpMtBBZyeRJ5bS7tpWSjNhpJ1snL8Xm5N43ZgodjStvMAf3eV1hmJ7imvpYtJMJgr4DbTsnQyia1YyZo2a",
  "key27": "4MqVsLhYfadza7HpLmSunWngXfeCVRkCeFhEP31YYS86Q1eJGxiMsDSvFmq8SvGHEnSAeX4u4d5DKAPgnfwAKNoy",
  "key28": "3sTWduoKzo4Bfr6EpGwfDVqh43ZUrxr8Yscm9WGrxD54dhKhJ9DN4V83mqVzT7JiBP3uEhc1TxUxhnYyQXz9at7h",
  "key29": "2qUuHA6fKBqg7owC7wwpGBK3NpH7mvXMT4ATyrPLNrUxigvqLzL4SG5NjyyJpSaFtTZc5Vg6RnhmNJzeX8qQ9ekR",
  "key30": "JNVzuMCzF6PwbEvZ8sjNvfCWpYf7Db6FmvnAZRRSzBVQ3AdyCpXYXhLeQNcULjyePDM9ruRARyGbeP2vRqALejJ",
  "key31": "sc4xPafn9rMM6wXZYk8U6oHNXptiCiMNqFFS6gSXywp3oqqcevEip4AxgShCT7y9nLC9m8DejakM6mR991ZgCJ6",
  "key32": "41dBj2f4nVDmioGtaCPrxchJZRQpgyEmWaxfUgMoJsZeEcaednoPb5N1jjFg2btjdAyzhPQwfjck4VPSKqMAdNcn",
  "key33": "2KWY3CBi37skGo45JmpqdMFw7hjBFs4ThtGJLhppV3i4iKZ9CxkhQHY2RDkpeT5x5ZvddKKtcmcQC7MhoDk3Zg4Z",
  "key34": "3mwyCBBA5JQ4Lpes8XYDwijfgzk8fjo37A2SrSdvCCS1tC9nUkZFpBoMMVRvnAWZiax3xu7RYDHFXzkjf3Q78Cc",
  "key35": "4oceu5uhkjxtJRJFowZ2FyWNaDc14fpBgeFWP6W1oAfb3NfZSMQSJ84pzoByLUpRG4rh96YxySuKST7n1jfvZGSb"
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
