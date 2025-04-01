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
    "45ujKFpmmsFbXSNUg2WgEKyUcpTm7ArUGjfGh9vTEBF5bEEAZ5f1hULkRsZ2nFp5dccZvUJjyGSoZ4RvvHSrhqRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApHZQedWk1okj3cprqEstVm52DkvyH7RFUmTZRn1aQpkKmajNRpmMUvz7SxiTCm7TM54jSJVDSem6orHZuAGGq9",
  "key1": "4bnNkwqvetx9L5wWsYY8kUAAec5KY3DTJ6T3YCi4JCMJ1TTgS1oE6GxUsDag9y3pri3thW4zBGw8ZJViT5Ar8JzA",
  "key2": "5erxsK5zgAix6wTUL2UUe1rY4swn19WLVtnZ1fbGo3pCcJkTx8MMUzQ7doyRTR8qv8FgGCqXQqmuakCcbzKoMrRb",
  "key3": "rrGumc8freKxA754btrwXWnfG7r5qLKNircVtDfAj7S9Fozx4D1AL1KDBmXqEtThiMGTJ2uucbdqmyiuGhqQ78z",
  "key4": "kinLF9buRE7G4JsEJCJHeeZ8NhDwvznHdPcBB8uwnXw7GCPVEeUho7HmejevUh6fpbn1fkhp2rB9TmTnEomC37M",
  "key5": "2ZyG7P9UtR53GJQKwWdPnimUaNQ4MPZds655YJrPMNeb9ZKqUJkKiCvy83CLqWEJiJpPtp8UMFSzbUet14UbNCVR",
  "key6": "9YcbX1PScp9asUGTWwenyssKSz7E98ELThVzRQyoA4f5w7WD5T52QYnPZiweMcQ53CeEiJHi7FHqN1NkaNFYfDr",
  "key7": "2L2WsSaqdpcFvhzdG5FuyCL6qe3YmVxjFnzNdzmpcWTK5FcsPGGcAYZTk4QGHCgAy8VsfHB9z91ZUZ64BmBa46nz",
  "key8": "3xbNAtBsXvqmvF5NALmRoZu38mmxdNEdHZRYdqAMQVCnsfseobfV5Zad2KJPKS8p92RRJNSdPJVydz5T5RJ2EqCg",
  "key9": "4Kx5RrKwZ8iavkLifsXP9MWrVAvv7gsAwdyiCMbcxkG2DdikD9HXKcZ5XkYbbmkgENm3BQPHvjZE51wTwx61wiEC",
  "key10": "3atHCdtujqpHSTR63Hqno5aUpjhAvEYkMe3mekwfiMacaLQcSBQrDrkj2m1orGN6o1TFM1nY198Wu7FVS1cWHiJm",
  "key11": "5mJbotFdQtVhjKmiwnC9sLGXBKxuHK2qCQ2QJs3vkUfKBtRJXRZqWgoBuh4tYMyZVqr8aUSMpE4rpmSahnw4t6PD",
  "key12": "3QsLWLv6Ypay8k7EHRgy4f52vCFsEV4Lmt5KGZSo7u7dq7BN51ywjYuhJQJsinLrGwpXUbWucHHJpcm6ApWabYk6",
  "key13": "44TdAyqnQsknr3cchYkvma8H7BpsFs9BMxMNpCJnYhnWH2fpGBY9EYVsPtrmPa97wgsdog8hhJM3CuQoZhPMkPkH",
  "key14": "3Xm1HxYFXGD4H5JY7u8dVoHAnY5dcaYioCZJBgfuZUDzStkB72aBAnatbJt1GYA7yyBuVCwCH93JCEWAjYVXpDoL",
  "key15": "27fh5D1yA2rSx1WhZpV2isCkySxMMpVfA55KBXwFxCJmAujXUjeGcwi5UsS8hhTJwEZiigMyYD19Zuk9yug6bub1",
  "key16": "3ydP67ZLRuN23dekWetm7eo5y8wWPgLk8zJrzubuEamYG4GMCWRSmZ2oENRcRiJ6aj1QVmRq7tSk7xXiqm54deQv",
  "key17": "sT7FWkFL1vNrrLWDdtcNZrjK43fZwBrUPtMAQNcBtaASJkintwEVh6j93rveDnKvrKxYxLjBJqJJ5b9eaDeVyao",
  "key18": "39mfXMrcmVB5g8L4GpW3psEZo5sP4DHcSaFKYHmWJoNqiqzuQN8PuscgSNzyAGcCHh8LNbeaPpxmi9WZQrfMwVpA",
  "key19": "3XB91ht2AYCv28CgZmQiDDUmmAr1PcWUWkyqDShhDdEWCcz3Gw8oBJXFZ3tPNJgKdxEybrwKe7iZLo5nZhLMcLef",
  "key20": "3TNR6MEmpzSdFeDGXW47uPrjHW9kwzjzb8mJC56W2mrMR354v7jzGPuzWYk7qvdsepEcZZfen3NKK9zj6A6m9LiV",
  "key21": "5vHpkS4FKYVH5YqWgJ5r58sCbCL3mZ9uynjeH2WfK3Vu3fynzm6qAbJrqigsRGoA9B4RFin2r6FkCHWPXxoRjyz4",
  "key22": "46Qr6RYo7w4hrFFx9pzYX85U1m2mXhhZ7nmqnaMUfJ9WieTxNCi79MzJnaH1rQG9W38Yy5bxqFrnKrvdQVU9LYDx",
  "key23": "52X51rL3tGXN9PjbEm4KgZXFtTtZVo2cqmDXr7qU3JC3BXEZJndvPykdYbPqgDpt8Q9qqsNfLPAF2zMdH7mEN1AQ",
  "key24": "4R4xCPjWcv3LdBWAZGut7Mguu785dyzxpA9PNwo4rCyv46Ug9vAez54dH4m1xBHoLY4sxpmepYwL8UJmXrQ5zu3t",
  "key25": "tcjYK8zmPM6ws2Sv54zPXGJpbMbDtqHt4tVpAA5ATJQcWxH5nVvBjachChPV4RFP2uG4DnxAp7yj619z999LXad",
  "key26": "3cefceW3hXDLaidTcnNnWUpSBtoafFcaH7n5NcFqiw6h5uhAaXNgAL7nJfdEJ551EXYqLUUP9i7DNWZnYeHm9o67",
  "key27": "4b16d6AiAe6wygbT9BmkdHAGt2KLUgSNrSXQjvuCHK7JHbpsNfczLKGoKHnB41UQc8WmhzXk2Mf5oyRXWeCc2mef",
  "key28": "3cU2oJn7SGEZWagx7TuMHegoFDZBhRqhbkAXLy2KuT5FcC7GKm2STgAbAjBZMFwB3FxNwBR4qVFUept693EiuVRN",
  "key29": "5owzdHcfQpQo262yg2LuUE29g2twH8zdXkzNQRuCT7BS8ccG2WkvBn3HEYWE74QASfqxWpVJK4n9hevEeRuUJBf9",
  "key30": "3RZN64UYBFdiCDzX1A9VKX1pmEyWytzx13otrrE6o1LyYsz1d69UNwnVvaivVnx3vhXyCjVUcpRACz1FazhyLd8p",
  "key31": "3h4Ez5Hcbmkc6UZVZ4cPaxRZzoLarHaQaXTKxHnEhe1CBK8vG1BxR1pUG3NEbFGUFQHru25e82mAmy6VNeaKi8ms",
  "key32": "639uLuJS2Hf58yZPnSp97M8nyi4ZdubVd5pBixJoAk4njjHZyC3nK197nwU9DkmPeczyNWg4D9H5Y4PZFMZhhaYw",
  "key33": "tSHGwN1Dxp2ZtzJP9NKRhpsAhR4SSqwy8vWPnhcgmjZjocqNmRCooqbWc39THg9Etr6odta7w3N1jCx3F93JUWV",
  "key34": "HWSeGrxzNj3Qi3sEUHdtnwmtCD8sxvksdvvcwB6ZbxHv9yikFTbLor3H6rdtdjuU213oM53cUphawCTUQncXHYC"
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
