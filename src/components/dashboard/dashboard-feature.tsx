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
    "4UoUJRuwt3NycHAfDQEsr1bmjwfUNkKFSHhos4JxfZFZxFmGf9o6LJtJXbw7qiHSX556iwQ6JGuUy9QrLbjUXebZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24twkDSkde5yqLtpTiF1Fjo97B397SpBaTgZYhfRsyF48oMaHwG7BWcmGq9YAEVtWjqRUw6SbLSu5zh2ZJPrtsoK",
  "key1": "3qvDXPWWo34zgsuKhCWGNkFbRTHHCDHTZkmxzE39sENec6jGndu9q2qGJ997CtHbumdfDobKpxWSx4pumd4jpa33",
  "key2": "2rzbAFbrQ4s3unkmv6LYQkvpqmdy4z5uRSq12b9ZgBjyvziqDgqdqsiH7YNXJwo1taH5SsDP5KkNmHptvE6bwhKo",
  "key3": "3qx4CQtfCu3JzVV5irit4aLZcj8Sc4rXBWkuA6jYFXdRVFtxVndneq75bWWprU1ueVmptPtLMrgKi1a2pHFgdq71",
  "key4": "3Ej2yfsjNak9W1icCvkrsQYwXTPwNmW4qRzi24c8ut2yvUj3fjtsJDegapBDCsTaadbH7gSGGPoQZhGNSzeJbyD",
  "key5": "2XFzXTT5QtVxggXjNMAhVNpqPew6rgkfKxvkw4p8xpZD4DSvUG5EyRHQrYNFgtkCaUR9YhvkqyHoNgfeS3mqsKo1",
  "key6": "2hJpLMWcgdzpDqFpqCziZ2PTrD1sRqEohGroCZxoN5sYRSkAWSmzTSb54QnoRKXPQrpyQFwq8Ydjy4EwWKiCkfrU",
  "key7": "32X9tmnfGJ478Yospc1gUkpEWgsdN447ZkvGLYPcLzj6cVQagZheiKaf94L3ym12D9SuyRust6TFnxoR7HNXzacJ",
  "key8": "2DBgA1DBgADNyoTAXWXeqwYJN7enguT3Q4zZ4NE376g3JhYUmhqZhNjeKPEUbxQc5FaXyq8yDpJK8JWHZGyS7hgM",
  "key9": "2KoAGySNfpYefyWQA5ZwzaME2zuTpworKMxJWXYJ1G9TnSJLbH3gRDhANsPizNNn1uS2otTZD3NK4RhSe1AJzjFf",
  "key10": "5Yu2hERfENCg7xK7crWH1Eyr4r8641jrCn8M2TDTfVQ9Am8GCkSH9X6q3GgL4yoZspwcSSsz4Ezs96d8wmTTxrnq",
  "key11": "5orzquP5M6jfb17tTM52qD3JYXLXrUiyRgx99WLCJtywQ4MnK3yGumLvomvoveH5s5mo3dVgaYrcwhnVW9Gkya7m",
  "key12": "2jVfmZsHps3axscejoUoeekMtRTZS6o2VesZ6FbUsWPSp3ihUmU8GNsPyrYQgNcswGjaTuLfTXCoN9pq3jLK4GVe",
  "key13": "2pWsNpRfPWNUeHuy7JU8ZTSQxqdqkVbFE2jDSNZMtAb8TQLPjZ9bUVZVDV9TjyfwG8qa85wSvepmD2FyY8aSBkXy",
  "key14": "4ZyjED2qLmb856TH5h1KfnHoEi2H5zuP29TMFH23J2Bn6TFKSuhPQ9uLMZDE7GFZDJhtNcDr7rJZuzhNDYgvRBcS",
  "key15": "5GuYGoKpg86HTCrNP9bziN6BNwPaTV5KWQBMXGbmg3hrANpmuoJBeyB78YvMkwmVJfjro6EvJR5NurdxNj4rzPSf",
  "key16": "4LSpd6b4zNr9BbAwcLKtsgEJvk34Cf4y3caXKeHSrUnBopSdiJHSfFU3m2MGrdrEVq4gPdp4pZeDGHtE4Vud9MSy",
  "key17": "MTDRHj3Cgyre57xDy4GRMy4LbiaWgkWeLCqGUMAWPRb1B5xuE3UumkdpNWX9WbxRJFNJ5GfWpw8QJZnovngEXkg",
  "key18": "63z5zupdgWkMxM2u6VZx3766Svh2eKEyEa7QZxw8rdzZ5VVJbq5CdKw1dTrzqRsmD6pbfGDDxh5ucCK2XkWjNrMg",
  "key19": "56NoyWFg7pLBWfkgAMPQsRpm6h5sWNyrWYwqegkqSzbpo2EauqVLgizyVE8MLF9jku4ZowD7QXUZDBz81qEMDVgH",
  "key20": "4HMRN5hj2Jir417cPauXFeb5yLQa2xxQFE2WgVnFKeFA9UvnRQr32hG7Tq7f5u8332sTjxrR8t9YyPhm4a7WXGcE",
  "key21": "3WDQLTnLCT49ndFyFaBMGv78ULAEFuQdSGGrb7Gi48ZqS5hMfVafzBVBWEtAbHyehbfhm3X1uvNAsAFnwPT5SFQi",
  "key22": "5Bym1VQ975XdfNAVLDSkVkHyUceqhHqDfRKPUEiZMENtDZEeJ2D2Tpx4ZuStHepJuXqWQYqykhzGWeqppZCQGc5x",
  "key23": "3G22DqegYh11kXXt8gs5hVsbzGTgzzwM4pxh8HZrPCxMzRFdxbdDxs7bYLsLyx6iiox5LkqTRxWgRqz89h6Lv4kL",
  "key24": "3ws3oAutXF754kuV5s8G4aUuBjysK8aZZxmEpnW6B3Xp8ddd4dLMkZFo1HdRpgbnbMCUP9xWGZnP3kgW4g2DjgnF",
  "key25": "3EAAWE9j2Gstc2He7ZAYwXUqX4esEqvaxez69mu1vnsFWGn6CtNk9e39xZFdUoqeY4Wtdyv5NKziWwmsYuezJZpS",
  "key26": "3s2g71oCGeAFthxVjnaWa5ycSuFA1iZZsSYvMzmWVUgGTFDNFcih41dYJ35iWQ4zwQgj9cXcVTpVCge9Ld3QQWnY",
  "key27": "5wJHcMQmb7zivYG7dyXeXsduWLkF4JQiekRKnCectUWLKid2gSz8wTNgAhUPJ9inGiGXZ7Z7MwEQtULgmNrtGzQV"
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
