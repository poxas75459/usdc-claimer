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
    "5C6z9ubFRiKxceDjQTeiEuaztAa9mW1PTUDfgjGHuWeLGXqP7LzSu93fzCe8pZ5986xofSRV7YVf2BUUqB9cUGBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdKcwDyVwbAZwa7F3BEKVQHC7CQnt6R3rZEXLPpiBKYyrGF52UTDz6p6Dz9RE2jeWo12voZahQ8EJu2aijD5guj",
  "key1": "57ZCmGmoAzDuXVcraTM7f8UaU6oz6wmtSbreKUwpo8qQG4LUrmqHFcvfnAA8mCRwTASNHxZi6e2hmuxLgKdwk5jS",
  "key2": "4LfZZJmmg6ANgd19of4Xp9Rm7niQeGcfDYkb7uAoTUjtkAgxsueWuaGrB8JzGLsrCSQVzioSdSrPhSudxpmwwEaW",
  "key3": "43AxRWPkHGf17TCdZajN36PnNBvU7XbGNr94Kq5iwFuheEY5XaYnA4P3975HAq72nrZnM2gezzbRvwrnQfo6Bkms",
  "key4": "74dUbHUVrr1fa4sCn73r53MFq9nQxnFSBGKGQBdnxcT4igcMA9gtvqGnXco1QMgVsmA3EY5fRTXmrG43tHDrWVA",
  "key5": "2iYV1vqdMkZ9khr8YLtvB8GYTLmVoDtvDFaxFZtDDFMZqrexsGJEWagpiyJQWbcaFNekZFhGN3YujxAS3GSMdSo3",
  "key6": "3KuZUFEE4SHkfRP8X2rBDsXBqgBAkVzxfCJ7FF3rcaSeHErAtJXzSFwAHomPo8saxtZoAbKND7KK7QaoHUoKwL7b",
  "key7": "5kKbX2HQqQkr9QrGMUcnvKzfjjezBoPN7oZe76fZV627gLjjCiMJYW2bXCZPLafA5XGoKrrTatxM7fYapJTkXF2z",
  "key8": "5qrZrBPWHvyKUnePFCFqx5rREncMbawkwmbeAdNTWph46Umpf56rbp2vUh36vmYCS9wRRV1eGL6do5V9FeatZwuP",
  "key9": "5NZ4eRz8Qmys28eLpSYPWwKyikptHgp4XKfkKN5YAkovLBQK7f61X2S2e7aHE1wgnc9Cj4hFsrbxa2zo3ueERXTA",
  "key10": "3K63iARFci4zkToa6GhAgaDPGNrf1VLxkFsL93SXkG4YrJpbPKyEPuzfwCysjPHpnnf8wZkxn3gP5nzkeLfRS6yk",
  "key11": "arxFfyHhJT1WduKjhi7onmB8Jjtgv3A6xzfk8qx3Mra29TvHaoYhY3JQjUMzpAPuje2cfsNd6EAxJSBoJxamMPk",
  "key12": "2c5Bpu3oR9DWMAKKTe3MsbN7NpqDGaGqkAe7Mw9W7SDNc28zxs2BNjoC9Ut6Nt8LwFacTL3SjoBY4EfxKgMC8zna",
  "key13": "4buN2MQjHHLG9UuUE9SR6g3YBmBJ2SJsU5yQhPZayKqBJ89etixz84FqrBVvdxGoAo6ch1cSQPXkSReEkFzHh6SF",
  "key14": "4soH12ReUbZSRfzYfA4QHgHVKNyKb27HqjnmUUfBHiid3UdyURhFNPp1R6hzsM2QqBziYHsEMqoebtZBDkaijXRq",
  "key15": "2PxxYMtgDxvy6XRbSgxBNjhTCKx5kp9jQRyZtdXWdvkkrzGW3Qc5oMvkJ6kPWGkLjoruV8LBosm5zwDMojAtR8fN",
  "key16": "64gFrNSCkXEvzqcacYMzTXmw2iacAWvcKPNQ7EbZ6zstBefm4WVRTBKoSWVnvs9Zm34EH5T9s9ZDCFM64qB8ajy8",
  "key17": "9kJ2wK1RPRUx4Tb9fd6gmi6DBYgTEM1rKtJDsMZ3SymuA5wnN6rd65EbBT6yo6vZo289LLyHch5uEXAkx1DKEvX",
  "key18": "31UEWxRpB3yVwJMXjjA4NfrnBwgB7VVbyQpDTD8sT3UhNt2DuA91USV8BCTT9mVdT841gfRBQ7Zv3ia2gXJdETrn",
  "key19": "2BnAWWHyGnJeAhSHRXzbctiB9gydLTKAG88Vx8j9Jzwm3S5G4PgJj8qG6TsYjfDWFyfuXjqDkMTV715Vbismmucj",
  "key20": "343dmgTQkWyP8NJBqjokmsWsQc2fN6pZSyjLf7BEZ2XAexAhrxdipLT7wTPWQaFMYEnFpuAKWTu34Jepy3nsng4y",
  "key21": "2Uez7uLwbwNW7sD5CLQYGE1miFUHjisK9gsNXLoQwpH4h5Z3SyyxTKNYxHkJ3eYcAHRJktdKc4p5hKVCZ62QMYAz",
  "key22": "2TJdGmcrx1QDMMg2hxhiPBQpTx8YKxMUi13BG8LvkKFaZCqc7m6i2tWAzKYTukwcrm1nkkn8CJYUc72xTaDVGYXt",
  "key23": "2xZ9wHMgvLZ2XSadjEnAdSFBdoBoCd8hwKMxwNe4nZhU1T83qK41eUto9PEUzPLFZ1pMszgjx1AhLEabG5CwRE4A",
  "key24": "5ii7394da6FjQeKiCSHipMgVNVgjdy8r2wsdnqPzn59DeCtnXfW9VijNPbHNqVmU3b1Sjm8F76BZJFFJxDnZYXsQ",
  "key25": "5G2HN4MqEet1VY4PZjtFSPpHu7kK247MsFvcyEuwKxPqSi9XphNTQmEAzUWVeDML7kcU6d9LwdAm6utefDiDam4X",
  "key26": "2J9zYMDz1AxUvsU8PiQDeBcPEqsc2SW1MFEN1yeY37qPLtwKE33cabk6Fp1s4ZdsMBo54jkkphuHdSSN9TqMia53",
  "key27": "5ChJVG3QjmcZTGoD87Ry2hW4brPPjbtheYpMaLE2EmA7KvimczA1uUCWXZc8uLGEwfWFwKfLERUXKWnfxXbcA1WR",
  "key28": "2VNqEuSqTo74ZmsvJJ8bZD22P81EJS4AJnEjYkXsZegbjDxMA3rBGdrn7gQ8TCswc892JHx8nUKUZ7qcfTNSMN2h",
  "key29": "22J8MaYDz36SmgM1oNQm3vMXi7BNj8aqPZxMAc6q7BtQVj5384BBuTXxJ7u6eE5Q6SjJiiqVvPWoetqTdGhtdMjz"
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
