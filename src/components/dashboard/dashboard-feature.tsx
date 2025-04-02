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
    "3CqC44tmFK5Y7E6358kQAhh3RMWWbWJjKmeYntWEjafmrqzFtKX8NjV2w2DFHByuATF1mJb3yGNrHcyfoq7PEc2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGkZbeNXtBKW9YXrRFGsGBR8XJwbfG8wJyRGo9SBBYYQ9Fv45iexLME4ssvAnSoXaYvWrLd4wk9e529auHEpdiV",
  "key1": "61Sy6g6XEU1MmTQYUBpxxnGUuk63AnorveEb4QLHi1mZWMBpTbwiffUkPTcGAyUF4mjrhMXw7J7PiUGCbysJXvy9",
  "key2": "4j3rRnTyTmLTf5uGgQ7dgYs51Qe65dQjo9bidkoGDpfzTzzUeW7go8ea8WzE2C91VsX2gdoSoxn1R2cqGPtXL1ct",
  "key3": "VrgwfxmjmHipMfhQ4UZLZ1G8CCgDkeG3Rcmkq7N9qxfVGVj7BF3xcYCMorqtyUyNstCewUbAcbVjLjeMYfksHHu",
  "key4": "2dug9pgGNC84Ef8jeL52BRULstagmQwnAV782NBHzzDJ9oxHLQ7LqKP8LAM4CiewTcDobpA3Z3dAGZLiFf1YAZfv",
  "key5": "5sn9hLE8WtFniGXwb62wxksq4iDinvq1e5bGvxK6331bzE4QFEC8hbidxQKgGpgzgmpVY2pfmj2RYmrBCsdnwkec",
  "key6": "4rDr9dZGKfVirHA9pkbXw6pVCQtov9exFi8pWJjpyZtyUTv2EMsyx8aQy4xRbUk5cY1Z6YjDffmSq9kwxXiCBCHD",
  "key7": "2WEEi8eXx7NeCDr98WAAYJvmbUEaYcaWED6bjg2HbR2Zd9MjFibEivCcpF1zcLnpDJ5dhzrofhSkNJz9pJkh6XfD",
  "key8": "ddLZ67jQ1CSQPA2vjFQLhuwxnWPkvXsYGyQ3APweXKQRwajK3WXkmv8YD7BzEWdeJ8CDMPYNbVpsjCvupxeyGVW",
  "key9": "5tW14Q7Er7ivwQF31n1kDgESfQWrya3smisxsZRw3Wk2GsTBFfuS8tsWPMbw4kiYS98BxndLhw9hXRPg8JwLJ6HY",
  "key10": "xYoxC8n9gVY7su9MUyyuc6hwBnbiiMXWioCjAfqjsxEYbeRgkLSwa7YPpgssaxwx4LQeejtZWL2SYFXQhBeFZcg",
  "key11": "28iK3xEX1y6Q4eLpzFhwVt5JZ9p3sC6vZh21Vkks2wzkj85KkDxQzTx7182sa7WRKbrs5dBjAzm9ZycJBeUi1t4A",
  "key12": "3idwvJR3HEgSqwUFGARGgjdtEv9Gnd6ydhkt4bHfYA5qZtFsHtDdKJPHXzosvZrEs9xRuVEGP4zkacPU7FJ5zkWJ",
  "key13": "5xesjJuEcB889r8SuSAbE6h3RXbRUKHTMNZqzbWxCkBxc4YCQGmpwTBjjMyMVtRcT4jBkdAT7dT8g2rHbs8K3ku",
  "key14": "2zUG3FAeq3Pvap5TwWABbk4F598vDGzWTxacXyioSKqQZFr1HJZNGmX4CdMjAumc5L1acsSj6pr6PfskyGthkxwh",
  "key15": "4J86QaB7Vyj3FYDFiPVjX4z3TG6yk52dY7MVWMmgiHT3kULqBeuGZ9R8TXNeDh7W2CHLzrC85F3FaLUVxi8GCDZK",
  "key16": "4w5a1BQe9v6xE8Q9yRVdVg3xNXWazhoFRHY59Vz1sV4NdYhzzaMoP4J3MxraJtAzifqn5TdTe6uGYFDDYxyDZUAW",
  "key17": "4kVUy354GJEiCK8nR6TY93SWZXLkSJ1Km2djSHGxPRDFxUuAfE4L3v1TKNQEwWeW736uVLr4A8a1VfqXdn1LZJgj",
  "key18": "CGNhqBGJidnXtkEZ7fyCMbhFZEAcWUy415LUTmBHdBANA9UuwmsorCbZMRHpdkxGcVNoFEn88Dtrdb1VswzHcWc",
  "key19": "4KNx2TANuE65vLQ9xnwgPUqpibtheM9ETsnxbgxsFg95YrbeJngG9JpA11jNp3sbNZPhL12gENvMXe6iJEjKzrXG",
  "key20": "4fEcwKmtER5Lc221zySLR88y7bSEJDUCCpwFwQkMxq1TxrtSCDxq73DXiMZeVGqrwTwCowjEeuqFybu1idVg84dk",
  "key21": "2vvYxJdjuVpo1KvdHD4BNRpC9MmkZ2Si4gMY3tBgi52LeohciYKoMNxEuDawtKVCZyh2Kp5J6oW2HVLRdGLrpxqr",
  "key22": "57MGxCb8oGjboGBmfDT5nU2JVh8Drmxq4zfbxTgfezAyqGNSaQfrjBtKHwTFaLzKf9bEU3cKssLdK8RnQBAX6idF",
  "key23": "f8EhyFLRgcGbLcyCZ9Yf5XMhGktVaE8DtewJ8yA6PUy75mKHMqN7kjYWaMf5PdKZksKyEkAj3aqLUhM911sJH79",
  "key24": "ymT99Bi49ieRGB8LT3fRKqeAU9LNzTdvWXwc6oKsCjiMwjaNn5rpTtRYTkrbdL8wRsD5aEx7PAnXjvcVecFZ2Vm",
  "key25": "3YH6grFsaYtwbtyV4MD77PWrJx131PfsVW6bCVwbe5TNaM1yjsoRUuz13fheK2GgjMLMuzWtoBGFACW3YQWDUCiT",
  "key26": "2frJH2pDUJXWt3HNUPScyrCtHm65CzENKv9J4jjmaDhgLDygy3unBoXeGMDSo2HYxZSHHphNrPezij6bT47fqG6a",
  "key27": "SWSSfKFwp1EDjnwYydLG4G7UKo2BBzSwQRfSywZoFCU2kD8DKCchN7cTSvsqzKSTtvyeVhuACEdZ3DpGaBG6BZK",
  "key28": "3kiDu5KYgEYJKhA96TCvTjX4A1M8V7Lz6rJDHwhWviUgUcRbaoZ2WrBDeoYtD6AfVeeCaVTab7nyHvszQnavN2uG",
  "key29": "271ZYhPzxdBJSckjxJUNeRSaNA4sBsFjoVtgco1VQXrvKwfxJmqULVykwJUqKkvGXrVZDNcYHTMKP4K6zrDQeSQo",
  "key30": "2XiHqYzXTjYPF6fts31yYJ3VMQFhVMBoTGgWVezv4zJCofwmsVv47MTdQfK1n8iBigirtpAE8kHpLYQMsxMHb2dJ",
  "key31": "2Yn4UJD98VQqn5JU1rjQbYGh26KMTv71GyzMCWmf8niQ41GHVUQVVpT44GTwHLXDJNovbxnmGKPwwxc1wBYKD6yj",
  "key32": "4vQXigE2AG9GKyceRERRLybmM19k1BBQ3GMZ2JsA4GGAVB5iqspD8gsjv9fTYmN6DnLUtKktAi3YuYA3Az1PQZbr",
  "key33": "QTC7af3GGRvXJ3Krd4sRPzhf7n1WYjdy7ErYAjm7MUzc1roHgZQxvMMS88kRAr68Y3BmN4FatYzBnu815tY9gs6"
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
