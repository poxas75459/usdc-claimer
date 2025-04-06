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
    "3D3MoBHMC4PswRm8Vns9M8ya1pVSPdkbiacSr5STPQaLq8rZDFYpejwKZQquDjikZrgZ15sjfUfvxwL5gcWCUea3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ioaEHR1vG5QxvuLYVSF7HssJFjxM47XLyZakcwpKT7NhgGD2S5an5Bjh3mLZm5RaHoogzy7VfrVmQoAbkyfKHff",
  "key1": "qf4PoJ2BSzoy4cGJyX2TfZJ5Zo3RqR7TL1viijAVkFAamQTCbznPq6GEcGE9g9NF5Vd4U54j6CN291LKJC54LyB",
  "key2": "3CQqxZ8d7ipL6tq62r5SQLfg1Td1yFXyxsRiNpPVs57yyo2XVWzrD8VXqGVAx62ZVdTspbTNiS6Xq5JrWVU7fkD9",
  "key3": "4G5FB4DkJ2uKX5UT2ZZLmgXCNFHdqVzhYdAj6pfd1fFPgAz279jhnstpf1ujiCBuAaMAFsydWbP16sjKfJ1aZYY5",
  "key4": "2NBdQVf2eyiTAeE5gtpas9jrih6MeRggVf1ziAHiqdUaYwPZfLd3rZPh1jvKNuEfVkgg26Qbbrjg2XJ5z2NDi5qk",
  "key5": "5RWMFqZQZET2Srgv7RzT1EyVVDm3M1DzGnCtHLN5xK37BCnM8jMASbpSzoTrYQSmtWZirYLKcxGQ85kQ4Y5xtkky",
  "key6": "5XCX2egY9VGKK87QddWFQmRazEDRvjT8WCNdGZqZ7qvoyJVTemvFS7J73DQa8iZcqP6aNKjaLkdKQu18qiPg2BtN",
  "key7": "3DZd6DUf1wAhvPNREZnhrXe87iMypUprC7R4kcJNHAM8ZHyhVyp2QKx23XdHQEJ875H7AUi74LiZNfoT1CdC7MkE",
  "key8": "5CVDni9tsHqhvfVu34bMGwKEbAr259wirzgCUabQig51p466gCjSb7msWXeYk5LZZyuXPCqiEEUurWrguU3m2P25",
  "key9": "5Vy2ZSwiu66btFGLFC9zYpJXLD4AHr9F87oz1Qkp5JZ7CQ1df2xmiDkAciPn6fWUXmGWiShtpGrcMWcHxZEPGNhG",
  "key10": "5HVK9pgYutmZgK1jgDaLi1xj5bbNpS3H2iZQqHbeevASGEmVpBKXijM26oeichBD6yMkmf3eTzWKBMrQueMeKNe7",
  "key11": "2bTgFEkrWoBiYbLKxq6HqJ1KSCviwTm977LBmuPxYWML14RQZG6jc5UeKzpxcEvxatFGYgqp11AyRt27D9bgrTbW",
  "key12": "2q1pdgqUqVS1p8WcGL5zcSgFtQiZgojyGdkYep4AgvML2H9ZsdrXZnxB4Qr93A4zGTsVEt9pnbNrCcZtsLvxJpcG",
  "key13": "2ZKp1GjZ1iyEre5hhRjjT4BBBJtSbcVeBy43CnW6MVNKk93K3zYqY2vf3apg8varbd1R5vY4Y4YsQpzRBJWHeoUy",
  "key14": "ogo8pC1etirbroDic7Wrw4At9FQ3CJBStNjTJGRdFB1GRZXWDQRQb2XiugHWDkdMDyg9maYti4vfPrdEpUPtsvP",
  "key15": "4uwgyPhHdP2gog1hVQ3vHjaGaaJjhSzsnNYadZLkwHduFWXaGxiYgQKCpS3up31coWRkhz8FEfU8oYRDvWShUwPe",
  "key16": "266AxSqRMsHYeV7J4tCxYWfZN2Z9Vc7DF5ifqV1QZFhDA4Mag6qcqhkewcjU5kQTUEZCDXWu3ySPSSRr3jNv8zQJ",
  "key17": "4jyQbBkjFXKijuD4W32WuZzhHjLWof4aPky1cug159qzWV24CYk5brFo5bGArHdv6kcNKp1aJ1H2XL5BsKdCgmg3",
  "key18": "5hvE9johNxLJKu5t3nMUPcgVaYPMBjfY1zvWLNt9GZ563kLYD6BFDQzefaYKZM6eSWzvs7oXrE38cJKyvAooh2Y",
  "key19": "55k1Wi1jhTFfTRWy1aKupCpobwsj3YSFQNK1YgqH2H1VbMc2prU4eznatyqYqJ7AF55veUzepGTxwaZABgaApkSs",
  "key20": "4PFnr1Au3JZN2dNCyGTTRkwX128TLV6zgZ4jMqoEzKhizD81RuVBrNQMp3fQbF7tKUtdZk2VPvzJSDLVBkFMDTnM",
  "key21": "3gp6XpTkN4sCdP6czWXH3n4RizrDNxH9rU2f1PzSPGZ5XywQc43ZFYzEkmP7ePgV1z8Y2CakAZu9qAR5cLeWEus7",
  "key22": "2Uky8Mhfws8TDeo7s21EVMWJNGZrvCZaT8ERBmUt3qSPTuqCSbBdA5r1youtmcE4Lazto2xrX3ihWSTbpBiYVZKU",
  "key23": "294n5r6Mm3PUQVpBjpU3g7VaaoQhnHejKiprQ4A6EFrtkXFfJ7PatzboQ2Ka2WwtYn82Nh9zLm1FTFC7dPnX6Khr",
  "key24": "3MCNLUxXTUfaVwJqBKwkVLFe9QckuR9yT76qgHVLeGWcEzzH3iT7UkuTxPgpWFKhc2HS7npiKzURjoZCyi153LLW",
  "key25": "4uzuyHQvG4UAPEcDnnKLBnB8bzwB2En1wiAGqvdYbH8jPLDLxdKEZekUij1DEyGYNDvyQy9ShqEp8dFJMxXarjJ2",
  "key26": "4hsKNspRhf3AoQYfhCahWM8s71eT4kv37U4m9FH4EbLGpqDtnRzppCg1EqCppGbnpDKZJrFNhg2DSW1BZwSW9ckA",
  "key27": "2mRK2MKp3yirHohRS7jn9if84d8aqWUeUn8JZwpSTp1Hcr52LpC8u3nuY1ZEC3PCLzqd7jFhSbsNPaAwrnkLJ1CX",
  "key28": "5kjUSAkCBJe4xmewANdwKpPivkyRiidtmHsZWeTZLq2iqYMEx2CMd2T9DHYvACSijwgxdDhyCpsjWHUnKQaW3D3C",
  "key29": "34zTSd1X7Y2Pouwj7fsueCQy1BtJZffxn3HQojQuMvzTLeb5LCVHhBTBJ1jzByqqKmSsV53nDNX95WyFfzQQMVNP",
  "key30": "CcADXa8NnXs8ZcjSczQ24DRnZGuu1R2bdUBcKj9ZR6WPjCBhfeVWz5m1G7CXyhdBjAXktZvoLw7eWtLAKM79hAV",
  "key31": "2mHrmHwZJEoGDKTRDctF6EjnUa1UnaWRfAs2nsJVvrftT3UCSpuS8YdpBAMGQ2hb4J9XUo6nM9o4XRCghKn8GQRt",
  "key32": "579z4i5yDMjTkYpyWc8yHTJfaSVYBza6z5gw7GWHfcqf5QPZPsdrxjJSqztbQ2SexoGukrRnNkW7eiLapYNfacyV",
  "key33": "4yc22JkGyFAmpbTuXPHiNBLd14XZrzSDYThovnNfYtwiz88jDfYJwFMGbh2LMW9v8SyiKq6q7dNSZTXx71J5AiMB",
  "key34": "sYY3d3b6GMynEfpFWjLWni2VtnfT1nqH3v2iQKQ6ApfUj4E6raLTpXd5we8B5oJWxFXnWHcJWCBrGnQcXWj69Em",
  "key35": "uGDhJC4EdsApo9SQ6JnLKCZRayjRwmg671xcdAY1ENLC5oFznhbFEfenNc6XeTRtcu9GoYMRiMmJpRK1vfzMbWe",
  "key36": "611oaK6r7Haqndai7pPm9gEt5RzD3yDqC6N3n4B2LQMpSPGNK4y8YAjsXyVhe9GJcLCf52tJuJjGJFG5yGgojNhe",
  "key37": "41s59nskZH1KiY2rvTzWuEXExou7dsfW5GKGUfT3adLCcnrbGvJNoFKkZs9V7hYq6SXgksF7x3nkHafAkDHWU69w",
  "key38": "4xto2MYHT3P1DqZpm7vG1dxfDRPa7YAn26P1dKDFQHXcP1Q9SdhoMDKS8x7Hn3Aj9XfgFdioW87nKuWSK5MfY871",
  "key39": "2wf9DHa9WSnKVCdeQMuEpgCgtm4BxiyesmepuNxLU6wN9CeuK7TpSR8TFaYSQqNJNuM9tce1H2m2shgkofmaxCLG"
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
