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
    "41GhBzzjZg7gwwQYRz421SZvErbpykR8tVx8Cj7TQtMJbpXsbpxR3sPsrFG4rUWzxc4ygYhy2yeSswvqy84789Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jcaj3CVRnVwUy9GcBEAXTknfV3UN3eTKY9vVrDPEgFhfLwkpKGEWHwJqFLXvyCbX7cXtBXq5zbjnfrRKz9dQNHH",
  "key1": "5sy18ekKkuQzL7MWDsChAQqAoNfvGdb9R9YYqDQMDcR7qyvxKmTnoctsbKoYm5g4ustNaLRtkFoe71n7L1shkmz9",
  "key2": "2gbytrZn87rTR9y5B1HsWNMcFEjWQhVsgYYTsu3QdbwdvzycSEUTC8rsqg8RhSjegZTNtMivT5ekYozmkQd2xD54",
  "key3": "2XjfjjHSPBtn79uaXdTvhjy2BRMbQACgbLjppX5rZuczPYnRJnM5mch7qnWb1kQLCVKEnvDjNXrcRA5YtUhSiSP5",
  "key4": "wDybgUzTnj4RnoNdYvKg2P4skchtHDAf6kk4UB3Qx2yzkVW3dQJL8uYeBJ9aEC1W8gEooUpDm6Vcc9CJcTyyrrt",
  "key5": "65afTdSu65nMi7JLW6tRKFtNxRdFkU4C2WRK13nQHNTYDaeZksnXJsaKBwc9anSoFt5QepxCyRCyqRNZkxfGJFh",
  "key6": "5ybkdSuao1S1yFep499mRRWktDVpbnef3g4PeReAJmjJUT1kwzeMZsoTW2CP27PknmmhhJgtEjLNbCDwGBDj2mHe",
  "key7": "5R8PQzoHN13nRGUjBiG4kQDjb8LRPFfmbMqc3NMfpPWJp8KAFgeC2GHBV7g1iT7Z5iVEcEcSrV7K3msdgHrbBiFY",
  "key8": "2yHXdjXb97sUyEVx5LpDgmmKucFwJWwWf4ohxFVySEMr5EGa5CJQnh9skZ8cadFXgeQiZX3cgXWCzJuVkn1qb4K2",
  "key9": "aw9Kumzr2NYRQr89SWzzjz5aAZxzBGKanMVDbBYwRTEN5rQHNJnczY73CYugs5cqt7BSSrLuwXYQhnLzFTUmD51",
  "key10": "2vX3zy3YM8yUEg8qZHfjZ7Dwmum2THXNfoNkztjU8mgsEWNXnat5a8UCKFr1QEC7ypfA3Kan2GqiYqDh5dcpjPJQ",
  "key11": "4oyqbYHPL1g9pwZCifSdswDbpmRLDJn4mXwRoiyewbtTVp7w8DzmzXJb9zN1vM4hXj1GwaxqJADPzuGjjHnaGg5j",
  "key12": "3vUHaTrVEba3dwZC6mUnfun9pNFGpg1RX7WFiWQeZW7GbFAHkSn8PVXraNYPwwJrf5U3ZHT5gWELWUSqzyYrvMVu",
  "key13": "2iUqhbXUiU253TyGgnHsNJSpx1nJrmE4nKtHtd2Yhxe7R2bSR7nMTQhYr2RTV54f9yvWy3a76BLvdmvqT6JmQRkm",
  "key14": "3ERjS7odiA9Z938hKXmakaoGWvMVdCUzHnVrTJjvRJzYuPL9QH6o5DRw3KJ9DyGBPWw2Vr8AmVx7Cf9tedXYqjai",
  "key15": "3PE24egUazDBbgaqm6gK1X31s6MFAeVfJhaYSavjVt7ohgT4qRefirmBG8So3Uo7GDcT9zhUeDrRetussNXeS3JN",
  "key16": "KK6p7gw2wSwKxLpUjdPs5Etn8dea47gfsH9sQomw9bA7d4Rdo6fG9qe4oiEKmqvA3UbTu8WibkCmp8jQMUJkEiB",
  "key17": "2eCGR9N572vAccnbQeVeXuF3WiteSZpDUAYfrRKJ2koXTzCpmBUckDu3Hc8rtKT8ywHJH8dJqvJfhC8BhYP9UZ7G",
  "key18": "3fvNc5AoxKj3s9C7TY3EQLWKDSvST1X9ky28RGTgjwuvRbGvzwdgcYvsbUqB5T7JEPoj128Gg1VtJUhCUXfvuNjM",
  "key19": "i1ESUxSNfWqNXV4hfGYpmw6fMF5h9k91dhXfwnpD62aBtniuizTNt4owAeVh8byyVU3WJuR8qBamxdppcfiQ386",
  "key20": "5bZTvWvSebhYW8VNrqacsXxm4Wxtm7pLaEiTHRfCYq6GgZGk7SsLccZb5fM3vewxzMVRoV1A6oq9NXyA7jGC4ZGA",
  "key21": "2QYkR91cszGYdhB1iy8G1q6BFBvHvB9TJ6RHpNzKDwZgVbP33VhvSuuHKh3ZGTA55jY1A2fct4ojYs7v5Ejp5mzy",
  "key22": "3cziiEpqGKubxxpWUc2NF9xSHDPoCgwJhonG7zAxng83Mzf2nhYMn578Ub82y4y6DioW2cxgmTrLRCj65Zk83ygn",
  "key23": "52JDQbG3Sv5R16J4AdtJcaz2No7yeyUvHDpLdHet8XzXwyubDpuvGgtqSDopodtszbRL3B5fBc5G9httGpfvDQNS",
  "key24": "2WuiQj7YU5dCYDtpGfYSxzv2ZveRLvP532Y5nzZrzRYHU18riAfP5mhzVkW3idhaDkGXNt5CsMGpmY69gsQ1eyhF",
  "key25": "7x6GuTQW2CUZAbPWoQyFCAkxkYAqibnAVJVPKjcXmk5FLj8FNoWEmZGU4aeUTLincyAn4kCT6aKK2SLHaNtUCyy",
  "key26": "5aDEpJNJsFRMuXuwEJSWZ9zYtmyYUG3fn4ALgvwikuSLd6wMbSs64KK1uJCQf96tn4q4GRpSfW6DWdNmN3YFkp6r",
  "key27": "29wuRa7du9FYRYn27ArPAKgnHezXx4N2reFwQfyG7rcGD7n1Locf155TMvRoHuKDLEo8sCxEgCLgAE6iVk6BnxGk",
  "key28": "3WnY8S78GGb7mHum1VovDzS4ADNT5DKRHaPcFB4pDhA7gRpFs8gwhx6WcvdR59nuoMmgwH4ZPKw5xBNjiu5WNGXL",
  "key29": "S8Tde3w2bSi61XzdYVVKLNms7hcRgA7Lqd6uVqdkSpXvc38x4cGbAjA3VmEuXQzV5xk5G12GBx6w3qxJXJ2Qc3h"
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
