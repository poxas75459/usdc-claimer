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
    "2P9VZ1KgZkQfnov2hEt7fSFUd42cQJYxGa8RVpEM2FTqd1sw4EvfMTYdP4rpwTGqJnWaHi9xDwW6feMxmmLLs5SR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksSGQHcoK7uqRCb83y8h3yDmSnYAnTVnDK7UbyK489LjvLTmM3r4ojvJptrdx7MxWYK6fY5oUcK3wGMSVhjPGBS",
  "key1": "3N7YRzLLRzHqMhQPtKozKdY21SJYb3RZGHJeNb4PropnhwSCf5cGN1Q93KsGPAwYhhReUizG9gn1MkasmoBoLRVn",
  "key2": "2raXGU4YfMxCFGg26PCfqQbyxSUXAkdRLdJFujPcPsKZq3nSQu2GaiyZsNg4Xo9oA4E6FQRqeNd3x4GYuTkp8q3k",
  "key3": "2igzoFiCYGNqTKP8Nk3dZ8oW2Bd5oyrn4SYQsE5Q5EBxSyesRJgL28Tg4AiscKc7vXic8E9oPfNdexzhUHV24Agc",
  "key4": "57sYDcHw7fDdBbntzFqMZmLyrcdF7wehbtpbbbpixf5RhcDLnr16yfmYTqAQJfyLHQYzVirFqam6mHbF5PmjAmjy",
  "key5": "2g7TJKPidXHHHaAfubZpjMxFfPdFxr6yV2gabxw5ZDJaKLKxAbjtipFbChfjkhZDwRC3CX2Ng3L5mt96wT79B5dC",
  "key6": "3d9RWtuDNrdkaggcZTGnkMi8pXYoNucQLrHcrNQMq4Y4eq56qcXUFcHLaGCyifz5HpuN8AhjByLqf4ADgnSp33jQ",
  "key7": "5DZyLWutyMsdrrPLJxw4EDKTYKusqS4X9ZvXWdBrZJcvecPDCx1sfvYEC6DujWhb47FqnMgyfNuD96RX2KanA5xn",
  "key8": "4GkZucKoFvV8vX6MgzxiFu9KQVfBkBnoDRzWgFcg7YBpKNKUgvN7hvbWnX6UMrC2GPXqUEUW8KkXvkZqzxMH8chY",
  "key9": "njUvJgsScnSBqUtd6K37xtHzjd4w49qUFGj42gyoCpUekpCie36u8y2becFPd519gXjqLcNzn6A6Ri1PzuYF4Ft",
  "key10": "3Hknq1m8NG8YKqufekCkpjEX8G18EeqCoQ8tjSg826eKh5iNyAUrMyFyXWxMqEo5ABWakD2YmGUwZWnCW49az57p",
  "key11": "4E36CqB4C9W5eiLbGHWQpfBeWVtEoJx3bQjJQrbaCCXLxxMS354wKq4cJWWxZjgessk6tBLPY49mUGLNCGn4oa6z",
  "key12": "4u557G4YNcnY4zJ1Rp7cR6o5ZPivAyhVY1EZfFvgL2xy4Fh7wycyuFQBfscEFZDTTB75UiNctdH5J72gNy3yFa14",
  "key13": "tfPUoFsZvt9KUj8Epv9fWGg8XxqHSRH2oQq1w76k3pYpQ82Q3QemiEWPQfs4NVGqrZyhPPWYoo96nKN65KCGNji",
  "key14": "LX6anV2DzXDaxdWnYFQk1vidBDXCXS7bzdi9BP7CUCL8SuBjyBjVWWpP8t7Z15Pt8DjECgfbAbDCte5TLNYM75t",
  "key15": "61fE4J11VvUhSGWgVcLozwDwBza9Hz7HVu5nacMggLGb5nyN4cXCYuTgezc9UPXMAZDmXEKRYnGsqBNrpApAqiQE",
  "key16": "2CXxh96jYTiufdV3EUTjNAjq6m2kYS6yXj4oyydkfXvXFtZUciuaUNe8NHASgJzN3ZAeEZqNVdsnJpi8uaQ3NBfd",
  "key17": "HzXTKuyi9ggp3dCZdHX2TAstRKm7Sh1XvGKoxDiMzyYHpUBByH9kMUyVQ2DGkncHiYuzsxPu45KqzSEB7tWdFG4",
  "key18": "4FNZtVBy7sFQVccJVjV6gvbhMpvXjmj1eGTE8AEBeXYEgwDY9G3Xy41kurSuVsYkD3A6R2mqRNWwMTV75RMFaHBC",
  "key19": "3vAkFrhDaBG67BvzE75pbjsNgYnLYPEQjXciTkkERmS1F6pTTbQ4DeBwbwQcwBpVo53z3UV2EsnTvPRAZdxb7NY9",
  "key20": "5L5fUVpMeN85w7FHP4827px32gVLtUsNpxVhQF4tHhCHFqKarS3PyQVpXEnH3pMPULhQh55bg6KA5fESyhx4BApS",
  "key21": "qoukos58wnnV3mqLMb4SfNNisMQo3GXcmxFMjEjaC8LVNnWBsGH2MA8hcu6q8HQAdbw1oLKy74ksDWxqBoXtH6R",
  "key22": "2ucFmNQ2NAKkiV7dMoPjkds5NcfJB1Z7hSdWDVPj4amgwd48nNaED329yJxK9ipbb4tzhcDLZ1Bdu1ostonKLW7R",
  "key23": "2tbVtqZ4aPHY6r2Kx3EwCiEXQoZZdcHj5Lfgjocf92Dk44me1E6WwAvDXjQy8mYobAqNcWjeqXHUA29AMdnN9czL",
  "key24": "3rE2JpJqEcyj2RzCm5pycNmSdDujzwwQRSYrzPHz8rD3NsRPRm5iujjGF8dVDPFBV9aw5z3jdx9wwE5zMdjdcMkS",
  "key25": "fiSCVKd2TNEX1R39DAgJW7hUGGbiH8KTDyzjsnT1jvnPWhEhMjsXkVYnq5iJhWRXWUmNV3tauq1yUT9RkvB9Dyz",
  "key26": "5HA81C5957FpqYkTabmetnNk9YGgrJZoq2F54tm3uSHoahxtCUTi9xwx2A4kDQok5ukMANNy94RTkWax5ix4CSfz",
  "key27": "3E4CiT8qWBXKQD5967TzECcbdvQZcAY2UoT5FmQTxp8DYUey98ktNswCw9WVzLeyA7PPVCUHe7Tg8rTUX33gBgWV",
  "key28": "2gyh4ybqdV6hiRiPWkxEWCtHKxhuUV858ghP3khR81FEuwh8ruJ6S5cLd4C9HwdpqrVN3xA7S4m2jvG8AGpdywzK",
  "key29": "2YRKQVgy7n28j27yesX9k7mqVhdeXHuL5jkRCUNuCyDZFgYJ4r5d7n7Rr5jjYMv6PQA2Z1Ns6GS2ZRUSrp79QBHW",
  "key30": "4tXnPer87LXQc75Y7GpR2Kk69URZ5EdheRtcLes49RM6JpVyGdYeuQjAreSH8PZCaU4A7HWiiYewZm8EgpcSJqc6",
  "key31": "4VtY9LibQpGtEtBS4jrnhczgbMmkdojGHjhYf3RaZhXw21S5rZxX6B7kPie2ZG3hFVVGX8jvNuDAUQ8PThzGgSHN",
  "key32": "4J9aWr6iMMFG1RAJQLu18m4kRn6CGSQ6nANcFh2sxH2bMNqvHcMwJCUSnheRWLuSX1acQHbs4YazvTgZpDwFqXZu",
  "key33": "2Y1QqRWeb9ycJgVp31gnkHyBt5rJrn22VRT7R7g2X6iwpKgxKvpJJHqYyjvVLKRUipgwqdjJq2a7QNJkHQZY9xyX",
  "key34": "UhSYN8sBUSSE9JnNgFkANZSQr7tyR2Joqg7vScX1AAmhq9zUb2ot6bffbfz7yKffVx8a3tpktp5DVKhN9wKJ5Hz",
  "key35": "4YLmEFnBhKE4ZC4RpfKPbVPBucayKGAy2VeiqgfQ3LKciVgvJSR9ZZuuc66YHpfVhb1dM2Hfb3PXFdLypmRW1WV9",
  "key36": "1irGjdaq6bkd28iDzjSTRHhFWUAqNNZWbEJeCMkFDqT9XxZjmfCamJf1SJSLc14YxegJkbtMbdK4vFJqAPA8Vf6",
  "key37": "2kKVgpvTXoRvZWvTEnWgtX3ZRfTiY6sVz4jaG6tKE11gpQKKJKTP2q9vD7MQu243CBCihRuqj6htHFRBChkprG5o",
  "key38": "3rkJUEesoZ2Y5NYJT1k1QKu3AwwSxdCL4BCSy4PdiqWY1w9iZqjt9XoY1DeAfUAW29FU1tkeaoM9uQVvq8yCTH7y"
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
