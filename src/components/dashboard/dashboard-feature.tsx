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
    "wFBYiVH4GfqAB3YEsuPQ7UiNK62y3EueiU17UAYVubQR5ShTEd3na7nvL9zzTqoLSnQG1TH7ePfsNVe9jfBfLkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aeFdcD8gZecrsbFymSeSc5vowschYkVA93K2LVPkVLkzXE9Ro7qKfHLw21Ucr3w5GevnA3hZJA5wAAzujLjE8hY",
  "key1": "rHwGtiodxnSXaXM7KbxJYSQs7Av8rvsGFmMwuxfeToMtGVvAeCipbeML1F6ZmGnFB2if5MLTjXcWkQybt4ohshT",
  "key2": "54NSXFwr2ppeN7ps5zgai3r3uHVQ189nyFhRFTtYUnFFXPjj2uGaYwueuovN5AGmyhXFmeEUFC5v3XzZkdSymGET",
  "key3": "5gXBcm6dKC51kfcq2ftUqJwJ2iBJKuKpapZAjv7t1qbVu8ayHvNQ86m32TVmgAFVhuwtFoZQnPTsDyWZMVzaM8x5",
  "key4": "4F3dMj4ooTnhHzfhZbyDfrE3cpyaEtXqdVwJhmW42Q4BsnmbXS2C7cGfJER8DoFEdEStWQcuUPANTCLfDHfpUnTG",
  "key5": "4Y6QaH4o3tTEFbrsuw4nXTx22iPEzfD6xaJmryaTUDxgZYcggKY5Nu7vhiaa64PEKavArFF5o6Xwg72X7hPnJ5Ro",
  "key6": "5L2wzLJwGSx2a2H1JCHFQyd24W8bT9VNMULFrcPc9rKYN59k22XHZnbSpajB5i6pgErkSmvJYVw3VpBh3f6nFHLf",
  "key7": "2fbth7FWVtiRqqbBi5nHvH5KP9TU5XXFvbhrcMS21ZZHrFhhSAkzagtRZoCL2Vxy5Ew2jVT4qd1ygqQWQzqrLrUq",
  "key8": "4zaFVkbwLGFB6USoNU7cNdhp2hUYFzR2e5Bt8Q8XbMdRcJLyVBPXgJcs9CZfb6ck5nospTHLmgesPRHMpab8zsty",
  "key9": "3HWobK7Qzwn2cLPrEWrDvJtapr9m8D1H7TNspkiRXYpYXsg3f1jGuxBdommvAghv6Pbdsqpdz1RCxKnTECZ4SHeY",
  "key10": "3pegGxD7GiAUp9f6fgmpmQugv1tE9n9sua5PfnUaRUuMRSmrQc9kRxs4nJKL9JUXXra2Dzyab5xWhfatWaX1Xjat",
  "key11": "29Lv4wtUPsSyFwMiTseExCCBD8GeMoFDhv3VJoqDgxryNg6GL4tY6DdWWekXcoLAg7Nyx1R5m5X5xEcEFWxwLBjL",
  "key12": "2ZQw6JqCr63dmwTPBQn15EGj9HoMDg9zrysubGg64asf8Xz3KSMdzvyJ4nmf8hGpHcpJmPRK3RRmYuFe5oUWyeRg",
  "key13": "3PVBvi4HB5BEhVN4mEhaNiVUjo5mM6eZinqxsJhdsehiuF19ArRG4q86V5SWdv76UorH19TDmvk7NezepfXe1Ybp",
  "key14": "4UnhxceSqBpySYj18Lyq6gv1oXxztGQWta1AYapS5nVYQMXMvtMf8AtaxRpfpTUBzYbqdgPDnhDBqMkg8SQdRqG3",
  "key15": "9NpZgXVjrjGtBH3HUbAo7LUKPpdzokgciBcJFuKwNqDTLqRhYAGBHo1A1PXq5maA25aZTM6PzW7NSLfn7Sk35KC",
  "key16": "5N2eoHjZqqTRW98QHt1YHvWN3oXjEPUEFUJjB6pDL28oiuWtQECi1sCxcux66zzzYf9y2JAkuiByxCciqGtqeiQ1",
  "key17": "doFhffYexctrq6CgTdpMJm9cXy7UMP5DfZGkRN9cn7rEKXzbmuikLS4g9eFr2z9w45outihaWN4YTs95Jjm3obb",
  "key18": "2mUXZjNkyhexK2mLNPxKwkwqPBaMeAMRu2zXmsUUa3C8r274VNk5hGmymUaDmS7cb2CAARPxFSJKBWn1KoZhH4pK",
  "key19": "3ADnab4GSSZn7UJa639DRY6WsnYUa4QgY3namfnJEr81behm12uPnpLMaYSyte7ePjev6V6SV77XAL6yDWdrc5Gq",
  "key20": "41j3qXXay8rmKVyebCBSHuRP5X5TRHGbADbVQKQfvKWBiuN3mSLEqhhSRVgo5hbVtT4to1q3SddqdwDMeHNJZkvB",
  "key21": "5WqfEGgBjp2G1wcZHsXreiuSf1rYFPQzJg61RYEjmGEojio8FSrEXF21V1Ej1uuj3vgP5uhcGxUDwk1yFracMSe6",
  "key22": "3bnkZKsLqVE5VmWytsQehPdiaR8tBQJsJG5snqQFJZxDaXTCJ7c6Ugi8dehzJJ7UtrPNwVjRU2km6Bm5ASxrxC7b",
  "key23": "5693bH2L4NpKknEgAhmKjigoY3ZZeFNt5iSe9moHFrf2Mm7RKxuwNhJdHwhm2MGJ4YGmormag2yEj5xyuQpxBFAy",
  "key24": "3VnBF6BMnxAQaCmyjKa6TYJwi4ntaGyE1MB5Czi6BW2xV8gNJwudf5f1SksGTSbx3NiztbLcA5UwtPjDM6Ao89xd",
  "key25": "EYGND1oV6ix4MRFssBqpWMhZzHZ7j3fQ2E9GTjRZy49i7Jf5VUyDpEXobiP9G4xx1BB5BRAVJo4KVaSakFkThQm",
  "key26": "5uTxiytX85xXYGzk52hg8K2pvMcFaVsFLhdpT1N3WUxnycwi4HvZ99yGYRP4X5YdSv39iL8A6aRm8vTKNNubLtYo",
  "key27": "5iPmsVqntTQ9vZgAk6LpifnqFDvHjgg3nPHgQuj1o6sfEpEveduQQYmcb4qp4H2D1gSVH6yCsqr2yQifkARQDy7k",
  "key28": "4TEAiGd5ESYbeMhVjxgCAVgYQiUPho39nxcBMivpp26jGvqmDbaNNf9QUrBbfR1Svymo3xcHuvj5e7fy157LENpf",
  "key29": "931aUitGwUKv4EpfRvswFZaVEXtizV4TZvPBsevtLWcc8T69HxLx68CrtYoZFjXmnumS2LmD8d3nGGcVFDvtU81",
  "key30": "4NHZpYZww8Lf3f7u8FFXAedKE3GMUC89arezutzU6M8f9qpPtXuwSQ7xvPvEiKRqKRb4wmvYm7XeKyxWKoDpeUMs"
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
