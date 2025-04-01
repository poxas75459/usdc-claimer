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
    "23uGT2Jg9rq8sAqYnoPHQx2CkPyo6EVp7KuakSgw1pzwMV35PU7vQT5fRqiLtQ9U1kcMEvi7ubiM9Us2EBHkr1V8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gD7gwWkKy7Y3UU3YexyWTKDtELhxwJmze6hRWQYcVvzSzwUFRpSzUWX9BMRPm6gmcGLfeBkEbv1quHTkLDvxYbn",
  "key1": "4WLZuRBLYY6Ra8iKHmoMCMBbDcBjZSaM36QwtKAwgF4TzP4ngsrpzouceRDh2BJ3w1WHW2pfEekzG4Eyr964ARjb",
  "key2": "3VwuzkdCwKdUMPqGDoNAQmF8LgpesK92z3JDv1pLi8zygzPSGSmDsjmD6mG6Q5DUyDmDzPxaAqYwbn6sPfKN8ZrD",
  "key3": "31AGQs2oKQXUXPjbhxFvD1TJ4xkMsGHaWQ5Ud2y2h2c8DAWfwV8KgayqdkJBqeu7C4UCXBffsy9ccfZamg95HXsT",
  "key4": "4vuUuBHX3vNgSAsrDoRHwS9ocagRc37MTeP2xnCXZue3qHaW3z8SuyFRGgypEHnGEnoydC5BD7afyfcPSsGW5xBd",
  "key5": "g5NjnQaoJZzdPP9CE6ix4RKjdVrcehjxALvFd76yDjL1WAbfSoCUVsVmG2Y2DALLv3YbxBcoQGjcsYspaamWorH",
  "key6": "3K6aycvrufNDNd9GnacY16FciDsZZeHE3p6Sm9G5HpNv89sjsU6F9b3HMLL3x2hnhbzAgcWy4Z9cTZCcXmYJbGU2",
  "key7": "64yQ9vYDzSNqR1Kf1YxkDCFfwwSzCgrGL27a71DTWs8L2jmnQxjgaCk35mZQgyXhSGUXGJydRVVe5kTzzRNcsM36",
  "key8": "3ncxr6gU8CP6RZZMjg4AVa7WwWwYFZ4TcDt774im1L6vvt6B8fAXaj8UiwQtucupFgkhTHDE15YTb3qunZn7crUw",
  "key9": "45PtJsXdf1hdU5JcYfUSH4jMpoyRnyGSpxLArkYkaudR4nmGC7CtLx93NVRr1UqAv2VuS3gX2U5uYMjjXxspqGqB",
  "key10": "4rSvNujavoYKhpuXB2jUvVDQAxiH1AxqU78fMege4qZhVYRYtfYemhCCf23ETWnqrf9EMXhGptoVWDH7wEYRyomw",
  "key11": "3qQjSHVwNaur2FnUTTWj2C8bDR86FxatZscw8237xRWfASPabFvDrYwQMcwteRaXLYUPka8xH1ahNGUSVRrPDEpP",
  "key12": "5F1qrki4e5cUWeKKPYcfFLU1tuFTX2REbT8EnXqsGS8542L4BU4YmabUxFYytPypF7bQj6JgpJAWpzRsNJDR6aRA",
  "key13": "4ES6YijJcQq3P5kBnJJFAo5f5unoZs4f4LuLog3YHBd6pQcBXvVbG6L9fHYcm896R6aQmAvTuj59mfWAaMY439wv",
  "key14": "Mgv7doAQCDTEseUAtWMGzJcFhTj3FLeT3o1eGpJPtaaQkcBju8DLs4yDEBnRqEmUG8o9h7JWgxUCLYZRZsKAdSb",
  "key15": "4nmDqiTbDjG22BPWRmNMro65t4HiNJCqvguCVKntxQPcEJaX6oXmY9xffEdeah1STDPYdL7hgkH1J3TiswFJHcLL",
  "key16": "2Cw2wdgFtHzJc6D9ZUfC4zmobVibqJ1HhSoVLUsXWyaJM3Nu34QYqCZ2Ah8J9G5HGQZW4BhddLnZscSiRjfMkqmc",
  "key17": "5KLa5u8PFtv3oekudS85AXoteSTnyWsT4xfhHxfuXRAMsvwgzKJrmYdbBaoc4GEY6S5pN6xNc7n59kwSxB9JYSNu",
  "key18": "2cVfPpgtbQDFSRxjDkAReWb7z1afjs2sx4JvEGwbEpCkaKmgWfiyqtarBxMjpb8JkRRPdaJfWScz4wSMdFrtTv1n",
  "key19": "EHzReCumas3zGXT9qMLpvczHPtnAnX9nXZNmCXn3kPmmMyScoFHdeUtMARP5JMemSsxfDo85nugnQDjaf3qV5um",
  "key20": "RHJjtQu5Zx7ZB4kXjDrLRm3p616NMR6wzUEW7XfBsWwtrroy4e2t5qyNPrqsy89qSHSPsnAUePa3dFxJmU8yK8G",
  "key21": "25bbp8Hw6VgKb3BdWQ3zpMtEx16MUxYfcvv74YYiNKTA5evbm2hZNRaUcdkDUNcwQoGJVuhBYjsKzawh3aq3d4Yr",
  "key22": "5Lt8UxkwKqfUHpvSt5mx88HifRrCDdAXy83zhLmQrqPackuSsY41Z9kar9SfrPjYDy1BJjMQg1YKxdJrwCFYNrpE",
  "key23": "3dhjYNJEA8erNqSwR2qCQDJvTNWK69haW2ZVt4AdQbtCFbm3KxAjXBfsUske2UnqDoM2n2VpH2ujtsgtwLCKW75K",
  "key24": "3hnEnJqNDJb5w54whFRWcu3k3XciUqofpdgzn2wt18WrTD9zNYp1nXrWcS3ruWYZRqkRAeqY6NvkyGyS3njBB7oB",
  "key25": "2YL5vUyMBfgq8xWX9VJ7jyBkmbtMp6sM7nL5YnoxoC41RVoihGbHraDxAsZTgnE8ELU1wMdbRkWr4qKH5AFk8CRC",
  "key26": "wtLXGvbdeXv5uECNTJdzBURCS95uJeTxMyvzvZZhxBPTc5izfenYLtZsa4avu9MSosxHKhjApCJXtQDRRpduwUM",
  "key27": "3mvKDyzUqe9wckVXcJ99KxzpmvCMYXQuu4wTy4vZeLPYatXBiBSCwCc1a9roQmg4aHzg2xs94qSCnFZJJ1TDpD3q",
  "key28": "5syKVhqdi1GrnYAhXaUWNDatvBF2r5y71LhJmUAFUv83i1SwC9RbqZieBeR9iCmpGPMWY2JY6Bmdx197SB5JGHyQ",
  "key29": "3wnrLqzcQ5Nv2HPXyUt2yxUxGsFnQYQvCR5bi6yVPdsCJKtNhsdMa3w9NjvPTuvhgpc9RdLfSMyEJK85CHzsnnzF",
  "key30": "64amRGuxQWnWuQbp4wfqzYx8ZbdSbmTBdhxkkDdF5QyPuWuGLb7hGrvq6BypssJbLmsjL1v2wDrBGRYtUZjFZXHh",
  "key31": "24TdMKXwVFZNCVjQu6oNVaUEz9Jso6cz1xtckiGipFzn78XMrowNEdHNrntb7fRo6k8LwatLwvH9zh3z1oYMEDSC"
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
