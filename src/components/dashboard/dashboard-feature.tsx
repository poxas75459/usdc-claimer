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
    "4YPjuv4k9rXmcd6M9C5sYgKrs4kwRQXa5qSkjFZEJWsgmdHRfjpheE75YjDPkp7EpZUFKfnS2cF61d3kbGPmcHsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fFgA6sPEe2iAXdoXYCrupyYNySQ4iCADj2hmuzWH5iHWBdCrFEmzQDNpXZ67tr2dP32v1n5teHN1vjUBmvzdMBi",
  "key1": "4b6nkei2ivjUByo9xR2HozPuyPrmMZmvaxoLQyrY9AM7Krk6JBhzfHJ55FyUuG1ffqeC9JMwYMZXqTEVu9RjFJvT",
  "key2": "3kVf22n1m2hhf1xzkRskvhyMTWQyupr1WRiRRdVVeY7h3wSmyK7DZyT8N7kHbgpmFFwy49AVW36Tz27sHs1JkGTs",
  "key3": "5NdhHAmBMxgfhcsB9QixzaNMhuDviX7rDoNF3H7wDtZ8CCmDfhf4SE7kykQNxLMYsHwC1oDfan6thM6KGACtqZrp",
  "key4": "3tTFJFxddvDmEVo5ijRzrzYEVkLmEykdGoJbEKYHeRcxUbir83AY9ybqKmw5eSZAgez7p5UnVG84Fxs7FAF68B4X",
  "key5": "qe2CzWP6eahzJpizk7eEFR6U9vu23ag32adgpfzjHfvCav61NNd77qMjVqWR9uwPMFXNuuteLkeTJBJq9X5xnKX",
  "key6": "2udq1QuyWgR8cAPaP4oGQjDEv9K9UbrnR1d72M4TJSdrFtJUbJ6234vU2oEBTLcDbtWkVqy4LYdMF4KwVfsDv9Xv",
  "key7": "612vKqeKvhB3nwr4Qwx39YfKZ8q91jKBQQWpzq3rDsFZYnESLF4ULFcSDsSLJZyR8zKBmobnogrv233bS8fAebUV",
  "key8": "298hEBkjddRa7MEUDRSAaKwvPMKRYUWaG4RKwjZyFGyXrCRTRzgiR944hHig5WdMXeh2YfEwjepUmNnMWHqdn6is",
  "key9": "4tzzsxYXp8kgu2dsX3muz2dzVoA5iwMHsaQ8pcFSEx6LYe5He9qpxvQULjTZ5aoEf74RfS8E2w8uxmco7eUYtwoB",
  "key10": "4ka8BV6u4nNzHvQfan7Jb9VrNQd179dTX7Ymu4rZ5c5hWkkYBigX3dZ4D9yxs44RLLuxqN3Hp2YvLK9BM8mRwD7A",
  "key11": "352tptXSFxqwtDUzoUURsiFGB6Q541rXGcekNDd8UoodPLYhEoxRnBfAmsMFLUs552B47xAUr8FhfyiB6LRK9RJY",
  "key12": "613AA2P5esWFH1wa1H6Us6oASZ3sRfiX5DucFweSo6ddy9vfTa594tKbGFS7hVgszqpzAQ8btqhTTgE15j6QJ6Aq",
  "key13": "4Cu2jJtHKvvbU6QxfBoCMy7GDaDjXFNBFxGXLjxSk37RTknH33Low4ddh3LRucbzVVmJZemJmHYyZqhMPJeEu4eY",
  "key14": "5S2cdF4pQDM9LHkCqoLygkwRSDEmtVZWFNGg1bYAgC87BhB7GEPZtGj8J5iz48KnxT7Hj9LhrvdoghqUk3Hgp7SS",
  "key15": "5YKTE7oB8zG9rRnLzFECAgKMEn7n2xnpr29sSPK3Gwvzfdd8LtmFnQ6PskzBhg45g6LA4XrtF1bKXBWWYKd5C1Vz",
  "key16": "2u9NCx2WRfLx33Dd3WTiq1cck6QWNUmtZVizNC29R1GCLokMegRiVsZ92gC3zTSEytQRWJrZrsH8q4VptXw8X8BS",
  "key17": "3RTpeZ2tuaogyZdDXuVgJYPn8weiWsysY2eiEqMVv9VAPyrLPdRd3zdf8C83G2Sj1eXvyugP2TXq6ggs5KQDeo2H",
  "key18": "2um4nEPCzvwTg23Uvym6gc1QY3hpaLw4BjLiDqS4WCeWRWn3pvrNhVeN412juU2qUzmh5k84qzQUCPqwaAsBURZp",
  "key19": "4WJVosVdcWtFiQmHU6E7gZZoDuEr2K3HCfLqh5YfCH46wEMuxfvQukGKva2smdBfSbVDZq8vsW46Ucfs5d8Zh3Di",
  "key20": "5JBGWwgj73hxWNapPdjjLCqPwGQC889bFEfZ54M7gWnpubnZ2qNmErKJnLW7NjNuwgiNCiQ2W6reCp84rGL8T7ai",
  "key21": "KjvR5D5unGs9hcHgToK5A1aBEe5ePVgXE5VuuAZ4ojqzgCysZXFLTfgsuEMWFUa5n89roaRnZsejpxxuxziqsra",
  "key22": "tCAhd6bttiiQ4cCWfWSChEpqm5A1vPX56Dx1Bdtr1LLMHy51qPdG2YRQkymXKJU2h39eqoZFNZhvp5Lbx2ZeWZi",
  "key23": "4Kt7dA41LpbisW49NbMM2SbY8kkJdxCjEP9Fv7YiPqTRk5bzE4J6p6M3jPwQrTWnWLiRPGXqQKDL9HeP3doSejCg",
  "key24": "52WgMSAyU5UHp4rBQcTG9Sajr2R6mjKYiWpF2hy7r25Tp7MQg96tgZVXQrz4nMc4SjH8zCrusWU8Y11mCTjvDcdz",
  "key25": "49rK2mYWF9LKrP5pEF62QVKHENvhfMkraUnBg1UMEoh9dFhMTrxrL4i9huiVWhTrrzb6CFwxZZP634fBuvfWXT84",
  "key26": "5fvtPRqqWLHrui6BdLrMNgD4b7jZgE4whnz8ZBvi4b2TJaWYfJidQpS8xUsVC6q7nBeRcjtuPa5WJ1i8YNnQZhGM",
  "key27": "4sJovkKZyamMpUczUyx5fSENDKVoaQpriv1hHRS5XfndbXXRu1B7N589vnoraqygTC48dracsh9WWoXkN3H7U7h9",
  "key28": "4kbMic6EfxzeemdNkDD3ZnAZXo2H7gXuAvjxGqhMqC4onUG3rXJ1NgTzE8NYC4Xcf91f4MPRt9FhEXUA3h1EBYYz",
  "key29": "5rA2ZQ5KBREm9BUSXdw2fcbMfAgbR27NnPRsMLNZZhXR53gv3KKh2GDTxwer9Pp7wbmHZPxim6LezejJyhjrWWA",
  "key30": "4ogsseZ6ExgAmkmhbTPkDwRZ1txQSZNhd69J9bV2JaW3U9cNp8JThE8PSq6q9VmvW4weCfBkKLRZp3wM5M3QBx9y",
  "key31": "5mhHyBA7Jto52ZpDBF46DQ2AmL5ThMWCw21CGytWYcd1gJF1EAYYkNmbSXum6Xy58eSdBVc6SLx5QKwwfBYnUH9j",
  "key32": "MG8xjF9J2oKxXE3aw9e7DbrZQpEUf4CqGwdcqpEVXwijQPnzphsBaLdKzo8MHktpokD4bTYTAqzWGLfuEcPYHmV",
  "key33": "5859RyFnnhvDb2GYDoceugtjL8HxvThaJcUxu8eJh9g4ZzwKgYCt1VDm5kZN7KUAPrtzGxpejGtDJuwStmYdWw1Y",
  "key34": "2VunMHDTXzpN22oJhHWqfY5BkKcB4P4JmLsGXNpCTWgL1TJ9DFGRuFhTf1N5xJGvkhmQJzdPwyH3o8VYTozMCSpf",
  "key35": "4feceqGgDhKN39VFk9apEnzhCKjxdgxTsXLJhnQbeWNmdupyjohy4okWMxS2rS6pARy6Kqz8xKVrXo2SWyoaui5z",
  "key36": "2xAWLfA9r764WGSqv2PPG8NLWDmgeH1v6JAs9f1xs4MA1cR3ZijDFj2MwE2j2iBhgZbSU1ixNajX2a1QUU9UHhTR",
  "key37": "6YyjU2CdybByDodVW6dEqxNKptNFqHbJkt63v4Z6GCFy2tTLSZzJqnsiHSJ4xAYNHC9p9B6qeubqRtotPzmA6xF",
  "key38": "5oqR3WTq3QUgY77yZr473pv7iXFJDeunuJT2jCgW98rT91v6LPCjm67sexvgVwZbHwqqAZ5FGYSFTjC2iA4s4r4n",
  "key39": "3CbqDJC5Kizdbz5RUswPG1WQShEBL3KsNPLcjgbrVGVRKqQt5h9i2VNi54Xh6pPxRcRcw4tXCWnKy1wif8KmWSbJ",
  "key40": "5cV9vrmyn5xTgvsybK2sFRs17e7xtg3o8gbwTcHFmCFj9XmgJf2yGruAS9srEc4qQygTVzxr91ZtsSa1ri8vg5Mk",
  "key41": "57NLWKgnbiPkCoxfen2X37mydgnENNtEpVXMYaSD6YzHpuL2R4FdHwAWVHzz1wxAcG9AG2ZbrnD7FKe2TkJeaeSp"
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
