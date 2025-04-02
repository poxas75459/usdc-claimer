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
    "345mpfcRw9nxmYhhuN977WWNRcAD3wFWs7Yrvj5HR1D8GztvrGZ2DrixW5yfWuTytuZEZHSDr6WfNzyKpWLeeXv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MpPiHXqGfDfUf33m2SrjMq5aTE2sjhov6VHT5NPJNffgjJ795ye8fXReVk4rrhXpon81P1XCtw3FA8mzqiWutrr",
  "key1": "3CtnZxNuigUsoujEjKWTfCk8NJf6gjXPcxzVm9NKgB9sZAorTK27DjS1WjwseqGroYr94W8K2DaHhcSK1TRedagQ",
  "key2": "37opJ7Vm7jbQBjWsBaRmGKxAZxjPm5GfxAdxoJ76pigkEYQzxUkPeEbtT2TzAk1EJ3drmyyCC7ybm95LoRdgJNuD",
  "key3": "VCrQ43d2DHDYtBfiuo6P93ASNwubfNRuryoaWPbzzrxQ8ks7fq3uoZDq24ePgsgCXMh6Fc573koAUdP7xKj6uch",
  "key4": "4P2L3UKSDYM2V9BP7wpE8W9FrujvzBxBsUpS41bjjLFwELou8ZMZgZ2U9hMb4nTL4qbT6JCiMSJFNXuxwgPQd5ue",
  "key5": "XKuWdfJwoz24MJurrUUtv4q5u6Cey7NVBzA5NdVVebnxhNWnFTaqkU1LkP2u8nxdXMBHhxrrUG7JcLRCXagsR1p",
  "key6": "5isxudkKxa2aEK5we7LShsATdmYkCiEnSbark4ScGUivGQYG5pampEKjB677WdzeAYVJaQAmdCjzfbBDBvW8HbvM",
  "key7": "3jLne1JKt57GJTZXX8xWDVCzodN3UUwMMtoPUkH2chPwLfGErAi35uqzVtFp4Fnu6WFxNaWtgJxgTRXF9Y1X4Fhn",
  "key8": "Y7zkqEbWTN4SKV6g65Ewn3tRYUV4xkT2XBC4v1vuNwYmHEg1vNktMe9G335VnMD9YhXDMjPUyNGA2aFktCZqZE4",
  "key9": "48xz9jtsBmZqJpdkiacm571zz66PL2SYuN21qKKCtUqedDN6DbJz2sKP3rx8ejPg8Vn2FQWpYAZL7yB8asnBbNQQ",
  "key10": "63aNRYFewDzvfWQsU8amTx7f8qv6G2PHK15Smqnf7YEWjkBugeCji6K6LhyMftKYLo2WFe4VKcThuVK6NLFE5e7Z",
  "key11": "366ifxgg1Mxv1Dic6qZMk8YhQor6DSt3WLkGC62vdHnVjFS9iTChi7G21fzSPRiD6KQ8yZvEv7S3s99TAd5ZroEe",
  "key12": "4coBk7rKtcwK3C9zKmUoY8EfzjBTJ5veTW375dsctxUt89usb6nc7dUwDABJ3XfXgVVwrtj9BhAFwmLBVx4XmbbM",
  "key13": "3noYeh8Rg67HdicqPxQjwjSjGofG1odSgWvfmxVe3EVxmPnUH6Z31eHHn5fu26xVPeaowVran1WuygzKKoE2S2r8",
  "key14": "4kkvKJvkiFssgCSRfHmgHXBe8LVvPFKjXzLJqE3i4YBZ9dwgLD2jzc3DaMdoHJmfXKiMNvEpMn28SNF2qMmkWena",
  "key15": "2FjVG8hFTdhjqBywbmdaE7FFCopLcjHe69Cmo5EZmWczneh7y9SF9sLeQidQT1GbK7Z4FT4eYg9yd4NoEQf5K6T9",
  "key16": "4M5bR5RuuDa6GDDiYmCR278uzs9QLRKhWWcbG8rLwG2eZ3sFZpDivyN15wK1QqPzJMKktt97UMoMGtckB53BWXq7",
  "key17": "3M8YNuHJ8uxeAnr1o2LgknTVa5KE9NeMu1mGWLgsqo9FczSJFuavqf9qfJtiubJbNUSaCQ2XtcqjyqF2bLWzVy2k",
  "key18": "4nqvcMDT3XVkGWaZEGVcw5mWzwQ7brEu2diPFeshbgYEsc9oJAqnWhQ8wWySNnU88r9Nwpbvfajt9K6KB28GVsDk",
  "key19": "SRRKMiKucrt2zNJZL1ygzdYMsA9qRJKrdDXvjbsERFEqhacM4VyGqzYAwFZBfMtJ5VXjeWq4Z7bbt3GTGsYL2Dm",
  "key20": "2go7RftZRqyau73MGTzGWy9FN9zCcpH1NV3q8Yx753n2D3ua4mvjJwUJBfXD744cZ6NjjDs3e4QRnRPGgwzt1Wxe",
  "key21": "2hCPVpPdnzRARFv96tthKHxv3m6UuYnDudnqg3XDmSzUcvvMeBeKXEN2MHFVeVTejNjmZNFrLdNiTDjP3kuxRKaZ",
  "key22": "4suEEWh4Q2jAVLCkwaMPhj5dPH2KyumvzLCXFLi1uhCqYfCU6FSSJ5vVHvAij93pJNtefFeF4drDqfKfKCWNSZws",
  "key23": "3VjS95qyg7DQrNdb65Nw5YaM18jisKxzLi3bTDfUGvYwq7Z2gApZjjJxEBshB1tqYE1M4Hid2yUkfcVxjAq1bfku",
  "key24": "QK8D8pCi36kBwbhdRp4emsYaZUVQsiQEK7pVhpsTzFwbNh8sJzY1kcxCdM8YP1CD8am7JEBJ9qZgeGS2eoGppU7",
  "key25": "2sEBYcCg8zg4oiAHSuwksx7AY9dyYmNoSvYgjn7KWnTSjZ8dRXpM4KqzrqPgf7xr5jVuX35q9J7egrDMQUsScwsj",
  "key26": "5DvJSEsZFHY1MgkrWv8Xm3z8uDex6Ci8ZVEUrH5F7mYcoAMieoENUd4CB8BoJ3DCsSALNdFwQ87o9Xhak8JLm2UD",
  "key27": "5ozVQeyXrD74VdEn9PW9SPDZW24DVwpPmSbuHfcUrGjzMwNzBrcMLaH2SiKvx2mGBqXReFoSSQiL3etLRgBNQB43",
  "key28": "5CKc9PX1RKoSTwcoU5xmHNMAT3F71ffEYbhscZ61Fqi8dAFKu7aeEoonusqS9sKETySoN58nRBnB5cQrjkM1R99W",
  "key29": "2zJpBLDo3QVrVugxEgAoLWaSLq2hbMUEaXohgZRUNmWEhYEVPxf8ZqgCuACLEn9gNKuwgeEUKNHPWTf6Jw1SDCmF",
  "key30": "p65X41RVwMY5zC5yDuJziPDxH8a8MguU8uv3HmT3aNd5EhS6sN9gk9ogfrg31Y66MbgQnKepp4NvUA5coSw1L2G"
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
