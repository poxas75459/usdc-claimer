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
    "4Y94TPPif3g23hnBK9x9adiWg44pw3qV7sExED63WjMUZSNUrJPN7bMLbk5Fhjv6u6YXkvqaSucp2fwHpxB6iWcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WNDiVuen7v2WQNMCqo4gwNNrBTmQTEgekfcN5tgw6Z2QEonPTRbWA1EtAjbogB34tPcXkJoTLQRuzceNkHRgWvt",
  "key1": "57QhQvfUQXVN2K2AcnMWtuG7q9Y7as4gNMMTpnWZtDKGdARfhtjFPK4AL5NVHcx2gok2X62yyEWwSaTMfrutoScy",
  "key2": "3epYYqSRiootBJ8FpuCcEcPDNUf9uKxYVZf7UNGbJZ2R62XeL91HyLdTA1Ee7eix7qrbhjKRzfjSMQd1PwutiBUH",
  "key3": "i3piZufm5tKy2VrPak6E4ktPoKZ5w4dvCvMMfy19wfRkmfxg5eV1d5JTCzXU4HTz3KsUzUp1ER2jqg6xWNxwwJy",
  "key4": "9eKijRPZXNg9pruNCLd2xa4wM4b8NcvcXDHiNZzMEnARCj3j64xvb6rv38QnoLojDCwvh47ZMQjb5VELvpksS4M",
  "key5": "62isD2FqbniqibxopdNuFeSjGMhgfx2NgfzaExs5u12zV7QpvLP9xZGsnQXS5YDMBGuRU1DEJDT5WEZt1kxMCuk1",
  "key6": "G6yX48eV5UoRAygez7S9PeQV75r5aMXSEwf26sFREmePu47Y9tDF8UU1j2J6Mz5cxhKrm1NNb1r8k6y63d7kyNk",
  "key7": "Wt3FuUoLH75wFAZLPf14kPAbuy5T5grngokeGNrWrSd76rFdK2tSyQNv7LtYaXHZ7S44DeQj4tNkP5EgBorWBYj",
  "key8": "3v6csebsf2Bar6SkX7Aq3GDdJ1LHYwPTCuriTZ6xxGhgZKBnFqpDL6cwU5KZemQ7JUFKWpxTZx8KauJkps5v4ZfK",
  "key9": "57KcYQETDbyhtHHtfp6FQ65snahi6hy468oNMqsW2andwycMQsNP6twudtuM5MZCWV5DZJxjD6RkvmnrP99vv3HX",
  "key10": "2QM1iSyRF6uhaodEjVfNn8ouUifM2qNvau9QoKS9MiqofGC5HW6syhwsF52pFND7S4rBxFpPk3HpBSKCqGDp5E7G",
  "key11": "3Xe7H9wcnYv5dvYrkxbqhMeN4TcXKNT6keviyb3mfGMVb1h1mFrJFkk2p873qkcgZ3CBmEGKwu7Ra7w98HYTfYx8",
  "key12": "2g3ZyLGW4vpdDh5Gcy5wG3kkSXuhsTerjMhGPiF5f4wxGenyBmmQWYFETHd9kwLSnusuWMNSjFaKAt6FmsexcrpU",
  "key13": "4HZ2Z2B2zz7PFRnnmz8VUmeTs9Z5jxAkGFVrUqzVe6AJi3xVVL2HTDifxCGQawjB9UDFA5DYTo7JsxHpBD4RDqud",
  "key14": "3jMnFr6dNxJWA7yphLhvm1htsqb8Z4e9pkMLoo6fsrCPJAaYgQpF4pftK8oC99EDrhuFdciFSPtGLwKfcLrM75u9",
  "key15": "66ju5vmBfqrjf18ttCPY5U8YiFHKRTCwv7oTec8Qh1SFKPzutTx5VeU93NSSwR6bW7UNvWfGNdr6F5u5hWUrPXV1",
  "key16": "2xdnJrVfPdTJDNaV1XgexcVFnwRz4kNsV221GPuGFaEc8MUfccqPy4SqmJ6Fhn1JcXsc5CNe8cncnFkxKUVfGEmi",
  "key17": "DREPNH8UZp7tXpRGQq4VVDPwX3VwoMntorwhhzNqhn4sATsNcroXrn548k6a82Xea8g79iLyPkfdhUvo4UDJtSc",
  "key18": "66G1iAtCFMwr8kycXYxuhaC2UoYnH2ph8GtxKucu1FtpYmCXhAWXC23HZXFPdEoDmbEbwmm2YREewDrMd78kJEDy",
  "key19": "EEpaXn6smAHTLbWK7Y4uxvqKUbn37W43B6vPaYeBPKB8rhS1XFqKbdhY2acjVuJpsYZz71rBQjfDhU4Vbwvye33",
  "key20": "4FJn1cuu57GhsicCF5MVdyWBx5JyCD9mfBPGycviJ4e21smPyjC2pXMQKz1YTcShGSaJ3ow95cSYH5jf8LZwHLji",
  "key21": "5vMuWiuKnpuLfn6rjYvx8GkVt7zF4zmcSQqqvD78WfyZPci5AiEE59PCYMAYfjtrf4pQLLDgPGuTWTTCvN2nC6Ax",
  "key22": "3hPyZQqD8otY75QXrE6Go4j9voMzZiNzb4JBicdZwMWiQCudPeEmAMBzDDTHcATbQDdZvaxQkLbG1ww9u35sgCoc",
  "key23": "5hNcWGy6i9DYouXiyi8rxQsREHD3pcjbWjXgpYUR9WwMTMaxjyyQKAqEid7z8RC93Wkpz1zimkDjL8513yrVQhnf",
  "key24": "3JW5xbnJNY8rmBgUXbf26qZvPYUS9rv7ii83fZ2oNnQXzyzwAH6a7RSYK2chAdjJUZLybGJmJpTyiZyHY9aZXEch",
  "key25": "ec9KXS2pc15MxZtc42BoWq6W4P7Fd99GKYY3rqeozeUcTnoXJgfLc8Rb9qycS2DHhbJ4Wn3kNUZAEmeBmfSAsdd"
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
