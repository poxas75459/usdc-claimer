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
    "3viLcbX6kmMaZS9yyyR4n8mA8RzsZmPBrppnh1CqsT62EuYbhE9jeZay19erZqUcUG2aTa917Qx4FWGCAENb1rT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21YdCoy2irwKfVC3rVmP43xG7JWhkTXQp3skHbkHiR9ppu3gy1JXG6DgLFWSM1rgk1i7ic29xd23BckNTyiYwyNM",
  "key1": "3MrZvUBrkPuDA2U7EVK3ecbr4d8BwL7FCwX5zyeSDThEgpRCioQa7hHWP7XMKRd17p2KmnntsTsXeJRfU9Dk79Bc",
  "key2": "2vamxRqTFGmeMVJ4nw9tVqf2FiKDzYzHKF1tY1F3WsFHsfG7iuB2EM8LMWsNVqoLSSETfMdtQuLzsFCC6KzyBiez",
  "key3": "5N44MqoN9B6utpspKyaeYGRRv95CyGL3jscRGSFyHYhxEDZrJ4V2yHENJMfJ1KebQHdMqnnYtZPC6F2ytqxqLmtM",
  "key4": "ejEdnsLYWG5bz4uwNnmARV5T26zfQw9qHHdxYLGJfscDMDC47iLw1AJhJfDNYBB1fssi6JNHFyb9xhgMK924bEz",
  "key5": "4znEPn4tAE74mpM4fR2Su5aQeYKfXZr1zzuaKC95wgEBd8iDnWHRfAmqwJvewznaWFcph4yF1AAvUYboXtfV2qHM",
  "key6": "eeBQ87aevasw5SQZbNbi6bUHQQatByeSv7w6VL2sBgGSjDgDowu1ACziwb5rb3udmPo5UGxwsiYCFREzKmDGVvC",
  "key7": "2gskUjmCSELjdSfCFRpuaQsX3JUFbsiykVjZBthRSombVDyHCTtt9Kv1wz1B6VzwrwmPSEHHWWm6tDb4JA743ss4",
  "key8": "5GNS3xmak7CBYQ3EGRoAQDuL7uir9zC4LnGVSUXbGyf18odvYkCfrXfKwjRY8QupGsAJ6RpFGabCyeS8BgdEp6Nk",
  "key9": "2AhnMYVQBrAqikGp6vSsoxodCQ6QRudo8GR3sdgJekmnKFnGbU8jdmGDKmx8rKMT61gHq5sfqtGaMS97fbg5MNXq",
  "key10": "DZJUHuk6Ns1THzDETe4oNLco4ZJ1maMYepuaCicgfU5wq1YAfjoUveiWqhTNrYG23TTBbax5X3fMySitzQGAbC6",
  "key11": "3QYTiDfTpfpK3PmWa2PfY7mnMDAPvu1WVVpr1saEbUEK19dH1izpVYhuFJkGjEBbYKYaFHgeuXFjQ4bXcvN2URhg",
  "key12": "3oToFCkGG2fibbpGL8SPuQ5wqhy11pqSQHCEVbaEEJByxMB8FtWKnQXknrEvGfed4Zg7dhQExNsKPkwoFp8x7bdn",
  "key13": "5m8u8nfRQd6SdjskmQwu6MHFB3ajgXVsQTjiYPnyqiKRD4ww6NEMo2CNkWAAKL6cv7rruJUT6vLorHjNLntAH41S",
  "key14": "3tWqRP6uie9Z53CkFGxWGbcgjwcUwAJ4bKrgWJGmTBHQmZU11DGkUqjseKyGt4DSFsBvZfpUNEikjsnBa7wvcMd8",
  "key15": "25cV1oQch4Xv4nxLWYChvDr2s8giPwUPDNf4Cxuj48S4AnqnWwsrrdMu3mpqqwXtp2PARXAgNg9B8j477A5CctrY",
  "key16": "37NGtap6NJy1XMXJ6yLtJ49CjWh2FBuJMaAxHHQDuyhqpdX8DZk4fyWD2gX7VrPaY1AsHwbRHiphMJRfurQGe1kE",
  "key17": "3Vjn54avg6XJdnxJsyntJpJMKmJfZ1TMp3RsnrSj5PLoZax4XwRrD8hwjSZpn3K4Ucp5QX3kgpjAZ9CjvwGUUupG",
  "key18": "2vJwbcs742hfNeVZCpnBppnTPHDhztxGKuafJbUyQwiXxgAQKbovqT9C3qqTic4QZsFTaGUWd8sxne8XcMDUT5ZX",
  "key19": "eU7rZ42dQUJArKT8mymbU2wkzRb7X8nYWE4jER4Ykf3GzgiSgo5Z1uRK3eue9SY5g6AWx8EAZYnKGu9Qmx7j6Cp",
  "key20": "fzV3YqJGfsNLsnnjLDvEGUZ2CssdddWMPPYA3Rz8aPEHFfmPWmib9rLrbramYekNqvx9RhU7vuFxoFvpjy73x5E",
  "key21": "5NBvr5VF5d7SrExYwT1sfrrxC15kxZsp3YFpoGsnZgHML1ZdLvU9dnw8vrN7atf6J3SUa6azqNLbE2j3NUw6dZ95",
  "key22": "GAcVDxvE1o3wSfUNsvmoxt9s3NUv3FtepK3JyN9bJcuLQ5rmfx1XhgdSouugZkZu1rM8wsEXQte4fPnSdEECVrh",
  "key23": "sFCTqvMjkFfUagJvYVksTsaZJyCCNjhHLMnW36shjoKcwCHNjeT4HjihHNsgMB8QwoffqKHfhhQ8b4okvKoQshL",
  "key24": "66NnMEEojYDn5vgNMRE3WeLtLCPcfsrQvX7HmsFftwwhf9WAyf94Fb6f3zip6d5g6B6pVjzrNeMHiiM4kYwqiTq3",
  "key25": "4DaWWVb78n9PJ7BgjFwvPQEygHQXJt1UMLykgHXhqBDzjSk8VqUA3niwaH52A3CHrftAeoutFVigwCsRLt5ougUa",
  "key26": "2sq9njqd6r8AqpfiazjaY2whMVTB89HfpjfCmZNYnsucUXKCT4oie52k19ubvbV1aWqZkz8KBvvGWHQ3wHHiHq8o",
  "key27": "4RL4QETd7h8neoK9zExWF2Jzpx3HCpEYpZpuSdeqDKKQvAmZZ7Hjs1oMDWukZ2vbzYP1LFA6tfZuJkNv2S78ZXKY",
  "key28": "3P4Dbz12vtJ1Zz6E9aMihjU5zTA8JVAZVBhQwfkDSaf6a1xJercfvurSL84i8gJ8joSAaYXeBrHrC8ZpVzQLF97j",
  "key29": "4S48ZfkYfyBhTjQCvnYrYmfLaWH9oZP4N8142jqNj36zbcddgZMWdY3egwu2ktAci2DSS6zmkAYqQfjHFLLgo253"
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
