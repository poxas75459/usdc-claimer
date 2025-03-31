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
    "4ewivmpnJrxCNVbAVNoqoNwGCHivE89GPksD3G255vqXvkvfke9FUionU6CoJG4Ar8dCYd5Vr6FxG3xusDsxkPQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ygLxqC8QDMRSGvmtgTjn9tcvdwsezWGRZUzdJ9dCTd5hY3UyLM1YLBhWsruXWchAVXJfWg8QjzHNnmEsUCCQ8LV",
  "key1": "3CcLYRURbxb3nXGwWS96cAZDT3dmAwg6dk12fZKbqrNq9VHm4A4sXCTHxqnfsrmj1oJUcDzu75hrXghPg8VTnjaD",
  "key2": "3qf1DBG4jwPDe3Z1vBVpU3xtW1o1yHC4H4wGFK7UyxP1N2k3fXu2L5nFaHHVsYC2L3jf8145VbjUFZ767dxbEhTW",
  "key3": "25Et3GKDGMnEzfmuybJjgC7FKDp6mWJjibXf9EY1H6CaxE5t3ZtR1kXf2ZJdzwzKjaKduW255hCzJiAAV2pUsG6P",
  "key4": "25vJGnzxMRZEzBc33P7srpCejR3AkiRsLeq5wD575mwLQRydbwZjpP4zvmnBLRSHUiHkoNiBXPsGCYHH8j5Eu9nY",
  "key5": "5ugvwqC7zhXkPCHh883hi6FAHE2LC4YmMkLKuD2jvPmVJLcN4ikVWVxWPgyUbSWPodKAaCF7owQwP59wZdgG2sxa",
  "key6": "5BhrHk9aoNQx3cjCsQQYpfLpB8bH3MtFYrzuBfCBGyXLavafz2qtEQ1XgJ6AbVTjtg8AtLiPoyzG9TTKW9YXqJxV",
  "key7": "5BbJ7HzoggWE5fpwzQByUb9gZ3h1qjEn6h2SKCAJCZxSnhRfJjkF8xYLBKTzJJASXz98ub6SQGh3pS7U1186vn28",
  "key8": "scWHJdtbDrWBkgAuMHY9XfPHTSEQ6v1VvsGodkC4Sjn2joFzxZrBmHc5p2erXhLZQWWs4bxrVnVZxWGV2MukWxR",
  "key9": "2dXsaGuCBuE7N6tDJDehZ2PppXrkDTXfSPxqbQmacme48vHVYGNhwkydor1McE1aUY7TELWwuw9u2Zjnezni2vnd",
  "key10": "3CdeYUyUXyVwyjRk7wUZRABNgwPAKvDCvNqtTVGFCMiVJNMsinMsmgbc5epKaDwgvNA6XA6TK7KLfoUkrbUM4Qdu",
  "key11": "49WmmXRRVC335nHHR3z7YVg3gGYdSieuzZGDUFdshdE1bwbksYrJ6tXe6WVrierAVqvwareSQ8DQdeuEmZPsoi5f",
  "key12": "2zAQue4JNG51w5bJMQpLJNaKMKE2vUCnhaBqGUFMPDT9G3V6ZD2MiZQC3yAoLPk4cTa1NktcWzKnHHVBDmKbedmi",
  "key13": "5ksADC79MMXDCpQcyVG6iFzAVRgKS28J7b7GzikDBJtupxvtLAYzzVcc7JRWrTfZXbYSr8MaoYLfSfAUq8Hr97f9",
  "key14": "4J96NxAGfsZQGL33YzGoPUdd4TPsT7wPktMXoK4eYqwg5C1mMDK1j4wCerY3MxTkTUgy6YSezhKZnm2K4JJsY7x4",
  "key15": "4ePGRxTxF3JEcsTTj3Mi8AayZEJz22haRoruNAS3v19M4VCRFGLbFiHsg4MjwrCuPebGuB9BQu8nc4br17ePfviX",
  "key16": "3DibphSSeJd5dLieekoEYyAaLBDbfXJG74jo6GLT4HS1KsaCoKzwhvkQX7L4EgPy7tDNFwempwzqV8LZ8U3gE6TV",
  "key17": "2qxe5oiWMn6d8aXWigjjogJYHCRSWXNEFtpgp1xfy3fSaHbKYwqNtaowsY5QAiAPoeJyvkDdHGGDLbYFyGxxiZY1",
  "key18": "4oxqwvKb1ikPsk2HASe6XTYN6BwvXGuuvBh39FndbZDuq4U27quNTNeC9YXj52vtbYGgsAVqVmz7oQ9MEveBBFew",
  "key19": "H8UNiMCepJYKGnE1JVFAEmBCCnmd6sdxW9N58Vsmibeomom9miJ5wJVf35u3qcpLaWXi7owHcJgK4jF4QnX7Ngb",
  "key20": "5qKxYu7aU5XkHC1r6WXKFY8PrwUmCuMTW3VWUPa9xM7gdc33DzddBh9Ud3v7YXpeMVXP88daAHRXwiwXhazzxSFe",
  "key21": "5oUt7Y5gyzScs2FV2RdeB7JxMzMBKyBhUnjxXcZAtqUwJGyaj8orBtczkRgtN4887GnCDX41FV6UgEWVAStbsmvM",
  "key22": "4KbwRWYPxAvL5QjyVi7v1EkN2ESi1nvHTjdXsrRvyy7jG77k7JkbgySmmZpByyUUb4EKudZbQA9CGRfSLtgdPxKJ",
  "key23": "41xRj6E86r9gcz6SnV2oodnfnXLSyWy4vdUTCRACnxpDVBR2AawFPdHGNxwmVUN3ZxLNBySQrBsT9s6MT5mxmSBk",
  "key24": "3V9ZeYswspfKRTJ3kANhcyRoc5G4zHieEzYkHQGwTw6QSQAeXXgEGEsZWPURAgGMD54yhrY1sC5RVVBYCq9kYXmh",
  "key25": "4H1ggP9J1umrDqcQmi4v24x16Cay6x47SFF2r5twq6PP4HpvhXLoEtZuDgzE1X2xEZscZwCag8v3F95ezapQJLBP",
  "key26": "TdDaAuLdoXXXyuba8fjmo7BuSGu8yknmuxbeH82o4tcUcdzYXtK4ivTJrC4dLPa1q1s2GfBMPB2ghA74uQS3jMU",
  "key27": "27QYVj2n4FrgvUf7yXiDP7tJ5U2x7AYe1vyqki7SPeY6JiehhBjgXeuP31Md4MRqC7xSLJsCeeP9bscQAshfYQVU",
  "key28": "5qYmmAekzRPtV6mviqDX2tyf5HkARwn5FX8hfehNgoxsoNaqM5PNM8f6kCqCVH8qqz7RmuQqLe7vRhTndUTLAyFT",
  "key29": "5NHaA22nwRoSfYKftf6q4JkTMRquk3vXg3fmN3ouThJ56YJEvhRcbkXAmGTaNEqqupaYiAbnJNTdod7oShKEhgi5",
  "key30": "gfKYLQsZsqiGLCRyf3femrrt4L1kRRKhEFNAicwwpYedUi2TDXkY78pewm5fDFs1YuwNoHricoYrcGbB4D376xg",
  "key31": "35M2YK8mzjHJWiJVFazwyQxWJjdgn7Zv5P2ViUtm2R2aCfThwU1XMxDZDARyBT5BsArcbsnpDobXUuivAuRZWhCW"
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
