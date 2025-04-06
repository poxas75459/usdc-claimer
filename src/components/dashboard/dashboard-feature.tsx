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
    "23oZDGuruqwvdKFvziVbTAcJdLANMwecJ1JWHCSBbZaTz7E6a3AhtMtNxRbcjFccCEri6vpYggwDMujdxGk6kUMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NdaG2Rq2aP7CsP6P2En5dtuDZDW3v1jKgLjAqe5WSSPkRsrNLusSwRtijArjmB2iweGoHsXsaATrdLnQGU8qTPi",
  "key1": "4yKaE9YFVrqe3xBGuGGCDavmNM7AFu3sHVU62can9Wm6VfFvuUhqT4sYyq6bVguS3QAaL6Hb4ZC8oWVKgEJbHZiz",
  "key2": "5vs7yreFCDdeu6QVxpG9gAds3xvF31MAcawF9WtgpZGa7MfPgDEcXVmqtPupwaSboZFxMLH1SQ7AC2NP74VzhWPF",
  "key3": "5ZtDpeaQyRFucg4KHGzydZM2irPekXweAPVGD9wxDqgamzyqpvNsPAMEcoEVNtArV6dpWLXjqJtTWNo7A5ryVTiG",
  "key4": "A3tbAaWVuSkFdX8om8xdd2iwSAaBfcV6rm4khYZcFr1a3upNgJiatM5C2CyVdA4oYPTndMBp6DPVjX2EmCnpJhu",
  "key5": "2eMzNwqV75tmRnYDPnSAbaSv1R7n82NkdYxCcibSy2Ez9uBeHsWiNkE2SNJvbQMpeUi7GNkKCpYHuEGRqRnLdc1i",
  "key6": "5oJsDjXxGMzmdnCZWGtkE1MNFD8DkYEHuC8mK4nMX8KbGT673Ue2KwCG5Yh15wJGhYofmbrrRDpfqZXd5WH2vWdf",
  "key7": "4naZcL3G8kbqunoxWhmdwq1kJyNTo5RNHGFNtdNsWnq3nHohXwTSUn96h4x6zQq8fY46E2Rkwk2sLMgKzmwS9sYS",
  "key8": "4ASxu88GSPb9C7LHTrp6TtBob9q4ZAczy862HLKDgKvs7BZnkWmveTM8yy7h3eN7bVG7dbbq6q4goopzSFirLtfY",
  "key9": "2gAYJbLz6C4nRVC1QUD8rzPh8q7pJecXFZH9DTRi5GgLDFKGRELUsktgt8D8Lsag47LSDrS3kiULCEMgjKZb8JXC",
  "key10": "ecFWkqPUjifovvrXMbo8WAXXwCpzUtrzsQC3L88hg6AEa16rNvH7o3CFfXYZ8kQ6HKgbE3GbvbnkkA8pFEFqfyH",
  "key11": "3eQDPK8YkzhPtQCwDGVNkmmrQ9PKVW8KANMQ4EUYJUHkWSLQ5qTzSacmp4eCbezf6WgwHSU22ZnUBpDPio2xkGpS",
  "key12": "39pDHvAHFitjy6SJWmeXtKvcdLv2UgCrJobv879rwBE6s3fYffCAmeS9Z8mC42tuiXrX27NY12oC8uy2DMec1jQp",
  "key13": "4fBQyJ1RfC3xQkfSP67PpB7AYwMJco1Tbxj7wi57NSxpAeH6zix55F4CPYpqEGRh9HEDU7fVcKbgSYbat4pHvogW",
  "key14": "96QAWoD9Rv5y8m9KptPZ2uS5iuQ6PrSXFquBEQDssjDH4cchjUDMZ6DLAbwurKJQDdDEFvmzVGsT6KD3vB65utt",
  "key15": "5YW2h89SEDmGjMwqeEZWPPrt2pFWGXbDTpbt4MKTYRDZRSuxTSBa5sqNT2PZmD22X9iqRNf5SRKjg1aZmB8dH4gU",
  "key16": "4zMH8jJTGNLttJG872h9FesbVKPhkix7XFaS8UTJuBjsYkUVrgEE1rURGwqZuGbgfbbSW6WiMdX5oXW7P3ZGvGrf",
  "key17": "4faoG5ty7pfMdeeF9rNeFrPKLvpbHgQ6FWakPAcy3nVJ6BvQ1MTVxANijeMEC6egAzXXR7Fp7SeMkJZRv3oCbvpf",
  "key18": "3mPFHB5FPM7XzVnEqNRPUTCQkN32XVoVg4ajYgAWKoWMr9SiwTZpHBnwayXVd4DkCv3vgGB1uzA6yZmVe5vgxUjK",
  "key19": "zka7v5R9HXr9TLjHi7DF4Y5ryhmnkd5yw42WSWaDMMVFGuQEvf3pSbaaBZWbRoW6Qi8yAvFiwTojvx2B2nJMUEG",
  "key20": "UWD3EVhgjBfJ2BoMJVYrZC96TWuv46FbVEmuLMkyR5wefGPx4n8UBbq6Xo2n2Lkf99DyfogurBtSx1h4AxbYBnB",
  "key21": "5EwBqRPT5fEvVQAGRqjU8QC7aoV13eHkKta5dfNAnAvwovWyvPGC7i6aDPave5iQtfYWjkohYr1ZzU4JSbRvMN5C",
  "key22": "osAcZPun2fUQNgP96rQnWy3bA49kAErwtKySMPpomgT4ciQUJa8HLsd1Pb1L3MtHaMV4UY9SuVKtmGgGGbUNtWb",
  "key23": "4aZNbWR7bxy5tN587khKu1b5abMAhoG7BaudHSWjc9xTzRNzXiCL8TpfTbEwsiWCcWtb4w9U3rkh9xQMpv8cPraa",
  "key24": "2qzsXweQUp26asSHnAXwKAbU8woac4rNtsot9NdEvHFdNapyVfJrygvjXYF4HhoWy2P4dXXocA1UCaNBfEJZttDW",
  "key25": "NZgnRRKqALuSMXzhUjxXztPKrUQaGfZnaJ1VbBcBjunnCUmq1prqJe3XL9mzdDcC1mh7YgNNzY2yTgZgKGhhLNE",
  "key26": "2nbbs4kTP1Tu9xE5gNTHTj9V9o73oM9dAQ5skQh1wEix1VJbjXZN3hhdch4u9w13FqqLrgKJ1mcHMDu5JKL5Z32i",
  "key27": "2USrE9FSGxbMvBWCfRJuR39DSJuj6WLmKXJNuoxRVx5J8GfSYidRcGnuWak6pSgwUoRhm9TBmdYzupfgvqMGtnE5",
  "key28": "5aZpyefeQRrkgwioCFKmcjz1SdysDKX8yu1FP6qsEYNNANk5xAJxK12Z21x5MhhspjHWcuppmywjtSpqZzkJvB3b",
  "key29": "3KR1Mpsjtd77cxbDHgJ8rYcYS9fgPhKiK7yAkRc7ayuxY6Q7ffTYTRdHRVy7fnyTyf5w7vQxqViCQ4mwBPi9wdSe",
  "key30": "x6vUmu9aruFmKYtfCh2oJsekwkTpf8aB8KGMV7ES58KBsW1PECzHVnfJ8wP1kAEiDUmy9FAvUcF5ePp1LrYEiKS",
  "key31": "5RKU4fyjXY7HHNGTPxAToVBaDxAb81PqSmhiZh74aRaPtqYN8SKVQBsKs3qewjsDThBb793SAUpoRDFSnmKk6Ldf",
  "key32": "3utbGXfrPdVJGMyMAQSG6zz4UcNCuDbY2SX6aw8JgLMbmfknsHDVvhZEhmPnrTLWUh5o3NYvQ9k3xcMU6294qzsj",
  "key33": "2B94fJ6pgu4x5cwkFw4RWvthXHYk3ZJYGMRiftNaMVZN5mitrAhxuzVrwH7drywhydPPstQtcdifhDj6MJJtCbVc",
  "key34": "55LFkVFHBYeVC7XpzmbwGDcXgRhkD42cBToFZzHbdkz4HeS5HdueEHaMwG7y29ytzFo7bXXyxxMDiNnvUgj1u49X",
  "key35": "4aQZBUn4B3v7MNG56FcjjDxhgzyRxuJyEgkfjmpvT5H3NYzWD1SN8V6H7etXcHcGuVL2F4gkUi7ca7USZjShcftc"
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
