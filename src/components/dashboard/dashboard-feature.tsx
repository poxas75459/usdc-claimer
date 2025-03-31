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
    "5qSVHargcMUt3qRcHMYQt91kb9hniHUiRQPakHiTEK49tx9Nv1YZNsGFqt8GmX8eoDAQrg9CbEG9426z73PCcVpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BMQgZSfSnP1wrUZtoe57zTnK33b1bZv3QLi53wn2Co8GmkYsrNtddS1NJiCfH8dDofP5YfcXkCzqokp85uQw5Nt",
  "key1": "5QHjnvUtScmPTrFtd9B1QUYnFN4tiUoE5EUUWDYNjf6msFqDTpfDywuAf4AEEzTa9xyEXQPw68YjuwqWw6ixBpQY",
  "key2": "2X8VEpvrWC9ErGdVdQTDJHjauBiT6px8W6CoN9c7koGdkEbk6bE4Z7E5vPVjdkcNfU6p6kKM3f2URjMepuUmDQtN",
  "key3": "2wUFze136zuXuaZ1iYHQ1QE25qR5vhHTM8ckvN4U8yTN56H673MyiRi7PZMcrfwe1GMkSxbtdXJ73Z2gMqXwQMX5",
  "key4": "2yXygHeE9JefpK7Fb6EXNTHyrNj4LbetKgphM9jPdKFXzTCAmnCrukqx7R3hSUHzYDFwBYFYSNiQDxfSTr5L6cTm",
  "key5": "2Z5Cih23GgYMA7JrQAFkBMWWJbUWQqn9kzJwAWRXwYh4TyATVeRcbneJ3NTispzNMFG62Kx5wg6XxxH4NsdMcz9j",
  "key6": "VGSynUK1yXYKM8coUaijV68n1zVWmdYZf5nLfdG9AjMi3Mz9ZBXrwAwqWBKXFZUiGAntZXanrGKEvxeieKRXCej",
  "key7": "2XC38c7xygCAteBNHPuCE66tNkTm81t9Bv8Cu4YwTMgQe24E8VzdYUAt156x1AWx3fVLRCRVfzn8eLYTUzy1CRRW",
  "key8": "2Hdb1HBq5fCYN5xxUo8cg46C6BUhbuYneaUwnrmtfDR8x5xkSAB9Q4xwZU2p9NQtCyfoAVWd923zv97koSBSW7vf",
  "key9": "2KPBkg4qL3kDhufeueJRT224XV7y275vohbmzMaLBcFuMoBLZJGddQNs8NyyFfwJpJbxS9UfyjtXCAfLP2V6M2Ax",
  "key10": "42aYHtcPS4yL9KLZAVd4hrd7atfrvv1G7J1dSu1z83VtvrQ3FA3hiPq3gbcmQ67raZJhCE7FxofyFDScAAEYH7cn",
  "key11": "4mXaVLuB4W3ZUXRtGDWp9THptpWwLFL3JbFCaquPqXw3h6eCR3tmPmdJgze3AvBCRa5YuFJHftG6TBLxRhdo4gUg",
  "key12": "2FvJP1wLPEm5xPXzRubwparuFzogGZh3BVtxDKBvMNo4baJyXckDSQSiKZD3xRgoJGV4GLkwpyRzHdJWpKLwUNzr",
  "key13": "61fEBsBQLTmBAiGDaZS9fEuScuAE2TyAs7dhBpGvTkc1YWZTudEEkhv9hkme9SgMsUr7V25Yro99aitFRQswxzg7",
  "key14": "5NScxEAd7CjxpSiXsvAovpxvHgHYtrcZjckZ9Hxqixg283QE4jVaDVnK4Fb27jivN6euh2V7XZpJFSUThC7D24W6",
  "key15": "2EZE4FJM5fP7JjSiUDwFxGNsZCRwSkkXNndbbxPqBy9qqeSqHeNjkZSJjrkujqiaTZXq14VaNHmBrndxo1F2SHAm",
  "key16": "5grSqyf771WWEgB5attvmVqEtQ8E589Q9WdEFDWJY51fNaDEJuGDfsSxAQpn9dwEeLvAcvTgkJXTVUQbxVVhhVqH",
  "key17": "5tdCUgUJzjptJPfGHWQzxzDbxSuRg4G8z6RTZkHVKEJQy7TepsUc8kKuT5WQ47fY7rj8cJdMY7wYrhUBUiPMT4uF",
  "key18": "47CMsmyw4E5DqZknj3CMZUiexd7QwmMwoPFCXBhpbKgCD9R6pRuHeGFQRJqtbW5PHLESDWYKuj1NrK5n5c4dTf5a",
  "key19": "3Ao3DfdcnjtYw4i1wTQPfnBcRBJHMZ2am5Wmupv6m9YWcDVJXoFFKJPwrgYfEi9bW7Wm2uEVPEnXjuzhLSzVfNAn",
  "key20": "44ssvHdyU9yqLCaxFVcJz3CuCmx3TuFZLSqhx1hQd4MqZhqHL7mpDGSzcnGh6LfUTWDYwzERupT53isN9qXDkeHW",
  "key21": "4uxqjVZucxoNWkjwhT3pXGCa5eetQMee4KaS99mWGfmnpKoG2Sf13mCPedr3NCdYuW7zvXs6EPAA4Q7RJxYYoAXN",
  "key22": "3N68wS1DpcrBJzxq3Dv8NPPDNTrfpj8Dr5bH3wrjEdyMG9vRhdADvWmhnm1ym163N8pqDQEshSwK3VtQd2Wk1hto",
  "key23": "23RHyZoDsVW6tXnQEHfR7ieFGG3NkKEAtUbwsvTXUZJVhK5rHCHsqTvXwRybuBvm57WLqRwNTsVzFeH2CL5nPkSD",
  "key24": "nKArUvmp1WnkqtSBHqKNexVKG1Yn27EnSDKmd7jh5Gnp551XP4B8FxGYEpr6idNmnXakeW1VmYChqG5aNBWQwHV",
  "key25": "4WwvDvihJ85cqPCNqhRgHCMqcryCK2sopzbwbo9j6VzMrNNYf64sKYN1TzGyZ8cGDV9u4WRVonRcHShr1LSGyRtK",
  "key26": "dXP1zH9874rMX7RK1atpSwSniUhTqp8ssoccWddPareewTmxg9qmkjMUXJoVz5YwgayzNKV6xuffPBWaDsXW8no",
  "key27": "631TWeod3hmrMsULdwpxmU47FMMNETq6Pv4Amc3944MwX9vcPHbVWmbcb5LaGMFCLniix4HLg55KTHakuHJLRWd",
  "key28": "2wVKCtn1yt9KUrkqM6vcsbpKbyi2uHDgzwnRppWeeB3iEDVAUk2NjDxX4Lz2nTz7CE646oDcAHFnj7DK5tQ1Yjev",
  "key29": "2mNuRyiuteN2pio7shWzEwovPDe4sopPkNJAquo1HRFgToMbHPuWhka2NeFFbZ4jiiSMfB1X3o8bGVaDTdGPev7e",
  "key30": "3vEuPTfdKqvmkpTQfbV35fjQptVZnFTCGvEe7RXHwytC9wvHyDLFnLL4VoykBhFXvgMXuYgZWFjK8yVmXD3TS9zs",
  "key31": "3V3YPwRjDxWX3X5sVUgwwzqUJRbLbN6oW9EtUw5RrSYgjm9fTqwbYfao4pmeSZUXPFijwCcJffCKjsXYA1mDyUMS",
  "key32": "uYm3Lfxm5cvG9PHdXKpUQVTHVXoR5mESmsJ7QFLGs62dLPBovaBEGjcavp3B4G254kHcxoorJVxAQ94jZanjRSL",
  "key33": "35CdfEMbKhjqJvS4KwkHvZG3rGrcT8H1GgMmZhRauaLWe2LqHfYA259VG2qF2eaCqrXkyPmXYbvNWAupWwNNVJim",
  "key34": "3mwpjD7F48Jo6HmznvuBNueiAMiBo7SXwaspQwu5KUpwfgBibXa76V7QTqm7tgDWd8xmk6sC8xGxbt7MfZ7oKrdY",
  "key35": "3erMWKVuHq281NDRCPNawQsnyRgq6rxBoBuafiokW46J4aqhPfRcUfCXd6YX6aMDJXAiedPmn5MfpFvuCk2MSQ91",
  "key36": "3K9UKkg5dcyFjWv9QXi7w4enB3JFwgT4sqpw5Rg24wJYsakwuz1mVr1JYLq4AmSbmPJ8wiDjLWqbKC31KkGucNno",
  "key37": "3w3tukMFtRo4itXGaZXUhQA238HK4d853U6dtqfu6aASQTc4Chv2CJERwE8kw5ALMrKuzuwM9MbNMVPcf6YfH5q5",
  "key38": "5Y5fMGvBsB7iJAoF1fE5dmsyow8Zr6A3txNMkRraGKyEWkEf8561TWWjFaxvaKVHkdi9Z2SWVkpMgybtiuYezm1M",
  "key39": "2MVzqHXCDn9qF96qh5kuJe2VRk5SCeN7ZSTtxKshWrL7YyHt4sxqzA89tA4CCESU4SHtyEFhRve97NNp9Y3bWnu4",
  "key40": "5p3BUUaTwmxJc7k8D1Mf3yrve74EtH7n2Y9841Vt6FYDx3b6LpTFrVBmdJXG8r2aE517wS4SJgmk1PFYKsc1Fx5G",
  "key41": "4dRxeXHGEQXmCFa5yF346QxSqs9sQpVFvLw8eSCfz1vPCxfhgqiTjsbirepYL1PgiSdctJc8njSvtD3h8U5xHGdJ",
  "key42": "4jj9B41MS3zVW7tD8gB6aqcWKnrSwfdmDme7F91jur2cfU5BncHcBqE7XpeXu3n9xqcFrqhEXgC7sHCDxBG9bRkc",
  "key43": "ifYBbYHwpLPYxrYwq28Zbmj3hnNaetXnqWhBCxdjKiJfSgBFCigCpHGHDjSiHLZmp8CQafCcvd11LGcznewmbJY",
  "key44": "Z7PaeuYuGcjoZmy3DcXhDYfJStxKKbfYeWBvkABGUzSEb6W1gWuqwmftv6WeFAeCTzd7odv5J6YzgFeggXtRivS",
  "key45": "4L9XSTy6J7qXjm95jkZcr5UCBsY9kK6iuaLawWp3JU1fhgD3hyuKp2aQVR6HNRJ2exGGyLyqT1WEQDN6rjv8xXsi"
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
