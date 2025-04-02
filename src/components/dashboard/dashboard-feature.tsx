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
    "Y6TSRj4xPJYuSoMdFmCNZSmA6YvM9HnkUg6k7K2FAV9f9yFwjEUm5PgYH89wsDX52qvPJT6nyyEPPBjYmqnG4BJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KDMRAkuk253Cv3eJKH6R1E4WSryDbzMDPocKzatWsdNTVnS5joDS9kxeUDYmaveKxjiKQ2CEc7oAghawaoLEUbu",
  "key1": "9Vk3m4rZriYBNDNHEjoHnBEv9YXBK23522DVg4KQYtCbYZwir2J7hCruHRpVBpYMaXa2NBGHxuZyEcnvcDmPtdY",
  "key2": "3dtVqjBbwkVxf5GsEk6PqUgooQJJWZ1m5ZEeLrLLbe8f17sCh9Hf2W9TRYAiqf6hdmypUkmk6JPasx8AmF7ud8LA",
  "key3": "5rRAKcSETVadmN5SHbkSENpYKbRYf9mDX83quAvUUr8crYmc1rkWei6ereHuboAvXQqB1DH1sZKmMF77MQkDsife",
  "key4": "3aF7bVj1an6qoGJhit5FtWDRxJhKugrv4z4kf2EWg8MMjfNFfTKJfYhDA2oVQnYVAqEGNPdf8hLbLceQsttJxFpW",
  "key5": "2iKsX4c9mEbDukz1YmELBdfBUqkaxtXa9dVvXrwhrPuwfkYkS9pPzLc4K3VshceUEKnxqg5Z73rxNPufmdSd6oAG",
  "key6": "4fXDQ12VZoBZjVoqiU5hrcJXp1cRcDUDowUM8kMwoAoaGYDhwJCifn2tckSxDgXsURUijHswPzGSByUpXQK59ZzS",
  "key7": "Engc1tcmnPDVLaUGG2wWK1MHehgd1Y7ZuhMsPDbnfhU2LSDs42XGGAaBzHHiPLC46XoKZ75cHSU9cb4B9J4viA4",
  "key8": "2FaKzWfXDdL6ranH7inDs8KLGuXpw5aeCD9vAsrDn1GLW6Jm1NQmEspYjp7q8yxfBgsoxg67bgYGU4jDqD9QckZj",
  "key9": "5w7QYv4mJgw2QHXiNoDpZfqf2wLTDbq5ip9KmPA8tBfVg9K83Yg9KAiQurJouhhrCYmrbVqseYncu2c6EaqaKaHW",
  "key10": "8UkcpcLbCun3N6KLVBZ2XvDTEQHQ2s8EfKrSyLYC6EprM2zerrDfVnwaFHFRLGxG7Rqgazna7Wej6B9JoqJqeJv",
  "key11": "txfpypc8wCVziKeLPUotejGyUySXp4jPVRJ1fqBCn6dzMqjXepyaGc8eWx6P3qDxv1YYmPKdSxRdMo9JGXjc6Aj",
  "key12": "2uuZLHhzn8WqWfwBNEpwUGkLyP3ttjY5adVE9e8sNnsdjNnWPJVcHZJpSXwPgHtcGLngDJTsQu2RP5LJ9TNYYMnc",
  "key13": "4qXB6D4Wg6Ufa7Wm3xCNXDKTWmWZrRQ6VfXegRJabjicvBGBH6Y3YkPgXyaGJK52VybNEYmQLKUf9iUA4PsUrBFQ",
  "key14": "Ex1tJftvcRBsFnygfuYCU83VtQP1VPHu8UyZGA1upoUyS1heAmQ1rHq84N1W7h582CKTin2sncGHm8s1fbq46mP",
  "key15": "26btuGGWizpaKj9us3w7vrGfZ2fcrCWH5PaFuGehUs6Cc2r1XZ18BXSLEUf7CLJStDBw19c9LKMXuDNKJ7y4mJ9Z",
  "key16": "41bG3AZpYFBxVNCXrRjrb8X3NTU48r8rKKLqPwTupQ6GFHPNQNm9yk3cW9Yu93uy6p8GDZ7mssFXvTbW1t8PhZkN",
  "key17": "2NUeqKRMWHchp3nfgnJC9CXKjngHjKWZ4F7kwm5zLrpciFdq18XdT4kBpz14MXYoYhSdZjigyU7T1h3W88F3PhKW",
  "key18": "5rNnbEmoBQCJcza9DXiX2hQV5sS9Aut3uuT44cRw7ppFhnRJUukLDex7yN8ujNyJMWsHHF3WPvWLsEfcadppqaYQ",
  "key19": "4gTpRhQF3GuVg7KwK3GDhJVoGKETfm8rbNtyPRZyvSbPxRVoC1hN2i7pjqhi5asYYTnewb5Dr2NjbiX2coEvd7Fd",
  "key20": "AkpMWmpZqpGwDG3gGwiKju9THohHeD9LFFbQPCNVKYyH9bNmoYJuJAZcWuRphbAJ4poDoqtcGpxRBgxjK9v6MqY",
  "key21": "5UdaKr7xN3BM45Fbs3vpUo7xXyDhEGEG3XYM1ibeJ2KQrUMfGmZdG3ftLcVTP1sHbunReGYPriR3gPZBqjd44NzV",
  "key22": "3cs2Y6oFzHYtPXiXfcPRHWqhYbyGxvuYDKWTd1VjAwN7Kktq49ruirqRZtwqAfPchV6NM7H6i8hXnGYL7ReCjQNR",
  "key23": "DgQ9ymHdsTFt2NGYL4N37wT9h1rR6tXkJrTQFqgoHAczfyQ7CDGkFYiorL47dJ8LppwuGdhAkdbtuMvrmrQ5iTp",
  "key24": "3tdjJM9gZW9Fx9e21K8VVAaKZAQ7sKhxwK4woRtJNS9u3iuvh1kXXL3wEgmQnmiKKq85Q71RNoAKM79n3f1ucWLW",
  "key25": "4czHBfdmNpDnTLqtTXkQLWitXUWh14sUbuWeo6mkG5B1vboJEKuqBXxW4LCjjvKmb3Y3UZzRNnaYc43z5r4tZZdt",
  "key26": "2Lp3uvzmkKzQtDouU9SCRrYn21PCuU9e3npNd2bSX71YTR9vgeRdWvvKz4m2MCF4x9wNP1b6MFkP2nLrAknPZCmu",
  "key27": "TVqH4fp6QR4gUX7Z6ghcnXurVgM3LF4N9kmRPNNeKNL9vwZCGvAiu6mvbobDVBLPEwnU2vRMS9gTAuQwjVDZ6wW",
  "key28": "3mQwjHso52tbNprydSXt6LhA4cHJUg1X4QcBHNLDNjP2PhxcbuEP1NDapZosJdvmfm1BXF4Tf3usYhDhVPKrBW68",
  "key29": "8cUbFeHNdvvUbcMGHYCXXzLNmtujFnYu5gAPtgPa8pGxz4MBoew2F2HiB4xihxMB5qDCNkqPAEyRCuMTA19xy8Y",
  "key30": "NukPjFwLcKoXe7iuFkM4RBJFQvQajRxhp8p92jEhNLeYdRyUtsPE4GQJ5BKWUSPVjCehp2QoGxMV6fhAoxxJwhX",
  "key31": "2xe2QrQYQjDHdmuwU8USgDvogim4J1Pa6yBJ8M311Dp1Mhr7GSg5jQ9Gmk2mgyhYidkvjydFhxB9EPvG3kGQytoH",
  "key32": "2QjSjfnYTxQUqqaoEt2drPEAhkwZKXFKUG8NYLC9pnSnMpc8HYCDdoBJ1XngkdeyrWw7ZcU2XJnMSXyEYaJWEpEj",
  "key33": "2nRxJNuMKMhhirzgMmGwE5SZUos633Qbop9ffJPvBPqU7jW3Dc6jidytTQPtX5miSiEnQDfScy41vgTEpoGzUTon",
  "key34": "4nvsfC9CR22eHMTxtgtV3fRaykmXoxKM13Kitf9LruP6zSxVy8JLsLBa9pXGibupR341K6HxUuu2SWUebA5fhErC",
  "key35": "AZbXkQNzai3J9KvX7gXJppmpFduJGG61reLfPTLbLAVxZkqW7oz1vzGKntbA6KDFvNK6aoJedwnfWfPfhfrNfsT",
  "key36": "j2QFqZZmXVh2r42LQVrgYRUTULEHPW2LCGu5TjPzDwcNG62dsNtWbiMTKMZDsVodeDQSvpQYGc5wDCFdpie6ZgY",
  "key37": "2pnEVUdPevnrftDAK5kBFJgANu8NcRkREh9CswTWCvAeABxPu6wfWxi2hhLyApjgyqVnK9DcDak8uQAhbktgxphy",
  "key38": "4rCWPFjWyJfbuNXzNMsoQpgcQ1x5AiHyVKqyUsm5A3cp1B2nozu4EoMc8h3pnvN7o1NjjiqfRzHcSQ8vrpH7Bgk",
  "key39": "53y8JvNjjQmKLmt8eF2Gg6VwmDUmgDWsmCGew7WfqUYD3xub56emNVL83gBEVJygqRVVxGxZbRd9HNssDfBXmWYG",
  "key40": "JRfm54yQcJ6eV5v9jgBr1QNXZdvjXWJGnqzHvevCf5GxEWqAgG1kcnoStGbCXoXKZyrvh7LyJSxzuVks6cEqJVZ",
  "key41": "5c5cLxLtiK1PC39X3BzrhtwvKVNtFAH4vqjiG2b7wVytquVMPubYU28sZpRrk5q92YEXeCuckb9rZ11vXLF6ivEo"
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
