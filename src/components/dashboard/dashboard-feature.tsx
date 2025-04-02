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
    "2VyYxBrvz24oC6fpu5z6xqzAuFzk8X3rPA17njrcfD768zn3t3vgV1NpQ4FiZLMyVw3ys68whZpTrMY6zKJHhgd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44shhWFTGLKtfunHGTscJiVNRRyceFfmYTUhpxPDUAQrJbuKWz3Vd86R72KuxvJHR1xqVtVk4PBs2F6i75G755Fz",
  "key1": "3VyxuTzHc42CuEbTHUGrergEPktRp5awnnHGGzax27mQc1YGfazBVc98xVwh2btbMXWtAASiASH2PguPgi5NwJat",
  "key2": "2jLJWT8f2HpXjgqgmq1iaighENMdFzz5MQeE3b8zGp3sor54DHosPM6W3MiWHMMDsd6H9f2LwTvXdHZBWMEzpbaD",
  "key3": "vJyfEgjginfp9L4Cq85KkoFmTHo5rScjPQ6vCHJFtXm2hhV1jc5JhNGq23YFq7KxwaJKQcUuvkQ9RRDGeMp8feE",
  "key4": "125kipjw2seuF5rmfZ64yYKRa8jc9xGZAqDw53EuCR7DxC2zrHb6jMetFCWiHYJckYiMEhFQVbnSgdU49ugsko5r",
  "key5": "bCvESj4GdLJGHB6Men6Z6PDMTJ339EPPUwS8C1LBu9kZKSnQhKEk7DJ5Z724WCqwjCrJuFv8JaXr7tpXdD5Gy7q",
  "key6": "dMbjt5P281RvkXr6g6djaC7vEKjJy6hjUuKJWKmjtAhN5GD2uX79tUqVa6xUwyN1kHXfs77ow4gGkLDUfmCXY9q",
  "key7": "BcH4HLZ9jConquuCexcRKsdd164ZwDej3okuAywPfpxVnsdzVgCBPnDMcT7y79JHoHsVNsnQmFYy6BMFrEBVbZr",
  "key8": "5WVpuchZNSfgsYDz8Uh9J1YtEQwzjPQ7KXarkSSq6U8nPyRJebMVTyuFUNuKMosRYsWLMjRayiZ9AApMFN9VhftZ",
  "key9": "2xm6VD7asngMmwMGYcr2mrJTwZeP9NbHz9wjGu6AePNwBacnqX5x3ZT4QuxfhDTZyPvYueCyKc4VxoxVfpfMdqNJ",
  "key10": "37ivnPQ8GpFUgeP8W3KJ3PgPjXeDB9BPQkjtsXdejZFhw4Fo4JhfsPK81N9UdyNnRsJdTpyeqdPHohqt5rcDSeAH",
  "key11": "sehUXkhtpnQWkqvz5sf4iuE6fSgJLMrbmyc9P8TXZoFJ5S1so6JZ6ZLHAWq3s94f2g7zL3UWG5PXwbnXzaw2KuS",
  "key12": "4hkKTMHgYAj6XMvr42NXrs9SnyHFFEzJMdESi1sLFNidr9kDQu4DnegPVSeDaSJ8FsfAQTQfKR6x4aRUSA4uigyz",
  "key13": "2Kyx4pW6iDgsphpthNok5ZSrYBstscoSzcEbEYiozY7MVsRosxGNG9WfwhbXMyhEkLa7LehZYFqiDUnw1qh4oHv2",
  "key14": "LQ3z4Vt1C8h1Z3dLxuqpha4DwhrFicjJhgxMd2i69PpFhdKB3UpHvTNvQmRxnMrWH8PSq8F7hYafBhidhFXRmwR",
  "key15": "2a33yHqCeDHnidUU6FnUCBPnv8H6T1ppneUXidtngU9PnCWHhLLPYFPhnSHy114cu19dCnBdjH4H82625Dod2RGt",
  "key16": "3dX5Tcbjktb7buhBJHMhX72qTPJqnULD4hPWXfBuM63gD7Jhgx2zMi7fq1Fhm1Wh7UUZkBBaEw5CLq4BmgS7dGJA",
  "key17": "454TTpdam1CG1tyKQ2un9CtcX6Z5jMQpiNoVvCPR9KecggGpX9CPwa2ZiTNJarqSZG4T2xVVf2XGUEfcx7F13iqo",
  "key18": "2K2AwJp5UBfQ359uZuTTTavvsSoyU4z9MTXhV97oSyXxrp3iCmCAvoeywW9WTsrpQkmFN8G2WmCevRjYbh1noaCh",
  "key19": "4UfaMXEbgtZiZEG8BKCb3nVqcsrt2vitpkdePp7CzSewcazZiceUHU3TXTjFQ71ehQekta24ZqserSpF7bG9JuN7",
  "key20": "9Dt8GbXzE5hmJhvAKrLGFYWHCwLhZpb77gT292GooctxgZpmEAmooCtwTa8ANNKKr6rM4rkXXpa9CRYPh16GHHP",
  "key21": "46dRzntFJREyerpowSJLc8kUUJuVvzSG7vAYyFM2vsY2URmSwAiGBLQUYDHxLX3sE2mT9aXXKGvE8gQeeWvmjfXM",
  "key22": "5ETWJUSPxzsRbHUyaZkP8Syvc8dw1FeZ3kF4rxVzheLhqvPAEShhrMoVXaykqN5fpnEBU7CCDhm3XQabiMoGvex",
  "key23": "ZERLYorhn2nyGHA2t4eZUsHNA5zT8dT5mMknATTJ3RS7GShTPAY7WnGfAuK5UNc77JM1opxBCLUaUSA1Kjv7wMD",
  "key24": "4geZqh9pUBkXt1uAm1jHKiXrvTVpBkyDy7BUwRaQ1FwbBNjMPv4o5jWXZYg46NmFKRiHpt5VpqjxMELEHG3KTqCf",
  "key25": "2GSPYQYaDeMaL9qpd2q1PWRNb4aJgAf3zubUwHBHatp4hRVn9AFSNTbWPrUqvSn3duitFHp3w3zrSpxQjx6DyT9y",
  "key26": "4ETnDJM1vrQkZjyvaoHMb3T4MsB9JARu6dmwENPbypzfgkRUyZzBc4rAzipE6QJEQ3whrUgkycuFMRkwepYb4ECL",
  "key27": "62CJvaecaTa4aDUQJZD6gjp8C5Fs5oCADL24DmNuxAtFe61Cj1ht4TRYXZRm3iDPHZnDSKp7ShDFxyTRi8fnqkrb",
  "key28": "5A4DeNyqX4o4ECok4FJcrBKShG1DgZi7d4h7jT5VjCCaZYnBYn9Z1H1T5PedKZKhhvdjTWHp3mrz8EzCywc5PzZ9",
  "key29": "6NVUGPJAsBf4orQasMQSYMDQFiZVy5E1daBwtqL2FctuXicwt2b2FdrAdCyWr17H1ri9jVSZiJtvMCYMyxZWTMV",
  "key30": "4RwCEu8s5mSe6JLDapvGimoWfMT8hZa8XUGospZ6G1isYqro5CrTrw4wjERo9gengFaL5guodew4U9G73inRZ7Ao",
  "key31": "3jgqn8eiR3S4gNuhMCM3sRXPTJqUosFqdk1uQf1Vz6NUCLLX8Nf98tXvuZYUNcSqqrR7si3LFf7DLog6u337Z1k3",
  "key32": "5tK6Y6kzdfheRsH7fB9KeubaL59vPYcXLtV1AvkYFzrC8FZn7tjEGU5MVwjaw5B31fKT5EKDtsXwQan8xriAtwkR",
  "key33": "2jKUdddbsMZvLyyqnqEMAwN4jjRTbksFZ9FdD9LpFyhwDHmXmPk5LYpJnG41NYz6hjJCkmX1XNvwNHPx8qoFB9HW",
  "key34": "vsbnL1zxtBtAcwDoGEftycGjabVAwBGRuXpRLVVUtE5vbQ8TGvgD9yQW7aWBhn4JBw1NiFeeKWnwAT4X8s4KAGX",
  "key35": "5TYGkAnhL1rXi6Vohah5G6RnbnWtZY5kbSjYoCrxynjpdBxRgtzEjG7zdcCiqHgqZbBqZqT4BPPdcTHtvhXTXS4X",
  "key36": "5LSq2Gf5JuCsPJhss5DkRye4RSHx3iH2ovJY5r2WQrMyD3JG9rkiiDXsoHq3ZBPRkPaxR1o6dLeEJbYspGcC7P7g",
  "key37": "5J2XyUmnxSr7JP8J72R9T8xUvNXtxfQfEhoMJ2TsVVb39aZwfPbv2U6owVGyCW68rkh3Rzews8YCdxpQk4ciYF7M",
  "key38": "2U35FqtSVfQcNEzYq7UWGNUuZBV1fC4N9X9LnfEuTmX5XXG7KfSkvumZ63QR7qzSdXgURR1R676ZbcqTzfoMERqd",
  "key39": "5dAxVktVXigkptBePBAVSV8xriAi1xHi3f5yXNL7ksvuiWFuWYe6Nf5az6tNULCrtQTn8Wj6c52EQCovfwQNddVZ",
  "key40": "45pxnFyrdmEWQ8HFnH3zpLthPDkbqWPAQMqwKGQp5vAFd5J1qZ6ez2jKEHBpMvFfm1xU8s7NX2ddR8hJJRsT36WH",
  "key41": "3C62XDe3GLP1kEodoj8jBGPHE45FzJNXikD5hkmVoib8o2695Baz7dGbm9hSQuiz1qHuyNzCx8PheukVFQJGoY8C",
  "key42": "Y9hXvJqgp3C2UvfZC7Z1sDqfJFHQdKQxtxzBKWim5b3Mcrpdus8WxvDMvj8N1tvN7Q55Eu4aMPVmTMkjAyGzoHL",
  "key43": "31KjTScNjsfptCgxyEmZiab8hnZBEb2CTHrxBTT5Z4ZnAF2HUpL2o4VdZap7FpwALyGmfMMtBAD164oUUDdqAy23",
  "key44": "UQ1eZCsauNNChXTLgKgRRggW5L8pjD1cSuMoYp7odFM3QJRJg99TeRFq8VqhykTuLBZBPxiAkDce5E9CyjFNMYJ",
  "key45": "4omwUdXYzksXvVchPCc8LVsYUeSV7YQkC9xVr8LkN9B6DgFQEiDSfii3qv1gLUgpm3T1cvM8jox5JXgXGwAUviRo",
  "key46": "31F4qksFwn2zAnJzJXLx7s2fVPvB9mVomVeDu2ETCKXx5GQoHooPyUYziGkpfSkWzZ7ngfpEsNexHxNBHunNtQLF",
  "key47": "ukP7WMmKw4nS3RGw8VSZzAUDVNcjQzSVRJLisCux3PPJUF9xrTMTsw4agpGHnkfggP8cSKcy6aUZjbTmJ93349r",
  "key48": "5xTUC5s35BUULpfnekBAYYuUfDecsmRypDKGT9zV756tVVZFvvZx5sQKZvWnXg4Nti94NVcUxS3FSjVbXnULu9eT",
  "key49": "3FTMk8Uy5nKCGGD3BtLJGbbSgam3AFePXhw8snsNtvVYxH5QbYcnoNuRjSUx4yN2XX4cmpJKiFVZJGCkqYgJ7PzA"
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
