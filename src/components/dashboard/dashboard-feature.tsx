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
    "5Qqrjn3ro6Xc81UoNuNdVJTNYDnpirhQLQ8wBPeyGSqNDg41iKS65RftPPWKCyK5r3byDB6jpys5wdNmU21cMtkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgoQWyHvkVTBpaGzEcRtKuCZgVmaSQUweitkQY7B4mqRN26yfeTL8KFCr4RhYcHEBUWKRYiDRmKjJ5RT2FQqHCo",
  "key1": "2RaKyQLSuw7Pe1ue44tpbRJYZnTKR3DwC1UZthUj6Mxb7aP1hY2yMN7rHHNGP1QKEmNk6AsPmLvP5uzwfhKvaeXU",
  "key2": "2EQJdSZPdsGy2bFSFfaLkVS3xTXmamvmsbjgTK6CfJWDeiRdesjHyiKdcsvfpkBJeGJUQSPGzQZBqXSkFZG52bFz",
  "key3": "5v7awXFxq4pTnTg2hjpVfmmtSo7CTdf8WD1FWkoZbMzW2aex2fCyBerLhWuCZ74EpEeJtkhVHuscKw7oBqnKvVwZ",
  "key4": "DF5iihbHLnQGmsEpEhLevr5Lh4SwXvWzmg9yeSjdzAMxQCFoCHRpmBxs5sFD3MrhVsdw1t13dAsWLf1zkJQW2bJ",
  "key5": "5LFi1RtNvRfnMThpRMNtRvcTVSzdP7wimMAPZBXB4wG4V4VRJFdZqbLDUhzq69SMsRkjYhUr2wmk2N9cReWPiqf6",
  "key6": "5NmVZcVCKYnnWAkg7tfSCPL51ZNTpRwNLKnrvCeZT54nw2PEjzNtq9y9sAWrrmxwBLJRChETQNLRz77ZUQaq33uo",
  "key7": "3rsay5A8LBu39tFinRbsUqabKT1SKVnDDEnmG1w9wfkemiVarnrrGCLYwb6FaMyetnCJWXoH4Qfft9EqmdDGrq2J",
  "key8": "4iG2N5Tf6tkgDiRLSF4kE2EUKvcyqUA7die7AthifrtrybB97ckptejZKNY1AcY4uNVMM72SVAUu6ooubYN4ZFdk",
  "key9": "47ZBf1E8kTug1HGXA5yyXnTsTfHMpPBrLvDeFgCYDh3skoWpFTW2N289zmYjj7VXsP1yWYnDfDZvdGrd82bRxPxm",
  "key10": "4tUMRiRuVcYbixpnXjFWToqaC4aP9wrLdiZXoTYWFU6Q5Mrxitm4pnykQmwZCnPDxFW5CeGbnQ58fPJErz483FWC",
  "key11": "vohArKoBDfJi2BHfSY8J3GEizVKA5XNefubxnD2HLdT9FzwK2x957ps3oSRp3HD4wqQ6UJzuFtnHDpSCPZDNg6a",
  "key12": "2J9zJCEwTb9B1QVxnUPhEtEcGJwstVMeMrdwc9KDurSyt95grtBy1LdYoUw3WPZ2FvgXcM9dUHpSpMfaiAU9WzxR",
  "key13": "vVu46XvCdwqbi1d74YJFBLkKBMHqPRe6CWigGFLKLWzUYfWEWRF2ZWJ3pDCwfVn2CDrJY7SfCmK4CSF1kPGVYZh",
  "key14": "3JB4qwYJgzJNnGbzYGVjwTHbM9bE8DSBToRETm6oPPGFnB1hh25ANRw3LvJx7nTKcNuzznDiS3ghFvbZpdAFri9g",
  "key15": "3bq9BAVi6weEeuJcyvhzmBhckwoELWiJc3SW1aaQv8Ds4T5Y8SJLQPWYiW8coZRLjSQBv4TE1vJfuAsAx2wPu7UG",
  "key16": "3TPkK2ATznCDFP1eUmubweYk6dfp25zsRXC4dpPVg1NTYUFfLjytp8XShMZkP1aLN2p73AEUZdx4NYMJ8hJBcAYk",
  "key17": "2gEd4XR8Vc2cEh8sv8jqXG5foofQPmeVeQVtAbxjfRLujQcPKizEG34YLbrqSmT1GpKswUfM9TTTAEmpZF9EwEQa",
  "key18": "5R2STQxgYKWsXgginMMzWUTQAJwLrXcDxaKk3HRpddbv6tsebFTcudrkyrwVMgPZjRXZwfFuuKoyoj9YhQgFuESK",
  "key19": "5W3a3SMHyfZ9MLB8o8JW5qYsJFFQygKDjiUFH6zo8ffxsqETsvy4SsWPaNCdVfpqs6hMmJv6ePVdwkD8z8dp222o",
  "key20": "5CW6mwUGw8EYvPJtNwNu9xwVH5PxJkhpNqHhSo43KUJJZuFyzGjqABRcZ5DsTbwvfTAKus3q1GkAaW7VSnnyvAt5",
  "key21": "A3yqU1TwPAsKk6uXebB5dMMeT3aUqLjUTv6cZfbd6GFSZzUpJLfrTV8KcoeTUT1juJrQJKnX9NXN7z19vy1rPMx",
  "key22": "5j6iyCJzXcqMxAVEpCZK17ik4VxS6VFqjLTAHTBybsSpPhqRKHpZbPGCahStGv4bWSXvZbncZiAtEsQTkGAZvW3T",
  "key23": "2yrDHstnnNK37QoD6kCi7Ji8XRYU7sDPaZUsjtsUtLPeBrP1cdANeeyEFKLmLKjJY5LuzZGiBrPsmcJEckxe3kde",
  "key24": "NuSD1g5EyeibsmSJDkwDSAMURSAkuUH5rmQ6sahYrUi2NDDWKN26dFMBCatcgsyqRu6fLGq3u8AYtHZQQGgKqHN",
  "key25": "4SGhZdJXPHVacCUCKcyJy2vCBkqFh1JWcJELw1iHEa9f3L6zzkEhbqyMbPRG6FdtfXFuDhqK7XEM16ddGy7hb1pS",
  "key26": "2tpudZXv85EmhLMKkQs368VgGNSxjqTqG9mRo2nikMkshfoq1Ch49EPbKTdRkNEDkHbYDUEQrNQ1rCDkXZrt4nkh",
  "key27": "AfsyfnH6sckNNsUwHvfnJMr9DMdJaC6yESs8vLQELJ3fkUYSYcNRkptK1E8KuRoZRes9MvQ54FjgLj5xAa4B9Wv",
  "key28": "2BXYzKsrkAGiBKYhVEH93UeA3g6zxoguj3X6bBfJeHLLHHgbxZh4LRYn4dA9jauJ2jRmyEdgmejw7e7fcHc6CsCV",
  "key29": "33UNKymX6Das9txe8Q6eUSXRp863qgwfuZf9WGYuDwdEgNbeunjZDYhPgcseXhxzC9czQNv4a2cjPw9eFfwZDVwd",
  "key30": "4wWUgbSppZzrLiea5EwgL2zRRUxcoSsrWR2XjkhxQU6fYAFuCySuvg7GFPMZUpx3226z2YzFEPhcTdiE36gPT5BP",
  "key31": "3q2F88u41sAqbHEEdr4oQQiRTXDr1YtB5J4T5Ju5D5TidhJ1NMzFuueBor9ynnGrVU9xNYCvqgXRfjG7tRT11q4w",
  "key32": "32EphmghawKLC8NkCgMd5cEg4i8Gmu9rzDwdEG1sNcJVrTBo1wej38njGXzCKnPvxQ43d4wUmMzZJ7GpTQMsVksf",
  "key33": "28TBXbkrnZ4Pit9J3BpnTsDLRNpgdKUWbhmW9tLnoZUFTWqVB2L3TSkFre8rZtLJ89uLstuprhJEiRZJ5cEUxhsh",
  "key34": "44y4AZYBzf7fTg7MzMM2jMzt5oqwcrwaW55VUfuSwv2tiBBxkeq5JVi1xbVUsuKz1Q6T6RgNVzQ596SWu4dTmHKn",
  "key35": "4RkYNB3vtPPBfTkSYXe7z1wMVmpd2DKAbMRqfTxdJhaq4reJC18NFPEaBVaRhmjHeT2mCbMgV6kpEjJkBG4gdB5u"
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
