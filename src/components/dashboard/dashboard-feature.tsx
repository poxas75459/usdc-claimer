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
    "5eD4agRNPMA9uUQSbQpzQLEC9k9WAK8m3D2nFH6b3UKhfxfcNuXVKmhBx2zAvyLH7jbGVXXtQABQpZ9aG74w9PyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pzvawp59ANThNiPuFkopiAD2auKkuYTsaUtVK5BrYbBt5mJuNqhsfzoifM5TjGDLdYsRwwq6rbUH1Fz78ooAUK4",
  "key1": "r5tCx9YUzEqn9uMTscVviaoA9PPbsSSLa2tspwxFgPLu7QpBHJZtJNiCf6zBLUq4f3TpuqZ4NC375pebaS9ZsC9",
  "key2": "5hQqaom9M8diCpXENH4aiUd4WHikeY4EPzaUbvzyKA1qFmf89Nbmqe71cgSbUQgBmjNYTuKRZUjhjoW5gDzP7GF7",
  "key3": "5zUFXKWQLbWZtrD44DwJtXLA1CgeAGmzKuSTiJAiBUDcnMdvCfhCxoCNF7B8WevesNEpDdYSC5VRWhEYt13tozRy",
  "key4": "3qx5to6kak9BmRPAPdES1kNsATWFknD8EXM3gTHLQ36maBuPFDvosjhaLNkuunUEGRfer4efPeErPwc7Cc6kSgva",
  "key5": "5Jeeevja25Wg2hUXkgnV3rRTd9ofs6TKv8JM8s2NtbzMaqYhUfo36ACE7n21n1Rab9L94LqcENPBttMza7TK92UD",
  "key6": "3V4w24Ay6biQ1PkV2qA3geMzJvvR6VWPH3c7eCKZto17Ve9fa2zmt1bXmKfXm7Ausp1xf8su4PPpVJLymmwvXaAa",
  "key7": "Zfa8foTBxbALH7AZyvFhyE15JhL513jLZ17ZRKnBq6cHap3Hg1gNjk7WNpgxmtEZcUAMvn11yxae27rqa2AXFuJ",
  "key8": "5UV2QrvcmULjtErbnSxV1KSKgtTwpxdKg7pgBoBEzov6Ncsi9uXiBV72L75MKEZ96TZGpGREmnrYiwXWGd8rGunG",
  "key9": "3LdGwnscy2N9dB5SmJR5M66R2ggQSm1a9njEwnQhtS32ghE343p6W1oaXQDSTvYxs9oLDD29zz7Q32qW3MwLCBAG",
  "key10": "5xnTvSLNeUb2cfQTovpD53buyTAATpPvqEtKxDpR9Q38h9m96HNQT96HVSqNCDkg4h3rZLDWoGEudtxfcHMA4FzX",
  "key11": "3LAa4kyQiGeeWckmzbJzQ2GKtVvXTwkdUcCEVWd7HxLzpAkxt6HuTDUj1FNcEHTaXY6dX3NojcpmrkdSxWtD3Fda",
  "key12": "NrtcY4U4BKgsNStUc6yvBsajpSB5sEVujwjkmyWVBVTZe7g5Hz5D24HeuQMyKsWwmSTA1Wz3buuWoMAtg5huup9",
  "key13": "a8GqgGzocWeNRru9rSSgnYX6bfoKEx3YRqZXRQ936Zz2yD5g7JKAoup9RqPRZ96XHyNMbqebMJa9GTaFWSPttoP",
  "key14": "56TwAjezr4bHuV9sFc1ptRTNz1pEB2hk9nxv1HJzwAZJ1ssXwXmvKEqncUxvNpTcVBxWrJfkUZTQtN2dnhXhbG2s",
  "key15": "4DxFcTH3TVMMinZ6ytQZHom5F7PMUC77sEP16EBW7Y467YWmoXN56vSa8Ri1H2VgU5qDcRi3QmtkZxjNH7Y1Ev9f",
  "key16": "5gBo5mQFTmgHyvH3EjZpP6RXaRdo9KAfUDaUfKYj2tj7Rq8UyHTyEKt7mngrnYmxRiDQmqbiiqZEJwC6cDc7nwpN",
  "key17": "4vJQBoYvJXX1ezycDJ77W9nJxs9RrGpZi7xmkYPwj863C9j7HAmLHvXisKfpK87JRzKx7TLe5yASaB1QwDj2AieW",
  "key18": "4XXc2yZrdYCQzEn9ZzwZK7YKFUZEvUwdodvS5TQ9jimHFiw7zXAQgtKGK6jsqVmoe468rRWVsNHxKE7wpf2Wxcxg",
  "key19": "2iTeKhZGz8mGdScyaq9AVUt47ftdABrvmDY9FGrog2rdCxYWqtQ3HEdtEqeaayFxjvXgEmtnAzCvchtNYaUoZnAb",
  "key20": "5x7StKez7eDfDirAmSMBCPCzRm7Lj74Pe89JKU7A7H7ecEVuJBijiei7BbhK5JfGQ9xT8NH7XCi3YanLXT9orDMA",
  "key21": "3C69S5z6QXqcCqHqbbuerTiSboESL5y6yqkGTu5vKYJPQtrEydwTFunYW1aQ2s3a7GaRTDGASJn2TkYgvcizvKXD",
  "key22": "2TfiR6YyWXwHhHGMvBv3WtibNMDDFbBYe9wtRyK7rgvWQvmrjzoJpVCv8SkprJxYMZa45PyWAhzKXBnRThLXGYSy",
  "key23": "4n5TZ43p5mVdiGW2DnMbTSME4Zo4DsTyEq81MHSSr3nZf6BenprFTqwf1khLvr4X4myWjjkC1bbjuQcTmwF7u7FL",
  "key24": "3MBvueSndmRrzvCxooKBkNHZaPRP3kfFqC2qfCAPfUcZdM8NnwNyz37WZvJhsDc8WE8Hhr8FXf6ZRxG8rh5jLEqo",
  "key25": "4beLuvDB5XEQAaDQ8kPG5B2hJB7JfjNoKgWsGWe1mp9CUN5vDmSCj793Y7t21CJn3kZJyyiSZdr8jfEiJUqLUpFv",
  "key26": "2mANvEwgXce5XEBCx8LoE1dpY3jrfPAbEDauJBd9oBy4jVev6ocH9zPMju1kiwrWzCbMYsJVvizPRtc2T1kEqeah"
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
