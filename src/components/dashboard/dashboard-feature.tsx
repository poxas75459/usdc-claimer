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
    "2wNpTfeF8jTzqfgWGdCNUFZWTKeZVWcFZUgavgd2x7tbmqSUm24A5L4k4Q3oE14hqAV82yXjSew99msR9WAUF3od"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KhJA1pL1WTdjBX8BVWcUKVLScBzjMXV6Zp9fks2Z7ZNa4fzKD92oEAptaKv3uciERVcHsL8wDVWYUgYWGjNfvvr",
  "key1": "4EQoNm3Mo4c5vf53HYMVmXDhyK2WFBPDnUwS6kEkVM1CWg64735KN8q8cV8aa6FiYhVhVES7LArxVeYg43vFuuuw",
  "key2": "26V2fEc5szwNjJeQFgRURAoyXpefwi4KZPABwvTi3PHDw4tK6cD7FVdAf6Cbsdr9r2WE51kvVzane2fAVBJBVk2a",
  "key3": "4wV7vwQxX8bJdnBDdgdFZnGrksht5WCibHp5dEKytUQH7fZAsh959Zwee59rdGxsgJZb4D22wHq2aT1m6VY2YxZY",
  "key4": "63SiJ45135R6hMXi7S95MEwSmhUEmoyTmkUXRXJ6bqrqmQ6q5hwA5iez4hwfwwDyrf4nsi1Mg6cnuJDrywbZHmB1",
  "key5": "55kwcerAfDi4mJ3qDWAruDxPwWbFaShctta6MoPSz9w19pTSzoJCCHDxZYG2Vi1UN5iiTnDC9EJC1ZhpmYEvTktt",
  "key6": "vQWdSAjgRpnRQJbBysujc51GxocH8Fj4m57mPkVVF5FnHc8Zn4kVWiy39cFiVhePxgtJwrcAeAQuxRTGwR53X3i",
  "key7": "2HgBVDXaxseZXZmee9ZCc8eM86C3Dnz1JVtzvAyMASWffEULPL2EL1VGD9WmKJaFPFMXnDZvZVUbMED6esrGNVcw",
  "key8": "3Q7f25sdMuSxEfARcCXZ95h5Tpy3nspxYbGs6LrbpD3evhwR6JYALByR6k3vdeN8Rxj7tRbe2wxPnFnVi5YZUXU9",
  "key9": "mkunJ1D2uaTThUvh3ErnQtRVCX6HLqBnSchAUv1CriNAnbbzhYgBZUq39EzV95QC2VniFyQHDbfzx4LU1JxMHZN",
  "key10": "22QZxb4MV6XktXxXfY4VLNHwahm3YVvMALpTVPV1VDffHusm97Q1zzKdDrrH76ReDLkAfY76HaXEYJY4FNSKDs5s",
  "key11": "2UT8nUwKxdbPjqwBya5YCE7h6fgohRvUMFg8Qqo15D8W9gfksusbrnPPD6pNY2VB9U5G7Zd8XTQh2489PJBpN2P5",
  "key12": "3SatsbsyfWzvSH3VoBVGVifodP6JCGixpfkJhNwNybeFRnSvAEwgFd6vEoGUnNX2TZNJcYBMdDdGLWuUxtFw93QE",
  "key13": "3aS2HPGdnLxvrnWL7xYYCfnM1Nwciy1ibch4HoRdrV8eUhPtWvud6jfnBkW29hoxo3Tp3spWhsxxC7vwZgFpu1sD",
  "key14": "498SUA4XVyVw7uubBu5cYHnRoxfzz6YxkFRKWuGF1Q7roxV1YxPLzADg43txQ3s7DTpV4A1LYZTuLFK7qdKueTi7",
  "key15": "3JPcMoUgXVRw4UNvTb3MqikNyayTR4noE7T5Eow2om71rrJNjB4xPcWHxJbrYc1eiVCwSQv33XrXGumc45jbmoqZ",
  "key16": "39pQ6uxz3kZBqCgYt9UkBZ6TqyGVpXZ2wXgea5cgQDckJs3mctTs3KHJaoMzxBq9NyffyHNkVpr2fWS7HrWKSMBX",
  "key17": "H93ddKrDMiCeWVkhjhFZjgrvLiRFE7S1y84J4qusCVN2YZaseJGwqNKToed7QELi45hR5hou5TnbAvtSw8ZA2tU",
  "key18": "2Zm4zdgDSKv9w1ccxMPfq8Ws1uprHGdmPE7fmdrMavEGfKff4g4mWRdRmmLwHTmwzJ5nuPUaHPH4uMHyMmbirHPV",
  "key19": "34CfPTq232WJmWaL2tM98NftMt9zVVWqJ5itFZZaeWorNvh5YZyEGE9m3drnA8xNGpiW7ZBvfbUU2TCczkYm4iFF",
  "key20": "5khUMc1pqt7hdrJJN3X5DQbLDqM4xt879nT2A1wYPaG9ujoVSkX5F72VQrw7iVKcGU5fS99rteh6kmYA8APodHok",
  "key21": "4WZYJeEjz5pWuwPVsxAnMANtLq7K7thG8r5UVz7nN9P4HuQ9CMxFguPxdn3E5ehEXrHxVLagR4uZ7aFwhUotXLgS",
  "key22": "RLEbg7QshgvveUsnUFAhh9oTfqNWZ4v2a7PGgWBWphMRvygP2bkiwaJsLL6K8tszocugVKvRWoDb7HmfN2g6ySP",
  "key23": "4jCmzY6mAn2vptVtdFgZcDg7n3xcFXmLa4szx4DyXZ1QH8C4iWeThMwDpyi4AJeiG19T7zyxm4sLfsJ7aoX2LiJd",
  "key24": "4cZWGFeTgsQ4bodN7a1x1w1g1dFRfLjUUWaX9nfqUsSg5iqE9P7tA8mFzerJYuisKgvCXtFBkRW9cMwFNnHxi3xu",
  "key25": "SrMh6WYVYn6w4NcSj1fFgkciYZXcHA8KLAgLmYu1Bt1sFApchJhjS5raVUd6cM7WVyQYZepGFjDQUncC4satLC9",
  "key26": "fzgMKsRfNUPYC5CahyNczTbipvARM1HZYG6XPSBffYGjumRtmcnymusSP5c6khBEybQWiHXHMxy5p7uZtGEXoCe",
  "key27": "3fntAx3UK43GU5trjXNhURmQYbP8H6Nh1S2xX1jQ8qzUnd3xzpmDWTWtTucko7rQt1yeimuMtXov8JTJSppjpMKR",
  "key28": "48tFCdzCGTqUvE3XapfAn7r76dHLmRw2urqiWRDat7MLYAZLJXn5Aj6RXLNqkXGGNccL34dHsBxEgqKAxBwuNCe9",
  "key29": "4aMskFTQd1Nd6EZaw1tfHrRhAPTcQBHAhjGkGDAGQqfryem9dqHncgw5QyzK1ACSFKZbB2ApmRjq8gqX9p4xe54b",
  "key30": "51EhErHVow2Zu2T2uRmbMvZSLKJNWMLQiEbwUj8U6vYE7MXcnuSJ1xZExEkwaVS7GQetQ88nbAcQBBKkzgYEJ9Sr",
  "key31": "2aTpo9sPjfKqqpCVHpECNHbXhf64xQuTVwiFKgBWycX9SLFBNkj4NrBpUHE6BYfNCa9F9K3CgVkTpJXgbBpw8Fcd",
  "key32": "2RcRsA3cjCBDZfPfum2SEjSW8UnRwogKe7dDB6FkEqriX7uEEa7VTYtK8ianDYTXZAyCVhwo3x1NSzwaZHxTVgYr",
  "key33": "5iBXpR1DqDFVMgkxxLBU9FVuefAzg78WWGPs7bEk7RPjdQFNG5CU1ArwSbQdGDS7Pkihz5SRJsw7C6t7aCfQNqs5",
  "key34": "4PvMgBFknAhEvGrVaqpQSqZWvYyyhvckMiX5kkuRdH7g5zo3mi5Xn9ZqsbHRDwjdoeTnJg9Ts8wwkE1yCMrTGjD9",
  "key35": "5HfV63urcPmrYAsDCwwz7zZCWLHgn3ogWZm4jogW2kyJgqtRoe42BQy9piPEMFpyGLuxkFU5yTpkvEE7Ttp8wHRg",
  "key36": "3SYYFTXp8ZW9G664CbKnYKFwWUnNwiGVNBRnqdqRa9UrPHbc2mGRX4pgDBC387K1SZtAvrdSXb1GQiqSPcyzS85",
  "key37": "2BqD5sX6ZHtSWc16gjNejhdC75H1TWiD4ZMEQeR6wgB8tiFjpawZumXSbZe3UJvWxWHDmLT6TdYMX1YaXpyKusPp",
  "key38": "38bMQrUAPhpNJTp6E8tB5bVRHcUDTUuJD139WuBg3B2xcqHCsuqb1mEQeT2nCJgAkKRQdXbuAxYBWRZo7qPnYBFG",
  "key39": "5APhL4H4k3A6zqhDvGP4uV65qdvgwjGDcXFtPP7JogcPT5pCkEBq2U1FE7wqqGarh1EzjQW8GvNCJ27SCoaXD5Bb",
  "key40": "3ERdQ4nTjHHrk9ugSRR15EqhzK8vtMgXypekzkr86z1J5pcRRBFZQVBGyw22djxEBegv9yp2jRJi7fyiyuv2kMev",
  "key41": "3X52P82Q5wGunuGGpw8cTbNnmxvftgg18yqivEs4PRPyQJVnF2RHSJFUxkZjjfPDfXNgvXRpiotzWsrHrqbMeY3S",
  "key42": "4DdHTLRta8VGn2ajNzPK4kftrCax8896Ba9VUzG362wrWXbJSF3RFwzA68xWa4WDr27Sh1w7nG4YDkJQiChBvsK2",
  "key43": "3rLbCnPMdTSXNfVpG7xBnRbE8v1DCqR7AykJeQkWbBAbGYAnjt4AWm14nenwf5bor24ykeuqb7xti3uJRu8GZdB6",
  "key44": "3C8K8rffgVzKbV5jL6wi4YELLv7CKtSPYKRzcEe1boWbH9M1BwTyMXbirGX2B8Z99q8JPRArKtYfsNjkExThzJYH",
  "key45": "touo22AEtFHSFFhcAzpxDxYCnVYEYMvK88sXPUebShGLvzMRXLjLCiayu1eJVBQj3T34aFsKiw7q36X2VC7MwCJ",
  "key46": "Qxnm1tgMtNQWaaYnjqhYDoqgwif57L3MxNEoPr99NXbyugcq57bGEdjVHT8erGYosPSd8Ag6EZ4NJRWVAn7Zsah",
  "key47": "488WmJA8yM4ocA4f4kAgo2pZf2hv2pW17ZvJ6i3gnSmuo5KQ3DvJsUfhgemHRdPsFBQgrh65LWc8G8XQbPJAZkDA",
  "key48": "23hNEb15fmeaunMA9yfYAkSUcwoyBkSFv3XFH2YdaiBHPKA5DxKfMNwVV5FYE4fTurEmkid76iASbc8wv5RAwic7",
  "key49": "3zKuDCdbNFgtGedESvzaYTiHdU4EkYudgKGfgW5BFiXSc7u3R836DPmPgt3mkBcPtB4Qpj7UhhhsNFZ4aNzJnEH6"
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
