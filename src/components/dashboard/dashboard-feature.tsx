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
    "C24nGVHB7jgvgxk3tRCNgeyBLwRSUSb9e16Xbsb99gg4tSV9MxHUc8DEx1BWgTq7fLBoeqiRrqZ4uzpFuCwLuXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCh1ovAjPuCsca5as7R12mFTvRkUSXPhE8yUrqmXNSberYm4aaE1Cc8mBJ2vRdknFPhorC3x5TXRyVCzoiYtFsa",
  "key1": "41q2DQU24NjvV3e4To9hbgKmYFQMwRWFU7j7CEYPELPmF2PuyeuPV8tnz9BZBLjEwqnZEBXiR3aa4tEWWMhzrwK1",
  "key2": "jKggivsofn1dT9KhntAG4TGQqkbpLdgTZ816RiKFxpds2GokfReK3jWgJVtjXpjWhLe2zMXS4z4ExCDztxZ87oi",
  "key3": "32cqxgfCC4HwW8eVeLG3ASg9zTFiPdgEWDyyNjAfu8uGTNZXn1FPj6N6KTAreeGkH8Jk2uRZg2USsLvvSNsctnan",
  "key4": "3G9ogzuX1YTeDXyCSPkzKJX3o8YHJivYBpXcvCwDa5HUkQHiUyWwi3wYd8ibxFa6VhQKb8JpKc9w1JuwqDbffiMw",
  "key5": "ZBcg6ZcupTmnDiGoC9ozzGe43yhrSTi5Tjru4hiEQLSNhS3166uA87oWMMYhCQNKNE54NQmp1vohDMo7N7KJG3Q",
  "key6": "4YX43pepLCDaRmTmznZ7NfUmTTA7UjZanLhJbGhjY5cc33QdFnZxcTj8KUUgaLeCizSjqoeEmzAPd5znWrDo5oFs",
  "key7": "476b144rSRqeCuNpYmougAGaZb6TKznUqZhRy8w243bJFpeytFX1Hws5QefHKAH5N38HVB9gy4aHC7XG5rk6PFdo",
  "key8": "5zzS11ny9ArgqoVmYfyx7BZyWnXm4YVAbbtrseoNieCy7XtscKh4d1fjpygEsct7EufGZc5ZW1WKjwQCfDtHfVYg",
  "key9": "3hFjUojgzQkN3USdf6UzpZxP5ViD3nY7TNaBXd2qe3m1aqci8HHr5wwh7sWL7Kqb5YiwH8LZFQBJq3ZEkpAQnXYR",
  "key10": "2mHxeHe3kYBNciiy6CQDSgSQyRQWdfx4zSymgiDHiLKaiwAhjrJEwDEM8v1WfA7Mw5s8WeVD9H3Jj97xKaT2frGf",
  "key11": "4pMyM79FCuXbz6EyCrTwn8F8FgYeiqbTkmFUgYB4dYxXF5f4qJdzmwJsxhdGGXfiwT22SAEebTD4BuWQjVffAmrk",
  "key12": "3PKt4dJ98prZaVDBKGhm82NMfoNofTC2nzNQpievwyYeq51dKSTh6mpRMuBs7PxNv54HPLKpoKiTWiAYGdyXEg9G",
  "key13": "5g8287cCtzcgKYDFi35nvoeEBT4b9vzDwGPUvwnodBumnuuSYK3kmzLthqgfU2CiQwxVRNC6Evc4B8Kn5gGfgEpr",
  "key14": "2nF6LoCDVUpecJcJ34MZMexHfSH6X47vUW4PFSNLRfFHiP3YmurFPmnSr2CRTGhudbk4v6kr4TSEgSCT7frpthTB",
  "key15": "rVZAQfXzHga41V96p95FaBAkW5Ch8HgNe2AGgKPRgmTrjjJqZeE9egE1jPBfMGdVP7hg5wKZkqN7qt1mqSf2NBZ",
  "key16": "sNzEHyf6cW14A5MzU7Vw4JGwig5mQF8rwb6w6T3RtHZuMnNnE12md3BySmvPwkVriscH45996Lp1Wn48JYvs2mM",
  "key17": "5bbbVpif1cJ3h5gKqSpswyif7fGrMNhwDXb9ykhpS51ozQnSoP3AoewtgC5SLbPJh3XBPZ5bN7iCqMcVZgcjEhYw",
  "key18": "3rCKbuExU1fRsRC2rsvTxYbss564wgvTazCw8qG4MiSjjbwWDTADmbxZY645J1gqJtuEKixb2sT29sU28EY5tu5V",
  "key19": "4qRzDc1xFqhPptNbKjutWBscXGeAp2FLLXLwzpL4oUe2GrXjd4pvayu1N2aR7RtCmMK1BUe6phbmTLdix2uvnXS7",
  "key20": "3bAAY7NKfFS1KSLRv8xQBwGrGCxR2ybLnm5Zy2nx2EdUpnE5YAW9nzYG7oDMsoJwxYmZ1pHMJd1XGEX5KegqMvfH",
  "key21": "5Q5pEtby4Q2E2xRbZXaHBA1uz8sYytw9mEn6PC6HPPaVpQ3NpQLvjRCXtEKiTkf52SpmbUXACzKuZz14QFBz53VU",
  "key22": "4Ma5ZwKidAW6ck1r2aQ1mQjxzdxyHsHmW3o8N95Ve1gyPzchTUzKZxEihyoYDfQGcxeXFhw4w3rPzEjfjiE8Vg32",
  "key23": "27edpGs34pj2sTvZbLyziSNzdiHMycvHTnvoMeUiivWXEXGcQP7kd9vBXef82Jvwd66kRFsUKzEtSzQbAWk8fzrU",
  "key24": "41hSVasG5VwkugXteN5WAxtx73UmUvZXyo7T56tV7panubU7X5YbDiCpwyVzdLieUG11sA93BF1WBdPYeD1z7G23",
  "key25": "4KXKkwkEm913UY7hEHrKG7e4ZoDJoRcJMuf6YkPBx6rAwCgJzsy2EpXCQjAG31SuncZKZjgkLAYSc3TqmnnrHVjk",
  "key26": "3TB2EZsTAbjgeNsy9TbTSKNHJ1eQ5TndSLsQbSW5vh7Bsg3RjKQDACMSdWGjM6jCVQHmPW6Lv5Db5VqRg1hfxJR6",
  "key27": "5Hi39Ue9LU597ALPqZy8Pr5N1N3YfAmftxu5aGpyEkUNuh9sBo6HPpQnpg2VfzCUg9Wz66zMdxnPW5PkQarFVmd9",
  "key28": "4Gcz59bBTc1wRVJeoaWqbxYGQZwPezKB7ujbE8vsVRM25bq1tLXceUU2FevTTzt15fbHnP4h3Cn53Hd3Yv4Kyodk",
  "key29": "5oPvZJU1CtUhvGLhK9dyJztk7C6epPxa94jyLbsStLraMqUsVDcru2PN6NeeMMzPheJAetzvCr48zCFNYJxmxFzV",
  "key30": "4uTy7LxmWFS6YWa2PP3dL84CxcRupJDYnnFnLdrsXhwptBgPboTTjPtZRYLu7wj55KaDEyx5DvjLyhZuFp91TjTi",
  "key31": "Af39BeMUtWDLfBAaJ2A9ZjWGQp9nKgBkwRTgT7hhzs6autGyEwjFY17n6LhAW4JzYsT1F4HvWTvESesbqQ4hVWV",
  "key32": "3Tya3iBeVA1wkBrSXJciFjYCBsmH4GwUXzPibmhvxGYTSbL3qVfhZ1PDwkyPvU1KJmd5iDisCi9YJ38nnBdVg8Xa",
  "key33": "5eX8aHSKMA9tUVmbbiot6H2SiMTXWAj6NXoHBDdLVDjy1pcgsatojMXXQaLZp2YWTSZqPcbfha3WpSNJwN5Sc9RT",
  "key34": "4xieDXxn5GbNudH87XTXhFMvmUTzZ2TYovUfc2pbztYbLgqowRcxbsczGah877vKgjkMZ29F56zxyyNutcsG4pu6",
  "key35": "3SmJerR8QPJBnETRTMTJu4fLk1WpdhjBuKJhqVPrRUD1NqCNH2Xd38h6YZzSxPnRnjS7Hgv4KDFAeq865CCYZQ3o",
  "key36": "2CkpyXEzgYoKE9CErfR9mJUB8ecq9sBJj9JyJZEbj4XB4oQutdRtyWJJAp24vr8yAfWnYZAny67iN5dpg2VNpBb9",
  "key37": "649sTdDyhDyLoTPKVZ2atxUJ1FftD5qFyZNyJ3KwmxKy7TQk1qNMMCCHAkCBp53j2biytNqKMqT6Kj2gu2H1CnmJ",
  "key38": "4Q5ypokLzcPwtsswkjXfBRH9YP5e1xGheMPDb3VS22H8JMySVHxboXsjm79mWqxWCLGpStTr3AsLZKo7F4fCW2Un",
  "key39": "2TAy9f8Ns2Pv7UoV9NGNDyDryyQGDpDSsnYPzoiLm5RriK7EWx7DfLsaazEsaPVyD1PHEy3fAfHB4DYd1qb8nXoT",
  "key40": "599daezUWmM8nuimH5jgi2HBzxTvb7TS2gUadJRjVS7DBPS8cxPtxuYbsJfhb33Y2ukS16A8pohrX1DhjQ6raViq",
  "key41": "5QFWkmB9jovKFExdpD51egon2y97nZa4NJ6G2cJgk65rPGCzzcsfnaURnBF7SRNkgZmaYDFNDuncyNZUQkQrZUEx",
  "key42": "55hJeAz89EuZpXpuknJKw6MsqmYPf3wvB95bgkMvec2Lx5qMvJj2DFuG8ZW6ubcNUJm4xvXxqkNKZUXjZzVALKAF",
  "key43": "25mXKaCFu2Xoan9BA5hwZcuAuVS6LecN84AetEJjANPAiC4qABg1zTUQ9fvjvyA7cxoBkn6ZBNpDeajbeiZZsZbu",
  "key44": "8HXQB3gCuzKoRE9SeJUERfNs8uNbuyEM63WkaGCAEY9ZQZqpfiMpQHnrLJocxMbsvCrStgwHqhzLxYs4narRwxQ"
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
