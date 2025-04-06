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
    "5V4m47kRpu5SN2cewpeAvyQmXo3KV33oa7ZEE2Zf66oAogu42cnHAZAJfyEkcLnGWe9XqZ7HFsBJogZqMCcLHAMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vxrtEhFAuMJmpp1wT5GojQfK2yq429H7bhhyEqJ78WBCKT43bHay994pDyay4hbRu8iwnFB88jriQTvrao7r1py",
  "key1": "25VLC37xUbKuMXVdRnb7tpskmosRhdFtkxirkJU13wbyEKeZSuKfvSHkL9qpJj5UsBX1LWp3cKod6mTBjMspab5f",
  "key2": "5rMyeKUbJHJMcvG7GQibkYrxEqss8qcYLCKV1mDFrE3KwQevBRs1vfAjhvLV9XhrPmPRbtic7k3JdhioHWHxudZd",
  "key3": "LsNSQE2E2bQsWWV4969Nar9rcDDdZzXSjykrGFMvSyPd5QGacr9wLgk6NvMHGYeMDWsv3nhPjffJVwmwiKeZxuv",
  "key4": "52jcjZQUNCkzHbzdxEeo4wKaUhAMuz6ae1VXA1YVBm9Lj6L5p5fYouw6ezoCbMhGsVresLMFXShr2V8WYtWmckD2",
  "key5": "3EGzFKafToAgej3B4HzZ9dZivYf4twJ2in5zX3qDVuHgWZtvxuRU8gR6VfHgYFUtLFdHDPvTMaZ1yTUkw8yy8ZQM",
  "key6": "2XzN4SCoh6BmsXCgiTXJHoAu59Qg5yUyHf12HNKrFPAFMKaRinh58tPPc3f9JKnKvPTziZDVz8z2PFnohMB7QBGb",
  "key7": "3QsykvoMaQA8T7VQrjkyVyKBVcwcJ1uUWRpUT4djG4hKAyRsb99nZc2DVj8NfefcWgG171hzwwgfmmRtXprQjtHZ",
  "key8": "4VM7kb6qtPXaPrf78jNbdwdar97kbTipHASC8x3wQcKG4x4DHmPfHR7Ydgto6chLCvaZFuFP7PCEgfXVp6zzfcdy",
  "key9": "3cuzd1o9KARWqkVK33K3tQ4gUtJNcJ7jdP84bKRkz5X23tgGptoPTZKrAQMU5pqbGFquyYHUs3eg1JRv3P7edcVL",
  "key10": "3ZQNWLNxE7fuo8BdVPbbV11aUjKLwoQ1exsgu5zviFvhcLaXXDRQe52itciQMNiQym9dYWnP7HAg51qTHDPpvsrP",
  "key11": "2XKADtxePtjxVcTFsXJL6tHqrgqKT71t1dk3T9mg3zfNLn7y9zSnrd1EBQswCtiZx1UUXndppiShTwCDTGMxwNtF",
  "key12": "4578CGQHMBTWeVNBHTprfiXtLD6BvtpTFnHSdbSMEg8JZKW79vDTEvcoTr3atzPiMYHSg8AgdtgvRxQPsgomXkvS",
  "key13": "56RGYMwwLmkobSxrMbLhTCSbDTebQayjVikTeKKXBWY3jTi66LjsXoVavUSofPc7HY9VtJoZfoXvE8J2EAfcb2wy",
  "key14": "3xXc3m87zdnczhP1jkCTkGsErGKvGdwbH3oELxWKRfyEtQtNCnxTduqZnJQ2xQH7FidsvPKHYNEqa9kvK4cpAkc4",
  "key15": "38R2aq7iTzUGyShLeRvW8uAy1fY4bdhw6yDS8A6vcmjk9gD7rJpgYV57oktbSouxgf2NraskxZr3ZGZcNYvvKbg2",
  "key16": "4PC3Zo8biH8xKoohMC7pxoX4AKLRKbcwzGZ47v8VfCxX13sKmK5nfozUPKiMEJZNFWFLWsYro85t6rRKY11jfn9R",
  "key17": "3WfFqtUAfXTtxdYiZDpcFR8dZsMRhNiZX1tx83o1rLrMxMQVLmz3vrBAQz3oN2F6v1nmPz1gjX2m9yBrzQySkQT5",
  "key18": "45XFQBFCvDGN9LJWpJjHNiPPMYSHnGFLZp6EvWHMb944ddSuq1URuaC8t812B5LxkDn7CCQupv31URxMccM2t4hN",
  "key19": "ECvJrSHDNiqKVUdXeW3vBmnq6ob6bgGQVWwE9pq3GW4MmrKByKPLbd7XZbEt4PuXx7qkxDKiGhx4mLs8iNEudaC",
  "key20": "4K5Qo1oxK2YYodhSrZuxV52juseBQxze9sKvtjgkckmz4AN5fySBfvjW9v7B2mkEdmhqrpvzqQMPxFJjmPdLpFtH",
  "key21": "xYExDYWgLyUQy9pRVRChcdeipPzzLsg2JC4CgCVDe6MpQ2RHavaKE9xaQmrgZWFBJVD7i7Q5s6RA3ZkPxGYpBuT",
  "key22": "2zxvPi8zNYpsE9GRtodYu7hbDDERkUjLrUa3SNyS61Tq4GtP2tMkd81Hbj5hHS8CJhkr1XftQcuuAE8KcvW7SbXP",
  "key23": "4BgVsLWKyd3xfjAwjCRJwdw9s2rVVXBDLWYVx928wzybyKeYHXoWMuRwm9C6eVr5MXdKVipVUrvk5s3BogrZ2Se",
  "key24": "4SYaizi1vjiZQmpNCCueKZiXUSJGxFtA4kKp9RpnCiNpBZo263aE6gUaLjtS4SSJHb1gKQizQM7vvvgKXjAZ6ZFB",
  "key25": "qmPzSDnyY5bNqkFZ91fzkJt88pUqXiAN9r1EtgpBkxV4rSpX9GEmet8MFG9zMdCAJVLE1UjasvLXeCpqJEYZ6Nd",
  "key26": "5DuDqxkfTqPp6dVCCFnqikQPLuCgZbe7n6eo41M6iUpqqanYjekQpYE3hMM3Wi56PCxSTXTksAzjr6CsVYPVhP7Z",
  "key27": "4npqdTfgeS4ybVfabH91rzc9RceSVpvYFg1e7MWfJ4BUDL9hdSsn8zBwvp8WUQ5EvwVqNzuqHR1BzHMkS2tYNVXp",
  "key28": "2Y6QdjC5MyWQGctsuY68HTtQrLBKeGMSEr61Cg1NFcjKvtiEp5H7NHzGiqR6v27UWGtgB4XZpiafQkGoZDqRbFz8",
  "key29": "3mKK9Rc6rPPq5gRDskn47pAbRqU8Jp8pPm18YyxeNbHuYZTjpLy7tVs1kmgxNfqUhQSeKGE1dtU7RywQ5jvBx8aY",
  "key30": "3Xosoc2cugf8Pyxgo63uJjguTTc3zfUwf4qKVEcqp6XfFMdTPjhA8C2ERwLJ4DzW9wVq2EQ9CDgWMN8NyQU5REcb",
  "key31": "5XCCSAHkb5sqBnVB2oKQHQe3iju6s6ShCBsJKSUfQsJKVWv7WzmQoegkTBx5uEhuJa2dC3A9fVuwkpfr7ocnYAwP",
  "key32": "2nSiueht8BamCbvXyQWk5MK7H2zCGXW7SSbR9SsVeuVrHchYp5T66ZhrAU6TN6hywud6FKpery65pRjksQPS32ag",
  "key33": "4xRy1sp5w4ZUg9Y4t3iLiVyytKCQPdLQRPeGoPWdnYUzPh6DWPTTVwyKfQ9oLMEVeoXqpAMe43XJfuNKn8k8WgEv",
  "key34": "38jchtNDZHsQG6WkiNdmsn5a1gfMKTvmVdBJdLcSkDMTRKVpQsSM77ueTuiwycbWYRsZAKLshB5Buxa4tzSVKuR7",
  "key35": "3gFkjPqz8Dt4B72ayTihqLEHtbsMNvt6giEsiEJCpaBZqiBYY4o1GbBUKrVR8YrDKdTgWaJPtahun7qV8wGwY5YN",
  "key36": "mnxhQCAput28WkzpfuGq585KRjA7rjqLTfRWrNCrArd4E7WFtAD6SKd8nUS2EZFtgAsYPsoy9R83WL6UJfNKJEM",
  "key37": "2qDhiYh2HL4bLg5P4kggB8d7R7kYi7aHXmE4jStg1yMHwsfoVn8Yi4PvWXXSVpQEeja4c8XWZBSujDL4arj6gCLH",
  "key38": "574MpsP5JDcXvYKjPukfbVKQNBa4xJfyFk1TxucyBtDdeRkjdZ6UL3MZ5k4hrA1ZEPQLjnXgxfHzBZv9VSquU8PF",
  "key39": "2MoprHea9EeJbkP6S9GecJELUiw9V9NeHeVTdjnnKGAFhARAur64VkPb1CAQsQvqmGNd66v2KqxrKCuanrPNG5fQ",
  "key40": "8zNrwRX7Bjnm2YSvknfVhE4hcF7HaYnwBDYsXcaA526zFePk97pnRf9wD8HfBthAhBvriJxreXPajGJmjSZbyjw",
  "key41": "4Mye279yqZTR6CAy7bzFX2TB4WXXRTkVaEazFidyPvaDrD41MHMzmdddF9XGVggUEEdiNxnY9QzQZBBRFyQmLFY5",
  "key42": "nYUKSzVsbxqsXfAvC658myNi1rQb3BYtGBphNTTGHX5rVnuw57w84eM9xRmjD3aFKaDEPXbYtLjxjT1ZmXLX5XY"
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
