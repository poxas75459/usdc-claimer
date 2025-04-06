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
    "4HexR7ZW2JxGr39tGGzhUW5cehvzEqBp3e745bc6kmQSEQBc3C7enRqDKuM9v5ofZTuPudeBv7X9xydWWt4kjULz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57N2jV17ioBLzseBFGHa1aztBGCmvRpLTMZYEJg8a4X4FQSDM5tNuriN35gune23K8HGaY2jWCA8xKaq2tVXkC5F",
  "key1": "52gxLZ6rEuxwmGmHgbfA6iwr4h2t7LLPKHFGWx2TC4AsN4tiGVLhfsFbqzJm6HC19UrpPwWXKTR6KG9G5RXu8Bz6",
  "key2": "2bP9qefQ3dRFbLzHUG9HgYgFfoZJg8apzzqVwnkkk6V4qKqVFGRLNbpUXwfqdvjTcBrQL5h63SJmEiBPFPCLaJe7",
  "key3": "34YYegX691r1vgk7QVfd2zHp3T1Ds6Swkz2BchnkyoDH95PKfPPWcQ2DZ5MzTxKcqRdvTxc4UWqwErKfG7ybazcf",
  "key4": "268ZytcsgPAZupEkU4Fic1CqAieRPG1iTrv2eC7ExAs6EoMWaHWebk4uU7UbviJ8GM6jT6XGBjnugFubWRyMerfX",
  "key5": "4B8yULkEzNXGqjiuxLyJqwHZLSD733THtovveBhDobQH9TRuD8UfoyyauSdJ1V3EkbCQjuH7gXLkmHi1r7trVVCW",
  "key6": "3ag2HxYNhbFpABb3auu9Poykvup8KeCYYdaMXespdLbEjSRkD2VMEcfVLjDXAxsCNatrUGAKcJD2gRbS4BGKCPRy",
  "key7": "2yygtgj4GwPJkaFtXEz2DxD4cGJZapZ6bJq15z2X8qmH6bi5GpeZenk1THHJDgo7RW9XKEUec9gabcrRb81UG6D",
  "key8": "34W3ufRqoGEvoPKRU18eBnzLXsw24vNftyLNUATvzh38VEWuaLfrKKZGpoLmCeDpEfX629X1BTU35GYGLZM7DGQg",
  "key9": "3HMVX7WhrK3wsALXPP7Ae6g6t7ospaMHaqXfFUpsuSjqePzoBeJoPZG5g6fow3nUMtXbCtKAfYzrAdV5ecUWGz6e",
  "key10": "499FpTikwzaC9MnhpEbmmyH2Y6UdQqCjNxmEwmeGnnuspmcYq9UV9TagU52tjPxT1oU95AGoNGRzjrujyN3T6szf",
  "key11": "23kE68QRiPDZa9fM8DBWM5k5PSFvL8EwX7erLwKQ6C5J4z2ojBhsxRDEJFk1uoMq1EcBpd8SqWZXy7DNsPAhGQTN",
  "key12": "2xXYi4LnHyfiw2hdENrNt3fMgimZLq1vycc2NDsf9SkCJUoT5oxi8vRYRiWHBRjUJ4JgW27BJYaJUY1cqp325QCd",
  "key13": "3UzwLEEJapwodG9RAhYWXDqvZrcxkqfZ3Wws1gMy2Lbf8uBUih7J9U3fZS3yjAiF1qorsVsmJPUxJod6BrBx6G71",
  "key14": "4uu28GasGUDAUVTkxcEzZ586XGyi8qYuZ36x5TDWa1XwVkJgkyxyFz4yBjntUDqHs5EAmbB75przTaH3U1wdoKmH",
  "key15": "3mFrxHnaXYT99PQQXojbyqJD1ef6YBBsfM3ek7beTgkyofLTYjLGwYkW8NZmD7KWUwhPd9S4MsBrKUssA2wJ7j7a",
  "key16": "o8GGYqKMoyftQniHYbshwQJf772kgUrS4WzwjYcBRoXGiYJn7ZMaLHnjCjXSovTzUCM5Tyu8wXSDpV3BSLzseGN",
  "key17": "2AczZYqGucCacnE5T8LS1N8Ad2T3mWBKfErt9zF9MmyYDT4RTbbMqmg1kgqgTTu8ooC8KfGbJMjUV5xRpN2cfsYh",
  "key18": "eVAsq7KMjd8toonA7RQcWA3knkNeamFdB4nNRAJHMLjRAM5PyNH51u8RF2ZpmLNbTyuEGzw9QjKMUSXs2Gu19pc",
  "key19": "37eo6Atwkt12CAqC71Q8WWArHEHXQdfi7ET3gtugqNzLWzwd4huzTXRzBfvdGhtEuuVcYPYiKFxpkqXW62YNfqqf",
  "key20": "5gx9EkPS6kmvVETJp3SUGjuTBpvGijhTWcPdzr29gCy8dF2q2hNgfS1rvtQEaKeKo8siMW7XSPuE7uXpjfjhfCK6",
  "key21": "4S6RnDLmhfwEwehsf9PSqHVWcHXmGPg1TXFHYy9WqaRB8eBRcphnkWbzJmWWugUjngapuvPYFBjs48s5Nhg7njfv",
  "key22": "24U2hYVyq7bMf5AX8FFPfwCckjHwwNjMs3SS68oYBJpBETgpooZ1eNQgEdpiYYfucqzmE2azoaK1wycxAumSyoph",
  "key23": "5Ykd5Xdrov7KMytWEf3bwv224ukckrUKJUkvUjNB9ewYPEpCGLSeCnzYaMgZFVX38ruo9xvPvmozyE2rVAD2uTok",
  "key24": "4GfxZJCxrgKKtG9oqU9zrTB1x4cdKyCuyzZCrJqeVBmVVzPe5WJPDdNNUFGZCm5zxQqbjKqosvHMzvUEhVdggpDS",
  "key25": "KRTxxrkKC26mC7Nv7SVrC3MhkfNzFLXQuwaLYpUwPdxLwtXCaxfSS2Ervy1SF2ucBBv2emgha22C5GjuyH2fzor",
  "key26": "5ycpvPCq7pNrutGRLF4Ez2XYRsCeGJWwuRnxCHrdc7j7d1gbGrEHtPamVLZh9goFaaiNPhuYk1xU4TEvowVv9uJf",
  "key27": "4XVdu96jVxgpJtPtLyzWysWFgGKstmiC38eRV45qvaHQuBAzfdJf6fGaASTay1fJgw7grz9FD8TwTkoyg2DkGvJ6",
  "key28": "59AZXPwDqpBuUqGAkzYmpxQtmTnfhFLQYJqkGwAaddpYKg8VS7z8MgBWuKRu4WQ41ockZrsjR3ydHHztUaE1y2vk",
  "key29": "uJNzMVL6AF7PBsTUH53wtTEnV9Vpu2hqgXthEMHNiaBm28yyDmj4HzcA18syCZzENQ2HscsHcTwhTAufZDqQceu",
  "key30": "4zdH5SzE99cxqXgehj8AM4vRSTE7C2mcW98MDLJ1BMk81KnVJnwjE9kqveHYeyi8wDXeFBeuBL6NPBmwovZBYHny",
  "key31": "gxTzu4kDyUubi9XfzmfN9FpS2YJVXqca9eN4nQfc1bDA8wSWArAeB8jmw6scaXjaBoxyj5kdztF8rNS9xYmtBzk",
  "key32": "5tzaSE7h7NHmi59BDere3TqJBE9QCRwE5n8nZTLPSJStwGBRraVzLRiCV38wnJqJi91eU3oLxtR2cki5kLT9iHLL",
  "key33": "5D45L58ZwN1WPHhPvhTGBfvQ7LwSLFP8DLxrRmNF2JV61DciemZTeAzr8UjdGgv2hFj2uPvWTtm4aejAuBVNH978",
  "key34": "4JmQ6yAXnZSEnBpDk9xE6xnZ4KBYjoFNbv7ukH5DA7PxamAMZ1iQxqBjxvkQAruf2dmbUheernjwjcLncmLt6HzE",
  "key35": "2Hk3f6Lh21RxFqPhyk3DN4NHTbREZqsNb21XRzVv18VrzZjcK9WJP16hTgtuA9xfGcDjP16qdsw48U9mQFm37Woe",
  "key36": "5K58Jv39nd36pnNVtAFjPmHRJ6xainVxa5Wiih4bALKm3bf6SXrySNVmGsL4XfrmhAmioFeZEv12Epa3SckAmZE"
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
