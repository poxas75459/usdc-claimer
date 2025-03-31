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
    "3oDrjniMDEbfTaMTUKyJLtoF9RTdUTb5SuV9SG5qMFLEwXHJhWpSh1Y2GefVwwLmvyyQnx6YZqXYvF5fg3KYA1o5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "361sTyLDUskxCkmeLnY7TYo5Y9wVRyFJN5yJ452j6q4vURcjg5oz5oNRKiWZUQgwcyQo4EL4j1xNynwgmrFnixDe",
  "key1": "5mXbeEbmLeCQTAndmNFjqsYE7opbNKF9WJu6MHfX3K3TxCH91fHQPWGxV6b4J8E25ronXGsaLRhGwe5A9AqAabk1",
  "key2": "5kgjof4zTNPMyQUnsBoUukNwLssb8H8fSAxzSwVnXLb6HKHG5JPcj7ZKeCLpL4tVF1zqyRs7k5Yinma6ajtwubqm",
  "key3": "EfQq1i5u4dyfoTGaNSuVGMdwwQJPTdwfPZsAaCeYofZg3gaQwPw7rWMUubEdGWBQc7NuxJfe5uL6a8YHvZGDcJT",
  "key4": "4xdej1yBeXM1353rLj2RC5yXK97ucHhyN8cEjn4mEzbTkWqjfacjXQb9wKxmYcrzM4pDx4k8J5EFbViz6oBMg76i",
  "key5": "5M1CTTFKNRy6qWzriZLYJu1mcJFLttp6QfYVExbQ1jo55VuENdfBL7QcTXGR6BJxu8MX5DmatsJhSDre6U2dwu7W",
  "key6": "UzAwny4NHCRLMJB9t1vZGjkR3GAxTRMcyKR4tQAkj9Z2mnw3kpq9zfqqiyA5fnuJZ9D4p2tcSiZxN9QbHbR7CYX",
  "key7": "5jHaL7vJKA8zpBVLUdUxCmU1vNXx1cfHGXPPS8Rk3pZ5YBgQRNGsBMT7jKWFLhELZZszp9joGjfvf3k4d15ZCNZB",
  "key8": "5YMbXyS4oPuxDAmyGvmvpCERHB5XA48Hed3R5y6T6jKgnCdekVxM89L3e7qLsW2A6uico2aHtGXJ6HhaGxseQBkb",
  "key9": "5NijroAZX6uTTnBFE7RKHMAkvke8zEP5Tx1ciz2ige2SA4Hg1DphoLAPwgq4AMx7TgiutSQ1vWC6cYwwQPSxTHuj",
  "key10": "ApwtjBH3hdq3cqUo8kuKoZK4TbtvCwRfvFZffEXShwSEUjoafrLbBP7BzYzMiao8Ymca3vJ34LxXwo4Gby6S4EX",
  "key11": "fifffowNxQTQbyem276Exnt2Aobmc1aXCC6UxZFLHxkGbjXgM83Y1d5Sp6fRvqT16JzXi64q9GjMZT4RsrmS5dB",
  "key12": "3zTR8oyoFDEjCuuENc1CNGab6jSzfcy61kGetCfHGese13r7mwbWLK1bFo5EY8XvLzK2UZ1Tvow6fc9B9rUHfV9e",
  "key13": "4LD4yuzL1yGFh1Qhn9TDE3ECVRRyw9PS4R3JgUNCx9necHpi1depf4DtFT1NzMHS9yDfjc2aEZyPgMg1nfWZx8Xs",
  "key14": "93iPaCUgH6KJXsq9MC5tUSxZTMnrRr3vKqov4JoZ7aKpXXhKDNL2AB8dQFvmCrDp26yHsLWabQFCGbp9e3abd8L",
  "key15": "5PMTNpdrRvGpE1efnmgV4zD1cSMiiEMhhDuiv2BVS9jfrj5M2uAX9zSknLV5dUiKf2Gow2kbdCSNw8VFiLVwQrSF",
  "key16": "3kbi95jmwT2oBGgwxtyPnWwuof2jCw3izmSTfCaeWG68cwgBnUAhpeQFQiHVuW9GS7BrEHgSNDsYwhCp3DDjJfyM",
  "key17": "5EUT7RD1nYx1SRzZUwqr1b6WRHw8mXcWd9Xc5BczJaX9nMTmmmaFUS1qWEXk1qsYmhZQW7DXNQ8vAUiSFwt48MLH",
  "key18": "5H6s97Xr3MVF9LErVaq9hDaRZSBbwfcQ3fjDz7x8JpX7WKrVfdSPgayFCe3pbtTXR4LzSj6dzR8bpcGoTKAXaUck",
  "key19": "Rm3jHrpC1u2MSpkCgXyEBFAPpfrndoiLyLzi9tQEFxeZPsZWbeMqZNYQrnF4oavuZyd1PSyDkRik1o9erjviFVm",
  "key20": "3MhZUt2XhUtCHWhgRwbgC3Bx6AzAsEKVmprLofVSpvE7cV4cdLFzJPB6CrWDFc7bCh7gEaJmBgAgPGfF2k7SNYD8",
  "key21": "2jirkjc8XQuYC4FEuZ5ve812dnuF8g4X1U83b42akwD7hz5S42Q5MekceNbrrkt7gKYDpuDVCm5ycnuUxFqAP8Y3",
  "key22": "2BFVuakwVbhu7MVGhYR2BKWwdo454Rgo4dm6AETtvXUjVYM87KAJpreYs4AimiHZ9NsnJjxXYDpgez62BFRjQLtm",
  "key23": "5mknB9f1EC1ASDyn61VR8uzRWArapnfFTePnFcULtJCJsoZRQWYzAiYpp836VsK6Yxv8Wh3XFz2XVBCMbc1nmc2z",
  "key24": "NoGdaTwHZxj4YQKQmaY4MrxgGoG5Acv4V3RdjHySyfQaQXR4emvZ6KK39UwniyK9mgrFL7YfhEkBX8cfX3XxW1P",
  "key25": "2osmtXHaZSMindxX5M7BKFysVkn4CWT8Xvkf6wua23TDhXsv9Xd7s9HZeee1ivfHm4hasDLNfg1w2x66W43TwMoF",
  "key26": "4MQcNKWFtVMmU8FjhwAvdgRfnEfhPLwWVa8iAieH7c4bUGxF8HUZJix7jjenp2c8Fv4EppECTc1FWN3UjrYNkBTt",
  "key27": "mQaz5dPp8kSEojFdmnhn1ekdKAPTynJkYjGgzLusxt3BB37NVByHq72gDrV34SFTvZEF5A5zkb8qBcB5RwB7V7q",
  "key28": "294LzqmnUJuePjMkPnHNGZ4Nq51GY3zMT9ZL3Hf9GDBjCBaytG91FZ3HLu5mCnCajFjQ3w8wDmwJVt6PsfpHtkTZ",
  "key29": "vpSiJXKiKE5JKTvKmwb7Bo7ExUh9zSSTkByxBKnqR4icPVz8eVXoFUJtu4EvGC1djXhdeKKPuMJFDsAk2SMRDHn",
  "key30": "supPwfEFKu5m8JK22YjiFNGHc8kF7XNJEyYKNWzVt2CYeuyC94w5EmCvMaa23p66Bu1heab8MZoZaLKB4SJJZyj",
  "key31": "3zQqkqCT18L5fZVhrzrJto925JTdcJcXzBqk6KkK652i3ZwR3qCxuUQz4c3Sh8P4sn6rzV3AW4rUC9xrW3UG6y5W",
  "key32": "H8wubF1tnSQNMiDbdRmgXQtB53bdYxb4WMavmjoXsLF8GkGhszMwbMgXDSPtpr3QZT3xtke1PLBnR9oy9CKVwur",
  "key33": "dzGvzZjpXHeBM9tLzP3jjAZqgEwhKoA9MWbgb3oTUrJqYjD8cMyXMPMXKtWvCBuXvCYVetUxR7D5sBC7ejqpzKB",
  "key34": "n8nBbPYsSot15578qRzcDaLwhUsey5wDC7VbCuRXT1eQ5TSKRKy3XyEQ9CXJJe2MsMbM8NjFWgY8dxk2J2T1U5H",
  "key35": "HHR3Wd2HpbiSSEXakkHCQT8iYPj3H8uRUBk1B3uD2WMepq34aUYiSf6EKowVznmmMFiFhwgNgUWxaPC1mYsVzbU",
  "key36": "4ELhfM2b2F9Lo5dML5wiNQdAatAJWkagt2n2VDs4WcfT9BA6aCcf8Li3up6RQrNww7hXfFgYKGBtp4LmRj6oZGZM",
  "key37": "2uDhZbsqcGbCmkHtww984XBHFWQ7dKiyGq5848fdFYdXf2vb4jPg518ZyGJ3pJm99nT8Dz96ypc9Kzae7mWcSRJc",
  "key38": "AMJeiG1LZyRppyaUucKvfYChVkaKHDKBK8S84UrWmqu127jB6nNy8MhoQ4rtgTE6SKTiBKD7nEFqrAF2xfMHZ8p",
  "key39": "SvfsPPVnUxNg9ZcynrcY69e7cwcRYgqB6kyQngrAxeLnVYwTdd3UMyNkWnP9rd8xwpb8BumcK7FgE8htUn5qKxF",
  "key40": "5dSDABch6YC3UP9RMWP2Zr5g88LoeCe9L1oba9V83jF46mPFWiDZ8okGjmetgG9Jhbz97afN1oQLLVpXgJmG7f9r",
  "key41": "2rZwEhdi2yEhFYPtd62S8w7kvWQfjdRbwswTSxPYsgc8QsuB2ZxhrmKPae4ovcFWJZ7iVAZEkGrxFgNtUi6ErM8r",
  "key42": "2A8XJ3uVFzuyX5Xue3gyQ8p8y5FCcDiWM4r1RYBLdcjt1TbdgrF28CYcaMSFxfo2SZghWhGaigWpKre5jvsoP2KY"
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
