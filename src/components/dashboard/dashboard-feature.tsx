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
    "3RUCj9dadXkZ4QvwBuyWXc6BouyFzLkTAjqDaZazkkCsKB2fY6wKwNmVwzLh7fKWD88RSofdsLpQoDqKKx9ZiPNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ibXp1wqBbG6CDGQ4vQpGEX5i3UzMR1mppZ8uPe6nM7bVR8dZnouPY5tHzHAKjtXVcpPe5SoXuibk5WLGZFek4Q",
  "key1": "3tKFjYTbp6XbXaAhKN9m7zreFdR6VvFeE18Xu167Se2u3Fzh85REGoqeG3koL9pdiQ839AMRDBpn78b3RoJkjsdz",
  "key2": "2jue5AugorPLABK2e7CTez4ksgLutpdjaEdZGxs99UyG9RiZkwk16EXnejPbeRBmm8qhXUfESK4ZaayW4zSkg5tp",
  "key3": "fJnbxci8FzoEsh3DsGzYHJRWJTDFJoaXkGPuwPzdV1yVmppP3PydSkzgkG1n9M4sDbiPkdMp5V1REddQESiNxQz",
  "key4": "4rwVbXDSENc7o66jqrVS1c11BPpSytCGnuCDhDTnSJxf9HaLEQZ3oh1jY7QLYE2LsSY6f8AD65AfEuzjjgNMXvHm",
  "key5": "5Qxus8w9LLiSzm479qSpsw1ZbLa2d2X6MpMNHTuK32KNPSwoypiXrDpYtDCmjvZL3LU66wANypk1UX7QJPwXsyAq",
  "key6": "VUyv24W8u7Gci8bp4v6gEoU3R53pXLXC8X8tpkm6phxRTzgDCs2wYacS6Lnkv1FerJWYxVzhwceyz17W3tCfMB8",
  "key7": "32qqWi7abmCAcGCn3dMdGbJL5w9ZYBuqG8bweQtTDKQBGJrUYfkyFycsRVLQGuKpomqYz7HDs5wDyoX2bk4cAuPb",
  "key8": "5x9jVMStPocBQtJahGmzUpFBVVyBoiHXaHcHcZCeUs4WQj4x4fUbKgNmEXTFryitSeEebwpWD7LZB4JaA8aC5kKR",
  "key9": "5ChMwqParLKCFDaw6FGN1GyKtJraLArdsMnamtSDxwzGo3U7hzui4jYfB1C1f9b7XDgRxRdBErX5Juf5XmyqZpb",
  "key10": "54pGcog8TaQgG6FQ93X3fdNCu2njjxq2gD9E8JJNU499kgQrL6qTBNM6kR7rCRrXjJvfENsbigKXSDMnAE13rwEm",
  "key11": "6f2rJmehiaMDsmD9z1KptnQ89Z5sWrLzc6bACi5GEasvnydKmDuMnaBXqij9xou6dMhWJvTDMv8TCCLS2rc87He",
  "key12": "kv1g8hD7XE8NbVNzjydQULgBvesHDqrE7wfDUVyvgpUwxwNgQ4v91UJkpJC1HgaQwaakSX7RNscHjv5HkTX5Fxa",
  "key13": "4tAJthZhkUxpXTz5W8RhNeTXqgCnnakJhoW3q34cJNnJKvnh5bV3g27g93mHiTZkMxfJnfawyWaP6ZE9zfwX7Y5E",
  "key14": "5JaiLBNbgAxg1k9Wa9ATsYdG9ktvx7BWi1ZCnz1YvdXUCCpgbHYi3vDkCaSbEht1J9N1Skss9MswTsXb2NhZkCVU",
  "key15": "3a2z7tsLEXTdpUaXA3t33AFPbLPNXDGnF1a6vMSqQkfVqCydKV8c5skDuDXvJYwcFwq2cqHdz1jusfK1deRHrfpF",
  "key16": "4p216GDd84aDeSQrpo6TZTXZTiKHbJQhXC9QEdRC6bbGKi861TwsYYA9tc9crRYx2Ge8A3DfYuXRbZqEKvntWCAT",
  "key17": "5gGuE6bMDV8U7k5PoUtiFdkDFnJ2XekxHMVpvx7NZNax1Y7PUySaoBvmPxyiakbLKe4fNJTCVkNypTxVHUoX7E25",
  "key18": "4WXvXrqksmDYX8sYqTX7F1Z3okoH3QafWY7LB8bUMwnXzQifY66vFrSsWDyxdVNo8JcdLqxSfhuHHGDVUQAsFeP",
  "key19": "QjrPbQjTaVNyGUUdqspDs8qFqHxc6fRe9pdkewFtHHhenYzEGisLyqWxbtHwzjJLRmkUGJM1wtgs2pzLz4Qmuab",
  "key20": "2HkAXWV9BFPxPdSPsPpBq7y3UUuRsVuxQf2b8Kn1ZrUFL2X1vf6KzLKGa5qLJEYCT4nCaEviDCtg2gBPfJiLsFii",
  "key21": "xHW3xejSPF5AWZ8LaT25ZrbDjENwa1HXP1yvACh7n5wzwUFcsXmcUdsndaiyFtqXM8MuMEfxVr7m7rTBwyGcoSc",
  "key22": "GQ2Hc5iDP3fP6VKKxiiDp1mdMcBQ4MbGJsf4ggpYvYBzA6qKgjJxvGk9ayoNPZ1XouaBdSsQpviwwUBvtF24FeA",
  "key23": "4te3T7EiPPkhESyPkrQMqponoa5yMUNZ2MNq9WyZ6nWyLAeAw9kfPKcQfV2tTCp77YpCLLXQUBBj2ntvrnoWTCwb",
  "key24": "2Ka71gacFEbUH9wmYuKA7HGDAygd1YMryugXLfxPFitwQLCF1nrFuKDfWk9FfYHnT1fb8pSrj79ACcDcTETkNQ3E",
  "key25": "2cSK885JjrdddvQpgKWbbPLAdA9NuSeRPaf5yxPhNdEqVJksSqELJmmu1fg6US7PMB3UGSe6X6KpCFpPkKLLweat",
  "key26": "gsGvNDAtyu6mJAAamwuMmgjtZPbntT24D8ynYYH5Aw4PSNxF8t8P4xGZRq6GanMv999rEqBdgtTHjHtTGLFJaNn",
  "key27": "2ym6sDiHQ7ahn1pBEwH5dAFecmQHQPjA6e5zzCGVb5oM3if3psKVEPPFJajyf26sBKtefBxAt7u9zUpVn1cVBZ1e",
  "key28": "5VQvF1BBT2kgN6de5LoC9o19N7ZvrvDfPonn2Z8pTkBeveNKCQA3EBEAniJLzodomYgVFwPHvpsf53r3tkJF14Re",
  "key29": "ZgMpPr9abAJYRwWZN7G5vV7WMe8RcEoCHuC1joGQgccHFr997XEYeQVBmR6LdLcs7CMppYgyzGXHpwksi1RfYhh",
  "key30": "4uMdEMfS1WPKmbYDmH49Apdzgsm4Xj8hTXQx5uKxBN644Yj1JAc7EhAi7rj9EEwiPqTxjWs8cDVwQZ6aSzJUAxvg"
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
