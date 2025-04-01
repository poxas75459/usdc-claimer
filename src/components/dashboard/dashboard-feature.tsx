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
    "nfmWnCJP9963M4qVU69C3A2vcCVEcEb43BdzStd5LRL7vJ3jmwjq6P9utyLMvB3aRMePGuAJqyf6EyVzRf44cd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5KQKAoZGqjG2w7cez7ae5seKkiyvbnB2q3A1HUJFn79MoKcnNzttPZm8yAcKCVaSi8XjmnL7qUnqeih1FfQck3",
  "key1": "5W8VHc5uVEu7PdsVDeSkCsAtJqzmkfLa9u1h57nHvUcE4G9PsaKysLxNBVAabDSMqo1143h7iFHxZhEAjMfkbS63",
  "key2": "2dQqBVbFBbBeMcacJL1hr3XFEK8dM5zgEzewhc21TFV9gZn2phGuoG8nUXhQF2NDFBMJENupPvhCzvt3LiP8JoFv",
  "key3": "8HKuU83HbLaZLfbX5Mom7EW9Ncx42uS1e74SaVKHqBUVpN4FqoNKrZPBGG1dL8teRvY6ZVuMtoNv8Qmm8rAiR2o",
  "key4": "2vGuxqvZNEVGiqAAuG3sXWifycY2rWXpMbGJR73zSW6DV2SM8sumU2SGM71rhK8v3ZXnL6cYTDXbkqDtAiqWuATM",
  "key5": "3Jb6Qn7TBqiQeN2QM34MxWBvwQt4Ef8bi2BqvjHvbCJmt3hbc9bcNcyfEgFEGMNWyQ7QpmfjV6ywNn3fbBQogb45",
  "key6": "3Uf311DSUAHfaBa6v6LwkEGDGsiZ1ZNuFCfrE8GxMR8NmsgaHhwRDvb2SVpzAka1y5qiHQKncAxRNLX4YawNYxKK",
  "key7": "2YJ8yhdWunnPrpBCNdtRRCCjff3JDRnnywyhKbNEnTbMA2KQZ2AJuEG1KtUxHQEGbrRVX6GmyAKKHESjpaj91kXy",
  "key8": "8MQpNUbdw7VN5MAJ4LHihSU8SYKsqgUrmSxL7eB9PTtus1D6TPbQ9NU7618cxkLxxsJh2KRZYoQCV6taTquLPRy",
  "key9": "W5ZWFaQXKDft1k778dLULuDzmo1ozev3iF2JMoqgtNZRz3Ct4DgzVkF3YE9vMLNbtv6vigF7m59M58S2Rkd3VfK",
  "key10": "3PXigjodo3Lct1vwhWw4BKBPGi3TTdBx9uZYgQu7mfLPvD8AXDGUXuZ1qq1giUJpMbtN6HYU8aR4g9UoCLUa9pat",
  "key11": "5ZaAWnwq3CSDn5L3RA9t7yFqWTWphxArrT2LrLVvgxu67XHnBFEmQwaYYnuvDJmTwGX7FgT8viFfF6Qr2P7FAFTN",
  "key12": "5jrzZbtpNfFwC1KQTYPN6rJFhwhbLrCa9ByFjTNkAAiQH8LEtZRUrCDrErYGi24WgkACZR89dgBygtJ4XsJajvTr",
  "key13": "3f5ZRhzui7Jw3UJ28Up9ZARvRXxZvuUW57FsHty4X1k2WcMyY63nbTw92xLbMi9uetu6dh77z7Ghzfo2nssUKRwa",
  "key14": "gjTwBCWhWmDEpWLHWAL7fLhb3JMRhxdKxpPKuYpyYaJ9Cff3cmcKyeA4DXchH5LxfC54HMuMPyq6ZbRaqZZKdqv",
  "key15": "3BZwaxXHNuVk8FbGwtaCDGJM3e4kJusmagdkEWDvZydP2csmdBoH5mWkEEy5mG4UUPafP4SrLNejvwAEnUiuN7mh",
  "key16": "5abzh6UL9aFixhQ7hMC52RJDNWfaFvDitEJrK3tyBgo1yz9bneZUFw2iU18wNNurNmf6XQb5p3weA2Aevt2hG12L",
  "key17": "3gpVyR7ZudYQjR31DBZePUGGyRFSrNSKfq9WfjVgEbrF4e42KTwWN9ghprtZCNpZkCyz5HXWxatdN89WQWFD2T5g",
  "key18": "5wxtdVs6x1TSQqDcxsfmbFft8dGytR7jwu3NJZs36MXQ5iBnu6qZX15jB5NK3CwSrnL1L8dB3kjbSUb6UPiMQf6g",
  "key19": "43JjbTt2eHo8ghQJGALDn2LK84me7eAVK5YzPCMAfdtJ94GBFfZHPGx5RQu8mEUG5vjtHg2YYqebYcjmbRDH4Ugc",
  "key20": "5vvmKyMLqEwwHmCP3HoVNJqBhv8TfuaQgNqmb4VmYioaczqnnAhc8AUVZFxqYthWDmdpEopBJcsu4AbNxcwmM4tH",
  "key21": "386Kx3sQCjoDFTGf5wU3xsUpi1jbif68ZbvN1hvqpcuVkmNX2TNdc6uHiY3GrwS5crSE54F3F4hNUUTJ3uPrKUVH",
  "key22": "2s7QJRwm83AQs6tn1ckgU15K3kd2cgutUPvR3ocd2PiRouEqZpgcPvwkUmgLtjv499vLzsTDjU6ePjz8etayguqj",
  "key23": "5GNYneN6ZsxSSUdU1xZLKCYNotRCR4r8SwquCk7uxkGQQwskVveGXkeMkftd5ZRje3BLSgDVEJtqQceJLc6r7dyR",
  "key24": "2YuebCvd5hgT6JTH8YZfzcr9A583v78VDfrF5NYAYC81nbaSRP35wJYBNzKT7uD6ZGPtZ9bH27GtjGoTAbxHV4vB",
  "key25": "49F4X8aExUD9GChHnB2VNi5TGxwAmk8qrVoRGtPzjwek6qeqUa6Qajs1UgoLAik5PZpjhnhE6BW4g6aVDZ1WtFvf",
  "key26": "35V39UWJWG8BpT3smiaJRtUCwiGn1pjPzgJas26QJUQAna4eaxQU4TrnkDywXupnHcey2pr1shcqyKc25GUaVbgD",
  "key27": "5iXNRGtDEpvSn2MoN6i12xBZtqroFzrqUJhFT1b2KrcjFjsuicSBFDqjsA3UxPVhG44QTZbQ6Mrbmdp4YNtycvg8",
  "key28": "62enzWt4GbV5LokBTMMFD9tW4ts3iDVK86SheUsdP7495QzfKCVb2hhaqn53Hou8Nn4c65cSFttsfoJodmJzPHpF",
  "key29": "5N6gcU9XdD6hVNNF9oiSobExgR5Gr8QhpC6q46QvPVEqdLU1g9bDrZS318gRgc9upa2gLJd3DVJkkky7gMPuPn9R",
  "key30": "3KxxFguGpGAdmhMCEMyLATHhRGwSSZuSbk6DSfjWjVhcHCY93MX6h6AswWUqRioQyFeJELNHAjEvSAMcq9PrRc8M",
  "key31": "jnHoQcdtXvqFa7bsYouWAuggft8vZB6UpqgXjpp8jfMCGiYFowRUyD5AC4E1rmW9YWLa2CfrSTw8JTbvvkKKuyM",
  "key32": "ogTW5FDxoB2hf2Nsn8o7ypNXWuJPwryyij26npxAFcxjgdYPkDyHLJAKqsTFawVhFnnRiXnzu5ewgiZSxpmSs2i",
  "key33": "5YrwpaZZBcUJgHY8RgjuoGbE9yfrbiWuPv5zFpou3juMyHXCDuGJ4VWyfmVd2mPPC6QUNP3gahw2xqGLErPGW3j2",
  "key34": "4zzMiBimQJwWvmk4g8385KedSuAQksEGDdwN2aVBkjTDnwHnvR8SaFimWzbj6USRnHRj2z55okt1Q4UNJ9pZCkW2",
  "key35": "5x6AuDc6UZpKcCNP7cApR3zakzDAUrjkJPfMZv3EZHztUkXXWLun4hNMvBE1Uog2wq4ySXdJfANmA3K7gUfcr5P8",
  "key36": "4jpWdTSJ8ivu8MNEoMETQcrZeRJuNmAUYvfH9WLwjQ4M1EqP3mPN2g8Y5XBjiP5q2dBQtGfLWuBdBETeYJUHzTrN",
  "key37": "Ep76Qxyy4amHmMPV8hxCgJsZyucvP3pGWT85WbLevEM9x4KEKpmjfcyXbVYsogBvGh1ihQ1mPCuiFweMEYbGaWB",
  "key38": "3cUz3hFySQh4qNBm8n1fE8T9UKBkSPTbtcZDsvTH6JPpkepUPtBqHje7bHZFdKpjWX8CVS8zwyLVmmWUFPaHo8Gy",
  "key39": "439YpDEgxCtTdwv43DZaCowaMAqcft11naZohdno2gqGRHmQYphXTPVPFMRXSiELpob1eRWx33aoQ64uFJXZiUg2",
  "key40": "3SVmD5miVs6XM8m6AknrgiPsZP6tgLN2oZy7bNZncYHgqkPwbusRuvPyeqqXXD354S5FwGsDHWWhuiPCd9QQk7Qv"
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
