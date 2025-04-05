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
    "bWsHecYxiZ2kfVyMKVfzmfC97NDsrbRrEq2ie3n9tuQnP1zsPCN8XiHTXeo8QvxsQUjiC1BmSibJJo7X2yebQia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "555FFU6Hr94nDCG1yVYKq7G9TZRsPM72Dn1BE9dVCm44UvoGoTxhkz5HVsTtLV8Lz8os9fFTdEag7ByUUgB3R1tb",
  "key1": "5GBqnB5G873k5SrDPBVw1aN69rYgk1mgB7Lzv3TMgctg2euCtwnpUUcJreaQmSDBgPvsJL4L9uUfk54WzoZY9p5A",
  "key2": "4GF4Xk32GVt3KWQPoJzhBDsT4AACg7w1u6sW3jBaispfhG4v6RHBbVo7XFeQAxzyBC4QoPiP6GhsVMTK4wyai2Hg",
  "key3": "5N6AEw4PdwfywGaof3Y7sq6fQmZhnJKNcmXRVEPrtv1Rn96evA8uSqbAMdggtg35otMGqdUBTdvTXyskiUPyB54C",
  "key4": "5Q93DuoMnA7FPmNjAj8Ru8RpgGENe9xR6ZaaDfzr6o4LqnNXhpUY2hd9pDfvyjojfVp2W3u5zWjxwEitjWW3d8Xs",
  "key5": "3BeTfRyJrQn3t8LDncNvUyR58cWD3uN8A1fF7kcXg4gWZvycnqnT6xTTRYXfCjx1gxZELtNYwPGifxfUcqBxawaR",
  "key6": "EHrsVQuAWQfYZLtKy1TuBd1W4GApscpLrtMgsXap5ynFxwLisX8ntq3E16jwv2ZxFG7KnQZ9wr52ciNg2Hief16",
  "key7": "6ss3djjxJN3N4mgszkd5hhSx8yLCqNjGkVEswWtjTspjBykEP3gdrK7R66qFTUToLMQGua5dqbFSSmtWPXhjbWg",
  "key8": "XvTHBEedsirU9J3mzXT5ZhonBojeDWa3c8Lg1JE81cu8KGoLF8Ani2gXfPs81eQ5vJhq3uC4VigutsS72TcfPE1",
  "key9": "5zveRJyqJDBg7EuRfEY4buH8Q9VVczET4S1yVFdYjSCQceGkp92vRCwG8ZC567yRQajnGwopKFMVyauKHdnBsnfx",
  "key10": "DJjWAzm159F5P88Cn1dKEiDBkYLyjdR88U1qwPy4iA3WjFohDTXuKrJ4ka6pdx5nxkHq6T9E9coCaiywQemCVjK",
  "key11": "4a4aKDBaBrb8efhfe1vEawktASzruRHktbZWQQMJRymEq6R15E3R6H6mGXQVBS6EDy4shfWrtiNvRvk4rrobof3D",
  "key12": "4g42g5WRPFHXD2Gcfm4NHvWavFdpQcLv9deEGaBFXeSgsBihrH9vzsrZpmohMTKwjBJyxDV3sFcQKKF8oD2TQTmk",
  "key13": "3yVNTCaMPtwKU2gvcaZaJcG2a8iT9YLKJKctuNk6N7NTMwuorrzGyBBRVXRYby7US5Wn3m3TLwwzgY3PBNG72PTz",
  "key14": "1r2o4q5BJeA5VHt9L2Jmnuhav2X5m2bkNkbW2KSiXb5K8uEQNKtRW21Es6usepEM1F1kVVjHq8Guh3qwvBBRFps",
  "key15": "tbnhd4snGY9NTbkjuLKkuT77eR83b1zen7ZmXaPEhDjFGnkgUvGLgLPoAJQ16U5AEaB6FVUD4GWsvqHC9XUQ21B",
  "key16": "2mXiNzyeD4YKp1KVy3NwtEETmBfnQBism3dgUQQXdyvwSxKAUEDKKakbXnaxtVtXo6SzS31GvJ7hvbfTzfjeciSf",
  "key17": "2Lstm2fFDpt42qL7bAFBRSWbxmaYb2wnZ4tua3DiXDbPt3qkjxH7Za8k32HhTZgg7LkMMeP4pnBiqX2QX28ZBdkQ",
  "key18": "4urwjHZEuz2XY1ymyVrGPJvdosoBKj2mq7BtCtoAJJngvy58mbc2VUhdVsPmyshipLWrQd9xr7ztHrk5ndBMSRS",
  "key19": "65dwB2W3aEtfznDWXAdY3YgBEyTscFken7j5JFZXjZSRBBBdXq1TN67Tpu7UJrMVEro57d6URUZc5yyp5uvXY2r3",
  "key20": "gBFr1DPdATLtjfgXh4uZMchA6qwEK4AHQaY3UGPrPUjXs44ZFEJK1Vpw5PNQPNYHxTTRFK59Vj84FJB26ZSvcVR",
  "key21": "5FGKAyN7o1syZpxRcW9G9tpTh4HeB1P74DyXJFhbKSTboah21LQffFBEgCAv52XyVYHf2sY7TWA3QhYomZFRUzYs",
  "key22": "5q9yPnUMAhrJM5ij2zLPLa5QkXMCnfeKrDsokuNzXR7uj4P6YMxoDjDhznk4TXCQrmpLneR2ZSGwbfuNL4djmjmx",
  "key23": "4JKJvgXc6gcSPScoK7W9MvJahFfS6Zm85uHyTaR3mLAArarTiKTNXzYtSZbT3FDRnwCc9hwYoCxTY7EHFXqc2Wsu",
  "key24": "3MFvZcB78eLSzsJzUyU8GoySyXp7GDUFCh27tuGyLqQvwjsaE2ccG6f15yY3TxeGoMCiD3ef5uoGjmn1kQjyHyte",
  "key25": "4gp3PqK3Q2Bmthih2169E337AoTs2hmHuxzqepfYJe4EJJbTxvape1foiR2QfhzUdRpwG6SVQ88AgxEFrYQQSCXB",
  "key26": "5Pyfnt2s4iDFhoa2px7NQTTqnecyDJqBvjVQdN9qJ6KJ7V6XR46iw3EYtJUr9KfdjQJPxZ294pDJn3D98Db6qLLJ",
  "key27": "FFPNvYN7aQAE2VBPtag93tQmy7QagqoBQzxByW9X4dfUNL32KXwEWVYSCWFMuMSbzsTubivMKVpDPBg6D49sVhL",
  "key28": "2y6GcPV8cAZqM2xvqVYso3dtCPnbiCR25LE5qB1E2J4iNi9fDMrDnN22w9RvfG6cUbpUBdwsAW7sq3n3jfCn6Uer",
  "key29": "4Z4kq8JmPdjtoDEhTrkThZ42pahTFzHnqquRZDFokf6qEtv7GUb4wLLrx97hMuLE5M3h3j5iw4BkQtf1aCBf34od",
  "key30": "53XVqJY7o6rmU73jtrhxYVaquZ3zezxf6sPwDvkAZK6tnHbko7mTKJMa9fJg2oxpmdNPTA8HRsRrsYPkCpPKHdEL",
  "key31": "5FTxUdVKr5tbTfAEgpzpwm5z2mgW3MZ5mvaCRmZ3TMKeFEEGBrgyVRNdTdx6nQddbYeqLRAn7HJ6TQUaew5h1Nnf",
  "key32": "2RoVdXNwAmbG7MpwfxnDFXchsVeEU5WGHTkhWQwgHtfdkiuGZZyzJoUZPK3F33yqYj4Uj9UberPjug6jGbYedLkz",
  "key33": "2piozUUv7oe9sCBoe1eA3bNEpa1EcoEDcS4Uq5TgcUyHKrejVVeU7cMbpLwzaL4yqhHDPpB3K3syjKH1Z8vDiakE",
  "key34": "4esjrEcke4nU4piffxsVL4QoMSDDKUgSuCazNuCEH3RAVyDQPes6NQQS4vP4h2uNJjfnupP45N6bbeyDnfXH8i8",
  "key35": "2nAhDN4fEo9enHhr95x9ptrWs313HfFrsmvpAo1tCobN2QB4mZTDhLRnJ3WLmQk4tA2n6FJAzhEoYk8H7hhzka8J",
  "key36": "3QJfKCXUqn4r41mvR2vjUBk5V3r865PpJRoHJ9gUgUDJnsqrJa5Jcbcp4dESD748oDEbYW1zTgd9brWFVSJZ7WY1",
  "key37": "2LM6rbQ1Y4SRoyu9vkF6h1ois8BrEM9AfR1edXBuQTJYcd2tDsdzrxGgWBuZhJv9txkuci2gNTeiFJXHyMvXEMQs",
  "key38": "4p8GJqrh5Msq45jzC5zf8MfSw4btxE7zZuP3J1T9Ah93BmbQSEbunhSD33bvafA2q9zfmdFPu9vMrQndrabDFgxz",
  "key39": "2UqcR5NXYMqC6Pr8CurbikCZDQ7rWRhxBADxinFwUhNQtA5KAN396Vx6fWi4a3i8aRGHJ9p8koqPnZonH8q5yyDh",
  "key40": "5cDg9KdjoKTJH75RhfrwKK3TngGV1Ytom7Tw6d8RNGrsk3ppbtYMGziM75xGJ2VC5Az4D7NCPqaSUfuZ9bJEWygP",
  "key41": "4XX5k2ha6KVDWrXeKWEp25BHu7Aw1asTYjWwWmJ1a2kwfGpww5gT9jtSs8VMBbPdZgC6zPNhgHYHw27WTFqqQFW4",
  "key42": "2CH8X1qTGo2c4vgNJ1wcL8zsMyMpPtmsjkmb6e5eXry85nSNGTTMLXVxicDbZ548p646uWPvmb1QG8oJEX7ADpDi",
  "key43": "2WsS5mZF4q8RXr8wEnyNwBp3gwUJfxbigr1qdyWUbtqtJAH1VDpHF4oLCUpD86QTFkLaBsnBS913u6yg8wG7cBpz",
  "key44": "2vQHVHCtfMucn73hTZtdqr6CdEAEsCcewRVX86etXMzaAjgfmpucy9tpUypWFVQij1TrpnbMVEMYEnEP3PUCzKqQ",
  "key45": "43vS6PvJNEFU3zMYnV1cKWtg1GRybiQ1r2nHam1VPuG5b3SvwNjWhKNeHiZn99NnPzoNXA4nUBgdyqiK31GPrnCM",
  "key46": "2PiLHyMGXcFqLr3zVqgV8zXCk5LpiGee57Fx7vKuDvEdskktcbaqRRvzowDQmZUxuaLT2ER7uoousjULQgHczzfo",
  "key47": "3pfwP162b4T9fiWUL8m1qS1RpHkmLwEska3TKnmV9tBoGa5EZ5uuttRPvXY7dPdHW5czqyTux9LZSsRCqne9LBjG",
  "key48": "XS8eeCTSqKoPD1fy4jWjUZXgy7EmE65gWE9QNv36ZZBsW23V2t8cQYxVNN1aHks6bF8edQHyFKQJvV3GJpWDwHb"
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
