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
    "4RumYjT4Ye6upanQqYFsbYUm8kwf4La3xUA4R45Xn9uRkV5VWMQYrgF2HYgZTuvnbkeg64W4Yb19KfxntWTSHkya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jhNAsKhWFQyExnmVRkhsiMcaJtL4KDQ6S1WNgFvBDAC7ca5V6c8wwe3NhLyZgecZ6KQD2DjkR4v4Mq36J4vQHRL",
  "key1": "5zvcbXqKxvwSuMYKZ3CoXSQt52gtGwpS1Wm5BbrFfat5FAWiis4NuPjTEEhmvpKehnFg4CDpUxbehAQnYRM5M9py",
  "key2": "5rJCshQJWmGCfYxdDRehGKGoBSrRFaGEkaenCGyEUq7pLJfKHV5VyMMMMWVp3JjM7C7x7LnkHmSFyzsswvqGyZ9",
  "key3": "P6H7Lg92DpdujWTXgrBnmasg7Ktp8qfwonJv7jP6Hx6NT3ux5SThV9cRJhVwZzwC4M2NYpHaJcZDb4ibx8UE3oT",
  "key4": "3BMQjhys7TwrD83pffTETVK1sxEKrKDrmRxQZiZvLjE5pZ6ZzGKYzz1UcQ1LidvBFNiXoWdkyXozn25WEZVvr63k",
  "key5": "3BVaJcz8Y8TQ94yyDcQh1Mn9xJCnBXpEfvb13Zdfr9JSY9DGGM6tnUZ7dJAKEtu4vxYAnJUQtN3XHkUDwkyV81Xu",
  "key6": "5Zrf3XswhXw39CbwmJdAKquLgHUMogteqNR42UgFeNwC8Pay2MRFoayMBeDkNGPPhLKXKd4QZE5sgECfKSTYPz8a",
  "key7": "4ThNNDpqLqyAk6hQmuNPyxNJq1am7GJZWgyt14UZwBzPMby5xE1UxuQ9JbBf169Spr4L7iBDLD9XPLy4tgyUfTzV",
  "key8": "587tthXPewymGaYHdWxPZ9MzjCdPazpvG3i2DBvoAbhkpQYZAojxoycSGiYifxBnnsgb4VxTbqz9ZZEaLckgKkXp",
  "key9": "5DzNnGnc93U1pNXfdXzq5nQGjkcwNX8xkDX8kX5mCrEvH97FNTGmGtFnFCUG81LFcWooVbxpPiXaNegGmkiAYNUC",
  "key10": "2CLzC8zhdpUNuNWDgZMP8LKsQ6y3BUjZ7LdyEpTg4yKhn283RTxHhigZ7MNWMDBsS5qFAyn4miwiR1ZtLTJHKG48",
  "key11": "5CxZpgsNiXqsJbUG2qscQAeVZKRnpgxZiVTXTL9s9uwBP7khV4wo1LHV1YvxcHoHeVRvAeExuk3i8nGjA5xiAz3u",
  "key12": "5BLbVd8VkE8XvKmxGG5de8zWivNyRypzxPcRaP2dVEWsUY1pT4TbcBBmRfD1vQnTeKh1qkHLZ3hEwAZ7hvjMno6s",
  "key13": "2iHsbsR5j7aWHbAy29E9K8wWVX1JrpGBSrprx4CcA5VXxrgJq6rKKnMGbznSiu8fTFxpfYft45khes4PwEs4Z1WZ",
  "key14": "4ABZMdGaN1WRjN4kzt3H7rXVDC35s7i45RFdxVtcohFEKFJNUknNV7ggdP33LRPyGzmkvCpiNyxE8RSF6PYaLn93",
  "key15": "3jKoRPteq5SiwNTx6Uvd3BxsbCXxJFkgWbdbVxfCd6FMLrFzJi4nvdfZuDQYRTaVwmc77aVF2C9yX7McJYvr5SjX",
  "key16": "5cMHVGvmCfNQRCF59yEJ95uy7R9dc7RdMYyzZBNYz1zQxSWaEeSBpiKdSGLK6UpRKdqSzDa8SMxaQpzNTnquVKGZ",
  "key17": "3wwFV88txqx6GpA1jGaHS1f8UywcRN4TuV5NGLFogyAPkWhqqnSh4TPYaRNEF2CCETpWdbae1kgpnKVZCbRrfo5e",
  "key18": "2eJZtbBBRNApSD3pe6NWP6SJfLogmGs7FWiQXjb3v5T3nRTJKo9eK3TRR26QYRy5sBgdJGVTgqyGDZPAGfmgN9rg",
  "key19": "5WC8HMiPBjFNpSEwWXRDY5LTsMAofFUNdAxkAheTfmAGbhv6if7kHFEXUxd2YwyoPCKe5UZtxDnT6EJtuMS53DjL",
  "key20": "3gApRAgMTypsvsPm6vJeMatisM4EyVpkDxjbApLqXMt5DUV4NZhAzyNb9ZyCNVZ4q8Vv375jucN7BpVDvfXJvY3c",
  "key21": "R8Z76cpvCYyRiYevnSmFCpkrUvGkHiMKytQWv8wZXh7m6BFYSUWPCv4dFJLgvGzcAM34yZQRyvCpri6ATnNPhSR",
  "key22": "25trDWmxS1R9GTGZ1g4PsRGYR85n94vNhQwZtCRwhGKJGd2TGqduityXt4Lc4kSgFagrCwiD5VGHKy6m2oVxQZPx",
  "key23": "4HT6VE6KJsjZjGeCpXqNkmFQ3udVE8tsBQJ3jzDMMDYX6upArpW3cS2CyQfejK2jK3ixRtuPYu3v2NETwvK6XsnY",
  "key24": "4UXEhEWr9UagM9p2BBEiC47yPrHTm1DxzVqNt2X6hR72zurF3qkLro3hs4yLArMihK5NG3WgnZTWAxTixDwZvgU4",
  "key25": "3dGkvtT9MELJAvwZThf5MrEpoWkED5CvtKa9XkNCYXW4zgeDg956Jgk4r8Z2EWBymxSs8dM4ibVBbyfRivMfWBk6",
  "key26": "GkdjHDT8zyMwn5NBXekT58yQCv6HmGkYjAkNFvXzrufTqbomVcU5bS9egR7ziUeyTdo5L4hcshuz2rFPGbfhJeh",
  "key27": "4xyg5c4HauuNutJM2sFXnT9uMuNkivRFDRN1gmHp3D65uTq7tKUxGG1QB4Lf4CHnPyGmfxp2P8HKeHyKFEz2J7sQ",
  "key28": "4TSNrStmwYTbXoTvuP5fGLRmsoHKrMU6FcvfeYLzPzJp9B3ynuS9Xe5PTV5oC4HcMkERFQcJiCY51mddV51Vat1z",
  "key29": "5pZ3MFp5d6AZPaQZ4n3nVvDZe5uKE8BSxY4ag6hQvjQ4CwoYZYziY7wTDfvWsohjmuGZEGU4MiPkzxHPcmQig9Ur",
  "key30": "5c465nVT7DKtbmT3YWkwu1JpWa5SgZgZXT87mjB35p5XP1xjdkDoAdMViV5yY1gwCC6VryaXZEFRUStqwLwy4797",
  "key31": "4oc9sXBZbG7BM4nGao4vz9LUFeqTb5EWXLUof89LQsVxQUU4dSVZkcNXJpzZfwj3fvzn4RDdN1wySySEqxDLBRjD",
  "key32": "jvmcycEh1pSVYSzwvSmzd7R6oeWzQJf47sYrWr3qVUP2AWmikcfgQTLaF9QnECqjxckmZmbKyT5HvHXrNVAC1A1",
  "key33": "UJoHPE4bohLTWiqMNN4qBs823bKoU82SqjYVLAHQGSB52i1Z64xYfuoyeKDVNBKWFP26WRRYuJWAqciBd1MzEx2"
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
