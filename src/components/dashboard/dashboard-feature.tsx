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
    "58qQqa4SCt53FmRkHydhGudjoDZuKKJY7RFfXu4F1PnBpcWFW6EgJ7oe3jUdVz8kQJpJHNCTXQSZKpSs7SQqf4g8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRfN6XctDk61cvWdCK1AsGeSAUMRVwTrQk6h4zBTreGjAyvtc5zfTeLJfFjTEuXAe6ZhWNyyQW9Cc5bMvUi1PVj",
  "key1": "4kMZqtM3qyBoSM61JGPeDNHrKRR2Cr4PnKcNdmNLAHBZ1FZFUwBejyFhA4Bf3Bh5ZeGazaPHsL8BxFq3vEhKQJ9u",
  "key2": "4igdQj2QToJuB7U2rUuTzuMRe4y3ShTnJG5XjKHCnWYYobHo1YyMu1fsMRH3cvJLL8AuUdd77VQbTQiJ4KRVXBJM",
  "key3": "5FEomtxRzxn34yE6Zr6sPuiaXokqLuydpDNRkEhZng7cTJZzkq5ucNY2YBVRZRRDevvFYbczBcGchcevxHUq4yHm",
  "key4": "4Ss9wTcqg8qNwDLBAB6FTRQ8RomQx2mX2Av2f8q2VLJUhg8f4KdGik3SryPMcMneFhQHdzrAfC7EtFEsv2QWNPWb",
  "key5": "5x1CHaaFPnE4d6RWu7frqSpMkZBakd2igwUJjkEV9sLLTTXfj81CQgy5A5HmFQvDvdSFjMMKHgVe9M5dUUipXJu3",
  "key6": "4v8RPKtNRRnbfEfdZBywccw6gx7F8ZLr15of9YF1T1tBbK8u4NpmwTv4mFZRX6WiLYhUwjxfJPQXiCoxEbdLGMhr",
  "key7": "2ckkUQLcY9yynb5pnRTAK4D7fFCrnwTedyasTXm3MHCKLpTRFBhS52Hj8JyXm98BxY6L7SoXEtNYnwQZShxLBU5N",
  "key8": "5u7Wqu7x4iSsX3MBTzf2mWaNSxa5NSwVUwhkfFS47jmm1sWALur4Uw2Yx5HpvX7tvSWdCyXoPbmDz2mkHQvfXMYX",
  "key9": "32eMz3BMTSr1SAmdLt85rVMbQ4jDY9opg1WUs9jHk6fevVrmnLeZ2oiK1JVqV4qGrcGCCzGuyBAVL2qLxQ7GTSun",
  "key10": "3oLinvb6iPC8hZUz9bktFUS8BwPs286qYZCHpLEMd14MsAtdoX97hqiSwGUSyagH4kJwYyCr4GCBGavJtq8yYMrE",
  "key11": "2oYwf8VRCRys9wnAPYoyVkwAjV1ZJWzHxjG5Msxb3jhNsTTSv3rBBSBSRtdrrT3rwgUgyD5MF3V9uPU4FJ79kda",
  "key12": "f52SwjmdpW5tRESQxXYhrXL4A9ZhwqDM9veLTywamac7ic9FugjVW9hP7fKki34okqXczLCkPeqeyzKVV7VaAv5",
  "key13": "4HEciBUB8amogP9MeVMddfFdCxnrp6yXVo7jmiaPFgyqAvocVVoDUcRYLq9DU9fVULqmqzhvzFNQUKbENki27tDd",
  "key14": "64GiVc78PCiTtaLPNRwAnbJuCgDhFfsy1uh3ehSX1jiwz3KrtNfn6RnNk8h8B3nazteeYriAoz6aby7b7vD4P4Ee",
  "key15": "2HDFuAXXxPd6jbt6B9prw6qWeUVmTwnLapz9pWB5TDRwEKkU495v4CMZrdLtoyDdgibFLS1yAJwpudmgeANoNG5A",
  "key16": "5S7qbL7tnEhiYDBVEE6QoYAFTGSWEnT26pWNA8m72VR15gKsvL5tSf7dCoKikeku4thSwKhTQtdo588mycjyPD3s",
  "key17": "5gQtDsyWpmohdW5yKoR5qMYmibBXKrdqRCevYwEh7mRopHJwuNQN82nFAPhR7E1YavojmBrmeasbWr7gfZ72JuZX",
  "key18": "5eHkAcsvDQihwQmqMnmdcMxvugHExtUuoo66cZqBCDwUAcKmKcXGxEiq6pd2i5de1y9f7yLLgQR9x4N42vcngwbM",
  "key19": "5TS4yeaYhXRNxJjK2Xvkknu3JWw2EvQuQNyzRs2QszsAo1o3Bh3pV2wAEitAmzVoQ6x27LCtHNmSTbBTWUK6s3ey",
  "key20": "2wbcW27QRNQSDQK4SHEVzayYMb8PSiRz1tXqzHo8KykWN39drPtkVKj6az2SxejQAgGm1AYfkH3gsxqZwZEcvf2K",
  "key21": "2tkos7q1WasmwmdnZWd4XfCtMGzVNUYvJvwSJUkaobXZT7ZFweostkkouNMqUg8XxRdjvV2ccBvXGx8dthFMy4n8",
  "key22": "4GsyARkk3TdnDVknkyoJJeeQVGwwBBAfwTmVf8ac5tu55WuwcdGp9uYd5dLttpn3g72LsDz1HYubBMpJ95zWnLg9",
  "key23": "5m9qYmYCoYtUdUsENA1vg6jLZjDEg6KhWvNEnqxaGky9Nr7tdVCfLdKZD3dRD71PPhoSQtMrZb6WKsUJCWjWD5Ve",
  "key24": "LbdcmodvGSVP25Ukp2mFwbPCubLv8gVBy9LBmfrW9jbWFXqVXeFviPZyHbtqcpPWEjzbZ1TWndZ8qyTo1KMJhZN",
  "key25": "5VuTsRUTtjpfq5cEcE1p3kz3VTwtgK3rCLMCipy1xWxb2vZeapjenis4ubnXGRYWqe9G3QaFBt6LBoHNZFyxEzdu",
  "key26": "4iBMjizwe1bYPyPvRPj1NHYbJuJ5RKsvQ9Km8t55M9HDgP6Fs5UNbFhzdr2eQuaeLQV7fSsvhpivxLRLThJf44kA",
  "key27": "4ZvyUcwv67fRRJgVrvFY98mZfyZJH5Xejsb8ojrB52no13NoULihfNLXtZtzZHyTJi3YSzt2YKXTaTrWPu4KZRhH",
  "key28": "RQ552Cj22mQhUKziWR9tTa6emomM6hCDNM4Qg9bfKvmzzjQvZs7DMcDqWA1CLH8Uyx6o4oFgv1xp77jWHfcghDo",
  "key29": "3JhJLuZYVjSBcZXpuPcWdcfv7DU1qj7qjrYJ7T4d12CDoJtTQaeGodHu7z14kGWEjUxhsgvudUsN4WkQaqtUD8hW",
  "key30": "Nt3PJEKd2ejJLoeQQ2fXx56Ay8iRntuQqvp2sgRxpomZPPjrbvi6TgkTLq2La9uVmtmwukioN4Mw4XcpSby2i4B",
  "key31": "2Xe5cL59y31nrtdaTsVZSwGtTvEiJEZ1p4EGmf3C45Y1TRVXpNAH586nZ5EZT4o2ScDFkgHTCRTFqKE93sr7UaxW",
  "key32": "rDtWzqbwUDgDxEjWYuqsV2fBZpJudjsbCCXzqR1PSfBaYKDSiSY5ikJ7KdkPwbWSUUAkLaX3DBfv1oSgeSo2G3z",
  "key33": "3kDfNqRrnmGJgspDGaVEDBvspEnPDgZJehTCa5TVUbgkvukJW8Ytefs8N6zq8bMTwtCSfWbggtG7hy9cPVp1UMBT",
  "key34": "3MsA1w7NQisGUKd1e6LGLnYAmPaRxJogtgxYehpipkNvZASMerStBDvYZfhk1oZXRsz6yNxekhmj8MpaCrdxnmhM",
  "key35": "2vZurU7ANHNuucD6dLScqZwM9gh7TusWWLUCX6HCsdNH7G8Di3w2ngMufwgXQa7DHqn5j8qcMvbLZd45gCu2rQW6",
  "key36": "634c3Me5G8z6scPCxRsYdBggX5Qkgm3Kat3rY6ZPJKgH4aA2MB318X1oUjJUfX4BV2nNKT7UhH8Etq84XeD7aErP",
  "key37": "4Ca2zVgUyBAbgN8Leg7N5vt7LY6xegERyGgRnLtK5uFX4bG4qbDPBusgkqKFgGV33ixXxvTSsf4EpX3mqcj4M6Cu",
  "key38": "5mT65Dc2mXeMNNWHpnGBc8ADDjzTLfWUHWETX8rDSpuZQXmzctJdLFJRtDcdeYYdRjDxnbmiMvJAP8ZCbNQm6R9F",
  "key39": "2kLNxWDhcW9n4imDgPUBNaCmQq9QGQiwbUoe8WRbJLtR7qCHorbW2VjbPjoNZBs3tEBqiRDoHiQhTkSaR3qTTG2a",
  "key40": "2BGExK5fsmYcQBTwNwc2GTjQ68jdGyvZ6aEekJYxh6BrowYHucFkPggs3whbQRvDRW2s3bvSU3pHSXb7bbXpppd7",
  "key41": "36oaqmr7tUHtFMrGP2H7ychCYF9wjQCmypU9vaVTo9o8naHXkrZmadP5ryTprTorvwjy2FS5PKr6QcpSMtkw4Fct",
  "key42": "2bTGKZUz5Ghqp4YgmkFZ8ZAqkR1pZMRfuHvPv8dsSUAWs52G12vSoW6Q7eXXdV9MxPJNH3vrrry7ruczcNNMMUzy"
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
