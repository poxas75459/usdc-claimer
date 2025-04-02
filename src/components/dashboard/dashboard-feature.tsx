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
    "3RRhRBDWHqbn1YZydDLPG2QvnVjyfto2m2MamJrUqzZ8dbmhDnDxVbv1SZPc9R4hqSxA9ZtUaXty9FkmgNmybgvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54w3mAnqwF6WMvRykGmRFqvV8p4njhbHRfPdgKbQpAGaDScyvfHm4Rgn5gZzxkHnjHGzG4WPYbz8B8cbeSv6hSes",
  "key1": "5wDah2bNQ1EsWUjbu51RKvEYdob93UwRjVTsEuFYN5St27zxy3MQCnjmnHzwhBULWMb9bTdNXVNhUnu9JekuSEhQ",
  "key2": "5YkhRuypTj5hyZ61tM77aEGDykqo8xaTtDnhHLwKHRsnCxM98Burqss5ujH4h6wsE6CtG1GF8wcCbgW8F6EiptAt",
  "key3": "4ffCkaEPnvSXeVjdxjDkh2Y9NnpBSwXsVdz8MX1A1yNUs1mqd5mqd9oycfP5evKZoMrZrQZqzFfGc8oUHFt3LchA",
  "key4": "5RiKKScwMwN7qYdkKaagGS7DAGTURZD4ajq8AJKBsskcD9WB431hrxbmwqEKWBDhEwtyQwAHWQUZYAg2PwaMxe7V",
  "key5": "2DutdMCdEXcb7hW8ZKGomyAiVxsbnppP8wgX1EbpryTMfq3pr1ZanCsnsJCFkkGqaUNDn5e27E2D55s5TzR3D1iP",
  "key6": "5LURdTa63qFzB9EMwxScz9HRbcUmoZtNyKJEZSwJgWhLd8BRzw5kQ8H28nGefexZsrxH5jsdYYED8VUXrEQrWwh8",
  "key7": "5zwfycM1xCu1aXZ4zy7k8D4DksoiCoSsQDRVVD9c9dSQdtKggaYCr9quA5d6xEL77S3ZVhh9is3333NLHomK7nZ",
  "key8": "4obtwaTKoDPVRU32XEWzwJhfmevijTB2GFeeG1ubZWgZfTaVcmvXtc1D5EhvX4GLLZhyVsU5T3DTJRnoF8u7wpUW",
  "key9": "Zfc8wnpaeyfqqzXoaBLPfZ48r7VqHa8AqsrKLwqfnefjn55Jf4xMCRK4zr27EGVmMqiWVK3pv9H7QQkS1H8XU9X",
  "key10": "4JmmiVhUpKedkh4hvNTWn83D5bFhD8XQckmrTozPu13VpohKTwgEdue6pbtisvDf6cGpMwfdNezwaaHXCGJ7xGaU",
  "key11": "3VVJTLK7ffsrXySaMj3EcbNnvHtNx8fgE8v454tZas4r1CjyBgA7J3hoLQCpbhwdNLpUAWhVyNDLNLfhtNiXnY11",
  "key12": "43ia3bHd5wjHgtAf7gT4KcnBkSVPbPdeq4FJn71mupdTbEPuQM8HQcXKg7wBKaMfY836meRznYhnS6zrrd3JkqHh",
  "key13": "3jWN2fVzNcXngiSXjx2pS6kAJq41N1fhyQZEBJCJYpG9e4SViDYxDEDr2bw73omFK2ZuP5YWWoR5De2uuBo4ooDF",
  "key14": "34ww8a8VyLv9oFoYmHnGX3DJSUyPJ48qfF5KxWpjjzchDHC9qwc6RrGqHczi8c7uRa5iiyERneYrMiRFZwj9GBMU",
  "key15": "3AqhqFbU55itWXLBVx49NwDcCqu5MXWWshp3RxTeFtJ31cvaS9Za8q3LuwqH21vuMz122imbJrUhw8xgSp63M6b2",
  "key16": "cvLmK43UyXioGYeBKfxbg7h6kNkwWQcZB1jQw223g5i369k9dtYygmJPWAw9tB1Q7T3eJjETfsEd3T1ToFn3TNx",
  "key17": "vT1nYfyXjRJB5Su8woTfEbopmbeeJntZCLqG3YrqoNrnKTa8eTRLwf4EVzkmkVptzyhnTdWW2c5rqytivsmzyg6",
  "key18": "5czgxAnXWMH2J22LtDDYdHjE6QkbiwDFviHfq9Fq7memJjCXVH3G7jKSmAqu4VVfACNUHtf5YkMtLLQVZKfcrUpN",
  "key19": "2UTAe3pZ4Umman4ZopddGKuwUcSKPrinCtZ2m3uquuZCeRhRuQmcevkg6iYvbq9QyRuwGa2iMCwoVi8C1WeWiDVB",
  "key20": "5MydSwSs8rVC74oBR9R8M4TDYPbD8Xzddn1gY1LBjwhnfH2vSY8ZqAtCpegwKFeqmAwXJj2vnkViGWg7PcNNLVTo",
  "key21": "3AhbXqW6iQozKQr4aCUK7qH8g1JVehLDfyYoCz8dbLF4Fh9vdxfcyw7XcxKvhxC7Ge5G9As7mDvFcYsHQzDEh6Pw",
  "key22": "5xhbSQ17fjbq29UaRRu9RRTuP9Cdr9xR1dfaYSgPxHLYBVpNM8R53ZiyUcVzKj442JeZ79uW1g345e13tRGCegDL",
  "key23": "4gqtWhQgYn3A8vEK3WR6vv3gyiHDQLBfBx9p5ykY4uDQMNvfaGRyDFbWaCA6db3LfCiwPFvsq2yKsZrkGgMr3Kr",
  "key24": "3NYqtzeYbNFU256sry2fHhJ1ZFzkiJGzMURcj8KkVisC5gEYfAhwLJSuE4c2hbyEwNq8sYHCZAbfADGGcSU6ocV",
  "key25": "24GvTju5ZYLTWjutgBnwzekxQE8Lx2LFHmAUMjEsgergdFLQZYVh7PzNgB2sdmATR9mah3Xknrzb5NGX13aiTYPr",
  "key26": "5spWCyS6jaE5ZbcenvVDuyETmvHJW5F7ZEskoNqw7abaXxMbhtKojufkQsixn7HoKBsjnsXttq2cMNuhMcKixQ3i",
  "key27": "32fQAp3J4CeaF8j1BJisxR4KUsuwzBxLbx6T1tomzLUJGS5nAaUDaAcKrfcLYCdsdTZGyrn7TX64x38rbSrFc8AP"
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
