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
    "MnWaMft254M72BDU3YSsAUPhsef8f99XBXZQtGxJ2zvV5Rm7q9ggN7Kr1pMBFgZoXhKHLFTcbvVTTZjfH6DvEd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDqNawFLVZBLB1bf774ui8QfWSjGLuqRa5DQM9Naw4QVgcjXRM3TTF8uyTocsLUUhibjXY8x2MQNaxMEGk2g3Ag",
  "key1": "39xNuV2gKnb63YWieKbSQpVp5KFgk2mTY3ksmqWWpoRj3EjgQX39EWWs8Ta6kv9jtTLTX5UCGmMd5BVX5Ngseo54",
  "key2": "3pw4ZLdwus5CDPcaym5RA3mDzNA9MXYZNhmy9uCDpMiqNsAXx3QL5rDH4MWX8fYentNSXhM4R3s6AzH78vWssnN1",
  "key3": "2hjw8RLtjq88SZou4zHcVjg7D7vFfA48M53NC3YbkNPHDanjGSaZb3RLjTYo6e1JcDvV1Cypv9TxrvpryKnsJ3Uw",
  "key4": "2ADyybgnkNxBS8P564FHaoirzXWmDEdJCaPYTNczWLZqB46Xg63bkRXtnfJe8D4QLPVHLeJVpcquf8wokwcFNc4i",
  "key5": "464V1G7CkVE1ehS6g35EpS52giiUc7Z9EasvEvHNUwE7ECauZvg3Txvi78GzCiBA3LTENGPspxxxb9bnZCrGRWkh",
  "key6": "5G3TMzLMwoXAjNB8G7HyLzHfErRFHWhgMXK9fFSM5ECRWhHsQDsQw8UWmC3SCJ1shLgPpZFxzRLGCWKKF8zxcv71",
  "key7": "2oY5PdUUtoQeuvKeHUHUSgjtLSwyFjm4T6gRtjdy1iUjHfeW45pm6Z4YYHZypQSkZotsVmty8ca7H9me3AnjpHtD",
  "key8": "2vXjtPzpPUtee5MDTTGNvF4ymvUBWmjVd1dqL8i9WyMowNYNsnWn5HpNqXWTy1Nun8eHrSDy546S9zaDKRgu8D9B",
  "key9": "67aqcJCuGtoPXgYRBmouoCsrFqmqy9ECm22eLDrE8dDcXYe9tHx1gguLg5aKiM6wkfHsxv8kmvuhRGSgxvsxG1bp",
  "key10": "3i2otxzoKVXTugv8q7k4S8LUC3EqYdJHFuk4UGShSBitJvx6uJm8vYHLLzgNRPjiyvd7Z7KPa1jzYXzGKFmmhhu5",
  "key11": "5mPbHQii8tVYNnAJ6tXdRxxa2CaSnqSuBirTCnp4LKJ3nA4ny5TD14oZ3DbgYNtZCS2XcCRj7hPihqixa5sb8ssD",
  "key12": "5oWBoP37NptwXmK5xSAfigVk6eGvymp9FaEhEXakvmB6RMAJUs76dTUtqD3zWucXyGVPZ4tt825QQUDgTiZcjeMB",
  "key13": "2Qv7x2MDtBGdiWZZkd3R89GwbiFjN2baCVnhNd4awGaUtF5T8wwiLbLmRPchacanSv6kDkLEY4LMT8rdzcspTAb7",
  "key14": "57J436qPutGdggq5MjJ22VBSqhafi8sin2yVAGTkcbFbRmAKwpkvbcSfukDSXsVwtN42ekkdjvWyRu1k6Lrvf4KZ",
  "key15": "2AYKjrQ2vX4cYu534k7QKSSZjhjrMGRaX9V8sgfp6oN1UQUDyKzkFR2ar6zkTsUXP776vs97RxZfTsnApqVUtw1W",
  "key16": "531D1q3MfMRcw88f4GVabwywF3b5Uj7rkRS5KnKXTHQWRdQCo3xcnMrbGEMcXiDm8oD6Aq8iSWXTWjzCHfKibxp8",
  "key17": "96aJttZgAfDHnNKRmjxPmzgGXiygoUH8zw1kD2k77BvGFcceSg6HsMHWwKvcegqm9h3FRsNqj7Pf8x3EBZFdwJi",
  "key18": "5fUNPcLfyXkCWgkCwjPM4i1b9FzjNR2xSt8qu5dvQMMVUaE5VxHNeqeh34gW8kaq2Y8SV1Wwhk83xtEYYB7heQQf",
  "key19": "2JKdNJbpKESPL1yysZ2XmFEB9nR2RYoK7DSRzSXnqw5D4tvkBTMXyDN8mSYWWAdeFrLEx2s6dffZXvXHx61exPyF",
  "key20": "21AKKNYp1eEa7NWTRRhNap8SCT1dgK7opXumaw6biMMCqmGHHzsNvz2TJJuQEWEwqQVZY5kQzmHn35VjpQVAxgFC",
  "key21": "4JTNT7hZskvyAr812NzMKsVJh1SovNzGGcZYCVC4YWSenCmRCYdbSQ48PK8tyFre46atHCN9K95meGerVBe2oy8N",
  "key22": "2pgZ8QbkSyYgjZaoAzTcG9jTD3DRPaE8mdEsuy2rK3uHJZGX8s2Y8WVK6gdqf6rk5Av66jKqQksZ85HtkLdLcrA8",
  "key23": "3yYvqdPaTtgwJrfDoLyf9FRjT3oMN6Eh3ocvBDdRaDrAU97DWWHkk83M1JyqwjcoCk1q66UVVhTkMfd2HXu1EYQv",
  "key24": "4UXXkG2eM4zGrTDTLJo4nudfAaFXL4zq8UKJQaxg7hat2d8EqmppZG6E3HLUJcU152AwwLEXvmxnxN4AhFrZbGj8",
  "key25": "5xHutYoL21sac3LjvRkw2mpFdUZY6SqbDx2x2AXUvXSv2T7GCY8w1nUiCmJybbFi1Hphy1z2e1MxJS6iNvzqvE8n",
  "key26": "3no14G7mpYYw76iAwxJhG7JcQZu9m274w2ZpsxNjsBWLT74ecAsizBx6Ug6zRyTwjbpGhGnhTo3NhF79zsDmmPbL",
  "key27": "DeobAQwCYMig1wipRHxaPMomESNZZExPAKdeQHTNKFGQYEJbQMe3Wr4Yh9uqpqWcD4s4kdGjEAKughUyBsYE89C",
  "key28": "DzvPiCTyCMuXwSm2hNb7N5uFcPfVfhEqLcBWUxF7FTwJhcwSdAz66t8LjZN8EG1RWjFoLjngWi8D5swqVe8jNFj",
  "key29": "ykxDqjVde1RkiKbpfgQRcrDHd9xJbC79x5VHWU1pDKSEejfFtdHC6uTdzbwADEqy8oQPeZEdN1dpegyEVdVSYDK",
  "key30": "3BrRP3MFoPLHqwbZVr11po9AHRTpBd9tZrqNR5EhfpSb9g9TpzAsM37VVEkRACyXv4minvA4C5re21sNMpzTFY1H",
  "key31": "2gZJg3VYS9VvyGV7Ys3deY61jCfDhMHWrcPt3icXsvqtC9V8esbMecJs1RNFfV4KfdNfCJZdLpburRLpcDjYTyP2",
  "key32": "2gp1fvHPv7bF3Y4LYHauP5kBQB66MCx42TBdPRm8jVkpTVsCzRcTKr7h98LxEv4u9Q4EVZhoUPiKAYaQVaWsVxcM",
  "key33": "WN4gB6VB9L2zofqn3iUkUUbMr32UTFRDPDMDHXe5S9wGX9FWSXkjuMDsmyDvfqYm79xAk5j8voN44BjZY6EpFkj",
  "key34": "3A7G6L6GnTov1reY99TcrnH1wa8eC63U61QkvswmyskddDarTF8kTvyfPYAR4VfEcpNuoaQPGAwApABcYjhxQZ2h",
  "key35": "2wRHHifEqp4bZEVc4hCnmjQuowznckSnNhLTY7qbB94ydibhoP4e2Ypgw8bPvG4UJRq7Vm38hSEVNrnNDzNSdoVQ",
  "key36": "2xcVJk2qpGQZT3gwL8PSbXG3rnCvK4Luoqs1F1RJGVeZtP9Ka9wQy8SVHqihP7QbxFam1XgatCSL3A1niZgyr3aA",
  "key37": "5dnQEjAFYih5GrAntASUsJfP9FPkDwacTdfDLXQGj867rSmkptUZJCpzq5dWUzhmEkZxUgeTmZHNUUbWPBCf5CKZ",
  "key38": "4jk7drjaC8ZvZCgaYPcNmRMvmc2XaNwEMR8YvqPtQB97i7mn4acwdzmeKfmcyoywGbjumpojprDSnpC5Y1YrRvfN",
  "key39": "2m1tKwv4Lb6u31kpXuVE123SgJSVjAzDVrwDgrvMw6t4NrYHA2V5iLizd4DcKC81rimqYEym2eADmajZtxxK2KMW",
  "key40": "3XuNxDwLrVVoMN7Cph43SLHSZDPpHGTGxfyVCLyzi9BhHFEAydNyxH2ypWreAotzWit6q489xFpVjNAv3NAjJE7N",
  "key41": "2k2kwdkkZy8WGvFWm4tq7Df6nF1xzhgBJHGfXL2jS2DvZwHr255hEGVeLF4HRWyDkU6KPw7mTp7pz5WZKG78xUoM",
  "key42": "3oYzKxFHbqVxW5ASGH92U7AA9kE1AnBwKMrJsdmeL3rWCmzp4ge6496hq3hJc6EksBRGd2cGAKBXtnE3d931gSG4"
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
