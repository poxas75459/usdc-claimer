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
    "4Gjhc8CwaLVinDk3gsYQBqyhmvxjv18AdWgC8DRPzgBDGGevN6HyMrA3rNwEYtXyi8f8nr3VyA65FjSQkkjDv5HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "643Z4mssRbJwYew8iexAG6siTX1eLg4JJzkesP85bHx8tndFJvk2jx6aJumpmGGHaTW3Bw1zDF1QsAGytgcgygvL",
  "key1": "v6fsfrMZrNBn4Ro8KgxuRZqwf1h9DyVqB729LFU5hdnD6knrSxginT735CtGXSee3zjFsdaXQDRJBrrhemWbTZU",
  "key2": "3a1zbH6cimdM8ygcyq6JrdEqGEKrrUSrrG8Jf9URwAPEKr6wQKh5k5fWX34KwSj8XWESaztwBicExsycVv8gDMrU",
  "key3": "3kg5B91y8sdrCRJ5heRAk2jB8rgVU7cHD4sionbBuTZzi7hme596d955UWH6enPiQEJeVppiKU7CzECk3U93Qzdx",
  "key4": "26mEzviPQsQhSnZc8ACEMpQdXDM8s3r5vJn4Bsrgb6LZpYicDx6Fgr4TamFLR1xwN7yrhTRZSYyBheQULDoVnmqr",
  "key5": "JRy5EbYKZq1VGhXsBrNQsjSoPY4QR8BZkcVm9hwtepvvV7YKb1q473xagYsaVmSazfSYnG5RLNwhjY2pq8rkPU7",
  "key6": "4hnaNrkYpqVhE1K7zWDC4kbSLHfVTVLn7ZokNHsi3RVq8rUtzrah2Z76WbJtmMsUNm5RGS9CPHW7FcsTMkAjy3cm",
  "key7": "3i8nYSkQ4BZWsqgetnVrELCFmpEdgkDFxWeZAkRjCrmVBJejxdyZLQkUEygHpSS4UUrdmEEeR3PRjGSfKauC6HZt",
  "key8": "2djGCmBQbwBvRRB2PCLXqDQq5tsQKtHfnxp4bBJtdY53Jf2MUmwsVosT2NdGqin1boj7JxQthGbAAEWJSFiEmf3C",
  "key9": "2wTwaN1tr39eLMSYcKizC5kEVogQ2bNcAayaceMGWqM6S2EX1o4cAEufL9NNGWNtzD47kjjPiqy73Q128zDQevtm",
  "key10": "4gSm4Xh2hGUkPdt3pGj11VFnNebYDnK46RU9Weper389YttK8YdY8nGUxf9NUzEu3yL4W22jVg531G1bDWT58Arb",
  "key11": "3aUyPUbGtEQs7BGsMmpJVKTk32DmuEjRA8Jzat6pHCwHdRdvBoYCajrC5URaZePPBR5xwYzKFYh62ZVQeFGWASs2",
  "key12": "3SVXMpwBNZQRsDM9zCnWbpuPDzZPZMdv8GKVjhykG1Z56AUv1cmZTSQPEYCEqABuFLSSYXZZvx3fZB6Pqk162Zwb",
  "key13": "5VTDnsRcNstUNsiXoP1un4T5QXWd1ipzK3cWuurAzvDdZNc9TrYtY9dGVeSStGm2FixEwnZxVBfjpogJ1ratGQVR",
  "key14": "5ZbCUJHqxEsM7RK1o2v1ApgEv3hpuyHdjfKDCvnWbq2whRKxqq2h6Tztc7iRwVpfz8evoY6hZ2QtxgMFeQpfgMYG",
  "key15": "5mKiYLMusfLcf9ekTpkQxK7kAYEzCQrX63TfdSjqfpSNJ1AFLHLJ8gBX3CHEzawYmveeQ4gSCTFUWLh5c2ZvPB6s",
  "key16": "4ww8vsJ7Kg9GCoxGiLKtxrRjguXSxnAdroGbPGm4fhX3oBiuRpTRuHWJeLHb4385g77VNkZDnDnccHYiVYV6aWUj",
  "key17": "5i3BB313YaiEQrg8Vgt7sbLLNwthJqNPb4hjSrbgRqHUwEUGpNGdg6danXxmQ6D4ajKuLi75ZarubgRzu4hra5r",
  "key18": "3tb4w1rHZkfKe542XA3Y2a2mQTcRDxCgjWGmz675ktoyoeX14izAEnTmJC5NK4BhLdUu7WRtV8nWJ39UTUU2NfUG",
  "key19": "5yqJHvqtrAMdKWhQiwr77jwtJV7mKkR5MyQwaQspHkboo6m7Jyn4qp8j1UxEMvuzLarA8EsBy5jQ4ndNV985EAnj",
  "key20": "4H5KieFDnSqDn7YxB2rTL1mtDLeaSk27gFvoM6jtz4T8ArhWY1pjDaXPX4fQUycKe8ZH2Wv5VSyA6DVMbeHf5KWL",
  "key21": "4yY7h5cX8cBhRFKHb8Cz38XZi3eEijyfdts7ijA62tWAcR6YnQV3YPPs4Gufu26CgbuTaUG4yVb8155yNrfNUHSh",
  "key22": "4SQ4hdhDDxjM4V6N1iRfXCZBfw4WpY9sVKTzNwFdS8V6hvr3bSZnZF2DhxZNQP8tiFzwDF5b2TW6SAsJKJzoBUeQ",
  "key23": "3c17LnPTyWL5JkCU21yCFg5AnzJNLPQGADgz6HiCggBYMWDdxD5UFfFeF7d2hqB266BTRQhaiy2mxX8tZMwgNJyy",
  "key24": "5AtzMmknvmXNTUgXVf5WLxM1b4odm6j61ERcJ796iM2iF2XYcpWZswZYF6ubFEA16S5BoM82LCi2uVM7EQFjsMzh",
  "key25": "5c11RZT2m2mPpisqjLDFiLeGcqpKrvAi5UUyRcJSoo82Bqf1sGpFxvsx2pgTbueYuWNpvXtuGzWYBZkEc1asNsLd",
  "key26": "65iPEymXocdrbnBU577BrM6Ry8s32FpbA5eG8cHivwSr8V322pLpzc1bgJFmjoHjYNxiFnrP91vxfBb5nL8JyEMy",
  "key27": "634LErFm6dLVdNc24G3fiV42ed3k6uUMzPKS5DXqr37cbEy7q9fvPtvgh2UcGkx4Tfi9Qd1ZKVyWy6tewqMHwu4Y",
  "key28": "2wZmiVmQe7zMZHmYXKkKtSimKA5iXSzVVyQDSny7ohyCkxkpiGGmrw6NWZyLn9d1kGdy5iknmxM1ZxmEEoSApjuB",
  "key29": "2sRAuznWxSemGYELcb3NDyD6VV6GAUH9Zu8GJ2bcZ4qPnVWX8k4twZr5jkovRbRJE4nAuAPcb5ygw6DJ5xqzNV2x",
  "key30": "5CeTYDkkjSTdCGbUuMmAw1ZFYx2XPjN7gNCTwNDcrwpSbbAMyqR6ycg24RxcKMDRzNu1VZ1rw5bDkjg5d96w5zcy",
  "key31": "3kdUp7hNLwPGiyZN2Cwfzt1ptbBKWotQXYCDLjJE8ZPNFNLEDVe6oQKtNNfyR9EctB78bJNkyF9QBVXn19nrTfUb",
  "key32": "2VHgGxeSwHhQgr2pS7dxCo9E6r4BEdAqXNcZQ17jVDVBZw9FNYuLRFZ7nyVwuzmQtcpFWUjdjqRKLrWnC18MCaNB",
  "key33": "2WiiKRUtT3ZuzYQsSAwHb2C3sswMQfcU4vyEvtVZFKuCPUYiczg1S7yijet1DpTx4emzPFQxcJW7U4Ws1b7v7n6e"
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
