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
    "3FkTzoBL42388VB1PhPv7MftpTyRvut8iFp7UKYrUbDvk9NznxxgegFNqfmw59BVKxC11TLQDThvhYz64soZWECU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rhe3PGGRCWnjLaX5Pc1VyNurimSmprMLjtZyrGJvmNn4GMmbHhY5jDjiWzxHhGaRP3bWE9M6oKnT8tvdiB7XDai",
  "key1": "3j8Hg91xsKPjZJqrtzt75P3pTwXUcr7svUGSDHKw3hJPaAVysU3D9qbXXzSKmS3LdreiKLAPc7vYgkyJpQWThX5k",
  "key2": "2ThvmjtaR6aqj5XoDU2npo1nXgy53Yvk5cP26p4L6shgcL4TQjXJJNmXcgrV5dNW9dAGABa5oJejYWUvfCgURbwo",
  "key3": "2LTfJe1w14isP97h9Ft6WELu7GqAdLgeAtZvGzkzxbGGE4bfCNdMjAiRacHsKdS95yMZkEy6zYK8XQ3WUXdYmQ3b",
  "key4": "3MuzEpQdjtqAiEmUCG8R6y8xyPDXrSUbqcQa4o974vASgbXBAN3ViA6i99C6oQVuizExHWgFa5Nse2rsgE5yfEMC",
  "key5": "29DjXvCq4Bgrh18VLJKRvFtSwSmNPANfWH3m13VbgqYUTzuHGJjHa37CJGDFBTMr5MYS7PdW1gokQZgxMoAxEGAZ",
  "key6": "Yf5m1umFhEiGvkZZ6eoYHx8jP3NrdmjmiDnHKweUx27cSV6G1BTYeV7C39Gj87aqAqP6knakLcsvWeDnbJRwtFo",
  "key7": "2xJt8XKWNmoPQxWx5zGmMoPVbjmVY9k1iZFr2YJwhMBbL1sKTDP2x8hU7WHeh3QfpEHzCxUhbexTVBiLJkEAAMnE",
  "key8": "2Rr2mKuGzeFH93y4Gs1mjLYYem9TQTRahh35FJH7km4jgKoYoQXZpbV2fZ7PDjcKXUsLAGEhgffDU8SqR6F6LRT2",
  "key9": "4FAPK6RRVcJx1C46cK38mSZqQkiYS1f4muGUzmVC3kXwVWYKEXvprgMXF9nmQEsRhcX6KLdrhPt8d27h6VURUegH",
  "key10": "5gSPSqfNw15TKPbpzMLUnAXFsyuknKk1SWSVr6ZK5eyShmmjXgSgafzDMh8TQRH2sL6BGZwC5qftP6q7iT5mGZCt",
  "key11": "4HvbysRPW6wVddQMRfEPTk2nBHHYr27eHTg3TJAExcubSqRYmvkXZ1u1d2G7KgGnCsofwt3ozdXwYVxTZX9ba4AW",
  "key12": "2pJJMq8QwLRkgKR6hFxo6x7ckuBoGDb3vB4kxqZbzcpQrq7jqfpdei3kaqKuAjSWmAmnDkSpYcsWXH8yLg7cEVth",
  "key13": "mgsL3aNiJaPLkJo8cspwNE4WPjkWLWY8e7v7VziTYtuJvM2wzY5Y1nAEVh9eSEBnKqZU3Ed1HsZsmqjmKYSPsvL",
  "key14": "X9sq9eJMGQHpit4dtJwRv178s6eqXrnCamSsM14B7D6KYqtZFcmt2LB4EARoAciRA6U9pU3aKDdwchsWVn2qYhZ",
  "key15": "5RVaXd7v3tPsaioS4xLKTmPq3LUxuBgowKuCyCrE5Sv8b5xKrfxydRTuXEsj1jJ7NT1aurePxcYkzVRSMrFwz8Eu",
  "key16": "3dMPWgFXeLMJiChjbmUDmKt7a8bKxSYmt7bSQF2nFfd37ddakxySbjtB8QPBXCYqKHsamGf37Gsu7PYiSgZDhTiD",
  "key17": "EkVDN42FNPAVLRdRWTtXuCBJaeZaUYJ6wuzkKQwqgBvKqmZf6kDqBFrWEYFrevQ5mphsUj3yk3pSEtYc7jrvNAG",
  "key18": "qN5bu6sMKXc7x6Acu17cqE8VkGV2shUbBhf9rukXrwRAyLzJ5PoVAahEWRCUJiFztGckXeNzkLMbqeaJVejVzyH",
  "key19": "3tEGHGajroMnjN66rr81wVPnQFZdkaRwARTtjy8PhJcKHT3EJTxqgR1XNLQqnadJdTe4apKfK6fJ3vjWHZkyKkfC",
  "key20": "v7ECvj7T8ya1Jic5m37FjJ9GigaKS2YJUJK8kttHKKk9kNb4UbZSURSDx99zvkGfpejWvznqYGt7kuo2zczjbX2",
  "key21": "25BQdr7v4F1Gt3iYmvbfwG36SerwWyFnnyuaEeM7CxivuJ5aktyGcYWNN15QU6BGGFV2xm3cwQsNkyofsP3iadNX",
  "key22": "2P8YRi1nEJCpp96YiasM5n6VfAckYpWtnf4Ex4HgtAAvfGbWszB3SbF6PCmzvpniiZNDQkePTawBL7bw671FL42X",
  "key23": "52Pnnr1iG6jzMZDL6xrbNcaYaBh9xScFmUgBBiHYinhTpyqFYcrC154GQabaHdZmQwYJXWsinUrtEhkBMMffdcCV",
  "key24": "5kRd3qhfHaxGYV8nQDUtHuh1ohywQ1t9BFdrLWExFJ1L2MGfiuvdYVoueHp2RuQ5CyaxxUv2aykgwN1aChQwYBrQ",
  "key25": "2p55aXG4xzt8p5tMXBYKL7J4WufRKdFyd9g9i8uEybTPoYPNDsmoiKuQrwTUfmsiFErEhzYS8xhW6bEQ8SoK93xN",
  "key26": "oz4GhdWw3mtcoQ7psRy5HYvfeE2pM9hQBtLuymoBeQfExwhu1JX6RYeDUgJvmKmno2Qs1Z4Ek8VkB6ZKmWYhC19",
  "key27": "5JoSUAzqK5TJ522mxsxzjBxUht5AF19dwWKgUCR5mz39yxULmwiYpMA6g4XyMwCk1V6xmXev6c8tT4weMN1BpTEV",
  "key28": "49CqpzgVu5SuH322thp6FAhs7CJDx9i9DKWdvLGzDnF9zNeiG6atNKmijte2b2vtkV2MrbWgoY5BZTAYWpNwXMTr",
  "key29": "5GP8F2tE9nVyRkLixkJJXdNpjPH96cqkSGumvcPnEjjXvUqfBQm9VMGgozFyc5SCSQYtakgfexT5rN4f59CzyHeg",
  "key30": "5tkDFrYVJSBbBsxB6qC2P7hLZeDZRptz3HGrf9pMFCdqphWsRyLG4VsSzyoHBfGpoYG7DpQJjpWZGsSckfv14hoq",
  "key31": "4RP7TSeiNL4PTa6hmF2bxh5cL8Qj4TaeeAVUz1tLjE34SfuFagUE9LbpaxFX62wrJP7zDnLcVmsKJVtgBbH7ftEG"
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
