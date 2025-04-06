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
    "2Uja5pRLLCnxcMxgUqSU9E7sm7EYM6SDFQ3r4LSvhJkNFfHqk6p4KzuufDYJ6Zx6K2hHBEgKtcLZhoR2BmQTfC5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ypo7iHNUzL24BaeMj3QXbk3whvmWHYeSmzAz4fzDTJazt9FJMFsFLbuPJLFCcVnoLntPsMnVk9KT2bnSrZPGEu",
  "key1": "3g7epkhXL29wUNmtzbvvUUjtLoSJKf4xEUxVSMySSPx3hFq62tskG8hvSHYdo1kBMKTuEV1qW8zfXg5JKoAHUsJt",
  "key2": "WKRKFhgrNfdMmWoNAsjkCdLpntwFZ9BrSMNP5njz2jem3sMLBjZdSMkwz4X1fohUxJvsTWw5aKezi4cMpuTRyVC",
  "key3": "evRMo4eLHavbhmCLHFBr6eHAUWeU5sWoGuptVnuNb991kp4aeVtHnNMujn5FbTm1dmU7mDc4tE9EhCyMBXazobK",
  "key4": "4gnEtZ3THQfDR76LukaKC5ZzyjZB4uEBBZgy7HG26GRLxSJgv8FEEj8wpY669ePq9tax2QMnFrkGUX5giHcHoN6j",
  "key5": "4hP9pc82fxEwnHpXaFkQ9UZZuPbYi7nfkK74Z6EjRDJXyHXvsJ56daCYUXTPnDNTo4F3m2zdGtmjN9XPg88cauGu",
  "key6": "4qmAxZ9mCjYjHWWWTLn3u8XTCpsp7ANS8n8RfUECXf6b9FtBuMyY7LJZRPS825GoEQuD6N8qs2bq9mRAmvmHcNt2",
  "key7": "5nmikdht2hMPRpLqpY98MfpL39sTjWE3bf69VxGWmZUhYqbtAQ4zL9LMV9E1gxzPK2ytC5DAEKBsPVD3CmognXCX",
  "key8": "3X1jivvTQovLKV7fFuvH7d1UtkDR8N59sV4JkB3gwAQhm5KCTyXCNhZTgq5Z2G59XVxKwiTJa4pnkfWdE5SxEd9f",
  "key9": "4E9P7KH6t7BZH6b8einsQuRLgdvGpsAkA63jCtqRcUQ4M9SUsBnVueEeapVE3qcyYCaikCKbzDCUKGPAx9CEb4kw",
  "key10": "2VMjTQ3SCTGkZ9txqQtreqgW8BNYu4F49JaEj8PQeBjqcGkk3xocz4WVgpRQJJSxX3R4JDDWZbeaFMxhFjTm94q9",
  "key11": "b7FkUhJXPMEjzMfbRtU9nCj8QKRMkgsTSR4BxfRhfqvcHU1hptdUkabmhZNNZV3ikDPt1X2zDAyayMnovkw5jMe",
  "key12": "22iDWPJKgV9R1Kbhyz8JbgN5DqCqnQ7vB2JFDiMf6mdvxi3wdoHCmHt2xZiVydmkN5153aq7vNU2FU5nYzWtGCSY",
  "key13": "5hipWuR4KE2bKXzSeZ22uLvSPHGAALgijJvTspxU8ZcDAWqLALqdQRpYa9zB4PjbjQRuHBef1eFgsFrhb6v8CnUk",
  "key14": "5EQpMCWsNx5Hct3WWAJLfecxNZt1krDuMKCF6zHfirCNeYNiTUDVFMUfKBrRYQmz8BCkdW6DFYUsMKeCeHyriCzJ",
  "key15": "2kVVDbeixFYZdzcwTTmirGmokZQGzZ7Et17sjbCguejRCka8tGP6mxv5FU2a3aWPQJdUgAxnL1Q9RGxSeEDGmbK8",
  "key16": "4eSYg8bNc4LkLS4hrhPXdM4q2GQcbrAkG9Y6s6XkhVwTMfF7Kzi8smHDZgn6VSBbMH2c94QMRyBPpZTtr3pNPdau",
  "key17": "25fZ21vx3NfXMKz1hNhE1mHUuDpD8ERVNASdmeAjcGVjC2ngEvF8EkaWepcQCmTCckTstZRtLyYQCUxka3dmxHVL",
  "key18": "8WF8jCyCKWLzYuYuMrg1HyXq9CynFcF3oK1deoX7hzKiFfYtusadWj1y4cWVRfBiAvxyCMyS5zWqKiawA7srDrz",
  "key19": "254H88NBr3HyoXuMYFrSqSWiyFcVwGbubdAP1WkBKjcvwbHFQTjVWfkYGtdRCfQdRKM7Mi3Nmb6jcE5MVKrhsZxN",
  "key20": "4vFBMpvnMoLQ1rp3VaorXude7vq3sFxXsnBrPLvXnUQKeJLKCzZNjkEx67tXgdNHD6FYmifcRwkbZxre7h8hx6sv",
  "key21": "3hGjvXrQVT3BcJwxPbWNcXpy62n6MVz1wDejZ8AA8mGpStys1m2v3h2sBkTn8gV4VqaJV6UZ9FkKbH8E3bjDUs5z",
  "key22": "Wz87KGoponx8aCsSBo8wFNPKEybtVcNbxkDJKbwVSL4xUKnS6cPg3oosEjsTABjrfGWUs1vWecLZ1z3H9Esd5s8",
  "key23": "4bhvvN5QTzd3Rp7VuYFFKaHGDpEe5hr2YtAgTjSptrSwTepL2EAvd5TXB7Re3CyurQA2RphEpndFHPR56wXkCKU8",
  "key24": "4MUmvKMyMiEk4Em6DQeU6gxPC4osVLG95XCBqF8PmH3seu993oA1d8Bv2BRjy5bCVAJyMYmLD1HvbmXCmqojfNmp",
  "key25": "461aqNufUuubMX9HobPyTTVJjMyvYsTLXYEFctm5ejQF7CSaymBn9D61SzXhg5Th9aAQpkGoeC8F7p8q1Baj27N8",
  "key26": "4w3tHNans5J1NmR2ZXmbqppXDy16apNJv5EyhFUgJKhbtzNfPwqQwQn4BbhQ7xy9M4hYqJFHsgVuggtrJosDU6To",
  "key27": "429a6CbrtZqnfyPXxry2nZaSdoYPYLtgWDk7AWJ2UNhuiYn6VhY6ijexRo2FsJPn2zaaY3f3LhQxcH3wuuaqxcLJ",
  "key28": "3kvaBBUzmof4ezgBacLzTnaoM7aYmPryXRzzbZPrYi9qMrjoaqjoANa6AzS5gPGKxWQZSBzAxef9u9KPhG13gdQU",
  "key29": "3LfSgSKK7DGVyyxXCSZt3GAtKUMNKyrEadiDtDdk6DYAXcMsbcu1oab79KJ2QUV1k4zhhSRHxPrHsDAk773MJ6S3",
  "key30": "S8e9dZitReyHhhLVDX6b7hga4j62DaQCgHo8RSmpVdrTXS7PRgX35m5WnGqS8eUB4x5dUmPm59sD5ireqbSsmyW",
  "key31": "5ht31hmNrYxqDYsrWCUJ36stPbSxFkJJNHSKUfYDNxwUJiSaNEDCQKpRd8GtJLEF6uFcrGBvZnK1P9Y46gZwN5N1",
  "key32": "4ZdU88HprsP2kRPhXVEJnCiSYz3VWmRsebmZcjWpbRs97TWDXqT65VvKQhtgqFUcy9fjXMU1fardhSoRyqEBjKX"
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
