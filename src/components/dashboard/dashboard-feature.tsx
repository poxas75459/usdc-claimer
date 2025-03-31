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
    "3u47gpa9qHwRnGoYXwtdBHAG7A5CuPcmYQgU33mdnutUaVdmCRNCwKr1LEmVckf6YFe3oP9bbBXBzy6fXeo6wDng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R6EixRTJNXM2ctGJieG8y2iCfy19KPUP7VE6pMJRa7oqCNYScTc7R1CowfB6wqgRM99L2hx3qpnCqRTbKrJQpc2",
  "key1": "32A8juPkyvStPV6NG38vtf1CYpzdSggCtHua2pjJJerqTwuPxFgiYLTVNcLNzVibJGcgfniLmkpcVNmTvNim9SaD",
  "key2": "26d4FXkXdKx9NcQXwgGUABkYbQZ63fSMvra2mBw8dtt3uxCghkoHKz32saxX1PuVE9nwUbXhQJq8C3X74sC3bym6",
  "key3": "59sS7Pc8Yak56k2UdvhahPKGdvqkLMrNRN8kqnHaKpjMWXVjXQJMpBxNqYE3x3yU9rdBovpk8v3gE58nHgqoVSmP",
  "key4": "57jksmcfEjeaNN8g2drvCKnKMY9aM18cpwYgkdeNXY3VMWo8DeCDKM7zXddo5sJYisg7Hifo4GGEALnX8X5hskJY",
  "key5": "4em9ovhnuzLGEivVCPpPpQQNMR8miGmpR8JNgrCnA5VyspPrpYv7gRuvHKwQM7ydL7y5ufQ8MNX6CcwFhomr2TZM",
  "key6": "4NwTPNJdXud3JMuQ1ppeoaF5wtx1bZ2b95vkypPB2NCYEmYRWwShoXFB93kNtq7HXds1Vo2nHh4NGGT6CAF4YfFu",
  "key7": "49PZH8pvs8wHHMthWMWKDwihkWaxHbjqNRqpGJTwi7j4HoQPSMWmZVpAds4ZBh14rwxg8kjtUWSMCP1chop5dwk5",
  "key8": "28tBnfpdVbq1N76B6kZdagrzqJgV5w5r7a9rTwXN7jJEFzDgaU9qk4Ai8vPyJ3HANhpHYSrzjnzBfhyeV8eRKGAB",
  "key9": "pnWs3FzEoVLFctEBJcpbuMeQoxtDdjBVuimWCEnsB9jPLaR5PvNLcaDZN2djfRT1q2w1BjW7KGdJvhvjxff9ZmP",
  "key10": "4Su5kwqXM7EE381cACALGbQVAxQeYwrW6ZpF3n95ndPuxy6Gcxrs2TVpwc6hCVbXBU6tMgf1g4sqcbg1j8ooZmNN",
  "key11": "T8ooMzehWwvenz76MywDteLeEVNZ95xvp8CS1pqJSHDainY1JQJ7vn1MsEmfHNar7icd6HAQ149VzYwPUFA57ME",
  "key12": "5b726UaJNGvfCUccNUJTZgJbzBBNwdw9NtvHtX5eGuPDrc1RujTGFMqXCc58tjRDc7oK5zTjgoCCM747R25c6eHM",
  "key13": "5JD2A5WsaT7j61u42Z7ESTi6TNruB9XdKCNfBZ9NMocQjpWGg6adWafSSxiDGBtjPmqv9rj2Qnvpgkv2BzjzBqCF",
  "key14": "4qXAEYBZdF8WdZuNiop4rtzNoyQoHT9YxoQsg8ub3pL8ihXY4uCrhRjRy9HAgtDyhrkURigPaNcyyzArXUruHcrC",
  "key15": "4ffxeEB5tKZGYcYnL6zMNG4bcmd4EYcwHiY8gKs6qVJvD6iLkL9oVu1gJmZ7CAta8LRSeNwpVpAcNdPqRhHSkcjc",
  "key16": "DohVXABLnAanNfEPRugG26m3godr7LbvV5AQXLJp3NDQFBtLpekXgoXy1E4oBFDgHL7atFSLZWFTrBBT9FM6KQP",
  "key17": "3RvjR7UDwzHca5jgyCPZPea1UF4KvVhN8DXJR7k1nPkcVgnY7DnVJafGyknATCovtv3esRM5KqthSx1H94UnoULU",
  "key18": "24c6cGqARb3JawupR9zCybdGRgQvkyLW9Vj3DDJ3ybJDGd1ZweEFiBncXDUhUNEJdjqAuPeWisXsPb6pR6W1nYt4",
  "key19": "3q1PrEVbb44ZhCfMnkpHXdmziN648UsE5zXB1DAdhauebmxa6KHAxEyx2CoNGRjsNqU1B8KzsBp3VhxetDgyDqUE",
  "key20": "4FFU1jcttxU8eTPaTXcXu6xBiLB3HYbGsvozDtXJFs5pNgAD1okzd1U6KBZQZgVm2g2rAT5FMceEdE6Gw5WPWR9j",
  "key21": "xWAXTqgYMj9f7ubD3E9k8J2tEKWS1deDWCsXtzK9FgjskCGzib2ddSp1ad3Co9TSEiGgDoViZAwh7J79ea5MeLe",
  "key22": "2S8XvvKVSmE29NdWYxaDdVWK5v5BRWeytFNtacpBrjMiJBZEkYrJgoE3zgqXARDE9TYuX5J8KjGgh7xZ4FF2QSxM",
  "key23": "47rK7FKkZ3PQQXVUx4PD9a3qxnRjofcxF9J9T53AViT2xKm1qCVawarsbCkDSUL4Sa41XzWqY6e3ad4ppk4qiwcV",
  "key24": "oNNGgy3yvTSL5fzakNVNJAhUNn77DGViWV4QvurgeQdpt989evrBbbUJjbEjVEkZneXaakP1weM2koNnELz93Gh",
  "key25": "4VWq6cT5BACNY6Snh8i8zGyt3iG8TGuXszuQhvKMWdeymvCXPo7jNSyPh8fjEoN58UJwYomrkhyRC1DAAtdmSq7j",
  "key26": "67DfoAFLTHwn7josdS8WBkyfuAN7J84QJMwLCiGewXS1dmc2GrBoPXs1rvtEMeiUQ2t21fMbB8mhx1kr6b57Q5FX"
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
