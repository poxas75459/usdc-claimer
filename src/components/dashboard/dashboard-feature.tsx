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
    "279atRJDxqGs7EkBmpuMFob9xBoG77FybtT9X7F8GKgT92SiJB1aZ9vBadbDNyUvYVQvyi2TWLxsYCsMahNZZ8ML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XeBsTrL7qJpsYgF7GNrFA2JvwBKFgrgGqfnQPm6UorMNC24gywty1Fa4DeY7K6BrhT37cTufn5eUjeEcQ4fYacu",
  "key1": "4Hbrm2fwN2FHFcmUsircH2oUm3wTEtTFmANpC22GRzj3K6mqdf8WRjyhihe9PJuSKjByVTthb68N3RZowgeKkt9d",
  "key2": "2qMF1Fq2zthDryLPrAdZtPMwhbexVZFXFtruYkNT9QqDY6mxuz8UrsMd12tpvUhNsBUSfgaDu86CC3AdCB2xk9kW",
  "key3": "2jr5T3rqyfcqgt9yhDAzZU2NhFVA2RNqSDFKt6jSLLRz4Y2TYBTeYjVd3VCkdAmjcF9iWoVauZ4LwDmZ4msMFVe1",
  "key4": "5PipQx5Rvfq9YUR5g8vB8TL1pW6QGT8tuwBaqvi322dyc6GgE7zcb33BhWeaXyxcfnX1xbwnf1XudSFa6yKhzBxs",
  "key5": "3wCGXJxwkVY8YXPBTQ86PajmKjnfPxVTX9Zy5SMMQrgZ1UP88HYuiNbR4emYew8j55GjPd9xMmYSmdohiCT9BBAD",
  "key6": "jPoG5Qgz2hG1hcrvxdG43cf97wPwgLinars9urzvHEtHo3Si21sexQ72uNRDQCoNAVAqcvAKEtQJ5wSVYW4xZkC",
  "key7": "2pWywfZ1c2zHzWzaLchyWjWjW6uEyjNdX42u7u1yGb2qLdkEnkkbG4HCsM8whevXvsjyN3uKiBt5m2DSRBJY2PFQ",
  "key8": "2Zr1AGqTUXTbPdY5fWMpdjXutTAUtw82tzW8CDGdADFMsP7EEV9Msn5TpqWpFgVvFvFkkoA17qsKsy8qDkQVLCSF",
  "key9": "3UXh1evHTm4aEm2ukr4uctUgWLcbV88ZUUYJ6DGX53yz1AWFdkDkL7Kks5Af9ieL6LDEyboCyenUuewQT2QHr7wT",
  "key10": "5nkxnoDigX6JhKZGNnNvsAGehZtjrp4xZVhG7vfFDSPz6nEvuUcrHNxaZD3xGsGiPiMUz8XE7Xor4p5Vrj5KZyYU",
  "key11": "NMmeeiDjrmW6dxZSUayJJAuFy8xdtvAKSmPYEGUCwapjV3XJUqZYS16WBZVM9xthE6qxc2qu4mD5UQ5cwCwMVkg",
  "key12": "2QTK9Te2fc9Bbvz72vQ6ohzjKRkgaSwULg1jY7Fdsm2nyUw6G1joH62h6GXpmftazWz8f3TTDEYG2ULofQssi1sK",
  "key13": "2htFG2NV4YpALhTyDFe5w6KxZkarYEKsy87s5MH3FnJRLCR4ugxNZdoVz8LMDdVWr7HKsSdTgeLvQpjeXifRa4bo",
  "key14": "5UU9qh2bi65r2VEtQxLzad3GbNN6ekxjMAdHTP5fzfK5bLEG7kbcz8ev7jtFRsLLabML5ZRGinyaHn3Qd646YQPq",
  "key15": "B1F9PW3smnhjCHcUPB8wp26Ug4MK3mD8iHHyncGFdt2m8K6LwuastFhjVuZ3vJV2c5fSWMeQFmR4TpHEiJpD2Zu",
  "key16": "VV1bfbuYPFqCeqwPYKGcNduRPAZ1awvEY4CD7ZqFCyWHFtmoiJa1Upt6diEUh86B2BtP3KjuuGy1NXNgUmmF8ZM",
  "key17": "sYVx8zerKppcFuhJ1bWamSLrYVNYHeXWQQTRsJyFQxMQ7vZKGN12ZWqNT5kSe1RACovKZTNZyRz96DzyfugS1G8",
  "key18": "5qmsmi5hhkB3KrhCEHtFgUEokmHPMWFXtENxQnaCUQAh9QBwq7ZamksaPrHnPyE1Cp3bMa1Sgem7eN2ApfbP8h2B",
  "key19": "2bM7TQCjET4pK3SdX4QNhSMbnCcdSK5naAmpBaJVwaxbyiMqC46uxcDDHJAndJxi8h2frd6ZyT4yLBhxQAgVcp5r",
  "key20": "4QpQ1ejSWro4MfsKab7ZWr8xQEeJPCdS1bCBAPii2xmmq9123vQ2HX4BYN5XzY9fXvqMTAGF1BHByps4m231CXbY",
  "key21": "2W5sQqZ2QAenx8EyEMCF8AqXE9E8WYBrMFVBFpuKTJPqLyPdALofq7fNB67zm3DRwixi3bm72of4KxkVTnvbENaW",
  "key22": "CamUYge1BgZnargxcH5hWijUxNqgiU1F6Ns5jSsVPCEuthmCM97Qb5CZXBZAmT61gLpjXFcJJVWYF4gCL75ncgn",
  "key23": "Gx4HeekWc9UaoRZzgH5utjhmNURHBrM97Zc7muvyaDj7KhMaDEzd5Vdj62tpYGQPtSffQMBZfzFDp4o45sFvF6Y",
  "key24": "5mBwxHVGUaYdeQXb5w7ouAzwLzkB8ubkwcs7iBJJ1fNBot6RqSYdXrX2teuwV1uz1yy1DDefE9LPLuT1GY8gs8WC",
  "key25": "4b9fQNKpUZFJrhkEhhV7JGv9z4kK2W54ktDMdWpXHMvK8FWpG1DD97mZkQkbvKn97C54jYY6w2T34MD2few53zZy",
  "key26": "3SCjQyzqJanWC5T9BVBzmhQ3iAS6tFYnowqixgBZGLQV6VA3vQnkTn1JyaBjULMo425ZbBCPPAxLbNrDF26s3zAb",
  "key27": "4aBAjXrerJxVir98d2JMq1qgUP6tbHqq3TWGdxnJpiFXhxWi8UWn2tGAGGoEM5kLtpRug9CTruAzXnpmBFb95scu",
  "key28": "5cRFdCiudfREADxCzUWrEDheburd1pRsbJaN76F599pb8wAbWL5WS5SDgkBWpcdNsUNDe9hucQfDTsFx7ekaS3h",
  "key29": "4q43CNB5WYQVfnF7YkLnAawWT1udi7hAnjgDsuaoY339MYDvGUPQ5wRVTNVJgLX8kehrWKWFuKFsLdNsnqHhLxkM",
  "key30": "2jjKMpAgFBZwrfxLHA3iGpGisjSMQZs9NseqFQvbv2bQ7EEBAwvqeaW4WmAhiRSvLBSZQnfTVJTBe2NHxnjVmpya",
  "key31": "5mrqvb1eCpZkPvteqQhvvX13PHRmFRULzQFyY38pFaY7Khb2dLJ9bNR8wYcZ4DHXMVM5MfVUY46CDKTmZ3dxbQtF",
  "key32": "wuAGC6zyTgqeBXenRgZafsoJowoQyFFKtwwKT8uMeRBQRrYpbcgE2mUyMujdYSND6r7ydp2cF1wvZvkva8erxU2",
  "key33": "3oHH585ZmosVVz56owix9xQFbqJPoTpU9pWivFzcYaVZEGArV4bNz27rSjTea2H1FPLqpjufLKvKJFY2PnC3rYA7"
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
