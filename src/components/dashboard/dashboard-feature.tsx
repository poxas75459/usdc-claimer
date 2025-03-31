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
    "5uWtrySp4BpZzdkVW5TRKYZA4p9WF3nfmQGZQS6tHoPCW1NQWW9hqF9ZuDWMwSAUf2RiNnEgrZPqaBPda2ycSteH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XMXDqdR1ZUf2TZaPcLiqCwcWVwWKjuK12k1rJBEpw1Xtw5RAtwTsP3aAy5y6tJsCRapu4MbQLQhqFrjUTAHmEA8",
  "key1": "8p1hNDzEqAKkL1iiqVFYfWqWPLfFneMKjuuQzzX7DZXRPbtTuwzeNLhnRiXsbqxYoH2rneCmyaRA6GqfQ1ExGdE",
  "key2": "5r3yq8318CrgoxqryzVTdRAJznwvhQr3WtaAYxHqZzqkbkDNhe7viLrMPqWqumocqC9yZwUpr4ffwRSryseiLtbP",
  "key3": "MdUEYLxmCiEzLEHbWiJeXGSg41yC2sWK8bXLP7Z4auvq5B7HKQPZhRgZEjrszYbbnQ3HQ5HADLFH6Usz2NhngE1",
  "key4": "4h3gMtmbAJ25gS6n7p1REPNs7Nuq6MYW1zJh2Q72VvmR8XaQy6wxPU6UgV6qTHGM4NBRZtw2Lkwr9U1qjXXTzDCs",
  "key5": "662E6i4konRehVf9CDGvScbnRcScK7Vwd6vn2mNnjLtAu3qnLYpacPTRiDHY43Z1cn2Lz3hzjCDzJBzchfVuorce",
  "key6": "4chXkTzpmzLEy6q9DTwYTN3QYzTmj7mTjvct2Bx1My1vYAWFR3F5ACScXDcCcCYyHTjHZNLUZQo5EqjU3wHYBL1X",
  "key7": "276mkbDjxsf2g3FFUSeAwTFqh3FPTwiLNrKKQr2pDameNG6Z4MczoDBpXSXZNJC7AVuCq2hEisyomhpeNpEk71NT",
  "key8": "4EY1pkDAVuDXUdzv9aJLoc5cn8fvvCwgKCy8X7CKy3n13MTciZFcCEJyMVb9VuyRHPWWdQidwiPEXyxs2p7f8jKy",
  "key9": "5cW8mUMtxGiaNEQ7WuGfLvQoHUA8P9Kx28wiX5gByWPBNm2xD18B5Dgc1kGwA2YmpvgtLaaFivwpeghDe6kbobv9",
  "key10": "2wv13LusmWvC5Qctb7Xg6t5VB97VnEwRL6Y9suhoYy5VWcU87HdSW5Q8yHGEyGNMXuoFSLHYCjsbZRCpkR3zvrh1",
  "key11": "5RkDhEaJUvE1VTkkdicRcJaLDZupydhq1qJ3VVB22fVDUxj11Wam4HmGQb23PZZCrtmCx1NZedtQo22Bfyii6E65",
  "key12": "WMwXmXMdjUjghAcRSm11s71VSyD9meAMXZ5x5kU4vUGAgNQ5noRh8mmUhm6N5DEJkpWFxh4eRkDr3nfERu4sPgG",
  "key13": "MR2FYdXCYds3KvU7DYyuMpBrTDMv6cSL4zCpjWm6eKwp274oumQgWkabw7jE4RASn11oCKyxaHc5xJDEN8UL9XW",
  "key14": "5t2Q94tmzT4xRCNLz8tfGioGetmv3NujBY1m4AcoBfS5GvaS5XDtMDrYgEjvBRJwUj6N7EDJim3GGrKsjQkotPyv",
  "key15": "4WYp5z1Bvmq2Dca7ouGEjJJfWsVTJcwGUY9cmKtGCNwRRsRXSEzJLiH3rzvJXvxFSnGvgoNTDEgfGxU5HCAGNySo",
  "key16": "5Nsdn3Rgs1UrnEUgDyfygS1ZfmjNiMPENzRhavbbxv87Vhq8F1QjCXB72fmA2SjxoJg72buBKX3dfFrmKB6p1kmx",
  "key17": "2UGHgaP33Vzy34A7rze6vZfPTSfhvLjo9YMKzx47QsYm7D8pq6f5H1yiNbcE9fYcT4cD4qkvrdB6bFNEKkBZDxRc",
  "key18": "3TWAfyPGAGMou5WbNzfrX5b5A7TBHUdRSr1gGy7B5DJCLVttnz9oWdKBpoN3z5pX9iBD4eh5DkxedBz5sugTxaf9",
  "key19": "4vNHUhjQtDb4S9b1sQCAY7y3sStZhEjL9DkeSH68nJhSJfFmCAa3w9nrwXGwx1v6G4JUMC7rxamAzne9w5XK8avj",
  "key20": "4StFXz4rKc2k6TF6AnxNuGW2UBLQov7WZWfbY2TpHXn7VLpV5vbmMWe7EfBTWAxNv2upma2uKHBqKAT3JAHKz5Gj",
  "key21": "2cbEDTQNhcbkgrVPK21bjLvgybYdJPhksFwCDJaYpVqFz1pSqf6JwVLrJTf3wknXvkQCrvDmdkRPYgkXPeG2TCd",
  "key22": "4k7v7j6gKxcfnP4ZmM8wE8SdSag9RpdgtE6NM1rv7CHXKByfwCABe2uwyLBkesKqrUnjCViFXQDTYhHJKzjSvqr4",
  "key23": "59cUGqUjnrbUQ5DaueL9aHH58g3YKzZFP9CzjZ1SMegQedTQJHAVKmLNqgAD75yNmxTf6hFvT8FpbdUFi4ZMdTvX",
  "key24": "4pd8L3Cri67B8iNMVSeJGfNuJbwDYhEs3Y1BbEfhukhNTHz2r3SoMTUMvSmMt4UrBVWcvNF5jWD45AiydDesZcd2",
  "key25": "4eaNKbXWZg6cJq3cDAYaVZVCRySFR6sx8bbe42G3joD1WkTbtYHKrU88KSLUTnJzcKcF5rpyn9QyBHBczEi1TN98",
  "key26": "5wsQvNQN5cPxNNfJUjA2oA3QAXR7uEAeNqgcjeBH4GSLYQVzBDX8qPzbxuK4YAZgz8S82ZuS9pWbCTBG4vmBRP3d",
  "key27": "3WzBaiRovCkaNFDdFsTsz3kcijBZyoHqkudLFbo7qGeVmT1MHhqHAtoosyR1wxXFKUvWvi81MNZceuENwQZ9idyT",
  "key28": "3n9SidZ1ojcpRKA5FGeNbBMyJvZKy8E44yDcEjZ3ce6uZc5BLpaR6C2LqYgpiNsN5zqZBS7WkDhsbWnBDiKH1UAg"
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
