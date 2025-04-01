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
    "32XPGRhTE9qtc5BsCYkhcqLytQExuhbqGuGHtENNtEDFK1KmfV4xE6F4uwJsqGNpaRakLpMJNNKiAB4GbtMKecJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GGWghxWCKXW21VonvL3qFoQf1oun2FkB4BVNtdVMkV3cgbvyXxQvypQYug61Muo34vQrVDQbpK1SBbtgRVzNujp",
  "key1": "2WNtyvvDjMrvMYxPVSshZYYSGQNCZuvJSMrQjijdUc7GVCfZf3BFyStpkDHgvezemyAZTogwvNLU8Ki7rWFAt54j",
  "key2": "Mk8ErS71rn3fq9EXaNRa1cbetNTS2pSgYbHcrACmZ5afHpjG3QDp9R4hCB4a1LSxw3UmLQcWdWkqa2NrZkNd2ox",
  "key3": "3btHvYngXmQMTLTy9H1Pvh2UM6KHV2XRP2o8m6zMTtn8C4Mzb38G1CmgmDjZuqybTFKcEtw5GpP8G63Nick4cbWD",
  "key4": "4v8Az5Zmkb75k1Es4wvCwC1ibGrFdnK5ZudDMm7rbQov3BVoNf9s3pBZqukekZUf1h6crWrXQpe1jdhNovKoNZuo",
  "key5": "26NUAZa6jzXppeyHVcMERB7K7pcWWPJxVLQxT8MhQK8YmEWE8n7QEUDEjVC6TzoiDhhP9EgFpVaeLLS6dcXbmjyf",
  "key6": "5uHb5gxaBNZiuWF8yMURJmoRQq3Fz9tJTPrsR8E3evKh1zywPvsMBYBKadygqyKEynNh7Qmf4mKst9X74Wm6VMRb",
  "key7": "PDkJKyWNrznM5xQhCTzEGPVfgfxorDN31mrzXxNvv4uPnLbEQgr2N1G1LKoa2gxyQ1hoVoLSzHMbpcRspgEZFKc",
  "key8": "2e5FHG2UsEg5sBRa8ihGGBXg7yE9qwYSouMxDmbZ1pErCCUWgFRaKoxAWKDaoCn3NvHBeT3BRADgiAqr6GCDh2da",
  "key9": "3WJJQkeB3482VehtuxFPaD39Tt8aCuvMYKjHS2HrAZGspGZLy6N5Pw3p52cXJtpWjbPcREfyxj7srByXDyqvX89f",
  "key10": "2KzhWvQYC4VUzAq4omWSnDFxUwYBfpX2NuRMMWQmv3SxzfRzfj1qYAeRMz27de7HrqHux2pc6uyrDqztqR8iMP2c",
  "key11": "3aqGCGM9Mq1mX4oTyht4hHAi7W3UctJbFy4ikJcnxNtdKv1VrQ3TjbuDtfG9ZPtcST3w26waSXed7HRv29KR2g3q",
  "key12": "2JJNRutfVhNnPiquFBjb5JTWhwm3ogBb2Qe6d3KmtqAx5vJCBRnmWayY3PvmB8p4ExDMpQQxparvQ3Y29cSy27ST",
  "key13": "4YN18FwoTkJvpbovtFZDy94hiX8AoXMhQBHyv1PJeGhDTpNbLsPD9Pq25gvVEZiya5G28VhEsjXFJNjbNPW4BjF7",
  "key14": "56FDkNEqkjqakVvyrTqms5QwWURqC6WcXNwZ2JiR61zq8WJvhtfvHrpToeedHPov1dL1xUUNBc4nfstJQ9AxWDBw",
  "key15": "3XngvaJJ8Tfh4nWiwmNu9ok6GrSyjvVhwCggyhzm1RquAT74oe3ETY68DuboY9ZhkDAQ5U99kX9XnGQu6V4vT8e8",
  "key16": "2MmJv1DNXuAe1nhWR23ZDdBRTnF9nVTGPc21BKdP1vVho1CNcxVZs9RLoPjo6M5a5955qTjyZB9HcHWZ8mNfNzHm",
  "key17": "4LbwuY2qciuse64YTYRaWQ1zCNDTdnvaimQiUXP8mENL3uo2tPG9rtTEVtkJXWKWKtsZ4hphD1XLgzJzQkqDr9Hi",
  "key18": "4gCnZQLmKpLiw5zNSXXdLf3p8ZQsMqeVB5Uhpke5XDYEutigF4snaG5SRtqqBBEpyZaNVVqzdttFbcVwvjrpcNAH",
  "key19": "YCEbZHutgx5HrkBmdwCTeSr1iBy58UYtBe4ZrxXwwwCDvaEbAEjFuVr9pTd5nooNVd4SnZFomdJioNkmyPmuZm6",
  "key20": "4kvFXYbrkXMikVw7KEn7gZAawExoVNf1Qtp942fF67c8dDdE1kVysMp62BTArdVeJ9b44ZenbMjM2JG71Zdz1TAk",
  "key21": "3AGw3oPe7tcKV3s2psrwz45d4cDUUQbC7UGgiefKd6uJczsgTcTETTbLkDDTeZhoaoJASv8AS3cST6yfRamF5vSP",
  "key22": "3Lyb8yuJxC9pJXFeqbYGfmETfT9DDMw1RaT2xycLFKabqUDwqqA4Eso1HnRnQbrV6LLCXwCH7573msKEaoK5WN1V",
  "key23": "5cR2o3Q78JoCYo8kMo9A9TAiVsKdXqcteqa2pWQKnSK14iJ1StnMQYS4At8iisD5ndMeodvjipVPaat6RRW989B4",
  "key24": "4Hphyt7EZSAG7eJDUtt28LKsUNZC45d1gJ7CN4G5uTLeAzSm7K32zf79VZUGFFiW4XgeYkNHZfQQEJzZwuSeypoa",
  "key25": "4N6VnUPGCbk3Z4MSY7pKfopW1c1yD1c1x4sSnHNMjv9UrSTdWePjQsQKsK3bcNz1jG6WPZS5Ncpv8GJKp9own2kA",
  "key26": "35cnFUYM9tb1qtJ5r73LvL7T24G3gBVZMosLBphnoX7ZV6Pu5dK9oPenXseimSbtRBqDWeKs3ab8dbanu29ZQ4Bg",
  "key27": "QnCQtUau5A2Y7Ppvq6bWTNRLHVSieQGidRGEESBd1D7ofq8cTtr2CGcHD7FH31VjaGh1N1XGNfhJnFjXeAs2kEw",
  "key28": "3HcFuUfH7YtgLVKTLk1pgn2MKnrnYXQgecA3qwX8qpYW12GMzFWrft3ZSAPD1ZBvCKmNCzN27KUY4X5KfYoS1Tkz",
  "key29": "g6JHHtWSUBF6nvY7ZAnnP5jUGLteXXNNTtF2kJ2Y8tsG5QSZZjvQneHcbqA2Zq4bKHyzA6ELmdYtjQNJ6twN6pp",
  "key30": "26tBiXzXsFAJ57pPeswb9PfPbrqvHVDFct8ByqqyHFjfzCsYAzd3ecdR6MWAZKW6EMQzw6WGAxb16RpHY7M32o1d",
  "key31": "42V6TBrkfVXkpd8B8yiirnmSxUh8mzVoH5WgumvxuYujumTU8UYyJMaGMX6PMnpvSppopYdEjR9vTm3NFULj5XL4",
  "key32": "3VZMpEtimu1YZert5bcJWhBSuLfJ6zANxmEmfYnDh5ydjfJ8tsxUWnRy8RNUdujkZfNVE7Q9gtjeBskzgiPA2NE4",
  "key33": "5RRkFdYGkVfXW65rkG1puTZ8JojP9sqrNDttnecwroZii5dJ4PwnjxF55o9nHrLaY58czXHuieQTjP4RnDusAqiK",
  "key34": "4EoZqsebouDtVZLD7ghpiqXmxJMgzRy1yvr4kTxFCwz9varr17pD56kSw1cMGhA3qdKsZ7Gx8LDfzLmKykaajCZq",
  "key35": "4mJuaKowexFH3JwLjaf5bewc1CWE2kVZ1UbVZnA9LQPdTqY7eLbFDCCkNAKXGnhoi8Yi4BJridAobeY3rdtWgtsV",
  "key36": "3cVpSUPQtheDUFbY6j4TzUSzXQAk9CXcUDTKtMk41dvokcVvWRMFmgn1TLKt9nHbqUEQjzFZJ4Y93twpuamFDnq7",
  "key37": "2ZxCuoU4Pt1DHHDnd6ezh2umRQKUEZvexCChQPYZ3U6tuGotiQSF6L9zbYe1grhsaXcTK4AHNg9ZJxXhwMyoNmRQ",
  "key38": "5FqXZDRtR9HQfwrRPutCThfC5o9M9o1FGr26Z9BBXjTUuXqJzzdNzQYwRGd4timpWwevgyB6MUZvwPJftgf4Team",
  "key39": "3iwHPrtCYXu4EpJPQX62VNLC9W8SLqESCPJQHiM49BekEwtzuoHdVFVAiBobxtKzrhKYCBJgZFcW5MhZn1CxHcf3",
  "key40": "3Bq2BcabfYjKgbT37Fxn9WxQjC2QoqnoxKUAJ4M2hXMfJ1KG9nmuxYcuCzj9b8NV9x6t9pDbrPhJZKTYg3zBbdGv"
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
