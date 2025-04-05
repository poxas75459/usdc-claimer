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
    "2k2KHphLjwL1ML4kFUtzLxCsXsBmyXY3TefrLznNSkf5VHTwFSYpFbhBaw3EdH7n1xE9GLNCashdXb76zwRjC42p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPte16uZLzEpyQwZAzZrWvwaRdeYu81AvVy1xwxsHqxSpPjBXaXgHx1JvosBeJhC3LFNkjwwXdVDY3dP36Vcyuq",
  "key1": "4MZt7d5VHLqHPyzFjWWZ5E9XwdYmrRMkx7D6KPpTeTXwYZ5NXamUFYq5NHGHcx6qcBhV3G9wJ8Afm6emAHTRXXvU",
  "key2": "62axgS4y7sGVRjXiknou975uWMm9ZH2Kr5kXaQadcptQH2bWgoHABAZ5zcyETXWbi5LW6gVSnxQa1DU93FddNYCw",
  "key3": "3v7M4TKnNk7zxeBgJ8JTJ2FHMaX6dtHh8XhLW73jjSkg6M8ka9Jrog69RuHCVET1io1AkukxfijPdNbGxzvnGboN",
  "key4": "2uTuCbAPBoMKwBr9siVRUy6LYKD6WuVTVJK9ACQpCXR9ezwrtWwYvYwubU6JiEqVRYXUGfcCqyvYdqxoSF2CqnXL",
  "key5": "67DPLQkYUDyGejM3KwBxjyR7wnfaNW1tYGnKwWEMPnNE719rLKsRuR14bzDvYp4mF8E52cWC5iyXxZmnfE9DYvz7",
  "key6": "44REb4EEU1j1kHyCQoZgeUFGvtuCnXSreaYZ8PLHGFkiWF6QX3Xkk7MxXfq3mJnkrq6VjU62HR7gfj2cPac7qKHz",
  "key7": "3PUPKPoq6LSU4qA1ZUxTKP6VqmZKaRrjycp5j57KJzkQcwKnzZuYx4vnxzBnWkZWwCUtdMAr1pxfFyS94vERVB1e",
  "key8": "3PGPtXYP9BCieNMaNE1xBfgKT5Dn767Y2CFyNo4yuZqG317ZTLcyyQUtbtsqWoEj7DhPX3GTHaR3amovtw7USEEw",
  "key9": "3kMhbjqc2vyu2zqSXSt4gZ7hfbzt8qjWuPccaokitR4kgMDwN7Z7rhtTMkj5ugLeJtQBsTxjadWZUB2AN7tth8Hy",
  "key10": "RPfrsXTMoCLcixXPZp8GPpVK4Q6Sf68R53wqRjE9PLXNeDECnXDkYLXgc6eFS1F53s84K3iLxMxmVHRuAArWiXG",
  "key11": "uvion6j4ikH1KKiMEbdio26ddqnw1KHGWMC7f5G8m7k81Dfg9PyboR7pk7A9MLNHheGWmcgEk232X7Pso5TEqWJ",
  "key12": "4xwRiFFuFt4ATUSBVE4KdJsnAvc3iUv62ns671UmrWFtswp8iUk9C2LniabQkJqnQsMj68xs6bRBuJuuGfS4SvAt",
  "key13": "3MKWp9hPQr8FL1eNAe9vNJ7BxiouteXMKTELngyWMK9HsB2fPMdFqnYKZKeoPocULS8RvZHzdTpuhnU3xF1D1eek",
  "key14": "3uc2nQ2aqR7zPwuRrp9u4YkajAauJknLMQzKbvuTJeDuzyUTDEV2F5JfEPzcyYAG77N8N72xqvmZ2T5aHLHCxBif",
  "key15": "5UwwN3k7ksP79mVNGcrEtcEvtscJkcEc7yEfC1vxrTx85jHjTpprNq4LsaPsyej5C4g9rbUi7XRCMPWbyNTWxqkt",
  "key16": "62EJngX17X8YhSaN1uuK8mkZd12NrKL3s2paRic6TL9TipCEpfBphrtdQQEP1YfpKi14ZqUo2c7yHX92shuX9S6N",
  "key17": "3xMUjJYG9a1GMkdoYecY8p6PneuQp88xGXYEZHEkdDuhYdzvAfCPe3j5LuyEpm5wM19mqN24ZCqgzjmD8icL14QQ",
  "key18": "4TnKU3bgdvGbLaBeptR1dxjSkxRdoZChTWRyBNPT7TFVSxDeHtJqB7odrgGWAZh9xeyfmE585NdxUPriQeGcamP2",
  "key19": "4CjCLiGtBcFdWKTMA8XjMEfvuPRVjwoEQVGezXug6vWXT6VYJCU1iajxsJhNph2dW8bD5rJhwLB2i8qBPxFTvWww",
  "key20": "m1bf9W8tANqGqr6XGY9xBJaSjbS18jGCwxLUUNwpR44jcGH6JdG8PSoVfuhB8QWwVkFWVg9mDkiTd9RbjpvXmod",
  "key21": "3i5LuPAgA44Yw4AiCx2zxvqwYWp8i3uJ6MQtkG3S1Ch8UYxCbHFGxsDeDuE7uaBNYEYEZimzgdYevtoDgteeSu6D",
  "key22": "3KuFE1ZU9R3JLMZsMSw4PRxB3t3wi3PPKAvNSgwSezdD3SqpsmAD7NHfypkuenDdWdebWmBRhs1nSjGtRNJAf7mE",
  "key23": "3SArcEE6i9p9iTPptNENeCZokrQS5vDho8UVKvwhAL4GPYXKqAhASn6BxzdRiGH8dmdErNLpDqzf4Eb9JJZUeyZX",
  "key24": "jZB2WU6HUea1axWEoz4uyG7mCLDmGBHYTjdz1mKTTZTo3U4f69PzDKa9GWMwhawZCJKGPxvSaVinojMRK8Nt1KS",
  "key25": "21xaE5cZwXyairdz1kfanLBbn44SYMzVefbLt8m7YhvP6aXPBNeM8N9MCykuezPWDtcyNXeUr6WRt59uPNCX9PWw",
  "key26": "5GqKVbzGTLprJv6q2wimJVDgkeWAt7vzpmShRTYSYhZWGdzwScFB7dDY6goB7JoUvFEr8xmQctjH3vwDFbNeNTyL",
  "key27": "2pBcbznLnzY7FTKfvKCZabidoy9F1fdMx97Xo17NTx7FqPjphZREn9QGCNYi4PS4K3EnMbidCJ1uBtFuK9LZy52g",
  "key28": "5bt8oieua8qTzjYH5uMRPXde9U2i6A1R2grcb7JCJi455dqUqZ8YjWF7tde284KicL7EpSw6RDxqK3xD8FDy6fwK",
  "key29": "5nFNARH1rkyaZ42my8HBfjAk6Ze1kbfL1PunQNGfxixnUe4aJuDcvPy5bJVzLi6QyGvDGk2RAzk3MJdpb7eyep5T",
  "key30": "31QiLqrEgtjdFu5tC9o8kE7X5cKx3SFPP511iC1JQvxRpfrkfHmZtaJ5rca34VUFvPEXedSzLhYbNhqCEUbV4wqA",
  "key31": "49D3or8AqqVSGYRDb4YsBtxd4GLeSVmnxE77c5nuD13itfFzMLdR5iwKxYExYxg6vdyyTBVyNPdRNZMEPBjVxcMX"
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
