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
    "2rBKszWGH3cEc2Do2vT76J9eB384CiiUDSxP8oRZnoxyrnnrtmLvNhqN2FLNbsMuibPCVFsHXqgyjmJio4iYr6B9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59gWuQWUSVzrobL3nCrcUKK9pkA961SZVsv4cEa4wNs56wPgDx5ZKoLT4eaRbf2SCfsY8Sda7UicwkP82DiY9ZB",
  "key1": "BoTTZdVfCCqHXNrCQBiLNNcXThQxxJH6awuGZrkcxPixeNfVnGruPKjMt714s16M7dWSk5ahqbrFvZbtj8Tjvt9",
  "key2": "4KxmTYkufZfiFD5ccZGkxzySwSJt9FDrkFhAVwcStpZ6RYBs3Rztz1y1mpxAbdCu6xDcVmjuzfGdyR7c4ZuPKA8Y",
  "key3": "v3sZaKzDNgPjk57ts2w3rLAxLngDcJ1c8yp8C2MWLFMaDekCdN9BjRvrR1eBvH6viQtM7s2wynsEsashdv71W8i",
  "key4": "3fa82KVvseiR5omT1Wak3np4t4fWYuPE2mXsBWfRrmD94Swpz3cGAFoatZj1n5ZwT1wpSxnzNXQRbfm8aFNYoktN",
  "key5": "3N5iPGPwedv8w6ADxiZ4iEjbEY2cekGhNiN8vi1br72QYeaPVy28V2gUMos1wDHyz8mW3cxv4TqQa1NAdQYTQast",
  "key6": "5B4WRxYLYboy8fWMPZPMiwmemHvsGupu6pXkidWY3M7naVgYrwm7rzxDEBTHA3suozpfh6n2iqHa2pW1Jrq53Z8q",
  "key7": "61frE1dEAXTcSeK536XmoVC4shXihXffyRBLQDxStrLZbWw7NxV1quHnEPLqzHp7DnhaVM69FfqXZ297RwBkenLh",
  "key8": "5B9XumzvK7jWNKEVhPFxPBAEf749x9rwKEKF7wrUbTWVXdPDgeKwJf9TwYwrNGfdopfk7qPXCXQZDxGiophswHzR",
  "key9": "p5wR1qSLeqZgdxBtzLPC5yzF97LQmNkfFLGjumENbRRbGSu9oxYBwf9rZJ3BjuGt2puTSiqCz8NzhtXvscTXFHz",
  "key10": "4nPQ8UMU4NAs2x5V8SDQ55n5EoeeWocui8SF83J22jcp9QaBQNVUusaGnysCcrudUXBwmfQW19xxzJJjapBXQHRE",
  "key11": "zY87Dz6mXZjk9gqYnUYfZe9eGknEfiEku11GnbiKVUzMNMe7PoF2AqkdV6eT2WuVqHgbvX5UmtqHWnDgc599qv3",
  "key12": "4WATyEePJpXh5JMPRv2Bv9vaKhs8G4BVhw7ve3EQZfDFe21zLw97yVUVZhg34Eq1E9XLSMjMn8vdrLqkK4HZe7jm",
  "key13": "5QY1BVvxgvbrMm9zV8S1s9FQMQWd4ibR9krSov9PTVGasJyy9FwV1VQdLZdqQGmCedi2gbMzX3MTQp5xX8amQ8iw",
  "key14": "2XtjADFWRqGaUuppK8xjWXxiZtiuwVXLagT1ZKD9269sMf4na74NKuypyiEAMyW37SwMpaaAki7six4SJXUsGnt3",
  "key15": "4Z7qnnffW68qnrfJPr3hihdxuLneHw1DKXPyuGRuJyyHhc1AZ3wUA5RC3SdKgrznNSUKbN3nKwZUDuAWjGBDXtkL",
  "key16": "3UGJK25UH9aBHmRe7q2tDhNNiCLRYv2ETDQXMDHtgnWYqzeEjNRtAQatQsgt3PNiwgfnxW78GneJZk9J8RLdGWLB",
  "key17": "4dBsJFLvmvXakTNyvsmYxyraXbBwAGLzbWAM5piVJdm3L6mCzjS4egq5ZSo94g9FzukFQgxNrAsc66mptxXbWYkK",
  "key18": "372e9qyrQqRav2PzSmu14Ewfb7FS9HjWvyhs6kvZSkdDwjafN3YAbFKh4S52mHGpCkkhW5KNvdMYSg4GEH3ZQ3Lw",
  "key19": "45TkoPf8qqH18tM11LMDfaoe6RBv8fWUAtUNBMvtBotU6RcS9hsHwKocMrGKiq1spKWM6DULqB9FRjwHgr4SytUL",
  "key20": "3GjByfTWevsabz6dtT6hVWUw8y4YHinB1BnfRD1EDBFG2xnooGotXTsTB246SX1cBPczmENbyFxdhQ7QcwES8RMS",
  "key21": "3ZcLNoPE6M28Sb5VJXQykMC5Ud1X8poBxLEWMGbCENWxY28pbSSEUeqjw3eCPqoQS5ySiZZvFnqvetzMgLfbSx2K",
  "key22": "FtrY19xyfVSjEwST7dPHFNdtM2uqVKsMxqfzw1qXp8Ud6brDiXmHqgodB5NKESvpGBVVKGjPKZ58BWFSqfmroNy",
  "key23": "3hp1ykb7EGtzinojtQAnpudzVcJVQAH6nKRiramXL4Hsfc2hmqariXAoXgeegQ4Kndo6AhFrhKRjuDcE9Ac7Gg8M",
  "key24": "4cnBZTNGPELAVS91XfKqEgdjWUg1XPenF1SksXB1WYg9bC7cpG7iHduGKxWcg7SXaNQZr184gb9dZA4UAY8U9hki",
  "key25": "5UhvRNcosYY1X1fAWj1J4pb7g3iHpC9va8BWewXJkxdf3BRFGLMXcdx2oWFjh8pwhnLkXwqhfWvmfb7JV9h4Lfbf",
  "key26": "3CUs62u8AUGtTnSeNoHevv8FP4e9c1nW1kmFDDM2NRtiNLVuuV2tnn5ZmySD5zVeEutX4247SwgEWJNgYoEkjBPv",
  "key27": "fEsaDZKS4Zjq9brHh1XbUcKbDsc6YHLNwiHy4XYsqEPb78bBCJDAG89FvaCrFfy6pnRHSepis1zZeLKr9uKaR4w",
  "key28": "3NagDQ3crbdibmKb3S7crqptkb2JgTv4jq2v1dUZR92iJS67NdC8z7TssRuwCzjh4auwFYY3bXNaotqSGzgsAe84"
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
