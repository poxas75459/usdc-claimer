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
    "5jmBuVF91ZCCxQ2sXVmpFJw5N3L4mrJSh8ZKs26P9dFdBdP5TDe4XNEomoktPkPWC3T3EYm7cHJWMNVRAWms4evz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wc3vYKZGr4xZR9E46X62xszSnMLvKXMY3krHL3PT12LqDVKTHFifVzTmaKg5NNABsiyVCnmKUhYGRf5CacyWiNu",
  "key1": "pwUV5ufKAYYC2vL94oUjvbSXZn4SWWW1ByFpXPLUgjmYBWYhs5WM6WLK7k3agQq4JywjQMjwaaUqMuLLELQwG1p",
  "key2": "3swLsRPn2hGay4LnzB4hUJM1FopQ7y7TMmFwdfj5Pm3teB2MYLpZH5P8xiJMchd7DzyUAw55w7Vi1BCJpBUksVAh",
  "key3": "4y8DtqLnKV4KSjEpWeXwLdeERtC4reeY5VB9R9z76TeXg9EfxurD4EN75VV8Ws6ArJUiGzFvUAe2sxxwUYW8x5Te",
  "key4": "5zF1EbNiSYjnVw61ExNJPcJPJF7rCwQQfWJe2zZCC8EgmzSj89UCSEEsXniGKeqXXiJeAVnC6CoGLg4ZvfZgGCVY",
  "key5": "5r3q5tDceMo3MGz5YP4oHGE9Db96qqKSdMpQeA5BfX9B5epmSjnZdeJvuUTA6UAT6vnQdXg7hqfseE8HrMBwLXRZ",
  "key6": "4iBsbdw6YZDWHVF85bvBr2rQjV13LSCnNhpNDrKPY9c8DJiFVr9BibbqRadxGoSwGU47p2NfVaxGiiP1Fy4mKoy1",
  "key7": "2LNuGoJQHGpGiidjUcLBYotWHj4ijjKBNGS59MWJAx3BvF99873caAfyYVYHQUrFagv1bHzbWWzBPAf1AcLyjmXc",
  "key8": "5dSiunx8KFJ4yz8imGkAmqWDBazkXVCoZ8BycWxBcTcv2ADxERQFNQsXCj8jD3CHVB1MzGEZVhDVqYkV4DCDJp7N",
  "key9": "2d7UGughpJ2B3C3knoW7uBqNQpkqWoyEerqgMf5zDwiNgyHckiy3nzffDknwp5Nuy8gyXGzopPuEwezcUvuDTYCt",
  "key10": "2NXkjSEt7uHLrmU2xiSYJJVVVCAcQcCSwqcBYDrCHjjrTSgj23FPBw3tdt9MHKRcKmtAVLhrmrp2FAE4jEt5gZei",
  "key11": "2w96DJxk5778j45kGsSxJt7vCQUzqQWBTMnNDvVLjsDgCzTKivv6TKCAvEDKmqNHDQtC8hzcYospBQFnWHyT71H6",
  "key12": "2vyFTuJoc8dyVkUByeE6vu5FrP5ME5fL4oDjUyvFfRhFX6vDVQof313DPTnXiCDmv4ZcMPFmiZDWNfxk99zmHR7f",
  "key13": "3uLkeCHmycBogEjQuir4euzChMq2Vecj7Hjrg3rzp8TZWD4sVMmdfnAhw6dYXhnMvV4WFEK7ercrwQZqZX8zLAmu",
  "key14": "33N2av4PCfvD5Hoba3hkXvrc7nnf5qtcbg8vBKreF1wMprtjcWL1YhjfYaGfNqo7ACSzQVeUq1t2s87qTKbbZNcs",
  "key15": "46UEh599WXZp7PZTg8svKV5BE4NXanpZ4jy8dC91mLR7oHQdWnjJyA3SvZaPnLoHNutfwq94C5rk19D3ZCzuWrn1",
  "key16": "4vvzDGftoHocqSvf1Qp67BDYcdbboJzohRhBXVCZhKN94TrBjnG4i3etPCcPpzdzK8YDN5fFCYgZHa5ic7wyCeSp",
  "key17": "65gdkYo5jAQJsHg9bjE7vpfknbnGN6tzt4DP92tLe6LXcXydYcaEd7f79ytDWZHZzc5pwx6xADanPwLutgKvMDXb",
  "key18": "3YJoAEQFJBYqwjtpQEKbUc1Cnry8Rnttp9JDqFcMnpB4P6FaRwCFPE858uC8twRdqY3PRMbEEqpZCYmhHW76MoSP",
  "key19": "5tzrZNRm9ttPcGSpB1up5JXi9rZZjnBSDdpdnQXJEGdKgPiPiKnW3eenzYqojC3nwLP6jeh8ZkRYEMsF9Wqmm8kZ",
  "key20": "31QLnqi1u48f3gCJYyZmVMYjRKZouoMvKgABzyNYLgytGwBKsYAeG6QneuiWw3ESvXoXgXd2BjTu8bEJHPwJ1n5A",
  "key21": "5gJncNhrAkLeFfsBMH7YzraeoXdRrWKZbv9qpeWKfqb1VsabFFT6L9JYGeTSjXgSkdWSeNTR2SKcYnmkTyVw2Cor",
  "key22": "vm2fuCfX47rh9pVHXEbXPqL39Hw7YeNyTXyWEn1yKpi3enoFLeksnw84e3ntxUfHiorXeFpuSBRAyuEeEBcTa4U",
  "key23": "2WKf5N6752po67EGD6Ko5Th7xDtLhids3CzziZkAfqeDfaoTKeWNfZ7uTuEDqdLffDvWq66u2JdC568w27aJDbNe",
  "key24": "24WjXp5H7oPe7XncJf7mZkHHPD2tLMQKYB6Ywc4sxyc4mmBhJZ5HPZ1otoW1PC5PcwqGUsgkGLYcFBY3ohHkarAo",
  "key25": "3Dc6i3XkQ9nnimp7dJEPqzAwVDKxmRPXtzViffDPsPB9NzkEBSGkggBywhyj8ULEXJUVuBG2zA7UC4rYMu3h8Yye",
  "key26": "2V8pR7vmr4QKU7my79rKyGu8TTc5QECdgo6vgyj1viY1NLrnFALXh9R4hzpKN8u4JpYbN2s1jC2nKfjcmJHSRix9",
  "key27": "3AVWTihyLJwoEu79SgyNSEdoDi2yQV6Z6ggkzjzN18JdnEHkBzwoKzENhgepp6wHUKjpSBwjTZbXiDRvJqvrNvBS",
  "key28": "2cDVJDQvFzZ5NXZJNHCW6D7ynysiPSGrqpDG4vGBN9VNFXVfd2QBkXH9uvSsiq5X1hJJVZyWwaYi8pQYApVcrk5U",
  "key29": "kfCBQhz7TyG4dLXCsqz36uahNEfJoxMKSUw8XkJnGum7BjSw27vj3nW7VUHfNBgq9ns3HfigDNx9hpnFkqdm1mX",
  "key30": "2a7E2XsUpwd9NZHoeDPGRHgHojsKb88uYc5XYZfQke3CxhggKzdU3W3YLQbHqu845qhbi2HuZWuSKHM44y6rBBU8",
  "key31": "4Yj3UbJrnPVVHvbfwGS9MiQ9fHAPECRaWKPAJj6o9P5wB32GjhTGJXRcS3LDYP8X6SADhsxJWy7TLa7Ls5m5UUKH"
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
