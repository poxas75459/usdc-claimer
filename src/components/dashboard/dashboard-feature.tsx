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
    "55DpBg3Ww972b1h7RVSYbzRRz9WtuS5YH9NZZSxbX53R81n9xVGq8KMDTceGufPUNRnxuRRHxrDZ7AnRxhBMqQVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLfN9dEziDtxGgVEBZqmdESiabensXW6zHHe8pfX7ef1AGCFJygXCcaVuWyqSBWkfvfLBFAsLEua7G2iPNifFMN",
  "key1": "uGcPCvjLmwqLisgmpCPjS6bWQjWvBUtbCQ9QgKiHN8F56qGF2rWxXfDg7Co7URZNhZvXh5FaKQZYUnuZ6f4qcUw",
  "key2": "EZd18gXgwQuvhCQZehabhfFcJUhhTHca4sAhZYRijaxZk24UCGoNLryrhz8sg11XAiW9pTd1gW9uaj3GU6j1RxG",
  "key3": "2GseQdcNLyjyqMfr8Jzf1JtaD646JBiEnSQS8ziBdgXfTzf9Js7WpVV2DBkgEugkxx5xeTUVjmP8FmjguDZcaQ3c",
  "key4": "4YLhT11VYwDTu2wVrHPcNrdLKQFFSZ5vkjDq4wwpWgVxYfPJZNyv17nKjNrYc6duiv4TinHDRATGh3y2Dj9gUjPt",
  "key5": "XkaqPyj62UpZBnJRxLFEL9zvdDHiDkch6rtSiKkRK8UWLJy4cSJZPAp3gJ2uTtixa9dvBiEWiBrcWUkDaSdbuaT",
  "key6": "59ck6MK5VJWzztKYBG9joy52VHK2FgDZoYe3NYe4XanddYfejQtgU9UZN3hXEpVmF1ZgvqH2eP2K9UPcbuJyGFf9",
  "key7": "3iYXfqbDrQe9557NLB5DjJXCdGUJM5AHpq5Mra5fqDYDTDGkzQkVsADMuSBXfMfhMpvKa49RdBDnp9ztYCozFEza",
  "key8": "4HcV7z1nHsdZKPGNZzQ1jfRD1qb1TuiMv4jUdYeX2SXwnYVxme518NrfbWTyiKzyRzPLcQUSqZ8e4rkwZypTc6wc",
  "key9": "2XGRJM6ntkjKvQub6GMkoYQsuJLvdgLvpZ4ZGexdeyM9UsNY5ERWt48BpkYwf9QEb25wUs24acpttsmZcmu7uiZ6",
  "key10": "46uPJpgidvpWzXskzczLkZ7u883sg7DQqqY4CH9nRHZNArEfDu1idog5DfPfepZ6uJKwGcCGStpMV5FS8JytZk4y",
  "key11": "5PzLER7NrGTcPxacNVjDm8tomX7eeDiPNN8yHVxdXNtGg85441sZfRMEmXGGmF2i3K2z3wVhAQZt7CLbmBNxKRDj",
  "key12": "Hph5zfwzEXS3XfCbZ1jUCM9p7bRUXCnuB1XBhi9d2hG6SifwpR8RaQZo487HwrEuh2NjDaPdnrZ7Vv7zHWG3e49",
  "key13": "zLMignNWVrNVBMMNRffrRuN74pnVtJauxKNeK5v27WWoExcjHET281eK2fQxXvU34qpCesp8FPpP5pbqFwHEKwJ",
  "key14": "3s6gVoAHAZNX4TyoM2AVwRFAspyt4BnTT12C17Z9efKJiwANxexaiN2XTYvtf6KqDgDnhQsikdC19wqkTkLLCY93",
  "key15": "5dALsS5qiTrK5rogNDunY7S7oDy8vDqojNHDvgJKEzmYrhKfb83ooiUjLxRPWYxQzoTBdL37h7C8mXf6myGrMn4z",
  "key16": "4qKt123rydEQZBRm4McmHnFD2UkRMMmiuYsaz4rTSajXMs9a4bKT5YVJSZue5R42xKVzs6BgCTDZuUtSHUxgv6QP",
  "key17": "KkWVSJpL8ASuPNUrkd26trzu8iKCQ669ZU98ajFRUs5BvAHh3ZLZfWPbSom4jGygrCyRykEud8Nori5MiywxLX9",
  "key18": "5hmn6oTYMM9EMu1tWLsRDvAyTUU3s8qhr999s94LJLiha6gppVb3xFGdCLjaRcjLWqfSiDmAcWYBa3gLqdyRxY38",
  "key19": "2R3KaPfvHH5Ko4sKULtq9Bu8pv7PdgEQMbKYHRARpGSjkTmW6LVGXcXHAFTQyQmLsiaZjScNfJrizLDMC8vQk9GN",
  "key20": "4bdCF3qqtdHgvCZc3K57ZtGesxDF1sjTEEa2Yw7tZzvHTRtfzdgXCPDeoVgcC98gzjgeZbjBzwi5VhXC5BbSqRsC",
  "key21": "24ARKfZGRaXYKbtMXmTL53mvbkN37Tn4HBDbtG7XGo2dGisxt1bv5AwsiFUQg1cApoHrzgeEfJbmj2pcAXugSTAs",
  "key22": "2TFPWBu5y9yw3oiiSzcX9a3s6T63Kdhkn1HF4NrtLTtmfgva5Hph9DwE4zWKjgwNRGighub9sA6WpmCkv28UaFAS",
  "key23": "5MiqpW4qyTWv77CCs4r34tJamL8TL9NnuLJvUbwebPkPVhnus4XWDH9Yepwc7Cjgsdc76hvtSPed1WoUAh7myDfx",
  "key24": "PpQHEYXBMzzdzprc77kHp9cfbW4HXYvdo3j5d4XgPgmvkd7KH8xHJ3QHZkMKoqBvN9oVCfenLVp88WiuDEqJVH9",
  "key25": "4Uu3xeyYqQBoWHHCkDhsvbtfgnMDze5cRFFaih77wFW6tFCc55epTByM1Ljmtodks7ivwaQ3VagSJ9wbZpDkf3Rj",
  "key26": "4zwE64L9D9At1FchMZotgzjxgcsTesHACtCCzD2NVwxGktX6sW1eYzXchmFBjEqbSEfg5njLYFHdFMFifSmxvHXH",
  "key27": "2JizGkBTdVkwSLnGPPeiqcXbHJbpMfCCLH9kc4H8SzcJSTLsx5Yyd5gDXj1JiFnF88GAorGiot9XJS3rs7X4ny15",
  "key28": "d5UTgvvTqA83VEbRSHkSSsgUMzpSRd4H96G6iPu8VGfSVvfWT1TcU5S2F9XAeiMMRbEf5eC2QocWiiGePGWaoJN",
  "key29": "5chpBozvs19ynWhGqBkhkrAzgB6NLccTfjZ2LStkk3M5QZGzqafsgvwUQDxo57A6o3BtQy5fXuBw6iDYmvqtMwyZ",
  "key30": "2j7Ks4sTE4NE8osWPnSiGKErqm3pKx6jMdnUZWYREdQ8WDSDEYEALQTU8Gs8phYew9ygXmBDi3RGHqu1SLeNgn1E",
  "key31": "47EZC2rcGcuLuTD5JvfxUHLsFemR921Z4ijRYPZEuNuGJqhTqoFPjbdEreqz2Gw6QDmmZSuPV2PQ8WCqNVvBS3FU"
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
