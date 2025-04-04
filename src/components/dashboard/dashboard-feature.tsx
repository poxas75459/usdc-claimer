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
    "5j67v7tDi21adM1eMcUozFuYqV9tdf3fNPn41zgaoyS2QK9zR5h4WcHcg7GoqADYMgiziz6WV4daK9GCUakXac6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmBNg8gSSFMNFb3ABsZraD92oEiRHJNDs8ZESjCGLafFQAZVZUCSvkM8PPSpXx9pBdPSJ7Af8JSvRZdkLgkBihW",
  "key1": "3mGbkdBtWcJVQGBwB6PT242haQefi7xzRaVK8bC2qNukhu9zE8JypZzNJ1cpJjst2yta22CEj6NupGnwsKu9gqcj",
  "key2": "WGNHb8G3Bc6SvTHf8ATXg65kVhSysLVBe3D9Z6Vh3Q4RPCGfznNNhZt2aZfai2eKUMaNkPnbg8fpVg3D1A8isVS",
  "key3": "2k61ANKb442qUhJqSp48RPdgDQR2Cyy6hzT16oaCH8aa9tukC2uPk3d9EVkaXNbccY7HFd2YtrWi4ApCogZmwNbT",
  "key4": "rYFuGd1BK7YBfMG9g3x2UNvxMxmLWQALYheRjJCjnnHdXHRceUAdUPih7kBiKpThJsCa1RTS3PEprBmeKR89jdG",
  "key5": "6Ak6KxnEEFykmp3h715eGwAQKTBBbFRMsTeXanoHPvBAPrrkM4gJicmnGqh23CSsJaa2TeXiexFo15QHKDwayCS",
  "key6": "WGS2jkCnrmueDmEjREHkbFcWsFYEEk3PHEGjkhpdb2CMxxsSeYVNwjQZy7kUMRApJg4rRyUrdw6Y8JTtyFFiLYM",
  "key7": "3gXoebjNL8EKhVAB8B1TzAW4zAvhY2wrHTdkDnUKyTjpqrduw4TJRMwWFivxqWyzX5mufUTNF51jh5NeCAHpSdpJ",
  "key8": "423eu9YxAmWAtxgew2Fk27HhsQZVYnMp7rLMGCrv6xLA3JTr82B7CvEe4Tk86jsgHQt8aFjD5kHxmgA8tsjmjLiT",
  "key9": "4muS4S9p1tqdFNpn5EdtjYePonW7AtuRXjFungW1YtKm4x6o5Akcr7FZtLdPVoqgwGMLP6Pae4Z8chTxBAuXrH2x",
  "key10": "2CMVwLnujDHpMeU9U2xcBuFxapsyrUwGy5W18RB1E81hQ7u1PJxdRAHeHUAuyxVDWjENfhaKpnMfwPgKkLK6RJVM",
  "key11": "3ffL2nZZpNCrfdDXYc6iAssJpYGi2TeoNDUhS8a9NpRSXAdPGqekiDawq2D9ny98ATiN8qWaH4hSqqt5FxqyGwgo",
  "key12": "4w5aEwF3D1Gn6svtHe2Mku3EYXyhcsW49MwYUCrwTzxFm8g3Xuaf9kVKF7ujVhbVyaUms3c1GSYG2ZYt6DUu3BBo",
  "key13": "638aqgLx8HRxANhViFp7E8SDvS9CTjB4qTpudR8RyFVFpju2soBeeZ7bPER658JuSGU2NvDrHZTUWNQBzTwX1rqg",
  "key14": "5y76d4L3JdUyUasBaPQDJF6Caku8QM4uZJWsHHjffEYSzw5ZJJt36pC7G5jMpWTXfzaUZjonq29F7FJgyKYTDixw",
  "key15": "4VB4xjUt3M7iLbeAKCJ9d2Uytoqi6iZHawRzBSQPspjrSW4GBfKYonNFr8MAMrryFMGgnHStMQocWZysNnXkgyuq",
  "key16": "xQ29cQVcWsoWDG7U94iYUoipR1HZeQGE4qiKnnSf25t9s2PZfX3BD2v3mRanj8bzjmtGi7RUMNKxfJYdQWMVugu",
  "key17": "2kbBA5cmrd2D1xptAxBTPBejy4pympShRyNyCRyTb2jKYFWbtFxBwH2bFzAGRf3jA1XSGJwdpUnswPbU3bVE7hiJ",
  "key18": "5ef9GboXHKNmivRYiUYHGpdDB65SZofBxvYGw5RJRSG9WgLb2gFp8X9JCiGkECNxZF55zsihrfHsyhQVfjYEw1bb",
  "key19": "4FJQAbNLuVEkeEwytYo2eZA2sxkEKrRHmo8TJiYCUPHr31hQ8xjLrtzRMRMxcTSrt3iEz4AktVf7R36myzmUMf8q",
  "key20": "3d6aGeoCNV7biDCvQvngQ5Qq6cKaqXhUmjeMHkYUVhFMuRauqfJJakce8aBExw58fVhAEn4VkZyspwN3CrMRHK6T",
  "key21": "263GfYJdipiDvVNTpKXPcPnAYj9kLxzsHid4bBnuKJ3PucQZngiYm7obYyHU8de9cxXaWaKafneiRp3gzVKppyQS",
  "key22": "3UpfpFjErErwnvtxMwmFwByXXW5xBYm1GwMG6dGwH7MV6q2PF7UFFj2v6Lim9rtaDtibLAfg1X4RpTfWJWKycEnZ",
  "key23": "xeAzysmARweDYTJM4YSYvBFSCLHSFu1RMbqGj64j7TU8tRxZjCV4jBNsQbs6h4bDBL6LTVtKC4iHjx2NQbXnEAt",
  "key24": "4BtUHJak43UinUGQfekwneGKKxRyiLHjZzWVdvcZzh4sj32t4TqJPvfnZmrVaD2azK9am8AcYdonxk6nFR555mTd",
  "key25": "4rD7ZU6g8Zd8RqyUzRsGm2dUGsfAtB5Y5yB9MrybkEVrLSGA94SAWnpvQrapVXce1NCBheQFYnc3VfXpApCvnKSt",
  "key26": "3Gp4j5yuKo3hnnHkC5BU7ZkKKDdrE3uGfHciXUqVsr6HvEbjXR8WTTeeTcv3gnnUrCD7dGFKe8WgkGaUeKDQ5w1H"
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
