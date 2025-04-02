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
    "4qSNQeSbRKegdWQFH2nNiMHUHLiCSucQuJthbPCuXf66jwLvCbtqHkJYuz47eeMbXgp5wqjxv39Pnkxoyxv4M28C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GUvZt9M6fHwzZVqoMAJMHm1f6w5otKMVmJXiCo4cJuLqMEcpU8yXqmAw6LYAy7aVGKhaP6nY2tb4oLib4xGm9T7",
  "key1": "3aNYjTNyXApKBpDEpw6yt34S7fsVJKYG17q2vAeXE8DnTamQoESiHQzsTvehSJWu1SLX6soUaBP5RQWEAkGGY9Ep",
  "key2": "2rH9gJPTbZHLFL3DnQe1vriPNwUL774ANAHG4TWLfKkAnTkwyqq6H4QzVB2qjAUALt4nrwVJsZu5zqJucAMPKUha",
  "key3": "5GoVcnKuF8ubGSeZy6cQsb8m145FAL8ViAvdJDXKBJafs9gebMdEN2LaFzsUvPFPPiiKowyh7VcDCrgk6jxcCdEE",
  "key4": "37MFsogCKMFeM4Sk8z9efKyuRXNhWW95gwfmPypEonRJiATzNf6WfQbkftHjjeZopXLF7TMCR3Xeejm2yYwLa298",
  "key5": "55dGxwVHqgDKukagFR7FsSgsWhu5CjZCJFKZ8NEVVb4mDZbmT2zQkXKx3uTbrY7uGfKQZW6DUjjjumVG5CcMBes9",
  "key6": "3NV59ZDuT8mjcDzkP1GyYcTEmTfUDvoZ4Hs99V2sp9qfRRBu3MSoJt4nxd1ApqRQryhB314vYb9ooa2aEgaYWxRA",
  "key7": "41YLY36AJ7D2ioi1nEbK6EaGfUihFckAhDek4VLGQeYWieoGAMq8pPjewYChaSPqNPZxx9JcEMZdnnfMZb8bj2h2",
  "key8": "3JVwkBZkF7Bof7Rg5kKNMgN636jsw3KG2RcvEoLwV5XaEo5c9752pp9UD5iAQF46YuHgVKwRvonU9Jxbd5FJ4DHg",
  "key9": "48nzZVKLSTPcHnoHamgtZE9WgRhezGQjS9FBMjcioyjr2KkTi9m5nQAp3PQYSG2DURwKWVAFubCzJ1YsMpd2z5D1",
  "key10": "To9PE7Pjya398WefWzaDgWADwzuwE4wmNaiCHTMnbaMdeFpVQx47YD54wcXuzFMqNJj3ypX9AX7FYh9zYxhtSbR",
  "key11": "4fZeSX5L8DxbZ3WFdLsQv8afjPm5zH6amfcqoLZxpmk7UsiGBTeREWk3SUBiY8Qxtm1ww6aMPHRojDesncxAsPgK",
  "key12": "rSZLSZ6HEjZZMmCNCFazEVBT4S254JSwVVaZzF3NdpF1JekCpRzj5EeH7EqsFLdz6BdKuQVzbLyNCxyxStstJeY",
  "key13": "nR5UhL8VESoE7Q8Y4WALUeRqR9tmokwvd714w9AYs43rCRN9e8mmUbdf72VyWzz5xeDxLhjZjKme911vp4jxxve",
  "key14": "CRvtJN2toL9yJYTtbSDo6Wehb7Ywj8pkjDb9TgwMJNtCdcNcmgwof1WLTt7ATYTBQUQwyHxZACdfvcxp7odRDj1",
  "key15": "28cvE2nt3ExUBSpkxzSBfv5MuUy4Kg44pZkwuppZhG6x1g3K2HRAJfiJwwxy2ja3Lk5WfCX6JxZEHB7zBY2MgAbQ",
  "key16": "P8RFdSCuRZZAN4vizsynVRWYy5HEhCjDxqdt4vpdAeWzXAAMV5vU3aLw3ZHWnwG5d19zaqv9zX4kyjKX2czLwNL",
  "key17": "54QvoefhHipydPBWwtq6KfZMLpJdBdSCHSrxqXHAHerpdSxxXZnbgQdYEU8LhmLJLeUBck7KsgxKiEUckZoSk86W",
  "key18": "4kEx7hHxQhzwYKzCNRva5fjhygTHK5dZDXYTvM9YYU1q5PGKN3QMGRkjZj7uuLFwHRcUEajLwH8anhP8JfMRZ4kw",
  "key19": "2Jepe5tVGGMMtrkH14sSvQD2R8u56BuvEUoffH7NiCYkKb8sgJH33MX9a4M6VWsLGuVJAq3dfHhL5BFdUm1UvhNi",
  "key20": "4HZpRxZbc9gAJjurN7Mcuv87pG1yU1AsSUYBSi3yQnYUjuWq5qgoGoAxB5oxCPqSMfFmbfeW7GhcUyEYmaz79Fgc",
  "key21": "2yA4gE9RZFpxTFcFSGFsUHCPkJ9tTme1FHgtrSWkVjSif4McpatUtbxuj4kTt3WRQAbKKhfcBkpuZrwJ8nq6orr",
  "key22": "gNB2hxtdtMCTko5a55DpLKfZxv7bkM8e7TXnDMkzShfB5Vt9L6PKYswzn4ebHyvGiokVxnUuTA6a8RZrphrd9Uf",
  "key23": "4hWFyKrBNdYMpFDnKGEfhRTY6u5TxzHMAjLXnvRWWSWUAw5vMtmkLcCrBtYWi6jkSHFMgFbWVTQkn9touBnn7G3x",
  "key24": "o66um13R4P19Wv7baKaXDQCHudV9DeEHEke7xHZN4YYg5craZH7o7PGAEhFz93YiDbnqzv4qh8SYznbbUsfqHKp"
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
