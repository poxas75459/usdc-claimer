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
    "39pAcNiARJFPuQAHrhcoj6JwUEQpmBkDYmnZLSThPrMt81oUdC3uJrV2zh64peS7xbpgYSZHpkGahdLQ8jAobMX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZRnRDUPDxkKraxsvi6WYXi3Yv9Qxmw4uWREN4AoyHoYq9wnYcAc34fjDTeeUx4Zq5iDFyvaRQjSNDjE39WLeKf",
  "key1": "561iLTwCcW1xXFpVbPshiHdJ9tGczRDk4SiaVwjJxRh1HYTtWipA2FTgA5ysZmRf667JLtNiMMNZEJmfs4fzYfDg",
  "key2": "4oLyAPv9sGRoM8zuVVUv9FeazGLnXc9RF8KoQHvKYxBZ4RA4uYeKk9Lod2SBD9RzwJyBrMmnVRaYW1r9cx9aWc7",
  "key3": "ykq9xaNx2r4Tg3r4MAauDRdtW9Jy1z6Fvtu8GZzwdvBsf1Kot9oBkiJFVQiZ9fgwobDkj3epJ1iWsQY7m1J3LbM",
  "key4": "424rakURw968Y4KWZBtxLreyKFdgAjbSBnhTXVVC63Q7zSq8GKH8UdtW9wGbCLcF7n3mNHNggqwXkZEepHpxYJyu",
  "key5": "5SaT6qoWF1o9Lhqu5riGp8rDfYarAM7cvScQyYmUdFffNFksWQvza1uLCyPhuwhhZ6D2MovFUW2EnFgg75f1qSzy",
  "key6": "62TwheZ3VQfLcM3isrfeAAH3QBk8cmyrd2hCZ9SqaNfjiPTowbdkSvhpzNjJhkpp6YKkqAueo9F5i3pwJwvRbyWG",
  "key7": "5DgUNmKz9vjoPJsSruMn3uuco1t2QtZZCom3JSjfZ6o5xkyMzKVFcHUQxx6KRrwnjtiKXRYFu1ntaweJEHMPVU6y",
  "key8": "2VgT6k9XL3pJkzHjMmaYWdRWwQo2DbsdTSm1VJYfzsdyZcPWuwKMEVvtHhc13ZbXWbqM165TytqX8RjJEbxhvtqx",
  "key9": "3q9eken4YSQ6FAoXny3degFvm8AXEk4dDMgMtUXAfAeJ3aAtd21wTqmGtAT2UweARQdvXiWgGsnwq4k9UiohsMyR",
  "key10": "3kHxmtt8bwbaVWddr4UZmUZ1arrWQpdcar7ZGpfymNyFhgAtqMNNQW1DtwfMHuNtrd5uuzYKBC28D3GXUvPMPy2G",
  "key11": "5tgTc8PDVkryDfPVpcVoUdp9SAvCVU7t1ppmDhQ1P1k45xFkiW2htmDiNhR1Bdqmq1M75ffS9ei2DqCVqqa6aVtN",
  "key12": "BkKKppVrLHtgLEpBvpYBcnmiqqfVbLnGcszjyYAQt9Rui3KpKgjz5fUBF3TC4YmfQsn4dSBhvXUFGsi7hMv3oN2",
  "key13": "4nFAopqjMSJCiZ3yJuAna8aPpdK7SjMe2JVgRuZN1jqYBjCN8qRoXK7yjmNfN46EW82Q3uzq4yN9MqnUwSbyFJb4",
  "key14": "2WhxW63Bwn5N8cQk9mTMxe7vbMrd4qcKbnZE5M8DHwrBqeahrD7TBqMS9cjkVCqeXBLuuhyURrgfoBaePTRT5sKx",
  "key15": "41ooHoZrQKcXwb6vF4wLraSu4zQgQXF9D9DwfVKNube1yMnFuJh6aKX8QJA7iTAHWjqcb58fZGPgXkBus3KqnjUd",
  "key16": "3DFZzXGJXB2WWcnhPygenYiCf1JCUNBAiWGaW4QCSqKUctKwe7mdCACUHGJXHBKnHGMZpJGMv6YKhSxRCSmU4Nru",
  "key17": "4wzJvaCRwXkHJ6dBcEmFkjivEuEqsXMfxL3dAR6DNqLm1R2trtD6gGHf1brN3Js82mtEkozgXBdi2UbCU3vege3D",
  "key18": "2Fs9WtoMJAWAGwRMJ5eNswgz7scDtv4ubNCHWsJN3mZw62XQ5yVK5EhskoZwnk5dGKEtAPm3guJFc9oVTjwxx9EE",
  "key19": "2xgYn4wJZZzbPcKo3LS1WUrUaMkZwpcTVBJdVU7MNaBPZySnJ8RTCJiCDYKMK49LCH7hQneFbGHsCF7mDg98nu4a",
  "key20": "2S85sxkovsRUMxziGCnuCJsWK2NUHfVN5fXvFwic94ULFtbaaGmK8K7uPgdxgG8weXyEPdRydzaxizZvFJXQFY3F",
  "key21": "2QRie4NKymg2hzfqiYXTPKiy5v6e1QcXyiizombQUTdgJ7QNAEud3vv1HsGY4yukfq9EKgcGTmqfgTuiAE6828bv",
  "key22": "2YWe2t8cgTR2oAzoY5oE78J1zWLiTAYiqvc5wvnVXW6offtpyEWLnEgyxykKeekTtFgCoYjBp5GQhJnbGWSQNuLA",
  "key23": "63K6DLeYkoqvjybofnWVQfBDYim2m3ZwLVQ9vTM9cuUQadz3jF93mzy8RXjKsJokVP4ECLLnDPD8CYKKPUVCMN5L",
  "key24": "LjRcrGSdSzo7htasSEYUXRZErHBA7j9gUXxujbDWDU1GawN7JCfJFmgfkWAupD6kUdBPc1Pz1HdiMivX4ugASK5",
  "key25": "56w5PoN7y3GvaHBEep384GczV1rGmvNiwqiNnTREmZDUf3xqVVupAE1CxziwLLkTwoK1sv2Kdv2ua6fZzjAYLzYe",
  "key26": "5wi7pTqy9w5miB7hAito74e2XfbsmgMwAsZxzxpRzbBprf75yPkXNDtWJLDCNn84opk7Kefyxpamx6e1JfnmJTPQ",
  "key27": "BpaNgxLBwJR6LrmEYwX36FBBw3BUpDdZ2c7rfgAdFyJ79cUXeL5yuN6sJq2qd6EtXhFPv2q9YCaUWhjTj1etSXz",
  "key28": "JNbzmoTQrC9xfHbUqnMnUYTwxnmy9JYVpg7JrusBCYrvqbD7fXN1qj1ihzKjsz6TwXZnPzDEFrDU1xoUy2vNeTm",
  "key29": "GCaLytMRipUPkSMjawxHumj7Bz8CxKRoHZ8hgE8ovAbob1ng7QyEAJZtwH2p8UNMQTzpXNKmwpqAkbgnr826tX7",
  "key30": "QN8gS5qjdbxGGkFpGG2dev6rHZpLu2uVeSXp7Gg9XzcKKia9aYX2GrAKCN4SCxLPMQEHWwpiauxdYYyVh7bdr3X",
  "key31": "4uwwQQzsWvAd6y6we9hpTxnfuV8bHh1GJFJa2oqpCGwrBAgXKQ2rKbwuxFUz5qqk6Ajmn24Lt7PAwjs2CkMo5yo9",
  "key32": "4aBcqdTbuBvGfbPt66PP4skccX16XYp9AHMcJq55dYC5gTcoeEQ25Fh5F27pj5MAURG3XrHLYkSDAbhzhEH9iKb7",
  "key33": "5dxSf9fwLJLbcLnW6whTVDhSFiqy1pkvv7X81kzBnranqneTmumq5ADkjavXLesAfYRuqtLyGGWFt3Q5Pe2N2AWQ",
  "key34": "52bTirhbTfcgaDo793g7eK4GyW5hAMm8jVwBmB5zE3GrgzkdPGZabWAEqYnxqEmvULZkeQQTwioKb9NS8pHdUtjz",
  "key35": "Jsvvshm8BkK7ZGSv6BMNBLnAkXRV9jAxtHw9Wvee96JRYy3qKQGzGQNwggpPNvGve4iiiVgzDHDvjtND7PTn1LJ",
  "key36": "5PbtenXDNvcAfK41aQ7t1yCw5CFT2WABag88dzDEYkSSmrqTjyqm3ZQTeB9xPWz39Lh9f9pFiST6ktPUNXGrcrwd",
  "key37": "t11YUXg1xiru1rDiG6JSR36KWhAA4yDsCCLy6SpN6QrB2VrkUrMX4SkPa3CU2JAmd4BSQpaPDFrSmLoCCPo4Q8M",
  "key38": "2GQEgUZM2yUZtCSqauWWXCGtAunWKHE5FFUT6V4p85BbefPPGBwQJ1DiU5wD9DWNwsyECViC8Z5WxtmfmwsEQXRX",
  "key39": "Sswo2xFxwMboWNu7XtHCdqdTpBafkyBBbCxJrMxLSifxdyE5akMD4jt74t5v4XxAevMFGXu7f1ByfrRzaRT97KM"
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
