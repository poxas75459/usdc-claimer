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
    "4xfqV2zaRT8crHLCCzxyRcaZQ41n1VdNPL3SYt5DKHWdLtBE3z8KoGV7DXpVffrWWtCNkPEK9rNr2MMm7bCqZgLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wb6aZNwjM3xhF9Nmv2DgsQQND8r9juzWGM89ALKVryKtKgvx3u38bW8McgkxBV36UUKJ9vKsy1HLnSaKXMC9LVX",
  "key1": "3XRoDt1ZmCV45VeyRj5JtqcogBMHovJSrFCAZwBcFWHSTdgRuYm9dGsdJGHveNJxVw7zfLJ26MYZTt3pfR9ymb9P",
  "key2": "3CuPATDoFcSfamaW4BkmgBG9PL5mCYx5R8SpPb5wGsRwxACHJgguLF4HtUbLrrjaBJzARbBxsvE4chNoghqc9xRN",
  "key3": "4JBEQhxcw4Dpvna7qKRf4hLYMXeMpxEryuM79YKSNcSAAWgqDxz1wX9PwuzugTvp23okqy1DPGAhaZZwBKbVVbwP",
  "key4": "3icBjBTqWvg9VivjWK1twQ3QjkaqVVhfvmtrjzWxpA9XxaBivGBwPNxzYdhpawsPxuCeMVPHaqk5gvaEBmfEPZQx",
  "key5": "3fkvph8rZ2WNCGQYm8KRv4c2JuDyxzW4CdwJmZH2TDppb3HQvrhuzXHXHr7AidVH1AjGwY3GBSEVh69LcDLheSB8",
  "key6": "4CzjoJ15Hmc9yvvurFac8vFmZUzzfiQ1bzS4AtbXWYYrebRHJrSKj1jsYve79bna3owEF77WzXdk5SuW36wd2dEW",
  "key7": "3PzmdtMh3Zbzz1iksAVtG2HpCRFa7LUe1fhNDmA8LpfPqKTno9CK9F8HcTZJ9eKvEeyoQrBRjMtXcqZGK37Tpc47",
  "key8": "3sVVKzfK3uR6Z6ndztfJKcwgembY5RRUAPh5VtocDUvxzwnVfjUKqcDyVbJeVDH6eeT1CXRNZ44W36QdfV4P28KJ",
  "key9": "5eJief5bAUokmbUJrDbezSuHA8cqNi1zdoHEF58aYt3ketJ5zEYKYyUfYUGZVYB4kmgq8bowYHLB2XjuwCkFiCJM",
  "key10": "5hVG4P7g9moM3Kp3qtY8W6SopmkdBRnyFsUq6jc95cmY75pTdBABS3LdyNHvfVKtB696N14y7sF5iNBqa36Y8x66",
  "key11": "37ReNNi3bYKerYJUVKFarCvqFgaubY6bTa152F9bykth7jvZRKxTwUwhFBfwXbUG7BvxTPVoRiSkMkXrrSwK7Kcj",
  "key12": "4q3f5TmVn71fRreLB3UcQaBN7pcpFz72CE7zgCa57kiYenuTS4nvFnRt8JCGU2tkow943KpvsKX5tk5WX6ADWtq4",
  "key13": "mYnp7sSn9PaDUwXT3b3RpSYxC8xK349PHoits2U1DWKxtoTmLTF2VJzvGkF7CL1u9ndAkfbrzeaU3nF7e8kU6Fo",
  "key14": "2kmmJwmYWThetQoWoxPDh9tb13DEmXMcTPAuNUzXNzr3UXQVbjX9AvVje4JCrYG7idpm7z6KgsdvF2AreKV2tSCb",
  "key15": "3LBzrcbUUUTH7yWLMEGnZVbMhmN2qPxNjUYrrbzpjS8aMCA1TvfgAWL6Ws3w3ZAGgJk8TzRRCXoUUXQm8tErpWEw",
  "key16": "3BXN6o79QkD5FpiASAv2tZCYNuySKmawfYxe3JSCe36h8XRTgPp7MA9BthBcRjvfebMe5ExTNq9LuiXu5LMBpHdH",
  "key17": "3tg6LzrM7oUDj3414TSk4ZFrPbSguAhibBBpajD7msETGsvUi1XMzviGqm7APprdniKwpmejNJcVGq5TX9ZNuBWg",
  "key18": "8yaijjM7TnK4wiiVnNZAk892mJDFPyd76HHXWE9x7u8UACFuwpeaA51h96EaKaNw9QDDPLA7rHH2Lu9CjU3rSBU",
  "key19": "5DDdw8RFGzBLqJ7nSaL3fDkwzEx9uVRdjWHQ5TodLp4xviLmFvb8uT5jtVi28TxU5chkTeqe4QWTWbSKjijh2SXg",
  "key20": "2C8HieZVNne4zZeGgiRT8qMdYawQQdAY2z2H7HnHhXhsaosXj2HG134aPzV6od8GLvBhkM3etPwk42ZvCseDYxw2",
  "key21": "531zsNaKzxKHj6uJd6hpgmgV9mMqiG7exAZHKttzhp4erfBh7ioXgHSweLpDbuwSpGo71NUQJU15HZBtnzpEuGv",
  "key22": "4by7V5P2dzUya1R47Cg8SMpopVvqcCsJdeyf6KRCEtUpECwYxwhGkvXc6zLdzstL4V2DcPAXMDp27oBuTbkQxUk",
  "key23": "4r34aa2oukVKmzWfq25H8FGTvdv1rns8fwMQFxbxJ9Sx6bdVk42LAkiLbr58Jx4yYjsKsZprTreusYC51TSdCJfW",
  "key24": "4QtvRuBdSR3Mkh8bntmwy9tNDwcmiEQxib8BmmjRbSwNUxfP3Qx9AiUeY5tkfPaLYzsZQPw42tcLcBcxmPNJAaQm",
  "key25": "qP8DGRqg7zmpKQS2FC9bEQP95ZoyWNyuXXEj7tYkQPJqBU7yP8Cwba3qp4NK3nPyfPDgvVCwnnHnkcd6WabQubj",
  "key26": "3F3iznDxo4a2XRAzrwhKLDvAgnf7dXQz1GGLVqSdoSWd79haepGYNnsiJhMihBKtJ7HDzfPQjtt6YQGjpXxHGK2x",
  "key27": "QDWmDTTJq2bszJvNE3Dp34wjqtNHngjLXcbZ6xFxxdESreU24Uk1wnAWiNVwmz4KiJb9rb2RTUn8dBkRJjtkLeb",
  "key28": "5GEv3f52F8pLbgimfbW6vh8u8Nm7u9ijUBKxiGY75DJMHKq4nm7ZKvoERaHYP8Q8oFxzFPrCCNWbpFDGBNji6Sqs",
  "key29": "4unYV4eneYbRd1ETnth4d3zNSWE7QkqUzGJ4Lq7PaVf233fngA2CAqsBsn8jbPgtMgvMFawe6An7LaW3NfJLLbgX",
  "key30": "4xBEGF1T2dqGvzbUSDnJPZx9a15JuXWVJFLjp9ZhVHhWu8QsBuiy6KnzX5rwsuJZXCb9oa1UpGFoJPETzCy5qs3d",
  "key31": "Fzw5Wt55Gp3WVrkgLtPZpWnPjCE2m14yZQs3FaEaSqCaUnuNaiZU8NR61im22piH9XSgKjTNwSkTJPqGBTYBbbi",
  "key32": "36binQm66BadWZ7jog8gCki3rjtSAzoz5tdktRTqjAsxd5WKBkRFCEojhDEZF2hENmnmDi8g2z6aHCS3qEPmBct6",
  "key33": "3LDDr7UVH1TAYiQHQK7kpyY16HJeoeQBAZyVidMpeVC6p3P8dJ3FNreugsBkKAfWNn1jaDKqqkvpvyPqzc3RRqwn",
  "key34": "2Gw3kLU8jtMbdFSy1qhbajQcNhGpNg62XDxPPAcv3mGKo6oRzhfE9fJq1ywMms8G9APsiNa58YpkbAZWpbLwNQfV",
  "key35": "3AQ7FyVwcMrwkzfFdPosA9s3NGJ4txfuzG1vP5NgrPh9iu2PmMoKYbx2GajinKhhvCeeeicxZTdtaQES5vDLwkGH",
  "key36": "5ciPBxGMpqUR92astYjfYpwpueGyLdN3vFM9puJQiuR1Bd9oqxUKR9AANcYXRCae6QMV1PKvPppaA1DX55wkVkwx",
  "key37": "49pxYBCocxRzEssTu8zkqPYLu9fmpty7EZ88ZwcUWC7mq5w2PCz1v5RKCxgzosRKec18GTCTusB7QeGAgvMYgvEQ",
  "key38": "2nuQzapCcJ6WUDZVNADxNZfJPBUUcj1hJUnfNkBAZwv4kJqzw7M1iBxiaFEYYVUinPxz6L71pK5UC3irm6HFVgGA",
  "key39": "2M74CHegCiJUpUZc8vaxG67JZkSm4Y6Sz3PGnhKT6ncqZyYQGtTxXbE3qcxi1fDauXdya8VjZFANjLdjetMUJGuZ",
  "key40": "nQAkBMWYJACHZPXwTy66aD8toVrhmxQ1SPKGnuyY58X7HroUvp1ZH3qgkq5F8NfNUgNTgudPsPQok6eaCU9oaWZ",
  "key41": "GRom63Pg8ZoKrYmVcGaJLunFggDWVa6McZzHTpBkLNyTmx9A1kjjuh4eRZxiLjFbov7DVHJwvEwYeGBYys7rY8G",
  "key42": "5pd4NRpKtWpYBn8eMKi43GVzYvfeTsetRf6uhuNAswbZCvPS7y6SMiHzg55oU3Ky4JFx59kQyJk3r4Hmtspt8vSf"
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
