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
    "yVP8Smfvhei2GPDaL6h5pSwcbrPcWkHe8wZp5L3GkYs1LPei6zjP83EEWfLJfp5xUu5QSqBxcgp84BhbH58nzGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2orBUK7qiTZf7n7vUdGwv7cU2Rjw2eXVmuasFuqTxbpNq4p8j8MmqCffbB5byDrQDceKbxZH3Tsy3nNjbty1nm",
  "key1": "3JrtBN8gjVStxEXqvuxJ3C9KB9aCLh144MezHzqBxwCPPosg3zA6N2hTtXutZEv46pAq8dhFuL8oFCqiYu6JEKUT",
  "key2": "29BCqtYKFWqxuWBqvsKZvUUQdpo2BAWPMP4FsHAwxKrGSyvw3z559i9vpEHPAJMTMU9kmeYVA9KEjjzu1CnuaFpG",
  "key3": "5c5nwzRofqRsW6j2ZvCnhMJVvimmxZBGcJQ9wi47PiBfZTxcB1BqXesnPfkrj3ngYMx96SEME7gh8Eu684k3J8kP",
  "key4": "2gjpRLiaSyhup3eqkczPYe9GMwxAP79efEJDY5pbkq4pEuoUBjWtJQ788c1oHbwbibtVehPhaqSwE29XxR1YSAqr",
  "key5": "5kWtZrBtRM6gf3Z7MVF2JV355kDDMwLiF6DR7BBBQLktanFtQPRFHZFTammexWjPoUGm2PiZ4tqrcgMLVX5iuqc5",
  "key6": "3ENKLFFaJyqBFoygbiw43fHYfzGbgyZANVDCLn2vZiFxrH2obTC4dXLUv57R67ztvwF8SH6vzjymHecVvC2AiHpU",
  "key7": "2smuA9Thj2N5mcPP93Mrp45xkRG545eLzicswPjuuVCrk1fAX39fPhm7tSezGS3ebWnVb4RQZbDnurZtDxRTvW1G",
  "key8": "48dYebqwhCg1YKe4iLCTUMAToeE94hFH3rVnPJD3c8wDsVQMKrQY3qEuuCqZz8F2ijhXFz9hshs9SNXajnE7jRAF",
  "key9": "4dXN5Gq9vb4TLZpxCv8XwAD64kXWgRYvAmEMDuRS4GJK75qqMWkNdne9rHkHS9kePVDLpvaWa5ZkEPfhkQHtfvUQ",
  "key10": "4yBcrpFzABEw7xwBnWHcBicAJx7rnhVvEEX9U1LCpQ2Dsz8ZZBuDwoPV8SdmLDy3DD62WYzogkv1Ko4o2KHwR3Li",
  "key11": "mAFyxQ9nemZkgsW7tuMLT6aekx627bSVKumpx6eYrCf4f8QTDYp5jvCG3ApmQBRrhGoqo7qhW3xWX9aAnq6kLK3",
  "key12": "FETwUbABno1UnbkdgADU7eSqfwxR9CTgHob96CbC2PGvuoDHGd3G5Mf6qSmsWF5MLx2FKyAqSujexcwzviSdAxX",
  "key13": "3iy88NYaPqoZb7EBbwonv9aPFcaY9XY69ySVESZYSZdFrgPDHa9s9zQwzxAr176bDPGVhSrcWo8bM6CwrKUehXGS",
  "key14": "46Hjc3MyFfRPzwHeYz5QkzqURtS2z4C3h7jpV7XVq8n2qDK1ZdXDQfdbvdFZeomHztg5zbWZrxmFM5GhHoJAwc4C",
  "key15": "P7dQ3Nb1iJnUJqUk4iNN9LQWkwfxQf5wYM6P8R1K2KEAtzBsiEKWXtbyuWb6Zs6k1GQVRGmQ1F1E5xWxJwRAKyF",
  "key16": "R3C4xYus5rwuzuz4zAApZpMnjL6QtsqGFcrk6SKetXq91z9GLcs1tF9HfeS8bwjAMa1UKG15LSLBf1vvYBwa2NX",
  "key17": "2WYw9MucbTixr8eAkphEdsHRnUNmGkosU9RaNUwaoLaWA5FqwKYFL6X1u9NefRpgWWGSUQqoXnrPvq9Hu5Vzvy5Q",
  "key18": "2WCuGCpfjXTHqy2PL2v2SZkDsV6jXeoDFA8xRyxtYz3hS92tAuDLVph47Uo7EQxp6rEHCsLuNbfPweQUYDxcTznQ",
  "key19": "5uKmXbyDGwUghtuPAsXFoEtEkj9xRexenMh68hvcfz5hPSo5g3Krh9avk2jhqKC537oWkMqNzkRxD9h1zExFBUaa",
  "key20": "5bchx3uUv9VEnqYRvf4Gwpn8tpeAaurfdDs28XBdpjp9hjw4eWFoX1u9hasqgwQ6jpD1KMeZ1Pfvd9QCQjjksEA7",
  "key21": "47zr6jaTmqYWRBPqgDi5KnXhhxNrpYCpqnwnbeH1rtNZk6UP5zEdLUJDLiRovLRfqpt5JRV9iKUFaBVZqPq5WtGy",
  "key22": "2jA8PWPrzYVtbkj5rW96eiSwE2oQ3mtqpxeFBgMWU57m5c5VWXBthVZck6DX6dpg2p6gEWw9TERcnbGKcdpFz1ZK",
  "key23": "5A9ABAETqhhkGxTSLMk4gFdnE67jbPiMVSDoUc4NKxm7qhLTjpEGzma6YP7MRKkbPLyZhEGbbqEM481AZvbJmtrk",
  "key24": "2fJWj7CXYpK71VpmSzY8UT24EzW6K9MPEs5PMU6Jimu4hi6rNhXveDarPgSb8aHbAEBuft9NHVZ73hSi3ZgiyZab",
  "key25": "2nt5BkEdNh6kzANKwDnzGYo7vNu2rgp56BipfR9XdMVsx94xZVyi5e8EzjejkQrAwGEGsy9UuYzLkmcgtbr3xT98",
  "key26": "5D2XysamS7BbE4hz8hNDAbadw8fgamTqGS6kr7XnQFmaYbHMXMhoqCKRpzNapRZ3sqWrB8p7oHYsDbVD47ikwPX7",
  "key27": "5aWXhUL9sE2r6Hm9RwAjkx5xsGEu5QVxh7j3mHG7HYq9L97VFZH73s25RUfQtDCWty9s9UzZd1bt9nRKEyLFjhUG",
  "key28": "4LqZpcSMb6QrX1XeenNyaMJaNpXbGwqKzrDmFTh3NSm8Yw5VcjyVEDBpJeViyHEr6LTRFYzR8FJNakg4RR9tHmDm",
  "key29": "2Ura5Mufj96kRPovSF9snhzgN3Gx1vN1jAPQj7T7jyzxz8v15nVWL3DGBbMy4aEj6U9c2vBD1yRN65MtUnhjvDBz",
  "key30": "Do2tL8tpNEVnbawAWgiLwpEFRodw3YZUjH3uAxh14gRY6wYYJWjXXV2fDoXVnQ61v4FbP3gEfvATp2WFxJeDVTU"
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
