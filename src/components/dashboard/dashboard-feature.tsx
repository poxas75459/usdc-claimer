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
    "5u8nfPaA7Xi4RcNFbRbJJAHq29GLXCPoAqoWKwguC96yJxMANsNxb5eYyapKmNTjDs6PUBr6mahC2fKzYeFs9szR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RP5na78NRySwdYq5P9ATRAkBunVHMdFARGd14LjtZsNArVfuWkUvfVkY85tmGYyGieHEWceNuzNSDDn8eWsSjAB",
  "key1": "3oDy1br5umciqZLPD6ajT5fgPFkp1MAjKRdFwAdc9t1KCwdp9Hacem13Qd3Cx8K2RhCx3yt85ZN1DQGNdS596cKa",
  "key2": "2Mmf5QJo3m2u89vKbgbZtA9s7FKkUgfuWpbf5zyGBZdDt1ojafMxQQx2Ght7DWEoDvxpMrusmpnm8Q66FnDKMyeX",
  "key3": "sEW8E7XpjVY5oavZC6LSYrqd3yi38DujpEz75JuLD3teTVPDYN3BJu4GeiDfxvV2Xc7FqdtPLWWA3uWNHBjB27j",
  "key4": "2sts75pfsKvEpPJb6LVAVuihvbaNX2tSsiDtkSggNaPDqQjBqAmYtWmPSW4McvAtpSr3p7dTmUQzXjmYT7FmL4pn",
  "key5": "5gGbwMv98rNv6ARzPEiU3UCVm4E3PKXxWqcr7g73gU3qWnMTMFhRKUscf6KgpiKzMEBLHAGjKzfaR7yKNYsq6LPV",
  "key6": "3H7xNhg94zekMA5CFDKdst5srBS3cFBTLjQH9AFzHY36R1dnLXVUGUJYJ7zZ1HaoLXss1RcXjY5nRJqXfTHk4LHg",
  "key7": "72TCaGrVuZJYc4SqvzzRQoHH4XLHZpFPavrtqYZL8nn4iWs7PKYLobD33apzGnbS83Nbfuhun4yyPwVZXxsQTYT",
  "key8": "2smiLjQdqDF5ku7jESgQ6CNat8zNU43duFLnzaqYa51uZD48vZfE6YzgXFsn4vxCCG6jhVkU8HEV3MrAqHaG4f44",
  "key9": "5czjKHtwgmCFGfKiBf4hmFr8R54mAefWJyCETwUqaNXQ5ZkbC4S6fqs5HTDGkeq9RnnQ8rQEXR7xUFiT7ATKiixj",
  "key10": "62Z4y84BuouGkEo7SiHRbBddA9bf6vC5YyWHsycos7gpxLh5uCZ3o4UsKw6CT6bbeHiZhTX8V8KK4MA1g6sjz81a",
  "key11": "3kNMiWmuXDJUnCeHs93upnrvK8c5cSJkdq8zvg36BAbkwuQpEmcTcxb94pUNSWnDdRsiPuAGsxtE4obq5xFYThGf",
  "key12": "3P6Qitg7npesgBiPjax34XRoKdz1HBWSdu1gSGf3k6W1pVP3sEtJZbe2EvTaLqsLSeHC8TQPbtzJzgZ6DjgSZVt2",
  "key13": "aV8R3q2zLNFo8fkZBPemCFT3jS1dMaaoGAkcTSzCtVGh6FMzjUkCein8ySnT5wZUoG9e8pLnTaWQPoKzpQUZLMZ",
  "key14": "34A232cggbasjJoRytdjMFCoSycgePX16kTBYyYD5CVEzURU4TVxvcAoeq9AFyiXPiaYen5T54V44SGRBrCMR6W5",
  "key15": "5kKutCCxJkTsrun3ytpf83QZ24knV2cnGJG9u55RTXRvku8qopo4d8fzSoFKX1LgdUzv9WbF7qwdqmieeKcnkqWr",
  "key16": "2Vycq5399BgAY9kJuwJjdTon4ymgFdhyWSaAwU4Ahnc6Ryhmzv5aF9AJR6GXqU1s35cjRAXUedkyVFLhqsBMQoky",
  "key17": "3nUjvDcAn2ZR1ZGCLwwLL6pUCasTpL17PqwugwcfrkhKeU8PKoTMTgVbaHirSa11ntsRKtLGzCDrusSQ1nqiPYLg",
  "key18": "2N3iZCzb6JJ5baLL55Gc4uAjjGZDH9RzAV4XehU8ZEoPstFYrAsgyGj7MwxxtaqNiYyVNF5FWZx69ntfSh5Numox",
  "key19": "28BNqCnqgf9P6pqn8SJ9zjUiEdBVvVLiXfB1AyhWpDTT6mpKFn1uxdQ8tTJBhRxnpVEF3UkbwM3YPvHs7XvYCuyW",
  "key20": "2yLoMmqH2YW56xjiE7zuoJmDycEQaLjZgtu8izE7tq1tcJgbF8Eqcp1WFg99qiDyGSxQQf2U6a3G9SnscnfB3iWP",
  "key21": "5B3aVKowSwL1Q4pt8Wtjram23qn9NKt6XXZJ7fNqehX9PcansbS6abwJMWupEF1iLMpt3yZsCoCJHDTAGnx3BVKY",
  "key22": "gDB78WeTbZxSGYY2m2tKYQ3coBENSVaGro1TFD8iaw8oM2WrTMtXC2grxz3HMd2SpbKd2osswYrQz5nS63mSRXS",
  "key23": "2VAjkTsydn2NirjJR1KwPhdDLKtTeSgYcbe9a6Ckeb1p9MKuTrve9mnrkMNJSF9tVA1mAVsMGpuzEZNzfsmtn94o",
  "key24": "ui8rqzVhF6eu5JN8F3dUfb3JtyhvihTVtStrH2LEVV6s5PA7cZZpuwmr52q55kafRMiwH7CuxxcCQjmy9Hzf3kR",
  "key25": "3FtMN7HtrmKyucuAP9jwjpJhfcSJ12x6iLTxUr1F9onqGqqXao64Hca1Bf9woqn1tdEiup7inpongiA1WCqjkbFS",
  "key26": "5hTsRq4n8PaiFA6p37YMiis2jR36UnsxeomgRs9eu8tQ2W3hB8xg394wmee5xLerwb5ruvqTK85MzxchghNVWZvX",
  "key27": "2rySHDigpDAq8f6tQoySPwMP19Y8z1mMYemvJFSMyXdtG5E7LaN8oJbZvYb8Jm1mxg3Q79kTxw9rXkiVRiAGxKcU",
  "key28": "ih9vb2vRqWfR1s4uRP74UkKCko8YA1raJoLqwPGvcUCk6wgz6v8Ng1wVsfxEjSPe4qytWnQ1zhvVGhg1TsAa2io",
  "key29": "2hs3e2BMV8QpMQ6KfhAbWnxEtrtr9qM9pB1RZC7kmMsce367HvQy87otJGjZ1CuE5yguSckzsoXE62xrmbPfaoiJ",
  "key30": "4jRyW2THEknFeYDwyAA6LY3GTVruZWpLbeMyqDPqTCTb7K6tSY3CK7K3nLVtL9LAwPuWySxSGh6Yjkg2uEnBWc4B",
  "key31": "3nGb3Tp7Rv33o6RDGJUhvBZ8o6DbPDPGJHx12cGHmf4Yg8JwwdPujMeztBvoNU59fd9gmJ7Jido7jpJsX9usKPbG",
  "key32": "cJ7U4KGNBznsAoyTRtG6C91cKrPrhqJ6gyoAiYFxo62EP82GVdpk82UQ9MQT4rmqKHRhTfcGdy6igBmWuVMkLTi",
  "key33": "QZGnt1x8qnS1hDe6XYGdWafKqypGFH1ZNnxZSPKwErZ5xkkB87XjKyKsym3t7NZzK256iYx41AbCEKkxgbUEZ9b",
  "key34": "5D8CPyqXtRcfaHDPmkAxhxh28T8nnhPGe2NSgVrZqH5DxVn6KqYsJnzEgpMyenv5YuoNKoS1F1PGUqLA6VB8QQh9",
  "key35": "gCGGuyf3xuxLp5K3UQBy8psUZvUxYdzFZZ4DHFXywFRHwWiT6MFstBPJxVuM3Epe1PuiNRHgXc6xZayG8DGEzW1",
  "key36": "H3w2Lyy8yHTTqmSXHroouCkhVN4s2gYrbns4NzMTbvNQKy9en6Pc1kh917txwZtSn6FWEEdngawopiVYKfasTg5",
  "key37": "6h7GCVmH6Q7xWKWswNhYrZJLM5kwC9PmvusxDCYEx3ZSDeUYQA7zQisBYT1nfm3kHnaaCsGq8hzeWQcL59qXnBN",
  "key38": "2nynrzCWTdahWjF6vxtVLrbA8D3qP3cwnZCSsAckZpzmuUK6jKQjDYCswtdCncw2Qr8jUHhVvw4MUp8TTVZTjBCv"
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
