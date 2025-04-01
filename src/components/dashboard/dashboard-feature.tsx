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
    "jCJyLWTKBvp636XpMV5bwMF6pqtjg1ewWJwvNB5ASWctPpGCsmRHcfBGcVV4ghZL15WReixUDUuyCEqajznNd37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9eEGMKTv3XkDCWKZcMUwNKQ1HAJwwyD72HL8hRDypofp2jvxVM7QmaAM5QcpNbW5AaKB1jTahtsydq2Ja3q8nv",
  "key1": "5gmiEqh3jPXfV7A9uMZALpgFBT9aQjitvKpnA4DFQK1DVPYqaSUDyLGFJKKwqKHxWLZYSWSW1MLPnqB7GW88kq8Q",
  "key2": "55XSgwdD7TexXJ9TbnD6AB58rzkFpwPFriwob4k7RZVHsqhq66xXzMGQsnem13AHvz2hos8mAtJXKtgKwdAydMBN",
  "key3": "2pgaGEBtBGosJnnG4hSA6TEyXFiaNRbpRavbgZxWnNT7EiwVGkGFK2fymWcErprRdZpGdJBLfrNYRFuQQzHnTmo2",
  "key4": "t3V4J9ifzu5aTrWQXjg4wqZMfcPejf5oquThcpWt2HLK3dfdJiotFZbBcb6mNTptBbmPmnuFrKnWTUewqGeXq9x",
  "key5": "4dMpYA4yfSYgipPvuyXPte7MCWFeHiaqxThmhdmkDNt9uwYE5My4JX9wNXpNebQSdgu1SjDxFuy8B1TS2zf5GypA",
  "key6": "2YkmDs2a6L8T5iA9JKVhbopZaZhWk3WDZWWYdTm4f5hUbgRMkNr9Gyf7yJ9NsPGA9fXxR8kpypRAewg68fn5naKk",
  "key7": "3FihSSb39htbc3TqBa3zR2mfdW7aR2EY6KCfkaWQZZFX8JZuaxXvydYEQfi2w4Gq6dFYUU7fGqyw97NX32BujgZQ",
  "key8": "5sKkRojiyMBjJahHUXY5WwSEBNdD2YbrkyUoVAX33RAS1xCp9RCzV44CDhQR3DqBjtrDTKgg4uubk7zzRsC7tcrm",
  "key9": "3HCx2SZ9K9GSNhTdQU5MqLn6iyoCVj2L3FxSowveJzZGcCCEo46JwojNprMXwnES287FWDXjAsUa3rv34r33r9LS",
  "key10": "4jcAqf2pLQQWUGcmxH9jpzdgBg7LwgYxFo7JTbesqUHGQdXQoQVt1DLut9NEjjejiQ6eBsz4avq6ncTDow4XnWxn",
  "key11": "5evJg2m4THN61dvSDoQq2Q3sH3WgD2CZ1KDH4sVoqA1bYkKPHdGUmGPNAGT9m7BubMiRpXRBAMnmJdbra5KLNcvx",
  "key12": "5bdYgp9VbfykCs3UMTMn8B6CKL7nK663K1aK3sVRcSVpRF6GpSCCCNekZS2k7zKyucWXQZaCkXbCJqHQEbHE6aFX",
  "key13": "2UwmLUtK2QK2WztChNMUCaKkkxH4sQan4JQV1fqEYJJ5ZAfhdjoYERCaRx7KkEDBziWkvfzqzhJvwuuwwENKhA17",
  "key14": "399S3WZC2pXXaLQGVBbW4MeMnjwZc9UGHkYSNKynnwyG2P4jZWzioumyfAuq5dmSCG8Xaaoie3SkshwG88Mq4nhs",
  "key15": "3DunJbVFtherymhPayZSHjykuUpscibENVwCPq8DDgxKHMRrieqjMHXphWvoxBQeMSwvT6FhZh3TEyEM88MXDejw",
  "key16": "3EzhZ4NznQMdEQ9K5u6AJ9zws8goNcrPCUoYpABhGcqXmEiStVr2gFeF5WQBaQsnEnuDBWjA71b4hXtWgeKWxQLW",
  "key17": "oF3oTkSKA9t53jqYWMavxShdRWNoBK1V3xKfBx3qdaHCMaqNVRKPoDqukUtd5pMAaC59g3VVanBNn7yJqsyW8Xf",
  "key18": "2tAPWVXiMT4vksptuYJBGHM2SF7QXLksFHAEs9S7FaJsDxZDGQXF9EFWo8wNvFqkeK3ALbTA4DfFzboZPiWz7DYR",
  "key19": "5KHUp9GtGLDA9QX2zdtLrAa7yKe8zYR3awFTbf7q9UjN9iPBrEBuC6wTKieCpDAjSXKtGDZFXVkHanbaiufSL1op",
  "key20": "3kFN9oppFYZqthh4W8bU76uekmivjvSAnptXpzyezip2bh9swQNqV4tdHNEX54VhgMyeBCUXZgzuiW8zry2c2Y4H",
  "key21": "NHsjQbKe33aT8KrnBVh8Vf8LRumspY1xR41ruvLDwfgDBKdYR1eSpLBK7saTYjW2SD4s4HUUaZrnmoGnikM2X5X",
  "key22": "5AAwEZGriKAYaYYcA8kh8bFWD5AAyAWUpbQsJQgLjUWrRg2bjSBPCUQ8dhnGAy6SPURdDgnGwBfyfyisNvBg8kVJ",
  "key23": "4XwKsgQTafMuy9qxWz7izavrRU8HKeyiY3hX7QXCTjZy8S3xgtXVn1DnAuox98xD7ovJYqjPr7tJ2iFGWAoViAMk",
  "key24": "5rmskR2QiECcdtdEyxRP9RxnSbxfQK6WpizkQ54PR6fgyikHK1XWD3zFeetPkv3q194uz5YmJMDS1Sv8uJVZZh4e",
  "key25": "4AutZgQeaFY52CYr4r1yhBaatewkaYc34xNNNwLHWKXDE9yBRCJ3F5mfLNnP7Ba3zgiN3Wb2Ta2x6r6V3hAbn3gD",
  "key26": "41FzkYNWHtoBMFJjq7qbqCL7QWGvTLYio8sA5WJvK7sxTqkMyuB1p73td8A8hFCSfCH8sVHuZQLtJaimxKmCW8jw"
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
