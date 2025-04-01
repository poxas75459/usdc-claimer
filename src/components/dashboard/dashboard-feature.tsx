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
    "3i7ZJ4qdcxEDTq86jpM9sC7meyyGG6L1a4WKryoLbYAueS41LTWbzJtuCcjaqv3aTeV11ZfH7HTw9ki3fkEgoezN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZ2WWre5Wo7ReeGGWpzp5DW8MnjaZ7NKnsi1oYV6vaCdoxX19DBFR2hTrXB9mR5ndSezCkS6RgstdzTUPLYrUDL",
  "key1": "4XkYdVtcsmrXcUXbLtge8zFgVK6JcJfNJ9N47DMWHkETgPJb98uQzy5659rg4Bjt565uzdxyAq8UtdToAqTNqKL6",
  "key2": "2RgFcQRXdNG1f36YhNUrrVSBmaxtWSZ4LL4hcYMwdNF8Gt5G1e8PTq4SQDuGdSs2Hq2e5P7EZrXy7xUYQ7V992z7",
  "key3": "2fHMooz7czgsWEjnSjmmmMy6WnGUbHGKohBrT9dM7gUvXZyn315pgSr6A1nPCGKtYJ2hDEUh7uChq6ArK7Tup5Ez",
  "key4": "3DegAJjnYDxJodKcf4XpeawWjAWQ4Y8ivc1Wiri1byPW45MU5eByAyQ38PoeWusTorZ5H6Uw5J7NgbKC4Frb45N9",
  "key5": "57kwGy5rLfTqdy1z9hFxCEw9CdbWfCRrRsoQNnnHtb6EqXxsdio6hsR9LeGx4ti4jfkpFyBMjmBns5QcECAJ2aCJ",
  "key6": "5x3KPiqpFmLDUD9oHwh64s3mrDwjDXqPV4zA2ErTxjqQdpZY8myf4W8o6y7xgUbtu8eMNYuEss4K2QRiLGzYSvuA",
  "key7": "4Ziam6uNwSnWb4XbQj8Kmym6HXmh1m9soQEtaP1MEPAAYr22ZFm8Y8aaTyoCc84CKmCWzTc2D7VaVfyGGg6Y812s",
  "key8": "53B98fxZPYyN7N6emjTA9eCkZfdrpBGafiAUYw2mmjQiDq3MTNLQmQCog53UbJZLUdDLioQtbPpyrzv6aK9tB45",
  "key9": "3BrCiFFwHbSa4nDR1nYA8xGoozYuLH5KoAwqnKkzc3oagVDKCkHDDouAEL4z75qKhw66oh2rmpihBGy5i66ndqCv",
  "key10": "5RUnaSvFv9VjxsVrqPMw5nQNnQEn63tVFFgFEpHgohReTVxtLxw1aSrYaF1BbHEYEQ5MHwyJPW974UmwAYNYXmZB",
  "key11": "4RCHYCtcYrcf8tLpJHMdWsmrtyUZ7BP88eC2vb9xf8n176RwwD3frL5AmLz78oMmXrDoRr7manC5nm3WEjYB4qeB",
  "key12": "41qnR9g7bBHvdVpChzEPbjNjbYe54pZtEA4BRxdgg8pDYEyHRAs4oxvAX5asD53LkvHBabBu49nFrZNQAfunrbNz",
  "key13": "KZUrhm5TJBSxtXr27LuM7XSkSpK3zbD77YdGcASkdfc7Yw5cbL5hw19gS6DnsKPBJjn8onPes67mPF5QvJ8XZL9",
  "key14": "54vHj2g61Fmazv1a9p2NpsdLkxPi1aJuzTaeZJxqkZk79BUUjmhymU44bkU5fW3Bpgj2zHLFFs6Upsfa3wKiYCu5",
  "key15": "5zFDa3aU3LDT5R1cSX1WLVXRQtWgrqDSfzwSw1kxNLmKte3P3Gb82wF8GZ645fiR1K83APSp3n2eq6G4VRwMYYhT",
  "key16": "28xMM4zsNMGaQnnfMWgHVGjrFdHtP7gFuVgewWwLZoXEpGV2iGu5oL3uFKKHkiiQphjS5XJAz2RSuMJTsSzEoLGu",
  "key17": "5dbjDCoR65XDt4VnPkEjm6NkVjDLXYDwdHnykHKuh27EkTAyYrJNxtydivqZsenMYiUd9npXDK8yexm9D47osF2V",
  "key18": "vnJJABjc4xByeH8Rd7rpoFUxR1FAgx2F6G2Z7fbak6wUMpJhPmR2jzesiXViHMWigMKoWeAta76tpiMCc2RFv6L",
  "key19": "5GAQ5wbkiRQ2v1MQj2NVvsmABHLv7tTDTvZLNr6X2NeTfjyvWNU7YGzVftdn6KdbSc349eW61U4GcTUAp6fJZKwt",
  "key20": "44TXW4RsrnLCVL5RZwTZmZafptevKcrNpLttD8DzoHvkMSjAwxRnVq8zHH5ZgPz48xQ74fRx59zPqybeEXPcCaJJ",
  "key21": "127rnmU5dAQvVP3yYEbbSmfR2sbLs1m9PRhSwcPGMzntG71nV6baoErF3MeV3xtmcv7ZXgTXCz2DDYJxg7vvfoeB",
  "key22": "5eianvBuJmWWsPeWUsrxMpuKH9pCw2a85ouxtfWvUqv1LkWVV9cgBufTqLzKNwLgrz9VTKs8WLKzNJiMbPYpuUhF",
  "key23": "2q4HHnH5bhBdD7fEwMKCtb9rRDZEqWayMeP96PNbKxCajkMQVizL7cruue82BcTsevESDMwMEBEbPZvEWYQg3ZuF",
  "key24": "sFk75tk1fNsHo6UrJz4wiz1bDPqP35r2zAZztbdg4cY4HcTvtEKnW64W7AAAT9RWNWCxtiShUVnsX78v5LEyws9",
  "key25": "wUTPNAwDk8HRL8HWKLLeCkX6qkueeDbVSDfrnttSiWKZQYRvzFqTw9GXeAvwBG4SMAgp2aeLTa3yfZZ5i2P13T6",
  "key26": "Xee6ENPcqE1GoXKchCtGbcuW3jmSJ1ResEUxAHTPDjDTm2TvNXotDwMdv2ozVouCn2hRU5LGtqdpKdiGUeD7vXe",
  "key27": "3X6w9RAGPG1aPprUWB7RMQ7h8QgsrdRfSvWiDvSu576Vz64o7GQAJQffMc3HM6xAmDs7xN5Cu7T2NLYEKmaZNMLw",
  "key28": "3nr3jFat1mR26hrdgg4kHTjBZJZ17HVafzNBzRN3scTdMhuixhmxK12meUJSSY5Nr7iTmLGU52p76n76E2F8kdzX",
  "key29": "4PmzYCmWTkLjg6XPieEkJw7UY2EoVg4zNpAJ4oL238py7ghirPrmFZ6nxQQ9A4rUiJmWZQzh5duU4vd2xsuyBjPH",
  "key30": "3hD3H6AkdFQMS6bS4nQJXccz4yF7dg6DbxLVqAFgfe4bn7WsgJ3N25v2y9fCxWdW95fZJV2Hz7fxGrvu7vjkLMvq",
  "key31": "3w75HGbjJLpsJbApRU2UjMArqtWisAEAPke6sDmUBdC5AFxWwVZVj7kHv2EzFYsit55Apg5SNAGa4sZr9Z5ZQ18",
  "key32": "2BeS89GAA1U3ra2RpcKX8qf3XDqWtyehpZGfH3w8BRNhkRekumvFRHSMX7kRhXxfftpTXV8Pyz2X5KEToSJ8CRw7",
  "key33": "W8c72LgEaYDWTzPKUahdUCrpJhs7gCt4b2GDfexo9tuCQyvXzhkDxUYWxPPfCJZomGXNGbNAj6feqickHr81boY",
  "key34": "2Qgk3XMgqzmuuZi1Srq1MH4A4iQrd68kg8fABXHJVci6jZFP5qEYxvdUfV6mwoQ2sMSjTguUi1QijQGTJedKRU86",
  "key35": "DtaPv9Uf6BGXSrArMM9xKyqhCo7hKkQmMuw2zA5vvEQ9bp5HRtKWhYk6N8qbtDffpF9pNrkuTFrQh9Vr2XMNjBx",
  "key36": "2BuRKPxsBqFyRdiXxCoTYigkBkM9efNm6ChNcxmQPKNmqNubnT9H69qUqchpJ73ZxBsvffsyNZ26yisYKM8q5zJn",
  "key37": "2aedMZCuiRc2hVNMDEKGch3BQP65GTNjhvry6hGDPqz6TjitmyXQPNtBwd7wm4yPYq9cHj9zecbMmiqRezC5Frmy",
  "key38": "4JXuRzy3MPUxAh9HBbmYzfZZb9fuYZr6TN32UK4nDGaX3jk34WXLfgS7X1YF7Xwjo1JCvHSPUDeqKGrpubTRvGMS"
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
