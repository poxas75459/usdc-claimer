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
    "2gSBtTPbrHYipWEnKrgpMjwc9YwNbmdVrV1MzQUJoBRXofLhecq2LLErHZV2T3Sd4EHLbRpAn2v1pDGNoa8kzERD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jd8eDdWLt2nkvTSP2hRKYZqqDhWxL6PiEaDdKuvMVRSnEmziUQpxR6J2cbBec2KuXsTq61qTMYYfwHoJSTqbFvG",
  "key1": "4dxMwgLyX3HVMxPD9JN5KhpAowufQmbAHmHX7re2cRy1AM3v2BCeXfC162voXdMzLNu1b66YfhtMDNESeb1CdZwe",
  "key2": "3y5X9WhnwMtEW4a7azjiJZCTkkL7KXkC5ptwS76Zhze9BRBjsFFYPU2T2H535hZZbDxChr6M3aKbsXcbnufWwjY1",
  "key3": "2HKoUKkaoEKdN2dDxszPc6QYMuZ3F2pLCGo8GBj5GM6Mh2jJLGbAswn8kmAcoZNWbjxCav5rxQcK27zYCqPHoDrx",
  "key4": "4DddW422dUFQvhBPyYMsPBU38tZWSgYr9SPGkcYMijWzdcpXFSsDbyuA3YHMoExxmnJZ4PoxtEMeDYmwzdV8Se6S",
  "key5": "453eZE4YiRLswLpk1LfNAg9ncis6kmLay6GGqyDfDfZrAHgmX6sjpF81n1D5R4GUM8CbtQhuC5XHmsoVBKi85uhj",
  "key6": "5HHzR5HAvQwb1s6x1T4dC8ZekNcf4ewym5rPtWxfjUKLhAa721KV2LtYAFTSxmWrJ8GFCYx8FhoAB2T3p3hYjWwj",
  "key7": "oTFjN3ucTYb1kPYA1aHT5kGL9KpsZc2ha2TSdVGHzMxSHGxm3vAiiiJVUTNHeJhuL3zziuT5L3wZ3KSjbB3xfgV",
  "key8": "2XzkavN4poBDt7k5VHB2Kw8HUuTYGoXiAvF6EXt7xymVKVjG5GzptYdozY6bFeqwHwkEevG5MWAdgbByR89yPrHo",
  "key9": "5gJJMDkB5bpT1U3aMtGk6J8zcerWWo5ezigQ1o5B2dHEu4UBKDafu79ihTMXE6XFREr5yrMuGxdi3C6hcRvLB5Ma",
  "key10": "4agTyTN2e5D3LLjQ5VzaFFUxZ5aUqtGy2sACzXDmDFrjaU6ZMGHUE58A6pQWoc4NSpnMVLHhKB3SshVYJWmnBr5u",
  "key11": "FDWiMahh51AWEwE362t9tuyJCHHodzDCUmu3ZZtVYTNMr48D8CQVmC3sQnfpEhMiNGVB17jXJoZqmLWmgMUpg7G",
  "key12": "4KZQ3rZVacb6inL2FBbMCjGi2734wXFZTkhp6V6T1FRmDLsZKhRvqgy2Ej6NfYqQjVwnRRhFuFKh2nHBYC1fZv9Z",
  "key13": "1rt1Az8RoBEhJN4bLYeud9poKk9MbAxXM4WW9a2p3Wgd4pFi7KXBpJpn3qNAJLwfRTYANHUsPbWF5nwNCZQ8yYX",
  "key14": "4aZoDnrz6WR8Tz9pAX6ThdS55vVtsUKwZUU8SzEA77K8LqsBiL3WrTo2aieRF67b9AfdAQLtD1QbK6J3J8yTq2AG",
  "key15": "FrwMzEYSE8crB1wjUTnNc7UpwUTYNSS3ASL1qce1Ptnf5FfE5sVzv4CwbPkCzFurVZSLteoeUekLj4EW5bK7ar7",
  "key16": "2S9brEAHN9QRrdDeEpuDeKje4j6AQJYnuC1cMHrbjHtgNCdyNtiJmkAHj25pbj2z22EYwDvVL4FB6hvmuwYSCuv3",
  "key17": "4vLEvJREBuc5wygk19rd2kuiQ8jYKS45bdqTtrNdH8oJiKrqaD3DmQfZpv5WJTg6jHxtgNrz955n2JUsx3gwFFx7",
  "key18": "5ChkyeCQYPSD6DPN1d6TMsnWCiajYmPVhwVHCh73QuqBPoBuEUxcQmBTujgLhTDjUmE3MVAfr4LJBfdVtXo4kzxB",
  "key19": "3aWAXydXkcv5s5XBQz3Txgxf7pJ2j3AseQQtXkGmHJjAU5FXq3umeAgS9ouVsnEK8zJg5p1jyztGNuxi5yTsu3nG",
  "key20": "4wmwyJzWRaxDpPsBA5oF1sQkGi8q3cS8ZsA1jBbJBUUPkYG4cD3SyUbY9ZvqCcLbjnuPdKH7FNVCgcxXLr6iq3Nt",
  "key21": "3Epqmcaze4WvvexzpocxwtgXxpfdVW77RiZSCNC3AGEqsmHyWDFBUmNDW3ub4Qsoeh1g2Zx9L1o7nsQM5qDyre8M",
  "key22": "4Q9A25nfhL7RkR6cp9eWEWSWYYBDpo979bEqcUSSTVWzZAUVNY9f6qwcTM48vyeaEB1FenEcfBYqg4tmYfcyuZey",
  "key23": "4j2Axwk4qyBjpoKDKZG5n25mXW1b2LTkmvcy2CuQtEjHGvDoMtQ2u86f3DYevLfQ9djY63R3cEeaxVVjc1y8gLCf",
  "key24": "34AbkcFoEpFiF7Q9wQH9xfFEfcbaWU2cCEfdgfThUaJk6pZo7x5bu8SAdhu3Xo5qbJs7Gjhbm6ET7yTZ5JtxjEY5",
  "key25": "5nRe9qM8PRBUuHVCoJfh2mUK1BR9MCZLwdsjmE3Jo2kCyuvy9m2tVHv3JDdTUHd7YB2sXKNAGwAgU47fPsCXTDum",
  "key26": "2Fn9NR4vxbiX8QZiRr5wQEZijdAJmmS7WSpJo9ftsfjsETjA7aAZyg1L3i5df7SFg3G3wdUxykdzCiegE5ChdFrD",
  "key27": "uXoiopB7NgnKZttXbgqYroMen1MbgMesHMRczWNPRcjx4ns8rQm6pVGNhvnN2V4oDgPk2u6efpQCABMkBKiPcGM",
  "key28": "A5icemVmzUrHbi83sGzfjz1yw4yc8u11jFxtjrixCBaBpvSzE5ot8u1fLXbqYgaCnuenPPErphSTNAAmQbCTXjk",
  "key29": "5c4RD5chwJeCqnAngnDCkhjy89Tnr9fGbDWfzf3qdQ1TFhU93hBSLCGBTUJg1drwNifxSg99hCk98yggUYCDsrHy",
  "key30": "3xKPu3aALvxZntu7ZdDs57UwqXL14oQoPhoGV7L55xDmXadJR76n84TNDF5BjVWjFne9CtH21YjVaQh9hC6QCBGQ",
  "key31": "2ninFzgV3wvheeAcKJ6xeVm4v5fFKLMZcBwh52yn4ZDJjyHzvEWfZ1DPrT5Ba5WZjCLQ3V65AuXfGVX2EacJm4fe",
  "key32": "2PewxCFdQSLrv7GKioS4aZ2aQAmwXmpsTxjiR5JTz22bohKtdMp8QrNrFvmPEi8dBeay6zmqaLQGmdUbHNBEZRxo",
  "key33": "3mvPjQ37NUnMsyTcSXiSkqD45L6sPWvswM3k6QbVzRASVSBfAvUcbAecEGwfCe8UHYSSEmPnCsgrqg6XKfrK35NW"
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
