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
    "34wp9eyXDFLaVfUfRRLPL5m5UC7YQpMvUuPBHV6SEzUXXv2A6pyZ2V69BLbZ6KMt6fussbggDCBTFCZMKKLbd7bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pu9eNbVxz6wwfsmxoy2XmdZP5XhnMZqJM7iM1Fn82bZG75FtMW5nsFfUwZrmj1bymFc5idZryqd5ot7VHsSLwaj",
  "key1": "5tBodZf5HosCDFXbbQMTG9s2ztpom1GtauaZnmjrLGDpnjZvJ9XghLU2Q2SuSydkf9U1SswuYt8XJeD1zXhAk8JB",
  "key2": "4KBmWvRwoZN6eqq4GPhtpfYwmuJreDtB7P8BH6ai7FhWjBmtcvGTRvDmRz9qMiuk1HN8GWR4qPfTHnUtGLZ4f3V1",
  "key3": "2LmoJXu3Y1edLvRiSBQXP5LqxzYhH1Jeg1wgFpyigE6ztiBa8caWfHh4TPcb9bh1U6Q7bEGg37rmPjgFDnejGZ67",
  "key4": "xW4x3zkTXb8HyGxbf8yEcz6rGP8KTUT1xD5U7uW7VAQKq9dGGumMRDWEvtu2V6dLm8CrGqmCRLJYbLeKGT3KtEF",
  "key5": "pMMU6pg7UZvUfb1hVk4MaJvRYmeZ5tR5Ep6Lz567wkgGKXHk4dJYBJPEoYHZ2YLkS2Z74trzyZevWvC2XKi1Hy4",
  "key6": "T9652kBqUEr8AgXCMdVxQ7LrBX643XEgpX71Y5WozHKVizWXegrQzHMftk1HFeU8XeYKa6BozcXeAFejDBQehKn",
  "key7": "4nWqdMhzcbxEkAtxk7sb2ETEtvXX9PJ2WgBrppGMTtteCKDEsY1qjyQnTNdCMrHndDcrcnBd8fAzKTqkbrmTnjJ5",
  "key8": "5XC5R83RN1WceBiBaAy67GNvPBZqaGHnoSywkPLY4qGaqMdhej47vFy4dXsGYXHyjxNY7bBrV3eubPdx1AYmSWCE",
  "key9": "2AaGrpQuPDFq2QjvzEzLtyXxNpHVtEMjjY7PShEMAf4wDTyAhmyq7TSrXaiXcvZdVjPJ946E9Uf316jXvEg1s9TY",
  "key10": "3Dx7q4qcnsER2NvQGFuaVqsRC51yXbvm593acfQWF4pCCPb12qLpHMpFzxGg8Gahmhr9H68G4Bx83LsKsDXc93zN",
  "key11": "4npyaGVGV6xfKcb5TkpT4ytBBJXXVKpZWuFdA72XgVBMSteH4Vo4pZ8QXZiUyKMDt4ZeJB2pKUmEg3PcAsouLekD",
  "key12": "5uAWTr5huPXkgbvd88HGAVeyiCh648uR4CwaEmXcdSvSyZ5XhCoe6pJsb94XAmQRkfNUdAxwnJoNaHsVM8qiCLx2",
  "key13": "5o76QLShx5wi3FUmU97HyxbnMQLnRVfkMm152jsYkGtVu3ADW4D6DrDG4QFLrNB86kUK5zfmHekSddzvcG9ti91B",
  "key14": "8XEafXDTZ3BymPWk8CKAa62gbsVZo4tbQefM5BRLp9uqCtZXmk19cDyvg7pstZRQUr5kMMPUahyeJB4zprjtHbj",
  "key15": "2Q7FfUUPiiZ9fp3EoDb9oHADPivgXbsiyAfzSW4swmdhy7JUPByshaJ4UA79MjKiFHGk2b88R6FECdR1awLn9VE",
  "key16": "4e9VoQsNddVEt33HiV8v3PgLHudE8AJwzeESNJA93P48knMD37HY4q7Yqcbk1HDKzSQAdCUeNtGDS5jqGP6zszkr",
  "key17": "ShoxZv68wZ329BhmEamidwHSizcNAvVtiXGjKEzXvFrxmwc68ZMsP27MAp1e17hCHqrkfr7q5ULJzgPX5QjTWb8",
  "key18": "36Scijx5E1h9i9QxXrQ9mSpMpwosEJdDftxPNmJ1NLD5DhiXdWXD4AXqmD4jT7xwLr4kQB1uw2SfRfuob3MamEJo",
  "key19": "K5Kr2QUrxMaepZQEfnaYHohuGGaQ5GL7YfKbF4nfFi7TUYkheUFpKfGTTtxEUJrjftKNQuzhn7EF6grCvUTDKEe",
  "key20": "2ZXTmBzACH34q2i3qw9BWgTKjwAybiJvJ9NX5s8rNyaTss7pT1jZr3eVedw4B1hkqtDaamCNRZhRkwjndaqW7xn8",
  "key21": "396ZsenMEun5jCcN6d1iwznqKxYcz9apaz5w997XcqrBJYa6h6Sw4qqgXUEUuY6vjHTqD96uMDnCjGUYmjvMFAEi",
  "key22": "5sYshto3dvkSY94aHkcpDmvrrJ9QK2qJhnAzZyhYfyesyWaKn5raAmX1XVWWRWoqxhpYWRteuyosE4p6v7ZHpRNF",
  "key23": "4Soaq19vM3zWaErWEbMc8WPTQxkvyVVUaANTDEQ3e8hRSFN98poGDcMjykApmxRHotuxWgVbKSuXiFNoaWo8HtGB",
  "key24": "5QowNyG5cXiKjudJucnMEV5f9wNs493NiKW3jYeSSHPMB8QvpEfEhvBLPj5LcYky6UV4U8qh2tVBCfjSNJu7j1gh",
  "key25": "3ZTNhhheogmd7GG6HRC8NGuutdjLqm4LNpLwTSNt1z8ftAik95faAJ4jbKZVXdU4Mp9q7hg8VhEXc7YtaJh1Dgk6",
  "key26": "21sjbtkfWQxXf1nJpvT8UdAaYvZYEAXpviA51YSk8zBdoYnhzxCkCVcdYMNoQTraoSeEcdrZHY8rzMBJXE4RbF3C",
  "key27": "3dNdCtXz7JczM7zPmQyQZEze9A3xQcseh1XjkmWhxKvgGiLhUmMxvgdmifvoBernF4Z8ivjrwmUQTR4wYmDfVMTt",
  "key28": "NJC85PwbVqnQvn5expPrbMYA9VAW1HwAdsHSLVe8A7uWoXtxh7LVRoQmCwTgeMUZfQkE9ZuMpKVf4gww1jM4GuK",
  "key29": "Y9FPpwJVdGJqrq1qkCaHcXhHzuTUsABi6aK1VXvz2BbbHgWxAzHXFMFhVAm3w85KjfNBAz97hqgh1jz7qdchPtP",
  "key30": "5M9SCCcYkoJzNM31BC5794v3o5qvtSZ1pnAfnQZLi4D45DL95cRj9nTHts9a6rhb8uZxSqaXz6V6XNX7YLkyF44W",
  "key31": "vba9yjrjreL5nHnw58yKaY44xB2nqsS1SspfecK6ZmBKzNr88FLGwSz5DX1Lhor8hMz48af76rnLeszdQHeUN2f",
  "key32": "mF8F1gPkYAYJasBVkqAmJeJyHBVi7pnE9hkkeV8Je1BNPaWf6JHJNX2UaPgMcBjfFrMG5QvbSCS6Q9heBA3y8uC",
  "key33": "3KBQGE8F56tv7cnDgiUCSzTt7Vjr2HjLTTZyCrW4q8NPV2E21cJ11VuDi8ZqbLWx8KBiaBUKHuY3KU47XK5zVe5H",
  "key34": "2TZjXvuqo6iZm785RjJyxTUvc7VQLKJ7nAvv9w1RuQWC4BSpqQhZbvH6g2g8EJu1xGhY8RrByVZzWR5hkHYcffY6",
  "key35": "5bqQDe9cGdtu7VBQEQc5aTbTmR5ZtkTe3LUaao3tDjCjyMXG3tq8GSQeJvdzzooHBdXo5jmrdpyLZ7FSTwGKJqU9",
  "key36": "3B3iCmP22LVJVD2GpscmHwgUrj9tu5k4jXA4jgwnyfefZMThYxk7RjQkTsJjokR2JPVzBwBgx1woERkeT1SDnFbC",
  "key37": "5mgGuNxncEtQNEAfEFwTMGjENjRqM4gtR2Ca5Lags7fGyXWAmCrvWbFvLUsfzhmMREzd5qBhxU7a4uDyaEUPtBnb",
  "key38": "3L3mE8ooiMR9XuLVbU2NS5Qdd2PpszryfD9TFjtmTDJuwb5Gi8ZsngU4PMHuUkEn8mQxGgicwL45RcdFpg1uqoHo",
  "key39": "5uTrtzsXqHgkXfoX2v2AZk234CbhF7HnUy5vQrDAewegUk9q7sMcewLCQdwPTomt54Un91QFJ8bbXjk52Kb6cVDG",
  "key40": "2BjByono5UFTiRRS6oTDwXoWxsHrHcPoX74Pm5vXDbWjZ1WeksFv5ExyeHYm3nM5MYBD1hnEGzwJ1SFgoNjGMJtW",
  "key41": "wLPKpDLWRrii6EEEbgmY1YKUfjjsZa3WuxBpABZzQvqdrvmCipoY3E4Emg8LY6tXzdQ7LwoFsnjicvMQadoySQq",
  "key42": "26RpXCsDkgoxLRetTMAzn836Moe2n1Yeuxga74ZoRuMRPF12QhbgRsSQk6YgKfMBrZwmUwiXoRuHj1naX8D5gXec",
  "key43": "5xsr9evLDY2CbNZc1kYQN4pdnaP1Vbo6NxNLzCSTgPE8QrQJuJbM45moWApx5UKvuvtnjZgerFhzWMpDDYznTmDq",
  "key44": "rg7GTsdNs7GoTFDZBojRCDuDgcWeg7C76MxoaJKk9YtCisnTVz5zRKG1Gd4G5RAWYCSHVcvwu4cxwfdDYg9XjFd",
  "key45": "5qMc4isC3xHbPjrAuFQpUfQtYHQVyG59NQQMnNCgo73WBwtHsHFJpHvr3GDcjXYE9FafrQMaZiQkNk3GquvhBK8n",
  "key46": "5J77DUYmPBUmwGjQJe3pmt9DRn1KdSAYnRtJPcUwHyBD5oJVUEPfh95meaCgVPkrvQtz4xNDYhQF6Je69qYv6GnS"
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
