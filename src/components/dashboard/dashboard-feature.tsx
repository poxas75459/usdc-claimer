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
    "3R1XFGWCukmVkocXo4i1uKokU7sdu5TikSzWrkDF73dZ8GJK3zgtBuAC8XGJyuDHayKV9a7pMLE2mSUJbL3spqph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsY7rp76FNmRUKKAc6PxJeRySb8DTMY6mn2UXbpBTXFkGnnCUgEBtDxWSrEkTN39ScFuDhNbhCtxCxqDUj4Anx6",
  "key1": "wk7bFEUYA2RJgSaKEuzgTDWuc2zXQQtncpUuVuWFR862pquk3iqu2pCCj4FM7dtQ5ibh1gmNZ1VqGNAk8TpY4Go",
  "key2": "52iL9Are46T1sXysCeSkBjcoY1aUN7voJhhdWo5pRTvzaVeR63cqZJLtpFcYtoroystBcvNAe7nKmTiytBv19d5L",
  "key3": "4zjGPBkmxa859okeMy3XKibd8bs7NKLVMusyk2rLzwXdxB66Ewx6WNfbXHko38WL8xrq5KaRkqzJsVCB611FQ4QM",
  "key4": "4bzuHZpigHcHhB79nDRf99KVALg5nnEvMTc9PWd913grpdCZCLF9XaauwCFJG7zga2WZHZS1wHkgMXAzg6wVGiX2",
  "key5": "4uuAgK3rjNKTbWsGxXprMT92LTy9KX5wuvnj4fT9c3txZK9A4VkCGnsmMNwoXAypEsuv6z3kdMhEf91gSGSUMi5e",
  "key6": "3S51yThH2RY8vsYxSdNDcs9xEWF3qF7os3U6gJWcvAnNbhR1aQ6kVRXRPDYeqmF56Cn18CgMqvj8WpNwk7Wko19x",
  "key7": "4ouHuj8kYAKijdsFb8SgMzuURJTGVYVUVpWTwed4fKRuHxMTLsoqchFqSNsPxsppWREPEo2o9RE5S4uFheskn91B",
  "key8": "51J68qLAqwF9sHBazoxhe3n4N46HY7x3vMLER3yiC2rMSuzNDtcZTzreVkXWdE3UA3nbNkfsGay8WRkG7VSPS1vJ",
  "key9": "4YKFAcdvKmH52qU4YUYrwAKBBZF23H9AKL4iKYM4mgUpuzQZNiAQm38wTGQhCEjAZDperz1Q5ovV4NZeNzJqNbbM",
  "key10": "2nftGgoP2BTFggKcmEgnkUWhCbP9ew28PCodFyiDxc1m9NQCLTkZdoiQapg1AEvmzhzdAaHgTUq8eSqU6G3Xkw1a",
  "key11": "3Z6TLCswotWsobXP1NNuKfXKHvVckqjGWFeUTm4cSkNyDi9HipFjP2wigDbZrqQJMmGuex7ijfDVBsLuZ6PuJxjs",
  "key12": "4mFgwdW8iQkd7ww9vncMJuwUrjWTFFbBsrsW8XUTxdbvzCqmGWTS64GAzrouTisajZ6g7tZcADQ44bpBh473Z2Nv",
  "key13": "28DEDfPi96Q36PuUnjyJDX8z7nFMtFCH2QEwnnHEqHrs4H33JYxj98QHji3WeceANdb8GBi44D4WJtCssXRQgkMF",
  "key14": "2evaa2r4KbMqEo3Po2Rvp7bxAMYM3PDbzzi5Vdb3bqm8DZXxwr4C5Y5bgBYP59tsaXBU9FddnLHcAwrN5pkUAiiG",
  "key15": "3QGAP3awAbGR78Q2ZctxHHbswPEphXaX8xo1w6T8mwgDRqT588XStC6Feyb9TaNWQLuW5z3qF2mhbsBrKX8kEnrK",
  "key16": "CysXLheuJW3K7fiwRDSNPS6LhcqhMP6R5bbd1Dj6BuLbsp8Ntc1j2HkD5jCZYbnNxtJBnTaZu86tWgnaUnJdaNP",
  "key17": "2ypDWmBFnQRNfiLMUj9zzgoNLiVjpjb6HDPVZpbfkSpuALp3Med4FUSVKJRR5QGay5FmtkcAxQNbc4MXUESiCEgc",
  "key18": "5yLu4R64dbVZM3TQBCsgxxCqgXRGNadvzvnnQM7GMZsWVetZSGpSk1jVEoUqjoZKykyYFpQGC6QBKyBk4ACzhASU",
  "key19": "Q4PVo9tP7tz4Gz1BGF5X3cVUgYsj9EzjgHCHRB5JxQsAkJ4ezNRxL37TXsvU1G2wFz42nGXt1geiCNSnxQn5cww",
  "key20": "2XQefRg3PxVSJgnEhqDrkjsXzvRx8T4tUUHrGdEeRj9fUHQUXVV8XkHE4jsUVrXHYkzRvVZRDtKCvcrPvGRTU4G",
  "key21": "3u4NdtM4oXjjVbKXA7cc2R4xqp2jNYdxJ7v5PggGXYhuNHwJ5Thp1eCPAtC4Dk2oWkXcB6Kwh38PaRQK9mRAMSSE",
  "key22": "25nc9U634P5PxdwLHs5ogyFkE52wWcNasVCsue9v9TYpBgWiHmskEkpZr4WiU2dkJ1fdEAfsTxRq7BgXVpL9bLkC",
  "key23": "35AS7gJxjAaJ26ZS9D4CVAu8suWuyrVubzwPPifH1Z6PQ3pysfcfHyEvDjETD3cdRMbTL5YWAPHKYCWPF6i3asj4",
  "key24": "256oeoJEDGY1keuWX5fQGRMBH6iLRVZCCMUxaJCLnu1kwjAAkXjAmmMKeeuL2Eoh1vrV6Jc4aD6v2NutT2N51fk5",
  "key25": "h1vA2B2bhH36usoTXvdMPWogXU4djGcfZ1u3cX7Mx77W8ZhzjifCp2TFcrHVNtajyc3CnNgbyXUMi65u9pWpQ16",
  "key26": "5dCHeYteKdNveihMrM2FVuiDdYuVjiqK7MHxvoCCXxPHnsX73qaQ84btbRZyB8QpdmsUBQo9bmfdfeCSbCx3W8K"
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
