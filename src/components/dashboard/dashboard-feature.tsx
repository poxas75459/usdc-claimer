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
    "5Af4epM2TAsmvcwnfNC8Nsf7veDSN6ePRC16B6VxtCP2X1m7i1beqHPZMz2FrSJTQc6YFZKb1kucEeCkyzjzREVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49hydTRvurFiyeJPtPMcJ84iNBX11PPL6CGU2xM4s4MYQfBou3AkFHNz9My6xhxLdNpTWqVjg69qkuDYTsYFkSAB",
  "key1": "RHKhAgt6BECYeYQws81xZxY1auYquMz3m2NMnnqzmehxipCNPDZe8fpccXkqNTPLKyAcrstVCB9FRHq7XPstsHw",
  "key2": "4WVmqAedz2RKD77vpgKFXZCPSvhExb9VqUEVsgkQ3kXx5QmTuyw726BdfyydMqwDpDyo9xaMxs32xZegAtw2xzF8",
  "key3": "5hVbqMbK4bkYRHd6iEtJciiHLDoecnkR5sXznNYhdFL4yG9T2DXVF4n93ta2XqCfSiHWxHKsNhssidXFpAJd91eU",
  "key4": "4oM656wEo66addNEq13hAiZSoEVdw1h8Y34GL9Q6YoDftpNHHVAKLj6dK7f7kAphKk45TiTjUaDfiJnZrTyAnWdG",
  "key5": "2nHa38QKNEtpRLm2SqzkCe9Lvm7kiFzoXsYBrTiaB1sohXXBwHtKkXJjzjKcXCHnNk4pHQsPdVvjrCLZTUmCSLjf",
  "key6": "3rcij81g35MLmo2ifBy8DGavy6z3gUMak2gNpbbHzUf4gyqbm7sHqY65F7DCSxkfcKk7PQFCxbR5A5LjpZeipzn",
  "key7": "nETSGf2JPt18g6Fw8LFbgLKQg6Spi4yD2ieA97JZ32D53sa9aXBaTS6Tpz6KEgSxbqmTLQXNjK75aCkKSVZBczK",
  "key8": "oBH289riRUt6e7LXBntDgZYCrUsyp7hD5KQ5dKUwpdX2ApVa6Mitq3E5rH81YxYQBgJf6Y9zXuHKdQpZy71dvF5",
  "key9": "2VxhyGVGCbr4z8BmmDzr1S3WCsQvaEHvoUYuKdCvWyyr1SWJKVwNUeojJhPdoNgwGYBj1htMxaBDAqzHHh5QSxmD",
  "key10": "FWCe1jqpqPoJsgeGr13cEaK7K23eHKDQG37xoppy9ufopp4gxQewdaVwBNm7x3cEjn4oifk8ATcFawC41Sp5e9z",
  "key11": "4kKAVP2RYfTDy4CK6cTQRMJ5rnepRCNTYJyNcbBpsFp6mTqVnvhdeDvtoowFmp4ivaXniVF21PZ1gEmSKXShghgq",
  "key12": "2GMZxEjqvAQWXbWcsAfWFTTuQikAqmopU64Qie14Px5EjBp7PrhC47vn7ksfKYdfVSgnZk9E6rqAbSinCaX8Kwv7",
  "key13": "4Sv4k8HhPy7VMJY3YYbhRd63BzGCGSV4GZcQ58gk7dNtqQjjbSod9JL84urh618v2sVG9D5yFyST5xtYS8FJYjQK",
  "key14": "sM8tWBiWr6CXB9z7Vnt8YGnzb28yEj4u8VDAhibS3yMwXmwnfJKrQAtRJmZNw1JWoCk9kG9pj6XupHxWPekERZn",
  "key15": "2oyGC6gonXPc8qnD4B6ai2dMGYAMWk1NsHKFnFaY1hwbnSb2edjMhRn1fu3cZDVB6PGfMbQ7E7xF5hhTnzzFuxxw",
  "key16": "Nuzx9SXDVE2qWxxkgYFJN9pQVmDr3DCSoZhcgFKZMp24ZyKf7xGtLS624rfvc3h18cQZYHzigF5ph6fwtLAGhsM",
  "key17": "29pJuVRR6BDmFADdBg6sMrePYg4QAfiejPbxBkSeBCWvinmvSnTPj8Askq8kYAXbmVLLkyKxuD7STzXqbPPTGFkt",
  "key18": "zw8kP9TKahig8xXJYtB73jLuW63KUssCZ3FaPgQQpxAb4WXyDgycEemDV3r7Dp1B2yQY8NnXaVme9EzN8u9hXgo",
  "key19": "LZgCHEbSD2j8KAvm6yNiPh5H83bhg9PJFXLUa1CtTmhY9rcWN6FAibbSR1xNUfrmjN1NHFkoCFyiv5CBxG89VMb",
  "key20": "31UPtJUdAuMCc1qUE6Apd2UKHek2S6Xz9tXPhZjapST5BGuGavky9JNAT2nZhwhzoLr4Yn12tdgtboGvXmPkguiP",
  "key21": "2buyC5gCYRKb78Kuj34YbiWJ8wg6ke2AFqzksdUCwy78jUFQoUiK3HjBPxZuJSbH6w6aj99cJ9ge2MYUvPXf7tes",
  "key22": "5GjRfyZhF2qZTqpv2wKVgeJKraypcP2bRSoNgRE1oLPA34Vn1arEMZtJZ91dPU2VN5XJ6nsuVPMJtTdHvEgrEff2",
  "key23": "4MvCiAn49jb5BrYi3F88CkaucjvPEe545CsyRzshLdAvf2yU427RQjZp151SCh9TJCXEWc8RUN4svV96LvNe4s9c",
  "key24": "Jmo86uxnwgVzRbv3wceyXUtXZFsrznk1scWVG4zESeWupNErZyAMALhyNU7gWjjsFyrgtUu7Ge4gznTutWs6n1y",
  "key25": "5HngEZLvsg68RDoMaw6ySCarQVVnCQ45ShxCqzjEVg99rc4NHzKRpUEfBVmDQDMJVegKgcP5DWZXPLnxrXbwG9V",
  "key26": "5R7M8hjixSVGQ46bZKL2WcyeBgqR4zR6PLELKxEUaJed8gPZ1ijNxjMyn777MbDTfnqqNEU9nP34fLsFwARJkFAf",
  "key27": "4tweWXd1hR7Rt6B3hfYdh9v4NrnTCWA1S1Aa6rnCa8oFTW6UA3Z1hnV5w4zbKDMk9a5TkVqcEtVbdps7Tphhgxv2",
  "key28": "VvGZu9diEV3sLyc6tZERKLgmr7JwMozSWHX9PRRpm8sFRGUPCFPbiYgYEDYQPnh5LBmnuJiuUP5381USRt6nSqg",
  "key29": "2UG4r59Vj1B3EKAFiodcSZWEGxuPK6WHRZRDUNEm8hr7ic3uWfrMhRzGAm8ABLbYKZDMwg3RSTJ4znndSmVq9EtH",
  "key30": "23eTAxejZspBRMbTN1R7z2dDvoqS9VpZCyirHeDGg9UaXH49r35oynUVUFscBR34u7iztNRw76ySxA63Cq3nGkpY",
  "key31": "4cymEWem9ZNtZ9iJi9gTSAbbUjmyvFmB5WdN9u1T8y2iJDQCRqp78136XuQuMLrYeVGsZhAnu5uNXpawtQ72AUkB",
  "key32": "RQycHLYA7cbWrdr7qBCwsGLGF2yYXpNXfo5PxZJvAn2wAojoPPhAifCi4H7B7Y1mTRZzHZ8zsEtxmX9BRZezG5K",
  "key33": "2DUq5s3bFQ7quckucGgcTZ4nCUBsF9XB4biDfnBTHujN45ZxP7Wm274dMwzxTfpg65KF85qwkZZYW7AgupvVsa3J",
  "key34": "4vdvXeTX8QFanbjetghqyxfEjRapvuUDpYCLULSZsKLEHWmY9sK4Pbo4Z8ebCuCkAMG5jn4vsWKX2SoySdxEQpnE",
  "key35": "5DVyHhvuRR8pCM1ckCikmaZQtTiLDmGro8bEZojHAQt9oXxposGjmuMmuDd924d8q8dyh5EA89jX6rqsYtxNnkbv"
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
