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
    "2tkZKvy6bHwScjjm19XcjGamXUjX4Xw2F4hdgAzfjzhsJBFbz7W2iWZrxZrd3j13TBe24cwKAmktbPZ2DKHeSo7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J69SwkgEBSf8pWsSsPXMHC7jHe5m1Y8vTDcebG6AqUcjWgF6E3gp23V7ktHYZfBcRD4RSHzV47wFAftRydvj5Yy",
  "key1": "kMChh6kiDuGxdjCdRbBKQm3p2EiGmJ2asSWK77ucLMCA6kRC3x1EVMgBTUy6NsD5G7ZmWXPaE42tSihRwRtASmS",
  "key2": "4HRrYDxqB4fq3jHd7bYB2Qb1xco6K8fabQPd5owLEv1d4ivgpNf4QeTkkrYTxXUS4rMCmR3uf6YQTjysVWAypRpK",
  "key3": "3DWYNakaZu8sZ7KzGFeNfp1wHwFUou6oP5Gss6dyjRZ1aMENtsc2vXfeT5fQzGYzmtseHVpZBtMxJcWGk879oa7q",
  "key4": "sEXquLMq7UKymgU3A5VVEZggsfTEuWw9vjG3t9PA3xCdMFUb9UQ6UvgrHr2d2RWF8qJXpMoj91nU5GFyzfy8vFV",
  "key5": "5rv1ytCM6gddj7mHFzZETnuBwGg5TEefYYrjPAjajQ4NetDAe93x4XFFCdxMW54c78ChnK5n8SnXKyHirY6PrTNB",
  "key6": "46n7cTMfnaywTS9nSa3bGShkteMLYdZBuxNAYjegEs5dxkyLKg71Tev6tHZLYe9bUdjYH7gUFUk1jx7NpnQBAw1e",
  "key7": "mWLZNYCD28DDb2QQ6t4PMTbJ9J8xBFfgaqJc97gx1bRuDWN5A3GFCn4QKyCJ2kDncoBJpw2nzLqnErKTkvnk4NU",
  "key8": "3TUUdeJVPBisCpWgYWf5EdndEnDRYkZjTUqN1ta8KxctgdtoGK9XPefNqJJKhSea6FEN5x5f5TSwK29PihSe5Cz7",
  "key9": "sxx9sezjLyeRZ9yjJoP6J4cHKUNjuCBbYocWyhzXJavdDegLMtqNMkrYfAg5vBxW7W7FEgnhgPdw4QpTwMAgTsb",
  "key10": "5YPkqvyqEyQMXXDRh5gEabtbc4K8ip2qTzzk9BUF5WZ9rJCaqmzYyZfbdM1B1oXijbPAKZoF7bfYB7qWEqkTti51",
  "key11": "5hvA59i9y8knhLBibjqgn4m1Th16swHWPaVrBRNge8sixSmEUg21j2TZtRsg3y5Lp8GRuXDxyjk7zr7Nj2eodigV",
  "key12": "8nRRfFUP2r72MxDxABAYt3ARuj1i5QVhpK71e8mmGuu8LaAKAXN5rzec9M1j1wuxeVV2g4LcX1Je3hjnDtheHEj",
  "key13": "dFkkB7YZJoCKgAefLFbcAmxo3ubUEWW3AHgtmmKeTJBXaZ6HBDRmuQpCoYrK5Nh2xCapCCSYCqbzF1L4jMEZsMi",
  "key14": "CMwwTbkYKu83yCkZQQ8K47emv8wvyKNrWQ4D94UK8cVJXmTALF14Yrx4MhkRFD1psy2J7hZ3TwsycDw1Y3mWVmV",
  "key15": "3KZrPTFGB2ASX2Zas3Csb8Rvge27VYr5TJLgxK2hzCfPwbzre9RdmtNU8aXtVqxDC5ysna3AmCZnPvHTXYmxiGE6",
  "key16": "2D2vgixuGSEX9SbYgtvQRWFQ73tPiJRLAhijJgoYCiTKioVQxnPyH4U5rvfNBbW1GYV8ry8dwKRYXroLws1gCh1H",
  "key17": "tpj6iMjXQXYb36ueJghXVtfAQr2CKtUNmhd6Eqi8Pni6fUYaKuE7bkGyyfCMscc7YFeDmp14U6htAq37STJZQSn",
  "key18": "5Joe9vNcByqnkD8oAbJx8kx4xnArBv4UpowE57M4ke41myPNrkZGucQaab5tVBn8jShAshF9oQweCdjx9rUpcKxD",
  "key19": "3QijcTSewzgbvtsTWWUuSB4wNRpf4JtuGEw92HGpjUcCT7R4CKmv96GN3r8mqbq2Dfajr6HycJf5XwfPi5JdokdU",
  "key20": "ppgCgHWcVonSv8dV3SDsH7r6tXdk2H4axEhbQoDPmkkEo3FKtXnnfufnnUfwb7dcZK61RUQvDuyH7PHuvdzoeLV",
  "key21": "36mdWbwJTMAfeKkPNCEPJkKEEhF9oKGidi33CpsbJNVGUgACiX6mwdDsVhNGiqiJbhT8UjGowuDVTx1zZAusdSTb",
  "key22": "f3RUHJvZ9zZ7cNi4iX6bbHTA7q834YuS4byZjNQZCGzkLomZSUTprHg247UXADRoZfEEP4cyKRSJRVJ8LjVfwR1",
  "key23": "2WPhzXTDdeBUi3TdTabBPZ4oVyyqbEtuTeA88cUWR2KmKtR8Zd4PeUZM7fqT4ApZKUfwpi8Pm1Ahc7SoSpC39Cxp",
  "key24": "5TqKCdo6jguAsXt5mgHZSzes8tEJi8D5Hi9ztqvh9m2wGsiK3yXCKnBXeC1HCEVEBsNA2ycEZSVFPqDNkpS4mzB4",
  "key25": "2qtWoSwH83ZKtBKRchyLJGsqJadEesj6sPY5RGUSt5RbVkEoTBovtRfhTBqFAJiWyH5rFYNX8rqTwnG9mYv2FM4T",
  "key26": "4xxoHjDuaXtAq5vaY2ab6Z94N4z4rnWGoHhfwnmqXBrfVDCoh1sfRC2CaLRwhibngpBckTHWmeMhX9fm8sTTuuw3",
  "key27": "3tXoFGHecmScoF667gfuYi7ASVeQMaEKzzumXAjRg4k5BBNi2genPa2hCEp2fX8q3JmveKdqUqKPrtm1tA3ugbiC",
  "key28": "2uRQ5w9XFkfnqUoE4rdnv4SMzdesnyxCAtsR4Z1aQQpmJEm83aThkTTFwUWmmUy9Ffc982ZTmY4UWtg7cyK86r63",
  "key29": "665v4thTFQHGkoYQCaqU8a573j4vdvYQwucnqtNMkJb8SdAzpfjTY36yPigfhChvGxHndwyjneuYBYG51AE9X2Q1",
  "key30": "2v7TbRYRCxx3GapCHYdfXsEUscY9oseb3XEMmfBaFNo75PpnwsxYBUpG6dGFMxgjJo2gzhCxev5nECq87bMB8i4U",
  "key31": "35eYpvJRxk4b8gr8R473JHmKNjfkZ3DNfTqJrt4D6v96HWvq9ebrLxw55FA6qj1RFiuvVG2mQhLjsPbMKb4VoPx3",
  "key32": "2r9EX6SAL8yZS5XBeU9G5QiSNe2jdUFjsLwUHnZL4ThFdPXmkoZw1uvEhNGvEqi2idd1Z7hqfyCdRJbLAeSKZgYx",
  "key33": "AHk22uFDEHfozmit9nbJsdoph4BNC9fspLdxv2ioCtnnXBh8oMCtCB4RsCGLdzZaF3bLYaxBvCWtzDoCoYBzj1J",
  "key34": "2DPrHYMhFiKDMycZvnnMRyqnyjU7GbTCWEM5TEpDRJkb4YQiooK9CXF8gBZh6RxTgcgfeJZ4cJfk3oD41VjWoVRN"
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
