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
    "SgbskBJsJ8iaiiYeKi537TwjY1tmSEphex3rTn8jru7YTQuibLyuuHmiu4Mu9mJ871QcYdHyeGbsPTdh7nXUbH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8DW1GXqiZGEwvNYkoEA39LtQZwEkc5gSzJteacEZB8qrxrsdtzRAa1pK6Rx2GWjQH8S8RkCcKUUua5YPmGU2xeH",
  "key1": "5RyqN9CmzEmSdfVhPuVFo5nbtiKiSbMQMmnoeW83VK8nf1reqpo3gwDAz5v1upaQ3b8VHVQwEjLPDFSBmZCA1YWw",
  "key2": "P7Vmf1o1ts738rtALNVCNYt3QmY57TzVyCRjAx1LfQPB6cyzeWguY31gB31mb1Lz2Jc5WPz9prCK1kHHwuCbER3",
  "key3": "mA7zx9nfFpp6c7AERBuBnUhvGDTioNYP2XUnRZmK8T4h4YTXTTf3sEL8Y1WyG9y1aNxFyYfdVn7LfeHLgRXK3yw",
  "key4": "2FBh6FD5eLqH64p4KzHvptaNqpzGqEJG4J72MMh7GVjohbS17NZ2YoyyhUXtpvqq9jNguNGzi3STwNQq3Fkz1ips",
  "key5": "3VtREKviw6VKUx4dSGc6SJDtipJj8s7WemHDNgusGnGoyduXGx7Pk2SehDxkKgc8b1GcfPHEPQ2YDHAZeQe8gtZ6",
  "key6": "XDtuojrya5JSLFXMCP6QiaoSJ15eK91UPTnwiq9GimTa94uJ6vw2nZvzG52EWFvfLgdZS3MijrvVtBJggrCBsvK",
  "key7": "ymrXLyHN4qzurHbKpJog5wjyHvxVoEFBbyhZPQxdEbiUJEshmy4Ck8zyY8svQ8pG9TyX1BWaSWuoBzC5VSgrY8v",
  "key8": "4auyWN4K3L2cisbxfAy7gLa5jTSe6UztphK5NK4CQGf7a2o42kSYTBEX78HZ1cXjsEjisxBd2KGouoJpL9qhDQ7j",
  "key9": "7xyegjPCkYvoqNY3z5xb2gE9uYK9aKjHXBULrRPfDt5gKeMFbxq89KyzJX1qac1dmegMp75opiHFVh6kGnYdNCj",
  "key10": "4SKETKrd8nVmHASMjju4zE3Qkdafr73RcgZqFAeQGDYJPFyndMTEEjgT8PK23pmv3tJEyE1dPGfrSSEyx8VKs7sb",
  "key11": "28G7NTspSTR7kcZgQtrRTPu5AFGbk5vpuEsFWBC3UAAErsKu99SXp6Pms45FTTgs1hCmRB2YUwdJqfCmqZLpjmmC",
  "key12": "67SXtXeevcGszzY1nU5Et7K997KavmwPgv6eZLwQBKKAVu12LgQE3MZK1QtkDzh9sMVhJiYwZjerFgt9BhNV6CRh",
  "key13": "2Zw9YZx1q1gUsivdsPaDFjEqGMUNd7475H8MvvoHxTHRAERJ8qoi9G2HRqGumrKS9dRBwBRQoeou5SxGW4XCC7f3",
  "key14": "3AVrAVLezCNAwRnCUZnWP3A6ke6WQx4euBQyEnsArSMS8WfDKjaGYuhdFC6GH3o6FWEb7pnPqBypSRaeMoyDwypV",
  "key15": "2MtcbyshU56TKJkoS6qnTUchva1vuxNEgQ1HuaMvW8AiRURVKg5mVb1ckD1x1ExjwHzByNAaMfw1sGMaLU1671S2",
  "key16": "4Q5PzgrzMjuzXAamga5cvesKUd5a5EM1rZkXJzrBbGoHJSHuY8EK1VnobZwRg2YbFMcf5NwnkK86nPTJx9QoZ19P",
  "key17": "f7PLm8JcTUzCLvUhKdPfkq4mmvrba6KXQ2x5XQbZyKhgVoKbofSBBdSPdhudNWh4d4JswTRjf9Xdv1n3Zm2kv6m",
  "key18": "5tRdXXk89SJDHYxCSsJ9ojLMrfAHgqPTFHs5F2s55m94ULndjsHEPrfc8hpcbGMjDacLFwQqEXowsyAw4no8uKsa",
  "key19": "4HDp4mAvgzPfzi4Esu55NtChADr9iesz9KWGLPyi3rTik5oB17rvmjeZtoWUV1JNGKnmyDy7MquzkgJe5WD9vuZ5",
  "key20": "471bWtkHkScpoEgf9WEmH2XaEFkYvFX1zdgTsPDG8vgkKN6bFMFG4gu4DFxiekmmAcqGyhemW4DPwETSyi7C4xRe",
  "key21": "3U5c2UeNeBXpw9C1M4S5tqyy3hicXi2qjtcnVBoTeycBy5mPzXS9J7zDFxXFJ1U7rcdGKYUf2GVQvYHvQAKsYeLL",
  "key22": "3RYEFkwvGScYFHZ64uq45Di8c1NHH9aoj955Ferznoi1CaQuAcvA2opWzYDMLgddVC8DTh5fPhXDZ5Rup4pp1j6B",
  "key23": "4QpwSLDZijACkBhf2MYKkPSvEokWNQB21h35VqcFVNhki9CKUutiB6MXZe8nbW4f3zjxT6b4HR6x6iGd5nqdeGZp",
  "key24": "2JiAQRM7g7cvdY9WAh6YzpZYt1t2XcHvUuA5YwTF7Vne3bUuKkY1jtYKwnb1bGWXLBfANaXJ85Zqm94qmxZ9itaY",
  "key25": "4aMtKeKxAM6NEwJf1cqZcP44QjCGUdfj3hr3q2q6Gyf8ngwThyTBuFgEUHnwX3y8gXZ8KauCqPNNGK4dTzjyMRWu",
  "key26": "31gZBSK93aivhtSvvTQ1NKADQv159oZGHR3JHC9hNtNPCVy2S5SEhcnUfB2Hnbr257wh1YaA7UXTDwmLDTQ3rq9",
  "key27": "46XauAqVVuYwMahaetmZGkpQEJdEj98AFUcag8YFkaoZScHqoPYgpQNT9vYcUTpodYVFXme8pqFSMUChmsfaw4RX",
  "key28": "36uCoNQFTwrh5MjjjGy4XebnaWVirscgov1ZpKpSpQ1e9VtC8G2tZXwYdzPNLyeD1bdvVi5TGHunYCE6gTiuMsHo",
  "key29": "2oXCJufc7nKySm7dHPky7t8yNKdDjvUU8s3UBhQ4CufiPdcsPgZwRNaW2smASvPgZiQYPPT8KmbKd36jArb93FwC",
  "key30": "29ueJcde1TChTL4jwxd44pKowjUL9etPtsDNXkF3FCqw6HUGQH7ZJ6BDQ46tMi8v4rGQaupYeGnpQ1AaPt9UiBMt"
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
