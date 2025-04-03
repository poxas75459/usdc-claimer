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
    "4d5ki3Y2xsAiEPjKk59463xNc6zhr19BAb8ueVAg2ucn4tcGo589BygYmqkaTteRdyLdHZ6sPk26WKMkEiQhZErb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qrFY6zkQFBVZrXyP3ww6UmMagpCVgHE97ofzL1SQoS8xPhJhH5weULhNBsYBwzSctnbnGpCykDb6qc26EfrUrZo",
  "key1": "3YChHd7dCS6pFRpNWBnhchLAbDK43vCpDjq6ZUM6nycpVgsGNQgApmtETuWXxACLkPg9h9YfVwz2A83ugmfWgZei",
  "key2": "5AFdzFhdSu1uHzek4JVmGPacXWg4N45Qxb5MJ52QbLjQfBWgdsn5PvR8RRjqzdz2JsALGLrtffGpgWyv97TaeCUt",
  "key3": "3RzfSDUAbgdRXiNcbshzDssHKsDAzK52QciMXitjZPeGEvyuCzaLKnsR1bpShquBiMzB9pqSRNtXKW13w1dTh4RK",
  "key4": "4ZQ274pw41g5LFBa5CbkqcczD5x5y8iGBf365dNq2XZFwKFN7wVK3krbQgccrvBLULbYkWx95jCNqCwWotFaBAHA",
  "key5": "36bfWdrRYm4NDBPTcKM6JWGhj8SbaLedr89AgKMz6oE5jtwdTCyLz5dUxkYUb5bs5UBxT5op3TqHPGiHUsPUwGFJ",
  "key6": "38F5YKZsBHDZF29TzEWwjhdMPsQXVxmeAd6PgtQhbjLSiurZdHzTWDxMEz17ZGSdfdF2ERkhNXGUxmNZe3FbRzjc",
  "key7": "2mWzrMBT5VhMMx6qEjAPb7MGhj4GPyznXyNFQA5jP5MU1zieMocjfvqeraaRZsABmqGpifLyBjQxEPm4CowmWkcE",
  "key8": "53i4qeAb19yFKzX6wvCa1wX9QqdbD7XqHKWY6UT6FTHkhcLQWjf4swMncxX7vWMWZyRqEViFP33dDX5c2u5jn3tY",
  "key9": "HtS6DTJaAtBidnKefQj9FPo3GPWb7AJ1wd7E97ySbDDHHAMfwGY2Jcbg9vb9Cjfb6wBUjD677rgiVCetCW79Y5Y",
  "key10": "4kzBQzgVvtnJLgLrFWxBbwyUrH8toVRye3PuZFyVF9W9PWN38RuPHMMVBqAwuCBABPC2qs4GxuQSRrgcRZwW4PVG",
  "key11": "41Rp8SjcTRFtF3yYz9hDiPboYAQbKdyPeDGpMrrMXd8ZiSiLbXTqHB82b8vi9sisSfm9XnjC7CrNzDMonNUgPs9K",
  "key12": "3s6M1fx1E8WuF3cQtARZ18vdLBSNY9oA7xTCuyVfu2C4nJvbCC91jt6EzCzqSbHMc459KqCjvQScd1ymsPEBTp2F",
  "key13": "5cf8gX8y2fAzSkmjr3pCUFbKaXb8UBmDioh3UGYrHK7R5aS7vznYU7XG96ThSMUjtCcnoJi64ahxvYxPJUx4SF2g",
  "key14": "526dcrnQcHDHTj1eMFrVMWttkyDhh1MhSHn8ZaWBUU6F9AaHfdiqJMj9bNFWjkC1xgNmefuc9uAHSAUWCkzXkP8H",
  "key15": "5NiXUdDgmD6H7n5oAVn5vM661TML2fy36ruzEydg7xF18HrbDmiXq3U4njgtQn3BNRvaGkB64cBv19vPCZ35QfTp",
  "key16": "3hSiVfyCBYztpxP3iKV7DrJP7Z8uWWRTKPgHPaBzFMpDJp6uNBYz3F61j5EUKE4iiRbRD9RqF3KDFFQetFNUmbCB",
  "key17": "4RjLf9i7QyUQt24tYpAQ8ygnrTRUgmbkHCQaYgzYQS2gmseq5ueaHzg7KHnuWeTaNa6Js2xA2nHAq2oQBFNtSqDQ",
  "key18": "3ix2CXhqhfurtqbXe6iLT4gwBAMmTLLBDkRfUvzqz7cnV1xQTjCTRnKiBSCNAGD7cxX4wjFsmjcQuBAfLWGjBNsE",
  "key19": "42wt1uKGLnVU9NWAZcL3XwpLHuvu41H9UXah8sgXf2PaL2qTfwihmwNUX72tQetRYbkJ1NqyTVDogvcQx9cmYzQX",
  "key20": "3sLjQzb9vn1EXMyrtuhb1Vdw8Z2KC83D9JmZmjQhTPR3rAA5FAndkEAu2S5MkRCLNqHZEfRzAcECVKo5gJ8aASB",
  "key21": "5rD9XW9PVEc3KrSqJePVGhhiAbFhLikVrRF8suBninwTdxPjTfbbKQAnpPwT4jLxfL9FuTBsBt6i2hR47geZPVn4",
  "key22": "4tQ4LtnaHdzRyv7f3y5c7S5VkrG7FsZ4r1JCFQ2Vpmn48YddPQZA5ux61eqxqK1jyJp6MdMTBjM8CHMThjJvLiGT",
  "key23": "UXAfsMb9xpvGDRxPe74WJ5gmZFNse2LJfEAcEDciC3RjEF9qTTXf1MgQLtoVAFww3sAxfNtWkmVdMuFXLqK6TuW",
  "key24": "5AY8pidcb7CodP2VzgJXbAmLBvFagkDSb9KtPBDoKDpeeZxha5Me1imufaJUYBLxQoozYt18Z2eTsjSqWfnAAk7v",
  "key25": "3uwm7W3t29w7BA1piE3WLbQPdXpjFXymWc7duc5kXbXDcsAai8C3pJM7zNYLXsz9m9Wd8ea7QTgktwQAaYe7atoT",
  "key26": "2PNrSq5PEyTST6SgvGHvH6yoMGpVuuf4b4mJswRHp4B24SEBXiKexDbf99vGc42GCS2o48h8XxBwH5Pfsk8h8Up",
  "key27": "pcNwYPFnaSieBvTKTbxBsMoEauz1NUv2RgmpfPq79P1epHccfpbLdKFRXwC77sHF5xGzQzXRKX8h35odmNz1P94",
  "key28": "4axiyvJt1kP6tpQgYU7y3RGEGHxhaGEGTxLtqXZ7aH3C6mEZLpn7DVGFy2Uq12WGbTjBfN3C2dcQuBcPc8ES9Nbp",
  "key29": "5DDJRod5PQGz8p3iRHDoyshsf6Pr7sUWQXuoHj227gvhPbJs6oymFhhJktkYgjTq1UNMrN7BCr9sMBnKRfuvzDNT",
  "key30": "4zRjbKqVgLKNqEuRFWBE2dY5hKLp9N25W462drywGTAbL9PbsiijXjAVKgaHJ5VWfunSUifcmWd9YfKYV8MuvLke",
  "key31": "2FxJqy6ivG281FHmegZvA9rXA7NuQLx5s4mXDuCyrEp4YFUs496PzXAp5kyMLvRM1bnajE5RfbEjZxBfgqodUzGg",
  "key32": "4o2Xnzy2pWWka2G7QMiLYGEeab82iTyM8AfemAz5RGNNWSF4E7ZUxAVtWd7CSD1c7Fng7jG7fDSZMFwxY3S1YWU4",
  "key33": "2V3a2RNtSFqog8WKAmhvD9c4vgcUiZ6MBtyF5k1VJZwGYtuGcnEVi6qMGDMgPwX71DVMsEsumj99fxrYQdZLo1qN",
  "key34": "5Ykb7jnTFiuZDHQN56JPH1avyJZsraeM92aDfvMZpwrcqAonYzqU8bEKVz2HkFkRrgpgaFFVvD6K1WG6NYAwQJud",
  "key35": "qSHR55JKec7QqqZP7JWWuVyKtAQcxJYPaQkAQUVJGJw1Ta5z9YUUmtNjT3JZTVFApaTWnb3WDgREr3APRFhtCoo",
  "key36": "2ykb9GhLa5XKfhvWcisGkmwoGNZZy5ZXFp1VCZswKhL4rQY3RzBddqgLEzcbU4wmBFB6zDV8n4ZV2GpYhHdiPbox",
  "key37": "5nZiY4mDf1wiq9czsjvYEcjWqMBhHdpTnQBredbPvYZwGyoDFoDD5qFPv6c1YoLXcKzSu6BfGUaSfFEjzHMhGNS9",
  "key38": "3yYR2vKDxKqa9p9ntuvrM8cXehwBWsqCeMqdS61zYMpFrZYkVUvLUEMg9KnMfGPQQG9H6UJGiMBTTpcrX9jhYr7b",
  "key39": "5bB2BuxaxkfMgkn28rN3kPycptZSkvg7uHztkAZVSK4QwpAU7Qp7EoJpY2Zmizrw45k97LyrF2voRwdaXAX79pL1"
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
