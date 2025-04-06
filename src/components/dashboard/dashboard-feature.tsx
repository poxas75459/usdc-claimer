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
    "TcU7cnXPomComVWZQ23CTJqqr2yxAqDqafuNuG51FiaZUVhLGcD7myZ67WdYN5MEq6xGhDASZPM4Cw7Ssft5FZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LxnfzUg8TFJRHwa5dDAkxVQNKaXDz4SuM5mz4f2mvTecYUM3u3K3u63b7uA7GVgo8cG3b8J96iJKKYzwNJCGDQR",
  "key1": "4Am6PhLLPMrcVsXNMEAby2kaAGUf3phiCug1yo78q49BGYExb3MUHH3KZFMvPadNkDKfcW974xUpHbgY1vRkCcTG",
  "key2": "186r6Zn6tFUdM551TEJx9d28267EDgS2K1bgmezPZf5gvCgvheCfRaWCp4jtmGghw8iGuSHmnGVC6asqg75AEy3",
  "key3": "2gPAKfvzQ5Xo6rTUtDZKm2JHBabfptDAyjjwkTZ3eyF6TEJEixm6WGJuDAbav7ex97q4hpCqv4vGgPmDBUd34b2i",
  "key4": "4NzJAXofFBqMtD28F42EvmAjMzdjghoiqV3ouwt68XzYApf5tv9qfFdjbNotpPmtAbvmiahRpD3cjZDq7rDUNJ9u",
  "key5": "259oQCj1sDpq4aLbgszm3J8CL4VaMXeiGXQ2rtXqBFdRcqhabiXTVbjebrHnyiQoHFmyBPPNnvUkoMoC1WgujYN5",
  "key6": "58TBqzxZwCu9C55mAubJAFkdmM52uJkfiq84GvW6Ke9kpfCJAwv421Whpg86ivbPpB2VsV2XKzTQ9vpoZH1jewTa",
  "key7": "2EkuWzoYWoFQHPzhExr3YscvKdWeiGK6hG6ttAMYwtjjNdidZPUEru5UyAm83Fsy7JeKJk33ubpjc4VPG4VcNLEK",
  "key8": "4f1w9P6wMrS5LmtsGfxmCj3kM7vB6VddGbjGsgBvXAeMfKHJTFRSSGgmc9MYiSxH9ewqhUgnn6FFi2VEXo2oc7ZB",
  "key9": "5P8FWRY6gaG4rAMPYYRcAfJGH5c54DrGsMMDaq32Y1Hz2k4qJPwofpAw45CMU4kQ3SJzzLPyMJYhcK8XYxtTQw8Q",
  "key10": "2mPGzmzB8hhgr7gtJqtCEG29LDGGBCNr9LNBVLdCxnMiMCZSyPoRBKqiaFGKXhawbgfco75gW3FwityGNn7hAQrV",
  "key11": "5S8bhJCwtVZJcwMsrZkNL8gTuqNKwmnfoeHY2Zmsh5gjrEwUcfY5dJPnZTYYXMLS9ZfGHt2qCwrzxREuoWp2WHw3",
  "key12": "4nULoNLge1WaVNfYDGg1N7D6rmTPaN9BxmgFsMTPbH8h22K7JxG7P59kMLRQxAUyaCwpBNQabQ4r8evWTEp6ae3M",
  "key13": "rUnYNHf6oinupAVMgb1NzyBLX4j8FLSYz3oj5SyughKxAGqAXfUN7sJF4tn5K9yCNuFwW6oVXXXo6UViev4r9QK",
  "key14": "5Y3V6mXbus19BoPsXk6QnTRZuGUqhN4erEJCiPZjwWSduHetDdzVF3BewtXSdmN7z5GgQZ1PoYwSMQEk5iyZ5Hxc",
  "key15": "3dcUqeKdY639s8VWCyq5gjyuPbVEyHvDJSU8iZhLqJNPCyBzHMBQs9YWJR2VB12UfUBEcwQJmA32DsVJT6AXiBum",
  "key16": "43VKXw9fKwXdVstbLMvGw7iy73mk49X2WQ1dNVXLh2McWv7nhuuLtzXvEU4nTbSWtSeivDYh1EhCmBFwFXYDmrEc",
  "key17": "2vhDZuMQjwVQ6wmXDqyie6VMUDiHMaKBQbZJGf58mPvzjdR2gXr94N6tq2LEH7VKXtedi69UMweKuYqepMPY3wXU",
  "key18": "v1cEyUCxsKQztfxUaxy3xFm6PuSNQZySYg1VNeJhd1BrUUvBKpgdnE8r9jLn4FonGWP17SV3vn3pdcZ37nj9f1T",
  "key19": "4KgtLPVirBevXny9RumTuPTcjP66UgRV2gJEUGqJTAic9FQ37tNGcHcfSK9Vp7498LBodYv8ZaNreMMXnyz4hcXD",
  "key20": "5SrhKzJtgiJdXLUAqsUa9QvMX4K5a2FZRucDxq16z53zznDnLXzqSghqQssZmFeVSpGbJbyDm3W7Gtucj969yZTF",
  "key21": "2rjLHgnGc8aLJf9B4aGRYvuL41jfYtcBJniBZKPcGAkuTN1hHN9AXRpf47STpQBLRNbjfmmZ7Zgmpi2DFyepGFrT",
  "key22": "2jUmoaTb2axgTKdwgxk8Fojbgd9fW8VQ5h6j2NvbPUXHfMVkZe3DT5gj1xYjQYdVet256jGB9BMy1qURLgm1AADm",
  "key23": "4uzb1CT2h7AydRUZgE5t19vGvaViEefAxDuJb9tyKpadH8gsebXdu6W6g6NXWT3yhNARDnKgPcEjsZMuxVQ2ZZwt",
  "key24": "5ptwS18zB7LsjycoXSpG2P6aXbU82JFXWkKL6M9k7ggoKV1eNN35sKt4K6xaa6nHj3Gjqy9SVHhDG9ZETL9nojgE",
  "key25": "4KCFYoEo65htpEwZLUjE3TsEKmCpiA9up7oi9WskHWfMUREuwu8mCjNmhhyXdUGFBmDkaAUELx3uv5MdQZkwSBrw",
  "key26": "39up8w93poWW5DdGMaCpgPv1GZLdXSNRKavqCjk69ZsYcnZBkHmMDVP1J7orfvhWrAKeWpqukqkB3DrfgH2E9Vyt",
  "key27": "2N35YA4Ej7QMB9WjCqu1PTiJ7M3fKp5QK7twAWNp5NzaeEvLrj8Lg8fVGksgjwEWa1KBmn4o4zV5HXfZSbEMPxNR",
  "key28": "5eewywQf6fXSqcPhpCePmHXf45FfCQbPLAjPYA23PUMTT4C2RDgbog3dnvQwkERYGpcPnvaPhGyY2xnxbsWbAuz",
  "key29": "4wqBvZ69j5NVgJUBA2xwitjv35eHxDzw1Uc5mNjLqsAKMa86C6tQhvRPgEBPuwLctoeDE7p2TMVSQHiTquDwDhf3",
  "key30": "QQGYrceEDjQNTJh7JW3k9DxPxuHTr1znYenZ33s4CsG3F9ZfsGQZ4DPF4BFRZtZ4p5potFyijfQQuCxVMN55J8g",
  "key31": "4ZJJks6RU8DmRZPrBUTH5ZrmKVPgjruA6AqtaLKjRT1zx8zM3oU6BucDiqbA4m41M1vr1R9wfyCmRpcLNwkVpcGV",
  "key32": "2n165WFPgosrPSoqtQA5rDvsVEpGVJHD7dLUjxQg9eGgurETkoLm1sEYXYXXidJqmHQuZ9kypTVnR2oNahnUy8nw"
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
