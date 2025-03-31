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
    "3WDv2N1dcSY8jsey9SnQQfq88dpas2fmvPswHkrrAJn1jBxbvyWZuqy8qo8QJiKYvAaYdTMYR8L8f5WfTEf6cCvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HFxK1j9HirjLfZXkt7PG2SP3BqJYkzGCeUaQ2xpkCTz7kSR1rNiDFLtjtRQYSk5ZBeYwgYeQMZwxdx99XMZgfT3",
  "key1": "27XDkWSMmeCx5QgmfKow1T9YQaY4PuetE3oCwaKEMuHWji7CzYyHBZYzVwvaphcKjvRjeaNQwSqxYeAY4jPt7Uwi",
  "key2": "3YFSFwfurVecJEjwyvSgEFhRUB3AKszW9BEVxHha4R3wunftVPiRq6wAvKDv7Az4nvYUPaadh95jc12qpaJAK1JY",
  "key3": "3Et2bcZV8B4nBpvxjnVxFbNaZ549Vhj6JpLz9BKXWs6xH16oyn8DLyxz6anqQVFR3dmSP3BFKSCtYULqeihaitwP",
  "key4": "5fFStgB59mkVdqyeML5a3AiQQus4QALuevQ9pgUgvDrk8yNmqDNR4mGJHYGDYHVrGa9ynJR2K6V4j7gR8Pz95Cvh",
  "key5": "42957wVn7PVVr4eXy8pqpArAHMbqUFK6pLFnp4ii6VTpfqbMXm4DQLcezUiJRadgo1yByQdUqesQf8Rrd38z2FWq",
  "key6": "5EUYwXPwS6L31Kd736PozjZsAu8N1JVr2zZwpWuRkzHZ4mSioBJeYNUCvni5F6NAC6XzeV43BNiugNBX77cyYRKE",
  "key7": "2aCfcNM5dnNYe9RpC67ktjP14EytJT6vR6eE6dwVy2wgPsGcxSDmUxNieHZqZQBmNo4vWB2BRBvV2taiHzF7mkTf",
  "key8": "66a1GnkuqKpxTnLRgoSeGxF3HPuzicVGYzWNtpCGjpM8butk68n1JKCZerQHk61uedoiMnVxfZCcscGbVeyDumJA",
  "key9": "5V2jdmLP5QhaEmg6U2VfSpnYve8W4rZ2LYhRYUDukmPBtmfP4LFZ6722RxHXz73sNZWWe86vaUFoBp9oh4FUKi7U",
  "key10": "4CLsVZvBnkNvtgcmFEEeSCJsKAHDDKd7Y94M1QY26WRMjJ6pc53wY1Tw4wD6fUigkeWTQ2Vz5xC5GDb6JLMK8RB7",
  "key11": "3oqvcxtMjYmzyTsuP1yZpDHuqweVvFFuRrSH4xuqtvTY7fm5SRLooxe9B8a8FtWiMFGDypxP5wLhDECrHgQ7NvUY",
  "key12": "2Th5g6rW2KDCctXQNivj85yjeieEZvseMehoZvaj2xMHk7sTYHHq2BQzjea9JYGdtQxx2ND52smWjJWBeDzQzXQy",
  "key13": "4W5HpbA3t7ATcoPx2pgGeNnNQAVecJBCCHEUfUZmAoTt3BWRpBgoBSm8ssvBTvthZ3wBenTM5rZoE5sk5wNYs84q",
  "key14": "472pdRB6N5fM6bgZjHsmMrvmZpPHDjHb6cpXGJ5fSex9VtR7aV1E5fC9GJQDqxBCkY482evrcqDKutjC3kHEi2y9",
  "key15": "5LC1sZjb2gnCzoZ7wK8tjV9QJpP3vv7cFkaXsknSdgHytkrVSi1ws3AgK5sj14X1QmFASexRWugjRSxZuzopJwyq",
  "key16": "2WmHrao92adzuRBHXMchAsetrcpmE9CkpUiSFcdCQRYx3KVbceQSzncHNdEoc9xftxwX1UAKvzuArgTEarHfo171",
  "key17": "5dY2rEYsN9UzqKPTG98yLuxZ35jcy2VLKnSDqu8H9tM49UfuQEeJheqELqwwErRx7KhpkvsXqkxfgwtBtPm1wXA7",
  "key18": "3AhUindySz2Kh3EW21spyk1CiF1BZ9ev58n3FX1RTUxzjSFf8Fuse9UzVw8WDeSzrHZWzcC1VaTHD2mDMiAirCfe",
  "key19": "3DfCoc8vL1roKU17uMk11t8MsoUMBYLMBwinSwXgJ9KJx3puAjykqxwiMtFDxnUhgcMHDp48o7T8P9jSQgcMMhik",
  "key20": "64gTbukivH8nDgUze9P2SiKkop9GYXkZsEbMVrcwAyNwBhDXkBpYKpAVzFn2PRDvXWX2Z8ZbuAQ3GNaCP6VNocSc",
  "key21": "4eLd2DVaC1G4AHgQemMPRaLk61NUAGXpME8RPWSgkSpXBP1bAPbXDgW2yxZAfRwWZc4o2kFxvuyBSofJhB3GML2K",
  "key22": "2eEUg1Gcd1UoxN5yYL246JxeDPGds8z1G2ds3VGVFFnDuFK2JPMDQfNDT5TasojZSkkAgb9rwdLXBPDHD3NWWUYw",
  "key23": "3a6SiUKsMithHvFGMhURCFVhZ63vNagy5aEy47LsuecADSwAgzAyoxkHXe7KMrYkM6LvYoK63YHZtEEgwRgYxqGS",
  "key24": "f1ww2EKLzorbAxSofM87V28rYURLyLiANNCEWUJnHRRnd4aGPsSii5ix8A8vDXFcLUGHRsnmhsXgytMQ3TiwYkz",
  "key25": "ktiUXShUanuNgo1oyKDFhZbyieqTDa4zrCq4N4VaCNLdxVTXgXNWtycPxssAhEG9wJsy3W1mZJzYGUUQJCPwGV4",
  "key26": "5qEPkoK5735ErVjcoaCwaNXrJkQMBFovBzYu1YB3tKG7xWkTFDi1ARcnzyFMbQrm9tsqLPNvEecM5YAF9xY41aAH",
  "key27": "3zwL5hHiaVxHBKrnicSDdWQFDVBBDWZ5wphh1bYTSxWEGhwHgRWRQ7DiCh77fk9mq8whpCqZrDNQaGCrSsoi2UPr",
  "key28": "4NUqjGVmX7pGTHQr2KCQhMngqAvBVWQxLEQPfxeeaz47xtHQ5eXeTtdh8jq1PSZkGzvwfjtV4BXsH84HeNeVoM1A"
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
