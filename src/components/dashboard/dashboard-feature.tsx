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
    "jWp75Djj1dz6wVTMT1MUknq4PiieA5VQ7PGjzRMUXJypCpV1ePazo2VM5ZYFQNyRSAHt81QC1aDQVpCLNdPmXYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eA39ehfe9Pbqh3GAox4wefTxJo236sPocv68BjnD8mWdN2gCjCyuoHhfxjpKUi8a37RUpZ2x9pH9DpSdsh9KABk",
  "key1": "4pNwf9E6xkkd5rV52uXMpJewsMbSBGsZwAeTaSqGzH4dpzLHRVsJDYPZrZFsMkjPQT2QdX7F5mYmTLM3nQpTAUrW",
  "key2": "437G7ZXsHV9BKvmq5AfVqEo3FpRZ2921ydoARiKanPEsy1yXkNB9BPbTmdcbae7wEEnJigCVduLmmXyhCiUQt5PR",
  "key3": "4BmtdUhDjnYPJvi9UhjeAUqxbqy38JzhQ4jcqnZ6XpZxndze2i8cSgtCMF1jzQ9kpmB7ZbP3X3mR43TzhBh6r4g5",
  "key4": "2X2NbsnP9VaZa2jbUEkWbwtn3voVykKo7KuLb1yzys7VWcYkjfg4CpieQHAhVYhs7pk6LefgELgitQjiPJoBwnKq",
  "key5": "4CBwfKKmWRWfRhSFr2fGzEeHQRygtx3CBtrFBZC47uTtj4RFxyuKkC39hqubPNCoMVv778ahKqtnofmyy29TnDaK",
  "key6": "dh5WTxjgUo4uAR4A7NZWj11uHo3S7pLxNRSGH6rs71L5veh1iskBM5uGAvRsbR771ErSABPSgynUJsKhfqJivLd",
  "key7": "3DFf1NFVAoAtoL13s9XemfhFkV871oohJkUL1QdTjLU2pJPivsWLuySPHVkzYkoBLdoAMwRqqQFVnweH9qUDWRMm",
  "key8": "5ViAkQGYn1UGkm8ffWZXnXA7jyzzCj5oqLsVcUhHhBPdRJE82HihPrkt6Xb1gnSJe2nP56RksY9gEcv9AiXp9CWr",
  "key9": "5MxZDD8Zv4FHsCmKHALoNNYRkAfG61fwn71rvmZ9fZo8AWeYroxUJQQdWdDfFf6gjJCwGW82FEz8EotKzgfWs3xJ",
  "key10": "52H6G5f4ZsiE9hxC6WeFUaUUX43hSzPZGkLkAjgDKoVa9nN31gZukrbTtx3k3Dfxzn8jcH9qgUvcnZPgnEAoqC3r",
  "key11": "3iVyRjAoc2Agydf9MLZCdup6zaiSnP1t6tgZPBND7c8JobcPJwsg261Vq7APzC3At2nDDzjMiV5RGbLKLhPzCfwL",
  "key12": "gxfPfV8ixvhkeGusJyFjq4j6B4G6z5JqE4ixzF8fUX9DCbxnsNPrBHphhf4oUGUTyrt2wG9VgifX1EbckzkScdn",
  "key13": "3oTNvWA9Qv3Qnxa2BMbyb1Pz65kuMi3DkRM2Ksijhr5feJexh7ArJ3D31YSFJnEYyibAB95gvdrmxeWmshCJdUDQ",
  "key14": "hiAiCh5k7u618fBeZV5JT4TACBWKbcuwSZEpN7kSroupFr4PyHE9MJS6hVSbs8CwPcv8FvF4rvRwPLg6wRMLyxS",
  "key15": "4ijA5nXQaHEZ4HF6SSAYyTEGoPp6prbL4EkK5BxpJ8hCmGbqFrRhFyWmd6Uu8KfNdSmWqp5WtLPDKtjrwSjWHRYY",
  "key16": "5HMaCrd4rbfKfFXEGXc12y15HZz9eALcTySa3y1A5Q4S7tkHX4DM2Cveo9jMJM3SpzUABumNdsUM4fGxuKLXJ77X",
  "key17": "4Ue7yM6k4cbLYpRcGxjmBS7R2TQajtWZpqMGwd2aFAoYGFQeQG2mcgAoCxEVpCTHkxH4eCM58oRGHRdpqsy2u1ns",
  "key18": "HdPekCQ48cNuBJ6Gy7DcDbLvJpjuv2LmDg7mu8BoRNir2N3nT8aAPwtEEDfN72tyryFrXFD6iFSRMiZzRGk7iBo",
  "key19": "3cfTzsaNLDTMH9vydSXyw3TK8Vsmmnh7g7kN8ASSY1tr4bZfZibDoEwhfK562igJQ9BaFsHEfHP1VrJg91rYgh7W",
  "key20": "42LdWBnPayNAqtCxrBCKPspT3mfm97tdf7Dyp11Eok6k2Wzco9QsyDCQpTeWYq1ah9GaXfkkK4MFxdwos42p6Wb5",
  "key21": "5jT8kJdrNumg242vkunin3g9YaTQWz6WkgVzGEA4BLchjAa1Zo6b8nFesuJrp4LKwUEtRJdogUKQTRVsc99Rgd8P",
  "key22": "4BbKhvGxyd7m9tyLqfdZUvqbtvRSTiNxmiWfRmbiTDUyBmEL37vw1Mpbmtcyu9kMQso2nu5QFM9menMhSdKJTK8j",
  "key23": "5DERubt53YxAC7sC8bvzhixP72cVeLQVMwNGFFTZfT7mKdNDj1VKmF4Pck6MN7Bv5qq8mfwKZKFeB3ygvBAZFkCE",
  "key24": "43VwKLWWZNtHp4tBfTnkzJYJdemQYhDaqf5C74w1A9SaBwqHyXL3K8ncWdN2hfsNuzFz66Nf8e43iPEdgDdPM9Lf",
  "key25": "5rHLp5zUWfyA4rYaVgQMnYkXNoqxQKhQMQWDcTw89PYdQoS8fDKQB7X8QsKCoJ6B6C78h2doAQLnYjhPtsQJaSGd",
  "key26": "4NoLZ7nLDcdxg3kYg8jc1oKwLSP38xAxyFkdehwfzgXrjhv2owrS1sAMtoDK3fHqRCKQCMPLdxjx8BXY4nA9TUyD",
  "key27": "3xZBS5PdU9UZHixkEofKuEbWxfuMLniCZUrTyN2gdaqRr5eb5bjkPjP9Hj9dx2TKkUo4wBQWxmWDMC3KTabjAoQx",
  "key28": "VaAd5jE28riKGGa7rwYs7CeJ3QadfvXLiz3yKEeX4nSJVRJvbbYgsHih1jGV8yQe6XdgWwmhsZ6D3UqZGSWn4um",
  "key29": "wb5zqTgDqmPB9DGsmaettFmQFEaCdWtEnuAxkqHJKpwRMmL8Mf3JZ22CSw4oSguKm3cqPRHCuQRQHobqs6s4Rod",
  "key30": "NPTjhnhKocznC815LicQMRSFiuDCz9NCVzxamiNSrzsTGZAd8Mj2K8sjfiMRxy9Q2cLUwM3nEQ6BwRVamFRwDGv",
  "key31": "2YknS2xt41bvZVfWHmqyYopS89JRsBFt25aL8jG8MhcP5ZBLaqiSynQRhaDFFZQPEZgoX4ds4f7bmT417M8UgvDZ",
  "key32": "YAHJbAgjizxFQW4YAEXzWDFnxkMmTuJoBE7txhDj7cG7go1C3RF5izauRVZvz2nT7RUWLuu8Uq5gE922PcnjYgi",
  "key33": "2kY941BK1zsN1QPw9zoVSTG8XCyLSeGcbfaRBfabQS9u29VUHemy8VDo4KrG2qpe4C8MjWAmoY2TRWu7STD1Avt6",
  "key34": "5vTGe583cUPDBeLUm3ozsHy4GeVWtfYWT569c6dHewY8RZUS4NkkCg5ro2c3BKi15KLHVcEKcVoeeiw7uMcrt7H6",
  "key35": "3DU5nXfYpw8KUVeV3HRatTBe5FRxan95NdzkinBno51aHjr7fNVetqycgmQprk2ejF1zW6ECS71DCzsFhzewyuK1",
  "key36": "3Sa36fFb5Coc2icwFRfmmzwtUv9pvhNk7VrwyohQpSExsCEGJ93QSMrNGiV97Fp3gK6eYZy1XsAhPQzT4LYt7mmV",
  "key37": "45N4SirxsxoDKSjm2e5aoFUdin2YPq2jNNvqCXvbFrYwdLa6DjDCkAc8doypVrFeZJ6Et3QZ889G9riwK5Le22d5",
  "key38": "3EwXcjoN2PvVGAL8QGzCKhrkc83hx1HPunrDLbtSUn4YubaqjXucgoG41mseCC2xBtWHRkPNAx2enrkf3YDX73XW",
  "key39": "oNpCgoEgYVLe7Fy7GBrUJjZsTq2p4A3G3hDcKW2JQwddF5inMzUb5Ryt2anf3cqxxYCLgusEPTKpk9Rjjby27Zg",
  "key40": "5rP8hfW8kXpwFu88yWrmhbMCuHbS5XXsPg8xnSuwpMF3EVRZkbNQqATi5QnQ59GS9HUJwySm9S5UewdMJFQRotut",
  "key41": "33ni8PrKLa2W2LUQiM3cJv4YDcnhvhbmUq6ErYpiANJbBhvJJajaMzoxLbKhS899PmKFcmLxxQbJ24rAgiqyLbAk",
  "key42": "29acs1PZUB23zrStug1EoSG52GPYRxM7YVHkL7JRhMQnFUb51EWaDxtjnVPXbzpiU2RhLTpZiP6v7RFuc5H4vPMe"
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
