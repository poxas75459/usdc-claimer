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
    "5cMUi4cfGbwdi3wuxSA9Z7jXfoe23MVj4DRcL2k6rQ37PMH6a93gxL8Qf39VPZcUmq4Y7KRLMngnxdBX5LoKjpe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCNggCC1hmHzAtxaStXLD7J5tTc7GyRXpBYY36XSuTQs3n7fPs9w9gVviDzSvHRhVFE9aCAbwNqgNuCGSXVaRWu",
  "key1": "5LV593Bszp79SVm5pme4gF4bkD7A1ytJLBjTgMNX1YP33UCwfA2otzMvVDu3PLoWPBTJZAXEqzCEihfzmu7FeF97",
  "key2": "45jUQhqMiekMUGvKkDJFDQmUz2VCz8z2J8SXfmZkUfv9bbRjfnAsWKepc6ev9U3zzqz8f7pmtZ9wkzpkw1A62vSK",
  "key3": "54xhcFCau5knt28H7oD5VFqzcPYWgpRMvQfEB2NyYWc4Nh29gFHivvSAWbqZktnbJxqWCwvxJ1Ee7Eue9qGxv6hv",
  "key4": "4Mr98HEwyKDN3DmaALFTEQbqYWqLJ89xxdXjHVmAnRBcewyK3uaEY8XeE34XMcJLXAiR4didgAmbakzGXf3xKqv9",
  "key5": "4xcjoQYCzrsV3eTperK2QB6D9ujvMGcJkY8XCMJCvVxdoh4dxgQgBZLzhJPkNo2zV9LiXWsmumPetTkcAFZpr9Kw",
  "key6": "5Xby1pZUwXr5cWAHoKfXAMY6pJ141VP871JuNubUAzT18u9ZwmBoxqCY9GWXHsc4Uv2YGHeZmtvJLv4Sxos6dY89",
  "key7": "PAmjeoKrcLLyZkpnezVdPJCaayVcMf3qMhfyPdqhPewucf4ke8vvTrLHTGazkNofpQZe5fymsQsFHiLQrEGk2aZ",
  "key8": "3jF9LYezgG3tvjuLTkhabKQRfQJxfNMvhedRaEu7S72XT8sfQAxc4XPRt65qnMQfSeiVrDhyC2MBNvcW5U4n4GCT",
  "key9": "5V31YMzuBE3kBzHeJS57gWTHYwwxGy5W9sWAbhVGdaPMT1bXHSUaW4mv6gs8maBtLMVJQe6z7v8jebgBouBXnGc",
  "key10": "2hG4crF8DupNiaHZCZLRjssCvDPQGc5HAr1rfz8NhKCaa15TQDKTWXwi3LfNqWM45n8YdGjwRpBYqKppjWfV17QZ",
  "key11": "51DW6ysSwdHN1qWHsVbNhqwLLK9UD3zu5LB6WWQqgXbovmtiPtovLf6osUwU8uESbixegTTVqPwfAaKf7LrSEks",
  "key12": "5vHTWx7TRu854qc8rAm5KfiHBp36hS8HnwmXHsTpLL1YbawvorECF98g5so4HRAvjSNGWwGmaXoUAh25YkYag5Bv",
  "key13": "2e6Njm5qv1qr5g2fPPbDobg2CoA156zqRes4YHAv8Bs1at6YrYbF9PwTNgSahH1QXamaArvWe8WWMnNABYAbvV9S",
  "key14": "3Y9USpuFLTmkGsnebBva8T6JSCYzVAapA7WqXvhmHeb71JgT8AKA1HZJVXdGpwnaXYBDNZJJ1fdqGbueaFRwuXgW",
  "key15": "5tGt9HC7yRSgk3QpxsHb1KqV4s8PTJpHntAzTEDP1WseaMMHURDXnPHg2px8Grkz4GDgZnhtUFZQBpsw76TaKrmb",
  "key16": "2LYmYVicXNeY6bP9HuCUpMbGAFjj3Jco15g7DpM892yqXwQYr3GVFcyCnDigXHsRAfKQZBHFD8XASXZ6WxwD3tKU",
  "key17": "hXwK4a95zdg2EZdn19YWmz1qovz6SXLMrABqJSkLkZzTKJ5q5khrj3JtpsxmTjUxAxZfTBoPRXvyrjTLmFyNa1G",
  "key18": "4RGiCNkXGc88VHmaRRMxNZ8uVsBmmELGzmAqHtdxNBN8sjAwmbFCXDW8PYRBhA6d46Dij1GjWaXSiVeSBgyZsZBG",
  "key19": "4T71kUeRhevbwArzjzky9JBWw42J1tPcVwMt4QT8t4sHGthapduea8EhJEbiZJd6R7YxgzYSsAjx4jdDAipVYwpL",
  "key20": "3kG1Vpe4KLUeFBbMmGrbcaawgdtMXfPXosTaTj2SoZ7axHuVHDkE7TeeWoMZe9Wgu8D3KEPWRvCD3uMswpMaNQ4e",
  "key21": "3DharZrzo4WtcDyrz4RC8nrkAFHJQ1S4vgq1PnhoK26HWQzFdZEjvf8Y9hbEcEyeAySdrMGX2TKceTbtdp3CXs24",
  "key22": "ZZXGTcoaQNi8Ph5vHXgq122jRETc7JsswpMTBWHjReJf8wHQYh2QjxvZ3S4BprxdvkuhTQpghFSvpmzN2UNFPhj",
  "key23": "3EC2Ki3rC1XndaZ4QjPdW8n7XcN7gfPXQsqxMQCMyyWuYh1HX7ghnk7Y3SFx3743i56hiLp6RP5tvKdPRvtXU4LL",
  "key24": "z9nYjdr5CyA929rZ9QFXDgsCbESdKJK8LLqWAtciQCH9H1r9feBVSe3X3dRuQ5u3hjStfWsLWckz4im8dwUNvZT",
  "key25": "2ZmsFGKJjB7ieFJ2xHXrTyh9jqqbcVhCYkCJa8xtbKAU2kgTZrsVawHeN5QzHTpvyRwWBrnB5U18gpgKZ2w3ETe6",
  "key26": "3TTGEauZCFhoGt5rpnZ2QGizxp5hAP8mRaQEEdubpMsBwzMGzkriJmsoXTMnZCtXCSRR9FFnsZpZSJQbXBNNMT2z",
  "key27": "3xaaf3bXbvHdap4FHkRumYkTLQx3NUmDEiP1UFyEAWaAc7Wc9BQC7FY7HRma5ungXcS3BEb6CnuYb3tV8xVzXSTW",
  "key28": "3dk4LzTKFtSM3q1GNJrmzVM26myHmtur7mdo4VGEVAP4eots6DdB7Rm3fZmCZyBEFrqEe23p3KmxhcKp6Ju4t1Yr",
  "key29": "ape8ziGAEMUnQxgLRjAFPeZL1k5DfyWDDPbP2sifKRkUmN245MxRMxL399BhfRgdSneQPNM9NqCZWHgrTsKC4NN",
  "key30": "3QfpNuF6w9qjZiyrYcAwLVVv6CwSvEyqe7V3Wn47xjXiynJdyJjB93jLj3gNKdFf4HkudRSamqV9xFh2K6KgDNx9"
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
