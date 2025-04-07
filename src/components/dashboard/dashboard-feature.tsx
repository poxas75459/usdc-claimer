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
    "7nXjp2SX5wsi4hYZnnzHk1hNbZEt5LbHg1U4yXXucujRs45H75dvP7Xaq2mKPC8be3Nsn4uZZxDLN37MKX7L5YK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WUDAqHetD2Bd2ZenV4LXihPwnrajYF8fKATkGD9GdES8BHgRw61XpfgUUTw7ofhW3fs9RxBQDVRipurMqKHBDBM",
  "key1": "3Zf3VJDnZm6wUbZkGWTcSzcQ8Y3BXmiP2GUhALapTJ2s4NFvfzMMMfPQofCYQcf16NuHBN7tSkreC6wDnbady3UM",
  "key2": "63aNB6K19a7YRRyJfKwHzNMRRz22yHB5EBqi6QdpgfK1mLEd1xjdxDweUKBidSzqUYqsrSiwuw25EMFVq21ZRitN",
  "key3": "S834tWq5oHNGpbgtpUw3xaDPNBXEwne74D3MtmbZQK94Yjv8wgoewAVHtureqRbUYfs9JgmUmSLoDxPRvSjfUX4",
  "key4": "ELQfVD5RKAjpDgw8LfvqLXfwcVfHNzCRKHZ212k7oy67CrHjtFZxSGgXxMXK6BUVwcSCEnQcnVo9iUSnXCcpKcV",
  "key5": "2Aj4dcMsmBWgNTqkwM3kRRqT4CzRe4JZN9v1iogp2eHuYZftXGMTAK9W6wFvqvZJwSvp3hKn1KdKCaheEdg8BGge",
  "key6": "2c2uTh1PCgEr8GL3JfonHGy8VgMH98GJ1WKw6nGXdH9LRvT8qJgedM8nzuFV2nibG8opk9trh3MAwH5yL7m54AnX",
  "key7": "4UBqdXkY8fMzfwCbv1qegT47S1rhP6kE7WD4SrVnsVmUJatd4K39bdDZh3r7JmCvhWz3Y5yrSXrpD7hKNBk4UgZH",
  "key8": "5Rb3JPscesp6s95XC6aPGuZ35NNPLhEpn75ZmcWFoBuLAQJeoetgUdgH4uddpKqLJLTkgQXBHof9Z2Nb88t8uo6q",
  "key9": "2zsMLJo5FeYwLaWrJ9mTrAk4tV536oVVN62KCYnKieeiZ8MrgNDqpC5GWb4F3oVYvHebiLUTdFd5htCr7ZTeMk3K",
  "key10": "jiRJL2HW68w7xWpdZEi1tiGzJYk46t4gnhdb5ExVjKSNsmgJD4MrXShsVtLmo8dXyEGmApq3JaXr24yXUDmjw6u",
  "key11": "xKJ4p1y5zP8XjAbFkwfWtdwN5GeK6pUWh8hVHWExfZuYmjLWu4zu5mUordwXhE3E7r84NVkayg9Vm15JTZcUbMM",
  "key12": "2LbxchdHNFnkg7PTDGPZq1oyiLEDKBDiUs5pogzat89efqm5H4iEwE1Su1FYGZNdUU3CRswY6u3YwhKJ7Nm69DsK",
  "key13": "3TKRLaSNCaqyopQuipCziK2HfQ1XUabjE63U13R3HiPRDzUmMUBYp2bNcFfShuLSNtghcyNNNHQLNnwX8ioYVWCS",
  "key14": "4b9ymzp511qnPXT4EXxoDi7HqyowW6zEfhRwp1ZbyD9GGrc6qPA5yf3CXf2FamTU26eKY5eMojSW3zmGG4aKbJNu",
  "key15": "2infaGTYhD5UQG67wu1qNs2F6Lu8q46GCC28AQCHNvShxAq3WQxKVQTVx2zxuCtrXDqWtsCNy5iPDC5HFoG4c8U3",
  "key16": "3iX1za2oseooVd8a1Le6kHrU5wi9MgmmX4psmPCSh1HJg7PFrYy5oCFk2MsYSE62TSDLTeUkqYkEQoTiAZmqYuh7",
  "key17": "4V2mZSyKH4ejRVzyVw4KS8xMTNofivxyD3uU6LDPXa4dYA94jiStVfgcaUKk9y92HBm6gazL3Dqbi49ZCufabdfY",
  "key18": "3uceDgYHZmT18QcGjiHNE8pSSukrGdscdBd2DTT8oW3MzWkegA75DBjEiCGtofQhWysZ4GZkkuPW5T3sAxJZyKcN",
  "key19": "3uVhMhzsxcmmjpFyH1kEn8reGT1fPomj1nmy4quWnwnoZmwsReYG89Do2i5kabWij5FvvBfPCMn3hdh8wTDPQpn",
  "key20": "s2Fdqa29u3T3PKkvznw55riP9UnvYeS2qPDtzBpzWnuZQkJgCd6hy3FJYNYUiy7nu6A6sw99Rs5FATTQrYEUreV",
  "key21": "3cfCCTwvMPYQPnSB8hyLQ5W5sA5ynBHNT1vM3rkivBRthPxRFvuW7uYdcXZRrUoDv7rpEgzNbd6ZN3EXPSpEfqHP",
  "key22": "4QoPmKQsEVtSjWLa2CU7qtgAQDQj3DqRGW6xRczB8Vd7ZtPVGxEmtEp12pbAPekpt6JehAQRjomQF2bMzAVZfqV3",
  "key23": "4fm798PjZZyJHbkyQC5gyasUue744bGxKpkCVBnPL5XTtM11FGQeWAT6WKMmBxMmT9T4855AyiPD2MDr3APQAtjU",
  "key24": "tbFmaeWuhe9zzpjE6V45ZkH7jiKuzq1Jav666whJ2TjBLGZZ3o6XeLadR4Co2r497XQpk88S8icbRuoDAUnxcwj",
  "key25": "2HBA8y3s5ygtNZfE29E6KUhTN5vtH6T9FED2fDNFZQFTWdeKE74YBwinh6KuNEvrKuvyixVwXpuZvkF9EptN1SUv",
  "key26": "WUxGeCi1Fjxi8vewqeigrn5aSADwCkoU8LjnkyRGyFBdpy6mHiLLBdEEtVA7jTCr4THkQ1ywAmKt4YTF5AngbP7",
  "key27": "4RCRuWUEwYFwRQSi6MFEPzVyyeLKTnbpRDqiy7RP9dM8E7UvgSF86YbL8rScHdPqRKpR6s6jixmHDUCAkfqYtNiX",
  "key28": "2gkEZqam6iCriPgMU3eS2QwGi7zxVmjXMGhfLBRpQqet3MP5PwHR89F89pNHDBJrVC5ZpUA84u1mhXYbivXKydcS",
  "key29": "28G1g3HVEe3AUEWwavsYdJKvaQZ7DqMKZ5aH2AbTG8R8gCZPZuTNXrgBE8mpVrcdV8S8rHpbQ7K1R5e4MUFw343A",
  "key30": "Hb42pYjSL8cM461ddGwQ3CY7DDBwY2xpSK3axXHvbsch4HV9Zjm5izftJPszY14dzqTKqz4cH6GZ34He1UucNaN",
  "key31": "5xLE8D8oc1MUXRXGFQrgCnpkc3nVGiwo1Fkaa7p5BCD4PzK5ERakd5kLsXFdi9C7i86tyKoajVgRpCQRNNe4mdp4",
  "key32": "4XhQAWuZwEuJEcbsMVFW5MEn3zxqSSKvt4sT9JFtnEHWfZk1X8TzVm1PsPQCP7ZSYATYY4Z8CbZcko8roJyfVxqi"
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
