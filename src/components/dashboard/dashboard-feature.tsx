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
    "2whdmLTUgiqEmCo19C8PT75G9xgaENoMSuDWLCtWGvVdJ5nTLwSFcdbZ6NM3KKZe1HoLR79YjfyvM8vURa4p8qWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cB26xQKoh18JjAd3S2vMNmvH5LZnL8baBoUu5Wh1PAALcsXFrakx9pKQn15mv34zJvvazSoTn17JjpwHpm7eU7y",
  "key1": "4zfQ4XhgthfMVcxXBksnLeKWa2UZr7Cz8qEVSZKBuJ4MJyGHUwgTRvQiX8LqZ67yxwwfxxMDaQXfDgWEpQkXegz9",
  "key2": "3d2hdtgSq8RnW6kDoXBTHwznEwRpw8PsqRrJQphx8jMVqaB5W5C6siXZUbyuHDfExCP5P39ZBE4dos4xvsg2QvMb",
  "key3": "2S5ppFiDtKgaHgA5Mb5MLqQTumwbKgFBNqT4w6ysomkNgFaXcHeCnmPW2qJSYrQRknmDBACrXpxjMYPscWJyRnrD",
  "key4": "4PPiT5zuLWjq6V2kMbGkSfSQ9jq9QJF1kfMsb619RDLQNaiFkUoHMpuSLrZLv8nBRjcEZQzHQBjjcvTX2r8cFZoL",
  "key5": "3WTZc1r1TJURBcjsLx2cw1shDYEAY33VE3yQpGRXGTPhjEBfifEJHCM1yKLCymD4Y1SaSXWK2iBWXxG4JjeXqm6B",
  "key6": "6SaLwCYGo638ZBaYfzXCj2VVZgduXAEpb9HBJHi94ieSNjNmutCWpwJLYFUSoLsQfHuifMEKitTTcydLvEEnLsk",
  "key7": "4CEUFzScozsMZVNQexmh1TLLP3ZK79eQJUGSLiH5R7bMN2LLGnH9kEpEYG3yHxPv8vy6T6CdahTTG71BpY1svBnK",
  "key8": "2wXFqjMCGmPMBgjC2GhEWrm58PXegixb5BVXsEcQgVSX3C8u4EhmxyWYwyXAC3QRpfy6MBwbBWxLaktvaFBKiQFS",
  "key9": "47HW3YECGUijxykCjVDVPNy8bYPsqnd2EyFFeNJcfVGKhmbDxTXLMC3fGPXf8JCEVSqdzkaxTNHUSZhq5srwuYH9",
  "key10": "2trMBY8CYcgp3s6EgmnJf7nmVLCBmCDfLG3D87iiFxC6jvAaWMJWchd7a1UwEgeBWiwZPAd6i5RdLyjFo4JwJ4sh",
  "key11": "5PnLmocJDKTgeqc5t1TPEtizcckyxFiVUjTwDVtXcPCCBuC9g24Bj3vM2ztwjTQdEtmRe1t64E2cHnnCvdh9Sz5F",
  "key12": "4EsCheKXnzziZn5ygrZCjHfUK9FUMaPFSuUiyWUh5GEmTEQ2HDB1kUVhBWDZiY5ijr1DvNpCjifR6oQ8dvjZ978c",
  "key13": "3pRXkSf1CRq7UyQ433pDqeVfHg6dag9K6avYzKRjEZnwejTDzfCuNZx3GrrfT5nQmao987mczYNsvdJmMJk8XLrC",
  "key14": "3jfvcP27FVE4sgRdrpuugeBKCLvoFy9c1f9DSn1udhJoGt6eSLB1tXYAbPuqK7cwJDsxeaKdHRgM8GMUNqoHHW9i",
  "key15": "3GmVSpsWVRqNZDidkJurLB6iyAYBa1gC8WTNGqbxdabWAnFAY1WnJ3UXvotQXDLxXeU4HGQKrDdDbxkwbj2CHYat",
  "key16": "2ERHGBDkibeeiHcFVRCGfqi1LqmSmqQpFwRBKTeALjdyvXUb35vVrLPJvAR4UWR9ysKN9oPG7JCtfFzHum5pxc7U",
  "key17": "55NJWHkmLDE82QoCM2sqES3yebRmWHd9xPCZT6JNTsjvdzM82vSgGkSPqFuK3R1KKn21H99tbnXMbaquyTLcis1f",
  "key18": "2tMLCxdf7TpFgtQkMhS48FaA2EsZ2xpd7jk57HT3GZX1AqRfgQMiKy78HQbxgDH4UaShpakoEPSU6a2cd4C7z6ob",
  "key19": "4FaothwGYLrrp2UcPZ4b6YM6AZpVsfSnQiTF4eQzjWxj7BAhBnTW4PudQrbn2yaDRj3iL5F3rcxPezQtoZ72ccNS",
  "key20": "JaZ6aVvVj1b2Q1t3ArcBrfF7SEw95EBW9Vt2x8ECWHNYvm1fdoV2okrYLJPfFnWCe9vLKjdq4xkzHK6BC7NW5bK",
  "key21": "2mic9A9KqGxMRBYHiD2s3oKYAcjHPzGK4fDJz1xxznWTJzS9VWqSPVZ3s286KQp2r5tWG9mnFaXLTm3ikkjtGj5g",
  "key22": "3ik9h3Z2f94mAsP27FQLmyNpQpBKuajugBDuHYCFuQ4vYGGWkar52hqeNQPLd2NQsuTniPLTypqPCMuwnjyiSHH8",
  "key23": "2TD1oEoJZkTPCv781UAHKXR3uwteCcRjhjtiiW8VA32Rcrc3UNXaTLLAm6kx8WWMCy8XNvbWqifQVBCVhvLGJ7ny",
  "key24": "SR3oKd44Zo7KaHDZP1rqXLfYkihAtDzE6qgPGF9mKujJ2wFp2VqEHaanqk8gQ772FhCk9LsyC9qxQFKzGgbPcVN",
  "key25": "tj8Uq9sR5JBx7J1qrsTNzPtLqBYaKoYUZMoYo4S3TEnY29kvbdYMh2KhVTsqF8QjUdT5xsFkjGnqEGLU5TbUkTk",
  "key26": "25dafzL1X8GUnxjSTX7KTNZswR9Yt6ywxQZ9jzTVjcePxc5enk5DfGT73jokj5nuXvVM5GgZkVs4GfjQRZbrnK4p",
  "key27": "38GC4qxgvbTBtHDx2Qz6TbVvpYuSQTSpKiE8tGrUFtrp5EyzVXXPWsPRd794byQsdxFHy3NtnDUBFGgKRzN4vH1P",
  "key28": "4J4yUgUvLuesBXRo6tzUo71jQoeNu1aXnYXW8RQDA87ketoVYgnq42U4WyFvaN2AXzbicJSWd26iCfBWd9CWRMJj",
  "key29": "3hZQv1byiam7q71R6ipnYjKrYAXYKBjZepiJKXtfQntZG365raqVF92E2SLYNjLEGb5qUmNysfcun7HqHzVpJtYd"
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
