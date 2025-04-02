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
    "pZAYz6orgxSdTGZxJ4Sfs7x1XkrkryepUcLcaB1VdMARvHgHfPsDxg3fKpVDoF9KxRobb3RNjL3mRar88ztojor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lg2Tm9ECnmEDRxi1HWDyBfNEvkGjexw1GjneD7k3LUpNbtCg2EGzBEfYvMKDogSKmQmY9Ejycyc2daqS88o2m3J",
  "key1": "3qReBTfnKoTWqUvcCqrU7Q8KgVct6YTREaHageQgkwmrunGXLs3DUJxGRAEg4zSMb35AcZank7khN3kftZy6y3Vo",
  "key2": "5fgfeDemCk1spuLm19JXjjah3EqaDQinYbpYKqd8VbVSacpGNk4ijK34ojoxzyP6tU9Zw4CPXoXr2rAtTq8vvHyK",
  "key3": "3rsWNj87VuAy67gX19C1JinuXEsr61LwiszUhZ8QoJfPieKVsWrdQrEaBW2eSbJbWGNH68czsoQoAAR2MbtfdDYH",
  "key4": "5W192hLkSnjCFZmki5ik4Vs9re9NKW8BUDSif3e5foHEuCm7pHLaRRhpMBo4Gu4wK7xvQC1NBHV2CxfpnDpxGMiM",
  "key5": "3SppW6sL4xeZ1AjrhfwrXe9ntSW9reuW2R38JSuG8T76ztdsj378ZF76J89wPuAM492UwFNwrPtWKgUAFWqc3z7D",
  "key6": "57Tx8BjsjS1uREje4pt24XigqeTz3ZDxxPGNUudKW5njGFr3ifVamuELnwEBnAF4WwH7oaHnW3ZPs9nFdHjd19gZ",
  "key7": "3WeZWEs1jEqbezM5rvYC4zW2P5mSWHPyRT9uypAAgf8XATs4JxwM9kdbbd3wDBbutsFFme2LG1rSnv1a8frJq5FG",
  "key8": "2dLL4zEwwG2k37jFcGTaDiXtKKe1yFvr9fr2tfmB7dg7kQAB6j7PjMcYdhBkCj9TjpeFW4PrXD72YNwUBBtkpS4u",
  "key9": "4t7dYTegejBtdF6mkwGzcpE6QSrTPvNTNJVu1nz4XUCiJjtWwRuNzkNTjZ2udbZzaZcb4aMNpQ5S4aUMxTsFapCD",
  "key10": "2JBPaCoWJxfcURSqUs54VDq76LaMYrE1oDAM9xKQbMPZ2abCXiEkkya4zrMqMfC3yhndf1fDexF6T48G2CX4iznG",
  "key11": "3JEe6LiFfWxFXGoFxy97MsuVYmhCzcAkvqD4KehpitP14D21ri7V8ej7UC3T3ZjHeE6dw4SxpBjPVuasV4FdxASe",
  "key12": "jAKNi5H4Qf5MDVxb2QVwzhEwDY1naJvD5TZy5vkt5HGqfcsPBm7e21U4aRez5KGQRh2whqANNRfzUhVYZxSD7ja",
  "key13": "4vDhXaBrHu9XZ8cmecRLJsbG1ZkeHWupW4a8RjAuMYzUxELFzu8fhszFjeQsHBkTcf7PqBHB2ShBAdANATdjeEBf",
  "key14": "5ph9cdyExFUt8F8FUScfjMxEr3ZRm7vHVW2zXvoykDxuzygu36n8GNo1QzLtk4KDgdtho5RUnCRj1WEUEgoMeqNk",
  "key15": "CV4822PUdm3QjcPGZpCMSe1VX2DScde8DMpDPwDKv9YjDxqP98AXBLMEKYJb2YUbddN9CxvZVcF628tvKfedSBB",
  "key16": "5wTUeYJrVvfdR5L6KxaAYaT2ehzRyfpNba2WKn1Lmogfuat1BYezgZn8sLSGEh2RQAeJRDxxZK162zySQfd4ECQ1",
  "key17": "39gZaBbiq5U6zgo8ZKDsDE3mB2bGHoZUGVaRaQJomfxXicyy8gPoTNnkuQPnmHSXCsYsi1wz14Qakvdwwv1AW5YB",
  "key18": "2WVVt8Z54wjgX5ew4vXaGVhMPBkxUrArM5gL3VpC1rYBJAzAzmZGJCPhHsf9tuE4XSg8G4tnRWdL52SLdbrgnCbc",
  "key19": "5VS9Zs5Y9z4msBZ8yXtZmsgS7AqHTdFS5tUYWRexnbis91C8waKw87ejSiZUvQ5fALnvTZBKNY89b6KVGc6z4hoB",
  "key20": "4GtXRiC1juJEHmtqvyKwyRxGbhB1Zg99yncfPzBMuwzcm7cSoPV1zo1nbQcYXAP7dLxr6mJTPHAu5jhfVfynMP73",
  "key21": "238w33wYDdgn3F15iuaNuLE6vPFwnA5hGgV57nv8XfY2GByYJhtCTyxu14F94UPtnMM2gpJTVEQaYFZrbkNYUZhS",
  "key22": "4m3ah1bAZkLnVbvPxEJTz16RRSLz644RZyEZoJEeT7KSXnGkULJSEC9rg5FgrfHXzqbNNG5vh7MMomLT19Dfbz8a",
  "key23": "3GwMXvaqTmqu7UnBM5CFXM3usKbUsuu1keVkU8ANBSzoptr9UwebnqrDeZdShjvR7DdnBE8LTeUtn4xLiVRJqb5Z",
  "key24": "4YwGLHypjoe5J2E8h2vW4iGwzo1qPyhgchmYhVBe88mz9YXXkbMbM5tN8PYk3GVTUqNPbPmdjnbtaF6YA41kJjPU",
  "key25": "4Hofm3v5TGcfkSaPNrae4eanFxYHYixe7pFXL9oPopKvUz7qro99gVb48N31fKQ9YSdr5N1GjkMjNV6t68NrkaWs",
  "key26": "3NAhQFu7ktvh5kdmAKGDjL6UMEMLCGuJ59XcmBwWNK4HvdbL8tSUNbUSgJQ5bB6wbbhTce5UrNihjJztYazLn5bw",
  "key27": "5qg2s3SvKvauD5AKaoe3rfykU9Lno7HYM6rqDvsdRUkujn2tW97V4bXbHuLWqM6j7qdc5WQQCA2Zid5rw4Zh8mkH",
  "key28": "SJ1DfxB7jnDsCnxSAajRgk1eLpt3prUdfCdpFjGydYsHJvwg6RUXg25ap8rW4PnQb1FPqFXgJs6h1DTKYp12dDN",
  "key29": "5QVjzgw1WATo9hMrHgucc5j1NRqF84bqimDWe8wbm4yf38N9DZ86Z7a5MZD6yJAGLJ1tHTEMPcjwSVqoeYE8kNwQ",
  "key30": "34UTrVawdxzTRpX2SwLFqtacLd3JA3PwwR4v5g4cASgeNkLdhVNMR8NZjztmh9Knj1joqgs55F8kX9upWEkEVnqr",
  "key31": "L3cZVFcAmHC1KmnMVPXAmzjhHgbYtY5efWP6z1qCKRLCwD1BJnaTJ6Hng2FXCB86XgMRrj66tEetH62VMNJVWV3",
  "key32": "UC5a4moWQXRkZWaW3edWwHTU8EjcoBf5yXiYT3KupzQvejJEvcj6BS8PkaUgRnp2X65Jmht4fKqL47F4puyCmGz",
  "key33": "Qh3Jd8vYHanzRQB6FRwUv6g8w9VxQS919fX3cHvVb3u6qApYQD1woAUAQUkpbmNrx3HwVzsMSshR3GdRHzYQoDj"
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
