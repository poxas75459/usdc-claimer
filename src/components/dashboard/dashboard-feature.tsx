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
    "2mhThY9iGwtVb6icU2REAPHFrN4uRN7uzo7jnsJiTScGU8gA8chYMK6Se8uSEmXkhg3ERwos5ZnpnddCTYKinZ3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cEEYCtBS8ahHBaf1oyt5zuXDiXj5uSXvXRtynNBjK1Vs3FcqKP911dRoa6ddYRSxM39n9WP6W84ifmzBTQa5YkV",
  "key1": "2cWUWtYDtYWegVia4b1dijWQbbWVHzcdRo9NWVZYDpaAgruG9aCDgoPpqnsRrqjYhhaKuo21rjS3YSN48gKRTaur",
  "key2": "2bAKjzApLTqiNaGRauPkJBhoaWM27ZRPDaTQtVgYnWYuD773bSp1i8H1ruRW2aMummuJsUB4tsaLLXEcGqezw2ix",
  "key3": "2ZdpeMVXGHW8rpGEYc8APAjmJfkmPQWYSLgHNvYfPyUVSNXNJ8qMbrP6tdvghSr2m2ViMahNg5Ky5aeNECBgSA1A",
  "key4": "2tXLsR2yD9pJeu6jTqM4rGiEn6DZrQx6M9PcdZvpPATab1Y5tFKYzGiWPMa46z27b5gJ3Q2yp9RXMT1Fzu4E7VUc",
  "key5": "2iRameBbt337LLX7x9nMEsWfArjcEsfkivoDDCtvQhyS8EuoC2RHch1V1pFiSKpmgB319f3p6VBZZD6sW2ca3hkj",
  "key6": "3SnUDbhCP1mftv5VkmsbdAwHvRzE1kR33EmkdGvW3vrMZwY65o6csC5DYBw3iQymcrwX1LFQesKmFWSZ85Pwn5xK",
  "key7": "4BGEmm48vCWyEnpKtuyJAMLKNVheVmycjyciKJJC7QHbPVt1RJ5kCVufk6XAdb4NJoBVxarStG8LZXU5tYtPVtPc",
  "key8": "3FNtjrEcb5xLc9LgVfYgoTENfKTPncF5dzHKYzyEZxpnJAB2gFauZmkP2ApbJnVNax4VFUZajz3WwqwwSKcoHLU3",
  "key9": "3j3P7UvvqgH7nWh7TxN6h8d1KDgEYayjrgodtKe7AFbJqB2NrcSjSY9gb9ywowqfYZrM8VMHetoCETxEbSYcru6T",
  "key10": "5HF74zNDm82YMu4okyeE5hozjhPVsXgsQQApgw5yBKTNPo1rH8LAJqJ76bTqSLtbmsF4wvbGYWhN6b14MnnkQHpz",
  "key11": "3nHp66nBHm8aUEh55LyiMVzwjrsRDiSwT5j3dY2BkSWf2E7ABgzvBW5cCLN2fW1KB8qw6EwpMpcKVaWK2aKfXi6S",
  "key12": "3xtfP7wyiM2s7tbfKQoSnQ3Zr1eFoTueqwCymEmWnZBDFXoVnYfwMGdBcXEeP8E4U6MBDPUqLnyTuxQvGUhSpZ1U",
  "key13": "28i8khBPW8yVxfzGMVdvApcz8XdZc2v42C2RKenZQCj4ZEj4xgztZhHgWM115jZ2ZttyFkNr4bpjKGTJzQM4YN5p",
  "key14": "3VnGjFGZuo1SxBjf9o3dkZbEHp9Kb1q96PN9LYQ8Jz1sPFZPADPR4dJud6Amw9LjzUdojxMjWWVjkNCCqXJVvjhe",
  "key15": "5TuujGCZ34h3ztMR3n6ma8vumvCXADCcjiX3CzWXuq79q6YUgHDsTMGokrudKHM8PyTgirZa29pngvLpc8eLABCX",
  "key16": "45HicoP3u69Mwvk2WmcaDqcn6wvXY3pe3RhdEryYrh12CMcYEwayBBdN8wZQBYZe3mrAWx2NGNC9v6jNVKyjZDPW",
  "key17": "GqaoaK7SYoKRVVYPW1jK8v1tZHmhkDDZ8XR3Qy32ha2aggMxKErMM7LkDTqXvtd23im8odS1YpnwANjcszvamWw",
  "key18": "46qDCSdKbQ1HyRsLcYAEx2ct63uKx6Bb1UE5WLftUDguwsMvMqC61nzbDNgoqtDS8mkWkt45GG143AHpSbBFLS7D",
  "key19": "4DnitXzPZUCVkUqf9iubFxGgJt6NdP8UHyVzVBLEDGuuscZkaWJ5ecHgRjGKKD32kbSL7iFWVhmiFLuHBEHg6Fpq",
  "key20": "5k3MuFjvMzP2ZdyxrVgqS8jfgYpjd82DYA4K6ZxRpSiqRWiRutdEXSPcBMgHQhDs6NdaHSJgpTRWo8pJTL5U4vLr",
  "key21": "3ugSP7iUna7ZW2KErz3s8F5omKtureNvNtoEpwEdj6taQ1FaQvMrjdEB4hFNWcnQ1ay6LhTWXCtLH9CuJQGJQwV7",
  "key22": "63BKPB3DF9pEcd2YM4VezfSth8c2Ziuq5uJ4n66cABdSkoTDNNjAWQ6MKTwejM6JUP1oqTouWfXcff1mPRfKMTen",
  "key23": "4jLoEsEZDYtzWev7hYDaeg7PtbeCc7FfigqcgBaranLgRQzZWzn4a28jru5WNZwEgEiuJGgS9jbw6yBjDGkYS115",
  "key24": "4a1eHt6WhoiVJQjiwxhti8xPkK7UCKw9p9tv8v6dEGFe8qoaY6TRqWb2cMLj1Uc5FQZYo1oyVpxPTvo2ZRzKFb1D",
  "key25": "5zPLsuUeTGoV5KMqraNKuRwnfP42X1KM1bKAm3mBWWhP3ZqeUKyeqcPiVPYf8JfYuCXZgc2uj2ySwq1qTzTLgnUb",
  "key26": "23w2Bx1UoUGG6UwHhjn7t7HLkWNfkUhKS8XdowAhPn9gnxmKQtdgGDLgddkz9A27YCznEqGDT591rdi5wzeRUb9R",
  "key27": "2APFenhLBQe3tc18dYddmHEMahCzN1HsYRbe4NCgzFCssJsvL4U45nVYAsDEWCznq423JwsSiMQ8t9f5rGwDZYjB",
  "key28": "3HV6sj1EZvr2yr3PckXNnFe2QZbx4hMcbXehATUJqMor3CUDNMuMPGP3UMWWfPrTf88DHwmGpVE7zgEQe9sPYiRN",
  "key29": "2NGSU3L7ydFW6ruReoBmqYMUvrzsKmu5VEmFe7gyNSvoxkj94bBGrgtYt8hyP9JybS4T5BBQ5vy3cd4CPah2Z1XJ",
  "key30": "4dvK58aGVgQKAKTyYxwRwMScgog47hivbVKtagnjNgrRWy1iqa4JLuvrSCFENo2VRBJrKxYDS9f4YCnR3bd4Rpsq",
  "key31": "5KvD5qY11zieuhPKccDZUxoBdod1jv4u1qrjnRHkQAgPtZ1dgrAMZHin8wY3cTAaX2cLQjnUduwXtGmweCceBMzy",
  "key32": "5NxouGKhW5KTkj5upPTHfL7xBGp1MbnEwiRePwyUq9jJjS8bgA21zvvyRHUnFwCpcWSxSQhUyhpM19ATQtXpDote",
  "key33": "4PR3QTamCTXNbYKZgoT8Y7saxf6XMtFsi6yEUgMq7D9hTuYwiHPbGHmRXTymdQsx7zGweQxvpYTgd6BCTaePzYhj",
  "key34": "4DnqxQvM6THjRhviqUK9xU2YpwEaHbyXPu5511T4sHx9s4dLDFz98kETGNTJ9VJTPF3H8w67MNSvBGw1esFxBtcQ",
  "key35": "2wdcL4CuscJpCkKDZn8ZRjQZNEvU9UiNmZqCU6ns3Qja6D3K8H5DPzfrTdqqwBzbfTJLHSztHrJ8CNa56frUJkYQ",
  "key36": "5aEmr1xzaZpSqnQye6o4RpbgNpVguqtP5ZzWZxvQTPmzgHJM4JSmTaaQJ4mKAtxHSpai9iVtcKShR3reSxEuNxHj"
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
