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
    "Aw66YqZSTsvegrjP6oDNWTB84rnWQT8SfcGqUJTNApQJPjzDtczkdaS5Kriw82VCtGUnbxPHjPmu2gkAbpQaP1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pxeuUGrHqVfsC6rAdQpknaVc1YpbQnV2PFdPS7oNgJAj3yXZiVYJr8tK8XF4wKKLuW6tdbYZmstjWsA9vWwEY1s",
  "key1": "5cw2KNEYCFRdW3nCiMSEdwRHTG1gyQRAuVVyZjL61GiNTWMv7QRCLocBdxXYoK1JiNf9b8RJPCKAec8zVBnSFVCZ",
  "key2": "bB4mz3t35N3kUmSG1SepbtWXdKqbETt4zShVgvTVHpep1XcmsUWmWzswYZts6VxZccMr84SUP6ByoTpnVdqERhC",
  "key3": "4L4r5YjA3noqszKPtDBBnMhw7LPx5tuV66CP8b82TGMHt7Qxc5TNxQruaWmBJ6b1xb4gjsY3LEgb4ZdDjBEfeTor",
  "key4": "4VU4Ye4fjdAsJ7DDDkCPKZUiBtFVBYwnaSWCGzupj7YpSPQJHHzc6TBLfEksvFnNoYZKp5NVX4vfPTxn7fqK2zSP",
  "key5": "3KXQ3JtZtxNsRrC7rRQvSnmMri6rR3Fp8NKV8BNSttWWHiBPYscaR4GCRXs6XWg8oQKmBSxeXpeDog2SxfEdeSq3",
  "key6": "4zvJNY9mXbRDDFJdJHCNVdUtTLjRfWudqaD1TuW9JdzJkVrLYDBXmL5jtH4wvYX7me7TQ9Noten7gSnM1nzmKnF5",
  "key7": "3Rn8ooPRJ8H1rMUrbU6sWBppbCPwE4RRFpjDpsoFR2nxkxcoHptMs8sgPkH4DE3uGeWepLrkfMS7iKdQZhzRUVa7",
  "key8": "2HKAyejxHv9HNfGXogydysR8RuAsr4fEc1pwq4S3GzEeNkL5GhLW2ERpM7BeCimdmu9YVnYdqypyX7rTjH42KxJj",
  "key9": "4KJ9qQjTXiJM8Xs6ZpRg6yQxCi1rDwPGsAgsEWSSHsq8mZcXTwU2Wk4D6gbzc9MRTEQKuCvfsMeB5sHmiKVqffHj",
  "key10": "2yKgdPFWgaoenqwi9KAWMHPAttbXuzQemgs3BfZmTiWUsAiRSDtBKRUvtPv3bWrdwaGhPqQpo6JA5cVyHSvrzEbo",
  "key11": "3RjEv2Vqp7oeu8PZR43GY7mhAtW8MmpSN7qhPbbJaX5TkSDcWZDzQ1sGn1AbfWiRNoc9Xapwkriz4YC63vzdZVTt",
  "key12": "joQyai7WYPBWojLjvKzh2tKDsh17gCAL5srobcgpZ2UB7vYSaEEP1hEFMR3TvZUQNBDwaXekRKTtfk5yfU3svLB",
  "key13": "493Wa7ZiqzN1aBKSuE2yvweNHfY9jVu9gd9mT4yEiX2gGxp2KPRKCimUQpdpPVuFuEWDmZATbdZ4m1EPVGhkP758",
  "key14": "48DqWV3Y7asHBUzgUsAnCbN46supGHA7mSNJeLpvWhRVejTCDpYk7KFHNsT3Rf9CP4nGYB3SxKNnnkvKBy9jiEHb",
  "key15": "Qi7fFRPwm8Wt6Wn93BwnpKAHaLfkU2wgQ5ve61NoRzdsQiN8a3LLDKbHTc5AVNCiMhfcMRMwWjT4ajpvenAptpR",
  "key16": "2LpDZAPVGL8CbUacTiiCZK3xcMa72iEqAyHy1fi1iPD8Eynw11V4nChFzeVGb7ZF99TtykkpQHQnWJtATNdgqznD",
  "key17": "ptG19aZXYqARVvMvQQC5nBcJAhwg74ARMxYRfN78w7Pcfq8CjSaGF2pv5DsvxeMRNbeAW3FyZpAbRzUSkE5eVDm",
  "key18": "5GmbtgddK5Yq6891muV5hi65jo12uKayLJB5zUzR7fkjT1UAiiRxgCKsLhdqLnJpNYxSNbWi9MCaF4oxtvg8Lv9a",
  "key19": "4NG4kqbMm2GX4oNqrze4NMf8yMjnEBouYM8eXA7hdoba1HNs3dq2wSYewuvurLQbNxLmbNnEo6H6omZ3gVvCEw84",
  "key20": "4yaQVdxxFAD2cJ95MAwer5iEHLT6n1VZ6iEEiLpWXdcqKLKRgCY62bGW6QLPmHzEd5t1GHW1qwWpXNrdkGmDXkEV",
  "key21": "2VJ7niUxoSMTz1ENsJGC1EfbJgZJRt8Z3MaeAWhjq1UHzGhNMwZ5afAWDxhRUwjhSykKBfsVJ99ZExfrCA8LV4a9",
  "key22": "3B9Tq5fCXrTNxRNNKcwdk5R6nbu6GYpyZNePQ3k1j5wH8eiZ13MPLqfvndHjY8xubGVEuu87toUUnxDPuj2EQ7Mk",
  "key23": "4epUo3mQpVWRHH9hP7kSBBNc4G6xoVnjXu1RukLHREK1VLM1gvmTiNgyB5VK6wMWxJhRPT6oj3D6UHheRhttxnQK",
  "key24": "2Xeb5qH6B7GSMBBGSmdweWMfNkUb4EwNFUZJAb75aJAv5mp5d9piHxBLNJh1jKDRH5pB7t5jn3FQqPcsJbDNpmBR",
  "key25": "38xnj6EWvBTz2GwcSnZLNkvqS887d9nSA7mWumH1aJSdekTmTCnKLY4sogmsGHfXjZP545SmmxJpVHqJj579tNzu",
  "key26": "jvN4kEw5gV6xYY6czGFRd3K19CvPqywPFqC8haMkCJWvcudfDGCoPfhyYuiPaJ94toSpJwfC9GGyR7QuKqdJcp8",
  "key27": "4PQkCGmMrFB4ebVP6MtwPPe2DKXDMNyJSke9HEM3vvt7LCN6ALUBRTX2jtRme8sHc2LPVMPtDUH3yEmFefcc71HB",
  "key28": "KAB8hPKo9aGBUT15bFZndQpmqtYZ5gUUNctcFJjoSdfffQUYPgMWKsX47hgm1KJghKUAn5wZffzrKx9WDa5mwNZ",
  "key29": "dC3kA9EVamBJp3gspFVQzzGurmwMPrveaX5wj6URywHqZPLnfwFHzFxEh8T7FfBiKUeDnW5KCymp1hHb7UuqTTc",
  "key30": "gEkZcSaCRmdx18JqQR6vx3NFRAuJmwkAQ1UyWp1cmfZ7RgkBN7bFc4MuPL96nrPnJagfq9oAEshmUzmypZ1jjDE",
  "key31": "4rJhsz4wfvWVhVpmHLyqTXXYhqjRKZrta7RcLVEBJd2EJJFx6zKHLjoC363GeyyNnVFRyNa7X7Yr5hon346dnC32",
  "key32": "Hft2h728YXpCZuNGZPt9DNPGnjJV8QogLRiHvCzEb5DEiL5MfbemmDXDy1P7tXJUZyok9QHA8oMTQXD7wQFsi8e",
  "key33": "E6PssCrjQ1N6pVoEFXhawJqM3PmE3bwHuvomngGtfpugshCj4rkBpGFXA6brCjucqp4vrUTLtnzrp4WwbMFKeMV",
  "key34": "dWw4zLNnNW6H5yjnXT9oUNXwBqqNgmwB6mcapjPmWjSH3FMRnmihswfRFzDRx78mSXWLHmfuPCtxQSDX9r1tVza",
  "key35": "3mxj8XfhHnQCwRv5jYegAYPHK6UK4Dt93GENoLVsRgB2Fe9zvfJzXMLB95ns96dgKh542vg5BcBBPxBn91eF6oi4",
  "key36": "4e6F7ovXWVjBUygQrB7MHviqP1VnQst9QxM9GG4QL8MJ5SsqzM4sMxRqZSHYqa576TPxeWEJyXY94BLrnbLwddJN",
  "key37": "2FncNtqSgDXVQ5SLN3MAZrdEcerFG4QEwfhshcKQ2BcwEFA9jNXrWMGTW2SrQnbJyK6sD5UquHLvE3KBAScH9ErG",
  "key38": "5KiLpQWK16Pr6n22nyhPKS7ffBE4AT2E7KxvQVfK6BmAmpoA1UB51bCxrQvxXn2R3qNmQtrHAjG8GYgUL4y3rGLW",
  "key39": "3g1bZbxPSjAwDPpCVTdk8R6bMAEFbSLKbHtoGwn9qyr9bhujgdTCNd8TvHdF3bkRFXTQHn3ZtzLNRi5NaSdkP2Zu",
  "key40": "46nUXRkuBedtFaa3n34H42o3L7KbZ57ghvUbFSRCW61VQz9QJCBLTti6bzFRPxv3hnAVKkNMY91dAMA3GyD1vfiz",
  "key41": "3jSCUWi8RMHU1goprvpCVc8hptdiHCbHRjTsd7LoHjUTuGW8BUbgV92AhVNCmzbGKbAWLpEjHcDCR5GuiYWFDMoe",
  "key42": "opGkQqgTaxLXr1ddZE9w7sgoAGeFaVKLc7MnRxVzrJYAstVrGKRWCJcoqDdodkbQDuaUEwSpt1Tq5AeaxhpL74C",
  "key43": "5Tk9zvmNnLsjvmYVsLy6YWEBveV6b9J1SMhABCWNtBJPoMPjiPJLM9apFfK39XkwPWfr2WLrBTBWq8RqVD9mMhY3",
  "key44": "4AZqD7eRNwdiQuLHZmR7DYXKpBh2XbHV2XbUkwoU9cadwd2n4ru4A4kojJ1HsSGh4i1VewuTh8vxpWtS9rHWJpRH",
  "key45": "2RXX7gVCakxb6aXRAcBPgMXedjLWAp5iai3FSBnPYpBt3RmurbBuwvjzrBu7LjFd4G6j6yhd99P1i3ecyUBUFmxR",
  "key46": "3wrWQij43egi4LJSXpefmhX6NzR5EnrQJFLC2hw41GYeKjSkPx26xb32cAgYj16Hef6bf5YvWMBeitbcetmz5VRx"
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
