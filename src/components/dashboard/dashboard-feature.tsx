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
    "5Xc4ENftbuHXK16HxGvsEHhgqKiZDmheCws8jLDvdfW7TWRXsXaxTN3KX6AS355kYz5EMgPpYnJiEy5CvhFFFhek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fnLxsDo5L4XNzcEZrkjspE9UmNDGR4nwjg13zP4HeCTo97pZUxRVPXp2cYLwLaDXqof2mjz1QWuHhvsMFnukxY",
  "key1": "2oahfNPDzceD8bMpfRfzU7iw7bsgfVPaYb6SGpnNX5PDxynyGa1WaMp1CnzsHe2AdGpunzgLXR3JGhdiRCsGeLd8",
  "key2": "4nZkAVwy2gGsu4zPakAuGZyfTMh1MmiC15jMGMbmE2fs9mYnhKs89WpXsCJjksRMWg4Sc5puKihYHfyJGdFCgZYc",
  "key3": "5Qzs6kdM8nYoUC3t5XhZzwTX9mXfon47BDB4rJ3e2w1AqhpGKB15TnaeBp5HKUkhNDtSAa8NbKthc5b6YdSwZWEr",
  "key4": "2THbdDVUS17KeFS1o8XaZiHjCug9gSZTVYrBfDLGqtWFVM1XnRxVz5dJqFdhTjaFGwfAytuVMfYMGALnaTwenG4A",
  "key5": "2Zeaea9ftrMhykuowcyUGcUKSPbBQtVHw2Fe7goTpDzWYUvG5oAfyE5FPwk3PwnutkCqfPGXfF35TvcYGXs3ts9H",
  "key6": "2YiSvWN24R5hsqx7uAEP5vaSLEvqkeHk9wJZkKhuhDGLPzs5cMTTDsv1PvCVtPFpEXV2sR7U3hKmDRa46AF1hGrZ",
  "key7": "5ERXPEoYbQGrHzaXpbg37P3c7QHGNfhMZYH3Bu1xcMM56KVeuw9hCJzcKs1MoQvpYPazbpzqgKinjKaTfQmYC18p",
  "key8": "4Ft24mzq4eUz8TM324P4g2ZGE17cddiPrxybdRvdrWrmKTNLfcfw1qaVSVvZYtj18icRmZ9j5C6sqM19PNF4seLM",
  "key9": "3zHi9K6XomHGaV9sUH73cMdiUBGtZedkRp114TtkeBiigcFat8G69cWU2CNTzBqrWGXX9Lw7S39w5RifQR41PK8K",
  "key10": "3UrDW53W4GZj1f98doMYSnZ8s1aEs7LZEVVoEoghHNwmbt5TFz2DHkUkVuur9KspHQHPxeEevrJuxnozoo7GvaTU",
  "key11": "116DsAs6KGD7iZwEzah2v9X1ov5m1q5oAuyaSqsRYdMfAKCshERy7vGvM6W4hwdxo7zi2Gb3dhRRUx85UdPBrnc",
  "key12": "3RKZZvPaNJBAvm633KJ3bC6t5jLqrt9t9yE4pJu6qYMvWy3b1sjcrFcHdmQ7CsgYu4xHw6Ao8GdmMSrhKe9qpyiw",
  "key13": "5bWHhHaKLe5JsJmuhva6XGVXC6ZE9PT1fp44tjamgFXcoFXvhsRZx6iCKSqcyjzsaAFUuGAnGd2fNfxegaGwCKui",
  "key14": "4U3HFHwRyW5kniS44VTShPxYqKqTRuUa1KGHBYAbXqyXmK9GHbyeaRBfvnRi66YetELg4ViKUwqxv8tDYEbjBtKm",
  "key15": "4KmHvSsNKHvwkk2LJotSwYpfCRbjsyaahqpuXWM9Fnxwumkxqcf9xqcKYMpqmW4rqd3QYy4ErCt1Z3yTkK6XoByx",
  "key16": "CogLmo68QwWaXiMrDSrjG7Kn6ubTof1iCKPAdxU49J5i1KYXPcfExY2apAYCZySE4KL7agnRcB18CLoQGwKXTqb",
  "key17": "3Rcm4hWUy1i4ssm6HsZPafQcKwWjq3n8oBwshfgr7bhf8dhekDmHjx26UhGei2cD3GfhngyDH83FSE2d2cxgLKQ1",
  "key18": "5MTyHaY73psMdDWSG3MNuLw2gw2TPuQ5Mj6P7RiomatgRBNMwGqdAo5J4oomDh84niFLhy3PxsRTSEmL9WCCrZA4",
  "key19": "5DxXZLP5MHuZj32Ks2qLAbMTqQwXSyYGKuJYghruZWwb84fAnpgmb3FrUMKU2SE3QUXeEqwX3ieSvSYXRyCBJBgn",
  "key20": "5vH4YqSqzhTEhw86Jg8f7jhaHo3GvQP1TgX2nB779Z2fW5NWmeM3JL34XRJqqoSMRatnVB1jeopUCg1qyCz5Nu7K",
  "key21": "4RkGFjW5qgFY7giREBHC3EmDxsNMyNoCXPFP6nAa3GM27pBv8sH2uh2vJ5qSLuTRzxj2JridBqquQARrZstu6cgf",
  "key22": "3PfhdQXeqtik3dLyzMFEtxwEzeNp6BmiYQMAp7uSwPeSh5EhTmcjd5yiQ9CuwtXzZnkVCQ9eCcpdGPVYnRgNG7DM",
  "key23": "23EACBSr5sm469KVSweFSpFncgm2uH2qphxetQsS1w4duywvBq1jP5MBdfXyJShz3B8jfjo3Zs2PzSksu6F4x91M",
  "key24": "NcMQumqLR23bda7zPhoygzCUZWBnBZatPNATukzQDsmcjZ2JxZHg3KuSCZcFbnoiTsi56g4BJ2hqNRJ1hJotsyf",
  "key25": "4LCXD7MUsUVHGUPerhrGyVXsUY7DDx61eQDuAmHfAkbnLnQ48otf8i24Y7mSVBNX9viuz73L4RfBHkvSPADPFuJA",
  "key26": "uSBbiGgp49Tkdr1tQw4bxjw1dUmri5zfMk3T1yxGsgaTffDr7U3eRwB59BGkncNjNKAbNoAJZVddH9nS2bRv5ZM",
  "key27": "4YPNeVjHr6TKujFSADG866ty9FS7JfQrH8oMWFdjGmuamZcaq32ZdaJMUzCwL3JV1G75cfawZEw1VDtEL8e7TyzD"
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
