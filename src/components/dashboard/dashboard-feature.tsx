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
    "Tk7WgNkWLdwN8kyD9A499A2ZiqwrKXxRtxQ4sr8kyUAMFMN9mXUXJiHZHbAozA8V1HgG3af264MWH6Yw9uyUJwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uo81WSUWGuwNz13Qw6oF8TPFyj1Gxg1WXH9cW2cMYKWxkgqDycXoKhUjVEyVQ6BvYzhXHoBAvtPCKjZUFvq3e8",
  "key1": "21XEgFdp5q9TD2iq71YE1WCQhDqGqSA61QnCUZSEd5ptgTUBtB33ephwsp2Z2JBwfuMPUtne1dUm7PcMVdRg41Bz",
  "key2": "2Wr6xLVBEi4aUqtkFHjTNg8F9tP1SbHFC2iDB1Yww7d2aBUYpxLCpn2A4ud6M3nh1csFnRv3RfiwoNLaakD6DkA4",
  "key3": "5p9r1w2ddhWmJscYX96pKP9wNNnKMXUyKR1av65Rmp1mSpa9rVWCRuaPJMAHYBiWv85j394foKEtEjGmD2WCphkC",
  "key4": "383KpoSg3Ue9GhqzqgJQuA2V8gcaDtFB19A87i1g6poF5f9k6vDF2d9nsKNtytbWAWQi6AeqmBdjWu2XBxpV57uR",
  "key5": "5Y3nGC9m6vCi1waJcx6A2t2NGGyCWbyd9dWygSGP2YZnuuwfaBvNRrkA8LLsRp8Y3Tu5HcZzxYh9MYbSeYyrd4sN",
  "key6": "5VZDBua1Vb184HEduTthr8diGzXvaqQWiD9Ss19TDdVAauVgqhEEViLM5R8Rn71rhKZcRCNBNrx1BsRATUQ2SqU9",
  "key7": "41LPQKZ8pdVKWsHjdMKyLmHt7rYapchUudRe584rRx2GhpmxEw6xUiMFXLchf9udZ1pVX4pi2qYsSzb592cBmUbo",
  "key8": "4nVDshsPfCpxePvcSNQ6a5RkXqDBKEPESe4UbE8FqpomJ9bhRf5XdLUFyebRZQw7X9HNTRZWhALHitzEGAtFKpuM",
  "key9": "2zEBc9NukhCWVF4AJRiHJdPnBiGqmRDsqHDFg5mhR58egkq5qBiMdRV6Bb5gkhiJsyTWqVze6w7MqgT6dxGb9u8x",
  "key10": "e4gFhWost3zzDiXDVWsNQAQXhHeUSdofT7Y6Vb2WqGeFH4teEDyAwyXasvq9h9xAWvYbNA9LMLMdY1ekYNt3UfT",
  "key11": "49W7cedZiFALYLuCBDePQSAWuGxukQL9DnZXb39iSAqNiMkNcGEtjNP9rxi86QrVs5mMS6H7B4r14H2c5m2erKzP",
  "key12": "5aXfiJADVAondNeiGoicYuDc4tZ18WCyCitRUJF8jRCZ9rEMjEkVyzrHHP6aaRWFaeikFQtqrFSnr2R9ZEi5txcb",
  "key13": "595sjRu95QthbsMH9S9eXZqBcNfbbe66JYTUBN2BrnZDFCJtNqTwXiStxs9jPLysdaH9AL2Lw1qKJ3nbk8MTzjt1",
  "key14": "2TAVHEcNJojcMCvNU9GQDqLYhRmYJ2SmsGUFoedy1LtJAb7cMZ3ZyYie1nwjjyTu2k9prBvJZbVwcRifajMcyqic",
  "key15": "4oDR5yWmGypHZWmUHsHBy7udifCW4PHd3TyW8iGzybUGYuTmDaoCceZKTS91aHpbaEQQi8DaJ6DSgfEqCx39LnUh",
  "key16": "4sgvUU3NpfhA2LKgEZhUZ4aiXamMx1S66CZ9LmwdoFcQeENYz77VBmXbbMMnZ5XDZiATSmiosaorhwjnmwgzmrW8",
  "key17": "2auqe2BL7TGqsyew5onUdgScGTtnqzqB3YC3z7g2ibhLRHczsJqKy8vw22kgh4QEFRWr1jmPmtGYjGBhShJgNGBf",
  "key18": "4riMZ3LzRZrxTNguN47xL9JjCyzzkvJPkX4FuGcDNcTV6CzEWPmzPDNjAXoKrNFsZwyeYqwx5sqiYPpmXB9DNmXR",
  "key19": "3xG1wmMsfuRbwzJZqxB78iWxc9wAtkHGiKDaj87xgKggWVTUBiTsxe9uGpw3FxUGrncnbUz1hgiDj9iSMyMTQXWS",
  "key20": "5Zb63ZKQRtrBDqazrtM2eVtRV4ruGwUXn4s5qnkRGxWj89v8FYCo6xyCrsPKKp4yhXSsyUShresXjnMViUGrY9Lx",
  "key21": "2k1JasJNtPMMs5iytmjxQewpxNWB7EjJ9DbxT8rhEyZTrQjQKkUjw3a4APiDyowyd3uiwGKBvm4sFs2AAxMBVPzt",
  "key22": "kAQYq8iqZDDkd6minDayL2wma41hvkHR61qotJFYspdFJCoegxgNEsgjH56XEeKAUH2xFzrAKFpp2FKXrUsLrYP",
  "key23": "uKPwGw1r6p35Zx9sCGSEVW5mFTgPBLtZtaXaA4dMBkCN26jzCjkcaEfFY48mGUSrjkMPxpMiXFFbdhiGZ47Mbww",
  "key24": "2NHsstEQm2tUX8WJQs2Lr6n3tCJdvUgAU2KG5Le1H6x1H75yxEv9nL3RXLWXq2g5NWtAboVudRNaAnMoiDnpGcfp",
  "key25": "5jvQL1ZcrepagZzsmuBwggmpeHGtHPzZhQajWUGYuCHGC1agnWncsNj2o2RwePEWXGRUm2NirtNwNBYMXmB8fYFH"
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
