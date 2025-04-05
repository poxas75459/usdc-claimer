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
    "3R63QbXWuSHjkgVsxceRrjZa47xANgzEy54sTjNW8UotbbNpm7GdWMQ1wYFZaPjTDzWrwQV7nuEjnAkW9HCDeYzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VyDghzRWWLeNJR8Ksimgu6mUsfNp9ENoGF5KvQdDqCoLrqJYoiwYfdrWwpz1ecgst4a3qUNN6ozm1xvLDmndtyH",
  "key1": "8rLXriGVGa89xdSnVBdpkqKEdasaQTGpfmaHsUFdqL7PWmeseDqLLBDfgDA5v2MWUfp9xncbnr91wGTwGbMbQJL",
  "key2": "5ZmjGAj1tyduTf3RZzeQ7jtCYyFDj9BKtfgFt2yBto3YECud7vdwRSRyP1Uz252SqWtKY6WBp9c8xKPtd5bdumGW",
  "key3": "2kojsu3hiF2K5wtViYQmJBwujTUmhuqecs8B6qPhW1eH88o2CVvhMsMKEaf2RNsAKd1Yht6zLe3MeNeU8iUui1JZ",
  "key4": "sQDLNb9ns23bGPB5Ym4UWfSYFetSC6W7f3DauYACkbGVuBBwRDYPAeRTFh1CziS7R3TqwtSL35R4k9vFuUt7wwB",
  "key5": "489kgsiy6LyEjAGe5uSg4an1RC5vh17UqnDpp2uTck4bDF9AzW9wdCuqezWFxzkeW4zN3qdveNDgUbRfn7eGLGST",
  "key6": "4swxreXgk4xiQknECNh7dsnuQXYeGMUJ529WLGaB7T5kiJmBHH1Hr72DiymPWbAYa4dFtaAV4zvySKRaAAmWzC5o",
  "key7": "5vxPhYu1E9tMKLgaiv3caDDBmr1DAoNh9pTrXEuBVXLW4R3cQbGUudvNBa93jwmmRQFXhDKiDhrVhs8mH8WjRDwi",
  "key8": "38hqsnR7ezQ24zeoFyjQEsrqtJ36QaVW7FTBXKsxBFwGX7SCRunZaT4JKLo2wUTgRrY3jqWh4hGqkaYdmXE2AZW8",
  "key9": "2pFaB5zM7o3WSrauwmJRAfk2DaMvtD3FinPSYEMq1H2QMRtCrpivobXiSpYRLXwTAdtXXq4GAoi2wG1VvqWufZ8",
  "key10": "4PgMDhdCmtWs9a9EiQXmHxZhhoS16uDfQ7TzuFpH5hRAEjWkWogHmZ4bGVkehWytFVzcHgLUCEmnEcNpU7n9s6Gv",
  "key11": "4aP2afoPnA7ZCaGbye2X1ZD78y7m6eKuDhfU73Zxot1ZMZVobkCsTqYpJm31LZPSZU6gqDBQopGvUe44dgR8nn78",
  "key12": "3ag7WTnX6CWCDQ624UX521NtYPrZhvrQ31wm4eDERGFZzkmDD993gyz7gFEDXFf1mDyg6Vu8wMBdnjRKx5W66zHk",
  "key13": "4P1rjvej2ShVXZscH28FatVc64Lm7n4upUvH8hoKRAxLiJ2WjBD6SXNYuwKFHdo9UzpUBWJiqHys4kYhNav81sza",
  "key14": "rY6pVQrCn3xfsn1hHHND8GVDtp7Ux6VvZ3H2zcDh6vPvTuffzgKGia8i7KwtDPkhZuDZJa194oynHDkLoDPvpnq",
  "key15": "Xqzr1gtfsxUVrYsoXC8E52rxCiZw3JmKwKjjRFEkYW5u5smsRa2vFA9XDwZMvCCs6b6Y4gZyBt7hw2RRpuorZNA",
  "key16": "3DBD2WLZbWek9LJA9XmAf3wgFj5Uk2pjjS7prjc6fkvZJppYc61NHc6ooxG9fXNzZ69pGejSz1b9M5Qhw5xZibX8",
  "key17": "Q6tsVhbLVBMkFiyRmkSV1fdjaWFnvqs86usX19sm9ToUprcyGZBfScyqHW2EzfbvRhrV4FuyvhN1v5QSAeiYeNn",
  "key18": "2ZLn5aJ2jWk4SouarjYdvnogrZrmqtNQmngUUvSkkx1D8pvhXXexr1HBjsZNbNU37opL5xZUT44fW4V4kgxR1cfM",
  "key19": "2er6aoyn5qVJKLQL6HGJPakUu8icwLcsTAyopaR96KQs5iHs6RMEdqM7HfuWj7ZY7D9rFLLn18LdfAopuQy3asbA",
  "key20": "2MYt59ziTeKt23wCfJwwtGsG4vGHw7MoSxL5BmdwknnYLEGFZSy2xE5UeHyKyCyn7kYe6nARZrrAg7ppht4YwnnX",
  "key21": "3k7vbsphRXzLj4unx7QByUg5VFLh6PfCrAbSneJQZ1QUomz6XsRpRLus6U7kmrxhV3VbvyxYhdGGecPgb5LGXDaA",
  "key22": "4rgRhtUd2yUZvgFrwit3SYznMs16RarisZFWZh2AN5THYvtMBKDwCwqspNEUikSDPD7TZ2DkxaqjW2LHVLZybkYp",
  "key23": "4yK2aH3beVtqQxQHcknGyQ5a8Ziqo3kGWVoyCwj31nTMadA9o5ukMq3V2H7fAcAnS92qP1UYug4gxhGDhjmY3YK3",
  "key24": "5hq7wRou3p4t1eZruamJ7g99XyT5ruXsENVxvFxWfkietsWvKGfcX29jRTbL2yzuz4SLAVf1PnWrPau3WJWnrJZa",
  "key25": "5wLt1chjjtjRWQb5YcSvbGsmZuYKsUv2rEx4w6hzxdkaepYSAhrcR741TgJvjGmwX9eWj67yV5e2HAiCBAZCp28Y",
  "key26": "3GZcETaZtKxPRW1Cp3ksY4Ni97DR2q2huuVr6WJxcqCZvARPHKwcjEz11qLwFFHmDHjSxV9mka8MpUVs6MeMRShy",
  "key27": "4JJd7ioF8GxYtWu3TbHkkSHk6MF5p5XkqqsjiwGPPov4yqpWfGEn9wkSfaxf8ybqU886JkppqcXxiE8Zkanwxi1",
  "key28": "33XPgh92qsUXZN7a1geGvxgszQd4HXd4QZfXfUZ3L9xLybTerYMat1vhNmhdvWctsj9k9DEoxefGqCFVT6rmkvxn"
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
