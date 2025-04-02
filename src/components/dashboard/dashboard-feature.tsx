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
    "2qZgpSmmPjTg8nBwaXB3UadRpGEEEd1UTpxinuJ5XxRdL1Mz1idf8mNjaCVbJ5QEr1rbGbKoaXANsxZNVaPfwSTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p1qWTf8eE83P7oacJCu3iLPNXkaPng7VyrWjPbJ4HX57EsnVcqNMdypzkp1KGrKi87oTpK1PzNxwCtziqH2WZLs",
  "key1": "5i1pbee5kjCWowaPdufcTqaXJhtXU3d6weo3wyT7iaEFeLzBaNDHZ776M7gzkp6SCLU6Gr5NxCjYrfkhmiQjWP23",
  "key2": "2dHXBa9JbTJFJ4wTxYKBS4Zk4yanL75Xsi9EeHGXT4DQE76TVwYGX41fvAZh4mE1TVChdqZSTKcLqJu5Y8KZV1y5",
  "key3": "2s1XzU7VjCgTxTFs6AsrcjAvGSAiZwueasFctHUrectDdTrS1dAxiquGHcVLhWQyTPGdKwcASf6QHshxYrpFzF7",
  "key4": "4HTWwYx2vJ5UikZ5m1Q5PnBQ2g5GS35rE1zi9GDhqgSPYc4XC11tbzGD39G8BGKEc6gF5NQMi9uhj7znCyLJdy99",
  "key5": "5BUSUNtZj2ehYdMWSuHrdBBoRook4aZNYkGfUhQUrVByHeBbQFpmkzn12EQGJ4hE3acXxntk1mV9kS85C8waFLx5",
  "key6": "2cZirs45FoV5WbeuDXVQMwrh1bYmgWkiRxNwDNTymi5ERAds4sZjpnfySz5W44e62CsbtZ2CTzj8z27KAisa4chH",
  "key7": "4gJwdSn1RtJRXQB8dVcXwtxYX1yajA6SCkcHEu4hgaoAnKDkNBfSwYHPATpR1Y7ZCkCj4Ct27wmaXLihpWXFBWde",
  "key8": "2mTgsq7sd57mQzLJRm8bLkExyYr9gqvo8poAEqmfnk8SQgzAHMVQxf5wLtQNUfRqqcrWgijx1UhQRnt1Yd9S1Lu3",
  "key9": "3BobTNnoUMzTz12L8JzazaShkxABJJBRaiZxjDxJUfAKVmJcJd2drcAnbMuxqrGZz9HAaJZyq71WQVP8qrC4z8Uv",
  "key10": "5MTj5VvQkhLjCYTBHcSemUZHHXS3dEk3RmMUUfPt1WmgdcQYMq4LXeZYWbST9UNkFFzyMptHr9HhpzuQ3VC37wud",
  "key11": "59rspTQVbTt2vqNYcftCxf3rvUtkdamJqiFjDE7MceAnr448jVfbU5APR9K5DgqHdZeS7iDurcp4GR3yKrrYujtw",
  "key12": "5tfMdD3UngAkDmN75EvUSuB4ew7CfiJ3YtvapQR94UMpKm5JXT6BkEBwhgSLDHBYnuaeS9ZemFNxzbzfaP2sFxnh",
  "key13": "4Ea2X8kerygtJTiomi3inadvcLPkbpF36AcTWRxYv7e3zXvfG3de5sKvWVdrrp2tmStH5CNAcnJetArNxmDN2xbx",
  "key14": "3ayG5JY3Nm3Y7J9bZYjXaQcbofAUbtXSFtwkrX3W2NLtu5ecapxBaMugqo19owf77gj4k4e3w8b5DHoV8bBt6Ai5",
  "key15": "3o8cMkewBia2k6sjoMQpVUDi4XQeLyomCBGnkwnBPdBjMNfujavuS1VNXUaDcxgGV2aLsARRcuA7oKxNu2SC4dev",
  "key16": "4YcDwnuB84KEGR8uVJTqSD4kAyt935Fpww2WEsSdug4SaRa3tapEbG8QKGudiQrzbMC4iCYvnZJERKff5FKiFZLa",
  "key17": "46cSPeXLxYsrSroiTxgv4iVdyY4g3EvZaU9622FqQZBdNNsePhVsDcqfbBPZaxrmwGdCuyDnChAfcHkthmqqs78",
  "key18": "2PQxqA4QRCN4Thx4CZ35qXSpAs6eBdU1Kdjw1Xq4K31rHdzoNLcgdQzB6uM95CQXN9WjM5qypjBuuhm3nGVGmjCX",
  "key19": "3PDjAZc5a19dLwzZdAEMjwzYQf9pvAs8Qt8G7Z39Cx9qRxRCTwujmfkcW6SeBGUJqaannPAEYZwq4Q513wE91LyY",
  "key20": "3MxMCqvDaVbZDUbnGboXu15hoZh2YfobAgsF7bVXP6c5mmwC3tyU83Ji5Z5YE6pk2cTu6UAgXESYnZWTTNY1CeAn",
  "key21": "2kbW1kVEiJWnMXKArHbQUGWTPnCj4WBmXuCoGRjEkEo72HgMKPaXu8z3t1PWHDd2xoadAAFCN3NDLFoGAwFKPp8N",
  "key22": "gtW6ppZDPjAnnnfCSUnn8KzBkfRtBnzjqrbKhneqnJBrqFmUQHgDPp9XtGxvtMCg4FZZohKkeXvREh2F6QukwfH",
  "key23": "3yGenrp7AajTEaaDnUidLtQQrZBLTMpuAys4Q2PZ3Yh19fvR9mJuLWQMfbNZ91W53j2BigJ2fa3zMfTrixGGnqf5",
  "key24": "5wUzxQXrKRgveJZpvpNakFJcqP9jyU8KShVAf3PSNWaGBRGwYZxb7iQ5dSgRpULKuPQoiRRmxGA8Ewz9AcKDnxVr",
  "key25": "4dcKrFKbiQeL3D7eWbYLEmn3jrh3iXRdTqy3b4r3bZ4mVT21Q6inaZd7uWBmKqLTE8sikfS8H1bV12odt53GhWCR",
  "key26": "fZCvB5i929BnzbVHBLknnhve4CdqmcSMW4sXzoQQa5s2Kt9e9e2V6AemnthmSKUGTfF5GoTfNJPwegNuLjXMTJ1",
  "key27": "5xk6udYaUkDUyQu3H7mNbGvtfsG5f5r4yLdpQf2jJhU1VM2UVRT1UeuY977MZKN5inp2a9JNxMvvTLbL6frm6pi3",
  "key28": "42P263syFpzxyGKQGazJVL6dNMSaVDv2HPtFxX53PkxXRoZfTcg9WK4YB4yjbkJLaDoiSryAQnst5ibr3dZorDuQ",
  "key29": "3vcwhvy53RrZipUDQUdL8rtaaSqbK5iMHDmm5c1ASJiNzwDthMXzWgAmHEwBWawhqZs2aUa8bS7QK9DvJbD4dUnA",
  "key30": "Pt5ghkReB8bwtG8jr6d4czhq1zyjYfk3Zm9MQYmMJTaRjuqz3LnnXPTu6stDzZKbdnHdZUb5L8F31kDpXWjc74C",
  "key31": "5Lr9eUw3Gxy11YGLi7pdJp9QNXDCbfHv7i1XmTbxFHgWd2C7SGB9bRBMXaiJXL5jyVcpFmqCWoTqjKfbb3MkTjmr",
  "key32": "8DUxGpnLiyNzJoH8KUH54vwW1MJoZFfZMK9YEBmtsd25AUU3fZVG2HVS2CWiBqtFS8dxHAPqRuRsu3hPEx9AbWT",
  "key33": "2upyNw3epBC2NBouSfDqMHDz5Nyv9qbWkGWYAQFbaF8oabYyMJ5sViM9fLSYXsva5tpkbLENsVVaEEBPw9UNaBaV",
  "key34": "3RLZZk14jDuXfhvm2dvB27bzWnYLbfymmDhzXNvoHncuY4HkNav49LSDYSgzvEYCpEsgmX19NUTjbZvkTQG979H",
  "key35": "oYocMdZw5ctDP1f1f9Mg3ib46hDzVv9giJT63wKQr7RTWikyBaNN5sdxhdXkF5TNBM3zucgZUnRKd5XsrhbCVqb",
  "key36": "5BaHygzmJP4Mg7MehiyKah4RMq5cmgS4Qsm6snxEJVXPk4XYTkaf28puEdBT2WzmPukh6VFN7sb4u6DQfqckTSPz",
  "key37": "5Yi6CanjHife9Xef4qAnMWbrn8nvLhq2qv1DyxvnU5asY8NqHCxPPrw4xAh1ej9qLtEQcjnUkAkBkCQNuDfWW5MT"
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
