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
    "g1LAZ8yDLjyagRkWunjTbDuFrAyMi2F9WcQkmy9vy1vGYtwaxQdUNDRAPh9hJA95tdUouFn1aPhyyCfvUU7GSW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28FezaHFiybUHeCfoZ8gxUheZ367WeiJ2rX6cnDkQiXQCcksxeb7zhnPCu8w4agQ3RthFT9WXSb2ALDNuAg1uEev",
  "key1": "4bm8MVNjbreSmmahw9oeVz52TxC3Te7T914wK4wpZaWyWaYk27C27vm5JbEeNGEers9wXB7BFhCgd39rQXsDSgFF",
  "key2": "K1M9CApYRdmtfyKMZ9rbSpL6LZqp157hi6cqubtuoqbJnVEAHfA2Nikj6hn43jzo7mVFLkWx4Mr4upuq7PG1Vvy",
  "key3": "66a6jK4R41EG94y1gtqctCU83M61jpnXye52R2f7pqc5ypDNrCUpoqaESMCw7biRymBEAUJgZfDwwenW4bx5xpAk",
  "key4": "3kfpPjqZ2dCyZy3RTNppU2VC74PmsLSmbeHzfAQBVtBDB5y3quf1JZN56Csq5unLbZ6X49XuFzSNknztAMqqqYz9",
  "key5": "54F6bpmfpeeYWRX1SZH9a7okwLCrm7hs8oTxSjqp8qeWze1rvgp1wdC5EJBAgkiPDq5MYKwEFKsUXV9iMwmasX9N",
  "key6": "4toh8UvwWTyZijyuK7p7pecs1mbtc6CyF4FfM6i2EDAyHhGb4GoMn2Dn5P429FSGVyLZzgopoYvkvbthZrvgw5WG",
  "key7": "5bz7uQWXaJBn472CzmSonBLj6hj28X6dE7VJJPCwx6zUQB8tk9rSyW8zRfYJoUKsrVnxf7QQhYDpTq7CjRKbmQ4v",
  "key8": "2cdF1TodVZUyof99QQX1XygTvdK5W1somX3ekPZsPAcTsLgMVdN8R14h38Dvk3NeoJ2d2Nm6yvvN6e5DXPmzJ7jf",
  "key9": "5sC7E6m2a9HbFEup7ZzEPt2PPjEYAGwK5M71nom4Zms6W6snKEZ9bEL1MRuMAfPTxp4rmLApFhyyJgQfSsmeSuno",
  "key10": "LwabDxbjPdS1Pe4wVuP9kPBachxH6ZLLssTgLhmskeRKdnQEvbCawvfQvetZE4zjmeVch7QMMd5rPKD9mqh4egs",
  "key11": "3Kf8eeAcLaR8zTdoJxsE4Gz1XxnpZzdSv2RPhAn9NKyWL1caqZ2TdtEi4My9MWxNHW5SHZr8Xg2KQ8TFUWSgYcSj",
  "key12": "53VRvNuiuPC5t8zFtqpk5XgskNz7BESYJQmWZKbvQ7kbmemVTVkTg9j13j4Li74kXV9j6zKJnabMRm6biNGxmfH9",
  "key13": "XW5CB7Cuoe8VJgJoU6BaNZwnJFrBMUkZgVWWD2yc3WrTPcTDq1V9MSnw166FKzu8tYsF9hFFFbwXYpm3vm8PBxz",
  "key14": "MLeC4922ZLgTNFsTQDa1efei2fSsePUv8jWbZjqnP9v2AHqLk2sPSZ3Co4M9vtNUvZ1PFi1r26NNGUWkuhDNCCn",
  "key15": "5Bcj1BzPoASPL7MQGmzrA62iwzuvD9Snq7aiwrGGTzeBzyzR3H5FQHovQmtpqgVyWfENhddAeNjfRq6swJ8dCXA8",
  "key16": "a6mfAzQo1RMuhnLR8vSEvTKwyL9PYzXqznwRNoDtQT6yr3nooPi2iykF5XiyhSYYa7qT6AerWML8MHcEk4CqfXx",
  "key17": "4hXMufwgd8VfBwYwfxk2TXEvDw5xbB4MKYh53qyfHniyVn2WuubFE2m5y5rU6StVXtSkL3NmZh8UnpnGevBBfqNw",
  "key18": "31WRgLqxKeo1JeTzcKfYC46Yb14HXYkT7bPoLFhEMj5v2RTM9fT9oAipyeT53XsJQwb2wi6og879PDyyVHEmWLPK",
  "key19": "36oPMxpzHhhfRm5fqyTZXU9L4z77ux1vwSfC4Y3qXuS17SitzFKAH7g6qwU7TrEjVmdh8b1HDeC2Hqb6TcKPtjTd",
  "key20": "2CaVm81EtxWEL5AmJAR2sRPZx8CHx7PwA23fsff2EywJmkWNeAH8ZW412ZechTbpn1p9vSsamJbZioAkUVjXfrYs",
  "key21": "2uuFd8BXg4C8kZhSg8k7rAcD7fGGeo9YdC1wSb6FN9oDUJwwTQ6qm5CMRjSszePtqm8upz6rnen2wGw6TeKsAZCN",
  "key22": "25TSoXd1i7FXEYrR6CBunjFQ1K1EfYKUFoCFgmxpc1jtETVLGxiByi6UnwiX1Y6LfHByEBiH5FVWHVjgUyyKJFgv",
  "key23": "3RbZhvv6TPDzFLJY6TTZoCbbaVjMAMN93z724Swpu7e7xHvztttzU6pnvJhaH58J5HPVBFXN3y958HtmLPGsMEwh",
  "key24": "5wG7Lyo8EtZ2UVHP4PrQuBhcC2hpSg5AcjpNBGEqPkipr6S7zHnypn9aGfURYWiH6BG5bQsqNypU5cK7aqdR6RG2",
  "key25": "67m6JGaHwqY6fJmA4x3L4k32s3FPqUZQf6L2jvzg7in6Kwe2tNzbpL2c4nhXDorcztzLqNmmwyP39rDP5HzmYGg5",
  "key26": "3wAmEpPY7i9SNaMAjVn1p1YEfE7Cw7Mu8ma2xDrH3ottUNgz3STKjGt41zMybf9Pfqp9PRQ22JXfwof9JswkHZW8",
  "key27": "5s2268JhmWEct7WHTtzwgT3U4hYxZgciongQeJS6bXs4MBCYRuh1udPasXL1gSqyPRrBTX8sY5zKpJCjZ3o556fJ"
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
