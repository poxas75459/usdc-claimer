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
    "4y4caahRQTADZRMuiGiCsXGWRsMHPk7dsdA113hTzNcdWc7CjZnvuhyuhiRQMpNJyY9LiysgqHQ4vjA5pSDdbit1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LiW8JZg6ybySzHj7iDoBYcrpF8daXEBbjCKKGnXDm6uSRvGqHDDDENxhF1oyKUgtDZ6bZzDXWY6HHNi9tXL8ZE4",
  "key1": "5r9ysGK5ngMhoaiEYhmSgMYG2EBwGG8zZJ67WqkvdxHdv9Y2tZAKe6QeeAqyoSt6D4JnGKJNXRr9QFZcdQuFQKdQ",
  "key2": "4XQkkhxeU8LudGchhnyg4JmR7m4EXFx4DgL8XzqtzkKBB2rpjNpZFPXpeXkxgzx9HMbHGpEHsJkRjACeciH66d5W",
  "key3": "25WtVWJgeHFtHB5LRJAxLXUZHcg5B4TzsBynJRt7iuFr8bD2CveBdFsuNVZfNag6T7B5PjsbTR76pCd8UNcSfjQW",
  "key4": "2UHyY4WTqfVLvxFSc8zyweMgcnsRZ6yowv1wXAPWV3WMG8HbDqisRvdEbjYBEeK2hEMszxpviUHocxfEA4sSGx5N",
  "key5": "2CnVBDnykJW1f5i1QVjeedmyUxP68R9vXBK2AFbRRGcHx8RkbgE8FUKbneAaYW1gqUTmV7B2wwVEHB6xTGcBPJFW",
  "key6": "Q6kMLM1e1SfARYXFsPkA3gdxPXe8vjFZwubaTr6XAFAX9tE7snP6twa8CGYC45kMNpCtizFQ5cNAXZG5hrNWMzg",
  "key7": "fvEuqukDv9BQMhMuKjTWaz5vUYE58wCwd1WXs7c9Kh1hs33zzidXxAqq4PcDe7qNo6HYYKpRL7VGMCKBCs4ESzm",
  "key8": "fWMvE6Lrz4bBsunwgfZMuMFgS6ARCQi9y1g16ftXuXLJEjt2M3qGbo3SquApurB4TmyQpCTu44whZbgW43QdupH",
  "key9": "4dGy9WjmQH4y5BF4sJcrm6FHkPxcodY2ANPeLjfEVCh9U7faGLnLdTrF789NgmPoHMNEwBwW8Jbj1h31uFDfc1nv",
  "key10": "22vDdSyHx5S5LFC51bCJFdccWtEGeCFdcUH1w3HgYwUMUNnvLo9jD4AWxD6SqqnCtYXrJZ71tokqXtXqxwBzbxwz",
  "key11": "4mVky6Gd8i1Ydzuj2rkfd7HorsjiHQJfbWFHEYyQ1avzi9mTnTuj9X4gaoQD7L5gt1buUBVZdF9h9y7MscdgBkz2",
  "key12": "4c3a92A8ie1gyaGRDW4qxacv3uRpTgivUD7itdKCnNUEsCwkZMJAs3ks8cCC8HAjsdNzWy7fDdBqRRAVjxXAPCV",
  "key13": "5s5h13L75Uts5DzCoD7Cj4W4dNP6nMo1ec3oiYAsVaxiKg7QSVKDWiuSgeR7wqV546ei6CAFmVjdZbVJVPriYCLV",
  "key14": "4CCmfTYsXRZDXysPMnu9e8Tiz4pczsv4kQASVcR1VL5KtvzczW5y6Fvqceyh8DTc4GyLwNbKUXjdC45RB8r5DTXb",
  "key15": "Zobc6ja9ScX2iD2HTFKKbqPbKSEHoBkYoYBX12iCWaH6wT13P3bUJYNT99U3pfa1LDNm8BsCsRZcrM6d2s9x1aa",
  "key16": "2dwrayLdrYeiBNbadPTavMhkp7UTjdeEbuPvWVrVoZJMfZXRRtZzeiJTfFT4Hfy4VLd4YGSRN4o9BeHNQtTnpi58",
  "key17": "2fq85FaCfAWXsvjQLN4cqaNzSWcpTEPyA1tuCX9MURYb9kQwsru7wgiE61dY6aNCT9bTVrFn8NE2hk4VzhmDAETK",
  "key18": "5csT83DDYqnaAQWTzCMSRuMvUdXFg32JAdd652FKMCwrRfxgsB5hiAY5eeXLkuTrRp8tAxUJzcTBZMScKFKwdSya",
  "key19": "5Lj5cz9GnukFdcm5NyKqRWiTFkkSDJstyP6UmcdnYqaK5EVb7fGbK3Ma6QNyj8w2UfkgehSemujhDoKpPSWEwDWo",
  "key20": "51gsLVmtnDnrh5TB4zJssNiqBsYUEjyy7Lw2wEJjhX7EXBdNeuX2FXUQ1K8nqZWhm1aviGjcDbY1W2r3U71qpHEr",
  "key21": "2qMzrecySFpSYqrPLL9RJohJuDrkn7wgWr9eDqwDF554B1eSrd9GoJpuorP9LX7KLdy3b7ZQvv2ZtEpvjuyo7741",
  "key22": "qr8fWCjCWMG4oqBNvETNQPUgV1YboLwQ1Lx2SoEvPDmvEjXzvx1AfXkvouXdUeZRgNQFBR2CcfhPZ3zfSTd5K2e",
  "key23": "3PxdLpwZ7w3PeLg84x7GguKphnLXwA9Cnwftc5eyzk4MJDrz9Mc18Hj5scRCRwuSCv44x7XPgR5jS9vuuVHwcKtH",
  "key24": "GS5iWryYsTogvVn976kqLDNT9Njsm7QccV8szKPkmtq69hWB2J1Wnmcg9n4pA1Mh3jdLeZXhW8eynhxSuj82yJT",
  "key25": "ze6ZAm8sbF3YZ8Ci3VA8HcvCDBdJcWRQ2DkiQzrT58DvT8kksiHBU3KD6sgozqkyvhv5UFGTCosCdBrZQi8kqyL",
  "key26": "4oE1X8KwCukvubT5dVJ8LnUwin7j5UKkouw2U1NJBhwaBy9NrBgh3rWMGq4Kw8Xi21pYfCwhMxJyTiRWxjhJoJUM",
  "key27": "3VS4KAzDmqmNKBqHRKQP1eN4xyuDT9pStqWKt9RuPyJcGxe4e7NTMCrDoixfR3tHiCGpf7oQ6RCxpYQ1f83wkTZz",
  "key28": "5jBv3uV4hoJfUun55izteRZAJVrBaGBMqfPojvEr6VXN2t9RbmgFKHP2wVdU1RcrMXg4nkvGgEyRtmMchwApqMob",
  "key29": "49QRjxTCGCMgUSw5RcAXze2yAT52DS9SERgbqoHqV55XAXyUDvs24LepLG221mJ7UixRE2bDXB7oBcj5a7ARGgBd",
  "key30": "5ioqdQVRA4mULhgWKFxCFezvJMwshu3GUW2AXCxuqCwvWYXKMeeA46SmGPRYwEZAkHujnCKjkZRPyMngLQ5hxVzS",
  "key31": "2PzHYi7ZpbR9azSCrEueodYBfzNYKoxcE8vt9G6BUjkJ8chhhnU3DWjF8VzkVZ4tu2xN14YVxYgNNLQtnGVGbzeN",
  "key32": "5sjcXgXPbLA9bAySX6vJ2QdcuzQ8ghEbbFMAbcttwh3MEtackBYv2rg5WkjihDeJknbBfhtSeDwTyv9TEZ3yajqv",
  "key33": "3C83hZBqa8cyEx7ayvinyE14sk2E7vewmY5bJZU44hHeFMAgEfShyRi3Efj5uHEgVr3xBWXSDJaFCnSycGjcAMxP",
  "key34": "58grorsTJhM6ySRnfN1n3b3i8fmMeh6sDCNdgFxeAbEtLuqHmcGWg6M6fef82BwNyJVqUxT7HiSsGpXSD2dD9b6X",
  "key35": "4ptNJGx6QKqzAXsyigzMxCV7qfHjx93Moh5Y5xBzVww3XuoDL2YPhZKhWCBoz1enHpp7aHXeTG1WtxZgWTVxDMto",
  "key36": "4f52Q8GyHuSU2Q7xGrzdKX47xnjd6tDGZyNsQYhWadm5hms6CRgDmxbE89XndfSwhBXw7RUJDJFSGNSzyzpWFoh"
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
