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
    "58carsb1P9SjYFots9vCLmekYSptR5PmV2yijjQwJt2cdYeXvdod2eVMY9BXE8sL23kdhZxZjHN6LjSgmGEYcGgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q8kKCuMfqRDG6U4urhNeVb6RVnSuy7fe3avt65XKRPYF915YVMAARPuYq5HLqETHgBiZ2s4Jy53sXsGpoVPSfAc",
  "key1": "3e4CoGXTij6877aatYkC8mURTgotR74nKHznqWcByYHfLiywsdcCwA2UKTpDmp5FiJYLpTr73GqvhKbubXZJqWcN",
  "key2": "4v5UGKadcU1toPoBpZ3DJYjEvwk5KbtWtJdZDzr2Fsi7CkrbCpw88hHQ9G35St9TrLNkBtmkoacbR4csGPC2S236",
  "key3": "5oeLUngAJpFUu4yZQbou1P6BYPYGmzwxxCXSEGCjsamcgkuYZfQnU8DpXrjhXDjePEFJAtBFrYFygUcoi612EXKr",
  "key4": "46ZuzWSWX7DZeM33Qp6aT94mgD5MNHyhbKtSE2GM3ob2SkBtTbJa4EAW6X6PE3nbCW65As5XwQKBLc5qpzX45CTV",
  "key5": "dwUHtdycYyNM9C4piProWj7zmSVt5qH7v6zFHi7hjUKzTFNikTqu15a94WmqQ8eZXrWVaqqgsjSUL3765Vp4ZJY",
  "key6": "37GyzVWnVpxPNFapzM6FksV2NtHCtPWrj4VCRGtbEtfuafsh95fJMQPTAzGXzdSEfVijup5nabBQBwL9z2TFEtqG",
  "key7": "Z4ZqpQUy4bLLdcF1LSN1uQFFCqP6r8UnQYWjXq4A3puGfnT5vbBYfoKkJCsQvcZqX5bJqLHT1cvto511JNfuCTv",
  "key8": "2xsrW5xxkmdQmBpyuv2nUHNXj58fEH6rz3HdVpFFkGearRYo7WKMc9uUrfp7qeRwoJXJEcsXo22gT2q4N96PjdKc",
  "key9": "5uuZ61AYLUrqcSf6FtbZgtPyJzv8k8VszVSBR1MEzHGn4VMnwiMDci2Z2J4FrE7oXd4BhtKBbsYLV1fZpoBcbfLZ",
  "key10": "k4FvMKkx3xzjt59r4g7gJp2UkJt6Ac9Nc438nY2T7YLdNPtofc242KaLH4AMfAK5VCiaaVsk9pkn2nz8ra8tDZx",
  "key11": "ndqWGnMoVuxkSCXNjj7uahLC6DJWBHqdNYFAjNUQKRTBVkMV35qZQCSZupXE6t11o28TaXVXWrA6KzicMRWZe29",
  "key12": "4CHx2Vek7Nhu21zvXkJHQGgmNHov1ipFoBKGSovc5eh8gUoMu4AbeThURPHSsYqkZaxpdvqBBZw2SzEcRciDYZZc",
  "key13": "2QQZQrdDHmjoNfh3XPeLUsaxnhfcgf5hx5ryrJqZfRbFifSRd1bCNpuPL6NPmkmY9XTiyRbVL9ySp25VcAEMKgNp",
  "key14": "47gN8PUHZgJDUFFH5yqpo5ZvvZnyaG3yTM6Pus5qj5JMVKHk1pzfRgx5MCVvEys6BeAJjeq6BjEjaim6Hc5S2uJN",
  "key15": "2DcXkgB5N4xMGCVkD8CiUyzW3nDaCeg1Wo1uLEfWNTsiAN5dNGUE8GKLkfR2A6Gj5EeEWPhbVi5eHb2RRZNKpRoC",
  "key16": "4faUcNq9SgxegUQLUWTnd1jb3yuh1LYejFwsZnyZDHut8RdQ55a1r8DzVdUGfrU1uMnPk2g8vaZ6ZACXnYCQsQ41",
  "key17": "7EgNLva97M2eTKiQf2PBhXhHEuQ64kETqnQ14gnMbnRTNhNJtRBELwyQH1xpHsHaq1QUNkpbtgfRwCTe7wANA5J",
  "key18": "44nDq1sNideY3r4demGx3RMfL9uF8Vfwd4i6HPQxz1r1g7Ua7B46RLD9SbyTuePVhf69bL7EtHCH8nAEBPkyHukT",
  "key19": "3KJBzXtpzSCKYT87aBEwytX5sAVC5NUQLYTxZRHkk1FcWVwNPnCSH99GCKTi63T78P6qQR1QavJmqbxx46ktrRVM",
  "key20": "4WbM1FWeQwpdGvvWCQbAFxkzctavgr78xX7tL3v7X4fVXEEHTeswEZRcHMdzYJktHpEiDGasEkgHBwrQURQ76rtZ",
  "key21": "3xZrPqyF7ACe8DBK8f255kDbNXDeDHrPRQXkbR5ouu4nWizwXxTgES6eHSDvqZED71qm7KNaiMsXH8nWWbagCnwG",
  "key22": "2pNWEgcLDP2XXodaZM3spuk9WgEGnA1PAVpJi7YoahYrhGto1dBmhAtYFyRurAHRWwNtkDtuA3UVxvP7hVrXWLyV",
  "key23": "49867NegVgm7DYguvLV5Uh77nsYT9KRD8zvCQjE4xxcYfdreTQGSMjzmQ38UtZb3vhVAb547XXZZg7wFLFBtWntM",
  "key24": "5emANEkVgWf7gtQHj4C33LbcR7FkLR2wd7N8RW7a3sPcGMvfPMaKYyLjcKKQSA8cPMoPoNzovni9eRsp3wgMPnVh",
  "key25": "3Z1FXrcpYhXPPNPjHN8CsWSw8AmRXRehSwY7KZ7MoYV8sJJmEy1ByF9VM1H4MCP9mEx2JiGWD7FdRVZpLUPw59EJ",
  "key26": "4TPjA6Zg2oDbzUHLipHaVZXn2VRxGftx36cctXD22J42bk3GJgwPQzQ3iFrVfLRWRiNVVtsydQnGwpkDnsEV4J5Q",
  "key27": "eioy6PXjcHTQM9bx8iPdkZEBva5rTrTsN3tPEFLNYY2yoieSuLfg7FpHSYFCWxYZCp3WnFw4TfkDrgEv9jZnBij",
  "key28": "4ELeFFRxgpQcnURbdgJiVUrDXTAUre74m5hEHmaqmxHnXhFuEPWgSWFQomymghZdtcCKEW3zbpqfjSkaAaHD371x",
  "key29": "5dn3pwCi3jexxWrk2rTyFERWEjgY2cMxPu3Rq7zYmTtjEdSw9RGRXcaRghbPqdnzcVto1SfgPPcQSVK4Dm6NEstq",
  "key30": "5R9sVipRZZSFrJzJMZmW2kdG2DU2RfbrDKpMNWp3s9WeedgmN23VuJhxnYn91YNjQfHQoSwkXzCrsepQ4DpQcdGC",
  "key31": "2CjpjKBPsr7y388PXQp6zXPBmQaXfBRBb2yw6Hen6n5azCN1crWfUQM7nRcUYaSJZSAW14wFR2Cfg9zdfgWfXs78",
  "key32": "3TN33syeX1tVxeRdgG9X6hZatubWAcPZuWe3UA5NDzL4dbxoaHPTddxtLYCFnKNZssLr8q9G1V6tctyzha37heaM"
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
