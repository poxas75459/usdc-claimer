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
    "5MX41L7RZeXE5yRkobpTYnbKeUMugH327282cVrZC3qoqqGYqWhYhMK5rcPnuivJivuHFDZWGqZFo5UfP7DTRyg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "669ZLSP2gXn8ByMKc4rstSt1W5du2bLaKavprjWV3P6MEvgPCFgLFi44pyk6REDPLWvUGMY64qNXAygS2YKjcvT3",
  "key1": "2saxe7U45p84utneVPzC9fVrMhEDuSKZPMp96gp26esbEXfuZzeH8TtVZJP92XzsWmRDqfVyrUMVgkP5Pp6GquWD",
  "key2": "5FSYN1j4MJ5dL6zeQCZB5yUf5CQthVzDNeHUMkr23rG7eNbw3R1TweHQRYNySc5uf4G1oAhDvsSC4NmUA6yXxHo4",
  "key3": "kyH9AA47YxYmUPF8pqyTvgRupGtTWr4QurHgz8eh94THeFMqED9xoRRA5GvbEFdUAyBWFuirfYFNQN8L4DchHaE",
  "key4": "2GHS1AjcY9SbEru6irmjgRKYQt9mKV8mjZg3DQyZZKSnYEup4cuvYMd2krjjJrAgrdM1gQeD8HDJKvrRDqJnLMED",
  "key5": "vJnZ9ML7H69ocmtYs3HvDvJncQrjEYVBYenEf2jdBcKeMa3coob4WiJMNePVYbN22vPA2bTTwC9wxQvee9N8cyF",
  "key6": "2dizHcgfVpePjEVCaNcqr2wCs9yMhmnqEQYGwD7dYdvTDj9EVwtzHkWiQRNoynz66zPWY8ZHwPfaiwSrCgjGSkVB",
  "key7": "2MZ6i8P5TuFvmJyMWTSdRKXEHcBh8SZzHGN7bRT8WSvJaUWty4XCE99UgBa3SrsFuw5sZyhrzUxJcA4CZS8y84mq",
  "key8": "46v1dkn1Zyn8X1XiWKReMS7SU8svaJk7GCdqSUvrAkRxhiPhnkWxSoxeFs7UnGt7Htt4LhvsAx59Xo2AGCozdohU",
  "key9": "5dB2k3jwoXrNj8nMd8vRns9roXPQjLBk2RukakrYdSKKC8HHtHXbjRmkgszVFrxqDNb34RoaLVbEDr5CE9moe7dB",
  "key10": "24ivnt8F8UeUzbkyTAcApRGUFP6yi8Z1vWQVDFrW2b1g7m8xAxY2ocizo1ywxchde3GohetrYvHNK8NdF1oewgb5",
  "key11": "3XbPFMTpNyrDQ5ebFJXDsuwDxoyTLjJ2PnpjdEYKmyetqWAQhf42LQ7QDQ2nRwGC42bE6tNYqod8bWx9czPyj7DZ",
  "key12": "3nz9gyMPL7W1LGz29wsrhxzhfF82YtgED2eLgcpjZYRdQvsZzCHNptP5SJfnrZG86UX4J35Cjh4t3jUm7Zbvh7AH",
  "key13": "67WXhKiP6NC8dicuxPLwc3duRE6Z8DM1sYaToBVMzoaLjJ5Mfn6a8kP4Yy3jEpbiHStp55qNod9nrWBiMi5tZkUr",
  "key14": "4NA92hEgW3DbX4poTwbmhF2hbSiRoNsjW1xBw643R51cQbsLD6RDg6GWPcHT8kdVo3sNmrBoNFFyiaeykMogQQj6",
  "key15": "3vdgKtiDcsiuJDq4hjybq5tUyaqXe1RpK7UXj7Jrr4nYseJR6fnyywhutkdTBKaDzygmyguhMK5EJFdzuTujvzMw",
  "key16": "4wL59VfwBNXsDp28vNR84ac8ML8pRkc68VwvUbcKrHuoAAzYhqapv7gVGSyZRkqiLbRXQN6dJnT8XmJKHK6BRkQr",
  "key17": "wGoBTSroYamBio2Sn9dJrtFZ4ZyQxvTtikRiSggpfn15iAHRA7byLcXRQsfMEeGBooMZSK8BvdJaM1zFSU9AuYc",
  "key18": "5LfPfvKU5FiZuBKrS257NQRrXSRz4YdcXPBPFZhFd9tgE5gkeVCWToarfsNpqNHQBNupA5mu4SuNU32U3tzix5Y4",
  "key19": "26VPzSEQEsZSV1iKaXcG7DkwAMboAumZKisYN4HMkU1cbBuYf8nYprWRHoa3iA94QquPjkRavrLrX49uqirLj3XG",
  "key20": "4XPggcQPHiwPtTFqFYxuhEHEWxKGxKxcioUesMHmcTX6wkzXQgJxawPT6hFUwZYuyibhuyALs9CiDUPZo6SC9C2w",
  "key21": "5DFwfs6fQ9BXJF4FpsgjB1UxqxWZGrPrd4cGJgT1SBNyfTmQ9g2XWYMDmevJ8J8rni8LATGKdgGUKJwLWhbxQyw8",
  "key22": "4vgS7CuwPcDGyvLaBJD5GB13vb9dMTpCEf3Eu2M9LoasJf8zFBdDsCaPJhbH2ebpQcQEwD5pgcYaXHCkMtmKKLv1",
  "key23": "5ptZAL2N78qWbaVWqRmrGQstnW6wgGENq2NPZ5ZcM5kWXrjdhqPSyKr4ys474xzM6C3gQQig56UWbnpqMxh323zK",
  "key24": "3zLifcSVNPPMS5PQLjKTAjRNtfp9QijzetfctNYmcQbFSi9fiiYAQSJn4bk4BbBCYDTvGRrJymDZH4QguvCAWC9r",
  "key25": "2y5LoKFx1yatasRgRcttfJFJLP3HrviPdW8ELmNL9Q3kUeJU2upb7V6AWVGtGSo4Uancn6JPQJ3wTWt1pbireDYD",
  "key26": "3YxzQErNwWojy5Hd9nDMBjceHE4cGCo9kxkEb8uHxcHYcpwhMmjBcFpE2N4VQZNaJwbZ37qZ71FfxegxWqtNQmXh"
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
