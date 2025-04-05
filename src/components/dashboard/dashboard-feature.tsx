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
    "3h8n9yvqbLjCGHsTWan329DhbAczD5Zs9VgmSrcvnAjhzCEjGpwAQhxA1zFLMpsZh3HiFy3XNGFn4cgaCtbRKtJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osC5yMxS9HEVUu28z2U2AKMeYvxJ1G3uta4PDBjWYbVcyqFUZaNBQmWmVtCk7L6NyKahBQN5Wo8uxs1XA1HVCPN",
  "key1": "2w2zGw1M9GZwihnfwr8RhwefkZkKv96ZhnTqTffg4etrnTFvTxXqbkwe6qfcSPHRKsXQd72gzS2yRAgk5GZ5Qaya",
  "key2": "3P7Vc3sCBJ5FsRVao5geyiQhHUS2tdeHLBbFHaD5ijmEwdcETbagVEEQDDLERrwA3XFBqqdRzFgWrXkcduBWxZr6",
  "key3": "azQ3CCoUR7eYEs46Xx2MbtMVfUgAEzdCyvWg4SN2z7DYj4WCivASCCM3o39wu5F6dEteT9YNJfhPdfFC3ya9pq1",
  "key4": "61qrgUzq4yKT6Am9LD8a8Bsf94LfA5TPTZRSGPBGggPDLWxG7dM5HHZ74h6qUSgGcSBPqQu7CWhVLnDW4i98UuTr",
  "key5": "5R5GLmwpENTXTv2vVM8rLKpa3X3oBntbiDse6Nwkb85DkvDzicKnUmrKgnv3Zsho9KyWB1M1YevewPEKQmBA7YM2",
  "key6": "2mmEekM41iEwQL7C2HxkGDzccM8TzosCvHKQWsFJjwVYU7mpm6A7WfhXdh5vgDqcFy8uXY6BwwvWXCUmmyxgp4sT",
  "key7": "3N8q8DnJoTKGjqQFteci67EDFKkihUYeibqQKKhUshVf5kBHTra674SbRQaZR5jKPhqLPCxvucDozmhEfQ6WjtEk",
  "key8": "3LKGizAhg6eDjiYA7AvPdNhHNQKZ7rnEkoGgGL8sE5TvCs7eGKVGcarbFaC4dHHDArqVDWBCTt1BRFxL4pzzzcTZ",
  "key9": "33YvHhaFDJc7Uoad7FpoNKxUZAk37nRo8jCFCK7jCusx1KgpGE6KzwHEfeQXnkRhhrNWuPEvT4KWhDeB5k588vUN",
  "key10": "5hDh8svU7dTVJUsH22yALsfJcvXhYKCZGzhFLKnybBuHegupt7xajwUjK2xWV2tkcmiktHtEcEFtTMZy9jHH3Cdo",
  "key11": "5gfSjC3uET3ZBBEHAusKZovDXv11LMatCAxUoZr9oLYzmkYT73gVwiAEBDhQx9A1S18KptMrphQeeBXs1Ecnqx9s",
  "key12": "4zkFbC52XeBe1vjEPpr3ZVFEBYJyJgn5kmU25EmLgRf3Ja4ea3KPZEixjD8y4YA5Vtkcn5J8LCPhWGZ9FNbRaa8o",
  "key13": "3VRztZAxK92z54zvioBdKkgtG4bLt6XfzgKuMsU7BpkYnjGKTg8BQgJfNxxruF3sNT8bUYmrAt5VNpDCdy88PkFi",
  "key14": "iWmsfaTWb4vcp7uAETGuDHzGVoRNGsTj92QQJwV6Tj4K9qeEYyrhsiEUmBvqCYxrCFp8DisxLJ2sCB5ZF5JvD9n",
  "key15": "41Bdw2zdHkoRyG2sh7Cat1MoWfSKxYDD77RjaobhxcTiHn682qMLPaRnC1gCMYCVu8zoRNQPoroA62bG5C6vj9VU",
  "key16": "5kJU58oULkmTUar3ms1ZsAhxmhJaVZnN6qGozLFToUroMQMCqhpyNb8WHTLsyMeYhefu3dxgVo68pn2wetFNG48q",
  "key17": "uuSDu1yJtDeqGCmb2jCwXK9w5ify934jxcjy3CA2JD62qqDyfoNfg3MNnYkqSmek49eXLoAbxdHjbkNyy5jtgcy",
  "key18": "XHUntGdMeQwATXw2Y3458bwhD5CLwJAUHdv6KfgTGeqyq4iP1NeBk96dq6aPnJfhQyG9KnixVo54Kfi1RN4hW6w",
  "key19": "ZjdCwDWuqyftuKWFYu8StVoj9iesLedXwsFSeCsDzs6Lw24W2rYZBDnyP6b9d3bGEhKtDHWE6REdzFNikDRAddA",
  "key20": "2JHc2AgZaQmFeZhNJmazWfBZ2Zk8neKthgLvMZP6X7u1a97hzyZtGDkxwEN3wb1JEy4S2HKVhzQXU7nGDDV1PQvp",
  "key21": "43pKuvhHgZXHgisNNAd7Z9H52vhxptHnJbvjGjsBfHe25S1dkmAVh5PHxmYqMfnsHwR2c7XDsSWGRDoomv5DBwSe",
  "key22": "2R5LCXkJWfuXEL8VAP1gqwjGXmpmTDmxGNtWJfDLjWw9vaFmpeWnc3E9AkxN36EU59YttyonxVQjALZz2GzYYMzJ",
  "key23": "1qU23SJwKFd2a1hpD8fQFmH5zKYC9C6LfPK4yxMj2qQtXs5CanpW3qMcBRDrMfEXdmTofQrvPC8ZfeZYdydZijL",
  "key24": "47FQoHFkBUEQSwTC4p79Hm1XFsR6oy3uNRsBd5PhoV5hFQKMik8RkhMj4ZNVkQWdEK6RWwsHW2qTeTE1ovvx83TM",
  "key25": "2BkYy6R9Cp8XPB3FgzmGaiP3PU4ZWY53X4yHWEnn848viRZhSuvZV3G5Sfb4xpCN5NWKratUjf7rFtnNiKcmC8Yd",
  "key26": "2gQ1h1pqYg72DmzndQbdX671Q6PAeV7Sq7DJzx9rJwTqD9GzaXmtAf8EKgJe6TxPnGPHKrdX8aajvUn37fD8wAP2",
  "key27": "3qQuGdXWRFF6NNFzgwoEHRxoGQFvkiNviHfadPsc9ynJS23tpsEH1wiGDy3kjvMmVg9M3Nmym3LJQRj6tmAiAVxo",
  "key28": "4GbLnmdUcHiQ81RFVSmci3vdqVYMwpTPHQ6UustCSZPazpKZ2bovEU88EV2hHFAyDCmsMqQR6MCtp9EtdknAHgk7"
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
