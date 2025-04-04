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
    "4gBqx7H4oDBaxjDyuFuRx855Dy6ZkC5RCZkgcMzLMA5pESAz7cEE4Xh74a82jwfiNk4p42TiN94ZP9yowJc4mz8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5npnPPo9RwrEFZB77ptHdGN3C1gmi1FcZr7RRZRbZFofeUShRZTtcVKB4PK45STjfgbStcdo9f9hfn7LD2Xn3dzu",
  "key1": "53GDYPhH571ac44jfFUyYyk9VAzSSn6d4mfSJoxAQCLHbLYvrhQtkiV8kXKdynSz18uPCi4p5SZeQ776huryURXA",
  "key2": "4GvAtybYpkL1B2V6nXYFmVjN4iscVWXMfHmrkfRfJbM8MKCGDgq8u38NGZmxi48TRXuB8hQoDvoiFwN36T2orxqG",
  "key3": "2tbAgCBPYnwg9ZoUUtXX2Ti9jM8uhp7K2f3ZnZbsvpjmqeowneZGJ6ff1MkP6hs56Vcefgk9g7Pj5zbjWzG9pVgJ",
  "key4": "5vwhCu1N2cByvsS1ywUrg2bsdS2Xd2ybAWbSZmgAs7NkG8AjiyVSo5maFF25yXLnkCAWAkMndc7uZUtdKZ3HYfPt",
  "key5": "4iL31b6Uys4GjzM11ekxSFYrFdMV6MGJPoVEbNCcFgbQ18Dk1yMWk3PrmC7qgJj1EYGgHneLzaWS76q41Dy6ptQR",
  "key6": "48dLpBFdLHTgXyrbgE5b8GoKDXgb2AfkLgoE2zgg1RFhgoX4dNnHyBrbUKf3TYv1dUoLH3gAsoSDC7SPeJMUnYfm",
  "key7": "5fX4oxRWrQRKsxoJbW154vquZW1ZEcwVomu2DvNpVDoXqVNVkiqTJPrP5gua71hU9tLj9msgESAmWGq3pEopp3rU",
  "key8": "vMa3uMkwvjuJ8YT8YW53RFPEhJLCgPaQHpsAYU4tucNpgjqHCTT6aX1d7qQv4wxSp1N16vN9YTBbF7hgiorX1wf",
  "key9": "3w2on61zwukxSkb1W54BXPV1TptGiPbTmrih4VAW2Pj85TMb2mF5uHTxuGyHyiSqKuzAqwkpZe948UDFmNcHMoCR",
  "key10": "4yrYUuU9KkqPcWGw7fCaKj2DxJwM21FKF9BYEEG2GJRBTm6rdQ5JUhqQPziSjWw2gjuJgNSnwvcgrovzmDJ6fGaD",
  "key11": "5rXKLg6PLCw6V8Hoy7oBWFBSyvUbYCgEeonbnZbakt1kcryDXjkdS4LxFTn8Fz7eBwedHANyC7bfeGFaYsDru67N",
  "key12": "3Bxor54P2Atawv2R3oYfRot2EPKLsk1UxNSvjzNPqemEzMfZqH1p5wH2e9EUtazcXSrZB2yNh9FJpbpPrCLXxVb",
  "key13": "o4XfatgW68xfBZaaMvb8gnhJR6ekp2UJW5AbKiRzekGnmoSG9XzgjhTqXmukG63h7yQppeLKmNcqLHHjmkngZqb",
  "key14": "5fWm6WujC2rRJR68r6vGhBTBviDbjMhFtAGTNqZykqK4QnqcjdjzPr95YjCEjsQGQhU3dkUMk3NbLz2FsZNtLfzY",
  "key15": "3F5zhQeh8wXhHqWnta4PV9tHEVB8zbmKMSDadbT6wZ4RFtLdv87vBBzF9675CDwDqGJ72uCi5as4iQYiDvrLb6AT",
  "key16": "3MLtmh1DVkRrfDSXK4MBdGVkrJGnM9npm78rcKG1GWev5ynECKwn7wSzvXDxu5e7U15y2ZBKpPjGkYRxjnGTpA6p",
  "key17": "Nu2dDcRBYBpP9VmhkqaDeQN1xksVuGUScph8XevE1a1wva5F3XkxSVJ1gVQjdCF77EiHeMznvBiU4mVvVw8Gkz5",
  "key18": "2cmeUZg7m7VSnYbH8BfFGrmvz3Vv5DjLSjLByKND5NfSgsEwQVAvVn2Po6wLuWo3uT9yGpVB4QWHeVaW44DQwYHk",
  "key19": "3w9rYcCa6szuzyUcDwciNW8PNytvCQ7dXsXdYbRBU6hFEtYYbMeJKSRHLJCQPPd7gpEbftQ3afLaoM3BJgDkFa5Z",
  "key20": "oqYVxMexUYK5hfyvEvgdSH1Ver5Je7zynYaFLHTf3e2oqPMJ9m1h5cHGnPdN9zwieg7sGnFpqgbmWmrCwKCRfWo",
  "key21": "3gvfcAoFB2azGVDFaMT7xJaiNQsxjGMsNgHq1r2WnfiQj3wtNdsJkQ4gbcaCySziCZMKS7qLXJkuCRoraEKU4DPM",
  "key22": "3685udwPmrvaY7MkwBqVbXiZYMMa5fRtgGWd9SNURfXEJ2ByGjx7Zv5zLFqiBXHwh8eYAwLgd9tQDtiQsc62zLY1",
  "key23": "4AwfwNLgMJ5bucT7UKGSPQEa8hmBww6ufGF5HWLTp75ixV9wArhkQ2qAJYTjRoE5LpTwRTzMnxtAr15FDvDXRbzQ",
  "key24": "4wkUcGxyh4VPaW2evnsMEshysQvXdTSznJc54gxybezyr3zvMfrrKbB48VeCJmVm3yBrJ6zZKmhkNfv2PqLJRv9i",
  "key25": "4gLvcZiQW9pFhnYtqAumaM9VvzQnuXFqeTDmjCt978pQB2GUzSihcfrPrnZKWfQU4Zp1H57arrvQF6y4GQ8yPpA9",
  "key26": "dGLqdRkNTAgTB3cVMh1omT7MY78dJoD5rq6QJ7p2zvCcUZBiZxoexsuGsobWebDmKTieQsTwtZvQuQXiaecNdaj",
  "key27": "25CVm1nvY4KWEXSuMCKPckUBgZrQtLor2LNE7SSZmzfLzd6nWxBFGfF3yEsUAdQg7XHpfFTxTUiZKtTGeLZmrX3E",
  "key28": "43W6UUqGBjEhCqEN9WgZUEnmFFj8DBeqV6WZfaSY7YzxGXS11hF9y51WbqV455VSfzPQfJvLgNTD63sbweSP9WRg",
  "key29": "28sAsc52oevSe6d295cWgNLN5Hn92zm4wSZrHkrhdrX4td3EAL9doWHfZgcnHfrXAbnrBHywwoWjiP1Dc5k5AGL1"
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
