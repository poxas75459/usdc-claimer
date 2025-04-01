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
    "5bvWsEx32TitSPvKbnZkbUtUFu4C2pUgHhYUdeTpTzjbeyw15kgMheCoU1J3YiBr25DaLZTokbC233nDxcAZ6NLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UviBEWhYcEWhZA46cqLzeGyVvCyeuxrXxFNDxRNCHo4G9KnQ93Zk5zbFpnYjP3u226tT3t1MKLYgtYtdZjv5zhg",
  "key1": "3GD2svWbxSsi64tHUg17PjyxeeFtQhHvA9s6kEEKeyrjpctKtRFv24ET8Wtnns6NPzehR61pPJbUpXYiP1gFqpp4",
  "key2": "5coiMftumQH5m5UzrSUkhGw2HnnGVNUAuFohmJosf8b9U1aKBej78rFF14QQwpUWCxiGJixcKrQHoXZxUcWQMjEX",
  "key3": "rV5MBBRfDqv5zip2FxDTCejgyPaAoZri21tyTgvubAk4JRPrXgxtRGc1NAW4PvjvjmM6CZ7nEtYY41mEKiHfd7H",
  "key4": "4qEUwjz6f4RQCaGrnEpyNzgxsnxqhDA9FPB61VbnhSrErdM6GRh3sw2gtUL3py1SKkeBKmNnEmjSjUmyYrVoqvda",
  "key5": "jGMP2p3ExoMgBjhZTLmpqdWajkEpD7Mictbj5RnjNQ9wyccgHLmyheWs14AgV4SvXBhLYw4YaDWEoQ68KDK3ipa",
  "key6": "2iGVV5GjGZTPfcDR2e3YaoQWhy1Qi7F4NQY55819GhNW2rJbNjALnadSnXcfY1pZzabAGtk2vB49zVCD7xTFFSnr",
  "key7": "4a5Mpwwxs1Grg7Y3sAwvaCwJjerrnmpGXB9NDWgaxVo7JuCaSqT7b3BjtPsP477egurnx7cU7o73c3uUUjxjkxQY",
  "key8": "5FhchzhDGXSAsDrWxazdz2cxG3FKKribPU6GNw2TssufxbMPW4CKzt8U8pEeEDLhcXyBJVmVwjySidjx7j9dCzDi",
  "key9": "5fB1MCjNqoMq6R9E5JPQebfb7hr3rUKLKxFoHyoH1D5hktKeWvmY7SuLJQhJueg9geaaE46yegWXp5MTWRW7s7kD",
  "key10": "4C7SSYNB7hFkkuaz12MRSTB8xDNWzJpv3bDxKEqQTq1LzGhR4SYbZtcVC9KBPLi1qjALXYGTBFUKUET6r2CAX26Q",
  "key11": "5zoYddU7152aaPJkkNu2h3tS326uTH6eLmfxUWnmQLfqeNBqSwo1DJixXZq9w8GZYcNwfmeBXKknn4xA5tRjekbG",
  "key12": "5svijyvtTYfr4pUWtYxDMPmUjahUrzi3Pi9ZLTqDR7q8BDcRuUfxC8L9CJdTYtqvsP1bmHdcV2XkHPHgya7Y8QEy",
  "key13": "4JthQ1KScjwZr5nWnj2DjJAADgrssDf9tew1CHw1aezUHqDDrdurUgLy4oVmN4bYJJP8oCTkgY8ySfogsyh6R81K",
  "key14": "3PuZdbLatcJR93G2WGGfnLaTQn2pKmvByuEJZi1o33brGx1EXb6qA2JnxEPtZwiYLmS5vz4EmBB6dP6aapmidqn8",
  "key15": "4JMQx7gTmh4oXmdWipwftxFdzDD8yFngxVNZ7vegJMmaUkqfa5NvV8a4jeN9jnGCUuh5L4LuvH46ehWLShAWZDUK",
  "key16": "5NLy6fH9a8QYSg6DcRnyrh4BSpPQoTWfmJiLsoUdp59o8DX4paDNj7gdoT5g1x2suUPTM4XdGJ22x8oh37njC3hg",
  "key17": "D4nTBGJAWVcpsavwvqWRonN1TZpeLeHvAtUFhTBAZKn7cx9MB82FQwztiK8CLWuFx8UzoGbEpZz4T6Lbq6n7nXi",
  "key18": "64ad2D3EChPqzfvMhZx8hLNGavNvwaJo8LPbFYvLT1ibQ9V6d2Zgq6UiJ22kwMigEj6raq7hsbrS4ZFwo7dpWP8K",
  "key19": "7h4oZMEd3qrfmBQF7JtmbMFYRU1gbYnjXoGYgWverJqWzPRALjnaJ7Fso1T6SrAxh4AvthG81cB2UatgwSM5zmE",
  "key20": "2qEKDfudWKDARAo79Fz2zKpb5ci8BUsCv7RqvAcjzGkdPg1w1FbLmFW2WFWQE3hLs6Z9FFc5zwTb4PEmEQptzkrE",
  "key21": "5pq1PnGgKC3FtAoF1yap9VHZ4E5GWmQ1Rq87qairFbrjqnSvFNN8tPseqZxTHQunDB8uzBNiSWVBoNMudsYpuPiR",
  "key22": "4TyS7E2QFAVj3yRZBRoEhfehVRknmDpJb8rEFRR2oWnoEK9KQnvBhnhfs7uissFYyzG7gh272kxpNiHcQQ6VYtw3",
  "key23": "2czyzDcxUXjwWezDaGrWnsKX9XGsMkKwWUdZnFZRxvqBTV4Zd7JqYFLzuzT5NoFXXfXoQ2PAZXjthxcvVbjYzR59",
  "key24": "36yPGWNeeYissHtebXJDu4v7DyYqioEcq2Abwv33mpjJHHTYDSekTUENroi9rRPLT9LvsA9EE8qHZx7vksADitjT",
  "key25": "3HVayPvq4xBvF6bW5rS2WLB9oGmkY9UDnFRUB3WpY4gHuuuAGsemQb3LZGKqC8AaTcVTABhMZF6KXvMmRcUgfWkc"
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
