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
    "57bix73sbxsepC9t8m78jJp3Nku4GARSaBASpE8yMDJTVkgLvMMfj2FcfteetRsPvXY4p1BWGp5t8rBuEAQzswD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58e2DHtgBJtMNmqjVGfA4TkBWbW6aCJKtPMZqfdN3boEszBAq4hCZiVeXwPp8BdnYbeLegQ3oePFaqR6zPXGFodn",
  "key1": "2Kxfykxcu43K8FYJNz7qhyTS5zDmXVueTPEfsCA9CuKbnhGsuQ9JfzzdWrmy2HwZp6zi9WXb4Jv3s13rMSjQVGTP",
  "key2": "47M9yv7MM3hiELFJTTHQjnTeyq3CanJUGFigdGaBWZod2h9rS4FRSuHRpFecHVTasS6beXGbqA4taLDF7VWMWbqe",
  "key3": "4fBa1XmwReqRnnwGB9HAUqGBXywx4HtXq6cQiaKFU7nFzGHZ8onjHDGVimkyrdudmdALnx1FozrwGcKKgL2VpEJK",
  "key4": "4uf4fNELZrfPUZajZR88yizTvGiFc8aTzJU9G9QxA71NKaU2tYguzMZL8MEydjWyECD3B26Z1QARXoQcLFMN8jD8",
  "key5": "53v8YRYYCR1uqdV5Jn3CB21cVQG6EwaV3RbFrZNcrUXiaDx6B1NLBFx5LFCjhxGideDbiZG4i4B5UGCq6nJhxEEi",
  "key6": "2VCsgfxFa7JBPKyjGBwcWnRRLneK7VtjXmVk49LEUY2S9q1b8ZK6zG7gu61fg9WNLDm3BYsYTuaSwwkY7jjxkQVi",
  "key7": "5pfkTgEBzewWEwCiyMHAZ8e83uvBUeUVZkWwr3tLZa4Kvx35ruzRfbu18WZcgAwuR91owcHcfGRP5nyz1BdrvVFi",
  "key8": "656doUhkiS1JB6bqNW5zVNtsxhE5fsyxQ1zH8HqabmubfetZZQsHyrK1vFvpHKg8aYsm1jnaq39n7nrvJ5LvRbk",
  "key9": "5uwYQxzHiR8S1BZJJp9Dv5YHEmxSmyWBnX9q5M4ifxqWd5ELTSi9ooeYUemRgXQ27A4LSsB5RDeZ89BcH4xtcRr2",
  "key10": "3svzgc5EP1c2Eg5kPMacJShi4ddqUPe2XeuuLuxT2Edy9afrLf1BuuRgaUcY1QnM7Wyaz2HpMRgiu9t8gEuNSQhD",
  "key11": "585m9wr6hxHn7gWYNqSSE5WpoeMvi1ZocmUwYVBMAuXdNNx2xjbkkszJe28SPdMHqxeRNMja4YYe7bqkTccGv4Wh",
  "key12": "5zUdEkVdSMWn22gR9ZggYx7pq3vKBobadX2MreJ5hPudLj6USDkoUH4HtR3BhoH8hhnfbuV5pz5YETeaZsED2bWP",
  "key13": "4FMJptgQrFJ9RoHqUqyo1BiDPkRHsMnnLcC32vjv3D4W3R3WUm5QbY9HFSV2f98TN94Jnm2YLA8zRHMMkiFrHDoE",
  "key14": "5NJbzrLpDYZ8bh2LVY2kF3HUPSJLFbHmU3cttbxcNBwA86GvJXnB3G9Pth34P1s2JgoR5axcbrdPHKSTyFgu12YX",
  "key15": "3njg8xHc3CtoN9LbiPawPXNZZRAhV6zHG78yCBf22Pua76DVXfqcqs1MKu1QTfsQgAtvoGDjuLDeLEX2BZyg9NDq",
  "key16": "KktZYYQi2jrXh2hNvmMZBvhCH7Ef2Lzp3hhRMobh1YkqBQBWwfMtUZE3xzXbcpT3RpEtFy5a8AeMtTth7VdpUjY",
  "key17": "66Py3CfxH6fgfbnCpcHWQsWRFnN5ZNh3YNWWPbyPL4g3SE3oqT4GtDu7oY3SgzyiLWpHT8fJkeUV13F9GgNSYY9j",
  "key18": "TVx7aD3zgXMqPbGtsgTo8czoLAcveBbLkPtfE3GS6UjdePHdyKWc3A755jNZocZqySdRjZQyhdHnSjgG3VQM7Ga",
  "key19": "4t3yHuv6uCk55bqnAVbqQie4uAUj1RMiGJmwZDbgCY7S39WuJZkbr1ttUdJt7UAJjULXqyJQCXxm2Ngj7DPpdnC1",
  "key20": "4qWNK3w8VwdBi5fVYiKHht6kXhWVair2oA23s2GQ1zPBA13vsKm9RYVSaBWPzo5ptn5K6a8dsKbn9joTjtw1eaXB",
  "key21": "5Kpz495psQ7cqngCLqASJomKk2YUosVS6g4kgUEkBAHJwJAqaQWNv8bF4SfnP6CpZeVhX5a8q5ZAq1S458omM6xS",
  "key22": "2Ae6koiBahAGkVTrV2z9KNewyjxLBxs2GAkP8wSBaZRNfwum8rJE1o9kchSvE4ZGT1RcniGSrKWg9KDSMdvpWE4S",
  "key23": "23fxMmHxDaBgQgsscP7fsko1M2JrxFoRxYBaDNLTD4oxMMsSXjHDXxmNuZs5zgaWdspLxGjiBCER5NwLwsxMY47G",
  "key24": "3Q15tQzP4NAsVrGVLB37yPG52GAv3HnPfC9G4EuLHXK9jrCstzFyqe8dGK5QeLqK6t5w9nnBinU956htShBPM1sW",
  "key25": "25hKJVXmcCQR4ExyxxhmACFZV1kFLUxE6hQAVAphKDkvbSdYsy3d5B4WNCQi517jiseXjfPAksNc1UwPCw6AmBdP",
  "key26": "5eWWco3qVSLbSyX4AduHHp4gWy4N8zzDmQxXKMphNYWzu8wEKMwmXPXWdjEDBSJRo48coSBREVzG78cpXi9aVXDn",
  "key27": "5iS7bxgUNBHsuYqurg9nPahEBuFgA5GcA8pq6pVh6pDmKEE8FZ2eTzF7p6oNBtUEwbaqC1gKBwDSzN2Hg56y2bq4",
  "key28": "2cwWiBin94L1QeweftqrSxkjN9sWKwFrczTcD6e8zohqXSkZL9CwrmmtpSRLZEdjZhzbHgC7VC8ZSNPxway4AQ38",
  "key29": "34yfSYvCA7zoD1GdNkfFh5bnCD9dHCDevNUGnNA1MDVJwKS4cXhB5QB5yGSK6T6K7xVSwu3ywBxFVjUz1rFDEaKz",
  "key30": "5PLMzvmHxeiQEgh4fTWnuoFPx5wDzyrs7bfDsJujgRRP9UpFQMW7sdeosKhBfYs1hUUG5tSTdgyocyUNjRHpvjBK",
  "key31": "5zUvzJQbeVz9TXbxVpf32vEGLhAzERMp4Tho5tq8z7n6vrqzBmJSfahozf3vRFrS9sdwVPwKt69MCnmVme7mERZm",
  "key32": "61ZxWxKtmgErhoQDzjSf85RDQyN1AhJUVsYh7HiYtTGao6L3Fdqx6hQWUTiUNqW5JYQ5gnAwin39cU65Kwb7hDze",
  "key33": "5Zfs1LpRQk4qptqQSLkcsNWUcPeWmDoda2zTBGoJo8Y19dTyuMwCAKoSNrgjsRjZySAe7Hds3nSrKbejPiroFFr3",
  "key34": "345td2M5xKNT6TnnyxqMg1QnNb5xWp1hrc2ADFhN35MwdshQSZDDU4Vpz7pcR4oXbo48wwXxT6M6DZs2qjjj71JV",
  "key35": "3Yz5afovUXqowngkiBUqyR34PKtSsXYZqvvpeEzAo6uswqLfXtDWU49RZDddnE984zHBTxyz4LuwkATecUU9MXZr",
  "key36": "2ZghFauLjWm1GePnzL5DgrGGSnTw2Rz5etAQUJBMVWgy768PQPgnKZsMPakQNfFVwgqh2wbPzHNLrT16xKL7dsou",
  "key37": "3VgoFN2MpHxzXFmH7vQ1UqiMBf8vRMtDfRXnQEzC2DYLww3Mc5oe8vUeTc7eq8wzx5rxPdR4g469u8KEt4zYDNDX",
  "key38": "5jPhk4yQFELpcYmFKkT3F76nkdbe5JyVAV9TZNTG1eqrdmuqzN1q15mkXZrBNdbqUeYc9tbJcGkj6ymTUTbhkJjT",
  "key39": "2sXA5JofMquejUB6qvNjzxPuqvanpfHfB21ASsqihw72CVnbKtdwpdovKwvHnnszqLfMtzpRnsk9JuK7LoxJU1X3",
  "key40": "CRdZyuHqn4JGMwfqtL8gbJnk6JnKtAz1zWpXtqX8VrPvbJjq5d12E7VSGq1PnGyFX96hbQYaVmnXYhpfJmu8bCr",
  "key41": "4oJqrcTdm4R5Dbu92qSpsXd6wN22a5d3SBr1HairnFivaUA1HmvadNd8ZdMGdQDTU2Ekv8t7RuYK439TxtjnNvcK",
  "key42": "3rpFS6hvEFFgmo7SQEmP8gdkWkA9aCxy3FJEmTrdPvgPBhBDRhUwPq1EeB42MJfm71iv7TQWFPn7XHnNqtCMeHay"
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
