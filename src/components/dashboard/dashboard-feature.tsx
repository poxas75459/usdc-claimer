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
    "3oxUrBLmPQYMwqrDW6ZVVczmiq2x7Bp6vQ41tT9g34dEZ6jPZwjrpzH5XFfLA9WjN2rkqDQGtskHgo9PjAwkbpJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ESmm5Uhcs5jr3k8mekdKzPnhJ2RR8sgK7UtkinU1xCMP83E2gZ6AkBZSXrFBUt1BKZXWVhPjJXXaF5Cyc8YbgSY",
  "key1": "2YjBr5bbAUkSgQ8dj4E3KLQJApQw4v9kyTW8tpxbDA2FUeLtKZjxcYK5BkDMTkzaziBph2HjShxwBWZYqkJiyeEJ",
  "key2": "1npCkuQPLny5AfHdkzT7w7THLk5CePdGafFjqca8q1a7UE8bFnWAVxbtAq1KWGMCf1XBsVS5zmiByj3FCBPSP1j",
  "key3": "3yj8PZKGEx6eGzYgu6grSfHfCrdS4HWkNJDUHLzYrLwMR4DpvCmYfvq4d6n4HVFfiLVS9aKMzBJgmLeyAHQNA22Y",
  "key4": "iLuia5aNQyEjG4QNAvZWBwkPbpgru5WAETPNQPa4PmS3dMt61Tk29yrgHjBpoxjfPTU6obFogRXrQPPs7FqAYYu",
  "key5": "3Nvod2A5fjehKyPfpTMyxsAoAyudLesEKozvkM8Y58jt9iSZUTZdZu6NjnXJSDkG5RUPJUuheNVmEUeomrpqdWMb",
  "key6": "cWbshAL9CZG1LV6m2RywkSpPu5jhUNrXUHfDveppR15uwRsmKkxPEu3xSho996cwobdTmVFoZW9uufhBTe9Rhti",
  "key7": "5MpqENiJPrrZAsJ823ofJkzJQUghUuKhVVEA4qRHswiZC9uVTCwzdhiorhUdem74AaqAugS8jCPi3VbphaeRenLt",
  "key8": "2aKeQK6FippTPPxbUJeLxG5fBMnWvhjGhPYJZ1TriG9VPPhCUsEWMUXec57kKPj31uzDYcRA8izQ5KEp16ku7UJC",
  "key9": "2oDnFhbPVhNu6wq7F6tLoSeFzCXagNJrtfhVNoLqj46C1oeGVbdd1dEiJBuvDp9QvY3whr5GJCtb1gfWY8T8UzaE",
  "key10": "B9ceoJx1oJrdov7uvSxQZ1EHeZiC1t4GkMV65sE1Hwp4t2Dk3YjJ4rmzT19HhX5YgWSCSTiWf5ancTuUU1k5Fno",
  "key11": "5wB5ZDRfe7mgivMwDYStLBoxzXS7m2CNzXPDt2f95a8w9wLXrHDzgB7xqXcxWKBTYrJ5JPV8XB7D5PvnPDvTrnpq",
  "key12": "3LwJntPTU1TR1q9S1N6P37VX89dswuLcBChdVEJgh5AcGtA4J8meBCrprPw9bRmQRbbgjhvLncS7U1uw4Evr6yEZ",
  "key13": "gSHNG3TCkK5GPCwh3T2LH9fVapXuc92w3ycQULJLWyGwAmFHTgH9FSrXK9dHQgg8PnVLTmY41mWJGwDbeKLAzJd",
  "key14": "2sxxbZYRK7TAmnVawZu9eQ1e9Q6ZXcJS6PChsy2ycbz4q35iJsi9McPdGH94kMN3yK8PRHJd7WLpj6idwHd1hehZ",
  "key15": "2fxYES14gU7DWC42tS2hRcqPx6iVWMsuzBRWR6FdE7ExnBa2GFjJh8fFq8vDNL4jnF6LMWurmMnJxwdS2vabadD8",
  "key16": "7P7jKHNGJryjqu3vBmDSR6yf4iKds1S7qjPQ9iB9LYe1VRUR81zpN1W23JXJr4jdGjaofNo4e9PX4WuxdacSrh2",
  "key17": "VGwHv4GdoFyiajq1F7jKtBdDZTR81ZYQnJ7VEEjtGxBGxfeVGZndxxqqMk1AyYp8HRgnxaV8WfLkTwfDYVHRqUU",
  "key18": "CJuKmKM9X57fVCooWVaH76vW1si6Z16GMFWMaLZ3Zreznfrsm9XvNPUCvehtdC6ko9PZhjfxB8WHH86QNAW4Cub",
  "key19": "3A8ramuvfdzCwUWjeVDVrq8CCw3Eraa5WhP2vsVjiHJKYwscNxgaKA12zmzWvH18E7VdV57MKf9F3f6eJiUtmvh9",
  "key20": "4SaeaRnbKZsRHmP72nX3Jh4QqeFN7xfeLKojDVbBZsGpE5JT4dNt47ZHEL88gFbaYwzf3yScMr7pptGaKkg5Fg16",
  "key21": "8oLQkv7y3fPkXWxzBkcboNv1S2TZJV2ww9tocLYih3rsTnNeUDcUJnFr1r3fpdw2pLtXuzXz6CEqiaXegy5zjzF",
  "key22": "2DDAw4Viuhsp9XD7EniWt6SeYWkgFazVtJi7Tg4eAwv6v24RM7WTgroykjRZwcxwfV9m1N9M1mzKeUixE9L6GQpJ",
  "key23": "4CrQTVXvqXVsoKQhGPfuQJY3ymxnyzDRXu3LeHWtYpifudJQKhi57ZuDW65VDMqCKXiFLFcd57aKake4i8nwHV8t",
  "key24": "47K9xM1cUY3EyWw9gmyQkuBMSRXJp5psRmtgAixCArQEAKsKQcTDPHjjaPF1TnUkUj6zNBtzPgLDcJ15X7MJuhZZ",
  "key25": "iB4gdV99bRxzmKcDB5ttSQk4u17jgAmVNb3itVWbGuENJoaBvdupogrSkF4TUdnaoU3fwhvWnwDPNH587EhLHT1",
  "key26": "5WE3e8eGMKE8i5C6ZXZ9SYSj3KdUBUUjf9J6XZbsszCc85XzN6r6NfEbd2fJM1eg78fDn9cwgvWgkkUtP7Us2ZBd",
  "key27": "4s7WuPXm7gV6oEzg5aakvSSgsaCsEfLSydZqZaD6ejxYKptbZahqJserZoBepiv3QFGjRzeEv8FCcp7EBkCtbiTo",
  "key28": "MW763CqCzMg2ffZ5eoYsEK2ve6Vxu4V56Rrupw2z8XUsrSX8tAzFZhhoAAjLVn4VuzfTWyUdqDHiu5BJ2mAEAZj",
  "key29": "5sd3tEEVrTWgQErVZU4WinH7BYW9WSEBSP7MMA1zTab34wiqXHXyaEiYLPkitedASbUd77eY7yGHkjXcsAKMFFKZ",
  "key30": "4KTqQ4eDvAB5Q8b8MNC5PLui4T5QXqtm5JoajGP1En83o4ikQ8ds7vKYffzUBSYn3yAmFZGEBFF4Y3CbfTqFd8Nu",
  "key31": "3JCzsVrmq9PQsuHQRPwF7M53uQFbF2MDaqjjZsXRmkBqgYPETQZsoAXFBH4x1jFjY4kgzkcarSmDSpHqGu3KNtt1",
  "key32": "5SGZ2Y62MNpp5zgQPBEKWMit3D7h9GcLMTzKirLVrVi3LWZdY4cc38qHaa7gtbPeF4VGQyEZtEVYCr6TGCVSN6eD",
  "key33": "66sXaG6APyAvKkR4XhFjyqdUTn38AHhydU8Z52rJi7Bih2vAS3AbzA4Q2AVwYtiCWQbLidpEFirxji7gUHtCkJja",
  "key34": "5TPfifjw3cunkrGrWAB17hdhGBwN2cBAC4emf24TUqRux1164m8PZpMttyoCG6TMPhPYoZ6DVbZb9rPHMD8BV4rV",
  "key35": "4XMWE58d7eLndnUJc3CNEmxfv7YfqpBXYrC5AEJn6CrbmwprUV3dcH8VaqZyhcfqpYrQZv7Z4tMrm82KL9AXMRSh",
  "key36": "SgDBBJzAUG9y6KX8HbAXCbghXH6ArPDFkXuUVjAWYBHgihrthdCBPbsMRWADrvLgK38GC4bVAzMzLERSayXvgko",
  "key37": "4pLsFWMSUUkgttr6VyJPxwKB7kT7eqXFoGEZFhvXWUQZB5WsS4b9aEgrMpMt9d7Jw3uqnxDnKMLH3wncioRLhcdz",
  "key38": "4fCNCL5wkTdbcrbkMNPjvnXtvnfwHscyr8LQXVjXJwR4zsJnvRbcSqbSbUNaXd47vR9gPSrhzSN7zhBpd87MUxCx"
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
