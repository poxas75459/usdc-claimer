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
    "QAnurLLKFszwrE21ACFxsMrDdYS8RC3sAPQf55QUv4NRhCiwXfsv2YFKx3Stc1Bgqu4xLv7Xo7GJKm6awAPuEaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zPCbpa1os1CAK8C5xA3KZpWGW6CXhVQgcpyXvGJyfsDTsd23xr9JpmZcK9XPoAvuy7jCu8CC4D6tWNtbSKuMTrV",
  "key1": "1ZgdE5dBoizdHBFC1VjA9hRaVrL9LMLhCKtF5m9QLcxSYENpH1abziZMoeCSWmLh2pae9TpN5pyqpsxigdeL6Zf",
  "key2": "4BRBUhSCWsBv7qCvNhSiKaEyJfsPPLi8pJ7KTq5PzdPjVe9p3qLLEyKtJfh89QaMJvRqFRBowouQmv4R9dyv21qL",
  "key3": "5roXgfZGpDrPmVeoYjvi5u49FMBq8rihZ788J1W24WQa9KgCf6rgHQVauYfWPGFk1STkiunqciyVXypJnMUWXQyP",
  "key4": "42KhWhUTYKQdnWpX5hwPgM13m9kgR4ZXLoj5f9RyTkYt7dq9MoBeyNAa24NKK4wPwSZbwbsfFWohX5gjviFgm8u5",
  "key5": "4RU1L8JU18fUVtsvW87hsEKATDoqus3EbADGWCDkArHi6nqrqJCGJYoRDMCmbvKwPjMmukHcTyGeXT7gyFJnPYFS",
  "key6": "49b45AR4P5mrWvhuEiuq381XmLhmbKV6j27tPzNgb4fe1i6Qv729qrBn1fBFeZBTWJPCyGCnGG2Qrhd2Sze1ZV6J",
  "key7": "aADwvFPJzEc32sACvV6sqKn3ktJjqwzeRmBSFiRSa9fFbJCtWmPR7fcBrRzUKXDnmHv6LuAtxQzyiBAxKwtiiZd",
  "key8": "CxkwwNbu9RggKeAeBsjQmARGTc4GcQww783CBoEyKyADn6WhdGzw5yon967U56niaZMoVF8L8EgXPrLXe4gM74Q",
  "key9": "59p6CJrDaR5Fmjg74oLriFwoWHhUe5WFSTrDFoMyuSrt8V9ruz55saubX9LjAxCup6c9xfYJZnwifYRDbsjjMLey",
  "key10": "X1FS6YRuEWBfvYirbcPtd4XuSB7mp3TScxiFpF44WBrEGSgdTryMTxteRk5VHeDMXwakLFDBiq4u2WKuvUkRvnG",
  "key11": "3g196UJyKXC6BjfqweUKeERTM7HvLTZDetMunk6haqJfnYawk1pDeLk5SkoYAMKMV6t95XmNoxhFa8qbyrYdpynq",
  "key12": "3GJykdSGhwpNuKcEaS9Gcu7UAQPKwtkMJSFAYyGA3JUzsmQRq7srtL5vBE52EyvxvgnMZhe6GZM8jVdHTP6nKh3V",
  "key13": "534SaZc6Z35EWkjN7sDeQarEc1xqXffiN7jiagRPjzCndJGzReHXEyTczNwvx7VEtffN2RyhD9AQQxvfEzZ2WgnW",
  "key14": "64jyLbyK1qC3dD4ZJ92nAZUrFRbSZKaSQybWWPEya6AWpD3xCAyxxH3JcJgecXPNDo6SqcSperxRPy3sDuwcoSuD",
  "key15": "3ijUBwbPFQvmH7Tb6wDuS7tT3bxGgwrmiqt3wXvPk1LFYq2kMsRCn3dpDQbh3dthAZiNnt8JKic93YDEUy3p93C1",
  "key16": "k4fECRiL1zLwEEJPFBcMB8oRF5nq1nRsSTFZ9iAjsubHHFoBQQ5cX5dRjjgkaxsmXbiY67qUXfhaoppYMPRtFEA",
  "key17": "35QCmR7CAwQHeEmj76D4Hw3QBBV5PKRRtQDzJfwVUzMb4TNkE34jynQaQCg9KuoLjai8G1936P13XgSThANGyGYL",
  "key18": "5ReLh9GEo5NGXBCbLezpc2f5RA9n6iZq7iG8gQV5QvSHFsTXp1Vpj5Eh9mbZ7Ke39mSvv2jgrJhJdKGC5MAHEEvK",
  "key19": "2riukWgV2W56R46ZbbHDvcM5DhGfKNR6YiSZfUyQywFnxL2D6J65HVZrFuoRaNxsZaZm7z4HUCx6KAoUxjxayJPq",
  "key20": "3XRyR87L1u3FigP7pjT2HsGr3gwhL2Ho3kgxUwVEsVmwKNj6y7ZBkEm8naGhSFHfkGAF4m1oMe4gTW5NAe1VhZ1u",
  "key21": "33Kfcp8khSnrHf5DNRhWpizepPCcf7wUJaezJiTsGWsUd3XDAgXM7B2RJcSkwdH6ifmshYX8Ax8d2vkifP8V2qqV",
  "key22": "mNN7782iWcDxy8LFr6mV6ER62SDXgcVHFNXKjLQazRGLkVw7zq5e4EwCZjwJnTFSrt7kU73dvW8ZUyNMMbKs68e",
  "key23": "5YGPSGhubGnedQqK3td5NaPJMJ2sn8vs6JxyBZrAeDB1wcNDf296gRbMVZM4MvvM7dKxG3Pmck9dmWVik7LLe2MP",
  "key24": "2Lz91SdKC1GexBKn2P6Q84cGQt6Lwmgm6ZaTuyAEeZRQj16iKrMCUUweLEUoSFovNhmG1KwwXDqwxq6B72VH8dr9",
  "key25": "6YWouzkhxJZepunbuo7eGB5tSo54cUeLBdmCtVv997vBv4uNtAmJHYGdkYiinwDtVoagZpTVjhbhmB1bgUD5dNY",
  "key26": "24wUNiSBcMzPnz4pU51euG4ssnCDWxqbwfMwkNoQxGNJ88kozPj1e28z83UHuQKo8b9oTks5WAqG99drUh3xhj5P",
  "key27": "4oHto2ZrWS69PsCYQjG92F4951BhRAwGii6me5kQAAbSn1xSjtA39AkySkWQwxJo8E81HQqTgYZMZosG98XsEkgt",
  "key28": "3sfVtuwbL4eVm9RAv42ojmkN2w1MQLTyjSswHyqHsoFPmhRtWjgRixMA3yGUHN247syzr3rxqvtuFeCnbKMiD35w",
  "key29": "2LUHXm7eG3BnShDQzdSD1cUBEkpWFW83B5FMXNqZ7Q7TiUNjmtgso4P3Gakzq5UJGKARNiakqwJzHrRtRp3P2NXc",
  "key30": "46q6UjmXC9P7enzSF3dG9NjbA6BZZxZRysYaWcaGWFerTVTUcpdYbuUL1mFQvi42aJWMyvD7MEfEHW7TG22PWDzo",
  "key31": "3AWzW54gAcLofAWuh1zKJN4tTXqkzyswGzQUh3YtwqXF9bnsAtiuM2hbd7KJCAtw2HsCLh9oL3VnQkuhbSvgieEJ",
  "key32": "2moc1C7Gwb1ZERiVeUPjWF5ACqgNz2F55f8sUBcMnsPwBRuEPSjqU57TPD4fGtuQiPCCwq6NvruNFf5A1bVdNuDG",
  "key33": "2syAgydR3KJve83r29HXTsbimL42XTWwXtjkPNJW9C6Y7H7obtJM6vcmVxzGVTuXW7fkBH29n8HMn7KiGXWpvp8R",
  "key34": "3HLhQiCwWTipdTWNVKUrVegT26xf1dnPb3Uws16JeqSPZfM1WsL4S4EEsgbQFNKFUMFUa6fEuwX7EKKKivbiRh29",
  "key35": "ovFj6vLbNfFXcV4jdgPgs2nRLpJCW3sfDFTWgV1eVxhJ3CSshamUvG4MU3iCHi1CjfaSQXCT2FA8mvYtbD2Fwkv"
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
