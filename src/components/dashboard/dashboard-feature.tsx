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
    "4CQctWZ9kuWNsKwUpX9g9o14WtNBGQvdZ3vSjHkUJDSQcczTxoXenQwmrFYSBiwCZ8GRQhzTKNPwBnLXnjfgBsbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bZdgnwfFcaBe8xkwqz9T5NvKtKpieBQ2GvcXjzu5ZHDp6JDQE6wTK5Bk1n3GrZ2wuYHPttZMpgCQ5ejiXc7XQTG",
  "key1": "i33UsSF4txw47JNYD3d9WrDt8bk4b4JqN15sGtBDnFyxa83p8n8RLLoN9Qryv6mZSWJ2DrcqykenQQTvxD8189y",
  "key2": "26KXaNHYLgVLecrmMU6YMqWApySohLLYYhnfvWgnSgPytoQ3sjySMSkHAeV6Hi7jucp1twPXSXRPQf8FFqbfedkT",
  "key3": "UUjVtmuEKnqvnUgnpMYGt5pdq4bxBNy43VApNYYgWZ1JG6iTXZhWq96UmHDfTuATGJfEt6F6KB3Sim1vGKiKitt",
  "key4": "3U5ddoZ1uA7489h7r8eQNDG5mjgdsdDMpmVgmhnmNX5agGqZQVj9bjEdThrUfQ74aUSwsXaNSw5AoUt9Yce5jSJU",
  "key5": "tw15gf9W1PLmjKLchumY7AZeWEzbRYNjGhwGwzcjeAJcELhf2CNdj6TPNnqfQCsKSwSo2AQWBkBtyWbkHY4KqP6",
  "key6": "3aBXMVpXfVuY7RiMxmj9iJFGjBthUDBTNnUpmHq1FXAikjMCBeyvtURkJvSECVJf65NdhukxEgt2FetKYzJN6763",
  "key7": "ozsjn6mT9Jf3CS8hdbtKACGj8BvgUhnj9hDeQEHgtNmGWXxGjMFdPGBdK6otrhKsvVYdwDJG4GNLZUakaChiwMs",
  "key8": "3yPBCGApQxLCivdhG7caV2mUzibLQ6u6dHYvxGaC436PRwtyFFReaexxhbcYwLb92fdpZoEd96WVx1GrGs9iZtqs",
  "key9": "2v1tPs1rDo9WPbzYJ7mUnPrMjuJPP65jVsRuwCuvf1mgrMg2JYpM8GGUQYVJLUXYVmDemWEqkaxTP6uHh4ppxbQm",
  "key10": "3sEova5issb4QMYs7nyYnZvfXW7jHXQdNMqFwbdBtYvyG3cjpmsRTAjMuWQKDbEWkhU5bxrRbY3wx6ajzxT1bntJ",
  "key11": "42UKZakZNdFK4Sw2VdNCbzprTRCi44EkAtWmkYMNbhoHDoatkuLuPx2CiiHk2kyHbvSTi9jgarZmJJYDkGJzZ8cb",
  "key12": "4CWyhK9q7cyphAbZzwfpfeEArAdE2zZg5B5dmSFYY6bqjKNsMuHePhaMRr198Kq5GL8YuwRthmABmo6R3ZsMC3hW",
  "key13": "3BhNxC2TcUvZWPf1JpSpifC13KnDqYSgWzNs2vvJMgpUrtm44PBTcBPWe678nnj1mYQhCvxKcCQizrUd9EGmrKN",
  "key14": "42FapMVGaSfXRYT4ooyDSVfiHeacqDJgJvW5DVzn6vPtRc4kauSD4Tkw8ckZm8Hgq8z42QsENZwpcru5655Ybs9E",
  "key15": "32XTVt2PzaxurqWUdgDxFxVmbqFAwQRUh7N16rLdfSgBVLM7KED1B7aNoogCGWTZk92HWZnWWcsriPohDw6GAncp",
  "key16": "3gwLQ4i4hgVSrTVjkXw3yKYA7gtAeYm3KstuqKrtGV7cJUTEMMgsXsgcQ4zgHizzqYqzF6fCwH8bEGdCCSNa7nyB",
  "key17": "58ucnMkZ59y5ALSgXcsX9jdWei26EBNoApZdNSW3CZrBQoyotNdjfo1apk4sXSSJD6shjcsfm7aG6ziZ3Mv2dKwa",
  "key18": "3MFY8xv87HsyCGszZp9W1ANWFR1cFBneGqy5BGrL7dgvuZzem4Lh4xUHXCk5BxKPAYcjpNsHkCwT56o2251VRCgs",
  "key19": "5RNtKGdiP8bdQ4QzNbv4SDXE6eYv3fHYpkuMYDvtDZ1DYq9KLjqtM6S2JjM2vAsBHzPrTSLqmDabsmXrAMCHH93p",
  "key20": "4fxZ6Hbu6JDYoTBp1uLrzwJMJn7yjogHoeyuEAfJqEmhApt8qFcYX18C9uENHARPqja2BcinNkuXcGYNsoZMohvJ",
  "key21": "3TcuTryeBzLFPKJdF2GoUNuy76RsyQFyTCD1bBkWTDwWf6CCC5wKMmfyNnvH7QoGERhgVJywnPe86oFzJ7YNXZPx",
  "key22": "2mFeW6Dt1omCkDz5nmiSQWPMzbNQM8BavqVXtnHJr6eDe9K34AhAcpth47WfLzLBFr1PEtae8UvdKATKtokyxYAo",
  "key23": "3pHpvj7xNqC1XNzJ1bq7ALXHJ6Fb3HsiLd3hZum8DpTyphvJR5cotzuxfJRyimZm7N5rKHhuiFdtdTCRvicp2ZED",
  "key24": "HH9iFzeLPeTwkjfLjg3zakBBjn5zbALzbpwMsV4DY6hj6ehA4ZWNPvtbiNBT3kU2hquKyF2xTzYSs2ETu5ENc6k",
  "key25": "4SMMGE8t81LcdUhq3thXugAv34QjLTQfBNUyVDyDFE76iWQMwXM8H2nbEZscZ6rKAXfDas8WzSLsLQE6BUvP3jk4",
  "key26": "4zu6N6gJ5tjuJCjYe3HuyqGtwHC8gwMfBqTJFrX3Eb7koaPFmBiveGhK8yHv9P4Q6fFkJ3jZiq3UYDZaDY4gMQTv",
  "key27": "3abX7YVrEVgg9SRd3ZPCkJCdt1kv34cRoa5S7vM2wgwE3a7CE8SKRXsuoXJVaoFopVgcSSjLZKXt6hoRBFQ73zEj",
  "key28": "2Atfnir1YLpTVE3uSVvp8TwCVs7yMRrpn4DsYLwsvS4LVMyo3PzC15GZGQoCSKKZyqGdMR7HFNibdC3q87jmTYNJ",
  "key29": "64VGV1wAks4BazD5bQiTG8kZHq1W45BmbdxM9BxD1XLgNgGaQRo1FUwayW54XsKukmSqJ8HqrxFuEe9KvyRYCHKn",
  "key30": "z6gAAPVB5v5mKz7v8U1izG42Srij5eYso5v77CyUXAAyEAyHkyTHvRsZ5duhDXXyFyz8rRkdB6jB4rsdGCDtnzV",
  "key31": "2usS3NAganPVr8viXZ5x2STKPgMa67ezgPEuUxNfRDb9gK6jvGH2GV3dA1kEJ1ejm7E131amq61Ds7GjpmiCvff",
  "key32": "5NicoEQqrRabPBtcg6BNfzn7pdQAc9E1fZaLdhSXxR2NPXuSw3HVz747V9zkzof8gRtkXDSBGKTpjQWQrMQhkdfP",
  "key33": "3Yh9LxTpLvj6mcEmQDCKSsFgLSRn3AQzJUG1rubMS48h8dKQJJ1m9zxzw2Kbm4JeSjqontiuJN77TAkSbDfPPkQ",
  "key34": "AeppurP5m39zWXqgr1Z7vmLhLgSVF2uYH9Q3f2pag77haodcsfkHfmXgwF2gH6FWB5XiFEBwB7ZK7h8E5E2S5Cr",
  "key35": "52K1wYaehjMsNVZLWjiL2fnbKJTNdFTyEx3o3ou1R4hWztHVapi83VC8eEmSD3aEEoyYagQYKZcXQyL3Lu6ZDAiF",
  "key36": "4i8iQ4D3VdTg3FyySrVndPde27bBxRZ4YsdAc43rQLqBBiWYKn9kepNfYVXfrsemvJhSADF7cGHjTN6sYad371DC",
  "key37": "2RkaKcEmUYi6LvQQgg8TVuuusMSgoQCWfRE478nJkxEPUXYUJybJPs687jCG2SPom7qnuidpViHDxbHycboGsmYt"
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
