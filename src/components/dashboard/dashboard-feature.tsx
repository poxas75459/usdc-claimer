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
    "2MVdAkC2Q3AEREaTBUKymwmYYr4jKjSr2cg2t5SKdt6vbhC8ARMw4whNSB3ouEnYVcqSqdraVgZDmee65r4umnkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52P5GNZkdsEPwxtnFQVSAH6HcxfL5dLUhjGib11fhPQuUxRpXC5XoRP7HrgpJ9ZVmF282pH9nU26cvSzhAVU6ZSY",
  "key1": "5ocLzi76VtzqzXsCQi685nRaJNGqqEHPZ5eMPrbC5dS841GKTLmVdFJmKu67iG71rKRYjdnFWHvaWMT6G6EzvoTP",
  "key2": "6WUXtQaywWYrnZQxFXiW4tBACtdxqVZxMB3LpdHYg715pod2KHa61YVPouGVBTt825wcYwYex3f7N3CJ6jzw7yE",
  "key3": "369CPgEe5RRaNQvBe1tZ9zSjNHQJEGPxLjXndtNTA31YQS4CDXT5ritwyVXJdbwxREUTKZHubvLzJZhEXXJT7Tvq",
  "key4": "2iMyDaJcvKcwVvM4PoG9Xm3omQPzfeYH6DBdmZeAtbnzkGMij1tzkQxdwkDn7YRZ6EXArqkHAwAbcSFYBFkUJT2A",
  "key5": "1248KqiZKKSsVUWNBFgFJiLhpHXy6kgqo6P2qBQK7tQamvZsvcTWN3ga9NzKFBqEz5gUi6sh3nD5Aas1d6FPJRiG",
  "key6": "2mHkyyAgqJ9nkj6hH43ATnzrhgGSzHeJL859efDC2vm42egkcK3QKFMGtUZVPqnLN7wRE9S1er5HCxnkBygSFpWw",
  "key7": "3DAHxKvsdMExWWuYmsM85LbT2BcEbLdiMoKZEW4GcgoyF2ky6md4DDUvFXhbtD5ZaP8z7gMEVjYHVhK54FDRq7SE",
  "key8": "4DexbF5S27zUD6TqgfG6n5LghvntG5aZGtyVtUpwELmqRKbWNboGqNbUB94LUKexuvaWXPPTvtJdDxr7yLmCGkTK",
  "key9": "26XPckz6LAVtGD2HJdDQCVM8AgqoTmsfyyHCAZmpmkwo5WKpf2J1SZY5mQZXEz7YaE6K93Yn38Hz7mwJoXyiJ12C",
  "key10": "SsumfvS8qaimAPqQRxrY8jrggcWr8TCJSHtT6tdyPM5ZVdLhkW2PWZeoxQ9UcFB32wYGhq7gZVsvczzjWd9ufzB",
  "key11": "33oA6hbWBzBtwYQmrhxcSWrSDmJMofUvbjYCQSN2Nq1znkdAWG5B4n71aem6AJ1bvV1MkF6QGTTUkMgSMFNDkvjk",
  "key12": "4W7MHU23dy3aim4rMbQYa9DkFgEHMqdNEnpDf4HUjKB4YD8JwNrubkrN5xMTiepJ5cUPd1EstcnUKNKRT1iRcvoM",
  "key13": "3Mt9NSoGycpgYi9UYR21j3r3D5SbtRrMBUDd6kEKUD8eLFQxf4XGFLi78nfAMi9rWLeA7uwD28sRL3oDGWefHfDr",
  "key14": "4cqiC7aeAPzvRZqoEu6AdVDggAeRGWwrR88mga9n7cCqtkvXUHcWLgkAhQvARuny7PqdVB1K1xyqQnz2Epioas1v",
  "key15": "5jywGRYtxhd85otwzedRiYP5bejYcubjbRP5JfsMeYB18WxC8S1298UsPcgYH93tffGNiNLuRSs7TSHwC2HeAccT",
  "key16": "2swE5akbqgzUr8fpvkFUt2Lzq681tbViA2XYJ5D91auLJn4rTkP25e5ypZaEbJ77cAdy5PtrDNdVGkZGuW38ojTA",
  "key17": "38L8bjoEJzgkqyK7Rm7S6RwmsgwSoDmyup7LMRT2RQ5Lnh5QUMPbDzw7UGLV4sF8sGkGbWs2a37FV4LFnHVpfjNP",
  "key18": "5QfHhxkwG6mQwQ8e7pfjH8dxxTsAu2ArMKXkK394SGtJDgd6PaRNRL9JHhLKdKwFQKxjALrkC8ba6GZVzniu34r8",
  "key19": "5T6mSADkCvz8rns5fd24GtYyRgD4GhuAnEfMxPKcNnTsNyJKpVgfnwMzq3kMa1FMAcEs5poLYZUGKzPovPnsTTtz",
  "key20": "4kvwrAoYSApzHaPTN4cC9RLFnxZMP6cjsJiV5C1zwzLbo5LWWRxfci8Xq3i9iLFq7K7r8pCcDE1deswbWxTwkxrM",
  "key21": "3TKiAZNhVBFEgpHasx667ihcvrvYniz5ANgTmRUkRQ52M52oaBbtJSLAfzt3d8FvdmHGXRSxpS4smCH2GHFTsTr5",
  "key22": "4npbxYTXDYoooHYe8r8eYATVULb6E5VkBY8FgtZQ5RoQNjrvGQjVUF5AnW8F84exQ5nmdaxXtwoB8sgDve7Z8gTU",
  "key23": "2Voaxt8LQf3bcSNdLrd2NyCnRvR5UHpaydKpYTE1BqiDKognyKLPhcGYfNY9rdS7o8ddzTyvfWgBggtut73hukpP",
  "key24": "7fa4qb4vx8PvmR63Np3trTok8KtG6oXpMjFcYVwC7FYRQRNgDxBxzi7DR69rpKyJyUFM1V8NxxrFy6eBrk2CGGn",
  "key25": "2Hw18776WeQejV4heMAiLMTFx9U5Eh6NsM4WWN9TbKdsnd6aWUssRSHaQQLy7A4M8rWyuNRFTHmhqR9UMeUza26e",
  "key26": "33Fhwx85CEUFhJkmgttEAuvBGPJPvVbmoibwa73D6ow3DasVPAYqSJZBQUrDAeQeK8wtgc8zWzjokMnxo9r5ivuN",
  "key27": "3eZ9ZPR9tsfaPgakdbxMPRMbxRGWFXVj8dQbQBK3WQn6CjtCUGikCYsJ3K4un8zZpsNCimAkwhEUVw4qA8spRcHM"
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
