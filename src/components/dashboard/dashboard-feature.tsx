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
    "35w8Hr88z9sHwAx5h7gcuqr5sTbzraCh9MuFJtpVuc8ssXx1Jw7FfiWCM9vRKMjB76eJXyKxWZVpQS9ij1bLtXk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nC2rn3GgUFpGxXkeM4QV9fC3rR4CJKhCA2mqt8fppodQQPxtobbQP2nFc9CyTStBFDspSknoSsXPrPAHF9oNMgw",
  "key1": "4KLvoh9ooAVEgHrvYwvxEpH5dMoRfSBRg87jvKhUHNgBfwiQAps9JD4VvXXEi7tbhwCYEjuCpc1Ru4FWu53N3AnF",
  "key2": "VKXrQ48foF3fMBXVDWdvZ94nDharUhgPJUGpBRbsWenp4dYjQohzdasjEJ8gRzygTwxidCVuicveGCf227YEBSw",
  "key3": "2PmFbFSowbvK6PSZFGU4sdJJ1XdirfQ35MeEA84XP2BncJ8NsPTZ7QGhDZeE67pRbHEPyvFCcC2Am9z3d3KjZF6g",
  "key4": "2tM51BtBj8j7W5MxNeHXePGT5jY7e4Wx6w81WXDyjPSZBBSgwxDLzrCMf8sLBFUA4WARsx5iXvCkq2veWTuMLXQd",
  "key5": "4BJGSWaQK6GnrkhyYrM1Hs1Qyfkwd86Nb8GPjrDwVeQVNY7UViBzhNC9CYEHzZKT7LnERH3vwQ9FU1FJf8sSsxC1",
  "key6": "TiVc1wE4h9wJ6eEnvg8n31vwbYFuajCgLWN6GjP9AcKAF9ZPG1SJw6ihJU3Dv6kTR8Eu61P7u4N5oWrZKXtXerP",
  "key7": "3LGwwDVBf7tKoN8vzq3xPw2XvoFnB3Vd171mduJnSimhv87hsXgvgjqDFECVYUr3pAnsJaNmfyrPAK6B1paUpnXJ",
  "key8": "4f5bkARdQwWz4nFyphT8zV2X1ZH5fXW63UkdWHLDkzbAShk6zdqmYotCUQZGeNxfmiK1Yk48RGosGSaDhsn2fj3Y",
  "key9": "3guJZoxpf689FHvEsuj18qHYhJYSyyATv3RwkpqMbZxRb271YdXgYiXf9Uz9269nQh7vG4Eq8jRtLabbTFErjboa",
  "key10": "477aw3TYSkprF7P2QmbgX7zoAvyau74cLa7FhUjhHYJWKBhjibn9e2XxwUeWpwwEHXdrtLxbLztZSs6VAURzBLqi",
  "key11": "2gvk4LtuYTt9ppnJgQhsYFmbgiGonkEiDeCCEisJYynp9revdsCEh2yMZ98cAPJmzoEYurYEgcv9WHTonpAPcgyb",
  "key12": "y1YDYhXfYUdHE4xvgRDnaan6Me2c6p8zDwQmXZDgMuTk7HGt3aPMr4UFeWyM9YSeTXAeAj5r2VF2BGf81UKhUDT",
  "key13": "go72Pyg39iRrNV15EKdF1KjvToJQVnsoHeyq6h7EfVE2b8FNrpXR8sS54dGHRrNocQyYQ2DQq1UaTU5ubTiK3HX",
  "key14": "5uyY6sww7Dstm2n8qTaXGKZiSiMjUZLNFJmBA9gdoCvc4NXbUmyqScedoo697p8fdQMKvy6iexi4oe714i5K8cox",
  "key15": "2gzqSeaxi12NXUxNnEaLaetzRRFp9HuDgyr8XLG2mXbP4fTiLXzxzXWZuK8bJtJpLHr2b9f8quEbS62dUCy2nWaX",
  "key16": "44bJydswmgaV8JMh5auDgFZVYBVFCgTDB3cfGyk9reQJdHaqtAqCFGQi1437e4LoiHmV3Bb2jax664w3n1GQGsW1",
  "key17": "1zt6BtkTUq67j8Fwfy7N54swJZjBvmQ1L2NXkY4ijVUiSvPpto4i35BcLphTVLhpq7TbS4dK3RnoxdXkwUvFDzF",
  "key18": "2zqxxqqNKfspwfZ1ZiNNRBvChZQWBtQDDTYPveLjwqE7gBk3TCqL8v9AUXSkj4UgsWhfNaaviesCXuYNVMFwczct",
  "key19": "Z1MXFnmSjz3jmf1EW9NBssaTcoMBr1EYn1bQXFBCm99kXorbKduHVF4Jvr4MYyMUuvKWPy8omvTaYknE6dGtW5r",
  "key20": "3mdSkjSFnHqXV2v8hChSwE39qKdKhk1cSg8cTGvwshwa2LtaEE2nhDBV1Bj8zSLKH7rZmo9vum6gUNAYbk7to2mE",
  "key21": "32BodbURERrLczrqDDxCXF7NRhYnKM7t8UpYvUZK8xbHuQasAsdJWhjmktRQWGUXc5fG1sWJRevoQWBbLBPbPpGr",
  "key22": "58Z4UhjCTwTL6Qcma2aax2H7kZ9vgTXyaTmRfKPpNQN8NBog5eKCfEEs34HS4zifgzJUvmavRuqXacGkFna42tGZ",
  "key23": "2H7P8SGFS6rNWgCjnG5eAgKvGZ7yqo6NiMCFN5SrbK4ecwc18uxDE3S2E9oqUgLkS7AAtW4ZXtZxuHDXZ8ZavBnd",
  "key24": "4SAm3gyS6QqJjwqBNFLerr6XLedY45X7bMZuguFmFFGp3z9Sf9ynF1inFVR3gdCMm2cd1FVvmWr8reeAUMR9J32s",
  "key25": "48aXU6townfzpL4aW8FjomeciL1ReYfmhUKbtjFDtpNAJTqvW6Qyc1LL5yjLNHyhTMiXPinziyjgNLbv3g4ybe8h",
  "key26": "237VgAYwDi5tr3JKJMKvxo7Mvv6Sd7tK5pCvZjDKRciyz4zc23K2LcVjoKvDHFeECwHcbJwPwnuUob5rZxy2CqCc",
  "key27": "52EztCuba62tDaWVNQeqsqVrUEtcZ7vS4XTeJ9MUJdnBWL7Eg9V1Xft3FWRBswwy16BipXhU8dhL2EidjYDrxonq",
  "key28": "4mwxYDBabytDwe7PReFYakeDE8cZ1rw5VF47rdZ5MYK5mAm8A97sZqLzCCgAAnvJ7evu8LkiuL3gvWnMyuR2KPbc",
  "key29": "48mUVh38tfqD8sfCL8kymDUVwe3HuWsuWiWtNoedGy4RSSMDn6ABuLQ7kYqr3rUnaHiPVthZvfX1bGWYBoEKaJV6",
  "key30": "cQT2b9xLZVKJexZyibdGCLFsSTeJURbZUCuCdMwNtYsJQd3TqNTGzyCGV8kgze5rESPmJXGNBh5EuqnJJvmufuj",
  "key31": "qd8XjWkYkBf52pWySUrT4tC7L3MVpb6gTxaP7B1TTGRamNFoCq2kGepLuoF5C6ddhcdd5orCGEFvufR2d4LWGQN",
  "key32": "4szyzyqNkouCjZgp4biPgNJBkfEWrDJM1koXbKyvsRyWT4KvpCSzyhmfGceJWNji5bzzA9U3wiEaDhab3K7tDo9t",
  "key33": "2YgHYueQJv7egQY75gEK2xdmh16zi6X7Xqqje7YupWjLKTLhEvezp43phkvQDs6486sRAu7teFcJQDxM581NMMAJ",
  "key34": "2Vj3M7TpRauDMZX1EtMgri4j8pVAXxbr4Uou3SrFnGsCY9JYzHH5Y9Ds8tgFNt7t1hZXdZ2LPruXhBxSgykGqCgi",
  "key35": "5h6rg27A1sQhihahfQRs9oUPF19apUsBHtn46X1k8MvQcJcQHVu7nHqUEAmub3igwBYe3Du1KtCgjZkY4XrSw1J4",
  "key36": "4xC74Hmd2wgN1KB9gDN8zeavogeDUZfu6MU2rj3WaL8eYDcZvLxNgwWt2giYE8TR6QjyzA7txEfANc2Vw79H1WGd",
  "key37": "38wnVfmBED7Z3gguQhub1tmNMTD1coRwHp5qM4VFZkYyqvNHhhhtZP6gxCnyfea7qeXFr9LjzoJB2PFS47tNvsuG",
  "key38": "3hzWKzg1QqX78L21Uui96uGD251Bhe9PwuQ8XUbfsJmhf4f7f46KaBMwhrpsWZcuPSZZdXfnzb9G3o5o4h22jGdw",
  "key39": "2DqY1rrp6J4g1rXNXJpG2T6nnD3QWaUBKYJib8VefXA9myr78k3xJZhZsGwJjMvBtVjtgxiFxoiaUH6VYxffMjyw",
  "key40": "5v21WHsE2gmgiHPQhmnL3Wn58AwZqnP8GwK65Ti1KwsQbCqdPY6FrjbxvR23ijiSArXK5b3v7QquJHzqeDXqvC6j",
  "key41": "3gGZZyadLrCoTiKQzzGfUqgfYWBxCJMWkqmBcDHF6JcAJcpzrmVDDx8Sr2NoaXkWJGSQMm9XqTgKS218uhQEB51p",
  "key42": "4ZkR4ghrfSqNJiHZEMR6Rne3GBwQT23UEkXJGwUKXxsNF9XMouHBLyM1EzMfaq2cJXMtCVwbty3zcSxwgjqCa5GX",
  "key43": "3KEKupZHtWa43pFrk9u5eY9zFoFNn8MMBohQup9JrzMkCSxXb9Q6m9f1ZZxb12YgbYnVLEhuy8nAgx1oK5nzwK85",
  "key44": "4byc7e8uHoGgHpo2RPfjwHFpbniyPn4gREtFkSi4cyuzi9hK6H3aK5TqqezRt7y8muKGBHeSKeSHDFQCFczBrULa",
  "key45": "JPi7WpwUFQY5GhAyXF19LmE4rSppHmcot1tfkzf1ueUgijBLqJCqSHdGktybAWS3TUJr5doQvUTATyiyetPUNNm"
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
