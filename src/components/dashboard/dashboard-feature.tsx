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
    "62buCrugdGj1NDcbt85emPvJhkozVfAzaaWVYKx4KZ9rX1GG18kQWxQLEGKDps4nEa1GyVfdwYX39c5eSfS9LKxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQqkJzsK3pkNRtXbHX7yV2p13HphJJo1DxwvvjxLppNXjrJJdisoxUr29iHKrFVH91y3fBneVhm2dooG8s6S3ev",
  "key1": "RTHfYscisajmssNKcD6moKCoRyaPgE8ecgCKfYrJTghwWsKQ1K7xN3sopsURkRUkmaTsWkVPei5ujftqgNDMwma",
  "key2": "y49W5SpLz9TvyQuqHyxm2wU5yeETVEYXxgvbTivFLu4nQ6BBcyaPjATRCukNvhcAkJvp4uSojAbv7yGzqHf7rGV",
  "key3": "4XtDSUM5jTGrPPTfiruqvjGhHYfaFJjA3ToMZwK2kUxHscqnBEBCgGvemPivpYgBSdYrGg5uBgYtdk66UjysaWnJ",
  "key4": "55E73aodEk8giLkjFZLrSV3FeSnTH1Q9Z5F51aom7vVf4UG9AV3iHSiohi4MoPPgmiPcJYw2pk4yU9odS6JsahAy",
  "key5": "5L7ntxcUdEUFRRvkbwmVXtd7quoCsDHToREWJtzAyodFvEFfPoWPskBDcoQAcs5FacTQnme3psXtg2YdTP1SgiR5",
  "key6": "55g47647snTRKhC8JJfNuYBNgkEGGWVUivo4tUsxwZksTxg2zAkcHTnLzvWVEw7MetcB4XzAsW7eZAP6hHbaZWUB",
  "key7": "5Z3YhKzPYEFgtqibTZvLMDUZ7bhqcXaCp4ywgGi8b4Gr3Q2vfUtfGUu9ckMXqAVYFCAm9rq99x2s9vfu1yGyDqBu",
  "key8": "4Z13ZXg4EhLHLFDjHbxn7ctHv2MTxCZEE45aMoSiTRkPjj15RA92CyrmVGS1jw21D9sGEyh36pH8w4PoBqGJYeYc",
  "key9": "4TnNe9cwKmT4dvgwK9GhYyJbDKPsUGxbrsYXpi4ywVqbw9qT54WGYyoyJSjkXws6k4yoW3HniX9yAh3PXaghN4HW",
  "key10": "2UgcQM3Z6Mw2hvuYJ9pkWXnqDCudbQJQW1QE6Wjfp722w2UDjnHPj2Ti32JRpw7TyxSmdghJCjyyBTvqy8TB1hJ8",
  "key11": "Q3vwP6cNPnrroKuGHFam9HbRXwaBikp5GS1nzv88Q3rN1i6GCRzNhPA8NQaUrwNFb4rnKTaa4eHCvSpq97Vugyw",
  "key12": "48x85NnVAGY7gpdKt959cBtVZbjrRbQmDynXDVjqj3Qo6ADiXbWQoW5Uft74Y4TrnMrjRfHr2Kx3ZsNT8ZxSNA58",
  "key13": "5rfPqRWVH7xWbgWpVquGT2YUXbeWQCDN1M2Unbu6TZiwdLCEnGUdKQcYtXc6S85kCZZbDy2NyiWxZ9KRc8CCHWBA",
  "key14": "4Qn7TJoxVhJ1SiLq8H3g9wiajfNoKFvE34P3WBZRDKLz7Dt1spMQK1xiyTVDkZ7tXmusVmhjupKJK7cBXtRsxzrQ",
  "key15": "38sm4azhuhkk1g8dh3gZY57aicd7WKu6UkbHuaA1gGQjmgCkzAix4kV2B9exVBrTNkQFPeRXkkiUBZh3mJCBWpXC",
  "key16": "4c2Fk6n3rXg4qVz3w1fAz27eVQ9XonoJccLhX6NLSo1dkj1p2D5yLUhw5TBovoHwz7qhrJs1MjXnbdJh6YQdUFBH",
  "key17": "25f2B5NhGtV3KcsyqKbkCoBqpv68HoU65G2SZXZ8pAgsmXE1MrpXZG3GcEqz6BUMqHN9bbUZQCh22AyHb6xrH2Xz",
  "key18": "3QPvb4xEv2HyWDVcyxWSc5aZCT2iqpBmSsv5oVFidDz3STyCYW9d65KG6P5LFqAte9JiBKA1wjsbnmDVGZTMe21q",
  "key19": "5XapVHCXWzgBMv8Yc2paYXsszpkdUnXXyZiCXGgcdcVoQccaWCaAq5in1FQRWS6HXCo8cG1dmDqJVANwZD3q4y5z",
  "key20": "2yYDTZtmmxoQGNZypYjXB4BWkmCNmvJGafAWXYcEvJKWGVY3PFJdPUSutUnoEB6TTkEkhyZcivwWBeP3Q25qVsyu",
  "key21": "4azpp6QmaNEox2Qcd9GHk1oLaFtCz7ZkxhoRdv3rDRZrbiMeHnttATaNCcxvaWrEb4Ybx19oyJkz9Ku9mHT5qqcq",
  "key22": "4Q9mHzwq9tHjmdSc6TXe4yFNxrYqDdDTB57dh4sYtcbgN3Cq135Th7hUerjVJYXjvdoL1MgsyViqLq6FZYPonoT3",
  "key23": "BizGXyMUZf4Uru3y2WNmJeD9WsP6f9bku27cbWRGoY21QGyxhkVu1jRFYJpz9VDBV8o2f9MV3nNqD5o3DgZ7R77",
  "key24": "5ryTDCD3QPbHyMymV7aL2fYQVf26fLD1P4tKFiVTcWEpcMrXQevsqoMoucvVV1dQtjeXK3Zsd8qQfC3GBZ4rSLSG",
  "key25": "KEhj2DHfmFDdcKed4suTVGFD7jLUAnTDfoKqGJWvnQpjWiHmNhuJUpgcU7ywMRq566Wm5Fsu29SJim2cJtC7EAS",
  "key26": "2RK8Amozm5Fhteyya6EhdnWZcwrmX1h8B1rxpKRWrEQJowgJd1vCpGD6hZzVLgGrQqxaaV6ChmY6EvgyPgWxatQT",
  "key27": "4Dw6T4ygeDxQqCT9B7UYQDdS3XZcatFkV3AAiwXse5ubu9iTBZwzuRyhT4YT1NUMZt1mRtgiLpxzMhJ5LDW4LEpx",
  "key28": "4ZvCDBpWV3BuU7VXfpc3SXnScmPphsQGr5CM4pESMZHDQrg3SoLhmREbVfoqMSEJdeSjgpkakR5bXogbrxSriDyu",
  "key29": "4NXX4FDBbLTVXZteyvtNqDP7jr5cfTcoZarqWp9h7P1foKSpWx4tXD2JE5f4bLotSAdmb5YH45QWtk15e7mwiqrn",
  "key30": "3xHYW3dCdEbzV6JdsJwkx2HxC2fy7TgtrNkYTj1rStRioWt3mBfBUTUY81nf1gcUewtpWvfJPAQJe6ss4inu3HUA",
  "key31": "4GmrcwG7fiBERpN38QEV7YXvM1EWEMnkDChnrSiDmjND8HMsBAwdDrYmgwbzenGe446odmu2qK54ej9Hpn6Mz2Hv",
  "key32": "4raYd8qb69FMi7puHLzmYJDGMJgnYZ3VVuuytczMSNK8Na2DS2nBeNvKwTFezEmP2CnHQgHhPwJAPHu94PgihZ75",
  "key33": "EuHpSNq5zeHyyv4jJS5TkoihWdNU8TbTjYigJqes18mkTmgUUJprkP49Rd63qaWgEehbNNtodpwrLhUysrw83aF",
  "key34": "2ENpc9UuvVUmFVXXDKnXm67A6nAAYg62Rh84B9LMtjWrUJUzUVKmjebuKQgoV2BTxz7LZJ5dXYX7Cz6aHfU2Ftow",
  "key35": "5hHVP2a9ap1cduMDP8ooQSFcw2ZfpHRFkuSkyetjeHTRLRZJjj9P6yjYDJTw8tNqhNxa5wH4qaaWtY5W1CDHu3tL",
  "key36": "36ndMTfWVjC9bxJ3hU55Fpxtu9w7TYqDi85dMbNZ21wrw1SkY31ZwqFSSomuA2pvATsYa7Sp8m3SRsEL9kAVTYjw",
  "key37": "5HLXKjjUBYcaV7Fthn9F7JvptcAjqZJ5eTipRfQABHZ7PQ4r6uzygeUGqZS1J1TQUVU5bKSqtt5Z977n2PFdWZcY",
  "key38": "3QRcbnkiLKZUp33sXB8Z2mCuS5yeoaUJcDS551brsfEaq93AoBD8JsHGNKyEdCAKxA9RLFMxv4m99pATRtxrDbn3"
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
