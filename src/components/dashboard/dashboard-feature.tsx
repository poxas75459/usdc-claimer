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
    "2SDM96YkCNSGq4pUYZNJYECdK39JtjyMPf1kjTJpDBAnDikzhn7vWkJM7vZR7dZzLxfNFFyV5UsJ8sr5xQ8AEnwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tVTjdQbK2CmGnubeN9DfbH2BHWvF3Y6yrhBmyTgsUoEmXULPnrve5CikdXU2ZwJ1xQUD1EedkV5ih3ZjrbiqU2W",
  "key1": "a3Mse4Es6uoMH5HrgHD6maQtRRdWCNfLgAQWnNL9RwcABBFy4TKMU48oyzTsvf4x4eTZt2Ekf318xP2owVQjsF9",
  "key2": "4BLJtJP7HnzHZ3rNKLYfAbz97h4zpETeSNVdsrGTpVzoRA6hC9o5ocXYN6v6AfpoQGN4Wtj3knmvdWLBZZk2JU9n",
  "key3": "2ZYDZ5BLDgyo371KyyrRm5ujPWeJU2F2rvkkUDbHwfQ3PtHJxvJtqFqdYrf1rWiCvgUQWtg9dZZ5wNszCziiuQUu",
  "key4": "8ysWikxtW86CGJrZawcSKfvj78ywrQfFsQEYbYTXDKjpcqa4zPxgyv4bPDtk3SWnSondrenK7kJSZfcwvyqH3tw",
  "key5": "3YpcMNLCCfhm1g6UQipofFmjKXBCx6RJTDNuvTVnwSyhSWMXG4zp6UDqSZGR3w5wRhGQ7NMTuikyHzh3X7K8ZqMU",
  "key6": "xQydpVQ1sME4KGgrMMhSoAE2G9cjNPozGtcQLNEJiF3Txwu4rKURz5YUmxgnAwuywkyFBKMy4mdH1tgEdkGgb9v",
  "key7": "3SGugGZGZ4uA6qGJeoanN1VjrXctK7H9hjeoPStEfPZnJoMgHCVM3LJ9zbAWXtvz9MNFS9Pry8Zu97tQXHG1yDuV",
  "key8": "wkRtMF9gUWoZaifUAX4rjem5HvvcjKXCqT9QhEkorJ2h2oedDhyAHJWHt2e5GBEUfjQH9n5Bdhinf3Ur34jyVkB",
  "key9": "5sYHuiB4ibWtw1uobDyw4xarDZeVV7bHbFaJRshwbDJioJetf5Vb59sjs4QLJVSQ2NGAnH7Y5PTkSUCUS9AX1HRQ",
  "key10": "2CXbH8ECFeJdm7GkDmomTpTMx2arWSuRmCjatj6b57NuuuR4syvbAUVfy6HMydPLR8bMnjzFy1qxrLckXNZcBAPi",
  "key11": "5puPeYXr4ZZsLkhc8f4ZVkBokNWfYU2eA4zLY53aiahFC9rGNyWfVj8k2xWTTq8z4qVqhSt6LrK6k5ohQAq23Fw5",
  "key12": "Zrm2FVwkNX7J9dKGvseks3ocJtiSPUmGnXUzrs2vcpX6HtGs8f1igKreaJLtBSYCdAwUGiTsVJDtZNtVsKNbGHJ",
  "key13": "1RFUcwK3oPPzx7oegJFq53MSyEwiHnvgDPeZDrzUL1bk4ii6zNoUmFbmnPMwBgjYtRDrJygyDXLjntjLeo9fGPp",
  "key14": "2aZjCkpehGipnSkmuo7ZNZakMtKjg1Eb829RVy6ofJLJhiQHfE9rveLx2m6HwA2dgfqfB283RbuRQVkuX8Dnk9uF",
  "key15": "5g5RrdwTVUzGGe44ijatNX85CCX5mHjKoibjhffJTqedrPqXgRLtofvWuHH4GEmYWeLahHAi8u1xMQUF5HejWoFk",
  "key16": "5iDwJZTrsrfngdm1JrYpw72HoikQBth4JiuWwM7q498aeiNbCaSpkp9EH3risfyMbspFTUwnfGRFENmhZP7euXEn",
  "key17": "M5wFEYXMsWQvpF1VAsBmu8Ka82246BKbZQYVfnmMZAbjazuzMrsZVCpR7Zjoys9JPetHnHKcBypSxMTByvNkMUj",
  "key18": "55aqm4nqCYXCLzVeyp7ddPGzHLmi4Qe8NZwPr9f2VVsHrv9Q4LfddwQ4pY8YkM2mY5MXNakA9eVuqQCDzDhCV4eV",
  "key19": "5Rn95UwkowqxFnzJpJpvdRRia4ocv7gqK569NBHJpB2grLgrDYyYCVDQA8vby5JajZ4XviuTPVjrG6RDRqdYRmbS",
  "key20": "5zpVwif4qjo1Wir9kuuXpZm6sh4Y1BiquagmD1TNVWfCXUqTfNMy89gsob4PedmnQ7J7yaxT4m4nq3zt87Gh4Dp1",
  "key21": "2MeFZqhUYov4n1KZQaAnSUiCaWWzZGagSndBDEtvvscTpmSj7nBehZbGV3Q7hS9A6tJoAZgBhVHMogCxbkkV2H62",
  "key22": "4nnuPDdrKY2wkniCC9U5FMez7GH7UAxn4jjYKGBiQEdixgUp998NosbKT9B7443ovoGcwUR4vZ86Z5Cbu7NevZpy",
  "key23": "671Q7Atezghs8QbB2CC17qkMxLAb7zmhYugRA1M6uBdFrPg3aHjryu7dyT4Uf2KikGAkhUdd3erWA5auqrHf28WX",
  "key24": "54Kw18S5w4CGMDh1t4XJpormzrBwj5ATzDBgjc9QomVULNoPK5hX7vc7MDfCYwnno1rULchojCLKLbQbBJyuDMgJ",
  "key25": "4w3QpzgDDnU2mAoKAPDbAPGS7dFuYUVJim4PhuFF7yrB1WtvCyVo4WpQHG8ccV2Vh9n8izeEME8amS3u5TzKkMBp",
  "key26": "2EuTsyrcLQPSWsthLVkNSYUtCKiYD974WX6QmHQgVaL8PQHk6i5uV7yAEhwMxzEQVx4e69KXmZkQkXtkMFWfnNJC",
  "key27": "467S69znYY5ZNDvPoXnMsYeLPqfbYHeeLFzQCUCMwDpuTwamg19azoizo6aBgTrBBEJ9YDovsPKLaMnLw3kp372n",
  "key28": "4gspdCsCTXTjSewjJEABKRarEhUboWWKN8EHYeV7ZSz8bLUY3CtuNmLvfh8JrSbWw76v4fHR3Qt493T3Sxcb8B2K",
  "key29": "45sqi9joFPzVokbjQLqHZfm58ifQmYDDNwFWBf49WN5UZMcWadsedsbY3AHFRAx3gjHuMXR2yQotF9YqVmLY1jnw",
  "key30": "4D8fmgtM5gnFqrZZgwzZpdcMtAn817BCsp2MeWJBW9RChAYmFAtPUrnGkUnxDaAihpYB7SeeZC3LJFGSB2K77v4o",
  "key31": "2eajGbGdv7nNXU3rqNdm38HZQHykE82PcC4Jv9VGGopVxdgWz5td4fRzkhesH9dEF2b96cnnZmtLhfkvgdYyFgng",
  "key32": "4jexdJAddbSokCmfRTxRpMRicMEbtKJJAHtguAKLDCNimc1aAbYxfCi21EH8GyY2dMGDtJ1ArqZrMe2ucXJNk8S9",
  "key33": "4W8eDpj4Y6XVjVNrUmvWkC4jEXBVh954wtyMK58fvg9WeA5sZhTMTABvssVHp2YunFnNoJCaUGxbimjk9oNaUjKr",
  "key34": "HNG9km9UYxbPAurbmL4JtdJFyhUwFvDLfBVpCeqZMvCYgNk3tp2AuCZUfDSayodvCjUEvXctt2UY7oK7YDhXQgD",
  "key35": "NJbYff7JT3qumZ35ZxSBLrm3TkQX9vXzJgsNd9HzPj4X5otV9phqWgi4WEavsnfrYUW8MBoyDHoFpngT6Zxtiv5",
  "key36": "31fygtdmBvr5qmybPsecU6C6FFL37PH8uzc7iAC9W5WSkPQgBLVzDmFnyGjGGxmurx88fThqsDCQEyAA6Rm7jgSf",
  "key37": "5DWCS4nhPDUTuADPv4Wnq42iHZbfaLXkWWB9mqNVJaYGL411beeJvfQLn1wJAeDyaTX8RB79xjxAGuEVqu5ErB3n",
  "key38": "53z5kZk4dDGu7hqkFH4wJDG9LPUAqpnURqNteZcnooVs7AHA3AsaX8epHTeiFvFywmext2spUJWYRhs3XxfnYfrD",
  "key39": "3WmzaSNjPuLTRXeahmJgU26himX67s78Skw1YZu3JUaqRMqB1fEDTbmxbLoQAkpzJsYuf6V5bkztPZarHjWj5N6h",
  "key40": "2xcg1srdDND4A8uvwcpxUUhcuHkCQLoCoRgnCrud9xmrtEyKZVwPN9sHHMp1fJS3EaRdTqAqMbnJMR1tApL1MYaq",
  "key41": "53URumdvkyu1wZPvQbDtAA26HQV4vhmw3GUjy1H67UgLM43NpQgH5vbeGu1FGahDT2rhGxy4g917V3pYAyaQs63m",
  "key42": "3sxUu95rsviBHLU8Mjt87rZHhRPbht56yde5ZGZEnfAkCx4EkZTfmZ55TY7oeDAkf3jj6QVuY1b7Gynq3G6e6cHT",
  "key43": "dCjUd3tqywzd28KrRcVqfkT4gqahkPmunY9ax2unzPTsduZwiKzLVpygbtmfNeFHeFv9zASdndK4wENyeezZs15",
  "key44": "3xmBw9SxSgFPXfKVYi9rQNkBZLHDg1qEfZ3XxteHT7QF4hasB5S3k73TcKFBsaXsjwtVhY7QmeLP8QDnQNAuPJRa",
  "key45": "KCyHyZAHi6VwjmXzZJHpyg6WMEnbQDiKaBtbFrPbiXE1jNV4KB3oj9BQ7pFvgd5dbnt12faNGUS3PdqSh7ssPSM",
  "key46": "27wUZTc9jED8aWcsboaDJg9Kdtvf8NwYM3Bnd5dJwdM7ZzoBfe6wtk6G7fnv8P4dLieq1tuAFPwqQCNDHBLjZbrK"
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
