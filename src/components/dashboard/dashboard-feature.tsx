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
    "66p7kabCnpqjciAHJnYxv86hFQRwtfgpKevaZRDh4ktbRN3SBgFjPneAYcbESDaeD4GJJByn35gqGFBQ2hWacUYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tiqCJuTDzTmFc6eTSwENncagrtN8EpR74TpSKP8ZonheZ8D5n7Ww6B1DmB4LifrRKLzMKSLWEUa24Bjx5VAxzdP",
  "key1": "JzQLqyykjFfPymR7YuR31b1R6EptG5Nx9YpWatzG5oKJgt9L4toLXUsqiDr6RV2qFZ57bGZkn2LdYHsRdEfKpjf",
  "key2": "jeXCi4eSsYTgT88Z4oMYwZFDxRQQtEQNuKWTydf6fTejoDHTRi5GmydrPXuLL7MGkb9CPSVwAQxsg7MxySyGx6d",
  "key3": "2AJ9HAPHUNUTiD9ue8UPG8Dc6y8mTgt8zVqUUUrsydhuUBjtcCSmEPtNtZBUMMLKv57Xuz8LMow7nERhmp5WK1yT",
  "key4": "5eCMBxrDBN3D1mZGTqzPkxPLxw8LrUJcVS1BK4MsKVctZaFXDzZ9rvRXm46n7vchr2RbQD4fTXPtrhJ7UbQDxcJ1",
  "key5": "61Ncsm9yk8uBWkR9M6ujx1g5eKuHEiTk4KE7dS9Uv6g6n36yagPcab7bLg36mhEWBFaTZh6oBuN8ytzeWc4gjgVJ",
  "key6": "4knsnmRyXME3hHmipgtH6W6KDg69mjC1j764mHjNgJJHAiCQjSUBEtX234SuU5KEKervgwgWhpuV1stR7ktSPEio",
  "key7": "4yjgY5vyuEuCj1VnY46bP8H4L7ry4rKzCoeHjchWaEKEqEDneQ736SMSMfBavQW59HrfHrTyKxaJ63iYKX79beVU",
  "key8": "5G1xmnnhe5A3HV4MUS5FNRaD34Jv3Nthr2A9yFnx2DnP7FGa6vJXbN59VcbRuX4W4WC7x34FCbMf2wRRK5neVUAN",
  "key9": "5xzK8Th2S4dm4JmZZ3uiu5QV92bgdRQJ4KZSSrqag841GEbjSFP29nKi1UxoeapydJvRrrh7GivVg8oyaWQYEJzy",
  "key10": "5i8cqhtfyePqxw7QxHUoWjVmXnThA8FxUcGx3791Ufi5t9W9apBC2F2RjaBVpKHLdXoQSUb8W67H2zqhSN6hxqDX",
  "key11": "4yb1Mf33afXUDc29PP5GGRLsoREZAMhPoKfLrwWkAV2rBREvmLVfcFJzwkMQC4YX84JF65VmEkdWpc8dRtZRCh5c",
  "key12": "2tAd1w2EmZxvN7L4DmD7pTN1eibZuZPPePdaZrBrRfeCSg2TVWRpdZyrLgzGM7d4SY8bKR88buStqBGZn7dcrFAX",
  "key13": "2ATmnVFVYPhmWtZNCdrW3SUThdY6ZGbePWYYVfZT9FokkzbysL5HhZCopL4u41Z329EE843nDGE7DkbQnDb4DhVP",
  "key14": "4fBb2DnYNiTEysiFGFtFY2mvswc1ERvqoVNWkf7shZoJeAVgQopycgPfscSBHjrzgL5MAhyiXobdppw1vkh5YxQG",
  "key15": "4Jyxx8hxH5zddioqPSM1o8igpYaFEb1H8thAuiCB7oxy8CEy4NTiacEggHjDeXwqQQwR49nn5UWga2oN9ccaxkLA",
  "key16": "2oSzmmyQcWGUazFqkr4L3t2fcJNZywqEXwTqj68pLsttpii6eLzvi3uVuEkQdnkbCoFSqNHfm9rWPiveTNSYcMyC",
  "key17": "2RKZfWi7sM22HkmQZk747NWFdW8bboMdF38WvJYtyL1cj9iMXoehBX1pBVEoQDNt3NWKtCHrow1DMiXWHrTfsW9",
  "key18": "3DzCx7xRQcN4hpbhj5GiPYsE7X2jKgTuTdDs8Mb3WiGSxJpbq4yunErdWYSozkQWjmgPjUewGqwVHS2JmjVB4K78",
  "key19": "P8Ae6irPeWHQPMVDjKj9Yu84TbDRjryx9BMohvC8kabk3YUpB4wRTGJRE7Yj7j4PKW5tLkeftSMce78XHNdaMRx",
  "key20": "4cnMdvCjxqCS5DYfXHfEeVUWGRpKnux4SFEiigKo4Fs2wxdBZ7o3ZNo9ZQid5gPbppw8s4akkvrLwVMFj38aQTdw",
  "key21": "5ZLqQT9NWB5vpwjSRE5sN34qCokEzG4fnjUMBV9f8SsZG3mfG7M3USDdPwGTd22ZfAQYjHSZDcKdFxHBKMYQwpMJ",
  "key22": "3mPazayK74FMtm6rZJUZZsMd2pufFGDyWadXKp7W8oVCNTN1xvQF7aKKTqfHRE3fowrQPJaimK8ocnWUb6A2RLNJ",
  "key23": "28xB3vhRwjQR7zd4HjLBQbrJWp56MNSN97Rco1w7UKT8NZq5k3j5q33CUgmr8KaN2UuG2SdUZTdSX3eBbXN5CMiq",
  "key24": "64k6UoqCbh4t8mcv2Hr55spxFiUANJvuZssekF9es2TX9javCNaM1JV1kNDCMKyUWG53nUdb3L5yRFBkZsGAgBkD",
  "key25": "ji9mcuZfcvbZ9Z7a3EJiKFnUJZjBYLEhuBuMiURsWPKUqTuDyVXHvwWJVE4N6naXxALeVwjTsRJyEvceFbJrbQt",
  "key26": "46kwRSyrQ4GfBSjbfBL4eYMffW96Z2yJUzotSs3ZGtzGbieix3zGA59QnT85aTUBeqF4WKLtFaMXBXXr47zEesDS",
  "key27": "4FGSYjAaRY94mv332vs7m5fUGSJ2QjNJe7z9XjSWbUTwYAcfgZZCrtm2nA33Q2pzxZgnUoysEfqYV9KrNBEQxJLd",
  "key28": "1vvWmzvAN9DsTRBYpPas1A9B5TCPhJGDVeA3ZUd8QGTgNXNcjhdyCumF9mguyBcWqQFRrHAmWmDvGRodjjmC9G5",
  "key29": "24GqPpBCaYNikKH5BZVFdevWN9YNzajLAMefioDJm7YWYeom5o6PcghhmxgQyt5TRLa9mWafMdQBuLeN6s4SNFsN",
  "key30": "3oLYx4BifeLZAFXi6egjyP4jvpHMQX3xy2G6rkshhDSY2eDs4HJueDzzVDkCb8yEbeqAWWy6KpZ5bpvCavPbrnF3",
  "key31": "5itkAbBasXtHQ4t4y2rEcNBxbzK4hyrh4b6NYGDg6ZdYkjjYB69xr1MHGAYaFYV7fJ31WJ9vPm1PiPWpVSTXwhVZ",
  "key32": "3hx9PbCkEC1VquxamibdSdGxdcyta5YRjwpu34uxbqvrWPip4QZuytSg57RdrJev8819q1asKQoC4sjpybp2jLKS",
  "key33": "5wwK7NU9bZjg689vbysVtB5m9jDrHW6xPj4qNRarzcPAjRDbWzwgy9AhVHEy9aJDoMG3uMRBGDSqzhSupRQCs1T7",
  "key34": "4umYsGHnupTJW5REEZXv9tKxxbYtYSzx3ehTMtBJF4eKTSxwmefWr3zvRkeXoFMydFojbSxZw2pGKL459CnLQeG4",
  "key35": "2yPiE7sbTWN9bmyCycMXx4bbYXEtGPr4zSeSLroUDcTg85EDCrLYVqg2opzxVfVagHYc8od895Wmr9ozZDNL7uEx",
  "key36": "5hgGRSi3qoWFDeqzvFvztk3ZsQdCpTSxfqRGKRKiowRgvYDGDq3J6dVVK94YHBLYSxyGwaC3XYx5s8ShDjCrTm1o",
  "key37": "3xBkP9CXyKHZbYr4EmFt7tBrWRJ4BJ2M1EuN15zXry8RkxS7vg538pMNEuyrFafZuatFZojbnhuttawLPCLGgqRr"
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
