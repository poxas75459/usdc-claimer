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
    "2JE33hL1QVXueq59kWaa2yz7xzTGTYvATSeWzz5r6WXyCZgRotTrZ9yZtNT4hVbu2gfupDAeFK6HduxWAp5TuTGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRmxXNk3XrJenFAXA8dKwxSLyZkrwuX19KAwDNHSGtNY3RL76Vdi3ZvnooctRLtpqnKidjGRaUQJpEbHtmSoQo8",
  "key1": "5tV3w4nNXR6yJPjJrvB7eHUohVaWF17DTKx5f3tJudm7uaYe9bFvhs3MqPMUeF8F1GRuettQpX1rhovDsjoD5s2u",
  "key2": "3YvxxJUFDX449YtqtDBdh25FHRZUk1MiPaBQcCrsM6gPU6FmzvAWwCfpBZt61KdVif6FqNuZZqaZeUNGQBVm6drx",
  "key3": "2L1ZXMs5rYVdMKagp1f5Hx28eeGst1bcZh8kUx7uXAYccASMXRCqqTv7cuZmR6EHMr9eBoJEXKjsgyNnnhSy6iNR",
  "key4": "56ZPtZaY95ynZb6qL9Vtj4zWCG7NaazEVStSKELhXz8c1bhh3kDU6XnZBfuZ43v4U6e5hrr3yJqAeAki4pnTxcPD",
  "key5": "5QHJxmwFjATxk3koYWg18iTEJfQA8DdeosPraEQ23z3Y6v9WVMNKg2BTeNTtAaKDptBuhz3H7TPgKiRPCNrUkQz1",
  "key6": "5LfJm35L2B41asFeCU7nsR96wjsHParbj2L5n5LXzZxJQqkCuX9rEsC4wHVTdYtZBxdxWcvYg1n4JTsStFD4KRCr",
  "key7": "3AFEsizy6NfRjhQHqBzRcwQh3dNRjkzq89HcZzMh8p7sS6mYbtBYoi7jbE2VRGDsAbwMnvcN6XbejoVX3rbTkcav",
  "key8": "37V9uTk9zmcTsnitstKEphMV6Df2WnpuumtbjRUAqjNFw5PGHVD7WWm6ZGhGF3qF1RiftdihWgGnXYRGEUYscAZC",
  "key9": "oHV5PtrnnU9FcBefNHN2NhJLpvTYLGxMbsWx14mWtw6yP5YszYKUNxTDJy4ter7H5bYYEDQvf9fbTgrszT47fQV",
  "key10": "2ZMu1ET4YNe4risJA2xKXs7YskbCuLg5rDKYiGB2dqHQS98taUc8bvJ3pBhVLa2ciCZie5UF4KiWxXKRsQhiHj8u",
  "key11": "2Ek8dRYLKvqAtwMhqMXtzZUpWR6JmLwiQWhar8aZoKDuwL2mGDjVmodjZFYdqp96BMhqFiytUWnGuKW2y24dHK3L",
  "key12": "3CaLTuvUzaAfW4QMf3DcEuvzZSkFPcAB73dSUWN5t74ajdShrfPRRb9k1ySVcHAmyTgwjNrnymQECFpLFXDvPEf5",
  "key13": "4yT8Y4hafxfYFmALaXTbnXcPTpHUTw17YcMZW7C8zw1QKVoSefqoPPZtkZ2WBhc79AXuFGqvAQf5fe2SneAqba5F",
  "key14": "4oQTrsimuVzzSHdwsRLqssh4KFpuoTkQ5J83HqADFTMkd7QhrNnMeDNT8PvmgykxXAtaFXHBhLGqgXfSFu5PXZQs",
  "key15": "4xTgDTBLjHLPZHSDJUfNA3BQD5tRKPQDKJnoMqAWoehBhwmDAwFoM7JokYkSQRTotVuRuQNS5R7YDSMUdyzDUrUE",
  "key16": "qSoh9tQM4c3aUdY2iCV8LpkpymnrH8CLngiRfiq25JPfLbsGSK1GdMwZMyABJidcSfBC8okKrZu6i6v4hk9bL4R",
  "key17": "3qNrrkuu6JfCsqygfospgrRRKrPFjmiZCAYGGkeaJ2borxkFB8MV5zNmVXaMta8vHMknmK6ZZWLnTWXhzbJ1ggpM",
  "key18": "2FxvMFsGfPs8u2j4V4tVV1CcQKC8ZgJ6pj2cR8NuGaRtWNdsbxm7L8xrpq8hf4P1fL1rz8HAaxynKpZKBzkKBDtu",
  "key19": "2EX2y6AqSsqWLirMaC2ajkYGvTyGQyiFhXrcJBD6ziqQvA9gNrStjovj3zqXa9s9VsWxzwe4QNe2Y7GkMexzmW3S",
  "key20": "5yy23gGXjm9BnSG616N4k6SjX6ssmqZd4haSHjQh2fCsKBbeGPXXdFSPbDkMwzEk2DvLH572UNePq1qUyZgfbGaJ",
  "key21": "2jP9p4Kn2ZZHC7DuWKJq34sg6AjdT6sCjjmxSjE4TGfxa6gFYLSyriw3qA85eruHo3eAKXmoGYwA4FrCwBSnVqoL",
  "key22": "3s8zkdubCh8d9xBLQBbbPM1xE3ah2NWiR7xKGaFA7dL3xQFsuoWqLdfwQn3rXSJACxecUhJyNtxdvUAyQ9dB2Eri",
  "key23": "3ReSTqsbDneLLFPF2jDg9wm8zmMTbtsQE9pWKypE8xNZzFN3pgaJkgoiJApdjx1aqyQaGyLMM2BMRsUAQJfUAA4P",
  "key24": "4VUjhHwZc4HeEfz9E9hGMMRCk956VChiDJGHUko9zw1UHMURoP8YwgF7CjjgjkMqXhJJEg6dQmP3kYB7iPz61e8b",
  "key25": "31KTe4kJ3bcgrb757cDtP9cuPze9GmW4aAFHdYe1xmrGFZMsLrR2jkmxG1eeU1xyyXHECCpUcRxSSj4eseEkTBWg",
  "key26": "2AxGhdi1QpZBob58bcCmQAGZd7cFoqRPKHexGWZ5gt91dtm3YiF7WzRdkVaEJB3K8ZJ5RsKXSZfR447vhnYRhwU5",
  "key27": "48w7QvseCA8ytFU4e58QizWkQtc44tHbGEzP5f6tEDggWZjBymJSCDpGrgr57wtkq8JwVtFqUpVQQZ9UfSw5DkmT",
  "key28": "24v2G7B6W6eEu74nGjuyNd7kSvboPwfGgrybbgELPeoiozkfhszwxmSWNtRKQty8885uNmMziWP681Wtub31CDbc",
  "key29": "2MXSgjsFYnurQWerBAa1uzdBzC9yVe2kQ4nFepiDqj2X5XwPQkzshkFtmLJkoXmd6LXiVkiDGv2JbVPEQYoHFQFA",
  "key30": "2U2v2LzrLo2fp2Y7btmUkVEGyDUin95ro4EEMQUY2WUsHsDWyeeRaNCwd8M81BBqHtNwhX35PqHsBV2RJpAspBAq",
  "key31": "45gVf66tGNPHc3nEGpxNWtbbgBjKkStuihdVPQxqGAcJGLTAp6k9xQ9hB9s1RtF3VGPmh2x9EfNguuLvmyDZ9XPG",
  "key32": "BYKQHBaSxKDdK8yJ2Qv8BvAaXTDPhsJaHYXEV2Y9ozwq2EYSawqWq6WHUGqWoGFb3gTB3jZbRPjAxcFmSLSgi1i",
  "key33": "235FDsvRZNhtr2cJVYPS2xyprZ9rbwSMyxLQnu3kmQP58FJQYSZnov26zC2VKXhob9ag5K6WhKWawv6Vmg4Ac3AX"
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
