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
    "5Fb32hMvssueWWaukAdcbLzJhyPvuYU2K7DYLM8ixABXXH6YNqJVQbavB1RrE5fPCaDtYma8xAPPhGawhkWEx3pH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yYryToJYJz8TftFnR6q6mMC86mEwUjxdtEYmFCo4UYUaRaorhTdYPLQaB64MBnkGf3EuEmhW8MF4KXWPJcRbyFo",
  "key1": "33neG4B8nFCwfh1Ue1gA1uyKVsJm6UAotNTpSA38heurLVe3U3dG8iNY42oDgLFrYcACUmkHL3EVZHg4gTiPjRjJ",
  "key2": "gYs4AyneWy5oztKzajqAHEQqgaNxeHuC9iqrBAFeyFXht1RXPz5Gojz1iiV2MW1Gvgzzmx3ow5z1CeNaMLWbEDu",
  "key3": "5rmukNTHoYpzJjXt33hzVZnpBxMEkoGkCeg6i9TkSjABsXa3c7PL4rGC6CegL5s2tGZZgCaMpUDywqYuPsKXFGVW",
  "key4": "5sk3zQSCQSRSu2hLrTNutVzHr6yfq3DbeJ7bBn1XbeBSwXPWorghhzBvAcfczTxeEGkaPkcUTAUmt42dfK13Mt7N",
  "key5": "2RWapAwx8ZvonL3wHCB3E47m2n6afSMV7AKJjhMjoZFmrJhUBpbxD8gi8A5NxekkHFa1wc9bnXssTKATiiEQXVnj",
  "key6": "5HotSry2V5AkqEnczo47zp3sFXyj2CDVHaF9ccz2nzgfuwv4wvf8B9Jo8HhpxWve1PrAAMy8pA3NMuHe9ZpEj8Dd",
  "key7": "tcscZLJ6AvpSAMF8TLTBKsFqho5o4MntxFFG1zM7TWdRBZ2jvDMdz9DUhikmRxuDznu6LaEriAya2mPGqCfCeQr",
  "key8": "64uSo24jwFfzY51hVvRFjwjmT4npM7EzMEFnu6anDr61NLWpVbtdz1uvBB2HN2me1a1MxgHuhYfxUKuzqXtR2kSM",
  "key9": "4nwv1EYqdHhFcrq5ojvQcW6mhmQy5jGqaXzgKZYnvZ2BuZYNjLG9F6nXgKPmKW2B582YcTCxhK4o16jgSmiwoVWj",
  "key10": "5HcS6AdtcphWBCe9vKkWGEkNq7mmXt8mGx2cj49uz57Gds1DTdLtj2yuaEy3dNCTjo8BNpuN7U7Bf7mGU7ZF3xvk",
  "key11": "twnEcu4ZZwRPXB7LaKRoE3q4hw99rUzDRg8oEggK2A8utb9F8GP7Av9jnbaEqR4mJPttM3UUSnp9BbVDHpz7YZG",
  "key12": "2U6edyx75bGqFgYRNkqnT4ywoxjs2bXhwwfEzbjiLdLvPJQUQJHa7tingHdirgB9rfPDxxWkURgdqPbS66WEEWND",
  "key13": "n5TSwyAySbeaGFgBGgMkKaqS5jNE11jg6wmxZ6o8xar33QxPU6TpfgX39AUvXntqeJN7sdgsA5XtWJ6dE3q3rTu",
  "key14": "4fnfLpmyRWRBYeK7enb6Roy1NEhApCbrurL6sdzM17HtCQS9tpSitSvzL1nAABVgcwvmojUM47JtLWp7Zm4aJo9v",
  "key15": "64e3JQbNuDzCq7ASAN7iFYEPGspWyXUf2EtbacRRtZpAAZkM4fxMvtTHBNmQxNNAgevgts4aacpmbwpaqSW1divV",
  "key16": "aW36SxxQyXFgrAdVDivYqTvANjNMYsFEpW1XBCQMPrNpj1wJf9fwindqiKnLoXtEWQyC6NQdtRkipZJ695JdpW4",
  "key17": "5cUv5mMEtntRYuqb7We1aYxuqV7eGhXCnJ7qWmNWgtW5aoNQ7uLK6GSfktX7PJtpmoUZ6RPeQJYh6maRkhUW8CSf",
  "key18": "2yEC4Wzjb3rFUqCBMru1yAN1MphJyp5HB8TyTbmEEojJiGjR2CfDmkoJinKYjkjj7QcHUCqVHN96zgFaFtaSYmMd",
  "key19": "3CJP25m3J4fuPDnrP2bcEJTsEVmEsNQN89sQdyVzhMUWAfwyqQMNd1sEjiHCkcNNF78RBio342LPSc5me78Soq1q",
  "key20": "3rFXX34oEUMFKjUmrrpz85aKTPF68fiS3TtiPhoonBSwsrHhB76xrP15PrQwGgpaq29TNAikYQaoZPzrrkjeh893",
  "key21": "124KsBwxYdenJr3DxLkFmCKnwJDhnBufjxyQvkooVVZPqT8nYR3mevc8RKB6jsBRuG1VEbwddLcanUqsLRTUGMmw",
  "key22": "3tPPQPpY4tn3ZNssYtadWi1JfMdvPg4QsT5Gx68m3TnPejKWHjsfYq9a3V5Kgfpe7uzrPSCtv81vfWb1vdYW4AmM",
  "key23": "5exVLUA5J2k3VFYnQt8BGQ58nUeArTTNRwZBUu2id5uUa3RUsRZ8tA7xr9e6rGMT2yGVU24QAeu4q9um62Px5Dsd",
  "key24": "5L5VgZDvkVgPBSgjdvVxgsvgC3nHMwGqGGLyAAQ6cZAhPtr7sUeWAviUHLyrTRbBZ7vtexTQ7VMBTFsSbbewz1PV",
  "key25": "5npZBEF6X6LEwdsRy2Rxd6tejU9RRCjv33iu5fyvLWv4gwNauRRKKzHWyTknjpe2wtfnDTPtGJe58SsRHv2BNbL2",
  "key26": "4LTnX5oAe5Fu3hjWWnqXfCRyGtWZrstTn7cpY338DcJ5oq9iKa8q4eUxSiREfiDkz8La6Wt3VXewV3Kcnu7bM4wb",
  "key27": "62Hzm5bzonWLbj8RcaMaD1pX49MadRvg2xaMf7cPnSfjJ2CnyqXQoKvbz9QCGHShivkWHs15JceJR9nfRgwXHCG2",
  "key28": "3ZAL98qGXW7FCFoD3Z32UCwocz9HRpWRAYbLWWTdggL5fPy2CNiPJ63vo3S9Rs45ko5758WBCFjTwF1YKk5F5iY7",
  "key29": "4a7B1CXbPXoz8ehJu2MDBWTYL2reHyskEbCurWtBVihEPwqDkX2oQEJob3JYYQGVoToSfTELgbnb1n8oW2ZNoruK",
  "key30": "3CVMM44F2JaM4RXUVcgVRJohuSCPZEcv2HyimURCJqWDfBbmBvFHt2m93uBbxR7c9AqsdcYaqXejK8VhZkivDyQ",
  "key31": "4jXuEdKAiftiEUuKgXE73YHva438KEX7jDzuZnjT2FngN7x7dNvMSXPyQQkcaBjsyXBQoBskBzKqy8EF9jhbqg4K",
  "key32": "61U8QSkmRHTko5iNbTtNKfnDnJbWVAyosXHSJ6NaPzCQnECg5XeNXiVjXn5CEPp7GmLjqzikHLA3QkvAVp9ibfVm",
  "key33": "5jqbAZK3ugrZRqegyWsCENZvmFqm9Gn7wQ4EWzjRADyRk1mPEb5YVCsPeB1HmGooHeajk4AXbQn5yTU3dfCZ6YXJ",
  "key34": "2JXyGq7HoiccTraeU2ugbHAanERhhgJ3vYYjnt5rWNf8KBvXNUshvGmCzrbBDBPYyge6vd2npsEnhWXBkZosEUJ1",
  "key35": "5PMcg8cEdvzSrEesyvRc3HEEwMwBzPZn3Qgkj3UP5y8pG2hZkHxMVhYunWYpMxUfnpcLVr1kDDTANBTE7dVpYsW6",
  "key36": "2LH45nj4F6FUz4nRTYnwC91MN7SNYhat8QXu6Gd7qdUuDiycAu2Smp3PNeZcjNHLfW2vjVBqkF7xSw8HMm4yS59C",
  "key37": "4fTnar8kxf5FkDr8DcfeWTJJcCitBs4qXsJeuh7J25im9RkimDLRJXoBH4xhwQj8Fq1CqttxoUamydNxC5UpEdcB",
  "key38": "2RaV8aoQQqaEtDPizu4sp4x4t9Ap33uZGezn9axzVMe6u1Kwpw31nLt6u7aEU7u3avDHkDF6rY2VsDMiue429a6c",
  "key39": "25EXyomwaE3wM7Gz8HsHquPSAa3rj3ffzNUppyUZiLTtUGirJ38qLgz1V6MdEvM8UTwXinSoo1xXvoKUsUhbr1t7",
  "key40": "2gpRqERpmcybaZKrFbCcfEEQCPh9JGjBnyMXMfkK6RNmrJN6ptFi31y17Hbt5coc6Hs5iugKkgvD6Qy9iiqihadN",
  "key41": "2Y87epb7mDTyRpo4KL64znKhcY8bhGXSoppvV89wSGWw7zCMBYtUpaRdUPbQSRKRwB72qTmpkVd3dZd1jPqfhxQP"
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
