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
    "4u87GKLzRK3TkBj8X5y5a23GNxinR6yqVAcU5D4UMh5MbZ6hbfe8kMhR4Rp2MgYGyLoyipzxiJoD49o2c6Ny9aFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "427nbcWZVQqkp6U4CJM9hiwDm488d5WhJExKFmUuyoPAMqG9MBLebfaV9mVpJFVE22z2BPGvaEkes3KWFftQET27",
  "key1": "3NCSzTW6TgsqCHLJJxnswEb8pzK5WExbEbBpyTsUbGeENFZ4eRkiUfrMRdC6dW6h1SwDvojwGd875Zh5Pozy915Y",
  "key2": "3FXpiSD24RXR4WWiBFjR239wEKpBCXQomPgLs7HomikDtbYqFMZ5DPz5gcTBV71krBv32qz2ydYRmGDpcvhnAdKb",
  "key3": "41of7Vf4cLVyGx8JhkcPcU1y4e1VTQG87JqjMTg8s4CSy4yiZBAEbXWLXmbZ6bw1ogo251dpPZGRvbG48e5k8j9b",
  "key4": "3Q9sALoevJDEaGiY4UAXPdehkPxjcLkzC6rvKjUbWUzNVhvwiTrukqVxBSJATXWfCpT74VpdCDoFt6V9e5p4mYTM",
  "key5": "5npzy7Btcb7nTsdFbP792eL2SJjWW9GxUCsPbcjvjkJ8MZ8UEMA8WU4rsisLUM8vKgLFAnjpF8hGpQft4QS8Xrd",
  "key6": "3Py6xgPeLHu7buzqqEupNwrVQ7MSgUEdHU8FvxR1F7gSLFqizkBHqAeVabMZWDmi5CWM3cN226qtwPM5TFUDmwTU",
  "key7": "3rbjzMsKFFhVEKmFiDfNMyh6PZ1PjrWsQVVZVYKKunDXnpvvRxgCLKJ7kKpKNn7rD1DSbpJYaDbYt8ZANZ9n4BZP",
  "key8": "A5rjqdaxnLsj7fX7iA7oD1G5TyTgdXRt32FekCgqRzSb5c1mWJcbotcDwhpfJezJ536UTMjPDZtsSKf5urxPgG6",
  "key9": "5Ra3mknfPpqEKfT419cwvgG4pDDZiCiSR6VweMUEASH8DpSZgnELoEAzSMnWpdeCaSdoZnXcHt2GqtnkGTLJU7ee",
  "key10": "3r26xhErJmn7wPvcDiNxoD9hW2MC5TLFtFC3BEDNhAbuPwLgPnamw1zyck678Vk11HD5sgWCJfq6K17i6EXYhNcc",
  "key11": "2Tv9YQRycN3s577FohJLqDFEvzyk2kwPBg4wtEj9RkF8LyWccLpr4zoM5EtWt4VxjDftxEoYCQHy954HxKPmFPvR",
  "key12": "2GhA9xtSXTdHhq8NW3bFTkdVCwviA8fsKbDPRjPLNHyVc5K5wsvRKtX9BkNjYeQXSyDEiCR7qgDG3v1Cmfp6YZaZ",
  "key13": "4t8NVup5csCXKVxgFG2v9GqkMLTKvjQn3Zhp7CCbYdyukE4C6pYjFfnEYGzsQPGgUd7MXgC59zv1ver2Ws4c5Pry",
  "key14": "8ArDss1LB5aXK4UhoMDuqMAwdGPuQgJcB153gThUPdGTjxHN1b9GV17n2N2Q6x3cuG3qv4wyiHFAp9V68AvZKJv",
  "key15": "4Yr7udu52Ub5H5GU8aGAda4KHszMxNPjSpmFQ1KHrX1XwKn8KvMyYF3gKmctr8dKpYPF7NH2rxXR3vDTJNA1P4n4",
  "key16": "211ew2Bx75AuNF6UEmGkPyAyta2Kppe6VeWyFvqivMxMnvUjyBsUFsf9Q4Aph2UqijJ4BZD7xgTPBUeSiWZiMLU3",
  "key17": "232AZZePgUGhM7BuZqY835vfDVQ6ZgdWDdDf47tjSLsstpGB2gk3i3qekML4KJReonbeCJjqXK3EgqQSdbnSUE5g",
  "key18": "2JW6vnc3eFB8UUrQ1p6tdQYmUKL5XjoDn8AT2aEq9EPskA7k3pLLm64iJUkrzXopi5DiRQAdN9LEuaDFMtxHZ9aJ",
  "key19": "5KN5m5NpgN4TVNUa4LnxGZEbrVZd1VBUJKmi5idF9b1AiBc1jfzckuX4zRDFyLhfVJufoXBgzkaJpHQ6XEiBvdMV",
  "key20": "67AzPuW5RqjgWNdYj6fwTiWAEPCzWeDxhTa3EsM9VdS4jn3s52UN6cg5gmipCbZ5JpScLo1C2fgPdVY9WGGLpgsd",
  "key21": "3Wiumf6G9Z6LbA9LynnWyNDGNwN9QHmzRrFz1NzyUA5tvnZq1qP9rKrsbnuLm93KUn3RchJCCph6wX6osG9ugmaT",
  "key22": "3deCfqYDEJkE38hEHTjCpQLmvVL33tRDJQJXH9L52RYGygJypYBo6wteswKw72H7Ra6SFmQyX2Dt1GpQZ1CNpcwh",
  "key23": "2vWKc6Wbm9ERNLyoFxU9qbGGkj62an9hLYgZwpZsj95y5VqonRsU3zBBYXChSpnznhHRUeBDzDPVHwrxoMabLDuT",
  "key24": "XxQYPhqjdLfXTaesPz6GGFxX5qbbS1ceMbrsg8BdpJbQLV8kYCPvzpNDCXioY9mHzaLwusMqWn8p9CW1DkJdHWw",
  "key25": "X4rP2NiXANocwihsnLcmYa4f3SV2hx1ZWdxZP3AA8SmK2FzFvUMLAxH7HozDSTetjheZ6twEQD3dviFCAFDBhaM"
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
