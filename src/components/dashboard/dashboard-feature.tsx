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
    "3ASb7T2ixkmVmjYmdinQ9Zbu7UvCQc2AWoWrK6VXj3uVtPz1JexUxbkY67GPfYBCV5jMKJJC4fyfqC6KXcioJFr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CQzUuVwktGjdp4syqemvioS7wuQRFRVftZeHpHqp4qKueirDq9h9yJYr8213Tp6n1LR7MXLYwVy9Q8uDZbgXFyk",
  "key1": "3bUfRkE63B64xRM1fUPcThroNNM9GRQZZuMNowZbgqqEzWz9q9dDhYhgQZPcpHgShrgdhh3rgpkL3Ho3n6kNxAnm",
  "key2": "4tLhqWfjQxoATV3eHgWndZD4TySwjRyX17Gz8KPhAWWrU1RmKgDo7ZLYweFLLi35qu29AB2pYMBKZBVP2HMx35bw",
  "key3": "412NAm1nUduPEvSpS5iqRabfs9YMSM1dNsDkendkx4HLcbipdTsdXxeuPDZMyFUTQp7e92iWEWDg2iw7iVFj21bD",
  "key4": "4cioEd6Y8DoMcSEAihBMPXxNhMVUytQ8naqVM8tLqXpw2ahsqSe4UUmAfRHyne4nAzu7Jq7oxpXT3Pkfc5LrZRTy",
  "key5": "25ihwfsETwdk5ANGNjgBVpe4dVRfkt9nGLWak4FtC6WWqMFBTftgQYMksLs38vBtS4KJ3hTV1Ga81oEJAa4GroQe",
  "key6": "Pt27uSaL28x5F6qV98GnynVvW1vAvEVeYmzyqvNLSJhKj7gdWtEJ38haj8AKvVHjToJUghqPHcrjseWhyFVVaEK",
  "key7": "5EozjQYh8Szv6HVJsBBXcguWXPk96qWvNdq42ih8gJZKHys1UkLuD2q5QcU4UGApLDz5RXpo1iVCy6c6dkwxN817",
  "key8": "3A7FbvZTjyQk5ohdu6PpThdtsJk7nfLKa9jw7eZiCuuMxrt1bLdtqsMUhUWvbQCBuViv4N4UafjigUmfnT51Hqur",
  "key9": "22CKFHtS7g8FhaDPbz9VMVQ4XbieX2K6cErouafpvyPig4U1iAtKNnSqi2qGhfx8baCL6PrtMzGMe6V1S3Nawdh7",
  "key10": "2bsdX4HPyP8P9knVEtYVpn7mKrVrjJPr7dcNkioUJAQ85hWg1KpmGhTGQ7EP4cn12BaWd1NpGmLwGmzjxRwYmTt2",
  "key11": "3H1xdAMxWQ6wDrruWGDeiyhkQkgpUYAwYQ9UgSyPppjEWtPXFwqJcctPF4USWiU5iP379271ypeE5MB4bqAc32SG",
  "key12": "2kyXkYehNRgzb216WiGRXMJWZvKXJtpg27YS6HpXYFMi84N1xvExzBD4YotDbQo9xFCr1xFP84whpmsHqe8qNfhy",
  "key13": "31ip4cmtcfe7brissGNXQBEEVU2qyKjyagvDUYj75pQLqmmQdySxo7MsJahAtzB3nHtpn1ARGKTM27RSKL85dtUb",
  "key14": "3rNA84mYnsnZvodCmahm6bBJdWBph9kecLWRgoKr4pC7hyaG7NnHNRTpTTcw9ti52zvb6f4X2eEza5CRTYH5Av8p",
  "key15": "3fckC4E37qAVAQytKttm7EfJVwspPciPngt1g2YZAepr2VcF4HmToQDh4tS7fbEZffxieFpqj2hqgPs6UERUFNXH",
  "key16": "2RPnUHmV45YR5G4JvjwVwZipNc2ZW3sUmBbGb6ZjHuV2JbeqjjfeckGJFbo5bVXje3MqgW12qBr8HaLJ8xySUpws",
  "key17": "3zRRMqNmRXMdT8yetmVVGnsfwT6c3QU4CrnzeyAui1SwpoEoGHm4RrfAYyhVX7ZN5C36rbxrTpqcdeVsy8pWHAP",
  "key18": "2wpfbTvXaNE5pJLF73PGiWyrUV8X1d2ytkSiw3deovPJgUFpVw4iun9CdnjoZi5NERo3BqNPWs6Xxt55DTLCnaEJ",
  "key19": "36c26vch83fn46tuNeHPAhijdMLgpHdQsZFHLq5Vm2unoT5gh8xBYfzfwSmmmo528aqgrPhX6QEvGYe9A6ncCpKo",
  "key20": "zqVNf443EkuP6mL91eRhETXtdMoDcCEw9tLeKTTUeboEr4XUuznwK7k1PkzZTziK8ZSprEyTS3K55nXLNTrkR8h",
  "key21": "4cTMUMH5UEFqYpKFJhgp2kTxfQGH4uw1fNT7RDT7SVTDvHfvk9ERxqXyjvstUBz5KCu7PAtjQ9GkMvX39c44xsUe",
  "key22": "53HPND9B6uD4nCRiToQxqfYPJjrs8MenNbRQS4X2m9NEpLHkkYYhz58bGwK1PHGWVCcqRy9wV2Wu1wbV7kahGUH9",
  "key23": "5AoWYu3i7j8JdvMR2cov64JLBwMfzykMqZzWE3By8kZgn3T9hFcbYou5EUAbFkXrXSEwDHGnQZgNQ3dDJcz83bR9",
  "key24": "22Y4h1aZxFscTF3TYmwzFiWQFx2AVH7m4KEpDxcVmzLwriRfWESHyHZeNJSvQmrFbnyczj3qtPF9KPKHwRLQ1kkq",
  "key25": "4FYbFm5ZoPefRBjK4PKdMR3BDvxZjWvKoapXnr5mUGX1Ug7mrVvVxEuddejJ9qpHdSi8zTTYuPggrL4iLTntJ7fm",
  "key26": "TwR2QDzHdAFS6jeSYdLCQghd5G6aTcZ3VLojut3ksqovBs4Km3Fix4GpnK69LPh5sEgqZ3MrhWGFZnjxnhgDFwP",
  "key27": "4MzGnjH4yPNGiw4zxyhwfpanMKHVpaMjobA4Nykd1Ar5qGPtNUqg482se7F58UJe7nBBq58YTK49wfedPAjZXhc1",
  "key28": "2QSaJhdFjzDF9NBFs4cJcmpLRq5PHUA1gMpvWvdd1kEc75yKsgEVidKtF695J9gPDnuK2aWkrVv8YQFniL7rSPbe",
  "key29": "4mRipepa8wRxJu8Bna7zwFBYFnwV59LskZHuQ7cWpr72nEKHFx5CgEScmPfcLs3ptqcv6PjBcuUZjLkQGuro5EQK",
  "key30": "61PVS1qs2rPpiBEiQ4qmMe59TrX1CtGgrmH4XxD5HmpMUzHgrJFFSeJbKGby18mbwYcuXmxhLEm2vcxkVNrTMtwc",
  "key31": "5oLuvFaQWRukminQEF6wGFHsmR7N9jBsCcgVEPLXCXPDW9L4jvD3j5o7vPnjNZwsexVkfRLcTFzCvYEGJEgqR2rZ",
  "key32": "29eKFyB3A5m85Lu2zdYeNbAB8YnBM7Sn3PMFbsJMFx9Zc2DnbudhvjcTEkZ7k51zWTx2inDTRoUF4J3ZaAJxPprE",
  "key33": "62E2Fg5NYKAadVzJxMCZbhFvp2gckkZX6w794Sv8ziMQyvEpRjmxAV2agsKXg5SsQpYY39gqp29Si6E1yqSgB3VU",
  "key34": "2FpK8johgYamMkZutW7SxjPkTRxMy7Lsd8g51cPYbkgoopR2kAKyAtmgsEPkdAxMAX7NiSN3X5TkEa8nmRLLze5V",
  "key35": "2E59QG9xxNWzYF1EwEsEHmUu8F6qEKhVYsRsWsimBHDNLCuK5UgRVompnxVMfEhPRv9TyD1pophRYYudDLDdjRnG",
  "key36": "4HHWJyCdCjq8yPz6vobnqkaCrz3dnEBwTMs85Z243ZWSMtpTxPGb474bQdwDVm3crQaKwpLjgABrJNK1f8TMD7j",
  "key37": "2RrFYmaXzn5JLej2QBqN7aBEfqMcXvhy4zuhBuw7P8LD64VTtmLvRpGSeV4SstBrvrqQ51C7skHSbLGscV6H6mQi",
  "key38": "2x4wNAyCzDYbVWT3o7Lciqir8ajniEmXXNkY3sATd7oG8krae8Dqo8brskoEkjVeSfMnZv3cSDRutfx28Mk9NDdf",
  "key39": "cFVLCJWGKjvNZeX64RcovK1cyXXka8hLqRbDz7YFyJVeWLxtgxLsbcbQUSTF5cwuNswYBmbisd9t1vGf2Aq82MY",
  "key40": "5tLHLE87YC7aSGn6F9AQf8okfQcbY39mxyFVocAq51QHJ4sfXAZcRiJzkDtjGB1Z5QCT42a6bL612ok9SJMqXDiT",
  "key41": "qfcNrn3vVqAw1gnhCa1mbPQDySCj8J77dCqUZm96Y36EacxU1szcz58igoyv6zGXeVwYdMuwh93yaaqhzZfboUh"
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
