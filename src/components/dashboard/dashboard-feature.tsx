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
    "2RKA9J5ECP6J6skfu1hBipwKqSAXUy5neCrzgMRqKcdkcreMHEBsHxSCMWks13MtsHzdDdhucQnWxeQJj9CdrN8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SsAjiYjJ97BstA62yWgqgEQ3q12HPhavvZfnDHgjEebceGrsmgYscHc3uWbyqV839847fuFb7jQE9quqUB4dwQ8",
  "key1": "5HZodrPWZtmXvzHPTKoXdMCK3nGc48F4uPgSKovX7UvqpVE3rQS5EfYVYrx71kxmMupUSLV5wismpyE57JMwmmuT",
  "key2": "2WVcVBmA9iPcANjeD272mzSYiJNVEFW8ejhdUy22C81ZE631quKoRLexHdNxLupq1PThuuhg2nUBgCGvSHR1PpMs",
  "key3": "fCPUJy9PPkwqXL4VjJcqPrixESNbHJa9xqaRt7Y7ehxzAjgYKM3fkygBqgVhfuXZsExLeWXsWDEcfUKLqZ7brQX",
  "key4": "3XWuxUfReoUXzyJd8pJBc9Xwxa4vAD3nxkuH8ceSeMZKvJJHNF9sK5F8mQDw87NeX6dWHriqsYhY2i8CZNE7JAo2",
  "key5": "rUqrmqnYqdHN2sxWC8cxTRgt2cM6j4yGmFP6btQA2KXwTd37LudWLoqdpTEtW3aixaAygdWpmqsoH2VtYbeBv3B",
  "key6": "dt1avGW7AQpmKTNU1fXVmZrJYUcnsebwfyfZ1LUMeyzThS4UEw7hsc2pzzCDeCAvebVwDkvEkAPWSvNxQkw4bKB",
  "key7": "4KEcpZuRaucdSDjmwwbznHQKZVDbfYoXdkL6yzAMECc7BDS3rV7tRxGn739F9h3Qw7Lf5rQMgEczKQNMuCm6o9Wi",
  "key8": "5V6ynHedq8AhgkhGEfu9ww8XSVHAuHtVeHPtzuKCBCVC7tXiGbPkCSJffYRBLKKb8zw8gwbLkZnHfcQvcsxPAoLz",
  "key9": "2ifhq8mp85YCToo9JZeLtXtRRPAARZG5M9mtc6LkNGYbhWk3vNSfJoUVvxJtSiEogFrsHdLYheMsSo2jypu8whJJ",
  "key10": "5RM7HQpHXh9uS7wJANV7VPaEr4vqsbGHSV9GVUkmbqFMQB7XAH2aZHutxawTJkpgWCoeV9WZiTMGCaevD7s9odr3",
  "key11": "2QRVMSME9DeMzMNiz9MEgGAurZVKnbNUbLTwcyzanTwVNKcgWCJgHJa4ynrxgdehEEA2WD2YvE7AUqZMUifGL8T3",
  "key12": "4a8tXjrdAAnDWFhQ4tJ5dQy51u8dHfR2jzxRMPrCyb4AzvD2knaNLpbWz9cByDvbjknQBuXxnYTEaB4KoEzADsQj",
  "key13": "5NuoojSBhiwWvGfBxcTsbdCTq1TttKPCyXqmLdM5rnzUtevd8qKYYDrEYL6XRtpnzG2ZD2j1aE6p5JsAHuAYFn3p",
  "key14": "4RjCzgAcYqmFt3VTStadJpM7AkjubBdRsSCSdZzQJdhdFszkYsQEGxH3mD5aZNHKFdnUo75Jz2Bf538tWnxXSJdC",
  "key15": "5HcTkJ7m1xhQeFirFA1yN2CxWf8NYjWQmDtadTXzA2gprpWhXqTJifrrCwbJEUQgwqrHM6QEai9NL5krE9kVn3Cp",
  "key16": "3patfXtwnRuESn6TZK66bkMLWy8S2M7MrShxaCNd4WmRNsNwQfJfbhhkMvcZdGSJbYnT4NWeqUJin5Lw8k3E2UHJ",
  "key17": "4NY4okAQpAubjEmeBnKJWModKm7NUn3wwkxtSbDDtX5VVwJngqb92wGvnZNP8gEArsHLjM2yYjgdo62iurfPB7hc",
  "key18": "1qkZNNwfdh46AqDaGdfHFf31W6rnksihUk44weskR7NLkDko9ewRu4AJcXuT6zMdvaSQHriEPfih2NP2MkcLVWf",
  "key19": "typKEjfoXvqa6bFUzSCC4ZEANk77TouG3CpQXePUuUDcAGy8cw1xpNrq6ak5zcqQb6j3orYFArCpuH2e2qHo9eN",
  "key20": "2YbySRi42cKcfwfhoYgojn7EUtX1sCgY7j8V8uv1LQyWaGRJbKsDMBnRk2pn88TThdbz6e1KJ1eiDG9ieMrmNS3E",
  "key21": "FCNLbPLdLhiRVVR63csA4rLCyxpN9cXPhB3576z3saSFCH8kEcrhygxMDCRn1URxKPvQmbcsRrkvYRSBMByeADG",
  "key22": "4vUVn8Uo7DsqsUdJTq2S47k1zPzvdXYW3dRGR51BTK1eUEQvkXgprmcbPvJYYScXPK1BRptbB2suVuSL9eLDWpf4",
  "key23": "VeHJrhrrns8Da1AuGihViwDoAsSKbaBkVsJ5T7uEMDjnaVmtzmWVZLFSUZmGpesd7GZLN8tv2fpPhimjoW376Pf",
  "key24": "4DSQ3HJmPxrqqf3qjcBP1dYCTmTsw7YymRcAHjkwDZe2SQGpaFr3KF8LRAv7T7DZSm7t3QCUrkhRCQeKMxHteL8i",
  "key25": "3UP7acacuxE9iJxwZmHeGhmrpHk3HthmXx5T3jrrR6k2nkgeM9LZb1jRpk5b33NpncGuryUbHpqCauUN6dUA4k3m",
  "key26": "5qMyem5gYuKaHoRtmJKcgp8bw3unnzH7MrsKZigYg1mJw72iL7Xn6WB7nzSTEJXAHETgnKWZ3cYz62kmxKdg5xkS",
  "key27": "2iq5WrtnGErzj1DiyqYcWaRAfjczCQXA4Mwzdpia2YSpzbwx4B2YKKDgeZqYxPbmCWfyrLjf1bRg2iTrrQjpXx3V",
  "key28": "2EPgRFHZbdEXoP9hi9VnZ3yBQ84Yjs9D4VF9FdwLrGoxLoTfqarE8xHXh4oHsJbsSB5w7QddBwv5uC4ZBjHu4MMh",
  "key29": "5nt8rA48d3qVnjLwnqy2gDwtPG81wWYpobV2G2fJdygay88J5KFqLxZZseg4zK9rMnWhbS61VTvvTAbsAfd8cM4J",
  "key30": "4dHR7VXcJMLwMB58rTSkQWThJUPFtmySaapithctAg2MY8MiQ7hBqCgZTzCBxnxR2iAKN2LQYBjTdmM8sp8SZoFV",
  "key31": "4DzN2CUs2PPGQRnpBKzTy2jcTsGsycXLXG9Fr5rgzCyiHBAVtw6v5pmAiKSvMua9ur1pz6YiVYSK6rKKLJ5V61bg",
  "key32": "3LWKv7ig4zJ5HYG9ibHZwWh24eL57LeNG5z32MNjshuRYakDCc5p91SMjdL7DaiCUz7Jdj3QwCykHN74VyjP9FBw",
  "key33": "3HsofNpK6mzLqivDEygswUuNK1AnLaeAs9YUYDYN36ZLS6sAMQRsjHED4Np1oEvNx4WwHxpzXuRuqWfqBi4vR3yZ",
  "key34": "44UsdEU4mCPXhwKrBuap2eyGj7g4sRWtxYUGrLTjMfGjd9GcWw1eoJ5yviNNcedoscj3vaooXEyNDndeR145nK3D",
  "key35": "4Mdc5Q6FdtLw93P4JyDNf5st6rrMhx13PonsKPPRHxYwiNh7CAYRY8oBYEPiV5AnH43WFYjD6ssc1V5o5mnP9CGk",
  "key36": "4fW2v8ZqxA9FGGzn3yGB4qBL1StHrc6wHNR3NdMXDvZ85CbcT8fzdFoJUGGdybGZXk8UG7wyJqvy7aLmcfWHk9GA"
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
