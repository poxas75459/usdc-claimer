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
    "46tzjGsxsKthcEZG4NTMsE5ZZueZ2bgwAJKy69cZrrTjaN17pEy1uk6eme8tmnWASffSCZ7hWGKsNHnfWfF1bwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yjbuFpRHfLLVKxxufrirCyw1TBe8aq9ab2sX89Jf44LbfkckUfWj6oip4RWUhrmt3hGw5DZo81Z7GKL4Npa53Sv",
  "key1": "4qaC7C8PPoaDSXYru3QTB9AnT2Qg83HTzNXV2xoYs546TELygXvJNiNmnj7fEMyprSi2RQ3SZYjRAp2CJ6mUgmcm",
  "key2": "mGX3aygg5KD7wZd8rs8KFoxLXM47rejuFW862h7AdPqqFun7Ki1aofn4WsfCPHTPE8LpDHr5k1hZmH4VjotugFh",
  "key3": "66XsydLwxs918kUebqpi4v1DizjfPFSjWHuJuETNpzDNX9UHin8ASRSvvqMUWpx5sLqiFzGpsiEHt1PKKz8Baibs",
  "key4": "3b5sHnzdTPJF7eNUpPkEVffQAkBc5GqAMsZnSqxWTMH1ETYW54MSZGkDMiaPwqevoTCKqWwQ6AMTbRiKPBtfpXBG",
  "key5": "dMBHweqkgXgkSzc31DKqkccRBwFi9on6XpNpdXYUNLQa6pcQP5Xbb1vpfba1kRpRgsp9Nocym3pKkNz8J5HeJQi",
  "key6": "3Gpugu6VSdYuAdrQvvjV6qXJfwZxWAwFSE2MEZudRB6ZxbCDKKxXftAfg4hn4tNCSsYeA7vF9x8XUNRhuuCWHcZ3",
  "key7": "2PJHufJqrPyyRKBLhMP5YwTc9KxweLQQvtbiSVitPimDezrkfpLBjkKXriYgfvo2VSBSqp7YehZwRSif5XXnbe8s",
  "key8": "3UzDfrv7q6TTsbetmUCUwxT7aa1Nf6utN2p8s1176HBjWVv8WFw1xMGQyV27pdZeeeVzGj2eFhiYrCS1JqQPB949",
  "key9": "4PcZWhEvVHpL2fmNnTdxN1bc6HE8KPVBwkyuFmjMCaXYZGo6zAnqyQfD6JPY6C5M7eE8dvUG8mt9mD8KQw5jBXMH",
  "key10": "3qJCGAvtwyD9VSDRztCCPwdZz4cFhuxHXpAWMLRUD75MkcQ6eCHynhBe2vz53tAnMDAFBh7KKpYuLA2nzFPhSczG",
  "key11": "4jFEyNuz73se9VvEJJZTb4Wsdrx9DgKKi92Z1rezAMieEeqH5dp7qLFsvchNUtXwGJWgCnFu8QvFmhbqYiYv4hjj",
  "key12": "2HP2yQscjH2myyFgP8pSXZ2Do28KcsdpCoRgfpspZodbinJ7jRLU9DPxiQ7AyMbuNBQTKFoSpuDfR9RaG3Fd72t9",
  "key13": "2wAiKpxoMwxpoLoyi98pEKAfbRYE9rygW492xNGvMs92aeA7U1tnqJ2Qgt3mzKuDnqiWfeKvJRkLLAstp4yv2JUX",
  "key14": "54Fy3aoz3KHEm1WfFPvLM6rkCJN5HeeGLFT3A49p8kFtvSkTgDXp2XDngCfJX4yYBPXmeDEeYYZiJheyZq14NRnK",
  "key15": "4AuPpwiRCuCfFUELQU5Fv2542WK6o1o4iFmSkeybyXVgc3w5btev4GUYkrGeGf7ehkdtY5Ng7WTcvokCjJXP5KoQ",
  "key16": "32GXV2bSt5GhuTyw7Xc5UoDwRGVVjek9QXGkweYhpPEBxHXET47R9k78JN4kkSi3BS7vzEyeytWMLieHq8puvXce",
  "key17": "4Veb16PqghQ4ELnTxqbgcAhZzjnQ6EdJ9Xk11hZFq8XvYzdExw7MoYF3tqURQYMeBYTDTuZuXEoKGajSZfqCdqeo",
  "key18": "2Jx1QzkcvWQ8AtdujpB3HLdgkPNqHvNoHztuf6PbrwuMcQgSEr2XL39HXYg9yH2CGySCoSD5bqVhNnYDa6wsacAT",
  "key19": "23Ry93tLwsBJCgmyZh6e9FvE6wpp5uvafG8TTfAW1LbReRqNK85pmqYxiNkXFcKsFZ1E4fhE82WuipuC23dSPCKf",
  "key20": "4G3JCSpzUnZMmB6YLZ2Z9SFW3c6qgqRUjXkUer98L7vpZqsrdooKPv7UFK9ezt2yxdrownPkc21SzTBTRwzbTqtY",
  "key21": "21zA3pBfBU5V2Ewu9v5BJHoTafKWFdMUt7aRaK8rsWfsDco7xhQNUPSd5U8C8sYprMiYhisPrZYmrQrhNbn9UuLi",
  "key22": "3TLYAy2Wni5PbDiMU2yUtG93Cj3XVXUm9mGPWwTEa7PmsjNEJdfgAS5tB8BPZfeHVLpLBH1PpaiVLT8UATeptrTq",
  "key23": "SBTYFpnFCwTvKStQvCuUYV3NejduFnnJCnuHmRazoQJKyQRUwDppz1j3yw1enqQbfLL6qQqaTWdNXZMAdhZvxk9",
  "key24": "2pHS9XxFGjgfKzJXyh5XnLMvE38ntxfeGULnJ1XAoeRAQVKMptjuqqme1ZNKAXxoEb2dBxYRWf44pooW8evGpf29",
  "key25": "43YcaAzNrkZ6z8zxvAr56HCAN7nDwM97sPFB5nYUqmcjeszuP7VSagscHfoXDHU5nh59daboGdWe6d9HtedTFP9b",
  "key26": "4u43U9JqKNLn2mxx9Xt5MHUYWBgsg3shbCdnGsibyTy1kGvEeSU54cW4iYaHJ3yu92fyQW7C1UJs67WFsPFSXVLg",
  "key27": "2JWcwwMfMtEF3qKc2VR8NTc8HzyW7RrEmArsLw1gch8hTEyjXxVc6Zf5Z3qJQ21oXdTgD9DTe6gGQ43x9q6TpYk9",
  "key28": "4qCiDTRCWkorxF39MTExxLFcYLjruTqdDjXZdZAXYedWoqbMmZxqSP5zJfKyymFgigM7AWiws8KEkkBNRqfFEFy1",
  "key29": "5r856o4VVHnddovkpFkVxvUBV4XgkGTBheab4fVojoHLjtdsBAu4x97j2i9GzmK5aAnEWKfkFEKSBg5j9BWF1Pex",
  "key30": "RFce5PNj53FDivMgpdp2653uDcc17ymrGtiq5V677ZeNjjhrWCzx5hezskqipWwodnb8fmVhE69odpouvH3qaAC",
  "key31": "HTdiBLg4JkDqFSpvvTaqjJVEwiFKoZ9qmkYpBnYHbeBCG4MnyyZyqVThR6hx1QsdNqH4xLqwbuGmLx7EwsYnSup",
  "key32": "5V98YNHKN3WjkHnJxD87Gy2evf7BdPoj4gBKRDuLZMjWLEr5fMrKz8wf31khvpVdZmEuNV68FKmWKLQbDbPHZocp",
  "key33": "53CQnnbejU5PMouYhGc4PYgt5YhMWBbKSwqENJRcH5vrwnzRHMsKApgP8L2QZSNVRSBRwX9uSZtfjk8RLLnirfri",
  "key34": "5zcYM2AzCLfv2nKdxfyLxrnYAFT6npMNcXEVnT58NmNe7bo2M4iFW3dtmRR9sZA5hp9r7GPiJK8tvAm4AiiZU6J7",
  "key35": "3Wgwhmn3fYW5SP5w1HC3Nx2eZm2swyQahjEgCEB2qaMpZvatMYRVWsTx7d83rcJJjs2JKkYHJ3K1qVfjhM4LeAtc",
  "key36": "4sJxLey4XQVonYTVgMPtKfWLADyXxD5PeScu5Z6rJH1ZrSQnbkHr2dMdJxDKRtTwvup3q9ZN91GoPpKqgitXZK1A",
  "key37": "3rLxGBwFd2Hir2JmvaKPjqeKtzaXRUPFqCMmtrKVkQEUoUbfQDPQ9wDFXwjemU59mbY83rK7rhA612A3bqk23dfB",
  "key38": "3hLB6iW9QCp8Qkx6KbWEJcmWqv7aosnBbKvxoV7tdHyVUh4kX111hEQke9vnZm6ZtJH5X4WH1Lys8qRCPNgkEV5X"
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
