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
    "QkJ5mEcU8mgvrXYQRPCkZJuztZsbW9tse9GoawRi6AJD8AR7ndpgGABkTxBJiLWk6dca67hdPuYj4QNYG5cDxE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ETtSCm3G9VDfdA2uxtRBVoihMYdjiNjcajr51AF1oYxYcaJ7zCawJPta3iBBB8wgeULdug3sGtFC7TpBEbJ14m1",
  "key1": "51xqh65fb4G6CZTt8vMyPXM9UegVbCi8KS1ejXYbzNXbNPXH5hD7jeTXasLgeVf1cq35PsjDzFNjQNDXB4FoJ2p3",
  "key2": "4ZfiEBMya67YXomvCXEGQ7PmpZa2f9dHCbPiqHqmbnV5g4LumRzXH3iTJL1jEFjd4rCapEqtG5uUzEsfVvsbJdWm",
  "key3": "4EXku3e5ArUPZik5Ca4yC2cAZBhJew4jhG5Lr5rrzwQKEBnBTchjz7UxxebqV2Pb4tQhUhTrHnB8pYiGXnnyE3oG",
  "key4": "4n5DYCPGXrVXoGwnRw9etGeF2VCVW4om18SBNQNpVNVYmuwLAJ2VBKaaSiuD6JXtjZD5mZF2JCe9k617eLxpaCFp",
  "key5": "2nqeuoTw8wCmdaE11iH1o5FQcGo8fJvwjDFytDc1SE6LaSXnDr7zeAQwBu3iy8W4GDRT8vDk9tqR7iqGdACKPuGQ",
  "key6": "3orABDT4utDscwqD9gcvqjnwYjp9qdGswoM3qoNW5tEXuxsMB3eg5mZ23C3kHuaHdaJCXQfg2HczguwVw3fGxHke",
  "key7": "4SpQgaCcMMf2jJtPXpLNBp6pM2x85Xs9ndmaoyfdj1m5baAHQQ3fMUd9JefSXHskb6WkJB5VT1PqdYLY6Q7rUTxL",
  "key8": "PHyZd5phu5zCE7ysQCe3vbjsETMT61yJd1g913KC5ZjTfE5VbnCDcu2jeqKgMiUkN861ugwJygbv9VW4Wst2FXn",
  "key9": "2GaLyABEsnrSht1XYZMmjG7cbb9T4NRk2jWTkixbuqQAdGWcXYBLvRuAirjmzUYWHAF7VWJ97sFhwo4a5a3HsqL6",
  "key10": "5a7vLeRUigpZiXBaWEVwq4mEYW9i9bQ4VMKvwZ1BQVJ1AgaB1MLq6d1rByv1xQF6pApNJBEsZi5AQd5QCc4Xx5RH",
  "key11": "5WJVRRP9SFeyvqwFvPRfeyQW8biCTfMBnJ3aaTMX3auPCucqW9MuWcftqA14Z1Xx3ksNg8XfaiDBLe2c1ihbzGW2",
  "key12": "3qJCvNqdkgtj74wAvhLo8DAvJnJQmw7ZZAQWT37V2RhqtSx7cyExhbW7vwepap7NHyXfEz2AvYBYwpAiRqRMXraL",
  "key13": "4fwtyBMDABX6H9vjuhx7rDesjiRrPEXP28gFnh9PAge8PLzDRfaYvRynR91zrDTTGrx3c3Kou3dYJm3TPo4YqP4N",
  "key14": "5EwcvtQFbhVYMd4LCNKXDxhwczURyyEVwUzC6LwQDnpFLbZ3BgoL9GvqekYKsaSXNCqBysmcbAh8d7yVxG1NQE4f",
  "key15": "FRjVZks8evbJAzdX9azHx1qsufQUtmqnfBatZeokWkNq5BZZS6xsFD3dPR97oRVnP2cwDHh1Jxug1ta27eh8L5U",
  "key16": "3ZKGFeKdpExbHFpCToZaK3qP51rZyZNWxxHyBgp2ANVJJyuSybJob7Eboc4FUDNa7tFQYCS9mUkKv6hswWKEyfwz",
  "key17": "f6yqD5JhzMCp35fmNc5kiSqZM5X4BtmBpoX6yNAJbACSGTGxub9LZU22e3FzmkfUqYWiDbyCDNuoVMyLkwQrmQd",
  "key18": "3ouMPVCLBfKP9nzTqos8nNzGtPA69SAf5t9z1oJbwwa5dFEDjtR1isoQDDPxLDQQQq1zDakFBLuMiAENMAgSFLTj",
  "key19": "TKxD5cDtCEGHCtU1Xh8RkZfnxY9NGxTgUkKUi8Cy6yEC9JPtA5MTMywgf6rspbckCJ57eJnFpgi9ikPAXXYt1Kh",
  "key20": "4Lw21JLoGHa1c9oeF8436Fb2ZYZg2Gd3CjEgBVdxUjYi4Qzogohc5ukBoCZvMLucUBUrGiXm26PUH4cd4naEqcQC",
  "key21": "FqoLWq4gu3zu2WyBjH42UVSaA7GgQdk8UpEkURf9YeaXeLTQ9bPZPyh3PWr5tmqYJQM1YK2kAuGQAaEbGbKzELQ",
  "key22": "2qL2GKjrKyyNm5ab4Lq9MPCMFy96JvAbQXfNUL3pCiEomm46gYXGekkKAu283jxDrNfeE3PTG2kUGK25ECyCUqob",
  "key23": "4f4dXxv8UH7aCpXyg2sgcyYP6TUKrJXhqzVdLV9gtUjMe3NHAVhLB7XrTp3da8iQdE2Ppf91BEW3RgJMADmL1ZG",
  "key24": "72BoTV6sQMkQufruGz4sY912GnbrUGTuV7xby26fjhGTe6gEGX6oTh3g9pZDn5HA4gR86VhVizxX42iPAnmvRum",
  "key25": "2CYbG4JPq3UBjma8nS8sHPJau9XyNNfotzdPJmdFidM3g973xk4VjGL4fspdaPUw4X8xivdkE3QySjw7QGk5YR5d",
  "key26": "3Qwq4TfdTuKtdhBPLTMakhaPP7smSdXAYMJTPm1dWXX1J4LhcCZV3mQpUobByCDsT6fVt3ktHMTfoDcWn6zh8oYg",
  "key27": "5RVMiGkc5Z1bGR35ib9nqrVFsNJEnW3YqhfKeKE1qeAEZJFh1bkBwq1szjHNVj4t8n293T1mfB9uEPZwy7SwRXVS",
  "key28": "3rbjoQshKbeRn48p48iwSvtS7f4xa5xjPSPBF9dRf1uTF1ZKRvdYg3DdedWToHizjaLZjMi6puxvQeqPmEake6qt",
  "key29": "2JpsjfBfduUm8EGChVcQ4RGnjQc21MLQztdrPFGasmmiNzBxVcMAs4ziSqFE4zVhWqJwDSqMHCUWAnHsMPmejzMq",
  "key30": "4KsHV79e4kgo8cNGExWZ5tiy3g6apXCuvNdGcoWUNMMDmTUt33no1RZDf38DrWqqEP3gzR9dmEYRBfuNwTsuxRmZ",
  "key31": "39LxtgEkKs4A9raTK33sgprw5cpMnagUhMkzy7B6UWZqQRDK2pQ4dRdaZVfEhNQWABEvD4GcvGhubkQaFfiE5hnm",
  "key32": "2HXautnzxbgRnbAqkkuXUwSYuNdaZ9DQtS7XXo7gid9gTP57pNnyJ42c4qdNaPSF8CskzzLFDMVNuUFtLgree1Zt",
  "key33": "4pNFqCj48HLd1ViaQMsmmMzozH9KMyjRYnj5dxHqjFTfAoLgg2GffBWBtJ3XNPMKcWwR1XqqLiG21TDJPQg2mbZw",
  "key34": "DZSPF2SmyEViRDh1DaXbn7Ppu7txAYw16nNf5vCGDLyKTMNeWSURXJVZmtniV9fDNjLxQPxqFHYhoqY1S27Zu79",
  "key35": "5VeavsJrnhYkdo99LkJz5UBYtVeN4dhpFE2fqQi9VhnYQG87NFcxAvknNGqQyJ7Byvze3UBasH6WaFJDmcKyGzdH",
  "key36": "31SyhRw87bMPV3579TdFYyzzuaAKEQ3LucpPnQRWGkeP8KDmuWAhTU1fzeuYArk182kampumLPpG59PuSWrK9sGD",
  "key37": "2kaAFjf8seAbJ1U7dWjhr7Nds5RpaLT8zkFe6oo6bjC6akeiHRrsLcGYSoh2Yje32RPSs6t18QPBmnxRa3HPj4T9",
  "key38": "GhLVnPJCEFf89fXoWfjPGACVDiE9g7RHRR3nedjqLSQQJrptR8TsKRGAaPZqywEueKsYS5R4LA8df9MSKmt8nAD",
  "key39": "2fBJe8WvFbz7bQfJpoyX3CuQZ3UmadXdKcHgyoSp4TmKCpyNBqKsgzQz2qtixLGv3krxHSGkjYwPSjyT4xKjKTYG",
  "key40": "5mSvoZJJsD8rMzDpinYt8uLyUghnwomUjSGHA5T5rF8Sdrz2s4p4qn8egK7p9TurdUXqDUTPoNmi73t93hdThjk2",
  "key41": "2ST2foW7b2UqgTbARw9ybDNZ6eLDvjfDQ66bwexV9ZXmzVRCKW4LbyQmt1NFBmGJm24pYRC9bE7d7XxnxvhdeZ76",
  "key42": "2zGYmEJBsBLeTxMAGSC8CaiEBoSEGqpG9BQRXuEej3kmYYPvYVqMCTNZrx6KMsBcayoGnstWdJZJxyRG2iCbKeFr",
  "key43": "4NXScK85DZ4AaVsXSnhnpfCfXbWGPXwHfQAsMma3KrtLnAygnnCPvJmqV1NmK7VdyCAUqKtCi1e6vhNMMajgiD7j"
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
