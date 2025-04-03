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
    "c23kddYQy2Ff4rf6tHdzARrGFDW7xMsAKGToVrp122RWh1MFLkY7EL37RzfVfJkpXfUxibLWibwbtuuGGeMUzHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rXywUAYisHZYFFtRMd52D4JXv9qeC39M3p7kq4HEhrADmBQdGrmz3pMoPahJ4CwwZS9Q1NSVziQJycZksSSe9eE",
  "key1": "5gw74WJp1dumYNUPt6dzYBMqtp8thXStfjtnh4rF9jWUxsdAoBP4szLVkzeJhDSXxLUocbgRgX9je5fT9cJVqoyb",
  "key2": "2YeYuY66e5WKej9yQe9rSfyTdLo1mydxboqup6MhDzQ9mRjgja4DoLd3M4RpbkR4vZAYMZXc8ckSvmZUAPrRF1rS",
  "key3": "2Z6ebMAF11sSNd7F49ebWiGQpgBJehHyYdLqMb2pJS9gjK6RoapZmLeyQLcLTpArAH94BjpWSBHuc2aMm77QZyDQ",
  "key4": "5Pq5kQqfFV4GWVgsC64GeWD89ZsP8HuyRkV63affLQo8mGDLxm7Qg5oGQbyX5fQmbiNqzkN1fmSjZKCXitFYn71x",
  "key5": "5SNaFajw1Gne2A9k5E5ZGQAfEF5fqT5LgYyrY3Y17oeVSk8TfQNrZGqdEsTg7VfHvnZHNqKiPEzcLD3JNvmiTiRv",
  "key6": "4KZ7HueTztRojimgaoJJEnZLXHFBb3mWqHUsNhXHv52qfQmBrPmVebjkdCK34MDYbmgJ5pphdiXUMUbsSoXftuHq",
  "key7": "M4c2SrYm1hGqczmGsMXe9mWJUeoHJv141PnEkZfkhzjChT5AuoWjkWvoECLFhRWCWJ1xabk2SEAgxdAsbNnKVDZ",
  "key8": "51fgcRmLvVtXP4iQfuLAWHEvvbr1Un1CENq5rpbsWr8JesDWpgDJB2hbS21saafzpd4XQHeprtkSN6L8U2bTnAgn",
  "key9": "XGahNZQNFFS3AWagoroKCErDK8mjzLreqX6R2czen2fFJX5p38nP7nH8455Hx8jimBTH9typemP3n8L3WAJ3ssg",
  "key10": "5oVjgkJMU4zUcQ7Sb1afgMAZfTRHoF8UkPPSgpMxZPUVdJXrDLzrrHKiWkiouRjGQjBHCC2deHYq28Jier9exfZj",
  "key11": "4zfKbFXUUFNTBCz96RM7Ls3ooKfHZWeXjworfmxWrGvEQwQVJTvXFVAXvJBLaBTKgCXRJDYL3upj6wESwxZ6Dbm8",
  "key12": "3B9QfeCtMWjjYodW4gKVyLVZvUH5yHXXJEwQjWtDwcJ6ovThRegCV9NwtuFnUwJnkatiMnYZaM51piPzbs6ZrJQL",
  "key13": "22g2nhRLMNFeN9qLcuYYP4rXhaejgGdSqQfd2MryGg8hm9ukAMrR9f1GexaM7FVKEA8c48J2DGRibcnWU9EtBAuD",
  "key14": "2GBA2yA2MbphX2D9fdaAhgoRLxnoP25baQcfJPyJKEq9Xb8gAaB8nDhV1zzbFFD1iCxCxh8rttgUftmkxeNPQc3U",
  "key15": "2b5esw2VUjHseF1LczBzDZSnwA6oxd1ePByCKHg3j9nc8Gyd3v6xJrxxAVkNZVfA4qpHm463CjnG5cCQT6yPMsJk",
  "key16": "65nrKfb2GUYkoKhdZQV2xJ8vYMXsis3Tb8L8ANqjUqgzpsw7XmcLkUU2Av8V6mnM8V98NmZbJE29PkFURJWFvGGM",
  "key17": "GWZ1VW2fsASxSF4EXX5hTz9FNjqQvK4s9SbNrrD5xQprnTAdaPeaqi1r2zdJGLnmPnW3vR36YJ1eR4R4DW5pf4a",
  "key18": "4dRDxMC54eFGQBAfGeiURsKf4DuJS4kKa88qbW3x5jdnVsGdLga8wvYES51oFGjBCn5CRoyXq6hD4vydz4aSicyL",
  "key19": "618eHdHUk4AMSFQhbaGeG5pQon7CeBAVNkA6NEwD5CujygGkPRvUMaYjFXB1mwBM45EqBKwCjQosHb5AeDPkaXdS",
  "key20": "4CQXzqob9e76CmuE8M6ybZewEVDr3LXdeVvwf92CRG9wDVHBQxwK5TnhZ3BN7jnKhRKtUg7ANdoDLsHudYJSjrw2",
  "key21": "DXD2gyFjYwixgNWx88iJPfRJzPpA4vn2GZMzZyoJ5mwY9WmoDbm54z4wxwmnWka9q2eMdL7xerxjWLSe69ySvoo",
  "key22": "2cNsac3ngA6DQC9q6XqYvub2ixhUXh34AxFSQ8enaNjXFdHQZhAxNvbSEyYCLm7hHYNLiwNyjp16Mg7iecoprEPy",
  "key23": "5sRUvwEwoV3xmFeBr1yjKxBkzfjdTSpNTtPPGTEroPiknggV9SZMceEiRJaWRcG1xpnxCcFH1dDXhqkyNdokztSG",
  "key24": "3avx5bUgFHH1fDvuHzqT7wCVVXkU9GbesxYgZ2zwuRPwy3BWRWLtyWcbBy9QWjfrQTWwbhsVUV6ytqEbgD51Uuem",
  "key25": "46GWF3tBdiKY4utBf6R14oK2tm5hcKupNvrhM85z3kX3fWaWv8X6aN9B5YR5o3ZmCfM5gMuFmKU2bgPpeNy43Q7k",
  "key26": "33c6Mk3BXZyKrG2ut6CfhvQw2aanKxkUmVrP9nxMEuDwBtA9gx5meHRNKchYhNzQ97rJgtjXm7prVv5xcCuYxJRi",
  "key27": "eFvdMvpiqZySknbkc4Zwbb3svTT5A25Q5V4MVJfiEEe1MU6bJ3t7hkCLiTYjEhGb9fBQRzfNM8BymFxxF4QkUu1",
  "key28": "5ziFFfQiE4wcCpS7EMwhdfA5xhWKwHoyxXUdP9XFiFcvqb6CDZoXrR74amR8a53NiyGrcZXEb3tKx5PqdnzTjj9G",
  "key29": "2DBZBuiXc74sdQKDgCs3S4DvURXdKc7iPKacxYjW2fLi84rXaRDgv9CxruT9AbUhrxoXwez4iY98DHex3B4VCVgq",
  "key30": "2cqNyRLmVhPdVXsrMChqqmjUruCjfU9nWhjxonKDqGnNLHNZBhWxT99Q2eETonFHd3wvadFF2UiYxTMbbxuhmxFH",
  "key31": "4ZqtPApuxKbGUuAtPoDEr7r9j6NNShpppLLHueqAHpJmNHSCGWDwBRagUwzVzJ3WFcW5L43d1v6Dxi8N8cJBPymL",
  "key32": "2e4HgRWQ3ffEzm3zeJrHZYSfzmJ8yb4vVjFpzCrQap7emYpsZGtKwg5XzKDfyZHGvimwXaTT3L3vwj462o482vRs",
  "key33": "4PUG9PZJtSRZqPvHiZTn8uQusMLPqedQG2ou7R3swKx1Crtyw8V67iypirjq1LPh1iWtYwPCpRw7eyThSdBD5ZVd",
  "key34": "4L2ZDMbuzysKbPRxMBpiN8ry9RXRDw7v9HQZjyifz27H4RvShScDFQgWgAAMQy7JhE7KgL6NKieoPCkUu51k6mz2",
  "key35": "5veNmvQwWKLHEozhogDg1o3N9rssDGXM6sVam52yzKmpdARqxv3jc4yzRFGHLudDi8n7YsuKgUJFnzf7SJWcouTc",
  "key36": "4zFsJuNhsn98z7kehcDVCJoWVC1N8rDQHAUzBowRMDafXVM1X2wtMci9bfLH68E32PUsDnQn55hBKdMBgJ5skV3r",
  "key37": "VsDMCrng8mgv8PCryUdQorfhdvoa6oMNWL3ammknLaLdi9STA71zJZJzxxnyp4ChtusgctbRaTAAKHPCExNcGdL",
  "key38": "457FHnYs5SL45FG5krQxGmz57VJAV7SkyzexY7QVXfai35bbAffmp8WgXfZp4WieWjR8BaGyLfxs9U6aLY8hGCe4",
  "key39": "4qeCEqA7BVm5RL9rsbGfdDExyGDJ3ETERGSavezfxjLzxCAV9T1UgkT4vpaE26fmbqSLJ7d7zJXB9vtZbifjYCDe",
  "key40": "4QbTaM5qHu8zMLgicQoSbiPphp5rmB63oacvf1zzqeoou9S4wcLsruSB1hFSndUPWuomkTYDSAGJUDuowSC6GRku",
  "key41": "2MYMgbbnUoaR7KQdBgavYLvuqGS4KsiqNAtnZ29HDT1TtPZVBFDCTk8Axr7RtL94hMNQm24PHuatgup6tJz9WbbQ",
  "key42": "2BL1c8ZphykCm6hf2YCFNBkEKc7uysp9vcsdKp3E6BE5Fygyg6s8w9F6uYDeNzjjJXmxobwYCb3n1rvcdh5G5BYd",
  "key43": "3AqNhAfNj8YNVjEB4D5D18fjdsYMVxwHR2vLTVGMmoX6egJa9K3NQNQufkLo8J2cuCDKbzWsqquFaeDyxQAuWdFF",
  "key44": "sGZ6psuR8geD6dgTQyqGA1We2zhAyUvgX5qsbr7evMidooUFzv6Ckgos3dvuShS8PjdbGk4xjvaTU3XPQxTVVew"
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
