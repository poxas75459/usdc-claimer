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
    "63WgAfUQ7snMx9dsNYCnsMtzWRxASSkrdbHU4nFAWpASFG5HKaFEo4JfqGCwnqUKdYo61BXD2BvvjETHPjPQdEnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f6KyiGkGuG5krtpay3jyX2iti6fiGyByk5PdSVD9h3ATU84h8Cg69oVshDucMP31hQV2Qjf2tvDvb2uA4uxdKAe",
  "key1": "5VPKkEoxSMoMGNuX4t53JKyKv6FxNBd7onBtcfoK7TtgCARbFNms3o3rhFhxw7cFvDN7LKahZSrCbZKxgixcEBYW",
  "key2": "5yiFhRp5bP5ctmtjsRmhZV9nWZfPf48mCvr8t6FssbrG1btqZyEhyBqeRQbJQ1NkPBJ7FCYfptf9CDtA5xgJfe2z",
  "key3": "5RR7XhwCcbhhu6RS8mXhvSi8F1V3nVAuCsSdxJ77zqT95iuR7taoWf7qJhmMSiU64mVSBFwDe9sUXKDQu5CvXkdi",
  "key4": "4FRM4vrDfKJoAcxcwuBuD5VsyPMmcFNpmebbRt1wznhCgXJNi69iCMR6wMbddpo4Tsehx68ACWEd9UU3oEiJnh2F",
  "key5": "5ArZ5BJxHzazRjvjjaPicQaGkR6hZWQ7ZKU55Tq2fBZr5aJrY799x9YKsyA6v7vcqrmou1LbwqL48AmC6oiBkHyG",
  "key6": "Gyxj8CULEM58m89azjTc3VKfANeXKGDqd1sncZ41GCgZXAYDEGqzamgavsoR7ji3PLrhoR9raZQ8b1ZaV3g3zBB",
  "key7": "52LwQ8gxGMbZ2gExEtfSPBZC7AAKTVXSVYavML2pfUnkjJ4eWsfsBeVdrceJcwughc591MU8dBRAkJ5hLjCq3fSn",
  "key8": "5sm4Rv5HJetmXjEkiPYzkgXB2ypApHKzqt9L3EMH3VyXPgQszEGZz6E8LKpMG6kKN5UZngufSvzDJ8KrZn2dWaBU",
  "key9": "5cRWg9m5fmWPoLf2Y5tzGNaMuq76W7iAoX8iM3LpKzMY1k9raBuaSmzz2jjVsoYLWozTWzxyqmKp1vs1Y1ikZJ17",
  "key10": "2nubncUjyXNnD7mtPnzwYHYGYvbT1ZwHA2GyRACNyy9YMKhWatKBWxYWJL6vhAw92oq6SenB4ce7xdiWYbj9CcrZ",
  "key11": "iuB9M7kDcNmXYrJaPHGgpCtbK7o5p8kPJ3Nrsn2E2ccqkKpK351pnj9XLwPW37AhkvfgDDkS1DEwmwSP3HCBbaQ",
  "key12": "fiDwt2gyc2JccdPPkt7Lrq2DhgdzHTLWiaRzMKu8rUX5WBKx9sdD6zYCqv9GiNDtbj5XwwZwRjEGrU9PzMaY3NM",
  "key13": "4NbwrZzvM3Vd1QgLCiGgUmVZLFC2f7sV9FTHyn1A8HtZPSdEf5M8HfDWM74W689QC3qgXZmm33tUAGGdcwwBheVJ",
  "key14": "4R7ZzqwdxiGUuUgeakaxBs3qM5FzmwjyDwDB5iJpByBXkkZ8zcRfDycDAiiXfxLWe4XEi2wQdE9hZC79PHtM4kA7",
  "key15": "K7mZj61S1o1Zat8HaoJPh9mbiowEouPuiaQzFLsnZ8VjucJALZqbKVGa2pRAAEF1GDcjfqL42wPkbHNDxVPyJfH",
  "key16": "54MNzXz5mowJX1rf3u2ERsWUhyNi3w7q2hhEpZehBpbL8TQEfDw3by7Q4ueQZGCo9XhP4mcbj9UAmQ5ZYaYuFrWC",
  "key17": "3aGysn7KAJn6ztxAsYcqhW9CJXch94sfLip9yJBRia8VAsBZgiYT9RyjSqM7XU41H7C2RcZTFxsYz7n9fjfKUQ7u",
  "key18": "5toAG21PzWaic8PSr6VtDbrkuLAFrksJ2v4SED5Ani7JnWsvQv1M4vzk1C7o5S7sxjaqjEWaa9Yotk4s1aezEiLy",
  "key19": "itY6u5ninkQgC8i3dk7D6ZQoYQb94vW4hmaNF7cLyCJKu3j3uwDmjDFjMExuyeAJCeqc3dRxeGQmbiAKmVKsaRs",
  "key20": "3PfbkDmkX7TmDf1GRfMxW9FEjebyxbhVxvSKX9fHqLGBXbqx6MBkVMgWWfZwUBcnkp12zeui22XTh9V9Wpog9uAQ",
  "key21": "3bb5Yak9HsygpB4eGnjjvmntHFi5bhoAnoNZntyW3wXssgfq6yT3F1dsBpWdqgcstL2oDivfpdKXoD5eKmKxQUR1",
  "key22": "iopnqsz2NyKt69GMRu2CMr4q9mZHfsiTeUxvVqMUSozfBcTq9inKgAbSLGk1zdRxjFeEwkCwk9kJFaHdsCphWEn",
  "key23": "Y8t8T1J2qf4fkGWc3sRov4ZZumdwYo9oDcWCyrwLtY3XnXckgB2mxdoZj5pxZq9xZwumqpaPwy2ECMgfGsbFtgB",
  "key24": "UyucCd6aUtF7iNrWmK8spGv63xAx2qbRfwzTcuip6pEogiDcgA5TnSzeuPyBLvBtGHaCqCehqheDftqCsjLhffN",
  "key25": "4FuCXegG4ALozA26tAoUJAKv7tuDvxHTCiDAMepyjLZX5Kg1L8K1okEGWG7te5JXFkJbBVy1uhTGsoDZL5uJHj1r",
  "key26": "2jfacgSukuLPsS569sK1HYmVYeYHTRLU6qTckiswUPPf6rEiFFCoAd5jUTRVanqX1hknk5girL74cU7GUuNR63hJ",
  "key27": "5vCtRPV5zd3NHYjSghhtryP6YoKqC8iMZDuTsB6hvdTkUV6118pJZemENhgjNgPofw5ALUGzyC13qkcGsJ48Bvz8",
  "key28": "66WGgyTffgL2tyEEUa1QqGAUeGQLdTPkQ3GRKLwykGVjL9qgcM9AL2gLQaDJrkEuBGJQpNrU6d1KABbfJoMqPDEw",
  "key29": "eiK1w4bHUXyJkqaVk3h3yV6ZA7JjbtJvMM5yvyfinfD1bBNSDTDK3wrTancB6SvjTwen38RgyodUVgp9cfSEQTm",
  "key30": "59fS9ouYZyUNSpQwG9jJAB4Hxf8kGkW8eLGbRYmmAinDW6A83zrA78ocEqre4afi9TJMhpfFm8fYcUoBeYmfkeZQ",
  "key31": "2Brui3RmvS2wRdTobZzakXMXti5Z3HiKtGtV5UMagtqjL2KpnZCR3CgbhZUa9qtkMAHJnJ2HrooYCHh1iXM6Pdqn",
  "key32": "2aGKg1HtQnS7zgp8qvxMa6TF7detQMo4nmKMihWdC9QVjnZcYJXAenz1W1szegNyLSC9beMQT5ArRsRfgk1QEjXp",
  "key33": "65GZTPZwbthCuAdLH5Ue3HXSFJCq4dseTsxxYij8iLx187ir7fMhEB8N5kjinPC4F9Zt28fWPX74s8cSLoycGvJx",
  "key34": "5ERPw6zxMys6CvRMERhKxyX8vT4XfZ4eaM4ZF655HeaK85MffZedWakpQ63bvZ2iUeqYPjrHLJvwvkg7ATzoL2aL",
  "key35": "QKknPDLKH6r5new6uVpHpMtMSZHy16Bc2ubLTqZ3exCf4DPhbe31TYZApsVzdZXoakZ9DPCHHTDPbm1kwsLcC3G",
  "key36": "5Qxc11ZzGUjrrQQkARxCdZdDMW9rKCJe6oB5Nt1kTWQWhcHmqTUZsMKNH4V7u9gerfyPJJ684C6WSP1WcXUQkQb6",
  "key37": "3Dx8scA9B8KcLYym2cRJQnmwtRQKzoxQ2wsEM4naDDP18S1Xc8cEZzkYjosGzp4VsnuASMnrdmYn2LEdi3GYVJ1B",
  "key38": "4kXDbcTMPaD2LSaebRh49AaRjeSjsTiRm5PRgKPNDf9vPaHSTfeKt9S7nW6nTq8T5LAUSAVtBBKPznrEWRzhXKbi",
  "key39": "5H3LNJd7QARTeDXSpHwr7mKWxdk1Q366GZwCZfdLGNdXD3N24tP7wPWi1VzbXfuuGjw2vWbpVuqX4zmPdDqW3dUW",
  "key40": "3udncBtfxdgrCDyFrE4e4ZtCSP9XUXFTXsRs8pCGr421P6Fp6T5W5gaqZArPksU22MW8Zui4PE9iYbcq8brx7kQ8",
  "key41": "YPhqW66AikW48ihMgA9q5WfdXTXAmcu4vXz7mT4xejAT1Us3qKkNrRACp9zg7jq7YZJwVa3SgSjfN2eWhomt3D1",
  "key42": "251aE2V7Qw8BnBBm9RMN7AtYf93yRHR5Z9xBeQ74TBcSzGd2zgKr4Pb6eydzvjqcxNKKUci4WiYykfm3PSdj8kTD",
  "key43": "2LCmCHBG3nsHn1FuQnjEcWmhmrCWs1vBkXNsVyD5RLRGJuqqKiZRDdGtm5RA4qrG5GcXn4LCxWR1yPXShgLSvRMt",
  "key44": "5st1kk5sSht7ogGM9GPd3yJCdf5AczrV97NRZ8McZkGSEjaqwqCg1Sj4Nx6yCmkBK5vSpAPEGXXvbpkSuqWeAFCu",
  "key45": "5Hh7LLtTjAc9zfXxoiWVqBpnshyEvGzWhJfrYJU2HmbXgH8NM8aauTjy4z7q87uoG2U3J3Sd67U3aamfAe7JPH8p",
  "key46": "3cE7oikA4jyeLyrLNuGyfmFATwHwGwKNfWVyksdgPTQECDAt96Ki1PfrtM27LgbagFCLskHhwiy7HZxbt91oTYpY",
  "key47": "23PFQNzkvzEkN47yjtHhs4Hk24vmFCmnnvkmdFAmhzQqCjo95R6Fg9kpacFQoqCRnGWXrjTWEaAiVcpYmqBBujdn"
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
