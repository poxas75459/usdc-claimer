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
    "7J131M5M18Zw2B2kZdd3GjZoDTG4kgxuRAGtWbwso1TTE4GDeizyoVFbDcyLffURwegMps4rQSW8xurVpCE8hfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMhWTyQKwjKWHAQhpGDG4BErTaNhpJB2qDXo2AkSgQQRem5igUH2PYwFkcWja2WxDbeUcFNEkk8c5yqfwjZYLof",
  "key1": "5yJ6cawQCWg2k1hUyXbMe8qFAWLNQWG4CDMJCte3mJ9E2Csnn14NJUs1JQifWmedwp4sK8iohgdNPaRMhmW6p6Q8",
  "key2": "5No4DFLt9RMK2MN2E7sXTWjP1AqToQh9ir2ndrYBkoP77bsVGReFdppgESdZED4wcnYn14jRambDL14zkzaP9PWy",
  "key3": "73xLtn1RhpSz83DuZAsGeKe9K8LRTvcqX7ZfkP4DsG9RE7sV1goX9tjcthwVMeXWZqTvDGmbCLEZL5D3yoriuKg",
  "key4": "c3SLLoMosQU61kqp2vLJLMfGprGLNrKTf6NPUqFStcijm3tkhZVcrNH8yqFRbT1V83yNHL7aUm9q5hpktkNoDVo",
  "key5": "FMuFc1Taef67H4wr8XpLjC5PPocwmDqCVmBKSCMS4cfLemBMuQHWRrRXgC59ain9RvthE16XcazC6qAk1iwzr7e",
  "key6": "w2h7tdap7szPfMv18QCmyj56cGcvGAGCvkJSgZ4VcRCc1H1gQvwcHiT2Rvpk1gPGNRbXk8KQfGthx6si2cEeVdo",
  "key7": "5rqT9CVfew39VxupBoySWUWL2Yft35MnLK5DwPriBty742WBuaWFGiD5KjVjDvXVaJGzcLA4Rc13yuwbhXqoX4MN",
  "key8": "SrYHYXYsetjtM7L8VkwRrW8BnpG6V6xXB5hwCuKsZbu6mgwQ1RDpfXAXbZwJXJQBbNN2LQNUYx13NuddYqp8W6A",
  "key9": "4cm2NVCdQSHwXK6pJnGzMPN2muUE8HbeSwr16FFXVxHRh4Ejt3tFgHRRgurPdZKaWthPRJRnBc6MpAh7VgeBJ63e",
  "key10": "5uqn1WnA3fwRQJXkhCrrkoGMvuSfs4n3YpiXL1AWrXufdzGiUu3KGXdfcRsU5qFFo9KnVBhgbMuBwfXVhu3jL6Zb",
  "key11": "Ngngd2BymRPzhDFtWY5vSQDnPNLGCzEUd2p3mA6LDoLJ4xQy3u77T5TU8Q1aSA9A6yvq1Rzigh1wBSm65ydPd4E",
  "key12": "4fAjktC3CsxX46JFn1xZQjn62GDajHEoUs2N4w7cNHKp23fXkf34Fet2BsRZZ1kXNJPztvG4fBgjKMeP7qHZZVKa",
  "key13": "RC9jeq7hLcbhJ1wG3mwg1mUYPZYtE8Qr66X2fpm9KvDabULYEAUmcFzBYy9qyNFgpJQHS3WYVRBFKNUzeC9hDUE",
  "key14": "nULfZpbX5zDFzauiv2YngZRh1K5TzcDpdDuxhFfaRrbdXDGiKRimUXK64cnvE1KkhazgAHHcaYWEYR5aAMKmhax",
  "key15": "5pyKg55oHPJkRDJ6a89BF2oHPLwX7ajafuRGGM6pZQg4KYZ8dhdcxCsMztZegkRSQB6HLduifGHRKBPuiVGiwpqn",
  "key16": "4BWFxtUbWBqZBdtnjTjTECGaoExVS3AKNUanCMQTvBKVkKAV6aokcAbSXTSWEsR21NsXGQxeJSBtbLqezFpNaSvs",
  "key17": "37CGDvtAfCyVaoQNtFquKxjFCL1oHpzcdEEhi8LwgBxEyMr5Fe7BiSNaqHSvLnNsBgXSj6Qhr1tBesJXoK6D83ce",
  "key18": "37p69BJYsZMd4qq7i2GSvWvZjdPLoWQxeHGFSEVRK6GGpYhLXWhywThK4fFHe2g7C6Kh5MQB114WzK8RxCduT3xf",
  "key19": "4L8gBGtgk9DczRZRfry2eHcowdV3ac13Gs9anpF9hbBBRrxR81wgpsenYzN7sbdbToPQAfk2Fq5Tzc4zStKMD1XY",
  "key20": "4uUvJdDRtUefpG3w2fgAc5qpaUujaimnnEBV7DhFeJngx9R9QQEH1sVUMZvYLoTXVK48XwqjZxLi7uBEu5yC67Qm",
  "key21": "2nQgxrp5XFpJobGe9jutsQr3rnCR4J7BNkind9F82BkV7bVgUgas8vEBf6tJtCqYYQsuCcM33XEoJEa2742TefHj",
  "key22": "4cQ7cMqYBL3XWWoXm2vsVsRRH6bzzL4A7B3fsjsfhT9VW4WqUyVWNcPcH3vDp4kHuUGpHGctbThjgP2Ayu71sKDZ",
  "key23": "35XgwS6cjh5rRx5L1QBRngErftZ9vvsPv9TsADap8GtLjmz4cKuYJ3p1oK9QQa4M1FuN4bS6DvL3GJjh2QmHg9b7",
  "key24": "66YfPYGyvvhpE8SzpXZyZbG4pNFkemLWUwuy2wLvrUboDtxwwkzBe65WhqAUGXNF56HK9nMWFhyWzp1jg4TwT6yw",
  "key25": "MchnVuh5wnqPxgvAZZSmkaDkecVjb4Sbqa5fhy2sfX4kjEE2Cdzp9PzfmUGWD9HpoZBoQnq2cpDq2Lu2SBtmXya",
  "key26": "5QPAnF4haXrBUMZJSDTdyba6xPP6MuiYwqtfnA3G4XM9Wk6hQmTT4LawaN2NYNoR6iGEKcnj2etwwkqNAnrHeZom"
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
