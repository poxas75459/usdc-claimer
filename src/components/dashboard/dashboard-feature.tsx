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
    "nwHNonfrfN1AHTQuawkTgbLFzhmmsKsGsrPNr6gYmwpy8ieqa32PmpY6y8mvqWZoWvaNCHdUa3yC9Xc8YE5ksWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wRKgseQbnQbqwkZ9GmHLq3AFcQSFWHFsnkz8FBWQUkVmiCiUx2b7RY8oy7Z1oZ11yfHtVCD9RFNdY2yjwjADdP5",
  "key1": "5y2a2YBWbhytpUJQNXY8uw8UQuvGeSp8BpQUiUJVtTRQDnM4FqGnwYkYQyaPeFZRq7Jvw6Ggaempj2mC5gFvzAYG",
  "key2": "4aDL7DMD8P5yifNdT3UBSrozkmdmUGRod44SCjqpPukf3B1aiDyGt887c74QR4goTSGZdL6ReA98Q2L194iHZ5S1",
  "key3": "otmDRhoUPQRcNNBWYdejTkd6BsPU7yFcZkHTKibxMAdnNztmzhfLf9NMUMpMHLxKm7tLdterppsL4cgd44VB6ik",
  "key4": "3imXNFFfNPMCbqkrujJ3NGeofweFB68fNY8NfktZLzkPoJY7eNfjX1tpn84A2iobuDS3RNMEgeCVUCEP424HAm1k",
  "key5": "ZyNDS5eWXKExPpJ1HEvAWhUGuATaMZuCo5RFiEzQVBnHGquNGz1AvwYTfCETE1kr5VaaoGbsU4xfwcNwwSpUDx3",
  "key6": "SMPNFRRkV2G2N2va5TgF3Tazfp2BRdxsZ4UxRWL3nq6UBzgFkHywkQsUubdKpaoPvKeSLEdtLhkrGnYqK1iFhc2",
  "key7": "38bsggVFYk1L4HAJk6aZuuwrHBTBLuTUBFqfXEdmMsXtfPiJNtPf1ZcAy834wk8XaoHpAkZC8vXUbyRKMiaFnjbX",
  "key8": "B8jQqsa1KHGebXx3JeRuAmvGiGT427K8xaujXZTPL7zWndkEstkAeUny79CnYb55HyrXEodJraAQ1pVHEEewqqN",
  "key9": "3RxBg4TaXZb4oafxMdzuaAKwJz4vq3HKyefx4B1uYEeZPAF4LfY5mgKKKZPiQim6T9KrJXFoVsoycaZnMahkTkjh",
  "key10": "34m59WmmK42nRzxCDekbJf67dDhPUac9kcXbbpF8TS7aCEpdwmpkFcJT9AJBadeBP1ZpJ5c4Crrw1YJFsigj8qzs",
  "key11": "45tMZYSupqiCHdwgYqUJfb3gX7iCs1WbU1bc6q94uPF6qHKomJSv8zhfZcE46v11aBtKpFeCLo1TjcqJw52cGVW8",
  "key12": "aEmDTBqVM7JemxtNeKvEGQyQqu5cX4FftVYx27CAgB1RkrVB1GZXEYN96t9USdxXaRzpcdPKwiFrMfUZMpcDCj7",
  "key13": "3EyT8oBgeZAjUugYn9jdWM1HraSZCr43mk3WzKYqbXC3dgh2mXguUkvUAnyZyMqYV9r2Dr4VbtGMJ2AjdwUE6NbL",
  "key14": "aJswcjkxVwCrZgCtYeoy63R83oqEcLNP6fWhHB3Mpug9BV2okdcaJK4WDMiLTDDGNHaafpk5CyVJwPKZm59YMaV",
  "key15": "24Dh3mAmpX7xJh8LA3oSr34SwXws37Mcni3CDd3j9h3hZMXh9aqfY2R2jUSk2cDpKTSUhL5GZhkJQim8Qa12Tg5y",
  "key16": "66yDghY4YbznAfpvon73UK6VksvticbaT2ns5Qxs8veXqWjoDbSS1DZTTW99XZEkK4zXJZRwxpvwTHmAuAwaVhJ6",
  "key17": "66EPzYgAYsaVE4iYbrcjtEBg76oM1znmmNM6GEmiaJ2KG759owV7r1GLacYV25bNNSZcVVepU3qsXUEy8aDyjQEd",
  "key18": "3DRiAQCEpC1XZdS4QVhr8VWbKeJ7vHhRP8N2vjrg9n9Dj49W4Ma753zL461HXtwRvu4r7h9C76iPhuyfJPgiUt6",
  "key19": "quDx7jjCky8zuLzYX19eSF6yjsCtdNxDWZdwsm38AVUDgoHkTTJbn5bB8VUGwrKNMBDwAfT4HkQqcNxZZWB3EHN",
  "key20": "4t4D7KrWLB6sxoMh6XtqduQB2MHW4SL52ibB3HJtB2w22A2zgPSZm1PvMwWxwHb3wyHp2oAUYSNfDHt9Mp2aMVwN",
  "key21": "s2X1i8tBKthfMEp2kAjASnCjvjiJ7vvavJJSFKcJbjePcucdCVgeB4i9D6R3UUqPb2HzDpcYjDHhFznBbtGmwe3",
  "key22": "5h2rs7Ek5hsi6dNM8s1XiDkEcxkNCbh1sxQsDb2rX18SvqvfZSQEnNSx5ry4MFu2x26kfT7BAuZj3jcqUHeQyz1v",
  "key23": "573nbVE9CJtYGiVWwZ71hs97gY7s65SqqmQ8e1EABXzGpHofEuFMuHcQvayKCEPESEK5E5t3LWG3QURZWyvbosCt",
  "key24": "245NPBDtXBKsbHN7vxqD6iu6GhNRJChfK2EMCrU8rW1ADuSb7qB5tB4k9P34cUDnxD9jCBE6cwS6bKPv2my56ehN",
  "key25": "2HH9n51W2R8JpYv4b7sFBRgV2xZZgpnMmDnPXG7uTuAd1p7F9ZaYNWRL2HdBRLa8q4cWoTxTwzLsNJr8AEersx26",
  "key26": "2CvCAD4CcwrUUvM8XF6Z2Bvf1nU6zntZm1QPTneWrpxLTjBkctBhGkJNhjoCK1gZriCMrEuut2gyLbkncewXFTKs",
  "key27": "2mnBpSqavAag54kMbvPaUWtGwT3nQK5dGH2fCddTp7BiLU9LLxvsLyfMNhJrw4xru76e2vpauPnz27czuTJrVZ5T",
  "key28": "4ktWYr9t544nRdGZW9SLbDKbUpDzzndvwYQ3oHZrhCACm7psUmeU93htFZqa7WhjYKqG8Ysd2urrBtAkbCn5Vqb1",
  "key29": "c4vWtsoyhbTZYLs6osHFuqNgG1YdbB34bhHhZfJnGSCGjPHPY3ViBzwC5Y273Vyip9WvENTfXz4gr82Nh26gzJL",
  "key30": "5zGaAhEuaUBK9DYqbpbf4VunPKg7SmtLehs7RjtX5LVdoU734fwXCuiCsR7p41oEXABBvcFpyVbTkaj8Jee2vAmc",
  "key31": "3qEdWjMP6tEuSmU9bzJr3XJa8wAoDGP862za6x2YMKi8dBtiAdNQq51mXYCx1fS3MWUzqWb9eNZUzW2eKU1FJ1d5",
  "key32": "2xYhQ2jq3r3vMFAeuASRC32uiVB73776EqcV7kBz6dbkdnh3xXghkrfENZ5ZoJZPQYgv3jouPNNygNqWxQsXFcTG",
  "key33": "4qfHKA9Hk9YeGNvu4Jj3YEqx9znKdj8uww45vD1FKByr4K3QhYWSST5oMAEo4QvhHzcHmvJqwug8Gwcp7uABBxgv",
  "key34": "4vBTcgKk3zT2RQ9gEC8b2PfsrYRSSFa9d5wpZXGWY5F17rrUMcv5jEPXC2rskfhxbQZsieffSSmgmyE3UCmR26N7"
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
