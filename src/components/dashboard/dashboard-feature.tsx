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
    "4KEbVA1aJXhzyk32Vhbm19477wMQy6iq9k9em3UwLMjdtKXZw9ZgTLwcaQKbJXujcEvLhfksEYzeyrdzjiDefs1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JJKpGJUAgo4UMveTfvtypqqvuDZjUPZtfNLPqXE5fBEN9C39XyR39DhDcAZsS5ymMLchugeXB3QfrY3gD7eBoTE",
  "key1": "3V9a51kRnQqUS5oDuezBKq7qHNTYM9ciXbnkw7hQbNeDioqVJoDdiTxkwEyRNzKkqum1Vj73SnXCN9YGxC2nPW5j",
  "key2": "22EhBhCNozUbQ1tyk99ktfySERbmsBS9PMX93FmUXkf36YRWeMTZpkvfbz8vtq5f3Lzp97yuDRNNVR5vUQqYm1cV",
  "key3": "4pRv6Qf4JpbMYbpdomrhZ1rK1PVM7zhrr9Mr2t1SSxD3cyHzdHVep5hGHXx5CcUN4peAQ1dtprcr9xBujgD7pmDB",
  "key4": "4DC9hNwnwWowbaSHJMXoJFhteG6J6KKZGMSFzwbb73PmLNW2j1kz1WDrrzjN7UZ9c2WSN3pfoDskchyhhMxw55ZD",
  "key5": "32pSKcioUrDZ9hcdJe4EWwbbiwUHJF9ZF6CM1ck4sPhK1zw4wtghJnfPhGZEbLZagFtUhYHZde3rgzdiX8NiEQzW",
  "key6": "2Qp4b1jkS3hFepqJ6kA7fGhh6CGnUfBi1aXAAAb7BGjZYAfmB4n8PW8xxaV5oiZmgqxHMNkpsSA43QsBpme45gfz",
  "key7": "5ed3zoBj6kFbBXxRpUM1XSFpWTXaEYEMFAB8jJasSqcvAEkdRDeTuQ9YZo91rU9H27sZvm2oQupkCqEgh9tsHeAE",
  "key8": "3CoZwX6bRxzidvYReEgueh4zYPzu14zHqaazKYF517FNK64cp1GJwubMkX42MgHv13tYzZsctyJsLWRqbxmwRPjG",
  "key9": "5sz3KSDXPnczvfmtZbRXwi6z2bej5KUBQrm2GcEUbbHWnyf7XvRTHV9eVgwzq2KNG7bwEWW3dyxA3BrJk44vGo63",
  "key10": "mC4NX4hZj7mytWc1dLRvVDyT63Tj3ABu9tDB3bKdjCNWHCUpnZawEUTGCFA4wgyLW8Sa4ZQk8uQeg3CpivLoth5",
  "key11": "3TY4aZ8AmMcJoT4dUAyQknMAE6rNmkibgADaoiZ8uHDWwJMFdW7R1M4k85WyPC7yq6VTqsdzH2ET773vUhWMYYVD",
  "key12": "5mmBBaYTQwPTimvH1BZuy2VvYZxDDPmJPJBqX3emyBsg2RmjCnsbyi7wfwfuRaTGmERyZdiv2qyax9BAPHnsUvuF",
  "key13": "5byC9Pao2333zcxwRYfxjgRC36XdokKrkw6E3vRfqSsc2UdtY2yK9skS4uxQy48eroLoc4nwnUZztmrxAoeVJM5B",
  "key14": "ZYMD88nY8LBNGk1vzYQn6bPBgj4zRahH4C5h1yAW1dWFebX5jx2AdtjJ148VSDw8GXSrH7UWbDZDFrbmjkdKQEB",
  "key15": "56YUN9sZ8X7Dj5fQQNqkA3fEUShP7QdvRvQGWy3HGZkz1xu1BwmC6WS8Re2vw5joZTHTMNBVjHadeE8HvpsU7A62",
  "key16": "4NPBef4BjD4JiMD2deB43AgYD3Pj19HLuah7C8hgjJcAcVynpBHhcbTwF5vCGCxwHbsRwFtaJq1tQ3FR8d67Ecxu",
  "key17": "4AF6t8zosieGs6GYhSvYBan4J1oyxMs8YSbT2QWdQhxFBx7vjD4CwG7rDfeCFBpnj4WjYGHuUNAGqAeGZwcA3hER",
  "key18": "5vP5nbjZ3edzKXk485XsubKPyQcJKzFKeHh3HuBsDpkc1xNpgJy5TAJ35nFAM2KSBDjpUxe67ua9rKvqVknLAWg3",
  "key19": "5BMTzEZayQEsy2brYvooWChFZ5swS4Ss4HUY1KpStpCyVHZ7kSQNgYmNAXJWYUWz2rZ6wB2GsBWrrfuzUX5A2Td7",
  "key20": "33BSwoFC15tcyjzeUXYfxfVJFkGYrELhhCEXt7yRWLk6CPiQiN8NCNL7JadX4U5E7J5yNyjkZBMdzNLoe5KKsUsS",
  "key21": "B9E3N2qBAZWVSccntHcX5ffrkaUhn9UY8XLxbyX5zsn9Du4UCPeWvFnVA8juxqooVDcvULotmL8tyPKvMT4XYfN",
  "key22": "3ss5JACNcsz4FbmJMiFcRs2U4xE5keqoBFp6JMFo2tkB34RARvMjhnsSiPtYyu5rUHV83F8n3GUxFUxN2U6PTP3d",
  "key23": "2SexJ5xoGj9diH1rYQbBzR6GocqHbcDK6fN1cznKFmUV6si6Y6Nx4CyUZx8yoYXjiWCwYK7uaSAm7zL3AJskz2Ek",
  "key24": "4hYYK33QhRREz37x1oX9yqYKRXiFw5DrC7RdXQis8KjxVDzP4KSxAEmc431XDNZGqkpWGBad72L7p7mpPUJ3qbGQ",
  "key25": "4Jods2xLEFkATH1UV2H1NYEF3NerXwoBQFL6JBYJJUAmyKFzceWYKnBSTPkT5mDvbLoZKcEoPqU35wSMVigdWF9m",
  "key26": "66NUYA2am3EiiZzW4v2zHyD7KuXJwWao2Qota5pDKqofkWomcmUwKDSyZJBSKhUEEukPxgZZwkmvpy9tn6hWYxcD",
  "key27": "39yXacUtakMFdTdH3Uiz4p85RxqX7oK8rrHmJbufd66PkhR2DevcSsGZqwBaMTDAWZ1dRyw8PDVoNr8METkZHqqw",
  "key28": "4x7kR99AXZsQv3Z1tuiteNdLUvbKLaJC2vshUc2C8fre5CHafxT4jmpEqMnegqtN3PLMfCdRRzLdDieZ4gEbvf59",
  "key29": "4zQTwuQ3Tha3RsfUKopBAWZoMprgHmoHGNEVdprsd3soj3LUFSvftvR9gZLKBWbnAcsxGMrBh34YubpGT9zUZVMK",
  "key30": "2t9Q2E8BGrzcev39ctzFejeP7Ha7VEfEbyqpQiDXf5y3xy3JtueDCYyxJBs8tBx98AQA53TH68SQ773585rxbfhe",
  "key31": "66ZC8NjhtABio3Xrz2dD2NcqyoBpJE6S8wmwmDfsoFBMfa2n6bDG2sc7yv3fZUJjAw38KUoZb88b7FUMPu6Nhm5",
  "key32": "3ssSDkQvZsrZyjramKLRkBJZiB6Z4wskQXDsNqxBbzKWdFmx8sEjMu9ChrFnTFHVnN9M6ATpNevhqgBvh5r9ZWxV"
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
