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
    "M9bVjZvamfNpLk1UQ2hVCNAc1d1cj43gBAWUJYjWX4ZoRmFC7y5puZVSZ6bHjqKpk6REEHjmMnhB6aJ6UCJRmtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ziBShMZvopW7cbGTqBgjQs1EJXjMdw9TmEnLL3uhPoe552aWJFRJbMua49cyNLS8ga24MD4HcRxZZ1cuxWjib2J",
  "key1": "2ptWqZu8wTsBLjUaswV9BrRvcXBKYbKLZsczgBESjJ1PNhAf3L7JgBonFk7jYyx8U6y6HBqgfD5uzJ1YhY2xwT4K",
  "key2": "2VS79n9QJiW5AbZh1phCjDPtTU6BtwLCr4bJWidZ4b7Q2Yv8ZpSUkpMLitTgSdXdZF5X1G3ibVAHaU2igp3sAPqW",
  "key3": "3FfymBmjwuRgYmzCGzzduhGVoaWAuXfF6uShWyQ4tmysgAHkue2bZfbEPiUFftfBnqu4YvnaQmfJVktiVf3Wwu2D",
  "key4": "3JJgdDzBYPc8ZHCkQ1bRhy9MEtTkJxQPuxrxhzZQpxeVhbyitomvV7jJrC7B1631hH7zmdMvd2rFEnw6Q8USc7J",
  "key5": "5TqNsaCyzGADAHy4FVSP9jJt8vTPeENMyhqZqxLUyK8TknvARv4z5D1QegY8fJhg7La4mNkLAXnr17JaTaJjCYxP",
  "key6": "4ATgnUjjXrPkPjBaHtwzeUDyDDwdsbz3QXEvxpYANV5mGJxypkHbBNZb2jpw2EhmgAamqCF6eXSDwBSssPSJghrj",
  "key7": "25dQirm4GbYFL6trDH2H7KMnzUAP9bpN68p6DapkR3uyG6yreumy4hS9y6sgkf5g2AYQh1o8g6aeiNfwEmzqcvaM",
  "key8": "DpxKRuR8MBUb7vpXVzTj7agq1hPEWYdmmhcqbBwYPZxzKkxpRSkhKRCgfee2Fox7HVtFgTHDtyNhtEDmqpWxYML",
  "key9": "2wDNi8aehLDaq4LV124CirpZkxAQzgQV3gyNJeRSEA5pLWaG5YumFsFipdKB2RYAFgrG1CZRQNsDjK3vLkbwLkSM",
  "key10": "2iptCRnTaubFP8F7oAhPMQEDRPRTb7vwEKEJZR4D3oQPfzx4n8LQviknQycLGHJjeQXFkSBPpPYmtkdRVzmPxCjH",
  "key11": "3qttVzqVBkKnbcZF8r27ZXvyExcXZb8bbWZgLwSEiX3iskRFVzZcAzJ4TomxVKKaeiNYR1xi2jk1y8GNtSmoTA9p",
  "key12": "zSVrLRovZcmNrW3vNBvZgaSr9q6F3EU1uNgyKQmidJhxe2tmbakax6fxAZgjmtpcYBd7YKsVFBciDSjmxc2VvnS",
  "key13": "4yu3uqJpKPhfpAQrp8QXu1M9SbqfQaFwPVNj67U4L1h8ugkdNGNFLoJ1xC5XkibU4iKYt6BeDbvp7FcXy8AKVnqu",
  "key14": "3xUteAkUhZPRGDcQS6Z1gsmgbTJpQa2rwYamaMMPRhrf6gPRMdSCVpjB2DNSKEaq9xHUikK3AYN5fxLrY24XrvVG",
  "key15": "3zRzmkSWhg3dA4PuiUWtuTLziHYs12f6P1UfxYNxjPbYniANHLqj89y4FLjwqmkNcESeAw6UjQFK1PLqrJ9r5vws",
  "key16": "3PfH3KHAdt9yV5Hk2Dkd2T564MUE2ySeyYQt4P1M3fmDw8hyV5QskTMdd6ogvjXVySi6Ygi2ToBZ8Sq817jnYVjE",
  "key17": "64UqaDzXkRePzfvsvX6wuiZ8dULsaXuNou1M5rJHaPbfhQKNLiAx5r4PZDbDkRiZtYB71JaJ55tYYevHUBcguPXd",
  "key18": "3mHHiYqxrE6AAirW3SVRYgmnZ6AHACiUNJnckNFusTscgkwUiVLQWYCGUkTL8W5wcnVQBTHvcBCerq8MrwWEJmxM",
  "key19": "3kZUCVrXNK2gDeGnVaM8iANRs546u32RDTRCR8TtEDGgJbP86EcR49RkEoYA8AriqeHPcxW19t4FJi9tuQYVpVA4",
  "key20": "2eWcKCwnyvYvtd8jYyvz5LaF4yqu2poFrsaD3KzpHEU8pBqBPUEeZSSgLKeW2hqGnNGYgshnF7VnMuNzec9SKPWg",
  "key21": "2rg1jTN4aQMxfoPwb9mN3aXUCs5pi5Br7PzCbJ2mz8EDatAnZGd8vSKgr7bagpoikTud1ZRzN4HKExtfX3eZr5Mw",
  "key22": "3h2ZSm8YFGWycJjUdvF9KvegEzEvTLZJYorNs6bgA4Y76Mxuwv13vjt2c3FwSi8zksTd8VshZ2XxwVBBaSZEWVxp",
  "key23": "3qcLCFE44QFR9WpA1wvfDLX7CU5saa1F3QsgPVSxSLshM6FjZP4HAzKWA9tRaLz5C4jgAPJpLdfCkqw6DQ57BHYN",
  "key24": "2soUNEF5S34eVENGUJK4mie1BXjq8nH7M8oRur3kW15dHvye76Ebf6Uc5o3v8n3nVWuABgmpNeiKs1A7Z1m5VTtt",
  "key25": "3Ej2Gv4gsNZJHASMftSjDCbUKuePfxyiDvPjACEDUfvaFTMJyFTkgMftTb66AJAu7FVKaTd8LCz9F3kFJzSqtMTZ",
  "key26": "4Rs1mF311PLvUdFT3cmArRnGrVTJxcEs8tW2725366JX88pjeEfmkBfigXuECC8szHAP8xXQPLz5r3u7DGdyrN9o",
  "key27": "61LQwzvgx4wwzJX7M8TU2X8FjhPoP6vNe6K7EkYcvFfdABbJKGfDXvAoU2myB3jmDesAMGv75eB5JY6vxovybQ3x",
  "key28": "5J5pJ4oDr2jyWCtPzsfd23gdz4R6AmvWb1W5u3ARRmdR61G5zHUGst2guWKsTJDNNTYEantE7wpSsLksMdPCuoAi",
  "key29": "3sdgfhaJySdxz16PQ2TEAhhshuzrBKn9QzNaBRZrCSfBBNbGchBNEdT4CAC2Mevw3GoL1og4SFRFpTcP7D2hQ1Rg"
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
