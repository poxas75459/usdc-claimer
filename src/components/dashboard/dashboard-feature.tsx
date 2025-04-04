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
    "4sgFCkSapiuXc1rCtFmEmVgu1ru3Urb8xVZHAQp17weUVhad7wcMmjAVucZffYEanRLro6VHe9zsVmuxg2XAXUUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u6S6DhPiZ11BdBusZDt2UmFSF3khKKysANGHXdhkMpJc3WPN4LCu27k3kuubV2hDzFWQs61bYmh14dd81CcRizx",
  "key1": "stX8NdJxRAxmhN2T8TzBwfUkiiQL9xAQXfut5kmbAoAisyLr3eN8pL3Mbs81dt5HYk21pcxBJnyH8CUEhZDHzAq",
  "key2": "2veL8dm3Wf3vysCpxJb7DVkngaAbhyc5Fxpo5gVsaeR8HQoyAYYbfsrhzh9bMKa1NfeqLPbssVjmzYg8XzUjFAkt",
  "key3": "5Ene6ATs8pM2JkTEHDhsHXWkM9mxiGcTuaxkhe9QKQ565tD8HHteh78qjruJLY2geFVj8XyetUipKapy5kKTA9kN",
  "key4": "3zXppLzxSvGvFXAS9p9BYLwbHW5tCEeK5sRvVC5wSUV9U7kCFxLKXXMBCLh1Pe9VzkJTYtKb3Uo514TTyxFQAit5",
  "key5": "4VEL352MT1hj88PuvfQPmrYWL1bP2FW4EKLVvV1VscXUMNjsKzdDhGDf5LcpCNiuJyjpzHmfQBxxZtNifMF7SW3g",
  "key6": "2BFovseuR7zzGNqQM8S9qUWKzYwdBqinQs8pPf46SmTMXDcVobH4ofDoEuyx7yAhQNAcWoatLQ857VGD1uEQdFut",
  "key7": "5Ux3ACkFexL9uR7qU3VtXN1RJ8kXHxHsMkZ2rgGYUJK4cXkSkEx3sXGhDWCTqQMZ8ixbDUbhEwr2QyTLajtM94E",
  "key8": "2AUsycYQ9QyeaxQuRq3BQXpHHjQ6G8nu6Z7TTGz6ZYqEg9xbx5jxsfqW5seqvPpy6NFPi6tMK8BifXcBJCyST8Yi",
  "key9": "47cvgNDzqrw9Ya4hHPscWvAJGc2WkRWxdkdiQviGuxxGaGfH6gCRJ39SKCSEA3tLC4vugnDyENKBze6xvZaAEsZv",
  "key10": "KaomdxiqkR3p4iceEbku5KuZUAbcxaG95Dm5jxzqL9mGjYbqSDX9b3Nj98aMXiuJz69DD7QYkuHpPjtF12xW8GY",
  "key11": "2KMwd91EmxgSy9FkX9UcebpBQfwsfSGJWkoQuhBEeNyMQQ1pGWNdLvnZ7uZWHVDcm5hKCGV2JHiosGSZbRjDyX1m",
  "key12": "BjP6g8mSHCwaq5AArcEfjc4NmTiPGDhjvFH2qinPFzpHTqG6i1unuZLrHDnr2Fx5PEbAe3b99WWiHk6Yizw5paH",
  "key13": "2eGbhnLYgecVfD1XVxLJFpGwCpCAn5bfEtxLo4E4uBpZCJ9hJkDqhjL4MetGZEfu1SGVwRHRQiUzaZtu7xsCuoei",
  "key14": "2ht87Mvxp833YSFZrppEjN7Qf1Daf3PmxD8fHJrCB3G8rMWw6fX3RKVhXpeDcADSwg3aaMkVRdN4jcHgohE46Lso",
  "key15": "31UEeTbqeezrGZqanYvDhjtxPTmHU9GhzfqrZK41TKHbJqMqvccw9oJWKRWJeiaVUDq777GPU4c9weYnvqptn9kE",
  "key16": "5k4VZzWTYSVAg1kCM9amGH86qimHQgfG3xafTcNwXpZH3N7n6tAa559GuDcfNB5C6wZgDoJg42BgYMkfx3RDPVjs",
  "key17": "5w1Dxunqy8bhNmaNeq2YdjtkmFhrMXH3SdLiojhur2Shwn9rbe8k2cpUtxDVJq4QMrRRTimLKQ81QvoPVbSEBy9C",
  "key18": "5SwtngfjSBJHnxj6UihLX1s4kC8DjQqLh2gXk9xWDiRD5YaGcNoxxQ2GaqNpecY1S5j56M34rzanvRnGsd6ukdNS",
  "key19": "3qesRxWeTwDNpnnZmFM7w8JNyDvoQQ4JeUE6SepRKfsq1YjuGQTGqcZHUJWg7A7sSjae6xXg3kobU8EWa77N5wJd",
  "key20": "5LRXwpTTCsrs1ijhAgNsaUMjbEXdj8wjN8Hvh9d1geDdtwjGGtspGJRjyPNjyzmKDqQWS1iVhBCjVvU4LjHrnUSn",
  "key21": "kxRmqF5JBww6Ds5hrwaRSjDctF7QSTphb1mU7vzSLee6EgcpBVSEAJyXxvp7feLBq2zPrdiUHavGivpLN2UBSk6",
  "key22": "3bzGGqzRw4fWgTxz73sFeW3mDpayDoXDRQAJqutb3ij9qbuxqpgzuHJvAa9JvvK2qMiXxNhCAAVyhfTYCmSJzRDa",
  "key23": "62dS2AQ6mtszggJ79JJptL1xY3zPaHjr3UnUWs5mBpooewWs7BJfWBoEa47YmBWrt9oLP4iEc4YKsCFyPHGaLzcB",
  "key24": "42wHhuG9w8z7sW7i2HSgwmnh1YmRtwTkaDoJGKzoN7MbnVM7zEWtnac9NigqguAKDnyTMTcwdpvXpaB2Vj5U1eZ8",
  "key25": "tKE4v5APfsi9ZPwNcofjqgW1VqWMCjxLFRNbcbDSZFEeRz6DcPkYDjstdc3LbSagvv46sGVWY4d6d5R1AWhjFq9",
  "key26": "hebk55pRDVLmEYCrVh6kdDNdg1GXwS5ianADC8iNdvsvtLyKRGuJwhxu6cyHZukuiK18RYRmWjQBMenivs52AMj",
  "key27": "5JJwMXPVX9fPCnX5QZYYmgU1b1zTQsTYSa7QkHwWfBhqHK1zUiHnL5sv221K4eu6V5j9NoD6vVTr4GfVWydfhtck",
  "key28": "CK2FbhkDdUNtaNPjEgaKcEe6AZmpJpY7dERdvEtz7NBZbhozjzPLKi7BuY4cdWj8phj1UiAqPRVNVmTiLmr6LUr",
  "key29": "dxmMWLWyhMeHbBP8Bq3m1QtDcZoFWWHRa1J7cwEvkW7gnf2h8zrgdLdNpdYCWBJGwTmvSwLt4GV5q6b3QBT9cn3",
  "key30": "3hLSJhU7Y6bqRE5se7YtvXKqK3PVmxf3gdFU7ryjELYDgazsKu7gMkkeDQwNqsz9oFcB7X4Fxm7DkRbHZq2eRxwr",
  "key31": "27WwFTRQMFZFLA8dJ4dnt5Up5udp6CWyJfrQWkSrKN7aoAzaCfGLSUja2p11Nw6NdY8ritboxKHL2qKgiYsYzKwu",
  "key32": "2Gj4MmNALk2kSfo8HsVeo8Dc119UTqp3LzJQk5z6d8qfuNV9RGKf4aBLe9Nc4Ft14dGUnLgL61ubgDjWtQeoSgzZ",
  "key33": "3qBkR5xXm1beHpVUsaiULhDp82u3PmMsnubZzfmbxP5kADX5cNJh8jjFEAi6B37fHgJ37RLUqF6EfS8Lz7wHnHNu",
  "key34": "RksiaR8GN5UcHKFpUpNFzik5pniuFrBjk7ow8MXyDedaX78fQTiF8XBhdo15crxpvFTYCJPxwhCr4EHjgFYtrbh",
  "key35": "YLFoLREHWFTSWaBDT9K3XXefQEXFVroVC7L4ptLMQG7JxJbtDBfWqJs8WVDJjfAjBZAki1geqn6QKvzKEtnxhuw",
  "key36": "X2XqjwxHhtq6c7ef7hTMn1zxnNy8mu4YibxHrngTYFDy6MeoUfxwqFPY5c1k9LvAhA1YpoPXq8L46DMjuZcR1xB",
  "key37": "gHMBAMmvn5UNQP2tZJRJ4EcGu8wWZqzhdNuRt3jHujHmGPG9gnA8s3dZRQFu7N5f44PF399HB9q3beJDNAJGZqs",
  "key38": "3ykSXqF1GkQaNiNo7ik16RVTZVYkqd6rNM6PR6tiNxyMTPmHZaRxTvH99E2oWQoCbXmg2yzqgxgM3aUVdWk7AF8r",
  "key39": "5Y4mGMqzEf8hHiwUoyhAdLCa1rPSeedZJxTMBdrDMmEEJDjfKWZbW3FGXpVFcFqYsPLRFd6icP1Nh2V6SW2s6eeQ",
  "key40": "31F9iCeREu2kaaf2LGS6z38bYNjmceSTFTL58j1h1VPTVQmhqhzxbPoCWq45QKpEuSCjXKtHoV1qVBLvkKjccs21"
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
