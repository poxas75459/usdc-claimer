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
    "hRfNb5zU15NQNkebo3jpjcfknEF6NFgHqBETQDi1M1MBDAodVHXAxEqSmk9eWpf353V4SgVwx9fwHUhxTPP7MYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46BWbfnCqNKN7cerN467NZktHCyKVUGFQJTBqu56uJm2EgHgZ7KVtmeRnr9rMLeiLCncX7VMPicAouwX9VWQ9BVo",
  "key1": "45aNgbBpxGr91fbHMWZSFcCGjF5vc4pGx4CydpRoM9WU31A3xTDbLvprqaj8onBuEaECwCTAAPqmSSqnahv18m7s",
  "key2": "4xNDKi3neZWw1V6F52VqHZkojnsQkuQ2a13MWvVyhyffCUNper9FkiSzPGDuUhmPZh9BAcPzweFqeWbBatptECVg",
  "key3": "5xpWmR5QGNuqp6e7SeQRUoCrDbsF172ar6eok4AAGfWxmbm8KLy21wBrB1okXyfZN2pQVeCybNGR2fqr4fGsDZuw",
  "key4": "rz9jJjeB4wxjEgfv8UgE433oEkEQWUF85kgTAd5WXA4DA3wAP7N56BBzpLeC3R6Bb6Qqq4khNhAMnSzUoL3o1d4",
  "key5": "4c1UtXNhCxXe4K6yhRp5WHAg3fRFhB7P1QaDLv1D2M7Pvo9tsiXFsecR2Bqj82etrjgAEPHV4xkoqq4Gh2yCg3R4",
  "key6": "61gbPMR5FGwPVHspiUThKWZbpiwQ7SwZWFLnY1oa2kgmJ44TQgmDS6SCbfkYVBf9dEyN3NLG5a7MpDahvcwrDqxN",
  "key7": "4FgWCw2y87aPZ8kQiuPPt1VnFLEtVfDAGYFDX8PgBHtVqZVoQT6WL9ok3jtM2VhN7pQ7VBMuNCNh6icEb9fo46jX",
  "key8": "4FJ1u2U6uY3HYu94Hnv4UWAkD3LaWbqqF3pMBykaTChbPzN62trcsEJdRhGZ52o7vA4ynLgfLth8i6GXT3VgQTQJ",
  "key9": "5DUVrkZ9nWg9CSVX4Z2uAJnn68QzuZQBsf3sjP8FtkBjvfwZjFvm66NM6hmuqn7LM5dCbsyJUXV2vfKLjxnV4q4m",
  "key10": "4jgMDJZ5FLUa4syVFEh52vy4zxFDD3QnCj4tvnwNqV5Tzhgked9oks7zzTS5VZ9DKAM4H3zH5NouBrkhsnvE88Nj",
  "key11": "5vE6AMY4A7etB3cm79RsJ5bWdGbFf9hq8rfvHMTx3jjtN86XpP1vNr5AQhXo1xz42sgCjenopJBSvUVcGqh4SnKo",
  "key12": "5KjTDaYQnsCCNDNnFb7BvnLbpuwoRRVJFBr3rMDHERvJKwxmWNSQraJhk1Un1iFwQPqK5Jq9fceTvEdvkQWuFqeX",
  "key13": "2EChj9ruAAouWfzahGn3HSP9Q4TBk3YjW1xfLCL3pZgFj2xypXujxJZ9Z2McTVKE1SEoT8edpDcBVjsodGyVU1f8",
  "key14": "5VFMU3wnE4h7sfTQyEciK1V4aq5Hs3V3b8nkRg5v1Nwkt95pnJo4PNJ2XDQDbjPQMJMMfUgWU7WoXiNoECRThwXU",
  "key15": "5LrVVDRsnuR6TM98vyoyunojTAZV9fZtCmfjBACVKc9N2uj9baz5bJdXTNM3QkTDtRvjG6idtBeS232muhcAGcS5",
  "key16": "4YjVJDqmbbW2PT7J7ErAH1UfL4N6pRXBHEcSBEnKf7eSqpS6KVGUzJMWQqfdX31geqd98LZ8LJBhHobbBb7Mg9Fq",
  "key17": "2sHR4DHcmTJkfR875JkqrwsiLsxYHZhCm7UD9HTVudpYQHbyqjEof3efSDNv4YrcE5KvZ8gNYQ4gEzdmQjZ6ub9t",
  "key18": "2b8s4pgL4uFFWu3GVoP9695eQCTmZjPcSkEmPvmVEwuz5zwCbaA6GAHacgrDuokbqRBdn4iTy9pXDautCWuThMJM",
  "key19": "4Erv1pK8EMLRSVJb7hWWDe2t9Sr1T7ZGkQ5mwrYsyS6NCXG8ZFEhpXM3Kai2dgdHNM8cb5NfCqc9mBUUYteANLTx",
  "key20": "ncHbrXYJRFdUWGxqfT9wHDK3C38H9vfRLAiwhLvjXHTzuKdExAzstvk64iLo29FYt8BwiaoKZCra1S1hTxsoMZX",
  "key21": "47u51J7btfGrCpqqkcbrSU6yoeqksuxxaPhFfpYEBf3GJohNL17Y7uGi3Fsf38TtTwJUHw6SWA4Q6Knn663PbzzJ",
  "key22": "3RaSUwFAnoAQnzfoZ8xPwRN6e1PvvHRrQeUdgV9duH1qF95bZh4twhpwmXzd2TkPZwB36oQFcZR8Bb28zv5aYeyn",
  "key23": "2qJWe3VzHiRPfzTiBRSTL2aiMYCq7JeJL6pHhemwzVthGN7ahkiN6bkxksptLFSWtKZSWcNNddA6uQ9vpa81KwGi",
  "key24": "CnHUwAo8Fiu87shpjBamfEodPUinveNVkgQijZpzGpFWWx1ARcrYysxkY3QKjLAFae9YQY1Y4PKuM6RoBWioRcu",
  "key25": "5uBEmEbvGHK4WtscnoFwTrGuAqqFVMdnpqkVu2Y3f4GyP16Nu36rRes6kh3zNQXvekBrWacgtDGD494rGYzq8e4x",
  "key26": "4x7HCUvsH1SETcPgr78VHxLDKi3ZqqkuPpWeiK5WjSZ1g5uTDfx2syaojRZ5ykWzAzpKt9F7GyzCUg5t3o9xUfb",
  "key27": "5wWPejmtm1wsa46VJ2xvDY87CKyh15nzaDMXzvJiNfdazQKMwqpwatQhSEpHmtg2qG1tct5tcV5SZ7EhHps1TuZJ",
  "key28": "5ma61A3kniB8Sw3qNwrtpPqZvw4KucNJprRauX94srkpmJUvLsBGLAw2WLxxNnUQLhfFHag2DK2Q2K7Myvsy5U7v",
  "key29": "4cErAaLHx8KkuuEvU9yucNR26BoJfYj3E5Dod8f6Kqa8xDo8kWW79MvotgshiYBRs6KE4KHFQZDc6ibfiysd2s5R",
  "key30": "45kpWUA5VR5UViMksodAvkEYA83gK4yXugm2YEWpENdRncp3PMC93KDXHvtDPWLoCNHCYfKG7U9fqDZ1DcDJTykj",
  "key31": "f5aQnNm9WT2Czui93jbnwqe8HRsNBhVFLNJjDhxqXDSdDm7jBzie5NZiobaCUUoGco3i3bYeZJAN7MucZ4HYbKH",
  "key32": "2oh2HDngkxExwKjeZKE2EX3vQKkoPqKhKZxZQ7eXMfQZ1WGAhqqm7nLKsJ7tQS8W7p6Dicya5BN6d4ns4rPW8d63",
  "key33": "5zbdVNsAcGqrbZaxFc55eEhCVQm91HYvwvRJBGEtJpq6snW9W8hCGgSastPPXnuc396NEV8GN1B2iBu529fqws2S"
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
