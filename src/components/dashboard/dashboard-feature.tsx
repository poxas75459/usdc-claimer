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
    "2WTxbgfv2gfgnZpp2YmhSWbgBgTwnXgkw3AZFB6GsNYnvrhoQ419CA26vcmRwBjo3BiE1f8WsSEvBN9cmY8ahV4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TX4PanUiJQ6StejrVDTEKmqvqTYVpjTX4JwWzrNg3csRLuKxqp1CX3XiHDAsMhave1m8nxTuAquwTfzBSYZGPXz",
  "key1": "3s4PSNV5SZ9xqAMBjenvod3KnLk6JgDND8D8BYNDsiXrK3bvK8NMnzXkmuijxCzroJYqEX2dXH5qQoiQFkUMdRDu",
  "key2": "rR76s61Erxi1QB9UKGsK5hETnRGP4w8ZvsKVv4NC9JGK6H1ZGrq1aLaG6jnJCPHDYfoP7QfuwMgXH9XSV6G2dEi",
  "key3": "4QSDT1xCNHAKxFTEftsGV4L71zXkp28d1hT3wxSodzFLjfARxENq5Q3aiUPyjjZ6x3rmcPsBuGujh3kSVmpJGECn",
  "key4": "HwnKH58CNraBpzaLgkgQfweygbhHov7cjVJH7Wgtcnj361sBRmD8JCvukd6AU2GrhvbaEi67VGZGQGQFiK7mBjC",
  "key5": "3jaF3wxvWXgjfk6NbcRDNjqEVMWwgqkBL5rju3bzGQ3DL8KAz1vDw4Hkb3QUVSgVkamtNJiP5RAjuejXDfoHeDVc",
  "key6": "4CUeJyC4GYnswf1T3wS6REYM4d6gfSuYmn5zeLU9eSXNdLiyM1uWgCPtdyhWWTRKc5fiKcuPbQV6k6HdAfSbmpKB",
  "key7": "5v2H2eMuWbj6orbkuX5nr9s5KUd714jN4hMv7W9PcyfVzL7LgyckTdg2RrQdUQQYkD2NL239kaftuQ3G8xt6stD5",
  "key8": "3tZuKKiNM8FKkkZQe7Pjm3dkAQKdAb8q4N5vjUY8bDfzNkpumYRqDL6PXrh85SwWa1CzDAttZ5ZBKaYBrCU4yqjS",
  "key9": "2yGUjWGiBmgrEzgpXUnTKexartPVJpaGPMCwAWevHXkRMsw2p3hMedbawWZg8wuAr7cbiPB33TcrysCS48uLaubo",
  "key10": "9oCeHf6jntYXLadYTFLyPwUmqegaeVgCQH5VJo7QVyTCUnnngufNQbqf2drNPLjs7vNY8ruAEpqnUTYt5ZYpE4Z",
  "key11": "2s3RJAVz1ZXDyA3iLZjP8HidGk6eijc2Pzge3vzRFWCQ3q5c5nWWEbY53nUh5Zycqyc5P2Fm269dYo2fRA2BfxgE",
  "key12": "4rLAduj8yVaGCzttbUpaMQT86kiTMDqyAtGP8KNzR28uTEvQLQcRaVL6nyn5U1pviMz2zvD15PGPy58GdsHD52Sk",
  "key13": "5wCFQebmB8TdpvETJYQVQ7t6hQpkDkkupdwzDg3gWc5R4RKeF5FcS5NZSYBJMSnHamJDxceZCfBddh1t14MhgbKh",
  "key14": "3gXXZUctg1DwbTUn4r8UqokFbALK19FTEyVKbj7RY93sx3sfDFZL6DGBBP2uKTWSraDFyQSL1nfSkqLxoVUBn3bG",
  "key15": "61WsyhjEkD7b3srPhyexi4kxzJSL2UncudpGLekAemUgbE29VHfZTsBrTR7NTXJYZh9xvX15xrJJWEVZJejAy7UF",
  "key16": "22synXNXMqnwDqZSmb22ZAy5w3eixYDrcVNyjq36Yh612tziEhJi8kUcLj6ykidhMo9oCVmwmc7mog67QPsvozEo",
  "key17": "3ufxE8rc9wBSdMUQXNGvVhNc4myNDTqmBKaVUu9DLcbJdXXALU1JD7McTiSxGLQkLege5xRX3Ex91SrB8PsxHHTj",
  "key18": "2oCMPvEcR3N7WLF8xq7YkoR7U8xvzyKWaKyRN2BX7E9iCWBqCvirDYr4GzVA1WbWBNi4PZCNtXoY26FMYPqMozhN",
  "key19": "3A6v6PAqQjBgaPWytYhPeKhQuNxpijjFGyBcPRrCTNxEDSzxf1bSV66e9AvxrnJAZnQ4kQKJS9Z3sc6v31edhMkv",
  "key20": "KCe4rdVptmMZstRfHdocYbx4oLLhAxAfkVmJJioPVaE9Yp84ZkV3jFt8tqSKUhmYBRbzgJ26hBSqqF59rGy7pnN",
  "key21": "48MyY1TgMd9ZEjXAFHXv3SSqPQF4RzyT8rFVf6swe3SUQLpvZjYgsMpfnemeffaqdBtLravHY3dRVrgBycZDbjLB",
  "key22": "5KLm4LxEEDaMohU5oxdQ32Wadyxd8RzFeR3rotVJTMC1dw1MnCLdcWcW4vacpsVY2dZ2pm4PmgnbdfJNbkfLAmfn",
  "key23": "ij1Jxtyk3XYQzCR6SSTtHYe8rh8UwQJ7Drv5JwLq6WwhGcfca6rAYbEmoS9JSPfmzXo6DkfQKBiVmzdRRrA3erm",
  "key24": "3KL2DziUGK6KXS9csT3MDD7d8D3W3rdRhPEmHqVPkYmRUBnEGYRzPPvHEDJqMDBBxpgqJwwk3DuigjGSA9A4kvoY",
  "key25": "4ZXSAZHadAbkySLXCk2FhL6f1SBaGjksU23muMjcQ1TFN5sB7VeXV2iDbGZYYoSTDgWXNa6oYCf8mfQbp7YjNBoV",
  "key26": "4z3ALpynSdh8yLfmHzpG5EHKNYMSZjk1cQ7Fa8uqLd6bDNvRnPRGHrzxmA1dcWvgB3irhEtKTti7euxwFgUjcw6d",
  "key27": "4LAPgLmPN59y9D7dyoC69f1KkiK1gLzk7V6tyJVymhsCKKvytLASYJ9YVfURqgcvq6vS2LKpwqGhBqYRzYioV7WD"
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
