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
    "YfAKsc98uRKn9sdKgChqHYQmpYJYRdGQgYooHHVvZsVBc9bVxpX5XLZMV5KZNYqxXnqjViorWrVpX22ZQCqC137"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NUcE2LbrFGrfJzqGcAb1JqSyj8HdkQKc5bwBeADhetEzSUMpsZdHt3PaXuzVCXsYN3LPiLfKgLRrRfAQnCs6KTm",
  "key1": "ziT3htPRiP3ZZnWryJbbP7KLsJogDmRxN5T8a6RqaJvMkvY9zk4hwdUPgBsCWZsYtYPEyQwdK11QNHWMCbFmAzm",
  "key2": "2uYB2T8ecoAGgu8Wsay5QDLitJaNapiaDkWTeTf8K8w52atxBP9cx2WeKnv7oasRb2uZH33Bg4bzi7UtwwR9pung",
  "key3": "4xAQafiqBvvuYitubpv59rK53AGFDgNfSfEAQNx5zGDKBAN15bmCH1avUWjEV7DiVfLzQFTgt8b64N4iQzRL6WC8",
  "key4": "3FRaYaioqnLQ5UnfWPvj4ehyPW1mF7EqRLLUUxzrqWij48CrWBUmLhGcpp6ZGQNvbmdGWLvTZVqf1MLum5QHEgpi",
  "key5": "5AjJ7z82tFcD61jBTCUoAe7UetU3Jpo8jHDqgEmhLM5JsTz7byqLD22jFjHpmLXs5itjifANoXZCv1xpwhkR5nRn",
  "key6": "3ZDEinS9v9D91VkU7HAQr3YAWcy8qyQ5UknuoAGZVK4VmB3fPbegfppNin3sni47Myj9BY2jCzbhfevm93LR1fzJ",
  "key7": "46UsWe9a62mYtjr81aGnSXtxdBFCyKmLUoc5EhyqDnmQJPiSt1Rpp6aP4qVrQuNqAF2R1V9L5ciV1oXnH1XDZZMw",
  "key8": "3TNBcoUc4r5rUMdoQ9rYQtjwxXQ5REM88cDvje6tzY4AZwkahkdj3Ewtdsb855Qvyfrwzm94wfvgRzQmtGM2oyVj",
  "key9": "3bqyYc9vWKpDiW3T4Ft9SszPd4h4tqV8DbA3jz1WCspr3f7HcMvBKS7Tbk5t6YRACXs34QVMka5HLy4cHrpMwwqC",
  "key10": "4sByaf2e675XM7VtniopFkyNf53QpTV6qd9vHBjC4CXJsysgqwgTZr1NrNxpurkjJhHssa8VsyPdfqBo6yozQqsr",
  "key11": "3fHMxhH697ckrFv9xZYzWrnUqhnhSFJ8Di1NnaogNkc72nrim12q8HbYBbwm4ejMQAjuvbbNshUtBEHw6ggbr5UE",
  "key12": "2NPeB26EbqLsi9r8tfwrqgyurHojStiA1j2Kv416zv9UKnYF4aCguYkFKuwHr5YtspnnX943TBVAKPU5kz3SoLaD",
  "key13": "42r3bdyE9NSTSiD2ywAKwJoeh1a5QAiduScnYqFkKiJtU1DWwtX6Y6DHWU6cpNjAGAzEAbne4Era8ctjhFBYYRtn",
  "key14": "4ayMPy98fLMkQxPxoYKQJDUViQpd9JTPzLcSiTDQZaVz8efEu8bVRF6ygd7Yb7UyrgrtM4gqdeNBpt5RUE65ezta",
  "key15": "jg8GTUfy15DH7yzTLocKAuu9oWjR6Fhhd78wC3oQjM9ievcJJwAmMdZzRXY9bJrgwUnJC4SpemhEtFfHuSPxvsr",
  "key16": "2MdvofSWgMRazcoMye1ZD3paqxPD2uKmkwGA52GYH2ZxkzRvUdRS4i9p8MepsLJBhdSwLPv8VvTnqhPhF8qGVhNi",
  "key17": "9r3QwosnHXZ1xkP7wxZU3SG3BFSUoTj1FCQsYRDRt7hVS4pdCs5SdvC3K1pPe9tMmyzUai6995FwEArwFK8GUmC",
  "key18": "2YGTkRXYiozNRsAa7CK28SdqDj2bqW5VW8ELQF3ANBZpwXEvrNSacjYiKHEZELXrsekBr5d1Ck1tzcNp11Qu2Mvf",
  "key19": "7nuAn1eWXYMzMWxBXmEbTT6FxjoNaEMzGJmSAjTc6rwCAwUHcDQrNLduJ5wSB8fF9PBEtcStoSGKyU4vnY4uwWW",
  "key20": "2KQn1iaT4cssgEqazro9tr4Ag6aHW9RgSjZtgJFef3Cq2JR7rS65Hf1eYeTJy5vAE81HgU2ddmyZCFbubDk9osFJ",
  "key21": "3ER6k3NYG1GBDjUaTSUYqSwonnUoPYMbCzKQVpBVEF4zxZS6qezuEFns7hMcXiDQrZM7EMcT2Kb651yKBW5udf4y",
  "key22": "5B9yZT5DcqPBaCp7GZ2ZhXRMpTFF75E1tiqSA7u9JPhaZbjesPmPNwQsUinptDxCU5Yd7nc2eXf9TxCcoCyCdAp5",
  "key23": "LRXeNjbL3mLutz7vqx4agJ2PZ5qWTsBi9WrrzeWHwHwhUVNSE7TiqhW3QqcYyw9awGQpE6T14uM8ucuxJ1x2QrC",
  "key24": "4X1y6JsUrNVWmMgTS8zsGpgUtY8VLvkCjEBoAXACfdvP16B7cZqxFsFaiBKnZmkd6FMhDVsRPim2YUd2pH65aCx7",
  "key25": "276wZTMDs7BdKQ3YrjY73urUZpBs23dcckjPjmiyqbRgdgdLqJSPqYQw7QLzSnZTCdmbqaCTU62zrMketqpoqK9R"
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
