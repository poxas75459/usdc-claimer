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
    "4Bwi3SazUqTdjLara8AE1C7B2eorUx2ztc4C9U5qZ3YdTpzuvdJUqVU7zFdzJXf5NdmdmkU5wMZsqi6SBUukamzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XSNYmPto6mKi4UxZpYqr4wGffocyGmTS1peM93KU1sd2uHzp5FtmxPmzWv5VTxW9BduberZAywFhSxb9W7jUyvr",
  "key1": "5SGtKe3NrAjdqAjMGkrcVqKWMx6bXAHiXbkzpwZPKNGM4FBFfEvqB45BCiuEDbpPHfztikhbStx2BybZpWMxQCcD",
  "key2": "3GQAK81RXM5CeoY985doK3WWs3RXE1JNayQaojjeNRuMr3dToz5kvx1RPbwopPqsjNaLKskGzBnx7QxszGHMg9NU",
  "key3": "3uuYh1txNWR7GTxXQcm6t4y5gNassQ2vHJHCgh8ir9QyrVieuCfTCbWZtRhDLYjzb1RWtzL7PfyjJkjYpRVNo4Ct",
  "key4": "3Ab6f98UJKQSNnS2176Rdy9e8gb4esprvfrRqJBq1qpck4LcBcZgZhTtEH746i67USm4cirEqPS7hAwceZn2jXwx",
  "key5": "23ZEtpfiX5wGf2v9a1UY4HXESdUFQeeNe2EHv8uAqEQobYu1K9q867fsjAs8NtJL9EfHHFFRp85MMiC5wKystJeg",
  "key6": "2ohcDrEPQPrSZXHTThGF98CFR6JpkKJUmcMhXGz4ezudd48BAAJnrDNrbFnUjxpVFij6B8SZoFSYC3DnyNEpyTtf",
  "key7": "4jrCJcxVVuxY6vMeRjXb3NahFmn51ErEdMXQrRY5SVewGTrbhoLzMrT4qXpQqUXpHXHbKXCgRwbvAZBWeNJsGJKA",
  "key8": "w7wFaUuJZdxF3DUJAWj9gueQYQWrfLzLHo1Fs7usrqZPZiDmvebkm4nawvontfGdUSRAeE66SSXNCAu9kh3utDY",
  "key9": "3QL5kTJ69ka6QpNZX9zb3sJJb8ZLjPEtzRA7AK2VPTdvfm3hny9iiK2Nemmk5AXu68nWPFmijLWvNNYkwxmthCKH",
  "key10": "5SGp9xRMPkwCki3NrvueejFoad583xpJ5RfvhhbVppL2daBWj3EwbzaQQ8tXS6Qw9uo9uvHh44mdW6oXNkMjiusa",
  "key11": "4ZBpjwfh2UG1JCRQy1ETdDauAhVeiKyfDysYrUWpXKzdF4j6figMgYzj6E3cD6ZotPeVRqPkHsnfdtXBL6HCs9QM",
  "key12": "2YVCfPzowSiDUEg381Zut2xiWGRw3AqLmnfQwkyzSkKE5XvmVFkGX5fWUMwDFyRMGeJEajePCq75yQCAE4jq5Mku",
  "key13": "5NFUy2V5REL23FQwwsfYntwNuAyTFkZrXUSoGfFKw4wYmVkDzN5Q3YuAspCwAc8837Xr8YB7VsJyPVtVBoHwP617",
  "key14": "49uTePuJwEGoidJ2rBKR3y3b4DeATD7nV8tGXwwtoiMU1SJQnuoAAks1EE6MHUGKYLJTosdrajb3eehLrqHrpJco",
  "key15": "3wAZuBzEegHoTLRxdPf28g2D1GYJWse2BSnZsoSGFt9HrC86gRUuv7XU9bUpgPdnG6sqAmb4gViEjPjovUePisqf",
  "key16": "36iHvUZBhpBqeaBnv6ki4cmtazUwQfpGzptbV75fyp6DZYH5w6tFS3bJfb8iR8L4b4W15M4kWHpoJPko4S29HsPh",
  "key17": "P4oS3gbf85PdJR7iicHGKxTHPfpd6Uu2va359CcZNcEPorRNRYAEmGzAnkqDTj6sMP82wPLP3WCJapVPcrjKVk9",
  "key18": "5VJnVYiCAheCxWje1U9v6qzntiwwV3JJqfMVVUUuUVRmzyQVfPaumZn9XeGzMVU7VTQ9w1tpVpeRgQ9hanAcp3po",
  "key19": "5JNNiQfsLTskZMrTo86dJWivPyM5u48TVaPT6cFHBrmr6py3FJwiBFSQqWEBrVuAPMhsC2QW88vu5dLiDrzHWUAt",
  "key20": "2ekRGYuDVXDoiui7azabV4ZVZXKRJFGHVb7dg1RCbL4NnQRcm6b79PGgFkWk3PgA6HHgaKfDL2pwSBx2vmPAmAwu",
  "key21": "37yZ82viLnSEDHGEpqeG7VUKoem4y9G1KpJFoCXXMee7zWARQyz3REv3HwiGTEURKTR4h6zL6TfAvrgrPNR9HQdJ",
  "key22": "4KQbpBzNJvZ9S5Zbk9DXRwW227ri9K3dkNj7AwAbEsPKG2WpqRwyi75qfuJnyz9JkenMWtpBWjdY84KHAaCGz1BT",
  "key23": "PovDc4rRT6ot25WzEzL2aZn19ycpK4rxKRU8ovADxHUUEGuKfJqJDepRaemyccYnhT6KvAofrj2tGgpgcS2RB8k",
  "key24": "TF8uF48xpPqHF699ywBCmweFrDSkdiJe4H5fpKtw7YuK1T25V3oCubso9xDrgvyT6pPcJcYXvNQV2PqnQGwyoZS",
  "key25": "5XuWLJy4f4biYeDwDK1TyYQLFgD8B8221shD4RnDyCY84pVVdntjXJBwfy86BjmtZHsvBQ4zScL7MQfLbJZRFvGJ"
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
