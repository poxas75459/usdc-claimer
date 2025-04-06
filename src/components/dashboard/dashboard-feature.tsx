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
    "4e7cfTKYzjp3v45nb4SQ76VzxCuWvRgDuc3jGda9p4RdibGPpNyUPUHViXJLcg5TtNRBg5BA5TWZrN2kMRxfoCfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YeDxLasKFG3zKTmUqbFSo5bxDJBPQBabFCWT8PcdTydnLm2PoUP1YnqWS2B5qykfgbtaoVv4FDUznodewMTLdhN",
  "key1": "EaHe6ExkLSFBhXPTE1xXhwDWwLuA9eivTqCEq76x1kvLYwxkj5EBsGopuvk5eFvxFSywBQofLFQ1Z2YWrQjahw6",
  "key2": "3XR4oK4ySwTpvpedZbDVUSMtQuCiQ7qDFwD9zT4XGextoZQ7ykGbm9ZXg5b1WWiFu1TaTSBZ1QteeU5mYxnKk4qs",
  "key3": "3LZ1ZpX9S17RwnWnxANemYsTACZRwLqgNSnUNGYY7XkddGP196rxMpyfu2HTSLASjbvqTR96QQTDTmC7MNYyA2RZ",
  "key4": "2tBneYbrgvgwCtQDmvYPCQkkxotbipxAZpDN7gQho66TRvaxCMpgqoDnTBA9DQFXWTXodTfWS7qjojSVUhbB6m7b",
  "key5": "4DK2ziC8m8Vu1UVHqiheQbeEgrpEvHUSUf3Vb3A6TEw14vooXWpUmnA1FnsscCtuQAoBsfwwXy1fqB969D15xmqE",
  "key6": "3E1tabFzmPjB1YETyjNaN6zjfe2FBiUiJF8Bq1PU2ryEKTwN5R7Vmh7Qd68GBQ9KnDxnRH22eLB7FnnamD6dCNsb",
  "key7": "3Pd9y2DGQEYH7CdPJh4RE1Twf2mZBcYkB4Y7vtqAw2y32Cd15ErkC95NjQVbNfayHEVcte5TXa9Hje6vJaqQmA7B",
  "key8": "5bXUq58LkAunS6c3kw828WE9BBmNFbmdpt9xLnFh4H5obYjpsMBW1XrB9aWdVpYN7ZsF1pLBadJXC6PNWhHXT2Ya",
  "key9": "yXjzF8yNUuptJQxjFZJyW2HMV9z1HPhyhqGUJF5W4n7rpRNad5AEyUaZGD3NX7xqzXGKMn3gULJnaLc31zATtg5",
  "key10": "MFpV8KmFmprjbYdFXXyPhgvVtqZZyMyKwJjkF2V7wNhsXiZL1iBTWEDtQJrg2AoHSAyE5veMNfcgFzpvRdaR963",
  "key11": "4omXgRxLtioLn6GcxViPc3ZL43e9JnKsiLL7L83hyFxPaVNvfK6WbtfjEaNrk7WhsXW3KozaBPfFJRAoVtnLU9mM",
  "key12": "3nDNjSNdgoFitWf6sDJn3yBBdo7qQqd2HBsquhqXRzvQfKbVjdtuLDq7vzJ8UQtvm7WpZe5nJVquKvDFP6o4Riui",
  "key13": "WSujY2tYmDB8oJ9ZTtArnhRprhpDodCShTg7qT5S1oAjYSMqiD4BfTfQWBGR7wGxPJEcqP7gPXWN6Dwjxj1gZmG",
  "key14": "3A13GSthT53tDbBHSrAG47yyjEptNtwi7bW9T1hmXJ4rLJGsYuwuCxNeB5XA3aNzHnUgVD6STXdLj9Z861A8xJPR",
  "key15": "2TDFJT8CZVB1EGqVQK8FrkPRFV2qMYLCHHJuRSvTnZKsurWDfYJhgB1SotNcezpvzRL3RjvkSwWxrzzofdhWNVc1",
  "key16": "5JnNqLanSv7MKeFZ8wrmRNJSmS4HpUYoTzXq8pukWWbPCAtGgt6XhLCkwhumsfYeZRTn4Uv4aqThz8j7VZihS1cN",
  "key17": "5mw1Z66GGwKPp4ns8uRdozyFk6h6pExkkirhyg5mxinqX7ckCyreeA8p8gMK1nCfdCVDFtrYCeXNhV5EtysNC8X7",
  "key18": "3TJVes87SpuxMeXKaqGwjgEZtXb5DKdgw2BoMKnXAuKzC6MpxaAcsH3zPKyVWAQ3v4KTc2wctcchNMTkT7MSeYtZ",
  "key19": "3N2SUcQaZQE56PGr6FNQo4pL5Wu9FPtEdKx6xz2qBrWEdot1mxgYRodNFujHnww6jUURLpXHot8xycLa24opDK4L",
  "key20": "581dF3nnUQuFLgxUfiZPd4zjvW6piy74vrxH8QthkrFQFaK72ea3rQPKUp773K8tz1sT2zdNyYp3MvTsPaKvocrq",
  "key21": "8gLCzEuFHmKFU2B93CFAb3pfNXRJLoyNfMiEJxjbSajBGz7DrtKnrbFkfLFqCqSWAPTAb3pc7ZCWwz6NpMQPfjp",
  "key22": "2Kwgo1ZtC8JmvFuxYAvf518YNC91hN5jp1rBym2oUGEXQGJiCB5rKpzHrkiAtazVxvj1Mh5bRaGZzeB544VAFnMs",
  "key23": "4hDnW6Hoo6uFM3bpX7UykqRmuUCA1dnQLnAMNNHZFLc3CAimfwMEiLeQfYpU7Snt9ZE6E7M18TXU5byzEYYzRFCy",
  "key24": "3E7KWeh8g7rdypZWCenXJ3bfsFpTjWuEwEX4gjNweSs6zFpT4RMg5iB9emREcsdmDME6NG77Au9ceqnTDWgiKnBi",
  "key25": "4kirBqfRWvr4sQKH6gDpjWKoYpzh3L49srGN9MmJNjWN2TszCaFVW18bwBQAm49DT8hFf1dut6ndEwoWR2kaZsi5",
  "key26": "X7WmTRQ7w2osymcfQd87Pvrw9kyXvu8uKdVzZYa8NiffGLCS41HiMU2T4JCsUpMxeKgthqU4mjn2UkrqDAEaAFy",
  "key27": "41Kc5yRWwDLawKpX9RDwT5YWWZftrVMEeKDgE4QNz64p817FwvpKeUpSAp6ve5xwkk6bJqC8e5TiBQEuxrv63aTN",
  "key28": "tyw9Vxf9WLZJd4SCa5nJmZ5kqPu9zQqGJDQMQea4xeMFMHPoDS3zhxgeYg7Hj5uhoATyAjHnTjCa3PqkQsk8LHC",
  "key29": "rd51RbV1VTN9CwLzXMvHsXJrVBpysuVFn9FvmWDZ2L4qiPmDQgH8YUgdbuaMprXq9vtCctF9yJ3qaC2Pz3mjzy9",
  "key30": "2brE7HQZaz2rXyx39DdVnptE2PdC9Uxus7cPPiURxBjvY3jxHEFpgzcm24i9tQF2qicGqftV3GsTLXNTv14LDjSz",
  "key31": "4D6y3c8YfkHXWTyEmabv7oiYuVaAmjxRP7pFZCjzbD4HocWLG7JdyX7SR34JYjwon5gt5P5k64KtQAf7S91o7Unk"
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
