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
    "LwjR9wzyu6gg4owsg3yMvZbYCcSJUxRrGWyWapjdyph2aGaDNLfmxzRgS1W9bFYaJE9dqDkmoWmb5xyK12TiNVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WUF5DwGB2WivccXsfo5A4be68Gdy8pQxXjdvZvXFrTENxsPasCCi3q3Arh3PThzMkDeZik47GgkxD89k58BThgN",
  "key1": "34utGZFiv9e7Ty716YpqapmPida41hAMTz41CkffWXAGp57vUZvADdnUyYm7BckVrFK2BLERGyXHu3MPYXmF5gyy",
  "key2": "2oDLwudpRKnjMmtU4xJMcz4Yu9FZSHP5LEq143VWQxWe1HybYspz2TNr6tenrCQsMLvS4zGqiuKHB3jfjx1Wvngx",
  "key3": "3mccCyBXL122y3Y1muopbRSaGEa7xkvFwpiX2geJmybhAAx3ByaJJs1TL5m5AGQjpUE8Uxko6T3FRojSJfUEsb6K",
  "key4": "3H7dmDSwUto93fcNGXncVHm5kpWWS8AMJsupJN8PSyuRrhNZcs3fbrVhjgpsX13UEqvdeQHszX4HAXqavBAK7GVE",
  "key5": "2NMVy6M7YJDzBFeEmmSCVyjmo4eVLATp4sHqnqWUrBKFLxiK7bBSMbnnAkEzErYQjjywqd1SXC4LEXcvnar18bkR",
  "key6": "3JN2XiF5RCPvh2BkcFNzbpuJVtbgcguAu6Svztfpef9EfSaFpgDXPjTy7PSzAkm1wWd39aszknm5R3fRcE7vDL75",
  "key7": "4DZm1oxauWEq2uPBGrMG27h5YLxchaY6wXQnuj5eJcUTuVRCfA654DwyVymTgYMEWyaD3dBYMwCgNpQYaZgSySdp",
  "key8": "zsNneKp4uswmSxv6RMfeEuLyKYWDMkwZG7ZEZiNpB6wXq3izF3N3fZKXUZt2mFAvuB9n1orkxGGPAAhhgsmYngh",
  "key9": "21DudQyKcNqwx6eLwfwxF5QnL4WSU13hKpLQWM4TxAJqBCEBh84i7RN9NYzaBZJaNNaCnJrAYneV9Vw2iEgZpWyX",
  "key10": "AsD4Y8Tsmxurhz1nPUMZ2hp8uRUw5S4JkaKfWGHp8vgJRd9xS4G85wYcnW6aBdc3mced7wTGD8uoeJ77SJEoW8x",
  "key11": "5H5EdzAWfkKkCA59uADfGBxPz6LqkmN6pcsbE8vQtfHmoHbQwLxYxbgn2JZmRgpUEuS5rX2L5xGFWFq1K3PmzDKg",
  "key12": "5nWtu7UBTzsKvFtyDGSBZzytYT6zc2fQEqyAq6jsaPs99m8JeT83cEd95yXiRoqvYaMRarBX3qhPrsvdV33RKuoD",
  "key13": "2MR3nF8T3z7RRHxot88PzDMBkUMzCMrzFEUHQcpzD2oBxJvmmG9h9Ta3oUavvUoHvhdhu1qCz8rZN445veFdt2db",
  "key14": "5cgfCXDgkhtRsX3Q6DDDGNemfqKQKPF8f9ZdjQgrBb6fAK59H82bsje24L7ucZu1aS6iuaYm3FgddGNUk1ERa5DH",
  "key15": "EZPUokE5JxnAmzMnKajDqn7vY7QZ3RZiAbsLzuumsp1f9zN8mJVNXCk3aXwU4BDLNhfYrGHBKACFib5sNEQVuXY",
  "key16": "t7maEEPRdnv1UN8rkAh8h6RqdW9L8jxUfbiaygJcqRbhasmai3ehfXKm8vDoCX1skbeZcFWuaSFpo7TXYECPeVn",
  "key17": "45SY67VYaiC6Xuq9Rcm4uoewo97cCPCnCCHdFxnMF4xMfNQxM17jpKwdEMQdM5wCn65u5GXA94NLgvESWiVghPvq",
  "key18": "3xMCfcxKCJw86st6dsB2VYt48gXQUtzyaXyXjbsch1wukPf7UsQeNqGqdWgS1TonqtgwYnheotSX3VSYDo1HMtyY",
  "key19": "5crJ7sjm2wsEn12DLPD5eZK5biRgM6UdbktAwnRuzvmHUbe76YEPBMZTrsrC4r2tRYxDTgf6xSBXrxtwDDayTnXk",
  "key20": "35znJVqUZDzpBayoKG1LRXPyxECznM8GpN2jZXgu3yDwAks3Tc63T5cobFeEbrpNzpNbUxPW8CF41WLMm4RYZcxV",
  "key21": "5h6U3voumgWSuCSx2eJehRa9fxhjBNuTRB4tGPxPVx1LusCw81fgp8jRqTK7MqaVpCKvc1CUhPwufZetCumfJmBv",
  "key22": "2rNf2e6tj4U85VEgJZmrTW5pz2cEXLW1UuyuTWwgEMZJcE7iF4oYRoEDpAnP9ztYZ4xqsh41xVNhDjZpFBFQHqkd",
  "key23": "33XcSuqXmDVcSSTcKXScFNNkcjbezeaCEgJCymUsPJBwS9ozfQG3nKy3pDMxvf6J21Skwn7Tkj6NocRcFhLJ6tug",
  "key24": "5zfs1pSKPzj8PGUNJkfLh9J3tnoTP5bboa7XLg9yakEQT7mnAFuTg8HXYdfbqdhTfaCPi6udtfNFhM4BLmXgimHP",
  "key25": "3QqbQ2dq38RDQsLyrVnxNwJN9ASjmx3oCdGpeWTe2PiZVdVmuB9DGEdfxFKKtue7qRdWFhxYXnJWdb3soMsNSTH6",
  "key26": "65bZ24hDLP6w5RPxnMwWfpbrXaxc2XDJoKiwjVVvqQzPvYyK4pUQALA6zak3Yk9RtTuSem2ipnzk9ty32DcX8jnn",
  "key27": "3ddfQ3FVTQGaSu1gCtqveXdm1fvtTPvxuehiRmr6cC8qi1Wtp5DEBLm92MKZCCBLxG1WYY18hyo1JsbiATPDpYQM",
  "key28": "5kBfBWDYhiaJKjBh2oYeN9VrqRvEJTtdJ3MWnucC7QdVxM8wHNnhx1Xt7mXFDP6LM4aCLw2FTtVfzAewwbrH2rYZ",
  "key29": "32ZWrV6SyYBJVQce3FH6AsUFfrzV6AkLvs4eti7DDFamH4xLyW5bLjpxt7Z1PWgezjg2kdGW1rju6b1TCn4M66VY",
  "key30": "3NjvXLK26PwXafyyxMetzbXmq4bjREEMENRefQQBg3HzN8CktyheexcHW9h9RxCTNLB7F3GjtKFX3Xrq3CuhQ2nN",
  "key31": "2syGchjHs4G2oUNWrrx7Jmp46hLKebCfk8RyDQksQmPJqWrXw2B6YrJEx3LxUW7MMm3V6CfkSzLhcLsyAtBnxcr",
  "key32": "2ta5UME9R6VaLMHKbRjeSUYjqvEfPHMQPr1RayHSB1nJY9kLusVhXRGF3ESvVodMtsdJuDqTDQgwq7Jjfi8XHE5d"
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
