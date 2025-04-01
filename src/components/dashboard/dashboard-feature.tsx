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
    "2YQCJTbt2yhbAKHMTfvvarfcmxWj5F3UdUoyu4fSv7hHqKRpa5ndXCnFC2tC4akxx3zCNgif3pWUxfzmzgnNkXqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVTiaKQcBx9XJf2FNXk3wAWZA1Vb2yVhZ53g5a6BnQkkdo89vyRUzRD8jDX6HQSGbHDQA2PuGNNFf5PGn5nw2uc",
  "key1": "21QZiSSY7btJk4xUD9Zutj2QK1YNBzbNojWHWe4svWK9tpt6wjdqjH9Xd1qep5Ti53YmtSNnbMYSHhuYV6bL8GXH",
  "key2": "2CZBJPu2KcRu7PdwsdaZ2fHHBx7ywn3BNwVzwXAQJ8zQJeq7EWAHXs5CRyDLBxq8iKJM2Tmf2QHo2iw2aZ2psYXE",
  "key3": "4UC2VZ8VmZP6ztvFQVeF9uFUpx6Z16LXD1FVVXaxmKDbn7PpB8dhsvFNw1vfs53ovp9zDGiCNuDhNkB6MSqZANtJ",
  "key4": "7D6TqVrt7bWUU3kcDfufrS221XHreCSWZ23Exi4qH8RPnyzD3w5V6iE3mwSK3vTLQZn8AwPpc3QDNtTuAd5Ce9m",
  "key5": "2b5yaQhJKWYjdqBHetVqcovhBy7q82mjZpmZpgnswcAYcBcyAGxqQaTrEVMhVPZ5zqAox9PxGxsCo5W6e9MAMFue",
  "key6": "3TGvLomZvy8M6jUwkC5Tfuqs8qup3bPcwtjBVNEKX7BbUix47dDXHg5rSKJdU48R8UdirMW3v2wMoaskho1kUAAY",
  "key7": "4MQEsDYYfyLE4qkcHfRA3okWrjGpxtYPhnE2hQPpTGZB5iwhzhMMFduK4FF5f6EzbPhDRwhfyG3ujSc6k7No85nB",
  "key8": "2XA2LioGTVgWkbRLWLweRdgJXeqkxdBNTLECpm4X3MKwvMKJDc8w6378Zt9q7XZgof8ou3jSpnGN6oZhgSRgra9e",
  "key9": "4MM789YUTZoPM7SAcGHViXggcW1wbBKKn1dfy5oUaUo8viEYmdCR2KuJebmVvm7vjrJxakmrinKSqVB7q1jxc5K2",
  "key10": "2fdNPW7pDkaDYhZWb4y9cgUQ255bRgkJGvsXbyaGeRujb4vdaRvmPYTDbbECheRcidvFrY56frYerXTy3QgpimQD",
  "key11": "4REf2KauRottF6aW33RihHdae13EgQbveiKL9Y3LjbJgAKLTmrvU7WjztcyY9gSXqFhb7KWdqhyCD1P8ZWhtvQf9",
  "key12": "5VDZX5NsKaYDW9zgxVkFJXRUnFJBMfhZ3nLPQoYUrzwWWaqHTAbeW44DFDkWkjMjrziow5Nxzp2YeaSPSCYzjzBS",
  "key13": "KegBkDEZNAjD8Us9cbSQhBL5ZN6t3897ynRm18a2zdjZgHBaMCba3gpq352DiuLeeNYCGcgFVzqkfAyBKUNBCvb",
  "key14": "35pyPkc8BAkxTxzXoHdkrPfkUf8wCj3N89RHyV273uZ9T8P9UGGV5XoYdER3Qoe1syazD7h4PZKNLLmoXMUsZFDY",
  "key15": "XfLV29RKPKHuLEuQatjPDztZY9zkdC17BgMd9o71bxS8M86eGr7eyGh4MjqM5PJHKZJev1YM71FNxZVs3Kabpt5",
  "key16": "5KMpfpNCBBjpGBi2VQsbVT9gLYsX4QWv5XrQswcPr7wE9jJxStYDNG8yGWLY8LVUUt8Wt1hbc3rPnbTtgucU16EJ",
  "key17": "4HmtuzAAaMvpmcHPCyGBZBnD26LZQRhoDS9qYDaMWqioXnwPQYZ1yWnYJaKgLt3tbUqb2qkqg14faSxvpSrizHLu",
  "key18": "35h8WvL23QVfSPboR97wKvMxhwriW48d1k6kcHD6BAHouVtLDfmGtRZPR8CLvo6wZ7uneywz17HurGLCT4aP8tXB",
  "key19": "62YVrfFVtfohAcz6UKws3svDW3vEtCLU6MXS4enK3w3paprFtyCrpQbTT6cCs7MkvF4EhbVoL84gxLLJoFfDRAvJ",
  "key20": "46qnd3F9btmbN29gABa2cDwf5crkqAuNvfp9zox3QetAwea5uhUchP3ZiN9VdQM9gV9R8arm84TKpu2H7pySH9ZR",
  "key21": "cLrmkoQyjcrWLEeD9uePErBweAdydoshSZLYjVEvH4M15PTcBtaiz9AjAWPy3isv43pPAGHsThgqfwtxRKztVQh",
  "key22": "2NbGX14jAkK9YnNWvfHCQ9cTbBkBhQGCJVgLGPgDz4dWgStzD2vZaXLcge9bmC8RP9KmNPxVFiJcUhZDnRvcn9Se",
  "key23": "4BhHatzPdQ9aXBB1uJLeomqDUviSWaCDruZKGV4dGtcosXMRLnRwukam5LN4L4gvV61Gx3PR5yAZvubMrHwN4dyB",
  "key24": "5ujVRkRj4QzitrFGGdHrUELdrbrfNrrizn34AsEUsXaWZASLY2GboDYsAYh8Q6cZGQNegEuLHRcR5vyMjNn7YMcN",
  "key25": "48C5Zes96m6WRubDzFwDHNrQBb7AhafrdhFL9cP6pqASv8nxVgSGC4XCwJ268zdNuKE6FZZyce45DFMrTSQYbgj3",
  "key26": "2tYFyvjWQt6AVDnj2q4zy32UJf75bJmDk3DJVNn2XrR4vB2ikBchzXKzSKwPqaR2zNujxnNWyDK874iDDQygScQD",
  "key27": "2BEJg14UzvFwHyREEuADFjRNSewk14MiQDj476mT5pyVxyZLPWEqtzb3p6mK7y55HAiJyWWvNTtTy3McmHmV83x9",
  "key28": "LMFEThPA72f2SceDHQVZ5adruARSur4PXK6k2vYss6RLjMMrYPzYCuyFP3FkD3Rxr8sesdxWzwrXeYkTp3r8ey4",
  "key29": "5cU8x2W9h4nv6MXugxxPUJ3M3ougvWVe9Lgy5KxCbHL1hBdpMLhn3T6CnTAjgiccMB9tiWNXra5uhdcTg9tCtqzC",
  "key30": "5dsLU7VQg6qvL25PSQeY9FsU4W1udiMEj9KMMJ7avDv2V1NVfDbTYzNetcmsKDv11uqAt62DYthCCjQCrrooDB7z",
  "key31": "5QVCSjxDwDkhBsHk2nYE1cCLjmRbUzNPPGH2fTDpK4XLmXqVUQQ3scyyNcxLTUaWTyejp6eAokw814yu1WAKvtFf",
  "key32": "6y26w7q2DBYkoec7gojnNcjhiF5wwZPSEnsBc81rfo5aAitph3kDuTob5NdXjBHVgh4B5kouHWxkuSEcz8VV9gx",
  "key33": "dBpmMfPAyzPnY9uhMt8GxGMHUvUEEReL8iAUMQV4bJiehcUbuF8djqEAGtrQXpaBE4d4cjm9eCh35jin89bFcms",
  "key34": "61oPtauK93gbGUK2cuRraE4c4dRB7FZtJVZ9YCvhPX8Jcb8idU9mQLW7dhWjc2d4TwjPPYHCkmvRfS97FP22Ga4v"
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
