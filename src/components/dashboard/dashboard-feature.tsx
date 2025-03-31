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
    "3JpYqpDscjwrwyrUH9XTp6KAerwrWJJQq1yuMF3mDT3TCVrqowwWy3GZYZaaW5M2AMCtTQqteaYskoRY1gz1nKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p3FfthC3uSZNvmSEVVZJHCk1UHNymQKNmyEbGqZepVWSPfN3XajCfEVDoMfMtteDg9ga1VycKoaC2YnfFf6X3Av",
  "key1": "5YaQkj3ipnceqEi592s1XVRpmaKeDGjyV36sz5cB9T7D9jaVsQzL15vzMwfLN8ykyBv2n4ugBGCUfWNNVEZ6CSym",
  "key2": "3Ydw4A37BoHxzMhc6wqK5YUjisMTLmpKN4hDJKpCJmZeSC5vd6TA1wuGnPUrA6NfFYzEQw6MPmcSC6nXgUsGe9kv",
  "key3": "2zE6Y9oexkeS3UXfYmwkq7PKRQB3XcGJCx7zZZUCqjJmwKfowNMEXgGBNrJhxKjaoXjoewexWnsb6NXsm6CqFveF",
  "key4": "3WveJGWUqpcc7Eg2AvCroL7Lmh6gcEaBP1j3s2n8ny6cnLVtPkaZveGVchidE5uFCXU1DcQqUwyPkRW4ndhWshCf",
  "key5": "3F2K2xheREwmwUsKNEyJiSSMHNt8bE7UjMMKRdknn9pSdY8Rq3AABtzs8ePPTbko1PqZcuYxcUe1NMhBRGgTPZrY",
  "key6": "4RGpFn4gihBLzuS2urLDiyXCC3r6Bo2jxcsLWQSeHfEcR2ayKMX6MtdJz59jDfAJGe42ZU3eGzpcFMv4jaXjvihD",
  "key7": "3mu62WrJgjHPTW4KHbiBq3jLyzHs4YnBsAYBjxP5wDssN8N9FmN8tWgwhqCQgedYxZEJY6qvAiWhGUuiPahncFdu",
  "key8": "62y4TiF7BdZbTNYUy1w2aymftxAtWbUGhq8vDCCCprMqk1Ay1A3hLDHCFbYXMHUQba4Y7u6ig7Yk7Keiqx47fYza",
  "key9": "3UPUaojpJiQEHVwz3VJmArEy68aR5Qc3vFFBUnQSjQUmPfyp7EakT8hiAc8PLEq5NE9rwcatPwBW65xZiNzCPmb4",
  "key10": "33drLK1ccz242JA9AXebAxo3muQxRxe7FpDy9QrmCXpCk29BgpXpnrQFRpt5RfVhsbJ7Z51h5kNZsEmGzpVF62Z7",
  "key11": "3v166vkZCtoCu3G8VgRcg3ztFcgwyJyazqHTeoLq63vfjbHzn3ikKU2cnVdbzS2jCmJzCpZbBAawkpwL24cjwWrG",
  "key12": "2hUx2TgfZoAyBLd89DCLkydAzFaGFvcz2BK9GxB5vRjSGF5tx7vkDRbWUjx4ddP1jCVSrsMyosq8aYEVGGPUoVGF",
  "key13": "436Z3gGittLxc26c7vQ4doAPNGhd8Vm1hFDWfEd65oTm5Kd2c689otwLqy37kqkerCGQDtMSrYz9xrCaxkQGdS6j",
  "key14": "3b9ZBBSM4xsGkVanEXWz4BFhBrUDFXMBLbhVtEkZE8f2ZvN4VMLe5mzzbbPnGcEjx7ohC4F5TbxDDJHHotjuBFfp",
  "key15": "efatXvpCUhUp1aAsduqM31H43Xfpj7ATKKvFL7FUSLsxmWLCwhuiPgisSFYbjFoK8Ky4LDuW5CqfL2spSHYvfFP",
  "key16": "3o8AbFKeNE3ieMfd69yHMZcKqcV6gKWuKAYtZ5SpRNqXJTb6iAdhzQZBcdpFAorBPNt9VLceQbyJLZ75cStfFt8J",
  "key17": "21VnQixEX5gWkV49EyeR23DqqavsZLspBXjoa9e7Sqs1VVUunrLctDdPCoNbC45hwHtFDnZJ5Dt6oEdFURg2MNZc",
  "key18": "5nnLiXsitFWqzpzHDXFCdZBn9tA2mFtbBekh9fgzLWPPgHfCPoFL12oLcDHXbCBZbGLtMJfY8b5EPNVNafwLubyB",
  "key19": "4tPwUVUBXDaAfmhZPoKjVJnAVzoKRSdv6iBU1zuzBdxCxUvRXxofmTZKxCDHjfuwM27u3F6kd9K28WrXnpx7DbB7",
  "key20": "2KfdaZGuEFVyYYqFfd5wg7XDnqxhQBF5Ga3v533wkRBpAzi2J5ZtrqjcWczh4y8eetrX8k8UuqRLpiYDvm59zKgW",
  "key21": "54kfdAUfzBVB1UtejXLUJfpAQBpgCfS2fFGcR7JiQGVsdaEMzfiB9Vmc2UJ3ygfUHwnFUX9atZeKqS4mMWDTQCZZ",
  "key22": "491TuuiiA26aFFXbCzAa1WSpqJzHcea25puGgP1MDYX5XzHYoZb5hS8SpUxnPc3Y6zmPx7fLwhQUzWiFiwP7URiv",
  "key23": "5mchYymXB5n4QVr9VZYdDQo2L6gEvfRsy3MdS1kcU44cVKBsKqHTrJxDLPy1co1h7uzLXqjtUUvPYzv3WNrqgCDP",
  "key24": "2gdbkmiBXTe3KxCbFmWmQJf1JCC2qAbyz4uP13iM2SEPn6yipnUKDo1EBY4V5Bs3YWYsfYezytzcVJUNyTiGip8K",
  "key25": "CPxzyqRNe5XM1hAz984y4iGzwnkAANaD2AAZWbtmFZAvhcmqT9GdnTfBW2sE445iBAfzeUFkEvyRGN6SLcTf2q6",
  "key26": "2GR8v4gRQxvF36cV8DKqFJTrN3R11YtQkUxCJAnXuCKeydNTK5Nvs6TDKriTuPyh9qTbp6z5K4fo8ucSrRAF3KhS",
  "key27": "2ZHVqCBS6suyghNAegxsG5D6bmm54mrvcB1BEQEWjSWq7vCcb2GqCumUc5rNuA9icLiFCdbmsUVUL7Euc84RKgUd"
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
