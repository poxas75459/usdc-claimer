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
    "52GBt93AEzZNHzfJWZ6RjGnmCvEogKVqGE1ZaMM47jhgZVmSLkZiX1wmHW5KLR4QP2hvpAXkDwpHQayD4WpNJtsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6xZmrzCwvvU73u7xud9jfsQ1RmE5FCffdzf2Bhx3gx7H1rYEBMRrDwxxVr3x1uYBaXAQG2dFWCnQSExFbFjwYbu",
  "key1": "4fG5KFLZ6EymcHqmzrgjQxgRzj67RVmkhekz2yWxMPF3bU5ngC4KsFJtGTTic5J35ZCVvR36RLcFPP9JkF46wHmx",
  "key2": "4iYB3krJVvMn95EZg4JVgpr7rnjDHtAdkip43BJvpjA6nSxRagMeEMy2zmCmxkb27o96B7HdykmrCyEByHnUeSS5",
  "key3": "5h6XAAkDksEin1vSDZKBTa5jsVRLAYZ1LQTPXGGD3E7hBjN5MGxVcfMwSpZ6dJ3HyK7z6Sup87W8oNmtFGF5sG7G",
  "key4": "5odycDNrMmX256z4cAhaGAqqdjSfNmz5ppobjGRuW8V3gwFxkMnx3VDR7nbVSsW4zQaD2hDm6efZSjXESMFcMzPR",
  "key5": "chjknPAm1p7Fq77RZpyqaUQ4Fp8RPJVvovd7GcCvMq7f4oPc3APcCZLX6VULGQoCCAhunUqiMYUUcF7LEFuJMCq",
  "key6": "3mNpnvaEdTPCa19v1UTN2TZAySUtPYFhzcV8bWvFmtC21WwExDg18eQAMoDLr9L7aHf7kzWguyNz6KLqSRJiduki",
  "key7": "3UFF4TPCoVa4H3Z2rBJak4Nosda4i21MC4pynRx24sfZyVy1UEzyiSav9BXeY8EhMmSG7EYXFvyj28UXq5eKzMJZ",
  "key8": "27S7wfGPMmMmi495yPXw2AsqwFHh5z6mnpfowzTUoE6oki2Z77AZUxctQpA3bxbvY85nNPtnLiwwnzYirtd1WHce",
  "key9": "2S3NWbspmnsutN1KQcSoReX311y5hZMYtg6r8PokpHKfYQEAa5xGVaokUsugxK1HDvYnA4BUibbskjNmePcWNBFQ",
  "key10": "ZrHsHnSeQUS5oXt1KB9VpT7PYzczeNYW5sYqwrqByMwp7kVsR7Poy7Qw9yJYKwFiaTiyWUrpGHvTUs5FPrSv5jb",
  "key11": "td8Fj8vHg25ySzJCpBFXvEuyPZB2yYyZ1TMKCbgpFAXqybw3BXFjkgBED6neTocS5A6BXCcMnh9h7yeu9Az7Uxq",
  "key12": "2L5UYedQHDcDZueRfqiNjcmiwBa9hUrt6ubnzKPVmHkRZ219s2RBUYoqW2S7YmgDyYfrB8rM9JLPBx7TpGDWZL9o",
  "key13": "38TS2pC26crDovxc7R2EJ1wfwZLjWBD7hWi9G2eNqPu32w55ApEAXt8TarBZ4KnVFPXoQoXjrbKGJpk5A1cahfjL",
  "key14": "3JM8RjLk9V8p48n5vQUBSsMZapMD24hHvq2TXcBquVoWLCnB2kCsy3UnaW7roj4codahEhafTCYvbsia1UVfhk49",
  "key15": "4THpSEBkiJa2Wv9xzbd1C2mDrUid4y8cJ1HsmXRutCQqpgWKd7uZNyqr3KVY2t5XDnsey2C9YECM7i5vKUyGazGJ",
  "key16": "468AYoRFG8T3q1PQ7S8x1U5KEAvp3dH4prDSfJAJPuvgjzb4zJaZ4W8yh7kPPzrG8PzvxqGdtYUYdjKHMiWBDFLh",
  "key17": "4gYFCPiKtUJwMzgTea3CuCHjK3EnPEDe21pmQnmykcUGfxfhtKkse8BPvJLbYoMF5PStVXeSEXLzWNDuxdXxZBFg",
  "key18": "2KUo3vXv5G7nQwWty3UjKaPeaTbuo2BaPvGPopsnVHMGtrFBTVVH1EamEvpFZgEriDkr24D8QCWWVGMu5t5NHoUW",
  "key19": "2VoEh3M3dzG7HitdctCrxoxHK9rwcytxSZDSaqNGZ8TP9pvT2CSc9rH8WshPcAfCpCXFTrLW1Jhnm1YsVSn13Pvf",
  "key20": "sHGg5rUUaGzNk13XTeEkaSBjA1FfATnd9X1bXyqjayB6xjAjFzXfTDzyRwfFMSv82ZKZthv1djC8bvxoEeMxzjb",
  "key21": "439JBTTRB3ubhQJ8oMZ4NciqMfpSrTG2YYtkEC3hm2HCv4p9JZSNrYcK4cTctcdo65JMrWUGDyUY2BxUuHsSJ7da",
  "key22": "XQi6GxrNFsGZXFYrEtVf5y2reo34uZ1h5dqjFa12B7fMjSuFceE95d96CF1kf1nQqBcVPGvKptv3RnsjhE51124",
  "key23": "2WkmHdcQH5PmhW8Pe3hmEoURL8Rs8dxEKtMzircnejoD4hrqre31anF2WwQEgb8pHtVc9CjjM7v96EURNjqWZMAX",
  "key24": "4ynuiL8Rvjmx8AjVSSmYUHu4TtpgzoLoHxiQWWzu7UczXCUF5Dk2X5MFBWS11ycdryJnn95t4AnNRWCNv5C6AFoq",
  "key25": "kqbDcYhYHYaUvj8ifpX1xGxwYSMsjjZuWVz6ykv1ZdoTaQTA254CejWHxfAFXf9cukvzQSbccps1fdqrNNLhG61",
  "key26": "36Vi6JLhzLYn5DevzuuxaTekJNXaxi86tcFTCpFDVgZw53Svv9U9q8kvRRXrgdaTEEA5tp2j6wVnquX9JnooXFus",
  "key27": "3E25zPtPvTvhdR9K3bvNrhdKPbakat4psPEt4bnd7uXrvyqWkY7DKkKYcaJyB2zNB1NSf988YBLTmFyhXMJ7XckK",
  "key28": "PBEJ8W2jEz4YPpwpKsX8W5Fy2Tzf1fMsJkBoN9F7v6mVo7Ha4sVJTtxWXkprMMR5V2wVyMGU4ioJBz1rbGuAUqv",
  "key29": "5jYB33gg1g9Qo4kBW8fEzUicYtf1ZE6tKdQYT5JqfGhYJ7tdyvhrmSs3PBvJH9FzMUC7Dwcq7DS7rxNMof3EHTnL",
  "key30": "4Y7pQnjs71Qk99fNeaFKMjNH2qwnHg8W1DdTk23b8NB5n8NfTm33V8UjMjd3sSLsFSpD6WiT4SkJGsn1q8EVLutu",
  "key31": "rJQMRmWNddgZQcWATUR3ZYZAhJB8Mt77kCShHcPHzVfq6oz74qHLAQAK2a9ng6fZLMmvFhjzzwAKmwo1VRd7xPR",
  "key32": "36QNRMSYnbNeeW9wJSeBiCqzzrrcP9x88FxGbSMwF7zuWfeLCZ7vfxE9VRNu6JGNwMQT7BxBxucudACnZ24iXZe1",
  "key33": "3NMUpfkVCgTVt7kUWnbNWdAWyYrMQLeAorBjJamDgKZrG1D3Pb2q3iNC2Ztt2oTmYPebx7x99yorT4Uat8GCVvSo"
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
