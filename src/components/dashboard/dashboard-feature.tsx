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
    "5Ls7LMss8hgFF9UhrsCFHg7biRJir7c3WVC2CCdBWMXRCSPgEyH3M5j11F3N2scngZgoN5BuorTKbnSqquvvqB1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58biFKdXCrJZzgNSGrhrMYe4mmT8YgbLxpMF5vpB3wGMJBcXwm1eygKUVUnjqkNdjGwr2TEzT75dFM2iMUXNJrVP",
  "key1": "4uotfUxYH5wnEewQmAYCQPQHbWWYTvQoN4Ji7HrnsatnBPo5BDZ67BbXf6y1fFmgTd6LLLhkVkxV7r6WWktuKsoa",
  "key2": "5C14p9gc99JGgxfQZNTr6LQSJx7TzVBxSmUubUVvxEU4yD6UWSh9EC2N2m8Gyjw5yfqTAt7ytioGKoEseLoZuNBn",
  "key3": "23cs9w2MtjyXGdwBhm7sry86ZLxXzuTJpmCryzfsYpxLvb1g9T1CW7twELpBparJFKYo5AjtR6M4rMhr7NhTKfsF",
  "key4": "2NxAAkdt4rVSsLSZTbxp264VvmCF4MVgwBDzUSowWd1PkPNuRF7tcAit2VFwCLxXeq92qfCdnJB8DpvmVUBnFhZL",
  "key5": "5nixhgCUE6SmuVcB8pLJaBMMXvyivisdSzpWFxBhAJr6khSgpTmNGjCMqyHnU6gwWFY7kT98nGS9fSr4g4nxfxQG",
  "key6": "65CB9kTG8b453wFqGwuxEXbNq4E8YT8VCAb3M9YQL5KanzticqaSVFQ1cKrDpwHX2wPPTVfybZsdC4v7nDjQVpGg",
  "key7": "uoedbXePkqi914fHXynC7efddYympBpiDGkqdoaqz8NiLn2zGFUx9rtk5ijY9y3jSSMmdFmtdSuzzDkvSqcrYgq",
  "key8": "5XBnDi9BTMQFmbeqkCiVzg4kEhiAfjorg84e68UMs8ePYsj5rdNTjgjJdkpVQ7CwDHKcmJX4D9VQTYasoUJxnjPp",
  "key9": "2pDhi42WGf8ZX9MFA2c3LRVAPR8yEaeCRa6hHDNhfTrfqLycnxhNYpjFTWLoERguhR1HVnixm9fgTwfViYUan2rN",
  "key10": "5hmKVtZwS51LnAy7KdvUpqYsYRi4h4Wn4amhPZPD9aNMgvnQ2mY8H6zohHNTT8ejNNujB1gQYNt3udv7wiADjAgu",
  "key11": "4r1E2RPNY5zQ5AsP459b2yxXNfPPwG55Xghk7tNB5XUZe56HoTKyfdbNWmcQTWGVqSvbtWKCB2Wxohv6Excry6pd",
  "key12": "3t6CpEZuCjP9CiCUeiLnB1H5wotkcxsJVzAHibV8GqQjYRgQvfenGPqSBmgNZc5Xu7HymGRRzAZhpXNQpYLEvyo4",
  "key13": "3QfDSfPqDmcwjQFmVvHsKMwZkKA4E4JV8dYk7AinvYLrpkgKbbcTA6oNp8cfX6iEayagi1kwveETTP8Q8YxeMADK",
  "key14": "32dXRaGJs1KxTakQvitPRKtq5FKfzh6vPj4VrHMsHfGiizqdFuZcpX5iPA9mdrAGgvSzvJiUAEvs3tsbno27LGaZ",
  "key15": "bk1d1xmZ6zyi7YxpDmNYvHYdEQ1kYd3knhk3ABHLi5REF66wCiJgEx6YnwVPEsWqbgd3Df9hbeaQkRFMX1W9y6q",
  "key16": "4STVbdveWkAY1RaYPaQRiAPxT4kGmXH9U1br7GU1UnoeuzoiBqTGhdp3cCFEzx3Bx8AoSb99DMqZGPTfDX94YmeS",
  "key17": "3pQCNjBsZoFhGprTt4mb8txryBUKzYJ7448NT7Mag8ZnDWiyZpB2irVQzvB8sJrre4HdXkAWGQ4z3WzKY7rirMgy",
  "key18": "2ujtWmEUwb5iTg1yTNXe2saZTsxP9VvBKY91EFgMC4Yj3SGkQa8eb3NcahVSBoL7Xgv2twDpctSDfJTcRrJ1QX6o",
  "key19": "srhvmtTXsnS8hK9Z28W387cUsWjN5ZpgTDC37dWb14fFPS1vzJerJxMBcG2MyDds6QcRTfGyzqBkEs6wxEAsvDk",
  "key20": "5DyxAVTVFDvCJ412bM9QvQQuWiznTpBMzdc2JaMXR1ioutsCcsF2PFpPjhCW2wJgwmYb2vPtVNnPVcCxvZi9y6wb",
  "key21": "MjDZFBu1mXCUmC4CHW4iduNsynHD3AB4DFYMnN1opYmYPFAvuqtGGVQ8w3NXRXvQHNAEsaY8Y91zYchY95vnt7G",
  "key22": "4BxGLeWrzriqbp3dvbNhFe6agDgWHXE8NJYjjm77gitqM9eaVADXF2Vn7zf4BqMqHzJsm4TpxnFaChwjUE7ujY1o",
  "key23": "4ZSCTUmoFdzCCW4pukUBMdNZjMBiJZdfdu8eMGjMG63hh95Bkqgt34wtMDNJwCkRj56VSDL7MKhozC4gWq9Xcd8v",
  "key24": "2gVpcqDDsM9c22z1xH9m1aACuFxEmcUQkQNKfGcQXftApmzwHJWLfESx4hi28knVi9TMnyqD4AmJEYUm1vK4jKr9",
  "key25": "3sz8mEU2XNDPGy7uALrD27KnETnkqpjzfYnHGp2czD61JKZG57YKY883Q1o5WZKohHVtnqxAgmCatU5JbJHXXoMU",
  "key26": "4P9SNcmTMVQJkmEkqJjN2M958sMKYduzCw4zvhwGLyUW9uhJ3Mbs7L1b2yUXkQrAhFSfuzpDMepsUy8MX7LpTZ9N",
  "key27": "54v2nNrbmWNeEEd3AVcdHYzu9j4A1eHPwLp5tk1nd8esbTbETd4jAW1cL8supMfo1YmzpXjHUuU5NSqRZSSYv4Ly",
  "key28": "4YUk5EUC39mT2QYM1DgC9csyp8w4v3kxpAVaCdh4msc9eesPawWmQMWTXBCbdcVGY1yne7rnMJbwAKNj6HAzvebD",
  "key29": "33jhwdETGPqqMaX42FScN5o6WrAKDuBWyVdDUDfBhfBMF8psVu6Ge2RtEupRNyqMvF8yh4C6AaCqZW1R9qY9GA67",
  "key30": "2tYSZcg3JcBh6Hu3tnMDyD1WVWMkJav7yvk6oqZ3nrBR1qh5jvRcaMvuMg968UsvxxjkEzx2BwMyDKgWnciWZH1z",
  "key31": "4gFKsiuXapgQAWmFoiPySEX7V4McbLqRgfDyhwz1L1wpaAYqSdqMcR3gWyHNdmwgRCEZ6hjF8hVUgvN8k46yGzJN",
  "key32": "2wy9BR8NUsr9bdtpZgc7n14CKvaS8fka9pjdNfBNRjbnLYCWHqmtaMMoUP359X9GFyJnQvkTEvVP1bQRFzc9fL6b",
  "key33": "34o3r4tvyf58V9LpkNdxTNzgYUJjCsP89MCqpL17KqwFHwEaBbf7qEez76tGnQfPYwu88GFMawb1QbqjYFdbKwbc",
  "key34": "2knjvaGEKx9W38jukkhmqyrpR2vcD354X4TztkcWxhsYjEVcJBnMGzquA7dL2xMS383PEgSNX8RfjuB6NPfaQz49"
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
