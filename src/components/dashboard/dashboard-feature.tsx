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
    "4iCB1yaH2TuJUj593fnXxVEhEDm12W7zx5bWwgH6mWgTb7RSXecQDAt9nAtu8iZgUGPUfQZUDLMpEPgRSd7XG3Tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSEQz9rGzbbWP7cJv2NbfZkPJuHKk2GmkqkTcVpU1rxZ76tSrDwndB7L3AHTqGUED4VqutKGH8Usk2P7JtDrMKx",
  "key1": "5Bj7Hb3TABLgtShcEFQhwmoLC3dekKiPviMoT1hYSXD3761xJf7sYwHqdU9uY2gf3vYEkKLomyTnV6Vx96BuGVt9",
  "key2": "5uuHetZxa5DqYbWjiZCrCHvsgXvouzNcApibsFAB5P7EaxtjqdVrkjwwGRVr6xskTTPYLYy7Lsk7CfrxvL33RgNR",
  "key3": "58Fszwd3Ype6Gi3EiK59iEFGkhpGJJeeMqa441AD4bbBCxUcHeuCVDM2qxPvcibzf1yDdW2kBngndUAU1ES51EA5",
  "key4": "3nTaZCmYe8RyNH2j5F3pZ5bNexRJ8RcFs3RpsBRWgwYNzkGacTwwh7s4qFAcQu5pxGgGTnnsNq1FoDvro1w4H3yQ",
  "key5": "4XCiZggUddGu2kfKoJm33kcWSQ5T99WH56G9xJwDXa5XSdkh3cPEXW64hihvnz2838AcoJNe2nNY9WqfEsNdYhAz",
  "key6": "2dxbUtFNWLAwWLjwoUeH2cgUrFzuBh4GV45yWLem5JrAv6ikiNfkTuAQX5n4MLyajNz4cABGUS4pHeAubwNunNau",
  "key7": "5dLLMCxuVvRQm87jrpWAEACNaLXFWHp6YWgPPSKWQ1G1EPVBbm1kUhLjm9JbmDpm3BUKCNQE4u5xzokxHFJ7eHhM",
  "key8": "3N6h8WyP6Zi92LLNy6vLZNBEnjs7T2Ws9UeEddRnEDNM1TSpodzvHoapnSM5pG1k5eFBqV3ZvGVYpx4Dbvu8obws",
  "key9": "1bA3tbSXyQhoLwnWVn2RsmxptKD1HQUxJyoFGUDM7UV4oNx7SgJhhXLp6RTeBqhBrPGqoRWfGJFZzP6nKQPRToH",
  "key10": "fcan3nzJes9BjDMCGeR2YkMFs6gzDMeY7hgmb5WgDcdDJjkKJhVZXsgXepJ5sWjnSZuMno5DdZDrHrnuwPDSQYf",
  "key11": "5XNzvJSyY3fCun4Bq9g1ubuEBcTo2kPDSZNrRuqWRd2QBPhV6s96iDFB2hF2prDZaU6N4gMPwMnxuRr4NcPb4EVz",
  "key12": "5oVg8yrmz6DFYr5TL4vwe38yTKsaCqEnKJGBGD74ogFPCfNQQ3jDcRzjVF1DQb9zp7E2nRUSjRWaM6Aqqn5ULuj",
  "key13": "3dJ2Z5jCtFeJ4abTZ9xwTJKFjUjrdtzDgVdj23yHrhgFCmNaQKyj53kSRYLngCPx2916XzgT2HzCLW8wCm7o5tjo",
  "key14": "APVqVarxM2Ltf3BMVpv9tr26UfThK1UgwsQG298gvz6zyhu24n2DUbJTZLZE5sa9yQb9bSXPYReRrd4JEeoi9Ks",
  "key15": "2RyDuD7xhbBwHyhNs2Xpo2GSnoEsHG2UpXWKCQzM9hPPxBxYYWo2WKoxxcAwxxWMmubscdnseURKVMES1SdD48AE",
  "key16": "5hwb7yGsrinJnM9tYrvwj8cQVdtJuCSsgcjqrjMggSC7fWiuigto2aapq5kJzyTreNpAFCmDJD5JKPmcu4cQqNqQ",
  "key17": "32PMxZ5hhZKmGaMukk8xp1yjESsr7JwDqLyDRT67tQaBS1aLD1sNGdjpQv2SchF8mLjwMpVXLSq8DGderMwMZrgp",
  "key18": "3y4xKMdWfA92MNJSffe9fxfv34e9wgMWbJqvpmeLvbfo2NP3UVHACRdEaBPbEQxoDaaKRasTgyFTQmYeK813bWb",
  "key19": "3hZG3fdiSQZ3m9FzUwWw1R46EM4PfsLhy3McqYk3gZWQxt22tnFZ8DrWBv1byuuPwRoreU7iB4YBnJc8uZ8MnZaz",
  "key20": "4tzSY7ycW2nVkaiotJou5zUvK1uwKazKjdXiMmYC2zUcgjoEJBxobnAbd9x64ADMNzGMh77D4A6x8ojGVEE6V1qy",
  "key21": "A7LsYu2d5NTDn841H8RAidd4HLL6fQsYk2NxLd9Rdv1q1VamjUPd4d1bBgVbpQfu8zsMYLkiftXVn899ECvtwyJ",
  "key22": "4GEvDhN9V5nWQg53h9QaLWiqEtZroFiwiNsK3Pk7osCcQVB6t2cwKvfQLzmyHeZnmqBkAYVN399FNGfStPZMoLQz",
  "key23": "5kFy49VWQUKSxDG5Dwj8quvktN2yTJE1joLwUDQ5D86SC4oeSbC9KXZR5Z1DHTrYdcq9KyGRy9kVWtktALzTQsmg",
  "key24": "3q9VLVb2QcoEet6AzoKjhJmm9mKw11DxRAMZEzNqCQ6bkYwdXSfCAfdYnftgzEWCJisRoznGRKZMWkK9S18C2MDR",
  "key25": "3LP3oS6MgXJnKd6N2QwsB7LP9QJaD34Kn3qQUorhKv2nwDQXVDnakfBfEw24W4DHDV4j5Sr25L3AnBLuTkMc9EW2",
  "key26": "di4EEcWqC5ALxunRJknBxvJCr2Y4tzYchmc4dJtZngdHTSgRSnFwyXRB3769eR2BizKsXuYXpSoxDWoE68cbJN6",
  "key27": "YbevBVVA8ZVKgZM9WDc58B6xTQQ5VPU4QtysneNitmf5Y6kvRLXSY5ZHko4dzNMXjmpVnN9aQFYTzQa7cuDeYeC",
  "key28": "2M74X97eMNHCjJDKBNP7RDvakcxpbCAzUVvLusWZsiXbMfY2mPAP3vunMWCBHF857xS9mBxhxuALKtsnSgeK5LgP",
  "key29": "K5pw9P98PDaU5NT4UofBHfEyNeN4b8bGwK1Wj76Cn7G76fcRqCgWeBhWDyHzez4D5jgSywwBfpX3L31Ssp5nzN4",
  "key30": "1ZRtHxrUfB7EesATQ7gSi41imNX8bxYkC5GfsPnYcTsgRNfaxxwzALVY4rGwNCqeB4QedBXoTxcAFKLhWv45ZHi",
  "key31": "3mVxhH8Ac6kqRDqSU3EECECm4XBA28FP16x1goU6jMBWzmc8msQQ5wgaFnqRZKgppXy7kwwjtBSRojVLqwPUwbY6",
  "key32": "2tYcnBwBrB7MNaMNP41qi1Uk8XQH3x8Zp4JwkxefLfQHXXivmiXcReisVCmmocNYBkuoivPyx3vB52J2CezXhJK6",
  "key33": "2vZkRZPaAvWdWmZ5LMWxeY2XdYfjjxjLjiGoyBfk3UZ9d9cQ2PMmtP7FYwn7icnzA3U8428AsiSFum7cr1qdpXHx",
  "key34": "Ju3pYJvUnXaq4SfJxFo9VeQ9y2tj6mcuTZH8ch1DzqMt3M2gfJvEtNbhYdFoZZe7ZEtmAWcoKs6G4i6HjkaggEB",
  "key35": "5CfXKupfGWTMHeTx2WVLqu5xogFxNJaUZJPC8tYPsoJ3s6MHJ7F5kCFsqZrrCeqcfGXtjhqR8uKevPtSJ5H2c3UM",
  "key36": "4nJqgZ64YQEeHuXrAyarjWwDDUrgBbc11Qu6Q6TbRPLthDuoVDAsbJC9JWANjiVxsDBxHVa1K7xmLNtQYYo4Hjhe",
  "key37": "2DRc5oF5VHoxYBhn5rGRqN13RMJChEhofBeNE9s6kfobTVKHRhu6NSFvyfDdgRZ5ghpncR7EwbuZbRRWEsuXk68R",
  "key38": "3N2Z2122by1tqLoofyKStYcvWmg9FrR1tghXANdSZP2DwvKcrRU8HWXn6tS5nrap4cKpF5hSq4KSw32KdyaGYNDx",
  "key39": "53frvedcdDMnyQ1QEePUx3q76mpf5s6k3LCjsjzxX8Wh97LDPhqEq2BXZr6KYGZBhsvQnoqKRXAJ3rhZinAuNq8R",
  "key40": "4ad1NyQznK26ADkqCqPrCNX8C6Ps12oCReyfD4gnNSpAh9WNSyvq3Z7Tq18ZWjZBZURrUKSwHVPcwRTtkyTPcqw4",
  "key41": "4v8Fe8dK73mLiEmGQLSRsMrqjfpFPUk29pNaf5g8JdS1PNj7HLo7VxJy8RgTR6CtwHgYpgdpC6JykycKhW147qF",
  "key42": "53jAscpFmHz2FK34dBrVPpnrdE8Aq4Ep72NukXBZ4AYhqdS3nXjnS8K168xRUBK6pBmwDYa8kaEVrfzDis6H6gdC",
  "key43": "4wA2UcyoFpyLBaN6e18SwVAdFt2ArjF1cabqrKEPxVmZa3aDDtrY9RCpTWyV53cpNJrv78yXg1UudUpV6HWoDU88",
  "key44": "C2NB8gT9A8NVrAMpf1JDcq6cWHo2V8NsDDRiDKLCJcVz3bc8UZQ3zxdha2YJiyS7MnujYwLYoHngQudfzHn3cfP",
  "key45": "4S1LTaMsB1kBYYcfDzB3GEHk8nxWjS6LpazEd4Bfypqw2f2Pm1SdPwBqd6FA3dYY5Wf2WLXdkRw3ZN8JG4AC69nr"
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
