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
    "4PDNT17EmvGJgHc21CfBRQesFQmXqTrEfaQQwrK1NHoJbUTn9KFYCpbLQZh2BSHoHcqqe1MQ6YmBUHKXUxno9YhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DwTer72C3Ted8ZBzLPv7DK37CAHGcm1jVSWRm5Bhd6SBbBbuYSUMAMKLc33h1nGDteirFQCVZBiRAKn1LgYgAmU",
  "key1": "2BvgzSXMjr31xUddTQs9UDmUHjd873h5MrX9bg64xeCLSBH7JiaCN3KeVuQL2FEEoo1GLM7LGtHjarbQhoPZbmZN",
  "key2": "2CM11x7kg55gY7z3wYzaMdsUJBXeWqZvVCg7nzAsWpS62hW1QfwWZRoCBL3GjFHPMn1mVCXJDZxGr6qop16AhQiW",
  "key3": "jMDmtYMCr41ktE8MTV28HS7bzemvddAnXyFK9sPz5kVqUmxoKCHtgEkGFfeEo2Sb5XMecXyZtKv1CpBGQqK6Wri",
  "key4": "3JsMGNiyqd8Me8Tgh95TyPFiYeRP4X6rFkHA9hUpbkhEEVFfQkvQ6oFYFyozQQo5SVQpj83xc25LifVbRndnQbNg",
  "key5": "DJTr1py5AKgqS3dkMn79mkCVH1pEApUjLhpthRGBGLpFJmG8sA1rbcFf28fd39FMURcoNKBjFXVBf7V7YwjmUo5",
  "key6": "2P7z1W6PyrQ7MDsAy4puBu8ctdQ37QLmJ1m3qB3oKRpXqd6HUraxrjzGKi9jn25SYYHwyBzzwaJ9JpuBuwEQVT5X",
  "key7": "2WGC3vcTFyZPJapJ26sRtPoTh3fjCm6ZFmzmZqjfhvc8M6HUEcqXQFtFr7nv5Kzjiwi44Q1PcJ7eXnK9abGjpPvj",
  "key8": "4MA2RpM5L7ezh6SmXyC1J6MKDX4AAzXY7ARsg3ThrLbPQo51a4urzEygHNe6jBxh8yZtdhUsXuJsUJir4k5P72aK",
  "key9": "2doZFdZB4angyaoncMmKGEMRn4pSQjrFrh2z3wCdUug9ytDKznbGs7ucnmuWq3C46cuf8qqEsh95E2tAdcUqu1XZ",
  "key10": "2Vp9dFcRW3tJvQQsjuC2TnNNbBDMKoNqsgs6L7TLDyfwLiLzAXF6NCzeUr8Uu4t3XWDCtNpYau1zeUczndehj4zq",
  "key11": "4Qm2JDgAjkzD6ZhztHL32Kq6enfPGj8VmysL8FHe1pN78KGnC2Q8pB7LdUg4LgsxoreXUAFbY4ZhPb8wnebUPbL4",
  "key12": "5YsHfRLQjPPFLBSx4kDsZNW3hXMCbBr4yMqcqXdJUHWDSzjejPzM4kcLWNWfwggtiezu49xBLuYfB13TBRZ99SZc",
  "key13": "4PshLGpE8WKwWqZND89Y7dTahEn5BHQjRtS23p6Gp87WKYWbXbfaTmXFEKWWVvwwzcgW7o94VCnjSnZFMzhcXRUw",
  "key14": "5kuuJw85Cu8xuAmRDP3S8e5KHv6NXAyDXoo6Ywbu3ViKgaL8CgoJP9Nj5im9txsEWvXc4sfaFWCQHFqUbBckfqGV",
  "key15": "4FqcDbTKvxjVG7RELMSXp8MCTCuGkV1Mg9MBaQxvHuWFNFavA6aEPVL916yXsaZa1PfEMmWU4NK8fkogoe9zFUpc",
  "key16": "3rqbe6BFxUz9pusZAvFAiVwjyEUd2GtHej2KjhkzmHvwYFrJg6s4S7xrbY4sS659fGaeTDY8Qhz4xnPb2iY8B9w5",
  "key17": "5sqv41YuPUeNnLSs9pSxxvxz5MgjkTwNs5RQiqLvnYTE93JdTX1fL2mz68MAzQ8StSN74VhtN3QCe318VUBwh2wd",
  "key18": "5XYw1a6wSVgaWfuecYcHLA4tTgghqPqvHs8Kgn4kP75VUJzMoTVF4w9LC2QXSLSxrQZuj6nQAqLPmFk7icf9S1RH",
  "key19": "3uXzgv5qduy4483PzBJGCn9pMWhQTC5H72fqAWAsuA1hPukch6REXhMpaqJucndQQWtB3ibBWjEofygurXyQdLWH",
  "key20": "34ZbvSAK6PFaieTE9UVqK23YH8kyhGQRDwhz7ErszLLrEmJHReFpXsRFT3HxhN2nTmkKjhDwgWjG1ucTgdyWEDno",
  "key21": "w1wYTX2zHRoztG2HixkbbDiQAXiLREmcBdc1qHfyFjQRrpD86duD2eEqABCJPVVZtPwkB1f9mKes8r46U3bk4Wb",
  "key22": "33pFgpPf621US8ejLn7vu9jWtwy6h738vNTHNM7MmwzNenNt3XHbZSJyHtZLg4JwfYD5jmGC5fzutJpErCkcafe6",
  "key23": "5H4zv3vS4S493J4HB9p45FWiYz3SQ87jyPouaHaKUPAxq5Xaet6y3aUwsM5cQkh7wVuE7qqj4C3zmYEEAAUceH8m",
  "key24": "5gaCteUjEDx3pdrhsoEnQiwwB4Z1a3r2vVay8ToXPSy15GEw4xS6PE4xspNpDxwXKmLEcHqs1Uyxp6DYfJTW41W7",
  "key25": "5AWbMAervEZAR7siJATfLWkyZiH1viFWUCWBPAXiMAtZrP7XivgGb2We2LxHHfEmPBv3ppnhVNSe9mPLSakwaBLH",
  "key26": "XCkdStr41LewMLe4YqFk6nE6cV7CxmBC7r5x6SwMkFcj5CsXmQWiXXqpPrkqpesvUwbfwvR24UGNSNRgX8Auwks",
  "key27": "3XMuypvp25PGej95sPHNjiX8RBWgexKegdgn93UmtNZAoiJiFRauK6g2nUcxERZvXPGerMNDXBYPx8Lqd1heYLq9",
  "key28": "31jTfh34YKy3WDZHKShaQnCAmxyBdqgx4npwKouMF3Jta4x6CAWYVBzM8mzS5RCNG8a2ox9U7rriDoipVGsrWD1C",
  "key29": "2LbW1RUirAx5GWPU33d58u1QhHTBkF9nCq991dso1c3UcSrBhrRtmkSWhMZ543oAcbGu4YLxrX1R4mqkt3jA9rbA",
  "key30": "42SkS23RstHdL4JnuCX27Yq74neL1uUZrNp6Ng3m43LdKX8jPuyugzGFPTzrWjrqieu26SNXvkrkwx16N1RS4x5K",
  "key31": "3YRjq7AwRubaXY3oL6yUxQwj1PMqmAfYALrvZUtVZcg6PEEbomS8XR624QFzAphr5gBdk2yuAd4P8Y889jSzbUV8",
  "key32": "3Y87uh3u44z1TFN3NNfaZ9GjspD71tbgSCzTen1zWVWtoMHgNe8rCVYZoSCp5U2YkNQ1VVAWnhZSQmcv1iPMdxHz",
  "key33": "4KZNbWnEYUZPKRzK2chjBv4Xp5msFgPL4J6T6xspLaCm28HysbQE6s8N1NBxRoaRAmJfNbLAnudoV8rAik4dENQR"
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
