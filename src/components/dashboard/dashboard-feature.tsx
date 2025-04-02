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
    "3aoe2cpSNmYGyxHPKUJnBGR9P2x2h1wQAfjmqxbzt48Ju6twyVpX88aYYodyg6tAVQK7eRBQWEHu6J7XtR4eSHFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4BfKwPN5sWPfbzZ2My2XU5smkF8vcYER8V4LHa1BWexQuHiyHifgrys1f2wpqgB9RYYP9vY7NQxcAhmt7HXnL6",
  "key1": "423bULnr3J2pAjhoUXZeAvamb2Cp9RoaoBV5gRLUvEzZrr1D5KCdtkzsUVRwc92Tmw6RvNxb4aNQtUZ9KizWaj5y",
  "key2": "A1qWvMZyJPoQfLa37NHfBNeV7BKusr8bZQ1VKvozDTW9BzG3gxnodYyhX3QmT1bpGVvW7ini8ExMbeQmA6wpMVr",
  "key3": "5VYJHU9ptjdEJYSLLWCJ7vgpYE1AgNswCbkooHCwKGEL7JnrbBkGASP6yd3pqMzReP7rVUrngT5amiLcYwdZnvAc",
  "key4": "3dbELrTcNSZXGEwLCTADKfMw3D2SVZc2r4Xu8UqWcqvCzdJbwfjCjpwkfRduB8KgEAKFQLxGAWzWos35xqV6JXZo",
  "key5": "56zKa4aEmCSh49wPofbEk7uWD7CQwRBqSbYWwu6GASggsWTxf6zVSRbgy8TXbK1Wk3i44GUo8iVqgAzKfUxgEy5X",
  "key6": "JtnPPvGSscDpcufi2nD7CLqHj4PVZsG4Sqa1G7FG1Bk4VckDQCZe7a6C3USGVT8bs4zLo9Z765DmExjDhg91eQY",
  "key7": "2iRHnSmTQ7AnNYBnn7vVL6CZVPcfYviMrqvfbnP2LJojz6Sh5GEi2Z61ZWtBb6o5hGJF9XGiLgRzu3jpetJYuFon",
  "key8": "2Svhorhw8VqcKx1XuYvvyrJm3CZxBDFjoDRNj75r3eQ5Xa3ZjiKHDAmKkxKoYn4YJFMuz6fiZDS3SPJTpbA6VLsc",
  "key9": "4f2yDJcTQF4QzrFJgKGxzdQ3J6XBKKeVRsQWjJQbt3iLEYBEE6DSp3XbheXbfspCTjTbUdj774DBQ7pQJQpbSJzx",
  "key10": "3g2THW4ZT3fzwfVpfL4cn2u3Yhrmzwf55QEXVM6Cufu5HEzqmDuMJBSwqfEwambr9NKC1LgzzXDCfCVuPGyAgCgR",
  "key11": "RABjerwxvLcBpTYFFYRsc2oW69ePpeLhu3JvvcMMYKyNL9t87XzGG8camCFp54diEsUDFA8mDspbJBX62ryv4K5",
  "key12": "4f4w3scw2gurR3YvnWgJvLzgUzATn9qx3s1LRGMfrfYekoHx1L8t6J6ndHnw3Fus7Xp76Y4K9dUwEAfRMykCnDnE",
  "key13": "3yHowpXSgxmZtWTyLiZUDnfPYmZ36BZmTXPLiLFMbeJnzLLXEZwbAgG897MdZM25UkC7DAJuWpdbRXv9uqXL2bhw",
  "key14": "HDdmCsmrFKk67YPMB6rcbsp1yZ7rB5NujV7MnXocSvYDBunmogAk56ZDXSaAzuJtUYrMzNF2HugcKLSMog1q8Us",
  "key15": "5x2q764x6MDjuk3ec1xC4zgpEfNtCmjfDhrseJtNd96j3sKYYmQJv9JdpmjBmURQjShpsqoQxrN3uSJM1Kdo3cMz",
  "key16": "29N5nRGsFi2pir22eikc5iFqxwu8BequmFJSjpi4yyXow7H8pFH2aC5jKvq12mxP1Vs5PQnDgsyCZXeRUnKWj32b",
  "key17": "3U3aWRh1n5w8gbWTtcKEfCVe6hKFcf11Nqb4TUdA3hyMQhNs5oGCiGh798Upnkq1rEhdU6kVM52fQeJCjHdsSooZ",
  "key18": "3BSFTMCLjy34BUwWo4fT7A9tufLzro22KzcaYU3X2wWr1CCT283Lkge9yGHC1N6LzXoU6JUaUt6BtQYcDrVZQVQM",
  "key19": "3BwrEy9ZH7pXSzBZzSZJT7immQxUfmSWwk1jZYDbEJwvowAFuzHgpeakLBYWBbvUugmqaGHiMfiEo2VzmXmmdjSU",
  "key20": "5iGTdDQrpAPipMJ9CKJHCcYQXnDhvgNN5uo9jRrikQk6TuoASpmiXs9dXsdcHG7EE1Wrv8UvUKNbEZ7SdZCrpvz6",
  "key21": "23K4NyPsEgbvidKkY8SMvVMTsVoQxoSz135bHzfMavsebViqDiuHKCwyuSedug7NxVs2J2dVWF1WRrzNYEnmxgdt",
  "key22": "4Jc9my4HRSg4GmjyzLQ9deH8bLp2PXDCLPLwxsaAGf8aCfMgb3vrESqsXu8s2JGu8q2nL4eFAz3fYuCWNHLEMFFv",
  "key23": "2SSpVJameUhGjf2YC2JpbyqHGanS9fMgREUxCfQdphFWLAUBoHYWEPogb6KQqWSMJLxb4vJ6ZvpUNwnuraeMf3sa",
  "key24": "j1zwr6KWYE1TyRwafeRvudvpHPdHk5wWt1zkXDPACgvXfBpYPcFhu3qM84JDwvm6ZbDJP9xpF5QyJWzBC4r6Eq2",
  "key25": "5P93HwNt2Uq2Ci8RyEwSVTpG3W3C5k9me1gvrxZU5XXmcAVf8EoTBT4d8oWD2TxnxeXLQSHbycgKzdRm1TnhSmH2",
  "key26": "BCLMqj3hUdvcMmvFSjVywPKq78GuPc77syfpSPvFpWVQPCtXzzT3d56M92GtC5zYRtGN4iQCvFHjXpbK4cJvW9m",
  "key27": "AXjg9pnqraQ9wnUNV41eee7vYZfVikinhm37VekbzqsiNnHDXpS17usxjZEsnC2xJvTqtKfs3pXhjmJN4DGD1nY",
  "key28": "aGmQ7t6B2K6qb3fKpqUp4bF6fphm8ps3a2qudGo5mZCAFutr3TmeN6bxNiyCYM9Wa5ruHQLoP4A3SLxqmGxKeGZ",
  "key29": "9nPZszNMFgwJMcBPSjGdc3nxZZwfRLX9Z6RtWHSXsb7trjihEecgAnSoQo6jTCYHp7YUZwc6FErX3b8vB5Vi7zZ",
  "key30": "5fetMR35zYTgC1wmDTkzeBWbyrrZmgAsdHEp22X6MsqPhrKvVjHFAxzN96xmjgwoeY8oNG921gnoLVyRLFe4AgKv",
  "key31": "43xePxuYmV9cAZU26mjyxcAwRPwU6GuRgckVoJq5V5apmiEgFoEPDCKthNUqXrkzWC6PJbLr6pYEoLLkqnkHKye6",
  "key32": "3NsQpSgCzYRmBJp4hhqa8nnv4oH8XPhdkwU8ZDb7cr2pXZShbqXEsY13p5xbT9oXaTfRnh6Vrr19WUpJMjfLz59i",
  "key33": "3me9UQQsUh2rQPQjVHzTNkzxcXb3n88eDohFPZN4utZSMfHHJXtg94jbtmXLygtmVEzkGo7SjwtRFbjSYwfayAEV",
  "key34": "hq2jeJczTUmijEbEbk22GtqDffCHZA5GdeyW13rByrRjdxKCnjpxj3MiCzX9n1KwLg4UT8mDsNBcHeQHyhZ39VT",
  "key35": "3FCS42WuS2Ts8mBfoWcn4xZCtxe28iDqQ5WiyGFtC3X7Gpds3gsUqeTXi3AEvjdh28kRj2P1AwFTUNsFdRXF1Fvb",
  "key36": "2Jipse1WwxVxVhz8sKfWvAerDpXBurFqyMUKisiot4d9wJPCdAUcztpN2AP37PuiANaXVeyBycwyKXFnvM1z57GH",
  "key37": "27Q39Bh9kPjCzLcEZkk19kyhPaASjAgRnXrLQpy2JNFT4yaE2duY5EdCLDXPV75f9AcbcccDoqKcfCa9Uv1buCbG",
  "key38": "4YybBVuLJtrENCaQPZXyWUKLXjSp2WH2gzGK5QngNepb3GfVEZFCgEWHuiNJbwWY4dG5HYw7xKVENQAkS69W14n8",
  "key39": "3pTvoCMAkXANMkucnKxzJPqnoi3rcJRazAA4BycK9rFry4o2m4YwNhyaQEW4boxnn2rFK9444bi5goYYGmJZxpKP",
  "key40": "KXeQNfdx1WWie6eKqMVCr9rQ95yaN6J34Wstg49y4NyskvUdprr5g2wuCaxvRyLs53QmPjuS2eb4jcK75yVUCjL",
  "key41": "d5vydi7YDJc8DYYB1pawFZAaC7wxeVh6QSqGSXqTrjJB5zrnapT5PNwyra9VTNwEnWRtNUJf7K36djxo5A1rtvE"
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
