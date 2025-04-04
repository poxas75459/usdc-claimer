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
    "4VLmDEUapyQUVNXpojYDVPypmZB4PT5tyswgZCmc1ZiwX3xFMQ3ArWqbCVi3rcapCAyT5KnruJSPEmTUjXNmYVrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XBjpk1phcRmcuNUSCaV3kG1SdqWK4e6jjTH7fXd6bjLKLUbs4EdTwrEtSFov7K1yySQZoH96PGgJNXmyJTGxRHc",
  "key1": "4RWmhUmHFU2LvkxhR9SVSHCQ1sjC7LjLsiwY54oAhr2hw1z9y8NMCZzvwihfHjQ1bWRVVGsL6ypzwSTZ671ApPHc",
  "key2": "1oZKMEY2mMJbCgPpsLCGRoDNigP3FWGgz6FQ5upbtTStdp1tKbQGSwuGkjn1hkcP182VMNYorhatUM8U9HmkHLQ",
  "key3": "5yhd6vzMEL4DBMpfqSr6ACuXLU9cw38eBE3rGsgsh3xsYbZFsxMn4WyAh1owYxSGajB2PfNPoJuZ4rs1GhWjYwN1",
  "key4": "2YZtv4eqEq6DAYvR1kF2mMkAcUQogJ9bPTNA8FJ2P7yTjMi5YqxWcHXc6ndsiFD2rQShmvHzWfpfusDVjZ3K1u2H",
  "key5": "5M1r9qDmgRM1RhmtLsdaM3MxRqVJjuq8vbHoVDX5YQNXw8YRmnitGmSZFXqdAgfpoznUFNJBopWsU9EHFiMjuQ9t",
  "key6": "3c5jywiVuCRuQkjZ89j5M6aUPbaBXGPpeN6B8KnzorXh1NhoEh6cPikKGbHPwFKY18z5YsPoHqCZis9FuYQ7DXeM",
  "key7": "2ddLywtihTBGDa5pYXz1CFiY6TiG8f7ssBBjMYfSrXt1JWfjUcgg9YVjsAgXjpbADnfhCWFCFUQV1DLd8DWDasZo",
  "key8": "5pR3pYDTfpc56wVhqBVUdqLjT5Pw3W122YiT2HqeA53DE3cz35KHABoAfW4tgn3dBvcRwz2rEXCtprNtP6BuCEM5",
  "key9": "63RsaKebQAeh4Bur1DViG6zYcSxiTehJXQxkW8V1Ca18TDBboigzTp8o15cGrs8A5innSWfpq6jXYEzHuiSh8P5F",
  "key10": "4MxDjkXowPE36HxiJsgdArkQzG8ZnWgS8zAqS2aUPABESxZBXP41wrVWVeXNetNJdjqre2LJSrunbh21Cv8HUTW2",
  "key11": "2REw1RJcJUo6fgFW6HQtkmB13ppHinaLN39untLokP6We1XstMrFhyN2ZraJHYYrxK4GKvYTzDjs4da6LQS2supf",
  "key12": "46apVHCAoCQ4qeByUeDSVgm3iJBV2grepUu5RXts6WbYoqjUqPu9aJy3jHTVZEB6jMi9tW5EcjxyqBMRQA9Pmqba",
  "key13": "5RHK5aRoLWBf191QyJXcEPoCrfcD2AiB4wRfyM7gPh1CkdveqkWu5zN7k44bSAVQK2MGu37AE1yQYsJt4QLoVrp4",
  "key14": "2i7bMHKTZUaz8Dfms7GihXygByTcQQ572MyZJr92YM7Yof4VbN1wVGEQNtTAHH5ffVLAiP7PcTFFAPT5nVgovXko",
  "key15": "58drET46BNK1YzSDbcY2UCXPLFfuusG73WtbAF1TgmU6sU7ddMvBuhX4QecvPuk3KbytjGKuugahY8zQ8BWyPAA9",
  "key16": "1GzN1fmsgZiLVZXfRZNq1AHpiKHwzKJ8TgXzAoKbcynKsToAU6DbSmLy1F2nmePPsySAsQPQ8xP4z1SopbnptoP",
  "key17": "3NS8bxm9rAFjXvxJvhM2gpKVWo5bYFWSecFUr9sRzbc1q5mWZYbqv9BVKzediUT22bqdD12zZY14FGoiF4enkGj",
  "key18": "5HoJ16KFTq5oDyGknwTvoYB5nPwx6asGbbbwxM3BAxmHJYYsp3KY4aYc4egH5pH6THJX9f4tUWUnAJ1GLoek4pf3",
  "key19": "4NZbJt7UVT1hYZJpGMjFygDkAPpRZkC8kkKDQNxzopKi9jTVYLwEZAXwwvp4y5fXvaBJ9Z8z5ZdFPDMVoNFd2P4q",
  "key20": "Pxpq4Sfts8ALdr3tz7aQqxHVbmGtDrxF3oixj4hSTZ6CfBAcYhoP4D5sBNHx6LG6v5Pigro1bYGehsQddavkDde",
  "key21": "4N4kVvxgRFsPqnfN8wAwNeJA8D8APYBFaXRKpTbRug1ewdkdY6xkNeo81cCwziqoaF9eUcab1kGpZbZ9hFgWjzA8",
  "key22": "qFP8s8TZ819fHtaSmxzJpa3VeTjtqcwbu6QoPcytZNkKLMQSonWd66bX2rRTdQAaQ1KfYdofHMTTa3LCHRNM5iT",
  "key23": "2EPoWuKU1cWPiU25fyZThxBnJpGdptCwsdyjG6EwcpqVNAsFj1VMR3AzCQm8FJVwnnKKQowqHSK7cHwJiFYWH5WQ",
  "key24": "3dbu2prbKEfu6iqNtVvMtynUre8UhdhArWE8fnNyCL1khKyCayRr5xcUzD2mk1Mwcn9aESNWnXqBZYtarnkU4XVg",
  "key25": "4xJ5KJz7DZ28Q99aDSmj3KPaK9ewhGDciKweU4tZcYCbc1XTWkX8BPeZn8k6iSB1KTb2w2WTDPc7No7Q4E2R8CZH",
  "key26": "5puJ5WVNLfZMdYh47r3z1U9ZaNrRJ5k4rgsCcNxK7mXYeM1oMBJNpPepNKiYbHF2KSt3QyV4F5HWEADxBPGvVTp7",
  "key27": "2XS5QHnZcFRq82kDDPVpCWLsEkibbkT38aLM6QU7oPHSj9wj8tT4ZQpQyj7eEnTn2PQ3DTXKxjdk9aoLSmspWVeE",
  "key28": "35zQSb2hrzHFB14vEbdEk3HEZmXVbZmYUBgWXK5yF3prwdf7s5qG4CsFgnBnKFDbzwz8Sxpp2RguGxxXhNrbgKLN",
  "key29": "3MKk1NELtyf8nUQdLhHxpqyVUus24qCJXmNa6ZrwEMX82A2fPc188SSofL1GcABmwcbHe3K55NonskdKjWn3TQBa",
  "key30": "3x2TdGeP3qrX8zBo8azGVYiApb6Ck6SYxYPThER5Zjmbmv2cBWuSk4y6D3YqSU9PPfJEvmE7B39UYrrUCpwkgf9t",
  "key31": "41xcB7KWqwacS8eHdkWVw1HE9PLijRAbEudU54LkccPpD4NC8gceQb4WKzZ4YAjYQWsmQavsyQoVja29H1dp6xWy",
  "key32": "4R5iabxsCYx4Hk4fFvWLBLMU1jCYrYT3XtxDbo7MXswR12gZna3kpjr8ebLmqEwu794nXrf5M9ESge6WHPYyH8ds",
  "key33": "4Tv23LUN9k28SXqQZ9pTKBuv2yhszpXdQt9TiD2PBcCWuYNpDZfjVpKHGTLrMhKb3gySGdw42K8Mh4psTJPEsJCB",
  "key34": "DuymeyBopjwTQ6Ux6cUKtR1SmZxArm525sTVtCarSgKFq4BtQfJLbwxcqyWU58TQz1GRcmDrHKNsEjEU2qcHmFW"
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
