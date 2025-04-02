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
    "qKoNL2iGjVkvhfavUazXcRTYRENdJVrcgB2h8s1XXtxwdpJJJbxkptk8J9j3tMVDtqEUQxnpqvdVxvFjxAZ8pSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GwU8VgVELbL4CDevjfnyFHybQJa3yY8UBfXhCo8ihMWEY12Kfuakt5MWVatkVc6ugWzzfSh81QAwwyLJPi4MfwG",
  "key1": "2HE48hqVD85q6BFHKC5dopemcEbhvXEd7TcHcWkb67amntt8J8bGCGE2sz6L1QRFFYFM9TZV2fSCRUqZFVG2mBbo",
  "key2": "14NLzPivPLozzFgPewT3a7w1HQ6EpAyjSF9k7rw7KdJzCazeebUXKakeM7PYVJPMrBNL9Jkkt3NHRK35hVexqj1",
  "key3": "3r4KNVbaw8e78UPoBZj3keXavCjLjfkbvjhrWdBg2aMYBoyPggSwNA863aoAQNG6fQoJCK71Shqqr8ktoHtnFWkr",
  "key4": "5KEUMtS23hCo3qBqhjNDvuyB3pCawMtv1XCgKcGd6mkz5Ld79bxWGMz9dtiXpjtULiL1nKae3kHrHRt2NVMoKCUm",
  "key5": "3Pr7AxmY5pfqZFLoLvwfNaqH4W2znW37eddo3QWwN3ZDMchqByBww6Sr9tUy3Tcr8ErLpTFp1YkQdwUbyyDAnrf2",
  "key6": "3HyXnV2AtvNWxkA3QLbAt74yb38MojLQAYEDmZTomfRNPMVF89bAQgob6TNdntWBRz835k3jqiKi3bRCzAKH76gA",
  "key7": "HpBuSKJEc5z2Bcego7c6QBuqTE3Ta3r7J4UjTp69Zen42hR2HqsNqbiATwikepCeAhoGiSxJ2JSEfVNacqMj7fR",
  "key8": "4ihxtDJWHn6ZR6aeK4TSsdMjgE7JMyyDdX57uv31b1pZCRQuRMQBZNDRnDNZvW1VTwYb72ryNxtqhaupMfiKmQDK",
  "key9": "Gv4LbNRNmFVDV66HhvHn5WuTif7FgrE1Lb28sSKLTwADNW1PyuastgFeYNGNRn8E59SisLWSHzEoUo5XZtG3NeD",
  "key10": "5KY5qAVLqiaQAnGGwJ2Uv3YdhD8zYBx7f89txZ4NiNofGYr744voqWnfiH99hQyBPxV6n7rLq9UEnUQkKAsnNTJF",
  "key11": "P1fSpSN1d5zQ24KAaq9KVSNnyvp6nJSeC8zGTxhb5remrGcqWmEVZqYmWpx63TsALbMS9AHFn3ZzCYGChZvgNkJ",
  "key12": "5us7Cv9GLVquEUAPN2xqc3hVHz2X8bnbmEX1SeTuFMv2ggArhQ3WSELWAqZn8ERnSyWJmGEqM13P3zCGzM9FoMRy",
  "key13": "fXPuXjT8KzGeZhbk7vAcq4i3spYZCmbKFA47bSpoCrB1ybuGVzMBanVjVdvjjzQN9NzepaWANB8ksZ2xrpWBxvE",
  "key14": "2R8XLGufnuomnbj8k3T7qSQTSB84kyMWSdaFCCjTY31KbB8T1MPFM1XbYTXPDJ631trc385cxiR26VkpKeL7og3i",
  "key15": "4ySpVf88vcttGwH2MPjBfgPkyrxVCLYhtPSvy54emGiXNx4NQQCo4U5B8p2dtawsJe5Crdn7XkuZnqDMzUjHBBTE",
  "key16": "2MQRJXtYFNLzzc64XZSAe9EAtrfGXEZG3t1J6oHFuVwQMAWcdrpufkm4vYU8g4nUCPhVHP691BcnLsMhCvL2xd3C",
  "key17": "x3ypxQj14xdCdHGSRKdvB59Le5pbnEhEXgS16KYJKYQ6f26NLqAzjb22jav45ZaiqoZGjCr1GmD61jmb7G2fHGf",
  "key18": "5Y3eVQM1Fafz4LzxPGCPk6eoALVvPh2rmzJKF2pwa8TttxW3n7HTi2m3QgoHKWQRMCuPYciU5AfsKWXKQkQTscuj",
  "key19": "5Bdu8YxEA7eAuUgi72Jy8FEyikRYKg7zYgZgBDBpny84LJgbS5ocuMdwGXvdQ1D339rFbrAJ4pfLFWq8jpKqKNz1",
  "key20": "5SrA6FzLshxvYGxtjnnjj6gL3bcJgdvmeHjyKgb2UjXujon8dH3xW67z2P1FP6u44fqG9GMrvdr77KwsnQbvyiKG",
  "key21": "w4YBAP1QnKRnLMBXiAzB2K1E7iDpWSvoNHJRJaCt8fNDSHhddAZMdCR3PQQpfS3bwSY4HrqDVqKvuX9JQLHB97m",
  "key22": "5kS43ZBJNwCZDMnTKLt2NboW7NWpCr8Zonv8bDmAURdkGQSbpKnkfiydvcfyB11wB4wGmiUsnHw8k79b1mazoxjK",
  "key23": "3nPjHW4symFZJCSoQCGj7d4M4kJY82sj8LtVrEYAWFzd8eQyCfNptCSS5LajJBycFXH9LTCwY6ts3uk77n4JguuT",
  "key24": "5CKPGTWh78oszSAQ2ikPyeVRyykEKZVo8X276CN7QdviqxafvsqD8M9vadUNJ3gxT3ZmpwxGqL8RcGp8Acs2E6cQ",
  "key25": "4WPz1vMEjs547SPYLUEAqUCzWSXjPngBsMRtRoqbjHsPLomjP72SHqHgM7vSg9W8z3ZYnXwCZqJyvEBHnrG9arDf",
  "key26": "6re3FavJaTNZLsZQspVGvgUtgHQpFJgiQrQS7R4Yd4tsW81ndWNvHiCpL3DqPXyrErhpK5t594E39CK1beXFnX5",
  "key27": "5RqcvQL6vPtCnpmu3cTPDYeNXpddTsDyuXbqQ3ayZiHzfEoSiLDWvdsJvHG2eBK7XR3MZ912aeKW2uJ2aPX8WowY",
  "key28": "4fatJagsQ93q813Yy58h7NYBHLpZzNpoykDoAQikhYcN1YD7Ej9idgcvaJJSv74hchGMP7iiKpwk8AJpMSem3Vj2",
  "key29": "3DX9Uho9zjHyp91GCUsTgdzWfNhFQBJudEmcrrGtTrY9NPLXxZqiCPD8XCGd5kAFX9Qmu56sdZcvFnse91FRsMED",
  "key30": "Q41zU5ngbgpmu5Ph1VMx8xa93i8q5TAMZe8dERNWT9XszsYX5hQcQXuf4UveXszmxCzLS7DyTMJzGMpitJRX1BZ",
  "key31": "5GrLNJeCDmZBa71kaiuMTLwE38B5cbYVCpwwNkf6HmiXmsiqSn6UR2Rtdd9ggWtAs2z2a2XuZGZHaBKsPfnCPXLU",
  "key32": "4aH2iZUyRj93dVs3kK2hZe7kc4ALCRjT4w5Z4WP9wBW4MBjPcZZg8kQdvW2g185HLH6WbdEzYAyRQxmEHkW4uh7n",
  "key33": "4qtYX5UTq85b7sHRjcmk5o6GS9KyQrh4T7XY3ZYfaRnkg3isSUWkum2D8WftEGGAZjuMBSHhEXs8pZVWDeNSbbmg"
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
