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
    "3CeosMKQvVDUNpQJK86QfPycy599JpLUd8ZURdT9QKSvF7RxcTkjjQiahrqRZ4N7bWseXxzoYS4FW2omgTQicLpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qsy7nsdTTBNzkuCPPRbH1q6g3DKZtGq3QeEYKkaxx7fQubU3pDo1YhewDi1q5sTMY6Br94zrEBmr7v6w7uqTLbo",
  "key1": "446zmVoHhchs5pTdZmKiRN35Hg25gtTNrvMyHxx3MrzyDH8QHKYRgJNyf99GnkA58FwHkzeTT3Z7YLr2aQTJfqfy",
  "key2": "4TwPJETtnUbHsEqUXPqRm5hBnHxEpYfJThPdBpwUex2zxkWLgLa8ob3EAqmiHxWGnXAT6KfkjbRzyMs6FoNHJZSX",
  "key3": "U2rQ6Xx3oLDkBiZjMrjid4rGU7MetUWwCnqsVWCy8Lj1fP1H6NQUSfsGRvuUNhuqq5bHDuv4g6oPJ3ooNkMEocz",
  "key4": "oHb21ztXs4G6JnSbLFFi3D3gLxs3ACSM64wURQwd555jDPb5M98rCW71Hf7zpMyLV27STwbX76EYDtTntPhemm5",
  "key5": "HB1mXLDS8b3o5q16pCM1MDabfad6KWXJm9kHZdRQHiH1FmVT5ZnhBEg436JVqDNFM43o3WUur8rMyL9mxuzcWit",
  "key6": "5X8P9HGr1YM495cXEb2CM4RXV3gwN5tFUpnwdNNAQdQSYKNQkZ4SuqGfQ3iC13PfZr4EYpwegp2pJXHA937zcbt8",
  "key7": "NHA22ycnMpb29CBQag6vPj8g41ArV1DFvrvekA8AQyZtTG1WaZF7cX1hZoBpo83ZexbGgm8ze4r8GyGLsU85Z7Q",
  "key8": "3yQXv9R47iSFYEivGnyH98XQrxDzZe6xRxkzAvsYykt3RnNk3M2MJzenJtVSbd1wbhaC1cL9SymNeH18zpYs77qs",
  "key9": "5B8LaDEA2TCmQHuYxJoueA7RPJNdAED5fDo9VZMVwBJGAZWdpYS1cf3GSFTDkwLkNR9p2X7AhPPa9npD3fF9aU3t",
  "key10": "2GKscn4jmoK8X2ZjERUutAtvhtg6WHEurZo8fpLKBLmFfXcaagHns4ukpRQJ4tv8mfNwve5ceT6cmBXDfZ13z2ve",
  "key11": "2jS1dbmcUZPMBHM6iyUuZ8ZJRveKycg6qkuR6yvzhK5rgN5MW7DXeKt9oiP4Xgjqp9qJ6X6HqYRCUNRdZhGqTbDo",
  "key12": "5eRLqCYN9TiVFYog6dFjj8KDdc6vhn3nJnovPgC3qqRvAJ6bTvVs37PGVcaaGaPcUVcpwXhRu8WjSdYREdSfNx8h",
  "key13": "5ReTRtHQmSAZTp8SXDLvaBMUfUbtTN2ewKWbNYvchpsUNmgYHBB1STpJcfPhDoTzCeivQj3t16cAybmtsgvmH6rf",
  "key14": "5BJ2qh1MLqNf2kvVaRAX3m9ic8C3v46ize1jrBRNLRXpEVj2QWVnc5EXQRr5Dngc7mV5FCmwhMVj8sB4icHXbAbL",
  "key15": "pTD27ZY51Uo7jcusyssdojNFQDTcy84w77nVXzLQBSbSK81oj265mtq1YHV7CSt659ynKqaGYgMq8bxWXV3WGuo",
  "key16": "3cA8111YRYjGrX5Rt6w6FNexLeznmjsosyu1LeFqhPfWE5yPgqcTzEuMja2tfeUNrAkNVjsjzmVYp4NcghmsZT3C",
  "key17": "5tPnTSSYMZMNWckHtvCSKAWG7a7UL1p6xTotDDVs7yKbz9Co1VU3MCRAz5q5eqaNc8zrVukcJFFQrdAszs7BnE7v",
  "key18": "2Kyskwdz2CudLWeRkbtWNW4v1jZDHL8EjzEXgguoXCp3t4zxso8Cx1FTf2QqTmZgmZpdu8Vr7GVBbpDDR8uqZpds",
  "key19": "4obtM6L2Pe4VZapcsCEzV9cZh4Pyhh9oUk7LxLG8XDbZ4FunRzB1MzD3KFWtSP1NxHBKV3h1nKqbNDsZFCz4LTn1",
  "key20": "2xkKSPJEiRQsDFaRyrsmGKKYEh2pe3wSAjrk1i9euoZyxfdRHRLUA23Z2DhF1c3uGUZyMiQviQxxng5e7QYKUnaS",
  "key21": "pa2U7emj4nZigKcAZN2ADkrLnafwet3D1fFdB5uHpFd9nr7U5Wxjv1EUMW3Km8urzeQn46URTbzGapjB1Z7a5yc",
  "key22": "5xdx8a5qTt6u8CmNfoAe4ZhV1m6N3R2egDC1RjbvRwUEbde6Bm9p76RTAGtzuKop91kj7aggoaR72nt3wDsoSXaZ",
  "key23": "3FmBNZxewoRMSo8Xz6DkqoLKkwEUhpEuPzLF8vLCRNxeRL9cTrzEkKB2WABuPPukiaeQ8uf3fK6EbUsZFGWhLcw",
  "key24": "5zE4Mf7bkudN9gy5JwEr7ckA7dy4napVmHk8KU8iwPbj1DCGkcCk9CkLANHM2kPTcSu5BvLmY2kWrnCK9nqWLUEu",
  "key25": "4sNsKYyqEVHiTs71eqE4j9Lgu5zioTuSiHTezfD2hneZovZKo8Tw5nUnpJbbP6QWq75WxftyB6o27R5DGpiQbWsk",
  "key26": "4aJ8cxAkMYTF7PLQVQPdyeGxown2b5AfPJMjkPhQ6NbpZPDBkL1iKJVhWm9t7KmXHKRpE5SnowZqjbyN5UqNcycR",
  "key27": "4V2VV6CSTJu3Pew7k1LHsQZnAS1pQweiHwwcix8RupnQ5kV42PTt646UTT9EopHSxjyfXCuJRkmVs774zmPhhqHV",
  "key28": "5oB2ECJwrZww27uYpfxLMGKX6vAAYZw6Ljo73RTrZ3mMFvRvJpzvZR5qTBxNSq74on2fFHQYfqma4SkGapB7hXpU",
  "key29": "3js1Bc2VQvAQ1eg9M1ncJ5Ypak2cAfb5qsExRKDd566nQzxUpGz6SCjgz2n6EuL1hJ33W1jqF4xtGTHx7XpbTHPx",
  "key30": "1x2p4pjcXVVB5JjVHyTFxHFKyWNGbFuGZmAj6KRw5hPPzG5mqZnC28Z973p14bKTVQsDu3QVud1UKbHmBymtoBG",
  "key31": "5cj4w5mccUCo7oYNGkvjjEztguQxahDgFB26Ff6UGGLv2JwiYBJkkbj2R9e3zB3mU4h8Z51HkEsiN4ujWvV2ht79",
  "key32": "4rXAnXagD8xbZNBiNe42eYKMrhPoMCzjwy8pU8ua9aJcnbPJoaUV7sWfAK8bXgjXV7UdBKMjmxRUNq9xBGYbKi3Z",
  "key33": "4mopzMJYem8PUsXkAXTuWaNVF7w3fhD3H4T5DxLCGyEs8RReG6SFSm23HxzrM5f4wpR7dRdjeq6yNCbjMr568BiZ",
  "key34": "2wfhHbFyr5peXvC2bMTSrFSGDrGEvYSCGCzpBNut4XbL4v2vnr6mFrzJs3W73vHB6hx7uPbsC82c13x2uQ38Befq",
  "key35": "4eYC9ZPJ1HMu6ZMXCkofLC6bsvQc5wkTaaWnDfmvTDwXukjNf9pr6ZBs8zFt6ifrsMJDCp6jk7vrii1V9NSqq6yQ",
  "key36": "5aSgbCVY1L1dtcdSFpKxxX7fq7beev3TvbjXNdeE2k4LHm5qdPbvSDsNxXjPpPKdYeTY1xyPuFsoPAy7VuaAkFet",
  "key37": "2LXynwhzJPpKixCKzVD2CDryFNK6YUN2bgVSvthN12gQrSM9ErAD8wrF1mQ7DEgDcafoNsXAWA7SDwSDJCU6rEpG",
  "key38": "3Yv3SZTXfvJcFpV56ZWAtoax45Wfi8kg74ZhcmFySgDJDafrVCcoa9wVn2kW9YRyWkNChagDvDY5RR63mhPbNgeR"
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
