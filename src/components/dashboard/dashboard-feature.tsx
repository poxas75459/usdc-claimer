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
    "5t7c9grwtqSrc7t8rogP5CLjYXUTBuNCZYRpCvwUv9ktHH4A89zgAxJvxDZ14oHKyGYs3ujNjmBz5TaEAwQiTkJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ee3TUF4CtTg47hFZncv2v4u2BgYUD7YBFMaAdKt7eaeD7YiTrU6ZpiLPCnHtdsNZZaXoetmk6AFAQFYExGW983",
  "key1": "uEcwp12iDK3nhNL6XCWrA5kmEEKPWXReFcMPNz9ahaPcFYCqowQMMrFz6vQpiTbvqYcPHye86yfEmGyd9AedaiX",
  "key2": "3Nc5v5zTNxnWLZ6mtELUpnvGoA3pn9AuSfe9bYLKhSXjAAjSSBMeEVd9LpaqSWjD7itKepk3c6KiBZnmU8ddPNBf",
  "key3": "4uxQXcpxnCMWy2pCEQYcx32KRTTL47S8hWa8GpxWVPMe6XNxD664kMGDN7Q7ZBwpaCdxNBW4MWFFYMRh5rjpSbVp",
  "key4": "26NyosGCoeLEbUEmwDgHe5QmN6cYvxTksJATjb1V9Jht6dMP8rWAcNc55uFy2rAasYtpVLz8JW7VU8rYZ87wkBvu",
  "key5": "5XN99gDqUTs1jvE7DWhRhuiP8p37jPavToifKJ8iNbXGxVwxCayBh2YKoKwN85edtRVgYhtBR3HfadqMCdc225T9",
  "key6": "3bfQUHB5DXJPgw1STBuQKtD1DxCXVF9m9ERAobqJFjcCdVivqqw5fhexhX2uShGfaZHPG6y7jsYEGySHqpebVYjm",
  "key7": "4GwaipyDCRQYuaZfdpdHn8ChANqVMDPXaaivjZjHZsnkiR5Kua8eta3Az4tpsMnJUpuowyXUYxxSCvfuNn1Szzb6",
  "key8": "64ykYx3qF1pMHhmaHrHeuvkKkAu1yTV3qyoeftZy3yvG4v64t1ixwc9UsAoTexQxnS5kMMiBPeDzfRJdQRDCZm9f",
  "key9": "4mVPEdavuvxY31QsPaQj8eicHfaeVpQa2pLAdDpMCxqsmP3Ykcc3T5J4mG77shgEtEEMpMUPnbbxr8C96pvRmDnw",
  "key10": "JDzEfNrtJZ6bMTAUYJeLJP5Eoo9NXnMQB5zrJ1zy8z5DzNCJbrtTK8JVVzF9AYixoQ9tYvYKNnZpwmpWnypsUiz",
  "key11": "2QLZWbpU327rSt8CRHh9ozB1X8gXZp71JAfdZNkqyhHLq2tVYWh6dTidQx7XwMGNXeyrzzMfBTccZj9yiVfWnAoQ",
  "key12": "4xDL5xMCQYbZRDSsm98NwMKXCWjc4E93k4TwViCCYaazj4HGcStfxpVibpamp1KLujPTScjd18YekxPHiHWkeGA8",
  "key13": "2wkEG6v8CKBCtU3oKwopreMQH5Yw748n2g2x9KzX4aFzuooXKKkJ682XSwrApPSYu3TJerHadg4e6kyGLhmBKeL6",
  "key14": "5NpEALQL6cKX99egdDf5KEeG3M6VX66DX8KrZgxkGTQ9dvTH5LUgGd18yZPSWQ3WqDbce6Kfos6LZJg4w4Ukh2k8",
  "key15": "4PwZko2MF5Lzar1A18pQiQbKBPkygGmtjKvzPoPKfDwt7GhnAMDq4i8itPhXuNHfGKCGxN3KdFpLhXnJsA5vC6Lt",
  "key16": "2h7aHMEmWn8rdzxe8cwzqYwUjcp3FpJ11JxhKTSq4JJWP2YubPBW2cNZQzw47XLeANsrBAaz5DRU9my7pJbvAVQ",
  "key17": "5th8iYejZpTBShH8pRjULdoXcinMZxgZsr627h2SA5f7CyAXNUE1H4xzQXnrQuFu9EPUMDyXMpVg34hjda4MPj1m",
  "key18": "2yX7oAX2sw3WtBETDpdpv6xB2gATtKkrpvHCR8nZJV2NuTs5PZUTRrc2Wv9pkpuTddzFsPESmKKB7RNC8SDttxaM",
  "key19": "3YnfkTZEcjwuUVqthE3fFRKeivrvvyHzb7HHYQ2bDYim9D9PpDfGg9edRXnpo7hkaunrfZrNbdKqs3yhapcettpR",
  "key20": "Vu1XPNoXzjTiXzkBkDuLEa5RmadC7BhN26LitzVSc3fLiPbhapfyygJaZoyt99wWjwZP4ci8MYndckoEGAmSDgZ",
  "key21": "2U1vGL214seLhiT9QwmoQjQt8HCKjCT9dsqGdXDSqcYDd3vayCinmQsNG3E5CM9cNFF8Ab8YmenrKpdUt3TFQ3j2",
  "key22": "3h9q9HXdowxWh76Pq32rjeY3oV1ojTqS4vis1A15DzPpYbg4NWCgvuRrbQxhiooaHX3aonLUJw5LaHJv9NUrRunp",
  "key23": "33Wc6oXH2HfAjcs6H7m6ZTnacnt7SQN6ffT748shrZ146GJVs4LJAjZcXppv9yQAJFWhvwqQNx4uq2E9BnncrPe3",
  "key24": "23o4SHqwtntaXVVQCHQzngBKPGzRxZaMLFxY2uHywCXSXzpJjJ3GTAB8SJ1PdE2MzWoLBwXnU5Gux4S7wWKJ5vuj",
  "key25": "538hSLDoDgBrmgQKw7c51NvhyJwMkJSet5VkC5NQvAuo3ZoGH1Ry8FSgnhyw6qoseFivLLiM6JnJiFpeTcJFaJbF",
  "key26": "2dopCZ6dzx6XBvcBbPVKgqrumEJsY33ug1CiEe8YJSFtyzhyApYHp6dVNSRDNBi1mNs9b4btFW3ELoGx5REk8Vnj",
  "key27": "uLXDUSudg7GnhkBS8uNjf4MA7S8BKJUKWJp6QMjQmUPSPeet7G9NtcrDftc1aWLBTzYqaq4z2Btgd74E8hV8SrJ",
  "key28": "2hkVDPd66gaTTpbP9otyEKKHzmMtJgQuPcUBiYoYQ1NamP3qGz6eYukFoWcK7E6rVn1svz7HRyVEkpoccfAqq5Q2"
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
