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
    "5JJgtLJMbJcShkjkf9RyLSgkfJj7PNmjTE1BJFU4bmk9CdQuE1X23yaa3spEzanYQbPw1Vyn7tFrYJ6ZNbNBMRHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFj9ucgeS3uveHQPGFAi3yRh3e9HV5ZVjUZBFutA72JzR3ZE2KnaK5HyAWszanjdh7Y4NFjAffrABArrYVwzMt6",
  "key1": "3s7e7K6H3jMjLLGMfuQstTvHDXLYnsBKj3MoRQo6ptkV8MPGviP6pJJJYhuN6LhqxdTHRM34trBEAVa69At8mVFL",
  "key2": "sogGdAJmU4hhyXJJFefZ1cwW2rKqpQhwAvCAX526ByAfDvJqWndd3gVwAKKPXpnkGonxyYCJsekogp5kyhXqLHo",
  "key3": "2TVep6Lw7RZQnCMiDBwnQMGMPn3NnGSqGA9ooUq5wxmuWKioZMFmW5K5BAkarS296shxYBPuoykYGA1U36gAT5A9",
  "key4": "2FANtHJ3dzfDuP9cYbNyy56W68M4Xk6mpJM45gbGF6Jg1CSamWh93WdxL9fuSueQqqcCAbtu9Sxbzcf1FcFCLo6u",
  "key5": "wMTmYDqXhNN1xyWqr1cMprZFgqMeFEkqE6Jyh1ZWW6TbBAeLsQcX9WLsQmfyJe1wvQDb9JeUzskBwwMdrAUioLJ",
  "key6": "3oodk8nhzzVvvvsAAGXWGHP9gfpmXBjJjFBqWDYtLVP5B53D741K2yv76cLQizAwrPa4y6iZMmU4RZ6ij6T2rVSs",
  "key7": "3EiBwBmonrKj6NGWyxbcrMHL7GHcGv35CUY5kJV3m75aw3g6v32ExNYrymSYgcN67Xb5DXV8UcJ1ZzAuZ8kPRg2M",
  "key8": "34o4szaHV44yMgBd8ZZgR5fYmbL3pFLo8WWu6Qkd7iWJ3r9oW6zKe397Nnp9zf7Xypdon39gMSipm6tWktUFsW6K",
  "key9": "27M6vyJwMp9csnozq4E7cKNpgPJc2XSh7ZYQBgHgihvJcfXsCFANwQCo1J93aHgzU34YkcvRPrYUkFKi6v2T3XaU",
  "key10": "3EmuRrrYk7YXHTb78MW4PuZ48ZWoqEDB7sWFi1Ph6AM12rMj3yPipREU7wnDbVHBiDZLz4HKtkiEbeVmJPkYbcrW",
  "key11": "TVncXmUgmDWd2SWSukcF3MXncC7heoLnuKMRiQwAFaS2ih2VpSF8pDbZue4TM7ejozkC9B5eZCcVi1zys4oQuJ6",
  "key12": "5ChfHoXX16Vhbxa37Hf4yT8k64YvfL6R2PjRMcbuNaXiSbduw2SbDYiAQ5rxpVkYkxy1Qfbs95CCaGFaDcHZp6fW",
  "key13": "3kjyHHzy7nfb2LajRZE6VXbt6ruExmK3V6BvHpGq9vzrKXksR7ngFFjKSVVhQEbpzYPEHTVrHcNWRJPAScfzu2re",
  "key14": "4u5v2YgjNeH93KdbsBAS3jcTg2GfJ6MVou7pH1H9N8jzTfCfiFMKfFN8g5CKFUtUrvNqEP83gJVNz5PAPGPEasBH",
  "key15": "6263af8QjbBqBha6yChGQqVeg1vCDxYGxTcu8RMgpdNCY6S4bMUWzdtyvpUbhhdJxaRkzUKDESrdvuG6bC6gGVCz",
  "key16": "4rEGkTbFLfbJ6KyPZp1KfXPvnfCNkJ6hwRuzs3AFk2Q9jjUJrfTTQqRJkFYnUebmj9GDHzK451tt4JkvNQcGTkgX",
  "key17": "3jo2Bh3JC5CEnRAApK1P2avfg1ajSUbXv7nSS5fN3kDtN9iZLPXXZ6mY44Cgqcy1GWRtfgsi9Tghij9JmEDZgQR9",
  "key18": "2FW3YqFArFBVE3Ck1hAL46A6JeEMxuaSmk4xSoqzNgqR8FhfBycBk4XXKce7e2FaxakVqsnUii4ewskaXiwknSaX",
  "key19": "xhJZHMecRH3ErQyr36M37MAvJhXPXkE5Z3EFKLQW98haHzFQtA2sfV18pcznZhggoVekxCHrrx35AUqU7oMghvz",
  "key20": "2wikGjpVncP4RoJfyCxRF2asgJ8NxUccDimAHXaxrNPH7SxK5betjRtY5zTcjmTsHvQW7DG3EiqV3AqUT2Y9Z1zp",
  "key21": "4UY3gdLRW2XyFyc4FFLMV6V3K8mdrhXSHwmbLHFa1ebbbXju9rqryyXDeFFUrBU5yzu3bi4wY6a1EV95KBPvcuiW",
  "key22": "2gE5UgjaQkkUn8DA6ZiPKtfczD2j4NiVcaR2amGbnErpVdPZQGBMyoBzuq2cqNi4xAbQzrspqh8wcpxVKyvHMW8Y",
  "key23": "57edz4R2zX6ECVpmzyExe7TdoSuAvLQG7DMKyZ9AkVRV1uJrrPpPEXhbBNkdeqzydLGWKuffyU3zsLG48W53zPFq",
  "key24": "4c8t2dspsSTYHwyLb5hXoAqoKU2hv4Sn5mGx4jzYRGYBA9T8NAaokWT1svYictgdeeArNyvrG98w2zRRZ42vRNkX",
  "key25": "4WZhLP9PAp7RvUWYtDumcTYTdBTTS4KsgSMiTmxw8eKxLFzS4nUMnffN5s3JUhwbA3oBqdh8vRYKuWwhdf7Sskue",
  "key26": "3wPc3Vtbq4MUYgxEqddLU5n853hEFxtbdxjqEGaTgEStj4dAogNPqLkkfKNVbumrYsZ7ySCzJUHyxKkzxS3mbkyd",
  "key27": "5hwvT4648B6VZwWCcrk9kqa17bP572NNLr8SuaTzo1BD4pdM9eb7659AJUTvn7JJTxAD9gL7TvoHS3YbGEiNemJh",
  "key28": "2RHiTSwhSjbdhmyk7i8hXw56ZUfgQkTkLy133Ljks4ZD5okme71rut5pXFTT2DGtSqTjqBnsKK96MYDCrPFCsRq",
  "key29": "vDFJn5g7uTBGqi8AFRv3Z582UfaQZGNvytZjrfVGhvHeZ4Qr4ZBDSBTuyPdi5zTB8A2x3NzZEM44ovmnbtgGxPz",
  "key30": "4y9mHbkfmvMVsvLshSVdcL5qCVdX5rP1zZKhUv6hUxJEmkey59JqmXQTqEBzeYSJt5n1WwWFrYjZXjSmZdLaa7Yq",
  "key31": "5a9xoFX43eAZWqUHzzryQkNEwVQQ4hCG6CBPLvaYFA28MHVEy5WyzXx1BdYTRxzD1TaHrEkUKsPsUNoZHDJrXaRX",
  "key32": "5dDwLyXvTG5zNyxtB9mYCeEwRC5PWWaTNhQpTTEbDwgYsMEJyB6BpnspZcAGa6WAAwDbHZTEYzc87Wux4Y6Qgqo2",
  "key33": "cTRFirg6LKDg7xp3ircWrSAVZRQWaAzStVvwjEwzPyuNkT3mGX46YxMdjMB1XAapNVbiXgu3WSY6EFFgPDonrXB",
  "key34": "wv8DG1eAfH53yTHVDh2buXzmqk3WwzWbdqNb5oYhkm34gjvzW4n7GYQXREkPYni3EZnkU3W6ykyrMUA6qejChVh",
  "key35": "5JwbA1tN3Uz5Fn3W3mXLjeHTMcgMU5zR8vkYicy4UU7ebyr6UTj58AQoVmMyBiEk1ELns3K13VJEKr6fRuC3JHHr",
  "key36": "3FFEhxLyQbEVS4jbA6hs4tecp9ezDSnb6DVtXAELhEt5bQZzf2Yuzknq8yuw5Uuy2BW5qSuLadUh6WS7WHfLUCC8",
  "key37": "cXpjdsDBUBJo43S1BRwrNL9bjpNNTTS4m78ate8GpGYDe5qRoCCXyH2yrSuX6HhAnqCqTgGsbQye6wH7VTfEkHd",
  "key38": "5gGK8gesBAGvLVrrwpp4wzbpoiFHHii249fZbrbGPa9apsihJKBX5c5Z8PYtR5zAJqEYQqmRUtSyDBec4YAuQ262",
  "key39": "2nSpqy3r9upgzDZmJQeZvNv3zJmEs7iwmF7xedBw6o41wYL1rsVGX9oPcEQMbDdcksTeVuzz8vq7dT5mwpzCWDak",
  "key40": "3kAXgzPTZNZrYz1ovhN78CPokZFELxzVHAfyDW8DLDUUU2WPSmGJkuWJF1nRVfk5eyfaWZQtoLv2M5u2vZooCXm5",
  "key41": "2Ji9wP6u3tgWJXb7htZ7MTpTStyNnLJ4nkBv8igNLsFaztg3Fjxhn2vU8P6GHMTC1FKcHYYpbGwiSzU9wc4woZMZ",
  "key42": "32PbvEsNu5Ha2vqRKXL1fBFai88GYxjyuu4npf7ZdMJTbfSMbGjD6bHjGz1QWo3MAR93WwcDiVQtGp52RjkrrcHy",
  "key43": "5HHh9WG3FCTDMg1rfrjBa62836Cso1TFHrU76KEsJ6TY83RR42KNdBawWpqhinX4UPqZfTfADLV8wFUXiUZxifHW",
  "key44": "36UTN8HuJKSRgmakEcxrYpGtKBaBtrMdZAhYgC1Tz13vM2BDQa6wTQxrakcJkRnJxa1tkicz5Totc2eepZ9Gpq16",
  "key45": "cpR9a7PSXYDywpw65L7k5SM8dPyRhHkxYT5gtVgVJGnut4rfVfNNPJxv8WkBFEEfUodjhwKVtFb8ETnowrCPz2W",
  "key46": "5BhyDHkJwUxqLSGSazgtWZ9odWWdY6wiieJ2ckitVUw1VURwbJchiDHEgYK5uMF6FKMGzauBBcFw9XaeZezkqV8M"
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
