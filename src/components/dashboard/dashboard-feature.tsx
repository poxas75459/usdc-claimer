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
    "2tHHkZrkHnt9KALXxnKLsrTXiX9SEbTDbFyFWk4LEXH1jUMaGbw5KAyYezezac6K2YzrDSMdUhxT9K23rXJxnzDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G2HW4cLDRzUDghEAXAfwz3VhdDrNVyawJtjXvNa1HCCuvuWibWF7uC2gaT2WCR4HaKpBo8B2fnXVfVuVXeGPKLz",
  "key1": "3TL4ccpWbc1avDfFmwhaVwgN7xRwj9v3UwWMf6pSMFQkUWbqG7pxK7FNpdRmCL5ivg6DG6JX2ZHfqRdLF6q9t4fK",
  "key2": "3oKWa8YskwS9fp2QaricWoVrQqzwiPxyeSMbZtzqpZykTNA2otLVc724qrpRUz4MkanZjc4WPxGTZxnjiRQgA2QW",
  "key3": "DVUN9WFtSTmgLGC7FTAGuT2Ed1BaZvjCDopYG338SwDZaZaxC2dTf31dVUk8F4SYpCzMaMccyFQGAuiAaLes1RG",
  "key4": "3qqu6N6wFitW6WmNL9EPHYkHPEnvMRuGpSSJ5najANpSZCWhhuH6ijxRMkb8rfq1kV1SCCkGiRQWMFCBCYivddW1",
  "key5": "52Q3ejC8X4qDCVE7BEbbVtFQSCPQFgbvyinj1VRYg7q7UHZMF81CWxVD1Wx53QBVvG3g9xXa1KuZV8UejBy6Gwpv",
  "key6": "LsezT8w9svX5Gx89MSACsKWk6PmMyeo5KmsW8VHuykm4uvWWidJFzjSffJXDH5K5ajn7F7nEYSjBvZoowrwLunw",
  "key7": "zaANthKysgcyutZ1oPxLVFLVfGe6ZL4Y7bwg7w57iS6bDUv5C6R5FvYyk8hUVNwWwD1v55Xf7Dj8DxT6xdqsFK9",
  "key8": "21ej22kpCEaecYkzQ7hCNT36W9QXU9rLcYvMGMeNPNKYMC2jJ7hAimgLghw3c8uQvRgn8nMkUoSUm4AmDv9RdTr6",
  "key9": "2SJf9fLLFahgR4xeHEyAvmtud6XYpJnTWscM4PEbkrmYQetUoRR51bAP4oVv83NnPT2cCFjkPkLZZarVK3p16NEA",
  "key10": "5BpKU7Dd2n83v6gUca1Ezona8nWnkNVvXyuSkH1RfFk9TpFPWti8qP8n6gAe3EDufzDBnGdzYzR2B3qMS7TrVy9o",
  "key11": "w2yRYfhxPQBfgPfgoY8zspj27ffFhKS8ZA8cBme6Fx8ZkY6phfiaxBb8wogFRBahTtUefQb47fxnt1zUFfWWDD9",
  "key12": "5N3szBDUKa1q1JP8twtQDgLFgUdAhtieUdpyKRSmL5Ji5TUB9mGfKyLF1bUmR3qv1FeEnU3JmGYSqbUzG31Sjm1E",
  "key13": "5KDNUHCYzfWapzkSGkYuwQKHCVwWAz7T3gw43Y1qamMK4G9kcqMHSYrAEaWnQjyVXWLyRKjjuExMGGPXgag1Btn",
  "key14": "2Y2jJYam6zzsNyV7rRwahKmHTma8wirycX8iZm2ADFZ9weQeQPDxx9pFKADFost254hC1mz1sEkDPgvQuogoVWRb",
  "key15": "55G9av2dQzmfZT4eTNssNP6gLuKSrVykPDPgzkXfrbgzPzxBeZLqZt6hVEJGLSNtwRLKD8SbpaWTyBKpfmXLQ245",
  "key16": "66AXJAAbWnYNqH5X98aDjph8ATQ8UL2H38SXJ77YyRh48paoCG4Xfad44xaNAvsor625XtEyKeU4Rsni758YU5Mx",
  "key17": "9CeeCQZ1N6P31GS3gCMzuk5yFdhDW4fowpTfEhhEq3nBmmW52hNZwzabNphPtoe2Q1BcG3Z5Y8sqJSoXp6i7tUP",
  "key18": "5VbFcnRwPpSH5cbiDowtkBYobVVHsq6twYuJMpVRoNqGxmFrF47QGGqoJ43ZV5g6m282aQZXtWfYzVkh3KZ1jv9y",
  "key19": "53Wco8szqA5wynpgiVdrqQD7WnC3eLateaYZQST9Xf5mSELSipvY6FtrjkxJLg2iu6AXhzKH7W5n8Cm9Ue6RvMkj",
  "key20": "5nr5UcjacXkRD7e7vow6iVJstqJnq5pAtsQGr5H3n1pZ9s6pQsxnnnrCFvbZoYNquwDD4Lh7QXQiE7man398Bmqq",
  "key21": "66HKxiv8oRGGf5XPMnW6PoDtSQSBUHtJUkhsRnJ2v57q9q94KbvsqDSXwL6Bcx8bGhUVz4tvxzNkwdBr8qewHTf1",
  "key22": "3CNn8voocNxdM1b6N3sJTrezR1bKUesarBVGU671TjrS4PcZszYkcjK5X87w1hpzAncWFaRgLQQuiB9UntXkkJDF",
  "key23": "2yCQfDmqH7jeyxigTr8EkkFBay6eiDFEWhT8F2xKdCjYcc41UGz82YNzBYL6viTxwa6DqoZeA9tZqQG39YRk5anh",
  "key24": "2dZQMhT9PPVZbFU2od1urLP17RNJ6cBe3QmfxokUQpJ5k7X9KTyidXAnSPiFSC7UgVs4i7hnDHFQNAtehPUzymwd",
  "key25": "248ygekUTYBMohCjz4Zx7XrUqF5TbUbjVyo4dGMj66ZfuxLQvdu5o3MA39dbWkav3EseWQJsGeUbGC8Zpw2Wr76d",
  "key26": "4jjGRqdTQfSW2fTnAEjYN6uDKnY2iM2NhpeQUxzM7v4C8sahTtB66FhvJ1Qjf7jhG5VZrmv4B4An3LgUBKy6pb1J",
  "key27": "UVKt6vpupcmmwJRVUvfdcCLEaJuqn8n4n6VbVTiubgvsZFM3yyu95cJfFb6U9d8j2S75B7jN9WMVHH8zNH9qteF",
  "key28": "2JHi8TsLrVf6Gjakpj382BU6DY7r4Zm5DGBWbxfYRacqksLePCu61JjiLNM4UZK1dkMNk2gkumJjxJvzF8Vub1Sv",
  "key29": "58gWrt68XWXtGTu9jv5Ru7KsS8xCPxggtMYN4DUM64MbotqhywLdHrNfFRP1xcCnc9S3oUZ74BPvviKQJgsbURtj",
  "key30": "jWjoFWbsdidFn6hsAm7o5XDaNywxK8ovUnSMetMeMmGLU8WzQBajsCHFsKaFEAeiKNde8ZuCYCvf3DWv5ZpdguQ",
  "key31": "2w4bJDXHAZCLVisD3jhPua9b3q99QWLT6zUZmsLm4HLx47t3Yyb9zmCjx7W59jwftTxkb8tqZUhsjmkRCbxxvDF2",
  "key32": "4QS5LLkr8vrgaST2BGx6h9ibJ2e2D9615yg5i6w2dhCeXa36jTHGTGd7K6A3tzCPc4KKPWj1F7Bbf7667gj7WHvW",
  "key33": "4ne8NHTrmT4aT3iQ9zXWmvPMuV3kKFduZ647AtBMyHio1sTBXRYQPJaGapG7yWZVq7hRgmqwYVywFeEUvFMXbTyR",
  "key34": "533ETCGTrB6pbmCiETt124bmUzgiwRkRHawY4Ei7qN1SARgSxYcQogaGMzMxfT2Z6rWbC2D7v8FsP4mL53T1cZac"
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
