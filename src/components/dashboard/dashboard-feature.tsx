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
    "3x53eWcFc7gTBkBs9bAKmqegbfT9U1QbmnbkdcUPafoafKoBhEZ92cKaarhJrKJ57eGPsvkLGY6CLbmJMFqmHb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8pUUTCeGjUbjHTYrRvtiXX59x2PHuW8VSEXHN1eY3mF7zJg9WbKacPHy4nJGKDaUftrhd6bnkcsnpwVHvVE2EJu",
  "key1": "35NeQymifLRuM2BxLFnjikFfiaM1gVUcBAPDJxDN8EDzH6E9FgZv7NDMSRZQPzCEwEqk3hUJMmViacsK1MFvLHDt",
  "key2": "4qVisGViBdtNca9nQMgBBsiquPB8yfbgRvgWxDXHmZN5gGZGD3C7bMbQmSazteeQKxYzMRzjg5X9PRyDGmPzLqCK",
  "key3": "3pi4YSiFp4EWtuqMyYF1xx1XTZKUYsn1YV3zETgt2oMmdqU4Fj2rVb6MBCts97ry7opcPwGBYXLGP6jmQDnENZtu",
  "key4": "4N1r8C43xTEv2qQoq928pTk1HrBu5FnBEcLMkmQvW7CpwP2xSZVcX8AVHbkcxTJtPgZgXhUoqXMFwH13hxEb5XZV",
  "key5": "42xpyKFghjU5GMHL9BqEk7zvxaCkPgfkreUQY8wW8nnPPfAMnNeGZBLLxtbn6RCAGeVNCJ7Zwe3dpcH381RPqxQ3",
  "key6": "5UcXUcMaSuGegW7t6GZwQ3PVk8idtuq6q5xhr1E3ZPAKkDA5SbPcRtztDYjwQ8pe3QpWKVEv2HRm5J53Xi6LcvFV",
  "key7": "k6EC3nJ9SRyJXWaxJ2T2JVo3CntrThHFat7yKMVUoFMo9ZYyuqmMQFRaPwXF8N8AUeABmjTXq8kXuDUD1uV2tN6",
  "key8": "dB9TtEtPvXDZQXvUCKCDpNWmVKgrW3BLJboiAYtN4H4QE23mTE45FADEMwSpjijxerHzRpwgR56u8uxSAhM1UzN",
  "key9": "YZByTH5wApsJJZgBtZJ4S4sUMUzC6ZpUrjocK4Jimctama943vDMgRMQnda6G1oYDSDQeAKuEwTdkoRHwaQYw1T",
  "key10": "ezNyKGebqvQnDg4mdjdCfFt1G3nA3GFDoWG1xGLZ2E6CuueZS7cUKjf7kFpZthEAxmhPQyMcbsbYytdj6dWRbdb",
  "key11": "1k9V7kbpJok7H1v3WmeP2WFzNGqNAJR5pufFpp9WWY5Uf4PhgyDHRm8LHuojpXyFsERAjrNmbKHPwe1RVQjh8UD",
  "key12": "tnD7zpRJXWGXgEtJ4fRtBytd7ZMMtdL3u6HuY6ThsKL7uuKeSAnTEwNCym59ewFLbRXWe9dgkMATmWYmsxPNbKw",
  "key13": "4aiuxwpjjb9onDJLcAr2pUMXDvfaPo45JAhdDYKM3XoifrnfRpKToN9KXWpzn4jqHiWpPNG9fzubtJQM4zRSeF8N",
  "key14": "2xgE7TaCNQnx1Hnfr2DTShhaDwN2oehHGP8M4GgZwvcH6u579NVmi2KEazmCkUr2EAj75iajgJFJiGa5VGGvFhuL",
  "key15": "496NzehMb3NKAv8BeRXuh3s8U4Jm5EeNMYgosLULk5mW1AReuKBiccNpSwXBJrCRArratJtRGuLX931znNbWhcWu",
  "key16": "3SEPPsW8q9dHyiu2fgAqsT88jRDvxrMoao9Tz3cu7pnga1k9PYiZ93qgATgVL8zEwkt1T4sMN9AghLA6karh7PcV",
  "key17": "5TGjfVjEPcg7E3oWH9dDd6WXRsesbt4Jbf7ZZGr1SbnzSEUkW1XdBNTLhK7rB22wVHVrKT6a8S7DTyRgLQnBnUGA",
  "key18": "3KuUVhyhjTcKJrDHAMWiNWbhwLsdDaRrKWkZKi4iht24Ncagh8oaaMyu3tH4dvf2EdjW9ERBtov7fMtWWi3mhih1",
  "key19": "57gzVzoU3TrB569Fi9jfrhnMx7hGvjBwXgV5e8zF9Az7yjgBqxmRpoVFUvs14kB1fKX4UDXpUpAsEbYcFEtdkX6b",
  "key20": "UMdfJp1n7PBaL1Rfqytz16NLi4MeyPFLswcqJQrfXsKfVtDLovHUGuRKQP9xzAguoGGPcoBgPj7NuSwiBWgJN36",
  "key21": "3yd6ZAZW9S8BUM7yYVguQjaU2htQ82f6UughwWuwTzHqEHE4Zd4xfKj3rtLP6CoAEJCHXwZCDyAwub3VD4c1XhS3",
  "key22": "5GU7uiJJ2Jmeq8GVerqfAjocJYKh9Y1yYoEbxVJMCKQGCsGEprwxTHpxV3CGU35mxWNvDSN6BBbscX4GWShEcKRX",
  "key23": "3r4c3grr21bNZys7oWNNn7qbDWW7Dd838rQNPXqgFnRwMaNvpsK6tJXuVhQFXwyRZYXoYvyHXbC54gwarqcwAbL3",
  "key24": "21SPvCwtaKhrC7Qs4q9UxPNZcJxMGXZ6NU1PBYuG5staWpGEK9daGQ5quJMynVXbXhYUjBW9wQYqBZJ1bar59wRH",
  "key25": "5JYyzXC5QV3kUEL15zgsZr3swX1A2Qp5vuAhQQGDZrifWnGkTj4t3zr6pucr1PTTd6BqrMRJfx87GbS3eNU63Q68",
  "key26": "64J214eLG5enY5evrXpZpbnh38cBCXvvwWRaJoZZnvHsBRGc5XE5qDqWuvPxi6JBRwVAn9fRvz48ko94e4QtgXKh",
  "key27": "2zf3Yy6w39mvMb3jsRsvU6Da4z9dUBjVaok3mhohq5yMZ6jjq6qrctym3DfmwPAJi5Ud8eAGYJEYt3YdqqLzU6xZ",
  "key28": "5sahPkL7wVj7Kaf11bjD7pz894yGtAsM63i3wY2qbTCyXVVsWhRcwM8TkGXL8TY99npesqCRao2pSkZU5p2E3XUL",
  "key29": "2hmb6k9kuMj9yKDPRJkic2hXeDazeYEssJgG99JLePWVF311ZCbmJvXHfH4wQJp444bp9sxeB4NRuJz5EQKFGW9D"
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
