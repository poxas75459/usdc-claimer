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
    "3nxUYCUHh3BJfd4mC2zRvZHTsbEks8J1qmJ9ZusZ9U8e4Gyg98swWQd2TW5axeykYKeeRpcjjZWJ7KggzQfnEiTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42hqYxwcbtu2mwzjiaoyaKoJPaVt5LKXWe19JiaBocs4CchcQEq9opb4So9W7dECdBcYjczuSUjrH5B5NJqSpfLo",
  "key1": "2tir9d8RMCq2qQoGXkjB6FzNJWPhXMnK14RoA57jvM6GewFD3SybY8swbuaC2G9bS9Z9ogt28RhRUTQ9k9N2y3uC",
  "key2": "5nvvd6YwFkjbVEsX6vs7hMB2QSuVbF9M5Wi8JzeCWJr5mBXsRG4ekCs6yiuwpdGCr7hVtjfQmRnpvWaXfXU3ENAo",
  "key3": "4hLf1HERs4f7zrG4LnJgzV3M95ARe8m8cPW3FRpLiCbxbhaiywxrAyYNxpmr4n9m953MBYfbcFQvGynTdH39Q4VY",
  "key4": "3yfsHpqFQu8zvYk8TWb2WjpuMxhZeCKPPUSdsB2LuauUjcie5aW2N4ENCxm8D55257D2fvkdznGsyyE6WtNRwyS8",
  "key5": "1CE4hY83q5iU33UzSPedP6vJYDpTTr5PqxC3RMoakpxxgobZK94SugSxaYsGo7LUNdRbvZryJQ5QyRfE8r46t6A",
  "key6": "66QqqLr8Ac8wWba4KpgfSwYAx8AHSS1EdCctDQrQGAYcFaauTkiYe3wtVA19z5LHJV5rd3be9cwLNPqdB6xVdm2Q",
  "key7": "3VfE6Y4XCKKdx1LtHWBhuhYX9EqSRmiydYAP1UPaUtabRwDnD9yfFt9fDuK65dvgfDnnK9qzNx6edy72KJXZxtL5",
  "key8": "4RUPZ4akJ5VUrrwTxYCwj9BEPBSnNSntgRHwu6wjzp4aLkJb1CZffBAuA2g9FQU7rzKwMb9EGGneF7i7rtQ5F4mf",
  "key9": "CL98AMCtUS7UEtv12p1souBkpZZ7rBNRbbxTb3tfJugx751VMvcNRNYEfjoAQJj12jUk3GphXyGz3BPrbwSQ6NF",
  "key10": "5CTcEgJPxjB8FZHA5F2wu6mVr3mPR3MYbyFaL2Dr77txFVgAaAA5wTdSwU3uVQ1VWdXHHUzv2KvS2sVVFJwg4XtQ",
  "key11": "4XCx2v5QFhQkmqPxYFQ4x9hBw4ocof9CdJTMbkwh4d9a4Mij67cLbA4V1YT3AoECfs6ugbJkkw3kvKZyhHjsqtAS",
  "key12": "PfZViroB7yqRfptXRk9YJCcZY7zgWF4KtqDdowxLgL7A1shjVpu8PuGZv1K7ZhM8kW9TEDmRHoePYac4pqv1NLK",
  "key13": "4XhKJ8Qbvqx5UjNHNWwitm82JgnW1aXBcAtjvg9Z8EY4YWf7gcDnRA3p2PKPfTAj7cb753EZsMBzj5TRq8UUqLuK",
  "key14": "2noK13trSN4UM9PBLimwfouvaVxf7YmjgwqgzZpTUcsBR4uh73CGBC3s5SbpoaEeimExYuGNwt3QWEsohXMhJ7ZK",
  "key15": "46WgvMBQ8oe5s62VjydRntDgKqxE56E2Y2CmjyMK24h6zJYHCxkRAwjmXpFj4hcCdwDdEV8zJuXBcnHcGhYpE8zU",
  "key16": "H6PginDX4vZNcpqaTPoPzAUnkFjVE8Gg12SEmpVCNjiAi55sBJKqBrtvrGWQSn8BTy66hv8vPNqPRgPJCLMBzUj",
  "key17": "mV7K47LmCn7YvU6d97jrd3tGLYKq1mowzSkf1rfoKNwMwYMC5Kv7XySfP7t8AX9aUL9tw3eKYhi1Az6qSLNAaxu",
  "key18": "3MRhruptXcyZui7idnXZx7aTEDsLmefaQfKNjJ2gk2aidg3km1sz8HhRgbArvVDTsXxgtQg3ees8Nw5bHurSsYNL",
  "key19": "3SdNFdYmWnQJhpBjda3nUk3YhBvDFikuSAktrBBA3aFEvW8xwCBKKcNgKfBNC5og3X6DWyt9sAdhpcqq4Ea8nzdh",
  "key20": "379zALekMG4UYdhouF67Jj9dGop46YJAmFneDxrHaibhHChkNXdExZDWpfQ6WciZ2pCyshEhJDgDGDe9PhKqEoHo",
  "key21": "24TE9CxK2ncwihP53zwVWCsmS2v55yKN9iRHtX9tuMygJdJwgJ7NqxNV76boJfNNPHCFU12Cbpf2VyqVyBHcntZy",
  "key22": "534LmVB7dqJ8QvTGjZBYVJd1bhvWoPggpQ6ub7q9dHSQTxx7H6r9L25Th6aGXpf9Mj2fRFmzJscnCcofvvtDMhPV",
  "key23": "5G8HRYcEPsGyLsC4M9NSXWdKC3gpRHDN1fi7dyfcg6SgqPTdXSY2ZAib8HuEcyG3s7U7QZ8cRpSwMuafJKs5zqHf",
  "key24": "3HAMRfhfNWggDsej3fvZfnad9PyRq8h5LVTs27H6FqDRKRwoaT8cTvYGmMFZQLC7pwFB97NsYp3LZGXXVtdZyxEj",
  "key25": "4E1PdSgEEN3o5aPXkiFzrx55mbTR1Hg6vesU97bRwBuswXgfrHVxZPDTjtzKgznttZCXzBuYsnB76n43wuYSbRgL",
  "key26": "4VoAEMS2zME2hEvcasmWqKfTxMC6tLyJxXhz8vnZDsTAN7tvt4wfx41aynEvNf7CGPaa5xhT1YLccDkeJywmQeHc",
  "key27": "4aN64gTF1Gd8atBD1JFJJtfrpCAu3YyXicbGvx6YZfcVL3P3CNpNgxke9u57zvsqLLaX3wdsfHheNDoFye2ZgC9B",
  "key28": "2YatKATLHGwLPQg5hpSm9XpNnzjLW3Tj3mCfrSVTxaPcWa7THde9iQktFa11MrcunrgAi7Gm2JJbfdRRhYe5ZrWT",
  "key29": "2dF6awP6K2KtPxsvc7iv6ZbKBdKeFnCipGNfj5KioE5hkJnxHq9SQPpSWQ8urrB8XbFHDSBq6cqt4jMMy3vofTmj",
  "key30": "tjRWB9EMGUEUxWSbngo2ZcPbomrRfY7SpSiwqXMMuyrBK5XuL4act2Qgtca1iwCgros5YdtiJ6WPLKfcHzto9Hb",
  "key31": "4tWeeWV92BrTLX5kcnYAHmWAcjMfD141EFQ3Fh7tpke18QaKrx5o7V5nQ1wbXqzgzfUxA5ktq5Cgjsi9tYFwBop7",
  "key32": "5NcT4hDahMugpFbv6c86RQgpbgBX6YM71txjajmwHJZBUFt9TjKrQRVHyfxSmMeDZCRdHdzHnnZfHEdLkK1wyyAi"
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
