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
    "5GWVAVSwwLPS64HQEz7nKGURB1U62WUup5TJEisDJGYbr9sSsxs1b8RzxweZq5qJhTZQc7NbPKjTVrYE2QbwbG5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w54YNWBcL8wabNxqPtdFr57JEdtY5gacdJ9Sqjmk9XwciUXoiEw9xS6Ko299iRo53ZwHqTSqGu97Dapizmfu8Nw",
  "key1": "5HNk3T1C65GGLJuUP8Nt1SFeGnkrc74ziZBGVVN2UodwuEUFabeUB2DYsixMKzw641LwQ8pMiN2Z2EW9mbDj1KxM",
  "key2": "4JDeZvndS9jYgnEDUQcaw7VGFkHazpKe9vawcdMevG9715nMvkK6HVdDfmKCzUpJyP4MwjAut194QoXr5vyAPDx1",
  "key3": "4ebBYvW3tTd19gHaEHZ68o8t9TzoajrkBpHGfbcqD17kTx3LNTWhPHBiN6ZHV8ELFqWbCgb6DsX9UwXbwYdkgzzk",
  "key4": "44JHAyQ1Z2Nk4RyqVdvCBKnG967LiZPRFu6NUR6WY6RuiY22JziYzcy2vKyTrDCQMpZjJ9GKasjyuemZKCa3jdkh",
  "key5": "3r88rQif5AiEhkXKdnT7nS5sq7FxpgNkkZNHMUHuQUG2LYvXic7tjR1F17Cy2wRYJ5SpbVM1Gw27fQ9vhFDtDWrE",
  "key6": "5Rmkc1gJ8LyYctdcau6riDUm3aM5CjXyCYfawsKYXT5PFpBStefbkVH82GNjeBUCNHF5UWV6zRomvL7kk8jWGng",
  "key7": "5oCUevTjzMsAyDfzbZBVyypP7RmskESfNVedrTr21ULwzyct1smoXKH5GRemQi6qQB4vEjtBTQGCcFEH6fg1fcas",
  "key8": "2P6uFtfA3bDpjjk7CEgwhDn6ji4Q1f1MVmLdV2HoAgsgDYYTQ4GvsZzsagnkpy1VtDjkBhMis8thmSWZRa4BScFT",
  "key9": "41MzoGDdUaaVQew328J4zfaF51kTNWmD5QvU3cdcttQnZiycPxgxqdeyHP7VL75yej3hBquby4HCJxZQoewJzXX9",
  "key10": "23NLg7LGhih5BpAsu95o6cAEVZ5PqUxScExgYCpPmzW23q8ZY2biHrJXD3hqxdFgHEeekYABtjuEmFXLPZGPPycc",
  "key11": "BfYVZYEJMyK5hwZ3PTBMpLAe7tNsZqWPYZpaG7utVriSsebHXJK2hf8rKx2qnXjcNczfj7n4FUAMziFp6St9L1m",
  "key12": "4zyZiHi8urXSA3zTMPyRKUU3EmFpG9Lk9dw7ARBKYfDQfj3wwwccykj9WTRLBxooEJEp21iYtDSMvmFNUQHXFaWS",
  "key13": "3Fw9foCKUjAYKoqCVCwvTXEgrLyZsN9YkdcEfbhmGvVZdPtFTv4Me45fMBxU52iPkJtT47NwoXhN8UQyKYmQYMSa",
  "key14": "5gbXj4mhGs6eUS8aTwzs5UPdeYqrqo9wmvZ4iHbbYRVAsvyJmtVj6V8CjomVkMwoEYeTH88eUNdUw4ojJyoKZ9sA",
  "key15": "26Nmn2iWz4roJ5gytJMhnjZmwjo12qxiTyj96pXnsvspv8f1Pbp4FcJf4NgQfbYHhEABwYJNjFLbn44DUek43qhi",
  "key16": "5F2gG1shffJ3UGPwktdyVc9yiEwz5TfdqaiceYVQedUrg5QYocqxHs6M9ZRMm2hzc4uSnqPKR3Y7T6JAbq85Xvgy",
  "key17": "3drhkNfwBemVe3Sk3mGvjM28pCirfVGQ1PiDEFcXhCSHqKjYtR88CFgYddWjqvpkydYjvEhkCXSb26YvXYmDrmXa",
  "key18": "3Y1d6Bqzx6Ctxpw2imCaRHMPbovg5gqR7cR6JibuQun8Tp5HAR4wFSnb621cDeRkHWVVjQFrg7g8BNazdv3yfitk",
  "key19": "4JUzkrvdfbLBQ7nsQj3LWYY64yoZPB3A2nDcUkodUHdEEj1pG58RJsvnRFVqAT64XVeJEb7nNuncbuAf5Q3ebJFg",
  "key20": "4oRpRkFLmJqzUipYaEnLJavJ3Bhus5wmm6A7DTvRb43GsLBPn7pL53XqkKNrwJFq4gKANyqBLQPYAkyF6vvv9hTG",
  "key21": "2K88Yp3gQ78L5xhmXdRri4HQc9ZmZV8jPUxhrxbuKiPZ4pdpfUn2kDmrNqXPVanpfoUWuK3M8eRjy3VLTzvxZLJ3",
  "key22": "2ybLueFFpfnEbNueiWP6yfhGFpQCboxspbrAMsJ5E8hyA6cGTJhLryDebRHjF44AXPFPPPkb8fEKcFgs46ZZVpXW",
  "key23": "4PiPgKVa4Whr3gPEHtpivtzcN2fgqhLfo6kcRvSbWcgd4jJs9zyEXoehpafu1HzNsRA5UzTGmoNDqEeCd8hocYcH",
  "key24": "3Mw7LfbR4tR6sKDgkZiwq3ZikwRKHt8WoJyftyEN3Xed15xv31qipB3jyNjsSXzbxRMNWZd2HpA5xGoZAYGYHZ7F",
  "key25": "4VFUdE4HFg1usAB9wjoawZTQVZ3FxpUDZpXHtms619bP1jLEusqB8fLFEYd6zgDBG7a2qPHD7ECtev7xjMYkqyXN",
  "key26": "4vVZUo9onkvsFfFF3K9q72xx61MyWzMC9gdNWm65ataf9hYVCQ414PSk7iugJcbmiZqfWKcHNvY1yhiAPxZSpYmt",
  "key27": "2d8JuJA6rTwimQrFEEr7ZfpJtJKFabCpbn9fVkxMvQDWxoikeazMb988N1gJC51fwG1imyNchPMADQAb6ny3Z9fD",
  "key28": "4xHkAm2REQQZyqK8eDdPm1LcVswhUB9LixBtrcaGG9vuALgwXbUkuYUEuL9AACkbj1NPb3gvFK4w1WfsTBTt69Ux",
  "key29": "4zaqMk4EmMNRcZJGxQ7ECwiDbEpxopLfjwRujJT6fPbfaWZDJTo3BEVdb2sgg27Xnns7g1mQofT4MG3zh2bXD7BG",
  "key30": "hAZAKsyzTZnfdTYxeHc5T7VbN9X91gBtQPM4BkGsqrdcwFj2Nt3pLvimURjZzHM1qLkMgThDWAm1nZi9KSjwptf",
  "key31": "5q4mjNFADNfi3y1VFC2CLwrLH8cuCcyC7m6edJnacszXp69dSaZsV8hbjnxsi9ZquBELoETz77eY7ZwQTnyswLXN",
  "key32": "2jgzG8ZiwFqypkeKK6g3nkY4dviWr96L1zrEsAiA3kaaARnnncdZskP147X2ygKFFE5ihzPvxLEcu1XAWW17vRNG",
  "key33": "2mpakpUyVJnjsepH6rf2CUAMKRT7QkG8LTmLpTBq9dwx61VEbg2FnNpqQAqU4skBnrXGP78kASkLG3RbcwUUzFzE"
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
