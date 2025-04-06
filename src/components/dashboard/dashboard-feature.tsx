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
    "2hkCihmnFa6BqGsoGy7cuuhwxCMAiE8vxZZQ4WQmgSU2pTVj6VajQ84UeUUQRhWz1QK4MDuuAKijRaWtH1z2bdrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uEKGt4H4xrymgJ7Qe1yg9Hyk321AmJYsKcDMFrGLae9mtFJChjbVLVfE6ocU9B93Ef2yKC6Q9hQRkvwC7zY7VZ",
  "key1": "4RnghFaG3pZQYEErSVm4skFmtMeZYjzf1FScofNEpCXEm6CLobMfVgGGj3UNRztUMSi1eotonfbxhUBE32S1zngR",
  "key2": "2fwrDVRZHf74ZKJ2jWEsPMmGohUnSzSJy3NXgR9y3EEMZTBYdKqRAwzo7u93gkNiLGStcreb56w42JQgxb3Skc9M",
  "key3": "2j9vov8DSgaPi7ziK1H2ACeEuiHhESXguM9BmRYv8gagT5Q1u8vi7bJzhMCurX9ZCvBdnY4cSygm9nngp8VJrZNS",
  "key4": "4AM736BjEp27pSH6vVVKUP6jbJBhT7BQit4ftwvPYSfLXJhWDtGXtNfBDHLgg2LYD3xyFD21GmBKJJvgxSHvHgaA",
  "key5": "2SjTTkbsH5oFjsYFGb75MEpWFMn58Y4eb9BhazwfMg5dH7BADoCFuPJoKjUuqVPxUuRLrU8U45m897d4YbwDXsE6",
  "key6": "hpD7DxZRKxg1JtNaggT6Ua6FyKW4NmHru4pynhUDDTocqbrtingXhXhaiugjPERpqh4KBnqveQ4QQzNdCqJdRCi",
  "key7": "21FQqDdKiDwMWVMDCYKp2NNFcvbRV8uastDkJuTSRYhf83PqSCLorMH8QhdtGYMQCGEEWmcLosCTYQZFuntmCEdp",
  "key8": "4WJc7aBApbuX3qP4z8gSQpZEkb4JNeyksHaHAr8FoHUWD8S4zPBuQsCRD25qk3XRfNdmkx7JHQfyWW3R8uMTg7Ws",
  "key9": "5hVkzVVJcx4SkMp1ySjwF1DCsb3wDs9H5iptXd55qeLR7TRbURNzxFskp2iUbnZHQdFeDZcycrZmcV6sGRsYxtF2",
  "key10": "4nrFfBrhLTg3WQcgrNycnpqwARXG4fCpkgeKsu7pnycQr4GWG8uXMF5jiVtgoLDcxWvE3Wd8JdrkwCurnkQ1aZP7",
  "key11": "26xyRen8b31nb4R9ihV72ZYF4oEHGSYXygRLydicpkNRLzPj2C4UccffJjtAvYLXLmDKuY64W2K7vWa6kgMJuUXB",
  "key12": "5ctqSaAghinmWNicLxUBnMGByyW7cavph9yU3bXq1WBSAdr1PtSJH9313Bvm9Yz2UZAPa49hJA38xYpKM6wJTheL",
  "key13": "4R5eKbX26EF6zfVELooRQ916befGPHXHhERT7xKNdZtJ6PUHEvj95zp2wtQukZqZoagPdpz8w6Zi3m4UuD8UJZ42",
  "key14": "5XF5rpeKmWZRZSGCsVN4iKGyjVc2Rj46tfxeoUjQGigcR59aS5QMtn3ja4ygCNhYa9dkfQue8kXay8WcQBuRBR2o",
  "key15": "5m7ppVn1vRJbctFSqNC8fKZpkJtovZjbA8EmxRY7GS3x6HoPVCTyBvv57CbqYZ4XTtDwRSwSf3j3DCRpahuHyJdu",
  "key16": "3GbpXnwwmHH6kZqzrPRsgm3Jxyct47PLJwN5RYaaGdmQnqpRfs6VEHwWauCCQdTkaVeT4T7Z7rJQU6yxbZ9o8XmS",
  "key17": "iK2hkkXihYoYrJPdiFuJd5d2KC5NewPC1SHeKTnA1qc8FBsyPyYWjfPPGtidxNz9jhaVHsRzUsCwh5zCApn2GHe",
  "key18": "5MSF6uWNzBFgabsV76PPoRRf3szbi2QRQsBabL9BUydvjhYcDvNoJj2qMyQXjmr1rp8ieBFAUJR39uRdYTdsT2Mr",
  "key19": "3THREn8iWiyvCnT9EHQdGEv5Jd1i7BqeDoaF5mXhiBk5hhP1BewodZBGmed4h8Phagere6ShXYzNwK5KanFW7Za4",
  "key20": "Y37zsuv8twBavJMaM76WjcvtwXocLHwi8qveGQ7Wb8uEkdPK7EPnG9Z4qyeBTLs5kGrnz5SX2BUVzq5VnGbVpXP",
  "key21": "4n2zGCpgeRWaXruqF8M5FdNs5PxD3VAG4cEE3bXUjjVT1ibHAtZYjrdJMHMgZ3kFrkyWjMaGZVTkejgg46bbwUwz",
  "key22": "2iyMGQnHYE4itEo7e4txEKVMwFyq4KcSMfo6eNnXxMqmKTggaNZqpFch7kKzbP5GGqZRD2UppyeunXBPpmUTKLV3",
  "key23": "5RcqZBkxpVwyiRwanhabVwkXpXScxARm9hdSvota97MRzurrdSKjcJCJGqcVr3vCHSRWiPP2UQFB8CoiZxVgYgPg",
  "key24": "4xQBU8DGFoQLMjXdtt3RR2U1TqzFWJjxGtQTqyD9K4HG3yrvgdWFwaXVkzmaofcyJjrxkJuGhUUvLaw6tRXwYmxv",
  "key25": "4o5ujyUxueLQkGRqo3UAKvxLwPW2kEMxC3Bi3rJnnPtWSvr64d8cdcDGBU5Qdo7c4kmi3jD6g3BF5X8h8CiuiENg"
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
