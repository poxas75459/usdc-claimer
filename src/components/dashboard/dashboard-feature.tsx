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
    "4hVdx2thPC4CqABN4R79TrnUgrkwxdFvrPpVZ8MKX1jFMcTCct8FZ9D3EFYg2Scdg7qT9S9h2pz6dUq9m8Lob3jT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vpiAJodGKceiSi15Q5hKuh4523DD39QTUkwanfejpazB1DEgMbpuCUCkgdTKJVuiKdDUKU52FqSybofUwgVh244",
  "key1": "4MvEanPbnGc2jGtp37WUajcq1K88kCUbTW8MeihEUJ4FwQH4H9uefyc6ZSmbpTufCF1VQ9qjD67BTxRQ5vUBfRQP",
  "key2": "2aatEPBN5q7DzKq1sF8NtXSieVsbJ83LtqfcACov3nuAxUXVDdTm3D9PsWJ3cdpuf4wPBhKjD1f8WKxxuoQfCvnJ",
  "key3": "2qGTUxi2sVZxzJSKDseDZAATzJ5nr1z5vDLHcKk3YwugkzUjQTC3LDNS6mX7oy6Yp7k9vbUVMogAH5Qh3juJFhyU",
  "key4": "4ix19CiGpbtoQFdFeVV9CCdNpinDtqxJteEvwTuNsumiXEtVcs5fJfJwGZFR1jBQc6iMiVxdWcKQoPHQxmPUba1G",
  "key5": "rKjYdx7JdoiuuVEyoPyWJQtW4uC1D1VxHsqnK3BmXQk6KCSHdNG9kC3VENQtUirRVjH6oCEiYaT9P64PDZKccyN",
  "key6": "5D2sibiL8xxdaZFTGrVKtMX2r1anFRiqBLNsKErmt3UyDKEjphLkvo8Frf58oDExBxhDHxxzBRZE1p4s6kW7qGvM",
  "key7": "29RDNdkfWzGEFxKmEgMHWELrcKD4NzsBSAtAk348WgxU45RNmKrdjxS4atQmvJvs9PUrqHz5fgXmBMT9vwfznGnv",
  "key8": "2nyG2G8y7szqSZ6SbEsEDPVqhkyRxEaVaw5Mue1kUoL2ik3iZwCLS4wHYJq6ykwnEzVKBUzi4wPprX1JZ17g6RcQ",
  "key9": "5PU5LDG4mSJU6zRFFrqsMCykbNm765MFaYPM3WcYgFqLcCa54nkQxkZSW6jZCUkkRVhwa3MgXuQueyud5zgHee5",
  "key10": "4WKTYTxEN9W1wh9cMxgQP24vvDoiFK8jXFA5hZgwk6mpU6dNeGk6Dch82ANCXWGETvrwuHQsp1z96xbsYLZ1X8hp",
  "key11": "2YejWvZg7seZQKmNGibcHCSFYvbpcDUmw7ixYhPFg3hMQdJcoojU5TcbUr2H3EmBFYJMGeXwLTkF3pGzh7EJS6Ce",
  "key12": "47ZqT9vR5sK1gpCMREs4KfkSQVVTGVmxUEoYmuBNqe93exhueGU5QydqucnHMA8z8ybiHjtPRvGbVRNciKgNH3B8",
  "key13": "2qDZY5w5nMxF1K8ZSd9XVeDQ41s37Mk1EsrBm1L7FV5byVq5T7YGQxbXLLA3ECf89Yynm1UJVJJKGHmLWxxwDWwu",
  "key14": "3uUXfDAZXaZfMrYhJUjZARGLPvGXdLUMFv3AMZ8gAkp5wN2rRw57UtQmPPgKm4nFpsrJ9mLQ5p5se8uESmwGdoAu",
  "key15": "2FSmL2e1XvcnDw92ZFHKJasr4D2c24nP9qvc92bYAWCiEsM6rF6SRBYuVCFEBHSpqEqufAGe4jyHs7wxy8Z79aQV",
  "key16": "2LdoTiCyMrVcC6LT4AKSrG5Y44NLBPNmrWyRNQNnwUuwWVqdfBnhVmY1TZjSzkJZPtFVBSTgQy2sKZabDRZwuQCG",
  "key17": "3C9nGGoeDyTh8YvpsBhgN1secrqA6fBqheWHeAHFoRszZyxZo9HKTQoN7b5cwB9ESdLE131NuohWfCqGqaZ4Makr",
  "key18": "2po2JX2gnXqMc8WPGtquyHmybK8dWw89CPkF7CX4TwfvEDYd9nzjgrBxFwGyeL2m5akfaDQCnTy9RyMfQHLtHAqp",
  "key19": "39s2PcjdDxFK8ZarK7Nea8P94QBYZ6cMHz8BkWr9RJ5MKrFt31eaZBQKAQv7M7BWCEiDg28nYi3HJTf9gxQJAtgG",
  "key20": "Qv2J7gL84rKmNF6PJR8zDFHePU7vNcENAivsaA1dCoHNgkxwjXm8YLR8SuQkXK5xqHXe1BpeQifaf5wwWLwijej",
  "key21": "5r9MNtHoUzrcDKTqqW7MEfsyDJnD45hMez6QhBEoqAhsnYiFKd6qUks1Y3JDgyjfJzJE3YerwJtws2Ngxx5tra7q",
  "key22": "4BgpMszZe4wyeworXZ68Ai6oKD2ECxvVAopiReAont8BjHHsNdoh4JZUWvbr31nc4qpbfpdNgNGDGbLjNCUhesBA",
  "key23": "4kNrCrjp6Y62umbKBbEYiJTxNBu1mK5zMogyHob5eJWCB1mhRhynRiRD3FZvvuhFsLu51ozGig3yz2u6m8EfiZYv",
  "key24": "2mXEtmMWqpyieudk7nv6XC2vgAm8kknTdSqbCLv8K23Y9t2DDEhpzYKtKcJojDe34J9fJG1xV9PtY9Ws4s1shyE7",
  "key25": "3uCH5RNiAfCM8giSo69KCToHQiT5hSkhdAuRLQpxGhbXVwbd42y2jmQ491FeYhPrAfF1vFStAcWb1bncJHRaPhYx",
  "key26": "3hFvhGPDboMFpiZdycRB7BoyJVvVsdK2DV5V4hkdgngJ1LpEy8AdCBwPSE25d8A2JuqBAJELA7R9bKm18EUNFP8X",
  "key27": "3doAeYyWjBY1QyKWGVJ81KCcsVXDrJ8s6fAMh2TvwM3Z18MGwnAKRbifz9DcKWDyd2fDSKbTF629UtHqKVMcwquB",
  "key28": "2doZPKapSDPBUA3QX9e5yDd2Zj7k35sfuHhU6gFto5CzLn27iUxr9fUinebvx9akitm8riT8GaQzayD317nzgNrk",
  "key29": "3UQGWmysEW2dx9zpuuLDLaaSd6Zp4MRJWcz4DyPqrPuy8GhzkaEV383eKb8ayx4jkwCxFqsrdg1Xiqp8heiBNSzy",
  "key30": "5v8ZxcydKv3sKjj9efQdQGSrmakW7EWo5Mk2gbLDBxsp8TcHyBAsYnCt2Yx3xjZCQyP8njjr5pqLkExAdmDmER7E",
  "key31": "2GVY3ogtmQ5BWbNN3GWw1sHyjghDcZhbUunp49sMa4id5BMnRHDXAT7p45CfwA29Pp363MmECB85Kvo6eRrfgisw",
  "key32": "448T1hx4Jjg35xoQiWCYvDBvY3uzm5q6T9cKuWiSb6oW2TjzgGKDqviVW47kYfcvW8CJqbftd8aVWb2V6G7QgmtZ",
  "key33": "3bCevPxaQm7QxHaw5DwLbMuvaMQxecefkMVt2nDwaHwNvWpLBm2Fq936XhHDFwp3hRUux6GoZJ1TDx6KRB2EyFkp",
  "key34": "3QmeJSKv5cxA7S6se5JbKrQYKWRjS7wzkkTBkPGCaJ5LihawZsQ9s6s33SSc1oJrrRocryQ8TWSp6vqbWshP5y6x",
  "key35": "2dSZHtbGsi9LKRboV4F9s6NEaUQw8yPqbK5k5yqitPZixboY3rVKAh5CXQbCM1ez2RSJCAnJGGmgQ49hNgD4WPeu",
  "key36": "4JoYpt28rjHwXwUbeq5wPqxrMSQMU8z73XuEvN7kvzYkUzeSbNQLHpUVoSXWBirx2D2ESsqsgptthGZLtURoM47z",
  "key37": "3EMeDcPQ82mWPZux766ePji3aLp7RJgHEAaCMew7jkysD6ZLJ5htrB9gd2XnJnVKydL3tuu8STJ8SjnrNtL4ft4w",
  "key38": "4pfEC1FCAqH5WT4cFDQKvzYC9pzkMUroANTc58bm81LMGRV6swpTWZHVCh4R5RqpfwtR1XhQFAasDFBwb9wb4qhG",
  "key39": "3m1UV7q6wP4mXw42L2rX58KxanbaJ8iin6EvUiPGmRFXgvHN5K3JU8oKcD3TK2E7b34wnP5C5FUjPUhsCJezTpZm",
  "key40": "45QPuh4q3ZYg4MzoVyaFPuLLUzFAbWX4uoHucTboGpiucsXmeCDyp2Pr99b4MZrmVUThVPjSWycWEtLi676NrJy8",
  "key41": "5BacG3sEC7eRyb3LtxWApYjj15QGU7jumYhpvsMSdRyQ3s7cmoS3SKYMNpPg2fxys7St2FHUvU1RGePJPyZsmJyF",
  "key42": "4jfxFQBntCNGoUiGLGcDurVggYHKu7Dkg1aXyY5ehduSP4xeZ9vpmtrWuQ7hDCNVPBdsVd2DemFw9X5gDhM3WZjS",
  "key43": "596iuFWHi2vzvAGzNYvMjPX4hffAAYCTdym46g1W2ASbkLpNgGtuhjtY7aYwvzPDfrV8DoUCFifx3KZPvebCWhaV"
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
