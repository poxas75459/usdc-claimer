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
    "52njcwp5F1FEEuQWehVK8NeV1XAqMezWYQoFe7Me7oZWN3xbuQSXWJd7w54HAm7hN2612wg9u3QEEYokLdo15bjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ww6AfBkfgBh9UKzTxmPjcocPsvo1kshnDDYF89t7MYkoHCE7awFnpyfrjtacZLnBjNXf9ZLVaRt1ii3U93iqboU",
  "key1": "5FyAHULkyRk8UH5LvcPGYnp3EGBnWDs2KmY9LfrGcuvabWeK7jdNhzAGzTxKYbnWaEofNuTnxw4rf6t5dPRNFf5p",
  "key2": "2isNUYNHBaKUfSHFwELGeeYkzK85FkVAgsxk6JfyjRd5AvWQ1emc9fG8oPE6z9n2BfLn6WJzScBgCQK6TZWfi6Lh",
  "key3": "4KHbPE8mXSPP5QDc2qCP5UzW94QEmRBaBDS14hkXTpFuuKCiE4EhmNzLhXurE2cuK3esjZjNVfHF8nJaW2R4D3uw",
  "key4": "3JevEsMSDeACnUqKWDLKBaU2Dgb245rtNRX9DRPcfbf4QnK4MMwxaN8QmRxb5QdENG8RZ3JuT4fj67gnTGnqNpWx",
  "key5": "eW1Mf2qHbKMujknBG7fDnPTWQDnAtJuZt8Br9P2xxkUYnaPrX54XgmqXLkXXzoQ7jqtqsnT3qy9mmo8h57kKssW",
  "key6": "26EwthRBCmCTUwYrZgJ39NswUT8f1XVFY77PDQgpqVGusiHSxgp5LrWSZqM2vQJjgyo2h5mcBve2RSeA4BkDHK6K",
  "key7": "2xAUiJf5iL4TZnYyEHr1xuhc5bfpuzAx4VL2R3i7oggzZ9mCt3itwWfDHpeKbpqy8YyXCVZcPUb7DjGKZ7LnZA3W",
  "key8": "srs5voyCkVw25pwH2TKdA6ttqN3tubMj71JofFnzj9aPVd5sKZR5CwaGxov2ZX8Rbvymc6efbLXWge8YCUtQ33i",
  "key9": "3BQZRnmJftFkbpGe1erpLyjJ9vmKzkXAMaUKmzEtfgEiLYbsLCYnqja9qJiDuuRRNhkvpzQxtpch5dnWQNj94kD3",
  "key10": "27i4AxfAoDJKhcFupLrAvL863fEPgqnC52e8ii2oiTGJAF7rcyWxrTaM2QwkssDae8zNgFRbmnL9LGoc2qxR4b9j",
  "key11": "5QFn6WELWHmq8PrjPH96bqCXW2rj8MgqBSPuvQjj4X3Aih3S2AE5JaYAjvDWYHpCqYRFsD2jtFso3iPmYRpSsJj8",
  "key12": "2D5QWdaaXwYSNHcF1Ec246YGvQxRDaXc38GgQdkGyVqbevHyitfE9kTpmu1t1GqKcDYCv7wQgnEzZen62PmEbSmy",
  "key13": "36YG6uh9Yp8EbfxyRM126izPKqS1TzuKwk9LFBWybscXPuCy6WGeuWDnWfsKgkJhn5Ewjof1w2TWjMzqpthwG55f",
  "key14": "yHmkDiqGTngyaHmDnctXFK6PzfsDt1HKpmLMdSVPyVa9uNRSTgTEprFb92EgKbynbUspcUtrAnAo5hW7djceRSW",
  "key15": "2WRjoD8rakG7DENzTRWkoZkBT6tKJ5N6JdAUk32uV4KvPS88K3G4R9hSPpX2MNXQeJjV5kSY4VSwQ1oFchuWBDPg",
  "key16": "GNbJEt9Vv7HowGNvQbnjpuHHcUmJLRdCAR7vC54YbYmeB8agL9irPN4fbhRfmhrVX97VZaP3KQ1vt8gSLWeowPp",
  "key17": "gCHekwZT65AMWmEuZA81zak8D4GntZHkBT3Tb9yyL44q6jktSHWDhAT6cMvG88Qy1MCAzcQCU3ukSwADgmD7mwj",
  "key18": "3DEHveC8rAXzaDAExt5aMwu4J4GputXrqzgfTkFHokgam8DHemG68JcRUaKGTYBZuBkH4aWB66tNYsVpYMw9cKKJ",
  "key19": "tAA2ft4hwXRCgD8rPTQauxjxipCy9ZF3aqXJF3Xmw4kZa6V7sd63USY9jqGAp8jtNe1sAnDw8b5s4oeK1r3vdvG",
  "key20": "3uCsGsqHJxu7dS3AZNgtvkT7UNLLxG3EVcivyvF75xEpvwBvfjGLHuCoesEhw3xczbxdU1F9gur7UvQyYGTatC38",
  "key21": "5KsVxUyqq4JbBnUFWhRCQaoEnFfM1KFGTuYGAMxWgJcKk9azNud8JfoKtAVKzzSAMkPH1wkLGgcDkqESwzWK2k5i",
  "key22": "637W74utiFcahgYmiSsZB52jxeF4eN913aY7YVK4Zmfb3SqsqsR4YvGMEyWCoHKLzf9y5vcA13Bsf7Zni5hoMWpP",
  "key23": "4SZP2nZYm6bWfmaZpLXhWU3wT4wTYh1jBnsvuG6tNpbdb8wVYKqdGue2JN8QTKd6TtAw68wW6mCMMk1oefFQhwkx",
  "key24": "3YHy8mwc1CRV27hy4fRn6cyKszrJtQbgQwCzab2iS58jcmMWCK1rLnh6XR5nmQV9zxsMDWjZ1N7iHAW81ADvhrrd",
  "key25": "5xs49jR1JCcCgWLV1zcuuzAWxa5fpNxLRC5pD3EnXcvius7RpCnc2z7wde51WRhsBJKJvXZKAX5MR8phofYH6y9d",
  "key26": "42hzSXGrLAaCbWjwMPFQQ9jgWTqUUkCs8QVcU1d7v8BpwfkTL2pAQBsdouk5gWBSWtrnBgYjrykGULS21jkqn2ub",
  "key27": "3GVLjj4r5QnEo2qLYeSutdbPCShRDpXhV58YUfTwgbnPajNB79H11KJmii92SqhYLsLiXLk23tJqEBUjioBbgG3Z",
  "key28": "ZKBEtYNMJNe2PRjuPegux7TRLjVKykU5rQR4FScRa1s5yfQo9nNnSoPdpKX4HmJu86TrQ74uAKuEVuVttEbrCzb",
  "key29": "2x7wVBfjvnFfsy671Vv7p31FaSU9Zyt1AM9uzPCDHFCRuQKw7HrQiMJtE3dQqsLVT6MPCm4hPAPYWKWSREgjrUu5",
  "key30": "4nWEKfzm1ir2sGDdzeenwjqPKGtiLBZNEkENLvfF8yHovPvCs4vCCFepbEqdUFKRndSjt497aTJBp1fSzAUCjkJW",
  "key31": "imvPmez2ZC3CToLjo3yitUdLtYF6LcepZPHaYxZYnYJWs9bL6o7e8FawBtjAXsrrjnWKMcPsQWhsq3XzcP4zNwh",
  "key32": "2emgoMRPcNBn4wjMv2BooMGh5LrEXwM3Uo1q9ghhQuo4QoXNPrgA9JLsi8pAtVeKDDSGRY8L2eT9uxLPPRUC48zQ",
  "key33": "ve9gAXkibwjwL25DKGWM9LA5tBHV6CaFRUjHSfUF6V59Y51KA87E6iYWsi7bj1ZPqPGY2sd6w9XSCdnjXaziiVW",
  "key34": "2XpFdTnAkCm5wkJLoXaRFNqiJXxrA4GskaxhZr7FUPJQuXCnVahWbFLqPbm5ZTPYfrq1ukK4XRd72TSv3aMPv3qs",
  "key35": "EGVmGsujRZeWzeRGJ7biT2SB1arS9YhXbLZVkEp87y7bCMof2zQNzXTs1ThkvwtXgwuFugznD9WMJu5EDfBEmqa",
  "key36": "2sE5MT44bshdvjU6XmziPeYhrq5bsqFFTFuAxJVx5oFx3pKELjksoJmG9cbKBPhkL6UyDLHtEuBzLgoDpBQqLw74",
  "key37": "4TKK6H92AcZ4u834ZWuuifMQ8T7n3w279uHhfRPt9a4atZyXoEymZoE6ttexnbvuqyGHNtdSLcASMqNy5eAz5ZDt",
  "key38": "ZXpHB6phZJs6J9gK8ebJhq5VAxRgizkPd3Wp5CxB1MLy1ANbRg6cadnjKV41AQPgWvxRgehguS3wVkotfQHVb33",
  "key39": "4TbLBfWLvsMJYoACLiv3SyFizHFJYGCas3QVSD15JYVYoV93zGvaHVzoVWCQdUwcjEBjerGgcaYhZP9swTxYp8SP"
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
