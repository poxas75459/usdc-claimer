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
    "28rd94BnALp1W835yqRr4vQC1iu1sxLX9hVjWy72NRyjUU3BvTBxacp1napnzsCbEgcu7vehChpkJzYCwvD6CNcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NaxFgzBYsrewPztV43nunxBWQ6tPZUzViwBFWKk5EhcvWbinue7sjoFurqatnE6DpM5TfQ6Z2sBW7sCBMF4G5Ki",
  "key1": "3LWYSH53PxWzdftGRHkMcsgeWUoWsrkRZNTX4tyTk2ak7qREr4asFdrANXtFG4DAQepTcYfuNEPeFQy9FxbU35rt",
  "key2": "3ppc29MsoYcnch3k1fNPyT7UNKKVwGnvW7tLUjNaUXL7cNm8rbXChRyRCkwsZo3srWhmNqf6CUuuH7jhFNcaWnip",
  "key3": "2JCSGjWwVc7Xnb7cetTva7SjmxXWNtTgVfogtDx1AFNqNnLRwu6z7qfo1sc2yCiMfokzht8ZD3eqRxBuCMN6CJ8f",
  "key4": "5tvyvLWcD6ndZBCn1GehgerwN84gY5dowtoSiEYLU3W5RhP6E6PbCj4cCFvdcvqs19WghzFbDVxQ61gAAqdUngJd",
  "key5": "55ryErugGovGxVDx11jUgfa4rGS5pgsLGxGG4JTsjuHfYmexioh2bPdVwLq2jwm45JYZYKyB8WwmeQyxGk2xuKSC",
  "key6": "5ykXYDX1C6FWwP14v7f5TZKuhoroy6MwDRSMFLq1Q6uqND1X95ncP5D5jFLj1S6HoQ7uDctXxQeooQYzCZaM33Br",
  "key7": "3kEfVaNHfBx3Qmq842r3x584BmkaG5b5Tf71eVzgRgSsVU4zcRAsot9Qrho9GLB5AnTS6UTsYP7J9v7uwGf5moyK",
  "key8": "35TLdDgiuQC9yUJtGRY2ryuVjW2fkUoWzkC2437CNiRk7XW4Ri38Xa2y3zpS4ok41XMskd6bjyTP9hRYQ7gSvbSs",
  "key9": "5ocS7VXfVHxq4R32Ky2riryVV8eYphPKnxTT19wYuDsKukQ8KzrnoL96Yag3mj4nWTvHU2LFiAYGcANWd41bArG9",
  "key10": "3AuyjLsbMskPnh7x9Syj1E6BYPf9zu4DLaYXzhT6rP3BBkkBCfk8NJEnQtKBapi172Go9ofR4zusYeb3NUWry4eL",
  "key11": "2jtZG7oBiiaTk4ZsbKnuhsCHhgqB2jTmKzayReDvsdzA7q9ynXR7FydrnWvhbJUHbVTMPANErzgYDZrnvVjcRNvQ",
  "key12": "4FK53E8D1a2dufBqtpt7DXbCUU1NoiPxcsZc8fktqaEca9xWYCtSjNyqvCXsDZHrnKEfY5QVPF27tnrSuB1xZNaW",
  "key13": "3qeP8xFtMy5yzaRZgwRaGXpNknK14LjCc6mnfJiRJQ5wuvgTmusxMydF174iLnZFzzDfAVPx4TzeiomHLggckmF1",
  "key14": "2J7Kugz4x1PZ3QW4HEVbqqAGvpETUzLPseEiWAtvfbkKcJ3uo3fp4ubr6hwbaqnNQewbYicEZXnGsUfEZSHEYncs",
  "key15": "5TypRP2AN92JrdAhPKAF7ChgDhngjBVfXV56kCNgUp924phBXUX4yo6Y7zFtKdi1bQQU1N4BJKrfyvdWgqGqbQoM",
  "key16": "3fMM6vxKkPE2UqKLKLKzahfJiJ6EjJi4XDZYV4FFkycxKPwjeb67Ks1Ysn183G4ZUhJP93MfsYYFgL5RTqmfQ6Ub",
  "key17": "txgTY8RjEd9aNN6QNre4W9wcxbRf2Po7ySCqZ6dZyAR3McjnokyvVV1ieHPqBkHjCC4UFQwPnYGce3tszC4YYoP",
  "key18": "3RwDq3QKihfCM9Z5Kix5qsz9z4iNEbFb1icHane5yBUPMjgMc8gaGb25wcT7V3zbrHatBbATXxfRk2HTLQd3E3wi",
  "key19": "Z9LXzUvv7mtDUSnbZ7AEUjmG1BiWbPKWRGyypHVdPb7M5GvwemFWKkvEtP8gR34T7uNfVwFZgouiCU4sWgAuZa5",
  "key20": "5hZME9F4areEKHcQqdvFW1dEAHmLhufLEWPcvLEJxEaJprvqnVbfay1NRMwwtdZHSMaoqgy5wEPYv27tHAVQo4Lw",
  "key21": "4bVANR6KiTiUKo6CLjfurX8txjtFRb3VfsoRqDJEcjN2ybavJCTWHL1vknjrebMRRhjP8vJ7qSk3LKgbHFT6Pp9f",
  "key22": "5xi1r778FYjEDzeeMRbwFvAJrASysSFsoZY32Q1eoiPFokkev7qhDqYZL4qWHBzzdtGFJa9nBPrYghuMW4jUZ3tz",
  "key23": "52usCqk5FZEQffFCNs5p53yaiTNq4mZwV73ND9WgtUraKry3TcUbXNZ4ZZ62v3A3pPeFxBgJr9gGvuUamaCDNSmN",
  "key24": "3fYgytA6GLE2BjkjzPPdretK3FFTZVHnV15WD9wz76tT3XiDc1L1bqbaawreSmfHBstwvm7WyLVoGXYg5vweDhbh",
  "key25": "2tkn5mvLudyQvAN7T3PY9YoQo6mKw5CKcNykxWdBkTHpmnT8VxxWADCFYppAo9i5mpCRFjkpoA4fBwWL3Fcmhm97"
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
