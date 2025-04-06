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
    "4W9MmhtLXF8r1Dz5JCc63dYJqhz9b7V9bivDvkhhrasUjRRmdqsasT5Q2XkdehbzDX3MUppqbSKK89bkBLC1gngX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZYBYnicsYMGjfdJhU8KUveXDvR2DoQbugJe5crpkQpFyT1ZeKgYzcijWVcirXfjcu6QhQGxQqDVA3CaTU3K36i5",
  "key1": "3mM1EM6Db1QxwQAPiSvHZbqTg2L86FexDunKUMjndU178vZB8b6nXtYE8ZmMN2Di3vnTaBU4L1wPayRQci9sWea3",
  "key2": "5VYy3Wn665J8mN1kdBxPQ14PXr8rbbZE6Y64QdGwLEAn8KPN426FLmpkaGpBwqRLZVh1oK1p5tkMX8GkQ2zMQ3BJ",
  "key3": "3rjmZufKazyix5vY7C89WGqPgaM56V72D7sEzArV1G62wx2PEBtrvSUarwtesZpKmpBYwEzRKwRAYHKVYFWcRoHQ",
  "key4": "2pzQ6EYzZdqbUTGnmMCvvdd668w8xirnVVqjTSUQbViJiVJU6GUihgsV3XRvsPzkJKBKZsQz1bZywRU6JxT15suU",
  "key5": "2o151YNTephQJaZ8yr1ZiwUPLuMnYXB2enKyLQ9Y571pRA715gYHzpF254fdP1cijG3awSw8LkrFqMQFFCQqJt2t",
  "key6": "4GeQ6iAs1WqDFGeMBQgGEYGEMwPUgMkYhsep7GtM9AucMM9oHRqnLjB3kqudSU3UeJES4YmMomGcdbwMWVriY9Nz",
  "key7": "XMB9EJfuewwgPrkxuiuskrt7M9yFsUU9dySor1ZLknpj2ko1iWjHAdpSX3kHnk7nHoczi29NTZE8FSGidiNjV7L",
  "key8": "2Z6XUnbYGbkdsxzhQv4SWUvRr8T9a3NTWAXAY2X93MnUbXNCje8cqhhg3ogeGPXsmXr6ZLTZVsHeBN9a7t7Z94nJ",
  "key9": "45wTQK479Ku26uLZQPfjQusCxXYMrbapZ1R2uK9dq9beNgJZPSUMiBBzq79FmkTA9QcMEvHqULgYSad6if4i1MB2",
  "key10": "4UwSNTRopvLTZV8ej8qT4byWXTkN76FinRqGWh3RwbdGMcxV4qMKGM5twfMwD6vUDNtGSvDWbDijUL1thEMQxj1d",
  "key11": "3CJ3tCTZ78yuSTLBxxWF3vNxvefVo1TVr98kMMHTG6y6m4zYvg2xpxd6dVHGkXhoi1pETWrmYoErwTkew5srjm5s",
  "key12": "4FSPt5HBNtBUgaxy7r9GanrCxqHvtoveycoEnfEP8ayijbKwacLQbQjpx7nFYhQ7crR9b4ZJC83uaEbRRgLXxHoC",
  "key13": "4REgTfKspmUbdtfzYGSayxXZPPmFhukQTcDYp2sxRyQBo84AU3NMKb8RkV5qcNnKFTAVEhNDG6HMBiFs6sFTk3ZB",
  "key14": "2ijrPdXF8SsArn5x5EJWf1AKP74bjntpF7eRCJ4DukpdyQp1wizZkxevFHWRo5T5uN58yE1AdczMmi3YTJ9zjz2m",
  "key15": "NbPF4bTgju1icSY8fJsUzTsa5h2ABadK5MN4vvBDpaZMF2XuqfxVM9shueBQiAkWkaaSTnuXKrAGwPannuzHKuC",
  "key16": "khN5MXnzEx9uWCRpMvj7ezCEdbPkSMEUwbznqtdMMvQ1fbq2dLFk5rghBBoeVkbEd3osSVXb7tBEkH1yyKkNMD3",
  "key17": "37AWtpiXRCdYMH4UVXiqYa6oyXbzqDLuT8zR2eYr435hgWNSdqwrUi6i6iro4zFTDFKsL7TZb3uLcdrmqJ7mQvKk",
  "key18": "6DPyAuJuKbNxbLCYvTL1SC7kUaZMPuSzBnyQZAg7aALadtziVemHx7EfxA8hRsrQbD7RKAJkc5qQ4otG7Nw48fg",
  "key19": "2teWhKGcWrAKiajBpDXtCuNRm3stkvahov5xhLXFzDq7zvZ3cHraxvtUjvXBNK4J7yHKZ6xJoS4Rxf6wLEgeEQVG",
  "key20": "v18tnk4Kj1kRCq1jEMM5HnjWmTDkaA4RqKjCrkv4yQKXzmWS4ENRu28LYEoyaSeSceiQ7UStHfj4mkQ2QuKchzU",
  "key21": "4KMiMGP776rzNGG5mKrtVvGop3b1cnq6xsNtY8Y1upkv5ZyBRfsYpXKSPANRi6wJAbtLrffCHmSHD68pNV8HoVKh",
  "key22": "3sk8PLnDNLJgQEUuv2zDogzo88Qo1vvKZUMY5abNVNE9UJeqbAoLMtSng4qZAZ2s9aQNeQd2NWip5Xt682rw1vuk",
  "key23": "3nvCduct6fGmuZph1kyv237mW1cu9URURPKAJVMQAZsxGs6QzmVvMXVP57JGEJuN6tfpGzqQfmYHR7JiC1XnvcUD",
  "key24": "4V8yF9nyncLz3GSJ5Gq9DdXsQT3nZ7M9AySgi7jbV7YkQ7tVfy8kXguJanfcwwMF9HP2GC7BPZzp9Yg2nx4TfK76",
  "key25": "4Hrir8nFRnWy5DdYMdQt9jHvhp9A8DLj4kiS1SakkG7x8eEBMQ9wt1suWz3uBv5EeRrQWAbv7db2TdA6WdcMQGpr",
  "key26": "2372tnxJUmqhkbaRzeB7PJZsrdrstwE75EGbducXW4L2tPpk47qjGBZRCS7DLVANFLC81CrmR46moiDxoJjfVbdf",
  "key27": "476pvW1f9Hmmu5ghLntbxcwTmQbn5DBY6SAVcXp1SpMNN279SuBUcUquaUBUqe7uFTtBaXTNcqswsKwGG34TmFiF",
  "key28": "5VwMQdyMHPoT9EeGKjvyqpYaVgCBANDt6A3MKUm66RtyvFjTDrmZQ7ugneftWo6JdgjWLPFMz8DAJ58fBFwG7SkE",
  "key29": "4Eg8CfP9wrw1RTRLwuzGjZWQ7gHUUavQQDQENvsNXTydg82EyjMuW2oXsR9oJxBdoR124xpte5X1vUDiviNT1ty6",
  "key30": "3wYU65j4LgamHhkwbD2uov5Z7pC2W1v8uoyFN6TY6GVd3RVcoNMufU8rLbtucRJ2Lei3nTVEkxdvR8sqdFDGfvWc",
  "key31": "4mytpj6cZF1fDa8t41LLhEcrbyqzex4BHuZ7Fn2E4b9xuVpr7gHnX9p1gJC1Swwm9WGfn5oiEVYnABBeYvfNevwd"
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
