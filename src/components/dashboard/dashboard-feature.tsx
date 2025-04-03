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
    "2Tf8JC7FPGwpSmCmAHNvRdaHJfMxjUDAM9RZycf3WghEVP3kn32zSCbeq9FQnNytREADrbQ1SZCxYwDL7R3s13GX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xuBmc3aSRwzue11VjnnK5nz7jFNrVPFLYHGmb7BKi2uTyVys8oeHk76oqLQcLYnWcYjds7gyia6TFWBaK8eXF5E",
  "key1": "4VA7VmfdK1PedfsBFJgSo7GeyzqCfc5AjRDVxcDcHsXCZLtvJFu2UH1fz9nmTNHt3hsrinDFs9qGxVyMtEhRJyWq",
  "key2": "5ZNddnzq8GRe7FNTUHVoziASAvxJ89D7zev8smkYtqRvVoZShLFw9NJQMMMffTLVqdWPZTFHSxzF1ksKaawU5CA6",
  "key3": "4wp4oV2JJiT41Kibch3LXTKhmZLXSo7aEs1fsWC14e3XKsqBzSmTsReG6mhgnLu6VU4UomYEF8amVf4yn1jKwj9d",
  "key4": "3oEe1UtcbQUDDC4zcwpDRT4BCaUYRU5Tc9jXvepNKXKPqJsV7UCMk6wCLKjjooyo9mcGpg43nA3MCG1ZGErMrjMa",
  "key5": "yo1gEfkpk6YoUj7q97WqLAmAWkL1v18YyrfZyNgoqnjxbiTWtny1JvjDRXpyx25U5FmWnJ6DArvCjWPuFxwkJoS",
  "key6": "4ncW5897Y4qGZUQAWnVK5zRapwqf9Z4sK7qvHUFVsiNjNvWvoCP3pfWYcdjPy5VnetKGAF75woSShB9SgLAKpJkT",
  "key7": "3fD4PaVWMN4nF8gx2QymwJKgPxaiRiCC3asbkNsKf1rpHFfMeZM7hnrGG9wcyjG8n34LFC62Nqo3KGSob2xfLxpu",
  "key8": "5Wz6MvCREviY7EEj5xrDGUG8FqwHBFBHrSFRS4PFenvDc6nSXWHoMmPfHRyueRhQVRhkEiPA621WAi6gNyXhAubC",
  "key9": "4BB8RPwuapxLxNCna4KdNoujVY8ECVvNSMAKfXFV8XcQspbC9P2joi1nnnsYxWrGoffYPkpQ56G1ivdFiMYWaGy4",
  "key10": "5gUsiD3FUXgYD8h5wBesNmDX5qk5TgcgMxUsYwAdFXUmh7XWycRdg8KW5kWDwmVV6stWuYbugA3uUqo5VdueyKVQ",
  "key11": "3yopC3h7BTrMG5AVMh3BLuAUzk7yvGFMUgyQbf56xezAtMe9p8eKFrE4F9XhLpmdCzi4wwqxfnaRUr2ppNDnvasc",
  "key12": "28bavEZKnThkPYHuqNfKBzKSWfewPhjsrehXbcJEf6NnhACtBh53FBme8QTaUjiyW2mT8JQPYx3gjyGHxrj8BRyL",
  "key13": "2M9bDahvPekiMdM8MzmU4dhaAA8zyqFzTVJKgNfDGyGFgnRSi8W9hRu4caVU5bRf3DeRzfWG412qkeVHz79JV4sd",
  "key14": "5KdgvcojEuHJ4NUeFP5TRuBe86NN6MsED43GFYxqNbz3r3TKTXheSy1mD6iZL4sFQjtEYUbSpLQswjxBy9YfgPzx",
  "key15": "4wLKi4FSnZ7bZ74qAqZNkVLjioNstjWswvXq56P9ABDjsjgg2PEK7DRzSuRLSMEAeHnH6TRF4je5cXK6i8vgYtwb",
  "key16": "4wm779CfgWzrdgyWhb99NCoLiJtDckpAeN1ULbQfCJ3QsQoV6idvke73oSLLn2HTk2KK1T8oNANiJGk9xiqEN8km",
  "key17": "5D3ML4tpzEMjP1h8S9tJwnzodQPZnfd9awwzvxhc8fwwbQYqq3DFmRMHwRAB7oe7WMNNNu1FgzfKGsA5omBQSNQs",
  "key18": "58dyYHEz7Ek6Hwsf5NHgJhJKQdo7WM262HS27eAmvoPVebtvT69ZsvWZF7QyGj1q2M2ReQVmDyrtF4naauEgdA1k",
  "key19": "4GMGQNCAD7cEgD169y47pPhFRpaPeYN37vpQun5kF7jMYicMSgLTVT4Lyoq66QaeBkt7kgiTW4xJzLVUEzd2tPEc",
  "key20": "3aSxY2Sbz1EYPw621Jr8z8pnzRiJ32cNwAWQpfodcqiKEXTMdgSM5yZCAnuvxX5ktczy1t1mX3KvFQbG6ccTRPBD",
  "key21": "5CAmt5uahV93hDynY25fLWjWdxMNZmg12vw9VTpfuv94iMyWVoY9jtA1tF32J7ZjCZZe3MTRFsxHRLRs3BVTFeRu",
  "key22": "27Pzb5BVzqxgEpPoJPE2AK4qfwVj91oaAbGwsV74Ncz8NTfTDcqye9QJpMFSftTAZFcrgN4m6wpyidFbXRSaJYT6",
  "key23": "hvYY6H1vadkgiKYFidPoiCMNvQ2MHC4LMkhdrL9EBN8aGBS4mmjRiPUtyh4eE6r7gGb8muuoUVrAcVDcXJnhesX",
  "key24": "4cd3GLAV7rjaHJsioaLkgvjsQLHQBaDtGZSJxWr4pum4QEQYvXLTXfWD8GDdbMcNNSsbNa8vjcnXUy3domnN7YVa",
  "key25": "4cWYsWbPoE8tan4biJKgc6TRXUQv7eLdqLCG9ncr7WhnA2yc7S4rYew1PmsTeCP3oSJczZkWZJG1Cra4y47onb2i",
  "key26": "2jVWz8L73Ckj7CaA1Nn97AeBpVpx3B59PMaHJ1c5K2kZFmp6T1y3SnUQdnqHNaggdDPqCBJNCt5Q1qXHxDsizkSS",
  "key27": "26AakghvPF9jC3nneucduoJZMiCS8RijQdqvdQcbfBuDFqCceMheEWLfQk2E6AD3MTJZPutMnA4ynJLEjs5VKEf8",
  "key28": "2P6ZX26bTH4V1mKg6P2dTZWMXU4HqgcZaX8eEHyJvN8CX8iJ2LFBS6S3RftAfLnYaB5TuAJVSiHmx3LAzr5qzXbb",
  "key29": "2zuTZk6S33Spre6d3GFZ4hgJLbVVUkH2ohZLFeuP4cBWgTWBMj71yBZqA1ttprkiAnSEpmvE2GTbZE2fbvdinrEJ",
  "key30": "3kzYVdduoFStgW8fuNwyATRZWkbnUAP2eeyYmVzXUjgms97qNQP1o59JZPgJ6Jqaap19RxxYPXUg8N8dyF8GuGgi",
  "key31": "5tmeqqAH22r3HkLviDdV2Bam2pMmCuwgnLRyUGxzzUwURGWcTWv99qiDdRctxfZv25foP7oEn3bK65wgHNuDyWvD"
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
