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
    "24FFKPhMJo6TrLHJiTnPCDZFr5z9nQ2M2jwwjCiUKdjzWgKex3Qe7hQZrD4pMAQ3nAdAMm1EXp3KVkTCtKXTJ25G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Aht9uocjHNbT1pJiBSYZykN1zTe7Y4KEBpG9g5Zt7rxEGf5s1nNmS5nDMfrZ7PAgtrbRK9sRCpbpRC9RhppP4D",
  "key1": "3uCjCrYsAUq88DSF65Q9pUcd5QCZweptRwGSHubU7VgZjaesBLFZWVtiRR9PP9JMhyUpt4aZ5xxtMyVCMTvYbD99",
  "key2": "5gmRneLhjLeQ9xnrwpesy5Yb7pHxtUnqFYCkJt2FnfRykWgHewQsy23GsvSR8aHy7CFwMuFaRgihXZW3UHkC3sv1",
  "key3": "2JWKEG4u8wSoKDnFAnWJSXGtB2KxDLshLnEfNyg4JjB2NSinPabY14c7MrcEmsDDqEqfudmFY1e2sdNDyxYyRhw3",
  "key4": "uv8oGkpRawFkttvxrTUMtuNNix7vJi6bn5cp87jwb5uvXxXBZ5yeXmiBz9Ch82HcdJmBRB3vXnMTMMMYzQovuE1",
  "key5": "4yxAYhvaiCF449XNn6xUPkbj9vrfaKrUEwqednGnCQxQB6sb9HdjVNBRUW1U8CKC7CCkYBRAcwkh45ZbGBNPhDmC",
  "key6": "5rQPo3mXejA6ddceBQarLKsKbibXdAdpe1LtYttFqNLcMqkCHEJT6bSztVLMyJKWPbXgLmoTQ5qGBqEWspQYEv69",
  "key7": "4mKUHRkZZJB2Qau5Gc5aNxYLq1eEHbcGeeLQzJ7Aajsk38XBK8HwwKbF1ZF1ttbihWNNaLD6zdxrxX6kyuHdv2Fd",
  "key8": "27ZGojsdr29m1QUS281yeW3MWzhrmur8BmtoyLom75F4x2VCMFWXZXyTSR2imkP9wexoNbp4RrAUqce8GUBJ5RiL",
  "key9": "4HTSfZPbbsCyPX8ij9FdUB1xq791wyCSoHPN1PEJN6q52C5AgtiTa8B77dzixQopfDMNMo7m95E4WXCb11fWqUxv",
  "key10": "58MfEP6yFAQ49ZoTGJELQs3VYXdRBvPsaNYppgVNZq7gqoBqewQMiqSHEUFxzY3XnJNZD16Wt7fnb1bL6JnyRwcx",
  "key11": "WoAgft6Zek77915HQs7bKQrfgWstwEBxj7b7QnEyhwbfh7g5BDFCqspypoXHztA7bacYHYZVpqUhYVT8QVXLBnM",
  "key12": "2Dm8cG5JpMe3Rr6t4A83HqFDPaBxt1ep8CCFN2Kihcq5THHusTt7wq3w3sG4buRixxQHaXZvTJbjnAYN9MKxrat2",
  "key13": "53yVs7voq65jHVFtX4PsiY9JBzBrvEDKK4eoMWnLV9Km7Ux3PFN2MWoVvQ1rxXJ2SarzxwomUE6BgreVDqP3b8B8",
  "key14": "4TQ3kdRVzitVHSmvLBmCmQsU991eachDBXyYQq5ppKQkuz51dqBx3X6nFfwJm8sAuCahrbsu76qhzHbpbgFHeYti",
  "key15": "5ZQ4Ze46EPsTA8gs8exjp8n7MNEZGQ16zUtjn8shxbUssLLPRjprbnutPeQiPaJg8P3CkubotFSHbdqskbjcS7m2",
  "key16": "62bUqEB8Qq2zhVyuD8soSuVxZdCKnGTomY5SAnhQK8F8txCJzyMDqaV8fChPGMNv7uHdZJSAS4uSSyAnUZi6hK89",
  "key17": "3Kmpxjbw9Ss2TrNMi39pt2ZLEiT5tBmECJ3577CBhMMKuon73bUj4sF29Q2AP6CaERJdR4rvJiec3UhW3AS1nRz9",
  "key18": "5BEiM6Zt5prHbCMdpvJr4PWAxqGR7znE4bM56zfEidorPqkQAu7erhFNGdWQjMzGssctgXHpFnZ9TRnfBWGxDJ3Z",
  "key19": "3tkmcx7FHt9aMTUFxK2bw74CVggUtdnS4YBpGWFsS8YhdAPEs5tN2DnyFKekfUcrEbdiakhRSWte5BKkZ4U58aTB",
  "key20": "61p23NyLc8YbbTCZbNKAKykzmDCk1njusaf8A9SUvJiN6VMnfr56VMEsFrs8W6X1JscTrhorAsSvKbszUin8Ynp2",
  "key21": "2hPxck5Ad5TTZNPCMMAFZd5ZvK7W1P4epBtuPUqmY2qpuMC6sZxYYY8ENPSZKzUHmRYnkB2fCZJQaUpvKkNbg5SR",
  "key22": "2hJH4KqXhaQTE771fre8Pyt5aZgfwkUPRKcxRs36p3k5gx3S3CFLAEhuYf6HhFC8NPys1FznZFwHy8AtndbyTryc",
  "key23": "Nu8jAGajz8bYTH3pJ7eLtcRuKp1tUWXvUHcHDYrPq5SCrvtCrpDqjWVey7EAHUXvVXdGn51qgi8U3t4hCK6iErj",
  "key24": "26mbktAJ1op31CUJ6HY329JUTe4uPvv1RgoHVtz3YjAk2VUH9GciYsqT5hH7paKTdfnb1iaBKKt66AhizcoP44cZ",
  "key25": "URtdPknr6Xa3hb2XZrKPWqw5hMPB95stpWNoKBFDfkqB8Tz9rJw4JMq2mtTzxhNsArnCta2StpredF7Uqb8BYiT",
  "key26": "65FQN1v9JEyssrt2aeoFpmXF6p6SHwueXMFqaeebdFoJdSLm4R87nC1gnWiB2Ypc1r5QUS9k8MwYmLFoyN9raPYq",
  "key27": "2LoDEhiFEUzWZ4bGVhSjEbewjk5toXq9zcviPCyH8XNtr26YRsL93tL1fHTUabAGD1iXGBhv5pkpKgAdEs86nG3h",
  "key28": "yks8VyKZYZX83zCS3XxvDhDv6VLeoZZGQ6C7nwJydUAGv6FYhPVtgcp6d9ESCixuEb8owFLQGE9uZ4DMFm9yWHr",
  "key29": "2TousHgv2CpkMXZRSnLSXf6GdN5tVy8RuHVDqe9CaQrZFuq1PTkhLWADXr7vqvZqoQ88atur3u1V4Rmy7WSpfrE4",
  "key30": "78TFviin7As3ShrKxzF42n8m95cePjvtC2sJBg3biuZA1istRMAi1SzGYv5mnXCRLH5QPsrqDu3SkJC3WgyPSwW",
  "key31": "2S3SE7R5jiZGjNuGaMQFDQLFx5ex5TNCbG9yic8aKxqtUPNj9ozb3piCpHXy4TXVyeSpBLKh23gX4cpu7icE7ok1",
  "key32": "4k6ZWdtC8qEh555ZSgvw2Tvn1Z95X9R4eTFemkdt9n6kAxVbm5LaEpAEXdLFdBP3YbaCY9WjBt5cseY9ZZw3BXJF"
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
