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
    "vB9xmWStwmNrVFrzebeP1Kuf8pBFwX74gDdesAi8bFPQSkawqbPjakuzKtKgLwMtubdsHUWVEuwuF56vk5c4vFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwwnWHvah7JjcEp6c6jv4VxQAfMGz6Gtph5KugdjyhHYzLMmVB9VG7N4Y1WYnqZEoCa1X683eTAP4Ko2fHTdaHk",
  "key1": "3K6BLxiqsAUaju6Y8BD8m8JmffKYHZbPBSEhpjKNkvnkSdgVQB7ZzCv1TKLYxCug4mvs8BL6XRNC2h6NaLKQnLJ2",
  "key2": "5ZxRGZvFCbKbswbvW8cvWLyKBdyshALPTMmYuE7CuxrZ6cYeDtDkca1Z9pbW6rY4gECMPgUEj5H1vPzoBS2jHUCV",
  "key3": "2J2gRR4LGqYVPjb8yf9mBu88Vk1m12qvqEefo5Fr1GFF9bwoqot7rXELxcdkriB5dYbv8SoZxj2hineE3G37eTxN",
  "key4": "4iExfFErxw6tymzK65K71Tmd997Qz6KKERwzGQw8E77n2Ph5Z6g9nGcA4ED49sxF4totegYi1jLKsumcZhikw1tU",
  "key5": "YsqWqB17m6FdCYCu2UREQ7XtEpb4ao9TfFw9noy7Pd2Cur7ytMf7Jp5J8zNCgyFAuDLuDmHtKiYGJZdauNBRjEu",
  "key6": "5WGmNpYwVvPsgz7v5GgmWJcQLi1ofbhp3xV4cG8LXYxVDbUrGcoxHdX8ziZv5ns1iLu4REywJrZfqmjBkLjTyfmu",
  "key7": "5x78jEVjTnW6c3PJN5mrEjAVyT1UqmShfdbPsij92WGtSzHeePqauAvCGyTQEHynUnnCzzCoGrwgm2baDzGrUcBy",
  "key8": "3jiBKT46DgccThGvH9TevhSpjWrr1TCDZEK5Eit2vZyuxswnZSGD5ENUbYEuA9dQk7b3eUySDoQgBLXmdx915hTY",
  "key9": "258ZLwCTRp8k7w8uoWxXui5ybPVKhCcjpQsSXSwiZoVqwx2QUZGaN5VhLEmQUKvhDogQ66B7y81CdtZjwxQktGJJ",
  "key10": "33PwqjUNwccieiwecbi3wu6Aof2L6PzQvyRCoEJD3RZsgEhAZ7XG5yrzkUxJbbBSFdj7Z9gVNAouboTqU19ycENh",
  "key11": "3zCMTaAGkdrdczSwU9SRjETuUKALAnPCzEYXVKCT9PeDstcAsv5MWsQJ2fdwxLRNTdBoTwpMBspJeM8QM9dzgKVL",
  "key12": "2vdMX4RUfDKssbU8TioWAy4rqNmoHmJD5fBirUFn7fyeRcF359M3oMiMvDptuyXre4TQozVNk7FopEhUambBeFC5",
  "key13": "3heMXno39gzVXimDvzYSLA8qCaDnCmCPxNtEMAi9ZQ5ZapER2XMHWY3CXia5Hw7RG4QRtoRoAVJWnRP89uo3F9dd",
  "key14": "2MAhAhcustb87uAerZ4jtRTUpYjrfFz11f2AZsYh29Z7uiYng42K5pAjzreuJyUQSst1dTrEa9vdbGHYmD4FWf9D",
  "key15": "4shKGVbY8tZZKPqLxKi9gnLsDEMGKG8CVz6aaZ2gfstMTSxDa7qtefxZR67Q1fBkyszCQ14JtrQEuK2gRiTG5sc9",
  "key16": "5DWJNRhzTr81c8LKc74Pd93smpv6drdeaAFwHaxuFJxtnNKUbngakdP3Dg3VRpnauHGHQjr8Qf1W2rc5SYKEqxZA",
  "key17": "5xYPuY741rcEA5US4QQqJeCwYiC6ybXSzSRW3Zf8BtFS5Gg7t9qQSFSGow2qinqFD45NJP79BaJgTjZnKsVonbkA",
  "key18": "5hYRu6jgB1wD9EkPDFPd2cmkdLG51FcH5XZfkZMKgDz7d6PzqwJhR7V6Mg3VYX2fJpSrTMKCREJM1a3qXu4woVGS",
  "key19": "2Xsb8sVTh9KBRUnmg54EfRvC76fSFj36zs4ueGwLELoUyWkPh337nUXcPd6SDxNL8eM6rH34HFgYdqWtkrjdTLyj",
  "key20": "5NPvQav6T8ypMycymxU8M79hjNbjtyUvMgxvopSvNdShFaNmZ3YCPhm516xQnjyb64Pf3Xq9xhfLwcz9xrTKXKyz",
  "key21": "36DSnvWurF6aBkCwk1GTZeSZzco5UrJbkynstq9zXhr6hC7nieZ9jZN1dpSDQ1ZoZVYRtR7UYqoWZJ2oac7XZFCQ",
  "key22": "4wnDw9hZ4SRr5Mv9XjBfRfnhEoDtsMBunyC88EN7rYxFr8R6nZBXgcuCRjBh1KfCFXfy5uPRZC4M44tAX5RCFxc6",
  "key23": "5RBvB4FKTNJUJyZJEDCF3NwH3d6c7QvcK7yKZh6tm5WcQaaoWdBAGAiw1jk1SYNqQDb2yomN42AxPhd8Nrmv1qHw",
  "key24": "2U8xLDdReVnU9oNpyzi62kMzx9pes9zVBfA4T4Ue5noqxgAuRFRpytcryVvFAMr8ts7QE14AEtpE11nKaP4N8cPJ",
  "key25": "5oexXRK7KwLeB4Usq66pwgSj2gbrSrTANGtangF6oYbHC4eMxdLVDeL4yqw5MFeTRzBgsDd2cVQRKVZBSPAS91Fo",
  "key26": "3yTwpyZHJor1m28JwCuhWpGghZAqpRnLbmXAQL1Ki2g2KPCN1UgmVdqSThLyaTqyYpBZybh9ro6bm8RjXpZrzpAq",
  "key27": "4y8UrTAVZPXRMhFzimsVeiWcui2LfP4pNRtr75UCm7vEhM5ZCZ1uDkoR5igtKaV3LS92FwU9zHkSyEaMkrt7vroz",
  "key28": "49kZXZXz2HovD5ZuqBFTY1btHVEo7kzt9dJHeBGQzfyuFqVDCkKyaJuKamJwtoCjXcQPiC3tYzQWQJnYTMChTABU",
  "key29": "5XacHbuf2pmwn9CbWzUWSsvxurk8zG8PmkXmCGzQLQqPx2fSVZHLXuCvFXSTDkRRFoWXmA77sqTjkCDrZ9TdM6xv",
  "key30": "3Q6kSXj7imoEj6mjCmpasoGwD8TTDAUUkBmBjy4sKe6j47moVn3dx3erGYBdJ23rEiWMKq9fnqpXd2iNepnpQJ7X",
  "key31": "4kCwSNyEGcedr2w2GpdUktYrN4VyMFeQu4fSS8DkPT9zrTBPCJAibEMp65AgHQN52nSPtTLtjfriDLgjZprRYALH",
  "key32": "45bScpXQRwPbYmzbrCjU6RzLbBQ3nyKmSpfP3NWVCGan9Y8knJB45sWrPgwpSddoikK9edgjquEvQgqNrmUeVRn3",
  "key33": "xdZjFbUN7aDZiDXttcnzuEh8scfheH9x2tkVcffKZsgKSD1FPxGWKdbc2KUPpBrBNCzSTF5T7a139FBBFUWnQfs",
  "key34": "41ZkAP8C9ECaWmC8y2CWMXaH5tpDLcaBGaNddbqGGLuRKidg7PLggKwNwX8Y5t9Rh53DozE6jvHkAXbt4aCQdUa9",
  "key35": "4bRQgR9gcP8tNfwvoPTjvzfpXA2G739fHpuWKeVZzqY6uWqLpv9UawtbCznrCevKThs5oVLN2Xo3qZPmxJE5mFp",
  "key36": "2BHbb4mMCLxFBcTTt7FSjAZaioarn7XceMaEcqntDRfxeonmB5ExUtZLGXQ1sxnQ4FtbWshX5wU8sZfz4jN433LP",
  "key37": "4fQnzye9gTcKb73kgDRTGHVnCnQYZN8SfVjU31bx2BDRgWeHcUdmU4xAMg6xssckkkTFGFvuk3MPNsXvFJQKF83G",
  "key38": "59oh3DsXftLXed6acWZ7rQ4Znamgwc66JVmvrpiL8ENBjtDLmofLLNcNRsAqZUKai6xe9P4KXhSsKRWHDZ93FHbt",
  "key39": "4x29gPMmyVc7r6bLLvG6WqMq1C3g1bMywLnhQBXLCVXwXG1vYrE9Xm7J3GBEqKkgczTtTBS86oBNzdiASw5BcCp9",
  "key40": "dU9aHBHHgsQoDKghdiUNLbEPMUaNZYVqBnYNrN1VXBn1drXEyGDUNyPhExzQGdbohZrEvgw1bCp7zqd9HbGeNoJ",
  "key41": "2MNhT8B9e1MPjFUita1MV35qh5WkT6rHqnPXBtSVG1W6LkL45LaKjyaeBvXCku79yaoRbM9oANqH3rKi7PkkYVzC",
  "key42": "2KVcUEibrsov3p9UrMorheYEYYyEp4RJQgtUXJM7ZhtE6EVokkZHQTd4yrmRKKaZGNGavaP82asVvcDV1bgBsYyU"
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
