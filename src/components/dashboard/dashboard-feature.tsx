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
    "zWgod7tveDcSUkwGrSk4ArfLqXZ3L4jzj2QVVf6KbdSLiUfpByhFkJAzKMj1nK3eM9Fw9QfdqJL7cJGJRh1b9rC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2xoudT6prXPYKNwMdCkB7HezkY8yRR2khD2XD5UTFSvKmACDdadKnV1KPWuefByTF8HBwnn9KNqNp78f88EJJJ",
  "key1": "4tw46tMSAtcoFJj73Ewmy3dBHNgFGpLedNTvcr5hn8zC883gMR9YFzN4dnaNihYEr7EapmYR2Uqe8Xzmn1sVK9nP",
  "key2": "4AqipbGJxZbuymv9V9HzVd8DeT7FRS9b85EyxLBTCyomLK9rHKKYWZ7b9pfbip5XzhFugGiSRJeyyCnu2MXFcVqk",
  "key3": "5Rj2amJZZKos5k6pynkCkDzBHPHxJsDJ3u5cD2frMik1wLhC5RNYY94SruL71jxTUyW7sA319kTQmBiroFzNM2HQ",
  "key4": "2g6LmHaEbhitJb7yEtmjGJNVeWLhfZnhFPuC94De97pHAp8BenfVeasbgWcpi826wfpWENARDxy8G8zojBkM1mb1",
  "key5": "rk5ZbLAGGAiFPNS2NszgqusKNLn1TvvWGRy2C7kBJyiiqvufi9NzjnsF4vQ4XtTBag5MvT3WVPHrdf1yTt38bKS",
  "key6": "p8JEaHaEoREXw5whVdzr7jqbQVUhfvetzkUupZaBsC26PMGGrWCTSy3UQ2Urv6j3evktfx3wdHN8p7kDGKgStFK",
  "key7": "2EWcgczZQKreVLp22YzE3kuF9TgyxbZzYvHyytBWKWquy78YFU1PurpxJYMr9VT63UHYQXthxUg4HRuRpUEYmKEC",
  "key8": "44Y7yaDf6GpEMSYzW1o94SJKPNoXvcHR8t27BTMmBM2yxWswg2yW6wf8aMRHQcSxgvahZVCxZzDSLzysykVbu5Cn",
  "key9": "3qSbq2UoAVXZuBf5i3428yPJhGkeVsy3siir15rrAvGcJfNpsThC1FM6DUt72hXeZZwVKdBGAw1JTqvE7BkEyR7X",
  "key10": "2kfdK6umXpKGxSqJVxfAteJWqej5R5Xbe3dSE8h4vy3i6Zr5n5K5xDnAdwN2UxzSQf9cCu3mDPGBN8BcK4qqQVdV",
  "key11": "4yJpqgG5Jne4s4wnizsgraYLKjjVsCZakDNCZQ6uumvbmS3UrGzmVkdva1AqnGHMuuiLK8HE2Joiy6qzNERWk9wi",
  "key12": "3yoYLn7kDSkmeEvUAJdcavEGVkJQ8ReULq8qKErJphNkcFJWawrCYDpwAUzzSDA83cAgBxh5poNoRrqBm35Cdm59",
  "key13": "5GAFvsbTqXZ55gDGvmHPwSUfYBhHyzjYH2jZyrsTSrqeXu42g2xPxUeCL7Q37FPcU4F5Sfmkjz1jySHqyuWNJ5KA",
  "key14": "mpFg9YSxuDjPPqd8CHctjkdkrvmQbA7gkX1k8Es9TrBLNcsezKeGh7nQoFMbC2nErSMGpsGxZVeZu89AqPYEwmM",
  "key15": "4ZuJKcDFZiT9hVZw9gSbDXXs6Uk2J4vZ31eKLosQhAECE6CE2guYpYfcwxxPLSFiHmJECzogec8vie6VZFgZF3HB",
  "key16": "9NQkzBNSmfLmCtGNkwjK89JcuQURpEidUPFytJKvB3nmgWM8ezCVEoKMjCem8AuwFcWwyrL1TYChLfSxPKwhfbP",
  "key17": "5hBz52GPd3qpti4asn4EpeVk6S4hdrRTVqEhQT7pvUgEAnyF7wBS4tcnzeG7JSdEXEN8UovKApWS1utk4ZxyHYPR",
  "key18": "38KxP3aNrnRpv2cBtwoCjvJPQECWevNh1AvogEkQr4sRqP684C6xCP4Ext2GR61zkAawfrVeDP7TmVEfJwwToFdd",
  "key19": "2ZaE3HpcaEjakuSqZE5p85EYDtSNonZcDDNC1PuDLi4rDgNyN8Evkx9NUVhgSiFEkUbmzETBaHEFcXP8YSdeMaZh",
  "key20": "3Y519oNBX2sjWbWoRKbJTUDvJUyUZLqLhzbqHYxJpyBFmf9nuq6N5MbgXQie3qgWcqJDabwEQr1EobhqacCS9zQX",
  "key21": "3Uo2kPtSwLU2mLD14DX3nW3bUdWFHtDjnrdKSVi6Rb4rpwManGj1uTSKH62rjbd54UjuKiHXnXNSxZBicSe335Vy",
  "key22": "5p5dDCwoaxZaur2jEJSqCD8nnGGUEwSkCm1vv43iEAH1bcWWM2FWMuZ3UgES8yUYXjhDVcE2FQM4XfhrMoFc1Ch9",
  "key23": "5nB1d7LBeRvQmjhHKg7K15N7NpiAjF7GCo9RgLEjvQdcUr6WyLj9tSxivy1XR3G1uPvYrqCgXWZyZQYq5NkYEnmP",
  "key24": "H9f4qo7Y8Re7AyYQ78rcsqReRSJgFiow7qxWsjeiVMEAFzZNDpYfsqzGMKR8ommJBtybpMQzAMrSj7u3XV8hcc3",
  "key25": "52CvUyDH5KXaFMx4oDqUhFiDxF9PmdJG46hUHxvHPgDfsEDCcxQztNBMXGmypVNx3Bbf7nqoVvDmcuzKU5r9XK9s",
  "key26": "2Yp88TU1jCW9rrVHJsBkE2WYfQn51LPTqjxzhrK9tu1zTGFYkvBRveb17vHeV8iV9xfRtNTGmpubAxdRot9e1y9N",
  "key27": "2J4u4BiC65dLBCr5KGTGyEK2B2XZto6bjAyabGjDN7tGfh5JxdJsiyZ1b97yCibX4gb8v1zocThC6hXH9j3orcRW",
  "key28": "2uioJ5DG6kYTXyewEnZ3xdnBtDtkfAhY6kGrCd6o1RcGJJ32wmWrdHHsQzdfGmiRWXjHDm9AqPmm7GF4htVfVcX9",
  "key29": "2sR4bgE6VWsMept7RHnGP4oJKHomAdEea5XodJYj6tdV2mNPUR2zN7fR9eMHAvEosYM4aEczJ9gnh1egdYipxGtw",
  "key30": "4dvFDDy15rWGcTx5oyB8W2GvfTQ4xeBM2EPQSC4yMScnvg1uDE97ffjHKeksbgLoGoaewpYKhLEmBwjHN9ddo5D7",
  "key31": "3PaDMkQ1jufJZGbT7DbdLmFV7QphX9Dk8wdNC44ipG8uqHYnRQSwfQaizSfSMkVxmZa2qY5enXBruBWNzHdisRR2"
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
