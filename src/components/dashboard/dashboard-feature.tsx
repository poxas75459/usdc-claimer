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
    "3Ldo52MK8kcoWzYEaDUPNVcdp9e3yb6n14H6tYt8WTBHPcGjg9Xg1GKSBkug7a3Q15GbVZN2JwKzfM75SPJYRtVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BHLPjmpbW9JNH1xWjHj1gUKb2iXGqCGqx45ULSwQ3jVJk8BML3D3YpYJ5ZQaX3hgUrb3RscM9L4xj7tbWg2jLMe",
  "key1": "2gdCMyQhatZXWdbjcWJp6d4cbn1KZxKiTTyJL6K7eWhLBAKxV5cdAUwwaKdxGSU9X1VL7axUXUy9ghL2vKB6GAB9",
  "key2": "2Pc9qkTisHNk95N9v8nGsQRxhxDvMkUYes397nXtpVqrW7WRVkKiDPtpFWULZHygmDbSZfE7jYNZh4epdV7YvJgK",
  "key3": "5LLwKUMBhezB1V1oR71wsGmanY7v2fqWEs7xJpz4CnFRgu7FH1cq8SNjrVx5dUS35VXCEp376PGUvoe7EVeeKWVt",
  "key4": "5ob2k2bH54ekv3bS2d9nNHAUd6mCYonJKdF8HaA9HGUu3kXNZDQKZphct8q4f4dZa5cSTrsJd8Gih7vQrUKW3Y2V",
  "key5": "e8fMGEcqFrkyvVsC4mK7hYKhdgeFnT5yLSteXcyeospnbQ7N8ATszonXNhCccNTjivf1gM1eHEwFy9oGWq2HJjf",
  "key6": "5vdKeFsHr8SURuZDArE69daQRsyYWsTHoFxwVZbiuA59WhQEka4AxsCqzhBWMKpAuKz8YUESEWRobU6DRpJAwCqM",
  "key7": "3RdtzTcZabpwQrt3Fa7p98zixfMoP3f6rkmppPhWqQdHdJACWh9eeBgwMPuGko8Xd6pSA7zz9f2vyXx8iCrpeSJP",
  "key8": "4WVFjRvs19M3ewQhEKw5oHEh2PJ4nUMkRiXzo7Rsvg2xXr2ZUrmjeo42uSenCLCimcwvzfepqcmyty9NmRgZBH3J",
  "key9": "ebiio3JnGNYBKxkoH8FifFcesh1cZLkp5sF8c1WoWGQUUmah9Cj31gcboMQSjm128JBn2GDq2yKnNvHf2NU9sgD",
  "key10": "2G4hk1so2WVggxnwKYguqbMtTiXNHcWaen3ksX64ZzoJTrHaQc9m42qHKV9c7qJ1v8y2Fjxq3joDGFNYCofeqkaN",
  "key11": "26Z6Jzw4NdKHrYGsDP9AkLvi8YPnP998zXHGqvAV4N5APHe658bpJ2qF9cgmDWBvekMgJh1d9u3u8VThDyaTYCXA",
  "key12": "5M3KpzCZNKbZpDXGUo78H3Wxx7TjTxp3NUCh8pw5b6RsQEzUtDBT1DiPTL6NHupN26MgzoRgJc3tJ9Mb5AFBQCD7",
  "key13": "4PkXWp6VxYiByVagwBnJyhNRm8kpoAZMoDqbGMpcskZZCFiGZzkr1ZrV2bfLgPjQi3bMVcQvJbimkB7BJ3qbR94d",
  "key14": "5ALvK1S5hkC3HVW9e9UL5B1Trzi9wvhgM3fq3hEftWqWUY8UzhrscDaNLXCv9j26B74FXR2oyo8RejY9ZXQAR2Hn",
  "key15": "3RDJDcubSpQfDC2LxNGQzK4JbyqfGLFRNkcgkxxYXaFwUpAmBxj6KNQCTvea6aqsyQbAWWGgd24S9jhSyRQYsFZe",
  "key16": "2pJwSZRqctysPeg33TxpZx7EQCsusTSZA5jMg3QhbbARKWQwReJi1553uZWoe75qA56SasxzisgiEFsCnLGZgzz7",
  "key17": "5iLnU3tC8QCVoFrLW3oa1C9JrRaz2m997T7sKZ4s1aUTcw3EXK1RzeHogyVnDgTgbFysgC8xDFznteHaVPnNMd3T",
  "key18": "5wtUM248um8iGRLPxxCX4KeHnMmXwFVx2jChNBDNPL5zm8kFfTag36K29jVpcWQzEu7S3rVFZ43Sfe7eReRcC4h3",
  "key19": "4ZQYJECcFYbzzKavNxztSSe5E3fUPvt6Yn5ybpfyWyWwjdXq2tgSc78t9wN3SPFAdQTSC1fnhiEvjoEaVzm4vcBn",
  "key20": "2MbtzrokmVvDr5CuiutAi17qRz3SpNpEfvhdZ574jeghpZNCLWodpFN1d1Eq4LqrkXCFF9juNwVZJVkLxWMqGBRN",
  "key21": "tK2E6FfkneMVkXoiGtPHPjyepsYpKkudugnKVzL4NM7vRz4EefY71QXBseoz2kNBnZwfcyupHFiDR8QYcuipuFv",
  "key22": "46X3om1hkTbMvwrhcPu7pKcWiPRgLkgCXdGesffAd7YjsekzCVdanEDizE8F4PTm8TZBniVkJ9bgdaXW1v3KwsEr",
  "key23": "45u5r9sNozvudiniSnPTrxbjAdUUWAHkoiCuyPwNvcXvHqdAD7R5NcFcnFUWJCNFxNdu8fp9f5zTCBp42CDmXdWk",
  "key24": "4Eo1UZoe2gnm5Gw3NXj53TXGG6HT5h6qtiueEBcTQF7di2UWSGjELajicinXgLbUrWnHzQvjFoDC3XLPVnqn3jT4",
  "key25": "3sRmAgvTkcYLHHs2akewNoWxTNrsNSSXYLoqMNhe3rcSGSTjs4UvmqwyAsTD8Pyy8sjTw4PjrrUTtEcfr9tfq9YH",
  "key26": "4qxbmKAHfWY6eKAny5gVUpvJRFnYoxYh3m72oa2iYKZbmcMsFqiHZRm9nEzpVZEZPtwJRzZ1URvDjCZFnyLU6uCT",
  "key27": "3YSDJRCSLTvZq8njY3ADS2KNWKBPNmN28Jdv4rXBmpJtKGZDPTxx23AKLDKkpbrEZduaQ3RGD7v6u9W3twhDeTMH"
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
