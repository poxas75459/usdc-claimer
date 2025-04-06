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
    "5ZHdJfGYA9Dv87xdRtfYms8rdB8cL5K8p2uNcQZHxbPoMswcfo2N9iC7WNCciYRJxRN82zshLvQMMdsLi59XYSSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2572rG2P4jGrhKF641SfzEjqt4PC1n3NKMrkU46nhDN2BmNviU4arDjtPDiQjBwckNdTVbxxrcfe78Zr95y4TABw",
  "key1": "2GyBeSktAZPdrza72HybtgW1AvL2WTf7ye1Twrj7kVYgXfDR3w77uH12fDUxAoybjqMTyoEBiUBPb5swvHiCTJnk",
  "key2": "4BVidJ6ioQ41YfverWFHVLn49TEtTq3oqThcQnezevkM7qSfxvUr8RczNU6Xf8x7JbfgVKRUeVMLcKYWvL7Ujazq",
  "key3": "5pvT39weikJXK3ofBtozZqxZArYrHM8yhuJFiVMBcTSQL49c9CKKdNGCb7SDzPCAQLrrrTogKCERi8qCxSH8LQ4c",
  "key4": "3kGKjrfx3kcG51BJVPwbNeXPJz8t2DeiWC3HDwdzWFMskeB1vsYU315AgTgPJFvUPvzjv7yPwyiKQspRvB3rrCiS",
  "key5": "5uF1D6ZXViwqf5Nvi9WLw3V7vk3giEU5eKrkTUjxfvKDo5sr3pKrH1aPU9EwzdFuA2PkNj2EFZKpix2pzB53CSRi",
  "key6": "w1qkVdAtf4b8jk1fSPsP6stwAKjjNQuJ9hfzYMWpXdbizESCFjFWQfbJc6sfEEJyhkuNaFVLsQBdCCBeDtsaG9c",
  "key7": "4fhspaPNNj79VS7RmAkougr9Jxg4sJ7RpQVXcfdQkAgGQkV5zwEfSiHnZCc5iVxeMsYnopnWV8yi5uiSX6ZL6GaA",
  "key8": "2GUFY26ZQFtLzFkLumvG2ym1Ds3KMbbJQH5JXErQnYtB6FXwf32fTs5q6uJa9ofmqXbAXNyvAdrkxifoBk7i25FE",
  "key9": "5CnT27eMyGqAkeoy976bEMHzYcDT2zJCjy4hpLgMjZVb1MDXP3XNpVBJdHhikzWkvw9yqDb97ico97fJd3Vmb7Dk",
  "key10": "3QcgZQqEtm5MxhzpdNb81LLuUYMhKzcN7UEZsnAAdWNX2LGzDQvVae3jvgjoAGhb3aWrvQiwvN8BR9ddfG5dtWFP",
  "key11": "591pj4s4HYAeRPn413X5YcPMWYQcBeGdnJtoXyXNYKw2ZUQw21sZjf3DZjkpbYDjBfgQQExUPVkmWfCnmFQrwiA1",
  "key12": "4VNJkrGTfAobhvF5thmiZzs1zDo4LPYgc9QvLjnLdDKfn9gRV9nw9wQqHMa98ZgkR2kzccVQjXDKsAofKXuRKPSz",
  "key13": "2Zqj6sHQTzpiYgjDohfoH44rqtmFaYGCjmQM1mJirAFCzXF6YPYCK2pwNsyU59x9sy5NKk6rA2nZYPGDFb1M7ju5",
  "key14": "3pWNKa8QEZ897wwn4tY4va6wWF53nSdCTUhapJR7Z92GWcSNijUsfF8gEE1SaRbcCoo54YqxYfz3utTwu3mXSwN5",
  "key15": "4VJkskPf73VfPdNeUSi8pCzPPzgvekx1CaqkWH5L4NfwPZTPkxo5YaqhWM1ntaMvtkWjGZfLk3ACmm9VgdXRUfhC",
  "key16": "2HyFDx2adQR4MZqPqFpuZ1DL3LQ1E7T1JVXCfrXaM6ZBXe4VE5hZA4WnfBTbt6arm6CMQUfkdXhVhQRFaVoVUWxf",
  "key17": "411kPywbuTfsAc5eQpFFwncDsQSFQ966zwLKsskSUWqJ8cN8LYLBmGSCGigqGdDC62txHBReLDGAC2v66E1sa8Vx",
  "key18": "55gXR81CoFEvwE3gR1GBShZnEYXjCTjyGKXHJoKp43FbbBoJv5k7sTFtQ8e6ZcwVyt7WLY2ewwxCJMwi9DCa861J",
  "key19": "33HQiep5WrZuiTseaQeJGtHjmh7AWFowVoBoVyQ8TTT7ezLYWZQg6RunLxi4UEQr2BduSaEb67M7WXjBTj9adMjU",
  "key20": "4cJTDnUuaCKMScGe8gieUcmCo4xgvy1o6SYWccrUbA9VF12bshKjhWPxce1p35xcmbJRbj3X834C7skXoyDNzEQu",
  "key21": "CThNHv9NzFZHEiVkoA6sXpDXtbSwibZqgo53VHZia9KV2piYEcv9kBNwBZXzmdUmJNrvdMH1oSnAHxmvW5hW9Rc",
  "key22": "5BdeboUpZVCsSSKhv1TcXwCn68DTFBJ9Q9TqswekHHgUUcUKETLEnD82GsKFtbpziHMfyHqrDBArfVQ3zjtRRVVm",
  "key23": "28vmuNyivBsLx78Ubus6tXTYUA6Qxxp7ENn1ecBNFxcHXf6vJMwqUk5htdHgQRZqAnY7FzVC7kNni9LKRPX1pHpf",
  "key24": "3WS4HGy5oug2VwXMYwUNXMugoiZRjwszuykvXVLx5fx9DAsPskRx8Nun7AwyA98XRQP9GSu8RHyda9kdjYCL8yaM",
  "key25": "2f3VQHqvRZ8tKYjhHDzsPjLx2wXKNqfNicPPxqFbAbeReHvpEHfrxSUGYPEYQm3KShPkbb64GRaGVdUr5r4x1dbX",
  "key26": "3o77rnozTuWfPGFSeNsCiDxoV3fLDwZiS6JuyE4bezawfv8boUotUsjy6DescLSnXppqbbaFJkggjCqo5EuMrw6p",
  "key27": "2Zp3nbbTMcW6hk2hZ3xFqCfsFEqRs2EzuvGkZEtxspBua4x3uVoJtujS5JFnL6Pqom5VAsCDyyK2yuAXCvgGRzuH",
  "key28": "3dwUqh9uQPrWFCcVTszCcG4uhwojMiwXbQ55MmjEQo6MHTVjhBM6DcAvYCJ2WviSVRhnzzr6s8vKGDdAV4TmAeXw",
  "key29": "4FcvdzBWMUBqwkqiHiUmNbSkREUeEL4g3ZQuDt5NCAwX4QNjnyfkVutQdyp9jwyCkbnn22gXotT6q29WuGNnSbB6"
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
