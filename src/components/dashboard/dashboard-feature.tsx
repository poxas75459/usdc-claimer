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
    "2VWu6VLBKxiuYeVVy1TmwYz9uj2V47fCPyuCxDdEGLPPJJjp5bCoxaScfCcQg3zhpaas2qkY9Zrs1s98tAo51Mhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZsKfGE51vJfYNjCWxmSS2yDQN5CwGfrTLsBLVSUrCo9CATEcr1qpATe6hMA8ii7BHCYiK4s4eQi2J3Dd2cTTrHV",
  "key1": "5BbZQw5VZ3NcDoijtjjA3ooDvEBnxoiw1orBFLKtRfRmAuwY7Kr14juTVoMD1coLdfQAtvsriW6LVCPPPMGrR35e",
  "key2": "2SRmvAGXhntEJ5ZQQqrScHRpTC1VELzCHBhHpm8mrzMDTveFQQFBAbDDELVCPcZcpX6EE1HPDvBNiSzB1bGMdfvh",
  "key3": "5PF4g3R2DK13Upk2p8HGRVET111kLR2AFJ9W5ye5atd6R8m7hQx14UU3vAN56jgVpW16oJX92EBBwXfyYH6dqW8b",
  "key4": "66zDUEF9AbqgQ3f5knxgFuUvbbBWGe1tRQf4TjCdrrjq6q3nQhVB4q6qevVjoVYz6gRFEjZpnZ942JgSRzwLGKau",
  "key5": "4frRBsC3oNgwxPrR8rFr2VDJF9LZJbgJxy9DhxTMu3n94jrqLyDsc8KAbq2f5urTLLqfqXxiWJqgT6PcuMEuRbqi",
  "key6": "jmmTeZgAHuVjjkMLqda5HXUCHqYZfVWd9uudX5HZW8aSeFihdShZWXNuZiFy3La1dU5QoZjCjxti7t9qPa7Qd6s",
  "key7": "5HaFs2GsVLcpDxdNFc1wUUuZSBW3ioh3K4myvssNV5wjLeegt9D977DbXwjBBxE8EGf2N1LpUK6oXt277u1BcZhN",
  "key8": "muJfGYDQ3HiuP4kxkiRZhnq7hPXKDtD63EmPyfTBjwY7Uxvjc4EzJW7GjG3gKXaCdaqgWH5AXwkLSErM7CCob5x",
  "key9": "5NTMDJMiuP4ExQsSd18NeYEqA6YaZsmoxAmaeypqoq7hLwi3UWCfmLEsTrPii8JHV6VwpKMiWcfYKyrn4bDYMgyF",
  "key10": "5UeAwZxrrdj3Bonor6Tr34q8nLvkvL1TgfPeuQdCH8hSZNqBqzRjddykVE1tkB1QR23ZC127RGPu7tTxGbLAn5BQ",
  "key11": "rnk3FUZ3CdC35Uixc9jScVU4oZ3iuLETouhSogxjqcfMHHLiAHowznHPkUCmcFKd3SuT4ENRiwDphmEBF3fk2Xs",
  "key12": "2hZhXShtP352itcNJbiirp6skXWsPgY8V9FjnZMdsTpTqvsE5LdZkYAcZxwTmJRPPJyiF4cAgMHpQ4VSdG2kdrfA",
  "key13": "66wBq4imxdiwxanad2uDMd8XNb9ic13cVcib7fnFTAiaCc1cHCHYtq61zpZtamFJKLNb8yMePp1rxdU57dDPzT3v",
  "key14": "5y4r2oH9Q3d812UZmBgRZQTJzS6kbQEki5gDZT9hmX1H6cbWVdvF83ji6AVxByvuEFkAmjsR3wJ2omzpxMQiLA97",
  "key15": "4qPXq2Yyj5EW247jeMqtw98MrQYzV4roSDy9rkJZi7qNZVVpZtTNw9PsinNkVz1nHJ6AcJQkHTRf7smcnjETs5Nm",
  "key16": "655SshFUdKPMuFNWafxrR9mm6J4aR1wchUTbLvegT8Z3fJmzukw9Ce7NPaqmMQBNzYjSRvwauwPDbAkVPj5H3orz",
  "key17": "4G4UQeULmgMg2BPdDgAG5iWHrVNgjQn2uR9nLX1q4ergFDDARC8fxEs6fnVX6ENP1xbYX2F4vxhEnMEmukb3SLRd",
  "key18": "4wiQGTxXqfdiQoKtRMDNf1nHnCYxhMeecK2Jfd1GWPEPTdjeRXJE6CVhtFX1HtchLdC4KmZYgkVBzn9BnZVQHH34",
  "key19": "2HDbQ1JbqiLTA9JeNyEfTKKmRSMXVuQ6G4d8HUecP1uXtvg2kigfCgXjjX5RcUpGoiue2Mf6DSHxd8sQfmayr5hg",
  "key20": "bi5ERHUzvcQdVAaVNJnDZ53MAx7Cxqwx7v2sTVEzUCyyZQ5nzg1Qzwz1czP8mqgUUUAFUTcWr24xMUwupUfwqkf",
  "key21": "3BzAwmsiAV9hESZXfDfNoMWhx2xPp6WFZrGhU8x3hmH5SJbi8hyFKSEDsWdYWSNiFHKSdvfBUcnipiYfgTKWBc2R",
  "key22": "2xyanKLhT5ov1cKsXpoFSyE63jgT4CfeFrbs1ZNPXSWVJaHvaJbCF2p5DaTSVW6WqqCbSSJXCfAaVdGnhGTwsiy8",
  "key23": "5FXXv7p36xzyDcqjpGuPkgexFEE9edDgLRjvb9k9SMJrpgXK8UeV6m8gXXrkCRpLLZ7EcutDey3qrsXUeSthZgXN",
  "key24": "5shr11ApTJTcfFJeAVMSDDUe6ndCNvdnYuFdVDWdLxry7TkCbijLpcodchEGbWmgkCBrPHPLPU9FMhYh6Nm5bGhQ",
  "key25": "4JPruhfGMoKN2Mypttj52VF3JVonaB2KsvHRTfHW2WU2mPuPtaMGRe2LsWDBQ6Ag3P9K1kGyLPqNdUJ7F5AFw3Bw",
  "key26": "2tDp19RGS8F35vgxfHsgq5KknT9AA4ZFWxYgyQqyjAweqvm6dHwRS4iet8fgsn7iSMWkjNzATWsZvCwMJ1G3gm5g",
  "key27": "kwKfgJUHw1RdxLKhkdxW3kerwFU6tpbfYXiDFjEuiQ1XL7hedBSNiin1k3boYzL2PZPB4st3j3CbQmAvFcDkX4P",
  "key28": "3rtQ48oSPF6NEzBb1bz9KgEx19GYgvyZc5fyXDhps5F41pJo2LGqJBDUChm57XUecC4WdasNGJT1F9z8DkNxcyJt",
  "key29": "22FAvXHhwbDX7bnSLCp11cY4ZF7s2drbhGdh6V7oCg9Cz8eXGL9x7ngETWJG56qsoY46yGNVGybdWPtLpohF12pF",
  "key30": "FPEmLJ2nWLEH5Ra1i4pdZjJfJBKKinCrK62PAfcHs9Eydqq51ZhohcZUKZcVv5pujU3E3UtFBpU5JbRd5WXrNvo",
  "key31": "57JkcKDKW1pcjGe8VzgiGjPsYUqsHvfCyDX1NW16pdYUSWbYTGz6oHFoa7EGoYRL45ANnRS5rvoZ4mPvh17ESkxb",
  "key32": "2GrPTDaDBzyBdNDJpkppBrp94tissHWgUixK6YL7LyFZ5RTstS7iJ1WYBzMkBangKG4jJDgeeeAQVqBd8fxXUnKz",
  "key33": "4XVUKBJCA3CfEvtabPvwjvPbgGUy9T1Txi9NTTZfdxF4CGvE49CWr5wuSFHxW2ETVPSHeJ8wHhXG2S7GchLxGJct",
  "key34": "2Z1AEa67pXSNLXuvEf38xkr8dyTzTzLZepQ8EZLKKJiT6btmtE26ez2mk4oXwz7xoWL3ATaqbpQsMyHJtRMtiypr",
  "key35": "2RrvURZeHdLXJJHfRUz2wPgSL56YpwSUkwzfaWwxW1z52q7i4mpw4uocg8okWYTivzeAnKvNyJq1usn5f9viZ3nJ",
  "key36": "3wctruUPAFtqHPb2P3DT7xk66oLgAGaXGduRr5nSZGKH8C4eanuiWBCh8j5xXiBreygpSXZcRdEK9L3voUEwkUJL",
  "key37": "m4zav3Q4jy4VxWsuiQmrwTJVdtRieY4KjqHgLWKpQgn2XtkkUfjh2ZXyxGi4gXCKWwHbytRxJKHkjrXSiPcTXqW"
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
