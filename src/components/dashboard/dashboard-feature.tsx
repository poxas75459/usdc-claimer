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
    "2o7QBh49RxZYUNx5Wn5tPQa2BV8q8oLg7fupnGcT1x6uZFERvQ5Xndrgx85oTBi4UNfvp2VRAzfMref6vPEZpM5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRN7bRXDWxaqkZq1MJLdoFNRdG8Wmxbvk7tYiBxZs7CHvmHDMQ7QRYrJZgNg8Y7WFufb2voM1yDYAMtoC1hxutX",
  "key1": "5LCjQSNT9GvQCKhQHgwvPzyGUeDo9LsuFKzMMxKuhng6j62jvafPZnMsXyegu3HpwyUsckrZb9n5M9SyC3Qds1JM",
  "key2": "3WvGNkGeuSwbxV7qu2WLBmtrYJscu3115Brj4hivF7pFH54eRzmixPuX5i3dfuZ4sCSarZoYZ4F9mUwAMGKvoCQg",
  "key3": "TpqqwwCP6eyDpnndDy6mkgBJbfbMu3aFc5gydMRuEKYRhSv2ivXcwQR3HAaKMkFh9fe3siii11VaNTKiyNuxTZh",
  "key4": "2Wi6wMwZGxLxAEh88SGmtPTJ7FdJxrSrAU6yWRZVGZREBWM1WYQ1iHa71MxXXEahcLybvxyQqRDY2DMmpc8fgaSH",
  "key5": "5frjRf8HQrJBH2GzgMWqfKjf7vGa2BKfrXuyAxnnQh5y4UwVFJ2fme2FniGrnrLeR6XMadkjf98n85742WbLVweQ",
  "key6": "5WH9oAoHGTmzgbNxhYpheMnzKNDUB4WWpfkLJdci2uwfHq5Ef2n6WsKEkaC2wRUVg7zgQXxxQPH5yiHBajVtZX7t",
  "key7": "4CAHwFXJXTWVSH6ygj6WP1L1WCLPgUvyWV2R3iymQ6CFBkGXMdTyVzLWfvNRXv5oSu47sysJy6VesyMzJEZV6MNt",
  "key8": "2Tfxe63Amy22XhrCFmAfAJKkUyvXqjX3Ejoh67w6w8NTdyr9SDoKBJnfV41J45WPw58Se9fRN1oxEBKMYm3MtXuE",
  "key9": "4Jkrhff3o3bVtkC8mfLpbwQM26oNimAwsv6LaPE3LM1svJRaepq8gZDDf2VAjjYgdtBLPWQTSMeWJSivE91fDCC1",
  "key10": "6KK1DuRdBxSsRijESP22iZa7TALSLJQVVi7VQvwKHoyMraLhaCWe9GSdHy2mahQcDwMTwdpCKmaxW44VzTU7P9w",
  "key11": "4TMPLox1KWSJuRrjrUAqJ3nFZ6q4wr2QahRVuKSMqPQgGxTcLPbuv3zakDYjxwKjyepZBX3ZyMqFhfXnCJFU7iru",
  "key12": "4npFKuLAMHFqm4QvwZgmAwLbt4vRtuJVvfkiTnvr2utfrTq9XCtjbL34RzTP6YywhWhMvvwWRwQ6yYSecnewk62V",
  "key13": "2Y9odKVZxSs8aLWrZUm44RWxb32ddzCRQE3T36a2bt9PDLMqhaxEkQQxa5nEuAs6wCYqr1xm1mzjbDd9egWyKC1T",
  "key14": "UzY6MWVaTsua6gMpL6bnRTXGo2hjd8BVpk9HfbUDqXFBZE2ydZUxkqwHicP3sKfPT7ucsrmrjT1oMRfpUMw5SPr",
  "key15": "5iLr4U9potPfxDo7fDLPJqDZfBbo7ApMH1QLkA72tFkNzPa57difSYZE5PDw4bLrazMkSmkeiKgBb3THpqpZ9mpR",
  "key16": "2V7qUpkq5coakXsvGnLFxtZjQoHEoaR3RGRoCA23oZkjXe2GkTfNLMDMvmcC1TLEh3vZPSkdJ1VLHRnprFC7wVi2",
  "key17": "k48gsAZUQyKNBkriGdpkDkR1mdg5DLhWCrUPmQ4XBr8xmAiqCSCMx764Fta7nAfZGjPSdo7WjE2Ry3UvYZvw3bs",
  "key18": "3x4PavSmS5JM8kbGqfoufdCGfJ2eBJRfujtr7cT9KxDSJU7E19gCuiiLo4fYFVEoxDweFHxE6776jCKwkb2RwPJw",
  "key19": "4ZRmpH6iH8m1pWSUqDwP2JAyLiE2gBZiSkoKrBPndWvruyJB9BBu5azVp1pxYJoqvRtjmd7pH6LaducJSCGanCgF",
  "key20": "51tMT2qVTRMUZ4rrPGXPqHBrgtRUraLVLUv2c7ffmzKTxMLtpF1Bfch1nrmT7HR44GubxHz2sGmtjwQDts5mh7i",
  "key21": "4KkAZvg2vP7U6z5eAUDswFazDkZqrNT3ADJywnkhdQRAF873BWqEuk9KhS1py7Zc8KV8rogQKB6ywx2qZuaAwsX2",
  "key22": "2c8FKcRY9xL8pv5MPtUjmnWdBJrpmSsLsN8bteP88oaAbDVxTmDX4PTUYNcCww2rQLuyp9ZWnaiFws1tV8TjXjgT",
  "key23": "ZdRGNe9RCr5KAZa8JKQjaD46nSfBLdwPHK6NGjmU1YEQtNfhQb8EGe5NpH2m1VUDJywkqYvvNMdnr8u1qfUWus5",
  "key24": "44ZfwLe5TJmMhJ7VsRV9VsgoWTYoBPpWT6VLc2PBrSd3TTCqF5vsm9vCXRDRSvor36AUTi4EpTVgdNzwxrujv4n",
  "key25": "zRXxRYXNW5BSjxbT6ivC6eJgL7XF6Lm9BG9mmxyy7G8S9uMYv2EjLgA7UJpdM83CwKMA8865yDJgPhLk5NwBYzW",
  "key26": "rwoWDQhAb2hFQVApvqhMQePwWkzSKH2FRM79xN8tSBJziSh5vv2FRzPtQmH97XrX4kWNcqwvdaXoPHobF2yesG2",
  "key27": "3Uinb9QUzMDZsifTMq9aBUaiYjFwsfeLcTrpfJ9ZDBibt15J3VGHB2LL333Pz5YMdYc3NZ4SkaHP1DvPrcVnVa3E",
  "key28": "3M2s2u5D8qXKeo5oqwt2RLNRjfzWNcZBhAgM6hufPie9erCxj1quKKD7uy8VY6TJ6BJ4K6JhMZyExKtSNptNeGN4",
  "key29": "cgaPwcHSXdUGKaaSFDxs7mUMEP3A7SMGZipdpvZV63XTJ63CYNwUk1Pfc7aGtkBCcT7PCizZkM4KHE1APhZm9zp",
  "key30": "5g78uYgayQHc9aPNXnreyGcznjodEtJjBWS3CqpLqFPADpbJsBKXiW6gFpi52VtsirYcY58nuigHZRHw3yW6RRmN",
  "key31": "4kjuDXJqsZrQYL1MoixBzXDUjC3V3znyNkhZNZbMCGek2f8zCnFF7SkXcvfxqvsjo1DuVcDN3xvv9neFyji8qVP7",
  "key32": "3xGYPPkrDEhFdcKmHeqT9hxxujXkovL2hLnRgGDNoeBc4NDT7RfBeLwbV8hxiWCUn4hfSNA4qz4yFRqEacRnXk5L",
  "key33": "5HwA3S5uSArV3dpjX1rzBNYYDeNK39d7nyLMTJHP5LW72XNKSxBjJ3i326tzGZvmBx2Y4mcwQN1KyCg2wTg91wTr",
  "key34": "6gJdqiQDcQuhvQ97e8YEgv2cejpPHXwkpE9npheFPNbJ8htd1RxXfiwbsCgwzFTYEoX5qREbWPb471xaqf5TBxf",
  "key35": "3v3CaFWPLBYxAgLdDgrQQvySseTPuxda3WUt7LyfSykjNiTpjNB5rRwMLgzt69E7fmRGzBEJVnk7XKh8RfGNFYw",
  "key36": "fcASvK1tF5Rjvz4EWNReVk7LXdingMNwEjGaayUYsrNJaTAu6wWQLhNSvEtAdSrRqGQyV8ncXkVMbKcEEyF2V7W",
  "key37": "2CBu4nukNdmCVW7bvv2raKWs1tsVupJRiMxKXhgBZSeUrF8ZNtPF3La7C9MSLpXPic5Fow2v5PiEq3xv9HhrDxQp",
  "key38": "5t6PqxcMTqVQzGFJ89sARt4NyQRobFpoyb7wcvCqCbVCmGTmo6wQBfhGF67qRHGKAGjKco4MFQe8dy3vpia4EZQX",
  "key39": "5Snp8s5R9xSffHCQBYRoxTaGjiT5P8gMDvcWXbxedMpWcHQYSAPug7Ai9offqvCRDoZE3tVM6oD373EJj1uofBdG",
  "key40": "4FVVySjGscqJp9iPAeQHv3q1Xaf21hXNrMsUsnsXJ9n1KGtNF1wJ57fdSSZUb9vep8b2T1ghuCmRk5iWyU6WvkjN",
  "key41": "413FNreLKEF1u7827v3vm3CPE1YszxVp9WERqcSj6q8kLthfX2vFp4hMgJ5f8W6rwV3Dsc93i863QbKaJM9oqGfE",
  "key42": "3ea9rTPCNPK9t6LWG5cG1aXDihsMMgycGJz3HErzwUk8sFTZeJyUQYmGrywF7YFAuXV5SPcQ9rNXLHnV141Wn166",
  "key43": "3vVBTt1J3sGydkq6HHL8ffnZK9MQfcv6F3HuL1EUkM6RusvC7M79V2jsWfNiTZcBUQGfXjXSBwEeTiMfPBsMh2n4",
  "key44": "5gw9sdgYQbyNZWAC2Hq3q1o8jAMLy1nidCBqBGeXo4mCg9yAhfU96XJWN6yghcUnoEHQihtY8ocbi7c19fNEghep",
  "key45": "55N49oBtdC4iPJ3Ft9px3PeYwsYqpXSmKpCPhWBJJ5kZB6pZQUDwbvdsFtF7mibnQAnKKuD2jWM8bKWk4L2J1cJ8",
  "key46": "4gw1k7RLnQiq3ED7qAET3LWp5kbvimvzdvdde2NpRBVxvpkDJ9RY6dp33QT2jPsZQD71QuM9eNRFhkmYoo4vX9g5",
  "key47": "3hbaDrUsWUxcJkfK2suwU2AW5rkfMLvsK1TDXAQyshEtaCvmXRqZhgVRdroBHWELcEjjhicwL26XHUyisPEYeoBe",
  "key48": "2TYHM7WPUD3iUzFpxe1skvsK3BrCxJaf5cLZy58EwWhPYKFpQkKARPnk2rpGYDsixaMzUSkiiKmkntWJ1mRkWzBE",
  "key49": "4E67eQtweh36DfU5EzYyq8oBFSuBwf2sHTTuh6X4LtLrTFi1J28tr3GEmWAcFDX4R9CWMQS9T8MJGs7RxeNrsCRd"
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
