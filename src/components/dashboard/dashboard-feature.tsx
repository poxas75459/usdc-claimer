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
    "39VNjWcDRP5PVBX6Ent1g6Xurx2TGsQtNZ2YFvrWVbTyysZ6c4YQSRmNzKPxzbkSkRnh6KSc2VgDsLiDCyGxJDmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NXbHcLNWjj4aq7DLgSbJQ65MBD2o6kzTBB8Q2ufrY2YWNWdswtJbMAFHnqMk6BGNZ9TDUCPuA3tEwjvf49KALp8",
  "key1": "2hJYdEQTTnnKprSHd3rbZi8jQUNZL3aeSaqq3DuTmoZLnXUbjuX7QsrYwyrHCqu7NTMDzU23ziY7FfB9Ga83PiGk",
  "key2": "9yPzw7skX1STkqaBvUMcwECk6XLo7UxjsU8XmW4xiy9ymqYXWdg2GGHrv2uz88ZBf3ZRzBc9NfJVk3TWJAfpTQf",
  "key3": "3qFy8s43aErbJXAohTidcooFDWBtatUNWgvAqTmoFPkayCvNPA3BLnHvYYJZErrmaACCx3jbbX1nsbx3D7kxhbDw",
  "key4": "4NLqJRqcFQYDaRrWhS3QhqsahVYZ316gtubECqwmi9UuZinDbLL1J1EwUx8JYBL31Dm6UDd6682MUn4dExHvQJPr",
  "key5": "2t5o5DNvxE2vjMcUvgpTmQwBsUp36wDqSsEeaz2SeEJtwVASQcuTvJWGDRREAchCF9wcE9mZw1eBGq1jFRpqAB2S",
  "key6": "29BgYRpYiLKwEDGnWEbqp9GUmyfbYC4FWvbWXtEkNUQP7dnFcN76Cwx6DpJYccvxxMYdVVbh3FrZgpYxyYbmyJmL",
  "key7": "2CWX5nqDxgyo8qBTw8YSsRbkhpCwktc4hb5jc3Hw8bRHWAoPBFXekRV1eVei685gwaKXiWPKzVK99BbobAFYMJbY",
  "key8": "4NoqQgu39T5A6pGRdLWbCvRsud3PHfQ4KdiHmJFyiJ3Mo6sQWVbjypJT8Nh5smjh4NCzyccyZLK4FChSYBggDAd6",
  "key9": "5ETv5B9ykByhMhwuK2S9q5HJZ5WMy9aHhL2AY6z7SLn9HDjbBBdEWe8HEVriMic2GSVLeiuUqGesNYeXjuMute4u",
  "key10": "3W8cj1hpbHuq9guFP4fShzkQnZQojZb44RWzGXGS3KW9HNe9eMgPRfLVxAJ6nZG5kVh6cBnjSkJf2n77YBVMQCdH",
  "key11": "2Zi7Az8S7FQDCv4p455jQLj36YvCQYmE5BE81hPghsuanXbjDVDpwapgu83zBCi8kK9bqrdL9A344Lo83kqN4NrR",
  "key12": "3AZJA8fK59yfe6Lk2qHgRHuedee2cN7PUWZFf5wZb2wtkNp4xr7Q9g6rKHxzyz5pZZxmLXE86DoiSL3ZG23xr8yW",
  "key13": "4suo5BbnVJy9M6cnhsHbCbQoJehc5pByC5SSAi6qoKiAkvJYx9XaU3DsRJyp21JoZLcasbCJFqBWzKhPm6sspBJ9",
  "key14": "4gqgkFcEG7p21t3X8qQd15gwob9anhqTvK8jBrfdnKYxyF4gF9ntjwQBwsKa99JftrQieCTVeVEXB5aXar5vHgFG",
  "key15": "5SifP44CA9ojKuPsDcwW42qKwvdNETXnC3rKqKBPUvC7iehyTtGYeTPiuDs5mYktQNhfmWznyk3cxvM61GbMX8tZ",
  "key16": "5YWBLMKtaXLKMD7FqFAtAH97Deb3WprqTBBKc2uQvPq5RYG2mgURWQaQPz4yR6AveF7oqZz3YTrZGqvB9hM7hgbi",
  "key17": "3g57XnxNR8L6YVx4TGPDLX7eqHY7KW7nRaMdejrPuEUDkXEk73SomDvTuebq3HJewfEKLGkFSXFtck6aw2t7nsXD",
  "key18": "3MHZdr5zQgQxTkCozEakde959WQaTjt1aNXhJyQD3nJKFDPHofZ8VDXfstMGUca8ZMDX6T1FuZfnAZgKaco3DKKV",
  "key19": "RgY1cGoeryM63DS8dKMAeda97UwpYsXFUyciWgM1shSJPwaYGFt6YYrxhxkYcp4x5pLtkd7KzqMk6M7ufsJ3AMX",
  "key20": "3dfECUQixHmDxUgVpXeSpX6wu6GRMiMTBrKcBciNV1ejbntCwJ1rJz45pPGzHyBzm5tXgAUguNuzqsbbntHbuUD2",
  "key21": "3gfxaoZno7vScn5ZmmerKyi4JPr8n1ceHywZGTutx44Pnub2KxDt9mLXr5paw6fq2KLYjkcZw93SL1zoc2EcT32f",
  "key22": "3BVzQEsxswKHtjpbPFFeqn2QNaXZSuK7wu8qXPQfc6Vf8N8FQeGgKpC5THuYAe1zvJCnaLawhDo96MTdADqZGKiC",
  "key23": "4Q8fr4W4dKiqD6ZR8WYVYWiwJrt1NBuhcH9ru5A6Uendu4h15dV2qpWSMyYGcLBvGyoFJUfEarM9jpWnBoP7Zeam",
  "key24": "sE6tuB5curseg6e131xFJiaGngcPhMrQbzt8T4nKn9FwZYMri6PMH4eqFVGPxawo33GrNEyxe35jbFZdLjTZDM7",
  "key25": "5EMh9eEgbaWE1atvYmzTNGAUPSTQTTAxNbXPcL2hkjEgrQZxbLWBRucdmmuKuMhyD4ANqPhY2jckFN8n1JPyShxR",
  "key26": "41gAtwfUeQm8SUeu7ADi7w6RrwZhLFrn7iCpYn7GEQEA29VnxNNw2XDAu8MX6Jj5dkgaonGEb2wsXHg2mDmMXJt1",
  "key27": "5wLDY73xxHTDJsuys3ZPSEuAxpTgu7WMGVHQn53FkvK2XXMR5iDfLj8Dsxe4YAs4T77wC4aXxfwHYu2ghrtkMQPr",
  "key28": "26qxS1ZTWGZ6iNFYhXx4SdjjF7bN5xJAAoeduMvatJ2156rED42vieHKQk4TQXwTEPSQwu2vcpAdXcwRZUyBMEWi",
  "key29": "5Pj6Qh9eges5ygu6yvujwdMCh12yxFMU3F3RoapvNyt1qV7cr8Q1kYDhT1kXFgTbCe5qh3mo5yzZUE7EDDHh9EsF",
  "key30": "kwj6B1U6nEQb357AGP8e5wU66WDvo13mm26kx9Lp1UGEgt4bFCKGyMpJRN84Q1NhUtFjme4nCtCAFrNTCLch9cf",
  "key31": "PaMnK9vcmdFTTAYEUCkFzbMh6sVZ7JTukMdysKvCEVdrmwch3XTN7kQp9z4p9VgFBg4xtBRJ7KyqruwAcgUXSX6",
  "key32": "2wyVoW57LZaahX2kEsBqCDE1H5RJASmnyudxJ6RqWxBQhyxYccmBVautTcVedXaFgWTEBWSwy5tcCqPwLp6nPuLX",
  "key33": "2b3b5uCYyAiA9J6PwdcbDe7Uokt3vkjPHp5Kj7J8xmPzzTeDuCzMUYUPHWcZgKEGb5QowXMctLH1Yppw1XRj5y6M",
  "key34": "3SuU6aJXPSYz3ZpMex3bERCvsyePCQ95A8qmDUwaBsrMT5mBZbUg2C3N9hvBJ4RdpEgj12Hc5ehRgqgqkzFqaRtV",
  "key35": "5Jr8kkHLHQsijBwVSvc7KGopsNkKki7pSoqfLL1wKGiJemynDgCmDCoerdqJuMJBZJCBfWFBbXKyiVeRdKnHGchV",
  "key36": "4Z3HMbgbbL46UWiTs187cc3go3ae73f31JHjqMNxP9mLSvG9ntbU6fkw8QxwRkL1zxhSSmSbqk6WfSCScmAReTNT",
  "key37": "4Q2eNwH6MLhAvfs9WNEJBMa8LhksLZK2mPtfM3zVqUXZMDVw16yQTGMNXErW68MxEp8zj9AZNgJUfaTySq5KZMrD",
  "key38": "4PBGoTDWC8ZtfoZgDaJMqN1tRt2GcHCofsQEizUdPaujXuujq19YdhW2C1SvHYmgU2qDfYVXysytgTBRytf6vEpy",
  "key39": "4j5j3JZVMax72bFMcpRT7Q3qeR5aGJi5TmrSRrgTUAWUtzjuGFfDs6pww2rbEfrBzoDsTPLWmZqnPfT8vzB9vvqf",
  "key40": "pCZ3RsFiDXrQJVzzHgGPzNYgWHzFo1kxQ3HwBdCjuE6YB8JbCePWRJQVm6WM9YgyXzbqEQ2yAzuvj4sc1APovgf",
  "key41": "VG6Xhmihrn98zVRHTeQ6mLuK7VvwdvF8ojVmupcLFLbDfgqqv4kZfo3LJP9pRyRTWzyRBtdzPk5kyzDBovEnEWr",
  "key42": "4Gezm2heS7MsxWcHA875fdSqRgUg2zQUjDR2yoBa3uwhsExvbVmy5h2CrzsNbSA4GvQoQkU65ouszMvxXNgcvoar",
  "key43": "5pydsKPBwfHoFddjYH4sLnD5cjoZ92P8Ln6BSD3sHMRRmLxNXH1JS4tRCBWo6xgten7QqF19ZbEv4wvy2mMBkQZE",
  "key44": "2FikyiYA1yzBAgDnKV3YpShHeRfNq1Yxazej4FZFRBrMCC22KUqAZHPDGA8gPjgxLoGfohpUF6C6UgYnRegep2Mi",
  "key45": "42ZQU2TokC1RmajfcXXgDoBoHjWKkCFZ7gtvnoBTPwjzoU7RxmiXXFt8Di9Xh6UzDjFtJU4h7XRkz29Tk5XPVbnP"
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
