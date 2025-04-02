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
    "XD4AnnQ7VZKKmKfMHnxAn8Yd6B24Z9pVvg5JyKFtiYa5KJLe2BsQdNAweoFdd8ykGdKWc7LVQfpKU1QoyAB2dK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bGX8w3jc1QamT8Mp6Lt4vJCudvRk4iJ5yVWK5gGG5LJmzqVXdvZDctMNjWDJKJ8iRNobp6rFthMtYCMmHTB38Rd",
  "key1": "5S7c56boYuum5u2MrVf7AMMG23nvRCXA6Ny6KAb9LBkeqpELEnhBpi92brRw3HoPTDEzHN41aVosU7u1o3cYibBW",
  "key2": "2Xh8s7bp1gDURgXYVq1LLDgAfDKHsP8Jh3PhxksFkk3WjGjpCvVGEggqPjGHQBQDsteFkhM8qstmfWZ5rzhfVqm4",
  "key3": "64ojc1bauPVunzVP2JmWk6PFbveaNjZwa2wMTkSnXsehhQ2a2fgGb9hBZAwCap7cks9T3gRm4cCgnsmoXySL7JAv",
  "key4": "5KHrzTx31wqVGwyVixmxfXj7ANuhoqPTbQYSoBdMAGicWD39s3T5wCs6a2UVbNiWyERC9PemsfPHVFCFuNHznSqu",
  "key5": "31pg5vV32posBi4nNTZ8KiLwWAStKueZLPm4STToihBmxQJSuD3f8ggkHf7b4guXju8cdGazicpwEJiXe8CTfUP1",
  "key6": "2DruYVrwPrEH3YVkSPdP7yDNtf7kDoCJDQ8TbZnAJqTWEJjVb8QbYvDDwmtpjz5bRTuBdkoKXokKMpAATBQWhcfw",
  "key7": "3x82uKDMAuEjupn7m8EBwqWmBWxjfsKn1HTXCipNGTg63D78VT5K7pgxvgEffAXJbeYWyW6QusWEKLarr3UbSBbo",
  "key8": "5rCzHDLXaS3dzN1gDAYv39QLcNuDjFUikjNS8qqouQpA3pPtVpNVaDiEAGiUkNa6sLmDwz5nZPr8Fkyw5ACHJPb1",
  "key9": "WfjgyjyibqDotRCbFMEvwuHjfcUrkTLekBPiiFMEE3LZUjYNaFbrMZVq5keRRouj7eiXHzXSuQek1FVnhFLGjjH",
  "key10": "66ya8YsZ6PLGpCfXvzszbc1XGBoEa5JyEN8sbj7K15jU4F2hF7V6Dx2cqqd2PnU26UxqLrcUt9xzErwaLN7bPD9h",
  "key11": "39JB5agK24Mo47LoouiBVRjax6soWb3D113Wu76QSihQnVQF7RbBFJKqoC6cgcsmE2iGPfPDRErFcF6D3KmjeiBJ",
  "key12": "5dwmG4uN2B4FdTxzLVpZnoFqFugXoLQjMiaEB3215Jy5JpZeHXkpQ2fWyTatPWnE1Hs5SJrNVKmmACvkbkPtEGpU",
  "key13": "4fKC7WAcJMSLWpgDFrz5LTFEa6EjBbY3fv5pCLWSXUZcXTv9Y9UvFemQiC7KRuT3rrNAujcVPPudChWXkkHSeLRV",
  "key14": "3NB3ewVcy1F35CA1hTGwV9uwwkb6udH9FAhjgRQ3QSv8YZ3sNHQVqcb1GH9mYbBusgSCeiqVF5cC679r6khSaEYT",
  "key15": "4kwR8nE1CP83DDHDADHV94QLaZ1M9jq96dQJGuYAHK1s9D1p4saAAYDmeu2mkLV5XiQzNXNWWkDZ7ECbThUrUXuU",
  "key16": "ikYWYgjPY2mzcUMVND2rS71B4kzeqBnWhWSQVq6xNeH1kDvYbQkPjSzGmrBMmP1hC8BrG8XVRJxvj7SsvvajFhC",
  "key17": "2n8ufFQWKapukUY9dPZ37nMzzE4nkgxCkfDZVxanGhRfJ6oEcoubCC3PWrxf8K2i8JhzrftWA3c4gVG1GzgnDcZ5",
  "key18": "66EE9pAEcrDaqyC6ei6txszmDFMEFxFyXDWzhGNDB7frGE1zdBD1PUr2ZeLZf1g9EvCyiGe2UjqgcRr4797Jgs3G",
  "key19": "76DbfVDsE3uBYCmyxN5D7oHJ9i24JpPw6BYF2WHDLoN658EDh8h5ivLvykMjVx9QtxJw9PT1Yjg3yqR1V5ni1Ga",
  "key20": "2s7eZkWizSVwqmM7QR8MRBCNfjrLxCDqZAKqY6i5e5FxTfWDVP6SYTKdt4X6wX19K9XU4ATAebH3mT3WvCg4mPXz",
  "key21": "25eiUWCDGHLfeCgPzrDwdzeWNwesG42g5gxtU4mQcM57egTUVj58N5RrD3qCAK3i7GineDEunaAxqHxJSGrvueDR",
  "key22": "3j5wEpS4EU1xebevvtcbUprNNAv2t6mt3YBnXSosmE73Yc1kibKQbjpCHzsLgAAXP5xdfevn48NuvU3cWuvZEyDR",
  "key23": "4zQBonfLMQsXez8vvQeoTmYEfkdAJjjAYWvE8APS32Xc722hdscZuLHjp6ZHPcsxyaALFxFHNdZPAh2TDxb5TpQm",
  "key24": "4TibPQLpuQNPjpY6vSxUS8tWkvBwxPoR7UnVKUP6MfCsKFt3S2xYe9hKm1RWnUT7U3iJKH5t6auB12E1GJTDyALa",
  "key25": "rVPJDPcqYsVZFe8CmVSgRB5xYR27gzzPbuDpinYXTzwqqmmc8aLHqtfLA5d8KtZrknaD5RskGPPuRg5ma9XB7xy",
  "key26": "CjjvESLo7CUBCPvpGAH9C6JS1dfZJXu2btyE5VEkGT67ZLWLkVYvWnKnb6eokxkMiu1GYGdFBjKxn2p1SJPybxo",
  "key27": "4D4SAK8rByduGPKHA1MFzFi45dghVvNyjoywkSsmKskfGPWabA51VrCqnEQpN7tbXstMqpGNH9pW1a9QW8QTpth4",
  "key28": "2srarzjWkkdMTbZY1eBXgX6biTAgSMTH5Pzbm1p5Wvy5B8wKTBq8Q6CLb7UAbaTAwRunbeP35JexDiaxDwb87XYe",
  "key29": "Jq8rAtYtmnJYSUu6dwdwvzsKwe7aYLeCfcqea8VnLxUCxb7wAXyPoxrn8rk22ocVxxSD1keJU6Kfm6y81evV2KS",
  "key30": "2mBX4vbpBUr68fMKzn4pvdkd527xc84XEZ3gELrHR5nuYjvfMB2adr6Ag54FCsh6JPnKf5EGBmqFgCNLEzdNiMnU",
  "key31": "5NbtRBmCvyfHr3efADoYBU67XKtcXYjwczAojJmZqnRHZB2kWBfk1cAPaBuQ6P5zmC3Lmq7a6MyXkbSsMXS3yqsj",
  "key32": "3o3HT8G6X1Eft2mtqswtZubRcpmS221wZSU3wz5SaCyysQcpGYNDvk4AZfh7Kpi4K7cB6hHkf6iXLDgbi6DGxPvU",
  "key33": "3jvrrQ41kRUZRBvvshcS8AFtzxoqmNz5hr935ThjMBzsfdoUXVfWzDCXvBk5Rb3ydHLAbrfTEyGPXGUQ2qPt1BHK",
  "key34": "4iR5HeRposBco1Are7zChekD5W1akoPSWovUZHuMkTQcA1toN8LHmtcrZwnUu4uwsC4t4TXaYmePgxcFGFDRTGSw",
  "key35": "3sjVB7bAxaFgLeBh6dRPuXHZdaDBx5p5vfQqJtMCVBt229vRQ261YnZ1xdnA9mUxmacBk8B6Z8yh5t8xnHvRhf24",
  "key36": "v3Qmp1ErFmqj8d8e9piXUBWS8HMRZNkPvJgCG7GST7oVKJ6a5adYFpdkRHtH1NNVdn8tkXnb5GeZpHzeuqqCDUC",
  "key37": "4WKXiSAMXvzR4GmYjhwtUUagwfFVt7VoK7ycR1o6b5Sf9BMH1h7gsaTdbVgSTd9JwxnSQ5nq9TmZSJD5N1JKPa61"
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
