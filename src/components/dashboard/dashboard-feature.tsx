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
    "3pXvBjmfPv82fNfDARC8hhsL2FjY7TWa54xnDrXcPefbvUs6awSA7RgucHVSrXjJ2VX5RGyeQ1DsTSzaxdxoLdev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kLCn4K2ELjV2zU263BN3qTorDbJHz3PeKhfZ14knAhK1zu5VL23QjtJeAw5TNeBf8Y8EZqc2hz1sL1fe4BRuzuY",
  "key1": "3SVS2NcpZy6bANuNiZYshrm2GC2bC74WAAU9o5RGevjprNAmaLamoyiVqPsfjz77LN5yiTtd5kDV4uxocg1Ru7gG",
  "key2": "5LRkGswKvXqiFjkiFmoZniQTbxNp6MHgUttVLVbNLacgcbLkwtviT6Yey4hAc9FJjwEkQZpsjXAJFCgoG28yhvf",
  "key3": "3Y3mdn5boZxvwidr1EfvjNDBkNd5DG5gqWT5fvthFQHDGWGAbJ8vXd84wE5w7HTPFmxjyFjX5uyxUkQy8hbdTeWT",
  "key4": "6gcnBFVvqBHQhT5i7hMpZi9e3WKx2gGZgLTP55BzonxXioSUjEYAXRpv5uvxKMou6reU2aL4JHp5qLmkw7PFoKg",
  "key5": "3mfYWHwRPm5KGhVpW6nQewh721Ke4TygV6tPEFspZis5ueww9uLHLkgcznyqr1ukTXnbiNaSvqYLaxE5TmwpQTbw",
  "key6": "4tBTpraCJKFTWFWYxcroHq1YY7AdVCkHk3NUnxDhADdtKuAnTvaERjJga3t24bFtjovdsa4KN5Z4Sr1MZPUxnG3Y",
  "key7": "3qYboGy1J3w6fqDA7DM59MyiAqay1yYj1cVr65mnmDfaTHQsXuchKE9QXZjSpif4bLQtG8XqkEkkbsHgSKnWiYf3",
  "key8": "44vBcuKubShG8mvYW5HQ6Jhtag5YRVF6xe5UKd2awSuQeucA6qe81gwR7tMV1qccy82wihERuj1oqZK5vS4eUaB7",
  "key9": "3Bmy9TsTAj5Unh2RKUjJDqmU8QTBjCBNdaCc4rTH6ayn8KmXF116d1xvP6owTssbNQpjQEGpkK96bkUHAXaEc3gi",
  "key10": "5WmKYijjhULpqJUo7uNY482jpDhAem9egCgkk2PjRMRKEfwS1uJvJ1hMrDRybLdk9aBxvhwPiZn3zec83GQZf8Fv",
  "key11": "dYAnhREnmQVSjmqorRdDhVkRjkwxpEsvSdbnPcidNZLNRsjPFBw47FM4Le2Vmm4ThnGXSgSEj2xmtFoL3KS2nB2",
  "key12": "3iTXMAroEXKy5nq8cPfKFmRnojKmPL4zxaA9BK3i2PSNitjVAYUbEBnqf5v4NWtcg2AzyKhgnNMEhDmu3XTAeJTW",
  "key13": "2k9qdM9TtN7Hv94RJmxY735iPvbsbZRKQWPbCVaPmniX3ZjHf7gok7trH73ejwsSn8zrLrrdjLGHHaZx1aB6XVmM",
  "key14": "51f93KhRpmn8LzVWYjrnFdhjbspe8BKUh18UiLreuosQd3SRpdTQZxiFHuQwdu6NX88gLsnvjNKon2gkKGXAJMPP",
  "key15": "Kxx5SEPdpv1UrNyH5nsR7B9XTHQ7V6Y5oMxJBD5UGer5vNjqt6MraSNTU2aPdwJy7FTwEt15j2NS7TCHEGcJBM1",
  "key16": "4udNsfW2N7LY5ESdmNcR9mnmrZd6UDc2aPxJyFfLQTRBAD7oM8WoT1bW32S8BJ1YYN7u5M7WAnaPFCYy7SmKJJgR",
  "key17": "2QonMnq78bLhADJCeJvP86qNYu3kh8UQw8oS76jHHpj2YYnWcdodccTr8eCnx1HJZX2vyYyuyyCBHzUKut8dV4Bd",
  "key18": "5cnBRHSszXuwrRBAnPNmtEcWpwVEuccro883Hpb3EKFtKBqHDwYeZYdZ7k6G68fM3QDJunztBvfjgYfkQWP58tDd",
  "key19": "3GCP7f7UQkqUfsgU7NAL3AS1tgtxRADx97YPm5TCis5f98p4ojjtK1XQ1WM4WDrEDmFfKdfjAoGVQ6E4SJBsGR6H",
  "key20": "4Ni9zCbSQsycEvKgRnrtRgqwY4krZRtPa7io73CivUiJStZsHXYY2GH2kCxkZo2UNpAgQM5hAAXaY46KiHCaZPZA",
  "key21": "4TdaUuSSMtqKQ6KBQEpE43KGhpxX1bExB1juMwnk5uNbuDxfLsyTJBRb6n9NbAPFVSAgDRhPF3y21djbxvQ9HRAd",
  "key22": "4gwPSPk7MgsLe4dJLr9LToM1p1R1ds7sNUeVGLSEmnQvvM4GkqAxXaJN8YAhbjECn3syqPt9kwFUJ7iBersysYuD",
  "key23": "2d28YJ5uGY3oQcf1fsMYwpepDTZAyRo6yWex9JKyUkbVMsiZv3d9UyMVfpDxfSMjB4Yh1X96ALLBChE33qj2ER4x",
  "key24": "4rrKpcqMFNqKA3nb1h4hoQJAaR3cAP7Nq8PWoydaYXCZR4zoDTtGjmiEdmhZCfoFHxaLAfpM2JHhy2b91sXbxpx7",
  "key25": "5fhNDVYj4CUQdqKUzDeH1sDJXbD82P2qnFXdLQ9WDFfHKEJhmuvgLtHxPnXS34yMQrsnT6arzrzCKbhwguyqtMyV",
  "key26": "3aSdGAQkEQvJEvG3i2tkMWpCuF4LNUYSHePzi8wA2JvQcUbsyFiFnFGejPYBg4SVJBNzLKXVkrohviq1A3SQmUWi",
  "key27": "4ZWYEju5jWu1cnxGhL2vThbpPktLLg47eRLP5VD5ATSRywZAH97p8upY7W2XW7ZcnzMCrh73F2L9MhprdZEMAW3h",
  "key28": "3BABVKARGo3oWkzRD7TL7Xy3KSGKHhXGh8J56Ps9wkmP117EWSy64smW1hbpf1PRAaxvacwKqocsN8xMs5JttydR",
  "key29": "3xCm8nzpPXq4eT365FVGBuVgrhHgneqRnpaaebZ7DUrDnoDSaLvbBqmwjFjQvdGK3pQVVW9rUo83Buza1YUATKK1",
  "key30": "JUPkPGLVvR3BnXRo2QbAVzBm5i31diNSG5idJk1sXGXfonUkckBBqZPtvDiis96DTbM9fSUtRVqLusRX6u19ezi",
  "key31": "4LwqThTGddwbFCngqDXRVm4QiyKgFoFYAdUELRypFDCw7E2tobkxkz5mqCSTdN5ADPkf8LWzVYt9Dp9pEY7oB56u",
  "key32": "2aCwuQtACgJcDTRNzuDy9mTp7sscvFPyQ6PM4BsHSqvSSzvFhpe1M1jQmrejgghieHsSSmtasLawXw4A4WNdXgiD",
  "key33": "3eKD6r94qAb34NPkcycEU5TGxtWBHyNhPxjvVLLcdKho29pqvMSdQw8T8uFP4bYoWc5PYDe1qE2UWvhZxZji92Uf",
  "key34": "32bR538WJhR92QLToLuP25Cv12TUCZuEDEGBsZQfdVQa7TgkKHL67c6tqq5e5vvtCg8WmjRAFCQRcqc1aqM2VJDb",
  "key35": "41h4HLMXmi2FmHvd9QGrEHdWfGzmGo9Q1TSi3dt1HkkC7K1VGj3qyvmWoJNxT68h5p7Bw1orgyfc89f2HVTMBmwY",
  "key36": "3aSuphTBjAZYMuApCMzpJHFbXXaGboqbeQVfGoRUErhNbujfNd1QBDdhqfo64eC6MsU2NJ2Vmj2hmFnedvupxczn",
  "key37": "2YKB8hzm82AbiZGJpQfBTD5E5PWnJ9cgkohuPf768VsdM8pbxEdetZUXbab9Am6usKGurMbToqMvHCDJp6q97cJc",
  "key38": "3Emuk8wQ3imP7syEvDVaFqR3No5NVj9LxmTVJ1wL8vrLSidADEuVjAGgXdK9bbwo1mN3mkg9tnUaRVDeMCqaWoiZ",
  "key39": "2CA1Vsu5NMuqqvPCzbQVT4YLXX8T2PrHMxV5Rhbqnd8rtrJJdRpYzR3T5u2MVJm77isyQaePvCBY6PYZFT6ytoVN"
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
