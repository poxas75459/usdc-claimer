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
    "JeddHXEEGygjuZg3a1Dsrh4AQKnnZJNiuA9xft3rYtMUCQHdKfcgnujbGbamzvGDPqNj8x9oxDrvaPeHaM1jkgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q3eUsdkRyuVXsAp1NTu6rcUg7JTuggf9TSAKkf86KrqC7gPtHRoPnua91SBrGGhWuJSnvr3vsd8yC3nKnBfdaRY",
  "key1": "5LzC3KBBPZ4xXdigsdZvjLGignPaTfm1ga6XQL7TcNV9ooTV3Dn353qZrXxEmqNRkKwXixoL94EUAgLRfYJrTVAL",
  "key2": "2GGUvW3MHbWVx3W2MsN5d17MchC1EE8DRqYorJFFtvrLsXUGmws4VYYQ6ckDq3nbWXeZ93e17H7rYKyoH2JHeaR7",
  "key3": "4M6D9PWPAZeRpx5iL58rU3nTfPWxUA5aP5ZNKT8j1eX2B2zbZVrGXHKrqgvcM2uPTyxYihDPwTr8DqxzViyoayc7",
  "key4": "5qftk2SEKngVipfiWDr1VY6jHAyQYNeFUu4vyKzWcTUyF7JcPhYoezX7UraRkf7sV9odajZfjmSbx9hqjik2uGCF",
  "key5": "4b1BXxvNiycsebgnVnDqTXXKeqjRqNPuZoZm8cB2aCWo9v6W9ABrJDJnQPs9wyAe5YgTnaGEk16zwuGtACS7Yr1K",
  "key6": "4zTX9QBs1iyH7ja6XibNhYAFsTfhrpmkVvunoXLVXNLyhWcqhdXnbKqi42s4YA25qbkSDsNY9XvxaYw5sUQRWeEz",
  "key7": "4s6QEqYGaxHs2zBhKQT59QdVqq5pbVKuW3SqYoDzEhKtZVhYo4CF39WU4n3kadDurChVuR5sSG6QjQudUhPbxAi3",
  "key8": "4kkMuMW4tQbKsMSeia9QsDHo58tuNgAgscjXPTk41G3LiynkccszK5Cv9vZbsGMQ7Vnnjhz5AT3k9x8PwEcSP2T5",
  "key9": "3ctTxHSNnTKqYqQUhwySd1TAaQ7VhsXqKy9U643rq4DpqnKrjRotx7qnH1XAXxpALNpY1N1Q2f41M92xanQ8bWEj",
  "key10": "4PxByyHK1nCkEHRjgQ8EDHgKcgAcpsACo9zsxgnr9BYRi6Ef6of2g6zuggNCeUjgi9iYjEbHgiZqn97HdKBnt8Vt",
  "key11": "5QbyaxoooxFzn443LjcWHECa3zCDAgsdNYdRaHdkGukzj3XwV1fGugvit2mE7ZZSqhXw8yaqcqmpzzZorfTm8PtR",
  "key12": "qYzjjkoaCuhMjbaNdswNJRnGMfCcngfVMiv5hgqV6w6UGeYqCjVDwD3quEHsqArKkYCGLn6QCfXhd3iqnqFAv1d",
  "key13": "452G1PfX5nyzx7nkEMGD3RvQGGCmfHq5pvhxQaCg4UyBpmGTgtNoYJcppK7oTumJe4UjzvYrPQbJBxYzENP9Vb6a",
  "key14": "4Kj5eCvB7BNradNRZ4k3DZcbatX9vcmSgPY4AGZQeDEiZzwQwvvhq2HSgQt8MY6jju6thMoCeKGwSs2x9Q7JUoh9",
  "key15": "hpfhRu7CVNoEWArw4tGEcbt7EFnsFDqYB5fHoXU2BJbMv1qpQkjY8zEsnw2DTW9HSNTqRHBUZKs8CwuoUs3aeRr",
  "key16": "54BmWBddxuxWYqrE5oP5fRDLC37rqXRuSQwA6kLb5srieU6vekV7btGSsrPZ1Btafoh5BRAbnTeSJrSmNDnjoQir",
  "key17": "5TFc4j1uxP9NL44Qw8nGqgoVEPwVkgMeDNawo1apvpzehyZxiQCBLS4J3e8rmVs5szcaZW5UkearqKffV29uvKJ7",
  "key18": "4NNDv7AVYTqt9BfZFrot9VaMyJMQ9LhBNz6VYUw9sxvCmEThmF2RDyciFgDp4g5HqhCLxDPJ28nC4o5P83LM3QDP",
  "key19": "43XyEtzkQzULbUgtVJ4Y6eLvhwXJTA7HQ1QpLgBMvS6ZVtnajQg5L2yvohCgDGvHWXGyKZ7FChG8i1ebdn8MMJtQ",
  "key20": "5tHpGgj8bg8KQnv9Bmo3r7GAGM3UUQVg5gCxuzwYfsvn9zVNxqxxXTD5X32cS2mmDarh7VR8NYnrTj6DP2JwH7ic",
  "key21": "63NjDyiYbhsBedd1Un6m4RAN6Jao3v7HCgvZCieZizq52R3YiHJshPJy3cHdQ8GVDu24nsLp1zmXV8auNL5J7L6Y",
  "key22": "2hwJbSSVLBJqhxxehyHEfzS7w5LT79EGENKCyiKzqHk4AcwW251bWe9KrJSogVVX1Nt4xcEdZofSN4SMhcQSDy8m",
  "key23": "3zZ7Cthk8MzJBqnvaXfUzz9ppSebBQq7gvGr99kKxALTXfTYz1EGSArBE5mfmDBrxWWGaWmvKbnfEdK4CcbUJimS",
  "key24": "5obzGRcUCwFEGrDbkifQwPKTpqeJb73PWs2y6N6R89TDjHsgero1AcrxBGYF7cjV4N6moHrret63nVgG6TwCKmxx",
  "key25": "JnXkHj7TdVdQgKSteo96dw9Z6shjf3Jh3E6qpeRMrFR8Gz6wzdE7qac5j2MhQ3NDsqpSjmzehEcun5JpVwJHi4D",
  "key26": "3NHzjyDCT41w42yY75WgJwhCU7VTGoGCCbczsRXUfx3zRhH5GiN4FSqtxGdAqEUYTd68Egn3L9Ao8zxRmwMcKmx4",
  "key27": "5AYTFSxSGG63NpPrQVCmeJsm9AabfehyBARpnun8au1xdnp9jmkvYpDbu1oTVpDsMvRkQLsDWVh9jPLR3LE2K7k4",
  "key28": "5wbkR9PaRCW6WVFF32xPExZMJMgARCAJWYbXgqAbvfQkwVwukwk1S5zs84gET2fFrMtDseoXaCELku9GAhHZ3cih",
  "key29": "3SZHYPmRHMLikUvQCGHLBudr1tms7wifAhe11M6iAHqf8AJ6jfVj42io3bLcVA5fjZQQLeChB3p3xnm2WnR7jJmH",
  "key30": "5xMiiDU9oQ2pssgh5mkDphBQckgvWAnnbPa8rVjn6ygKt1j1Yx7B7sKsDuEfEKGEY9ATr5qESkkiXAn3KAYUUWwv",
  "key31": "PhMrNPQQUVypkqaqmrwiqTAjmQQ2By5NHvu3kxHb7Eq1iDbDp7vG7XktUhSMkiytBWvrzdYhPFNRThDddGLE5zK",
  "key32": "5mHUSjeNAKLGGnQfEndgamysMxsBbUGdX5JuwgAVJNd2duAR6DoWqMgzaJ5WtygVZeEQfSYdrA6FBcEF8RRWftZs",
  "key33": "4PWULhKWgJr5sYZ4sVshTujx3HhA7ZZ5UHajsMz1QRVs3YdCXVH3khKZfDX4KHhZ4eUQJgXM88ymWyjpSUwvZ8Cj"
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
