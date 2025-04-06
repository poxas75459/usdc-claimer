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
    "5SSXa3azttTzJLMBApd4X2JupLJQDEryopnmY3DoWoT4fbdSWR3EKywBVyBy8Tbpyuv9QRPep9tcAW97vu3o3Tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DMa9mxDfRDvMMwQNV3ogUi2Ke9iDxuRGkdcyg3WHb6WCpL65pwDbFeCxdwdkn2LXFgWcBZ5Xz2CYfayyZ221zx9",
  "key1": "NuCFiD9CcWgys4LmH7qGYbJc6JXdZaqJtQzoJ5L3pT5feuFiE7FkjcuJrxSPqYgsQL7Mw2X9rr3fFkf3uCNzac5",
  "key2": "4t3Jt1XZ4X1D3YXD5eWMZHJXBRvEKCqv9FEP92X2gTFEYDzR3qZvw3UGnZMa7smPBntUzWe2XYF2FFN6VQDZqRLn",
  "key3": "3RbEoxZoowjsobQn5Esta9mNRN3f2P5EhH4QhCWwYbHSDiCUDsRBF8fYDyAvDVa2BeGnSzugMfRTrfcB1VGCZTBs",
  "key4": "4cfw1q5dHiauY1fn5ea1LYaS8QyTnn1Ho8sgu3Nonf1R4BW8zJVPRr48qKyozw4DfyaGFq2nfqvZ5MQAM4fNdVez",
  "key5": "3zPaTwedArt67joGzxWE3PKS7Eb49CstD1HHmek8SavqNWhM3g1Pw8cDRbXsy58qCUDuCRNTTsKjmpueKpP1Sv4c",
  "key6": "3ztnEGgUeYnx5vHNKmkc4F6Bh4ZiEH23UMG1EaHzumjd2rUXNrLA1rPLHvYwjRHoBLncCcLiRC6qKMPyMZ1eDxK3",
  "key7": "43V5fdBRTxWHYY6rdHsZkHDafVy2e7nwZUMfcy7edue3WdkjKSew3hqdjA9LiGpRhKk3W8YWGc2sSUCPuuyPbcrX",
  "key8": "5Ln4tvDow2E6cY5Sw81w5cNitmsbg6if1WKUBLNAzAPttRZmcn19besA1FkCA6z8Y7qh79hVEePZCbRL9tQNgkJC",
  "key9": "4cgMe5FTxpRLdwdCW1DXQhfkcShx7wg5HjXzHRFLFaoQQXVTLxXRPsQKeFvpquGtK7cQhAdMtu9Dh5W3daGFaski",
  "key10": "22Uefnj37kTsLD7tuR6EauLxArQ5FRe6GEuk1j39ewgUqsuSmduFVpBKH1VrPRmMx39qQouXk3hDuj1HN4K8ByLc",
  "key11": "u8x18cjymtC19oZUyyCB2C5eyCGznTia4VA6Bc3PeErbLXsFULuWhVrw9eWuNWMitCCF7sHqggkUS5r7JyatXyY",
  "key12": "5sxa9VwVQbQvJipXknuVsfXfTPGukvCGEmCZAKiQQzqBuaRifZ2m339UxQzRrnLXUZrqUhrSm9QTCBJQWsKLMNBG",
  "key13": "2tFXjjCeySxqC4njW3iryKDtnV1ttaBLpuEAZLY4L9K6zQmt5ExQxcP4ZFaw8FRjas4xS6WwfpAGyHLnuFLYC99h",
  "key14": "5Z6jad4EQvZgg1WZgx4L86ryZWeDi4bBk9KvLiwhPPHVigU1Hs4Hjo9gSPsM9Mom7enSK6Pr6XZ9egx9nqzNnhND",
  "key15": "2nmUsFPKfHySdJdYKGvtkgfRnTgXBXEafMwxKLY7x9nqSdRUfUyMsg7nUw8FwJwWu1bGg7tAPFbYsjxBzw8iuvAK",
  "key16": "23JESRSf1CCkpTk9vxKrQ4Wh3Z4FXhXMXaGftAVoV13M8xBJpA8zZQCZ4U5iu5rnNyB9MRK9buhdJX2EgN3M4ebc",
  "key17": "5nYXHq18cD2pWVsNecDwTcUCzsQ6MAfAr8HcfWQghGMcYAmcvmyXzu4STJCbvqjhZRJY66ZZDB76tRAQ7MTKUVvS",
  "key18": "3Vv3t1NRTuvWAt42SxPnqjiD7ep6sNcWMNMuWn1jRv1LroKX2KkPuqXTDFp9rKUydVcGapy7jzBQtPXHfjdsX8Zs",
  "key19": "2R1F31dQP1JV2DwuSLWKd44tZ1assJaz2FcPH83xtMHYXyv8qVCynJmqmXNooR51h14bE6kyL3jtDb9KRTUPckCv",
  "key20": "387gRMzCQRsx1udFJcGh88RyDoP1heJXzBtYB3HsSeRKTtgkC3aosMXF7qxTBAPmct42T2j8UWQznmecLq5GP1oH",
  "key21": "2LHaFTF2fBTNDSzMeYuH4LVFujmVrruqyr1rJGQja5NHzQETfunK8feYpSa3K4WpdjU5BFU61bUJM1hBRzmFAaJo",
  "key22": "D1QemKHYEUDzqsBV9A6USfAfVCcgg6QzUCEREr3jdD6SDFoDv9MYHpmj2n7Njm21aA1FdxeqspbY5oi9kzCYzor",
  "key23": "8HXq89NQU3dcfRZw2sw2e3ZhULgvXhD1L3qTv222fyHYvTj1geBxd2YZxd7sAutcmK4sKvuJyK4YacKoeCQXjWb",
  "key24": "4PwUDo4aWSYJRwJnB4ztYupWV57xNNbvdN2UiQAvCAg9RBfRCeyfjhmoGZGBMmXHFuv4rUwR6d7YeXPo6Gs9VtJp",
  "key25": "TYsqPwXFw6iZJox2xkxzDfnou5jAN61Pt9NkePWirQtnnRx2yNrhDdb5cbPqxcUh7t2AzbRNyzVn1sLTCNrU3r4",
  "key26": "3etauJv6GFgG15r5XzHQigbkwNFdSzWUJA6YWcgx733qzrJjzE1uTcgiv31HjFGq2XdrQpJQR7uArViF2DVdMuJR",
  "key27": "629qXNUW9T5ABE8sDnNVnyJigUX5jsvVCBjXRex9nkQPmbXXf42PZm14egwsJU9iCwcoakUbMi8GU6fxeTW9FqtM",
  "key28": "3XorWKkPknfjJgkPupTDs1jxp1rzNoXF4vqYUUkeGHLMVyBMca6N3z2BK28Pp8bxpabrUqtZb8tEJ9ebcKmmUZjA",
  "key29": "E5aKR6xvm23qoqJvgHUj8547SyfHQSrrf4NxFsN8ZrBG8DoN1JBV2wXcZ6uJFVy9g9zttqbCz8WwiiQRq4hECo6",
  "key30": "4optesuSfdhYwfdA3tprpeYMgVu5mu3g5xZWCMWFep7ubHj8fwGr7AvdGdh5ThnpoWNFynYWg5wqzB8hK1RGpQxX",
  "key31": "5C2mvSByUbpuNMTA1jSQhB8rfVEicoAuyi4MmK12Jt8drdPgUtAEAHffRQ3gFW1Y5qfvsawQRnZx8WJ3LGp4svAZ",
  "key32": "4kPNktVeVqtjtvnHLUbeMNMYYHjdMri2qyNoxXKqLcZe4xBMLfnDaUWmW6jsUZmFNqUycAw3TLAV3CtKy4Chqhwa",
  "key33": "525RtwMVK1ECrwXP4UMKPG89kHziNzTJxGFSJEUx8P9sfjbYMMaLL5pTosUvAmgzX6bmephaASdpdefry2dFzBUA"
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
