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
    "2fqZQiFaSkkqXLZBHnZJkD9JwNDeSXNDYgyZDtzwhQV7RS7LbESeF8T2LhbmyprqWRsCeqebYyPWZRaBVeoYYNPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qoPwnC5j8BYjTTbUPgfV2xXLeg2WDXR5FiuFLb9jMWybFTzLjjXXtuqQvtGDsjDYtBYyDaUrVu7r159dQJpfx2M",
  "key1": "wJmcuT67a9NB6VvhM1mRY8t1Ro4tv2GgLFjnu1SSQJeYmnojm98No94V6Vde6oY7Y7oQVvShJVY9p2zDeBM9h2E",
  "key2": "3VUv6mWPXBtx2RTiKVtMLfPpCiu14L1mcZDbXZzQHt4czrL9aFQrxg6sqKqLuev8DYhgTJTH1mb6tZxMMwyzr6nq",
  "key3": "4mYLaRaM5Gc2v9RYUJQ8RYyfCUQufSVi5MV8HmKVbKWhSQQQK3Ka2ZMAryHKdZeRahBKGkuVMHdW2i27MNX5nrK4",
  "key4": "2wXBsrkJu1bj2jKoDKGCWTkhVwYxHiNAbBcSnnpaS3PvyED4jJHwyGNzeN3fG7UrpVWJFyAy9b769bCVWWK53nED",
  "key5": "27CmZZzJg4w9gvorLHw3RQ2Q2sMBRbE4SUfWz8wT1U8PA7wgfDfEnzHM9gMzL8CepW5z7PSNNCPoS8dRhEKob7C6",
  "key6": "2rwkCs26QPKos7oumKM6VQRrCat8vBno3h9sug6utYRFnSEM3UnoFcvwWWyQB1bJ6wuuoEChHjhihLNEx27zd6nZ",
  "key7": "tYNMG6vFRhUsU88XWSCttuMDPAKgmj7xdL3Ven53y3853Uo7wjzNSitt2XkcLf2ZUUirEQbPcmYz36KDaGxtXoU",
  "key8": "3T1stxEx66KY2tJD4UJydSHKxqUv1UNBPachLJ9bGr1sJw6UaeMc521RyAJcb8mea3gqjkFSPutb3Fxdt4P9gS5S",
  "key9": "4Lhe74S3PHRmKmUAqFkrBgJmvaYJ4WbxZVGFcdF4sWGHBHMpYKGLdyzVZFVu7jW5pdbN2fuSFoaumiVKeMPZgzSz",
  "key10": "3isZTMdosigMBKTvJMRVgNGBQwvHLSSLaSAK6MJFAp6NXWaQj1J5wKnUiWgyyMk3cxpJqKkc6hunnkuSBarpeuXU",
  "key11": "FrWqfDYQKyPY3U2gpuWeNRrTgJavomk2udY1yLXxUu2rZDyGuuToeGr1n5qKFsHBSPz77A8b1jxcqNYSZL31cS8",
  "key12": "4ZgeEKX9HbPQpYgfpksd6daidU9C1ASESS5Z1b25qfJwThcvjiL42Sr8ZNWRMVsnPGPkF9NwGXhbnfGp3bnEqBuk",
  "key13": "FKRPEiduKtWNvipLjBfkL8dEekPxDqjZsdNqBtBjLAgQTS5rvAnkLcXhUUyWnsyXPA4qMnD6qt3jzdXzqk4HHaw",
  "key14": "5eMmm5a9QAZqoWHNiAXe5gvCXjFtpgakQYNjJiSkNPjS7iJz3ky6i5tBza6PHri1cFn55b3gCXiRogma6JChG8Ry",
  "key15": "2X22PWz6EtSqtTdSteC8hhv8Ebxr5KJjyD87yYthvspWYhfn7XwNPk3L7YzRMtJRTnQemjHr85R9CYGGdA1kviWk",
  "key16": "4MGyqcaWYNYkZWxX9pvCXWWcqWaAcbzexkcjQiTtXFdhLAswqp6ndP2st8JYWdQuEQD7JNdYUBZxMMGXaFsGteNn",
  "key17": "3HXWEtX6V1bdEkuDjbK33SskCVeK8HTMan7F7Zee41edvoVup1NEJ2ZP8VA8RgYRTxTdgHJytSXAFLitTnnB5aDA",
  "key18": "tjAjdoLruCqPvTKf3SkL6k4aUEbfRhRhMpT4jHueuBCj5xhNpzFxyhge6eLDmjDyweUhXWcjCaGjjckJYyu12cv",
  "key19": "ytUU3JzozTwZnDAfgwsYnghbNcTWK6QF5PwquGeFUrsrvTWG1HPXjefUqvuYHRuEdpr4xHucqgk4LmYKvmPmGaX",
  "key20": "5yjCrw4cpc2Ab7ojkMgYQFtkKdLs34RhwD2NaRHTPoDp7JHhxvLf3WxqqheR8P6iccWYw29Bex6MZ4hDp7joGjAS",
  "key21": "3vBTjUzK4rtLjpezNeQFtpEMSG3KgCBn6h94XD6zjEjqf2uCSsshdMewzXnxfuhRSkA7tm6ADB5EAmDRqp8YbVEQ",
  "key22": "23SQhqaZAwtwDcsH5VSSHKCmGWFPxm36dCxgesdbzy7YJzbQM5goprRAZy49e1f8WYESu34vdLW2MDNTabZzi3hm",
  "key23": "4MX81PAfV4h86if8Bd6NoAu1BvGtmYCeVZ8hjk6vM3h8EwMCDWdkpQeegNcf7TdZmA2YqwvvNuXmbBWAuoqcR9L3",
  "key24": "LViNtyG43S1NZJHATnr33D4ZuctkrQBFRWDsxinJEFGUwiT2wSy3yfmQu69L2Pvgd8oetAoYs9hGbpJZAXLmNGg",
  "key25": "27niCXByeRqZ2FSc22D2JCjbtHVNi8SLQjQa3NhZG9jaKsgrJrPk3aFbTcCyiqDxm8bX38idRBTMvNW29hKqyAMk",
  "key26": "2ut1qJTqnVXM9mFntJ432GuWooJEzAgtBrCiyktXDDHSwGCszGrbCAZsxamthbTFNtq48fGYQBeACxCvHSjc4s5v",
  "key27": "3sB2ZC6Jmdqf1BN66XHntQ2Ybnscixhd61NWojSw86XyYJTH2JMiMK2bswcgavxgjU9Ycr9waSoMWQwxQbtHQwhi",
  "key28": "5dELNtGfCSRmgYUNd91DtvX3ZTVDxicZYnqyWLRd9qb5zQh518wCr5yuWZcx3BXr2BDww4eY5PvUDDmyoJH9sE89",
  "key29": "3RjdD8wyaD8D6CvXQhhhrmpYvn9cKveEhLsG735wEMUVeRweXn4ok2VbdVSb8zMMKQKY2u1DHagrVLsBJJ363V3M",
  "key30": "21eoJ1GUJJ5BrfmjD3AF98eLoUfakvCo5Qcni8s7LDjGKAQ6Um9GXTdcvTNfso9GsTtm5dZK2mnWLdJ6nj2t7r9C",
  "key31": "2hjbXFoEvPpZ4knjoxMhxRzb28nWNQWL1UKSjZrHwBgnMDuaKkU7kimFkweojjomV2bFe7wMHNBJBw4xLcZTfwVZ",
  "key32": "FD7EMtnbma34hcqGsBiqecjoAVWQFL49eTBLaNsKxdG86m2ZcUVxVsaMYceN459C3P9JdTmKjbvJzdsAD4itZPA",
  "key33": "5JaVwsNt7TVQPNVRJS1d7SQzvaPDXY4P94Wkk9KzAG61vJpkCGTZxs3rYPtQCSK3uSMJyTs47t88n7P1DkYcWEzV",
  "key34": "4uxTwwnRNkYDD496uExtKN7sbHiYdLfk5wDXzgncDkcFAwQNKu3UmEWVkjLSgRHRNJRQ4WU3cWCKpAAdAxVkKgjB",
  "key35": "3BYbiYXM4Dw7UcryAz32vvdvvVgcGETH5We2xDst6wbxQMpBwS4fztcSitmDGPyM6gRdfaNKUwHWFce6VFv4ByDj",
  "key36": "5KYYU4wJFX9hDWaDifqECKMqYeFnNzcaz3sHVDgxk2emkymCjfBNQqD8QWwXjsFHDrsYtqXpdEE2Z6MnsiX7rGaN",
  "key37": "3PDt8SmgfudYVs1GdSUb6vubLLYQowUKoTZwS5YPPRvBajSV5AyrhwC1t9nbcbJu9GjcbF9PzKkRz9GxQvSmgk51",
  "key38": "3oEaLP1quF4ioYy7ZbyRtm4h2PmfqQxKTer7E71vBUEbthmcjw4NB3MecrgiQ557i94pUWnCcrrEFdFkpJuKBJWz",
  "key39": "4vHqW9etLAW9iw8AwNctGRLgH7fUxJ5T3CBCwAYW9VFS2p1vnfgtLaZ4936My3H84D3HcgDGkFeS1GWefte585d6",
  "key40": "4onmN3XjBTkw95HHHFigyWzf9mdhwwZwtLTbvs9gRVdEMUCmuegkURTWzr1adGqK5jRVJx9HHyMx5TW6yPRed5kB",
  "key41": "2jSEf1cKKm1562vB4uf5wUxHXZL9ePXTt5BurmriTYWGMftYh1dctaXWJLgtAGBmMKcYfD8v2AhoFMhn4ahN2KPV"
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
