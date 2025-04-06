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
    "63sHupMhXyvPxhtSo3v6KvzFEKtgY7mcwAHvieZPfqjmm9iqTYT1QKGoZb9ZLMHigyCEWah4z3MmW4ehqqpszGD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53DMKLhfsooVfARQ5pMZjovd3J1ReEtEyBBqVHBiyreS8iRrzNZx8vAJLtCAXZx1nLV1nJuFzPULEs6wqiyVimJT",
  "key1": "2Vc31ak1wr4W4yCKYt4Vqtv7FzmZPBoJ9sbZBBBs2wrzVBJL4hE9GY7GS62pN68prcx78oohUST9q9gEvrsDBcRF",
  "key2": "4QmKx5L1ZBdfurxEzRdcWmeK5L4AoddaZcnvBFxkjGM7nRwCdzyp3jUaRNYJ5dr98s8Usc4U8JprrbcR9FLJTCKw",
  "key3": "5bfijWaoumkWsE3c3U4kFZP22nNp9YCgC6kCgyR639b96roy1murcZUYtonvT6ukMWgft21E1EYgVy8N6vD1rRrM",
  "key4": "4THnyNTNMidf7tzCHbqKaNRgto7kCQdifmKqsVxjcoMRcppcNZjujxe5biwBzbo8jzTv5sEkyPrr1TLRfydGTb3Z",
  "key5": "BCxud7CVy9ovTcdCTzYMacBvCQpEyyyjzNmPd64E1VF6xLqKCerU4MSGRgNQaMsA2BpUuoDCtrXWTPG6CorDSQA",
  "key6": "5B7HMqbSenwrXVt5dWEviSYZHjdqp6tbNRhLcN8agam5JfTTwC7WDBBq23m3nVVomwfqBxmm8gJVdMcrdX34obBe",
  "key7": "25A1b6DbQPYyPXB9V5xeY1ape9WYxdu98NQM1Ye75mhi898vPrRKYd2ALzFMBymgk4As9MFPXLLtsocowSUutPfp",
  "key8": "3tjspN7DYCAKtYvjmAW2EM8qUPJnmvTeUPf4MKe9YcdSp5GxaVML9vMgbsiVvVDTrSnCnTxgxAho4JFpfZ24MUCv",
  "key9": "3T9TeCiqSeokvCMuywsXg7UE6L5hBU31UzP5VUhGkia6o55tCNe1mKkmsCeAvuU75w596nyyxe3R3ZD8Bx11hKqf",
  "key10": "55JVAKpCpGcyzMK6ihrCKkU9Xf63ZCEPcLTkqryJFnzn1DZB7DSsCL6pTuWfmR6jp8vi4argUGALE9qQp9heKP1T",
  "key11": "xdXEXrngWTjVfrEeyHwjtiCznWpBMA55HF9woYpQU1fGvgP1hkNHQfAWEtpQvnkiLD6UhmL96bcx9itBir1J392",
  "key12": "5zE19rDjPgKC7sepQZpDD3YjVRzC8eW9AhbaLWtUm1XweHaz6RkUHN3br5JBpJfTuzSNv7RtRALVmKr8c266AtrU",
  "key13": "gVfoyBEkbWLVT5FhnktoZjqgCc9YTftgeDyqShyqjLBPcp3w9XYQG9ZT4tKQh4dzL6Cy8fS7RYiHZA43Dd6JMrb",
  "key14": "3G53KBdXMDpGtSrcWbA9uCFNUdWFvcBfpZNEN8zfWcNT6frqC7pkxyhZSJSZj8xHWNceEY3TDeD2SUtgGXPJj5jV",
  "key15": "5dytwURntD51kRJKyaxz3UDEF37ToPkcLczV2DAyiFMRw9rtGkBEyoMR84hCUX9kLk153Sk88dPfoLQzvdgfYMpp",
  "key16": "5nSL23p4qtqgb5M95mGgUyZ7eoQnE6rT4SGVgug6REn13bdRSU1oe5d6JwqNNyhCNzrcpX8oaoHJLFWUFq5WdxJU",
  "key17": "Fza5mKABCPKj78vPnrEg4h4K46hE1yUUfUvHq1mdMuEG6ra3nEn9gmHQQeJQ58FdHhdzPwGzZfSnSPK4Ndjormh",
  "key18": "2tvz2xDG1UZpCtSAeNJZg6qVSc7eRZziw6xVdXmrjsoYpR1NjfiKmT2iaHxUz2ULQ8EVV4TZbCon7BaGyTEcuXXx",
  "key19": "46hRjfeafy1bzkJ1ejspwnpvGuSGK6p4QRfortnc526DrF5qcF1g4RLLtkE6xatVrFuuPW12ujYes2i4zgSbn1tS",
  "key20": "3giQpoH4q5HzBzLyHp6oTapU1381kNBsU9RF2zMdYs5we75HmD5uedjJ8nXYTZn6svpMxLt7fVJeqbNiJgT8aF2E",
  "key21": "3WPXWFrxYTis24ED47VrsHmDFmyxdLH261jRxNNkFjvwYF5uLJ6LDCBokSDhpETNKtnMue1zi4ssfiorJGw5hJyz",
  "key22": "3eBsbogCGpqMgU9jGAQLnSicmiz1tuwM58VyDR9wehoxTfWvAAUez7vPu8EcBBqb2Sc6HrR61QijdiAq12ntfaXD",
  "key23": "2oSJUn3R5acYxHiAAb1G8A4TF3q5jLavUGZSmC12Y7vBhULiWhdDmdidsJ2XSNipkqdo493wHm3W7MAa3pGTw2g9",
  "key24": "391sdbpR1oCeLVKQtn6XRWFwGKLgimsKvj1mhfHZCjHa5mqFbt9xaY3VqvT7YCpyws1tc9BCXZB7oKPV51kV1CLx",
  "key25": "5knWoBdpvWRbe7bpWs6kVDu1jAgsS13MNsz5HvyYoGFwL2FUJBQLHUU1qy89HLPNeAF2HANBWMuu3A45UGYgJ4ce",
  "key26": "4ArkSt3qpT4BadVPAB4RbUcLtuYMrJS8rzpVX8fqWKV1x1BbDPAosQrtaPESxuFRDVQAm2YrgZr3rCTrvFvBaDNN",
  "key27": "4NGwmicSLPcrVY4oeVAJTYQi7w8AKddjmZ75FA7A1ytSF3qHJEPv2yPP42o9K7vcLUmW33W23rHQ2vkMWpnUMTrX",
  "key28": "25eESqiZBzCt4sd92eDkECrZgoCqvqrRfgD3fTUipWBvQwjne4nbqUpjc1cH49zS5zJihpxBPjKuG5mmDMWSPJEh",
  "key29": "3ow26LD7ZKEN5b85RkmRpiUcHfyQJSy56DzscMnQVCp5SXig6HK77Hgp6UzthZ9wqQz3T285PSK35TCTk7PxYLB",
  "key30": "4zyzy9mCys8yoktaF23UcHLkXHXdbp5XYy2vBxgqqGq5Q4uWubtbM1DDXBVoQYmFXF1odYyegXsTrArFPQU3ib9c",
  "key31": "tNNnvYffe8dkdUXbWQmxMg8uejUsx8CNZHfzFyzoBUJbpDUaJaLuRnsXAHCCymS6xML1meZAiqv5kdcKRYZ2XqH",
  "key32": "4GYYRAfR6vYa8yYjbokqMaHrG3nKrjAHTchjqNmBF6d2GndSuLk8prCropxieX3QMgdszFGQRnhnKaeuJoUGM5By",
  "key33": "3qhUuwUZsBwP88KSxbzecXyYutVxBwDpnyLwmTJRn2CKJyE1b2HVVPdzaKsdgau7tuXHyxG9mEwRhhiArFcL7KMN",
  "key34": "3JYz7C992qgKSPqMhGujskttLK7fDoN29mbkEy75tYDSD1CGaVQaJmJ6nDX95NeGwtgsPmW5wZcCNzD95BzZu4ci",
  "key35": "rzHMmZyQ46N9AHGc4BbQEbrwEgxA51dXSKXHKh6Ga9buwELaCxyTKy114n9dfbRFt7S7whhyAmdw2C6ykzuUrGH",
  "key36": "3Q98TBwCr4tRY1Zo1E8h5kiGkmt4xgsJ83Eu4K1HGZDyuVaMAtuDGFKEAUTd9BQhmr2XrDEEwDYnNZHkhgmWRQeb",
  "key37": "Gxs17WW2MFwEd5PyjfydgJNVDQs5ZVgQS8JkhMbUBMxwn91baw68hCpzdCofaCoqKDwZap2SqC9hTxawaiaCAUG",
  "key38": "TUERgqVT1seVPWkH7QAB3cTGYv8Dw4PAZNhPwyjYEDxf4aZcNyGz9AJwvGcV7ZKV1fbMaoR79W5AnxpJXgUV13Y",
  "key39": "2ZhPwzYrMPQ7bkGwUW5HsBCZQcDPS6tXh4JBst6bsgvPtAv5faZR7LrfrRKkH9R7w9N8WAucVARxYv9xxNUF8itR"
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
