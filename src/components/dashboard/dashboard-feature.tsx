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
    "5F82ZGAts8rGxw376DSNZV8ske4t6J43kfXvY6ZgDSFTU8npcvT8GJsTpHUpS46wfiLuetAvbEiY8R9vLCsp9MXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a9voG1tLt2htyoQqthpAVRHd7gDK1XgXAUF2bxUa2WPh4StwiNcLkuibcgxhQqppEm2tmpwwkB3pXr2z7VnRneh",
  "key1": "576HGKUfqNV8kE4zPucmdNEbRSJ3Fk7vu1DjsR4Hq2fJHF8USArrtFEEwobBeDoxRjCA1tAKcEGoSZ6MicoEu7mg",
  "key2": "4NAx4iDn6jGDayb8KNZGwpxaqBhabNfPs2fQRmsuWWSZd8XEn7xdMz2PFG7pjGYeuWjruP2gtUGVCQ4oZe1cCY1c",
  "key3": "36sRkfEyX2ea6geTy2zdLfx9dHrUgGLEU17rrUnXfZZQkS8dTJZZeg2GYGH8k9WjQMCqw26LmbP6JBzQP9TLy77S",
  "key4": "3cXHGfX8Tk99KvSqSxzEzm6QXZYhX5MkX2iBNgKMJ6vce4QMxeWZDkup3pxhsSLmKRpLnsX6tBVN7WwZWX1h5YsP",
  "key5": "3ruvN6Az4N3mYkzmPyZFp1uLHzMGX5cNFZsqYXzaLxb4R4rPueX9bB2umZH1eUvwXnXEEfchjTGYrAfATtuAEZMu",
  "key6": "2bSehcoufHeSiL5PXAb6SY8GXZAKCc9KqkGeCwNHgy4ZtVk3Y74uvC1MptjqGAkkeDHYnc9ZcccDU7gJt8qmayR4",
  "key7": "MwAX2ytXoQVgXgeS9X5rwpSUU76cgcSD9FVXyzkier9aUiSRZp2WHefQfxPDxMsgrXbsHiv3oGjkxzPpWtD4VLE",
  "key8": "2E1sYDdngqgF1d9HisfR5rw9utRLanV3MqUWQMFZsSYHfJ5bYie5yH85k9hELoucmUkEo7MTZBAct2AivFBd9rmG",
  "key9": "3zaAkeBWhuxYR2gZytRuQxS55MjnwGJMggVggu8jq7Ac6FJG7VnB7SP5HiLY7pDoYS9YqCL88H8Lj4bPw5NZ4TDG",
  "key10": "jvJi98Shf3SfXx2RvTSBMSg7x3G7CYC63E8k6YSTfJo4Rwz9uDfEohLCS9guVHsLvjMWEejdRvVFbhwvn2UJk3y",
  "key11": "2T5m2f6odiNxiQjD5aYZRrNeoRvVBz93YVva1c5H1qnr5NHRei6euXkkPoFnWmDskkkUqRdohSoMK8u2NYwcosc7",
  "key12": "5JG5EWtev3hzQ4PvoWm5fpFwqg9JcyqoEqfhQSQpx2DaV7jka6oV5P8S675QPTmkuYDq6DSbqPSAJpAK7gBRx6tZ",
  "key13": "497Bo5HpjRUJrFGvq3VnaTqY2UeLtynwXZNCfgPH3nn7MKXVweSHqNqEYLkZXkv9wCNfn15RwbVvYDCS5UqvKX9Q",
  "key14": "4VkaBDNettPtyB762YSyu59rCB1kU6LNZe5LjBsJm5Xm8nCrHwrAqXp8obCamhM4xHjVZcY7GnwUFZD7RpKWrSvo",
  "key15": "yc5LR3oDKmzw8dA8tUXGnnW2LNaYBTHNCLigz5FHe9gbW8gWMTtmGK7CyPM4wYDDAjjPSMRvh8DVNCpdr85PxkF",
  "key16": "2hWoVEtUvp43RKt8NaQfaBvoZ9daqm6TQ8WdaYT6sHCQFxtUaBY879wDzQe9GcPsdwGZg1DXmgfWfkV2C2TVmmZb",
  "key17": "2meZUZjtHKDCbUnDYMA1HJBMDAabx61EDE94LxFhZgfr83w4msq8iT2zdV6bEv6zKRpBi7CjYvgMGGiDdSSQdDUp",
  "key18": "NzFT8hE6wULYivwLRQC8MkJQ81PtZuoEZdnTTbB8Rtbs58UQuYqsaUrzZBM1amVdQDXkj2iaCwaFt9FLBuRGyxN",
  "key19": "3dskQFMLdVMrBUA8MrTdM6gbca1wRhsx26i8hK9p8UmPhS6Rtg5XvaDaLHKysqTwW1DacMgGoVxjU4QuCZa9bRDr",
  "key20": "5pNrjnxyeXn1HaKfE5wzZnBT7HfuLmaLB3K1RL2oyfACDS26CiKpMmmjHBX6U4gk8ERZ6MMwqjB32ZLYcaxTiYdg",
  "key21": "4Aiube5TxTAJxg4yWYdDeV2pVYebaXWdYxGKtsp1pjwZUUK53oTSYQQuM36rUaSbZyCKC8jbab9PWQbUscf2F3kE",
  "key22": "4aDKahtpQBUC9YS2rhE4SM75ThkGkX6k11YA6pXZZVK8V1BGVynPog37uzKiiJDTr5tMpJAqGD8c3iFg6nAM5vz3",
  "key23": "R1sL7mpJYestLX8vhfDQ5Tq6NRHnHyQGbxrBpaRjkKSuYTDLrtAarGJCHmgCEtac3cxV3NsUXjmm3yvePNzbgfp",
  "key24": "5sedDQqEhEALAu77cGPppxyxT75fZJSVqUAK1ihZWnMpwptXDUtQjUtNp72QWD464qdtRrgb8oXVHE7HtkaacwSb",
  "key25": "fit1LdFkhQpv3VSGmj8RRwNWAAM66peGhg8cbfSdVca7uBNC3MA133Umhbg7Ns1QP3XScnMAk53KuafLXHSSDRn",
  "key26": "5UAKnECDqTJFNNRpnoJwqVbk5fn5yPfX38qcdeydbhxQZpdcDEE82BEqxmAo2rzeeSDAk7jUNANcYvqbppjzwz5e",
  "key27": "2C7qwyzkB8UL5pN9YiJRqSC3znZdqxC6k6K4jSsy7SwsteysfrybsVcKcrXhcSvRDj84esDXMQzUotn8nirXVPMq",
  "key28": "42aGKunB9oagtC837EtCBpgRnqscJ8ZFpsVpH8YTmhVEgSRcfXGTMXWisRc9GSq9Z6goYbcSCotgD7T8bNxYBVad",
  "key29": "VBdziqAQ3y6zK4nz8Ta3xzkzqbeXHtb8m4E5msjqQWLXu6c1Mx3FtdrdfNbWdvz3VNW8144gXHQZn259aaGfctg",
  "key30": "23N45Qy3MXc2KNuL22oUPxsswQ7Jp4Mp5X8gP1uxjJcXbaSYyK3rvmfCStHbZHGngSesqLBtxcijNX4rYvQndGn7",
  "key31": "aBsVRxyMnq59KRXDQiPkfRiAVhCj5jx7cDH6sKy32AiwmdAcWuRXRPmdTH2Bw1kWgANEsLa5LwKunEucrKRmaaC",
  "key32": "5An8Fa4R4ZuBDrn7tqzyc8WReRJRX6HK9yZFkR7SAq8zJZEohMW83YbX22HB4AsBLAzUW1U5DJvJTpQET8nAj5Xr",
  "key33": "MR9mYUyFi4s6xx8JkD3D8Gb2LfevtUXZwDn7XmcRVmuVfqgvoQ1CJk7qHk4AiQVbFpoDED8N9n9ztUxNosi8gn4",
  "key34": "1awvc2cA2vqckBSLUHkgAPrK9o2hA3EWkPVM417UTmWi1tB2t5ByWjcUhtVxv8tYrRdkzRiUvX5R82VDDT2tVR",
  "key35": "5Gj6oDH87jfZKKLDeV979vo5uXTXTurQPbQeZFvbQA976XTBfEA8WhvqRKAZiRAfPPFip1ZqAQ8bmf4yq5snX2uX",
  "key36": "44r2eddUE3MtzYnnNsu8VyBxqZ5z4TJ4v5R1zQQv5KZGEX9cEpgoA6jvaFQBoXd5TuE7xmhbgLX5vwrmcxSttMKE",
  "key37": "21NGpCiWRnLmDAfmEEEoPZ2PhoaLyJYApQYRuuLma5qN9bBGkyZGAZRq366FCKZ8bkubdkBKXSUxzSpHSYBiKCmS",
  "key38": "2cK6TzkXV3FAaYxRxDVYPsBSNJW3krpoQ7bANw5RRg5qMR6eWnoVfos1uDDunGbxtp2PGLQxijzGVNZ82akimRwy",
  "key39": "5FdMbFCXZEr7kK2cHUQRkN5fhQFYMVaZG9hjERtvTQYLm8omskUaSpF38QqNtFdBPFNN4MKfaDu5LcGFcYWvAESK",
  "key40": "4svtNbkjBcr7vhNEUnhuPYY6WYzecJQ8DCTDKugNhiYzf2JKBzHqvRM2u5v6qEGTWXNj5tDJt9NGGzcaGJV6ANHV",
  "key41": "5p6Uj2MwAaGqg1nEzUBcf86iff7G3kVRyHN78v3pGbkEaqWHeKPn5oRpT3HVjbARUNiqiHdanL6nBtLWYBqvABDZ",
  "key42": "3RYhpCE5Xnr8xdFUNCr5ser526aiuNgom9Z1CHefd9YV1Wzm6oBuQpa9RqKkKsJQTeYpuDVhkkA3taLg3YHf2q7n",
  "key43": "3gMmLLpfF5eazecUW612EHyVYsLdKRvrTfH4w2nCFY152KufqUQwUwp6WVdSFeReNf8tbuGweXdEdZ1irQDdDW5x"
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
