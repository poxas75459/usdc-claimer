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
    "4TDytkFVNgTFTSBKKeYBHokigH8qpaGg9rxCJYGkdXXeAR9PcfjxNj5Rd2ydkcHSND4AzChzE4tbysW3scB1PWij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnyJbkE2APTKZJVRpuBm1Y5Cz3TiHPPgwhQnTy2KiDjKd7zS1ERDJtr8rnFQma3y1vHGm9emxaT6gGXmceQM2XV",
  "key1": "5ZhJ3fQKKMZB1X9bDmNgL1ko8FZ6E5zsLQqyZfhYNP6LeRN9d7F3aLHAE2WjCi4mqwF9Ktevzq1DRK5EnkMDsPTs",
  "key2": "5AmFhp4zcvmhDLNfv4eenVduA3UkE6dDSVjaKTNMkzzXhBLkaNdfR2zKaingKRuvi8kGyRvZMy4cJ6aHCDABArHr",
  "key3": "MnMWfZdD3eR6bGGXR1yBMMvKvZaXW4Gk71WQktAXHQGG5Gn65YefUJwQEaQyjmpe1EhVwUFa3emF96ByVfxwmtR",
  "key4": "57naMTTLvz4USwPZLxQji4fJ1wMBByErTy2ivdUf8rS3szWQrSrk7rrn7jEbrUPHeusSo8Q5JmEfh23w32Nz2xm4",
  "key5": "4kViLxaJPWzH2vapVANF9nxVyW3tiy6hgmaNZU6J3UFPRjaY6j6Dzxt5rJwaky7L53eDfQroMM4DFX9Ye2BkGn1J",
  "key6": "4ww3Pw8jR9uU1KKRhEJHcKZUfnQydVeWnEwPQVk7H2yVgqpfX9QCStx2JwovdaX1Q8w25Gkv6K1LpQnGYeFkk6xA",
  "key7": "vNjuq2E7CMBnZ2qVBfeB9XPZAXyZuvmZU5j8RahgWXtzAHLVCm7XVnsmrNqB5snpSCbNe1g4A6MHVnNkUW9wSrP",
  "key8": "KzaAa3rXr59E5XTyj16DNEtee1Ls7LW8fQWix1A9JrVe1cYvUNY7DByHEBAbQ5AeKNLpJEcLaoP3krZX2fk5nRU",
  "key9": "3H91voLWQ8XawVTa5Rd1Xrai73bgUvj9oNEVkpC8nRVmG3H9jyTygrzq5bn4YkFpeVJXy46KXUSAsyoQoyQFBtKD",
  "key10": "2SWsXpSUpWL5QcnYCAespDqjvwpc5HmjUBHumrXmrf94Uh3hcMQza4EN3sTPXWZ9tibMp5axQ9hEboaTZYpvphzZ",
  "key11": "5TB36ns6Jf7Rh6gVcwBx77FzKsEkK5yLmnJYZwBCb8dKEi9jwvGRNhqWWSus9tvG4JMfptag419sQWTLaHvFCMfK",
  "key12": "29DSEZm9B1Xw16DYfk6rAhrfupHKEyC3679DxQjpMDHUzRzFF4E8D88s82LYH2TRKFfJybbGZZUkwAzhDho4nVVz",
  "key13": "3m7UE7Jc3JC6roGCnCf9tjBjRj6LpJuLFCNT8swQgeaFRJyn6DZXr9PpE5nixxWmgYzibfwX8SLyHtXgL89GppEq",
  "key14": "2XDcQfSizDpeMbqpzbAAB1soa8QTSSDSpVRDdCHzvkBwY7r4uxeHyXv3wk63pAN221JZZRV3KuRJaq1Nkkmcr8bW",
  "key15": "66WT46xy4Jyae4TS5zw8d4xdH5xvEq1uuy7GFkbYC5qw97XSkBR2hsC71twkERjsrBAWLfGcr3doW55gEq4mH51c",
  "key16": "2CjpoEE56Q6C1X5jUCo5L2LoYFNZ3sBXM8VoCd7baQvJ4trDdEVUKijfR6iTKsgZojTqzQCnJc9g6TFzGQJxuQmr",
  "key17": "21NL7RWzNWm2pzo7E6LrhNWYWG3d5vxkUzswcrK5XuzzaGfw5iC9boDcMjM8EAH2kZRm8auPr7iqEEVZejT1UxdT",
  "key18": "5sxGsn6marmJ18c5EaxAUq8ZzzZPmqLTusmYrad3JFnkYZ1Xmf88ZxV2Q16HHzbaNHpPNwNnYBaFGX6EvQaUe3j1",
  "key19": "326LcHMHGKPB8vozwRUpfSmT6ZVneb1BY25DvkY7rVBBARrY7LnJrajLDY2WjhKgUpcyAb3vgqtq7Y2xbbqZA6qc",
  "key20": "3tUvyVBk9GFJQ89611r46Jou91omp7USeSeEhvSV6sT9VFZraXqmMd6zSsa1YvvaCSYwk5L1khNp3iqnGr55sXW1",
  "key21": "3wSDUNy83RmEur1LoNLtgqJUvFedaE2aFx4jqskngbhJ5RTGqiBh6EXwcGEneo8zLgPoFuycw7CvHB3hmXowJuw2",
  "key22": "3ck81vPVQp6rNdk6RcYYa5EUorwpAodWGmuC6zbe1rvzhVsvX4U8CjY2f2XmqDqqUeZD85bsxbg4ohaQMrd24fj5",
  "key23": "4ngPVrzGp4Z68k3TYYxkS9zwBe5PT9AGjeUubYWohXbupQohX8oYyBNGCGwrznbpmATFLh5Z2pztdnBZJtPJuSg8",
  "key24": "5HLtU9zHGYpezUKxC3Bg13cvhiN3fTc3n6aK53dWvhPM8ZRBx8u466E2dHjJSGivpMNU1w1qqxMme6ULk716Wt21",
  "key25": "2gHHMbw6eTK5cFBFycfFETcuPXSq68dWfBgMjwe7nKFPqYXSRUoTE3G215ryEbugaTWXmbik6ddpsVimfAHirvNn",
  "key26": "4oHvsGawjGm1VVLUJD9yiKDc2C7kBtQgLK695psfGAmSFQeYYtZZDCRQtxcKMve4Fqc5wtyd3mt3x92DvLUeyQXV",
  "key27": "5aHbL9faQBovatYGryy8ESkDAMxEacvvs4nanNHNja8MXDmRWmTuFaKS6kC9ziNqU3UsEe4Z7MJsKjSEEyPtpEg6",
  "key28": "3ZXM433ovNSxzpFCS8NhcXUUnsJzw4bU4nLo6mTDAo37U5hSdeKJS4rDDLGDJHGyjcCkZLeh5tx4j4mT7V5YSieB",
  "key29": "5CxjWgoXgFwmth4wdZmXf2SdSWdy1RYmqVNEjPhARnLUv3K5hJRDNoD3VSE8T7LSEFrUByS6PEs6uYTCBnB3H2Xe",
  "key30": "59fNX2WQ1EfDioMcdn7Np1WtDg4hqktYFG98VQymWYmPJkZzMrvJDfgcKjfNCftrmfGtCKPRbLKRuwrrpWA5nBDB",
  "key31": "67N8MyE2kLL96xWVrBSLZWjZvUiRWFTZoSEFLq3m5LRz7o8wfcFTGskkRDNPhmDJKiwTkNPkQgnD3s4qwHnuARC7",
  "key32": "3p6jHUNpap4FZsRhjDpe7mx2YY23WedTRUmpspAsrEUsyLmHSGcJoP8Q8B9GYF3npDG3LnU4CX7YkU3Z3WJgJLw",
  "key33": "5rJNf8mSpxAqouqPRjKZHs5CxqZCNeivSgSzVH3USQQ9HYZKocrP3G7snGJF7aUPEriGMeRSiJethjBrsoerDUn",
  "key34": "5jZGKVQcF1XV8KmvS38pKycp8QiRJEexHiQUrbQUwshmaa3NCbYdUwmAd2cmYbWYrCXAPL1JU3wrr3W21zeFHXkX",
  "key35": "49cBQ7XtW5zZmYzwqUP6Ad8n5aVZSWovc45TCVmdLiKXy9dS4V13vS5LCER6C6pWArh4PnpXpH7TGJwJG9ALAjZe"
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
