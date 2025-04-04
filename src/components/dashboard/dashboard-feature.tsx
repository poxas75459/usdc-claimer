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
    "415BjL8q39VqzBXYPhtssimf53irL4ETVyCDMc3ZFNLAXhis1RcKpYABXMdiQ4qbk6o9C4aZeTQdHLSRc3ysHnhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iywXPRQXwgqRXfQa7qwFE21TMKTSEiugp1ZcpabnRyBhgpDCN4JrtxwKjakGaZjzS2WKRVdL5eLdPbmA5SHFvmj",
  "key1": "5JdWN1o29y7vaW1x3TW7cChemqAznU51f6LANZxF8HNfP4u4Kv4nJRmYvxmJzozBdQX9W7jzDKp6riZ7a9ajQTMf",
  "key2": "4QG7YnxsytnHfgCxfzJLoR4ntDh8pVteZWEzn2ebXp3LizJXV2EzkkR4RkorNmPT5hPXu9iQMFwUdQrq2QY4xeWQ",
  "key3": "3fMyVSFA4Jap1zci3eyMHxpnSwGmscusH4dzaj1S4B1YjzFfzLF1uM9wJjVFrwL6xkTznMXJM8CMLEGjczwEdFVN",
  "key4": "MkB9H7UrnwQegjENDZ72bURZUXYqKQXLtfucN6jSsrgM87QAMfMDkScvbSwZitz2CvJTwgNgai1c4dyx1KgkMtK",
  "key5": "4Xfox9YbcG3VWLBxBhi8pSAmfA6mh6MuxpNPdXCYyLSC7nJL7LZHphP5PYFvJsoxsmxo5hF4owCpjKKYpZ9VLGRZ",
  "key6": "5pgWd4SscvoFnjjjmbd9zMj96qiUTDuoAXoJCk15AyCcUc8zEL49GGut9QR7WwfibkoBVzd4tPPZPozXq3xHBWVE",
  "key7": "A1q9M72djxPX65f3P2tDTPxpQWJkDbEXJCoXnG5DXerFP1bNo3pKBk3kGqmriua9syqbmZkEWomkzXP8PYswzJ9",
  "key8": "3kUL4KtXQoqrtXM4Nir5nqbmfCw9nda4oHLjGbQBFS5EnNoRspjH3pkypXyY2bdkAbRJerH8Vm6MLSE5dNR6BcYx",
  "key9": "57NUSrXwZtvxXAGfLbm4ap4tnQcfrA4gLwnf59CaUM8PjPySreTgz3o3G2bvhTEfAdBsgjNSDJgF7yqoZQW55aQg",
  "key10": "2zBFGBYQhWDKpdty7DF8TxACBYuX1naaN6ctbVzhVcK3RYqpymZbS5S8fdfnFeuYfZnW6BDaRwMX1D8yp2EK9ndz",
  "key11": "2PM64aJT97WHEsZ43i1tXLbmKuiqVAt1Wf6x6UFpB4cVTxseUtMo81KJdVx37j5cdNe6YbRUhtvfTvrQGGQaAmGs",
  "key12": "3HLW7jvs6agQx6sxheWAERau2gRheaWyPq3XJkLtvLQr7upNdEjQBzRJhn3ok4mMUSgEsBhMDZ82Sf1QtxGqZrmA",
  "key13": "4yJMxxJYBsJqBkxeBLq5S9C7PZZt7LDF78Z7ZCV2oG5fUKQZa5sSXkH6D6rPVQ5cWnxw8ch7ttamwHmoYcrnWu1U",
  "key14": "2rfTgDRREpMUKvmTDXUZR83wk6fJSUsPmCGt3qB7xzDPS3Cvo8c28wJG49HKWAFJAnoG8reVCfS1ccom8q2dYo78",
  "key15": "3uU4NccDHcaYmgp9TcUACMRh4ZA3qQXnq1rhBwhTRVoL18dsa7j5nWQnCPXM8nk2AkXWuhvEd9fymEZN7ddEzJhB",
  "key16": "2a6XytCwRpJAL8KwqU11TZsbcpNXe8evbzdRk3466u5MsokQeLf2XyLJTW4mqF1tnjim34mziF3LU1UayvotVco4",
  "key17": "3aGeJ6sTZpwP2fxjtYkfBTUdb6WWzp7iMKcc4EUxRVwu1mYfU77nExtWd3FnJ7HzitFJyTUGCgiqAMGc2QGyBab7",
  "key18": "4XGU9Qhm1TmUkgjfDK7gLujAkNP6GA8nMXS52CoPdsDq7QggyHYPRbDia6Nfkc6BPUMmg9T8MEUjt4hbay4MercS",
  "key19": "3vC9eJmo6PvJQ7ZMB5SnWUWH6ECge7FgrVbM3fc1U9BRaMnDeBwrQuCN3ufT7wFuD9pnxpFHUe2s6TU9c7VTB9hv",
  "key20": "59H5WaDeMwXPfDZBZQo2qKxNfBQj8ogTCyXkgJoCabb7wm6DoVw24v1pTWby66LKfHSSxyuQBrVCVkgdcxpbXotC",
  "key21": "6DRCUMeaDzxxNQroyGgeKZCuHr92TLviK8EeMrfybEoNKU8saFB1Kgw9y9YGygpQoaGFeQBVXi4e3MPjChkoSZK",
  "key22": "46RQQoM7J68bn48DyLHuUYJMEGcfyf4iFZXzmDcuySeCJ5RRnt1dbeLZntYYecus4UinrD4SYiszr6hS8mJGX2w2",
  "key23": "5RmTcTxaytMcE3bpuGVTtcnL22ACcRG6RLAvH624t6DXHk1TEEfWori9VqNpn1xptT5yMa3TSxvjd2KX5qWzNrn9",
  "key24": "5x1LNRxgaXo3uu1PL7ssXVBSb6gUaSA8fajjaQEnqFisDRBLy4R9ohHngnQ8741eBgXFUqwLemwNfhgwpM8vBSUv"
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
