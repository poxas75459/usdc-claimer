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
    "4zmkbYHFXjCeHdDDT4MhQxPFTFBMiFTP92itLe2KVQV2tqgAbE64TU83e6ugXQowy1Jx5KFTKaMihHvi6Cui86Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ViUgKESwVtLt7X4XaBzWr2iRF8UwTUVtgA7mebYtWxKNEa3Xj4TkPM11K48uAenR2hbeHXKphpYuovMdftyqVGN",
  "key1": "3UwBnbpH7yMJVkGU5AKmLhHinmMLcPQqYeY55g5YWjSKvA3GxUr8VqVniZQWBcRMKyJt4EmeQu3QE1MKYtiehtSY",
  "key2": "2V89RXTAAaWqvfz7KPPo1ZnkJvVgEA5dGanbz55HnARi6YAk3r5npRdyRGSgPpgCgX6oNEVTCZPbyAMg6AkYwSMw",
  "key3": "221ohxcoj3aBEt2tbmgN2BXs7zf2FqQ2mHL8D65XKjaF7BXHcyfQcWCbgE88FbAMW5KpCsmXNRkvnwF959sH1fAz",
  "key4": "46MtQ9q5fsUT4bM5F5gXiLyKnkbAKBN8VrgyDEnq1fozPvssZMFxjqJG7JaRBC3Qe3aYUxJsEvYma3yP38gpzMex",
  "key5": "GfjFQCmroXccWhxKnqD4r26vULMqNoei5ErGszmqmFEnGY4gDt5rENeHZ2TL9mPJbhCCzcryrLtTn7kSR7mZdof",
  "key6": "15A8XAQFxbaSha8pS5tmFzwazxXVG5WmMXqwdkJnNcy1xTDoBbA4Pthbh1nQLEgaU9ghxcnQ5YFsa95RKkkYtL3",
  "key7": "4MBnyFeBWkQGFxzL69hfUGug3LRFdPkvCRZee4iy5zPRAjjjaAc3LNEjygRR7qK9oy1x8obUW9FzvdZ1AB8Qriqw",
  "key8": "3wmspSrv9duXGWLSZFCcb7zkMEtY6yir3mR7Z78P1kbNAMkbhvJoqa83KouPxXqt2HayxM68or6mynGDCVUAhKQh",
  "key9": "6MGUrjsbDAkUx3Mdno5TJUieASFdDdeZnUJqmKBKjbcmh9P28PVufyaPRVkdtDzDZixzn5T29M9pSmQKJ9Y56By",
  "key10": "33QMcxgvCYFEA5BswkqgSvSmXLGVg9tcadeCSSYmxBtNXKKnejszC5Q1VmYjb2MQqonJqWhXmaB2YZJDtoaVxptz",
  "key11": "455ph4zMqacLUgZ63fBjR3VVsB8nmxbQ1sqK143h39LYuXmaCGCuanAJ4UZhn5bPmj89oSxX2wHvTrJPX4cwbu73",
  "key12": "4yh7hqNp4BSjK8mp26qAjhYegQ8wmikr5vqqqNPR1kc4KU9uLHxb6ktm7ikMqUwtPq3wMs69puzxoP5UBRuaSfrz",
  "key13": "pBTNuWiwFGQwRH8b9ic69tZH8bxpbubr5k8wvsTR7Rm1D6ozwLhRwucVxYQqeUMC5QY9KkCSjUTXPiMmJB4QuNT",
  "key14": "2CXU8sfxhijygYqavPjSDP2dw5YZvdhtMX93epz8e9xvBU3cbSHiMhA5jxsn41vcusC3hbhhJLQk9mSiV5YULuAn",
  "key15": "41ipaUbn7EpH5r8svUQ2W1Z3q11tH4xuxYgzttHLViC4NwB2YYjVNhvd2hNwHcyfukfgFY7KNTKGCX61GYWubyVP",
  "key16": "5Yw7YYraMrbecBhqXmac24PrYpsrWEff8dVpTq6Jt8x5kmEcXEZKEZ34tvmFuK1c8KpjEJaL9mQNnjTvtxZRtdpU",
  "key17": "51Z6R3CzcSFC4LCZmpMNsdmFKuRwhQWEgpwSF6JoKjULrzfZpsQ6HwDCUzudyd1b63dehgmvcNjKGYkjMLnusW7t",
  "key18": "2pUrFzmdP3XW24mb5CpNfSbWNC5ExSZLAgMmJ1Kc2eF26G7Pq2MzRNTXCjMtSQcsFM2hKhuPhmefM4sJbn7rqXf2",
  "key19": "2Rwo1fqGEGh7ynW1bTf73G66TYyoxQz9bT7mLUPn9AyWW5szrNUGYLPKxmgxWwmW2AKRZBSvjBq43eb9rfE4rcLy",
  "key20": "2uDtjYDy2jWvqYqbCZm797Zrk3dr7CNqgxznEz8XNEWqmwazgapVR9V2kaN14aApW9KqYVQSiCe39xrmu6YgMMSM",
  "key21": "52mtHP2obnhCRWbToC1bqSaqTYjjzYgVzR3ZkfsBuPbCFAhvwsMS4izXZAWudQomvm32DiawQWVFPXeXwN76jNT9",
  "key22": "mGG8zUqurAeAnNAbKiWnTniSCGXgCawKv1XDvtwZqUQtDjyashxQypcbCKuX12mGEC67KYCZrmhZfxSM96VYYQ2",
  "key23": "61GsYbpZj8KRknQwYGXyjcS9yKbGLL2GoeTTZSBNoFbWQgwbhhADfMX4G2aV2A7UeQeNmD9ZLHCNKJpT93t8topa",
  "key24": "4S97UpRtDMGmvCbSqtYK11A7j9nsijzPxtUZh6BPvLgi6GDqZdcXKD7yW9iEHGvdWVjJkUoPsRTpj9jnJja7fasp",
  "key25": "3jVfLwQQ8ggL5k2QWwGpzgoZCbK5Nys9B4dQUu6kgdxQ3oSeG1WJxwLsNG72h286GwSTUsHFiZpq1jEG8enbFDrz",
  "key26": "4WKBQjcMwWEKzgyNTFe1GPmhP8VKwcGh6bU2Aa9smVTFUTDezZdjNrC8UenqBuVftamim7kYtpVSitjpwYJTjmXv",
  "key27": "QqoBjUaXFJ7CKiRtTiEqo4n6SXoEGzjRP5K2U1BXubWQCoC9dhgkyLwGiFeAPrVN9FmCoonwrww7QsEtwTYUTpK",
  "key28": "8n93JFwoRhcSYAMrK1cgT2fTm68PS9if5yYadncETW7HkKrggNzsPxxRK2ccBACs4zQUHevhM2CRJmhQisf7uoQ",
  "key29": "3b4MQGUNpQ2AZoZnvHrS1kLzXBwFvUAiWuFHp5a3dE9qHw9UwzAPhriuGNKwxmDK1mSfPUPV262yMWYe6NKV61tW",
  "key30": "2oTDMKDSLVFJyux7ixDkou6GfBVacCcHQ9xhf3qGLHbkv78foPcpbp8Si8EFpy3SY6ThrN12zmR8d3Z8N2AwhWct",
  "key31": "4SHJ9eRwKukWZB5fhTA7FPDEguvUZ3ASngeUtn6DSzCS2regTd35mfAQKi2aTboxkEPLwvUSB6q8Uvk4z8TzF4GM",
  "key32": "51GgLVPgJq2LD8XMHNj8c5WS7CB9juDBhXJbcbYk3xyhg96zJ3YrupMGDPbPfRxZRwhz4sy9NckjmL6smpJHwyqh",
  "key33": "52ACgysMRfVwcTBTfanUwrb4ZskD8Y8RZawLK3retRMGwDP4ZNRpEKLYeScNiHpZU645uFaNEsi24pkvPTYCeFTr",
  "key34": "cVgkz8qN26GNzeYsryBskiZqWX4fe4Jr5Nr7DwFUoWX7pfDR2ZtPHCNKXnTPTyQkyK765mr1vfE2NLGbSEATePJ"
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
