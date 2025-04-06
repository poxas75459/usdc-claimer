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
    "56TSM1ZoUPBnGH7uwNuy7cSJWEFjFiNGorKAWoCz9CiqsBqyhftFERgcB1ZJ7ugMkmjp2oKs9vLYsiP7NQaVagxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9XuMYX4Fyn9EnVZ4FzGdYgfyjE3AXE2fZ8STMfknVZTSLJe4vN7xbJHPGzety5fcNy8p6juBXSAYoPDjRJ6fa5",
  "key1": "5Q7PHSsUfNgUoby7nf5LSjqdHf4ddGcyrhn8issyZ3GB7qkswVszMXAYnv8ZtXMQmhgNEbofHE9vbcvLsGgd3Tdi",
  "key2": "59LzabJbndFH2ZLk7FDfDdYGo1UkjdKeqKWXgnXjtDJD8VtGDBZP25PsJxvd7XG9EUPkRKNoLRueP7Ki7iBmYMqo",
  "key3": "4QrLnu8TRFVagpkDtda7mX9MFcaLEmQBNhpdt9ffmyrJbpTLiFoMwYQgExQPUNvruPCFkeMY33NHD8mZ4CcC2U74",
  "key4": "5DbAhGchBgcD3mvwP1nAoqo2RcZhakdBGmih5HPW2PVbDoVF8VUvBnoDqWZdchNhKHDXtWVc3opdpojfQsv9kVYE",
  "key5": "3wqkz4NQitUVekNFDdP1eoyGZ8h5s7txPatD8N26xBbXPzR4ojBDQkq8ujRQejbGfChWewb7YG9mjmCRKRh398iR",
  "key6": "3nieVgmZ8JpEXo4gdzQeowbk47tgit3WSn4Lofgfkz3eVo9uNLMHsfLny7K5TXsRfAa7frGkNUBmGMHACMtR3gpb",
  "key7": "4Cz8iy5iX1WF5SmPTRx1BfgegALjMV5tAvRUk1dSqMUtrwaEknkt7ZAnNR78977KzUpQfLwqzU8cGwh4M8GgvpHd",
  "key8": "4A77pb8znr2bCoF3UxJi2tEXUiY2UyPiJQeEu9NfCswUqQkKX8dsnFrLU434auxKtiHJfgRQFWxZDUu39Nru2zkL",
  "key9": "556SPEdfg7PgYjRRcGERcPTM7JbA5qpxAAxD9L1gHsVvjmryVGsgqAeTuAhjnQ1nLHciS7sTZUVyBYSNkBrx8p8J",
  "key10": "3oyXW7NdRBYn5F9SMTUcpfziSNnuzBCX21WTb3H6nhTvfmoB9vE7CacHAuApwdhkrRCveqjCmvMLRyqaeadRuSV8",
  "key11": "66hsz7hcD6sUrU3HGotNqenu2cFYVPVMUQbtyEafKUCCdcvkVM7k9FqJaH1mNKB1MMs8Y2e91dd4arVyc6KwtiP3",
  "key12": "wL8j8fJMAHjqhybQb9DTMvv1JgeMcz8ftQtvBUznAFnM1E2mA9v9MPeJpk1TC2LHJTVYznuX1RfBzVauFeNyAH9",
  "key13": "4paAizhFCwJtL5f8a6waqXdezcTGThGTdtcydMUJDcDjqcaMYiXJaGSoKY3rpPwae55HZ4Dvz7jF14keMWZ5MCgS",
  "key14": "3iRjUTgTiChpbX7RN58zuSsJ9N3w7YjyAf8fjhWhyt57EdD54AuRHshLsZBZ5yAoRqXn4xRKzfXPZ66oHCenPXvR",
  "key15": "5BWk4cb5ytBewLS1AivCrW14E4A2AE3ys1hG4hCE2qn9R23YvowWzy6BZKZShkTum5dSmNDVrzDTfjtH4Xe68QpR",
  "key16": "3yy8KGQ48en38YWp3kZUT21eWqRFiWGp3KMpuBuRJFS7H85F65LQYMWjGEpQDpmPKdY8tLKyaeURD11RwCFxYKMu",
  "key17": "57txFErxjnnJagzQmpxt9hkhsJiZsQrqTKg5CAGpTNmWGpi7raw8761Vk2JWVySrEQdbjDn2HtcBvhZiMyjPWRQx",
  "key18": "qF59ewzvvtedLbkt6kYWEkwg9r8aVn5fEjxuUpV9foaM4iWPuq64JxJsvTCvAxd9zFgcbVT2U4oUuJYuh9Y9iWa",
  "key19": "fWsKxsFeU3uXjwyyvvodYx18Y1p4uqgAWQ6GGb8mdrcSqpeAA1L21sE7ErHAwMYmYJrtrPGYcxLTTud7CdsrtGo",
  "key20": "3HXu2wX2rGGVmzV1SdaejoFV9qHv5u5nwQcnNTboZWerjR2UD6Xedr2wPSymrdPD7zZFCUjTKxLt6zpXLjMDTtXi",
  "key21": "3qep8k5Emt31kU5gA8GprnngXwVwLmj9Q4Bu4Wvs1ieErHqnQQk2rn6tBoCVBp3YTXRN3opfFvJKmh13iN1Q3pd4",
  "key22": "3ReSVgRhhDYokJzdTCP52u8WrTUFmYQtkcFa7hsw1HCyDFDVgeXSVBngpk6djwxvpgq2CEn5Xhj9KNULCozjS4aE",
  "key23": "4s64aaQrvSCu1VdJsW2hZsgy85EoDLDrshZQWstEAD5gXpfLipoh5V7v1HD3MT5CCZDb6PmHUyxaLSDkkUrCxeFW",
  "key24": "h3b487g86UmDPDgJxgu1nMZcXPqb5dLoBHmqkruHeUCpMNJe2uiEsDsW5rpfaFJvPsroWx5wVmEannsryQwogF4",
  "key25": "2Hk5fQt3Ed2pRfNgVNBEMNgBxk3sAN2rqCmc5Ezrx7trkCMaARLUdho7WPy3ia527qtsDbXc8Dyv9fFQo7hrUaYZ",
  "key26": "4ZaSMfFyBEekRV55N8r6o1uREs985RMMh35rcbXTMTEgJ38jDRpLp6Cm7b3Twk2v6fHiYDySBix2seHLKvD62W9B",
  "key27": "jWThE9k8D1wBYHZ7YtfW1WMgWyK9fErX3C7xpmpjUbBV7cqABKYgHzoMYq2kko65Lb3EoQyuCm2axW6mk2XLzRF",
  "key28": "5EojJNDq9AdB4uYW78r2ybAq6bTdk47cxUL2y16uiqDcjZqZjDgjYyDqmSYfHjxZeRUmZ1qeYA7bmZT9ZPnn68oM",
  "key29": "19DZ7ihFsJxGiwJDNXH9YVXXqPmmyGTd6mBmE3aq1xXQbUEWT3N6cmT1VCCycCHxNcwn26oBrbKoTcdw7f63aA3",
  "key30": "5xd59ZbGXcr8VPWdzdxqakqsnxpB9vw1zqLmY3ktXSo4BfScMGC9s3yYSQxc97hx9w3it9yPkWu3iZaFBMiYrZQK",
  "key31": "4bVizCnMxrtariFQUyEuJNNVgUZga5UC7bW1YsrTLRVuB2RC56mhrWubmXtf3ZKxu1CmPWnzydwiWWnAt7fJzdBc",
  "key32": "2vDMW3vNVQ5USvt5GQ8y72KkNWKpVUuZLfbhojvTrJDDkYkNX7YrKhuEQTVKVR5vAw4vQHWtkyRxfFJ3TfxYRkJ3",
  "key33": "3Sv7zrKj9LoGWUdbyViv8nReWBtMd4ygukq3JEL8He6PWrLo9JwYv66rjYLBjxtVexkYSWJbN1LFjL6ZDYTY3wgw",
  "key34": "2DLNg3AqVHD1sp5DR5rcbeTc6r6kcN77UCuw8sWTKEKi7xkuHZnN7ixgJm84RyWv62oHBVqMRGio5a7txQ83KGDm",
  "key35": "YpzMAseE1LZtbTiLTH77gELuvgwic5vB49HSy7EFsAYokG6Gsr751B8oHMsbzi4XvzSmdPzfA5GpFyQ5Wyi3LxG",
  "key36": "2s62hz7YENRjkigE49MNrVH3kdvUuixUH7VEdQ4bZHqJ1E82HFabZx3a1SFPUMtDTzg7NN9wDsy8rBQVhVATAPY4",
  "key37": "4WxUfYNoTigjxbcBxVzrDiuu8xSBwL5Kqc3jXqWnuKqURHt3R2CANraLV7C2vMzMmuZvPm3mUDeGsbtaLNqgWqWR",
  "key38": "D3AxHX89JahfDdMTUFJN2mLpbtMJbNk3rBzSmsWbREAMWKSgaUjhi8Rjphoh2n4unyE2xTeBGR6HhRHC5sDTmk5"
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
