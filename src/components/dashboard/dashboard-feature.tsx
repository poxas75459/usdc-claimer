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
    "3tcAVXMZ4ThLBLZ2SvPPVeawNxaaJxm3ZssExV29W5E84MwdJmd66gvCtLWsAgNc2SkzesicBXC21CHMUXxhFaKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sf9L2wjqcUkTNNXhdaPoV9SUDrVpMRg7eizdapQGbcchuEJqatR5kNTm5XzeSdhVPreueNpbWBk4H1WsfCAEqB2",
  "key1": "3z9WsRQ9mYA6mhTPeau8szFzXHHTpPHz39nUPV2m6G9vjfJ3VdLhsEnyoC5hAXpdYayBeaRZkqpARLDhSpoPJ62C",
  "key2": "3nicu1quChoJkaJygZpDfVkgdszcfK7ZHrvH9h4WzdUWzS98QLg3UucCf9dXJBvZPLN8XYLHLVEDWQzb7GYe4W7A",
  "key3": "KwTmE7peyutmZbDSDApYiVRCm3MVof8cziY93sptHrb8o5DZWY4wWYMnnBQkdfAuE7nQ4Vg3H8d3iT15a7bNiyG",
  "key4": "3sfXUouYWg1SK3xpQ8K2yP9LUpUxhgeYF7qgCDLdvhJJu6BATRPEAPZj1jy4DKy5cdeCgFTA4n7Xi5HnYQfeHJB9",
  "key5": "54AtL9Y8zWB1CRB2UEsjjAzZ8cVqiCSg8EQhD3PPZiet7hgsosNADZTqixebCVd7JHgwARtAYoL2b2E1jiuKkYER",
  "key6": "5Hmrk1tiqT1RTr5r78CC6vz5zYwf3bH8CfGiaoM5qSNT8LNjH4xXVYEFXHik9kDXApkszdcy8cef7NgyPWjYrhGE",
  "key7": "524G3bVKCvtoRuEfYxaQ8hECqVjEAPwN5r6d62fyAUmZjjGKCnnSDQwvWDkBVB64NSrNXCp914yPZu2Sj7vSv5JX",
  "key8": "4owgTCpyJQPGMmdMaGhU7ZtijSJFampcAM3dvpLHNG4tT3tXRFDCUYcb2LwNZGFSCwWvrwxJ7xYHaTTYp67Esr9m",
  "key9": "5B8UVoDoFk8GgHetXkTkLdm681EBwf7cWpvA3JJFEFi9dQpqKeofBVnVn8NNSEssHyprrUuQjccJdTzCiNErTJ2A",
  "key10": "3LWfmbtxEV4hYyjAY2QaZY7k7u3ZNWubyqtqcy5PQtXWTVx51gSmvLVoaC6JuNVGYCe3hqeJdhrui3crv8z4ysqD",
  "key11": "4KUjRc5RN6VwutqnuiKVKNXwcxN4bRKTungx6oocnRteBnL9eBZCH4v6tT2SS7w1RuKES5bcH9pNFy3Zg3PQmjxR",
  "key12": "234mvbaeDZBukq73qXUbWTwkFYVWPZmiC5zZ6r9T6VnCUQkubLtHjGLzAARbqcHPFXBSqK7R5ArQLKNDUoY1Bg3m",
  "key13": "EZxrJG7SUUoJ285kqUjooNfibMd5uXbp5zGFgvHqqeD7dddcnMLGu5kR4q7MiUgfTzQb7894qp6vtxGJTnpxMcm",
  "key14": "64G5UCPHuCiahF85bquV8rVezqi4Mj38umedYuiWEmU4xChjG8AA1FMkowwNtw8iGh1pj4KQyTFYpdbL44Qobbqt",
  "key15": "2TUqtKHpRcLp7uWnCNH2RQTvRZemgrAUNRg9iwhEbK7jWcPExhma4SD12RsVMj1tHvKSJyGNuHGwAs2Svc2FCBX",
  "key16": "5W3eVd4FyVNmMMP62QPLbxgvzMSE1MsC5AwtrUREyt3MfYPHexGUFpw9h3D5U2K8DnfzZdJnpGae3HC6LhqhHa66",
  "key17": "4BbswW2Nsmvg9cBhFJ4r3NVbJ7YjKwcbpMBX17n7V3Pkxfvj4fa91WuBuoGWnpoDvjdUvEudZhc539vaTufi5G9b",
  "key18": "4jBJUmfWGGWC6ygex2XwPpUPKHdm8hpkPPkyD1CFWXN3tBt2wrSr4EzGHgG8UmbgqpwbLc935JjsKejCwKBQWnAo",
  "key19": "4gKMzXkUdhESJGfXcGKXSk644xdfopjUBcqHrTyJzRrGE9Wp2Rk41uwEpJyupEPDAmRkqXaogYWeLFxdTfP3JjS7",
  "key20": "2VBHM8RYzbm7t3YKe3d5ZG6Fkkb9h15GXRNVKnoaEpnAzApC87sa8qBGPpubwdZ2yFpYerkwik9PVifExwT2fvtn",
  "key21": "c68MVnbbGJep24tMMc7Xt89DJvZwcXN6uTAL7hto3kToxgG168ME8SvAtiVFttawYEEHYwcTUiLA6VKBgDGexjG",
  "key22": "44moMC9aN4DJJbrANzpdBXrndcc6MXj9yXh8UhA4VSLQDiFT3ckmCiY5FfG1xbPTkwxGEedyCMHgwdahm5gNyQbc",
  "key23": "3zMbwaFYjXDsMK4kJUpSmfzBi7zKr6V2mVuoYhDXoJGTcvFYEX5DvnmpQE5Jg3bqveytRk6EKH9JzQYwyZu6g9jq",
  "key24": "44sLiHH47bZna9jdgnAWJ7KztADn5t4tyTHaVyfGnj3cpKfa7yh75tH8Uwrr6DLkjK6uGsDpFeeKA1PuhKPb3Kin",
  "key25": "3nCeTy3LT64uUv8RwvB9x1r4ydfL41BrXvkXsizsCGWx17UG8bsbz81CmUiHKN8oXEpqS3Xqy8Pt283LZ3ZvwgGJ",
  "key26": "64k95EE9P3ovhCJxdQZT5p6q7CJmDYXvFzzinPdbcVf3WcFn1rEUESA4oQosq7e9nh7Z5oyz4tQkK2UCGAPa5bY4",
  "key27": "2hWPAV1FnZ2TFpuhSc12zwTw2YwjC5iHYFpeoUVTXe3swvML4ishwAYYjJ166j1xHzCJ1fqU6cRPnAeUFApJPXzN"
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
