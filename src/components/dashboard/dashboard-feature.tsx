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
    "4KB98LKAwfWbkpEPBSrybAk7gCUbJn19jT6X7ntHEvrcqCuinmyBjpMtiTi2v2EPWVY45LWTdBpMkUoDAhHfzB5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yk1snciSdaydHRMnFrjkthc7YioYD1jCjVd3LSB5ogggZBiqvSbAQLuKfXX9Tw85JuhK43g1n2esbW23u3vx32H",
  "key1": "KcxPKMA4CEha4qoh2maHvtNGwpJTxAcLWmWUwht9D5FszcyYeWWdM3AfP3QRYWoHbiaBDcL1ZbE6DNyMd5FU4y4",
  "key2": "ABTLvQKh1g7VC7dKoemBPVW9fnoZE7bdtJkGFFsrLnwr3fR9w298vZhfUnkzbCzcGCP4XccMAd57Xhce4wXBx1Q",
  "key3": "2f7tSufmRctmrwyqHaV5e3AcujMeYxxiegbrRfSFcUgFkiV8esiUPNwFNskTq22CXX6oTtUrGsjizH5CgqHW5dxh",
  "key4": "3REqRuiv47L4xsyvviH7Pu5RuwWrCSQvxdjRULfYVwBFnX3V7Bfp3xPrW2i79EbDZSShJdFhqCVNCkTV4sM9c42F",
  "key5": "4FdfDYbi87DJPnmwcnp1ghgK3hc1dNHThmM8e3a9536XsmkajEdG6L3KfX4ozzU7uohDyi9EVjBj8Mvb6FykLL9t",
  "key6": "5FxF93b4uWsLbXjhX3tKZCRrRCx7uzafbGdiaXCjBXnmRdGCUwgEUPwYhvBgV1uZeME2MdFneaZ4mpomM5Cw2xmt",
  "key7": "52foHjesfw2yvEnVTv76iFv5iopHissmdT8iQ96KnGLEgWRufDaEHKXirypvMbtmdtugF9jadLBsYLsBHCU2QYVS",
  "key8": "452s2d6Yh3GvECwjp29XdvAi9o1cUuKqpZb2vxrBrY9RDVn7RZhKHgjv8LTx7xMoSCSvWdwqYkDDfmPHab3WP3jG",
  "key9": "2HJfA285H1UvgmpYcJKzAWidBAWoVqHnFM84QTHCB473jeemZZmAkfUVEAytiLWkM6tmnySdf2gyVwN3ZXCsZNPN",
  "key10": "9SBMzrVqHBm6TEVUYDAR268U4wz8U3DknzJ7t3LcCPS1BW3er9P2W2hYUEwLKPk3bnfY6bpqApar9UN6SPnTnAZ",
  "key11": "3LB5fegqhzx9PhS9NNb8v7NRQbxQUyr86X8zfCbtR2YcWk5Vzi6YKX1pz1cLbDqZNGzP5WfMYUxfUE7xDXVqQRGb",
  "key12": "5Q9WU1eetmTZ9N3osnanfxPJzpJaNsDCzcXh8CL5knZC5abe5eTJrqgVkoVVCRffibP9F2AEAcTdYeEK8FhSNDsc",
  "key13": "5uf44tt5S8vmJnSuJGhmDQnD3szyqesxBaZBkr2ivaUQ1i8oXwz4ScwrYZbCvTFAi1VVH8Kt8bt3yD4mfkaUgfj",
  "key14": "42GtkB51Rct7rGSZ1QigmNpKDrNF3MBpkBtJ1AYoSucaFV2opSRWLcYWquMFrLhyK1j1CBe2hZTsSD6WiLFtxr8d",
  "key15": "UoZ1NqTiJyH3Ln32y4wUfQh7Jk66imgtQ5CTXhXmc6p6BApoSAG82WY6TX1dJLYnkCPx8NVXBjyTeixUbGThA65",
  "key16": "5K7ESvcDFnddyzMjJDdp472Bhcay63x3yQZkSzyzgTnvmdzxD4wVn4uQVUpmgHo1pkmt3w9CbmV6f3ihLHywYssn",
  "key17": "4X6CM21vDesxo7TDW7ap9roxvCSJJVhRirmAMeL1tfTo7hmaVGxdikxiVpaVasViVQaxrMuTvgx9FJCxzugKpgF8",
  "key18": "3CFsP5x5LNRur4KY1s4mRSKJ3wdHZW2a22qAuj3cCM4gKwBDnvnWcFRmxu3DbXKEabtwrRSKHrBeHCfN6fswaZQj",
  "key19": "519jDE9bTWYXfxVV3VQRfrxu1ye84Cu4ds4QrsPj8aidUmjYnjSpsWgbjsDZA3qsvKTaGVR5iwKteedn8554ZzFQ",
  "key20": "2XWFq9vTVHNckAGAHWwS5zAQS15RGeBU2sArQ6LB77KE2jhGkAaKrJor6b2nLna4ZCQoTjozfZw1iD6NoeMgUnKZ",
  "key21": "5RWs6MpKsRE9p9aqbnj9yjKcZC3nkim9mTxfby9XWF1ux8y4sqRsuu8XsJQTfVQLK4TDaJMKaUfAG8Vu88xuNqmH",
  "key22": "5bMHM7sP9P9KMHetuVzjEymV7zhVuz2NwDqGXtXsCv2HPtCS6kg5dh5yGCaSahWH7sPpzKBuj7Aeb4ideeGPno1P",
  "key23": "3bQnJ482HhQDwkCHgzYHUYHhjkX9vEAhbP4UFgWjPbj3umr2NRKqNgEwXe7c9RiJfLVsFwvrBxf6hYm3TgFpENkU",
  "key24": "4MvsVFbgqLFVWNm83EfKx1KA8Uo2CFVcEWP9bHWfNRnF2BYx166FXtKA4E5WW3xVVemhH9jzpZFZSXCBeSmVi6Ms",
  "key25": "4VmfjwD7Rnptk216DTAA8WeghaiwWT9oLzhkAzDsDUrwmvEPkMbYPswvAmso51oUhofEKY6jvyYDbpoDiwGMxxTt",
  "key26": "42CfPyKiiyMcvXjCE873dLxdt5X1vKoiUeGxFUTcezk73VvK8YLyZhNW83nwEjP6wygVD1k2owCvWWVf4yPoHrQK"
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
