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
    "2CX3hnDsrs4B3hgwH4XSyZSjrv6M2UKsgKex29P4K3BJNgWaFbSBNr7id9gNzTsfz1Q3meyrhBYqsR5uFKQ1d7hW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6BNHU2iSkgv8VnPaNCDxwsM5cSe2aunMmezodrkegagUzLa4Jp4nqrURhjH23WQ1o8MZxSBUNgEWT3NiGiYxJC",
  "key1": "3prr8A5NKbdoWsAFuK3kB67QYrm6TdReiYtFJsi8o51k2Q913uTewuNuDW17nKWWfwCjjEWQTtWFD9g3iNkRQoGo",
  "key2": "stMPyT1fJFi7uneTGmfrP22phAsMPR1YYKyq9HqpRhLxLy7LFUJATZgqqSgCWWtPrCnstf3VfoGanEuRR5ZWMbk",
  "key3": "3ykM45eTzfLwf8B6opnSUFS1cs9RxyNSZEy24ZUAyNnn1BXUovDy4b3vaiCvoxkZ1A3Eh5V5cWfjp269gMnQ8GGo",
  "key4": "5KY8MRUjy5VXvriDoa8DaUNjWwmzavqGs4APwoN6FyLpJKY8b6MtTnhWRh1Py3f8PpY1oFqtRCfF7fMiZxvGKnhY",
  "key5": "4yYu93rCvsUedvVv9gBTHEdKkpywGLgzQGTE8yGahGZ86WRTCaJ44VsCQ84rbJg92yp2DennKhC5ncAEGSghSfX1",
  "key6": "4JwEQdPQVcYZGjGWB5G4qh3GfT36ZuB8pqScDyGgaeCESk3C7fXMJVdSkUrxJAU4nMVr2ftr7t7woLRbXGLkjyPG",
  "key7": "5f1cmWCN58t1LxiaGSDtAZ6aqmsZ9hPfwgeHVpZFPYaTv45X5grYiewzfZyL77XEowAEoxwacmHJ6B3W7WSPVvfq",
  "key8": "n9ickmnn4Lc43dZ6UQYRkzbYW24XgdfmnunfTG97ZhYU4zorzvWRuRFhfQtR7xJus3EY7bumF9S5Rirw7tY6j8Q",
  "key9": "4anGPiYisEp9RYZMsioYrUVfQ6e1MsBVodd7FmK6fq2qZhB6WDx2H8rEAp7qwU9h64h8CT55jG83WvzMMxXg32H9",
  "key10": "47YT8ig6TvnPcWbpQ4fySbHmLrGYRxMtjSYQUsiNXwFkJWr5tmP2itAyUBwdJJk2ULnFioN2YTQzLEspK55ELEp3",
  "key11": "43Yjbyu4YfkSKRtjiQ5Hxk7u3sk2RiSS6oGFtSCcPtU4avC6URkNsc74HKMWHWrgsc1KNkstvJFVFLBiP9RnCU5L",
  "key12": "ARLKGXWMaBbVRa9bookNeZmTg9Z2SrY3sMNUzUeDqze9xtf4vi6SWVqEmoyYQDyizJyqk2LgkWN4injRVLiz4Je",
  "key13": "4gVJc16bixhmnRv7UZyg7um6AXTCKZJ2EiTKWn1sfiE1DzUPx8pzDx1y6Fm4V3MZzictauuegrSF141RgmvjpUnf",
  "key14": "bMcWutUQ32zKh2mLD9AAQzD73LGCL2kKD1T7P54bozBGFzhnjg9VSNMGggYVdCzdihvPhK79WSE2gikt9F4q27y",
  "key15": "4qJmid5uhj3GZ3k2RGcL4Sq3pasfNQkn3Tzgqo1BVGtfKtYQT7hJyjme7rqQT2iasMbvt1FEVAZqgP3AXh9tgBfr",
  "key16": "4CXdzD2cZ8Rpk9NYeavrZBj4digH8QFLygFTeC834TWYi7GSNiRiS2ndZjcQu3v7abvJhS6ju4EfprCxp5opWrv2",
  "key17": "x4t8skxWK2FzCzWrGS1kyCWHApixKHvi3yXBTa4bxP8SgyU58cbGttCGzuBLJc1JaDzQtd3A1nuuSEAfKKNXubQ",
  "key18": "2GsH9n4TtoAw6XLnSf9By2i1DHheuQe3a3A4PJH8L9SbY7Wi9V8TWBTB8g6tA6RrvCENSMUxH54ehChfSFsMiyyM",
  "key19": "4yoJRpyX5Pq3b17LqYDVpLipsCwXB6eCo2m3tx1954F4rZxtwbJjfiE2sPg8Nu1MwZ7U5hdHGuQGrDEuQ6ZSAbN2",
  "key20": "2reT3m3CR45rYx6qwh9tqr9HFQeowfNEqU5abiSRAfP8X3fGwRYPxzqeosN2D9wD2jUMPizQUE6ATfBFPDosfrjS",
  "key21": "2MHzSw6cCL4wKKx9WGqpCFNGNxYixGKPyeD9He4M7SWwS65pYhGDbD9Mt3QMYw43n1Uk7TLt3256TMPrzhhagZFa",
  "key22": "67B7MMwLtLAJH95WnuS3o7Gff9eS9ojgkVkCgMPcrhKonqLocMWCYzbhhdJF61BWQN4thGuFh8F1oDHHB78okKG4",
  "key23": "3y1gUAvaubi3X9qiX7KTDomhyYeH1rn5Ndqt8x9Abe49x4SfnPqa8t3YpR3khVhgGEC4HBPW4kM4gxRWZ1FUmh6T",
  "key24": "SVHtVFQF45WkVQveghK9c8jGBxtw6r2H5tV8vcHxxmg5XB8ncsZQfXkaoV5mdMFeT74k6ddcBx1oJaB1W6CFsHS",
  "key25": "4MfVGTUcGhsguwCB3sMdKa3CCPiEA4LPJdQM6WtJwXWkn5RTKWmjAZKDjTBYBosw32b4XZhBX2c4XvsuG4jHFQtc",
  "key26": "5abMCStWSDhSQ22RUFvpAoDvD7rRN65ynptKiSi3vGEFo3M7g2H8yYCuunJ3iDKy2GwkXvizGjjHKzfafg9Q38kg",
  "key27": "3PftuspJb5WBZDSZbcoeJAP3V3mg4kBojNTKfJDZLR2cfRWExLymn7mMA3vyiSE8Nbk24k9w1c7trQQCeo8f83Kb",
  "key28": "3CSoNXFvV8SKsQgMcXvY8NssiCa1FE4C9YHWGCTkyBgESMrbfy47TU3P5n6QogC3T7ZWbdhyfL6UUqbDEQVXaRzw",
  "key29": "27QkcF3ZHdrjf8uKYvPHfECDpdDMK92LMPt1PnwAjpi2csgkE9rSNgbpWofJ6xp2vLsK9tM8QrPW9GYRMWdYp7bD",
  "key30": "UsdLH8dM1VuxMAWWaS3s46DEa8CNkyb1FxdzNHD6pmmFr3YbysuDLzhUgkVLtgg7kcDwU7pd3qTTEGNQgk2rbdg",
  "key31": "4xjJ2so4CywstL8vEmd8E19iVhpBsmPeu5USbAHhqs9ndKJKZCnKUP9wxxcYkGDh53LLKGgohH1KEaq4d2YKs4BQ",
  "key32": "2K2zrazMrrpTTuvdK3226cUxZgrhtmD85BXfmNBFk61P7mSdZQA4bHyV9geAj6mhQGTYSds23DNbVetKAHcGukdk",
  "key33": "3Mrmf2KNySyHHJ3wcvyQZsuCRfMF5EpNPE38swtJLqJH4ivdY6MTdvT8Tt1m7FwZwF9YabgSnCngmQCFL6md1FZs",
  "key34": "46GhKjZnLrPgbXqZH7oq7VvJTZyKaRxnVPaPTvad8gbRmYtvpf11zCc3vEGdYDVZpHG8oGRG2w5vpDiUo5MjYwNb",
  "key35": "2C3dw5AqsQcknUiFnvCEY1ijKNfKHxW1RB29FFaukBQXAi8KKMLsJyiXPNF7Fs77VZ5WKWgxFkdJ2wAEr22FRtsV",
  "key36": "3FmXZmiXUsgj4kzQdXx3CwTrNiK6cb1KGg7NHZcWLgE9AnifZwZ9NnFEZv4rzTzzPnmzejfN9WbYxWkwuCZPJcC",
  "key37": "5uQmtrMrFU5LVr3KHFVotrdCpFkuq9Krok9YrtFk2csy2Vir8Y9RT42RHmkYZ1nYt6PEEhjW2owdcaVEvucy6LPT",
  "key38": "58TdEHrzvJNkKby3cugPvwWLh5jatLAxpYmQfdMT1hede11jfCUoH6apxnjW77SeWJqjuRRPngjRrsF69Gk5by3U",
  "key39": "2JctknmA8Hn3wbSj8gy5UB4256vkgjv9SL6Qz7VLpUUyEPJU5EBNQd9Lq39v4njXGK3XJgzcTHpRtoHFrKnGUfpW",
  "key40": "64XFf9cFUSG51dDGjYN4EtC1NoK6owHTDJMagcc7tK7PPna4jSAoSqjnJ5y7ptJ5uZ3S3Gn73LsQ7Jjut4My1WUM"
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
