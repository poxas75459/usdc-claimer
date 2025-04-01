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
    "4gpbnr5PvogffE19FjXLU27MDX1qoTYcYgF7tV7KBWTeZh8pYWF1tdvpXhaZDRXYCQ3M75mw4fNr9fcBiNNu3LUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xpPxRby31qyYaMgnsu8Qd2HKnuWtUvqSya5vZRrcjkzeEoQMCJcpZDiSYeWU6PjiAt44f28gypk5ZRnMcaeBZVn",
  "key1": "2Vp3ZNaG9wovZTwky1zRt8FNcEGeWdBRg9K7urEg73VstPRRnwziXS1ber1v4XxoPHF81PywRamiHvV8ukRT1Fe7",
  "key2": "5gg8icSNhj3t7cpnRA6PyDuwQE3SR6WcGC85myKLsaAdb268jeK94h5J4uX93eWZyQFcR9czXa26eEEcHZtaNQRp",
  "key3": "4tPmtAUFm95u6d2z83sAJd2sHNjyRwiVkeHygnBoFRroMn7Li5UZShd9r5fugrABCoZxTJhvXZzz7Wj2yoxXgZHE",
  "key4": "58QpTFgASPWp5Pbzz56AfPTu5oaeAjHKWuyCZXw5XzEFUmAbAj4g24aJRdtVwBM7RJoLZ1xgaCGY7Z4zAdEzo83i",
  "key5": "3aXHU9quSx7wTVcbYBD6n7DLMxRnEB6bxvmkMdGU5EjKW11cFgufBDLKCQtyR5kNGX2rMXXcpAzDzCJVZEVDRNsU",
  "key6": "48kqM7DzmwcH8WckrSBMfDD9Ey1mHiufuS9pPL7Co8Ft87kEPcSXLDjLykUxG6cAGbu5BUVHHxcXpse4RZk1T96t",
  "key7": "5nsBwBTkzJ51cVPYD2xwXYU1pczwnbHDJGnw9hdD1Ex4nKCXMXyj7m9fN1gJeEgYjd22ZinEE9pknBEKsHYqqT3A",
  "key8": "d3eHvpVbHcMUE5sz77DrCctTcqcTRtKAMDCfZ2i4uYiLv4FHAn1Awma5X5gq2ERfo6Ma9zXZ42w65h6JhR21ucv",
  "key9": "4XNdxsqPh4kjqbnf94pV9MyuBh3TZbajiXK3dkMiQGaqJ2iUGNr5fzKDESLhiRYaN2uWWK7SxVRPgjT7LhtubcWn",
  "key10": "2nBGeTc8BNYzPC8fFsXDR2LR7StLZLHQUhSNQiDZdUe86GuvUfW6B8ZiCkfGX9CmdbD2pNoDgh2JM1CwYGR1ukma",
  "key11": "3RmgvWEuNT2zRczBkegmw4LWrhSdM7Te7K4unftHdftANvXTHsQdPPYc7WY3s1ekYsCjDSpcGYdHR63dH6NUfQBr",
  "key12": "2fCsoxAJ5yEjRZVww8yrBdAvFEVC7gamM6kADfR7Q6UA8bxVUgSdjFixWDFijHQ6RX7cjpp17XrTxENFsoniZao8",
  "key13": "5GmraJVoiAmPiuyW5ZCYFNcyWK1DJS9rGmuAGz46H1xV3RFwFzuN6mb1vMqw9hQUwtSbpk3BZPatMZGSKcyTU3rG",
  "key14": "5obEsq3gyU3X1gjR4kBY9ApoF4TrYmLz6ED1EzUdnuoXqbh2TakHQvEn9L9A1w2NDtL5gycCWqLrRpF3JzzAF8dk",
  "key15": "5gv88YxbstfnKRPe4YdBqBv9Rx6s4qtajo71cGTVHE2Met4xcSK5Nxvpt8u2y6ahmY6WQ7vEdjMaXKR3cy6G9rTZ",
  "key16": "5KpeWtMxwq7vpFth7brnsVmrCp4R3EhHKSonXVPomxnk2HtwENPB2HXDooTSX1w9xqFi8AnA3eTjYAYJHE5DqH61",
  "key17": "5tfv8DJvokQgp6hLjDruAw6z4VjkFT53upyG7a3ZgUwykuNrKDHZt439hhtVsoYmciMKjybBvwRzLvG9aEDk6zi9",
  "key18": "3ecPGBBvNrWgvbJQHey7hGAmqW5jVQ8yr8qbpzQgibCTY7PgsGzQyiU6DR8qbaPNB2kKZAxH98rvUKDb1r8oKM1k",
  "key19": "2aJE5Ba3vqcC8JJXQhc9vkA5bMnA6MmY1LY6drGsSSaRaSeZLW51rAgeLqiSbRogsb8tjGqGQLUfRtuW2MH5iDTu",
  "key20": "5iwDwLBr8UqLWrcp4AgA5wq6PvqUe7F7HjvhsV5MaJEXXJ6LkciGY63owxAZQugT3qJucFzqhqBNN8y21K5snUaP",
  "key21": "62K6M9rSuNbfBAEKF91oGhe8VrmnXHuWYuTcSDcUpfb1iivD9BC5VStArD5RAPib3dPyKEAfmAW3xNuxetdBvfir",
  "key22": "5QRsSa2V2riBMg11wUi72x9mLnsMUTFXhytH9CWykv8qHVtJ45wUBVv4oDgZsS3VW7cng7mmukQGDQpA2SF4v5YV",
  "key23": "5SPJzHwafocYxn4JQAVNjj2FxaZAQ3zSXdCAYiyTnHPQ8eLP1n3RNPp8CWEcCdSdvPAbs6ZXq91YUeUFfUXSKKmV",
  "key24": "4Sx4jQFPxUdCXvrkvap8VZhBT64u8dX7Q67CkMkmD7ViSkyLjY35g3zV49fW9b2aCijyZq7jDNHYkiQUTCbsFW4v",
  "key25": "5xcweVb6QEb7a3Pch5zHCWrppvYRiZf6uiUSJZoZ5SxwcvQVPjTwemsF1dbtXXcE8STSuLQ2o1AKviCsZsXrjQ3G",
  "key26": "4SgBS2MJJ6CSUz9nRHnRxzLcTzLUh7nJ5dhRcFUyKYgo4jH9ktvMdZJ7RCdidBiqyV43H85g7smrR2Hy3xq6qFZo",
  "key27": "2N9RgjqxBijpikWfkwVea2fzBTuRAGeG5o7F9VUsN3aT9AqEfmjLUENSZPMXHQeGJmqw31t6SvjHUrxuwvtYzVxV",
  "key28": "33zbYEqDPzy6Xthiym8iYqgWwbcFbvTvAWi223P2tBmyEbB29b1rJGFsRDHLt8w588g1nBYLFwWgeMugxwNaqH1X",
  "key29": "NERxitZdCsx7E3cmXJhWWjLrfTJDEibBKH1ZjnXzKKHduyJ7Gny94SNTSc9bAWPFxosRbVpQqaax5CXtzHJNJ8t",
  "key30": "YMKTj6MjgmqikSXNX6QQkzbkEW5ym61aCZb1Cs4MHmMBiXyxeZFH8Wo9QiecrjfnqFBXcoUivJfBWB8nw9YLi1Y",
  "key31": "5RG7DfDScbEqeaSJobTZwr69NG2Mhci7rMkPsAvptjUCpRpSpj8xiApZc8Dt44LmM4sa2GQFL19skhD5RPKR1BJ7",
  "key32": "4uSuwzptuR4TqqcHM2bHL4JZpxpE7Gsbht93AtdJ8WGZkv2236hv2kFCpSVpNnHKhMdSMRLSa34oABseTBFPNjFR",
  "key33": "2rvVvxLzgu5nSZviDukJZhUQQrBfR58pgbpJSunWSrfiDt9Ltxx6fcEN6JepvvD13nMSrQYXnh68QhfWPqF1QiRz",
  "key34": "4iHv46uuwYgSRo7xL7JJx6QrpFTKuMwyL1qyELcKQziPsGhKawmAyN42bJZ4zQG3G9KuWxrbzSswyaf1jEvAeTQX",
  "key35": "58VbRgNDnnXhiu4eiuWX8SXHDQ2MwnZmVsnLP6CPFzZ8Sb5ydiSvP7Diu8TeeKtpjfNkoinZctX74mEXVhZXk5Dt",
  "key36": "evQYSbPRhHA9qMfJ4bbwYXm7qoigby1tedKcwL3nMNaLbidXp8EPKEfjZfQirdd2hLKsuKk6NLHLkB54SVRgWaC",
  "key37": "2gUu8qjVEvDjTpeE2gthiqfbJKjwATwKKtRH8sngHwAiTYSYUygJE7okNLQJjtmM9K7ukXy8y4y9g8yKxKWexvEy",
  "key38": "3yzkNTka66amkwT1JbZWV6z3E8DJNAjfvF8ZAUUZaHKofAgdKLCGwhHbr3vY3j74sj991wQo8eU38btxJeXREaqA",
  "key39": "3VMLgpZAs3WQQep5yZL5uHr9P9iUCbYBeWxtkdoZuDPRVNCqNNSyu6iFaGvqft3bbzLTKCtcosbsk7gL5RyfDEJ2"
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
