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
    "5vDjGZmyd4zbHTMDSSNHYxmM6AQf2LkPzrJgsH7BYCY3sYCjbC5fdPCD4Gpkhwr2ZoTe6nbo5yz5qgBhuKXTeUn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ouPLQfAemaXADsiYiPj9HnUucdGrts1ywdCsuBudFBxWeCTe598hnyPSAVVCduFPEwUGkT5AoPnA4EjCWSWCLs9",
  "key1": "2Buitx552o8CsWMUAXc6AMJ3n4mvy67zJMjuuMTNTDdJmFCfzeqXwFKd4pNyoc2xWuExxwJBYmQsuPRifEJBuuhX",
  "key2": "5pE5EDDmrKpsgLNEq9mVE6oRXV9qQhLmQK67hxsRcjwcsMpTy1iumaSKFk9YQRYjmsXRxCWKbiFTZhFu77kqHcbn",
  "key3": "3VEc3kKY16EFB9aQiebayPiASu2BFLqucCQTdbhhkUxuYTCqZ8aK4LJUsrsdbfNtZZdrC7rtYn6cPXVVhsY65U7i",
  "key4": "4v1DuNCT6ccss4Ck2Xrk5c4PPAVUnC4TroXdj9hMtz8AyGm8ZsSLHrAqg6Hi9cWUWRYf2N64ydfmySZPNebVRDuU",
  "key5": "3m1g3KUf9P2FAMN84gZk6kNLrUjeVKBYgynbT9DuU4nA2YR7iV5skcPa971ReYNin43v2eQgZyA5UWqHhNXSKCzo",
  "key6": "4MmUDs9Myipfh4uqgfxZxr5RhBwWGFeJK4iHzy6zDDAezBM6k1PBqmdFrxvFCHMbG2HwXT6mJx33QAiYhTacbyuN",
  "key7": "3t2L2SbTF2dZHn95BG7DZBixV38wXpPLHpdpCKTzbcFH9gUWpjDgtdekyQtP3JrLiwD6TsyYLiUbCcjjefB6TWVF",
  "key8": "EhgQdCy59r9X2z56Rer2zXnas8gnPnumirQfDTdp9jkuvj1cfmf3DBJXQkj9b8s92EfoHEnuGhy4ga3nn1Cq7Zc",
  "key9": "5b2hxxEavHwDainFmCPSt8MtwVXiHHQRtbR9PQkFv5fSVDtFoHWz9tXT8g7Aqk9Enehoj5ggqDAzsuSUMRUtZAjJ",
  "key10": "4jnFZbfAB4M7tVtKDw1BoqHe137hhTeUp9r2ng7JcNu91TgxF4W5QiRw9WoAeSLKpf3SmQ1Y3M6YAiKh3k9WeWws",
  "key11": "4Ah5Vdaed96oKK1FCN7vVmgnZqoHTnpbvZsLjKnYojHNjz7KY5CpZpQ73ixw8mzepN92DpxCUxkC6otMtEipyNJh",
  "key12": "2F5YukQmUM33uVaGbQNQC3c1c1wUC77eC3HcKnZhvryYAZyLWZtZkBUvg4UCuuShoKTfiJzd5Mqgg9KoLSfGn4mb",
  "key13": "5DRSajZoYk3UUX1QpdFFtfkVfLMbu8kASMKyooeu5kKvBX9QLr26AcJi93QUVAsKpjXpMwjcbHtcAPJ5oNWSEQMW",
  "key14": "4vJep7EwqQ8fCeEJLAfnjM2HPaeeEJhUfQvdgAYCU7wxpWbAzoARvsFEKTAJYz7bX6CxFYhWm4TFVSigoKY7mZN9",
  "key15": "5GhkJLmFeMNb6bxYBB7QqmmMf2iZ8DWHnhCVrtQGmoLPw4FXo5uWxFbcEqgsKnCdxKJK7fERdQ7iimRWQGCDhRTA",
  "key16": "2LrZGRM1DVpkqt1WMMPjjj4qHxZ85NbVq2Lh22zHcV1qZmSwZ13gaR5z7CCv6U61def7C7eqSyKEGCozuCQBRP8V",
  "key17": "4PLf8C3wkNJaQvxgnEPV4XRpSGic696wjNHvuagoUmDcTFf8LwfSc7mXpHkwx5U3XDDUJJBsoAUXv7VNM8MkjAY9",
  "key18": "4yN7wxjeME5e9gBstdqEXQa2N15nnTAcpXeEpVGovZpUSi9q9JukGisUxkpX6p6xRrjHKZ7XcHLZwa9d1XUjUT5G",
  "key19": "eK38XPcm81QyTiGEfpHZQHuYQ118tTZBoYB7QRRZwp2yCK7rJJ35FcaYaHREH6fbYujZZLzsBwWLdwSTtdC7pLJ",
  "key20": "64AKikrc4HNeZEDpKctpVc7JRm5QsAMurLRUpcYFfGaBxPqQnVyPtgfmSLbzhHbeCE6RRDbRLqj7LQ74DwfjhjzG",
  "key21": "5quY4UMFPHdLXaNwQdu7JWx8w5DdkQJjeSdQQ91UCysomtmD1NcUjwqVaoU37C2ZvycBex3uFKEY8ACNzHPZDs4Y",
  "key22": "bK7ubv4jQh4XhefUFVjPVA9DY86Gjw7Tuebi1x6MQuuzqa7apSGrAZ6CxHJZEqFfbC5pX5DoRNRkdcsRJiFpYma",
  "key23": "i3Um8jTxuEHxqz6LBR2N86Sh6Yq8b786kAAujad16QfNC2FiKkSPeit2u3cm63W6rUat4sDTb1o8KBKKg8a3XD9",
  "key24": "5R2VSvCohk741DYoeEDRGKG3tJJR29TtwXhhghsiN985QAqUpQr3v7jGERMi2y9iA9iNHdiHgDe5n5R2iHRHMvaG",
  "key25": "2JXB9P5fgm1NWG6GBtEfzTTGeXSdvxcSEN2owqEKhFa5PVbo82hYkYShNvHCWVdjzESaDtEeCTn2NfzPPvd4v8hr",
  "key26": "41r2jt1BuErQa4jQ2xAVXoKrCpeLeq2YquLT4oW8PAsdUBBhE8dCMPF1muoQ7ZfjmEYb4gzks2FgEdPd31eFuUgK",
  "key27": "wJojLJ24M5zYMJSXnBnGXwsYsf3pWVTooufwrSayBknytjwAoQPim2M6wrqpPACF7CXg63BWexipd8YxNX6pQnE",
  "key28": "4E2wxKBupTFumcXFsmpYMcuFNGuRBZU36DzKPNw3Njowi2uEbxukS9p7zRKWZ7GmtyTnPTxSUy29RFMGsHXi3DRi",
  "key29": "CiKazZB8tzMVk623CvnLQ6v656XEmdsdxbf2AofEAh8BdpWRrf3KEeegDrAzExJuYfX53Wg864bKzBirB4x1jx9",
  "key30": "7n4cRTiVNPywVh62EAiuM5TskzncpYApQa5bSPnnDf4KnnQxnuonCSsgaYMx8ngRhVtwHnZ47MMwueuqRsR1tMk",
  "key31": "4XvW8YK5atrDayFqjAGeZ4K8gtmkqL82w5yw3AsMZ22uE4r32TCsuueVbMYkBddPNwLDk9G7eBRhzvbhZs75HKjL",
  "key32": "5NSTcSqbcXTF9huDLjbQpPbMhPSyEj2kCRkAFHm5d3cheCcxQdZLZxq3vnT1oL8Zc9tLxF5m9vC3rjB62DixHaeV",
  "key33": "j9wGQcF8TAgMecJ3ViAs8ieDE5PRRSj1eh3GjvV3g2DEKxwVaEbXYcPLSzHTT3FyJS7KFfrPjfysgvaSnCnjD1f",
  "key34": "3X4BDM2xQ2tEaKefjqF1uwK2Cw98FMB9oHJvLMygpsFAgCkrx8KZhrGqHdRZbTWjLoUhRV1uJ6zEhb3fkptDF5gR",
  "key35": "5sz9kZDCxXgdc3B1wzVRGQ9ttgFsLZBUvHCQcpLr7htJnzSYDcHZJok3SR6Y8JjBwMuPs6sJ5REPzkA2EZCfc3am",
  "key36": "3HP4k87uq9KxPxf2QGPXaa6tczCfzqodQi8f6on8azJr1afM1kuSKRhnmBfLn1g8mQ3pE7YLwQuuabX9M1h4PCJs",
  "key37": "4WVDf3qx665jroHF674NPbB625fneCScJd4oNXEzdXGtvzKuURwy9TsGjeLHR94Buigc2MNwmWvp7FiZymUxPnvj",
  "key38": "55ffRtVMQ7FCPcCnq5pFkjguJ7PFzRxmXAxN4Zbqb3yNVnRDLLXdnmd35RqFCPwfZxqmhPubJYPVaRVHPwQWqXhJ",
  "key39": "34cLmCqYxovkUR6kHPZzz3QxiRZFLDd4gKPEWYcPkxxefo2A38gcUtzX2GzRArUeF84EwYqjoseNBkt6RasQBVtu"
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
