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
    "5UDThMmJTei5MKMjJrXAEGbJCyw1yBxn7irVixwcfqVdWdrQbkM3rnSqHTWCqH9JuXJcmAr26vVwYwYtWm1E9cae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DnTEW6Ya7cycq2VUekbXJZKBbtZTQjyhhbuNrJibBfvpdCQzZZu2ybUELvXPWkohZaor7U4nShmBiXQ3DjCsYP5",
  "key1": "a2RyRLqqmjwMDprDzHHcXfhYFmGfcJUpoDLyzAh6vVUD3KVzg8DhA3Zyw6BMzmFz2VkBtkfmNwRdXj3Bvjc5svm",
  "key2": "4Wq1FzVA8r9Cf2pUiXvH4xUCHPv4iWnJ5ArAt2EQbreVwrYmrCUKZdpqGCZVG1gskp1tKfvcg3Vh6GgyJjv2nPE5",
  "key3": "5JrCvWiMjHWy6x1k2ZeGDbg9Fq1jpc2uJeGS896FguLm7n7it7mTCLxTgyErHQSGtzHfGok1H4m6Jgx4oGGKsix2",
  "key4": "57aNXDLRrByswo8F7kQJ8g9zayzk6STgz9HwTwrEWErTnqDdgD63HetL8CGdcZWVcn434PoumUSq1nvvZx397Ts8",
  "key5": "436xBoxwkEvjbs5mnyfx5rijwmNctJynirnQ434jK1qyr98dHBFx2PmxnAaX9SvBRhMRaAZJXjU5b9LQE44ngdBs",
  "key6": "5ggXiqdjhZR6vJ2T95wqFJ1KLP9x72iYh6ummU6ttKovyGpP2zYJJh1G8dRPRNyRsRF8SKDymYy3A55jVRXs53BH",
  "key7": "5NvgjYaHKiE6nUYYMvtUGDXcDt43rVTTocfgHmBXecBdCNwF1UWqJUCAqmZzpLNkZD7j65xznybBtFz9dWRyNjKw",
  "key8": "34uiZsxX83SrrgZqDRUDG5ZLukQypwqQRMSYwCqvdxMuzVcdcc9PsSsKEpva6ajajAs3KP7nvqc7J1v92Segu3qk",
  "key9": "5pHAMm2kxtprwLoAiY4oznstZfyQ8EziBwPiqX6ig2V2D8WbM2uy9EkWZT3PUKMj7LAvgL6jKo4kVjnXkDtwrQrG",
  "key10": "3R2XgXzYPW6U5yjWKZZ1nnPdAnA6gLedGx1qZMuZPXiXe46vhsFH8dSGCTTQ2YkMXNUvDzTZEAjjxaix6Bvg8BH7",
  "key11": "4tqA47JSuYUfkUBHgrXChTduWQcN2qLV5CnFH2xP6BAaVtbrjw38zCdbwEiPGDRXbtfXdGBpEvY9NzZpmgFTCADM",
  "key12": "3JVb1hv4fEEGhdWNQ6S2rJ81sJcoKQFrkNAxazT1Ykm7hTx1yU2tajQi6eZqUWwJDXJRgsTxq6p74E8sNe6JBoHn",
  "key13": "65JvYZdQiqkhkrWxwLqKfE2NMxkuiPMQ7nRUBUEAAQQT7GU6D47kkAhjxYR9ZjCb6ujjLXqtEYQNLbnuHbECHJPP",
  "key14": "uX97UNdJBnxSBqPxXGcAyNBzZmuAgJJk63hFW99NJF7zCQAu7vYzqukZ8Dp72QH5UJYzY1o8yiTFEWKaarjra7h",
  "key15": "4osSqmhdBSVdxwv4c2hyv8qvKFu8hVggKZEEy4oe3sRrbVoyAFJSAy1JEQo5DPVR2zb5xVyYGGA2cUR2CN3gU5ro",
  "key16": "3tpaSavo9fVfGs44WuhSopqqEH2E51bfHRDouCYbnSChbriRZ1cgSy8jkHmybym9Lz1cRoS2fTUrDm8BxyBU2Tba",
  "key17": "3LVC3mUKcmi73sKZS3qK6fM5Aee2V6d1SHx88vJMshLVAkGWMh4Bmnbc6eZCd4Y856DEwRjTuwYHCDtZ2dsMBx3x",
  "key18": "2SoMeWvD67DbR9ZLMSarmSXKepNzmzXa9TdWCeVmynxRxgGKqQijkaSx7uu9BmW3gyWVt1mn7ezkAV3ANffyyLgs",
  "key19": "2Rxg4dPX7aY48nubCWXNHDFiwiEQhFrQTZKjxZcv5VUPbRopgxc9VAwv9MW9AEkJbJmR544PKyfVEpKSF3GMefDd",
  "key20": "tqsMHhx6WXdsN3C36SSYqx6qvgJaZLFp8b3faaai1XZDW5iarktWwjFGByVuS9CU3ti2Bg1qUtLphYPVQ1otx2D",
  "key21": "2RMMvyp7NdzssxZjyTGnT6WuNDxoVcXwZ4CZDzSbuPW8LEAUaYz2ZiUqcKDJAfmCrMisMWugG8b74JL9MW6758ui",
  "key22": "5B8RAv9eRQauM3yHM6EnFW2Ns8GJKcWfzxkhBawg4erFsDDYEopwRC2kAz2kfW45exJfkZYhcQZcPWsFe9rgWeSM",
  "key23": "3AP2QnorjZpzVSwufXG9HFFxgmSV6gByeNKnz42SkpdkDXsTwj8xzR71hQiziqVxKLBge2ZJ58QRoraEGQnuF5y4",
  "key24": "5E86VunKCQXnZBMtdxHGyrrnsh29hShQQ9LDFyVWGxBn7SJqJMj44pPycuaLGhkbMWeBmUPrHakGHomHhEwcCfD1",
  "key25": "44dxCczgqE6kHkhRdR54t5k9twPymp44mtNnoghcsG62dF24qdMNgp4ouVT1uoiAnWebDmPXob6Y5jrXtprUV24T",
  "key26": "2n2ZPDgG3BVcqkWGfwXfpAv7q6nFP9SjJWNAGWii5MPd1xqucBHK3uEr4SPvYWnGQwczaB1dwhDLiC7zebc3FNDj",
  "key27": "5as1rwnJhTt6GGYMfnwguLJnzaYbyDfwGzRhMPbw1wF6s6g2Vzdw9B4wiBpWAeeaALmA91GrUQ2ML2aSCiox7LPr",
  "key28": "5oUcTJQWa5DkZYscNpWdtnoNKdNhuVAeeNC4CD3npK8BVDo61icJ2asJVAwLL8gY1Sh6YWsJbGfiHFjksKX1GtA3",
  "key29": "619n5vbMLMZYw83NkHVgms1Z3kQaKv9jDVxZ3M31cTcBRczcD4nWEYuTGeqmCNK7uHwztUETGtrE9xS4s38ycbeD",
  "key30": "oqeDRqPQVrMxjBrCxezG4J3s7MkL4hkYRhdsAfHTn3hPUytpqGLosmn9PJ5cqE31nUrqubWBzPikTEYRFPozsmd",
  "key31": "5hMBxT39J2gKgSBAHyx5NbSjMj6nzmUjVT4g73MftRdFb1jHZ8WpuVqSRwMYyZoBbLRAShR2nfk52aunnVXj3tZ6",
  "key32": "5mmq3Lq8d9niEio738HTnYSELgahGWuSLd5442mqhdgLjSED2XhfbMMPXhCem19ueX7omzoMqFcvcLrb3MPbpRAh",
  "key33": "5NK5M3hNSoLzr9Yt2Sbd4Ho47VrxaAWFXsFR6yygZ1DRPsuyxyVc2vkTGqVVy3osaX49xVGKgnYXUKkCXyhQmW5Y",
  "key34": "8kigRzQsPabPxKkv1Ry5CX5zBucGL7mNanM7XuK4qaiwkgi2mnQXscTCFoaNDvnHLmaXXPpKXTdoTr2kQSvotxM",
  "key35": "2UYgA9pU6AjvVfg4Asg2BActwWVUQPeqx1B8LMCLapQxRv3WiQYDebyKZweizv62ex3kWoCSFq67hPkjWXbBYVn6",
  "key36": "27XdjWKWH8aiaUbu5DXBjoQL9SLGS97CZuqXgEmyCej8rS5w3A7T9TjaNXMEYR6mNuTc2cWonXo69m1TLDUnGogp",
  "key37": "5F8HgwvtvMHN44yop2q4R78cS1o9QWB9drTL6m6wUwuH2TcZVXU4uvfsDMa9oSQgvJcWESPeWdYjuVV5SAejrBxa"
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
