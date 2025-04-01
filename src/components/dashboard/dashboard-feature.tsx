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
    "2phsAxZmiZYjmDZJvJ7k1m3DckKHYLAnGApH9ZgsJcdkU5gXcHsXvE17d8pftKrMAbd1rLqxXaroapN5pQAK1sBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6j8ABn8YR85RwdhfcixXik5GWdduHZAfV6daLStNvGodFqTrEnjb9HR6MhMjZwJJreHbPkZwaG6NgQ4zFaTvEe",
  "key1": "2VAEEsEMCYYGayqDU4uXvLJWdWagiNw7WhECHAMuD8ytEXaVRwVWnR7mEDqbZcaEJt4vQYZXncrxvw9cyGgWaiz8",
  "key2": "5sVSVdhL17Xj2aTcsdi1XRcXmSodvyG8rt7QrWZEeADTLKZKSzBkkt2MPZL1tY8fqSS76dkuYg3U3Jy7oDriUhuz",
  "key3": "5MTx8LkzKk68xyiabQdxcydc6k8exMjDmFK7jS6TYKwPfXPRvk4KVVDnuS9zJrs2LtdiemdekwXSMWGdGBLi4vSf",
  "key4": "5RM1k9wjC46HCTLiPR6A62RT1sLHPMhd3hGSg9hs14PTyZ3HVMNZhCxCePTA7RjLjHYnpkfmi5sZh8oYqvvrgn8g",
  "key5": "4nmjQPvQKqW8gMKs7oT4yjadXf6iAMdtpFL15v8YxsQwVPbqhUUEg5qjmqPVe4rj5sHey4LbYfmFirj95389w9qe",
  "key6": "TaeNi9JsrRYq215Eumg8CSHuudpem5P4br7RvBB84UkQ4D1LAvHDg6YM9dk5AvuLcdQ2kbb2FPzXE8Tp6Wq9WsH",
  "key7": "AckBqZRtSgXLeEgmcvU5oPXWJCkh5SJAkxiEoYQGvvUsRiwiF1VvPtGnC5D7kjh43XUvL6f46QGgfuQhqz8xZp7",
  "key8": "2pgRuTEYiFqvmMrJDdmDK7iVYH3evE6KiQjESb3GNJPNMNoRbskJB4rMATUoJe3DsYrPFP8ZGvLwqr7ykEQ6E5L6",
  "key9": "SHjDCokQXwVjJBPWtfD1Qmvj6ytA7YoRrTJGQbDhnuPv4Jbz8LvwPJX7632aRQFtHzvqSpmrGk8U8tbxzDnYeUz",
  "key10": "5FqLFPKDzvsyFsqN9nLr3EzcX495y29Eq7fTiTiRLbEtYYC7r69QumekKQ5qSq4W2zSX5mAvNhBpPksgdAR27BmP",
  "key11": "4r1b59GWJgUKxj2bAtLstGzN8LhaoKXshxLVENtsgyx7Matei4okys95mTLkZ1KrBM3RYtSSMPhAuJ4rA72hwFYV",
  "key12": "3os392Xx3aXDmRMPTYFg3TVReia8TLZYh993bAXSywh7ndxY3Z1j3rP14jcmKRigS6PARqSpu3P13aPbx7R7pw4G",
  "key13": "2Hr4VVGsQM7EDv8ifcBEcTpKjLaBSk9EQoe5hy9nkBtrGd4bvjSzdYaaXX5qtXQcaUeVsUTWCc4bX9BsWr6xQpE1",
  "key14": "45D9VUu5UsfVZ2Zs835Jp2ynbVB27to3JH3FU1rP6GwWCdNFCXLzYgPURwvB7SSPBXDQkSqCAtdmdugU9LeAMuXt",
  "key15": "4rqUqGpgAvDdm1RnLAfs4i8mjL5vXUVnrGpdAGqUemWBunkCkk4YU6xoXLG4xEV3xwZuH1ja95jEHSGoLUcQptqR",
  "key16": "LFnTdB438WMmapgeCVoHHBVgb1QCtTbwo3n51kxZBrDz1s4XrbKJtZ7kjPEWTHSd5j8tSE7Zp6J8GXHqK2UqEQ4",
  "key17": "qr3vi5uEqhr26bgHZx84SPcfQKmJjKzGPBTUL8V6jjMHJhCPvxmiwv1YAsU5hxpz1bKoGrJrateUnhMQtaaj9Xd",
  "key18": "3K1q97hqEgxXCcVoKjFyUyxGnewmSMz2zuU7a429N2PpRH4Z9Qf7bSjHf4soteKDPHT7b8B1sN4CVuRjHHAaBsKV",
  "key19": "4wyqTpRMMHQwqYYsccHPoMht8fZXad3QFTf6dzq1vujnypZMbo3c6B19hDFMnyZnVypKGfVfedVzgXm5V1WpK5KD",
  "key20": "5QDbdsYDxbJoYaqEWvddnf1GbNwzqRT8HTSXLmyVqa1ZofHPcz7pgb3iUErfgKQ8gFa4X66sVGrR9YTa45eT6FWC",
  "key21": "29EyAP4tscYAJ1uBA48FiwGZvb1gV4McdX9v99NRf7Hyx7D4Xhq3isUXWpPXbHPbSU2rK2kyfHHrcsamv5pi4jYG",
  "key22": "4d9cKrtieEqgFi8yutBnZ3HSLRBTmBGYsMpgVzRNj1QrqbVnfCtLRNXw9MiJ1PKmJ2YwJ9rwN5NEDqeLAmb5quPr",
  "key23": "5XCQCkaXYWgzv4DhNBeYdepgeJGESBggn8w176is3jCkLCq4JUr9WkpvbR9yd2efDfdTiQCgz4n1RNweW91eZ5ib",
  "key24": "5qiQuygcB3NR2ECVDJbjXx9V6RYwVkefD6khJJgvuUKytA8Pv11iicctU2UCBnTjM9YwuCM5wySPrZ3hA7BKyrxr",
  "key25": "4Ex9iSATZs5QEYS1vEsQ1f2kEa2VofBQA75KtU1DPu76pnxggV85JikKP5uhwx9ip8Wryg9wKXwCuhhZERfFVtw7",
  "key26": "Wk1dXgDudqKuFu6oS6t71jAYy9feLCCsSiyLtDRaSj8jTKHsgbK3pGzFrQhpabAVnuGXAyVr4meDD2dVvjM9qea",
  "key27": "51LdBQK7tCiSAW8h3QwXoZrLkQJpgFsNfLgbthpqNQRCgfJhe55hj9DuJ8FuHoJRdLFpVRMZsHQPqcygKhhHezS7",
  "key28": "22DTuV2ZsuWMfA9mywTmYHN3x7i9faCnqVbqapbXcAdYSmM793Y6cpqEpwEHwvcWxHDVgc3jcAEXpv5pKL5fgJUr",
  "key29": "31farrjCw17PRP5xKN6Bh9FneVc93fLpvG89xGobU5t36ai2RbLTpsnWvBKboHYEs2xAjPFZcHVrLWJ6NLruYgEE",
  "key30": "8aTJjXdnhCJiH3exaAzjZNA9HS5EgpfLHE33X5Y7AnpdfSq3WGnR6x5771oUmbKSg16AKtCkTZKFtJ3UxcTEoi7"
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
